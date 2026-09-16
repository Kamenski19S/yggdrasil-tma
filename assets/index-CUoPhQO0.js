(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var j1={exports:{}},vu={},q1={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),ly=Symbol.for("react.portal"),cy=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),dy=Symbol.for("react.profiler"),fy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),gy=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),C0=Symbol.iterator;function _y(t){return t===null||typeof t!="object"?null:(t=C0&&t[C0]||t["@@iterator"],typeof t=="function"?t:null)}var Y1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$1=Object.assign,K1={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=K1,this.updater=n||Y1}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z1(){}Z1.prototype=Ko.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=K1,this.updater=n||Y1}var mp=pp.prototype=new Z1;mp.constructor=pp;$1(mp,Ko.prototype);mp.isPureReactComponent=!0;var R0=Array.isArray,J1=Object.prototype.hasOwnProperty,gp={current:null},Q1={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J1.call(e,i)&&!Q1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:gl,type:t,key:s,ref:o,props:r,_owner:gp.current}}function xy(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function yy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var P0=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yy(""+t.key):e.toString(36)}function Ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case ly:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vd(o,0):i,R0(r)?(n="",t!=null&&(n=t.replace(P0,"$&/")+"/"),Ec(r,e,n,"",function(c){return c})):r!=null&&(vp(r)&&(r=xy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(P0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",R0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vd(s,a);o+=Ec(s,e,n,l,r)}else if(l=_y(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vd(s,a++),o+=Ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(t,e,n){if(t==null)return t;var i=[],r=0;return Ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function My(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var si={current:null},Tc={transition:null},Sy={ReactCurrentDispatcher:si,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:gp};function tv(){throw Error("act(...) is not supported in production builds of React.")}wt.Children={map:Nl,forEach:function(t,e,n){Nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};wt.Component=Ko;wt.Fragment=cy;wt.Profiler=dy;wt.PureComponent=pp;wt.StrictMode=uy;wt.Suspense=my;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;wt.act=tv;wt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)J1.call(e,l)&&!Q1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:gl,type:t.type,key:r,ref:s,props:i,_owner:o}};wt.createContext=function(t){return t={$$typeof:hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fy,_context:t},t.Consumer=t};wt.createElement=ev;wt.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(t){return{$$typeof:py,render:t}};wt.isValidElement=vp;wt.lazy=function(t){return{$$typeof:vy,_payload:{_status:-1,_result:t},_init:My}};wt.memo=function(t,e){return{$$typeof:gy,type:t,compare:e===void 0?null:e}};wt.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};wt.unstable_act=tv;wt.useCallback=function(t,e){return si.current.useCallback(t,e)};wt.useContext=function(t){return si.current.useContext(t)};wt.useDebugValue=function(){};wt.useDeferredValue=function(t){return si.current.useDeferredValue(t)};wt.useEffect=function(t,e){return si.current.useEffect(t,e)};wt.useId=function(){return si.current.useId()};wt.useImperativeHandle=function(t,e,n){return si.current.useImperativeHandle(t,e,n)};wt.useInsertionEffect=function(t,e){return si.current.useInsertionEffect(t,e)};wt.useLayoutEffect=function(t,e){return si.current.useLayoutEffect(t,e)};wt.useMemo=function(t,e){return si.current.useMemo(t,e)};wt.useReducer=function(t,e,n){return si.current.useReducer(t,e,n)};wt.useRef=function(t){return si.current.useRef(t)};wt.useState=function(t){return si.current.useState(t)};wt.useSyncExternalStore=function(t,e,n){return si.current.useSyncExternalStore(t,e,n)};wt.useTransition=function(){return si.current.useTransition()};wt.version="18.3.1";q1.exports=wt;var Tt=q1.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=Tt,Ey=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),Ay=Object.prototype.hasOwnProperty,by=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cy={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ay.call(e,i)&&!Cy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ey,type:t,key:s,ref:o,props:r,_owner:by.current}}vu.Fragment=Ty;vu.jsx=nv;vu.jsxs=nv;j1.exports=vu;var j=j1.exports,iv={exports:{}},Ti={},rv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,ne){var oe=k.length;k.push(ne);e:for(;0<oe;){var Ee=oe-1>>>1,ze=k[Ee];if(0<r(ze,ne))k[Ee]=ne,k[oe]=ze,oe=Ee;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var ne=k[0],oe=k.pop();if(oe!==ne){k[0]=oe;e:for(var Ee=0,ze=k.length,dt=ze>>>1;Ee<dt;){var Re=2*(Ee+1)-1,le=k[Re],V=Re+1,ge=k[V];if(0>r(le,oe))V<ze&&0>r(ge,le)?(k[Ee]=ge,k[V]=oe,Ee=V):(k[Ee]=le,k[Re]=oe,Ee=Re);else if(V<ze&&0>r(ge,oe))k[Ee]=ge,k[V]=oe,Ee=V;else break e}}return ne}function r(k,ne){var oe=k.sortIndex-ne.sortIndex;return oe!==0?oe:k.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,m=3,g=!1,M=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var ne=n(c);ne!==null;){if(ne.callback===null)i(c);else if(ne.startTime<=k)i(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function w(k){if(E=!1,y(k),!M)if(n(l)!==null)M=!0,G(R);else{var ne=n(c);ne!==null&&Z(w,ne.startTime-k)}}function R(k,ne){M=!1,E&&(E=!1,u(N),N=-1),g=!0;var oe=m;try{for(y(ne),p=n(l);p!==null&&(!(p.expirationTime>ne)||k&&!F());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,m=p.priorityLevel;var ze=Ee(p.expirationTime<=ne);ne=t.unstable_now(),typeof ze=="function"?p.callback=ze:p===n(l)&&i(l),y(ne)}else i(l);p=n(l)}if(p!==null)var dt=!0;else{var Re=n(c);Re!==null&&Z(w,Re.startTime-ne),dt=!1}return dt}finally{p=null,m=oe,g=!1}}var P=!1,I=null,N=-1,T=5,S=-1;function F(){return!(t.unstable_now()-S<T)}function W(){if(I!==null){var k=t.unstable_now();S=k;var ne=!0;try{ne=I(!0,k)}finally{ne?te():(P=!1,I=null)}}else P=!1}var te;if(typeof v=="function")te=function(){v(W)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=W,te=function(){ue.postMessage(null)}}else te=function(){_(W,0)};function G(k){I=k,P||(P=!0,te())}function Z(k,ne){N=_(function(){k(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){M||g||(M=!0,G(R))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var oe=m;m=ne;try{return k()}finally{m=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,ne){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var oe=m;m=k;try{return ne()}finally{m=oe}},t.unstable_scheduleCallback=function(k,ne,oe){var Ee=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ee+oe:Ee):oe=Ee,k){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=oe+ze,k={id:h++,callback:ne,priorityLevel:k,startTime:oe,expirationTime:ze,sortIndex:-1},oe>Ee?(k.sortIndex=oe,e(c,k),n(l)===null&&k===n(c)&&(E?(u(N),N=-1):E=!0,Z(w,oe-Ee))):(k.sortIndex=ze,e(l,k),M||g||(M=!0,G(R))),k},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(k){var ne=m;return function(){var oe=m;m=ne;try{return k.apply(this,arguments)}finally{m=oe}}}})(sv);rv.exports=sv;var Ry=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=Tt,Ei=Ry;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,Ya={};function Vs(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(Ya[t]=e,t=0;t<e.length;t++)ov.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,Iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I0={},L0={};function Ly(t){return Lf.call(L0,t)?!0:Lf.call(I0,t)?!1:Iy.test(t)?L0[t]=!0:(I0[t]=!0,!1)}function Dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ny(t,e,n,i){if(e===null||typeof e>"u"||Dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function oi(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vn[t]=new oi(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vn[e]=new oi(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vn[t]=new oi(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vn[t]=new oi(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vn[t]=new oi(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vn[t]=new oi(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vn[t]=new oi(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vn[t]=new oi(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vn[t]=new oi(t,5,!1,t.toLowerCase(),null,!1,!1)});var _p=/[\-:]([a-z])/g;function xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_p,xp);Vn[e]=new oi(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_p,xp);Vn[e]=new oi(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_p,xp);Vn[e]=new oi(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vn[t]=new oi(t,1,!1,t.toLowerCase(),null,!1,!1)});Vn.xlinkHref=new oi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vn[t]=new oi(t,1,!1,t.toLowerCase(),null,!0,!0)});function yp(t,e,n,i){var r=Vn.hasOwnProperty(e)?Vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ny(e,n,r,i)&&(n=null),i||r===null?Ly(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Rr=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),go=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Nf=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),wp=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),D0=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=D0&&t[D0]||t["@@iterator"],typeof t=="function"?t:null)}var cn=Object.assign,_d;function Ia(t){if(_d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+t}var xd=!1;function yd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function Uy(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case go:return"Portal";case Df:return"Profiler";case Mp:return"StrictMode";case Nf:return"Suspense";case Uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lv:return(t.displayName||"Context")+".Consumer";case av:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wp:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ky(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=ky(t))}function dv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=uv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kf(t,e){var n=e.checked;return cn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function N0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&yp(t,"checked",e,!1)}function Of(t,e){fv(t,e);var n=rs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function U0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||Vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function Ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return cn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function F0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(La(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function hv(t,e){var n=rs(e.value),i=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function k0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zy=cn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(zy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xf=null,Po=null,Io=null;function O0(t){if(t=xl(t)){if(typeof Xf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=Su(e),Xf(t.stateNode,t.type,e))}}function _v(t){Po?Io?Io.push(t):Io=[t]:Po=t}function xv(){if(Po){var t=Po,e=Io;if(Io=Po=null,O0(t),e)for(t=0;t<e.length;t++)O0(e[t])}}function yv(t,e){return t(e)}function Mv(){}var Md=!1;function Sv(t,e,n){if(Md)return t(e,n);Md=!0;try{return yv(t,e,n)}finally{Md=!1,(Po!==null||Io!==null)&&(Mv(),xv())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var jf=!1;if(Tr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){jf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{jf=!1}function By(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ka=!1,Gc=null,Wc=!1,qf=null,Hy={onError:function(t){ka=!0,Gc=t}};function Vy(t,e,n,i,r,s,o,a,l){ka=!1,Gc=null,By.apply(Hy,arguments)}function Gy(t,e,n,i,r,s,o,a,l){if(Vy.apply(this,arguments),ka){if(ka){var c=Gc;ka=!1,Gc=null}else throw Error(we(198));Wc||(Wc=!0,qf=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z0(t){if(Gs(t)!==t)throw Error(we(188))}function Wy(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return z0(r),t;if(s===i)return z0(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function Ev(t){return t=Wy(t),t!==null?Tv(t):null}function Tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tv(t);if(e!==null)return e;t=t.sibling}return null}var Av=Ei.unstable_scheduleCallback,B0=Ei.unstable_cancelCallback,Xy=Ei.unstable_shouldYield,jy=Ei.unstable_requestPaint,mn=Ei.unstable_now,qy=Ei.unstable_getCurrentPriorityLevel,Tp=Ei.unstable_ImmediatePriority,bv=Ei.unstable_UserBlockingPriority,Xc=Ei.unstable_NormalPriority,Yy=Ei.unstable_LowPriority,Cv=Ei.unstable_IdlePriority,_u=null,ar=null;function $y(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Ki=Math.clz32?Math.clz32:Jy,Ky=Math.log,Zy=Math.LN2;function Jy(t){return t>>>=0,t===0?32:31-(Ky(t)/Zy|0)|0}var Ol=64,zl=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Da(a):(s&=o,s!==0&&(i=Da(s)))}else o=n&~r,o!==0?i=Da(o):s!==0&&(i=Da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ki(e),r=1<<n,i|=t[n],e&=~r;return i}function Qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ki(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Qy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rv(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function Sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ki(e),t[e]=n}function t2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ki(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ki(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Bt=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iv,bp,Lv,Dv,Nv,$f=!1,Bl=[],Yr=null,$r=null,Kr=null,Za=new Map,Ja=new Map,Gr=[],n2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function H0(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(e.pointerId)}}function ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xl(e),e!==null&&bp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i2(t,e,n,i,r){switch(e){case"focusin":return Yr=ga(Yr,t,e,n,i,r),!0;case"dragenter":return $r=ga($r,t,e,n,i,r),!0;case"mouseover":return Kr=ga(Kr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Za.set(s,ga(Za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ja.set(s,ga(Ja.get(s)||null,t,e,n,i,r)),!0}return!1}function Uv(t){var e=Cs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=wv(n),e!==null){t.blockedOn=e,Nv(t.priority,function(){Lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wf=i,n.target.dispatchEvent(i),Wf=null}else return e=xl(n),e!==null&&bp(e),t.blockedOn=n,!1;e.shift()}return!0}function V0(t,e,n){Ac(t)&&n.delete(e)}function r2(){$f=!1,Yr!==null&&Ac(Yr)&&(Yr=null),$r!==null&&Ac($r)&&($r=null),Kr!==null&&Ac(Kr)&&(Kr=null),Za.forEach(V0),Ja.forEach(V0)}function va(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,r2)))}function Qa(t){function e(r){return va(r,t)}if(0<Bl.length){va(Bl[0],t);for(var n=1;n<Bl.length;n++){var i=Bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yr!==null&&va(Yr,t),$r!==null&&va($r,t),Kr!==null&&va(Kr,t),Za.forEach(e),Ja.forEach(e),n=0;n<Gr.length;n++)i=Gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)Uv(n),n.blockedOn===null&&Gr.shift()}var Lo=Rr.ReactCurrentBatchConfig,qc=!0;function s2(t,e,n,i){var r=Bt,s=Lo.transition;Lo.transition=null;try{Bt=1,Cp(t,e,n,i)}finally{Bt=r,Lo.transition=s}}function o2(t,e,n,i){var r=Bt,s=Lo.transition;Lo.transition=null;try{Bt=4,Cp(t,e,n,i)}finally{Bt=r,Lo.transition=s}}function Cp(t,e,n,i){if(qc){var r=Kf(t,e,n,i);if(r===null)Ld(t,e,i,Yc,n),H0(t,i);else if(i2(r,t,e,n,i))i.stopPropagation();else if(H0(t,i),e&4&&-1<n2.indexOf(t)){for(;r!==null;){var s=xl(r);if(s!==null&&Iv(s),s=Kf(t,e,n,i),s===null&&Ld(t,e,i,Yc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ld(t,e,i,null,n)}}var Yc=null;function Kf(t,e,n,i){if(Yc=null,t=Ep(i),t=Cs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yc=t,null}function Fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case Tp:return 1;case bv:return 4;case Xc:case Yy:return 16;case Cv:return 536870912;default:return 16}default:return 16}}var jr=null,Rp=null,bc=null;function kv(){if(bc)return bc;var t,e=Rp,n=e.length,i,r="value"in jr?jr.value:jr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bc=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function G0(){return!1}function Ai(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:G0,this.isPropagationStopped=G0,this}return cn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Ai(Zo),_l=cn({},Zo,{view:0,detail:0}),a2=Ai(_l),wd,Ed,_a,xu=cn({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(wd=t.screenX-_a.screenX,Ed=t.screenY-_a.screenY):Ed=wd=0,_a=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),W0=Ai(xu),l2=cn({},xu,{dataTransfer:0}),c2=Ai(l2),u2=cn({},_l,{relatedTarget:0}),Td=Ai(u2),d2=cn({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),f2=Ai(d2),h2=cn({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p2=Ai(h2),m2=cn({},Zo,{data:0}),X0=Ai(m2),g2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_2[t])?!!e[t]:!1}function Ip(){return x2}var y2=cn({},_l,{key:function(t){if(t.key){var e=g2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M2=Ai(y2),S2=cn({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=Ai(S2),w2=cn({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),E2=Ai(w2),T2=cn({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),A2=Ai(T2),b2=cn({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C2=Ai(b2),R2=[9,13,27,32],Lp=Tr&&"CompositionEvent"in window,Oa=null;Tr&&"documentMode"in document&&(Oa=document.documentMode);var P2=Tr&&"TextEvent"in window&&!Oa,Ov=Tr&&(!Lp||Oa&&8<Oa&&11>=Oa),q0=" ",Y0=!1;function zv(t,e){switch(t){case"keyup":return R2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _o=!1;function I2(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(Y0=!0,q0);case"textInput":return t=e.data,t===q0&&Y0?null:t;default:return null}}function L2(t,e){if(_o)return t==="compositionend"||!Lp&&zv(t,e)?(t=kv(),bc=Rp=jr=null,_o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ov&&e.locale!=="ko"?null:e.data;default:return null}}var D2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D2[t.type]:e==="textarea"}function Hv(t,e,n,i){_v(i),e=$c(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var za=null,el=null;function N2(t){Jv(t,0)}function yu(t){var e=Mo(t);if(dv(e))return t}function U2(t,e){if(t==="change")return e}var Vv=!1;if(Tr){var Ad;if(Tr){var bd="oninput"in document;if(!bd){var K0=document.createElement("div");K0.setAttribute("oninput","return;"),bd=typeof K0.oninput=="function"}Ad=bd}else Ad=!1;Vv=Ad&&(!document.documentMode||9<document.documentMode)}function Z0(){za&&(za.detachEvent("onpropertychange",Gv),el=za=null)}function Gv(t){if(t.propertyName==="value"&&yu(el)){var e=[];Hv(e,el,t,Ep(t)),Sv(N2,e)}}function F2(t,e,n){t==="focusin"?(Z0(),za=e,el=n,za.attachEvent("onpropertychange",Gv)):t==="focusout"&&Z0()}function k2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(el)}function O2(t,e){if(t==="click")return yu(e)}function z2(t,e){if(t==="input"||t==="change")return yu(e)}function B2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qi=typeof Object.is=="function"?Object.is:B2;function tl(t,e){if(Qi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lf.call(e,r)||!Qi(t[r],e[r]))return!1}return!0}function J0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Q0(t,e){var n=J0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=J0(n)}}function Wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var t=window,e=Vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vc(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H2(t){var e=Xv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wv(n.ownerDocument.documentElement,n)){if(i!==null&&Dp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Q0(n,s);var o=Q0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V2=Tr&&"documentMode"in document&&11>=document.documentMode,xo=null,Zf=null,Ba=null,Jf=!1;function eg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||xo==null||xo!==Vc(i)||(i=xo,"selectionStart"in i&&Dp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&tl(Ba,i)||(Ba=i,i=$c(Zf,"onSelect"),0<i.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xo)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Cd={},jv={};Tr&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Mu(t){if(Cd[t])return Cd[t];if(!yo[t])return t;var e=yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jv)return Cd[t]=e[n];return t}var qv=Mu("animationend"),Yv=Mu("animationiteration"),$v=Mu("animationstart"),Kv=Mu("transitionend"),Zv=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(t,e){Zv.set(t,e),Vs(e,[t])}for(var Rd=0;Rd<tg.length;Rd++){var Pd=tg[Rd],G2=Pd.toLowerCase(),W2=Pd[0].toUpperCase()+Pd.slice(1);ls(G2,"on"+W2)}ls(qv,"onAnimationEnd");ls(Yv,"onAnimationIteration");ls($v,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(Kv,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function ng(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gy(i,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}}}if(Wc)throw t=qf,Wc=!1,qf=null,t}function Jt(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var i=t+"__bubble";n.has(i)||(Qv(e,t,2,!1),n.add(i))}function Id(t,e,n){var i=0;e&&(i|=4),Qv(n,t,i,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function nl(t){if(!t[Gl]){t[Gl]=!0,ov.forEach(function(n){n!=="selectionchange"&&(X2.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,Id("selectionchange",!1,e))}}function Qv(t,e,n,i){switch(Fv(e)){case 1:var r=s2;break;case 4:r=o2;break;default:r=Cp}n=r.bind(null,e,n,t),r=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ld(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sv(function(){var c=s,h=Ep(n),p=[];e:{var m=Zv.get(t);if(m!==void 0){var g=Pp,M=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":g=M2;break;case"focusin":M="focus",g=Td;break;case"focusout":M="blur",g=Td;break;case"beforeblur":case"afterblur":g=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=W0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=c2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=E2;break;case qv:case Yv:case $v:g=f2;break;case Kv:g=A2;break;case"scroll":g=a2;break;case"wheel":g=C2;break;case"copy":case"cut":case"paste":g=p2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=j0}var E=(e&4)!==0,_=!E&&t==="scroll",u=E?m!==null?m+"Capture":null:m;E=[];for(var v=c,y;v!==null;){y=v;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,u!==null&&(w=Ka(v,u),w!=null&&E.push(il(v,w,y)))),_)break;v=v.return}0<E.length&&(m=new g(m,M,null,n,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Wf&&(M=n.relatedTarget||n.fromElement)&&(Cs(M)||M[Ar]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(M=n.relatedTarget||n.toElement,g=c,M=M?Cs(M):null,M!==null&&(_=Gs(M),M!==_||M.tag!==5&&M.tag!==6)&&(M=null)):(g=null,M=c),g!==M)){if(E=W0,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=j0,w="onPointerLeave",u="onPointerEnter",v="pointer"),_=g==null?m:Mo(g),y=M==null?m:Mo(M),m=new E(w,v+"leave",g,n,h),m.target=_,m.relatedTarget=y,w=null,Cs(h)===c&&(E=new E(u,v+"enter",M,n,h),E.target=y,E.relatedTarget=_,w=E),_=w,g&&M)t:{for(E=g,u=M,v=0,y=E;y;y=eo(y))v++;for(y=0,w=u;w;w=eo(w))y++;for(;0<v-y;)E=eo(E),v--;for(;0<y-v;)u=eo(u),y--;for(;v--;){if(E===u||u!==null&&E===u.alternate)break t;E=eo(E),u=eo(u)}E=null}else E=null;g!==null&&ig(p,m,g,E,!1),M!==null&&_!==null&&ig(p,_,M,E,!0)}}e:{if(m=c?Mo(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var R=U2;else if($0(m))if(Vv)R=z2;else{R=k2;var P=F2}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=O2);if(R&&(R=R(t,c))){Hv(p,R,n,h);break e}P&&P(t,m,c),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&zf(m,"number",m.value)}switch(P=c?Mo(c):window,t){case"focusin":($0(P)||P.contentEditable==="true")&&(xo=P,Zf=c,Ba=null);break;case"focusout":Ba=Zf=xo=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,eg(p,n,h);break;case"selectionchange":if(V2)break;case"keydown":case"keyup":eg(p,n,h)}var I;if(Lp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _o?zv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ov&&n.locale!=="ko"&&(_o||N!=="onCompositionStart"?N==="onCompositionEnd"&&_o&&(I=kv()):(jr=h,Rp="value"in jr?jr.value:jr.textContent,_o=!0)),P=$c(c,N),0<P.length&&(N=new X0(N,t,null,n,h),p.push({event:N,listeners:P}),I?N.data=I:(I=Bv(n),I!==null&&(N.data=I)))),(I=P2?I2(t,n):L2(t,n))&&(c=$c(c,"onBeforeInput"),0<c.length&&(h=new X0("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=I))}Jv(p,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ka(t,n),s!=null&&i.unshift(il(t,s,r)),s=Ka(t,e),s!=null&&i.push(il(t,s,r))),t=t.return}return i}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ka(n,s),l!=null&&o.unshift(il(n,l,a))):r||(l=Ka(n,s),l!=null&&o.push(il(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j2=/\r\n?/g,q2=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(j2,`
`).replace(q2,"")}function Wl(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(we(425))}function Kc(){}var Qf=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,Y2=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,$2=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(K2)}:nh;function K2(t){setTimeout(function(){throw t})}function Dd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qa(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),rr="__reactFiber$"+Jo,rl="__reactProps$"+Jo,Ar="__reactContainer$"+Jo,ih="__reactEvents$"+Jo,Z2="__reactListeners$"+Jo,J2="__reactHandles$"+Jo;function Cs(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[rr])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function xl(t){return t=t[rr]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function Su(t){return t[rl]||null}var rh=[],So=-1;function cs(t){return{current:t}}function Qt(t){0>So||(t.current=rh[So],rh[So]=null,So--)}function Zt(t,e){So++,rh[So]=t.current,t.current=e}var ss={},Kn=cs(ss),fi=cs(!1),Us=ss;function zo(t,e){var n=t.type.contextTypes;if(!n)return ss;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hi(t){return t=t.childContextTypes,t!=null}function Zc(){Qt(fi),Qt(Kn)}function ag(t,e,n){if(Kn.current!==ss)throw Error(we(168));Zt(Kn,e),Zt(fi,n)}function e_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,Fy(t)||"Unknown",r));return cn({},n,i)}function Jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ss,Us=Kn.current,Zt(Kn,t),Zt(fi,fi.current),!0}function lg(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=e_(t,e,Us),i.__reactInternalMemoizedMergedChildContext=t,Qt(fi),Qt(Kn),Zt(Kn,t)):Qt(fi),Zt(fi,n)}var xr=null,wu=!1,Nd=!1;function t_(t){xr===null?xr=[t]:xr.push(t)}function Q2(t){wu=!0,t_(t)}function us(){if(!Nd&&xr!==null){Nd=!0;var t=0,e=Bt;try{var n=xr;for(Bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xr=null,wu=!1}catch(r){throw xr!==null&&(xr=xr.slice(t+1)),Av(Tp,us),r}finally{Bt=e,Nd=!1}}return null}var wo=[],Eo=0,Qc=null,eu=0,Di=[],Ni=0,Fs=null,yr=1,Mr="";function Ss(t,e){wo[Eo++]=eu,wo[Eo++]=Qc,Qc=t,eu=e}function n_(t,e,n){Di[Ni++]=yr,Di[Ni++]=Mr,Di[Ni++]=Fs,Fs=t;var i=yr;t=Mr;var r=32-Ki(i)-1;i&=~(1<<r),n+=1;var s=32-Ki(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yr=1<<32-Ki(e)+r|n<<r|i,Mr=s+t}else yr=1<<s|n<<r|i,Mr=t}function Np(t){t.return!==null&&(Ss(t,1),n_(t,1,0))}function Up(t){for(;t===Qc;)Qc=wo[--Eo],wo[Eo]=null,eu=wo[--Eo],wo[Eo]=null;for(;t===Fs;)Fs=Di[--Ni],Di[Ni]=null,Mr=Di[--Ni],Di[Ni]=null,yr=Di[--Ni],Di[Ni]=null}var wi=null,Si=null,sn=!1,qi=null;function i_(t,e){var n=Ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Si=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fs!==null?{id:yr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Si=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(sn){var e=Si;if(e){var n=e;if(!cg(t,e)){if(sh(t))throw Error(we(418));e=Zr(n.nextSibling);var i=wi;e&&cg(t,e)?i_(i,n):(t.flags=t.flags&-4097|2,sn=!1,wi=t)}}else{if(sh(t))throw Error(we(418));t.flags=t.flags&-4097|2,sn=!1,wi=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function Xl(t){if(t!==wi)return!1;if(!sn)return ug(t),sn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=Si)){if(sh(t))throw r_(),Error(we(418));for(;e;)i_(t,e),e=Zr(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Si=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Si=null}}else Si=wi?Zr(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Si;t;)t=Zr(t.nextSibling)}function Bo(){Si=wi=null,sn=!1}function Fp(t){qi===null?qi=[t]:qi.push(t)}var eM=Rr.ReactCurrentBatchConfig;function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function s_(t){function e(u,v){if(t){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ts(u,v),u.index=0,u.sibling=null,u}function s(u,v,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,y,w){return v===null||v.tag!==6?(v=Hd(y,u.mode,w),v.return=u,v):(v=r(v,y),v.return=u,v)}function l(u,v,y,w){var R=y.type;return R===vo?h(u,v,y.props.children,w,y.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&dg(R)===v.type)?(w=r(v,y.props),w.ref=xa(u,v,y),w.return=u,w):(w=Uc(y.type,y.key,y.props,null,u.mode,w),w.ref=xa(u,v,y),w.return=u,w)}function c(u,v,y,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Vd(y,u.mode,w),v.return=u,v):(v=r(v,y.children||[]),v.return=u,v)}function h(u,v,y,w,R){return v===null||v.tag!==7?(v=Ns(y,u.mode,w,R),v.return=u,v):(v=r(v,y),v.return=u,v)}function p(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hd(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ul:return y=Uc(v.type,v.key,v.props,null,u.mode,y),y.ref=xa(u,null,v),y.return=u,y;case go:return v=Vd(v,u.mode,y),v.return=u,v;case Hr:var w=v._init;return p(u,w(v._payload),y)}if(La(v)||pa(v))return v=Ns(v,u.mode,y,null),v.return=u,v;jl(u,v)}return null}function m(u,v,y,w){var R=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:a(u,v,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return y.key===R?l(u,v,y,w):null;case go:return y.key===R?c(u,v,y,w):null;case Hr:return R=y._init,m(u,v,R(y._payload),w)}if(La(y)||pa(y))return R!==null?null:h(u,v,y,w,null);jl(u,y)}return null}function g(u,v,y,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(y)||null,a(v,u,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ul:return u=u.get(w.key===null?y:w.key)||null,l(v,u,w,R);case go:return u=u.get(w.key===null?y:w.key)||null,c(v,u,w,R);case Hr:var P=w._init;return g(u,v,y,P(w._payload),R)}if(La(w)||pa(w))return u=u.get(y)||null,h(v,u,w,R,null);jl(v,w)}return null}function M(u,v,y,w){for(var R=null,P=null,I=v,N=v=0,T=null;I!==null&&N<y.length;N++){I.index>N?(T=I,I=null):T=I.sibling;var S=m(u,I,y[N],w);if(S===null){I===null&&(I=T);break}t&&I&&S.alternate===null&&e(u,I),v=s(S,v,N),P===null?R=S:P.sibling=S,P=S,I=T}if(N===y.length)return n(u,I),sn&&Ss(u,N),R;if(I===null){for(;N<y.length;N++)I=p(u,y[N],w),I!==null&&(v=s(I,v,N),P===null?R=I:P.sibling=I,P=I);return sn&&Ss(u,N),R}for(I=i(u,I);N<y.length;N++)T=g(I,u,N,y[N],w),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?N:T.key),v=s(T,v,N),P===null?R=T:P.sibling=T,P=T);return t&&I.forEach(function(F){return e(u,F)}),sn&&Ss(u,N),R}function E(u,v,y,w){var R=pa(y);if(typeof R!="function")throw Error(we(150));if(y=R.call(y),y==null)throw Error(we(151));for(var P=R=null,I=v,N=v=0,T=null,S=y.next();I!==null&&!S.done;N++,S=y.next()){I.index>N?(T=I,I=null):T=I.sibling;var F=m(u,I,S.value,w);if(F===null){I===null&&(I=T);break}t&&I&&F.alternate===null&&e(u,I),v=s(F,v,N),P===null?R=F:P.sibling=F,P=F,I=T}if(S.done)return n(u,I),sn&&Ss(u,N),R;if(I===null){for(;!S.done;N++,S=y.next())S=p(u,S.value,w),S!==null&&(v=s(S,v,N),P===null?R=S:P.sibling=S,P=S);return sn&&Ss(u,N),R}for(I=i(u,I);!S.done;N++,S=y.next())S=g(I,u,N,S.value,w),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?N:S.key),v=s(S,v,N),P===null?R=S:P.sibling=S,P=S);return t&&I.forEach(function(W){return e(u,W)}),sn&&Ss(u,N),R}function _(u,v,y,w){if(typeof y=="object"&&y!==null&&y.type===vo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:e:{for(var R=y.key,P=v;P!==null;){if(P.key===R){if(R=y.type,R===vo){if(P.tag===7){n(u,P.sibling),v=r(P,y.props.children),v.return=u,u=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&dg(R)===P.type){n(u,P.sibling),v=r(P,y.props),v.ref=xa(u,P,y),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}y.type===vo?(v=Ns(y.props.children,u.mode,w,y.key),v.return=u,u=v):(w=Uc(y.type,y.key,y.props,null,u.mode,w),w.ref=xa(u,v,y),w.return=u,u=w)}return o(u);case go:e:{for(P=y.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),v=r(v,y.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Vd(y,u.mode,w),v.return=u,u=v}return o(u);case Hr:return P=y._init,_(u,v,P(y._payload),w)}if(La(y))return M(u,v,y,w);if(pa(y))return E(u,v,y,w);jl(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,y),v.return=u,u=v):(n(u,v),v=Hd(y,u.mode,w),v.return=u,u=v),o(u)):n(u,v)}return _}var Ho=s_(!0),o_=s_(!1),tu=cs(null),nu=null,To=null,kp=null;function Op(){kp=To=nu=null}function zp(t){var e=tu.current;Qt(tu),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Do(t,e){nu=t,kp=To=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(di=!0),t.firstContext=null)}function ki(t){var e=t._currentValue;if(kp!==t)if(t={context:t,memoizedValue:e,next:null},To===null){if(nu===null)throw Error(we(308));To=t,nu.dependencies={lanes:0,firstContext:t}}else To=To.next=t;return e}var Rs=null;function Bp(t){Rs===null?Rs=[t]:Rs.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bp(e)):(n.next=r.next,r.next=n),e.interleaved=n,br(t,i)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function Hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,br(t,n)}return r=i.interleaved,r===null?(e.next=e,Bp(i)):(e.next=r.next,r.next=e),i.interleaved=e,br(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ap(t,n)}}function fg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,i){var r=t.updateQueue;Vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=t,E=a;switch(m=e,g=n,E.tag){case 1:if(M=E.payload,typeof M=="function"){p=M.call(g,p,m);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=E.payload,m=typeof M=="function"?M.call(g,p,m):M,m==null)break e;p=cn({},p,m);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Os|=o,t.lanes=o,t.memoizedState=p}}function hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var yl={},lr=cs(yl),sl=cs(yl),ol=cs(yl);function Ps(t){if(t===yl)throw Error(we(174));return t}function Vp(t,e){switch(Zt(ol,e),Zt(sl,t),Zt(lr,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}Qt(lr),Zt(lr,e)}function Vo(){Qt(lr),Qt(sl),Qt(ol)}function c_(t){Ps(ol.current);var e=Ps(lr.current),n=Hf(e,t.type);e!==n&&(Zt(sl,t),Zt(lr,n))}function Gp(t){sl.current===t&&(Qt(lr),Qt(sl))}var an=cs(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function Wp(){for(var t=0;t<Ud.length;t++)Ud[t]._workInProgressVersionPrimary=null;Ud.length=0}var Pc=Rr.ReactCurrentDispatcher,Fd=Rr.ReactCurrentBatchConfig,ks=0,ln=null,En=null,Nn=null,su=!1,Ha=!1,al=0,tM=0;function Wn(){throw Error(we(321))}function Xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qi(t[n],e[n]))return!1;return!0}function jp(t,e,n,i,r,s){if(ks=s,ln=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?sM:oM,t=n(i,r),Ha){s=0;do{if(Ha=!1,al=0,25<=s)throw Error(we(301));s+=1,Nn=En=null,e.updateQueue=null,Pc.current=aM,t=n(i,r)}while(Ha)}if(Pc.current=ou,e=En!==null&&En.next!==null,ks=0,Nn=En=ln=null,su=!1,e)throw Error(we(300));return t}function qp(){var t=al!==0;return al=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?ln.memoizedState=Nn=t:Nn=Nn.next=t,Nn}function Oi(){if(En===null){var t=ln.alternate;t=t!==null?t.memoizedState:null}else t=En.next;var e=Nn===null?ln.memoizedState:Nn.next;if(e!==null)Nn=e,En=t;else{if(t===null)throw Error(we(310));En=t,t={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Nn===null?ln.memoizedState=Nn=t:Nn=Nn.next=t}return Nn}function ll(t,e){return typeof e=="function"?e(t):e}function kd(t){var e=Oi(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=En,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ks&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,ln.lanes|=h,Os|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qi(i,e.memoizedState)||(di=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ln.lanes|=s,Os|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=Oi(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qi(s,e.memoizedState)||(di=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function u_(){}function d_(t,e){var n=ln,i=Oi(),r=e(),s=!Qi(i.memoizedState,r);if(s&&(i.memoizedState=r,di=!0),i=i.queue,Yp(p_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nn!==null&&Nn.memoizedState.tag&1){if(n.flags|=2048,cl(9,h_.bind(null,n,i,r,e),void 0,null),Un===null)throw Error(we(349));ks&30||f_(n,e,r)}return r}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ln.updateQueue,e===null?(e={lastEffect:null,stores:null},ln.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h_(t,e,n,i){e.value=n,e.getSnapshot=i,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qi(t,n)}catch{return!0}}function g_(t){var e=br(t,1);e!==null&&Zi(e,t,1,-1)}function pg(t){var e=nr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},e.queue=t,t=t.dispatch=rM.bind(null,ln,t),[e.memoizedState,t]}function cl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ln.updateQueue,e===null?(e={lastEffect:null,stores:null},ln.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v_(){return Oi().memoizedState}function Ic(t,e,n,i){var r=nr();ln.flags|=t,r.memoizedState=cl(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=Oi();i=i===void 0?null:i;var s=void 0;if(En!==null){var o=En.memoizedState;if(s=o.destroy,i!==null&&Xp(i,o.deps)){r.memoizedState=cl(e,n,s,i);return}}ln.flags|=t,r.memoizedState=cl(1|e,n,s,i)}function mg(t,e){return Ic(8390656,8,t,e)}function Yp(t,e){return Eu(2048,8,t,e)}function __(t,e){return Eu(4,2,t,e)}function x_(t,e){return Eu(4,4,t,e)}function y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M_(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,y_.bind(null,e,t),n)}function $p(){}function S_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return ks&21?(Qi(n,e)||(n=Rv(),ln.lanes|=n,Os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,di=!0),t.memoizedState=n)}function nM(t,e){var n=Bt;Bt=n!==0&&4>n?n:4,t(!0);var i=Fd.transition;Fd.transition={};try{t(!1),e()}finally{Bt=n,Fd.transition=i}}function T_(){return Oi().memoizedState}function iM(t,e,n){var i=es(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))b_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=ii();Zi(n,t,i,r),C_(n,e,i)}}function rM(t,e,n){var i=es(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))b_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qi(a,o)){var l=e.interleaved;l===null?(r.next=r,Bp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=ii(),Zi(n,t,i,r),C_(n,e,i))}}function A_(t){var e=t.alternate;return t===ln||e!==null&&e===ln}function b_(t,e){Ha=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ap(t,n)}}var ou={readContext:ki,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},sM={readContext:ki,useCallback:function(t,e){return nr().memoizedState=[t,e===void 0?null:e],t},useContext:ki,useEffect:mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=nr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=nr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=iM.bind(null,ln,t),[i.memoizedState,t]},useRef:function(t){var e=nr();return t={current:t},e.memoizedState=t},useState:pg,useDebugValue:$p,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=pg(!1),e=t[0];return t=nM.bind(null,t[1]),nr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ln,r=nr();if(sn){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Un===null)throw Error(we(349));ks&30||f_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mg(p_.bind(null,i,s,t),[t]),i.flags|=2048,cl(9,h_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=nr(),e=Un.identifierPrefix;if(sn){var n=Mr,i=yr;n=(i&~(1<<32-Ki(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oM={readContext:ki,useCallback:S_,useContext:ki,useEffect:Yp,useImperativeHandle:M_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:kd,useRef:v_,useState:function(){return kd(ll)},useDebugValue:$p,useDeferredValue:function(t){var e=Oi();return E_(e,En.memoizedState,t)},useTransition:function(){var t=kd(ll)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1},aM={readContext:ki,useCallback:S_,useContext:ki,useEffect:Yp,useImperativeHandle:M_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:Od,useRef:v_,useState:function(){return Od(ll)},useDebugValue:$p,useDeferredValue:function(t){var e=Oi();return En===null?e.memoizedState=t:E_(e,En.memoizedState,t)},useTransition:function(){var t=Od(ll)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1};function Xi(t,e){if(t&&t.defaultProps){e=cn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:cn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ii(),r=es(t),s=wr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,r),e!==null&&(Zi(e,t,r,i),Rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ii(),r=es(t),s=wr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,r),e!==null&&(Zi(e,t,r,i),Rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ii(),i=es(t),r=wr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Jr(t,r,i),e!==null&&(Zi(e,t,i,n),Rc(e,t,i))}};function gg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!tl(n,i)||!tl(r,s):!0}function R_(t,e,n){var i=!1,r=ss,s=e.contextType;return typeof s=="object"&&s!==null?s=ki(s):(r=hi(e)?Us:Kn.current,i=e.contextTypes,s=(i=i!=null)?zo(t,r):ss),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ki(s):(s=hi(e)?Us:Kn.current,r.context=zo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),iu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",i=e;do n+=Uy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lM=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lu||(lu=!0,yh=i),uh(t,e)},n}function I_(t,e,n){n=wr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uh(t,e),typeof i!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=SM.bind(null,t,e,n),e.then(t,t))}function xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var cM=Rr.ReactCurrentOwner,di=!1;function ni(t,e,n,i){e.child=t===null?o_(e,null,n,i):Ho(e,t.child,n,i)}function Mg(t,e,n,i,r){n=n.render;var s=e.ref;return Do(e,r),i=jp(t,e,n,i,s,r),n=qp(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(sn&&n&&Np(e),e.flags|=1,ni(t,e,i,r),e.child)}function Sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,i,r)):(t=Uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(o,i)&&t.ref===e.ref)return Cr(t,e,r)}return e.flags|=1,t=ts(s,i),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(tl(s,i)&&t.ref===e.ref)if(di=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(di=!0);else return e.lanes=t.lanes,Cr(t,e,r)}return dh(t,e,n,i,r)}function D_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(bo,yi),yi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Zt(bo,yi),yi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Zt(bo,yi),yi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Zt(bo,yi),yi|=i;return ni(t,e,r,n),e.child}function N_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,i,r){var s=hi(n)?Us:Kn.current;return s=zo(e,s),Do(e,r),n=jp(t,e,n,i,s,r),i=qp(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(sn&&i&&Np(e),e.flags|=1,ni(t,e,n,r),e.child)}function wg(t,e,n,i,r){if(hi(n)){var s=!0;Jc(e)}else s=!1;if(Do(e,r),e.stateNode===null)Lc(t,e),R_(e,n,i),ch(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ki(c):(c=hi(n)?Us:Kn.current,c=zo(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vg(e,o,i,c),Vr=!1;var m=e.memoizedState;o.state=m,iu(e,i,o,r),l=e.memoizedState,a!==i||m!==l||fi.current||Vr?(typeof h=="function"&&(lh(e,n,h,i),l=e.memoizedState),(a=Vr||gg(e,n,a,i,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xi(e.type,a),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ki(l):(l=hi(n)?Us:Kn.current,l=zo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&vg(e,o,i,l),Vr=!1,m=e.memoizedState,o.state=m,iu(e,i,o,r);var M=e.memoizedState;a!==p||m!==M||fi.current||Vr?(typeof g=="function"&&(lh(e,n,g,i),M=e.memoizedState),(c=Vr||gg(e,n,c,i,m,M,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,M,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,M,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),o.props=i,o.state=M,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return fh(t,e,n,i,s,r)}function fh(t,e,n,i,r,s){N_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lg(e,n,!1),Cr(t,e,s);i=e.stateNode,cM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ho(e,t.child,null,s),e.child=Ho(e,null,a,s)):ni(t,e,a,s),e.memoizedState=i.state,r&&lg(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),Vp(t,e.containerInfo)}function Eg(t,e,n,i,r){return Bo(),Fp(r),e.flags|=256,ni(t,e,n,i),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function F_(t,e,n){var i=e.pendingProps,r=an.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Zt(an,r&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),t=Ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=hh,t):Kp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return uM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ts(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ts(a,s):(s=Ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,i}return s=t.child,t=s.sibling,i=ts(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kp(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,i){return i!==null&&Fp(i),Ho(e,t.child,null,n),t=Kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zd(Error(we(422))),ql(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=Ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ho(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=hh,s);if(!(e.mode&1))return ql(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=zd(s,i,void 0),ql(t,e,o,i)}if(a=(o&t.childLanes)!==0,di||a){if(i=Un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,br(t,r),Zi(i,t,r,-1))}return nm(),i=zd(Error(we(421))),ql(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Si=Zr(r.nextSibling),wi=e,sn=!0,qi=null,t!==null&&(Di[Ni++]=yr,Di[Ni++]=Mr,Di[Ni++]=Fs,yr=t.id,Mr=t.overflow,Fs=e),e=Kp(e,i.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ah(t.return,e,n)}function Bd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function k_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ni(t,e,i.children,n),i=an.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Zt(an,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ru(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=ts(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ts(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dM(t,e,n){switch(e.tag){case 3:U_(e),Bo();break;case 5:c_(e);break;case 1:hi(e.type)&&Jc(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Zt(tu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Zt(an,an.current&1),e.flags|=128,null):n&e.child.childLanes?F_(t,e,n):(Zt(an,an.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Zt(an,an.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return k_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Zt(an,an.current),i)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return Cr(t,e,n)}var O_,mh,z_,B_;O_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ps(lr.current);var s=null;switch(n){case"input":r=kf(t,r),i=kf(t,i),s=[];break;case"select":r=cn({},r,{value:void 0}),i=cn({},i,{value:void 0}),s=[];break;case"textarea":r=Bf(t,r),i=Bf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Kc)}Vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Jt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!sn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function fM(t,e,n){var i=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(e),null;case 1:return hi(e.type)&&Zc(),Xn(e),null;case 3:return i=e.stateNode,Vo(),Qt(fi),Qt(Kn),Wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qi!==null&&(wh(qi),qi=null))),mh(t,e),Xn(e),null;case 5:Gp(e);var r=Ps(ol.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Xn(e),null}if(t=Ps(lr.current),Xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[rr]=e,i[rl]=s,t=(e.mode&1)!==0,n){case"dialog":Jt("cancel",i),Jt("close",i);break;case"iframe":case"object":case"embed":Jt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)Jt(Na[r],i);break;case"source":Jt("error",i);break;case"img":case"image":case"link":Jt("error",i),Jt("load",i);break;case"details":Jt("toggle",i);break;case"input":N0(i,s),Jt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Jt("invalid",i);break;case"textarea":F0(i,s),Jt("invalid",i)}Vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Jt("scroll",i)}switch(n){case"input":Fl(i),U0(i,s,!0);break;case"textarea":Fl(i),k0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[rr]=e,t[rl]=i,O_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,i),n){case"dialog":Jt("cancel",t),Jt("close",t),r=i;break;case"iframe":case"object":case"embed":Jt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)Jt(Na[r],t);r=i;break;case"source":Jt("error",t),r=i;break;case"img":case"image":case"link":Jt("error",t),Jt("load",t),r=i;break;case"details":Jt("toggle",t),r=i;break;case"input":N0(t,i),r=kf(t,i),Jt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=cn({},i,{value:void 0}),Jt("invalid",t);break;case"textarea":F0(t,i),r=Bf(t,i),Jt("invalid",t);break;default:r=i}Vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Jt("scroll",t):l!=null&&yp(t,s,l,o))}switch(n){case"input":Fl(t),U0(t,i,!1);break;case"textarea":Fl(t),k0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xn(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=Ps(ol.current),Ps(lr.current),Xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[rr]=e,(s=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[rr]=e,e.stateNode=i}return Xn(e),null;case 13:if(Qt(an),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(sn&&Si!==null&&e.mode&1&&!(e.flags&128))r_(),Bo(),e.flags|=98560,s=!1;else if(s=Xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[rr]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xn(e),s=!1}else qi!==null&&(wh(qi),qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||an.current&1?Tn===0&&(Tn=3):nm())),e.updateQueue!==null&&(e.flags|=4),Xn(e),null);case 4:return Vo(),mh(t,e),t===null&&nl(e.stateNode.containerInfo),Xn(e),null;case 10:return zp(e.type._context),Xn(e),null;case 17:return hi(e.type)&&Zc(),Xn(e),null;case 19:if(Qt(an),s=e.memoizedState,s===null)return Xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ya(s,!1);else{if(Tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,ya(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Zt(an,an.current&1|2),e.child}t=t.sibling}s.tail!==null&&mn()>Wo&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=ru(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!sn)return Xn(e),null}else 2*mn()-s.renderingStartTime>Wo&&n!==1073741824&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mn(),e.sibling=null,n=an.current,Zt(an,i?n&1|2:n&1),e):(Xn(e),null);case 22:case 23:return tm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Xn(e),e.subtreeFlags&6&&(e.flags|=8192)):Xn(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function hM(t,e){switch(Up(e),e.tag){case 1:return hi(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),Qt(fi),Qt(Kn),Wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gp(e),null;case 13:if(Qt(an),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qt(an),null;case 4:return Vo(),null;case 10:return zp(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var Yl=!1,$n=!1,pM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){fn(t,e,i)}else n.current=null}function gh(t,e,n){try{n()}catch(i){fn(t,e,i)}}var Ag=!1;function mM(t,e){if(Qf=qc,t=Xv(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},qc=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var E=M.memoizedProps,_=M.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Xi(e.type,E),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(w){fn(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return M=Ag,Ag=!1,M}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gh(e,n,s)}r=r.next}while(r!==i)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[rl],delete e[ih],delete e[Z2],delete e[J2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kc));else if(i!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var zn=null,ji=!1;function Dr(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:$n||Ao(n,e);case 6:var i=zn,r=ji;zn=null,Dr(t,e,n),zn=i,ji=r,zn!==null&&(ji?(t=zn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zn.removeChild(n.stateNode));break;case 18:zn!==null&&(ji?(t=zn,n=n.stateNode,t.nodeType===8?Dd(t.parentNode,n):t.nodeType===1&&Dd(t,n),Qa(t)):Dd(zn,n.stateNode));break;case 4:i=zn,r=ji,zn=n.stateNode.containerInfo,ji=!0,Dr(t,e,n),zn=i,ji=r;break;case 0:case 11:case 14:case 15:if(!$n&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),r=r.next}while(r!==i)}Dr(t,e,n);break;case 1:if(!$n&&(Ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){fn(n,e,a)}Dr(t,e,n);break;case 21:Dr(t,e,n);break;case 22:n.mode&1?($n=(i=$n)||n.memoizedState!==null,Dr(t,e,n),$n=i):Dr(t,e,n);break;default:Dr(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pM),e.forEach(function(i){var r=EM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zn=a.stateNode,ji=!1;break e;case 3:zn=a.stateNode.containerInfo,ji=!0;break e;case 4:zn=a.stateNode.containerInfo,ji=!0;break e}a=a.return}if(zn===null)throw Error(we(160));G_(s,o,r),zn=null,ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){fn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W_(e,t),e=e.sibling}function W_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hi(e,t),tr(t),i&4){try{Va(3,t,t.return),Au(3,t)}catch(E){fn(t,t.return,E)}try{Va(5,t,t.return)}catch(E){fn(t,t.return,E)}}break;case 1:Hi(e,t),tr(t),i&512&&n!==null&&Ao(n,n.return);break;case 5:if(Hi(e,t),tr(t),i&512&&n!==null&&Ao(n,n.return),t.flags&32){var r=t.stateNode;try{$a(r,"")}catch(E){fn(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fv(r,s),Gf(a,o);var c=Gf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?vv(r,p):h==="dangerouslySetInnerHTML"?mv(r,p):h==="children"?$a(r,p):yp(r,h,p,c)}switch(a){case"input":Of(r,s);break;case"textarea":hv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ro(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ro(r,!!s.multiple,s.defaultValue,!0):Ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[rl]=s}catch(E){fn(t,t.return,E)}}break;case 6:if(Hi(e,t),tr(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){fn(t,t.return,E)}}break;case 3:if(Hi(e,t),tr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(E){fn(t,t.return,E)}break;case 4:Hi(e,t),tr(t);break;case 13:Hi(e,t),tr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qp=mn())),i&4&&Cg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($n=(c=$n)||h,Hi(e,t),$n=c):Hi(e,t),tr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ge=t,h=t.child;h!==null;){for(p=Ge=h;Ge!==null;){switch(m=Ge,g=m.child,m.tag){case 0:case 11:case 14:case 15:Va(4,m,m.return);break;case 1:Ao(m,m.return);var M=m.stateNode;if(typeof M.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(E){fn(i,n,E)}}break;case 5:Ao(m,m.return);break;case 22:if(m.memoizedState!==null){Pg(p);continue}}g!==null?(g.return=m,Ge=g):Pg(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gv("display",o))}catch(E){fn(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){fn(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Hi(e,t),tr(t),i&4&&Cg(t);break;case 21:break;default:Hi(e,t),tr(t)}}function tr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($a(r,""),i.flags&=-33);var s=bg(t);xh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bg(t);_h(t,a,o);break;default:throw Error(we(161))}}catch(l){fn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gM(t,e,n){Ge=t,X_(t)}function X_(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$n;a=Yl;var c=$n;if(Yl=o,($n=l)&&!c)for(Ge=r;Ge!==null;)o=Ge,l=o.child,o.tag===22&&o.memoizedState!==null?Ig(r):l!==null?(l.return=o,Ge=l):Ig(r);for(;s!==null;)Ge=s,X_(s),s=s.sibling;Ge=r,Yl=a,$n=c}Rg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):Rg(t)}}function Rg(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$n||Au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$n)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Qa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}$n||e.flags&512&&vh(e)}catch(m){fn(e,e.return,m)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Pg(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Ig(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(l){fn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){fn(e,r,l)}}var s=e.return;try{vh(e)}catch(l){fn(e,s,l)}break;case 5:var o=e.return;try{vh(e)}catch(l){fn(e,o,l)}}}catch(l){fn(e,e.return,l)}if(e===t){Ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ge=a;break}Ge=e.return}}var vM=Math.ceil,au=Rr.ReactCurrentDispatcher,Zp=Rr.ReactCurrentOwner,Fi=Rr.ReactCurrentBatchConfig,Rt=0,Un=null,xn=null,Hn=0,yi=0,bo=cs(0),Tn=0,ul=null,Os=0,bu=0,Jp=0,Ga=null,ui=null,Qp=0,Wo=1/0,_r=null,lu=!1,yh=null,Qr=null,$l=!1,qr=null,cu=0,Wa=0,Mh=null,Dc=-1,Nc=0;function ii(){return Rt&6?mn():Dc!==-1?Dc:Dc=mn()}function es(t){return t.mode&1?Rt&2&&Hn!==0?Hn&-Hn:eM.transition!==null?(Nc===0&&(Nc=Rv()),Nc):(t=Bt,t!==0||(t=window.event,t=t===void 0?16:Fv(t.type)),t):1}function Zi(t,e,n,i){if(50<Wa)throw Wa=0,Mh=null,Error(we(185));vl(t,n,i),(!(Rt&2)||t!==Un)&&(t===Un&&(!(Rt&2)&&(bu|=n),Tn===4&&Wr(t,Hn)),pi(t,i),n===1&&Rt===0&&!(e.mode&1)&&(Wo=mn()+500,wu&&us()))}function pi(t,e){var n=t.callbackNode;e2(t,e);var i=jc(t,t===Un?Hn:0);if(i===0)n!==null&&B0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&B0(n),e===1)t.tag===0?Q2(Lg.bind(null,t)):t_(Lg.bind(null,t)),$2(function(){!(Rt&6)&&us()}),n=null;else{switch(Pv(i)){case 1:n=Tp;break;case 4:n=bv;break;case 16:n=Xc;break;case 536870912:n=Cv;break;default:n=Xc}n=Q_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(Dc=-1,Nc=0,Rt&6)throw Error(we(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var i=jc(t,t===Un?Hn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uu(t,i);else{e=i;var r=Rt;Rt|=2;var s=Y_();(Un!==t||Hn!==e)&&(_r=null,Wo=mn()+500,Ds(t,e));do try{yM();break}catch(a){q_(t,a)}while(!0);Op(),au.current=s,Rt=r,xn!==null?e=0:(Un=null,Hn=0,e=Tn)}if(e!==0){if(e===2&&(r=Yf(t),r!==0&&(i=r,e=Sh(t,r))),e===1)throw n=ul,Ds(t,0),Wr(t,i),pi(t,mn()),n;if(e===6)Wr(t,i);else{if(r=t.current.alternate,!(i&30)&&!_M(r)&&(e=uu(t,i),e===2&&(s=Yf(t),s!==0&&(i=s,e=Sh(t,s))),e===1))throw n=ul,Ds(t,0),Wr(t,i),pi(t,mn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:ws(t,ui,_r);break;case 3:if(Wr(t,i),(i&130023424)===i&&(e=Qp+500-mn(),10<e)){if(jc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ii(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nh(ws.bind(null,t,ui,_r),e);break}ws(t,ui,_r);break;case 4:if(Wr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ki(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vM(i/1960))-i,10<i){t.timeoutHandle=nh(ws.bind(null,t,ui,_r),i);break}ws(t,ui,_r);break;case 5:ws(t,ui,_r);break;default:throw Error(we(329))}}}return pi(t,mn()),t.callbackNode===n?j_.bind(null,t):null}function Sh(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(Ds(t,e).flags|=256),t=uu(t,e),t!==2&&(e=ui,ui=n,e!==null&&wh(e)),t}function wh(t){ui===null?ui=t:ui.push.apply(ui,t)}function _M(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~Jp,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ki(e),i=1<<n;t[n]=-1,e&=~i}}function Lg(t){if(Rt&6)throw Error(we(327));No();var e=jc(t,0);if(!(e&1))return pi(t,mn()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var i=Yf(t);i!==0&&(e=i,n=Sh(t,i))}if(n===1)throw n=ul,Ds(t,0),Wr(t,e),pi(t,mn()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ws(t,ui,_r),pi(t,mn()),null}function em(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(Wo=mn()+500,wu&&us())}}function zs(t){qr!==null&&qr.tag===0&&!(Rt&6)&&No();var e=Rt;Rt|=1;var n=Fi.transition,i=Bt;try{if(Fi.transition=null,Bt=1,t)return t()}finally{Bt=i,Fi.transition=n,Rt=e,!(Rt&6)&&us()}}function tm(){yi=bo.current,Qt(bo)}function Ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y2(n)),xn!==null)for(n=xn.return;n!==null;){var i=n;switch(Up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zc();break;case 3:Vo(),Qt(fi),Qt(Kn),Wp();break;case 5:Gp(i);break;case 4:Vo();break;case 13:Qt(an);break;case 19:Qt(an);break;case 10:zp(i.type._context);break;case 22:case 23:tm()}n=n.return}if(Un=t,xn=t=ts(t.current,null),Hn=yi=e,Tn=0,ul=null,Jp=bu=Os=0,ui=Ga=null,Rs!==null){for(e=0;e<Rs.length;e++)if(n=Rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rs=null}return t}function q_(t,e){do{var n=xn;try{if(Op(),Pc.current=ou,su){for(var i=ln.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}su=!1}if(ks=0,Nn=En=ln=null,Ha=!1,al=0,Zp.current=null,n===null||n.return===null){Tn=1,ul=e,xn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Hn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=xg(o);if(g!==null){g.flags&=-257,yg(g,o,a,s,e),g.mode&1&&_g(s,c,e),e=g,l=c;var M=e.updateQueue;if(M===null){var E=new Set;E.add(l),e.updateQueue=E}else M.add(l);break e}else{if(!(e&1)){_g(s,c,e),nm();break e}l=Error(we(426))}}else if(sn&&a.mode&1){var _=xg(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),yg(_,o,a,s,e),Fp(Go(l,a));break e}}s=l=Go(l,a),Tn!==4&&(Tn=2),Ga===null?Ga=[s]:Ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=P_(s,l,e);fg(s,u);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Qr===null||!Qr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=I_(s,a,e);fg(s,w);break e}}s=s.return}while(s!==null)}K_(n)}catch(R){e=R,xn===n&&n!==null&&(xn=n=n.return);continue}break}while(!0)}function Y_(){var t=au.current;return au.current=ou,t===null?ou:t}function nm(){(Tn===0||Tn===3||Tn===2)&&(Tn=4),Un===null||!(Os&268435455)&&!(bu&268435455)||Wr(Un,Hn)}function uu(t,e){var n=Rt;Rt|=2;var i=Y_();(Un!==t||Hn!==e)&&(_r=null,Ds(t,e));do try{xM();break}catch(r){q_(t,r)}while(!0);if(Op(),Rt=n,au.current=i,xn!==null)throw Error(we(261));return Un=null,Hn=0,Tn}function xM(){for(;xn!==null;)$_(xn)}function yM(){for(;xn!==null&&!Xy();)$_(xn)}function $_(t){var e=J_(t.alternate,t,yi);t.memoizedProps=t.pendingProps,e===null?K_(t):xn=e,Zp.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hM(n,e),n!==null){n.flags&=32767,xn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tn=6,xn=null;return}}else if(n=fM(n,e,yi),n!==null){xn=n;return}if(e=e.sibling,e!==null){xn=e;return}xn=e=t}while(e!==null);Tn===0&&(Tn=5)}function ws(t,e,n){var i=Bt,r=Fi.transition;try{Fi.transition=null,Bt=1,MM(t,e,n,i)}finally{Fi.transition=r,Bt=i}return null}function MM(t,e,n,i){do No();while(qr!==null);if(Rt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t2(t,s),t===Un&&(xn=Un=null,Hn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,Q_(Xc,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fi.transition,Fi.transition=null;var o=Bt;Bt=1;var a=Rt;Rt|=4,Zp.current=null,mM(t,n),W_(n,t),H2(eh),qc=!!Qf,eh=Qf=null,t.current=n,gM(n),jy(),Rt=a,Bt=o,Fi.transition=s}else t.current=n;if($l&&($l=!1,qr=t,cu=r),s=t.pendingLanes,s===0&&(Qr=null),$y(n.stateNode),pi(t,mn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lu)throw lu=!1,t=yh,yh=null,t;return cu&1&&t.tag!==0&&No(),s=t.pendingLanes,s&1?t===Mh?Wa++:(Wa=0,Mh=t):Wa=0,us(),null}function No(){if(qr!==null){var t=Pv(cu),e=Fi.transition,n=Bt;try{if(Fi.transition=null,Bt=16>t?16:t,qr===null)var i=!1;else{if(t=qr,qr=null,cu=0,Rt&6)throw Error(we(331));var r=Rt;for(Rt|=4,Ge=t.current;Ge!==null;){var s=Ge,o=s.child;if(Ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ge=c;Ge!==null;){var h=Ge;switch(h.tag){case 0:case 11:case 15:Va(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ge=p;else for(;Ge!==null;){h=Ge;var m=h.sibling,g=h.return;if(H_(h),h===c){Ge=null;break}if(m!==null){m.return=g,Ge=m;break}Ge=g}}}var M=s.alternate;if(M!==null){var E=M.child;if(E!==null){M.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}Ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ge=o;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ge=u;break e}Ge=s.return}}var v=t.current;for(Ge=v;Ge!==null;){o=Ge;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ge=y;else e:for(o=v;Ge!==null;){if(a=Ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(R){fn(a,a.return,R)}if(a===o){Ge=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Ge=w;break e}Ge=a.return}}if(Rt=r,us(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{Bt=n,Fi.transition=e}}return!1}function Dg(t,e,n){e=Go(n,e),e=P_(t,e,1),t=Jr(t,e,1),e=ii(),t!==null&&(vl(t,1,e),pi(t,e))}function fn(t,e,n){if(t.tag===3)Dg(t,t,n);else for(;e!==null;){if(e.tag===3){Dg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qr===null||!Qr.has(i))){t=Go(n,t),t=I_(e,t,1),e=Jr(e,t,1),t=ii(),e!==null&&(vl(e,1,t),pi(e,t));break}}e=e.return}}function SM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ii(),t.pingedLanes|=t.suspendedLanes&n,Un===t&&(Hn&n)===n&&(Tn===4||Tn===3&&(Hn&130023424)===Hn&&500>mn()-Qp?Ds(t,0):Jp|=n),pi(t,e)}function Z_(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=ii();t=br(t,e),t!==null&&(vl(t,e,n),pi(t,n))}function wM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z_(t,n)}function EM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),Z_(t,n)}var J_;J_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fi.current)di=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return di=!1,dM(t,e,n);di=!!(t.flags&131072)}else di=!1,sn&&e.flags&1048576&&n_(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=zo(e,Kn.current);Do(e,n),r=jp(null,e,i,t,r,n);var s=qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hi(i)?(s=!0,Jc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hp(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,ch(e,i,t,n),e=fh(null,e,i,!0,s,n)):(e.tag=0,sn&&s&&Np(e),ni(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=AM(i),t=Xi(i,t),r){case 0:e=dh(null,e,i,t,n);break e;case 1:e=wg(null,e,i,t,n);break e;case 11:e=Mg(null,e,i,t,n);break e;case 14:e=Sg(null,e,i,Xi(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),dh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),wg(t,e,i,r,n);case 3:e:{if(U_(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l_(t,e),iu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Go(Error(we(423)),e),e=Eg(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(we(424)),e),e=Eg(t,e,i,n,r);break e}else for(Si=Zr(e.stateNode.containerInfo.firstChild),wi=e,sn=!0,qi=null,n=o_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bo(),i===r){e=Cr(t,e,n);break e}ni(t,e,i,n)}e=e.child}return e;case 5:return c_(e),t===null&&oh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,th(i,r)?o=null:s!==null&&th(i,s)&&(e.flags|=32),N_(t,e),ni(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return F_(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ho(e,null,i,n):ni(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Mg(t,e,i,r,n);case 7:return ni(t,e,e.pendingProps,n),e.child;case 8:return ni(t,e,e.pendingProps.children,n),e.child;case 12:return ni(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Zt(tu,i._currentValue),i._currentValue=o,s!==null)if(Qi(s.value,o)){if(s.children===r.children&&!fi.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ni(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Do(e,n),r=ki(r),i=i(r),e.flags|=1,ni(t,e,i,n),e.child;case 14:return i=e.type,r=Xi(i,e.pendingProps),r=Xi(i.type,r),Sg(t,e,i,r,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Lc(t,e),e.tag=1,hi(i)?(t=!0,Jc(e)):t=!1,Do(e,n),R_(e,i,r),ch(e,i,r,n),fh(null,e,i,!0,t,n);case 19:return k_(t,e,n);case 22:return D_(t,e,n)}throw Error(we(156,e.tag))};function Q_(t,e){return Av(t,e)}function TM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(t,e,n,i){return new TM(t,e,n,i)}function im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AM(t){if(typeof t=="function")return im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===wp)return 14}return 2}function ts(t,e){var n=t.alternate;return n===null?(n=Ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return Ns(n.children,r,s,e);case Mp:o=8,r|=8;break;case Df:return t=Ui(12,n,e,r|2),t.elementType=Df,t.lanes=s,t;case Nf:return t=Ui(13,n,e,r),t.elementType=Nf,t.lanes=s,t;case Uf:return t=Ui(19,n,e,r),t.elementType=Uf,t.lanes=s,t;case cv:return Cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case av:o=10;break e;case lv:o=9;break e;case Sp:o=11;break e;case wp:o=14;break e;case Hr:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Ui(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ns(t,e,n,i){return t=Ui(7,t,i,e),t.lanes=n,t}function Cu(t,e,n,i){return t=Ui(22,t,i,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=Ui(6,t,null,e),t.lanes=n,t}function Vd(t,e,n){return e=Ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rm(t,e,n,i,r,s,o,a,l){return t=new bM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hp(s),t}function CM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ex(t){if(!t)return ss;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(hi(n))return e_(t,n,e)}return e}function tx(t,e,n,i,r,s,o,a,l){return t=rm(n,i,!0,t,r,s,o,a,l),t.context=ex(null),n=t.current,i=ii(),r=es(n),s=wr(i,r),s.callback=e??null,Jr(n,s,r),t.current.lanes=r,vl(t,r,i),pi(t,i),t}function Ru(t,e,n,i){var r=e.current,s=ii(),o=es(r);return n=ex(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Jr(r,e,o),t!==null&&(Zi(t,r,o,s),Rc(t,r,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Ng(t,e),(t=t.alternate)&&Ng(t,e)}function RM(){return null}var nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}Pu.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));Ru(t,e,null,null)};Pu.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zs(function(){Ru(null,t,null,null)}),e[Ar]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&Uv(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function PM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=du(o);s.call(c)}}var o=tx(e,i,t,0,null,!1,!1,"",Ug);return t._reactRootContainer=o,t[Ar]=o.current,nl(t.nodeType===8?t.parentNode:t),zs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=du(l);a.call(c)}}var l=rm(t,0,!1,null,null,!1,!1,"",Ug);return t._reactRootContainer=l,t[Ar]=l.current,nl(t.nodeType===8?t.parentNode:t),zs(function(){Ru(e,l,n,i)}),l}function Lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=du(o);a.call(l)}}Ru(e,o,t,r)}else o=PM(n,e,t,r,i);return du(o)}Iv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(Ap(e,n|1),pi(e,mn()),!(Rt&6)&&(Wo=mn()+500,us()))}break;case 13:zs(function(){var i=br(t,1);if(i!==null){var r=ii();Zi(i,t,1,r)}}),sm(t,1)}};bp=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=ii();Zi(e,t,134217728,n)}sm(t,134217728)}};Lv=function(t){if(t.tag===13){var e=es(t),n=br(t,e);if(n!==null){var i=ii();Zi(n,t,e,i)}sm(t,e)}};Dv=function(){return Bt};Nv=function(t,e){var n=Bt;try{return Bt=t,e()}finally{Bt=n}};Xf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(we(90));dv(i),Of(i,r)}}}break;case"textarea":hv(t,n);break;case"select":e=n.value,e!=null&&Ro(t,!!n.multiple,e,!1)}};yv=em;Mv=zs;var IM={usingClientEntryPoint:!1,Events:[xl,Mo,Su,_v,xv,em]},Ma={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LM={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||RM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{_u=Kl.inject(LM),ar=Kl}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM;Ti.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(we(200));return CM(t,e,null,n)};Ti.createRoot=function(t,e){if(!am(t))throw Error(we(299));var n=!1,i="",r=nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rm(t,1,!1,null,null,n,!1,i,r),t[Ar]=e.current,nl(t.nodeType===8?t.parentNode:t),new om(e)};Ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};Ti.flushSync=function(t){return zs(t)};Ti.hydrate=function(t,e,n){if(!Iu(e))throw Error(we(200));return Lu(null,t,e,!0,n)};Ti.hydrateRoot=function(t,e,n){if(!am(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tx(e,null,t,1,n??null,r,!1,s,o),t[Ar]=e.current,nl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pu(e)};Ti.render=function(t,e,n){if(!Iu(e))throw Error(we(200));return Lu(null,t,e,!1,n)};Ti.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(we(40));return t._reactRootContainer?(zs(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};Ti.unstable_batchedUpdates=em;Ti.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Iu(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Lu(t,e,n,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix)}catch(t){console.error(t)}}ix(),iv.exports=Ti;var DM=iv.exports,rx,Fg=DM;rx=Fg.createRoot,Fg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="180",NM=0,kg=1,UM=2,sx=1,ox=2,vr=3,os=0,mi=1,Kt=2,ns=0,Uo=1,Og=2,zg=3,Bg=4,FM=5,As=100,kM=101,OM=102,zM=103,BM=104,HM=200,VM=201,GM=202,WM=203,Eh=204,Th=205,XM=206,jM=207,qM=208,YM=209,$M=210,KM=211,ZM=212,JM=213,QM=214,Ah=0,bh=1,Ch=2,Xo=3,Rh=4,Ph=5,Ih=6,Lh=7,cm=0,eS=1,tS=2,is=0,nS=1,iS=2,rS=3,ax=4,sS=5,oS=6,aS=7,lx=300,jo=301,qo=302,Dh=303,Nh=304,Du=306,Fo=1e3,Is=1001,Uh=1002,Ji=1003,lS=1004,Zl=1005,sr=1006,Gd=1007,Ls=1008,ur=1009,cx=1010,ux=1011,dl=1012,um=1013,Bs=1014,Sr=1015,Ml=1016,dm=1017,fm=1018,fl=1020,dx=35902,fx=35899,hx=1021,px=1022,$i=1023,hl=1026,pl=1027,mx=1028,hm=1029,gx=1030,pm=1031,mm=1033,Fc=33776,kc=33777,Oc=33778,zc=33779,Fh=35840,kh=35841,Oh=35842,zh=35843,Bh=36196,Hh=37492,Vh=37496,Gh=37808,Wh=37809,Xh=37810,jh=37811,qh=37812,Yh=37813,$h=37814,Kh=37815,Zh=37816,Jh=37817,Qh=37818,ep=37819,tp=37820,np=37821,ip=36492,rp=36494,sp=36495,op=36283,ap=36284,lp=36285,cp=36286,cS=3200,uS=3201,gm=0,dS=1,Xr="",Bn="srgb",Yo="srgb-linear",fu="linear",Vt="srgb",to=7680,Hg=519,fS=512,hS=513,pS=514,vx=515,mS=516,gS=517,vS=518,_S=519,Vg=35044,Gg="300 es",or=2e3,hu=2001;class Qo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,up=180/Math.PI;function Sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jn[t&255]+jn[t>>8&255]+jn[t>>16&255]+jn[t>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]).toLowerCase()}function Mt(t,e,n){return Math.max(e,Math.min(n,t))}function xS(t,e){return(t%e+e)%e}function Xd(t,e,n){return(1-n)*t+n*e}function Sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],g=s[o+1],M=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=M,e[n+3]=E;return}if(p!==E||l!==m||c!==g||h!==M){let _=1-a;const u=l*m+c*g+h*M+p*E,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const R=Math.sqrt(y),P=Math.atan2(R,u*v);_=Math.sin(_*P)/R,a=Math.sin(a*P)/R}const w=a*v;if(l=l*_+m*w,c=c*_+g*w,h=h*_+M*w,p=p*_+E*w,_===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=R,c*=R,h*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],m=s[o+1],g=s[o+2],M=s[o+3];return e[n]=a*M+h*p+l*g-c*m,e[n+1]=l*M+h*m+c*p-a*g,e[n+2]=c*M+h*g+a*m-l*p,e[n+3]=h*M-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),m=l(i/2),g=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"YXZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"ZXY":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"ZYX":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"YZX":this._x=m*h*p+c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p-m*g*M;break;case"XZY":this._x=m*h*p-c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p+m*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jd.copy(this).projectOnVector(e),this.sub(jd)}reflect(e){return this.sub(jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jd=new B,Wg=new wl;class gt{constructor(e,n,i,r,s,o,a,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],m=i[2],g=i[5],M=i[8],E=r[0],_=r[3],u=r[6],v=r[1],y=r[4],w=r[7],R=r[2],P=r[5],I=r[8];return s[0]=o*E+a*v+l*R,s[3]=o*_+a*y+l*P,s[6]=o*u+a*w+l*I,s[1]=c*E+h*v+p*R,s[4]=c*_+h*y+p*P,s[7]=c*u+h*w+p*I,s[2]=m*E+g*v+M*R,s[5]=m*_+g*y+M*P,s[8]=m*u+g*w+M*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,m=a*l-h*s,g=c*s-o*l,M=n*p+i*m+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=m*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=g*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qd.makeScale(e,n)),this}rotate(e){return this.premultiply(qd.makeRotation(-e)),this}translate(e,n){return this.premultiply(qd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qd=new gt;function _x(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yS(){const t=pu("canvas");return t.style.display="block",t}const Xg={};function ml(t){t in Xg||(Xg[t]=!0,console.warn(t))}function MS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const jg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const t={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(r.r=ko(r.r),r.g=ko(r.g),r.b=ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xr?fu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yo]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:jg,fromXYZ:qg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:jg,fromXYZ:qg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const Lt=SS();function Er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let no;class wS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=pu("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Er(n[i]/255)*255):n[i]=Er(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yd(r[o].image)):s.push(Yd(r[o]))}else s=Yd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TS=0;const $d=new B;class ri extends Qo{constructor(e=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,i=Is,r=Is,s=sr,o=Ls,a=$i,l=ur,c=ri.DEFAULT_ANISOTROPY,h=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Sl(),this.name="",this.source=new vm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Is:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Is:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=lx;ri.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],g=l[5],M=l[9],E=l[2],_=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-E)<.01&&Math.abs(M-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+E)<.1&&Math.abs(M+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,w=(g+1)/2,R=(u+1)/2,P=(h+m)/4,I=(p+E)/4,N=(M+_)/4;return y>w&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=I/i):w>R?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=P/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=I/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-M)*(_-M)+(p-E)*(p-E)+(m-h)*(m-h));return Math.abs(v)<.001&&(v=1),this.x=(_-M)/v,this.y=(p-E)/v,this.z=(m-h)/v,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AS extends Qo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ri(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends AS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xx extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vi):Vi.fromBufferAttribute(s,o),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Ql.subVectors(this.max,wa),io.subVectors(e.a,wa),ro.subVectors(e.b,wa),so.subVectors(e.c,wa),Nr.subVectors(ro,io),Ur.subVectors(so,ro),ms.subVectors(io,so);let n=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-ms.z,ms.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,ms.z,0,-ms.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-ms.y,ms.x,0];return!Kd(n,io,ro,so,Ql)||(n=[1,0,0,0,1,0,0,0,1],!Kd(n,io,ro,so,Ql))?!1:(ec.crossVectors(Nr,Ur),n=[ec.x,ec.y,ec.z],Kd(n,io,ro,so,Ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new B,new B,new B,new B,new B,new B,new B,new B],Vi=new B,Jl=new El,io=new B,ro=new B,so=new B,Nr=new B,Ur=new B,ms=new B,wa=new B,Ql=new B,ec=new B,gs=new B;function Kd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gs.fromArray(t,s);const a=r.x*Math.abs(gs.x)+r.y*Math.abs(gs.y)+r.z*Math.abs(gs.z),l=e.dot(gs),c=n.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const CS=new El,Ea=new B,Zd=new B;class Nu{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Zd)),this.expandByPoint(Ea.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hr=new B,Jd=new B,tc=new B,Fr=new B,Qd=new B,nc=new B,ef=new B;class _m{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jd.copy(e).add(n).multiplyScalar(.5),tc.copy(n).sub(e).normalize(),Fr.copy(this.origin).sub(Jd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tc),a=Fr.dot(this.direction),l=-Fr.dot(tc),c=Fr.lengthSq(),h=Math.abs(1-o*o);let p,m,g,M;if(h>0)if(p=o*l-a,m=o*a-l,M=s*h,p>=0)if(m>=-M)if(m<=M){const E=1/h;p*=E,m*=E,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-M?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c):m<=M?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Jd).addScaledVector(tc,m),g}intersectSphere(e,n){hr.subVectors(e.center,this.origin);const i=hr.dot(this.direction),r=hr.dot(hr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,n,i,r,s){Qd.subVectors(n,e),nc.subVectors(i,e),ef.crossVectors(Qd,nc);let o=this.direction.dot(ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const l=a*this.direction.dot(nc.crossVectors(Fr,nc));if(l<0)return null;const c=a*this.direction.dot(Qd.cross(Fr));if(c<0||l+c>o)return null;const h=-a*Fr.dot(ef);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_)}set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,E,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=m,u[3]=g,u[7]=M,u[11]=E,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,M=a*h,E=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+M*c,n[5]=m-E*c,n[9]=-a*l,n[2]=E-m*c,n[6]=M+g*c,n[10]=o*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,M=c*h,E=c*p;n[0]=m+E*a,n[4]=M*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-M,n[6]=E+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,M=c*h,E=c*p;n[0]=m-E*a,n[4]=-o*p,n[8]=M+g*a,n[1]=g+M*a,n[5]=o*h,n[9]=E-m*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*h,g=o*p,M=a*h,E=a*p;n[0]=l*h,n[4]=M*c-g,n[8]=m*c+E,n[1]=l*p,n[5]=E*c+m,n[9]=g*c-M,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*c,M=a*l,E=a*c;n[0]=l*h,n[4]=E-m*p,n[8]=M*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*p+M,n[10]=m-E*p}else if(e.order==="XZY"){const m=o*l,g=o*c,M=a*l,E=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=m*p+E,n[5]=o*h,n[9]=g*p-M,n[2]=M*p-g,n[6]=a*h,n[10]=E*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RS,e,PS)}lookAt(e,n,i){const r=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),kr.crossVectors(i,_i),kr.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),kr.crossVectors(i,_i)),kr.normalize(),ic.crossVectors(_i,kr),r[0]=kr.x,r[4]=ic.x,r[8]=_i.x,r[1]=kr.y,r[5]=ic.y,r[9]=_i.y,r[2]=kr.z,r[6]=ic.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],m=i[9],g=i[13],M=i[2],E=i[6],_=i[10],u=i[14],v=i[3],y=i[7],w=i[11],R=i[15],P=r[0],I=r[4],N=r[8],T=r[12],S=r[1],F=r[5],W=r[9],te=r[13],ae=r[2],ue=r[6],G=r[10],Z=r[14],k=r[3],ne=r[7],oe=r[11],Ee=r[15];return s[0]=o*P+a*S+l*ae+c*k,s[4]=o*I+a*F+l*ue+c*ne,s[8]=o*N+a*W+l*G+c*oe,s[12]=o*T+a*te+l*Z+c*Ee,s[1]=h*P+p*S+m*ae+g*k,s[5]=h*I+p*F+m*ue+g*ne,s[9]=h*N+p*W+m*G+g*oe,s[13]=h*T+p*te+m*Z+g*Ee,s[2]=M*P+E*S+_*ae+u*k,s[6]=M*I+E*F+_*ue+u*ne,s[10]=M*N+E*W+_*G+u*oe,s[14]=M*T+E*te+_*Z+u*Ee,s[3]=v*P+y*S+w*ae+R*k,s[7]=v*I+y*F+w*ue+R*ne,s[11]=v*N+y*W+w*G+R*oe,s[15]=v*T+y*te+w*Z+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],g=e[14],M=e[3],E=e[7],_=e[11],u=e[15];return M*(+s*l*p-r*c*p-s*a*m+i*c*m+r*a*g-i*l*g)+E*(+n*l*g-n*c*m+s*o*m-r*o*g+r*c*h-s*l*h)+_*(+n*c*p-n*a*g-s*o*p+i*o*g+s*a*h-i*c*h)+u*(-r*a*h-n*l*p+n*a*m+r*o*p-i*o*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],g=e[11],M=e[12],E=e[13],_=e[14],u=e[15],v=p*_*c-E*m*c+E*l*g-a*_*g-p*l*u+a*m*u,y=M*m*c-h*_*c-M*l*g+o*_*g+h*l*u-o*m*u,w=h*E*c-M*p*c+M*a*g-o*E*g-h*a*u+o*p*u,R=M*p*l-h*E*l-M*a*m+o*E*m+h*a*_-o*p*_,P=n*v+i*y+r*w+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=v*I,e[1]=(E*m*s-p*_*s-E*r*g+i*_*g+p*r*u-i*m*u)*I,e[2]=(a*_*s-E*l*s+E*r*c-i*_*c-a*r*u+i*l*u)*I,e[3]=(p*l*s-a*m*s-p*r*c+i*m*c+a*r*g-i*l*g)*I,e[4]=y*I,e[5]=(h*_*s-M*m*s+M*r*g-n*_*g-h*r*u+n*m*u)*I,e[6]=(M*l*s-o*_*s-M*r*c+n*_*c+o*r*u-n*l*u)*I,e[7]=(o*m*s-h*l*s+h*r*c-n*m*c-o*r*g+n*l*g)*I,e[8]=w*I,e[9]=(M*p*s-h*E*s-M*i*g+n*E*g+h*i*u-n*p*u)*I,e[10]=(o*E*s-M*a*s+M*i*c-n*E*c-o*i*u+n*a*u)*I,e[11]=(h*a*s-o*p*s-h*i*c+n*p*c+o*i*g-n*a*g)*I,e[12]=R*I,e[13]=(h*E*r-M*p*r+M*i*m-n*E*m-h*i*_+n*p*_)*I,e[14]=(M*a*r-o*E*r-M*i*l+n*E*l+o*i*_-n*a*_)*I,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*m+n*a*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,m=s*c,g=s*h,M=s*p,E=o*h,_=o*p,u=a*p,v=l*c,y=l*h,w=l*p,R=i.x,P=i.y,I=i.z;return r[0]=(1-(E+u))*R,r[1]=(g+w)*R,r[2]=(M-y)*R,r[3]=0,r[4]=(g-w)*P,r[5]=(1-(m+u))*P,r[6]=(_+v)*P,r[7]=0,r[8]=(M+y)*I,r[9]=(_-v)*I,r[10]=(1-(m+E))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gi.copy(this);const c=1/s,h=1/o,p=1/a;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=p,Gi.elements[9]*=p,Gi.elements[10]*=p,n.setFromRotationMatrix(Gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=or,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let M,E;if(l)M=s/(o-s),E=o*s/(o-s);else if(a===or)M=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===hu)M=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=or,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let M,E;if(l)M=1/(o-s),E=o/(o-s);else if(a===or)M=-2/(o-s),E=-(o+s)/(o-s);else if(a===hu)M=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oo=new B,Gi=new en,RS=new B(0,0,0),PS=new B(1,1,1),kr=new B,ic=new B,_i=new B,Yg=new en,$g=new wl;class er{constructor(e=0,n=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IS=0;const Kg=new B,ao=new wl,pr=new en,rc=new B,Ta=new B,LS=new B,DS=new wl,Zg=new B(1,0,0),Jg=new B(0,1,0),Qg=new B(0,0,1),e1={type:"added"},NS={type:"removed"},lo={type:"childadded",child:null},tf={type:"childremoved",child:null};class Fn extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new B,n=new er,i=new wl,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new gt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Jg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,n){return Kg.copy(e).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Jg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rc.copy(e):rc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ta,rc,this.up):pr.lookAt(rc,Ta,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(pr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e1),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NS),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e1),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,DS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new B(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new B,mr=new B,nf=new B,gr=new B,co=new B,uo=new B,t1=new B,rf=new B,sf=new B,of=new B,af=new Gt,lf=new Gt,cf=new Gt;class Yi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wi.subVectors(e,n),r.cross(Wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wi.subVectors(r,n),mr.subVectors(i,n),nf.subVectors(e,n);const o=Wi.dot(Wi),a=Wi.dot(mr),l=Wi.dot(nf),c=mr.dot(mr),h=mr.dot(nf),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(c*l-a*h)*m,M=(o*h-a*l)*m;return s.set(1-g-M,M,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(e,n,i,r){return Wi.subVectors(i,n),mr.subVectors(e,n),Wi.cross(mr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Wi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,i),uo.subVectors(s,i),rf.subVectors(e,i);const l=co.dot(rf),c=uo.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,r);const h=co.dot(sf),p=uo.dot(sf);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(co,o);of.subVectors(e,s);const g=co.dot(of),M=uo.dot(of);if(M>=0&&g<=M)return n.copy(s);const E=g*c-l*M;if(E<=0&&c>=0&&M<=0)return a=c/(c-M),n.copy(i).addScaledVector(uo,a);const _=h*M-g*p;if(_<=0&&p-h>=0&&g-M>=0)return t1.subVectors(s,r),a=(p-h)/(p-h+(g-M)),n.copy(r).addScaledVector(t1,a);const u=1/(_+E+m);return o=E*u,a=m*u,n.copy(i).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},sc={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=xS(e,1),n=Mt(n,0,1),i=Mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=uf(o,s,e+1/3),this.g=uf(o,s,e),this.b=uf(o,s,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Lt.workingToColorSpace(qn.copy(this),e),Math.round(Mt(qn.r*255,0,255))*65536+Math.round(Mt(qn.g*255,0,255))*256+Math.round(Mt(qn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(qn.copy(this),n);const i=qn.r,r=qn.g,s=qn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Bn){Lt.workingToColorSpace(qn.copy(this),e);const n=qn.r,i=qn.g,r=qn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+n,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Or),e.getHSL(sc);const i=Xd(Or.h,sc.h,n),r=Xd(Or.s,sc.s,n),s=Xd(Or.l,sc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new St;St.NAMES=yx;let US=0;class Ws extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Uo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new B,oc=new Ze;let FS=0;class cr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vg,this.updateRanges=[],this.gpuType=Sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oc.fromBufferAttribute(this,n),oc.applyMatrix3(e),this.setXY(n,oc.x,oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),r=li(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),r=li(r,this.array),s=li(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class Mx extends cr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sx extends cr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends cr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kS=0;const Ii=new en,df=new Fn,fo=new B,xi=new El,Aa=new El,Ln=new B;class gn extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Sx:Mx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,n,i){return Ii.makeTranslation(e,n,i),this.applyMatrix4(Ii),this}scale(e,n,i){return Ii.makeScale(e,n,i),this.applyMatrix4(Ii),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Aa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(xi.min,Aa.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,Aa.max),xi.expandByPoint(Ln)):(xi.expandByPoint(Aa.min),xi.expandByPoint(Aa.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ln));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ln.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),Ln.add(fo)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new B,l[N]=new B;const c=new B,h=new B,p=new B,m=new Ze,g=new Ze,M=new Ze,E=new B,_=new B;function u(N,T,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,T),M.fromBufferAttribute(s,S),h.sub(c),p.sub(c),g.sub(m),M.sub(m);const F=1/(g.x*M.y-M.x*g.y);isFinite(F)&&(E.copy(h).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(F),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(F),a[N].add(E),a[T].add(E),a[S].add(E),l[N].add(_),l[T].add(_),l[S].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,T=v.length;N<T;++N){const S=v[N],F=S.start,W=S.count;for(let te=F,ae=F+W;te<ae;te+=3)u(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const y=new B,w=new B,R=new B,P=new B;function I(N){R.fromBufferAttribute(r,N),P.copy(R);const T=a[N];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),w.crossVectors(P,T);const F=w.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,F)}for(let N=0,T=v.length;N<T;++N){const S=v[N],F=S.start,W=S.count;for(let te=F,ae=F+W;te<ae;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,p=new B;if(e)for(let m=0,g=e.count;m<g;m+=3){const M=e.getX(m+0),E=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,_),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let g=0,M=0;for(let E=0,_=l.length;E<_;E++){a.isInterleavedBufferAttribute?g=l[E]*a.data.stride+a.offset:g=l[E]*h;for(let u=0;u<h;u++)m[M++]=c[g++]}return new cr(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n1=new en,vs=new _m,ac=new Nu,i1=new B,lc=new B,cc=new B,uc=new B,ff=new B,dc=new B,r1=new B,fc=new B;class H extends Fn{constructor(e=new gn,n=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(ff.fromBufferAttribute(p,e),o?dc.addScaledVector(ff,h):dc.addScaledVector(ff.sub(n),h))}n.add(dc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(ac.containsPoint(vs.origin)===!1&&(vs.intersectSphere(ac,i1)===null||vs.origin.distanceToSquared(i1)>(e.far-e.near)**2))&&(n1.copy(s).invert(),vs.copy(e.ray).applyMatrix4(n1),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const _=m[M],u=o[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=y;w<R;w+=3){const P=a.getX(w),I=a.getX(w+1),N=a.getX(w+2);r=hc(this,u,e,i,c,h,p,P,I,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let _=M,u=E;_<u;_+=3){const v=a.getX(_),y=a.getX(_+1),w=a.getX(_+2);r=hc(this,o,e,i,c,h,p,v,y,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const _=m[M],u=o[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=y;w<R;w+=3){const P=w,I=w+1,N=w+2;r=hc(this,u,e,i,c,h,p,P,I,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let _=M,u=E;_<u;_+=3){const v=_,y=_+1,w=_+2;r=hc(this,o,e,i,c,h,p,v,y,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function OS(t,e,n,i,r,s,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===os,a),l===null)return null;fc.copy(a),fc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fc);return c<n.near||c>n.far?null:{distance:c,point:fc.clone(),object:t}}function hc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,lc),t.getVertexPosition(l,cc),t.getVertexPosition(c,uc);const h=OS(t,e,n,i,lc,cc,uc,r1);if(h){const p=new B;Yi.getBarycoord(r1,lc,cc,uc,p),r&&(h.uv=Yi.getInterpolatedAttribute(r,a,l,c,p,new Ze)),s&&(h.uv1=Yi.getInterpolatedAttribute(s,a,l,c,p,new Ze)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,p,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new B,materialIndex:0};Yi.getNormal(lc,cc,uc,m.normal),h.face=m,h.barycoord=p}return h}class Dn extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let m=0,g=0;M("z","y","x",-1,-1,i,n,e,o,s,0),M("z","y","x",1,-1,i,n,-e,o,s,1),M("x","z","y",1,1,e,i,n,r,o,2),M("x","z","y",1,-1,e,i,-n,r,o,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function M(E,_,u,v,y,w,R,P,I,N,T){const S=w/I,F=R/N,W=w/2,te=R/2,ae=P/2,ue=I+1,G=N+1;let Z=0,k=0;const ne=new B;for(let oe=0;oe<G;oe++){const Ee=oe*F-te;for(let ze=0;ze<ue;ze++){const dt=ze*S-W;ne[E]=dt*v,ne[_]=Ee*y,ne[u]=ae,c.push(ne.x,ne.y,ne.z),ne[E]=0,ne[_]=0,ne[u]=P>0?1:-1,h.push(ne.x,ne.y,ne.z),p.push(ze/I),p.push(1-oe/N),Z+=1}}for(let oe=0;oe<N;oe++)for(let Ee=0;Ee<I;Ee++){const ze=m+Ee+ue*oe,dt=m+Ee+ue*(oe+1),Re=m+(Ee+1)+ue*(oe+1),le=m+(Ee+1)+ue*oe;l.push(ze,dt,le),l.push(dt,Re,le),k+=6}a.addGroup(g,k,T),g+=k,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ei(t){const e={};for(let n=0;n<t.length;n++){const i=$o(t[n]);for(const r in i)e[r]=i[r]}return e}function zS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const BS={clone:$o,merge:ei};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ex extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new B,s1=new Ze,o1=new Ze;class Mi extends Ex{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=up*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return up*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,n){return this.getViewBounds(e,s1,o1),n.subVectors(o1,s1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class GS extends Fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(ho,po,e,n);r.layers=this.layers,this.add(r);const s=new Mi(ho,po,e,n);s.layers=this.layers,this.add(s);const o=new Mi(ho,po,e,n);o.layers=this.layers,this.add(o);const a=new Mi(ho,po,e,n);a.layers=this.layers,this.add(a);const l=new Mi(ho,po,e,n);l.layers=this.layers,this.add(l);const c=new Mi(ho,po,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,g),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Tx extends ri{constructor(e=[],n=jo,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Hs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dn(5,5,5),s=new as({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:ns});s.uniforms.tEquirect.value=n;const o=new H(r,s),a=n.minFilter;return n.minFilter===Ls&&(n.minFilter=sr),new GS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class We extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,i),u=this._getHandJoint(c,E);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,M=.005;c.inputState.pinching&&m>g+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ym{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new ym(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const pf=new B,qS=new B,YS=new gt;class Es{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(qS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YS.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Nu,$S=new Ze(.5,.5),pc=new B;class Mm{constructor(e=new Es,n=new Es,i=new Es,r=new Es,s=new Es,o=new Es){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=or,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],m=s[6],g=s[7],M=s[8],E=s[9],_=s[10],u=s[11],v=s[12],y=s[13],w=s[14],R=s[15];if(r[0].setComponents(c-o,g-h,u-M,R-v).normalize(),r[1].setComponents(c+o,g+h,u+M,R+v).normalize(),r[2].setComponents(c+a,g+p,u+E,R+y).normalize(),r[3].setComponents(c-a,g-p,u-E,R-y).normalize(),i)r[4].setComponents(l,m,_,w).normalize(),r[5].setComponents(c-l,g-m,u-_,R-w).normalize();else if(r[4].setComponents(c-l,g-m,u-_,R-w).normalize(),n===or)r[5].setComponents(c+l,g+m,u+_,R+w).normalize();else if(n===hu)r[5].setComponents(l,m,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=$S.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pc.x=r.normal.x>0?e.max.x:e.min.x,pc.y=r.normal.y>0?e.max.y:e.min.y,pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bc extends Ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new B,gu=new B,a1=new en,ba=new _m,mc=new Nu,mf=new B,l1=new B;class gf extends Fn{constructor(e=new gn,n=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)mu.fromBufferAttribute(n,r-1),gu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(r),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;a1.copy(r).invert(),ba.copy(e.ray).applyMatrix4(a1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),M=Math.min(h.count,o.start+o.count);for(let E=g,_=M-1;E<_;E+=c){const u=h.getX(E),v=h.getX(E+1),y=gc(this,e,ba,l,u,v,E);y&&n.push(y)}if(this.isLineLoop){const E=h.getX(M-1),_=h.getX(g),u=gc(this,e,ba,l,E,_,M-1);u&&n.push(u)}}else{const g=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let E=g,_=M-1;E<_;E+=c){const u=gc(this,e,ba,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=gc(this,e,ba,l,M-1,g,M-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(mu.fromBufferAttribute(a,r),gu.fromBufferAttribute(a,s),n.distanceSqToSegment(mu,gu,mf,l1)>i)return;mf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(mf);if(!(c<e.near||c>e.far))return{distance:c,point:l1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class vc extends ri{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ax extends ri{constructor(e,n,i=Bs,r,s,o,a=Ji,l=Ji,c,h=hl,p=1){if(h!==hl&&h!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:p};super(m,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bx extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ci extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=n/2,p=Math.PI/2*e,m=n,g=2*p+m,M=i*2+s,E=r+1,_=new B,u=new B;for(let v=0;v<=M;v++){let y=0,w=0,R=0,P=0;if(v<=i){const T=v/i,S=T*Math.PI/2;w=-h-e*Math.cos(S),R=e*Math.sin(S),P=-e*Math.cos(S),y=T*p}else if(v<=i+s){const T=(v-i)/s;w=-h+T*n,R=e,P=0,y=p+T*m}else{const T=(v-i-s)/i,S=T*Math.PI/2;w=h+e*Math.sin(S),R=e*Math.cos(S),P=e*Math.sin(S),y=p+m+T*p}const I=Math.max(0,Math.min(1,y/g));let N=0;v===0?N=.5/r:v===M&&(N=-.5/r);for(let T=0;T<=r;T++){const S=T/r,F=S*Math.PI*2,W=Math.sin(F),te=Math.cos(F);u.x=-R*te,u.y=w,u.z=R*W,a.push(u.x,u.y,u.z),_.set(-R*te,P,R*W),_.normalize(),l.push(_.x,_.y,_.z),c.push(S+N,I)}if(v>0){const T=(v-1)*E;for(let S=0;S<r;S++){const F=T+S,W=T+S+1,te=v*E+S,ae=v*E+S+1;o.push(F,W,te),o.push(W,ae,te)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ti extends gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new B,h=new Ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=n;p++,m+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ct extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],g=[];let M=0;const E=[],_=i/2;let u=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2));function v(){const w=new B,R=new B;let P=0;const I=(n-e)/i;for(let N=0;N<=s;N++){const T=[],S=N/s,F=S*(n-e)+e;for(let W=0;W<=r;W++){const te=W/r,ae=te*l+a,ue=Math.sin(ae),G=Math.cos(ae);R.x=F*ue,R.y=-S*i+_,R.z=F*G,p.push(R.x,R.y,R.z),w.set(ue,I,G).normalize(),m.push(w.x,w.y,w.z),g.push(te,1-S),T.push(M++)}E.push(T)}for(let N=0;N<r;N++)for(let T=0;T<s;T++){const S=E[T][N],F=E[T+1][N],W=E[T+1][N+1],te=E[T][N+1];(e>0||T!==0)&&(h.push(S,F,te),P+=3),(n>0||T!==s-1)&&(h.push(F,W,te),P+=3)}c.addGroup(u,P,0),u+=P}function y(w){const R=M,P=new Ze,I=new B;let N=0;const T=w===!0?e:n,S=w===!0?1:-1;for(let W=1;W<=r;W++)p.push(0,_*S,0),m.push(0,S,0),g.push(.5,.5),M++;const F=M;for(let W=0;W<=r;W++){const ae=W/r*l+a,ue=Math.cos(ae),G=Math.sin(ae);I.x=T*G,I.y=_*S,I.z=T*ue,p.push(I.x,I.y,I.z),m.push(0,S,0),P.x=ue*.5+.5,P.y=G*.5*S+.5,g.push(P.x,P.y),M++}for(let W=0;W<r;W++){const te=R+W,ae=F+W;w===!0?h.push(ae,ae+1,te):h.push(ae+1,ae,te),N+=3}c.addGroup(u,N,w===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _n extends ct{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sm extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new B,w=new B,R=new B;for(let P=0;P<n.length;P+=3)g(n[P+0],y),g(n[P+1],w),g(n[P+2],R),l(y,w,R,v)}function l(v,y,w,R){const P=R+1,I=[];for(let N=0;N<=P;N++){I[N]=[];const T=v.clone().lerp(w,N/P),S=y.clone().lerp(w,N/P),F=P-N;for(let W=0;W<=F;W++)W===0&&N===P?I[N][W]=T:I[N][W]=T.clone().lerp(S,W/F)}for(let N=0;N<P;N++)for(let T=0;T<2*(P-N)-1;T++){const S=Math.floor(T/2);T%2===0?(m(I[N][S+1]),m(I[N+1][S]),m(I[N][S])):(m(I[N][S+1]),m(I[N+1][S+1]),m(I[N+1][S]))}}function c(v){const y=new B;for(let w=0;w<s.length;w+=3)y.x=s[w+0],y.y=s[w+1],y.z=s[w+2],y.normalize().multiplyScalar(v),s[w+0]=y.x,s[w+1]=y.y,s[w+2]=y.z}function h(){const v=new B;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const w=_(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(w,1-R)}M(),p()}function p(){for(let v=0;v<o.length;v+=6){const y=o[v+0],w=o[v+2],R=o[v+4],P=Math.max(y,w,R),I=Math.min(y,w,R);P>.9&&I<.1&&(y<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function m(v){s.push(v.x,v.y,v.z)}function g(v,y){const w=v*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function M(){const v=new B,y=new B,w=new B,R=new B,P=new Ze,I=new Ze,N=new Ze;for(let T=0,S=0;T<s.length;T+=9,S+=6){v.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),P.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),R.copy(v).add(y).add(w).divideScalar(3);const F=_(R);E(P,S+0,v,F),E(I,S+2,y,F),E(N,S+4,w,F)}}function E(v,y,w,R){R<0&&v.x===1&&(o[y]=v.x-1),w.x===0&&w.z===0&&(o[y]=R/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.vertices,e.indices,e.radius,e.details)}}class qt extends Sm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new qt(e.radius,e.detail)}}class Pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],m=i[r+1]-h,g=(o-h)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ze:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new B,r=[],s=[],o=[],a=new B,l=new en;for(let g=0;g<=e;g++){const M=g/e;r[g]=this.getTangentAt(M,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(Mt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,M))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Mt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let M=1;M<=e;M++)s[M].applyMatrix4(l.makeRotationAxis(r[M],g*M)),o[M].crossVectors(r[M],s[M])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cx extends Pr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ze){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*h-g*p+this.aX,c=m*p+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class KS extends Cx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let m=(o-s)/c-(a-s)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,g*=h,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const _c=new B,vf=new wm,_f=new wm,xf=new wm;class dp extends Pr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(_c.subVectors(r[0],r[1]).add(r[0]),c=_c);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(_c.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=_c),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let M=Math.pow(c.distanceToSquared(p),g),E=Math.pow(p.distanceToSquared(m),g),_=Math.pow(m.distanceToSquared(h),g);E<1e-4&&(E=1),M<1e-4&&(M=E),_<1e-4&&(_=E),vf.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,M,E,_),_f.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,M,E,_),xf.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,M,E,_)}else this.curveType==="catmullrom"&&(vf.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),_f.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),xf.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return i.set(vf.calc(l),_f.calc(l),xf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function c1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function ZS(t,e){const n=1-t;return n*n*e}function JS(t,e){return 2*(1-t)*t*e}function QS(t,e){return t*t*e}function Xa(t,e,n,i){return ZS(t,e)+JS(t,n)+QS(t,i)}function ew(t,e){const n=1-t;return n*n*n*e}function tw(t,e){const n=1-t;return 3*n*n*t*e}function nw(t,e){return 3*(1-t)*t*t*e}function iw(t,e){return t*t*t*e}function ja(t,e,n,i,r){return ew(t,e)+tw(t,n)+nw(t,i)+iw(t,r)}class rw extends Pr{constructor(e=new Ze,n=new Ze,i=new Ze,r=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ze){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ja(e,r.x,s.x,o.x,a.x),ja(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sw extends Pr{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ja(e,r.x,s.x,o.x,a.x),ja(e,r.y,s.y,o.y,a.y),ja(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ow extends Pr{constructor(e=new Ze,n=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ze){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ze){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aw extends Pr{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lw extends Pr{constructor(e=new Ze,n=new Ze,i=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ze){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends Pr{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y),Xa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cw extends Pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ze){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(c1(a,l.x,c.x,h.x,p.x),c1(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ze().fromArray(r))}return this}}var uw=Object.freeze({__proto__:null,ArcCurve:KS,CatmullRomCurve3:dp,CubicBezierCurve:rw,CubicBezierCurve3:sw,EllipseCurve:Cx,LineCurve:ow,LineCurve3:aw,QuadraticBezierCurve:lw,QuadraticBezierCurve3:Rx,SplineCurve:cw});class Yn extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,m=n/l,g=[],M=[],E=[],_=[];for(let u=0;u<h;u++){const v=u*m-o;for(let y=0;y<c;y++){const w=y*p-s;M.push(w,-v,0),E.push(0,0,1),_.push(y/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const y=v+c*u,w=v+c*(u+1),R=v+1+c*(u+1),P=v+1+c*u;g.push(y,w,P),g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new At(M,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Em extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const m=(n-e)/r,g=new B,M=new Ze;for(let E=0;E<=r;E++){for(let _=0;_<=i;_++){const u=s+_/i*o;g.x=p*Math.cos(u),g.y=p*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),M.x=(g.x/n+1)/2,M.y=(g.y/n+1)/2,h.push(M.x,M.y)}p+=m}for(let E=0;E<r;E++){const _=E*(i+1);for(let u=0;u<i;u++){const v=u+_,y=v,w=v+i+1,R=v+i+2,P=v+1;a.push(y,w,P),a.push(w,R,P)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Em(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mt extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new B,m=new B,g=[],M=[],E=[],_=[];for(let u=0;u<=i;u++){const v=[],y=u/i;let w=0;u===0&&o===0?w=.5/n:u===i&&l===Math.PI&&(w=-.5/n);for(let R=0;R<=n;R++){const P=R/n;p.x=-e*Math.cos(r+P*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+P*s)*Math.sin(o+y*a),M.push(p.x,p.y,p.z),m.copy(p).normalize(),E.push(m.x,m.y,m.z),_.push(P+w,1-y),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const y=h[u][v+1],w=h[u][v],R=h[u+1][v],P=h[u+1][v+1];(u!==0||o>0)&&g.push(y,w,P),(u!==i-1||l<Math.PI)&&g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new At(M,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ft extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new B,p=new B,m=new B;for(let g=0;g<=i;g++)for(let M=0;M<=r;M++){const E=M/r*s,_=g/i*Math.PI*2;p.x=(e+n*Math.cos(_))*Math.cos(E),p.y=(e+n*Math.cos(_))*Math.sin(E),p.z=n*Math.sin(_),a.push(p.x,p.y,p.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),c.push(M/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let M=1;M<=r;M++){const E=(r+1)*g+M-1,_=(r+1)*(g-1)+M-1,u=(r+1)*(g-1)+M,v=(r+1)*g+M;o.push(E,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qa extends gn{constructor(e=new Rx(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new Ze;let h=new B;const p=[],m=[],g=[],M=[];E(),this.setIndex(M),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2));function E(){for(let y=0;y<n;y++)_(y);_(s===!1?n:0),v(),u()}function _(y){h=e.getPointAt(y/n,h);const w=o.normals[y],R=o.binormals[y];for(let P=0;P<=r;P++){const I=P/r*Math.PI*2,N=Math.sin(I),T=-Math.cos(I);l.x=T*w.x+N*R.x,l.y=T*w.y+N*R.y,l.z=T*w.z+N*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=n;y++)for(let w=1;w<=r;w++){const R=(r+1)*(y-1)+(w-1),P=(r+1)*y+(w-1),I=(r+1)*y+w,N=(r+1)*(y-1)+w;M.push(R,P,N),M.push(P,I,N)}}function v(){for(let y=0;y<=n;y++)for(let w=0;w<=r;w++)c.x=y/n,c.y=w/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qa(new uw[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Le extends Ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gm,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xc extends Ws{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gm,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dw extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fw extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tm extends Fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class hw extends Tm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const yf=new en,u1=new B,d1=new B;class Px{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=ur,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mm,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;u1.setFromMatrixPosition(e.matrixWorld),n.position.copy(u1),d1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(d1),n.updateMatrixWorld(),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const f1=new en,Ca=new B,Mf=new B;class pw extends Px{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),Mf.copy(i.position),Mf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-Ca.x,-Ca.y,-Ca.z),f1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f1,i.coordinateSystem,i.reversedDepth)}}class Li extends Tm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ix extends Ex{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mw extends Px{constructor(){super(new Ix(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h1 extends Tm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new mw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gw extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const p1=new en;class vw{constructor(e,n,i=0,r=1/0){this.ray=new _m(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new xm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return p1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p1),this}intersectObject(e,n=!0,i=[]){return fp(e,this,i,n),i.sort(m1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)fp(e[r],this,i,n);return i.sort(m1),i}}function m1(t,e){return t.distance-e.distance}function fp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)fp(s[o],e,n,!0)}}function g1(t,e,n,i){const r=_w(i);switch(n){case hx:return t*e;case mx:return t*e/r.components*r.byteLength;case hm:return t*e/r.components*r.byteLength;case gx:return t*e*2/r.components*r.byteLength;case pm:return t*e*2/r.components*r.byteLength;case px:return t*e*3/r.components*r.byteLength;case $i:return t*e*4/r.components*r.byteLength;case mm:return t*e*4/r.components*r.byteLength;case Fc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:case zh:return Math.max(t,16)*Math.max(e,8)/4;case Fh:case Oh:return Math.max(t,8)*Math.max(e,8)/2;case Bh:case Hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ip:case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case op:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _w(t){switch(t){case ur:case cx:return{byteLength:1,components:1};case dl:case ux:case Ml:return{byteLength:2,components:1};case dm:case fm:return{byteLength:2,components:4};case Bs:case um:case Sr:return{byteLength:4,components:1};case dx:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xw(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,M)=>g.start-M.start);let m=0;for(let g=1;g<p.length;g++){const M=p[m],E=p[g];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,p[m]=E)}p.length=m+1;for(let g=0,M=p.length;g<M;g++){const E=p[g];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mw=`#ifdef USE_ALPHAHASH
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
#endif`,Sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Aw=`#ifdef USE_AOMAP
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
#endif`,bw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cw=`#ifdef USE_BATCHING
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
#endif`,Rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dw=`#ifdef USE_IRIDESCENCE
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
#endif`,Nw=`#ifdef USE_BUMPMAP
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
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gw=`#define PI 3.141592653589793
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
} // validated`,Ww=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xw=`vec3 transformedNormal = objectNormal;
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
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
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
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RE=`#if defined( USE_POINTS_UV )
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
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
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
}`,AT=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,qT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:yw,alphahash_pars_fragment:Mw,alphamap_fragment:Sw,alphamap_pars_fragment:ww,alphatest_fragment:Ew,alphatest_pars_fragment:Tw,aomap_fragment:Aw,aomap_pars_fragment:bw,batching_pars_vertex:Cw,batching_vertex:Rw,begin_vertex:Pw,beginnormal_vertex:Iw,bsdfs:Lw,iridescence_fragment:Dw,bumpmap_pars_fragment:Nw,clipping_planes_fragment:Uw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:kw,clipping_planes_vertex:Ow,color_fragment:zw,color_pars_fragment:Bw,color_pars_vertex:Hw,color_vertex:Vw,common:Gw,cube_uv_reflection_fragment:Ww,defaultnormal_vertex:Xw,displacementmap_pars_vertex:jw,displacementmap_vertex:qw,emissivemap_fragment:Yw,emissivemap_pars_fragment:$w,colorspace_fragment:Kw,colorspace_pars_fragment:Zw,envmap_fragment:Jw,envmap_common_pars_fragment:Qw,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:fE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:oE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:dE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:ME,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:TE,map_fragment:AE,map_pars_fragment:bE,map_particle_fragment:CE,map_particle_pars_fragment:RE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:IE,morphinstance_vertex:LE,morphcolor_vertex:DE,morphnormal_vertex:NE,morphtarget_pars_vertex:UE,morphtarget_vertex:FE,normal_fragment_begin:kE,normal_fragment_maps:OE,normal_pars_fragment:zE,normal_pars_vertex:BE,normal_vertex:HE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:jE,opaque_fragment:qE,packing:YE,premultiplied_alpha_fragment:$E,project_vertex:KE,dithering_fragment:ZE,dithering_pars_fragment:JE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:rT,skinbase_vertex:sT,skinning_pars_vertex:oT,skinning_vertex:aT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:dT,tonemapping_pars_fragment:fT,transmission_fragment:hT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:_T,background_vert:xT,background_frag:yT,backgroundCube_vert:MT,backgroundCube_frag:ST,cube_vert:wT,cube_frag:ET,depth_vert:TT,depth_frag:AT,distanceRGBA_vert:bT,distanceRGBA_frag:CT,equirect_vert:RT,equirect_frag:PT,linedashed_vert:IT,linedashed_frag:LT,meshbasic_vert:DT,meshbasic_frag:NT,meshlambert_vert:UT,meshlambert_frag:FT,meshmatcap_vert:kT,meshmatcap_frag:OT,meshnormal_vert:zT,meshnormal_frag:BT,meshphong_vert:HT,meshphong_frag:VT,meshphysical_vert:GT,meshphysical_frag:WT,meshtoon_vert:XT,meshtoon_frag:jT,points_vert:qT,points_frag:YT,shadow_vert:$T,shadow_frag:KT,sprite_vert:ZT,sprite_frag:JT},Oe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ir={basic:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:ei([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:ei([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:ei([Oe.points,Oe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:ei([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:ei([Oe.common,Oe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:ei([Oe.sprite,Oe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:ei([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:ei([Oe.lights,Oe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ir.physical={uniforms:ei([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const yc={r:0,b:0,g:0},xs=new er,QT=new en;function e3(t,e,n,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,h,p=null,m=0,g=null;function M(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?n:e).get(w)),w}function E(y){let w=!1;const R=M(y);R===null?u(a,l):R&&R.isColor&&(u(R,1),w=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,w){const R=M(w);R&&(R.isCubeTexture||R.mapping===Du)?(h===void 0&&(h=new H(new Dn(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:$o(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),xs.copy(w.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(xs)),h.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Vt,(p!==R||m!==R.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=R,m=R.version,g=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new H(new Yn(2,2),new as({name:"BackgroundMaterial",uniforms:$o(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||m!==R.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=R,m=R.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,w){y.getRGB(yc,wx(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,w,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),l=w,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:E,addToRenderList:_,dispose:v}}function t3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(S,F,W,te,ae){let ue=!1;const G=p(te,W,F);s!==G&&(s=G,c(s.object)),ue=g(S,te,W,ae),ue&&M(S,te,W,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,w(S,F,W,te),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,F,W){const te=W.wireframe===!0;let ae=i[S.id];ae===void 0&&(ae={},i[S.id]=ae);let ue=ae[F.id];ue===void 0&&(ue={},ae[F.id]=ue);let G=ue[te];return G===void 0&&(G=m(l()),ue[te]=G),G}function m(S){const F=[],W=[],te=[];for(let ae=0;ae<n;ae++)F[ae]=0,W[ae]=0,te[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:te,object:S,attributes:{},index:null}}function g(S,F,W,te){const ae=s.attributes,ue=F.attributes;let G=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){const oe=ae[k];let Ee=ue[k];if(Ee===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),oe===void 0||oe.attribute!==Ee||Ee&&oe.data!==Ee.data)return!0;G++}return s.attributesNum!==G||s.index!==te}function M(S,F,W,te){const ae={},ue=F.attributes;let G=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){let oe=ue[k];oe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const Ee={};Ee.attribute=oe,oe&&oe.data&&(Ee.data=oe.data),ae[k]=Ee,G++}s.attributes=ae,s.attributesNum=G,s.index=te}function E(){const S=s.newAttributes;for(let F=0,W=S.length;F<W;F++)S[F]=0}function _(S){u(S,0)}function u(S,F){const W=s.newAttributes,te=s.enabledAttributes,ae=s.attributeDivisors;W[S]=1,te[S]===0&&(t.enableVertexAttribArray(S),te[S]=1),ae[S]!==F&&(t.vertexAttribDivisor(S,F),ae[S]=F)}function v(){const S=s.newAttributes,F=s.enabledAttributes;for(let W=0,te=F.length;W<te;W++)F[W]!==S[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function y(S,F,W,te,ae,ue,G){G===!0?t.vertexAttribIPointer(S,F,W,ae,ue):t.vertexAttribPointer(S,F,W,te,ae,ue)}function w(S,F,W,te){E();const ae=te.attributes,ue=W.getAttributes(),G=F.defaultAttributeValues;for(const Z in ue){const k=ue[Z];if(k.location>=0){let ne=ae[Z];if(ne===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const oe=ne.normalized,Ee=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;const dt=ze.buffer,Re=ze.type,le=ze.bytesPerElement,V=Re===t.INT||Re===t.UNSIGNED_INT||ne.gpuType===um;if(ne.isInterleavedBufferAttribute){const ge=ne.data,Fe=ge.stride,nt=ne.offset;if(ge.isInstancedInterleavedBuffer){for(let Ce=0;Ce<k.locationSize;Ce++)u(k.location+Ce,ge.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)_(k.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ce=0;Ce<k.locationSize;Ce++)y(k.location+Ce,Ee/k.locationSize,Re,oe,Fe*le,(nt+Ee/k.locationSize*Ce)*le,V)}else{if(ne.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)u(k.location+ge,ne.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<k.locationSize;ge++)_(k.location+ge);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let ge=0;ge<k.locationSize;ge++)y(k.location+ge,Ee/k.locationSize,Re,oe,Ee*le,Ee/k.locationSize*ge*le,V)}}else if(G!==void 0){const oe=G[Z];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(k.location,oe);break;case 3:t.vertexAttrib3fv(k.location,oe);break;case 4:t.vertexAttrib4fv(k.location,oe);break;default:t.vertexAttrib1fv(k.location,oe)}}}}v()}function R(){N();for(const S in i){const F=i[S];for(const W in F){const te=F[W];for(const ae in te)h(te[ae].object),delete te[ae];delete F[W]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const F=i[S.id];for(const W in F){const te=F[W];for(const ae in te)h(te[ae].object),delete te[ae];delete F[W]}delete i[S.id]}function I(S){for(const F in i){const W=i[F];if(W[S.id]===void 0)continue;const te=W[S.id];for(const ae in te)h(te[ae].object),delete te[ae];delete W[S.id]}}function N(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:_,disableUnusedAttributes:v}}function n3(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];n.update(g,i,1)}function l(c,h,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<c.length;M++)o(c[M],h[M],m[M]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,p);let M=0;for(let E=0;E<p;E++)M+=h[E]*m[E];n.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==$i&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const N=I===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ur&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sr&&!N)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=M>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:R,maxSamples:P}}function r3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Es,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,g){const M=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,u=t.get(p);if(!r||M===null||M.length===0||s&&!_)s?h(null):c();else{const v=s?0:i,y=v*4;let w=u.clippingState||null;l.value=w,w=h(M,m,y,g);for(let R=0;R!==y;++R)w[R]=n[R];u.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,M){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=l.value,M!==!0||_===null){const u=g+E*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let y=0,w=g;y!==E;++y,w+=4)o.copy(p[y]).applyMatrix4(v,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function s3(t){let e=new WeakMap;function n(o,a){return a===Dh?o.mapping=jo:a===Nh&&(o.mapping=qo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dh||a===Nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new WS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Co=4,v1=[.125,.215,.35,.446,.526,.582],bs=20,Sf=new Ix,_1=new St;let wf=null,Ef=0,Tf=0,Af=!1;const Ts=(1+Math.sqrt(5))/2,mo=1/Ts,x1=[new B(-Ts,mo,0),new B(Ts,mo,0),new B(-mo,0,Ts),new B(mo,0,Ts),new B(0,Ts,-mo),new B(0,Ts,mo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],o3=new B;class y1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=o3}=s;wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Ef,Tf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sr,minFilter:sr,generateMipmaps:!1,type:Ml,format:$i,colorSpace:Yo,depthBuffer:!1},r=M1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a3(s)),this._blurMaterial=l3(s,e,n)}return r}_compileMaterial(e){const n=new H(this._lodPlanes[0],e);this._renderer.compile(n,Sf)}_sceneToCubeUV(e,n,i,r,s){const l=new Mi(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(_1),p.toneMapping=is,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const E=new Ct({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),_=new H(new Dn,E);let u=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,u=!0):(E.color.copy(_1),u=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):w===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const R=this._cubeSize;Mc(r,w*R,y>2?R:0,R,R),p.setRenderTarget(r),u&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jo||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=w1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=x1[(r-s-1)%x1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new H(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*bs-1),E=s/M,_=isFinite(s)?1+Math.floor(h*E):bs;_>bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${bs}`);const u=[];let v=0;for(let I=0;I<bs;++I){const N=I/E,T=Math.exp(-N*N/2);u.push(T),I===0?v+=T:I<_&&(v+=2*T)}for(let I=0;I<u.length;I++)u[I]=u[I]/v;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=M,m.mipInt.value=y-i;const w=this._sizeLods[r],R=3*w*(r>y-Co?r-y+Co:0),P=4*(this._cubeSize-w);Mc(n,R,P,3*w,2*w),l.setRenderTarget(n),l.render(p,Sf)}}function a3(t){const e=[],n=[],i=[];let r=t;const s=t-Co+1+v1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Co?l=v1[o-t+Co-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,M=6,E=3,_=2,u=1,v=new Float32Array(E*M*g),y=new Float32Array(_*M*g),w=new Float32Array(u*M*g);for(let P=0;P<g;P++){const I=P%3*2/3-1,N=P>2?0:-1,T=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];v.set(T,E*M*P),y.set(m,_*M*P);const S=[P,P,P,P,P,P];w.set(S,u*M*P)}const R=new gn;R.setAttribute("position",new cr(v,E)),R.setAttribute("uv",new cr(y,_)),R.setAttribute("faceIndex",new cr(w,u)),e.push(R),r>Co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function M1(t,e,n){const i=new Hs(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function l3(t,e,n){const i=new Float32Array(bs),r=new B(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Am(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function S1(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Am(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function w1(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Am(){return`

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
	`}function c3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dh||l===Nh,h=l===jo||l===qo;if(c||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new y1(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new y1(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function u3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ml("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d3(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function c(p){const m=[],g=p.index,M=p.attributes.position;let E=0;if(g!==null){const v=g.array;E=g.version;for(let y=0,w=v.length;y<w;y+=3){const R=v[y+0],P=v[y+1],I=v[y+2];m.push(R,P,P,I,I,R)}}else if(M!==void 0){const v=M.array;E=M.version;for(let y=0,w=v.length/3-1;y<w;y+=3){const R=y+0,P=y+1,I=y+2;m.push(R,P,P,I,I,R)}}else return;const _=new(_x(m)?Sx:Mx)(m,1);_.version=E;const u=s.get(p);u&&e.remove(u),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function f3(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function c(m,g,M){M!==0&&(t.drawElementsInstanced(i,g,s,m*o,M),n.update(g,i,M))}function h(m,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,M);let _=0;for(let u=0;u<M;u++)_+=g[u];n.update(_,i,1)}function p(m,g,M,E){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<m.length;u++)c(m[u]/o,g[u],E[u]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,E,0,M);let u=0;for(let v=0;v<M;v++)u+=g[v]*E[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function h3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function p3(t,e,n){const i=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;m!==void 0&&m.texture.dispose();const M=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),_===!0&&(w=3);let R=a.attributes.position.count*w,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*P*4*p),N=new xx(I,R,P,p);N.type=Sr,N.needsUpdate=!0;const T=w*4;for(let F=0;F<p;F++){const W=u[F],te=v[F],ae=y[F],ue=R*P*4*F;for(let G=0;G<W.count;G++){const Z=G*T;M===!0&&(r.fromBufferAttribute(W,G),I[ue+Z+0]=r.x,I[ue+Z+1]=r.y,I[ue+Z+2]=r.z,I[ue+Z+3]=0),E===!0&&(r.fromBufferAttribute(te,G),I[ue+Z+4]=r.x,I[ue+Z+5]=r.y,I[ue+Z+6]=r.z,I[ue+Z+7]=0),_===!0&&(r.fromBufferAttribute(ae,G),I[ue+Z+8]=r.x,I[ue+Z+9]=r.y,I[ue+Z+10]=r.z,I[ue+Z+11]=ae.itemSize===4?r.w:1)}}m={count:p,texture:N,size:new Ze(R,P)},i.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let M=0;for(let _=0;_<c.length;_++)M+=c[_];const E=a.morphTargetsRelative?1:1-M;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function m3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Dx=new ri,E1=new Ax(1,1),Nx=new xx,Ux=new bS,Fx=new Tx,T1=[],A1=[],b1=new Float32Array(16),C1=new Float32Array(9),R1=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=T1[r];if(s===void 0&&(s=new Float32Array(r),T1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uu(t,e){let n=A1[e];n===void 0&&(n=new Int32Array(e),A1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function g3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),bn(n,e)}}function _3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),bn(n,e)}}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),bn(n,e)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;R1.set(i),t.uniformMatrix2fv(this.addr,!1,R1),bn(n,i)}}function M3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;C1.set(i),t.uniformMatrix3fv(this.addr,!1,C1),bn(n,i)}}function S3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;b1.set(i),t.uniformMatrix4fv(this.addr,!1,b1),bn(n,i)}}function w3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),bn(n,e)}}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),bn(n,e)}}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),bn(n,e)}}function b3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),bn(n,e)}}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),bn(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),bn(n,e)}}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(E1.compareFunction=vx,s=E1):s=Dx,n.setTexture2D(e||s,r)}function L3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ux,r)}function D3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Fx,r)}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Nx,r)}function U3(t){switch(t){case 5126:return g3;case 35664:return v3;case 35665:return _3;case 35666:return x3;case 35674:return y3;case 35675:return M3;case 35676:return S3;case 5124:case 35670:return w3;case 35667:case 35671:return E3;case 35668:case 35672:return T3;case 35669:case 35673:return A3;case 5125:return b3;case 36294:return C3;case 36295:return R3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return I3;case 35679:case 36299:case 36307:return L3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return N3}}function F3(t,e){t.uniform1fv(this.addr,e)}function k3(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function O3(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function z3(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function B3(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function H3(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function V3(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function G3(t,e){t.uniform1iv(this.addr,e)}function W3(t,e){t.uniform2iv(this.addr,e)}function X3(t,e){t.uniform3iv(this.addr,e)}function j3(t,e){t.uniform4iv(this.addr,e)}function q3(t,e){t.uniform1uiv(this.addr,e)}function Y3(t,e){t.uniform2uiv(this.addr,e)}function $3(t,e){t.uniform3uiv(this.addr,e)}function K3(t,e){t.uniform4uiv(this.addr,e)}function Z3(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dx,s[o])}function J3(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ux,s[o])}function Q3(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Fx,s[o])}function eA(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Nx,s[o])}function tA(t){switch(t){case 5126:return F3;case 35664:return k3;case 35665:return O3;case 35666:return z3;case 35674:return B3;case 35675:return H3;case 35676:return V3;case 5124:case 35670:return G3;case 35667:case 35671:return W3;case 35668:case 35672:return X3;case 35669:case 35673:return j3;case 5125:return q3;case 36294:return Y3;case 36295:return $3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U3(n.type)}}class iA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tA(n.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function P1(t,e){t.seq.push(e),t.map[e.id]=e}function sA(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){P1(n,c===void 0?new nA(a,t,e):new iA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new rA(a),P1(n,p)),n=p}}}class Hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function I1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oA=37297;let aA=0;function lA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const L1=new gt;function cA(t){Lt._getMatrix(L1,Lt.workingColorSpace,t);const e=`mat3( ${L1.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(t)){case fu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function D1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+lA(t.getShaderSource(e),a)}else return s}function uA(t,e){const n=cA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function dA(t,e){let n;switch(e){case nS:n="Linear";break;case iS:n="Reinhard";break;case rS:n="Cineon";break;case ax:n="ACESFilmic";break;case oS:n="AgX";break;case aS:n="Neutral";break;case sS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sc=new B;function fA(){Lt.getLuminanceCoefficients(Sc);const t=Sc.x.toFixed(4),e=Sc.y.toFixed(4),n=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function pA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ua(t){return t!==""}function N1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(t){return t.replace(gA,_A)}const vA=new Map;function _A(t,e){let n=_t[e];if(n===void 0){const i=vA.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hp(n)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F1(t){return t.replace(xA,yA)}function yA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function MA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case qo:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function EA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cm:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function TA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=MA(n),c=SA(n),h=wA(n),p=EA(n),m=TA(n),g=hA(n),M=pA(s),E=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ua).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ua).join(`
`),u.length>0&&(u+=`
`)):(_=[k1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),u=[k1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==is?"#define TONE_MAPPING":"",n.toneMapping!==is?_t.tonemapping_pars_fragment:"",n.toneMapping!==is?dA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,uA("linearToOutputTexel",n.outputColorSpace),fA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),o=hp(o),o=N1(o,n),o=U1(o,n),a=hp(a),a=N1(a,n),a=U1(a,n),o=F1(o),a=F1(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=v+_+o,w=v+u+a,R=I1(r,r.VERTEX_SHADER,y),P=I1(r,r.FRAGMENT_SHADER,w);r.attachShader(E,R),r.attachShader(E,P),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function I(F){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(E)||"",te=r.getShaderInfoLog(R)||"",ae=r.getShaderInfoLog(P)||"",ue=W.trim(),G=te.trim(),Z=ae.trim();let k=!0,ne=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,P);else{const oe=D1(r,R,"vertex"),Ee=D1(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ue+`
`+oe+`
`+Ee)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(G===""||Z==="")&&(ne=!1);ne&&(F.diagnostics={runnable:k,programLog:ue,vertexShader:{log:G,prefix:_},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(R),r.deleteShader(P),N=new Hc(r,E),T=mA(r,E)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,oA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=P,this}let bA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RA(e),n.set(e,i)),i}}class RA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function PA(t,e,n,i,r,s,o){const a=new xm,l=new CA,c=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,S,F,W,te){const ae=W.fog,ue=te.geometry,G=T.isMeshStandardMaterial?W.environment:null,Z=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),k=Z&&Z.mapping===Du?Z.image.height:null,ne=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const oe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ee=oe!==void 0?oe.length:0;let ze=0;ue.morphAttributes.position!==void 0&&(ze=1),ue.morphAttributes.normal!==void 0&&(ze=2),ue.morphAttributes.color!==void 0&&(ze=3);let dt,Re,le,V;if(ne){const yt=ir[ne];dt=yt.vertexShader,Re=yt.fragmentShader}else dt=T.vertexShader,Re=T.fragmentShader,l.update(T),le=l.getVertexShaderID(T),V=l.getFragmentShaderID(T);const ge=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),nt=te.isInstancedMesh===!0,Ce=te.isBatchedMesh===!0,xt=!!T.map,hn=!!T.matcap,z=!!Z,Pt=!!T.aoMap,at=!!T.lightMap,Xe=!!T.bumpMap,O=!!T.normalMap,Ie=!!T.displacementMap,ce=!!T.emissiveMap,de=!!T.metalnessMap,Je=!!T.roughnessMap,it=T.anisotropy>0,L=T.clearcoat>0,b=T.dispersion>0,ee=T.iridescence>0,he=T.sheen>0,_e=T.transmission>0,fe=it&&!!T.anisotropyMap,ke=L&&!!T.clearcoatMap,xe=L&&!!T.clearcoatNormalMap,qe=L&&!!T.clearcoatRoughnessMap,Ye=ee&&!!T.iridescenceMap,ye=ee&&!!T.iridescenceThicknessMap,Te=he&&!!T.sheenColorMap,st=he&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ne=!!T.specularColorMap,ut=!!T.specularIntensityMap,Y=_e&&!!T.transmissionMap,Ae=_e&&!!T.thicknessMap,Pe=!!T.gradientMap,Ve=!!T.alphaMap,Me=T.alphaTest>0,ve=!!T.alphaHash,$e=!!T.extensions;let lt=is;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Ot={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:Re,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:V,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&te._colorsTexture!==null,instancing:nt,instancingColor:nt&&te.instanceColor!==null,instancingMorph:nt&&te.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Yo,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:hn,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:k,aoMap:Pt,lightMap:at,bumpMap:Xe,normalMap:O,displacementMap:m&&Ie,emissiveMap:ce,normalMapObjectSpace:O&&T.normalMapType===dS,normalMapTangentSpace:O&&T.normalMapType===gm,metalnessMap:de,roughnessMap:Je,anisotropy:it,anisotropyMap:fe,clearcoat:L,clearcoatMap:ke,clearcoatNormalMap:xe,clearcoatRoughnessMap:qe,dispersion:b,iridescence:ee,iridescenceMap:Ye,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Te,sheenRoughnessMap:st,specularMap:Ke,specularColorMap:Ne,specularIntensityMap:ut,transmission:_e,transmissionMap:Y,thicknessMap:Ae,gradientMap:Pe,opaque:T.transparent===!1&&T.blending===Uo&&T.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Me,alphaHash:ve,combine:T.combine,mapUv:xt&&E(T.map.channel),aoMapUv:Pt&&E(T.aoMap.channel),lightMapUv:at&&E(T.lightMap.channel),bumpMapUv:Xe&&E(T.bumpMap.channel),normalMapUv:O&&E(T.normalMap.channel),displacementMapUv:Ie&&E(T.displacementMap.channel),emissiveMapUv:ce&&E(T.emissiveMap.channel),metalnessMapUv:de&&E(T.metalnessMap.channel),roughnessMapUv:Je&&E(T.roughnessMap.channel),anisotropyMapUv:fe&&E(T.anisotropyMap.channel),clearcoatMapUv:ke&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:st&&E(T.sheenRoughnessMap.channel),specularMapUv:Ke&&E(T.specularMap.channel),specularColorMapUv:Ne&&E(T.specularColorMap.channel),specularIntensityMapUv:ut&&E(T.specularIntensityMap.channel),transmissionMapUv:Y&&E(T.transmissionMap.channel),thicknessMapUv:Ae&&E(T.thicknessMap.channel),alphaMapUv:Ve&&E(T.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(O||it),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ue.attributes.uv&&(xt||Ve),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Fe,skinning:te.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:ce&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kt,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function u(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)S.push(F),S.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(v(S,T),y(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const S=M[T.type];let F;if(S){const W=ir[S];F=BS.clone(W.uniforms)}else F=T.uniforms;return F}function R(T,S){let F;for(let W=0,te=h.length;W<te;W++){const ae=h[W];if(ae.cacheKey===S){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new AA(t,S,T,s),h.push(F)),F}function P(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function I(T){l.remove(T)}function N(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:w,acquireProgram:R,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:N}}function IA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function LA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function O1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function z1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,g,M,E,_){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:m,material:g,groupOrder:M,renderOrder:p.renderOrder,z:E,group:_},t[e]=u):(u.id=p.id,u.object=p,u.geometry=m,u.material=g,u.groupOrder=M,u.renderOrder=p.renderOrder,u.z=E,u.group=_),e++,u}function a(p,m,g,M,E,_){const u=o(p,m,g,M,E,_);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(p,m,g,M,E,_){const u=o(p,m,g,M,E,_);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,m){n.length>1&&n.sort(p||LA),i.length>1&&i.sort(m||O1),r.length>1&&r.sort(m||O1)}function h(){for(let p=e,m=t.length;p<m;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function DA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new z1,t.set(i,[o])):r>=s.length?(o=new z1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new St};break;case"SpotLight":n={position:new B,direction:new B,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function UA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FA=0;function kA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OA(t){const e=new NA,n=UA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new en,o=new en;function a(c){let h=0,p=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,M=0,E=0,_=0,u=0,v=0,y=0,w=0,R=0,P=0,I=0;c.sort(kA);for(let T=0,S=c.length;T<S;T++){const F=c[T],W=F.color,te=F.intensity,ae=F.distance,ue=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=W.r*te,p+=W.g*te,m+=W.b*te;else if(F.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],te);I++}else if(F.isDirectionalLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=ue,i.directionalShadowMatrix[g]=F.shadow.matrix,v++}i.directional[g]=G,g++}else if(F.isSpotLight){const G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(W).multiplyScalar(te),G.distance=ae,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,i.spot[E]=G;const Z=F.shadow;if(F.map&&(i.spotLightMap[R]=F.map,R++,Z.updateMatrices(F),F.castShadow&&P++),i.spotLightMatrix[E]=Z.matrix,F.castShadow){const k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=ue,w++}E++}else if(F.isRectAreaLight){const G=e.get(F);G.color.copy(W).multiplyScalar(te),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=G,_++}else if(F.isPointLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const Z=F.shadow,k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=ue,i.pointShadowMatrix[M]=F.shadow.matrix,y++}i.point[M]=G,M++}else if(F.isHemisphereLight){const G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(te),G.groundColor.copy(F.groundColor).multiplyScalar(te),i.hemi[u]=G,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==g||N.pointLength!==M||N.spotLength!==E||N.rectAreaLength!==_||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==w||N.numSpotMaps!==R||N.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=E,i.rectArea.length=_,i.point.length=M,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,N.directionalLength=g,N.pointLength=M,N.spotLength=E,N.rectAreaLength=_,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=w,N.numSpotMaps=R,N.numLightProbes=I,i.version=FA++)}function l(c,h){let p=0,m=0,g=0,M=0,E=0;const _=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const y=c[u];if(y.isDirectionalLight){const w=i.directional[p];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),p++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),E++}}}return{setup:a,setupView:l,state:i}}function B1(t){const e=new OA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new B1(t),e.set(r,[a])):s>=o.length?(a=new B1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
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
}`;function VA(t,e,n){let i=new Mm;const r=new Ze,s=new Ze,o=new Gt,a=new dw({depthPacking:uS}),l=new fw,c={},h=n.maxTextureSize,p={[os]:mi,[mi]:os,[Kt]:Kt},m=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:BA,fragmentShader:HA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new H(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let u=this.type;this.render=function(P,I,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),W=t.state;W.setBlending(ns),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=u!==vr&&this.type===vr,ae=u===vr&&this.type!==vr;for(let ue=0,G=P.length;ue<G;ue++){const Z=P[ue],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ne=k.getFrameExtents();if(r.multiply(ne),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||te===!0||ae===!0){const Ee=this.type!==vr?{minFilter:Ji,magFilter:Ji}:{};k.map!==null&&k.map.dispose(),k.map=new Hs(r.x,r.y,Ee),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const oe=k.getViewportCount();for(let Ee=0;Ee<oe;Ee++){const ze=k.getViewport(Ee);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),W.viewport(o),k.updateMatrices(Z,Ee),i=k.getFrustum(),w(I,N,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===vr&&v(k,N),k.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(T,S,F)};function v(P,I){const N=e.update(E);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hs(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,N,m,E,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,N,g,E,null)}function y(P,I,N,T){let S=null;const F=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)S=F;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=S.uuid,te=I.uuid;let ae=c[W];ae===void 0&&(ae={},c[W]=ae);let ue=ae[te];ue===void 0&&(ue=S.clone(),ae[te]=ue,I.addEventListener("dispose",R)),S=ue}if(S.visible=I.visible,S.wireframe=I.wireframe,T===vr?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:p[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=N}return S}function w(P,I,N,T,S){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===vr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const te=e.update(P),ae=P.material;if(Array.isArray(ae)){const ue=te.groups;for(let G=0,Z=ue.length;G<Z;G++){const k=ue[G],ne=ae[k.materialIndex];if(ne&&ne.visible){const oe=y(P,ne,T,S);P.onBeforeShadow(t,P,I,N,te,oe,k),t.renderBufferDirect(N,null,te,oe,P,k),P.onAfterShadow(t,P,I,N,te,oe,k)}}}else if(ae.visible){const ue=y(P,ae,T,S);P.onBeforeShadow(t,P,I,N,te,ue,null),t.renderBufferDirect(N,null,te,ue,P,null),P.onAfterShadow(t,P,I,N,te,ue,null)}}const W=P.children;for(let te=0,ae=W.length;te<ae;te++)w(W[te],I,N,T,S)}function R(P){P.target.removeEventListener("dispose",R);for(const N in c){const T=c[N],S=P.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const GA={[Ah]:bh,[Ch]:Ih,[Rh]:Lh,[Xo]:Ph,[bh]:Ah,[Ih]:Ch,[Lh]:Rh,[Ph]:Xo};function WA(t,e){function n(){let Y=!1;const Ae=new Gt;let Pe=null;const Ve=new Gt(0,0,0,0);return{setMask:function(Me){Pe!==Me&&!Y&&(t.colorMask(Me,Me,Me,Me),Pe=Me)},setLocked:function(Me){Y=Me},setClear:function(Me,ve,$e,lt,Ot){Ot===!0&&(Me*=lt,ve*=lt,$e*=lt),Ae.set(Me,ve,$e,lt),Ve.equals(Ae)===!1&&(t.clearColor(Me,ve,$e,lt),Ve.copy(Ae))},reset:function(){Y=!1,Pe=null,Ve.set(-1,0,0,0)}}}function i(){let Y=!1,Ae=!1,Pe=null,Ve=null,Me=null;return{setReversed:function(ve){if(Ae!==ve){const $e=e.get("EXT_clip_control");ve?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return Ae},setTest:function(ve){ve?ge(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(ve){Pe!==ve&&!Y&&(t.depthMask(ve),Pe=ve)},setFunc:function(ve){if(Ae&&(ve=GA[ve]),Ve!==ve){switch(ve){case Ah:t.depthFunc(t.NEVER);break;case bh:t.depthFunc(t.ALWAYS);break;case Ch:t.depthFunc(t.LESS);break;case Xo:t.depthFunc(t.LEQUAL);break;case Rh:t.depthFunc(t.EQUAL);break;case Ph:t.depthFunc(t.GEQUAL);break;case Ih:t.depthFunc(t.GREATER);break;case Lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ve=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){Me!==ve&&(Ae&&(ve=1-ve),t.clearDepth(ve),Me=ve)},reset:function(){Y=!1,Pe=null,Ve=null,Me=null,Ae=!1}}}function r(){let Y=!1,Ae=null,Pe=null,Ve=null,Me=null,ve=null,$e=null,lt=null,Ot=null;return{setTest:function(yt){Y||(yt?ge(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!Y&&(t.stencilMask(yt),Ae=yt)},setFunc:function(yt,un,Zn){(Pe!==yt||Ve!==un||Me!==Zn)&&(t.stencilFunc(yt,un,Zn),Pe=yt,Ve=un,Me=Zn)},setOp:function(yt,un,Zn){(ve!==yt||$e!==un||lt!==Zn)&&(t.stencilOp(yt,un,Zn),ve=yt,$e=un,lt=Zn)},setLocked:function(yt){Y=yt},setClear:function(yt){Ot!==yt&&(t.clearStencil(yt),Ot=yt)},reset:function(){Y=!1,Ae=null,Pe=null,Ve=null,Me=null,ve=null,$e=null,lt=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},m=new WeakMap,g=[],M=null,E=!1,_=null,u=null,v=null,y=null,w=null,R=null,P=null,I=new St(0,0,0),N=0,T=!1,S=null,F=null,W=null,te=null,ae=null;const ue=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Z>=2);let ne=null,oe={};const Ee=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),dt=new Gt().fromArray(Ee),Re=new Gt().fromArray(ze);function le(Y,Ae,Pe,Ve){const Me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(Y,ve),t.texParameteri(Y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<Pe;$e++)Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,Ve,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ae+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ve}const V={};V[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),V[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),V[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(t.DEPTH_TEST),o.setFunc(Xo),Xe(!1),O(kg),ge(t.CULL_FACE),Pt(ns);function ge(Y){h[Y]!==!0&&(t.enable(Y),h[Y]=!0)}function Fe(Y){h[Y]!==!1&&(t.disable(Y),h[Y]=!1)}function nt(Y,Ae){return p[Y]!==Ae?(t.bindFramebuffer(Y,Ae),p[Y]=Ae,Y===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Ae),Y===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ce(Y,Ae){let Pe=g,Ve=!1;if(Y){Pe=m.get(Ae),Pe===void 0&&(Pe=[],m.set(Ae,Pe));const Me=Y.textures;if(Pe.length!==Me.length||Pe[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,$e=Me.length;ve<$e;ve++)Pe[ve]=t.COLOR_ATTACHMENT0+ve;Pe.length=Me.length,Ve=!0}}else Pe[0]!==t.BACK&&(Pe[0]=t.BACK,Ve=!0);Ve&&t.drawBuffers(Pe)}function xt(Y){return M!==Y?(t.useProgram(Y),M=Y,!0):!1}const hn={[As]:t.FUNC_ADD,[kM]:t.FUNC_SUBTRACT,[OM]:t.FUNC_REVERSE_SUBTRACT};hn[zM]=t.MIN,hn[BM]=t.MAX;const z={[HM]:t.ZERO,[VM]:t.ONE,[GM]:t.SRC_COLOR,[Eh]:t.SRC_ALPHA,[$M]:t.SRC_ALPHA_SATURATE,[qM]:t.DST_COLOR,[XM]:t.DST_ALPHA,[WM]:t.ONE_MINUS_SRC_COLOR,[Th]:t.ONE_MINUS_SRC_ALPHA,[YM]:t.ONE_MINUS_DST_COLOR,[jM]:t.ONE_MINUS_DST_ALPHA,[KM]:t.CONSTANT_COLOR,[ZM]:t.ONE_MINUS_CONSTANT_COLOR,[JM]:t.CONSTANT_ALPHA,[QM]:t.ONE_MINUS_CONSTANT_ALPHA};function Pt(Y,Ae,Pe,Ve,Me,ve,$e,lt,Ot,yt){if(Y===ns){E===!0&&(Fe(t.BLEND),E=!1);return}if(E===!1&&(ge(t.BLEND),E=!0),Y!==FM){if(Y!==_||yt!==T){if((u!==As||w!==As)&&(t.blendEquation(t.FUNC_ADD),u=As,w=As),yt)switch(Y){case Uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Og:t.blendFunc(t.ONE,t.ONE);break;case zg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Og:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}v=null,y=null,R=null,P=null,I.set(0,0,0),N=0,_=Y,T=yt}return}Me=Me||Ae,ve=ve||Pe,$e=$e||Ve,(Ae!==u||Me!==w)&&(t.blendEquationSeparate(hn[Ae],hn[Me]),u=Ae,w=Me),(Pe!==v||Ve!==y||ve!==R||$e!==P)&&(t.blendFuncSeparate(z[Pe],z[Ve],z[ve],z[$e]),v=Pe,y=Ve,R=ve,P=$e),(lt.equals(I)===!1||Ot!==N)&&(t.blendColor(lt.r,lt.g,lt.b,Ot),I.copy(lt),N=Ot),_=Y,T=!1}function at(Y,Ae){Y.side===Kt?Fe(t.CULL_FACE):ge(t.CULL_FACE);let Pe=Y.side===mi;Ae&&(Pe=!Pe),Xe(Pe),Y.blending===Uo&&Y.transparent===!1?Pt(ns):Pt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const Ve=Y.stencilWrite;a.setTest(Ve),Ve&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ce(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(Y){S!==Y&&(Y?t.frontFace(t.CW):t.frontFace(t.CCW),S=Y)}function O(Y){Y!==NM?(ge(t.CULL_FACE),Y!==F&&(Y===kg?t.cullFace(t.BACK):Y===UM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),F=Y}function Ie(Y){Y!==W&&(G&&t.lineWidth(Y),W=Y)}function ce(Y,Ae,Pe){Y?(ge(t.POLYGON_OFFSET_FILL),(te!==Ae||ae!==Pe)&&(t.polygonOffset(Ae,Pe),te=Ae,ae=Pe)):Fe(t.POLYGON_OFFSET_FILL)}function de(Y){Y?ge(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Je(Y){Y===void 0&&(Y=t.TEXTURE0+ue-1),ne!==Y&&(t.activeTexture(Y),ne=Y)}function it(Y,Ae,Pe){Pe===void 0&&(ne===null?Pe=t.TEXTURE0+ue-1:Pe=ne);let Ve=oe[Pe];Ve===void 0&&(Ve={type:void 0,texture:void 0},oe[Pe]=Ve),(Ve.type!==Y||Ve.texture!==Ae)&&(ne!==Pe&&(t.activeTexture(Pe),ne=Pe),t.bindTexture(Y,Ae||V[Y]),Ve.type=Y,Ve.texture=Ae)}function L(){const Y=oe[ne];Y!==void 0&&Y.type!==void 0&&(t.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ee(){try{t.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function he(){try{t.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{t.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{t.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{t.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qe(){try{t.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{t.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{t.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(Y){dt.equals(Y)===!1&&(t.scissor(Y.x,Y.y,Y.z,Y.w),dt.copy(Y))}function st(Y){Re.equals(Y)===!1&&(t.viewport(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function Ke(Y,Ae){let Pe=c.get(Ae);Pe===void 0&&(Pe=new WeakMap,c.set(Ae,Pe));let Ve=Pe.get(Y);Ve===void 0&&(Ve=t.getUniformBlockIndex(Ae,Y.name),Pe.set(Y,Ve))}function Ne(Y,Ae){const Ve=c.get(Ae).get(Y);l.get(Ae)!==Ve&&(t.uniformBlockBinding(Ae,Ve,Y.__bindingPointIndex),l.set(Ae,Ve))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ne=null,oe={},p={},m=new WeakMap,g=[],M=null,E=!1,_=null,u=null,v=null,y=null,w=null,R=null,P=null,I=new St(0,0,0),N=0,T=!1,S=null,F=null,W=null,te=null,ae=null,dt.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ge,disable:Fe,bindFramebuffer:nt,drawBuffers:Ce,useProgram:xt,setBlending:Pt,setMaterial:at,setFlipSided:Xe,setCullFace:O,setLineWidth:Ie,setPolygonOffset:ce,setScissorTest:de,activeTexture:Je,bindTexture:it,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:Ye,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:Ne,texStorage2D:xe,texStorage3D:qe,texSubImage2D:he,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:ke,scissor:Te,viewport:st,reset:ut}}function XA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,b){return g?new OffscreenCanvas(L,b):pu("canvas")}function E(L,b,ee){let he=1;const _e=it(L);if((_e.width>ee||_e.height>ee)&&(he=ee/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*_e.width),ke=Math.floor(he*_e.height);p===void 0&&(p=M(fe,ke));const xe=b?M(fe,ke):p;return xe.width=fe,xe.height=ke,xe.getContext("2d").drawImage(L,0,0,fe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+ke+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function _(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(L,b,ee,he,_e=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=b;if(b===t.RED&&(ee===t.FLOAT&&(fe=t.R32F),ee===t.HALF_FLOAT&&(fe=t.R16F),ee===t.UNSIGNED_BYTE&&(fe=t.R8)),b===t.RED_INTEGER&&(ee===t.UNSIGNED_BYTE&&(fe=t.R8UI),ee===t.UNSIGNED_SHORT&&(fe=t.R16UI),ee===t.UNSIGNED_INT&&(fe=t.R32UI),ee===t.BYTE&&(fe=t.R8I),ee===t.SHORT&&(fe=t.R16I),ee===t.INT&&(fe=t.R32I)),b===t.RG&&(ee===t.FLOAT&&(fe=t.RG32F),ee===t.HALF_FLOAT&&(fe=t.RG16F),ee===t.UNSIGNED_BYTE&&(fe=t.RG8)),b===t.RG_INTEGER&&(ee===t.UNSIGNED_BYTE&&(fe=t.RG8UI),ee===t.UNSIGNED_SHORT&&(fe=t.RG16UI),ee===t.UNSIGNED_INT&&(fe=t.RG32UI),ee===t.BYTE&&(fe=t.RG8I),ee===t.SHORT&&(fe=t.RG16I),ee===t.INT&&(fe=t.RG32I)),b===t.RGB_INTEGER&&(ee===t.UNSIGNED_BYTE&&(fe=t.RGB8UI),ee===t.UNSIGNED_SHORT&&(fe=t.RGB16UI),ee===t.UNSIGNED_INT&&(fe=t.RGB32UI),ee===t.BYTE&&(fe=t.RGB8I),ee===t.SHORT&&(fe=t.RGB16I),ee===t.INT&&(fe=t.RGB32I)),b===t.RGBA_INTEGER&&(ee===t.UNSIGNED_BYTE&&(fe=t.RGBA8UI),ee===t.UNSIGNED_SHORT&&(fe=t.RGBA16UI),ee===t.UNSIGNED_INT&&(fe=t.RGBA32UI),ee===t.BYTE&&(fe=t.RGBA8I),ee===t.SHORT&&(fe=t.RGBA16I),ee===t.INT&&(fe=t.RGBA32I)),b===t.RGB&&(ee===t.UNSIGNED_INT_5_9_9_9_REV&&(fe=t.RGB9_E5),ee===t.UNSIGNED_INT_10F_11F_11F_REV&&(fe=t.R11F_G11F_B10F)),b===t.RGBA){const ke=_e?fu:Lt.getTransfer(he);ee===t.FLOAT&&(fe=t.RGBA32F),ee===t.HALF_FLOAT&&(fe=t.RGBA16F),ee===t.UNSIGNED_BYTE&&(fe=ke===Vt?t.SRGB8_ALPHA8:t.RGBA8),ee===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),ee===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(L,b){let ee;return L?b===null||b===Bs||b===fl?ee=t.DEPTH24_STENCIL8:b===Sr?ee=t.DEPTH32F_STENCIL8:b===dl&&(ee=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bs||b===fl?ee=t.DEPTH_COMPONENT24:b===Sr?ee=t.DEPTH_COMPONENT32F:b===dl&&(ee=t.DEPTH_COMPONENT16),ee}function R(L,b){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ji&&L.minFilter!==sr?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&h.delete(b)}function I(L){const b=L.target;b.removeEventListener("dispose",I),S(b)}function N(L){const b=i.get(L);if(b.__webglInit===void 0)return;const ee=L.source,he=m.get(ee);if(he){const _e=he[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(L),Object.keys(he).length===0&&m.delete(ee)}i.remove(L)}function T(L){const b=i.get(L);t.deleteTexture(b.__webglTexture);const ee=L.source,he=m.get(ee);delete he[b.__cacheKey],o.memory.textures--}function S(L){const b=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let _e=0;_e<b.__webglFramebuffer[he].length;_e++)t.deleteFramebuffer(b.__webglFramebuffer[he][_e]);else t.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)t.deleteFramebuffer(b.__webglFramebuffer[he]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=L.textures;for(let he=0,_e=ee.length;he<_e;he++){const fe=i.get(ee[he]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(ee[he])}i.remove(L)}let F=0;function W(){F=0}function te(){const L=F;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),F+=1,L}function ae(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ue(L,b){const ee=i.get(L);if(L.isVideoTexture&&de(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(ee,L,b);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture,t.TEXTURE0+b)}function G(L,b){const ee=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){V(ee,L,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ee.__webglTexture,t.TEXTURE0+b)}function Z(L,b){const ee=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){V(ee,L,b);return}n.bindTexture(t.TEXTURE_3D,ee.__webglTexture,t.TEXTURE0+b)}function k(L,b){const ee=i.get(L);if(L.version>0&&ee.__version!==L.version){ge(ee,L,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture,t.TEXTURE0+b)}const ne={[Fo]:t.REPEAT,[Is]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},oe={[Ji]:t.NEAREST,[lS]:t.NEAREST_MIPMAP_NEAREST,[Zl]:t.NEAREST_MIPMAP_LINEAR,[sr]:t.LINEAR,[Gd]:t.LINEAR_MIPMAP_NEAREST,[Ls]:t.LINEAR_MIPMAP_LINEAR},Ee={[fS]:t.NEVER,[_S]:t.ALWAYS,[hS]:t.LESS,[vx]:t.LEQUAL,[pS]:t.EQUAL,[vS]:t.GEQUAL,[mS]:t.GREATER,[gS]:t.NOTEQUAL};function ze(L,b){if(b.type===Sr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===sr||b.magFilter===Gd||b.magFilter===Zl||b.magFilter===Ls||b.minFilter===sr||b.minFilter===Gd||b.minFilter===Zl||b.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,ne[b.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,ne[b.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,ne[b.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,oe[b.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ji||b.minFilter!==Zl&&b.minFilter!==Ls||b.type===Sr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function dt(L,b){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const he=b.source;let _e=m.get(he);_e===void 0&&(_e={},m.set(he,_e));const fe=ae(b);if(fe!==L.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),_e[fe].usedTimes++;const ke=_e[L.__cacheKey];ke!==void 0&&(_e[L.__cacheKey].usedTimes--,ke.usedTimes===0&&T(b)),L.__cacheKey=fe,L.__webglTexture=_e[fe].texture}return ee}function Re(L,b,ee){return Math.floor(Math.floor(L/ee)/b)}function le(L,b,ee,he){const fe=L.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,ee,he,b.data);else{fe.sort((ye,Te)=>ye.start-Te.start);let ke=0;for(let ye=1;ye<fe.length;ye++){const Te=fe[ke],st=fe[ye],Ke=Te.start+Te.count,Ne=Re(st.start,b.width,4),ut=Re(Te.start,b.width,4);st.start<=Ke+1&&Ne===ut&&Re(st.start+st.count-1,b.width,4)===Ne?Te.count=Math.max(Te.count,st.start+st.count-Te.start):(++ke,fe[ke]=st)}fe.length=ke+1;const xe=t.getParameter(t.UNPACK_ROW_LENGTH),qe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Te=fe.length;ye<Te;ye++){const st=fe[ye],Ke=Math.floor(st.start/4),Ne=Math.ceil(st.count/4),ut=Ke%b.width,Y=Math.floor(Ke/b.width),Ae=Ne,Pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(t.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(t.TEXTURE_2D,0,ut,Y,Ae,Pe,ee,he,b.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,xe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ye)}}function V(L,b,ee){let he=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=t.TEXTURE_3D);const _e=dt(L,b),fe=b.source;n.bindTexture(he,L.__webglTexture,t.TEXTURE0+ee);const ke=i.get(fe);if(fe.version!==ke.__version||_e===!0){n.activeTexture(t.TEXTURE0+ee);const xe=Lt.getPrimaries(Lt.workingColorSpace),qe=b.colorSpace===Xr?null:Lt.getPrimaries(b.colorSpace),Ye=b.colorSpace===Xr||xe===qe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ye=E(b.image,!1,r.maxTextureSize);ye=Je(b,ye);const Te=s.convert(b.format,b.colorSpace),st=s.convert(b.type);let Ke=y(b.internalFormat,Te,st,b.colorSpace,b.isVideoTexture);ze(he,b);let Ne;const ut=b.mipmaps,Y=b.isVideoTexture!==!0,Ae=ke.__version===void 0||_e===!0,Pe=fe.dataReady,Ve=R(b,ye);if(b.isDepthTexture)Ke=w(b.format===pl,b.type),Ae&&(Y?n.texStorage2D(t.TEXTURE_2D,1,Ke,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Te,st,null));else if(b.isDataTexture)if(ut.length>0){Y&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ut[0].width,ut[0].height);for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],Y?Pe&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,st,Ne.data):n.texImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Te,st,Ne.data);b.generateMipmaps=!1}else Y?(Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ye.width,ye.height),Pe&&le(b,ye,Te,st)):n.texImage2D(t.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Te,st,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ke,ut[0].width,ut[0].height,ye.depth);for(let Me=0,ve=ut.length;Me<ve;Me++)if(Ne=ut[Me],b.format!==$i)if(Te!==null)if(Y){if(Pe)if(b.layerUpdates.size>0){const $e=g1(Ne.width,Ne.height,b.format,b.type);for(const lt of b.layerUpdates){const Ot=Ne.data.subarray(lt*$e/Ne.data.BYTES_PER_ELEMENT,(lt+1)*$e/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,lt,Ne.width,Ne.height,1,Te,Ot)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,ye.depth,Te,Ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Me,Ke,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,ye.depth,Te,st,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Me,Ke,Ne.width,Ne.height,ye.depth,0,Te,st,Ne.data)}else{Y&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ut[0].width,ut[0].height);for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],b.format!==$i?Te!==null?Y?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Pe&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,st,Ne.data):n.texImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Te,st,Ne.data)}else if(b.isDataArrayTexture)if(Y){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ke,ye.width,ye.height,ye.depth),Pe)if(b.layerUpdates.size>0){const Me=g1(ye.width,ye.height,b.format,b.type);for(const ve of b.layerUpdates){const $e=ye.data.subarray(ve*Me/ye.data.BYTES_PER_ELEMENT,(ve+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Te,st,$e)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ke,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(b.isData3DTexture)Y?(Ae&&n.texStorage3D(t.TEXTURE_3D,Ve,Ke,ye.width,ye.height,ye.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)):n.texImage3D(t.TEXTURE_3D,0,Ke,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(b.isFramebufferTexture){if(Ae)if(Y)n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ye.width,ye.height);else{let Me=ye.width,ve=ye.height;for(let $e=0;$e<Ve;$e++)n.texImage2D(t.TEXTURE_2D,$e,Ke,Me,ve,0,Te,st,null),Me>>=1,ve>>=1}}else if(ut.length>0){if(Y&&Ae){const Me=it(ut[0]);n.texStorage2D(t.TEXTURE_2D,Ve,Ke,Me.width,Me.height)}for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],Y?Pe&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Te,st,Ne):n.texImage2D(t.TEXTURE_2D,Me,Ke,Te,st,Ne);b.generateMipmaps=!1}else if(Y){if(Ae){const Me=it(ye);n.texStorage2D(t.TEXTURE_2D,Ve,Ke,Me.width,Me.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,st,ye)}else n.texImage2D(t.TEXTURE_2D,0,Ke,Te,st,ye);_(b)&&u(he),ke.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ge(L,b,ee){if(b.image.length!==6)return;const he=dt(L,b),_e=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+ee);const fe=i.get(_e);if(_e.version!==fe.__version||he===!0){n.activeTexture(t.TEXTURE0+ee);const ke=Lt.getPrimaries(Lt.workingColorSpace),xe=b.colorSpace===Xr?null:Lt.getPrimaries(b.colorSpace),qe=b.colorSpace===Xr||ke===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!Ye&&!ye?Te[ve]=E(b.image[ve],!0,r.maxCubemapSize):Te[ve]=ye?b.image[ve].image:b.image[ve],Te[ve]=Je(b,Te[ve]);const st=Te[0],Ke=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type),ut=y(b.internalFormat,Ke,Ne,b.colorSpace),Y=b.isVideoTexture!==!0,Ae=fe.__version===void 0||he===!0,Pe=_e.dataReady;let Ve=R(b,st);ze(t.TEXTURE_CUBE_MAP,b);let Me;if(Ye){Y&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,ut,st.width,st.height);for(let ve=0;ve<6;ve++){Me=Te[ve].mipmaps;for(let $e=0;$e<Me.length;$e++){const lt=Me[$e];b.format!==$i?Ke!==null?Y?Pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,lt.width,lt.height,Ke,lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,lt.width,lt.height,Ke,Ne,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,ut,lt.width,lt.height,0,Ke,Ne,lt.data)}}}else{if(Me=b.mipmaps,Y&&Ae){Me.length>0&&Ve++;const ve=it(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){Y?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Ke,Ne,Te[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Te[ve].width,Te[ve].height,0,Ke,Ne,Te[ve].data);for(let $e=0;$e<Me.length;$e++){const Ot=Me[$e].image[ve].image;Y?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,Ot.width,Ot.height,Ke,Ne,Ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,ut,Ot.width,Ot.height,0,Ke,Ne,Ot.data)}}else{Y?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Ne,Te[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Ke,Ne,Te[ve]);for(let $e=0;$e<Me.length;$e++){const lt=Me[$e];Y?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,Ke,Ne,lt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,ut,Ke,Ne,lt.image[ve])}}}_(b)&&u(t.TEXTURE_CUBE_MAP),fe.__version=_e.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Fe(L,b,ee,he,_e,fe){const ke=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),qe=y(ee.internalFormat,ke,xe,ee.colorSpace),Ye=i.get(b),ye=i.get(ee);if(ye.__renderTarget=b,!Ye.__hasExternalTextures){const Te=Math.max(1,b.width>>fe),st=Math.max(1,b.height>>fe);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,qe,Te,st,b.depth,0,ke,xe,null):n.texImage2D(_e,fe,qe,Te,st,0,ke,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,_e,ye.__webglTexture,0,Ie(b)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,_e,ye.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(L,b,ee){if(t.bindRenderbuffer(t.RENDERBUFFER,L),b.depthBuffer){const he=b.depthTexture,_e=he&&he.isDepthTexture?he.type:null,fe=w(b.stencilBuffer,_e),ke=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=Ie(b);ce(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,fe,b.width,b.height):ee?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,fe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,fe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ke,t.RENDERBUFFER,L)}else{const he=b.textures;for(let _e=0;_e<he.length;_e++){const fe=he[_e],ke=s.convert(fe.format,fe.colorSpace),xe=s.convert(fe.type),qe=y(fe.internalFormat,ke,xe,fe.colorSpace),Ye=Ie(b);ee&&ce(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,qe,b.width,b.height):ce(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,qe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,qe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue(b.depthTexture,0);const _e=he.__webglTexture,fe=Ie(b);if(b.depthTexture.format===hl)ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(b.depthTexture.format===pl)ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function xt(L){const b=i.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=he}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?Ce(b.__webglFramebuffer[0],L):Ce(b.__webglFramebuffer,L)}else if(ee){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=t.createRenderbuffer(),nt(b.__webglDepthbuffer[he],L,!1);else{const _e=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,fe)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),nt(b.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function hn(L,b,ee){const he=i.get(L);b!==void 0&&Fe(he.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ee!==void 0&&xt(L)}function z(L){const b=L.texture,ee=i.get(L),he=i.get(b);L.addEventListener("dispose",I);const _e=L.textures,fe=L.isWebGLCubeRenderTarget===!0,ke=_e.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=b.version,o.memory.textures++),fe){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[xe]=[];for(let qe=0;qe<b.mipmaps.length;qe++)ee.__webglFramebuffer[xe][qe]=t.createFramebuffer()}else ee.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)ee.__webglFramebuffer[xe]=t.createFramebuffer()}else ee.__webglFramebuffer=t.createFramebuffer();if(ke)for(let xe=0,qe=_e.length;xe<qe;xe++){const Ye=i.get(_e[xe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){ee.__webglMultisampledFramebuffer=t.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const qe=_e[xe];ee.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const Ye=s.convert(qe.format,qe.colorSpace),ye=s.convert(qe.type),Te=y(qe.internalFormat,Ye,ye,qe.colorSpace,L.isXRRenderTarget===!0),st=Ie(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,Te,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ee.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(ee.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),ze(t.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)Fe(ee.__webglFramebuffer[xe][qe],L,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe);else Fe(ee.__webglFramebuffer[xe],L,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let xe=0,qe=_e.length;xe<qe;xe++){const Ye=_e[xe],ye=i.get(Ye);let Te=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,ye.__webglTexture),ze(Te,Ye),Fe(ee.__webglFramebuffer,L,Ye,t.COLOR_ATTACHMENT0+xe,Te,0),_(Ye)&&u(Te)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,he.__webglTexture),ze(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)Fe(ee.__webglFramebuffer[qe],L,b,t.COLOR_ATTACHMENT0,xe,qe);else Fe(ee.__webglFramebuffer,L,b,t.COLOR_ATTACHMENT0,xe,0);_(b)&&u(xe),n.unbindTexture()}L.depthBuffer&&xt(L)}function Pt(L){const b=L.textures;for(let ee=0,he=b.length;ee<he;ee++){const _e=b[ee];if(_(_e)){const fe=v(L),ke=i.get(_e).__webglTexture;n.bindTexture(fe,ke),u(fe),n.unbindTexture()}}}const at=[],Xe=[];function O(L){if(L.samples>0){if(ce(L)===!1){const b=L.textures,ee=L.width,he=L.height;let _e=t.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(L),xe=b.length>1;if(xe)for(let Ye=0;Ye<b.length;Ye++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const qe=L.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ye=0;Ye<b.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const ye=i.get(b[Ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,ee,he,0,0,ee,he,_e,t.NEAREST),l===!0&&(at.length=0,Xe.length=0,at.push(t.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(fe),Xe.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ye=0;Ye<b.length;Ye++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const ye=i.get(b[Ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ie(L){return Math.min(r.maxSamples,L.samples)}function ce(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(L){const b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Je(L,b){const ee=L.colorSpace,he=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Yo&&ee!==Xr&&(Lt.getTransfer(ee)===Vt?(he!==$i||_e!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function it(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=W,this.setTexture2D=ue,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=hn,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ce}function jA(t,e){function n(i,r=Xr){let s;const o=Lt.getTransfer(r);if(i===ur)return t.UNSIGNED_BYTE;if(i===dm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===cx)return t.BYTE;if(i===ux)return t.SHORT;if(i===dl)return t.UNSIGNED_SHORT;if(i===um)return t.INT;if(i===Bs)return t.UNSIGNED_INT;if(i===Sr)return t.FLOAT;if(i===Ml)return t.HALF_FLOAT;if(i===hx)return t.ALPHA;if(i===px)return t.RGB;if(i===$i)return t.RGBA;if(i===hl)return t.DEPTH_COMPONENT;if(i===pl)return t.DEPTH_STENCIL;if(i===mx)return t.RED;if(i===hm)return t.RED_INTEGER;if(i===gx)return t.RG;if(i===pm)return t.RG_INTEGER;if(i===mm)return t.RGBA_INTEGER;if(i===Fc||i===kc||i===Oc||i===zc)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===kh||i===Oh||i===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bh||i===Hh)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gh||i===Wh||i===Xh||i===jh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Jh||i===Qh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$h)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ip)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===ap||i===lp||i===cp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===op)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new as({vertexShader:qA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new H(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends Qo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,g=null,M=null;const E=typeof XRWebGLBinding<"u",_=new $A,u={},v=n.getContextAttributes();let y=null,w=null;const R=[],P=[],I=new Ze;let N=null;const T=new Mi;T.viewport=new Gt;const S=new Mi;S.viewport=new Gt;const F=[T,S],W=new gw;let te=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ge=R[V];return ge===void 0&&(ge=new hf,R[V]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(V){let ge=R[V];return ge===void 0&&(ge=new hf,R[V]=ge),ge.getGripSpace()},this.getHand=function(V){let ge=R[V];return ge===void 0&&(ge=new hf,R[V]=ge),ge.getHandSpace()};function ue(V){const ge=P.indexOf(V.inputSource);if(ge===-1)return;const Fe=R[ge];Fe!==void 0&&(Fe.update(V.inputSource,V.frame,c||o),Fe.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let V=0;V<R.length;V++){const ge=P[V];ge!==null&&(P[V]=null,R[V].disconnect(ge))}te=null,ae=null,_.reset();for(const V in u)delete u[V];e.setRenderTarget(y),g=null,m=null,p=null,r=null,w=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,nt=null,Ce=null;v.depth&&(Ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Fe=v.stencil?pl:hl,nt=v.stencil?fl:Bs);const xt={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(xt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new Hs(m.textureWidth,m.textureHeight,{format:$i,type:ur,depthTexture:new Ax(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Fe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Hs(g.framebufferWidth,g.framebufferHeight,{format:$i,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(V){for(let ge=0;ge<V.removed.length;ge++){const Fe=V.removed[ge],nt=P.indexOf(Fe);nt>=0&&(P[nt]=null,R[nt].disconnect(Fe))}for(let ge=0;ge<V.added.length;ge++){const Fe=V.added[ge];let nt=P.indexOf(Fe);if(nt===-1){for(let xt=0;xt<R.length;xt++)if(xt>=P.length){P.push(Fe),nt=xt;break}else if(P[xt]===null){P[xt]=Fe,nt=xt;break}if(nt===-1)break}const Ce=R[nt];Ce&&Ce.connect(Fe)}}const k=new B,ne=new B;function oe(V,ge,Fe){k.setFromMatrixPosition(ge.matrixWorld),ne.setFromMatrixPosition(Fe.matrixWorld);const nt=k.distanceTo(ne),Ce=ge.projectionMatrix.elements,xt=Fe.projectionMatrix.elements,hn=Ce[14]/(Ce[10]-1),z=Ce[14]/(Ce[10]+1),Pt=(Ce[9]+1)/Ce[5],at=(Ce[9]-1)/Ce[5],Xe=(Ce[8]-1)/Ce[0],O=(xt[8]+1)/xt[0],Ie=hn*Xe,ce=hn*O,de=nt/(-Xe+O),Je=de*-Xe;if(ge.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Je),V.translateZ(de),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ce[10]===-1)V.projectionMatrix.copy(ge.projectionMatrix),V.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const it=hn+de,L=z+de,b=Ie-Je,ee=ce+(nt-Je),he=Pt*z/L*it,_e=at*z/L*it;V.projectionMatrix.makePerspective(b,ee,he,_e,it,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ee(V,ge){ge===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ge.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ge=V.near,Fe=V.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(Fe=_.depthFar)),W.near=S.near=T.near=ge,W.far=S.far=T.far=Fe,(te!==W.near||ae!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),te=W.near,ae=W.far),W.layers.mask=V.layers.mask|6,T.layers.mask=W.layers.mask&3,S.layers.mask=W.layers.mask&5;const nt=V.parent,Ce=W.cameras;Ee(W,nt);for(let xt=0;xt<Ce.length;xt++)Ee(Ce[xt],nt);Ce.length===2?oe(W,T,S):W.projectionMatrix.copy(T.projectionMatrix),ze(V,W,nt)};function ze(V,ge,Fe){Fe===null?V.matrix.copy(ge.matrixWorld):(V.matrix.copy(Fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ge.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ge.projectionMatrix),V.projectionMatrixInverse.copy(ge.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=up*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(V){l=V,m!==null&&(m.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(V){return u[V]};let dt=null;function Re(V,ge){if(h=ge.getViewerPose(c||o),M=ge,h!==null){const Fe=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let nt=!1;Fe.length!==W.cameras.length&&(W.cameras.length=0,nt=!0);for(let z=0;z<Fe.length;z++){const Pt=Fe[z];let at=null;if(g!==null)at=g.getViewport(Pt);else{const O=p.getViewSubImage(m,Pt);at=O.viewport,z===0&&(e.setRenderTargetTextures(w,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(w))}let Xe=F[z];Xe===void 0&&(Xe=new Mi,Xe.layers.enable(z),Xe.viewport=new Gt,F[z]=Xe),Xe.matrix.fromArray(Pt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Pt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(at.x,at.y,at.width,at.height),z===0&&(W.matrix.copy(Xe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),nt===!0&&W.cameras.push(Xe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const z=p.getDepthInformation(Fe[0]);z&&z.isValid&&z.texture&&_.init(z,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let z=0;z<Fe.length;z++){const Pt=Fe[z].camera;if(Pt){let at=u[Pt];at||(at=new bx,u[Pt]=at);const Xe=p.getCameraImage(Pt);at.sourceTexture=Xe}}}}for(let Fe=0;Fe<R.length;Fe++){const nt=P[Fe],Ce=R[Fe];nt!==null&&Ce!==void 0&&Ce.update(nt,ge,c||o)}dt&&dt(V,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),M=null}const le=new Lx;le.setAnimationLoop(Re),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}const ys=new er,ZA=new en;function JA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,wx(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,y,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),h(_,u)):u.isMeshStandardMaterial?(s(_,u),m(_,u),u.isMeshPhysicalMaterial&&g(_,u,w)):u.isMeshMatcapMaterial?(s(_,u),M(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),E(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,y):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===mi&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===mi&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),y=v.envMap,w=v.envMapRotation;y&&(_.envMap.value=y,ys.copy(w),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(ys)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,y){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=y*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function m(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mi&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,u){u.matcap&&(_.matcap.value=u.matcap)}function E(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const w=y.program;i.uniformBlockBinding(v,w)}function c(v,y){let w=r[v.id];w===void 0&&(M(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",_));const R=y.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(m(v),s[v.id]=P)}function h(v){const y=p();v.__bindingPointIndex=y;const w=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,w),w}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const y=r[v.id],w=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let P=0,I=w.length;P<I;P++){const N=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,S=N.length;T<S;T++){const F=N[T];if(g(F,P,T,R)===!0){const W=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let ue=0;ue<te.length;ue++){const G=te[ue],Z=E(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,W+ae,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,ae),ae+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,y,w,R){const P=v.value,I=y+"_"+w;if(R[I]===void 0)return typeof P=="number"||typeof P=="boolean"?R[I]=P:R[I]=P.clone(),!0;{const N=R[I];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return R[I]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function M(v){const y=v.uniforms;let w=0;const R=16;for(let I=0,N=y.length;I<N;I++){const T=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,F=T.length;S<F;S++){const W=T[S],te=Array.isArray(W.value)?W.value:[W.value];for(let ae=0,ue=te.length;ae<ue;ae++){const G=te[ae],Z=E(G),k=w%R,ne=k%Z.boundary,oe=k+ne;w+=ne,oe!==0&&R-oe<Z.storage&&(w+=R-oe),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=Z.storage}}}const P=w%R;return P>0&&(w+=R-P),v.__size=w,v.__cache={},this}function E(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){const y=v.target;y.removeEventListener("dispose",_);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class eb{constructor(e={}){const{canvas:n=yS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=new Uint32Array(4),E=new Int32Array(4);let _=null,u=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=Bn;let P=0,I=0,N=null,T=-1,S=null;const F=new Gt,W=new Gt;let te=null;const ae=new St(0);let ue=0,G=n.width,Z=n.height,k=1,ne=null,oe=null;const Ee=new Gt(0,0,G,Z),ze=new Gt(0,0,G,Z);let dt=!1;const Re=new Mm;let le=!1,V=!1;const ge=new en,Fe=new B,nt=new Gt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function hn(){return N===null?k:1}let z=i;function Pt(C,K){return n.getContext(C,K)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lm}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",Me,!1),z===null){const K="webgl2";if(z=Pt(K,C),z===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,Xe,O,Ie,ce,de,Je,it,L,b,ee,he,_e,fe,ke,xe,qe,Ye,ye,Te,st,Ke,Ne,ut;function Y(){at=new u3(z),at.init(),Ke=new jA(z,at),Xe=new i3(z,at,e,Ke),O=new WA(z,at),Xe.reversedDepthBuffer&&m&&O.buffers.depth.setReversed(!0),Ie=new h3(z),ce=new IA,de=new XA(z,at,O,ce,Xe,Ke,Ie),Je=new s3(w),it=new c3(w),L=new xw(z),Ne=new t3(z,L),b=new d3(z,L,Ie,Ne),ee=new m3(z,b,L,Ie),ye=new p3(z,Xe,de),xe=new r3(ce),he=new PA(w,Je,it,at,Xe,Ne,xe),_e=new JA(w,ce),fe=new DA,ke=new zA(at),Ye=new e3(w,Je,it,O,ee,g,l),qe=new VA(w,ee,Xe),ut=new QA(z,Ie,Xe,O),Te=new n3(z,at,Ie),st=new f3(z,at,Ie),Ie.programs=he.programs,w.capabilities=Xe,w.extensions=at,w.properties=ce,w.renderLists=fe,w.shadowMap=qe,w.state=O,w.info=Ie}Y();const Ae=new KA(w,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,Z,!1))},this.getSize=function(C){return C.set(G,Z)},this.setSize=function(C,K,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,Z=K,n.width=Math.floor(C*k),n.height=Math.floor(K*k),re===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(G*k,Z*k).floor()},this.setDrawingBufferSize=function(C,K,re){G=C,Z=K,k=re,n.width=Math.floor(C*re),n.height=Math.floor(K*re),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,K,re,se){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,K,re,se),O.viewport(F.copy(Ee).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,K,re,se){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,K,re,se),O.scissor(W.copy(ze).multiplyScalar(k).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){O.setScissorTest(dt=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,re=!0){let se=0;if(C){let J=!1;if(N!==null){const Se=N.texture.format;J=Se===mm||Se===pm||Se===hm}if(J){const Se=N.texture.type,De=Se===ur||Se===Bs||Se===dl||Se===fl||Se===dm||Se===fm,je=Ye.getClearColor(),Ue=Ye.getClearAlpha(),rt=je.r,ot=je.g,et=je.b;De?(M[0]=rt,M[1]=ot,M[2]=et,M[3]=Ue,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=rt,E[1]=ot,E[2]=et,E[3]=Ue,z.clearBufferiv(z.COLOR,0,E))}else se|=z.COLOR_BUFFER_BIT}K&&(se|=z.DEPTH_BUFFER_BIT),re&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Ye.dispose(),fe.dispose(),ke.dispose(),ce.dispose(),Je.dispose(),it.dispose(),ee.dispose(),Ne.dispose(),ut.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Zn),Ae.removeEventListener("sessionend",ta),zi.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Ie.autoReset,K=qe.enabled,re=qe.autoUpdate,se=qe.needsUpdate,J=qe.type;Y(),Ie.autoReset=C,qe.enabled=K,qe.autoUpdate=re,qe.needsUpdate=se,qe.type=J}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const K=C.target;K.removeEventListener("dispose",ve),$e(K)}function $e(C){lt(C),ce.remove(C)}function lt(C){const K=ce.get(C).programs;K!==void 0&&(K.forEach(function(re){he.releaseProgram(re)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,re,se,J,Se){K===null&&(K=Ce);const De=J.isMesh&&J.matrixWorld.determinant()<0,je=ia(C,K,re,se,J);O.setMaterial(se,De);let Ue=re.index,rt=1;if(se.wireframe===!0){if(Ue=b.getWireframeAttribute(re),Ue===void 0)return;rt=2}const ot=re.drawRange,et=re.attributes.position;let vt=ot.start*rt,Dt=(ot.start+ot.count)*rt;Se!==null&&(vt=Math.max(vt,Se.start*rt),Dt=Math.min(Dt,(Se.start+Se.count)*rt)),Ue!==null?(vt=Math.max(vt,0),Dt=Math.min(Dt,Ue.count)):et!=null&&(vt=Math.max(vt,0),Dt=Math.min(Dt,et.count));const ft=Dt-vt;if(ft<0||ft===1/0)return;Ne.setup(J,se,je,re,Ue);let Wt,zt=Te;if(Ue!==null&&(Wt=L.get(Ue),zt=st,zt.setIndex(Wt)),J.isMesh)se.wireframe===!0?(O.setLineWidth(se.wireframeLinewidth*hn()),zt.setMode(z.LINES)):zt.setMode(z.TRIANGLES);else if(J.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),O.setLineWidth(tt*hn()),J.isLineSegments?zt.setMode(z.LINES):J.isLineLoop?zt.setMode(z.LINE_LOOP):zt.setMode(z.LINE_STRIP)}else J.isPoints?zt.setMode(z.POINTS):J.isSprite&&zt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))zt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,Yt=J._multiDrawCounts,Et=J._multiDrawCount,kn=Ue?L.get(Ue).bytesPerElement:1,Ir=ce.get(se).currentProgram.getUniforms();for(let Qn=0;Qn<Et;Qn++)Ir.setValue(z,"_gl_DrawID",Qn),zt.render(tt[Qn]/kn,Yt[Qn])}else if(J.isInstancedMesh)zt.renderInstances(vt,ft,J.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Yt=Math.min(re.instanceCount,tt);zt.renderInstances(vt,ft,Yt)}else zt.render(vt,ft)};function Ot(C,K,re){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=mi,C.needsUpdate=!0,bi(C,K,re),C.side=os,C.needsUpdate=!0,bi(C,K,re),C.side=Kt):bi(C,K,re)}this.compile=function(C,K,re=null){re===null&&(re=C),u=ke.get(re),u.init(K),y.push(u),re.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),C!==re&&C.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),u.setupLights();const se=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Se=J.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const je=Se[De];Ot(je,re,J),se.add(je)}else Ot(Se,re,J),se.add(Se)}),u=y.pop(),se},this.compileAsync=function(C,K,re=null){const se=this.compile(C,K,re);return new Promise(J=>{function Se(){if(se.forEach(function(De){ce.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){J(C);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function un(C){yt&&yt(C)}function Zn(){zi.stop()}function ta(){zi.start()}const zi=new Lx;zi.setAnimationLoop(un),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){yt=C,Ae.setAnimationLoop(C),C===null?zi.stop():zi.start()},Ae.addEventListener("sessionstart",Zn),Ae.addEventListener("sessionend",ta),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,K,N),u=ke.get(C,y.length),u.init(K),y.push(u),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Re.setFromProjectionMatrix(ge,or,K.reversedDepth),V=this.localClippingEnabled,le=xe.init(this.clippingPlanes,V),_=fe.get(C,v.length),_.init(),v.push(_),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Xs(Se,K,-1/0,w.sortObjects)}Xs(C,K,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(ne,oe),xt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,xt&&Ye.addToRenderList(_,C),this.info.render.frame++,le===!0&&xe.beginShadows();const re=u.state.shadowsArray;qe.render(re,C,K),le===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=_.opaque,J=_.transmissive;if(u.setupLights(),K.isArrayCamera){const Se=K.cameras;if(J.length>0)for(let De=0,je=Se.length;De<je;De++){const Ue=Se[De];js(se,J,C,Ue)}xt&&Ye.render(C);for(let De=0,je=Se.length;De<je;De++){const Ue=Se[De];na(_,C,Ue,Ue.viewport)}}else J.length>0&&js(se,J,C,K),xt&&Ye.render(C),na(_,C,K);N!==null&&I===0&&(de.updateMultisampleRenderTarget(N),de.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(w,C,K),Ne.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(u=y[y.length-1],le===!0&&xe.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function Xs(C,K,re,se){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Re.intersectsSprite(C)){se&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const De=ee.update(C),je=C.material;je.visible&&_.push(C,De,je,re,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Re.intersectsObject(C))){const De=ee.update(C),je=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),nt.copy(De.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(je)){const Ue=De.groups;for(let rt=0,ot=Ue.length;rt<ot;rt++){const et=Ue[rt],vt=je[et.materialIndex];vt&&vt.visible&&_.push(C,De,vt,re,nt.z,et)}}else je.visible&&_.push(C,De,je,re,nt.z,null)}}const Se=C.children;for(let De=0,je=Se.length;De<je;De++)Xs(Se[De],K,re,se)}function na(C,K,re,se){const J=C.opaque,Se=C.transmissive,De=C.transparent;u.setupLightsView(re),le===!0&&xe.setGlobalState(w.clippingPlanes,re),se&&O.viewport(F.copy(se)),J.length>0&&qs(J,K,re),Se.length>0&&qs(Se,K,re),De.length>0&&qs(De,K,re),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function js(C,K,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[se.id]===void 0&&(u.state.transmissionRenderTarget[se.id]=new Hs(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ml:ur,minFilter:Ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Se=u.state.transmissionRenderTarget[se.id],De=se.viewport||F;Se.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);const je=w.getRenderTarget(),Ue=w.getActiveCubeFace(),rt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(ae),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),xt&&Ye.render(re);const ot=w.toneMapping;w.toneMapping=is;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),u.setupLightsView(se),le===!0&&xe.setGlobalState(w.clippingPlanes,se),qs(C,re,se),de.updateMultisampleRenderTarget(Se),de.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Dt=0,ft=K.length;Dt<ft;Dt++){const Wt=K[Dt],zt=Wt.object,tt=Wt.geometry,Yt=Wt.material,Et=Wt.group;if(Yt.side===Kt&&zt.layers.test(se.layers)){const kn=Yt.side;Yt.side=mi,Yt.needsUpdate=!0,Ys(zt,re,se,tt,Yt,Et),Yt.side=kn,Yt.needsUpdate=!0,vt=!0}}vt===!0&&(de.updateMultisampleRenderTarget(Se),de.updateRenderTargetMipmap(Se))}w.setRenderTarget(je,Ue,rt),w.setClearColor(ae,ue),et!==void 0&&(se.viewport=et),w.toneMapping=ot}function qs(C,K,re){const se=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Se=C.length;J<Se;J++){const De=C[J],je=De.object,Ue=De.geometry,rt=De.group;let ot=De.material;ot.allowOverride===!0&&se!==null&&(ot=se),je.layers.test(re.layers)&&Ys(je,K,re,Ue,ot,rt)}}function Ys(C,K,re,se,J,Se){C.onBeforeRender(w,K,re,se,J,Se),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(w,K,re,se,C,Se),J.transparent===!0&&J.side===Kt&&J.forceSinglePass===!1?(J.side=mi,J.needsUpdate=!0,w.renderBufferDirect(re,K,se,J,C,Se),J.side=os,J.needsUpdate=!0,w.renderBufferDirect(re,K,se,J,C,Se),J.side=Kt):w.renderBufferDirect(re,K,se,J,C,Se),C.onAfterRender(w,K,re,se,J,Se)}function bi(C,K,re){K.isScene!==!0&&(K=Ce);const se=ce.get(C),J=u.state.lights,Se=u.state.shadowsArray,De=J.state.version,je=he.getParameters(C,J.state,Se,K,re),Ue=he.getProgramCacheKey(je);let rt=se.programs;se.environment=C.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(C.isMeshStandardMaterial?it:Je).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ve),rt=new Map,se.programs=rt);let ot=rt.get(Ue);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===De)return pn(C,je),ot}else je.uniforms=he.getUniforms(C),C.onBeforeCompile(je,w),ot=he.acquireProgram(je,Ue),rt.set(Ue,ot),se.uniforms=je.uniforms;const et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=xe.uniform),pn(C,je),se.needsLights=sa(C),se.lightsStateVersion=De,se.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function Jn(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function pn(C,K){const re=ce.get(C);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function ia(C,K,re,se,J){K.isScene!==!0&&(K=Ce),de.resetTextureUnits();const Se=K.fog,De=se.isMeshStandardMaterial?K.environment:null,je=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Yo,Ue=(se.isMeshStandardMaterial?it:Je).get(se.envMap||De),rt=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,Dt=!!re.morphAttributes.color;let ft=is;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ft=w.toneMapping);const Wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,zt=Wt!==void 0?Wt.length:0,tt=ce.get(se),Yt=u.state.lights;if(le===!0&&(V===!0||C!==S)){const tn=C===S&&se.id===T;xe.setState(se,C,tn)}let Et=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Yt.state.version||tt.outputColorSpace!==je||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==Ue||se.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==et||tt.morphNormals!==vt||tt.morphColors!==Dt||tt.toneMapping!==ft||tt.morphTargetsCount!==zt)&&(Et=!0):(Et=!0,tt.__version=se.version);let kn=tt.currentProgram;Et===!0&&(kn=bi(se,K,J));let Ir=!1,Qn=!1,Lr=!1;const Xt=kn.getUniforms(),Cn=tt.uniforms;if(O.useProgram(kn.program)&&(Ir=!0,Qn=!0,Lr=!0),se.id!==T&&(T=se.id,Qn=!0),Ir||S!==C){O.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(z,"projectionMatrix",C.projectionMatrix),Xt.setValue(z,"viewMatrix",C.matrixWorldInverse);const Gn=Xt.map.cameraPosition;Gn!==void 0&&Gn.setValue(z,Fe.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&Xt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Xt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Qn=!0,Lr=!0)}if(J.isSkinnedMesh){Xt.setOptional(z,J,"bindMatrix"),Xt.setOptional(z,J,"bindMatrixInverse");const tn=J.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Xt.setValue(z,"boneTexture",tn.boneTexture,de))}J.isBatchedMesh&&(Xt.setOptional(z,J,"batchingTexture"),Xt.setValue(z,"batchingTexture",J._matricesTexture,de),Xt.setOptional(z,J,"batchingIdTexture"),Xt.setValue(z,"batchingIdTexture",J._indirectTexture,de),Xt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Xt.setValue(z,"batchingColorTexture",J._colorsTexture,de));const Rn=re.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ye.update(J,re,kn),(Qn||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Xt.setValue(z,"receiveShadow",J.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Cn.envMap.value=Ue,Cn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(Cn.envMapIntensity.value=K.environmentIntensity),Qn&&(Xt.setValue(z,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&ra(Cn,Lr),Se&&se.fog===!0&&_e.refreshFogUniforms(Cn,Se),_e.refreshMaterialUniforms(Cn,se,k,Z,u.state.transmissionRenderTarget[C.id]),Hc.upload(z,Jn(tt),Cn,de)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Hc.upload(z,Jn(tt),Cn,de),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Xt.setValue(z,"center",J.center),Xt.setValue(z,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(z,"normalMatrix",J.normalMatrix),Xt.setValue(z,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const tn=se.uniformsGroups;for(let Gn=0,la=tn.length;Gn<la;Gn++){const Bi=tn[Gn];ut.update(Bi,kn),ut.bind(Bi,kn)}}return kn}function ra(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function sa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,K,re){const se=ce.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=K,ce.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const re=ce.get(C);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0};const Fu=z.createFramebuffer();this.setRenderTarget=function(C,K=0,re=0){N=C,P=K,I=re;let se=!0,J=null,Se=!1,De=!1;if(C){const Ue=ce.get(C);if(Ue.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(Ue.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Ue.__hasExternalTextures)de.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ue.__boundDepthTexture!==et){if(et!==null&&ce.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(De=!0);const ot=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?J=ot[K][re]:J=ot[K],Se=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?J=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?J=ot[re]:J=ot,F.copy(C.viewport),W.copy(C.scissor),te=C.scissorTest}else F.copy(Ee).multiplyScalar(k).floor(),W.copy(ze).multiplyScalar(k).floor(),te=dt;if(re!==0&&(J=Fu),O.bindFramebuffer(z.FRAMEBUFFER,J)&&se&&O.drawBuffers(C,J),O.viewport(F),O.scissor(W),O.setScissorTest(te),Se){const Ue=ce.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ue.__webglTexture,re)}else if(De){const Ue=K;for(let rt=0;rt<C.textures.length;rt++){const ot=ce.get(C.textures[rt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+rt,ot.__webglTexture,re,Ue)}}else if(C!==null&&re!==0){const Ue=ce.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ue.__webglTexture,re)}T=-1},this.readRenderTargetPixels=function(C,K,re,se,J,Se,De,je=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){O.bindFramebuffer(z.FRAMEBUFFER,Ue);try{const rt=C.textures[je],ot=rt.format,et=rt.type;if(!Xe.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-se&&re>=0&&re<=C.height-J&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+je),z.readPixels(K,re,se,J,Ke.convert(ot),Ke.convert(et),Se))}finally{const rt=N!==null?ce.get(N).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,K,re,se,J,Se,De,je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(K>=0&&K<=C.width-se&&re>=0&&re<=C.height-J){O.bindFramebuffer(z.FRAMEBUFFER,Ue);const rt=C.textures[je],ot=rt.format,et=rt.type;if(!Xe.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+je),z.readPixels(K,re,se,J,Ke.convert(ot),Ke.convert(et),0);const Dt=N!==null?ce.get(N).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Dt);const ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await MS(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(vt),z.deleteSync(ft),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,re=0){const se=Math.pow(2,-re),J=Math.floor(C.image.width*se),Se=Math.floor(C.image.height*se),De=K!==null?K.x:0,je=K!==null?K.y:0;de.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,De,je,J,Se),O.unbindTexture()};const oa=z.createFramebuffer(),aa=z.createFramebuffer();this.copyTextureToTexture=function(C,K,re=null,se=null,J=0,Se=null){Se===null&&(J!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=J,J=0):Se=0);let De,je,Ue,rt,ot,et,vt,Dt,ft;const Wt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(re!==null)De=re.max.x-re.min.x,je=re.max.y-re.min.y,Ue=re.isBox3?re.max.z-re.min.z:1,rt=re.min.x,ot=re.min.y,et=re.isBox3?re.min.z:0;else{const Rn=Math.pow(2,-J);De=Math.floor(Wt.width*Rn),je=Math.floor(Wt.height*Rn),C.isDataArrayTexture?Ue=Wt.depth:C.isData3DTexture?Ue=Math.floor(Wt.depth*Rn):Ue=1,rt=0,ot=0,et=0}se!==null?(vt=se.x,Dt=se.y,ft=se.z):(vt=0,Dt=0,ft=0);const zt=Ke.convert(K.format),tt=Ke.convert(K.type);let Yt;K.isData3DTexture?(de.setTexture3D(K,0),Yt=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(de.setTexture2DArray(K,0),Yt=z.TEXTURE_2D_ARRAY):(de.setTexture2D(K,0),Yt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=z.getParameter(z.UNPACK_ROW_LENGTH),kn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ir=z.getParameter(z.UNPACK_SKIP_PIXELS),Qn=z.getParameter(z.UNPACK_SKIP_ROWS),Lr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,et);const Xt=C.isDataArrayTexture||C.isData3DTexture,Cn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Rn=ce.get(C),tn=ce.get(K),Gn=ce.get(Rn.__renderTarget),la=ce.get(tn.__renderTarget);O.bindFramebuffer(z.READ_FRAMEBUFFER,Gn.__webglFramebuffer),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let Bi=0;Bi<Ue;Bi++)Xt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,J,et+Bi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(K).__webglTexture,Se,ft+Bi)),z.blitFramebuffer(rt,ot,De,je,vt,Dt,De,je,z.DEPTH_BUFFER_BIT,z.NEAREST);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||ce.has(C)){const Rn=ce.get(C),tn=ce.get(K);O.bindFramebuffer(z.READ_FRAMEBUFFER,oa),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,aa);for(let Gn=0;Gn<Ue;Gn++)Xt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rn.__webglTexture,J,et+Gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rn.__webglTexture,J),Cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Se,ft+Gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Se),J!==0?z.blitFramebuffer(rt,ot,De,je,vt,Dt,De,je,z.COLOR_BUFFER_BIT,z.NEAREST):Cn?z.copyTexSubImage3D(Yt,Se,vt,Dt,ft+Gn,rt,ot,De,je):z.copyTexSubImage2D(Yt,Se,vt,Dt,rt,ot,De,je);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Yt,Se,vt,Dt,ft,De,je,Ue,zt,tt,Wt.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(Yt,Se,vt,Dt,ft,De,je,Ue,zt,Wt.data):z.texSubImage3D(Yt,Se,vt,Dt,ft,De,je,Ue,zt,tt,Wt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,vt,Dt,De,je,zt,tt,Wt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,vt,Dt,Wt.width,Wt.height,zt,Wt.data):z.texSubImage2D(z.TEXTURE_2D,Se,vt,Dt,De,je,zt,tt,Wt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Et),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ir),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Lr),Se===0&&K.generateMipmaps&&z.generateMipmap(Yt),O.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),O.unbindTexture()},this.resetState=function(){P=0,I=0,N=null,O.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}var X1;const bt=(X1=window.Telegram)==null?void 0:X1.WebApp,H1="/yggdrasil-tma/",wc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],tb=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],V1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},G1=()=>{try{const t={...V1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...V1,watch:Date.now()}}},Ra=()=>new Date().toISOString().slice(0,10),nb=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Cf=[3,5,8,12,18,25,40],ib=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],rb=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Rf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Pa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},W1={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Pf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},If={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Br({name:t,className:e}){return j.jsx("img",{src:t.includes(".")?`${H1}img/${t}`:`${H1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const sb=`
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
`,Ms=(t,e=.9,n=0)=>new Le({color:t,roughness:e,metalness:n}),$=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function ob(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function ab(t){const e=new We,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=Ms(i,.92),c=Ms(s,.9),h=Ms(o,.96),p=Ms(r,.95),m=Ms(a,.78),g=Ms(2106150,.98),M=new H(new ci(.28,.24,5,8),h);M.position.y=.72,e.add(M);const E=new H(new ci(n?.37:.32,.56,6,10),c);E.position.y=1.15,e.add(E);const _=new H(new ci(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const u=new H(new ct(.36,.38,.09,12),h);u.position.y=.93,e.add(u);const v=new H(new Dn(.12,.12,.055),m);v.position.set(0,.93,.38),e.add(v);const y=new H(new ct(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const w=new H(new mt(.31,16,12),l);w.scale.set(.92,1.06,.92),w.position.y=1.91,e.add(w);const R=new H(new mt(.325,14,10),p);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new H(new ci(.18,.3,5,8),p);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const I=new H(new _n(.045,.13,5),l);I.rotation.x=Math.PI/2,I.position.set(0,1.92,.3),e.add(I);const N=new Le({color:1513754,roughness:.55});for(const ne of[-.105,.105]){const oe=new H(new mt(.025,7,5),N);oe.position.set(ne,1.98,.285),e.add(oe)}if(n){const ne=new H(new mt(.19,10,7),p);ne.scale.set(.82,1,.72),ne.position.set(0,1.8,.24),e.add(ne)}else{const ne=new H(new ci(.055,.42,4,7),p);ne.position.set(-.27,1.78,-.08),ne.rotation.z=-.22,e.add(ne)}const T=ne=>{const oe=new We;oe.position.set(ne*(n?.43:.39),1.43,0),oe.rotation.z=ne*.07;const Ee=new H(new ci(.105,.42,5,7),c);Ee.position.y=-.23,oe.add(Ee);const ze=new We;ze.position.y=-.46,oe.add(ze);const dt=new H(new ci(.085,.34,5,7),h);dt.position.y=-.2,ze.add(dt);const Re=new H(new mt(.105,9,7),l);return Re.position.y=-.43,ze.add(Re),e.add(oe),{upper:oe,elbow:ze}},S=T(-1),F=T(1),W=ne=>{const oe=new We;oe.position.set(ne*.15,.68,0);const Ee=new H(new ci(.12,.42,5,7),g);Ee.position.y=-.23,oe.add(Ee);const ze=new We;ze.position.y=-.48,oe.add(ze);const dt=new H(new ci(.095,.4,5,7),g);dt.position.y=-.22,ze.add(dt);const Re=new H(new ci(.13,.24,5,7),h);return Re.scale.z=1.25,Re.position.set(0,-.47,.075),ze.add(Re),e.add(oe),oe},te=W(-1),ae=W(1),ue=new H(new ci(.42,.1,5,8),h);ue.scale.z=.72,ue.position.y=1.48,e.add(ue);const G=new H(new Dn(.58,.92,.075),Ms(t.id==="berserk"?2821132:1582894,.98));G.position.set(0,1.05,-.28),G.rotation.x=-.035,e.add(G);const Z=new We;if(t.id==="berserk"||t.id==="dwarf"){const ne=new H(new ct(.035,.045,.72,7),h);ne.position.y=.36,Z.add(ne);const oe=new H(new Dn(.16,.34,.055),m);oe.position.set(0,.88,0),oe.rotation.z=t.id==="dwarf"?-.22:.22,Z.add(oe)}else{const ne=new H(new ct(.028,.04,1.1,7),h);ne.position.y=.52,Z.add(ne);const oe=new H(new _n(.075,.25,6),m);oe.position.y=1.18,Z.add(oe)}if(Z.position.set(.43,.32,.03),Z.rotation.z=-.12,e.add(Z),t.id==="viking"||t.id==="berserk"){const ne=new H(new ct(.3,.3,.1,16),h);ne.rotation.x=Math.PI/2,ne.position.set(0,1.12,-.37),e.add(ne);const oe=new H(new mt(.065,8,6),m);oe.position.set(0,1.12,-.43),e.add(oe)}const k=new H(new ti(.62,24),new Ct({color:0,transparent:!0,opacity:.32}));return k.rotation.x=-Math.PI/2,k.position.y=.02,e.add(k),e.userData.anim={armL:S,armR:F,legL:te,legR:ae,weapon:Z,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},ob(e)}function lb({h:t,on:e,eventDone:n}){const i=Tt.useRef(null),r=Tt.useRef(null),s=Tt.useRef(null),o=Tt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Tt.useState(""),[c,h]=Tt.useState(!1),[p,m]=Tt.useState(!1),[g,M]=Tt.useState(!1),[E,_]=Tt.useState(!1),u=Tt.useRef({x:0,z:1}),v=Tt.useRef(!1),y=Tt.useRef(null);Tt.useEffect(()=>{const T=i.current;if(!T)return;const S=new jS;S.background=new St(9415072),S.fog=new ym(7901576,.0042);const F=new Mi(54,1,.1,280);F.position.set(0,8.5,17);const W=new eb({antialias:!0,powerPreference:"high-performance"});W.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),W.shadowMap.enabled=!0,W.shadowMap.type=ox,W.outputColorSpace=Bn,W.toneMapping=ax,W.toneMappingExposure=1.16,T.appendChild(W.domElement);const te=new hw(14151649,3361336,1.35);S.add(te);const ae=new h1(16770232,3.15);ae.position.set(-42,58,34),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.left=-95,ae.shadow.camera.right=95,ae.shadow.camera.top=95,ae.shadow.camera.bottom=-95,ae.shadow.bias=-5e-4,S.add(ae);const ue=new h1(12178114,.95);ue.position.set(55,18,-60),S.add(ue);const G=(d,x)=>{const f=Math.sin(d*.075)*.7+Math.cos(x*.062)*.55+Math.sin((d-x)*.045)*.35,A=Math.exp(-(d*d/850+(x+2)*(x+2)/1050)),U=Math.exp(-(d*d/150+(x-12)*(x-12)/2200));return f*(1-A*.88)-U*.18},Z=d=>{const x=document.createElement("canvas");x.width=x.height=512;const f=x.getContext("2d"),A=D=>Math.abs(Math.sin(D*12.9898)*43758.5453)%1;if(d==="ground"){f.fillStyle="#4c6042",f.fillRect(0,0,512,512);for(let D=0;D<1800;D++){const X=A(D*1.17)*512,Q=A(D*2.31)*512,ie=10+A(D*3.71)*28,q=A(D*4.13);f.fillStyle=q>.72?`rgba(96,108,63,${.08+A(D)*.12})`:`rgba(30,36,25,${.05+A(D)*.12})`,f.beginPath(),f.arc(X,Q,ie,0,Math.PI*2),f.fill()}for(let D=0;D<650;D++){const X=A(D*7.1)*512,Q=A(D*8.2)*512;f.strokeStyle=`rgba(142,154,91,${.18+A(D*2)*.15})`,f.lineWidth=1+A(D*4)*1.5,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(D*5)-.5)*5,Q-3-A(D*6)*5),f.stroke()}}else if(d==="wood"){f.fillStyle="#5a3d29",f.fillRect(0,0,512,512);for(let D=0;D<512;D+=22)f.fillStyle=`rgba(25,15,9,${.18+A(D)*.13})`,f.fillRect(0,D,512,3),f.strokeStyle=`rgba(154,111,69,${.08+A(D*2)*.08})`,f.lineWidth=2,f.beginPath(),f.moveTo(0,D+7),f.bezierCurveTo(150,D+2,340,D+13,512,D+5),f.stroke();for(let D=0;D<65;D++){const X=A(D*2.1)*512;f.fillStyle=`rgba(20,12,8,${.12+A(D*3)*.16})`,f.fillRect(X,0,2+A(D*4)*3,512)}}else if(d==="roof"){f.fillStyle="#252522",f.fillRect(0,0,512,512);for(let D=-30;D<550;D+=25){f.fillStyle=`rgba(105,94,77,${.12+A(D)*.08})`,f.fillRect(0,D,512,2),f.strokeStyle="rgba(12,12,11,.48)",f.lineWidth=3;for(let X=-40;X<560;X+=38)f.beginPath(),f.moveTo(X,D),f.lineTo(X-18,D+28),f.stroke()}for(let D=0;D<180;D++)f.fillStyle=`rgba(170,154,123,${.03+A(D)*.07})`,f.fillRect(A(D*2)*512,A(D*3)*512,2+A(D*4)*7,2)}else if(d==="bark"){f.fillStyle="#7b5a3f",f.fillRect(0,0,512,512);for(let D=0;D<76;D++){const X=A(D*2.1)*512,Q=2+A(D*3.7)*7;f.fillStyle=`rgba(${24+A(D)*24},${16+A(D*4)*18},${10+A(D*5)*14},${.18+A(D*6)*.22})`,f.fillRect(X,0,Q,512)}for(let D=0;D<80;D++){const X=A(D*7.1)*512,Q=A(D*8.2)*512;f.strokeStyle=`rgba(126,91,60,${.07+A(D*2)*.09})`,f.lineWidth=1+A(D*3)*2,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(D*4)-.5)*12,Q+18+A(D*5)*45),f.stroke()}}else if(d==="foliage"){f.fillStyle="#68865a",f.fillRect(0,0,512,512);for(let D=0;D<1900;D++){const X=A(D*1.17)*512,Q=A(D*2.31)*512,ie=A(D*3.7),q=ie>.72?112:ie>.36?92:74,pe=ie>.72?145:ie>.36?121:98,me=ie>.72?76:ie>.36?60:48;f.fillStyle=`rgba(${q},${pe},${me},${.16+A(D*4)*.28})`,f.beginPath(),f.arc(X,Q,1.5+A(D*5)*4.5,0,Math.PI*2),f.fill()}for(let D=0;D<260;D++){const X=A(D*9.1)*512,Q=A(D*10.2)*512;f.strokeStyle=`rgba(18,31,22,${.08+A(D*3)*.12})`,f.lineWidth=1,f.beginPath(),f.moveTo(X,Q),f.lineTo(X+(A(D*2)-.5)*10,Q+(A(D*4)-.5)*10),f.stroke()}}else{f.fillStyle="#514333",f.fillRect(0,0,512,512);for(let D=0;D<1300;D++){const X=A(D*1.3)*512,Q=A(D*2.7)*512;f.fillStyle=`rgba(${45+A(D*3)*38},${35+A(D*4)*28},${23+A(D*5)*20},${.08+A(D*6)*.18})`,f.fillRect(X,Q,2+A(D*7)*7,1+A(D*8)*4)}}const U=new vc(x);return U.wrapS=U.wrapT=Fo,U.colorSpace=Bn,U.anisotropy=4,U},k=Z("ground");k.repeat.set(5,6);const ne=Z("bark");ne.wrapS=ne.wrapT=Fo,ne.repeat.set(1.2,1.8);const oe=Z("foliage");oe.wrapS=oe.wrapT=Fo,oe.repeat.set(1.35,1.35);const Ee=new Yn(190,190,62,62),ze=Ee.attributes.position;for(let d=0;d<ze.count;d++){const x=ze.getX(d),f=-ze.getY(d);ze.setZ(d,G(x,f))}Ee.rotateX(-Math.PI/2),Ee.computeVertexNormals();const dt=new H(Ee,new xc({map:k}));dt.receiveShadow=!0,S.add(dt);const Re=(d,x,f)=>(x&&(d.userData={id:x,label:f||x}),d.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),S.add(d),x&&Ce.push(d),d),le=(d,x=.9,f=0)=>new Le({color:d,roughness:x,metalness:f}),V=(d,x,f,A,U=.9)=>new H(new Dn(d,x,f),le(A,U)),ge=(d,x,f,A=10,U=.9)=>new H(new ct(d,d,x,A),le(f,U)),Fe=(d,x,f)=>{const A=ge(x,d,f,10,.96);return A.rotation.z=Math.PI/2,A},nt=(d,x,f)=>{const A=new We,U=d*.62,D=.61,X=new Le({map:Ye,color:f,roughness:.96,side:Kt}),Q=new H(new Dn(U,.18,x),X),ie=Q.clone();return Q.rotation.z=D,ie.rotation.z=-D,Q.position.x=-d*.205,ie.position.x=d*.205,A.add(Q,ie),A},Ce=[],xt=[],hn=[],z=[],Pt=[],at=.62,Xe=(d,x,f,A,U=0,D=.12)=>Pt.push({kind:"rect",x:d,z:x,w:f+D*2,d:A+D*2,rot:U}),O=(d,x,f,A=.12)=>Pt.push({kind:"circle",x:d,z:x,r:f+A}),Ie=(d,x,f,A,U,D=.12)=>Pt.push({kind:"segment",x1:d,z1:x,x2:f,z2:A,r:U+D}),ce=(d,x,f)=>{if(f.kind==="circle")return Math.hypot(d-f.x,x-f.z)<f.r+at;if(f.kind==="rect"){const q=Math.cos(f.rot),pe=Math.sin(f.rot),me=d-f.x,Be=x-f.z,be=q*me-pe*Be,Qe=pe*me+q*Be,ht=Math.max(-f.w/2,Math.min(f.w/2,be)),It=Math.max(-f.d/2,Math.min(f.d/2,Qe));return Math.hypot(be-ht,Qe-It)<at}const A=f.x2-f.x1,U=f.z2-f.z1,D=A*A+U*U,X=D>0?Math.max(0,Math.min(1,((d-f.x1)*A+(x-f.z1)*U)/D)):0,Q=f.x1+A*X,ie=f.z1+U*X;return Math.hypot(d-Q,x-ie)<f.r+at},de=(d,x)=>v.current?d<In-2.72||d>In+2.72||x<Sn-2.05||x>Sn+2.3:Pt.some(f=>ce(d,x,f)),Je=(d,x,f)=>{if(v.current){const D=Math.max(In-2.55,Math.min(In+2.55,x)),X=Math.max(Sn-1.92,Math.min(Sn+2.55,f));d.x=D,d.z=X;return}const A=Math.max(-88,Math.min(88,x)),U=Math.max(-89,Math.min(89,f));if(!de(A,U)){d.x=A,d.z=U;return}de(A,d.z)||(d.x=A),de(d.x,U)||(d.z=U)},it=le(3425343,1);for(let d=0;d<22;d++){const x=new We,f=-105+d*10,A=8+$(d,7)*9,U=new H(new _n(A,18+$(d,8)*16,7),it);U.position.y=8,x.add(U),x.position.set(f,-1,-94+$(d,9)*11),Re(x)}const L=[];for(let d=0;d<=32;d++)L.push({z:-94+d*6,x:-57+Math.sin(d*.42)*4.2});const b=[],ee=[],he=5.4;for(let d=0;d<L.length;d++){const x=L[d],f=L[Math.max(0,d-1)],A=L[Math.min(L.length-1,d+1)],U=A.x-f.x,D=A.z-f.z,X=Math.max(.001,Math.hypot(U,D)),Q=-D/X,ie=U/X,q=G(x.x,x.z)+.055;for(const pe of[-1,1]){const me=he*pe;b.push(x.x+Q*me,q+Math.sin(d*1.7+pe)*.035,x.z+ie*me)}if(d<L.length-1){const pe=d*2;ee.push(pe,pe+1,pe+2,pe+1,pe+3,pe+2)}}const _e=new gn;_e.setAttribute("position",new At(b,3)),_e.setIndex(ee),_e.computeVertexNormals();const fe=new H(_e,new Le({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));fe.receiveShadow=!0,S.add(fe);const ke=[];for(let d=0;d<34;d++){const x=L[Math.min(L.length-1,Math.floor(d*.94))],f=.7+$(d,1500)*1.35,A=new H(new Em(f*.45,f,12),new Ct({color:10998996,transparent:!0,opacity:.12,side:Kt}));A.rotation.x=-Math.PI/2,A.scale.y=.42,A.position.set(x.x+($(d,1501)-.5)*4.5,G(x.x,x.z)+.075,x.z+($(d,1502)-.5)*4),S.add(A),ke.push({mesh:A,phase:$(d,1503)*Math.PI*2})}for(let d=0;d<52;d++){const x=Math.min(L.length-1,Math.floor(d*.62)),f=L[x],A=L[Math.max(0,x-1)],U=L[Math.min(L.length-1,x+1)],D=U.x-A.x,X=U.z-A.z,Q=Math.max(.001,Math.hypot(D,X)),ie=d%2===0?-1:1,q=.34+$(d,15)*.72,pe=he+ie*(.25+$(d,16)*1.4),me=new H(new qt(q,1),le(6185562,1));me.position.set(f.x+-X/Q*pe,G(f.x,f.z)+.18,f.z+D/Q*pe),me.scale.y=.5+$(d,17)*.35,Re(me),O(me.position.x,me.position.z,q*.75,.03)}const xe=(d,x)=>{const f=d.map(([Q,ie])=>new B(Q,G(Q,ie)+.035,ie)),A=[],U=[];for(let Q=0;Q<f.length;Q++){const ie=f[Math.max(0,Q-1)],q=f[Math.min(f.length-1,Q+1)],pe=q.x-ie.x,me=q.z-ie.z,Be=Math.max(.001,Math.hypot(pe,me)),be=-me/Be,Qe=pe/Be;if(A.push(f[Q].x+be*x/2,f[Q].y,f[Q].z+Qe*x/2,f[Q].x-be*x/2,f[Q].y+.01,f[Q].z-Qe*x/2),Q<f.length-1){const ht=Q*2;U.push(ht,ht+1,ht+2,ht+1,ht+3,ht+2)}}const D=new gn;D.setAttribute("position",new At(A,3)),D.setIndex(U),D.computeVertexNormals();const X=new H(D,new Le({map:Z("road"),roughness:1}));X.receiveShadow=!0,S.add(X),[-x*.22,x*.22].forEach(Q=>{const ie=f.map((me,Be)=>{const be=f[Math.max(0,Be-1)],Qe=f[Math.min(f.length-1,Be+1)],ht=Qe.x-be.x,It=Qe.z-be.z,rn=Math.max(.001,Math.hypot(ht,It));return new B(me.x+-It/rn*Q,me.y+.045,me.z+ht/rn*Q)}),q=new qa(new dp(ie),Math.max(12,f.length*4),.055,5,!1),pe=new H(q,le(3352863,1));pe.scale.y=.12,S.add(pe)})};xe([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),xe([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),xe([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),xe([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),xe([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),xe([[4,14],[-3,22],[-7,31],[-8,42]],3.8),xe([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),xe([[4,14],[10,28],[18,41],[27,57]],3.8),xe([[5,31],[15,45],[27,57],[39,70]],3.7),xe([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),xe([[-39,-8],[-47,-12],[-53,-15]],3.4);const qe=Z("wood");qe.repeat.set(2,1);const Ye=Z("roof");Ye.repeat.set(2,2);const ye=(d,x,f,A,U,D,X,Q,ie)=>{const q=new We;q.rotation.y=U,q.position.set(d,G(d,x),x),q.userData={id:X,label:D};const pe=new Le({map:qe,color:Q,roughness:.94}),me=V(f+.7,.55,A+.7,5724755,1);me.position.y=.28,q.add(me);for(let Nt=0;Nt<7;Nt++){const Ut=.62+Nt*.47,dn=Fe(f-Nt%2*.2,.29,Q);dn.material=pe,dn.position.set(0,Ut,A*.5-.03),q.add(dn);const On=dn.clone();On.position.z=-A*.5+.03,q.add(On);const ai=Fe(A+.06,.29,Q);ai.material=pe,ai.rotation.y=Math.PI/2,ai.position.set(-f*.5+.03,Ut,0),q.add(ai);const He=ai.clone();He.position.x=f*.5-.03,q.add(He)}for(const Nt of[-f*.5,f*.5])for(const Ut of[-A*.5,A*.5]){const dn=ge(.34,3.75,3482649,8,1);dn.position.set(Nt,2.05,Ut),q.add(dn)}const Be=V(1.18,2.05,.18,2365458,1);Be.position.set(0,1.37,A*.5+.31),q.add(Be);for(const Nt of[-.67,.67]){const Ut=V(.15,2.28,.24,3811613,1);Ut.position.set(Nt,1.42,A*.5+.34),q.add(Ut)}const be=Fe(1.65,.11,3679770);be.position.set(0,2.53,A*.5+.34),q.add(be);const Qe=ge(.055,.12,13015634,8,.55);Qe.rotation.z=Math.PI/2,Qe.position.set(.33,1.38,A*.5+.43),q.add(Qe);const ht=new Le({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Nt of[-f*.27,f*.27]){const Ut=V(1.28,1.02,.13,3154457,1);Ut.position.set(Nt,2.02,A*.5+.29),q.add(Ut);const dn=V(.94,.7,.055,15251295,.45);dn.material=ht,dn.position.set(Nt,2.02,A*.5+.36),q.add(dn);const On=V(.07,.78,.09,3154457,1);On.position.set(Nt,2.02,A*.5+.4),q.add(On);const ai=V(1.05,.07,.09,3154457,1);ai.position.set(Nt,2.02,A*.5+.4),q.add(ai)}const It=nt(f+1.55,A+1.35,ie);It.position.y=4.18,q.add(It);for(const Nt of[-1,1]){const Ut=Fe(A+1.48,.12,3154715);Ut.position.set(Nt*(f*.46),3.78,0),Ut.rotation.y=Math.PI/2,q.add(Ut)}const rn=Fe(A+1.45,.18,2760730);rn.rotation.y=Math.PI/2,rn.position.y=5.28,q.add(rn);const kt=V(f*.34,.16,1.05,6439467,1);kt.position.set(0,.64,A*.5+.66),q.add(kt);for(const Nt of[-f*.16,f*.16]){const Ut=Fe(.85,.08,4796447);Ut.rotation.y=Math.PI/2,Ut.position.set(Nt,.83,A*.5+.95),q.add(Ut)}const $t=ge(.34,2,5722958,8,1);$t.position.set(f*.25,5.05,-A*.1),q.add($t);const jt=V(.72,.14,.72,3157289,1);jt.position.set(f*.25,6.08,-A*.1),q.add(jt),Re(q,X,D),Ce.push(q),Xe(d,x,f+.85,A+.85,U,.05)};ye(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ye(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ye(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ye(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ye(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ye(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new We;Te.position.set(-10,G(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let d=0;d<7;d++){const x=.62+d*.47,f=Fe(9,.27,4401693);f.position.set(0,x,-2.85),Te.add(f);const A=Fe(6,.27,4401693);A.rotation.y=Math.PI/2,A.position.set(-4.35,x,0),Te.add(A)}for(const d of[-4.35,4.35]){const x=ge(.34,4,2825493,9,1);x.position.set(d,2,-2.85),Te.add(x)}const st=nt(9.8,7,2433825);st.position.y=4.45,Te.add(st);const Ke=Fe(7.2,.18,2169366);Ke.rotation.y=Math.PI/2,Ke.position.y=5.42,Te.add(Ke);for(const d of[-3.7,3.7]){const x=Fe(4.7,.13,2825494);x.rotation.z=d<0?-.6:.6,x.position.set(d*.48,3.15,.1),Te.add(x)}const Ne=ge(1.15,1.65,3420462,10,1);Ne.position.set(-2,.83,1.15),Te.add(Ne);const ut=ge(.88,.35,2565925,10,1);ut.position.set(-2,1.83,1.15),Te.add(ut);const Y=new H(new ti(.52,16),new Le({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));Y.rotation.y=Math.PI,Y.position.set(-2,1.02,2.23),Te.add(Y);const Ae=ge(.27,.85,2697770,8,.45);Ae.position.set(1.15,.43,1.05),Te.add(Ae);const Pe=V(1.45,.34,.58,2435114,.38);Pe.position.set(1.15,1,1.05),Te.add(Pe);const Ve=new H(new _n(.18,.72,8),le(2435114,.38,.05));Ve.rotation.z=-Math.PI/2,Ve.position.set(1.98,1,1.05),Te.add(Ve);for(let d=0;d<4;d++){const x=Fe(1.25,.045,11184548);x.rotation.z=-.35+d*.18,x.position.set(2.05+d*.18,1.12,1.34),Te.add(x)}const Me=V(1.15,.42,.62,3876893,1);Me.position.set(2.15,.72,-.8),Me.rotation.z=-.18,Te.add(Me);const ve=ge(.07,.55,5980979,8,1);ve.rotation.z=Math.PI/2,ve.position.set(1.55,.84,-.8),Te.add(ve),Re(Te,"forge","Кузница"),Ce.push(Te),Xe(-10,-5,9.6,6.6,0,.05);const $e=new Li(16742962,3.4,14,2);$e.position.set(-12,G(-12,-5)+2.2,-4),S.add($e);const lt=new H(new ti(8.5,32),new Le({color:7035463,roughness:1}));lt.rotation.x=-Math.PI/2,lt.position.set(1,G(1,0)+.05,0),lt.receiveShadow=!0,S.add(lt);for(let d=0;d<18;d++){const x=d/18*Math.PI*2,f=new H(new qt(.38,1),le(7039843,1));f.position.set(1+Math.cos(x)*8.8,G(1+Math.cos(x)*8.8,Math.sin(x)*8.8)+.22,Math.sin(x)*8.8),S.add(f)}const Ot=(d,x)=>{const f=new We,A=V(2.8,.22,1,6832937,1);A.position.y=1.05,f.add(A);for(const U of[-1.05,1.05]){const D=V(.16,1,.16,3877149,1);D.position.set(U,.5,-.32),f.add(D);const X=D.clone();X.position.z=.32,f.add(X)}f.position.set(d,G(d,x),x),S.add(f)};Ot(-4,2),Ot(7,3);const yt=(d,x,f)=>{const A=new We;A.position.set(d,G(d,x),x);for(let q=0;q<7;q++){const pe=q/7*Math.PI*2,me=new H(new qt(.32*f,1),le(6117970,1));me.position.set(Math.cos(pe)*.7*f,.25*f,Math.sin(pe)*.7*f),A.add(me)}const U=V(.2*f,.2*f,1.5*f,4861211,1),D=U.clone();U.rotation.y=.55,D.rotation.y=-.55,U.position.y=D.position.y=.38*f,A.add(U,D);const X=new Le({color:16744744,emissive:16731402,emissiveIntensity:4}),Q=new H(new _n(.5*f,1.35*f,8),X);Q.position.y=1.02*f,A.add(Q),S.add(A);const ie=new Li(16747068,2.4*f,12*f,2);return ie.position.set(d,G(d,x)+2*f,x),S.add(ie),xt.push({light:ie,flame:Q,phase:$(d,x)*8}),A};yt(1,0,1.15),yt(18,-15,.72);const un=(d,x,f,A,U=1.25)=>{const D=new We,X=f-d,Q=A-x,ie=Math.hypot(X,Q),q=Math.max(1,Math.floor(ie/1.55));for(let pe=0;pe<=q;pe++){const me=pe/q,Be=d+X*me,be=x+Q*me,Qe=V(.18,U,.18,4796447,1);Qe.position.set(Be,G(Be,be)+U/2,be),D.add(Qe)}for(const pe of[-.28,.38]){const me=V(.14,.14,ie,5978917,1);me.rotation.y=Math.atan2(X,Q),me.position.set((d+f)/2,G((d+f)/2,(x+A)/2)+U*pe,(x+A)/2),D.add(me)}S.add(D),Ie(d,x,f,A,.12,.02)},Zn=(d,x,f,A,U,D,X)=>{const Q=new We;Q.position.set(d,G(d,x),x),Q.rotation.y=U,Q.userData={id:X,label:D};const ie=V(f+.25,.35,A+.25,5591368,1);ie.position.y=.18,Q.add(ie);const q=new H(new Dn(f,2.5,A),new Le({map:qe,color:6439983,roughness:1}));q.position.y=1.45,Q.add(q);const pe=new H(new Dn(f+.6,.18,A+.65),new Le({map:Ye,color:2696996,roughness:1}));pe.rotation.z=.55,pe.position.set(-.16,3,0),Q.add(pe);const me=pe.clone();me.rotation.z=-.55,me.position.x=.16,Q.add(me);const Be=V(1.05,1.75,.12,2759700,1);Be.position.set(0,1.05,A/2+.07),Q.add(Be),Re(Q,X,D),Ce.push(Q),Xe(d,x,f+.55,A+.55,U,.04)},ta=(d,x,f=1)=>{const A=new We;A.position.set(d,G(d,x),x);const U=new H(new ct(.65*f,.65*f,1.2*f,10),le(9073729,1));U.rotation.z=Math.PI/2,U.position.y=.62*f,A.add(U);for(let D=0;D<3;D++){const X=new H(new Ft(.66*f,.025*f,5,18),le(5851693,1));X.rotation.y=Math.PI/2,X.position.y=(.28+D*.34)*f,A.add(X)}Re(A)},zi=(d,x,f)=>{const A=new We;A.position.set(d,G(d,x),x),A.rotation.y=f;const U=V(2.8,.28,1.45,6636331,1);U.position.y=1,A.add(U);for(const X of[-1.15,1.15])for(const Q of[-.55,.55]){const ie=V(.16,1.15,.16,4401950,1);ie.position.set(X,.55,Q),A.add(ie)}for(const X of[-1.15,1.15]){const Q=new H(new ct(.5,.5,.18,14),le(2696738,1));Q.rotation.z=Math.PI/2,Q.position.set(X,.52,-.92),A.add(Q)}const D=V(.16,.16,2.4,4796447,1);D.rotation.x=Math.PI/2,D.position.set(0,.72,-2),A.add(D),Re(A)},Xs=(d,x,f=0)=>{const A=new We;A.position.set(d,G(d,x),x),A.rotation.y=f;const U=V(2.2,.16,.5,7359021,1);U.position.y=.85,A.add(U);for(const D of[-.78,.78]){const X=V(.12,.8,.12,4139549,1);X.position.set(D,.4,0),A.add(X)}Re(A)},na=(d,x)=>{const f=new We;f.position.set(d,G(d,x),x);for(let X=0;X<10;X++){const Q=X/10*Math.PI*2,ie=V(.45,.38,.38,6710621,1);ie.position.set(Math.cos(Q)*.95,.19,Math.sin(Q)*.95),ie.rotation.y=Q,f.add(ie)}const A=V(.16,2.2,.16,4861984,1),U=A.clone();A.position.set(-.9,1.2,0),U.position.set(.9,1.2,0),f.add(A,U);const D=V(2,.16,.16,3876891,1);D.position.y=2.25,f.add(D),Re(f)};Zn(-19,31,8,5,.08,"Амбар","barn"),Zn(17,34,7,5,-.2,"Сарай","shed"),Zn(27,13,6,4,.45,"Склад рыбака","fishshed"),un(-25,27,-13,27),un(-25,27,-25,38),un(-25,38,-14,38),un(12,29,25,29),un(25,29,25,40),un(25,40,12,40),un(29,-1,39,-1),un(39,-1,39,10),un(39,10,30,10);for(const d of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])ta(d[0],d[1],d[2]);zi(-17,24,.18),zi(29,-5,-.55),Xs(-20,23,.18),Xs(25,31,-.2),ye(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ye(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ye(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ye(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Xe(-31,8,7.8,5.8,.1,.04),Xe(-27,20,7.8,5.8,-.25,.04),Xe(31,18,7.8,5.8,.32,.04),Xe(20,24,7.8,5.8,-.12,.04);const js=(d,x,f)=>{const A=new We;A.position.set(d,G(d,x),x),A.rotation.y=f;const U=V(3,.18,1.25,7357994,1);U.position.y=1.45,A.add(U);for(const X of[-1.25,1.25])for(const Q of[-.48,.48]){const ie=V(.13,1.45,.13,4270877,1);ie.position.set(X,.72,Q),A.add(ie)}const D=new H(new _n(1.65,2.5,4,1,!1,Math.PI/4),le(4798510,1));D.scale.z=.55,D.position.y=2.15,A.add(D),Re(A)};js(-5,-7,.12),js(8,-5,-.18),js(6,7,.5);for(const d of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])na(d[0],d[1]);const qs=(d,x,f=1)=>{const A=new We,U=G(d,x);for(let D=0;D<5;D++){const X=new H(new mt((.28+$(D,d)*.18)*f,8,6),le(D%2?3494457:4284223,1));X.position.set(($(D,2)-.5)*.7*f,.28*f,($(D,3)-.5)*.7*f),A.add(X)}A.position.set(d,U,x),Re(A)};for(let d=0;d<48;d++){const x=$(d,501)*Math.PI*2,f=18+$(d,502)*39,A=Math.cos(x)*f,U=Math.sin(x)*f+4;Math.abs(A)<9&&Math.abs(U)<14||qs(A,U,.65+$(d,503)*.75)}for(let d=0;d<34;d++){const x=-84+$(d,610)*168,f=-82+$(d,611)*164;if(Math.hypot(x,f-2)<24)continue;const A=.25+$(d,612)*.55,U=new H(new qt(A,1),le(5725013,1));U.scale.y=.55,U.position.set(x,G(x,f)+A*.28,f),U.rotation.set($(d,613),$(d,614),$(d,615)),Re(U),O(x,f,A*.8,.03)}ye(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Zn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),un(-70,32,-60,32),un(-70,32,-70,43),un(-70,43,-61,43),ta(-67,39,.9),zi(-61,33,-.25),na(-57,34);const Ys=new We;Ys.position.set(-63,G(-63,47),47);for(let d=0;d<6;d++){const x=V(10,.035,.12,4208682,1);x.position.set(0,.02,(d-2.5)*1.05),x.rotation.y=.06,Ys.add(x)}Re(Ys);const bi=(d,x)=>{const f=document.createElement("canvas");f.width=f.height=256;const A=f.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=x,A.shadowBlur=18,A.fillStyle=x,A.font="bold 150px serif",A.fillText(d,128,132),A.shadowBlur=4,A.globalAlpha=.55,A.font="bold 118px serif",A.fillText(d,128,132);const U=new vc(f);return U.colorSpace=Bn,U.anisotropy=4,U},Jn=(d,x,f,A,U,D=.72,X=0)=>{const Q="#"+U.toString(16).padStart(6,"0"),ie=new Ct({map:bi(A,Q),transparent:!0,depthWrite:!1,side:Kt}),q=new H(new Yn(D,D),ie);return q.rotation.x=-Math.PI/2,q.rotation.z=X,q.position.set(x,.065,f),d.add(q),q},pn=new We,ia=39,ra=70;pn.position.set(ia,G(ia,ra),ra),pn.userData={id:"runefield",label:"Поле Рун"};const sa=new Le({color:5857629,roughness:.94,metalness:.04}),Fu=new Le({color:3884096,roughness:1});new Ct({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Kt}),new Ct({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Kt}),new Ct({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Kt});const oa=new H(new ti(12.2,48),new Le({color:2636332,roughness:1,transparent:!0,opacity:.92}));oa.rotation.x=-Math.PI/2,oa.position.y=.018,pn.add(oa);const aa=new H(new ct(2.15,2.55,.48,10),Fu);aa.position.y=.24,aa.scale.z=.82,pn.add(aa);const C=new H(new qt(1.48,1),sa);C.scale.set(1,1.65,.72),C.position.y=1.38,C.rotation.y=.18,pn.add(C);const K=new H(new qt(.78,1),sa);K.scale.set(.72,1.15,.55),K.position.set(0,2.72,.02),K.rotation.z=.06,pn.add(K);const re=Jn(pn,0,0,"ᚠ",10481407,1.15,0);re.position.y=2.55,re.rotation.x=0;const se=new Li(7793407,1.7,9,2);se.position.set(0,2,.8),pn.add(se);for(const[d,x]of[[3,.075],[7.1,.065],[10.1,.045]]){const f=new H(new Ft(d,x,8,96),new Ct({color:15320941,transparent:!0,opacity:d<8?.82:.58,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.055,pn.add(f)}const J=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let d=0;d<16;d++){const x=d/16*Math.PI*2;Jn(pn,Math.cos(x)*8.55,Math.sin(x)*8.55,J[d],d%3===0?15055195:d%3===1?7857653:12093423,.62,x+.18)}for(let d=0;d<12;d++){const x=d/12*Math.PI*2+.13;Jn(pn,Math.cos(x)*5.45,Math.sin(x)*5.45,J[(d+5)%J.length],d%2?7659506:12684269,.38,x)}for(let d=0;d<10;d++){const x=d/10*Math.PI*2+.16,f=9.15+(.5-$(d,1202))*1,A=2.4+$(d,1203)*2,U=.72+$(d,1204)*.48,D=new H(new qt(.82+$(d,1205)*.22,1),sa);D.scale.set(U,A,.72+$(d,1206)*.28),D.position.set(Math.cos(x)*f,D.scale.y*.58,Math.sin(x)*f),D.rotation.set(($(d,1207)-.5)*.22,x+($(d,1208)-.5)*.3,($(d,1209)-.5)*.18),pn.add(D);const X=J[d%J.length],Q=bi(X,d%3===0?"#8eeeff":d%3===1?"#c08cff":"#ffd86b"),ie=new H(new Yn(.62,.92),new Ct({map:Q,transparent:!0,depthWrite:!1,side:Kt}));ie.position.set(D.position.x+Math.cos(x)*.68,D.position.y*.76,D.position.z+Math.sin(x)*.68),ie.rotation.y=-x+Math.PI*.5,pn.add(ie);const q=new Li(d%3===1?11628031:d%3===0?6479359:15055195,.35,3.6,2);q.position.set(D.position.x,D.position.y*.72,D.position.z),pn.add(q)}for(let d=0;d<18;d++){const x=$(d,1220)*Math.PI*2,f=6.8+$(d,1221)*4.3;Js(pn,Math.cos(x)*f,.22,Math.sin(x)*f,.28+$(d,1222)*.35,d%2?5003088:5857882,1223+d)}for(let d=0;d<10;d++){const x=$(d,1230)*Math.PI*2,f=2.6+$(d,1231)*6.6,A=new H(new ct(.06,.09,.035,7),new Le({color:10191179,metalness:.6,roughness:.45}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(x)*f,.09,Math.sin(x)*f),pn.add(A)}Re(pn,"runefield","Поле Рун"),Ce.push(pn),O(ia,ra,1.8,.08);const Se=(d,x,f,A)=>{const U=new We,D=f-d,X=A-x,Q=Math.hypot(D,X),ie=Math.floor(Q/1.7);for(let pe=0;pe<=ie;pe++){const me=pe/ie,Be=d+D*me,be=x+X*me,Qe=new H(new _n(.24,.24+2.8+$(pe,d)*.5,6),le(3942940,1));Qe.position.set(Be,G(Be,be)+1.45,be),U.add(Qe)}const q=V(.3,.35,Q,2957593,1);q.rotation.y=Math.atan2(D,X),q.position.set((d+f)/2,G((d+f)/2,(x+A)/2)+1.25,(x+A)/2),U.add(q),S.add(U),Ie(d,x,f,A,.34,.08)};Se(-30,-31,-8,-31),Se(8,-31,30,-31),Se(-30,-31,-30,-13),Se(30,-31,30,16);const De=new We;De.userData={id:"gate",label:"Ворота Мидгарда"};for(const d of[-4.2,4.2]){const x=V(.8,6,.8,3482906,1);x.position.set(d,3,-31),De.add(x)}const je=V(10,.8,1,2957336,1);je.position.set(0,6,-31),De.add(je);for(let d=-3;d<=3;d++){const x=V(1,4.2,.22,5978660,1);x.position.set(d*1.15,2,-30.7),De.add(x)}Re(De,"gate","Ворота Мидгарда"),Ce.push(De),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const Ue=new We;Ue.userData={id:"mimir",label:"Колодец Мимира"},Ue.position.set(18,G(18,15),15);for(let d=0;d<14;d++){const x=d/14*Math.PI*2,f=V(.7,.48,.5,6711907,1);f.position.set(Math.cos(x)*1.45,.24,Math.sin(x)*1.45),f.rotation.y=x+Math.PI/2,Ue.add(f)}const rt=new H(new ti(1.05,28),new Le({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));rt.rotation.x=-Math.PI/2,rt.position.y=.5,Ue.add(rt);for(const d of[-1.35,1.35]){const x=V(.22,3,.22,4861984,1);x.position.set(d,1.55,0),Ue.add(x)}const ot=V(3.1,.25,.25,3679513,1);ot.position.y=2.95,Ue.add(ot);const et=V(.55,.5,.55,5913383,1);et.position.set(0,1.65,0),Ue.add(et);const vt=new H(new Ft(1.8,.06,8,40),new Le({color:7792028,emissive:2653256,emissiveIntensity:3}));vt.rotation.x=Math.PI/2,vt.position.y=.53,Ue.add(vt),Re(Ue,"mimir","Колодец Мимира"),Ce.push(Ue),O(18,15,1.8,.08);const Dt=new Li(7530656,1.8,10,2);Dt.position.set(18,G(18,15)+1.4,15),S.add(Dt);const ft=new We;ft.userData={id:"norns",label:"Прядильня норн"},ft.position.set(-25,G(-25,43),43);const Wt=le(4927522,1),zt=le(2826523,1),tt=V(5.7,.28,.28,5847592,1);tt.position.set(0,3.8,0),ft.add(tt);const Yt=V(5,.25,.32,3877151,1);Yt.position.set(0,.65,.15),ft.add(Yt);for(const d of[-2.45,2.45]){const x=V(.28,3.55,.3,5321763,1);x.position.set(d,2.15,0),x.rotation.z=d>0?.08:-.08,ft.add(x)}const Et=new H(new Ft(2.05,.18,8,32),Wt);Et.rotation.y=Math.PI/2,Et.position.set(0,2.25,-.8),ft.add(Et);const kn=new H(new ct(.28,.32,.38,10),zt);kn.rotation.z=Math.PI/2,kn.position.set(0,2.25,-.8),ft.add(kn);for(let d=0;d<10;d++){const x=d/10*Math.PI*2,f=V(.08,.08,1.85,5913384,1);f.position.set(Math.cos(x)*.92,2.25+Math.sin(x)*.92,-.8),f.rotation.z=-x,ft.add(f)}const Ir=["URD","VERDANDI","SKULD"],Qn=[8640767,15198177,14908296];for(let d=0;d<3;d++){const x=(d-1)*2,f=new H(new qt(.78,1),new Le({color:4541257,roughness:.92,metalness:.05}));f.scale.set(.9,1.18+$(d,1290)*.2,.72),f.position.set(x,1.35,.18),f.rotation.set(0,(d-1)*.16,0),ft.add(f);const A=bi(d===0?"ᚢ":d===1?"ᚹ":"ᛋ",d===0?"#8fe6ff":d===1?"#f1f1ec":"#ef8d9a"),U=new H(new Yn(.48,.62),new Ct({map:A,transparent:!0,depthWrite:!1,side:Kt}));U.position.set(x,1.42,.86),U.rotation.y=Math.PI,ft.add(U);const D=document.createElement("canvas");D.width=320,D.height=96;const X=D.getContext("2d");X.clearRect(0,0,320,96),X.textAlign="center",X.textBaseline="middle",X.font="bold 34px serif",X.fillStyle=d===0?"#9fe9ff":d===1?"#f4f4ef":"#ef91a0",X.shadowColor=X.fillStyle,X.shadowBlur=12,X.fillText(Ir[d],160,48);const Q=new vc(D);Q.colorSpace=Bn;const ie=new H(new Yn(1.55,.46),new Ct({map:Q,transparent:!0,depthWrite:!1,side:Kt}));ie.position.set(x,.55,.86),ie.rotation.y=Math.PI,ft.add(ie);const q=new Li(Qn[d],.45,4.5,2);q.position.set(x,1.55,1),ft.add(q)}const Lr=[15123551,15263973,14245748];for(let d=0;d<3;d++){const x=[];for(let f=0;f<=18;f++){const A=f/18,U=1.9+A*4.6,D=(d-1)*2+Math.sin(A*Math.PI*2+d*1.7)*(.45+.5*A),X=.35+Math.cos(A*Math.PI*2+d)*.45;x.push(new B(D,U,X))}ft.add(new gf(new gn().setFromPoints(x),new Bc({color:Lr[d],transparent:!0,opacity:.9})))}for(let d=0;d<3;d++){const x=new H(new Ft(1.15+d*.18,.045,6,32),new Ct({color:Lr[d],transparent:!0,opacity:.75,depthWrite:!1}));x.position.set((d-1)*.38,6.15,.15),x.rotation.set(.4,d*.65,.2),ft.add(x)}const Xt=new H(new Ft(4.6,.065,8,72),new Ct({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));Xt.rotation.x=Math.PI/2,Xt.position.y=.05,ft.add(Xt);for(let d=0;d<18;d++){const x=$(d,1300)*Math.PI*2,f=2.5+$(d,1301)*3.1,A=new H(new ct(.12,.12,.16,9),new Le({color:[10184008,7174032,9261927,7828045][d%4],roughness:.8}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(x)*f,.12,Math.sin(x)*f),ft.add(A)}for(let d=0;d<9;d++)Jn(ft,($(d,1315)-.5)*7.5,($(d,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][d%5],d%2?9428976:14134881,.34,$(d,1317)*Math.PI);Re(ft,"norns","Прядильня норн"),Ce.push(ft),O(-25,43,3,.1);const Cn=-43,Rn=62,tn=new We;tn.userData={id:"ritual",label:"Круг Силы"},tn.position.set(Cn,G(Cn,Rn),Rn);const Gn=le(6711651,1),la=le(5593685,1);for(let d=0;d<2;d++){const x=d===0?18:12,f=d===0?6.2:3.65;for(let A=0;A<x;A++){const U=A/x*Math.PI*2+d*.12,D=f+($(A,930+d)*.5-.25),X=.42+$(A,940+d)*.48,Q=new H(new qt(.55+$(A,950+d)*.28,1),d===0?Gn:la);Q.scale.y=.65+X*.35,Q.position.set(Math.cos(U)*D,X*.45,Math.sin(U)*D),Q.rotation.set($(A,960+d),U+$(A,970+d),$(A,980+d)),tn.add(Q)}}const Bi=new H(new qt(1.05,1),le(5593428,1));Bi.scale.set(1.25,.62,1.05),Bi.position.y=.5,tn.add(Bi);for(const d of[2.1,3.15,5.15]){const x=new H(new Ft(d,.045,7,64),new Le({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));x.rotation.x=Math.PI/2,x.position.y=.055,tn.add(x)}const kx=new Le({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let d=0;d<8;d++){const x=d/8*Math.PI*2,f=new H(new Dn(.13,.025,.65),kx);f.position.set(Math.cos(x)*4.55,.075,Math.sin(x)*4.55),f.rotation.y=-x,tn.add(f)}Re(tn,"ritual","Круг Силы"),Ce.push(tn),O(Cn,Rn,1.25,.06);const bm=new Li(9226152,1.15,11,2);bm.position.set(Cn,G(Cn,Rn)+1.6,Rn),S.add(bm);const $s=new We;$s.userData={id:"rune",label:"Древний камень Феху"},$s.position.set(27,G(27,57),57);const Cm=new H(new qt(1.45,1),le(5002063,1));Cm.position.y=1.2,$s.add(Cm);const ku=new H(new Ft(1.05,.07,8,30),new Le({color:16766826,emissive:10052371,emissiveIntensity:3}));ku.rotation.x=Math.PI/2,ku.position.y=1.2,$s.add(ku),Re($s,"rune","Древний камень Феху"),Ce.push($s),O(27,57,1.7,.1);const Tl=new We;Tl.userData={id:"port",label:"Мост к причалу"};for(let d=-5;d<=5;d++){const x=V(3.6,.28,.82,6307882,1);x.position.set(-53,G(-53,d*1)+.5,d),Tl.add(x)}Re(Tl,"port","Мост к причалу"),Ce.push(Tl);const Ks=new We;Ks.position.set(-46,G(-46,-15),-15);for(let d=0;d<7;d++){const x=V(2.8,.24,.72,7030573,1);x.position.set(0,.3,d*.85),Ks.add(x)}for(const d of[-1.2,1.2])for(let x=0;x<3;x++){const f=V(.22,1.5,.22,4139292,1);f.position.set(d,-.2,x*2.5),Ks.add(f)}const Rm=V(2.2,.55,4.8,4926493,1);Rm.position.set(3,-.15,2.5),Ks.add(Rm),Re(Ks,"port","Речной причал"),Ce.push(Ks);const Ox=(d,x)=>{const f=new H(new ct(.5,.5,1,12),le(6636332,1));f.position.set(d,G(d,x)+.5,x),S.add(f);for(const A of[.25,.76]){const U=new H(new Ft(.51,.045,6,18),le(3156004,.7,.1));U.rotation.x=Math.PI/2,U.position.set(d,G(d,x)+A,x),S.add(U)}},zx=(d,x)=>{const f=V(1,.75,1,7359022,1);f.position.set(d,G(d,x)+.38,x),S.add(f);const A=V(.08,.82,1.05,3679770,1);A.position.set(d,G(d,x)+.38,x),S.add(A),Xe(d,x,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([d,x])=>Ox(d,x)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([d,x])=>zx(d,x));const Bx=(d,x,f)=>{const A=new We,U=G(d,x),D=new Le({map:ne,color:16777215,roughness:.98}),X=new H(new ct(.18*f,.38*f,5.2*f,9),D);X.position.y=2.6*f,X.rotation.z=($(d,x)-.5)*.08,X.scale.x=1.08+$(d,x+4)*.22,A.add(X);for(let ie=0;ie<9;ie++){const q=(1.15+ie*.47)*f,pe=ie%2?1:-1,me=(.9+ie*.16)*f,Be=new H(new ct(.035*f,.095*f,me,7),D);Be.position.set(pe*(.28+ie*.035)*f,q,($(ie,x)-.5)*.38*f),Be.rotation.z=pe*(.62-$(ie,d)*.18),Be.rotation.y=$(ie+21,x)*Math.PI*2,A.add(Be)}const Q=[2904370,3893312,4946505];for(let ie=0;ie<12;ie++){const q=Math.max(.48,1.42-ie*.075)*f,pe=new H(new mt(q,8,6),new Le({map:oe,color:Q[ie%3],roughness:.99}));pe.scale.set(1+$(ie,d)*.25,.55+$(ie,x)*.16,.82+$(ie*2,d)*.22),pe.position.set(($(ie*4,d)-.5)*.58*f,(1.55+ie*.37)*f,($(ie*5,x)-.5)*.55*f),A.add(pe)}for(let ie=0;ie<3;ie++){const q=new H(new mt(.38*f,7,5),new Le({color:ie%2?3231030:4021565,roughness:1}));q.scale.set(1.5,.28,.85),q.position.set((ie-1)*.45*f,.55*f,($(ie,88)-.5)*.5*f),A.add(q)}A.position.set(d,U,x),Re(A),f>=1.15&&O(d,x,.46*f,.04)},Al=(d,x,f,A=!1)=>{const U=new We,D=G(d,x),X=new Le({map:ne,color:16777215,roughness:1}),Q=new H(new ct(.42*f,.72*f,6.4*f,11),X);Q.position.y=3.2*f,Q.rotation.z=($(d,x)-.5)*.06,Q.scale.x=1.08,U.add(Q);for(let q=0;q<(A?9:7);q++){const pe=q/(A?9:7)*Math.PI*2+$(q,d)*.18,me=(1+$(q,x)*1.6)*f,Be=new H(new ct(.11*f,.3*f,me,7),X);Be.position.set(Math.cos(pe)*me*.42,.28*f,Math.sin(pe)*me*.42),Be.rotation.z=Math.cos(pe)*.72,Be.rotation.x=-Math.sin(pe)*.72,Be.rotation.y=-pe,U.add(Be)}const ie=A?10:8;for(let q=0;q<ie;q++){const pe=q/ie*Math.PI*2+$(q+11,d)*.22,me=(2+$(q+22,x)*2.2)*f,Be=new H(new ct(.07*f,.19*f,me,8),X);Be.position.set(Math.cos(pe)*me*.34,(3.25+$(q+33,d)*1.9)*f,Math.sin(pe)*me*.34),Be.rotation.z=Math.cos(pe)*.76,Be.rotation.x=Math.sin(pe)*.76,Be.rotation.y=-pe,U.add(Be);for(let be=0;be<4;be++){const Qe=new H(new mt((.46+$(be+q,90)*.25)*f,8,6),new Le({map:oe,color:[3235641,4355400,5670483][(q+be)%3],roughness:1}));Qe.scale.y=.62,Qe.position.set(Math.cos(pe)*me*(.52+.09*be)+($(be,q)-.5)*.55*f,(3.9+$(q,be)*1.45+.25*be)*f,Math.sin(pe)*me*(.52+.09*be)+($(be+4,q)-.5)*.55*f),U.add(Qe)}}if(A){const q=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let pe=0;pe<q.length;pe++){const me=-.9+pe*.46,Be=new H(new Yn(.48*f,.62*f),new Ct({map:bi(q[pe],pe%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Kt}));Be.position.set(Math.sin(me)*.56*f,(1.5+pe*.68)*f,Math.cos(me)*.6*f),Be.rotation.y=me,U.add(Be)}}U.position.set(d,D,x),Re(U),f>=1.2&&O(d,x,.78*f,.05)},Hx=(d,x,f,A)=>{const U=new We,D=new Le({color:7291688,roughness:.96}),X=new Le({color:9132599,roughness:.96}),Q=new Le({color:3155230,roughness:1}),ie=new Le({color:12168600,roughness:.9}),q=new Le({color:1512207,roughness:.25}),pe=new H(new mt(.68,14,10),D);pe.scale.set(1.35,.78,.72),pe.position.set(0,.98*f,0),pe.scale.multiplyScalar(f),U.add(pe);const me=new H(new mt(.42,12,9),X);me.scale.set(1,.9,.86),me.position.set(.49*f,1.04*f,0),U.add(me);const Be=new H(new ct(.2*f,.34*f,.98*f,10),D);Be.position.set(.5*f,1.46*f,0),Be.rotation.z=-.3,U.add(Be);const be=new H(new mt(.34*f,12,9),X);be.scale.set(1.18,.92,.78),be.position.set(.86*f,1.82*f,0),U.add(be);const Qe=new H(new mt(.17*f,10,7),X);Qe.scale.set(1.15,.72,.72),Qe.position.set(1.16*f,1.72*f,0),U.add(Qe);const ht=new H(new mt(.075*f,8,6),Q);ht.scale.set(1,.72,.85),ht.position.set(1.3*f,1.72*f,0),U.add(ht);for(const kt of[-1,1]){const $t=new H(new _n(.095*f,.3*f,7),X);$t.position.set(.77*f,2.1*f,kt*.2*f),$t.rotation.z=-.28,$t.rotation.x=kt*.18,U.add($t)}for(const kt of[-1,1]){const $t=new H(new mt(.035*f,8,6),q);$t.position.set(1.05*f,1.91*f,kt*.235*f),U.add($t);const jt=new H(new mt(.009*f,6,4),new Ct({color:16777215}));jt.position.set(1.075*f,1.925*f,kt*.257*f),U.add(jt)}const It=[];for(const kt of[-1,1])for(const $t of[-1,1]){const jt=new We;jt.position.set($t*.43*f,.76*f,kt*.34*f);const Nt=new H(new ct(.085*f,.11*f,.43*f,7),D);Nt.position.y=-.2*f,jt.add(Nt);const Ut=new We;Ut.position.y=-.4*f;const dn=new H(new ct(.055*f,.075*f,.43*f,7),Q);dn.position.y=-.2*f,Ut.add(dn);const On=new H(new mt(.075*f,7,5),Q);On.scale.set(1.15,.55,1.25),On.position.y=-.43*f,Ut.add(On),jt.add(Ut),U.add(jt),It.push(jt,Ut)}const rn=new H(new mt(.16*f,9,7),X);rn.scale.set(.75,1.25,.72),rn.position.set(-.9*f,1.18*f,0),U.add(rn);for(const kt of[-1,1]){const $t=new H(new ct(.04*f,.06*f,.68*f,7),ie);$t.position.set(.69*f,2.25*f,kt*.14*f),$t.rotation.z=kt*.22,U.add($t);for(let jt=0;jt<3;jt++){const Nt=new H(new ct(.02*f,.038*f,.34*f,6),ie);Nt.position.set((.56+.11*jt)*f,(2.48+.15*jt)*f,kt*(.14+.045*jt)*f),Nt.rotation.z=kt*(.55-.08*jt),U.add(Nt)}}U.scale.setScalar(1.1),U.position.set(d,G(d,x),x),U.userData={phase:A,legJoints:It},Re(U),z.push({g:U,x:d,z:x,r:4+$(A,41)*3,speed:1.25+$(A,42)*.8,phase:A,kind:"deer"})},Vx=(d,x)=>{const f=new We,A=le(6965552,1),U=le(3089436,1),D=new H(new mt(.22,8,6),A);D.scale.set(1.35,.9,.9),D.position.y=.72,f.add(D);const X=new H(new mt(.17,8,6),A);X.position.set(.22,.86,0),f.add(X);for(const q of[-1,1]){const pe=new H(new _n(.06,.18,6),A);pe.position.set(.17,.99,q*.09),f.add(pe)}const Q=new H(new Ft(.24,.075,7,14,Math.PI*1.65),A);Q.rotation.y=Math.PI/2,Q.position.set(-.22,.91,0),f.add(Q);const ie=new H(new mt(.025,6,4),U);ie.position.set(.35,.9,-.12),f.add(ie),f.position.set(d,G(d,x),x),Re(f,"ratatosk","Белка Рататоск"),Ce.push(f),O(d,x,.28,.02),z.push({g:f,x:d,z:x,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Ci=-4,Ri=69,Ou=new We;Ou.userData={id:"ashgrove",label:"Роща Ясеня"};const zu=new H(new ti(10.5,40),new Le({color:2504747,roughness:1,transparent:!0,opacity:.82}));zu.rotation.x=-Math.PI/2,zu.position.set(Ci,G(Ci,Ri)+.02,Ri),S.add(zu);const Gx=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[d,x,f,A]of Gx)Al(Ci+d,Ri+x,f,A);const Bu=new H(new Ft(6.4,.07,8,64),new Le({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Bu.rotation.x=Math.PI/2,Bu.position.set(Ci,G(Ci,Ri)+.05,Ri),S.add(Bu);const Hu=new H(new qt(1.05,1),le(5593941,1));Hu.scale.set(1.3,.7,1.05),Hu.position.set(Ci,G(Ci,Ri)+.65,Ri),S.add(Hu),Jn(Ou,0,0,"ᚱ",9430692,1.25,0);for(let d=0;d<26;d++){const x=$(d,1310)*Math.PI*2,f=2.5+$(d,1311)*7.2,A=Ci+Math.cos(x)*f,U=Ri+Math.sin(x)*f,D=new H(new ct(.025,.045,.22+$(d,1312)*.28,6),le(12039579,1));D.position.set(A,G(A,U)+.12,U),S.add(D);const X=new H(new mt(.13+$(d,1313)*.08,8,5),new Le({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));X.scale.y=.48,X.position.set(A,G(A,U)+.34,U),S.add(X)}for(let d=0;d<16;d++){const x=$(d,1320)*Math.PI*2,f=2+$(d,1321)*7.5,A=Ci+Math.cos(x)*f,U=Ri+Math.sin(x)*f,D=new H(new ct(.07,.07,.025,10),le(9270341,.5,.55));D.rotation.x=Math.PI/2,D.position.set(A,G(A,U)+.05,U),S.add(D)}Ce.push(Ou),O(Ci,Ri,1,.08);const yn=61,Mn=78,bl=new We;bl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Vu=new H(new ti(11.5,44),new Le({color:2112299,roughness:1,transparent:!0,opacity:.86}));Vu.rotation.x=-Math.PI/2,Vu.position.set(yn,G(yn,Mn)+.025,Mn),S.add(Vu);const Pm=new Le({map:ne,color:16777215,roughness:1}),Gu=new H(new ct(1.35,2.1,10.5,13),Pm);Gu.position.set(yn,G(yn,Mn)+5.25,Mn),Gu.rotation.z=-.05,S.add(Gu);for(let d=0;d<8;d++){const x=d/8*Math.PI*2+.2,f=5+$(d,1401)*4,A=new H(new ct(.25,.58,f,9),Pm);A.position.set(yn+Math.cos(x)*f*.36,G(yn,Mn)+6.8+$(d,1402)*2.2,Mn+Math.sin(x)*f*.36),A.rotation.z=Math.cos(x)*.8,A.rotation.x=Math.sin(x)*.8,A.rotation.y=-x,S.add(A);for(let U=0;U<4;U++){const D=new H(new mt(1+$(U+d,1403)*.55,9,6),new Le({map:oe,color:[2312753,2972729,3697474][(d+U)%3],roughness:1}));D.scale.y=.65,D.position.set(yn+Math.cos(x)*f*(.48+.09*U)+($(U,d)-.5)*1.1,G(yn,Mn)+8+$(d,U)*3+U*.45,Mn+Math.sin(x)*f*(.48+.09*U)+($(U+5,d)-.5)*1.1),S.add(D)}}for(let d=0;d<9;d++){const x=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][d],f=bi(x,d%2?"#63d9ef":"#f0c65d"),A=new H(new Yn(.7,.9),new Ct({map:f,transparent:!0,depthWrite:!1,side:Kt}));A.position.set(yn+Math.sin(d*.63)*1.42,G(yn,Mn)+1+d*.78,Mn+Math.cos(d*.63)*1.42),A.rotation.y=Math.PI*.5-d*.16,S.add(A)}const Wu=new H(new qt(1.35,1),le(5199954,1));Wu.scale.set(1.45,.7,1.15),Wu.position.set(yn,G(yn,Mn)+.75,Mn+1.6),S.add(Wu),yt(yn,Mn+2.1,.72);const Xu=new H(new Ft(6.7,.06,8,64),new Le({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Xu.rotation.x=Math.PI/2,Xu.position.set(yn,G(yn,Mn)+.055,Mn),S.add(Xu);for(let d=0;d<22;d++){const x=$(d,1410)*Math.PI*2,f=1.8+$(d,1411)*8.2,A=yn+Math.cos(x)*f,U=Mn+Math.sin(x)*f;Jn(bl,A-yn,U-Mn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][d%6],d%2?6804447:14726490,.35,$(d,1412)*Math.PI)}for(let d=0;d<18;d++){const x=["ᚱ","ᚨ","ᛟ","ᚦ"][d%4],f=bi(x,d%2?"#63d9ef":"#e4bd65"),A=new H(new Yn(.34,.44),new Ct({map:f,transparent:!0,depthWrite:!1,side:Kt}));A.position.set(yn+($(d,1420)-.5)*12,1.4+$(d,1421)*7,Mn+($(d,1422)-.5)*12),A.userData.floatPhase=$(d,1423)*6,S.add(A)}Re(bl,"hoddmimir","Лес Ходдмимира"),Ce.push(bl),O(yn,Mn,1.2,.08);const ca=30,ua=53;for(let d=0;d<4;d++)Hx(ca+(d-1.5)*2.6,ua+(d%2?2.6:-2.6),1.12+$(d,1440)*.16,10+d);const Im=new H(new qt(.72,1),le(5725526,1));Im.position.set(ca,G(ca,ua)+.5,ua),S.add(Im);const ju=new H(new Ft(5.8,.045,7,48),new Le({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));ju.rotation.x=Math.PI/2,ju.position.set(ca,G(ca,ua)+.035,ua),S.add(ju),Vx(Ci+5,Ri+1);const Cl=12,Rl=49,Zs=new We;Zs.position.set(Cl,G(Cl,Rl),Rl);const qu=new H(new qt(1.05,1),le(5133648,1));qu.position.y=.85,qu.scale.y=1.55,Zs.add(qu);const Yu=new H(new Ft(2.7,.055,7,48),new Le({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Yu.rotation.x=Math.PI/2,Yu.position.y=.06,Zs.add(Yu);const Wx=new Bc({color:14207464,transparent:!0,opacity:.72});for(let d=0;d<3;d++){const x=[new B((d-1)*.72,.95,.15),new B((d-1)*1.25,2.9,-.35+Math.sin(d)*.25),new B((d-1)*1.75,.5,.9)];Zs.add(new gf(new gn().setFromPoints(x),Wx))}for(let d=0;d<7;d++){const x=new H(new qt(.11,0),le(6708050,1)),f=-1+d*.32;x.position.set(-1.7+f*.95,.06,-1.6+d*.46),x.scale.set(1.6,.35,.8),Zs.add(x)}Re(Zs,"forestEvent","Камень Трёх Нитей"),O(Cl,Rl,1.15,.08);const Lm=(d,x,f,A,U,D,X)=>{const Q=new We;Q.position.set(d,G(d,x),x);const ie=new H(new qt(.78+X*.08,1),le(D,1));ie.position.y=.58+X*.08,ie.scale.y=1.35,Q.add(ie);const q=new H(new Ft(2+X*.18,.045,7,40),new Le({color:U,emissive:U,emissiveIntensity:1.25,transparent:!0,opacity:.62}));q.rotation.x=Math.PI/2,q.position.y=.045,Q.add(q);for(let pe=0;pe<3+X;pe++){const me=new H(new qt(.12,0),le(7827558,1)),Be=pe/(3+X)*Math.PI*2;me.position.set(Math.cos(Be)*(1.15+X*.12),.08,Math.sin(Be)*(1.15+X*.12)),me.scale.y=.45,Q.add(me)}Re(Q,f,A),Ce.push(Q),O(d,x,.9,.08)};((d,x)=>{const f=new We;f.position.set(d,G(d,x),x),f.userData={id:"forestCache",label:"Забытый тайник"};const A=new Le({map:ne,color:6968381,roughness:1}),U=new Le({color:2760987,roughness:1}),D=new H(new ct(2,2.65,4.9,11),A);D.position.y=2.45,D.rotation.z=-.035,f.add(D);for(let be=0;be<7;be++){const Qe=1.3+$(be,1250)*2.7,ht=new H(new _n(.32+$(be,1251)*.3,Qe,6),A),It=$(be,1252)*Math.PI*2,rn=.55+$(be,1253)*1.35;ht.position.set(Math.cos(It)*rn,4.75+Qe*.42,Math.sin(It)*rn),ht.rotation.z=($(be,1254)-.5)*.55,ht.rotation.x=($(be,1255)-.5)*.55,f.add(ht)}const X=new H(new mt(1.18,16,10),U);X.scale.set(1,1.18,.46),X.position.set(0,2,2.08),f.add(X);const Q=new H(new Ft(1.05,.16,8,28),new Le({color:4930349,roughness:1}));Q.rotation.x=Math.PI/2,Q.position.set(0,2,2.12),Q.scale.y=1.15,f.add(Q);const ie=new Bc({color:14211280,transparent:!0,opacity:.45});for(let be=0;be<6;be++){const Qe=[new B(-.95+be*.38,1.15+be%3*.55,2.15),new B((be-2.5)*.2,2+be%2*.3,2.48),new B(-.8+be*.32,2.95+be%3*.25,2.12)];f.add(new gf(new gn().setFromPoints(Qe),ie))}const q=new H(new mt(.46,10,8),new Le({color:5978662,roughness:1}));q.scale.set(.9,1.15,.62),q.position.set(.05,1.45,2.34),f.add(q);const pe=new H(new mt(.07,7,5),new Le({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));pe.position.set(.05,1.72,2.77),f.add(pe);for(let be=0;be<5;be++){const Qe=new H(new qt(.11,0),new Le({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Qe.position.set(-.38+be*.19,1.02+be%2*.08,2.5),f.add(Qe)}const me=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let be=0;be<6;be++){const Qe=-1.05+be*.42,ht=bi(me[be],be%2?"#e7bd61":"#7ce5ef"),It=new H(new Yn(.45,.62),new Ct({map:ht,transparent:!0,depthWrite:!1,side:Kt}));It.position.set(Math.sin(Qe)*1.55,1.2+be*.42,1.93+Math.cos(Qe)*.22),It.rotation.y=Math.PI,f.add(It)}const Be=new H(new Ft(4.15,.06,8,64),new Ct({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Be.rotation.x=Math.PI/2,Be.position.y=.05,f.add(Be);for(let be=0;be<10;be++){const Qe=be/10*Math.PI*2;Jn(f,Math.cos(Qe)*3.65,Math.sin(Qe)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][be],14859617,.38,Qe+.2)}for(let be=0;be<12;be++){const Qe=$(be,1270)*Math.PI*2,ht=1.8+$(be,1271)*3.3,It=new H(new ct(.08,.08,.025,9),new Le({color:10190147,metalness:.55,roughness:.45}));It.rotation.x=Math.PI/2,It.position.set(Math.cos(Qe)*ht,.09,Math.sin(Qe)*ht),f.add(It)}for(let be=0;be<4;be++){const Qe=V(.08,.08,.75,10393476,1);Qe.position.set(($(be,1280)-.5)*5,.12,($(be,1281)-.5)*5),Qe.rotation.y=$(be,1282)*Math.PI,f.add(Qe)}Re(f,"forestCache","Забытый тайник"),Ce.push(f),O(d,x,1.75,.08)})(-15,58),Lm(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),Lm(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const Xx=(d,x,f,A,U)=>{const D=d.distanceTo(x),X=new H(new Dn(f,A,D),U);return X.position.copy(d).add(x).multiplyScalar(.5),X.lookAt(x),X};function Js(d,x,f,A,U,D,X){const Q=new H(new qt(U,1),le(D,1));return Q.scale.set(.72+$(X,1)*.62,.55+$(X,2)*.85,.68+$(X,3)*.55),Q.rotation.set($(X,4)*1.2,$(X,5)*Math.PI,$(X,6)*1.1),Q.position.set(x,f,A),d.add(Q),Q}const jx=(d,x)=>{const f=new We;f.position.set(d,G(d,x),x),f.userData={id:"fallenAsh",label:"Поверженный ясень"};const A=new H(new Ft(7.8,.07,8,64),new Le({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));A.rotation.x=Math.PI/2,A.position.y=.05,f.add(A);const U=new Le({map:ne,color:16777215,roughness:1}),D=new H(new ct(1.45,2.15,4.8,10),U);D.position.set(0,2.4,.2),D.rotation.z=-.04,f.add(D);const X=new H(new mt(.88,12,9),new Ct({color:1185043}));X.scale.set(1,.95,.55),X.position.set(0,1.75,1.72),f.add(X);for(let ie=0;ie<7;ie++){const q=-.9+ie*.3,pe=2.5+$(ie,1500)*2.7,me=new H(new ct(.11,.28,pe,7),U);me.position.set(Math.sin(q)*pe*.34,4+$(ie,1501)*2.8,.15+Math.cos(q)*pe*.3),me.rotation.z=Math.sin(q)*.65,me.rotation.x=-Math.cos(q)*.55,me.rotation.y=q,f.add(me)}for(let ie=0;ie<9;ie++){const q=$(ie,1510)*Math.PI*2,pe=1.7+$(ie,1511)*5.6;Js(f,Math.cos(q)*pe,.22,Math.sin(q)*pe,.3+$(ie,1512)*.45,ie%3?5265490:6251613,1513+ie)}for(let ie=0;ie<8;ie++)Jn(f,($(ie,1520)-.5)*5.8,($(ie,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][ie%4],10473668,.42,$(ie,1522)*Math.PI);const Q=new H(new mt(.45,10,7),le(5978919,1));Q.scale.set(.9,1.2,.7),Q.position.set(0,1.55,1.25),f.add(Q),Re(f,"fallenAsh","Поверженный ясень"),Ce.push(f),O(d,x,1.8,.08)},qx=(d,x)=>{const f=new We;f.position.set(d,G(d,x),x),f.userData={id:"hunterCamp",label:"Забытая стоянка"};const A=new H(new ti(8.7,40),new Le({color:3225644,roughness:1,transparent:!0,opacity:.78}));A.rotation.x=-Math.PI/2,A.position.y=.025,A.scale.set(1.18,.92,1),f.add(A);const U=new We;U.position.set(-1.45,.05,-.65),U.rotation.y=-.34,f.add(U);const D=le(5978920,1);le(3680030,1);const X=le(2697768,.82,.35),Q=le(4412730,1),ie=V(3.7,.26,1.65,6308141,1);ie.position.y=1.05,ie.rotation.z=-.08,U.add(ie);for(let He=0;He<9;He++){const pt=V(2.8+$(He,501)*1.1,.16,.26,He%3?6505775:4928293,1);pt.position.set(-.25+($(He,502)-.5)*.25,1.18+($(He,503)-.5)*.34,-.72+He%3*.68),pt.rotation.z=($(He,504)-.5)*.16,pt.rotation.y=($(He,505)-.5)*.16,U.add(pt)}for(const[He,pt,Ht]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const wn=new H(new Ft(Ht,.14,7,20,Math.PI*1.56),X);wn.rotation.y=Math.PI/2,wn.rotation.z=Ht>.8?.08:-.18,wn.position.set(He,.9,pt),U.add(wn);const vi=new H(new ct(.15,.18,.28,8),X);vi.rotation.z=Math.PI/2,vi.position.set(He,.9,pt),U.add(vi);for(let ps=0;ps<6;ps++){const b0=ps/6*Math.PI*2+.25,oy=new B(He+Math.cos(b0)*Ht*.82,.9+Math.sin(b0)*Ht*.82,pt+.02),ay=new B(He,.9,pt+.02);U.add(Xx(ay,oy,.065,.065,X))}}const q=new H(new Dn(3.8,.14,.16),X);q.position.set(0,.62,-.83),q.rotation.z=.08,U.add(q);const pe=new H(new Dn(.16,.18,3.2),D);pe.position.set(1.8,.8,-.35),pe.rotation.y=.9,U.add(pe);for(let He=0;He<6;He++){const pt=new H(new mt(.28+$(He,507)*.18,7,5),Q);pt.scale.set(1.4,.32,.7),pt.position.set(-1.1+He*.48,1.34+He%2*.05,-.82),U.add(pt)}const me=new We;me.position.set(2.85,.02,1.15),me.rotation.y=.18,f.add(me),le(4861985,1);for(let He=0;He<4;He++){const pt=He/4*Math.PI*2+.25,Ht=V(.11,3.7,.11,4861985,1);Ht.position.set(Math.cos(pt)*1.25,1.65,Math.sin(pt)*1.25),Ht.rotation.z=Math.cos(pt)*.34,Ht.rotation.x=-Math.sin(pt)*.34,me.add(Ht)}const Be=new H(new _n(2,3.2,4,1,!0),new Le({color:4862247,roughness:1,side:Kt,transparent:!0,opacity:.94}));Be.position.y=1.45,Be.scale.set(1,.9,.82),Be.rotation.y=.78,me.add(Be);for(let He=0;He<9;He++){const pt=new H(new mt(.16+$(He,509)*.14,6,5),Q);pt.scale.set(1.5,.35,.8),pt.position.set(($(He,510)-.5)*2.4,1+$(He,511)*1.9,($(He,512)-.5)*1.8),me.add(pt)}const be=V(1.05,1.55,.05,3088668,1);be.position.set(0,.72,1.65),be.rotation.y=.16,me.add(be),yt(d+.1,x+.45,.78);const Qe=new Li(16751173,1,8,2);Qe.position.set(.1,1.7,.45),f.add(Qe);const ht=new We;ht.position.set(-3.15,.5,1.25),ht.rotation.y=.8,ht.rotation.z=-.22,f.add(ht);const It=new H(new ti(1.05,16),new Le({color:3882041,roughness:.85,metalness:.55,side:Kt}));It.rotation.x=-Math.PI/2,It.scale.y=.8,ht.add(It);const rn=new H(new Ft(1.03,.11,7,18),X);rn.rotation.x=-Math.PI/2,rn.scale.y=.8,ht.add(rn);const kt=new H(new ct(.24,.31,.22,8),X);kt.rotation.x=Math.PI/2,kt.position.set(.18,0,.08),ht.add(kt);const $t=V(.05,.035,1.15,1513494,1);$t.position.set(-.28,.025,.05),$t.rotation.y=.42,ht.add($t),le(2960425,.65,.45);const jt=(He,pt,Ht)=>{const wn=new We;wn.position.set(He,.18,pt),wn.rotation.y=Ht;const vi=V(.09,.09,1.55,5059362,1);vi.rotation.x=Math.PI/2,vi.position.z=.15,wn.add(vi);const ps=V(.55,.13,.28,3158061,.55);ps.position.set(0,.02,-.62),ps.rotation.y=-.25,wn.add(ps),f.add(wn)};jt(-1.9,3.15,.45),jt(4.15,-.65,-.8);const Nt=V(.11,.11,.95,5388068,1);Nt.rotation.y=.55,Nt.position.set(-2.1,.16,2.65),f.add(Nt);const Ut=new H(new mt(.48,9,7),new Le({color:5978919,roughness:1}));Ut.scale.set(.9,1.15,.65),Ut.position.set(3.55,.48,2.65),f.add(Ut);const dn=new H(new Ft(.33,.035,6,18,Math.PI*1.5),le(3023129,1));dn.rotation.x=Math.PI/2,dn.position.set(3.55,.93,2.65),f.add(dn);for(let He=0;He<15;He++){const pt=new H(new ct(.09,.09,.025,10),new Le({color:9335877,metalness:.55,roughness:.45})),Ht=$(He,520)*Math.PI*2,wn=2.1+$(He,521)*3.7;pt.position.set(Math.cos(Ht)*wn,.13,Math.sin(Ht)*wn),pt.rotation.x=Math.PI/2,f.add(pt)}for(let He=0;He<5;He++){const pt=V(.08,.08,.9,11182733,1);pt.position.set(3.2+$(He,522)*2.4,.18,-2.7+$(He,523)*1.7),pt.rotation.y=$(He,524)*Math.PI,pt.rotation.z=($(He,525)-.5)*.25,f.add(pt)}const On=new H(new Ft(4.7,.055,7,64),new Ct({color:9160135,transparent:!0,opacity:.5}));On.rotation.x=Math.PI/2,On.position.y=.075,f.add(On);const ai=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];ai.forEach((He,pt)=>{const Ht=pt/ai.length*Math.PI*2;Jn(f,Math.cos(Ht)*4.15,Math.sin(Ht)*4.15,He,pt%3===0?13215066:7977149,.55,Ht+.3)});for(let He=0;He<18;He++)Js(f,($(He,530)-.5)*8,.18,($(He,531)-.5)*7,.22+$(He,532)*.34,He%4===0?6121048:5133389,530+He);for(let He=0;He<12;He++){const pt=V(.12,.12,1.7+$(He,535)*2,3811872,1);pt.position.set(($(He,536)-.5)*8,.11,($(He,537)-.5)*8),pt.rotation.y=$(He,538)*Math.PI,pt.rotation.z=($(He,539)-.5)*.2,f.add(pt)}Re(f,"hunterCamp","Забытая стоянка"),Ce.push(f),O(d,x,1.9,.1)},Yx=(d,x,f,A,U,D)=>{const X=new We;X.position.set(d,G(d,x),x);const Q=7442040,ie=le(4412730,1),q=new H(new Ft(f,.07,8,64),new Le({color:Q,emissive:Q,emissiveIntensity:.65,transparent:!0,opacity:.42}));q.rotation.x=Math.PI/2,q.position.y=.045,X.add(q);const pe=Math.floor(f/1.7);for(let me=0;me<pe;me++){const Be=$(me,d*11+x)*Math.PI*2,be=f*.35+$(me,x*17)*f*.45;Js(X,Math.cos(Be)*be,.2,Math.sin(Be)*be,.34+$(me,33)*.32,5266514,800+me)}{for(let me=0;me<8;me++){const Be=new H(new mt(.34+$(me,600)*.25,7,5),ie);Be.scale.y=.35,Be.position.set(($(me,601)-.5)*f,.16,($(me,602)-.5)*f),X.add(Be)}for(let me=0;me<6;me++)Jn(X,($(me,603)-.5)*f*.9,($(me,604)-.5)*f*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][me],7907492,.42,$(me,605)*Math.PI)}Re(X,A,U),Ce.push(X)};qx(70,18),Yx(67,49,9.5,"deepGrove","Глубокая роща"),jx(52,7);const $x=(d,x)=>{const f=document.createElement("canvas");f.width=f.height=256;const A=f.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=x,A.shadowBlur=24,A.fillStyle=x,A.font="bold 156px serif",A.fillText(d,128,132),A.shadowBlur=6,A.globalAlpha=.72,A.font="bold 126px serif",A.fillText(d,128,132);const U=new vc(f);return U.colorSpace=Bn,U.anisotropy=4,U},$u=(d,x,f,A,U,D,X=.7,Q=0)=>{const ie="#"+D.toString(16).padStart(6,"0"),q=new Ct({map:$x(x,ie),transparent:!0,depthWrite:!1,side:Kt}),pe=new H(new Yn(X,X),q);return pe.position.set(f,A,U),pe.rotation.set(0,Q,0),d.add(pe),pe},Ku=(d,x,f,A=.075)=>{const U=new dp(x),D=new H(new qa(U,42,A,6,!1),new Ct({color:f,transparent:!0,opacity:.9}));d.add(D);const X=new H(new qa(U,42,A*2.5,6,!1),new Ct({color:f,transparent:!0,opacity:.12,depthWrite:!1}));return d.add(X),D},Pn=new We,Zu=-62,Ju=72;Pn.position.set(Zu,G(Zu,Ju),Ju),Pn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const Kx=new Le({color:5858398,roughness:.96,metalness:.04}),Dm=new Le({color:3423032,roughness:.92,metalness:.08}),Zx=new Le({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),Qu=new H(new ti(13.2,52),new Le({color:5402692,roughness:1,transparent:!0,opacity:.94}));Qu.rotation.x=-Math.PI/2,Qu.position.y=.018,Pn.add(Qu);for(const[d,x,f]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const A=new H(new Ft(d,x,8,96),new Ct({color:15780190,transparent:!0,opacity:f,depthWrite:!1}));A.rotation.x=Math.PI/2,A.position.y=.065,Pn.add(A)}const Jx=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let d=0;d<18;d++){const x=d/18*Math.PI*2;Jn(Pn,Math.cos(x)*8.9,Math.sin(x)*8.9,Jx[d],15779422,.58,x+.15)}const Nm=new H(new ct(3.15,3.45,.45,12),Dm);Nm.position.y=.24,Pn.add(Nm);for(let d=0;d<16;d++){const x=d/16*Math.PI*2,f=2.65+($(d,2001)-.5)*.22,A=new H(new qt(.72+$(d,2002)*.22,1),Kx);A.scale.set(1.15+$(d,2003)*.25,.72+$(d,2004)*.22,.88+$(d,2005)*.24),A.position.set(Math.cos(x)*f,.55+$(d,2006)*.12,Math.sin(x)*f),A.rotation.set($(d,2007)*.25,x+$(d,2008)*.4,$(d,2009)*.2),Pn.add(A)}const ed=new H(new ti(2.25,40),Zx);ed.rotation.x=-Math.PI/2,ed.position.y=.72,Pn.add(ed);for(let d=0;d<3;d++){const x=new H(new Ft(.65+d*.48,.025,6,48),new Ct({color:d===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));x.rotation.x=Math.PI/2,x.position.y=.735,Pn.add(x)}const Um=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],Fm=[];for(let d=0;d<3;d++){const x=Um[d],f=new We;f.position.set(x.x,0,x.z),f.rotation.y=d===0?.22:d===2?-.22:Math.PI;const A=new H(new _n(.72,.95,9),new Le({color:x.body,roughness:.98}));A.position.y=.72,f.add(A);const U=new H(new _n(.48,.72,8),new Le({color:x.cloak,roughness:.98}));U.position.set(0,.86,.43),U.rotation.x=.05,f.add(U);const D=new H(new ct(.42,.58,.12,9),new Le({color:x.cloak,roughness:1}));D.position.set(0,1.23,0),D.rotation.z=.08,f.add(D);const X=new H(new mt(.32,12,9),new Le({color:13079144,roughness:.9}));X.position.y=1.62,f.add(X);const Q=new H(new mt(.38,10,8),new Le({color:x.hair,roughness:1}));Q.scale.set(1,.95,.9),Q.position.set(0,1.68,-.08),f.add(Q);for(const me of[-1,1]){const Be=new H(new ct(.075,.105,.62,7),new Le({color:x.cloak,roughness:1}));Be.position.set(me*.47,1.03,.18),Be.rotation.z=me*.42,Be.rotation.x=-.18,f.add(Be)}const ie=new H(new ct(.38,.44,.18,9),Dm);ie.position.y=.25,f.add(ie);const q=new H(new ct(.035,.055,.9,8),new Le({color:6964008,roughness:.9}));q.position.set(.58,1.08,.38),q.rotation.z=.62,f.add(q);const pe=new H(new Ft(.12,.025,6,14),new Le({color:9265980,roughness:.85}));pe.rotation.x=Math.PI/2,pe.position.set(.75,.82,.48),f.add(pe),f.position.y=.02,Pn.add(f),Fm.push(new B(x.x+.72,1.25,x.z+.48))}const km=[14674162,16765022,13192536];for(let d=0;d<3;d++){const x=Fm[d],f=[];for(let A=0;A<=30;A++){const U=A/30,D=x.y+U*7.3,X=U*Math.PI*3+Um[d].phase,Q=.35+.72*U;f.push(new B(x.x*(1-U)+Math.cos(X)*Q*U,x.y*(1-U)+D*U,x.z*(1-U)+Math.sin(X)*Q*U))}Ku(Pn,f,km[d],.085)}for(let d=0;d<3;d++){const x=[];for(let f=0;f<=32;f++){const A=f/32,U=A*Math.PI*2,D=1.65+.42*Math.sin(U*2+d*.9);x.push(new B(Math.cos(U+d*2.094)*D,8.35+.45*Math.sin(U*3+d),Math.sin(U+d*2.094)*D))}Ku(Pn,x,km[d],.065)}const Om=new Li(16767096,1.25,11,2);Om.position.set(0,4.2,1),Pn.add(Om);for(let d=0;d<20;d++){const x=$(d,2030)*Math.PI*2,f=3.8+$(d,2031)*8,A=Math.cos(x)*f,U=Math.sin(x)*f,D=new H(new ct(.018,.028,.22,5),new Le({color:5666109,roughness:1}));D.position.set(A,.11,U),Pn.add(D);const X=new H(new mt(.07,7,5),new Ct({color:d%3===0?16770208:d%3===1?15972816:14478591}));X.position.set(A,.25,U),Pn.add(X)}for(let d=0;d<10;d++){const x=$(d,2040)*Math.PI*2,f=4+$(d,2041)*8,A=new H(new qt(.12+$(d,2042)*.08,0),new Le({color:10189631,metalness:.65,roughness:.4}));A.position.set(Math.cos(x)*f,.1,Math.sin(x)*f),Pn.add(A)}Re(Pn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),Ce.push(Pn),O(Zu,Ju,3.4,.1);const gi=new We,td=12,nd=74;gi.position.set(td,G(td,nd),nd),gi.userData={id:"powerCircle",label:"Круг Силы"};const id=new H(new ti(10.8,48),new Le({color:1911590,roughness:1,transparent:!0,opacity:.94}));id.rotation.x=-Math.PI/2,id.position.y=.02,gi.add(id);for(const[d,x,f,A]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const U=new H(new Ft(d,x,8,96),new Ct({color:f,transparent:!0,opacity:A,depthWrite:!1}));U.rotation.x=Math.PI/2,U.position.y=.07,gi.add(U)}for(let d=0;d<20;d++){const x=d/20*Math.PI*2,f=5.1+d%2*2.2;Jn(gi,Math.cos(x)*f,Math.sin(x)*f,J[(d+2)%J.length],d%2?9140479:6545396,.38,x+.2)}const Pl=new H(new qt(1.25,1),new Le({color:2435371,roughness:.9,metalness:.16}));Pl.scale.set(.9,2.8,.7),Pl.position.y=2.45,Pl.rotation.set(.05,.2,-.08),gi.add(Pl);const Qx=$u(gi,"ᛟ",0,2.55,.78,16766302,1.35,0);Qx.rotation.x=0;const zm=new Li(10251519,1.7,10,2);zm.position.set(0,2.5,.8),gi.add(zm);for(let d=0;d<12;d++){const x=d/12*Math.PI*2,f=4.1+$(d,1801)*4.5,A=Js(gi,Math.cos(x)*f,.3,Math.sin(x)*f,.42+$(d,1802)*.42,d%3===0?5858141:4870476,1803+d);if(d%4===0){const U=new H(new _n(.18,.9,5),new Ct({color:d%2?9336063:6938111,transparent:!0,opacity:.75}));U.position.set(A.position.x,.62,A.position.z),gi.add(U)}}for(let d=0;d<9;d++){const x=$(d,1820)*Math.PI*2,f=2.2+$(d,1821)*6.7,A=new H(new mt(.045+$(d,1822)*.04,6,5),new Ct({color:d%2?7531007:11697663,transparent:!0,opacity:.7}));A.position.set(Math.cos(x)*f,.4+$(d,1823)*2.6,Math.sin(x)*f),gi.add(A)}Re(gi,"powerCircle","Круг Силы"),Ce.push(gi),O(td,nd,2.2,.1);const Pi=new We,rd=-4,sd=48;Pi.position.set(rd,G(rd,sd),sd),Pi.userData={id:"whisperStone",label:"Камень Шёпота"};const od=new H(new ti(8.6,40),new Le({color:1516830,roughness:1,transparent:!0,opacity:.95}));od.rotation.x=-Math.PI/2,od.position.y=.02,Pi.add(od);const ad=new H(new Ft(5.8,.09,8,96),new Ct({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));ad.rotation.x=Math.PI/2,ad.position.y=.075,Pi.add(ad);const Il=new H(new qt(2.1,1),new Le({color:1382171,roughness:.8,metalness:.35}));Il.scale.set(1.15,1.35,.82),Il.position.y=1.75,Il.rotation.set(.05,.25,-.08),Pi.add(Il);for(const d of[-1,1]){const x=[];for(let f=0;f<=14;f++){const A=f/14,U=A*Math.PI*1.15;x.push(new B(d*(1.35+.72*Math.sin(U)),2.45+.85*A+.38*Math.sin(U),-.15+.78*Math.cos(U)-.78))}Ku(Pi,x,3422020,.18)}const Ll=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Ll.forEach((d,x)=>{const f=x/Ll.length*Math.PI*2;$u(Pi,d,Math.cos(f)*3.5,1,Math.sin(f)*3.5,x%2?7265535:12088575,.46,f+Math.PI/2)});for(let d=0;d<9;d++){const x=$(d,1901)*Math.PI*2,f=.7+$(d,1902)*1.7,A=$u(Pi,Ll[d%Ll.length],Math.cos(x)*f,3.4+d*.48,Math.sin(x)*f,d%2?7988991:12614911,.42+$(d,1903)*.22,x);A.rotation.x=($(d,1904)-.5)*.35}const Bm=new Li(10245631,1.5,9,2);Bm.position.set(0,2.2,.5),Pi.add(Bm);for(let d=0;d<11;d++){const x=$(d,1920)*Math.PI*2,f=4.8+$(d,1921)*2.6;Js(Pi,Math.cos(x)*f,.2,Math.sin(x)*f,.28+$(d,1922)*.38,4541258,1923+d)}Re(Pi,"whisperStone","Камень Шёпота"),Ce.push(Pi),O(rd,sd,2.5,.1);const In=75,Sn=30,nn=new We;nn.position.set(In,G(In,Sn),Sn);const ey=le(5986899,1),Hm=V(7.8,.42,5.8,5591885,1);Hm.position.y=.22,nn.add(Hm);const Vm=V(7.4,2.8,.3,6439727,1);Vm.position.set(0,1.4,-2.7),nn.add(Vm);const Gm=V(.3,2.8,5.4,6439727,1);Gm.position.set(-3.7,1.4,0),nn.add(Gm);const Wm=V(.3,2.8,5.4,6439727,1);Wm.position.set(3.7,1.4,0),nn.add(Wm);const Xm=V(2.55,2.8,.3,6439727,1);Xm.position.set(-2.43,1.4,2.7),nn.add(Xm);const jm=V(2.55,2.8,.3,6439727,1);jm.position.set(2.43,1.4,2.7),nn.add(jm);const qm=V(2.3,.72,.3,6439727,1);qm.position.set(0,2.44,2.7),nn.add(qm);const Ym=V(.16,2.18,.34,2826523,1);Ym.position.set(-.66,1.28,2.72),nn.add(Ym);const $m=V(.16,2.18,.34,2826523,1);$m.position.set(.66,1.28,2.72),nn.add($m);const Km=V(1.48,.16,.34,2826523,1);Km.position.set(0,2.34,2.72),nn.add(Km);const Qs=new We;Qs.position.set(-.57,0,2.72),nn.add(Qs);const Zm=V(1.14,2.05,.12,3154457,1);Zm.position.set(.57,1.28,0),Qs.add(Zm);const Jm=new H(new mt(.08,8,6),le(11831883,1));Jm.position.set(.86,1.25,.1),Qs.add(Jm);const ty=new Le({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const d of[-2.35,2.35]){const x=V(1.25,1,.12,2826523,1);x.position.set(d,1.72,2.78),nn.add(x);const f=new H(new Dn(.98,.72,.06),ty);f.position.set(d,1.72,2.86),nn.add(f);const A=V(.07,.78,.1,2826523,1);A.position.set(d,1.72,2.91),nn.add(A);const U=V(1.08,.07,.1,2826523,1);U.position.set(d,1.72,2.91),nn.add(U)}const Qm=new Le({map:Ye,color:2697767,roughness:.98,side:Kt}),da=new H(new Yn(4.25,6.25),Qm),fa=new H(new Yn(4.25,6.25),Qm);da.rotation.x=Math.PI/2,fa.rotation.x=Math.PI/2,da.rotation.z=.62,fa.rotation.z=-.62,da.position.set(-1.02,3.95,0),fa.position.set(1.02,3.95,0),nn.add(da,fa);const ld=V(.22,.22,6.45,2695965,1);ld.position.y=4.75,nn.add(ld);const cd=new H(new Dn(.48,1.35,.48),ey);cd.position.set(1.55,4.8,-.65),nn.add(cd);const ud=V(.62,.1,.62,3420461,1);ud.position.set(1.55,5.48,-.65),nn.add(ud);const e0=V(2.35,.18,1,6636845,1);e0.position.set(0,.62,3.15),nn.add(e0);const t0=V(1.55,.16,.48,5849131,1);t0.position.set(0,.3,3.58),nn.add(t0),Re(nn,"heroHome","Домик героя"),Ce.push(nn),Xe(In,Sn-2.72,7.4,.3,0,.05),Xe(In-3.72,Sn,.3,5.45,0,.05),Xe(In+3.72,Sn,.3,5.45,0,.05),Xe(In-2.43,Sn+2.72,2.55,.3,0,.05),Xe(In+2.43,Sn+2.72,2.55,.3,0,.05);const on=new We;on.position.set(In,G(In,Sn),Sn),on.visible=!1;const n0=V(7,.16,5,4928548,1);n0.position.y=.5,on.add(n0);const i0=V(7,2.65,.18,4139808,1);i0.position.set(0,1.8,-2.45),on.add(i0);const r0=V(.18,2.65,4.9,4139808,1);r0.position.set(-3.45,1.8,0),on.add(r0);const s0=V(.18,2.65,4.9,4139808,1);s0.position.set(3.45,1.8,0),on.add(s0);const o0=V(2.35,2.65,.18,4139808,1);o0.position.set(-2.42,1.8,2.45),on.add(o0);const a0=V(2.35,2.65,.18,4139808,1);a0.position.set(2.42,1.8,2.45),on.add(a0);const l0=V(2.5,.04,2.1,7162673,1);l0.position.set(-.15,.6,.25),on.add(l0);const c0=V(1.65,.65,2.15,4008478,1);c0.position.set(-2.15,.88,-1.25),on.add(c0);const u0=V(1.48,.12,1.35,7033152,1);u0.position.set(-2.15,1.27,-.92),on.add(u0);const d0=V(1.28,.18,.46,11903114,1);d0.position.set(-2.15,1.38,-1.95),on.add(d0);const f0=V(1.65,.12,1.05,5255969,1);f0.position.set(.85,1.15,-.15),on.add(f0);for(const[d,x]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const f=V(.1,.7,.1,3679515,1);f.position.set(d,.72,x),on.add(f)}const h0=V(1.25,.8,.72,5978660,1);h0.position.set(2.1,.95,-1.7),on.add(h0);const p0=V(1.9,.14,.45,5978660,1);p0.position.set(1.35,2,-2.25),on.add(p0);for(const d of[.75,1.35,1.95]){const x=new H(new ct(.08,.1,.35,8),le(7304016,1));x.position.set(d,2.24,-2.22),on.add(x)}const m0=V(1.35,.55,.7,5920078,1);m0.position.set(2.15,.78,.95),on.add(m0);const g0=new H(new _n(.28,.72,8),new Le({color:16744744,emissive:16731402,emissiveIntensity:4}));g0.position.set(2.15,1.42,.95),on.add(g0);const v0=new Li(16747068,2.2,8,2);v0.position.set(2.15,1.7,.95),on.add(v0),Re(on,"heroHomeInterior","Дом героя — внутри"),Ce.push(on);const ds=new We;ds.position.set(In,G(In,Sn),Sn);const dd=new H(new Ft(6.2,.055,7,48),new Le({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));dd.rotation.x=Math.PI/2,dd.position.y=.035,ds.add(dd);for(const[d,x]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const f=V(.18,1,.18,4797735,1);f.position.set(d,.5,x),ds.add(f)}for(const d of[-2.4,2.9]){const x=V(10.2,.12,.12,6308139,1);x.position.set(0,.59,d),ds.add(x)}const ny=le(6906972,1);for(let d=0;d<7;d++){const x=new H(new ct(.32,.4,.12,7),ny);x.position.set(0,.08,4.1+d*.72),x.rotation.y=d*.4,ds.add(x)}yt(In-2.4,Sn+4.8,.48).scale.setScalar(.72),Re(ds,"heroHomeYard","Двор домика героя"),Ce.push(ds),yt(70,18,.75).scale.setScalar(.72);const _0=new H(new ct(.65,.8,.7,7),le(5327426,1));_0.position.set(70,G(70,18)+.35,16.5),S.add(_0);for(const[d,x]of[[68,20],[72,20],[68,16],[72,16]]){const f=V(.16,1.15,.16,4797735,1);f.position.set(d,G(d,x)+.57,x),S.add(f)}const Dl=new We;Dl.position.set(52,G(52,7),7);const fd=new H(new ct(.5,.62,7,8),new xc({map:ne,color:4995371}));fd.rotation.z=Math.PI/2,fd.position.y=.5,Dl.add(fd);const hd=new H(new ct(.53,.53,.12,12),le(7693389,1));hd.rotation.z=Math.PI/2,hd.position.set(3.5,.5,0),Dl.add(hd),S.add(Dl);for(let d=0;d<7;d++){const x=new H(new qt(.14,0),le(6913394,1)),f=d/7*Math.PI*2;x.position.set(67+Math.cos(f)*4,.12+G(67+Math.cos(f)*4,49+Math.sin(f)*4),49+Math.sin(f)*4),S.add(x)}for(let d=0;d<95;d++){const x=$(d,77)*Math.PI*2,f=68+$(d,91)*27,A=Math.cos(x)*f,U=Math.sin(x)*f+2,X=[[Ci,Ri,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[-62,72,15],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([Q,ie,q])=>Math.hypot(A-Q,U-ie)<q);Math.abs(A+57)>9&&!X&&Bx(A,U,.78+$(d,13)*.82)}Al(-10,18,1.55,!1),Al(13,24,1.7,!1),Al(-31,-12,2.15,!0);for(let d=0;d<110;d++){const x=$(d,701)*Math.PI*2,f=15+$(d,702)*50,A=Math.cos(x)*f,U=Math.sin(x)*f+3;if(Math.abs(A)<10&&Math.abs(U)<16)continue;const D=new We;D.position.set(A,G(A,U),U);for(let X=0;X<3;X++){const Q=new H(new _n(.025,.38+$(X,d)*.28,4),new xc({color:X===1?5466175:4282935}));Q.position.set((X-1)*.09,.18,($(X*3,d)-.5)*.12),Q.rotation.z=(X-1)*.22,D.add(Q)}S.add(D)}for(let d=0;d<80;d++){const x=-88+$(d,101)*176,f=-88+$(d,111)*176;if(Math.hypot(x,f+2)>30){const A=new H(new _n(.08,.55+$(d,121)*.7,5),new xc({color:4941888}));A.position.set(x,G(x,f)+.3,f),S.add(A)}}const fs=new We;fs.position.set(29,G(29,25),25),fs.userData={id:"tower",label:"Сторожевая башня"};for(const d of[-2,2])for(const x of[-2,2]){const f=V(.35,7,.35,3942685,1);f.position.set(d,3.5,x),fs.add(f)}const x0=V(5,.35,5,6833965,1);x0.position.y=5.8,fs.add(x0);const y0=new H(new _n(3.8,2.7,4),le(2696482,1));y0.position.y=8,fs.add(y0),Re(fs,"tower","Сторожевая башня"),Ce.push(fs),Xe(29,25,4.8,4.8,0,.08);const ha=(d,x,f,A,U,D)=>{const X=new We;X.userData={id:f,label:A,phase:D,baseX:d,baseZ:x};const Q=new H(new ci(.32,.78,4,8),le(U,.9));Q.position.y=.85,X.add(Q);const ie=new H(new mt(.25,12,8),le(13210736,.9));ie.position.y=1.58,X.add(ie);const q=V(.7,.9,.15,2565407,1);q.position.set(0,.82,-.27),X.add(q),X.position.set(d,G(d,x),x),Re(X,f,A),Ce.push(X),hn.push(X)};ha(9,-8,"elder","Старейшина",7558719,.4),ha(-6,-3,"blacksmith","Кузнец",6044459,1.5),ha(21,1,"hunter","Охотник",4215359,2.4),ha(5,10,"villager","Житель Мидгарда",5858125,3.4),ha(-16,4,"villager2","Житель деревни",6638394,4.2);const iy=new Ct({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),pd=new We;for(let d=0;d<34;d++){const x=new H(new mt(.9+$(d,810)*2.2,8,6),iy);x.position.set(-88+$(d,811)*176,1.8+$(d,812)*2.2,-72+$(d,813)*144),pd.add(x)}S.add(pd);const hs=ab(t);S.add(hs);const dr=hs.userData.anim,M0=new vw,md=new Ze,S0=d=>{var A,U,D,X;if((U=(A=d.target)==null?void 0:A.closest)!=null&&U.call(A,".mid3d-ui"))return;const x=W.domElement.getBoundingClientRect();md.x=(d.clientX-x.left)/x.width*2-1,md.y=-((d.clientY-x.top)/x.height)*2+1,M0.setFromCamera(md,F);const f=M0.intersectObjects(Ce,!0)[0];if(f){let Q=f.object;for(;Q.parent&&!((D=Q.userData)!=null&&D.id);)Q=Q.parent;(X=Q.userData)!=null&&X.id&&e(Q.userData.id)}};W.domElement.addEventListener("pointerup",S0);const ry=d=>{v.current=d,_(d),l(""),on.visible=d,da.visible=!d,fa.visible=!d,ld.visible=!d,cd.visible=!d,ud.visible=!d,d?(o.current.x=In,o.current.z=Sn+.95,u.current.x=0,u.current.z=-1,Qs.rotation.y=-Math.PI/2):(o.current.x=In,o.current.z=Sn+3.75,u.current.x=0,u.current.z=1,Qs.rotation.y=0),hs.position.set(o.current.x,G(o.current.x,o.current.z)+.04,o.current.z)};y.current=ry;const sy=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:-62,z:72,r:6.8},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:Cl,z:Rl,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],w0=()=>{const d=Math.max(1,T.clientWidth),x=Math.max(1,T.clientHeight);F.aspect=d/x,F.updateProjectionMatrix(),W.setSize(d,x,!1)};w0();const E0=new ResizeObserver(w0);E0.observe(T);let gd=0,T0=performance.now();const A0=d=>{const x=Math.min(.05,(d-T0)/1e3);T0=d;const f=o.current,A=Math.hypot(f.dx,f.dz);if(A>.05){const q=6.2*x;Je(f,f.x+f.dx/A*q,f.z+f.dz/A*q),hs.rotation.y=Math.atan2(f.dx,f.dz),u.current.x=f.dx/A,u.current.z=f.dz/A,h(!0)}else h(!1);const U=G(f.x,f.z);if(hs.position.set(f.x,U+.04,f.z),dr){const q=d*.011+dr.phase,pe=A>.05?Math.sin(q)*.58:0,me=A>.05?Math.sin(q+Math.PI)*.42:0;dr.legL.rotation.x=pe,dr.legR.rotation.x=-pe,dr.armL.upper.rotation.x=me,dr.armR.upper.rotation.x=-me,dr.armL.elbow.rotation.x=-Math.abs(me)*.35,dr.armR.elbow.rotation.x=-Math.abs(me)*.35,dr.weapon.rotation.z=-.12+(A>.05?Math.sin(q)*.035:0)}const D=u.current,X=v.current?new B(f.x-D.x*1,U+3.65,f.z-D.z*1):new B(f.x-D.x*2,U+7.2,f.z-D.z*2+11.8);F.position.lerp(X,v.current?.09:.055),F.lookAt(f.x+(v.current?D.x*.9:D.x*1.9),U+(v.current?1.25:1.2),f.z+(v.current?D.z*.9:D.z*1.9));let Q="",ie="";if(v.current)f.z>Sn+1.72&&(Q="Дверь — выйти из дома",ie="heroHomeExit");else for(const q of sy)if(Math.hypot(f.x-q.x,f.z-q.z)<q.r){Q=q.label,ie=q.id;break}l(Q?`${Q}|${ie}`:""),ke.forEach(q=>{const pe=.72+.28*Math.sin(d*.0016+q.phase);q.mesh.scale.set(pe,pe*.42,pe);const me=q.mesh.material;me.opacity=.055+.055*(.5+.5*Math.sin(d*.0016+q.phase))}),xt.forEach(q=>{q.light.intensity=2+Math.sin(d*.012+q.phase)*.5,q.flame.scale.y=.9+Math.sin(d*.009+q.phase)*.12}),pd.children.forEach((q,pe)=>{q.position.x+=Math.sin(d*12e-5+pe)*.003,q.position.z+=Math.cos(d*1e-4+pe)*.002}),z.forEach((q,pe)=>{var Qe,ht;if(q.kind==="deer"){const It=q.g.position.x-hs.position.x,rn=q.g.position.z-hs.position.z,kt=Math.hypot(It,rn);if(kt<11){const $t=((Qe=q.g.userData)==null?void 0:Qe.legJoints)||[],jt=d*.014*(q.speed||1);for(let Ht=0;Ht<4;Ht++){const wn=$t[Ht*2],vi=$t[Ht*2+1];wn&&(wn.rotation.z=Math.sin(jt+Ht*Math.PI)*.1),vi&&(vi.rotation.z=Math.max(0,Math.sin(jt+Ht*Math.PI))*-.18)}const Nt=Math.max(.001,kt),Ut=kt<5.5?.115:.075,dn=q.g.position.x+It/Nt*Ut,On=q.g.position.z+rn/Nt*Ut,ai=dn-30,He=On-53;if(Math.hypot(ai,He)<17)q.g.position.set(dn,G(dn,On),On);else{const Ht=Math.atan2(He,ai),wn=30+Math.cos(Ht)*16,vi=53+Math.sin(Ht)*10;q.g.position.set(wn,G(wn,vi),vi)}q.g.rotation.y=Math.atan2(rn,It),q.g.position.y+=Math.sin(d*.008+pe)*.025;return}}const me=d*.00105*q.speed+q.phase,Be=q.x+Math.cos(me)*q.r,be=q.z+Math.sin(me*.83)*q.r*.62;if(q.g.position.set(Be,G(Be,be),be),q.g.rotation.y=Math.atan2(Math.cos(me*.83),-Math.sin(me)),q.kind==="deer"){const It=((ht=q.g.userData)==null?void 0:ht.legJoints)||[],rn=d*.014*(q.speed||1);for(let kt=0;kt<4;kt++){const $t=It[kt*2],jt=It[kt*2+1];$t&&($t.rotation.z=Math.sin(rn+kt*Math.PI)*.1),jt&&(jt.rotation.z=Math.max(0,Math.sin(rn+kt*Math.PI))*-.18)}q.g.position.y+=Math.sin(d*.006+pe)*.025,q.g.rotation.x=Math.sin(d*.004+q.phase)*.018}}),hn.forEach((q,pe)=>{const me=q.userData.phase||0,Be=q.userData.baseX,be=q.userData.baseZ,Qe=Be+Math.sin(d*28e-5+me)*1.6,ht=be+Math.cos(d*22e-5+me)*1.1;q.position.set(Qe,G(Qe,ht),ht),q.rotation.y=Math.sin(d*4e-4+me)*.5}),W.render(S,F),gd=requestAnimationFrame(A0)};return gd=requestAnimationFrame(A0),()=>{cancelAnimationFrame(gd),E0.disconnect(),W.domElement.removeEventListener("pointerup",S0),ke.forEach(d=>{d.mesh.geometry.dispose(),d.mesh.material.dispose()}),k.dispose(),qe.dispose(),Ye.dispose(),W.dispose(),S.traverse(d=>{var x,f,A,U;d.isMesh&&((f=(x=d.geometry)==null?void 0:x.dispose)==null||f.call(x),Array.isArray(d.material)?d.material.forEach(D=>{var X;return(X=D.dispose)==null?void 0:X.call(D)}):(U=(A=d.material)==null?void 0:A.dispose)==null||U.call(A))}),W.domElement.remove(),y.current=null}},[t.id,e,n]);const w=T=>{const S=r.current,F=s.current;if(!S||!F)return;const W=S.getBoundingClientRect(),te=W.left+W.width/2,ae=W.top+W.height/2,ue=48;let G=T.clientX-te,Z=T.clientY-ae;const k=Math.hypot(G,Z);k>ue&&(G=G/k*ue,Z=Z/k*ue),F.style.transform=`translate(${G}px,${Z}px)`,o.current.dx=G/ue,o.current.dz=Z/ue},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=T=>{var Z,k;const S=r.current;if(!S)return;const F=T.target;if((Z=F.closest)!=null&&Z.call(F,".mid3d-action")||(k=F.closest)!=null&&k.call(F,".mid3d-interact"))return;const W=S.getBoundingClientRect(),te=26;T.clientX>=W.left-te&&T.clientX<=W.right+te&&T.clientY>=W.top-78&&T.clientY<=W.bottom+26&&(T.currentTarget.setPointerCapture(T.pointerId),w(T))},I=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&w(T)},N=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId),R()};return j.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:I,onPointerUp:N,onPointerCancel:N,onContextMenu:T=>T.preventDefault(),children:[j.jsxs("div",{className:"mid3d-ui mid3d-top",children:[j.jsxs("div",{className:"mid3d-pill",children:[j.jsx("b",{children:"МИДГАРД"}),j.jsx("span",{children:"Деревня • река • лес • святилища"})]}),j.jsxs("div",{className:"mid3d-pill",children:[j.jsx("b",{children:"ᛟ"}),j.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&j.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[j.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),j.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&j.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[j.jsx("b",{children:"Камень Трёх Нитей"}),j.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>M(!1),children:"Продолжить путь"})]}),p&&j.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[j.jsx("b",{children:"🜂 Круг Силы"}),j.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),j.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!p&&!g&&(()=>{const[T,S]=a.split("|"),F=S==="heroHome"||S==="heroHomeExit";return j.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[j.jsx("b",{children:T}),j.jsx("span",{children:F?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),j.jsx("button",{onPointerDown:W=>W.stopPropagation(),onClick:()=>{var W,te;S==="ritual"?m(!0):S==="forestEvent"?M(!0):S==="heroHome"?(W=y.current)==null||W.call(y,!0):S==="heroHomeExit"?(te=y.current)==null||te.call(y,!1):e(S)},children:F?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),j.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:j.jsx("div",{className:"mid3d-knob",ref:s})}),j.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:T=>T.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),j.jsx("div",{className:"mid3d-ui mid3d-hint",children:E?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function cb(){const[t,e]=Tt.useState(()=>G1().hero?{t:"tree"}:{t:"choose"}),[n,i]=Tt.useState(G1),[r,s]=Tt.useState(""),[o,a]=Tt.useState(""),[l,c]=Tt.useState(""),h=Tt.useRef(0),[p,m]=Tt.useState(null),[g,M]=Tt.useState(null),[E,_]=Tt.useState(!1),[u,v]=Tt.useState(0),[y,w]=Tt.useState(0),[R,P]=Tt.useState(0),[I,N]=Tt.useState(""),[T,S]=Tt.useState(!1),[F,W]=Tt.useState(!1),[te,ae]=Tt.useState(""),[ue,G]=Tt.useState(.06);Tt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Tt.useEffect(()=>{var O,Ie,ce,de;(O=bt==null?void 0:bt.ready)==null||O.call(bt),(Ie=bt==null?void 0:bt.expand)==null||Ie.call(bt),(ce=bt==null?void 0:bt.setHeaderColor)==null||ce.call(bt,"#0b0f0c"),(de=bt==null?void 0:bt.setBackgroundColor)==null||de.call(bt,"#0b0f0c")},[]),Tt.useEffect(()=>{if(!(bt!=null&&bt.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(bt.BackButton.show(),bt.BackButton.onClick(O)):bt.BackButton.hide(),()=>{var Ie,ce;(ce=(Ie=bt.BackButton)==null?void 0:Ie.offClick)==null||ce.call(Ie,O)}},[t,n.hero]),Tt.useEffect(()=>{m(null),M(null),_(!1),ae(""),S(!1)},[t]);const Z=O=>{c(O),window.clearTimeout(h.current),h.current=window.setTimeout(()=>c(""),1800)},k=(O="light")=>{var Ie,ce,de,Je;try{O==="success"?(ce=(Ie=bt==null?void 0:bt.HapticFeedback)==null?void 0:Ie.notificationOccurred)==null||ce.call(Ie,"success"):(Je=(de=bt==null?void 0:bt.HapticFeedback)==null?void 0:de.impactOccurred)==null||Je.call(de,"light")}catch{}},ne=O=>e(O),oe=O=>{k(),e({t:"realm",id:O.id})},Ee=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ze=()=>{const O=Ee();if(O<=0){Z("Дозор только начался — искры ещё копятся.");return}i(Ie=>({...Ie,sparks:Ie.sparks+O,watch:Date.now()})),k("success"),Z("Дозор завершён: +"+O+" ✨")},dt=()=>{if(n.gift===Ra())return;const Ie=(n.gift?Math.round((Date.parse(Ra())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ce=Cf[Ie-1];i(de=>({...de,sparks:de.sparks+ce,gift:Ra(),streak:Ie})),k("success"),Z("Дар Древа, день "+Ie+": +"+ce+" ✨")},Re=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),k("success"),Z("Путь начинается, "+o+"!"),e({t:"tree"}))},le=n.hero?Rf.find(O=>O.id===n.hero.id):null,V=O=>Math.floor(Math.random()*O),ge=O=>n.trials.filter(Ie=>Ie.startsWith(O+":")).length,Fe=O=>{if(n.artifacts.includes(O.id)){Z("Мир покорён. Артефакт хранится в листе героя.");return}k(),e({t:"trial",id:O.id})},nt=(O,Ie,ce)=>{const de=Ie===2;i(Je=>({...Je,sparks:Je.sparks+ce+(de?30:0),trials:[...Je.trials,O+":"+Ie],artifacts:de?[...Je.artifacts,O]:Je.artifacts})),de&&(k("success"),Z("Мир пройден! Артефакт: "+If[O]))},Ce=(O,Ie)=>{if(p!==null)return;const ce=ge(O),de=Pf[O][ce];if(Ie===de.c){m(Ie),k("success");const Je=12+ce*3+((le==null?void 0:le.id)==="dwarf"?6:0);Z("Верно! Сундук хозяина: +"+Je+" ✨"),nt(O,ce,Je);return}if(n.powers.includes("mimirEye")){m(de.c),i(it=>({...it,powers:it.powers.filter(L=>L!=="mimirEye")}));const Je=8+ce*2;k("success"),Z("Око Мимира раскрыло истину. Ответ исправлен. +"+Je+" ✨"),nt(O,ce,Je);return}if(n.powers.includes("nornThread")){m(Ie),i(it=>({...it,powers:it.powers.filter(L=>L!=="nornThread")}));const Je=6+ce*2;k("success"),Z("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Je+" ✨"),nt(O,ce,Je);return}m(Ie),k(),N(Pa[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},xt=O=>{const Ie=ge(O),ce=Pf[O][Ie],de=ce.a.findIndex((Je,it)=>it!==ce.c&&it!==g);M(de),_(!0),k(),Z("Шёпот ветров уносит один ответ...")},hn=O=>{const Ie=Pa[O],ce=n.powers.includes("ashBreath");v(Ie.hp),w(le.hp+(ce?25:0)),P(le.en+(ce?2:0)),ae(""),S(!1),W(!1),N(ce?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Ie.name+" поднимает оружие!"),ce&&i(de=>({...de,powers:de.powers.filter(Je=>Je!=="ashBreath")})),e({t:"fight",id:O})},z=(O,Ie)=>{if(te)return;const ce=Pa[O],de=ge(O);let Je=0,it="",L=R,b=T;if(Ie==="hit"&&(Je=le.str+V(4),n.powers.includes("fireOath")&&(Je+=5,i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="fireOath")})),it="Огненный обет! "),le.id==="berserk"&&y<=le.hp/2&&(Je*=2,it+="Медвежья ярость! "),it+="Ты бьёшь: "+le.weapon+" — −"+Je+" хозяину."),Ie==="rune"){if(R<4){Z("Мало энергии для заклинания!");return}L=R-4,Je=le.en+2+V(5),it="Руническое заклинание вспыхивает: −"+Je+" хозяину."}Ie==="shield"&&(b=!0,it="Ты поднимаешь щит — удар ослабнет.");const ee=u-Je;if(ee<=0){v(0),P(L),ae("win");const ke=8+de*2;N("Хозяин повержен! Награда: +"+ke+" ✨"),nt(O,de,ke);return}let he=ce.atk+V(3),_e="";b&&(he=Math.ceil(he*.3),_e=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(he=Math.ceil(he*.65),i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="iceOath")})),_e+=" Ледяной обет сковал удар врага."),le.id==="dwarf"&&(he=Math.ceil(he*.75));let fe=y;if(le.id==="viking"&&!F&&fe-he<=0&&(W(!0),he=0,_e=" Крылья бури поглотили смертельный удар!"),fe=fe-he,v(ee),w(Math.max(0,fe)),P(L),S(!1),fe<=0&&n.powers.includes("yggdrasilCall")){i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="yggdrasilCall")})),w(30),N(it+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(fe<=0){ae("lose"),i(ke=>({...ke,sparks:Math.max(0,ke.sparks-10)})),N(it+" "+ce.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}N(it+_e+" "+ce.name+" отвечает: −"+he+".")},Pt=O=>{ge(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},at=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,Xe=O=>O==="tree"?{t:"tree"}:{t:O};return j.jsxs("div",{className:"app",children:[j.jsx("style",{children:sb}),j.jsxs("div",{className:"hdr",children:[t.t==="tree"&&j.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&j.jsx("button",{className:"back",onClick:()=>ne({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&j.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&j.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&j.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&j.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&j.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&j.jsx("div",{className:"title",children:"⚔ Бой"}),j.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&j.jsxs("div",{className:"scroll choose-screen",children:[j.jsxs("div",{className:"card center choose-intro",children:[j.jsx("div",{className:"big",children:"ᛉ"}),j.jsx("div",{className:"qhead2",children:"Выбери героя"}),j.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Rf.map(O=>j.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),k()},children:[j.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:j.jsx(Br,{name:O.img,className:"himg"})}),j.jsxs("span",{className:"hinfo",children:[j.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),j.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),j.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),j.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&j.jsxs("div",{className:"card",children:[j.jsx("div",{className:"qhead2",children:"Имя героя"}),j.jsx("div",{className:"chips",children:(Rf.find(O=>O.id===r).gender==="f"?ib:rb).map(O=>j.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),k()},children:O},O))})]}),j.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Re,children:"Вступить на путь"})]}),t.t==="tree"&&j.jsxs("div",{className:"maparea",children:[j.jsx("div",{className:"mapwrap",children:j.jsxs("div",{className:"mapcanvas",children:[j.jsx(Br,{name:"tree",className:"mapimg"}),wc.map(O=>j.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>oe(O),children:[j.jsxs("div",{className:"amulet-wrap",children:[j.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),j.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),j.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),j.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),j.jsx("div",{className:"fadeT"}),j.jsx("div",{className:"fadeB"}),j.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&le&&n.hero&&j.jsxs("button",{className:"herobar",onClick:()=>ne({t:"hero"}),children:[j.jsxs("span",{className:"hbface",style:{borderColor:le.color,color:le.color},children:[j.jsx(Br,{name:le.img,className:"hbimg"}),le.sym]}),j.jsxs("span",{className:"hbname",children:[n.hero.name,j.jsx("i",{children:le.race})]}),j.jsxs("span",{className:"hbst",children:["⚔ ",le.str," ✨ ",le.en," ⏳ ",Ee()]}),j.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=wc.find(Ie=>Ie.id===t.id);if(O.id==="midgard"){if(!le)return null;const Ie=ce=>{if(k(),ce==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?Z("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:present:reward"])]})),k("success"),Z("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):Z("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ce==="norns"){Z("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ce==="threeThreads"){Z("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(ce==="forge"||ce==="blacksmith"){Z("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ce==="house"||ce==="elder"){Z("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ce==="port"){Z("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ce==="rune"){Z("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ce==="ashgrove"){Z("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ce==="runefield"){Z("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ce==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?Z("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:past:reward"])]})),k("success"),Z("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):Z("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ce==="forestCache"){n.done.includes("forest:cache")?Z("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(de=>({...de,sparks:de.sparks+18,done:[...new Set([...de.done,"forest:cache"])]})),k("success"),Z("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(ce==="forestWhisper"){n.done.includes("forest:whisper")?Z("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(de=>({...de,sparks:de.sparks+16,done:[...new Set([...de.done,"forest:whisper"])]})),k("success"),Z("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(ce==="forestThread"){n.done.includes("forest:thread")?Z("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(de=>({...de,sparks:de.sparks+22,done:[...new Set([...de.done,"forest:thread"])]})),k("success"),Z("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(ce==="heroHome"){Z("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(ce==="hunterCamp"){n.done.includes("forest:camp")?Z("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(de=>({...de,sparks:de.sparks+14,done:[...new Set([...de.done,"forest:camp"])]})),k("success"),Z("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(ce==="deepGrove"){n.done.includes("forest:grove")?Z("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(de=>({...de,sparks:de.sparks+17,done:[...new Set([...de.done,"forest:grove"])]})),k("success"),Z("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(ce==="fallenAsh"){n.done.includes("forest:ash")?Z("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(de=>({...de,sparks:de.sparks+21,done:[...new Set([...de.done,"forest:ash"])]})),k("success"),Z("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(ce==="deer"){Z("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(ce==="hoddmimir"){Z("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ce==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?Z("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:future:reward"])]})),k("success"),Z("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):Z("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ce==="forestEvent"){n.done.includes("forest:choice")&&Z("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ce==="forestEvent:past"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:past"])]})),k("success"),Z("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ce==="forestEvent:present"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:present"])]})),k("success"),Z("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ce==="forestEvent:future"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:future"])]})),k("success"),Z("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ce==="event"){Z("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ce.startsWith("ritual:")){const de=ce.slice(7),Je={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[de];if(!L)return;if(n.powers.includes(L)){Z(Je[de]+" уже пробуждён. Его сила ждёт своего часа.");return}i(ee=>({...ee,powers:[...new Set([...ee.powers,L])],done:[...new Set([...ee.done,"ritual:"+de])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};k("success"),Z(b[de]);return}};return j.jsx(lb,{h:le,on:Ie,eventDone:n.done.includes("forest:choice")})}return j.jsxs("div",{className:"content",children:[j.jsx(Br,{name:O.id,className:"bgimg"}),j.jsx("div",{className:"veil"}),j.jsxs("div",{className:"banner",children:[j.jsx("span",{className:"bemoji",children:O.emoji}),j.jsxs("div",{children:[j.jsx("div",{className:"bname",children:O.name}),j.jsx("div",{className:"btag",children:O.tag})]})]}),j.jsxs("button",{className:"gate",onClick:()=>Fe(O),children:[j.jsxs("span",{className:"gwrap",children:[j.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),j.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),j.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),j.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=wc.find(Je=>Je.id===t.id),Ie=Pa[O.id],ce=ge(O.id);if(ce>=3)return j.jsx("div",{className:"scroll",children:j.jsxs("div",{className:"card center",children:[j.jsx("div",{className:"big",children:"🏺"}),j.jsx("div",{className:"qhead2",children:"Мир покорён!"}),j.jsxs("p",{className:"dim",children:["Артефакт: ",If[O.id]]}),j.jsx("button",{className:"btn gold",onClick:()=>ne({t:"realm",id:O.id}),children:"К вратам"})]})});const de=Pf[O.id][ce];return j.jsxs("div",{className:"scroll",children:[j.jsxs("div",{className:"mhead",children:[j.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[j.jsx(Br,{name:W1[O.id],className:"himg"}),Ie.sym]}),j.jsx("span",{className:"mname2",style:{color:O.color},children:Ie.name}),j.jsxs("span",{className:"mtitle",children:[Ie.title," • испытание ",ce+1," из 3"]})]}),ce===0&&j.jsxs("div",{className:"greet",children:["«",Ie.greet,"»"]}),j.jsxs("div",{className:"cloud",children:[j.jsx("div",{className:"riddle",children:de.q}),de.a.map((Je,it)=>j.jsx("button",{className:"ans"+(p!==null?it===de.c?" good":it===p?" bad":" off":g===it?" off":""),onClick:()=>Ce(O.id,it),children:Je},it)),(le==null?void 0:le.id)==="elf"&&!E&&p===null&&j.jsx("button",{className:"btn rune",onClick:()=>xt(O.id),children:"🌀 Шёпот ветров"}),p!==null&&(p===de.c?j.jsx("button",{className:"btn gold",onClick:()=>Pt(O.id),children:"Открыть сундук →"}):j.jsx("button",{className:"btn",onClick:()=>hn(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=wc.find(ce=>ce.id===t.id),Ie=Pa[O.id];return j.jsxs("div",{className:"scroll",children:[j.jsxs("div",{className:"duel",children:[j.jsxs("div",{className:"dside",children:[j.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[j.jsx(Br,{name:W1[O.id],className:"himg"}),Ie.sym]}),j.jsx("span",{className:"dname",style:{color:O.color},children:Ie.name}),j.jsx("span",{className:"dhp",children:j.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Ie.hp*100)+"%",background:O.color}})}),j.jsxs("span",{className:"dnum",children:[u,"/",Ie.hp]})]}),j.jsx("span",{className:"dvs",children:"⚔"}),j.jsxs("div",{className:"dside",children:[j.jsxs("span",{className:"dface",style:{borderColor:le.color,color:le.color},children:[j.jsx(Br,{name:le.img,className:"himg"}),le.sym]}),j.jsx("span",{className:"dname",style:{color:le.color},children:n.hero.name}),j.jsx("span",{className:"dhp",children:j.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/le.hp*100)+"%",background:"#7ee787"}})}),j.jsx("span",{className:"denergy",children:Array.from({length:le.en}).map((ce,de)=>j.jsx("span",{className:"pip"+(de<R?" on":"")},de))})]})]}),j.jsx("div",{className:"flog",children:I}),!te&&j.jsxs("div",{className:"acts",children:[j.jsxs("button",{className:"btn gold",onClick:()=>z(O.id,"hit"),children:["⚔ Удар: ",le.weapon]}),j.jsx("button",{className:"btn rune",onClick:()=>z(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),j.jsx("button",{className:"btn shield",onClick:()=>z(O.id,"shield"),children:"🛡 Щит"})]}),te==="win"&&j.jsx("button",{className:"btn gold",onClick:()=>Pt(O.id),children:"Забрать награду →"}),te==="lose"&&j.jsx("button",{className:"btn ghost",onClick:()=>ne({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&le&&n.hero&&j.jsx("div",{className:"scroll",children:j.jsxs("div",{className:"card center",children:[j.jsx("span",{className:"hface bigface",style:{borderColor:le.color,color:le.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:j.jsx(Br,{name:le.img,className:"himg"})}),j.jsxs("div",{className:"qhead2",style:{color:le.color},children:[n.hero.name," • ",le.race]}),j.jsxs("div",{className:"stats",children:[j.jsxs("div",{className:"stat",children:[j.jsxs("b",{children:["⚔ ",le.str]}),j.jsx("span",{children:"сила"})]}),j.jsxs("div",{className:"stat",children:[j.jsxs("b",{children:["✨ ",le.en]}),j.jsx("span",{children:"энергия"})]}),j.jsxs("div",{className:"stat",children:[j.jsxs("b",{children:["❤ ",le.hp]}),j.jsx("span",{children:"здоровье"})]})]}),j.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",j.jsx("b",{children:le.weapon})]}),j.jsxs("div",{className:"hrow",children:["🌀 ",le.ability,": ",le.abilityDesc]}),j.jsxs("div",{className:"hrow",children:["✨ Искр: ",j.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",j.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&j.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>If[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===Ra(),ce=(n.gift?Math.round((Date.parse(Ra())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,de=O?n.streak:ce;return j.jsxs("div",{className:"scroll",children:[j.jsxs("div",{className:"card center",children:[j.jsx("div",{className:"big",children:"🎁"}),j.jsx("div",{className:"qhead2",children:"Дар Древа"}),j.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),j.jsx("div",{className:"days",children:Cf.map((Je,it)=>j.jsxs("span",{className:"day"+(it+1===de?" on":it+1<de&&O?" done":""),children:[j.jsx("b",{children:Je}),"день ",it+1]},it))}),O?j.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):j.jsxs("button",{className:"btn gold",onClick:dt,children:["Забрать дар +",Cf[ce-1]," ✨"]})]}),j.jsxs("div",{className:"card center",children:[j.jsx("div",{className:"big",children:"⏳"}),j.jsx("div",{className:"qhead2",children:"Дозор героя"}),j.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),j.jsxs("button",{className:"btn gold",onClick:ze,children:["Завершить дозор · +",Ee()," ✨"]})]})]})})(),t.t==="hall"&&j.jsx("div",{className:"scroll",children:j.jsxs("div",{className:"card center",children:[j.jsx("div",{className:"big",children:"🏛️"}),j.jsx("div",{className:"qhead2",children:"Чертог путника"}),j.jsxs("div",{className:"stats",children:[j.jsxs("div",{className:"stat",children:[j.jsxs("b",{children:["✨ ",n.sparks]}),j.jsx("span",{children:"Искр"})]}),j.jsxs("div",{className:"stat",children:[j.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),j.jsx("span",{children:"артефакты"})]})]}),j.jsxs("div",{className:"rank",children:["🏆 Ранг: ",nb(n.sparks)]}),n.hero&&le&&j.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",le.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&j.jsx("div",{className:"nav",children:tb.map(O=>j.jsxs("button",{className:"navbtn"+(at(O.id)?" on":""),onClick:()=>ne(Xe(O.id)),children:[j.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&j.jsx("div",{className:"toast",children:l})]})}rx(document.getElementById("root")).render(j.jsx(cb,{}));
