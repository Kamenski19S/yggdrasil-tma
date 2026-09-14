(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var G0={exports:{}},Cc={},W0={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),z_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),X_=Symbol.for("react.forward_ref"),j_=Symbol.for("react.suspense"),Y_=Symbol.for("react.memo"),q_=Symbol.for("react.lazy"),wp=Symbol.iterator;function $_(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,Y0={};function vo(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||X0}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=vo.prototype;function eh(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||X0}var th=eh.prototype=new q0;th.constructor=eh;j0(th,vo.prototype);th.isPureReactComponent=!0;var Tp=Array.isArray,$0=Object.prototype.hasOwnProperty,nh={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function Z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$0.call(e,i)&&!K0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:t,key:s,ref:o,props:r,_owner:nh.current}}function K_(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function Z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z_(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+iu(o,0):i,Tp(r)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&(ih(r)&&(r=K_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+iu(s,a);o+=Nl(s,e,n,l,r)}else if(l=$_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+iu(s,a++),o+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rn={current:null},Il={transition:null},Q_={ReactCurrentDispatcher:Rn,ReactCurrentBatchConfig:Il,ReactCurrentOwner:nh};function J0(){throw Error("act(...) is not supported in production builds of React.")}dt.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};dt.Component=vo;dt.Fragment=B_;dt.Profiler=V_;dt.PureComponent=eh;dt.StrictMode=H_;dt.Suspense=j_;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;dt.act=J0;dt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=j0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$0.call(e,l)&&!K0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:o}};dt.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};dt.createElement=Z0;dt.createFactory=function(t){var e=Z0.bind(null,t);return e.type=t,e};dt.createRef=function(){return{current:null}};dt.forwardRef=function(t){return{$$typeof:X_,render:t}};dt.isValidElement=ih;dt.lazy=function(t){return{$$typeof:q_,_payload:{_status:-1,_result:t},_init:J_}};dt.memo=function(t,e){return{$$typeof:Y_,type:t,compare:e===void 0?null:e}};dt.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};dt.unstable_act=J0;dt.useCallback=function(t,e){return Rn.current.useCallback(t,e)};dt.useContext=function(t){return Rn.current.useContext(t)};dt.useDebugValue=function(){};dt.useDeferredValue=function(t){return Rn.current.useDeferredValue(t)};dt.useEffect=function(t,e){return Rn.current.useEffect(t,e)};dt.useId=function(){return Rn.current.useId()};dt.useImperativeHandle=function(t,e,n){return Rn.current.useImperativeHandle(t,e,n)};dt.useInsertionEffect=function(t,e){return Rn.current.useInsertionEffect(t,e)};dt.useLayoutEffect=function(t,e){return Rn.current.useLayoutEffect(t,e)};dt.useMemo=function(t,e){return Rn.current.useMemo(t,e)};dt.useReducer=function(t,e,n){return Rn.current.useReducer(t,e,n)};dt.useRef=function(t){return Rn.current.useRef(t)};dt.useState=function(t){return Rn.current.useState(t)};dt.useSyncExternalStore=function(t,e,n){return Rn.current.useSyncExternalStore(t,e,n)};dt.useTransition=function(){return Rn.current.useTransition()};dt.version="18.3.1";W0.exports=dt;var St=W0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=St,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),ix=Object.prototype.hasOwnProperty,rx=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ix.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tx,type:t,key:s,ref:o,props:r,_owner:rx.current}}Cc.Fragment=nx;Cc.jsx=Q0;Cc.jsxs=Q0;G0.exports=Cc;var B=G0.exports,eg={exports:{}},Zn={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var j=N.length;N.push(W);e:for(;0<j;){var he=j-1>>>1,He=N[he];if(0<r(He,W))N[he]=W,N[j]=He,j=he;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],j=N.pop();if(j!==W){N[0]=j;e:for(var he=0,He=N.length,ft=He>>>1;he<ft;){var lt=2*(he+1)-1,Me=N[lt],ie=lt+1,oe=N[ie];if(0>r(Me,j))ie<He&&0>r(oe,Me)?(N[he]=oe,N[ie]=j,he=ie):(N[he]=Me,N[lt]=j,he=lt);else if(ie<He&&0>r(oe,j))N[he]=oe,N[ie]=j,he=ie;else break e}}return W}function r(N,W){var j=N.sortIndex-W.sortIndex;return j!==0?j:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=N)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function x(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,se(A);else{var W=n(c);W!==null&&J(x,W.startTime-N)}}function A(N,W){_=!1,y&&(y=!1,u(P),P=-1),p=!0;var j=h;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||N&&!U());){var he=d.callback;if(typeof he=="function"){d.callback=null,h=d.priorityLevel;var He=he(d.expirationTime<=W);W=t.unstable_now(),typeof He=="function"?d.callback=He:d===n(l)&&i(l),v(W)}else i(l);d=n(l)}if(d!==null)var ft=!0;else{var lt=n(c);lt!==null&&J(x,lt.startTime-W),ft=!1}return ft}finally{d=null,h=j,p=!1}}var b=!1,R=null,P=-1,T=5,S=-1;function U(){return!(t.unstable_now()-S<T)}function I(){if(R!==null){var N=t.unstable_now();S=N;var W=!0;try{W=R(!0,N)}finally{W?Y():(b=!1,R=null)}}else b=!1}var Y;if(typeof m=="function")Y=function(){m(I)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=I,Y=function(){re.postMessage(null)}}else Y=function(){g(I,0)};function se(N){R=N,b||(b=!0,Y())}function J(N,W){P=g(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,se(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var j=h;h=W;try{return N()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=h;h=N;try{return W()}finally{h=j}},t.unstable_scheduleCallback=function(N,W,j){var he=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?he+j:he):j=he,N){case 1:var He=-1;break;case 2:He=250;break;case 5:He=1073741823;break;case 4:He=1e4;break;default:He=5e3}return He=j+He,N={id:f++,callback:W,priorityLevel:N,startTime:j,expirationTime:He,sortIndex:-1},j>he?(N.sortIndex=j,e(c,N),n(l)===null&&N===n(c)&&(y?(u(P),P=-1):y=!0,J(x,j-he))):(N.sortIndex=He,e(l,N),_||p||(_=!0,se(A))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var W=h;return function(){var j=h;h=W;try{return N.apply(this,arguments)}finally{h=j}}}})(ng);tg.exports=ng;var ox=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=St,Kn=ox;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,la={};function ds(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(la[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Cp={};function cx(t){return gd.call(Cp,t)?!0:gd.call(bp,t)?!1:lx.test(t)?Cp[t]=!0:(bp[t]=!0,!1)}function ux(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,i){if(e===null||typeof e>"u"||ux(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dn[t]=new Pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dn[e]=new Pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dn[t]=new Pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dn[t]=new Pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dn[t]=new Pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dn[t]=new Pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dn[t]=new Pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dn[t]=new Pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dn[t]=new Pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var rh=/[\-:]([a-z])/g;function sh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rh,sh);dn[e]=new Pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rh,sh);dn[e]=new Pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rh,sh);dn[e]=new Pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!1,!1)});dn.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function oh(t,e,n,i){var r=dn.hasOwnProperty(e)?dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,r,i)&&(n=null),i||r===null?cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),lh=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),xd=Symbol.for("react.suspense_list"),ch=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var Gt=Object.assign,ru;function jo(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var su=!1;function ou(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function fx(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case vd:return"Profiler";case ah:return"StrictMode";case _d:return"Suspense";case xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ch:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=px(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return Gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&oh(t,"checked",e,!1)}function Md(t,e){cg(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return Gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(Yo(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function ug(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gx=Gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,$s=null,Ks=null;function Ip(t){if(t=Na(t)){if(typeof Rd!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=Nc(e),Rd(t.stateNode,t.type,e))}}function mg(t){$s?Ks?Ks.push(t):Ks=[t]:$s=t}function gg(){if($s){var t=$s,e=Ks;if(Ks=$s=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function vg(t,e){return t(e)}function _g(){}var au=!1;function xg(t,e,n){if(au)return t(e,n);au=!0;try{return vg(t,e,n)}finally{au=!1,($s!==null||Ks!==null)&&(_g(),gg())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var Pd=!1;if($i)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Pd=!1}function vx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Jo=!1,Jl=null,Ql=!1,Ld=null,_x={onError:function(t){Jo=!0,Jl=t}};function xx(t,e,n,i,r,s,o,a,l){Jo=!1,Jl=null,vx.apply(_x,arguments)}function yx(t,e,n,i,r,s,o,a,l){if(xx.apply(this,arguments),Jo){if(Jo){var c=Jl;Jo=!1,Jl=null}else throw Error(ve(198));Ql||(Ql=!0,Ld=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Up(t){if(fs(t)!==t)throw Error(ve(188))}function Sx(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Up(r),t;if(s===i)return Up(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function Sg(t){return t=Sx(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=Kn.unstable_scheduleCallback,Fp=Kn.unstable_cancelCallback,Mx=Kn.unstable_shouldYield,Ex=Kn.unstable_requestPaint,Yt=Kn.unstable_now,wx=Kn.unstable_getCurrentPriorityLevel,dh=Kn.unstable_ImmediatePriority,wg=Kn.unstable_UserBlockingPriority,ec=Kn.unstable_NormalPriority,Tx=Kn.unstable_LowPriority,Tg=Kn.unstable_IdlePriority,Rc=null,Pi=null;function Ax(t){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:Rx,bx=Math.log,Cx=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(bx(t)/Cx|0)|0}var qa=64,$a=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=n&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-_i(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_i(e),t[e]=n}function Dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-_i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-_i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Rt=0;function bg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,hh,Rg,Pg,Lg,Nd=!1,Ka=[],vr=null,_r=null,xr=null,da=new Map,fa=new Map,fr=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ix(t,e,n,i,r){switch(e){case"focusin":return vr=Po(vr,t,e,n,i,r),!0;case"dragenter":return _r=Po(_r,t,e,n,i,r),!0;case"mouseover":return xr=Po(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Po(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,Po(fa.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=Kr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cd=i,n.target.dispatchEvent(i),Cd=null}else return e=Na(n),e!==null&&hh(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){Ul(t)&&n.delete(e)}function Ux(){Nd=!1,vr!==null&&Ul(vr)&&(vr=null),_r!==null&&Ul(_r)&&(_r=null),xr!==null&&Ul(xr)&&(xr=null),da.forEach(kp),fa.forEach(kp)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,Ux)))}function ha(t){function e(r){return Lo(r,t)}if(0<Ka.length){Lo(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Lo(vr,t),_r!==null&&Lo(_r,t),xr!==null&&Lo(xr,t),da.forEach(e),fa.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&fr.shift()}var Zs=Qi.ReactCurrentBatchConfig,nc=!0;function Fx(t,e,n,i){var r=Rt,s=Zs.transition;Zs.transition=null;try{Rt=1,ph(t,e,n,i)}finally{Rt=r,Zs.transition=s}}function Ox(t,e,n,i){var r=Rt,s=Zs.transition;Zs.transition=null;try{Rt=4,ph(t,e,n,i)}finally{Rt=r,Zs.transition=s}}function ph(t,e,n,i){if(nc){var r=Id(t,e,n,i);if(r===null)_u(t,e,i,ic,n),Op(t,i);else if(Ix(r,t,e,n,i))i.stopPropagation();else if(Op(t,i),e&4&&-1<Nx.indexOf(t)){for(;r!==null;){var s=Na(r);if(s!==null&&Cg(s),s=Id(t,e,n,i),s===null&&_u(t,e,i,ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _u(t,e,i,null,n)}}var ic=null;function Id(t,e,n,i){if(ic=null,t=uh(i),t=Kr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ic=t,null}function Ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case dh:return 1;case wg:return 4;case ec:case Tx:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var mr=null,mh=null,Fl=null;function Ig(){if(Fl)return Fl;var t,e=mh,n=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fl=r.slice(t,1<i?1-i:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function zp(){return!1}function Jn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:zp,this.isPropagationStopped=zp,this}return Gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gh=Jn(_o),Da=Gt({},_o,{view:0,detail:0}),kx=Jn(Da),cu,uu,Do,Pc=Gt({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(cu=t.screenX-Do.screenX,uu=t.screenY-Do.screenY):uu=cu=0,Do=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),Bp=Jn(Pc),zx=Gt({},Pc,{dataTransfer:0}),Bx=Jn(zx),Hx=Gt({},Da,{relatedTarget:0}),du=Jn(Hx),Vx=Gt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=Jn(Vx),Wx=Gt({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xx=Jn(Wx),jx=Gt({},_o,{data:0}),Hp=Jn(jx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$x[t])?!!e[t]:!1}function vh(){return Kx}var Zx=Gt({},Da,{key:function(t){if(t.key){var e=Yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vh,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Jn(Zx),Qx=Gt({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Jn(Qx),e1=Gt({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vh}),t1=Jn(e1),n1=Gt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=Jn(n1),r1=Gt({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Jn(r1),o1=[9,13,27,32],_h=$i&&"CompositionEvent"in window,Qo=null;$i&&"documentMode"in document&&(Qo=document.documentMode);var a1=$i&&"TextEvent"in window&&!Qo,Ug=$i&&(!_h||Qo&&8<Qo&&11>=Qo),Gp=" ",Wp=!1;function Fg(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function l1(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(Wp=!0,Gp);case"textInput":return t=e.data,t===Gp&&Wp?null:t;default:return null}}function c1(t,e){if(Os)return t==="compositionend"||!_h&&Fg(t,e)?(t=Ig(),Fl=mh=mr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u1[t.type]:e==="textarea"}function kg(t,e,n,i){mg(i),e=rc(e,"onChange"),0<e.length&&(n=new gh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ea=null,pa=null;function d1(t){$g(t,0)}function Lc(t){var e=Bs(t);if(lg(e))return t}function f1(t,e){if(t==="change")return e}var zg=!1;if($i){var fu;if($i){var hu="oninput"in document;if(!hu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),hu=typeof jp.oninput=="function"}fu=hu}else fu=!1;zg=fu&&(!document.documentMode||9<document.documentMode)}function Yp(){ea&&(ea.detachEvent("onpropertychange",Bg),pa=ea=null)}function Bg(t){if(t.propertyName==="value"&&Lc(pa)){var e=[];kg(e,pa,t,uh(t)),xg(d1,e)}}function h1(t,e,n){t==="focusin"?(Yp(),ea=e,pa=n,ea.attachEvent("onpropertychange",Bg)):t==="focusout"&&Yp()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(pa)}function m1(t,e){if(t==="click")return Lc(e)}function g1(t,e){if(t==="input"||t==="change")return Lc(e)}function v1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:v1;function ma(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gd.call(e,r)||!Si(t[r],e[r]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _1(t){var e=Vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x1=$i&&"documentMode"in document&&11>=document.documentMode,ks=null,Ud=null,ta=null,Fd=!1;function Kp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||ks==null||ks!==Zl(i)||(i=ks,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&ma(ta,i)||(ta=i,i=rc(Ud,"onSelect"),0<i.length&&(e=new gh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},pu={},Gg={};$i&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Dc(t){if(pu[t])return pu[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gg)return pu[t]=e[n];return t}var Wg=Dc("animationend"),Xg=Dc("animationiteration"),jg=Dc("animationstart"),Yg=Dc("transitionend"),qg=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){qg.set(t,e),ds(e,[t])}for(var mu=0;mu<Zp.length;mu++){var gu=Zp[mu],y1=gu.toLowerCase(),S1=gu[0].toUpperCase()+gu.slice(1);Lr(y1,"on"+S1)}Lr(Wg,"onAnimationEnd");Lr(Xg,"onAnimationIteration");Lr(jg,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Yg,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yx(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}}}if(Ql)throw t=Ld,Ql=!1,Ld=null,t}function Ot(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[Qa]){t[Qa]=!0,ig.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,vu("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Ng(e)){case 1:var r=Fx;break;case 4:r=Ox;break;default:r=ph}n=r.bind(null,e,n,t),r=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xg(function(){var c=s,f=uh(n),d=[];e:{var h=qg.get(t);if(h!==void 0){var p=gh,_=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":p=Jx;break;case"focusin":_="focus",p=du;break;case"focusout":_="blur",p=du;break;case"beforeblur":case"afterblur":p=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=t1;break;case Wg:case Xg:case jg:p=Gx;break;case Yg:p=i1;break;case"scroll":p=kx;break;case"wheel":p=s1;break;case"copy":case"cut":case"paste":p=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vp}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=ua(m,u),x!=null&&y.push(va(m,x,v)))),g)break;m=m.return}0<y.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Cd&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[Ki]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Kr(_):null,_!==null&&(g=fs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Bp,x="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vp,x="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:Bs(p),v=_==null?h:Bs(_),h=new y(x,m+"leave",p,n,f),h.target=g,h.relatedTarget=v,x=null,Kr(f)===c&&(y=new y(u,m+"enter",_,n,f),y.target=v,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,u=_,m=0,v=y;v;v=ys(v))m++;for(v=0,x=u;x;x=ys(x))v++;for(;0<m-v;)y=ys(y),m--;for(;0<v-m;)u=ys(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=ys(y),u=ys(u)}y=null}else y=null;p!==null&&Qp(d,h,p,y,!1),_!==null&&g!==null&&Qp(d,g,_,y,!0)}}e:{if(h=c?Bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=f1;else if(Xp(h))if(zg)A=g1;else{A=p1;var b=h1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=m1);if(A&&(A=A(t,c))){kg(d,A,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Ed(h,"number",h.value)}switch(b=c?Bs(c):window,t){case"focusin":(Xp(b)||b.contentEditable==="true")&&(ks=b,Ud=c,ta=null);break;case"focusout":ta=Ud=ks=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,Kp(d,n,f);break;case"selectionchange":if(x1)break;case"keydown":case"keyup":Kp(d,n,f)}var R;if(_h)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Os?Fg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ug&&n.locale!=="ko"&&(Os||P!=="onCompositionStart"?P==="onCompositionEnd"&&Os&&(R=Ig()):(mr=f,mh="value"in mr?mr.value:mr.textContent,Os=!0)),b=rc(c,P),0<b.length&&(P=new Hp(P,t,null,n,f),d.push({event:P,listeners:b}),R?P.data=R:(R=Og(n),R!==null&&(P.data=R)))),(R=a1?l1(t,n):c1(t,n))&&(c=rc(c,"onBeforeInput"),0<c.length&&(f=new Hp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=R))}$g(d,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(va(t,s,r)),s=ua(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(n,s),l!=null&&o.unshift(va(n,l,a))):r||(l=ua(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E1=/\r\n?/g,w1=/\u0000|\uFFFD/g;function em(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(w1,"")}function el(t,e,n){if(e=em(e),em(t)!==e&&n)throw Error(ve(425))}function sc(){}var Od=null,kd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,T1=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(t){return tm.resolve(null).then(t).catch(b1)}:Bd;function b1(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Ai="__reactFiber$"+xo,_a="__reactProps$"+xo,Ki="__reactContainer$"+xo,Hd="__reactEvents$"+xo,C1="__reactListeners$"+xo,R1="__reactHandles$"+xo;function Kr(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nm(t);t!==null;){if(n=t[Ai])return n;t=nm(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[Ai]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function Nc(t){return t[_a]||null}var Vd=[],Hs=-1;function Dr(t){return{current:t}}function kt(t){0>Hs||(t.current=Vd[Hs],Vd[Hs]=null,Hs--)}function Ft(t,e){Hs++,Vd[Hs]=t.current,t.current=e}var Cr={},yn=Dr(Cr),On=Dr(!1),rs=Cr;function so(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function kn(t){return t=t.childContextTypes,t!=null}function oc(){kt(On),kt(yn)}function im(t,e,n){if(yn.current!==Cr)throw Error(ve(168));Ft(yn,e),Ft(On,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,hx(t)||"Unknown",r));return Gt({},n,i)}function ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,rs=yn.current,Ft(yn,t),Ft(On,On.current),!0}function rm(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=Zg(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,kt(On),kt(yn),Ft(yn,t)):kt(On),Ft(On,n)}var Gi=null,Ic=!1,yu=!1;function Jg(t){Gi===null?Gi=[t]:Gi.push(t)}function P1(t){Ic=!0,Jg(t)}function Nr(){if(!yu&&Gi!==null){yu=!0;var t=0,e=Rt;try{var n=Gi;for(Rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Gi=null,Ic=!1}catch(r){throw Gi!==null&&(Gi=Gi.slice(t+1)),Eg(dh,Nr),r}finally{Rt=e,yu=!1}}return null}var Vs=[],Gs=0,lc=null,cc=0,ei=[],ti=0,ss=null,Wi=1,Xi="";function Wr(t,e){Vs[Gs++]=cc,Vs[Gs++]=lc,lc=t,cc=e}function Qg(t,e,n){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=ss,ss=t;var i=Wi;t=Xi;var r=32-_i(i)-1;i&=~(1<<r),n+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-_i(e)+r|n<<r|i,Xi=s+t}else Wi=1<<s|n<<r|i,Xi=t}function yh(t){t.return!==null&&(Wr(t,1),Qg(t,1,0))}function Sh(t){for(;t===lc;)lc=Vs[--Gs],Vs[Gs]=null,cc=Vs[--Gs],Vs[Gs]=null;for(;t===ss;)ss=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var $n=null,qn=null,Bt=!1,mi=null;function ev(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,qn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Wi,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,qn=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wd(t){if(Bt){var e=qn;if(e){var n=e;if(!sm(t,e)){if(Gd(t))throw Error(ve(418));e=yr(n.nextSibling);var i=$n;e&&sm(t,e)?ev(i,n):(t.flags=t.flags&-4097|2,Bt=!1,$n=t)}}else{if(Gd(t))throw Error(ve(418));t.flags=t.flags&-4097|2,Bt=!1,$n=t}}}function om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function tl(t){if(t!==$n)return!1;if(!Bt)return om(t),Bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=qn)){if(Gd(t))throw tv(),Error(ve(418));for(;e;)ev(t,e),e=yr(e.nextSibling)}if(om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=$n?yr(t.stateNode.nextSibling):null;return!0}function tv(){for(var t=qn;t;)t=yr(t.nextSibling)}function oo(){qn=$n=null,Bt=!1}function Mh(t){mi===null?mi=[t]:mi.push(t)}var L1=Qi.ReactCurrentBatchConfig;function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function nv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=wr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,x){return m===null||m.tag!==6?(m=bu(v,u.mode,x),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,x){var A=v.type;return A===Fs?f(u,m,v.props.children,x,v.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&am(A)===m.type)?(x=r(m,v.props),x.ref=No(u,m,v),x.return=u,x):(x=Wl(v.type,v.key,v.props,null,u.mode,x),x.ref=No(u,m,v),x.return=u,x)}function c(u,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Cu(v,u.mode,x),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,x,A){return m===null||m.tag!==7?(m=ns(v,u.mode,x,A),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=bu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xa:return v=Wl(m.type,m.key,m.props,null,u.mode,v),v.ref=No(u,null,m),v.return=u,v;case Us:return m=Cu(m,u.mode,v),m.return=u,m;case ur:var x=m._init;return d(u,x(m._payload),v)}if(Yo(m)||Co(m))return m=ns(m,u.mode,v,null),m.return=u,m;nl(u,m)}return null}function h(u,m,v,x){var A=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(u,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===A?l(u,m,v,x):null;case Us:return v.key===A?c(u,m,v,x):null;case ur:return A=v._init,h(u,m,A(v._payload),x)}if(Yo(v)||Co(v))return A!==null?null:f(u,m,v,x,null);nl(u,v)}return null}function p(u,m,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(m,u,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return u=u.get(x.key===null?v:x.key)||null,l(m,u,x,A);case Us:return u=u.get(x.key===null?v:x.key)||null,c(m,u,x,A);case ur:var b=x._init;return p(u,m,v,b(x._payload),A)}if(Yo(x)||Co(x))return u=u.get(v)||null,f(m,u,x,A,null);nl(m,x)}return null}function _(u,m,v,x){for(var A=null,b=null,R=m,P=m=0,T=null;R!==null&&P<v.length;P++){R.index>P?(T=R,R=null):T=R.sibling;var S=h(u,R,v[P],x);if(S===null){R===null&&(R=T);break}t&&R&&S.alternate===null&&e(u,R),m=s(S,m,P),b===null?A=S:b.sibling=S,b=S,R=T}if(P===v.length)return n(u,R),Bt&&Wr(u,P),A;if(R===null){for(;P<v.length;P++)R=d(u,v[P],x),R!==null&&(m=s(R,m,P),b===null?A=R:b.sibling=R,b=R);return Bt&&Wr(u,P),A}for(R=i(u,R);P<v.length;P++)T=p(R,u,P,v[P],x),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?P:T.key),m=s(T,m,P),b===null?A=T:b.sibling=T,b=T);return t&&R.forEach(function(U){return e(u,U)}),Bt&&Wr(u,P),A}function y(u,m,v,x){var A=Co(v);if(typeof A!="function")throw Error(ve(150));if(v=A.call(v),v==null)throw Error(ve(151));for(var b=A=null,R=m,P=m=0,T=null,S=v.next();R!==null&&!S.done;P++,S=v.next()){R.index>P?(T=R,R=null):T=R.sibling;var U=h(u,R,S.value,x);if(U===null){R===null&&(R=T);break}t&&R&&U.alternate===null&&e(u,R),m=s(U,m,P),b===null?A=U:b.sibling=U,b=U,R=T}if(S.done)return n(u,R),Bt&&Wr(u,P),A;if(R===null){for(;!S.done;P++,S=v.next())S=d(u,S.value,x),S!==null&&(m=s(S,m,P),b===null?A=S:b.sibling=S,b=S);return Bt&&Wr(u,P),A}for(R=i(u,R);!S.done;P++,S=v.next())S=p(R,u,P,S.value,x),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?P:S.key),m=s(S,m,P),b===null?A=S:b.sibling=S,b=S);return t&&R.forEach(function(I){return e(u,I)}),Bt&&Wr(u,P),A}function g(u,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:e:{for(var A=v.key,b=m;b!==null;){if(b.key===A){if(A=v.type,A===Fs){if(b.tag===7){n(u,b.sibling),m=r(b,v.props.children),m.return=u,u=m;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&am(A)===b.type){n(u,b.sibling),m=r(b,v.props),m.ref=No(u,b,v),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Fs?(m=ns(v.props.children,u.mode,x,v.key),m.return=u,u=m):(x=Wl(v.type,v.key,v.props,null,u.mode,x),x.ref=No(u,m,v),x.return=u,u=x)}return o(u);case Us:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Cu(v,u.mode,x),m.return=u,u=m}return o(u);case ur:return b=v._init,g(u,m,b(v._payload),x)}if(Yo(v))return _(u,m,v,x);if(Co(v))return y(u,m,v,x);nl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=bu(v,u.mode,x),m.return=u,u=m),o(u)):n(u,m)}return g}var ao=nv(!0),iv=nv(!1),uc=Dr(null),dc=null,Ws=null,Eh=null;function wh(){Eh=Ws=dc=null}function Th(t){var e=uc.current;kt(uc),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){dc=t,Eh=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fn=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(Eh!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(dc===null)throw Error(ve(308));Ws=t,dc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Zr=null;function Ah(t){Zr===null?Zr=[t]:Zr.push(t)}function rv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ah(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ah(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}function lm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Gt({},d,h);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var Ia={},Li=Dr(Ia),xa=Dr(Ia),ya=Dr(Ia);function Jr(t){if(t===Ia)throw Error(ve(174));return t}function Ch(t,e){switch(Ft(ya,e),Ft(xa,t),Ft(Li,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}kt(Li),Ft(Li,e)}function lo(){kt(Li),kt(xa),kt(ya)}function ov(t){Jr(ya.current);var e=Jr(Li.current),n=Td(e,t.type);e!==n&&(Ft(xa,t),Ft(Li,n))}function Rh(t){xa.current===t&&(kt(Li),kt(xa))}var Ht=Dr(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function Ph(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var zl=Qi.ReactCurrentDispatcher,Mu=Qi.ReactCurrentBatchConfig,os=0,Vt=null,Jt=null,rn=null,pc=!1,na=!1,Sa=0,D1=0;function pn(){throw Error(ve(321))}function Lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function Dh(t,e,n,i,r,s){if(os=s,Vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?F1:O1,t=n(i,r),na){s=0;do{if(na=!1,Sa=0,25<=s)throw Error(ve(301));s+=1,rn=Jt=null,e.updateQueue=null,zl.current=k1,t=n(i,r)}while(na)}if(zl.current=mc,e=Jt!==null&&Jt.next!==null,os=0,rn=Jt=Vt=null,pc=!1,e)throw Error(ve(300));return t}function Nh(){var t=Sa!==0;return Sa=0,t}function wi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=t:rn=rn.next=t,rn}function si(){if(Jt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var e=rn===null?Vt.memoizedState:rn.next;if(e!==null)rn=e,Jt=t;else{if(t===null)throw Error(ve(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Vt.memoizedState=rn=t:rn=rn.next=t}return rn}function Ma(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=si(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=Jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((os&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Vt.lanes|=f,as|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(Fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Vt.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=si(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(Fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function av(){}function lv(t,e){var n=Vt,i=si(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,Fn=!0),i=i.queue,Ih(dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||rn!==null&&rn.memoizedState.tag&1){if(n.flags|=2048,Ea(9,uv.bind(null,n,i,r,e),void 0,null),sn===null)throw Error(ve(349));os&30||cv(n,e,r)}return r}function cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uv(t,e,n,i){e.value=n,e.getSnapshot=i,fv(e)&&hv(t)}function dv(t,e,n){return n(function(){fv(e)&&hv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch{return!0}}function hv(t){var e=Zi(t,1);e!==null&&xi(e,t,1,-1)}function um(t){var e=wi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=U1.bind(null,Vt,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pv(){return si().memoizedState}function Bl(t,e,n,i){var r=wi();Vt.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&Lh(i,o.deps)){r.memoizedState=Ea(e,n,s,i);return}}Vt.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function dm(t,e){return Bl(8390656,8,t,e)}function Ih(t,e){return Uc(2048,8,t,e)}function mv(t,e){return Uc(4,2,t,e)}function gv(t,e){return Uc(4,4,t,e)}function vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _v(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,vv.bind(null,e,t),n)}function Uh(){}function xv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sv(t,e,n){return os&21?(Si(n,e)||(n=Ag(),Vt.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=n)}function N1(t,e){var n=Rt;Rt=n!==0&&4>n?n:4,t(!0);var i=Mu.transition;Mu.transition={};try{t(!1),e()}finally{Rt=n,Mu.transition=i}}function Mv(){return si().memoizedState}function I1(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))wv(e,n);else if(n=rv(t,e,n,i),n!==null){var r=bn();xi(n,t,i,r),Tv(n,e,i)}}function U1(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))wv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Ah(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rv(t,e,r,i),n!==null&&(r=bn(),xi(n,t,i,r),Tv(n,e,i))}}function Ev(t){var e=t.alternate;return t===Vt||e!==null&&e===Vt}function wv(t,e){na=pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}var mc={readContext:ri,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},F1={readContext:ri,useCallback:function(t,e){return wi().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=wi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=wi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I1.bind(null,Vt,t),[i.memoizedState,t]},useRef:function(t){var e=wi();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:Uh,useDeferredValue:function(t){return wi().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=N1.bind(null,t[1]),wi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Vt,r=wi();if(Bt){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),sn===null)throw Error(ve(349));os&30||cv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dm(dv.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,uv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=wi(),e=sn.identifierPrefix;if(Bt){var n=Xi,i=Wi;n=(i&~(1<<32-_i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O1={readContext:ri,useCallback:xv,useContext:ri,useEffect:Ih,useImperativeHandle:_v,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:yv,useReducer:Eu,useRef:pv,useState:function(){return Eu(Ma)},useDebugValue:Uh,useDeferredValue:function(t){var e=si();return Sv(e,Jt.memoizedState,t)},useTransition:function(){var t=Eu(Ma)[0],e=si().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Mv,unstable_isNewReconciler:!1},k1={readContext:ri,useCallback:xv,useContext:ri,useEffect:Ih,useImperativeHandle:_v,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:yv,useReducer:wu,useRef:pv,useState:function(){return wu(Ma)},useDebugValue:Uh,useDeferredValue:function(t){var e=si();return Jt===null?e.memoizedState=t:Sv(e,Jt.memoizedState,t)},useTransition:function(){var t=wu(Ma)[0],e=si().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Mv,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=Gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=bn(),r=Er(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(xi(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=bn(),r=Er(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(xi(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bn(),i=Er(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(xi(e,t,i,n),kl(e,t,i))}};function fm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function Av(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=kn(e)?rs:yn.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=kn(e)?rs:yn.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=fx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function bv(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vc||(vc=!0,sf=i),qd(t,e)},n}function Cv(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new z1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Q1.bind(null,t,e,n),e.then(t,t))}function mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var B1=Qi.ReactCurrentOwner,Fn=!1;function Tn(t,e,n,i){e.child=t===null?iv(e,null,n,i):ao(e,t.child,n,i)}function vm(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=Dh(t,e,n,i,s,r),n=Nh(),t!==null&&!Fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(Bt&&n&&yh(e),e.flags|=1,Tn(t,e,i,r),e.child)}function _m(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rv(t,e,s,i,r)):(t=Wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Rv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(Fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Fn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return $d(t,e,n,i,r)}function Pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(js,jn),jn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ft(js,jn),jn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ft(js,jn),jn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ft(js,jn),jn|=i;return Tn(t,e,r,n),e.child}function Lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,i,r){var s=kn(n)?rs:yn.current;return s=so(e,s),Js(e,r),n=Dh(t,e,n,i,s,r),i=Nh(),t!==null&&!Fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(Bt&&i&&yh(e),e.flags|=1,Tn(t,e,n,r),e.child)}function xm(t,e,n,i,r){if(kn(n)){var s=!0;ac(e)}else s=!1;if(Js(e,r),e.stateNode===null)Hl(t,e),Av(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=kn(n)?rs:yn.current,c=so(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hm(e,o,i,c),dr=!1;var h=e.memoizedState;o.state=h,fc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||On.current||dr?(typeof f=="function"&&(jd(e,n,f,i),l=e.memoizedState),(a=dr||fm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=kn(n)?rs:yn.current,l=so(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&hm(e,o,i,l),dr=!1,h=e.memoizedState,o.state=h,fc(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||On.current||dr?(typeof p=="function"&&(jd(e,n,p,i),_=e.memoizedState),(c=dr||fm(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Kd(t,e,n,i,s,r)}function Kd(t,e,n,i,r,s){Lv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rm(e,n,!1),Ji(t,e,s);i=e.stateNode,B1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):Tn(t,e,a,s),e.memoizedState=i.state,r&&rm(e,n,!0),e.child}function Dv(t){var e=t.stateNode;e.pendingContext?im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&im(t,e.context,!1),Ch(t,e.containerInfo)}function ym(t,e,n,i,r){return oo(),Mh(r),e.flags|=256,Tn(t,e,n,i),e.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var i=e.pendingProps,r=Ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ft(Ht,r&1),t===null)return Wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Zd,t):Fh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return H1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fh(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&Mh(i),ao(e,t.child,null,n),t=Fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tu(Error(ve(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Zd,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ve(419)),i=Tu(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,Fn||a){if(i=sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),xi(i,t,r,-1))}return Vh(),i=Tu(Error(ve(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ey.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qn=yr(r.nextSibling),$n=e,Bt=!0,mi=null,t!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=ss,Wi=t.id,Xi=t.overflow,ss=e),e=Fh(e,i.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xd(t.return,e,n)}function Au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Tn(t,e,i.children,n),i=Ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ft(Ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V1(t,e,n){switch(e.tag){case 3:Dv(e),oo();break;case 5:ov(e);break;case 1:kn(e.type)&&ac(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ft(uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ft(Ht,Ht.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(Ft(Ht,Ht.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ft(Ht,Ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Pv(t,e,n)}return Ji(t,e,n)}var Uv,Qd,Fv,Ov;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};Fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Li.current);var s=null;switch(n){case"input":r=Sd(t,r),i=Sd(t,i),s=[];break;case"select":r=Gt({},r,{value:void 0}),i=Gt({},i,{value:void 0}),s=[];break;case"textarea":r=wd(t,r),i=wd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sc)}Ad(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function Io(t,e){if(!Bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function G1(t,e,n){var i=e.pendingProps;switch(Sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return kn(e.type)&&oc(),mn(e),null;case 3:return i=e.stateNode,lo(),kt(On),kt(yn),Ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(lf(mi),mi=null))),Qd(t,e),mn(e),null;case 5:Rh(e);var r=Jr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return mn(e),null}if(t=Jr(Li.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)Ot($o[r],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Pp(i,s),Ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ot("invalid",i);break;case"textarea":Dp(i,s),Ot("invalid",i)}Ad(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ot("scroll",i)}switch(n){case"input":ja(i),Lp(i,s,!0);break;case"textarea":ja(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[_a]=i,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=bd(n,i),n){case"dialog":Ot("cancel",t),Ot("close",t),r=i;break;case"iframe":case"object":case"embed":Ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)Ot($o[r],t);r=i;break;case"source":Ot("error",t),r=i;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),r=i;break;case"details":Ot("toggle",t),r=i;break;case"input":Pp(t,i),r=Sd(t,i),Ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Gt({},i,{value:void 0}),Ot("invalid",t);break;case"textarea":Dp(t,i),r=wd(t,i),Ot("invalid",t);break;default:r=i}Ad(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ot("scroll",t):l!=null&&oh(t,s,l,o))}switch(n){case"input":ja(t),Lp(t,i,!1);break;case"textarea":ja(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=Jr(ya.current),Jr(Li.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return mn(e),null;case 13:if(kt(Ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&qn!==null&&e.mode&1&&!(e.flags&128))tv(),oo(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[Ai]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else mi!==null&&(lf(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ht.current&1?Qt===0&&(Qt=3):Vh())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return lo(),Qd(t,e),t===null&&ga(e.stateNode.containerInfo),mn(e),null;case 10:return Th(e.type._context),mn(e),null;case 17:return kn(e.type)&&oc(),mn(e),null;case 19:if(kt(Ht),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ft(Ht,Ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Yt()>uo&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(t=hc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Bt)return mn(e),null}else 2*Yt()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,n=Ht.current,Ft(Ht,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return Hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?jn&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function W1(t,e){switch(Sh(e),e.tag){case 1:return kn(e.type)&&oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),kt(On),kt(yn),Ph(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(kt(Ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(Ht),null;case 4:return lo(),null;case 10:return Th(e.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var rl=!1,xn=!1,X1=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Xt(t,e,i)}else n.current=null}function ef(t,e,n){try{n()}catch(i){Xt(t,e,i)}}var Mm=!1;function j1(t,e){if(Od=nc,t=Vg(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},nc=!1,Ie=e;Ie!==null;)if(e=Ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ie=t;else for(;Ie!==null;){e=Ie;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:hi(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(x){Xt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}return _=Mm,Mm=!1,_}function ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ef(e,n,s)}r=r.next}while(r!==i)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[_a],delete e[Hd],delete e[C1],delete e[R1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zv(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sc));else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var cn=null,pi=!1;function nr(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:xn||Xs(n,e);case 6:var i=cn,r=pi;cn=null,nr(t,e,n),cn=i,pi=r,cn!==null&&(pi?(t=cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):cn.removeChild(n.stateNode));break;case 18:cn!==null&&(pi?(t=cn,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),ha(t)):xu(cn,n.stateNode));break;case 4:i=cn,r=pi,cn=n.stateNode.containerInfo,pi=!0,nr(t,e,n),cn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!xn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ef(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!xn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Xt(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(xn=(i=xn)||n.memoizedState!==null,nr(t,e,n),xn=i):nr(t,e,n);break;default:nr(t,e,n)}}function wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new X1),e.forEach(function(i){var r=ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:cn=a.stateNode,pi=!1;break e;case 3:cn=a.stateNode.containerInfo,pi=!0;break e;case 4:cn=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(cn===null)throw Error(ve(160));Bv(s,o,r),cn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hv(e,t),e=e.sibling}function Hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),Ei(t),i&4){try{ia(3,t,t.return),Oc(3,t)}catch(y){Xt(t,t.return,y)}try{ia(5,t,t.return)}catch(y){Xt(t,t.return,y)}}break;case 1:ci(e,t),Ei(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(ci(e,t),Ei(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(y){Xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cg(r,s),bd(a,o);var c=bd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?pg(r,d):f==="dangerouslySetInnerHTML"?fg(r,d):f==="children"?ca(r,d):oh(r,f,d,c)}switch(a){case"input":Md(r,s);break;case"textarea":ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(y){Xt(t,t.return,y)}}break;case 6:if(ci(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Xt(t,t.return,y)}}break;case 3:if(ci(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(y){Xt(t,t.return,y)}break;case 4:ci(e,t),Ei(t);break;case 13:ci(e,t),Ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zh=Yt())),i&4&&wm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(xn=(c=xn)||f,ci(e,t),xn=c):ci(e,t),Ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ie=t,f=t.child;f!==null;){for(d=Ie=f;Ie!==null;){switch(h=Ie,p=h.child,h.tag){case 0:case 11:case 14:case 15:ia(4,h,h.return);break;case 1:Xs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Xt(i,n,y)}}break;case 5:Xs(h,h.return);break;case 22:if(h.memoizedState!==null){Am(d);continue}}p!==null?(p.return=h,Ie=p):Am(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hg("display",o))}catch(y){Xt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Xt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ci(e,t),Ei(t),i&4&&wm(t);break;case 21:break;default:ci(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zv(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Em(t);rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Em(t);nf(t,a,o);break;default:throw Error(ve(161))}}catch(l){Xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Y1(t,e,n){Ie=t,Vv(t)}function Vv(t,e,n){for(var i=(t.mode&1)!==0;Ie!==null;){var r=Ie,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||xn;a=rl;var c=xn;if(rl=o,(xn=l)&&!c)for(Ie=r;Ie!==null;)o=Ie,l=o.child,o.tag===22&&o.memoizedState!==null?bm(r):l!==null?(l.return=o,Ie=l):bm(r);for(;s!==null;)Ie=s,Vv(s),s=s.sibling;Ie=r,rl=a,xn=c}Tm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ie=s):Tm(t)}}function Tm(t){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xn||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!xn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}xn||e.flags&512&&tf(e)}catch(h){Xt(e,e.return,h)}}if(e===t){Ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function Am(t){for(;Ie!==null;){var e=Ie;if(e===t){Ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function bm(t){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(l){Xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Xt(e,r,l)}}var s=e.return;try{tf(e)}catch(l){Xt(e,s,l)}break;case 5:var o=e.return;try{tf(e)}catch(l){Xt(e,o,l)}}}catch(l){Xt(e,e.return,l)}if(e===t){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var q1=Math.ceil,gc=Qi.ReactCurrentDispatcher,Oh=Qi.ReactCurrentOwner,ii=Qi.ReactCurrentBatchConfig,Mt=0,sn=null,Zt=null,un=0,jn=0,js=Dr(0),Qt=0,wa=null,as=0,kc=0,kh=0,ra=null,Un=null,zh=0,uo=1/0,Vi=null,vc=!1,sf=null,Mr=null,sl=!1,gr=null,_c=0,sa=0,of=null,Vl=-1,Gl=0;function bn(){return Mt&6?Yt():Vl!==-1?Vl:Vl=Yt()}function Er(t){return t.mode&1?Mt&2&&un!==0?un&-un:L1.transition!==null?(Gl===0&&(Gl=Ag()),Gl):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:Ng(t.type)),t):1}function xi(t,e,n,i){if(50<sa)throw sa=0,of=null,Error(ve(185));La(t,n,i),(!(Mt&2)||t!==sn)&&(t===sn&&(!(Mt&2)&&(kc|=n),Qt===4&&hr(t,un)),zn(t,i),n===1&&Mt===0&&!(e.mode&1)&&(uo=Yt()+500,Ic&&Nr()))}function zn(t,e){var n=t.callbackNode;Lx(t,e);var i=tc(t,t===sn?un:0);if(i===0)n!==null&&Fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fp(n),e===1)t.tag===0?P1(Cm.bind(null,t)):Jg(Cm.bind(null,t)),A1(function(){!(Mt&6)&&Nr()}),n=null;else{switch(bg(i)){case 1:n=dh;break;case 4:n=wg;break;case 16:n=ec;break;case 536870912:n=Tg;break;default:n=ec}n=Kv(n,Gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gv(t,e){if(Vl=-1,Gl=0,Mt&6)throw Error(ve(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=tc(t,t===sn?un:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xc(t,i);else{e=i;var r=Mt;Mt|=2;var s=Xv();(sn!==t||un!==e)&&(Vi=null,uo=Yt()+500,ts(t,e));do try{Z1();break}catch(a){Wv(t,a)}while(!0);wh(),gc.current=s,Mt=r,Zt!==null?e=0:(sn=null,un=0,e=Qt)}if(e!==0){if(e===2&&(r=Dd(t),r!==0&&(i=r,e=af(t,r))),e===1)throw n=wa,ts(t,0),hr(t,i),zn(t,Yt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!$1(r)&&(e=xc(t,i),e===2&&(s=Dd(t),s!==0&&(i=s,e=af(t,s))),e===1))throw n=wa,ts(t,0),hr(t,i),zn(t,Yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:Xr(t,Un,Vi);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=zh+500-Yt(),10<e)){if(tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){bn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bd(Xr.bind(null,t,Un,Vi),e);break}Xr(t,Un,Vi);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q1(i/1960))-i,10<i){t.timeoutHandle=Bd(Xr.bind(null,t,Un,Vi),i);break}Xr(t,Un,Vi);break;case 5:Xr(t,Un,Vi);break;default:throw Error(ve(329))}}}return zn(t,Yt()),t.callbackNode===n?Gv.bind(null,t):null}function af(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Un,Un=n,e!==null&&lf(e)),t}function lf(t){Un===null?Un=t:Un.push.apply(Un,t)}function $1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~kh,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_i(e),i=1<<n;t[n]=-1,e&=~i}}function Cm(t){if(Mt&6)throw Error(ve(327));Qs();var e=tc(t,0);if(!(e&1))return zn(t,Yt()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var i=Dd(t);i!==0&&(e=i,n=af(t,i))}if(n===1)throw n=wa,ts(t,0),hr(t,e),zn(t,Yt()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Un,Vi),zn(t,Yt()),null}function Bh(t,e){var n=Mt;Mt|=1;try{return t(e)}finally{Mt=n,Mt===0&&(uo=Yt()+500,Ic&&Nr())}}function ls(t){gr!==null&&gr.tag===0&&!(Mt&6)&&Qs();var e=Mt;Mt|=1;var n=ii.transition,i=Rt;try{if(ii.transition=null,Rt=1,t)return t()}finally{Rt=i,ii.transition=n,Mt=e,!(Mt&6)&&Nr()}}function Hh(){jn=js.current,kt(js)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T1(n)),Zt!==null)for(n=Zt.return;n!==null;){var i=n;switch(Sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&oc();break;case 3:lo(),kt(On),kt(yn),Ph();break;case 5:Rh(i);break;case 4:lo();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Th(i.type._context);break;case 22:case 23:Hh()}n=n.return}if(sn=t,Zt=t=wr(t.current,null),un=jn=e,Qt=0,wa=null,kh=kc=as=0,Un=ra=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function Wv(t,e){do{var n=Zt;try{if(wh(),zl.current=mc,pc){for(var i=Vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pc=!1}if(os=0,rn=Jt=Vt=null,na=!1,Sa=0,Oh.current=null,n===null||n.return===null){Qt=1,wa=e,Zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=un,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=mm(o);if(p!==null){p.flags&=-257,gm(p,o,a,s,e),p.mode&1&&pm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){pm(s,c,e),Vh();break e}l=Error(ve(426))}}else if(Bt&&a.mode&1){var g=mm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),gm(g,o,a,s,e),Mh(co(l,a));break e}}s=l=co(l,a),Qt!==4&&(Qt=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=bv(s,l,e);lm(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Cv(s,a,e);lm(s,x);break e}}s=s.return}while(s!==null)}Yv(n)}catch(A){e=A,Zt===n&&n!==null&&(Zt=n=n.return);continue}break}while(!0)}function Xv(){var t=gc.current;return gc.current=mc,t===null?mc:t}function Vh(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||!(as&268435455)&&!(kc&268435455)||hr(sn,un)}function xc(t,e){var n=Mt;Mt|=2;var i=Xv();(sn!==t||un!==e)&&(Vi=null,ts(t,e));do try{K1();break}catch(r){Wv(t,r)}while(!0);if(wh(),Mt=n,gc.current=i,Zt!==null)throw Error(ve(261));return sn=null,un=0,Qt}function K1(){for(;Zt!==null;)jv(Zt)}function Z1(){for(;Zt!==null&&!Mx();)jv(Zt)}function jv(t){var e=$v(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?Yv(t):Zt=e,Oh.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,Zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Zt=null;return}}else if(n=G1(n,e,jn),n!==null){Zt=n;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=t}while(e!==null);Qt===0&&(Qt=5)}function Xr(t,e,n){var i=Rt,r=ii.transition;try{ii.transition=null,Rt=1,J1(t,e,n,i)}finally{ii.transition=r,Rt=i}return null}function J1(t,e,n,i){do Qs();while(gr!==null);if(Mt&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dx(t,s),t===sn&&(Zt=sn=null,un=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Kv(ec,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=Rt;Rt=1;var a=Mt;Mt|=4,Oh.current=null,j1(t,n),Hv(n,t),_1(kd),nc=!!Od,kd=Od=null,t.current=n,Y1(n),Ex(),Mt=a,Rt=o,ii.transition=s}else t.current=n;if(sl&&(sl=!1,gr=t,_c=r),s=t.pendingLanes,s===0&&(Mr=null),Ax(n.stateNode),zn(t,Yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,t=sf,sf=null,t;return _c&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===of?sa++:(sa=0,of=t):sa=0,Nr(),null}function Qs(){if(gr!==null){var t=bg(_c),e=ii.transition,n=Rt;try{if(ii.transition=null,Rt=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,_c=0,Mt&6)throw Error(ve(331));var r=Mt;for(Mt|=4,Ie=t.current;Ie!==null;){var s=Ie,o=s.child;if(Ie.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ie=c;Ie!==null;){var f=Ie;switch(f.tag){case 0:case 11:case 15:ia(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ie=d;else for(;Ie!==null;){f=Ie;var h=f.sibling,p=f.return;if(kv(f),f===c){Ie=null;break}if(h!==null){h.return=p,Ie=h;break}Ie=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ie=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ie=o;else e:for(;Ie!==null;){if(s=Ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ie=u;break e}Ie=s.return}}var m=t.current;for(Ie=m;Ie!==null;){o=Ie;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ie=v;else e:for(o=m;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oc(9,a)}}catch(A){Xt(a,a.return,A)}if(a===o){Ie=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ie=x;break e}Ie=a.return}}if(Mt=r,Nr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(Rc,t)}catch{}i=!0}return i}finally{Rt=n,ii.transition=e}}return!1}function Rm(t,e,n){e=co(n,e),e=bv(t,e,1),t=Sr(t,e,1),e=bn(),t!==null&&(La(t,1,e),zn(t,e))}function Xt(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=co(n,t),t=Cv(e,t,1),e=Sr(e,t,1),t=bn(),e!==null&&(La(e,1,t),zn(e,t));break}}e=e.return}}function Q1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=bn(),t.pingedLanes|=t.suspendedLanes&n,sn===t&&(un&n)===n&&(Qt===4||Qt===3&&(un&130023424)===un&&500>Yt()-zh?ts(t,0):kh|=n),zn(t,e)}function qv(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=bn();t=Zi(t,e),t!==null&&(La(t,e,n),zn(t,n))}function ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qv(t,n)}function ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),qv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||On.current)Fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fn=!1,V1(t,e,n);Fn=!!(t.flags&131072)}else Fn=!1,Bt&&e.flags&1048576&&Qg(e,cc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hl(t,e),t=e.pendingProps;var r=so(e,yn.current);Js(e,n),r=Dh(null,e,i,t,r,n);var s=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kn(i)?(s=!0,ac(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Kd(null,e,i,!0,s,n)):(e.tag=0,Bt&&s&&yh(e),Tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iy(i),t=hi(i,t),r){case 0:e=$d(null,e,i,t,n);break e;case 1:e=xm(null,e,i,t,n);break e;case 11:e=vm(null,e,i,t,n);break e;case 14:e=_m(null,e,i,hi(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),$d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),xm(t,e,i,r,n);case 3:e:{if(Dv(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sv(t,e),fc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(ve(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=co(Error(ve(424)),e),e=ym(t,e,i,n,r);break e}else for(qn=yr(e.stateNode.containerInfo.firstChild),$n=e,Bt=!0,mi=null,n=iv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Ji(t,e,n);break e}Tn(t,e,i,n)}e=e.child}return e;case 5:return ov(e),t===null&&Wd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zd(i,r)?o=null:s!==null&&zd(i,s)&&(e.flags|=32),Lv(t,e),Tn(t,e,o,n),e.child;case 6:return t===null&&Wd(e),null;case 13:return Nv(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):Tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),vm(t,e,i,r,n);case 7:return Tn(t,e,e.pendingProps,n),e.child;case 8:return Tn(t,e,e.pendingProps.children,n),e.child;case 12:return Tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ft(uc,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!On.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ve(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=ri(r),i=i(r),e.flags|=1,Tn(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),_m(t,e,i,r,n);case 15:return Rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Hl(t,e),e.tag=1,kn(i)?(t=!0,ac(e)):t=!1,Js(e,n),Av(e,i,r),Yd(e,i,r,n),Kd(null,e,i,!0,t,n);case 19:return Iv(t,e,n);case 22:return Pv(t,e,n)}throw Error(ve(156,e.tag))};function Kv(t,e){return Eg(t,e)}function ny(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new ny(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iy(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lh)return 11;if(t===ch)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return ns(n.children,r,s,e);case ah:o=8,r|=8;break;case vd:return t=ni(12,n,e,r|2),t.elementType=vd,t.lanes=s,t;case _d:return t=ni(13,n,e,r),t.elementType=_d,t.lanes=s,t;case xd:return t=ni(19,n,e,r),t.elementType=xd,t.lanes=s,t;case og:return zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:o=10;break e;case sg:o=9;break e;case lh:o=11;break e;case ch:o=14;break e;case ur:o=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=ni(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function zc(t,e,n,i){return t=ni(22,t,i,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ry(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wh(t,e,n,i,r,s,o,a,l){return t=new ry(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function sy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zv(t){if(!t)return Cr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(kn(n))return Zg(t,n,e)}return e}function Jv(t,e,n,i,r,s,o,a,l){return t=Wh(n,i,!0,t,r,s,o,a,l),t.context=Zv(null),n=t.current,i=bn(),r=Er(n),s=Yi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,La(t,r,i),zn(t,i),t}function Bc(t,e,n,i){var r=e.current,s=bn(),o=Er(r);return n=Zv(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(xi(t,r,o,s),kl(t,r,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xh(t,e){Pm(t,e),(t=t.alternate)&&Pm(t,e)}function oy(){return null}var Qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Hc.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));Bc(t,e,null,null)};Hc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){Bc(null,t,null,null)}),e[Ki]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Dg(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yc(o);s.call(c)}}var o=Jv(e,i,t,0,null,!1,!1,"",Lm);return t._reactRootContainer=o,t[Ki]=o.current,ga(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=yc(l);a.call(c)}}var l=Wh(t,0,!1,null,null,!1,!1,"",Lm);return t._reactRootContainer=l,t[Ki]=l.current,ga(t.nodeType===8?t.parentNode:t),ls(function(){Bc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yc(o);a.call(l)}}Bc(e,o,t,r)}else o=ay(n,e,t,r,i);return yc(o)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(fh(e,n|1),zn(e,Yt()),!(Mt&6)&&(uo=Yt()+500,Nr()))}break;case 13:ls(function(){var i=Zi(t,1);if(i!==null){var r=bn();xi(i,t,1,r)}}),Xh(t,1)}};hh=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=bn();xi(e,t,134217728,n)}Xh(t,134217728)}};Rg=function(t){if(t.tag===13){var e=Er(t),n=Zi(t,e);if(n!==null){var i=bn();xi(n,t,e,i)}Xh(t,e)}};Pg=function(){return Rt};Lg=function(t,e){var n=Rt;try{return Rt=t,e()}finally{Rt=n}};Rd=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nc(i);if(!r)throw Error(ve(90));lg(i),Md(i,r)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};vg=Bh;_g=ls;var ly={usingClientEntryPoint:!1,Events:[Na,Bs,Nc,mg,gg,Bh]},Uo={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Rc=ol.inject(cy),Pi=ol}catch{}}Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;Zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(ve(200));return sy(t,e,null,n)};Zn.createRoot=function(t,e){if(!Yh(t))throw Error(ve(299));var n=!1,i="",r=Qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wh(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,ga(t.nodeType===8?t.parentNode:t),new jh(e)};Zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};Zn.flushSync=function(t){return ls(t)};Zn.hydrate=function(t,e,n){if(!Vc(e))throw Error(ve(200));return Gc(null,t,e,!0,n)};Zn.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Zn.render=function(t,e,n){if(!Vc(e))throw Error(ve(200));return Gc(null,t,e,!1,n)};Zn.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(ve(40));return t._reactRootContainer?(ls(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Zn.unstable_batchedUpdates=Bh;Zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vc(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return Gc(t,e,n,!1,i)};Zn.version="18.3.1-next-f1338f8080-20240426";function e_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e_)}catch(t){console.error(t)}}e_(),eg.exports=Zn;var uy=eg.exports,t_,Dm=uy;t_=Dm.createRoot,Dm.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="180",dy=0,Nm=1,fy=2,n_=1,i_=2,Hi=3,Rr=0,Bn=1,bi=2,Tr=0,eo=1,Im=2,Um=3,Fm=4,hy=5,qr=100,py=101,my=102,gy=103,vy=104,_y=200,xy=201,yy=202,Sy=203,cf=204,uf=205,My=206,Ey=207,wy=208,Ty=209,Ay=210,by=211,Cy=212,Ry=213,Py=214,df=0,ff=1,hf=2,fo=3,pf=4,mf=5,gf=6,vf=7,r_=0,Ly=1,Dy=2,Ar=0,Ny=1,Iy=2,Uy=3,s_=4,Fy=5,Oy=6,ky=7,o_=300,ho=301,po=302,_f=303,xf=304,Wc=306,Sc=1e3,Qr=1001,yf=1002,yi=1003,zy=1004,al=1005,Ci=1006,Ru=1007,es=1008,Ni=1009,a_=1010,l_=1011,Ta=1012,$h=1013,cs=1014,ji=1015,Ua=1016,Kh=1017,Zh=1018,Aa=1020,c_=35902,u_=35899,d_=1021,f_=1022,vi=1023,ba=1026,Ca=1027,h_=1028,Jh=1029,p_=1030,Qh=1031,ep=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,Sf=35840,Mf=35841,Ef=35842,wf=35843,Tf=36196,Af=37492,bf=37496,Cf=37808,Rf=37809,Pf=37810,Lf=37811,Df=37812,Nf=37813,If=37814,Uf=37815,Ff=37816,Of=37817,kf=37818,zf=37819,Bf=37820,Hf=37821,Vf=36492,Gf=36494,Wf=36495,Xf=36283,jf=36284,Yf=36285,qf=36286,By=3200,Hy=3201,m_=0,Vy=1,pr="",In="srgb",mo="srgb-linear",Mc="linear",Nt="srgb",Ss=7680,Om=519,Gy=512,Wy=513,Xy=514,g_=515,jy=516,Yy=517,qy=518,$y=519,km=35044,zm="300 es",Ri=2e3,Ec=2001;class yo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=Math.PI/180,$f=180/Math.PI;function Fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ut(t,e,n){return Math.max(e,Math.min(n,t))}function Ky(t,e){return(t%e+e)%e}function Lu(t,e,n){return(1-n)*t+n*e}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==p||f!==_){let g=1-a;const u=l*h+c*p+f*_+d*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const A=Math.sqrt(v),b=Math.atan2(A,u*m);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A}const x=a*m;if(l=l*g+h*x,c=c*g+p*x,f=f*g+_*x,d=d*g+y*x,g===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-a*p,e[n+2]=c*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new k,Bm=new Oa;class st{constructor(e,n,i,r,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],y=r[0],g=r[3],u=r[6],m=r[1],v=r[4],x=r[7],A=r[2],b=r[5],R=r[8];return s[0]=o*y+a*m+l*A,s[3]=o*g+a*v+l*b,s[6]=o*u+a*x+l*R,s[1]=c*y+f*m+d*A,s[4]=c*g+f*v+d*b,s[7]=c*u+f*x+d*R,s[2]=h*y+p*m+_*A,s[5]=h*g+p*v+_*b,s[8]=h*u+p*x+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new st;function v_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zy(){const t=wc("canvas");return t.style.display="block",t}const Hm={};function Ra(t){t in Hm||(Hm[t]=!0,console.warn(t))}function Jy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vm=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){const t={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ra("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ra("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[mo]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Et=Qy();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function to(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=wc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;const Uu=new k;class Cn extends yo{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=Qr,r=Qr,s=Ci,o=es,a=vi,l=Ni,c=Cn.DEFAULT_ANISOTROPY,f=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Fa(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=o_;Cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,A=(u+1)/2,b=(f+h)/4,R=(d+y)/4,P=(_+g)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=R/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=P/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-y)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this.w=ut(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this.w=ut(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends yo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Cn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new tp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),cl.subVectors(this.max,Oo),Es.subVectors(e.a,Oo),ws.subVectors(e.b,Oo),Ts.subVectors(e.c,Oo),ir.subVectors(ws,Es),rr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-kr.z,kr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,kr.z,0,-kr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-kr.y,kr.x,0];return!Fu(n,Es,ws,Ts,cl)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,Es,ws,Ts,cl))?!1:(ul.crossVectors(ir,rr),n=[ul.x,ul.y,ul.z],Fu(n,Es,ws,Ts,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,ll=new ka,Es=new k,ws=new k,Ts=new k,ir=new k,rr=new k,kr=new k,Oo=new k,cl=new k,ul=new k,zr=new k;function Fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zr.fromArray(t,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=n.dot(zr),f=i.dot(zr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const sS=new ka,ko=new k,Ou=new k;class Xc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Ou)),this.expandByPoint(ko.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new k,ku=new k,dl=new k,sr=new k,zu=new k,fl=new k,Bu=new k;class np{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(dl),a=sr.dot(this.direction),l=-sr.dot(dl),c=sr.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ku).addScaledVector(dl,h),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),fl.subVectors(i,e),Bu.crossVectors(zu,fl);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(fl.crossVectors(sr,fl));if(l<0)return null;const c=a*this.direction.dot(zu.cross(sr));if(c<0||l+c>o)return null;const f=-a*sr.dot(Bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,g)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,aS)}lookAt(e,n,i){const r=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),or.crossVectors(i,Gn),or.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),or.crossVectors(i,Gn)),or.normalize(),hl.crossVectors(Gn,or),r[0]=or.x,r[4]=hl.x,r[8]=Gn.x,r[1]=or.y,r[5]=hl.y,r[9]=Gn.y,r[2]=or.z,r[6]=hl.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],y=i[6],g=i[10],u=i[14],m=i[3],v=i[7],x=i[11],A=i[15],b=r[0],R=r[4],P=r[8],T=r[12],S=r[1],U=r[5],I=r[9],Y=r[13],ee=r[2],re=r[6],se=r[10],J=r[14],N=r[3],W=r[7],j=r[11],he=r[15];return s[0]=o*b+a*S+l*ee+c*N,s[4]=o*R+a*U+l*re+c*W,s[8]=o*P+a*I+l*se+c*j,s[12]=o*T+a*Y+l*J+c*he,s[1]=f*b+d*S+h*ee+p*N,s[5]=f*R+d*U+h*re+p*W,s[9]=f*P+d*I+h*se+p*j,s[13]=f*T+d*Y+h*J+p*he,s[2]=_*b+y*S+g*ee+u*N,s[6]=_*R+y*U+g*re+u*W,s[10]=_*P+y*I+g*se+u*j,s[14]=_*T+y*Y+g*J+u*he,s[3]=m*b+v*S+x*ee+A*N,s[7]=m*R+v*U+x*re+A*W,s[11]=m*P+v*I+x*se+A*j,s[15]=m*T+v*Y+x*J+A*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],y=e[13],g=e[14],u=e[15],m=d*g*c-y*h*c+y*l*p-a*g*p-d*l*u+a*h*u,v=_*h*c-f*g*c-_*l*p+o*g*p+f*l*u-o*h*u,x=f*y*c-_*d*c+_*a*p-o*y*p-f*a*u+o*d*u,A=_*d*l-f*y*l-_*a*h+o*y*h+f*a*g-o*d*g,b=n*m+i*v+r*x+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=m*R,e[1]=(y*h*s-d*g*s-y*r*p+i*g*p+d*r*u-i*h*u)*R,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*R,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(f*g*s-_*h*s+_*r*p-n*g*p-f*r*u+n*h*u)*R,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=x*R,e[9]=(_*d*s-f*y*s-_*i*p+n*y*p+f*i*u-n*d*u)*R,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*R,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*R,e[12]=A*R,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*g+n*d*g)*R,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*R,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,_=s*d,y=o*f,g=o*d,u=a*d,m=l*c,v=l*f,x=l*d,A=i.x,b=i.y,R=i.z;return r[0]=(1-(y+u))*A,r[1]=(p+x)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(h+u))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(_+v)*R,r[9]=(g-m)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const c=1/s,f=1/o,d=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=f,di.elements[5]*=f,di.elements[6]*=f,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,n.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(o-s),y=o*s/(o-s);else if(a===Ri)_=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ec)_=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(o-s),y=o/(o-s);else if(a===Ri)_=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ec)_=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const As=new k,di=new zt,oS=new k(0,0,0),aS=new k(1,1,1),or=new k,hl=new k,Gn=new k,Wm=new zt,Xm=new Oa;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const jm=new k,bs=new Oa,ki=new zt,pl=new k,zo=new k,cS=new k,uS=new Oa,Ym=new k(1,0,0),qm=new k(0,1,0),$m=new k(0,0,1),Km={type:"added"},dS={type:"removed"},Cs={type:"childadded",child:null},Hu={type:"childremoved",child:null};class on extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new k,n=new Ii,i=new Oa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new st}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,n){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pl.copy(e):pl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(zo,pl,this.up):ki.lookAt(pl,zo,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(ki),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dS),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,cS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new k(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new k,zi=new k,Vu=new k,Bi=new k,Rs=new k,Ps=new k,Zm=new k,Gu=new k,Wu=new k,Xu=new k,ju=new It,Yu=new It,qu=new It;class gi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),fi.subVectors(e,n),r.cross(fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){fi.subVectors(r,n),zi.subVectors(i,n),Vu.subVectors(e,n);const o=fi.dot(fi),a=fi.dot(zi),l=fi.dot(Vu),c=zi.dot(zi),f=zi.dot(Vu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ju.setScalar(0),Yu.setScalar(0),qu.setScalar(0),ju.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ju,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector(qu,s.z),o}static isFrontFacing(e,n,i,r){return fi.subVectors(i,n),zi.subVectors(e,n),fi.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),fi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return gi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Ps.subVectors(s,i),Gu.subVectors(e,i);const l=Rs.dot(Gu),c=Ps.dot(Gu);if(l<=0&&c<=0)return n.copy(i);Wu.subVectors(e,r);const f=Rs.dot(Wu),d=Ps.dot(Wu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Rs,o);Xu.subVectors(e,s);const p=Rs.dot(Xu),_=Ps.dot(Xu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ps,a);const g=f*_-p*d;if(g<=0&&d-f>=0&&p-_>=0)return Zm.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(Zm,a);const u=1/(g+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ml={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Et.workingColorSpace){return this.r=e,this.g=n,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Et.workingColorSpace){if(e=Ky(e,1),n=ut(n,0,1),i=ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Et.workingToColorSpace(vn.copy(this),e),Math.round(ut(vn.r*255,0,255))*65536+Math.round(ut(vn.g*255,0,255))*256+Math.round(ut(vn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=In){Et.workingToColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,r=vn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(ml);const i=Lu(ar.h,ml.h,n),r=Lu(ar.s,ml.s,n),s=Lu(ar.l,ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new _t;_t.NAMES=x_;let fS=0;class So extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=eo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=uf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cf&&(i.blendSrc=this.blendSrc),this.blendDst!==uf&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jc extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new k,gl=new je;let hS=0;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array),s=Ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class y_ extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const Qn=new zt,Ku=new on,Ls=new k,Wn=new ka,Bo=new ka,nn=new k;class an extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?S_:y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,i){return Qn.makeTranslation(e,n,i),this.applyMatrix4(Qn),this}scale(e,n,i){return Qn.makeScale(e,n,i),this.applyMatrix4(Qn),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Wn.min,Bo.min),Wn.expandByPoint(nn),nn.addVectors(Wn.max,Bo.max),Wn.expandByPoint(nn)):(Wn.expandByPoint(Bo.min),Wn.expandByPoint(Bo.max))}Wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)nn.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),nn.add(Ls)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,f=new k,d=new k,h=new je,p=new je,_=new je,y=new k,g=new k;function u(P,T,S){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(U),a[P].add(y),a[T].add(y),a[S].add(y),l[P].add(g),l[T].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let P=0,T=m.length;P<T;++P){const S=m[P],U=S.start,I=S.count;for(let Y=U,ee=U+I;Y<ee;Y+=3)u(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const v=new k,x=new k,A=new k,b=new k;function R(P){A.fromBufferAttribute(r,P),b.copy(A);const T=a[P];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(b,T);const U=x.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,U)}for(let P=0,T=m.length;P<T;++P){const S=m[P],U=S.start,I=S.count;for(let Y=U,ee=U+I;Y<ee;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new Di(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new zt,Br=new np,vl=new Xc,Qm=new k,_l=new k,xl=new k,yl=new k,Zu=new k,Sl=new k,e0=new k,Ml=new k;class me extends on{constructor(e=new an,n=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Zu.fromBufferAttribute(d,e),o?Sl.addScaledVector(Zu,f):Sl.addScaledVector(Zu.sub(n),f))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(vl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(vl,Qm)===null||Br.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,A=v;x<A;x+=3){const b=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);r=El(this,u,e,i,c,f,d,b,R,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,u=y;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=El(this,o,e,i,c,f,d,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,A=v;x<A;x+=3){const b=x,R=x+1,P=x+2;r=El(this,u,e,i,c,f,d,b,R,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,u=y;g<u;g+=3){const m=g,v=g+1,x=g+2;r=El(this,o,e,i,c,f,d,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ml);return c<n.near||c>n.far?null:{distance:c,point:Ml.clone(),object:t}}function El(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,_l),t.getVertexPosition(l,xl),t.getVertexPosition(c,yl);const f=mS(t,e,n,i,_l,xl,yl,e0);if(f){const d=new k;gi.getBarycoord(e0,_l,xl,yl,d),r&&(f.uv=gi.getInterpolatedAttribute(r,a,l,c,d,new je)),s&&(f.uv1=gi.getInterpolatedAttribute(s,a,l,c,d,new je)),o&&(f.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};gi.getNormal(_l,xl,yl,h.normal),f.face=h,f.barycoord=d}return f}class An extends an{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(d,2));function _(y,g,u,m,v,x,A,b,R,P,T){const S=x/R,U=A/P,I=x/2,Y=A/2,ee=b/2,re=R+1,se=P+1;let J=0,N=0;const W=new k;for(let j=0;j<se;j++){const he=j*U-Y;for(let He=0;He<re;He++){const ft=He*S-I;W[y]=ft*m,W[g]=he*v,W[u]=ee,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[u]=b>0?1:-1,f.push(W.x,W.y,W.z),d.push(He/R),d.push(1-j/P),J+=1}}for(let j=0;j<P;j++)for(let he=0;he<R;he++){const He=h+he+re*j,ft=h+he+re*(j+1),lt=h+(he+1)+re*(j+1),Me=h+(he+1)+re*j;l.push(He,ft,Me),l.push(ft,lt,Me),N+=6}a.addGroup(p,N,T),p+=N,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function wn(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const vS={clone:go,merge:wn};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E_ extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new k,t0=new je,n0=new je;class Yn extends E_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,t0,n0),n.subVectors(n0,t0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Ns=1;class yS extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Ds,Ns,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Ds,Ns,e,n);s.layers=this.layers,this.add(s);const o=new Yn(Ds,Ns,e,n);o.layers=this.layers,this.add(o);const a=new Yn(Ds,Ns,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Ds,Ns,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Ds,Ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class w_ extends Cn{constructor(e=[],n=ho,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new w_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new An(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Tr});s.uniforms.tEquirect.value=n;const o=new me(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=Ci),new yS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class rt extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=n}clone(){return new rp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ES extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qu=new k,wS=new k,TS=new st;class jr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(wS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Xc,AS=new je(.5,.5),wl=new k;class sp{constructor(e=new jr,n=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],_=s[8],y=s[9],g=s[10],u=s[11],m=s[12],v=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-o,p-f,u-_,A-m).normalize(),r[1].setComponents(c+o,p+f,u+_,A+m).normalize(),r[2].setComponents(c+a,p+d,u+y,A+v).normalize(),r[3].setComponents(c-a,p-d,u-y,A-v).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,p-h,u-g,A-x).normalize();else if(r[4].setComponents(c-l,p-h,u-g,A-x).normalize(),n===Ri)r[5].setComponents(c+l,p+h,u+g,A+x).normalize();else if(n===Ec)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=AS.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wl.x=r.normal.x>0?e.max.x:e.min.x,wl.y=r.normal.y>0?e.max.y:e.min.y,wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kf extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new k,Ac=new k,i0=new zt,Ho=new np,Tl=new Xc,ed=new k,r0=new k;class s0 extends on{constructor(e=new an,n=new Kf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tc.fromBufferAttribute(n,r-1),Ac.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=s,e.ray.intersectsSphere(Tl)===!1)return;i0.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(i0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const u=f.getX(y),m=f.getX(y+1),v=Al(this,e,Ho,l,u,m,y);v&&n.push(v)}if(this.isLineLoop){const y=f.getX(_-1),g=f.getX(p),u=Al(this,e,Ho,l,y,g,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const u=Al(this,e,Ho,l,y,y+1,y);u&&n.push(u)}if(this.isLineLoop){const y=Al(this,e,Ho,l,_-1,p,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Al(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Tc.fromBufferAttribute(a,r),Ac.fromBufferAttribute(a,s),n.distanceSqToSegment(Tc,Ac,ed,r0)>i)return;ed.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ed);if(!(c<e.near||c>e.far))return{distance:c,point:r0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class bS extends Cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T_ extends Cn{constructor(e,n,i=cs,r,s,o,a=yi,l=yi,c,f=ba,d=1){if(f!==ba&&f!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class A_ extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends an{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,d=Math.PI/2*e,h=n,p=2*d+h,_=i*2+s,y=r+1,g=new k,u=new k;for(let m=0;m<=_;m++){let v=0,x=0,A=0,b=0;if(m<=i){const T=m/i,S=T*Math.PI/2;x=-f-e*Math.cos(S),A=e*Math.sin(S),b=-e*Math.cos(S),v=T*d}else if(m<=i+s){const T=(m-i)/s;x=-f+T*n,A=e,b=0,v=d+T*h}else{const T=(m-i-s)/i,S=T*Math.PI/2;x=f+e*Math.sin(S),A=e*Math.cos(S),b=e*Math.sin(S),v=d+h+T*d}const R=Math.max(0,Math.min(1,v/p));let P=0;m===0?P=.5/r:m===_&&(P=-.5/r);for(let T=0;T<=r;T++){const S=T/r,U=S*Math.PI*2,I=Math.sin(U),Y=Math.cos(U);u.x=-A*Y,u.y=x,u.z=A*I,a.push(u.x,u.y,u.z),g.set(-A*Y,b,A*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+P,R)}if(m>0){const T=(m-1)*y;for(let S=0;S<r;S++){const U=T+S,I=T+S+1,Y=m*y+S,ee=m*y+S+1;o.push(U,I,Y),o.push(I,ee,Y)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class io extends an{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new k,f=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends an{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let _=0;const y=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function m(){const x=new k,A=new k;let b=0;const R=(n-e)/i;for(let P=0;P<=s;P++){const T=[],S=P/s,U=S*(n-e)+e;for(let I=0;I<=r;I++){const Y=I/r,ee=Y*l+a,re=Math.sin(ee),se=Math.cos(ee);A.x=U*re,A.y=-S*i+g,A.z=U*se,d.push(A.x,A.y,A.z),x.set(re,R,se).normalize(),h.push(x.x,x.y,x.z),p.push(Y,1-S),T.push(_++)}y.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){const S=y[T][P],U=y[T+1][P],I=y[T+1][P+1],Y=y[T][P+1];(e>0||T!==0)&&(f.push(S,U,Y),b+=3),(n>0||T!==s-1)&&(f.push(U,I,Y),b+=3)}c.addGroup(u,b,0),u+=b}function v(x){const A=_,b=new je,R=new k;let P=0;const T=x===!0?e:n,S=x===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),_++;const U=_;for(let I=0;I<=r;I++){const ee=I/r*l+a,re=Math.cos(ee),se=Math.sin(ee);R.x=T*se,R.y=g*S,R.z=T*re,d.push(R.x,R.y,R.z),h.push(0,S,0),b.x=re*.5+.5,b.y=se*.5*S+.5,p.push(b.x,b.y),_++}for(let I=0;I<r;I++){const Y=A+I,ee=U+I;x===!0?f.push(ee,ee+1,Y):f.push(ee+1,ee,Y),P+=3}c.addGroup(u,P,x===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xn extends Dn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class op extends an{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new k,x=new k,A=new k;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],x),p(n[b+2],A),l(v,x,A,m)}function l(m,v,x,A){const b=A+1,R=[];for(let P=0;P<=b;P++){R[P]=[];const T=m.clone().lerp(x,P/b),S=v.clone().lerp(x,P/b),U=b-P;for(let I=0;I<=U;I++)I===0&&P===b?R[P][I]=T:R[P][I]=T.clone().lerp(S,I/U)}for(let P=0;P<b;P++)for(let T=0;T<2*(b-P)-1;T++){const S=Math.floor(T/2);T%2===0?(h(R[P][S+1]),h(R[P+1][S]),h(R[P][S])):(h(R[P][S+1]),h(R[P+1][S+1]),h(R[P+1][S]))}}function c(m){const v=new k;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(m),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function f(){const m=new k;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const x=g(m)/2/Math.PI+.5,A=u(m)/Math.PI+.5;o.push(x,1-A)}_(),d()}function d(){for(let m=0;m<o.length;m+=6){const v=o[m+0],x=o[m+2],A=o[m+4],b=Math.max(v,x,A),R=Math.min(v,x,A);b>.9&&R<.1&&(v<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),A<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const x=m*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const m=new k,v=new k,x=new k,A=new k,b=new je,R=new je,P=new je;for(let T=0,S=0;T<s.length;T+=9,S+=6){m.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),b.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(m).add(v).add(x).divideScalar(3);const U=g(A);y(b,S+0,m,U),y(R,S+2,v,U),y(P,S+4,x,U)}}function y(m,v,x,A){A<0&&m.x===1&&(o[v]=m.x-1),x.x===0&&x.z===0&&(o[v]=A/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.vertices,e.indices,e.radius,e.details)}}class ln extends op{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ln(e.radius,e.detail)}}class er{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new je:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new zt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ut(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ut(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class b_ extends er{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new je){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*d+this.aX,c=h*d+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class CS extends b_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const bl=new k,td=new ap,nd=new ap,id=new ap;class Zf extends er{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(bl.subVectors(r[0],r[1]).add(r[0]),c=bl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),td.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,_,y,g),nd.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,_,y,g),id.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,_,y,g)}else this.curveType==="catmullrom"&&(td.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),nd.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),id.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(td.calc(l),nd.calc(l),id.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function o0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function RS(t,e){const n=1-t;return n*n*e}function PS(t,e){return 2*(1-t)*t*e}function LS(t,e){return t*t*e}function oa(t,e,n,i){return RS(t,e)+PS(t,n)+LS(t,i)}function DS(t,e){const n=1-t;return n*n*n*e}function NS(t,e){const n=1-t;return 3*n*n*t*e}function IS(t,e){return 3*(1-t)*t*t*e}function US(t,e){return t*t*t*e}function aa(t,e,n,i,r){return DS(t,e)+NS(t,n)+IS(t,i)+US(t,r)}class FS extends er{constructor(e=new je,n=new je,i=new je,r=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new je){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class OS extends er{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y),aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kS extends er{constructor(e=new je,n=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new je){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new je){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zS extends er{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class BS extends er{constructor(e=new je,n=new je,i=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new je){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends er{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y),oa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HS extends er{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new je){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(o0(a,l.x,c.x,f.x,d.x),o0(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new je().fromArray(r))}return this}}var VS=Object.freeze({__proto__:null,ArcCurve:CS,CatmullRomCurve3:Zf,CubicBezierCurve:FS,CubicBezierCurve3:OS,EllipseCurve:b_,LineCurve:kS,LineCurve3:zS,QuadraticBezierCurve:BS,QuadraticBezierCurve3:C_,SplineCurve:HS});class is extends an{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],y=[],g=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const x=v*d-s;_.push(x,-m,0),y.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,x=m+c*(u+1),A=m+1+c*(u+1),b=m+1+c*u;p.push(v,x,b),p.push(x,A,b)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nn extends an{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new k,h=new k,p=[],_=[],y=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const b=A/n;d.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(b+x,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],x=f[u][m],A=f[u+1][m],b=f[u+1][m+1];(u!==0||o>0)&&p.push(v,x,b),(u!==i-1||l<Math.PI)&&p.push(x,A,b)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _n extends an{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new k,d=new k,h=new k;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(y),d.y=(e+n*Math.cos(g))*Math.sin(y),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(y,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bc extends an{constructor(e=new C_(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new je;let f=new k;const d=[],h=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function y(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){f=e.getPointAt(v/n,f);const x=o.normals[v],A=o.binormals[v];for(let b=0;b<=r;b++){const R=b/r*Math.PI*2,P=Math.sin(R),T=-Math.cos(R);l.x=T*x.x+P*A.x,l.y=T*x.y+P*A.y,l.z=T*x.z+P*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){const A=(r+1)*(v-1)+(x-1),b=(r+1)*v+(x-1),R=(r+1)*v+x,P=(r+1)*(v-1)+x;_.push(A,b,P),_.push(b,R,P)}}function m(){for(let v=0;v<=n;v++)for(let x=0;x<=r;x++)c.x=v/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bc(new VS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dt extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GS extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lp extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class XS extends lp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const rd=new zt,a0=new k,l0=new k;class R_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),n.position.copy(a0),l0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(l0),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const c0=new zt,Vo=new k,sd=new k;class jS extends R_{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vo),sd.copy(i.position),sd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(sd),i.updateMatrixWorld(),r.makeTranslation(-Vo.x,-Vo.y,-Vo.z),c0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(c0,i.coordinateSystem,i.reversedDepth)}}class Cl extends lp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P_ extends E_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class YS extends R_{constructor(){super(new P_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u0 extends lp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new YS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qS extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const d0=new zt;class $S{constructor(e,n,i=0,r=1/0){this.ray=new np(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return d0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(d0),this}intersectObject(e,n=!0,i=[]){return Jf(e,this,i,n),i.sort(f0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Jf(e[r],this,i,n);return i.sort(f0),i}}function f0(t,e){return t.distance-e.distance}function Jf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Jf(s[o],e,n,!0)}}function h0(t,e,n,i){const r=KS(i);switch(n){case d_:return t*e;case h_:return t*e/r.components*r.byteLength;case Jh:return t*e/r.components*r.byteLength;case p_:return t*e*2/r.components*r.byteLength;case Qh:return t*e*2/r.components*r.byteLength;case f_:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case ep:return t*e*4/r.components*r.byteLength;case Xl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(t,16)*Math.max(e,8)/4;case Sf:case Ef:return Math.max(t,8)*Math.max(e,8)/2;case Tf:case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Gf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yf:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KS(t){switch(t){case Ni:case a_:return{byteLength:1,components:1};case Ta:case l_:case Ua:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case cs:case $h:case ji:return{byteLength:4,components:1};case c_:case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var JS=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,KM=`struct PhysicalMaterial {
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
}`,ZM=`
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`#include <common>
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
}`,rw=`#if DEPTH_PACKING == 3200
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
}`,sw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
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
}`,uw=`uniform vec3 diffuse;
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
}`,dw=`#include <common>
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
}`,fw=`uniform vec3 diffuse;
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
}`,hw=`#define LAMBERT
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define MATCAP
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
}`,gw=`#define MATCAP
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
}`,vw=`#define NORMAL
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
}`,_w=`#define NORMAL
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
}`,xw=`#define PHONG
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
}`,yw=`#define PHONG
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
}`,Sw=`#define STANDARD
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
}`,Mw=`#define STANDARD
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
}`,Ew=`#define TOON
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
}`,ww=`#define TOON
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
}`,Tw=`uniform float size;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,bw=`#include <common>
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
}`,Cw=`uniform vec3 color;
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
}`,Rw=`uniform float rotation;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:JS,alphahash_pars_fragment:QS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:aM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:_M,color_pars_vertex:xM,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:wM,displacementmap_vertex:TM,emissivemap_fragment:AM,emissivemap_pars_fragment:bM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:LM,envmap_pars_fragment:DM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:WM,envmap_vertex:IM,fog_vertex:UM,fog_pars_vertex:FM,fog_fragment:OM,fog_pars_fragment:kM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:GM,lights_toon_fragment:XM,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:qM,lights_physical_fragment:$M,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:JM,lights_fragment_end:QM,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:aE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:dE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:_E,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:wE,opaque_fragment:TE,packing:AE,premultiplied_alpha_fragment:bE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:IE,shadowmap_vertex:UE,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:kE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:HE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:jE,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:$E,worldpos_vertex:KE,background_vert:ZE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:ew,cube_vert:tw,cube_frag:nw,depth_vert:iw,depth_frag:rw,distanceRGBA_vert:sw,distanceRGBA_frag:ow,equirect_vert:aw,equirect_frag:lw,linedashed_vert:cw,linedashed_frag:uw,meshbasic_vert:dw,meshbasic_frag:fw,meshlambert_vert:hw,meshlambert_frag:pw,meshmatcap_vert:mw,meshmatcap_frag:gw,meshnormal_vert:vw,meshnormal_frag:_w,meshphong_vert:xw,meshphong_frag:yw,meshphysical_vert:Sw,meshphysical_frag:Mw,meshtoon_vert:Ew,meshtoon_frag:ww,points_vert:Tw,points_frag:Aw,shadow_vert:bw,shadow_frag:Cw,sprite_vert:Rw,sprite_frag:Pw},Pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:wn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:wn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:wn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:wn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:wn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:wn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:wn([Pe.common,Pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:wn([Pe.lights,Pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Rl={r:0,b:0,g:0},Vr=new Ii,Lw=new zt;function Dw(t,e,n,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const A=_(v);A===null?u(a,l):A&&A.isColor&&(u(A,1),x=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Wc)?(f===void 0&&(f=new me(new An(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:go(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Vr.copy(x.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(Vr)),f.material.toneMapped=Et.getTransfer(A.colorSpace)!==Nt,(d!==A||h!==A.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new me(new is(2,2),new Pr({name:"BackgroundMaterial",uniforms:go(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Et.getTransfer(A.colorSpace)!==Nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Rl,M_(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,x,o)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:g,dispose:m}}function Nw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,U,I,Y,ee){let re=!1;const se=d(Y,I,U);s!==se&&(s=se,c(s.object)),re=p(S,Y,I,ee),re&&_(S,Y,I,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,x(S,U,I,Y),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,U,I){const Y=I.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let re=ee[U.id];re===void 0&&(re={},ee[U.id]=re);let se=re[Y];return se===void 0&&(se=h(l()),re[Y]=se),se}function h(S){const U=[],I=[],Y=[];for(let ee=0;ee<n;ee++)U[ee]=0,I[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:Y,object:S,attributes:{},index:null}}function p(S,U,I,Y){const ee=s.attributes,re=U.attributes;let se=0;const J=I.getAttributes();for(const N in J)if(J[N].location>=0){const j=ee[N];let he=re[N];if(he===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;se++}return s.attributesNum!==se||s.index!==Y}function _(S,U,I,Y){const ee={},re=U.attributes;let se=0;const J=I.getAttributes();for(const N in J)if(J[N].location>=0){let j=re[N];j===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const he={};he.attribute=j,j&&j.data&&(he.data=j.data),ee[N]=he,se++}s.attributes=ee,s.attributesNum=se,s.index=Y}function y(){const S=s.newAttributes;for(let U=0,I=S.length;U<I;U++)S[U]=0}function g(S){u(S,0)}function u(S,U){const I=s.newAttributes,Y=s.enabledAttributes,ee=s.attributeDivisors;I[S]=1,Y[S]===0&&(t.enableVertexAttribArray(S),Y[S]=1),ee[S]!==U&&(t.vertexAttribDivisor(S,U),ee[S]=U)}function m(){const S=s.newAttributes,U=s.enabledAttributes;for(let I=0,Y=U.length;I<Y;I++)U[I]!==S[I]&&(t.disableVertexAttribArray(I),U[I]=0)}function v(S,U,I,Y,ee,re,se){se===!0?t.vertexAttribIPointer(S,U,I,ee,re):t.vertexAttribPointer(S,U,I,Y,ee,re)}function x(S,U,I,Y){y();const ee=Y.attributes,re=I.getAttributes(),se=U.defaultAttributeValues;for(const J in re){const N=re[J];if(N.location>=0){let W=ee[J];if(W===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const j=W.normalized,he=W.itemSize,He=e.get(W);if(He===void 0)continue;const ft=He.buffer,lt=He.type,Me=He.bytesPerElement,ie=lt===t.INT||lt===t.UNSIGNED_INT||W.gpuType===$h;if(W.isInterleavedBufferAttribute){const oe=W.data,Te=oe.stride,Ke=W.offset;if(oe.isInstancedInterleavedBuffer){for(let We=0;We<N.locationSize;We++)u(N.location+We,oe.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let We=0;We<N.locationSize;We++)g(N.location+We);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let We=0;We<N.locationSize;We++)v(N.location+We,he/N.locationSize,lt,j,Te*Me,(Ke+he/N.locationSize*We)*Me,ie)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<N.locationSize;oe++)u(N.location+oe,W.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let oe=0;oe<N.locationSize;oe++)v(N.location+oe,he/N.locationSize,lt,j,he*Me,he/N.locationSize*oe*Me,ie)}}else if(se!==void 0){const j=se[J];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(N.location,j);break;case 3:t.vertexAttrib3fv(N.location,j);break;case 4:t.vertexAttrib4fv(N.location,j);break;default:t.vertexAttrib1fv(N.location,j)}}}}m()}function A(){P();for(const S in i){const U=i[S];for(const I in U){const Y=U[I];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete U[I]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const I in U){const Y=U[I];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete U[I]}delete i[S.id]}function R(S){for(const U in i){const I=i[U];if(I[S.id]===void 0)continue;const Y=I[S.id];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete I[S.id]}}function P(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function Iw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y]*h[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==vi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ni&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ji&&!P)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function Fw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new jr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,v=m*4;let x=u.clippingState||null;l.value=x,x=f(_,h,v,p);for(let A=0;A!==v;++A)x[A]=n[A];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Ow(t){let e=new WeakMap;function n(o,a){return a===_f?o.mapping=ho:a===xf&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_f||a===xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ys=4,p0=[.125,.215,.35,.446,.526,.582],$r=20,od=new P_,m0=new _t;let ad=null,ld=0,cd=0,ud=!1;const Yr=(1+Math.sqrt(5))/2,Is=1/Yr,g0=[new k(-Yr,Is,0),new k(Yr,Is,0),new k(-Is,0,Yr),new k(Is,0,Yr),new k(0,Yr,-Is),new k(0,Yr,Is),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],kw=new k;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kw}=s;ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Ua,format:vi,colorSpace:mo,depthBuffer:!1},r=_0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zw(s)),this._blurMaterial=Bw(s,e,n)}return r}_compileMaterial(e){const n=new me(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,i,r,s){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(m0),d.toneMapping=Ar,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new jc({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new me(new An,y);let u=!1;const m=e.background;m?m.isColor&&(y.color.copy(m),e.background=null,u=!0):(y.color.copy(m0),u=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const A=this._cubeSize;Pl(r,x*A,v>2?A:0,A,A),d.setRenderTarget(r),u&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ho||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,od)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=g0[(r-s-1)%g0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new me(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),y=s/_,g=isFinite(s)?1+Math.floor(f*y):$r;g>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);const u=[];let m=0;for(let R=0;R<$r;++R){const P=R/y,T=Math.exp(-P*P/2);u.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const x=this._sizeLods[r],A=3*x*(r>v-Ys?r-v+Ys:0),b=4*(this._cubeSize-x);Pl(n,A,b,3*x,2*x),l.setRenderTarget(n),l.render(d,od)}}function zw(t){const e=[],n=[],i=[];let r=t;const s=t-Ys+1+p0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ys?l=p0[o-t+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,y=3,g=2,u=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),x=new Float32Array(u*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,P=b>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];m.set(T,y*_*b),v.set(h,g*_*b);const S=[b,b,b,b,b,b];x.set(S,u*_*b)}const A=new an;A.setAttribute("position",new Di(m,y)),A.setAttribute("uv",new Di(v,g)),A.setAttribute("faceIndex",new Di(x,u)),e.push(A),r>Ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _0(t,e,n){const i=new us(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Bw(t,e,n){const i=new Float32Array($r),r=new k(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function x0(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function y0(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function Hw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_f||l===xf,f=l===ho||l===po;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new v0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new v0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Vw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ra("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let v=0,x=m.length;v<x;v+=3){const A=m[v+0],b=m[v+1],R=m[v+2];h.push(A,b,b,R,R,A)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,x=m.length/3-1;v<x;v+=3){const A=v+0,b=v+1,R=v+2;h.push(A,b,b,R,R,A)}}else return;const g=new(v_(h)?S_:y_)(h,1);g.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Ww(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function d(h,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*y[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Xw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jw(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let A=a.attributes.position.count*x,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*b*4*d),P=new __(R,A,b,d);P.type=ji,P.needsUpdate=!0;const T=x*4;for(let U=0;U<d;U++){const I=u[U],Y=m[U],ee=v[U],re=A*b*4*U;for(let se=0;se<I.count;se++){const J=se*T;_===!0&&(r.fromBufferAttribute(I,se),R[re+J+0]=r.x,R[re+J+1]=r.y,R[re+J+2]=r.z,R[re+J+3]=0),y===!0&&(r.fromBufferAttribute(Y,se),R[re+J+4]=r.x,R[re+J+5]=r.y,R[re+J+6]=r.z,R[re+J+7]=0),g===!0&&(r.fromBufferAttribute(ee,se),R[re+J+8]=r.x,R[re+J+9]=r.y,R[re+J+10]=r.z,R[re+J+11]=ee.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new je(A,b)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Yw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const D_=new Cn,S0=new T_(1,1),N_=new __,I_=new rS,U_=new w_,M0=[],E0=[],w0=new Float32Array(16),T0=new Float32Array(9),A0=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=M0[r];if(s===void 0&&(s=new Float32Array(r),M0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=E0[e];n===void 0&&(n=new Int32Array(e),E0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function Jw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;A0.set(i),t.uniformMatrix2fv(this.addr,!1,A0),tn(n,i)}}function Qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),tn(n,i)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;w0.set(i),t.uniformMatrix4fv(this.addr,!1,w0),tn(n,i)}}function t2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function s2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(S0.compareFunction=g_,s=S0):s=D_,n.setTexture2D(e||s,r)}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||I_,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||U_,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function h2(t){switch(t){case 5126:return qw;case 35664:return $w;case 35665:return Kw;case 35666:return Zw;case 35674:return Jw;case 35675:return Qw;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return f2}}function p2(t,e){t.uniform1fv(this.addr,e)}function m2(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function g2(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function v2(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function _2(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function x2(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y2(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S2(t,e){t.uniform1iv(this.addr,e)}function M2(t,e){t.uniform2iv(this.addr,e)}function E2(t,e){t.uniform3iv(this.addr,e)}function w2(t,e){t.uniform4iv(this.addr,e)}function T2(t,e){t.uniform1uiv(this.addr,e)}function A2(t,e){t.uniform2uiv(this.addr,e)}function b2(t,e){t.uniform3uiv(this.addr,e)}function C2(t,e){t.uniform4uiv(this.addr,e)}function R2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||D_,s[o])}function P2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||I_,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||U_,s[o])}function D2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N_,s[o])}function N2(t){switch(t){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return v2;case 35674:return _2;case 35675:return x2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return w2;case 5125:return T2;case 36294:return A2;case 36295:return b2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return D2}}class I2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=h2(n.type)}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}}class F2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function b0(t,e){t.seq.push(e),t.map[e.id]=e}function O2(t,e,n){const i=t.name,r=i.length;for(dd.lastIndex=0;;){const s=dd.exec(i),o=dd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){b0(n,c===void 0?new I2(a,t,e):new U2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new F2(a),b0(n,d)),n=d}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);O2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function C0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const k2=37297;let z2=0;function B2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const R0=new st;function H2(t){Et._getMatrix(R0,Et.workingColorSpace,t);const e=`mat3( ${R0.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(t)){case Mc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function P0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+B2(t.getShaderSource(e),a)}else return s}function V2(t,e){const n=H2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function G2(t,e){let n;switch(e){case Ny:n="Linear";break;case Iy:n="Reinhard";break;case Uy:n="Cineon";break;case s_:n="ACESFilmic";break;case Oy:n="AgX";break;case ky:n="Neutral";break;case Fy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new k;function W2(){Et.getLuminanceCoefficients(Ll);const t=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function j2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ko(t){return t!==""}function L0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(t){return t.replace(q2,K2)}const $2=new Map;function K2(t,e){let n=at[e];if(n===void 0){const i=$2.get(e);if(i!==void 0)n=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(t){return t.replace(Z2,J2)}function J2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function I0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Q2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case Ly:e="ENVMAP_BLENDING_MIX";break;case Dy:e="ENVMAP_BLENDING_ADD";break}return e}function iT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Q2(n),c=eT(n),f=tT(n),d=nT(n),h=iT(n),p=X2(n),_=j2(s),y=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ko).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ko).join(`
`),u.length>0&&(u+=`
`)):(g=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),u=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?at.tonemapping_pars_fragment:"",n.toneMapping!==Ar?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,V2("linearToOutputTexel",n.outputColorSpace),W2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),o=Qf(o),o=L0(o,n),o=D0(o,n),a=Qf(a),a=L0(a,n),a=D0(a,n),o=N0(o),a=N0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,x=m+u+a,A=C0(r,r.VERTEX_SHADER,v),b=C0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(U){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y)||"",Y=r.getShaderInfoLog(A)||"",ee=r.getShaderInfoLog(b)||"",re=I.trim(),se=Y.trim(),J=ee.trim();let N=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,b);else{const j=P0(r,A,"vertex"),he=P0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+re+`
`+j+`
`+he)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(se===""||J==="")&&(W=!1);W&&(U.diagnostics={runnable:N,programLog:re,vertexShader:{log:se,prefix:g},fragmentShader:{log:J,prefix:u}})}r.deleteShader(A),r.deleteShader(b),P=new $l(r,y),T=Y2(r,y)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,k2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=b,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t,e,n,i,r,s,o){const a=new ip,l=new oT,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,S,U,I,Y){const ee=I.fog,re=Y.geometry,se=T.isMeshStandardMaterial?I.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||se),N=J&&J.mapping===Wc?J.image.height:null,W=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const j=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,he=j!==void 0?j.length:0;let He=0;re.morphAttributes.position!==void 0&&(He=1),re.morphAttributes.normal!==void 0&&(He=2),re.morphAttributes.color!==void 0&&(He=3);let ft,lt,Me,ie;if(W){const mt=Ti[W];ft=mt.vertexShader,lt=mt.fragmentShader}else ft=T.vertexShader,lt=T.fragmentShader,l.update(T),Me=l.getVertexShaderID(T),ie=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Ke=Y.isInstancedMesh===!0,We=Y.isBatchedMesh===!0,ot=!!T.map,qt=!!T.matcap,O=!!J,Tt=!!T.aoMap,et=!!T.lightMap,Je=!!T.bumpMap,z=!!T.normalMap,Se=!!T.displacementMap,ne=!!T.emissiveMap,fe=!!T.metalnessMap,De=!!T.roughnessMap,Ue=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,X=T.iridescence>0,te=T.sheen>0,ce=T.transmission>0,Q=Ue&&!!T.anisotropyMap,Le=L&&!!T.clearcoatMap,_e=L&&!!T.clearcoatNormalMap,Ve=L&&!!T.clearcoatRoughnessMap,ke=X&&!!T.iridescenceMap,xe=X&&!!T.iridescenceThicknessMap,Ce=te&&!!T.sheenColorMap,Ge=te&&!!T.sheenRoughnessMap,ze=!!T.specularMap,be=!!T.specularColorMap,nt=!!T.specularIntensityMap,H=ce&&!!T.transmissionMap,ye=ce&&!!T.thicknessMap,Ee=!!T.gradientMap,Fe=!!T.alphaMap,ge=T.alphaTest>0,ae=!!T.alphaHash,Be=!!T.extensions;let tt=Ar;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(tt=t.toneMapping);const bt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:ft,fragmentShader:lt,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:We,batchingColor:We&&Y._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Y.instanceColor!==null,instancingMorph:Ke&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:mo,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:qt,envMap:O,envMapMode:O&&J.mapping,envMapCubeUVHeight:N,aoMap:Tt,lightMap:et,bumpMap:Je,normalMap:z,displacementMap:h&&Se,emissiveMap:ne,normalMapObjectSpace:z&&T.normalMapType===Vy,normalMapTangentSpace:z&&T.normalMapType===m_,metalnessMap:fe,roughnessMap:De,anisotropy:Ue,anisotropyMap:Q,clearcoat:L,clearcoatMap:Le,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:X,iridescenceMap:ke,iridescenceThicknessMap:xe,sheen:te,sheenColorMap:Ce,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:be,specularIntensityMap:nt,transmission:ce,transmissionMap:H,thicknessMap:ye,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===eo&&T.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ge,alphaHash:ae,combine:T.combine,mapUv:ot&&y(T.map.channel),aoMapUv:Tt&&y(T.aoMap.channel),lightMapUv:et&&y(T.lightMap.channel),bumpMapUv:Je&&y(T.bumpMap.channel),normalMapUv:z&&y(T.normalMap.channel),displacementMapUv:Se&&y(T.displacementMap.channel),emissiveMapUv:ne&&y(T.emissiveMap.channel),metalnessMapUv:fe&&y(T.metalnessMap.channel),roughnessMapUv:De&&y(T.roughnessMap.channel),anisotropyMapUv:Q&&y(T.anisotropyMap.channel),clearcoatMapUv:Le&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:_e&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(T.sheenRoughnessMap.channel),specularMapUv:ze&&y(T.specularMap.channel),specularColorMapUv:be&&y(T.specularColorMap.channel),specularIntensityMapUv:nt&&y(T.specularIntensityMap.channel),transmissionMapUv:H&&y(T.transmissionMap.channel),thicknessMapUv:ye&&y(T.thicknessMap.channel),alphaMapUv:Fe&&y(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(z||Ue),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(ot||Fe),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bi,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function u(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)S.push(U),S.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(m(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function m(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let U;if(S){const I=Ti[S];U=vS.clone(I.uniforms)}else U=T.uniforms;return U}function A(T,S){let U;for(let I=0,Y=f.length;I<Y;I++){const ee=f[I];if(ee.cacheKey===S){U=ee,++U.usedTimes;break}}return U===void 0&&(U=new rT(t,S,T,s),f.push(U)),U}function b(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function R(T){l.remove(T)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:f,dispose:P}}function cT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function U0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function F0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,y,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=g),e++,u}function a(d,h,p,_,y,g){const u=o(d,h,p,_,y,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,y,g){const u=o(d,h,p,_,y,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||uT),i.length>1&&i.sort(h||U0),r.length>1&&r.sort(h||U0)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function dT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new F0,t.set(i,[o])):r>=s.length?(o=new F0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new _t};break;case"SpotLight":n={position:new k,direction:new k,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pT=0;function mT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gT(t){const e=new fT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new zt,o=new zt;function a(c){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,g=0,u=0,m=0,v=0,x=0,A=0,b=0,R=0;c.sort(mT);for(let T=0,S=c.length;T<S;T++){const U=c[T],I=U.color,Y=U.intensity,ee=U.distance,re=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=I.r*Y,d+=I.g*Y,h+=I.b*Y;else if(U.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(U.sh.coefficients[se],Y);R++}else if(U.isDirectionalLight){const se=e.get(U);if(se.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const J=U.shadow,N=n.get(U);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=U.shadow.matrix,m++}i.directional[p]=se,p++}else if(U.isSpotLight){const se=e.get(U);se.position.setFromMatrixPosition(U.matrixWorld),se.color.copy(I).multiplyScalar(Y),se.distance=ee,se.coneCos=Math.cos(U.angle),se.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),se.decay=U.decay,i.spot[y]=se;const J=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,J.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[y]=J.matrix,U.castShadow){const N=n.get(U);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=re,x++}y++}else if(U.isRectAreaLight){const se=e.get(U);se.color.copy(I).multiplyScalar(Y),se.halfWidth.set(U.width*.5,0,0),se.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=se,g++}else if(U.isPointLight){const se=e.get(U);if(se.color.copy(U.color).multiplyScalar(U.intensity),se.distance=U.distance,se.decay=U.decay,U.castShadow){const J=U.shadow,N=n.get(U);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=U.shadow.matrix,v++}i.point[_]=se,_++}else if(U.isHemisphereLight){const se=e.get(U);se.skyColor.copy(U.color).multiplyScalar(Y),se.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[u]=se,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==u||P.numDirectionalShadows!==m||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=u,P.numDirectionalShadows=m,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=R,i.version=pT++)}function l(c,f){let d=0,h=0,p=0,_=0,y=0;const g=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function O0(t){const e=new gT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new O0(t),e.set(r,[a])):s>=o.length?(a=new O0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
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
}`;function yT(t,e,n){let i=new sp;const r=new je,s=new je,o=new It,a=new GS({depthPacking:Hy}),l=new WS,c={},f=n.maxTextureSize,d={[Rr]:Bn,[Bn]:Rr,[bi]:bi},h=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:_T,fragmentShader:xT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new an;_.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new me(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let u=this.type;this.render=function(b,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Tr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Y=u!==Hi&&this.type===Hi,ee=u===Hi&&this.type!==Hi;for(let re=0,se=b.length;re<se;re++){const J=b[re],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||Y===!0||ee===!0){const he=this.type!==Hi?{minFilter:yi,magFilter:yi}:{};N.map!==null&&N.map.dispose(),N.map=new us(r.x,r.y,he),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const j=N.getViewportCount();for(let he=0;he<j;he++){const He=N.getViewport(he);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),I.viewport(o),N.updateMatrices(J,he),i=N.getFrustum(),x(R,P,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===Hi&&m(N,P),N.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(T,S,U)};function m(b,R){const P=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new us(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,P,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,P,p,y,null)}function v(b,R,P,T){let S=null;const U=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=S.uuid,Y=R.uuid;let ee=c[I];ee===void 0&&(ee={},c[I]=ee);let re=ee[Y];re===void 0&&(re=S.clone(),ee[Y]=re,R.addEventListener("dispose",A)),S=re}if(S.visible=R.visible,S.wireframe=R.wireframe,T===Hi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=P}return S}function x(b,R,P,T,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Hi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),ee=b.material;if(Array.isArray(ee)){const re=Y.groups;for(let se=0,J=re.length;se<J;se++){const N=re[se],W=ee[N.materialIndex];if(W&&W.visible){const j=v(b,W,T,S);b.onBeforeShadow(t,b,R,P,Y,j,N),t.renderBufferDirect(P,null,Y,j,b,N),b.onAfterShadow(t,b,R,P,Y,j,N)}}}else if(ee.visible){const re=v(b,ee,T,S);b.onBeforeShadow(t,b,R,P,Y,re,null),t.renderBufferDirect(P,null,Y,re,b,null),b.onAfterShadow(t,b,R,P,Y,re,null)}}const I=b.children;for(let Y=0,ee=I.length;Y<ee;Y++)x(I[Y],R,P,T,S)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const T=c[P],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const ST={[df]:ff,[hf]:gf,[pf]:vf,[fo]:mf,[ff]:df,[gf]:hf,[vf]:pf,[mf]:fo};function MT(t,e){function n(){let H=!1;const ye=new It;let Ee=null;const Fe=new It(0,0,0,0);return{setMask:function(ge){Ee!==ge&&!H&&(t.colorMask(ge,ge,ge,ge),Ee=ge)},setLocked:function(ge){H=ge},setClear:function(ge,ae,Be,tt,bt){bt===!0&&(ge*=tt,ae*=tt,Be*=tt),ye.set(ge,ae,Be,tt),Fe.equals(ye)===!1&&(t.clearColor(ge,ae,Be,tt),Fe.copy(ye))},reset:function(){H=!1,Ee=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,ye=!1,Ee=null,Fe=null,ge=null;return{setReversed:function(ae){if(ye!==ae){const Be=e.get("EXT_clip_control");ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;const tt=ge;ge=null,this.setClear(tt)}},getReversed:function(){return ye},setTest:function(ae){ae?oe(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(ae){Ee!==ae&&!H&&(t.depthMask(ae),Ee=ae)},setFunc:function(ae){if(ye&&(ae=ST[ae]),Fe!==ae){switch(ae){case df:t.depthFunc(t.NEVER);break;case ff:t.depthFunc(t.ALWAYS);break;case hf:t.depthFunc(t.LESS);break;case fo:t.depthFunc(t.LEQUAL);break;case pf:t.depthFunc(t.EQUAL);break;case mf:t.depthFunc(t.GEQUAL);break;case gf:t.depthFunc(t.GREATER);break;case vf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=ae}},setLocked:function(ae){H=ae},setClear:function(ae){ge!==ae&&(ye&&(ae=1-ae),t.clearDepth(ae),ge=ae)},reset:function(){H=!1,Ee=null,Fe=null,ge=null,ye=!1}}}function r(){let H=!1,ye=null,Ee=null,Fe=null,ge=null,ae=null,Be=null,tt=null,bt=null;return{setTest:function(mt){H||(mt?oe(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(mt){ye!==mt&&!H&&(t.stencilMask(mt),ye=mt)},setFunc:function(mt,fn,Hn){(Ee!==mt||Fe!==fn||ge!==Hn)&&(t.stencilFunc(mt,fn,Hn),Ee=mt,Fe=fn,ge=Hn)},setOp:function(mt,fn,Hn){(ae!==mt||Be!==fn||tt!==Hn)&&(t.stencilOp(mt,fn,Hn),ae=mt,Be=fn,tt=Hn)},setLocked:function(mt){H=mt},setClear:function(mt){bt!==mt&&(t.clearStencil(mt),bt=mt)},reset:function(){H=!1,ye=null,Ee=null,Fe=null,ge=null,ae=null,Be=null,tt=null,bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],_=null,y=!1,g=null,u=null,m=null,v=null,x=null,A=null,b=null,R=new _t(0,0,0),P=0,T=!1,S=null,U=null,I=null,Y=null,ee=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,J=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(N)[1]),se=J>=1):N.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),se=J>=2);let W=null,j={};const he=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),ft=new It().fromArray(he),lt=new It().fromArray(He);function Me(H,ye,Ee,Fe){const ge=new Uint8Array(4),ae=t.createTexture();t.bindTexture(H,ae),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Ee;Be++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ye+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ae}const ie={};ie[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(fo),Je(!1),z(Nm),oe(t.CULL_FACE),Tt(Tr);function oe(H){f[H]!==!0&&(t.enable(H),f[H]=!0)}function Te(H){f[H]!==!1&&(t.disable(H),f[H]=!1)}function Ke(H,ye){return d[H]!==ye?(t.bindFramebuffer(H,ye),d[H]=ye,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function We(H,ye){let Ee=p,Fe=!1;if(H){Ee=h.get(ye),Ee===void 0&&(Ee=[],h.set(ye,Ee));const ge=H.textures;if(Ee.length!==ge.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Be=ge.length;ae<Be;ae++)Ee[ae]=t.COLOR_ATTACHMENT0+ae;Ee.length=ge.length,Fe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Ee)}function ot(H){return _!==H?(t.useProgram(H),_=H,!0):!1}const qt={[qr]:t.FUNC_ADD,[py]:t.FUNC_SUBTRACT,[my]:t.FUNC_REVERSE_SUBTRACT};qt[gy]=t.MIN,qt[vy]=t.MAX;const O={[_y]:t.ZERO,[xy]:t.ONE,[yy]:t.SRC_COLOR,[cf]:t.SRC_ALPHA,[Ay]:t.SRC_ALPHA_SATURATE,[wy]:t.DST_COLOR,[My]:t.DST_ALPHA,[Sy]:t.ONE_MINUS_SRC_COLOR,[uf]:t.ONE_MINUS_SRC_ALPHA,[Ty]:t.ONE_MINUS_DST_COLOR,[Ey]:t.ONE_MINUS_DST_ALPHA,[by]:t.CONSTANT_COLOR,[Cy]:t.ONE_MINUS_CONSTANT_COLOR,[Ry]:t.CONSTANT_ALPHA,[Py]:t.ONE_MINUS_CONSTANT_ALPHA};function Tt(H,ye,Ee,Fe,ge,ae,Be,tt,bt,mt){if(H===Tr){y===!0&&(Te(t.BLEND),y=!1);return}if(y===!1&&(oe(t.BLEND),y=!0),H!==hy){if(H!==g||mt!==T){if((u!==qr||x!==qr)&&(t.blendEquation(t.FUNC_ADD),u=qr,x=qr),mt)switch(H){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Um:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,v=null,A=null,b=null,R.set(0,0,0),P=0,g=H,T=mt}return}ge=ge||ye,ae=ae||Ee,Be=Be||Fe,(ye!==u||ge!==x)&&(t.blendEquationSeparate(qt[ye],qt[ge]),u=ye,x=ge),(Ee!==m||Fe!==v||ae!==A||Be!==b)&&(t.blendFuncSeparate(O[Ee],O[Fe],O[ae],O[Be]),m=Ee,v=Fe,A=ae,b=Be),(tt.equals(R)===!1||bt!==P)&&(t.blendColor(tt.r,tt.g,tt.b,bt),R.copy(tt),P=bt),g=H,T=!1}function et(H,ye){H.side===bi?Te(t.CULL_FACE):oe(t.CULL_FACE);let Ee=H.side===Bn;ye&&(Ee=!Ee),Je(Ee),H.blending===eo&&H.transparent===!1?Tt(Tr):Tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Fe=H.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(H){S!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),S=H)}function z(H){H!==dy?(oe(t.CULL_FACE),H!==U&&(H===Nm?t.cullFace(t.BACK):H===fy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),U=H}function Se(H){H!==I&&(se&&t.lineWidth(H),I=H)}function ne(H,ye,Ee){H?(oe(t.POLYGON_OFFSET_FILL),(Y!==ye||ee!==Ee)&&(t.polygonOffset(ye,Ee),Y=ye,ee=Ee)):Te(t.POLYGON_OFFSET_FILL)}function fe(H){H?oe(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function De(H){H===void 0&&(H=t.TEXTURE0+re-1),W!==H&&(t.activeTexture(H),W=H)}function Ue(H,ye,Ee){Ee===void 0&&(W===null?Ee=t.TEXTURE0+re-1:Ee=W);let Fe=j[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[Ee]=Fe),(Fe.type!==H||Fe.texture!==ye)&&(W!==Ee&&(t.activeTexture(Ee),W=Ee),t.bindTexture(H,ye||ie[H]),Fe.type=H,Fe.texture=ye)}function L(){const H=j[W];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){ft.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),ft.copy(H))}function Ge(H){lt.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),lt.copy(H))}function ze(H,ye){let Ee=c.get(ye);Ee===void 0&&(Ee=new WeakMap,c.set(ye,Ee));let Fe=Ee.get(H);Fe===void 0&&(Fe=t.getUniformBlockIndex(ye,H.name),Ee.set(H,Fe))}function be(H,ye){const Fe=c.get(ye).get(H);l.get(ye)!==Fe&&(t.uniformBlockBinding(ye,Fe,H.__bindingPointIndex),l.set(ye,Fe))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,j={},d={},h=new WeakMap,p=[],_=null,y=!1,g=null,u=null,m=null,v=null,x=null,A=null,b=null,R=new _t(0,0,0),P=0,T=!1,S=null,U=null,I=null,Y=null,ee=null,ft.set(0,0,t.canvas.width,t.canvas.height),lt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:Ke,drawBuffers:We,useProgram:ot,setBlending:Tt,setMaterial:et,setFlipSided:Je,setCullFace:z,setLineWidth:Se,setPolygonOffset:ne,setScissorTest:fe,activeTexture:De,bindTexture:Ue,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:ke,texImage3D:xe,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:Ve,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:Le,scissor:Ce,viewport:Ge,reset:nt}}function ET(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return p?new OffscreenCanvas(L,E):wc("canvas")}function y(L,E,X){let te=1;const ce=Ue(L);if((ce.width>X||ce.height>X)&&(te=X/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(te*ce.width),Le=Math.floor(te*ce.height);d===void 0&&(d=_(Q,Le));const _e=E?_(Q,Le):d;return _e.width=Q,_e.height=Le,_e.getContext("2d").drawImage(L,0,0,Q,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+Le+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function m(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(L,E,X,te,ce=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=E;if(E===t.RED&&(X===t.FLOAT&&(Q=t.R32F),X===t.HALF_FLOAT&&(Q=t.R16F),X===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.R8UI),X===t.UNSIGNED_SHORT&&(Q=t.R16UI),X===t.UNSIGNED_INT&&(Q=t.R32UI),X===t.BYTE&&(Q=t.R8I),X===t.SHORT&&(Q=t.R16I),X===t.INT&&(Q=t.R32I)),E===t.RG&&(X===t.FLOAT&&(Q=t.RG32F),X===t.HALF_FLOAT&&(Q=t.RG16F),X===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RG8UI),X===t.UNSIGNED_SHORT&&(Q=t.RG16UI),X===t.UNSIGNED_INT&&(Q=t.RG32UI),X===t.BYTE&&(Q=t.RG8I),X===t.SHORT&&(Q=t.RG16I),X===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),X===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),X===t.UNSIGNED_INT&&(Q=t.RGB32UI),X===t.BYTE&&(Q=t.RGB8I),X===t.SHORT&&(Q=t.RGB16I),X===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),X===t.UNSIGNED_INT&&(Q=t.RGBA32UI),X===t.BYTE&&(Q=t.RGBA8I),X===t.SHORT&&(Q=t.RGBA16I),X===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&(X===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),E===t.RGBA){const Le=ce?Mc:Et.getTransfer(te);X===t.FLOAT&&(Q=t.RGBA32F),X===t.HALF_FLOAT&&(Q=t.RGBA16F),X===t.UNSIGNED_BYTE&&(Q=Le===Nt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(L,E){let X;return L?E===null||E===cs||E===Aa?X=t.DEPTH24_STENCIL8:E===ji?X=t.DEPTH32F_STENCIL8:E===Ta&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cs||E===Aa?X=t.DEPTH_COMPONENT24:E===ji?X=t.DEPTH_COMPONENT32F:E===Ta&&(X=t.DEPTH_COMPONENT16),X}function A(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function b(L){const E=L.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&f.delete(E)}function R(L){const E=L.target;E.removeEventListener("dispose",R),S(E)}function P(L){const E=i.get(L);if(E.__webglInit===void 0)return;const X=L.source,te=h.get(X);if(te){const ce=te[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(L),Object.keys(te).length===0&&h.delete(X)}i.remove(L)}function T(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const X=L.source,te=h.get(X);delete te[E.__cacheKey],o.memory.textures--}function S(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ce=0;ce<E.__webglFramebuffer[te].length;ce++)t.deleteFramebuffer(E.__webglFramebuffer[te][ce]);else t.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)t.deleteFramebuffer(E.__webglFramebuffer[te]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=L.textures;for(let te=0,ce=X.length;te<ce;te++){const Q=i.get(X[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(X[te])}i.remove(L)}let U=0;function I(){U=0}function Y(){const L=U;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),U+=1,L}function ee(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function re(L,E){const X=i.get(L);if(L.isVideoTexture&&fe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,L,E);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+E)}function se(L,E){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ie(X,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+E)}function J(L,E){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ie(X,L,E);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+E)}function N(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){oe(X,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+E)}const W={[Sc]:t.REPEAT,[Qr]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},j={[yi]:t.NEAREST,[zy]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[Ci]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},he={[Gy]:t.NEVER,[$y]:t.ALWAYS,[Wy]:t.LESS,[g_]:t.LEQUAL,[Xy]:t.EQUAL,[qy]:t.GEQUAL,[jy]:t.GREATER,[Yy]:t.NOTEQUAL};function He(L,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===Ru||E.magFilter===al||E.magFilter===es||E.minFilter===Ci||E.minFilter===Ru||E.minFilter===al||E.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,W[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,W[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,W[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,j[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==al&&E.minFilter!==es||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ft(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",b));const te=E.source;let ce=h.get(te);ce===void 0&&(ce={},h.set(te,ce));const Q=ee(E);if(Q!==L.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ce[Q].usedTimes++;const Le=ce[L.__cacheKey];Le!==void 0&&(ce[L.__cacheKey].usedTimes--,Le.usedTimes===0&&T(E)),L.__cacheKey=Q,L.__webglTexture=ce[Q].texture}return X}function lt(L,E,X){return Math.floor(Math.floor(L/X)/E)}function Me(L,E,X,te){const Q=L.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,X,te,E.data);else{Q.sort((xe,Ce)=>xe.start-Ce.start);let Le=0;for(let xe=1;xe<Q.length;xe++){const Ce=Q[Le],Ge=Q[xe],ze=Ce.start+Ce.count,be=lt(Ge.start,E.width,4),nt=lt(Ce.start,E.width,4);Ge.start<=ze+1&&be===nt&&lt(Ge.start+Ge.count-1,E.width,4)===be?Ce.count=Math.max(Ce.count,Ge.start+Ge.count-Ce.start):(++Le,Q[Le]=Ge)}Q.length=Le+1;const _e=t.getParameter(t.UNPACK_ROW_LENGTH),Ve=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ce=Q.length;xe<Ce;xe++){const Ge=Q[xe],ze=Math.floor(Ge.start/4),be=Math.ceil(Ge.count/4),nt=ze%E.width,H=Math.floor(ze/E.width),ye=be,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,nt,H,ye,Ee,X,te,E.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,_e),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function ie(L,E,X){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const ce=ft(L,E),Q=E.source;n.bindTexture(te,L.__webglTexture,t.TEXTURE0+X);const Le=i.get(Q);if(Q.version!==Le.__version||ce===!0){n.activeTexture(t.TEXTURE0+X);const _e=Et.getPrimaries(Et.workingColorSpace),Ve=E.colorSpace===pr?null:Et.getPrimaries(E.colorSpace),ke=E.colorSpace===pr||_e===Ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let xe=y(E.image,!1,r.maxTextureSize);xe=De(E,xe);const Ce=s.convert(E.format,E.colorSpace),Ge=s.convert(E.type);let ze=v(E.internalFormat,Ce,Ge,E.colorSpace,E.isVideoTexture);He(te,E);let be;const nt=E.mipmaps,H=E.isVideoTexture!==!0,ye=Le.__version===void 0||ce===!0,Ee=Q.dataReady,Fe=A(E,xe);if(E.isDepthTexture)ze=x(E.format===Ca,E.type),ye&&(H?n.texStorage2D(t.TEXTURE_2D,1,ze,xe.width,xe.height):n.texImage2D(t.TEXTURE_2D,0,ze,xe.width,xe.height,0,Ce,Ge,null));else if(E.isDataTexture)if(nt.length>0){H&&ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ze,nt[0].width,nt[0].height);for(let ge=0,ae=nt.length;ge<ae;ge++)be=nt[ge],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Ce,Ge,be.data):n.texImage2D(t.TEXTURE_2D,ge,ze,be.width,be.height,0,Ce,Ge,be.data);E.generateMipmaps=!1}else H?(ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ze,xe.width,xe.height),Ee&&Me(E,xe,Ce,Ge)):n.texImage2D(t.TEXTURE_2D,0,ze,xe.width,xe.height,0,Ce,Ge,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ze,nt[0].width,nt[0].height,xe.depth);for(let ge=0,ae=nt.length;ge<ae;ge++)if(be=nt[ge],E.format!==vi)if(Ce!==null)if(H){if(Ee)if(E.layerUpdates.size>0){const Be=h0(be.width,be.height,E.format,E.type);for(const tt of E.layerUpdates){const bt=be.data.subarray(tt*Be/be.data.BYTES_PER_ELEMENT,(tt+1)*Be/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,tt,be.width,be.height,1,Ce,bt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,xe.depth,Ce,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,ze,be.width,be.height,xe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,xe.depth,Ce,Ge,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,ze,be.width,be.height,xe.depth,0,Ce,Ge,be.data)}else{H&&ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ze,nt[0].width,nt[0].height);for(let ge=0,ae=nt.length;ge<ae;ge++)be=nt[ge],E.format!==vi?Ce!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Ce,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Ce,Ge,be.data):n.texImage2D(t.TEXTURE_2D,ge,ze,be.width,be.height,0,Ce,Ge,be.data)}else if(E.isDataArrayTexture)if(H){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ze,xe.width,xe.height,xe.depth),Ee)if(E.layerUpdates.size>0){const ge=h0(xe.width,xe.height,E.format,E.type);for(const ae of E.layerUpdates){const Be=xe.data.subarray(ae*ge/xe.data.BYTES_PER_ELEMENT,(ae+1)*ge/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,xe.width,xe.height,1,Ce,Ge,Be)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Ge,xe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,xe.width,xe.height,xe.depth,0,Ce,Ge,xe.data);else if(E.isData3DTexture)H?(ye&&n.texStorage3D(t.TEXTURE_3D,Fe,ze,xe.width,xe.height,xe.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Ge,xe.data)):n.texImage3D(t.TEXTURE_3D,0,ze,xe.width,xe.height,xe.depth,0,Ce,Ge,xe.data);else if(E.isFramebufferTexture){if(ye)if(H)n.texStorage2D(t.TEXTURE_2D,Fe,ze,xe.width,xe.height);else{let ge=xe.width,ae=xe.height;for(let Be=0;Be<Fe;Be++)n.texImage2D(t.TEXTURE_2D,Be,ze,ge,ae,0,Ce,Ge,null),ge>>=1,ae>>=1}}else if(nt.length>0){if(H&&ye){const ge=Ue(nt[0]);n.texStorage2D(t.TEXTURE_2D,Fe,ze,ge.width,ge.height)}for(let ge=0,ae=nt.length;ge<ae;ge++)be=nt[ge],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce,Ge,be):n.texImage2D(t.TEXTURE_2D,ge,ze,Ce,Ge,be);E.generateMipmaps=!1}else if(H){if(ye){const ge=Ue(xe);n.texStorage2D(t.TEXTURE_2D,Fe,ze,ge.width,ge.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ge,xe)}else n.texImage2D(t.TEXTURE_2D,0,ze,Ce,Ge,xe);g(E)&&u(te),Le.__version=Q.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function oe(L,E,X){if(E.image.length!==6)return;const te=ft(L,E),ce=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const Q=i.get(ce);if(ce.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+X);const Le=Et.getPrimaries(Et.workingColorSpace),_e=E.colorSpace===pr?null:Et.getPrimaries(E.colorSpace),Ve=E.colorSpace===pr||Le===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let ae=0;ae<6;ae++)!ke&&!xe?Ce[ae]=y(E.image[ae],!0,r.maxCubemapSize):Ce[ae]=xe?E.image[ae].image:E.image[ae],Ce[ae]=De(E,Ce[ae]);const Ge=Ce[0],ze=s.convert(E.format,E.colorSpace),be=s.convert(E.type),nt=v(E.internalFormat,ze,be,E.colorSpace),H=E.isVideoTexture!==!0,ye=Q.__version===void 0||te===!0,Ee=ce.dataReady;let Fe=A(E,Ge);He(t.TEXTURE_CUBE_MAP,E);let ge;if(ke){H&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,nt,Ge.width,Ge.height);for(let ae=0;ae<6;ae++){ge=Ce[ae].mipmaps;for(let Be=0;Be<ge.length;Be++){const tt=ge[Be];E.format!==vi?ze!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,tt.width,tt.height,ze,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,tt.width,tt.height,ze,be,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,nt,tt.width,tt.height,0,ze,be,tt.data)}}}else{if(ge=E.mipmaps,H&&ye){ge.length>0&&Fe++;const ae=Ue(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(xe){H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ce[ae].width,Ce[ae].height,ze,be,Ce[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Ce[ae].width,Ce[ae].height,0,ze,be,Ce[ae].data);for(let Be=0;Be<ge.length;Be++){const bt=ge[Be].image[ae].image;H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,bt.width,bt.height,ze,be,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,nt,bt.width,bt.height,0,ze,be,bt.data)}}else{H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,be,Ce[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,ze,be,Ce[ae]);for(let Be=0;Be<ge.length;Be++){const tt=ge[Be];H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,ze,be,tt.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,nt,ze,be,tt.image[ae])}}}g(E)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Te(L,E,X,te,ce,Q){const Le=s.convert(X.format,X.colorSpace),_e=s.convert(X.type),Ve=v(X.internalFormat,Le,_e,X.colorSpace),ke=i.get(E),xe=i.get(X);if(xe.__renderTarget=E,!ke.__hasExternalTextures){const Ce=Math.max(1,E.width>>Q),Ge=Math.max(1,E.height>>Q);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,Q,Ve,Ce,Ge,E.depth,0,Le,_e,null):n.texImage2D(ce,Q,Ve,Ce,Ge,0,Le,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ne(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ce,xe.__webglTexture,0,Se(E)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ce,xe.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(L,E,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const te=E.depthTexture,ce=te&&te.isDepthTexture?te.type:null,Q=x(E.stencilBuffer,ce),Le=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=Se(E);ne(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,Q,E.width,E.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,L)}else{const te=E.textures;for(let ce=0;ce<te.length;ce++){const Q=te[ce],Le=s.convert(Q.format,Q.colorSpace),_e=s.convert(Q.type),Ve=v(Q.internalFormat,Le,_e,Q.colorSpace),ke=Se(E);X&&ne(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ve,E.width,E.height):ne(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,Ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re(E.depthTexture,0);const ce=te.__webglTexture,Q=Se(E);if(E.depthTexture.format===ba)ne(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Ca)ne(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ot(L){const E=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=te}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const te=L.texture.mipmaps;te&&te.length>0?We(E.__webglFramebuffer[0],L):We(E.__webglFramebuffer,L)}else if(X){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=t.createRenderbuffer(),Ke(E.__webglDepthbuffer[te],L,!1);else{const ce=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,Q)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ke(E.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qt(L,E,X){const te=i.get(L);E!==void 0&&Te(te.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&ot(L)}function O(L){const E=L.texture,X=i.get(L),te=i.get(E);L.addEventListener("dispose",R);const ce=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[_e]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)X.__webglFramebuffer[_e][Ve]=t.createFramebuffer()}else X.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)X.__webglFramebuffer[_e]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Le)for(let _e=0,Ve=ce.length;_e<Ve;_e++){const ke=i.get(ce[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&ne(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const Ve=ce[_e];X.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const ke=s.convert(Ve.format,Ve.colorSpace),xe=s.convert(Ve.type),Ce=v(Ve.internalFormat,ke,xe,Ve.colorSpace,L.isXRRenderTarget===!0),Ge=Se(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ce,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),He(t.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Te(X.__webglFramebuffer[_e][Ve],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve);else Te(X.__webglFramebuffer[_e],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let _e=0,Ve=ce.length;_e<Ve;_e++){const ke=ce[_e],xe=i.get(ke);let Ce=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,xe.__webglTexture),He(Ce,ke),Te(X.__webglFramebuffer,L,ke,t.COLOR_ATTACHMENT0+_e,Ce,0),g(ke)&&u(Ce)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,te.__webglTexture),He(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Te(X.__webglFramebuffer[Ve],L,E,t.COLOR_ATTACHMENT0,_e,Ve);else Te(X.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,_e,0);g(E)&&u(_e),n.unbindTexture()}L.depthBuffer&&ot(L)}function Tt(L){const E=L.textures;for(let X=0,te=E.length;X<te;X++){const ce=E[X];if(g(ce)){const Q=m(L),Le=i.get(ce).__webglTexture;n.bindTexture(Q,Le),u(Q),n.unbindTexture()}}}const et=[],Je=[];function z(L){if(L.samples>0){if(ne(L)===!1){const E=L.textures,X=L.width,te=L.height;let ce=t.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(L),_e=E.length>1;if(_e)for(let ke=0;ke<E.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const xe=i.get(E[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,X,te,0,0,X,te,ce,t.NEAREST),l===!0&&(et.length=0,Je.length=0,et.push(t.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(et.push(Q),Je.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<E.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const xe=i.get(E[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Se(L){return Math.min(r.maxSamples,L.samples)}function ne(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(L){const E=o.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function De(L,E){const X=L.colorSpace,te=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==mo&&X!==pr&&(Et.getTransfer(X)===Nt?(te!==vi||ce!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=I,this.setTexture2D=re,this.setTexture2DArray=se,this.setTexture3D=J,this.setTextureCube=N,this.rebindTextures=qt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ne}function wT(t,e){function n(i,r=pr){let s;const o=Et.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===Kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===c_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===u_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===a_)return t.BYTE;if(i===l_)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===$h)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===ji)return t.FLOAT;if(i===Ua)return t.HALF_FLOAT;if(i===d_)return t.ALPHA;if(i===f_)return t.RGB;if(i===vi)return t.RGBA;if(i===ba)return t.DEPTH_COMPONENT;if(i===Ca)return t.DEPTH_STENCIL;if(i===h_)return t.RED;if(i===Jh)return t.RED_INTEGER;if(i===p_)return t.RG;if(i===Qh)return t.RG_INTEGER;if(i===ep)return t.RGBA_INTEGER;if(i===Xl||i===jl||i===Yl||i===ql)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Mf||i===Ef||i===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===Af||i===bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tf||i===Af)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cf||i===Rf||i===Pf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===kf||i===zf||i===Bf||i===Hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Df)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ff)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vf||i===Gf||i===Wf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vf)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xf||i===jf||i===Yf||i===qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
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

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new A_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pr({vertexShader:TT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new me(new is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends yo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new bT,u={},m=n.getContextAttributes();let v=null,x=null;const A=[],b=[],R=new je;let P=null;const T=new Yn;T.viewport=new It;const S=new Yn;S.viewport=new It;const U=[T,S],I=new qS;let Y=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=A[ie];return oe===void 0&&(oe=new Ju,A[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=A[ie];return oe===void 0&&(oe=new Ju,A[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=A[ie];return oe===void 0&&(oe=new Ju,A[ie]=oe),oe.getHandSpace()};function re(ie){const oe=b.indexOf(ie.inputSource);if(oe===-1)return;const Te=A[oe];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,c||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function se(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",J);for(let ie=0;ie<A.length;ie++){const oe=b[ie];oe!==null&&(b[ie]=null,A[ie].disconnect(oe))}Y=null,ee=null,g.reset();for(const ie in u)delete u[ie];e.setRenderTarget(v),p=null,h=null,d=null,r=null,x=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",se),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ke=null,We=null;m.depth&&(We=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=m.stencil?Ca:ba,Ke=m.stencil?Aa:cs);const ot={colorFormat:n.RGBA8,depthFormat:We,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ot),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new us(h.textureWidth,h.textureHeight,{format:vi,type:Ni,depthTexture:new T_(h.textureWidth,h.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new us(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(ie){for(let oe=0;oe<ie.removed.length;oe++){const Te=ie.removed[oe],Ke=b.indexOf(Te);Ke>=0&&(b[Ke]=null,A[Ke].disconnect(Te))}for(let oe=0;oe<ie.added.length;oe++){const Te=ie.added[oe];let Ke=b.indexOf(Te);if(Ke===-1){for(let ot=0;ot<A.length;ot++)if(ot>=b.length){b.push(Te),Ke=ot;break}else if(b[ot]===null){b[ot]=Te,Ke=ot;break}if(Ke===-1)break}const We=A[Ke];We&&We.connect(Te)}}const N=new k,W=new k;function j(ie,oe,Te){N.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(Te.matrixWorld);const Ke=N.distanceTo(W),We=oe.projectionMatrix.elements,ot=Te.projectionMatrix.elements,qt=We[14]/(We[10]-1),O=We[14]/(We[10]+1),Tt=(We[9]+1)/We[5],et=(We[9]-1)/We[5],Je=(We[8]-1)/We[0],z=(ot[8]+1)/ot[0],Se=qt*Je,ne=qt*z,fe=Ke/(-Je+z),De=fe*-Je;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(De),ie.translateZ(fe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),We[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ue=qt+fe,L=O+fe,E=Se-De,X=ne+(Ke-De),te=Tt*O/L*Ue,ce=et*O/L*Ue;ie.projectionMatrix.makePerspective(E,X,te,ce,Ue,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let oe=ie.near,Te=ie.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),I.near=S.near=T.near=oe,I.far=S.far=T.far=Te,(Y!==I.near||ee!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),Y=I.near,ee=I.far),I.layers.mask=ie.layers.mask|6,T.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ke=ie.parent,We=I.cameras;he(I,Ke);for(let ot=0;ot<We.length;ot++)he(We[ot],Ke);We.length===2?j(I,T,S):I.projectionMatrix.copy(T.projectionMatrix),He(ie,I,Ke)};function He(ie,oe,Te){Te===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=$f*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(ie){return u[ie]};let ft=null;function lt(ie,oe){if(f=oe.getViewerPose(c||o),_=oe,f!==null){const Te=f.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ke=!1;Te.length!==I.cameras.length&&(I.cameras.length=0,Ke=!0);for(let O=0;O<Te.length;O++){const Tt=Te[O];let et=null;if(p!==null)et=p.getViewport(Tt);else{const z=d.getViewSubImage(h,Tt);et=z.viewport,O===0&&(e.setRenderTargetTextures(x,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(x))}let Je=U[O];Je===void 0&&(Je=new Yn,Je.layers.enable(O),Je.viewport=new It,U[O]=Je),Je.matrix.fromArray(Tt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Tt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(et.x,et.y,et.width,et.height),O===0&&(I.matrix.copy(Je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ke===!0&&I.cameras.push(Je)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const O=d.getDepthInformation(Te[0]);O&&O.isValid&&O.texture&&g.init(O,r.renderState)}if(We&&We.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let O=0;O<Te.length;O++){const Tt=Te[O].camera;if(Tt){let et=u[Tt];et||(et=new A_,u[Tt]=et);const Je=d.getCameraImage(Tt);et.sourceTexture=Je}}}}for(let Te=0;Te<A.length;Te++){const Ke=b[Te],We=A[Te];Ke!==null&&We!==void 0&&We.update(Ke,oe,c||o)}ft&&ft(ie,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Me=new L_;Me.setAnimationLoop(lt),this.setAnimationLoop=function(ie){ft=ie},this.dispose=function(){}}}const Gr=new Ii,RT=new zt;function PT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,M_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Bn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Bn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,x=m.envMapRotation;v&&(g.envMap.value=v,Gr.copy(x),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),g.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(Gr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const x=v.program;i.uniformBlockBinding(m,x)}function c(m,v){let x=r[m.id];x===void 0&&(_(m),x=f(m),r[m.id]=x,m.addEventListener("dispose",g));const A=v.program;i.updateUBOMapping(m,A);const b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function f(m){const v=d();m.__bindingPointIndex=v;const x=t.createBuffer(),A=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],x=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,R=x.length;b<R;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,S=P.length;T<S;T++){const U=P[T];if(p(U,b,T,A)===!0){const I=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let ee=0;for(let re=0;re<Y.length;re++){const se=Y[re],J=y(se);typeof se=="number"||typeof se=="boolean"?(U.__data[0]=se,t.bufferSubData(t.UNIFORM_BUFFER,I+ee,U.__data)):se.isMatrix3?(U.__data[0]=se.elements[0],U.__data[1]=se.elements[1],U.__data[2]=se.elements[2],U.__data[3]=0,U.__data[4]=se.elements[3],U.__data[5]=se.elements[4],U.__data[6]=se.elements[5],U.__data[7]=0,U.__data[8]=se.elements[6],U.__data[9]=se.elements[7],U.__data[10]=se.elements[8],U.__data[11]=0):(se.toArray(U.__data,ee),ee+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,x,A){const b=m.value,R=v+"_"+x;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const P=A[R];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[R]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(m){const v=m.uniforms;let x=0;const A=16;for(let R=0,P=v.length;R<P;R++){const T=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,U=T.length;S<U;S++){const I=T[S],Y=Array.isArray(I.value)?I.value:[I.value];for(let ee=0,re=Y.length;ee<re;ee++){const se=Y[ee],J=y(se),N=x%A,W=N%J.boundary,j=N+W;x+=W,j!==0&&A-j<J.storage&&(x+=A-j),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=J.storage}}}const b=x%A;return b>0&&(x+=A-b),m.__size=x,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class DT{constructor(e={}){const{canvas:n=Zy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=In;let b=0,R=0,P=null,T=-1,S=null;const U=new It,I=new It;let Y=null;const ee=new _t(0);let re=0,se=n.width,J=n.height,N=1,W=null,j=null;const he=new It(0,0,se,J),He=new It(0,0,se,J);let ft=!1;const lt=new sp;let Me=!1,ie=!1;const oe=new zt,Te=new k,Ke=new It,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function qt(){return P===null?N:1}let O=i;function Tt(C,V){return n.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),O===null){const V="webgl2";if(O=Tt(V,C),O===null)throw Tt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,Je,z,Se,ne,fe,De,Ue,L,E,X,te,ce,Q,Le,_e,Ve,ke,xe,Ce,Ge,ze,be,nt;function H(){et=new Vw(O),et.init(),ze=new wT(O,et),Je=new Uw(O,et,e,ze),z=new MT(O,et),Je.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),Se=new Xw(O),ne=new cT,fe=new ET(O,et,z,ne,Je,ze,Se),De=new Ow(x),Ue=new Hw(x),L=new ZS(O),be=new Nw(O,L),E=new Gw(O,L,Se,be),X=new Yw(O,E,L,Se),xe=new jw(O,Je,fe),_e=new Fw(ne),te=new lT(x,De,Ue,et,Je,be,_e),ce=new PT(x,ne),Q=new dT,Le=new vT(et),ke=new Dw(x,De,Ue,z,X,p,l),Ve=new yT(x,X,Je),nt=new LT(O,Se,Je,z),Ce=new Iw(O,et,Se),Ge=new Ww(O,et,Se),Se.programs=te.programs,x.capabilities=Je,x.extensions=et,x.properties=ne,x.renderLists=Q,x.shadowMap=Ve,x.state=z,x.info=Se}H();const ye=new CT(x,O);this.xr=ye,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(se,J,!1))},this.getSize=function(C){return C.set(se,J)},this.setSize=function(C,V,$=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,J=V,n.width=Math.floor(C*N),n.height=Math.floor(V*N),$===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(se*N,J*N).floor()},this.setDrawingBufferSize=function(C,V,$){se=C,J=V,N=$,n.width=Math.floor(C*$),n.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,V,$,K){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,V,$,K),z.viewport(U.copy(he).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(He)},this.setScissor=function(C,V,$,K){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,V,$,K),z.scissor(I.copy(He).multiplyScalar(N).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){z.setScissorTest(ft=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,$=!0){let K=0;if(C){let G=!1;if(P!==null){const pe=P.texture.format;G=pe===ep||pe===Qh||pe===Jh}if(G){const pe=P.texture.type,Re=pe===Ni||pe===cs||pe===Ta||pe===Aa||pe===Kh||pe===Zh,Oe=ke.getClearColor(),Ne=ke.getClearAlpha(),Qe=Oe.r,Ze=Oe.g,Ye=Oe.b;Re?(_[0]=Qe,_[1]=Ze,_[2]=Ye,_[3]=Ne,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Qe,y[1]=Ze,y[2]=Ye,y[3]=Ne,O.clearBufferiv(O.COLOR,0,y))}else K|=O.COLOR_BUFFER_BIT}V&&(K|=O.DEPTH_BUFFER_BIT),$&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ke.dispose(),Q.dispose(),Le.dispose(),ne.dispose(),De.dispose(),Ue.dispose(),X.dispose(),be.dispose(),nt.dispose(),te.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Hn),ye.removeEventListener("sessionend",Vn),oi.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=Se.autoReset,V=Ve.enabled,$=Ve.autoUpdate,K=Ve.needsUpdate,G=Ve.type;H(),Se.autoReset=C,Ve.enabled=V,Ve.autoUpdate=$,Ve.needsUpdate=K,Ve.type=G}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ae(C){const V=C.target;V.removeEventListener("dispose",ae),Be(V)}function Be(C){tt(C),ne.remove(C)}function tt(C){const V=ne.get(C).programs;V!==void 0&&(V.forEach(function($){te.releaseProgram($)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,K,G,pe){V===null&&(V=We);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Oe=Ur(C,V,$,K,G);z.setMaterial(K,Re);let Ne=$.index,Qe=1;if(K.wireframe===!0){if(Ne=E.getWireframeAttribute($),Ne===void 0)return;Qe=2}const Ze=$.drawRange,Ye=$.attributes.position;let ct=Ze.start*Qe,it=(Ze.start+Ze.count)*Qe;pe!==null&&(ct=Math.max(ct,pe.start*Qe),it=Math.min(it,(pe.start+pe.count)*Qe)),Ne!==null?(ct=Math.max(ct,0),it=Math.min(it,Ne.count)):Ye!=null&&(ct=Math.max(ct,0),it=Math.min(it,Ye.count));const gt=it-ct;if(gt<0||gt===1/0)return;be.setup(G,K,Oe,$,Ne);let Pt,Ct=Ce;if(Ne!==null&&(Pt=L.get(Ne),Ct=Ge,Ct.setIndex(Pt)),G.isMesh)K.wireframe===!0?(z.setLineWidth(K.wireframeLinewidth*qt()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(G.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),z.setLineWidth(qe*qt()),G.isLineSegments?Ct.setMode(O.LINES):G.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else G.isPoints?Ct.setMode(O.POINTS):G.isSprite&&Ct.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ra("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,Ut=G._multiDrawCounts,ht=G._multiDrawCount,Wt=Ne?L.get(Ne).bytesPerElement:1,Sn=ne.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<ht;Mn++)Sn.setValue(O,"_gl_DrawID",Mn),Ct.render(qe[Mn]/Wt,Ut[Mn])}else if(G.isInstancedMesh)Ct.renderInstances(ct,gt,G.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ut=Math.min($.instanceCount,qe);Ct.renderInstances(ct,gt,Ut)}else Ct.render(ct,gt)};function bt(C,V,$){C.transparent===!0&&C.side===bi&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,ms(C,V,$),C.side=Rr,C.needsUpdate=!0,ms(C,V,$),C.side=bi):ms(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),u=Le.get($),u.init(V),v.push(u),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),C!==$&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const K=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let Re=0;Re<pe.length;Re++){const Oe=pe[Re];bt(Oe,$,G),K.add(Oe)}else bt(pe,$,G),K.add(pe)}),u=v.pop(),K},this.compileAsync=function(C,V,$=null){const K=this.compile(C,V,$);return new Promise(G=>{function pe(){if(K.forEach(function(Re){ne.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){G(C);return}setTimeout(pe,10)}et.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let mt=null;function fn(C){mt&&mt(C)}function Hn(){oi.stop()}function Vn(){oi.start()}const oi=new L_;oi.setAnimationLoop(fn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(C){mt=C,ye.setAnimationLoop(C),C===null?oi.stop():oi.start()},ye.addEventListener("sessionstart",Hn),ye.addEventListener("sessionend",Vn),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,V,P),u=Le.get(C,v.length),u.init(V),v.push(u),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),lt.setFromProjectionMatrix(oe,Ri,V.reversedDepth),ie=this.localClippingEnabled,Me=_e.init(this.clippingPlanes,ie),g=Q.get(C,m.length),g.init(),m.push(g),ye.enabled===!0&&ye.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&hs(pe,V,-1/0,x.sortObjects)}hs(C,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,j),ot=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ot&&ke.addToRenderList(g,C),this.info.render.frame++,Me===!0&&_e.beginShadows();const $=u.state.shadowsArray;Ve.render($,C,V),Me===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,G=g.transmissive;if(u.setupLights(),V.isArrayCamera){const pe=V.cameras;if(G.length>0)for(let Re=0,Oe=pe.length;Re<Oe;Re++){const Ne=pe[Re];ps(K,G,C,Ne)}ot&&ke.render(C);for(let Re=0,Oe=pe.length;Re<Oe;Re++){const Ne=pe[Re];Eo(g,C,Ne,Ne.viewport)}}else G.length>0&&ps(K,G,C,V),ot&&ke.render(C),Eo(g,C,V);P!==null&&R===0&&(fe.updateMultisampleRenderTarget(P),fe.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(x,C,V),be.resetDefaultState(),T=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],Me===!0&&_e.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function hs(C,V,$,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){K&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const Re=X.update(C),Oe=C.material;Oe.visible&&g.push(C,Re,Oe,$,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){const Re=X.update(C),Oe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ke.copy(Re.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(oe)),Array.isArray(Oe)){const Ne=Re.groups;for(let Qe=0,Ze=Ne.length;Qe<Ze;Qe++){const Ye=Ne[Qe],ct=Oe[Ye.materialIndex];ct&&ct.visible&&g.push(C,Re,ct,$,Ke.z,Ye)}}else Oe.visible&&g.push(C,Re,Oe,$,Ke.z,null)}}const pe=C.children;for(let Re=0,Oe=pe.length;Re<Oe;Re++)hs(pe[Re],V,$,K)}function Eo(C,V,$,K){const G=C.opaque,pe=C.transmissive,Re=C.transparent;u.setupLightsView($),Me===!0&&_e.setGlobalState(x.clippingPlanes,$),K&&z.viewport(U.copy(K)),G.length>0&&Ir(G,V,$),pe.length>0&&Ir(pe,V,$),Re.length>0&&Ir(Re,V,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function ps(C,V,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new us(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ua:Ni,minFilter:es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const pe=u.state.transmissionRenderTarget[K.id],Re=K.viewport||U;pe.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);const Oe=x.getRenderTarget(),Ne=x.getActiveCubeFace(),Qe=x.getActiveMipmapLevel();x.setRenderTarget(pe),x.getClearColor(ee),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear(),ot&&ke.render($);const Ze=x.toneMapping;x.toneMapping=Ar;const Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),Me===!0&&_e.setGlobalState(x.clippingPlanes,K),Ir(C,$,K),fe.updateMultisampleRenderTarget(pe),fe.updateRenderTargetMipmap(pe),et.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let it=0,gt=V.length;it<gt;it++){const Pt=V[it],Ct=Pt.object,qe=Pt.geometry,Ut=Pt.material,ht=Pt.group;if(Ut.side===bi&&Ct.layers.test(K.layers)){const Wt=Ut.side;Ut.side=Bn,Ut.needsUpdate=!0,ai(Ct,$,K,qe,Ut,ht),Ut.side=Wt,Ut.needsUpdate=!0,ct=!0}}ct===!0&&(fe.updateMultisampleRenderTarget(pe),fe.updateRenderTargetMipmap(pe))}x.setRenderTarget(Oe,Ne,Qe),x.setClearColor(ee,re),Ye!==void 0&&(K.viewport=Ye),x.toneMapping=Ze}function Ir(C,V,$){const K=V.isScene===!0?V.overrideMaterial:null;for(let G=0,pe=C.length;G<pe;G++){const Re=C[G],Oe=Re.object,Ne=Re.geometry,Qe=Re.group;let Ze=Re.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),Oe.layers.test($.layers)&&ai(Oe,V,$,Ne,Ze,Qe)}}function ai(C,V,$,K,G,pe){C.onBeforeRender(x,V,$,K,G,pe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(x,V,$,K,C,pe),G.transparent===!0&&G.side===bi&&G.forceSinglePass===!1?(G.side=Bn,G.needsUpdate=!0,x.renderBufferDirect($,V,K,G,C,pe),G.side=Rr,G.needsUpdate=!0,x.renderBufferDirect($,V,K,G,C,pe),G.side=bi):x.renderBufferDirect($,V,K,G,C,pe),C.onAfterRender(x,V,$,K,G,pe)}function ms(C,V,$){V.isScene!==!0&&(V=We);const K=ne.get(C),G=u.state.lights,pe=u.state.shadowsArray,Re=G.state.version,Oe=te.getParameters(C,G.state,pe,V,$),Ne=te.getProgramCacheKey(Oe);let Qe=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?Ue:De).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",ae),Qe=new Map,K.programs=Qe);let Ze=Qe.get(Ne);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Re)return tr(C,Oe),Ze}else Oe.uniforms=te.getUniforms(C),C.onBeforeCompile(Oe,x),Ze=te.acquireProgram(Oe,Ne),Qe.set(Ne,Ze),K.uniforms=Oe.uniforms;const Ye=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=_e.uniform),tr(C,Oe),K.needsLights=qc(C),K.lightsStateVersion=Re,K.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function gs(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=$l.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function tr(C,V){const $=ne.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ur(C,V,$,K,G){V.isScene!==!0&&(V=We),fe.resetTextureUnits();const pe=V.fog,Re=K.isMeshStandardMaterial?V.environment:null,Oe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mo,Ne=(K.isMeshStandardMaterial?Ue:De).get(K.envMap||Re),Qe=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,it=!!$.morphAttributes.color;let gt=Ar;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=Pt!==void 0?Pt.length:0,qe=ne.get(K),Ut=u.state.lights;if(Me===!0&&(ie===!0||C!==S)){const jt=C===S&&K.id===T;_e.setState(K,C,jt)}let ht=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ut.state.version||qe.outputColorSpace!==Oe||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Ne||K.fog===!0&&qe.fog!==pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==Qe||qe.vertexTangents!==Ze||qe.morphTargets!==Ye||qe.morphNormals!==ct||qe.morphColors!==it||qe.toneMapping!==gt||qe.morphTargetsCount!==Ct)&&(ht=!0):(ht=!0,qe.__version=K.version);let Wt=qe.currentProgram;ht===!0&&(Wt=ms(K,V,G));let Sn=!1,Mn=!1,Ui=!1;const wt=Wt.getUniforms(),hn=qe.uniforms;if(z.useProgram(Wt.program)&&(Sn=!0,Mn=!0,Ui=!0),K.id!==T&&(T=K.id,Mn=!0),Sn||S!==C){z.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),wt.setValue(O,"projectionMatrix",C.projectionMatrix),wt.setValue(O,"viewMatrix",C.matrixWorldInverse);const $t=wt.map.cameraPosition;$t!==void 0&&$t.setValue(O,Te.setFromMatrixPosition(C.matrixWorld)),Je.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&wt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Mn=!0,Ui=!0)}if(G.isSkinnedMesh){wt.setOptional(O,G,"bindMatrix"),wt.setOptional(O,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),wt.setValue(O,"boneTexture",jt.boneTexture,fe))}G.isBatchedMesh&&(wt.setOptional(O,G,"batchingTexture"),wt.setValue(O,"batchingTexture",G._matricesTexture,fe),wt.setOptional(O,G,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",G._indirectTexture,fe),wt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",G._colorsTexture,fe));const En=$.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&xe.update(G,$,Wt),(Mn||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,wt.setValue(O,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=Ne,hn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(hn.envMapIntensity.value=V.environmentIntensity),Mn&&(wt.setValue(O,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Mi(hn,Ui),pe&&K.fog===!0&&ce.refreshFogUniforms(hn,pe),ce.refreshMaterialUniforms(hn,K,N,J,u.state.transmissionRenderTarget[C.id]),$l.upload(O,gs(qe),hn,fe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($l.upload(O,gs(qe),hn,fe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&wt.setValue(O,"center",G.center),wt.setValue(O,"modelViewMatrix",G.modelViewMatrix),wt.setValue(O,"normalMatrix",G.normalMatrix),wt.setValue(O,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const jt=K.uniformsGroups;for(let $t=0,vs=jt.length;$t<vs;$t++){const li=jt[$t];nt.update(li,Wt),nt.bind(li,Wt)}}return Wt}function Mi(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function qc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,V,$){const K=ne.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(C.texture).__webglTexture=V,ne.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const $=ne.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};const $c=O.createFramebuffer();this.setRenderTarget=function(C,V=0,$=0){P=C,b=V,R=$;let K=!0,G=null,pe=!1,Re=!1;if(C){const Ne=ne.get(C);if(Ne.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(Ne.__hasExternalTextures)fe.rebindTextures(C,ne.get(C.texture).__webglTexture,ne.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(Ne.__boundDepthTexture!==Ye){if(Ye!==null&&ne.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Re=!0);const Ze=ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?G=Ze[V][$]:G=Ze[V],pe=!0):C.samples>0&&fe.useMultisampledRTT(C)===!1?G=ne.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[$]:G=Ze,U.copy(C.viewport),I.copy(C.scissor),Y=C.scissorTest}else U.copy(he).multiplyScalar(N).floor(),I.copy(He).multiplyScalar(N).floor(),Y=ft;if($!==0&&(G=$c),z.bindFramebuffer(O.FRAMEBUFFER,G)&&K&&z.drawBuffers(C,G),z.viewport(U),z.scissor(I),z.setScissorTest(Y),pe){const Ne=ne.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,$)}else if(Re){const Ne=V;for(let Qe=0;Qe<C.textures.length;Qe++){const Ze=ne.get(C.textures[Qe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Qe,Ze.__webglTexture,$,Ne)}}else if(C!==null&&$!==0){const Ne=ne.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,$)}T=-1},this.readRenderTargetPixels=function(C,V,$,K,G,pe,Re,Oe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){z.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const Qe=C.textures[Oe],Ze=Qe.format,Ye=Qe.type;if(!Je.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&$>=0&&$<=C.height-G&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(V,$,K,G,ze.convert(Ze),ze.convert(Ye),pe))}finally{const Qe=P!==null?ne.get(P).__webglFramebuffer:null;z.bindFramebuffer(O.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,V,$,K,G,pe,Re,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(V>=0&&V<=C.width-K&&$>=0&&$<=C.height-G){z.bindFramebuffer(O.FRAMEBUFFER,Ne);const Qe=C.textures[Oe],Ze=Qe.format,Ye=Qe.type;if(!Je.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(V,$,K,G,ze.convert(Ze),ze.convert(Ye),0);const it=P!==null?ne.get(P).__webglFramebuffer:null;z.bindFramebuffer(O.FRAMEBUFFER,it);const gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jy(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.deleteBuffer(ct),O.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,$=0){const K=Math.pow(2,-$),G=Math.floor(C.image.width*K),pe=Math.floor(C.image.height*K),Re=V!==null?V.x:0,Oe=V!==null?V.y:0;fe.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Re,Oe,G,pe),z.unbindTexture()};const wo=O.createFramebuffer(),Kc=O.createFramebuffer();this.copyTextureToTexture=function(C,V,$=null,K=null,G=0,pe=null){pe===null&&(G!==0?(Ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let Re,Oe,Ne,Qe,Ze,Ye,ct,it,gt;const Pt=C.isCompressedTexture?C.mipmaps[pe]:C.image;if($!==null)Re=$.max.x-$.min.x,Oe=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Qe=$.min.x,Ze=$.min.y,Ye=$.isBox3?$.min.z:0;else{const En=Math.pow(2,-G);Re=Math.floor(Pt.width*En),Oe=Math.floor(Pt.height*En),C.isDataArrayTexture?Ne=Pt.depth:C.isData3DTexture?Ne=Math.floor(Pt.depth*En):Ne=1,Qe=0,Ze=0,Ye=0}K!==null?(ct=K.x,it=K.y,gt=K.z):(ct=0,it=0,gt=0);const Ct=ze.convert(V.format),qe=ze.convert(V.type);let Ut;V.isData3DTexture?(fe.setTexture3D(V,0),Ut=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(fe.setTexture2DArray(V,0),Ut=O.TEXTURE_2D_ARRAY):(fe.setTexture2D(V,0),Ut=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ht=O.getParameter(O.UNPACK_ROW_LENGTH),Wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=O.getParameter(O.UNPACK_SKIP_PIXELS),Mn=O.getParameter(O.UNPACK_SKIP_ROWS),Ui=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const wt=C.isDataArrayTexture||C.isData3DTexture,hn=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const En=ne.get(C),jt=ne.get(V),$t=ne.get(En.__renderTarget),vs=ne.get(jt.__renderTarget);z.bindFramebuffer(O.READ_FRAMEBUFFER,$t.__webglFramebuffer),z.bindFramebuffer(O.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let li=0;li<Ne;li++)wt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(C).__webglTexture,G,Ye+li),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(V).__webglTexture,pe,gt+li)),O.blitFramebuffer(Qe,Ze,Re,Oe,ct,it,Re,Oe,O.DEPTH_BUFFER_BIT,O.NEAREST);z.bindFramebuffer(O.READ_FRAMEBUFFER,null),z.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||ne.has(C)){const En=ne.get(C),jt=ne.get(V);z.bindFramebuffer(O.READ_FRAMEBUFFER,wo),z.bindFramebuffer(O.DRAW_FRAMEBUFFER,Kc);for(let $t=0;$t<Ne;$t++)wt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,En.__webglTexture,G,Ye+$t):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,En.__webglTexture,G),hn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,pe,gt+$t):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,pe),G!==0?O.blitFramebuffer(Qe,Ze,Re,Oe,ct,it,Re,Oe,O.COLOR_BUFFER_BIT,O.NEAREST):hn?O.copyTexSubImage3D(Ut,pe,ct,it,gt+$t,Qe,Ze,Re,Oe):O.copyTexSubImage2D(Ut,pe,ct,it,Qe,Ze,Re,Oe);z.bindFramebuffer(O.READ_FRAMEBUFFER,null),z.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ut,pe,ct,it,gt,Re,Oe,Ne,Ct,qe,Pt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,pe,ct,it,gt,Re,Oe,Ne,Ct,Pt.data):O.texSubImage3D(Ut,pe,ct,it,gt,Re,Oe,Ne,Ct,qe,Pt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,ct,it,Re,Oe,Ct,qe,Pt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,ct,it,Pt.width,Pt.height,Ct,Pt.data):O.texSubImage2D(O.TEXTURE_2D,pe,ct,it,Re,Oe,Ct,qe,Pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),pe===0&&V.generateMipmaps&&O.generateMipmap(Ut),z.unbindTexture()},this.initRenderTarget=function(C){ne.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),z.unbindTexture()},this.resetState=function(){b=0,R=0,P=null,z.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}var V0;const yt=(V0=window.Telegram)==null?void 0:V0.WebApp,k0="/yggdrasil-tma/",Dl=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],NT=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],z0={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},B0=()=>{try{const t={...z0,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...z0,watch:Date.now()}}},Go=()=>new Date().toISOString().slice(0,10),IT=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",fd=[3,5,8,12,18,25,40],UT=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],FT=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],hd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Wo={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},H0={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},pd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},md={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function cr({name:t,className:e}){return B.jsx("img",{src:t.includes(".")?`${k0}img/${t}`:`${k0}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const OT=`
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
`,Kl=(t,e=.9,n=0)=>new Dt({color:t,roughness:e,metalness:n}),Xo=(t,e,n,i,r=.9)=>new me(new An(t,e,n),Kl(i,r)),Ae=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function kT(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function zT(t){const e=new rt,n=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,i=t.gender==="f"?14265738:13210479,r=new me(new no(.42,.72,4,8),Kl(n,.88));r.position.y=.9,e.add(r);const s=new me(new Nn(.34,16,12),Kl(i,.9));s.position.y=1.62,e.add(s);const o=new me(new Nn(.36,12,8),Kl(t.id==="elf"?12110033:2760989,.95));o.scale.y=.55,o.position.y=1.82,e.add(o);const a=Xo(.2,.72,.22,2106150,.96),l=a.clone();a.position.set(-.15,.36,0),l.position.set(.15,.36,0),e.add(a,l);const c=Xo(.9,.22,.5,n,.88);c.position.y=1.23,e.add(c);const f=Xo(.68,.95,.09,t.id==="berserk"?2821132:1582894,.98);f.position.set(0,.95,-.34),e.add(f);const d=Xo(.08,1.35,.08,12830922,.38);d.position.set(.58,1.08,0),d.rotation.z=-.35,e.add(d);const h=Xo(.1,.38,.1,5321246,.95);h.position.set(.54,.45,0),e.add(h);const p=new me(new io(.65,24),new jc({color:0,transparent:!0,opacity:.32}));return p.rotation.x=-Math.PI/2,p.position.y=.02,e.add(p),kT(e)}function BT({h:t,on:e,eventDone:n}){const i=St.useRef(null),r=St.useRef(null),s=St.useRef(null),o=St.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=St.useState(""),[c,f]=St.useState(!1),[d,h]=St.useState(!1),[p,_]=St.useState(!1),y=St.useRef({x:0,z:1});St.useEffect(()=>{const A=i.current;if(!A)return;const b=new ES;b.background=new _t(9414817),b.fog=new rp(8097158,.0058);const R=new Yn(54,1,.1,280);R.position.set(0,8.5,17);const P=new DT({antialias:!0,powerPreference:"high-performance"});P.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),P.shadowMap.enabled=!0,P.shadowMap.type=i_,P.outputColorSpace=In,P.toneMapping=s_,P.toneMappingExposure=1.08,A.appendChild(P.domElement);const T=new XS(14477797,4014136,1.38);b.add(T);const S=new u0(16773583,3.15);S.position.set(-42,58,34),S.castShadow=!0,S.shadow.mapSize.set(1024,1024),S.shadow.camera.left=-95,S.shadow.camera.right=95,S.shadow.camera.top=95,S.shadow.camera.bottom=-95,S.shadow.bias=-5e-4,b.add(S);const U=new u0(12110789,.58);U.position.set(55,18,-60),b.add(U);const I=(w,D)=>{const M=Math.sin(w*.075)*.7+Math.cos(D*.062)*.55+Math.sin((w-D)*.045)*.35,F=Math.exp(-(w*w/850+(D+2)*(D+2)/1050)),Z=Math.exp(-(w*w/150+(D-12)*(D-12)/2200));return M*(1-F*.88)-Z*.18},Y=w=>{const D=document.createElement("canvas");D.width=D.height=512;const M=D.getContext("2d"),F=q=>Math.abs(Math.sin(q*12.9898)*43758.5453)%1;if(w==="ground"){M.fillStyle="#3f4d38",M.fillRect(0,0,512,512);for(let q=0;q<1800;q++){const de=F(q*1.17)*512,ue=F(q*2.31)*512,we=10+F(q*3.71)*28,le=F(q*4.13);M.fillStyle=le>.72?`rgba(96,108,63,${.08+F(q)*.12})`:`rgba(30,36,25,${.05+F(q)*.12})`,M.beginPath(),M.arc(de,ue,we,0,Math.PI*2),M.fill()}for(let q=0;q<650;q++){const de=F(q*7.1)*512,ue=F(q*8.2)*512;M.strokeStyle=`rgba(118,126,78,${.16+F(q*2)*.16})`,M.lineWidth=1+F(q*4)*1.5,M.beginPath(),M.moveTo(de,ue),M.lineTo(de+(F(q*5)-.5)*5,ue-3-F(q*6)*5),M.stroke()}}else if(w==="wood"){M.fillStyle="#5a3d29",M.fillRect(0,0,512,512);for(let q=0;q<512;q+=22)M.fillStyle=`rgba(25,15,9,${.18+F(q)*.13})`,M.fillRect(0,q,512,3),M.strokeStyle=`rgba(154,111,69,${.08+F(q*2)*.08})`,M.lineWidth=2,M.beginPath(),M.moveTo(0,q+7),M.bezierCurveTo(150,q+2,340,q+13,512,q+5),M.stroke();for(let q=0;q<65;q++){const de=F(q*2.1)*512;M.fillStyle=`rgba(20,12,8,${.12+F(q*3)*.16})`,M.fillRect(de,0,2+F(q*4)*3,512)}}else if(w==="roof"){M.fillStyle="#252522",M.fillRect(0,0,512,512);for(let q=-30;q<550;q+=25){M.fillStyle=`rgba(105,94,77,${.12+F(q)*.08})`,M.fillRect(0,q,512,2),M.strokeStyle="rgba(12,12,11,.48)",M.lineWidth=3;for(let de=-40;de<560;de+=38)M.beginPath(),M.moveTo(de,q),M.lineTo(de-18,q+28),M.stroke()}for(let q=0;q<180;q++)M.fillStyle=`rgba(170,154,123,${.03+F(q)*.07})`,M.fillRect(F(q*2)*512,F(q*3)*512,2+F(q*4)*7,2)}else{M.fillStyle="#514333",M.fillRect(0,0,512,512);for(let q=0;q<1300;q++){const de=F(q*1.3)*512,ue=F(q*2.7)*512;M.fillStyle=`rgba(${45+F(q*3)*38},${35+F(q*4)*28},${23+F(q*5)*20},${.08+F(q*6)*.18})`,M.fillRect(de,ue,2+F(q*7)*7,1+F(q*8)*4)}}const Z=new bS(D);return Z.wrapS=Z.wrapT=Sc,Z.colorSpace=In,Z.anisotropy=4,Z},ee=Y("ground");ee.repeat.set(5,6);const re=new is(190,190,62,62),se=re.attributes.position;for(let w=0;w<se.count;w++){const D=se.getX(w),M=-se.getY(w);se.setZ(w,I(D,M))}re.rotateX(-Math.PI/2),re.computeVertexNormals();const J=new me(re,new Dt({map:ee,roughness:1}));J.receiveShadow=!0,b.add(J);const N=(w,D,M)=>(D&&(w.userData={id:D,label:M||D}),w.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)}),b.add(w),D&&he.push(w),w),W=(w,D=.9,M=0)=>new Dt({color:w,roughness:D,metalness:M}),j=(w,D,M,F,Z=.9)=>new me(new An(w,D,M),W(F,Z)),he=[],He=[],ft=[],lt=[],Me=[],ie=.62,oe=(w,D,M,F,Z=0,q=.12)=>Me.push({kind:"rect",x:w,z:D,w:M+q*2,d:F+q*2,rot:Z}),Te=(w,D,M,F=.12)=>Me.push({kind:"circle",x:w,z:D,r:M+F}),Ke=(w,D,M,F,Z,q=.12)=>Me.push({kind:"segment",x1:w,z1:D,x2:M,z2:F,r:Z+q}),We=(w,D,M)=>{if(M.kind==="circle")return Math.hypot(w-M.x,D-M.z)<M.r+ie;if(M.kind==="rect"){const le=Math.cos(M.rot),$e=Math.sin(M.rot),Xe=w-M.x,vt=D-M.z,pt=le*Xe-$e*vt,xt=$e*Xe+le*vt,Lt=Math.max(-M.w/2,Math.min(M.w/2,pt)),Or=Math.max(-M.d/2,Math.min(M.d/2,xt));return Math.hypot(pt-Lt,xt-Or)<ie}const F=M.x2-M.x1,Z=M.z2-M.z1,q=F*F+Z*Z,de=q>0?Math.max(0,Math.min(1,((w-M.x1)*F+(D-M.z1)*Z)/q)):0,ue=M.x1+F*de,we=M.z1+Z*de;return Math.hypot(w-ue,D-we)<M.r+ie},ot=(w,D)=>Me.some(M=>We(w,D,M)),qt=(w,D,M)=>{const F=Math.max(-88,Math.min(88,D)),Z=Math.max(-89,Math.min(89,M));if(!ot(F,Z)){w.x=F,w.z=Z;return}ot(F,w.z)||(w.x=F),ot(w.x,Z)||(w.z=Z)},O=W(3425343,1);for(let w=0;w<22;w++){const D=new rt,M=-105+w*10,F=8+Ae(w,7)*9,Z=new me(new Xn(F,18+Ae(w,8)*16,7),O);Z.position.y=8,D.add(Z),D.position.set(M,-1,-94+Ae(w,9)*11),N(D)}const Tt=[];for(let w=0;w<=24;w++){const D=-94+w*8,M=-57+Math.sin(w*.55)*3.6;Tt.push(new k(M,I(M,D)-.05,D))}const et=new Zf(Tt),Je=new bc(et,64,5.8,8,!1),z=new me(Je,new Dt({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));z.scale.y=.025,z.position.y=.05,z.receiveShadow=!0,b.add(z);for(let w=0;w<50;w++){const D=-92+w*3.7,M=-57+Math.sin(w*.55)*3.6,F=.35+Ae(w,15)*.6,Z=new me(new ln(F,1),W(6185562,1));Z.scale.y=.55,Z.position.set(M+(Ae(w,16)-.5)*10,I(M,D)+.25,D),N(Z),Te(Z.position.x,Z.position.z,F*.9,.03)}const Se=(w,D)=>{const M=w.map(([ue,we])=>new k(ue,I(ue,we)+.035,we)),F=[],Z=[];for(let ue=0;ue<M.length;ue++){const we=M[Math.max(0,ue-1)],le=M[Math.min(M.length-1,ue+1)],$e=le.x-we.x,Xe=le.z-we.z,vt=Math.max(.001,Math.hypot($e,Xe)),pt=-Xe/vt,xt=$e/vt;if(F.push(M[ue].x+pt*D/2,M[ue].y,M[ue].z+xt*D/2,M[ue].x-pt*D/2,M[ue].y+.01,M[ue].z-xt*D/2),ue<M.length-1){const Lt=ue*2;Z.push(Lt,Lt+1,Lt+2,Lt+1,Lt+3,Lt+2)}}const q=new an;q.setAttribute("position",new At(F,3)),q.setIndex(Z),q.computeVertexNormals();const de=new me(q,new Dt({map:Y("road"),roughness:1}));de.receiveShadow=!0,b.add(de),[-D*.22,D*.22].forEach(ue=>{const we=M.map((Xe,vt)=>{const pt=M[Math.max(0,vt-1)],xt=M[Math.min(M.length-1,vt+1)],Lt=xt.x-pt.x,Or=xt.z-pt.z,Ao=Math.max(.001,Math.hypot(Lt,Or));return new k(Xe.x+-Or/Ao*ue,Xe.y+.045,Xe.z+Lt/Ao*ue)}),le=new bc(new Zf(we),Math.max(12,M.length*4),.055,5,!1),$e=new me(le,W(3352863,1));$e.scale.y=.12,b.add($e)})};Se([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),Se([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),Se([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),Se([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),Se([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),Se([[4,14],[-3,22],[-7,31],[-8,42]],3.8),Se([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),Se([[4,14],[10,28],[18,41],[27,57]],3.8),Se([[5,31],[15,45],[27,57],[39,70]],3.7),Se([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),Se([[-39,-8],[-47,-12],[-53,-15]],3.4);const ne=Y("wood");ne.repeat.set(2,1);const fe=Y("roof");fe.repeat.set(2,2);const De=(w,D,M,F,Z,q,de,ue,we)=>{const le=new rt;le.rotation.y=Z,le.position.set(w,I(w,D),D),le.userData={id:de,label:q};const $e=new Dt({color:5856085,roughness:1}),Xe=new Dt({map:ne,color:ue,roughness:.92});W(2695193,1);const vt=j(M+.7,.62,F+.7,5658706,1);vt.position.y=.31,le.add(vt);const pt=new me(new An(M,3.55,F),Xe);pt.position.y=2.05,le.add(pt);for(const xs of[-M*.46,M*.46])for(const Ga of[-F*.5,F*.5]){const bo=j(.34,3.9,.34,2760728,1);bo.position.set(xs,2.08,Ga),le.add(bo)}const xt=j(1.18,2.15,.18,2365714,1);xt.position.set(0,1.35,F/2+.17),le.add(xt);const Lt=j(.14,2.35,.22,3811613,1),Or=Lt.clone();Lt.position.set(-.67,1.42,F/2+.2),Or.position.set(.67,1.42,F/2+.2),le.add(Lt,Or);for(const xs of[-M*.27,M*.27]){const Ga=j(1.15,.95,.14,2760987,1);Ga.position.set(xs,2.18,F/2+.18),le.add(Ga);const bo=new me(new An(.88,.68,.06),new Dt({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));bo.position.set(xs,2.18,F/2+.255),le.add(bo);const Mp=j(.07,.76,.12,2760987,1);Mp.position.set(xs,2.18,F/2+.3),le.add(Mp);const Ep=j(1,.07,.12,2760987,1);Ep.position.set(xs,2.18,F/2+.3),le.add(Ep)}const Ao=new Dt({map:fe,color:we,roughness:.98,side:bi}),Ha=new me(new is(M*.82,F+1),Ao),Va=new me(new is(M*.82,F+1),Ao);Ha.rotation.x=Math.PI/2,Va.rotation.x=Math.PI/2,Ha.rotation.z=.62,Va.rotation.z=-.62,Ha.position.set(-M*.22,4.22,0),Va.position.set(M*.22,4.22,0),le.add(Ha,Va);const _p=j(.3,.28,F+1.08,2826523,1);_p.position.y=5.08,le.add(_p);const xp=j(M*.34,.16,1,6439467,1);xp.position.set(0,.68,F/2+.54),le.add(xp);const yp=new me(new An(.62,2,.62),$e);yp.position.set(M*.24,5.15,-F*.08),le.add(yp);const Sp=j(.82,.12,.82,3486254,1);Sp.position.set(M*.24,6.17,-F*.08),le.add(Sp),N(le,de,q),he.push(le),oe(w,D,M+.85,F+.85,Z,.05)};De(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),De(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),De(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),De(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),De(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),De(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Ue=new rt;Ue.position.set(-10,I(-10,-5),-5),Ue.userData={id:"forge",label:"Кузница"};const L=j(9,3.8,6,5126701,1);L.position.y=1.9,Ue.add(L);const E=j(2.8,3.6,.28,2760986,1);E.position.set(-3.1,1.9,3.05),Ue.add(E);const X=new me(new An(5.5,.24,6.7),new Dt({map:fe,color:2433826,roughness:1}));X.rotation.z=.58,X.position.set(-2,4.2,0),Ue.add(X);const te=X.clone();te.rotation.z=-.58,te.position.x=2,Ue.add(te);const ce=j(2.2,1.8,1.7,3486512,1);ce.position.set(-2,1,1.15),Ue.add(ce);const Q=new me(new io(.55,16),new Dt({color:16739364,emissive:16726795,emissiveIntensity:5}));Q.rotation.y=Math.PI,Q.position.set(-2,1.05,2.02),Ue.add(Q);const Le=j(1.4,.35,.55,2435114,.4);Le.position.set(1.2,1.05,1.15),Ue.add(Le);const _e=j(.5,.9,.5,2697770,.45);_e.position.set(1.2,.62,1.15),Ue.add(_e);for(let w=0;w<4;w++){const D=j(.09,1.35,.09,11184548,.35);D.position.set(2.1+w*.18,1.1,1.3),D.rotation.z=-.3+w*.18,Ue.add(D)}N(Ue,"forge","Кузница"),he.push(Ue),oe(-10,-5,9.6,6.6,0,.05);const Ve=new Cl(16742962,3.2,13,2);Ve.position.set(-12,I(-12,-5)+2.2,-4),b.add(Ve);const ke=new me(new io(8.5,32),new Dt({color:7035463,roughness:1}));ke.rotation.x=-Math.PI/2,ke.position.set(1,I(1,0)+.05,0),ke.receiveShadow=!0,b.add(ke);for(let w=0;w<18;w++){const D=w/18*Math.PI*2,M=new me(new ln(.38,1),W(7039843,1));M.position.set(1+Math.cos(D)*8.8,I(1+Math.cos(D)*8.8,Math.sin(D)*8.8)+.22,Math.sin(D)*8.8),b.add(M)}const xe=(w,D)=>{const M=new rt,F=j(2.8,.22,1,6832937,1);F.position.y=1.05,M.add(F);for(const Z of[-1.05,1.05]){const q=j(.16,1,.16,3877149,1);q.position.set(Z,.5,-.32),M.add(q);const de=q.clone();de.position.z=.32,M.add(de)}M.position.set(w,I(w,D),D),b.add(M)};xe(-4,2),xe(7,3);const Ce=(w,D,M)=>{const F=new rt;F.position.set(w,I(w,D),D);for(let le=0;le<7;le++){const $e=le/7*Math.PI*2,Xe=new me(new ln(.32*M,1),W(6117970,1));Xe.position.set(Math.cos($e)*.7*M,.25*M,Math.sin($e)*.7*M),F.add(Xe)}const Z=j(.2*M,.2*M,1.5*M,4861211,1),q=Z.clone();Z.rotation.y=.55,q.rotation.y=-.55,Z.position.y=q.position.y=.38*M,F.add(Z,q);const de=new Dt({color:16744744,emissive:16731402,emissiveIntensity:4}),ue=new me(new Xn(.5*M,1.35*M,8),de);ue.position.y=1.02*M,F.add(ue),b.add(F);const we=new Cl(16747068,2.4*M,12*M,2);we.position.set(w,I(w,D)+2*M,D),b.add(we),He.push({light:we,flame:ue,phase:Ae(w,D)*8})};Ce(1,0,1.15),Ce(18,-15,.72);const Ge=(w,D,M,F,Z=1.25)=>{const q=new rt,de=M-w,ue=F-D,we=Math.hypot(de,ue),le=Math.max(1,Math.floor(we/1.55));for(let $e=0;$e<=le;$e++){const Xe=$e/le,vt=w+de*Xe,pt=D+ue*Xe,xt=j(.18,Z,.18,4796447,1);xt.position.set(vt,I(vt,pt)+Z/2,pt),q.add(xt)}for(const $e of[-.28,.38]){const Xe=j(.14,.14,we,5978917,1);Xe.rotation.y=Math.atan2(de,ue),Xe.position.set((w+M)/2,I((w+M)/2,(D+F)/2)+Z*$e,(D+F)/2),q.add(Xe)}b.add(q),Ke(w,D,M,F,.12,.02)},ze=(w,D,M,F,Z,q,de)=>{const ue=new rt;ue.position.set(w,I(w,D),D),ue.rotation.y=Z,ue.userData={id:de,label:q};const we=j(M+.25,.35,F+.25,5591368,1);we.position.y=.18,ue.add(we);const le=new me(new An(M,2.5,F),new Dt({map:ne,color:6439983,roughness:1}));le.position.y=1.45,ue.add(le);const $e=new me(new An(M+.6,.18,F+.65),new Dt({map:fe,color:2696996,roughness:1}));$e.rotation.z=.55,$e.position.set(-.16,3,0),ue.add($e);const Xe=$e.clone();Xe.rotation.z=-.55,Xe.position.x=.16,ue.add(Xe);const vt=j(1.05,1.75,.12,2759700,1);vt.position.set(0,1.05,F/2+.07),ue.add(vt),N(ue,de,q),he.push(ue),oe(w,D,M+.55,F+.55,Z,.04)},be=(w,D,M=1)=>{const F=new rt;F.position.set(w,I(w,D),D);const Z=new me(new Dn(.65*M,.65*M,1.2*M,10),W(9073729,1));Z.rotation.z=Math.PI/2,Z.position.y=.62*M,F.add(Z);for(let q=0;q<3;q++){const de=new me(new _n(.66*M,.025*M,5,18),W(5851693,1));de.rotation.y=Math.PI/2,de.position.y=(.28+q*.34)*M,F.add(de)}N(F)},nt=(w,D,M)=>{const F=new rt;F.position.set(w,I(w,D),D),F.rotation.y=M;const Z=j(2.8,.28,1.45,6636331,1);Z.position.y=1,F.add(Z);for(const de of[-1.15,1.15])for(const ue of[-.55,.55]){const we=j(.16,1.15,.16,4401950,1);we.position.set(de,.55,ue),F.add(we)}for(const de of[-1.15,1.15]){const ue=new me(new Dn(.5,.5,.18,14),W(2696738,1));ue.rotation.z=Math.PI/2,ue.position.set(de,.52,-.92),F.add(ue)}const q=j(.16,.16,2.4,4796447,1);q.rotation.x=Math.PI/2,q.position.set(0,.72,-2),F.add(q),N(F)},H=(w,D,M=0)=>{const F=new rt;F.position.set(w,I(w,D),D),F.rotation.y=M;const Z=j(2.2,.16,.5,7359021,1);Z.position.y=.85,F.add(Z);for(const q of[-.78,.78]){const de=j(.12,.8,.12,4139549,1);de.position.set(q,.4,0),F.add(de)}N(F)},ye=(w,D)=>{const M=new rt;M.position.set(w,I(w,D),D);for(let de=0;de<10;de++){const ue=de/10*Math.PI*2,we=j(.45,.38,.38,6710621,1);we.position.set(Math.cos(ue)*.95,.19,Math.sin(ue)*.95),we.rotation.y=ue,M.add(we)}const F=j(.16,2.2,.16,4861984,1),Z=F.clone();F.position.set(-.9,1.2,0),Z.position.set(.9,1.2,0),M.add(F,Z);const q=j(2,.16,.16,3876891,1);q.position.y=2.25,M.add(q),N(M)};ze(-19,31,8,5,.08,"Амбар","barn"),ze(17,34,7,5,-.2,"Сарай","shed"),ze(27,13,6,4,.45,"Склад рыбака","fishshed"),Ge(-25,27,-13,27),Ge(-25,27,-25,38),Ge(-25,38,-14,38),Ge(12,29,25,29),Ge(25,29,25,40),Ge(25,40,12,40),Ge(29,-1,39,-1),Ge(39,-1,39,10),Ge(39,10,30,10);for(const w of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])be(w[0],w[1],w[2]);nt(-17,24,.18),nt(29,-5,-.55),H(-20,23,.18),H(25,31,-.2),De(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),De(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),De(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),De(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),oe(-31,8,7.8,5.8,.1,.04),oe(-27,20,7.8,5.8,-.25,.04),oe(31,18,7.8,5.8,.32,.04),oe(20,24,7.8,5.8,-.12,.04);const Ee=(w,D,M)=>{const F=new rt;F.position.set(w,I(w,D),D),F.rotation.y=M;const Z=j(3,.18,1.25,7357994,1);Z.position.y=1.45,F.add(Z);for(const de of[-1.25,1.25])for(const ue of[-.48,.48]){const we=j(.13,1.45,.13,4270877,1);we.position.set(de,.72,ue),F.add(we)}const q=new me(new Xn(1.65,2.5,4,1,!1,Math.PI/4),W(4798510,1));q.scale.z=.55,q.position.y=2.15,F.add(q),N(F)};Ee(-5,-7,.12),Ee(8,-5,-.18),Ee(6,7,.5);for(const w of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])ye(w[0],w[1]);const Fe=(w,D,M=1)=>{const F=new rt,Z=I(w,D);for(let q=0;q<5;q++){const de=new me(new Nn((.28+Ae(q,w)*.18)*M,8,6),W(q%2?3494457:4284223,1));de.position.set((Ae(q,2)-.5)*.7*M,.28*M,(Ae(q,3)-.5)*.7*M),F.add(de)}F.position.set(w,Z,D),N(F)};for(let w=0;w<48;w++){const D=Ae(w,501)*Math.PI*2,M=18+Ae(w,502)*39,F=Math.cos(D)*M,Z=Math.sin(D)*M+4;Math.abs(F)<9&&Math.abs(Z)<14||Fe(F,Z,.65+Ae(w,503)*.75)}for(let w=0;w<34;w++){const D=-84+Ae(w,610)*168,M=-82+Ae(w,611)*164;if(Math.hypot(D,M-2)<24)continue;const F=.25+Ae(w,612)*.55,Z=new me(new ln(F,1),W(5725013,1));Z.scale.y=.55,Z.position.set(D,I(D,M)+F*.28,M),Z.rotation.set(Ae(w,613),Ae(w,614),Ae(w,615)),N(Z),Te(D,M,F*.8,.03)}De(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),ze(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Ge(-70,32,-60,32),Ge(-70,32,-70,43),Ge(-70,43,-61,43),be(-67,39,.9),nt(-61,33,-.25),ye(-57,34);const ge=new rt;ge.position.set(-63,I(-63,47),47);for(let w=0;w<6;w++){const D=j(10,.035,.12,4208682,1);D.position.set(0,.02,(w-2.5)*1.05),D.rotation.y=.06,ge.add(D)}N(ge);const ae=new rt;ae.position.set(39,I(39,70),70),ae.userData={id:"runefield",label:"Поле Рун"};const Be=W(5593942,1),tt=new Dt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let w=0;w<11;w++){const D=Ae(w,1201)*Math.PI*2,M=3.5+Ae(w,1202)*8,F=new me(new ln(.65+Ae(w,1203)*.38,1),Be);F.scale.y=1.4+Ae(w,1204)*1.5,F.position.set(Math.cos(D)*M,F.scale.y*.48,Math.sin(D)*M),F.rotation.set(Ae(w,1205),D,Ae(w,1206)),ae.add(F);const Z=new me(new An(.11,.035,.72),tt);Z.position.set(F.position.x,F.position.y+.55,F.position.z),Z.rotation.y=-D+.45,ae.add(Z)}for(let w=0;w<5;w++){const D=j(.22,1.8,.22,4861984,1);D.position.set(-6+w*3,.9,7.5),ae.add(D);const M=new me(new _n(.34,.035,6,18),tt);M.rotation.x=Math.PI/2,M.position.set(-6+w*3,1.55,7.5),ae.add(M)}const bt=new rt;for(let w=0;w<7;w++){const D=w/7*Math.PI*2,M=new me(new ln(.3,1),W(5591885,1));M.position.set(Math.cos(D)*.65,.22,Math.sin(D)*.65),bt.add(M)}ae.add(bt),N(ae,"runefield","Поле Рун"),he.push(ae),Te(39,70,1,.08);const mt=(w,D,M,F)=>{const Z=new rt,q=M-w,de=F-D,ue=Math.hypot(q,de),we=Math.floor(ue/1.7);for(let $e=0;$e<=we;$e++){const Xe=$e/we,vt=w+q*Xe,pt=D+de*Xe,xt=new me(new Xn(.24,.24+2.8+Ae($e,w)*.5,6),W(3942940,1));xt.position.set(vt,I(vt,pt)+1.45,pt),Z.add(xt)}const le=j(.3,.35,ue,2957593,1);le.rotation.y=Math.atan2(q,de),le.position.set((w+M)/2,I((w+M)/2,(D+F)/2)+1.25,(D+F)/2),Z.add(le),b.add(Z),Ke(w,D,M,F,.34,.08)};mt(-30,-31,-8,-31),mt(8,-31,30,-31),mt(-30,-31,-30,-13),mt(30,-31,30,16);const fn=new rt;fn.userData={id:"gate",label:"Ворота Мидгарда"};for(const w of[-4.2,4.2]){const D=j(.8,6,.8,3482906,1);D.position.set(w,3,-31),fn.add(D)}const Hn=j(10,.8,1,2957336,1);Hn.position.set(0,6,-31),fn.add(Hn);for(let w=-3;w<=3;w++){const D=j(1,4.2,.22,5978660,1);D.position.set(w*1.15,2,-30.7),fn.add(D)}N(fn,"gate","Ворота Мидгарда"),he.push(fn),Te(-4.2,-31,.55,.05),Te(4.2,-31,.55,.05);const Vn=new rt;Vn.userData={id:"mimir",label:"Колодец Мимира"},Vn.position.set(18,I(18,15),15);for(let w=0;w<14;w++){const D=w/14*Math.PI*2,M=j(.7,.48,.5,6711907,1);M.position.set(Math.cos(D)*1.45,.24,Math.sin(D)*1.45),M.rotation.y=D+Math.PI/2,Vn.add(M)}const oi=new me(new io(1.05,28),new Dt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));oi.rotation.x=-Math.PI/2,oi.position.y=.5,Vn.add(oi);for(const w of[-1.35,1.35]){const D=j(.22,3,.22,4861984,1);D.position.set(w,1.55,0),Vn.add(D)}const hs=j(3.1,.25,.25,3679513,1);hs.position.y=2.95,Vn.add(hs);const Eo=j(.55,.5,.55,5913383,1);Eo.position.set(0,1.65,0),Vn.add(Eo);const ps=new me(new _n(1.8,.06,8,40),new Dt({color:7792028,emissive:2653256,emissiveIntensity:3}));ps.rotation.x=Math.PI/2,ps.position.y=.53,Vn.add(ps),N(Vn,"mimir","Колодец Мимира"),he.push(Vn),Te(18,15,1.8,.08);const Ir=new Cl(7530656,1.8,10,2);Ir.position.set(18,I(18,15)+1.4,15),b.add(Ir);const ai=new rt;ai.userData={id:"norns",label:"Прядильня норн"},ai.position.set(-25,I(-25,43),43);for(let w=0;w<3;w++){const D=new me(new no(.65,2.3,5,8),W(5725529,1));D.position.set((w-1)*2.2,1.35,0),D.rotation.z=(w-1)*.07,ai.add(D);const M=new me(new _n(.42,.055,7,20),new Dt({color:[13100495,13149416,14795380][w],emissive:[6134129,7490961,9268264][w],emissiveIntensity:2.2}));M.rotation.x=Math.PI/2,M.position.set((w-1)*2.2,1.6,-.55),ai.add(M)}const ms=new Kf({color:13944039,transparent:!0,opacity:.78});for(let w=0;w<2;w++){const D=[new k((w-1)*2.2,2,.1),new k((w-.5)*2.2,4.1,-.7),new k(w*2.2,2,.1)];ai.add(new s0(new an().setFromPoints(D),ms))}const gs=new me(new _n(4.1,.07,8,48),new Dt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));gs.rotation.x=Math.PI/2,gs.position.y=.05,ai.add(gs),N(ai,"norns","Прядильня норн"),he.push(ai),Te(-25,43,3,.1);const tr=-43,Ur=62,Mi=new rt;Mi.userData={id:"ritual",label:"Круг Силы"},Mi.position.set(tr,I(tr,Ur),Ur);const qc=W(6711651,1),$c=W(5593685,1);for(let w=0;w<2;w++){const D=w===0?18:12,M=w===0?6.2:3.65;for(let F=0;F<D;F++){const Z=F/D*Math.PI*2+w*.12,q=M+(Ae(F,930+w)*.5-.25),de=.42+Ae(F,940+w)*.48,ue=new me(new ln(.55+Ae(F,950+w)*.28,1),w===0?qc:$c);ue.scale.y=.65+de*.35,ue.position.set(Math.cos(Z)*q,de*.45,Math.sin(Z)*q),ue.rotation.set(Ae(F,960+w),Z+Ae(F,970+w),Ae(F,980+w)),Mi.add(ue)}}const wo=new me(new ln(1.05,1),W(5593428,1));wo.scale.set(1.25,.62,1.05),wo.position.y=.5,Mi.add(wo);for(const w of[2.1,3.15,5.15]){const D=new me(new _n(w,.045,7,64),new Dt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));D.rotation.x=Math.PI/2,D.position.y=.055,Mi.add(D)}const Kc=new Dt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let w=0;w<8;w++){const D=w/8*Math.PI*2,M=new me(new An(.13,.025,.65),Kc);M.position.set(Math.cos(D)*4.55,.075,Math.sin(D)*4.55),M.rotation.y=-D,Mi.add(M)}N(Mi,"ritual","Круг Силы"),he.push(Mi),Te(tr,Ur,1.25,.06);const C=new Cl(9226152,1.15,11,2);C.position.set(tr,I(tr,Ur)+1.6,Ur),b.add(C);const V=new rt;V.userData={id:"rune",label:"Древний камень Феху"},V.position.set(27,I(27,57),57);const $=new me(new ln(1.45,1),W(5002063,1));$.position.y=1.2,V.add($);const K=new me(new _n(1.05,.07,8,30),new Dt({color:16766826,emissive:10052371,emissiveIntensity:3}));K.rotation.x=Math.PI/2,K.position.y=1.2,V.add(K),N(V,"rune","Древний камень Феху"),he.push(V),Te(27,57,1.7,.1);const G=new rt;G.userData={id:"port",label:"Мост к причалу"};for(let w=-5;w<=5;w++){const D=j(3.6,.28,.82,6307882,1);D.position.set(-53,I(-53,w*1)+.5,w),G.add(D)}N(G,"port","Мост к причалу"),he.push(G);const pe=new rt;pe.position.set(-46,I(-46,-15),-15);for(let w=0;w<7;w++){const D=j(2.8,.24,.72,7030573,1);D.position.set(0,.3,w*.85),pe.add(D)}for(const w of[-1.2,1.2])for(let D=0;D<3;D++){const M=j(.22,1.5,.22,4139292,1);M.position.set(w,-.2,D*2.5),pe.add(M)}const Re=j(2.2,.55,4.8,4926493,1);Re.position.set(3,-.15,2.5),pe.add(Re),N(pe,"port","Речной причал"),he.push(pe);const Oe=(w,D)=>{const M=new me(new Dn(.5,.5,1,12),W(6636332,1));M.position.set(w,I(w,D)+.5,D),b.add(M);for(const F of[.25,.76]){const Z=new me(new _n(.51,.045,6,18),W(3156004,.7,.1));Z.rotation.x=Math.PI/2,Z.position.set(w,I(w,D)+F,D),b.add(Z)}},Ne=(w,D)=>{const M=j(1,.75,1,7359022,1);M.position.set(w,I(w,D)+.38,D),b.add(M);const F=j(.08,.82,1.05,3679770,1);F.position.set(w,I(w,D)+.38,D),b.add(F),oe(w,D,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([w,D])=>Oe(w,D)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([w,D])=>Ne(w,D));const Qe=(w,D,M)=>{const F=new rt,Z=I(w,D),q=W(3680287,1),de=new me(new Dn(.18*M,.34*M,4.6*M,10),q);de.position.y=2.3*M,de.rotation.z=(Ae(w,D)-.5)*.045,F.add(de);for(let we=0;we<5;we++){const le=new me(new Dn(.045*M,.095*M,(1.15+we*.16)*M,7),q);le.position.set((Ae(we,w)-.5)*.45*M,(1.25+we*.58)*M,(Ae(we,D)-.5)*.38*M),le.rotation.z=(Ae(we+10,w)-.5)*.45,le.rotation.y=Ae(we+20,D)*Math.PI*2,F.add(le)}const ue=[1979432,2573361,2968886,3430461,2309165];for(let we=0;we<6;we++){const $e=(1.55-.72*(we/5))*M,Xe=new me(new Xn($e,.95*M,9,1),W(ue[we%ue.length],1));Xe.scale.x=.88+Ae(we,w)*.18,Xe.scale.z=.84+Ae(we,D)*.2,Xe.position.set((Ae(we*4,w)-.5)*.28*M,(2.05+we*.62)*M,(Ae(we*5,D)-.5)*.28*M),Xe.rotation.y=Ae(we+40,w)*Math.PI*2,F.add(Xe)}if(M>1.15)for(let we=0;we<3;we++){const le=new me(new Xn(.62*M,.7*M,8),W(ue[(we+2)%ue.length],1));le.position.set((we-1)*.38*M,.72*M,(Ae(we,D)-.5)*.3*M),le.rotation.y=Ae(we+70,w)*Math.PI*2,F.add(le)}F.position.set(w,Z,D),N(F),M>=1.15&&Te(w,D,.42*M,.04)},Ze=(w,D,M,F=!1)=>{const Z=new rt,q=I(w,D),de=W(F?4207145:4863015,1),ue=new me(new Dn(.32*M,.52*M,5.8*M,11),de);ue.position.y=2.9*M,ue.rotation.z=(Ae(w,D)-.5)*.035,Z.add(ue);const we=F?8:6;for(let le=0;le<we;le++){const $e=le/we*Math.PI*2+Ae(le,w)*.25,Xe=(1.65+Ae(le+30,D)*1.35)*M,vt=new me(new Dn(.075*M,.16*M,Xe,8),de);vt.position.set(Math.cos($e)*Xe*.34,(3.35+Ae(le+40,w)*1.25)*M,Math.sin($e)*Xe*.34),vt.rotation.z=Math.cos($e)*.78,vt.rotation.x=Math.sin($e)*.78,vt.rotation.y=-$e,Z.add(vt);for(let pt=0;pt<3;pt++){const xt=new me(new Nn((.42+Ae(pt+le,90)*.22)*M,8,6),W(pt%2?4808772:3888955,1)),Lt=.55+pt*.18;xt.position.set(Math.cos($e)*Xe*.62+(Ae(pt,le)-.5)*.35*M,(3.55+Ae(le,pt)*1.15+Lt)*M,Math.sin($e)*Xe*.62+(Ae(pt+4,le)-.5)*.35*M),xt.scale.y=.72,Z.add(xt)}}for(let le=0;le<(F?7:4);le++){const $e=Ae(le+100,w)*Math.PI*2,Xe=new me(new Dn(.025*M,.055*M,(.9+Ae(le,D)*.7)*M,6),de);Xe.position.set(Math.cos($e)*1.05*M,(3.15+Ae(le+5,w)*1.5)*M,Math.sin($e)*1.05*M),Xe.rotation.z=(Ae(le+8,D)-.5)*.35,Z.add(Xe)}Z.position.set(w,q,D),N(Z),M>=1.2&&Te(w,D,.62*M,.04)},Ye=(w,D,M,F)=>{const Z=new rt,q=W(9071949,1),de=W(3418916,1),ue=W(11576718,1),we=new me(new no(.46*M,1*M,6,10),q);we.rotation.z=Math.PI/2,we.position.y=.9*M,Z.add(we);const le=new me(new Dn(.24*M,.32*M,.84*M,8),q);le.position.set(.48*M,1.25*M,0),le.rotation.z=-.35,Z.add(le);const $e=new me(new Nn(.31*M,10,7),q);$e.scale.set(1.25,.9,1),$e.position.set(.77*M,1.58*M,0),Z.add($e);const Xe=new me(new Nn(.14*M,8,5),de);Xe.scale.z=.72,Xe.position.set(1*M,1.53*M,0),Z.add(Xe);for(const pt of[-.25,.25])for(const xt of[-.27,.34]){const Lt=new me(new Dn(.065*M,.09*M,.72*M,6),de);Lt.position.set(xt*M,.48*M,pt*M),Lt.rotation.z=xt<0?.08:-.06,Z.add(Lt)}for(const pt of[-1,1])for(let xt=0;xt<4;xt++){const Lt=new me(new Dn(.028*M,.05*M,.38*M,5),ue);Lt.position.set(.7*M,(1.82+xt*.13)*M,pt*(.11+xt*.055)*M),Lt.rotation.z=pt*(.45-xt*.08),Z.add(Lt)}const vt=new me(new Nn(.13*M,7,5),q);vt.position.set(-.52*M,1.05*M,0),vt.scale.set(.7,1.2,.7),Z.add(vt),Z.position.set(w,I(w,D),D),Z.userData={phase:F},N(Z),lt.push({g:Z,x:w,z:D,r:4+Ae(F,41)*3,speed:.25+Ae(F,42)*.18,phase:F,kind:"deer"})},ct=(w,D)=>{const M=new rt,F=W(6965552,1),Z=W(3089436,1),q=new me(new Nn(.22,8,6),F);q.scale.set(1.35,.9,.9),q.position.y=.72,M.add(q);const de=new me(new Nn(.17,8,6),F);de.position.set(.22,.86,0),M.add(de);for(const le of[-1,1]){const $e=new me(new Xn(.06,.18,6),F);$e.position.set(.17,.99,le*.09),M.add($e)}const ue=new me(new _n(.24,.075,7,14,Math.PI*1.65),F);ue.rotation.y=Math.PI/2,ue.position.set(-.22,.91,0),M.add(ue);const we=new me(new Nn(.025,6,4),Z);we.position.set(.35,.9,-.12),M.add(we),M.position.set(w,I(w,D),D),N(M,"ratatosk","Белка Рататоск"),he.push(M),Te(w,D,.28,.02),lt.push({g:M,x:w,z:D,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},it=-4,gt=69,Pt=new rt;Pt.userData={id:"ashgrove",label:"Роща Ясеня"};const Ct=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[w,D,M,F]of Ct)Ze(it+w,gt+D,M,F);for(let w=0;w<9;w++){const D=w/9*Math.PI*2,M=4.2+Ae(w,1301)*2,F=new me(new ln(.48+Ae(w,1302)*.24,1),W(5725014,1));F.position.set(it+Math.cos(D)*M,I(it+Math.cos(D)*M,gt+Math.sin(D)*M)+.35,gt+Math.sin(D)*M),F.scale.y=1.3+Ae(w,1303)*.7,F.rotation.set(Ae(w,1304),D,Ae(w,1305)),N(F)}const qe=new me(new _n(5.7,.055,7,64),new Dt({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));qe.rotation.x=Math.PI/2,qe.position.set(it,I(it,gt)+.045,gt),b.add(qe);const Ut=new me(new ln(1,1),W(5199441,1));Ut.position.set(it,I(it,gt)+.75,gt),Ut.scale.y=1.5,b.add(Ut);const ht=new me(new _n(.62,.05,7,24),new Dt({color:12757607,emissive:6637341,emissiveIntensity:1.7}));ht.rotation.x=Math.PI/2,ht.position.set(it,I(it,gt)+1.45,gt),b.add(ht),he.push(Pt),Te(it,gt,1,.08);const Wt=61,Sn=78,Mn=new rt;Mn.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Ui=new me(new _n(5.6,.055,7,56),new Dt({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));Ui.rotation.x=Math.PI/2,Ui.position.set(Wt,I(Wt,Sn)+.04,Sn),b.add(Ui);const wt=new rt;wt.position.set(Wt,I(Wt,Sn),Sn),wt.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const w of[-2.4,2.4]){const D=j(.28,2.5,.28,4862755,1);D.position.set(w,1.25,0),wt.add(D)}const hn=new me(new Xn(3.4,1.65,6),W(3813673,1));hn.position.y=2.75,hn.scale.z=.72,wt.add(hn),Ce(Wt,Sn+1.8,.55);const En=new me(new ln(.8,1),W(5264976,1));En.position.set(Wt,I(Wt,Sn)+.65,Sn+2.2),wt.add(En),N(wt,"hoddmimir","Лес Ходдмимира"),he.push(wt),Te(Wt,Sn,1.1,.08);const jt=30,$t=53;for(let w=0;w<4;w++)Ye(jt+(w-1.5)*2.6,$t+(w%2?2.6:-2.6),1.12+Ae(w,1440)*.16,10+w);const vs=new me(new ln(.72,1),W(5725526,1));vs.position.set(jt,I(jt,$t)+.5,$t),b.add(vs);const li=new me(new _n(5.8,.045,7,48),new Dt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));li.rotation.x=Math.PI/2,li.position.set(jt,I(jt,$t)+.035,$t),b.add(li),ct(it+5,gt+1);const za=12,Ba=49,_s=new rt;_s.position.set(za,I(za,Ba),Ba);const Zc=new me(new ln(1.05,1),W(5133648,1));Zc.position.y=.85,Zc.scale.y=1.55,_s.add(Zc);const Jc=new me(new _n(2.7,.055,7,48),new Dt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Jc.rotation.x=Math.PI/2,Jc.position.y=.06,_s.add(Jc);const F_=new Kf({color:14207464,transparent:!0,opacity:.72});for(let w=0;w<3;w++){const D=[new k((w-1)*.72,.95,.15),new k((w-1)*1.25,2.9,-.35+Math.sin(w)*.25),new k((w-1)*1.75,.5,.9)];_s.add(new s0(new an().setFromPoints(D),F_))}for(let w=0;w<7;w++){const D=new me(new ln(.11,0),W(6708050,1)),M=-1+w*.32;D.position.set(-1.7+M*.95,.06,-1.6+w*.46),D.scale.set(1.6,.35,.8),_s.add(D)}N(_s,"forestEvent","Камень Трёх Нитей"),Te(za,Ba,1.15,.08);for(let w=0;w<95;w++){const D=Ae(w,77)*Math.PI*2,M=58+Ae(w,91)*32,F=Math.cos(D)*M,Z=Math.sin(D)*M+2,de=[[it,gt,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10]].some(([ue,we,le])=>Math.hypot(F-ue,Z-we)<le);Math.abs(F+57)>9&&!de&&Qe(F,Z,.78+Ae(w,13)*.82)}Ze(-10,18,1.55,!1),Ze(13,24,1.7,!1),Ze(-31,-12,2.15,!0);for(let w=0;w<110;w++){const D=Ae(w,701)*Math.PI*2,M=15+Ae(w,702)*50,F=Math.cos(D)*M,Z=Math.sin(D)*M+3;if(Math.abs(F)<10&&Math.abs(Z)<16)continue;const q=new rt;q.position.set(F,I(F,Z),Z);for(let de=0;de<3;de++){const ue=new me(new Xn(.025,.38+Ae(de,w)*.28,4),W(de===1?5466175:4282935,1));ue.position.set((de-1)*.09,.18,(Ae(de*3,w)-.5)*.12),ue.rotation.z=(de-1)*.22,q.add(ue)}b.add(q)}for(let w=0;w<80;w++){const D=-88+Ae(w,101)*176,M=-88+Ae(w,111)*176;if(Math.hypot(D,M+2)>30){const F=new me(new Xn(.08,.55+Ae(w,121)*.7,5),W(4941888,1));F.position.set(D,I(D,M)+.3,M),b.add(F)}}const Fr=new rt;Fr.position.set(29,I(29,25),25),Fr.userData={id:"tower",label:"Сторожевая башня"};for(const w of[-2,2])for(const D of[-2,2]){const M=j(.35,7,.35,3942685,1);M.position.set(w,3.5,D),Fr.add(M)}const up=j(5,.35,5,6833965,1);up.position.y=5.8,Fr.add(up);const dp=new me(new Xn(3.8,2.7,4),W(2696482,1));dp.position.y=8,Fr.add(dp),N(Fr,"tower","Сторожевая башня"),he.push(Fr),oe(29,25,4.8,4.8,0,.08);const To=(w,D,M,F,Z,q)=>{const de=new rt;de.userData={id:M,label:F,phase:q,baseX:w,baseZ:D};const ue=new me(new no(.32,.78,4,8),W(Z,.9));ue.position.y=.85,de.add(ue);const we=new me(new Nn(.25,12,8),W(13210736,.9));we.position.y=1.58,de.add(we);const le=j(.7,.9,.15,2565407,1);le.position.set(0,.82,-.27),de.add(le),de.position.set(w,I(w,D),D),N(de,M,F),he.push(de),ft.push(de)};To(9,-8,"elder","Старейшина",7558719,.4),To(-6,-3,"blacksmith","Кузнец",6044459,1.5),To(21,1,"hunter","Охотник",4215359,2.4),To(5,10,"villager","Житель Мидгарда",5858125,3.4),To(-16,4,"villager2","Житель деревни",6638394,4.2);const O_=new jc({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Qc=new rt;for(let w=0;w<34;w++){const D=new me(new Nn(.9+Ae(w,810)*2.2,8,6),O_);D.position.set(-88+Ae(w,811)*176,1.8+Ae(w,812)*2.2,-72+Ae(w,813)*144),Qc.add(D)}b.add(Qc);const eu=zT(t);b.add(eu);const fp=new $S,tu=new je,hp=w=>{var F,Z,q,de;if((Z=(F=w.target)==null?void 0:F.closest)!=null&&Z.call(F,".mid3d-ui"))return;const D=P.domElement.getBoundingClientRect();tu.x=(w.clientX-D.left)/D.width*2-1,tu.y=-((w.clientY-D.top)/D.height)*2+1,fp.setFromCamera(tu,R);const M=fp.intersectObjects(he,!0)[0];if(M){let ue=M.object;for(;ue.parent&&!((q=ue.userData)!=null&&q.id);)ue=ue.parent;(de=ue.userData)!=null&&de.id&&e(ue.userData.id)}};P.domElement.addEventListener("pointerup",hp);const k_=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:za,z:Ba,r:4.8},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],pp=()=>{const w=Math.max(1,A.clientWidth),D=Math.max(1,A.clientHeight);R.aspect=w/D,R.updateProjectionMatrix(),P.setSize(w,D,!1)};pp();const mp=new ResizeObserver(pp);mp.observe(A);let nu=0,gp=performance.now();const vp=w=>{const D=Math.min(.05,(w-gp)/1e3);gp=w;const M=o.current,F=Math.hypot(M.dx,M.dz);if(F>.05){const le=6.2*D;qt(M,M.x+M.dx/F*le,M.z+M.dz/F*le),eu.rotation.y=Math.atan2(M.dx,M.dz),y.current.x=M.dx/F,y.current.z=M.dz/F,f(!0)}else f(!1);const Z=I(M.x,M.z);eu.position.set(M.x,Z+.04,M.z);const q=y.current,de=new k(M.x-q.x*2,Z+7.2,M.z-q.z*2+11.8);R.position.lerp(de,.055),R.lookAt(M.x+q.x*1.9,Z+1.2,M.z+q.z*1.9);let ue="",we="";for(const le of k_)if(Math.hypot(M.x-le.x,M.z-le.z)<le.r){ue=le.label,we=le.id;break}l(ue?`${ue}|${we}`:""),He.forEach(le=>{le.light.intensity=2+Math.sin(w*.012+le.phase)*.5,le.flame.scale.y=.9+Math.sin(w*.009+le.phase)*.12}),Qc.children.forEach((le,$e)=>{le.position.x+=Math.sin(w*12e-5+$e)*.003,le.position.z+=Math.cos(w*1e-4+$e)*.002}),lt.forEach((le,$e)=>{const Xe=w*25e-5*le.speed+le.phase,vt=le.x+Math.cos(Xe)*le.r,pt=le.z+Math.sin(Xe*.83)*le.r*.62;le.g.position.set(vt,I(vt,pt),pt),le.g.rotation.y=Math.atan2(Math.cos(Xe*.83),-Math.sin(Xe)),le.kind==="deer"&&(le.g.position.y+=Math.sin(w*.006+$e)*.025)}),ft.forEach((le,$e)=>{const Xe=le.userData.phase||0,vt=le.userData.baseX,pt=le.userData.baseZ,xt=vt+Math.sin(w*28e-5+Xe)*1.6,Lt=pt+Math.cos(w*22e-5+Xe)*1.1;le.position.set(xt,I(xt,Lt),Lt),le.rotation.y=Math.sin(w*4e-4+Xe)*.5}),P.render(b,R),nu=requestAnimationFrame(vp)};return nu=requestAnimationFrame(vp),()=>{cancelAnimationFrame(nu),mp.disconnect(),P.domElement.removeEventListener("pointerup",hp),ee.dispose(),ne.dispose(),fe.dispose(),P.dispose(),b.traverse(w=>{var D,M,F,Z;w.isMesh&&((M=(D=w.geometry)==null?void 0:D.dispose)==null||M.call(D),Array.isArray(w.material)?w.material.forEach(q=>{var de;return(de=q.dispose)==null?void 0:de.call(q)}):(Z=(F=w.material)==null?void 0:F.dispose)==null||Z.call(F))}),P.domElement.remove()}},[t.id,e,n]);const g=A=>{const b=r.current,R=s.current;if(!b||!R)return;const P=b.getBoundingClientRect(),T=P.left+P.width/2,S=P.top+P.height/2,U=48;let I=A.clientX-T,Y=A.clientY-S;const ee=Math.hypot(I,Y);ee>U&&(I=I/ee*U,Y=Y/ee*U),R.style.transform=`translate(${I}px,${Y}px)`,o.current.dx=I/U,o.current.dz=Y/U},u=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},m=A=>{var Y,ee;const b=r.current;if(!b)return;const R=A.target;if((Y=R.closest)!=null&&Y.call(R,".mid3d-action")||(ee=R.closest)!=null&&ee.call(R,".mid3d-interact"))return;const P=b.getBoundingClientRect(),T=26;A.clientX>=P.left-T&&A.clientX<=P.right+T&&A.clientY>=P.top-78&&A.clientY<=P.bottom+26&&(A.currentTarget.setPointerCapture(A.pointerId),g(A))},v=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&g(A)},x=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&A.currentTarget.releasePointerCapture(A.pointerId),u()};return B.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:m,onPointerMove:v,onPointerUp:x,onPointerCancel:x,onContextMenu:A=>A.preventDefault(),children:[B.jsxs("div",{className:"mid3d-ui mid3d-top",children:[B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"МИДГАРД"}),B.jsx("span",{children:"Деревня • река • лес • святилища"})]}),B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"ᛟ"}),B.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[B.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),B.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[B.jsx("b",{children:"Камень Трёх Нитей"}),B.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>_(!1),children:"Продолжить путь"})]}),d&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[B.jsx("b",{children:"🜂 Круг Силы"}),B.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),B.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!d&&!p&&(()=>{const[A,b]=a.split("|");return B.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[B.jsx("b",{children:A}),B.jsx("span",{children:"Ты достаточно близко"}),B.jsx("button",{onPointerDown:R=>R.stopPropagation(),onClick:()=>b==="ritual"?h(!0):b==="forestEvent"?_(!0):e(b),children:"Взаимодействовать"})]})})(),B.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:B.jsx("div",{className:"mid3d-knob",ref:s})}),B.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:A=>A.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),B.jsx("div",{className:"mid3d-ui mid3d-hint",children:c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function HT(){const[t,e]=St.useState(()=>B0().hero?{t:"tree"}:{t:"choose"}),[n,i]=St.useState(B0),[r,s]=St.useState(""),[o,a]=St.useState(""),[l,c]=St.useState(""),f=St.useRef(0),[d,h]=St.useState(null),[p,_]=St.useState(null),[y,g]=St.useState(!1),[u,m]=St.useState(0),[v,x]=St.useState(0),[A,b]=St.useState(0),[R,P]=St.useState(""),[T,S]=St.useState(!1),[U,I]=St.useState(!1),[Y,ee]=St.useState(""),[re,se]=St.useState(.06);St.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),St.useEffect(()=>{var z,Se,ne,fe;(z=yt==null?void 0:yt.ready)==null||z.call(yt),(Se=yt==null?void 0:yt.expand)==null||Se.call(yt),(ne=yt==null?void 0:yt.setHeaderColor)==null||ne.call(yt,"#0b0f0c"),(fe=yt==null?void 0:yt.setBackgroundColor)==null||fe.call(yt,"#0b0f0c")},[]),St.useEffect(()=>{if(!(yt!=null&&yt.BackButton))return;const z=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(yt.BackButton.show(),yt.BackButton.onClick(z)):yt.BackButton.hide(),()=>{var Se,ne;(ne=(Se=yt.BackButton)==null?void 0:Se.offClick)==null||ne.call(Se,z)}},[t,n.hero]),St.useEffect(()=>{h(null),_(null),g(!1),ee(""),S(!1)},[t]);const J=z=>{c(z),window.clearTimeout(f.current),f.current=window.setTimeout(()=>c(""),1800)},N=(z="light")=>{var Se,ne,fe,De;try{z==="success"?(ne=(Se=yt==null?void 0:yt.HapticFeedback)==null?void 0:Se.notificationOccurred)==null||ne.call(Se,"success"):(De=(fe=yt==null?void 0:yt.HapticFeedback)==null?void 0:fe.impactOccurred)==null||De.call(fe,"light")}catch{}},W=z=>e(z),j=z=>{N(),e({t:"realm",id:z.id})},he=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),He=()=>{const z=he();if(z<=0){J("Дозор только начался — искры ещё копятся.");return}i(Se=>({...Se,sparks:Se.sparks+z,watch:Date.now()})),N("success"),J("Дозор завершён: +"+z+" ✨")},ft=()=>{if(n.gift===Go())return;const Se=(n.gift?Math.round((Date.parse(Go())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ne=fd[Se-1];i(fe=>({...fe,sparks:fe.sparks+ne,gift:Go(),streak:Se})),N("success"),J("Дар Древа, день "+Se+": +"+ne+" ✨")},lt=()=>{!r||!o||(i(z=>({...z,hero:{id:r,name:o}})),N("success"),J("Путь начинается, "+o+"!"),e({t:"tree"}))},Me=n.hero?hd.find(z=>z.id===n.hero.id):null,ie=z=>Math.floor(Math.random()*z),oe=z=>n.trials.filter(Se=>Se.startsWith(z+":")).length,Te=z=>{if(n.artifacts.includes(z.id)){J("Мир покорён. Артефакт хранится в листе героя.");return}N(),e({t:"trial",id:z.id})},Ke=(z,Se,ne)=>{const fe=Se===2;i(De=>({...De,sparks:De.sparks+ne+(fe?30:0),trials:[...De.trials,z+":"+Se],artifacts:fe?[...De.artifacts,z]:De.artifacts})),fe&&(N("success"),J("Мир пройден! Артефакт: "+md[z]))},We=(z,Se)=>{if(d!==null)return;const ne=oe(z),fe=pd[z][ne];if(Se===fe.c){h(Se),N("success");const De=12+ne*3+((Me==null?void 0:Me.id)==="dwarf"?6:0);J("Верно! Сундук хозяина: +"+De+" ✨"),Ke(z,ne,De);return}if(n.powers.includes("mimirEye")){h(fe.c),i(Ue=>({...Ue,powers:Ue.powers.filter(L=>L!=="mimirEye")}));const De=8+ne*2;N("success"),J("Око Мимира раскрыло истину. Ответ исправлен. +"+De+" ✨"),Ke(z,ne,De);return}if(n.powers.includes("nornThread")){h(Se),i(Ue=>({...Ue,powers:Ue.powers.filter(L=>L!=="nornThread")}));const De=6+ne*2;N("success"),J("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+De+" ✨"),Ke(z,ne,De);return}h(Se),N(),P(Wo[z].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ot=z=>{const Se=oe(z),ne=pd[z][Se],fe=ne.a.findIndex((De,Ue)=>Ue!==ne.c&&Ue!==p);_(fe),g(!0),N(),J("Шёпот ветров уносит один ответ...")},qt=z=>{const Se=Wo[z],ne=n.powers.includes("ashBreath");m(Se.hp),x(Me.hp+(ne?25:0)),b(Me.en+(ne?2:0)),ee(""),S(!1),I(!1),P(ne?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Se.name+" поднимает оружие!"),ne&&i(fe=>({...fe,powers:fe.powers.filter(De=>De!=="ashBreath")})),e({t:"fight",id:z})},O=(z,Se)=>{if(Y)return;const ne=Wo[z],fe=oe(z);let De=0,Ue="",L=A,E=T;if(Se==="hit"&&(De=Me.str+ie(4),n.powers.includes("fireOath")&&(De+=5,i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="fireOath")})),Ue="Огненный обет! "),Me.id==="berserk"&&v<=Me.hp/2&&(De*=2,Ue+="Медвежья ярость! "),Ue+="Ты бьёшь: "+Me.weapon+" — −"+De+" хозяину."),Se==="rune"){if(A<4){J("Мало энергии для заклинания!");return}L=A-4,De=Me.en+2+ie(5),Ue="Руническое заклинание вспыхивает: −"+De+" хозяину."}Se==="shield"&&(E=!0,Ue="Ты поднимаешь щит — удар ослабнет.");const X=u-De;if(X<=0){m(0),b(L),ee("win");const Le=8+fe*2;P("Хозяин повержен! Награда: +"+Le+" ✨"),Ke(z,fe,Le);return}let te=ne.atk+ie(3),ce="";E&&(te=Math.ceil(te*.3),ce=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(te=Math.ceil(te*.65),i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="iceOath")})),ce+=" Ледяной обет сковал удар врага."),Me.id==="dwarf"&&(te=Math.ceil(te*.75));let Q=v;if(Me.id==="viking"&&!U&&Q-te<=0&&(I(!0),te=0,ce=" Крылья бури поглотили смертельный удар!"),Q=Q-te,m(X),x(Math.max(0,Q)),b(L),S(!1),Q<=0&&n.powers.includes("yggdrasilCall")){i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="yggdrasilCall")})),x(30),P(Ue+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(Q<=0){ee("lose"),i(Le=>({...Le,sparks:Math.max(0,Le.sparks-10)})),P(Ue+" "+ne.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}P(Ue+ce+" "+ne.name+" отвечает: −"+te+".")},Tt=z=>{oe(z)>=3||n.artifacts.includes(z)?e({t:"realm",id:z}):e({t:"trial",id:z})},et=z=>z==="tree"?t.t==="tree"||t.t==="realm":t.t===z,Je=z=>z==="tree"?{t:"tree"}:{t:z};return B.jsxs("div",{className:"app",children:[B.jsx("style",{children:OT}),B.jsxs("div",{className:"hdr",children:[t.t==="tree"&&B.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&B.jsx("button",{className:"back",onClick:()=>W({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&B.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&B.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&B.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&B.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&B.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&B.jsx("div",{className:"title",children:"⚔ Бой"}),B.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&B.jsxs("div",{className:"scroll choose-screen",children:[B.jsxs("div",{className:"card center choose-intro",children:[B.jsx("div",{className:"big",children:"ᛉ"}),B.jsx("div",{className:"qhead2",children:"Выбери героя"}),B.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),hd.map(z=>B.jsxs("button",{className:"hcard"+(r===z.id?" on":""),onClick:()=>{s(z.id),a(""),N()},children:[B.jsx("span",{className:"hface",style:{borderColor:z.color,color:z.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(cr,{name:z.img,className:"himg"})}),B.jsxs("span",{className:"hinfo",children:[B.jsx("span",{className:"hname",style:{color:z.color},children:z.race}),B.jsxs("span",{className:"hab",children:["🌀 ",z.ability,": ",z.abilityDesc]}),B.jsxs("span",{className:"hst",children:["⚔ ",z.str," • ✨ ",z.en," • ❤ ",z.hp]}),B.jsxs("span",{className:"hw",children:["🗡 ",z.weapon]})]})]},z.id)),r&&B.jsxs("div",{className:"card",children:[B.jsx("div",{className:"qhead2",children:"Имя героя"}),B.jsx("div",{className:"chips",children:(hd.find(z=>z.id===r).gender==="f"?UT:FT).map(z=>B.jsx("button",{className:"chip"+(o===z?" on":""),onClick:()=>{a(z),N()},children:z},z))})]}),B.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:lt,children:"Вступить на путь"})]}),t.t==="tree"&&B.jsxs("div",{className:"maparea",children:[B.jsx("div",{className:"mapwrap",children:B.jsxs("div",{className:"mapcanvas",children:[B.jsx(cr,{name:"tree",className:"mapimg"}),Dl.map(z=>B.jsxs("button",{className:"marker",style:{left:z.x+"%",top:z.y+"%"},onClick:()=>j(z),children:[B.jsxs("div",{className:"amulet-wrap",children:[B.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${z.glow}, transparent 70%)`}}),B.jsx("div",{className:"amulet-ring",style:{borderColor:z.color}}),B.jsx("div",{className:"amulet-core",style:{borderColor:z.color,color:z.color,background:`linear-gradient(135deg, ${z.dark}, #0a0a0a)`},children:z.runeSym})]}),B.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:z.name})]},z.id))]})}),B.jsx("div",{className:"fadeT"}),B.jsx("div",{className:"fadeB"}),B.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Me&&n.hero&&B.jsxs("button",{className:"herobar",onClick:()=>W({t:"hero"}),children:[B.jsxs("span",{className:"hbface",style:{borderColor:Me.color,color:Me.color},children:[B.jsx(cr,{name:Me.img,className:"hbimg"}),Me.sym]}),B.jsxs("span",{className:"hbname",children:[n.hero.name,B.jsx("i",{children:Me.race})]}),B.jsxs("span",{className:"hbst",children:["⚔ ",Me.str," ✨ ",Me.en," ⏳ ",he()]}),B.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const z=Dl.find(Se=>Se.id===t.id);if(z.id==="midgard"){if(!Me)return null;const Se=ne=>{if(N(),ne==="mimir"){J("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ne==="norns"){J("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ne==="forge"||ne==="blacksmith"){J("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ne==="house"||ne==="elder"){J("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ne==="port"){J("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ne==="rune"){J("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ne==="ashgrove"){J("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ne==="runefield"){J("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ne==="oldfarm"){J("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ne==="deer"){J("Четыре оленя поднимают головы. На миг кажется, что лес смотрит на тебя их глазами.");return}if(ne==="hoddmimir"){J("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ne==="ratatosk"){J("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ne==="forestEvent"){n.done.includes("forest:choice")&&J("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ne==="forestEvent:past"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:past"])]})),N("success"),J("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ne==="forestEvent:present"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:present"])]})),N("success"),J("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ne==="forestEvent:future"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:future"])]})),N("success"),J("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ne==="event"){J("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ne.startsWith("ritual:")){const fe=ne.slice(7),De={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[fe];if(!L)return;if(n.powers.includes(L)){J(De[fe]+" уже пробуждён. Его сила ждёт своего часа.");return}i(X=>({...X,powers:[...new Set([...X.powers,L])],done:[...new Set([...X.done,"ritual:"+fe])]}));const E={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};N("success"),J(E[fe]);return}};return B.jsx(BT,{h:Me,on:Se,eventDone:n.done.includes("forest:choice")})}return B.jsxs("div",{className:"content",children:[B.jsx(cr,{name:z.id,className:"bgimg"}),B.jsx("div",{className:"veil"}),B.jsxs("div",{className:"banner",children:[B.jsx("span",{className:"bemoji",children:z.emoji}),B.jsxs("div",{children:[B.jsx("div",{className:"bname",children:z.name}),B.jsx("div",{className:"btag",children:z.tag})]})]}),B.jsxs("button",{className:"gate",onClick:()=>Te(z),children:[B.jsxs("span",{className:"gwrap",children:[B.jsx("span",{className:"gate-ring",style:{borderColor:z.color}}),B.jsx("span",{className:"gate-core",style:{borderColor:z.color,color:z.color,background:`radial-gradient(circle, ${z.dark}, #050705 75%)`},children:z.runeSym})]}),B.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:n.artifacts.includes(z.id)?"Мир покорён":"Врата мира"})]}),B.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const z=Dl.find(De=>De.id===t.id),Se=Wo[z.id],ne=oe(z.id);if(ne>=3)return B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏺"}),B.jsx("div",{className:"qhead2",children:"Мир покорён!"}),B.jsxs("p",{className:"dim",children:["Артефакт: ",md[z.id]]}),B.jsx("button",{className:"btn gold",onClick:()=>W({t:"realm",id:z.id}),children:"К вратам"})]})});const fe=pd[z.id][ne];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"mhead",children:[B.jsxs("span",{className:"mface",style:{borderColor:z.color,color:z.color},children:[B.jsx(cr,{name:H0[z.id],className:"himg"}),Se.sym]}),B.jsx("span",{className:"mname2",style:{color:z.color},children:Se.name}),B.jsxs("span",{className:"mtitle",children:[Se.title," • испытание ",ne+1," из 3"]})]}),ne===0&&B.jsxs("div",{className:"greet",children:["«",Se.greet,"»"]}),B.jsxs("div",{className:"cloud",children:[B.jsx("div",{className:"riddle",children:fe.q}),fe.a.map((De,Ue)=>B.jsx("button",{className:"ans"+(d!==null?Ue===fe.c?" good":Ue===d?" bad":" off":p===Ue?" off":""),onClick:()=>We(z.id,Ue),children:De},Ue)),(Me==null?void 0:Me.id)==="elf"&&!y&&d===null&&B.jsx("button",{className:"btn rune",onClick:()=>ot(z.id),children:"🌀 Шёпот ветров"}),d!==null&&(d===fe.c?B.jsx("button",{className:"btn gold",onClick:()=>Tt(z.id),children:"Открыть сундук →"}):B.jsx("button",{className:"btn",onClick:()=>qt(z.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const z=Dl.find(ne=>ne.id===t.id),Se=Wo[z.id];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"duel",children:[B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:z.color,color:z.color},children:[B.jsx(cr,{name:H0[z.id],className:"himg"}),Se.sym]}),B.jsx("span",{className:"dname",style:{color:z.color},children:Se.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Se.hp*100)+"%",background:z.color}})}),B.jsxs("span",{className:"dnum",children:[u,"/",Se.hp]})]}),B.jsx("span",{className:"dvs",children:"⚔"}),B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:Me.color,color:Me.color},children:[B.jsx(cr,{name:Me.img,className:"himg"}),Me.sym]}),B.jsx("span",{className:"dname",style:{color:Me.color},children:n.hero.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/Me.hp*100)+"%",background:"#7ee787"}})}),B.jsx("span",{className:"denergy",children:Array.from({length:Me.en}).map((ne,fe)=>B.jsx("span",{className:"pip"+(fe<A?" on":"")},fe))})]})]}),B.jsx("div",{className:"flog",children:R}),!Y&&B.jsxs("div",{className:"acts",children:[B.jsxs("button",{className:"btn gold",onClick:()=>O(z.id,"hit"),children:["⚔ Удар: ",Me.weapon]}),B.jsx("button",{className:"btn rune",onClick:()=>O(z.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),B.jsx("button",{className:"btn shield",onClick:()=>O(z.id,"shield"),children:"🛡 Щит"})]}),Y==="win"&&B.jsx("button",{className:"btn gold",onClick:()=>Tt(z.id),children:"Забрать награду →"}),Y==="lose"&&B.jsx("button",{className:"btn ghost",onClick:()=>W({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Me&&n.hero&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("span",{className:"hface bigface",style:{borderColor:Me.color,color:Me.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(cr,{name:Me.img,className:"himg"})}),B.jsxs("div",{className:"qhead2",style:{color:Me.color},children:[n.hero.name," • ",Me.race]}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["⚔ ",Me.str]}),B.jsx("span",{children:"сила"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",Me.en]}),B.jsx("span",{children:"энергия"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["❤ ",Me.hp]}),B.jsx("span",{children:"здоровье"})]})]}),B.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",B.jsx("b",{children:Me.weapon})]}),B.jsxs("div",{className:"hrow",children:["🌀 ",Me.ability,": ",Me.abilityDesc]}),B.jsxs("div",{className:"hrow",children:["✨ Искр: ",B.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",B.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&B.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(z=>md[z]).join(", ")]})]})}),t.t==="gift"&&(()=>{const z=n.gift===Go(),ne=(n.gift?Math.round((Date.parse(Go())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,fe=z?n.streak:ne;return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🎁"}),B.jsx("div",{className:"qhead2",children:"Дар Древа"}),B.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),B.jsx("div",{className:"days",children:fd.map((De,Ue)=>B.jsxs("span",{className:"day"+(Ue+1===fe?" on":Ue+1<fe&&z?" done":""),children:[B.jsx("b",{children:De}),"день ",Ue+1]},Ue))}),z?B.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):B.jsxs("button",{className:"btn gold",onClick:ft,children:["Забрать дар +",fd[ne-1]," ✨"]})]}),B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"⏳"}),B.jsx("div",{className:"qhead2",children:"Дозор героя"}),B.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),B.jsxs("button",{className:"btn gold",onClick:He,children:["Завершить дозор · +",he()," ✨"]})]})]})})(),t.t==="hall"&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏛️"}),B.jsx("div",{className:"qhead2",children:"Чертог путника"}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",n.sparks]}),B.jsx("span",{children:"Искр"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),B.jsx("span",{children:"артефакты"})]})]}),B.jsxs("div",{className:"rank",children:["🏆 Ранг: ",IT(n.sparks)]}),n.hero&&Me&&B.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Me.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&B.jsx("div",{className:"nav",children:NT.map(z=>B.jsxs("button",{className:"navbtn"+(et(z.id)?" on":""),onClick:()=>W(Je(z.id)),children:[B.jsx("span",{className:"ic",children:z.ic}),z.t]},z.id))}),l&&B.jsx("div",{className:"toast",children:l})]})}t_(document.getElementById("root")).render(B.jsx(HT,{}));
