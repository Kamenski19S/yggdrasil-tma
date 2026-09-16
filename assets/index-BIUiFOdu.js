(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var tv={exports:{}},eu={},nv={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),r1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),a1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),u1=Symbol.for("react.lazy"),Fm=Symbol.iterator;function d1(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rv=Object.assign,sv={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ov(){}ov.prototype=Bo.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}var Uh=Ih.prototype=new ov;Uh.constructor=Ih;rv(Uh,Bo.prototype);Uh.isPureReactComponent=!0;var Om=Array.isArray,av=Object.prototype.hasOwnProperty,Fh={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,i)&&!lv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sl,type:t,key:s,ref:o,props:r,_owner:Fh.current}}function f1(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function h1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h1(""+t.key):e.toString(36)}function lc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case t1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ku(o,0):i,Om(r)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),lc(r,e,n,"",function(c){return c})):r!=null&&(Oh(r)&&(r=f1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(km,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Om(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ku(s,a);o+=lc(s,e,n,l,r)}else if(l=d1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ku(s,a++),o+=lc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var i=[],r=0;return lc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function p1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gn={current:null},cc={transition:null},m1={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:cc,ReactCurrentOwner:Fh};function uv(){throw Error("act(...) is not supported in production builds of React.")}mt.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!Oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};mt.Component=Bo;mt.Fragment=n1;mt.Profiler=r1;mt.PureComponent=Ih;mt.StrictMode=i1;mt.Suspense=l1;mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;mt.act=uv;mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)av.call(e,l)&&!lv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sl,type:t.type,key:r,ref:s,props:i,_owner:o}};mt.createContext=function(t){return t={$$typeof:o1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s1,_context:t},t.Consumer=t};mt.createElement=cv;mt.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};mt.createRef=function(){return{current:null}};mt.forwardRef=function(t){return{$$typeof:a1,render:t}};mt.isValidElement=Oh;mt.lazy=function(t){return{$$typeof:u1,_payload:{_status:-1,_result:t},_init:p1}};mt.memo=function(t,e){return{$$typeof:c1,type:t,compare:e===void 0?null:e}};mt.startTransition=function(t){var e=cc.transition;cc.transition={};try{t()}finally{cc.transition=e}};mt.unstable_act=uv;mt.useCallback=function(t,e){return Gn.current.useCallback(t,e)};mt.useContext=function(t){return Gn.current.useContext(t)};mt.useDebugValue=function(){};mt.useDeferredValue=function(t){return Gn.current.useDeferredValue(t)};mt.useEffect=function(t,e){return Gn.current.useEffect(t,e)};mt.useId=function(){return Gn.current.useId()};mt.useImperativeHandle=function(t,e,n){return Gn.current.useImperativeHandle(t,e,n)};mt.useInsertionEffect=function(t,e){return Gn.current.useInsertionEffect(t,e)};mt.useLayoutEffect=function(t,e){return Gn.current.useLayoutEffect(t,e)};mt.useMemo=function(t,e){return Gn.current.useMemo(t,e)};mt.useReducer=function(t,e,n){return Gn.current.useReducer(t,e,n)};mt.useRef=function(t){return Gn.current.useRef(t)};mt.useState=function(t){return Gn.current.useState(t)};mt.useSyncExternalStore=function(t,e,n){return Gn.current.useSyncExternalStore(t,e,n)};mt.useTransition=function(){return Gn.current.useTransition()};mt.version="18.3.1";nv.exports=mt;var vt=nv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=vt,v1=Symbol.for("react.element"),_1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,y1=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)x1.call(e,i)&&!M1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:v1,type:t,key:s,ref:o,props:r,_owner:y1.current}}eu.Fragment=_1;eu.jsx=dv;eu.jsxs=dv;tv.exports=eu;var G=tv.exports,fv={exports:{}},ui={},hv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,J){var te=U.length;U.push(J);e:for(;0<te;){var Se=te-1>>>1,Fe=U[Se];if(0<r(Fe,J))U[Se]=J,U[te]=Fe,te=Se;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var J=U[0],te=U.pop();if(te!==J){U[0]=te;e:for(var Se=0,Fe=U.length,st=Fe>>>1;Se<st;){var Pe=2*(Se+1)-1,de=U[Pe],B=Pe+1,fe=U[B];if(0>r(de,te))B<Fe&&0>r(fe,de)?(U[Se]=fe,U[B]=te,Se=B):(U[Se]=de,U[Pe]=te,Se=Pe);else if(B<Fe&&0>r(fe,te))U[Se]=fe,U[B]=te,Se=B;else break e}}return J}function r(U,J){var te=U.sortIndex-J.sortIndex;return te!==0?te:U.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,y=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=U)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function M(U){if(w=!1,_(U),!y)if(n(l)!==null)y=!0,V(C);else{var J=n(c);J!==null&&j(M,J.startTime-U)}}function C(U,J){y=!1,w&&(w=!1,u(N),N=-1),p=!0;var te=h;try{for(_(J),f=n(l);f!==null&&(!(f.expirationTime>J)||U&&!I());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,h=f.priorityLevel;var Fe=Se(f.expirationTime<=J);J=t.unstable_now(),typeof Fe=="function"?f.callback=Fe:f===n(l)&&i(l),_(J)}else i(l);f=n(l)}if(f!==null)var st=!0;else{var Pe=n(c);Pe!==null&&j(M,Pe.startTime-J),st=!1}return st}finally{f=null,h=te,p=!1}}var R=!1,L=null,N=-1,E=5,S=-1;function I(){return!(t.unstable_now()-S<E)}function H(){if(L!==null){var U=t.unstable_now();S=U;var J=!0;try{J=L(!0,U)}finally{J?$():(R=!1,L=null)}}else R=!1}var $;if(typeof m=="function")$=function(){m(H)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ae=re.port2;re.port1.onmessage=H,$=function(){ae.postMessage(null)}}else $=function(){g(H,0)};function V(U){L=U,R||(R=!0,$())}function j(U,J){N=g(function(){U(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,V(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var J=3;break;default:J=h}var te=h;h=J;try{return U()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=h;h=U;try{return J()}finally{h=te}},t.unstable_scheduleCallback=function(U,J,te){var Se=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Se+te:Se):te=Se,U){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=te+Fe,U={id:d++,callback:J,priorityLevel:U,startTime:te,expirationTime:Fe,sortIndex:-1},te>Se?(U.sortIndex=te,e(c,U),n(l)===null&&U===n(c)&&(w?(u(N),N=-1):w=!0,j(M,te-Se))):(U.sortIndex=Fe,e(l,U),y||p||(y=!0,V(C))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var J=h;return function(){var te=h;h=J;try{return U.apply(this,arguments)}finally{h=te}}}})(pv);hv.exports=pv;var S1=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=vt,ci=S1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,Oa={};function Ps(t,e){Co(t,e),Co(t+"Capture",e)}function Co(t,e){for(Oa[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Bm={};function T1(t){return Jd.call(Bm,t)?!0:Jd.call(zm,t)?!1:E1.test(t)?Bm[t]=!0:(zm[t]=!0,!1)}function A1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b1(t,e,n,i){if(e===null||typeof e>"u"||A1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){An[t]=new Wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];An[e]=new Wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){An[t]=new Wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){An[t]=new Wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){An[t]=new Wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){An[t]=new Wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){An[t]=new Wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){An[t]=new Wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){An[t]=new Wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,zh);An[e]=new Wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,zh);An[e]=new Wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,zh);An[e]=new Wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){An[t]=new Wn(t,1,!1,t.toLowerCase(),null,!1,!1)});An.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){An[t]=new Wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bh(t,e,n,i){var r=An.hasOwnProperty(e)?An[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(b1(e,n,r,i)&&(n=null),i||r===null?T1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hr=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),Hm=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Object.assign,zu;function Ma(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Bu=!1;function Hu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function C1(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case io:return"Portal";case Zd:return"Profiler";case Hh:return"StrictMode";case Qd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case Vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gh:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function R1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function P1(t){var e=xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=P1(t))}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return Qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mv(t,e){e=e.checked,e!=null&&Bh(t,"checked",e,!1)}function rf(t,e){Mv(t,e);var n=Wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function vo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return Qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(Sa(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function Sv(t,e){var n=Wr(e.value),i=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,Ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L1=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){L1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var D1=Qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(D1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,_o=null,xo=null;function jm(t){if(t=ll(t)){if(typeof df!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=su(e),df(t.stateNode,t.type,e))}}function bv(t){_o?xo?xo.push(t):xo=[t]:_o=t}function Cv(){if(_o){var t=_o,e=xo;if(xo=_o=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function Rv(t,e){return t(e)}function Pv(){}var Vu=!1;function Lv(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return Rv(t,e,n)}finally{Vu=!1,(_o!==null||xo!==null)&&(Pv(),Cv())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var ff=!1;if(cr)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){ff=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{ff=!1}function N1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ba=!1,Ac=null,bc=!1,hf=null,I1={onError:function(t){ba=!0,Ac=t}};function U1(t,e,n,i,r,s,o,a,l){ba=!1,Ac=null,N1.apply(I1,arguments)}function F1(t,e,n,i,r,s,o,a,l){if(U1.apply(this,arguments),ba){if(ba){var c=Ac;ba=!1,Ac=null}else throw Error(xe(198));bc||(bc=!0,hf=c)}}function Ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Ls(t)!==t)throw Error(xe(188))}function O1(t){var e=t.alternate;if(!e){if(e=Ls(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ym(r),t;if(s===i)return Ym(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function Nv(t){return t=O1(t),t!==null?Iv(t):null}function Iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=ci.unstable_scheduleCallback,qm=ci.unstable_cancelCallback,k1=ci.unstable_shouldYield,z1=ci.unstable_requestPaint,on=ci.unstable_now,B1=ci.unstable_getCurrentPriorityLevel,Xh=ci.unstable_ImmediatePriority,Fv=ci.unstable_UserBlockingPriority,Cc=ci.unstable_NormalPriority,H1=ci.unstable_LowPriority,Ov=ci.unstable_IdlePriority,tu=null,Gi=null;function V1(t){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Di=Math.clz32?Math.clz32:X1,G1=Math.log,W1=Math.LN2;function X1(t){return t>>>=0,t===0?32:31-(G1(t)/W1|0)|0}var El=64,Tl=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wa(a):(s&=o,s!==0&&(i=wa(s)))}else o=n&~r,o!==0?i=wa(o):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Di(e),r=1<<n,i|=t[n],e&=~r;return i}function j1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Di(e),t[e]=n}function q1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Rt=0;function zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,Yh,Hv,Vv,Gv,mf=!1,Al=[],Ir=null,Ur=null,Fr=null,Ba=new Map,Ha=new Map,Rr=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ll(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function K1(t,e,n,i,r){switch(e){case"focusin":return Ir=sa(Ir,t,e,n,i,r),!0;case"dragenter":return Ur=sa(Ur,t,e,n,i,r),!0;case"mouseover":return Fr=sa(Fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,sa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,sa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Wv(t){var e=ms(t.target);if(e!==null){var n=Ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Dv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uf=i,n.target.dispatchEvent(i),uf=null}else return e=ll(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){uc(t)&&n.delete(e)}function J1(){mf=!1,Ir!==null&&uc(Ir)&&(Ir=null),Ur!==null&&uc(Ur)&&(Ur=null),Fr!==null&&uc(Fr)&&(Fr=null),Ba.forEach(Km),Ha.forEach(Km)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,ci.unstable_scheduleCallback(ci.unstable_NormalPriority,J1)))}function Va(t){function e(r){return oa(r,t)}if(0<Al.length){oa(Al[0],t);for(var n=1;n<Al.length;n++){var i=Al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&oa(Ir,t),Ur!==null&&oa(Ur,t),Fr!==null&&oa(Fr,t),Ba.forEach(e),Ha.forEach(e),n=0;n<Rr.length;n++)i=Rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&Rr.shift()}var yo=hr.ReactCurrentBatchConfig,Pc=!0;function Z1(t,e,n,i){var r=Rt,s=yo.transition;yo.transition=null;try{Rt=1,qh(t,e,n,i)}finally{Rt=r,yo.transition=s}}function Q1(t,e,n,i){var r=Rt,s=yo.transition;yo.transition=null;try{Rt=4,qh(t,e,n,i)}finally{Rt=r,yo.transition=s}}function qh(t,e,n,i){if(Pc){var r=gf(t,e,n,i);if(r===null)Qu(t,e,i,Lc,n),$m(t,i);else if(K1(r,t,e,n,i))i.stopPropagation();else if($m(t,i),e&4&&-1<$1.indexOf(t)){for(;r!==null;){var s=ll(r);if(s!==null&&Bv(s),s=gf(t,e,n,i),s===null&&Qu(t,e,i,Lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Lc=null;function gf(t,e,n,i){if(Lc=null,t=Wh(i),t=ms(t),t!==null)if(e=Ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lc=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case Xh:return 1;case Fv:return 4;case Cc:case H1:return 16;case Ov:return 536870912;default:return 16}default:return 16}}var Dr=null,$h=null,dc=null;function jv(){if(dc)return dc;var t,e=$h,n=e.length,i,r="value"in Dr?Dr.value:Dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dc=r.slice(t,1<i?1-i:void 0)}function fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function Jm(){return!1}function di(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:Jm,this.isPropagationStopped=Jm,this}return Qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=di(Ho),al=Qt({},Ho,{view:0,detail:0}),ey=di(al),Wu,Xu,aa,nu=Qt({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Wu=t.screenX-aa.screenX,Xu=t.screenY-aa.screenY):Xu=Wu=0,aa=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),Zm=di(nu),ty=Qt({},nu,{dataTransfer:0}),ny=di(ty),iy=Qt({},al,{relatedTarget:0}),ju=di(iy),ry=Qt({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=di(ry),oy=Qt({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ay=di(oy),ly=Qt({},Ho,{data:0}),Qm=di(ly),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dy[t])?!!e[t]:!1}function Jh(){return fy}var hy=Qt({},al,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),py=di(hy),my=Qt({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e0=di(my),gy=Qt({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),vy=di(gy),_y=Qt({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=di(_y),yy=Qt({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),My=di(yy),Sy=[9,13,27,32],Zh=cr&&"CompositionEvent"in window,Ca=null;cr&&"documentMode"in document&&(Ca=document.documentMode);var wy=cr&&"TextEvent"in window&&!Ca,Yv=cr&&(!Zh||Ca&&8<Ca&&11>=Ca),t0=" ",n0=!1;function qv(t,e){switch(t){case"keyup":return Sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function Ey(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(n0=!0,t0);case"textInput":return t=e.data,t===t0&&n0?null:t;default:return null}}function Ty(t,e){if(so)return t==="compositionend"||!Zh&&qv(t,e)?(t=jv(),dc=$h=Dr=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ay[t.type]:e==="textarea"}function Kv(t,e,n,i){bv(i),e=Dc(e,"onChange"),0<e.length&&(n=new Kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Ga=null;function by(t){a_(t,0)}function iu(t){var e=lo(t);if(yv(e))return t}function Cy(t,e){if(t==="change")return e}var Jv=!1;if(cr){var Yu;if(cr){var qu="oninput"in document;if(!qu){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),qu=typeof r0.oninput=="function"}Yu=qu}else Yu=!1;Jv=Yu&&(!document.documentMode||9<document.documentMode)}function s0(){Ra&&(Ra.detachEvent("onpropertychange",Zv),Ga=Ra=null)}function Zv(t){if(t.propertyName==="value"&&iu(Ga)){var e=[];Kv(e,Ga,t,Wh(t)),Lv(by,e)}}function Ry(t,e,n){t==="focusin"?(s0(),Ra=e,Ga=n,Ra.attachEvent("onpropertychange",Zv)):t==="focusout"&&s0()}function Py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Ga)}function Ly(t,e){if(t==="click")return iu(e)}function Dy(t,e){if(t==="input"||t==="change")return iu(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ui=typeof Object.is=="function"?Object.is:Ny;function Wa(t,e){if(Ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jd.call(e,r)||!Ui(t[r],e[r]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a0(t,e){var n=o0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o0(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iy(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(i!==null&&Qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=a0(n,s);var o=a0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Uy=cr&&"documentMode"in document&&11>=document.documentMode,oo=null,vf=null,Pa=null,_f=!1;function l0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||oo==null||oo!==Tc(i)||(i=oo,"selectionStart"in i&&Qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Wa(Pa,i)||(Pa=i,i=Dc(vf,"onSelect"),0<i.length&&(e=new Kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=oo)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},$u={},t_={};cr&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function ru(t){if($u[t])return $u[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return $u[t]=e[n];return t}var n_=ru("animationend"),i_=ru("animationiteration"),r_=ru("animationstart"),s_=ru("transitionend"),o_=new Map,c0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){o_.set(t,e),Ps(e,[t])}for(var Ku=0;Ku<c0.length;Ku++){var Ju=c0[Ku],Fy=Ju.toLowerCase(),Oy=Ju[0].toUpperCase()+Ju.slice(1);qr(Fy,"on"+Oy)}qr(n_,"onAnimationEnd");qr(i_,"onAnimationIteration");qr(r_,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(s_,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function u0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,F1(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,c),s=l}}}if(bc)throw t=hf,bc=!1,hf=null,t}function Wt(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Rl]){t[Rl]=!0,mv.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Zu("selectionchange",!1,e))}}function l_(t,e,n,i){switch(Xv(e)){case 1:var r=Z1;break;case 4:r=Q1;break;default:r=qh}n=r.bind(null,e,n,t),r=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lv(function(){var c=s,d=Wh(n),f=[];e:{var h=o_.get(t);if(h!==void 0){var p=Kh,y=t;switch(t){case"keypress":if(fc(n)===0)break e;case"keydown":case"keyup":p=py;break;case"focusin":y="focus",p=ju;break;case"focusout":y="blur",p=ju;break;case"beforeblur":case"afterblur":p=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vy;break;case n_:case i_:case r_:p=sy;break;case s_:p=xy;break;case"scroll":p=ey;break;case"wheel":p=My;break;case"copy":case"cut":case"paste":p=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=e0}var w=(e&4)!==0,g=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=za(m,u),M!=null&&w.push(ja(m,M,_)))),g)break;m=m.return}0<w.length&&(h=new p(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==uf&&(y=n.relatedTarget||n.fromElement)&&(ms(y)||y[ur]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?ms(y):null,y!==null&&(g=Ls(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(w=Zm,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=e0,M="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:lo(p),_=y==null?h:lo(y),h=new w(M,m+"leave",p,n,d),h.target=g,h.relatedTarget=_,M=null,ms(d)===c&&(w=new w(u,m+"enter",y,n,d),w.target=_,w.relatedTarget=g,M=w),g=M,p&&y)t:{for(w=p,u=y,m=0,_=w;_;_=Hs(_))m++;for(_=0,M=u;M;M=Hs(M))_++;for(;0<m-_;)w=Hs(w),m--;for(;0<_-m;)u=Hs(u),_--;for(;m--;){if(w===u||u!==null&&w===u.alternate)break t;w=Hs(w),u=Hs(u)}w=null}else w=null;p!==null&&d0(f,h,p,w,!1),y!==null&&g!==null&&d0(f,g,y,w,!0)}}e:{if(h=c?lo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Cy;else if(i0(h))if(Jv)C=Dy;else{C=Py;var R=Ry}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ly);if(C&&(C=C(t,c))){Kv(f,C,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&sf(h,"number",h.value)}switch(R=c?lo(c):window,t){case"focusin":(i0(R)||R.contentEditable==="true")&&(oo=R,vf=c,Pa=null);break;case"focusout":Pa=vf=oo=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,l0(f,n,d);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":l0(f,n,d)}var L;if(Zh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else so?qv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yv&&n.locale!=="ko"&&(so||N!=="onCompositionStart"?N==="onCompositionEnd"&&so&&(L=jv()):(Dr=d,$h="value"in Dr?Dr.value:Dr.textContent,so=!0)),R=Dc(c,N),0<R.length&&(N=new Qm(N,t,null,n,d),f.push({event:N,listeners:R}),L?N.data=L:(L=$v(n),L!==null&&(N.data=L)))),(L=wy?Ey(t,n):Ty(t,n))&&(c=Dc(c,"onBeforeInput"),0<c.length&&(d=new Qm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}a_(f,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(t,n),s!=null&&i.unshift(ja(t,s,r)),s=za(t,e),s!=null&&i.push(ja(t,s,r))),t=t.return}return i}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function d0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=za(n,s),l!=null&&o.unshift(ja(n,l,a))):r||(l=za(n,s),l!=null&&o.push(ja(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(By,"")}function Pl(t,e,n){if(e=f0(e),f0(t)!==e&&n)throw Error(xe(425))}function Nc(){}var xf=null,yf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(Gy)}:Sf;function Gy(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function p0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Vo,Ya="__reactProps$"+Vo,ur="__reactContainer$"+Vo,wf="__reactEvents$"+Vo,Wy="__reactListeners$"+Vo,Xy="__reactHandles$"+Vo;function ms(t){var e=t[Bi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Bi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=p0(t);t!==null;){if(n=t[Bi])return n;t=p0(t)}return e}t=n,n=t.parentNode}return null}function ll(t){return t=t[Bi]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function su(t){return t[Ya]||null}var Ef=[],co=-1;function $r(t){return{current:t}}function Xt(t){0>co||(t.current=Ef[co],Ef[co]=null,co--)}function Ht(t,e){co++,Ef[co]=t.current,t.current=e}var Xr={},Un=$r(Xr),Zn=$r(!1),ws=Xr;function Ro(t,e){var n=t.type.contextTypes;if(!n)return Xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(t){return t=t.childContextTypes,t!=null}function Ic(){Xt(Zn),Xt(Un)}function m0(t,e,n){if(Un.current!==Xr)throw Error(xe(168));Ht(Un,e),Ht(Zn,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,R1(t)||"Unknown",r));return Qt({},n,i)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,ws=Un.current,Ht(Un,t),Ht(Zn,Zn.current),!0}function g0(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=c_(t,e,ws),i.__reactInternalMemoizedMergedChildContext=t,Xt(Zn),Xt(Un),Ht(Un,t)):Xt(Zn),Ht(Zn,n)}var ir=null,ou=!1,td=!1;function u_(t){ir===null?ir=[t]:ir.push(t)}function jy(t){ou=!0,u_(t)}function Kr(){if(!td&&ir!==null){td=!0;var t=0,e=Rt;try{var n=ir;for(Rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ir=null,ou=!1}catch(r){throw ir!==null&&(ir=ir.slice(t+1)),Uv(Xh,Kr),r}finally{Rt=e,td=!1}}return null}var uo=[],fo=0,Fc=null,Oc=0,pi=[],mi=0,Es=null,rr=1,sr="";function cs(t,e){uo[fo++]=Oc,uo[fo++]=Fc,Fc=t,Oc=e}function d_(t,e,n){pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=Es,Es=t;var i=rr;t=sr;var r=32-Di(i)-1;i&=~(1<<r),n+=1;var s=32-Di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rr=1<<32-Di(e)+r|n<<r|i,sr=s+t}else rr=1<<s|n<<r|i,sr=t}function ep(t){t.return!==null&&(cs(t,1),d_(t,1,0))}function tp(t){for(;t===Fc;)Fc=uo[--fo],uo[fo]=null,Oc=uo[--fo],uo[fo]=null;for(;t===Es;)Es=pi[--mi],pi[mi]=null,sr=pi[--mi],pi[mi]=null,rr=pi[--mi],pi[mi]=null}var li=null,ai=null,$t=!1,Ri=null;function f_(t,e){var n=vi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function v0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,li=t,ai=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,li=t,ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:rr,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,li=t,ai=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if($t){var e=ai;if(e){var n=e;if(!v0(t,e)){if(Tf(t))throw Error(xe(418));e=Or(n.nextSibling);var i=li;e&&v0(t,e)?f_(i,n):(t.flags=t.flags&-4097|2,$t=!1,li=t)}}else{if(Tf(t))throw Error(xe(418));t.flags=t.flags&-4097|2,$t=!1,li=t}}}function _0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;li=t}function Ll(t){if(t!==li)return!1;if(!$t)return _0(t),$t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=ai)){if(Tf(t))throw h_(),Error(xe(418));for(;e;)f_(t,e),e=Or(e.nextSibling)}if(_0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ai=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ai=null}}else ai=li?Or(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=ai;t;)t=Or(t.nextSibling)}function Po(){ai=li=null,$t=!1}function np(t){Ri===null?Ri=[t]:Ri.push(t)}var Yy=hr.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function x0(t){var e=t._init;return e(t._payload)}function p_(t){function e(u,m){if(t){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Hr(u,m),u.index=0,u.sibling=null,u}function s(u,m,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=2,m):_):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,_,M){return m===null||m.tag!==6?(m=ld(_,u.mode,M),m.return=u,m):(m=r(m,_),m.return=u,m)}function l(u,m,_,M){var C=_.type;return C===ro?d(u,m,_.props.children,M,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&x0(C)===m.type)?(M=r(m,_.props),M.ref=la(u,m,_),M.return=u,M):(M=xc(_.type,_.key,_.props,null,u.mode,M),M.ref=la(u,m,_),M.return=u,M)}function c(u,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=cd(_,u.mode,M),m.return=u,m):(m=r(m,_.children||[]),m.return=u,m)}function d(u,m,_,M,C){return m===null||m.tag!==7?(m=Ms(_,u.mode,M,C),m.return=u,m):(m=r(m,_),m.return=u,m)}function f(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ld(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:return _=xc(m.type,m.key,m.props,null,u.mode,_),_.ref=la(u,null,m),_.return=u,_;case io:return m=cd(m,u.mode,_),m.return=u,m;case br:var M=m._init;return f(u,M(m._payload),_)}if(Sa(m)||ia(m))return m=Ms(m,u.mode,_,null),m.return=u,m;Dl(u,m)}return null}function h(u,m,_,M){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(u,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return _.key===C?l(u,m,_,M):null;case io:return _.key===C?c(u,m,_,M):null;case br:return C=_._init,h(u,m,C(_._payload),M)}if(Sa(_)||ia(_))return C!==null?null:d(u,m,_,M,null);Dl(u,_)}return null}function p(u,m,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,a(m,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ml:return u=u.get(M.key===null?_:M.key)||null,l(m,u,M,C);case io:return u=u.get(M.key===null?_:M.key)||null,c(m,u,M,C);case br:var R=M._init;return p(u,m,_,R(M._payload),C)}if(Sa(M)||ia(M))return u=u.get(_)||null,d(m,u,M,C,null);Dl(m,M)}return null}function y(u,m,_,M){for(var C=null,R=null,L=m,N=m=0,E=null;L!==null&&N<_.length;N++){L.index>N?(E=L,L=null):E=L.sibling;var S=h(u,L,_[N],M);if(S===null){L===null&&(L=E);break}t&&L&&S.alternate===null&&e(u,L),m=s(S,m,N),R===null?C=S:R.sibling=S,R=S,L=E}if(N===_.length)return n(u,L),$t&&cs(u,N),C;if(L===null){for(;N<_.length;N++)L=f(u,_[N],M),L!==null&&(m=s(L,m,N),R===null?C=L:R.sibling=L,R=L);return $t&&cs(u,N),C}for(L=i(u,L);N<_.length;N++)E=p(L,u,N,_[N],M),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?N:E.key),m=s(E,m,N),R===null?C=E:R.sibling=E,R=E);return t&&L.forEach(function(I){return e(u,I)}),$t&&cs(u,N),C}function w(u,m,_,M){var C=ia(_);if(typeof C!="function")throw Error(xe(150));if(_=C.call(_),_==null)throw Error(xe(151));for(var R=C=null,L=m,N=m=0,E=null,S=_.next();L!==null&&!S.done;N++,S=_.next()){L.index>N?(E=L,L=null):E=L.sibling;var I=h(u,L,S.value,M);if(I===null){L===null&&(L=E);break}t&&L&&I.alternate===null&&e(u,L),m=s(I,m,N),R===null?C=I:R.sibling=I,R=I,L=E}if(S.done)return n(u,L),$t&&cs(u,N),C;if(L===null){for(;!S.done;N++,S=_.next())S=f(u,S.value,M),S!==null&&(m=s(S,m,N),R===null?C=S:R.sibling=S,R=S);return $t&&cs(u,N),C}for(L=i(u,L);!S.done;N++,S=_.next())S=p(L,u,N,S.value,M),S!==null&&(t&&S.alternate!==null&&L.delete(S.key===null?N:S.key),m=s(S,m,N),R===null?C=S:R.sibling=S,R=S);return t&&L.forEach(function(H){return e(u,H)}),$t&&cs(u,N),C}function g(u,m,_,M){if(typeof _=="object"&&_!==null&&_.type===ro&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:e:{for(var C=_.key,R=m;R!==null;){if(R.key===C){if(C=_.type,C===ro){if(R.tag===7){n(u,R.sibling),m=r(R,_.props.children),m.return=u,u=m;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&x0(C)===R.type){n(u,R.sibling),m=r(R,_.props),m.ref=la(u,R,_),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}_.type===ro?(m=Ms(_.props.children,u.mode,M,_.key),m.return=u,u=m):(M=xc(_.type,_.key,_.props,null,u.mode,M),M.ref=la(u,m,_),M.return=u,u=M)}return o(u);case io:e:{for(R=_.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),m=r(m,_.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=cd(_,u.mode,M),m.return=u,u=m}return o(u);case br:return R=_._init,g(u,m,R(_._payload),M)}if(Sa(_))return y(u,m,_,M);if(ia(_))return w(u,m,_,M);Dl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,_),m.return=u,u=m):(n(u,m),m=ld(_,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return g}var Lo=p_(!0),m_=p_(!1),kc=$r(null),zc=null,ho=null,ip=null;function rp(){ip=ho=zc=null}function sp(t){var e=kc.current;Xt(kc),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){zc=t,ip=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jn=!0),t.firstContext=null)}function xi(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(zc===null)throw Error(xe(308));ho=t,zc.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var gs=null;function op(t){gs===null?gs=[t]:gs.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,op(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,op(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jh(t,n)}}function y0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,i){var r=t.updateQueue;Cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=Qt({},f,h);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=f}}function M0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var cl={},Wi=$r(cl),qa=$r(cl),$a=$r(cl);function vs(t){if(t===cl)throw Error(xe(174));return t}function lp(t,e){switch(Ht($a,e),Ht(qa,t),Ht(Wi,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}Xt(Wi),Ht(Wi,e)}function Do(){Xt(Wi),Xt(qa),Xt($a)}function __(t){vs($a.current);var e=vs(Wi.current),n=af(e,t.type);e!==n&&(Ht(qa,t),Ht(Wi,n))}function cp(t){qa.current===t&&(Xt(Wi),Xt(qa))}var Jt=$r(0);function Hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function up(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var pc=hr.ReactCurrentDispatcher,id=hr.ReactCurrentBatchConfig,Ts=0,Zt=null,fn=null,xn=null,Vc=!1,La=!1,Ka=0,qy=0;function Cn(){throw Error(xe(321))}function dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ui(t[n],e[n]))return!1;return!0}function fp(t,e,n,i,r,s){if(Ts=s,Zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pc.current=t===null||t.memoizedState===null?Zy:Qy,t=n(i,r),La){s=0;do{if(La=!1,Ka=0,25<=s)throw Error(xe(301));s+=1,xn=fn=null,e.updateQueue=null,pc.current=eM,t=n(i,r)}while(La)}if(pc.current=Gc,e=fn!==null&&fn.next!==null,Ts=0,xn=fn=Zt=null,Vc=!1,e)throw Error(xe(300));return t}function hp(){var t=Ka!==0;return Ka=0,t}function ki(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Zt.memoizedState=xn=t:xn=xn.next=t,xn}function yi(){if(fn===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var e=xn===null?Zt.memoizedState:xn.next;if(e!==null)xn=e,fn=t;else{if(t===null)throw Error(xe(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},xn===null?Zt.memoizedState=xn=t:xn=xn.next=t}return xn}function Ja(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=yi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=fn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Zt.lanes|=d,As|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ui(i,e.memoizedState)||(Jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Zt.lanes|=s,As|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=yi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ui(s,e.memoizedState)||(Jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=Zt,i=yi(),r=e(),s=!Ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Jn=!0),i=i.queue,pp(w_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||xn!==null&&xn.memoizedState.tag&1){if(n.flags|=2048,Za(9,S_.bind(null,n,i,r,e),void 0,null),yn===null)throw Error(xe(349));Ts&30||M_(n,e,r)}return r}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S_(t,e,n,i){e.value=n,e.getSnapshot=i,E_(e)&&T_(t)}function w_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ui(t,n)}catch{return!0}}function T_(t){var e=dr(t,1);e!==null&&Ni(e,t,1,-1)}function S0(t){var e=ki();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,Zt,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return yi().memoizedState}function mc(t,e,n,i){var r=ki();Zt.flags|=t,r.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function au(t,e,n,i){var r=yi();i=i===void 0?null:i;var s=void 0;if(fn!==null){var o=fn.memoizedState;if(s=o.destroy,i!==null&&dp(i,o.deps)){r.memoizedState=Za(e,n,s,i);return}}Zt.flags|=t,r.memoizedState=Za(1|e,n,s,i)}function w0(t,e){return mc(8390656,8,t,e)}function pp(t,e){return au(2048,8,t,e)}function b_(t,e){return au(4,2,t,e)}function C_(t,e){return au(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,R_.bind(null,e,t),n)}function mp(){}function L_(t,e){var n=yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return Ts&21?(Ui(n,e)||(n=kv(),Zt.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jn=!0),t.memoizedState=n)}function $y(t,e){var n=Rt;Rt=n!==0&&4>n?n:4,t(!0);var i=id.transition;id.transition={};try{t(!1),e()}finally{Rt=n,id.transition=i}}function I_(){return yi().memoizedState}function Ky(t,e,n){var i=Br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=Hn();Ni(n,t,i,r),O_(n,e,i)}}function Jy(t,e,n){var i=Br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ui(a,o)){var l=e.interleaved;l===null?(r.next=r,op(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=Hn(),Ni(n,t,i,r),O_(n,e,i))}}function U_(t){var e=t.alternate;return t===Zt||e!==null&&e===Zt}function F_(t,e){La=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jh(t,n)}}var Gc={readContext:xi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Zy={readContext:xi,useCallback:function(t,e){return ki().memoizedState=[t,e===void 0?null:e],t},useContext:xi,useEffect:w0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mc(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return mc(4,2,t,e)},useMemo:function(t,e){var n=ki();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ki();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ky.bind(null,Zt,t),[i.memoizedState,t]},useRef:function(t){var e=ki();return t={current:t},e.memoizedState=t},useState:S0,useDebugValue:mp,useDeferredValue:function(t){return ki().memoizedState=t},useTransition:function(){var t=S0(!1),e=t[0];return t=$y.bind(null,t[1]),ki().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Zt,r=ki();if($t){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),yn===null)throw Error(xe(349));Ts&30||M_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,w0(w_.bind(null,i,s,t),[t]),i.flags|=2048,Za(9,S_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ki(),e=yn.identifierPrefix;if($t){var n=sr,i=rr;n=(i&~(1<<32-Di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:xi,useCallback:L_,useContext:xi,useEffect:pp,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:D_,useReducer:rd,useRef:A_,useState:function(){return rd(Ja)},useDebugValue:mp,useDeferredValue:function(t){var e=yi();return N_(e,fn.memoizedState,t)},useTransition:function(){var t=rd(Ja)[0],e=yi().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1},eM={readContext:xi,useCallback:L_,useContext:xi,useEffect:pp,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:D_,useReducer:sd,useRef:A_,useState:function(){return sd(Ja)},useDebugValue:mp,useDeferredValue:function(t){var e=yi();return fn===null?e.memoizedState=t:N_(e,fn.memoizedState,t)},useTransition:function(){var t=sd(Ja)[0],e=yi().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1};function bi(t,e){if(t&&t.defaultProps){e=Qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?Ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Br(t),s=ar(i,r);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,r),e!==null&&(Ni(e,t,r,i),hc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Br(t),s=ar(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,r),e!==null&&(Ni(e,t,r,i),hc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Hn(),i=Br(t),r=ar(n,i);r.tag=2,e!=null&&(r.callback=e),e=kr(t,r,i),e!==null&&(Ni(e,t,i,n),hc(e,t,i))}};function E0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function k_(t,e,n){var i=!1,r=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=xi(s):(r=Qn(e)?ws:Un.current,i=e.contextTypes,s=(i=i!=null)?Ro(t,r):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function T0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ap(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=xi(s):(s=Qn(e)?ws:Un.current,r.context=Ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lu.enqueueReplaceState(r,r.state,null),Bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e){try{var n="",i=e;do n+=C1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xc||(Xc=!0,Bf=i),Pf(t,e)},n}function B_(t,e,n){n=ar(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mM.bind(null,t,e,n),e.then(t,t))}function b0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function C0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var nM=hr.ReactCurrentOwner,Jn=!1;function Bn(t,e,n,i){e.child=t===null?m_(e,null,n,i):Lo(e,t.child,n,i)}function R0(t,e,n,i,r){n=n.render;var s=e.ref;return Mo(e,r),i=fp(t,e,n,i,s,r),n=hp(),t!==null&&!Jn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):($t&&n&&ep(e),e.flags|=1,Bn(t,e,i,r),e.child)}function P0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,i,r)):(t=xc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,i)&&t.ref===e.ref)return fr(t,e,r)}return e.flags|=1,t=Hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(Jn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jn=!0);else return e.lanes=t.lanes,fr(t,e,r)}return Lf(t,e,n,i,r)}function V_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(mo,si),si|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ht(mo,si),si|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ht(mo,si),si|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ht(mo,si),si|=i;return Bn(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,i,r){var s=Qn(n)?ws:Un.current;return s=Ro(e,s),Mo(e,r),n=fp(t,e,n,i,s,r),i=hp(),t!==null&&!Jn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):($t&&i&&ep(e),e.flags|=1,Bn(t,e,n,r),e.child)}function L0(t,e,n,i,r){if(Qn(n)){var s=!0;Uc(e)}else s=!1;if(Mo(e,r),e.stateNode===null)gc(t,e),k_(e,n,i),Rf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xi(c):(c=Qn(n)?ws:Un.current,c=Ro(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&T0(e,o,i,c),Cr=!1;var h=e.memoizedState;o.state=h,Bc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Zn.current||Cr?(typeof d=="function"&&(Cf(e,n,d,i),l=e.memoizedState),(a=Cr||E0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xi(l):(l=Qn(n)?ws:Un.current,l=Ro(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&T0(e,o,i,l),Cr=!1,h=e.memoizedState,o.state=h,Bc(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||Zn.current||Cr?(typeof p=="function"&&(Cf(e,n,p,i),y=e.memoizedState),(c=Cr||E0(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Df(t,e,n,i,s,r)}function Df(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&g0(e,n,!1),fr(t,e,s);i=e.stateNode,nM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,s),e.child=Lo(e,null,a,s)):Bn(t,e,a,s),e.memoizedState=i.state,r&&g0(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?m0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m0(t,e.context,!1),lp(t,e.containerInfo)}function D0(t,e,n,i,r){return Po(),np(r),e.flags|=256,Bn(t,e,n,i),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var i=e.pendingProps,r=Jt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ht(Jt,r&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,i,0,null),t=Ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=Nf,t):gp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hr(a,s):(s=Ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,i}return s=t.child,t=s.sibling,i=Hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gp(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,i){return i!==null&&np(i),Lo(e,t.child,null,n),t=gp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=od(Error(xe(422))),Nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),s=Ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=If(o),e.memoizedState=Nf,s);if(!(e.mode&1))return Nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=od(s,i,void 0),Nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jn||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(t,r),Ni(i,t,r,-1))}return Sp(),i=od(Error(xe(421))),Nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ai=Or(r.nextSibling),li=e,$t=!0,Ri=null,t!==null&&(pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=Es,rr=t.id,sr=t.overflow,Es=e),e=gp(e,i.children),e.flags|=4096,e)}function N0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bf(t.return,e,n)}function ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function j_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bn(t,e,i.children,n),i=Jt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,n,e);else if(t.tag===19)N0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ht(Jt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ad(e,!0,n,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rM(t,e,n){switch(e.tag){case 3:W_(e),Po();break;case 5:__(e);break;case 1:Qn(e.type)&&Uc(e);break;case 4:lp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ht(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ht(Jt,Jt.current&1),e.flags|=128,null):n&e.child.childLanes?X_(t,e,n):(Ht(Jt,Jt.current&1),t=fr(t,e,n),t!==null?t.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ht(Jt,Jt.current),i)break;return null;case 22:case 23:return e.lanes=0,V_(t,e,n)}return fr(t,e,n)}var Y_,Uf,q_,$_;Y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vs(Wi.current);var s=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),s=[];break;case"select":r=Qt({},r,{value:void 0}),i=Qt({},i,{value:void 0}),s=[];break;case"textarea":r=of(t,r),i=of(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}lf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ca(t,e){if(!$t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sM(t,e,n){var i=e.pendingProps;switch(tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(e),null;case 1:return Qn(e.type)&&Ic(),Rn(e),null;case 3:return i=e.stateNode,Do(),Xt(Zn),Xt(Un),up(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ri!==null&&(Gf(Ri),Ri=null))),Uf(t,e),Rn(e),null;case 5:cp(e);var r=vs($a.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Rn(e),null}if(t=vs(Wi.current),Ll(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":Wt("cancel",i),Wt("close",i);break;case"iframe":case"object":case"embed":Wt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)Wt(Ea[r],i);break;case"source":Wt("error",i);break;case"img":case"image":case"link":Wt("error",i),Wt("load",i);break;case"details":Wt("toggle",i);break;case"input":Vm(i,s),Wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Wt("invalid",i);break;case"textarea":Wm(i,s),Wt("invalid",i)}lf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,t),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Wt("scroll",i)}switch(n){case"input":Sl(i),Gm(i,s,!0);break;case"textarea":Sl(i),Xm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bi]=e,t[Ya]=i,Y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,i),n){case"dialog":Wt("cancel",t),Wt("close",t),r=i;break;case"iframe":case"object":case"embed":Wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)Wt(Ea[r],t);r=i;break;case"source":Wt("error",t),r=i;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),r=i;break;case"details":Wt("toggle",t),r=i;break;case"input":Vm(t,i),r=nf(t,i),Wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Qt({},i,{value:void 0}),Wt("invalid",t);break;case"textarea":Wm(t,i),r=of(t,i),Wt("invalid",t);break;default:r=i}lf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Av(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ev(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Wt("scroll",t):l!=null&&Bh(t,s,l,o))}switch(n){case"input":Sl(t),Gm(t,i,!1);break;case"textarea":Sl(t),Xm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vo(t,!!i.multiple,s,!1):i.defaultValue!=null&&vo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rn(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=vs($a.current),vs(Wi.current),Ll(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==n)&&(t=li,t!==null))switch(t.tag){case 3:Pl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return Rn(e),null;case 13:if(Xt(Jt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($t&&ai!==null&&e.mode&1&&!(e.flags&128))h_(),Po(),e.flags|=98560,s=!1;else if(s=Ll(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Bi]=e}else Po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rn(e),s=!1}else Ri!==null&&(Gf(Ri),Ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Jt.current&1?hn===0&&(hn=3):Sp())),e.updateQueue!==null&&(e.flags|=4),Rn(e),null);case 4:return Do(),Uf(t,e),t===null&&Xa(e.stateNode.containerInfo),Rn(e),null;case 10:return sp(e.type._context),Rn(e),null;case 17:return Qn(e.type)&&Ic(),Rn(e),null;case 19:if(Xt(Jt),s=e.memoizedState,s===null)return Rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ca(s,!1);else{if(hn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hc(t),o!==null){for(e.flags|=128,ca(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ht(Jt,Jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&on()>Io&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$t)return Rn(e),null}else 2*on()-s.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=on(),e.sibling=null,n=Jt.current,Ht(Jt,i?n&1|2:n&1),e):(Rn(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?si&1073741824&&(Rn(e),e.subtreeFlags&6&&(e.flags|=8192)):Rn(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function oM(t,e){switch(tp(e),e.tag){case 1:return Qn(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),Xt(Zn),Xt(Un),up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(Xt(Jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Xt(Jt),null;case 4:return Do(),null;case 10:return sp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Il=!1,In=!1,aM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){nn(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){nn(t,e,i)}}var I0=!1;function lM(t,e){if(xf=Pc,t=e_(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},Pc=!1,Be=e;Be!==null;)if(e=Be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Be=t;else for(;Be!==null;){e=Be;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,g=y.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:bi(e.type,w),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(M){nn(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Be=t;break}Be=e.return}return y=I0,I0=!1,y}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ff(e,n,s)}r=r.next}while(r!==i)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bi],delete e[Ya],delete e[wf],delete e[Wy],delete e[Xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function U0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}var En=null,Ci=!1;function xr(t,e,n){for(n=n.child;n!==null;)Z_(t,e,n),n=n.sibling}function Z_(t,e,n){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:In||po(n,e);case 6:var i=En,r=Ci;En=null,xr(t,e,n),En=i,Ci=r,En!==null&&(Ci?(t=En,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):En.removeChild(n.stateNode));break;case 18:En!==null&&(Ci?(t=En,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),Va(t)):ed(En,n.stateNode));break;case 4:i=En,r=Ci,En=n.stateNode.containerInfo,Ci=!0,xr(t,e,n),En=i,Ci=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),r=r.next}while(r!==i)}xr(t,e,n);break;case 1:if(!In&&(po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){nn(n,e,a)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(In=(i=In)||n.memoizedState!==null,xr(t,e,n),In=i):xr(t,e,n);break;default:xr(t,e,n)}}function F0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aM),e.forEach(function(i){var r=vM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,Ci=!1;break e;case 3:En=a.stateNode.containerInfo,Ci=!0;break e;case 4:En=a.stateNode.containerInfo,Ci=!0;break e}a=a.return}if(En===null)throw Error(xe(160));Z_(s,o,r),En=null,Ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){nn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wi(e,t),Oi(t),i&4){try{Da(3,t,t.return),cu(3,t)}catch(w){nn(t,t.return,w)}try{Da(5,t,t.return)}catch(w){nn(t,t.return,w)}}break;case 1:wi(e,t),Oi(t),i&512&&n!==null&&po(n,n.return);break;case 5:if(wi(e,t),Oi(t),i&512&&n!==null&&po(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(w){nn(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mv(r,s),cf(a,o);var c=cf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Av(r,f):d==="dangerouslySetInnerHTML"?Ev(r,f):d==="children"?ka(r,f):Bh(r,d,f,c)}switch(a){case"input":rf(r,s);break;case"textarea":Sv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?vo(r,!!s.multiple,s.defaultValue,!0):vo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(w){nn(t,t.return,w)}}break;case 6:if(wi(e,t),Oi(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){nn(t,t.return,w)}}break;case 3:if(wi(e,t),Oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(w){nn(t,t.return,w)}break;case 4:wi(e,t),Oi(t);break;case 13:wi(e,t),Oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xp=on())),i&4&&F0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(In=(c=In)||d,wi(e,t),In=c):wi(e,t),Oi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Be=t,d=t.child;d!==null;){for(f=Be=d;Be!==null;){switch(h=Be,p=h.child,h.tag){case 0:case 11:case 14:case 15:Da(4,h,h.return);break;case 1:po(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){nn(i,n,w)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){k0(f);continue}}p!==null?(p.return=h,Be=p):k0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(w){nn(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){nn(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wi(e,t),Oi(t),i&4&&F0(t);break;case 21:break;default:wi(e,t),Oi(t)}}function Oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=U0(t);zf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=U0(t);kf(t,a,o);break;default:throw Error(xe(161))}}catch(l){nn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cM(t,e,n){Be=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;Be!==null;){var r=Be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=Il;var c=In;if(Il=o,(In=l)&&!c)for(Be=r;Be!==null;)o=Be,l=o.child,o.tag===22&&o.memoizedState!==null?z0(r):l!==null?(l.return=o,Be=l):z0(r);for(;s!==null;)Be=s,ex(s),s=s.sibling;Be=r,Il=a,In=c}O0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Be=s):O0(t)}}function O0(t){for(;Be!==null;){var e=Be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&M0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}M0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}In||e.flags&512&&Of(e)}catch(h){nn(e,e.return,h)}}if(e===t){Be=null;break}if(n=e.sibling,n!==null){n.return=e.return,Be=n;break}Be=e.return}}function k0(t){for(;Be!==null;){var e=Be;if(e===t){Be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Be=n;break}Be=e.return}}function z0(t){for(;Be!==null;){var e=Be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){nn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nn(e,r,l)}}var s=e.return;try{Of(e)}catch(l){nn(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){nn(e,o,l)}}}catch(l){nn(e,e.return,l)}if(e===t){Be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Be=a;break}Be=e.return}}var uM=Math.ceil,Wc=hr.ReactCurrentDispatcher,vp=hr.ReactCurrentOwner,_i=hr.ReactCurrentBatchConfig,Mt=0,yn=null,ln=null,Tn=0,si=0,mo=$r(0),hn=0,Qa=null,As=0,uu=0,_p=0,Na=null,Kn=null,xp=0,Io=1/0,nr=null,Xc=!1,Bf=null,zr=null,Ul=!1,Nr=null,jc=0,Ia=0,Hf=null,vc=-1,_c=0;function Hn(){return Mt&6?on():vc!==-1?vc:vc=on()}function Br(t){return t.mode&1?Mt&2&&Tn!==0?Tn&-Tn:Yy.transition!==null?(_c===0&&(_c=kv()),_c):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t):1}function Ni(t,e,n,i){if(50<Ia)throw Ia=0,Hf=null,Error(xe(185));ol(t,n,i),(!(Mt&2)||t!==yn)&&(t===yn&&(!(Mt&2)&&(uu|=n),hn===4&&Pr(t,Tn)),ei(t,i),n===1&&Mt===0&&!(e.mode&1)&&(Io=on()+500,ou&&Kr()))}function ei(t,e){var n=t.callbackNode;Y1(t,e);var i=Rc(t,t===yn?Tn:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?jy(B0.bind(null,t)):u_(B0.bind(null,t)),Vy(function(){!(Mt&6)&&Kr()}),n=null;else{switch(zv(i)){case 1:n=Xh;break;case 4:n=Fv;break;case 16:n=Cc;break;case 536870912:n=Ov;break;default:n=Cc}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(vc=-1,_c=0,Mt&6)throw Error(xe(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var i=Rc(t,t===yn?Tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yc(t,i);else{e=i;var r=Mt;Mt|=2;var s=ix();(yn!==t||Tn!==e)&&(nr=null,Io=on()+500,ys(t,e));do try{hM();break}catch(a){nx(t,a)}while(!0);rp(),Wc.current=s,Mt=r,ln!==null?e=0:(yn=null,Tn=0,e=hn)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Vf(t,r))),e===1)throw n=Qa,ys(t,0),Pr(t,i),ei(t,on()),n;if(e===6)Pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!dM(r)&&(e=Yc(t,i),e===2&&(s=pf(t),s!==0&&(i=s,e=Vf(t,s))),e===1))throw n=Qa,ys(t,0),Pr(t,i),ei(t,on()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:us(t,Kn,nr);break;case 3:if(Pr(t,i),(i&130023424)===i&&(e=xp+500-on(),10<e)){if(Rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sf(us.bind(null,t,Kn,nr),e);break}us(t,Kn,nr);break;case 4:if(Pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=on()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uM(i/1960))-i,10<i){t.timeoutHandle=Sf(us.bind(null,t,Kn,nr),i);break}us(t,Kn,nr);break;case 5:us(t,Kn,nr);break;default:throw Error(xe(329))}}}return ei(t,on()),t.callbackNode===n?tx.bind(null,t):null}function Vf(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(ys(t,e).flags|=256),t=Yc(t,e),t!==2&&(e=Kn,Kn=n,e!==null&&Gf(e)),t}function Gf(t){Kn===null?Kn=t:Kn.push.apply(Kn,t)}function dM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~_p,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Di(e),i=1<<n;t[n]=-1,e&=~i}}function B0(t){if(Mt&6)throw Error(xe(327));So();var e=Rc(t,0);if(!(e&1))return ei(t,on()),null;var n=Yc(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Vf(t,i))}if(n===1)throw n=Qa,ys(t,0),Pr(t,e),ei(t,on()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,us(t,Kn,nr),ei(t,on()),null}function yp(t,e){var n=Mt;Mt|=1;try{return t(e)}finally{Mt=n,Mt===0&&(Io=on()+500,ou&&Kr())}}function bs(t){Nr!==null&&Nr.tag===0&&!(Mt&6)&&So();var e=Mt;Mt|=1;var n=_i.transition,i=Rt;try{if(_i.transition=null,Rt=1,t)return t()}finally{Rt=i,_i.transition=n,Mt=e,!(Mt&6)&&Kr()}}function Mp(){si=mo.current,Xt(mo)}function ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hy(n)),ln!==null)for(n=ln.return;n!==null;){var i=n;switch(tp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ic();break;case 3:Do(),Xt(Zn),Xt(Un),up();break;case 5:cp(i);break;case 4:Do();break;case 13:Xt(Jt);break;case 19:Xt(Jt);break;case 10:sp(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(yn=t,ln=t=Hr(t.current,null),Tn=si=e,hn=0,Qa=null,_p=uu=As=0,Kn=Na=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gs=null}return t}function nx(t,e){do{var n=ln;try{if(rp(),pc.current=Gc,Vc){for(var i=Zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(Ts=0,xn=fn=Zt=null,La=!1,Ka=0,vp.current=null,n===null||n.return===null){hn=1,Qa=e,ln=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=b0(o);if(p!==null){p.flags&=-257,C0(p,o,a,s,e),p.mode&1&&A0(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){A0(s,c,e),Sp();break e}l=Error(xe(426))}}else if($t&&a.mode&1){var g=b0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),C0(g,o,a,s,e),np(No(l,a));break e}}s=l=No(l,a),hn!==4&&(hn=2),Na===null?Na=[s]:Na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=z_(s,l,e);y0(s,u);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(zr===null||!zr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=B_(s,a,e);y0(s,M);break e}}s=s.return}while(s!==null)}sx(n)}catch(C){e=C,ln===n&&n!==null&&(ln=n=n.return);continue}break}while(!0)}function ix(){var t=Wc.current;return Wc.current=Gc,t===null?Gc:t}function Sp(){(hn===0||hn===3||hn===2)&&(hn=4),yn===null||!(As&268435455)&&!(uu&268435455)||Pr(yn,Tn)}function Yc(t,e){var n=Mt;Mt|=2;var i=ix();(yn!==t||Tn!==e)&&(nr=null,ys(t,e));do try{fM();break}catch(r){nx(t,r)}while(!0);if(rp(),Mt=n,Wc.current=i,ln!==null)throw Error(xe(261));return yn=null,Tn=0,hn}function fM(){for(;ln!==null;)rx(ln)}function hM(){for(;ln!==null&&!k1();)rx(ln)}function rx(t){var e=ax(t.alternate,t,si);t.memoizedProps=t.pendingProps,e===null?sx(t):ln=e,vp.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oM(n,e),n!==null){n.flags&=32767,ln=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{hn=6,ln=null;return}}else if(n=sM(n,e,si),n!==null){ln=n;return}if(e=e.sibling,e!==null){ln=e;return}ln=e=t}while(e!==null);hn===0&&(hn=5)}function us(t,e,n){var i=Rt,r=_i.transition;try{_i.transition=null,Rt=1,pM(t,e,n,i)}finally{_i.transition=r,Rt=i}return null}function pM(t,e,n,i){do So();while(Nr!==null);if(Mt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(q1(t,s),t===yn&&(ln=yn=null,Tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ul||(Ul=!0,lx(Cc,function(){return So(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_i.transition,_i.transition=null;var o=Rt;Rt=1;var a=Mt;Mt|=4,vp.current=null,lM(t,n),Q_(n,t),Iy(yf),Pc=!!xf,yf=xf=null,t.current=n,cM(n),z1(),Mt=a,Rt=o,_i.transition=s}else t.current=n;if(Ul&&(Ul=!1,Nr=t,jc=r),s=t.pendingLanes,s===0&&(zr=null),V1(n.stateNode),ei(t,on()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xc)throw Xc=!1,t=Bf,Bf=null,t;return jc&1&&t.tag!==0&&So(),s=t.pendingLanes,s&1?t===Hf?Ia++:(Ia=0,Hf=t):Ia=0,Kr(),null}function So(){if(Nr!==null){var t=zv(jc),e=_i.transition,n=Rt;try{if(_i.transition=null,Rt=16>t?16:t,Nr===null)var i=!1;else{if(t=Nr,Nr=null,jc=0,Mt&6)throw Error(xe(331));var r=Mt;for(Mt|=4,Be=t.current;Be!==null;){var s=Be,o=s.child;if(Be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Be=c;Be!==null;){var d=Be;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var f=d.child;if(f!==null)f.return=d,Be=f;else for(;Be!==null;){d=Be;var h=d.sibling,p=d.return;if(K_(d),d===c){Be=null;break}if(h!==null){h.return=p,Be=h;break}Be=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}Be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Be=o;else e:for(;Be!==null;){if(s=Be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Be=u;break e}Be=s.return}}var m=t.current;for(Be=m;Be!==null;){o=Be;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Be=_;else e:for(o=m;Be!==null;){if(a=Be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cu(9,a)}}catch(C){nn(a,a.return,C)}if(a===o){Be=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Be=M;break e}Be=a.return}}if(Mt=r,Kr(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(tu,t)}catch{}i=!0}return i}finally{Rt=n,_i.transition=e}}return!1}function H0(t,e,n){e=No(n,e),e=z_(t,e,1),t=kr(t,e,1),e=Hn(),t!==null&&(ol(t,1,e),ei(t,e))}function nn(t,e,n){if(t.tag===3)H0(t,t,n);else for(;e!==null;){if(e.tag===3){H0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){t=No(n,t),t=B_(e,t,1),e=kr(e,t,1),t=Hn(),e!==null&&(ol(e,1,t),ei(e,t));break}}e=e.return}}function mM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Hn(),t.pingedLanes|=t.suspendedLanes&n,yn===t&&(Tn&n)===n&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>on()-xp?ys(t,0):_p|=n),ei(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=Hn();t=dr(t,e),t!==null&&(ol(t,e,n),ei(t,n))}function gM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function vM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zn.current)Jn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jn=!1,rM(t,e,n);Jn=!!(t.flags&131072)}else Jn=!1,$t&&e.flags&1048576&&d_(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gc(t,e),t=e.pendingProps;var r=Ro(e,Un.current);Mo(e,n),r=fp(null,e,i,t,r,n);var s=hp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ap(e),r.updater=lu,e.stateNode=r,r._reactInternals=e,Rf(e,i,t,n),e=Df(null,e,i,!0,s,n)):(e.tag=0,$t&&s&&ep(e),Bn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xM(i),t=bi(i,t),r){case 0:e=Lf(null,e,i,t,n);break e;case 1:e=L0(null,e,i,t,n);break e;case 11:e=R0(null,e,i,t,n);break e;case 14:e=P0(null,e,i,bi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),Lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),L0(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),Bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=No(Error(xe(423)),e),e=D0(t,e,i,n,r);break e}else if(i!==r){r=No(Error(xe(424)),e),e=D0(t,e,i,n,r);break e}else for(ai=Or(e.stateNode.containerInfo.firstChild),li=e,$t=!0,Ri=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Po(),i===r){e=fr(t,e,n);break e}Bn(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&Af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mf(i,r)?o=null:s!==null&&Mf(i,s)&&(e.flags|=32),G_(t,e),Bn(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return X_(t,e,n);case 4:return lp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Lo(e,null,i,n):Bn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),R0(t,e,i,r,n);case 7:return Bn(t,e,e.pendingProps,n),e.child;case 8:return Bn(t,e,e.pendingProps.children,n),e.child;case 12:return Bn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ht(kc,i._currentValue),i._currentValue=o,s!==null)if(Ui(s.value,o)){if(s.children===r.children&&!Zn.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Mo(e,n),r=xi(r),i=i(r),e.flags|=1,Bn(t,e,i,n),e.child;case 14:return i=e.type,r=bi(i,e.pendingProps),r=bi(i.type,r),P0(t,e,i,r,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),gc(t,e),e.tag=1,Qn(i)?(t=!0,Uc(e)):t=!1,Mo(e,n),k_(e,i,r),Rf(e,i,r,n),Df(null,e,i,!0,t,n);case 19:return j_(t,e,n);case 22:return V_(t,e,n)}throw Error(xe(156,e.tag))};function lx(t,e){return Uv(t,e)}function _M(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,e,n,i){return new _M(t,e,n,i)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xM(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vh)return 11;if(t===Gh)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=vi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return Ms(n.children,r,s,e);case Hh:o=8,r|=8;break;case Zd:return t=vi(12,n,e,r|2),t.elementType=Zd,t.lanes=s,t;case Qd:return t=vi(13,n,e,r),t.elementType=Qd,t.lanes=s,t;case ef:return t=vi(19,n,e,r),t.elementType=ef,t.lanes=s,t;case _v:return du(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case vv:o=9;break e;case Vh:o=11;break e;case Gh:o=14;break e;case br:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=vi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ms(t,e,n,i){return t=vi(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=vi(22,t,i,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=vi(6,t,null,e),t.lanes=n,t}function cd(t,e,n){return e=vi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ep(t,e,n,i,r,s,o,a,l){return t=new yM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ap(s),t}function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return Xr;t=t._reactInternals;e:{if(Ls(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(Qn(n))return c_(t,n,e)}return e}function ux(t,e,n,i,r,s,o,a,l){return t=Ep(n,i,!0,t,r,s,o,a,l),t.context=cx(null),n=t.current,i=Hn(),r=Br(n),s=ar(i,r),s.callback=e??null,kr(n,s,r),t.current.lanes=r,ol(t,r,i),ei(t,i),t}function fu(t,e,n,i){var r=e.current,s=Hn(),o=Br(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=kr(r,e,o),t!==null&&(Ni(t,r,o,s),hc(t,r,o)),o}function qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tp(t,e){V0(t,e),(t=t.alternate)&&V0(t,e)}function SM(){return null}var dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}hu.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));fu(t,e,null,null)};hu.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bs(function(){fu(null,t,null,null)}),e[ur]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&Wv(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function G0(){}function wM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qc(o);s.call(c)}}var o=ux(e,i,t,0,null,!1,!1,"",G0);return t._reactRootContainer=o,t[ur]=o.current,Xa(t.nodeType===8?t.parentNode:t),bs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=qc(l);a.call(c)}}var l=Ep(t,0,!1,null,null,!1,!1,"",G0);return t._reactRootContainer=l,t[ur]=l.current,Xa(t.nodeType===8?t.parentNode:t),bs(function(){fu(e,l,n,i)}),l}function mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qc(o);a.call(l)}}fu(e,o,t,r)}else o=wM(n,e,t,r,i);return qc(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(jh(e,n|1),ei(e,on()),!(Mt&6)&&(Io=on()+500,Kr()))}break;case 13:bs(function(){var i=dr(t,1);if(i!==null){var r=Hn();Ni(i,t,1,r)}}),Tp(t,1)}};Yh=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Hn();Ni(e,t,134217728,n)}Tp(t,134217728)}};Hv=function(t){if(t.tag===13){var e=Br(t),n=dr(t,e);if(n!==null){var i=Hn();Ni(n,t,e,i)}Tp(t,e)}};Vv=function(){return Rt};Gv=function(t,e){var n=Rt;try{return Rt=t,e()}finally{Rt=n}};df=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(xe(90));yv(i),rf(i,r)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&vo(t,!!n.multiple,e,!1)}};Rv=yp;Pv=bs;var EM={usingClientEntryPoint:!1,Events:[ll,lo,su,bv,Cv,yp]},ua={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nv(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||SM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{tu=Fl.inject(TM),Gi=Fl}catch{}}ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;ui.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(xe(200));return MM(t,e,null,n)};ui.createRoot=function(t,e){if(!bp(t))throw Error(xe(299));var n=!1,i="",r=dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ep(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Ap(e)};ui.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=Nv(e),t=t===null?null:t.stateNode,t};ui.flushSync=function(t){return bs(t)};ui.hydrate=function(t,e,n){if(!pu(e))throw Error(xe(200));return mu(null,t,e,!0,n)};ui.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,o),t[ur]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hu(e)};ui.render=function(t,e,n){if(!pu(e))throw Error(xe(200));return mu(null,t,e,!1,n)};ui.unmountComponentAtNode=function(t){if(!pu(t))throw Error(xe(40));return t._reactRootContainer?(bs(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};ui.unstable_batchedUpdates=yp;ui.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pu(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return mu(t,e,n,!1,i)};ui.version="18.3.1-next-f1338f8080-20240426";function fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fx)}catch(t){console.error(t)}}fx(),fv.exports=ui;var AM=fv.exports,hx,W0=AM;hx=W0.createRoot,W0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="180",bM=0,X0=1,CM=2,px=1,mx=2,tr=3,jr=0,ti=1,gi=2,Vr=0,wo=1,j0=2,Y0=3,q0=4,RM=5,hs=100,PM=101,LM=102,DM=103,NM=104,IM=200,UM=201,FM=202,OM=203,Wf=204,Xf=205,kM=206,zM=207,BM=208,HM=209,VM=210,GM=211,WM=212,XM=213,jM=214,jf=0,Yf=1,qf=2,Uo=3,$f=4,Kf=5,Jf=6,Zf=7,Rp=0,YM=1,qM=2,Gr=0,$M=1,KM=2,JM=3,gx=4,ZM=5,QM=6,eS=7,vx=300,Fo=301,Oo=302,Qf=303,eh=304,gu=306,Eo=1e3,_s=1001,th=1002,Ii=1003,tS=1004,Ol=1005,Hi=1006,ud=1007,xs=1008,ji=1009,_x=1010,xx=1011,el=1012,Pp=1013,Cs=1014,or=1015,ul=1016,Lp=1017,Dp=1018,tl=1020,yx=35902,Mx=35899,Sx=1021,wx=1022,Li=1023,nl=1026,il=1027,Ex=1028,Np=1029,Tx=1030,Ip=1031,Up=1033,yc=33776,Mc=33777,Sc=33778,wc=33779,nh=35840,ih=35841,rh=35842,sh=35843,oh=36196,ah=37492,lh=37496,ch=37808,uh=37809,dh=37810,fh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,xh=37818,yh=37819,Mh=37820,Sh=37821,wh=36492,Eh=36494,Th=36495,Ah=36283,bh=36284,Ch=36285,Rh=36286,nS=3200,iS=3201,Fp=0,rS=1,Lr="",$n="srgb",ko="srgb-linear",$c="linear",Nt="srgb",Vs=7680,$0=519,sS=512,oS=513,aS=514,Ax=515,lS=516,cS=517,uS=518,dS=519,K0=35044,J0="300 es",Vi=2e3,Kc=2001;class Go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Ph=180/Math.PI;function dl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function fS(t,e){return(t%e+e)%e}function fd(t,e,n){return(1-n)*t+n*e}function da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=w;return}if(f!==w||l!==h||c!==p||d!==y){let g=1-a;const u=l*h+c*p+d*y+f*w,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),R=Math.atan2(C,u*m);g=Math.sin(g*R)/C,a=Math.sin(a*R)/C}const M=a*m;if(l=l*g+h*M,c=c*g+p*M,d=d*g+y*M,f=f*g+w*M,g===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*p-c*h,e[n+1]=l*y+d*h+c*f-a*p,e[n+2]=c*y+d*p+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"YXZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"ZXY":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"ZYX":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"YZX":this._x=h*d*f+c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f-h*p*y;break;case"XZY":this._x=h*d*f-c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Z0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Z0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new k,Z0=new fl;class at{constructor(e,n,i,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],y=i[8],w=r[0],g=r[3],u=r[6],m=r[1],_=r[4],M=r[7],C=r[2],R=r[5],L=r[8];return s[0]=o*w+a*m+l*C,s[3]=o*g+a*_+l*R,s[6]=o*u+a*M+l*L,s[1]=c*w+d*m+f*C,s[4]=c*g+d*_+f*R,s[7]=c*u+d*M+f*L,s[2]=h*w+p*m+y*C,s[5]=h*g+p*_+y*R,s[8]=h*u+p*M+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,y=n*f+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=p*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pd.makeScale(e,n)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,n){return this.premultiply(pd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new at;function bx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){const t=Jc("canvas");return t.style.display="block",t}const Q0={};function rl(t){t in Q0||(Q0[t]=!0,console.warn(t))}function pS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const eg=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){const t={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=To(r.r),r.g=To(r.g),r.b=To(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Lr?$c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ko]:{primaries:e,whitePoint:i,transfer:$c,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}const Tt=mS();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function To(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gs;class gS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=Jc("canvas")),Gs.width=e.width,Gs.height=e.height;const r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(md(r[o].image)):s.push(md(r[o]))}else s=md(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;const gd=new k;class Vn extends Go{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,i=_s,r=_s,s=Hi,o=xs,a=Li,l=ji,c=Vn.DEFAULT_ANISOTROPY,d=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=dl(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=vx;Vn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],y=l[9],w=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(y+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,C=(u+1)/2,R=(d+h)/4,L=(f+w)/4,N=(y+g)/4;return _>M&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=L/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=N/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-y)*(g-y)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-y)/m,this.y=(f-w)/m,this.z=(h-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xS extends Go{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Vn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Op(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends xS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cx extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),zl.subVectors(this.max,fa),Ws.subVectors(e.a,fa),Xs.subVectors(e.b,fa),js.subVectors(e.c,fa),yr.subVectors(Xs,Ws),Mr.subVectors(js,Xs),ns.subVectors(Ws,js);let n=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-ns.z,ns.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,ns.z,0,-ns.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-ns.y,ns.x,0];return!vd(n,Ws,Xs,js,zl)||(n=[1,0,0,0,1,0,0,0,1],!vd(n,Ws,Xs,js,zl))?!1:(Bl.crossVectors(yr,Mr),n=[Bl.x,Bl.y,Bl.z],vd(n,Ws,Xs,js,zl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new k,new k,new k,new k,new k,new k,new k,new k],Ei=new k,kl=new hl,Ws=new k,Xs=new k,js=new k,yr=new k,Mr=new k,ns=new k,fa=new k,zl=new k,Bl=new k,is=new k;function vd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){is.fromArray(t,s);const a=r.x*Math.abs(is.x)+r.y*Math.abs(is.y)+r.z*Math.abs(is.z),l=e.dot(is),c=n.dot(is),d=i.dot(is);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const MS=new hl,ha=new k,_d=new k;class vu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(_d)),this.expandByPoint(ha.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new k,xd=new k,Hl=new k,Sr=new k,yd=new k,Vl=new k,Md=new k;class kp{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xd.copy(e).add(n).multiplyScalar(.5),Hl.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(xd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Hl),a=Sr.dot(this.direction),l=-Sr.dot(Hl),c=Sr.lengthSq(),d=Math.abs(1-o*o);let f,h,p,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const w=1/d;f*=w,h*=w,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xd).addScaledVector(Hl,h),p}intersectSphere(e,n){Ji.subVectors(e.center,this.origin);const i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,n,i,r,s){yd.subVectors(n,e),Vl.subVectors(i,e),Md.crossVectors(yd,Vl);let o=this.direction.dot(Md),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const l=a*this.direction.dot(Vl.crossVectors(Sr,Vl));if(l<0)return null;const c=a*this.direction.dot(yd.cross(Sr));if(c<0||l+c>o)return null;const d=-a*Sr.dot(Md);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,g)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=y,u[11]=w,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+y*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h+w*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-y,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=y*c-p,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=y*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+y,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=p*f-y,n[2]=y*f-p,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,wS)}lookAt(e,n,i){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),wr.crossVectors(i,ii),wr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),wr.crossVectors(i,ii)),wr.normalize(),Gl.crossVectors(ii,wr),r[0]=wr.x,r[4]=Gl.x,r[8]=ii.x,r[1]=wr.y,r[5]=Gl.y,r[9]=ii.y,r[2]=wr.z,r[6]=Gl.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],y=i[2],w=i[6],g=i[10],u=i[14],m=i[3],_=i[7],M=i[11],C=i[15],R=r[0],L=r[4],N=r[8],E=r[12],S=r[1],I=r[5],H=r[9],$=r[13],re=r[2],ae=r[6],V=r[10],j=r[14],U=r[3],J=r[7],te=r[11],Se=r[15];return s[0]=o*R+a*S+l*re+c*U,s[4]=o*L+a*I+l*ae+c*J,s[8]=o*N+a*H+l*V+c*te,s[12]=o*E+a*$+l*j+c*Se,s[1]=d*R+f*S+h*re+p*U,s[5]=d*L+f*I+h*ae+p*J,s[9]=d*N+f*H+h*V+p*te,s[13]=d*E+f*$+h*j+p*Se,s[2]=y*R+w*S+g*re+u*U,s[6]=y*L+w*I+g*ae+u*J,s[10]=y*N+w*H+g*V+u*te,s[14]=y*E+w*$+g*j+u*Se,s[3]=m*R+_*S+M*re+C*U,s[7]=m*L+_*I+M*ae+C*J,s[11]=m*N+_*H+M*V+C*te,s[15]=m*E+_*$+M*j+C*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],y=e[3],w=e[7],g=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+w*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],y=e[12],w=e[13],g=e[14],u=e[15],m=f*g*c-w*h*c+w*l*p-a*g*p-f*l*u+a*h*u,_=y*h*c-d*g*c-y*l*p+o*g*p+d*l*u-o*h*u,M=d*w*c-y*f*c+y*a*p-o*w*p-d*a*u+o*f*u,C=y*f*l-d*w*l-y*a*h+o*w*h+d*a*g-o*f*g,R=n*m+i*_+r*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=m*L,e[1]=(w*h*s-f*g*s-w*r*p+i*g*p+f*r*u-i*h*u)*L,e[2]=(a*g*s-w*l*s+w*r*c-i*g*c-a*r*u+i*l*u)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=_*L,e[5]=(d*g*s-y*h*s+y*r*p-n*g*p-d*r*u+n*h*u)*L,e[6]=(y*l*s-o*g*s-y*r*c+n*g*c+o*r*u-n*l*u)*L,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*L,e[8]=M*L,e[9]=(y*f*s-d*w*s-y*i*p+n*w*p+d*i*u-n*f*u)*L,e[10]=(o*w*s-y*a*s+y*i*c-n*w*c-o*i*u+n*a*u)*L,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=C*L,e[13]=(d*w*r-y*f*r+y*i*h-n*w*h-d*i*g+n*f*g)*L,e[14]=(y*a*r-o*w*r-y*i*l+n*w*l+o*i*g-n*a*g)*L,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,y=s*f,w=o*d,g=o*f,u=a*f,m=l*c,_=l*d,M=l*f,C=i.x,R=i.y,L=i.z;return r[0]=(1-(w+u))*C,r[1]=(p+M)*C,r[2]=(y-_)*C,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(y+_)*L,r[9]=(g-m)*L,r[10]=(1-(h+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ys.set(r[0],r[1],r[2]).length();const o=Ys.set(r[4],r[5],r[6]).length(),a=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ti.copy(this);const c=1/s,d=1/o,f=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=d,Ti.elements[5]*=d,Ti.elements[6]*=d,Ti.elements[8]*=f,Ti.elements[9]*=f,Ti.elements[10]*=f,n.setFromRotationMatrix(Ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===Vi)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Kc)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===Vi)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===Kc)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ys=new k,Ti=new jt,SS=new k(0,0,0),wS=new k(1,1,1),wr=new k,Gl=new k,ii=new k,ng=new jt,ig=new fl;class Fi{constructor(e=0,n=0,i=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const rg=new k,qs=new fl,Zi=new jt,Wl=new k,pa=new k,TS=new k,AS=new fl,sg=new k(1,0,0),og=new k(0,1,0),ag=new k(0,0,1),lg={type:"added"},bS={type:"removed"},$s={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Mn extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new k,n=new Fi,i=new fl,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new at}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qs.setFromAxisAngle(e,n),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,n){return qs.setFromAxisAngle(e,n),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,n){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wl.copy(e):Wl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(pa,Wl,this.up):Zi.lookAt(Wl,pa,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Zi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bS),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new k(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new k,Qi=new k,wd=new k,er=new k,Ks=new k,Js=new k,cg=new k,Ed=new k,Td=new k,Ad=new k,bd=new It,Cd=new It,Rd=new It;class Pi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ai.subVectors(e,n),r.cross(Ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ai.subVectors(r,n),Qi.subVectors(i,n),wd.subVectors(e,n);const o=Ai.dot(Ai),a=Ai.dot(Qi),l=Ai.dot(wd),c=Qi.dot(Qi),d=Qi.dot(wd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bd.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),bd.fromBufferAttribute(e,n),Cd.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bd,s.x),o.addScaledVector(Cd,s.y),o.addScaledVector(Rd,s.z),o}static isFrontFacing(e,n,i,r){return Ai.subVectors(i,n),Qi.subVectors(e,n),Ai.cross(Qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ai.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Pi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ks.subVectors(r,i),Js.subVectors(s,i),Ed.subVectors(e,i);const l=Ks.dot(Ed),c=Js.dot(Ed);if(l<=0&&c<=0)return n.copy(i);Td.subVectors(e,r);const d=Ks.dot(Td),f=Js.dot(Td);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ks,o);Ad.subVectors(e,s);const p=Ks.dot(Ad),y=Js.dot(Ad);if(y>=0&&p<=y)return n.copy(s);const w=p*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Js,a);const g=d*y-p*f;if(g<=0&&f-d>=0&&p-y>=0)return cg.subVectors(s,r),a=(f-d)/(f-d+(p-y)),n.copy(r).addScaledVector(cg,a);const u=1/(g+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Pd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Tt.workingColorSpace){if(e=fS(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pd(o,s,e+1/3),this.g=Pd(o,s,e),this.b=Pd(o,s,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Tt.workingToColorSpace(Ln.copy(this),e),Math.round(ht(Ln.r*255,0,255))*65536+Math.round(ht(Ln.g*255,0,255))*256+Math.round(ht(Ln.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),n);const i=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=$n){Tt.workingToColorSpace(Ln.copy(this),e);const n=Ln.r,i=Ln.g,r=Ln.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(Xl);const i=fd(Er.h,Xl.h,n),r=fd(Er.s,Xl.s,n),s=fd(Er.l,Xl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new pt;pt.NAMES=Rx;let CS=0;class Ds extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=wo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=Xf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(i.blending=this.blending),this.side!==jr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wf&&(i.blendSrc=this.blendSrc),this.blendDst!==Xf&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ao extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new k,jl=new Ye;let RS=0;class Xi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=K0,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jl.fromBufferAttribute(this,n),jl.applyMatrix3(e),this.setXY(n,jl.x,jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=da(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=da(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=da(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),r=qn(r,this.array),s=qn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K0&&(e.usage=this.usage),e}}class Px extends Xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lx extends Xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends Xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PS=0;const hi=new jt,Ld=new Mn,Zs=new k,ri=new hl,ma=new hl,_n=new k;class cn extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Lx:Px)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,i){return hi.makeTranslation(e,n,i),this.applyMatrix4(hi),this}scale(e,n,i){return hi.makeScale(e,n,i),this.applyMatrix4(hi),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ri.min,ma.min),ri.expandByPoint(_n),_n.addVectors(ri.max,ma.max),ri.expandByPoint(_n)):(ri.expandByPoint(ma.min),ri.expandByPoint(ma.max))}ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_n));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)_n.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),_n.add(Zs)),r=Math.max(r,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new k,l[N]=new k;const c=new k,d=new k,f=new k,h=new Ye,p=new Ye,y=new Ye,w=new k,g=new k;function u(N,E,S){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),y.fromBufferAttribute(s,S),d.sub(c),f.sub(c),p.sub(h),y.sub(h);const I=1/(p.x*y.y-y.x*p.y);isFinite(I)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(I),a[N].add(w),a[E].add(w),a[S].add(w),l[N].add(g),l[E].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let N=0,E=m.length;N<E;++N){const S=m[N],I=S.start,H=S.count;for(let $=I,re=I+H;$<re;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const _=new k,M=new k,C=new k,R=new k;function L(N){C.fromBufferAttribute(r,N),R.copy(C);const E=a[N];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(R,E);const I=M.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,I)}for(let N=0,E=m.length;N<E;++N){const S=m[N],I=S.start,H=S.count;for(let $=I,re=I+H;$<re;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),w=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_n.fromBufferAttribute(e,n),_n.normalize(),e.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,y=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*d;for(let u=0;u<d;u++)h[y++]=c[p++]}return new Xi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new jt,rs=new kp,Yl=new vu,dg=new k,ql=new k,$l=new k,Kl=new k,Dd=new k,Jl=new k,fg=new k,Zl=new k;class ee extends Mn{constructor(e=new cn,n=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Dd.fromBufferAttribute(f,e),o?Jl.addScaledVector(Dd,d):Jl.addScaledVector(Dd.sub(n),d))}n.add(Jl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(Yl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Yl,dg)===null||rs.origin.distanceToSquared(dg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),rs.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const g=h[y],u=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const R=a.getX(M),L=a.getX(M+1),N=a.getX(M+2);r=Ql(this,u,e,i,c,d,f,R,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let g=y,u=w;g<u;g+=3){const m=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);r=Ql(this,o,e,i,c,d,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const g=h[y],u=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const R=M,L=M+1,N=M+2;r=Ql(this,u,e,i,c,d,f,R,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let g=y,u=w;g<u;g+=3){const m=g,_=g+1,M=g+2;r=Ql(this,o,e,i,c,d,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function LS(t,e,n,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===jr,a),l===null)return null;Zl.copy(a),Zl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Zl);return c<n.near||c>n.far?null:{distance:c,point:Zl.clone(),object:t}}function Ql(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ql),t.getVertexPosition(l,$l),t.getVertexPosition(c,Kl);const d=LS(t,e,n,i,ql,$l,Kl,fg);if(d){const f=new k;Pi.getBarycoord(fg,ql,$l,Kl,f),r&&(d.uv=Pi.getInterpolatedAttribute(r,a,l,c,f,new Ye)),s&&(d.uv1=Pi.getInterpolatedAttribute(s,a,l,c,f,new Ye)),o&&(d.normal=Pi.getInterpolatedAttribute(o,a,l,c,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Pi.getNormal(ql,$l,Kl,h.normal),d.face=h,d.barycoord=f}return d}class Nn extends cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function y(w,g,u,m,_,M,C,R,L,N,E){const S=M/L,I=C/N,H=M/2,$=C/2,re=R/2,ae=L+1,V=N+1;let j=0,U=0;const J=new k;for(let te=0;te<V;te++){const Se=te*I-$;for(let Fe=0;Fe<ae;Fe++){const st=Fe*S-H;J[w]=st*m,J[g]=Se*_,J[u]=re,c.push(J.x,J.y,J.z),J[w]=0,J[g]=0,J[u]=R>0?1:-1,d.push(J.x,J.y,J.z),f.push(Fe/L),f.push(1-te/N),j+=1}}for(let te=0;te<N;te++)for(let Se=0;Se<L;Se++){const Fe=h+Se+ae*te,st=h+Se+ae*(te+1),Pe=h+(Se+1)+ae*(te+1),de=h+(Se+1)+ae*te;l.push(Fe,st,de),l.push(st,Pe,de),U+=6}a.addGroup(p,U,E),p+=U,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kn(t){const e={};for(let n=0;n<t.length;n++){const i=zo(t[n]);for(const r in i)e[r]=i[r]}return e}function DS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const NS={clone:zo,merge:kn};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nx extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new k,hg=new Ye,pg=new Ye;class oi extends Nx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,hg,pg),n.subVectors(pg,hg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qs=-90,eo=1;class FS extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(Qs,eo,e,n);r.layers=this.layers,this.add(r);const s=new oi(Qs,eo,e,n);s.layers=this.layers,this.add(s);const o=new oi(Qs,eo,e,n);o.layers=this.layers,this.add(o);const a=new oi(Qs,eo,e,n);a.layers=this.layers,this.add(a);const l=new oi(Qs,eo,e,n);l.layers=this.layers,this.add(l);const c=new oi(Qs,eo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ix extends Vn{constructor(e=[],n=Fo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends Rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nn(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Vr});s.uniforms.tEquirect.value=n;const o=new ee(r,s),a=n.minFilter;return n.minFilter===xs&&(n.minFilter=Hi),new FS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class $e extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const g=n.getJointPose(w,i),u=this._getHandJoint(c,w);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Bp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new Bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zS extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Id=new k,BS=new k,HS=new at;class ds{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Id.subVectors(i,n).cross(BS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HS.getNormalMatrix(e),r=this.coplanarPoint(Id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new vu,VS=new Ye(.5,.5),ec=new k;class Hp{constructor(e=new ds,n=new ds,i=new ds,r=new ds,s=new ds,o=new ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],y=s[8],w=s[9],g=s[10],u=s[11],m=s[12],_=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,u-y,C-m).normalize(),r[1].setComponents(c+o,p+d,u+y,C+m).normalize(),r[2].setComponents(c+a,p+f,u+w,C+_).normalize(),r[3].setComponents(c-a,p-f,u-w,C-_).normalize(),i)r[4].setComponents(l,h,g,M).normalize(),r[5].setComponents(c-l,p-h,u-g,C-M).normalize();else if(r[4].setComponents(c-l,p-h,u-g,C-M).normalize(),n===Vi)r[5].setComponents(c+l,p+h,u+g,C+M).normalize();else if(n===Kc)r[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const n=VS.distanceTo(e.center);return ss.radius=.7071067811865476+n,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ec.x=r.normal.x>0?e.max.x:e.min.x,ec.y=r.normal.y>0?e.max.y:e.min.y,ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new k,Qc=new k,mg=new jt,ga=new kp,tc=new vu,Ud=new k,gg=new k;class vg extends Mn{constructor(e=new cn,n=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zc.fromBufferAttribute(n,r-1),Qc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zc.distanceTo(Qc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;mg.copy(r).invert(),ga.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=p,g=y-1;w<g;w+=c){const u=d.getX(w),m=d.getX(w+1),_=nc(this,e,ga,l,u,m,w);_&&n.push(_)}if(this.isLineLoop){const w=d.getX(y-1),g=d.getX(p),u=nc(this,e,ga,l,w,g,y-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let w=p,g=y-1;w<g;w+=c){const u=nc(this,e,ga,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=nc(this,e,ga,l,y-1,p,y-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Zc.fromBufferAttribute(a,r),Qc.fromBufferAttribute(a,s),n.distanceSqToSegment(Zc,Qc,Ud,gg)>i)return;Ud.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ud);if(!(c<e.near||c>e.far))return{distance:c,point:gg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class GS extends Vn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ux extends Vn{constructor(e,n,i=Cs,r,s,o,a=Ii,l=Ii,c,d=nl,f=1){if(d!==nl&&d!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zn extends cn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,y=i*2+s,w=r+1,g=new k,u=new k;for(let m=0;m<=y;m++){let _=0,M=0,C=0,R=0;if(m<=i){const E=m/i,S=E*Math.PI/2;M=-d-e*Math.cos(S),C=e*Math.sin(S),R=-e*Math.cos(S),_=E*f}else if(m<=i+s){const E=(m-i)/s;M=-d+E*n,C=e,R=0,_=f+E*h}else{const E=(m-i-s)/i,S=E*Math.PI/2;M=d+e*Math.sin(S),C=e*Math.cos(S),R=e*Math.sin(S),_=f+h+E*f}const L=Math.max(0,Math.min(1,_/p));let N=0;m===0?N=.5/r:m===y&&(N=-.5/r);for(let E=0;E<=r;E++){const S=E/r,I=S*Math.PI*2,H=Math.sin(I),$=Math.cos(I);u.x=-C*$,u.y=M,u.z=C*H,a.push(u.x,u.y,u.z),g.set(-C*$,R,C*H),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+N,L)}if(m>0){const E=(m-1)*w;for(let S=0;S<r;S++){const I=E+S,H=E+S+1,$=m*w+S,re=m*w+S+1;o.push(I,H,$),o.push(H,re,$)}}}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bo extends cn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new k,d=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends cn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let y=0;const w=[],g=i/2;let u=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function m(){const M=new k,C=new k;let R=0;const L=(n-e)/i;for(let N=0;N<=s;N++){const E=[],S=N/s,I=S*(n-e)+e;for(let H=0;H<=r;H++){const $=H/r,re=$*l+a,ae=Math.sin(re),V=Math.cos(re);C.x=I*ae,C.y=-S*i+g,C.z=I*V,f.push(C.x,C.y,C.z),M.set(ae,L,V).normalize(),h.push(M.x,M.y,M.z),p.push($,1-S),E.push(y++)}w.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const S=w[E][N],I=w[E+1][N],H=w[E+1][N+1],$=w[E][N+1];(e>0||E!==0)&&(d.push(S,I,$),R+=3),(n>0||E!==s-1)&&(d.push(I,H,$),R+=3)}c.addGroup(u,R,0),u+=R}function _(M){const C=y,R=new Ye,L=new k;let N=0;const E=M===!0?e:n,S=M===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),y++;const I=y;for(let H=0;H<=r;H++){const re=H/r*l+a,ae=Math.cos(re),V=Math.sin(re);L.x=E*V,L.y=g*S,L.z=E*ae,f.push(L.x,L.y,L.z),h.push(0,S,0),R.x=ae*.5+.5,R.y=V*.5*S+.5,p.push(R.x,R.y),y++}for(let H=0;H<r;H++){const $=C+H,re=I+H;M===!0?d.push(re,re+1,$):d.push(re+1,re,$),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dn extends kt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Dn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vp extends cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new k,M=new k,C=new k;for(let R=0;R<n.length;R+=3)p(n[R+0],_),p(n[R+1],M),p(n[R+2],C),l(_,M,C,m)}function l(m,_,M,C){const R=C+1,L=[];for(let N=0;N<=R;N++){L[N]=[];const E=m.clone().lerp(M,N/R),S=_.clone().lerp(M,N/R),I=R-N;for(let H=0;H<=I;H++)H===0&&N===R?L[N][H]=E:L[N][H]=E.clone().lerp(S,H/I)}for(let N=0;N<R;N++)for(let E=0;E<2*(R-N)-1;E++){const S=Math.floor(E/2);E%2===0?(h(L[N][S+1]),h(L[N+1][S]),h(L[N][S])):(h(L[N][S+1]),h(L[N+1][S+1]),h(L[N+1][S]))}}function c(m){const _=new k;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(m),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function d(){const m=new k;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const M=g(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(M,1-C)}y(),f()}function f(){for(let m=0;m<o.length;m+=6){const _=o[m+0],M=o[m+2],C=o[m+4],R=Math.max(_,M,C),L=Math.min(_,M,C);R>.9&&L<.1&&(_<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,_){const M=m*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function y(){const m=new k,_=new k,M=new k,C=new k,R=new Ye,L=new Ye,N=new Ye;for(let E=0,S=0;E<s.length;E+=9,S+=6){m.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),R.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(m).add(_).add(M).divideScalar(3);const I=g(C);w(R,S+0,m,I),w(L,S+2,_,I),w(N,S+4,M,I)}}function w(m,_,M,C){C<0&&m.x===1&&(o[_]=m.x-1),M.x===0&&M.z===0&&(o[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.vertices,e.indices,e.radius,e.details)}}class sn extends Vp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sn(e.radius,e.detail)}}class pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ye:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new jt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ox extends pr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WS extends Ox{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ic=new k,Fd=new Gp,Od=new Gp,kd=new Gp;class kx extends pr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(ic.subVectors(r[0],r[1]).add(r[0]),c=ic);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(ic.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=ic),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(f),p),w=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);w<1e-4&&(w=1),y<1e-4&&(y=w),g<1e-4&&(g=w),Fd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,y,w,g),Od.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,y,w,g),kd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,y,w,g)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Od.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),kd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Fd.calc(l),Od.calc(l),kd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _g(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function XS(t,e){const n=1-t;return n*n*e}function jS(t,e){return 2*(1-t)*t*e}function YS(t,e){return t*t*e}function Ua(t,e,n,i){return XS(t,e)+jS(t,n)+YS(t,i)}function qS(t,e){const n=1-t;return n*n*n*e}function $S(t,e){const n=1-t;return 3*n*n*t*e}function KS(t,e){return 3*(1-t)*t*t*e}function JS(t,e){return t*t*t*e}function Fa(t,e,n,i,r){return qS(t,e)+$S(t,n)+KS(t,i)+JS(t,r)}class ZS extends pr{constructor(e=new Ye,n=new Ye,i=new Ye,r=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fa(e,r.x,s.x,o.x,a.x),Fa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QS extends pr{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fa(e,r.x,s.x,o.x,a.x),Fa(e,r.y,s.y,o.y,a.y),Fa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class e2 extends pr{constructor(e=new Ye,n=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t2 extends pr{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n2 extends pr{constructor(e=new Ye,n=new Ye,i=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ua(e,r.x,s.x,o.x),Ua(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zx extends pr{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ua(e,r.x,s.x,o.x),Ua(e,r.y,s.y,o.y),Ua(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i2 extends pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(_g(a,l.x,c.x,d.x,f.x),_g(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ye().fromArray(r))}return this}}var r2=Object.freeze({__proto__:null,ArcCurve:WS,CatmullRomCurve3:kx,CubicBezierCurve:ZS,CubicBezierCurve3:QS,EllipseCurve:Ox,LineCurve:e2,LineCurve3:t2,QuadraticBezierCurve:n2,QuadraticBezierCurve3:zx,SplineCurve:i2});class Ss extends cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],y=[],w=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let _=0;_<c;_++){const M=_*f-s;y.push(M,-m,0),w.push(0,0,1),g.push(_/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const _=m+c*u,M=m+c*(u+1),C=m+1+c*(u+1),R=m+1+c*u;p.push(_,M,R),p.push(M,C,R)}this.setIndex(p),this.setAttribute("position",new xt(y,3)),this.setAttribute("normal",new xt(w,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wp extends cn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new k,y=new Ye;for(let w=0;w<=r;w++){for(let g=0;g<=i;g++){const u=s+g/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let w=0;w<r;w++){const g=w*(i+1);for(let u=0;u<i;u++){const m=u+g,_=m,M=m+i+1,C=m+i+2,R=m+1;a.push(_,M,R),a.push(M,C,R)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zt extends cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new k,h=new k,p=[],y=[],w=[],g=[];for(let u=0;u<=i;u++){const m=[],_=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const R=C/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+_*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),g.push(R+M,1-_),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const _=d[u][m+1],M=d[u][m],C=d[u+1][m],R=d[u+1][m+1];(u!==0||o>0)&&p.push(_,M,R),(u!==i-1||l<Math.PI)&&p.push(M,C,R)}this.setIndex(p),this.setAttribute("position",new xt(y,3)),this.setAttribute("normal",new xt(w,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dn extends cn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new k,f=new k,h=new k;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const w=y/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(w),f.y=(e+n*Math.cos(g))*Math.sin(w),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const w=(r+1)*p+y-1,g=(r+1)*(p-1)+y-1,u=(r+1)*(p-1)+y,m=(r+1)*p+y;o.push(w,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xp extends cn{constructor(e=new zx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Ye;let d=new k;const f=[],h=[],p=[],y=[];w(),this.setIndex(y),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function w(){for(let _=0;_<n;_++)g(_);g(s===!1?n:0),m(),u()}function g(_){d=e.getPointAt(_/n,d);const M=o.normals[_],C=o.binormals[_];for(let R=0;R<=r;R++){const L=R/r*Math.PI*2,N=Math.sin(L),E=-Math.cos(L);l.x=E*M.x+N*C.x,l.y=E*M.y+N*C.y,l.z=E*M.z+N*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let _=1;_<=n;_++)for(let M=1;M<=r;M++){const C=(r+1)*(_-1)+(M-1),R=(r+1)*_+(M-1),L=(r+1)*_+M,N=(r+1)*(_-1)+M;y.push(C,R,N),y.push(R,L,N)}}function m(){for(let _=0;_<=n;_++)for(let M=0;M<=r;M++)c.x=_/n,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xp(new r2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ot extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class to extends Ds{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s2 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o2 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jp extends Mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class a2 extends jp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const zd=new jt,xg=new k,yg=new k;class Bx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xg.setFromMatrixPosition(e.matrixWorld),n.position.copy(xg),yg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yg),n.updateMatrixWorld(),zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mg=new jt,va=new k,Bd=new k;class l2 extends Bx{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Bd.copy(i.position),Bd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bd),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),Mg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mg,i.coordinateSystem,i.reversedDepth)}}class _a extends jp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new l2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hx extends Nx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class c2 extends Bx{constructor(){super(new Hx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sg extends jp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new c2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class u2 extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wg=new jt;class d2{constructor(e,n,i=0,r=1/0){this.ray=new kp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wg),this}intersectObject(e,n=!0,i=[]){return Dh(e,this,i,n),i.sort(Eg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dh(e[r],this,i,n);return i.sort(Eg),i}}function Eg(t,e){return t.distance-e.distance}function Dh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Dh(s[o],e,n,!0)}}function Tg(t,e,n,i){const r=f2(i);switch(n){case Sx:return t*e;case Ex:return t*e/r.components*r.byteLength;case Np:return t*e/r.components*r.byteLength;case Tx:return t*e*2/r.components*r.byteLength;case Ip:return t*e*2/r.components*r.byteLength;case wx:return t*e*3/r.components*r.byteLength;case Li:return t*e*4/r.components*r.byteLength;case Up:return t*e*4/r.components*r.byteLength;case yc:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sc:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(t,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(t,8)*Math.max(e,8)/2;case oh:case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wh:case Eh:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ah:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ch:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function f2(t){switch(t){case ji:case _x:return{byteLength:1,components:1};case el:case xx:case ul:return{byteLength:2,components:1};case Lp:case Dp:return{byteLength:2,components:4};case Cs:case Pp:case or:return{byteLength:4,components:1};case yx:case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function h2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<f.length;p++){const y=f[h],w=f[p];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++h,f[h]=w)}f.length=h+1;for(let p=0,y=f.length;p<y;p++){const w=f[p];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var p2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m2=`#ifdef USE_ALPHAHASH
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
#endif`,g2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y2=`#ifdef USE_AOMAP
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
#endif`,M2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S2=`#ifdef USE_BATCHING
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
#endif`,w2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b2=`#ifdef USE_IRIDESCENCE
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
#endif`,C2=`#ifdef USE_BUMPMAP
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
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O2=`#define PI 3.141592653589793
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
} // validated`,k2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z2=`vec3 transformedNormal = objectNormal;
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
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W2="gl_FragColor = linearToOutputTexel( gl_FragColor );",X2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,$2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tw=`#ifdef USE_GRADIENTMAP
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
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
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
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
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
#endif`,fw=`struct PhysicalMaterial {
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
}`,hw=`
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ww=`#if defined( USE_POINTS_UV )
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
#endif`,Ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
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
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
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
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zw=`float getShadowMask() {
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
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
}`,ME=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,AE=`uniform vec3 diffuse;
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
}`,bE=`#include <common>
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
}`,CE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,PE=`#define LAMBERT
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
}`,LE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,FE=`#define PHONG
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
}`,OE=`#define STANDARD
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
}`,kE=`#define STANDARD
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
}`,zE=`#define TOON
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
}`,BE=`#define TOON
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
}`,HE=`uniform float size;
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
}`,VE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,WE=`uniform vec3 color;
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
}`,XE=`uniform float rotation;
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
}`,jE=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:p2,alphahash_pars_fragment:m2,alphamap_fragment:g2,alphamap_pars_fragment:v2,alphatest_fragment:_2,alphatest_pars_fragment:x2,aomap_fragment:y2,aomap_pars_fragment:M2,batching_pars_vertex:S2,batching_vertex:w2,begin_vertex:E2,beginnormal_vertex:T2,bsdfs:A2,iridescence_fragment:b2,bumpmap_pars_fragment:C2,clipping_planes_fragment:R2,clipping_planes_pars_fragment:P2,clipping_planes_pars_vertex:L2,clipping_planes_vertex:D2,color_fragment:N2,color_pars_fragment:I2,color_pars_vertex:U2,color_vertex:F2,common:O2,cube_uv_reflection_fragment:k2,defaultnormal_vertex:z2,displacementmap_pars_vertex:B2,displacementmap_vertex:H2,emissivemap_fragment:V2,emissivemap_pars_fragment:G2,colorspace_fragment:W2,colorspace_pars_fragment:X2,envmap_fragment:j2,envmap_common_pars_fragment:Y2,envmap_pars_fragment:q2,envmap_pars_vertex:$2,envmap_physical_pars_fragment:ow,envmap_vertex:K2,fog_vertex:J2,fog_pars_vertex:Z2,fog_fragment:Q2,fog_pars_fragment:ew,gradientmap_pars_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:sw,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:dw,lights_physical_pars_fragment:fw,lights_fragment_begin:hw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:_w,logdepthbuf_vertex:xw,map_fragment:yw,map_pars_fragment:Mw,map_particle_fragment:Sw,map_particle_pars_fragment:ww,metalnessmap_fragment:Ew,metalnessmap_pars_fragment:Tw,morphinstance_vertex:Aw,morphcolor_vertex:bw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Rw,morphtarget_vertex:Pw,normal_fragment_begin:Lw,normal_fragment_maps:Dw,normal_pars_fragment:Nw,normal_pars_vertex:Iw,normal_vertex:Uw,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Bw,opaque_fragment:Hw,packing:Vw,premultiplied_alpha_fragment:Gw,project_vertex:Ww,dithering_fragment:Xw,dithering_pars_fragment:jw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:Kw,shadowmap_vertex:Jw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:oE,transmission_fragment:aE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:dE,worldpos_vertex:fE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:vE,cube_frag:_E,depth_vert:xE,depth_frag:yE,distanceRGBA_vert:ME,distanceRGBA_frag:SE,equirect_vert:wE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:bE,meshbasic_frag:CE,meshlambert_vert:RE,meshlambert_frag:PE,meshmatcap_vert:LE,meshmatcap_frag:DE,meshnormal_vert:NE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:kE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:HE,points_frag:VE,shadow_vert:GE,shadow_frag:WE,sprite_vert:XE,sprite_frag:jE},Ue={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},zi={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zi.physical={uniforms:kn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const rc={r:0,b:0,g:0},os=new Fi,YE=new jt;function qE(t,e,n,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function y(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?n:e).get(M)),M}function w(_){let M=!1;const C=y(_);C===null?u(a,l):C&&C.isColor&&(u(C,1),M=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,M){const C=y(M);C&&(C.isCubeTexture||C.mapping===gu)?(d===void 0&&(d=new ee(new Nn(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:zo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),os.copy(M.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(os)),d.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Nt,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ee(new Ss(2,2),new Yr({name:"BackgroundMaterial",uniforms:zo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,M){_.getRGB(rc,Dx(t)),i.buffers.color.setClear(rc.r,rc.g,rc.b,M,o)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:w,addToRenderList:g,dispose:m}}function $E(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,H,$,re){let ae=!1;const V=f($,H,I);s!==V&&(s=V,c(s.object)),ae=p(S,$,H,re),ae&&y(S,$,H,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(S,I,H,$),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,I,H){const $=H.wireframe===!0;let re=i[S.id];re===void 0&&(re={},i[S.id]=re);let ae=re[I.id];ae===void 0&&(ae={},re[I.id]=ae);let V=ae[$];return V===void 0&&(V=h(l()),ae[$]=V),V}function h(S){const I=[],H=[],$=[];for(let re=0;re<n;re++)I[re]=0,H[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:$,object:S,attributes:{},index:null}}function p(S,I,H,$){const re=s.attributes,ae=I.attributes;let V=0;const j=H.getAttributes();for(const U in j)if(j[U].location>=0){const te=re[U];let Se=ae[U];if(Se===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),te===void 0||te.attribute!==Se||Se&&te.data!==Se.data)return!0;V++}return s.attributesNum!==V||s.index!==$}function y(S,I,H,$){const re={},ae=I.attributes;let V=0;const j=H.getAttributes();for(const U in j)if(j[U].location>=0){let te=ae[U];te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const Se={};Se.attribute=te,te&&te.data&&(Se.data=te.data),re[U]=Se,V++}s.attributes=re,s.attributesNum=V,s.index=$}function w(){const S=s.newAttributes;for(let I=0,H=S.length;I<H;I++)S[I]=0}function g(S){u(S,0)}function u(S,I){const H=s.newAttributes,$=s.enabledAttributes,re=s.attributeDivisors;H[S]=1,$[S]===0&&(t.enableVertexAttribArray(S),$[S]=1),re[S]!==I&&(t.vertexAttribDivisor(S,I),re[S]=I)}function m(){const S=s.newAttributes,I=s.enabledAttributes;for(let H=0,$=I.length;H<$;H++)I[H]!==S[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function _(S,I,H,$,re,ae,V){V===!0?t.vertexAttribIPointer(S,I,H,re,ae):t.vertexAttribPointer(S,I,H,$,re,ae)}function M(S,I,H,$){w();const re=$.attributes,ae=H.getAttributes(),V=I.defaultAttributeValues;for(const j in ae){const U=ae[j];if(U.location>=0){let J=re[j];if(J===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const te=J.normalized,Se=J.itemSize,Fe=e.get(J);if(Fe===void 0)continue;const st=Fe.buffer,Pe=Fe.type,de=Fe.bytesPerElement,B=Pe===t.INT||Pe===t.UNSIGNED_INT||J.gpuType===Pp;if(J.isInterleavedBufferAttribute){const fe=J.data,Ne=fe.stride,Ze=J.offset;if(fe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)u(U.location+Ce,fe.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)g(U.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Ce=0;Ce<U.locationSize;Ce++)_(U.location+Ce,Se/U.locationSize,Pe,te,Ne*de,(Ze+Se/U.locationSize*Ce)*de,B)}else{if(J.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)u(U.location+fe,J.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe);t.bindBuffer(t.ARRAY_BUFFER,st);for(let fe=0;fe<U.locationSize;fe++)_(U.location+fe,Se/U.locationSize,Pe,te,Se*de,Se/U.locationSize*fe*de,B)}}else if(V!==void 0){const te=V[j];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(U.location,te);break;case 3:t.vertexAttrib3fv(U.location,te);break;case 4:t.vertexAttrib4fv(U.location,te);break;default:t.vertexAttrib1fv(U.location,te)}}}}m()}function C(){N();for(const S in i){const I=i[S];for(const H in I){const $=I[H];for(const re in $)d($[re].object),delete $[re];delete I[H]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const H in I){const $=I[H];for(const re in $)d($[re].object),delete $[re];delete I[H]}delete i[S.id]}function L(S){for(const I in i){const H=i[I];if(H[S.id]===void 0)continue;const $=H[S.id];for(const re in $)d($[re].object),delete $[re];delete H[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:g,disableUnusedAttributes:m}}function KE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let y=0;y<f;y++)p+=d[y];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let w=0;w<f;w++)y+=d[w]*h[w];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Li&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ji&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==or&&!N)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function ZE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ds,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,w=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,_=m*4;let M=u.clippingState||null;l.value=M,M=d(y,h,_,p);for(let C=0;C!==_;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,y){const w=f!==null?f.length:0;let g=null;if(w!==0){if(g=l.value,y!==!0||g===null){const u=p+w*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,M=p;_!==w;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}function QE(t){let e=new WeakMap;function n(o,a){return a===Qf?o.mapping=Fo:a===eh&&(o.mapping=Oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qf||a===eh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const go=4,Ag=[.125,.215,.35,.446,.526,.582],ps=20,Hd=new Hx,bg=new pt;let Vd=null,Gd=0,Wd=0,Xd=!1;const fs=(1+Math.sqrt(5))/2,no=1/fs,Cg=[new k(-fs,no,0),new k(fs,no,0),new k(-no,0,fs),new k(no,0,fs),new k(0,fs,-no),new k(0,fs,no),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],eT=new k;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=eT}=s;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fo||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ul,format:Li,colorSpace:ko,depthBuffer:!1},r=Pg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(s)),this._blurMaterial=nT(s,e,n)}return r}_compileMaterial(e){const n=new ee(this._lodPlanes[0],e);this._renderer.compile(n,Hd)}_sceneToCubeUV(e,n,i,r,s){const l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(bg),f.toneMapping=Gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new Ao({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new ee(new Nn,w);let u=!1;const m=e.background;m?m.isColor&&(w.color.copy(m),e.background=null,u=!0):(w.color.copy(bg),u=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const C=this._cubeSize;sc(r,M*C,_>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fo||e.mapping===Oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cg[(r-s-1)%Cg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ee(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ps-1),w=s/y,g=isFinite(s)?1+Math.floor(d*w):ps;g>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ps}`);const u=[];let m=0;for(let L=0;L<ps;++L){const N=L/w,E=Math.exp(-N*N/2);u.push(E),L===0?m+=E:L<g&&(m+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const M=this._sizeLods[r],C=3*M*(r>_-go?r-_+go:0),R=4*(this._cubeSize-M);sc(n,C,R,3*M,2*M),l.setRenderTarget(n),l.render(f,Hd)}}function tT(t){const e=[],n=[],i=[];let r=t;const s=t-go+1+Ag.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-go?l=Ag[o-t+go-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,y=6,w=3,g=2,u=1,m=new Float32Array(w*y*p),_=new Float32Array(g*y*p),M=new Float32Array(u*y*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,N=R>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];m.set(E,w*y*R),_.set(h,g*y*R);const S=[R,R,R,R,R,R];M.set(S,u*y*R)}const C=new cn;C.setAttribute("position",new Xi(m,w)),C.setAttribute("uv",new Xi(_,g)),C.setAttribute("faceIndex",new Xi(M,u)),e.push(C),r>go&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pg(t,e,n){const i=new Rs(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nT(t,e,n){const i=new Float32Array(ps),r=new k(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yp(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Lg(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yp(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Dg(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Yp(){return`

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
	`}function iT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qf||l===eh,d=l===Fo||l===Oo;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Rg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Rg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function rT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&rl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,y=f.attributes.position;let w=0;if(p!==null){const m=p.array;w=p.version;for(let _=0,M=m.length;_<M;_+=3){const C=m[_+0],R=m[_+1],L=m[_+2];h.push(C,R,R,L,L,C)}}else if(y!==void 0){const m=y.array;w=y.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const C=_+0,R=_+1,L=_+2;h.push(C,R,R,L,L,C)}}else return;const g=new(bx(h)?Lx:Px)(h,1);g.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function oT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*o,y),n.update(p,i,y))}function d(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let g=0;for(let u=0;u<y;u++)g+=p[u];n.update(g,i,1)}function f(h,p,y,w){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],w[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,w,0,y);let u=0;for(let m=0;m<y;m++)u+=p[m]*w[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function aT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lT(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),w===!0&&(M=2),g===!0&&(M=3);let C=a.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*R*4*f),N=new Cx(L,C,R,f);N.type=or,N.needsUpdate=!0;const E=M*4;for(let I=0;I<f;I++){const H=u[I],$=m[I],re=_[I],ae=C*R*4*I;for(let V=0;V<H.count;V++){const j=V*E;y===!0&&(r.fromBufferAttribute(H,V),L[ae+j+0]=r.x,L[ae+j+1]=r.y,L[ae+j+2]=r.z,L[ae+j+3]=0),w===!0&&(r.fromBufferAttribute($,V),L[ae+j+4]=r.x,L[ae+j+5]=r.y,L[ae+j+6]=r.z,L[ae+j+7]=0),g===!0&&(r.fromBufferAttribute(re,V),L[ae+j+8]=r.x,L[ae+j+9]=r.y,L[ae+j+10]=r.z,L[ae+j+11]=re.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Ye(C,R)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function cT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Gx=new Vn,Ng=new Ux(1,1),Wx=new Cx,Xx=new yS,jx=new Ix,Ig=[],Ug=[],Fg=new Float32Array(16),Og=new Float32Array(9),kg=new Float32Array(4);function Wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function pn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function mn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _u(t,e){let n=Ug[e];n===void 0&&(n=new Int32Array(e),Ug[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2fv(this.addr,e),mn(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pn(n,e))return;t.uniform3fv(this.addr,e),mn(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4fv(this.addr,e),mn(n,e)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;kg.set(i),t.uniformMatrix2fv(this.addr,!1,kg),mn(n,i)}}function mT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;Og.set(i),t.uniformMatrix3fv(this.addr,!1,Og),mn(n,i)}}function gT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,i))return;Fg.set(i),t.uniformMatrix4fv(this.addr,!1,Fg),mn(n,i)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2iv(this.addr,e),mn(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;t.uniform3iv(this.addr,e),mn(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4iv(this.addr,e),mn(n,e)}}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;t.uniform2uiv(this.addr,e),mn(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;t.uniform3uiv(this.addr,e),mn(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;t.uniform4uiv(this.addr,e),mn(n,e)}}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ng.compareFunction=Ax,s=Ng):s=Gx,n.setTexture2D(e||s,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xx,r)}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jx,r)}function CT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wx,r)}function RT(t){switch(t){case 5126:return uT;case 35664:return dT;case 35665:return fT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ST;case 36295:return wT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return CT}}function PT(t,e){t.uniform1fv(this.addr,e)}function LT(t,e){const n=Wo(e,this.size,2);t.uniform2fv(this.addr,n)}function DT(t,e){const n=Wo(e,this.size,3);t.uniform3fv(this.addr,n)}function NT(t,e){const n=Wo(e,this.size,4);t.uniform4fv(this.addr,n)}function IT(t,e){const n=Wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UT(t,e){const n=Wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FT(t,e){const n=Wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OT(t,e){t.uniform1iv(this.addr,e)}function kT(t,e){t.uniform2iv(this.addr,e)}function zT(t,e){t.uniform3iv(this.addr,e)}function BT(t,e){t.uniform4iv(this.addr,e)}function HT(t,e){t.uniform1uiv(this.addr,e)}function VT(t,e){t.uniform2uiv(this.addr,e)}function GT(t,e){t.uniform3uiv(this.addr,e)}function WT(t,e){t.uniform4uiv(this.addr,e)}function XT(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);pn(i,s)||(t.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Gx,s[o])}function jT(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);pn(i,s)||(t.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Xx,s[o])}function YT(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);pn(i,s)||(t.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||jx,s[o])}function qT(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);pn(i,s)||(t.uniform1iv(this.addr,s),mn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wx,s[o])}function $T(t){switch(t){case 5126:return PT;case 35664:return LT;case 35665:return DT;case 35666:return NT;case 35674:return IT;case 35675:return UT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return kT;case 35668:case 35672:return zT;case 35669:case 35673:return BT;case 5125:return HT;case 36294:return VT;case 36295:return GT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return qT}}class KT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RT(n.type)}}class JT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$T(n.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function zg(t,e){t.seq.push(e),t.map[e.id]=e}function QT(t,e,n){const i=t.name,r=i.length;for(jd.lastIndex=0;;){const s=jd.exec(i),o=jd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zg(n,c===void 0?new KT(a,t,e):new JT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ZT(a),zg(n,f)),n=f}}}class Ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);QT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eA=37297;let tA=0;function nA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Hg=new at;function iA(t){Tt._getMatrix(Hg,Tt.workingColorSpace,t);const e=`mat3( ${Hg.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(t)){case $c:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+nA(t.getShaderSource(e),a)}else return s}function rA(t,e){const n=iA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sA(t,e){let n;switch(e){case $M:n="Linear";break;case KM:n="Reinhard";break;case JM:n="Cineon";break;case gx:n="ACESFilmic";break;case QM:n="AgX";break;case eS:n="Neutral";break;case ZM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oc=new k;function oA(){Tt.getLuminanceCoefficients(oc);const t=oc.x.toFixed(4),e=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function lA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ta(t){return t!==""}function Gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(uA,fA)}const dA=new Map;function fA(t,e){let n=ct[e];if(n===void 0){const i=dA.get(e);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace(hA,pA)}function pA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function mA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function gA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fo:case Oo:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rp:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case qM:e="ENVMAP_BLENDING_ADD";break}return e}function xA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mA(n),c=gA(n),d=vA(n),f=_A(n),h=xA(n),p=aA(n),y=lA(s),w=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ta).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ta).join(`
`),u.length>0&&(u+=`
`)):(g=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),u=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gr?"#define TONE_MAPPING":"",n.toneMapping!==Gr?ct.tonemapping_pars_fragment:"",n.toneMapping!==Gr?sA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,rA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Nh(o),o=Gg(o,n),o=Wg(o,n),a=Nh(a),a=Gg(a,n),a=Wg(a,n),o=Xg(o),a=Xg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===J0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===J0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+g+o,M=m+u+a,C=Bg(r,r.VERTEX_SHADER,_),R=Bg(r,r.FRAGMENT_SHADER,M);r.attachShader(w,C),r.attachShader(w,R),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(I){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(w)||"",$=r.getShaderInfoLog(C)||"",re=r.getShaderInfoLog(R)||"",ae=H.trim(),V=$.trim(),j=re.trim();let U=!0,J=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,C,R);else{const te=Vg(r,C,"vertex"),Se=Vg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ae+`
`+te+`
`+Se)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(V===""||j==="")&&(J=!1);J&&(I.diagnostics={runnable:U,programLog:ae,vertexShader:{log:V,prefix:g},fragmentShader:{log:j,prefix:u}})}r.deleteShader(C),r.deleteShader(R),N=new Ec(r,w),E=cA(r,w)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(w,eA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=C,this.fragmentShader=R,this}let MA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wA(e),n.set(e,i)),i}}class wA{constructor(e){this.id=MA++,this.code=e,this.usedTimes=0}}function EA(t,e,n,i,r,s,o){const a=new zp,l=new SA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,H,$){const re=H.fog,ae=$.geometry,V=E.isMeshStandardMaterial?H.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),U=j&&j.mapping===gu?j.image.height:null,J=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Se=te!==void 0?te.length:0;let Fe=0;ae.morphAttributes.position!==void 0&&(Fe=1),ae.morphAttributes.normal!==void 0&&(Fe=2),ae.morphAttributes.color!==void 0&&(Fe=3);let st,Pe,de,B;if(J){const gt=zi[J];st=gt.vertexShader,Pe=gt.fragmentShader}else st=E.vertexShader,Pe=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);const fe=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,Ce=$.isBatchedMesh===!0,ut=!!E.map,rn=!!E.matcap,F=!!j,St=!!E.aoMap,nt=!!E.lightMap,He=!!E.bumpMap,O=!!E.normalMap,Re=!!E.displacementMap,oe=!!E.emissiveMap,le=!!E.metalnessMap,qe=!!E.roughnessMap,Qe=E.anisotropy>0,D=E.clearcoat>0,T=E.dispersion>0,q=E.iridescence>0,ue=E.sheen>0,pe=E.transmission>0,ce=Qe&&!!E.anisotropyMap,Ie=D&&!!E.clearcoatMap,ge=D&&!!E.clearcoatNormalMap,Ve=D&&!!E.clearcoatRoughnessMap,Ge=q&&!!E.iridescenceMap,ve=q&&!!E.iridescenceThicknessMap,we=ue&&!!E.sheenColorMap,et=ue&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Le=!!E.specularColorMap,rt=!!E.specularIntensityMap,W=pe&&!!E.transmissionMap,Ee=pe&&!!E.thicknessMap,Ae=!!E.gradientMap,ke=!!E.alphaMap,_e=E.alphaTest>0,he=!!E.alphaHash,We=!!E.extensions;let it=Gr;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=t.toneMapping);const Ct={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:Pe,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ko,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:rn,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:U,aoMap:St,lightMap:nt,bumpMap:He,normalMap:O,displacementMap:h&&Re,emissiveMap:oe,normalMapObjectSpace:O&&E.normalMapType===rS,normalMapTangentSpace:O&&E.normalMapType===Fp,metalnessMap:le,roughnessMap:qe,anisotropy:Qe,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ie,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:q,iridescenceMap:Ge,iridescenceThicknessMap:ve,sheen:ue,sheenColorMap:we,sheenRoughnessMap:et,specularMap:Xe,specularColorMap:Le,specularIntensityMap:rt,transmission:pe,transmissionMap:W,thicknessMap:Ee,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===wo&&E.alphaToCoverage===!1,alphaMap:ke,alphaTest:_e,alphaHash:he,combine:E.combine,mapUv:ut&&w(E.map.channel),aoMapUv:St&&w(E.aoMap.channel),lightMapUv:nt&&w(E.lightMap.channel),bumpMapUv:He&&w(E.bumpMap.channel),normalMapUv:O&&w(E.normalMap.channel),displacementMapUv:Re&&w(E.displacementMap.channel),emissiveMapUv:oe&&w(E.emissiveMap.channel),metalnessMapUv:le&&w(E.metalnessMap.channel),roughnessMapUv:qe&&w(E.roughnessMap.channel),anisotropyMapUv:ce&&w(E.anisotropyMap.channel),clearcoatMapUv:Ie&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:ge&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:et&&w(E.sheenRoughnessMap.channel),specularMapUv:Xe&&w(E.specularMap.channel),specularColorMapUv:Le&&w(E.specularColorMap.channel),specularIntensityMapUv:rt&&w(E.specularIntensityMap.channel),transmissionMapUv:W&&w(E.transmissionMap.channel),thicknessMapUv:Ee&&w(E.thicknessMap.channel),alphaMapUv:ke&&w(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(O||Qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ae.attributes.uv&&(ut||ke),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ne,skinning:$.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===Nt,decodeVideoTextureEmissive:oe&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===Nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gi,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(m(S,E),_(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function m(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=y[E.type];let I;if(S){const H=zi[S];I=NS.clone(H.uniforms)}else I=E.uniforms;return I}function C(E,S){let I;for(let H=0,$=d.length;H<$;H++){const re=d[H];if(re.cacheKey===S){I=re,++I.usedTimes;break}}return I===void 0&&(I=new yA(t,S,E,s),d.push(I)),I}function R(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function L(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:d,dispose:N}}function TA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function AA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,y,w,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:w,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=w,u.group=g),e++,u}function a(f,h,p,y,w,g){const u=o(f,h,p,y,w,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,y,w,g){const u=o(f,h,p,y,w,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||AA),i.length>1&&i.sort(h||Yg),r.length>1&&r.sort(h||Yg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function bA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qg,t.set(i,[o])):r>=s.length?(o=new qg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new pt};break;case"SpotLight":n={position:new k,direction:new k,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PA=0;function LA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DA(t){const e=new CA,n=RA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new jt,o=new jt;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,y=0,w=0,g=0,u=0,m=0,_=0,M=0,C=0,R=0,L=0;c.sort(LA);for(let E=0,S=c.length;E<S;E++){const I=c[E],H=I.color,$=I.intensity,re=I.distance,ae=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*$,f+=H.g*$,h+=H.b*$;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],$);L++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=I.shadow.matrix,m++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(H).multiplyScalar($),V.distance=re,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[w]=V;const j=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,j.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[w]=j.matrix,I.castShadow){const U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=ae,M++}w++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(H).multiplyScalar($),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const j=I.shadow,U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=ae,i.pointShadowMatrix[y]=I.shadow.matrix,_++}i.point[y]=V,y++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar($),V.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[u]=V,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==y||N.spotLength!==w||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==m||N.numPointShadows!==_||N.numSpotShadows!==M||N.numSpotMaps!==C||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=w,i.rectArea.length=g,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,N.directionalLength=p,N.pointLength=y,N.spotLength=w,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=m,N.numPointShadows=_,N.numSpotShadows=M,N.numSpotMaps=C,N.numLightProbes=L,i.version=PA++)}function l(c,d){let f=0,h=0,p=0,y=0,w=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const M=i.hemi[w];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),w++}}}return{setup:a,setupView:l,state:i}}function $g(t){const e=new DA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $g(t),e.set(r,[a])):s>=o.length?(a=new $g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`;function FA(t,e,n){let i=new Hp;const r=new Ye,s=new Ye,o=new It,a=new s2({depthPacking:iS}),l=new o2,c={},d=n.maxTextureSize,f={[jr]:ti,[ti]:jr,[gi]:gi},h=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:IA,fragmentShader:UA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new cn;y.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ee(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=px;let u=this.type;this.render=function(R,L,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Vr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=u!==tr&&this.type===tr,re=u===tr&&this.type!==tr;for(let ae=0,V=R.length;ae<V;ae++){const j=R[ae],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const J=U.getFrameExtents();if(r.multiply(J),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/J.x),r.x=s.x*J.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/J.y),r.y=s.y*J.y,U.mapSize.y=s.y)),U.map===null||$===!0||re===!0){const Se=this.type!==tr?{minFilter:Ii,magFilter:Ii}:{};U.map!==null&&U.map.dispose(),U.map=new Rs(r.x,r.y,Se),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const te=U.getViewportCount();for(let Se=0;Se<te;Se++){const Fe=U.getViewport(Se);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),H.viewport(o),U.updateMatrices(j,Se),i=U.getFrustum(),M(L,N,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===tr&&m(U,N),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,S,I)};function m(R,L){const N=e.update(w);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rs(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(L,null,N,h,w,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(L,null,N,p,w,null)}function _(R,L,N,E){let S=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=S.uuid,$=L.uuid;let re=c[H];re===void 0&&(re={},c[H]=re);let ae=re[$];ae===void 0&&(ae=S.clone(),re[$]=ae,L.addEventListener("dispose",C)),S=ae}if(S.visible=L.visible,S.wireframe=L.wireframe,E===tr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=N}return S}function M(R,L,N,E,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===tr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const $=e.update(R),re=R.material;if(Array.isArray(re)){const ae=$.groups;for(let V=0,j=ae.length;V<j;V++){const U=ae[V],J=re[U.materialIndex];if(J&&J.visible){const te=_(R,J,E,S);R.onBeforeShadow(t,R,L,N,$,te,U),t.renderBufferDirect(N,null,$,te,R,U),R.onAfterShadow(t,R,L,N,$,te,U)}}}else if(re.visible){const ae=_(R,re,E,S);R.onBeforeShadow(t,R,L,N,$,ae,null),t.renderBufferDirect(N,null,$,ae,R,null),R.onAfterShadow(t,R,L,N,$,ae,null)}}const H=R.children;for(let $=0,re=H.length;$<re;$++)M(H[$],L,N,E,S)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const E=c[N],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const OA={[jf]:Yf,[qf]:Jf,[$f]:Zf,[Uo]:Kf,[Yf]:jf,[Jf]:qf,[Zf]:$f,[Kf]:Uo};function kA(t,e){function n(){let W=!1;const Ee=new It;let Ae=null;const ke=new It(0,0,0,0);return{setMask:function(_e){Ae!==_e&&!W&&(t.colorMask(_e,_e,_e,_e),Ae=_e)},setLocked:function(_e){W=_e},setClear:function(_e,he,We,it,Ct){Ct===!0&&(_e*=it,he*=it,We*=it),Ee.set(_e,he,We,it),ke.equals(Ee)===!1&&(t.clearColor(_e,he,We,it),ke.copy(Ee))},reset:function(){W=!1,Ae=null,ke.set(-1,0,0,0)}}}function i(){let W=!1,Ee=!1,Ae=null,ke=null,_e=null;return{setReversed:function(he){if(Ee!==he){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ee=he;const it=_e;_e=null,this.setClear(it)}},getReversed:function(){return Ee},setTest:function(he){he?fe(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(he){Ae!==he&&!W&&(t.depthMask(he),Ae=he)},setFunc:function(he){if(Ee&&(he=OA[he]),ke!==he){switch(he){case jf:t.depthFunc(t.NEVER);break;case Yf:t.depthFunc(t.ALWAYS);break;case qf:t.depthFunc(t.LESS);break;case Uo:t.depthFunc(t.LEQUAL);break;case $f:t.depthFunc(t.EQUAL);break;case Kf:t.depthFunc(t.GEQUAL);break;case Jf:t.depthFunc(t.GREATER);break;case Zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=he}},setLocked:function(he){W=he},setClear:function(he){_e!==he&&(Ee&&(he=1-he),t.clearDepth(he),_e=he)},reset:function(){W=!1,Ae=null,ke=null,_e=null,Ee=!1}}}function r(){let W=!1,Ee=null,Ae=null,ke=null,_e=null,he=null,We=null,it=null,Ct=null;return{setTest:function(gt){W||(gt?fe(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!W&&(t.stencilMask(gt),Ee=gt)},setFunc:function(gt,en,Fn){(Ae!==gt||ke!==en||_e!==Fn)&&(t.stencilFunc(gt,en,Fn),Ae=gt,ke=en,_e=Fn)},setOp:function(gt,en,Fn){(he!==gt||We!==en||it!==Fn)&&(t.stencilOp(gt,en,Fn),he=gt,We=en,it=Fn)},setLocked:function(gt){W=gt},setClear:function(gt){Ct!==gt&&(t.clearStencil(gt),Ct=gt)},reset:function(){W=!1,Ee=null,Ae=null,ke=null,_e=null,he=null,We=null,it=null,Ct=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],y=null,w=!1,g=null,u=null,m=null,_=null,M=null,C=null,R=null,L=new pt(0,0,0),N=0,E=!1,S=null,I=null,H=null,$=null,re=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=j>=2);let J=null,te={};const Se=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),st=new It().fromArray(Se),Pe=new It().fromArray(Fe);function de(W,Ee,Ae,ke){const _e=new Uint8Array(4),he=t.createTexture();t.bindTexture(W,he),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<Ae;We++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Ee+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return he}const B={};B[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),o.setFunc(Uo),He(!1),O(X0),fe(t.CULL_FACE),St(Vr);function fe(W){d[W]!==!0&&(t.enable(W),d[W]=!0)}function Ne(W){d[W]!==!1&&(t.disable(W),d[W]=!1)}function Ze(W,Ee){return f[W]!==Ee?(t.bindFramebuffer(W,Ee),f[W]=Ee,W===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ee),W===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ce(W,Ee){let Ae=p,ke=!1;if(W){Ae=h.get(Ee),Ae===void 0&&(Ae=[],h.set(Ee,Ae));const _e=W.textures;if(Ae.length!==_e.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let he=0,We=_e.length;he<We;he++)Ae[he]=t.COLOR_ATTACHMENT0+he;Ae.length=_e.length,ke=!0}}else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Ae)}function ut(W){return y!==W?(t.useProgram(W),y=W,!0):!1}const rn={[hs]:t.FUNC_ADD,[PM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};rn[DM]=t.MIN,rn[NM]=t.MAX;const F={[IM]:t.ZERO,[UM]:t.ONE,[FM]:t.SRC_COLOR,[Wf]:t.SRC_ALPHA,[VM]:t.SRC_ALPHA_SATURATE,[BM]:t.DST_COLOR,[kM]:t.DST_ALPHA,[OM]:t.ONE_MINUS_SRC_COLOR,[Xf]:t.ONE_MINUS_SRC_ALPHA,[HM]:t.ONE_MINUS_DST_COLOR,[zM]:t.ONE_MINUS_DST_ALPHA,[GM]:t.CONSTANT_COLOR,[WM]:t.ONE_MINUS_CONSTANT_COLOR,[XM]:t.CONSTANT_ALPHA,[jM]:t.ONE_MINUS_CONSTANT_ALPHA};function St(W,Ee,Ae,ke,_e,he,We,it,Ct,gt){if(W===Vr){w===!0&&(Ne(t.BLEND),w=!1);return}if(w===!1&&(fe(t.BLEND),w=!0),W!==RM){if(W!==g||gt!==E){if((u!==hs||M!==hs)&&(t.blendEquation(t.FUNC_ADD),u=hs,M=hs),gt)switch(W){case wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case j0:t.blendFunc(t.ONE,t.ONE);break;case Y0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case q0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case j0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Y0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}m=null,_=null,C=null,R=null,L.set(0,0,0),N=0,g=W,E=gt}return}_e=_e||Ee,he=he||Ae,We=We||ke,(Ee!==u||_e!==M)&&(t.blendEquationSeparate(rn[Ee],rn[_e]),u=Ee,M=_e),(Ae!==m||ke!==_||he!==C||We!==R)&&(t.blendFuncSeparate(F[Ae],F[ke],F[he],F[We]),m=Ae,_=ke,C=he,R=We),(it.equals(L)===!1||Ct!==N)&&(t.blendColor(it.r,it.g,it.b,Ct),L.copy(it),N=Ct),g=W,E=!1}function nt(W,Ee){W.side===gi?Ne(t.CULL_FACE):fe(t.CULL_FACE);let Ae=W.side===ti;Ee&&(Ae=!Ae),He(Ae),W.blending===wo&&W.transparent===!1?St(Vr):St(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ke=W.stencilWrite;a.setTest(ke),ke&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),oe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(W){S!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),S=W)}function O(W){W!==bM?(fe(t.CULL_FACE),W!==I&&(W===X0?t.cullFace(t.BACK):W===CM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),I=W}function Re(W){W!==H&&(V&&t.lineWidth(W),H=W)}function oe(W,Ee,Ae){W?(fe(t.POLYGON_OFFSET_FILL),($!==Ee||re!==Ae)&&(t.polygonOffset(Ee,Ae),$=Ee,re=Ae)):Ne(t.POLYGON_OFFSET_FILL)}function le(W){W?fe(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function qe(W){W===void 0&&(W=t.TEXTURE0+ae-1),J!==W&&(t.activeTexture(W),J=W)}function Qe(W,Ee,Ae){Ae===void 0&&(J===null?Ae=t.TEXTURE0+ae-1:Ae=J);let ke=te[Ae];ke===void 0&&(ke={type:void 0,texture:void 0},te[Ae]=ke),(ke.type!==W||ke.texture!==Ee)&&(J!==Ae&&(t.activeTexture(Ae),J=Ae),t.bindTexture(W,Ee||B[W]),ke.type=W,ke.texture=Ee)}function D(){const W=te[J];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function q(){try{t.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{t.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{t.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{t.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{t.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{t.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{t.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{t.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(W){st.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),st.copy(W))}function et(W){Pe.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),Pe.copy(W))}function Xe(W,Ee){let Ae=c.get(Ee);Ae===void 0&&(Ae=new WeakMap,c.set(Ee,Ae));let ke=Ae.get(W);ke===void 0&&(ke=t.getUniformBlockIndex(Ee,W.name),Ae.set(W,ke))}function Le(W,Ee){const ke=c.get(Ee).get(W);l.get(Ee)!==ke&&(t.uniformBlockBinding(Ee,ke,W.__bindingPointIndex),l.set(Ee,ke))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,te={},f={},h=new WeakMap,p=[],y=null,w=!1,g=null,u=null,m=null,_=null,M=null,C=null,R=null,L=new pt(0,0,0),N=0,E=!1,S=null,I=null,H=null,$=null,re=null,st.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Ne,bindFramebuffer:Ze,drawBuffers:Ce,useProgram:ut,setBlending:St,setMaterial:nt,setFlipSided:He,setCullFace:O,setLineWidth:Re,setPolygonOffset:oe,setScissorTest:le,activeTexture:qe,bindTexture:Qe,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Ge,texImage3D:ve,updateUBOMapping:Xe,uniformBlockBinding:Le,texStorage2D:ge,texStorage3D:Ve,texSubImage2D:ue,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ie,scissor:we,viewport:et,reset:rt}}function zA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return p?new OffscreenCanvas(D,T):Jc("canvas")}function w(D,T,q){let ue=1;const pe=Qe(D);if((pe.width>q||pe.height>q)&&(ue=q/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(ue*pe.width),Ie=Math.floor(ue*pe.height);f===void 0&&(f=y(ce,Ie));const ge=T?y(ce,Ie):f;return ge.width=ce,ge.height=Ie,ge.getContext("2d").drawImage(D,0,0,ce,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Ie+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function g(D){return D.generateMipmaps}function u(D){t.generateMipmap(D)}function m(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(D,T,q,ue,pe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===t.RED&&(q===t.FLOAT&&(ce=t.R32F),q===t.HALF_FLOAT&&(ce=t.R16F),q===t.UNSIGNED_BYTE&&(ce=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.R8UI),q===t.UNSIGNED_SHORT&&(ce=t.R16UI),q===t.UNSIGNED_INT&&(ce=t.R32UI),q===t.BYTE&&(ce=t.R8I),q===t.SHORT&&(ce=t.R16I),q===t.INT&&(ce=t.R32I)),T===t.RG&&(q===t.FLOAT&&(ce=t.RG32F),q===t.HALF_FLOAT&&(ce=t.RG16F),q===t.UNSIGNED_BYTE&&(ce=t.RG8)),T===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.RG8UI),q===t.UNSIGNED_SHORT&&(ce=t.RG16UI),q===t.UNSIGNED_INT&&(ce=t.RG32UI),q===t.BYTE&&(ce=t.RG8I),q===t.SHORT&&(ce=t.RG16I),q===t.INT&&(ce=t.RG32I)),T===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),q===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),q===t.UNSIGNED_INT&&(ce=t.RGB32UI),q===t.BYTE&&(ce=t.RGB8I),q===t.SHORT&&(ce=t.RGB16I),q===t.INT&&(ce=t.RGB32I)),T===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),q===t.UNSIGNED_INT&&(ce=t.RGBA32UI),q===t.BYTE&&(ce=t.RGBA8I),q===t.SHORT&&(ce=t.RGBA16I),q===t.INT&&(ce=t.RGBA32I)),T===t.RGB&&(q===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&(ce=t.R11F_G11F_B10F)),T===t.RGBA){const Ie=pe?$c:Tt.getTransfer(ue);q===t.FLOAT&&(ce=t.RGBA32F),q===t.HALF_FLOAT&&(ce=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ce=Ie===Nt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(D,T){let q;return D?T===null||T===Cs||T===tl?q=t.DEPTH24_STENCIL8:T===or?q=t.DEPTH32F_STENCIL8:T===el&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cs||T===tl?q=t.DEPTH_COMPONENT24:T===or?q=t.DEPTH_COMPONENT32F:T===el&&(q=t.DEPTH_COMPONENT16),q}function C(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ii&&D.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){const T=D.target;T.removeEventListener("dispose",R),N(T),T.isVideoTexture&&d.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),S(T)}function N(D){const T=i.get(D);if(T.__webglInit===void 0)return;const q=D.source,ue=h.get(q);if(ue){const pe=ue[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&E(D),Object.keys(ue).length===0&&h.delete(q)}i.remove(D)}function E(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const q=D.source,ue=h.get(q);delete ue[T.__cacheKey],o.memory.textures--}function S(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let pe=0;pe<T.__webglFramebuffer[ue].length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[ue][pe]);else t.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)t.deleteFramebuffer(T.__webglFramebuffer[ue]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=D.textures;for(let ue=0,pe=q.length;ue<pe;ue++){const ce=i.get(q[ue]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(q[ue])}i.remove(D)}let I=0;function H(){I=0}function $(){const D=I;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),I+=1,D}function re(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ae(D,T){const q=i.get(D);if(D.isVideoTexture&&le(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(q,D,T);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function V(D,T){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){B(q,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function j(D,T){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){B(q,D,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function U(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){fe(q,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const J={[Eo]:t.REPEAT,[_s]:t.CLAMP_TO_EDGE,[th]:t.MIRRORED_REPEAT},te={[Ii]:t.NEAREST,[tS]:t.NEAREST_MIPMAP_NEAREST,[Ol]:t.NEAREST_MIPMAP_LINEAR,[Hi]:t.LINEAR,[ud]:t.LINEAR_MIPMAP_NEAREST,[xs]:t.LINEAR_MIPMAP_LINEAR},Se={[sS]:t.NEVER,[dS]:t.ALWAYS,[oS]:t.LESS,[Ax]:t.LEQUAL,[aS]:t.EQUAL,[uS]:t.GEQUAL,[lS]:t.GREATER,[cS]:t.NOTEQUAL};function Fe(D,T){if(T.type===or&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===ud||T.magFilter===Ol||T.magFilter===xs||T.minFilter===Hi||T.minFilter===ud||T.minFilter===Ol||T.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,J[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,J[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,J[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,te[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ii||T.minFilter!==Ol&&T.minFilter!==xs||T.type===or&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function st(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",R));const ue=T.source;let pe=h.get(ue);pe===void 0&&(pe={},h.set(ue,pe));const ce=re(T);if(ce!==D.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[ce].usedTimes++;const Ie=pe[D.__cacheKey];Ie!==void 0&&(pe[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(T)),D.__cacheKey=ce,D.__webglTexture=pe[ce].texture}return q}function Pe(D,T,q){return Math.floor(Math.floor(D/q)/T)}function de(D,T,q,ue){const ce=D.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,q,ue,T.data);else{ce.sort((ve,we)=>ve.start-we.start);let Ie=0;for(let ve=1;ve<ce.length;ve++){const we=ce[Ie],et=ce[ve],Xe=we.start+we.count,Le=Pe(et.start,T.width,4),rt=Pe(we.start,T.width,4);et.start<=Xe+1&&Le===rt&&Pe(et.start+et.count-1,T.width,4)===Le?we.count=Math.max(we.count,et.start+et.count-we.start):(++Ie,ce[Ie]=et)}ce.length=Ie+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),Ve=t.getParameter(t.UNPACK_SKIP_PIXELS),Ge=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let ve=0,we=ce.length;ve<we;ve++){const et=ce[ve],Xe=Math.floor(et.start/4),Le=Math.ceil(et.count/4),rt=Xe%T.width,W=Math.floor(Xe/T.width),Ee=Le,Ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(t.UNPACK_SKIP_ROWS,W),n.texSubImage2D(t.TEXTURE_2D,0,rt,W,Ee,Ae,q,ue,T.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ge)}}function B(D,T,q){let ue=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=t.TEXTURE_3D);const pe=st(D,T),ce=T.source;n.bindTexture(ue,D.__webglTexture,t.TEXTURE0+q);const Ie=i.get(ce);if(ce.version!==Ie.__version||pe===!0){n.activeTexture(t.TEXTURE0+q);const ge=Tt.getPrimaries(Tt.workingColorSpace),Ve=T.colorSpace===Lr?null:Tt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Lr||ge===Ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ve=w(T.image,!1,r.maxTextureSize);ve=qe(T,ve);const we=s.convert(T.format,T.colorSpace),et=s.convert(T.type);let Xe=_(T.internalFormat,we,et,T.colorSpace,T.isVideoTexture);Fe(ue,T);let Le;const rt=T.mipmaps,W=T.isVideoTexture!==!0,Ee=Ie.__version===void 0||pe===!0,Ae=ce.dataReady,ke=C(T,ve);if(T.isDepthTexture)Xe=M(T.format===il,T.type),Ee&&(W?n.texStorage2D(t.TEXTURE_2D,1,Xe,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,Xe,ve.width,ve.height,0,we,et,null));else if(T.isDataTexture)if(rt.length>0){W&&Ee&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,rt[0].width,rt[0].height);for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,et,Le.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,we,et,Le.data);T.generateMipmaps=!1}else W?(Ee&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,ve.width,ve.height),Ae&&de(T,ve,we,et)):n.texImage2D(t.TEXTURE_2D,0,Xe,ve.width,ve.height,0,we,et,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Xe,rt[0].width,rt[0].height,ve.depth);for(let _e=0,he=rt.length;_e<he;_e++)if(Le=rt[_e],T.format!==Li)if(we!==null)if(W){if(Ae)if(T.layerUpdates.size>0){const We=Tg(Le.width,Le.height,T.format,T.type);for(const it of T.layerUpdates){const Ct=Le.data.subarray(it*We/Le.data.BYTES_PER_ELEMENT,(it+1)*We/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,it,Le.width,Le.height,1,we,Ct)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ve.depth,we,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Le.width,Le.height,ve.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ve.depth,we,et,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Le.width,Le.height,ve.depth,0,we,et,Le.data)}else{W&&Ee&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,rt[0].width,rt[0].height);for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],T.format!==Li?we!==null?W?Ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,et,Le.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,we,et,Le.data)}else if(T.isDataArrayTexture)if(W){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Xe,ve.width,ve.height,ve.depth),Ae)if(T.layerUpdates.size>0){const _e=Tg(ve.width,ve.height,T.format,T.type);for(const he of T.layerUpdates){const We=ve.data.subarray(he*_e/ve.data.BYTES_PER_ELEMENT,(he+1)*_e/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,we,et,We)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,we,et,ve.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,ve.width,ve.height,ve.depth,0,we,et,ve.data);else if(T.isData3DTexture)W?(Ee&&n.texStorage3D(t.TEXTURE_3D,ke,Xe,ve.width,ve.height,ve.depth),Ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,we,et,ve.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,ve.width,ve.height,ve.depth,0,we,et,ve.data);else if(T.isFramebufferTexture){if(Ee)if(W)n.texStorage2D(t.TEXTURE_2D,ke,Xe,ve.width,ve.height);else{let _e=ve.width,he=ve.height;for(let We=0;We<ke;We++)n.texImage2D(t.TEXTURE_2D,We,Xe,_e,he,0,we,et,null),_e>>=1,he>>=1}}else if(rt.length>0){if(W&&Ee){const _e=Qe(rt[0]);n.texStorage2D(t.TEXTURE_2D,ke,Xe,_e.width,_e.height)}for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,we,et,Le):n.texImage2D(t.TEXTURE_2D,_e,Xe,we,et,Le);T.generateMipmaps=!1}else if(W){if(Ee){const _e=Qe(ve);n.texStorage2D(t.TEXTURE_2D,ke,Xe,_e.width,_e.height)}Ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,et,ve)}else n.texImage2D(t.TEXTURE_2D,0,Xe,we,et,ve);g(T)&&u(ue),Ie.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,q){if(T.image.length!==6)return;const ue=st(D,T),pe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+q);const ce=i.get(pe);if(pe.version!==ce.__version||ue===!0){n.activeTexture(t.TEXTURE0+q);const Ie=Tt.getPrimaries(Tt.workingColorSpace),ge=T.colorSpace===Lr?null:Tt.getPrimaries(T.colorSpace),Ve=T.colorSpace===Lr||Ie===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!Ge&&!ve?we[he]=w(T.image[he],!0,r.maxCubemapSize):we[he]=ve?T.image[he].image:T.image[he],we[he]=qe(T,we[he]);const et=we[0],Xe=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),rt=_(T.internalFormat,Xe,Le,T.colorSpace),W=T.isVideoTexture!==!0,Ee=ce.__version===void 0||ue===!0,Ae=pe.dataReady;let ke=C(T,et);Fe(t.TEXTURE_CUBE_MAP,T);let _e;if(Ge){W&&Ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,rt,et.width,et.height);for(let he=0;he<6;he++){_e=we[he].mipmaps;for(let We=0;We<_e.length;We++){const it=_e[We];T.format!==Li?Xe!==null?W?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,it.width,it.height,Xe,it.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,rt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,it.width,it.height,Xe,Le,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,rt,it.width,it.height,0,Xe,Le,it.data)}}}else{if(_e=T.mipmaps,W&&Ee){_e.length>0&&ke++;const he=Qe(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,rt,he.width,he.height)}for(let he=0;he<6;he++)if(ve){W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,Xe,Le,we[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,we[he].width,we[he].height,0,Xe,Le,we[he].data);for(let We=0;We<_e.length;We++){const Ct=_e[We].image[he].image;W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Ct.width,Ct.height,Xe,Le,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,rt,Ct.width,Ct.height,0,Xe,Le,Ct.data)}}else{W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,Le,we[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Xe,Le,we[he]);for(let We=0;We<_e.length;We++){const it=_e[We];W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Xe,Le,it.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,rt,Xe,Le,it.image[he])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),ce.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ne(D,T,q,ue,pe,ce){const Ie=s.convert(q.format,q.colorSpace),ge=s.convert(q.type),Ve=_(q.internalFormat,Ie,ge,q.colorSpace),Ge=i.get(T),ve=i.get(q);if(ve.__renderTarget=T,!Ge.__hasExternalTextures){const we=Math.max(1,T.width>>ce),et=Math.max(1,T.height>>ce);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,ce,Ve,we,et,T.depth,0,Ie,ge,null):n.texImage2D(pe,ce,Ve,we,et,0,Ie,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),oe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,pe,ve.__webglTexture,0,Re(T)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,pe,ve.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(D,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const ue=T.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,ce=M(T.stencilBuffer,pe),Ie=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=Re(T);oe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,ce,T.width,T.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,ce,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ce,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,D)}else{const ue=T.textures;for(let pe=0;pe<ue.length;pe++){const ce=ue[pe],Ie=s.convert(ce.format,ce.colorSpace),ge=s.convert(ce.type),Ve=_(ce.internalFormat,Ie,ge,ce.colorSpace),Ge=Re(T);q&&oe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ve,T.width,T.height):oe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,Ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(T.depthTexture);ue.__renderTarget=T,(!ue.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const pe=ue.__webglTexture,ce=Re(T);if(T.depthTexture.format===nl)oe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0);else if(T.depthTexture.format===il)oe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ut(D){const T=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=ue}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ue=D.texture.mipmaps;ue&&ue.length>0?Ce(T.__webglFramebuffer[0],D):Ce(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=t.createRenderbuffer(),Ze(T.__webglDepthbuffer[ue],D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[ue];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ce)}}else{const ue=D.texture.mipmaps;if(ue&&ue.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Ze(T.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function rn(D,T,q){const ue=i.get(D);T!==void 0&&Ne(ue.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&ut(D)}function F(D){const T=D.texture,q=i.get(D),ue=i.get(T);D.addEventListener("dispose",L);const pe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=T.version,o.memory.textures++),ce){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)q.__webglFramebuffer[ge][Ve]=t.createFramebuffer()}else q.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)q.__webglFramebuffer[ge]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let ge=0,Ve=pe.length;ge<Ve;ge++){const Ge=i.get(pe[ge]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&oe(D)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const Ve=pe[ge];q.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);const Ge=s.convert(Ve.format,Ve.colorSpace),ve=s.convert(Ve.type),we=_(Ve.internalFormat,Ge,ve,Ve.colorSpace,D.isXRRenderTarget===!0),et=Re(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,we,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Ze(q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ne(q.__webglFramebuffer[ge][Ve],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve);else Ne(q.__webglFramebuffer[ge],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ge=0,Ve=pe.length;ge<Ve;ge++){const Ge=pe[ge],ve=i.get(Ge);let we=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(we,ve.__webglTexture),Fe(we,Ge),Ne(q.__webglFramebuffer,D,Ge,t.COLOR_ATTACHMENT0+ge,we,0),g(Ge)&&u(we)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ue.__webglTexture),Fe(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ne(q.__webglFramebuffer[Ve],D,T,t.COLOR_ATTACHMENT0,ge,Ve);else Ne(q.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,ge,0);g(T)&&u(ge),n.unbindTexture()}D.depthBuffer&&ut(D)}function St(D){const T=D.textures;for(let q=0,ue=T.length;q<ue;q++){const pe=T[q];if(g(pe)){const ce=m(D),Ie=i.get(pe).__webglTexture;n.bindTexture(ce,Ie),u(ce),n.unbindTexture()}}}const nt=[],He=[];function O(D){if(D.samples>0){if(oe(D)===!1){const T=D.textures,q=D.width,ue=D.height;let pe=t.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(D),ge=T.length>1;if(ge)for(let Ge=0;Ge<T.length;Ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ge=0;Ge<T.length;Ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);const ve=i.get(T[Ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,q,ue,0,0,q,ue,pe,t.NEAREST),l===!0&&(nt.length=0,He.length=0,nt.push(t.COLOR_ATTACHMENT0+Ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(ce),He.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ge=0;Ge<T.length;Ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);const ve=i.get(T[Ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Re(D){return Math.min(r.maxSamples,D.samples)}function oe(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(D){const T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function qe(D,T){const q=D.colorSpace,ue=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==ko&&q!==Lr&&(Tt.getTransfer(q)===Nt?(ue!==Li||pe!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=H,this.setTexture2D=ae,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=rn,this.setupRenderTarget=F,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=oe}function BA(t,e){function n(i,r=Lr){let s;const o=Tt.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===Lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_x)return t.BYTE;if(i===xx)return t.SHORT;if(i===el)return t.UNSIGNED_SHORT;if(i===Pp)return t.INT;if(i===Cs)return t.UNSIGNED_INT;if(i===or)return t.FLOAT;if(i===ul)return t.HALF_FLOAT;if(i===Sx)return t.ALPHA;if(i===wx)return t.RGB;if(i===Li)return t.RGBA;if(i===nl)return t.DEPTH_COMPONENT;if(i===il)return t.DEPTH_STENCIL;if(i===Ex)return t.RED;if(i===Np)return t.RED_INTEGER;if(i===Tx)return t.RG;if(i===Ip)return t.RG_INTEGER;if(i===Up)return t.RGBA_INTEGER;if(i===yc||i===Mc||i===Sc||i===wc)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oh||i===ah)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Mh||i===Sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ch)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Eh||i===Th)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wh)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ah||i===bh||i===Ch||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ah)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
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

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yr({vertexShader:HA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ee(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,y=null;const w=typeof XRWebGLBinding<"u",g=new GA,u={},m=n.getContextAttributes();let _=null,M=null;const C=[],R=[],L=new Ye;let N=null;const E=new oi;E.viewport=new It;const S=new oi;S.viewport=new It;const I=[E,S],H=new u2;let $=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let fe=C[B];return fe===void 0&&(fe=new Nd,C[B]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(B){let fe=C[B];return fe===void 0&&(fe=new Nd,C[B]=fe),fe.getGripSpace()},this.getHand=function(B){let fe=C[B];return fe===void 0&&(fe=new Nd,C[B]=fe),fe.getHandSpace()};function ae(B){const fe=R.indexOf(B.inputSource);if(fe===-1)return;const Ne=C[fe];Ne!==void 0&&(Ne.update(B.inputSource,B.frame,c||o),Ne.dispatchEvent({type:B.type,data:B.inputSource}))}function V(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let B=0;B<C.length;B++){const fe=R[B];fe!==null&&(R[B]=null,C[B].disconnect(fe))}$=null,re=null,g.reset();for(const B in u)delete u[B];e.setRenderTarget(_),p=null,h=null,f=null,r=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Ze=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=m.stencil?il:nl,Ze=m.stencil?tl:Cs);const ut={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ut),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Rs(h.textureWidth,h.textureHeight,{format:Li,type:ji,depthTexture:new Ux(h.textureWidth,h.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Rs(p.framebufferWidth,p.framebufferHeight,{format:Li,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(B){for(let fe=0;fe<B.removed.length;fe++){const Ne=B.removed[fe],Ze=R.indexOf(Ne);Ze>=0&&(R[Ze]=null,C[Ze].disconnect(Ne))}for(let fe=0;fe<B.added.length;fe++){const Ne=B.added[fe];let Ze=R.indexOf(Ne);if(Ze===-1){for(let ut=0;ut<C.length;ut++)if(ut>=R.length){R.push(Ne),Ze=ut;break}else if(R[ut]===null){R[ut]=Ne,Ze=ut;break}if(Ze===-1)break}const Ce=C[Ze];Ce&&Ce.connect(Ne)}}const U=new k,J=new k;function te(B,fe,Ne){U.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(Ne.matrixWorld);const Ze=U.distanceTo(J),Ce=fe.projectionMatrix.elements,ut=Ne.projectionMatrix.elements,rn=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),St=(Ce[9]+1)/Ce[5],nt=(Ce[9]-1)/Ce[5],He=(Ce[8]-1)/Ce[0],O=(ut[8]+1)/ut[0],Re=rn*He,oe=rn*O,le=Ze/(-He+O),qe=le*-He;if(fe.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(le),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ce[10]===-1)B.projectionMatrix.copy(fe.projectionMatrix),B.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Qe=rn+le,D=F+le,T=Re-qe,q=oe+(Ze-qe),ue=St*F/D*Qe,pe=nt*F/D*Qe;B.projectionMatrix.makePerspective(T,q,ue,pe,Qe,D),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Se(B,fe){fe===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(fe.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let fe=B.near,Ne=B.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Ne=g.depthFar)),H.near=S.near=E.near=fe,H.far=S.far=E.far=Ne,($!==H.near||re!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),$=H.near,re=H.far),H.layers.mask=B.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const Ze=B.parent,Ce=H.cameras;Se(H,Ze);for(let ut=0;ut<Ce.length;ut++)Se(Ce[ut],Ze);Ce.length===2?te(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),Fe(B,H,Ze)};function Fe(B,fe,Ne){Ne===null?B.matrix.copy(fe.matrixWorld):(B.matrix.copy(Ne.matrixWorld),B.matrix.invert(),B.matrix.multiply(fe.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(fe.projectionMatrix),B.projectionMatrixInverse.copy(fe.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ph*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(B){return u[B]};let st=null;function Pe(B,fe){if(d=fe.getViewerPose(c||o),y=fe,d!==null){const Ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ze=!1;Ne.length!==H.cameras.length&&(H.cameras.length=0,Ze=!0);for(let F=0;F<Ne.length;F++){const St=Ne[F];let nt=null;if(p!==null)nt=p.getViewport(St);else{const O=f.getViewSubImage(h,St);nt=O.viewport,F===0&&(e.setRenderTargetTextures(M,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(M))}let He=I[F];He===void 0&&(He=new oi,He.layers.enable(F),He.viewport=new It,I[F]=He),He.matrix.fromArray(St.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(St.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(nt.x,nt.y,nt.width,nt.height),F===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ze===!0&&H.cameras.push(He)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const F=f.getDepthInformation(Ne[0]);F&&F.isValid&&F.texture&&g.init(F,r.renderState)}if(Ce&&Ce.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let F=0;F<Ne.length;F++){const St=Ne[F].camera;if(St){let nt=u[St];nt||(nt=new Fx,u[St]=nt);const He=f.getCameraImage(St);nt.sourceTexture=He}}}}for(let Ne=0;Ne<C.length;Ne++){const Ze=R[Ne],Ce=C[Ne];Ze!==null&&Ce!==void 0&&Ce.update(Ze,fe,c||o)}st&&st(B,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),y=null}const de=new Vx;de.setAnimationLoop(Pe),this.setAnimationLoop=function(B){st=B},this.dispose=function(){}}}const as=new Fi,XA=new jt;function jA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Dx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),y(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),w(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===ti&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===ti&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(as)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ti&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function w(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(y(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function d(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),C=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const _=r[m.id],M=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,L=M.length;R<L;R++){const N=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=N.length;E<S;E++){const I=N[E];if(p(I,R,E,C)===!0){const H=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let re=0;for(let ae=0;ae<$.length;ae++){const V=$[ae],j=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,H+re,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,re),re+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,C){const R=m.value,L=_+"_"+M;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{const N=C[L];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[L]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function y(m){const _=m.uniforms;let M=0;const C=16;for(let L=0,N=_.length;L<N;L++){const E=Array.isArray(_[L])?_[L]:[_[L]];for(let S=0,I=E.length;S<I;S++){const H=E[S],$=Array.isArray(H.value)?H.value:[H.value];for(let re=0,ae=$.length;re<ae;re++){const V=$[re],j=w(V),U=M%C,J=U%j.boundary,te=U+J;M+=J,te!==0&&C-te<j.storage&&(M+=C-te),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=j.storage}}}const R=M%C;return R>0&&(M+=C-R),m.__size=M,m.__cache={},this}function w(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class qA{constructor(e={}){const{canvas:n=hS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const y=new Uint32Array(4),w=new Int32Array(4);let g=null,u=null;const m=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=$n;let R=0,L=0,N=null,E=-1,S=null;const I=new It,H=new It;let $=null;const re=new pt(0);let ae=0,V=n.width,j=n.height,U=1,J=null,te=null;const Se=new It(0,0,V,j),Fe=new It(0,0,V,j);let st=!1;const Pe=new Hp;let de=!1,B=!1;const fe=new jt,Ne=new k,Ze=new It,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function rn(){return N===null?U:1}let F=i;function St(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const Y="webgl2";if(F=St(Y,A),F===null)throw St(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let nt,He,O,Re,oe,le,qe,Qe,D,T,q,ue,pe,ce,Ie,ge,Ve,Ge,ve,we,et,Xe,Le,rt;function W(){nt=new rT(F),nt.init(),Xe=new BA(F,nt),He=new JE(F,nt,e,Xe),O=new kA(F,nt),He.reversedDepthBuffer&&h&&O.buffers.depth.setReversed(!0),Re=new aT(F),oe=new TA,le=new zA(F,nt,O,oe,He,Xe,Re),qe=new QE(M),Qe=new iT(M),D=new h2(F),Le=new $E(F,D),T=new sT(F,D,Re,Le),q=new cT(F,T,D,Re),ve=new lT(F,He,le),ge=new ZE(oe),ue=new EA(M,qe,Qe,nt,He,Le,ge),pe=new jA(M,oe),ce=new bA,Ie=new NA(nt),Ge=new qE(M,qe,Qe,O,q,p,l),Ve=new FA(M,q,He),rt=new YA(F,Re,He,O),we=new KE(F,nt,Re),et=new oT(F,nt,Re),Re.programs=ue.programs,M.capabilities=He,M.extensions=nt,M.properties=oe,M.renderLists=ce,M.shadowMap=Ve,M.state=O,M.info=Re}W();const Ee=new WA(M,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,Y,Q=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=Y,n.width=Math.floor(A*U),n.height=Math.floor(Y*U),Q===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(V*U,j*U).floor()},this.setDrawingBufferSize=function(A,Y,Q){V=A,j=Y,U=Q,n.width=Math.floor(A*Q),n.height=Math.floor(Y*Q),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,Y,Q,ne){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,Y,Q,ne),O.viewport(I.copy(Se).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,Y,Q,ne){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,Y,Q,ne),O.scissor(H.copy(Fe).multiplyScalar(U).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){O.setScissorTest(st=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,Q=!0){let ne=0;if(A){let X=!1;if(N!==null){const ye=N.texture.format;X=ye===Up||ye===Ip||ye===Np}if(X){const ye=N.texture.type,De=ye===ji||ye===Cs||ye===el||ye===tl||ye===Lp||ye===Dp,ze=Ge.getClearColor(),Oe=Ge.getClearAlpha(),je=ze.r,tt=ze.g,Ke=ze.b;De?(y[0]=je,y[1]=tt,y[2]=Ke,y[3]=Oe,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=je,w[1]=tt,w[2]=Ke,w[3]=Oe,F.clearBufferiv(F.COLOR,0,w))}else ne|=F.COLOR_BUFFER_BIT}Y&&(ne|=F.DEPTH_BUFFER_BIT),Q&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Ge.dispose(),ce.dispose(),Ie.dispose(),oe.dispose(),qe.dispose(),Qe.dispose(),q.dispose(),Le.dispose(),rt.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Fn),Ee.removeEventListener("sessionend",Xo),Mi.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Re.autoReset,Y=Ve.enabled,Q=Ve.autoUpdate,ne=Ve.needsUpdate,X=Ve.type;W(),Re.autoReset=A,Ve.enabled=Y,Ve.autoUpdate=Q,Ve.needsUpdate=ne,Ve.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const Y=A.target;Y.removeEventListener("dispose",he),We(Y)}function We(A){it(A),oe.remove(A)}function it(A){const Y=oe.get(A).programs;Y!==void 0&&(Y.forEach(function(Q){ue.releaseProgram(Q)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,Q,ne,X,ye){Y===null&&(Y=Ce);const De=X.isMesh&&X.matrixWorld.determinant()<0,ze=ml(A,Y,Q,ne,X);O.setMaterial(ne,De);let Oe=Q.index,je=1;if(ne.wireframe===!0){if(Oe=T.getWireframeAttribute(Q),Oe===void 0)return;je=2}const tt=Q.drawRange,Ke=Q.attributes.position;let lt=tt.start*je,At=(tt.start+tt.count)*je;ye!==null&&(lt=Math.max(lt,ye.start*je),At=Math.min(At,(ye.start+ye.count)*je)),Oe!==null?(lt=Math.max(lt,0),At=Math.min(At,Oe.count)):Ke!=null&&(lt=Math.max(lt,0),At=Math.min(At,Ke.count));const Vt=At-lt;if(Vt<0||Vt===1/0)return;Le.setup(X,ne,ze,Q,Oe);let wt,bt=we;if(Oe!==null&&(wt=D.get(Oe),bt=et,bt.setIndex(wt)),X.isMesh)ne.wireframe===!0?(O.setLineWidth(ne.wireframeLinewidth*rn()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(X.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),O.setLineWidth(Je*rn()),X.isLineSegments?bt.setMode(F.LINES):X.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else X.isPoints?bt.setMode(F.POINTS):X.isSprite&&bt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,Pt=X._multiDrawCounts,dt=X._multiDrawCount,bn=Oe?D.get(Oe).bytesPerElement:1,gr=oe.get(ne).currentProgram.getUniforms();for(let On=0;On<dt;On++)gr.setValue(F,"_gl_DrawID",On),bt.render(Je[On]/bn,Pt[On])}else if(X.isInstancedMesh)bt.renderInstances(lt,Vt,X.count);else if(Q.isInstancedBufferGeometry){const Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pt=Math.min(Q.instanceCount,Je);bt.renderInstances(lt,Vt,Pt)}else bt.render(lt,Vt)};function Ct(A,Y,Q){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Xn(A,Y,Q),A.side=jr,A.needsUpdate=!0,Xn(A,Y,Q),A.side=gi):Xn(A,Y,Q)}this.compile=function(A,Y,Q=null){Q===null&&(Q=A),u=Ie.get(Q),u.init(Y),_.push(u),Q.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const ne=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const ze=ye[De];Ct(ze,Q,X),ne.add(ze)}else Ct(ye,Q,X),ne.add(ye)}),u=_.pop(),ne},this.compileAsync=function(A,Y,Q=null){const ne=this.compile(A,Y,Q);return new Promise(X=>{function ye(){if(ne.forEach(function(De){oe.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){X(A);return}setTimeout(ye,10)}nt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let gt=null;function en(A){gt&&gt(A)}function Fn(){Mi.stop()}function Xo(){Mi.start()}const Mi=new Vx;Mi.setAnimationLoop(en),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){gt=A,Ee.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},Ee.addEventListener("sessionstart",Fn),Ee.addEventListener("sessionend",Xo),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,Y,N),u=Ie.get(A,_.length),u.init(Y),_.push(u),fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pe.setFromProjectionMatrix(fe,Vi,Y.reversedDepth),B=this.localClippingEnabled,de=ge.init(this.clippingPlanes,B),g=ce.get(A,m.length),g.init(),m.push(g),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Ns(ye,Y,-1/0,M.sortObjects)}Ns(A,Y,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(J,te),ut=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ut&&Ge.addToRenderList(g,A),this.info.render.frame++,de===!0&&ge.beginShadows();const Q=u.state.shadowsArray;Ve.render(Q,A,Y),de===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=g.opaque,X=g.transmissive;if(u.setupLights(),Y.isArrayCamera){const ye=Y.cameras;if(X.length>0)for(let De=0,ze=ye.length;De<ze;De++){const Oe=ye[De];Is(ne,X,A,Oe)}ut&&Ge.render(A);for(let De=0,ze=ye.length;De<ze;De++){const Oe=ye[De];jo(g,A,Oe,Oe.viewport)}}else X.length>0&&Is(ne,X,A,Y),ut&&Ge.render(A),jo(g,A,Y);N!==null&&L===0&&(le.updateMultisampleRenderTarget(N),le.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(M,A,Y),Le.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],de===!0&&ge.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ns(A,Y,Q,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){ne&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const De=q.update(A),ze=A.material;ze.visible&&g.push(A,De,ze,Q,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const De=q.update(A),ze=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ze.copy(De.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const Oe=De.groups;for(let je=0,tt=Oe.length;je<tt;je++){const Ke=Oe[je],lt=ze[Ke.materialIndex];lt&&lt.visible&&g.push(A,De,lt,Q,Ze.z,Ke)}}else ze.visible&&g.push(A,De,ze,Q,Ze.z,null)}}const ye=A.children;for(let De=0,ze=ye.length;De<ze;De++)Ns(ye[De],Y,Q,ne)}function jo(A,Y,Q,ne){const X=A.opaque,ye=A.transmissive,De=A.transparent;u.setupLightsView(Q),de===!0&&ge.setGlobalState(M.clippingPlanes,Q),ne&&O.viewport(I.copy(ne)),X.length>0&&Us(X,Y,Q),ye.length>0&&Us(ye,Y,Q),De.length>0&&Us(De,Y,Q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Is(A,Y,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ne.id]===void 0&&(u.state.transmissionRenderTarget[ne.id]=new Rs(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ul:ji,minFilter:xs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const ye=u.state.transmissionRenderTarget[ne.id],De=ne.viewport||I;ye.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const ze=M.getRenderTarget(),Oe=M.getActiveCubeFace(),je=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(re),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),ut&&Ge.render(Q);const tt=M.toneMapping;M.toneMapping=Gr;const Ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),u.setupLightsView(ne),de===!0&&ge.setGlobalState(M.clippingPlanes,ne),Us(A,Q,ne),le.updateMultisampleRenderTarget(ye),le.updateRenderTargetMipmap(ye),nt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let At=0,Vt=Y.length;At<Vt;At++){const wt=Y[At],bt=wt.object,Je=wt.geometry,Pt=wt.material,dt=wt.group;if(Pt.side===gi&&bt.layers.test(ne.layers)){const bn=Pt.side;Pt.side=ti,Pt.needsUpdate=!0,Fs(bt,Q,ne,Je,Pt,dt),Pt.side=bn,Pt.needsUpdate=!0,lt=!0}}lt===!0&&(le.updateMultisampleRenderTarget(ye),le.updateRenderTargetMipmap(ye))}M.setRenderTarget(ze,Oe,je),M.setClearColor(re,ae),Ke!==void 0&&(ne.viewport=Ke),M.toneMapping=tt}function Us(A,Y,Q){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let X=0,ye=A.length;X<ye;X++){const De=A[X],ze=De.object,Oe=De.geometry,je=De.group;let tt=De.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),ze.layers.test(Q.layers)&&Fs(ze,Y,Q,Oe,tt,je)}}function Fs(A,Y,Q,ne,X,ye){A.onBeforeRender(M,Y,Q,ne,X,ye),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,Y,Q,ne,A,ye),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=ti,X.needsUpdate=!0,M.renderBufferDirect(Q,Y,ne,X,A,ye),X.side=jr,X.needsUpdate=!0,M.renderBufferDirect(Q,Y,ne,X,A,ye),X.side=gi):M.renderBufferDirect(Q,Y,ne,X,A,ye),A.onAfterRender(M,Y,Q,ne,X,ye)}function Xn(A,Y,Q){Y.isScene!==!0&&(Y=Ce);const ne=oe.get(A),X=u.state.lights,ye=u.state.shadowsArray,De=X.state.version,ze=ue.getParameters(A,X.state,ye,Y,Q),Oe=ue.getProgramCacheKey(ze);let je=ne.programs;ne.environment=A.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(A.isMeshStandardMaterial?Qe:qe).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",he),je=new Map,ne.programs=je);let tt=je.get(Oe);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===De)return Yo(A,ze),tt}else ze.uniforms=ue.getUniforms(A),A.onBeforeCompile(ze,M),tt=ue.acquireProgram(ze,Oe),je.set(Oe,tt),ne.uniforms=ze.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ge.uniform),Yo(A,ze),ne.needsLights=mr(A),ne.lightsStateVersion=De,ne.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function pl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Ec.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Yo(A,Y){const Q=oe.get(A);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function ml(A,Y,Q,ne,X){Y.isScene!==!0&&(Y=Ce),le.resetTextureUnits();const ye=Y.fog,De=ne.isMeshStandardMaterial?Y.environment:null,ze=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ko,Oe=(ne.isMeshStandardMaterial?Qe:qe).get(ne.envMap||De),je=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,tt=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!Q.morphAttributes.position,lt=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let Vt=Gr;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=M.toneMapping);const wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,bt=wt!==void 0?wt.length:0,Je=oe.get(ne),Pt=u.state.lights;if(de===!0&&(B===!0||A!==S)){const Dt=A===S&&ne.id===E;ge.setState(ne,A,Dt)}let dt=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Pt.state.version||Je.outputColorSpace!==ze||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==Oe||ne.fog===!0&&Je.fog!==ye||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ge.numPlanes||Je.numIntersection!==ge.numIntersection)||Je.vertexAlphas!==je||Je.vertexTangents!==tt||Je.morphTargets!==Ke||Je.morphNormals!==lt||Je.morphColors!==At||Je.toneMapping!==Vt||Je.morphTargetsCount!==bt)&&(dt=!0):(dt=!0,Je.__version=ne.version);let bn=Je.currentProgram;dt===!0&&(bn=Xn(ne,Y,X));let gr=!1,On=!1,Jr=!1;const Lt=bn.getUniforms(),jn=Je.uniforms;if(O.useProgram(bn.program)&&(gr=!0,On=!0,Jr=!0),ne.id!==E&&(E=ne.id,On=!0),gr||S!==A){O.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(F,"projectionMatrix",A.projectionMatrix),Lt.setValue(F,"viewMatrix",A.matrixWorldInverse);const Ut=Lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(F,Ne.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,On=!0,Jr=!0)}if(X.isSkinnedMesh){Lt.setOptional(F,X,"bindMatrix"),Lt.setOptional(F,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Lt.setValue(F,"boneTexture",Dt.boneTexture,le))}X.isBatchedMesh&&(Lt.setOptional(F,X,"batchingTexture"),Lt.setValue(F,"batchingTexture",X._matricesTexture,le),Lt.setOptional(F,X,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",X._indirectTexture,le),Lt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",X._colorsTexture,le));const Yn=Q.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ve.update(X,Q,bn),(On||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,Lt.setValue(F,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(jn.envMap.value=Oe,jn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(jn.envMapIntensity.value=Y.environmentIntensity),On&&(Lt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Je.needsLights&&Os(jn,Jr),ye&&ne.fog===!0&&pe.refreshFogUniforms(jn,ye),pe.refreshMaterialUniforms(jn,ne,U,j,u.state.transmissionRenderTarget[A.id]),Ec.upload(F,pl(Je),jn,le)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ec.upload(F,pl(Je),jn,le),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(F,"center",X.center),Lt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Lt.setValue(F,"normalMatrix",X.normalMatrix),Lt.setValue(F,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Dt=ne.uniformsGroups;for(let Ut=0,ks=Dt.length;Ut<ks;Ut++){const Yi=Dt[Ut];rt.update(Yi,bn),rt.bind(Yi,bn)}}return bn}function Os(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function mr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,Y,Q){const ne=oe.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=Y,oe.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Q,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const Q=oe.get(A);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};const gl=F.createFramebuffer();this.setRenderTarget=function(A,Y=0,Q=0){N=A,R=Y,L=Q;let ne=!0,X=null,ye=!1,De=!1;if(A){const Oe=oe.get(A);if(Oe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1;else if(Oe.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(Oe.__hasExternalTextures)le.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Oe.__boundDepthTexture!==Ke){if(Ke!==null&&oe.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const tt=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?X=tt[Y][Q]:X=tt[Y],ye=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?X=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[Q]:X=tt,I.copy(A.viewport),H.copy(A.scissor),$=A.scissorTest}else I.copy(Se).multiplyScalar(U).floor(),H.copy(Fe).multiplyScalar(U).floor(),$=st;if(Q!==0&&(X=gl),O.bindFramebuffer(F.FRAMEBUFFER,X)&&ne&&O.drawBuffers(A,X),O.viewport(I),O.scissor(H),O.setScissorTest($),ye){const Oe=oe.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,Q)}else if(De){const Oe=Y;for(let je=0;je<A.textures.length;je++){const tt=oe.get(A.textures[je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+je,tt.__webglTexture,Q,Oe)}}else if(A!==null&&Q!==0){const Oe=oe.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(A,Y,Q,ne,X,ye,De,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){O.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const je=A.textures[ze],tt=je.format,Ke=je.type;if(!He.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&Q>=0&&Q<=A.height-X&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(Y,Q,ne,X,Xe.convert(tt),Xe.convert(Ke),ye))}finally{const je=N!==null?oe.get(N).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,Y,Q,ne,X,ye,De,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(Y>=0&&Y<=A.width-ne&&Q>=0&&Q<=A.height-X){O.bindFramebuffer(F.FRAMEBUFFER,Oe);const je=A.textures[ze],tt=je.format,Ke=je.type;if(!He.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(Y,Q,ne,X,Xe.convert(tt),Xe.convert(Ke),0);const At=N!==null?oe.get(N).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,At);const Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pS(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(lt),F.deleteSync(Vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,Q=0){const ne=Math.pow(2,-Q),X=Math.floor(A.image.width*ne),ye=Math.floor(A.image.height*ne),De=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;le.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,De,ze,X,ye),O.unbindTexture()};const fi=F.createFramebuffer(),qo=F.createFramebuffer();this.copyTextureToTexture=function(A,Y,Q=null,ne=null,X=0,ye=null){ye===null&&(X!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let De,ze,Oe,je,tt,Ke,lt,At,Vt;const wt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(Q!==null)De=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,je=Q.min.x,tt=Q.min.y,Ke=Q.isBox3?Q.min.z:0;else{const Yn=Math.pow(2,-X);De=Math.floor(wt.width*Yn),ze=Math.floor(wt.height*Yn),A.isDataArrayTexture?Oe=wt.depth:A.isData3DTexture?Oe=Math.floor(wt.depth*Yn):Oe=1,je=0,tt=0,Ke=0}ne!==null?(lt=ne.x,At=ne.y,Vt=ne.z):(lt=0,At=0,Vt=0);const bt=Xe.convert(Y.format),Je=Xe.convert(Y.type);let Pt;Y.isData3DTexture?(le.setTexture3D(Y,0),Pt=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(le.setTexture2DArray(Y,0),Pt=F.TEXTURE_2D_ARRAY):(le.setTexture2D(Y,0),Pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const dt=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gr=F.getParameter(F.UNPACK_SKIP_PIXELS),On=F.getParameter(F.UNPACK_SKIP_ROWS),Jr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);const Lt=A.isDataArrayTexture||A.isData3DTexture,jn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Yn=oe.get(A),Dt=oe.get(Y),Ut=oe.get(Yn.__renderTarget),ks=oe.get(Dt.__renderTarget);O.bindFramebuffer(F.READ_FRAMEBUFFER,Ut.__webglFramebuffer),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Yi=0;Yi<Oe;Yi++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,X,Ke+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,ye,Vt+Yi)),F.blitFramebuffer(je,tt,De,ze,lt,At,De,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||oe.has(A)){const Yn=oe.get(A),Dt=oe.get(Y);O.bindFramebuffer(F.READ_FRAMEBUFFER,fi),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,qo);for(let Ut=0;Ut<Oe;Ut++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yn.__webglTexture,X,Ke+Ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yn.__webglTexture,X),jn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,ye,Vt+Ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,ye),X!==0?F.blitFramebuffer(je,tt,De,ze,lt,At,De,ze,F.COLOR_BUFFER_BIT,F.NEAREST):jn?F.copyTexSubImage3D(Pt,ye,lt,At,Vt+Ut,je,tt,De,ze):F.copyTexSubImage2D(Pt,ye,lt,At,je,tt,De,ze);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else jn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Pt,ye,lt,At,Vt,De,ze,Oe,bt,Je,wt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,ye,lt,At,Vt,De,ze,Oe,bt,wt.data):F.texSubImage3D(Pt,ye,lt,At,Vt,De,ze,Oe,bt,Je,wt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,lt,At,De,ze,bt,Je,wt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,lt,At,wt.width,wt.height,bt,wt.data):F.texSubImage2D(F.TEXTURE_2D,ye,lt,At,De,ze,bt,Je,wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,dt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gr),F.pixelStorei(F.UNPACK_SKIP_ROWS,On),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jr),ye===0&&Y.generateMipmaps&&F.generateMipmap(Pt),O.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){R=0,L=0,N=null,O.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}var ev;const yt=(ev=window.Telegram)==null?void 0:ev.WebApp,Kg="/yggdrasil-tma/",ac=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],$A=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Jg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},Zg=()=>{try{const t={...Jg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Jg,watch:Date.now()}}},xa=()=>new Date().toISOString().slice(0,10),KA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Yd=[3,5,8,12,18,25,40],JA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],ZA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],qd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],ya={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},Qg={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},$d={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Kd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Ar({name:t,className:e}){return G.jsx("img",{src:t.includes(".")?`${Kg}img/${t}`:`${Kg}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const QA=`
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
`,ls=(t,e=.9,n=0)=>new ot({color:t,roughness:e,metalness:n}),be=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function e3(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function t3(t){const e=new $e,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=ls(i,.92),c=ls(s,.9),d=ls(o,.96),f=ls(r,.95),h=ls(a,.78),p=ls(2106150,.98),y=new ee(new zn(.28,.24,5,8),d);y.position.y=.72,e.add(y);const w=new ee(new zn(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const g=new ee(new zn(n?.4:.34,.34,5,8),c);g.scale.z=.82,g.position.y=1.28,e.add(g);const u=new ee(new kt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const m=new ee(new Nn(.12,.12,.055),h);m.position.set(0,.93,.38),e.add(m);const _=new ee(new kt(.13,.15,.18,10),l);_.position.y=1.63,e.add(_);const M=new ee(new zt(.31,16,12),l);M.scale.set(.92,1.06,.92),M.position.y=1.91,e.add(M);const C=new ee(new zt(.325,14,10),f);C.scale.set(.98,.72,.98),C.position.set(0,2.08,-.025),e.add(C);const R=new ee(new zn(.18,.3,5,8),f);R.position.set(0,1.93,-.25),R.rotation.x=.15,e.add(R);const L=new ee(new Dn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const N=new ot({color:1513754,roughness:.55});for(const J of[-.105,.105]){const te=new ee(new zt(.025,7,5),N);te.position.set(J,1.98,.285),e.add(te)}if(n){const J=new ee(new zt(.19,10,7),f);J.scale.set(.82,1,.72),J.position.set(0,1.8,.24),e.add(J)}else{const J=new ee(new zn(.055,.42,4,7),f);J.position.set(-.27,1.78,-.08),J.rotation.z=-.22,e.add(J)}const E=J=>{const te=new $e;te.position.set(J*(n?.43:.39),1.43,0),te.rotation.z=J*.07;const Se=new ee(new zn(.105,.42,5,7),c);Se.position.y=-.23,te.add(Se);const Fe=new $e;Fe.position.y=-.46,te.add(Fe);const st=new ee(new zn(.085,.34,5,7),d);st.position.y=-.2,Fe.add(st);const Pe=new ee(new zt(.105,9,7),l);return Pe.position.y=-.43,Fe.add(Pe),e.add(te),{upper:te,elbow:Fe}},S=E(-1),I=E(1),H=J=>{const te=new $e;te.position.set(J*.15,.68,0);const Se=new ee(new zn(.12,.42,5,7),p);Se.position.y=-.23,te.add(Se);const Fe=new $e;Fe.position.y=-.48,te.add(Fe);const st=new ee(new zn(.095,.4,5,7),p);st.position.y=-.22,Fe.add(st);const Pe=new ee(new zn(.13,.24,5,7),d);return Pe.scale.z=1.25,Pe.position.set(0,-.47,.075),Fe.add(Pe),e.add(te),te},$=H(-1),re=H(1),ae=new ee(new zn(.42,.1,5,8),d);ae.scale.z=.72,ae.position.y=1.48,e.add(ae);const V=new ee(new Nn(.58,.92,.075),ls(t.id==="berserk"?2821132:1582894,.98));V.position.set(0,1.05,-.28),V.rotation.x=-.035,e.add(V);const j=new $e;if(t.id==="berserk"||t.id==="dwarf"){const J=new ee(new kt(.035,.045,.72,7),d);J.position.y=.36,j.add(J);const te=new ee(new Nn(.16,.34,.055),h);te.position.set(0,.88,0),te.rotation.z=t.id==="dwarf"?-.22:.22,j.add(te)}else{const J=new ee(new kt(.028,.04,1.1,7),d);J.position.y=.52,j.add(J);const te=new ee(new Dn(.075,.25,6),h);te.position.y=1.18,j.add(te)}if(j.position.set(.43,.32,.03),j.rotation.z=-.12,e.add(j),t.id==="viking"||t.id==="berserk"){const J=new ee(new kt(.3,.3,.1,16),d);J.rotation.x=Math.PI/2,J.position.set(0,1.12,-.37),e.add(J);const te=new ee(new zt(.065,8,6),h);te.position.set(0,1.12,-.43),e.add(te)}const U=new ee(new bo(.62,24),new Ao({color:0,transparent:!0,opacity:.32}));return U.rotation.x=-Math.PI/2,U.position.y=.02,e.add(U),e.userData.anim={armL:S,armR:I,legL:$,legR:re,weapon:j,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},e3(e)}function n3({h:t,on:e,eventDone:n}){const i=vt.useRef(null),r=vt.useRef(null),s=vt.useRef(null),o=vt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=vt.useState(""),[c,d]=vt.useState(!1),[f,h]=vt.useState(!1),[p,y]=vt.useState(!1),[w,g]=vt.useState(!1),u=vt.useRef({x:0,z:1}),m=vt.useRef(!1),_=vt.useRef(null);vt.useEffect(()=>{const E=i.current;if(!E)return;const S=new zS;S.background=new pt(9414817),S.fog=new Bp(7307642,.0064);const I=new oi(54,1,.1,280);I.position.set(0,8.5,17);const H=new qA({antialias:!0,powerPreference:"high-performance"});H.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),H.shadowMap.enabled=!0,H.shadowMap.type=mx,H.outputColorSpace=$n,H.toneMapping=gx,H.toneMappingExposure=1.08,E.appendChild(H.domElement);const $=new a2(14477797,2896685,1.22);S.add($);const re=new Sg(16770226,3.45);re.position.set(-42,58,34),re.castShadow=!0,re.shadow.mapSize.set(1024,1024),re.shadow.camera.left=-95,re.shadow.camera.right=95,re.shadow.camera.top=95,re.shadow.camera.bottom=-95,re.shadow.bias=-5e-4,S.add(re);const ae=new Sg(10467501,.72);ae.position.set(55,18,-60),S.add(ae);const V=(x,b)=>{const v=Math.sin(x*.075)*.7+Math.cos(b*.062)*.55+Math.sin((x-b)*.045)*.35,P=Math.exp(-(x*x/850+(b+2)*(b+2)/1050)),K=Math.exp(-(x*x/150+(b-12)*(b-12)/2200));return v*(1-P*.88)-K*.18},j=x=>{const b=document.createElement("canvas");b.width=b.height=512;const v=b.getContext("2d"),P=z=>Math.abs(Math.sin(z*12.9898)*43758.5453)%1;if(x==="ground"){v.fillStyle="#3f4d38",v.fillRect(0,0,512,512);for(let z=0;z<1800;z++){const ie=P(z*1.17)*512,se=P(z*2.31)*512,me=10+P(z*3.71)*28,Z=P(z*4.13);v.fillStyle=Z>.72?`rgba(96,108,63,${.08+P(z)*.12})`:`rgba(30,36,25,${.05+P(z)*.12})`,v.beginPath(),v.arc(ie,se,me,0,Math.PI*2),v.fill()}for(let z=0;z<650;z++){const ie=P(z*7.1)*512,se=P(z*8.2)*512;v.strokeStyle=`rgba(118,126,78,${.16+P(z*2)*.16})`,v.lineWidth=1+P(z*4)*1.5,v.beginPath(),v.moveTo(ie,se),v.lineTo(ie+(P(z*5)-.5)*5,se-3-P(z*6)*5),v.stroke()}}else if(x==="wood"){v.fillStyle="#5a3d29",v.fillRect(0,0,512,512);for(let z=0;z<512;z+=22)v.fillStyle=`rgba(25,15,9,${.18+P(z)*.13})`,v.fillRect(0,z,512,3),v.strokeStyle=`rgba(154,111,69,${.08+P(z*2)*.08})`,v.lineWidth=2,v.beginPath(),v.moveTo(0,z+7),v.bezierCurveTo(150,z+2,340,z+13,512,z+5),v.stroke();for(let z=0;z<65;z++){const ie=P(z*2.1)*512;v.fillStyle=`rgba(20,12,8,${.12+P(z*3)*.16})`,v.fillRect(ie,0,2+P(z*4)*3,512)}}else if(x==="roof"){v.fillStyle="#252522",v.fillRect(0,0,512,512);for(let z=-30;z<550;z+=25){v.fillStyle=`rgba(105,94,77,${.12+P(z)*.08})`,v.fillRect(0,z,512,2),v.strokeStyle="rgba(12,12,11,.48)",v.lineWidth=3;for(let ie=-40;ie<560;ie+=38)v.beginPath(),v.moveTo(ie,z),v.lineTo(ie-18,z+28),v.stroke()}for(let z=0;z<180;z++)v.fillStyle=`rgba(170,154,123,${.03+P(z)*.07})`,v.fillRect(P(z*2)*512,P(z*3)*512,2+P(z*4)*7,2)}else if(x==="bark"){v.fillStyle="#7b5a3f",v.fillRect(0,0,512,512);for(let z=0;z<95;z++){const ie=P(z*2.1)*512,se=2+P(z*3.7)*7;v.fillStyle=`rgba(${24+P(z)*24},${16+P(z*4)*18},${10+P(z*5)*14},${.18+P(z*6)*.22})`,v.fillRect(ie,0,se,512)}for(let z=0;z<80;z++){const ie=P(z*7.1)*512,se=P(z*8.2)*512;v.strokeStyle=`rgba(126,91,60,${.07+P(z*2)*.09})`,v.lineWidth=1+P(z*3)*2,v.beginPath(),v.moveTo(ie,se),v.lineTo(ie+(P(z*4)-.5)*12,se+18+P(z*5)*45),v.stroke()}}else if(x==="foliage"){v.fillStyle="#536b4b",v.fillRect(0,0,512,512);for(let z=0;z<1900;z++){const ie=P(z*1.17)*512,se=P(z*2.31)*512,me=P(z*3.7),Z=me>.72?76:me>.36?63:51,Me=me>.72?104:me>.36?87:70,Te=me>.72?59:me>.36?49:40;v.fillStyle=`rgba(${Z},${Me},${Te},${.16+P(z*4)*.28})`,v.beginPath(),v.arc(ie,se,1.5+P(z*5)*4.5,0,Math.PI*2),v.fill()}for(let z=0;z<260;z++){const ie=P(z*9.1)*512,se=P(z*10.2)*512;v.strokeStyle=`rgba(18,31,22,${.08+P(z*3)*.12})`,v.lineWidth=1,v.beginPath(),v.moveTo(ie,se),v.lineTo(ie+(P(z*2)-.5)*10,se+(P(z*4)-.5)*10),v.stroke()}}else{v.fillStyle="#514333",v.fillRect(0,0,512,512);for(let z=0;z<1300;z++){const ie=P(z*1.3)*512,se=P(z*2.7)*512;v.fillStyle=`rgba(${45+P(z*3)*38},${35+P(z*4)*28},${23+P(z*5)*20},${.08+P(z*6)*.18})`,v.fillRect(ie,se,2+P(z*7)*7,1+P(z*8)*4)}}const K=new GS(b);return K.wrapS=K.wrapT=Eo,K.colorSpace=$n,K.anisotropy=4,K},U=j("ground");U.repeat.set(5,6);const J=j("bark");J.wrapS=J.wrapT=Eo,J.repeat.set(1.2,1.8);const te=j("foliage");te.wrapS=te.wrapT=Eo,te.repeat.set(1.35,1.35);const Se=new Ss(190,190,62,62),Fe=Se.attributes.position;for(let x=0;x<Fe.count;x++){const b=Fe.getX(x),v=-Fe.getY(x);Fe.setZ(x,V(b,v))}Se.rotateX(-Math.PI/2),Se.computeVertexNormals();const st=new ee(Se,new to({map:U}));st.receiveShadow=!0,S.add(st);const Pe=(x,b,v)=>(b&&(x.userData={id:b,label:v||b}),x.traverse(P=>{P.isMesh&&(P.castShadow=!0,P.receiveShadow=!0)}),S.add(x),b&&Ce.push(x),x),de=(x,b=.9,v=0)=>new ot({color:x,roughness:b,metalness:v}),B=(x,b,v,P,K=.9)=>new ee(new Nn(x,b,v),de(P,K)),fe=(x,b,v,P=10,K=.9)=>new ee(new kt(x,x,b,P),de(v,K)),Ne=(x,b,v)=>{const P=fe(b,x,v,10,.96);return P.rotation.z=Math.PI/2,P},Ze=(x,b,v)=>{const P=new $e,K=x*.62,z=.61,ie=new ot({map:Ge,color:v,roughness:.96,side:gi}),se=new ee(new Nn(K,.18,b),ie),me=se.clone();return se.rotation.z=z,me.rotation.z=-z,se.position.x=-x*.205,me.position.x=x*.205,P.add(se,me),P},Ce=[],ut=[],rn=[],F=[],St=[],nt=.62,He=(x,b,v,P,K=0,z=.12)=>St.push({kind:"rect",x,z:b,w:v+z*2,d:P+z*2,rot:K}),O=(x,b,v,P=.12)=>St.push({kind:"circle",x,z:b,r:v+P}),Re=(x,b,v,P,K,z=.12)=>St.push({kind:"segment",x1:x,z1:b,x2:v,z2:P,r:K+z}),oe=(x,b,v)=>{if(v.kind==="circle")return Math.hypot(x-v.x,b-v.z)<v.r+nt;if(v.kind==="rect"){const Z=Math.cos(v.rot),Me=Math.sin(v.rot),Te=x-v.x,ft=b-v.z,_t=Z*Te-Me*ft,Et=Me*Te+Z*ft,Gt=Math.max(-v.w/2,Math.min(v.w/2,_t)),Sn=Math.max(-v.d/2,Math.min(v.d/2,Et));return Math.hypot(_t-Gt,Et-Sn)<nt}const P=v.x2-v.x1,K=v.z2-v.z1,z=P*P+K*K,ie=z>0?Math.max(0,Math.min(1,((x-v.x1)*P+(b-v.z1)*K)/z)):0,se=v.x1+P*ie,me=v.z1+K*ie;return Math.hypot(x-se,b-me)<v.r+nt},le=(x,b)=>m.current?x<gn-2.72||x>gn+2.72||b<un-2.05||b>un+2.3:St.some(v=>oe(x,b,v)),qe=(x,b,v)=>{if(m.current){const z=Math.max(gn-2.55,Math.min(gn+2.55,b)),ie=Math.max(un-1.92,Math.min(un+2.55,v));x.x=z,x.z=ie;return}const P=Math.max(-88,Math.min(88,b)),K=Math.max(-89,Math.min(89,v));if(!le(P,K)){x.x=P,x.z=K;return}le(P,x.z)||(x.x=P),le(x.x,K)||(x.z=K)},Qe=de(3425343,1);for(let x=0;x<22;x++){const b=new $e,v=-105+x*10,P=8+be(x,7)*9,K=new ee(new Dn(P,18+be(x,8)*16,7),Qe);K.position.y=8,b.add(K),b.position.set(v,-1,-94+be(x,9)*11),Pe(b)}const D=[];for(let x=0;x<=32;x++)D.push({z:-94+x*6,x:-57+Math.sin(x*.42)*4.2});const T=[],q=[],ue=5.4;for(let x=0;x<D.length;x++){const b=D[x],v=D[Math.max(0,x-1)],P=D[Math.min(D.length-1,x+1)],K=P.x-v.x,z=P.z-v.z,ie=Math.max(.001,Math.hypot(K,z)),se=-z/ie,me=K/ie,Z=V(b.x,b.z)+.055;for(const Me of[-1,1]){const Te=ue*Me;T.push(b.x+se*Te,Z+Math.sin(x*1.7+Me)*.035,b.z+me*Te)}if(x<D.length-1){const Me=x*2;q.push(Me,Me+1,Me+2,Me+1,Me+3,Me+2)}}const pe=new cn;pe.setAttribute("position",new xt(T,3)),pe.setIndex(q),pe.computeVertexNormals();const ce=new ee(pe,new ot({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));ce.receiveShadow=!0,S.add(ce);const Ie=[];for(let x=0;x<34;x++){const b=D[Math.min(D.length-1,Math.floor(x*.94))],v=.7+be(x,1500)*1.35,P=new ee(new Wp(v*.45,v,12),new Ao({color:10998996,transparent:!0,opacity:.12,side:gi}));P.rotation.x=-Math.PI/2,P.scale.y=.42,P.position.set(b.x+(be(x,1501)-.5)*4.5,V(b.x,b.z)+.075,b.z+(be(x,1502)-.5)*4),S.add(P),Ie.push({mesh:P,phase:be(x,1503)*Math.PI*2})}for(let x=0;x<52;x++){const b=Math.min(D.length-1,Math.floor(x*.62)),v=D[b],P=D[Math.max(0,b-1)],K=D[Math.min(D.length-1,b+1)],z=K.x-P.x,ie=K.z-P.z,se=Math.max(.001,Math.hypot(z,ie)),me=x%2===0?-1:1,Z=.34+be(x,15)*.72,Me=ue+me*(.25+be(x,16)*1.4),Te=new ee(new sn(Z,1),de(6185562,1));Te.position.set(v.x+-ie/se*Me,V(v.x,v.z)+.18,v.z+z/se*Me),Te.scale.y=.5+be(x,17)*.35,Pe(Te),O(Te.position.x,Te.position.z,Z*.75,.03)}const ge=(x,b)=>{const v=x.map(([se,me])=>new k(se,V(se,me)+.035,me)),P=[],K=[];for(let se=0;se<v.length;se++){const me=v[Math.max(0,se-1)],Z=v[Math.min(v.length-1,se+1)],Me=Z.x-me.x,Te=Z.z-me.z,ft=Math.max(.001,Math.hypot(Me,Te)),_t=-Te/ft,Et=Me/ft;if(P.push(v[se].x+_t*b/2,v[se].y,v[se].z+Et*b/2,v[se].x-_t*b/2,v[se].y+.01,v[se].z-Et*b/2),se<v.length-1){const Gt=se*2;K.push(Gt,Gt+1,Gt+2,Gt+1,Gt+3,Gt+2)}}const z=new cn;z.setAttribute("position",new xt(P,3)),z.setIndex(K),z.computeVertexNormals();const ie=new ee(z,new ot({map:j("road"),roughness:1}));ie.receiveShadow=!0,S.add(ie),[-b*.22,b*.22].forEach(se=>{const me=v.map((Te,ft)=>{const _t=v[Math.max(0,ft-1)],Et=v[Math.min(v.length-1,ft+1)],Gt=Et.x-_t.x,Sn=Et.z-_t.z,wn=Math.max(.001,Math.hypot(Gt,Sn));return new k(Te.x+-Sn/wn*se,Te.y+.045,Te.z+Gt/wn*se)}),Z=new Xp(new kx(me),Math.max(12,v.length*4),.055,5,!1),Me=new ee(Z,de(3352863,1));Me.scale.y=.12,S.add(Me)})};ge([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),ge([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),ge([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),ge([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),ge([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),ge([[4,14],[-3,22],[-7,31],[-8,42]],3.8),ge([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),ge([[4,14],[10,28],[18,41],[27,57]],3.8),ge([[5,31],[15,45],[27,57],[39,70]],3.7),ge([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),ge([[-39,-8],[-47,-12],[-53,-15]],3.4);const Ve=j("wood");Ve.repeat.set(2,1);const Ge=j("roof");Ge.repeat.set(2,2);const ve=(x,b,v,P,K,z,ie,se,me)=>{const Z=new $e;Z.rotation.y=K,Z.position.set(x,V(x,b),b),Z.userData={id:ie,label:z};const Me=new ot({map:Ve,color:se,roughness:.94}),Te=B(v+.7,.55,P+.7,5724755,1);Te.position.y=.28,Z.add(Te);for(let Ft=0;Ft<7;Ft++){const Ot=.62+Ft*.47,vn=Ne(v-Ft%2*.2,.29,se);vn.material=Me,vn.position.set(0,Ot,P*.5-.03),Z.add(vn);const ni=vn.clone();ni.position.z=-P*.5+.03,Z.add(ni);const Si=Ne(P+.06,.29,se);Si.material=Me,Si.rotation.y=Math.PI/2,Si.position.set(-v*.5+.03,Ot,0),Z.add(Si);const ea=Si.clone();ea.position.x=v*.5-.03,Z.add(ea)}for(const Ft of[-v*.5,v*.5])for(const Ot of[-P*.5,P*.5]){const vn=fe(.34,3.75,3482649,8,1);vn.position.set(Ft,2.05,Ot),Z.add(vn)}const ft=B(1.18,2.05,.18,2365458,1);ft.position.set(0,1.37,P*.5+.31),Z.add(ft);for(const Ft of[-.67,.67]){const Ot=B(.15,2.28,.24,3811613,1);Ot.position.set(Ft,1.42,P*.5+.34),Z.add(Ot)}const _t=Ne(1.65,.11,3679770);_t.position.set(0,2.53,P*.5+.34),Z.add(_t);const Et=fe(.055,.12,13015634,8,.55);Et.rotation.z=Math.PI/2,Et.position.set(.33,1.38,P*.5+.43),Z.add(Et);const Gt=new ot({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Ft of[-v*.27,v*.27]){const Ot=B(1.28,1.02,.13,3154457,1);Ot.position.set(Ft,2.02,P*.5+.29),Z.add(Ot);const vn=B(.94,.7,.055,15251295,.45);vn.material=Gt,vn.position.set(Ft,2.02,P*.5+.36),Z.add(vn);const ni=B(.07,.78,.09,3154457,1);ni.position.set(Ft,2.02,P*.5+.4),Z.add(ni);const Si=B(1.05,.07,.09,3154457,1);Si.position.set(Ft,2.02,P*.5+.4),Z.add(Si)}const Sn=Ze(v+1.55,P+1.35,me);Sn.position.y=4.18,Z.add(Sn);for(const Ft of[-1,1]){const Ot=Ne(P+1.48,.12,3154715);Ot.position.set(Ft*(v*.46),3.78,0),Ot.rotation.y=Math.PI/2,Z.add(Ot)}const wn=Ne(P+1.45,.18,2760730);wn.rotation.y=Math.PI/2,wn.position.y=5.28,Z.add(wn);const Bt=B(v*.34,.16,1.05,6439467,1);Bt.position.set(0,.64,P*.5+.66),Z.add(Bt);for(const Ft of[-v*.16,v*.16]){const Ot=Ne(.85,.08,4796447);Ot.rotation.y=Math.PI/2,Ot.position.set(Ft,.83,P*.5+.95),Z.add(Ot)}const tn=fe(.34,2,5722958,8,1);tn.position.set(v*.25,5.05,-P*.1),Z.add(tn);const qt=B(.72,.14,.72,3157289,1);qt.position.set(v*.25,6.08,-P*.1),Z.add(qt),Pe(Z,ie,z),Ce.push(Z),He(x,b,v+.85,P+.85,K,.05)};ve(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ve(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ve(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ve(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ve(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ve(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const we=new $e;we.position.set(-10,V(-10,-5),-5),we.userData={id:"forge",label:"Кузница"};for(let x=0;x<7;x++){const b=.62+x*.47,v=Ne(9,.27,4401693);v.position.set(0,b,-2.85),we.add(v);const P=Ne(6,.27,4401693);P.rotation.y=Math.PI/2,P.position.set(-4.35,b,0),we.add(P)}for(const x of[-4.35,4.35]){const b=fe(.34,4,2825493,9,1);b.position.set(x,2,-2.85),we.add(b)}const et=Ze(9.8,7,2433825);et.position.y=4.45,we.add(et);const Xe=Ne(7.2,.18,2169366);Xe.rotation.y=Math.PI/2,Xe.position.y=5.42,we.add(Xe);for(const x of[-3.7,3.7]){const b=Ne(4.7,.13,2825494);b.rotation.z=x<0?-.6:.6,b.position.set(x*.48,3.15,.1),we.add(b)}const Le=fe(1.15,1.65,3420462,10,1);Le.position.set(-2,.83,1.15),we.add(Le);const rt=fe(.88,.35,2565925,10,1);rt.position.set(-2,1.83,1.15),we.add(rt);const W=new ee(new bo(.52,16),new ot({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));W.rotation.y=Math.PI,W.position.set(-2,1.02,2.23),we.add(W);const Ee=fe(.27,.85,2697770,8,.45);Ee.position.set(1.15,.43,1.05),we.add(Ee);const Ae=B(1.45,.34,.58,2435114,.38);Ae.position.set(1.15,1,1.05),we.add(Ae);const ke=new ee(new Dn(.18,.72,8),de(2435114,.38,.05));ke.rotation.z=-Math.PI/2,ke.position.set(1.98,1,1.05),we.add(ke);for(let x=0;x<4;x++){const b=Ne(1.25,.045,11184548);b.rotation.z=-.35+x*.18,b.position.set(2.05+x*.18,1.12,1.34),we.add(b)}const _e=B(1.15,.42,.62,3876893,1);_e.position.set(2.15,.72,-.8),_e.rotation.z=-.18,we.add(_e);const he=fe(.07,.55,5980979,8,1);he.rotation.z=Math.PI/2,he.position.set(1.55,.84,-.8),we.add(he),Pe(we,"forge","Кузница"),Ce.push(we),He(-10,-5,9.6,6.6,0,.05);const We=new _a(16742962,3.4,14,2);We.position.set(-12,V(-12,-5)+2.2,-4),S.add(We);const it=new ee(new bo(8.5,32),new ot({color:7035463,roughness:1}));it.rotation.x=-Math.PI/2,it.position.set(1,V(1,0)+.05,0),it.receiveShadow=!0,S.add(it);for(let x=0;x<18;x++){const b=x/18*Math.PI*2,v=new ee(new sn(.38,1),de(7039843,1));v.position.set(1+Math.cos(b)*8.8,V(1+Math.cos(b)*8.8,Math.sin(b)*8.8)+.22,Math.sin(b)*8.8),S.add(v)}const Ct=(x,b)=>{const v=new $e,P=B(2.8,.22,1,6832937,1);P.position.y=1.05,v.add(P);for(const K of[-1.05,1.05]){const z=B(.16,1,.16,3877149,1);z.position.set(K,.5,-.32),v.add(z);const ie=z.clone();ie.position.z=.32,v.add(ie)}v.position.set(x,V(x,b),b),S.add(v)};Ct(-4,2),Ct(7,3);const gt=(x,b,v)=>{const P=new $e;P.position.set(x,V(x,b),b);for(let Z=0;Z<7;Z++){const Me=Z/7*Math.PI*2,Te=new ee(new sn(.32*v,1),de(6117970,1));Te.position.set(Math.cos(Me)*.7*v,.25*v,Math.sin(Me)*.7*v),P.add(Te)}const K=B(.2*v,.2*v,1.5*v,4861211,1),z=K.clone();K.rotation.y=.55,z.rotation.y=-.55,K.position.y=z.position.y=.38*v,P.add(K,z);const ie=new ot({color:16744744,emissive:16731402,emissiveIntensity:4}),se=new ee(new Dn(.5*v,1.35*v,8),ie);se.position.y=1.02*v,P.add(se),S.add(P);const me=new _a(16747068,2.4*v,12*v,2);return me.position.set(x,V(x,b)+2*v,b),S.add(me),ut.push({light:me,flame:se,phase:be(x,b)*8}),P};gt(1,0,1.15),gt(18,-15,.72);const en=(x,b,v,P,K=1.25)=>{const z=new $e,ie=v-x,se=P-b,me=Math.hypot(ie,se),Z=Math.max(1,Math.floor(me/1.55));for(let Me=0;Me<=Z;Me++){const Te=Me/Z,ft=x+ie*Te,_t=b+se*Te,Et=B(.18,K,.18,4796447,1);Et.position.set(ft,V(ft,_t)+K/2,_t),z.add(Et)}for(const Me of[-.28,.38]){const Te=B(.14,.14,me,5978917,1);Te.rotation.y=Math.atan2(ie,se),Te.position.set((x+v)/2,V((x+v)/2,(b+P)/2)+K*Me,(b+P)/2),z.add(Te)}S.add(z),Re(x,b,v,P,.12,.02)},Fn=(x,b,v,P,K,z,ie)=>{const se=new $e;se.position.set(x,V(x,b),b),se.rotation.y=K,se.userData={id:ie,label:z};const me=B(v+.25,.35,P+.25,5591368,1);me.position.y=.18,se.add(me);const Z=new ee(new Nn(v,2.5,P),new ot({map:Ve,color:6439983,roughness:1}));Z.position.y=1.45,se.add(Z);const Me=new ee(new Nn(v+.6,.18,P+.65),new ot({map:Ge,color:2696996,roughness:1}));Me.rotation.z=.55,Me.position.set(-.16,3,0),se.add(Me);const Te=Me.clone();Te.rotation.z=-.55,Te.position.x=.16,se.add(Te);const ft=B(1.05,1.75,.12,2759700,1);ft.position.set(0,1.05,P/2+.07),se.add(ft),Pe(se,ie,z),Ce.push(se),He(x,b,v+.55,P+.55,K,.04)},Xo=(x,b,v=1)=>{const P=new $e;P.position.set(x,V(x,b),b);const K=new ee(new kt(.65*v,.65*v,1.2*v,10),de(9073729,1));K.rotation.z=Math.PI/2,K.position.y=.62*v,P.add(K);for(let z=0;z<3;z++){const ie=new ee(new dn(.66*v,.025*v,5,18),de(5851693,1));ie.rotation.y=Math.PI/2,ie.position.y=(.28+z*.34)*v,P.add(ie)}Pe(P)},Mi=(x,b,v)=>{const P=new $e;P.position.set(x,V(x,b),b),P.rotation.y=v;const K=B(2.8,.28,1.45,6636331,1);K.position.y=1,P.add(K);for(const ie of[-1.15,1.15])for(const se of[-.55,.55]){const me=B(.16,1.15,.16,4401950,1);me.position.set(ie,.55,se),P.add(me)}for(const ie of[-1.15,1.15]){const se=new ee(new kt(.5,.5,.18,14),de(2696738,1));se.rotation.z=Math.PI/2,se.position.set(ie,.52,-.92),P.add(se)}const z=B(.16,.16,2.4,4796447,1);z.rotation.x=Math.PI/2,z.position.set(0,.72,-2),P.add(z),Pe(P)},Ns=(x,b,v=0)=>{const P=new $e;P.position.set(x,V(x,b),b),P.rotation.y=v;const K=B(2.2,.16,.5,7359021,1);K.position.y=.85,P.add(K);for(const z of[-.78,.78]){const ie=B(.12,.8,.12,4139549,1);ie.position.set(z,.4,0),P.add(ie)}Pe(P)},jo=(x,b)=>{const v=new $e;v.position.set(x,V(x,b),b);for(let ie=0;ie<10;ie++){const se=ie/10*Math.PI*2,me=B(.45,.38,.38,6710621,1);me.position.set(Math.cos(se)*.95,.19,Math.sin(se)*.95),me.rotation.y=se,v.add(me)}const P=B(.16,2.2,.16,4861984,1),K=P.clone();P.position.set(-.9,1.2,0),K.position.set(.9,1.2,0),v.add(P,K);const z=B(2,.16,.16,3876891,1);z.position.y=2.25,v.add(z),Pe(v)};Fn(-19,31,8,5,.08,"Амбар","barn"),Fn(17,34,7,5,-.2,"Сарай","shed"),Fn(27,13,6,4,.45,"Склад рыбака","fishshed"),en(-25,27,-13,27),en(-25,27,-25,38),en(-25,38,-14,38),en(12,29,25,29),en(25,29,25,40),en(25,40,12,40),en(29,-1,39,-1),en(39,-1,39,10),en(39,10,30,10);for(const x of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Xo(x[0],x[1],x[2]);Mi(-17,24,.18),Mi(29,-5,-.55),Ns(-20,23,.18),Ns(25,31,-.2),ve(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ve(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ve(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ve(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),He(-31,8,7.8,5.8,.1,.04),He(-27,20,7.8,5.8,-.25,.04),He(31,18,7.8,5.8,.32,.04),He(20,24,7.8,5.8,-.12,.04);const Is=(x,b,v)=>{const P=new $e;P.position.set(x,V(x,b),b),P.rotation.y=v;const K=B(3,.18,1.25,7357994,1);K.position.y=1.45,P.add(K);for(const ie of[-1.25,1.25])for(const se of[-.48,.48]){const me=B(.13,1.45,.13,4270877,1);me.position.set(ie,.72,se),P.add(me)}const z=new ee(new Dn(1.65,2.5,4,1,!1,Math.PI/4),de(4798510,1));z.scale.z=.55,z.position.y=2.15,P.add(z),Pe(P)};Is(-5,-7,.12),Is(8,-5,-.18),Is(6,7,.5);for(const x of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])jo(x[0],x[1]);const Us=(x,b,v=1)=>{const P=new $e,K=V(x,b);for(let z=0;z<5;z++){const ie=new ee(new zt((.28+be(z,x)*.18)*v,8,6),de(z%2?3494457:4284223,1));ie.position.set((be(z,2)-.5)*.7*v,.28*v,(be(z,3)-.5)*.7*v),P.add(ie)}P.position.set(x,K,b),Pe(P)};for(let x=0;x<48;x++){const b=be(x,501)*Math.PI*2,v=18+be(x,502)*39,P=Math.cos(b)*v,K=Math.sin(b)*v+4;Math.abs(P)<9&&Math.abs(K)<14||Us(P,K,.65+be(x,503)*.75)}for(let x=0;x<34;x++){const b=-84+be(x,610)*168,v=-82+be(x,611)*164;if(Math.hypot(b,v-2)<24)continue;const P=.25+be(x,612)*.55,K=new ee(new sn(P,1),de(5725013,1));K.scale.y=.55,K.position.set(b,V(b,v)+P*.28,v),K.rotation.set(be(x,613),be(x,614),be(x,615)),Pe(K),O(b,v,P*.8,.03)}ve(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Fn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),en(-70,32,-60,32),en(-70,32,-70,43),en(-70,43,-61,43),Xo(-67,39,.9),Mi(-61,33,-.25),jo(-57,34);const Fs=new $e;Fs.position.set(-63,V(-63,47),47);for(let x=0;x<6;x++){const b=B(10,.035,.12,4208682,1);b.position.set(0,.02,(x-2.5)*1.05),b.rotation.y=.06,Fs.add(b)}Pe(Fs);const Xn=new $e;Xn.position.set(39,V(39,70),70),Xn.userData={id:"runefield",label:"Поле Рун"};const pl=de(5593942,1),Yo=new ot({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let x=0;x<11;x++){const b=be(x,1201)*Math.PI*2,v=3.5+be(x,1202)*8,P=new ee(new sn(.65+be(x,1203)*.38,1),pl);P.scale.y=1.4+be(x,1204)*1.5,P.position.set(Math.cos(b)*v,P.scale.y*.48,Math.sin(b)*v),P.rotation.set(be(x,1205),b,be(x,1206)),Xn.add(P);const K=new ee(new Nn(.11,.035,.72),Yo);K.position.set(P.position.x,P.position.y+.55,P.position.z),K.rotation.y=-b+.45,Xn.add(K)}for(let x=0;x<5;x++){const b=B(.22,1.8,.22,4861984,1);b.position.set(-6+x*3,.9,7.5),Xn.add(b);const v=new ee(new dn(.34,.035,6,18),Yo);v.rotation.x=Math.PI/2,v.position.set(-6+x*3,1.55,7.5),Xn.add(v)}const ml=new $e;for(let x=0;x<7;x++){const b=x/7*Math.PI*2,v=new ee(new sn(.3,1),de(5591885,1));v.position.set(Math.cos(b)*.65,.22,Math.sin(b)*.65),ml.add(v)}Xn.add(ml),Pe(Xn,"runefield","Поле Рун"),Ce.push(Xn),O(39,70,1,.08);const Os=(x,b,v,P)=>{const K=new $e,z=v-x,ie=P-b,se=Math.hypot(z,ie),me=Math.floor(se/1.7);for(let Me=0;Me<=me;Me++){const Te=Me/me,ft=x+z*Te,_t=b+ie*Te,Et=new ee(new Dn(.24,.24+2.8+be(Me,x)*.5,6),de(3942940,1));Et.position.set(ft,V(ft,_t)+1.45,_t),K.add(Et)}const Z=B(.3,.35,se,2957593,1);Z.rotation.y=Math.atan2(z,ie),Z.position.set((x+v)/2,V((x+v)/2,(b+P)/2)+1.25,(b+P)/2),K.add(Z),S.add(K),Re(x,b,v,P,.34,.08)};Os(-30,-31,-8,-31),Os(8,-31,30,-31),Os(-30,-31,-30,-13),Os(30,-31,30,16);const mr=new $e;mr.userData={id:"gate",label:"Ворота Мидгарда"};for(const x of[-4.2,4.2]){const b=B(.8,6,.8,3482906,1);b.position.set(x,3,-31),mr.add(b)}const gl=B(10,.8,1,2957336,1);gl.position.set(0,6,-31),mr.add(gl);for(let x=-3;x<=3;x++){const b=B(1,4.2,.22,5978660,1);b.position.set(x*1.15,2,-30.7),mr.add(b)}Pe(mr,"gate","Ворота Мидгарда"),Ce.push(mr),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const fi=new $e;fi.userData={id:"mimir",label:"Колодец Мимира"},fi.position.set(18,V(18,15),15);for(let x=0;x<14;x++){const b=x/14*Math.PI*2,v=B(.7,.48,.5,6711907,1);v.position.set(Math.cos(b)*1.45,.24,Math.sin(b)*1.45),v.rotation.y=b+Math.PI/2,fi.add(v)}const qo=new ee(new bo(1.05,28),new ot({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));qo.rotation.x=-Math.PI/2,qo.position.y=.5,fi.add(qo);for(const x of[-1.35,1.35]){const b=B(.22,3,.22,4861984,1);b.position.set(x,1.55,0),fi.add(b)}const A=B(3.1,.25,.25,3679513,1);A.position.y=2.95,fi.add(A);const Y=B(.55,.5,.55,5913383,1);Y.position.set(0,1.65,0),fi.add(Y);const Q=new ee(new dn(1.8,.06,8,40),new ot({color:7792028,emissive:2653256,emissiveIntensity:3}));Q.rotation.x=Math.PI/2,Q.position.y=.53,fi.add(Q),Pe(fi,"mimir","Колодец Мимира"),Ce.push(fi),O(18,15,1.8,.08);const ne=new _a(7530656,1.8,10,2);ne.position.set(18,V(18,15)+1.4,15),S.add(ne);const X=new $e;X.userData={id:"norns",label:"Прядильня норн"},X.position.set(-25,V(-25,43),43);for(let x=0;x<3;x++){const b=new ee(new zn(.65,2.3,5,8),de(5725529,1));b.position.set((x-1)*2.2,1.35,0),b.rotation.z=(x-1)*.07,X.add(b);const v=new ee(new dn(.42,.055,7,20),new ot({color:[13100495,13149416,14795380][x],emissive:[6134129,7490961,9268264][x],emissiveIntensity:2.2}));v.rotation.x=Math.PI/2,v.position.set((x-1)*2.2,1.6,-.55),X.add(v)}const ye=new Lh({color:13944039,transparent:!0,opacity:.78});for(let x=0;x<2;x++){const b=[new k((x-1)*2.2,2,.1),new k((x-.5)*2.2,4.1,-.7),new k(x*2.2,2,.1)];X.add(new vg(new cn().setFromPoints(b),ye))}const De=new ee(new dn(4.1,.07,8,48),new ot({color:12429522,emissive:6113136,emissiveIntensity:1.5}));De.rotation.x=Math.PI/2,De.position.y=.05,X.add(De),Pe(X,"norns","Прядильня норн"),Ce.push(X),O(-25,43,3,.1);const ze=-43,Oe=62,je=new $e;je.userData={id:"ritual",label:"Круг Силы"},je.position.set(ze,V(ze,Oe),Oe);const tt=de(6711651,1),Ke=de(5593685,1);for(let x=0;x<2;x++){const b=x===0?18:12,v=x===0?6.2:3.65;for(let P=0;P<b;P++){const K=P/b*Math.PI*2+x*.12,z=v+(be(P,930+x)*.5-.25),ie=.42+be(P,940+x)*.48,se=new ee(new sn(.55+be(P,950+x)*.28,1),x===0?tt:Ke);se.scale.y=.65+ie*.35,se.position.set(Math.cos(K)*z,ie*.45,Math.sin(K)*z),se.rotation.set(be(P,960+x),K+be(P,970+x),be(P,980+x)),je.add(se)}}const lt=new ee(new sn(1.05,1),de(5593428,1));lt.scale.set(1.25,.62,1.05),lt.position.y=.5,je.add(lt);for(const x of[2.1,3.15,5.15]){const b=new ee(new dn(x,.045,7,64),new ot({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));b.rotation.x=Math.PI/2,b.position.y=.055,je.add(b)}const At=new ot({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let x=0;x<8;x++){const b=x/8*Math.PI*2,v=new ee(new Nn(.13,.025,.65),At);v.position.set(Math.cos(b)*4.55,.075,Math.sin(b)*4.55),v.rotation.y=-b,je.add(v)}Pe(je,"ritual","Круг Силы"),Ce.push(je),O(ze,Oe,1.25,.06);const Vt=new _a(9226152,1.15,11,2);Vt.position.set(ze,V(ze,Oe)+1.6,Oe),S.add(Vt);const wt=new $e;wt.userData={id:"rune",label:"Древний камень Феху"},wt.position.set(27,V(27,57),57);const bt=new ee(new sn(1.45,1),de(5002063,1));bt.position.y=1.2,wt.add(bt);const Je=new ee(new dn(1.05,.07,8,30),new ot({color:16766826,emissive:10052371,emissiveIntensity:3}));Je.rotation.x=Math.PI/2,Je.position.y=1.2,wt.add(Je),Pe(wt,"rune","Древний камень Феху"),Ce.push(wt),O(27,57,1.7,.1);const Pt=new $e;Pt.userData={id:"port",label:"Мост к причалу"};for(let x=-5;x<=5;x++){const b=B(3.6,.28,.82,6307882,1);b.position.set(-53,V(-53,x*1)+.5,x),Pt.add(b)}Pe(Pt,"port","Мост к причалу"),Ce.push(Pt);const dt=new $e;dt.position.set(-46,V(-46,-15),-15);for(let x=0;x<7;x++){const b=B(2.8,.24,.72,7030573,1);b.position.set(0,.3,x*.85),dt.add(b)}for(const x of[-1.2,1.2])for(let b=0;b<3;b++){const v=B(.22,1.5,.22,4139292,1);v.position.set(x,-.2,b*2.5),dt.add(v)}const bn=B(2.2,.55,4.8,4926493,1);bn.position.set(3,-.15,2.5),dt.add(bn),Pe(dt,"port","Речной причал"),Ce.push(dt);const gr=(x,b)=>{const v=new ee(new kt(.5,.5,1,12),de(6636332,1));v.position.set(x,V(x,b)+.5,b),S.add(v);for(const P of[.25,.76]){const K=new ee(new dn(.51,.045,6,18),de(3156004,.7,.1));K.rotation.x=Math.PI/2,K.position.set(x,V(x,b)+P,b),S.add(K)}},On=(x,b)=>{const v=B(1,.75,1,7359022,1);v.position.set(x,V(x,b)+.38,b),S.add(v);const P=B(.08,.82,1.05,3679770,1);P.position.set(x,V(x,b)+.38,b),S.add(P),He(x,b,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([x,b])=>gr(x,b)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([x,b])=>On(x,b));const Jr=(x,b,v)=>{const P=new $e,K=V(x,b),z=new ot({map:J,color:16777215,roughness:.96}),ie=new ee(new kt(.2*v,.36*v,4.8*v,10),z);ie.position.y=2.4*v,ie.rotation.z=(be(x,b)-.5)*.05,P.add(ie);for(let me=0;me<7;me++){const Z=(1.35+me*.5)*v,Me=me%2?1:-1,Te=new ee(new kt(.045*v,.1*v,(1.15+me*.13)*v,7),z);Te.position.set(Me*.35*v,Z,(be(me,b)-.5)*.34*v),Te.rotation.z=Me*(.72-be(me,x)*.18),Te.rotation.y=be(me+20,b)*Math.PI*2,P.add(Te)}const se=[new ot({map:te,color:2046505,roughness:.98}),new ot({map:te,color:2705458,roughness:.98}),new ot({map:te,color:3430204,roughness:.98})];for(let me=0;me<10;me++){const Z=(1.38-me/9*.72)*v,Me=new ee(new zt(Z,8,6),se[me%3]);Me.scale.set(1+.18*be(me,x),.62+.1*be(me,b),.82+.18*be(me*2,x)),Me.position.set((be(me*4,x)-.5)*.52*v,(1.75+me*.4)*v,(be(me*5,b)-.5)*.48*v),P.add(Me)}if(v>1.25){const me=new ee(new zt(.95*v,8,6),se[1]);me.scale.y=.48,me.position.set(.2*v,.95*v,-.05*v),P.add(me)}P.position.set(x,K,b),Pe(P),v>=1.15&&O(x,b,.42*v,.04)},Lt=(x,b,v,P=!1)=>{const K=new $e,z=V(x,b),ie=new to({map:J,color:16777215}),se=new ee(new kt(.32*v,.52*v,5.8*v,11),ie);se.position.y=2.9*v,se.rotation.z=(be(x,b)-.5)*.035,K.add(se);const me=P?8:6;for(let Z=0;Z<me;Z++){const Me=Z/me*Math.PI*2+be(Z,x)*.25,Te=(1.65+be(Z+30,b)*1.35)*v,ft=new ee(new kt(.075*v,.16*v,Te,8),ie);ft.position.set(Math.cos(Me)*Te*.34,(3.35+be(Z+40,x)*1.25)*v,Math.sin(Me)*Te*.34),ft.rotation.z=Math.cos(Me)*.78,ft.rotation.x=Math.sin(Me)*.78,ft.rotation.y=-Me,K.add(ft);for(let _t=0;_t<3;_t++){const Et=new ee(new zt((.42+be(_t+Z,90)*.22)*v,8,6),new to({map:te,color:_t%2?13951176:12965304})),Gt=.55+_t*.18;Et.position.set(Math.cos(Me)*Te*.62+(be(_t,Z)-.5)*.35*v,(3.55+be(Z,_t)*1.15+Gt)*v,Math.sin(Me)*Te*.62+(be(_t+4,Z)-.5)*.35*v),Et.scale.y=.72,K.add(Et)}}for(let Z=0;Z<(P?7:4);Z++){const Me=be(Z+100,x)*Math.PI*2,Te=new ee(new kt(.025*v,.055*v,(.9+be(Z,b)*.7)*v,6),ie);Te.position.set(Math.cos(Me)*1.05*v,(3.15+be(Z+5,x)*1.5)*v,Math.sin(Me)*1.05*v),Te.rotation.z=(be(Z+8,b)-.5)*.35,K.add(Te)}K.position.set(x,z,b),Pe(K),v>=1.2&&O(x,b,.62*v,.04)},jn=(x,b,v,P)=>{const K=new $e,z=new ot({color:8413252,roughness:.96}),ie=new ot({color:10188886,roughness:.96}),se=new ot({color:3155230,roughness:1}),me=new ot({color:12168600,roughness:.9}),Z=new ot({color:1512207,roughness:.25}),Me=new ee(new zt(.68,14,10),z);Me.scale.set(1.35,.78,.72),Me.position.set(0,.98*v,0),Me.scale.multiplyScalar(v),K.add(Me);const Te=new ee(new zt(.42,12,9),ie);Te.scale.set(1,.9,.86),Te.position.set(.49*v,1.04*v,0),K.add(Te);const ft=new ee(new kt(.2*v,.34*v,.98*v,10),z);ft.position.set(.5*v,1.46*v,0),ft.rotation.z=-.3,K.add(ft);const _t=new ee(new zt(.34*v,12,9),ie);_t.scale.set(1.18,.92,.78),_t.position.set(.86*v,1.82*v,0),K.add(_t);const Et=new ee(new zt(.17*v,10,7),ie);Et.scale.set(1.15,.72,.72),Et.position.set(1.16*v,1.72*v,0),K.add(Et);const Gt=new ee(new zt(.075*v,8,6),se);Gt.scale.set(1,.72,.85),Gt.position.set(1.3*v,1.72*v,0),K.add(Gt);for(const Bt of[-1,1]){const tn=new ee(new Dn(.095*v,.3*v,7),ie);tn.position.set(.77*v,2.1*v,Bt*.2*v),tn.rotation.z=-.28,tn.rotation.x=Bt*.18,K.add(tn)}for(const Bt of[-1,1]){const tn=new ee(new zt(.035*v,8,6),Z);tn.position.set(1.05*v,1.91*v,Bt*.235*v),K.add(tn);const qt=new ee(new zt(.009*v,6,4),new Ao({color:16777215}));qt.position.set(1.075*v,1.925*v,Bt*.257*v),K.add(qt)}const Sn=[];for(const Bt of[-1,1])for(const tn of[-1,1]){const qt=new $e;qt.position.set(tn*.43*v,.76*v,Bt*.34*v);const Ft=new ee(new kt(.085*v,.11*v,.43*v,7),z);Ft.position.y=-.2*v,qt.add(Ft);const Ot=new $e;Ot.position.y=-.4*v;const vn=new ee(new kt(.055*v,.075*v,.43*v,7),se);vn.position.y=-.2*v,Ot.add(vn);const ni=new ee(new zt(.075*v,7,5),se);ni.scale.set(1.15,.55,1.25),ni.position.y=-.43*v,Ot.add(ni),qt.add(Ot),K.add(qt),Sn.push(qt,Ot)}const wn=new ee(new zt(.16*v,9,7),ie);wn.scale.set(.75,1.25,.72),wn.position.set(-.9*v,1.18*v,0),K.add(wn);for(const Bt of[-1,1]){const tn=new ee(new kt(.035*v,.055*v,.55*v,7),me);tn.position.set(.69*v,2.25*v,Bt*.14*v),tn.rotation.z=Bt*.22,K.add(tn);for(let qt=0;qt<3;qt++){const Ft=new ee(new kt(.018*v,.035*v,.28*v,6),me);Ft.position.set((.56+.1*qt)*v,(2.48+.12*qt)*v,Bt*(.14+.045*qt)*v),Ft.rotation.z=Bt*(.55-.08*qt),K.add(Ft)}}K.position.set(x,V(x,b),b),K.userData={phase:P,legJoints:Sn},Pe(K),F.push({g:K,x,z:b,r:4+be(P,41)*3,speed:1.25+be(P,42)*.8,phase:P,kind:"deer"})},Yn=(x,b)=>{const v=new $e,P=de(6965552,1),K=de(3089436,1),z=new ee(new zt(.22,8,6),P);z.scale.set(1.35,.9,.9),z.position.y=.72,v.add(z);const ie=new ee(new zt(.17,8,6),P);ie.position.set(.22,.86,0),v.add(ie);for(const Z of[-1,1]){const Me=new ee(new Dn(.06,.18,6),P);Me.position.set(.17,.99,Z*.09),v.add(Me)}const se=new ee(new dn(.24,.075,7,14,Math.PI*1.65),P);se.rotation.y=Math.PI/2,se.position.set(-.22,.91,0),v.add(se);const me=new ee(new zt(.025,6,4),K);me.position.set(.35,.9,-.12),v.add(me),v.position.set(x,V(x,b),b),Pe(v,"ratatosk","Белка Рататоск"),Ce.push(v),O(x,b,.28,.02),F.push({g:v,x,z:b,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Dt=-4,Ut=69,ks=new $e;ks.userData={id:"ashgrove",label:"Роща Ясеня"};const Yi=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[x,b,v,P]of Yi)Lt(Dt+x,Ut+b,v,P);for(let x=0;x<9;x++){const b=x/9*Math.PI*2,v=4.2+be(x,1301)*2,P=new ee(new sn(.48+be(x,1302)*.24,1),de(5725014,1));P.position.set(Dt+Math.cos(b)*v,V(Dt+Math.cos(b)*v,Ut+Math.sin(b)*v)+.35,Ut+Math.sin(b)*v),P.scale.y=1.3+be(x,1303)*.7,P.rotation.set(be(x,1304),b,be(x,1305)),Pe(P)}const xu=new ee(new dn(5.7,.055,7,64),new ot({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));xu.rotation.x=Math.PI/2,xu.position.set(Dt,V(Dt,Ut)+.045,Ut),S.add(xu);const yu=new ee(new sn(1,1),de(5199441,1));yu.position.set(Dt,V(Dt,Ut)+.75,Ut),yu.scale.y=1.5,S.add(yu);const Mu=new ee(new dn(.62,.05,7,24),new ot({color:12757607,emissive:6637341,emissiveIntensity:1.7}));Mu.rotation.x=Math.PI/2,Mu.position.set(Dt,V(Dt,Ut)+1.45,Ut),S.add(Mu),Ce.push(ks),O(Dt,Ut,1,.08);const vr=61,_r=78,Yx=new $e;Yx.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Su=new ee(new dn(5.6,.055,7,56),new ot({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));Su.rotation.x=Math.PI/2,Su.position.set(vr,V(vr,_r)+.04,_r),S.add(Su);const Zr=new $e;Zr.position.set(vr,V(vr,_r),_r),Zr.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const x of[-2.4,2.4]){const b=B(.28,2.5,.28,4862755,1);b.position.set(x,1.25,0),Zr.add(b)}const wu=new ee(new Dn(3.4,1.65,6),de(3813673,1));wu.position.y=2.75,wu.scale.z=.72,Zr.add(wu),gt(vr,_r+1.8,.55);const qp=new ee(new sn(.8,1),de(5264976,1));qp.position.set(vr,V(vr,_r)+.65,_r+2.2),Zr.add(qp),Pe(Zr,"hoddmimir","Лес Ходдмимира"),Ce.push(Zr),O(vr,_r,1.1,.08);const $o=30,Ko=53;for(let x=0;x<4;x++)jn($o+(x-1.5)*2.6,Ko+(x%2?2.6:-2.6),1.12+be(x,1440)*.16,10+x);const $p=new ee(new sn(.72,1),de(5725526,1));$p.position.set($o,V($o,Ko)+.5,Ko),S.add($p);const Eu=new ee(new dn(5.8,.045,7,48),new ot({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Eu.rotation.x=Math.PI/2,Eu.position.set($o,V($o,Ko)+.035,Ko),S.add(Eu),Yn(Dt+5,Ut+1);const vl=12,_l=49,zs=new $e;zs.position.set(vl,V(vl,_l),_l);const Tu=new ee(new sn(1.05,1),de(5133648,1));Tu.position.y=.85,Tu.scale.y=1.55,zs.add(Tu);const Au=new ee(new dn(2.7,.055,7,48),new ot({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Au.rotation.x=Math.PI/2,Au.position.y=.06,zs.add(Au);const qx=new Lh({color:14207464,transparent:!0,opacity:.72});for(let x=0;x<3;x++){const b=[new k((x-1)*.72,.95,.15),new k((x-1)*1.25,2.9,-.35+Math.sin(x)*.25),new k((x-1)*1.75,.5,.9)];zs.add(new vg(new cn().setFromPoints(b),qx))}for(let x=0;x<7;x++){const b=new ee(new sn(.11,0),de(6708050,1)),v=-1+x*.32;b.position.set(-1.7+v*.95,.06,-1.6+x*.46),b.scale.set(1.6,.35,.8),zs.add(b)}Pe(zs,"forestEvent","Камень Трёх Нитей"),O(vl,_l,1.15,.08);const bu=(x,b,v,P,K,z,ie)=>{const se=new $e;se.position.set(x,V(x,b),b);const me=new ee(new sn(.78+ie*.08,1),de(z,1));me.position.y=.58+ie*.08,me.scale.y=1.35,se.add(me);const Z=new ee(new dn(2+ie*.18,.045,7,40),new ot({color:K,emissive:K,emissiveIntensity:1.25,transparent:!0,opacity:.62}));Z.rotation.x=Math.PI/2,Z.position.y=.045,se.add(Z);for(let Me=0;Me<3+ie;Me++){const Te=new ee(new sn(.12,0),de(7827558,1)),ft=Me/(3+ie)*Math.PI*2;Te.position.set(Math.cos(ft)*(1.15+ie*.12),.08,Math.sin(ft)*(1.15+ie*.12)),Te.scale.y=.45,se.add(Te)}Pe(se,v,P),Ce.push(se),O(x,b,.9,.08)};bu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),bu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),bu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const Cu=(x,b,v,P,K,z)=>{const ie=new $e;ie.position.set(x,V(x,b),b);const se=new ee(new dn(v,.07,8,56),new ot({color:z===1?6716259:z===2?7305088:8218965,emissive:z===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));se.rotation.x=Math.PI/2,se.position.y=.045,ie.add(se);for(let me=0;me<Math.floor(v/2);me++){const Z=be(me,x*11+b)*Math.PI*2,Me=v*.35+be(me,b*17)*v*.45,Te=new ee(new sn(.28+be(me,33)*.22,1),de(z===1?5594452:z===2?5330522:5917244,1));Te.position.set(Math.cos(Z)*Me,.22,Math.sin(Z)*Me),Te.scale.y=.65,ie.add(Te)}Pe(ie,P,K),Ce.push(ie)};Cu(70,18,8.5,"hunterCamp","Забытая стоянка",3),Cu(67,49,9.5,"deepGrove","Глубокая роща",1),Cu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const gn=75,un=30,Yt=new $e;Yt.position.set(gn,V(gn,un),un);const $x=de(5986899,1),Kp=B(7.8,.42,5.8,5591885,1);Kp.position.y=.22,Yt.add(Kp);const Jp=B(7.4,2.8,.3,6439727,1);Jp.position.set(0,1.4,-2.7),Yt.add(Jp);const Zp=B(.3,2.8,5.4,6439727,1);Zp.position.set(-3.7,1.4,0),Yt.add(Zp);const Qp=B(.3,2.8,5.4,6439727,1);Qp.position.set(3.7,1.4,0),Yt.add(Qp);const em=B(2.55,2.8,.3,6439727,1);em.position.set(-2.43,1.4,2.7),Yt.add(em);const tm=B(2.55,2.8,.3,6439727,1);tm.position.set(2.43,1.4,2.7),Yt.add(tm);const nm=B(2.3,.72,.3,6439727,1);nm.position.set(0,2.44,2.7),Yt.add(nm);const im=B(.16,2.18,.34,2826523,1);im.position.set(-.66,1.28,2.72),Yt.add(im);const rm=B(.16,2.18,.34,2826523,1);rm.position.set(.66,1.28,2.72),Yt.add(rm);const sm=B(1.48,.16,.34,2826523,1);sm.position.set(0,2.34,2.72),Yt.add(sm);const Bs=new $e;Bs.position.set(-.57,0,2.72),Yt.add(Bs);const om=B(1.14,2.05,.12,3154457,1);om.position.set(.57,1.28,0),Bs.add(om);const am=new ee(new zt(.08,8,6),de(11831883,1));am.position.set(.86,1.25,.1),Bs.add(am);const Kx=new ot({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const x of[-2.35,2.35]){const b=B(1.25,1,.12,2826523,1);b.position.set(x,1.72,2.78),Yt.add(b);const v=new ee(new Nn(.98,.72,.06),Kx);v.position.set(x,1.72,2.86),Yt.add(v);const P=B(.07,.78,.1,2826523,1);P.position.set(x,1.72,2.91),Yt.add(P);const K=B(1.08,.07,.1,2826523,1);K.position.set(x,1.72,2.91),Yt.add(K)}const lm=new ot({map:Ge,color:2697767,roughness:.98,side:gi}),Jo=new ee(new Ss(4.25,6.25),lm),Zo=new ee(new Ss(4.25,6.25),lm);Jo.rotation.x=Math.PI/2,Zo.rotation.x=Math.PI/2,Jo.rotation.z=.62,Zo.rotation.z=-.62,Jo.position.set(-1.02,3.95,0),Zo.position.set(1.02,3.95,0),Yt.add(Jo,Zo);const Ru=B(.22,.22,6.45,2695965,1);Ru.position.y=4.75,Yt.add(Ru);const Pu=new ee(new Nn(.48,1.35,.48),$x);Pu.position.set(1.55,4.8,-.65),Yt.add(Pu);const Lu=B(.62,.1,.62,3420461,1);Lu.position.set(1.55,5.48,-.65),Yt.add(Lu);const cm=B(2.35,.18,1,6636845,1);cm.position.set(0,.62,3.15),Yt.add(cm);const um=B(1.55,.16,.48,5849131,1);um.position.set(0,.3,3.58),Yt.add(um),Pe(Yt,"heroHome","Домик героя"),Ce.push(Yt),He(gn,un-2.72,7.4,.3,0,.05),He(gn-3.72,un,.3,5.45,0,.05),He(gn+3.72,un,.3,5.45,0,.05),He(gn-2.43,un+2.72,2.55,.3,0,.05),He(gn+2.43,un+2.72,2.55,.3,0,.05);const Kt=new $e;Kt.position.set(gn,V(gn,un),un),Kt.visible=!1;const dm=B(7,.16,5,4928548,1);dm.position.y=.5,Kt.add(dm);const fm=B(7,2.65,.18,4139808,1);fm.position.set(0,1.8,-2.45),Kt.add(fm);const hm=B(.18,2.65,4.9,4139808,1);hm.position.set(-3.45,1.8,0),Kt.add(hm);const pm=B(.18,2.65,4.9,4139808,1);pm.position.set(3.45,1.8,0),Kt.add(pm);const mm=B(2.35,2.65,.18,4139808,1);mm.position.set(-2.42,1.8,2.45),Kt.add(mm);const gm=B(2.35,2.65,.18,4139808,1);gm.position.set(2.42,1.8,2.45),Kt.add(gm);const vm=B(2.5,.04,2.1,7162673,1);vm.position.set(-.15,.6,.25),Kt.add(vm);const _m=B(1.65,.65,2.15,4008478,1);_m.position.set(-2.15,.88,-1.25),Kt.add(_m);const xm=B(1.48,.12,1.35,7033152,1);xm.position.set(-2.15,1.27,-.92),Kt.add(xm);const ym=B(1.28,.18,.46,11903114,1);ym.position.set(-2.15,1.38,-1.95),Kt.add(ym);const Mm=B(1.65,.12,1.05,5255969,1);Mm.position.set(.85,1.15,-.15),Kt.add(Mm);for(const[x,b]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const v=B(.1,.7,.1,3679515,1);v.position.set(x,.72,b),Kt.add(v)}const Sm=B(1.25,.8,.72,5978660,1);Sm.position.set(2.1,.95,-1.7),Kt.add(Sm);const wm=B(1.9,.14,.45,5978660,1);wm.position.set(1.35,2,-2.25),Kt.add(wm);for(const x of[.75,1.35,1.95]){const b=new ee(new kt(.08,.1,.35,8),de(7304016,1));b.position.set(x,2.24,-2.22),Kt.add(b)}const Em=B(1.35,.55,.7,5920078,1);Em.position.set(2.15,.78,.95),Kt.add(Em);const Tm=new ee(new Dn(.28,.72,8),new ot({color:16744744,emissive:16731402,emissiveIntensity:4}));Tm.position.set(2.15,1.42,.95),Kt.add(Tm);const Am=new _a(16747068,2.2,8,2);Am.position.set(2.15,1.7,.95),Kt.add(Am),Pe(Kt,"heroHomeInterior","Дом героя — внутри"),Ce.push(Kt);const Qr=new $e;Qr.position.set(gn,V(gn,un),un);const Du=new ee(new dn(6.2,.055,7,48),new ot({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Du.rotation.x=Math.PI/2,Du.position.y=.035,Qr.add(Du);for(const[x,b]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const v=B(.18,1,.18,4797735,1);v.position.set(x,.5,b),Qr.add(v)}for(const x of[-2.4,2.9]){const b=B(10.2,.12,.12,6308139,1);b.position.set(0,.59,x),Qr.add(b)}const Jx=de(6906972,1);for(let x=0;x<7;x++){const b=new ee(new kt(.32,.4,.12,7),Jx);b.position.set(0,.08,4.1+x*.72),b.rotation.y=x*.4,Qr.add(b)}gt(gn-2.4,un+4.8,.48).scale.setScalar(.72),Pe(Qr,"heroHomeYard","Двор домика героя"),Ce.push(Qr),gt(70,18,.75).scale.setScalar(.72);const bm=new ee(new kt(.65,.8,.7,7),de(5327426,1));bm.position.set(70,V(70,18)+.35,16.5),S.add(bm);for(const[x,b]of[[68,20],[72,20],[68,16],[72,16]]){const v=B(.16,1.15,.16,4797735,1);v.position.set(x,V(x,b)+.57,b),S.add(v)}const xl=new $e;xl.position.set(52,V(52,7),7);const Nu=new ee(new kt(.5,.62,7,8),new to({map:J,color:4995371}));Nu.rotation.z=Math.PI/2,Nu.position.y=.5,xl.add(Nu);const Iu=new ee(new kt(.53,.53,.12,12),de(7693389,1));Iu.rotation.z=Math.PI/2,Iu.position.set(3.5,.5,0),xl.add(Iu),S.add(xl);for(let x=0;x<7;x++){const b=new ee(new sn(.14,0),de(6913394,1)),v=x/7*Math.PI*2;b.position.set(67+Math.cos(v)*4,.12+V(67+Math.cos(v)*4,49+Math.sin(v)*4),49+Math.sin(v)*4),S.add(b)}for(let x=0;x<95;x++){const b=be(x,77)*Math.PI*2,v=58+be(x,91)*32,P=Math.cos(b)*v,K=Math.sin(b)*v+2,ie=[[Dt,Ut,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([se,me,Z])=>Math.hypot(P-se,K-me)<Z);Math.abs(P+57)>9&&!ie&&Jr(P,K,.78+be(x,13)*.82)}Lt(-10,18,1.55,!1),Lt(13,24,1.7,!1),Lt(-31,-12,2.15,!0);for(let x=0;x<110;x++){const b=be(x,701)*Math.PI*2,v=15+be(x,702)*50,P=Math.cos(b)*v,K=Math.sin(b)*v+3;if(Math.abs(P)<10&&Math.abs(K)<16)continue;const z=new $e;z.position.set(P,V(P,K),K);for(let ie=0;ie<3;ie++){const se=new ee(new Dn(.025,.38+be(ie,x)*.28,4),new to({color:ie===1?5466175:4282935}));se.position.set((ie-1)*.09,.18,(be(ie*3,x)-.5)*.12),se.rotation.z=(ie-1)*.22,z.add(se)}S.add(z)}for(let x=0;x<80;x++){const b=-88+be(x,101)*176,v=-88+be(x,111)*176;if(Math.hypot(b,v+2)>30){const P=new ee(new Dn(.08,.55+be(x,121)*.7,5),new to({color:4941888}));P.position.set(b,V(b,v)+.3,v),S.add(P)}}const es=new $e;es.position.set(29,V(29,25),25),es.userData={id:"tower",label:"Сторожевая башня"};for(const x of[-2,2])for(const b of[-2,2]){const v=B(.35,7,.35,3942685,1);v.position.set(x,3.5,b),es.add(v)}const Cm=B(5,.35,5,6833965,1);Cm.position.y=5.8,es.add(Cm);const Rm=new ee(new Dn(3.8,2.7,4),de(2696482,1));Rm.position.y=8,es.add(Rm),Pe(es,"tower","Сторожевая башня"),Ce.push(es),He(29,25,4.8,4.8,0,.08);const Qo=(x,b,v,P,K,z)=>{const ie=new $e;ie.userData={id:v,label:P,phase:z,baseX:x,baseZ:b};const se=new ee(new zn(.32,.78,4,8),de(K,.9));se.position.y=.85,ie.add(se);const me=new ee(new zt(.25,12,8),de(13210736,.9));me.position.y=1.58,ie.add(me);const Z=B(.7,.9,.15,2565407,1);Z.position.set(0,.82,-.27),ie.add(Z),ie.position.set(x,V(x,b),b),Pe(ie,v,P),Ce.push(ie),rn.push(ie)};Qo(9,-8,"elder","Старейшина",7558719,.4),Qo(-6,-3,"blacksmith","Кузнец",6044459,1.5),Qo(21,1,"hunter","Охотник",4215359,2.4),Qo(5,10,"villager","Житель Мидгарда",5858125,3.4),Qo(-16,4,"villager2","Житель деревни",6638394,4.2);const Zx=new Ao({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Uu=new $e;for(let x=0;x<34;x++){const b=new ee(new zt(.9+be(x,810)*2.2,8,6),Zx);b.position.set(-88+be(x,811)*176,1.8+be(x,812)*2.2,-72+be(x,813)*144),Uu.add(b)}S.add(Uu);const ts=t3(t);S.add(ts);const qi=ts.userData.anim,Pm=new d2,Fu=new Ye,Lm=x=>{var P,K,z,ie;if((K=(P=x.target)==null?void 0:P.closest)!=null&&K.call(P,".mid3d-ui"))return;const b=H.domElement.getBoundingClientRect();Fu.x=(x.clientX-b.left)/b.width*2-1,Fu.y=-((x.clientY-b.top)/b.height)*2+1,Pm.setFromCamera(Fu,I);const v=Pm.intersectObjects(Ce,!0)[0];if(v){let se=v.object;for(;se.parent&&!((z=se.userData)!=null&&z.id);)se=se.parent;(ie=se.userData)!=null&&ie.id&&e(se.userData.id)}};H.domElement.addEventListener("pointerup",Lm);const Qx=x=>{m.current=x,g(x),l(""),Kt.visible=x,Jo.visible=!x,Zo.visible=!x,Ru.visible=!x,Pu.visible=!x,Lu.visible=!x,x?(o.current.x=gn,o.current.z=un+.95,u.current.x=0,u.current.z=-1,Bs.rotation.y=-Math.PI/2):(o.current.x=gn,o.current.z=un+3.75,u.current.x=0,u.current.z=1,Bs.rotation.y=0),ts.position.set(o.current.x,V(o.current.x,o.current.z)+.04,o.current.z)};_.current=Qx;const e1=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:vl,z:_l,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],Dm=()=>{const x=Math.max(1,E.clientWidth),b=Math.max(1,E.clientHeight);I.aspect=x/b,I.updateProjectionMatrix(),H.setSize(x,b,!1)};Dm();const Nm=new ResizeObserver(Dm);Nm.observe(E);let Ou=0,Im=performance.now();const Um=x=>{const b=Math.min(.05,(x-Im)/1e3);Im=x;const v=o.current,P=Math.hypot(v.dx,v.dz);if(P>.05){const Z=6.2*b;qe(v,v.x+v.dx/P*Z,v.z+v.dz/P*Z),ts.rotation.y=Math.atan2(v.dx,v.dz),u.current.x=v.dx/P,u.current.z=v.dz/P,d(!0)}else d(!1);const K=V(v.x,v.z);if(ts.position.set(v.x,K+.04,v.z),qi){const Z=x*.011+qi.phase,Me=P>.05?Math.sin(Z)*.58:0,Te=P>.05?Math.sin(Z+Math.PI)*.42:0;qi.legL.rotation.x=Me,qi.legR.rotation.x=-Me,qi.armL.upper.rotation.x=Te,qi.armR.upper.rotation.x=-Te,qi.armL.elbow.rotation.x=-Math.abs(Te)*.35,qi.armR.elbow.rotation.x=-Math.abs(Te)*.35,qi.weapon.rotation.z=-.12+(P>.05?Math.sin(Z)*.035:0)}const z=u.current,ie=m.current?new k(v.x-z.x*1,K+3.65,v.z-z.z*1):new k(v.x-z.x*2,K+7.2,v.z-z.z*2+11.8);I.position.lerp(ie,m.current?.09:.055),I.lookAt(v.x+(m.current?z.x*.9:z.x*1.9),K+(m.current?1.25:1.2),v.z+(m.current?z.z*.9:z.z*1.9));let se="",me="";if(m.current)v.z>un+1.72&&(se="Дверь — выйти из дома",me="heroHomeExit");else for(const Z of e1)if(Math.hypot(v.x-Z.x,v.z-Z.z)<Z.r){se=Z.label,me=Z.id;break}l(se?`${se}|${me}`:""),Ie.forEach(Z=>{const Me=.72+.28*Math.sin(x*.0016+Z.phase);Z.mesh.scale.set(Me,Me*.42,Me);const Te=Z.mesh.material;Te.opacity=.055+.055*(.5+.5*Math.sin(x*.0016+Z.phase))}),ut.forEach(Z=>{Z.light.intensity=2+Math.sin(x*.012+Z.phase)*.5,Z.flame.scale.y=.9+Math.sin(x*.009+Z.phase)*.12}),Uu.children.forEach((Z,Me)=>{Z.position.x+=Math.sin(x*12e-5+Me)*.003,Z.position.z+=Math.cos(x*1e-4+Me)*.002}),F.forEach((Z,Me)=>{var Et,Gt;if(Z.kind==="deer"){const Sn=Z.g.position.x-ts.position.x,wn=Z.g.position.z-ts.position.z,Bt=Math.hypot(Sn,wn);if(Bt<11){const tn=((Et=Z.g.userData)==null?void 0:Et.legJoints)||[],qt=x*.014*(Z.speed||1);for(let $i=0;$i<4;$i++){const ta=tn[$i*2],na=tn[$i*2+1];ta&&(ta.rotation.z=Math.sin(qt+$i*Math.PI)*.1),na&&(na.rotation.z=Math.max(0,Math.sin(qt+$i*Math.PI))*-.18)}const Ft=Math.max(.001,Bt),Ot=Bt<5.5?.115:.075,vn=Z.g.position.x+Sn/Ft*Ot,ni=Z.g.position.z+wn/Ft*Ot,Si=vn-30,ea=ni-53;if(Math.hypot(Si,ea)<17)Z.g.position.set(vn,V(vn,ni),ni);else{const $i=Math.atan2(ea,Si),ta=30+Math.cos($i)*16,na=53+Math.sin($i)*10;Z.g.position.set(ta,V(ta,na),na)}Z.g.rotation.y=Math.atan2(wn,Sn),Z.g.position.y+=Math.sin(x*.008+Me)*.025;return}}const Te=x*.00105*Z.speed+Z.phase,ft=Z.x+Math.cos(Te)*Z.r,_t=Z.z+Math.sin(Te*.83)*Z.r*.62;if(Z.g.position.set(ft,V(ft,_t),_t),Z.g.rotation.y=Math.atan2(Math.cos(Te*.83),-Math.sin(Te)),Z.kind==="deer"){const Sn=((Gt=Z.g.userData)==null?void 0:Gt.legJoints)||[],wn=x*.014*(Z.speed||1);for(let Bt=0;Bt<4;Bt++){const tn=Sn[Bt*2],qt=Sn[Bt*2+1];tn&&(tn.rotation.z=Math.sin(wn+Bt*Math.PI)*.1),qt&&(qt.rotation.z=Math.max(0,Math.sin(wn+Bt*Math.PI))*-.18)}Z.g.position.y+=Math.sin(x*.006+Me)*.025,Z.g.rotation.x=Math.sin(x*.004+Z.phase)*.018}}),rn.forEach((Z,Me)=>{const Te=Z.userData.phase||0,ft=Z.userData.baseX,_t=Z.userData.baseZ,Et=ft+Math.sin(x*28e-5+Te)*1.6,Gt=_t+Math.cos(x*22e-5+Te)*1.1;Z.position.set(Et,V(Et,Gt),Gt),Z.rotation.y=Math.sin(x*4e-4+Te)*.5}),H.render(S,I),Ou=requestAnimationFrame(Um)};return Ou=requestAnimationFrame(Um),()=>{cancelAnimationFrame(Ou),Nm.disconnect(),H.domElement.removeEventListener("pointerup",Lm),Ie.forEach(x=>{x.mesh.geometry.dispose(),x.mesh.material.dispose()}),U.dispose(),Ve.dispose(),Ge.dispose(),H.dispose(),S.traverse(x=>{var b,v,P,K;x.isMesh&&((v=(b=x.geometry)==null?void 0:b.dispose)==null||v.call(b),Array.isArray(x.material)?x.material.forEach(z=>{var ie;return(ie=z.dispose)==null?void 0:ie.call(z)}):(K=(P=x.material)==null?void 0:P.dispose)==null||K.call(P))}),H.domElement.remove(),_.current=null}},[t.id,e,n]);const M=E=>{const S=r.current,I=s.current;if(!S||!I)return;const H=S.getBoundingClientRect(),$=H.left+H.width/2,re=H.top+H.height/2,ae=48;let V=E.clientX-$,j=E.clientY-re;const U=Math.hypot(V,j);U>ae&&(V=V/U*ae,j=j/U*ae),I.style.transform=`translate(${V}px,${j}px)`,o.current.dx=V/ae,o.current.dz=j/ae},C=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},R=E=>{var j,U;const S=r.current;if(!S)return;const I=E.target;if((j=I.closest)!=null&&j.call(I,".mid3d-action")||(U=I.closest)!=null&&U.call(I,".mid3d-interact"))return;const H=S.getBoundingClientRect(),$=26;E.clientX>=H.left-$&&E.clientX<=H.right+$&&E.clientY>=H.top-78&&E.clientY<=H.bottom+26&&(E.currentTarget.setPointerCapture(E.pointerId),M(E))},L=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&M(E)},N=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId),C()};return G.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:R,onPointerMove:L,onPointerUp:N,onPointerCancel:N,onContextMenu:E=>E.preventDefault(),children:[G.jsxs("div",{className:"mid3d-ui mid3d-top",children:[G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"МИДГАРД"}),G.jsx("span",{children:"Деревня • река • лес • святилища"})]}),G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"ᛟ"}),G.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[G.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),G.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"Камень Трёх Нитей"}),G.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>y(!1),children:"Продолжить путь"})]}),f&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"🜂 Круг Силы"}),G.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[E,S]=a.split("|"),I=S==="heroHome"||S==="heroHomeExit";return G.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[G.jsx("b",{children:E}),G.jsx("span",{children:I?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),G.jsx("button",{onPointerDown:H=>H.stopPropagation(),onClick:()=>{var H,$;S==="ritual"?h(!0):S==="forestEvent"?y(!0):S==="heroHome"?(H=_.current)==null||H.call(_,!0):S==="heroHomeExit"?($=_.current)==null||$.call(_,!1):e(S)},children:I?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),G.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:G.jsx("div",{className:"mid3d-knob",ref:s})}),G.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:E=>E.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),G.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function i3(){const[t,e]=vt.useState(()=>Zg().hero?{t:"tree"}:{t:"choose"}),[n,i]=vt.useState(Zg),[r,s]=vt.useState(""),[o,a]=vt.useState(""),[l,c]=vt.useState(""),d=vt.useRef(0),[f,h]=vt.useState(null),[p,y]=vt.useState(null),[w,g]=vt.useState(!1),[u,m]=vt.useState(0),[_,M]=vt.useState(0),[C,R]=vt.useState(0),[L,N]=vt.useState(""),[E,S]=vt.useState(!1),[I,H]=vt.useState(!1),[$,re]=vt.useState(""),[ae,V]=vt.useState(.06);vt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),vt.useEffect(()=>{var O,Re,oe,le;(O=yt==null?void 0:yt.ready)==null||O.call(yt),(Re=yt==null?void 0:yt.expand)==null||Re.call(yt),(oe=yt==null?void 0:yt.setHeaderColor)==null||oe.call(yt,"#0b0f0c"),(le=yt==null?void 0:yt.setBackgroundColor)==null||le.call(yt,"#0b0f0c")},[]),vt.useEffect(()=>{if(!(yt!=null&&yt.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(yt.BackButton.show(),yt.BackButton.onClick(O)):yt.BackButton.hide(),()=>{var Re,oe;(oe=(Re=yt.BackButton)==null?void 0:Re.offClick)==null||oe.call(Re,O)}},[t,n.hero]),vt.useEffect(()=>{h(null),y(null),g(!1),re(""),S(!1)},[t]);const j=O=>{c(O),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},U=(O="light")=>{var Re,oe,le,qe;try{O==="success"?(oe=(Re=yt==null?void 0:yt.HapticFeedback)==null?void 0:Re.notificationOccurred)==null||oe.call(Re,"success"):(qe=(le=yt==null?void 0:yt.HapticFeedback)==null?void 0:le.impactOccurred)==null||qe.call(le,"light")}catch{}},J=O=>e(O),te=O=>{U(),e({t:"realm",id:O.id})},Se=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Fe=()=>{const O=Se();if(O<=0){j("Дозор только начался — искры ещё копятся.");return}i(Re=>({...Re,sparks:Re.sparks+O,watch:Date.now()})),U("success"),j("Дозор завершён: +"+O+" ✨")},st=()=>{if(n.gift===xa())return;const Re=(n.gift?Math.round((Date.parse(xa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,oe=Yd[Re-1];i(le=>({...le,sparks:le.sparks+oe,gift:xa(),streak:Re})),U("success"),j("Дар Древа, день "+Re+": +"+oe+" ✨")},Pe=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),U("success"),j("Путь начинается, "+o+"!"),e({t:"tree"}))},de=n.hero?qd.find(O=>O.id===n.hero.id):null,B=O=>Math.floor(Math.random()*O),fe=O=>n.trials.filter(Re=>Re.startsWith(O+":")).length,Ne=O=>{if(n.artifacts.includes(O.id)){j("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:O.id})},Ze=(O,Re,oe)=>{const le=Re===2;i(qe=>({...qe,sparks:qe.sparks+oe+(le?30:0),trials:[...qe.trials,O+":"+Re],artifacts:le?[...qe.artifacts,O]:qe.artifacts})),le&&(U("success"),j("Мир пройден! Артефакт: "+Kd[O]))},Ce=(O,Re)=>{if(f!==null)return;const oe=fe(O),le=$d[O][oe];if(Re===le.c){h(Re),U("success");const qe=12+oe*3+((de==null?void 0:de.id)==="dwarf"?6:0);j("Верно! Сундук хозяина: +"+qe+" ✨"),Ze(O,oe,qe);return}if(n.powers.includes("mimirEye")){h(le.c),i(Qe=>({...Qe,powers:Qe.powers.filter(D=>D!=="mimirEye")}));const qe=8+oe*2;U("success"),j("Око Мимира раскрыло истину. Ответ исправлен. +"+qe+" ✨"),Ze(O,oe,qe);return}if(n.powers.includes("nornThread")){h(Re),i(Qe=>({...Qe,powers:Qe.powers.filter(D=>D!=="nornThread")}));const qe=6+oe*2;U("success"),j("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+qe+" ✨"),Ze(O,oe,qe);return}h(Re),U(),N(ya[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ut=O=>{const Re=fe(O),oe=$d[O][Re],le=oe.a.findIndex((qe,Qe)=>Qe!==oe.c&&Qe!==p);y(le),g(!0),U(),j("Шёпот ветров уносит один ответ...")},rn=O=>{const Re=ya[O],oe=n.powers.includes("ashBreath");m(Re.hp),M(de.hp+(oe?25:0)),R(de.en+(oe?2:0)),re(""),S(!1),H(!1),N(oe?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Re.name+" поднимает оружие!"),oe&&i(le=>({...le,powers:le.powers.filter(qe=>qe!=="ashBreath")})),e({t:"fight",id:O})},F=(O,Re)=>{if($)return;const oe=ya[O],le=fe(O);let qe=0,Qe="",D=C,T=E;if(Re==="hit"&&(qe=de.str+B(4),n.powers.includes("fireOath")&&(qe+=5,i(Ie=>({...Ie,powers:Ie.powers.filter(ge=>ge!=="fireOath")})),Qe="Огненный обет! "),de.id==="berserk"&&_<=de.hp/2&&(qe*=2,Qe+="Медвежья ярость! "),Qe+="Ты бьёшь: "+de.weapon+" — −"+qe+" хозяину."),Re==="rune"){if(C<4){j("Мало энергии для заклинания!");return}D=C-4,qe=de.en+2+B(5),Qe="Руническое заклинание вспыхивает: −"+qe+" хозяину."}Re==="shield"&&(T=!0,Qe="Ты поднимаешь щит — удар ослабнет.");const q=u-qe;if(q<=0){m(0),R(D),re("win");const Ie=8+le*2;N("Хозяин повержен! Награда: +"+Ie+" ✨"),Ze(O,le,Ie);return}let ue=oe.atk+B(3),pe="";T&&(ue=Math.ceil(ue*.3),pe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(ue=Math.ceil(ue*.65),i(Ie=>({...Ie,powers:Ie.powers.filter(ge=>ge!=="iceOath")})),pe+=" Ледяной обет сковал удар врага."),de.id==="dwarf"&&(ue=Math.ceil(ue*.75));let ce=_;if(de.id==="viking"&&!I&&ce-ue<=0&&(H(!0),ue=0,pe=" Крылья бури поглотили смертельный удар!"),ce=ce-ue,m(q),M(Math.max(0,ce)),R(D),S(!1),ce<=0&&n.powers.includes("yggdrasilCall")){i(Ie=>({...Ie,powers:Ie.powers.filter(ge=>ge!=="yggdrasilCall")})),M(30),N(Qe+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(ce<=0){re("lose"),i(Ie=>({...Ie,sparks:Math.max(0,Ie.sparks-10)})),N(Qe+" "+oe.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}N(Qe+pe+" "+oe.name+" отвечает: −"+ue+".")},St=O=>{fe(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},nt=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,He=O=>O==="tree"?{t:"tree"}:{t:O};return G.jsxs("div",{className:"app",children:[G.jsx("style",{children:QA}),G.jsxs("div",{className:"hdr",children:[t.t==="tree"&&G.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&G.jsx("button",{className:"back",onClick:()=>J({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&G.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&G.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&G.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&G.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&G.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&G.jsx("div",{className:"title",children:"⚔ Бой"}),G.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&G.jsxs("div",{className:"scroll choose-screen",children:[G.jsxs("div",{className:"card center choose-intro",children:[G.jsx("div",{className:"big",children:"ᛉ"}),G.jsx("div",{className:"qhead2",children:"Выбери героя"}),G.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),qd.map(O=>G.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),U()},children:[G.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Ar,{name:O.img,className:"himg"})}),G.jsxs("span",{className:"hinfo",children:[G.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),G.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),G.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),G.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&G.jsxs("div",{className:"card",children:[G.jsx("div",{className:"qhead2",children:"Имя героя"}),G.jsx("div",{className:"chips",children:(qd.find(O=>O.id===r).gender==="f"?JA:ZA).map(O=>G.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),U()},children:O},O))})]}),G.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Pe,children:"Вступить на путь"})]}),t.t==="tree"&&G.jsxs("div",{className:"maparea",children:[G.jsx("div",{className:"mapwrap",children:G.jsxs("div",{className:"mapcanvas",children:[G.jsx(Ar,{name:"tree",className:"mapimg"}),ac.map(O=>G.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>te(O),children:[G.jsxs("div",{className:"amulet-wrap",children:[G.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),G.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),G.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),G.jsx("div",{className:"fadeT"}),G.jsx("div",{className:"fadeB"}),G.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&de&&n.hero&&G.jsxs("button",{className:"herobar",onClick:()=>J({t:"hero"}),children:[G.jsxs("span",{className:"hbface",style:{borderColor:de.color,color:de.color},children:[G.jsx(Ar,{name:de.img,className:"hbimg"}),de.sym]}),G.jsxs("span",{className:"hbname",children:[n.hero.name,G.jsx("i",{children:de.race})]}),G.jsxs("span",{className:"hbst",children:["⚔ ",de.str," ✨ ",de.en," ⏳ ",Se()]}),G.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=ac.find(Re=>Re.id===t.id);if(O.id==="midgard"){if(!de)return null;const Re=oe=>{if(U(),oe==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?j("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(le=>({...le,sparks:le.sparks+20,done:[...new Set([...le.done,"forest:present:reward"])]})),U("success"),j("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):j("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(oe==="norns"){j("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(oe==="forge"||oe==="blacksmith"){j("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(oe==="house"||oe==="elder"){j("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(oe==="port"){j("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(oe==="rune"){j("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(oe==="ashgrove"){j("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(oe==="runefield"){j("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(oe==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?j("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(le=>({...le,sparks:le.sparks+20,done:[...new Set([...le.done,"forest:past:reward"])]})),U("success"),j("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):j("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(oe==="forestCache"){n.done.includes("forest:cache")?j("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(le=>({...le,sparks:le.sparks+18,done:[...new Set([...le.done,"forest:cache"])]})),U("success"),j("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(oe==="forestWhisper"){n.done.includes("forest:whisper")?j("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(le=>({...le,sparks:le.sparks+16,done:[...new Set([...le.done,"forest:whisper"])]})),U("success"),j("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(oe==="forestThread"){n.done.includes("forest:thread")?j("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(le=>({...le,sparks:le.sparks+22,done:[...new Set([...le.done,"forest:thread"])]})),U("success"),j("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(oe==="heroHome"){j("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(oe==="hunterCamp"){n.done.includes("forest:camp")?j("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(le=>({...le,sparks:le.sparks+14,done:[...new Set([...le.done,"forest:camp"])]})),U("success"),j("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(oe==="deepGrove"){n.done.includes("forest:grove")?j("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(le=>({...le,sparks:le.sparks+17,done:[...new Set([...le.done,"forest:grove"])]})),U("success"),j("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(oe==="fallenAsh"){n.done.includes("forest:ash")?j("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(le=>({...le,sparks:le.sparks+21,done:[...new Set([...le.done,"forest:ash"])]})),U("success"),j("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(oe==="deer"){j("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(oe==="hoddmimir"){j("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(oe==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?j("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(le=>({...le,sparks:le.sparks+20,done:[...new Set([...le.done,"forest:future:reward"])]})),U("success"),j("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):j("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(oe==="forestEvent"){n.done.includes("forest:choice")&&j("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(oe==="forestEvent:past"){i(le=>({...le,sparks:le.sparks+12,done:[...new Set([...le.done,"forest:choice","forest:past"])]})),U("success"),j("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(oe==="forestEvent:present"){i(le=>({...le,sparks:le.sparks+12,done:[...new Set([...le.done,"forest:choice","forest:present"])]})),U("success"),j("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(oe==="forestEvent:future"){i(le=>({...le,sparks:le.sparks+12,done:[...new Set([...le.done,"forest:choice","forest:future"])]})),U("success"),j("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(oe==="event"){j("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(oe.startsWith("ritual:")){const le=oe.slice(7),qe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},D={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[le];if(!D)return;if(n.powers.includes(D)){j(qe[le]+" уже пробуждён. Его сила ждёт своего часа.");return}i(q=>({...q,powers:[...new Set([...q.powers,D])],done:[...new Set([...q.done,"ritual:"+le])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),j(T[le]);return}};return G.jsx(n3,{h:de,on:Re,eventDone:n.done.includes("forest:choice")})}return G.jsxs("div",{className:"content",children:[G.jsx(Ar,{name:O.id,className:"bgimg"}),G.jsx("div",{className:"veil"}),G.jsxs("div",{className:"banner",children:[G.jsx("span",{className:"bemoji",children:O.emoji}),G.jsxs("div",{children:[G.jsx("div",{className:"bname",children:O.name}),G.jsx("div",{className:"btag",children:O.tag})]})]}),G.jsxs("button",{className:"gate",onClick:()=>Ne(O),children:[G.jsxs("span",{className:"gwrap",children:[G.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),G.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),G.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=ac.find(qe=>qe.id===t.id),Re=ya[O.id],oe=fe(O.id);if(oe>=3)return G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏺"}),G.jsx("div",{className:"qhead2",children:"Мир покорён!"}),G.jsxs("p",{className:"dim",children:["Артефакт: ",Kd[O.id]]}),G.jsx("button",{className:"btn gold",onClick:()=>J({t:"realm",id:O.id}),children:"К вратам"})]})});const le=$d[O.id][oe];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"mhead",children:[G.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Ar,{name:Qg[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"mname2",style:{color:O.color},children:Re.name}),G.jsxs("span",{className:"mtitle",children:[Re.title," • испытание ",oe+1," из 3"]})]}),oe===0&&G.jsxs("div",{className:"greet",children:["«",Re.greet,"»"]}),G.jsxs("div",{className:"cloud",children:[G.jsx("div",{className:"riddle",children:le.q}),le.a.map((qe,Qe)=>G.jsx("button",{className:"ans"+(f!==null?Qe===le.c?" good":Qe===f?" bad":" off":p===Qe?" off":""),onClick:()=>Ce(O.id,Qe),children:qe},Qe)),(de==null?void 0:de.id)==="elf"&&!w&&f===null&&G.jsx("button",{className:"btn rune",onClick:()=>ut(O.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===le.c?G.jsx("button",{className:"btn gold",onClick:()=>St(O.id),children:"Открыть сундук →"}):G.jsx("button",{className:"btn",onClick:()=>rn(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=ac.find(oe=>oe.id===t.id),Re=ya[O.id];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"duel",children:[G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Ar,{name:Qg[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"dname",style:{color:O.color},children:Re.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Re.hp*100)+"%",background:O.color}})}),G.jsxs("span",{className:"dnum",children:[u,"/",Re.hp]})]}),G.jsx("span",{className:"dvs",children:"⚔"}),G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:de.color,color:de.color},children:[G.jsx(Ar,{name:de.img,className:"himg"}),de.sym]}),G.jsx("span",{className:"dname",style:{color:de.color},children:n.hero.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,_/de.hp*100)+"%",background:"#7ee787"}})}),G.jsx("span",{className:"denergy",children:Array.from({length:de.en}).map((oe,le)=>G.jsx("span",{className:"pip"+(le<C?" on":"")},le))})]})]}),G.jsx("div",{className:"flog",children:L}),!$&&G.jsxs("div",{className:"acts",children:[G.jsxs("button",{className:"btn gold",onClick:()=>F(O.id,"hit"),children:["⚔ Удар: ",de.weapon]}),G.jsx("button",{className:"btn rune",onClick:()=>F(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),G.jsx("button",{className:"btn shield",onClick:()=>F(O.id,"shield"),children:"🛡 Щит"})]}),$==="win"&&G.jsx("button",{className:"btn gold",onClick:()=>St(O.id),children:"Забрать награду →"}),$==="lose"&&G.jsx("button",{className:"btn ghost",onClick:()=>J({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&de&&n.hero&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("span",{className:"hface bigface",style:{borderColor:de.color,color:de.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Ar,{name:de.img,className:"himg"})}),G.jsxs("div",{className:"qhead2",style:{color:de.color},children:[n.hero.name," • ",de.race]}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["⚔ ",de.str]}),G.jsx("span",{children:"сила"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",de.en]}),G.jsx("span",{children:"энергия"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["❤ ",de.hp]}),G.jsx("span",{children:"здоровье"})]})]}),G.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",G.jsx("b",{children:de.weapon})]}),G.jsxs("div",{className:"hrow",children:["🌀 ",de.ability,": ",de.abilityDesc]}),G.jsxs("div",{className:"hrow",children:["✨ Искр: ",G.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",G.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&G.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>Kd[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===xa(),oe=(n.gift?Math.round((Date.parse(xa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,le=O?n.streak:oe;return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🎁"}),G.jsx("div",{className:"qhead2",children:"Дар Древа"}),G.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),G.jsx("div",{className:"days",children:Yd.map((qe,Qe)=>G.jsxs("span",{className:"day"+(Qe+1===le?" on":Qe+1<le&&O?" done":""),children:[G.jsx("b",{children:qe}),"день ",Qe+1]},Qe))}),O?G.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):G.jsxs("button",{className:"btn gold",onClick:st,children:["Забрать дар +",Yd[oe-1]," ✨"]})]}),G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"⏳"}),G.jsx("div",{className:"qhead2",children:"Дозор героя"}),G.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),G.jsxs("button",{className:"btn gold",onClick:Fe,children:["Завершить дозор · +",Se()," ✨"]})]})]})})(),t.t==="hall"&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏛️"}),G.jsx("div",{className:"qhead2",children:"Чертог путника"}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",n.sparks]}),G.jsx("span",{children:"Искр"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),G.jsx("span",{children:"артефакты"})]})]}),G.jsxs("div",{className:"rank",children:["🏆 Ранг: ",KA(n.sparks)]}),n.hero&&de&&G.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",de.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&G.jsx("div",{className:"nav",children:$A.map(O=>G.jsxs("button",{className:"navbtn"+(nt(O.id)?" on":""),onClick:()=>J(He(O.id)),children:[G.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&G.jsx("div",{className:"toast",children:l})]})}hx(document.getElementById("root")).render(G.jsx(i3,{}));
