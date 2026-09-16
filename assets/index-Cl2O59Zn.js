(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var B1={exports:{}},pu={},H1={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),iy=Symbol.for("react.portal"),ry=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),oy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),ly=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),uy=Symbol.for("react.suspense"),dy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),y0=Symbol.iterator;function hy(t){return t===null||typeof t!="object"?null:(t=y0&&t[y0]||t["@@iterator"],typeof t=="function"?t:null)}var V1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G1=Object.assign,W1={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=W1,this.updater=n||V1}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X1(){}X1.prototype=Ko.prototype;function dp(t,e,n){this.props=t,this.context=e,this.refs=W1,this.updater=n||V1}var fp=dp.prototype=new X1;fp.constructor=dp;G1(fp,Ko.prototype);fp.isPureReactComponent=!0;var M0=Array.isArray,j1=Object.prototype.hasOwnProperty,hp={current:null},q1={key:!0,ref:!0,__self:!0,__source:!0};function Y1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j1.call(e,i)&&!q1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:hl,type:t,key:s,ref:o,props:r,_owner:hp.current}}function py(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function my(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S0=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?my(""+t.key):e.toString(36)}function Sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case iy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pd(o,0):i,M0(r)?(n="",t!=null&&(n=t.replace(S0,"$&/")+"/"),Sc(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=py(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(S0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",M0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pd(s,a);o+=Sc(s,e,n,l,r)}else if(l=hy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pd(s,a++),o+=Sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(t,e,n){if(t==null)return t;var i=[],r=0;return Sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ti={current:null},wc={transition:null},vy={ReactCurrentDispatcher:ti,ReactCurrentBatchConfig:wc,ReactCurrentOwner:hp};function $1(){throw Error("act(...) is not supported in production builds of React.")}Mt.Children={map:Nl,forEach:function(t,e,n){Nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Component=Ko;Mt.Fragment=ry;Mt.Profiler=oy;Mt.PureComponent=dp;Mt.StrictMode=sy;Mt.Suspense=uy;Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Mt.act=$1;Mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j1.call(e,l)&&!q1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:hl,type:t.type,key:r,ref:s,props:i,_owner:o}};Mt.createContext=function(t){return t={$$typeof:ly,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ay,_context:t},t.Consumer=t};Mt.createElement=Y1;Mt.createFactory=function(t){var e=Y1.bind(null,t);return e.type=t,e};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:cy,render:t}};Mt.isValidElement=pp;Mt.lazy=function(t){return{$$typeof:fy,_payload:{_status:-1,_result:t},_init:gy}};Mt.memo=function(t,e){return{$$typeof:dy,type:t,compare:e===void 0?null:e}};Mt.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};Mt.unstable_act=$1;Mt.useCallback=function(t,e){return ti.current.useCallback(t,e)};Mt.useContext=function(t){return ti.current.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t){return ti.current.useDeferredValue(t)};Mt.useEffect=function(t,e){return ti.current.useEffect(t,e)};Mt.useId=function(){return ti.current.useId()};Mt.useImperativeHandle=function(t,e,n){return ti.current.useImperativeHandle(t,e,n)};Mt.useInsertionEffect=function(t,e){return ti.current.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return ti.current.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return ti.current.useMemo(t,e)};Mt.useReducer=function(t,e,n){return ti.current.useReducer(t,e,n)};Mt.useRef=function(t){return ti.current.useRef(t)};Mt.useState=function(t){return ti.current.useState(t)};Mt.useSyncExternalStore=function(t,e,n){return ti.current.useSyncExternalStore(t,e,n)};Mt.useTransition=function(){return ti.current.useTransition()};Mt.version="18.3.1";H1.exports=Mt;var St=H1.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=St,xy=Symbol.for("react.element"),yy=Symbol.for("react.fragment"),My=Object.prototype.hasOwnProperty,Sy=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function K1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)My.call(e,i)&&!wy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xy,type:t,key:s,ref:o,props:r,_owner:Sy.current}}pu.Fragment=yy;pu.jsx=K1;pu.jsxs=K1;B1.exports=pu;var q=B1.exports,Z1={exports:{}},Ti={},J1={exports:{}},Q1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,J){var de=O.length;O.push(J);e:for(;0<de;){var Me=de-1>>>1,De=O[Me];if(0<r(De,J))O[Me]=J,O[de]=De,de=Me;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var J=O[0],de=O.pop();if(de!==J){O[0]=de;e:for(var Me=0,De=O.length,dt=De>>>1;Me<dt;){var ut=2*(Me+1)-1,Re=O[ut],me=ut+1,ae=O[me];if(0>r(Re,de))me<De&&0>r(ae,Re)?(O[Me]=ae,O[me]=de,Me=me):(O[Me]=Re,O[ut]=de,Me=ut);else if(me<De&&0>r(ae,de))O[Me]=ae,O[me]=de,Me=me;else break e}}return J}function r(O,J){var de=O.sortIndex-J.sortIndex;return de!==0?de:O.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,m=3,g=!1,M=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=O)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function w(O){if(E=!1,x(O),!M)if(n(l)!==null)M=!0,V(R);else{var J=n(c);J!==null&&K(w,J.startTime-O)}}function R(O,J){M=!1,E&&(E=!1,u(N),N=-1),g=!0;var de=m;try{for(x(J),p=n(l);p!==null&&(!(p.expirationTime>J)||O&&!k());){var Me=p.callback;if(typeof Me=="function"){p.callback=null,m=p.priorityLevel;var De=Me(p.expirationTime<=J);J=t.unstable_now(),typeof De=="function"?p.callback=De:p===n(l)&&i(l),x(J)}else i(l);p=n(l)}if(p!==null)var dt=!0;else{var ut=n(c);ut!==null&&K(w,ut.startTime-J),dt=!1}return dt}finally{p=null,m=de,g=!1}}var P=!1,I=null,N=-1,T=5,S=-1;function k(){return!(t.unstable_now()-S<T)}function W(){if(I!==null){var O=t.unstable_now();S=O;var J=!0;try{J=I(!0,O)}finally{J?te():(P=!1,I=null)}}else P=!1}var te;if(typeof v=="function")te=function(){v(W)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=W,te=function(){fe.postMessage(null)}}else te=function(){_(W,0)};function V(O){I=O,P||(P=!0,te())}function K(O,J){N=_(function(){O(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){M||g||(M=!0,V(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var de=m;m=J;try{return O()}finally{m=de}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var de=m;m=O;try{return J()}finally{m=de}},t.unstable_scheduleCallback=function(O,J,de){var Me=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Me+de:Me):de=Me,O){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=de+De,O={id:h++,callback:J,priorityLevel:O,startTime:de,expirationTime:De,sortIndex:-1},de>Me?(O.sortIndex=de,e(c,O),n(l)===null&&O===n(c)&&(E?(u(N),N=-1):E=!0,K(w,de-Me))):(O.sortIndex=De,e(l,O),M||g||(M=!0,V(R))),O},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(O){var J=m;return function(){var de=m;m=J;try{return O.apply(this,arguments)}finally{m=de}}}})(Q1);J1.exports=Q1;var Ey=J1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=St,Ei=Ey;function Ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ev=new Set,Xa={};function Ys(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(Xa[t]=e,t=0;t<e.length;t++)ev.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,Ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w0={},E0={};function by(t){return Cf.call(E0,t)?!0:Cf.call(w0,t)?!1:Ay.test(t)?E0[t]=!0:(w0[t]=!0,!1)}function Cy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ry(t,e,n,i){if(e===null||typeof e>"u"||Cy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ni(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zn[t]=new ni(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zn[e]=new ni(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zn[t]=new ni(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zn[t]=new ni(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zn[t]=new ni(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zn[t]=new ni(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zn[t]=new ni(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zn[t]=new ni(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zn[t]=new ni(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);zn[e]=new ni(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);zn[e]=new ni(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);zn[e]=new ni(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zn[t]=new ni(t,1,!1,t.toLowerCase(),null,!1,!1)});zn.xlinkHref=new ni("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zn[t]=new ni(t,1,!1,t.toLowerCase(),null,!0,!0)});function vp(t,e,n,i){var r=zn.hasOwnProperty(e)?zn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ry(e,n,r,i)&&(n=null),i||r===null?by(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pr=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),vo=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),iv=Symbol.for("react.offscreen"),T0=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=T0&&t[T0]||t["@@iterator"],typeof t=="function"?t:null)}var ln=Object.assign,md;function Ca(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var gd=!1;function vd(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function Py(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=vd(t.type,!1),t;case 11:return t=vd(t.type.render,!1),t;case 1:return t=vd(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _o:return"Fragment";case vo:return"Portal";case Rf:return"Profiler";case _p:return"StrictMode";case Pf:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nv:return(t.displayName||"Context")+".Consumer";case tv:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function Iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===_p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ly(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=Ly(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return ln({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function A0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ov(t,e){e=e.checked,e!=null&&vp(t,"checked",e,!1)}function Nf(t,e){ov(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function b0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function Po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ae(91));return ln({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function C0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ae(92));if(Ra(n)){if(1<n.length)throw Error(Ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function av(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function R0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dy=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){Dy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=uv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ny=ln({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(Ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ae(62))}}function zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function Mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,Io=null,Lo=null;function P0(t){if(t=gl(t)){if(typeof Hf!="function")throw Error(Ae(280));var e=t.stateNode;e&&(e=xu(e),Hf(t.stateNode,t.type,e))}}function fv(t){Io?Lo?Lo.push(t):Lo=[t]:Io=t}function hv(){if(Io){var t=Io,e=Lo;if(Lo=Io=null,P0(t),e)for(t=0;t<e.length;t++)P0(e[t])}}function pv(t,e){return t(e)}function mv(){}var _d=!1;function gv(t,e,n){if(_d)return t(e,n);_d=!0;try{return pv(t,e,n)}finally{_d=!1,(Io!==null||Lo!==null)&&(mv(),hv())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ae(231,e,typeof n));return n}var Vf=!1;if(Ar)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Vf=!1}function Uy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Na=!1,Bc=null,Hc=!1,Gf=null,Fy={onError:function(t){Na=!0,Bc=t}};function ky(t,e,n,i,r,s,o,a,l){Na=!1,Bc=null,Uy.apply(Fy,arguments)}function Oy(t,e,n,i,r,s,o,a,l){if(ky.apply(this,arguments),Na){if(Na){var c=Bc;Na=!1,Bc=null}else throw Error(Ae(198));Hc||(Hc=!0,Gf=c)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function I0(t){if($s(t)!==t)throw Error(Ae(188))}function zy(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error(Ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return I0(r),t;if(s===i)return I0(r),e;s=s.sibling}throw Error(Ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ae(189))}}if(n.alternate!==i)throw Error(Ae(190))}if(n.tag!==3)throw Error(Ae(188));return n.stateNode.current===n?t:e}function _v(t){return t=zy(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var yv=Ei.unstable_scheduleCallback,L0=Ei.unstable_cancelCallback,By=Ei.unstable_shouldYield,Hy=Ei.unstable_requestPaint,fn=Ei.unstable_now,Vy=Ei.unstable_getCurrentPriorityLevel,Sp=Ei.unstable_ImmediatePriority,Mv=Ei.unstable_UserBlockingPriority,Vc=Ei.unstable_NormalPriority,Gy=Ei.unstable_LowPriority,Sv=Ei.unstable_IdlePriority,mu=null,sr=null;function Wy(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var qi=Math.clz32?Math.clz32:qy,Xy=Math.log,jy=Math.LN2;function qy(t){return t>>>=0,t===0?32:31-(Xy(t)/jy|0)|0}var Ol=64,zl=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Pa(a):(s&=o,s!==0&&(i=Pa(s)))}else o=n&~r,o!==0?i=Pa(o):s!==0&&(i=Pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qi(e),r=1<<n,i|=t[n],e&=~r;return i}function Yy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Yy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wv(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qi(e),t[e]=n}function Ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Vt=0;function Ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,Ep,Av,bv,Cv,Xf=!1,Bl=[],Kr=null,Zr=null,Jr=null,Ya=new Map,$a=new Map,Wr=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function D0(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function ha(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=gl(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Jy(t,e,n,i,r){switch(e){case"focusin":return Kr=ha(Kr,t,e,n,i,r),!0;case"dragenter":return Zr=ha(Zr,t,e,n,i,r),!0;case"mouseover":return Jr=ha(Jr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ya.set(s,ha(Ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,ha($a.get(s)||null,t,e,n,i,r)),!0}return!1}function Rv(t){var e=Ns(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=vv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){Av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bf=i,n.target.dispatchEvent(i),Bf=null}else return e=gl(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function N0(t,e,n){Ec(t)&&n.delete(e)}function Qy(){Xf=!1,Kr!==null&&Ec(Kr)&&(Kr=null),Zr!==null&&Ec(Zr)&&(Zr=null),Jr!==null&&Ec(Jr)&&(Jr=null),Ya.forEach(N0),$a.forEach(N0)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Xf||(Xf=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,Qy)))}function Ka(t){function e(r){return pa(r,t)}if(0<Bl.length){pa(Bl[0],t);for(var n=1;n<Bl.length;n++){var i=Bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Kr!==null&&pa(Kr,t),Zr!==null&&pa(Zr,t),Jr!==null&&pa(Jr,t),Ya.forEach(e),$a.forEach(e),n=0;n<Wr.length;n++)i=Wr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)Rv(n),n.blockedOn===null&&Wr.shift()}var Do=Pr.ReactCurrentBatchConfig,Wc=!0;function e2(t,e,n,i){var r=Vt,s=Do.transition;Do.transition=null;try{Vt=1,Tp(t,e,n,i)}finally{Vt=r,Do.transition=s}}function t2(t,e,n,i){var r=Vt,s=Do.transition;Do.transition=null;try{Vt=4,Tp(t,e,n,i)}finally{Vt=r,Do.transition=s}}function Tp(t,e,n,i){if(Wc){var r=jf(t,e,n,i);if(r===null)Rd(t,e,i,Xc,n),D0(t,i);else if(Jy(r,t,e,n,i))i.stopPropagation();else if(D0(t,i),e&4&&-1<Zy.indexOf(t)){for(;r!==null;){var s=gl(r);if(s!==null&&Tv(s),s=jf(t,e,n,i),s===null&&Rd(t,e,i,Xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rd(t,e,i,null,n)}}var Xc=null;function jf(t,e,n,i){if(Xc=null,t=Mp(i),t=Ns(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function Pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Sp:return 1;case Mv:return 4;case Vc:case Gy:return 16;case Sv:return 536870912;default:return 16}default:return 16}}var Yr=null,Ap=null,Tc=null;function Iv(){if(Tc)return Tc;var t,e=Ap,n=e.length,i,r="value"in Yr?Yr.value:Yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tc=r.slice(t,1<i?1-i:void 0)}function Ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function U0(){return!1}function Ai(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:U0,this.isPropagationStopped=U0,this}return ln(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=Ai(Zo),ml=ln({},Zo,{view:0,detail:0}),n2=Ai(ml),yd,Md,ma,gu=ln({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(yd=t.screenX-ma.screenX,Md=t.screenY-ma.screenY):Md=yd=0,ma=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:Md}}),F0=Ai(gu),i2=ln({},gu,{dataTransfer:0}),r2=Ai(i2),s2=ln({},ml,{relatedTarget:0}),Sd=Ai(s2),o2=ln({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),a2=Ai(o2),l2=ln({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c2=Ai(l2),u2=ln({},Zo,{data:0}),k0=Ai(u2),d2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h2[t])?!!e[t]:!1}function Cp(){return p2}var m2=ln({},ml,{key:function(t){if(t.key){var e=d2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g2=Ai(m2),v2=ln({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=Ai(v2),_2=ln({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),x2=Ai(_2),y2=ln({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),M2=Ai(y2),S2=ln({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w2=Ai(S2),E2=[9,13,27,32],Rp=Ar&&"CompositionEvent"in window,Ua=null;Ar&&"documentMode"in document&&(Ua=document.documentMode);var T2=Ar&&"TextEvent"in window&&!Ua,Lv=Ar&&(!Rp||Ua&&8<Ua&&11>=Ua),z0=" ",B0=!1;function Dv(t,e){switch(t){case"keyup":return E2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xo=!1;function A2(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(B0=!0,z0);case"textInput":return t=e.data,t===z0&&B0?null:t;default:return null}}function b2(t,e){if(xo)return t==="compositionend"||!Rp&&Dv(t,e)?(t=Iv(),Tc=Ap=Yr=null,xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var C2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C2[t.type]:e==="textarea"}function Uv(t,e,n,i){fv(i),e=jc(e,"onChange"),0<e.length&&(n=new bp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fa=null,Za=null;function R2(t){jv(t,0)}function vu(t){var e=So(t);if(sv(e))return t}function P2(t,e){if(t==="change")return e}var Fv=!1;if(Ar){var wd;if(Ar){var Ed="oninput"in document;if(!Ed){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),Ed=typeof V0.oninput=="function"}wd=Ed}else wd=!1;Fv=wd&&(!document.documentMode||9<document.documentMode)}function G0(){Fa&&(Fa.detachEvent("onpropertychange",kv),Za=Fa=null)}function kv(t){if(t.propertyName==="value"&&vu(Za)){var e=[];Uv(e,Za,t,Mp(t)),gv(R2,e)}}function I2(t,e,n){t==="focusin"?(G0(),Fa=e,Za=n,Fa.attachEvent("onpropertychange",kv)):t==="focusout"&&G0()}function L2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(Za)}function D2(t,e){if(t==="click")return vu(e)}function N2(t,e){if(t==="input"||t==="change")return vu(e)}function U2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ki=typeof Object.is=="function"?Object.is:U2;function Ja(t,e){if(Ki(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cf.call(e,r)||!Ki(t[r],e[r]))return!1}return!0}function W0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function X0(t,e){var n=W0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=W0(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F2(t){var e=zv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(i!==null&&Pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=X0(n,s);var o=X0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k2=Ar&&"documentMode"in document&&11>=document.documentMode,yo=null,qf=null,ka=null,Yf=!1;function j0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yf||yo==null||yo!==zc(i)||(i=yo,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ka&&Ja(ka,i)||(ka=i,i=jc(qf,"onSelect"),0<i.length&&(e=new bp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=yo)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Td={},Bv={};Ar&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function _u(t){if(Td[t])return Td[t];if(!Mo[t])return t;var e=Mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return Td[t]=e[n];return t}var Hv=_u("animationend"),Vv=_u("animationiteration"),Gv=_u("animationstart"),Wv=_u("transitionend"),Xv=new Map,q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(t,e){Xv.set(t,e),Ys(e,[t])}for(var Ad=0;Ad<q0.length;Ad++){var bd=q0[Ad],O2=bd.toLowerCase(),z2=bd[0].toUpperCase()+bd.slice(1);us(O2,"on"+z2)}us(Hv,"onAnimationEnd");us(Vv,"onAnimationIteration");us(Gv,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(Wv,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Y0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Oy(i,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Y0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Y0(r,a,c),s=l}}}if(Hc)throw t=Gf,Hc=!1,Gf=null,t}function Zt(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(qv(e,t,2,!1),n.add(i))}function Cd(t,e,n){var i=0;e&&(i|=4),qv(n,t,i,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[Gl]){t[Gl]=!0,ev.forEach(function(n){n!=="selectionchange"&&(B2.has(n)||Cd(n,!1,t),Cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,Cd("selectionchange",!1,e))}}function qv(t,e,n,i){switch(Pv(e)){case 1:var r=e2;break;case 4:r=t2;break;default:r=Tp}n=r.bind(null,e,n,t),r=void 0,!Vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gv(function(){var c=s,h=Mp(n),p=[];e:{var m=Xv.get(t);if(m!==void 0){var g=bp,M=t;switch(t){case"keypress":if(Ac(n)===0)break e;case"keydown":case"keyup":g=g2;break;case"focusin":M="focus",g=Sd;break;case"focusout":M="blur",g=Sd;break;case"beforeblur":case"afterblur":g=Sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=F0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=r2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=x2;break;case Hv:case Vv:case Gv:g=a2;break;case Wv:g=M2;break;case"scroll":g=n2;break;case"wheel":g=w2;break;case"copy":case"cut":case"paste":g=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=O0}var E=(e&4)!==0,_=!E&&t==="scroll",u=E?m!==null?m+"Capture":null:m;E=[];for(var v=c,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,u!==null&&(w=qa(v,u),w!=null&&E.push(el(v,w,x)))),_)break;v=v.return}0<E.length&&(m=new g(m,M,null,n,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Bf&&(M=n.relatedTarget||n.fromElement)&&(Ns(M)||M[br]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(M=n.relatedTarget||n.toElement,g=c,M=M?Ns(M):null,M!==null&&(_=$s(M),M!==_||M.tag!==5&&M.tag!==6)&&(M=null)):(g=null,M=c),g!==M)){if(E=F0,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=O0,w="onPointerLeave",u="onPointerEnter",v="pointer"),_=g==null?m:So(g),x=M==null?m:So(M),m=new E(w,v+"leave",g,n,h),m.target=_,m.relatedTarget=x,w=null,Ns(h)===c&&(E=new E(u,v+"enter",M,n,h),E.target=x,E.relatedTarget=_,w=E),_=w,g&&M)t:{for(E=g,u=M,v=0,x=E;x;x=eo(x))v++;for(x=0,w=u;w;w=eo(w))x++;for(;0<v-x;)E=eo(E),v--;for(;0<x-v;)u=eo(u),x--;for(;v--;){if(E===u||u!==null&&E===u.alternate)break t;E=eo(E),u=eo(u)}E=null}else E=null;g!==null&&$0(p,m,g,E,!1),M!==null&&_!==null&&$0(p,_,M,E,!0)}}e:{if(m=c?So(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var R=P2;else if(H0(m))if(Fv)R=N2;else{R=L2;var P=I2}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=D2);if(R&&(R=R(t,c))){Uv(p,R,n,h);break e}P&&P(t,m,c),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Uf(m,"number",m.value)}switch(P=c?So(c):window,t){case"focusin":(H0(P)||P.contentEditable==="true")&&(yo=P,qf=c,ka=null);break;case"focusout":ka=qf=yo=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,j0(p,n,h);break;case"selectionchange":if(k2)break;case"keydown":case"keyup":j0(p,n,h)}var I;if(Rp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xo?Dv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Lv&&n.locale!=="ko"&&(xo||N!=="onCompositionStart"?N==="onCompositionEnd"&&xo&&(I=Iv()):(Yr=h,Ap="value"in Yr?Yr.value:Yr.textContent,xo=!0)),P=jc(c,N),0<P.length&&(N=new k0(N,t,null,n,h),p.push({event:N,listeners:P}),I?N.data=I:(I=Nv(n),I!==null&&(N.data=I)))),(I=T2?A2(t,n):b2(t,n))&&(c=jc(c,"onBeforeInput"),0<c.length&&(h=new k0("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=I))}jv(p,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qa(t,n),s!=null&&i.unshift(el(t,s,r)),s=qa(t,e),s!=null&&i.push(el(t,s,r))),t=t.return}return i}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qa(n,s),l!=null&&o.unshift(el(n,l,a))):r||(l=qa(n,s),l!=null&&o.push(el(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H2=/\r\n?/g,V2=/\u0000|\uFFFD/g;function K0(t){return(typeof t=="string"?t:""+t).replace(H2,`
`).replace(V2,"")}function Wl(t,e,n){if(e=K0(e),K0(t)!==e&&n)throw Error(Ae(425))}function qc(){}var $f=null,Kf=null;function Zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,G2=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,W2=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(X2)}:Jf;function X2(t){setTimeout(function(){throw t})}function Pd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ka(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function J0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),nr="__reactFiber$"+Jo,tl="__reactProps$"+Jo,br="__reactContainer$"+Jo,Qf="__reactEvents$"+Jo,j2="__reactListeners$"+Jo,q2="__reactHandles$"+Jo;function Ns(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=J0(t);t!==null;){if(n=t[nr])return n;t=J0(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[nr]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ae(33))}function xu(t){return t[tl]||null}var eh=[],wo=-1;function ds(t){return{current:t}}function Jt(t){0>wo||(t.current=eh[wo],eh[wo]=null,wo--)}function Kt(t,e){wo++,eh[wo]=t.current,t.current=e}var as={},qn=ds(as),di=ds(!1),Hs=as;function zo(t,e){var n=t.type.contextTypes;if(!n)return as;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fi(t){return t=t.childContextTypes,t!=null}function Yc(){Jt(di),Jt(qn)}function Q0(t,e,n){if(qn.current!==as)throw Error(Ae(168));Kt(qn,e),Kt(di,n)}function Yv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ae(108,Iy(t)||"Unknown",r));return ln({},n,i)}function $c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,Hs=qn.current,Kt(qn,t),Kt(di,di.current),!0}function eg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ae(169));n?(t=Yv(t,e,Hs),i.__reactInternalMemoizedMergedChildContext=t,Jt(di),Jt(qn),Kt(qn,t)):Jt(di),Kt(di,n)}var yr=null,yu=!1,Id=!1;function $v(t){yr===null?yr=[t]:yr.push(t)}function Y2(t){yu=!0,$v(t)}function fs(){if(!Id&&yr!==null){Id=!0;var t=0,e=Vt;try{var n=yr;for(Vt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yr=null,yu=!1}catch(r){throw yr!==null&&(yr=yr.slice(t+1)),yv(Sp,fs),r}finally{Vt=e,Id=!1}}return null}var Eo=[],To=0,Kc=null,Zc=0,Ii=[],Li=0,Vs=null,Mr=1,Sr="";function Cs(t,e){Eo[To++]=Zc,Eo[To++]=Kc,Kc=t,Zc=e}function Kv(t,e,n){Ii[Li++]=Mr,Ii[Li++]=Sr,Ii[Li++]=Vs,Vs=t;var i=Mr;t=Sr;var r=32-qi(i)-1;i&=~(1<<r),n+=1;var s=32-qi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mr=1<<32-qi(e)+r|n<<r|i,Sr=s+t}else Mr=1<<s|n<<r|i,Sr=t}function Ip(t){t.return!==null&&(Cs(t,1),Kv(t,1,0))}function Lp(t){for(;t===Kc;)Kc=Eo[--To],Eo[To]=null,Zc=Eo[--To],Eo[To]=null;for(;t===Vs;)Vs=Ii[--Li],Ii[Li]=null,Sr=Ii[--Li],Ii[Li]=null,Mr=Ii[--Li],Ii[Li]=null}var wi=null,Si=null,nn=!1,Wi=null;function Zv(t,e){var n=Di(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Si=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vs!==null?{id:Mr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Di(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Si=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(nn){var e=Si;if(e){var n=e;if(!tg(t,e)){if(th(t))throw Error(Ae(418));e=Qr(n.nextSibling);var i=wi;e&&tg(t,e)?Zv(i,n):(t.flags=t.flags&-4097|2,nn=!1,wi=t)}}else{if(th(t))throw Error(Ae(418));t.flags=t.flags&-4097|2,nn=!1,wi=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function Xl(t){if(t!==wi)return!1;if(!nn)return ng(t),nn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zf(t.type,t.memoizedProps)),e&&(e=Si)){if(th(t))throw Jv(),Error(Ae(418));for(;e;)Zv(t,e),e=Qr(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Si=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Si=null}}else Si=wi?Qr(t.stateNode.nextSibling):null;return!0}function Jv(){for(var t=Si;t;)t=Qr(t.nextSibling)}function Bo(){Si=wi=null,nn=!1}function Dp(t){Wi===null?Wi=[t]:Wi.push(t)}var $2=Pr.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ae(309));var i=n.stateNode}if(!i)throw Error(Ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ae(284));if(!n._owner)throw Error(Ae(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(Ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function Qv(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=is(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,w){return v===null||v.tag!==6?(v=Od(x,u.mode,w),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,w){var R=x.type;return R===_o?h(u,v,x.props.children,w,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vr&&ig(R)===v.type)?(w=r(v,x.props),w.ref=ga(u,v,x),w.return=u,w):(w=Dc(x.type,x.key,x.props,null,u.mode,w),w.ref=ga(u,v,x),w.return=u,w)}function c(u,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=zd(x,u.mode,w),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function h(u,v,x,w,R){return v===null||v.tag!==7?(v=Bs(x,u.mode,w,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function p(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Od(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ul:return x=Dc(v.type,v.key,v.props,null,u.mode,x),x.ref=ga(u,null,v),x.return=u,x;case vo:return v=zd(v,u.mode,x),v.return=u,v;case Vr:var w=v._init;return p(u,w(v._payload),x)}if(Ra(v)||da(v))return v=Bs(v,u.mode,x,null),v.return=u,v;jl(u,v)}return null}function m(u,v,x,w){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ul:return x.key===R?l(u,v,x,w):null;case vo:return x.key===R?c(u,v,x,w):null;case Vr:return R=x._init,m(u,v,R(x._payload),w)}if(Ra(x)||da(x))return R!==null?null:h(u,v,x,w,null);jl(u,x)}return null}function g(u,v,x,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(x)||null,a(v,u,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ul:return u=u.get(w.key===null?x:w.key)||null,l(v,u,w,R);case vo:return u=u.get(w.key===null?x:w.key)||null,c(v,u,w,R);case Vr:var P=w._init;return g(u,v,x,P(w._payload),R)}if(Ra(w)||da(w))return u=u.get(x)||null,h(v,u,w,R,null);jl(v,w)}return null}function M(u,v,x,w){for(var R=null,P=null,I=v,N=v=0,T=null;I!==null&&N<x.length;N++){I.index>N?(T=I,I=null):T=I.sibling;var S=m(u,I,x[N],w);if(S===null){I===null&&(I=T);break}t&&I&&S.alternate===null&&e(u,I),v=s(S,v,N),P===null?R=S:P.sibling=S,P=S,I=T}if(N===x.length)return n(u,I),nn&&Cs(u,N),R;if(I===null){for(;N<x.length;N++)I=p(u,x[N],w),I!==null&&(v=s(I,v,N),P===null?R=I:P.sibling=I,P=I);return nn&&Cs(u,N),R}for(I=i(u,I);N<x.length;N++)T=g(I,u,N,x[N],w),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?N:T.key),v=s(T,v,N),P===null?R=T:P.sibling=T,P=T);return t&&I.forEach(function(k){return e(u,k)}),nn&&Cs(u,N),R}function E(u,v,x,w){var R=da(x);if(typeof R!="function")throw Error(Ae(150));if(x=R.call(x),x==null)throw Error(Ae(151));for(var P=R=null,I=v,N=v=0,T=null,S=x.next();I!==null&&!S.done;N++,S=x.next()){I.index>N?(T=I,I=null):T=I.sibling;var k=m(u,I,S.value,w);if(k===null){I===null&&(I=T);break}t&&I&&k.alternate===null&&e(u,I),v=s(k,v,N),P===null?R=k:P.sibling=k,P=k,I=T}if(S.done)return n(u,I),nn&&Cs(u,N),R;if(I===null){for(;!S.done;N++,S=x.next())S=p(u,S.value,w),S!==null&&(v=s(S,v,N),P===null?R=S:P.sibling=S,P=S);return nn&&Cs(u,N),R}for(I=i(u,I);!S.done;N++,S=x.next())S=g(I,u,N,S.value,w),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?N:S.key),v=s(S,v,N),P===null?R=S:P.sibling=S,P=S);return t&&I.forEach(function(W){return e(u,W)}),nn&&Cs(u,N),R}function _(u,v,x,w){if(typeof x=="object"&&x!==null&&x.type===_o&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ul:e:{for(var R=x.key,P=v;P!==null;){if(P.key===R){if(R=x.type,R===_o){if(P.tag===7){n(u,P.sibling),v=r(P,x.props.children),v.return=u,u=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vr&&ig(R)===P.type){n(u,P.sibling),v=r(P,x.props),v.ref=ga(u,P,x),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}x.type===_o?(v=Bs(x.props.children,u.mode,w,x.key),v.return=u,u=v):(w=Dc(x.type,x.key,x.props,null,u.mode,w),w.ref=ga(u,v,x),w.return=u,u=w)}return o(u);case vo:e:{for(P=x.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=zd(x,u.mode,w),v.return=u,u=v}return o(u);case Vr:return P=x._init,_(u,v,P(x._payload),w)}if(Ra(x))return M(u,v,x,w);if(da(x))return E(u,v,x,w);jl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Od(x,u.mode,w),v.return=u,u=v),o(u)):n(u,v)}return _}var Ho=Qv(!0),e_=Qv(!1),Jc=ds(null),Qc=null,Ao=null,Np=null;function Up(){Np=Ao=Qc=null}function Fp(t){var e=Jc.current;Jt(Jc),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function No(t,e){Qc=t,Np=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ui=!0),t.firstContext=null)}function Ui(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},Ao===null){if(Qc===null)throw Error(Ae(308));Ao=t,Qc.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return e}var Us=null;function kp(t){Us===null?Us=[t]:Us.push(t)}function t_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Cr(t,i)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function es(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Cr(t,n)}return r=i.interleaved,r===null?(e.next=e,kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Cr(t,n)}function bc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wp(t,n)}}function rg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,i){var r=t.updateQueue;Gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=t,E=a;switch(m=e,g=n,E.tag){case 1:if(M=E.payload,typeof M=="function"){p=M.call(g,p,m);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=E.payload,m=typeof M=="function"?M.call(g,p,m):M,m==null)break e;p=ln({},p,m);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=p}}function sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ae(191,r));r.call(i)}}}var vl={},or=ds(vl),nl=ds(vl),il=ds(vl);function Fs(t){if(t===vl)throw Error(Ae(174));return t}function zp(t,e){switch(Kt(il,e),Kt(nl,t),Kt(or,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}Jt(or),Kt(or,e)}function Vo(){Jt(or),Jt(nl),Jt(il)}function i_(t){Fs(il.current);var e=Fs(or.current),n=kf(e,t.type);e!==n&&(Kt(nl,t),Kt(or,n))}function Bp(t){nl.current===t&&(Jt(or),Jt(nl))}var on=ds(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ld=[];function Hp(){for(var t=0;t<Ld.length;t++)Ld[t]._workInProgressVersionPrimary=null;Ld.length=0}var Cc=Pr.ReactCurrentDispatcher,Dd=Pr.ReactCurrentBatchConfig,Gs=0,an=null,Sn=null,In=null,nu=!1,Oa=!1,rl=0,K2=0;function Hn(){throw Error(Ae(321))}function Vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ki(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,s){if(Gs=s,an=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?eM:tM,t=n(i,r),Oa){s=0;do{if(Oa=!1,rl=0,25<=s)throw Error(Ae(301));s+=1,In=Sn=null,e.updateQueue=null,Cc.current=nM,t=n(i,r)}while(Oa)}if(Cc.current=iu,e=Sn!==null&&Sn.next!==null,Gs=0,In=Sn=an=null,nu=!1,e)throw Error(Ae(300));return t}function Wp(){var t=rl!==0;return rl=0,t}function er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?an.memoizedState=In=t:In=In.next=t,In}function Fi(){if(Sn===null){var t=an.alternate;t=t!==null?t.memoizedState:null}else t=Sn.next;var e=In===null?an.memoizedState:In.next;if(e!==null)In=e,Sn=t;else{if(t===null)throw Error(Ae(310));Sn=t,t={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},In===null?an.memoizedState=In=t:In=In.next=t}return In}function sl(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ae(311));n.lastRenderedReducer=t;var i=Sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Gs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,an.lanes|=h,Ws|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ki(i,e.memoizedState)||(ui=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,an.lanes|=s,Ws|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ki(s,e.memoizedState)||(ui=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function r_(){}function s_(t,e){var n=an,i=Fi(),r=e(),s=!Ki(i.memoizedState,r);if(s&&(i.memoizedState=r,ui=!0),i=i.queue,Xp(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||In!==null&&In.memoizedState.tag&1){if(n.flags|=2048,ol(9,a_.bind(null,n,i,r,e),void 0,null),Ln===null)throw Error(Ae(349));Gs&30||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=an.updateQueue,e===null?(e={lastEffect:null,stores:null},an.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,i){e.value=n,e.getSnapshot=i,c_(e)&&u_(t)}function l_(t,e,n){return n(function(){c_(e)&&u_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ki(t,n)}catch{return!0}}function u_(t){var e=Cr(t,1);e!==null&&Yi(e,t,1,-1)}function og(t){var e=er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=Q2.bind(null,an,t),[e.memoizedState,t]}function ol(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=an.updateQueue,e===null?(e={lastEffect:null,stores:null},an.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function d_(){return Fi().memoizedState}function Rc(t,e,n,i){var r=er();an.flags|=t,r.memoizedState=ol(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=Fi();i=i===void 0?null:i;var s=void 0;if(Sn!==null){var o=Sn.memoizedState;if(s=o.destroy,i!==null&&Vp(i,o.deps)){r.memoizedState=ol(e,n,s,i);return}}an.flags|=t,r.memoizedState=ol(1|e,n,s,i)}function ag(t,e){return Rc(8390656,8,t,e)}function Xp(t,e){return Mu(2048,8,t,e)}function f_(t,e){return Mu(4,2,t,e)}function h_(t,e){return Mu(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,p_.bind(null,e,t),n)}function jp(){}function g_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return Gs&21?(Ki(n,e)||(n=wv(),an.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ui=!0),t.memoizedState=n)}function Z2(t,e){var n=Vt;Vt=n!==0&&4>n?n:4,t(!0);var i=Dd.transition;Dd.transition={};try{t(!1),e()}finally{Vt=n,Dd.transition=i}}function x_(){return Fi().memoizedState}function J2(t,e,n){var i=ns(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))M_(e,n);else if(n=t_(t,e,n,i),n!==null){var r=Qn();Yi(n,t,i,r),S_(n,e,i)}}function Q2(t,e,n){var i=ns(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))M_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ki(a,o)){var l=e.interleaved;l===null?(r.next=r,kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=t_(t,e,r,i),n!==null&&(r=Qn(),Yi(n,t,i,r),S_(n,e,i))}}function y_(t){var e=t.alternate;return t===an||e!==null&&e===an}function M_(t,e){Oa=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wp(t,n)}}var iu={readContext:Ui,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},eM={readContext:Ui,useCallback:function(t,e){return er().memoizedState=[t,e===void 0?null:e],t},useContext:Ui,useEffect:ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=er();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=er();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=J2.bind(null,an,t),[i.memoizedState,t]},useRef:function(t){var e=er();return t={current:t},e.memoizedState=t},useState:og,useDebugValue:jp,useDeferredValue:function(t){return er().memoizedState=t},useTransition:function(){var t=og(!1),e=t[0];return t=Z2.bind(null,t[1]),er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=an,r=er();if(nn){if(n===void 0)throw Error(Ae(407));n=n()}else{if(n=e(),Ln===null)throw Error(Ae(349));Gs&30||o_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ag(l_.bind(null,i,s,t),[t]),i.flags|=2048,ol(9,a_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=er(),e=Ln.identifierPrefix;if(nn){var n=Sr,i=Mr;n=(i&~(1<<32-qi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tM={readContext:Ui,useCallback:g_,useContext:Ui,useEffect:Xp,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:v_,useReducer:Nd,useRef:d_,useState:function(){return Nd(sl)},useDebugValue:jp,useDeferredValue:function(t){var e=Fi();return __(e,Sn.memoizedState,t)},useTransition:function(){var t=Nd(sl)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1},nM={readContext:Ui,useCallback:g_,useContext:Ui,useEffect:Xp,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:v_,useReducer:Ud,useRef:d_,useState:function(){return Ud(sl)},useDebugValue:jp,useDeferredValue:function(t){var e=Fi();return Sn===null?e.memoizedState=t:__(e,Sn.memoizedState,t)},useTransition:function(){var t=Ud(sl)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1};function Vi(t,e){if(t&&t.defaultProps){e=ln({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ln({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=ns(t),s=Er(i,r);s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&(Yi(e,t,r,i),bc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=ns(t),s=Er(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&(Yi(e,t,r,i),bc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qn(),i=ns(t),r=Er(n,i);r.tag=2,e!=null&&(r.callback=e),e=es(t,r,i),e!==null&&(Yi(e,t,i,n),bc(e,t,i))}};function lg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function w_(t,e,n){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=Ui(s):(r=fi(e)?Hs:qn.current,i=e.contextTypes,s=(i=i!=null)?zo(t,r):as),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Op(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ui(s):(s=fi(e)?Hs:qn.current,r.context=zo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",i=e;do n+=Py(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iM=typeof WeakMap=="function"?WeakMap:Map;function E_(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){su||(su=!0,gh=i),oh(t,e)},n}function T_(t,e,n){n=Er(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof i!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ug(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vM.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,es(n,e,1))),n.lanes|=1),t)}var rM=Pr.ReactCurrentOwner,ui=!1;function Jn(t,e,n,i){e.child=t===null?e_(e,null,n,i):Ho(e,t.child,n,i)}function hg(t,e,n,i,r){n=n.render;var s=e.ref;return No(e,r),i=Gp(t,e,n,i,s,r),n=Wp(),t!==null&&!ui?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Rr(t,e,r)):(nn&&n&&Ip(e),e.flags|=1,Jn(t,e,i,r),e.child)}function pg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=Dc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,i)&&t.ref===e.ref)return Rr(t,e,r)}return e.flags|=1,t=is(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(ui=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ui=!0);else return e.lanes=t.lanes,Rr(t,e,r)}return ah(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(Co,yi),yi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Kt(Co,yi),yi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Kt(Co,yi),yi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Kt(Co,yi),yi|=i;return Jn(t,e,r,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,i,r){var s=fi(n)?Hs:qn.current;return s=zo(e,s),No(e,r),n=Gp(t,e,n,i,s,r),i=Wp(),t!==null&&!ui?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Rr(t,e,r)):(nn&&i&&Ip(e),e.flags|=1,Jn(t,e,n,r),e.child)}function mg(t,e,n,i,r){if(fi(n)){var s=!0;$c(e)}else s=!1;if(No(e,r),e.stateNode===null)Pc(t,e),w_(e,n,i),sh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ui(c):(c=fi(n)?Hs:qn.current,c=zo(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&cg(e,o,i,c),Gr=!1;var m=e.memoizedState;o.state=m,eu(e,i,o,r),l=e.memoizedState,a!==i||m!==l||di.current||Gr?(typeof h=="function"&&(rh(e,n,h,i),l=e.memoizedState),(a=Gr||lg(e,n,a,i,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vi(e.type,a),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ui(l):(l=fi(n)?Hs:qn.current,l=zo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&cg(e,o,i,l),Gr=!1,m=e.memoizedState,o.state=m,eu(e,i,o,r);var M=e.memoizedState;a!==p||m!==M||di.current||Gr?(typeof g=="function"&&(rh(e,n,g,i),M=e.memoizedState),(c=Gr||lg(e,n,c,i,m,M,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,M,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,M,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),o.props=i,o.state=M,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return lh(t,e,n,i,s,r)}function lh(t,e,n,i,r,s){C_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&eg(e,n,!1),Rr(t,e,s);i=e.stateNode,rM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ho(e,t.child,null,s),e.child=Ho(e,null,a,s)):Jn(t,e,a,s),e.memoizedState=i.state,r&&eg(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?Q0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Q0(t,e.context,!1),zp(t,e.containerInfo)}function gg(t,e,n,i,r){return Bo(),Dp(r),e.flags|=256,Jn(t,e,n,i),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=on.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Kt(on,r&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tu(o,i,0,null),t=Bs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uh(n),e.memoizedState=ch,t):qp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=is(a,s):(s=Bs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ch,i}return s=t.child,t=s.sibling,i=is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qp(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,i){return i!==null&&Dp(i),Ho(e,t.child,null,n),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Fd(Error(Ae(422))),ql(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tu({mode:"visible",children:i.children},r,0,null),s=Bs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ho(e,t.child,null,o),e.child.memoizedState=uh(o),e.memoizedState=ch,s);if(!(e.mode&1))return ql(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ae(419)),i=Fd(s,i,void 0),ql(t,e,o,i)}if(a=(o&t.childLanes)!==0,ui||a){if(i=Ln,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Cr(t,r),Yi(i,t,r,-1))}return Qp(),i=Fd(Error(Ae(421))),ql(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_M.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Si=Qr(r.nextSibling),wi=e,nn=!0,Wi=null,t!==null&&(Ii[Li++]=Mr,Ii[Li++]=Sr,Ii[Li++]=Vs,Mr=t.id,Sr=t.overflow,Vs=e),e=qp(e,i.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ih(t.return,e,n)}function kd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jn(t,e,i.children,n),i=on.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Kt(on,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kd(e,!0,n,null,s);break;case"together":kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ae(153));if(e.child!==null){for(t=e.child,n=is(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=is(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oM(t,e,n){switch(e.tag){case 3:R_(e),Bo();break;case 5:i_(e);break;case 1:fi(e.type)&&$c(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Kt(Jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Kt(on,on.current&1),e.flags|=128,null):n&e.child.childLanes?P_(t,e,n):(Kt(on,on.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);Kt(on,on.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Kt(on,on.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return Rr(t,e,n)}var L_,dh,D_,N_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};D_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fs(or.current);var s=null;switch(n){case"input":r=Df(t,r),i=Df(t,i),s=[];break;case"select":r=ln({},r,{value:void 0}),i=ln({},i,{value:void 0}),s=[];break;case"textarea":r=Ff(t,r),i=Ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qc)}Of(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Zt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N_=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aM(t,e,n){var i=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(e),null;case 1:return fi(e.type)&&Yc(),Vn(e),null;case 3:return i=e.stateNode,Vo(),Jt(di),Jt(qn),Hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wi!==null&&(xh(Wi),Wi=null))),dh(t,e),Vn(e),null;case 5:Bp(e);var r=Fs(il.current);if(n=e.type,t!==null&&e.stateNode!=null)D_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ae(166));return Vn(e),null}if(t=Fs(or.current),Xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[nr]=e,i[tl]=s,t=(e.mode&1)!==0,n){case"dialog":Zt("cancel",i),Zt("close",i);break;case"iframe":case"object":case"embed":Zt("load",i);break;case"video":case"audio":for(r=0;r<Ia.length;r++)Zt(Ia[r],i);break;case"source":Zt("error",i);break;case"img":case"image":case"link":Zt("error",i),Zt("load",i);break;case"details":Zt("toggle",i);break;case"input":A0(i,s),Zt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Zt("invalid",i);break;case"textarea":C0(i,s),Zt("invalid",i)}Of(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",""+a]):Xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Zt("scroll",i)}switch(n){case"input":Fl(i),b0(i,s,!0);break;case"textarea":Fl(i),R0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[nr]=e,t[tl]=i,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=zf(n,i),n){case"dialog":Zt("cancel",t),Zt("close",t),r=i;break;case"iframe":case"object":case"embed":Zt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ia.length;r++)Zt(Ia[r],t);r=i;break;case"source":Zt("error",t),r=i;break;case"img":case"image":case"link":Zt("error",t),Zt("load",t),r=i;break;case"details":Zt("toggle",t),r=i;break;case"input":A0(t,i),r=Df(t,i),Zt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ln({},i,{value:void 0}),Zt("invalid",t);break;case"textarea":C0(t,i),r=Ff(t,i),Zt("invalid",t);break;default:r=i}Of(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Zt("scroll",t):l!=null&&vp(t,s,l,o))}switch(n){case"input":Fl(t),b0(t,i,!1);break;case"textarea":Fl(t),R0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Po(t,!!i.multiple,s,!1):i.defaultValue!=null&&Po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vn(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ae(166));if(n=Fs(il.current),Fs(or.current),Xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[nr]=e,(s=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[nr]=e,e.stateNode=i}return Vn(e),null;case 13:if(Jt(on),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Si!==null&&e.mode&1&&!(e.flags&128))Jv(),Bo(),e.flags|=98560,s=!1;else if(s=Xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ae(317));s[nr]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vn(e),s=!1}else Wi!==null&&(xh(Wi),Wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||on.current&1?wn===0&&(wn=3):Qp())),e.updateQueue!==null&&(e.flags|=4),Vn(e),null);case 4:return Vo(),dh(t,e),t===null&&Qa(e.stateNode.containerInfo),Vn(e),null;case 10:return Fp(e.type._context),Vn(e),null;case 17:return fi(e.type)&&Yc(),Vn(e),null;case 19:if(Jt(on),s=e.memoizedState,s===null)return Vn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)va(s,!1);else{if(wn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,va(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Kt(on,on.current&1|2),e.child}t=t.sibling}s.tail!==null&&fn()>Wo&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=tu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nn)return Vn(e),null}else 2*fn()-s.renderingStartTime>Wo&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fn(),e.sibling=null,n=on.current,Kt(on,i?n&1|2:n&1),e):(Vn(e),null);case 22:case 23:return Jp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Vn(e),e.subtreeFlags&6&&(e.flags|=8192)):Vn(e),null;case 24:return null;case 25:return null}throw Error(Ae(156,e.tag))}function lM(t,e){switch(Lp(e),e.tag){case 1:return fi(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),Jt(di),Jt(qn),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(Jt(on),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ae(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Jt(on),null;case 4:return Vo(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var Yl=!1,jn=!1,cM=typeof WeakSet=="function"?WeakSet:Set,We=null;function bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){un(t,e,i)}else n.current=null}function fh(t,e,n){try{n()}catch(i){un(t,e,i)}}var _g=!1;function uM(t,e){if($f=Wc,t=zv(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},Wc=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var E=M.memoizedProps,_=M.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Vi(e.type,E),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ae(163))}}catch(w){un(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return M=_g,_g=!1,M}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fh(e,n,s)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nr],delete e[tl],delete e[Qf],delete e[j2],delete e[q2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(i!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Un=null,Gi=!1;function Nr(t,e,n){for(n=n.child;n!==null;)k_(t,e,n),n=n.sibling}function k_(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:jn||bo(n,e);case 6:var i=Un,r=Gi;Un=null,Nr(t,e,n),Un=i,Gi=r,Un!==null&&(Gi?(t=Un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Un.removeChild(n.stateNode));break;case 18:Un!==null&&(Gi?(t=Un,n=n.stateNode,t.nodeType===8?Pd(t.parentNode,n):t.nodeType===1&&Pd(t,n),Ka(t)):Pd(Un,n.stateNode));break;case 4:i=Un,r=Gi,Un=n.stateNode.containerInfo,Gi=!0,Nr(t,e,n),Un=i,Gi=r;break;case 0:case 11:case 14:case 15:if(!jn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),r=r.next}while(r!==i)}Nr(t,e,n);break;case 1:if(!jn&&(bo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){un(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(jn=(i=jn)||n.memoizedState!==null,Nr(t,e,n),jn=i):Nr(t,e,n);break;default:Nr(t,e,n)}}function yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cM),e.forEach(function(i){var r=xM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ki(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Un=a.stateNode,Gi=!1;break e;case 3:Un=a.stateNode.containerInfo,Gi=!0;break e;case 4:Un=a.stateNode.containerInfo,Gi=!0;break e}a=a.return}if(Un===null)throw Error(Ae(160));k_(s,o,r),Un=null,Gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){un(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ki(e,t),Qi(t),i&4){try{za(3,t,t.return),wu(3,t)}catch(E){un(t,t.return,E)}try{za(5,t,t.return)}catch(E){un(t,t.return,E)}}break;case 1:ki(e,t),Qi(t),i&512&&n!==null&&bo(n,n.return);break;case 5:if(ki(e,t),Qi(t),i&512&&n!==null&&bo(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(E){un(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ov(r,s),zf(a,o);var c=zf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?dv(r,p):h==="dangerouslySetInnerHTML"?cv(r,p):h==="children"?ja(r,p):vp(r,h,p,c)}switch(a){case"input":Nf(r,s);break;case"textarea":av(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Po(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Po(r,!!s.multiple,s.defaultValue,!0):Po(r,!!s.multiple,s.multiple?[]:"",!1))}r[tl]=s}catch(E){un(t,t.return,E)}}break;case 6:if(ki(e,t),Qi(t),i&4){if(t.stateNode===null)throw Error(Ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){un(t,t.return,E)}}break;case 3:if(ki(e,t),Qi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(E){un(t,t.return,E)}break;case 4:ki(e,t),Qi(t);break;case 13:ki(e,t),Qi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kp=fn())),i&4&&yg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jn=(c=jn)||h,ki(e,t),jn=c):ki(e,t),Qi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(We=t,h=t.child;h!==null;){for(p=We=h;We!==null;){switch(m=We,g=m.child,m.tag){case 0:case 11:case 14:case 15:za(4,m,m.return);break;case 1:bo(m,m.return);var M=m.stateNode;if(typeof M.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(E){un(i,n,E)}}break;case 5:bo(m,m.return);break;case 22:if(m.memoizedState!==null){Sg(p);continue}}g!==null?(g.return=m,We=g):Sg(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uv("display",o))}catch(E){un(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){un(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ki(e,t),Qi(t),i&4&&yg(t);break;case 21:break;default:ki(e,t),Qi(t)}}function Qi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(Ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=xg(t);mh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xg(t);ph(t,a,o);break;default:throw Error(Ae(161))}}catch(l){un(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dM(t,e,n){We=t,z_(t)}function z_(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jn;a=Yl;var c=jn;if(Yl=o,(jn=l)&&!c)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?wg(r):l!==null?(l.return=o,We=l):wg(r);for(;s!==null;)We=s,z_(s),s=s.sibling;We=r,Yl=a,jn=c}Mg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):Mg(t)}}function Mg(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jn||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ka(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ae(163))}jn||e.flags&512&&hh(e)}catch(m){un(e,e.return,m)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Sg(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function wg(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){un(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){un(e,r,l)}}var s=e.return;try{hh(e)}catch(l){un(e,s,l)}break;case 5:var o=e.return;try{hh(e)}catch(l){un(e,o,l)}}}catch(l){un(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var fM=Math.ceil,ru=Pr.ReactCurrentDispatcher,Yp=Pr.ReactCurrentOwner,Ni=Pr.ReactCurrentBatchConfig,Pt=0,Ln=null,mn=null,On=0,yi=0,Co=ds(0),wn=0,al=null,Ws=0,Eu=0,$p=0,Ba=null,ci=null,Kp=0,Wo=1/0,xr=null,su=!1,gh=null,ts=null,$l=!1,$r=null,ou=0,Ha=0,vh=null,Ic=-1,Lc=0;function Qn(){return Pt&6?fn():Ic!==-1?Ic:Ic=fn()}function ns(t){return t.mode&1?Pt&2&&On!==0?On&-On:$2.transition!==null?(Lc===0&&(Lc=wv()),Lc):(t=Vt,t!==0||(t=window.event,t=t===void 0?16:Pv(t.type)),t):1}function Yi(t,e,n,i){if(50<Ha)throw Ha=0,vh=null,Error(Ae(185));pl(t,n,i),(!(Pt&2)||t!==Ln)&&(t===Ln&&(!(Pt&2)&&(Eu|=n),wn===4&&Xr(t,On)),hi(t,i),n===1&&Pt===0&&!(e.mode&1)&&(Wo=fn()+500,yu&&fs()))}function hi(t,e){var n=t.callbackNode;$y(t,e);var i=Gc(t,t===Ln?On:0);if(i===0)n!==null&&L0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&L0(n),e===1)t.tag===0?Y2(Eg.bind(null,t)):$v(Eg.bind(null,t)),W2(function(){!(Pt&6)&&fs()}),n=null;else{switch(Ev(i)){case 1:n=Sp;break;case 4:n=Mv;break;case 16:n=Vc;break;case 536870912:n=Sv;break;default:n=Vc}n=q_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(Ic=-1,Lc=0,Pt&6)throw Error(Ae(327));var n=t.callbackNode;if(Uo()&&t.callbackNode!==n)return null;var i=Gc(t,t===Ln?On:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=au(t,i);else{e=i;var r=Pt;Pt|=2;var s=V_();(Ln!==t||On!==e)&&(xr=null,Wo=fn()+500,zs(t,e));do try{mM();break}catch(a){H_(t,a)}while(!0);Up(),ru.current=s,Pt=r,mn!==null?e=0:(Ln=null,On=0,e=wn)}if(e!==0){if(e===2&&(r=Wf(t),r!==0&&(i=r,e=_h(t,r))),e===1)throw n=al,zs(t,0),Xr(t,i),hi(t,fn()),n;if(e===6)Xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hM(r)&&(e=au(t,i),e===2&&(s=Wf(t),s!==0&&(i=s,e=_h(t,s))),e===1))throw n=al,zs(t,0),Xr(t,i),hi(t,fn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ae(345));case 2:Rs(t,ci,xr);break;case 3:if(Xr(t,i),(i&130023424)===i&&(e=Kp+500-fn(),10<e)){if(Gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jf(Rs.bind(null,t,ci,xr),e);break}Rs(t,ci,xr);break;case 4:if(Xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=fn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fM(i/1960))-i,10<i){t.timeoutHandle=Jf(Rs.bind(null,t,ci,xr),i);break}Rs(t,ci,xr);break;case 5:Rs(t,ci,xr);break;default:throw Error(Ae(329))}}}return hi(t,fn()),t.callbackNode===n?B_.bind(null,t):null}function _h(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(zs(t,e).flags|=256),t=au(t,e),t!==2&&(e=ci,ci=n,e!==null&&xh(e)),t}function xh(t){ci===null?ci=t:ci.push.apply(ci,t)}function hM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ki(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~$p,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qi(e),i=1<<n;t[n]=-1,e&=~i}}function Eg(t){if(Pt&6)throw Error(Ae(327));Uo();var e=Gc(t,0);if(!(e&1))return hi(t,fn()),null;var n=au(t,e);if(t.tag!==0&&n===2){var i=Wf(t);i!==0&&(e=i,n=_h(t,i))}if(n===1)throw n=al,zs(t,0),Xr(t,e),hi(t,fn()),n;if(n===6)throw Error(Ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,ci,xr),hi(t,fn()),null}function Zp(t,e){var n=Pt;Pt|=1;try{return t(e)}finally{Pt=n,Pt===0&&(Wo=fn()+500,yu&&fs())}}function Xs(t){$r!==null&&$r.tag===0&&!(Pt&6)&&Uo();var e=Pt;Pt|=1;var n=Ni.transition,i=Vt;try{if(Ni.transition=null,Vt=1,t)return t()}finally{Vt=i,Ni.transition=n,Pt=e,!(Pt&6)&&fs()}}function Jp(){yi=Co.current,Jt(Co)}function zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G2(n)),mn!==null)for(n=mn.return;n!==null;){var i=n;switch(Lp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yc();break;case 3:Vo(),Jt(di),Jt(qn),Hp();break;case 5:Bp(i);break;case 4:Vo();break;case 13:Jt(on);break;case 19:Jt(on);break;case 10:Fp(i.type._context);break;case 22:case 23:Jp()}n=n.return}if(Ln=t,mn=t=is(t.current,null),On=yi=e,wn=0,al=null,$p=Eu=Ws=0,ci=Ba=null,Us!==null){for(e=0;e<Us.length;e++)if(n=Us[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Us=null}return t}function H_(t,e){do{var n=mn;try{if(Up(),Cc.current=iu,nu){for(var i=an.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nu=!1}if(Gs=0,In=Sn=an=null,Oa=!1,rl=0,Yp.current=null,n===null||n.return===null){wn=1,al=e,mn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=On,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=dg(o);if(g!==null){g.flags&=-257,fg(g,o,a,s,e),g.mode&1&&ug(s,c,e),e=g,l=c;var M=e.updateQueue;if(M===null){var E=new Set;E.add(l),e.updateQueue=E}else M.add(l);break e}else{if(!(e&1)){ug(s,c,e),Qp();break e}l=Error(Ae(426))}}else if(nn&&a.mode&1){var _=dg(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fg(_,o,a,s,e),Dp(Go(l,a));break e}}s=l=Go(l,a),wn!==4&&(wn=2),Ba===null?Ba=[s]:Ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=E_(s,l,e);rg(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ts===null||!ts.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=T_(s,a,e);rg(s,w);break e}}s=s.return}while(s!==null)}W_(n)}catch(R){e=R,mn===n&&n!==null&&(mn=n=n.return);continue}break}while(!0)}function V_(){var t=ru.current;return ru.current=iu,t===null?iu:t}function Qp(){(wn===0||wn===3||wn===2)&&(wn=4),Ln===null||!(Ws&268435455)&&!(Eu&268435455)||Xr(Ln,On)}function au(t,e){var n=Pt;Pt|=2;var i=V_();(Ln!==t||On!==e)&&(xr=null,zs(t,e));do try{pM();break}catch(r){H_(t,r)}while(!0);if(Up(),Pt=n,ru.current=i,mn!==null)throw Error(Ae(261));return Ln=null,On=0,wn}function pM(){for(;mn!==null;)G_(mn)}function mM(){for(;mn!==null&&!By();)G_(mn)}function G_(t){var e=j_(t.alternate,t,yi);t.memoizedProps=t.pendingProps,e===null?W_(t):mn=e,Yp.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lM(n,e),n!==null){n.flags&=32767,mn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wn=6,mn=null;return}}else if(n=aM(n,e,yi),n!==null){mn=n;return}if(e=e.sibling,e!==null){mn=e;return}mn=e=t}while(e!==null);wn===0&&(wn=5)}function Rs(t,e,n){var i=Vt,r=Ni.transition;try{Ni.transition=null,Vt=1,gM(t,e,n,i)}finally{Ni.transition=r,Vt=i}return null}function gM(t,e,n,i){do Uo();while($r!==null);if(Pt&6)throw Error(Ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ky(t,s),t===Ln&&(mn=Ln=null,On=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,q_(Vc,function(){return Uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ni.transition,Ni.transition=null;var o=Vt;Vt=1;var a=Pt;Pt|=4,Yp.current=null,uM(t,n),O_(n,t),F2(Kf),Wc=!!$f,Kf=$f=null,t.current=n,dM(n),Hy(),Pt=a,Vt=o,Ni.transition=s}else t.current=n;if($l&&($l=!1,$r=t,ou=r),s=t.pendingLanes,s===0&&(ts=null),Wy(n.stateNode),hi(t,fn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(su)throw su=!1,t=gh,gh=null,t;return ou&1&&t.tag!==0&&Uo(),s=t.pendingLanes,s&1?t===vh?Ha++:(Ha=0,vh=t):Ha=0,fs(),null}function Uo(){if($r!==null){var t=Ev(ou),e=Ni.transition,n=Vt;try{if(Ni.transition=null,Vt=16>t?16:t,$r===null)var i=!1;else{if(t=$r,$r=null,ou=0,Pt&6)throw Error(Ae(331));var r=Pt;for(Pt|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(We=c;We!==null;){var h=We;switch(h.tag){case 0:case 11:case 15:za(8,h,s)}var p=h.child;if(p!==null)p.return=h,We=p;else for(;We!==null;){h=We;var m=h.sibling,g=h.return;if(U_(h),h===c){We=null;break}if(m!==null){m.return=g,We=m;break}We=g}}}var M=s.alternate;if(M!==null){var E=M.child;if(E!==null){M.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,We=u;break e}We=s.return}}var v=t.current;for(We=v;We!==null;){o=We;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,We=x;else e:for(o=v;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(R){un(a,a.return,R)}if(a===o){We=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,We=w;break e}We=a.return}}if(Pt=r,fs(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(mu,t)}catch{}i=!0}return i}finally{Vt=n,Ni.transition=e}}return!1}function Tg(t,e,n){e=Go(n,e),e=E_(t,e,1),t=es(t,e,1),e=Qn(),t!==null&&(pl(t,1,e),hi(t,e))}function un(t,e,n){if(t.tag===3)Tg(t,t,n);else for(;e!==null;){if(e.tag===3){Tg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ts===null||!ts.has(i))){t=Go(n,t),t=T_(e,t,1),e=es(e,t,1),t=Qn(),e!==null&&(pl(e,1,t),hi(e,t));break}}e=e.return}}function vM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qn(),t.pingedLanes|=t.suspendedLanes&n,Ln===t&&(On&n)===n&&(wn===4||wn===3&&(On&130023424)===On&&500>fn()-Kp?zs(t,0):$p|=n),hi(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=Qn();t=Cr(t,e),t!==null&&(pl(t,e,n),hi(t,n))}function _M(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function xM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ae(314))}i!==null&&i.delete(e),X_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||di.current)ui=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ui=!1,oM(t,e,n);ui=!!(t.flags&131072)}else ui=!1,nn&&e.flags&1048576&&Kv(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pc(t,e),t=e.pendingProps;var r=zo(e,qn.current);No(e,n),r=Gp(null,e,i,t,r,n);var s=Wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fi(i)?(s=!0,$c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Op(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,sh(e,i,t,n),e=lh(null,e,i,!0,s,n)):(e.tag=0,nn&&s&&Ip(e),Jn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=MM(i),t=Vi(i,t),r){case 0:e=ah(null,e,i,t,n);break e;case 1:e=mg(null,e,i,t,n);break e;case 11:e=hg(null,e,i,t,n);break e;case 14:e=pg(null,e,i,Vi(i.type,t),n);break e}throw Error(Ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),mg(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(Ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,n_(t,e),eu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Go(Error(Ae(423)),e),e=gg(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(Ae(424)),e),e=gg(t,e,i,n,r);break e}else for(Si=Qr(e.stateNode.containerInfo.firstChild),wi=e,nn=!0,Wi=null,n=e_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bo(),i===r){e=Rr(t,e,n);break e}Jn(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&nh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zf(i,r)?o=null:s!==null&&Zf(i,s)&&(e.flags|=32),C_(t,e),Jn(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return P_(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ho(e,null,i,n):Jn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),hg(t,e,i,r,n);case 7:return Jn(t,e,e.pendingProps,n),e.child;case 8:return Jn(t,e,e.pendingProps.children,n),e.child;case 12:return Jn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Kt(Jc,i._currentValue),i._currentValue=o,s!==null)if(Ki(s.value,o)){if(s.children===r.children&&!di.current){e=Rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Er(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ih(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,No(e,n),r=Ui(r),i=i(r),e.flags|=1,Jn(t,e,i,n),e.child;case 14:return i=e.type,r=Vi(i,e.pendingProps),r=Vi(i.type,r),pg(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),Pc(t,e),e.tag=1,fi(i)?(t=!0,$c(e)):t=!1,No(e,n),w_(e,i,r),sh(e,i,r,n),lh(null,e,i,!0,t,n);case 19:return I_(t,e,n);case 22:return b_(t,e,n)}throw Error(Ae(156,e.tag))};function q_(t,e){return yv(t,e)}function yM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(t,e,n,i){return new yM(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MM(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===yp)return 14}return 2}function is(t,e){var n=t.alternate;return n===null?(n=Di(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _o:return Bs(n.children,r,s,e);case _p:o=8,r|=8;break;case Rf:return t=Di(12,n,e,r|2),t.elementType=Rf,t.lanes=s,t;case Pf:return t=Di(13,n,e,r),t.elementType=Pf,t.lanes=s,t;case If:return t=Di(19,n,e,r),t.elementType=If,t.lanes=s,t;case iv:return Tu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tv:o=10;break e;case nv:o=9;break e;case xp:o=11;break e;case yp:o=14;break e;case Vr:o=16,i=null;break e}throw Error(Ae(130,t==null?t:typeof t,""))}return e=Di(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Bs(t,e,n,i){return t=Di(7,t,i,e),t.lanes=n,t}function Tu(t,e,n,i){return t=Di(22,t,i,e),t.elementType=iv,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=Di(6,t,null,e),t.lanes=n,t}function zd(t,e,n){return e=Di(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,s,o,a,l){return t=new SM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Di(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(s),t}function wM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y_(t){if(!t)return as;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error(Ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ae(171))}if(t.tag===1){var n=t.type;if(fi(n))return Yv(t,n,e)}return e}function $_(t,e,n,i,r,s,o,a,l){return t=tm(n,i,!0,t,r,s,o,a,l),t.context=Y_(null),n=t.current,i=Qn(),r=ns(n),s=Er(i,r),s.callback=e??null,es(n,s,r),t.current.lanes=r,pl(t,r,i),hi(t,i),t}function Au(t,e,n,i){var r=e.current,s=Qn(),o=ns(r);return n=Y_(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=es(r,e,o),t!==null&&(Yi(t,r,o,s),bc(t,r,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){Ag(t,e),(t=t.alternate)&&Ag(t,e)}function EM(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}bu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ae(409));Au(t,e,null,null)};bu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xs(function(){Au(null,t,null,null)}),e[br]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&Rv(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function TM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lu(o);s.call(c)}}var o=$_(e,i,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[br]=o.current,Qa(t.nodeType===8?t.parentNode:t),Xs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lu(l);a.call(c)}}var l=tm(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=l,t[br]=l.current,Qa(t.nodeType===8?t.parentNode:t),Xs(function(){Au(e,l,n,i)}),l}function Ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lu(o);a.call(l)}}Au(e,o,t,r)}else o=TM(n,e,t,r,i);return lu(o)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(wp(e,n|1),hi(e,fn()),!(Pt&6)&&(Wo=fn()+500,fs()))}break;case 13:Xs(function(){var i=Cr(t,1);if(i!==null){var r=Qn();Yi(i,t,1,r)}}),nm(t,1)}};Ep=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Qn();Yi(e,t,134217728,n)}nm(t,134217728)}};Av=function(t){if(t.tag===13){var e=ns(t),n=Cr(t,e);if(n!==null){var i=Qn();Yi(n,t,e,i)}nm(t,e)}};bv=function(){return Vt};Cv=function(t,e){var n=Vt;try{return Vt=t,e()}finally{Vt=n}};Hf=function(t,e,n){switch(e){case"input":if(Nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(Ae(90));sv(i),Nf(i,r)}}}break;case"textarea":av(t,n);break;case"select":e=n.value,e!=null&&Po(t,!!n.multiple,e,!1)}};pv=Zp;mv=Xs;var AM={usingClientEntryPoint:!1,Events:[gl,So,xu,fv,hv,Zp]},_a={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bM={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_v(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{mu=Kl.inject(bM),sr=Kl}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AM;Ti.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(Ae(200));return wM(t,e,null,n)};Ti.createRoot=function(t,e){if(!rm(t))throw Error(Ae(299));var n=!1,i="",r=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[br]=e.current,Qa(t.nodeType===8?t.parentNode:t),new im(e)};Ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ae(188)):(t=Object.keys(t).join(","),Error(Ae(268,t)));return t=_v(e),t=t===null?null:t.stateNode,t};Ti.flushSync=function(t){return Xs(t)};Ti.hydrate=function(t,e,n){if(!Cu(e))throw Error(Ae(200));return Ru(null,t,e,!0,n)};Ti.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(Ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,s,o),t[br]=e.current,Qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Ti.render=function(t,e,n){if(!Cu(e))throw Error(Ae(200));return Ru(null,t,e,!1,n)};Ti.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(Ae(40));return t._reactRootContainer?(Xs(function(){Ru(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};Ti.unstable_batchedUpdates=Zp;Ti.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cu(n))throw Error(Ae(200));if(t==null||t._reactInternals===void 0)throw Error(Ae(38));return Ru(t,e,n,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Z1.exports=Ti;var CM=Z1.exports,J_,Cg=CM;J_=Cg.createRoot,Cg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="180",RM=0,Rg=1,PM=2,Q_=1,ex=2,_r=3,ls=0,pi=1,$t=2,rs=0,Fo=1,Pg=2,Ig=3,Lg=4,IM=5,Ls=100,LM=101,DM=102,NM=103,UM=104,FM=200,kM=201,OM=202,zM=203,yh=204,Mh=205,BM=206,HM=207,VM=208,GM=209,WM=210,XM=211,jM=212,qM=213,YM=214,Sh=0,wh=1,Eh=2,Xo=3,Th=4,Ah=5,bh=6,Ch=7,tx=0,$M=1,KM=2,ss=0,ZM=1,JM=2,QM=3,nx=4,eS=5,tS=6,nS=7,ix=300,jo=301,qo=302,Rh=303,Ph=304,Pu=306,jr=1e3,ks=1001,Ih=1002,$i=1003,iS=1004,Zl=1005,ir=1006,Bd=1007,Os=1008,lr=1009,rx=1010,sx=1011,ll=1012,om=1013,js=1014,wr=1015,_l=1016,am=1017,lm=1018,cl=1020,ox=35902,ax=35899,lx=1021,cx=1022,ji=1023,ul=1026,dl=1027,ux=1028,cm=1029,dx=1030,um=1031,dm=1033,Nc=33776,Uc=33777,Fc=33778,kc=33779,Lh=35840,Dh=35841,Nh=35842,Uh=35843,Fh=36196,kh=37492,Oh=37496,zh=37808,Bh=37809,Hh=37810,Vh=37811,Gh=37812,Wh=37813,Xh=37814,jh=37815,qh=37816,Yh=37817,$h=37818,Kh=37819,Zh=37820,Jh=37821,Qh=36492,ep=36494,tp=36495,np=36283,ip=36284,rp=36285,sp=36286,rS=3200,sS=3201,fx=0,oS=1,qr="",kn="srgb",Yo="srgb-linear",cu="linear",Wt="srgb",to=7680,Dg=519,aS=512,lS=513,cS=514,hx=515,uS=516,dS=517,fS=518,hS=519,Ng=35044,Ug="300 es",rr=2e3,uu=2001;class Qo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,op=180/Math.PI;function xl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[t&255]+Gn[t>>8&255]+Gn[t>>16&255]+Gn[t>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function yt(t,e,n){return Math.max(e,Math.min(n,t))}function pS(t,e){return(t%e+e)%e}function Vd(t,e,n){return(1-n)*t+n*e}function xa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],g=s[o+1],M=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=M,e[n+3]=E;return}if(p!==E||l!==m||c!==g||h!==M){let _=1-a;const u=l*m+c*g+h*M+p*E,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,u*v);_=Math.sin(_*P)/R,a=Math.sin(a*P)/R}const w=a*v;if(l=l*_+m*w,c=c*_+g*w,h=h*_+M*w,p=p*_+E*w,_===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=R,c*=R,h*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],m=s[o+1],g=s[o+2],M=s[o+3];return e[n]=a*M+h*p+l*g-c*m,e[n+1]=l*M+h*m+c*p-a*g,e[n+2]=c*M+h*g+a*m-l*p,e[n+3]=h*M-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),m=l(i/2),g=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"YXZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"ZXY":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"ZYX":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"YZX":this._x=m*h*p+c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p-m*g*M;break;case"XZY":this._x=m*h*p-c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p+m*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new z,Fg=new yl;class vt{constructor(e,n,i,r,s,o,a,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],m=i[2],g=i[5],M=i[8],E=r[0],_=r[3],u=r[6],v=r[1],x=r[4],w=r[7],R=r[2],P=r[5],I=r[8];return s[0]=o*E+a*v+l*R,s[3]=o*_+a*x+l*P,s[6]=o*u+a*w+l*I,s[1]=c*E+h*v+p*R,s[4]=c*_+h*x+p*P,s[7]=c*u+h*w+p*I,s[2]=m*E+g*v+M*R,s[5]=m*_+g*x+M*P,s[8]=m*u+g*w+M*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,m=a*l-h*s,g=c*s-o*l,M=n*p+i*m+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=m*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=g*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wd.makeScale(e,n)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new vt;function px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mS(){const t=du("canvas");return t.style.display="block",t}const kg={};function fl(t){t in kg||(kg[t]=!0,console.warn(t))}function gS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Og=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const t={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Wt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Wt&&(r.r=ko(r.r),r.g=ko(r.g),r.b=ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qr?cu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yo]:{primaries:e,whitePoint:i,transfer:cu,toXYZ:Og,fromXYZ:zg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:Og,fromXYZ:zg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Lt=vS();function Tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let no;class _S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=du("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Tr(n[i]/255)*255):n[i]=Tr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xS=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xd(r[o].image)):s.push(Xd(r[o]))}else s=Xd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;const jd=new z;class ei extends Qo{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,i=ks,r=ks,s=ir,o=Os,a=ji,l=lr,c=ei.DEFAULT_ANISOTROPY,h=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=xl(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case ks:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case ks:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=ix;ei.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],g=l[5],M=l[9],E=l[2],_=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-E)<.01&&Math.abs(M-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+E)<.1&&Math.abs(M+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(g+1)/2,R=(u+1)/2,P=(h+m)/4,I=(p+E)/4,N=(M+_)/4;return x>w&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=I/i):w>R?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=P/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=I/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-M)*(_-M)+(p-E)*(p-E)+(m-h)*(m-h));return Math.abs(v)<.001&&(v=1),this.x=(_-M)/v,this.y=(p-E)/v,this.z=(m-h)/v,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Qo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ir,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ei(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ir,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends MS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mx extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Oi):Oi.fromBufferAttribute(s,o),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Ql.subVectors(this.max,ya),io.subVectors(e.a,ya),ro.subVectors(e.b,ya),so.subVectors(e.c,ya),Ur.subVectors(ro,io),Fr.subVectors(so,ro),Ms.subVectors(io,so);let n=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-Ms.z,Ms.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,Ms.z,0,-Ms.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-Ms.y,Ms.x,0];return!qd(n,io,ro,so,Ql)||(n=[1,0,0,0,1,0,0,0,1],!qd(n,io,ro,so,Ql))?!1:(ec.crossVectors(Ur,Fr),n=[ec.x,ec.y,ec.z],qd(n,io,ro,so,Ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new z,new z,new z,new z,new z,new z,new z,new z],Oi=new z,Jl=new Ml,io=new z,ro=new z,so=new z,Ur=new z,Fr=new z,Ms=new z,ya=new z,Ql=new z,ec=new z,Ss=new z;function qd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ss.fromArray(t,s);const a=r.x*Math.abs(Ss.x)+r.y*Math.abs(Ss.y)+r.z*Math.abs(Ss.z),l=e.dot(Ss),c=n.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wS=new Ml,Ma=new z,Yd=new z;class Iu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Yd)),this.expandByPoint(Ma.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pr=new z,$d=new z,tc=new z,kr=new z,Kd=new z,nc=new z,Zd=new z;class hm{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,n),pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$d.copy(e).add(n).multiplyScalar(.5),tc.copy(n).sub(e).normalize(),kr.copy(this.origin).sub($d);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tc),a=kr.dot(this.direction),l=-kr.dot(tc),c=kr.lengthSq(),h=Math.abs(1-o*o);let p,m,g,M;if(h>0)if(p=o*l-a,m=o*a-l,M=s*h,p>=0)if(m>=-M)if(m<=M){const E=1/h;p*=E,m*=E,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-M?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c):m<=M?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy($d).addScaledVector(tc,m),g}intersectSphere(e,n){pr.subVectors(e.center,this.origin);const i=pr.dot(this.direction),r=pr.dot(pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,n,i,r,s){Kd.subVectors(n,e),nc.subVectors(i,e),Zd.crossVectors(Kd,nc);let o=this.direction.dot(Zd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const l=a*this.direction.dot(nc.crossVectors(kr,nc));if(l<0)return null;const c=a*this.direction.dot(Kd.cross(kr));if(c<0||l+c>o)return null;const h=-a*kr.dot(Zd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_)}set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=m,u[3]=g,u[7]=M,u[11]=E,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,M=a*h,E=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+M*c,n[5]=m-E*c,n[9]=-a*l,n[2]=E-m*c,n[6]=M+g*c,n[10]=o*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,M=c*h,E=c*p;n[0]=m+E*a,n[4]=M*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-M,n[6]=E+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,M=c*h,E=c*p;n[0]=m-E*a,n[4]=-o*p,n[8]=M+g*a,n[1]=g+M*a,n[5]=o*h,n[9]=E-m*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*h,g=o*p,M=a*h,E=a*p;n[0]=l*h,n[4]=M*c-g,n[8]=m*c+E,n[1]=l*p,n[5]=E*c+m,n[9]=g*c-M,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*c,M=a*l,E=a*c;n[0]=l*h,n[4]=E-m*p,n[8]=M*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*p+M,n[10]=m-E*p}else if(e.order==="XZY"){const m=o*l,g=o*c,M=a*l,E=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=m*p+E,n[5]=o*h,n[9]=g*p-M,n[2]=M*p-g,n[6]=a*h,n[10]=E*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,n,i){const r=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Or.crossVectors(i,_i),Or.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Or.crossVectors(i,_i)),Or.normalize(),ic.crossVectors(_i,Or),r[0]=Or.x,r[4]=ic.x,r[8]=_i.x,r[1]=Or.y,r[5]=ic.y,r[9]=_i.y,r[2]=Or.z,r[6]=ic.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],m=i[9],g=i[13],M=i[2],E=i[6],_=i[10],u=i[14],v=i[3],x=i[7],w=i[11],R=i[15],P=r[0],I=r[4],N=r[8],T=r[12],S=r[1],k=r[5],W=r[9],te=r[13],ue=r[2],fe=r[6],V=r[10],K=r[14],O=r[3],J=r[7],de=r[11],Me=r[15];return s[0]=o*P+a*S+l*ue+c*O,s[4]=o*I+a*k+l*fe+c*J,s[8]=o*N+a*W+l*V+c*de,s[12]=o*T+a*te+l*K+c*Me,s[1]=h*P+p*S+m*ue+g*O,s[5]=h*I+p*k+m*fe+g*J,s[9]=h*N+p*W+m*V+g*de,s[13]=h*T+p*te+m*K+g*Me,s[2]=M*P+E*S+_*ue+u*O,s[6]=M*I+E*k+_*fe+u*J,s[10]=M*N+E*W+_*V+u*de,s[14]=M*T+E*te+_*K+u*Me,s[3]=v*P+x*S+w*ue+R*O,s[7]=v*I+x*k+w*fe+R*J,s[11]=v*N+x*W+w*V+R*de,s[15]=v*T+x*te+w*K+R*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],g=e[14],M=e[3],E=e[7],_=e[11],u=e[15];return M*(+s*l*p-r*c*p-s*a*m+i*c*m+r*a*g-i*l*g)+E*(+n*l*g-n*c*m+s*o*m-r*o*g+r*c*h-s*l*h)+_*(+n*c*p-n*a*g-s*o*p+i*o*g+s*a*h-i*c*h)+u*(-r*a*h-n*l*p+n*a*m+r*o*p-i*o*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],g=e[11],M=e[12],E=e[13],_=e[14],u=e[15],v=p*_*c-E*m*c+E*l*g-a*_*g-p*l*u+a*m*u,x=M*m*c-h*_*c-M*l*g+o*_*g+h*l*u-o*m*u,w=h*E*c-M*p*c+M*a*g-o*E*g-h*a*u+o*p*u,R=M*p*l-h*E*l-M*a*m+o*E*m+h*a*_-o*p*_,P=n*v+i*x+r*w+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=v*I,e[1]=(E*m*s-p*_*s-E*r*g+i*_*g+p*r*u-i*m*u)*I,e[2]=(a*_*s-E*l*s+E*r*c-i*_*c-a*r*u+i*l*u)*I,e[3]=(p*l*s-a*m*s-p*r*c+i*m*c+a*r*g-i*l*g)*I,e[4]=x*I,e[5]=(h*_*s-M*m*s+M*r*g-n*_*g-h*r*u+n*m*u)*I,e[6]=(M*l*s-o*_*s-M*r*c+n*_*c+o*r*u-n*l*u)*I,e[7]=(o*m*s-h*l*s+h*r*c-n*m*c-o*r*g+n*l*g)*I,e[8]=w*I,e[9]=(M*p*s-h*E*s-M*i*g+n*E*g+h*i*u-n*p*u)*I,e[10]=(o*E*s-M*a*s+M*i*c-n*E*c-o*i*u+n*a*u)*I,e[11]=(h*a*s-o*p*s-h*i*c+n*p*c+o*i*g-n*a*g)*I,e[12]=R*I,e[13]=(h*E*r-M*p*r+M*i*m-n*E*m-h*i*_+n*p*_)*I,e[14]=(M*a*r-o*E*r-M*i*l+n*E*l+o*i*_-n*a*_)*I,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*m+n*a*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,m=s*c,g=s*h,M=s*p,E=o*h,_=o*p,u=a*p,v=l*c,x=l*h,w=l*p,R=i.x,P=i.y,I=i.z;return r[0]=(1-(E+u))*R,r[1]=(g+w)*R,r[2]=(M-x)*R,r[3]=0,r[4]=(g-w)*P,r[5]=(1-(m+u))*P,r[6]=(_+v)*P,r[7]=0,r[8]=(M+x)*I,r[9]=(_-v)*I,r[10]=(1-(m+E))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zi.copy(this);const c=1/s,h=1/o,p=1/a;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=p,zi.elements[9]*=p,zi.elements[10]*=p,n.setFromRotationMatrix(zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=rr,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let M,E;if(l)M=s/(o-s),E=o*s/(o-s);else if(a===rr)M=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===uu)M=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=rr,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let M,E;if(l)M=1/(o-s),E=o/(o-s);else if(a===rr)M=-2/(o-s),E=-(o+s)/(o-s);else if(a===uu)M=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oo=new z,zi=new Qt,ES=new z(0,0,0),TS=new z(1,1,1),Or=new z,ic=new z,_i=new z,Bg=new Qt,Hg=new yl;class cr{constructor(e=0,n=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AS=0;const Vg=new z,ao=new yl,mr=new Qt,rc=new z,Sa=new z,bS=new z,CS=new yl,Gg=new z(1,0,0),Wg=new z(0,1,0),Xg=new z(0,0,1),jg={type:"added"},RS={type:"removed"},lo={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Dn extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new z,n=new cr,i=new yl,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new vt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,n){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rc.copy(e):rc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Sa,rc,this.up):mr.lookAt(rc,Sa,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(mr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jg),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RS),Jd.child=e,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jg),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new z(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new z,gr=new z,Qd=new z,vr=new z,co=new z,uo=new z,qg=new z,ef=new z,tf=new z,nf=new z,rf=new Xt,sf=new Xt,of=new Xt;class Xi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bi.subVectors(e,n),r.cross(Bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bi.subVectors(r,n),gr.subVectors(i,n),Qd.subVectors(e,n);const o=Bi.dot(Bi),a=Bi.dot(gr),l=Bi.dot(Qd),c=gr.dot(gr),h=gr.dot(Qd),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(c*l-a*h)*m,M=(o*h-a*l)*m;return s.set(1-g-M,M,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vr.x),l.addScaledVector(o,vr.y),l.addScaledVector(a,vr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,n,i,r){return Bi.subVectors(i,n),gr.subVectors(e,n),Bi.cross(gr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Bi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,i),uo.subVectors(s,i),ef.subVectors(e,i);const l=co.dot(ef),c=uo.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const h=co.dot(tf),p=uo.dot(tf);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(co,o);nf.subVectors(e,s);const g=co.dot(nf),M=uo.dot(nf);if(M>=0&&g<=M)return n.copy(s);const E=g*c-l*M;if(E<=0&&c>=0&&M<=0)return a=c/(c-M),n.copy(i).addScaledVector(uo,a);const _=h*M-g*p;if(_<=0&&p-h>=0&&g-M>=0)return qg.subVectors(s,r),a=(p-h)/(p-h+(g-M)),n.copy(r).addScaledVector(qg,a);const u=1/(_+E+m);return o=E*u,a=m*u,n.copy(i).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class wt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=pS(e,1),n=yt(n,0,1),i=yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Lt.workingToColorSpace(Wn.copy(this),e),Math.round(yt(Wn.r*255,0,255))*65536+Math.round(yt(Wn.g*255,0,255))*256+Math.round(yt(Wn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(Wn.copy(this),n);const i=Wn.r,r=Wn.g,s=Wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=kn){Lt.workingToColorSpace(Wn.copy(this),e);const n=Wn.r,i=Wn.g,r=Wn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(sc);const i=Vd(zr.h,sc.h,n),r=Vd(zr.s,sc.s,n),s=Vd(zr.l,sc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new wt;wt.NAMES=gx;let PS=0;class ea extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=Fo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Mh&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class At extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new z,oc=new Qe;let IS=0;class ar{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ng,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oc.fromBufferAttribute(this,n),oc.applyMatrix3(e),this.setXY(n,oc.x,oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),r=ai(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ai(n,this.array),i=ai(i,this.array),r=ai(r,this.array),s=ai(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}}class vx extends ar{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _x extends ar{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bt extends ar{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const Pi=new Qt,lf=new Dn,fo=new z,xi=new Ml,wa=new Ml,Pn=new z;class gn extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?_x:vx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Iu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(xi.min,wa.min),xi.expandByPoint(Pn),Pn.addVectors(xi.max,wa.max),xi.expandByPoint(Pn)):(xi.expandByPoint(wa.min),xi.expandByPoint(wa.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pn.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),Pn.add(fo)),r=Math.max(r,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ar(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new z,l[N]=new z;const c=new z,h=new z,p=new z,m=new Qe,g=new Qe,M=new Qe,E=new z,_=new z;function u(N,T,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,T),M.fromBufferAttribute(s,S),h.sub(c),p.sub(c),g.sub(m),M.sub(m);const k=1/(g.x*M.y-M.x*g.y);isFinite(k)&&(E.copy(h).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(k),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(k),a[N].add(E),a[T].add(E),a[S].add(E),l[N].add(_),l[T].add(_),l[S].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,T=v.length;N<T;++N){const S=v[N],k=S.start,W=S.count;for(let te=k,ue=k+W;te<ue;te+=3)u(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const x=new z,w=new z,R=new z,P=new z;function I(N){R.fromBufferAttribute(r,N),P.copy(R);const T=a[N];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),w.crossVectors(P,T);const k=w.dot(l[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,k)}for(let N=0,T=v.length;N<T;++N){const S=v[N],k=S.start,W=S.count;for(let te=k,ue=k+W;te<ue;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ar(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,p=new z;if(e)for(let m=0,g=e.count;m<g;m+=3){const M=e.getX(m+0),E=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,_),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let g=0,M=0;for(let E=0,_=l.length;E<_;E++){a.isInterleavedBufferAttribute?g=l[E]*a.data.stride+a.offset:g=l[E]*h;for(let u=0;u<h;u++)m[M++]=c[g++]}return new ar(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yg=new Qt,ws=new hm,ac=new Iu,$g=new z,lc=new z,cc=new z,uc=new z,cf=new z,dc=new z,Kg=new z,fc=new z;class B extends Dn{constructor(e=new gn,n=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(cf.fromBufferAttribute(p,e),o?dc.addScaledVector(cf,h):dc.addScaledVector(cf.sub(n),h))}n.add(dc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(ac.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ac,$g)===null||ws.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Yg.copy(s).invert(),ws.copy(e.ray).applyMatrix4(Yg),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const _=m[M],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=x;w<R;w+=3){const P=a.getX(w),I=a.getX(w+1),N=a.getX(w+2);r=hc(this,u,e,i,c,h,p,P,I,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let _=M,u=E;_<u;_+=3){const v=a.getX(_),x=a.getX(_+1),w=a.getX(_+2);r=hc(this,o,e,i,c,h,p,v,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const _=m[M],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=x;w<R;w+=3){const P=w,I=w+1,N=w+2;r=hc(this,u,e,i,c,h,p,P,I,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let _=M,u=E;_<u;_+=3){const v=_,x=_+1,w=_+2;r=hc(this,o,e,i,c,h,p,v,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function DS(t,e,n,i,r,s,o,a){let l;if(e.side===pi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ls,a),l===null)return null;fc.copy(a),fc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fc);return c<n.near||c>n.far?null:{distance:c,point:fc.clone(),object:t}}function hc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,lc),t.getVertexPosition(l,cc),t.getVertexPosition(c,uc);const h=DS(t,e,n,i,lc,cc,uc,Kg);if(h){const p=new z;Xi.getBarycoord(Kg,lc,cc,uc,p),r&&(h.uv=Xi.getInterpolatedAttribute(r,a,l,c,p,new Qe)),s&&(h.uv1=Xi.getInterpolatedAttribute(s,a,l,c,p,new Qe)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,p,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new z,materialIndex:0};Xi.getNormal(lc,cc,uc,m.normal),h.face=m,h.barycoord=p}return h}class Fn extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let m=0,g=0;M("z","y","x",-1,-1,i,n,e,o,s,0),M("z","y","x",1,-1,i,n,-e,o,s,1),M("x","z","y",1,1,e,i,n,r,o,2),M("x","z","y",1,-1,e,i,-n,r,o,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function M(E,_,u,v,x,w,R,P,I,N,T){const S=w/I,k=R/N,W=w/2,te=R/2,ue=P/2,fe=I+1,V=N+1;let K=0,O=0;const J=new z;for(let de=0;de<V;de++){const Me=de*k-te;for(let De=0;De<fe;De++){const dt=De*S-W;J[E]=dt*v,J[_]=Me*x,J[u]=ue,c.push(J.x,J.y,J.z),J[E]=0,J[_]=0,J[u]=P>0?1:-1,h.push(J.x,J.y,J.z),p.push(De/I),p.push(1-de/N),K+=1}}for(let de=0;de<N;de++)for(let Me=0;Me<I;Me++){const De=m+Me+fe*de,dt=m+Me+fe*(de+1),ut=m+(Me+1)+fe*(de+1),Re=m+(Me+1)+fe*de;l.push(De,dt,Re),l.push(dt,ut,Re),O+=6}a.addGroup(g,O,T),g+=O,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kn(t){const e={};for(let n=0;n<t.length;n++){const i=$o(t[n]);for(const r in i)e[r]=i[r]}return e}function NS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const US={clone:$o,merge:Kn};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yx extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new z,Zg=new Qe,Jg=new Qe;class Mi extends yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,n){return this.getViewBounds(e,Zg,Jg),n.subVectors(Jg,Zg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class OS extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(ho,po,e,n);r.layers=this.layers,this.add(r);const s=new Mi(ho,po,e,n);s.layers=this.layers,this.add(s);const o=new Mi(ho,po,e,n);o.layers=this.layers,this.add(o);const a=new Mi(ho,po,e,n);a.layers=this.layers,this.add(a);const l=new Mi(ho,po,e,n);l.layers=this.layers,this.add(l);const c=new Mi(ho,po,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===rr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,g),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Mx extends ei{constructor(e=[],n=jo,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends qs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fn(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:rs});s.uniforms.tEquirect.value=n;const o=new B(r,s),a=n.minFilter;return n.minFilter===Os&&(n.minFilter=ir),new OS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class qe extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BS={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,i),u=this._getHandJoint(c,E);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,M=.005;c.inputState.pinching&&m>g+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=n}clone(){return new mm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class HS extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const df=new z,VS=new z,GS=new vt;class Ps{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=df.subVectors(i,n).cross(VS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||GS.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Iu,WS=new Qe(.5,.5),pc=new z;class gm{constructor(e=new Ps,n=new Ps,i=new Ps,r=new Ps,s=new Ps,o=new Ps){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=rr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],m=s[6],g=s[7],M=s[8],E=s[9],_=s[10],u=s[11],v=s[12],x=s[13],w=s[14],R=s[15];if(r[0].setComponents(c-o,g-h,u-M,R-v).normalize(),r[1].setComponents(c+o,g+h,u+M,R+v).normalize(),r[2].setComponents(c+a,g+p,u+E,R+x).normalize(),r[3].setComponents(c-a,g-p,u-E,R-x).normalize(),i)r[4].setComponents(l,m,_,w).normalize(),r[5].setComponents(c-l,g-m,u-_,R-w).normalize();else if(r[4].setComponents(c-l,g-m,u-_,R-w).normalize(),n===rr)r[5].setComponents(c+l,g+m,u+_,R+w).normalize();else if(n===uu)r[5].setComponents(l,m,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const n=WS.distanceTo(e.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pc.x=r.normal.x>0?e.max.x:e.min.x,pc.y=r.normal.y>0?e.max.y:e.min.y,pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new z,hu=new z,Qg=new Qt,Ea=new hm,mc=new Iu,ff=new z,e1=new z;class t1 extends Dn{constructor(e=new gn,n=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)fu.fromBufferAttribute(n,r-1),hu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=fu.distanceTo(hu);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(r),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;Qg.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(Qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),M=Math.min(h.count,o.start+o.count);for(let E=g,_=M-1;E<_;E+=c){const u=h.getX(E),v=h.getX(E+1),x=gc(this,e,Ea,l,u,v,E);x&&n.push(x)}if(this.isLineLoop){const E=h.getX(M-1),_=h.getX(g),u=gc(this,e,Ea,l,E,_,M-1);u&&n.push(u)}}else{const g=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let E=g,_=M-1;E<_;E+=c){const u=gc(this,e,Ea,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=gc(this,e,Ea,l,M-1,g,M-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(fu.fromBufferAttribute(a,r),hu.fromBufferAttribute(a,s),n.distanceSqToSegment(fu,hu,ff,e1)>i)return;ff.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ff);if(!(c<e.near||c>e.far))return{distance:c,point:e1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class mo extends ei{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sx extends ei{constructor(e,n,i=js,r,s,o,a=$i,l=$i,c,h=ul,p=1){if(h!==ul&&h!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:p};super(m,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class wx extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class li extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=n/2,p=Math.PI/2*e,m=n,g=2*p+m,M=i*2+s,E=r+1,_=new z,u=new z;for(let v=0;v<=M;v++){let x=0,w=0,R=0,P=0;if(v<=i){const T=v/i,S=T*Math.PI/2;w=-h-e*Math.cos(S),R=e*Math.sin(S),P=-e*Math.cos(S),x=T*p}else if(v<=i+s){const T=(v-i)/s;w=-h+T*n,R=e,P=0,x=p+T*m}else{const T=(v-i-s)/i,S=T*Math.PI/2;w=h+e*Math.sin(S),R=e*Math.cos(S),P=e*Math.sin(S),x=p+m+T*p}const I=Math.max(0,Math.min(1,x/g));let N=0;v===0?N=.5/r:v===M&&(N=-.5/r);for(let T=0;T<=r;T++){const S=T/r,k=S*Math.PI*2,W=Math.sin(k),te=Math.cos(k);u.x=-R*te,u.y=w,u.z=R*W,a.push(u.x,u.y,u.z),_.set(-R*te,P,R*W),_.normalize(),l.push(_.x,_.y,_.z),c.push(S+N,I)}if(v>0){const T=(v-1)*E;for(let S=0;S<r;S++){const k=T+S,W=T+S+1,te=v*E+S,ue=v*E+S+1;o.push(k,W,te),o.push(W,ue,te)}}}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Zn extends gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new z,h=new Qe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=n;p++,m+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ot extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],g=[];let M=0;const E=[],_=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(g,2));function v(){const w=new z,R=new z;let P=0;const I=(n-e)/i;for(let N=0;N<=s;N++){const T=[],S=N/s,k=S*(n-e)+e;for(let W=0;W<=r;W++){const te=W/r,ue=te*l+a,fe=Math.sin(ue),V=Math.cos(ue);R.x=k*fe,R.y=-S*i+_,R.z=k*V,p.push(R.x,R.y,R.z),w.set(fe,I,V).normalize(),m.push(w.x,w.y,w.z),g.push(te,1-S),T.push(M++)}E.push(T)}for(let N=0;N<r;N++)for(let T=0;T<s;T++){const S=E[T][N],k=E[T+1][N],W=E[T+1][N+1],te=E[T][N+1];(e>0||T!==0)&&(h.push(S,k,te),P+=3),(n>0||T!==s-1)&&(h.push(k,W,te),P+=3)}c.addGroup(u,P,0),u+=P}function x(w){const R=M,P=new Qe,I=new z;let N=0;const T=w===!0?e:n,S=w===!0?1:-1;for(let W=1;W<=r;W++)p.push(0,_*S,0),m.push(0,S,0),g.push(.5,.5),M++;const k=M;for(let W=0;W<=r;W++){const ue=W/r*l+a,fe=Math.cos(ue),V=Math.sin(ue);I.x=T*V,I.y=_*S,I.z=T*fe,p.push(I.x,I.y,I.z),m.push(0,S,0),P.x=fe*.5+.5,P.y=V*.5*S+.5,g.push(P.x,P.y),M++}for(let W=0;W<r;W++){const te=R+W,ue=k+W;w===!0?h.push(ue,ue+1,te):h.push(ue+1,ue,te),N+=3}c.addGroup(u,N,w===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pn extends ot{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vm extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new z,w=new z,R=new z;for(let P=0;P<n.length;P+=3)g(n[P+0],x),g(n[P+1],w),g(n[P+2],R),l(x,w,R,v)}function l(v,x,w,R){const P=R+1,I=[];for(let N=0;N<=P;N++){I[N]=[];const T=v.clone().lerp(w,N/P),S=x.clone().lerp(w,N/P),k=P-N;for(let W=0;W<=k;W++)W===0&&N===P?I[N][W]=T:I[N][W]=T.clone().lerp(S,W/k)}for(let N=0;N<P;N++)for(let T=0;T<2*(P-N)-1;T++){const S=Math.floor(T/2);T%2===0?(m(I[N][S+1]),m(I[N+1][S]),m(I[N][S])):(m(I[N][S+1]),m(I[N+1][S+1]),m(I[N+1][S]))}}function c(v){const x=new z;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(v),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function h(){const v=new z;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const w=_(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(w,1-R)}M(),p()}function p(){for(let v=0;v<o.length;v+=6){const x=o[v+0],w=o[v+2],R=o[v+4],P=Math.max(x,w,R),I=Math.min(x,w,R);P>.9&&I<.1&&(x<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function m(v){s.push(v.x,v.y,v.z)}function g(v,x){const w=v*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function M(){const v=new z,x=new z,w=new z,R=new z,P=new Qe,I=new Qe,N=new Qe;for(let T=0,S=0;T<s.length;T+=9,S+=6){v.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),P.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),R.copy(v).add(x).add(w).divideScalar(3);const k=_(R);E(P,S+0,v,k),E(I,S+2,x,k),E(N,S+4,w,k)}}function E(v,x,w,R){R<0&&v.x===1&&(o[x]=v.x-1),w.x===0&&w.z===0&&(o[x]=R/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.vertices,e.indices,e.radius,e.details)}}class sn extends vm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sn(e.radius,e.detail)}}class Ir{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],m=i[r+1]-h,g=(o-h)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Qe:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new z,r=[],s=[],o=[],a=new z,l=new Qt;for(let g=0;g<=e;g++){const M=g/e;r[g]=this.getTangentAt(M,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(yt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,M))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(yt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let M=1;M<=e;M++)s[M].applyMatrix4(l.makeRotationAxis(r[M],g*M)),o[M].crossVectors(r[M],s[M])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ex extends Ir{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Qe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*h-g*p+this.aX,c=m*p+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class XS extends Ex{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _m(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let m=(o-s)/c-(a-s)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,g*=h,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const vc=new z,hf=new _m,pf=new _m,mf=new _m;class lp extends Ir{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(vc.subVectors(r[0],r[1]).add(r[0]),c=vc);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(vc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let M=Math.pow(c.distanceToSquared(p),g),E=Math.pow(p.distanceToSquared(m),g),_=Math.pow(m.distanceToSquared(h),g);E<1e-4&&(E=1),M<1e-4&&(M=E),_<1e-4&&(_=E),hf.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,M,E,_),pf.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,M,E,_),mf.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,M,E,_)}else this.curveType==="catmullrom"&&(hf.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),pf.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),mf.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return i.set(hf.calc(l),pf.calc(l),mf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function n1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function jS(t,e){const n=1-t;return n*n*e}function qS(t,e){return 2*(1-t)*t*e}function YS(t,e){return t*t*e}function Va(t,e,n,i){return jS(t,e)+qS(t,n)+YS(t,i)}function $S(t,e){const n=1-t;return n*n*n*e}function KS(t,e){const n=1-t;return 3*n*n*t*e}function ZS(t,e){return 3*(1-t)*t*t*e}function JS(t,e){return t*t*t*e}function Ga(t,e,n,i,r){return $S(t,e)+KS(t,n)+ZS(t,i)+JS(t,r)}class QS extends Ir{constructor(e=new Qe,n=new Qe,i=new Qe,r=new Qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Qe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ew extends Ir{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y),Ga(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tw extends Ir{constructor(e=new Qe,n=new Qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Qe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Qe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nw extends Ir{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iw extends Ir{constructor(e=new Qe,n=new Qe,i=new Qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Qe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tx extends Ir{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y),Va(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rw extends Ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Qe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(n1(a,l.x,c.x,h.x,p.x),n1(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Qe().fromArray(r))}return this}}var sw=Object.freeze({__proto__:null,ArcCurve:XS,CatmullRomCurve3:lp,CubicBezierCurve:QS,CubicBezierCurve3:ew,EllipseCurve:Ex,LineCurve:tw,LineCurve3:nw,QuadraticBezierCurve:iw,QuadraticBezierCurve3:Tx,SplineCurve:rw});class Xn extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,m=n/l,g=[],M=[],E=[],_=[];for(let u=0;u<h;u++){const v=u*m-o;for(let x=0;x<c;x++){const w=x*p-s;M.push(w,-v,0),E.push(0,0,1),_.push(x/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,w=v+c*(u+1),R=v+1+c*(u+1),P=v+1+c*u;g.push(x,w,P),g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new bt(M,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xm extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const m=(n-e)/r,g=new z,M=new Qe;for(let E=0;E<=r;E++){for(let _=0;_<=i;_++){const u=s+_/i*o;g.x=p*Math.cos(u),g.y=p*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),M.x=(g.x/n+1)/2,M.y=(g.y/n+1)/2,h.push(M.x,M.y)}p+=m}for(let E=0;E<r;E++){const _=E*(i+1);for(let u=0;u<i;u++){const v=u+_,x=v,w=v+i+1,R=v+i+2,P=v+1;a.push(x,w,P),a.push(w,R,P)}}this.setIndex(a),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ht extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new z,m=new z,g=[],M=[],E=[],_=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let w=0;u===0&&o===0?w=.5/n:u===i&&l===Math.PI&&(w=-.5/n);for(let R=0;R<=n;R++){const P=R/n;p.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),M.push(p.x,p.y,p.z),m.copy(p).normalize(),E.push(m.x,m.y,m.z),_.push(P+w,1-x),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=h[u][v+1],w=h[u][v],R=h[u+1][v],P=h[u+1][v+1];(u!==0||o>0)&&g.push(x,w,P),(u!==i-1||l<Math.PI)&&g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new bt(M,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ht extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new z,p=new z,m=new z;for(let g=0;g<=i;g++)for(let M=0;M<=r;M++){const E=M/r*s,_=g/i*Math.PI*2;p.x=(e+n*Math.cos(_))*Math.cos(E),p.y=(e+n*Math.cos(_))*Math.sin(E),p.z=n*Math.sin(_),a.push(p.x,p.y,p.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),c.push(M/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let M=1;M<=r;M++){const E=(r+1)*g+M-1,_=(r+1)*(g-1)+M-1,u=(r+1)*(g-1)+M,v=(r+1)*g+M;o.push(E,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wa extends gn{constructor(e=new Tx(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new Qe;let h=new z;const p=[],m=[],g=[],M=[];E(),this.setIndex(M),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(g,2));function E(){for(let x=0;x<n;x++)_(x);_(s===!1?n:0),v(),u()}function _(x){h=e.getPointAt(x/n,h);const w=o.normals[x],R=o.binormals[x];for(let P=0;P<=r;P++){const I=P/r*Math.PI*2,N=Math.sin(I),T=-Math.cos(I);l.x=T*w.x+N*R.x,l.y=T*w.y+N*R.y,l.z=T*w.z+N*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=n;x++)for(let w=1;w<=r;w++){const R=(r+1)*(x-1)+(w-1),P=(r+1)*x+(w-1),I=(r+1)*x+w,N=(r+1)*(x-1)+w;M.push(R,P,N),M.push(P,I,N)}}function v(){for(let x=0;x<=n;x++)for(let w=0;w<=r;w++)c.x=x/n,c.y=w/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wa(new sw[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Pe extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ow extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aw extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ym extends Dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class lw extends ym{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const gf=new Qt,i1=new z,r1=new z;class Ax{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=lr,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gm,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;i1.setFromMatrixPosition(e.matrixWorld),n.position.copy(i1),r1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(r1),n.updateMatrixWorld(),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const s1=new Qt,Ta=new z,vf=new z;class cw extends Ax{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ta),vf.copy(i.position),vf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vf),i.updateMatrixWorld(),r.makeTranslation(-Ta.x,-Ta.y,-Ta.z),s1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s1,i.coordinateSystem,i.reversedDepth)}}class Hi extends ym{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bx extends yx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uw extends Ax{constructor(){super(new bx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o1 extends ym{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new uw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dw extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const a1=new Qt;class fw{constructor(e,n,i=0,r=1/0){this.ray=new hm(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new pm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return a1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a1),this}intersectObject(e,n=!0,i=[]){return cp(e,this,i,n),i.sort(l1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cp(e[r],this,i,n);return i.sort(l1),i}}function l1(t,e){return t.distance-e.distance}function cp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)cp(s[o],e,n,!0)}}function c1(t,e,n,i){const r=hw(i);switch(n){case lx:return t*e;case ux:return t*e/r.components*r.byteLength;case cm:return t*e/r.components*r.byteLength;case dx:return t*e*2/r.components*r.byteLength;case um:return t*e*2/r.components*r.byteLength;case cx:return t*e*3/r.components*r.byteLength;case ji:return t*e*4/r.components*r.byteLength;case dm:return t*e*4/r.components*r.byteLength;case Nc:case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Uh:return Math.max(t,16)*Math.max(e,8)/4;case Lh:case Nh:return Math.max(t,8)*Math.max(e,8)/2;case Fh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qh:case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hw(t){switch(t){case lr:case rx:return{byteLength:1,components:1};case ll:case sx:case _l:return{byteLength:2,components:1};case am:case lm:return{byteLength:2,components:4};case js:case om:case wr:return{byteLength:4,components:1};case ox:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function pw(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,M)=>g.start-M.start);let m=0;for(let g=1;g<p.length;g++){const M=p[m],E=p[g];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,p[m]=E)}p.length=m+1;for(let g=0,M=p.length;g<M;g++){const E=p[g];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var mw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gw=`#ifdef USE_ALPHAHASH
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
#endif`,vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_w=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mw=`#ifdef USE_AOMAP
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
#endif`,Sw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ww=`#ifdef USE_BATCHING
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
#endif`,Ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Aw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cw=`#ifdef USE_IRIDESCENCE
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
#endif`,Rw=`#ifdef USE_BUMPMAP
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
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ow=`#define PI 3.141592653589793
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
} // validated`,zw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bw=`vec3 transformedNormal = objectNormal;
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
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ww=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qw=`#ifdef USE_ENVMAP
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
#endif`,Yw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$w=`#ifdef USE_ENVMAP
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
#endif`,Kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zw=`#ifdef USE_ENVMAP
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
#endif`,Jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
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
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
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
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
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
#endif`,hE=`struct PhysicalMaterial {
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
}`,pE=`
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
#endif`,mE=`#if defined( RE_IndirectDiffuse )
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EE=`#if defined( USE_POINTS_UV )
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
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
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
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,MT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,wT=`#define DISTANCE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,bT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,LT=`#define MATCAP
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
}`,DT=`#define MATCAP
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
}`,NT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,FT=`#define PHONG
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
}`,kT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,HT=`#define TOON
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
}`,VT=`uniform float size;
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
}`,GT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,XT=`uniform vec3 color;
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
}`,jT=`uniform float rotation;
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
}`,qT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:mw,alphahash_pars_fragment:gw,alphamap_fragment:vw,alphamap_pars_fragment:_w,alphatest_fragment:xw,alphatest_pars_fragment:yw,aomap_fragment:Mw,aomap_pars_fragment:Sw,batching_pars_vertex:ww,batching_vertex:Ew,begin_vertex:Tw,beginnormal_vertex:Aw,bsdfs:bw,iridescence_fragment:Cw,bumpmap_pars_fragment:Rw,clipping_planes_fragment:Pw,clipping_planes_pars_fragment:Iw,clipping_planes_pars_vertex:Lw,clipping_planes_vertex:Dw,color_fragment:Nw,color_pars_fragment:Uw,color_pars_vertex:Fw,color_vertex:kw,common:Ow,cube_uv_reflection_fragment:zw,defaultnormal_vertex:Bw,displacementmap_pars_vertex:Hw,displacementmap_vertex:Vw,emissivemap_fragment:Gw,emissivemap_pars_fragment:Ww,colorspace_fragment:Xw,colorspace_pars_fragment:jw,envmap_fragment:qw,envmap_common_pars_fragment:Yw,envmap_pars_fragment:$w,envmap_pars_vertex:Kw,envmap_physical_pars_fragment:aE,envmap_vertex:Zw,fog_vertex:Jw,fog_pars_vertex:Qw,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:oE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:dE,lights_physical_fragment:fE,lights_physical_pars_fragment:hE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:yE,map_fragment:ME,map_pars_fragment:SE,map_particle_fragment:wE,map_particle_pars_fragment:EE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:AE,morphinstance_vertex:bE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:PE,morphtarget_vertex:IE,normal_fragment_begin:LE,normal_fragment_maps:DE,normal_pars_fragment:NE,normal_pars_vertex:UE,normal_vertex:FE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:HE,opaque_fragment:VE,packing:GE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:jE,dithering_pars_fragment:qE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:ZE,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:oT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:dT,uv_vertex:fT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:_T,cube_frag:xT,depth_vert:yT,depth_frag:MT,distanceRGBA_vert:ST,distanceRGBA_frag:wT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:bT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:PT,meshlambert_frag:IT,meshmatcap_vert:LT,meshmatcap_frag:DT,meshnormal_vert:NT,meshnormal_frag:UT,meshphong_vert:FT,meshphong_frag:kT,meshphysical_vert:OT,meshphysical_frag:zT,meshtoon_vert:BT,meshtoon_frag:HT,points_vert:VT,points_frag:GT,shadow_vert:WT,shadow_frag:XT,sprite_vert:jT,sprite_frag:qT},Fe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},tr={basic:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Kn([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Kn([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Kn([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Kn([Fe.lights,Fe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};tr.physical={uniforms:Kn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const _c={r:0,b:0,g:0},Ts=new cr,YT=new Qt;function $T(t,e,n,i,r,s,o){const a=new wt(0);let l=s===!0?0:1,c,h,p=null,m=0,g=null;function M(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?n:e).get(w)),w}function E(x){let w=!1;const R=M(x);R===null?u(a,l):R&&R.isColor&&(u(R,1),w=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,w){const R=M(w);R&&(R.isCubeTexture||R.mapping===Pu)?(h===void 0&&(h=new B(new Fn(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:$o(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ts.copy(w.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Ts)),h.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Wt,(p!==R||m!==R.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=R,m=R.version,g=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new B(new Xn(2,2),new cs({name:"BackgroundMaterial",uniforms:$o(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||m!==R.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=R,m=R.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,w){x.getRGB(_c,xx(t)),i.buffers.color.setClear(_c.r,_c.g,_c.b,w,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:E,addToRenderList:_,dispose:v}}function KT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(S,k,W,te,ue){let fe=!1;const V=p(te,W,k);s!==V&&(s=V,c(s.object)),fe=g(S,te,W,ue),fe&&M(S,te,W,ue),ue!==null&&e.update(ue,t.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,w(S,k,W,te),ue!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,k,W){const te=W.wireframe===!0;let ue=i[S.id];ue===void 0&&(ue={},i[S.id]=ue);let fe=ue[k.id];fe===void 0&&(fe={},ue[k.id]=fe);let V=fe[te];return V===void 0&&(V=m(l()),fe[te]=V),V}function m(S){const k=[],W=[],te=[];for(let ue=0;ue<n;ue++)k[ue]=0,W[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:te,object:S,attributes:{},index:null}}function g(S,k,W,te){const ue=s.attributes,fe=k.attributes;let V=0;const K=W.getAttributes();for(const O in K)if(K[O].location>=0){const de=ue[O];let Me=fe[O];if(Me===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;V++}return s.attributesNum!==V||s.index!==te}function M(S,k,W,te){const ue={},fe=k.attributes;let V=0;const K=W.getAttributes();for(const O in K)if(K[O].location>=0){let de=fe[O];de===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),ue[O]=Me,V++}s.attributes=ue,s.attributesNum=V,s.index=te}function E(){const S=s.newAttributes;for(let k=0,W=S.length;k<W;k++)S[k]=0}function _(S){u(S,0)}function u(S,k){const W=s.newAttributes,te=s.enabledAttributes,ue=s.attributeDivisors;W[S]=1,te[S]===0&&(t.enableVertexAttribArray(S),te[S]=1),ue[S]!==k&&(t.vertexAttribDivisor(S,k),ue[S]=k)}function v(){const S=s.newAttributes,k=s.enabledAttributes;for(let W=0,te=k.length;W<te;W++)k[W]!==S[W]&&(t.disableVertexAttribArray(W),k[W]=0)}function x(S,k,W,te,ue,fe,V){V===!0?t.vertexAttribIPointer(S,k,W,ue,fe):t.vertexAttribPointer(S,k,W,te,ue,fe)}function w(S,k,W,te){E();const ue=te.attributes,fe=W.getAttributes(),V=k.defaultAttributeValues;for(const K in fe){const O=fe[K];if(O.location>=0){let J=ue[K];if(J===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const de=J.normalized,Me=J.itemSize,De=e.get(J);if(De===void 0)continue;const dt=De.buffer,ut=De.type,Re=De.bytesPerElement,me=ut===t.INT||ut===t.UNSIGNED_INT||J.gpuType===om;if(J.isInterleavedBufferAttribute){const ae=J.data,ve=ae.stride,le=J.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<O.locationSize;Ve++)u(O.location+Ve,ae.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<O.locationSize;Ve++)_(O.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ve=0;Ve<O.locationSize;Ve++)x(O.location+Ve,Me/O.locationSize,ut,de,ve*Re,(le+Me/O.locationSize*Ve)*Re,me)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)u(O.location+ae,J.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<O.locationSize;ae++)_(O.location+ae);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let ae=0;ae<O.locationSize;ae++)x(O.location+ae,Me/O.locationSize,ut,de,Me*Re,Me/O.locationSize*ae*Re,me)}}else if(V!==void 0){const de=V[K];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(O.location,de);break;case 3:t.vertexAttrib3fv(O.location,de);break;case 4:t.vertexAttrib4fv(O.location,de);break;default:t.vertexAttrib1fv(O.location,de)}}}}v()}function R(){N();for(const S in i){const k=i[S];for(const W in k){const te=k[W];for(const ue in te)h(te[ue].object),delete te[ue];delete k[W]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const k=i[S.id];for(const W in k){const te=k[W];for(const ue in te)h(te[ue].object),delete te[ue];delete k[W]}delete i[S.id]}function I(S){for(const k in i){const W=i[k];if(W[S.id]===void 0)continue;const te=W[S.id];for(const ue in te)h(te[ue].object),delete te[ue];delete W[S.id]}}function N(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:_,disableUnusedAttributes:v}}function ZT(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];n.update(g,i,1)}function l(c,h,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<c.length;M++)o(c[M],h[M],m[M]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,p);let M=0;for(let E=0;E<p;E++)M+=h[E]*m[E];n.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==ji&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const N=I===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==lr&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wr&&!N)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=M>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:R,maxSamples:P}}function QT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ps,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,g){const M=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,u=t.get(p);if(!r||M===null||M.length===0||s&&!_)s?h(null):c();else{const v=s?0:i,x=v*4;let w=u.clippingState||null;l.value=w,w=h(M,m,x,g);for(let R=0;R!==x;++R)w[R]=n[R];u.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,M){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=l.value,M!==!0||_===null){const u=g+E*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let x=0,w=g;x!==E;++x,w+=4)o.copy(p[x]).applyMatrix4(v,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function e3(t){let e=new WeakMap;function n(o,a){return a===Rh?o.mapping=jo:a===Ph&&(o.mapping=qo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rh||a===Ph)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ro=4,u1=[.125,.215,.35,.446,.526,.582],Ds=20,_f=new bx,d1=new wt;let xf=null,yf=0,Mf=0,Sf=!1;const Is=(1+Math.sqrt(5))/2,go=1/Is,f1=[new z(-Is,go,0),new z(Is,go,0),new z(-go,0,Is),new z(go,0,Is),new z(0,Is,-go),new z(0,Is,go),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],t3=new z;class h1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=t3}=s;xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,yf,Mf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ir,minFilter:ir,generateMipmaps:!1,type:_l,format:ji,colorSpace:Yo,depthBuffer:!1},r=p1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n3(s)),this._blurMaterial=i3(s,e,n)}return r}_compileMaterial(e){const n=new B(this._lodPlanes[0],e);this._renderer.compile(n,_f)}_sceneToCubeUV(e,n,i,r,s){const l=new Mi(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(d1),p.toneMapping=ss,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const E=new At({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1}),_=new B(new Fn,E);let u=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,u=!0):(E.color.copy(d1),u=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):w===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const R=this._cubeSize;xc(r,w*R,x>2?R:0,R,R),p.setRenderTarget(r),u&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jo||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_f)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=f1[(r-s-1)%f1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new B(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ds-1),E=s/M,_=isFinite(s)?1+Math.floor(h*E):Ds;_>Ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ds}`);const u=[];let v=0;for(let I=0;I<Ds;++I){const N=I/E,T=Math.exp(-N*N/2);u.push(T),I===0?v+=T:I<_&&(v+=2*T)}for(let I=0;I<u.length;I++)u[I]=u[I]/v;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=M,m.mipInt.value=x-i;const w=this._sizeLods[r],R=3*w*(r>x-Ro?r-x+Ro:0),P=4*(this._cubeSize-w);xc(n,R,P,3*w,2*w),l.setRenderTarget(n),l.render(p,_f)}}function n3(t){const e=[],n=[],i=[];let r=t;const s=t-Ro+1+u1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ro?l=u1[o-t+Ro-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,M=6,E=3,_=2,u=1,v=new Float32Array(E*M*g),x=new Float32Array(_*M*g),w=new Float32Array(u*M*g);for(let P=0;P<g;P++){const I=P%3*2/3-1,N=P>2?0:-1,T=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];v.set(T,E*M*P),x.set(m,_*M*P);const S=[P,P,P,P,P,P];w.set(S,u*M*P)}const R=new gn;R.setAttribute("position",new ar(v,E)),R.setAttribute("uv",new ar(x,_)),R.setAttribute("faceIndex",new ar(w,u)),e.push(R),r>Ro&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function p1(t,e,n){const i=new qs(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function i3(t,e,n){const i=new Float32Array(Ds),r=new z(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function m1(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function g1(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Mm(){return`

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
	`}function r3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rh||l===Ph,h=l===jo||l===qo;if(c||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new h1(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new h1(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function s3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o3(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function c(p){const m=[],g=p.index,M=p.attributes.position;let E=0;if(g!==null){const v=g.array;E=g.version;for(let x=0,w=v.length;x<w;x+=3){const R=v[x+0],P=v[x+1],I=v[x+2];m.push(R,P,P,I,I,R)}}else if(M!==void 0){const v=M.array;E=M.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const R=x+0,P=x+1,I=x+2;m.push(R,P,P,I,I,R)}}else return;const _=new(px(m)?_x:vx)(m,1);_.version=E;const u=s.get(p);u&&e.remove(u),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function a3(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function c(m,g,M){M!==0&&(t.drawElementsInstanced(i,g,s,m*o,M),n.update(g,i,M))}function h(m,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,M);let _=0;for(let u=0;u<M;u++)_+=g[u];n.update(_,i,1)}function p(m,g,M,E){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<m.length;u++)c(m[u]/o,g[u],E[u]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,E,0,M);let u=0;for(let v=0;v<M;v++)u+=g[v]*E[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function l3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function c3(t,e,n){const i=new WeakMap,r=new Xt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;m!==void 0&&m.texture.dispose();const M=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),_===!0&&(w=3);let R=a.attributes.position.count*w,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*P*4*p),N=new mx(I,R,P,p);N.type=wr,N.needsUpdate=!0;const T=w*4;for(let k=0;k<p;k++){const W=u[k],te=v[k],ue=x[k],fe=R*P*4*k;for(let V=0;V<W.count;V++){const K=V*T;M===!0&&(r.fromBufferAttribute(W,V),I[fe+K+0]=r.x,I[fe+K+1]=r.y,I[fe+K+2]=r.z,I[fe+K+3]=0),E===!0&&(r.fromBufferAttribute(te,V),I[fe+K+4]=r.x,I[fe+K+5]=r.y,I[fe+K+6]=r.z,I[fe+K+7]=0),_===!0&&(r.fromBufferAttribute(ue,V),I[fe+K+8]=r.x,I[fe+K+9]=r.y,I[fe+K+10]=r.z,I[fe+K+11]=ue.itemSize===4?r.w:1)}}m={count:p,texture:N,size:new Qe(R,P)},i.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let M=0;for(let _=0;_<c.length;_++)M+=c[_];const E=a.morphTargetsRelative?1:1-M;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function u3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Rx=new ei,v1=new Sx(1,1),Px=new mx,Ix=new SS,Lx=new Mx,_1=[],x1=[],y1=new Float32Array(16),M1=new Float32Array(9),S1=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_1[r];if(s===void 0&&(s=new Float32Array(r),_1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function En(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lu(t,e){let n=x1[e];n===void 0&&(n=new Int32Array(e),x1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function d3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function f3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2fv(this.addr,e),Tn(n,e)}}function h3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;t.uniform3fv(this.addr,e),Tn(n,e)}}function p3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4fv(this.addr,e),Tn(n,e)}}function m3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;S1.set(i),t.uniformMatrix2fv(this.addr,!1,S1),Tn(n,i)}}function g3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;M1.set(i),t.uniformMatrix3fv(this.addr,!1,M1),Tn(n,i)}}function v3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;y1.set(i),t.uniformMatrix4fv(this.addr,!1,y1),Tn(n,i)}}function _3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2iv(this.addr,e),Tn(n,e)}}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3iv(this.addr,e),Tn(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4iv(this.addr,e),Tn(n,e)}}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2uiv(this.addr,e),Tn(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3uiv(this.addr,e),Tn(n,e)}}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4uiv(this.addr,e),Tn(n,e)}}function A3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(v1.compareFunction=hx,s=v1):s=Rx,n.setTexture2D(e||s,r)}function b3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ix,r)}function C3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lx,r)}function R3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Px,r)}function P3(t){switch(t){case 5126:return d3;case 35664:return f3;case 35665:return h3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return v3;case 5124:case 35670:return _3;case 35667:case 35671:return x3;case 35668:case 35672:return y3;case 35669:case 35673:return M3;case 5125:return S3;case 36294:return w3;case 36295:return E3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return R3}}function I3(t,e){t.uniform1fv(this.addr,e)}function L3(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function D3(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function N3(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function U3(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function F3(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k3(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O3(t,e){t.uniform1iv(this.addr,e)}function z3(t,e){t.uniform2iv(this.addr,e)}function B3(t,e){t.uniform3iv(this.addr,e)}function H3(t,e){t.uniform4iv(this.addr,e)}function V3(t,e){t.uniform1uiv(this.addr,e)}function G3(t,e){t.uniform2uiv(this.addr,e)}function W3(t,e){t.uniform3uiv(this.addr,e)}function X3(t,e){t.uniform4uiv(this.addr,e)}function j3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rx,s[o])}function q3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ix,s[o])}function Y3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lx,s[o])}function $3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Px,s[o])}function K3(t){switch(t){case 5126:return I3;case 35664:return L3;case 35665:return D3;case 35666:return N3;case 35674:return U3;case 35675:return F3;case 35676:return k3;case 5124:case 35670:return O3;case 35667:case 35671:return z3;case 35668:case 35672:return B3;case 35669:case 35673:return H3;case 5125:return V3;case 36294:return G3;case 36295:return W3;case 36296:return X3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return Y3;case 36289:case 36303:case 36311:case 36292:return $3}}class Z3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=P3(n.type)}}class J3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K3(n.type)}}class Q3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function w1(t,e){t.seq.push(e),t.map[e.id]=e}function eA(t,e,n){const i=t.name,r=i.length;for(wf.lastIndex=0;;){const s=wf.exec(i),o=wf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w1(n,c===void 0?new Z3(a,t,e):new J3(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new Q3(a),w1(n,p)),n=p}}}class Oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);eA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function E1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tA=37297;let nA=0;function iA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const T1=new vt;function rA(t){Lt._getMatrix(T1,Lt.workingColorSpace,t);const e=`mat3( ${T1.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(t)){case cu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function A1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+iA(t.getShaderSource(e),a)}else return s}function sA(t,e){const n=rA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function oA(t,e){let n;switch(e){case ZM:n="Linear";break;case JM:n="Reinhard";break;case QM:n="Cineon";break;case nx:n="ACESFilmic";break;case tS:n="AgX";break;case nS:n="Neutral";break;case eS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yc=new z;function aA(){Lt.getLuminanceCoefficients(yc);const t=yc.x.toFixed(4),e=yc.y.toFixed(4),n=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function cA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function b1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(t){return t.replace(dA,hA)}const fA=new Map;function hA(t,e){let n=_t[e];if(n===void 0){const i=fA.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return up(n)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R1(t){return t.replace(pA,mA)}function mA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function gA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ex?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function vA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case qo:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _A(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function xA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tx:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case KM:e="ENVMAP_BLENDING_ADD";break}return e}function yA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gA(n),c=vA(n),h=_A(n),p=xA(n),m=yA(n),g=lA(n),M=cA(s),E=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(La).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(La).join(`
`),u.length>0&&(u+=`
`)):(_=[P1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),u=[P1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?_t.tonemapping_pars_fragment:"",n.toneMapping!==ss?oA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,sA("linearToOutputTexel",n.outputColorSpace),aA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=up(o),o=b1(o,n),o=C1(o,n),a=up(a),a=b1(a,n),a=C1(a,n),o=R1(o),a=R1(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+_+o,w=v+u+a,R=E1(r,r.VERTEX_SHADER,x),P=E1(r,r.FRAGMENT_SHADER,w);r.attachShader(E,R),r.attachShader(E,P),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function I(k){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(E)||"",te=r.getShaderInfoLog(R)||"",ue=r.getShaderInfoLog(P)||"",fe=W.trim(),V=te.trim(),K=ue.trim();let O=!0,J=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,P);else{const de=A1(r,R,"vertex"),Me=A1(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+de+`
`+Me)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(V===""||K==="")&&(J=!1);J&&(k.diagnostics={runnable:O,programLog:fe,vertexShader:{log:V,prefix:_},fragmentShader:{log:K,prefix:u}})}r.deleteShader(R),r.deleteShader(P),N=new Oc(r,E),T=uA(r,E)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,tA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=P,this}let SA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function TA(t,e,n,i,r,s,o){const a=new pm,l=new wA,c=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,S,k,W,te){const ue=W.fog,fe=te.geometry,V=T.isMeshStandardMaterial?W.environment:null,K=(T.isMeshStandardMaterial?n:e).get(T.envMap||V),O=K&&K.mapping===Pu?K.image.height:null,J=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const de=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Me=de!==void 0?de.length:0;let De=0;fe.morphAttributes.position!==void 0&&(De=1),fe.morphAttributes.normal!==void 0&&(De=2),fe.morphAttributes.color!==void 0&&(De=3);let dt,ut,Re,me;if(J){const Ct=tr[J];dt=Ct.vertexShader,ut=Ct.fragmentShader}else dt=T.vertexShader,ut=T.fragmentShader,l.update(T),Re=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const ae=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),le=te.isInstancedMesh===!0,Ve=te.isBatchedMesh===!0,at=!!T.map,dn=!!T.matcap,F=!!K,Ft=!!T.aoMap,lt=!!T.lightMap,nt=!!T.bumpMap,G=!!T.normalMap,Ie=!!T.displacementMap,oe=!!T.emissiveMap,se=!!T.metalnessMap,Ke=!!T.roughnessMap,it=T.anisotropy>0,D=T.clearcoat>0,b=T.dispersion>0,ee=T.iridescence>0,ce=T.sheen>0,xe=T.transmission>0,he=it&&!!T.anisotropyMap,ke=D&&!!T.clearcoatMap,Ee=D&&!!T.clearcoatNormalMap,Ye=D&&!!T.clearcoatRoughnessMap,$e=ee&&!!T.iridescenceMap,ye=ee&&!!T.iridescenceThicknessMap,Ne=ce&&!!T.sheenColorMap,et=ce&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Te=!!T.specularColorMap,ft=!!T.specularIntensityMap,Y=xe&&!!T.transmissionMap,be=xe&&!!T.thicknessMap,Le=!!T.gradientMap,Ge=!!T.alphaMap,Se=T.alphaTest>0,_e=!!T.alphaHash,Xe=!!T.extensions;let ct=ss;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=t.toneMapping);const kt={shaderID:J,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:ut,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&te._colorsTexture!==null,instancing:le,instancingColor:le&&te.instanceColor!==null,instancingMorph:le&&te.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Yo,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:dn,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:O,aoMap:Ft,lightMap:lt,bumpMap:nt,normalMap:G,displacementMap:m&&Ie,emissiveMap:oe,normalMapObjectSpace:G&&T.normalMapType===oS,normalMapTangentSpace:G&&T.normalMapType===fx,metalnessMap:se,roughnessMap:Ke,anisotropy:it,anisotropyMap:he,clearcoat:D,clearcoatMap:ke,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:ee,iridescenceMap:$e,iridescenceThicknessMap:ye,sheen:ce,sheenColorMap:Ne,sheenRoughnessMap:et,specularMap:ze,specularColorMap:Te,specularIntensityMap:ft,transmission:xe,transmissionMap:Y,thicknessMap:be,gradientMap:Le,opaque:T.transparent===!1&&T.blending===Fo&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Se,alphaHash:_e,combine:T.combine,mapUv:at&&E(T.map.channel),aoMapUv:Ft&&E(T.aoMap.channel),lightMapUv:lt&&E(T.lightMap.channel),bumpMapUv:nt&&E(T.bumpMap.channel),normalMapUv:G&&E(T.normalMap.channel),displacementMapUv:Ie&&E(T.displacementMap.channel),emissiveMapUv:oe&&E(T.emissiveMap.channel),metalnessMapUv:se&&E(T.metalnessMap.channel),roughnessMapUv:Ke&&E(T.roughnessMap.channel),anisotropyMapUv:he&&E(T.anisotropyMap.channel),clearcoatMapUv:ke&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:et&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:Te&&E(T.specularColorMap.channel),specularIntensityMapUv:ft&&E(T.specularIntensityMap.channel),transmissionMapUv:Y&&E(T.transmissionMap.channel),thicknessMapUv:be&&E(T.thicknessMap.channel),alphaMapUv:Ge&&E(T.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(G||it),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!fe.attributes.uv&&(at||Ge),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:te.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:oe&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$t,flipSided:T.side===pi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function u(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)S.push(k),S.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const S=M[T.type];let k;if(S){const W=tr[S];k=US.clone(W.uniforms)}else k=T.uniforms;return k}function R(T,S){let k;for(let W=0,te=h.length;W<te;W++){const ue=h[W];if(ue.cacheKey===S){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new MA(t,S,T,s),h.push(k)),k}function P(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function I(T){l.remove(T)}function N(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:w,acquireProgram:R,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:N}}function AA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function I1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function L1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,g,M,E,_){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:m,material:g,groupOrder:M,renderOrder:p.renderOrder,z:E,group:_},t[e]=u):(u.id=p.id,u.object=p,u.geometry=m,u.material=g,u.groupOrder=M,u.renderOrder=p.renderOrder,u.z=E,u.group=_),e++,u}function a(p,m,g,M,E,_){const u=o(p,m,g,M,E,_);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(p,m,g,M,E,_){const u=o(p,m,g,M,E,_);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,m){n.length>1&&n.sort(p||bA),i.length>1&&i.sort(m||I1),r.length>1&&r.sort(m||I1)}function h(){for(let p=e,m=t.length;p<m;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function CA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new L1,t.set(i,[o])):r>=s.length?(o=new L1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new wt};break;case"SpotLight":n={position:new z,direction:new z,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IA=0;function LA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DA(t){const e=new RA,n=PA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Qt,o=new Qt;function a(c){let h=0,p=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,M=0,E=0,_=0,u=0,v=0,x=0,w=0,R=0,P=0,I=0;c.sort(LA);for(let T=0,S=c.length;T<S;T++){const k=c[T],W=k.color,te=k.intensity,ue=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=W.r*te,p+=W.g*te,m+=W.b*te;else if(k.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(k.sh.coefficients[V],te);I++}else if(k.isDirectionalLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,O=n.get(k);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.directionalShadow[g]=O,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=k.shadow.matrix,v++}i.directional[g]=V,g++}else if(k.isSpotLight){const V=e.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(W).multiplyScalar(te),V.distance=ue,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,i.spot[E]=V;const K=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,K.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[E]=K.matrix,k.castShadow){const O=n.get(k);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.spotShadow[E]=O,i.spotShadowMap[E]=fe,w++}E++}else if(k.isRectAreaLight){const V=e.get(k);V.color.copy(W).multiplyScalar(te),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=V,_++}else if(k.isPointLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),V.distance=k.distance,V.decay=k.decay,k.castShadow){const K=k.shadow,O=n.get(k);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,i.pointShadow[M]=O,i.pointShadowMap[M]=fe,i.pointShadowMatrix[M]=k.shadow.matrix,x++}i.point[M]=V,M++}else if(k.isHemisphereLight){const V=e.get(k);V.skyColor.copy(k.color).multiplyScalar(te),V.groundColor.copy(k.groundColor).multiplyScalar(te),i.hemi[u]=V,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==g||N.pointLength!==M||N.spotLength!==E||N.rectAreaLength!==_||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==x||N.numSpotShadows!==w||N.numSpotMaps!==R||N.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=E,i.rectArea.length=_,i.point.length=M,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,N.directionalLength=g,N.pointLength=M,N.spotLength=E,N.rectAreaLength=_,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=x,N.numSpotShadows=w,N.numSpotMaps=R,N.numLightProbes=I,i.version=IA++)}function l(c,h){let p=0,m=0,g=0,M=0,E=0;const _=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const w=i.directional[p];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),p++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),E++}}}return{setup:a,setupView:l,state:i}}function D1(t){const e=new DA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new D1(t),e.set(r,[a])):s>=o.length?(a=new D1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
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
}`;function kA(t,e,n){let i=new gm;const r=new Qe,s=new Qe,o=new Xt,a=new ow({depthPacking:sS}),l=new aw,c={},h=n.maxTextureSize,p={[ls]:pi,[pi]:ls,[$t]:$t},m=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:UA,fragmentShader:FA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new B(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q_;let u=this.type;this.render=function(P,I,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),W=t.state;W.setBlending(rs),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=u!==_r&&this.type===_r,ue=u===_r&&this.type!==_r;for(let fe=0,V=P.length;fe<V;fe++){const K=P[fe],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const J=O.getFrameExtents();if(r.multiply(J),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,O.mapSize.y=s.y)),O.map===null||te===!0||ue===!0){const Me=this.type!==_r?{minFilter:$i,magFilter:$i}:{};O.map!==null&&O.map.dispose(),O.map=new qs(r.x,r.y,Me),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const de=O.getViewportCount();for(let Me=0;Me<de;Me++){const De=O.getViewport(Me);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),W.viewport(o),O.updateMatrices(K,Me),i=O.getFrustum(),w(I,N,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===_r&&v(O,N),O.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(T,S,k)};function v(P,I){const N=e.update(E);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qs(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,N,m,E,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,N,g,E,null)}function x(P,I,N,T){let S=null;const k=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)S=k;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=S.uuid,te=I.uuid;let ue=c[W];ue===void 0&&(ue={},c[W]=ue);let fe=ue[te];fe===void 0&&(fe=S.clone(),ue[te]=fe,I.addEventListener("dispose",R)),S=fe}if(S.visible=I.visible,S.wireframe=I.wireframe,T===_r?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:p[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=N}return S}function w(P,I,N,T,S){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===_r)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const te=e.update(P),ue=P.material;if(Array.isArray(ue)){const fe=te.groups;for(let V=0,K=fe.length;V<K;V++){const O=fe[V],J=ue[O.materialIndex];if(J&&J.visible){const de=x(P,J,T,S);P.onBeforeShadow(t,P,I,N,te,de,O),t.renderBufferDirect(N,null,te,de,P,O),P.onAfterShadow(t,P,I,N,te,de,O)}}}else if(ue.visible){const fe=x(P,ue,T,S);P.onBeforeShadow(t,P,I,N,te,fe,null),t.renderBufferDirect(N,null,te,fe,P,null),P.onAfterShadow(t,P,I,N,te,fe,null)}}const W=P.children;for(let te=0,ue=W.length;te<ue;te++)w(W[te],I,N,T,S)}function R(P){P.target.removeEventListener("dispose",R);for(const N in c){const T=c[N],S=P.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const OA={[Sh]:wh,[Eh]:bh,[Th]:Ch,[Xo]:Ah,[wh]:Sh,[bh]:Eh,[Ch]:Th,[Ah]:Xo};function zA(t,e){function n(){let Y=!1;const be=new Xt;let Le=null;const Ge=new Xt(0,0,0,0);return{setMask:function(Se){Le!==Se&&!Y&&(t.colorMask(Se,Se,Se,Se),Le=Se)},setLocked:function(Se){Y=Se},setClear:function(Se,_e,Xe,ct,kt){kt===!0&&(Se*=ct,_e*=ct,Xe*=ct),be.set(Se,_e,Xe,ct),Ge.equals(be)===!1&&(t.clearColor(Se,_e,Xe,ct),Ge.copy(be))},reset:function(){Y=!1,Le=null,Ge.set(-1,0,0,0)}}}function i(){let Y=!1,be=!1,Le=null,Ge=null,Se=null;return{setReversed:function(_e){if(be!==_e){const Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const ct=Se;Se=null,this.setClear(ct)}},getReversed:function(){return be},setTest:function(_e){_e?ae(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(_e){Le!==_e&&!Y&&(t.depthMask(_e),Le=_e)},setFunc:function(_e){if(be&&(_e=OA[_e]),Ge!==_e){switch(_e){case Sh:t.depthFunc(t.NEVER);break;case wh:t.depthFunc(t.ALWAYS);break;case Eh:t.depthFunc(t.LESS);break;case Xo:t.depthFunc(t.LEQUAL);break;case Th:t.depthFunc(t.EQUAL);break;case Ah:t.depthFunc(t.GEQUAL);break;case bh:t.depthFunc(t.GREATER);break;case Ch:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ge=_e}},setLocked:function(_e){Y=_e},setClear:function(_e){Se!==_e&&(be&&(_e=1-_e),t.clearDepth(_e),Se=_e)},reset:function(){Y=!1,Le=null,Ge=null,Se=null,be=!1}}}function r(){let Y=!1,be=null,Le=null,Ge=null,Se=null,_e=null,Xe=null,ct=null,kt=null;return{setTest:function(Ct){Y||(Ct?ae(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!Y&&(t.stencilMask(Ct),be=Ct)},setFunc:function(Ct,ii,mi){(Le!==Ct||Ge!==ii||Se!==mi)&&(t.stencilFunc(Ct,ii,mi),Le=Ct,Ge=ii,Se=mi)},setOp:function(Ct,ii,mi){(_e!==Ct||Xe!==ii||ct!==mi)&&(t.stencilOp(Ct,ii,mi),_e=Ct,Xe=ii,ct=mi)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){kt!==Ct&&(t.clearStencil(Ct),kt=Ct)},reset:function(){Y=!1,be=null,Le=null,Ge=null,Se=null,_e=null,Xe=null,ct=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},m=new WeakMap,g=[],M=null,E=!1,_=null,u=null,v=null,x=null,w=null,R=null,P=null,I=new wt(0,0,0),N=0,T=!1,S=null,k=null,W=null,te=null,ue=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=K>=1):O.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=K>=2);let J=null,de={};const Me=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),dt=new Xt().fromArray(Me),ut=new Xt().fromArray(De);function Re(Y,be,Le,Ge){const Se=new Uint8Array(4),_e=t.createTexture();t.bindTexture(Y,_e),t.texParameteri(Y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<Le;Xe++)Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,Ge,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(be+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return _e}const me={};me[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Xo),nt(!1),G(Rg),ae(t.CULL_FACE),Ft(rs);function ae(Y){h[Y]!==!0&&(t.enable(Y),h[Y]=!0)}function ve(Y){h[Y]!==!1&&(t.disable(Y),h[Y]=!1)}function le(Y,be){return p[Y]!==be?(t.bindFramebuffer(Y,be),p[Y]=be,Y===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=be),Y===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=be),!0):!1}function Ve(Y,be){let Le=g,Ge=!1;if(Y){Le=m.get(be),Le===void 0&&(Le=[],m.set(be,Le));const Se=Y.textures;if(Le.length!==Se.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Xe=Se.length;_e<Xe;_e++)Le[_e]=t.COLOR_ATTACHMENT0+_e;Le.length=Se.length,Ge=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,Ge=!0);Ge&&t.drawBuffers(Le)}function at(Y){return M!==Y?(t.useProgram(Y),M=Y,!0):!1}const dn={[Ls]:t.FUNC_ADD,[LM]:t.FUNC_SUBTRACT,[DM]:t.FUNC_REVERSE_SUBTRACT};dn[NM]=t.MIN,dn[UM]=t.MAX;const F={[FM]:t.ZERO,[kM]:t.ONE,[OM]:t.SRC_COLOR,[yh]:t.SRC_ALPHA,[WM]:t.SRC_ALPHA_SATURATE,[VM]:t.DST_COLOR,[BM]:t.DST_ALPHA,[zM]:t.ONE_MINUS_SRC_COLOR,[Mh]:t.ONE_MINUS_SRC_ALPHA,[GM]:t.ONE_MINUS_DST_COLOR,[HM]:t.ONE_MINUS_DST_ALPHA,[XM]:t.CONSTANT_COLOR,[jM]:t.ONE_MINUS_CONSTANT_COLOR,[qM]:t.CONSTANT_ALPHA,[YM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ft(Y,be,Le,Ge,Se,_e,Xe,ct,kt,Ct){if(Y===rs){E===!0&&(ve(t.BLEND),E=!1);return}if(E===!1&&(ae(t.BLEND),E=!0),Y!==IM){if(Y!==_||Ct!==T){if((u!==Ls||w!==Ls)&&(t.blendEquation(t.FUNC_ADD),u=Ls,w=Ls),Ct)switch(Y){case Fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pg:t.blendFunc(t.ONE,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ig:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}v=null,x=null,R=null,P=null,I.set(0,0,0),N=0,_=Y,T=Ct}return}Se=Se||be,_e=_e||Le,Xe=Xe||Ge,(be!==u||Se!==w)&&(t.blendEquationSeparate(dn[be],dn[Se]),u=be,w=Se),(Le!==v||Ge!==x||_e!==R||Xe!==P)&&(t.blendFuncSeparate(F[Le],F[Ge],F[_e],F[Xe]),v=Le,x=Ge,R=_e,P=Xe),(ct.equals(I)===!1||kt!==N)&&(t.blendColor(ct.r,ct.g,ct.b,kt),I.copy(ct),N=kt),_=Y,T=!1}function lt(Y,be){Y.side===$t?ve(t.CULL_FACE):ae(t.CULL_FACE);let Le=Y.side===pi;be&&(Le=!Le),nt(Le),Y.blending===Fo&&Y.transparent===!1?Ft(rs):Ft(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const Ge=Y.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),oe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(Y){S!==Y&&(Y?t.frontFace(t.CW):t.frontFace(t.CCW),S=Y)}function G(Y){Y!==RM?(ae(t.CULL_FACE),Y!==k&&(Y===Rg?t.cullFace(t.BACK):Y===PM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),k=Y}function Ie(Y){Y!==W&&(V&&t.lineWidth(Y),W=Y)}function oe(Y,be,Le){Y?(ae(t.POLYGON_OFFSET_FILL),(te!==be||ue!==Le)&&(t.polygonOffset(be,Le),te=be,ue=Le)):ve(t.POLYGON_OFFSET_FILL)}function se(Y){Y?ae(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Ke(Y){Y===void 0&&(Y=t.TEXTURE0+fe-1),J!==Y&&(t.activeTexture(Y),J=Y)}function it(Y,be,Le){Le===void 0&&(J===null?Le=t.TEXTURE0+fe-1:Le=J);let Ge=de[Le];Ge===void 0&&(Ge={type:void 0,texture:void 0},de[Le]=Ge),(Ge.type!==Y||Ge.texture!==be)&&(J!==Le&&(t.activeTexture(Le),J=Le),t.bindTexture(Y,be||me[Y]),Ge.type=Y,Ge.texture=be)}function D(){const Y=de[J];Y!==void 0&&Y.type!==void 0&&(t.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ee(){try{t.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ce(){try{t.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{t.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function he(){try{t.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{t.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{t.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $e(){try{t.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{t.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(Y){dt.equals(Y)===!1&&(t.scissor(Y.x,Y.y,Y.z,Y.w),dt.copy(Y))}function et(Y){ut.equals(Y)===!1&&(t.viewport(Y.x,Y.y,Y.z,Y.w),ut.copy(Y))}function ze(Y,be){let Le=c.get(be);Le===void 0&&(Le=new WeakMap,c.set(be,Le));let Ge=Le.get(Y);Ge===void 0&&(Ge=t.getUniformBlockIndex(be,Y.name),Le.set(Y,Ge))}function Te(Y,be){const Ge=c.get(be).get(Y);l.get(be)!==Ge&&(t.uniformBlockBinding(be,Ge,Y.__bindingPointIndex),l.set(be,Ge))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,de={},p={},m=new WeakMap,g=[],M=null,E=!1,_=null,u=null,v=null,x=null,w=null,R=null,P=null,I=new wt(0,0,0),N=0,T=!1,S=null,k=null,W=null,te=null,ue=null,dt.set(0,0,t.canvas.width,t.canvas.height),ut.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:ve,bindFramebuffer:le,drawBuffers:Ve,useProgram:at,setBlending:Ft,setMaterial:lt,setFlipSided:nt,setCullFace:G,setLineWidth:Ie,setPolygonOffset:oe,setScissorTest:se,activeTexture:Ke,bindTexture:it,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:$e,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Te,texStorage2D:Ee,texStorage3D:Ye,texSubImage2D:ce,texSubImage3D:xe,compressedTexSubImage2D:he,compressedTexSubImage3D:ke,scissor:Ne,viewport:et,reset:ft}}function BA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,b){return g?new OffscreenCanvas(D,b):du("canvas")}function E(D,b,ee){let ce=1;const xe=it(D);if((xe.width>ee||xe.height>ee)&&(ce=ee/Math.max(xe.width,xe.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(ce*xe.width),ke=Math.floor(ce*xe.height);p===void 0&&(p=M(he,ke));const Ee=b?M(he,ke):p;return Ee.width=he,Ee.height=ke,Ee.getContext("2d").drawImage(D,0,0,he,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+ke+")."),Ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function _(D){return D.generateMipmaps}function u(D){t.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(D,b,ee,ce,xe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=b;if(b===t.RED&&(ee===t.FLOAT&&(he=t.R32F),ee===t.HALF_FLOAT&&(he=t.R16F),ee===t.UNSIGNED_BYTE&&(he=t.R8)),b===t.RED_INTEGER&&(ee===t.UNSIGNED_BYTE&&(he=t.R8UI),ee===t.UNSIGNED_SHORT&&(he=t.R16UI),ee===t.UNSIGNED_INT&&(he=t.R32UI),ee===t.BYTE&&(he=t.R8I),ee===t.SHORT&&(he=t.R16I),ee===t.INT&&(he=t.R32I)),b===t.RG&&(ee===t.FLOAT&&(he=t.RG32F),ee===t.HALF_FLOAT&&(he=t.RG16F),ee===t.UNSIGNED_BYTE&&(he=t.RG8)),b===t.RG_INTEGER&&(ee===t.UNSIGNED_BYTE&&(he=t.RG8UI),ee===t.UNSIGNED_SHORT&&(he=t.RG16UI),ee===t.UNSIGNED_INT&&(he=t.RG32UI),ee===t.BYTE&&(he=t.RG8I),ee===t.SHORT&&(he=t.RG16I),ee===t.INT&&(he=t.RG32I)),b===t.RGB_INTEGER&&(ee===t.UNSIGNED_BYTE&&(he=t.RGB8UI),ee===t.UNSIGNED_SHORT&&(he=t.RGB16UI),ee===t.UNSIGNED_INT&&(he=t.RGB32UI),ee===t.BYTE&&(he=t.RGB8I),ee===t.SHORT&&(he=t.RGB16I),ee===t.INT&&(he=t.RGB32I)),b===t.RGBA_INTEGER&&(ee===t.UNSIGNED_BYTE&&(he=t.RGBA8UI),ee===t.UNSIGNED_SHORT&&(he=t.RGBA16UI),ee===t.UNSIGNED_INT&&(he=t.RGBA32UI),ee===t.BYTE&&(he=t.RGBA8I),ee===t.SHORT&&(he=t.RGBA16I),ee===t.INT&&(he=t.RGBA32I)),b===t.RGB&&(ee===t.UNSIGNED_INT_5_9_9_9_REV&&(he=t.RGB9_E5),ee===t.UNSIGNED_INT_10F_11F_11F_REV&&(he=t.R11F_G11F_B10F)),b===t.RGBA){const ke=xe?cu:Lt.getTransfer(ce);ee===t.FLOAT&&(he=t.RGBA32F),ee===t.HALF_FLOAT&&(he=t.RGBA16F),ee===t.UNSIGNED_BYTE&&(he=ke===Wt?t.SRGB8_ALPHA8:t.RGBA8),ee===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),ee===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)}return(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(D,b){let ee;return D?b===null||b===js||b===cl?ee=t.DEPTH24_STENCIL8:b===wr?ee=t.DEPTH32F_STENCIL8:b===ll&&(ee=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===js||b===cl?ee=t.DEPTH_COMPONENT24:b===wr?ee=t.DEPTH_COMPONENT32F:b===ll&&(ee=t.DEPTH_COMPONENT16),ee}function R(D,b){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==$i&&D.minFilter!==ir?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function P(D){const b=D.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&h.delete(b)}function I(D){const b=D.target;b.removeEventListener("dispose",I),S(b)}function N(D){const b=i.get(D);if(b.__webglInit===void 0)return;const ee=D.source,ce=m.get(ee);if(ce){const xe=ce[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(D),Object.keys(ce).length===0&&m.delete(ee)}i.remove(D)}function T(D){const b=i.get(D);t.deleteTexture(b.__webglTexture);const ee=D.source,ce=m.get(ee);delete ce[b.__cacheKey],o.memory.textures--}function S(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let xe=0;xe<b.__webglFramebuffer[ce].length;xe++)t.deleteFramebuffer(b.__webglFramebuffer[ce][xe]);else t.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)t.deleteFramebuffer(b.__webglFramebuffer[ce]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=D.textures;for(let ce=0,xe=ee.length;ce<xe;ce++){const he=i.get(ee[ce]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(ee[ce])}i.remove(D)}let k=0;function W(){k=0}function te(){const D=k;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),k+=1,D}function ue(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function fe(D,b){const ee=i.get(D);if(D.isVideoTexture&&se(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ee.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(ee,D,b);return}}else D.isExternalTexture&&(ee.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture,t.TEXTURE0+b)}function V(D,b){const ee=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){me(ee,D,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ee.__webglTexture,t.TEXTURE0+b)}function K(D,b){const ee=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){me(ee,D,b);return}n.bindTexture(t.TEXTURE_3D,ee.__webglTexture,t.TEXTURE0+b)}function O(D,b){const ee=i.get(D);if(D.version>0&&ee.__version!==D.version){ae(ee,D,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture,t.TEXTURE0+b)}const J={[jr]:t.REPEAT,[ks]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},de={[$i]:t.NEAREST,[iS]:t.NEAREST_MIPMAP_NEAREST,[Zl]:t.NEAREST_MIPMAP_LINEAR,[ir]:t.LINEAR,[Bd]:t.LINEAR_MIPMAP_NEAREST,[Os]:t.LINEAR_MIPMAP_LINEAR},Me={[aS]:t.NEVER,[hS]:t.ALWAYS,[lS]:t.LESS,[hx]:t.LEQUAL,[cS]:t.EQUAL,[fS]:t.GEQUAL,[uS]:t.GREATER,[dS]:t.NOTEQUAL};function De(D,b){if(b.type===wr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ir||b.magFilter===Bd||b.magFilter===Zl||b.magFilter===Os||b.minFilter===ir||b.minFilter===Bd||b.minFilter===Zl||b.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,J[b.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,J[b.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,J[b.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,de[b.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$i||b.minFilter!==Zl&&b.minFilter!==Os||b.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function dt(D,b){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",P));const ce=b.source;let xe=m.get(ce);xe===void 0&&(xe={},m.set(ce,xe));const he=ue(b);if(he!==D.__cacheKey){xe[he]===void 0&&(xe[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),xe[he].usedTimes++;const ke=xe[D.__cacheKey];ke!==void 0&&(xe[D.__cacheKey].usedTimes--,ke.usedTimes===0&&T(b)),D.__cacheKey=he,D.__webglTexture=xe[he].texture}return ee}function ut(D,b,ee){return Math.floor(Math.floor(D/ee)/b)}function Re(D,b,ee,ce){const he=D.updateRanges;if(he.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,ee,ce,b.data);else{he.sort((ye,Ne)=>ye.start-Ne.start);let ke=0;for(let ye=1;ye<he.length;ye++){const Ne=he[ke],et=he[ye],ze=Ne.start+Ne.count,Te=ut(et.start,b.width,4),ft=ut(Ne.start,b.width,4);et.start<=ze+1&&Te===ft&&ut(et.start+et.count-1,b.width,4)===Te?Ne.count=Math.max(Ne.count,et.start+et.count-Ne.start):(++ke,he[ke]=et)}he.length=ke+1;const Ee=t.getParameter(t.UNPACK_ROW_LENGTH),Ye=t.getParameter(t.UNPACK_SKIP_PIXELS),$e=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Ne=he.length;ye<Ne;ye++){const et=he[ye],ze=Math.floor(et.start/4),Te=Math.ceil(et.count/4),ft=ze%b.width,Y=Math.floor(ze/b.width),be=Te,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(t.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(t.TEXTURE_2D,0,ft,Y,be,Le,ee,ce,b.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ee),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,$e)}}function me(D,b,ee){let ce=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=t.TEXTURE_3D);const xe=dt(D,b),he=b.source;n.bindTexture(ce,D.__webglTexture,t.TEXTURE0+ee);const ke=i.get(he);if(he.version!==ke.__version||xe===!0){n.activeTexture(t.TEXTURE0+ee);const Ee=Lt.getPrimaries(Lt.workingColorSpace),Ye=b.colorSpace===qr?null:Lt.getPrimaries(b.colorSpace),$e=b.colorSpace===qr||Ee===Ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ye=E(b.image,!1,r.maxTextureSize);ye=Ke(b,ye);const Ne=s.convert(b.format,b.colorSpace),et=s.convert(b.type);let ze=x(b.internalFormat,Ne,et,b.colorSpace,b.isVideoTexture);De(ce,b);let Te;const ft=b.mipmaps,Y=b.isVideoTexture!==!0,be=ke.__version===void 0||xe===!0,Le=he.dataReady,Ge=R(b,ye);if(b.isDepthTexture)ze=w(b.format===dl,b.type),be&&(Y?n.texStorage2D(t.TEXTURE_2D,1,ze,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,ze,ye.width,ye.height,0,Ne,et,null));else if(b.isDataTexture)if(ft.length>0){Y&&be&&n.texStorage2D(t.TEXTURE_2D,Ge,ze,ft[0].width,ft[0].height);for(let Se=0,_e=ft.length;Se<_e;Se++)Te=ft[Se],Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Te.width,Te.height,Ne,et,Te.data):n.texImage2D(t.TEXTURE_2D,Se,ze,Te.width,Te.height,0,Ne,et,Te.data);b.generateMipmaps=!1}else Y?(be&&n.texStorage2D(t.TEXTURE_2D,Ge,ze,ye.width,ye.height),Le&&Re(b,ye,Ne,et)):n.texImage2D(t.TEXTURE_2D,0,ze,ye.width,ye.height,0,Ne,et,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,ze,ft[0].width,ft[0].height,ye.depth);for(let Se=0,_e=ft.length;Se<_e;Se++)if(Te=ft[Se],b.format!==ji)if(Ne!==null)if(Y){if(Le)if(b.layerUpdates.size>0){const Xe=c1(Te.width,Te.height,b.format,b.type);for(const ct of b.layerUpdates){const kt=Te.data.subarray(ct*Xe/Te.data.BYTES_PER_ELEMENT,(ct+1)*Xe/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,ct,Te.width,Te.height,1,Ne,kt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Te.width,Te.height,ye.depth,Ne,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Se,ze,Te.width,Te.height,ye.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Te.width,Te.height,ye.depth,Ne,et,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Se,ze,Te.width,Te.height,ye.depth,0,Ne,et,Te.data)}else{Y&&be&&n.texStorage2D(t.TEXTURE_2D,Ge,ze,ft[0].width,ft[0].height);for(let Se=0,_e=ft.length;Se<_e;Se++)Te=ft[Se],b.format!==ji?Ne!==null?Y?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,Se,0,0,Te.width,Te.height,Ne,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,Se,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Te.width,Te.height,Ne,et,Te.data):n.texImage2D(t.TEXTURE_2D,Se,ze,Te.width,Te.height,0,Ne,et,Te.data)}else if(b.isDataArrayTexture)if(Y){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,ze,ye.width,ye.height,ye.depth),Le)if(b.layerUpdates.size>0){const Se=c1(ye.width,ye.height,b.format,b.type);for(const _e of b.layerUpdates){const Xe=ye.data.subarray(_e*Se/ye.data.BYTES_PER_ELEMENT,(_e+1)*Se/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,Ne,et,Xe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,et,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,Ne,et,ye.data);else if(b.isData3DTexture)Y?(be&&n.texStorage3D(t.TEXTURE_3D,Ge,ze,ye.width,ye.height,ye.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,et,ye.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,Ne,et,ye.data);else if(b.isFramebufferTexture){if(be)if(Y)n.texStorage2D(t.TEXTURE_2D,Ge,ze,ye.width,ye.height);else{let Se=ye.width,_e=ye.height;for(let Xe=0;Xe<Ge;Xe++)n.texImage2D(t.TEXTURE_2D,Xe,ze,Se,_e,0,Ne,et,null),Se>>=1,_e>>=1}}else if(ft.length>0){if(Y&&be){const Se=it(ft[0]);n.texStorage2D(t.TEXTURE_2D,Ge,ze,Se.width,Se.height)}for(let Se=0,_e=ft.length;Se<_e;Se++)Te=ft[Se],Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ne,et,Te):n.texImage2D(t.TEXTURE_2D,Se,ze,Ne,et,Te);b.generateMipmaps=!1}else if(Y){if(be){const Se=it(ye);n.texStorage2D(t.TEXTURE_2D,Ge,ze,Se.width,Se.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,et,ye)}else n.texImage2D(t.TEXTURE_2D,0,ze,Ne,et,ye);_(b)&&u(ce),ke.__version=he.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ae(D,b,ee){if(b.image.length!==6)return;const ce=dt(D,b),xe=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+ee);const he=i.get(xe);if(xe.version!==he.__version||ce===!0){n.activeTexture(t.TEXTURE0+ee);const ke=Lt.getPrimaries(Lt.workingColorSpace),Ee=b.colorSpace===qr?null:Lt.getPrimaries(b.colorSpace),Ye=b.colorSpace===qr||ke===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let _e=0;_e<6;_e++)!$e&&!ye?Ne[_e]=E(b.image[_e],!0,r.maxCubemapSize):Ne[_e]=ye?b.image[_e].image:b.image[_e],Ne[_e]=Ke(b,Ne[_e]);const et=Ne[0],ze=s.convert(b.format,b.colorSpace),Te=s.convert(b.type),ft=x(b.internalFormat,ze,Te,b.colorSpace),Y=b.isVideoTexture!==!0,be=he.__version===void 0||ce===!0,Le=xe.dataReady;let Ge=R(b,et);De(t.TEXTURE_CUBE_MAP,b);let Se;if($e){Y&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,ft,et.width,et.height);for(let _e=0;_e<6;_e++){Se=Ne[_e].mipmaps;for(let Xe=0;Xe<Se.length;Xe++){const ct=Se[Xe];b.format!==ji?ze!==null?Y?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,ct.width,ct.height,ze,ct.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,ct.width,ct.height,ze,Te,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ft,ct.width,ct.height,0,ze,Te,ct.data)}}}else{if(Se=b.mipmaps,Y&&be){Se.length>0&&Ge++;const _e=it(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,ft,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne[_e].width,Ne[_e].height,ze,Te,Ne[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,Ne[_e].width,Ne[_e].height,0,ze,Te,Ne[_e].data);for(let Xe=0;Xe<Se.length;Xe++){const kt=Se[Xe].image[_e].image;Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,kt.width,kt.height,ze,Te,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ft,kt.width,kt.height,0,ze,Te,kt.data)}}else{Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze,Te,Ne[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,ze,Te,Ne[_e]);for(let Xe=0;Xe<Se.length;Xe++){const ct=Se[Xe];Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,ze,Te,ct.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ft,ze,Te,ct.image[_e])}}}_(b)&&u(t.TEXTURE_CUBE_MAP),he.__version=xe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ve(D,b,ee,ce,xe,he){const ke=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),Ye=x(ee.internalFormat,ke,Ee,ee.colorSpace),$e=i.get(b),ye=i.get(ee);if(ye.__renderTarget=b,!$e.__hasExternalTextures){const Ne=Math.max(1,b.width>>he),et=Math.max(1,b.height>>he);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,he,Ye,Ne,et,b.depth,0,ke,Ee,null):n.texImage2D(xe,he,Ye,Ne,et,0,ke,Ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),oe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,xe,ye.__webglTexture,0,Ie(b)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,xe,ye.__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(D,b,ee){if(t.bindRenderbuffer(t.RENDERBUFFER,D),b.depthBuffer){const ce=b.depthTexture,xe=ce&&ce.isDepthTexture?ce.type:null,he=w(b.stencilBuffer,xe),ke=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=Ie(b);oe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,he,b.width,b.height):ee?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,he,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,he,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ke,t.RENDERBUFFER,D)}else{const ce=b.textures;for(let xe=0;xe<ce.length;xe++){const he=ce[xe],ke=s.convert(he.format,he.colorSpace),Ee=s.convert(he.type),Ye=x(he.internalFormat,ke,Ee,he.colorSpace),$e=Ie(b);ee&&oe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Ye,b.width,b.height):oe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(b.depthTexture);ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const xe=ce.__webglTexture,he=Ie(b);if(b.depthTexture.format===ul)oe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(b.depthTexture.format===dl)oe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function at(D){const b=i.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",xe)};ce.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=ce}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ce=D.texture.mipmaps;ce&&ce.length>0?Ve(b.__webglFramebuffer[0],D):Ve(b.__webglFramebuffer,D)}else if(ee){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=t.createRenderbuffer(),le(b.__webglDepthbuffer[ce],D,!1);else{const xe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[ce];t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,he)}}else{const ce=D.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,he)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dn(D,b,ee){const ce=i.get(D);b!==void 0&&ve(ce.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ee!==void 0&&at(D)}function F(D){const b=D.texture,ee=i.get(D),ce=i.get(b);D.addEventListener("dispose",I);const xe=D.textures,he=D.isWebGLCubeRenderTarget===!0,ke=xe.length>1;if(ke||(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=b.version,o.memory.textures++),he){ee.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Ee]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)ee.__webglFramebuffer[Ee][Ye]=t.createFramebuffer()}else ee.__webglFramebuffer[Ee]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)ee.__webglFramebuffer[Ee]=t.createFramebuffer()}else ee.__webglFramebuffer=t.createFramebuffer();if(ke)for(let Ee=0,Ye=xe.length;Ee<Ye;Ee++){const $e=i.get(xe[Ee]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&oe(D)===!1){ee.__webglMultisampledFramebuffer=t.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ee=0;Ee<xe.length;Ee++){const Ye=xe[Ee];ee.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ee.__webglColorRenderbuffer[Ee]);const $e=s.convert(Ye.format,Ye.colorSpace),ye=s.convert(Ye.type),Ne=x(Ye.internalFormat,$e,ye,Ye.colorSpace,D.isXRRenderTarget===!0),et=Ie(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Ne,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,ee.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=t.createRenderbuffer(),le(ee.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(he){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),De(t.TEXTURE_CUBE_MAP,b);for(let Ee=0;Ee<6;Ee++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)ve(ee.__webglFramebuffer[Ee][Ye],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye);else ve(ee.__webglFramebuffer[Ee],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);_(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Ee=0,Ye=xe.length;Ee<Ye;Ee++){const $e=xe[Ee],ye=i.get($e);let Ne=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ye.__webglTexture),De(Ne,$e),ve(ee.__webglFramebuffer,D,$e,t.COLOR_ATTACHMENT0+Ee,Ne,0),_($e)&&u(Ne)}n.unbindTexture()}else{let Ee=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ce.__webglTexture),De(Ee,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)ve(ee.__webglFramebuffer[Ye],D,b,t.COLOR_ATTACHMENT0,Ee,Ye);else ve(ee.__webglFramebuffer,D,b,t.COLOR_ATTACHMENT0,Ee,0);_(b)&&u(Ee),n.unbindTexture()}D.depthBuffer&&at(D)}function Ft(D){const b=D.textures;for(let ee=0,ce=b.length;ee<ce;ee++){const xe=b[ee];if(_(xe)){const he=v(D),ke=i.get(xe).__webglTexture;n.bindTexture(he,ke),u(he),n.unbindTexture()}}}const lt=[],nt=[];function G(D){if(D.samples>0){if(oe(D)===!1){const b=D.textures,ee=D.width,ce=D.height;let xe=t.COLOR_BUFFER_BIT;const he=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(D),Ee=b.length>1;if(Ee)for(let $e=0;$e<b.length;$e++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Ye=D.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let $e=0;$e<b.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),Ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[$e]);const ye=i.get(b[$e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,xe,t.NEAREST),l===!0&&(lt.length=0,nt.length=0,lt.push(t.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(he),nt.push(he),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let $e=0;$e<b.length;$e++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.RENDERBUFFER,ke.__webglColorRenderbuffer[$e]);const ye=i.get(b[$e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ie(D){return Math.min(r.maxSamples,D.samples)}function oe(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(D){const b=o.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function Ke(D,b){const ee=D.colorSpace,ce=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==Yo&&ee!==qr&&(Lt.getTransfer(ee)===Wt?(ce!==ji||xe!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function it(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=W,this.setTexture2D=fe,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=dn,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=oe}function HA(t,e){function n(i,r=qr){let s;const o=Lt.getTransfer(r);if(i===lr)return t.UNSIGNED_BYTE;if(i===am)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rx)return t.BYTE;if(i===sx)return t.SHORT;if(i===ll)return t.UNSIGNED_SHORT;if(i===om)return t.INT;if(i===js)return t.UNSIGNED_INT;if(i===wr)return t.FLOAT;if(i===_l)return t.HALF_FLOAT;if(i===lx)return t.ALPHA;if(i===cx)return t.RGB;if(i===ji)return t.RGBA;if(i===ul)return t.DEPTH_COMPONENT;if(i===dl)return t.DEPTH_STENCIL;if(i===ux)return t.RED;if(i===cm)return t.RED_INTEGER;if(i===dx)return t.RG;if(i===um)return t.RG_INTEGER;if(i===dm)return t.RGBA_INTEGER;if(i===Nc||i===Uc||i===Fc||i===kc)if(o===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lh||i===Dh||i===Nh||i===Uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fh||i===kh||i===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fh||i===kh)return o===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qh||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qh)return o===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===np||i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===np)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
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

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new wx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cs({vertexShader:VA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new B(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XA extends Qo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,g=null,M=null;const E=typeof XRWebGLBinding<"u",_=new WA,u={},v=n.getContextAttributes();let x=null,w=null;const R=[],P=[],I=new Qe;let N=null;const T=new Mi;T.viewport=new Xt;const S=new Mi;S.viewport=new Xt;const k=[T,S],W=new dw;let te=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let ae=R[me];return ae===void 0&&(ae=new uf,R[me]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(me){let ae=R[me];return ae===void 0&&(ae=new uf,R[me]=ae),ae.getGripSpace()},this.getHand=function(me){let ae=R[me];return ae===void 0&&(ae=new uf,R[me]=ae),ae.getHandSpace()};function fe(me){const ae=P.indexOf(me.inputSource);if(ae===-1)return;const ve=R[ae];ve!==void 0&&(ve.update(me.inputSource,me.frame,c||o),ve.dispatchEvent({type:me.type,data:me.inputSource}))}function V(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let me=0;me<R.length;me++){const ae=P[me];ae!==null&&(P[me]=null,R[me].disconnect(ae))}te=null,ue=null,_.reset();for(const me in u)delete u[me];e.setRenderTarget(x),g=null,m=null,p=null,r=null,w=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){a=me,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,le=null,Ve=null;v.depth&&(Ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=v.stencil?dl:ul,le=v.stencil?cl:js);const at={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(at),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new qs(m.textureWidth,m.textureHeight,{format:ji,type:lr,depthTexture:new Sx(m.textureWidth,m.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new qs(g.framebufferWidth,g.framebufferHeight,{format:ji,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(me){for(let ae=0;ae<me.removed.length;ae++){const ve=me.removed[ae],le=P.indexOf(ve);le>=0&&(P[le]=null,R[le].disconnect(ve))}for(let ae=0;ae<me.added.length;ae++){const ve=me.added[ae];let le=P.indexOf(ve);if(le===-1){for(let at=0;at<R.length;at++)if(at>=P.length){P.push(ve),le=at;break}else if(P[at]===null){P[at]=ve,le=at;break}if(le===-1)break}const Ve=R[le];Ve&&Ve.connect(ve)}}const O=new z,J=new z;function de(me,ae,ve){O.setFromMatrixPosition(ae.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const le=O.distanceTo(J),Ve=ae.projectionMatrix.elements,at=ve.projectionMatrix.elements,dn=Ve[14]/(Ve[10]-1),F=Ve[14]/(Ve[10]+1),Ft=(Ve[9]+1)/Ve[5],lt=(Ve[9]-1)/Ve[5],nt=(Ve[8]-1)/Ve[0],G=(at[8]+1)/at[0],Ie=dn*nt,oe=dn*G,se=le/(-nt+G),Ke=se*-nt;if(ae.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Ke),me.translateZ(se),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Ve[10]===-1)me.projectionMatrix.copy(ae.projectionMatrix),me.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const it=dn+se,D=F+se,b=Ie-Ke,ee=oe+(le-Ke),ce=Ft*F/D*it,xe=lt*F/D*it;me.projectionMatrix.makePerspective(b,ee,ce,xe,it,D),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function Me(me,ae){ae===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(ae.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let ae=me.near,ve=me.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),W.near=S.near=T.near=ae,W.far=S.far=T.far=ve,(te!==W.near||ue!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),te=W.near,ue=W.far),W.layers.mask=me.layers.mask|6,T.layers.mask=W.layers.mask&3,S.layers.mask=W.layers.mask&5;const le=me.parent,Ve=W.cameras;Me(W,le);for(let at=0;at<Ve.length;at++)Me(Ve[at],le);Ve.length===2?de(W,T,S):W.projectionMatrix.copy(T.projectionMatrix),De(me,W,le)};function De(me,ae,ve){ve===null?me.matrix.copy(ae.matrixWorld):(me.matrix.copy(ve.matrixWorld),me.matrix.invert(),me.matrix.multiply(ae.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(ae.projectionMatrix),me.projectionMatrixInverse.copy(ae.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=op*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(me){l=me,m!==null&&(m.fixedFoveation=me),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=me)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(me){return u[me]};let dt=null;function ut(me,ae){if(h=ae.getViewerPose(c||o),M=ae,h!==null){const ve=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let le=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,le=!0);for(let F=0;F<ve.length;F++){const Ft=ve[F];let lt=null;if(g!==null)lt=g.getViewport(Ft);else{const G=p.getViewSubImage(m,Ft);lt=G.viewport,F===0&&(e.setRenderTargetTextures(w,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(w))}let nt=k[F];nt===void 0&&(nt=new Mi,nt.layers.enable(F),nt.viewport=new Xt,k[F]=nt),nt.matrix.fromArray(Ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(lt.x,lt.y,lt.width,lt.height),F===0&&(W.matrix.copy(nt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),le===!0&&W.cameras.push(nt)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const F=p.getDepthInformation(ve[0]);F&&F.isValid&&F.texture&&_.init(F,r.renderState)}if(Ve&&Ve.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let F=0;F<ve.length;F++){const Ft=ve[F].camera;if(Ft){let lt=u[Ft];lt||(lt=new wx,u[Ft]=lt);const nt=p.getCameraImage(Ft);lt.sourceTexture=nt}}}}for(let ve=0;ve<R.length;ve++){const le=P[ve],Ve=R[ve];le!==null&&Ve!==void 0&&Ve.update(le,ae,c||o)}dt&&dt(me,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),M=null}const Re=new Cx;Re.setAnimationLoop(ut),this.setAnimationLoop=function(me){dt=me},this.dispose=function(){}}}const As=new cr,jA=new Qt;function qA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,xx(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,x,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),h(_,u)):u.isMeshStandardMaterial?(s(_,u),m(_,u),u.isMeshPhysicalMaterial&&g(_,u,w)):u.isMeshMatcapMaterial?(s(_,u),M(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),E(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,x):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===pi&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===pi&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,w=v.envMapRotation;x&&(_.envMap.value=x,As.copy(w),As.x*=-1,As.y*=-1,As.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),_.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(As)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,x){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=x*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function m(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pi&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,u){u.matcap&&(_.matcap.value=u.matcap)}function E(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=r[v.id];w===void 0&&(M(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",_));const R=x.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(m(v),s[v.id]=P)}function h(v){const x=p();v.__bindingPointIndex=x;const w=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const x=r[v.id],w=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,I=w.length;P<I;P++){const N=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,S=N.length;T<S;T++){const k=N[T];if(g(k,P,T,R)===!0){const W=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let fe=0;fe<te.length;fe++){const V=te[fe],K=E(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,W+ue,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,ue),ue+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,w,R){const P=v.value,I=x+"_"+w;if(R[I]===void 0)return typeof P=="number"||typeof P=="boolean"?R[I]=P:R[I]=P.clone(),!0;{const N=R[I];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return R[I]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function M(v){const x=v.uniforms;let w=0;const R=16;for(let I=0,N=x.length;I<N;I++){const T=Array.isArray(x[I])?x[I]:[x[I]];for(let S=0,k=T.length;S<k;S++){const W=T[S],te=Array.isArray(W.value)?W.value:[W.value];for(let ue=0,fe=te.length;ue<fe;ue++){const V=te[ue],K=E(V),O=w%R,J=O%K.boundary,de=O+J;w+=J,de!==0&&R-de<K.storage&&(w+=R-de),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=K.storage}}}const P=w%R;return P>0&&(w+=R-P),v.__size=w,v.__cache={},this}function E(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class $A{constructor(e={}){const{canvas:n=mS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=new Uint32Array(4),E=new Int32Array(4);let _=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=kn;let P=0,I=0,N=null,T=-1,S=null;const k=new Xt,W=new Xt;let te=null;const ue=new wt(0);let fe=0,V=n.width,K=n.height,O=1,J=null,de=null;const Me=new Xt(0,0,V,K),De=new Xt(0,0,V,K);let dt=!1;const ut=new gm;let Re=!1,me=!1;const ae=new Qt,ve=new z,le=new Xt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function dn(){return N===null?O:1}let F=i;function Ft(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sm}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Se,!1),F===null){const $="webgl2";if(F=Ft($,C),F===null)throw Ft($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let lt,nt,G,Ie,oe,se,Ke,it,D,b,ee,ce,xe,he,ke,Ee,Ye,$e,ye,Ne,et,ze,Te,ft;function Y(){lt=new s3(F),lt.init(),ze=new HA(F,lt),nt=new JT(F,lt,e,ze),G=new zA(F,lt),nt.reversedDepthBuffer&&m&&G.buffers.depth.setReversed(!0),Ie=new l3(F),oe=new AA,se=new BA(F,lt,G,oe,nt,ze,Ie),Ke=new e3(w),it=new r3(w),D=new pw(F),Te=new KT(F,D),b=new o3(F,D,Ie,Te),ee=new u3(F,b,D,Ie),ye=new c3(F,nt,se),Ee=new QT(oe),ce=new TA(w,Ke,it,lt,nt,Te,Ee),xe=new qA(w,oe),he=new CA,ke=new NA(lt),$e=new $T(w,Ke,it,G,ee,g,l),Ye=new kA(w,ee,nt),ft=new YA(F,Ie,nt,G),Ne=new ZT(F,lt,Ie),et=new a3(F,lt,Ie),Ie.programs=ce.programs,w.capabilities=nt,w.extensions=lt,w.properties=oe,w.renderLists=he,w.shadowMap=Ye,w.state=G,w.info=Ie}Y();const be=new XA(w,F);this.xr=be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(V,K,!1))},this.getSize=function(C){return C.set(V,K)},this.setSize=function(C,$,re=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,K=$,n.width=Math.floor(C*O),n.height=Math.floor($*O),re===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(V*O,K*O).floor()},this.setDrawingBufferSize=function(C,$,re){V=C,K=$,O=re,n.width=Math.floor(C*re),n.height=Math.floor($*re),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,$,re,ne){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,$,re,ne),G.viewport(k.copy(Me).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(De)},this.setScissor=function(C,$,re,ne){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,$,re,ne),G.scissor(W.copy(De).multiplyScalar(O).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){G.setScissorTest(dt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,re=!0){let ne=0;if(C){let Z=!1;if(N!==null){const we=N.texture.format;Z=we===dm||we===um||we===cm}if(Z){const we=N.texture.type,Ue=we===lr||we===js||we===ll||we===cl||we===am||we===lm,je=$e.getClearColor(),Be=$e.getClearAlpha(),rt=je.r,st=je.g,Ze=je.b;Ue?(M[0]=rt,M[1]=st,M[2]=Ze,M[3]=Be,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=rt,E[1]=st,E[2]=Ze,E[3]=Be,F.clearBufferiv(F.COLOR,0,E))}else ne|=F.COLOR_BUFFER_BIT}$&&(ne|=F.DEPTH_BUFFER_BIT),re&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),$e.dispose(),he.dispose(),ke.dispose(),oe.dispose(),Ke.dispose(),it.dispose(),ee.dispose(),Te.dispose(),ft.dispose(),ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",mi),be.removeEventListener("sessionend",Lr),vn.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Ie.autoReset,$=Ye.enabled,re=Ye.autoUpdate,ne=Ye.needsUpdate,Z=Ye.type;Y(),Ie.autoReset=C,Ye.enabled=$,Ye.autoUpdate=re,Ye.needsUpdate=ne,Ye.type=Z}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _e(C){const $=C.target;$.removeEventListener("dispose",_e),Xe($)}function Xe(C){ct(C),oe.remove(C)}function ct(C){const $=oe.get(C).programs;$!==void 0&&($.forEach(function(re){ce.releaseProgram(re)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,re,ne,Z,we){$===null&&($=Ve);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,je=Sl(C,$,re,ne,Z);G.setMaterial(ne,Ue);let Be=re.index,rt=1;if(ne.wireframe===!0){if(Be=b.getWireframeAttribute(re),Be===void 0)return;rt=2}const st=re.drawRange,Ze=re.attributes.position;let xt=st.start*rt,Dt=(st.start+st.count)*rt;we!==null&&(xt=Math.max(xt,we.start*rt),Dt=Math.min(Dt,(we.start+we.count)*rt)),Be!==null?(xt=Math.max(xt,0),Dt=Math.min(Dt,Be.count)):Ze!=null&&(xt=Math.max(xt,0),Dt=Math.min(Dt,Ze.count));const Ot=Dt-xt;if(Ot<0||Ot===1/0)return;Te.setup(Z,ne,je,re,Be);let zt,Et=Ne;if(Be!==null&&(zt=D.get(Be),Et=et,Et.setIndex(zt)),Z.isMesh)ne.wireframe===!0?(G.setLineWidth(ne.wireframeLinewidth*dn()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(Z.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),G.setLineWidth(tt*dn()),Z.isLineSegments?Et.setMode(F.LINES):Z.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else Z.isPoints?Et.setMode(F.POINTS):Z.isSprite&&Et.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const tt=Z._multiDrawStarts,pt=Z._multiDrawCounts,Tt=Z._multiDrawCount,$n=Be?D.get(Be).bytesPerElement:1,ur=oe.get(ne).currentProgram.getUniforms();for(let Bn=0;Bn<Tt;Bn++)ur.setValue(F,"_gl_DrawID",Bn),Et.render(tt[Bn]/$n,pt[Bn])}else if(Z.isInstancedMesh)Et.renderInstances(xt,Ot,Z.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,pt=Math.min(re.instanceCount,tt);Et.renderInstances(xt,Ot,pt)}else Et.render(xt,Ot)};function kt(C,$,re){C.transparent===!0&&C.side===$t&&C.forceSinglePass===!1?(C.side=pi,C.needsUpdate=!0,ms(C,$,re),C.side=ls,C.needsUpdate=!0,ms(C,$,re),C.side=$t):ms(C,$,re)}this.compile=function(C,$,re=null){re===null&&(re=C),u=ke.get(re),u.init($),x.push(u),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(u.pushLight(Z),Z.castShadow&&u.pushShadow(Z))}),C!==re&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(u.pushLight(Z),Z.castShadow&&u.pushShadow(Z))}),u.setupLights();const ne=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const we=Z.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const je=we[Ue];kt(je,re,Z),ne.add(je)}else kt(we,re,Z),ne.add(we)}),u=x.pop(),ne},this.compileAsync=function(C,$,re=null){const ne=this.compile(C,$,re);return new Promise(Z=>{function we(){if(ne.forEach(function(Ue){oe.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Z(C);return}setTimeout(we,10)}lt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function ii(C){Ct&&Ct(C)}function mi(){vn.stop()}function Lr(){vn.start()}const vn=new Cx;vn.setAnimationLoop(ii),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(C){Ct=C,be.setAnimationLoop(C),C===null?vn.stop():vn.start()},be.addEventListener("sessionstart",mi),be.addEventListener("sessionend",Lr),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera($),$=be.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,$,N),u=ke.get(C,x.length),u.init($),x.push(u),ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ut.setFromProjectionMatrix(ae,rr,$.reversedDepth),me=this.localClippingEnabled,Re=Ee.init(this.clippingPlanes,me),_=he.get(C,v.length),_.init(),v.push(_),be.enabled===!0&&be.isPresenting===!0){const we=w.xr.getDepthSensingMesh();we!==null&&hs(we,$,-1/0,w.sortObjects)}hs(C,$,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(J,de),at=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,at&&$e.addToRenderList(_,C),this.info.render.frame++,Re===!0&&Ee.beginShadows();const re=u.state.shadowsArray;Ye.render(re,C,$),Re===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=_.opaque,Z=_.transmissive;if(u.setupLights(),$.isArrayCamera){const we=$.cameras;if(Z.length>0)for(let Ue=0,je=we.length;Ue<je;Ue++){const Be=we[Ue];ia(ne,Z,C,Be)}at&&$e.render(C);for(let Ue=0,je=we.length;Ue<je;Ue++){const Be=we[Ue];na(_,C,Be,Be.viewport)}}else Z.length>0&&ia(ne,Z,C,$),at&&$e.render(C),na(_,C,$);N!==null&&I===0&&(se.updateMultisampleRenderTarget(N),se.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(w,C,$),Te.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],Re===!0&&Ee.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function hs(C,$,re,ne){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ut.intersectsSprite(C)){ne&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);const Ue=ee.update(C),je=C.material;je.visible&&_.push(C,Ue,je,re,le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ut.intersectsObject(C))){const Ue=ee.update(C),je=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),le.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),le.copy(Ue.boundingSphere.center)),le.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(je)){const Be=Ue.groups;for(let rt=0,st=Be.length;rt<st;rt++){const Ze=Be[rt],xt=je[Ze.materialIndex];xt&&xt.visible&&_.push(C,Ue,xt,re,le.z,Ze)}}else je.visible&&_.push(C,Ue,je,re,le.z,null)}}const we=C.children;for(let Ue=0,je=we.length;Ue<je;Ue++)hs(we[Ue],$,re,ne)}function na(C,$,re,ne){const Z=C.opaque,we=C.transmissive,Ue=C.transparent;u.setupLightsView(re),Re===!0&&Ee.setGlobalState(w.clippingPlanes,re),ne&&G.viewport(k.copy(ne)),Z.length>0&&ps(Z,$,re),we.length>0&&ps(we,$,re),Ue.length>0&&ps(Ue,$,re),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function ia(C,$,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ne.id]===void 0&&(u.state.transmissionRenderTarget[ne.id]=new qs(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?_l:lr,minFilter:Os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const we=u.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||k;we.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);const je=w.getRenderTarget(),Be=w.getActiveCubeFace(),rt=w.getActiveMipmapLevel();w.setRenderTarget(we),w.getClearColor(ue),fe=w.getClearAlpha(),fe<1&&w.setClearColor(16777215,.5),w.clear(),at&&$e.render(re);const st=w.toneMapping;w.toneMapping=ss;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),u.setupLightsView(ne),Re===!0&&Ee.setGlobalState(w.clippingPlanes,ne),ps(C,re,ne),se.updateMultisampleRenderTarget(we),se.updateRenderTargetMipmap(we),lt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Dt=0,Ot=$.length;Dt<Ot;Dt++){const zt=$[Dt],Et=zt.object,tt=zt.geometry,pt=zt.material,Tt=zt.group;if(pt.side===$t&&Et.layers.test(ne.layers)){const $n=pt.side;pt.side=pi,pt.needsUpdate=!0,Ks(Et,re,ne,tt,pt,Tt),pt.side=$n,pt.needsUpdate=!0,xt=!0}}xt===!0&&(se.updateMultisampleRenderTarget(we),se.updateRenderTargetMipmap(we))}w.setRenderTarget(je,Be,rt),w.setClearColor(ue,fe),Ze!==void 0&&(ne.viewport=Ze),w.toneMapping=st}function ps(C,$,re){const ne=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,we=C.length;Z<we;Z++){const Ue=C[Z],je=Ue.object,Be=Ue.geometry,rt=Ue.group;let st=Ue.material;st.allowOverride===!0&&ne!==null&&(st=ne),je.layers.test(re.layers)&&Ks(je,$,re,Be,st,rt)}}function Ks(C,$,re,ne,Z,we){C.onBeforeRender(w,$,re,ne,Z,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(w,$,re,ne,C,we),Z.transparent===!0&&Z.side===$t&&Z.forceSinglePass===!1?(Z.side=pi,Z.needsUpdate=!0,w.renderBufferDirect(re,$,ne,Z,C,we),Z.side=ls,Z.needsUpdate=!0,w.renderBufferDirect(re,$,ne,Z,C,we),Z.side=$t):w.renderBufferDirect(re,$,ne,Z,C,we),C.onAfterRender(w,$,re,ne,Z,we)}function ms(C,$,re){$.isScene!==!0&&($=Ve);const ne=oe.get(C),Z=u.state.lights,we=u.state.shadowsArray,Ue=Z.state.version,je=ce.getParameters(C,Z.state,we,$,re),Be=ce.getProgramCacheKey(je);let rt=ne.programs;ne.environment=C.isMeshStandardMaterial?$.environment:null,ne.fog=$.fog,ne.envMap=(C.isMeshStandardMaterial?it:Ke).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",_e),rt=new Map,ne.programs=rt);let st=rt.get(Be);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Ue)return gs(C,je),st}else je.uniforms=ce.getUniforms(C),C.onBeforeCompile(je,w),st=ce.acquireProgram(je,Be),rt.set(Be,st),ne.uniforms=je.uniforms;const Ze=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),gs(C,je),ne.needsLights=wl(C),ne.lightsStateVersion=Ue,ne.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Yn(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Oc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function gs(C,$){const re=oe.get(C);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Sl(C,$,re,ne,Z){$.isScene!==!0&&($=Ve),se.resetTextureUnits();const we=$.fog,Ue=ne.isMeshStandardMaterial?$.environment:null,je=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Yo,Be=(ne.isMeshStandardMaterial?it:Ke).get(ne.envMap||Ue),rt=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,st=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Dt=!!re.morphAttributes.color;let Ot=ss;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ot=w.toneMapping);const zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Et=zt!==void 0?zt.length:0,tt=oe.get(ne),pt=u.state.lights;if(Re===!0&&(me===!0||C!==S)){const An=C===S&&ne.id===T;Ee.setState(ne,C,An)}let Tt=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==pt.state.version||tt.outputColorSpace!==je||Z.isBatchedMesh&&tt.batching===!1||!Z.isBatchedMesh&&tt.batching===!0||Z.isBatchedMesh&&tt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&tt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&tt.instancing===!1||!Z.isInstancedMesh&&tt.instancing===!0||Z.isSkinnedMesh&&tt.skinning===!1||!Z.isSkinnedMesh&&tt.skinning===!0||Z.isInstancedMesh&&tt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&tt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&tt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&tt.instancingMorph===!1&&Z.morphTexture!==null||tt.envMap!==Be||ne.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ee.numPlanes||tt.numIntersection!==Ee.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==st||tt.morphTargets!==Ze||tt.morphNormals!==xt||tt.morphColors!==Dt||tt.toneMapping!==Ot||tt.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,tt.__version=ne.version);let $n=tt.currentProgram;Tt===!0&&($n=ms(ne,$,Z));let ur=!1,Bn=!1,dr=!1;const jt=$n.getUniforms(),ri=tt.uniforms;if(G.useProgram($n.program)&&(ur=!0,Bn=!0,dr=!0),ne.id!==T&&(T=ne.id,Bn=!0),ur||S!==C){G.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),jt.setValue(F,"projectionMatrix",C.projectionMatrix),jt.setValue(F,"viewMatrix",C.matrixWorldInverse);const bn=jt.map.cameraPosition;bn!==void 0&&bn.setValue(F,ve.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&jt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Bn=!0,dr=!0)}if(Z.isSkinnedMesh){jt.setOptional(F,Z,"bindMatrix"),jt.setOptional(F,Z,"bindMatrixInverse");const An=Z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),jt.setValue(F,"boneTexture",An.boneTexture,se))}Z.isBatchedMesh&&(jt.setOptional(F,Z,"batchingTexture"),jt.setValue(F,"batchingTexture",Z._matricesTexture,se),jt.setOptional(F,Z,"batchingIdTexture"),jt.setValue(F,"batchingIdTexture",Z._indirectTexture,se),jt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&jt.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const si=re.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&ye.update(Z,re,$n),(Bn||tt.receiveShadow!==Z.receiveShadow)&&(tt.receiveShadow=Z.receiveShadow,jt.setValue(F,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ri.envMap.value=Be,ri.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&$.environment!==null&&(ri.envMapIntensity.value=$.environmentIntensity),Bn&&(jt.setValue(F,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&ra(ri,dr),we&&ne.fog===!0&&xe.refreshFogUniforms(ri,we),xe.refreshMaterialUniforms(ri,ne,O,K,u.state.transmissionRenderTarget[C.id]),Oc.upload(F,Yn(tt),ri,se)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Oc.upload(F,Yn(tt),ri,se),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&jt.setValue(F,"center",Z.center),jt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(F,"normalMatrix",Z.normalMatrix),jt.setValue(F,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const An=ne.uniformsGroups;for(let bn=0,Zi=An.length;bn<Zi;bn++){const Ji=An[bn];ft.update(Ji,$n),ft.bind(Ji,$n)}}return $n}function ra(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function wl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,$,re){const ne=oe.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=$,oe.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const re=oe.get(C);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const El=F.createFramebuffer();this.setRenderTarget=function(C,$=0,re=0){N=C,P=$,I=re;let ne=!0,Z=null,we=!1,Ue=!1;if(C){const Be=oe.get(C);if(Be.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Be.__hasExternalTextures)se.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&oe.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ue=!0);const st=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[$])?Z=st[$][re]:Z=st[$],we=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Z=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?Z=st[re]:Z=st,k.copy(C.viewport),W.copy(C.scissor),te=C.scissorTest}else k.copy(Me).multiplyScalar(O).floor(),W.copy(De).multiplyScalar(O).floor(),te=dt;if(re!==0&&(Z=El),G.bindFramebuffer(F.FRAMEBUFFER,Z)&&ne&&G.drawBuffers(C,Z),G.viewport(k),G.scissor(W),G.setScissorTest(te),we){const Be=oe.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,re)}else if(Ue){const Be=$;for(let rt=0;rt<C.textures.length;rt++){const st=oe.get(C.textures[rt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+rt,st.__webglTexture,re,Be)}}else if(C!==null&&re!==0){const Be=oe.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,re)}T=-1},this.readRenderTargetPixels=function(C,$,re,ne,Z,we,Ue,je=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){G.bindFramebuffer(F.FRAMEBUFFER,Be);try{const rt=C.textures[je],st=rt.format,Ze=rt.type;if(!nt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ne&&re>=0&&re<=C.height-Z&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels($,re,ne,Z,ze.convert(st),ze.convert(Ze),we))}finally{const rt=N!==null?oe.get(N).__webglFramebuffer:null;G.bindFramebuffer(F.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,$,re,ne,Z,we,Ue,je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if($>=0&&$<=C.width-ne&&re>=0&&re<=C.height-Z){G.bindFramebuffer(F.FRAMEBUFFER,Be);const rt=C.textures[je],st=rt.format,Ze=rt.type;if(!nt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels($,re,ne,Z,ze.convert(st),ze.convert(Ze),0);const Dt=N!==null?oe.get(N).__webglFramebuffer:null;G.bindFramebuffer(F.FRAMEBUFFER,Dt);const Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gS(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.deleteBuffer(xt),F.deleteSync(Ot),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,re=0){const ne=Math.pow(2,-re),Z=Math.floor(C.image.width*ne),we=Math.floor(C.image.height*ne),Ue=$!==null?$.x:0,je=$!==null?$.y:0;se.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Ue,je,Z,we),G.unbindTexture()};const sa=F.createFramebuffer(),Du=F.createFramebuffer();this.copyTextureToTexture=function(C,$,re=null,ne=null,Z=0,we=null){we===null&&(Z!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Z,Z=0):we=0);let Ue,je,Be,rt,st,Ze,xt,Dt,Ot;const zt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(re!==null)Ue=re.max.x-re.min.x,je=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,rt=re.min.x,st=re.min.y,Ze=re.isBox3?re.min.z:0;else{const si=Math.pow(2,-Z);Ue=Math.floor(zt.width*si),je=Math.floor(zt.height*si),C.isDataArrayTexture?Be=zt.depth:C.isData3DTexture?Be=Math.floor(zt.depth*si):Be=1,rt=0,st=0,Ze=0}ne!==null?(xt=ne.x,Dt=ne.y,Ot=ne.z):(xt=0,Dt=0,Ot=0);const Et=ze.convert($.format),tt=ze.convert($.type);let pt;$.isData3DTexture?(se.setTexture3D($,0),pt=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(se.setTexture2DArray($,0),pt=F.TEXTURE_2D_ARRAY):(se.setTexture2D($,0),pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const Tt=F.getParameter(F.UNPACK_ROW_LENGTH),$n=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ur=F.getParameter(F.UNPACK_SKIP_PIXELS),Bn=F.getParameter(F.UNPACK_SKIP_ROWS),dr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);const jt=C.isDataArrayTexture||C.isData3DTexture,ri=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const si=oe.get(C),An=oe.get($),bn=oe.get(si.__renderTarget),Zi=oe.get(An.__renderTarget);G.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),G.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ji=0;Ji<Be;Ji++)jt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,Z,Ze+Ji),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.get($).__webglTexture,we,Ot+Ji)),F.blitFramebuffer(rt,st,Ue,je,xt,Dt,Ue,je,F.DEPTH_BUFFER_BIT,F.NEAREST);G.bindFramebuffer(F.READ_FRAMEBUFFER,null),G.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||oe.has(C)){const si=oe.get(C),An=oe.get($);G.bindFramebuffer(F.READ_FRAMEBUFFER,sa),G.bindFramebuffer(F.DRAW_FRAMEBUFFER,Du);for(let bn=0;bn<Be;bn++)jt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,si.__webglTexture,Z,Ze+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,si.__webglTexture,Z),ri?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,An.__webglTexture,we,Ot+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,An.__webglTexture,we),Z!==0?F.blitFramebuffer(rt,st,Ue,je,xt,Dt,Ue,je,F.COLOR_BUFFER_BIT,F.NEAREST):ri?F.copyTexSubImage3D(pt,we,xt,Dt,Ot+bn,rt,st,Ue,je):F.copyTexSubImage2D(pt,we,xt,Dt,rt,st,Ue,je);G.bindFramebuffer(F.READ_FRAMEBUFFER,null),G.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ri?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(pt,we,xt,Dt,Ot,Ue,je,Be,Et,tt,zt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(pt,we,xt,Dt,Ot,Ue,je,Be,Et,zt.data):F.texSubImage3D(pt,we,xt,Dt,Ot,Ue,je,Be,Et,tt,zt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,we,xt,Dt,Ue,je,Et,tt,zt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,we,xt,Dt,zt.width,zt.height,Et,zt.data):F.texSubImage2D(F.TEXTURE_2D,we,xt,Dt,Ue,je,Et,tt,zt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$n),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ur),F.pixelStorei(F.UNPACK_SKIP_ROWS,Bn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dr),we===0&&$.generateMipmaps&&F.generateMipmap(pt),G.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),G.unbindTexture()},this.resetState=function(){P=0,I=0,N=null,G.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}var z1;const Rt=(z1=window.Telegram)==null?void 0:z1.WebApp,N1="/yggdrasil-tma/",Mc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],KA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],U1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},F1=()=>{try{const t={...U1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...U1,watch:Date.now()}}},Aa=()=>new Date().toISOString().slice(0,10),ZA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Ef=[3,5,8,12,18,25,40],JA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],QA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Tf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],ba={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},k1={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Af={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},bf={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Hr({name:t,className:e}){return q.jsx("img",{src:t.includes(".")?`${N1}img/${t}`:`${N1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const eb=`
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
`,bs=(t,e=.9,n=0)=>new Pe({color:t,roughness:e,metalness:n}),j=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},O1=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),c=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,h=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,p=Math.min(1,l*1.4);i.setX(r,s+(c-.5)*e*(.45+p)),i.setZ(r,a+(h-.5)*e*(.35+p)),i.setY(r,o+(c+h-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t};function tb(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function nb(t){const e=new qe,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=bs(i,.92),c=bs(s,.9),h=bs(o,.96),p=bs(r,.95),m=bs(a,.78),g=bs(2106150,.98),M=new B(new li(.28,.24,5,8),h);M.position.y=.72,e.add(M);const E=new B(new li(n?.37:.32,.56,6,10),c);E.position.y=1.15,e.add(E);const _=new B(new li(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const u=new B(new ot(.36,.38,.09,12),h);u.position.y=.93,e.add(u);const v=new B(new Fn(.12,.12,.055),m);v.position.set(0,.93,.38),e.add(v);const x=new B(new ot(.13,.15,.18,10),l);x.position.y=1.63,e.add(x);const w=new B(new ht(.31,16,12),l);w.scale.set(.92,1.06,.92),w.position.y=1.91,e.add(w);const R=new B(new ht(.325,14,10),p);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new B(new li(.18,.3,5,8),p);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const I=new B(new pn(.045,.13,5),l);I.rotation.x=Math.PI/2,I.position.set(0,1.92,.3),e.add(I);const N=new Pe({color:1513754,roughness:.55});for(const J of[-.105,.105]){const de=new B(new ht(.025,7,5),N);de.position.set(J,1.98,.285),e.add(de)}if(n){const J=new B(new ht(.19,10,7),p);J.scale.set(.82,1,.72),J.position.set(0,1.8,.24),e.add(J)}else{const J=new B(new li(.055,.42,4,7),p);J.position.set(-.27,1.78,-.08),J.rotation.z=-.22,e.add(J)}const T=J=>{const de=new qe;de.position.set(J*(n?.43:.39),1.43,0),de.rotation.z=J*.07;const Me=new B(new li(.105,.42,5,7),c);Me.position.y=-.23,de.add(Me);const De=new qe;De.position.y=-.46,de.add(De);const dt=new B(new li(.085,.34,5,7),h);dt.position.y=-.2,De.add(dt);const ut=new B(new ht(.105,9,7),l);return ut.position.y=-.43,De.add(ut),e.add(de),{upper:de,elbow:De}},S=T(-1),k=T(1),W=J=>{const de=new qe;de.position.set(J*.15,.68,0);const Me=new B(new li(.12,.42,5,7),g);Me.position.y=-.23,de.add(Me);const De=new qe;De.position.y=-.48,de.add(De);const dt=new B(new li(.095,.4,5,7),g);dt.position.y=-.22,De.add(dt);const ut=new B(new li(.13,.24,5,7),h);return ut.scale.z=1.25,ut.position.set(0,-.47,.075),De.add(ut),e.add(de),de},te=W(-1),ue=W(1),fe=new B(new li(.42,.1,5,8),h);fe.scale.z=.72,fe.position.y=1.48,e.add(fe);const V=new B(new Fn(.58,.92,.075),bs(t.id==="berserk"?2821132:1582894,.98));V.position.set(0,1.05,-.28),V.rotation.x=-.035,e.add(V);const K=new qe;if(t.id==="berserk"||t.id==="dwarf"){const J=new B(new ot(.035,.045,.72,7),h);J.position.y=.36,K.add(J);const de=new B(new Fn(.16,.34,.055),m);de.position.set(0,.88,0),de.rotation.z=t.id==="dwarf"?-.22:.22,K.add(de)}else{const J=new B(new ot(.028,.04,1.1,7),h);J.position.y=.52,K.add(J);const de=new B(new pn(.075,.25,6),m);de.position.y=1.18,K.add(de)}if(K.position.set(.43,.32,.03),K.rotation.z=-.12,e.add(K),t.id==="viking"||t.id==="berserk"){const J=new B(new ot(.3,.3,.1,16),h);J.rotation.x=Math.PI/2,J.position.set(0,1.12,-.37),e.add(J);const de=new B(new ht(.065,8,6),m);de.position.set(0,1.12,-.43),e.add(de)}const O=new B(new Zn(.62,24),new At({color:0,transparent:!0,opacity:.32}));return O.rotation.x=-Math.PI/2,O.position.y=.02,e.add(O),e.userData.anim={armL:S,armR:k,legL:te,legR:ue,weapon:K,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},tb(e)}function ib({h:t,on:e,eventDone:n}){const i=St.useRef(null),r=St.useRef(null),s=St.useRef(null),o=St.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=St.useState(""),[c,h]=St.useState(!1),[p,m]=St.useState(!1),[g,M]=St.useState(!1),[E,_]=St.useState(!1),u=St.useRef({x:0,z:1}),v=St.useRef(!1),x=St.useRef(null);St.useEffect(()=>{const T=i.current;if(!T)return;const S=new HS;S.background=new wt(10203557),S.fog=new mm(10137250,.0036);const k=new Mi(54,1,.1,280);k.position.set(0,8.5,17);const W=new $A({antialias:!0,powerPreference:"high-performance"});W.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),W.shadowMap.enabled=!0,W.shadowMap.type=ex,W.outputColorSpace=kn,W.toneMapping=nx,W.toneMappingExposure=1.03,T.appendChild(W.domElement);const te=new lw(15069413,6714207,1.12);S.add(te);const ue=new o1(16767405,2.45);ue.position.set(-42,58,34),ue.castShadow=!0,ue.shadow.mapSize.set(1536,1536),ue.shadow.camera.left=-95,ue.shadow.camera.right=95,ue.shadow.camera.top=95,ue.shadow.camera.bottom=-95,ue.shadow.bias=-5e-4,S.add(ue);const fe=new o1(12111056,.68);fe.position.set(55,18,-60),S.add(fe);const V=(d,y)=>{const f=Math.sin(d*.075)*.7+Math.cos(y*.062)*.55+Math.sin((d-y)*.045)*.35,A=Math.exp(-(d*d/850+(y+2)*(y+2)/1050)),U=Math.exp(-(d*d/150+(y-12)*(y-12)/2200));return f*(1-A*.88)-U*.18},K=d=>{const y=document.createElement("canvas");y.width=y.height=512;const f=y.getContext("2d"),A=L=>Math.abs(Math.sin(L*12.9898)*43758.5453)%1;if(d==="ground"){f.fillStyle="#4c6042",f.fillRect(0,0,512,512);for(let L=0;L<1800;L++){const X=A(L*1.17)*512,Q=A(L*2.31)*512,ie=10+A(L*3.71)*28,H=A(L*4.13);f.fillStyle=H>.72?`rgba(96,108,63,${.08+A(L)*.12})`:`rgba(30,36,25,${.05+A(L)*.12})`,f.beginPath(),f.arc(X,Q,ie,0,Math.PI*2),f.fill()}for(let L=0;L<650;L++){const X=A(L*7.1)*512,Q=A(L*8.2)*512;f.strokeStyle=`rgba(142,154,91,${.18+A(L*2)*.15})`,f.lineWidth=1+A(L*4)*1.5,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(L*5)-.5)*5,Q-3-A(L*6)*5),f.stroke()}}else if(d==="wood"){f.fillStyle="#5a3d29",f.fillRect(0,0,512,512);for(let L=0;L<512;L+=22)f.fillStyle=`rgba(25,15,9,${.18+A(L)*.13})`,f.fillRect(0,L,512,3),f.strokeStyle=`rgba(154,111,69,${.08+A(L*2)*.08})`,f.lineWidth=2,f.beginPath(),f.moveTo(0,L+7),f.bezierCurveTo(150,L+2,340,L+13,512,L+5),f.stroke();for(let L=0;L<65;L++){const X=A(L*2.1)*512;f.fillStyle=`rgba(20,12,8,${.12+A(L*3)*.16})`,f.fillRect(X,0,2+A(L*4)*3,512)}}else if(d==="roof"){f.fillStyle="#252522",f.fillRect(0,0,512,512);for(let L=-30;L<550;L+=25){f.fillStyle=`rgba(105,94,77,${.12+A(L)*.08})`,f.fillRect(0,L,512,2),f.strokeStyle="rgba(12,12,11,.48)",f.lineWidth=3;for(let X=-40;X<560;X+=38)f.beginPath(),f.moveTo(X,L),f.lineTo(X-18,L+28),f.stroke()}for(let L=0;L<180;L++)f.fillStyle=`rgba(170,154,123,${.03+A(L)*.07})`,f.fillRect(A(L*2)*512,A(L*3)*512,2+A(L*4)*7,2)}else if(d==="bark"){f.fillStyle="#7b5a3f",f.fillRect(0,0,512,512);for(let L=0;L<76;L++){const X=A(L*2.1)*512,Q=2+A(L*3.7)*7;f.fillStyle=`rgba(${24+A(L)*24},${16+A(L*4)*18},${10+A(L*5)*14},${.18+A(L*6)*.22})`,f.fillRect(X,0,Q,512)}for(let L=0;L<80;L++){const X=A(L*7.1)*512,Q=A(L*8.2)*512;f.strokeStyle=`rgba(126,91,60,${.07+A(L*2)*.09})`,f.lineWidth=1+A(L*3)*2,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(L*4)-.5)*12,Q+18+A(L*5)*45),f.stroke()}}else if(d==="foliage"){f.fillStyle="#68865a",f.fillRect(0,0,512,512);for(let L=0;L<1900;L++){const X=A(L*1.17)*512,Q=A(L*2.31)*512,ie=A(L*3.7),H=ie>.72?112:ie>.36?92:74,pe=ie>.72?145:ie>.36?121:98,ge=ie>.72?76:ie>.36?60:48;f.fillStyle=`rgba(${H},${pe},${ge},${.16+A(L*4)*.28})`,f.beginPath(),f.arc(X,Q,1.5+A(L*5)*4.5,0,Math.PI*2),f.fill()}for(let L=0;L<260;L++){const X=A(L*9.1)*512,Q=A(L*10.2)*512;f.strokeStyle=`rgba(18,31,22,${.08+A(L*3)*.12})`,f.lineWidth=1,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(L*2)-.5)*10,Q+(A(L*4)-.5)*10),f.stroke()}}else{f.fillStyle="#514333",f.fillRect(0,0,512,512);for(let L=0;L<1300;L++){const X=A(L*1.3)*512,Q=A(L*2.7)*512;f.fillStyle=`rgba(${45+A(L*3)*38},${35+A(L*4)*28},${23+A(L*5)*20},${.08+A(L*6)*.18})`,f.fillRect(X,Q,2+A(L*7)*7,1+A(L*8)*4)}}const U=new mo(y);return U.wrapS=U.wrapT=jr,U.colorSpace=kn,U.anisotropy=4,U},J=(()=>{const d=document.createElement("canvas");d.width=d.height=128;const y=d.getContext("2d"),f=y.createImageData(128,128);for(let L=0;L<128;L++)for(let X=0;X<128;X++){const Q=(L*128+X)*4,ie=Math.sin(X*.37)*.3+Math.sin(L*.61)*.24+Math.sin((X+L)*.17)*.2+Math.sin((X-L)*.09)*.14,H=Math.max(214,Math.min(250,Math.round(232+ie*18)));f.data[Q]=H,f.data[Q+1]=H,f.data[Q+2]=H,f.data[Q+3]=255}y.putImageData(f,0,0);const A=new mo(d);A.wrapS=A.wrapT=jr,A.repeat.set(5,5);const U=new mo(d);return U.wrapS=U.wrapT=jr,U.repeat.set(4,4),{height:A,rough:U}})(),de=K("ground");de.repeat.set(5,6);const Me=K("bark");Me.wrapS=Me.wrapT=jr,Me.repeat.set(1.2,1.8);const De=K("foliage");De.wrapS=De.wrapT=jr,De.repeat.set(1.35,1.35);const dt=new Xn(190,190,62,62),ut=dt.attributes.position;for(let d=0;d<ut.count;d++){const y=ut.getX(d),f=-ut.getY(d);ut.setZ(d,V(y,f))}dt.rotateX(-Math.PI/2),dt.computeVertexNormals();const Re=new Pe({map:de,roughness:.985,metalness:0,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.018}),me=new B(dt,Re);me.receiveShadow=!0,S.add(me);const ae=(d,y,f)=>(y&&(d.userData={id:y,label:f||y}),d.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),S.add(d),y&&F.push(d),d),ve=(d,y=.9,f=0)=>new Pe({color:d,roughness:y,metalness:f,roughnessMap:J.rough,bumpMap:J.height,bumpScale:f>.35?.008:.018}),le=(d,y,f,A,U=.9)=>new B(new Fn(d,y,f),ve(A,U)),Ve=(d,y,f,A=10,U=.9)=>new B(new ot(d,d,y,A),ve(f,U)),at=(d,y,f)=>{const A=Ve(y,d,f,10,.96);return A.rotation.z=Math.PI/2,A},dn=(d,y,f)=>{const A=new qe,U=d*.62,L=.61,X=new Pe({map:et,color:f,roughness:.96,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012,side:$t}),Q=new B(new Fn(U,.18,y),X),ie=Q.clone();return Q.rotation.z=L,ie.rotation.z=-L,Q.position.x=-d*.205,ie.position.x=d*.205,A.add(Q,ie),A},F=[],Ft=[],lt=[],nt=[],G=[],Ie=.62,oe=(d,y,f,A,U=0,L=.12)=>G.push({kind:"rect",x:d,z:y,w:f+L*2,d:A+L*2,rot:U}),se=(d,y,f,A=.12)=>G.push({kind:"circle",x:d,z:y,r:f+A}),Ke=(d,y,f,A,U,L=.12)=>G.push({kind:"segment",x1:d,z1:y,x2:f,z2:A,r:U+L}),it=(d,y,f)=>{if(f.kind==="circle")return Math.hypot(d-f.x,y-f.z)<f.r+Ie;if(f.kind==="rect"){const H=Math.cos(f.rot),pe=Math.sin(f.rot),ge=d-f.x,Oe=y-f.z,Ce=H*ge-pe*Oe,Je=pe*ge+H*Oe,mt=Math.max(-f.w/2,Math.min(f.w/2,Ce)),It=Math.max(-f.d/2,Math.min(f.d/2,Je));return Math.hypot(Ce-mt,Je-It)<Ie}const A=f.x2-f.x1,U=f.z2-f.z1,L=A*A+U*U,X=L>0?Math.max(0,Math.min(1,((d-f.x1)*A+(y-f.z1)*U)/L)):0,Q=f.x1+A*X,ie=f.z1+U*X;return Math.hypot(d-Q,y-ie)<f.r+Ie},D=(d,y)=>v.current?d<Rn-2.72||d>Rn+2.72||y<yn-2.05||y>yn+2.3:G.some(f=>it(d,y,f)),b=(d,y,f)=>{if(v.current){const L=Math.max(Rn-2.55,Math.min(Rn+2.55,y)),X=Math.max(yn-1.92,Math.min(yn+2.55,f));d.x=L,d.z=X;return}const A=Math.max(-88,Math.min(88,y)),U=Math.max(-89,Math.min(89,f));if(!D(A,U)){d.x=A,d.z=U;return}D(A,d.z)||(d.x=A),D(d.x,U)||(d.z=U)},ee=ve(3425343,1);for(let d=0;d<22;d++){const y=new qe,f=-105+d*10,A=8+j(d,7)*9,U=new B(new pn(A,18+j(d,8)*16,7),ee);U.position.y=8,y.add(U),y.position.set(f,-1,-94+j(d,9)*11),ae(y)}const ce=[];for(let d=0;d<=32;d++)ce.push({z:-94+d*6,x:-57+Math.sin(d*.42)*4.2});const xe=[],he=[],ke=5.4;for(let d=0;d<ce.length;d++){const y=ce[d],f=ce[Math.max(0,d-1)],A=ce[Math.min(ce.length-1,d+1)],U=A.x-f.x,L=A.z-f.z,X=Math.max(.001,Math.hypot(U,L)),Q=-L/X,ie=U/X,H=V(y.x,y.z)+.055;for(const pe of[-1,1]){const ge=ke*pe;xe.push(y.x+Q*ge,H+Math.sin(d*1.7+pe)*.035,y.z+ie*ge)}if(d<ce.length-1){const pe=d*2;he.push(pe,pe+1,pe+2,pe+1,pe+3,pe+2)}}const Ee=new gn;Ee.setAttribute("position",new bt(xe,3)),Ee.setIndex(he),Ee.computeVertexNormals();const Ye=new B(Ee,new Pe({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));Ye.receiveShadow=!0,S.add(Ye);const $e=[];for(let d=0;d<34;d++){const y=ce[Math.min(ce.length-1,Math.floor(d*.94))],f=.7+j(d,1500)*1.35,A=new B(new xm(f*.45,f,12),new At({color:10998996,transparent:!0,opacity:.12,side:$t}));A.rotation.x=-Math.PI/2,A.scale.y=.42,A.position.set(y.x+(j(d,1501)-.5)*4.5,V(y.x,y.z)+.075,y.z+(j(d,1502)-.5)*4),S.add(A),$e.push({mesh:A,phase:j(d,1503)*Math.PI*2})}for(let d=0;d<52;d++){const y=Math.min(ce.length-1,Math.floor(d*.62)),f=ce[y],A=ce[Math.max(0,y-1)],U=ce[Math.min(ce.length-1,y+1)],L=U.x-A.x,X=U.z-A.z,Q=Math.max(.001,Math.hypot(L,X)),ie=d%2===0?-1:1,H=.34+j(d,15)*.72,pe=ke+ie*(.25+j(d,16)*1.4),ge=new B(new sn(H,1),ve(6185562,1));ge.position.set(f.x+-X/Q*pe,V(f.x,f.z)+.18,f.z+L/Q*pe),ge.scale.y=.5+j(d,17)*.35,ae(ge),se(ge.position.x,ge.position.z,H*.75,.03)}const ye=(d,y)=>{const f=d.map(([Q,ie])=>new z(Q,V(Q,ie)+.035,ie)),A=[],U=[];for(let Q=0;Q<f.length;Q++){const ie=f[Math.max(0,Q-1)],H=f[Math.min(f.length-1,Q+1)],pe=H.x-ie.x,ge=H.z-ie.z,Oe=Math.max(.001,Math.hypot(pe,ge)),Ce=-ge/Oe,Je=pe/Oe;if(A.push(f[Q].x+Ce*y/2,f[Q].y,f[Q].z+Je*y/2,f[Q].x-Ce*y/2,f[Q].y+.01,f[Q].z-Je*y/2),Q<f.length-1){const mt=Q*2;U.push(mt,mt+1,mt+2,mt+1,mt+3,mt+2)}}const L=new gn;L.setAttribute("position",new bt(A,3)),L.setIndex(U),L.computeVertexNormals();const X=new B(L,new Pe({map:K("road"),roughness:1}));X.receiveShadow=!0,S.add(X),[-y*.22,y*.22].forEach(Q=>{const ie=f.map((ge,Oe)=>{const Ce=f[Math.max(0,Oe-1)],Je=f[Math.min(f.length-1,Oe+1)],mt=Je.x-Ce.x,It=Je.z-Ce.z,tn=Math.max(.001,Math.hypot(mt,It));return new z(ge.x+-It/tn*Q,ge.y+.045,ge.z+mt/tn*Q)}),H=new Wa(new lp(ie),Math.max(12,f.length*4),.055,5,!1),pe=new B(H,ve(3352863,1));pe.scale.y=.12,S.add(pe)})};ye([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),ye([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),ye([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),ye([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),ye([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),ye([[4,14],[-3,22],[-7,31],[-8,42]],3.8),ye([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),ye([[4,14],[10,28],[18,41],[27,57]],3.8),ye([[5,31],[15,45],[27,57],[39,70]],3.7),ye([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),ye([[-39,-8],[-47,-12],[-53,-15]],3.4);const Ne=K("wood");Ne.repeat.set(2,1);const et=K("roof");et.repeat.set(2,2);const ze=(d,y,f,A,U,L,X,Q,ie)=>{const H=new qe;H.rotation.y=U,H.position.set(d,V(d,y),y),H.userData={id:X,label:L};const pe=new Pe({map:Ne,color:Q,roughness:.94,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.014}),ge=le(f+.7,.55,A+.7,5724755,1);ge.position.y=.28,H.add(ge);for(let Nt=0;Nt<7;Nt++){const Ut=.62+Nt*.47,cn=at(f-Nt%2*.2,.29,Q);cn.material=pe,cn.position.set(0,Ut,A*.5-.03),H.add(cn);const Nn=cn.clone();Nn.position.z=-A*.5+.03,H.add(Nn);const oi=at(A+.06,.29,Q);oi.material=pe,oi.rotation.y=Math.PI/2,oi.position.set(-f*.5+.03,Ut,0),H.add(oi);const He=oi.clone();He.position.x=f*.5-.03,H.add(He)}for(const Nt of[-f*.5,f*.5])for(const Ut of[-A*.5,A*.5]){const cn=Ve(.34,3.75,3482649,8,1);cn.position.set(Nt,2.05,Ut),H.add(cn)}const Oe=le(1.18,2.05,.18,2365458,1);Oe.position.set(0,1.37,A*.5+.31),H.add(Oe);for(const Nt of[-.67,.67]){const Ut=le(.15,2.28,.24,3811613,1);Ut.position.set(Nt,1.42,A*.5+.34),H.add(Ut)}const Ce=at(1.65,.11,3679770);Ce.position.set(0,2.53,A*.5+.34),H.add(Ce);const Je=Ve(.055,.12,13015634,8,.55);Je.rotation.z=Math.PI/2,Je.position.set(.33,1.38,A*.5+.43),H.add(Je);const mt=new Pe({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Nt of[-f*.27,f*.27]){const Ut=le(1.28,1.02,.13,3154457,1);Ut.position.set(Nt,2.02,A*.5+.29),H.add(Ut);const cn=le(.94,.7,.055,15251295,.45);cn.material=mt,cn.position.set(Nt,2.02,A*.5+.36),H.add(cn);const Nn=le(.07,.78,.09,3154457,1);Nn.position.set(Nt,2.02,A*.5+.4),H.add(Nn);const oi=le(1.05,.07,.09,3154457,1);oi.position.set(Nt,2.02,A*.5+.4),H.add(oi)}const It=dn(f+1.55,A+1.35,ie);It.position.y=4.18,H.add(It);for(const Nt of[-1,1]){const Ut=at(A+1.48,.12,3154715);Ut.position.set(Nt*(f*.46),3.78,0),Ut.rotation.y=Math.PI/2,H.add(Ut)}const tn=at(A+1.45,.18,2760730);tn.rotation.y=Math.PI/2,tn.position.y=5.28,H.add(tn);const Bt=le(f*.34,.16,1.05,6439467,1);Bt.position.set(0,.64,A*.5+.66),H.add(Bt);for(const Nt of[-f*.16,f*.16]){const Ut=at(.85,.08,4796447);Ut.rotation.y=Math.PI/2,Ut.position.set(Nt,.83,A*.5+.95),H.add(Ut)}const Yt=Ve(.34,2,5722958,8,1);Yt.position.set(f*.25,5.05,-A*.1),H.add(Yt);const qt=le(.72,.14,.72,3157289,1);qt.position.set(f*.25,6.08,-A*.1),H.add(qt),ae(H,X,L),F.push(H),oe(d,y,f+.85,A+.85,U,.05)};ze(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ze(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ze(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ze(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ze(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ze(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new qe;Te.position.set(-10,V(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let d=0;d<7;d++){const y=.62+d*.47,f=at(9,.27,4401693);f.position.set(0,y,-2.85),Te.add(f);const A=at(6,.27,4401693);A.rotation.y=Math.PI/2,A.position.set(-4.35,y,0),Te.add(A)}for(const d of[-4.35,4.35]){const y=Ve(.34,4,2825493,9,1);y.position.set(d,2,-2.85),Te.add(y)}const ft=dn(9.8,7,2433825);ft.position.y=4.45,Te.add(ft);const Y=at(7.2,.18,2169366);Y.rotation.y=Math.PI/2,Y.position.y=5.42,Te.add(Y);for(const d of[-3.7,3.7]){const y=at(4.7,.13,2825494);y.rotation.z=d<0?-.6:.6,y.position.set(d*.48,3.15,.1),Te.add(y)}const be=Ve(1.15,1.65,3420462,10,1);be.position.set(-2,.83,1.15),Te.add(be);const Le=Ve(.88,.35,2565925,10,1);Le.position.set(-2,1.83,1.15),Te.add(Le);const Ge=new B(new Zn(.52,16),new Pe({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));Ge.rotation.y=Math.PI,Ge.position.set(-2,1.02,2.23),Te.add(Ge);const Se=Ve(.27,.85,2697770,8,.45);Se.position.set(1.15,.43,1.05),Te.add(Se);const _e=le(1.45,.34,.58,2435114,.38);_e.position.set(1.15,1,1.05),Te.add(_e);const Xe=new B(new pn(.18,.72,8),ve(2435114,.38,.05));Xe.rotation.z=-Math.PI/2,Xe.position.set(1.98,1,1.05),Te.add(Xe);for(let d=0;d<4;d++){const y=at(1.25,.045,11184548);y.rotation.z=-.35+d*.18,y.position.set(2.05+d*.18,1.12,1.34),Te.add(y)}const ct=le(1.15,.42,.62,3876893,1);ct.position.set(2.15,.72,-.8),ct.rotation.z=-.18,Te.add(ct);const kt=Ve(.07,.55,5980979,8,1);kt.rotation.z=Math.PI/2,kt.position.set(1.55,.84,-.8),Te.add(kt),ae(Te,"forge","Кузница"),F.push(Te),oe(-10,-5,9.6,6.6,0,.05);const Ct=new Hi(16742962,3.4,14,2);Ct.position.set(-12,V(-12,-5)+2.2,-4),S.add(Ct);const ii=new B(new Zn(8.5,32),new Pe({color:7035463,roughness:1}));ii.rotation.x=-Math.PI/2,ii.position.set(1,V(1,0)+.05,0),ii.receiveShadow=!0,S.add(ii);for(let d=0;d<18;d++){const y=d/18*Math.PI*2,f=new B(new sn(.38,1),ve(7039843,1));f.position.set(1+Math.cos(y)*8.8,V(1+Math.cos(y)*8.8,Math.sin(y)*8.8)+.22,Math.sin(y)*8.8),S.add(f)}const mi=(d,y)=>{const f=new qe,A=le(2.8,.22,1,6832937,1);A.position.y=1.05,f.add(A);for(const U of[-1.05,1.05]){const L=le(.16,1,.16,3877149,1);L.position.set(U,.5,-.32),f.add(L);const X=L.clone();X.position.z=.32,f.add(X)}f.position.set(d,V(d,y),y),S.add(f)};mi(-4,2),mi(7,3);const Lr=(d,y,f)=>{const A=new qe;A.position.set(d,V(d,y),y);for(let H=0;H<7;H++){const pe=H/7*Math.PI*2,ge=new B(new sn(.32*f,1),ve(6117970,1));ge.position.set(Math.cos(pe)*.7*f,.25*f,Math.sin(pe)*.7*f),A.add(ge)}const U=le(.2*f,.2*f,1.5*f,4861211,1),L=U.clone();U.rotation.y=.55,L.rotation.y=-.55,U.position.y=L.position.y=.38*f,A.add(U,L);const X=new Pe({color:16744744,emissive:16731402,emissiveIntensity:4}),Q=new B(new pn(.5*f,1.35*f,8),X);Q.position.y=1.02*f,A.add(Q),S.add(A);const ie=new Hi(16747068,2.4*f,12*f,2);return ie.position.set(d,V(d,y)+2*f,y),S.add(ie),Ft.push({light:ie,flame:Q,phase:j(d,y)*8}),A},vn=new qe;vn.userData={id:"mimir",label:"Колодец Мимира"},vn.position.set(1,V(1,0),0);const hs=new B(new Zn(1.18,32),new Pe({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));hs.rotation.x=-Math.PI/2,hs.position.y=.5,vn.add(hs);for(let d=0;d<3;d++){const y=new B(new Ht(.38+d*.28,.025,6,40),new At({color:d===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));y.rotation.x=Math.PI/2,y.position.y=.525,vn.add(y)}for(const d of[-1.35,1.35]){const y=le(.24,3,.24,4861984,1);y.position.set(d,1.55,0),vn.add(y)}const na=le(3.15,.26,.26,3679513,1);na.position.y=2.96,vn.add(na);const ia=new B(new ot(.035,.035,1.2,6),ve(8086088,1));ia.position.y=2.25,vn.add(ia);const ps=le(.58,.5,.58,5913383,1);ps.position.set(0,1.65,0),vn.add(ps);const Ks=new B(new Ht(1.55,.055,8,48),new Pe({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));Ks.rotation.x=Math.PI/2,Ks.position.y=.54,vn.add(Ks),ae(vn,"mimir","Колодец Мимира"),F.push(vn),se(1,0,2,.08);const ms=new Hi(7530656,2,10,2);ms.position.set(1,V(1,0)+1.5,0),S.add(ms),Lr(18,-15,.72);const Yn=(d,y,f,A,U=1.25)=>{const L=new qe,X=f-d,Q=A-y,ie=Math.hypot(X,Q),H=Math.max(1,Math.floor(ie/1.55));for(let pe=0;pe<=H;pe++){const ge=pe/H,Oe=d+X*ge,Ce=y+Q*ge,Je=le(.18,U,.18,4796447,1);Je.position.set(Oe,V(Oe,Ce)+U/2,Ce),L.add(Je)}for(const pe of[-.28,.38]){const ge=le(.14,.14,ie,5978917,1);ge.rotation.y=Math.atan2(X,Q),ge.position.set((d+f)/2,V((d+f)/2,(y+A)/2)+U*pe,(y+A)/2),L.add(ge)}S.add(L),Ke(d,y,f,A,.12,.02)},gs=(d,y,f,A,U,L,X)=>{const Q=new qe;Q.position.set(d,V(d,y),y),Q.rotation.y=U,Q.userData={id:X,label:L};const ie=le(f+.25,.35,A+.25,5591368,1);ie.position.y=.18,Q.add(ie);const H=new B(new Fn(f,2.5,A),new Pe({map:Ne,color:6439983,roughness:1}));H.position.y=1.45,Q.add(H);const pe=new B(new Fn(f+.6,.18,A+.65),new Pe({map:et,color:2696996,roughness:1}));pe.rotation.z=.55,pe.position.set(-.16,3,0),Q.add(pe);const ge=pe.clone();ge.rotation.z=-.55,ge.position.x=.16,Q.add(ge);const Oe=le(1.05,1.75,.12,2759700,1);Oe.position.set(0,1.05,A/2+.07),Q.add(Oe),ae(Q,X,L),F.push(Q),oe(d,y,f+.55,A+.55,U,.04)},Sl=(d,y,f=1)=>{const A=new qe;A.position.set(d,V(d,y),y);const U=new B(new ot(.65*f,.65*f,1.2*f,10),ve(9073729,1));U.rotation.z=Math.PI/2,U.position.y=.62*f,A.add(U);for(let L=0;L<3;L++){const X=new B(new Ht(.66*f,.025*f,5,18),ve(5851693,1));X.rotation.y=Math.PI/2,X.position.y=(.28+L*.34)*f,A.add(X)}ae(A)},ra=(d,y,f)=>{const A=new qe;A.position.set(d,V(d,y),y),A.rotation.y=f;const U=le(2.8,.28,1.45,6636331,1);U.position.y=1,A.add(U);for(const X of[-1.15,1.15])for(const Q of[-.55,.55]){const ie=le(.16,1.15,.16,4401950,1);ie.position.set(X,.55,Q),A.add(ie)}for(const X of[-1.15,1.15]){const Q=new B(new ot(.5,.5,.18,14),ve(2696738,1));Q.rotation.z=Math.PI/2,Q.position.set(X,.52,-.92),A.add(Q)}const L=le(.16,.16,2.4,4796447,1);L.rotation.x=Math.PI/2,L.position.set(0,.72,-2),A.add(L),ae(A)},wl=(d,y,f=0)=>{const A=new qe;A.position.set(d,V(d,y),y),A.rotation.y=f;const U=le(2.2,.16,.5,7359021,1);U.position.y=.85,A.add(U);for(const L of[-.78,.78]){const X=le(.12,.8,.12,4139549,1);X.position.set(L,.4,0),A.add(X)}ae(A)},El=(d,y)=>{const f=new qe;f.position.set(d,V(d,y),y);for(let X=0;X<10;X++){const Q=X/10*Math.PI*2,ie=le(.45,.38,.38,6710621,1);ie.position.set(Math.cos(Q)*.95,.19,Math.sin(Q)*.95),ie.rotation.y=Q,f.add(ie)}const A=le(.16,2.2,.16,4861984,1),U=A.clone();A.position.set(-.9,1.2,0),U.position.set(.9,1.2,0),f.add(A,U);const L=le(2,.16,.16,3876891,1);L.position.y=2.25,f.add(L),ae(f)};gs(-19,31,8,5,.08,"Амбар","barn"),gs(17,34,7,5,-.2,"Сарай","shed"),gs(27,13,6,4,.45,"Склад рыбака","fishshed"),Yn(-25,27,-13,27),Yn(-25,27,-25,38),Yn(-25,38,-14,38),Yn(12,29,25,29),Yn(25,29,25,40),Yn(25,40,12,40),Yn(29,-1,39,-1),Yn(39,-1,39,10),Yn(39,10,30,10);for(const d of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Sl(d[0],d[1],d[2]);ra(-17,24,.18),ra(29,-5,-.55),wl(-20,23,.18),wl(25,31,-.2),ze(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ze(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ze(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ze(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),oe(-31,8,7.8,5.8,.1,.04),oe(-27,20,7.8,5.8,-.25,.04),oe(31,18,7.8,5.8,.32,.04),oe(20,24,7.8,5.8,-.12,.04);const sa=(d,y,f)=>{const A=new qe;A.position.set(d,V(d,y),y),A.rotation.y=f;const U=le(3,.18,1.25,7357994,1);U.position.y=1.45,A.add(U);for(const X of[-1.25,1.25])for(const Q of[-.48,.48]){const ie=le(.13,1.45,.13,4270877,1);ie.position.set(X,.72,Q),A.add(ie)}const L=new B(new pn(1.65,2.5,4,1,!1,Math.PI/4),ve(4798510,1));L.scale.z=.55,L.position.y=2.15,A.add(L),ae(A)};sa(-5,-7,.12),sa(8,-5,-.18),sa(6,7,.5);for(const d of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])El(d[0],d[1]);const Du=(d,y,f=1)=>{const A=new qe,U=V(d,y);for(let L=0;L<5;L++){const X=new B(new ht((.28+j(L,d)*.18)*f,8,6),ve(L%2?3494457:4284223,1));X.position.set((j(L,2)-.5)*.7*f,.28*f,(j(L,3)-.5)*.7*f),A.add(X)}A.position.set(d,U,y),ae(A)};for(let d=0;d<48;d++){const y=j(d,501)*Math.PI*2,f=18+j(d,502)*39,A=Math.cos(y)*f,U=Math.sin(y)*f+4;Math.abs(A)<9&&Math.abs(U)<14||Du(A,U,.65+j(d,503)*.75)}for(let d=0;d<34;d++){const y=-84+j(d,610)*168,f=-82+j(d,611)*164;if(Math.hypot(y,f-2)<24)continue;const A=.25+j(d,612)*.55,U=new B(new sn(A,1),ve(5725013,1));U.scale.y=.55,U.position.set(y,V(y,f)+A*.28,f),U.rotation.set(j(d,613),j(d,614),j(d,615)),ae(U),se(y,f,A*.8,.03)}ze(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),gs(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Yn(-70,32,-60,32),Yn(-70,32,-70,43),Yn(-70,43,-61,43),Sl(-68,8,.9),ra(-62,2,-.25),El(-58,4);const C=new qe;C.position.set(-63,V(-63,47),47);for(let d=0;d<6;d++){const y=le(10,.035,.12,4208682,1);y.position.set(0,.02,(d-2.5)*1.05),y.rotation.y=.06,C.add(y)}ae(C);const $=(d,y)=>{const f=document.createElement("canvas");f.width=f.height=256;const A=f.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=y,A.shadowBlur=18,A.fillStyle=y,A.font="bold 150px serif",A.fillText(d,128,132),A.shadowBlur=4,A.globalAlpha=.55,A.font="bold 118px serif",A.fillText(d,128,132);const U=new mo(f);return U.colorSpace=kn,U.anisotropy=4,U},re=(d,y,f,A,U,L=.72,X=0)=>{const Q="#"+U.toString(16).padStart(6,"0"),ie=new At({map:$(A,Q),transparent:!0,depthWrite:!1,side:$t}),H=new B(new Xn(L,L),ie);return H.rotation.x=-Math.PI/2,H.rotation.z=X,H.position.set(y,.065,f),d.add(H),H},ne=new qe,Z=18,we=55;ne.position.set(Z,V(Z,we),we),ne.userData={id:"runefield",label:"Поле Рун"};const Ue=new Pe({color:5857629,roughness:.94,metalness:.04}),je=new Pe({color:3884096,roughness:1});new At({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:$t}),new At({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:$t}),new At({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:$t});const Be=new B(new Zn(12.2,48),new Pe({color:2636332,roughness:1,transparent:!0,opacity:.92}));Be.rotation.x=-Math.PI/2,Be.position.y=.018,ne.add(Be);const rt=new B(new ot(2.15,2.55,.48,10),je);rt.position.y=.24,rt.scale.z=.82,ne.add(rt);const st=new B(new sn(1.48,1),Ue);st.scale.set(1,1.65,.72),st.position.y=1.38,st.rotation.y=.18,ne.add(st);const Ze=new B(new sn(.78,1),Ue);Ze.scale.set(.72,1.15,.55),Ze.position.set(0,2.72,.02),Ze.rotation.z=.06,ne.add(Ze);const xt=re(ne,0,0,"ᚠ",10481407,1.15,0);xt.position.y=2.55,xt.rotation.x=0;const Dt=new Hi(7793407,1.7,9,2);Dt.position.set(0,2,.8),ne.add(Dt);for(const[d,y]of[[3,.075],[7.1,.065],[10.1,.045]]){const f=new B(new Ht(d,y,8,96),new At({color:15320941,transparent:!0,opacity:d<8?.82:.58,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.055,ne.add(f)}const Ot=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let d=0;d<16;d++){const y=d/16*Math.PI*2;re(ne,Math.cos(y)*8.55,Math.sin(y)*8.55,Ot[d],d%3===0?15055195:d%3===1?7857653:12093423,.62,y+.18)}for(let d=0;d<12;d++){const y=d/12*Math.PI*2+.13;re(ne,Math.cos(y)*5.45,Math.sin(y)*5.45,Ot[(d+5)%Ot.length],d%2?7659506:12684269,.38,y)}for(let d=0;d<10;d++){const y=d/10*Math.PI*2+.16,f=9.15+(.5-j(d,1202))*1,A=2.4+j(d,1203)*2,U=.72+j(d,1204)*.48,L=new B(new sn(.82+j(d,1205)*.22,1),Ue);L.scale.set(U,A,.72+j(d,1206)*.28),L.position.set(Math.cos(y)*f,L.scale.y*.58,Math.sin(y)*f),L.rotation.set((j(d,1207)-.5)*.22,y+(j(d,1208)-.5)*.3,(j(d,1209)-.5)*.18),ne.add(L);const X=Ot[d%Ot.length],Q=$(X,d%3===0?"#8eeeff":d%3===1?"#c08cff":"#ffd86b"),ie=new B(new Xn(.62,.92),new At({map:Q,transparent:!0,depthWrite:!1,side:$t}));ie.position.set(L.position.x+Math.cos(y)*.68,L.position.y*.76,L.position.z+Math.sin(y)*.68),ie.rotation.y=-y+Math.PI*.5,ne.add(ie);const H=new Hi(d%3===1?11628031:d%3===0?6479359:15055195,.35,3.6,2);H.position.set(L.position.x,L.position.y*.72,L.position.z),ne.add(H)}for(let d=0;d<18;d++){const y=j(d,1220)*Math.PI*2,f=6.8+j(d,1221)*4.3;Js(ne,Math.cos(y)*f,.22,Math.sin(y)*f,.28+j(d,1222)*.35,d%2?5003088:5857882,1223+d)}for(let d=0;d<10;d++){const y=j(d,1230)*Math.PI*2,f=2.6+j(d,1231)*6.6,A=new B(new ot(.06,.09,.035,7),new Pe({color:10191179,metalness:.6,roughness:.45}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(y)*f,.09,Math.sin(y)*f),ne.add(A)}ae(ne,"runefield","Поле Рун"),F.push(ne),se(Z,we,1.8,.08);const zt=(d,y,f,A)=>{const U=new qe,L=f-d,X=A-y,Q=Math.hypot(L,X),ie=Math.floor(Q/1.7);for(let pe=0;pe<=ie;pe++){const ge=pe/ie,Oe=d+L*ge,Ce=y+X*ge,Je=new B(new pn(.24,.24+2.8+j(pe,d)*.5,6),ve(3942940,1));Je.position.set(Oe,V(Oe,Ce)+1.45,Ce),U.add(Je)}const H=le(.3,.35,Q,2957593,1);H.rotation.y=Math.atan2(L,X),H.position.set((d+f)/2,V((d+f)/2,(y+A)/2)+1.25,(y+A)/2),U.add(H),S.add(U),Ke(d,y,f,A,.34,.08)};zt(-30,-31,-8,-31),zt(8,-31,30,-31),zt(-30,-31,-30,-13),zt(30,-31,30,16);const Et=new qe;Et.userData={id:"gate",label:"Ворота Мидгарда"};for(const d of[-4.2,4.2]){const y=le(.8,6,.8,3482906,1);y.position.set(d,3,-31),Et.add(y)}const tt=le(10,.8,1,2957336,1);tt.position.set(0,6,-31),Et.add(tt);for(let d=-3;d<=3;d++){const y=le(1,4.2,.22,5978660,1);y.position.set(d*1.15,2,-30.7),Et.add(y)}ae(Et,"gate","Ворота Мидгарда"),F.push(Et),se(-4.2,-31,.55,.05),se(4.2,-31,.55,.05);const pt=new qe;pt.userData={id:"norns",label:"Прядильня норн"},pt.position.set(-52,V(-52,38),38);const Tt=ve(4927522,1),$n=ve(2826523,1),ur=le(5.7,.28,.28,5847592,1);ur.position.set(0,3.8,0),pt.add(ur);const Bn=le(5,.25,.32,3877151,1);Bn.position.set(0,.65,.15),pt.add(Bn);for(const d of[-2.45,2.45]){const y=le(.28,3.55,.3,5321763,1);y.position.set(d,2.15,0),y.rotation.z=d>0?.08:-.08,pt.add(y)}const dr=new B(new Ht(2.05,.18,8,32),Tt);dr.rotation.y=Math.PI/2,dr.position.set(0,2.25,-.8),pt.add(dr);const jt=new B(new ot(.28,.32,.38,10),$n);jt.rotation.z=Math.PI/2,jt.position.set(0,2.25,-.8),pt.add(jt);for(let d=0;d<10;d++){const y=d/10*Math.PI*2,f=le(.08,.08,1.85,5913384,1);f.position.set(Math.cos(y)*.92,2.25+Math.sin(y)*.92,-.8),f.rotation.z=-y,pt.add(f)}const ri=["URD","VERDANDI","SKULD"],si=[8640767,15198177,14908296];for(let d=0;d<3;d++){const y=(d-1)*2,f=new B(new sn(.78,1),new Pe({color:4541257,roughness:.92,metalness:.05}));f.scale.set(.9,1.18+j(d,1290)*.2,.72),f.position.set(y,1.35,.18),f.rotation.set(0,(d-1)*.16,0),pt.add(f);const A=$(d===0?"ᚢ":d===1?"ᚹ":"ᛋ",d===0?"#8fe6ff":d===1?"#f1f1ec":"#ef8d9a"),U=new B(new Xn(.48,.62),new At({map:A,transparent:!0,depthWrite:!1,side:$t}));U.position.set(y,1.42,.86),U.rotation.y=Math.PI,pt.add(U);const L=document.createElement("canvas");L.width=320,L.height=96;const X=L.getContext("2d");X.clearRect(0,0,320,96),X.textAlign="center",X.textBaseline="middle",X.font="bold 34px serif",X.fillStyle=d===0?"#9fe9ff":d===1?"#f4f4ef":"#ef91a0",X.shadowColor=X.fillStyle,X.shadowBlur=12,X.fillText(ri[d],160,48);const Q=new mo(L);Q.colorSpace=kn;const ie=new B(new Xn(1.55,.46),new At({map:Q,transparent:!0,depthWrite:!1,side:$t}));ie.position.set(y,.55,.86),ie.rotation.y=Math.PI,pt.add(ie);const H=new Hi(si[d],.45,4.5,2);H.position.set(y,1.55,1),pt.add(H)}const An=[15123551,15263973,14245748];for(let d=0;d<3;d++){const y=[];for(let f=0;f<=18;f++){const A=f/18,U=1.9+A*4.6,L=(d-1)*2+Math.sin(A*Math.PI*2+d*1.7)*(.45+.5*A),X=.35+Math.cos(A*Math.PI*2+d)*.45;y.push(new z(L,U,X))}pt.add(new t1(new gn().setFromPoints(y),new ap({color:An[d],transparent:!0,opacity:.9})))}for(let d=0;d<3;d++){const y=new B(new Ht(1.15+d*.18,.045,6,32),new At({color:An[d],transparent:!0,opacity:.75,depthWrite:!1}));y.position.set((d-1)*.38,6.15,.15),y.rotation.set(.4,d*.65,.2),pt.add(y)}const bn=new B(new Ht(4.6,.065,8,72),new At({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));bn.rotation.x=Math.PI/2,bn.position.y=.05,pt.add(bn);for(let d=0;d<18;d++){const y=j(d,1300)*Math.PI*2,f=2.5+j(d,1301)*3.1,A=new B(new ot(.12,.12,.16,9),new Pe({color:[10184008,7174032,9261927,7828045][d%4],roughness:.8}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(y)*f,.12,Math.sin(y)*f),pt.add(A)}for(let d=0;d<9;d++)re(pt,(j(d,1315)-.5)*7.5,(j(d,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][d%5],d%2?9428976:14134881,.34,j(d,1317)*Math.PI);ae(pt,"norns","Прядильня норн"),F.push(pt),se(-52,38,3,.1);const Zi=new qe;Zi.userData={id:"rune",label:"Древний камень Феху"},Zi.position.set(50,V(50,60),60);const Ji=new B(new sn(1.45,1),ve(5002063,1));Ji.position.y=1.2,Zi.add(Ji);const Nu=new B(new Ht(1.05,.07,8,30),new Pe({color:16766826,emissive:10052371,emissiveIntensity:3}));Nu.rotation.x=Math.PI/2,Nu.position.y=1.2,Zi.add(Nu),ae(Zi,"rune","Древний камень Феху"),F.push(Zi),se(50,60,1.7,.1);const Tl=new qe;Tl.userData={id:"port",label:"Мост к причалу"};for(let d=-5;d<=5;d++){const y=le(3.6,.28,.82,6307882,1);y.position.set(-53,V(-53,d*1)+.5,d),Tl.add(y)}ae(Tl,"port","Мост к причалу"),F.push(Tl);const Zs=new qe;Zs.position.set(-45,V(-45,-48),-48);for(let d=0;d<7;d++){const y=le(2.8,.24,.72,7030573,1);y.position.set(0,.3,d*.85),Zs.add(y)}for(const d of[-1.2,1.2])for(let y=0;y<3;y++){const f=le(.22,1.5,.22,4139292,1);f.position.set(d,-.2,y*2.5),Zs.add(f)}const Sm=le(2.2,.55,4.8,4926493,1);Sm.position.set(3,-.15,2.5),Zs.add(Sm),ae(Zs,"port","Речной причал"),F.push(Zs);const Dx=(d,y)=>{const f=new B(new ot(.5,.5,1,12),ve(6636332,1));f.position.set(d,V(d,y)+.5,y),S.add(f);for(const A of[.25,.76]){const U=new B(new Ht(.51,.045,6,18),ve(3156004,.7,.1));U.rotation.x=Math.PI/2,U.position.set(d,V(d,y)+A,y),S.add(U)}},Nx=(d,y)=>{const f=le(1,.75,1,7359022,1);f.position.set(d,V(d,y)+.38,y),S.add(f);const A=le(.08,.82,1.05,3679770,1);A.position.set(d,V(d,y)+.38,y),S.add(A),oe(d,y,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([d,y])=>Dx(d,y)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([d,y])=>Nx(d,y));const Ux=(d,y,f)=>{const A=new qe,U=V(d,y),L=new Pe({map:Me,color:16777215,roughness:.98,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),X=new B(new ot(.18*f,.38*f,5.2*f,9),L);X.position.y=2.6*f,X.rotation.z=(j(d,y)-.5)*.08,X.scale.x=1.08+j(d,y+4)*.22,A.add(X);for(let ie=0;ie<9;ie++){const H=(1.15+ie*.47)*f,pe=ie%2?1:-1,ge=(.9+ie*.16)*f,Oe=new B(new ot(.035*f,.095*f,ge,7),L);Oe.position.set(pe*(.28+ie*.035)*f,H,(j(ie,y)-.5)*.38*f),Oe.rotation.z=pe*(.62-j(ie,d)*.18),Oe.rotation.y=j(ie+21,y)*Math.PI*2,A.add(Oe)}const Q=[2904370,3893312,4946505];for(let ie=0;ie<12;ie++){const H=Math.max(.48,1.42-ie*.075)*f,pe=new B(O1(new ht(H,10,7),.18*f,ie+Math.round(d*3+y*5)),new Pe({map:De,color:Q[ie%3],roughness:.995}));pe.scale.set(1+j(ie,d)*.25,.55+j(ie,y)*.16,.82+j(ie*2,d)*.22),pe.position.set((j(ie*4,d)-.5)*.58*f,(1.55+ie*.37)*f,(j(ie*5,y)-.5)*.55*f),A.add(pe)}for(let ie=0;ie<3;ie++){const H=new B(new ht(.38*f,7,5),new Pe({color:ie%2?3231030:4021565,roughness:1}));H.scale.set(1.5,.28,.85),H.position.set((ie-1)*.45*f,.55*f,(j(ie,88)-.5)*.5*f),A.add(H)}for(let ie=0;ie<4;ie++){const H=new B(new ht((.11+j(ie,77)*.08)*f,7,5),L);H.scale.set(1.35,.72,.82),H.position.set((ie%2?1:-1)*.18*f,(1+ie*.78)*f,.29*f),H.rotation.y=ie%2*Math.PI,A.add(H)}for(let ie=0;ie<4;ie++){const H=ie/4*Math.PI*2+.4,pe=(.55+j(ie,79)*.7)*f,ge=new B(new ot(.045*f,.12*f,pe,6),L);ge.position.set(Math.cos(H)*pe*.42,.14*f,Math.sin(H)*pe*.42),ge.rotation.z=Math.cos(H)*.85,ge.rotation.x=-Math.sin(H)*.85,ge.rotation.y=-H,A.add(ge)}A.position.set(d,U,y),ae(A),f>=1.15&&se(d,y,.46*f,.04)},Al=(d,y,f,A=!1)=>{const U=new qe,L=V(d,y),X=new Pe({map:Me,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),Q=new B(new ot(.42*f,.72*f,6.4*f,11),X);Q.position.y=3.2*f,Q.rotation.z=(j(d,y)-.5)*.06,Q.scale.x=1.08,U.add(Q);for(let H=0;H<(A?9:7);H++){const pe=H/(A?9:7)*Math.PI*2+j(H,d)*.18,ge=(1+j(H,y)*1.6)*f,Oe=new B(new ot(.11*f,.3*f,ge,7),X);Oe.position.set(Math.cos(pe)*ge*.42,.28*f,Math.sin(pe)*ge*.42),Oe.rotation.z=Math.cos(pe)*.72,Oe.rotation.x=-Math.sin(pe)*.72,Oe.rotation.y=-pe,U.add(Oe)}const ie=A?10:8;for(let H=0;H<ie;H++){const pe=H/ie*Math.PI*2+j(H+11,d)*.22,ge=(2+j(H+22,y)*2.2)*f,Oe=new B(new ot(.07*f,.19*f,ge,8),X);Oe.position.set(Math.cos(pe)*ge*.34,(3.25+j(H+33,d)*1.9)*f,Math.sin(pe)*ge*.34),Oe.rotation.z=Math.cos(pe)*.76,Oe.rotation.x=Math.sin(pe)*.76,Oe.rotation.y=-pe,U.add(Oe);for(let Ce=0;Ce<4;Ce++){const Je=new B(O1(new ht((.46+j(Ce+H,90)*.25)*f,10,7),.14*f,Ce+H+17),new Pe({map:De,color:[3235641,4355400,5670483][(H+Ce)%3],roughness:1}));Je.scale.y=.62,Je.position.set(Math.cos(pe)*ge*(.52+.09*Ce)+(j(Ce,H)-.5)*.55*f,(3.9+j(H,Ce)*1.45+.25*Ce)*f,Math.sin(pe)*ge*(.52+.09*Ce)+(j(Ce+4,H)-.5)*.55*f),U.add(Je)}}if(A){const H=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let pe=0;pe<H.length;pe++){const ge=-.9+pe*.46,Oe=new B(new Xn(.48*f,.62*f),new At({map:$(H[pe],pe%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:$t}));Oe.position.set(Math.sin(ge)*.56*f,(1.5+pe*.68)*f,Math.cos(ge)*.6*f),Oe.rotation.y=ge,U.add(Oe)}}for(let H=0;H<6;H++){const pe=new B(new ht((.16+j(H,121)*.1)*f,7,5),X);pe.scale.set(.55,1.55,.42);const ge=j(H,122)*Math.PI*2;pe.position.set(Math.cos(ge)*.5*f,(1.05+H*.48)*f,Math.sin(ge)*.5*f),pe.rotation.y=-ge,U.add(pe)}U.position.set(d,L,y),ae(U),f>=1.2&&se(d,y,.78*f,.05)},Fx=(d,y,f,A)=>{const U=new qe,L=new Pe({color:7031345,roughness:.96}),X=new Pe({color:8871999,roughness:.96}),Q=new Pe({color:3155230,roughness:1}),ie=new Pe({color:12168600,roughness:.9}),H=new Pe({color:1512207,roughness:.25}),pe=new B(new ht(.68,14,10),L);pe.scale.set(1.35,.78,.72),pe.position.set(0,.98*f,0),pe.scale.multiplyScalar(f),U.add(pe);const ge=new B(new ht(.42,12,9),X);ge.scale.set(1,.9,.86),ge.position.set(.49*f,1.04*f,0),U.add(ge);const Oe=new B(new ot(.2*f,.34*f,.98*f,10),L);Oe.position.set(.5*f,1.46*f,0),Oe.rotation.z=-.3,U.add(Oe);const Ce=new B(new ht(.34*f,12,9),X);Ce.scale.set(1.18,.92,.78),Ce.position.set(.86*f,1.82*f,0),U.add(Ce);const Je=new B(new ht(.17*f,10,7),X);Je.scale.set(1.15,.72,.72),Je.position.set(1.16*f,1.72*f,0),U.add(Je);const mt=new B(new ht(.075*f,8,6),Q);mt.scale.set(1,.72,.85),mt.position.set(1.3*f,1.72*f,0),U.add(mt);for(const Bt of[-1,1]){const Yt=new B(new pn(.095*f,.3*f,7),X);Yt.position.set(.77*f,2.1*f,Bt*.2*f),Yt.rotation.z=-.28,Yt.rotation.x=Bt*.18,U.add(Yt)}for(const Bt of[-1,1]){const Yt=new B(new ht(.035*f,8,6),H);Yt.position.set(1.05*f,1.91*f,Bt*.235*f),U.add(Yt);const qt=new B(new ht(.009*f,6,4),new At({color:16777215}));qt.position.set(1.075*f,1.925*f,Bt*.257*f),U.add(qt)}const It=[];for(const Bt of[-1,1])for(const Yt of[-1,1]){const qt=new qe;qt.position.set(Yt*.43*f,.76*f,Bt*.34*f);const Nt=new B(new ot(.085*f,.11*f,.43*f,7),L);Nt.position.y=-.2*f,qt.add(Nt);const Ut=new qe;Ut.position.y=-.4*f;const cn=new B(new ot(.055*f,.075*f,.43*f,7),Q);cn.position.y=-.2*f,Ut.add(cn);const Nn=new B(new ht(.075*f,7,5),Q);Nn.scale.set(1.15,.55,1.25),Nn.position.y=-.43*f,Ut.add(Nn),qt.add(Ut),U.add(qt),It.push(qt,Ut)}const tn=new B(new ht(.16*f,9,7),X);tn.scale.set(.75,1.25,.72),tn.position.set(-.9*f,1.18*f,0),U.add(tn);for(const Bt of[-1,1]){const Yt=new B(new ot(.04*f,.06*f,.68*f,7),ie);Yt.position.set(.69*f,2.25*f,Bt*.14*f),Yt.rotation.z=Bt*.22,U.add(Yt);for(let qt=0;qt<3;qt++){const Nt=new B(new ot(.02*f,.038*f,.34*f,6),ie);Nt.position.set((.56+.11*qt)*f,(2.48+.15*qt)*f,Bt*(.14+.045*qt)*f),Nt.rotation.z=Bt*(.55-.08*qt),U.add(Nt)}}U.scale.setScalar(1.1),U.position.set(d,V(d,y),y),U.userData={phase:A,legJoints:It},ae(U),nt.push({g:U,x:d,z:y,r:4+j(A,41)*3,speed:1.25+j(A,42)*.8,phase:A,kind:"deer"})},kx=(d,y)=>{const f=new qe,A=ve(6965552,1),U=ve(3089436,1),L=new B(new ht(.22,8,6),A);L.scale.set(1.35,.9,.9),L.position.y=.72,f.add(L);const X=new B(new ht(.17,8,6),A);X.position.set(.22,.86,0),f.add(X);for(const H of[-1,1]){const pe=new B(new pn(.06,.18,6),A);pe.position.set(.17,.99,H*.09),f.add(pe)}const Q=new B(new Ht(.24,.075,7,14,Math.PI*1.65),A);Q.rotation.y=Math.PI/2,Q.position.set(-.22,.91,0),f.add(Q);const ie=new B(new ht(.025,6,4),U);ie.position.set(.35,.9,-.12),f.add(ie),f.position.set(d,V(d,y),y),ae(f,"ratatosk","Белка Рататоск"),F.push(f),se(d,y,.28,.02),nt.push({g:f,x:d,z:y,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},bi=-5,Ci=75,Uu=new qe;Uu.userData={id:"ashgrove",label:"Роща Ясеня"};const Fu=new B(new Zn(10.5,40),new Pe({color:2504747,roughness:1,transparent:!0,opacity:.82}));Fu.rotation.x=-Math.PI/2,Fu.position.set(bi,V(bi,Ci)+.02,Ci),S.add(Fu);const Ox=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[d,y,f,A]of Ox)Al(bi+d,Ci+y,f,A);const ku=new B(new Ht(6.4,.07,8,64),new Pe({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));ku.rotation.x=Math.PI/2,ku.position.set(bi,V(bi,Ci)+.05,Ci),S.add(ku);const Ou=new B(new sn(1.05,1),ve(5593941,1));Ou.scale.set(1.3,.7,1.05),Ou.position.set(bi,V(bi,Ci)+.65,Ci),S.add(Ou),re(Uu,0,0,"ᚱ",9430692,1.25,0);for(let d=0;d<26;d++){const y=j(d,1310)*Math.PI*2,f=2.5+j(d,1311)*7.2,A=bi+Math.cos(y)*f,U=Ci+Math.sin(y)*f,L=new B(new ot(.025,.045,.22+j(d,1312)*.28,6),ve(12039579,1));L.position.set(A,V(A,U)+.12,U),S.add(L);const X=new B(new ht(.13+j(d,1313)*.08,8,5),new Pe({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));X.scale.y=.48,X.position.set(A,V(A,U)+.34,U),S.add(X)}for(let d=0;d<16;d++){const y=j(d,1320)*Math.PI*2,f=2+j(d,1321)*7.5,A=bi+Math.cos(y)*f,U=Ci+Math.sin(y)*f,L=new B(new ot(.07,.07,.025,10),ve(9270341,.5,.55));L.rotation.x=Math.PI/2,L.position.set(A,V(A,U)+.05,U),S.add(L)}F.push(Uu),se(bi,Ci,1,.08);const _n=62,xn=78,bl=new qe;bl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const zu=new B(new Zn(11.5,44),new Pe({color:2112299,roughness:1,transparent:!0,opacity:.86}));zu.rotation.x=-Math.PI/2,zu.position.set(_n,V(_n,xn)+.025,xn),S.add(zu);const wm=new Pe({map:Me,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),Bu=new B(new ot(1.35,2.1,10.5,13),wm);Bu.position.set(_n,V(_n,xn)+5.25,xn),Bu.rotation.z=-.05,S.add(Bu);for(let d=0;d<8;d++){const y=d/8*Math.PI*2+.2,f=5+j(d,1401)*4,A=new B(new ot(.25,.58,f,9),wm);A.position.set(_n+Math.cos(y)*f*.36,V(_n,xn)+6.8+j(d,1402)*2.2,xn+Math.sin(y)*f*.36),A.rotation.z=Math.cos(y)*.8,A.rotation.x=Math.sin(y)*.8,A.rotation.y=-y,S.add(A);for(let U=0;U<4;U++){const L=new B(new ht(1+j(U+d,1403)*.55,9,6),new Pe({map:De,color:[2312753,2972729,3697474][(d+U)%3],roughness:1}));L.scale.y=.65,L.position.set(_n+Math.cos(y)*f*(.48+.09*U)+(j(U,d)-.5)*1.1,V(_n,xn)+8+j(d,U)*3+U*.45,xn+Math.sin(y)*f*(.48+.09*U)+(j(U+5,d)-.5)*1.1),S.add(L)}}for(let d=0;d<9;d++){const y=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][d],f=$(y,d%2?"#63d9ef":"#f0c65d"),A=new B(new Xn(.7,.9),new At({map:f,transparent:!0,depthWrite:!1,side:$t}));A.position.set(_n+Math.sin(d*.63)*1.42,V(_n,xn)+1+d*.78,xn+Math.cos(d*.63)*1.42),A.rotation.y=Math.PI*.5-d*.16,S.add(A)}const Hu=new B(new sn(1.35,1),ve(5199954,1));Hu.scale.set(1.45,.7,1.15),Hu.position.set(_n,V(_n,xn)+.75,xn+1.6),S.add(Hu),Lr(_n,xn+2.1,.72);const Vu=new B(new Ht(6.7,.06,8,64),new Pe({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Vu.rotation.x=Math.PI/2,Vu.position.set(_n,V(_n,xn)+.055,xn),S.add(Vu);for(let d=0;d<22;d++){const y=j(d,1410)*Math.PI*2,f=1.8+j(d,1411)*8.2,A=_n+Math.cos(y)*f,U=xn+Math.sin(y)*f;re(bl,A-_n,U-xn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][d%6],d%2?6804447:14726490,.35,j(d,1412)*Math.PI)}for(let d=0;d<18;d++){const y=["ᚱ","ᚨ","ᛟ","ᚦ"][d%4],f=$(y,d%2?"#63d9ef":"#e4bd65"),A=new B(new Xn(.34,.44),new At({map:f,transparent:!0,depthWrite:!1,side:$t}));A.position.set(_n+(j(d,1420)-.5)*12,1.4+j(d,1421)*7,xn+(j(d,1422)-.5)*12),A.userData.floatPhase=j(d,1423)*6,S.add(A)}ae(bl,"hoddmimir","Лес Ходдмимира"),F.push(bl),se(_n,xn,1.2,.08);const oa=43,aa=32;for(let d=0;d<4;d++)Fx(oa+(d-1.5)*2.6,aa+(d%2?2.6:-2.6),1.12+j(d,1440)*.16,10+d);const Em=new B(new sn(.72,1),ve(5725526,1));Em.position.set(oa,V(oa,aa)+.5,aa),S.add(Em);const Gu=new B(new Ht(5.8,.045,7,48),new Pe({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Gu.rotation.x=Math.PI/2,Gu.position.set(oa,V(oa,aa)+.035,aa),S.add(Gu),kx(bi+5,Ci+1),((d,y)=>{const f=new qe;f.position.set(d,V(d,y),y),f.userData={id:"forestCache",label:"Забытый тайник"};const A=new Pe({map:Me,color:6968381,roughness:1}),U=new Pe({color:2760987,roughness:1}),L=new B(new ot(2,2.65,4.9,11),A);L.position.y=2.45,L.rotation.z=-.035,f.add(L);for(let Ce=0;Ce<7;Ce++){const Je=1.3+j(Ce,1250)*2.7,mt=new B(new pn(.32+j(Ce,1251)*.3,Je,6),A),It=j(Ce,1252)*Math.PI*2,tn=.55+j(Ce,1253)*1.35;mt.position.set(Math.cos(It)*tn,4.75+Je*.42,Math.sin(It)*tn),mt.rotation.z=(j(Ce,1254)-.5)*.55,mt.rotation.x=(j(Ce,1255)-.5)*.55,f.add(mt)}const X=new B(new ht(1.18,16,10),U);X.scale.set(1,1.18,.46),X.position.set(0,2,2.08),f.add(X);const Q=new B(new Ht(1.05,.16,8,28),new Pe({color:4930349,roughness:1}));Q.rotation.x=Math.PI/2,Q.position.set(0,2,2.12),Q.scale.y=1.15,f.add(Q);const ie=new ap({color:14211280,transparent:!0,opacity:.45});for(let Ce=0;Ce<6;Ce++){const Je=[new z(-.95+Ce*.38,1.15+Ce%3*.55,2.15),new z((Ce-2.5)*.2,2+Ce%2*.3,2.48),new z(-.8+Ce*.32,2.95+Ce%3*.25,2.12)];f.add(new t1(new gn().setFromPoints(Je),ie))}const H=new B(new ht(.46,10,8),new Pe({color:5978662,roughness:1}));H.scale.set(.9,1.15,.62),H.position.set(.05,1.45,2.34),f.add(H);const pe=new B(new ht(.07,7,5),new Pe({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));pe.position.set(.05,1.72,2.77),f.add(pe);for(let Ce=0;Ce<5;Ce++){const Je=new B(new sn(.11,0),new Pe({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Je.position.set(-.38+Ce*.19,1.02+Ce%2*.08,2.5),f.add(Je)}const ge=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let Ce=0;Ce<6;Ce++){const Je=-1.05+Ce*.42,mt=$(ge[Ce],Ce%2?"#e7bd61":"#7ce5ef"),It=new B(new Xn(.45,.62),new At({map:mt,transparent:!0,depthWrite:!1,side:$t}));It.position.set(Math.sin(Je)*1.55,1.2+Ce*.42,1.93+Math.cos(Je)*.22),It.rotation.y=Math.PI,f.add(It)}const Oe=new B(new Ht(4.15,.06,8,64),new At({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Oe.rotation.x=Math.PI/2,Oe.position.y=.05,f.add(Oe);for(let Ce=0;Ce<10;Ce++){const Je=Ce/10*Math.PI*2;re(f,Math.cos(Je)*3.65,Math.sin(Je)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][Ce],14859617,.38,Je+.2)}for(let Ce=0;Ce<12;Ce++){const Je=j(Ce,1270)*Math.PI*2,mt=1.8+j(Ce,1271)*3.3,It=new B(new ot(.08,.08,.025,9),new Pe({color:10190147,metalness:.55,roughness:.45}));It.rotation.x=Math.PI/2,It.position.set(Math.cos(Je)*mt,.09,Math.sin(Je)*mt),f.add(It)}for(let Ce=0;Ce<4;Ce++){const Je=le(.08,.08,.75,10393476,1);Je.position.set((j(Ce,1280)-.5)*5,.12,(j(Ce,1281)-.5)*5),Je.rotation.y=j(Ce,1282)*Math.PI,f.add(Je)}ae(f,"forestCache","Забытый тайник"),F.push(f),se(d,y,1.75,.08)})(-72,48);const zx=(d,y,f,A,U)=>{const L=d.distanceTo(y),X=new B(new Fn(f,A,L),U);return X.position.copy(d).add(y).multiplyScalar(.5),X.lookAt(y),X};function Js(d,y,f,A,U,L,X){const Q=new B(new sn(U,1),ve(L,1));return Q.scale.set(.72+j(X,1)*.62,.55+j(X,2)*.85,.68+j(X,3)*.55),Q.rotation.set(j(X,4)*1.2,j(X,5)*Math.PI,j(X,6)*1.1),Q.position.set(y,f,A),d.add(Q),Q}const Bx=(d,y)=>{const f=new qe;f.position.set(d,V(d,y),y),f.userData={id:"fallenAsh",label:"Поверженный ясень"};const A=new B(new Ht(7.8,.07,8,64),new Pe({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));A.rotation.x=Math.PI/2,A.position.y=.05,f.add(A);const U=new Pe({map:Me,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),L=new B(new ot(1.45,2.15,4.8,10),U);L.position.set(0,2.4,.2),L.rotation.z=-.04,f.add(L);const X=new B(new ht(.88,12,9),new At({color:1185043}));X.scale.set(1,.95,.55),X.position.set(0,1.75,1.72),f.add(X);for(let ie=0;ie<7;ie++){const H=-.9+ie*.3,pe=2.5+j(ie,1500)*2.7,ge=new B(new ot(.11,.28,pe,7),U);ge.position.set(Math.sin(H)*pe*.34,4+j(ie,1501)*2.8,.15+Math.cos(H)*pe*.3),ge.rotation.z=Math.sin(H)*.65,ge.rotation.x=-Math.cos(H)*.55,ge.rotation.y=H,f.add(ge)}for(let ie=0;ie<9;ie++){const H=j(ie,1510)*Math.PI*2,pe=1.7+j(ie,1511)*5.6;Js(f,Math.cos(H)*pe,.22,Math.sin(H)*pe,.3+j(ie,1512)*.45,ie%3?5265490:6251613,1513+ie)}for(let ie=0;ie<8;ie++)re(f,(j(ie,1520)-.5)*5.8,(j(ie,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][ie%4],10473668,.42,j(ie,1522)*Math.PI);const Q=new B(new ht(.45,10,7),ve(5978919,1));Q.scale.set(.9,1.2,.7),Q.position.set(0,1.55,1.25),f.add(Q),ae(f,"fallenAsh","Поверженный ясень"),F.push(f),se(d,y,1.8,.08)},Hx=(d,y)=>{const f=new qe;f.position.set(d,V(d,y),y),f.userData={id:"hunterCamp",label:"Забытая стоянка"};const A=new B(new Zn(8.7,40),new Pe({color:3225644,roughness:1,transparent:!0,opacity:.78}));A.rotation.x=-Math.PI/2,A.position.y=.025,A.scale.set(1.18,.92,1),f.add(A);const U=new qe;U.position.set(-1.45,.05,-.65),U.rotation.y=-.34,f.add(U);const L=ve(5978920,1);ve(3680030,1);const X=ve(2697768,.82,.35),Q=ve(4412730,1),ie=le(3.7,.26,1.65,6308141,1);ie.position.y=1.05,ie.rotation.z=-.08,U.add(ie);for(let He=0;He<9;He++){const gt=le(2.8+j(He,501)*1.1,.16,.26,He%3?6505775:4928293,1);gt.position.set(-.25+(j(He,502)-.5)*.25,1.18+(j(He,503)-.5)*.34,-.72+He%3*.68),gt.rotation.z=(j(He,504)-.5)*.16,gt.rotation.y=(j(He,505)-.5)*.16,U.add(gt)}for(const[He,gt,Gt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Mn=new B(new Ht(Gt,.14,7,20,Math.PI*1.56),X);Mn.rotation.y=Math.PI/2,Mn.rotation.z=Gt>.8?.08:-.18,Mn.position.set(He,.9,gt),U.add(Mn);const vi=new B(new ot(.15,.18,.28,8),X);vi.rotation.z=Math.PI/2,vi.position.set(He,.9,gt),U.add(vi);for(let ys=0;ys<6;ys++){const x0=ys/6*Math.PI*2+.25,ty=new z(He+Math.cos(x0)*Gt*.82,.9+Math.sin(x0)*Gt*.82,gt+.02),ny=new z(He,.9,gt+.02);U.add(zx(ny,ty,.065,.065,X))}}const H=new B(new Fn(3.8,.14,.16),X);H.position.set(0,.62,-.83),H.rotation.z=.08,U.add(H);const pe=new B(new Fn(.16,.18,3.2),L);pe.position.set(1.8,.8,-.35),pe.rotation.y=.9,U.add(pe);for(let He=0;He<6;He++){const gt=new B(new ht(.28+j(He,507)*.18,7,5),Q);gt.scale.set(1.4,.32,.7),gt.position.set(-1.1+He*.48,1.34+He%2*.05,-.82),U.add(gt)}const ge=new qe;ge.position.set(2.85,.02,1.15),ge.rotation.y=.18,f.add(ge),ve(4861985,1);for(let He=0;He<4;He++){const gt=He/4*Math.PI*2+.25,Gt=le(.11,3.7,.11,4861985,1);Gt.position.set(Math.cos(gt)*1.25,1.65,Math.sin(gt)*1.25),Gt.rotation.z=Math.cos(gt)*.34,Gt.rotation.x=-Math.sin(gt)*.34,ge.add(Gt)}const Oe=new B(new pn(2,3.2,4,1,!0),new Pe({color:4862247,roughness:1,side:$t,transparent:!0,opacity:.94}));Oe.position.y=1.45,Oe.scale.set(1,.9,.82),Oe.rotation.y=.78,ge.add(Oe);for(let He=0;He<9;He++){const gt=new B(new ht(.16+j(He,509)*.14,6,5),Q);gt.scale.set(1.5,.35,.8),gt.position.set((j(He,510)-.5)*2.4,1+j(He,511)*1.9,(j(He,512)-.5)*1.8),ge.add(gt)}const Ce=le(1.05,1.55,.05,3088668,1);Ce.position.set(0,.72,1.65),Ce.rotation.y=.16,ge.add(Ce),Lr(d+.1,y+.45,.78);const Je=new Hi(16751173,1,8,2);Je.position.set(.1,1.7,.45),f.add(Je);const mt=new qe;mt.position.set(-3.15,.5,1.25),mt.rotation.y=.8,mt.rotation.z=-.22,f.add(mt);const It=new B(new Zn(1.05,16),new Pe({color:3882041,roughness:.85,metalness:.55,side:$t}));It.rotation.x=-Math.PI/2,It.scale.y=.8,mt.add(It);const tn=new B(new Ht(1.03,.11,7,18),X);tn.rotation.x=-Math.PI/2,tn.scale.y=.8,mt.add(tn);const Bt=new B(new ot(.24,.31,.22,8),X);Bt.rotation.x=Math.PI/2,Bt.position.set(.18,0,.08),mt.add(Bt);const Yt=le(.05,.035,1.15,1513494,1);Yt.position.set(-.28,.025,.05),Yt.rotation.y=.42,mt.add(Yt),ve(2960425,.65,.45);const qt=(He,gt,Gt)=>{const Mn=new qe;Mn.position.set(He,.18,gt),Mn.rotation.y=Gt;const vi=le(.09,.09,1.55,5059362,1);vi.rotation.x=Math.PI/2,vi.position.z=.15,Mn.add(vi);const ys=le(.55,.13,.28,3158061,.55);ys.position.set(0,.02,-.62),ys.rotation.y=-.25,Mn.add(ys),f.add(Mn)};qt(-1.9,3.15,.45),qt(4.15,-.65,-.8);const Nt=le(.11,.11,.95,5388068,1);Nt.rotation.y=.55,Nt.position.set(-2.1,.16,2.65),f.add(Nt);const Ut=new B(new ht(.48,9,7),new Pe({color:5978919,roughness:1}));Ut.scale.set(.9,1.15,.65),Ut.position.set(3.55,.48,2.65),f.add(Ut);const cn=new B(new Ht(.33,.035,6,18,Math.PI*1.5),ve(3023129,1));cn.rotation.x=Math.PI/2,cn.position.set(3.55,.93,2.65),f.add(cn);for(let He=0;He<15;He++){const gt=new B(new ot(.09,.09,.025,10),new Pe({color:9335877,metalness:.55,roughness:.45})),Gt=j(He,520)*Math.PI*2,Mn=2.1+j(He,521)*3.7;gt.position.set(Math.cos(Gt)*Mn,.13,Math.sin(Gt)*Mn),gt.rotation.x=Math.PI/2,f.add(gt)}for(let He=0;He<5;He++){const gt=le(.08,.08,.9,11182733,1);gt.position.set(3.2+j(He,522)*2.4,.18,-2.7+j(He,523)*1.7),gt.rotation.y=j(He,524)*Math.PI,gt.rotation.z=(j(He,525)-.5)*.25,f.add(gt)}const Nn=new B(new Ht(4.7,.055,7,64),new At({color:9160135,transparent:!0,opacity:.5}));Nn.rotation.x=Math.PI/2,Nn.position.y=.075,f.add(Nn);const oi=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];oi.forEach((He,gt)=>{const Gt=gt/oi.length*Math.PI*2;re(f,Math.cos(Gt)*4.15,Math.sin(Gt)*4.15,He,gt%3===0?13215066:7977149,.55,Gt+.3)});for(let He=0;He<18;He++)Js(f,(j(He,530)-.5)*8,.18,(j(He,531)-.5)*7,.22+j(He,532)*.34,He%4===0?6121048:5133389,530+He);for(let He=0;He<12;He++){const gt=le(.12,.12,1.7+j(He,535)*2,3811872,1);gt.position.set((j(He,536)-.5)*8,.11,(j(He,537)-.5)*8),gt.rotation.y=j(He,538)*Math.PI,gt.rotation.z=(j(He,539)-.5)*.2,f.add(gt)}ae(f,"hunterCamp","Забытая стоянка"),F.push(f),se(d,y,1.9,.1)},Vx=(d,y,f,A,U,L)=>{const X=new qe;X.position.set(d,V(d,y),y);const Q=7442040,ie=ve(4412730,1),H=new B(new Ht(f,.07,8,64),new Pe({color:Q,emissive:Q,emissiveIntensity:.65,transparent:!0,opacity:.42}));H.rotation.x=Math.PI/2,H.position.y=.045,X.add(H);const pe=Math.floor(f/1.7);for(let ge=0;ge<pe;ge++){const Oe=j(ge,d*11+y)*Math.PI*2,Ce=f*.35+j(ge,y*17)*f*.45;Js(X,Math.cos(Oe)*Ce,.2,Math.sin(Oe)*Ce,.34+j(ge,33)*.32,5266514,800+ge)}{for(let ge=0;ge<8;ge++){const Oe=new B(new ht(.34+j(ge,600)*.25,7,5),ie);Oe.scale.y=.35,Oe.position.set((j(ge,601)-.5)*f,.16,(j(ge,602)-.5)*f),X.add(Oe)}for(let ge=0;ge<6;ge++)re(X,(j(ge,603)-.5)*f*.9,(j(ge,604)-.5)*f*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][ge],7907492,.42,j(ge,605)*Math.PI)}ae(X,A,U),F.push(X)};Hx(68,8),Vx(-45,75,9.5,"deepGrove","Глубокая роща"),Bx(-30,15);const Gx=(d,y)=>{const f=document.createElement("canvas");f.width=f.height=256;const A=f.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=y,A.shadowBlur=24,A.fillStyle=y,A.font="bold 156px serif",A.fillText(d,128,132),A.shadowBlur=6,A.globalAlpha=.72,A.font="bold 126px serif",A.fillText(d,128,132);const U=new mo(f);return U.colorSpace=kn,U.anisotropy=4,U},Cl=(d,y,f,A,U,L,X=.7,Q=0)=>{const ie="#"+L.toString(16).padStart(6,"0"),H=new At({map:Gx(y,ie),transparent:!0,depthWrite:!1,side:$t}),pe=new B(new Xn(X,X),H);return pe.position.set(f,A,U),pe.rotation.set(0,Q,0),d.add(pe),pe},Rl=(d,y,f,A=.075)=>{const U=new lp(y),L=new B(new Wa(U,42,A,6,!1),new At({color:f,transparent:!0,opacity:.9}));d.add(L);const X=new B(new Wa(U,42,A*2.5,6,!1),new At({color:f,transparent:!0,opacity:.12,depthWrite:!1}));return d.add(X),L},Wu=50,Xu=-62,Dr=new qe;Dr.position.set(Wu,V(Wu,Xu),Xu),Dr.userData={id:"forestThread",label:"Разорванная нить"};const ju=new B(new Ht(2.4,.05,7,48),new Pe({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));ju.rotation.x=Math.PI/2,ju.position.y=.055,Dr.add(ju);const qu=new B(new sn(1,1),ve(5326925,1));qu.scale.set(.9,1.45,.72),qu.position.y=.95,Dr.add(qu),Cl(Dr,"ᛏ",0,1.2,.76,12614830,.9,0);const Wx=[new z(-.9,1.8,.3),new z(0,3.1,.1),new z(1,2,-.2)];Rl(Dr,Wx,14268630,.06),ae(Dr,"forestThread","Разорванная нить"),F.push(Dr),se(Wu,Xu,1.1,.08);const Cn=new qe,Yu=58,$u=-28;Cn.position.set(Yu,V(Yu,$u),$u),Cn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const Xx=new Pe({color:5858398,roughness:.96,metalness:.04}),Tm=new Pe({color:3423032,roughness:.92,metalness:.08}),jx=new Pe({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),Ku=new B(new Zn(13.2,52),new Pe({color:5402692,roughness:1,transparent:!0,opacity:.94}));Ku.rotation.x=-Math.PI/2,Ku.position.y=.018,Cn.add(Ku);for(const[d,y,f]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const A=new B(new Ht(d,y,8,96),new At({color:15780190,transparent:!0,opacity:f,depthWrite:!1}));A.rotation.x=Math.PI/2,A.position.y=.065,Cn.add(A)}const qx=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let d=0;d<18;d++){const y=d/18*Math.PI*2;re(Cn,Math.cos(y)*8.9,Math.sin(y)*8.9,qx[d],15779422,.58,y+.15)}const Am=new B(new ot(3.15,3.45,.45,12),Tm);Am.position.y=.24,Cn.add(Am);for(let d=0;d<16;d++){const y=d/16*Math.PI*2,f=2.65+(j(d,2001)-.5)*.22,A=new B(new sn(.72+j(d,2002)*.22,1),Xx);A.scale.set(1.15+j(d,2003)*.25,.72+j(d,2004)*.22,.88+j(d,2005)*.24),A.position.set(Math.cos(y)*f,.55+j(d,2006)*.12,Math.sin(y)*f),A.rotation.set(j(d,2007)*.25,y+j(d,2008)*.4,j(d,2009)*.2),Cn.add(A)}const Zu=new B(new Zn(2.25,40),jx);Zu.rotation.x=-Math.PI/2,Zu.position.y=.72,Cn.add(Zu);for(let d=0;d<3;d++){const y=new B(new Ht(.65+d*.48,.025,6,48),new At({color:d===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));y.rotation.x=Math.PI/2,y.position.y=.735,Cn.add(y)}const bm=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],Cm=[];for(let d=0;d<3;d++){const y=bm[d],f=new qe;f.position.set(y.x,0,y.z),f.rotation.y=d===0?.22:d===2?-.22:Math.PI;const A=new B(new pn(.72,.95,9),new Pe({color:y.body,roughness:.98}));A.position.y=.72,f.add(A);const U=new B(new pn(.48,.72,8),new Pe({color:y.cloak,roughness:.98}));U.position.set(0,.86,.43),U.rotation.x=.05,f.add(U);const L=new B(new ot(.42,.58,.12,9),new Pe({color:y.cloak,roughness:1}));L.position.set(0,1.23,0),L.rotation.z=.08,f.add(L);const X=new B(new ht(.32,12,9),new Pe({color:13079144,roughness:.9}));X.position.y=1.62,f.add(X);const Q=new B(new ht(.38,10,8),new Pe({color:y.hair,roughness:1}));Q.scale.set(1,.95,.9),Q.position.set(0,1.68,-.08),f.add(Q);for(const ge of[-1,1]){const Oe=new B(new ot(.075,.105,.62,7),new Pe({color:y.cloak,roughness:1}));Oe.position.set(ge*.47,1.03,.18),Oe.rotation.z=ge*.42,Oe.rotation.x=-.18,f.add(Oe)}const ie=new B(new ot(.38,.44,.18,9),Tm);ie.position.y=.25,f.add(ie);const H=new B(new ot(.035,.055,.9,8),new Pe({color:6964008,roughness:.9}));H.position.set(.58,1.08,.38),H.rotation.z=.62,f.add(H);const pe=new B(new Ht(.12,.025,6,14),new Pe({color:9265980,roughness:.85}));pe.rotation.x=Math.PI/2,pe.position.set(.75,.82,.48),f.add(pe),f.position.y=.02,Cn.add(f),Cm.push(new z(y.x+.72,1.25,y.z+.48))}const Rm=[14674162,16765022,13192536];for(let d=0;d<3;d++){const y=Cm[d],f=[];for(let A=0;A<=30;A++){const U=A/30,L=y.y+U*7.3,X=U*Math.PI*3+bm[d].phase,Q=.35+.72*U;f.push(new z(y.x*(1-U)+Math.cos(X)*Q*U,y.y*(1-U)+L*U,y.z*(1-U)+Math.sin(X)*Q*U))}Rl(Cn,f,Rm[d],.085)}for(let d=0;d<3;d++){const y=[];for(let f=0;f<=32;f++){const A=f/32,U=A*Math.PI*2,L=1.65+.42*Math.sin(U*2+d*.9);y.push(new z(Math.cos(U+d*2.094)*L,8.35+.45*Math.sin(U*3+d),Math.sin(U+d*2.094)*L))}Rl(Cn,y,Rm[d],.065)}const Pm=new Hi(16767096,1.25,11,2);Pm.position.set(0,4.2,1),Cn.add(Pm);for(let d=0;d<20;d++){const y=j(d,2030)*Math.PI*2,f=3.8+j(d,2031)*8,A=Math.cos(y)*f,U=Math.sin(y)*f,L=new B(new ot(.018,.028,.22,5),new Pe({color:5666109,roughness:1}));L.position.set(A,.11,U),Cn.add(L);const X=new B(new ht(.07,7,5),new At({color:d%3===0?16770208:d%3===1?15972816:14478591}));X.position.set(A,.25,U),Cn.add(X)}for(let d=0;d<10;d++){const y=j(d,2040)*Math.PI*2,f=4+j(d,2041)*8,A=new B(new sn(.12+j(d,2042)*.08,0),new Pe({color:10189631,metalness:.65,roughness:.4}));A.position.set(Math.cos(y)*f,.1,Math.sin(y)*f),Cn.add(A)}ae(Cn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),F.push(Cn),se(Yu,$u,3.4,.1);const gi=new qe,Ju=5,Qu=-70;gi.position.set(Ju,V(Ju,Qu),Qu),gi.userData={id:"powerCircle",label:"Круг Силы"};const ed=new B(new Zn(10.8,48),new Pe({color:1911590,roughness:1,transparent:!0,opacity:.94}));ed.rotation.x=-Math.PI/2,ed.position.y=.02,gi.add(ed);for(const[d,y,f,A]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const U=new B(new Ht(d,y,8,96),new At({color:f,transparent:!0,opacity:A,depthWrite:!1}));U.rotation.x=Math.PI/2,U.position.y=.07,gi.add(U)}for(let d=0;d<20;d++){const y=d/20*Math.PI*2,f=5.1+d%2*2.2;re(gi,Math.cos(y)*f,Math.sin(y)*f,Ot[(d+2)%Ot.length],d%2?9140479:6545396,.38,y+.2)}const Pl=new B(new sn(1.25,1),new Pe({color:2435371,roughness:.9,metalness:.16}));Pl.scale.set(.9,2.8,.7),Pl.position.y=2.45,Pl.rotation.set(.05,.2,-.08),gi.add(Pl);const Yx=Cl(gi,"ᛟ",0,2.55,.78,16766302,1.35,0);Yx.rotation.x=0;const Im=new Hi(10251519,1.7,10,2);Im.position.set(0,2.5,.8),gi.add(Im);for(let d=0;d<12;d++){const y=d/12*Math.PI*2,f=4.1+j(d,1801)*4.5,A=Js(gi,Math.cos(y)*f,.3,Math.sin(y)*f,.42+j(d,1802)*.42,d%3===0?5858141:4870476,1803+d);if(d%4===0){const U=new B(new pn(.18,.9,5),new At({color:d%2?9336063:6938111,transparent:!0,opacity:.75}));U.position.set(A.position.x,.62,A.position.z),gi.add(U)}}for(let d=0;d<9;d++){const y=j(d,1820)*Math.PI*2,f=2.2+j(d,1821)*6.7,A=new B(new ht(.045+j(d,1822)*.04,6,5),new At({color:d%2?7531007:11697663,transparent:!0,opacity:.7}));A.position.set(Math.cos(y)*f,.4+j(d,1823)*2.6,Math.sin(y)*f),gi.add(A)}ae(gi,"powerCircle","Круг Силы"),F.push(gi),se(Ju,Qu,2.2,.1);const Ri=new qe,td=-72,nd=-48;Ri.position.set(td,V(td,nd),nd),Ri.userData={id:"whisperStone",label:"Камень Шёпота"};const id=new B(new Zn(8.6,40),new Pe({color:1516830,roughness:1,transparent:!0,opacity:.95}));id.rotation.x=-Math.PI/2,id.position.y=.02,Ri.add(id);const rd=new B(new Ht(5.8,.09,8,96),new At({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));rd.rotation.x=Math.PI/2,rd.position.y=.075,Ri.add(rd);const Il=new B(new sn(2.1,1),new Pe({color:1382171,roughness:.8,metalness:.35}));Il.scale.set(1.15,1.35,.82),Il.position.y=1.75,Il.rotation.set(.05,.25,-.08),Ri.add(Il);for(const d of[-1,1]){const y=[];for(let f=0;f<=14;f++){const A=f/14,U=A*Math.PI*1.15;y.push(new z(d*(1.35+.72*Math.sin(U)),2.45+.85*A+.38*Math.sin(U),-.15+.78*Math.cos(U)-.78))}Rl(Ri,y,3422020,.18)}const Ll=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Ll.forEach((d,y)=>{const f=y/Ll.length*Math.PI*2;Cl(Ri,d,Math.cos(f)*3.5,1,Math.sin(f)*3.5,y%2?7265535:12088575,.46,f+Math.PI/2)});for(let d=0;d<9;d++){const y=j(d,1901)*Math.PI*2,f=.7+j(d,1902)*1.7,A=Cl(Ri,Ll[d%Ll.length],Math.cos(y)*f,3.4+d*.48,Math.sin(y)*f,d%2?7988991:12614911,.42+j(d,1903)*.22,y);A.rotation.x=(j(d,1904)-.5)*.35}const Lm=new Hi(10245631,1.5,9,2);Lm.position.set(0,2.2,.5),Ri.add(Lm);for(let d=0;d<11;d++){const y=j(d,1920)*Math.PI*2,f=4.8+j(d,1921)*2.6;Js(Ri,Math.cos(y)*f,.2,Math.sin(y)*f,.28+j(d,1922)*.38,4541258,1923+d)}ae(Ri,"whisperStone","Камень Шёпота"),F.push(Ri),se(td,nd,2.5,.1);const Rn=75,yn=30,en=new qe;en.position.set(Rn,V(Rn,yn),yn);const $x=ve(5986899,1),Dm=le(7.8,.42,5.8,5591885,1);Dm.position.y=.22,en.add(Dm);const Nm=le(7.4,2.8,.3,6439727,1);Nm.position.set(0,1.4,-2.7),en.add(Nm);const Um=le(.3,2.8,5.4,6439727,1);Um.position.set(-3.7,1.4,0),en.add(Um);const Fm=le(.3,2.8,5.4,6439727,1);Fm.position.set(3.7,1.4,0),en.add(Fm);const km=le(2.55,2.8,.3,6439727,1);km.position.set(-2.43,1.4,2.7),en.add(km);const Om=le(2.55,2.8,.3,6439727,1);Om.position.set(2.43,1.4,2.7),en.add(Om);const zm=le(2.3,.72,.3,6439727,1);zm.position.set(0,2.44,2.7),en.add(zm);const Bm=le(.16,2.18,.34,2826523,1);Bm.position.set(-.66,1.28,2.72),en.add(Bm);const Hm=le(.16,2.18,.34,2826523,1);Hm.position.set(.66,1.28,2.72),en.add(Hm);const Vm=le(1.48,.16,.34,2826523,1);Vm.position.set(0,2.34,2.72),en.add(Vm);const Qs=new qe;Qs.position.set(-.57,0,2.72),en.add(Qs);const Gm=le(1.14,2.05,.12,3154457,1);Gm.position.set(.57,1.28,0),Qs.add(Gm);const Wm=new B(new ht(.08,8,6),ve(11831883,1));Wm.position.set(.86,1.25,.1),Qs.add(Wm);const Kx=new Pe({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const d of[-2.35,2.35]){const y=le(1.25,1,.12,2826523,1);y.position.set(d,1.72,2.78),en.add(y);const f=new B(new Fn(.98,.72,.06),Kx);f.position.set(d,1.72,2.86),en.add(f);const A=le(.07,.78,.1,2826523,1);A.position.set(d,1.72,2.91),en.add(A);const U=le(1.08,.07,.1,2826523,1);U.position.set(d,1.72,2.91),en.add(U)}const Xm=new Pe({map:et,color:2697767,roughness:.98,side:$t}),la=new B(new Xn(4.25,6.25),Xm),ca=new B(new Xn(4.25,6.25),Xm);la.rotation.x=Math.PI/2,ca.rotation.x=Math.PI/2,la.rotation.z=.62,ca.rotation.z=-.62,la.position.set(-1.02,3.95,0),ca.position.set(1.02,3.95,0),en.add(la,ca);const sd=le(.22,.22,6.45,2695965,1);sd.position.y=4.75,en.add(sd);const od=new B(new Fn(.48,1.35,.48),$x);od.position.set(1.55,4.8,-.65),en.add(od);const ad=le(.62,.1,.62,3420461,1);ad.position.set(1.55,5.48,-.65),en.add(ad);const jm=le(2.35,.18,1,6636845,1);jm.position.set(0,.62,3.15),en.add(jm);const qm=le(1.55,.16,.48,5849131,1);qm.position.set(0,.3,3.58),en.add(qm),ae(en,"heroHome","Домик героя"),F.push(en),oe(Rn,yn-2.72,7.4,.3,0,.05),oe(Rn-3.72,yn,.3,5.45,0,.05),oe(Rn+3.72,yn,.3,5.45,0,.05),oe(Rn-2.43,yn+2.72,2.55,.3,0,.05),oe(Rn+2.43,yn+2.72,2.55,.3,0,.05);const rn=new qe;rn.position.set(Rn,V(Rn,yn),yn),rn.visible=!1;const Ym=le(7,.16,5,4928548,1);Ym.position.y=.5,rn.add(Ym);const $m=le(7,2.65,.18,4139808,1);$m.position.set(0,1.8,-2.45),rn.add($m);const Km=le(.18,2.65,4.9,4139808,1);Km.position.set(-3.45,1.8,0),rn.add(Km);const Zm=le(.18,2.65,4.9,4139808,1);Zm.position.set(3.45,1.8,0),rn.add(Zm);const Jm=le(2.35,2.65,.18,4139808,1);Jm.position.set(-2.42,1.8,2.45),rn.add(Jm);const Qm=le(2.35,2.65,.18,4139808,1);Qm.position.set(2.42,1.8,2.45),rn.add(Qm);const e0=le(2.5,.04,2.1,7162673,1);e0.position.set(-.15,.6,.25),rn.add(e0);const t0=le(1.65,.65,2.15,4008478,1);t0.position.set(-2.15,.88,-1.25),rn.add(t0);const n0=le(1.48,.12,1.35,7033152,1);n0.position.set(-2.15,1.27,-.92),rn.add(n0);const i0=le(1.28,.18,.46,11903114,1);i0.position.set(-2.15,1.38,-1.95),rn.add(i0);const r0=le(1.65,.12,1.05,5255969,1);r0.position.set(.85,1.15,-.15),rn.add(r0);for(const[d,y]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const f=le(.1,.7,.1,3679515,1);f.position.set(d,.72,y),rn.add(f)}const s0=le(1.25,.8,.72,5978660,1);s0.position.set(2.1,.95,-1.7),rn.add(s0);const o0=le(1.9,.14,.45,5978660,1);o0.position.set(1.35,2,-2.25),rn.add(o0);for(const d of[.75,1.35,1.95]){const y=new B(new ot(.08,.1,.35,8),ve(7304016,1));y.position.set(d,2.24,-2.22),rn.add(y)}const a0=le(1.35,.55,.7,5920078,1);a0.position.set(2.15,.78,.95),rn.add(a0);const l0=new B(new pn(.28,.72,8),new Pe({color:16744744,emissive:16731402,emissiveIntensity:4}));l0.position.set(2.15,1.42,.95),rn.add(l0);const c0=new Hi(16747068,2.2,8,2);c0.position.set(2.15,1.7,.95),rn.add(c0),ae(rn,"heroHomeInterior","Дом героя — внутри"),F.push(rn);const vs=new qe;vs.position.set(Rn,V(Rn,yn),yn);const ld=new B(new Ht(6.2,.055,7,48),new Pe({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));ld.rotation.x=Math.PI/2,ld.position.y=.035,vs.add(ld);for(const[d,y]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const f=le(.18,1,.18,4797735,1);f.position.set(d,.5,y),vs.add(f)}for(const d of[-2.4,2.9]){const y=le(10.2,.12,.12,6308139,1);y.position.set(0,.59,d),vs.add(y)}const Zx=ve(6906972,1);for(let d=0;d<7;d++){const y=new B(new ot(.32,.4,.12,7),Zx);y.position.set(0,.08,4.1+d*.72),y.rotation.y=d*.4,vs.add(y)}Lr(Rn-2.4,yn+4.8,.48).scale.setScalar(.72),ae(vs,"heroHomeYard","Двор домика героя"),F.push(vs),Lr(68,8,.75).scale.setScalar(.72);const u0=new B(new ot(.65,.8,.7,7),ve(5327426,1));u0.position.set(68,V(68,8)+.35,6.5),S.add(u0);for(const[d,y]of[[66,10],[70,10],[66,6],[70,6]]){const f=le(.16,1.15,.16,4797735,1);f.position.set(d,V(d,y)+.57,y),S.add(f)}const Dl=new qe;Dl.position.set(-30,V(-30,15),15);const cd=new B(new ot(.5,.62,7,8),new Pe({map:Me,color:4995371,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}));cd.rotation.z=Math.PI/2,cd.position.y=.5,Dl.add(cd);const ud=new B(new ot(.53,.53,.12,12),ve(7693389,1));ud.rotation.z=Math.PI/2,ud.position.set(3.5,.5,0),Dl.add(ud),S.add(Dl);for(let d=0;d<7;d++){const y=new B(new sn(.14,0),ve(6913394,1)),f=d/7*Math.PI*2;y.position.set(-45+Math.cos(f)*4,.12+V(-45+Math.cos(f)*4,75+Math.sin(f)*4),75+Math.sin(f)*4),S.add(y)}for(let d=0;d<95;d++){const y=j(d,77)*Math.PI*2,f=68+j(d,91)*27,A=Math.cos(y)*f,U=Math.sin(y)*f+2,X=[[bi,Ci,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([Q,ie,H])=>Math.hypot(A-Q,U-ie)<H);Math.abs(A+57)>9&&!X&&Ux(A,U,.78+j(d,13)*.82)}Al(-10,18,1.55,!1),Al(13,24,1.7,!1),Al(-31,-12,2.15,!0);for(let d=0;d<110;d++){const y=j(d,701)*Math.PI*2,f=15+j(d,702)*50,A=Math.cos(y)*f,U=Math.sin(y)*f+3;if(Math.abs(A)<10&&Math.abs(U)<16)continue;const L=new qe;L.position.set(A,V(A,U),U);for(let X=0;X<3;X++){const Q=new B(new pn(.025,.38+j(X,d)*.28,4),new Pe({color:X===1?5466175:4282935,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012}));Q.position.set((X-1)*.09,.18,(j(X*3,d)-.5)*.12),Q.rotation.z=(X-1)*.22,L.add(Q)}S.add(L)}for(let d=0;d<80;d++){const y=-88+j(d,101)*176,f=-88+j(d,111)*176;if(Math.hypot(y,f+2)>30){const A=new B(new pn(.08,.55+j(d,121)*.7,5),new Pe({color:4941888,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012}));A.position.set(y,V(y,f)+.3,f),S.add(A)}}for(let d=0;d<72;d++){const y=-84+j(d,150)*168,f=-82+j(d,151)*164,A=Math.hypot(y-1,f+1)<24,U=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([Q,ie,H])=>Math.hypot(y-Q,f-ie)<H);if(A||U)continue;const L=.1+j(d,152)*.24,X=new B(new sn(L,1),new Pe({color:d%3===0?5593940:6710877,roughness:.98,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.018}));X.scale.set(1+j(d,153)*1.3,.55+j(d,154)*.7,.72+j(d,155)*1.15),X.rotation.set(j(d,156)*1.7,j(d,157)*Math.PI,j(d,158)*1.7),X.position.set(y,V(y,f)+L*.22,f),X.castShadow=!0,X.receiveShadow=!0,S.add(X)}for(let d=0;d<46;d++){const y=-82+j(d,160)*164,f=-80+j(d,161)*160;if(Math.hypot(y-1,f+1)<28)continue;const A=.55+j(d,162)*1.15,U=new B(new ot(.025,.055,A,6),ve(4600356,.98));U.position.set(y,V(y,f)+.045,f),U.rotation.set(.05+j(d,163)*.35,j(d,164)*Math.PI,Math.PI*.5+(j(d,165)-.5)*.5),S.add(U)}const _s=new qe;_s.position.set(29,V(29,25),25),_s.userData={id:"tower",label:"Сторожевая башня"};for(const d of[-2,2])for(const y of[-2,2]){const f=le(.35,7,.35,3942685,1);f.position.set(d,3.5,y),_s.add(f)}const d0=le(5,.35,5,6833965,1);d0.position.y=5.8,_s.add(d0);const f0=new B(new pn(3.8,2.7,4),ve(2696482,1));f0.position.y=8,_s.add(f0),ae(_s,"tower","Сторожевая башня"),F.push(_s),oe(29,25,4.8,4.8,0,.08);const ua=(d,y,f,A,U,L)=>{const X=new qe;X.userData={id:f,label:A,phase:L,baseX:d,baseZ:y};const Q=new B(new li(.32,.78,4,8),ve(U,.9));Q.position.y=.85,X.add(Q);const ie=new B(new ht(.25,12,8),ve(13210736,.9));ie.position.y=1.58,X.add(ie);const H=le(.7,.9,.15,2565407,1);H.position.set(0,.82,-.27),X.add(H),X.position.set(d,V(d,y),y),ae(X,f,A),F.push(X),lt.push(X)};ua(9,-8,"elder","Старейшина",7558719,.4),ua(-6,-3,"blacksmith","Кузнец",6044459,1.5),ua(21,1,"hunter","Охотник",4215359,2.4),ua(5,10,"villager","Житель Мидгарда",5858125,3.4),ua(-16,4,"villager2","Житель деревни",6638394,4.2);const Jx=new At({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),dd=new qe;for(let d=0;d<34;d++){const y=new B(new ht(.9+j(d,810)*2.2,8,6),Jx);y.position.set(-88+j(d,811)*176,1.8+j(d,812)*2.2,-72+j(d,813)*144),dd.add(y)}S.add(dd);const xs=nb(t);S.add(xs);const fr=xs.userData.anim,h0=new fw,fd=new Qe,p0=d=>{var A,U,L,X;if((U=(A=d.target)==null?void 0:A.closest)!=null&&U.call(A,".mid3d-ui"))return;const y=W.domElement.getBoundingClientRect();fd.x=(d.clientX-y.left)/y.width*2-1,fd.y=-((d.clientY-y.top)/y.height)*2+1,h0.setFromCamera(fd,k);const f=h0.intersectObjects(F,!0)[0];if(f){let Q=f.object;for(;Q.parent&&!((L=Q.userData)!=null&&L.id);)Q=Q.parent;(X=Q.userData)!=null&&X.id&&e(Q.userData.id)}};W.domElement.addEventListener("pointerup",p0);const Qx=d=>{v.current=d,_(d),l(""),rn.visible=d,la.visible=!d,ca.visible=!d,sd.visible=!d,od.visible=!d,ad.visible=!d,d?(o.current.x=Rn,o.current.z=yn+.95,u.current.x=0,u.current.z=-1,Qs.rotation.y=-Math.PI/2):(o.current.x=Rn,o.current.z=yn+3.75,u.current.x=0,u.current.z=1,Qs.rotation.y=0),xs.position.set(o.current.x,V(o.current.x,o.current.z)+.04,o.current.z)};x.current=Qx;const ey=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],m0=()=>{const d=Math.max(1,T.clientWidth),y=Math.max(1,T.clientHeight);k.aspect=d/y,k.updateProjectionMatrix(),W.setSize(d,y,!1)};m0();const g0=new ResizeObserver(m0);g0.observe(T);let hd=0,v0=performance.now();const _0=d=>{const y=Math.min(.05,(d-v0)/1e3);v0=d;const f=o.current,A=Math.hypot(f.dx,f.dz);if(A>.05){const H=6.2*y;b(f,f.x+f.dx/A*H,f.z+f.dz/A*H),xs.rotation.y=Math.atan2(f.dx,f.dz),u.current.x=f.dx/A,u.current.z=f.dz/A,h(!0)}else h(!1);const U=V(f.x,f.z);if(xs.position.set(f.x,U+.04,f.z),fr){const H=d*.011+fr.phase,pe=A>.05?Math.sin(H)*.58:0,ge=A>.05?Math.sin(H+Math.PI)*.42:0;fr.legL.rotation.x=pe,fr.legR.rotation.x=-pe,fr.armL.upper.rotation.x=ge,fr.armR.upper.rotation.x=-ge,fr.armL.elbow.rotation.x=-Math.abs(ge)*.35,fr.armR.elbow.rotation.x=-Math.abs(ge)*.35,fr.weapon.rotation.z=-.12+(A>.05?Math.sin(H)*.035:0)}const L=u.current,X=v.current?new z(f.x-L.x*1,U+3.65,f.z-L.z*1):new z(f.x-L.x*2,U+7.2,f.z-L.z*2+11.8);k.position.lerp(X,v.current?.09:.055),k.lookAt(f.x+(v.current?L.x*.9:L.x*1.9),U+(v.current?1.25:1.2),f.z+(v.current?L.z*.9:L.z*1.9));let Q="",ie="";if(v.current)f.z>yn+1.72&&(Q="Дверь — выйти из дома",ie="heroHomeExit");else for(const H of ey)if(Math.hypot(f.x-H.x,f.z-H.z)<H.r){Q=H.label,ie=H.id;break}l(Q?`${Q}|${ie}`:""),$e.forEach(H=>{const pe=.72+.28*Math.sin(d*.0016+H.phase);H.mesh.scale.set(pe,pe*.42,pe);const ge=H.mesh.material;ge.opacity=.055+.055*(.5+.5*Math.sin(d*.0016+H.phase))}),Ft.forEach(H=>{H.light.intensity=2+Math.sin(d*.012+H.phase)*.5,H.flame.scale.y=.9+Math.sin(d*.009+H.phase)*.12}),dd.children.forEach((H,pe)=>{H.position.x+=Math.sin(d*12e-5+pe)*.003,H.position.z+=Math.cos(d*1e-4+pe)*.002}),nt.forEach((H,pe)=>{var Je,mt;if(H.kind==="deer"){const It=H.g.position.x-xs.position.x,tn=H.g.position.z-xs.position.z,Bt=Math.hypot(It,tn);if(Bt<11){const Yt=((Je=H.g.userData)==null?void 0:Je.legJoints)||[],qt=d*.014*(H.speed||1);for(let Gt=0;Gt<4;Gt++){const Mn=Yt[Gt*2],vi=Yt[Gt*2+1];Mn&&(Mn.rotation.z=Math.sin(qt+Gt*Math.PI)*.1),vi&&(vi.rotation.z=Math.max(0,Math.sin(qt+Gt*Math.PI))*-.18)}const Nt=Math.max(.001,Bt),Ut=Bt<5.5?.115:.075,cn=H.g.position.x+It/Nt*Ut,Nn=H.g.position.z+tn/Nt*Ut,oi=cn-30,He=Nn-53;if(Math.hypot(oi,He)<17)H.g.position.set(cn,V(cn,Nn),Nn);else{const Gt=Math.atan2(He,oi),Mn=30+Math.cos(Gt)*16,vi=53+Math.sin(Gt)*10;H.g.position.set(Mn,V(Mn,vi),vi)}H.g.rotation.y=Math.atan2(tn,It),H.g.position.y+=Math.sin(d*.008+pe)*.025;return}}const ge=d*.00105*H.speed+H.phase,Oe=H.x+Math.cos(ge)*H.r,Ce=H.z+Math.sin(ge*.83)*H.r*.62;if(H.g.position.set(Oe,V(Oe,Ce),Ce),H.g.rotation.y=Math.atan2(Math.cos(ge*.83),-Math.sin(ge)),H.kind==="deer"){const It=((mt=H.g.userData)==null?void 0:mt.legJoints)||[],tn=d*.014*(H.speed||1);for(let Bt=0;Bt<4;Bt++){const Yt=It[Bt*2],qt=It[Bt*2+1];Yt&&(Yt.rotation.z=Math.sin(tn+Bt*Math.PI)*.1),qt&&(qt.rotation.z=Math.max(0,Math.sin(tn+Bt*Math.PI))*-.18)}H.g.position.y+=Math.sin(d*.006+pe)*.025,H.g.rotation.x=Math.sin(d*.004+H.phase)*.018}}),lt.forEach((H,pe)=>{const ge=H.userData.phase||0,Oe=H.userData.baseX,Ce=H.userData.baseZ,Je=Oe+Math.sin(d*28e-5+ge)*1.6,mt=Ce+Math.cos(d*22e-5+ge)*1.1;H.position.set(Je,V(Je,mt),mt),H.rotation.y=Math.sin(d*4e-4+ge)*.5}),W.render(S,k),hd=requestAnimationFrame(_0)};return hd=requestAnimationFrame(_0),()=>{cancelAnimationFrame(hd),g0.disconnect(),W.domElement.removeEventListener("pointerup",p0),$e.forEach(d=>{d.mesh.geometry.dispose(),d.mesh.material.dispose()}),de.dispose(),Ne.dispose(),et.dispose(),W.dispose(),S.traverse(d=>{var y,f,A,U;d.isMesh&&((f=(y=d.geometry)==null?void 0:y.dispose)==null||f.call(y),Array.isArray(d.material)?d.material.forEach(L=>{var X;return(X=L.dispose)==null?void 0:X.call(L)}):(U=(A=d.material)==null?void 0:A.dispose)==null||U.call(A))}),W.domElement.remove(),x.current=null}},[t.id,e,n]);const w=T=>{const S=r.current,k=s.current;if(!S||!k)return;const W=S.getBoundingClientRect(),te=W.left+W.width/2,ue=W.top+W.height/2,fe=48;let V=T.clientX-te,K=T.clientY-ue;const O=Math.hypot(V,K);O>fe&&(V=V/O*fe,K=K/O*fe),k.style.transform=`translate(${V}px,${K}px)`,o.current.dx=V/fe,o.current.dz=K/fe},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=T=>{var K,O;const S=r.current;if(!S)return;const k=T.target;if((K=k.closest)!=null&&K.call(k,".mid3d-action")||(O=k.closest)!=null&&O.call(k,".mid3d-interact"))return;const W=S.getBoundingClientRect(),te=26;T.clientX>=W.left-te&&T.clientX<=W.right+te&&T.clientY>=W.top-78&&T.clientY<=W.bottom+26&&(T.currentTarget.setPointerCapture(T.pointerId),w(T))},I=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&w(T)},N=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId),R()};return q.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:I,onPointerUp:N,onPointerCancel:N,onContextMenu:T=>T.preventDefault(),children:[q.jsxs("div",{className:"mid3d-ui mid3d-top",children:[q.jsxs("div",{className:"mid3d-pill",children:[q.jsx("b",{children:"МИДГАРД"}),q.jsx("span",{children:"Деревня • река • лес • святилища"})]}),q.jsxs("div",{className:"mid3d-pill",children:[q.jsx("b",{children:"ᛟ"}),q.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[q.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),q.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[q.jsx("b",{children:"Камень Трёх Нитей"}),q.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>M(!1),children:"Продолжить путь"})]}),p&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[q.jsx("b",{children:"🜂 Круг Силы"}),q.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),q.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!p&&!g&&(()=>{const[T,S]=a.split("|"),k=S==="heroHome"||S==="heroHomeExit";return q.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[q.jsx("b",{children:T}),q.jsx("span",{children:k?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),q.jsx("button",{onPointerDown:W=>W.stopPropagation(),onClick:()=>{var W,te;S==="powerCircle"?m(!0):S==="threeThreads"?M(!0):S==="heroHome"?(W=x.current)==null||W.call(x,!0):S==="heroHomeExit"?(te=x.current)==null||te.call(x,!1):e(S)},children:k?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),q.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:q.jsx("div",{className:"mid3d-knob",ref:s})}),q.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:T=>T.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),q.jsx("div",{className:"mid3d-ui mid3d-hint",children:E?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function rb(){const[t,e]=St.useState(()=>F1().hero?{t:"tree"}:{t:"choose"}),[n,i]=St.useState(F1),[r,s]=St.useState(""),[o,a]=St.useState(""),[l,c]=St.useState(""),h=St.useRef(0),[p,m]=St.useState(null),[g,M]=St.useState(null),[E,_]=St.useState(!1),[u,v]=St.useState(0),[x,w]=St.useState(0),[R,P]=St.useState(0),[I,N]=St.useState(""),[T,S]=St.useState(!1),[k,W]=St.useState(!1),[te,ue]=St.useState(""),[fe,V]=St.useState(.06);St.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),St.useEffect(()=>{var G,Ie,oe,se;(G=Rt==null?void 0:Rt.ready)==null||G.call(Rt),(Ie=Rt==null?void 0:Rt.expand)==null||Ie.call(Rt),(oe=Rt==null?void 0:Rt.setHeaderColor)==null||oe.call(Rt,"#0b0f0c"),(se=Rt==null?void 0:Rt.setBackgroundColor)==null||se.call(Rt,"#0b0f0c")},[]),St.useEffect(()=>{if(!(Rt!=null&&Rt.BackButton))return;const G=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Rt.BackButton.show(),Rt.BackButton.onClick(G)):Rt.BackButton.hide(),()=>{var Ie,oe;(oe=(Ie=Rt.BackButton)==null?void 0:Ie.offClick)==null||oe.call(Ie,G)}},[t,n.hero]),St.useEffect(()=>{m(null),M(null),_(!1),ue(""),S(!1)},[t]);const K=G=>{c(G),window.clearTimeout(h.current),h.current=window.setTimeout(()=>c(""),1800)},O=(G="light")=>{var Ie,oe,se,Ke;try{G==="success"?(oe=(Ie=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:Ie.notificationOccurred)==null||oe.call(Ie,"success"):(Ke=(se=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:se.impactOccurred)==null||Ke.call(se,"light")}catch{}},J=G=>e(G),de=G=>{O(),e({t:"realm",id:G.id})},Me=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),De=()=>{const G=Me();if(G<=0){K("Дозор только начался — искры ещё копятся.");return}i(Ie=>({...Ie,sparks:Ie.sparks+G,watch:Date.now()})),O("success"),K("Дозор завершён: +"+G+" ✨")},dt=()=>{if(n.gift===Aa())return;const Ie=(n.gift?Math.round((Date.parse(Aa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,oe=Ef[Ie-1];i(se=>({...se,sparks:se.sparks+oe,gift:Aa(),streak:Ie})),O("success"),K("Дар Древа, день "+Ie+": +"+oe+" ✨")},ut=()=>{!r||!o||(i(G=>({...G,hero:{id:r,name:o}})),O("success"),K("Путь начинается, "+o+"!"),e({t:"tree"}))},Re=n.hero?Tf.find(G=>G.id===n.hero.id):null,me=G=>Math.floor(Math.random()*G),ae=G=>n.trials.filter(Ie=>Ie.startsWith(G+":")).length,ve=G=>{if(n.artifacts.includes(G.id)){K("Мир покорён. Артефакт хранится в листе героя.");return}O(),e({t:"trial",id:G.id})},le=(G,Ie,oe)=>{const se=Ie===2;i(Ke=>({...Ke,sparks:Ke.sparks+oe+(se?30:0),trials:[...Ke.trials,G+":"+Ie],artifacts:se?[...Ke.artifacts,G]:Ke.artifacts})),se&&(O("success"),K("Мир пройден! Артефакт: "+bf[G]))},Ve=(G,Ie)=>{if(p!==null)return;const oe=ae(G),se=Af[G][oe];if(Ie===se.c){m(Ie),O("success");const Ke=12+oe*3+((Re==null?void 0:Re.id)==="dwarf"?6:0);K("Верно! Сундук хозяина: +"+Ke+" ✨"),le(G,oe,Ke);return}if(n.powers.includes("mimirEye")){m(se.c),i(it=>({...it,powers:it.powers.filter(D=>D!=="mimirEye")}));const Ke=8+oe*2;O("success"),K("Око Мимира раскрыло истину. Ответ исправлен. +"+Ke+" ✨"),le(G,oe,Ke);return}if(n.powers.includes("nornThread")){m(Ie),i(it=>({...it,powers:it.powers.filter(D=>D!=="nornThread")}));const Ke=6+oe*2;O("success"),K("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ke+" ✨"),le(G,oe,Ke);return}m(Ie),O(),N(ba[G].name+" мрачнеет: «Что ж — пусть решит сталь!»")},at=G=>{const Ie=ae(G),oe=Af[G][Ie],se=oe.a.findIndex((Ke,it)=>it!==oe.c&&it!==g);M(se),_(!0),O(),K("Шёпот ветров уносит один ответ...")},dn=G=>{const Ie=ba[G],oe=n.powers.includes("ashBreath");v(Ie.hp),w(Re.hp+(oe?25:0)),P(Re.en+(oe?2:0)),ue(""),S(!1),W(!1),N(oe?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Ie.name+" поднимает оружие!"),oe&&i(se=>({...se,powers:se.powers.filter(Ke=>Ke!=="ashBreath")})),e({t:"fight",id:G})},F=(G,Ie)=>{if(te)return;const oe=ba[G],se=ae(G);let Ke=0,it="",D=R,b=T;if(Ie==="hit"&&(Ke=Re.str+me(4),n.powers.includes("fireOath")&&(Ke+=5,i(ke=>({...ke,powers:ke.powers.filter(Ee=>Ee!=="fireOath")})),it="Огненный обет! "),Re.id==="berserk"&&x<=Re.hp/2&&(Ke*=2,it+="Медвежья ярость! "),it+="Ты бьёшь: "+Re.weapon+" — −"+Ke+" хозяину."),Ie==="rune"){if(R<4){K("Мало энергии для заклинания!");return}D=R-4,Ke=Re.en+2+me(5),it="Руническое заклинание вспыхивает: −"+Ke+" хозяину."}Ie==="shield"&&(b=!0,it="Ты поднимаешь щит — удар ослабнет.");const ee=u-Ke;if(ee<=0){v(0),P(D),ue("win");const ke=8+se*2;N("Хозяин повержен! Награда: +"+ke+" ✨"),le(G,se,ke);return}let ce=oe.atk+me(3),xe="";b&&(ce=Math.ceil(ce*.3),xe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(ce=Math.ceil(ce*.65),i(ke=>({...ke,powers:ke.powers.filter(Ee=>Ee!=="iceOath")})),xe+=" Ледяной обет сковал удар врага."),Re.id==="dwarf"&&(ce=Math.ceil(ce*.75));let he=x;if(Re.id==="viking"&&!k&&he-ce<=0&&(W(!0),ce=0,xe=" Крылья бури поглотили смертельный удар!"),he=he-ce,v(ee),w(Math.max(0,he)),P(D),S(!1),he<=0&&n.powers.includes("yggdrasilCall")){i(ke=>({...ke,powers:ke.powers.filter(Ee=>Ee!=="yggdrasilCall")})),w(30),N(it+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(he<=0){ue("lose"),i(ke=>({...ke,sparks:Math.max(0,ke.sparks-10)})),N(it+" "+oe.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}N(it+xe+" "+oe.name+" отвечает: −"+ce+".")},Ft=G=>{ae(G)>=3||n.artifacts.includes(G)?e({t:"realm",id:G}):e({t:"trial",id:G})},lt=G=>G==="tree"?t.t==="tree"||t.t==="realm":t.t===G,nt=G=>G==="tree"?{t:"tree"}:{t:G};return q.jsxs("div",{className:"app",children:[q.jsx("style",{children:eb}),q.jsxs("div",{className:"hdr",children:[t.t==="tree"&&q.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&q.jsx("button",{className:"back",onClick:()=>J({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&q.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&q.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&q.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&q.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&q.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&q.jsx("div",{className:"title",children:"⚔ Бой"}),q.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&q.jsxs("div",{className:"scroll choose-screen",children:[q.jsxs("div",{className:"card center choose-intro",children:[q.jsx("div",{className:"big",children:"ᛉ"}),q.jsx("div",{className:"qhead2",children:"Выбери героя"}),q.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Tf.map(G=>q.jsxs("button",{className:"hcard"+(r===G.id?" on":""),onClick:()=>{s(G.id),a(""),O()},children:[q.jsx("span",{className:"hface",style:{borderColor:G.color,color:G.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:q.jsx(Hr,{name:G.img,className:"himg"})}),q.jsxs("span",{className:"hinfo",children:[q.jsx("span",{className:"hname",style:{color:G.color},children:G.race}),q.jsxs("span",{className:"hab",children:["🌀 ",G.ability,": ",G.abilityDesc]}),q.jsxs("span",{className:"hst",children:["⚔ ",G.str," • ✨ ",G.en," • ❤ ",G.hp]}),q.jsxs("span",{className:"hw",children:["🗡 ",G.weapon]})]})]},G.id)),r&&q.jsxs("div",{className:"card",children:[q.jsx("div",{className:"qhead2",children:"Имя героя"}),q.jsx("div",{className:"chips",children:(Tf.find(G=>G.id===r).gender==="f"?JA:QA).map(G=>q.jsx("button",{className:"chip"+(o===G?" on":""),onClick:()=>{a(G),O()},children:G},G))})]}),q.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ut,children:"Вступить на путь"})]}),t.t==="tree"&&q.jsxs("div",{className:"maparea",children:[q.jsx("div",{className:"mapwrap",children:q.jsxs("div",{className:"mapcanvas",children:[q.jsx(Hr,{name:"tree",className:"mapimg"}),Mc.map(G=>q.jsxs("button",{className:"marker",style:{left:G.x+"%",top:G.y+"%"},onClick:()=>de(G),children:[q.jsxs("div",{className:"amulet-wrap",children:[q.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${G.glow}, transparent 70%)`}}),q.jsx("div",{className:"amulet-ring",style:{borderColor:G.color}}),q.jsx("div",{className:"amulet-core",style:{borderColor:G.color,color:G.color,background:`linear-gradient(135deg, ${G.dark}, #0a0a0a)`},children:G.runeSym})]}),q.jsx("span",{className:"mname",style:{color:G.color,borderColor:G.glow},children:G.name})]},G.id))]})}),q.jsx("div",{className:"fadeT"}),q.jsx("div",{className:"fadeB"}),q.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Re&&n.hero&&q.jsxs("button",{className:"herobar",onClick:()=>J({t:"hero"}),children:[q.jsxs("span",{className:"hbface",style:{borderColor:Re.color,color:Re.color},children:[q.jsx(Hr,{name:Re.img,className:"hbimg"}),Re.sym]}),q.jsxs("span",{className:"hbname",children:[n.hero.name,q.jsx("i",{children:Re.race})]}),q.jsxs("span",{className:"hbst",children:["⚔ ",Re.str," ✨ ",Re.en," ⏳ ",Me()]}),q.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const G=Mc.find(Ie=>Ie.id===t.id);if(G.id==="midgard"){if(!Re)return null;const Ie=oe=>{if(O(),oe==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?K("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(se=>({...se,sparks:se.sparks+20,done:[...new Set([...se.done,"forest:present:reward"])]})),O("success"),K("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):K("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(oe==="norns"){K("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(oe==="threeThreads"){K("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(oe==="forge"||oe==="blacksmith"){K("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(oe==="house"||oe==="elder"){K("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(oe==="port"){K("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(oe==="rune"){K("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(oe==="ashgrove"){K("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(oe==="runefield"){K("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(oe==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?K("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(se=>({...se,sparks:se.sparks+20,done:[...new Set([...se.done,"forest:past:reward"])]})),O("success"),K("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):K("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(oe==="forestCache"){n.done.includes("forest:cache")?K("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(se=>({...se,sparks:se.sparks+18,done:[...new Set([...se.done,"forest:cache"])]})),O("success"),K("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(oe==="forestWhisper"){n.done.includes("forest:whisper")?K("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(se=>({...se,sparks:se.sparks+16,done:[...new Set([...se.done,"forest:whisper"])]})),O("success"),K("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(oe==="forestThread"){n.done.includes("forest:thread")?K("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(se=>({...se,sparks:se.sparks+22,done:[...new Set([...se.done,"forest:thread"])]})),O("success"),K("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(oe==="heroHome"){K("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(oe==="hunterCamp"){n.done.includes("forest:camp")?K("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(se=>({...se,sparks:se.sparks+14,done:[...new Set([...se.done,"forest:camp"])]})),O("success"),K("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(oe==="deepGrove"){n.done.includes("forest:grove")?K("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(se=>({...se,sparks:se.sparks+17,done:[...new Set([...se.done,"forest:grove"])]})),O("success"),K("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(oe==="fallenAsh"){n.done.includes("forest:ash")?K("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(se=>({...se,sparks:se.sparks+21,done:[...new Set([...se.done,"forest:ash"])]})),O("success"),K("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(oe==="deer"){K("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(oe==="hoddmimir"){K("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(oe==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?K("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(se=>({...se,sparks:se.sparks+20,done:[...new Set([...se.done,"forest:future:reward"])]})),O("success"),K("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):K("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(oe==="forestEvent"){n.done.includes("forest:choice")&&K("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(oe==="forestEvent:past"){i(se=>({...se,sparks:se.sparks+12,done:[...new Set([...se.done,"forest:choice","forest:past"])]})),O("success"),K("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(oe==="forestEvent:present"){i(se=>({...se,sparks:se.sparks+12,done:[...new Set([...se.done,"forest:choice","forest:present"])]})),O("success"),K("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(oe==="forestEvent:future"){i(se=>({...se,sparks:se.sparks+12,done:[...new Set([...se.done,"forest:choice","forest:future"])]})),O("success"),K("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(oe==="event"){K("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(oe.startsWith("ritual:")){const se=oe.slice(7),Ke={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},D={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[se];if(!D)return;if(n.powers.includes(D)){K(Ke[se]+" уже пробуждён. Его сила ждёт своего часа.");return}i(ee=>({...ee,powers:[...new Set([...ee.powers,D])],done:[...new Set([...ee.done,"ritual:"+se])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};O("success"),K(b[se]);return}};return q.jsx(ib,{h:Re,on:Ie,eventDone:n.done.includes("forest:choice")})}return q.jsxs("div",{className:"content",children:[q.jsx(Hr,{name:G.id,className:"bgimg"}),q.jsx("div",{className:"veil"}),q.jsxs("div",{className:"banner",children:[q.jsx("span",{className:"bemoji",children:G.emoji}),q.jsxs("div",{children:[q.jsx("div",{className:"bname",children:G.name}),q.jsx("div",{className:"btag",children:G.tag})]})]}),q.jsxs("button",{className:"gate",onClick:()=>ve(G),children:[q.jsxs("span",{className:"gwrap",children:[q.jsx("span",{className:"gate-ring",style:{borderColor:G.color}}),q.jsx("span",{className:"gate-core",style:{borderColor:G.color,color:G.color,background:`radial-gradient(circle, ${G.dark}, #050705 75%)`},children:G.runeSym})]}),q.jsx("span",{className:"mname",style:{color:G.color,borderColor:G.glow},children:n.artifacts.includes(G.id)?"Мир покорён":"Врата мира"})]}),q.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const G=Mc.find(Ke=>Ke.id===t.id),Ie=ba[G.id],oe=ae(G.id);if(oe>=3)return q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🏺"}),q.jsx("div",{className:"qhead2",children:"Мир покорён!"}),q.jsxs("p",{className:"dim",children:["Артефакт: ",bf[G.id]]}),q.jsx("button",{className:"btn gold",onClick:()=>J({t:"realm",id:G.id}),children:"К вратам"})]})});const se=Af[G.id][oe];return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"mhead",children:[q.jsxs("span",{className:"mface",style:{borderColor:G.color,color:G.color},children:[q.jsx(Hr,{name:k1[G.id],className:"himg"}),Ie.sym]}),q.jsx("span",{className:"mname2",style:{color:G.color},children:Ie.name}),q.jsxs("span",{className:"mtitle",children:[Ie.title," • испытание ",oe+1," из 3"]})]}),oe===0&&q.jsxs("div",{className:"greet",children:["«",Ie.greet,"»"]}),q.jsxs("div",{className:"cloud",children:[q.jsx("div",{className:"riddle",children:se.q}),se.a.map((Ke,it)=>q.jsx("button",{className:"ans"+(p!==null?it===se.c?" good":it===p?" bad":" off":g===it?" off":""),onClick:()=>Ve(G.id,it),children:Ke},it)),(Re==null?void 0:Re.id)==="elf"&&!E&&p===null&&q.jsx("button",{className:"btn rune",onClick:()=>at(G.id),children:"🌀 Шёпот ветров"}),p!==null&&(p===se.c?q.jsx("button",{className:"btn gold",onClick:()=>Ft(G.id),children:"Открыть сундук →"}):q.jsx("button",{className:"btn",onClick:()=>dn(G.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const G=Mc.find(oe=>oe.id===t.id),Ie=ba[G.id];return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"duel",children:[q.jsxs("div",{className:"dside",children:[q.jsxs("span",{className:"dface",style:{borderColor:G.color,color:G.color},children:[q.jsx(Hr,{name:k1[G.id],className:"himg"}),Ie.sym]}),q.jsx("span",{className:"dname",style:{color:G.color},children:Ie.name}),q.jsx("span",{className:"dhp",children:q.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Ie.hp*100)+"%",background:G.color}})}),q.jsxs("span",{className:"dnum",children:[u,"/",Ie.hp]})]}),q.jsx("span",{className:"dvs",children:"⚔"}),q.jsxs("div",{className:"dside",children:[q.jsxs("span",{className:"dface",style:{borderColor:Re.color,color:Re.color},children:[q.jsx(Hr,{name:Re.img,className:"himg"}),Re.sym]}),q.jsx("span",{className:"dname",style:{color:Re.color},children:n.hero.name}),q.jsx("span",{className:"dhp",children:q.jsx("span",{className:"dhpfill",style:{width:Math.max(0,x/Re.hp*100)+"%",background:"#7ee787"}})}),q.jsx("span",{className:"denergy",children:Array.from({length:Re.en}).map((oe,se)=>q.jsx("span",{className:"pip"+(se<R?" on":"")},se))})]})]}),q.jsx("div",{className:"flog",children:I}),!te&&q.jsxs("div",{className:"acts",children:[q.jsxs("button",{className:"btn gold",onClick:()=>F(G.id,"hit"),children:["⚔ Удар: ",Re.weapon]}),q.jsx("button",{className:"btn rune",onClick:()=>F(G.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),q.jsx("button",{className:"btn shield",onClick:()=>F(G.id,"shield"),children:"🛡 Щит"})]}),te==="win"&&q.jsx("button",{className:"btn gold",onClick:()=>Ft(G.id),children:"Забрать награду →"}),te==="lose"&&q.jsx("button",{className:"btn ghost",onClick:()=>J({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Re&&n.hero&&q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("span",{className:"hface bigface",style:{borderColor:Re.color,color:Re.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:q.jsx(Hr,{name:Re.img,className:"himg"})}),q.jsxs("div",{className:"qhead2",style:{color:Re.color},children:[n.hero.name," • ",Re.race]}),q.jsxs("div",{className:"stats",children:[q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["⚔ ",Re.str]}),q.jsx("span",{children:"сила"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["✨ ",Re.en]}),q.jsx("span",{children:"энергия"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["❤ ",Re.hp]}),q.jsx("span",{children:"здоровье"})]})]}),q.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",q.jsx("b",{children:Re.weapon})]}),q.jsxs("div",{className:"hrow",children:["🌀 ",Re.ability,": ",Re.abilityDesc]}),q.jsxs("div",{className:"hrow",children:["✨ Искр: ",q.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",q.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&q.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(G=>bf[G]).join(", ")]})]})}),t.t==="gift"&&(()=>{const G=n.gift===Aa(),oe=(n.gift?Math.round((Date.parse(Aa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,se=G?n.streak:oe;return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🎁"}),q.jsx("div",{className:"qhead2",children:"Дар Древа"}),q.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),q.jsx("div",{className:"days",children:Ef.map((Ke,it)=>q.jsxs("span",{className:"day"+(it+1===se?" on":it+1<se&&G?" done":""),children:[q.jsx("b",{children:Ke}),"день ",it+1]},it))}),G?q.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):q.jsxs("button",{className:"btn gold",onClick:dt,children:["Забрать дар +",Ef[oe-1]," ✨"]})]}),q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"⏳"}),q.jsx("div",{className:"qhead2",children:"Дозор героя"}),q.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),q.jsxs("button",{className:"btn gold",onClick:De,children:["Завершить дозор · +",Me()," ✨"]})]})]})})(),t.t==="hall"&&q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🏛️"}),q.jsx("div",{className:"qhead2",children:"Чертог путника"}),q.jsxs("div",{className:"stats",children:[q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["✨ ",n.sparks]}),q.jsx("span",{children:"Искр"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),q.jsx("span",{children:"артефакты"})]})]}),q.jsxs("div",{className:"rank",children:["🏆 Ранг: ",ZA(n.sparks)]}),n.hero&&Re&&q.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Re.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&q.jsx("div",{className:"nav",children:KA.map(G=>q.jsxs("button",{className:"navbtn"+(lt(G.id)?" on":""),onClick:()=>J(nt(G.id)),children:[q.jsx("span",{className:"ic",children:G.ic}),G.t]},G.id))}),l&&q.jsx("div",{className:"toast",children:l})]})}J_(document.getElementById("root")).render(q.jsx(rb,{}));
