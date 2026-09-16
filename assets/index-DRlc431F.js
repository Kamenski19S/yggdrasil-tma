(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Uv={exports:{}},zu={},Fv={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=Symbol.for("react.element"),o2=Symbol.for("react.portal"),a2=Symbol.for("react.fragment"),l2=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),u2=Symbol.for("react.provider"),d2=Symbol.for("react.context"),f2=Symbol.for("react.forward_ref"),h2=Symbol.for("react.suspense"),p2=Symbol.for("react.memo"),m2=Symbol.for("react.lazy"),fg=Symbol.iterator;function g2(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,zv={};function la(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||kv}la.prototype.isReactComponent={};la.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};la.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bv(){}Bv.prototype=la.prototype;function qp(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||kv}var $p=qp.prototype=new Bv;$p.constructor=qp;Ov($p,la.prototype);$p.isPureReactComponent=!0;var hg=Array.isArray,Hv=Object.prototype.hasOwnProperty,Kp={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hv.call(e,i)&&!Vv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Il,type:t,key:s,ref:o,props:r,_owner:Kp.current}}function v2(t,e){return{$$typeof:Il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Il}function _2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pg=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_2(""+t.key):e.toString(36)}function jc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Il:case o2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jd(o,0):i,hg(r)?(n="",t!=null&&(n=t.replace(pg,"$&/")+"/"),jc(r,e,n,"",function(u){return u})):r!=null&&(Zp(r)&&(r=v2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+jd(s,a);o+=jc(s,e,n,l,r)}else if(l=g2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+jd(s,a++),o+=jc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ql(t,e,n){if(t==null)return t;var i=[],r=0;return jc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function x2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var oi={current:null},Yc={transition:null},y2={ReactCurrentDispatcher:oi,ReactCurrentBatchConfig:Yc,ReactCurrentOwner:Kp};function Wv(){throw Error("act(...) is not supported in production builds of React.")}wt.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};wt.Component=la;wt.Fragment=a2;wt.Profiler=c2;wt.PureComponent=qp;wt.StrictMode=l2;wt.Suspense=h2;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y2;wt.act=Wv;wt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ov({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hv.call(e,l)&&!Vv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Il,type:t.type,key:r,ref:s,props:i,_owner:o}};wt.createContext=function(t){return t={$$typeof:d2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u2,_context:t},t.Consumer=t};wt.createElement=Gv;wt.createFactory=function(t){var e=Gv.bind(null,t);return e.type=t,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(t){return{$$typeof:f2,render:t}};wt.isValidElement=Zp;wt.lazy=function(t){return{$$typeof:m2,_payload:{_status:-1,_result:t},_init:x2}};wt.memo=function(t,e){return{$$typeof:p2,type:t,compare:e===void 0?null:e}};wt.startTransition=function(t){var e=Yc.transition;Yc.transition={};try{t()}finally{Yc.transition=e}};wt.unstable_act=Wv;wt.useCallback=function(t,e){return oi.current.useCallback(t,e)};wt.useContext=function(t){return oi.current.useContext(t)};wt.useDebugValue=function(){};wt.useDeferredValue=function(t){return oi.current.useDeferredValue(t)};wt.useEffect=function(t,e){return oi.current.useEffect(t,e)};wt.useId=function(){return oi.current.useId()};wt.useImperativeHandle=function(t,e,n){return oi.current.useImperativeHandle(t,e,n)};wt.useInsertionEffect=function(t,e){return oi.current.useInsertionEffect(t,e)};wt.useLayoutEffect=function(t,e){return oi.current.useLayoutEffect(t,e)};wt.useMemo=function(t,e){return oi.current.useMemo(t,e)};wt.useReducer=function(t,e,n){return oi.current.useReducer(t,e,n)};wt.useRef=function(t){return oi.current.useRef(t)};wt.useState=function(t){return oi.current.useState(t)};wt.useSyncExternalStore=function(t,e,n){return oi.current.useSyncExternalStore(t,e,n)};wt.useTransition=function(){return oi.current.useTransition()};wt.version="18.3.1";Fv.exports=wt;var Tt=Fv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M2=Tt,S2=Symbol.for("react.element"),w2=Symbol.for("react.fragment"),E2=Object.prototype.hasOwnProperty,T2=M2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b2={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)E2.call(e,i)&&!b2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S2,type:t,key:s,ref:o,props:r,_owner:T2.current}}zu.Fragment=w2;zu.jsx=Xv;zu.jsxs=Xv;Uv.exports=zu;var q=Uv.exports,jv={exports:{}},Pi={},Yv={exports:{}},qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,se){var ue=H.length;H.push(se);e:for(;0<ue;){var Re=ue-1>>>1,ke=H[Re];if(0<r(ke,se))H[Re]=se,H[ue]=ke,ue=Re;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var se=H[0],ue=H.pop();if(ue!==se){H[0]=ue;e:for(var Re=0,ke=H.length,vt=ke>>>1;Re<vt;){var ct=2*(Re+1)-1,Pe=H[ct],pe=ct+1,ve=H[pe];if(0>r(Pe,ue))pe<ke&&0>r(ve,Pe)?(H[Re]=ve,H[pe]=ue,Re=pe):(H[Re]=Pe,H[ct]=ue,Re=ct);else if(pe<ke&&0>r(ve,ue))H[Re]=ve,H[pe]=ue,Re=pe;else break e}}return se}function r(H,se){var ue=H.sortIndex-se.sortIndex;return ue!==0?ue:H.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,h=null,m=3,g=!1,w=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var se=n(u);se!==null;){if(se.callback===null)i(u);else if(se.startTime<=H)i(u),se.sortIndex=se.expirationTime,e(l,se);else break;se=n(u)}}function T(H){if(A=!1,y(H),!w)if(n(l)!==null)w=!0,W(D);else{var se=n(u);se!==null&&te(T,se.startTime-H)}}function D(H,se){w=!1,A&&(A=!1,f(k),k=-1),g=!0;var ue=m;try{for(y(se),h=n(l);h!==null&&(!(h.expirationTime>se)||H&&!z());){var Re=h.callback;if(typeof Re=="function"){h.callback=null,m=h.priorityLevel;var ke=Re(h.expirationTime<=se);se=t.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&i(l),y(se)}else i(l);h=n(l)}if(h!==null)var vt=!0;else{var ct=n(u);ct!==null&&te(T,ct.startTime-se),vt=!1}return vt}finally{h=null,m=ue,g=!1}}var N=!1,U=null,k=-1,b=5,S=-1;function z(){return!(t.unstable_now()-S<b)}function Y(){if(U!==null){var H=t.unstable_now();S=H;var se=!0;try{se=U(!0,H)}finally{se?re():(N=!1,U=null)}}else N=!1}var re;if(typeof _=="function")re=function(){_(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=Y,re=function(){fe.postMessage(null)}}else re=function(){x(Y,0)};function W(H){U=H,N||(N=!0,re())}function te(H,se){k=x(function(){H(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,W(D))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var se=3;break;default:se=m}var ue=m;m=se;try{return H()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,se){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=m;m=H;try{return se()}finally{m=ue}},t.unstable_scheduleCallback=function(H,se,ue){var Re=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Re+ue:Re):ue=Re,H){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ue+ke,H={id:p++,callback:se,priorityLevel:H,startTime:ue,expirationTime:ke,sortIndex:-1},ue>Re?(H.sortIndex=ue,e(u,H),n(l)===null&&H===n(u)&&(A?(f(k),k=-1):A=!0,te(T,ue-Re))):(H.sortIndex=ke,e(l,H),w||g||(w=!0,W(D))),H},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(H){var se=m;return function(){var ue=m;m=se;try{return H.apply(this,arguments)}finally{m=ue}}}})(qv);Yv.exports=qv;var A2=Yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C2=Tt,Ri=A2;function Ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,cl={};function io(t,e){Ko(t,e),Ko(t+"Capture",e)}function Ko(t,e){for(cl[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,R2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mg={},gg={};function P2(t){return lh.call(gg,t)?!0:lh.call(mg,t)?!1:R2.test(t)?gg[t]=!0:(mg[t]=!0,!1)}function I2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L2(t,e,n,i){if(e===null||typeof e>"u"||I2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ai(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yn[t]=new ai(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yn[e]=new ai(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yn[t]=new ai(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yn[t]=new ai(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yn[t]=new ai(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yn[t]=new ai(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yn[t]=new ai(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yn[t]=new ai(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yn[t]=new ai(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,Qp);Yn[e]=new ai(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,Qp);Yn[e]=new ai(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,Qp);Yn[e]=new ai(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yn[t]=new ai(t,1,!1,t.toLowerCase(),null,!1,!1)});Yn.xlinkHref=new ai("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yn[t]=new ai(t,1,!1,t.toLowerCase(),null,!0,!0)});function em(t,e,n,i){var r=Yn.hasOwnProperty(e)?Yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L2(e,n,r,i)&&(n=null),i||r===null?P2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Dr=C2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Io=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),im=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),vg=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var hn=Object.assign,Yd;function ja(t){if(Yd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yd=e&&e[1]||""}return`
`+Yd+t}var qd=!1;function $d(t,e){if(!t||qd)return"";qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function D2(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=$d(t.type,!1),t;case 11:return t=$d(t.type.render,!1),t;case 1:return t=$d(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Io:return"Fragment";case Po:return"Portal";case ch:return"Profiler";case tm:return"StrictMode";case uh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zv:return(t.displayName||"Context")+".Consumer";case Kv:return(t._context.displayName||"Context")+".Provider";case nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case im:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function N2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U2(t){var e=Qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tc(t){t._valueTracker||(t._valueTracker=U2(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hh(t,e){var n=e.checked;return hn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _g(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&em(t,"checked",e,!1)}function ph(t,e){t_(t,e);var n=gs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function Go(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return hn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ee(92));if(Ya(n)){if(1<n.length)throw Error(Ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gs(n)}}function n_(t,e){var n=gs(e.value),i=gs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nc,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F2=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){F2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=s_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var k2=hn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(k2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mh=null,Wo=null,Xo=null;function Sg(t){if(t=Nl(t)){if(typeof Mh!="function")throw Error(Ee(280));var e=t.stateNode;e&&(e=Wu(e),Mh(t.stateNode,t.type,e))}}function a_(t){Wo?Xo?Xo.push(t):Xo=[t]:Wo=t}function l_(){if(Wo){var t=Wo,e=Xo;if(Xo=Wo=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function c_(t,e){return t(e)}function u_(){}var Kd=!1;function d_(t,e,n){if(Kd)return t(e,n);Kd=!0;try{return c_(t,e,n)}finally{Kd=!1,(Wo!==null||Xo!==null)&&(u_(),l_())}}function dl(t,e){var n=t.stateNode;if(n===null)return null;var i=Wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ee(231,e,typeof n));return n}var Sh=!1;if(Rr)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Sh=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Sh=!1}function O2(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var Ja=!1,uu=null,du=!1,wh=null,z2={onError:function(t){Ja=!0,uu=t}};function B2(t,e,n,i,r,s,o,a,l){Ja=!1,uu=null,O2.apply(z2,arguments)}function H2(t,e,n,i,r,s,o,a,l){if(B2.apply(this,arguments),Ja){if(Ja){var u=uu;Ja=!1,uu=null}else throw Error(Ee(198));du||(du=!0,wh=u)}}function ro(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wg(t){if(ro(t)!==t)throw Error(Ee(188))}function V2(t){var e=t.alternate;if(!e){if(e=ro(t),e===null)throw Error(Ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wg(r),t;if(s===i)return wg(r),e;s=s.sibling}throw Error(Ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ee(189))}}if(n.alternate!==i)throw Error(Ee(190))}if(n.tag!==3)throw Error(Ee(188));return n.stateNode.current===n?t:e}function h_(t){return t=V2(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=Ri.unstable_scheduleCallback,Eg=Ri.unstable_cancelCallback,G2=Ri.unstable_shouldYield,W2=Ri.unstable_requestPaint,_n=Ri.unstable_now,X2=Ri.unstable_getCurrentPriorityLevel,sm=Ri.unstable_ImmediatePriority,g_=Ri.unstable_UserBlockingPriority,fu=Ri.unstable_NormalPriority,j2=Ri.unstable_LowPriority,v_=Ri.unstable_IdlePriority,Bu=null,dr=null;function Y2(t){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ji=Math.clz32?Math.clz32:K2,q2=Math.log,$2=Math.LN2;function K2(t){return t>>>=0,t===0?32:31-(q2(t)/$2|0)|0}var ic=64,rc=4194304;function qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qa(a):(s&=o,s!==0&&(i=qa(s)))}else o=n&~r,o!==0?i=qa(o):s!==0&&(i=qa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ji(e),r=1<<n,i|=t[n],e&=~r;return i}function Z2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ji(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Z2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=ic;return ic<<=1,!(ic&4194240)&&(ic=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ji(e),t[e]=n}function Q2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ji(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ji(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Vt=0;function x_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y_,am,M_,S_,w_,Th=!1,sc=[],ss=null,os=null,as=null,fl=new Map,hl=new Map,Qr=[],eM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tg(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(e.pointerId)}}function Ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Nl(e),e!==null&&am(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tM(t,e,n,i,r){switch(e){case"focusin":return ss=Ra(ss,t,e,n,i,r),!0;case"dragenter":return os=Ra(os,t,e,n,i,r),!0;case"mouseover":return as=Ra(as,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fl.set(s,Ra(fl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hl.set(s,Ra(hl.get(s)||null,t,e,n,i,r)),!0}return!1}function E_(t){var e=Vs(t.target);if(e!==null){var n=ro(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,w_(t.priority,function(){M_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yh=i,n.target.dispatchEvent(i),yh=null}else return e=Nl(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function bg(t,e,n){qc(t)&&n.delete(e)}function nM(){Th=!1,ss!==null&&qc(ss)&&(ss=null),os!==null&&qc(os)&&(os=null),as!==null&&qc(as)&&(as=null),fl.forEach(bg),hl.forEach(bg)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,nM)))}function pl(t){function e(r){return Pa(r,t)}if(0<sc.length){Pa(sc[0],t);for(var n=1;n<sc.length;n++){var i=sc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ss!==null&&Pa(ss,t),os!==null&&Pa(os,t),as!==null&&Pa(as,t),fl.forEach(e),hl.forEach(e),n=0;n<Qr.length;n++)i=Qr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)E_(n),n.blockedOn===null&&Qr.shift()}var jo=Dr.ReactCurrentBatchConfig,pu=!0;function iM(t,e,n,i){var r=Vt,s=jo.transition;jo.transition=null;try{Vt=1,lm(t,e,n,i)}finally{Vt=r,jo.transition=s}}function rM(t,e,n,i){var r=Vt,s=jo.transition;jo.transition=null;try{Vt=4,lm(t,e,n,i)}finally{Vt=r,jo.transition=s}}function lm(t,e,n,i){if(pu){var r=bh(t,e,n,i);if(r===null)lf(t,e,i,mu,n),Tg(t,i);else if(tM(r,t,e,n,i))i.stopPropagation();else if(Tg(t,i),e&4&&-1<eM.indexOf(t)){for(;r!==null;){var s=Nl(r);if(s!==null&&y_(s),s=bh(t,e,n,i),s===null&&lf(t,e,i,mu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lf(t,e,i,null,n)}}var mu=null;function bh(t,e,n,i){if(mu=null,t=rm(i),t=Vs(t),t!==null)if(e=ro(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mu=t,null}function T_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X2()){case sm:return 1;case g_:return 4;case fu:case j2:return 16;case v_:return 536870912;default:return 16}default:return 16}}var is=null,cm=null,$c=null;function b_(){if($c)return $c;var t,e=cm,n=e.length,i,r="value"in is?is.value:is.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $c=r.slice(t,1<i?1-i:void 0)}function Kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function Ag(){return!1}function Ii(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oc:Ag,this.isPropagationStopped=Ag,this}return hn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=Ii(ca),Dl=hn({},ca,{view:0,detail:0}),sM=Ii(Dl),Jd,Qd,Ia,Hu=hn({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(Jd=t.screenX-Ia.screenX,Qd=t.screenY-Ia.screenY):Qd=Jd=0,Ia=t),Jd)},movementY:function(t){return"movementY"in t?t.movementY:Qd}}),Cg=Ii(Hu),oM=hn({},Hu,{dataTransfer:0}),aM=Ii(oM),lM=hn({},Dl,{relatedTarget:0}),ef=Ii(lM),cM=hn({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),uM=Ii(cM),dM=hn({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fM=Ii(dM),hM=hn({},ca,{data:0}),Rg=Ii(hM),pM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gM[t])?!!e[t]:!1}function dm(){return vM}var _M=hn({},Dl,{key:function(t){if(t.key){var e=pM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(t){return t.type==="keypress"?Kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xM=Ii(_M),yM=hn({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=Ii(yM),MM=hn({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),SM=Ii(MM),wM=hn({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),EM=Ii(wM),TM=hn({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bM=Ii(TM),AM=[9,13,27,32],fm=Rr&&"CompositionEvent"in window,Qa=null;Rr&&"documentMode"in document&&(Qa=document.documentMode);var CM=Rr&&"TextEvent"in window&&!Qa,A_=Rr&&(!fm||Qa&&8<Qa&&11>=Qa),Ig=" ",Lg=!1;function C_(t,e){switch(t){case"keyup":return AM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lo=!1;function RM(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(Lg=!0,Ig);case"textInput":return t=e.data,t===Ig&&Lg?null:t;default:return null}}function PM(t,e){if(Lo)return t==="compositionend"||!fm&&C_(t,e)?(t=b_(),$c=cm=is=null,Lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A_&&e.locale!=="ko"?null:e.data;default:return null}}var IM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IM[t.type]:e==="textarea"}function P_(t,e,n,i){a_(i),e=gu(e,"onChange"),0<e.length&&(n=new um("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var el=null,ml=null;function LM(t){H_(t,0)}function Vu(t){var e=Uo(t);if(e_(e))return t}function DM(t,e){if(t==="change")return e}var I_=!1;if(Rr){var tf;if(Rr){var nf="oninput"in document;if(!nf){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),nf=typeof Ng.oninput=="function"}tf=nf}else tf=!1;I_=tf&&(!document.documentMode||9<document.documentMode)}function Ug(){el&&(el.detachEvent("onpropertychange",L_),ml=el=null)}function L_(t){if(t.propertyName==="value"&&Vu(ml)){var e=[];P_(e,ml,t,rm(t)),d_(LM,e)}}function NM(t,e,n){t==="focusin"?(Ug(),el=e,ml=n,el.attachEvent("onpropertychange",L_)):t==="focusout"&&Ug()}function UM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(ml)}function FM(t,e){if(t==="click")return Vu(e)}function kM(t,e){if(t==="input"||t==="change")return Vu(e)}function OM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:OM;function gl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lh.call(e,r)||!nr(t[r],e[r]))return!1}return!0}function Fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kg(t,e){var n=Fg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fg(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N_(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zM(t){var e=N_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(i!==null&&hm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kg(n,s);var o=kg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BM=Rr&&"documentMode"in document&&11>=document.documentMode,Do=null,Ah=null,tl=null,Ch=!1;function Og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Do==null||Do!==cu(i)||(i=Do,"selectionStart"in i&&hm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),tl&&gl(tl,i)||(tl=i,i=gu(Ah,"onSelect"),0<i.length&&(e=new um("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Do)))}function ac(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var No={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},rf={},U_={};Rr&&(U_=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Gu(t){if(rf[t])return rf[t];if(!No[t])return t;var e=No[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U_)return rf[t]=e[n];return t}var F_=Gu("animationend"),k_=Gu("animationiteration"),O_=Gu("animationstart"),z_=Gu("transitionend"),B_=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ys(t,e){B_.set(t,e),io(e,[t])}for(var sf=0;sf<zg.length;sf++){var of=zg[sf],HM=of.toLowerCase(),VM=of[0].toUpperCase()+of.slice(1);ys(HM,"on"+VM)}ys(F_,"onAnimationEnd");ys(k_,"onAnimationIteration");ys(O_,"onAnimationStart");ys("dblclick","onDoubleClick");ys("focusin","onFocus");ys("focusout","onBlur");ys(z_,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);io("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));io("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));io("onBeforeInput",["compositionend","keypress","textInput","paste"]);io("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));io("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));io("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GM=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function Bg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,H2(i,e,void 0,t),t.currentTarget=null}function H_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bg(r,a,u),s=l}}}if(du)throw t=wh,du=!1,wh=null,t}function rn(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var i=t+"__bubble";n.has(i)||(V_(e,t,2,!1),n.add(i))}function af(t,e,n){var i=0;e&&(i|=4),V_(n,t,i,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function vl(t){if(!t[lc]){t[lc]=!0,$v.forEach(function(n){n!=="selectionchange"&&(GM.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lc]||(e[lc]=!0,af("selectionchange",!1,e))}}function V_(t,e,n,i){switch(T_(e)){case 1:var r=iM;break;case 4:r=rM;break;default:r=lm}n=r.bind(null,e,n,t),r=void 0,!Sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}d_(function(){var u=s,p=rm(n),h=[];e:{var m=B_.get(t);if(m!==void 0){var g=um,w=t;switch(t){case"keypress":if(Kc(n)===0)break e;case"keydown":case"keyup":g=xM;break;case"focusin":w="focus",g=ef;break;case"focusout":w="blur",g=ef;break;case"beforeblur":case"afterblur":g=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=aM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=SM;break;case F_:case k_:case O_:g=uM;break;case z_:g=EM;break;case"scroll":g=sM;break;case"wheel":g=bM;break;case"copy":case"cut":case"paste":g=fM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pg}var A=(e&4)!==0,x=!A&&t==="scroll",f=A?m!==null?m+"Capture":null:m;A=[];for(var _=u,y;_!==null;){y=_;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,f!==null&&(T=dl(_,f),T!=null&&A.push(_l(_,T,y)))),x)break;_=_.return}0<A.length&&(m=new g(m,w,null,n,p),h.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==yh&&(w=n.relatedTarget||n.fromElement)&&(Vs(w)||w[Pr]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Vs(w):null,w!==null&&(x=ro(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(A=Cg,T="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=Pg,T="onPointerLeave",f="onPointerEnter",_="pointer"),x=g==null?m:Uo(g),y=w==null?m:Uo(w),m=new A(T,_+"leave",g,n,p),m.target=x,m.relatedTarget=y,T=null,Vs(p)===u&&(A=new A(f,_+"enter",w,n,p),A.target=y,A.relatedTarget=x,T=A),x=T,g&&w)t:{for(A=g,f=w,_=0,y=A;y;y=uo(y))_++;for(y=0,T=f;T;T=uo(T))y++;for(;0<_-y;)A=uo(A),_--;for(;0<y-_;)f=uo(f),y--;for(;_--;){if(A===f||f!==null&&A===f.alternate)break t;A=uo(A),f=uo(f)}A=null}else A=null;g!==null&&Hg(h,m,g,A,!1),w!==null&&x!==null&&Hg(h,x,w,A,!0)}}e:{if(m=u?Uo(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var D=DM;else if(Dg(m))if(I_)D=kM;else{D=UM;var N=NM}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=FM);if(D&&(D=D(t,u))){P_(h,D,n,p);break e}N&&N(t,m,u),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&mh(m,"number",m.value)}switch(N=u?Uo(u):window,t){case"focusin":(Dg(N)||N.contentEditable==="true")&&(Do=N,Ah=u,tl=null);break;case"focusout":tl=Ah=Do=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,Og(h,n,p);break;case"selectionchange":if(BM)break;case"keydown":case"keyup":Og(h,n,p)}var U;if(fm)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Lo?C_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(A_&&n.locale!=="ko"&&(Lo||k!=="onCompositionStart"?k==="onCompositionEnd"&&Lo&&(U=b_()):(is=p,cm="value"in is?is.value:is.textContent,Lo=!0)),N=gu(u,k),0<N.length&&(k=new Rg(k,t,null,n,p),h.push({event:k,listeners:N}),U?k.data=U:(U=R_(n),U!==null&&(k.data=U)))),(U=CM?RM(t,n):PM(t,n))&&(u=gu(u,"onBeforeInput"),0<u.length&&(p=new Rg("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=U))}H_(h,e)})}function _l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=dl(t,n),s!=null&&i.unshift(_l(t,s,r)),s=dl(t,e),s!=null&&i.push(_l(t,s,r))),t=t.return}return i}function uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=dl(n,s),l!=null&&o.unshift(_l(n,l,a))):r||(l=dl(n,s),l!=null&&o.push(_l(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(WM,`
`).replace(XM,"")}function cc(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(Ee(425))}function vu(){}var Rh=null,Ph=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lh=typeof setTimeout=="function"?setTimeout:void 0,jM=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,YM=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(qM)}:Lh;function qM(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pl(e)}function ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ua=Math.random().toString(36).slice(2),ar="__reactFiber$"+ua,xl="__reactProps$"+ua,Pr="__reactContainer$"+ua,Dh="__reactEvents$"+ua,$M="__reactListeners$"+ua,KM="__reactHandles$"+ua;function Vs(t){var e=t[ar];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[ar]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wg(t);t!==null;){if(n=t[ar])return n;t=Wg(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[ar]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ee(33))}function Wu(t){return t[xl]||null}var Nh=[],Fo=-1;function Ms(t){return{current:t}}function sn(t){0>Fo||(t.current=Nh[Fo],Nh[Fo]=null,Fo--)}function tn(t,e){Fo++,Nh[Fo]=t.current,t.current=e}var vs={},ei=Ms(vs),pi=Ms(!1),Ks=vs;function Zo(t,e){var n=t.type.contextTypes;if(!n)return vs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mi(t){return t=t.childContextTypes,t!=null}function _u(){sn(pi),sn(ei)}function Xg(t,e,n){if(ei.current!==vs)throw Error(Ee(168));tn(ei,e),tn(pi,n)}function G_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,N2(t)||"Unknown",r));return hn({},n,i)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vs,Ks=ei.current,tn(ei,t),tn(pi,pi.current),!0}function jg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ee(169));n?(t=G_(t,e,Ks),i.__reactInternalMemoizedMergedChildContext=t,sn(pi),sn(ei),tn(ei,t)):sn(pi),tn(pi,n)}var wr=null,Xu=!1,uf=!1;function W_(t){wr===null?wr=[t]:wr.push(t)}function ZM(t){Xu=!0,W_(t)}function Ss(){if(!uf&&wr!==null){uf=!0;var t=0,e=Vt;try{var n=wr;for(Vt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wr=null,Xu=!1}catch(r){throw wr!==null&&(wr=wr.slice(t+1)),m_(sm,Ss),r}finally{Vt=e,uf=!1}}return null}var ko=[],Oo=0,yu=null,Mu=0,Fi=[],ki=0,Zs=null,Er=1,Tr="";function Fs(t,e){ko[Oo++]=Mu,ko[Oo++]=yu,yu=t,Mu=e}function X_(t,e,n){Fi[ki++]=Er,Fi[ki++]=Tr,Fi[ki++]=Zs,Zs=t;var i=Er;t=Tr;var r=32-Ji(i)-1;i&=~(1<<r),n+=1;var s=32-Ji(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Er=1<<32-Ji(e)+r|n<<r|i,Tr=s+t}else Er=1<<s|n<<r|i,Tr=t}function pm(t){t.return!==null&&(Fs(t,1),X_(t,1,0))}function mm(t){for(;t===yu;)yu=ko[--Oo],ko[Oo]=null,Mu=ko[--Oo],ko[Oo]=null;for(;t===Zs;)Zs=Fi[--ki],Fi[ki]=null,Tr=Fi[--ki],Fi[ki]=null,Er=Fi[--ki],Fi[ki]=null}var Ci=null,Ai=null,cn=!1,Ki=null;function j_(t,e){var n=zi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ci=t,Ai=ls(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ci=t,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zs!==null?{id:Er,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ci=t,Ai=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fh(t){if(cn){var e=Ai;if(e){var n=e;if(!Yg(t,e)){if(Uh(t))throw Error(Ee(418));e=ls(n.nextSibling);var i=Ci;e&&Yg(t,e)?j_(i,n):(t.flags=t.flags&-4097|2,cn=!1,Ci=t)}}else{if(Uh(t))throw Error(Ee(418));t.flags=t.flags&-4097|2,cn=!1,Ci=t}}}function qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ci=t}function uc(t){if(t!==Ci)return!1;if(!cn)return qg(t),cn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Ai)){if(Uh(t))throw Y_(),Error(Ee(418));for(;e;)j_(t,e),e=ls(e.nextSibling)}if(qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ai=ls(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ai=null}}else Ai=Ci?ls(t.stateNode.nextSibling):null;return!0}function Y_(){for(var t=Ai;t;)t=ls(t.nextSibling)}function Jo(){Ai=Ci=null,cn=!1}function gm(t){Ki===null?Ki=[t]:Ki.push(t)}var JM=Dr.ReactCurrentBatchConfig;function La(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ee(309));var i=n.stateNode}if(!i)throw Error(Ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ee(284));if(!n._owner)throw Error(Ee(290,t))}return t}function dc(t,e){throw t=Object.prototype.toString.call(e),Error(Ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function q_(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=fs(f,_),f.index=0,f.sibling=null,f}function s(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,y,T){return _===null||_.tag!==6?(_=vf(y,f.mode,T),_.return=f,_):(_=r(_,y),_.return=f,_)}function l(f,_,y,T){var D=y.type;return D===Io?p(f,_,y.props.children,T,y.key):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Zr&&$g(D)===_.type)?(T=r(_,y.props),T.ref=La(f,_,y),T.return=f,T):(T=iu(y.type,y.key,y.props,null,f.mode,T),T.ref=La(f,_,y),T.return=f,T)}function u(f,_,y,T){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=_f(y,f.mode,T),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function p(f,_,y,T,D){return _===null||_.tag!==7?(_=qs(y,f.mode,T,D),_.return=f,_):(_=r(_,y),_.return=f,_)}function h(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vf(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ec:return y=iu(_.type,_.key,_.props,null,f.mode,y),y.ref=La(f,null,_),y.return=f,y;case Po:return _=_f(_,f.mode,y),_.return=f,_;case Zr:var T=_._init;return h(f,T(_._payload),y)}if(Ya(_)||Aa(_))return _=qs(_,f.mode,y,null),_.return=f,_;dc(f,_)}return null}function m(f,_,y,T){var D=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return D!==null?null:a(f,_,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:return y.key===D?l(f,_,y,T):null;case Po:return y.key===D?u(f,_,y,T):null;case Zr:return D=y._init,m(f,_,D(y._payload),T)}if(Ya(y)||Aa(y))return D!==null?null:p(f,_,y,T,null);dc(f,y)}return null}function g(f,_,y,T,D){if(typeof T=="string"&&T!==""||typeof T=="number")return f=f.get(y)||null,a(_,f,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ec:return f=f.get(T.key===null?y:T.key)||null,l(_,f,T,D);case Po:return f=f.get(T.key===null?y:T.key)||null,u(_,f,T,D);case Zr:var N=T._init;return g(f,_,y,N(T._payload),D)}if(Ya(T)||Aa(T))return f=f.get(y)||null,p(_,f,T,D,null);dc(_,T)}return null}function w(f,_,y,T){for(var D=null,N=null,U=_,k=_=0,b=null;U!==null&&k<y.length;k++){U.index>k?(b=U,U=null):b=U.sibling;var S=m(f,U,y[k],T);if(S===null){U===null&&(U=b);break}t&&U&&S.alternate===null&&e(f,U),_=s(S,_,k),N===null?D=S:N.sibling=S,N=S,U=b}if(k===y.length)return n(f,U),cn&&Fs(f,k),D;if(U===null){for(;k<y.length;k++)U=h(f,y[k],T),U!==null&&(_=s(U,_,k),N===null?D=U:N.sibling=U,N=U);return cn&&Fs(f,k),D}for(U=i(f,U);k<y.length;k++)b=g(U,f,k,y[k],T),b!==null&&(t&&b.alternate!==null&&U.delete(b.key===null?k:b.key),_=s(b,_,k),N===null?D=b:N.sibling=b,N=b);return t&&U.forEach(function(z){return e(f,z)}),cn&&Fs(f,k),D}function A(f,_,y,T){var D=Aa(y);if(typeof D!="function")throw Error(Ee(150));if(y=D.call(y),y==null)throw Error(Ee(151));for(var N=D=null,U=_,k=_=0,b=null,S=y.next();U!==null&&!S.done;k++,S=y.next()){U.index>k?(b=U,U=null):b=U.sibling;var z=m(f,U,S.value,T);if(z===null){U===null&&(U=b);break}t&&U&&z.alternate===null&&e(f,U),_=s(z,_,k),N===null?D=z:N.sibling=z,N=z,U=b}if(S.done)return n(f,U),cn&&Fs(f,k),D;if(U===null){for(;!S.done;k++,S=y.next())S=h(f,S.value,T),S!==null&&(_=s(S,_,k),N===null?D=S:N.sibling=S,N=S);return cn&&Fs(f,k),D}for(U=i(f,U);!S.done;k++,S=y.next())S=g(U,f,k,S.value,T),S!==null&&(t&&S.alternate!==null&&U.delete(S.key===null?k:S.key),_=s(S,_,k),N===null?D=S:N.sibling=S,N=S);return t&&U.forEach(function(Y){return e(f,Y)}),cn&&Fs(f,k),D}function x(f,_,y,T){if(typeof y=="object"&&y!==null&&y.type===Io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:e:{for(var D=y.key,N=_;N!==null;){if(N.key===D){if(D=y.type,D===Io){if(N.tag===7){n(f,N.sibling),_=r(N,y.props.children),_.return=f,f=_;break e}}else if(N.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Zr&&$g(D)===N.type){n(f,N.sibling),_=r(N,y.props),_.ref=La(f,N,y),_.return=f,f=_;break e}n(f,N);break}else e(f,N);N=N.sibling}y.type===Io?(_=qs(y.props.children,f.mode,T,y.key),_.return=f,f=_):(T=iu(y.type,y.key,y.props,null,f.mode,T),T.ref=La(f,_,y),T.return=f,f=T)}return o(f);case Po:e:{for(N=y.key;_!==null;){if(_.key===N)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=_f(y,f.mode,T),_.return=f,f=_}return o(f);case Zr:return N=y._init,x(f,_,N(y._payload),T)}if(Ya(y))return w(f,_,y,T);if(Aa(y))return A(f,_,y,T);dc(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=vf(y,f.mode,T),_.return=f,f=_),o(f)):n(f,_)}return x}var Qo=q_(!0),$_=q_(!1),Su=Ms(null),wu=null,zo=null,vm=null;function _m(){vm=zo=wu=null}function xm(t){var e=Su.current;sn(Su),t._currentValue=e}function kh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Yo(t,e){wu=t,vm=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hi=!0),t.firstContext=null)}function Hi(t){var e=t._currentValue;if(vm!==t)if(t={context:t,memoizedValue:e,next:null},zo===null){if(wu===null)throw Error(Ee(308));zo=t,wu.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return e}var Gs=null;function ym(t){Gs===null?Gs=[t]:Gs.push(t)}function K_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ym(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ir(t,i)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jr=!1;function Mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ir(t,n)}return r=i.interleaved,r===null?(e.next=e,ym(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ir(t,n)}function Zc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,om(t,n)}}function Kg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,i){var r=t.updateQueue;Jr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,p=u=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,A=a;switch(m=e,g=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=hn({},h,m);break e;case 2:Jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,l=h):p=p.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(p===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qs|=o,t.lanes=o,t.memoizedState=h}}function Zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var Ul={},fr=Ms(Ul),yl=Ms(Ul),Ml=Ms(Ul);function Ws(t){if(t===Ul)throw Error(Ee(174));return t}function Sm(t,e){switch(tn(Ml,e),tn(yl,t),tn(fr,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}sn(fr),tn(fr,e)}function ea(){sn(fr),sn(yl),sn(Ml)}function J_(t){Ws(Ml.current);var e=Ws(fr.current),n=vh(e,t.type);e!==n&&(tn(yl,t),tn(fr,n))}function wm(t){yl.current===t&&(sn(fr),sn(yl))}var dn=Ms(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function Em(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var Jc=Dr.ReactCurrentDispatcher,ff=Dr.ReactCurrentBatchConfig,Js=0,fn=null,Pn=null,Bn=null,bu=!1,nl=!1,Sl=0,QM=0;function $n(){throw Error(Ee(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function bm(t,e,n,i,r,s){if(Js=s,fn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=t===null||t.memoizedState===null?iS:rS,t=n(i,r),nl){s=0;do{if(nl=!1,Sl=0,25<=s)throw Error(Ee(301));s+=1,Bn=Pn=null,e.updateQueue=null,Jc.current=sS,t=n(i,r)}while(nl)}if(Jc.current=Au,e=Pn!==null&&Pn.next!==null,Js=0,Bn=Pn=fn=null,bu=!1,e)throw Error(Ee(300));return t}function Am(){var t=Sl!==0;return Sl=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?fn.memoizedState=Bn=t:Bn=Bn.next=t,Bn}function Vi(){if(Pn===null){var t=fn.alternate;t=t!==null?t.memoizedState:null}else t=Pn.next;var e=Bn===null?fn.memoizedState:Bn.next;if(e!==null)Bn=e,Pn=t;else{if(t===null)throw Error(Ee(310));Pn=t,t={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Bn===null?fn.memoizedState=Bn=t:Bn=Bn.next=t}return Bn}function wl(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=Vi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=Pn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((Js&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,fn.lanes|=p,Qs|=p}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,nr(i,e.memoizedState)||(hi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,fn.lanes|=s,Qs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=Vi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);nr(s,e.memoizedState)||(hi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Q_(){}function ex(t,e){var n=fn,i=Vi(),r=e(),s=!nr(i.memoizedState,r);if(s&&(i.memoizedState=r,hi=!0),i=i.queue,Cm(ix.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bn!==null&&Bn.memoizedState.tag&1){if(n.flags|=2048,El(9,nx.bind(null,n,i,r,e),void 0,null),Hn===null)throw Error(Ee(349));Js&30||tx(n,e,r)}return r}function tx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nx(t,e,n,i){e.value=n,e.getSnapshot=i,rx(e)&&sx(t)}function ix(t,e,n){return n(function(){rx(e)&&sx(t)})}function rx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function sx(t){var e=Ir(t,1);e!==null&&Qi(e,t,1,-1)}function Jg(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,fn,t),[e.memoizedState,t]}function El(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ox(){return Vi().memoizedState}function Qc(t,e,n,i){var r=sr();fn.flags|=t,r.memoizedState=El(1|e,n,void 0,i===void 0?null:i)}function ju(t,e,n,i){var r=Vi();i=i===void 0?null:i;var s=void 0;if(Pn!==null){var o=Pn.memoizedState;if(s=o.destroy,i!==null&&Tm(i,o.deps)){r.memoizedState=El(e,n,s,i);return}}fn.flags|=t,r.memoizedState=El(1|e,n,s,i)}function Qg(t,e){return Qc(8390656,8,t,e)}function Cm(t,e){return ju(2048,8,t,e)}function ax(t,e){return ju(4,2,t,e)}function lx(t,e){return ju(4,4,t,e)}function cx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ux(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,cx.bind(null,e,t),n)}function Rm(){}function dx(t,e){var n=Vi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fx(t,e){var n=Vi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hx(t,e,n){return Js&21?(nr(n,e)||(n=__(),fn.lanes|=n,Qs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hi=!0),t.memoizedState=n)}function eS(t,e){var n=Vt;Vt=n!==0&&4>n?n:4,t(!0);var i=ff.transition;ff.transition={};try{t(!1),e()}finally{Vt=n,ff.transition=i}}function px(){return Vi().memoizedState}function tS(t,e,n){var i=ds(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mx(t))gx(e,n);else if(n=K_(t,e,n,i),n!==null){var r=ri();Qi(n,t,i,r),vx(n,e,i)}}function nS(t,e,n){var i=ds(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(t))gx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(r.next=r,ym(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=K_(t,e,r,i),n!==null&&(r=ri(),Qi(n,t,i,r),vx(n,e,i))}}function mx(t){var e=t.alternate;return t===fn||e!==null&&e===fn}function gx(t,e){nl=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,om(t,n)}}var Au={readContext:Hi,useCallback:$n,useContext:$n,useEffect:$n,useImperativeHandle:$n,useInsertionEffect:$n,useLayoutEffect:$n,useMemo:$n,useReducer:$n,useRef:$n,useState:$n,useDebugValue:$n,useDeferredValue:$n,useTransition:$n,useMutableSource:$n,useSyncExternalStore:$n,useId:$n,unstable_isNewReconciler:!1},iS={readContext:Hi,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Hi,useEffect:Qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4194308,4,cx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qc(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=sr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tS.bind(null,fn,t),[i.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:Rm,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=eS.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=fn,r=sr();if(cn){if(n===void 0)throw Error(Ee(407));n=n()}else{if(n=e(),Hn===null)throw Error(Ee(349));Js&30||tx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qg(ix.bind(null,i,s,t),[t]),i.flags|=2048,El(9,nx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=Hn.identifierPrefix;if(cn){var n=Tr,i=Er;n=(i&~(1<<32-Ji(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rS={readContext:Hi,useCallback:dx,useContext:Hi,useEffect:Cm,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:hf,useRef:ox,useState:function(){return hf(wl)},useDebugValue:Rm,useDeferredValue:function(t){var e=Vi();return hx(e,Pn.memoizedState,t)},useTransition:function(){var t=hf(wl)[0],e=Vi().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1},sS={readContext:Hi,useCallback:dx,useContext:Hi,useEffect:Cm,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:pf,useRef:ox,useState:function(){return pf(wl)},useDebugValue:Rm,useDeferredValue:function(t){var e=Vi();return Pn===null?e.memoizedState=t:hx(e,Pn.memoizedState,t)},useTransition:function(){var t=pf(wl)[0],e=Vi().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1};function qi(t,e){if(t&&t.defaultProps){e=hn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:hn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?ro(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ri(),r=ds(t),s=Ar(i,r);s.payload=e,n!=null&&(s.callback=n),e=cs(t,s,r),e!==null&&(Qi(e,t,r,i),Zc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ri(),r=ds(t),s=Ar(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cs(t,s,r),e!==null&&(Qi(e,t,r,i),Zc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ri(),i=ds(t),r=Ar(n,i);r.tag=2,e!=null&&(r.callback=e),e=cs(t,r,i),e!==null&&(Qi(e,t,i,n),Zc(e,t,i))}};function e1(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gl(n,i)||!gl(r,s):!0}function _x(t,e,n){var i=!1,r=vs,s=e.contextType;return typeof s=="object"&&s!==null?s=Hi(s):(r=mi(e)?Ks:ei.current,i=e.contextTypes,s=(i=i!=null)?Zo(t,r):vs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function t1(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hi(s):(s=mi(e)?Ks:ei.current,r.context=Zo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yu.enqueueReplaceState(r,r.state,null),Eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",i=e;do n+=D2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function xx(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ru||(Ru=!0,Kh=i),Bh(t,e)},n}function yx(t,e,n){n=Ar(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof i!="function"&&(us===null?us=new Set([this]):us.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function n1(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new oS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yS.bind(null,t,e,n),e.then(t,t))}function i1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function r1(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,cs(n,e,1))),n.lanes|=1),t)}var aS=Dr.ReactCurrentOwner,hi=!1;function ii(t,e,n,i){e.child=t===null?$_(e,null,n,i):Qo(e,t.child,n,i)}function s1(t,e,n,i,r){n=n.render;var s=e.ref;return Yo(e,r),i=bm(t,e,n,i,s,r),n=Am(),t!==null&&!hi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Lr(t,e,r)):(cn&&n&&pm(e),e.flags|=1,ii(t,e,i,r),e.child)}function o1(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mx(t,e,s,i,r)):(t=iu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gl,n(o,i)&&t.ref===e.ref)return Lr(t,e,r)}return e.flags|=1,t=fs(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(gl(s,i)&&t.ref===e.ref)if(hi=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hi=!0);else return e.lanes=t.lanes,Lr(t,e,r)}return Hh(t,e,n,i,r)}function Sx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Ho,Ti),Ti|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tn(Ho,Ti),Ti|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tn(Ho,Ti),Ti|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tn(Ho,Ti),Ti|=i;return ii(t,e,r,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,i,r){var s=mi(n)?Ks:ei.current;return s=Zo(e,s),Yo(e,r),n=bm(t,e,n,i,s,r),i=Am(),t!==null&&!hi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Lr(t,e,r)):(cn&&i&&pm(e),e.flags|=1,ii(t,e,n,r),e.child)}function a1(t,e,n,i,r){if(mi(n)){var s=!0;xu(e)}else s=!1;if(Yo(e,r),e.stateNode===null)eu(t,e),_x(e,n,i),zh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hi(u):(u=mi(n)?Ks:ei.current,u=Zo(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&t1(e,o,i,u),Jr=!1;var m=e.memoizedState;o.state=m,Eu(e,i,o,r),l=e.memoizedState,a!==i||m!==l||pi.current||Jr?(typeof p=="function"&&(Oh(e,n,p,i),l=e.memoizedState),(a=Jr||e1(e,n,a,i,m,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Z_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qi(e.type,a),o.props=u,h=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hi(l):(l=mi(n)?Ks:ei.current,l=Zo(e,l));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==l)&&t1(e,o,i,l),Jr=!1,m=e.memoizedState,o.state=m,Eu(e,i,o,r);var w=e.memoizedState;a!==h||m!==w||pi.current||Jr?(typeof g=="function"&&(Oh(e,n,g,i),w=e.memoizedState),(u=Jr||e1(e,n,u,i,m,w,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),o.props=i,o.state=w,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return Vh(t,e,n,i,s,r)}function Vh(t,e,n,i,r,s){wx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jg(e,n,!1),Lr(t,e,s);i=e.stateNode,aS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qo(e,t.child,null,s),e.child=Qo(e,null,a,s)):ii(t,e,a,s),e.memoizedState=i.state,r&&jg(e,n,!0),e.child}function Ex(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),Sm(t,e.containerInfo)}function l1(t,e,n,i,r){return Jo(),gm(r),e.flags|=256,ii(t,e,n,i),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tx(t,e,n){var i=e.pendingProps,r=dn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tn(dn,r&1),t===null)return Fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,i,0,null),t=qs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wh(n),e.memoizedState=Gh,t):Pm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fs(a,s):(s=qs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gh,i}return s=t.child,t=s.sibling,i=fs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pm(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,i){return i!==null&&gm(i),Qo(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=mf(Error(Ee(422))),fc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ku({mode:"visible",children:i.children},r,0,null),s=qs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qo(e,t.child,null,o),e.child.memoizedState=Wh(o),e.memoizedState=Gh,s);if(!(e.mode&1))return fc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ee(419)),i=mf(s,i,void 0),fc(t,e,o,i)}if(a=(o&t.childLanes)!==0,hi||a){if(i=Hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ir(t,r),Qi(i,t,r,-1))}return Fm(),i=mf(Error(Ee(421))),fc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=MS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ai=ls(r.nextSibling),Ci=e,cn=!0,Ki=null,t!==null&&(Fi[ki++]=Er,Fi[ki++]=Tr,Fi[ki++]=Zs,Er=t.id,Tr=t.overflow,Zs=e),e=Pm(e,i.children),e.flags|=4096,e)}function c1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kh(t.return,e,n)}function gf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ii(t,e,i.children,n),i=dn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c1(t,n,e);else if(t.tag===19)c1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tn(dn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ee(153));if(e.child!==null){for(t=e.child,n=fs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cS(t,e,n){switch(e.tag){case 3:Ex(e),Jo();break;case 5:J_(e);break;case 1:mi(e.type)&&xu(e);break;case 4:Sm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tn(Su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tn(dn,dn.current&1),e.flags|=128,null):n&e.child.childLanes?Tx(t,e,n):(tn(dn,dn.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);tn(dn,dn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tn(dn,dn.current),i)break;return null;case 22:case 23:return e.lanes=0,Sx(t,e,n)}return Lr(t,e,n)}var Ax,Xh,Cx,Rx;Ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};Cx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ws(fr.current);var s=null;switch(n){case"input":r=hh(t,r),i=hh(t,i),s=[];break;case"select":r=hn({},r,{value:void 0}),i=hn({},i,{value:void 0}),s=[];break;case"textarea":r=gh(t,r),i=gh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vu)}_h(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rn("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Da(t,e){if(!cn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uS(t,e,n){var i=e.pendingProps;switch(mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(e),null;case 1:return mi(e.type)&&_u(),Kn(e),null;case 3:return i=e.stateNode,ea(),sn(pi),sn(ei),Em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(Qh(Ki),Ki=null))),Xh(t,e),Kn(e),null;case 5:wm(e);var r=Ws(Ml.current);if(n=e.type,t!==null&&e.stateNode!=null)Cx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return Kn(e),null}if(t=Ws(fr.current),uc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ar]=e,i[xl]=s,t=(e.mode&1)!==0,n){case"dialog":rn("cancel",i),rn("close",i);break;case"iframe":case"object":case"embed":rn("load",i);break;case"video":case"audio":for(r=0;r<$a.length;r++)rn($a[r],i);break;case"source":rn("error",i);break;case"img":case"image":case"link":rn("error",i),rn("load",i);break;case"details":rn("toggle",i);break;case"input":_g(i,s),rn("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rn("invalid",i);break;case"textarea":yg(i,s),rn("invalid",i)}_h(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,t),r=["children",""+a]):cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rn("scroll",i)}switch(n){case"input":tc(i),xg(i,s,!0);break;case"textarea":tc(i),Mg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ar]=e,t[xl]=i,Ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,i),n){case"dialog":rn("cancel",t),rn("close",t),r=i;break;case"iframe":case"object":case"embed":rn("load",t),r=i;break;case"video":case"audio":for(r=0;r<$a.length;r++)rn($a[r],t);r=i;break;case"source":rn("error",t),r=i;break;case"img":case"image":case"link":rn("error",t),rn("load",t),r=i;break;case"details":rn("toggle",t),r=i;break;case"input":_g(t,i),r=hh(t,i),rn("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=hn({},i,{value:void 0}),rn("invalid",t);break;case"textarea":yg(t,i),r=gh(t,i),rn("invalid",t);break;default:r=i}_h(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ul(t,l):typeof l=="number"&&ul(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rn("scroll",t):l!=null&&em(t,s,l,o))}switch(n){case"input":tc(t),xg(t,i,!1);break;case"textarea":tc(t),Mg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Go(t,!!i.multiple,s,!1):i.defaultValue!=null&&Go(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kn(e),null;case 6:if(t&&e.stateNode!=null)Rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(n=Ws(Ml.current),Ws(fr.current),uc(e)){if(i=e.stateNode,n=e.memoizedProps,i[ar]=e,(s=i.nodeValue!==n)&&(t=Ci,t!==null))switch(t.tag){case 3:cc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ar]=e,e.stateNode=i}return Kn(e),null;case 13:if(sn(dn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(cn&&Ai!==null&&e.mode&1&&!(e.flags&128))Y_(),Jo(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ee(317));s[ar]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kn(e),s=!1}else Ki!==null&&(Qh(Ki),Ki=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dn.current&1?Ln===0&&(Ln=3):Fm())),e.updateQueue!==null&&(e.flags|=4),Kn(e),null);case 4:return ea(),Xh(t,e),t===null&&vl(e.stateNode.containerInfo),Kn(e),null;case 10:return xm(e.type._context),Kn(e),null;case 17:return mi(e.type)&&_u(),Kn(e),null;case 19:if(sn(dn),s=e.memoizedState,s===null)return Kn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Da(s,!1);else{if(Ln!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tu(t),o!==null){for(e.flags|=128,Da(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tn(dn,dn.current&1|2),e.child}t=t.sibling}s.tail!==null&&_n()>na&&(e.flags|=128,i=!0,Da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!cn)return Kn(e),null}else 2*_n()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,i=!0,Da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_n(),e.sibling=null,n=dn.current,tn(dn,i?n&1|2:n&1),e):(Kn(e),null);case 22:case 23:return Um(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ti&1073741824&&(Kn(e),e.subtreeFlags&6&&(e.flags|=8192)):Kn(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function dS(t,e){switch(mm(e),e.tag){case 1:return mi(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),sn(pi),sn(ei),Em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(sn(dn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return sn(dn),null;case 4:return ea(),null;case 10:return xm(e.type._context),null;case 22:case 23:return Um(),null;case 24:return null;default:return null}}var hc=!1,Qn=!1,fS=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gn(t,e,i)}else n.current=null}function jh(t,e,n){try{n()}catch(i){gn(t,e,i)}}var u1=!1;function hS(t,e){if(Rh=pu,t=N_(),hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,h=t,m=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===t)break t;if(m===n&&++u===r&&(a=o),m===s&&++p===i&&(l=o),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},pu=!1,Xe=e;Xe!==null;)if(e=Xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Xe=t;else for(;Xe!==null;){e=Xe;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,x=w.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?A:qi(e.type,A),x);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(T){gn(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,Xe=t;break}Xe=e.return}return w=u1,u1=!1,w}function il(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jh(e,n,s)}r=r.next}while(r!==i)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Px(t){var e=t.alternate;e!==null&&(t.alternate=null,Px(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ar],delete e[xl],delete e[Dh],delete e[$M],delete e[KM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function d1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(i!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}function $h(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}var Wn=null,$i=!1;function Vr(t,e,n){for(n=n.child;n!==null;)Lx(t,e,n),n=n.sibling}function Lx(t,e,n){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:Qn||Bo(n,e);case 6:var i=Wn,r=$i;Wn=null,Vr(t,e,n),Wn=i,$i=r,Wn!==null&&($i?(t=Wn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wn.removeChild(n.stateNode));break;case 18:Wn!==null&&($i?(t=Wn,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),pl(t)):cf(Wn,n.stateNode));break;case 4:i=Wn,r=$i,Wn=n.stateNode.containerInfo,$i=!0,Vr(t,e,n),Wn=i,$i=r;break;case 0:case 11:case 14:case 15:if(!Qn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jh(n,e,o),r=r.next}while(r!==i)}Vr(t,e,n);break;case 1:if(!Qn&&(Bo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gn(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(Qn=(i=Qn)||n.memoizedState!==null,Vr(t,e,n),Qn=i):Vr(t,e,n);break;default:Vr(t,e,n)}}function f1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fS),e.forEach(function(i){var r=SS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wn=a.stateNode,$i=!1;break e;case 3:Wn=a.stateNode.containerInfo,$i=!0;break e;case 4:Wn=a.stateNode.containerInfo,$i=!0;break e}a=a.return}if(Wn===null)throw Error(Ee(160));Lx(s,o,r),Wn=null,$i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gn(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dx(e,t),e=e.sibling}function Dx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gi(e,t),rr(t),i&4){try{il(3,t,t.return),qu(3,t)}catch(A){gn(t,t.return,A)}try{il(5,t,t.return)}catch(A){gn(t,t.return,A)}}break;case 1:Gi(e,t),rr(t),i&512&&n!==null&&Bo(n,n.return);break;case 5:if(Gi(e,t),rr(t),i&512&&n!==null&&Bo(n,n.return),t.flags&32){var r=t.stateNode;try{ul(r,"")}catch(A){gn(t,t.return,A)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t_(r,s),xh(a,o);var u=xh(a,s);for(o=0;o<l.length;o+=2){var p=l[o],h=l[o+1];p==="style"?o_(r,h):p==="dangerouslySetInnerHTML"?r_(r,h):p==="children"?ul(r,h):em(r,p,h,u)}switch(a){case"input":ph(r,s);break;case"textarea":n_(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Go(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Go(r,!!s.multiple,s.defaultValue,!0):Go(r,!!s.multiple,s.multiple?[]:"",!1))}r[xl]=s}catch(A){gn(t,t.return,A)}}break;case 6:if(Gi(e,t),rr(t),i&4){if(t.stateNode===null)throw Error(Ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(A){gn(t,t.return,A)}}break;case 3:if(Gi(e,t),rr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pl(e.containerInfo)}catch(A){gn(t,t.return,A)}break;case 4:Gi(e,t),rr(t);break;case 13:Gi(e,t),rr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dm=_n())),i&4&&f1(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Qn=(u=Qn)||p,Gi(e,t),Qn=u):Gi(e,t),rr(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(Xe=t,p=t.child;p!==null;){for(h=Xe=p;Xe!==null;){switch(m=Xe,g=m.child,m.tag){case 0:case 11:case 14:case 15:il(4,m,m.return);break;case 1:Bo(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(A){gn(i,n,A)}}break;case 5:Bo(m,m.return);break;case 22:if(m.memoizedState!==null){p1(h);continue}}g!==null?(g.return=m,Xe=g):p1(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s_("display",o))}catch(A){gn(t,t.return,A)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(A){gn(t,t.return,A)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gi(e,t),rr(t),i&4&&f1(t);break;case 21:break;default:Gi(e,t),rr(t)}}function rr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ul(r,""),i.flags&=-33);var s=d1(t);$h(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=d1(t);qh(t,a,o);break;default:throw Error(Ee(161))}}catch(l){gn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){Xe=t,Nx(t)}function Nx(t,e,n){for(var i=(t.mode&1)!==0;Xe!==null;){var r=Xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qn;a=hc;var u=Qn;if(hc=o,(Qn=l)&&!u)for(Xe=r;Xe!==null;)o=Xe,l=o.child,o.tag===22&&o.memoizedState!==null?m1(r):l!==null?(l.return=o,Xe=l):m1(r);for(;s!==null;)Xe=s,Nx(s),s=s.sibling;Xe=r,hc=a,Qn=u}h1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Xe=s):h1(t)}}function h1(t){for(;Xe!==null;){var e=Xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qn||qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&pl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}Qn||e.flags&512&&Yh(e)}catch(m){gn(e,e.return,m)}}if(e===t){Xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Xe=n;break}Xe=e.return}}function p1(t){for(;Xe!==null;){var e=Xe;if(e===t){Xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Xe=n;break}Xe=e.return}}function m1(t){for(;Xe!==null;){var e=Xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(l){gn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gn(e,r,l)}}var s=e.return;try{Yh(e)}catch(l){gn(e,s,l)}break;case 5:var o=e.return;try{Yh(e)}catch(l){gn(e,o,l)}}}catch(l){gn(e,e.return,l)}if(e===t){Xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Xe=a;break}Xe=e.return}}var mS=Math.ceil,Cu=Dr.ReactCurrentDispatcher,Im=Dr.ReactCurrentOwner,Bi=Dr.ReactCurrentBatchConfig,Pt=0,Hn=null,Sn=null,jn=0,Ti=0,Ho=Ms(0),Ln=0,Tl=null,Qs=0,$u=0,Lm=0,rl=null,fi=null,Dm=0,na=1/0,Sr=null,Ru=!1,Kh=null,us=null,pc=!1,rs=null,Pu=0,sl=0,Zh=null,tu=-1,nu=0;function ri(){return Pt&6?_n():tu!==-1?tu:tu=_n()}function ds(t){return t.mode&1?Pt&2&&jn!==0?jn&-jn:JM.transition!==null?(nu===0&&(nu=__()),nu):(t=Vt,t!==0||(t=window.event,t=t===void 0?16:T_(t.type)),t):1}function Qi(t,e,n,i){if(50<sl)throw sl=0,Zh=null,Error(Ee(185));Ll(t,n,i),(!(Pt&2)||t!==Hn)&&(t===Hn&&(!(Pt&2)&&($u|=n),Ln===4&&es(t,jn)),gi(t,i),n===1&&Pt===0&&!(e.mode&1)&&(na=_n()+500,Xu&&Ss()))}function gi(t,e){var n=t.callbackNode;J2(t,e);var i=hu(t,t===Hn?jn:0);if(i===0)n!==null&&Eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eg(n),e===1)t.tag===0?ZM(g1.bind(null,t)):W_(g1.bind(null,t)),YM(function(){!(Pt&6)&&Ss()}),n=null;else{switch(x_(i)){case 1:n=sm;break;case 4:n=g_;break;case 16:n=fu;break;case 536870912:n=v_;break;default:n=fu}n=Vx(n,Ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ux(t,e){if(tu=-1,nu=0,Pt&6)throw Error(Ee(327));var n=t.callbackNode;if(qo()&&t.callbackNode!==n)return null;var i=hu(t,t===Hn?jn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Iu(t,i);else{e=i;var r=Pt;Pt|=2;var s=kx();(Hn!==t||jn!==e)&&(Sr=null,na=_n()+500,Ys(t,e));do try{_S();break}catch(a){Fx(t,a)}while(!0);_m(),Cu.current=s,Pt=r,Sn!==null?e=0:(Hn=null,jn=0,e=Ln)}if(e!==0){if(e===2&&(r=Eh(t),r!==0&&(i=r,e=Jh(t,r))),e===1)throw n=Tl,Ys(t,0),es(t,i),gi(t,_n()),n;if(e===6)es(t,i);else{if(r=t.current.alternate,!(i&30)&&!gS(r)&&(e=Iu(t,i),e===2&&(s=Eh(t),s!==0&&(i=s,e=Jh(t,s))),e===1))throw n=Tl,Ys(t,0),es(t,i),gi(t,_n()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:ks(t,fi,Sr);break;case 3:if(es(t,i),(i&130023424)===i&&(e=Dm+500-_n(),10<e)){if(hu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ri(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lh(ks.bind(null,t,fi,Sr),e);break}ks(t,fi,Sr);break;case 4:if(es(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ji(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_n()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mS(i/1960))-i,10<i){t.timeoutHandle=Lh(ks.bind(null,t,fi,Sr),i);break}ks(t,fi,Sr);break;case 5:ks(t,fi,Sr);break;default:throw Error(Ee(329))}}}return gi(t,_n()),t.callbackNode===n?Ux.bind(null,t):null}function Jh(t,e){var n=rl;return t.current.memoizedState.isDehydrated&&(Ys(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=fi,fi=n,e!==null&&Qh(e)),t}function Qh(t){fi===null?fi=t:fi.push.apply(fi,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!nr(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function es(t,e){for(e&=~Lm,e&=~$u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ji(e),i=1<<n;t[n]=-1,e&=~i}}function g1(t){if(Pt&6)throw Error(Ee(327));qo();var e=hu(t,0);if(!(e&1))return gi(t,_n()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var i=Eh(t);i!==0&&(e=i,n=Jh(t,i))}if(n===1)throw n=Tl,Ys(t,0),es(t,e),gi(t,_n()),n;if(n===6)throw Error(Ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ks(t,fi,Sr),gi(t,_n()),null}function Nm(t,e){var n=Pt;Pt|=1;try{return t(e)}finally{Pt=n,Pt===0&&(na=_n()+500,Xu&&Ss())}}function eo(t){rs!==null&&rs.tag===0&&!(Pt&6)&&qo();var e=Pt;Pt|=1;var n=Bi.transition,i=Vt;try{if(Bi.transition=null,Vt=1,t)return t()}finally{Vt=i,Bi.transition=n,Pt=e,!(Pt&6)&&Ss()}}function Um(){Ti=Ho.current,sn(Ho)}function Ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jM(n)),Sn!==null)for(n=Sn.return;n!==null;){var i=n;switch(mm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_u();break;case 3:ea(),sn(pi),sn(ei),Em();break;case 5:wm(i);break;case 4:ea();break;case 13:sn(dn);break;case 19:sn(dn);break;case 10:xm(i.type._context);break;case 22:case 23:Um()}n=n.return}if(Hn=t,Sn=t=fs(t.current,null),jn=Ti=e,Ln=0,Tl=null,Lm=$u=Qs=0,fi=rl=null,Gs!==null){for(e=0;e<Gs.length;e++)if(n=Gs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gs=null}return t}function Fx(t,e){do{var n=Sn;try{if(_m(),Jc.current=Au,bu){for(var i=fn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bu=!1}if(Js=0,Bn=Pn=fn=null,nl=!1,Sl=0,Im.current=null,n===null||n.return===null){Ln=1,Tl=e,Sn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=i1(o);if(g!==null){g.flags&=-257,r1(g,o,a,s,e),g.mode&1&&n1(s,u,e),e=g,l=u;var w=e.updateQueue;if(w===null){var A=new Set;A.add(l),e.updateQueue=A}else w.add(l);break e}else{if(!(e&1)){n1(s,u,e),Fm();break e}l=Error(Ee(426))}}else if(cn&&a.mode&1){var x=i1(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),r1(x,o,a,s,e),gm(ta(l,a));break e}}s=l=ta(l,a),Ln!==4&&(Ln=2),rl===null?rl=[s]:rl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=xx(s,l,e);Kg(s,f);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(us===null||!us.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=yx(s,a,e);Kg(s,T);break e}}s=s.return}while(s!==null)}zx(n)}catch(D){e=D,Sn===n&&n!==null&&(Sn=n=n.return);continue}break}while(!0)}function kx(){var t=Cu.current;return Cu.current=Au,t===null?Au:t}function Fm(){(Ln===0||Ln===3||Ln===2)&&(Ln=4),Hn===null||!(Qs&268435455)&&!($u&268435455)||es(Hn,jn)}function Iu(t,e){var n=Pt;Pt|=2;var i=kx();(Hn!==t||jn!==e)&&(Sr=null,Ys(t,e));do try{vS();break}catch(r){Fx(t,r)}while(!0);if(_m(),Pt=n,Cu.current=i,Sn!==null)throw Error(Ee(261));return Hn=null,jn=0,Ln}function vS(){for(;Sn!==null;)Ox(Sn)}function _S(){for(;Sn!==null&&!G2();)Ox(Sn)}function Ox(t){var e=Hx(t.alternate,t,Ti);t.memoizedProps=t.pendingProps,e===null?zx(t):Sn=e,Im.current=null}function zx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dS(n,e),n!==null){n.flags&=32767,Sn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ln=6,Sn=null;return}}else if(n=uS(n,e,Ti),n!==null){Sn=n;return}if(e=e.sibling,e!==null){Sn=e;return}Sn=e=t}while(e!==null);Ln===0&&(Ln=5)}function ks(t,e,n){var i=Vt,r=Bi.transition;try{Bi.transition=null,Vt=1,xS(t,e,n,i)}finally{Bi.transition=r,Vt=i}return null}function xS(t,e,n,i){do qo();while(rs!==null);if(Pt&6)throw Error(Ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q2(t,s),t===Hn&&(Sn=Hn=null,jn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pc||(pc=!0,Vx(fu,function(){return qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bi.transition,Bi.transition=null;var o=Vt;Vt=1;var a=Pt;Pt|=4,Im.current=null,hS(t,n),Dx(n,t),zM(Ph),pu=!!Rh,Ph=Rh=null,t.current=n,pS(n),W2(),Pt=a,Vt=o,Bi.transition=s}else t.current=n;if(pc&&(pc=!1,rs=t,Pu=r),s=t.pendingLanes,s===0&&(us=null),Y2(n.stateNode),gi(t,_n()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ru)throw Ru=!1,t=Kh,Kh=null,t;return Pu&1&&t.tag!==0&&qo(),s=t.pendingLanes,s&1?t===Zh?sl++:(sl=0,Zh=t):sl=0,Ss(),null}function qo(){if(rs!==null){var t=x_(Pu),e=Bi.transition,n=Vt;try{if(Bi.transition=null,Vt=16>t?16:t,rs===null)var i=!1;else{if(t=rs,rs=null,Pu=0,Pt&6)throw Error(Ee(331));var r=Pt;for(Pt|=4,Xe=t.current;Xe!==null;){var s=Xe,o=s.child;if(Xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Xe=u;Xe!==null;){var p=Xe;switch(p.tag){case 0:case 11:case 15:il(8,p,s)}var h=p.child;if(h!==null)h.return=p,Xe=h;else for(;Xe!==null;){p=Xe;var m=p.sibling,g=p.return;if(Px(p),p===u){Xe=null;break}if(m!==null){m.return=g,Xe=m;break}Xe=g}}}var w=s.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var x=A.sibling;A.sibling=null,A=x}while(A!==null)}}Xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Xe=o;else e:for(;Xe!==null;){if(s=Xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:il(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Xe=f;break e}Xe=s.return}}var _=t.current;for(Xe=_;Xe!==null;){o=Xe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Xe=y;else e:for(o=_;Xe!==null;){if(a=Xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qu(9,a)}}catch(D){gn(a,a.return,D)}if(a===o){Xe=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,Xe=T;break e}Xe=a.return}}if(Pt=r,Ss(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(Bu,t)}catch{}i=!0}return i}finally{Vt=n,Bi.transition=e}}return!1}function v1(t,e,n){e=ta(n,e),e=xx(t,e,1),t=cs(t,e,1),e=ri(),t!==null&&(Ll(t,1,e),gi(t,e))}function gn(t,e,n){if(t.tag===3)v1(t,t,n);else for(;e!==null;){if(e.tag===3){v1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(us===null||!us.has(i))){t=ta(n,t),t=yx(e,t,1),e=cs(e,t,1),t=ri(),e!==null&&(Ll(e,1,t),gi(e,t));break}}e=e.return}}function yS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ri(),t.pingedLanes|=t.suspendedLanes&n,Hn===t&&(jn&n)===n&&(Ln===4||Ln===3&&(jn&130023424)===jn&&500>_n()-Dm?Ys(t,0):Lm|=n),gi(t,e)}function Bx(t,e){e===0&&(t.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var n=ri();t=Ir(t,e),t!==null&&(Ll(t,e,n),gi(t,n))}function MS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function SS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),Bx(t,n)}var Hx;Hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pi.current)hi=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hi=!1,cS(t,e,n);hi=!!(t.flags&131072)}else hi=!1,cn&&e.flags&1048576&&X_(e,Mu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(t,e),t=e.pendingProps;var r=Zo(e,ei.current);Yo(e,n),r=bm(null,e,i,t,r,n);var s=Am();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mi(i)?(s=!0,xu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mm(e),r.updater=Yu,e.stateNode=r,r._reactInternals=e,zh(e,i,t,n),e=Vh(null,e,i,!0,s,n)):(e.tag=0,cn&&s&&pm(e),ii(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ES(i),t=qi(i,t),r){case 0:e=Hh(null,e,i,t,n);break e;case 1:e=a1(null,e,i,t,n);break e;case 11:e=s1(null,e,i,t,n);break e;case 14:e=o1(null,e,i,qi(i.type,t),n);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),Hh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),a1(t,e,i,r,n);case 3:e:{if(Ex(e),t===null)throw Error(Ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Z_(t,e),Eu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ta(Error(Ee(423)),e),e=l1(t,e,i,n,r);break e}else if(i!==r){r=ta(Error(Ee(424)),e),e=l1(t,e,i,n,r);break e}else for(Ai=ls(e.stateNode.containerInfo.firstChild),Ci=e,cn=!0,Ki=null,n=$_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),i===r){e=Lr(t,e,n);break e}ii(t,e,i,n)}e=e.child}return e;case 5:return J_(e),t===null&&Fh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ih(i,r)?o=null:s!==null&&Ih(i,s)&&(e.flags|=32),wx(t,e),ii(t,e,o,n),e.child;case 6:return t===null&&Fh(e),null;case 13:return Tx(t,e,n);case 4:return Sm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qo(e,null,i,n):ii(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),s1(t,e,i,r,n);case 7:return ii(t,e,e.pendingProps,n),e.child;case 8:return ii(t,e,e.pendingProps.children,n),e.child;case 12:return ii(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tn(Su,i._currentValue),i._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===r.children&&!pi.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ii(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yo(e,n),r=Hi(r),i=i(r),e.flags|=1,ii(t,e,i,n),e.child;case 14:return i=e.type,r=qi(i,e.pendingProps),r=qi(i.type,r),o1(t,e,i,r,n);case 15:return Mx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),eu(t,e),e.tag=1,mi(i)?(t=!0,xu(e)):t=!1,Yo(e,n),_x(e,i,r),zh(e,i,r,n),Vh(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return Sx(t,e,n)}throw Error(Ee(156,e.tag))};function Vx(t,e){return m_(t,e)}function wS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(t,e,n,i){return new wS(t,e,n,i)}function km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ES(t){if(typeof t=="function")return km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nm)return 11;if(t===im)return 14}return 2}function fs(t,e){var n=t.alternate;return n===null?(n=zi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Io:return qs(n.children,r,s,e);case tm:o=8,r|=8;break;case ch:return t=zi(12,n,e,r|2),t.elementType=ch,t.lanes=s,t;case uh:return t=zi(13,n,e,r),t.elementType=uh,t.lanes=s,t;case dh:return t=zi(19,n,e,r),t.elementType=dh,t.lanes=s,t;case Jv:return Ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kv:o=10;break e;case Zv:o=9;break e;case nm:o=11;break e;case im:o=14;break e;case Zr:o=16,i=null;break e}throw Error(Ee(130,t==null?t:typeof t,""))}return e=zi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qs(t,e,n,i){return t=zi(7,t,i,e),t.lanes=n,t}function Ku(t,e,n,i){return t=zi(22,t,i,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=zi(6,t,null,e),t.lanes=n,t}function _f(t,e,n){return e=zi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,i,r,s,o,a,l){return t=new TS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mm(s),t}function bS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gx(t){if(!t)return vs;t=t._reactInternals;e:{if(ro(t)!==t||t.tag!==1)throw Error(Ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(t.tag===1){var n=t.type;if(mi(n))return G_(t,n,e)}return e}function Wx(t,e,n,i,r,s,o,a,l){return t=Om(n,i,!0,t,r,s,o,a,l),t.context=Gx(null),n=t.current,i=ri(),r=ds(n),s=Ar(i,r),s.callback=e??null,cs(n,s,r),t.current.lanes=r,Ll(t,r,i),gi(t,i),t}function Zu(t,e,n,i){var r=e.current,s=ri(),o=ds(r);return n=Gx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cs(r,e,o),t!==null&&(Qi(t,r,o,s),Zc(t,r,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){_1(t,e),(t=t.alternate)&&_1(t,e)}function AS(){return null}var Xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}Ju.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ee(409));Zu(t,e,null,null)};Ju.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;eo(function(){Zu(null,t,null,null)}),e[Pr]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=S_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qr.length&&e!==0&&e<Qr[n].priority;n++);Qr.splice(n,0,t),n===0&&E_(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function x1(){}function CS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Lu(o);s.call(u)}}var o=Wx(e,i,t,0,null,!1,!1,"",x1);return t._reactRootContainer=o,t[Pr]=o.current,vl(t.nodeType===8?t.parentNode:t),eo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Lu(l);a.call(u)}}var l=Om(t,0,!1,null,null,!1,!1,"",x1);return t._reactRootContainer=l,t[Pr]=l.current,vl(t.nodeType===8?t.parentNode:t),eo(function(){Zu(e,l,n,i)}),l}function ed(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lu(o);a.call(l)}}Zu(e,o,t,r)}else o=CS(n,e,t,r,i);return Lu(o)}y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qa(e.pendingLanes);n!==0&&(om(e,n|1),gi(e,_n()),!(Pt&6)&&(na=_n()+500,Ss()))}break;case 13:eo(function(){var i=Ir(t,1);if(i!==null){var r=ri();Qi(i,t,1,r)}}),zm(t,1)}};am=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=ri();Qi(e,t,134217728,n)}zm(t,134217728)}};M_=function(t){if(t.tag===13){var e=ds(t),n=Ir(t,e);if(n!==null){var i=ri();Qi(n,t,e,i)}zm(t,e)}};S_=function(){return Vt};w_=function(t,e){var n=Vt;try{return Vt=t,e()}finally{Vt=n}};Mh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wu(i);if(!r)throw Error(Ee(90));e_(i),ph(i,r)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&Go(t,!!n.multiple,e,!1)}};c_=Nm;u_=eo;var RS={usingClientEntryPoint:!1,Events:[Nl,Uo,Wu,a_,l_,Nm]},Na={findFiberByHostInstance:Vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PS={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||AS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Bu=mc.inject(PS),dr=mc}catch{}}Pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RS;Pi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(Ee(200));return bS(t,e,null,n)};Pi.createRoot=function(t,e){if(!Hm(t))throw Error(Ee(299));var n=!1,i="",r=Xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,i,r),t[Pr]=e.current,vl(t.nodeType===8?t.parentNode:t),new Bm(e)};Pi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ee(188)):(t=Object.keys(t).join(","),Error(Ee(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};Pi.flushSync=function(t){return eo(t)};Pi.hydrate=function(t,e,n){if(!Qu(e))throw Error(Ee(200));return ed(null,t,e,!0,n)};Pi.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(Ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wx(e,null,t,1,n??null,r,!1,s,o),t[Pr]=e.current,vl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ju(e)};Pi.render=function(t,e,n){if(!Qu(e))throw Error(Ee(200));return ed(null,t,e,!1,n)};Pi.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(Ee(40));return t._reactRootContainer?(eo(function(){ed(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};Pi.unstable_batchedUpdates=Nm;Pi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qu(n))throw Error(Ee(200));if(t==null||t._reactInternals===void 0)throw Error(Ee(38));return ed(t,e,n,!1,i)};Pi.version="18.3.1-next-f1338f8080-20240426";function jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx)}catch(t){console.error(t)}}jx(),jv.exports=Pi;var IS=jv.exports,Yx,y1=IS;Yx=y1.createRoot,y1.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vm="180",LS=0,M1=1,DS=2,qx=1,$x=2,Mr=3,_s=0,vi=1,Xt=2,hs=0,$s=1,ep=2,S1=3,w1=4,NS=5,Bs=100,US=101,FS=102,kS=103,OS=104,zS=200,BS=201,HS=202,VS=203,tp=204,np=205,GS=206,WS=207,XS=208,jS=209,YS=210,qS=211,$S=212,KS=213,ZS=214,ip=0,rp=1,sp=2,ia=3,op=4,ap=5,lp=6,cp=7,Gm=0,JS=1,QS=2,ps=0,ew=1,tw=2,nw=3,Kx=4,iw=5,rw=6,sw=7,Zx=300,ra=301,sa=302,up=303,dp=304,td=306,ts=1e3,Xs=1001,fp=1002,er=1003,ow=1004,gc=1005,cr=1006,xf=1007,js=1008,hr=1009,Jx=1010,Qx=1011,bl=1012,Wm=1013,to=1014,br=1015,Fl=1016,Xm=1017,jm=1018,Al=1020,ey=35902,ty=35899,ny=1021,iy=1022,Zi=1023,Cl=1026,Rl=1027,ry=1028,Ym=1029,sy=1030,qm=1031,$m=1033,ru=33776,su=33777,ou=33778,au=33779,hp=35840,pp=35841,mp=35842,gp=35843,vp=36196,_p=37492,xp=37496,yp=37808,Mp=37809,Sp=37810,wp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,Cp=37816,Rp=37817,Pp=37818,Ip=37819,Lp=37820,Dp=37821,Np=36492,Up=36494,Fp=36495,kp=36283,Op=36284,zp=36285,Bp=36286,aw=3200,lw=3201,Km=0,cw=1,ns="",In="srgb",oa="srgb-linear",Du="linear",jt="srgb",fo=7680,E1=519,uw=512,dw=513,fw=514,oy=515,hw=516,pw=517,mw=518,gw=519,Hp=35044,T1="300 es",ur=2e3,Nu=2001;class da{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=Math.PI/180,Vp=180/Math.PI;function ms(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zn[t&255]+Zn[t>>8&255]+Zn[t>>16&255]+Zn[t>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function vw(t,e){return(t%e+e)%e}function Mf(t,e,n){return(1-n)*t+n*e}function lr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3];const m=s[o+0],g=s[o+1],w=s[o+2],A=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=w,e[n+3]=A;return}if(h!==A||l!==m||u!==g||p!==w){let x=1-a;const f=l*m+u*g+p*w+h*A,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),N=Math.atan2(D,f*_);x=Math.sin(x*N)/D,a=Math.sin(a*N)/D}const T=a*_;if(l=l*x+m*T,u=u*x+g*T,p=p*x+w*T,h=h*x+A*T,x===1-a){const D=1/Math.sqrt(l*l+u*u+p*p+h*h);l*=D,u*=D,p*=D,h*=D}}e[n]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],p=i[r+3],h=s[o],m=s[o+1],g=s[o+2],w=s[o+3];return e[n]=a*w+p*h+l*g-u*m,e[n+1]=l*w+p*m+u*h-a*g,e[n+2]=u*w+p*g+a*m-l*h,e[n+3]=p*w-a*h-l*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),p=a(r/2),h=a(s/2),m=l(i/2),g=l(r/2),w=l(s/2);switch(o){case"XYZ":this._x=m*p*h+u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h-m*g*w;break;case"YXZ":this._x=m*p*h+u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h+m*g*w;break;case"ZXY":this._x=m*p*h-u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h-m*g*w;break;case"ZYX":this._x=m*p*h-u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h+m*g*w;break;case"YZX":this._x=m*p*h+u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h-m*g*w;break;case"XZY":this._x=m*p*h-u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h+m*g*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],p=n[6],h=n[10],m=i+a+h;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(p-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+p)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,p=n._w;return this._x=i*p+o*a+r*u-s*l,this._y=r*p+o*l+s*a-i*u,this._z=s*p+o*u+i*l-r*a,this._w=o*p-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),p=Math.atan2(u,a),h=Math.sin((1-n)*p)/u,m=Math.sin(n*p)/u;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=r*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(b1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(b1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),p=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*p,this.y=i+l*p+a*u-s*h,this.z=r+l*h+s*p-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sf=new V,b1=new kl;class gt{constructor(e,n,i,r,s,o,a,l,u){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],p=i[4],h=i[7],m=i[2],g=i[5],w=i[8],A=r[0],x=r[3],f=r[6],_=r[1],y=r[4],T=r[7],D=r[2],N=r[5],U=r[8];return s[0]=o*A+a*_+l*D,s[3]=o*x+a*y+l*N,s[6]=o*f+a*T+l*U,s[1]=u*A+p*_+h*D,s[4]=u*x+p*y+h*N,s[7]=u*f+p*T+h*U,s[2]=m*A+g*_+w*D,s[5]=m*x+g*y+w*N,s[8]=m*f+g*T+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8];return n*o*p-n*a*u-i*s*p+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8],h=p*o-a*u,m=a*l-p*s,g=u*s-o*l,w=n*h+i*m+r*g;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=h*A,e[1]=(r*u-p*i)*A,e[2]=(a*i-r*o)*A,e[3]=m*A,e[4]=(p*n-r*l)*A,e[5]=(r*s-a*n)*A,e[6]=g*A,e[7]=(i*l-u*n)*A,e[8]=(o*n-i*s)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wf.makeScale(e,n)),this}rotate(e){return this.premultiply(wf.makeRotation(-e)),this}translate(e,n){return this.premultiply(wf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wf=new gt;function ay(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _w(){const t=Uu("canvas");return t.style.display="block",t}const A1={};function Pl(t){t in A1||(A1[t]=!0,console.warn(t))}function xw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const C1=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R1=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yw(){const t={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===jt&&(r.r=Cr(r.r),r.g=Cr(r.g),r.b=Cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===jt&&(r.r=$o(r.r),r.g=$o(r.g),r.b=$o(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ns?Du:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[oa]:{primaries:e,whitePoint:i,transfer:Du,toXYZ:C1,fromXYZ:R1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:jt,toXYZ:C1,fromXYZ:R1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Dt=yw();function Cr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $o(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ho;class Mw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ho===void 0&&(ho=Uu("canvas")),ho.width=e.width,ho.height=e.height;const r=ho.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ho}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cr(n[i]/255)*255):n[i]=Cr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sw=0;class Zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ef(r[o].image)):s.push(Ef(r[o]))}else s=Ef(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ef(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ww=0;const Tf=new V;class si extends da{constructor(e=si.DEFAULT_IMAGE,n=si.DEFAULT_MAPPING,i=Xs,r=Xs,s=cr,o=js,a=Zi,l=hr,u=si.DEFAULT_ANISOTROPY,p=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=ms(),this.name="",this.source=new Zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Xs:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Xs:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Zx;si.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],p=l[4],h=l[8],m=l[1],g=l[5],w=l[9],A=l[2],x=l[6],f=l[10];if(Math.abs(p-m)<.01&&Math.abs(h-A)<.01&&Math.abs(w-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(h+A)<.1&&Math.abs(w+x)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,T=(g+1)/2,D=(f+1)/2,N=(p+m)/4,U=(h+A)/4,k=(w+x)/4;return y>T&&y>D?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=N/i,s=U/i):T>D?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=N/r,s=k/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=U/s,r=k/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-w)*(x-w)+(h-A)*(h-A)+(m-p)*(m-p));return Math.abs(_)<.001&&(_=1),this.x=(x-w)/_,this.y=(h-A)/_,this.z=(m-p)/_,this.w=Math.acos((u+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ew extends da{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new si(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:cr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Zm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends Ew{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ly extends si{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tw extends si{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),_c.subVectors(this.max,Ua),po.subVectors(e.a,Ua),mo.subVectors(e.b,Ua),go.subVectors(e.c,Ua),Gr.subVectors(mo,po),Wr.subVectors(go,mo),Rs.subVectors(po,go);let n=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-Rs.z,Rs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,Rs.z,0,-Rs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-Rs.y,Rs.x,0];return!bf(n,po,mo,go,_c)||(n=[1,0,0,0,1,0,0,0,1],!bf(n,po,mo,go,_c))?!1:(xc.crossVectors(Gr,Wr),n=[xc.x,xc.y,xc.z],bf(n,po,mo,go,_c))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new V,new V,new V,new V,new V,new V,new V,new V],Wi=new V,vc=new Ol,po=new V,mo=new V,go=new V,Gr=new V,Wr=new V,Rs=new V,Ua=new V,_c=new V,xc=new V,Ps=new V;function bf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ps.fromArray(t,s);const a=r.x*Math.abs(Ps.x)+r.y*Math.abs(Ps.y)+r.z*Math.abs(Ps.z),l=e.dot(Ps),u=n.dot(Ps),p=i.dot(Ps);if(Math.max(-Math.max(l,u,p),Math.min(l,u,p))>a)return!1}return!0}const bw=new Ol,Fa=new V,Af=new V;class zl{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Af)),this.expandByPoint(Fa.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vr=new V,Cf=new V,yc=new V,Xr=new V,Rf=new V,Mc=new V,Pf=new V;class nd{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,n),vr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cf.copy(e).add(n).multiplyScalar(.5),yc.copy(n).sub(e).normalize(),Xr.copy(this.origin).sub(Cf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yc),a=Xr.dot(this.direction),l=-Xr.dot(yc),u=Xr.lengthSq(),p=Math.abs(1-o*o);let h,m,g,w;if(p>0)if(h=o*l-a,m=o*a-l,w=s*p,h>=0)if(m>=-w)if(m<=w){const A=1/p;h*=A,m*=A,g=h*(h+o*m+2*a)+m*(o*h+m+2*l)+u}else m=s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;else m=-s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;else m<=-w?(h=Math.max(0,-(-o*s+a)),m=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+u):m<=w?(h=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+u):(h=Math.max(0,-(o*s+a)),m=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+u);else m=o>0?-s:s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cf).addScaledVector(yc,m),g}intersectSphere(e,n){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),p>=0?(s=(e.min.y-m.y)*p,o=(e.max.y-m.y)*p):(s=(e.max.y-m.y)*p,o=(e.min.y-m.y)*p),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-m.z)*h,l=(e.max.z-m.z)*h):(a=(e.max.z-m.z)*h,l=(e.min.z-m.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,n,i,r,s){Rf.subVectors(n,e),Mc.subVectors(i,e),Pf.crossVectors(Rf,Mc);let o=this.direction.dot(Pf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xr.subVectors(this.origin,e);const l=a*this.direction.dot(Mc.crossVectors(Xr,Mc));if(l<0)return null;const u=a*this.direction.dot(Rf.cross(Xr));if(u<0||l+u>o)return null;const p=-a*Xr.dot(Pf);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,n,i,r,s,o,a,l,u,p,h,m,g,w,A,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,p,h,m,g,w,A,x)}set(e,n,i,r,s,o,a,l,u,p,h,m,g,w,A,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=p,f[10]=h,f[14]=m,f[3]=g,f[7]=w,f[11]=A,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),s=1/vo.setFromMatrixColumn(e,1).length(),o=1/vo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const m=o*p,g=o*h,w=a*p,A=a*h;n[0]=l*p,n[4]=-l*h,n[8]=u,n[1]=g+w*u,n[5]=m-A*u,n[9]=-a*l,n[2]=A-m*u,n[6]=w+g*u,n[10]=o*l}else if(e.order==="YXZ"){const m=l*p,g=l*h,w=u*p,A=u*h;n[0]=m+A*a,n[4]=w*a-g,n[8]=o*u,n[1]=o*h,n[5]=o*p,n[9]=-a,n[2]=g*a-w,n[6]=A+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*p,g=l*h,w=u*p,A=u*h;n[0]=m-A*a,n[4]=-o*h,n[8]=w+g*a,n[1]=g+w*a,n[5]=o*p,n[9]=A-m*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*p,g=o*h,w=a*p,A=a*h;n[0]=l*p,n[4]=w*u-g,n[8]=m*u+A,n[1]=l*h,n[5]=A*u+m,n[9]=g*u-w,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*u,w=a*l,A=a*u;n[0]=l*p,n[4]=A-m*h,n[8]=w*h+g,n[1]=h,n[5]=o*p,n[9]=-a*p,n[2]=-u*p,n[6]=g*h+w,n[10]=m-A*h}else if(e.order==="XZY"){const m=o*l,g=o*u,w=a*l,A=a*u;n[0]=l*p,n[4]=-h,n[8]=u*p,n[1]=m*h+A,n[5]=o*p,n[9]=g*h-w,n[2]=w*h-g,n[6]=a*p,n[10]=A*h+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Aw,e,Cw)}lookAt(e,n,i){const r=this.elements;return wi.subVectors(e,n),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),jr.crossVectors(i,wi),jr.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),jr.crossVectors(i,wi)),jr.normalize(),Sc.crossVectors(wi,jr),r[0]=jr.x,r[4]=Sc.x,r[8]=wi.x,r[1]=jr.y,r[5]=Sc.y,r[9]=wi.y,r[2]=jr.z,r[6]=Sc.z,r[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],p=i[1],h=i[5],m=i[9],g=i[13],w=i[2],A=i[6],x=i[10],f=i[14],_=i[3],y=i[7],T=i[11],D=i[15],N=r[0],U=r[4],k=r[8],b=r[12],S=r[1],z=r[5],Y=r[9],re=r[13],ce=r[2],fe=r[6],W=r[10],te=r[14],H=r[3],se=r[7],ue=r[11],Re=r[15];return s[0]=o*N+a*S+l*ce+u*H,s[4]=o*U+a*z+l*fe+u*se,s[8]=o*k+a*Y+l*W+u*ue,s[12]=o*b+a*re+l*te+u*Re,s[1]=p*N+h*S+m*ce+g*H,s[5]=p*U+h*z+m*fe+g*se,s[9]=p*k+h*Y+m*W+g*ue,s[13]=p*b+h*re+m*te+g*Re,s[2]=w*N+A*S+x*ce+f*H,s[6]=w*U+A*z+x*fe+f*se,s[10]=w*k+A*Y+x*W+f*ue,s[14]=w*b+A*re+x*te+f*Re,s[3]=_*N+y*S+T*ce+D*H,s[7]=_*U+y*z+T*fe+D*se,s[11]=_*k+y*Y+T*W+D*ue,s[15]=_*b+y*re+T*te+D*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],p=e[2],h=e[6],m=e[10],g=e[14],w=e[3],A=e[7],x=e[11],f=e[15];return w*(+s*l*h-r*u*h-s*a*m+i*u*m+r*a*g-i*l*g)+A*(+n*l*g-n*u*m+s*o*m-r*o*g+r*u*p-s*l*p)+x*(+n*u*h-n*a*g-s*o*h+i*o*g+s*a*p-i*u*p)+f*(-r*a*p-n*l*h+n*a*m+r*o*h-i*o*m+i*l*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8],h=e[9],m=e[10],g=e[11],w=e[12],A=e[13],x=e[14],f=e[15],_=h*x*u-A*m*u+A*l*g-a*x*g-h*l*f+a*m*f,y=w*m*u-p*x*u-w*l*g+o*x*g+p*l*f-o*m*f,T=p*A*u-w*h*u+w*a*g-o*A*g-p*a*f+o*h*f,D=w*h*l-p*A*l-w*a*m+o*A*m+p*a*x-o*h*x,N=n*_+i*y+r*T+s*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=_*U,e[1]=(A*m*s-h*x*s-A*r*g+i*x*g+h*r*f-i*m*f)*U,e[2]=(a*x*s-A*l*s+A*r*u-i*x*u-a*r*f+i*l*f)*U,e[3]=(h*l*s-a*m*s-h*r*u+i*m*u+a*r*g-i*l*g)*U,e[4]=y*U,e[5]=(p*x*s-w*m*s+w*r*g-n*x*g-p*r*f+n*m*f)*U,e[6]=(w*l*s-o*x*s-w*r*u+n*x*u+o*r*f-n*l*f)*U,e[7]=(o*m*s-p*l*s+p*r*u-n*m*u-o*r*g+n*l*g)*U,e[8]=T*U,e[9]=(w*h*s-p*A*s-w*i*g+n*A*g+p*i*f-n*h*f)*U,e[10]=(o*A*s-w*a*s+w*i*u-n*A*u-o*i*f+n*a*f)*U,e[11]=(p*a*s-o*h*s-p*i*u+n*h*u+o*i*g-n*a*g)*U,e[12]=D*U,e[13]=(p*A*r-w*h*r+w*i*m-n*A*m-p*i*x+n*h*x)*U,e[14]=(w*a*r-o*A*r-w*i*l+n*A*l+o*i*x-n*a*x)*U,e[15]=(o*h*r-p*a*r+p*i*l-n*h*l-o*i*m+n*a*m)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,p=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,p*a+i,p*l-r*o,0,u*l-r*a,p*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,p=o+o,h=a+a,m=s*u,g=s*p,w=s*h,A=o*p,x=o*h,f=a*h,_=l*u,y=l*p,T=l*h,D=i.x,N=i.y,U=i.z;return r[0]=(1-(A+f))*D,r[1]=(g+T)*D,r[2]=(w-y)*D,r[3]=0,r[4]=(g-T)*N,r[5]=(1-(m+f))*N,r[6]=(x+_)*N,r[7]=0,r[8]=(w+y)*U,r[9]=(x-_)*U,r[10]=(1-(m+A))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vo.set(r[0],r[1],r[2]).length();const o=vo.set(r[4],r[5],r[6]).length(),a=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xi.copy(this);const u=1/s,p=1/o,h=1/a;return Xi.elements[0]*=u,Xi.elements[1]*=u,Xi.elements[2]*=u,Xi.elements[4]*=p,Xi.elements[5]*=p,Xi.elements[6]*=p,Xi.elements[8]*=h,Xi.elements[9]*=h,Xi.elements[10]*=h,n.setFromRotationMatrix(Xi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ur,l=!1){const u=this.elements,p=2*s/(n-e),h=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let w,A;if(l)w=s/(o-s),A=o*s/(o-s);else if(a===ur)w=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(a===Nu)w=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=p,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=A,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ur,l=!1){const u=this.elements,p=2/(n-e),h=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let w,A;if(l)w=1/(o-s),A=o/(o-s);else if(a===ur)w=-2/(o-s),A=-(o+s)/(o-s);else if(a===Nu)w=-1/(o-s),A=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=p,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=h,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=w,u[14]=A,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vo=new V,Xi=new Zt,Aw=new V(0,0,0),Cw=new V(1,1,1),jr=new V,Sc=new V,wi=new V,P1=new Zt,I1=new kl;class ir{constructor(e=0,n=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],p=r[9],h=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return P1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return I1.setFromEuler(this),this.setFromQuaternion(I1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rw=0;const L1=new V,_o=new kl,_r=new Zt,wc=new V,ka=new V,Pw=new V,Iw=new kl,D1=new V(1,0,0),N1=new V(0,1,0),U1=new V(0,0,1),F1={type:"added"},Lw={type:"removed"},xo={type:"childadded",child:null},If={type:"childremoved",child:null};class wn extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new V,n=new ir,i=new kl,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new gt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(D1,e)}rotateY(e){return this.rotateOnAxis(N1,e)}rotateZ(e){return this.rotateOnAxis(U1,e)}translateOnAxis(e,n){return L1.copy(e).applyQuaternion(this.quaternion),this.position.add(L1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(D1,e)}translateY(e){return this.translateOnAxis(N1,e)}translateZ(e){return this.translateOnAxis(U1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wc.copy(e):wc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(ka,wc,this.up):_r.lookAt(wc,ka,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(_r),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F1),xo.child=e,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lw),If.child=e,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F1),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,Pw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Iw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,p=l.length;u<p;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),p=o(e.images),h=o(e.shapes),m=o(e.skeletons),g=o(e.animations),w=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),w.length>0&&(i.nodes=w)}return i.object=r,i;function o(a){const l=[];for(const u in a){const p=a[u];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new V(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new V,xr=new V,Lf=new V,yr=new V,yo=new V,Mo=new V,k1=new V,Df=new V,Nf=new V,Uf=new V,Ff=new qt,kf=new qt,Of=new qt;class Oi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ji.subVectors(e,n),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ji.subVectors(r,n),xr.subVectors(i,n),Lf.subVectors(e,n);const o=ji.dot(ji),a=ji.dot(xr),l=ji.dot(Lf),u=xr.dot(xr),p=xr.dot(Lf),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,g=(u*l-a*p)*m,w=(o*p-a*l)*m;return s.set(1-g-w,w,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yr.x),l.addScaledVector(o,yr.y),l.addScaledVector(a,yr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ff.setScalar(0),kf.setScalar(0),Of.setScalar(0),Ff.fromBufferAttribute(e,n),kf.fromBufferAttribute(e,i),Of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ff,s.x),o.addScaledVector(kf,s.y),o.addScaledVector(Of,s.z),o}static isFrontFacing(e,n,i,r){return ji.subVectors(i,n),xr.subVectors(e,n),ji.cross(xr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),ji.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;yo.subVectors(r,i),Mo.subVectors(s,i),Df.subVectors(e,i);const l=yo.dot(Df),u=Mo.dot(Df);if(l<=0&&u<=0)return n.copy(i);Nf.subVectors(e,r);const p=yo.dot(Nf),h=Mo.dot(Nf);if(p>=0&&h<=p)return n.copy(r);const m=l*h-p*u;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),n.copy(i).addScaledVector(yo,o);Uf.subVectors(e,s);const g=yo.dot(Uf),w=Mo.dot(Uf);if(w>=0&&g<=w)return n.copy(s);const A=g*u-l*w;if(A<=0&&u>=0&&w<=0)return a=u/(u-w),n.copy(i).addScaledVector(Mo,a);const x=p*w-g*h;if(x<=0&&h-p>=0&&g-w>=0)return k1.subVectors(s,r),a=(h-p)/(h-p+(g-w)),n.copy(r).addScaledVector(k1,a);const f=1/(x+A+m);return o=A*f,a=m*f,n.copy(i).addScaledVector(yo,o).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Dt.workingColorSpace){if(e=vw(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zf(o,s,e+1/3),this.g=zf(o,s,e),this.b=zf(o,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=cy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Dt.workingToColorSpace(Jn.copy(this),e),Math.round(St(Jn.r*255,0,255))*65536+Math.round(St(Jn.g*255,0,255))*256+Math.round(St(Jn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Jn.copy(this),n);const i=Jn.r,r=Jn.g,s=Jn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const p=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=p<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=p,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Jn.copy(this),n),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=In){Dt.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,i=Jn.g,r=Jn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+n,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yr),e.getHSL(Ec);const i=Mf(Yr.h,Ec.h,n),r=Mf(Yr.s,Ec.s,n),s=Mf(Yr.l,Ec.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new yt;yt.NAMES=cy;let Dw=0;class Nr extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=$s,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tp,this.blendDst=np,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tp&&(i.blendSrc=this.blendSrc),this.blendDst!==np&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class At extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new V,Tc=new Ke;let Nw=0;class tr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hp,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(e),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class uy extends tr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dy extends tr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends tr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Uw=0;const Ui=new Zt,Bf=new wn,So=new V,Ei=new Ol,Oa=new Ol,On=new V;class ln extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ay(e)?dy:uy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,n,i){return Ui.makeTranslation(e,n,i),this.applyMatrix4(Ui),this}scale(e,n,i){return Ui.makeScale(e,n,i),this.applyMatrix4(Ui),this}lookAt(e){return Bf.lookAt(e),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(On.addVectors(Ei.min,Oa.min),Ei.expandByPoint(On),On.addVectors(Ei.max,Oa.max),Ei.expandByPoint(On)):(Ei.expandByPoint(Oa.min),Ei.expandByPoint(Oa.max))}Ei.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)On.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(On));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,p=a.count;u<p;u++)On.fromBufferAttribute(a,u),l&&(So.fromBufferAttribute(e,u),On.add(So)),r=Math.max(r,i.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new V,l[k]=new V;const u=new V,p=new V,h=new V,m=new Ke,g=new Ke,w=new Ke,A=new V,x=new V;function f(k,b,S){u.fromBufferAttribute(i,k),p.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),m.fromBufferAttribute(s,k),g.fromBufferAttribute(s,b),w.fromBufferAttribute(s,S),p.sub(u),h.sub(u),g.sub(m),w.sub(m);const z=1/(g.x*w.y-w.x*g.y);isFinite(z)&&(A.copy(p).multiplyScalar(w.y).addScaledVector(h,-g.y).multiplyScalar(z),x.copy(h).multiplyScalar(g.x).addScaledVector(p,-w.x).multiplyScalar(z),a[k].add(A),a[b].add(A),a[S].add(A),l[k].add(x),l[b].add(x),l[S].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,b=_.length;k<b;++k){const S=_[k],z=S.start,Y=S.count;for(let re=z,ce=z+Y;re<ce;re+=3)f(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const y=new V,T=new V,D=new V,N=new V;function U(k){D.fromBufferAttribute(r,k),N.copy(D);const b=a[k];y.copy(b),y.sub(D.multiplyScalar(D.dot(b))).normalize(),T.crossVectors(N,b);const z=T.dot(l[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,z)}for(let k=0,b=_.length;k<b;++k){const S=_[k],z=S.start,Y=S.count;for(let re=z,ce=z+Y;re<ce;re+=3)U(e.getX(re+0)),U(e.getX(re+1)),U(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,p=new V,h=new V;if(e)for(let m=0,g=e.count;m<g;m+=3){const w=e.getX(m+0),A=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,w),s.fromBufferAttribute(n,A),o.fromBufferAttribute(n,x),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),a.fromBufferAttribute(i,w),l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,x),a.add(p),l.add(p),u.add(p),i.setXYZ(w,a.x,a.y,a.z),i.setXYZ(A,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)On.fromBufferAttribute(e,n),On.normalize(),e.setXYZ(n,On.x,On.y,On.z)}toNonIndexed(){function e(a,l){const u=a.array,p=a.itemSize,h=a.normalized,m=new u.constructor(l.length*p);let g=0,w=0;for(let A=0,x=l.length;A<x;A++){a.isInterleavedBufferAttribute?g=l[A]*a.data.stride+a.offset:g=l[A]*p;for(let f=0;f<p;f++)m[w++]=u[g++]}return new tr(m,p,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let p=0,h=u.length;p<h;p++){const m=u[p],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],p=[];for(let h=0,m=u.length;h<m;h++){const g=u[h];p.push(g.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let m=0,g=h.length;m<g;m++)p.push(h[m].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O1=new Zt,Is=new nd,bc=new zl,z1=new V,Ac=new V,Cc=new V,Rc=new V,Hf=new V,Pc=new V,B1=new V,Ic=new V;class B extends wn{constructor(e=new ln,n=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const p=a[l],h=s[l];p!==0&&(Hf.fromBufferAttribute(h,e),o?Pc.addScaledVector(Hf,p):Pc.addScaledVector(Hf.sub(n),p))}n.add(Pc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(bc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(bc,z1)===null||Is.origin.distanceToSquared(z1)>(e.far-e.near)**2))&&(O1.copy(s).invert(),Is.copy(e.ray).applyMatrix4(O1),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Is)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let w=0,A=m.length;w<A;w++){const x=m[w],f=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let T=_,D=y;T<D;T+=3){const N=a.getX(T),U=a.getX(T+1),k=a.getX(T+2);r=Lc(this,f,e,i,u,p,h,N,U,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),A=Math.min(a.count,g.start+g.count);for(let x=w,f=A;x<f;x+=3){const _=a.getX(x),y=a.getX(x+1),T=a.getX(x+2);r=Lc(this,o,e,i,u,p,h,_,y,T),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let w=0,A=m.length;w<A;w++){const x=m[w],f=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let T=_,D=y;T<D;T+=3){const N=T,U=T+1,k=T+2;r=Lc(this,f,e,i,u,p,h,N,U,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let x=w,f=A;x<f;x+=3){const _=x,y=x+1,T=x+2;r=Lc(this,o,e,i,u,p,h,_,y,T),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Fw(t,e,n,i,r,s,o,a){let l;if(e.side===vi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_s,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ic);return u<n.near||u>n.far?null:{distance:u,point:Ic.clone(),object:t}}function Lc(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ac),t.getVertexPosition(l,Cc),t.getVertexPosition(u,Rc);const p=Fw(t,e,n,i,Ac,Cc,Rc,B1);if(p){const h=new V;Oi.getBarycoord(B1,Ac,Cc,Rc,h),r&&(p.uv=Oi.getInterpolatedAttribute(r,a,l,u,h,new Ke)),s&&(p.uv1=Oi.getInterpolatedAttribute(s,a,l,u,h,new Ke)),o&&(p.normal=Oi.getInterpolatedAttribute(o,a,l,u,h,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a,b:l,c:u,normal:new V,materialIndex:0};Oi.getNormal(Ac,Cc,Rc,m.normal),p.face=m,p.barycoord=h}return p}class Xn extends ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],p=[],h=[];let m=0,g=0;w("z","y","x",-1,-1,i,n,e,o,s,0),w("z","y","x",1,-1,i,n,-e,o,s,1),w("x","z","y",1,1,e,i,n,r,o,2),w("x","z","y",1,-1,e,i,-n,r,o,3),w("x","y","z",1,-1,e,n,i,r,s,4),w("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(h,2));function w(A,x,f,_,y,T,D,N,U,k,b){const S=T/U,z=D/k,Y=T/2,re=D/2,ce=N/2,fe=U+1,W=k+1;let te=0,H=0;const se=new V;for(let ue=0;ue<W;ue++){const Re=ue*z-re;for(let ke=0;ke<fe;ke++){const vt=ke*S-Y;se[A]=vt*_,se[x]=Re*y,se[f]=ce,u.push(se.x,se.y,se.z),se[A]=0,se[x]=0,se[f]=N>0?1:-1,p.push(se.x,se.y,se.z),h.push(ke/U),h.push(1-ue/k),te+=1}}for(let ue=0;ue<k;ue++)for(let Re=0;Re<U;Re++){const ke=m+Re+fe*ue,vt=m+Re+fe*(ue+1),ct=m+(Re+1)+fe*(ue+1),Pe=m+(Re+1)+fe*ue;l.push(ke,vt,Pe),l.push(vt,ct,Pe),H+=6}a.addGroup(g,H,b),g+=H,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ni(t){const e={};for(let n=0;n<t.length;n++){const i=aa(t[n]);for(const r in i)e[r]=i[r]}return e}function kw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Ow={clone:aa,merge:ni};var zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zw,this.fragmentShader=Bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hy extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ur,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qr=new V,H1=new Ke,V1=new Ke;class bi extends hy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vp*2*Math.atan(Math.tan(yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,n){return this.getViewBounds(e,H1,V1),n.subVectors(V1,H1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,Eo=1;class Hw extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bi(wo,Eo,e,n);r.layers=this.layers,this.add(r);const s=new bi(wo,Eo,e,n);s.layers=this.layers,this.add(s);const o=new bi(wo,Eo,e,n);o.layers=this.layers,this.add(o);const a=new bi(wo,Eo,e,n);a.layers=this.layers,this.add(a);const l=new bi(wo,Eo,e,n);l.layers=this.layers,this.add(l);const u=new bi(wo,Eo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ur)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,p]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,r),e.render(n,p),e.setRenderTarget(h,m,g),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class py extends si{constructor(e=[],n=ra,i,r,s,o,a,l,u,p){super(e,n,i,r,s,o,a,l,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vw extends no{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new py(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),s=new xs({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:hs});s.uniforms.tEquirect.value=n;const o=new B(r,s),a=n.minFilter;return n.minFilter===js&&(n.minFilter=cr),new Hw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Be extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class Vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,i),f=this._getHandJoint(u,A);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],m=p.position.distanceTo(h.position),g=.02,w=.005;u.inputState.pinching&&m>g+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Qm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=n}clone(){return new Qm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ww extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Xw{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Hp,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new V;class Fu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ti.fromBufferAttribute(this,n),ti.applyMatrix4(e),this.setXYZ(n,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ti.fromBufferAttribute(this,n),ti.applyNormalMatrix(e),this.setXYZ(n,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ti.fromBufferAttribute(this,n),ti.transformDirection(e),this.setXYZ(n,ti.x,ti.y,ti.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=lr(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=lr(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=lr(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=lr(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new tr(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class my extends Nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const za=new V,bo=new V,Ao=new V,Co=new Ke,Ba=new Ke,gy=new Zt,Dc=new V,Ha=new V,Nc=new V,G1=new Ke,Gf=new Ke,W1=new Ke;class X1 extends wn{constructor(e=new my){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new ln;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xw(n,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new Fu(i,3,0,!1)),To.setAttribute("uv",new Fu(i,2,3,!1))}this.geometry=To,this.material=e,this.center=new Ke(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bo.setFromMatrixScale(this.matrixWorld),gy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bo.multiplyScalar(-Ao.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Uc(Dc.set(-.5,-.5,0),Ao,o,bo,r,s),Uc(Ha.set(.5,-.5,0),Ao,o,bo,r,s),Uc(Nc.set(.5,.5,0),Ao,o,bo,r,s),G1.set(0,0),Gf.set(1,0),W1.set(1,1);let a=e.ray.intersectTriangle(Dc,Ha,Nc,!1,za);if(a===null&&(Uc(Ha.set(-.5,.5,0),Ao,o,bo,r,s),Gf.set(0,1),a=e.ray.intersectTriangle(Dc,Nc,Ha,!1,za),a===null))return;const l=e.ray.origin.distanceTo(za);l<e.near||l>e.far||n.push({distance:l,point:za.clone(),uv:Oi.getInterpolation(za,Dc,Ha,Nc,G1,Gf,W1,new Ke),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Uc(t,e,n,i,r,s){Co.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ba.x=s*Co.x-r*Co.y,Ba.y=r*Co.x+s*Co.y):Ba.copy(Co),t.copy(e),t.x+=Ba.x,t.y+=Ba.y,t.applyMatrix4(gy)}const Wf=new V,jw=new V,Yw=new gt;class Os{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wf.subVectors(i,n).cross(jw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Yw.getNormalMatrix(e),r=this.coplanarPoint(Wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new zl,qw=new Ke(.5,.5),Fc=new V;class e0{constructor(e=new Os,n=new Os,i=new Os,r=new Os,s=new Os,o=new Os){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ur,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],p=s[4],h=s[5],m=s[6],g=s[7],w=s[8],A=s[9],x=s[10],f=s[11],_=s[12],y=s[13],T=s[14],D=s[15];if(r[0].setComponents(u-o,g-p,f-w,D-_).normalize(),r[1].setComponents(u+o,g+p,f+w,D+_).normalize(),r[2].setComponents(u+a,g+h,f+A,D+y).normalize(),r[3].setComponents(u-a,g-h,f-A,D-y).normalize(),i)r[4].setComponents(l,m,x,T).normalize(),r[5].setComponents(u-l,g-m,f-x,D-T).normalize();else if(r[4].setComponents(u-l,g-m,f-x,D-T).normalize(),n===ur)r[5].setComponents(u+l,g+m,f+x,D+T).normalize();else if(n===Nu)r[5].setComponents(l,m,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const n=qw.distanceTo(e.center);return Ls.radius=.7071067811865476+n,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fc.x=r.normal.x>0?e.max.x:e.min.x,Fc.y=r.normal.y>0?e.max.y:e.min.y,Fc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gp extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ku=new V,Ou=new V,j1=new Zt,Va=new nd,kc=new zl,Xf=new V,Y1=new V;class q1 extends wn{constructor(e=new ln,n=new Gp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ku.fromBufferAttribute(n,r-1),Ou.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ku.distanceTo(Ou);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;j1.copy(r).invert(),Va.copy(e.ray).applyMatrix4(j1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const g=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let A=g,x=w-1;A<x;A+=u){const f=p.getX(A),_=p.getX(A+1),y=Oc(this,e,Va,l,f,_,A);y&&n.push(y)}if(this.isLineLoop){const A=p.getX(w-1),x=p.getX(g),f=Oc(this,e,Va,l,A,x,w-1);f&&n.push(f)}}else{const g=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let A=g,x=w-1;A<x;A+=u){const f=Oc(this,e,Va,l,A,A+1,A);f&&n.push(f)}if(this.isLineLoop){const A=Oc(this,e,Va,l,w-1,g,w-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(ku.fromBufferAttribute(a,r),Ou.fromBufferAttribute(a,s),n.distanceSqToSegment(ku,Ou,Xf,Y1)>i)return;Xf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Xf);if(!(u<e.near||u>e.far))return{distance:u,point:Y1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class vy extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $1=new Zt,Wp=new nd,zc=new zl,Bc=new V;class $w extends wn{constructor(e=new ln,n=new vy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(r),zc.radius+=s,e.ray.intersectsSphere(zc)===!1)return;$1.copy(r).invert(),Wp.copy(e.ray).applyMatrix4($1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let w=m,A=g;w<A;w++){const x=u.getX(w);Bc.fromBufferAttribute(h,x),K1(Bc,x,l,r,e,n,this)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let w=m,A=g;w<A;w++)Bc.fromBufferAttribute(h,w),K1(Bc,w,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function K1(t,e,n,i,r,s,o){const a=Wp.distanceSqToPoint(t);if(a<n){const l=new V;Wp.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $r extends si{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _y extends si{constructor(e,n,i=to,r,s,o,a=er,l=er,u,p=Cl,h=1){if(p!==Cl&&p!==Rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:h};super(m,r,s,o,a,l,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xy extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class di extends ln{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],p=n/2,h=Math.PI/2*e,m=n,g=2*h+m,w=i*2+s,A=r+1,x=new V,f=new V;for(let _=0;_<=w;_++){let y=0,T=0,D=0,N=0;if(_<=i){const b=_/i,S=b*Math.PI/2;T=-p-e*Math.cos(S),D=e*Math.sin(S),N=-e*Math.cos(S),y=b*h}else if(_<=i+s){const b=(_-i)/s;T=-p+b*n,D=e,N=0,y=h+b*m}else{const b=(_-i-s)/i,S=b*Math.PI/2;T=p+e*Math.sin(S),D=e*Math.cos(S),N=e*Math.sin(S),y=h+m+b*h}const U=Math.max(0,Math.min(1,y/g));let k=0;_===0?k=.5/r:_===w&&(k=-.5/r);for(let b=0;b<=r;b++){const S=b/r,z=S*Math.PI*2,Y=Math.sin(z),re=Math.cos(z);f.x=-D*re,f.y=T,f.z=D*Y,a.push(f.x,f.y,f.z),x.set(-D*re,N,D*Y),x.normalize(),l.push(x.x,x.y,x.z),u.push(S+k,U)}if(_>0){const b=(_-1)*A;for(let S=0;S<r;S++){const z=b+S,Y=b+S+1,re=_*A+S,ce=_*A+S+1;o.push(z,Y,re),o.push(Y,ce,re)}}}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Gn extends ln{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new V,p=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,m=3;h<=n;h++,m+=3){const g=i+h/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),p.x=(o[m]/e+1)/2,p.y=(o[m+1]/e+1)/2,l.push(p.x,p.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class et extends ln{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],m=[],g=[];let w=0;const A=[],x=i/2;let f=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(p),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(g,2));function _(){const T=new V,D=new V;let N=0;const U=(n-e)/i;for(let k=0;k<=s;k++){const b=[],S=k/s,z=S*(n-e)+e;for(let Y=0;Y<=r;Y++){const re=Y/r,ce=re*l+a,fe=Math.sin(ce),W=Math.cos(ce);D.x=z*fe,D.y=-S*i+x,D.z=z*W,h.push(D.x,D.y,D.z),T.set(fe,U,W).normalize(),m.push(T.x,T.y,T.z),g.push(re,1-S),b.push(w++)}A.push(b)}for(let k=0;k<r;k++)for(let b=0;b<s;b++){const S=A[b][k],z=A[b+1][k],Y=A[b+1][k+1],re=A[b][k+1];(e>0||b!==0)&&(p.push(S,z,re),N+=3),(n>0||b!==s-1)&&(p.push(z,Y,re),N+=3)}u.addGroup(f,N,0),f+=N}function y(T){const D=w,N=new Ke,U=new V;let k=0;const b=T===!0?e:n,S=T===!0?1:-1;for(let Y=1;Y<=r;Y++)h.push(0,x*S,0),m.push(0,S,0),g.push(.5,.5),w++;const z=w;for(let Y=0;Y<=r;Y++){const ce=Y/r*l+a,fe=Math.cos(ce),W=Math.sin(ce);U.x=b*W,U.y=x*S,U.z=b*fe,h.push(U.x,U.y,U.z),m.push(0,S,0),N.x=fe*.5+.5,N.y=W*.5*S+.5,g.push(N.x,N.y),w++}for(let Y=0;Y<r;Y++){const re=D+Y,ce=z+Y;T===!0?p.push(ce,ce+1,re):p.push(ce+1,ce,re),k+=3}u.addGroup(f,k,T===!0?1:2),f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mn extends et{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class t0 extends ln{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),p(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new V,T=new V,D=new V;for(let N=0;N<n.length;N+=3)g(n[N+0],y),g(n[N+1],T),g(n[N+2],D),l(y,T,D,_)}function l(_,y,T,D){const N=D+1,U=[];for(let k=0;k<=N;k++){U[k]=[];const b=_.clone().lerp(T,k/N),S=y.clone().lerp(T,k/N),z=N-k;for(let Y=0;Y<=z;Y++)Y===0&&k===N?U[k][Y]=b:U[k][Y]=b.clone().lerp(S,Y/z)}for(let k=0;k<N;k++)for(let b=0;b<2*(N-k)-1;b++){const S=Math.floor(b/2);b%2===0?(m(U[k][S+1]),m(U[k+1][S]),m(U[k][S])):(m(U[k][S+1]),m(U[k+1][S+1]),m(U[k+1][S]))}}function u(_){const y=new V;for(let T=0;T<s.length;T+=3)y.x=s[T+0],y.y=s[T+1],y.z=s[T+2],y.normalize().multiplyScalar(_),s[T+0]=y.x,s[T+1]=y.y,s[T+2]=y.z}function p(){const _=new V;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const T=x(_)/2/Math.PI+.5,D=f(_)/Math.PI+.5;o.push(T,1-D)}w(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],T=o[_+2],D=o[_+4],N=Math.max(y,T,D),U=Math.min(y,T,D);N>.9&&U<.1&&(y<.2&&(o[_+0]+=1),T<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function m(_){s.push(_.x,_.y,_.z)}function g(_,y){const T=_*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function w(){const _=new V,y=new V,T=new V,D=new V,N=new Ke,U=new Ke,k=new Ke;for(let b=0,S=0;b<s.length;b+=9,S+=6){_.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),T.set(s[b+6],s[b+7],s[b+8]),N.set(o[S+0],o[S+1]),U.set(o[S+2],o[S+3]),k.set(o[S+4],o[S+5]),D.copy(_).add(y).add(T).divideScalar(3);const z=x(D);A(N,S+0,_,z),A(U,S+2,y,z),A(k,S+4,T,z)}}function A(_,y,T,D){D<0&&_.x===1&&(o[y]=_.x-1),T.x===0&&T.z===0&&(o[y]=D/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t0(e.vertices,e.indices,e.radius,e.details)}}class en extends t0{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new en(e.radius,e.detail)}}class Ur{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const p=i[r],m=i[r+1]-p,g=(o-p)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ke:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new V,r=[],s=[],o=[],a=new V,l=new Zt;for(let g=0;g<=e;g++){const w=g/e;r[g]=this.getTangentAt(w,new V)}s[0]=new V,o[0]=new V;let u=Number.MAX_VALUE;const p=Math.abs(r[0].x),h=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=u&&(u=p,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const w=Math.acos(St(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,w))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(St(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let w=1;w<=e;w++)s[w].applyMatrix4(l.makeRotationAxis(r[w],g*w)),o[w].crossVectors(r[w],s[w])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yy extends Ur{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ke){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const p=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=l-this.aX,g=u-this.aY;l=m*p-g*h+this.aX,u=m*h+g*p+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kw extends yy{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function n0(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,p,h){let m=(o-s)/u-(a-s)/(u+p)+(a-o)/p,g=(a-o)/p-(l-o)/(p+h)+(l-a)/h;m*=p,g*=p,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Hc=new V,jf=new n0,Yf=new n0,qf=new n0;class Xp extends Ur{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new V){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,p;this.closed||a>0?u=r[(a-1)%s]:(Hc.subVectors(r[0],r[1]).add(r[0]),u=Hc);const h=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?p=r[(a+2)%s]:(Hc.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let w=Math.pow(u.distanceToSquared(h),g),A=Math.pow(h.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(p),g);A<1e-4&&(A=1),w<1e-4&&(w=A),x<1e-4&&(x=A),jf.initNonuniformCatmullRom(u.x,h.x,m.x,p.x,w,A,x),Yf.initNonuniformCatmullRom(u.y,h.y,m.y,p.y,w,A,x),qf.initNonuniformCatmullRom(u.z,h.z,m.z,p.z,w,A,x)}else this.curveType==="catmullrom"&&(jf.initCatmullRom(u.x,h.x,m.x,p.x,this.tension),Yf.initCatmullRom(u.y,h.y,m.y,p.y,this.tension),qf.initCatmullRom(u.z,h.z,m.z,p.z,this.tension));return i.set(jf.calc(l),Yf.calc(l),qf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Z1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Zw(t,e){const n=1-t;return n*n*e}function Jw(t,e){return 2*(1-t)*t*e}function Qw(t,e){return t*t*e}function ol(t,e,n,i){return Zw(t,e)+Jw(t,n)+Qw(t,i)}function eE(t,e){const n=1-t;return n*n*n*e}function tE(t,e){const n=1-t;return 3*n*n*t*e}function nE(t,e){return 3*(1-t)*t*t*e}function iE(t,e){return t*t*t*e}function al(t,e,n,i,r){return eE(t,e)+tE(t,n)+nE(t,i)+iE(t,r)}class rE extends Ur{constructor(e=new Ke,n=new Ke,i=new Ke,r=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(al(e,r.x,s.x,o.x,a.x),al(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sE extends Ur{constructor(e=new V,n=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new V){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(al(e,r.x,s.x,o.x,a.x),al(e,r.y,s.y,o.y,a.y),al(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oE extends Ur{constructor(e=new Ke,n=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ke){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aE extends Ur{constructor(e=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new V){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lE extends Ur{constructor(e=new Ke,n=new Ke,i=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ol(e,r.x,s.x,o.x),ol(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class My extends Ur{constructor(e=new V,n=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new V){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ol(e,r.x,s.x,o.x),ol(e,r.y,s.y,o.y),ol(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cE extends Ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ke){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],p=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Z1(a,l.x,u.x,p.x,h.x),Z1(a,l.y,u.y,p.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ke().fromArray(r))}return this}}var uE=Object.freeze({__proto__:null,ArcCurve:Kw,CatmullRomCurve3:Xp,CubicBezierCurve:rE,CubicBezierCurve3:sE,EllipseCurve:yy,LineCurve:oE,LineCurve3:aE,QuadraticBezierCurve:lE,QuadraticBezierCurve3:My,SplineCurve:cE});class zn extends ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,p=l+1,h=e/a,m=n/l,g=[],w=[],A=[],x=[];for(let f=0;f<p;f++){const _=f*m-o;for(let y=0;y<u;y++){const T=y*h-s;w.push(T,-_,0),A.push(0,0,1),x.push(y/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+u*f,T=_+u*(f+1),D=_+1+u*(f+1),N=_+1+u*f;g.push(y,T,N),g.push(T,D,N)}this.setIndex(g),this.setAttribute("position",new Ct(w,3)),this.setAttribute("normal",new Ct(A,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ht extends ln{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const p=[],h=new V,m=new V,g=[],w=[],A=[],x=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let T=0;f===0&&o===0?T=.5/n:f===i&&l===Math.PI&&(T=-.5/n);for(let D=0;D<=n;D++){const N=D/n;h.x=-e*Math.cos(r+N*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+N*s)*Math.sin(o+y*a),w.push(h.x,h.y,h.z),m.copy(h).normalize(),A.push(m.x,m.y,m.z),x.push(N+T,1-y),_.push(u++)}p.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const y=p[f][_+1],T=p[f][_],D=p[f+1][_],N=p[f+1][_+1];(f!==0||o>0)&&g.push(y,T,N),(f!==i-1||l<Math.PI)&&g.push(T,D,N)}this.setIndex(g),this.setAttribute("position",new Ct(w,3)),this.setAttribute("normal",new Ct(A,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ot extends ln{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],p=new V,h=new V,m=new V;for(let g=0;g<=i;g++)for(let w=0;w<=r;w++){const A=w/r*s,x=g/i*Math.PI*2;h.x=(e+n*Math.cos(x))*Math.cos(A),h.y=(e+n*Math.cos(x))*Math.sin(A),h.z=n*Math.sin(x),a.push(h.x,h.y,h.z),p.x=e*Math.cos(A),p.y=e*Math.sin(A),m.subVectors(h,p).normalize(),l.push(m.x,m.y,m.z),u.push(w/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let w=1;w<=r;w++){const A=(r+1)*g+w-1,x=(r+1)*(g-1)+w-1,f=(r+1)*(g-1)+w,_=(r+1)*g+w;o.push(A,x,_),o.push(x,f,_)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ll extends ln{constructor(e=new My(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new V,l=new V,u=new Ke;let p=new V;const h=[],m=[],g=[],w=[];A(),this.setIndex(w),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(g,2));function A(){for(let y=0;y<n;y++)x(y);x(s===!1?n:0),_(),f()}function x(y){p=e.getPointAt(y/n,p);const T=o.normals[y],D=o.binormals[y];for(let N=0;N<=r;N++){const U=N/r*Math.PI*2,k=Math.sin(U),b=-Math.cos(U);l.x=b*T.x+k*D.x,l.y=b*T.y+k*D.y,l.z=b*T.z+k*D.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=p.x+i*l.x,a.y=p.y+i*l.y,a.z=p.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=n;y++)for(let T=1;T<=r;T++){const D=(r+1)*(y-1)+(T-1),N=(r+1)*y+(T-1),U=(r+1)*y+T,k=(r+1)*(y-1)+T;w.push(D,N,k),w.push(N,U,k)}}function _(){for(let y=0;y<=n;y++)for(let T=0;T<=r;T++)u.x=y/n,u.y=T/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new uE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class we extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $f extends Nr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dE extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class i0 extends wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class hE extends i0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Kf=new Zt,J1=new V,Q1=new V;class Sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=hr,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new e0,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;J1.setFromMatrixPosition(e.matrixWorld),n.position.copy(J1),Q1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Q1),n.updateMatrixWorld(),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ev=new Zt,Ga=new V,Zf=new V;class pE extends Sy{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ga),Zf.copy(i.position),Zf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zf),i.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),ev.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ev,i.coordinateSystem,i.reversedDepth)}}class Yi extends i0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wy extends hy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mE extends Sy{constructor(){super(new wy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tv extends i0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gE extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nv=new Zt;class vE{constructor(e,n,i=0,r=1/0){this.ray=new nd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Jm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return nv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nv),this}intersectObject(e,n=!0,i=[]){return jp(e,this,i,n),i.sort(iv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jp(e[r],this,i,n);return i.sort(iv),i}}function iv(t,e){return t.distance-e.distance}function jp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)jp(s[o],e,n,!0)}}function rv(t,e,n,i){const r=_E(i);switch(n){case ny:return t*e;case ry:return t*e/r.components*r.byteLength;case Ym:return t*e/r.components*r.byteLength;case sy:return t*e*2/r.components*r.byteLength;case qm:return t*e*2/r.components*r.byteLength;case iy:return t*e*3/r.components*r.byteLength;case Zi:return t*e*4/r.components*r.byteLength;case $m:return t*e*4/r.components*r.byteLength;case ru:case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(t,16)*Math.max(e,8)/4;case hp:case mp:return Math.max(t,8)*Math.max(e,8)/2;case vp:case _p:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Np:case Up:case Fp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kp:case Op:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zp:case Bp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _E(t){switch(t){case hr:case Jx:return{byteLength:1,components:1};case bl:case Qx:case Fl:return{byteLength:2,components:1};case Xm:case jm:return{byteLength:2,components:4};case to:case Wm:case br:return{byteLength:4,components:1};case ey:case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ey(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xE(t){const e=new WeakMap;function n(a,l){const u=a.array,p=a.usage,h=u.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,u,p),a.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const p=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,p);else{h.sort((g,w)=>g.start-w.start);let m=0;for(let g=1;g<h.length;g++){const w=h[m],A=h[g];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++m,h[m]=A)}h.length=m+1;for(let g=0,w=h.length;g<w;g++){const A=h[g];t.bufferSubData(u,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ME=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e3=`#ifdef USE_ENVMAP
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
#endif`,t3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
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
#endif`,i3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a3=`#ifdef USE_GRADIENTMAP
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
}`,l3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d3=`uniform bool receiveShadow;
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
#endif`,f3=`#ifdef USE_ENVMAP
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
#endif`,h3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v3=`PhysicalMaterial material;
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
#endif`,_3=`struct PhysicalMaterial {
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
}`,x3=`
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
#endif`,y3=`#if defined( RE_IndirectDiffuse )
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
#endif`,M3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R3=`#if defined( USE_POINTS_UV )
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
#endif`,P3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U3=`#ifdef USE_MORPHTARGETS
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
#endif`,F3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V3=`#ifdef USE_NORMALMAP
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
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rT=`float getShadowMask() {
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
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,bT=`#if DEPTH_PACKING == 3200
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
}`,AT=`#define DISTANCE
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
}`,CT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
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
}`,LT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,NT=`uniform vec3 diffuse;
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
}`,UT=`#define LAMBERT
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
}`,FT=`#define LAMBERT
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
}`,kT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,zT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,HT=`#define PHONG
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
}`,VT=`#define PHONG
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
}`,GT=`#define STANDARD
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
}`,WT=`#define STANDARD
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
}`,XT=`#define TOON
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
}`,jT=`#define TOON
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
}`,YT=`uniform float size;
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
}`,qT=`uniform vec3 diffuse;
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
}`,$T=`#include <common>
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
}`,KT=`uniform vec3 color;
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
}`,ZT=`uniform float rotation;
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
}`,JT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:yE,alphahash_pars_fragment:ME,alphamap_fragment:SE,alphamap_pars_fragment:wE,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:bE,aomap_pars_fragment:AE,batching_pars_vertex:CE,batching_vertex:RE,begin_vertex:PE,beginnormal_vertex:IE,bsdfs:LE,iridescence_fragment:DE,bumpmap_pars_fragment:NE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:kE,clipping_planes_vertex:OE,color_fragment:zE,color_pars_fragment:BE,color_pars_vertex:HE,color_vertex:VE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:jE,displacementmap_vertex:YE,emissivemap_fragment:qE,emissivemap_pars_fragment:$E,colorspace_fragment:KE,colorspace_pars_fragment:ZE,envmap_fragment:JE,envmap_common_pars_fragment:QE,envmap_pars_fragment:e3,envmap_pars_vertex:t3,envmap_physical_pars_fragment:f3,envmap_vertex:n3,fog_vertex:i3,fog_pars_vertex:r3,fog_fragment:s3,fog_pars_fragment:o3,gradientmap_pars_fragment:a3,lightmap_pars_fragment:l3,lights_lambert_fragment:c3,lights_lambert_pars_fragment:u3,lights_pars_begin:d3,lights_toon_fragment:h3,lights_toon_pars_fragment:p3,lights_phong_fragment:m3,lights_phong_pars_fragment:g3,lights_physical_fragment:v3,lights_physical_pars_fragment:_3,lights_fragment_begin:x3,lights_fragment_maps:y3,lights_fragment_end:M3,logdepthbuf_fragment:S3,logdepthbuf_pars_fragment:w3,logdepthbuf_pars_vertex:E3,logdepthbuf_vertex:T3,map_fragment:b3,map_pars_fragment:A3,map_particle_fragment:C3,map_particle_pars_fragment:R3,metalnessmap_fragment:P3,metalnessmap_pars_fragment:I3,morphinstance_vertex:L3,morphcolor_vertex:D3,morphnormal_vertex:N3,morphtarget_pars_vertex:U3,morphtarget_vertex:F3,normal_fragment_begin:k3,normal_fragment_maps:O3,normal_pars_fragment:z3,normal_pars_vertex:B3,normal_vertex:H3,normalmap_pars_fragment:V3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:W3,clearcoat_pars_fragment:X3,iridescence_pars_fragment:j3,opaque_fragment:Y3,packing:q3,premultiplied_alpha_fragment:$3,project_vertex:K3,dithering_fragment:Z3,dithering_pars_fragment:J3,roughnessmap_fragment:Q3,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:rT,skinbase_vertex:sT,skinning_pars_vertex:oT,skinning_vertex:aT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:dT,tonemapping_pars_fragment:fT,transmission_fragment:hT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:_T,background_vert:xT,background_frag:yT,backgroundCube_vert:MT,backgroundCube_frag:ST,cube_vert:wT,cube_frag:ET,depth_vert:TT,depth_frag:bT,distanceRGBA_vert:AT,distanceRGBA_frag:CT,equirect_vert:RT,equirect_frag:PT,linedashed_vert:IT,linedashed_frag:LT,meshbasic_vert:DT,meshbasic_frag:NT,meshlambert_vert:UT,meshlambert_frag:FT,meshmatcap_vert:kT,meshmatcap_frag:OT,meshnormal_vert:zT,meshnormal_frag:BT,meshphong_vert:HT,meshphong_frag:VT,meshphysical_vert:GT,meshphysical_frag:WT,meshtoon_vert:XT,meshtoon_frag:jT,points_vert:YT,points_frag:qT,shadow_vert:$T,shadow_frag:KT,sprite_vert:ZT,sprite_frag:JT},Ue={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},or={basic:{uniforms:ni([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:ni([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:ni([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:ni([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:ni([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:ni([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:ni([Ue.points,Ue.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:ni([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:ni([Ue.common,Ue.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:ni([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:ni([Ue.sprite,Ue.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:ni([Ue.common,Ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:ni([Ue.lights,Ue.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};or.physical={uniforms:ni([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Vc={r:0,b:0,g:0},Ds=new ir,QT=new Zt;function e5(t,e,n,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,u,p,h=null,m=0,g=null;function w(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?n:e).get(T)),T}function A(y){let T=!1;const D=w(y);D===null?f(a,l):D&&D.isColor&&(f(D,1),T=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,T){const D=w(T);D&&(D.isCubeTexture||D.mapping===td)?(p===void 0&&(p=new B(new Xn(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:aa(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Ds.copy(T.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(Ds)),p.material.toneMapped=Dt.getTransfer(D.colorSpace)!==jt,(h!==D||m!==D.version||g!==t.toneMapping)&&(p.material.needsUpdate=!0,h=D,m=D.version,g=t.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new B(new zn(2,2),new xs({name:"BackgroundMaterial",uniforms:aa(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Dt.getTransfer(D.colorSpace)!==jt,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||m!==D.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=D,m=D.version,g=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,T){y.getRGB(Vc,fy(t)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,T,o)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),l=T,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:A,addToRenderList:x,dispose:_}}function t5(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(S,z,Y,re,ce){let fe=!1;const W=h(re,Y,z);s!==W&&(s=W,u(s.object)),fe=g(S,re,Y,ce),fe&&w(S,re,Y,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,T(S,z,Y,re),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function p(S){return t.deleteVertexArray(S)}function h(S,z,Y){const re=Y.wireframe===!0;let ce=i[S.id];ce===void 0&&(ce={},i[S.id]=ce);let fe=ce[z.id];fe===void 0&&(fe={},ce[z.id]=fe);let W=fe[re];return W===void 0&&(W=m(l()),fe[re]=W),W}function m(S){const z=[],Y=[],re=[];for(let ce=0;ce<n;ce++)z[ce]=0,Y[ce]=0,re[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:re,object:S,attributes:{},index:null}}function g(S,z,Y,re){const ce=s.attributes,fe=z.attributes;let W=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){const ue=ce[H];let Re=fe[H];if(Re===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),ue===void 0||ue.attribute!==Re||Re&&ue.data!==Re.data)return!0;W++}return s.attributesNum!==W||s.index!==re}function w(S,z,Y,re){const ce={},fe=z.attributes;let W=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){let ue=fe[H];ue===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const Re={};Re.attribute=ue,ue&&ue.data&&(Re.data=ue.data),ce[H]=Re,W++}s.attributes=ce,s.attributesNum=W,s.index=re}function A(){const S=s.newAttributes;for(let z=0,Y=S.length;z<Y;z++)S[z]=0}function x(S){f(S,0)}function f(S,z){const Y=s.newAttributes,re=s.enabledAttributes,ce=s.attributeDivisors;Y[S]=1,re[S]===0&&(t.enableVertexAttribArray(S),re[S]=1),ce[S]!==z&&(t.vertexAttribDivisor(S,z),ce[S]=z)}function _(){const S=s.newAttributes,z=s.enabledAttributes;for(let Y=0,re=z.length;Y<re;Y++)z[Y]!==S[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function y(S,z,Y,re,ce,fe,W){W===!0?t.vertexAttribIPointer(S,z,Y,ce,fe):t.vertexAttribPointer(S,z,Y,re,ce,fe)}function T(S,z,Y,re){A();const ce=re.attributes,fe=Y.getAttributes(),W=z.defaultAttributeValues;for(const te in fe){const H=fe[te];if(H.location>=0){let se=ce[te];if(se===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const ue=se.normalized,Re=se.itemSize,ke=e.get(se);if(ke===void 0)continue;const vt=ke.buffer,ct=ke.type,Pe=ke.bytesPerElement,pe=ct===t.INT||ct===t.UNSIGNED_INT||se.gpuType===Wm;if(se.isInterleavedBufferAttribute){const ve=se.data,Ve=ve.stride,rt=se.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<H.locationSize;qe++)f(H.location+qe,ve.meshPerAttribute);S.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<H.locationSize;qe++)x(H.location+qe);t.bindBuffer(t.ARRAY_BUFFER,vt);for(let qe=0;qe<H.locationSize;qe++)y(H.location+qe,Re/H.locationSize,ct,ue,Ve*Pe,(rt+Re/H.locationSize*qe)*Pe,pe)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)f(H.location+ve,se.meshPerAttribute);S.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<H.locationSize;ve++)x(H.location+ve);t.bindBuffer(t.ARRAY_BUFFER,vt);for(let ve=0;ve<H.locationSize;ve++)y(H.location+ve,Re/H.locationSize,ct,ue,Re*Pe,Re/H.locationSize*ve*Pe,pe)}}else if(W!==void 0){const ue=W[te];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}_()}function D(){k();for(const S in i){const z=i[S];for(const Y in z){const re=z[Y];for(const ce in re)p(re[ce].object),delete re[ce];delete z[Y]}delete i[S]}}function N(S){if(i[S.id]===void 0)return;const z=i[S.id];for(const Y in z){const re=z[Y];for(const ce in re)p(re[ce].object),delete re[ce];delete z[Y]}delete i[S.id]}function U(S){for(const z in i){const Y=i[z];if(Y[S.id]===void 0)continue;const re=Y[S.id];for(const ce in re)p(re[ce].object),delete re[ce];delete Y[S.id]}}function k(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:x,disableUnusedAttributes:_}}function n5(t,e,n){let i;function r(u){i=u}function s(u,p){t.drawArrays(i,u,p),n.update(p,i,1)}function o(u,p,h){h!==0&&(t.drawArraysInstanced(i,u,p,h),n.update(p,i,h))}function a(u,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,p,0,h);let g=0;for(let w=0;w<h;w++)g+=p[w];n.update(g,i,1)}function l(u,p,h,m){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let w=0;w<u.length;w++)o(u[w],p[w],m[w]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,p,0,m,0,h);let w=0;for(let A=0;A<h;A++)w+=p[A]*m[A];n.update(w,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i5(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Zi&&i.convert(U)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const k=U===Fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==hr&&i.convert(U)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==br&&!k)}function l(U){if(U==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=w>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:D,maxSamples:N}}function r5(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Os,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const g=h.length!==0||m||i!==0||r;return r=m,i=h.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){n=p(h,m,0)},this.setState=function(h,m,g){const w=h.clippingPlanes,A=h.clipIntersection,x=h.clipShadows,f=t.get(h);if(!r||w===null||w.length===0||s&&!x)s?p(null):u();else{const _=s?0:i,y=_*4;let T=f.clippingState||null;l.value=T,T=p(w,m,y,g);for(let D=0;D!==y;++D)T[D]=n[D];f.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,m,g,w){const A=h!==null?h.length:0;let x=null;if(A!==0){if(x=l.value,w!==!0||x===null){const f=g+A*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<f)&&(x=new Float32Array(f));for(let y=0,T=g;y!==A;++y,T+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(x,T),x[T+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function s5(t){let e=new WeakMap;function n(o,a){return a===up?o.mapping=ra:a===dp&&(o.mapping=sa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===up||a===dp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Vw(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Vo=4,sv=[.125,.215,.35,.446,.526,.582],Hs=20,Jf=new wy,ov=new yt;let Qf=null,eh=0,th=0,nh=!1;const zs=(1+Math.sqrt(5))/2,Ro=1/zs,av=[new V(-zs,Ro,0),new V(zs,Ro,0),new V(-Ro,0,zs),new V(Ro,0,zs),new V(0,zs,-Ro),new V(0,zs,Ro),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],o5=new V;class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=o5}=s;Qf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cr,minFilter:cr,generateMipmaps:!1,type:Fl,format:Zi,colorSpace:oa,depthBuffer:!1},r=cv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a5(s)),this._blurMaterial=l5(s,e,n)}return r}_compileMaterial(e){const n=new B(this._lodPlanes[0],e);this._renderer.compile(n,Jf)}_sceneToCubeUV(e,n,i,r,s){const l=new bi(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(ov),h.toneMapping=ps,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const A=new At({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1}),x=new B(new Xn,A);let f=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,f=!0):(A.color.copy(ov),f=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[y],s.y,s.z)):T===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[y]));const D=this._cubeSize;Gc(r,T*D,y>2?D:0,D,D),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ra||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=av[(r-s-1)%av.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,h=new B(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hs-1),A=s/w,x=isFinite(s)?1+Math.floor(p*A):Hs;x>Hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hs}`);const f=[];let _=0;for(let U=0;U<Hs;++U){const k=U/A,b=Math.exp(-k*k/2);f.push(b),U===0?_+=b:U<x&&(_+=2*b)}for(let U=0;U<f.length;U++)f[U]=f[U]/_;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=w,m.mipInt.value=y-i;const T=this._sizeLods[r],D=3*T*(r>y-Vo?r-y+Vo:0),N=4*(this._cubeSize-T);Gc(n,D,N,3*T,2*T),l.setRenderTarget(n),l.render(h,Jf)}}function a5(t){const e=[],n=[],i=[];let r=t;const s=t-Vo+1+sv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vo?l=sv[o-t+Vo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),p=-u,h=1+u,m=[p,p,h,p,h,h,p,p,h,h,p,h],g=6,w=6,A=3,x=2,f=1,_=new Float32Array(A*w*g),y=new Float32Array(x*w*g),T=new Float32Array(f*w*g);for(let N=0;N<g;N++){const U=N%3*2/3-1,k=N>2?0:-1,b=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];_.set(b,A*w*N),y.set(m,x*w*N);const S=[N,N,N,N,N,N];T.set(S,f*w*N)}const D=new ln;D.setAttribute("position",new tr(_,A)),D.setAttribute("uv",new tr(y,x)),D.setAttribute("faceIndex",new tr(T,f)),e.push(D),r>Vo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cv(t,e,n){const i=new no(t,e,n);return i.texture.mapping=td,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function l5(t,e,n){const i=new Float32Array(Hs),r=new V(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:r0(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function uv(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:r0(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function dv(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:r0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function r0(){return`

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
	`}function c5(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===up||l===dp,p=l===ra||l===sa;if(u||p){let h=e.get(a);const m=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new lv(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return u&&g&&g.height>0||p&&g&&r(g)?(n===null&&(n=new lv(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let p=0;p<u;p++)a[p]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function u5(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d5(t,e,n,i){const r={},s=new WeakMap;function o(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(h,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(h){const m=h.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function u(h){const m=[],g=h.index,w=h.attributes.position;let A=0;if(g!==null){const _=g.array;A=g.version;for(let y=0,T=_.length;y<T;y+=3){const D=_[y+0],N=_[y+1],U=_[y+2];m.push(D,N,N,U,U,D)}}else if(w!==void 0){const _=w.array;A=w.version;for(let y=0,T=_.length/3-1;y<T;y+=3){const D=y+0,N=y+1,U=y+2;m.push(D,N,N,U,U,D)}}else return;const x=new(ay(m)?dy:uy)(m,1);x.version=A;const f=s.get(h);f&&e.remove(f),s.set(h,x)}function p(h){const m=s.get(h);if(m){const g=h.index;g!==null&&m.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:p}}function f5(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function u(m,g,w){w!==0&&(t.drawElementsInstanced(i,g,s,m*o,w),n.update(g,i,w))}function p(m,g,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,w);let x=0;for(let f=0;f<w;f++)x+=g[f];n.update(x,i,1)}function h(m,g,w,A){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<m.length;f++)u(m[f]/o,g[f],A[f]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,A,0,w);let f=0;for(let _=0;_<w;_++)f+=g[_]*A[_];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function h5(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function p5(t,e,n){const i=new WeakMap,r=new qt;function s(o,a,l){const u=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=p!==void 0?p.length:0;let m=i.get(a);if(m===void 0||m.count!==h){let S=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;m!==void 0&&m.texture.dispose();const w=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;w===!0&&(T=1),A===!0&&(T=2),x===!0&&(T=3);let D=a.attributes.position.count*T,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const U=new Float32Array(D*N*4*h),k=new ly(U,D,N,h);k.type=br,k.needsUpdate=!0;const b=T*4;for(let z=0;z<h;z++){const Y=f[z],re=_[z],ce=y[z],fe=D*N*4*z;for(let W=0;W<Y.count;W++){const te=W*b;w===!0&&(r.fromBufferAttribute(Y,W),U[fe+te+0]=r.x,U[fe+te+1]=r.y,U[fe+te+2]=r.z,U[fe+te+3]=0),A===!0&&(r.fromBufferAttribute(re,W),U[fe+te+4]=r.x,U[fe+te+5]=r.y,U[fe+te+6]=r.z,U[fe+te+7]=0),x===!0&&(r.fromBufferAttribute(ce,W),U[fe+te+8]=r.x,U[fe+te+9]=r.y,U[fe+te+10]=r.z,U[fe+te+11]=ce.itemSize===4?r.w:1)}}m={count:h,texture:k,size:new Ke(D,N)},i.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let w=0;for(let x=0;x<u.length;x++)w+=u[x];const A=a.morphTargetsRelative?1:1-w;l.getUniforms().setValue(t,"morphTargetBaseInfluence",A),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function m5(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Ty=new si,fv=new _y(1,1),by=new ly,Ay=new Tw,Cy=new py,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),vv=new Float32Array(4);function fa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hv[r];if(s===void 0&&(s=new Float32Array(r),hv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function id(t,e){let n=pv[e];n===void 0&&(n=new Int32Array(e),pv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function g5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function v5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;t.uniform2fv(this.addr,e),Nn(n,e)}}function _5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;t.uniform3fv(this.addr,e),Nn(n,e)}}function x5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;t.uniform4fv(this.addr,e),Nn(n,e)}}function y5(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,i))return;vv.set(i),t.uniformMatrix2fv(this.addr,!1,vv),Nn(n,i)}}function M5(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,i))return;gv.set(i),t.uniformMatrix3fv(this.addr,!1,gv),Nn(n,i)}}function S5(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,i))return;mv.set(i),t.uniformMatrix4fv(this.addr,!1,mv),Nn(n,i)}}function w5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function E5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;t.uniform2iv(this.addr,e),Nn(n,e)}}function T5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;t.uniform3iv(this.addr,e),Nn(n,e)}}function b5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;t.uniform4iv(this.addr,e),Nn(n,e)}}function A5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function C5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;t.uniform2uiv(this.addr,e),Nn(n,e)}}function R5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;t.uniform3uiv(this.addr,e),Nn(n,e)}}function P5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;t.uniform4uiv(this.addr,e),Nn(n,e)}}function I5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fv.compareFunction=oy,s=fv):s=Ty,n.setTexture2D(e||s,r)}function L5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ay,r)}function D5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cy,r)}function N5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||by,r)}function U5(t){switch(t){case 5126:return g5;case 35664:return v5;case 35665:return _5;case 35666:return x5;case 35674:return y5;case 35675:return M5;case 35676:return S5;case 5124:case 35670:return w5;case 35667:case 35671:return E5;case 35668:case 35672:return T5;case 35669:case 35673:return b5;case 5125:return A5;case 36294:return C5;case 36295:return R5;case 36296:return P5;case 35678:case 36198:case 36298:case 36306:case 35682:return I5;case 35679:case 36299:case 36307:return L5;case 35680:case 36300:case 36308:case 36293:return D5;case 36289:case 36303:case 36311:case 36292:return N5}}function F5(t,e){t.uniform1fv(this.addr,e)}function k5(t,e){const n=fa(e,this.size,2);t.uniform2fv(this.addr,n)}function O5(t,e){const n=fa(e,this.size,3);t.uniform3fv(this.addr,n)}function z5(t,e){const n=fa(e,this.size,4);t.uniform4fv(this.addr,n)}function B5(t,e){const n=fa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function H5(t,e){const n=fa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function V5(t,e){const n=fa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function G5(t,e){t.uniform1iv(this.addr,e)}function W5(t,e){t.uniform2iv(this.addr,e)}function X5(t,e){t.uniform3iv(this.addr,e)}function j5(t,e){t.uniform4iv(this.addr,e)}function Y5(t,e){t.uniform1uiv(this.addr,e)}function q5(t,e){t.uniform2uiv(this.addr,e)}function $5(t,e){t.uniform3uiv(this.addr,e)}function K5(t,e){t.uniform4uiv(this.addr,e)}function Z5(t,e,n){const i=this.cache,r=e.length,s=id(n,r);Dn(i,s)||(t.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ty,s[o])}function J5(t,e,n){const i=this.cache,r=e.length,s=id(n,r);Dn(i,s)||(t.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ay,s[o])}function Q5(t,e,n){const i=this.cache,r=e.length,s=id(n,r);Dn(i,s)||(t.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Cy,s[o])}function eb(t,e,n){const i=this.cache,r=e.length,s=id(n,r);Dn(i,s)||(t.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||by,s[o])}function tb(t){switch(t){case 5126:return F5;case 35664:return k5;case 35665:return O5;case 35666:return z5;case 35674:return B5;case 35675:return H5;case 35676:return V5;case 5124:case 35670:return G5;case 35667:case 35671:return W5;case 35668:case 35672:return X5;case 35669:case 35673:return j5;case 5125:return Y5;case 36294:return q5;case 36295:return $5;case 36296:return K5;case 35678:case 36198:case 36298:case 36306:case 35682:return Z5;case 35679:case 36299:case 36307:return J5;case 35680:case 36300:case 36308:case 36293:return Q5;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U5(n.type)}}class ib{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tb(n.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function _v(t,e){t.seq.push(e),t.map[e.id]=e}function sb(t,e,n){const i=t.name,r=i.length;for(ih.lastIndex=0;;){const s=ih.exec(i),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_v(n,u===void 0?new nb(a,t,e):new ib(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new rb(a),_v(n,h)),n=h}}}class lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ob=37297;let ab=0;function lb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const yv=new gt;function cb(t){Dt._getMatrix(yv,Dt.workingColorSpace,t);const e=`mat3( ${yv.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case Du:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+lb(t.getShaderSource(e),a)}else return s}function ub(t,e){const n=cb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function db(t,e){let n;switch(e){case ew:n="Linear";break;case tw:n="Reinhard";break;case nw:n="Cineon";break;case Kx:n="ACESFilmic";break;case rw:n="AgX";break;case sw:n="Neutral";break;case iw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wc=new V;function fb(){Dt.getLuminanceCoefficients(Wc);const t=Wc.x.toFixed(4),e=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function pb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ka(t){return t!==""}function Sv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(t){return t.replace(gb,_b)}const vb=new Map;function _b(t,e){let n=_t[e];if(n===void 0){const i=vb.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yp(n)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(t){return t.replace(xb,yb)}function yb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Mb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$x?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mr&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case td:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gm:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Mb(n),u=Sb(n),p=wb(n),h=Eb(n),m=Tb(n),g=hb(n),w=pb(s),A=r.createProgram();let x,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ka).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ka).join(`
`),f.length>0&&(f+=`
`)):(x=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),f=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ps?"#define TONE_MAPPING":"",n.toneMapping!==ps?_t.tonemapping_pars_fragment:"",n.toneMapping!==ps?db("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,ub("linearToOutputTexel",n.outputColorSpace),fb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ka).join(`
`)),o=Yp(o),o=Sv(o,n),o=wv(o,n),a=Yp(a),a=Sv(a,n),a=wv(a,n),o=Ev(o),a=Ev(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===T1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+x+o,T=_+f+a,D=xv(r,r.VERTEX_SHADER,y),N=xv(r,r.FRAGMENT_SHADER,T);r.attachShader(A,D),r.attachShader(A,N),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function U(z){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(A)||"",re=r.getShaderInfoLog(D)||"",ce=r.getShaderInfoLog(N)||"",fe=Y.trim(),W=re.trim(),te=ce.trim();let H=!0,se=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,A,D,N);else{const ue=Mv(r,D,"vertex"),Re=Mv(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+fe+`
`+ue+`
`+Re)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(W===""||te==="")&&(se=!1);se&&(z.diagnostics={runnable:H,programLog:fe,vertexShader:{log:W,prefix:x},fragmentShader:{log:te,prefix:f}})}r.deleteShader(D),r.deleteShader(N),k=new lu(r,A),b=mb(r,A)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(A,ob)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=N,this}let Ab=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Rb(e),n.set(e,i)),i}}class Rb{constructor(e){this.id=Ab++,this.code=e,this.usedTimes=0}}function Pb(t,e,n,i,r,s,o){const a=new Jm,l=new Cb,u=new Set,p=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return u.add(b),b===0?"uv":`uv${b}`}function x(b,S,z,Y,re){const ce=Y.fog,fe=re.geometry,W=b.isMeshStandardMaterial?Y.environment:null,te=(b.isMeshStandardMaterial?n:e).get(b.envMap||W),H=te&&te.mapping===td?te.image.height:null,se=w[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Re=ue!==void 0?ue.length:0;let ke=0;fe.morphAttributes.position!==void 0&&(ke=1),fe.morphAttributes.normal!==void 0&&(ke=2),fe.morphAttributes.color!==void 0&&(ke=3);let vt,ct,Pe,pe;if(se){const It=or[se];vt=It.vertexShader,ct=It.fragmentShader}else vt=b.vertexShader,ct=b.fragmentShader,l.update(b),Pe=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const ve=t.getRenderTarget(),Ve=t.state.buffers.depth.getReversed(),rt=re.isInstancedMesh===!0,qe=re.isBatchedMesh===!0,Mt=!!b.map,ot=!!b.matcap,G=!!te,xt=!!b.aoMap,at=!!b.lightMap,it=!!b.bumpMap,X=!!b.normalMap,Le=!!b.displacementMap,de=!!b.emissiveMap,he=!!b.metalnessMap,tt=!!b.roughnessMap,be=b.anisotropy>0,P=b.clearcoat>0,M=b.dispersion>0,ne=b.iridescence>0,le=b.sheen>0,xe=b.transmission>0,ie=be&&!!b.anisotropyMap,Fe=P&&!!b.clearcoatMap,Ae=P&&!!b.clearcoatNormalMap,Ze=P&&!!b.clearcoatRoughnessMap,Je=ne&&!!b.iridescenceMap,Te=ne&&!!b.iridescenceThicknessMap,Ie=le&&!!b.sheenColorMap,Oe=le&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,De=!!b.specularColorMap,ut=!!b.specularIntensityMap,Z=xe&&!!b.transmissionMap,Ce=xe&&!!b.thicknessMap,_e=!!b.gradientMap,Ge=!!b.alphaMap,Me=b.alphaTest>0,me=!!b.alphaHash,je=!!b.extensions;let dt=ps;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(dt=t.toneMapping);const Ht={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:vt,fragmentShader:ct,defines:b.defines,customVertexShaderID:Pe,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:qe,batchingColor:qe&&re._colorsTexture!==null,instancing:rt,instancingColor:rt&&re.instanceColor!==null,instancingMorph:rt&&re.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:oa,alphaToCoverage:!!b.alphaToCoverage,map:Mt,matcap:ot,envMap:G,envMapMode:G&&te.mapping,envMapCubeUVHeight:H,aoMap:xt,lightMap:at,bumpMap:it,normalMap:X,displacementMap:m&&Le,emissiveMap:de,normalMapObjectSpace:X&&b.normalMapType===cw,normalMapTangentSpace:X&&b.normalMapType===Km,metalnessMap:he,roughnessMap:tt,anisotropy:be,anisotropyMap:ie,clearcoat:P,clearcoatMap:Fe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ze,dispersion:M,iridescence:ne,iridescenceMap:Je,iridescenceThicknessMap:Te,sheen:le,sheenColorMap:Ie,sheenRoughnessMap:Oe,specularMap:Qe,specularColorMap:De,specularIntensityMap:ut,transmission:xe,transmissionMap:Z,thicknessMap:Ce,gradientMap:_e,opaque:b.transparent===!1&&b.blending===$s&&b.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Me,alphaHash:me,combine:b.combine,mapUv:Mt&&A(b.map.channel),aoMapUv:xt&&A(b.aoMap.channel),lightMapUv:at&&A(b.lightMap.channel),bumpMapUv:it&&A(b.bumpMap.channel),normalMapUv:X&&A(b.normalMap.channel),displacementMapUv:Le&&A(b.displacementMap.channel),emissiveMapUv:de&&A(b.emissiveMap.channel),metalnessMapUv:he&&A(b.metalnessMap.channel),roughnessMapUv:tt&&A(b.roughnessMap.channel),anisotropyMapUv:ie&&A(b.anisotropyMap.channel),clearcoatMapUv:Fe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&A(b.sheenRoughnessMap.channel),specularMapUv:Qe&&A(b.specularMap.channel),specularColorMapUv:De&&A(b.specularColorMap.channel),specularIntensityMapUv:ut&&A(b.specularIntensityMap.channel),transmissionMapUv:Z&&A(b.transmissionMap.channel),thicknessMapUv:Ce&&A(b.thicknessMap.channel),alphaMapUv:Ge&&A(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(X||be),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!fe.attributes.uv&&(Mt||Ge),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ve,skinning:re.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,decodeVideoTexture:Mt&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===jt,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(b.emissiveMap.colorSpace)===jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xt,flipSided:b.side===vi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:je&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&b.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)S.push(z),S.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(_(S,b),y(S,b),S.push(t.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){const S=w[b.type];let z;if(S){const Y=or[S];z=Ow.clone(Y.uniforms)}else z=b.uniforms;return z}function D(b,S){let z;for(let Y=0,re=p.length;Y<re;Y++){const ce=p[Y];if(ce.cacheKey===S){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new bb(t,S,b,s),p.push(z)),z}function N(b){if(--b.usedTimes===0){const S=p.indexOf(b);p[S]=p[p.length-1],p.pop(),b.destroy()}}function U(b){l.remove(b)}function k(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:N,releaseShaderCache:U,programs:p,dispose:k}}function Ib(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Lb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Av(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,m,g,w,A,x){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:m,material:g,groupOrder:w,renderOrder:h.renderOrder,z:A,group:x},t[e]=f):(f.id=h.id,f.object=h,f.geometry=m,f.material=g,f.groupOrder=w,f.renderOrder=h.renderOrder,f.z=A,f.group=x),e++,f}function a(h,m,g,w,A,x){const f=o(h,m,g,w,A,x);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(h,m,g,w,A,x){const f=o(h,m,g,w,A,x);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,m){n.length>1&&n.sort(h||Lb),i.length>1&&i.sort(m||bv),r.length>1&&r.sort(m||bv)}function p(){for(let h=e,m=t.length;h<m;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:p,sort:u}}function Db(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Av,t.set(i,[o])):r>=s.length?(o=new Av,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new yt};break;case"SpotLight":n={position:new V,direction:new V,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Ub(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Fb=0;function kb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ob(t){const e=new Nb,n=Ub(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Zt,o=new Zt;function a(u){let p=0,h=0,m=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,w=0,A=0,x=0,f=0,_=0,y=0,T=0,D=0,N=0,U=0;u.sort(kb);for(let b=0,S=u.length;b<S;b++){const z=u[b],Y=z.color,re=z.intensity,ce=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Y.r*re,h+=Y.g*re,m+=Y.b*re;else if(z.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(z.sh.coefficients[W],re);U++}else if(z.isDirectionalLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const te=z.shadow,H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=z.shadow.matrix,_++}i.directional[g]=W,g++}else if(z.isSpotLight){const W=e.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(Y).multiplyScalar(re),W.distance=ce,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,i.spot[A]=W;const te=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,te.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[A]=te.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[A]=H,i.spotShadowMap[A]=fe,T++}A++}else if(z.isRectAreaLight){const W=e.get(z);W.color.copy(Y).multiplyScalar(re),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=W,x++}else if(z.isPointLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){const te=z.shadow,H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[w]=H,i.pointShadowMap[w]=fe,i.pointShadowMatrix[w]=z.shadow.matrix,y++}i.point[w]=W,w++}else if(z.isHemisphereLight){const W=e.get(z);W.skyColor.copy(z.color).multiplyScalar(re),W.groundColor.copy(z.groundColor).multiplyScalar(re),i.hemi[f]=W,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=m;const k=i.hash;(k.directionalLength!==g||k.pointLength!==w||k.spotLength!==A||k.rectAreaLength!==x||k.hemiLength!==f||k.numDirectionalShadows!==_||k.numPointShadows!==y||k.numSpotShadows!==T||k.numSpotMaps!==D||k.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=A,i.rectArea.length=x,i.point.length=w,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+D-N,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,k.directionalLength=g,k.pointLength=w,k.spotLength=A,k.rectAreaLength=x,k.hemiLength=f,k.numDirectionalShadows=_,k.numPointShadows=y,k.numSpotShadows=T,k.numSpotMaps=D,k.numLightProbes=U,i.version=Fb++)}function l(u,p){let h=0,m=0,g=0,w=0,A=0;const x=p.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const y=u[f];if(y.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),h++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const T=i.rectArea[w];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),w++}else if(y.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const T=i.hemi[A];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(x),A++}}}return{setup:a,setupView:l,state:i}}function Cv(t){const e=new Ob(t),n=[],i=[];function r(p){u.camera=p,n.length=0,i.length=0}function s(p){n.push(p)}function o(p){i.push(p)}function a(){e.setup(n)}function l(p){e.setupView(n,p)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cv(t),e.set(r,[a])):s>=o.length?(a=new Cv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
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
}`;function Vb(t,e,n){let i=new e0;const r=new Ke,s=new Ke,o=new qt,a=new dE({depthPacking:lw}),l=new fE,u={},p=n.maxTextureSize,h={[_s]:vi,[vi]:_s,[Xt]:Xt},m=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Bb,fragmentShader:Hb}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const w=new ln;w.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new B(w,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qx;let f=this.type;this.render=function(N,U,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(hs),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=f!==Mr&&this.type===Mr,ce=f===Mr&&this.type!==Mr;for(let fe=0,W=N.length;fe<W;fe++){const te=N[fe],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||re===!0||ce===!0){const Re=this.type!==Mr?{minFilter:er,magFilter:er}:{};H.map!==null&&H.map.dispose(),H.map=new no(r.x,r.y,Re),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let Re=0;Re<ue;Re++){const ke=H.getViewport(Re);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),Y.viewport(o),H.updateMatrices(te,Re),i=H.getFrustum(),T(U,k,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===Mr&&_(H,k),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(b,S,z)};function _(N,U){const k=e.update(A);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new no(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(U,null,k,m,A,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(U,null,k,g,A,null)}function y(N,U,k,b){let S=null;const z=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)S=z;else if(S=k.isPointLight===!0?l:a,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=S.uuid,re=U.uuid;let ce=u[Y];ce===void 0&&(ce={},u[Y]=ce);let fe=ce[re];fe===void 0&&(fe=S.clone(),ce[re]=fe,U.addEventListener("dispose",D)),S=fe}if(S.visible=U.visible,S.wireframe=U.wireframe,b===Mr?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:h[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=t.properties.get(S);Y.light=k}return S}function T(N,U,k,b,S){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&S===Mr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const re=e.update(N),ce=N.material;if(Array.isArray(ce)){const fe=re.groups;for(let W=0,te=fe.length;W<te;W++){const H=fe[W],se=ce[H.materialIndex];if(se&&se.visible){const ue=y(N,se,b,S);N.onBeforeShadow(t,N,U,k,re,ue,H),t.renderBufferDirect(k,null,re,ue,N,H),N.onAfterShadow(t,N,U,k,re,ue,H)}}}else if(ce.visible){const fe=y(N,ce,b,S);N.onBeforeShadow(t,N,U,k,re,fe,null),t.renderBufferDirect(k,null,re,fe,N,null),N.onAfterShadow(t,N,U,k,re,fe,null)}}const Y=N.children;for(let re=0,ce=Y.length;re<ce;re++)T(Y[re],U,k,b,S)}function D(N){N.target.removeEventListener("dispose",D);for(const k in u){const b=u[k],S=N.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Gb={[ip]:rp,[sp]:lp,[op]:cp,[ia]:ap,[rp]:ip,[lp]:sp,[cp]:op,[ap]:ia};function Wb(t,e){function n(){let Z=!1;const Ce=new qt;let _e=null;const Ge=new qt(0,0,0,0);return{setMask:function(Me){_e!==Me&&!Z&&(t.colorMask(Me,Me,Me,Me),_e=Me)},setLocked:function(Me){Z=Me},setClear:function(Me,me,je,dt,Ht){Ht===!0&&(Me*=dt,me*=dt,je*=dt),Ce.set(Me,me,je,dt),Ge.equals(Ce)===!1&&(t.clearColor(Me,me,je,dt),Ge.copy(Ce))},reset:function(){Z=!1,_e=null,Ge.set(-1,0,0,0)}}}function i(){let Z=!1,Ce=!1,_e=null,Ge=null,Me=null;return{setReversed:function(me){if(Ce!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ce=me;const dt=Me;Me=null,this.setClear(dt)}},getReversed:function(){return Ce},setTest:function(me){me?ve(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(me){_e!==me&&!Z&&(t.depthMask(me),_e=me)},setFunc:function(me){if(Ce&&(me=Gb[me]),Ge!==me){switch(me){case ip:t.depthFunc(t.NEVER);break;case rp:t.depthFunc(t.ALWAYS);break;case sp:t.depthFunc(t.LESS);break;case ia:t.depthFunc(t.LEQUAL);break;case op:t.depthFunc(t.EQUAL);break;case ap:t.depthFunc(t.GEQUAL);break;case lp:t.depthFunc(t.GREATER);break;case cp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ge=me}},setLocked:function(me){Z=me},setClear:function(me){Me!==me&&(Ce&&(me=1-me),t.clearDepth(me),Me=me)},reset:function(){Z=!1,_e=null,Ge=null,Me=null,Ce=!1}}}function r(){let Z=!1,Ce=null,_e=null,Ge=null,Me=null,me=null,je=null,dt=null,Ht=null;return{setTest:function(It){Z||(It?ve(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(It){Ce!==It&&!Z&&(t.stencilMask(It),Ce=It)},setFunc:function(It,_i,Li){(_e!==It||Ge!==_i||Me!==Li)&&(t.stencilFunc(It,_i,Li),_e=It,Ge=_i,Me=Li)},setOp:function(It,_i,Li){(me!==It||je!==_i||dt!==Li)&&(t.stencilOp(It,_i,Li),me=It,je=_i,dt=Li)},setLocked:function(It){Z=It},setClear:function(It){Ht!==It&&(t.clearStencil(It),Ht=It)},reset:function(){Z=!1,Ce=null,_e=null,Ge=null,Me=null,me=null,je=null,dt=null,Ht=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let p={},h={},m=new WeakMap,g=[],w=null,A=!1,x=null,f=null,_=null,y=null,T=null,D=null,N=null,U=new yt(0,0,0),k=0,b=!1,S=null,z=null,Y=null,re=null,ce=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=te>=2);let se=null,ue={};const Re=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),vt=new qt().fromArray(Re),ct=new qt().fromArray(ke);function Pe(Z,Ce,_e,Ge){const Me=new Uint8Array(4),me=t.createTexture();t.bindTexture(Z,me),t.texParameteri(Z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<_e;je++)Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,Ge,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ce+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return me}const pe={};pe[t.TEXTURE_2D]=Pe(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=Pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=Pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=Pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),o.setFunc(ia),it(!1),X(M1),ve(t.CULL_FACE),xt(hs);function ve(Z){p[Z]!==!0&&(t.enable(Z),p[Z]=!0)}function Ve(Z){p[Z]!==!1&&(t.disable(Z),p[Z]=!1)}function rt(Z,Ce){return h[Z]!==Ce?(t.bindFramebuffer(Z,Ce),h[Z]=Ce,Z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ce),Z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function qe(Z,Ce){let _e=g,Ge=!1;if(Z){_e=m.get(Ce),_e===void 0&&(_e=[],m.set(Ce,_e));const Me=Z.textures;if(_e.length!==Me.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let me=0,je=Me.length;me<je;me++)_e[me]=t.COLOR_ATTACHMENT0+me;_e.length=Me.length,Ge=!0}}else _e[0]!==t.BACK&&(_e[0]=t.BACK,Ge=!0);Ge&&t.drawBuffers(_e)}function Mt(Z){return w!==Z?(t.useProgram(Z),w=Z,!0):!1}const ot={[Bs]:t.FUNC_ADD,[US]:t.FUNC_SUBTRACT,[FS]:t.FUNC_REVERSE_SUBTRACT};ot[kS]=t.MIN,ot[OS]=t.MAX;const G={[zS]:t.ZERO,[BS]:t.ONE,[HS]:t.SRC_COLOR,[tp]:t.SRC_ALPHA,[YS]:t.SRC_ALPHA_SATURATE,[XS]:t.DST_COLOR,[GS]:t.DST_ALPHA,[VS]:t.ONE_MINUS_SRC_COLOR,[np]:t.ONE_MINUS_SRC_ALPHA,[jS]:t.ONE_MINUS_DST_COLOR,[WS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[$S]:t.ONE_MINUS_CONSTANT_COLOR,[KS]:t.CONSTANT_ALPHA,[ZS]:t.ONE_MINUS_CONSTANT_ALPHA};function xt(Z,Ce,_e,Ge,Me,me,je,dt,Ht,It){if(Z===hs){A===!0&&(Ve(t.BLEND),A=!1);return}if(A===!1&&(ve(t.BLEND),A=!0),Z!==NS){if(Z!==x||It!==b){if((f!==Bs||T!==Bs)&&(t.blendEquation(t.FUNC_ADD),f=Bs,T=Bs),It)switch(Z){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFunc(t.ONE,t.ONE);break;case S1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case w1:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case S1:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w1:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,y=null,D=null,N=null,U.set(0,0,0),k=0,x=Z,b=It}return}Me=Me||Ce,me=me||_e,je=je||Ge,(Ce!==f||Me!==T)&&(t.blendEquationSeparate(ot[Ce],ot[Me]),f=Ce,T=Me),(_e!==_||Ge!==y||me!==D||je!==N)&&(t.blendFuncSeparate(G[_e],G[Ge],G[me],G[je]),_=_e,y=Ge,D=me,N=je),(dt.equals(U)===!1||Ht!==k)&&(t.blendColor(dt.r,dt.g,dt.b,Ht),U.copy(dt),k=Ht),x=Z,b=!1}function at(Z,Ce){Z.side===Xt?Ve(t.CULL_FACE):ve(t.CULL_FACE);let _e=Z.side===vi;Ce&&(_e=!_e),it(_e),Z.blending===$s&&Z.transparent===!1?xt(hs):xt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const Ge=Z.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),de(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(Z){S!==Z&&(Z?t.frontFace(t.CW):t.frontFace(t.CCW),S=Z)}function X(Z){Z!==LS?(ve(t.CULL_FACE),Z!==z&&(Z===M1?t.cullFace(t.BACK):Z===DS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),z=Z}function Le(Z){Z!==Y&&(W&&t.lineWidth(Z),Y=Z)}function de(Z,Ce,_e){Z?(ve(t.POLYGON_OFFSET_FILL),(re!==Ce||ce!==_e)&&(t.polygonOffset(Ce,_e),re=Ce,ce=_e)):Ve(t.POLYGON_OFFSET_FILL)}function he(Z){Z?ve(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function tt(Z){Z===void 0&&(Z=t.TEXTURE0+fe-1),se!==Z&&(t.activeTexture(Z),se=Z)}function be(Z,Ce,_e){_e===void 0&&(se===null?_e=t.TEXTURE0+fe-1:_e=se);let Ge=ue[_e];Ge===void 0&&(Ge={type:void 0,texture:void 0},ue[_e]=Ge),(Ge.type!==Z||Ge.texture!==Ce)&&(se!==_e&&(t.activeTexture(_e),se=_e),t.bindTexture(Z,Ce||pe[Z]),Ge.type=Z,Ge.texture=Ce)}function P(){const Z=ue[se];Z!==void 0&&Z.type!==void 0&&(t.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function le(){try{t.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{t.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ie(){try{t.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Fe(){try{t.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ae(){try{t.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ze(){try{t.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Je(){try{t.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Te(){try{t.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ie(Z){vt.equals(Z)===!1&&(t.scissor(Z.x,Z.y,Z.z,Z.w),vt.copy(Z))}function Oe(Z){ct.equals(Z)===!1&&(t.viewport(Z.x,Z.y,Z.z,Z.w),ct.copy(Z))}function Qe(Z,Ce){let _e=u.get(Ce);_e===void 0&&(_e=new WeakMap,u.set(Ce,_e));let Ge=_e.get(Z);Ge===void 0&&(Ge=t.getUniformBlockIndex(Ce,Z.name),_e.set(Z,Ge))}function De(Z,Ce){const Ge=u.get(Ce).get(Z);l.get(Ce)!==Ge&&(t.uniformBlockBinding(Ce,Ge,Z.__bindingPointIndex),l.set(Ce,Ge))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},se=null,ue={},h={},m=new WeakMap,g=[],w=null,A=!1,x=null,f=null,_=null,y=null,T=null,D=null,N=null,U=new yt(0,0,0),k=0,b=!1,S=null,z=null,Y=null,re=null,ce=null,vt.set(0,0,t.canvas.width,t.canvas.height),ct.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Ve,bindFramebuffer:rt,drawBuffers:qe,useProgram:Mt,setBlending:xt,setMaterial:at,setFlipSided:it,setCullFace:X,setLineWidth:Le,setPolygonOffset:de,setScissorTest:he,activeTexture:tt,bindTexture:be,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:ne,texImage2D:Je,texImage3D:Te,updateUBOMapping:Qe,uniformBlockBinding:De,texStorage2D:Ae,texStorage3D:Ze,texSubImage2D:le,texSubImage3D:xe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Fe,scissor:Ie,viewport:Oe,reset:ut}}function Xb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,p=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,M){return g?new OffscreenCanvas(P,M):Uu("canvas")}function A(P,M,ne){let le=1;const xe=be(P);if((xe.width>ne||xe.height>ne)&&(le=ne/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(le*xe.width),Fe=Math.floor(le*xe.height);h===void 0&&(h=w(ie,Fe));const Ae=M?w(ie,Fe):h;return Ae.width=ie,Ae.height=Fe,Ae.getContext("2d").drawImage(P,0,0,ie,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ie+"x"+Fe+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function x(P){return P.generateMipmaps}function f(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,M,ne,le,xe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=M;if(M===t.RED&&(ne===t.FLOAT&&(ie=t.R32F),ne===t.HALF_FLOAT&&(ie=t.R16F),ne===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(ne===t.UNSIGNED_BYTE&&(ie=t.R8UI),ne===t.UNSIGNED_SHORT&&(ie=t.R16UI),ne===t.UNSIGNED_INT&&(ie=t.R32UI),ne===t.BYTE&&(ie=t.R8I),ne===t.SHORT&&(ie=t.R16I),ne===t.INT&&(ie=t.R32I)),M===t.RG&&(ne===t.FLOAT&&(ie=t.RG32F),ne===t.HALF_FLOAT&&(ie=t.RG16F),ne===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(ne===t.UNSIGNED_BYTE&&(ie=t.RG8UI),ne===t.UNSIGNED_SHORT&&(ie=t.RG16UI),ne===t.UNSIGNED_INT&&(ie=t.RG32UI),ne===t.BYTE&&(ie=t.RG8I),ne===t.SHORT&&(ie=t.RG16I),ne===t.INT&&(ie=t.RG32I)),M===t.RGB_INTEGER&&(ne===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),ne===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),ne===t.UNSIGNED_INT&&(ie=t.RGB32UI),ne===t.BYTE&&(ie=t.RGB8I),ne===t.SHORT&&(ie=t.RGB16I),ne===t.INT&&(ie=t.RGB32I)),M===t.RGBA_INTEGER&&(ne===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),ne===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),ne===t.UNSIGNED_INT&&(ie=t.RGBA32UI),ne===t.BYTE&&(ie=t.RGBA8I),ne===t.SHORT&&(ie=t.RGBA16I),ne===t.INT&&(ie=t.RGBA32I)),M===t.RGB&&(ne===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),ne===t.UNSIGNED_INT_10F_11F_11F_REV&&(ie=t.R11F_G11F_B10F)),M===t.RGBA){const Fe=xe?Du:Dt.getTransfer(le);ne===t.FLOAT&&(ie=t.RGBA32F),ne===t.HALF_FLOAT&&(ie=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(ie=Fe===jt?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(P,M){let ne;return P?M===null||M===to||M===Al?ne=t.DEPTH24_STENCIL8:M===br?ne=t.DEPTH32F_STENCIL8:M===bl&&(ne=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===to||M===Al?ne=t.DEPTH_COMPONENT24:M===br?ne=t.DEPTH_COMPONENT32F:M===bl&&(ne=t.DEPTH_COMPONENT16),ne}function D(P,M){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==er&&P.minFilter!==cr?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){const M=P.target;M.removeEventListener("dispose",N),k(M),M.isVideoTexture&&p.delete(M)}function U(P){const M=P.target;M.removeEventListener("dispose",U),S(M)}function k(P){const M=i.get(P);if(M.__webglInit===void 0)return;const ne=P.source,le=m.get(ne);if(le){const xe=le[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(P),Object.keys(le).length===0&&m.delete(ne)}i.remove(P)}function b(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const ne=P.source,le=m.get(ne);delete le[M.__cacheKey],o.memory.textures--}function S(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let xe=0;xe<M.__webglFramebuffer[le].length;xe++)t.deleteFramebuffer(M.__webglFramebuffer[le][xe]);else t.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)t.deleteFramebuffer(M.__webglFramebuffer[le]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ne=P.textures;for(let le=0,xe=ne.length;le<xe;le++){const ie=i.get(ne[le]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(ne[le])}i.remove(P)}let z=0;function Y(){z=0}function re(){const P=z;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),z+=1,P}function ce(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function fe(P,M){const ne=i.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ne.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ne,P,M);return}}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+M)}function W(P,M){const ne=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){pe(ne,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+M)}function te(P,M){const ne=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){pe(ne,P,M);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+M)}function H(P,M){const ne=i.get(P);if(P.version>0&&ne.__version!==P.version){ve(ne,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+M)}const se={[ts]:t.REPEAT,[Xs]:t.CLAMP_TO_EDGE,[fp]:t.MIRRORED_REPEAT},ue={[er]:t.NEAREST,[ow]:t.NEAREST_MIPMAP_NEAREST,[gc]:t.NEAREST_MIPMAP_LINEAR,[cr]:t.LINEAR,[xf]:t.LINEAR_MIPMAP_NEAREST,[js]:t.LINEAR_MIPMAP_LINEAR},Re={[uw]:t.NEVER,[gw]:t.ALWAYS,[dw]:t.LESS,[oy]:t.LEQUAL,[fw]:t.EQUAL,[mw]:t.GEQUAL,[hw]:t.GREATER,[pw]:t.NOTEQUAL};function ke(P,M){if(M.type===br&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===cr||M.magFilter===xf||M.magFilter===gc||M.magFilter===js||M.minFilter===cr||M.minFilter===xf||M.minFilter===gc||M.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,se[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,se[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,se[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ue[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===er||M.minFilter!==gc&&M.minFilter!==js||M.type===br&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function vt(P,M){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const le=M.source;let xe=m.get(le);xe===void 0&&(xe={},m.set(le,xe));const ie=ce(M);if(ie!==P.__cacheKey){xe[ie]===void 0&&(xe[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),xe[ie].usedTimes++;const Fe=xe[P.__cacheKey];Fe!==void 0&&(xe[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(M)),P.__cacheKey=ie,P.__webglTexture=xe[ie].texture}return ne}function ct(P,M,ne){return Math.floor(Math.floor(P/ne)/M)}function Pe(P,M,ne,le){const ie=P.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,ne,le,M.data);else{ie.sort((Te,Ie)=>Te.start-Ie.start);let Fe=0;for(let Te=1;Te<ie.length;Te++){const Ie=ie[Fe],Oe=ie[Te],Qe=Ie.start+Ie.count,De=ct(Oe.start,M.width,4),ut=ct(Ie.start,M.width,4);Oe.start<=Qe+1&&De===ut&&ct(Oe.start+Oe.count-1,M.width,4)===De?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Fe,ie[Fe]=Oe)}ie.length=Fe+1;const Ae=t.getParameter(t.UNPACK_ROW_LENGTH),Ze=t.getParameter(t.UNPACK_SKIP_PIXELS),Je=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Te=0,Ie=ie.length;Te<Ie;Te++){const Oe=ie[Te],Qe=Math.floor(Oe.start/4),De=Math.ceil(Oe.count/4),ut=Qe%M.width,Z=Math.floor(Qe/M.width),Ce=De,_e=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(t.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(t.TEXTURE_2D,0,ut,Z,Ce,_e,ne,le,M.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,Je)}}function pe(P,M,ne){let le=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=t.TEXTURE_3D);const xe=vt(P,M),ie=M.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+ne);const Fe=i.get(ie);if(ie.version!==Fe.__version||xe===!0){n.activeTexture(t.TEXTURE0+ne);const Ae=Dt.getPrimaries(Dt.workingColorSpace),Ze=M.colorSpace===ns?null:Dt.getPrimaries(M.colorSpace),Je=M.colorSpace===ns||Ae===Ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Te=A(M.image,!1,r.maxTextureSize);Te=tt(M,Te);const Ie=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type);let Qe=y(M.internalFormat,Ie,Oe,M.colorSpace,M.isVideoTexture);ke(le,M);let De;const ut=M.mipmaps,Z=M.isVideoTexture!==!0,Ce=Fe.__version===void 0||xe===!0,_e=ie.dataReady,Ge=D(M,Te);if(M.isDepthTexture)Qe=T(M.format===Rl,M.type),Ce&&(Z?n.texStorage2D(t.TEXTURE_2D,1,Qe,Te.width,Te.height):n.texImage2D(t.TEXTURE_2D,0,Qe,Te.width,Te.height,0,Ie,Oe,null));else if(M.isDataTexture)if(ut.length>0){Z&&Ce&&n.texStorage2D(t.TEXTURE_2D,Ge,Qe,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)De=ut[Me],Z?_e&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Ie,Oe,De.data):n.texImage2D(t.TEXTURE_2D,Me,Qe,De.width,De.height,0,Ie,Oe,De.data);M.generateMipmaps=!1}else Z?(Ce&&n.texStorage2D(t.TEXTURE_2D,Ge,Qe,Te.width,Te.height),_e&&Pe(M,Te,Ie,Oe)):n.texImage2D(t.TEXTURE_2D,0,Qe,Te.width,Te.height,0,Ie,Oe,Te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Z&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Qe,ut[0].width,ut[0].height,Te.depth);for(let Me=0,me=ut.length;Me<me;Me++)if(De=ut[Me],M.format!==Zi)if(Ie!==null)if(Z){if(_e)if(M.layerUpdates.size>0){const je=rv(De.width,De.height,M.format,M.type);for(const dt of M.layerUpdates){const Ht=De.data.subarray(dt*je/De.data.BYTES_PER_ELEMENT,(dt+1)*je/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,dt,De.width,De.height,1,Ie,Ht)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Te.depth,Ie,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Me,Qe,De.width,De.height,Te.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?_e&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Te.depth,Ie,Oe,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Me,Qe,De.width,De.height,Te.depth,0,Ie,Oe,De.data)}else{Z&&Ce&&n.texStorage2D(t.TEXTURE_2D,Ge,Qe,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)De=ut[Me],M.format!==Zi?Ie!==null?Z?_e&&n.compressedTexSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Ie,De.data):n.compressedTexImage2D(t.TEXTURE_2D,Me,Qe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?_e&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Ie,Oe,De.data):n.texImage2D(t.TEXTURE_2D,Me,Qe,De.width,De.height,0,Ie,Oe,De.data)}else if(M.isDataArrayTexture)if(Z){if(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Qe,Te.width,Te.height,Te.depth),_e)if(M.layerUpdates.size>0){const Me=rv(Te.width,Te.height,M.format,M.type);for(const me of M.layerUpdates){const je=Te.data.subarray(me*Me/Te.data.BYTES_PER_ELEMENT,(me+1)*Me/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,Ie,Oe,je)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Oe,Te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Qe,Te.width,Te.height,Te.depth,0,Ie,Oe,Te.data);else if(M.isData3DTexture)Z?(Ce&&n.texStorage3D(t.TEXTURE_3D,Ge,Qe,Te.width,Te.height,Te.depth),_e&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Oe,Te.data)):n.texImage3D(t.TEXTURE_3D,0,Qe,Te.width,Te.height,Te.depth,0,Ie,Oe,Te.data);else if(M.isFramebufferTexture){if(Ce)if(Z)n.texStorage2D(t.TEXTURE_2D,Ge,Qe,Te.width,Te.height);else{let Me=Te.width,me=Te.height;for(let je=0;je<Ge;je++)n.texImage2D(t.TEXTURE_2D,je,Qe,Me,me,0,Ie,Oe,null),Me>>=1,me>>=1}}else if(ut.length>0){if(Z&&Ce){const Me=be(ut[0]);n.texStorage2D(t.TEXTURE_2D,Ge,Qe,Me.width,Me.height)}for(let Me=0,me=ut.length;Me<me;Me++)De=ut[Me],Z?_e&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Ie,Oe,De):n.texImage2D(t.TEXTURE_2D,Me,Qe,Ie,Oe,De);M.generateMipmaps=!1}else if(Z){if(Ce){const Me=be(Te);n.texStorage2D(t.TEXTURE_2D,Ge,Qe,Me.width,Me.height)}_e&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Oe,Te)}else n.texImage2D(t.TEXTURE_2D,0,Qe,Ie,Oe,Te);x(M)&&f(le),Fe.__version=ie.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ve(P,M,ne){if(M.image.length!==6)return;const le=vt(P,M),xe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+ne);const ie=i.get(xe);if(xe.version!==ie.__version||le===!0){n.activeTexture(t.TEXTURE0+ne);const Fe=Dt.getPrimaries(Dt.workingColorSpace),Ae=M.colorSpace===ns?null:Dt.getPrimaries(M.colorSpace),Ze=M.colorSpace===ns||Fe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Je=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let me=0;me<6;me++)!Je&&!Te?Ie[me]=A(M.image[me],!0,r.maxCubemapSize):Ie[me]=Te?M.image[me].image:M.image[me],Ie[me]=tt(M,Ie[me]);const Oe=Ie[0],Qe=s.convert(M.format,M.colorSpace),De=s.convert(M.type),ut=y(M.internalFormat,Qe,De,M.colorSpace),Z=M.isVideoTexture!==!0,Ce=ie.__version===void 0||le===!0,_e=xe.dataReady;let Ge=D(M,Oe);ke(t.TEXTURE_CUBE_MAP,M);let Me;if(Je){Z&&Ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,ut,Oe.width,Oe.height);for(let me=0;me<6;me++){Me=Ie[me].mipmaps;for(let je=0;je<Me.length;je++){const dt=Me[je];M.format!==Zi?Qe!==null?Z?_e&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,dt.width,dt.height,Qe,dt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,dt.width,dt.height,Qe,De,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,dt.width,dt.height,0,Qe,De,dt.data)}}}else{if(Me=M.mipmaps,Z&&Ce){Me.length>0&&Ge++;const me=be(Ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Te){Z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ie[me].width,Ie[me].height,Qe,De,Ie[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ie[me].width,Ie[me].height,0,Qe,De,Ie[me].data);for(let je=0;je<Me.length;je++){const Ht=Me[je].image[me].image;Z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Ht.width,Ht.height,Qe,De,Ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,Ht.width,Ht.height,0,Qe,De,Ht.data)}}else{Z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Qe,De,Ie[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Qe,De,Ie[me]);for(let je=0;je<Me.length;je++){const dt=Me[je];Z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Qe,De,dt.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,Qe,De,dt.image[me])}}}x(M)&&f(t.TEXTURE_CUBE_MAP),ie.__version=xe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ve(P,M,ne,le,xe,ie){const Fe=s.convert(ne.format,ne.colorSpace),Ae=s.convert(ne.type),Ze=y(ne.internalFormat,Fe,Ae,ne.colorSpace),Je=i.get(M),Te=i.get(ne);if(Te.__renderTarget=M,!Je.__hasExternalTextures){const Ie=Math.max(1,M.width>>ie),Oe=Math.max(1,M.height>>ie);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,ie,Ze,Ie,Oe,M.depth,0,Fe,Ae,null):n.texImage2D(xe,ie,Ze,Ie,Oe,0,Fe,Ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),de(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,xe,Te.__webglTexture,0,Le(M)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,xe,Te.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(P,M,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const le=M.depthTexture,xe=le&&le.isDepthTexture?le.type:null,ie=T(M.stencilBuffer,xe),Fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=Le(M);de(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ie,M.width,M.height):ne?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,P)}else{const le=M.textures;for(let xe=0;xe<le.length;xe++){const ie=le[xe],Fe=s.convert(ie.format,ie.colorSpace),Ae=s.convert(ie.type),Ze=y(ie.internalFormat,Fe,Ae,ie.colorSpace),Je=Le(M);ne&&de(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,Ze,M.width,M.height):de(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Je,Ze,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ze,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(M.depthTexture);le.__renderTarget=M,(!le.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);const xe=le.__webglTexture,ie=Le(M);if(M.depthTexture.format===Cl)de(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(M.depthTexture.format===Rl)de(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const M=i.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const le=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=le}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const le=P.texture.mipmaps;le&&le.length>0?qe(M.__webglFramebuffer[0],P):qe(M.__webglFramebuffer,P)}else if(ne){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=t.createRenderbuffer(),rt(M.__webglDepthbuffer[le],P,!1);else{const xe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer[le];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,ie)}}else{const le=P.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),rt(M.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ot(P,M,ne){const le=i.get(P);M!==void 0&&Ve(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ne!==void 0&&Mt(P)}function G(P){const M=P.texture,ne=i.get(P),le=i.get(M);P.addEventListener("dispose",U);const xe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Fe=xe.length>1;if(Fe||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=M.version,o.memory.textures++),ie){ne.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer[Ae]=[];for(let Ze=0;Ze<M.mipmaps.length;Ze++)ne.__webglFramebuffer[Ae][Ze]=t.createFramebuffer()}else ne.__webglFramebuffer[Ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)ne.__webglFramebuffer[Ae]=t.createFramebuffer()}else ne.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let Ae=0,Ze=xe.length;Ae<Ze;Ae++){const Je=i.get(xe[Ae]);Je.__webglTexture===void 0&&(Je.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Ze=xe[Ae];ne.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[Ae]);const Je=s.convert(Ze.format,Ze.colorSpace),Te=s.convert(Ze.type),Ie=y(Ze.internalFormat,Je,Te,Ze.colorSpace,P.isXRRenderTarget===!0),Oe=Le(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Ie,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ne.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),rt(ne.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ke(t.TEXTURE_CUBE_MAP,M);for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ze=0;Ze<M.mipmaps.length;Ze++)Ve(ne.__webglFramebuffer[Ae][Ze],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze);else Ve(ne.__webglFramebuffer[Ae],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let Ae=0,Ze=xe.length;Ae<Ze;Ae++){const Je=xe[Ae],Te=i.get(Je);let Ie=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ie,Te.__webglTexture),ke(Ie,Je),Ve(ne.__webglFramebuffer,P,Je,t.COLOR_ATTACHMENT0+Ae,Ie,0),x(Je)&&f(Ie)}n.unbindTexture()}else{let Ae=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ae,le.__webglTexture),ke(Ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Ze=0;Ze<M.mipmaps.length;Ze++)Ve(ne.__webglFramebuffer[Ze],P,M,t.COLOR_ATTACHMENT0,Ae,Ze);else Ve(ne.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,Ae,0);x(M)&&f(Ae),n.unbindTexture()}P.depthBuffer&&Mt(P)}function xt(P){const M=P.textures;for(let ne=0,le=M.length;ne<le;ne++){const xe=M[ne];if(x(xe)){const ie=_(P),Fe=i.get(xe).__webglTexture;n.bindTexture(ie,Fe),f(ie),n.unbindTexture()}}}const at=[],it=[];function X(P){if(P.samples>0){if(de(P)===!1){const M=P.textures,ne=P.width,le=P.height;let xe=t.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(P),Ae=M.length>1;if(Ae)for(let Je=0;Je<M.length;Je++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Je=0;Je<M.length;Je++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),Ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[Je]);const Te=i.get(M[Je]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,ne,le,0,0,ne,le,xe,t.NEAREST),l===!0&&(at.length=0,it.length=0,at.push(t.COLOR_ATTACHMENT0+Je),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(ie),it.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,it)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let Je=0;Je<M.length;Je++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[Je]);const Te=i.get(M[Je]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Le(P){return Math.min(r.maxSamples,P.samples)}function de(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(P){const M=o.render.frame;p.get(P)!==M&&(p.set(P,M),P.update())}function tt(P,M){const ne=P.colorSpace,le=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==oa&&ne!==ns&&(Dt.getTransfer(ne)===jt?(le!==Zi||xe!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),M}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=re,this.resetTextureUnits=Y,this.setTexture2D=fe,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=G,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=de}function jb(t,e){function n(i,r=ns){let s;const o=Dt.getTransfer(r);if(i===hr)return t.UNSIGNED_BYTE;if(i===Xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ey)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ty)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jx)return t.BYTE;if(i===Qx)return t.SHORT;if(i===bl)return t.UNSIGNED_SHORT;if(i===Wm)return t.INT;if(i===to)return t.UNSIGNED_INT;if(i===br)return t.FLOAT;if(i===Fl)return t.HALF_FLOAT;if(i===ny)return t.ALPHA;if(i===iy)return t.RGB;if(i===Zi)return t.RGBA;if(i===Cl)return t.DEPTH_COMPONENT;if(i===Rl)return t.DEPTH_STENCIL;if(i===ry)return t.RED;if(i===Ym)return t.RED_INTEGER;if(i===sy)return t.RG;if(i===qm)return t.RG_INTEGER;if(i===$m)return t.RGBA_INTEGER;if(i===ru||i===su||i===ou||i===au)if(o===jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hp||i===pp||i===mp||i===gp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vp||i===_p||i===xp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vp||i===_p)return o===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yp||i===Mp||i===Sp||i===wp||i===Ep||i===Tp||i===bp||i===Ap||i===Cp||i===Rp||i===Pp||i===Ip||i===Lp||i===Dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ep)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ap)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ip)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dp)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Np||i===Up||i===Fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Np)return o===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kp||i===Op||i===zp||i===Bp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Op)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Al?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
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

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xs({vertexShader:Yb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new B(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends da{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,p=null,h=null,m=null,g=null,w=null;const A=typeof XRWebGLBinding<"u",x=new $b,f={},_=n.getContextAttributes();let y=null,T=null;const D=[],N=[],U=new Ke;let k=null;const b=new bi;b.viewport=new qt;const S=new bi;S.viewport=new qt;const z=[b,S],Y=new gE;let re=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let ve=D[pe];return ve===void 0&&(ve=new Vf,D[pe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(pe){let ve=D[pe];return ve===void 0&&(ve=new Vf,D[pe]=ve),ve.getGripSpace()},this.getHand=function(pe){let ve=D[pe];return ve===void 0&&(ve=new Vf,D[pe]=ve),ve.getHandSpace()};function fe(pe){const ve=N.indexOf(pe.inputSource);if(ve===-1)return;const Ve=D[ve];Ve!==void 0&&(Ve.update(pe.inputSource,pe.frame,u||o),Ve.dispatchEvent({type:pe.type,data:pe.inputSource}))}function W(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",te);for(let pe=0;pe<D.length;pe++){const ve=N[pe];ve!==null&&(N[pe]=null,D[pe].disconnect(ve))}re=null,ce=null,x.reset();for(const pe in f)delete f[pe];e.setRenderTarget(y),g=null,m=null,h=null,r=null,T=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){s=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){a=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(pe){u=pe},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return h===null&&A&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",W),r.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ve=null,rt=null,qe=null;_.depth&&(qe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ve=_.stencil?Rl:Cl,rt=_.stencil?Al:to);const Mt={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:s};h=this.getBinding(),m=h.createProjectionLayer(Mt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new no(m.textureWidth,m.textureHeight,{format:Zi,type:hr,depthTexture:new _y(m.textureWidth,m.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Ve),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new no(g.framebufferWidth,g.framebufferHeight,{format:Zi,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(pe){for(let ve=0;ve<pe.removed.length;ve++){const Ve=pe.removed[ve],rt=N.indexOf(Ve);rt>=0&&(N[rt]=null,D[rt].disconnect(Ve))}for(let ve=0;ve<pe.added.length;ve++){const Ve=pe.added[ve];let rt=N.indexOf(Ve);if(rt===-1){for(let Mt=0;Mt<D.length;Mt++)if(Mt>=N.length){N.push(Ve),rt=Mt;break}else if(N[Mt]===null){N[Mt]=Ve,rt=Mt;break}if(rt===-1)break}const qe=D[rt];qe&&qe.connect(Ve)}}const H=new V,se=new V;function ue(pe,ve,Ve){H.setFromMatrixPosition(ve.matrixWorld),se.setFromMatrixPosition(Ve.matrixWorld);const rt=H.distanceTo(se),qe=ve.projectionMatrix.elements,Mt=Ve.projectionMatrix.elements,ot=qe[14]/(qe[10]-1),G=qe[14]/(qe[10]+1),xt=(qe[9]+1)/qe[5],at=(qe[9]-1)/qe[5],it=(qe[8]-1)/qe[0],X=(Mt[8]+1)/Mt[0],Le=ot*it,de=ot*X,he=rt/(-it+X),tt=he*-it;if(ve.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(tt),pe.translateZ(he),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),qe[10]===-1)pe.projectionMatrix.copy(ve.projectionMatrix),pe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const be=ot+he,P=G+he,M=Le-tt,ne=de+(rt-tt),le=xt*G/P*be,xe=at*G/P*be;pe.projectionMatrix.makePerspective(M,ne,le,xe,be,P),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function Re(pe,ve){ve===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(ve.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let ve=pe.near,Ve=pe.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(Ve=x.depthFar)),Y.near=S.near=b.near=ve,Y.far=S.far=b.far=Ve,(re!==Y.near||ce!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),re=Y.near,ce=Y.far),Y.layers.mask=pe.layers.mask|6,b.layers.mask=Y.layers.mask&3,S.layers.mask=Y.layers.mask&5;const rt=pe.parent,qe=Y.cameras;Re(Y,rt);for(let Mt=0;Mt<qe.length;Mt++)Re(qe[Mt],rt);qe.length===2?ue(Y,b,S):Y.projectionMatrix.copy(b.projectionMatrix),ke(pe,Y,rt)};function ke(pe,ve,Ve){Ve===null?pe.matrix.copy(ve.matrixWorld):(pe.matrix.copy(Ve.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(ve.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(ve.projectionMatrix),pe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=Vp*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(pe){l=pe,m!==null&&(m.fixedFoveation=pe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=pe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(pe){return f[pe]};let vt=null;function ct(pe,ve){if(p=ve.getViewerPose(u||o),w=ve,p!==null){const Ve=p.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let rt=!1;Ve.length!==Y.cameras.length&&(Y.cameras.length=0,rt=!0);for(let G=0;G<Ve.length;G++){const xt=Ve[G];let at=null;if(g!==null)at=g.getViewport(xt);else{const X=h.getViewSubImage(m,xt);at=X.viewport,G===0&&(e.setRenderTargetTextures(T,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(T))}let it=z[G];it===void 0&&(it=new bi,it.layers.enable(G),it.viewport=new qt,z[G]=it),it.matrix.fromArray(xt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(xt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(at.x,at.y,at.width,at.height),G===0&&(Y.matrix.copy(it.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),rt===!0&&Y.cameras.push(it)}const qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){h=i.getBinding();const G=h.getDepthInformation(Ve[0]);G&&G.isValid&&G.texture&&x.init(G,r.renderState)}if(qe&&qe.includes("camera-access")&&A){e.state.unbindTexture(),h=i.getBinding();for(let G=0;G<Ve.length;G++){const xt=Ve[G].camera;if(xt){let at=f[xt];at||(at=new xy,f[xt]=at);const it=h.getCameraImage(xt);at.sourceTexture=it}}}}for(let Ve=0;Ve<D.length;Ve++){const rt=N[Ve],qe=D[Ve];rt!==null&&qe!==void 0&&qe.update(rt,ve,u||o)}vt&&vt(pe,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Pe=new Ey;Pe.setAnimationLoop(ct),this.setAnimationLoop=function(pe){vt=pe},this.dispose=function(){}}}const Ns=new ir,Zb=new Zt;function Jb(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,fy(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,_,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(x,f):f.isMeshToonMaterial?(s(x,f),h(x,f)):f.isMeshPhongMaterial?(s(x,f),p(x,f)):f.isMeshStandardMaterial?(s(x,f),m(x,f),f.isMeshPhysicalMaterial&&g(x,f,T)):f.isMeshMatcapMaterial?(s(x,f),w(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),A(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,_,y):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===vi&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===vi&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,T=_.envMapRotation;y&&(x.envMap.value=y,Ns.copy(T),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),x.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(Ns)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,_,y){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*_,x.scale.value=y*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function p(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function h(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function m(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function g(x,f,_){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vi&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,f){f.matcap&&(x.matcap.value=f.matcap)}function A(x,f){const _=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const T=y.program;i.uniformBlockBinding(_,T)}function u(_,y){let T=r[_.id];T===void 0&&(w(_),T=p(_),r[_.id]=T,_.addEventListener("dispose",x));const D=y.program;i.updateUBOMapping(_,D);const N=e.render.frame;s[_.id]!==N&&(m(_),s[_.id]=N)}function p(_){const y=h();_.__bindingPointIndex=y;const T=t.createBuffer(),D=_.__size,N=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const y=r[_.id],T=_.uniforms,D=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let N=0,U=T.length;N<U;N++){const k=Array.isArray(T[N])?T[N]:[T[N]];for(let b=0,S=k.length;b<S;b++){const z=k[b];if(g(z,N,b,D)===!0){const Y=z.__offset,re=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let fe=0;fe<re.length;fe++){const W=re[fe],te=A(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,Y+ce,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,ce),ce+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,y,T,D){const N=_.value,U=y+"_"+T;if(D[U]===void 0)return typeof N=="number"||typeof N=="boolean"?D[U]=N:D[U]=N.clone(),!0;{const k=D[U];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return D[U]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function w(_){const y=_.uniforms;let T=0;const D=16;for(let U=0,k=y.length;U<k;U++){const b=Array.isArray(y[U])?y[U]:[y[U]];for(let S=0,z=b.length;S<z;S++){const Y=b[S],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let ce=0,fe=re.length;ce<fe;ce++){const W=re[ce],te=A(W),H=T%D,se=H%te.boundary,ue=H+se;T+=se,ue!==0&&D-ue<te.storage&&(T+=D-ue),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=te.storage}}}const N=T%D;return N>0&&(T+=D-N),_.__size=T,_.__cache={},this}function A(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){const y=_.target;y.removeEventListener("dispose",x);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class eA{constructor(e={}){const{canvas:n=_w(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const w=new Uint32Array(4),A=new Int32Array(4);let x=null,f=null;const _=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=In;let N=0,U=0,k=null,b=-1,S=null;const z=new qt,Y=new qt;let re=null;const ce=new yt(0);let fe=0,W=n.width,te=n.height,H=1,se=null,ue=null;const Re=new qt(0,0,W,te),ke=new qt(0,0,W,te);let vt=!1;const ct=new e0;let Pe=!1,pe=!1;const ve=new Zt,Ve=new V,rt=new qt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function ot(){return k===null?H:1}let G=i;function xt(R,ee){return n.getContext(R,ee)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vm}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Me,!1),G===null){const ee="webgl2";if(G=xt(ee,R),G===null)throw xt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,it,X,Le,de,he,tt,be,P,M,ne,le,xe,ie,Fe,Ae,Ze,Je,Te,Ie,Oe,Qe,De,ut;function Z(){at=new u5(G),at.init(),Qe=new jb(G,at),it=new i5(G,at,e,Qe),X=new Wb(G,at),it.reversedDepthBuffer&&m&&X.buffers.depth.setReversed(!0),Le=new h5(G),de=new Ib,he=new Xb(G,at,X,de,it,Qe,Le),tt=new s5(T),be=new c5(T),P=new xE(G),De=new t5(G,P),M=new d5(G,P,Le,De),ne=new m5(G,M,P,Le),Te=new p5(G,it,he),Ae=new r5(de),le=new Pb(T,tt,be,at,it,De,Ae),xe=new Jb(T,de),ie=new Db,Fe=new zb(at),Je=new e5(T,tt,be,X,ne,g,l),Ze=new Vb(T,ne,it),ut=new Qb(G,Le,it,X),Ie=new n5(G,at,Le),Oe=new f5(G,at,Le),Le.programs=le.programs,T.capabilities=it,T.extensions=at,T.properties=de,T.renderLists=ie,T.shadowMap=Ze,T.state=X,T.info=Le}Z();const Ce=new Kb(T,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(W,te,!1))},this.getSize=function(R){return R.set(W,te)},this.setSize=function(R,ee,ae=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,te=ee,n.width=Math.floor(R*H),n.height=Math.floor(ee*H),ae===!0&&(n.style.width=R+"px",n.style.height=ee+"px"),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(W*H,te*H).floor()},this.setDrawingBufferSize=function(R,ee,ae){W=R,te=ee,H=ae,n.width=Math.floor(R*ae),n.height=Math.floor(ee*ae),this.setViewport(0,0,R,ee)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,ee,ae,oe){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,ee,ae,oe),X.viewport(z.copy(Re).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ke)},this.setScissor=function(R,ee,ae,oe){R.isVector4?ke.set(R.x,R.y,R.z,R.w):ke.set(R,ee,ae,oe),X.scissor(Y.copy(ke).multiplyScalar(H).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){X.setScissorTest(vt=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,ae=!0){let oe=0;if(R){let J=!1;if(k!==null){const Se=k.texture.format;J=Se===$m||Se===qm||Se===Ym}if(J){const Se=k.texture.type,Ne=Se===hr||Se===to||Se===bl||Se===Al||Se===Xm||Se===jm,$e=Je.getClearColor(),He=Je.getClearAlpha(),st=$e.r,lt=$e.g,We=$e.b;Ne?(w[0]=st,w[1]=lt,w[2]=We,w[3]=He,G.clearBufferuiv(G.COLOR,0,w)):(A[0]=st,A[1]=lt,A[2]=We,A[3]=He,G.clearBufferiv(G.COLOR,0,A))}else oe|=G.COLOR_BUFFER_BIT}ee&&(oe|=G.DEPTH_BUFFER_BIT),ae&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Je.dispose(),ie.dispose(),Fe.dispose(),de.dispose(),tt.dispose(),be.dispose(),ne.dispose(),De.dispose(),ut.dispose(),le.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Li),Ce.removeEventListener("sessionend",ha),En.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const R=Le.autoReset,ee=Ze.enabled,ae=Ze.autoUpdate,oe=Ze.needsUpdate,J=Ze.type;Z(),Le.autoReset=R,Ze.enabled=ee,Ze.autoUpdate=ae,Ze.needsUpdate=oe,Ze.type=J}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const ee=R.target;ee.removeEventListener("dispose",me),je(ee)}function je(R){dt(R),de.remove(R)}function dt(R){const ee=de.get(R).programs;ee!==void 0&&(ee.forEach(function(ae){le.releaseProgram(ae)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,ae,oe,J,Se){ee===null&&(ee=qe);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,$e=va(R,ee,ae,oe,J);X.setMaterial(oe,Ne);let He=ae.index,st=1;if(oe.wireframe===!0){if(He=M.getWireframeAttribute(ae),He===void 0)return;st=2}const lt=ae.drawRange,We=ae.attributes.position;let mt=lt.start*st,Nt=(lt.start+lt.count)*st;Se!==null&&(mt=Math.max(mt,Se.start*st),Nt=Math.min(Nt,(Se.start+Se.count)*st)),He!==null?(mt=Math.max(mt,0),Nt=Math.min(Nt,He.count)):We!=null&&(mt=Math.max(mt,0),Nt=Math.min(Nt,We.count));const Jt=Nt-mt;if(Jt<0||Jt===1/0)return;De.setup(J,oe,$e,ae,He);let Gt,zt=Ie;if(He!==null&&(Gt=P.get(He),zt=Oe,zt.setIndex(Gt)),J.isMesh)oe.wireframe===!0?(X.setLineWidth(oe.wireframeLinewidth*ot()),zt.setMode(G.LINES)):zt.setMode(G.TRIANGLES);else if(J.isLine){let nt=oe.linewidth;nt===void 0&&(nt=1),X.setLineWidth(nt*ot()),J.isLineSegments?zt.setMode(G.LINES):J.isLineLoop?zt.setMode(G.LINE_LOOP):zt.setMode(G.LINE_STRIP)}else J.isPoints?zt.setMode(G.POINTS):J.isSprite&&zt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))zt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nt=J._multiDrawStarts,nn=J._multiDrawCounts,Et=J._multiDrawCount,vn=He?P.get(He).bytesPerElement:1,Tn=de.get(oe).currentProgram.getUniforms();for(let Lt=0;Lt<Et;Lt++)Tn.setValue(G,"_gl_DrawID",Lt),zt.render(nt[Lt]/vn,nn[Lt])}else if(J.isInstancedMesh)zt.renderInstances(mt,Jt,J.count);else if(ae.isInstancedBufferGeometry){const nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,nn=Math.min(ae.instanceCount,nt);zt.renderInstances(mt,Jt,nn)}else zt.render(mt,Jt)};function Ht(R,ee,ae){R.transparent===!0&&R.side===Xt&&R.forceSinglePass===!1?(R.side=vi,R.needsUpdate=!0,Or(R,ee,ae),R.side=_s,R.needsUpdate=!0,Or(R,ee,ae),R.side=Xt):Or(R,ee,ae)}this.compile=function(R,ee,ae=null){ae===null&&(ae=R),f=Fe.get(ae),f.init(ee),y.push(f),ae.traverseVisible(function(J){J.isLight&&J.layers.test(ee.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),R!==ae&&R.traverseVisible(function(J){J.isLight&&J.layers.test(ee.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),f.setupLights();const oe=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Se=J.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const $e=Se[Ne];Ht($e,ae,J),oe.add($e)}else Ht(Se,ae,J),oe.add(Se)}),f=y.pop(),oe},this.compileAsync=function(R,ee,ae=null){const oe=this.compile(R,ee,ae);return new Promise(J=>{function Se(){if(oe.forEach(function(Ne){de.get(Ne).currentProgram.isReady()&&oe.delete(Ne)}),oe.size===0){J(R);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let It=null;function _i(R){It&&It(R)}function Li(){En.stop()}function ha(){En.start()}const En=new Ey;En.setAnimationLoop(_i),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){It=R,Ce.setAnimationLoop(R),R===null?En.stop():En.start()},Ce.addEventListener("sessionstart",Li),Ce.addEventListener("sessionend",ha),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(ee),ee=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,ee,k),f=Fe.get(R,y.length),f.init(ee),y.push(f),ve.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ct.setFromProjectionMatrix(ve,ur,ee.reversedDepth),pe=this.localClippingEnabled,Pe=Ae.init(this.clippingPlanes,pe),x=ie.get(R,_.length),x.init(),_.push(x),Ce.enabled===!0&&Ce.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&Fr(Se,ee,-1/0,T.sortObjects)}Fr(R,ee,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(se,ue),Mt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Mt&&Je.addToRenderList(x,R),this.info.render.frame++,Pe===!0&&Ae.beginShadows();const ae=f.state.shadowsArray;Ze.render(ae,R,ee),Pe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=x.opaque,J=x.transmissive;if(f.setupLights(),ee.isArrayCamera){const Se=ee.cameras;if(J.length>0)for(let Ne=0,$e=Se.length;Ne<$e;Ne++){const He=Se[Ne];li(oe,J,R,He)}Mt&&Je.render(R);for(let Ne=0,$e=Se.length;Ne<$e;Ne++){const He=Se[Ne];kr(x,R,He,He.viewport)}}else J.length>0&&li(oe,J,R,ee),Mt&&Je.render(R),kr(x,R,ee);k!==null&&U===0&&(he.updateMultisampleRenderTarget(k),he.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(T,R,ee),De.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],Pe===!0&&Ae.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Fr(R,ee,ae,oe){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ct.intersectsSprite(R)){oe&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Ne=ne.update(R),$e=R.material;$e.visible&&x.push(R,Ne,$e,ae,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ct.intersectsObject(R))){const Ne=ne.update(R),$e=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),rt.copy(Ne.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray($e)){const He=Ne.groups;for(let st=0,lt=He.length;st<lt;st++){const We=He[st],mt=$e[We.materialIndex];mt&&mt.visible&&x.push(R,Ne,mt,ae,rt.z,We)}}else $e.visible&&x.push(R,Ne,$e,ae,rt.z,null)}}const Se=R.children;for(let Ne=0,$e=Se.length;Ne<$e;Ne++)Fr(Se[Ne],ee,ae,oe)}function kr(R,ee,ae,oe){const J=R.opaque,Se=R.transmissive,Ne=R.transparent;f.setupLightsView(ae),Pe===!0&&Ae.setGlobalState(T.clippingPlanes,ae),oe&&X.viewport(z.copy(oe)),J.length>0&&on(J,ee,ae),Se.length>0&&on(Se,ee,ae),Ne.length>0&&on(Ne,ee,ae),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function li(R,ee,ae,oe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[oe.id]===void 0&&(f.state.transmissionRenderTarget[oe.id]=new no(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Fl:hr,minFilter:js,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=f.state.transmissionRenderTarget[oe.id],Ne=oe.viewport||z;Se.setSize(Ne.z*T.transmissionResolutionScale,Ne.w*T.transmissionResolutionScale);const $e=T.getRenderTarget(),He=T.getActiveCubeFace(),st=T.getActiveMipmapLevel();T.setRenderTarget(Se),T.getClearColor(ce),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),Mt&&Je.render(ae);const lt=T.toneMapping;T.toneMapping=ps;const We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),f.setupLightsView(oe),Pe===!0&&Ae.setGlobalState(T.clippingPlanes,oe),on(R,ae,oe),he.updateMultisampleRenderTarget(Se),he.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Nt=0,Jt=ee.length;Nt<Jt;Nt++){const Gt=ee[Nt],zt=Gt.object,nt=Gt.geometry,nn=Gt.material,Et=Gt.group;if(nn.side===Xt&&zt.layers.test(oe.layers)){const vn=nn.side;nn.side=vi,nn.needsUpdate=!0,pa(zt,ae,oe,nt,nn,Et),nn.side=vn,nn.needsUpdate=!0,mt=!0}}mt===!0&&(he.updateMultisampleRenderTarget(Se),he.updateRenderTargetMipmap(Se))}T.setRenderTarget($e,He,st),T.setClearColor(ce,fe),We!==void 0&&(oe.viewport=We),T.toneMapping=lt}function on(R,ee,ae){const oe=ee.isScene===!0?ee.overrideMaterial:null;for(let J=0,Se=R.length;J<Se;J++){const Ne=R[J],$e=Ne.object,He=Ne.geometry,st=Ne.group;let lt=Ne.material;lt.allowOverride===!0&&oe!==null&&(lt=oe),$e.layers.test(ae.layers)&&pa($e,ee,ae,He,lt,st)}}function pa(R,ee,ae,oe,J,Se){R.onBeforeRender(T,ee,ae,oe,J,Se),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(T,ee,ae,oe,R,Se),J.transparent===!0&&J.side===Xt&&J.forceSinglePass===!1?(J.side=vi,J.needsUpdate=!0,T.renderBufferDirect(ae,ee,oe,J,R,Se),J.side=_s,J.needsUpdate=!0,T.renderBufferDirect(ae,ee,oe,J,R,Se),J.side=Xt):T.renderBufferDirect(ae,ee,oe,J,R,Se),R.onAfterRender(T,ee,ae,oe,J,Se)}function Or(R,ee,ae){ee.isScene!==!0&&(ee=qe);const oe=de.get(R),J=f.state.lights,Se=f.state.shadowsArray,Ne=J.state.version,$e=le.getParameters(R,J.state,Se,ee,ae),He=le.getProgramCacheKey($e);let st=oe.programs;oe.environment=R.isMeshStandardMaterial?ee.environment:null,oe.fog=ee.fog,oe.envMap=(R.isMeshStandardMaterial?be:tt).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",me),st=new Map,oe.programs=st);let lt=st.get(He);if(lt!==void 0){if(oe.currentProgram===lt&&oe.lightsStateVersion===Ne)return ga(R,$e),lt}else $e.uniforms=le.getUniforms(R),R.onBeforeCompile($e,T),lt=le.acquireProgram($e,He),st.set(He,lt),oe.uniforms=$e.uniforms;const We=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Ae.uniform),ga(R,$e),oe.needsLights=Hl(R),oe.lightsStateVersion=Ne,oe.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.directionalShadowMap.value=J.state.directionalShadowMap,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotShadowMap.value=J.state.spotShadowMap,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMap.value=J.state.pointShadowMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),oe.currentProgram=lt,oe.uniformsList=null,lt}function ma(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=lu.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function ga(R,ee){const ae=de.get(R);ae.outputColorSpace=ee.outputColorSpace,ae.batching=ee.batching,ae.batchingColor=ee.batchingColor,ae.instancing=ee.instancing,ae.instancingColor=ee.instancingColor,ae.instancingMorph=ee.instancingMorph,ae.skinning=ee.skinning,ae.morphTargets=ee.morphTargets,ae.morphNormals=ee.morphNormals,ae.morphColors=ee.morphColors,ae.morphTargetsCount=ee.morphTargetsCount,ae.numClippingPlanes=ee.numClippingPlanes,ae.numIntersection=ee.numClipIntersection,ae.vertexAlphas=ee.vertexAlphas,ae.vertexTangents=ee.vertexTangents,ae.toneMapping=ee.toneMapping}function va(R,ee,ae,oe,J){ee.isScene!==!0&&(ee=qe),he.resetTextureUnits();const Se=ee.fog,Ne=oe.isMeshStandardMaterial?ee.environment:null,$e=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:oa,He=(oe.isMeshStandardMaterial?be:tt).get(oe.envMap||Ne),st=oe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!ae.morphAttributes.position,mt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let Jt=ps;oe.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Jt=T.toneMapping);const Gt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,zt=Gt!==void 0?Gt.length:0,nt=de.get(oe),nn=f.state.lights;if(Pe===!0&&(pe===!0||R!==S)){const bn=R===S&&oe.id===b;Ae.setState(oe,R,bn)}let Et=!1;oe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==nn.state.version||nt.outputColorSpace!==$e||J.isBatchedMesh&&nt.batching===!1||!J.isBatchedMesh&&nt.batching===!0||J.isBatchedMesh&&nt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&nt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&nt.instancing===!1||!J.isInstancedMesh&&nt.instancing===!0||J.isSkinnedMesh&&nt.skinning===!1||!J.isSkinnedMesh&&nt.skinning===!0||J.isInstancedMesh&&nt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&nt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&nt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&nt.instancingMorph===!1&&J.morphTexture!==null||nt.envMap!==He||oe.fog===!0&&nt.fog!==Se||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ae.numPlanes||nt.numIntersection!==Ae.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==lt||nt.morphTargets!==We||nt.morphNormals!==mt||nt.morphColors!==Nt||nt.toneMapping!==Jt||nt.morphTargetsCount!==zt)&&(Et=!0):(Et=!0,nt.__version=oe.version);let vn=nt.currentProgram;Et===!0&&(vn=Or(oe,ee,J));let Tn=!1,Lt=!1,pr=!1;const $t=vn.getUniforms(),qn=nt.uniforms;if(X.useProgram(vn.program)&&(Tn=!0,Lt=!0,pr=!0),oe.id!==b&&(b=oe.id,Lt=!0),Tn||S!==R){X.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),$t.setValue(G,"projectionMatrix",R.projectionMatrix),$t.setValue(G,"viewMatrix",R.matrixWorldInverse);const Un=$t.map.cameraPosition;Un!==void 0&&Un.setValue(G,Ve.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&$t.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&$t.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Lt=!0,pr=!0)}if(J.isSkinnedMesh){$t.setOptional(G,J,"bindMatrix"),$t.setOptional(G,J,"bindMatrixInverse");const bn=J.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),$t.setValue(G,"boneTexture",bn.boneTexture,he))}J.isBatchedMesh&&($t.setOptional(G,J,"batchingTexture"),$t.setValue(G,"batchingTexture",J._matricesTexture,he),$t.setOptional(G,J,"batchingIdTexture"),$t.setValue(G,"batchingIdTexture",J._indirectTexture,he),$t.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&$t.setValue(G,"batchingColorTexture",J._colorsTexture,he));const ci=ae.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Te.update(J,ae,vn),(Lt||nt.receiveShadow!==J.receiveShadow)&&(nt.receiveShadow=J.receiveShadow,$t.setValue(G,"receiveShadow",J.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(qn.envMap.value=He,qn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&ee.environment!==null&&(qn.envMapIntensity.value=ee.environmentIntensity),Lt&&($t.setValue(G,"toneMappingExposure",T.toneMappingExposure),nt.needsLights&&Bl(qn,pr),Se&&oe.fog===!0&&xe.refreshFogUniforms(qn,Se),xe.refreshMaterialUniforms(qn,oe,H,te,f.state.transmissionRenderTarget[R.id]),lu.upload(G,ma(nt),qn,he)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(lu.upload(G,ma(nt),qn,he),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&$t.setValue(G,"center",J.center),$t.setValue(G,"modelViewMatrix",J.modelViewMatrix),$t.setValue(G,"normalMatrix",J.normalMatrix),$t.setValue(G,"modelMatrix",J.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const bn=oe.uniformsGroups;for(let Un=0,zr=bn.length;Un<zr;Un++){const Di=bn[Un];ut.update(Di,vn),ut.bind(Di,vn)}}return vn}function Bl(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function Hl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,ee,ae){const oe=de.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=ee,de.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ae,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){const ae=de.get(R);ae.__webglFramebuffer=ee,ae.__useDefaultFramebuffer=ee===void 0};const _a=G.createFramebuffer();this.setRenderTarget=function(R,ee=0,ae=0){k=R,N=ee,U=ae;let oe=!0,J=null,Se=!1,Ne=!1;if(R){const He=de.get(R);if(He.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1;else if(He.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(He.__hasExternalTextures)he.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&de.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const st=R.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const lt=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(lt[ee])?J=lt[ee][ae]:J=lt[ee],Se=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?J=de.get(R).__webglMultisampledFramebuffer:Array.isArray(lt)?J=lt[ae]:J=lt,z.copy(R.viewport),Y.copy(R.scissor),re=R.scissorTest}else z.copy(Re).multiplyScalar(H).floor(),Y.copy(ke).multiplyScalar(H).floor(),re=vt;if(ae!==0&&(J=_a),X.bindFramebuffer(G.FRAMEBUFFER,J)&&oe&&X.drawBuffers(R,J),X.viewport(z),X.scissor(Y),X.setScissorTest(re),Se){const He=de.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He.__webglTexture,ae)}else if(Ne){const He=ee;for(let st=0;st<R.textures.length;st++){const lt=de.get(R.textures[st]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+st,lt.__webglTexture,ae,He)}}else if(R!==null&&ae!==0){const He=de.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,He.__webglTexture,ae)}b=-1},this.readRenderTargetPixels=function(R,ee,ae,oe,J,Se,Ne,$e=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){X.bindFramebuffer(G.FRAMEBUFFER,He);try{const st=R.textures[$e],lt=st.format,We=st.type;if(!it.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-oe&&ae>=0&&ae<=R.height-J&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+$e),G.readPixels(ee,ae,oe,J,Qe.convert(lt),Qe.convert(We),Se))}finally{const st=k!==null?de.get(k).__webglFramebuffer:null;X.bindFramebuffer(G.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(R,ee,ae,oe,J,Se,Ne,$e=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(ee>=0&&ee<=R.width-oe&&ae>=0&&ae<=R.height-J){X.bindFramebuffer(G.FRAMEBUFFER,He);const st=R.textures[$e],lt=st.format,We=st.type;if(!it.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+$e),G.readPixels(ee,ae,oe,J,Qe.convert(lt),Qe.convert(We),0);const Nt=k!==null?de.get(k).__webglFramebuffer:null;X.bindFramebuffer(G.FRAMEBUFFER,Nt);const Jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await xw(G,Jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(mt),G.deleteSync(Jt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,ae=0){const oe=Math.pow(2,-ae),J=Math.floor(R.image.width*oe),Se=Math.floor(R.image.height*oe),Ne=ee!==null?ee.x:0,$e=ee!==null?ee.y:0;he.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Ne,$e,J,Se),X.unbindTexture()};const xa=G.createFramebuffer(),ya=G.createFramebuffer();this.copyTextureToTexture=function(R,ee,ae=null,oe=null,J=0,Se=null){Se===null&&(J!==0?(Pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=J,J=0):Se=0);let Ne,$e,He,st,lt,We,mt,Nt,Jt;const Gt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(ae!==null)Ne=ae.max.x-ae.min.x,$e=ae.max.y-ae.min.y,He=ae.isBox3?ae.max.z-ae.min.z:1,st=ae.min.x,lt=ae.min.y,We=ae.isBox3?ae.min.z:0;else{const ci=Math.pow(2,-J);Ne=Math.floor(Gt.width*ci),$e=Math.floor(Gt.height*ci),R.isDataArrayTexture?He=Gt.depth:R.isData3DTexture?He=Math.floor(Gt.depth*ci):He=1,st=0,lt=0,We=0}oe!==null?(mt=oe.x,Nt=oe.y,Jt=oe.z):(mt=0,Nt=0,Jt=0);const zt=Qe.convert(ee.format),nt=Qe.convert(ee.type);let nn;ee.isData3DTexture?(he.setTexture3D(ee,0),nn=G.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(he.setTexture2DArray(ee,0),nn=G.TEXTURE_2D_ARRAY):(he.setTexture2D(ee,0),nn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ee.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ee.unpackAlignment);const Et=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Tn=G.getParameter(G.UNPACK_SKIP_PIXELS),Lt=G.getParameter(G.UNPACK_SKIP_ROWS),pr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Gt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,st),G.pixelStorei(G.UNPACK_SKIP_ROWS,lt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const $t=R.isDataArrayTexture||R.isData3DTexture,qn=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){const ci=de.get(R),bn=de.get(ee),Un=de.get(ci.__renderTarget),zr=de.get(bn.__renderTarget);X.bindFramebuffer(G.READ_FRAMEBUFFER,Un.__webglFramebuffer),X.bindFramebuffer(G.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Di=0;Di<He;Di++)$t&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,de.get(R).__webglTexture,J,We+Di),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,de.get(ee).__webglTexture,Se,Jt+Di)),G.blitFramebuffer(st,lt,Ne,$e,mt,Nt,Ne,$e,G.DEPTH_BUFFER_BIT,G.NEAREST);X.bindFramebuffer(G.READ_FRAMEBUFFER,null),X.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||de.has(R)){const ci=de.get(R),bn=de.get(ee);X.bindFramebuffer(G.READ_FRAMEBUFFER,xa),X.bindFramebuffer(G.DRAW_FRAMEBUFFER,ya);for(let Un=0;Un<He;Un++)$t?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ci.__webglTexture,J,We+Un):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ci.__webglTexture,J),qn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Se,Jt+Un):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Se),J!==0?G.blitFramebuffer(st,lt,Ne,$e,mt,Nt,Ne,$e,G.COLOR_BUFFER_BIT,G.NEAREST):qn?G.copyTexSubImage3D(nn,Se,mt,Nt,Jt+Un,st,lt,Ne,$e):G.copyTexSubImage2D(nn,Se,mt,Nt,st,lt,Ne,$e);X.bindFramebuffer(G.READ_FRAMEBUFFER,null),X.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else qn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(nn,Se,mt,Nt,Jt,Ne,$e,He,zt,nt,Gt.data):ee.isCompressedArrayTexture?G.compressedTexSubImage3D(nn,Se,mt,Nt,Jt,Ne,$e,He,zt,Gt.data):G.texSubImage3D(nn,Se,mt,Nt,Jt,Ne,$e,He,zt,nt,Gt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,mt,Nt,Ne,$e,zt,nt,Gt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,mt,Nt,Gt.width,Gt.height,zt,Gt.data):G.texSubImage2D(G.TEXTURE_2D,Se,mt,Nt,Ne,$e,zt,nt,Gt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Et),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Tn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Lt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pr),Se===0&&ee.generateMipmaps&&G.generateMipmap(nn),X.unbindTexture()},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),X.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,X.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var Nv;const Rt=(Nv=window.Telegram)==null?void 0:Nv.WebApp,Rv="/yggdrasil-tma/",Xc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],tA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Pv={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},Iv=()=>{try{const t={...Pv,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Pv,watch:Date.now()}}},Wa=()=>new Date().toISOString().slice(0,10),nA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",rh=[3,5,8,12,18,25,40],iA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],rA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],sh=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Xa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},Lv={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},oh={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},ah={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Kr({name:t,className:e}){return q.jsx("img",{src:t.includes(".")?`${Rv}img/${t}`:`${Rv}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const sA=`
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
`,Us=(t,e=.9,n=0)=>new we({color:t,roughness:e,metalness:n}),F=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},Dv=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),u=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,p=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,h=Math.min(1,l*1.4);i.setX(r,s+(u-.5)*e*(.45+h)),i.setZ(r,a+(p-.5)*e*(.35+h)),i.setY(r,o+(u+p-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t},oA=(t,e)=>{const n=Math.sin(t*.11+.7)*.65,i=Math.cos(e*.09-.4)*.48,r=Math.sin((t+e)*.055)*.35,s=Math.exp(-(t*t+(e+3)*(e+3))/900);return(n+i+r)*(1-s*.72)};function Ry(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function aA(t){const e=new Be,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=Us(i,.92),u=Us(s,.9),p=Us(o,.96),h=Us(r,.95),m=Us(a,.78),g=Us(2106150,.98),w=new B(new di(.28,.24,5,8),p);w.position.y=.72,e.add(w);const A=new B(new di(n?.37:.32,.56,6,10),u);A.position.y=1.15,e.add(A);const x=new B(new di(n?.4:.34,.34,5,8),u);x.scale.z=.82,x.position.y=1.28,e.add(x);const f=new B(new et(.36,.38,.09,12),p);f.position.y=.93,e.add(f);const _=new B(new Xn(.12,.12,.055),m);_.position.set(0,.93,.38),e.add(_);const y=new B(new et(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const T=new B(new ht(.31,16,12),l);T.scale.set(.92,1.06,.92),T.position.y=1.91,e.add(T);const D=new B(new ht(.325,14,10),h);D.scale.set(.98,.72,.98),D.position.set(0,2.08,-.025),e.add(D);const N=new B(new di(.18,.3,5,8),h);N.position.set(0,1.93,-.25),N.rotation.x=.15,e.add(N);const U=new B(new mn(.045,.13,5),l);U.rotation.x=Math.PI/2,U.position.set(0,1.92,.3),e.add(U);const k=new we({color:1513754,roughness:.55});for(const se of[-.105,.105]){const ue=new B(new ht(.025,7,5),k);ue.position.set(se,1.98,.285),e.add(ue)}if(n){const se=new B(new ht(.19,10,7),h);se.scale.set(.82,1,.72),se.position.set(0,1.8,.24),e.add(se)}else{const se=new B(new di(.055,.42,4,7),h);se.position.set(-.27,1.78,-.08),se.rotation.z=-.22,e.add(se)}const b=se=>{const ue=new Be;ue.position.set(se*(n?.43:.39),1.43,0),ue.rotation.z=se*.07;const Re=new B(new di(.105,.42,5,7),u);Re.position.y=-.23,ue.add(Re);const ke=new Be;ke.position.y=-.46,ue.add(ke);const vt=new B(new di(.085,.34,5,7),p);vt.position.y=-.2,ke.add(vt);const ct=new B(new ht(.105,9,7),l);return ct.position.y=-.43,ke.add(ct),e.add(ue),{upper:ue,elbow:ke}},S=b(-1),z=b(1),Y=se=>{const ue=new Be;ue.position.set(se*.15,.68,0);const Re=new B(new di(.12,.42,5,7),g);Re.position.y=-.23,ue.add(Re);const ke=new Be;ke.position.y=-.48,ue.add(ke);const vt=new B(new di(.095,.4,5,7),g);vt.position.y=-.22,ke.add(vt);const ct=new B(new di(.13,.24,5,7),p);return ct.scale.z=1.25,ct.position.set(0,-.47,.075),ke.add(ct),e.add(ue),ue},re=Y(-1),ce=Y(1),fe=new B(new di(.42,.1,5,8),p);fe.scale.z=.72,fe.position.y=1.48,e.add(fe);const W=new B(new Xn(.58,.92,.075),Us(t.id==="berserk"?2821132:1582894,.98));W.position.set(0,1.05,-.28),W.rotation.x=-.035,e.add(W);const te=new Be;if(t.id==="berserk"||t.id==="dwarf"){const se=new B(new et(.035,.045,.72,7),p);se.position.y=.36,te.add(se);const ue=new B(new Xn(.16,.34,.055),m);ue.position.set(0,.88,0),ue.rotation.z=t.id==="dwarf"?-.22:.22,te.add(ue)}else{const se=new B(new et(.028,.04,1.1,7),p);se.position.y=.52,te.add(se);const ue=new B(new mn(.075,.25,6),m);ue.position.y=1.18,te.add(ue)}if(te.position.set(.43,.32,.03),te.rotation.z=-.12,e.add(te),t.id==="viking"||t.id==="berserk"){const se=new B(new et(.3,.3,.1,16),p);se.rotation.x=Math.PI/2,se.position.set(0,1.12,-.37),e.add(se);const ue=new B(new ht(.065,8,6),m);ue.position.set(0,1.12,-.43),e.add(ue)}const H=new B(new Gn(.62,24),new At({color:0,transparent:!0,opacity:.32}));return H.rotation.x=-Math.PI/2,H.position.y=.02,e.add(H),e.userData.anim={armL:S,armR:z,legL:re,legR:ce,weapon:te,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},Ry(e)}function lA({h:t,on:e,eventDone:n}){const i=Tt.useRef(null),r=Tt.useRef(null),s=Tt.useRef(null),o=Tt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Tt.useState(""),[u,p]=Tt.useState(!1),[h,m]=Tt.useState(!1),[g,w]=Tt.useState(!1),[A,x]=Tt.useState(!1),f=Tt.useRef({x:0,z:1}),_=Tt.useRef(!1),y=Tt.useRef(null);Tt.useEffect(()=>{const b=i.current;if(!b)return;const S=new Ww;S.background=new yt(10794669),S.fog=new Qm(10793898,.00325);const z=new bi(54,1,.1,280);z.position.set(0,8.5,17);const Y=new eA({antialias:!0,powerPreference:"high-performance"});Y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),Y.shadowMap.enabled=!0,Y.shadowMap.type=$x,Y.outputColorSpace=In,Y.toneMapping=Kx,Y.toneMappingExposure=1.03,b.appendChild(Y.domElement);const re=new hE(15266536,6648159,1.18);S.add(re);const ce=new tv(16768952,2.32);ce.position.set(-42,58,34),ce.castShadow=!0,ce.shadow.mapSize.set(1536,1536),ce.shadow.camera.left=-95,ce.shadow.camera.right=95,ce.shadow.camera.top=95,ce.shadow.camera.bottom=-95,ce.shadow.bias=-5e-4,S.add(ce);const fe=new tv(12702934,.72);fe.position.set(55,18,-60),S.add(fe);const W=(c,v)=>{const d=Math.sin(c*.075)*.7+Math.cos(v*.062)*.55+Math.sin((c-v)*.045)*.35,E=Math.exp(-(c*c/850+(v+2)*(v+2)/1050)),I=Math.exp(-(c*c/150+(v-12)*(v-12)/2200));return d*(1-E*.88)-I*.18},te=document.createElement("canvas");te.width=te.height=128;const H=te.getContext("2d"),se=H.createRadialGradient(64,64,4,64,64,64);se.addColorStop(0,"rgba(255,238,194,0.30)"),se.addColorStop(.34,"rgba(255,231,178,0.16)"),se.addColorStop(.72,"rgba(255,225,170,0.055)"),se.addColorStop(1,"rgba(255,225,170,0)"),H.fillStyle=se,H.fillRect(0,0,128,128);const ue=new $r(te);ue.colorSpace=In;const Re=new At({map:ue,transparent:!0,depthWrite:!1,blending:ep,opacity:.58}),ke=[];[[-22,-4,7.5,4.8],[-9,18,5.6,2.2],[9,-10,6.8,5.4],[24,5,5,1.7],[-31,20,5.2,.8],[18,27,7,3.5]].forEach(([c,v,d,E])=>{const I=new B(new zn(d,d*.68),Re.clone());I.rotation.x=-Math.PI/2,I.rotation.z=E,I.position.set(c,W(c,v)+.018,v),I.renderOrder=2,S.add(I),ke.push(I)});const ct=document.createElement("canvas");ct.width=ct.height=128;const Pe=ct.getContext("2d"),pe=Pe.createRadialGradient(64,64,4,64,64,64);pe.addColorStop(0,"rgba(214,224,218,0.16)"),pe.addColorStop(.42,"rgba(210,222,216,0.075)"),pe.addColorStop(.76,"rgba(205,219,212,0.025)"),pe.addColorStop(1,"rgba(205,219,212,0)"),Pe.fillStyle=pe,Pe.fillRect(0,0,128,128);const ve=new $r(ct);ve.colorSpace=In;const Ve=new my({map:ve,color:14082266,transparent:!0,opacity:.34,depthWrite:!1,depthTest:!0,blending:$s}),rt=[];for(let c=0;c<26;c++){const v=new X1(Ve.clone()),d=7+F(c,821)*12;v.scale.set(d,d*(.42+F(c,822)*.24),1),v.position.set(-78+F(c,823)*156,1.2+F(c,824)*3,-62+F(c,825)*124),v.material.opacity=.1+F(c,826)*.1,S.add(v),rt.push(v)}const qe=c=>{const v=document.createElement("canvas");v.width=v.height=512;const d=v.getContext("2d"),E=C=>Math.abs(Math.sin(C*12.9898)*43758.5453)%1;if(c==="ground"){d.fillStyle="#4c6042",d.fillRect(0,0,512,512);for(let C=0;C<1800;C++){const O=E(C*1.17)*512,j=E(C*2.31)*512,$=10+E(C*3.71)*28,L=E(C*4.13);d.fillStyle=L>.72?`rgba(96,108,63,${.08+E(C)*.12})`:`rgba(30,36,25,${.05+E(C)*.12})`,d.beginPath(),d.arc(O,j,$,0,Math.PI*2),d.fill()}for(let C=0;C<650;C++){const O=E(C*7.1)*512,j=E(C*8.2)*512;d.strokeStyle=`rgba(142,154,91,${.18+E(C*2)*.15})`,d.lineWidth=1+E(C*4)*1.5,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(E(C*5)-.5)*5,j-3-E(C*6)*5),d.stroke()}}else if(c==="wood"){d.fillStyle="#5a3d29",d.fillRect(0,0,512,512);for(let C=0;C<512;C+=22)d.fillStyle=`rgba(25,15,9,${.18+E(C)*.13})`,d.fillRect(0,C,512,3),d.strokeStyle=`rgba(154,111,69,${.08+E(C*2)*.08})`,d.lineWidth=2,d.beginPath(),d.moveTo(0,C+7),d.bezierCurveTo(150,C+2,340,C+13,512,C+5),d.stroke();for(let C=0;C<65;C++){const O=E(C*2.1)*512;d.fillStyle=`rgba(20,12,8,${.12+E(C*3)*.16})`,d.fillRect(O,0,2+E(C*4)*3,512)}}else if(c==="roof"){d.fillStyle="#252522",d.fillRect(0,0,512,512);for(let C=-30;C<550;C+=25){d.fillStyle=`rgba(105,94,77,${.12+E(C)*.08})`,d.fillRect(0,C,512,2),d.strokeStyle="rgba(12,12,11,.48)",d.lineWidth=3;for(let O=-40;O<560;O+=38)d.beginPath(),d.moveTo(O,C),d.lineTo(O-18,C+28),d.stroke()}for(let C=0;C<180;C++)d.fillStyle=`rgba(170,154,123,${.03+E(C)*.07})`,d.fillRect(E(C*2)*512,E(C*3)*512,2+E(C*4)*7,2)}else if(c==="bark"){d.fillStyle="#7b5a3f",d.fillRect(0,0,512,512);for(let C=0;C<76;C++){const O=E(C*2.1)*512,j=2+E(C*3.7)*7;d.fillStyle=`rgba(${24+E(C)*24},${16+E(C*4)*18},${10+E(C*5)*14},${.18+E(C*6)*.22})`,d.fillRect(O,0,j,512)}for(let C=0;C<80;C++){const O=E(C*7.1)*512,j=E(C*8.2)*512;d.strokeStyle=`rgba(126,91,60,${.07+E(C*2)*.09})`,d.lineWidth=1+E(C*3)*2,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(E(C*4)-.5)*12,j+18+E(C*5)*45),d.stroke()}}else if(c==="foliage"){d.fillStyle="#68865a",d.fillRect(0,0,512,512);for(let C=0;C<1900;C++){const O=E(C*1.17)*512,j=E(C*2.31)*512,$=E(C*3.7),L=$>.72?112:$>.36?92:74,K=$>.72?145:$>.36?121:98,Q=$>.72?76:$>.36?60:48;d.fillStyle=`rgba(${L},${K},${Q},${.16+E(C*4)*.28})`,d.beginPath(),d.arc(O,j,1.5+E(C*5)*4.5,0,Math.PI*2),d.fill()}for(let C=0;C<260;C++){const O=E(C*9.1)*512,j=E(C*10.2)*512;d.strokeStyle=`rgba(18,31,22,${.08+E(C*3)*.12})`,d.lineWidth=1,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(E(C*2)-.5)*10,j+(E(C*4)-.5)*10),d.stroke()}}else{d.fillStyle="#514333",d.fillRect(0,0,512,512);for(let C=0;C<1300;C++){const O=E(C*1.3)*512,j=E(C*2.7)*512;d.fillStyle=`rgba(${45+E(C*3)*38},${35+E(C*4)*28},${23+E(C*5)*20},${.08+E(C*6)*.18})`,d.fillRect(O,j,2+E(C*7)*7,1+E(C*8)*4)}}const I=new $r(v);return I.wrapS=I.wrapT=ts,I.colorSpace=In,I.anisotropy=4,I},ot=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const v=c.getContext("2d"),d=v.createImageData(128,128);for(let C=0;C<128;C++)for(let O=0;O<128;O++){const j=(C*128+O)*4,$=Math.sin(O*.37)*.3+Math.sin(C*.61)*.24+Math.sin((O+C)*.17)*.2+Math.sin((O-C)*.09)*.14,L=Math.max(214,Math.min(250,Math.round(232+$*18)));d.data[j]=L,d.data[j+1]=L,d.data[j+2]=L,d.data[j+3]=255}v.putImageData(d,0,0);const E=new $r(c);E.wrapS=E.wrapT=ts,E.repeat.set(5,5);const I=new $r(c);return I.wrapS=I.wrapT=ts,I.repeat.set(4,4),{height:E,rough:I}})(),G=qe("ground");G.repeat.set(5,6);const xt=qe("bark");xt.wrapS=xt.wrapT=ts,xt.repeat.set(1.2,1.8);const at=qe("foliage");at.wrapS=at.wrapT=ts,at.repeat.set(1.35,1.35);const it=new zn(190,190,62,62),X=it.attributes.position;for(let c=0;c<X.count;c++){const v=X.getX(c),d=-X.getY(c);X.setZ(c,W(v,d))}it.rotateX(-Math.PI/2),it.computeVertexNormals();const Le=new we({map:G,roughness:.985,metalness:0,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.018}),de=new B(it,Le);de.receiveShadow=!0,S.add(de);const he=(c,v,d,E,I)=>{const C=[],O=[];for(let K=0;K<=18;K++){const Q=-95+10.555555555555555*K,ye=Math.sin(K*1.73+E)*.5+Math.cos(K*.61+E*1.9)*.28,ge=d*(.72+ye*.34);C.push(Q,0,0),C.push(Q+ye*2.2,ge,0)}for(let K=0;K<18;K++){const Q=K*2,ye=Q+1,ge=Q+2,Ye=Q+3;O.push(Q,ye,ge,ye,Ye,ge)}const $=new ln;$.setAttribute("position",new Ct(C,3)),$.setIndex(O),$.computeVertexNormals();const L=new B($,new $f({color:I,transparent:!0,opacity:.72,side:Xt,depthWrite:!1}));return L.rotation.x=Math.PI/2,L.position.set(0,1.5,c),L.scale.set(1,v,1),S.add(L),L};he(-82,1,17,2.1,7505277),he(-72,1,11,6.7,8491914);const tt=(c,v,d,E,I)=>{const C=new Be,O=new B(new et(E*.1,E*.14,d*.42,5),new $f({color:5917241}));O.position.y=d*.21,C.add(O);for(let j=0;j<4;j++){const $=E*(1-j*.17),L=new B(new mn($,d*(.48-j*.035),7,1),new $f({color:I}));L.position.y=d*(.38+j*.15),L.rotation.y=(j*1.7+c*.03)%Math.PI,C.add(L)}C.position.set(c,oA(c,v)-.2,v),C.scale.setScalar(.82+F(c,v)*.34),S.add(Ry(C))};for(let c=0;c<26;c++){const v=-86+c*6.8;tt(v,-67-c%3*3,9+c%5*1.5,2.7+c%4*.45,5401432)}for(let c=0;c<20;c++){const v=-82+c*8.7;tt(v,68+c%4*2.5,7.5+c%4*1.2,2.4,6387557)}const be=(c,v,d)=>(v&&(c.userData={id:v,label:d||v}),c.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),S.add(c),v&&ie.push(c),c),P=(c,v=.9,d=0)=>new we({color:c,roughness:v,metalness:d,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:d>.35?.008:.018}),M=(c,v,d,E,I=.9)=>new B(new Xn(c,v,d),P(E,I)),ne=(c,v,d,E=10,I=.9)=>new B(new et(c,c,v,E),P(d,I)),le=(c,v,d)=>{const E=ne(v,c,d,10,.96);return E.rotation.z=Math.PI/2,E},xe=(c,v,d)=>{const E=new Be,I=c*.62,C=.61,O=new we({map:kr,color:d,roughness:.96,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.012,side:Xt}),j=new B(new Xn(I,.18,v),O),$=j.clone();return j.rotation.z=C,$.rotation.z=-C,j.position.x=-c*.205,$.position.x=c*.205,E.add(j,$),E},ie=[],Fe=[],Ae=[],Ze=[],Je=[],Te=.62,Ie=(c,v,d,E,I=0,C=.12)=>Je.push({kind:"rect",x:c,z:v,w:d+C*2,d:E+C*2,rot:I}),Oe=(c,v,d,E=.12)=>Je.push({kind:"circle",x:c,z:v,r:d+E}),Qe=(c,v,d,E,I,C=.12)=>Je.push({kind:"segment",x1:c,z1:v,x2:d,z2:E,r:I+C}),De=(c,v,d)=>{if(d.kind==="circle")return Math.hypot(c-d.x,v-d.z)<d.r+Te;if(d.kind==="rect"){const L=Math.cos(d.rot),K=Math.sin(d.rot),Q=c-d.x,ye=v-d.z,ge=L*Q-K*ye,Ye=K*Q+L*ye,ft=Math.max(-d.w/2,Math.min(d.w/2,ge)),bt=Math.max(-d.d/2,Math.min(d.d/2,Ye));return Math.hypot(ge-ft,Ye-bt)<Te}const E=d.x2-d.x1,I=d.z2-d.z1,C=E*E+I*I,O=C>0?Math.max(0,Math.min(1,((c-d.x1)*E+(v-d.z1)*I)/C)):0,j=d.x1+E*O,$=d.z1+I*O;return Math.hypot(c-j,v-$)<d.r+Te},ut=(c,v)=>_.current?c<kn-2.72||c>kn+2.72||v<Cn-2.05||v>Cn+2.3:Je.some(d=>De(c,v,d)),Z=(c,v,d)=>{if(_.current){const C=Math.max(kn-2.55,Math.min(kn+2.55,v)),O=Math.max(Cn-1.92,Math.min(Cn+2.55,d));c.x=C,c.z=O;return}const E=Math.max(-88,Math.min(88,v)),I=Math.max(-89,Math.min(89,d));if(!ut(E,I)){c.x=E,c.z=I;return}ut(E,c.z)||(c.x=E),ut(c.x,I)||(c.z=I)},Ce=P(3425343,1);for(let c=0;c<22;c++){const v=new Be,d=-105+c*10,E=8+F(c,7)*9,I=new B(new mn(E,18+F(c,8)*16,7),Ce);I.position.y=8,v.add(I),v.position.set(d,-1,-94+F(c,9)*11),be(v)}const _e=[];for(let c=0;c<=32;c++)_e.push({z:-94+c*6,x:-57+Math.sin(c*.42)*4.2});const Ge=[],Me=[],me=5.4;for(let c=0;c<_e.length;c++){const v=_e[c],d=_e[Math.max(0,c-1)],E=_e[Math.min(_e.length-1,c+1)],I=E.x-d.x,C=E.z-d.z,O=Math.max(.001,Math.hypot(I,C)),j=-C/O,$=I/O,L=W(v.x,v.z)+.055;for(const K of[-1,1]){const Q=me*K;Ge.push(v.x+j*Q,L+Math.sin(c*1.7+K)*.035,v.z+$*Q)}if(c<_e.length-1){const K=c*2;Me.push(K,K+1,K+2,K+1,K+3,K+2)}}const je=new ln;je.setAttribute("position",new Ct(Ge,3)),je.setIndex(Me),je.computeVertexNormals();const dt=new we({color:3235689,roughness:.52,metalness:0,transparent:!0,opacity:.9}),Ht=new B(je,dt);Ht.receiveShadow=!0,S.add(Ht);const It=new we({color:5208192,roughness:.68,metalness:0,transparent:!0,opacity:.58,side:Xt});for(const c of[-1,1]){const v=[],d=[];for(let O=0;O<_e.length;O++){const j=_e[O],$=_e[Math.max(0,O-1)],L=_e[Math.min(_e.length-1,O+1)],K=L.x-$.x,Q=L.z-$.z,ye=Math.max(.001,Math.hypot(K,Q)),ge=-Q/ye,Ye=K/ye,ft=me*c,bt=(me-1.18)*c;if(v.push(j.x+ge*ft,W(j.x,j.z)+.072,j.z+Ye*ft),v.push(j.x+ge*bt,W(j.x,j.z)+.078,j.z+Ye*bt),O<_e.length-1){const Ut=O*2;d.push(Ut,Ut+1,Ut+2,Ut+1,Ut+3,Ut+2)}}const I=new ln;I.setAttribute("position",new Ct(v,3)),I.setIndex(d),I.computeVertexNormals();const C=new B(I,It);C.receiveShadow=!0,S.add(C)}const _i=[],Li=new At({color:12638680,transparent:!0,opacity:.085,depthWrite:!1,side:Xt});for(let c=0;c<22;c++){const v=Math.min(_e.length-1,2+Math.floor(F(c,1510)*(_e.length-4))),d=_e[v],E=_e[Math.max(0,v-1)],I=_e[Math.min(_e.length-1,v+1)],C=Math.atan2(I.x-E.x,I.z-E.z),O=new B(new zn(1.5+F(c,1511)*2.8,.08+F(c,1512)*.07),Li.clone());O.rotation.x=-Math.PI/2,O.rotation.z=C,O.position.set(d.x+(F(c,1513)-.5)*6.4,W(d.x,d.z)+.095,d.z+(F(c,1514)-.5)*5.4),S.add(O),_i.push({mesh:O,phase:F(c,1515)*Math.PI*2,speed:.55+F(c,1516)*.7})}const ha=[];for(let c=0;c<52;c++){const v=Math.min(_e.length-1,Math.floor(c*.62)),d=_e[v],E=_e[Math.max(0,v-1)],I=_e[Math.min(_e.length-1,v+1)],C=I.x-E.x,O=I.z-E.z,j=Math.max(.001,Math.hypot(C,O)),$=c%2===0?-1:1,L=.34+F(c,15)*.72,K=me+$*(.25+F(c,16)*1.4),Q=new B(new en(L,1),P(6185562,1));Q.position.set(d.x+-O/j*K,W(d.x,d.z)+.18,d.z+C/j*K),Q.scale.y=.5+F(c,17)*.35,be(Q),Oe(Q.position.x,Q.position.z,L*.75,.03)}for(let c=0;c<18;c++){const v=Math.min(_e.length-1,1+Math.floor(F(c,1520)*(_e.length-2))),d=_e[v],E=_e[Math.max(0,v-1)],I=_e[Math.min(_e.length-1,v+1)],C=I.x-E.x,O=I.z-E.z,j=Math.max(.001,Math.hypot(C,O)),$=(F(c,1521)-.5)*6.4,L=new B(new en(.16+F(c,1522)*.3,1),P(6845293,1));L.position.set(d.x+-O/j*$,W(d.x,d.z)+.045,d.z+C/j*$),L.scale.y=.35+F(c,1523)*.45,L.rotation.set(F(c,1524)*2,F(c,1525)*2,F(c,1526)*2),S.add(L)}const En=(c,v)=>{const d=c.map(([j,$])=>new V(j,W(j,$)+.035,$)),E=[],I=[];for(let j=0;j<d.length;j++){const $=d[Math.max(0,j-1)],L=d[Math.min(d.length-1,j+1)],K=L.x-$.x,Q=L.z-$.z,ye=Math.max(.001,Math.hypot(K,Q)),ge=-Q/ye,Ye=K/ye;if(E.push(d[j].x+ge*v/2,d[j].y,d[j].z+Ye*v/2,d[j].x-ge*v/2,d[j].y+.01,d[j].z-Ye*v/2),j<d.length-1){const ft=j*2;I.push(ft,ft+1,ft+2,ft+1,ft+3,ft+2)}}const C=new ln;C.setAttribute("position",new Ct(E,3)),C.setIndex(I),C.computeVertexNormals();const O=new B(C,new we({map:qe("road"),roughness:1}));O.receiveShadow=!0,S.add(O),[-v*.22,v*.22].forEach(j=>{const $=d.map((Q,ye)=>{const ge=d[Math.max(0,ye-1)],Ye=d[Math.min(d.length-1,ye+1)],ft=Ye.x-ge.x,bt=Ye.z-ge.z,Ut=Math.max(.001,Math.hypot(ft,bt));return new V(Q.x+-bt/Ut*j,Q.y+.045,Q.z+ft/Ut*j)}),L=new ll(new Xp($),Math.max(12,d.length*4),.055,5,!1),K=new B(L,P(3352863,1));K.scale.y=.12,S.add(K)})};En([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),En([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),En([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),En([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),En([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),En([[4,14],[-3,22],[-7,31],[-8,42]],3.8),En([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),En([[4,14],[10,28],[18,41],[27,57]],3.8),En([[5,31],[15,45],[27,57],[39,70]],3.7),En([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),En([[-39,-8],[-47,-12],[-53,-15]],3.4);const Fr=qe("wood");Fr.repeat.set(2,1);const kr=qe("roof");kr.repeat.set(2,2);const li=(c,v,d,E,I,C,O,j,$)=>{const L=new Be;L.rotation.y=I,L.position.set(c,W(c,v),v),L.userData={id:O,label:C};const K=new we({map:Fr,color:j,roughness:.94,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.014}),Q=M(d+.7,.55,E+.7,5724755,1);Q.position.y=.28,L.add(Q);for(let Ft=0;Ft<7;Ft++){const kt=.62+Ft*.47,pn=le(d-Ft%2*.2,.29,j);pn.material=K,pn.position.set(0,kt,E*.5-.03),L.add(pn);const Vn=pn.clone();Vn.position.z=-E*.5+.03,L.add(Vn);const ui=le(E+.06,.29,j);ui.material=K,ui.rotation.y=Math.PI/2,ui.position.set(-d*.5+.03,kt,0),L.add(ui);const ze=ui.clone();ze.position.x=d*.5-.03,L.add(ze)}for(const Ft of[-d*.5,d*.5])for(const kt of[-E*.5,E*.5]){const pn=ne(.34,3.75,3482649,8,1);pn.position.set(Ft,2.05,kt),L.add(pn)}const ye=M(1.18,2.05,.18,2365458,1);ye.position.set(0,1.37,E*.5+.31),L.add(ye);for(const Ft of[-.67,.67]){const kt=M(.15,2.28,.24,3811613,1);kt.position.set(Ft,1.42,E*.5+.34),L.add(kt)}const ge=le(1.65,.11,3679770);ge.position.set(0,2.53,E*.5+.34),L.add(ge);const Ye=ne(.055,.12,13015634,8,.55);Ye.rotation.z=Math.PI/2,Ye.position.set(.33,1.38,E*.5+.43),L.add(Ye);const ft=new we({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Ft of[-d*.27,d*.27]){const kt=M(1.28,1.02,.13,3154457,1);kt.position.set(Ft,2.02,E*.5+.29),L.add(kt);const pn=M(.94,.7,.055,15251295,.45);pn.material=ft,pn.position.set(Ft,2.02,E*.5+.36),L.add(pn);const Vn=M(.07,.78,.09,3154457,1);Vn.position.set(Ft,2.02,E*.5+.4),L.add(Vn);const ui=M(1.05,.07,.09,3154457,1);ui.position.set(Ft,2.02,E*.5+.4),L.add(ui)}const bt=xe(d+1.55,E+1.35,$);bt.position.y=4.18,L.add(bt);for(const Ft of[-1,1]){const kt=le(E+1.48,.12,3154715);kt.position.set(Ft*(d*.46),3.78,0),kt.rotation.y=Math.PI/2,L.add(kt)}const Ut=le(E+1.45,.18,2760730);Ut.rotation.y=Math.PI/2,Ut.position.y=5.28,L.add(Ut);const Bt=M(d*.34,.16,1.05,6439467,1);Bt.position.set(0,.64,E*.5+.66),L.add(Bt);for(const Ft of[-d*.16,d*.16]){const kt=le(.85,.08,4796447);kt.rotation.y=Math.PI/2,kt.position.set(Ft,.83,E*.5+.95),L.add(kt)}const Qt=ne(.34,2,5722958,8,1);Qt.position.set(d*.25,5.05,-E*.1),L.add(Qt);const Kt=M(.72,.14,.72,3157289,1);Kt.position.set(d*.25,6.08,-E*.1),L.add(Kt),be(L,O,C),ie.push(L),Ie(c,v,d+.85,E+.85,I,.05)};li(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),li(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),li(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),li(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),li(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),li(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const on=new Be;on.position.set(-10,W(-10,-5),-5),on.userData={id:"forge",label:"Кузница"};for(let c=0;c<7;c++){const v=.62+c*.47,d=le(9,.27,4401693);d.position.set(0,v,-2.85),on.add(d);const E=le(6,.27,4401693);E.rotation.y=Math.PI/2,E.position.set(-4.35,v,0),on.add(E)}for(const c of[-4.35,4.35]){const v=ne(.34,4,2825493,9,1);v.position.set(c,2,-2.85),on.add(v)}const pa=xe(9.8,7,2433825);pa.position.y=4.45,on.add(pa);const Or=le(7.2,.18,2169366);Or.rotation.y=Math.PI/2,Or.position.y=5.42,on.add(Or);for(const c of[-3.7,3.7]){const v=le(4.7,.13,2825494);v.rotation.z=c<0?-.6:.6,v.position.set(c*.48,3.15,.1),on.add(v)}const ma=ne(1.15,1.65,3420462,10,1);ma.position.set(-2,.83,1.15),on.add(ma);const ga=ne(.88,.35,2565925,10,1);ga.position.set(-2,1.83,1.15),on.add(ga);const va=new B(new Gn(.52,16),new we({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));va.rotation.y=Math.PI,va.position.set(-2,1.02,2.23),on.add(va);const Bl=ne(.27,.85,2697770,8,.45);Bl.position.set(1.15,.43,1.05),on.add(Bl);const Hl=M(1.45,.34,.58,2435114,.38);Hl.position.set(1.15,1,1.05),on.add(Hl);const _a=new B(new mn(.18,.72,8),P(2435114,.38,.05));_a.rotation.z=-Math.PI/2,_a.position.set(1.98,1,1.05),on.add(_a);for(let c=0;c<4;c++){const v=le(1.25,.045,11184548);v.rotation.z=-.35+c*.18,v.position.set(2.05+c*.18,1.12,1.34),on.add(v)}const xa=M(1.15,.42,.62,3876893,1);xa.position.set(2.15,.72,-.8),xa.rotation.z=-.18,on.add(xa);const ya=ne(.07,.55,5980979,8,1);ya.rotation.z=Math.PI/2,ya.position.set(1.55,.84,-.8),on.add(ya),be(on,"forge","Кузница"),ie.push(on),Ie(-10,-5,9.6,6.6,0,.05);const R=new Yi(16742962,3.4,14,2);R.position.set(-12,W(-12,-5)+2.2,-4),S.add(R);const ee=new B(new Gn(8.5,32),new we({color:7035463,roughness:1}));ee.rotation.x=-Math.PI/2,ee.position.set(1,W(1,0)+.05,0),ee.receiveShadow=!0,S.add(ee);for(let c=0;c<18;c++){const v=c/18*Math.PI*2,d=new B(new en(.38,1),P(7039843,1));d.position.set(1+Math.cos(v)*8.8,W(1+Math.cos(v)*8.8,Math.sin(v)*8.8)+.22,Math.sin(v)*8.8),S.add(d)}const ae=(c,v)=>{const d=new Be,E=M(2.8,.22,1,6832937,1);E.position.y=1.05,d.add(E);for(const I of[-1.05,1.05]){const C=M(.16,1,.16,3877149,1);C.position.set(I,.5,-.32),d.add(C);const O=C.clone();O.position.z=.32,d.add(O)}d.position.set(c,W(c,v),v),S.add(d)};ae(-4,2),ae(7,3);const oe=(c,v,d)=>{const E=new Be;E.position.set(c,W(c,v),v);for(let L=0;L<7;L++){const K=L/7*Math.PI*2,Q=new B(new en(.32*d,1),P(6117970,1));Q.position.set(Math.cos(K)*.7*d,.25*d,Math.sin(K)*.7*d),E.add(Q)}const I=M(.2*d,.2*d,1.5*d,4861211,1),C=I.clone();I.rotation.y=.55,C.rotation.y=-.55,I.position.y=C.position.y=.38*d,E.add(I,C);const O=new we({color:16744744,emissive:16731402,emissiveIntensity:4}),j=new B(new mn(.5*d,1.35*d,8),O);j.position.y=1.02*d,E.add(j),S.add(E);const $=new Yi(16747068,2.4*d,12*d,2);return $.position.set(c,W(c,v)+2*d,v),S.add($),Fe.push({light:$,flame:j,phase:F(c,v)*8}),E},J=new Be;J.userData={id:"mimir",label:"Колодец Мимира"},J.position.set(1,W(1,0),0);const Se=new B(new Gn(1.18,32),new we({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));Se.rotation.x=-Math.PI/2,Se.position.y=.5,J.add(Se);for(let c=0;c<3;c++){const v=new B(new Ot(.38+c*.28,.025,6,40),new At({color:c===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.525,J.add(v)}for(const c of[-1.35,1.35]){const v=M(.24,3,.24,4861984,1);v.position.set(c,1.55,0),J.add(v)}const Ne=M(3.15,.26,.26,3679513,1);Ne.position.y=2.96,J.add(Ne);const $e=new B(new et(.035,.035,1.2,6),P(8086088,1));$e.position.y=2.25,J.add($e);const He=M(.58,.5,.58,5913383,1);He.position.set(0,1.65,0),J.add(He);const st=new B(new Ot(1.55,.055,8,48),new we({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));st.rotation.x=Math.PI/2,st.position.y=.54,J.add(st),be(J,"mimir","Колодец Мимира"),ie.push(J),Oe(1,0,2,.08);const lt=new Yi(7530656,2,10,2);lt.position.set(1,W(1,0)+1.5,0),S.add(lt),oe(18,-15,.72);const We=(c,v,d,E,I=1.25)=>{const C=new Be,O=d-c,j=E-v,$=Math.hypot(O,j),L=Math.max(1,Math.floor($/1.55));for(let K=0;K<=L;K++){const Q=K/L,ye=c+O*Q,ge=v+j*Q,Ye=M(.18,I,.18,4796447,1);Ye.position.set(ye,W(ye,ge)+I/2,ge),C.add(Ye)}for(const K of[-.28,.38]){const Q=M(.14,.14,$,5978917,1);Q.rotation.y=Math.atan2(O,j),Q.position.set((c+d)/2,W((c+d)/2,(v+E)/2)+I*K,(v+E)/2),C.add(Q)}S.add(C),Qe(c,v,d,E,.12,.02)},mt=(c,v,d,E,I,C,O)=>{const j=new Be;j.position.set(c,W(c,v),v),j.rotation.y=I,j.userData={id:O,label:C};const $=M(d+.25,.35,E+.25,5591368,1);$.position.y=.18,j.add($);const L=new B(new Xn(d,2.5,E),new we({map:Fr,color:6439983,roughness:1}));L.position.y=1.45,j.add(L);const K=new B(new Xn(d+.6,.18,E+.65),new we({map:kr,color:2696996,roughness:1}));K.rotation.z=.55,K.position.set(-.16,3,0),j.add(K);const Q=K.clone();Q.rotation.z=-.55,Q.position.x=.16,j.add(Q);const ye=M(1.05,1.75,.12,2759700,1);ye.position.set(0,1.05,E/2+.07),j.add(ye),be(j,O,C),ie.push(j),Ie(c,v,d+.55,E+.55,I,.04)},Nt=(c,v,d=1)=>{const E=new Be;E.position.set(c,W(c,v),v);const I=new B(new et(.65*d,.65*d,1.2*d,10),P(9073729,1));I.rotation.z=Math.PI/2,I.position.y=.62*d,E.add(I);for(let C=0;C<3;C++){const O=new B(new Ot(.66*d,.025*d,5,18),P(5851693,1));O.rotation.y=Math.PI/2,O.position.y=(.28+C*.34)*d,E.add(O)}be(E)},Jt=(c,v,d)=>{const E=new Be;E.position.set(c,W(c,v),v),E.rotation.y=d;const I=M(2.8,.28,1.45,6636331,1);I.position.y=1,E.add(I);for(const O of[-1.15,1.15])for(const j of[-.55,.55]){const $=M(.16,1.15,.16,4401950,1);$.position.set(O,.55,j),E.add($)}for(const O of[-1.15,1.15]){const j=new B(new et(.5,.5,.18,14),P(2696738,1));j.rotation.z=Math.PI/2,j.position.set(O,.52,-.92),E.add(j)}const C=M(.16,.16,2.4,4796447,1);C.rotation.x=Math.PI/2,C.position.set(0,.72,-2),E.add(C),be(E)},Gt=(c,v,d=0)=>{const E=new Be;E.position.set(c,W(c,v),v),E.rotation.y=d;const I=M(2.2,.16,.5,7359021,1);I.position.y=.85,E.add(I);for(const C of[-.78,.78]){const O=M(.12,.8,.12,4139549,1);O.position.set(C,.4,0),E.add(O)}be(E)},zt=(c,v)=>{const d=new Be;d.position.set(c,W(c,v),v);for(let O=0;O<10;O++){const j=O/10*Math.PI*2,$=M(.45,.38,.38,6710621,1);$.position.set(Math.cos(j)*.95,.19,Math.sin(j)*.95),$.rotation.y=j,d.add($)}const E=M(.16,2.2,.16,4861984,1),I=E.clone();E.position.set(-.9,1.2,0),I.position.set(.9,1.2,0),d.add(E,I);const C=M(2,.16,.16,3876891,1);C.position.y=2.25,d.add(C),be(d)};mt(-19,31,8,5,.08,"Амбар","barn"),mt(17,34,7,5,-.2,"Сарай","shed"),mt(27,13,6,4,.45,"Склад рыбака","fishshed"),We(-25,27,-13,27),We(-25,27,-25,38),We(-25,38,-14,38),We(12,29,25,29),We(25,29,25,40),We(25,40,12,40),We(29,-1,39,-1),We(39,-1,39,10),We(39,10,30,10);for(const c of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Nt(c[0],c[1],c[2]);Jt(-17,24,.18),Jt(29,-5,-.55),Gt(-20,23,.18),Gt(25,31,-.2),li(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),li(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),li(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),li(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Ie(-31,8,7.8,5.8,.1,.04),Ie(-27,20,7.8,5.8,-.25,.04),Ie(31,18,7.8,5.8,.32,.04),Ie(20,24,7.8,5.8,-.12,.04);const nt=(c,v,d)=>{const E=new Be;E.position.set(c,W(c,v),v),E.rotation.y=d;const I=M(3,.18,1.25,7357994,1);I.position.y=1.45,E.add(I);for(const O of[-1.25,1.25])for(const j of[-.48,.48]){const $=M(.13,1.45,.13,4270877,1);$.position.set(O,.72,j),E.add($)}const C=new B(new mn(1.65,2.5,4,1,!1,Math.PI/4),P(4798510,1));C.scale.z=.55,C.position.y=2.15,E.add(C),be(E)};nt(-5,-7,.12),nt(8,-5,-.18),nt(6,7,.5);for(const c of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])zt(c[0],c[1]);const nn=(c,v,d=1)=>{const E=new Be,I=W(c,v);for(let C=0;C<5;C++){const O=new B(new ht((.28+F(C,c)*.18)*d,8,6),P(C%2?3494457:4284223,1));O.position.set((F(C,2)-.5)*.7*d,.28*d,(F(C,3)-.5)*.7*d),E.add(O)}E.position.set(c,I,v),be(E)};for(let c=0;c<48;c++){const v=F(c,501)*Math.PI*2,d=18+F(c,502)*39,E=Math.cos(v)*d,I=Math.sin(v)*d+4;Math.abs(E)<9&&Math.abs(I)<14||nn(E,I,.65+F(c,503)*.75)}for(let c=0;c<34;c++){const v=-84+F(c,610)*168,d=-82+F(c,611)*164;if(Math.hypot(v,d-2)<24)continue;const E=.25+F(c,612)*.55,I=new B(new en(E,1),P(5725013,1));I.scale.y=.55,I.position.set(v,W(v,d)+E*.28,d),I.rotation.set(F(c,613),F(c,614),F(c,615)),be(I),Oe(v,d,E*.8,.03)}li(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),mt(-58,42,6,4,-.12,"Старый амбар","oldbarn"),We(-70,32,-60,32),We(-70,32,-70,43),We(-70,43,-61,43),Nt(-68,8,.9),Jt(-62,2,-.25),zt(-58,4);const Et=new Be;Et.position.set(-63,W(-63,47),47);for(let c=0;c<6;c++){const v=M(10,.035,.12,4208682,1);v.position.set(0,.02,(c-2.5)*1.05),v.rotation.y=.06,Et.add(v)}be(Et);const vn=(c,v)=>{const d=document.createElement("canvas");d.width=d.height=256;const E=d.getContext("2d");E.clearRect(0,0,256,256),E.textAlign="center",E.textBaseline="middle",E.shadowColor=v,E.shadowBlur=18,E.fillStyle=v,E.font="bold 150px serif",E.fillText(c,128,132),E.shadowBlur=4,E.globalAlpha=.55,E.font="bold 118px serif",E.fillText(c,128,132);const I=new $r(d);return I.colorSpace=In,I.anisotropy=4,I},Tn=(c,v,d,E,I,C=.72,O=0)=>{const j="#"+I.toString(16).padStart(6,"0"),$=new At({map:vn(E,j),transparent:!0,depthWrite:!1,side:Xt}),L=new B(new zn(C,C),$);return L.rotation.x=-Math.PI/2,L.rotation.z=O,L.position.set(v,.065,d),c.add(L),L},Lt=new Be,pr=18,$t=55;Lt.position.set(pr,W(pr,$t),$t),Lt.userData={id:"runefield",label:"Поле Рун"};const qn=new we({color:5857629,roughness:.94,metalness:.04}),ci=new we({color:3884096,roughness:1});new At({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Xt}),new At({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Xt}),new At({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Xt});const bn=new B(new Gn(12.2,48),new we({color:2636332,roughness:1,transparent:!0,opacity:.92}));bn.rotation.x=-Math.PI/2,bn.position.y=.018,Lt.add(bn);const Un=new B(new et(2.15,2.55,.48,10),ci);Un.position.y=.24,Un.scale.z=.82,Lt.add(Un);const zr=new B(new en(1.48,1),qn);zr.scale.set(1,1.65,.72),zr.position.y=1.38,zr.rotation.y=.18,Lt.add(zr);const Di=new B(new en(.78,1),qn);Di.scale.set(.72,1.15,.55),Di.position.set(0,2.72,.02),Di.rotation.z=.06,Lt.add(Di);const s0=Tn(Lt,0,0,"ᚠ",10481407,1.15,0);s0.position.y=2.55,s0.rotation.x=0;const o0=new Yi(7793407,1.7,9,2);o0.position.set(0,2,.8),Lt.add(o0);for(const[c,v]of[[3,.075],[7.1,.065],[10.1,.045]]){const d=new B(new Ot(c,v,8,96),new At({color:15320941,transparent:!0,opacity:c<8?.82:.58,depthWrite:!1}));d.rotation.x=Math.PI/2,d.position.y=.055,Lt.add(d)}const ws=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let c=0;c<16;c++){const v=c/16*Math.PI*2;Tn(Lt,Math.cos(v)*8.55,Math.sin(v)*8.55,ws[c],c%3===0?15055195:c%3===1?7857653:12093423,.62,v+.18)}for(let c=0;c<12;c++){const v=c/12*Math.PI*2+.13;Tn(Lt,Math.cos(v)*5.45,Math.sin(v)*5.45,ws[(c+5)%ws.length],c%2?7659506:12684269,.38,v)}for(let c=0;c<10;c++){const v=c/10*Math.PI*2+.16,d=9.15+(.5-F(c,1202))*1,E=2.4+F(c,1203)*2,I=.72+F(c,1204)*.48,C=new B(new en(.82+F(c,1205)*.22,1),qn);C.scale.set(I,E,.72+F(c,1206)*.28),C.position.set(Math.cos(v)*d,C.scale.y*.58,Math.sin(v)*d),C.rotation.set((F(c,1207)-.5)*.22,v+(F(c,1208)-.5)*.3,(F(c,1209)-.5)*.18),Lt.add(C);const O=ws[c%ws.length],j=vn(O,c%3===0?"#8eeeff":c%3===1?"#c08cff":"#ffd86b"),$=new B(new zn(.62,.92),new At({map:j,transparent:!0,depthWrite:!1,side:Xt}));$.position.set(C.position.x+Math.cos(v)*.68,C.position.y*.76,C.position.z+Math.sin(v)*.68),$.rotation.y=-v+Math.PI*.5,Lt.add($);const L=new Yi(c%3===1?11628031:c%3===0?6479359:15055195,.35,3.6,2);L.position.set(C.position.x,C.position.y*.72,C.position.z),Lt.add(L)}for(let c=0;c<18;c++){const v=F(c,1220)*Math.PI*2,d=6.8+F(c,1221)*4.3;lo(Lt,Math.cos(v)*d,.22,Math.sin(v)*d,.28+F(c,1222)*.35,c%2?5003088:5857882,1223+c)}for(let c=0;c<10;c++){const v=F(c,1230)*Math.PI*2,d=2.6+F(c,1231)*6.6,E=new B(new et(.06,.09,.035,7),new we({color:10191179,metalness:.6,roughness:.45}));E.rotation.x=Math.PI/2,E.position.set(Math.cos(v)*d,.09,Math.sin(v)*d),Lt.add(E)}be(Lt,"runefield","Поле Рун"),ie.push(Lt),Oe(pr,$t,1.8,.08);const Vl=(c,v,d,E)=>{const I=new Be,C=d-c,O=E-v,j=Math.hypot(C,O),$=Math.floor(j/1.7);for(let K=0;K<=$;K++){const Q=K/$,ye=c+C*Q,ge=v+O*Q,Ye=new B(new mn(.24,.24+2.8+F(K,c)*.5,6),P(3942940,1));Ye.position.set(ye,W(ye,ge)+1.45,ge),I.add(Ye)}const L=M(.3,.35,j,2957593,1);L.rotation.y=Math.atan2(C,O),L.position.set((c+d)/2,W((c+d)/2,(v+E)/2)+1.25,(v+E)/2),I.add(L),S.add(I),Qe(c,v,d,E,.34,.08)};Vl(-30,-31,-8,-31),Vl(8,-31,30,-31),Vl(-30,-31,-30,-13),Vl(30,-31,30,16);const so=new Be;so.userData={id:"gate",label:"Ворота Мидгарда"};for(const c of[-4.2,4.2]){const v=M(.8,6,.8,3482906,1);v.position.set(c,3,-31),so.add(v)}const a0=M(10,.8,1,2957336,1);a0.position.set(0,6,-31),so.add(a0);for(let c=-3;c<=3;c++){const v=M(1,4.2,.22,5978660,1);v.position.set(c*1.15,2,-30.7),so.add(v)}be(so,"gate","Ворота Мидгарда"),ie.push(so),Oe(-4.2,-31,.55,.05),Oe(4.2,-31,.55,.05);const An=new Be;An.userData={id:"norns",label:"Прядильня норн"},An.position.set(-52,W(-52,38),38);const Py=P(4927522,1),Iy=P(2826523,1),l0=M(5.7,.28,.28,5847592,1);l0.position.set(0,3.8,0),An.add(l0);const c0=M(5,.25,.32,3877151,1);c0.position.set(0,.65,.15),An.add(c0);for(const c of[-2.45,2.45]){const v=M(.28,3.55,.3,5321763,1);v.position.set(c,2.15,0),v.rotation.z=c>0?.08:-.08,An.add(v)}const rd=new B(new Ot(2.05,.18,8,32),Py);rd.rotation.y=Math.PI/2,rd.position.set(0,2.25,-.8),An.add(rd);const sd=new B(new et(.28,.32,.38,10),Iy);sd.rotation.z=Math.PI/2,sd.position.set(0,2.25,-.8),An.add(sd);for(let c=0;c<10;c++){const v=c/10*Math.PI*2,d=M(.08,.08,1.85,5913384,1);d.position.set(Math.cos(v)*.92,2.25+Math.sin(v)*.92,-.8),d.rotation.z=-v,An.add(d)}const Ly=["URD","VERDANDI","SKULD"],Dy=[8640767,15198177,14908296];for(let c=0;c<3;c++){const v=(c-1)*2,d=new B(new en(.78,1),new we({color:4541257,roughness:.92,metalness:.05}));d.scale.set(.9,1.18+F(c,1290)*.2,.72),d.position.set(v,1.35,.18),d.rotation.set(0,(c-1)*.16,0),An.add(d);const E=vn(c===0?"ᚢ":c===1?"ᚹ":"ᛋ",c===0?"#8fe6ff":c===1?"#f1f1ec":"#ef8d9a"),I=new B(new zn(.48,.62),new At({map:E,transparent:!0,depthWrite:!1,side:Xt}));I.position.set(v,1.42,.86),I.rotation.y=Math.PI,An.add(I);const C=document.createElement("canvas");C.width=320,C.height=96;const O=C.getContext("2d");O.clearRect(0,0,320,96),O.textAlign="center",O.textBaseline="middle",O.font="bold 34px serif",O.fillStyle=c===0?"#9fe9ff":c===1?"#f4f4ef":"#ef91a0",O.shadowColor=O.fillStyle,O.shadowBlur=12,O.fillText(Ly[c],160,48);const j=new $r(C);j.colorSpace=In;const $=new B(new zn(1.55,.46),new At({map:j,transparent:!0,depthWrite:!1,side:Xt}));$.position.set(v,.55,.86),$.rotation.y=Math.PI,An.add($);const L=new Yi(Dy[c],.45,4.5,2);L.position.set(v,1.55,1),An.add(L)}const u0=[15123551,15263973,14245748];for(let c=0;c<3;c++){const v=[];for(let d=0;d<=18;d++){const E=d/18,I=1.9+E*4.6,C=(c-1)*2+Math.sin(E*Math.PI*2+c*1.7)*(.45+.5*E),O=.35+Math.cos(E*Math.PI*2+c)*.45;v.push(new V(C,I,O))}An.add(new q1(new ln().setFromPoints(v),new Gp({color:u0[c],transparent:!0,opacity:.9})))}for(let c=0;c<3;c++){const v=new B(new Ot(1.15+c*.18,.045,6,32),new At({color:u0[c],transparent:!0,opacity:.75,depthWrite:!1}));v.position.set((c-1)*.38,6.15,.15),v.rotation.set(.4,c*.65,.2),An.add(v)}const od=new B(new Ot(4.6,.065,8,72),new At({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));od.rotation.x=Math.PI/2,od.position.y=.05,An.add(od);for(let c=0;c<18;c++){const v=F(c,1300)*Math.PI*2,d=2.5+F(c,1301)*3.1,E=new B(new et(.12,.12,.16,9),new we({color:[10184008,7174032,9261927,7828045][c%4],roughness:.8}));E.rotation.x=Math.PI/2,E.position.set(Math.cos(v)*d,.12,Math.sin(v)*d),An.add(E)}for(let c=0;c<9;c++)Tn(An,(F(c,1315)-.5)*7.5,(F(c,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][c%5],c%2?9428976:14134881,.34,F(c,1317)*Math.PI);be(An,"norns","Прядильня норн"),ie.push(An),Oe(-52,38,3,.1);const oo=new Be;oo.userData={id:"rune",label:"Древний камень Феху"},oo.position.set(50,W(50,60),60);const d0=new B(new en(1.45,1),P(5002063,1));d0.position.y=1.2,oo.add(d0);const ad=new B(new Ot(1.05,.07,8,30),new we({color:16766826,emissive:10052371,emissiveIntensity:3}));ad.rotation.x=Math.PI/2,ad.position.y=1.2,oo.add(ad),be(oo,"rune","Древний камень Феху"),ie.push(oo),Oe(50,60,1.7,.1);const Gl=new Be;Gl.userData={id:"port",label:"Мост к причалу"};for(let c=-5;c<=5;c++){const v=M(3.6,.28,.82,6307882,1);v.position.set(-53,W(-53,c*1)+.5,c),Gl.add(v)}be(Gl,"port","Мост к причалу"),ie.push(Gl);const ao=new Be;ao.position.set(-45,W(-45,-48),-48);for(let c=0;c<7;c++){const v=M(2.8,.24,.72,7030573,1);v.position.set(0,.3,c*.85),ao.add(v)}for(const c of[-1.2,1.2])for(let v=0;v<3;v++){const d=M(.22,1.5,.22,4139292,1);d.position.set(c,-.2,v*2.5),ao.add(d)}const f0=M(2.2,.55,4.8,4926493,1);f0.position.set(3,-.15,2.5),ao.add(f0),be(ao,"port","Речной причал"),ie.push(ao);const Ny=(c,v)=>{const d=new B(new et(.5,.5,1,12),P(6636332,1));d.position.set(c,W(c,v)+.5,v),S.add(d);for(const E of[.25,.76]){const I=new B(new Ot(.51,.045,6,18),P(3156004,.7,.1));I.rotation.x=Math.PI/2,I.position.set(c,W(c,v)+E,v),S.add(I)}},Uy=(c,v)=>{const d=M(1,.75,1,7359022,1);d.position.set(c,W(c,v)+.38,v),S.add(d);const E=M(.08,.82,1.05,3679770,1);E.position.set(c,W(c,v)+.38,v),S.add(E),Ie(c,v,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([c,v])=>Ny(c,v)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([c,v])=>Uy(c,v));const ld=[],Wl=[],Fy=(c,v,d)=>{const E=new Be,I=W(c,v),C=new we({map:xt,color:16777215,roughness:.98,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.034}),O=new B(new et(.18*d,.38*d,5.2*d,9),C);O.position.y=2.6*d,O.rotation.z=(F(c,v)-.5)*.08,O.scale.x=1.08+F(c,v+4)*.22,E.add(O);for(let $=0;$<9;$++){const L=(1.15+$*.47)*d,K=$%2?1:-1,Q=(.9+$*.16)*d,ye=new B(new et(.035*d,.095*d,Q,7),C);ye.position.set(K*(.28+$*.035)*d,L,(F($,v)-.5)*.38*d),ye.rotation.z=K*(.62-F($,c)*.18),ye.rotation.y=F($+21,v)*Math.PI*2,E.add(ye)}const j=[2904370,3893312,4946505];for(let $=0;$<12;$++){const L=Math.max(.48,1.42-$*.075)*d,K=new B(Dv(new ht(L,10,7),.18*d,$+Math.round(c*3+v*5)),new we({map:at,color:j[$%3],roughness:.995}));K.scale.set(1+F($,c)*.25,.55+F($,v)*.16,.82+F($*2,c)*.22),K.position.set((F($*4,c)-.5)*.58*d,(1.55+$*.37)*d,(F($*5,v)-.5)*.55*d),ld.push({o:K,baseX:K.rotation.x,baseZ:K.rotation.z,phase:F($+41,c+v)*Math.PI*2,amp:.01+.008*F($+42,v)}),E.add(K)}for(let $=0;$<3;$++){const L=new B(new ht(.38*d,7,5),new we({color:$%2?3231030:4021565,roughness:1}));L.scale.set(1.5,.28,.85),L.position.set(($-1)*.45*d,.55*d,(F($,88)-.5)*.5*d),E.add(L)}for(let $=0;$<4;$++){const L=new B(new ht((.11+F($,77)*.08)*d,7,5),C);L.scale.set(1.35,.72,.82),L.position.set(($%2?1:-1)*.18*d,(1+$*.78)*d,.29*d),L.rotation.y=$%2*Math.PI,E.add(L)}for(let $=0;$<4;$++){const L=$/4*Math.PI*2+.4,K=(.55+F($,79)*.7)*d,Q=new B(new et(.045*d,.12*d,K,6),C);Q.position.set(Math.cos(L)*K*.42,.14*d,Math.sin(L)*K*.42),Q.rotation.z=Math.cos(L)*.85,Q.rotation.x=-Math.sin(L)*.85,Q.rotation.y=-L,E.add(Q)}E.position.set(c,I,v),be(E),d>=1.15&&Oe(c,v,.46*d,.04)},Xl=(c,v,d,E=!1)=>{const I=new Be,C=W(c,v),O=new we({map:xt,color:16777215,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.034}),j=new B(new et(.42*d,.72*d,6.4*d,11),O);j.position.y=3.2*d,j.rotation.z=(F(c,v)-.5)*.06,j.scale.x=1.08,I.add(j);for(let L=0;L<(E?9:7);L++){const K=L/(E?9:7)*Math.PI*2+F(L,c)*.18,Q=(1+F(L,v)*1.6)*d,ye=new B(new et(.11*d,.3*d,Q,7),O);ye.position.set(Math.cos(K)*Q*.42,.28*d,Math.sin(K)*Q*.42),ye.rotation.z=Math.cos(K)*.72,ye.rotation.x=-Math.sin(K)*.72,ye.rotation.y=-K,I.add(ye)}const $=E?10:8;for(let L=0;L<$;L++){const K=L/$*Math.PI*2+F(L+11,c)*.22,Q=(2+F(L+22,v)*2.2)*d,ye=new B(new et(.07*d,.19*d,Q,8),O);ye.position.set(Math.cos(K)*Q*.34,(3.25+F(L+33,c)*1.9)*d,Math.sin(K)*Q*.34),ye.rotation.z=Math.cos(K)*.76,ye.rotation.x=Math.sin(K)*.76,ye.rotation.y=-K,I.add(ye);for(let ge=0;ge<4;ge++){const Ye=new B(Dv(new ht((.46+F(ge+L,90)*.25)*d,10,7),.14*d,ge+L+17),new we({map:at,color:[3235641,4355400,5670483][(L+ge)%3],roughness:1}));Ye.scale.y=.62,Ye.position.set(Math.cos(K)*Q*(.52+.09*ge)+(F(ge,L)-.5)*.55*d,(3.9+F(L,ge)*1.45+.25*ge)*d,Math.sin(K)*Q*(.52+.09*ge)+(F(ge+4,L)-.5)*.55*d),ld.push({o:Ye,baseX:Ye.rotation.x,baseZ:Ye.rotation.z,phase:F(ge+61,L+v)*Math.PI*2,amp:.012+.012*F(ge+62,c)}),I.add(Ye)}}if(E){const L=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let K=0;K<L.length;K++){const Q=-.9+K*.46,ye=new B(new zn(.48*d,.62*d),new At({map:vn(L[K],K%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Xt}));ye.position.set(Math.sin(Q)*.56*d,(1.5+K*.68)*d,Math.cos(Q)*.6*d),ye.rotation.y=Q,I.add(ye)}}for(let L=0;L<6;L++){const K=new B(new ht((.16+F(L,121)*.1)*d,7,5),O);K.scale.set(.55,1.55,.42);const Q=F(L,122)*Math.PI*2;K.position.set(Math.cos(Q)*.5*d,(1.05+L*.48)*d,Math.sin(Q)*.5*d),K.rotation.y=-Q,I.add(K)}if(E){const L=new we({map:xt,color:16777215,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.048});for(let K=0;K<4;K++){const Q=K/4*Math.PI*2+.35,ye=(1.35+F(K,441)*.85)*d,ge=new B(new et(.1*d,.26*d,ye,8),L);ge.position.set(Math.cos(Q)*ye*.34,.48*d,Math.sin(Q)*ye*.34),ge.rotation.z=Math.cos(Q)*.92,ge.rotation.x=-Math.sin(Q)*.92,ge.rotation.y=-Q,I.add(ge)}for(let K=0;K<6;K++){const Q=-1.25+K*.48,ye=(2.1+F(K,452)*1.7)*d,ge=new B(new et(.045*d,.12*d,ye,7),L);ge.position.set(Math.sin(Q)*ye*.46,(5+F(K,453)*1.6)*d,Math.cos(Q)*ye*.46),ge.rotation.z=.72*Math.cos(Q),ge.rotation.x=.55*Math.sin(Q),ge.rotation.y=-Q,I.add(ge)}for(let K=0;K<3;K++){const Q=new B(new ht((.13+F(K,461)*.07)*d,8,6),new we({color:1513748,roughness:1})),ye=-.8+K*.72;Q.scale.set(.55,1.15,.32),Q.position.set(Math.sin(ye)*.61*d,(2.05+K*.65)*d,Math.cos(ye)*.61*d),Q.rotation.y=ye,I.add(Q)}}I.position.set(c,C,v),be(I),d>=1.2&&Oe(c,v,.78*d,.05)},ky=(c,v,d,E)=>{const I=new Be,C=new we({color:7031345,roughness:.96}),O=new we({color:8871999,roughness:.96}),j=new we({color:3155230,roughness:1}),$=new we({color:12168600,roughness:.9}),L=new we({color:1512207,roughness:.25}),K=new B(new ht(.68,14,10),C);K.scale.set(1.35,.78,.72),K.position.set(0,.98*d,0),K.scale.multiplyScalar(d),I.add(K);const Q=new B(new ht(.42,12,9),O);Q.scale.set(1,.9,.86),Q.position.set(.49*d,1.04*d,0),I.add(Q);const ye=new B(new et(.2*d,.34*d,.98*d,10),C);ye.position.set(.5*d,1.46*d,0),ye.rotation.z=-.3,I.add(ye);const ge=new B(new ht(.34*d,12,9),O);ge.scale.set(1.18,.92,.78),ge.position.set(.86*d,1.82*d,0),I.add(ge);const Ye=new B(new ht(.17*d,10,7),O);Ye.scale.set(1.15,.72,.72),Ye.position.set(1.16*d,1.72*d,0),I.add(Ye);const ft=new B(new ht(.075*d,8,6),j);ft.scale.set(1,.72,.85),ft.position.set(1.3*d,1.72*d,0),I.add(ft);for(const Bt of[-1,1]){const Qt=new B(new mn(.095*d,.3*d,7),O);Qt.position.set(.77*d,2.1*d,Bt*.2*d),Qt.rotation.z=-.28,Qt.rotation.x=Bt*.18,I.add(Qt)}for(const Bt of[-1,1]){const Qt=new B(new ht(.035*d,8,6),L);Qt.position.set(1.05*d,1.91*d,Bt*.235*d),I.add(Qt);const Kt=new B(new ht(.009*d,6,4),new At({color:16777215}));Kt.position.set(1.075*d,1.925*d,Bt*.257*d),I.add(Kt)}const bt=[];for(const Bt of[-1,1])for(const Qt of[-1,1]){const Kt=new Be;Kt.position.set(Qt*.43*d,.76*d,Bt*.34*d);const Ft=new B(new et(.085*d,.11*d,.43*d,7),C);Ft.position.y=-.2*d,Kt.add(Ft);const kt=new Be;kt.position.y=-.4*d;const pn=new B(new et(.055*d,.075*d,.43*d,7),j);pn.position.y=-.2*d,kt.add(pn);const Vn=new B(new ht(.075*d,7,5),j);Vn.scale.set(1.15,.55,1.25),Vn.position.y=-.43*d,kt.add(Vn),Kt.add(kt),I.add(Kt),bt.push(Kt,kt)}const Ut=new B(new ht(.16*d,9,7),O);Ut.scale.set(.75,1.25,.72),Ut.position.set(-.9*d,1.18*d,0),I.add(Ut);for(const Bt of[-1,1]){const Qt=new B(new et(.04*d,.06*d,.68*d,7),$);Qt.position.set(.69*d,2.25*d,Bt*.14*d),Qt.rotation.z=Bt*.22,I.add(Qt);for(let Kt=0;Kt<3;Kt++){const Ft=new B(new et(.02*d,.038*d,.34*d,6),$);Ft.position.set((.56+.11*Kt)*d,(2.48+.15*Kt)*d,Bt*(.14+.045*Kt)*d),Ft.rotation.z=Bt*(.55-.08*Kt),I.add(Ft)}}I.scale.setScalar(1.1),I.position.set(c,W(c,v),v),I.userData={phase:E,legJoints:bt},be(I),Ze.push({g:I,x:c,z:v,r:4+F(E,41)*3,speed:1.25+F(E,42)*.8,phase:E,kind:"deer"})},Oy=(c,v)=>{const d=new Be,E=P(6965552,1),I=P(3089436,1),C=new B(new ht(.22,8,6),E);C.scale.set(1.35,.9,.9),C.position.y=.72,d.add(C);const O=new B(new ht(.17,8,6),E);O.position.set(.22,.86,0),d.add(O);for(const L of[-1,1]){const K=new B(new mn(.06,.18,6),E);K.position.set(.17,.99,L*.09),d.add(K)}const j=new B(new Ot(.24,.075,7,14,Math.PI*1.65),E);j.rotation.y=Math.PI/2,j.position.set(-.22,.91,0),d.add(j);const $=new B(new ht(.025,6,4),I);$.position.set(.35,.9,-.12),d.add($),d.position.set(c,W(c,v),v),be(d,"ratatosk","Белка Рататоск"),ie.push(d),Oe(c,v,.28,.02),Ze.push({g:d,x:c,z:v,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},xi=-5,yi=75,cd=new Be;cd.userData={id:"ashgrove",label:"Роща Ясеня"};const ud=new B(new Gn(10.5,40),new we({color:2504747,roughness:1,transparent:!0,opacity:.82}));ud.rotation.x=-Math.PI/2,ud.position.set(xi,W(xi,yi)+.02,yi),S.add(ud);const zy=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[c,v,d,E]of zy)Xl(xi+c,yi+v,d,E);const dd=new B(new Ot(6.4,.07,8,64),new we({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));dd.rotation.x=Math.PI/2,dd.position.set(xi,W(xi,yi)+.05,yi),S.add(dd);const fd=new B(new en(1.05,1),P(5593941,1));fd.scale.set(1.3,.7,1.05),fd.position.set(xi,W(xi,yi)+.65,yi),S.add(fd),Tn(cd,0,0,"ᚱ",9430692,1.25,0);for(let c=0;c<26;c++){const v=F(c,1310)*Math.PI*2,d=2.5+F(c,1311)*7.2,E=xi+Math.cos(v)*d,I=yi+Math.sin(v)*d,C=new B(new et(.025,.045,.22+F(c,1312)*.28,6),P(12039579,1));C.position.set(E,W(E,I)+.12,I),S.add(C);const O=new B(new ht(.13+F(c,1313)*.08,8,5),new we({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));O.scale.y=.48,O.position.set(E,W(E,I)+.34,I),S.add(O)}for(let c=0;c<16;c++){const v=F(c,1320)*Math.PI*2,d=2+F(c,1321)*7.5,E=xi+Math.cos(v)*d,I=yi+Math.sin(v)*d,C=new B(new et(.07,.07,.025,10),P(9270341,.5,.55));C.rotation.x=Math.PI/2,C.position.set(E,W(E,I)+.05,I),S.add(C)}ie.push(cd),Oe(xi,yi,1,.08);const xn=62,yn=78,jl=new Be;jl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const hd=new B(new Gn(11.5,44),new we({color:2112299,roughness:1,transparent:!0,opacity:.86}));hd.rotation.x=-Math.PI/2,hd.position.set(xn,W(xn,yn)+.025,yn),S.add(hd);const h0=new we({map:xt,color:16777215,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.034}),pd=new B(new et(1.35,2.1,10.5,13),h0);pd.position.set(xn,W(xn,yn)+5.25,yn),pd.rotation.z=-.05,S.add(pd);for(let c=0;c<8;c++){const v=c/8*Math.PI*2+.2,d=5+F(c,1401)*4,E=new B(new et(.25,.58,d,9),h0);E.position.set(xn+Math.cos(v)*d*.36,W(xn,yn)+6.8+F(c,1402)*2.2,yn+Math.sin(v)*d*.36),E.rotation.z=Math.cos(v)*.8,E.rotation.x=Math.sin(v)*.8,E.rotation.y=-v,S.add(E);for(let I=0;I<4;I++){const C=new B(new ht(1+F(I+c,1403)*.55,9,6),new we({map:at,color:[2312753,2972729,3697474][(c+I)%3],roughness:1}));C.scale.y=.65,C.position.set(xn+Math.cos(v)*d*(.48+.09*I)+(F(I,c)-.5)*1.1,W(xn,yn)+8+F(c,I)*3+I*.45,yn+Math.sin(v)*d*(.48+.09*I)+(F(I+5,c)-.5)*1.1),S.add(C)}}for(let c=0;c<9;c++){const v=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][c],d=vn(v,c%2?"#63d9ef":"#f0c65d"),E=new B(new zn(.7,.9),new At({map:d,transparent:!0,depthWrite:!1,side:Xt}));E.position.set(xn+Math.sin(c*.63)*1.42,W(xn,yn)+1+c*.78,yn+Math.cos(c*.63)*1.42),E.rotation.y=Math.PI*.5-c*.16,S.add(E)}const md=new B(new en(1.35,1),P(5199954,1));md.scale.set(1.45,.7,1.15),md.position.set(xn,W(xn,yn)+.75,yn+1.6),S.add(md),oe(xn,yn+2.1,.72);const gd=new B(new Ot(6.7,.06,8,64),new we({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));gd.rotation.x=Math.PI/2,gd.position.set(xn,W(xn,yn)+.055,yn),S.add(gd);for(let c=0;c<22;c++){const v=F(c,1410)*Math.PI*2,d=1.8+F(c,1411)*8.2,E=xn+Math.cos(v)*d,I=yn+Math.sin(v)*d;Tn(jl,E-xn,I-yn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][c%6],c%2?6804447:14726490,.35,F(c,1412)*Math.PI)}for(let c=0;c<18;c++){const v=["ᚱ","ᚨ","ᛟ","ᚦ"][c%4],d=vn(v,c%2?"#63d9ef":"#e4bd65"),E=new B(new zn(.34,.44),new At({map:d,transparent:!0,depthWrite:!1,side:Xt}));E.position.set(xn+(F(c,1420)-.5)*12,1.4+F(c,1421)*7,yn+(F(c,1422)-.5)*12),E.userData.floatPhase=F(c,1423)*6,S.add(E)}be(jl,"hoddmimir","Лес Ходдмимира"),ie.push(jl),Oe(xn,yn,1.2,.08);const Ma=43,Sa=32;for(let c=0;c<4;c++)ky(Ma+(c-1.5)*2.6,Sa+(c%2?2.6:-2.6),1.12+F(c,1440)*.16,10+c);const p0=new B(new en(.72,1),P(5725526,1));p0.position.set(Ma,W(Ma,Sa)+.5,Sa),S.add(p0);const vd=new B(new Ot(5.8,.045,7,48),new we({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));vd.rotation.x=Math.PI/2,vd.position.set(Ma,W(Ma,Sa)+.035,Sa),S.add(vd),Oy(xi+5,yi+1),((c,v)=>{const d=new Be;d.position.set(c,W(c,v),v),d.userData={id:"forestCache",label:"Забытый тайник"};const E=new we({map:xt,color:6968381,roughness:1}),I=new we({color:2760987,roughness:1}),C=new B(new et(2,2.65,4.9,11),E);C.position.y=2.45,C.rotation.z=-.035,d.add(C);for(let ge=0;ge<7;ge++){const Ye=1.3+F(ge,1250)*2.7,ft=new B(new mn(.32+F(ge,1251)*.3,Ye,6),E),bt=F(ge,1252)*Math.PI*2,Ut=.55+F(ge,1253)*1.35;ft.position.set(Math.cos(bt)*Ut,4.75+Ye*.42,Math.sin(bt)*Ut),ft.rotation.z=(F(ge,1254)-.5)*.55,ft.rotation.x=(F(ge,1255)-.5)*.55,d.add(ft)}const O=new B(new ht(1.18,16,10),I);O.scale.set(1,1.18,.46),O.position.set(0,2,2.08),d.add(O);const j=new B(new Ot(1.05,.16,8,28),new we({color:4930349,roughness:1}));j.rotation.x=Math.PI/2,j.position.set(0,2,2.12),j.scale.y=1.15,d.add(j);const $=new Gp({color:14211280,transparent:!0,opacity:.45});for(let ge=0;ge<6;ge++){const Ye=[new V(-.95+ge*.38,1.15+ge%3*.55,2.15),new V((ge-2.5)*.2,2+ge%2*.3,2.48),new V(-.8+ge*.32,2.95+ge%3*.25,2.12)];d.add(new q1(new ln().setFromPoints(Ye),$))}const L=new B(new ht(.46,10,8),new we({color:5978662,roughness:1}));L.scale.set(.9,1.15,.62),L.position.set(.05,1.45,2.34),d.add(L);const K=new B(new ht(.07,7,5),new we({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));K.position.set(.05,1.72,2.77),d.add(K);for(let ge=0;ge<5;ge++){const Ye=new B(new en(.11,0),new we({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Ye.position.set(-.38+ge*.19,1.02+ge%2*.08,2.5),d.add(Ye)}const Q=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ge=0;ge<6;ge++){const Ye=-1.05+ge*.42,ft=vn(Q[ge],ge%2?"#e7bd61":"#7ce5ef"),bt=new B(new zn(.45,.62),new At({map:ft,transparent:!0,depthWrite:!1,side:Xt}));bt.position.set(Math.sin(Ye)*1.55,1.2+ge*.42,1.93+Math.cos(Ye)*.22),bt.rotation.y=Math.PI,d.add(bt)}const ye=new B(new Ot(4.15,.06,8,64),new At({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));ye.rotation.x=Math.PI/2,ye.position.y=.05,d.add(ye);for(let ge=0;ge<10;ge++){const Ye=ge/10*Math.PI*2;Tn(d,Math.cos(Ye)*3.65,Math.sin(Ye)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][ge],14859617,.38,Ye+.2)}for(let ge=0;ge<12;ge++){const Ye=F(ge,1270)*Math.PI*2,ft=1.8+F(ge,1271)*3.3,bt=new B(new et(.08,.08,.025,9),new we({color:10190147,metalness:.55,roughness:.45}));bt.rotation.x=Math.PI/2,bt.position.set(Math.cos(Ye)*ft,.09,Math.sin(Ye)*ft),d.add(bt)}for(let ge=0;ge<4;ge++){const Ye=M(.08,.08,.75,10393476,1);Ye.position.set((F(ge,1280)-.5)*5,.12,(F(ge,1281)-.5)*5),Ye.rotation.y=F(ge,1282)*Math.PI,d.add(Ye)}be(d,"forestCache","Забытый тайник"),ie.push(d),Oe(c,v,1.75,.08)})(-72,48);const By=(c,v,d,E,I)=>{const C=c.distanceTo(v),O=new B(new Xn(d,E,C),I);return O.position.copy(c).add(v).multiplyScalar(.5),O.lookAt(v),O};function lo(c,v,d,E,I,C,O){const j=new B(new en(I,1),P(C,1));return j.scale.set(.72+F(O,1)*.62,.55+F(O,2)*.85,.68+F(O,3)*.55),j.rotation.set(F(O,4)*1.2,F(O,5)*Math.PI,F(O,6)*1.1),j.position.set(v,d,E),c.add(j),j}const Hy=(c,v)=>{const d=new Be;d.position.set(c,W(c,v),v),d.userData={id:"fallenAsh",label:"Поверженный ясень"};const E=new B(new Ot(7.8,.07,8,64),new we({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));E.rotation.x=Math.PI/2,E.position.y=.05,d.add(E);const I=new we({map:xt,color:16777215,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.034}),C=new B(new et(1.45,2.15,4.8,10),I);C.position.set(0,2.4,.2),C.rotation.z=-.04,d.add(C);const O=new B(new ht(.88,12,9),new At({color:1185043}));O.scale.set(1,.95,.55),O.position.set(0,1.75,1.72),d.add(O);for(let $=0;$<7;$++){const L=-.9+$*.3,K=2.5+F($,1500)*2.7,Q=new B(new et(.11,.28,K,7),I);Q.position.set(Math.sin(L)*K*.34,4+F($,1501)*2.8,.15+Math.cos(L)*K*.3),Q.rotation.z=Math.sin(L)*.65,Q.rotation.x=-Math.cos(L)*.55,Q.rotation.y=L,d.add(Q)}for(let $=0;$<9;$++){const L=F($,1510)*Math.PI*2,K=1.7+F($,1511)*5.6;lo(d,Math.cos(L)*K,.22,Math.sin(L)*K,.3+F($,1512)*.45,$%3?5265490:6251613,1513+$)}for(let $=0;$<8;$++)Tn(d,(F($,1520)-.5)*5.8,(F($,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][$%4],10473668,.42,F($,1522)*Math.PI);const j=new B(new ht(.45,10,7),P(5978919,1));j.scale.set(.9,1.2,.7),j.position.set(0,1.55,1.25),d.add(j),be(d,"fallenAsh","Поверженный ясень"),ie.push(d),Oe(c,v,1.8,.08)},Vy=(c,v)=>{const d=new Be;d.position.set(c,W(c,v),v),d.userData={id:"hunterCamp",label:"Забытая стоянка"};const E=new B(new Gn(8.7,40),new we({color:3225644,roughness:1,transparent:!0,opacity:.78}));E.rotation.x=-Math.PI/2,E.position.y=.025,E.scale.set(1.18,.92,1),d.add(E);const I=new Be;I.position.set(-1.45,.05,-.65),I.rotation.y=-.34,d.add(I);const C=P(5978920,1);P(3680030,1);const O=P(2697768,.82,.35),j=P(4412730,1),$=M(3.7,.26,1.65,6308141,1);$.position.y=1.05,$.rotation.z=-.08,I.add($);for(let ze=0;ze<9;ze++){const pt=M(2.8+F(ze,501)*1.1,.16,.26,ze%3?6505775:4928293,1);pt.position.set(-.25+(F(ze,502)-.5)*.25,1.18+(F(ze,503)-.5)*.34,-.72+ze%3*.68),pt.rotation.z=(F(ze,504)-.5)*.16,pt.rotation.y=(F(ze,505)-.5)*.16,I.add(pt)}for(const[ze,pt,Wt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Rn=new B(new Ot(Wt,.14,7,20,Math.PI*1.56),O);Rn.rotation.y=Math.PI/2,Rn.rotation.z=Wt>.8?.08:-.18,Rn.position.set(ze,.9,pt),I.add(Rn);const Si=new B(new et(.15,.18,.28,8),O);Si.rotation.z=Math.PI/2,Si.position.set(ze,.9,pt),I.add(Si);for(let Cs=0;Cs<6;Cs++){const dg=Cs/6*Math.PI*2+.25,r2=new V(ze+Math.cos(dg)*Wt*.82,.9+Math.sin(dg)*Wt*.82,pt+.02),s2=new V(ze,.9,pt+.02);I.add(By(s2,r2,.065,.065,O))}}const L=new B(new Xn(3.8,.14,.16),O);L.position.set(0,.62,-.83),L.rotation.z=.08,I.add(L);const K=new B(new Xn(.16,.18,3.2),C);K.position.set(1.8,.8,-.35),K.rotation.y=.9,I.add(K);for(let ze=0;ze<6;ze++){const pt=new B(new ht(.28+F(ze,507)*.18,7,5),j);pt.scale.set(1.4,.32,.7),pt.position.set(-1.1+ze*.48,1.34+ze%2*.05,-.82),I.add(pt)}const Q=new Be;Q.position.set(2.85,.02,1.15),Q.rotation.y=.18,d.add(Q),P(4861985,1);for(let ze=0;ze<4;ze++){const pt=ze/4*Math.PI*2+.25,Wt=M(.11,3.7,.11,4861985,1);Wt.position.set(Math.cos(pt)*1.25,1.65,Math.sin(pt)*1.25),Wt.rotation.z=Math.cos(pt)*.34,Wt.rotation.x=-Math.sin(pt)*.34,Q.add(Wt)}const ye=new B(new mn(2,3.2,4,1,!0),new we({color:4862247,roughness:1,side:Xt,transparent:!0,opacity:.94}));ye.position.y=1.45,ye.scale.set(1,.9,.82),ye.rotation.y=.78,Q.add(ye);for(let ze=0;ze<9;ze++){const pt=new B(new ht(.16+F(ze,509)*.14,6,5),j);pt.scale.set(1.5,.35,.8),pt.position.set((F(ze,510)-.5)*2.4,1+F(ze,511)*1.9,(F(ze,512)-.5)*1.8),Q.add(pt)}const ge=M(1.05,1.55,.05,3088668,1);ge.position.set(0,.72,1.65),ge.rotation.y=.16,Q.add(ge),oe(c+.1,v+.45,.78);const Ye=new Yi(16751173,1,8,2);Ye.position.set(.1,1.7,.45),d.add(Ye);const ft=new Be;ft.position.set(-3.15,.5,1.25),ft.rotation.y=.8,ft.rotation.z=-.22,d.add(ft);const bt=new B(new Gn(1.05,16),new we({color:3882041,roughness:.85,metalness:.55,side:Xt}));bt.rotation.x=-Math.PI/2,bt.scale.y=.8,ft.add(bt);const Ut=new B(new Ot(1.03,.11,7,18),O);Ut.rotation.x=-Math.PI/2,Ut.scale.y=.8,ft.add(Ut);const Bt=new B(new et(.24,.31,.22,8),O);Bt.rotation.x=Math.PI/2,Bt.position.set(.18,0,.08),ft.add(Bt);const Qt=M(.05,.035,1.15,1513494,1);Qt.position.set(-.28,.025,.05),Qt.rotation.y=.42,ft.add(Qt),P(2960425,.65,.45);const Kt=(ze,pt,Wt)=>{const Rn=new Be;Rn.position.set(ze,.18,pt),Rn.rotation.y=Wt;const Si=M(.09,.09,1.55,5059362,1);Si.rotation.x=Math.PI/2,Si.position.z=.15,Rn.add(Si);const Cs=M(.55,.13,.28,3158061,.55);Cs.position.set(0,.02,-.62),Cs.rotation.y=-.25,Rn.add(Cs),d.add(Rn)};Kt(-1.9,3.15,.45),Kt(4.15,-.65,-.8);const Ft=M(.11,.11,.95,5388068,1);Ft.rotation.y=.55,Ft.position.set(-2.1,.16,2.65),d.add(Ft);const kt=new B(new ht(.48,9,7),new we({color:5978919,roughness:1}));kt.scale.set(.9,1.15,.65),kt.position.set(3.55,.48,2.65),d.add(kt);const pn=new B(new Ot(.33,.035,6,18,Math.PI*1.5),P(3023129,1));pn.rotation.x=Math.PI/2,pn.position.set(3.55,.93,2.65),d.add(pn);for(let ze=0;ze<15;ze++){const pt=new B(new et(.09,.09,.025,10),new we({color:9335877,metalness:.55,roughness:.45})),Wt=F(ze,520)*Math.PI*2,Rn=2.1+F(ze,521)*3.7;pt.position.set(Math.cos(Wt)*Rn,.13,Math.sin(Wt)*Rn),pt.rotation.x=Math.PI/2,d.add(pt)}for(let ze=0;ze<5;ze++){const pt=M(.08,.08,.9,11182733,1);pt.position.set(3.2+F(ze,522)*2.4,.18,-2.7+F(ze,523)*1.7),pt.rotation.y=F(ze,524)*Math.PI,pt.rotation.z=(F(ze,525)-.5)*.25,d.add(pt)}const Vn=new B(new Ot(4.7,.055,7,64),new At({color:9160135,transparent:!0,opacity:.5}));Vn.rotation.x=Math.PI/2,Vn.position.y=.075,d.add(Vn);const ui=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];ui.forEach((ze,pt)=>{const Wt=pt/ui.length*Math.PI*2;Tn(d,Math.cos(Wt)*4.15,Math.sin(Wt)*4.15,ze,pt%3===0?13215066:7977149,.55,Wt+.3)});for(let ze=0;ze<18;ze++)lo(d,(F(ze,530)-.5)*8,.18,(F(ze,531)-.5)*7,.22+F(ze,532)*.34,ze%4===0?6121048:5133389,530+ze);for(let ze=0;ze<12;ze++){const pt=M(.12,.12,1.7+F(ze,535)*2,3811872,1);pt.position.set((F(ze,536)-.5)*8,.11,(F(ze,537)-.5)*8),pt.rotation.y=F(ze,538)*Math.PI,pt.rotation.z=(F(ze,539)-.5)*.2,d.add(pt)}be(d,"hunterCamp","Забытая стоянка"),ie.push(d),Oe(c,v,1.9,.1)},Gy=(c,v,d,E,I,C)=>{const O=new Be;O.position.set(c,W(c,v),v);const j=7442040,$=P(4412730,1),L=new B(new Ot(d,.07,8,64),new we({color:j,emissive:j,emissiveIntensity:.65,transparent:!0,opacity:.42}));L.rotation.x=Math.PI/2,L.position.y=.045,O.add(L);const K=Math.floor(d/1.7);for(let Q=0;Q<K;Q++){const ye=F(Q,c*11+v)*Math.PI*2,ge=d*.35+F(Q,v*17)*d*.45;lo(O,Math.cos(ye)*ge,.2,Math.sin(ye)*ge,.34+F(Q,33)*.32,5266514,800+Q)}{for(let Q=0;Q<8;Q++){const ye=new B(new ht(.34+F(Q,600)*.25,7,5),$);ye.scale.y=.35,ye.position.set((F(Q,601)-.5)*d,.16,(F(Q,602)-.5)*d),O.add(ye)}for(let Q=0;Q<6;Q++)Tn(O,(F(Q,603)-.5)*d*.9,(F(Q,604)-.5)*d*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][Q],7907492,.42,F(Q,605)*Math.PI)}be(O,E,I),ie.push(O)};Vy(68,8),Gy(-45,75,9.5,"deepGrove","Глубокая роща"),Hy(-30,15);const Wy=(c,v)=>{const d=document.createElement("canvas");d.width=d.height=256;const E=d.getContext("2d");E.clearRect(0,0,256,256),E.textAlign="center",E.textBaseline="middle",E.shadowColor=v,E.shadowBlur=24,E.fillStyle=v,E.font="bold 156px serif",E.fillText(c,128,132),E.shadowBlur=6,E.globalAlpha=.72,E.font="bold 126px serif",E.fillText(c,128,132);const I=new $r(d);return I.colorSpace=In,I.anisotropy=4,I},wa=(c,v,d,E,I,C,O=.7,j=0)=>{const $="#"+C.toString(16).padStart(6,"0"),L=new At({map:Wy(v,$),transparent:!0,depthWrite:!1,side:Xt}),K=new B(new zn(O,O),L);return K.position.set(d,E,I),K.rotation.set(0,j,0),c.add(K),K},Yl=(c,v,d,E=.075)=>{const I=new Xp(v),C=new B(new ll(I,42,E,6,!1),new At({color:d,transparent:!0,opacity:.9}));c.add(C);const O=new B(new ll(I,42,E*2.5,6,!1),new At({color:d,transparent:!0,opacity:.12,depthWrite:!1}));return c.add(O),C},_d=50,xd=-62,Br=new Be;Br.position.set(_d,W(_d,xd),xd),Br.userData={id:"forestThread",label:"Разорванная нить"};const yd=new B(new Ot(2.4,.05,7,48),new we({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));yd.rotation.x=Math.PI/2,yd.position.y=.055,Br.add(yd);const Md=new B(new en(1,1),P(5326925,1));Md.scale.set(.9,1.45,.72),Md.position.y=.95,Br.add(Md),wa(Br,"ᛏ",0,1.2,.76,12614830,.9,0);const Xy=[new V(-.9,1.8,.3),new V(0,3.1,.1),new V(1,2,-.2)];Yl(Br,Xy,14268630,.06),be(Br,"forestThread","Разорванная нить"),ie.push(Br),Oe(_d,xd,1.1,.08);const Fn=new Be,Sd=58,wd=-28;Fn.position.set(Sd,W(Sd,wd),wd),Fn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const jy=new we({color:5858398,roughness:.96,metalness:.04}),m0=new we({color:3423032,roughness:.92,metalness:.08}),Yy=new we({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),Ed=new B(new Gn(13.2,52),new we({color:5402692,roughness:1,transparent:!0,opacity:.94}));Ed.rotation.x=-Math.PI/2,Ed.position.y=.018,Fn.add(Ed);for(const[c,v,d]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const E=new B(new Ot(c,v,8,96),new At({color:15780190,transparent:!0,opacity:d,depthWrite:!1}));E.rotation.x=Math.PI/2,E.position.y=.065,Fn.add(E)}const qy=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let c=0;c<18;c++){const v=c/18*Math.PI*2;Tn(Fn,Math.cos(v)*8.9,Math.sin(v)*8.9,qy[c],15779422,.58,v+.15)}const g0=new B(new et(3.15,3.45,.45,12),m0);g0.position.y=.24,Fn.add(g0);for(let c=0;c<16;c++){const v=c/16*Math.PI*2,d=2.65+(F(c,2001)-.5)*.22,E=new B(new en(.72+F(c,2002)*.22,1),jy);E.scale.set(1.15+F(c,2003)*.25,.72+F(c,2004)*.22,.88+F(c,2005)*.24),E.position.set(Math.cos(v)*d,.55+F(c,2006)*.12,Math.sin(v)*d),E.rotation.set(F(c,2007)*.25,v+F(c,2008)*.4,F(c,2009)*.2),Fn.add(E)}const Td=new B(new Gn(2.25,40),Yy);Td.rotation.x=-Math.PI/2,Td.position.y=.72,Fn.add(Td);for(let c=0;c<3;c++){const v=new B(new Ot(.65+c*.48,.025,6,48),new At({color:c===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.735,Fn.add(v)}const v0=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],_0=[];for(let c=0;c<3;c++){const v=v0[c],d=new Be;d.position.set(v.x,0,v.z),d.rotation.y=c===0?.22:c===2?-.22:Math.PI;const E=new B(new mn(.72,.95,9),new we({color:v.body,roughness:.98}));E.position.y=.72,d.add(E);const I=new B(new mn(.48,.72,8),new we({color:v.cloak,roughness:.98}));I.position.set(0,.86,.43),I.rotation.x=.05,d.add(I);const C=new B(new et(.42,.58,.12,9),new we({color:v.cloak,roughness:1}));C.position.set(0,1.23,0),C.rotation.z=.08,d.add(C);const O=new B(new ht(.32,12,9),new we({color:13079144,roughness:.9}));O.position.y=1.62,d.add(O);const j=new B(new ht(.38,10,8),new we({color:v.hair,roughness:1}));j.scale.set(1,.95,.9),j.position.set(0,1.68,-.08),d.add(j);for(const Q of[-1,1]){const ye=new B(new et(.075,.105,.62,7),new we({color:v.cloak,roughness:1}));ye.position.set(Q*.47,1.03,.18),ye.rotation.z=Q*.42,ye.rotation.x=-.18,d.add(ye)}const $=new B(new et(.38,.44,.18,9),m0);$.position.y=.25,d.add($);const L=new B(new et(.035,.055,.9,8),new we({color:6964008,roughness:.9}));L.position.set(.58,1.08,.38),L.rotation.z=.62,d.add(L);const K=new B(new Ot(.12,.025,6,14),new we({color:9265980,roughness:.85}));K.rotation.x=Math.PI/2,K.position.set(.75,.82,.48),d.add(K),d.position.y=.02,Fn.add(d),_0.push(new V(v.x+.72,1.25,v.z+.48))}const x0=[14674162,16765022,13192536];for(let c=0;c<3;c++){const v=_0[c],d=[];for(let E=0;E<=30;E++){const I=E/30,C=v.y+I*7.3,O=I*Math.PI*3+v0[c].phase,j=.35+.72*I;d.push(new V(v.x*(1-I)+Math.cos(O)*j*I,v.y*(1-I)+C*I,v.z*(1-I)+Math.sin(O)*j*I))}Yl(Fn,d,x0[c],.085)}for(let c=0;c<3;c++){const v=[];for(let d=0;d<=32;d++){const E=d/32,I=E*Math.PI*2,C=1.65+.42*Math.sin(I*2+c*.9);v.push(new V(Math.cos(I+c*2.094)*C,8.35+.45*Math.sin(I*3+c),Math.sin(I+c*2.094)*C))}Yl(Fn,v,x0[c],.065)}const y0=new Yi(16767096,1.25,11,2);y0.position.set(0,4.2,1),Fn.add(y0);for(let c=0;c<20;c++){const v=F(c,2030)*Math.PI*2,d=3.8+F(c,2031)*8,E=Math.cos(v)*d,I=Math.sin(v)*d,C=new B(new et(.018,.028,.22,5),new we({color:5666109,roughness:1}));C.position.set(E,.11,I),Fn.add(C);const O=new B(new ht(.07,7,5),new At({color:c%3===0?16770208:c%3===1?15972816:14478591}));O.position.set(E,.25,I),Fn.add(O)}for(let c=0;c<10;c++){const v=F(c,2040)*Math.PI*2,d=4+F(c,2041)*8,E=new B(new en(.12+F(c,2042)*.08,0),new we({color:10189631,metalness:.65,roughness:.4}));E.position.set(Math.cos(v)*d,.1,Math.sin(v)*d),Fn.add(E)}be(Fn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),ie.push(Fn),Oe(Sd,wd,3.4,.1);const Mi=new Be,bd=5,Ad=-70;Mi.position.set(bd,W(bd,Ad),Ad),Mi.userData={id:"powerCircle",label:"Круг Силы"};const Cd=new B(new Gn(10.8,48),new we({color:1911590,roughness:1,transparent:!0,opacity:.94}));Cd.rotation.x=-Math.PI/2,Cd.position.y=.02,Mi.add(Cd);for(const[c,v,d,E]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const I=new B(new Ot(c,v,8,96),new At({color:d,transparent:!0,opacity:E,depthWrite:!1}));I.rotation.x=Math.PI/2,I.position.y=.07,Mi.add(I)}for(let c=0;c<20;c++){const v=c/20*Math.PI*2,d=5.1+c%2*2.2;Tn(Mi,Math.cos(v)*d,Math.sin(v)*d,ws[(c+2)%ws.length],c%2?9140479:6545396,.38,v+.2)}const ql=new B(new en(1.25,1),new we({color:2435371,roughness:.9,metalness:.16}));ql.scale.set(.9,2.8,.7),ql.position.y=2.45,ql.rotation.set(.05,.2,-.08),Mi.add(ql);const $y=wa(Mi,"ᛟ",0,2.55,.78,16766302,1.35,0);$y.rotation.x=0;const M0=new Yi(10251519,1.7,10,2);M0.position.set(0,2.5,.8),Mi.add(M0);for(let c=0;c<12;c++){const v=c/12*Math.PI*2,d=4.1+F(c,1801)*4.5,E=lo(Mi,Math.cos(v)*d,.3,Math.sin(v)*d,.42+F(c,1802)*.42,c%3===0?5858141:4870476,1803+c);if(c%4===0){const I=new B(new mn(.18,.9,5),new At({color:c%2?9336063:6938111,transparent:!0,opacity:.75}));I.position.set(E.position.x,.62,E.position.z),Mi.add(I)}}for(let c=0;c<9;c++){const v=F(c,1820)*Math.PI*2,d=2.2+F(c,1821)*6.7,E=new B(new ht(.045+F(c,1822)*.04,6,5),new At({color:c%2?7531007:11697663,transparent:!0,opacity:.7}));E.position.set(Math.cos(v)*d,.4+F(c,1823)*2.6,Math.sin(v)*d),Mi.add(E)}be(Mi,"powerCircle","Круг Силы"),ie.push(Mi),Oe(bd,Ad,2.2,.1);const Ni=new Be,Rd=-72,Pd=-48;Ni.position.set(Rd,W(Rd,Pd),Pd),Ni.userData={id:"whisperStone",label:"Камень Шёпота"};const Id=new B(new Gn(8.6,40),new we({color:1516830,roughness:1,transparent:!0,opacity:.95}));Id.rotation.x=-Math.PI/2,Id.position.y=.02,Ni.add(Id);const Ld=new B(new Ot(5.8,.09,8,96),new At({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));Ld.rotation.x=Math.PI/2,Ld.position.y=.075,Ni.add(Ld);const $l=new B(new en(2.1,1),new we({color:1382171,roughness:.8,metalness:.35}));$l.scale.set(1.15,1.35,.82),$l.position.y=1.75,$l.rotation.set(.05,.25,-.08),Ni.add($l);for(const c of[-1,1]){const v=[];for(let d=0;d<=14;d++){const E=d/14,I=E*Math.PI*1.15;v.push(new V(c*(1.35+.72*Math.sin(I)),2.45+.85*E+.38*Math.sin(I),-.15+.78*Math.cos(I)-.78))}Yl(Ni,v,3422020,.18)}const Kl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Kl.forEach((c,v)=>{const d=v/Kl.length*Math.PI*2;wa(Ni,c,Math.cos(d)*3.5,1,Math.sin(d)*3.5,v%2?7265535:12088575,.46,d+Math.PI/2)});for(let c=0;c<9;c++){const v=F(c,1901)*Math.PI*2,d=.7+F(c,1902)*1.7,E=wa(Ni,Kl[c%Kl.length],Math.cos(v)*d,3.4+c*.48,Math.sin(v)*d,c%2?7988991:12614911,.42+F(c,1903)*.22,v);E.rotation.x=(F(c,1904)-.5)*.35}const S0=new Yi(10245631,1.5,9,2);S0.position.set(0,2.2,.5),Ni.add(S0);for(let c=0;c<11;c++){const v=F(c,1920)*Math.PI*2,d=4.8+F(c,1921)*2.6;lo(Ni,Math.cos(v)*d,.2,Math.sin(v)*d,.28+F(c,1922)*.38,4541258,1923+c)}be(Ni,"whisperStone","Камень Шёпота"),ie.push(Ni),Oe(Rd,Pd,2.5,.1);const Hr=(c,v,d,E,I="rune")=>{const C=new Be;C.position.set(c,W(c,v),v);const O=I==="shadow"?2107425:I==="power"?2106411:I==="fate"?2895917:3162931,j=new B(new Gn(I==="grove"?9.8:7.8,40),new we({color:O,roughness:1,transparent:!0,opacity:.68}));j.rotation.x=-Math.PI/2,j.position.y=.025,C.add(j);const $=new B(new Ot(I==="grove"?7.2:5.8,.045,7,64),new At({color:E,transparent:!0,opacity:I==="shadow"?.32:.46,depthWrite:!1}));$.rotation.x=Math.PI/2,$.position.y=.055,C.add($);for(const L of[-1,1]){const K=new B(new en(.48+F(L+Math.round(c),Math.round(v))*.22,1),new we({color:I==="shadow"?3159608:5857626,roughness:1}));K.scale.set(.8,1.65,.72),K.position.set(L*2.35,.62,I==="grove"?-.15:.35),K.rotation.set(.05,L*.28,-L*.1),C.add(K);const Q=wa(C,d,L*2.35,1.25,.73,E,.34,L*.08);Q.rotation.x=0}for(let L=0;L<8;L++){const K=-Math.PI/2+(L-3.5)*.16,Q=2.8+Math.abs(L-3.5)*.42,ye=new B(new en(.11+F(L,2200+Math.round(c))*.07,0),new we({color:E,emissive:E,emissiveIntensity:.65,roughness:.72}));ye.position.set(Math.cos(K)*Q,.08,Math.sin(K)*Q),C.add(ye)}be(C,`threshold_${I}_${Math.round(c)}_${Math.round(v)}`,`Порог: ${d}`),S.add(C)};Hr(xi,yi,"ᚱ",9430692,"grove"),Hr(xn,yn,"ᛉ",14726490,"grove"),Hr(-72,48,"ᚠ",14859617,"shadow"),Hr(58,-28,"ᛟ",15779422,"fate"),Hr(5,-70,"ᛟ",9271551,"power"),Hr(-72,-48,"ᚨ",10187519,"shadow"),Hr(50,-62,"ᛏ",9422551,"fate"),Hr(-52,38,"ᛜ",14134881,"fate");const kn=75,Cn=30,an=new Be;an.position.set(kn,W(kn,Cn),Cn);const Ky=P(5986899,1),w0=M(7.8,.42,5.8,5591885,1);w0.position.y=.22,an.add(w0);const E0=M(7.4,2.8,.3,6439727,1);E0.position.set(0,1.4,-2.7),an.add(E0);const T0=M(.3,2.8,5.4,6439727,1);T0.position.set(-3.7,1.4,0),an.add(T0);const b0=M(.3,2.8,5.4,6439727,1);b0.position.set(3.7,1.4,0),an.add(b0);const A0=M(2.55,2.8,.3,6439727,1);A0.position.set(-2.43,1.4,2.7),an.add(A0);const C0=M(2.55,2.8,.3,6439727,1);C0.position.set(2.43,1.4,2.7),an.add(C0);const R0=M(2.3,.72,.3,6439727,1);R0.position.set(0,2.44,2.7),an.add(R0);const P0=M(.16,2.18,.34,2826523,1);P0.position.set(-.66,1.28,2.72),an.add(P0);const I0=M(.16,2.18,.34,2826523,1);I0.position.set(.66,1.28,2.72),an.add(I0);const L0=M(1.48,.16,.34,2826523,1);L0.position.set(0,2.34,2.72),an.add(L0);const co=new Be;co.position.set(-.57,0,2.72),an.add(co);const D0=M(1.14,2.05,.12,3154457,1);D0.position.set(.57,1.28,0),co.add(D0);const N0=new B(new ht(.08,8,6),P(11831883,1));N0.position.set(.86,1.25,.1),co.add(N0);const Zy=new we({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const c of[-2.35,2.35]){const v=M(1.25,1,.12,2826523,1);v.position.set(c,1.72,2.78),an.add(v);const d=new B(new Xn(.98,.72,.06),Zy);d.position.set(c,1.72,2.86),an.add(d);const E=M(.07,.78,.1,2826523,1);E.position.set(c,1.72,2.91),an.add(E);const I=M(1.08,.07,.1,2826523,1);I.position.set(c,1.72,2.91),an.add(I)}const U0=new we({map:kr,color:2697767,roughness:.98,side:Xt}),Ea=new B(new zn(4.25,6.25),U0),Ta=new B(new zn(4.25,6.25),U0);Ea.rotation.x=Math.PI/2,Ta.rotation.x=Math.PI/2,Ea.rotation.z=.62,Ta.rotation.z=-.62,Ea.position.set(-1.02,3.95,0),Ta.position.set(1.02,3.95,0),an.add(Ea,Ta);const Dd=M(.22,.22,6.45,2695965,1);Dd.position.y=4.75,an.add(Dd);const Nd=new B(new Xn(.48,1.35,.48),Ky);Nd.position.set(1.55,4.8,-.65),an.add(Nd);const Ud=M(.62,.1,.62,3420461,1);Ud.position.set(1.55,5.48,-.65),an.add(Ud);const F0=M(2.35,.18,1,6636845,1);F0.position.set(0,.62,3.15),an.add(F0);const k0=M(1.55,.16,.48,5849131,1);k0.position.set(0,.3,3.58),an.add(k0),be(an,"heroHome","Домик героя"),ie.push(an),Ie(kn,Cn-2.72,7.4,.3,0,.05),Ie(kn-3.72,Cn,.3,5.45,0,.05),Ie(kn+3.72,Cn,.3,5.45,0,.05),Ie(kn-2.43,Cn+2.72,2.55,.3,0,.05),Ie(kn+2.43,Cn+2.72,2.55,.3,0,.05);const un=new Be;un.position.set(kn,W(kn,Cn),Cn),un.visible=!1;const O0=M(7,.16,5,4928548,1);O0.position.y=.5,un.add(O0);const z0=M(7,2.65,.18,4139808,1);z0.position.set(0,1.8,-2.45),un.add(z0);const B0=M(.18,2.65,4.9,4139808,1);B0.position.set(-3.45,1.8,0),un.add(B0);const H0=M(.18,2.65,4.9,4139808,1);H0.position.set(3.45,1.8,0),un.add(H0);const V0=M(2.35,2.65,.18,4139808,1);V0.position.set(-2.42,1.8,2.45),un.add(V0);const G0=M(2.35,2.65,.18,4139808,1);G0.position.set(2.42,1.8,2.45),un.add(G0);const W0=M(2.5,.04,2.1,7162673,1);W0.position.set(-.15,.6,.25),un.add(W0);const X0=M(1.65,.65,2.15,4008478,1);X0.position.set(-2.15,.88,-1.25),un.add(X0);const j0=M(1.48,.12,1.35,7033152,1);j0.position.set(-2.15,1.27,-.92),un.add(j0);const Y0=M(1.28,.18,.46,11903114,1);Y0.position.set(-2.15,1.38,-1.95),un.add(Y0);const q0=M(1.65,.12,1.05,5255969,1);q0.position.set(.85,1.15,-.15),un.add(q0);for(const[c,v]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const d=M(.1,.7,.1,3679515,1);d.position.set(c,.72,v),un.add(d)}const $0=M(1.25,.8,.72,5978660,1);$0.position.set(2.1,.95,-1.7),un.add($0);const K0=M(1.9,.14,.45,5978660,1);K0.position.set(1.35,2,-2.25),un.add(K0);for(const c of[.75,1.35,1.95]){const v=new B(new et(.08,.1,.35,8),P(7304016,1));v.position.set(c,2.24,-2.22),un.add(v)}const Z0=M(1.35,.55,.7,5920078,1);Z0.position.set(2.15,.78,.95),un.add(Z0);const J0=new B(new mn(.28,.72,8),new we({color:16744744,emissive:16731402,emissiveIntensity:4}));J0.position.set(2.15,1.42,.95),un.add(J0);const Q0=new Yi(16747068,2.2,8,2);Q0.position.set(2.15,1.7,.95),un.add(Q0),be(un,"heroHomeInterior","Дом героя — внутри"),ie.push(un);const Es=new Be;Es.position.set(kn,W(kn,Cn),Cn);const Fd=new B(new Ot(6.2,.055,7,48),new we({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Fd.rotation.x=Math.PI/2,Fd.position.y=.035,Es.add(Fd);for(const[c,v]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const d=M(.18,1,.18,4797735,1);d.position.set(c,.5,v),Es.add(d)}for(const c of[-2.4,2.9]){const v=M(10.2,.12,.12,6308139,1);v.position.set(0,.59,c),Es.add(v)}const Jy=P(6906972,1);for(let c=0;c<7;c++){const v=new B(new et(.32,.4,.12,7),Jy);v.position.set(0,.08,4.1+c*.72),v.rotation.y=c*.4,Es.add(v)}oe(kn-2.4,Cn+4.8,.48).scale.setScalar(.72),be(Es,"heroHomeYard","Двор домика героя"),ie.push(Es),oe(68,8,.75).scale.setScalar(.72);const eg=new B(new et(.65,.8,.7,7),P(5327426,1));eg.position.set(68,W(68,8)+.35,6.5),S.add(eg);for(const[c,v]of[[66,10],[70,10],[66,6],[70,6]]){const d=M(.16,1.15,.16,4797735,1);d.position.set(c,W(c,v)+.57,v),S.add(d)}const Zl=new Be;Zl.position.set(-30,W(-30,15),15);const kd=new B(new et(.5,.62,7,8),new we({map:xt,color:4995371,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.034}));kd.rotation.z=Math.PI/2,kd.position.y=.5,Zl.add(kd);const Od=new B(new et(.53,.53,.12,12),P(7693389,1));Od.rotation.z=Math.PI/2,Od.position.set(3.5,.5,0),Zl.add(Od),S.add(Zl);for(let c=0;c<7;c++){const v=new B(new en(.14,0),P(6913394,1)),d=c/7*Math.PI*2;v.position.set(-45+Math.cos(d)*4,.12+W(-45+Math.cos(d)*4,75+Math.sin(d)*4),75+Math.sin(d)*4),S.add(v)}for(let c=0;c<95;c++){const v=F(c,77)*Math.PI*2,d=68+F(c,91)*27,E=Math.cos(v)*d,I=Math.sin(v)*d+2,O=[[xi,yi,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([j,$,L])=>Math.hypot(E-j,I-$)<L);Math.abs(E+57)>9&&!O&&Fy(E,I,.78+F(c,13)*.82)}Xl(-10,18,1.55,!1),Xl(13,24,1.7,!1),Xl(-31,-12,2.15,!0);for(let c=0;c<110;c++){const v=F(c,701)*Math.PI*2,d=15+F(c,702)*50,E=Math.cos(v)*d,I=Math.sin(v)*d+3;if(Math.abs(E)<10&&Math.abs(I)<16)continue;const C=new Be;C.position.set(E,W(E,I),I);for(let O=0;O<3;O++){const j=new B(new mn(.025,.38+F(O,c)*.28,4),new we({color:O===1?5466175:4282935,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.012}));j.position.set((O-1)*.09,.18,(F(O*3,c)-.5)*.12),j.rotation.z=(O-1)*.22,C.add(j)}S.add(C),Wl.push({o:C,baseX:0,baseZ:0,phase:F(c,703)*Math.PI*2,amp:.018+.016*F(c,704)})}for(let c=0;c<80;c++){const v=-88+F(c,101)*176,d=-88+F(c,111)*176;if(Math.hypot(v,d+2)>30){const E=new B(new mn(.08,.55+F(c,121)*.7,5),new we({color:4941888,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.012}));E.position.set(v,W(v,d)+.3,d),S.add(E),Wl.push({o:E,baseX:0,baseZ:0,phase:F(c,122)*Math.PI*2,amp:.014+.012*F(c,123)})}}for(let c=0;c<72;c++){const v=-84+F(c,150)*168,d=-82+F(c,151)*164,E=Math.hypot(v-1,d+1)<24,I=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([j,$,L])=>Math.hypot(v-j,d-$)<L);if(E||I)continue;const C=.1+F(c,152)*.24,O=new B(new en(C,1),new we({color:c%3===0?5593940:6710877,roughness:.98,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.018}));O.scale.set(1+F(c,153)*1.3,.55+F(c,154)*.7,.72+F(c,155)*1.15),O.rotation.set(F(c,156)*1.7,F(c,157)*Math.PI,F(c,158)*1.7),O.position.set(v,W(v,d)+C*.22,d),O.castShadow=!0,O.receiveShadow=!0,S.add(O)}for(let c=0;c<46;c++){const v=-82+F(c,160)*164,d=-80+F(c,161)*160;if(Math.hypot(v-1,d+1)<28)continue;const E=.55+F(c,162)*1.15,I=new B(new et(.025,.055,E,6),P(4600356,.98));I.position.set(v,W(v,d)+.045,d),I.rotation.set(.05+F(c,163)*.35,F(c,164)*Math.PI,Math.PI*.5+(F(c,165)-.5)*.5),S.add(I)}const Qy=new we({color:7308881,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.008}),e2=new we({color:8491867,roughness:1,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.006}),zd=new we({map:xt,color:5914669,roughness:.99,roughnessMap:ot.rough,bumpMap:ot.height,bumpScale:.026});for(let c=0;c<54;c++){const v=F(c,920)*Math.PI*2,d=18+F(c,921)*63,E=Math.cos(v)*d,I=Math.sin(v)*d+3;if(Math.abs(E)<12&&Math.abs(I)<20)continue;const C=new Be;C.position.set(E,W(E,I)+.018,I);const O=.35+F(c,922)*.75,j=.28+F(c,923)*.65;for(let $=0;$<2;$++){const L=new B(new Gn(1,9),$%2?e2:Qy);L.rotation.x=-Math.PI/2,L.scale.set(O*(1-$*.18),j*(1-$*.12),1),L.position.set((F(c+$,924)-.5)*.32,.006+$*.003,(F(c+$,925)-.5)*.28),C.add(L)}S.add(C)}const tg=new we({color:5533764,roughness:1}),ng=new we({color:7309137,roughness:1});for(let c=0;c<72;c++){const v=F(c,930)*Math.PI*2,d=20+F(c,931)*61,E=Math.cos(v)*d,I=Math.sin(v)*d+3;if(Math.abs(E)<13&&Math.abs(I)<21)continue;const C=new Be;C.position.set(E,W(E,I),I);const O=.55+F(c,932)*.8;for(let j=0;j<3;j++){const $=new B(new et(.018*O,.035*O,.55*O,5),j===1?ng:tg);$.position.set((j-1)*.12*O,.27*O,(F(c,j+933)-.5)*.1*O),$.rotation.z=(j-1)*.3,$.rotation.x=(F(c,j+936)-.5)*.22,C.add($);for(let L=0;L<3;L++){const K=new B(new mn(.045*O,.18*O,5),j===1?ng:tg);K.rotation.z=(j-1)*.3+(L%2?.18:-.18),K.rotation.x=Math.PI*.5,K.position.set((j-1)*.12*O+(L-1)*.075*O,.3*O+L*.1*O,(F(c,L+940)-.5)*.12*O),C.add(K)}}S.add(C),Wl.push({o:C,baseX:0,baseZ:0,phase:F(c,941)*Math.PI*2,amp:.022+.018*F(c,942)})}const Bd=(c,v,d,E)=>{const I=W(c,v),C=new Be;C.position.set(c,I,v);const O=5+Math.floor(F(E,950)*3);for(let j=0;j<O;j++){const $=j/O*Math.PI*2+F(j,E+951)*.32,L=(1.8+F(j,E+952)*2.7)*d,K=(.11+F(j,E+953)*.12)*d,Q=new B(new et(K*.42,K,L,7),zd);Q.position.set(Math.cos($)*L*.46,.13*d,Math.sin($)*L*.46),Q.rotation.z=Math.PI/2,Q.rotation.y=-$,Q.rotation.x=(F(j,E+954)-.5)*.16,C.add(Q)}S.add(C)};Bd(-10,18,1.55,11),Bd(13,24,1.7,23),Bd(-31,-12,2.15,37);for(let c=0;c<22;c++){const v=F(c,960)*Math.PI*2,d=27+F(c,961)*55,E=Math.cos(v)*d,I=Math.sin(v)*d+3;if(Math.abs(E)<15&&Math.abs(I)<22)continue;const C=.55+F(c,962)*.8,O=new Be;O.position.set(E,W(E,I),I);const j=new B(new et(.18*C,.3*C,.45*C,7),zd);j.position.y=.22*C,O.add(j);const $=new B(new et(.19*C,.19*C,.035*C,7),P(8416080,1));$.position.y=.45*C,O.add($),S.add(O)}for(let c=0;c<18;c++){const v=F(c,970)*Math.PI*2,d=24+F(c,971)*58,E=Math.cos(v)*d,I=Math.sin(v)*d+3;if(Math.abs(E)<14&&Math.abs(I)<21)continue;const C=1+F(c,972)*2,O=new B(new et(.045,.1,C,6),zd);O.position.set(E,W(E,I)+.07,I),O.rotation.set(.08+F(c,973)*.22,F(c,974)*Math.PI,Math.PI/2+(F(c,975)-.5)*.5),S.add(O)}const Ts=new Be;Ts.position.set(29,W(29,25),25),Ts.userData={id:"tower",label:"Сторожевая башня"};for(const c of[-2,2])for(const v of[-2,2]){const d=M(.35,7,.35,3942685,1);d.position.set(c,3.5,v),Ts.add(d)}const ig=M(5,.35,5,6833965,1);ig.position.y=5.8,Ts.add(ig);const rg=new B(new mn(3.8,2.7,4),P(2696482,1));rg.position.y=8,Ts.add(rg),be(Ts,"tower","Сторожевая башня"),ie.push(Ts),Ie(29,25,4.8,4.8,0,.08);const ba=(c,v,d,E,I,C)=>{const O=new Be;O.userData={id:d,label:E,phase:C,baseX:c,baseZ:v};const j=new B(new di(.32,.78,4,8),P(I,.9));j.position.y=.85,O.add(j);const $=new B(new ht(.25,12,8),P(13210736,.9));$.position.y=1.58,O.add($);const L=M(.7,.9,.15,2565407,1);L.position.set(0,.82,-.27),O.add(L),O.position.set(c,W(c,v),v),be(O,d,E),ie.push(O),Ae.push(O)};ba(9,-8,"elder","Старейшина",7558719,.4),ba(-6,-3,"blacksmith","Кузнец",6044459,1.5),ba(21,1,"hunter","Охотник",4215359,2.4),ba(5,10,"villager","Житель Мидгарда",5858125,3.4),ba(-16,4,"villager2","Житель деревни",6638394,4.2);const Hd=new Be;for(let c=0;c<18;c++){const v=new X1(Ve.clone()),d=4.5+F(c,831)*7.5;v.scale.set(d,d*(.3+F(c,832)*.18),1),v.position.set(-82+F(c,833)*164,.35+F(c,834)*1.15,-66+F(c,835)*132),v.material.opacity=.055+F(c,836)*.055,Hd.add(v)}S.add(Hd);const Vd=72,bs=new Float32Array(Vd*3);for(let c=0;c<Vd;c++){const v=F(c,1401)*Math.PI*2,d=12+F(c,1402)*74;bs[c*3]=Math.cos(v)*d,bs[c*3+1]=1+F(c,1403)*4.8,bs[c*3+2]=Math.sin(v)*d+3}const Jl=new ln;Jl.setAttribute("position",new Ct(bs,3));const Gd=new vy({color:15785902,size:.075,transparent:!0,opacity:.24,depthWrite:!1,sizeAttenuation:!0}),t2=new $w(Jl,Gd);S.add(t2);const As=aA(t);S.add(As);const mr=As.userData.anim,sg=new vE,Wd=new Ke,og=c=>{var E,I,C,O;if((I=(E=c.target)==null?void 0:E.closest)!=null&&I.call(E,".mid3d-ui"))return;const v=Y.domElement.getBoundingClientRect();Wd.x=(c.clientX-v.left)/v.width*2-1,Wd.y=-((c.clientY-v.top)/v.height)*2+1,sg.setFromCamera(Wd,z);const d=sg.intersectObjects(ie,!0)[0];if(d){let j=d.object;for(;j.parent&&!((C=j.userData)!=null&&C.id);)j=j.parent;(O=j.userData)!=null&&O.id&&e(j.userData.id)}};Y.domElement.addEventListener("pointerup",og);const n2=c=>{_.current=c,x(c),l(""),un.visible=c,Ea.visible=!c,Ta.visible=!c,Dd.visible=!c,Nd.visible=!c,Ud.visible=!c,c?(o.current.x=kn,o.current.z=Cn+.95,f.current.x=0,f.current.z=-1,co.rotation.y=-Math.PI/2):(o.current.x=kn,o.current.z=Cn+3.75,f.current.x=0,f.current.z=1,co.rotation.y=0),As.position.set(o.current.x,W(o.current.x,o.current.z)+.04,o.current.z)};y.current=n2;const i2=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],ag=()=>{const c=Math.max(1,b.clientWidth),v=Math.max(1,b.clientHeight);z.aspect=c/v,z.updateProjectionMatrix(),Y.setSize(c,v,!1)};ag();const lg=new ResizeObserver(ag);lg.observe(b);let Xd=0,cg=performance.now();const ug=c=>{const v=Math.min(.05,(c-cg)/1e3);cg=c;const d=o.current,E=Math.hypot(d.dx,d.dz);if(E>.05){const L=6.2*v;Z(d,d.x+d.dx/E*L,d.z+d.dz/E*L),As.rotation.y=Math.atan2(d.dx,d.dz),f.current.x=d.dx/E,f.current.z=d.dz/E,p(!0)}else p(!1);const I=W(d.x,d.z);if(As.position.set(d.x,I+.04,d.z),mr){const L=c*.011+mr.phase,K=E>.05?Math.sin(L)*.58:0,Q=E>.05?Math.sin(L+Math.PI)*.42:0;mr.legL.rotation.x=K,mr.legR.rotation.x=-K,mr.armL.upper.rotation.x=Q,mr.armR.upper.rotation.x=-Q,mr.armL.elbow.rotation.x=-Math.abs(Q)*.35,mr.armR.elbow.rotation.x=-Math.abs(Q)*.35,mr.weapon.rotation.z=-.12+(E>.05?Math.sin(L)*.035:0)}const C=f.current,O=_.current?new V(d.x-C.x*1,I+3.65,d.z-C.z*1):new V(d.x-C.x*2,I+7.2,d.z-C.z*2+11.8);z.position.lerp(O,_.current?.09:.055),z.lookAt(d.x+(_.current?C.x*.9:C.x*1.9),I+(_.current?1.25:1.2),d.z+(_.current?C.z*.9:C.z*1.9));let j="",$="";if(_.current)d.z>Cn+1.72&&(j="Дверь — выйти из дома",$="heroHomeExit");else for(const L of i2)if(Math.hypot(d.x-L.x,d.z-L.z)<L.r){j=L.label,$=L.id;break}l(j?`${j}|${$}`:""),ld.forEach((L,K)=>{const Q=Math.sin(c*.00125+L.phase)*L.amp+Math.sin(c*63e-5+L.phase*1.7+K)*L.amp*.45;L.o.rotation.x=L.baseX+Q*.75,L.o.rotation.z=L.baseZ+Q}),Wl.forEach((L,K)=>{const Q=Math.sin(c*.0017+L.phase)*L.amp+Math.sin(c*91e-5+L.phase*1.9+K)*L.amp*.5;L.o.rotation.x=L.baseX+Q*.55,L.o.rotation.z=L.baseZ+Q});for(let L=0;L<Vd;L++){const K=L*3,Q=L*.73;bs[K]+=Math.sin(c*22e-5+Q)*.0018,bs[K+1]+=Math.sin(c*47e-5+Q*1.3)*.001,bs[K+2]+=Math.cos(c*19e-5+Q)*.0015}Jl.attributes.position.needsUpdate=!0,Gd.opacity=.19+.07*(.5+.5*Math.sin(c*55e-5)),ha.forEach(L=>{const K=.72+.28*Math.sin(c*.0016+L.phase);L.mesh.scale.set(K,K*.42,K);const Q=L.mesh.material;Q.opacity=.055+.055*(.5+.5*Math.sin(c*.0016+L.phase))}),_i.forEach(L=>{const K=Math.sin(c*55e-5*L.speed+L.phase)*.9;L.mesh.position.y=W(L.mesh.position.x,L.mesh.position.z)+.095+K*.008;const Q=L.mesh.material;Q.opacity=.045+.045*(.5+.5*Math.sin(c*.0011*L.speed+L.phase))}),Fe.forEach(L=>{L.light.intensity=2+Math.sin(c*.012+L.phase)*.5,L.flame.scale.y=.9+Math.sin(c*.009+L.phase)*.12}),Hd.children.forEach((L,K)=>{L.position.x+=Math.sin(c*12e-5+K)*.003,L.position.z+=Math.cos(c*1e-4+K)*.002}),rt.forEach((L,K)=>{L.position.x+=Math.sin(c*1e-4+K*1.7)*.0025,L.position.z+=Math.cos(c*8e-5+K*1.3)*.002;const Q=L.material;Q.opacity=.075+(.045+.02*F(K,837))*(.5+.5*Math.sin(c*22e-5+K))}),Ze.forEach((L,K)=>{var Ye,ft;if(L.kind==="deer"){const bt=L.g.position.x-As.position.x,Ut=L.g.position.z-As.position.z,Bt=Math.hypot(bt,Ut);if(Bt<11){const Qt=((Ye=L.g.userData)==null?void 0:Ye.legJoints)||[],Kt=c*.014*(L.speed||1);for(let Wt=0;Wt<4;Wt++){const Rn=Qt[Wt*2],Si=Qt[Wt*2+1];Rn&&(Rn.rotation.z=Math.sin(Kt+Wt*Math.PI)*.1),Si&&(Si.rotation.z=Math.max(0,Math.sin(Kt+Wt*Math.PI))*-.18)}const Ft=Math.max(.001,Bt),kt=Bt<5.5?.115:.075,pn=L.g.position.x+bt/Ft*kt,Vn=L.g.position.z+Ut/Ft*kt,ui=pn-30,ze=Vn-53;if(Math.hypot(ui,ze)<17)L.g.position.set(pn,W(pn,Vn),Vn);else{const Wt=Math.atan2(ze,ui),Rn=30+Math.cos(Wt)*16,Si=53+Math.sin(Wt)*10;L.g.position.set(Rn,W(Rn,Si),Si)}L.g.rotation.y=Math.atan2(Ut,bt),L.g.position.y+=Math.sin(c*.008+K)*.025;return}}const Q=c*.00105*L.speed+L.phase,ye=L.x+Math.cos(Q)*L.r,ge=L.z+Math.sin(Q*.83)*L.r*.62;if(L.g.position.set(ye,W(ye,ge),ge),L.g.rotation.y=Math.atan2(Math.cos(Q*.83),-Math.sin(Q)),L.kind==="deer"){const bt=((ft=L.g.userData)==null?void 0:ft.legJoints)||[],Ut=c*.014*(L.speed||1);for(let Bt=0;Bt<4;Bt++){const Qt=bt[Bt*2],Kt=bt[Bt*2+1];Qt&&(Qt.rotation.z=Math.sin(Ut+Bt*Math.PI)*.1),Kt&&(Kt.rotation.z=Math.max(0,Math.sin(Ut+Bt*Math.PI))*-.18)}L.g.position.y+=Math.sin(c*.006+K)*.025,L.g.rotation.x=Math.sin(c*.004+L.phase)*.018}}),Ae.forEach((L,K)=>{const Q=L.userData.phase||0,ye=L.userData.baseX,ge=L.userData.baseZ,Ye=ye+Math.sin(c*28e-5+Q)*1.6,ft=ge+Math.cos(c*22e-5+Q)*1.1;L.position.set(Ye,W(Ye,ft),ft),L.rotation.y=Math.sin(c*4e-4+Q)*.5}),ke.forEach((L,K)=>{const Q=L.material;Q.opacity=.48+Math.sin(c*55e-5+K*1.7)*.07,L.rotation.z+=Math.sin(c*18e-5+K)*8e-5}),Y.render(S,z),Xd=requestAnimationFrame(ug)};return Xd=requestAnimationFrame(ug),()=>{cancelAnimationFrame(Xd),lg.disconnect(),Y.domElement.removeEventListener("pointerup",og),ha.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),_i.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),G.dispose(),Fr.dispose(),kr.dispose(),ue.dispose(),Re.dispose(),ke.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),Y.dispose(),Jl.dispose(),Gd.dispose(),S.traverse(c=>{var v,d,E,I;c.isMesh&&((d=(v=c.geometry)==null?void 0:v.dispose)==null||d.call(v),Array.isArray(c.material)?c.material.forEach(C=>{var O;return(O=C.dispose)==null?void 0:O.call(C)}):(I=(E=c.material)==null?void 0:E.dispose)==null||I.call(E))}),Y.domElement.remove(),y.current=null}},[t.id,e,n]);const T=b=>{const S=r.current,z=s.current;if(!S||!z)return;const Y=S.getBoundingClientRect(),re=Y.left+Y.width/2,ce=Y.top+Y.height/2,fe=48;let W=b.clientX-re,te=b.clientY-ce;const H=Math.hypot(W,te);H>fe&&(W=W/H*fe,te=te/H*fe),z.style.transform=`translate(${W}px,${te}px)`,o.current.dx=W/fe,o.current.dz=te/fe},D=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},N=b=>{var te,H;const S=r.current;if(!S)return;const z=b.target;if((te=z.closest)!=null&&te.call(z,".mid3d-action")||(H=z.closest)!=null&&H.call(z,".mid3d-interact"))return;const Y=S.getBoundingClientRect(),re=26;b.clientX>=Y.left-re&&b.clientX<=Y.right+re&&b.clientY>=Y.top-78&&b.clientY<=Y.bottom+26&&(b.currentTarget.setPointerCapture(b.pointerId),T(b))},U=b=>{b.currentTarget.hasPointerCapture(b.pointerId)&&T(b)},k=b=>{b.currentTarget.hasPointerCapture(b.pointerId)&&b.currentTarget.releasePointerCapture(b.pointerId),D()};return q.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:N,onPointerMove:U,onPointerUp:k,onPointerCancel:k,onContextMenu:b=>b.preventDefault(),children:[q.jsxs("div",{className:"mid3d-ui mid3d-top",children:[q.jsxs("div",{className:"mid3d-pill",children:[q.jsx("b",{children:"МИДГАРД"}),q.jsx("span",{children:"Деревня • река • лес • святилища"})]}),q.jsxs("div",{className:"mid3d-pill",children:[q.jsx("b",{children:"ᛟ"}),q.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[q.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),q.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[q.jsx("b",{children:"Камень Трёх Нитей"}),q.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>w(!1),children:"Продолжить путь"})]}),h&&q.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[q.jsx("b",{children:"🜂 Круг Силы"}),q.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),q.jsx("button",{onPointerDown:b=>b.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!h&&!g&&(()=>{const[b,S]=a.split("|"),z=S==="heroHome"||S==="heroHomeExit";return q.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[q.jsx("b",{children:b}),q.jsx("span",{children:z?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),q.jsx("button",{onPointerDown:Y=>Y.stopPropagation(),onClick:()=>{var Y,re;S==="powerCircle"?m(!0):S==="threeThreads"?w(!0):S==="heroHome"?(Y=y.current)==null||Y.call(y,!0):S==="heroHomeExit"?(re=y.current)==null||re.call(y,!1):e(S)},children:z?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),q.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:q.jsx("div",{className:"mid3d-knob",ref:s})}),q.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:b=>b.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),q.jsx("div",{className:"mid3d-ui mid3d-hint",children:A?u?"Ты внутри дома":"Дом героя • отдых • сундук • выход":u?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function cA(){const[t,e]=Tt.useState(()=>Iv().hero?{t:"tree"}:{t:"choose"}),[n,i]=Tt.useState(Iv),[r,s]=Tt.useState(""),[o,a]=Tt.useState(""),[l,u]=Tt.useState(""),p=Tt.useRef(0),[h,m]=Tt.useState(null),[g,w]=Tt.useState(null),[A,x]=Tt.useState(!1),[f,_]=Tt.useState(0),[y,T]=Tt.useState(0),[D,N]=Tt.useState(0),[U,k]=Tt.useState(""),[b,S]=Tt.useState(!1),[z,Y]=Tt.useState(!1),[re,ce]=Tt.useState(""),[fe,W]=Tt.useState(.06);Tt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Tt.useEffect(()=>{var X,Le,de,he;(X=Rt==null?void 0:Rt.ready)==null||X.call(Rt),(Le=Rt==null?void 0:Rt.expand)==null||Le.call(Rt),(de=Rt==null?void 0:Rt.setHeaderColor)==null||de.call(Rt,"#0b0f0c"),(he=Rt==null?void 0:Rt.setBackgroundColor)==null||he.call(Rt,"#0b0f0c")},[]),Tt.useEffect(()=>{if(!(Rt!=null&&Rt.BackButton))return;const X=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Rt.BackButton.show(),Rt.BackButton.onClick(X)):Rt.BackButton.hide(),()=>{var Le,de;(de=(Le=Rt.BackButton)==null?void 0:Le.offClick)==null||de.call(Le,X)}},[t,n.hero]),Tt.useEffect(()=>{m(null),w(null),x(!1),ce(""),S(!1)},[t]);const te=X=>{u(X),window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(""),1800)},H=(X="light")=>{var Le,de,he,tt;try{X==="success"?(de=(Le=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:Le.notificationOccurred)==null||de.call(Le,"success"):(tt=(he=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:he.impactOccurred)==null||tt.call(he,"light")}catch{}},se=X=>e(X),ue=X=>{H(),e({t:"realm",id:X.id})},Re=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ke=()=>{const X=Re();if(X<=0){te("Дозор только начался — искры ещё копятся.");return}i(Le=>({...Le,sparks:Le.sparks+X,watch:Date.now()})),H("success"),te("Дозор завершён: +"+X+" ✨")},vt=()=>{if(n.gift===Wa())return;const Le=(n.gift?Math.round((Date.parse(Wa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,de=rh[Le-1];i(he=>({...he,sparks:he.sparks+de,gift:Wa(),streak:Le})),H("success"),te("Дар Древа, день "+Le+": +"+de+" ✨")},ct=()=>{!r||!o||(i(X=>({...X,hero:{id:r,name:o}})),H("success"),te("Путь начинается, "+o+"!"),e({t:"tree"}))},Pe=n.hero?sh.find(X=>X.id===n.hero.id):null,pe=X=>Math.floor(Math.random()*X),ve=X=>n.trials.filter(Le=>Le.startsWith(X+":")).length,Ve=X=>{if(n.artifacts.includes(X.id)){te("Мир покорён. Артефакт хранится в листе героя.");return}H(),e({t:"trial",id:X.id})},rt=(X,Le,de)=>{const he=Le===2;i(tt=>({...tt,sparks:tt.sparks+de+(he?30:0),trials:[...tt.trials,X+":"+Le],artifacts:he?[...tt.artifacts,X]:tt.artifacts})),he&&(H("success"),te("Мир пройден! Артефакт: "+ah[X]))},qe=(X,Le)=>{if(h!==null)return;const de=ve(X),he=oh[X][de];if(Le===he.c){m(Le),H("success");const tt=12+de*3+((Pe==null?void 0:Pe.id)==="dwarf"?6:0);te("Верно! Сундук хозяина: +"+tt+" ✨"),rt(X,de,tt);return}if(n.powers.includes("mimirEye")){m(he.c),i(be=>({...be,powers:be.powers.filter(P=>P!=="mimirEye")}));const tt=8+de*2;H("success"),te("Око Мимира раскрыло истину. Ответ исправлен. +"+tt+" ✨"),rt(X,de,tt);return}if(n.powers.includes("nornThread")){m(Le),i(be=>({...be,powers:be.powers.filter(P=>P!=="nornThread")}));const tt=6+de*2;H("success"),te("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+tt+" ✨"),rt(X,de,tt);return}m(Le),H(),k(Xa[X].name+" мрачнеет: «Что ж — пусть решит сталь!»")},Mt=X=>{const Le=ve(X),de=oh[X][Le],he=de.a.findIndex((tt,be)=>be!==de.c&&be!==g);w(he),x(!0),H(),te("Шёпот ветров уносит один ответ...")},ot=X=>{const Le=Xa[X],de=n.powers.includes("ashBreath");_(Le.hp),T(Pe.hp+(de?25:0)),N(Pe.en+(de?2:0)),ce(""),S(!1),Y(!1),k(de?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Le.name+" поднимает оружие!"),de&&i(he=>({...he,powers:he.powers.filter(tt=>tt!=="ashBreath")})),e({t:"fight",id:X})},G=(X,Le)=>{if(re)return;const de=Xa[X],he=ve(X);let tt=0,be="",P=D,M=b;if(Le==="hit"&&(tt=Pe.str+pe(4),n.powers.includes("fireOath")&&(tt+=5,i(Fe=>({...Fe,powers:Fe.powers.filter(Ae=>Ae!=="fireOath")})),be="Огненный обет! "),Pe.id==="berserk"&&y<=Pe.hp/2&&(tt*=2,be+="Медвежья ярость! "),be+="Ты бьёшь: "+Pe.weapon+" — −"+tt+" хозяину."),Le==="rune"){if(D<4){te("Мало энергии для заклинания!");return}P=D-4,tt=Pe.en+2+pe(5),be="Руническое заклинание вспыхивает: −"+tt+" хозяину."}Le==="shield"&&(M=!0,be="Ты поднимаешь щит — удар ослабнет.");const ne=f-tt;if(ne<=0){_(0),N(P),ce("win");const Fe=8+he*2;k("Хозяин повержен! Награда: +"+Fe+" ✨"),rt(X,he,Fe);return}let le=de.atk+pe(3),xe="";M&&(le=Math.ceil(le*.3),xe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(le=Math.ceil(le*.65),i(Fe=>({...Fe,powers:Fe.powers.filter(Ae=>Ae!=="iceOath")})),xe+=" Ледяной обет сковал удар врага."),Pe.id==="dwarf"&&(le=Math.ceil(le*.75));let ie=y;if(Pe.id==="viking"&&!z&&ie-le<=0&&(Y(!0),le=0,xe=" Крылья бури поглотили смертельный удар!"),ie=ie-le,_(ne),T(Math.max(0,ie)),N(P),S(!1),ie<=0&&n.powers.includes("yggdrasilCall")){i(Fe=>({...Fe,powers:Fe.powers.filter(Ae=>Ae!=="yggdrasilCall")})),T(30),k(be+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(ie<=0){ce("lose"),i(Fe=>({...Fe,sparks:Math.max(0,Fe.sparks-10)})),k(be+" "+de.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}k(be+xe+" "+de.name+" отвечает: −"+le+".")},xt=X=>{ve(X)>=3||n.artifacts.includes(X)?e({t:"realm",id:X}):e({t:"trial",id:X})},at=X=>X==="tree"?t.t==="tree"||t.t==="realm":t.t===X,it=X=>X==="tree"?{t:"tree"}:{t:X};return q.jsxs("div",{className:"app",children:[q.jsx("style",{children:sA}),q.jsxs("div",{className:"hdr",children:[t.t==="tree"&&q.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&q.jsx("button",{className:"back",onClick:()=>se({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&q.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&q.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&q.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&q.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&q.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&q.jsx("div",{className:"title",children:"⚔ Бой"}),q.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&q.jsxs("div",{className:"scroll choose-screen",children:[q.jsxs("div",{className:"card center choose-intro",children:[q.jsx("div",{className:"big",children:"ᛉ"}),q.jsx("div",{className:"qhead2",children:"Выбери героя"}),q.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),sh.map(X=>q.jsxs("button",{className:"hcard"+(r===X.id?" on":""),onClick:()=>{s(X.id),a(""),H()},children:[q.jsx("span",{className:"hface",style:{borderColor:X.color,color:X.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:q.jsx(Kr,{name:X.img,className:"himg"})}),q.jsxs("span",{className:"hinfo",children:[q.jsx("span",{className:"hname",style:{color:X.color},children:X.race}),q.jsxs("span",{className:"hab",children:["🌀 ",X.ability,": ",X.abilityDesc]}),q.jsxs("span",{className:"hst",children:["⚔ ",X.str," • ✨ ",X.en," • ❤ ",X.hp]}),q.jsxs("span",{className:"hw",children:["🗡 ",X.weapon]})]})]},X.id)),r&&q.jsxs("div",{className:"card",children:[q.jsx("div",{className:"qhead2",children:"Имя героя"}),q.jsx("div",{className:"chips",children:(sh.find(X=>X.id===r).gender==="f"?iA:rA).map(X=>q.jsx("button",{className:"chip"+(o===X?" on":""),onClick:()=>{a(X),H()},children:X},X))})]}),q.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ct,children:"Вступить на путь"})]}),t.t==="tree"&&q.jsxs("div",{className:"maparea",children:[q.jsx("div",{className:"mapwrap",children:q.jsxs("div",{className:"mapcanvas",children:[q.jsx(Kr,{name:"tree",className:"mapimg"}),Xc.map(X=>q.jsxs("button",{className:"marker",style:{left:X.x+"%",top:X.y+"%"},onClick:()=>ue(X),children:[q.jsxs("div",{className:"amulet-wrap",children:[q.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${X.glow}, transparent 70%)`}}),q.jsx("div",{className:"amulet-ring",style:{borderColor:X.color}}),q.jsx("div",{className:"amulet-core",style:{borderColor:X.color,color:X.color,background:`linear-gradient(135deg, ${X.dark}, #0a0a0a)`},children:X.runeSym})]}),q.jsx("span",{className:"mname",style:{color:X.color,borderColor:X.glow},children:X.name})]},X.id))]})}),q.jsx("div",{className:"fadeT"}),q.jsx("div",{className:"fadeB"}),q.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Pe&&n.hero&&q.jsxs("button",{className:"herobar",onClick:()=>se({t:"hero"}),children:[q.jsxs("span",{className:"hbface",style:{borderColor:Pe.color,color:Pe.color},children:[q.jsx(Kr,{name:Pe.img,className:"hbimg"}),Pe.sym]}),q.jsxs("span",{className:"hbname",children:[n.hero.name,q.jsx("i",{children:Pe.race})]}),q.jsxs("span",{className:"hbst",children:["⚔ ",Pe.str," ✨ ",Pe.en," ⏳ ",Re()]}),q.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const X=Xc.find(Le=>Le.id===t.id);if(X.id==="midgard"){if(!Pe)return null;const Le=de=>{if(H(),de==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?te("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(he=>({...he,sparks:he.sparks+20,done:[...new Set([...he.done,"forest:present:reward"])]})),H("success"),te("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):te("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(de==="norns"){te("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(de==="threeThreads"){te("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(de==="forge"||de==="blacksmith"){te("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(de==="house"||de==="elder"){te("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(de==="port"){te("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(de==="rune"){te("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(de==="ashgrove"){te("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(de==="runefield"){te("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(de==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?te("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(he=>({...he,sparks:he.sparks+20,done:[...new Set([...he.done,"forest:past:reward"])]})),H("success"),te("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):te("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(de==="forestCache"){n.done.includes("forest:cache")?te("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(he=>({...he,sparks:he.sparks+18,done:[...new Set([...he.done,"forest:cache"])]})),H("success"),te("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(de==="forestWhisper"){n.done.includes("forest:whisper")?te("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(he=>({...he,sparks:he.sparks+16,done:[...new Set([...he.done,"forest:whisper"])]})),H("success"),te("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(de==="forestThread"){n.done.includes("forest:thread")?te("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(he=>({...he,sparks:he.sparks+22,done:[...new Set([...he.done,"forest:thread"])]})),H("success"),te("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(de==="heroHome"){te("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(de==="hunterCamp"){n.done.includes("forest:camp")?te("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(he=>({...he,sparks:he.sparks+14,done:[...new Set([...he.done,"forest:camp"])]})),H("success"),te("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(de==="deepGrove"){n.done.includes("forest:grove")?te("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(he=>({...he,sparks:he.sparks+17,done:[...new Set([...he.done,"forest:grove"])]})),H("success"),te("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(de==="fallenAsh"){n.done.includes("forest:ash")?te("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(he=>({...he,sparks:he.sparks+21,done:[...new Set([...he.done,"forest:ash"])]})),H("success"),te("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(de==="deer"){te("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(de==="hoddmimir"){te("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(de==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?te("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(he=>({...he,sparks:he.sparks+20,done:[...new Set([...he.done,"forest:future:reward"])]})),H("success"),te("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):te("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(de==="forestEvent"){n.done.includes("forest:choice")&&te("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(de==="forestEvent:past"){i(he=>({...he,sparks:he.sparks+12,done:[...new Set([...he.done,"forest:choice","forest:past"])]})),H("success"),te("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(de==="forestEvent:present"){i(he=>({...he,sparks:he.sparks+12,done:[...new Set([...he.done,"forest:choice","forest:present"])]})),H("success"),te("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(de==="forestEvent:future"){i(he=>({...he,sparks:he.sparks+12,done:[...new Set([...he.done,"forest:choice","forest:future"])]})),H("success"),te("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(de==="event"){te("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(de.startsWith("ritual:")){const he=de.slice(7),tt={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},P={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[he];if(!P)return;if(n.powers.includes(P)){te(tt[he]+" уже пробуждён. Его сила ждёт своего часа.");return}i(ne=>({...ne,powers:[...new Set([...ne.powers,P])],done:[...new Set([...ne.done,"ritual:"+he])]}));const M={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};H("success"),te(M[he]);return}};return q.jsx(lA,{h:Pe,on:Le,eventDone:n.done.includes("forest:choice")})}return q.jsxs("div",{className:"content",children:[q.jsx(Kr,{name:X.id,className:"bgimg"}),q.jsx("div",{className:"veil"}),q.jsxs("div",{className:"banner",children:[q.jsx("span",{className:"bemoji",children:X.emoji}),q.jsxs("div",{children:[q.jsx("div",{className:"bname",children:X.name}),q.jsx("div",{className:"btag",children:X.tag})]})]}),q.jsxs("button",{className:"gate",onClick:()=>Ve(X),children:[q.jsxs("span",{className:"gwrap",children:[q.jsx("span",{className:"gate-ring",style:{borderColor:X.color}}),q.jsx("span",{className:"gate-core",style:{borderColor:X.color,color:X.color,background:`radial-gradient(circle, ${X.dark}, #050705 75%)`},children:X.runeSym})]}),q.jsx("span",{className:"mname",style:{color:X.color,borderColor:X.glow},children:n.artifacts.includes(X.id)?"Мир покорён":"Врата мира"})]}),q.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const X=Xc.find(tt=>tt.id===t.id),Le=Xa[X.id],de=ve(X.id);if(de>=3)return q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🏺"}),q.jsx("div",{className:"qhead2",children:"Мир покорён!"}),q.jsxs("p",{className:"dim",children:["Артефакт: ",ah[X.id]]}),q.jsx("button",{className:"btn gold",onClick:()=>se({t:"realm",id:X.id}),children:"К вратам"})]})});const he=oh[X.id][de];return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"mhead",children:[q.jsxs("span",{className:"mface",style:{borderColor:X.color,color:X.color},children:[q.jsx(Kr,{name:Lv[X.id],className:"himg"}),Le.sym]}),q.jsx("span",{className:"mname2",style:{color:X.color},children:Le.name}),q.jsxs("span",{className:"mtitle",children:[Le.title," • испытание ",de+1," из 3"]})]}),de===0&&q.jsxs("div",{className:"greet",children:["«",Le.greet,"»"]}),q.jsxs("div",{className:"cloud",children:[q.jsx("div",{className:"riddle",children:he.q}),he.a.map((tt,be)=>q.jsx("button",{className:"ans"+(h!==null?be===he.c?" good":be===h?" bad":" off":g===be?" off":""),onClick:()=>qe(X.id,be),children:tt},be)),(Pe==null?void 0:Pe.id)==="elf"&&!A&&h===null&&q.jsx("button",{className:"btn rune",onClick:()=>Mt(X.id),children:"🌀 Шёпот ветров"}),h!==null&&(h===he.c?q.jsx("button",{className:"btn gold",onClick:()=>xt(X.id),children:"Открыть сундук →"}):q.jsx("button",{className:"btn",onClick:()=>ot(X.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const X=Xc.find(de=>de.id===t.id),Le=Xa[X.id];return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"duel",children:[q.jsxs("div",{className:"dside",children:[q.jsxs("span",{className:"dface",style:{borderColor:X.color,color:X.color},children:[q.jsx(Kr,{name:Lv[X.id],className:"himg"}),Le.sym]}),q.jsx("span",{className:"dname",style:{color:X.color},children:Le.name}),q.jsx("span",{className:"dhp",children:q.jsx("span",{className:"dhpfill",style:{width:Math.max(0,f/Le.hp*100)+"%",background:X.color}})}),q.jsxs("span",{className:"dnum",children:[f,"/",Le.hp]})]}),q.jsx("span",{className:"dvs",children:"⚔"}),q.jsxs("div",{className:"dside",children:[q.jsxs("span",{className:"dface",style:{borderColor:Pe.color,color:Pe.color},children:[q.jsx(Kr,{name:Pe.img,className:"himg"}),Pe.sym]}),q.jsx("span",{className:"dname",style:{color:Pe.color},children:n.hero.name}),q.jsx("span",{className:"dhp",children:q.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/Pe.hp*100)+"%",background:"#7ee787"}})}),q.jsx("span",{className:"denergy",children:Array.from({length:Pe.en}).map((de,he)=>q.jsx("span",{className:"pip"+(he<D?" on":"")},he))})]})]}),q.jsx("div",{className:"flog",children:U}),!re&&q.jsxs("div",{className:"acts",children:[q.jsxs("button",{className:"btn gold",onClick:()=>G(X.id,"hit"),children:["⚔ Удар: ",Pe.weapon]}),q.jsx("button",{className:"btn rune",onClick:()=>G(X.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),q.jsx("button",{className:"btn shield",onClick:()=>G(X.id,"shield"),children:"🛡 Щит"})]}),re==="win"&&q.jsx("button",{className:"btn gold",onClick:()=>xt(X.id),children:"Забрать награду →"}),re==="lose"&&q.jsx("button",{className:"btn ghost",onClick:()=>se({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Pe&&n.hero&&q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("span",{className:"hface bigface",style:{borderColor:Pe.color,color:Pe.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:q.jsx(Kr,{name:Pe.img,className:"himg"})}),q.jsxs("div",{className:"qhead2",style:{color:Pe.color},children:[n.hero.name," • ",Pe.race]}),q.jsxs("div",{className:"stats",children:[q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["⚔ ",Pe.str]}),q.jsx("span",{children:"сила"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["✨ ",Pe.en]}),q.jsx("span",{children:"энергия"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["❤ ",Pe.hp]}),q.jsx("span",{children:"здоровье"})]})]}),q.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",q.jsx("b",{children:Pe.weapon})]}),q.jsxs("div",{className:"hrow",children:["🌀 ",Pe.ability,": ",Pe.abilityDesc]}),q.jsxs("div",{className:"hrow",children:["✨ Искр: ",q.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",q.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&q.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(X=>ah[X]).join(", ")]})]})}),t.t==="gift"&&(()=>{const X=n.gift===Wa(),de=(n.gift?Math.round((Date.parse(Wa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,he=X?n.streak:de;return q.jsxs("div",{className:"scroll",children:[q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🎁"}),q.jsx("div",{className:"qhead2",children:"Дар Древа"}),q.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),q.jsx("div",{className:"days",children:rh.map((tt,be)=>q.jsxs("span",{className:"day"+(be+1===he?" on":be+1<he&&X?" done":""),children:[q.jsx("b",{children:tt}),"день ",be+1]},be))}),X?q.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):q.jsxs("button",{className:"btn gold",onClick:vt,children:["Забрать дар +",rh[de-1]," ✨"]})]}),q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"⏳"}),q.jsx("div",{className:"qhead2",children:"Дозор героя"}),q.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),q.jsxs("button",{className:"btn gold",onClick:ke,children:["Завершить дозор · +",Re()," ✨"]})]})]})})(),t.t==="hall"&&q.jsx("div",{className:"scroll",children:q.jsxs("div",{className:"card center",children:[q.jsx("div",{className:"big",children:"🏛️"}),q.jsx("div",{className:"qhead2",children:"Чертог путника"}),q.jsxs("div",{className:"stats",children:[q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["✨ ",n.sparks]}),q.jsx("span",{children:"Искр"})]}),q.jsxs("div",{className:"stat",children:[q.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),q.jsx("span",{children:"артефакты"})]})]}),q.jsxs("div",{className:"rank",children:["🏆 Ранг: ",nA(n.sparks)]}),n.hero&&Pe&&q.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Pe.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&q.jsx("div",{className:"nav",children:tA.map(X=>q.jsxs("button",{className:"navbtn"+(at(X.id)?" on":""),onClick:()=>se(it(X.id)),children:[q.jsx("span",{className:"ic",children:X.ic}),X.t]},X.id))}),l&&q.jsx("div",{className:"toast",children:l})]})}Yx(document.getElementById("root")).render(q.jsx(cA,{}));
