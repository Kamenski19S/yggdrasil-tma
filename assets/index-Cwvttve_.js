(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zg={exports:{}},$c={},Jg={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),Zx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),Qx=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),r1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),o1=Symbol.for("react.lazy"),Dm=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev=Object.assign,tv={};function No(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Qg}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nv(){}nv.prototype=No.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Qg}var Ph=Rh.prototype=new nv;Ph.constructor=Rh;ev(Ph,No.prototype);Ph.isPureReactComponent=!0;var Nm=Array.isArray,iv=Object.prototype.hasOwnProperty,Lh={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:t,key:s,ref:o,props:r,_owner:Lh.current}}function l1(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function c1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c1(""+t.key):e.toString(36)}function tc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case Zx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Du(o,0):i,Nm(r)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),tc(r,e,n,"",function(c){return c})):r!=null&&(Dh(r)&&(r=l1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Im,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Du(s,a);o+=tc(s,e,n,l,r)}else if(l=a1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Du(s,a++),o+=tc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var i=[],r=0;return tc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function u1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vn={current:null},nc={transition:null},d1={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:nc,ReactCurrentOwner:Lh};function ov(){throw Error("act(...) is not supported in production builds of React.")}vt.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};vt.Component=No;vt.Fragment=Jx;vt.Profiler=e1;vt.PureComponent=Rh;vt.StrictMode=Qx;vt.Suspense=r1;vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;vt.act=ov;vt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ev({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iv.call(e,l)&&!rv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qa,type:t.type,key:r,ref:s,props:i,_owner:o}};vt.createContext=function(t){return t={$$typeof:n1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t1,_context:t},t.Consumer=t};vt.createElement=sv;vt.createFactory=function(t){var e=sv.bind(null,t);return e.type=t,e};vt.createRef=function(){return{current:null}};vt.forwardRef=function(t){return{$$typeof:i1,render:t}};vt.isValidElement=Dh;vt.lazy=function(t){return{$$typeof:o1,_payload:{_status:-1,_result:t},_init:u1}};vt.memo=function(t,e){return{$$typeof:s1,type:t,compare:e===void 0?null:e}};vt.startTransition=function(t){var e=nc.transition;nc.transition={};try{t()}finally{nc.transition=e}};vt.unstable_act=ov;vt.useCallback=function(t,e){return Vn.current.useCallback(t,e)};vt.useContext=function(t){return Vn.current.useContext(t)};vt.useDebugValue=function(){};vt.useDeferredValue=function(t){return Vn.current.useDeferredValue(t)};vt.useEffect=function(t,e){return Vn.current.useEffect(t,e)};vt.useId=function(){return Vn.current.useId()};vt.useImperativeHandle=function(t,e,n){return Vn.current.useImperativeHandle(t,e,n)};vt.useInsertionEffect=function(t,e){return Vn.current.useInsertionEffect(t,e)};vt.useLayoutEffect=function(t,e){return Vn.current.useLayoutEffect(t,e)};vt.useMemo=function(t,e){return Vn.current.useMemo(t,e)};vt.useReducer=function(t,e,n){return Vn.current.useReducer(t,e,n)};vt.useRef=function(t){return Vn.current.useRef(t)};vt.useState=function(t){return Vn.current.useState(t)};vt.useSyncExternalStore=function(t,e,n){return Vn.current.useSyncExternalStore(t,e,n)};vt.useTransition=function(){return Vn.current.useTransition()};vt.version="18.3.1";Jg.exports=vt;var mt=Jg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=mt,h1=Symbol.for("react.element"),p1=Symbol.for("react.fragment"),m1=Object.prototype.hasOwnProperty,g1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)m1.call(e,i)&&!v1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:h1,type:t,key:s,ref:o,props:r,_owner:g1.current}}$c.Fragment=p1;$c.jsx=av;$c.jsxs=av;Zg.exports=$c;var B=Zg.exports,lv={exports:{}},si={},cv={exports:{}},uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var te=O.length;O.push($);e:for(;0<te;){var Se=te-1>>>1,Ie=O[Se];if(0<r(Ie,$))O[Se]=$,O[te]=Ie,te=Se;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var $=O[0],te=O.pop();if(te!==$){O[0]=te;e:for(var Se=0,Ie=O.length,Pe=Ie>>>1;Se<Pe;){var me=2*(Se+1)-1,X=O[me],Z=me+1,fe=O[Z];if(0>r(X,te))Z<Ie&&0>r(fe,X)?(O[Se]=fe,O[Z]=te,Se=Z):(O[Se]=X,O[me]=te,Se=me);else if(Z<Ie&&0>r(fe,te))O[Se]=fe,O[Z]=te,Se=Z;else break e}}return $}function r(O,$){var te=O.sortIndex-$.sortIndex;return te!==0?te:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=O)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function x(O){if(M=!1,v(O),!_)if(n(l)!==null)_=!0,se(b);else{var $=n(c);$!==null&&F(x,$.startTime-O)}}function b(O,$){_=!1,M&&(M=!1,u(N),N=-1),p=!0;var te=h;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||O&&!D());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,h=f.priorityLevel;var Ie=Se(f.expirationTime<=$);$=t.unstable_now(),typeof Ie=="function"?f.callback=Ie:f===n(l)&&i(l),v($)}else i(l);f=n(l)}if(f!==null)var Pe=!0;else{var me=n(c);me!==null&&F(x,me.startTime-$),Pe=!1}return Pe}finally{f=null,h=te,p=!1}}var R=!1,P=null,N=-1,T=5,y=-1;function D(){return!(t.unstable_now()-y<T)}function V(){if(P!==null){var O=t.unstable_now();y=O;var $=!0;try{$=P(!0,O)}finally{$?W():(R=!1,P=null)}}else R=!1}var W;if(typeof m=="function")W=function(){m(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ie=le.port2;le.port1.onmessage=V,W=function(){ie.postMessage(null)}}else W=function(){g(V,0)};function se(O){P=O,R||(R=!0,W())}function F(O,$){N=g(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,se(b))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var te=h;h=$;try{return O()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=h;h=O;try{return $()}finally{h=te}},t.unstable_scheduleCallback=function(O,$,te){var Se=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Se+te:Se):te=Se,O){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=te+Ie,O={id:d++,callback:$,priorityLevel:O,startTime:te,expirationTime:Ie,sortIndex:-1},te>Se?(O.sortIndex=te,e(c,O),n(l)===null&&O===n(c)&&(M?(u(N),N=-1):M=!0,F(x,te-Se))):(O.sortIndex=Ie,e(l,O),_||p||(_=!0,se(b))),O},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(O){var $=h;return function(){var te=h;h=$;try{return O.apply(this,arguments)}finally{h=te}}}})(uv);cv.exports=uv;var _1=cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=mt,ri=_1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dv=new Set,La={};function Ps(t,e){So(t,e),So(t+"Capture",e)}function So(t,e){for(La[t]=e,t=0;t<e.length;t++)dv.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},Fm={};function S1(t){return Xd.call(Fm,t)?!0:Xd.call(Um,t)?!1:y1.test(t)?Fm[t]=!0:(Um[t]=!0,!1)}function M1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w1(t,e,n,i){if(e===null||typeof e>"u"||M1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bn[t]=new Gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bn[e]=new Gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bn[t]=new Gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bn[t]=new Gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bn[t]=new Gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bn[t]=new Gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bn[t]=new Gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bn[t]=new Gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bn[t]=new Gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Ih);bn[e]=new Gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Ih);bn[e]=new Gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Ih);bn[e]=new Gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!1,!1)});bn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,i){var r=bn.hasOwnProperty(e)?bn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w1(e,n,r,i)&&(n=null),i||r===null?S1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),pv=Symbol.for("react.offscreen"),Om=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var $t=Object.assign,Nu;function ma(t){if(Nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nu=e&&e[1]||""}return`
`+Nu+t}var Iu=!1;function Uu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ma(t):""}function E1(t){switch(t.tag){case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Js:return"Portal";case jd:return"Profiler";case Fh:return"StrictMode";case Yd:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hv:return(t.displayName||"Context")+".Consumer";case fv:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function T1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A1(t){var e=mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=A1(t))}function gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kd(t,e){var n=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vv(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function Zd(t,e){vv(t,e);var n=Xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jd(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jd(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ga=Array.isArray;function fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(ga(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function _v(t,e){var n=Xr(e.value),i=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var C1=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(C1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,ho=null,po=null;function Vm(t){if(t=nl(t)){if(typeof sf!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=eu(e),sf(t.stateNode,t.type,e))}}function wv(t){ho?po?po.push(t):po=[t]:ho=t}function Ev(){if(ho){var t=ho,e=po;if(po=ho=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function Tv(t,e){return t(e)}function Av(){}var Fu=!1;function bv(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return Tv(t,e,n)}finally{Fu=!1,(ho!==null||po!==null)&&(Av(),Ev())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var of=!1;if(ur)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){of=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{of=!1}function R1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Sa=!1,xc=null,yc=!1,af=null,P1={onError:function(t){Sa=!0,xc=t}};function L1(t,e,n,i,r,s,o,a,l){Sa=!1,xc=null,R1.apply(P1,arguments)}function D1(t,e,n,i,r,s,o,a,l){if(L1.apply(this,arguments),Sa){if(Sa){var c=xc;Sa=!1,xc=null}else throw Error(xe(198));yc||(yc=!0,af=c)}}function Ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(Ls(t)!==t)throw Error(xe(188))}function N1(t){var e=t.alternate;if(!e){if(e=Ls(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gm(r),t;if(s===i)return Gm(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function Rv(t){return t=N1(t),t!==null?Pv(t):null}function Pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pv(t);if(e!==null)return e;t=t.sibling}return null}var Lv=ri.unstable_scheduleCallback,Wm=ri.unstable_cancelCallback,I1=ri.unstable_shouldYield,U1=ri.unstable_requestPaint,en=ri.unstable_now,F1=ri.unstable_getCurrentPriorityLevel,Bh=ri.unstable_ImmediatePriority,Dv=ri.unstable_UserBlockingPriority,Sc=ri.unstable_NormalPriority,O1=ri.unstable_LowPriority,Nv=ri.unstable_IdlePriority,Kc=null,Vi=null;function k1(t){if(Vi&&typeof Vi.onCommitFiberRoot=="function")try{Vi.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ci=Math.clz32?Math.clz32:H1,z1=Math.log,B1=Math.LN2;function H1(t){return t>>>=0,t===0?32:31-(z1(t)/B1|0)|0}var vl=64,_l=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=va(a):(s&=o,s!==0&&(i=va(s)))}else o=n&~r,o!==0?i=va(o):s!==0&&(i=va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ci(e),r=1<<n,i|=t[n],e&=~r;return i}function V1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=V1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iv(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ci(e),t[e]=n}function W1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function Uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fv,Vh,Ov,kv,zv,cf=!1,xl=[],Ur=null,Fr=null,Or=null,Ia=new Map,Ua=new Map,Pr=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Qo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j1(t,e,n,i,r){switch(e){case"focusin":return Ur=Qo(Ur,t,e,n,i,r),!0;case"dragenter":return Fr=Qo(Fr,t,e,n,i,r),!0;case"mouseover":return Or=Qo(Or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,Qo(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ua.set(s,Qo(Ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Bv(t){var e=gs(t.target);if(e!==null){var n=Ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Cv(n),e!==null){t.blockedOn=e,zv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rf=i,n.target.dispatchEvent(i),rf=null}else return e=nl(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function jm(t,e,n){ic(t)&&n.delete(e)}function Y1(){cf=!1,Ur!==null&&ic(Ur)&&(Ur=null),Fr!==null&&ic(Fr)&&(Fr=null),Or!==null&&ic(Or)&&(Or=null),Ia.forEach(jm),Ua.forEach(jm)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,ri.unstable_scheduleCallback(ri.unstable_NormalPriority,Y1)))}function Fa(t){function e(r){return ea(r,t)}if(0<xl.length){ea(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ur!==null&&ea(Ur,t),Fr!==null&&ea(Fr,t),Or!==null&&ea(Or,t),Ia.forEach(e),Ua.forEach(e),n=0;n<Pr.length;n++)i=Pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&Pr.shift()}var mo=pr.ReactCurrentBatchConfig,wc=!0;function q1(t,e,n,i){var r=Dt,s=mo.transition;mo.transition=null;try{Dt=1,Gh(t,e,n,i)}finally{Dt=r,mo.transition=s}}function $1(t,e,n,i){var r=Dt,s=mo.transition;mo.transition=null;try{Dt=4,Gh(t,e,n,i)}finally{Dt=r,mo.transition=s}}function Gh(t,e,n,i){if(wc){var r=uf(t,e,n,i);if(r===null)Yu(t,e,i,Ec,n),Xm(t,i);else if(j1(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<X1.indexOf(t)){for(;r!==null;){var s=nl(r);if(s!==null&&Fv(s),s=uf(t,e,n,i),s===null&&Yu(t,e,i,Ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yu(t,e,i,null,n)}}var Ec=null;function uf(t,e,n,i){if(Ec=null,t=zh(i),t=gs(t),t!==null)if(e=Ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ec=t,null}function Hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F1()){case Bh:return 1;case Dv:return 4;case Sc:case O1:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var Nr=null,Wh=null,rc=null;function Vv(){if(rc)return rc;var t,e=Wh,n=e.length,i,r="value"in Nr?Nr.value:Nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return rc=r.slice(t,1<i?1-i:void 0)}function sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Ym(){return!1}function oi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:Ym,this.isPropagationStopped=Ym,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=oi(Io),tl=$t({},Io,{view:0,detail:0}),K1=oi(tl),ku,zu,ta,Zc=$t({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(ku=t.screenX-ta.screenX,zu=t.screenY-ta.screenY):zu=ku=0,ta=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),qm=oi(Zc),Z1=$t({},Zc,{dataTransfer:0}),J1=oi(Z1),Q1=$t({},tl,{relatedTarget:0}),Bu=oi(Q1),ey=$t({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=oi(ey),ny=$t({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iy=oi(ny),ry=$t({},Io,{data:0}),$m=oi(ry),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ay[t])?!!e[t]:!1}function jh(){return ly}var cy=$t({},tl,{key:function(t){if(t.key){var e=sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uy=oi(cy),dy=$t({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=oi(dy),fy=$t({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),hy=oi(fy),py=$t({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=oi(py),gy=$t({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=oi(gy),_y=[9,13,27,32],Yh=ur&&"CompositionEvent"in window,Ma=null;ur&&"documentMode"in document&&(Ma=document.documentMode);var xy=ur&&"TextEvent"in window&&!Ma,Gv=ur&&(!Yh||Ma&&8<Ma&&11>=Ma),Zm=" ",Jm=!1;function Wv(t,e){switch(t){case"keyup":return _y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function yy(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(Jm=!0,Zm);case"textInput":return t=e.data,t===Zm&&Jm?null:t;default:return null}}function Sy(t,e){if(eo)return t==="compositionend"||!Yh&&Wv(t,e)?(t=Vv(),rc=Wh=Nr=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gv&&e.locale!=="ko"?null:e.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!My[t.type]:e==="textarea"}function jv(t,e,n,i){wv(i),e=Tc(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wa=null,Oa=null;function wy(t){i_(t,0)}function Jc(t){var e=io(t);if(gv(e))return t}function Ey(t,e){if(t==="change")return e}var Yv=!1;if(ur){var Hu;if(ur){var Vu="oninput"in document;if(!Vu){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),Vu=typeof e0.oninput=="function"}Hu=Vu}else Hu=!1;Yv=Hu&&(!document.documentMode||9<document.documentMode)}function t0(){wa&&(wa.detachEvent("onpropertychange",qv),Oa=wa=null)}function qv(t){if(t.propertyName==="value"&&Jc(Oa)){var e=[];jv(e,Oa,t,zh(t)),bv(wy,e)}}function Ty(t,e,n){t==="focusin"?(t0(),wa=e,Oa=n,wa.attachEvent("onpropertychange",qv)):t==="focusout"&&t0()}function Ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Oa)}function by(t,e){if(t==="click")return Jc(e)}function Cy(t,e){if(t==="input"||t==="change")return Jc(e)}function Ry(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Li=typeof Object.is=="function"?Object.is:Ry;function ka(t,e){if(Li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xd.call(e,r)||!Li(t[r],e[r]))return!1}return!0}function n0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,e){var n=n0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n0(n)}}function $v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kv(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Py(t){var e=Kv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$v(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=i0(n,s);var o=i0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ly=ur&&"documentMode"in document&&11>=document.documentMode,to=null,df=null,Ea=null,ff=!1;function r0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||to==null||to!==_c(i)||(i=to,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ea&&ka(Ea,i)||(Ea=i,i=Tc(df,"onSelect"),0<i.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=to)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Gu={},Zv={};ur&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Qc(t){if(Gu[t])return Gu[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zv)return Gu[t]=e[n];return t}var Jv=Qc("animationend"),Qv=Qc("animationiteration"),e_=Qc("animationstart"),t_=Qc("transitionend"),n_=new Map,s0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){n_.set(t,e),Ps(e,[t])}for(var Wu=0;Wu<s0.length;Wu++){var Xu=s0[Wu],Dy=Xu.toLowerCase(),Ny=Xu[0].toUpperCase()+Xu.slice(1);$r(Dy,"on"+Ny)}$r(Jv,"onAnimationEnd");$r(Qv,"onAnimationIteration");$r(e_,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(t_,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function o0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,D1(i,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,c),s=l}}}if(yc)throw t=af,yc=!1,af=null,t}function zt(t,e){var n=e[vf];n===void 0&&(n=e[vf]=new Set);var i=t+"__bubble";n.has(i)||(r_(e,t,2,!1),n.add(i))}function ju(t,e,n){var i=0;e&&(i|=4),r_(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Ml]){t[Ml]=!0,dv.forEach(function(n){n!=="selectionchange"&&(Iy.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,ju("selectionchange",!1,e))}}function r_(t,e,n,i){switch(Hv(e)){case 1:var r=q1;break;case 4:r=$1;break;default:r=Gh}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bv(function(){var c=s,d=zh(n),f=[];e:{var h=n_.get(t);if(h!==void 0){var p=Xh,_=t;switch(t){case"keypress":if(sc(n)===0)break e;case"keydown":case"keyup":p=uy;break;case"focusin":_="focus",p=Bu;break;case"focusout":_="blur",p=Bu;break;case"beforeblur":case"afterblur":p=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=J1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hy;break;case Jv:case Qv:case e_:p=ty;break;case t_:p=my;break;case"scroll":p=K1;break;case"wheel":p=vy;break;case"copy":case"cut":case"paste":p=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Km}var M=(e&4)!==0,g=!M&&t==="scroll",u=M?h!==null?h+"Capture":null:h;M=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=Na(m,u),x!=null&&M.push(Ba(m,x,v)))),g)break;m=m.return}0<M.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==rf&&(_=n.relatedTarget||n.fromElement)&&(gs(_)||_[dr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?gs(_):null,_!==null&&(g=Ls(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=qm,x="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=Km,x="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:io(p),v=_==null?h:io(_),h=new M(x,m+"leave",p,n,d),h.target=g,h.relatedTarget=v,x=null,gs(d)===c&&(M=new M(u,m+"enter",_,n,d),M.target=v,M.relatedTarget=g,x=M),g=x,p&&_)t:{for(M=p,u=_,m=0,v=M;v;v=Os(v))m++;for(v=0,x=u;x;x=Os(x))v++;for(;0<m-v;)M=Os(M),m--;for(;0<v-m;)u=Os(u),v--;for(;m--;){if(M===u||u!==null&&M===u.alternate)break t;M=Os(M),u=Os(u)}M=null}else M=null;p!==null&&a0(f,h,p,M,!1),_!==null&&g!==null&&a0(f,g,_,M,!0)}}e:{if(h=c?io(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=Ey;else if(Qm(h))if(Yv)b=Cy;else{b=Ay;var R=Ty}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=by);if(b&&(b=b(t,c))){jv(f,b,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Jd(h,"number",h.value)}switch(R=c?io(c):window,t){case"focusin":(Qm(R)||R.contentEditable==="true")&&(to=R,df=c,Ea=null);break;case"focusout":Ea=df=to=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,r0(f,n,d);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":r0(f,n,d)}var P;if(Yh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else eo?Wv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Gv&&n.locale!=="ko"&&(eo||N!=="onCompositionStart"?N==="onCompositionEnd"&&eo&&(P=Vv()):(Nr=d,Wh="value"in Nr?Nr.value:Nr.textContent,eo=!0)),R=Tc(c,N),0<R.length&&(N=new $m(N,t,null,n,d),f.push({event:N,listeners:R}),P?N.data=P:(P=Xv(n),P!==null&&(N.data=P)))),(P=xy?yy(t,n):Sy(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(d=new $m("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=P))}i_(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(Ba(t,s,r)),s=Na(t,e),s!=null&&i.push(Ba(t,s,r))),t=t.return}return i}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function a0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Na(n,s),l!=null&&o.unshift(Ba(n,l,a))):r||(l=Na(n,s),l!=null&&o.push(Ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Uy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function l0(t){return(typeof t=="string"?t:""+t).replace(Uy,`
`).replace(Fy,"")}function wl(t,e,n){if(e=l0(e),l0(t)!==e&&n)throw Error(xe(425))}function Ac(){}var hf=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(zy)}:gf;function zy(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),zi="__reactFiber$"+Uo,Ha="__reactProps$"+Uo,dr="__reactContainer$"+Uo,vf="__reactEvents$"+Uo,By="__reactListeners$"+Uo,Hy="__reactHandles$"+Uo;function gs(t){var e=t[zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u0(t);t!==null;){if(n=t[zi])return n;t=u0(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[zi]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function eu(t){return t[Ha]||null}var _f=[],ro=-1;function Kr(t){return{current:t}}function Bt(t){0>ro||(t.current=_f[ro],_f[ro]=null,ro--)}function Ot(t,e){ro++,_f[ro]=t.current,t.current=e}var jr={},Fn=Kr(jr),qn=Kr(!1),ws=jr;function Mo(t,e){var n=t.type.contextTypes;if(!n)return jr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function $n(t){return t=t.childContextTypes,t!=null}function bc(){Bt(qn),Bt(Fn)}function d0(t,e,n){if(Fn.current!==jr)throw Error(xe(168));Ot(Fn,e),Ot(qn,n)}function s_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,T1(t)||"Unknown",r));return $t({},n,i)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,ws=Fn.current,Ot(Fn,t),Ot(qn,qn.current),!0}function f0(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=s_(t,e,ws),i.__reactInternalMemoizedMergedChildContext=t,Bt(qn),Bt(Fn),Ot(Fn,t)):Bt(qn),Ot(qn,n)}var ir=null,tu=!1,$u=!1;function o_(t){ir===null?ir=[t]:ir.push(t)}function Vy(t){tu=!0,o_(t)}function Zr(){if(!$u&&ir!==null){$u=!0;var t=0,e=Dt;try{var n=ir;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ir=null,tu=!1}catch(r){throw ir!==null&&(ir=ir.slice(t+1)),Lv(Bh,Zr),r}finally{Dt=e,$u=!1}}return null}var so=[],oo=0,Rc=null,Pc=0,ui=[],di=0,Es=null,sr=1,or="";function us(t,e){so[oo++]=Pc,so[oo++]=Rc,Rc=t,Pc=e}function a_(t,e,n){ui[di++]=sr,ui[di++]=or,ui[di++]=Es,Es=t;var i=sr;t=or;var r=32-Ci(i)-1;i&=~(1<<r),n+=1;var s=32-Ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,sr=1<<32-Ci(e)+r|n<<r|i,or=s+t}else sr=1<<s|n<<r|i,or=t}function $h(t){t.return!==null&&(us(t,1),a_(t,1,0))}function Kh(t){for(;t===Rc;)Rc=so[--oo],so[oo]=null,Pc=so[--oo],so[oo]=null;for(;t===Es;)Es=ui[--di],ui[di]=null,or=ui[--di],ui[di]=null,sr=ui[--di],ui[di]=null}var ii=null,ni=null,Xt=!1,Ei=null;function l_(t,e){var n=fi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function h0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ii=t,ni=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ii=t,ni=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ii=t,ni=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yf(t){if(Xt){var e=ni;if(e){var n=e;if(!h0(t,e)){if(xf(t))throw Error(xe(418));e=kr(n.nextSibling);var i=ii;e&&h0(t,e)?l_(i,n):(t.flags=t.flags&-4097|2,Xt=!1,ii=t)}}else{if(xf(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Xt=!1,ii=t}}}function p0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ii=t}function El(t){if(t!==ii)return!1;if(!Xt)return p0(t),Xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=ni)){if(xf(t))throw c_(),Error(xe(418));for(;e;)l_(t,e),e=kr(e.nextSibling)}if(p0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ni=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ni=null}}else ni=ii?kr(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=ni;t;)t=kr(t.nextSibling)}function wo(){ni=ii=null,Xt=!1}function Zh(t){Ei===null?Ei=[t]:Ei.push(t)}var Gy=pr.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function m0(t){var e=t._init;return e(t._payload)}function u_(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Vr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,x){return m===null||m.tag!==6?(m=nd(v,u.mode,x),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,x){var b=v.type;return b===Qs?d(u,m,v.props.children,x,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&m0(b)===m.type)?(x=r(m,v.props),x.ref=na(u,m,v),x.return=u,x):(x=fc(v.type,v.key,v.props,null,u.mode,x),x.ref=na(u,m,v),x.return=u,x)}function c(u,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=id(v,u.mode,x),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,x,b){return m===null||m.tag!==7?(m=Ms(v,u.mode,x,b),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=nd(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pl:return v=fc(m.type,m.key,m.props,null,u.mode,v),v.ref=na(u,null,m),v.return=u,v;case Js:return m=id(m,u.mode,v),m.return=u,m;case Cr:var x=m._init;return f(u,x(m._payload),v)}if(ga(m)||Zo(m))return m=Ms(m,u.mode,v,null),m.return=u,m;Tl(u,m)}return null}function h(u,m,v,x){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:return v.key===b?l(u,m,v,x):null;case Js:return v.key===b?c(u,m,v,x):null;case Cr:return b=v._init,h(u,m,b(v._payload),x)}if(ga(v)||Zo(v))return b!==null?null:d(u,m,v,x,null);Tl(u,v)}return null}function p(u,m,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(m,u,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return u=u.get(x.key===null?v:x.key)||null,l(m,u,x,b);case Js:return u=u.get(x.key===null?v:x.key)||null,c(m,u,x,b);case Cr:var R=x._init;return p(u,m,v,R(x._payload),b)}if(ga(x)||Zo(x))return u=u.get(v)||null,d(m,u,x,b,null);Tl(m,x)}return null}function _(u,m,v,x){for(var b=null,R=null,P=m,N=m=0,T=null;P!==null&&N<v.length;N++){P.index>N?(T=P,P=null):T=P.sibling;var y=h(u,P,v[N],x);if(y===null){P===null&&(P=T);break}t&&P&&y.alternate===null&&e(u,P),m=s(y,m,N),R===null?b=y:R.sibling=y,R=y,P=T}if(N===v.length)return n(u,P),Xt&&us(u,N),b;if(P===null){for(;N<v.length;N++)P=f(u,v[N],x),P!==null&&(m=s(P,m,N),R===null?b=P:R.sibling=P,R=P);return Xt&&us(u,N),b}for(P=i(u,P);N<v.length;N++)T=p(P,u,N,v[N],x),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?N:T.key),m=s(T,m,N),R===null?b=T:R.sibling=T,R=T);return t&&P.forEach(function(D){return e(u,D)}),Xt&&us(u,N),b}function M(u,m,v,x){var b=Zo(v);if(typeof b!="function")throw Error(xe(150));if(v=b.call(v),v==null)throw Error(xe(151));for(var R=b=null,P=m,N=m=0,T=null,y=v.next();P!==null&&!y.done;N++,y=v.next()){P.index>N?(T=P,P=null):T=P.sibling;var D=h(u,P,y.value,x);if(D===null){P===null&&(P=T);break}t&&P&&D.alternate===null&&e(u,P),m=s(D,m,N),R===null?b=D:R.sibling=D,R=D,P=T}if(y.done)return n(u,P),Xt&&us(u,N),b;if(P===null){for(;!y.done;N++,y=v.next())y=f(u,y.value,x),y!==null&&(m=s(y,m,N),R===null?b=y:R.sibling=y,R=y);return Xt&&us(u,N),b}for(P=i(u,P);!y.done;N++,y=v.next())y=p(P,u,N,y.value,x),y!==null&&(t&&y.alternate!==null&&P.delete(y.key===null?N:y.key),m=s(y,m,N),R===null?b=y:R.sibling=y,R=y);return t&&P.forEach(function(V){return e(u,V)}),Xt&&us(u,N),b}function g(u,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:e:{for(var b=v.key,R=m;R!==null;){if(R.key===b){if(b=v.type,b===Qs){if(R.tag===7){n(u,R.sibling),m=r(R,v.props.children),m.return=u,u=m;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&m0(b)===R.type){n(u,R.sibling),m=r(R,v.props),m.ref=na(u,R,v),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Qs?(m=Ms(v.props.children,u.mode,x,v.key),m.return=u,u=m):(x=fc(v.type,v.key,v.props,null,u.mode,x),x.ref=na(u,m,v),x.return=u,u=x)}return o(u);case Js:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=id(v,u.mode,x),m.return=u,u=m}return o(u);case Cr:return R=v._init,g(u,m,R(v._payload),x)}if(ga(v))return _(u,m,v,x);if(Zo(v))return M(u,m,v,x);Tl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=nd(v,u.mode,x),m.return=u,u=m),o(u)):n(u,m)}return g}var Eo=u_(!0),d_=u_(!1),Lc=Kr(null),Dc=null,ao=null,Jh=null;function Qh(){Jh=ao=Dc=null}function ep(t){var e=Lc.current;Bt(Lc),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function go(t,e){Dc=t,Jh=ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yn=!0),t.firstContext=null)}function pi(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},ao===null){if(Dc===null)throw Error(xe(308));ao=t,Dc.dependencies={lanes:0,firstContext:t}}else ao=ao.next=t;return e}var vs=null;function tp(t){vs===null?vs=[t]:vs.push(t)}function f_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,fr(t,i)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fr(t,n)}return r=i.interleaved,r===null?(e.next=e,tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,fr(t,n)}function oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}function g0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;Rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(h=e,p=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=$t({},f,h);break e;case 2:Rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=f}}function v0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var il={},Gi=Kr(il),Va=Kr(il),Ga=Kr(il);function _s(t){if(t===il)throw Error(xe(174));return t}function ip(t,e){switch(Ot(Ga,e),Ot(Va,t),Ot(Gi,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}Bt(Gi),Ot(Gi,e)}function To(){Bt(Gi),Bt(Va),Bt(Ga)}function p_(t){_s(Ga.current);var e=_s(Gi.current),n=ef(e,t.type);e!==n&&(Ot(Va,t),Ot(Gi,n))}function rp(t){Va.current===t&&(Bt(Gi),Bt(Va))}var Yt=Kr(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function sp(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var ac=pr.ReactCurrentDispatcher,Zu=pr.ReactCurrentBatchConfig,Ts=0,qt=null,un=null,_n=null,Uc=!1,Ta=!1,Wa=0,Wy=0;function Rn(){throw Error(xe(321))}function op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Li(t[n],e[n]))return!1;return!0}function ap(t,e,n,i,r,s){if(Ts=s,qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ac.current=t===null||t.memoizedState===null?qy:$y,t=n(i,r),Ta){s=0;do{if(Ta=!1,Wa=0,25<=s)throw Error(xe(301));s+=1,_n=un=null,e.updateQueue=null,ac.current=Ky,t=n(i,r)}while(Ta)}if(ac.current=Fc,e=un!==null&&un.next!==null,Ts=0,_n=un=qt=null,Uc=!1,e)throw Error(xe(300));return t}function lp(){var t=Wa!==0;return Wa=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?qt.memoizedState=_n=t:_n=_n.next=t,_n}function mi(){if(un===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=un.next;var e=_n===null?qt.memoizedState:_n.next;if(e!==null)_n=e,un=t;else{if(t===null)throw Error(xe(310));un=t,t={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},_n===null?qt.memoizedState=_n=t:_n=_n.next=t}return _n}function Xa(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=mi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=un,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,qt.lanes|=d,As|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Li(i,e.memoizedState)||(Yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,qt.lanes|=s,As|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=mi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Li(s,e.memoizedState)||(Yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function m_(){}function g_(t,e){var n=qt,i=mi(),r=e(),s=!Li(i.memoizedState,r);if(s&&(i.memoizedState=r,Yn=!0),i=i.queue,cp(x_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||_n!==null&&_n.memoizedState.tag&1){if(n.flags|=2048,ja(9,__.bind(null,n,i,r,e),void 0,null),xn===null)throw Error(xe(349));Ts&30||v_(n,e,r)}return r}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,i){e.value=n,e.getSnapshot=i,y_(e)&&S_(t)}function x_(t,e,n){return n(function(){y_(e)&&S_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Li(t,n)}catch{return!0}}function S_(t){var e=fr(t,1);e!==null&&Ri(e,t,1,-1)}function _0(t){var e=Oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=Yy.bind(null,qt,t),[e.memoizedState,t]}function ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function M_(){return mi().memoizedState}function lc(t,e,n,i){var r=Oi();qt.flags|=t,r.memoizedState=ja(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=mi();i=i===void 0?null:i;var s=void 0;if(un!==null){var o=un.memoizedState;if(s=o.destroy,i!==null&&op(i,o.deps)){r.memoizedState=ja(e,n,s,i);return}}qt.flags|=t,r.memoizedState=ja(1|e,n,s,i)}function x0(t,e){return lc(8390656,8,t,e)}function cp(t,e){return nu(2048,8,t,e)}function w_(t,e){return nu(4,2,t,e)}function E_(t,e){return nu(4,4,t,e)}function T_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,T_.bind(null,e,t),n)}function up(){}function b_(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return Ts&21?(Li(n,e)||(n=Iv(),qt.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yn=!0),t.memoizedState=n)}function Xy(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{Dt=n,Zu.transition=i}}function P_(){return mi().memoizedState}function jy(t,e,n){var i=Hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))D_(e,n);else if(n=f_(t,e,n,i),n!==null){var r=Bn();Ri(n,t,i,r),N_(n,e,i)}}function Yy(t,e,n){var i=Hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))D_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Li(a,o)){var l=e.interleaved;l===null?(r.next=r,tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f_(t,e,r,i),n!==null&&(r=Bn(),Ri(n,t,i,r),N_(n,e,i))}}function L_(t){var e=t.alternate;return t===qt||e!==null&&e===qt}function D_(t,e){Ta=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}var Fc={readContext:pi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},qy={readContext:pi,useCallback:function(t,e){return Oi().memoizedState=[t,e===void 0?null:e],t},useContext:pi,useEffect:x0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lc(4194308,4,T_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return lc(4,2,t,e)},useMemo:function(t,e){var n=Oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jy.bind(null,qt,t),[i.memoizedState,t]},useRef:function(t){var e=Oi();return t={current:t},e.memoizedState=t},useState:_0,useDebugValue:up,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=_0(!1),e=t[0];return t=Xy.bind(null,t[1]),Oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=qt,r=Oi();if(Xt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),xn===null)throw Error(xe(349));Ts&30||v_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,x0(x_.bind(null,i,s,t),[t]),i.flags|=2048,ja(9,__.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Oi(),e=xn.identifierPrefix;if(Xt){var n=or,i=sr;n=(i&~(1<<32-Ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Wy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$y={readContext:pi,useCallback:b_,useContext:pi,useEffect:cp,useImperativeHandle:A_,useInsertionEffect:w_,useLayoutEffect:E_,useMemo:C_,useReducer:Ju,useRef:M_,useState:function(){return Ju(Xa)},useDebugValue:up,useDeferredValue:function(t){var e=mi();return R_(e,un.memoizedState,t)},useTransition:function(){var t=Ju(Xa)[0],e=mi().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1},Ky={readContext:pi,useCallback:b_,useContext:pi,useEffect:cp,useImperativeHandle:A_,useInsertionEffect:w_,useLayoutEffect:E_,useMemo:C_,useReducer:Qu,useRef:M_,useState:function(){return Qu(Xa)},useDebugValue:up,useDeferredValue:function(t){var e=mi();return un===null?e.memoizedState=t:R_(e,un.memoizedState,t)},useTransition:function(){var t=Qu(Xa)[0],e=mi().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1};function Mi(t,e){if(t&&t.defaultProps){e=$t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:$t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Bn(),r=Hr(t),s=lr(i,r);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,r),e!==null&&(Ri(e,t,r,i),oc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Bn(),r=Hr(t),s=lr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,r),e!==null&&(Ri(e,t,r,i),oc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bn(),i=Hr(t),r=lr(n,i);r.tag=2,e!=null&&(r.callback=e),e=zr(t,r,i),e!==null&&(Ri(e,t,i,n),oc(e,t,i))}};function y0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,i)||!ka(r,s):!0}function I_(t,e,n){var i=!1,r=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=pi(s):(r=$n(e)?ws:Fn.current,i=e.contextTypes,s=(i=i!=null)?Mo(t,r):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function S0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function wf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},np(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pi(s):(s=$n(e)?ws:Fn.current,r.context=Mo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=E1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zy=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kc||(kc=!0,If=i),Ef(t,e)},n}function F_(t,e,n){n=lr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Zy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function w0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var Jy=pr.ReactCurrentOwner,Yn=!1;function zn(t,e,n,i){e.child=t===null?d_(e,null,n,i):Eo(e,t.child,n,i)}function T0(t,e,n,i,r){n=n.render;var s=e.ref;return go(e,r),i=ap(t,e,n,i,s,r),n=lp(),t!==null&&!Yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Xt&&n&&$h(e),e.flags|=1,zn(t,e,i,r),e.child)}function A0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O_(t,e,s,i,r)):(t=fc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,i)&&t.ref===e.ref)return hr(t,e,r)}return e.flags|=1,t=Vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function O_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ka(s,i)&&t.ref===e.ref)if(Yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yn=!0);else return e.lanes=t.lanes,hr(t,e,r)}return Tf(t,e,n,i,r)}function k_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(co,ei),ei|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ot(co,ei),ei|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ot(co,ei),ei|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ot(co,ei),ei|=i;return zn(t,e,r,n),e.child}function z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,i,r){var s=$n(n)?ws:Fn.current;return s=Mo(e,s),go(e,r),n=ap(t,e,n,i,s,r),i=lp(),t!==null&&!Yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Xt&&i&&$h(e),e.flags|=1,zn(t,e,n,r),e.child)}function b0(t,e,n,i,r){if($n(n)){var s=!0;Cc(e)}else s=!1;if(go(e,r),e.stateNode===null)cc(t,e),I_(e,n,i),wf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pi(c):(c=$n(n)?ws:Fn.current,c=Mo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&S0(e,o,i,c),Rr=!1;var h=e.memoizedState;o.state=h,Nc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||qn.current||Rr?(typeof d=="function"&&(Mf(e,n,d,i),l=e.memoizedState),(a=Rr||y0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,h_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pi(l):(l=$n(n)?ws:Fn.current,l=Mo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&S0(e,o,i,l),Rr=!1,h=e.memoizedState,o.state=h,Nc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||qn.current||Rr?(typeof p=="function"&&(Mf(e,n,p,i),_=e.memoizedState),(c=Rr||y0(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Af(t,e,n,i,s,r)}function Af(t,e,n,i,r,s){z_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&f0(e,n,!1),hr(t,e,s);i=e.stateNode,Jy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):zn(t,e,a,s),e.memoizedState=i.state,r&&f0(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?d0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&d0(t,e.context,!1),ip(t,e.containerInfo)}function C0(t,e,n,i,r){return wo(),Zh(r),e.flags|=256,zn(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var i=e.pendingProps,r=Yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ot(Yt,r&1),t===null)return yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=Ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=bf,t):dp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Qy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=Ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return s=t.child,t=s.sibling,i=Vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dp(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&Zh(i),Eo(e,t.child,null,n),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ed(Error(xe(422))),Al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=Ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=bf,s);if(!(e.mode&1))return Al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=ed(s,i,void 0),Al(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yn||a){if(i=xn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fr(t,r),Ri(i,t,r,-1))}return vp(),i=ed(Error(xe(421))),Al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ni=kr(r.nextSibling),ii=e,Xt=!0,Ei=null,t!==null&&(ui[di++]=sr,ui[di++]=or,ui[di++]=Es,sr=t.id,or=t.overflow,Es=e),e=dp(e,i.children),e.flags|=4096,e)}function R0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sf(t.return,e,n)}function td(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(t,e,i.children,n),i=Yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,n,e);else if(t.tag===19)R0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ot(Yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),td(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:B_(e),wo();break;case 5:p_(e);break;case 1:$n(e.type)&&Cc(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ot(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ot(Yt,Yt.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(Ot(Yt,Yt.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Ot(Yt,Yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ot(Yt,Yt.current),i)break;return null;case 22:case 23:return e.lanes=0,k_(t,e,n)}return hr(t,e,n)}var G_,Rf,W_,X_;G_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};W_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_s(Gi.current);var s=null;switch(n){case"input":r=Kd(t,r),i=Kd(t,i),s=[];break;case"select":r=$t({},r,{value:void 0}),i=$t({},i,{value:void 0}),s=[];break;case"textarea":r=Qd(t,r),i=Qd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&zt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};X_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!Xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tS(t,e,n){var i=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(e),null;case 1:return $n(e.type)&&bc(),Pn(e),null;case 3:return i=e.stateNode,To(),Bt(qn),Bt(Fn),sp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&(Of(Ei),Ei=null))),Rf(t,e),Pn(e),null;case 5:rp(e);var r=_s(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Pn(e),null}if(t=_s(Gi.current),El(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[zi]=e,i[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":zt("cancel",i),zt("close",i);break;case"iframe":case"object":case"embed":zt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)zt(_a[r],i);break;case"source":zt("error",i);break;case"img":case"image":case"link":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"input":km(i,s),zt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},zt("invalid",i);break;case"textarea":Bm(i,s),zt("invalid",i)}tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&zt("scroll",i)}switch(n){case"input":ml(i),zm(i,s,!0);break;case"textarea":ml(i),Hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[zi]=e,t[Ha]=i,G_(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,i),n){case"dialog":zt("cancel",t),zt("close",t),r=i;break;case"iframe":case"object":case"embed":zt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)zt(_a[r],t);r=i;break;case"source":zt("error",t),r=i;break;case"img":case"image":case"link":zt("error",t),zt("load",t),r=i;break;case"details":zt("toggle",t),r=i;break;case"input":km(t,i),r=Kd(t,i),zt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=$t({},i,{value:void 0}),zt("invalid",t);break;case"textarea":Bm(t,i),r=Qd(t,i),zt("invalid",t);break;default:r=i}tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Da(t,l):typeof l=="number"&&Da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&zt("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":ml(t),zm(t,i,!1);break;case"textarea":ml(t),Hm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fo(t,!!i.multiple,s,!1):i.defaultValue!=null&&fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pn(e),null;case 6:if(t&&e.stateNode!=null)X_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=_s(Ga.current),_s(Gi.current),El(e)){if(i=e.stateNode,n=e.memoizedProps,i[zi]=e,(s=i.nodeValue!==n)&&(t=ii,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=e,e.stateNode=i}return Pn(e),null;case 13:if(Bt(Yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&ni!==null&&e.mode&1&&!(e.flags&128))c_(),wo(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[zi]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pn(e),s=!1}else Ei!==null&&(Of(Ei),Ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Yt.current&1?dn===0&&(dn=3):vp())),e.updateQueue!==null&&(e.flags|=4),Pn(e),null);case 4:return To(),Rf(t,e),t===null&&za(e.stateNode.containerInfo),Pn(e),null;case 10:return ep(e.type._context),Pn(e),null;case 17:return $n(e.type)&&bc(),Pn(e),null;case 19:if(Bt(Yt),s=e.memoizedState,s===null)return Pn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ia(s,!1);else{if(dn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,ia(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ot(Yt,Yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&en()>bo&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ic(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xt)return Pn(e),null}else 2*en()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=en(),e.sibling=null,n=Yt.current,Ot(Yt,i?n&1|2:n&1),e):(Pn(e),null);case 22:case 23:return gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ei&1073741824&&(Pn(e),e.subtreeFlags&6&&(e.flags|=8192)):Pn(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function nS(t,e){switch(Kh(e),e.tag){case 1:return $n(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),Bt(qn),Bt(Fn),sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rp(e),null;case 13:if(Bt(Yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Bt(Yt),null;case 4:return To(),null;case 10:return ep(e.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var bl=!1,Un=!1,iS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Kt(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){Kt(t,e,i)}}var P0=!1;function rS(t,e){if(hf=wc,t=Kv(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},wc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Mi(e.type,M),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(x){Kt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return _=P0,P0=!1,_}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j_(t){var e=t.alternate;e!==null&&(t.alternate=null,j_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zi],delete e[Ha],delete e[vf],delete e[By],delete e[Hy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y_(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function Nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}var Tn=null,wi=!1;function yr(t,e,n){for(n=n.child;n!==null;)q_(t,e,n),n=n.sibling}function q_(t,e,n){if(Vi&&typeof Vi.onCommitFiberUnmount=="function")try{Vi.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:Un||lo(n,e);case 6:var i=Tn,r=wi;Tn=null,yr(t,e,n),Tn=i,wi=r,Tn!==null&&(wi?(t=Tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tn.removeChild(n.stateNode));break;case 18:Tn!==null&&(wi?(t=Tn,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),Fa(t)):qu(Tn,n.stateNode));break;case 4:i=Tn,r=wi,Tn=n.stateNode.containerInfo,wi=!0,yr(t,e,n),Tn=i,wi=r;break;case 0:case 11:case 14:case 15:if(!Un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),r=r.next}while(r!==i)}yr(t,e,n);break;case 1:if(!Un&&(lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Kt(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(Un=(i=Un)||n.memoizedState!==null,yr(t,e,n),Un=i):yr(t,e,n);break;default:yr(t,e,n)}}function D0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(i){var r=hS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function _i(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tn=a.stateNode,wi=!1;break e;case 3:Tn=a.stateNode.containerInfo,wi=!0;break e;case 4:Tn=a.stateNode.containerInfo,wi=!0;break e}a=a.return}if(Tn===null)throw Error(xe(160));q_(s,o,r),Tn=null,wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_i(e,t),Fi(t),i&4){try{Aa(3,t,t.return),ru(3,t)}catch(M){Kt(t,t.return,M)}try{Aa(5,t,t.return)}catch(M){Kt(t,t.return,M)}}break;case 1:_i(e,t),Fi(t),i&512&&n!==null&&lo(n,n.return);break;case 5:if(_i(e,t),Fi(t),i&512&&n!==null&&lo(n,n.return),t.flags&32){var r=t.stateNode;try{Da(r,"")}catch(M){Kt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vv(r,s),nf(a,o);var c=nf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Mv(r,f):d==="dangerouslySetInnerHTML"?yv(r,f):d==="children"?Da(r,f):Uh(r,d,f,c)}switch(a){case"input":Zd(r,s);break;case"textarea":_v(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?fo(r,!!s.multiple,s.defaultValue,!0):fo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ha]=s}catch(M){Kt(t,t.return,M)}}break;case 6:if(_i(e,t),Fi(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Kt(t,t.return,M)}}break;case 3:if(_i(e,t),Fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(M){Kt(t,t.return,M)}break;case 4:_i(e,t),Fi(t);break;case 13:_i(e,t),Fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pp=en())),i&4&&D0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Un=(c=Un)||d,_i(e,t),Un=c):_i(e,t),Fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ke=t,d=t.child;d!==null;){for(f=ke=d;ke!==null;){switch(h=ke,p=h.child,h.tag){case 0:case 11:case 14:case 15:Aa(4,h,h.return);break;case 1:lo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Kt(i,n,M)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){I0(f);continue}}p!==null?(p.return=h,ke=p):I0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sv("display",o))}catch(M){Kt(t,t.return,M)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){Kt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_i(e,t),Fi(t),i&4&&D0(t);break;case 21:break;default:_i(e,t),Fi(t)}}function Fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y_(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Da(r,""),i.flags&=-33);var s=L0(t);Nf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=L0(t);Df(t,a,o);break;default:throw Error(xe(161))}}catch(l){Kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){ke=t,K_(t)}function K_(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Un;a=bl;var c=Un;if(bl=o,(Un=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?U0(r):l!==null?(l.return=o,ke=l):U0(r);for(;s!==null;)ke=s,K_(s),s=s.sibling;ke=r,bl=a,Un=c}N0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):N0(t)}}function N0(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Un||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&v0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}v0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Un||e.flags&512&&Lf(e)}catch(h){Kt(e,e.return,h)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function I0(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function U0(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){Kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Lf(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Lf(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var oS=Math.ceil,Oc=pr.ReactCurrentDispatcher,fp=pr.ReactCurrentOwner,hi=pr.ReactCurrentBatchConfig,Tt=0,xn=null,rn=null,An=0,ei=0,co=Kr(0),dn=0,Ya=null,As=0,su=0,hp=0,ba=null,jn=null,pp=0,bo=1/0,nr=null,kc=!1,If=null,Br=null,Cl=!1,Ir=null,zc=0,Ca=0,Uf=null,uc=-1,dc=0;function Bn(){return Tt&6?en():uc!==-1?uc:uc=en()}function Hr(t){return t.mode&1?Tt&2&&An!==0?An&-An:Gy.transition!==null?(dc===0&&(dc=Iv()),dc):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Hv(t.type)),t):1}function Ri(t,e,n,i){if(50<Ca)throw Ca=0,Uf=null,Error(xe(185));el(t,n,i),(!(Tt&2)||t!==xn)&&(t===xn&&(!(Tt&2)&&(su|=n),dn===4&&Lr(t,An)),Kn(t,i),n===1&&Tt===0&&!(e.mode&1)&&(bo=en()+500,tu&&Zr()))}function Kn(t,e){var n=t.callbackNode;G1(t,e);var i=Mc(t,t===xn?An:0);if(i===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?Vy(F0.bind(null,t)):o_(F0.bind(null,t)),ky(function(){!(Tt&6)&&Zr()}),n=null;else{switch(Uv(i)){case 1:n=Bh;break;case 4:n=Dv;break;case 16:n=Sc;break;case 536870912:n=Nv;break;default:n=Sc}n=rx(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(uc=-1,dc=0,Tt&6)throw Error(xe(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var i=Mc(t,t===xn?An:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bc(t,i);else{e=i;var r=Tt;Tt|=2;var s=Q_();(xn!==t||An!==e)&&(nr=null,bo=en()+500,Ss(t,e));do try{cS();break}catch(a){J_(t,a)}while(!0);Qh(),Oc.current=s,Tt=r,rn!==null?e=0:(xn=null,An=0,e=dn)}if(e!==0){if(e===2&&(r=lf(t),r!==0&&(i=r,e=Ff(t,r))),e===1)throw n=Ya,Ss(t,0),Lr(t,i),Kn(t,en()),n;if(e===6)Lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!aS(r)&&(e=Bc(t,i),e===2&&(s=lf(t),s!==0&&(i=s,e=Ff(t,s))),e===1))throw n=Ya,Ss(t,0),Lr(t,i),Kn(t,en()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:ds(t,jn,nr);break;case 3:if(Lr(t,i),(i&130023424)===i&&(e=pp+500-en(),10<e)){if(Mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Bn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gf(ds.bind(null,t,jn,nr),e);break}ds(t,jn,nr);break;case 4:if(Lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=en()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oS(i/1960))-i,10<i){t.timeoutHandle=gf(ds.bind(null,t,jn,nr),i);break}ds(t,jn,nr);break;case 5:ds(t,jn,nr);break;default:throw Error(xe(329))}}}return Kn(t,en()),t.callbackNode===n?Z_.bind(null,t):null}function Ff(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=jn,jn=n,e!==null&&Of(e)),t}function Of(t){jn===null?jn=t:jn.push.apply(jn,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~hp,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ci(e),i=1<<n;t[n]=-1,e&=~i}}function F0(t){if(Tt&6)throw Error(xe(327));vo();var e=Mc(t,0);if(!(e&1))return Kn(t,en()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=lf(t);i!==0&&(e=i,n=Ff(t,i))}if(n===1)throw n=Ya,Ss(t,0),Lr(t,e),Kn(t,en()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ds(t,jn,nr),Kn(t,en()),null}function mp(t,e){var n=Tt;Tt|=1;try{return t(e)}finally{Tt=n,Tt===0&&(bo=en()+500,tu&&Zr())}}function bs(t){Ir!==null&&Ir.tag===0&&!(Tt&6)&&vo();var e=Tt;Tt|=1;var n=hi.transition,i=Dt;try{if(hi.transition=null,Dt=1,t)return t()}finally{Dt=i,hi.transition=n,Tt=e,!(Tt&6)&&Zr()}}function gp(){ei=co.current,Bt(co)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Oy(n)),rn!==null)for(n=rn.return;n!==null;){var i=n;switch(Kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:To(),Bt(qn),Bt(Fn),sp();break;case 5:rp(i);break;case 4:To();break;case 13:Bt(Yt);break;case 19:Bt(Yt);break;case 10:ep(i.type._context);break;case 22:case 23:gp()}n=n.return}if(xn=t,rn=t=Vr(t.current,null),An=ei=e,dn=0,Ya=null,hp=su=As=0,jn=ba=null,vs!==null){for(e=0;e<vs.length;e++)if(n=vs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vs=null}return t}function J_(t,e){do{var n=rn;try{if(Qh(),ac.current=Fc,Uc){for(var i=qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(Ts=0,_n=un=qt=null,Ta=!1,Wa=0,fp.current=null,n===null||n.return===null){dn=1,Ya=e,rn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=An,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=w0(o);if(p!==null){p.flags&=-257,E0(p,o,a,s,e),p.mode&1&&M0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){M0(s,c,e),vp();break e}l=Error(xe(426))}}else if(Xt&&a.mode&1){var g=w0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),E0(g,o,a,s,e),Zh(Ao(l,a));break e}}s=l=Ao(l,a),dn!==4&&(dn=2),ba===null?ba=[s]:ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=U_(s,l,e);g0(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Br===null||!Br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=F_(s,a,e);g0(s,x);break e}}s=s.return}while(s!==null)}tx(n)}catch(b){e=b,rn===n&&n!==null&&(rn=n=n.return);continue}break}while(!0)}function Q_(){var t=Oc.current;return Oc.current=Fc,t===null?Fc:t}function vp(){(dn===0||dn===3||dn===2)&&(dn=4),xn===null||!(As&268435455)&&!(su&268435455)||Lr(xn,An)}function Bc(t,e){var n=Tt;Tt|=2;var i=Q_();(xn!==t||An!==e)&&(nr=null,Ss(t,e));do try{lS();break}catch(r){J_(t,r)}while(!0);if(Qh(),Tt=n,Oc.current=i,rn!==null)throw Error(xe(261));return xn=null,An=0,dn}function lS(){for(;rn!==null;)ex(rn)}function cS(){for(;rn!==null&&!I1();)ex(rn)}function ex(t){var e=ix(t.alternate,t,ei);t.memoizedProps=t.pendingProps,e===null?tx(t):rn=e,fp.current=null}function tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,rn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dn=6,rn=null;return}}else if(n=tS(n,e,ei),n!==null){rn=n;return}if(e=e.sibling,e!==null){rn=e;return}rn=e=t}while(e!==null);dn===0&&(dn=5)}function ds(t,e,n){var i=Dt,r=hi.transition;try{hi.transition=null,Dt=1,uS(t,e,n,i)}finally{hi.transition=r,Dt=i}return null}function uS(t,e,n,i){do vo();while(Ir!==null);if(Tt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(W1(t,s),t===xn&&(rn=xn=null,An=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,rx(Sc,function(){return vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hi.transition,hi.transition=null;var o=Dt;Dt=1;var a=Tt;Tt|=4,fp.current=null,rS(t,n),$_(n,t),Py(pf),wc=!!hf,pf=hf=null,t.current=n,sS(n),U1(),Tt=a,Dt=o,hi.transition=s}else t.current=n;if(Cl&&(Cl=!1,Ir=t,zc=r),s=t.pendingLanes,s===0&&(Br=null),k1(n.stateNode),Kn(t,en()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kc)throw kc=!1,t=If,If=null,t;return zc&1&&t.tag!==0&&vo(),s=t.pendingLanes,s&1?t===Uf?Ca++:(Ca=0,Uf=t):Ca=0,Zr(),null}function vo(){if(Ir!==null){var t=Uv(zc),e=hi.transition,n=Dt;try{if(hi.transition=null,Dt=16>t?16:t,Ir===null)var i=!1;else{if(t=Ir,Ir=null,zc=0,Tt&6)throw Error(xe(331));var r=Tt;for(Tt|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var d=ke;switch(d.tag){case 0:case 11:case 15:Aa(8,d,s)}var f=d.child;if(f!==null)f.return=d,ke=f;else for(;ke!==null;){d=ke;var h=d.sibling,p=d.return;if(j_(d),d===c){ke=null;break}if(h!==null){h.return=p,ke=h;break}ke=p}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ke=u;break e}ke=s.return}}var m=t.current;for(ke=m;ke!==null;){o=ke;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ke=v;else e:for(o=m;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(b){Kt(a,a.return,b)}if(a===o){ke=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ke=x;break e}ke=a.return}}if(Tt=r,Zr(),Vi&&typeof Vi.onPostCommitFiberRoot=="function")try{Vi.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{Dt=n,hi.transition=e}}return!1}function O0(t,e,n){e=Ao(n,e),e=U_(t,e,1),t=zr(t,e,1),e=Bn(),t!==null&&(el(t,1,e),Kn(t,e))}function Kt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Br===null||!Br.has(i))){t=Ao(n,t),t=F_(e,t,1),e=zr(e,t,1),t=Bn(),e!==null&&(el(e,1,t),Kn(e,t));break}}e=e.return}}function dS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Bn(),t.pingedLanes|=t.suspendedLanes&n,xn===t&&(An&n)===n&&(dn===4||dn===3&&(An&130023424)===An&&500>en()-pp?Ss(t,0):hp|=n),Kn(t,e)}function nx(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=Bn();t=fr(t,e),t!==null&&(el(t,e,n),Kn(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nx(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),nx(t,n)}var ix;ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qn.current)Yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yn=!1,eS(t,e,n);Yn=!!(t.flags&131072)}else Yn=!1,Xt&&e.flags&1048576&&a_(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cc(t,e),t=e.pendingProps;var r=Mo(e,Fn.current);go(e,n),r=ap(null,e,i,t,r,n);var s=lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$n(i)?(s=!0,Cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,np(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,wf(e,i,t,n),e=Af(null,e,i,!0,s,n)):(e.tag=0,Xt&&s&&$h(e),zn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mS(i),t=Mi(i,t),r){case 0:e=Tf(null,e,i,t,n);break e;case 1:e=b0(null,e,i,t,n);break e;case 11:e=T0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,Mi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),Tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),b0(t,e,i,r,n);case 3:e:{if(B_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,h_(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(xe(423)),e),e=C0(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(xe(424)),e),e=C0(t,e,i,n,r);break e}else for(ni=kr(e.stateNode.containerInfo.firstChild),ii=e,Xt=!0,Ei=null,n=d_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=hr(t,e,n);break e}zn(t,e,i,n)}e=e.child}return e;case 5:return p_(e),t===null&&yf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),z_(t,e),zn(t,e,o,n),e.child;case 6:return t===null&&yf(e),null;case 13:return H_(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Eo(e,null,i,n):zn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),T0(t,e,i,r,n);case 7:return zn(t,e,e.pendingProps,n),e.child;case 8:return zn(t,e,e.pendingProps.children,n),e.child;case 12:return zn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ot(Lc,i._currentValue),i._currentValue=o,s!==null)if(Li(s.value,o)){if(s.children===r.children&&!qn.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=lr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,n),r=pi(r),i=i(r),e.flags|=1,zn(t,e,i,n),e.child;case 14:return i=e.type,r=Mi(i,e.pendingProps),r=Mi(i.type,r),A0(t,e,i,r,n);case 15:return O_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),cc(t,e),e.tag=1,$n(i)?(t=!0,Cc(e)):t=!1,go(e,n),I_(e,i,r),wf(e,i,r,n),Af(null,e,i,!0,t,n);case 19:return V_(t,e,n);case 22:return k_(t,e,n)}throw Error(xe(156,e.tag))};function rx(t,e){return Lv(t,e)}function pS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,e,n,i){return new pS(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===kh)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=fi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return Ms(n.children,r,s,e);case Fh:o=8,r|=8;break;case jd:return t=fi(12,n,e,r|2),t.elementType=jd,t.lanes=s,t;case Yd:return t=fi(13,n,e,r),t.elementType=Yd,t.lanes=s,t;case qd:return t=fi(19,n,e,r),t.elementType=qd,t.lanes=s,t;case pv:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fv:o=10;break e;case hv:o=9;break e;case Oh:o=11;break e;case kh:o=14;break e;case Cr:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=fi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ms(t,e,n,i){return t=fi(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=fi(22,t,i,e),t.elementType=pv,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=fi(6,t,null,e),t.lanes=n,t}function id(t,e,n){return e=fi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,i,r,s,o,a,l){return t=new gS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},np(s),t}function vS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return jr;t=t._reactInternals;e:{if(Ls(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if($n(n))return s_(t,n,e)}return e}function ox(t,e,n,i,r,s,o,a,l){return t=xp(n,i,!0,t,r,s,o,a,l),t.context=sx(null),n=t.current,i=Bn(),r=Hr(n),s=lr(i,r),s.callback=e??null,zr(n,s,r),t.current.lanes=r,el(t,r,i),Kn(t,i),t}function au(t,e,n,i){var r=e.current,s=Bn(),o=Hr(r);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zr(r,e,o),t!==null&&(Ri(t,r,o,s),oc(t,r,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){k0(t,e),(t=t.alternate)&&k0(t,e)}function _S(){return null}var ax=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}lu.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));au(t,e,null,null)};lu.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bs(function(){au(null,t,null,null)}),e[dr]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&Bv(t)}};function Mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function z0(){}function xS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(o);s.call(c)}}var o=ox(e,i,t,0,null,!1,!1,"",z0);return t._reactRootContainer=o,t[dr]=o.current,za(t.nodeType===8?t.parentNode:t),bs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hc(l);a.call(c)}}var l=xp(t,0,!1,null,null,!1,!1,"",z0);return t._reactRootContainer=l,t[dr]=l.current,za(t.nodeType===8?t.parentNode:t),bs(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hc(o);a.call(l)}}au(e,o,t,r)}else o=xS(n,e,t,r,i);return Hc(o)}Fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(Hh(e,n|1),Kn(e,en()),!(Tt&6)&&(bo=en()+500,Zr()))}break;case 13:bs(function(){var i=fr(t,1);if(i!==null){var r=Bn();Ri(i,t,1,r)}}),yp(t,1)}};Vh=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Bn();Ri(e,t,134217728,n)}yp(t,134217728)}};Ov=function(t){if(t.tag===13){var e=Hr(t),n=fr(t,e);if(n!==null){var i=Bn();Ri(n,t,e,i)}yp(t,e)}};kv=function(){return Dt};zv=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};sf=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(xe(90));gv(i),Zd(i,r)}}}break;case"textarea":_v(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};Tv=mp;Av=bs;var yS={usingClientEntryPoint:!1,Events:[nl,io,eu,wv,Ev,mp]},ra={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Kc=Rl.inject(SS),Vi=Rl}catch{}}si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;si.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(e))throw Error(xe(200));return vS(t,e,null,n)};si.createRoot=function(t,e){if(!Mp(t))throw Error(xe(299));var n=!1,i="",r=ax;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,i,r),t[dr]=e.current,za(t.nodeType===8?t.parentNode:t),new Sp(e)};si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};si.flushSync=function(t){return bs(t)};si.hydrate=function(t,e,n){if(!cu(e))throw Error(xe(200));return uu(null,t,e,!0,n)};si.hydrateRoot=function(t,e,n){if(!Mp(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ax;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ox(e,null,t,1,n??null,r,!1,s,o),t[dr]=e.current,za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};si.render=function(t,e,n){if(!cu(e))throw Error(xe(200));return uu(null,t,e,!1,n)};si.unmountComponentAtNode=function(t){if(!cu(t))throw Error(xe(40));return t._reactRootContainer?(bs(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};si.unstable_batchedUpdates=mp;si.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return uu(t,e,n,!1,i)};si.version="18.3.1-next-f1338f8080-20240426";function lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lx)}catch(t){console.error(t)}}lx(),lv.exports=si;var MS=lv.exports,cx,B0=MS;cx=B0.createRoot,B0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="180",wS=0,H0=1,ES=2,ux=1,dx=2,tr=3,Yr=0,Zn=1,Ti=2,Gr=0,_o=1,V0=2,G0=3,W0=4,TS=5,ps=100,AS=101,bS=102,CS=103,RS=104,PS=200,LS=201,DS=202,NS=203,kf=204,zf=205,IS=206,US=207,FS=208,OS=209,kS=210,zS=211,BS=212,HS=213,VS=214,Bf=0,Hf=1,Vf=2,Co=3,Gf=4,Wf=5,Xf=6,jf=7,fx=0,GS=1,WS=2,Wr=0,XS=1,jS=2,YS=3,hx=4,qS=5,$S=6,KS=7,px=300,Ro=301,Po=302,Yf=303,qf=304,du=306,Vc=1e3,xs=1001,$f=1002,Pi=1003,ZS=1004,Pl=1005,Bi=1006,rd=1007,ys=1008,Xi=1009,mx=1010,gx=1011,qa=1012,Ep=1013,Cs=1014,ar=1015,rl=1016,Tp=1017,Ap=1018,$a=1020,vx=35902,_x=35899,xx=1021,yx=1022,bi=1023,Ka=1026,Za=1027,Sx=1028,bp=1029,Mx=1030,Cp=1031,Rp=1033,hc=33776,pc=33777,mc=33778,gc=33779,Kf=35840,Zf=35841,Jf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,vh=36492,_h=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,wh=36286,JS=3200,QS=3201,wx=0,eM=1,Dr="",Xn="srgb",Lo="srgb-linear",Gc="linear",It="srgb",ks=7680,X0=519,tM=512,nM=513,iM=514,Ex=515,rM=516,sM=517,oM=518,aM=519,j0=35044,Y0="300 es",Hi=2e3,Wc=2001;class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Eh=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[t&255]+Ln[t>>8&255]+Ln[t>>16&255]+Ln[t>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function lM(t,e){return(t%e+e)%e}function od(t,e,n){return(1-n)*t+n*e}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=M;return}if(f!==M||l!==h||c!==p||d!==_){let g=1-a;const u=l*h+c*p+d*_+f*M,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,u*m);g=Math.sin(g*R)/b,a=Math.sin(a*R)/b}const x=a*m;if(l=l*g+h*x,c=c*g+p*x,d=d*g+_*x,f=f*g+M*x,g===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-a*p,e[n+2]=c*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(q0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new k,q0=new ol;class ut{constructor(e,n,i,r,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],M=r[0],g=r[3],u=r[6],m=r[1],v=r[4],x=r[7],b=r[2],R=r[5],P=r[8];return s[0]=o*M+a*m+l*b,s[3]=o*g+a*v+l*R,s[6]=o*u+a*x+l*P,s[1]=c*M+d*m+f*b,s[4]=c*g+d*v+f*R,s[7]=c*u+d*x+f*P,s[2]=h*M+p*m+_*b,s[5]=h*g+p*v+_*R,s[8]=h*u+p*x+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-d*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ut;function Tx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cM(){const t=Xc("canvas");return t.style.display="block",t}const $0={};function Ja(t){t in $0||($0[t]=!0,console.warn(t))}function uM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const K0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const t={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ja("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ja("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Lo]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:K0,fromXYZ:Z0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:K0,fromXYZ:Z0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),t}const At=dM();function cr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zs;class fM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zs===void 0&&(zs=Xc("canvas")),zs.width=e.width,zs.height=e.height;const r=zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cr(n[i]/255)*255):n[i]=cr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hM=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cd(r[o].image)):s.push(cd(r[o]))}else s=cd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;const ud=new k;class Hn extends Fo{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,i=xs,r=xs,s=Bi,o=ys,a=bi,l=Xi,c=Hn.DEFAULT_ANISOTROPY,d=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=sl(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=px;Hn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],M=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,b=(u+1)/2,R=(d+h)/4,P=(f+M)/4,N=(_+g)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=P/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=N/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=N/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-M)/m,this.z=(h-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Fo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Hn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Pp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends mM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ax extends Hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends Hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Dl.subVectors(this.max,oa),Bs.subVectors(e.a,oa),Hs.subVectors(e.b,oa),Vs.subVectors(e.c,oa),Sr.subVectors(Hs,Bs),Mr.subVectors(Vs,Hs),is.subVectors(Bs,Vs);let n=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-is.z,is.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,is.z,0,-is.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-is.y,is.x,0];return!dd(n,Bs,Hs,Vs,Dl)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Bs,Hs,Vs,Dl))?!1:(Nl.crossVectors(Sr,Mr),n=[Nl.x,Nl.y,Nl.z],dd(n,Bs,Hs,Vs,Dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new k,new k,new k,new k,new k,new k,new k,new k],xi=new k,Ll=new al,Bs=new k,Hs=new k,Vs=new k,Sr=new k,Mr=new k,is=new k,oa=new k,Dl=new k,Nl=new k,rs=new k;function dd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){rs.fromArray(t,s);const a=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),l=e.dot(rs),c=n.dot(rs),d=i.dot(rs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const vM=new al,aa=new k,fd=new k;class fu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const n=aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(fd)),this.expandByPoint(aa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new k,hd=new k,Il=new k,wr=new k,pd=new k,Ul=new k,md=new k;class Lp{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,n),Zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hd.copy(e).add(n).multiplyScalar(.5),Il.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(hd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Il),a=wr.dot(this.direction),l=-wr.dot(Il),c=wr.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const M=1/d;f*=M,h*=M,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hd).addScaledVector(Il,h),p}intersectSphere(e,n){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),r=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,n,i,r,s){pd.subVectors(n,e),Ul.subVectors(i,e),md.crossVectors(pd,Ul);let o=this.direction.dot(md),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,e);const l=a*this.direction.dot(Ul.crossVectors(wr,Ul));if(l<0)return null;const c=a*this.direction.dot(pd.cross(wr));if(c<0||l+c>o)return null;const d=-a*wr.dot(md);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,_,M,g){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,M,g)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,M,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=M,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,_=a*d,M=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,M=c*f;n[0]=h+M*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,M=c*f;n[0]=h-M*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=a*d,M=a*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*d,n[4]=M-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+M,n[5]=o*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_M,e,xM)}lookAt(e,n,i){const r=this.elements;return Jn.subVectors(e,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Er.crossVectors(i,Jn),Er.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Er.crossVectors(i,Jn)),Er.normalize(),Fl.crossVectors(Jn,Er),r[0]=Er.x,r[4]=Fl.x,r[8]=Jn.x,r[1]=Er.y,r[5]=Fl.y,r[9]=Jn.y,r[2]=Er.z,r[6]=Fl.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],M=i[6],g=i[10],u=i[14],m=i[3],v=i[7],x=i[11],b=i[15],R=r[0],P=r[4],N=r[8],T=r[12],y=r[1],D=r[5],V=r[9],W=r[13],le=r[2],ie=r[6],se=r[10],F=r[14],O=r[3],$=r[7],te=r[11],Se=r[15];return s[0]=o*R+a*y+l*le+c*O,s[4]=o*P+a*D+l*ie+c*$,s[8]=o*N+a*V+l*se+c*te,s[12]=o*T+a*W+l*F+c*Se,s[1]=d*R+f*y+h*le+p*O,s[5]=d*P+f*D+h*ie+p*$,s[9]=d*N+f*V+h*se+p*te,s[13]=d*T+f*W+h*F+p*Se,s[2]=_*R+M*y+g*le+u*O,s[6]=_*P+M*D+g*ie+u*$,s[10]=_*N+M*V+g*se+u*te,s[14]=_*T+M*W+g*F+u*Se,s[3]=m*R+v*y+x*le+b*O,s[7]=m*P+v*D+x*ie+b*$,s[11]=m*N+v*V+x*se+b*te,s[15]=m*T+v*W+x*F+b*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],M=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+M*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],M=e[13],g=e[14],u=e[15],m=f*g*c-M*h*c+M*l*p-a*g*p-f*l*u+a*h*u,v=_*h*c-d*g*c-_*l*p+o*g*p+d*l*u-o*h*u,x=d*M*c-_*f*c+_*a*p-o*M*p-d*a*u+o*f*u,b=_*f*l-d*M*l-_*a*h+o*M*h+d*a*g-o*f*g,R=n*m+i*v+r*x+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=m*P,e[1]=(M*h*s-f*g*s-M*r*p+i*g*p+f*r*u-i*h*u)*P,e[2]=(a*g*s-M*l*s+M*r*c-i*g*c-a*r*u+i*l*u)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=v*P,e[5]=(d*g*s-_*h*s+_*r*p-n*g*p-d*r*u+n*h*u)*P,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*P,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=x*P,e[9]=(_*f*s-d*M*s-_*i*p+n*M*p+d*i*u-n*f*u)*P,e[10]=(o*M*s-_*a*s+_*i*c-n*M*c-o*i*u+n*a*u)*P,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=b*P,e[13]=(d*M*r-_*f*r+_*i*h-n*M*h-d*i*g+n*f*g)*P,e[14]=(_*a*r-o*M*r-_*i*l+n*M*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,_=s*f,M=o*d,g=o*f,u=a*f,m=l*c,v=l*d,x=l*f,b=i.x,R=i.y,P=i.z;return r[0]=(1-(M+u))*b,r[1]=(p+x)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(_+v)*P,r[9]=(g-m)*P,r[10]=(1-(h+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gs.set(r[0],r[1],r[2]).length();const o=Gs.set(r[4],r[5],r[6]).length(),a=Gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yi.copy(this);const c=1/s,d=1/o,f=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=d,yi.elements[5]*=d,yi.elements[6]*=d,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,n.setFromRotationMatrix(yi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Hi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,M;if(l)_=s/(o-s),M=o*s/(o-s);else if(a===Hi)_=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Wc)_=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Hi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,M;if(l)_=1/(o-s),M=o/(o-s);else if(a===Hi)_=-2/(o-s),M=-(o+s)/(o-s);else if(a===Wc)_=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gs=new k,yi=new Ht,_M=new k(0,0,0),xM=new k(1,1,1),Er=new k,Fl=new k,Jn=new k,J0=new Ht,Q0=new ol;class ji{constructor(e=0,n=0,i=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const eg=new k,Ws=new ol,Ji=new Ht,Ol=new k,la=new k,SM=new k,MM=new ol,tg=new k(1,0,0),ng=new k(0,1,0),ig=new k(0,0,1),rg={type:"added"},wM={type:"removed"},Xs={type:"childadded",child:null},gd={type:"childremoved",child:null};class yn extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new k,n=new ji,i=new ol,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,n){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ol.copy(e):Ol.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(la,Ol,this.up):Ji.lookAt(Ol,la,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(Ji),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wM),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new k(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new k,Qi=new k,vd=new k,er=new k,js=new k,Ys=new k,sg=new k,_d=new k,xd=new k,yd=new k,Sd=new Ut,Md=new Ut,wd=new Ut;class Ai{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Si.subVectors(e,n),r.cross(Si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Si.subVectors(r,n),Qi.subVectors(i,n),vd.subVectors(e,n);const o=Si.dot(Si),a=Si.dot(Qi),l=Si.dot(vd),c=Qi.dot(Qi),d=Qi.dot(vd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sd.setScalar(0),Md.setScalar(0),wd.setScalar(0),Sd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sd,s.x),o.addScaledVector(Md,s.y),o.addScaledVector(wd,s.z),o}static isFrontFacing(e,n,i,r){return Si.subVectors(i,n),Qi.subVectors(e,n),Si.cross(Qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;js.subVectors(r,i),Ys.subVectors(s,i),_d.subVectors(e,i);const l=js.dot(_d),c=Ys.dot(_d);if(l<=0&&c<=0)return n.copy(i);xd.subVectors(e,r);const d=js.dot(xd),f=Ys.dot(xd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(js,o);yd.subVectors(e,s);const p=js.dot(yd),_=Ys.dot(yd);if(_>=0&&p<=_)return n.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ys,a);const g=d*_-p*f;if(g<=0&&f-d>=0&&p-_>=0)return sg.subVectors(s,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(sg,a);const u=1/(g+M+h);return o=M*u,a=h*u,n.copy(i).addScaledVector(js,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=At.workingColorSpace){return this.r=e,this.g=n,this.b=i,At.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=At.workingColorSpace){if(e=lM(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ed(o,s,e+1/3),this.g=Ed(o,s,e),this.b=Ed(o,s,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return At.workingToColorSpace(Dn.copy(this),e),Math.round(gt(Dn.r*255,0,255))*65536+Math.round(gt(Dn.g*255,0,255))*256+Math.round(gt(Dn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Dn.copy(this),n);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Xn){At.workingToColorSpace(Dn.copy(this),e);const n=Dn.r,i=Dn.g,r=Dn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(kl);const i=od(Tr.h,kl.h,n),r=od(Tr.s,kl.s,n),s=od(Tr.l,kl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new St;St.NAMES=bx;let EM=0;class Oo extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=_o,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new k,zl=new Ke;let TM=0;class Wi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=j0,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zl.fromBufferAttribute(this,n),zl.applyMatrix3(e),this.setXY(n,zl.x,zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j0&&(e.usage=this.usage),e}}class Cx extends Wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rx extends Wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pt extends Wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AM=0;const ci=new Ht,Td=new yn,qs=new k,Qn=new al,ca=new al,vn=new k;class Sn extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tx(e)?Rx:Cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,i){return ci.makeTranslation(e,n,i),this.applyMatrix4(ci),this}scale(e,n,i){return ci.makeScale(e,n,i),this.applyMatrix4(ci),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Qn.min,ca.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,ca.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(ca.min),Qn.expandByPoint(ca.max))}Qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)vn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),vn.add(qs)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new k,l[N]=new k;const c=new k,d=new k,f=new k,h=new Ke,p=new Ke,_=new Ke,M=new k,g=new k;function u(N,T,y){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),a[N].add(M),a[T].add(M),a[y].add(M),l[N].add(g),l[T].add(g),l[y].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let N=0,T=m.length;N<T;++N){const y=m[N],D=y.start,V=y.count;for(let W=D,le=D+V;W<le;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new k,x=new k,b=new k,R=new k;function P(N){b.fromBufferAttribute(r,N),R.copy(b);const T=a[N];v.copy(T),v.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(R,T);const D=x.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,D)}for(let N=0,T=m.length;N<T;++N){const y=m[N],D=y.start,V=y.count;for(let W=D,le=D+V;W<le;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)vn.fromBufferAttribute(e,n),vn.normalize(),e.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Wi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new Ht,ss=new Lp,Bl=new fu,ag=new k,Hl=new k,Vl=new k,Gl=new k,Ad=new k,Wl=new k,lg=new k,Xl=new k;class ne extends yn{constructor(e=new Sn,n=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Ad.fromBufferAttribute(f,e),o?Wl.addScaledVector(Ad,d):Wl.addScaledVector(Ad.sub(n),d))}n.add(Wl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(Bl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Bl,ag)===null||ss.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(s).invert(),ss.copy(e.ray).applyMatrix4(og),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ss)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,b=v;x<b;x+=3){const R=a.getX(x),P=a.getX(x+1),N=a.getX(x+2);r=jl(this,u,e,i,c,d,f,R,P,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=_,u=M;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=jl(this,o,e,i,c,d,f,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,b=v;x<b;x+=3){const R=x,P=x+1,N=x+2;r=jl(this,u,e,i,c,d,f,R,P,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,u=M;g<u;g+=3){const m=g,v=g+1,x=g+2;r=jl(this,o,e,i,c,d,f,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function bM(t,e,n,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yr,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xl);return c<n.near||c>n.far?null:{distance:c,point:Xl.clone(),object:t}}function jl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Hl),t.getVertexPosition(l,Vl),t.getVertexPosition(c,Gl);const d=bM(t,e,n,i,Hl,Vl,Gl,lg);if(d){const f=new k;Ai.getBarycoord(lg,Hl,Vl,Gl,f),r&&(d.uv=Ai.getInterpolatedAttribute(r,a,l,c,f,new Ke)),s&&(d.uv1=Ai.getInterpolatedAttribute(s,a,l,c,f,new Ke)),o&&(d.normal=Ai.getInterpolatedAttribute(o,a,l,c,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Ai.getNormal(Hl,Vl,Gl,h.normal),d.face=h,d.barycoord=f}return d}class ln extends Sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function _(M,g,u,m,v,x,b,R,P,N,T){const y=x/P,D=b/N,V=x/2,W=b/2,le=R/2,ie=P+1,se=N+1;let F=0,O=0;const $=new k;for(let te=0;te<se;te++){const Se=te*D-W;for(let Ie=0;Ie<ie;Ie++){const Pe=Ie*y-V;$[M]=Pe*m,$[g]=Se*v,$[u]=le,c.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[u]=R>0?1:-1,d.push($.x,$.y,$.z),f.push(Ie/P),f.push(1-te/N),F+=1}}for(let te=0;te<N;te++)for(let Se=0;Se<P;Se++){const Ie=h+Se+ie*te,Pe=h+Se+ie*(te+1),me=h+(Se+1)+ie*(te+1),X=h+(Se+1)+ie*te;l.push(Ie,Pe,X),l.push(Pe,me,X),O+=6}a.addGroup(p,O,T),p+=O,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kn(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const r in i)e[r]=i[r]}return e}function CM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Px(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const RM={clone:Do,merge:kn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lx extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new k,cg=new Ke,ug=new Ke;class ti extends Lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,cg,ug),n.subVectors(ug,cg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $s=-90,Ks=1;class DM extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti($s,Ks,e,n);r.layers=this.layers,this.add(r);const s=new ti($s,Ks,e,n);s.layers=this.layers,this.add(s);const o=new ti($s,Ks,e,n);o.layers=this.layers,this.add(o);const a=new ti($s,Ks,e,n);a.layers=this.layers,this.add(a);const l=new ti($s,Ks,e,n);l.layers=this.layers,this.add(l);const c=new ti($s,Ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Dx extends Hn{constructor(e=[],n=Ro,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NM extends Rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ln(5,5,5),s=new qr({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Gr});s.uniforms.tEquirect.value=n;const o=new ne(r,s),a=n.minFilter;return n.minFilter===ys&&(n.minFilter=Bi),new DM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class nt extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),u=this._getHandJoint(c,M);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Np{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new Np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class UM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Cd=new k,FM=new k,OM=new ut;class fs{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OM.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new fu,kM=new Ke(.5,.5),Yl=new k;class Ip{constructor(e=new fs,n=new fs,i=new fs,r=new fs,s=new fs,o=new fs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],_=s[8],M=s[9],g=s[10],u=s[11],m=s[12],v=s[13],x=s[14],b=s[15];if(r[0].setComponents(c-o,p-d,u-_,b-m).normalize(),r[1].setComponents(c+o,p+d,u+_,b+m).normalize(),r[2].setComponents(c+a,p+f,u+M,b+v).normalize(),r[3].setComponents(c-a,p-f,u-M,b-v).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,p-h,u-g,b-x).normalize();else if(r[4].setComponents(c-l,p-h,u-g,b-x).normalize(),n===Hi)r[5].setComponents(c+l,p+h,u+g,b+x).normalize();else if(n===Wc)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const n=kM.distanceTo(e.center);return os.radius=.7071067811865476+n,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Yl.x=r.normal.x>0?e.max.x:e.min.x,Yl.y=r.normal.y>0?e.max.y:e.min.y,Yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Th extends Oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new k,Yc=new k,dg=new Ht,ua=new Lp,ql=new fu,Rd=new k,fg=new k;class hg extends yn{constructor(e=new Sn,n=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Yc);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ql.radius+=s,e.ray.intersectsSphere(ql)===!1)return;dg.copy(r).invert(),ua.copy(e.ray).applyMatrix4(dg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=c){const u=d.getX(M),m=d.getX(M+1),v=$l(this,e,ua,l,u,m,M);v&&n.push(v)}if(this.isLineLoop){const M=d.getX(_-1),g=d.getX(p),u=$l(this,e,ua,l,M,g,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=c){const u=$l(this,e,ua,l,M,M+1,M);u&&n.push(u)}if(this.isLineLoop){const M=$l(this,e,ua,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $l(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Yc.fromBufferAttribute(a,s),n.distanceSqToSegment(jc,Yc,Rd,fg)>i)return;Rd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Rd);if(!(c<e.near||c>e.far))return{distance:c,point:fg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class zM extends Hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nx extends Hn{constructor(e,n,i=Cs,r,s,o,a=Pi,l=Pi,c,d=Ka,f=1){if(d!==Ka&&d!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ix extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class In extends Sn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,_=i*2+s,M=r+1,g=new k,u=new k;for(let m=0;m<=_;m++){let v=0,x=0,b=0,R=0;if(m<=i){const T=m/i,y=T*Math.PI/2;x=-d-e*Math.cos(y),b=e*Math.sin(y),R=-e*Math.cos(y),v=T*f}else if(m<=i+s){const T=(m-i)/s;x=-d+T*n,b=e,R=0,v=f+T*h}else{const T=(m-i-s)/i,y=T*Math.PI/2;x=d+e*Math.sin(y),b=e*Math.cos(y),R=e*Math.sin(y),v=f+h+T*f}const P=Math.max(0,Math.min(1,v/p));let N=0;m===0?N=.5/r:m===_&&(N=-.5/r);for(let T=0;T<=r;T++){const y=T/r,D=y*Math.PI*2,V=Math.sin(D),W=Math.cos(D);u.x=-b*W,u.y=x,u.z=b*V,a.push(u.x,u.y,u.z),g.set(-b*W,R,b*V),g.normalize(),l.push(g.x,g.y,g.z),c.push(y+N,P)}if(m>0){const T=(m-1)*M;for(let y=0;y<r;y++){const D=T+y,V=T+y+1,W=m*M+y,le=m*M+y+1;o.push(D,V,W),o.push(V,le,W)}}}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class yo extends Sn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new k,d=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wt extends Sn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let _=0;const M=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function m(){const x=new k,b=new k;let R=0;const P=(n-e)/i;for(let N=0;N<=s;N++){const T=[],y=N/s,D=y*(n-e)+e;for(let V=0;V<=r;V++){const W=V/r,le=W*l+a,ie=Math.sin(le),se=Math.cos(le);b.x=D*ie,b.y=-y*i+g,b.z=D*se,f.push(b.x,b.y,b.z),x.set(ie,P,se).normalize(),h.push(x.x,x.y,x.z),p.push(W,1-y),T.push(_++)}M.push(T)}for(let N=0;N<r;N++)for(let T=0;T<s;T++){const y=M[T][N],D=M[T+1][N],V=M[T+1][N+1],W=M[T][N+1];(e>0||T!==0)&&(d.push(y,D,W),R+=3),(n>0||T!==s-1)&&(d.push(D,V,W),R+=3)}c.addGroup(u,R,0),u+=R}function v(x){const b=_,R=new Ke,P=new k;let N=0;const T=x===!0?e:n,y=x===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,g*y,0),h.push(0,y,0),p.push(.5,.5),_++;const D=_;for(let V=0;V<=r;V++){const le=V/r*l+a,ie=Math.cos(le),se=Math.sin(le);P.x=T*se,P.y=g*y,P.z=T*ie,f.push(P.x,P.y,P.z),h.push(0,y,0),R.x=ie*.5+.5,R.y=se*.5*y+.5,p.push(R.x,R.y),_++}for(let V=0;V<r;V++){const W=b+V,le=D+V;x===!0?d.push(le,le+1,W):d.push(le+1,le,W),N+=3}c.addGroup(u,N,x===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn extends Wt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Up extends Sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new k,x=new k,b=new k;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],x),p(n[R+2],b),l(v,x,b,m)}function l(m,v,x,b){const R=b+1,P=[];for(let N=0;N<=R;N++){P[N]=[];const T=m.clone().lerp(x,N/R),y=v.clone().lerp(x,N/R),D=R-N;for(let V=0;V<=D;V++)V===0&&N===R?P[N][V]=T:P[N][V]=T.clone().lerp(y,V/D)}for(let N=0;N<R;N++)for(let T=0;T<2*(R-N)-1;T++){const y=Math.floor(T/2);T%2===0?(h(P[N][y+1]),h(P[N+1][y]),h(P[N][y])):(h(P[N][y+1]),h(P[N+1][y+1]),h(P[N+1][y]))}}function c(m){const v=new k;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(m),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function d(){const m=new k;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const x=g(m)/2/Math.PI+.5,b=u(m)/Math.PI+.5;o.push(x,1-b)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],x=o[m+2],b=o[m+4],R=Math.max(v,x,b),P=Math.min(v,x,b);R>.9&&P<.1&&(v<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const x=m*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const m=new k,v=new k,x=new k,b=new k,R=new Ke,P=new Ke,N=new Ke;for(let T=0,y=0;T<s.length;T+=9,y+=6){m.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),R.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),N.set(o[y+4],o[y+5]),b.copy(m).add(v).add(x).divideScalar(3);const D=g(b);M(R,y+0,m,D),M(P,y+2,v,D),M(N,y+4,x,D)}}function M(m,v,x,b){b<0&&m.x===1&&(o[v]=m.x-1),x.x===0&&x.z===0&&(o[v]=b/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.vertices,e.indices,e.radius,e.details)}}class Qt extends Up{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qt(e.radius,e.detail)}}class mr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ke:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new Ht;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ux extends mr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ke){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class BM extends Ux{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Kl=new k,Pd=new Fp,Ld=new Fp,Dd=new Fp;class Ah extends mr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Kl.subVectors(r[0],r[1]).add(r[0]),c=Kl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Kl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),Pd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,_,M,g),Ld.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,_,M,g),Dd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,_,M,g)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Ld.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Dd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Pd.calc(l),Ld.calc(l),Dd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function HM(t,e){const n=1-t;return n*n*e}function VM(t,e){return 2*(1-t)*t*e}function GM(t,e){return t*t*e}function Ra(t,e,n,i){return HM(t,e)+VM(t,n)+GM(t,i)}function WM(t,e){const n=1-t;return n*n*n*e}function XM(t,e){const n=1-t;return 3*n*n*t*e}function jM(t,e){return 3*(1-t)*t*t*e}function YM(t,e){return t*t*t*e}function Pa(t,e,n,i,r){return WM(t,e)+XM(t,n)+jM(t,i)+YM(t,r)}class qM extends mr{constructor(e=new Ke,n=new Ke,i=new Ke,r=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Pa(e,r.x,s.x,o.x,a.x),Pa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $M extends mr{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Pa(e,r.x,s.x,o.x,a.x),Pa(e,r.y,s.y,o.y,a.y),Pa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KM extends mr{constructor(e=new Ke,n=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ke){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZM extends mr{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JM extends mr{constructor(e=new Ke,n=new Ke,i=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ra(e,r.x,s.x,o.x),Ra(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends mr{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ra(e,r.x,s.x,o.x),Ra(e,r.y,s.y,o.y),Ra(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QM extends mr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ke){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(pg(a,l.x,c.x,d.x,f.x),pg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ke().fromArray(r))}return this}}var e2=Object.freeze({__proto__:null,ArcCurve:BM,CatmullRomCurve3:Ah,CubicBezierCurve:qM,CubicBezierCurve3:$M,EllipseCurve:Ux,LineCurve:KM,LineCurve3:ZM,QuadraticBezierCurve:JM,QuadraticBezierCurve3:Fx,SplineCurve:QM});class rr extends Sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],M=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let v=0;v<c;v++){const x=v*f-s;_.push(x,-m,0),M.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,x=m+c*(u+1),b=m+1+c*(u+1),R=m+1+c*u;p.push(v,x,R),p.push(x,b,R)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class cn extends Sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new k,h=new k,p=[],_=[],M=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const R=b/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),g.push(R+x,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],x=d[u][m],b=d[u+1][m],R=d[u+1][m+1];(u!==0||o>0)&&p.push(v,x,R),(u!==i-1||l<Math.PI)&&p.push(x,b,R)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class an extends Sn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new k,f=new k,h=new k;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const M=_/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(M),f.y=(e+n*Math.cos(g))*Math.sin(M),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const M=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(M,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qc extends Sn{constructor(e=new Fx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Ke;let d=new k;const f=[],h=[],p=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function M(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){d=e.getPointAt(v/n,d);const x=o.normals[v],b=o.binormals[v];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,N=Math.sin(P),T=-Math.cos(P);l.x=T*x.x+N*b.x,l.y=T*x.y+N*b.y,l.z=T*x.z+N*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){const b=(r+1)*(v-1)+(x-1),R=(r+1)*v+(x-1),P=(r+1)*v+x,N=(r+1)*(v-1)+x;_.push(b,R,N),_.push(R,P,N)}}function m(){for(let v=0;v<=n;v++)for(let x=0;x<=r;x++)c.x=v/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qc(new e2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class yt extends Oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wx,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t2 extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n2 extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Op extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class i2 extends Op{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Nd=new Ht,mg=new k,gg=new k;class Ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gg),n.updateMatrixWorld(),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vg=new Ht,da=new k,Id=new k;class r2 extends Ox{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),i.position.copy(da),Id.copy(i.position),Id.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Id),i.updateMatrixWorld(),r.makeTranslation(-da.x,-da.y,-da.z),vg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg,i.coordinateSystem,i.reversedDepth)}}class fa extends Op{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new r2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kx extends Lx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class s2 extends Ox{constructor(){super(new kx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _g extends Op{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new s2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o2 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xg=new Ht;class a2{constructor(e,n,i=0,r=1/0){this.ray=new Lp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xg),this}intersectObject(e,n=!0,i=[]){return bh(e,this,i,n),i.sort(yg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bh(e[r],this,i,n);return i.sort(yg),i}}function yg(t,e){return t.distance-e.distance}function bh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)bh(s[o],e,n,!0)}}function Sg(t,e,n,i){const r=l2(i);switch(n){case xx:return t*e;case Sx:return t*e/r.components*r.byteLength;case bp:return t*e/r.components*r.byteLength;case Mx:return t*e*2/r.components*r.byteLength;case Cp:return t*e*2/r.components*r.byteLength;case yx:return t*e*3/r.components*r.byteLength;case bi:return t*e*4/r.components*r.byteLength;case Rp:return t*e*4/r.components*r.byteLength;case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Qf:return Math.max(t,16)*Math.max(e,8)/4;case Kf:case Jf:return Math.max(t,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vh:case _h:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function l2(t){switch(t){case Xi:case mx:return{byteLength:1,components:1};case qa:case gx:case rl:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Cs:case Ep:case ar:return{byteLength:4,components:1};case vx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function c2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const M=f[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var u2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d2=`#ifdef USE_ALPHAHASH
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
#endif`,f2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g2=`#ifdef USE_AOMAP
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
#endif`,v2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_2=`#ifdef USE_BATCHING
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
#endif`,x2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w2=`#ifdef USE_IRIDESCENCE
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
#endif`,E2=`#ifdef USE_BUMPMAP
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
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N2=`#define PI 3.141592653589793
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
} // validated`,I2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U2=`vec3 transformedNormal = objectNormal;
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
#endif`,F2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B2="gl_FragColor = linearToOutputTexel( gl_FragColor );",H2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V2=`#ifdef USE_ENVMAP
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
#endif`,G2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W2=`#ifdef USE_ENVMAP
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
#endif`,X2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z2=`#ifdef USE_GRADIENTMAP
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
}`,J2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tw=`uniform bool receiveShadow;
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
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aw=`PhysicalMaterial material;
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
#endif`,lw=`struct PhysicalMaterial {
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
}`,cw=`
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xw=`#if defined( USE_POINTS_UV )
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
#endif`,yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ww=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tw=`#ifdef USE_MORPHTARGETS
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
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dw=`#ifdef USE_NORMALMAP
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
#endif`,Nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qw=`float getShadowMask() {
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
}`,$w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kw=`#ifdef USE_SKINNING
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
#endif`,Zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,Qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
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
}`,gE=`#if DEPTH_PACKING == 3200
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
}`,vE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
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
}`,ME=`uniform vec3 diffuse;
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
}`,wE=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,TE=`#define LAMBERT
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
}`,AE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,CE=`#define MATCAP
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
}`,RE=`#define NORMAL
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
}`,PE=`#define NORMAL
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
}`,LE=`#define PHONG
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
}`,DE=`#define PHONG
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
}`,NE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,UE=`#define TOON
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
}`,FE=`#define TOON
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
}`,OE=`uniform float size;
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
}`,kE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,BE=`uniform vec3 color;
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
}`,HE=`uniform float rotation;
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
}`,VE=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:u2,alphahash_pars_fragment:d2,alphamap_fragment:f2,alphamap_pars_fragment:h2,alphatest_fragment:p2,alphatest_pars_fragment:m2,aomap_fragment:g2,aomap_pars_fragment:v2,batching_pars_vertex:_2,batching_vertex:x2,begin_vertex:y2,beginnormal_vertex:S2,bsdfs:M2,iridescence_fragment:w2,bumpmap_pars_fragment:E2,clipping_planes_fragment:T2,clipping_planes_pars_fragment:A2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:C2,color_fragment:R2,color_pars_fragment:P2,color_pars_vertex:L2,color_vertex:D2,common:N2,cube_uv_reflection_fragment:I2,defaultnormal_vertex:U2,displacementmap_pars_vertex:F2,displacementmap_vertex:O2,emissivemap_fragment:k2,emissivemap_pars_fragment:z2,colorspace_fragment:B2,colorspace_pars_fragment:H2,envmap_fragment:V2,envmap_common_pars_fragment:G2,envmap_pars_fragment:W2,envmap_pars_vertex:X2,envmap_physical_pars_fragment:nw,envmap_vertex:j2,fog_vertex:Y2,fog_pars_vertex:q2,fog_fragment:$2,fog_pars_fragment:K2,gradientmap_pars_fragment:Z2,lightmap_pars_fragment:J2,lights_lambert_fragment:Q2,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:ow,lights_physical_fragment:aw,lights_physical_pars_fragment:lw,lights_fragment_begin:cw,lights_fragment_maps:uw,lights_fragment_end:dw,logdepthbuf_fragment:fw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:pw,logdepthbuf_vertex:mw,map_fragment:gw,map_pars_fragment:vw,map_particle_fragment:_w,map_particle_pars_fragment:xw,metalnessmap_fragment:yw,metalnessmap_pars_fragment:Sw,morphinstance_vertex:Mw,morphcolor_vertex:ww,morphnormal_vertex:Ew,morphtarget_pars_vertex:Tw,morphtarget_vertex:Aw,normal_fragment_begin:bw,normal_fragment_maps:Cw,normal_pars_fragment:Rw,normal_pars_vertex:Pw,normal_vertex:Lw,normalmap_pars_fragment:Dw,clearcoat_normal_fragment_begin:Nw,clearcoat_normal_fragment_maps:Iw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Fw,opaque_fragment:Ow,packing:kw,premultiplied_alpha_fragment:zw,project_vertex:Bw,dithering_fragment:Hw,dithering_pars_fragment:Vw,roughnessmap_fragment:Gw,roughnessmap_pars_fragment:Ww,shadowmap_pars_fragment:Xw,shadowmap_pars_vertex:jw,shadowmap_vertex:Yw,shadowmask_pars_fragment:qw,skinbase_vertex:$w,skinning_pars_vertex:Kw,skinning_vertex:Zw,skinnormal_vertex:Jw,specularmap_fragment:Qw,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:aE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:dE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:pE,depth_vert:mE,depth_frag:gE,distanceRGBA_vert:vE,distanceRGBA_frag:_E,equirect_vert:xE,equirect_frag:yE,linedashed_vert:SE,linedashed_frag:ME,meshbasic_vert:wE,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:AE,meshmatcap_vert:bE,meshmatcap_frag:CE,meshnormal_vert:RE,meshnormal_frag:PE,meshphong_vert:LE,meshphong_frag:DE,meshphysical_vert:NE,meshphysical_frag:IE,meshtoon_vert:UE,meshtoon_frag:FE,points_vert:OE,points_frag:kE,shadow_vert:zE,shadow_frag:BE,sprite_vert:HE,sprite_frag:VE},Le={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ki={basic:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:kn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:kn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:kn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:kn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:kn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:kn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:kn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:kn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:kn([Le.common,Le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:kn([Le.lights,Le.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Zl={r:0,b:0,g:0},as=new ji,GE=new Ht;function WE(t,e,n,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function M(v){let x=!1;const b=_(v);b===null?u(a,l):b&&b.isColor&&(u(b,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===du)?(d===void 0&&(d=new ne(new ln(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Do(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),as.copy(x.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(as)),d.material.toneMapped=At.getTransfer(b.colorSpace)!==It,(f!==b||h!==b.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ne(new rr(2,2),new qr({name:"BackgroundMaterial",uniforms:Do(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=At.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Zl,Px(t)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,x,o)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:M,addToRenderList:g,dispose:m}}function XE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,D,V,W,le){let ie=!1;const se=f(W,V,D);s!==se&&(s=se,c(s.object)),ie=p(y,W,V,le),ie&&_(y,W,V,le),le!==null&&e.update(le,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,x(y,D,V,W),le!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,D,V){const W=V.wireframe===!0;let le=i[y.id];le===void 0&&(le={},i[y.id]=le);let ie=le[D.id];ie===void 0&&(ie={},le[D.id]=ie);let se=ie[W];return se===void 0&&(se=h(l()),ie[W]=se),se}function h(y){const D=[],V=[],W=[];for(let le=0;le<n;le++)D[le]=0,V[le]=0,W[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,D,V,W){const le=s.attributes,ie=D.attributes;let se=0;const F=V.getAttributes();for(const O in F)if(F[O].location>=0){const te=le[O];let Se=ie[O];if(Se===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),te===void 0||te.attribute!==Se||Se&&te.data!==Se.data)return!0;se++}return s.attributesNum!==se||s.index!==W}function _(y,D,V,W){const le={},ie=D.attributes;let se=0;const F=V.getAttributes();for(const O in F)if(F[O].location>=0){let te=ie[O];te===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const Se={};Se.attribute=te,te&&te.data&&(Se.data=te.data),le[O]=Se,se++}s.attributes=le,s.attributesNum=se,s.index=W}function M(){const y=s.newAttributes;for(let D=0,V=y.length;D<V;D++)y[D]=0}function g(y){u(y,0)}function u(y,D){const V=s.newAttributes,W=s.enabledAttributes,le=s.attributeDivisors;V[y]=1,W[y]===0&&(t.enableVertexAttribArray(y),W[y]=1),le[y]!==D&&(t.vertexAttribDivisor(y,D),le[y]=D)}function m(){const y=s.newAttributes,D=s.enabledAttributes;for(let V=0,W=D.length;V<W;V++)D[V]!==y[V]&&(t.disableVertexAttribArray(V),D[V]=0)}function v(y,D,V,W,le,ie,se){se===!0?t.vertexAttribIPointer(y,D,V,le,ie):t.vertexAttribPointer(y,D,V,W,le,ie)}function x(y,D,V,W){M();const le=W.attributes,ie=V.getAttributes(),se=D.defaultAttributeValues;for(const F in ie){const O=ie[F];if(O.location>=0){let $=le[F];if($===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const te=$.normalized,Se=$.itemSize,Ie=e.get($);if(Ie===void 0)continue;const Pe=Ie.buffer,me=Ie.type,X=Ie.bytesPerElement,Z=me===t.INT||me===t.UNSIGNED_INT||$.gpuType===Ep;if($.isInterleavedBufferAttribute){const fe=$.data,Fe=fe.stride,Ze=$.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<O.locationSize;He++)u(O.location+He,fe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<O.locationSize;He++)g(O.location+He);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let He=0;He<O.locationSize;He++)v(O.location+He,Se/O.locationSize,me,te,Fe*X,(Ze+Se/O.locationSize*He)*X,Z)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)u(O.location+fe,$.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<O.locationSize;fe++)g(O.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let fe=0;fe<O.locationSize;fe++)v(O.location+fe,Se/O.locationSize,me,te,Se*X,Se/O.locationSize*fe*X,Z)}}else if(se!==void 0){const te=se[F];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(O.location,te);break;case 3:t.vertexAttrib3fv(O.location,te);break;case 4:t.vertexAttrib4fv(O.location,te);break;default:t.vertexAttrib1fv(O.location,te)}}}}m()}function b(){N();for(const y in i){const D=i[y];for(const V in D){const W=D[V];for(const le in W)d(W[le].object),delete W[le];delete D[V]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const V in D){const W=D[V];for(const le in W)d(W[le].object),delete W[le];delete D[V]}delete i[y.id]}function P(y){for(const D in i){const V=i[D];if(V[y.id]===void 0)continue;const W=V[y.id];for(const le in W)d(W[le].object),delete W[le];delete V[y.id]}}function N(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function jE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let M=0;M<f;M++)_+=d[M]*h[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==bi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Xi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ar&&!N)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,maxSamples:R}}function qE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new fs,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let x=u.clippingState||null;l.value=x,x=d(_,h,v,p);for(let b=0;b!==v;++b)x[b]=n[b];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const u=p+M*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,x=p;v!==M;++v,x+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function $E(t){let e=new WeakMap;function n(o,a){return a===Yf?o.mapping=Ro:a===qf&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yf||a===qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new NM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const uo=4,Mg=[.125,.215,.35,.446,.526,.582],ms=20,Ud=new kx,wg=new St;let Fd=null,Od=0,kd=0,zd=!1;const hs=(1+Math.sqrt(5))/2,Zs=1/hs,Eg=[new k(-hs,Zs,0),new k(hs,Zs,0),new k(-Zs,0,hs),new k(Zs,0,hs),new k(0,hs,-Zs),new k(0,hs,Zs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],KE=new k;class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=KE}=s;Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Od,kd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ro||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:rl,format:bi,colorSpace:Lo,depthBuffer:!1},r=Ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(s)),this._blurMaterial=JE(s,e,n)}return r}_compileMaterial(e){const n=new ne(this._lodPlanes[0],e);this._renderer.compile(n,Ud)}_sceneToCubeUV(e,n,i,r,s){const l=new ti(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(wg),f.toneMapping=Wr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new hu({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),g=new ne(new ln,M);let u=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,u=!0):(M.color.copy(wg),u=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const b=this._cubeSize;Jl(r,x*b,v>2?b:0,b,b),f.setRenderTarget(r),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ro||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ud)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eg[(r-s-1)%Eg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ne(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ms-1),M=s/_,g=isFinite(s)?1+Math.floor(d*M):ms;g>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const u=[];let m=0;for(let P=0;P<ms;++P){const N=P/M,T=Math.exp(-N*N/2);u.push(T),P===0?m+=T:P<g&&(m+=2*T)}for(let P=0;P<u.length;P++)u[P]=u[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-uo?r-v+uo:0),R=4*(this._cubeSize-x);Jl(n,b,R,3*x,2*x),l.setRenderTarget(n),l.render(f,Ud)}}function ZE(t){const e=[],n=[],i=[];let r=t;const s=t-uo+1+Mg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-uo?l=Mg[o-t+uo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,M=3,g=2,u=1,m=new Float32Array(M*_*p),v=new Float32Array(g*_*p),x=new Float32Array(u*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,N=R>2?0:-1,T=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];m.set(T,M*_*R),v.set(h,g*_*R);const y=[R,R,R,R,R,R];x.set(y,u*_*R)}const b=new Sn;b.setAttribute("position",new Wi(m,M)),b.setAttribute("uv",new Wi(v,g)),b.setAttribute("faceIndex",new Wi(x,u)),e.push(b),r>uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ag(t,e,n){const i=new Rs(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function JE(t,e,n){const i=new Float32Array(ms),r=new k(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function bg(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Cg(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function kp(){return`

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
	`}function QE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yf||l===qf,d=l===Ro||l===Po;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Tg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Tg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function eT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let M=0;if(p!==null){const m=p.array;M=p.version;for(let v=0,x=m.length;v<x;v+=3){const b=m[v+0],R=m[v+1],P=m[v+2];h.push(b,R,R,P,P,b)}}else if(_!==void 0){const m=_.array;M=_.version;for(let v=0,x=m.length/3-1;v<x;v+=3){const b=v+0,R=v+1,P=v+2;h.push(b,R,R,P,P,b)}}else return;const g=new(Tx(h)?Rx:Cx)(h,1);g.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function nT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function f(h,p,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],M[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*M[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function iT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rT(t,e,n){const i=new WeakMap,r=new Ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),M===!0&&(x=2),g===!0&&(x=3);let b=a.attributes.position.count*x,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*R*4*f),N=new Ax(P,b,R,f);N.type=ar,N.needsUpdate=!0;const T=x*4;for(let D=0;D<f;D++){const V=u[D],W=m[D],le=v[D],ie=b*R*4*D;for(let se=0;se<V.count;se++){const F=se*T;_===!0&&(r.fromBufferAttribute(V,se),P[ie+F+0]=r.x,P[ie+F+1]=r.y,P[ie+F+2]=r.z,P[ie+F+3]=0),M===!0&&(r.fromBufferAttribute(W,se),P[ie+F+4]=r.x,P[ie+F+5]=r.y,P[ie+F+6]=r.z,P[ie+F+7]=0),g===!0&&(r.fromBufferAttribute(le,se),P[ie+F+8]=r.x,P[ie+F+9]=r.y,P[ie+F+10]=r.z,P[ie+F+11]=le.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Ke(b,R)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function sT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Bx=new Hn,Rg=new Nx(1,1),Hx=new Ax,Vx=new gM,Gx=new Dx,Pg=[],Lg=[],Dg=new Float32Array(16),Ng=new Float32Array(9),Ig=new Float32Array(4);function ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pg[r];if(s===void 0&&(s=new Float32Array(r),Pg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function fn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function hn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pu(t,e){let n=Lg[e];n===void 0&&(n=new Int32Array(e),Lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2fv(this.addr,e),hn(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;t.uniform3fv(this.addr,e),hn(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4fv(this.addr,e),hn(n,e)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;Ig.set(i),t.uniformMatrix2fv(this.addr,!1,Ig),hn(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;Ng.set(i),t.uniformMatrix3fv(this.addr,!1,Ng),hn(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),hn(n,e)}else{if(fn(n,i))return;Dg.set(i),t.uniformMatrix4fv(this.addr,!1,Dg),hn(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2iv(this.addr,e),hn(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3iv(this.addr,e),hn(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4iv(this.addr,e),hn(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2uiv(this.addr,e),hn(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3uiv(this.addr,e),hn(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4uiv(this.addr,e),hn(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rg.compareFunction=Ex,s=Rg):s=Bx,n.setTexture2D(e||s,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vx,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gx,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hx,r)}function TT(t){switch(t){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return ET}}function AT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=ko(e,this.size,2);t.uniform2fv(this.addr,n)}function CT(t,e){const n=ko(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=ko(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){const n=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LT(t,e){const n=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DT(t,e){const n=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function IT(t,e){t.uniform2iv(this.addr,e)}function UT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function BT(t,e){t.uniform4uiv(this.addr,e)}function HT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Bx,s[o])}function VT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vx,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gx,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hx,s[o])}function XT(t){switch(t){case 5126:return AT;case 35664:return bT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return NT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return kT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TT(n.type)}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XT(n.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Ug(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(Bd.lastIndex=0;;){const s=Bd.exec(i),o=Bd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ug(n,c===void 0?new jT(a,t,e):new YT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new qT(a),Ug(n,f)),n=f}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$T(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KT=37297;let ZT=0;function JT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Og=new ut;function QT(t){At._getMatrix(Og,At.workingColorSpace,t);const e=`mat3( ${Og.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+JT(t.getShaderSource(e),a)}else return s}function eA(t,e){const n=QT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tA(t,e){let n;switch(e){case XS:n="Linear";break;case jS:n="Reinhard";break;case YS:n="Cineon";break;case hx:n="ACESFilmic";break;case $S:n="AgX";break;case KS:n="Neutral";break;case qS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new k;function nA(){At.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function rA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xa(t){return t!==""}function zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(t){return t.replace(oA,lA)}const aA=new Map;function lA(t,e){let n=ft[e];if(n===void 0){const i=aA.get(e);if(i!==void 0)n=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ch(n)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(cA,uA)}function uA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function dA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function fA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ro:case Po:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fx:e="ENVMAP_BLENDING_MULTIPLY";break;case GS:e="ENVMAP_BLENDING_MIX";break;case WS:e="ENVMAP_BLENDING_ADD";break}return e}function mA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dA(n),c=fA(n),d=hA(n),f=pA(n),h=mA(n),p=iA(n),_=rA(s),M=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),u.length>0&&(u+=`
`)):(g=[Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),u=[Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wr?"#define TONE_MAPPING":"",n.toneMapping!==Wr?ft.tonemapping_pars_fragment:"",n.toneMapping!==Wr?tA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,eA("linearToOutputTexel",n.outputColorSpace),nA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),o=Ch(o),o=zg(o,n),o=Bg(o,n),a=Ch(a),a=zg(a,n),a=Bg(a,n),o=Hg(o),a=Hg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,x=m+u+a,b=Fg(r,r.VERTEX_SHADER,v),R=Fg(r,r.FRAGMENT_SHADER,x);r.attachShader(M,b),r.attachShader(M,R),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(D){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(b)||"",le=r.getShaderInfoLog(R)||"",ie=V.trim(),se=W.trim(),F=le.trim();let O=!0,$=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,R);else{const te=kg(r,b,"vertex"),Se=kg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ie+`
`+te+`
`+Se)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(se===""||F==="")&&($=!1);$&&(D.diagnostics={runnable:O,programLog:ie,vertexShader:{log:se,prefix:g},fragmentShader:{log:F,prefix:u}})}r.deleteShader(b),r.deleteShader(R),N=new vc(r,M),T=sA(r,M)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,KT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=R,this}let vA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xA(e),n.set(e,i)),i}}class xA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function yA(t,e,n,i,r,s,o){const a=new Dp,l=new _A,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,y,D,V,W){const le=V.fog,ie=W.geometry,se=T.isMeshStandardMaterial?V.environment:null,F=(T.isMeshStandardMaterial?n:e).get(T.envMap||se),O=F&&F.mapping===du?F.image.height:null,$=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const te=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Se=te!==void 0?te.length:0;let Ie=0;ie.morphAttributes.position!==void 0&&(Ie=1),ie.morphAttributes.normal!==void 0&&(Ie=2),ie.morphAttributes.color!==void 0&&(Ie=3);let Pe,me,X,Z;if($){const Mt=ki[$];Pe=Mt.vertexShader,me=Mt.fragmentShader}else Pe=T.vertexShader,me=T.fragmentShader,l.update(T),X=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Ze=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,dt=!!T.map,wt=!!T.matcap,U=!!F,bt=!!T.aoMap,st=!!T.lightMap,et=!!T.bumpMap,z=!!T.normalMap,Te=!!T.displacementMap,re=!!T.emissiveMap,ae=!!T.metalnessMap,Ye=!!T.roughnessMap,qe=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,ee=T.sheen>0,ue=T.transmission>0,oe=qe&&!!T.anisotropyMap,De=L&&!!T.clearcoatMap,ve=L&&!!T.clearcoatNormalMap,Ve=L&&!!T.clearcoatRoughnessMap,Ge=Y&&!!T.iridescenceMap,ye=Y&&!!T.iridescenceThicknessMap,Ne=ee&&!!T.sheenColorMap,it=ee&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ce=!!T.specularColorMap,lt=!!T.specularIntensityMap,H=ue&&!!T.transmissionMap,pe=ue&&!!T.thicknessMap,Ee=!!T.gradientMap,Oe=!!T.alphaMap,ge=T.alphaTest>0,he=!!T.alphaHash,Be=!!T.extensions;let rt=Wr;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=t.toneMapping);const Nt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:me,defines:T.defines,customVertexShaderID:X,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:He,batchingColor:He&&W._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&W.instanceColor!==null,instancingMorph:Ze&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Lo,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:wt,envMap:U,envMapMode:U&&F.mapping,envMapCubeUVHeight:O,aoMap:bt,lightMap:st,bumpMap:et,normalMap:z,displacementMap:h&&Te,emissiveMap:re,normalMapObjectSpace:z&&T.normalMapType===eM,normalMapTangentSpace:z&&T.normalMapType===wx,metalnessMap:ae,roughnessMap:Ye,anisotropy:qe,anisotropyMap:oe,clearcoat:L,clearcoatMap:De,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:Y,iridescenceMap:Ge,iridescenceThicknessMap:ye,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:it,specularMap:We,specularColorMap:Ce,specularIntensityMap:lt,transmission:ue,transmissionMap:H,thicknessMap:pe,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===_o&&T.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ge,alphaHash:he,combine:T.combine,mapUv:dt&&M(T.map.channel),aoMapUv:bt&&M(T.aoMap.channel),lightMapUv:st&&M(T.lightMap.channel),bumpMapUv:et&&M(T.bumpMap.channel),normalMapUv:z&&M(T.normalMap.channel),displacementMapUv:Te&&M(T.displacementMap.channel),emissiveMapUv:re&&M(T.emissiveMap.channel),metalnessMapUv:ae&&M(T.metalnessMap.channel),roughnessMapUv:Ye&&M(T.roughnessMap.channel),anisotropyMapUv:oe&&M(T.anisotropyMap.channel),clearcoatMapUv:De&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ve&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(T.sheenRoughnessMap.channel),specularMapUv:We&&M(T.specularMap.channel),specularColorMapUv:Ce&&M(T.specularColorMap.channel),specularIntensityMapUv:lt&&M(T.specularIntensityMap.channel),transmissionMapUv:H&&M(T.transmissionMap.channel),thicknessMapUv:pe&&M(T.thicknessMap.channel),alphaMapUv:Oe&&M(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(z||qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(dt||Oe),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Fe,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:re&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ti,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)y.push(D),y.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(m(y,T),v(y,T),y.push(t.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function m(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=_[T.type];let D;if(y){const V=ki[y];D=RM.clone(V.uniforms)}else D=T.uniforms;return D}function b(T,y){let D;for(let V=0,W=d.length;V<W;V++){const le=d[V];if(le.cacheKey===y){D=le,++D.usedTimes;break}}return D===void 0&&(D=new gA(t,y,T,s),d.push(D)),D}function R(T){if(--T.usedTimes===0){const y=d.indexOf(T);d[y]=d[d.length-1],d.pop(),T.destroy()}}function P(T){l.remove(T)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:b,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:N}}function SA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,M,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:M,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=M,u.group=g),e++,u}function a(f,h,p,_,M,g){const u=o(f,h,p,_,M,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,M,g){const u=o(f,h,p,_,M,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||MA),i.length>1&&i.sort(h||Gg),r.length>1&&r.sort(h||Gg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function wA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wg,t.set(i,[o])):r>=s.length?(o=new Wg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new St};break;case"SpotLight":n={position:new k,direction:new k,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AA=0;function bA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CA(t){const e=new EA,n=TA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Ht,o=new Ht;function a(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,M=0,g=0,u=0,m=0,v=0,x=0,b=0,R=0,P=0;c.sort(bA);for(let T=0,y=c.length;T<y;T++){const D=c[T],V=D.color,W=D.intensity,le=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*W,f+=V.g*W,h+=V.b*W;else if(D.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(D.sh.coefficients[se],W);P++}else if(D.isDirectionalLight){const se=e.get(D);if(se.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,O=n.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=se,p++}else if(D.isSpotLight){const se=e.get(D);se.position.setFromMatrixPosition(D.matrixWorld),se.color.copy(V).multiplyScalar(W),se.distance=le,se.coneCos=Math.cos(D.angle),se.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),se.decay=D.decay,i.spot[M]=se;const F=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,F.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[M]=F.matrix,D.castShadow){const O=n.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=ie,x++}M++}else if(D.isRectAreaLight){const se=e.get(D);se.color.copy(V).multiplyScalar(W),se.halfWidth.set(D.width*.5,0,0),se.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=se,g++}else if(D.isPointLight){const se=e.get(D);if(se.color.copy(D.color).multiplyScalar(D.intensity),se.distance=D.distance,se.decay=D.decay,D.castShadow){const F=D.shadow,O=n.get(D);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=se,_++}else if(D.isHemisphereLight){const se=e.get(D);se.skyColor.copy(D.color).multiplyScalar(W),se.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[u]=se,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==M||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==m||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,N.directionalLength=p,N.pointLength=_,N.spotLength=M,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=m,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=P,i.version=AA++)}function l(c,d){let f=0,h=0,p=0,_=0,M=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function Xg(t){const e=new CA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xg(t),e.set(r,[a])):s>=o.length?(a=new Xg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
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
}`;function DA(t,e,n){let i=new Ip;const r=new Ke,s=new Ke,o=new Ut,a=new t2({depthPacking:QS}),l=new n2,c={},d=n.maxTextureSize,f={[Yr]:Zn,[Zn]:Yr,[Ti]:Ti},h=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:PA,fragmentShader:LA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Sn;_.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ne(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ux;let u=this.type;this.render=function(R,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),y=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Gr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=u!==tr&&this.type===tr,le=u===tr&&this.type!==tr;for(let ie=0,se=R.length;ie<se;ie++){const F=R[ie],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const $=O.getFrameExtents();if(r.multiply($),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null||W===!0||le===!0){const Se=this.type!==tr?{minFilter:Pi,magFilter:Pi}:{};O.map!==null&&O.map.dispose(),O.map=new Rs(r.x,r.y,Se),O.map.texture.name=F.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const te=O.getViewportCount();for(let Se=0;Se<te;Se++){const Ie=O.getViewport(Se);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),V.viewport(o),O.updateMatrices(F,Se),i=O.getFrustum(),x(P,N,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===tr&&m(O,N),O.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(T,y,D)};function m(R,P){const N=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rs(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,N,h,M,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,N,p,M,null)}function v(R,P,N,T){let y=null;const D=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=N.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=y.uuid,W=P.uuid;let le=c[V];le===void 0&&(le={},c[V]=le);let ie=le[W];ie===void 0&&(ie=y.clone(),le[W]=ie,P.addEventListener("dispose",b)),y=ie}if(y.visible=P.visible,y.wireframe=P.wireframe,T===tr?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=N}return y}function x(R,P,N,T,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===tr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const W=e.update(R),le=R.material;if(Array.isArray(le)){const ie=W.groups;for(let se=0,F=ie.length;se<F;se++){const O=ie[se],$=le[O.materialIndex];if($&&$.visible){const te=v(R,$,T,y);R.onBeforeShadow(t,R,P,N,W,te,O),t.renderBufferDirect(N,null,W,te,R,O),R.onAfterShadow(t,R,P,N,W,te,O)}}}else if(le.visible){const ie=v(R,le,T,y);R.onBeforeShadow(t,R,P,N,W,ie,null),t.renderBufferDirect(N,null,W,ie,R,null),R.onAfterShadow(t,R,P,N,W,ie,null)}}const V=R.children;for(let W=0,le=V.length;W<le;W++)x(V[W],P,N,T,y)}function b(R){R.target.removeEventListener("dispose",b);for(const N in c){const T=c[N],y=R.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const NA={[Bf]:Hf,[Vf]:Xf,[Gf]:jf,[Co]:Wf,[Hf]:Bf,[Xf]:Vf,[jf]:Gf,[Wf]:Co};function IA(t,e){function n(){let H=!1;const pe=new Ut;let Ee=null;const Oe=new Ut(0,0,0,0);return{setMask:function(ge){Ee!==ge&&!H&&(t.colorMask(ge,ge,ge,ge),Ee=ge)},setLocked:function(ge){H=ge},setClear:function(ge,he,Be,rt,Nt){Nt===!0&&(ge*=rt,he*=rt,Be*=rt),pe.set(ge,he,Be,rt),Oe.equals(pe)===!1&&(t.clearColor(ge,he,Be,rt),Oe.copy(pe))},reset:function(){H=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let H=!1,pe=!1,Ee=null,Oe=null,ge=null;return{setReversed:function(he){if(pe!==he){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),pe=he;const rt=ge;ge=null,this.setClear(rt)}},getReversed:function(){return pe},setTest:function(he){he?fe(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!H&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(pe&&(he=NA[he]),Oe!==he){switch(he){case Bf:t.depthFunc(t.NEVER);break;case Hf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case jf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Oe=he}},setLocked:function(he){H=he},setClear:function(he){ge!==he&&(pe&&(he=1-he),t.clearDepth(he),ge=he)},reset:function(){H=!1,Ee=null,Oe=null,ge=null,pe=!1}}}function r(){let H=!1,pe=null,Ee=null,Oe=null,ge=null,he=null,Be=null,rt=null,Nt=null;return{setTest:function(Mt){H||(Mt?fe(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(Mt){pe!==Mt&&!H&&(t.stencilMask(Mt),pe=Mt)},setFunc:function(Mt,sn,ai){(Ee!==Mt||Oe!==sn||ge!==ai)&&(t.stencilFunc(Mt,sn,ai),Ee=Mt,Oe=sn,ge=ai)},setOp:function(Mt,sn,ai){(he!==Mt||Be!==sn||rt!==ai)&&(t.stencilOp(Mt,sn,ai),he=Mt,Be=sn,rt=ai)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Nt!==Mt&&(t.clearStencil(Mt),Nt=Mt)},reset:function(){H=!1,pe=null,Ee=null,Oe=null,ge=null,he=null,Be=null,rt=null,Nt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,M=!1,g=null,u=null,m=null,v=null,x=null,b=null,R=null,P=new St(0,0,0),N=0,T=!1,y=null,D=null,V=null,W=null,le=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,F=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),se=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),se=F>=2);let $=null,te={};const Se=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Pe=new Ut().fromArray(Se),me=new Ut().fromArray(Ie);function X(H,pe,Ee,Oe){const ge=new Uint8Array(4),he=t.createTexture();t.bindTexture(H,he),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Ee;Be++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(pe+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return he}const Z={};Z[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),o.setFunc(Co),et(!1),z(H0),fe(t.CULL_FACE),bt(Gr);function fe(H){d[H]!==!0&&(t.enable(H),d[H]=!0)}function Fe(H){d[H]!==!1&&(t.disable(H),d[H]=!1)}function Ze(H,pe){return f[H]!==pe?(t.bindFramebuffer(H,pe),f[H]=pe,H===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),H===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function He(H,pe){let Ee=p,Oe=!1;if(H){Ee=h.get(pe),Ee===void 0&&(Ee=[],h.set(pe,Ee));const ge=H.textures;if(Ee.length!==ge.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Be=ge.length;he<Be;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=ge.length,Oe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Oe=!0);Oe&&t.drawBuffers(Ee)}function dt(H){return _!==H?(t.useProgram(H),_=H,!0):!1}const wt={[ps]:t.FUNC_ADD,[AS]:t.FUNC_SUBTRACT,[bS]:t.FUNC_REVERSE_SUBTRACT};wt[CS]=t.MIN,wt[RS]=t.MAX;const U={[PS]:t.ZERO,[LS]:t.ONE,[DS]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[kS]:t.SRC_ALPHA_SATURATE,[FS]:t.DST_COLOR,[IS]:t.DST_ALPHA,[NS]:t.ONE_MINUS_SRC_COLOR,[zf]:t.ONE_MINUS_SRC_ALPHA,[OS]:t.ONE_MINUS_DST_COLOR,[US]:t.ONE_MINUS_DST_ALPHA,[zS]:t.CONSTANT_COLOR,[BS]:t.ONE_MINUS_CONSTANT_COLOR,[HS]:t.CONSTANT_ALPHA,[VS]:t.ONE_MINUS_CONSTANT_ALPHA};function bt(H,pe,Ee,Oe,ge,he,Be,rt,Nt,Mt){if(H===Gr){M===!0&&(Fe(t.BLEND),M=!1);return}if(M===!1&&(fe(t.BLEND),M=!0),H!==TS){if(H!==g||Mt!==T){if((u!==ps||x!==ps)&&(t.blendEquation(t.FUNC_ADD),u=ps,x=ps),Mt)switch(H){case _o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case V0:t.blendFunc(t.ONE,t.ONE);break;case G0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case W0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case V0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case G0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,v=null,b=null,R=null,P.set(0,0,0),N=0,g=H,T=Mt}return}ge=ge||pe,he=he||Ee,Be=Be||Oe,(pe!==u||ge!==x)&&(t.blendEquationSeparate(wt[pe],wt[ge]),u=pe,x=ge),(Ee!==m||Oe!==v||he!==b||Be!==R)&&(t.blendFuncSeparate(U[Ee],U[Oe],U[he],U[Be]),m=Ee,v=Oe,b=he,R=Be),(rt.equals(P)===!1||Nt!==N)&&(t.blendColor(rt.r,rt.g,rt.b,Nt),P.copy(rt),N=Nt),g=H,T=!1}function st(H,pe){H.side===Ti?Fe(t.CULL_FACE):fe(t.CULL_FACE);let Ee=H.side===Zn;pe&&(Ee=!Ee),et(Ee),H.blending===_o&&H.transparent===!1?bt(Gr):bt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Oe=H.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),re(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(H){y!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),y=H)}function z(H){H!==wS?(fe(t.CULL_FACE),H!==D&&(H===H0?t.cullFace(t.BACK):H===ES?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),D=H}function Te(H){H!==V&&(se&&t.lineWidth(H),V=H)}function re(H,pe,Ee){H?(fe(t.POLYGON_OFFSET_FILL),(W!==pe||le!==Ee)&&(t.polygonOffset(pe,Ee),W=pe,le=Ee)):Fe(t.POLYGON_OFFSET_FILL)}function ae(H){H?fe(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Ye(H){H===void 0&&(H=t.TEXTURE0+ie-1),$!==H&&(t.activeTexture(H),$=H)}function qe(H,pe,Ee){Ee===void 0&&($===null?Ee=t.TEXTURE0+ie-1:Ee=$);let Oe=te[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},te[Ee]=Oe),(Oe.type!==H||Oe.texture!==pe)&&($!==Ee&&(t.activeTexture(Ee),$=Ee),t.bindTexture(H,pe||Z[H]),Oe.type=H,Oe.texture=pe)}function L(){const H=te[$];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(H){Pe.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Pe.copy(H))}function it(H){me.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function We(H,pe){let Ee=c.get(pe);Ee===void 0&&(Ee=new WeakMap,c.set(pe,Ee));let Oe=Ee.get(H);Oe===void 0&&(Oe=t.getUniformBlockIndex(pe,H.name),Ee.set(H,Oe))}function Ce(H,pe){const Oe=c.get(pe).get(H);l.get(pe)!==Oe&&(t.uniformBlockBinding(pe,Oe,H.__bindingPointIndex),l.set(pe,Oe))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,te={},f={},h=new WeakMap,p=[],_=null,M=!1,g=null,u=null,m=null,v=null,x=null,b=null,R=null,P=new St(0,0,0),N=0,T=!1,y=null,D=null,V=null,W=null,le=null,Pe.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Fe,bindFramebuffer:Ze,drawBuffers:He,useProgram:dt,setBlending:bt,setMaterial:st,setFlipSided:et,setCullFace:z,setLineWidth:Te,setPolygonOffset:re,setScissorTest:ae,activeTexture:Ye,bindTexture:qe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:Ge,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Ce,texStorage2D:ve,texStorage3D:Ve,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:De,scissor:Ne,viewport:it,reset:lt}}function UA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return p?new OffscreenCanvas(L,E):Xc("canvas")}function M(L,E,Y){let ee=1;const ue=qe(L);if((ue.width>Y||ue.height>Y)&&(ee=Y/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(ee*ue.width),De=Math.floor(ee*ue.height);f===void 0&&(f=_(oe,De));const ve=E?_(oe,De):f;return ve.width=oe,ve.height=De,ve.getContext("2d").drawImage(L,0,0,oe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+oe+"x"+De+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function m(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(L,E,Y,ee,ue=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=E;if(E===t.RED&&(Y===t.FLOAT&&(oe=t.R32F),Y===t.HALF_FLOAT&&(oe=t.R16F),Y===t.UNSIGNED_BYTE&&(oe=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.R8UI),Y===t.UNSIGNED_SHORT&&(oe=t.R16UI),Y===t.UNSIGNED_INT&&(oe=t.R32UI),Y===t.BYTE&&(oe=t.R8I),Y===t.SHORT&&(oe=t.R16I),Y===t.INT&&(oe=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(oe=t.RG32F),Y===t.HALF_FLOAT&&(oe=t.RG16F),Y===t.UNSIGNED_BYTE&&(oe=t.RG8)),E===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RG8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RG16UI),Y===t.UNSIGNED_INT&&(oe=t.RG32UI),Y===t.BYTE&&(oe=t.RG8I),Y===t.SHORT&&(oe=t.RG16I),Y===t.INT&&(oe=t.RG32I)),E===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),Y===t.UNSIGNED_INT&&(oe=t.RGB32UI),Y===t.BYTE&&(oe=t.RGB8I),Y===t.SHORT&&(oe=t.RGB16I),Y===t.INT&&(oe=t.RGB32I)),E===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),Y===t.UNSIGNED_INT&&(oe=t.RGBA32UI),Y===t.BYTE&&(oe=t.RGBA8I),Y===t.SHORT&&(oe=t.RGBA16I),Y===t.INT&&(oe=t.RGBA32I)),E===t.RGB&&(Y===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),Y===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),E===t.RGBA){const De=ue?Gc:At.getTransfer(ee);Y===t.FLOAT&&(oe=t.RGBA32F),Y===t.HALF_FLOAT&&(oe=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(oe=De===It?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(L,E){let Y;return L?E===null||E===Cs||E===$a?Y=t.DEPTH24_STENCIL8:E===ar?Y=t.DEPTH32F_STENCIL8:E===qa&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cs||E===$a?Y=t.DEPTH_COMPONENT24:E===ar?Y=t.DEPTH_COMPONENT32F:E===qa&&(Y=t.DEPTH_COMPONENT16),Y}function b(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pi&&L.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),N(E),E.isVideoTexture&&d.delete(E)}function P(L){const E=L.target;E.removeEventListener("dispose",P),y(E)}function N(L){const E=i.get(L);if(E.__webglInit===void 0)return;const Y=L.source,ee=h.get(Y);if(ee){const ue=ee[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&T(L),Object.keys(ee).length===0&&h.delete(Y)}i.remove(L)}function T(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const Y=L.source,ee=h.get(Y);delete ee[E.__cacheKey],o.memory.textures--}function y(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ue=0;ue<E.__webglFramebuffer[ee].length;ue++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ue]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=L.textures;for(let ee=0,ue=Y.length;ee<ue;ee++){const oe=i.get(Y[ee]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(Y[ee])}i.remove(L)}let D=0;function V(){D=0}function W(){const L=D;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),D+=1,L}function le(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ie(L,E){const Y=i.get(L);if(L.isVideoTexture&&ae(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,L,E);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function se(L,E){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Z(Y,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function F(L,E){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Z(Y,L,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function O(L,E){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){fe(Y,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const $={[Vc]:t.REPEAT,[xs]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},te={[Pi]:t.NEAREST,[ZS]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[Bi]:t.LINEAR,[rd]:t.LINEAR_MIPMAP_NEAREST,[ys]:t.LINEAR_MIPMAP_LINEAR},Se={[tM]:t.NEVER,[aM]:t.ALWAYS,[nM]:t.LESS,[Ex]:t.LEQUAL,[iM]:t.EQUAL,[oM]:t.GEQUAL,[rM]:t.GREATER,[sM]:t.NOTEQUAL};function Ie(L,E){if(E.type===ar&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===rd||E.magFilter===Pl||E.magFilter===ys||E.minFilter===Bi||E.minFilter===rd||E.minFilter===Pl||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,$[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pi||E.minFilter!==Pl&&E.minFilter!==ys||E.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Pe(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const ee=E.source;let ue=h.get(ee);ue===void 0&&(ue={},h.set(ee,ue));const oe=le(E);if(oe!==L.__cacheKey){ue[oe]===void 0&&(ue[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[oe].usedTimes++;const De=ue[L.__cacheKey];De!==void 0&&(ue[L.__cacheKey].usedTimes--,De.usedTimes===0&&T(E)),L.__cacheKey=oe,L.__webglTexture=ue[oe].texture}return Y}function me(L,E,Y){return Math.floor(Math.floor(L/Y)/E)}function X(L,E,Y,ee){const oe=L.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,Y,ee,E.data);else{oe.sort((ye,Ne)=>ye.start-Ne.start);let De=0;for(let ye=1;ye<oe.length;ye++){const Ne=oe[De],it=oe[ye],We=Ne.start+Ne.count,Ce=me(it.start,E.width,4),lt=me(Ne.start,E.width,4);it.start<=We+1&&Ce===lt&&me(it.start+it.count-1,E.width,4)===Ce?Ne.count=Math.max(Ne.count,it.start+it.count-Ne.start):(++De,oe[De]=it)}oe.length=De+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),Ve=t.getParameter(t.UNPACK_SKIP_PIXELS),Ge=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Ne=oe.length;ye<Ne;ye++){const it=oe[ye],We=Math.floor(it.start/4),Ce=Math.ceil(it.count/4),lt=We%E.width,H=Math.floor(We/E.width),pe=Ce,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,lt,H,pe,Ee,Y,ee,E.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ge)}}function Z(L,E,Y){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ue=Pe(L,E),oe=E.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+Y);const De=i.get(oe);if(oe.version!==De.__version||ue===!0){n.activeTexture(t.TEXTURE0+Y);const ve=At.getPrimaries(At.workingColorSpace),Ve=E.colorSpace===Dr?null:At.getPrimaries(E.colorSpace),Ge=E.colorSpace===Dr||ve===Ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ye=M(E.image,!1,r.maxTextureSize);ye=Ye(E,ye);const Ne=s.convert(E.format,E.colorSpace),it=s.convert(E.type);let We=v(E.internalFormat,Ne,it,E.colorSpace,E.isVideoTexture);Ie(ee,E);let Ce;const lt=E.mipmaps,H=E.isVideoTexture!==!0,pe=De.__version===void 0||ue===!0,Ee=oe.dataReady,Oe=b(E,ye);if(E.isDepthTexture)We=x(E.format===Za,E.type),pe&&(H?n.texStorage2D(t.TEXTURE_2D,1,We,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,We,ye.width,ye.height,0,Ne,it,null));else if(E.isDataTexture)if(lt.length>0){H&&pe&&n.texStorage2D(t.TEXTURE_2D,Oe,We,lt[0].width,lt[0].height);for(let ge=0,he=lt.length;ge<he;ge++)Ce=lt[ge],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,it,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,We,Ce.width,Ce.height,0,Ne,it,Ce.data);E.generateMipmaps=!1}else H?(pe&&n.texStorage2D(t.TEXTURE_2D,Oe,We,ye.width,ye.height),Ee&&X(E,ye,Ne,it)):n.texImage2D(t.TEXTURE_2D,0,We,ye.width,ye.height,0,Ne,it,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,We,lt[0].width,lt[0].height,ye.depth);for(let ge=0,he=lt.length;ge<he;ge++)if(Ce=lt[ge],E.format!==bi)if(Ne!==null)if(H){if(Ee)if(E.layerUpdates.size>0){const Be=Sg(Ce.width,Ce.height,E.format,E.type);for(const rt of E.layerUpdates){const Nt=Ce.data.subarray(rt*Be/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Be/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,rt,Ce.width,Ce.height,1,Ne,Nt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ye.depth,Ne,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,We,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ye.depth,Ne,it,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,We,Ce.width,Ce.height,ye.depth,0,Ne,it,Ce.data)}else{H&&pe&&n.texStorage2D(t.TEXTURE_2D,Oe,We,lt[0].width,lt[0].height);for(let ge=0,he=lt.length;ge<he;ge++)Ce=lt[ge],E.format!==bi?Ne!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,it,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,We,Ce.width,Ce.height,0,Ne,it,Ce.data)}else if(E.isDataArrayTexture)if(H){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,We,ye.width,ye.height,ye.depth),Ee)if(E.layerUpdates.size>0){const ge=Sg(ye.width,ye.height,E.format,E.type);for(const he of E.layerUpdates){const Be=ye.data.subarray(he*ge/ye.data.BYTES_PER_ELEMENT,(he+1)*ge/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Ne,it,Be)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,it,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,Ne,it,ye.data);else if(E.isData3DTexture)H?(pe&&n.texStorage3D(t.TEXTURE_3D,Oe,We,ye.width,ye.height,ye.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,it,ye.data)):n.texImage3D(t.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,Ne,it,ye.data);else if(E.isFramebufferTexture){if(pe)if(H)n.texStorage2D(t.TEXTURE_2D,Oe,We,ye.width,ye.height);else{let ge=ye.width,he=ye.height;for(let Be=0;Be<Oe;Be++)n.texImage2D(t.TEXTURE_2D,Be,We,ge,he,0,Ne,it,null),ge>>=1,he>>=1}}else if(lt.length>0){if(H&&pe){const ge=qe(lt[0]);n.texStorage2D(t.TEXTURE_2D,Oe,We,ge.width,ge.height)}for(let ge=0,he=lt.length;ge<he;ge++)Ce=lt[ge],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ne,it,Ce):n.texImage2D(t.TEXTURE_2D,ge,We,Ne,it,Ce);E.generateMipmaps=!1}else if(H){if(pe){const ge=qe(ye);n.texStorage2D(t.TEXTURE_2D,Oe,We,ge.width,ge.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,it,ye)}else n.texImage2D(t.TEXTURE_2D,0,We,Ne,it,ye);g(E)&&u(ee),De.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,Y){if(E.image.length!==6)return;const ee=Pe(L,E),ue=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const oe=i.get(ue);if(ue.version!==oe.__version||ee===!0){n.activeTexture(t.TEXTURE0+Y);const De=At.getPrimaries(At.workingColorSpace),ve=E.colorSpace===Dr?null:At.getPrimaries(E.colorSpace),Ve=E.colorSpace===Dr||De===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ge&&!ye?Ne[he]=M(E.image[he],!0,r.maxCubemapSize):Ne[he]=ye?E.image[he].image:E.image[he],Ne[he]=Ye(E,Ne[he]);const it=Ne[0],We=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type),lt=v(E.internalFormat,We,Ce,E.colorSpace),H=E.isVideoTexture!==!0,pe=oe.__version===void 0||ee===!0,Ee=ue.dataReady;let Oe=b(E,it);Ie(t.TEXTURE_CUBE_MAP,E);let ge;if(Ge){H&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,lt,it.width,it.height);for(let he=0;he<6;he++){ge=Ne[he].mipmaps;for(let Be=0;Be<ge.length;Be++){const rt=ge[Be];E.format!==bi?We!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,rt.width,rt.height,We,rt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,rt.width,rt.height,We,Ce,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,lt,rt.width,rt.height,0,We,Ce,rt.data)}}}else{if(ge=E.mipmaps,H&&pe){ge.length>0&&Oe++;const he=qe(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,lt,he.width,he.height)}for(let he=0;he<6;he++)if(ye){H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,We,Ce,Ne[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Ne[he].width,Ne[he].height,0,We,Ce,Ne[he].data);for(let Be=0;Be<ge.length;Be++){const Nt=ge[Be].image[he].image;H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,Nt.width,Nt.height,We,Ce,Nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,lt,Nt.width,Nt.height,0,We,Ce,Nt.data)}}else{H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ce,Ne[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,We,Ce,Ne[he]);for(let Be=0;Be<ge.length;Be++){const rt=ge[Be];H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,We,Ce,rt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,lt,We,Ce,rt.image[he])}}}g(E)&&u(t.TEXTURE_CUBE_MAP),oe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,Y,ee,ue,oe){const De=s.convert(Y.format,Y.colorSpace),ve=s.convert(Y.type),Ve=v(Y.internalFormat,De,ve,Y.colorSpace),Ge=i.get(E),ye=i.get(Y);if(ye.__renderTarget=E,!Ge.__hasExternalTextures){const Ne=Math.max(1,E.width>>oe),it=Math.max(1,E.height>>oe);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,oe,Ve,Ne,it,E.depth,0,De,ve,null):n.texImage2D(ue,oe,Ve,Ne,it,0,De,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ue,ye.__webglTexture,0,Te(E)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ue,ye.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(L,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const ee=E.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,oe=x(E.stencilBuffer,ue),De=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=Te(E);re(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,oe,E.width,E.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,oe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,oe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,L)}else{const ee=E.textures;for(let ue=0;ue<ee.length;ue++){const oe=ee[ue],De=s.convert(oe.format,oe.colorSpace),ve=s.convert(oe.type),Ve=v(oe.internalFormat,De,ve,oe.colorSpace),Ge=Te(E);Y&&re(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ve,E.width,E.height):re(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,Ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);const ue=ee.__webglTexture,oe=Te(E);if(E.depthTexture.format===Ka)re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0);else if(E.depthTexture.format===Za)re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function dt(L){const E=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ee}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ee=L.texture.mipmaps;ee&&ee.length>0?He(E.__webglFramebuffer[0],L):He(E.__webglFramebuffer,L)}else if(Y){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),Ze(E.__webglDepthbuffer[ee],L,!1);else{const ue=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,oe)}}else{const ee=L.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ze(E.__webglDepthbuffer,L,!1);else{const ue=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(L,E,Y){const ee=i.get(L);E!==void 0&&Fe(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&dt(L)}function U(L){const E=L.texture,Y=i.get(L),ee=i.get(E);L.addEventListener("dispose",P);const ue=L.textures,oe=L.isWebGLCubeRenderTarget===!0,De=ue.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),oe){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ve]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)Y.__webglFramebuffer[ve][Ve]=t.createFramebuffer()}else Y.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)Y.__webglFramebuffer[ve]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(De)for(let ve=0,Ve=ue.length;ve<Ve;ve++){const Ge=i.get(ue[ve]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&re(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){const Ve=ue[ve];Y.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[ve]);const Ge=s.convert(Ve.format,Ve.colorSpace),ye=s.convert(Ve.type),Ne=v(Ve.internalFormat,Ge,ye,Ve.colorSpace,L.isXRRenderTarget===!0),it=Te(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Ne,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Y.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Ze(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Fe(Y.__webglFramebuffer[ve][Ve],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve);else Fe(Y.__webglFramebuffer[ve],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ve=0,Ve=ue.length;ve<Ve;ve++){const Ge=ue[ve],ye=i.get(Ge);let Ne=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ye.__webglTexture),Ie(Ne,Ge),Fe(Y.__webglFramebuffer,L,Ge,t.COLOR_ATTACHMENT0+ve,Ne,0),g(Ge)&&u(Ne)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,ee.__webglTexture),Ie(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Fe(Y.__webglFramebuffer[Ve],L,E,t.COLOR_ATTACHMENT0,ve,Ve);else Fe(Y.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,ve,0);g(E)&&u(ve),n.unbindTexture()}L.depthBuffer&&dt(L)}function bt(L){const E=L.textures;for(let Y=0,ee=E.length;Y<ee;Y++){const ue=E[Y];if(g(ue)){const oe=m(L),De=i.get(ue).__webglTexture;n.bindTexture(oe,De),u(oe),n.unbindTexture()}}}const st=[],et=[];function z(L){if(L.samples>0){if(re(L)===!1){const E=L.textures,Y=L.width,ee=L.height;let ue=t.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(L),ve=E.length>1;if(ve)for(let Ge=0;Ge<E.length;Ge++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[Ge]);const ye=i.get(E[Ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,ue,t.NEAREST),l===!0&&(st.length=0,et.length=0,st.push(t.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(st.push(oe),et.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ge=0;Ge<E.length;Ge++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,De.__webglColorRenderbuffer[Ge]);const ye=i.get(E[Ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Te(L){return Math.min(r.maxSamples,L.samples)}function re(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(L){const E=o.render.frame;d.get(L)!==E&&(d.set(L,E),L.update())}function Ye(L,E){const Y=L.colorSpace,ee=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Lo&&Y!==Dr&&(At.getTransfer(Y)===It?(ee!==bi||ue!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=wt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=re}function FA(t,e){function n(i,r=Dr){let s;const o=At.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===Tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_x)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mx)return t.BYTE;if(i===gx)return t.SHORT;if(i===qa)return t.UNSIGNED_SHORT;if(i===Ep)return t.INT;if(i===Cs)return t.UNSIGNED_INT;if(i===ar)return t.FLOAT;if(i===rl)return t.HALF_FLOAT;if(i===xx)return t.ALPHA;if(i===yx)return t.RGB;if(i===bi)return t.RGBA;if(i===Ka)return t.DEPTH_COMPONENT;if(i===Za)return t.DEPTH_STENCIL;if(i===Sx)return t.RED;if(i===bp)return t.RED_INTEGER;if(i===Mx)return t.RG;if(i===Cp)return t.RG_INTEGER;if(i===Rp)return t.RGBA_INTEGER;if(i===hc||i===pc||i===mc||i===gc)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kf||i===Zf||i===Jf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eh||i===th)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===_h||i===xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vh)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Sh||i===Mh||i===wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ix(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qr({vertexShader:OA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ne(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends Fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",g=new zA,u={},m=n.getContextAttributes();let v=null,x=null;const b=[],R=[],P=new Ke;let N=null;const T=new ti;T.viewport=new Ut;const y=new ti;y.viewport=new Ut;const D=[T,y],V=new o2;let W=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=b[Z];return fe===void 0&&(fe=new bd,b[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=b[Z];return fe===void 0&&(fe=new bd,b[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=b[Z];return fe===void 0&&(fe=new bd,b[Z]=fe),fe.getHandSpace()};function ie(Z){const fe=R.indexOf(Z.inputSource);if(fe===-1)return;const Fe=b[fe];Fe!==void 0&&(Fe.update(Z.inputSource,Z.frame,c||o),Fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function se(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<b.length;Z++){const fe=R[Z];fe!==null&&(R[Z]=null,b[Z].disconnect(fe))}W=null,le=null,g.reset();for(const Z in u)delete u[Z];e.setRenderTarget(v),p=null,h=null,f=null,r=null,x=null,X.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",se),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Ze=null,He=null;m.depth&&(He=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Fe=m.stencil?Za:Ka,Ze=m.stencil?$a:Cs);const dt={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(dt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Rs(h.textureWidth,h.textureHeight,{format:bi,type:Xi,depthTexture:new Nx(h.textureWidth,h.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Rs(p.framebufferWidth,p.framebufferHeight,{format:bi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Z){for(let fe=0;fe<Z.removed.length;fe++){const Fe=Z.removed[fe],Ze=R.indexOf(Fe);Ze>=0&&(R[Ze]=null,b[Ze].disconnect(Fe))}for(let fe=0;fe<Z.added.length;fe++){const Fe=Z.added[fe];let Ze=R.indexOf(Fe);if(Ze===-1){for(let dt=0;dt<b.length;dt++)if(dt>=R.length){R.push(Fe),Ze=dt;break}else if(R[dt]===null){R[dt]=Fe,Ze=dt;break}if(Ze===-1)break}const He=b[Ze];He&&He.connect(Fe)}}const O=new k,$=new k;function te(Z,fe,Fe){O.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(Fe.matrixWorld);const Ze=O.distanceTo($),He=fe.projectionMatrix.elements,dt=Fe.projectionMatrix.elements,wt=He[14]/(He[10]-1),U=He[14]/(He[10]+1),bt=(He[9]+1)/He[5],st=(He[9]-1)/He[5],et=(He[8]-1)/He[0],z=(dt[8]+1)/dt[0],Te=wt*et,re=wt*z,ae=Ze/(-et+z),Ye=ae*-et;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(ae),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),He[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=wt+ae,L=U+ae,E=Te-Ye,Y=re+(Ze-Ye),ee=bt*U/L*qe,ue=st*U/L*qe;Z.projectionMatrix.makePerspective(E,Y,ee,ue,qe,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let fe=Z.near,Fe=Z.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),V.near=y.near=T.near=fe,V.far=y.far=T.far=Fe,(W!==V.near||le!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,le=V.far),V.layers.mask=Z.layers.mask|6,T.layers.mask=V.layers.mask&3,y.layers.mask=V.layers.mask&5;const Ze=Z.parent,He=V.cameras;Se(V,Ze);for(let dt=0;dt<He.length;dt++)Se(He[dt],Ze);He.length===2?te(V,T,y):V.projectionMatrix.copy(T.projectionMatrix),Ie(Z,V,Ze)};function Ie(Z,fe,Fe){Fe===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Eh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Z){return u[Z]};let Pe=null;function me(Z,fe){if(d=fe.getViewerPose(c||o),_=fe,d!==null){const Fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ze=!1;Fe.length!==V.cameras.length&&(V.cameras.length=0,Ze=!0);for(let U=0;U<Fe.length;U++){const bt=Fe[U];let st=null;if(p!==null)st=p.getViewport(bt);else{const z=f.getViewSubImage(h,bt);st=z.viewport,U===0&&(e.setRenderTargetTextures(x,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(x))}let et=D[U];et===void 0&&(et=new ti,et.layers.enable(U),et.viewport=new Ut,D[U]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),U===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ze===!0&&V.cameras.push(et)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const U=f.getDepthInformation(Fe[0]);U&&U.isValid&&U.texture&&g.init(U,r.renderState)}if(He&&He.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Fe.length;U++){const bt=Fe[U].camera;if(bt){let st=u[bt];st||(st=new Ix,u[bt]=st);const et=f.getCameraImage(bt);st.sourceTexture=et}}}}for(let Fe=0;Fe<b.length;Fe++){const Ze=R[Fe],He=b[Fe];Ze!==null&&He!==void 0&&He.update(Ze,fe,c||o)}Pe&&Pe(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const X=new zx;X.setAnimationLoop(me),this.setAnimationLoop=function(Z){Pe=Z},this.dispose=function(){}}}const ls=new ji,HA=new Ht;function VA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Px(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),M(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Zn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Zn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,x=m.envMapRotation;v&&(g.envMap.value=v,ls.copy(x),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(ls)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function M(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const x=v.program;i.uniformBlockBinding(m,x)}function c(m,v){let x=r[m.id];x===void 0&&(_(m),x=d(m),r[m.id]=x,m.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(m,b);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function d(m){const v=f();m.__bindingPointIndex=v;const x=t.createBuffer(),b=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],x=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,P=x.length;R<P;R++){const N=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,y=N.length;T<y;T++){const D=N[T];if(p(D,R,T,b)===!0){const V=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let le=0;for(let ie=0;ie<W.length;ie++){const se=W[ie],F=M(se);typeof se=="number"||typeof se=="boolean"?(D.__data[0]=se,t.bufferSubData(t.UNIFORM_BUFFER,V+le,D.__data)):se.isMatrix3?(D.__data[0]=se.elements[0],D.__data[1]=se.elements[1],D.__data[2]=se.elements[2],D.__data[3]=0,D.__data[4]=se.elements[3],D.__data[5]=se.elements[4],D.__data[6]=se.elements[5],D.__data[7]=0,D.__data[8]=se.elements[6],D.__data[9]=se.elements[7],D.__data[10]=se.elements[8],D.__data[11]=0):(se.toArray(D.__data,le),le+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,x,b){const R=m.value,P=v+"_"+x;if(b[P]===void 0)return typeof R=="number"||typeof R=="boolean"?b[P]=R:b[P]=R.clone(),!0;{const N=b[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return b[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(m){const v=m.uniforms;let x=0;const b=16;for(let P=0,N=v.length;P<N;P++){const T=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,D=T.length;y<D;y++){const V=T[y],W=Array.isArray(V.value)?V.value:[V.value];for(let le=0,ie=W.length;le<ie;le++){const se=W[le],F=M(se),O=x%b,$=O%F.boundary,te=O+$;x+=$,te!==0&&b-te<F.storage&&(x+=b-te),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=F.storage}}}const R=x%b;return R>0&&(x+=b-R),m.__size=x,m.__cache={},this}function M(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class WA{constructor(e={}){const{canvas:n=cM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),M=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Xn;let R=0,P=0,N=null,T=-1,y=null;const D=new Ut,V=new Ut;let W=null;const le=new St(0);let ie=0,se=n.width,F=n.height,O=1,$=null,te=null;const Se=new Ut(0,0,se,F),Ie=new Ut(0,0,se,F);let Pe=!1;const me=new Ip;let X=!1,Z=!1;const fe=new Ht,Fe=new k,Ze=new Ut,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function wt(){return N===null?O:1}let U=i;function bt(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),U===null){const G="webgl2";if(U=bt(G,A),U===null)throw bt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,et,z,Te,re,ae,Ye,qe,L,E,Y,ee,ue,oe,De,ve,Ve,Ge,ye,Ne,it,We,Ce,lt;function H(){st=new eT(U),st.init(),We=new FA(U,st),et=new YE(U,st,e,We),z=new IA(U,st),et.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),Te=new iT(U),re=new SA,ae=new UA(U,st,z,re,et,We,Te),Ye=new $E(x),qe=new QE(x),L=new c2(U),Ce=new XE(U,L),E=new tT(U,L,Te,Ce),Y=new sT(U,E,L,Te),ye=new rT(U,et,ae),ve=new qE(re),ee=new yA(x,Ye,qe,st,et,Ce,ve),ue=new VA(x,re),oe=new wA,De=new RA(st),Ge=new WE(x,Ye,qe,z,Y,p,l),Ve=new DA(x,Y,et),lt=new GA(U,Te,et,z),Ne=new jE(U,st,Te),it=new nT(U,st,Te),Te.programs=ee.programs,x.capabilities=et,x.extensions=st,x.properties=re,x.renderLists=oe,x.shadowMap=Ve,x.state=z,x.info=Te}H();const pe=new BA(x,U);this.xr=pe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(se,F,!1))},this.getSize=function(A){return A.set(se,F)},this.setSize=function(A,G,J=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,F=G,n.width=Math.floor(A*O),n.height=Math.floor(G*O),J===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(se*O,F*O).floor()},this.setDrawingBufferSize=function(A,G,J){se=A,F=G,O=J,n.width=Math.floor(A*J),n.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,G,J,Q){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,G,J,Q),z.viewport(D.copy(Se).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,G,J,Q){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,G,J,Q),z.scissor(V.copy(Ie).multiplyScalar(O).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){z.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,J=!0){let Q=0;if(A){let j=!1;if(N!==null){const _e=N.texture.format;j=_e===Rp||_e===Cp||_e===bp}if(j){const _e=N.texture.type,be=_e===Xi||_e===Cs||_e===qa||_e===$a||_e===Tp||_e===Ap,ze=Ge.getClearColor(),Ue=Ge.getClearAlpha(),Je=ze.r,Qe=ze.g,$e=ze.b;be?(_[0]=Je,_[1]=Qe,_[2]=$e,_[3]=Ue,U.clearBufferuiv(U.COLOR,0,_)):(M[0]=Je,M[1]=Qe,M[2]=$e,M[3]=Ue,U.clearBufferiv(U.COLOR,0,M))}else Q|=U.COLOR_BUFFER_BIT}G&&(Q|=U.DEPTH_BUFFER_BIT),J&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Ge.dispose(),oe.dispose(),De.dispose(),re.dispose(),Ye.dispose(),qe.dispose(),Y.dispose(),Ce.dispose(),lt.dispose(),ee.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ai),pe.removeEventListener("sessionend",zo),Di.stop()};function Ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Te.autoReset,G=Ve.enabled,J=Ve.autoUpdate,Q=Ve.needsUpdate,j=Ve.type;H(),Te.autoReset=A,Ve.enabled=G,Ve.autoUpdate=J,Ve.needsUpdate=Q,Ve.type=j}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const G=A.target;G.removeEventListener("dispose",he),Be(G)}function Be(A){rt(A),re.remove(A)}function rt(A){const G=re.get(A).programs;G!==void 0&&(G.forEach(function(J){ee.releaseProgram(J)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,Q,j,_e){G===null&&(G=He);const be=j.isMesh&&j.matrixWorld.determinant()<0,ze=ll(A,G,J,Q,j);z.setMaterial(Q,be);let Ue=J.index,Je=1;if(Q.wireframe===!0){if(Ue=E.getWireframeAttribute(J),Ue===void 0)return;Je=2}const Qe=J.drawRange,$e=J.attributes.position;let ht=Qe.start*Je,Ct=(Qe.start+Qe.count)*Je;_e!==null&&(ht=Math.max(ht,_e.start*Je),Ct=Math.min(Ct,(_e.start+_e.count)*Je)),Ue!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,Ue.count)):$e!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,$e.count));const Vt=Ct-ht;if(Vt<0||Vt===1/0)return;Ce.setup(j,Q,ze,J,Ue);let Rt,Lt=Ne;if(Ue!==null&&(Rt=L.get(Ue),Lt=it,Lt.setIndex(Rt)),j.isMesh)Q.wireframe===!0?(z.setLineWidth(Q.wireframeLinewidth*wt()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(j.isLine){let tt=Q.linewidth;tt===void 0&&(tt=1),z.setLineWidth(tt*wt()),j.isLineSegments?Lt.setMode(U.LINES):j.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else j.isPoints?Lt.setMode(U.POINTS):j.isSprite&&Lt.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ja("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const tt=j._multiDrawStarts,_t=j._multiDrawCounts,at=j._multiDrawCount,Cn=Ue?L.get(Ue).bytesPerElement:1,vr=re.get(Q).currentProgram.getUniforms();for(let Mn=0;Mn<at;Mn++)vr.setValue(U,"_gl_DrawID",Mn),Lt.render(tt[Mn]/Cn,_t[Mn])}else if(j.isInstancedMesh)Lt.renderInstances(ht,Vt,j.count);else if(J.isInstancedBufferGeometry){const tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,_t=Math.min(J.instanceCount,tt);Lt.renderInstances(ht,Vt,_t)}else Lt.render(ht,Vt)};function Nt(A,G,J){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Jr(A,G,J),A.side=Yr,A.needsUpdate=!0,Jr(A,G,J),A.side=Ti):Jr(A,G,J)}this.compile=function(A,G,J=null){J===null&&(J=A),u=De.get(J),u.init(G),v.push(u),J.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights();const Q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _e=j.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const ze=_e[be];Nt(ze,J,j),Q.add(ze)}else Nt(_e,J,j),Q.add(_e)}),u=v.pop(),Q},this.compileAsync=function(A,G,J=null){const Q=this.compile(A,G,J);return new Promise(j=>{function _e(){if(Q.forEach(function(be){re.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){j(A);return}setTimeout(_e,10)}st.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Mt=null;function sn(A){Mt&&Mt(A)}function ai(){Di.stop()}function zo(){Di.start()}const Di=new zx;Di.setAnimationLoop(sn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){Mt=A,pe.setAnimationLoop(A),A===null?Di.stop():Di.start()},pe.addEventListener("sessionstart",ai),pe.addEventListener("sessionend",zo),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,G,N),u=De.get(A,v.length),u.init(G),v.push(u),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),me.setFromProjectionMatrix(fe,Hi,G.reversedDepth),Z=this.localClippingEnabled,X=ve.init(this.clippingPlanes,Z),g=oe.get(A,m.length),g.init(),m.push(g),pe.enabled===!0&&pe.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&gr(_e,G,-1/0,x.sortObjects)}gr(A,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort($,te),dt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,dt&&Ge.addToRenderList(g,A),this.info.render.frame++,X===!0&&ve.beginShadows();const J=u.state.shadowsArray;Ve.render(J,A,G),X===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,j=g.transmissive;if(u.setupLights(),G.isArrayCamera){const _e=G.cameras;if(j.length>0)for(let be=0,ze=_e.length;be<ze;be++){const Ue=_e[be];Bo(Q,j,A,Ue)}dt&&Ge.render(A);for(let be=0,ze=_e.length;be<ze;be++){const Ue=_e[be];Yi(g,A,Ue,Ue.viewport)}}else j.length>0&&Bo(Q,j,A,G),dt&&Ge.render(A),Yi(g,A,G);N!==null&&P===0&&(ae.updateMultisampleRenderTarget(N),ae.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(x,A,G),Ce.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?(u=v[v.length-1],X===!0&&ve.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function gr(A,G,J,Q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||me.intersectsSprite(A)){Q&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const be=Y.update(A),ze=A.material;ze.visible&&g.push(A,be,ze,J,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||me.intersectsObject(A))){const be=Y.update(A),ze=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ze.copy(be.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const Ue=be.groups;for(let Je=0,Qe=Ue.length;Je<Qe;Je++){const $e=Ue[Je],ht=ze[$e.materialIndex];ht&&ht.visible&&g.push(A,be,ht,J,Ze.z,$e)}}else ze.visible&&g.push(A,be,ze,J,Ze.z,null)}}const _e=A.children;for(let be=0,ze=_e.length;be<ze;be++)gr(_e[be],G,J,Q)}function Yi(A,G,J,Q){const j=A.opaque,_e=A.transmissive,be=A.transparent;u.setupLightsView(J),X===!0&&ve.setGlobalState(x.clippingPlanes,J),Q&&z.viewport(D.copy(Q)),j.length>0&&On(j,G,J),_e.length>0&&On(_e,G,J),be.length>0&&On(be,G,J),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Bo(A,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Q.id]===void 0&&(u.state.transmissionRenderTarget[Q.id]=new Rs(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?rl:Xi,minFilter:ys,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const _e=u.state.transmissionRenderTarget[Q.id],be=Q.viewport||D;_e.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const ze=x.getRenderTarget(),Ue=x.getActiveCubeFace(),Je=x.getActiveMipmapLevel();x.setRenderTarget(_e),x.getClearColor(le),ie=x.getClearAlpha(),ie<1&&x.setClearColor(16777215,.5),x.clear(),dt&&Ge.render(J);const Qe=x.toneMapping;x.toneMapping=Wr;const $e=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),u.setupLightsView(Q),X===!0&&ve.setGlobalState(x.clippingPlanes,Q),On(A,J,Q),ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e),st.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ct=0,Vt=G.length;Ct<Vt;Ct++){const Rt=G[Ct],Lt=Rt.object,tt=Rt.geometry,_t=Rt.material,at=Rt.group;if(_t.side===Ti&&Lt.layers.test(Q.layers)){const Cn=_t.side;_t.side=Zn,_t.needsUpdate=!0,Ds(Lt,J,Q,tt,_t,at),_t.side=Cn,_t.needsUpdate=!0,ht=!0}}ht===!0&&(ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e))}x.setRenderTarget(ze,Ue,Je),x.setClearColor(le,ie),$e!==void 0&&(Q.viewport=$e),x.toneMapping=Qe}function On(A,G,J){const Q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,_e=A.length;j<_e;j++){const be=A[j],ze=be.object,Ue=be.geometry,Je=be.group;let Qe=be.material;Qe.allowOverride===!0&&Q!==null&&(Qe=Q),ze.layers.test(J.layers)&&Ds(ze,G,J,Ue,Qe,Je)}}function Ds(A,G,J,Q,j,_e){A.onBeforeRender(x,G,J,Q,j,_e),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(x,G,J,Q,A,_e),j.transparent===!0&&j.side===Ti&&j.forceSinglePass===!1?(j.side=Zn,j.needsUpdate=!0,x.renderBufferDirect(J,G,Q,j,A,_e),j.side=Yr,j.needsUpdate=!0,x.renderBufferDirect(J,G,Q,j,A,_e),j.side=Ti):x.renderBufferDirect(J,G,Q,j,A,_e),A.onAfterRender(x,G,J,Q,j,_e)}function Jr(A,G,J){G.isScene!==!0&&(G=He);const Q=re.get(A),j=u.state.lights,_e=u.state.shadowsArray,be=j.state.version,ze=ee.getParameters(A,j.state,_e,G,J),Ue=ee.getProgramCacheKey(ze);let Je=Q.programs;Q.environment=A.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(A.isMeshStandardMaterial?qe:Ye).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",he),Je=new Map,Q.programs=Je);let Qe=Je.get(Ue);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===be)return Ns(A,ze),Qe}else ze.uniforms=ee.getUniforms(A),A.onBeforeCompile(ze,x),Qe=ee.acquireProgram(ze,Ue),Je.set(Ue,Qe),Q.uniforms=ze.uniforms;const $e=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=ve.uniform),Ns(A,ze),Q.needsLights=mu(A),Q.lightsStateVersion=be,Q.needsLights&&($e.ambientLightColor.value=j.state.ambient,$e.lightProbe.value=j.state.probe,$e.directionalLights.value=j.state.directional,$e.directionalLightShadows.value=j.state.directionalShadow,$e.spotLights.value=j.state.spot,$e.spotLightShadows.value=j.state.spotShadow,$e.rectAreaLights.value=j.state.rectArea,$e.ltc_1.value=j.state.rectAreaLTC1,$e.ltc_2.value=j.state.rectAreaLTC2,$e.pointLights.value=j.state.point,$e.pointLightShadows.value=j.state.pointShadow,$e.hemisphereLights.value=j.state.hemi,$e.directionalShadowMap.value=j.state.directionalShadowMap,$e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$e.spotShadowMap.value=j.state.spotShadowMap,$e.spotLightMatrix.value=j.state.spotLightMatrix,$e.spotLightMap.value=j.state.spotLightMap,$e.pointShadowMap.value=j.state.pointShadowMap,$e.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function Ho(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ns(A,G){const J=re.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function ll(A,G,J,Q,j){G.isScene!==!0&&(G=He),ae.resetTextureUnits();const _e=G.fog,be=Q.isMeshStandardMaterial?G.environment:null,ze=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lo,Ue=(Q.isMeshStandardMaterial?qe:Ye).get(Q.envMap||be),Je=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let Vt=Wr;Q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=x.toneMapping);const Rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=Rt!==void 0?Rt.length:0,tt=re.get(Q),_t=u.state.lights;if(X===!0&&(Z===!0||A!==y)){const wn=A===y&&Q.id===T;ve.setState(Q,A,wn)}let at=!1;Q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==_t.state.version||tt.outputColorSpace!==ze||j.isBatchedMesh&&tt.batching===!1||!j.isBatchedMesh&&tt.batching===!0||j.isBatchedMesh&&tt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&tt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&tt.instancing===!1||!j.isInstancedMesh&&tt.instancing===!0||j.isSkinnedMesh&&tt.skinning===!1||!j.isSkinnedMesh&&tt.skinning===!0||j.isInstancedMesh&&tt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&tt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&tt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&tt.instancingMorph===!1&&j.morphTexture!==null||tt.envMap!==Ue||Q.fog===!0&&tt.fog!==_e||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ve.numPlanes||tt.numIntersection!==ve.numIntersection)||tt.vertexAlphas!==Je||tt.vertexTangents!==Qe||tt.morphTargets!==$e||tt.morphNormals!==ht||tt.morphColors!==Ct||tt.toneMapping!==Vt||tt.morphTargetsCount!==Lt)&&(at=!0):(at=!0,tt.__version=Q.version);let Cn=tt.currentProgram;at===!0&&(Cn=Jr(Q,G,j));let vr=!1,Mn=!1,qi=!1;const Ft=Cn.getUniforms(),Zt=tt.uniforms;if(z.useProgram(Cn.program)&&(vr=!0,Mn=!0,qi=!0),Q.id!==T&&(T=Q.id,Mn=!0),vr||y!==A){z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(U,"projectionMatrix",A.projectionMatrix),Ft.setValue(U,"viewMatrix",A.matrixWorldInverse);const pn=Ft.map.cameraPosition;pn!==void 0&&pn.setValue(U,Fe.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Ft.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ft.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Mn=!0,qi=!0)}if(j.isSkinnedMesh){Ft.setOptional(U,j,"bindMatrix"),Ft.setOptional(U,j,"bindMatrixInverse");const wn=j.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ft.setValue(U,"boneTexture",wn.boneTexture,ae))}j.isBatchedMesh&&(Ft.setOptional(U,j,"batchingTexture"),Ft.setValue(U,"batchingTexture",j._matricesTexture,ae),Ft.setOptional(U,j,"batchingIdTexture"),Ft.setValue(U,"batchingIdTexture",j._indirectTexture,ae),Ft.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(U,"batchingColorTexture",j._colorsTexture,ae));const Jt=J.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ye.update(j,J,Cn),(Mn||tt.receiveShadow!==j.receiveShadow)&&(tt.receiveShadow=j.receiveShadow,Ft.setValue(U,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Zt.envMap.value=Ue,Zt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Zt.envMapIntensity.value=G.environmentIntensity),Mn&&(Ft.setValue(U,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&Ni(Zt,qi),_e&&Q.fog===!0&&ue.refreshFogUniforms(Zt,_e),ue.refreshMaterialUniforms(Zt,Q,O,F,u.state.transmissionRenderTarget[A.id]),vc.upload(U,Ho(tt),Zt,ae)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vc.upload(U,Ho(tt),Zt,ae),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ft.setValue(U,"center",j.center),Ft.setValue(U,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(U,"normalMatrix",j.normalMatrix),Ft.setValue(U,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const wn=Q.uniformsGroups;for(let pn=0,gi=wn.length;pn<gi;pn++){const vi=wn[pn];lt.update(vi,Cn),lt.bind(vi,Cn)}}return Cn}function Ni(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function mu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,G,J){const Q=re.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=G,re.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const J=re.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Vo=U.createFramebuffer();this.setRenderTarget=function(A,G=0,J=0){N=A,R=G,P=J;let Q=!0,j=null,_e=!1,be=!1;if(A){const Ue=re.get(A);if(Ue.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ue.__hasExternalTextures)ae.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Ue.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(be=!0);const Qe=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?j=Qe[G][J]:j=Qe[G],_e=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?j=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[J]:j=Qe,D.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest}else D.copy(Se).multiplyScalar(O).floor(),V.copy(Ie).multiplyScalar(O).floor(),W=Pe;if(J!==0&&(j=Vo),z.bindFramebuffer(U.FRAMEBUFFER,j)&&Q&&z.drawBuffers(A,j),z.viewport(D),z.scissor(V),z.setScissorTest(W),_e){const Ue=re.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,J)}else if(be){const Ue=G;for(let Je=0;Je<A.textures.length;Je++){const Qe=re.get(A.textures[Je]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,J,Ue)}}else if(A!==null&&J!==0){const Ue=re.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ue.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(A,G,J,Q,j,_e,be,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){z.bindFramebuffer(U.FRAMEBUFFER,Ue);try{const Je=A.textures[ze],Qe=Je.format,$e=Je.type;if(!et.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Q&&J>=0&&J<=A.height-j&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ze),U.readPixels(G,J,Q,j,We.convert(Qe),We.convert($e),_e))}finally{const Je=N!==null?re.get(N).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,G,J,Q,j,_e,be,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue)if(G>=0&&G<=A.width-Q&&J>=0&&J<=A.height-j){z.bindFramebuffer(U.FRAMEBUFFER,Ue);const Je=A.textures[ze],Qe=Je.format,$e=Je.type;if(!et.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ze),U.readPixels(G,J,Q,j,We.convert(Qe),We.convert($e),0);const Ct=N!==null?re.get(N).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Ct);const Vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await uM(U,Vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e),U.deleteBuffer(ht),U.deleteSync(Vt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,J=0){const Q=Math.pow(2,-J),j=Math.floor(A.image.width*Q),_e=Math.floor(A.image.height*Q),be=G!==null?G.x:0,ze=G!==null?G.y:0;ae.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,be,ze,j,_e),z.unbindTexture()};const Qr=U.createFramebuffer(),es=U.createFramebuffer();this.copyTextureToTexture=function(A,G,J=null,Q=null,j=0,_e=null){_e===null&&(j!==0?(Ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=j,j=0):_e=0);let be,ze,Ue,Je,Qe,$e,ht,Ct,Vt;const Rt=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(J!==null)be=J.max.x-J.min.x,ze=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,Je=J.min.x,Qe=J.min.y,$e=J.isBox3?J.min.z:0;else{const Jt=Math.pow(2,-j);be=Math.floor(Rt.width*Jt),ze=Math.floor(Rt.height*Jt),A.isDataArrayTexture?Ue=Rt.depth:A.isData3DTexture?Ue=Math.floor(Rt.depth*Jt):Ue=1,Je=0,Qe=0,$e=0}Q!==null?(ht=Q.x,Ct=Q.y,Vt=Q.z):(ht=0,Ct=0,Vt=0);const Lt=We.convert(G.format),tt=We.convert(G.type);let _t;G.isData3DTexture?(ae.setTexture3D(G,0),_t=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ae.setTexture2DArray(G,0),_t=U.TEXTURE_2D_ARRAY):(ae.setTexture2D(G,0),_t=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const at=U.getParameter(U.UNPACK_ROW_LENGTH),Cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vr=U.getParameter(U.UNPACK_SKIP_PIXELS),Mn=U.getParameter(U.UNPACK_SKIP_ROWS),qi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const Ft=A.isDataArrayTexture||A.isData3DTexture,Zt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Jt=re.get(A),wn=re.get(G),pn=re.get(Jt.__renderTarget),gi=re.get(wn.__renderTarget);z.bindFramebuffer(U.READ_FRAMEBUFFER,pn.__webglFramebuffer),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<Ue;vi++)Ft&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,re.get(A).__webglTexture,j,$e+vi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,re.get(G).__webglTexture,_e,Vt+vi)),U.blitFramebuffer(Je,Qe,be,ze,ht,Ct,be,ze,U.DEPTH_BUFFER_BIT,U.NEAREST);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||re.has(A)){const Jt=re.get(A),wn=re.get(G);z.bindFramebuffer(U.READ_FRAMEBUFFER,Qr),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,es);for(let pn=0;pn<Ue;pn++)Ft?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jt.__webglTexture,j,$e+pn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jt.__webglTexture,j),Zt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wn.__webglTexture,_e,Vt+pn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wn.__webglTexture,_e),j!==0?U.blitFramebuffer(Je,Qe,be,ze,ht,Ct,be,ze,U.COLOR_BUFFER_BIT,U.NEAREST):Zt?U.copyTexSubImage3D(_t,_e,ht,Ct,Vt+pn,Je,Qe,be,ze):U.copyTexSubImage2D(_t,_e,ht,Ct,Je,Qe,be,ze);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Zt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(_t,_e,ht,Ct,Vt,be,ze,Ue,Lt,tt,Rt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,_e,ht,Ct,Vt,be,ze,Ue,Lt,Rt.data):U.texSubImage3D(_t,_e,ht,Ct,Vt,be,ze,Ue,Lt,tt,Rt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_e,ht,Ct,be,ze,Lt,tt,Rt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_e,ht,Ct,Rt.width,Rt.height,Lt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,_e,ht,Ct,be,ze,Lt,tt,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,at),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vr),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qi),_e===0&&G.generateMipmaps&&U.generateMipmap(_t),z.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,z.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}var Kg;const Et=(Kg=window.Telegram)==null?void 0:Kg.WebApp,jg="/yggdrasil-tma/",ec=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],XA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Yg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},qg=()=>{try{const t={...Yg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Yg,watch:Date.now()}}},ha=()=>new Date().toISOString().slice(0,10),jA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Hd=[3,5,8,12,18,25,40],YA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],qA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Vd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],pa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},$g={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Gd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Wd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function br({name:t,className:e}){return B.jsx("img",{src:t.includes(".")?`${jg}img/${t}`:`${jg}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const $A=`
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
`,cs=(t,e=.9,n=0)=>new yt({color:t,roughness:e,metalness:n}),Ae=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function KA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function ZA(t){const e=new nt,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=cs(i,.92),c=cs(s,.9),d=cs(o,.96),f=cs(r,.95),h=cs(a,.78),p=cs(2106150,.98),_=new ne(new In(.28,.24,5,8),d);_.position.y=.72,e.add(_);const M=new ne(new In(n?.37:.32,.56,6,10),c);M.position.y=1.15,e.add(M);const g=new ne(new In(n?.4:.34,.34,5,8),c);g.scale.z=.82,g.position.y=1.28,e.add(g);const u=new ne(new Wt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const m=new ne(new ln(.12,.12,.055),h);m.position.set(0,.93,.38),e.add(m);const v=new ne(new Wt(.13,.15,.18,10),l);v.position.y=1.63,e.add(v);const x=new ne(new cn(.31,16,12),l);x.scale.set(.92,1.06,.92),x.position.y=1.91,e.add(x);const b=new ne(new cn(.325,14,10),f);b.scale.set(.98,.72,.98),b.position.set(0,2.08,-.025),e.add(b);const R=new ne(new In(.18,.3,5,8),f);R.position.set(0,1.93,-.25),R.rotation.x=.15,e.add(R);const P=new ne(new Nn(.045,.13,5),l);P.rotation.x=Math.PI/2,P.position.set(0,1.92,.3),e.add(P);const N=new yt({color:1513754,roughness:.55});for(const $ of[-.105,.105]){const te=new ne(new cn(.025,7,5),N);te.position.set($,1.98,.285),e.add(te)}if(n){const $=new ne(new cn(.19,10,7),f);$.scale.set(.82,1,.72),$.position.set(0,1.8,.24),e.add($)}else{const $=new ne(new In(.055,.42,4,7),f);$.position.set(-.27,1.78,-.08),$.rotation.z=-.22,e.add($)}const T=$=>{const te=new nt;te.position.set($*(n?.43:.39),1.43,0),te.rotation.z=$*.07;const Se=new ne(new In(.105,.42,5,7),c);Se.position.y=-.23,te.add(Se);const Ie=new nt;Ie.position.y=-.46,te.add(Ie);const Pe=new ne(new In(.085,.34,5,7),d);Pe.position.y=-.2,Ie.add(Pe);const me=new ne(new cn(.105,9,7),l);return me.position.y=-.43,Ie.add(me),e.add(te),{upper:te,elbow:Ie}},y=T(-1),D=T(1),V=$=>{const te=new nt;te.position.set($*.15,.68,0);const Se=new ne(new In(.12,.42,5,7),p);Se.position.y=-.23,te.add(Se);const Ie=new nt;Ie.position.y=-.48,te.add(Ie);const Pe=new ne(new In(.095,.4,5,7),p);Pe.position.y=-.22,Ie.add(Pe);const me=new ne(new In(.13,.24,5,7),d);return me.scale.z=1.25,me.position.set(0,-.47,.075),Ie.add(me),e.add(te),te},W=V(-1),le=V(1),ie=new ne(new In(.42,.1,5,8),d);ie.scale.z=.72,ie.position.y=1.48,e.add(ie);const se=new ne(new ln(.58,.92,.075),cs(t.id==="berserk"?2821132:1582894,.98));se.position.set(0,1.05,-.28),se.rotation.x=-.035,e.add(se);const F=new nt;if(t.id==="berserk"||t.id==="dwarf"){const $=new ne(new Wt(.035,.045,.72,7),d);$.position.y=.36,F.add($);const te=new ne(new ln(.16,.34,.055),h);te.position.set(0,.88,0),te.rotation.z=t.id==="dwarf"?-.22:.22,F.add(te)}else{const $=new ne(new Wt(.028,.04,1.1,7),d);$.position.y=.52,F.add($);const te=new ne(new Nn(.075,.25,6),h);te.position.y=1.18,F.add(te)}if(F.position.set(.43,.32,.03),F.rotation.z=-.12,e.add(F),t.id==="viking"||t.id==="berserk"){const $=new ne(new Wt(.3,.3,.1,16),d);$.rotation.x=Math.PI/2,$.position.set(0,1.12,-.37),e.add($);const te=new ne(new cn(.065,8,6),h);te.position.set(0,1.12,-.43),e.add(te)}const O=new ne(new yo(.62,24),new hu({color:0,transparent:!0,opacity:.32}));return O.rotation.x=-Math.PI/2,O.position.y=.02,e.add(O),e.userData.anim={armL:y,armR:D,legL:W,legR:le,weapon:F,torso:M,chest:g,pelvis:_,head:x,neck:v,cape:se,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0,speed:0,stride:0,idle:0,run:0},KA(e)}function JA({h:t,on:e,eventDone:n}){const i=mt.useRef(null),r=mt.useRef(null),s=mt.useRef(null),o=mt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=mt.useState(""),[c,d]=mt.useState(!1),[f,h]=mt.useState(!1),[p,_]=mt.useState(!1),[M,g]=mt.useState(!1),u=mt.useRef({x:0,z:1}),m=mt.useRef(!1),v=mt.useRef(null);mt.useEffect(()=>{const y=i.current;if(!y)return;const D=new UM;D.background=new St(9414817),D.fog=new Np(8097158,.0058);const V=new ti(54,1,.1,280);V.position.set(0,8.5,17);const W=new WA({antialias:!0,powerPreference:"high-performance"});W.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),W.shadowMap.enabled=!0,W.shadowMap.type=dx,W.outputColorSpace=Xn,W.toneMapping=hx,W.toneMappingExposure=1.08,y.appendChild(W.domElement);const le=new i2(14477797,4014136,1.38);D.add(le);const ie=new _g(16773583,3.15);ie.position.set(-42,58,34),ie.castShadow=!0,ie.shadow.mapSize.set(1024,1024),ie.shadow.camera.left=-95,ie.shadow.camera.right=95,ie.shadow.camera.top=95,ie.shadow.camera.bottom=-95,ie.shadow.bias=-5e-4,D.add(ie);const se=new _g(12110789,.58);se.position.set(55,18,-60),D.add(se);const F=(S,C)=>{const w=Math.sin(S*.075)*.7+Math.cos(C*.062)*.55+Math.sin((S-C)*.045)*.35,I=Math.exp(-(S*S/850+(C+2)*(C+2)/1050)),K=Math.exp(-(S*S/150+(C-12)*(C-12)/2200));return w*(1-I*.88)-K*.18},O=S=>{const C=document.createElement("canvas");C.width=C.height=512;const w=C.getContext("2d"),I=q=>Math.abs(Math.sin(q*12.9898)*43758.5453)%1;if(S==="ground"){w.fillStyle="#3f4d38",w.fillRect(0,0,512,512);for(let q=0;q<1800;q++){const ce=I(q*1.17)*512,de=I(q*2.31)*512,we=10+I(q*3.71)*28,Me=I(q*4.13);w.fillStyle=Me>.72?`rgba(96,108,63,${.08+I(q)*.12})`:`rgba(30,36,25,${.05+I(q)*.12})`,w.beginPath(),w.arc(ce,de,we,0,Math.PI*2),w.fill()}for(let q=0;q<650;q++){const ce=I(q*7.1)*512,de=I(q*8.2)*512;w.strokeStyle=`rgba(118,126,78,${.16+I(q*2)*.16})`,w.lineWidth=1+I(q*4)*1.5,w.beginPath(),w.moveTo(ce,de),w.lineTo(ce+(I(q*5)-.5)*5,de-3-I(q*6)*5),w.stroke()}}else if(S==="wood"){w.fillStyle="#5a3d29",w.fillRect(0,0,512,512);for(let q=0;q<512;q+=22)w.fillStyle=`rgba(25,15,9,${.18+I(q)*.13})`,w.fillRect(0,q,512,3),w.strokeStyle=`rgba(154,111,69,${.08+I(q*2)*.08})`,w.lineWidth=2,w.beginPath(),w.moveTo(0,q+7),w.bezierCurveTo(150,q+2,340,q+13,512,q+5),w.stroke();for(let q=0;q<65;q++){const ce=I(q*2.1)*512;w.fillStyle=`rgba(20,12,8,${.12+I(q*3)*.16})`,w.fillRect(ce,0,2+I(q*4)*3,512)}}else if(S==="roof"){w.fillStyle="#252522",w.fillRect(0,0,512,512);for(let q=-30;q<550;q+=25){w.fillStyle=`rgba(105,94,77,${.12+I(q)*.08})`,w.fillRect(0,q,512,2),w.strokeStyle="rgba(12,12,11,.48)",w.lineWidth=3;for(let ce=-40;ce<560;ce+=38)w.beginPath(),w.moveTo(ce,q),w.lineTo(ce-18,q+28),w.stroke()}for(let q=0;q<180;q++)w.fillStyle=`rgba(170,154,123,${.03+I(q)*.07})`,w.fillRect(I(q*2)*512,I(q*3)*512,2+I(q*4)*7,2)}else{w.fillStyle="#514333",w.fillRect(0,0,512,512);for(let q=0;q<1300;q++){const ce=I(q*1.3)*512,de=I(q*2.7)*512;w.fillStyle=`rgba(${45+I(q*3)*38},${35+I(q*4)*28},${23+I(q*5)*20},${.08+I(q*6)*.18})`,w.fillRect(ce,de,2+I(q*7)*7,1+I(q*8)*4)}}const K=new zM(C);return K.wrapS=K.wrapT=Vc,K.colorSpace=Xn,K.anisotropy=4,K},$=O("ground");$.repeat.set(5,6);const te=new rr(190,190,62,62),Se=te.attributes.position;for(let S=0;S<Se.count;S++){const C=Se.getX(S),w=-Se.getY(S);Se.setZ(S,F(C,w))}te.rotateX(-Math.PI/2),te.computeVertexNormals();const Ie=new ne(te,new yt({map:$,roughness:1}));Ie.receiveShadow=!0,D.add(Ie);const Pe=(S,C,w)=>(C&&(S.userData={id:C,label:w||C}),S.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)}),D.add(S),C&&Z.push(S),S),me=(S,C=.9,w=0)=>new yt({color:S,roughness:C,metalness:w}),X=(S,C,w,I,K=.9)=>new ne(new ln(S,C,w),me(I,K)),Z=[],fe=[],Fe=[],Ze=[],He=[],dt=.62,wt=(S,C,w,I,K=0,q=.12)=>He.push({kind:"rect",x:S,z:C,w:w+q*2,d:I+q*2,rot:K}),U=(S,C,w,I=.12)=>He.push({kind:"circle",x:S,z:C,r:w+I}),bt=(S,C,w,I,K,q=.12)=>He.push({kind:"segment",x1:S,z1:C,x2:w,z2:I,r:K+q}),st=(S,C,w)=>{if(w.kind==="circle")return Math.hypot(S-w.x,C-w.z)<w.r+dt;if(w.kind==="rect"){const Me=Math.cos(w.rot),Xe=Math.sin(w.rot),je=S-w.x,pt=C-w.z,xt=Me*je-Xe*pt,Re=Xe*je+Me*pt,ot=Math.max(-w.w/2,Math.min(w.w/2,xt)),kt=Math.max(-w.d/2,Math.min(w.d/2,Re));return Math.hypot(xt-ot,Re-kt)<dt}const I=w.x2-w.x1,K=w.z2-w.z1,q=I*I+K*K,ce=q>0?Math.max(0,Math.min(1,((S-w.x1)*I+(C-w.z1)*K)/q)):0,de=w.x1+I*ce,we=w.z1+K*ce;return Math.hypot(S-de,C-we)<w.r+dt},et=(S,C)=>m.current?S<mn-2.72||S>mn+2.72||C<on-2.05||C>on+2.3:He.some(w=>st(S,C,w)),z=(S,C,w)=>{if(m.current){const q=Math.max(mn-2.55,Math.min(mn+2.55,C)),ce=Math.max(on-1.92,Math.min(on+2.55,w));S.x=q,S.z=ce;return}const I=Math.max(-88,Math.min(88,C)),K=Math.max(-89,Math.min(89,w));if(!et(I,K)){S.x=I,S.z=K;return}et(I,S.z)||(S.x=I),et(S.x,K)||(S.z=K)},Te=me(3425343,1);for(let S=0;S<22;S++){const C=new nt,w=-105+S*10,I=8+Ae(S,7)*9,K=new ne(new Nn(I,18+Ae(S,8)*16,7),Te);K.position.y=8,C.add(K),C.position.set(w,-1,-94+Ae(S,9)*11),Pe(C)}const re=[];for(let S=0;S<=24;S++){const C=-94+S*8,w=-57+Math.sin(S*.55)*3.6;re.push(new k(w,F(w,C)-.05,C))}const ae=new Ah(re),Ye=new qc(ae,64,5.8,8,!1),qe=new ne(Ye,new yt({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));qe.scale.y=.025,qe.position.y=.05,qe.receiveShadow=!0,D.add(qe);for(let S=0;S<50;S++){const C=-92+S*3.7,w=-57+Math.sin(S*.55)*3.6,I=.35+Ae(S,15)*.6,K=new ne(new Qt(I,1),me(6185562,1));K.scale.y=.55,K.position.set(w+(Ae(S,16)-.5)*10,F(w,C)+.25,C),Pe(K),U(K.position.x,K.position.z,I*.9,.03)}const L=(S,C)=>{const w=S.map(([de,we])=>new k(de,F(de,we)+.035,we)),I=[],K=[];for(let de=0;de<w.length;de++){const we=w[Math.max(0,de-1)],Me=w[Math.min(w.length-1,de+1)],Xe=Me.x-we.x,je=Me.z-we.z,pt=Math.max(.001,Math.hypot(Xe,je)),xt=-je/pt,Re=Xe/pt;if(I.push(w[de].x+xt*C/2,w[de].y,w[de].z+Re*C/2,w[de].x-xt*C/2,w[de].y+.01,w[de].z-Re*C/2),de<w.length-1){const ot=de*2;K.push(ot,ot+1,ot+2,ot+1,ot+3,ot+2)}}const q=new Sn;q.setAttribute("position",new Pt(I,3)),q.setIndex(K),q.computeVertexNormals();const ce=new ne(q,new yt({map:O("road"),roughness:1}));ce.receiveShadow=!0,D.add(ce),[-C*.22,C*.22].forEach(de=>{const we=w.map((je,pt)=>{const xt=w[Math.max(0,pt-1)],Re=w[Math.min(w.length-1,pt+1)],ot=Re.x-xt.x,kt=Re.z-xt.z,gn=Math.max(.001,Math.hypot(ot,kt));return new k(je.x+-kt/gn*de,je.y+.045,je.z+ot/gn*de)}),Me=new qc(new Ah(we),Math.max(12,w.length*4),.055,5,!1),Xe=new ne(Me,me(3352863,1));Xe.scale.y=.12,D.add(Xe)})};L([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),L([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),L([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),L([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),L([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),L([[4,14],[-3,22],[-7,31],[-8,42]],3.8),L([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),L([[4,14],[10,28],[18,41],[27,57]],3.8),L([[5,31],[15,45],[27,57],[39,70]],3.7),L([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),L([[-39,-8],[-47,-12],[-53,-15]],3.4);const E=O("wood");E.repeat.set(2,1);const Y=O("roof");Y.repeat.set(2,2);const ee=(S,C,w,I,K,q,ce,de,we)=>{const Me=new nt;Me.rotation.y=K,Me.position.set(S,F(S,C),C),Me.userData={id:ce,label:q};const Xe=new yt({color:5856085,roughness:1}),je=new yt({map:E,color:de,roughness:.92});me(2695193,1);const pt=X(w+.7,.62,I+.7,5658706,1);pt.position.y=.31,Me.add(pt);const xt=new ne(new ln(w,3.55,I),je);xt.position.y=2.05,Me.add(xt);for(const Ui of[-w*.46,w*.46])for(const _r of[-I*.5,I*.5]){const xr=X(.34,3.9,.34,2760728,1);xr.position.set(Ui,2.08,_r),Me.add(xr)}const Re=X(1.18,2.15,.18,2365714,1);Re.position.set(0,1.35,I/2+.17),Me.add(Re);const ot=X(.14,2.35,.22,3811613,1),kt=ot.clone();ot.position.set(-.67,1.42,I/2+.2),kt.position.set(.67,1.42,I/2+.2),Me.add(ot,kt);for(const Ui of[-w*.27,w*.27]){const _r=X(1.15,.95,.14,2760987,1);_r.position.set(Ui,2.18,I/2+.18),Me.add(_r);const xr=new ne(new ln(.88,.68,.06),new yt({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));xr.position.set(Ui,2.18,I/2+.255),Me.add(xr);const Ko=X(.07,.76,.12,2760987,1);Ko.position.set(Ui,2.18,I/2+.3),Me.add(Ko);const Lu=X(1,.07,.12,2760987,1);Lu.position.set(Ui,2.18,I/2+.3),Me.add(Lu)}const gn=new yt({map:Y,color:we,roughness:.98,side:Ti}),tn=new ne(new rr(w*.82,I+1),gn),En=new ne(new rr(w*.82,I+1),gn);tn.rotation.x=Math.PI/2,En.rotation.x=Math.PI/2,tn.rotation.z=.62,En.rotation.z=-.62,tn.position.set(-w*.22,4.22,0),En.position.set(w*.22,4.22,0),Me.add(tn,En);const $i=X(.3,.28,I+1.08,2826523,1);$i.position.y=5.08,Me.add($i);const Fs=X(w*.34,.16,1,6439467,1);Fs.position.set(0,.68,I/2+.54),Me.add(Fs);const qo=new ne(new ln(.62,2,.62),Xe);qo.position.set(w*.24,5.15,-I*.08),Me.add(qo);const $o=X(.82,.12,.82,3486254,1);$o.position.set(w*.24,6.17,-I*.08),Me.add($o),Pe(Me,ce,q),Z.push(Me),wt(S,C,w+.85,I+.85,K,.05)};ee(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ee(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ee(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ee(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ee(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ee(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const ue=new nt;ue.position.set(-10,F(-10,-5),-5),ue.userData={id:"forge",label:"Кузница"};const oe=X(9,3.8,6,5126701,1);oe.position.y=1.9,ue.add(oe);const De=X(2.8,3.6,.28,2760986,1);De.position.set(-3.1,1.9,3.05),ue.add(De);const ve=new ne(new ln(5.5,.24,6.7),new yt({map:Y,color:2433826,roughness:1}));ve.rotation.z=.58,ve.position.set(-2,4.2,0),ue.add(ve);const Ve=ve.clone();Ve.rotation.z=-.58,Ve.position.x=2,ue.add(Ve);const Ge=X(2.2,1.8,1.7,3486512,1);Ge.position.set(-2,1,1.15),ue.add(Ge);const ye=new ne(new yo(.55,16),new yt({color:16739364,emissive:16726795,emissiveIntensity:5}));ye.rotation.y=Math.PI,ye.position.set(-2,1.05,2.02),ue.add(ye);const Ne=X(1.4,.35,.55,2435114,.4);Ne.position.set(1.2,1.05,1.15),ue.add(Ne);const it=X(.5,.9,.5,2697770,.45);it.position.set(1.2,.62,1.15),ue.add(it);for(let S=0;S<4;S++){const C=X(.09,1.35,.09,11184548,.35);C.position.set(2.1+S*.18,1.1,1.3),C.rotation.z=-.3+S*.18,ue.add(C)}Pe(ue,"forge","Кузница"),Z.push(ue),wt(-10,-5,9.6,6.6,0,.05);const We=new fa(16742962,3.2,13,2);We.position.set(-12,F(-12,-5)+2.2,-4),D.add(We);const Ce=new ne(new yo(8.5,32),new yt({color:7035463,roughness:1}));Ce.rotation.x=-Math.PI/2,Ce.position.set(1,F(1,0)+.05,0),Ce.receiveShadow=!0,D.add(Ce);for(let S=0;S<18;S++){const C=S/18*Math.PI*2,w=new ne(new Qt(.38,1),me(7039843,1));w.position.set(1+Math.cos(C)*8.8,F(1+Math.cos(C)*8.8,Math.sin(C)*8.8)+.22,Math.sin(C)*8.8),D.add(w)}const lt=(S,C)=>{const w=new nt,I=X(2.8,.22,1,6832937,1);I.position.y=1.05,w.add(I);for(const K of[-1.05,1.05]){const q=X(.16,1,.16,3877149,1);q.position.set(K,.5,-.32),w.add(q);const ce=q.clone();ce.position.z=.32,w.add(ce)}w.position.set(S,F(S,C),C),D.add(w)};lt(-4,2),lt(7,3);const H=(S,C,w)=>{const I=new nt;I.position.set(S,F(S,C),C);for(let Me=0;Me<7;Me++){const Xe=Me/7*Math.PI*2,je=new ne(new Qt(.32*w,1),me(6117970,1));je.position.set(Math.cos(Xe)*.7*w,.25*w,Math.sin(Xe)*.7*w),I.add(je)}const K=X(.2*w,.2*w,1.5*w,4861211,1),q=K.clone();K.rotation.y=.55,q.rotation.y=-.55,K.position.y=q.position.y=.38*w,I.add(K,q);const ce=new yt({color:16744744,emissive:16731402,emissiveIntensity:4}),de=new ne(new Nn(.5*w,1.35*w,8),ce);de.position.y=1.02*w,I.add(de),D.add(I);const we=new fa(16747068,2.4*w,12*w,2);return we.position.set(S,F(S,C)+2*w,C),D.add(we),fe.push({light:we,flame:de,phase:Ae(S,C)*8}),I};H(1,0,1.15),H(18,-15,.72);const pe=(S,C,w,I,K=1.25)=>{const q=new nt,ce=w-S,de=I-C,we=Math.hypot(ce,de),Me=Math.max(1,Math.floor(we/1.55));for(let Xe=0;Xe<=Me;Xe++){const je=Xe/Me,pt=S+ce*je,xt=C+de*je,Re=X(.18,K,.18,4796447,1);Re.position.set(pt,F(pt,xt)+K/2,xt),q.add(Re)}for(const Xe of[-.28,.38]){const je=X(.14,.14,we,5978917,1);je.rotation.y=Math.atan2(ce,de),je.position.set((S+w)/2,F((S+w)/2,(C+I)/2)+K*Xe,(C+I)/2),q.add(je)}D.add(q),bt(S,C,w,I,.12,.02)},Ee=(S,C,w,I,K,q,ce)=>{const de=new nt;de.position.set(S,F(S,C),C),de.rotation.y=K,de.userData={id:ce,label:q};const we=X(w+.25,.35,I+.25,5591368,1);we.position.y=.18,de.add(we);const Me=new ne(new ln(w,2.5,I),new yt({map:E,color:6439983,roughness:1}));Me.position.y=1.45,de.add(Me);const Xe=new ne(new ln(w+.6,.18,I+.65),new yt({map:Y,color:2696996,roughness:1}));Xe.rotation.z=.55,Xe.position.set(-.16,3,0),de.add(Xe);const je=Xe.clone();je.rotation.z=-.55,je.position.x=.16,de.add(je);const pt=X(1.05,1.75,.12,2759700,1);pt.position.set(0,1.05,I/2+.07),de.add(pt),Pe(de,ce,q),Z.push(de),wt(S,C,w+.55,I+.55,K,.04)},Oe=(S,C,w=1)=>{const I=new nt;I.position.set(S,F(S,C),C);const K=new ne(new Wt(.65*w,.65*w,1.2*w,10),me(9073729,1));K.rotation.z=Math.PI/2,K.position.y=.62*w,I.add(K);for(let q=0;q<3;q++){const ce=new ne(new an(.66*w,.025*w,5,18),me(5851693,1));ce.rotation.y=Math.PI/2,ce.position.y=(.28+q*.34)*w,I.add(ce)}Pe(I)},ge=(S,C,w)=>{const I=new nt;I.position.set(S,F(S,C),C),I.rotation.y=w;const K=X(2.8,.28,1.45,6636331,1);K.position.y=1,I.add(K);for(const ce of[-1.15,1.15])for(const de of[-.55,.55]){const we=X(.16,1.15,.16,4401950,1);we.position.set(ce,.55,de),I.add(we)}for(const ce of[-1.15,1.15]){const de=new ne(new Wt(.5,.5,.18,14),me(2696738,1));de.rotation.z=Math.PI/2,de.position.set(ce,.52,-.92),I.add(de)}const q=X(.16,.16,2.4,4796447,1);q.rotation.x=Math.PI/2,q.position.set(0,.72,-2),I.add(q),Pe(I)},he=(S,C,w=0)=>{const I=new nt;I.position.set(S,F(S,C),C),I.rotation.y=w;const K=X(2.2,.16,.5,7359021,1);K.position.y=.85,I.add(K);for(const q of[-.78,.78]){const ce=X(.12,.8,.12,4139549,1);ce.position.set(q,.4,0),I.add(ce)}Pe(I)},Be=(S,C)=>{const w=new nt;w.position.set(S,F(S,C),C);for(let ce=0;ce<10;ce++){const de=ce/10*Math.PI*2,we=X(.45,.38,.38,6710621,1);we.position.set(Math.cos(de)*.95,.19,Math.sin(de)*.95),we.rotation.y=de,w.add(we)}const I=X(.16,2.2,.16,4861984,1),K=I.clone();I.position.set(-.9,1.2,0),K.position.set(.9,1.2,0),w.add(I,K);const q=X(2,.16,.16,3876891,1);q.position.y=2.25,w.add(q),Pe(w)};Ee(-19,31,8,5,.08,"Амбар","barn"),Ee(17,34,7,5,-.2,"Сарай","shed"),Ee(27,13,6,4,.45,"Склад рыбака","fishshed"),pe(-25,27,-13,27),pe(-25,27,-25,38),pe(-25,38,-14,38),pe(12,29,25,29),pe(25,29,25,40),pe(25,40,12,40),pe(29,-1,39,-1),pe(39,-1,39,10),pe(39,10,30,10);for(const S of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Oe(S[0],S[1],S[2]);ge(-17,24,.18),ge(29,-5,-.55),he(-20,23,.18),he(25,31,-.2),ee(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ee(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ee(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ee(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),wt(-31,8,7.8,5.8,.1,.04),wt(-27,20,7.8,5.8,-.25,.04),wt(31,18,7.8,5.8,.32,.04),wt(20,24,7.8,5.8,-.12,.04);const rt=(S,C,w)=>{const I=new nt;I.position.set(S,F(S,C),C),I.rotation.y=w;const K=X(3,.18,1.25,7357994,1);K.position.y=1.45,I.add(K);for(const ce of[-1.25,1.25])for(const de of[-.48,.48]){const we=X(.13,1.45,.13,4270877,1);we.position.set(ce,.72,de),I.add(we)}const q=new ne(new Nn(1.65,2.5,4,1,!1,Math.PI/4),me(4798510,1));q.scale.z=.55,q.position.y=2.15,I.add(q),Pe(I)};rt(-5,-7,.12),rt(8,-5,-.18),rt(6,7,.5);for(const S of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Be(S[0],S[1]);const Nt=(S,C,w=1)=>{const I=new nt,K=F(S,C);for(let q=0;q<5;q++){const ce=new ne(new cn((.28+Ae(q,S)*.18)*w,8,6),me(q%2?3494457:4284223,1));ce.position.set((Ae(q,2)-.5)*.7*w,.28*w,(Ae(q,3)-.5)*.7*w),I.add(ce)}I.position.set(S,K,C),Pe(I)};for(let S=0;S<48;S++){const C=Ae(S,501)*Math.PI*2,w=18+Ae(S,502)*39,I=Math.cos(C)*w,K=Math.sin(C)*w+4;Math.abs(I)<9&&Math.abs(K)<14||Nt(I,K,.65+Ae(S,503)*.75)}for(let S=0;S<34;S++){const C=-84+Ae(S,610)*168,w=-82+Ae(S,611)*164;if(Math.hypot(C,w-2)<24)continue;const I=.25+Ae(S,612)*.55,K=new ne(new Qt(I,1),me(5725013,1));K.scale.y=.55,K.position.set(C,F(C,w)+I*.28,w),K.rotation.set(Ae(S,613),Ae(S,614),Ae(S,615)),Pe(K),U(C,w,I*.8,.03)}ee(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Ee(-58,42,6,4,-.12,"Старый амбар","oldbarn"),pe(-70,32,-60,32),pe(-70,32,-70,43),pe(-70,43,-61,43),Oe(-67,39,.9),ge(-61,33,-.25),Be(-57,34);const Mt=new nt;Mt.position.set(-63,F(-63,47),47);for(let S=0;S<6;S++){const C=X(10,.035,.12,4208682,1);C.position.set(0,.02,(S-2.5)*1.05),C.rotation.y=.06,Mt.add(C)}Pe(Mt);const sn=new nt;sn.position.set(39,F(39,70),70),sn.userData={id:"runefield",label:"Поле Рун"};const ai=me(5593942,1),zo=new yt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let S=0;S<11;S++){const C=Ae(S,1201)*Math.PI*2,w=3.5+Ae(S,1202)*8,I=new ne(new Qt(.65+Ae(S,1203)*.38,1),ai);I.scale.y=1.4+Ae(S,1204)*1.5,I.position.set(Math.cos(C)*w,I.scale.y*.48,Math.sin(C)*w),I.rotation.set(Ae(S,1205),C,Ae(S,1206)),sn.add(I);const K=new ne(new ln(.11,.035,.72),zo);K.position.set(I.position.x,I.position.y+.55,I.position.z),K.rotation.y=-C+.45,sn.add(K)}for(let S=0;S<5;S++){const C=X(.22,1.8,.22,4861984,1);C.position.set(-6+S*3,.9,7.5),sn.add(C);const w=new ne(new an(.34,.035,6,18),zo);w.rotation.x=Math.PI/2,w.position.set(-6+S*3,1.55,7.5),sn.add(w)}const Di=new nt;for(let S=0;S<7;S++){const C=S/7*Math.PI*2,w=new ne(new Qt(.3,1),me(5591885,1));w.position.set(Math.cos(C)*.65,.22,Math.sin(C)*.65),Di.add(w)}sn.add(Di),Pe(sn,"runefield","Поле Рун"),Z.push(sn),U(39,70,1,.08);const gr=(S,C,w,I)=>{const K=new nt,q=w-S,ce=I-C,de=Math.hypot(q,ce),we=Math.floor(de/1.7);for(let Xe=0;Xe<=we;Xe++){const je=Xe/we,pt=S+q*je,xt=C+ce*je,Re=new ne(new Nn(.24,.24+2.8+Ae(Xe,S)*.5,6),me(3942940,1));Re.position.set(pt,F(pt,xt)+1.45,xt),K.add(Re)}const Me=X(.3,.35,de,2957593,1);Me.rotation.y=Math.atan2(q,ce),Me.position.set((S+w)/2,F((S+w)/2,(C+I)/2)+1.25,(C+I)/2),K.add(Me),D.add(K),bt(S,C,w,I,.34,.08)};gr(-30,-31,-8,-31),gr(8,-31,30,-31),gr(-30,-31,-30,-13),gr(30,-31,30,16);const Yi=new nt;Yi.userData={id:"gate",label:"Ворота Мидгарда"};for(const S of[-4.2,4.2]){const C=X(.8,6,.8,3482906,1);C.position.set(S,3,-31),Yi.add(C)}const Bo=X(10,.8,1,2957336,1);Bo.position.set(0,6,-31),Yi.add(Bo);for(let S=-3;S<=3;S++){const C=X(1,4.2,.22,5978660,1);C.position.set(S*1.15,2,-30.7),Yi.add(C)}Pe(Yi,"gate","Ворота Мидгарда"),Z.push(Yi),U(-4.2,-31,.55,.05),U(4.2,-31,.55,.05);const On=new nt;On.userData={id:"mimir",label:"Колодец Мимира"},On.position.set(18,F(18,15),15);for(let S=0;S<14;S++){const C=S/14*Math.PI*2,w=X(.7,.48,.5,6711907,1);w.position.set(Math.cos(C)*1.45,.24,Math.sin(C)*1.45),w.rotation.y=C+Math.PI/2,On.add(w)}const Ds=new ne(new yo(1.05,28),new yt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));Ds.rotation.x=-Math.PI/2,Ds.position.y=.5,On.add(Ds);for(const S of[-1.35,1.35]){const C=X(.22,3,.22,4861984,1);C.position.set(S,1.55,0),On.add(C)}const Jr=X(3.1,.25,.25,3679513,1);Jr.position.y=2.95,On.add(Jr);const Ho=X(.55,.5,.55,5913383,1);Ho.position.set(0,1.65,0),On.add(Ho);const Ns=new ne(new an(1.8,.06,8,40),new yt({color:7792028,emissive:2653256,emissiveIntensity:3}));Ns.rotation.x=Math.PI/2,Ns.position.y=.53,On.add(Ns),Pe(On,"mimir","Колодец Мимира"),Z.push(On),U(18,15,1.8,.08);const ll=new fa(7530656,1.8,10,2);ll.position.set(18,F(18,15)+1.4,15),D.add(ll);const Ni=new nt;Ni.userData={id:"norns",label:"Прядильня норн"},Ni.position.set(-25,F(-25,43),43);for(let S=0;S<3;S++){const C=new ne(new In(.65,2.3,5,8),me(5725529,1));C.position.set((S-1)*2.2,1.35,0),C.rotation.z=(S-1)*.07,Ni.add(C);const w=new ne(new an(.42,.055,7,20),new yt({color:[13100495,13149416,14795380][S],emissive:[6134129,7490961,9268264][S],emissiveIntensity:2.2}));w.rotation.x=Math.PI/2,w.position.set((S-1)*2.2,1.6,-.55),Ni.add(w)}const mu=new Th({color:13944039,transparent:!0,opacity:.78});for(let S=0;S<2;S++){const C=[new k((S-1)*2.2,2,.1),new k((S-.5)*2.2,4.1,-.7),new k(S*2.2,2,.1)];Ni.add(new hg(new Sn().setFromPoints(C),mu))}const Vo=new ne(new an(4.1,.07,8,48),new yt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));Vo.rotation.x=Math.PI/2,Vo.position.y=.05,Ni.add(Vo),Pe(Ni,"norns","Прядильня норн"),Z.push(Ni),U(-25,43,3,.1);const Qr=-43,es=62,A=new nt;A.userData={id:"ritual",label:"Круг Силы"},A.position.set(Qr,F(Qr,es),es);const G=me(6711651,1),J=me(5593685,1);for(let S=0;S<2;S++){const C=S===0?18:12,w=S===0?6.2:3.65;for(let I=0;I<C;I++){const K=I/C*Math.PI*2+S*.12,q=w+(Ae(I,930+S)*.5-.25),ce=.42+Ae(I,940+S)*.48,de=new ne(new Qt(.55+Ae(I,950+S)*.28,1),S===0?G:J);de.scale.y=.65+ce*.35,de.position.set(Math.cos(K)*q,ce*.45,Math.sin(K)*q),de.rotation.set(Ae(I,960+S),K+Ae(I,970+S),Ae(I,980+S)),A.add(de)}}const Q=new ne(new Qt(1.05,1),me(5593428,1));Q.scale.set(1.25,.62,1.05),Q.position.y=.5,A.add(Q);for(const S of[2.1,3.15,5.15]){const C=new ne(new an(S,.045,7,64),new yt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));C.rotation.x=Math.PI/2,C.position.y=.055,A.add(C)}const j=new yt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let S=0;S<8;S++){const C=S/8*Math.PI*2,w=new ne(new ln(.13,.025,.65),j);w.position.set(Math.cos(C)*4.55,.075,Math.sin(C)*4.55),w.rotation.y=-C,A.add(w)}Pe(A,"ritual","Круг Силы"),Z.push(A),U(Qr,es,1.25,.06);const _e=new fa(9226152,1.15,11,2);_e.position.set(Qr,F(Qr,es)+1.6,es),D.add(_e);const be=new nt;be.userData={id:"rune",label:"Древний камень Феху"},be.position.set(27,F(27,57),57);const ze=new ne(new Qt(1.45,1),me(5002063,1));ze.position.y=1.2,be.add(ze);const Ue=new ne(new an(1.05,.07,8,30),new yt({color:16766826,emissive:10052371,emissiveIntensity:3}));Ue.rotation.x=Math.PI/2,Ue.position.y=1.2,be.add(Ue),Pe(be,"rune","Древний камень Феху"),Z.push(be),U(27,57,1.7,.1);const Je=new nt;Je.userData={id:"port",label:"Мост к причалу"};for(let S=-5;S<=5;S++){const C=X(3.6,.28,.82,6307882,1);C.position.set(-53,F(-53,S*1)+.5,S),Je.add(C)}Pe(Je,"port","Мост к причалу"),Z.push(Je);const Qe=new nt;Qe.position.set(-46,F(-46,-15),-15);for(let S=0;S<7;S++){const C=X(2.8,.24,.72,7030573,1);C.position.set(0,.3,S*.85),Qe.add(C)}for(const S of[-1.2,1.2])for(let C=0;C<3;C++){const w=X(.22,1.5,.22,4139292,1);w.position.set(S,-.2,C*2.5),Qe.add(w)}const $e=X(2.2,.55,4.8,4926493,1);$e.position.set(3,-.15,2.5),Qe.add($e),Pe(Qe,"port","Речной причал"),Z.push(Qe);const ht=(S,C)=>{const w=new ne(new Wt(.5,.5,1,12),me(6636332,1));w.position.set(S,F(S,C)+.5,C),D.add(w);for(const I of[.25,.76]){const K=new ne(new an(.51,.045,6,18),me(3156004,.7,.1));K.rotation.x=Math.PI/2,K.position.set(S,F(S,C)+I,C),D.add(K)}},Ct=(S,C)=>{const w=X(1,.75,1,7359022,1);w.position.set(S,F(S,C)+.38,C),D.add(w);const I=X(.08,.82,1.05,3679770,1);I.position.set(S,F(S,C)+.38,C),D.add(I),wt(S,C,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([S,C])=>ht(S,C)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([S,C])=>Ct(S,C));const Vt=(S,C,w)=>{const I=new nt,K=F(S,C),q=me(3680287,1),ce=new ne(new Wt(.18*w,.34*w,4.6*w,10),q);ce.position.y=2.3*w,ce.rotation.z=(Ae(S,C)-.5)*.045,I.add(ce);for(let we=0;we<5;we++){const Me=new ne(new Wt(.045*w,.095*w,(1.15+we*.16)*w,7),q);Me.position.set((Ae(we,S)-.5)*.45*w,(1.25+we*.58)*w,(Ae(we,C)-.5)*.38*w),Me.rotation.z=(Ae(we+10,S)-.5)*.45,Me.rotation.y=Ae(we+20,C)*Math.PI*2,I.add(Me)}const de=[1979432,2573361,2968886,3430461,2309165];for(let we=0;we<6;we++){const Xe=(1.55-.72*(we/5))*w,je=new ne(new Nn(Xe,.95*w,9,1),me(de[we%de.length],1));je.scale.x=.88+Ae(we,S)*.18,je.scale.z=.84+Ae(we,C)*.2,je.position.set((Ae(we*4,S)-.5)*.28*w,(2.05+we*.62)*w,(Ae(we*5,C)-.5)*.28*w),je.rotation.y=Ae(we+40,S)*Math.PI*2,I.add(je)}if(w>1.15)for(let we=0;we<3;we++){const Me=new ne(new Nn(.62*w,.7*w,8),me(de[(we+2)%de.length],1));Me.position.set((we-1)*.38*w,.72*w,(Ae(we,C)-.5)*.3*w),Me.rotation.y=Ae(we+70,S)*Math.PI*2,I.add(Me)}I.position.set(S,K,C),Pe(I),w>=1.15&&U(S,C,.42*w,.04)},Rt=(S,C,w,I=!1)=>{const K=new nt,q=F(S,C),ce=me(I?4207145:4863015,1),de=new ne(new Wt(.32*w,.52*w,5.8*w,11),ce);de.position.y=2.9*w,de.rotation.z=(Ae(S,C)-.5)*.035,K.add(de);const we=I?8:6;for(let Me=0;Me<we;Me++){const Xe=Me/we*Math.PI*2+Ae(Me,S)*.25,je=(1.65+Ae(Me+30,C)*1.35)*w,pt=new ne(new Wt(.075*w,.16*w,je,8),ce);pt.position.set(Math.cos(Xe)*je*.34,(3.35+Ae(Me+40,S)*1.25)*w,Math.sin(Xe)*je*.34),pt.rotation.z=Math.cos(Xe)*.78,pt.rotation.x=Math.sin(Xe)*.78,pt.rotation.y=-Xe,K.add(pt);for(let xt=0;xt<3;xt++){const Re=new ne(new cn((.42+Ae(xt+Me,90)*.22)*w,8,6),me(xt%2?4808772:3888955,1)),ot=.55+xt*.18;Re.position.set(Math.cos(Xe)*je*.62+(Ae(xt,Me)-.5)*.35*w,(3.55+Ae(Me,xt)*1.15+ot)*w,Math.sin(Xe)*je*.62+(Ae(xt+4,Me)-.5)*.35*w),Re.scale.y=.72,K.add(Re)}}for(let Me=0;Me<(I?7:4);Me++){const Xe=Ae(Me+100,S)*Math.PI*2,je=new ne(new Wt(.025*w,.055*w,(.9+Ae(Me,C)*.7)*w,6),ce);je.position.set(Math.cos(Xe)*1.05*w,(3.15+Ae(Me+5,S)*1.5)*w,Math.sin(Xe)*1.05*w),je.rotation.z=(Ae(Me+8,C)-.5)*.35,K.add(je)}K.position.set(S,q,C),Pe(K),w>=1.2&&U(S,C,.62*w,.04)},Lt=(S,C,w,I)=>{const K=new nt,q=me(9071949,1),ce=me(3418916,1),de=me(11576718,1),we=new ne(new In(.46*w,1*w,6,10),q);we.rotation.z=Math.PI/2,we.position.y=.9*w,K.add(we);const Me=new ne(new Wt(.24*w,.32*w,.84*w,8),q);Me.position.set(.48*w,1.25*w,0),Me.rotation.z=-.35,K.add(Me);const Xe=new ne(new cn(.31*w,10,7),q);Xe.scale.set(1.25,.9,1),Xe.position.set(.77*w,1.58*w,0),K.add(Xe);const je=new ne(new cn(.14*w,8,5),ce);je.scale.z=.72,je.position.set(1*w,1.53*w,0),K.add(je);for(const xt of[-.25,.25])for(const Re of[-.27,.34]){const ot=new ne(new Wt(.065*w,.09*w,.72*w,6),ce);ot.position.set(Re*w,.48*w,xt*w),ot.rotation.z=Re<0?.08:-.06,K.add(ot)}for(const xt of[-1,1])for(let Re=0;Re<4;Re++){const ot=new ne(new Wt(.028*w,.05*w,.38*w,5),de);ot.position.set(.7*w,(1.82+Re*.13)*w,xt*(.11+Re*.055)*w),ot.rotation.z=xt*(.45-Re*.08),K.add(ot)}const pt=new ne(new cn(.13*w,7,5),q);pt.position.set(-.52*w,1.05*w,0),pt.scale.set(.7,1.2,.7),K.add(pt),K.position.set(S,F(S,C),C),K.userData={phase:I},Pe(K),Ze.push({g:K,x:S,z:C,r:4+Ae(I,41)*3,speed:1.25+Ae(I,42)*.8,phase:I,kind:"deer"})},tt=(S,C)=>{const w=new nt,I=me(6965552,1),K=me(3089436,1),q=new ne(new cn(.22,8,6),I);q.scale.set(1.35,.9,.9),q.position.y=.72,w.add(q);const ce=new ne(new cn(.17,8,6),I);ce.position.set(.22,.86,0),w.add(ce);for(const Me of[-1,1]){const Xe=new ne(new Nn(.06,.18,6),I);Xe.position.set(.17,.99,Me*.09),w.add(Xe)}const de=new ne(new an(.24,.075,7,14,Math.PI*1.65),I);de.rotation.y=Math.PI/2,de.position.set(-.22,.91,0),w.add(de);const we=new ne(new cn(.025,6,4),K);we.position.set(.35,.9,-.12),w.add(we),w.position.set(S,F(S,C),C),Pe(w,"ratatosk","Белка Рататоск"),Z.push(w),U(S,C,.28,.02),Ze.push({g:w,x:S,z:C,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},_t=-4,at=69,Cn=new nt;Cn.userData={id:"ashgrove",label:"Роща Ясеня"};const vr=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[S,C,w,I]of vr)Rt(_t+S,at+C,w,I);for(let S=0;S<9;S++){const C=S/9*Math.PI*2,w=4.2+Ae(S,1301)*2,I=new ne(new Qt(.48+Ae(S,1302)*.24,1),me(5725014,1));I.position.set(_t+Math.cos(C)*w,F(_t+Math.cos(C)*w,at+Math.sin(C)*w)+.35,at+Math.sin(C)*w),I.scale.y=1.3+Ae(S,1303)*.7,I.rotation.set(Ae(S,1304),C,Ae(S,1305)),Pe(I)}const Mn=new ne(new an(5.7,.055,7,64),new yt({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));Mn.rotation.x=Math.PI/2,Mn.position.set(_t,F(_t,at)+.045,at),D.add(Mn);const qi=new ne(new Qt(1,1),me(5199441,1));qi.position.set(_t,F(_t,at)+.75,at),qi.scale.y=1.5,D.add(qi);const Ft=new ne(new an(.62,.05,7,24),new yt({color:12757607,emissive:6637341,emissiveIntensity:1.7}));Ft.rotation.x=Math.PI/2,Ft.position.set(_t,F(_t,at)+1.45,at),D.add(Ft),Z.push(Cn),U(_t,at,1,.08);const Zt=61,Jt=78,wn=new nt;wn.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const pn=new ne(new an(5.6,.055,7,56),new yt({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));pn.rotation.x=Math.PI/2,pn.position.set(Zt,F(Zt,Jt)+.04,Jt),D.add(pn);const gi=new nt;gi.position.set(Zt,F(Zt,Jt),Jt),gi.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const S of[-2.4,2.4]){const C=X(.28,2.5,.28,4862755,1);C.position.set(S,1.25,0),gi.add(C)}const vi=new ne(new Nn(3.4,1.65,6),me(3813673,1));vi.position.y=2.75,vi.scale.z=.72,gi.add(vi),H(Zt,Jt+1.8,.55);const zp=new ne(new Qt(.8,1),me(5264976,1));zp.position.set(Zt,F(Zt,Jt)+.65,Jt+2.2),gi.add(zp),Pe(gi,"hoddmimir","Лес Ходдмимира"),Z.push(gi),U(Zt,Jt,1.1,.08);const Go=30,Wo=53;for(let S=0;S<4;S++)Lt(Go+(S-1.5)*2.6,Wo+(S%2?2.6:-2.6),1.12+Ae(S,1440)*.16,10+S);const Bp=new ne(new Qt(.72,1),me(5725526,1));Bp.position.set(Go,F(Go,Wo)+.5,Wo),D.add(Bp);const gu=new ne(new an(5.8,.045,7,48),new yt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));gu.rotation.x=Math.PI/2,gu.position.set(Go,F(Go,Wo)+.035,Wo),D.add(gu),tt(_t+5,at+1);const cl=12,ul=49,Is=new nt;Is.position.set(cl,F(cl,ul),ul);const vu=new ne(new Qt(1.05,1),me(5133648,1));vu.position.y=.85,vu.scale.y=1.55,Is.add(vu);const _u=new ne(new an(2.7,.055,7,48),new yt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));_u.rotation.x=Math.PI/2,_u.position.y=.06,Is.add(_u);const Wx=new Th({color:14207464,transparent:!0,opacity:.72});for(let S=0;S<3;S++){const C=[new k((S-1)*.72,.95,.15),new k((S-1)*1.25,2.9,-.35+Math.sin(S)*.25),new k((S-1)*1.75,.5,.9)];Is.add(new hg(new Sn().setFromPoints(C),Wx))}for(let S=0;S<7;S++){const C=new ne(new Qt(.11,0),me(6708050,1)),w=-1+S*.32;C.position.set(-1.7+w*.95,.06,-1.6+S*.46),C.scale.set(1.6,.35,.8),Is.add(C)}Pe(Is,"forestEvent","Камень Трёх Нитей"),U(cl,ul,1.15,.08);const xu=(S,C,w,I,K,q,ce)=>{const de=new nt;de.position.set(S,F(S,C),C);const we=new ne(new Qt(.78+ce*.08,1),me(q,1));we.position.y=.58+ce*.08,we.scale.y=1.35,de.add(we);const Me=new ne(new an(2+ce*.18,.045,7,40),new yt({color:K,emissive:K,emissiveIntensity:1.25,transparent:!0,opacity:.62}));Me.rotation.x=Math.PI/2,Me.position.y=.045,de.add(Me);for(let Xe=0;Xe<3+ce;Xe++){const je=new ne(new Qt(.12,0),me(7827558,1)),pt=Xe/(3+ce)*Math.PI*2;je.position.set(Math.cos(pt)*(1.15+ce*.12),.08,Math.sin(pt)*(1.15+ce*.12)),je.scale.y=.45,de.add(je)}Pe(de,w,I),Z.push(de),U(S,C,.9,.08)};xu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),xu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),xu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const yu=(S,C,w,I,K,q)=>{const ce=new nt;ce.position.set(S,F(S,C),C);const de=new ne(new an(w,.07,8,56),new yt({color:q===1?6716259:q===2?7305088:8218965,emissive:q===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));de.rotation.x=Math.PI/2,de.position.y=.045,ce.add(de);for(let we=0;we<Math.floor(w/2);we++){const Me=Ae(we,S*11+C)*Math.PI*2,Xe=w*.35+Ae(we,C*17)*w*.45,je=new ne(new Qt(.28+Ae(we,33)*.22,1),me(q===1?5594452:q===2?5330522:5917244,1));je.position.set(Math.cos(Me)*Xe,.22,Math.sin(Me)*Xe),je.scale.y=.65,ce.add(je)}Pe(ce,I,K),Z.push(ce)};yu(70,18,8.5,"hunterCamp","Забытая стоянка",3),yu(67,49,9.5,"deepGrove","Глубокая роща",1),yu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const mn=75,on=30,Gt=new nt;Gt.position.set(mn,F(mn,on),on);const Xx=me(5986899,1),Hp=X(7.8,.42,5.8,5591885,1);Hp.position.y=.22,Gt.add(Hp);const Vp=X(7.4,2.8,.3,6439727,1);Vp.position.set(0,1.4,-2.7),Gt.add(Vp);const Gp=X(.3,2.8,5.4,6439727,1);Gp.position.set(-3.7,1.4,0),Gt.add(Gp);const Wp=X(.3,2.8,5.4,6439727,1);Wp.position.set(3.7,1.4,0),Gt.add(Wp);const Xp=X(2.55,2.8,.3,6439727,1);Xp.position.set(-2.43,1.4,2.7),Gt.add(Xp);const jp=X(2.55,2.8,.3,6439727,1);jp.position.set(2.43,1.4,2.7),Gt.add(jp);const Yp=X(2.3,.72,.3,6439727,1);Yp.position.set(0,2.44,2.7),Gt.add(Yp);const qp=X(.16,2.18,.34,2826523,1);qp.position.set(-.66,1.28,2.72),Gt.add(qp);const $p=X(.16,2.18,.34,2826523,1);$p.position.set(.66,1.28,2.72),Gt.add($p);const Kp=X(1.48,.16,.34,2826523,1);Kp.position.set(0,2.34,2.72),Gt.add(Kp);const Us=new nt;Us.position.set(-.57,0,2.72),Gt.add(Us);const Zp=X(1.14,2.05,.12,3154457,1);Zp.position.set(.57,1.28,0),Us.add(Zp);const Jp=new ne(new cn(.08,8,6),me(11831883,1));Jp.position.set(.86,1.25,.1),Us.add(Jp);const jx=new yt({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const S of[-2.35,2.35]){const C=X(1.25,1,.12,2826523,1);C.position.set(S,1.72,2.78),Gt.add(C);const w=new ne(new ln(.98,.72,.06),jx);w.position.set(S,1.72,2.86),Gt.add(w);const I=X(.07,.78,.1,2826523,1);I.position.set(S,1.72,2.91),Gt.add(I);const K=X(1.08,.07,.1,2826523,1);K.position.set(S,1.72,2.91),Gt.add(K)}const Qp=new yt({map:Y,color:2697767,roughness:.98,side:Ti}),Xo=new ne(new rr(4.25,6.25),Qp),jo=new ne(new rr(4.25,6.25),Qp);Xo.rotation.x=Math.PI/2,jo.rotation.x=Math.PI/2,Xo.rotation.z=.62,jo.rotation.z=-.62,Xo.position.set(-1.02,3.95,0),jo.position.set(1.02,3.95,0),Gt.add(Xo,jo);const Su=X(.22,.22,6.45,2695965,1);Su.position.y=4.75,Gt.add(Su);const Mu=new ne(new ln(.48,1.35,.48),Xx);Mu.position.set(1.55,4.8,-.65),Gt.add(Mu);const wu=X(.62,.1,.62,3420461,1);wu.position.set(1.55,5.48,-.65),Gt.add(wu);const em=X(2.35,.18,1,6636845,1);em.position.set(0,.62,3.15),Gt.add(em);const tm=X(1.55,.16,.48,5849131,1);tm.position.set(0,.3,3.58),Gt.add(tm),Pe(Gt,"heroHome","Домик героя"),Z.push(Gt),wt(mn,on-2.72,7.4,.3,0,.05),wt(mn-3.72,on,.3,5.45,0,.05),wt(mn+3.72,on,.3,5.45,0,.05),wt(mn-2.43,on+2.72,2.55,.3,0,.05),wt(mn+2.43,on+2.72,2.55,.3,0,.05);const jt=new nt;jt.position.set(mn,F(mn,on),on),jt.visible=!1;const nm=X(7,.16,5,4928548,1);nm.position.y=.5,jt.add(nm);const im=X(7,2.65,.18,4139808,1);im.position.set(0,1.8,-2.45),jt.add(im);const rm=X(.18,2.65,4.9,4139808,1);rm.position.set(-3.45,1.8,0),jt.add(rm);const sm=X(.18,2.65,4.9,4139808,1);sm.position.set(3.45,1.8,0),jt.add(sm);const om=X(2.35,2.65,.18,4139808,1);om.position.set(-2.42,1.8,2.45),jt.add(om);const am=X(2.35,2.65,.18,4139808,1);am.position.set(2.42,1.8,2.45),jt.add(am);const lm=X(2.5,.04,2.1,7162673,1);lm.position.set(-.15,.6,.25),jt.add(lm);const cm=X(1.65,.65,2.15,4008478,1);cm.position.set(-2.15,.88,-1.25),jt.add(cm);const um=X(1.48,.12,1.35,7033152,1);um.position.set(-2.15,1.27,-.92),jt.add(um);const dm=X(1.28,.18,.46,11903114,1);dm.position.set(-2.15,1.38,-1.95),jt.add(dm);const fm=X(1.65,.12,1.05,5255969,1);fm.position.set(.85,1.15,-.15),jt.add(fm);for(const[S,C]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const w=X(.1,.7,.1,3679515,1);w.position.set(S,.72,C),jt.add(w)}const hm=X(1.25,.8,.72,5978660,1);hm.position.set(2.1,.95,-1.7),jt.add(hm);const pm=X(1.9,.14,.45,5978660,1);pm.position.set(1.35,2,-2.25),jt.add(pm);for(const S of[.75,1.35,1.95]){const C=new ne(new Wt(.08,.1,.35,8),me(7304016,1));C.position.set(S,2.24,-2.22),jt.add(C)}const mm=X(1.35,.55,.7,5920078,1);mm.position.set(2.15,.78,.95),jt.add(mm);const gm=new ne(new Nn(.28,.72,8),new yt({color:16744744,emissive:16731402,emissiveIntensity:4}));gm.position.set(2.15,1.42,.95),jt.add(gm);const vm=new fa(16747068,2.2,8,2);vm.position.set(2.15,1.7,.95),jt.add(vm),Pe(jt,"heroHomeInterior","Дом героя — внутри"),Z.push(jt);const ts=new nt;ts.position.set(mn,F(mn,on),on);const Eu=new ne(new an(6.2,.055,7,48),new yt({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Eu.rotation.x=Math.PI/2,Eu.position.y=.035,ts.add(Eu);for(const[S,C]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const w=X(.18,1,.18,4797735,1);w.position.set(S,.5,C),ts.add(w)}for(const S of[-2.4,2.9]){const C=X(10.2,.12,.12,6308139,1);C.position.set(0,.59,S),ts.add(C)}const Yx=me(6906972,1);for(let S=0;S<7;S++){const C=new ne(new Wt(.32,.4,.12,7),Yx);C.position.set(0,.08,4.1+S*.72),C.rotation.y=S*.4,ts.add(C)}H(mn-2.4,on+4.8,.48).scale.setScalar(.72),Pe(ts,"heroHomeYard","Двор домика героя"),Z.push(ts),H(70,18,.75).scale.setScalar(.72);const _m=new ne(new Wt(.65,.8,.7,7),me(5327426,1));_m.position.set(70,F(70,18)+.35,16.5),D.add(_m);for(const[S,C]of[[68,20],[72,20],[68,16],[72,16]]){const w=X(.16,1.15,.16,4797735,1);w.position.set(S,F(S,C)+.57,C),D.add(w)}const dl=new nt;dl.position.set(52,F(52,7),7);const Tu=new ne(new Wt(.5,.62,7,8),me(4995371,1));Tu.rotation.z=Math.PI/2,Tu.position.y=.5,dl.add(Tu);const Au=new ne(new Wt(.53,.53,.12,12),me(7693389,1));Au.rotation.z=Math.PI/2,Au.position.set(3.5,.5,0),dl.add(Au),D.add(dl);for(let S=0;S<7;S++){const C=new ne(new Qt(.14,0),me(6913394,1)),w=S/7*Math.PI*2;C.position.set(67+Math.cos(w)*4,.12+F(67+Math.cos(w)*4,49+Math.sin(w)*4),49+Math.sin(w)*4),D.add(C)}for(let S=0;S<95;S++){const C=Ae(S,77)*Math.PI*2,w=58+Ae(S,91)*32,I=Math.cos(C)*w,K=Math.sin(C)*w+2,ce=[[_t,at,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([de,we,Me])=>Math.hypot(I-de,K-we)<Me);Math.abs(I+57)>9&&!ce&&Vt(I,K,.78+Ae(S,13)*.82)}Rt(-10,18,1.55,!1),Rt(13,24,1.7,!1),Rt(-31,-12,2.15,!0);for(let S=0;S<110;S++){const C=Ae(S,701)*Math.PI*2,w=15+Ae(S,702)*50,I=Math.cos(C)*w,K=Math.sin(C)*w+3;if(Math.abs(I)<10&&Math.abs(K)<16)continue;const q=new nt;q.position.set(I,F(I,K),K);for(let ce=0;ce<3;ce++){const de=new ne(new Nn(.025,.38+Ae(ce,S)*.28,4),me(ce===1?5466175:4282935,1));de.position.set((ce-1)*.09,.18,(Ae(ce*3,S)-.5)*.12),de.rotation.z=(ce-1)*.22,q.add(de)}D.add(q)}for(let S=0;S<80;S++){const C=-88+Ae(S,101)*176,w=-88+Ae(S,111)*176;if(Math.hypot(C,w+2)>30){const I=new ne(new Nn(.08,.55+Ae(S,121)*.7,5),me(4941888,1));I.position.set(C,F(C,w)+.3,w),D.add(I)}}const ns=new nt;ns.position.set(29,F(29,25),25),ns.userData={id:"tower",label:"Сторожевая башня"};for(const S of[-2,2])for(const C of[-2,2]){const w=X(.35,7,.35,3942685,1);w.position.set(S,3.5,C),ns.add(w)}const xm=X(5,.35,5,6833965,1);xm.position.y=5.8,ns.add(xm);const ym=new ne(new Nn(3.8,2.7,4),me(2696482,1));ym.position.y=8,ns.add(ym),Pe(ns,"tower","Сторожевая башня"),Z.push(ns),wt(29,25,4.8,4.8,0,.08);const Yo=(S,C,w,I,K,q)=>{const ce=new nt;ce.userData={id:w,label:I,phase:q,baseX:S,baseZ:C};const de=new ne(new In(.32,.78,4,8),me(K,.9));de.position.y=.85,ce.add(de);const we=new ne(new cn(.25,12,8),me(13210736,.9));we.position.y=1.58,ce.add(we);const Me=X(.7,.9,.15,2565407,1);Me.position.set(0,.82,-.27),ce.add(Me),ce.position.set(S,F(S,C),C),Pe(ce,w,I),Z.push(ce),Fe.push(ce)};Yo(9,-8,"elder","Старейшина",7558719,.4),Yo(-6,-3,"blacksmith","Кузнец",6044459,1.5),Yo(21,1,"hunter","Охотник",4215359,2.4),Yo(5,10,"villager","Житель Мидгарда",5858125,3.4),Yo(-16,4,"villager2","Житель деревни",6638394,4.2);const qx=new hu({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),bu=new nt;for(let S=0;S<34;S++){const C=new ne(new cn(.9+Ae(S,810)*2.2,8,6),qx);C.position.set(-88+Ae(S,811)*176,1.8+Ae(S,812)*2.2,-72+Ae(S,813)*144),bu.add(C)}D.add(bu);const Ii=ZA(t);D.add(Ii);const ct=Ii.userData.anim,Sm=new a2,Cu=new Ke,Mm=S=>{var I,K,q,ce;if((K=(I=S.target)==null?void 0:I.closest)!=null&&K.call(I,".mid3d-ui"))return;const C=W.domElement.getBoundingClientRect();Cu.x=(S.clientX-C.left)/C.width*2-1,Cu.y=-((S.clientY-C.top)/C.height)*2+1,Sm.setFromCamera(Cu,V);const w=Sm.intersectObjects(Z,!0)[0];if(w){let de=w.object;for(;de.parent&&!((q=de.userData)!=null&&q.id);)de=de.parent;(ce=de.userData)!=null&&ce.id&&e(de.userData.id)}};W.domElement.addEventListener("pointerup",Mm);const $x=S=>{m.current=S,g(S),l(""),jt.visible=S,Xo.visible=!S,jo.visible=!S,Su.visible=!S,Mu.visible=!S,wu.visible=!S,S?(o.current.x=mn,o.current.z=on+.95,u.current.x=0,u.current.z=-1,Us.rotation.y=-Math.PI/2):(o.current.x=mn,o.current.z=on+3.75,u.current.x=0,u.current.z=1,Us.rotation.y=0),Ii.position.set(o.current.x,F(o.current.x,o.current.z)+.04,o.current.z)};v.current=$x;const Kx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:cl,z:ul,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],wm=()=>{const S=Math.max(1,y.clientWidth),C=Math.max(1,y.clientHeight);V.aspect=S/C,V.updateProjectionMatrix(),W.setSize(S,C,!1)};wm();const Em=new ResizeObserver(wm);Em.observe(y);let Ru=0,Pu=performance.now(),Tm=Pu,fl=Ii.rotation.y;const li=new k(o.current.x,0,o.current.z),Am=new k(o.current.x,1.2,o.current.z),bm=4.2,Cm=S=>{const C=Math.min(.05,(S-Pu)/1e3);Pu=S;const w=Math.min(.05,(S-Tm)/1e3);Tm=S;const I=o.current,K=Math.hypot(I.dx,I.dz),q=K>.045;if(q){const Re=Math.max(0,(K-.58)/.42),kt=(4+3.4*K+1.2*Re)*C;z(I,I.x+I.dx/K*kt,I.z+I.dz/K*kt);let tn=Math.atan2(I.dx,I.dz)-fl;for(;tn>Math.PI;)tn-=Math.PI*2;for(;tn<-Math.PI;)tn+=Math.PI*2;fl+=tn*Math.min(1,C*10.5),Ii.rotation.y=fl,u.current.x=I.dx/K,u.current.z=I.dz/K,d(!0)}else d(!1),Ii.rotation.y=fl;const ce=F(I.x,I.z);if(ct){const Re=q?K>.72?1:.58:0;ct.speed+=(Re-ct.speed)*Math.min(1,w*9),ct.run+=((q&&K>.72?1:0)-ct.run)*Math.min(1,w*7),ct.idle+=((q?0:1)-ct.idle)*Math.min(1,w*7);const ot=S*.0125*ct.speed+ct.phase,kt=Math.sin(ot)*(.34+.32*ct.run)*ct.speed,gn=Math.sin(ot+Math.PI)*(.23+.25*ct.run)*ct.speed,tn=Math.abs(Math.sin(ot))*(.025+.035*ct.run)*ct.speed,En=Math.sin(S*.0022+ct.phase)*.012*ct.idle;ct.legL.rotation.x=kt,ct.legR.rotation.x=-kt,ct.legL.rotation.z=ct.run*.025,ct.legR.rotation.z=-ct.run*.025,ct.armL.upper.rotation.x=gn,ct.armR.upper.rotation.x=-gn,ct.armL.elbow.rotation.x=-Math.abs(gn)*(.25+.2*ct.run),ct.armR.elbow.rotation.x=-Math.abs(gn)*(.25+.2*ct.run),ct.weapon.rotation.z=-.12+(q?Math.sin(ot)*(.025+.035*ct.run):0),ct.torso.rotation.z=En+Math.sin(ot)*.018*ct.speed,ct.chest.rotation.z=En*.7+Math.sin(ot+Math.PI)*.012*ct.speed,ct.head.rotation.z=En*.45,ct.neck.rotation.z=En*.35,ct.pelvis.rotation.z=-Math.sin(ot)*.025*ct.speed,ct.cape.rotation.x=-.035-Math.sin(ot)*.035*ct.speed,ct.weapon.position.y=.32+Math.sin(ot+Math.PI)*.025*ct.speed,Ii.position.y=ce+.04+tn+Math.max(0,En)}else Ii.position.y=ce+.04;const de=u.current;if(m.current)li.x+=(I.x-li.x)*.12,li.z+=(I.z-li.z)*.12;else{const Re=I.x-li.x,ot=I.z-li.z,kt=Math.hypot(Re,ot);if(kt>bm){const gn=kt-bm,tn=Math.min(1,gn*.18);li.x+=Re*tn,li.z+=ot*tn}}const we=m.current?ce+3.65:ce+7.2,Me=m.current?7.2:11.8,Xe=new k(li.x-de.x*(m.current?1:2),we,li.z-de.z*(m.current?1:2)+Me);V.position.lerp(Xe,m.current?.1:.16);const je=new k(li.x+(m.current?de.x*.55:de.x*.8),ce+(m.current?1.25:1.15),li.z+(m.current?de.z*.55:de.z*.8));Am.lerp(je,m.current?.14:.12),V.lookAt(Am);let pt="",xt="";if(m.current)I.z>on+1.72&&(pt="Дверь — выйти из дома",xt="heroHomeExit");else for(const Re of Kx)if(Math.hypot(I.x-Re.x,I.z-Re.z)<Re.r){pt=Re.label,xt=Re.id;break}l(pt?`${pt}|${xt}`:""),fe.forEach(Re=>{Re.light.intensity=2+Math.sin(S*.012+Re.phase)*.5,Re.flame.scale.y=.9+Math.sin(S*.009+Re.phase)*.12}),bu.children.forEach((Re,ot)=>{Re.position.x+=Math.sin(S*12e-5+ot)*.003,Re.position.z+=Math.cos(S*1e-4+ot)*.002}),Ze.forEach((Re,ot)=>{if(Re.kind==="deer"){const En=Re.g.position.x-Ii.position.x,$i=Re.g.position.z-Ii.position.z,Fs=Math.hypot(En,$i);if(Fs<11){const qo=Math.max(.001,Fs),$o=Fs<5.5?.115:.075,Ui=Re.g.position.x+En/qo*$o,_r=Re.g.position.z+$i/qo*$o,xr=Ui-30,Ko=_r-53;if(Math.hypot(xr,Ko)<17)Re.g.position.set(Ui,F(Ui,_r),_r);else{const Rm=Math.atan2(Ko,xr),Pm=30+Math.cos(Rm)*16,Lm=53+Math.sin(Rm)*10;Re.g.position.set(Pm,F(Pm,Lm),Lm)}Re.g.rotation.y=Math.atan2($i,En),Re.g.position.y+=Math.sin(S*.008+ot)*.025;return}}const kt=S*.00105*Re.speed+Re.phase,gn=Re.x+Math.cos(kt)*Re.r,tn=Re.z+Math.sin(kt*.83)*Re.r*.62;Re.g.position.set(gn,F(gn,tn),tn),Re.g.rotation.y=Math.atan2(Math.cos(kt*.83),-Math.sin(kt)),Re.kind==="deer"&&(Re.g.position.y+=Math.sin(S*.006+ot)*.025)}),Fe.forEach((Re,ot)=>{const kt=Re.userData.phase||0,gn=Re.userData.baseX,tn=Re.userData.baseZ,En=gn+Math.sin(S*28e-5+kt)*1.6,$i=tn+Math.cos(S*22e-5+kt)*1.1;Re.position.set(En,F(En,$i),$i),Re.rotation.y=Math.sin(S*4e-4+kt)*.5}),W.render(D,V),Ru=requestAnimationFrame(Cm)};return Ru=requestAnimationFrame(Cm),()=>{cancelAnimationFrame(Ru),Em.disconnect(),W.domElement.removeEventListener("pointerup",Mm),$.dispose(),E.dispose(),Y.dispose(),W.dispose(),D.traverse(S=>{var C,w,I,K;S.isMesh&&((w=(C=S.geometry)==null?void 0:C.dispose)==null||w.call(C),Array.isArray(S.material)?S.material.forEach(q=>{var ce;return(ce=q.dispose)==null?void 0:ce.call(q)}):(K=(I=S.material)==null?void 0:I.dispose)==null||K.call(I))}),W.domElement.remove(),v.current=null}},[t.id,e,n]);const x=mt.useRef(!1),b=y=>{const D=r.current,V=s.current;if(!D||!V)return;const W=D.getBoundingClientRect(),le=W.left+W.width/2,ie=W.top+W.height/2,se=48;let F=y.clientX-le,O=y.clientY-ie;const $=Math.hypot(F,O);$>se&&(F=F/$*se,O=O/$*se),V.style.transform=`translate(${F}px,${O}px)`,o.current.dx=F/se,o.current.dz=O/se},R=()=>{x.current=!1,s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=y=>{y.button===0&&(y.preventDefault(),y.stopPropagation(),x.current=!0,y.currentTarget.setPointerCapture(y.pointerId),b(y))},N=y=>{x.current&&(y.preventDefault(),b(y))},T=y=>{y.preventDefault(),y.currentTarget.hasPointerCapture(y.pointerId)&&y.currentTarget.releasePointerCapture(y.pointerId),R()};return B.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onContextMenu:y=>y.preventDefault(),children:[B.jsxs("div",{className:"mid3d-ui mid3d-top",children:[B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"МИДГАРД"}),B.jsx("span",{children:"Деревня • река • лес • святилища"})]}),B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"ᛟ"}),B.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[B.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),B.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[B.jsx("b",{children:"Камень Трёх Нитей"}),B.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>_(!1),children:"Продолжить путь"})]}),f&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[B.jsx("b",{children:"🜂 Круг Силы"}),B.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),B.jsx("button",{onPointerDown:y=>y.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[y,D]=a.split("|"),V=D==="heroHome"||D==="heroHomeExit";return B.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[B.jsx("b",{children:y}),B.jsx("span",{children:V?D==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),B.jsx("button",{onPointerDown:W=>W.stopPropagation(),onClick:()=>{var W,le;D==="ritual"?h(!0):D==="forestEvent"?_(!0):D==="heroHome"?(W=v.current)==null||W.call(v,!0):D==="heroHomeExit"?(le=v.current)==null||le.call(v,!1):e(D)},children:V?D==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),B.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,onPointerDown:P,onPointerMove:N,onPointerUp:T,onPointerCancel:T,onLostPointerCapture:R,children:B.jsx("div",{className:"mid3d-knob",ref:s})}),B.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:y=>y.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),B.jsx("div",{className:"mid3d-ui mid3d-hint",children:M?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function QA(){const[t,e]=mt.useState(()=>qg().hero?{t:"tree"}:{t:"choose"}),[n,i]=mt.useState(qg),[r,s]=mt.useState(""),[o,a]=mt.useState(""),[l,c]=mt.useState(""),d=mt.useRef(0),[f,h]=mt.useState(null),[p,_]=mt.useState(null),[M,g]=mt.useState(!1),[u,m]=mt.useState(0),[v,x]=mt.useState(0),[b,R]=mt.useState(0),[P,N]=mt.useState(""),[T,y]=mt.useState(!1),[D,V]=mt.useState(!1),[W,le]=mt.useState(""),[ie,se]=mt.useState(.06);mt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),mt.useEffect(()=>{var z,Te,re,ae;(z=Et==null?void 0:Et.ready)==null||z.call(Et),(Te=Et==null?void 0:Et.expand)==null||Te.call(Et),(re=Et==null?void 0:Et.setHeaderColor)==null||re.call(Et,"#0b0f0c"),(ae=Et==null?void 0:Et.setBackgroundColor)==null||ae.call(Et,"#0b0f0c")},[]),mt.useEffect(()=>{if(!(Et!=null&&Et.BackButton))return;const z=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Et.BackButton.show(),Et.BackButton.onClick(z)):Et.BackButton.hide(),()=>{var Te,re;(re=(Te=Et.BackButton)==null?void 0:Te.offClick)==null||re.call(Te,z)}},[t,n.hero]),mt.useEffect(()=>{h(null),_(null),g(!1),le(""),y(!1)},[t]);const F=z=>{c(z),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},O=(z="light")=>{var Te,re,ae,Ye;try{z==="success"?(re=(Te=Et==null?void 0:Et.HapticFeedback)==null?void 0:Te.notificationOccurred)==null||re.call(Te,"success"):(Ye=(ae=Et==null?void 0:Et.HapticFeedback)==null?void 0:ae.impactOccurred)==null||Ye.call(ae,"light")}catch{}},$=z=>e(z),te=z=>{O(),e({t:"realm",id:z.id})},Se=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Ie=()=>{const z=Se();if(z<=0){F("Дозор только начался — искры ещё копятся.");return}i(Te=>({...Te,sparks:Te.sparks+z,watch:Date.now()})),O("success"),F("Дозор завершён: +"+z+" ✨")},Pe=()=>{if(n.gift===ha())return;const Te=(n.gift?Math.round((Date.parse(ha())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,re=Hd[Te-1];i(ae=>({...ae,sparks:ae.sparks+re,gift:ha(),streak:Te})),O("success"),F("Дар Древа, день "+Te+": +"+re+" ✨")},me=()=>{!r||!o||(i(z=>({...z,hero:{id:r,name:o}})),O("success"),F("Путь начинается, "+o+"!"),e({t:"tree"}))},X=n.hero?Vd.find(z=>z.id===n.hero.id):null,Z=z=>Math.floor(Math.random()*z),fe=z=>n.trials.filter(Te=>Te.startsWith(z+":")).length,Fe=z=>{if(n.artifacts.includes(z.id)){F("Мир покорён. Артефакт хранится в листе героя.");return}O(),e({t:"trial",id:z.id})},Ze=(z,Te,re)=>{const ae=Te===2;i(Ye=>({...Ye,sparks:Ye.sparks+re+(ae?30:0),trials:[...Ye.trials,z+":"+Te],artifacts:ae?[...Ye.artifacts,z]:Ye.artifacts})),ae&&(O("success"),F("Мир пройден! Артефакт: "+Wd[z]))},He=(z,Te)=>{if(f!==null)return;const re=fe(z),ae=Gd[z][re];if(Te===ae.c){h(Te),O("success");const Ye=12+re*3+((X==null?void 0:X.id)==="dwarf"?6:0);F("Верно! Сундук хозяина: +"+Ye+" ✨"),Ze(z,re,Ye);return}if(n.powers.includes("mimirEye")){h(ae.c),i(qe=>({...qe,powers:qe.powers.filter(L=>L!=="mimirEye")}));const Ye=8+re*2;O("success"),F("Око Мимира раскрыло истину. Ответ исправлен. +"+Ye+" ✨"),Ze(z,re,Ye);return}if(n.powers.includes("nornThread")){h(Te),i(qe=>({...qe,powers:qe.powers.filter(L=>L!=="nornThread")}));const Ye=6+re*2;O("success"),F("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ye+" ✨"),Ze(z,re,Ye);return}h(Te),O(),N(pa[z].name+" мрачнеет: «Что ж — пусть решит сталь!»")},dt=z=>{const Te=fe(z),re=Gd[z][Te],ae=re.a.findIndex((Ye,qe)=>qe!==re.c&&qe!==p);_(ae),g(!0),O(),F("Шёпот ветров уносит один ответ...")},wt=z=>{const Te=pa[z],re=n.powers.includes("ashBreath");m(Te.hp),x(X.hp+(re?25:0)),R(X.en+(re?2:0)),le(""),y(!1),V(!1),N(re?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Te.name+" поднимает оружие!"),re&&i(ae=>({...ae,powers:ae.powers.filter(Ye=>Ye!=="ashBreath")})),e({t:"fight",id:z})},U=(z,Te)=>{if(W)return;const re=pa[z],ae=fe(z);let Ye=0,qe="",L=b,E=T;if(Te==="hit"&&(Ye=X.str+Z(4),n.powers.includes("fireOath")&&(Ye+=5,i(De=>({...De,powers:De.powers.filter(ve=>ve!=="fireOath")})),qe="Огненный обет! "),X.id==="berserk"&&v<=X.hp/2&&(Ye*=2,qe+="Медвежья ярость! "),qe+="Ты бьёшь: "+X.weapon+" — −"+Ye+" хозяину."),Te==="rune"){if(b<4){F("Мало энергии для заклинания!");return}L=b-4,Ye=X.en+2+Z(5),qe="Руническое заклинание вспыхивает: −"+Ye+" хозяину."}Te==="shield"&&(E=!0,qe="Ты поднимаешь щит — удар ослабнет.");const Y=u-Ye;if(Y<=0){m(0),R(L),le("win");const De=8+ae*2;N("Хозяин повержен! Награда: +"+De+" ✨"),Ze(z,ae,De);return}let ee=re.atk+Z(3),ue="";E&&(ee=Math.ceil(ee*.3),ue=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(ee=Math.ceil(ee*.65),i(De=>({...De,powers:De.powers.filter(ve=>ve!=="iceOath")})),ue+=" Ледяной обет сковал удар врага."),X.id==="dwarf"&&(ee=Math.ceil(ee*.75));let oe=v;if(X.id==="viking"&&!D&&oe-ee<=0&&(V(!0),ee=0,ue=" Крылья бури поглотили смертельный удар!"),oe=oe-ee,m(Y),x(Math.max(0,oe)),R(L),y(!1),oe<=0&&n.powers.includes("yggdrasilCall")){i(De=>({...De,powers:De.powers.filter(ve=>ve!=="yggdrasilCall")})),x(30),N(qe+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(oe<=0){le("lose"),i(De=>({...De,sparks:Math.max(0,De.sparks-10)})),N(qe+" "+re.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}N(qe+ue+" "+re.name+" отвечает: −"+ee+".")},bt=z=>{fe(z)>=3||n.artifacts.includes(z)?e({t:"realm",id:z}):e({t:"trial",id:z})},st=z=>z==="tree"?t.t==="tree"||t.t==="realm":t.t===z,et=z=>z==="tree"?{t:"tree"}:{t:z};return B.jsxs("div",{className:"app",children:[B.jsx("style",{children:$A}),B.jsxs("div",{className:"hdr",children:[t.t==="tree"&&B.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&B.jsx("button",{className:"back",onClick:()=>$({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&B.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&B.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&B.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&B.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&B.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&B.jsx("div",{className:"title",children:"⚔ Бой"}),B.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&B.jsxs("div",{className:"scroll choose-screen",children:[B.jsxs("div",{className:"card center choose-intro",children:[B.jsx("div",{className:"big",children:"ᛉ"}),B.jsx("div",{className:"qhead2",children:"Выбери героя"}),B.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Vd.map(z=>B.jsxs("button",{className:"hcard"+(r===z.id?" on":""),onClick:()=>{s(z.id),a(""),O()},children:[B.jsx("span",{className:"hface",style:{borderColor:z.color,color:z.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(br,{name:z.img,className:"himg"})}),B.jsxs("span",{className:"hinfo",children:[B.jsx("span",{className:"hname",style:{color:z.color},children:z.race}),B.jsxs("span",{className:"hab",children:["🌀 ",z.ability,": ",z.abilityDesc]}),B.jsxs("span",{className:"hst",children:["⚔ ",z.str," • ✨ ",z.en," • ❤ ",z.hp]}),B.jsxs("span",{className:"hw",children:["🗡 ",z.weapon]})]})]},z.id)),r&&B.jsxs("div",{className:"card",children:[B.jsx("div",{className:"qhead2",children:"Имя героя"}),B.jsx("div",{className:"chips",children:(Vd.find(z=>z.id===r).gender==="f"?YA:qA).map(z=>B.jsx("button",{className:"chip"+(o===z?" on":""),onClick:()=>{a(z),O()},children:z},z))})]}),B.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:me,children:"Вступить на путь"})]}),t.t==="tree"&&B.jsxs("div",{className:"maparea",children:[B.jsx("div",{className:"mapwrap",children:B.jsxs("div",{className:"mapcanvas",children:[B.jsx(br,{name:"tree",className:"mapimg"}),ec.map(z=>B.jsxs("button",{className:"marker",style:{left:z.x+"%",top:z.y+"%"},onClick:()=>te(z),children:[B.jsxs("div",{className:"amulet-wrap",children:[B.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${z.glow}, transparent 70%)`}}),B.jsx("div",{className:"amulet-ring",style:{borderColor:z.color}}),B.jsx("div",{className:"amulet-core",style:{borderColor:z.color,color:z.color,background:`linear-gradient(135deg, ${z.dark}, #0a0a0a)`},children:z.runeSym})]}),B.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:z.name})]},z.id))]})}),B.jsx("div",{className:"fadeT"}),B.jsx("div",{className:"fadeB"}),B.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&X&&n.hero&&B.jsxs("button",{className:"herobar",onClick:()=>$({t:"hero"}),children:[B.jsxs("span",{className:"hbface",style:{borderColor:X.color,color:X.color},children:[B.jsx(br,{name:X.img,className:"hbimg"}),X.sym]}),B.jsxs("span",{className:"hbname",children:[n.hero.name,B.jsx("i",{children:X.race})]}),B.jsxs("span",{className:"hbst",children:["⚔ ",X.str," ✨ ",X.en," ⏳ ",Se()]}),B.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const z=ec.find(Te=>Te.id===t.id);if(z.id==="midgard"){if(!X)return null;const Te=re=>{if(O(),re==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?F("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:present:reward"])]})),O("success"),F("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):F("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(re==="norns"){F("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(re==="forge"||re==="blacksmith"){F("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(re==="house"||re==="elder"){F("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(re==="port"){F("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(re==="rune"){F("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(re==="ashgrove"){F("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(re==="runefield"){F("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(re==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?F("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:past:reward"])]})),O("success"),F("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):F("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(re==="forestCache"){n.done.includes("forest:cache")?F("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ae=>({...ae,sparks:ae.sparks+18,done:[...new Set([...ae.done,"forest:cache"])]})),O("success"),F("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(re==="forestWhisper"){n.done.includes("forest:whisper")?F("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ae=>({...ae,sparks:ae.sparks+16,done:[...new Set([...ae.done,"forest:whisper"])]})),O("success"),F("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(re==="forestThread"){n.done.includes("forest:thread")?F("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ae=>({...ae,sparks:ae.sparks+22,done:[...new Set([...ae.done,"forest:thread"])]})),O("success"),F("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(re==="heroHome"){F("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(re==="hunterCamp"){n.done.includes("forest:camp")?F("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ae=>({...ae,sparks:ae.sparks+14,done:[...new Set([...ae.done,"forest:camp"])]})),O("success"),F("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(re==="deepGrove"){n.done.includes("forest:grove")?F("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ae=>({...ae,sparks:ae.sparks+17,done:[...new Set([...ae.done,"forest:grove"])]})),O("success"),F("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(re==="fallenAsh"){n.done.includes("forest:ash")?F("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ae=>({...ae,sparks:ae.sparks+21,done:[...new Set([...ae.done,"forest:ash"])]})),O("success"),F("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(re==="deer"){F("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(re==="hoddmimir"){F("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(re==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?F("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:future:reward"])]})),O("success"),F("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):F("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(re==="forestEvent"){n.done.includes("forest:choice")&&F("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(re==="forestEvent:past"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:past"])]})),O("success"),F("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(re==="forestEvent:present"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:present"])]})),O("success"),F("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(re==="forestEvent:future"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:future"])]})),O("success"),F("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(re==="event"){F("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(re.startsWith("ritual:")){const ae=re.slice(7),Ye={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ae];if(!L)return;if(n.powers.includes(L)){F(Ye[ae]+" уже пробуждён. Его сила ждёт своего часа.");return}i(Y=>({...Y,powers:[...new Set([...Y.powers,L])],done:[...new Set([...Y.done,"ritual:"+ae])]}));const E={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};O("success"),F(E[ae]);return}};return B.jsx(JA,{h:X,on:Te,eventDone:n.done.includes("forest:choice")})}return B.jsxs("div",{className:"content",children:[B.jsx(br,{name:z.id,className:"bgimg"}),B.jsx("div",{className:"veil"}),B.jsxs("div",{className:"banner",children:[B.jsx("span",{className:"bemoji",children:z.emoji}),B.jsxs("div",{children:[B.jsx("div",{className:"bname",children:z.name}),B.jsx("div",{className:"btag",children:z.tag})]})]}),B.jsxs("button",{className:"gate",onClick:()=>Fe(z),children:[B.jsxs("span",{className:"gwrap",children:[B.jsx("span",{className:"gate-ring",style:{borderColor:z.color}}),B.jsx("span",{className:"gate-core",style:{borderColor:z.color,color:z.color,background:`radial-gradient(circle, ${z.dark}, #050705 75%)`},children:z.runeSym})]}),B.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:n.artifacts.includes(z.id)?"Мир покорён":"Врата мира"})]}),B.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const z=ec.find(Ye=>Ye.id===t.id),Te=pa[z.id],re=fe(z.id);if(re>=3)return B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏺"}),B.jsx("div",{className:"qhead2",children:"Мир покорён!"}),B.jsxs("p",{className:"dim",children:["Артефакт: ",Wd[z.id]]}),B.jsx("button",{className:"btn gold",onClick:()=>$({t:"realm",id:z.id}),children:"К вратам"})]})});const ae=Gd[z.id][re];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"mhead",children:[B.jsxs("span",{className:"mface",style:{borderColor:z.color,color:z.color},children:[B.jsx(br,{name:$g[z.id],className:"himg"}),Te.sym]}),B.jsx("span",{className:"mname2",style:{color:z.color},children:Te.name}),B.jsxs("span",{className:"mtitle",children:[Te.title," • испытание ",re+1," из 3"]})]}),re===0&&B.jsxs("div",{className:"greet",children:["«",Te.greet,"»"]}),B.jsxs("div",{className:"cloud",children:[B.jsx("div",{className:"riddle",children:ae.q}),ae.a.map((Ye,qe)=>B.jsx("button",{className:"ans"+(f!==null?qe===ae.c?" good":qe===f?" bad":" off":p===qe?" off":""),onClick:()=>He(z.id,qe),children:Ye},qe)),(X==null?void 0:X.id)==="elf"&&!M&&f===null&&B.jsx("button",{className:"btn rune",onClick:()=>dt(z.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ae.c?B.jsx("button",{className:"btn gold",onClick:()=>bt(z.id),children:"Открыть сундук →"}):B.jsx("button",{className:"btn",onClick:()=>wt(z.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const z=ec.find(re=>re.id===t.id),Te=pa[z.id];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"duel",children:[B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:z.color,color:z.color},children:[B.jsx(br,{name:$g[z.id],className:"himg"}),Te.sym]}),B.jsx("span",{className:"dname",style:{color:z.color},children:Te.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Te.hp*100)+"%",background:z.color}})}),B.jsxs("span",{className:"dnum",children:[u,"/",Te.hp]})]}),B.jsx("span",{className:"dvs",children:"⚔"}),B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:X.color,color:X.color},children:[B.jsx(br,{name:X.img,className:"himg"}),X.sym]}),B.jsx("span",{className:"dname",style:{color:X.color},children:n.hero.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/X.hp*100)+"%",background:"#7ee787"}})}),B.jsx("span",{className:"denergy",children:Array.from({length:X.en}).map((re,ae)=>B.jsx("span",{className:"pip"+(ae<b?" on":"")},ae))})]})]}),B.jsx("div",{className:"flog",children:P}),!W&&B.jsxs("div",{className:"acts",children:[B.jsxs("button",{className:"btn gold",onClick:()=>U(z.id,"hit"),children:["⚔ Удар: ",X.weapon]}),B.jsx("button",{className:"btn rune",onClick:()=>U(z.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),B.jsx("button",{className:"btn shield",onClick:()=>U(z.id,"shield"),children:"🛡 Щит"})]}),W==="win"&&B.jsx("button",{className:"btn gold",onClick:()=>bt(z.id),children:"Забрать награду →"}),W==="lose"&&B.jsx("button",{className:"btn ghost",onClick:()=>$({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&X&&n.hero&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("span",{className:"hface bigface",style:{borderColor:X.color,color:X.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(br,{name:X.img,className:"himg"})}),B.jsxs("div",{className:"qhead2",style:{color:X.color},children:[n.hero.name," • ",X.race]}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["⚔ ",X.str]}),B.jsx("span",{children:"сила"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",X.en]}),B.jsx("span",{children:"энергия"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["❤ ",X.hp]}),B.jsx("span",{children:"здоровье"})]})]}),B.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",B.jsx("b",{children:X.weapon})]}),B.jsxs("div",{className:"hrow",children:["🌀 ",X.ability,": ",X.abilityDesc]}),B.jsxs("div",{className:"hrow",children:["✨ Искр: ",B.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",B.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&B.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(z=>Wd[z]).join(", ")]})]})}),t.t==="gift"&&(()=>{const z=n.gift===ha(),re=(n.gift?Math.round((Date.parse(ha())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ae=z?n.streak:re;return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🎁"}),B.jsx("div",{className:"qhead2",children:"Дар Древа"}),B.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),B.jsx("div",{className:"days",children:Hd.map((Ye,qe)=>B.jsxs("span",{className:"day"+(qe+1===ae?" on":qe+1<ae&&z?" done":""),children:[B.jsx("b",{children:Ye}),"день ",qe+1]},qe))}),z?B.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):B.jsxs("button",{className:"btn gold",onClick:Pe,children:["Забрать дар +",Hd[re-1]," ✨"]})]}),B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"⏳"}),B.jsx("div",{className:"qhead2",children:"Дозор героя"}),B.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),B.jsxs("button",{className:"btn gold",onClick:Ie,children:["Завершить дозор · +",Se()," ✨"]})]})]})})(),t.t==="hall"&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏛️"}),B.jsx("div",{className:"qhead2",children:"Чертог путника"}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",n.sparks]}),B.jsx("span",{children:"Искр"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),B.jsx("span",{children:"артефакты"})]})]}),B.jsxs("div",{className:"rank",children:["🏆 Ранг: ",jA(n.sparks)]}),n.hero&&X&&B.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",X.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&B.jsx("div",{className:"nav",children:XA.map(z=>B.jsxs("button",{className:"navbtn"+(st(z.id)?" on":""),onClick:()=>$(et(z.id)),children:[B.jsx("span",{className:"ic",children:z.ic}),z.t]},z.id))}),l&&B.jsx("div",{className:"toast",children:l})]})}cx(document.getElementById("root")).render(B.jsx(QA,{}));
