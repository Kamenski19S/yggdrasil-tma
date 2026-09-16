(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var tv={exports:{}},vu={},nv={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),wy=Symbol.for("react.portal"),Sy=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),by=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),Ry=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),F0=Symbol.iterator;function Ly(t){return t===null||typeof t!="object"?null:(t=F0&&t[F0]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rv=Object.assign,sv={};function Jo(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ov(){}ov.prototype=Jo.prototype;function xp(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||iv}var yp=xp.prototype=new ov;yp.constructor=xp;rv(yp,Jo.prototype);yp.isPureReactComponent=!0;var k0=Array.isArray,av=Object.prototype.hasOwnProperty,Mp={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,i)&&!lv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:s,ref:o,props:r,_owner:Mp.current}}function Dy(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function Ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var O0=/\/+/g;function Md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ny(""+t.key):e.toString(36)}function Ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ml:case wy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Md(o,0):i,k0(r)?(n="",t!=null&&(n=t.replace(O0,"$&/")+"/"),Ec(r,e,n,"",function(c){return c})):r!=null&&(wp(r)&&(r=Dy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(O0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",k0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Md(s,a);o+=Ec(s,e,n,l,r)}else if(l=Ly(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Md(s,a++),o+=Ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var i=[],r=0;return Ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ni={current:null},Tc={transition:null},Fy={ReactCurrentDispatcher:ni,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:Mp};function uv(){throw Error("act(...) is not supported in production builds of React.")}Tt.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Tt.Component=Jo;Tt.Fragment=Sy;Tt.Profiler=Ty;Tt.PureComponent=xp;Tt.StrictMode=Ey;Tt.Suspense=Ry;Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;Tt.act=uv;Tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)av.call(e,l)&&!lv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:s,props:i,_owner:o}};Tt.createContext=function(t){return t={$$typeof:by,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ay,_context:t},t.Consumer=t};Tt.createElement=cv;Tt.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};Tt.createRef=function(){return{current:null}};Tt.forwardRef=function(t){return{$$typeof:Cy,render:t}};Tt.isValidElement=wp;Tt.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:Uy}};Tt.memo=function(t,e){return{$$typeof:Py,type:t,compare:e===void 0?null:e}};Tt.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};Tt.unstable_act=uv;Tt.useCallback=function(t,e){return ni.current.useCallback(t,e)};Tt.useContext=function(t){return ni.current.useContext(t)};Tt.useDebugValue=function(){};Tt.useDeferredValue=function(t){return ni.current.useDeferredValue(t)};Tt.useEffect=function(t,e){return ni.current.useEffect(t,e)};Tt.useId=function(){return ni.current.useId()};Tt.useImperativeHandle=function(t,e,n){return ni.current.useImperativeHandle(t,e,n)};Tt.useInsertionEffect=function(t,e){return ni.current.useInsertionEffect(t,e)};Tt.useLayoutEffect=function(t,e){return ni.current.useLayoutEffect(t,e)};Tt.useMemo=function(t,e){return ni.current.useMemo(t,e)};Tt.useReducer=function(t,e,n){return ni.current.useReducer(t,e,n)};Tt.useRef=function(t){return ni.current.useRef(t)};Tt.useState=function(t){return ni.current.useState(t)};Tt.useSyncExternalStore=function(t,e,n){return ni.current.useSyncExternalStore(t,e,n)};Tt.useTransition=function(){return ni.current.useTransition()};Tt.version="18.3.1";nv.exports=Tt;var Ct=nv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=Ct,Oy=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),By=Object.prototype.hasOwnProperty,Hy=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)By.call(e,i)&&!Vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Oy,type:t,key:s,ref:o,props:r,_owner:Hy.current}}vu.Fragment=zy;vu.jsx=dv;vu.jsxs=dv;tv.exports=vu;var Y=tv.exports,fv={exports:{}},Ei={},hv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,oe){var ue=H.length;H.push(oe);e:for(;0<ue;){var Ce=ue-1>>>1,Oe=H[Ce];if(0<r(Oe,oe))H[Ce]=oe,H[ue]=Oe,ue=Ce;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ue=H.pop();if(ue!==oe){H[0]=ue;e:for(var Ce=0,Oe=H.length,yt=Oe>>>1;Ce<yt;){var ht=2*(Ce+1)-1,Ie=H[ht],pe=ht+1,ve=H[pe];if(0>r(Ie,ue))pe<Oe&&0>r(ve,Ie)?(H[Ce]=ve,H[pe]=ue,Ce=pe):(H[Ce]=Ie,H[ht]=ue,Ce=ht);else if(pe<Oe&&0>r(ve,ue))H[Ce]=ve,H[pe]=ue,Ce=pe;else break e}}return oe}function r(H,oe){var ue=H.sortIndex-oe.sortIndex;return ue!==0?ue:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,m=3,g=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var oe=n(c);oe!==null;){if(oe.callback===null)i(c);else if(oe.startTime<=H)i(c),oe.sortIndex=oe.expirationTime,e(l,oe);else break;oe=n(c)}}function E(H){if(T=!1,y(H),!w)if(n(l)!==null)w=!0,X(P);else{var oe=n(c);oe!==null&&ee(E,oe.startTime-H)}}function P(H,oe){w=!1,T&&(T=!1,d(U),U=-1),g=!0;var ue=m;try{for(y(oe),p=n(l);p!==null&&(!(p.expirationTime>oe)||H&&!k());){var Ce=p.callback;if(typeof Ce=="function"){p.callback=null,m=p.priorityLevel;var Oe=Ce(p.expirationTime<=oe);oe=t.unstable_now(),typeof Oe=="function"?p.callback=Oe:p===n(l)&&i(l),y(oe)}else i(l);p=n(l)}if(p!==null)var yt=!0;else{var ht=n(c);ht!==null&&ee(E,ht.startTime-oe),yt=!1}return yt}finally{p=null,m=ue,g=!1}}var I=!1,D=null,U=-1,A=5,M=-1;function k(){return!(t.unstable_now()-M<A)}function q(){if(D!==null){var H=t.unstable_now();M=H;var oe=!0;try{oe=D(!0,H)}finally{oe?re():(I=!1,D=null)}}else I=!1}var re;if(typeof v=="function")re=function(){v(q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=q,re=function(){fe.postMessage(null)}}else re=function(){x(q,0)};function X(H){D=H,I||(I=!0,re())}function ee(H,oe){U=x(function(){H(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,X(P))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ue=m;m=oe;try{return H()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=m;m=H;try{return oe()}finally{m=ue}},t.unstable_scheduleCallback=function(H,oe,ue){var Ce=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ce+ue:Ce):ue=Ce,H){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=ue+Oe,H={id:h++,callback:oe,priorityLevel:H,startTime:ue,expirationTime:Oe,sortIndex:-1},ue>Ce?(H.sortIndex=ue,e(c,H),n(l)===null&&H===n(c)&&(T?(d(U),U=-1):T=!0,ee(E,ue-Ce))):(H.sortIndex=Oe,e(l,H),w||g||(w=!0,X(P))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var oe=m;return function(){var ue=m;m=oe;try{return H.apply(this,arguments)}finally{m=ue}}}})(pv);hv.exports=pv;var Gy=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=Ct,Si=Gy;function Ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,qa={};function $s(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(qa[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z0={},B0={};function jy(t){return Ff.call(B0,t)?!0:Ff.call(z0,t)?!1:Xy.test(t)?B0[t]=!0:(z0[t]=!0,!1)}function qy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yy(t,e,n,i){if(e===null||typeof e>"u"||qy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ii(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wn[t]=new ii(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wn[e]=new ii(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wn[t]=new ii(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wn[t]=new ii(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wn[t]=new ii(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wn[t]=new ii(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wn[t]=new ii(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wn[t]=new ii(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wn[t]=new ii(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sp=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sp,Ep);Wn[e]=new ii(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sp,Ep);Wn[e]=new ii(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sp,Ep);Wn[e]=new ii(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wn[t]=new ii(t,1,!1,t.toLowerCase(),null,!1,!1)});Wn.xlinkHref=new ii("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wn[t]=new ii(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,i){var r=Wn.hasOwnProperty(e)?Wn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yy(e,n,r,i)&&(n=null),i||r===null?jy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Rr=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),xo=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),H0=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=H0&&t[H0]||t["@@iterator"],typeof t=="function"?t:null)}var un=Object.assign,wd;function Pa(t){if(wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var Sd=!1;function Ed(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function $y(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yo:return"Fragment";case xo:return"Portal";case kf:return"Profiler";case Ap:return"StrictMode";case Of:return"Suspense";case zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function Ky(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===Ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function as(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zy(t){var e=xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=Zy(t))}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return un({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function V0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=as(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mv(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function Vf(t,e){Mv(t,e);var n=as(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,as(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function G0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||Hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return un({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ee(92));if(Ia(n)){if(1<n.length)throw Error(Ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:as(n)}}function wv(t,e){var n=as(e.value),i=as(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function X0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,Ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){Jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Qy=un({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(Qy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function Rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $f=null,Do=null,No=null;function j0(t){if(t=_l(t)){if(typeof $f!="function")throw Error(Ee(280));var e=t.stateNode;e&&(e=wu(e),$f(t.stateNode,t.type,e))}}function bv(t){Do?No?No.push(t):No=[t]:Do=t}function Cv(){if(Do){var t=Do,e=No;if(No=Do=null,j0(t),e)for(t=0;t<e.length;t++)j0(e[t])}}function Rv(t,e){return t(e)}function Pv(){}var Td=!1;function Iv(t,e,n){if(Td)return t(e,n);Td=!0;try{return Rv(t,e,n)}finally{Td=!1,(Do!==null||No!==null)&&(Pv(),Cv())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ee(231,e,typeof n));return n}var Kf=!1;if(Tr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Kf=!1}function e2(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Fa=!1,Vc=null,Gc=!1,Zf=null,t2={onError:function(t){Fa=!0,Vc=t}};function n2(t,e,n,i,r,s,o,a,l){Fa=!1,Vc=null,e2.apply(t2,arguments)}function i2(t,e,n,i,r,s,o,a,l){if(n2.apply(this,arguments),Fa){if(Fa){var c=Vc;Fa=!1,Vc=null}else throw Error(Ee(198));Gc||(Gc=!0,Zf=c)}}function Ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q0(t){if(Ks(t)!==t)throw Error(Ee(188))}function r2(t){var e=t.alternate;if(!e){if(e=Ks(t),e===null)throw Error(Ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return q0(r),t;if(s===i)return q0(r),e;s=s.sibling}throw Error(Ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ee(189))}}if(n.alternate!==i)throw Error(Ee(190))}if(n.tag!==3)throw Error(Ee(188));return n.stateNode.current===n?t:e}function Dv(t){return t=r2(t),t!==null?Nv(t):null}function Nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=Si.unstable_scheduleCallback,Y0=Si.unstable_cancelCallback,s2=Si.unstable_shouldYield,o2=Si.unstable_requestPaint,mn=Si.unstable_now,a2=Si.unstable_getCurrentPriorityLevel,Pp=Si.unstable_ImmediatePriority,Fv=Si.unstable_UserBlockingPriority,Wc=Si.unstable_NormalPriority,l2=Si.unstable_LowPriority,kv=Si.unstable_IdlePriority,_u=null,or=null;function c2(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Yi=Math.clz32?Math.clz32:f2,u2=Math.log,d2=Math.LN2;function f2(t){return t>>>=0,t===0?32:31-(u2(t)/d2|0)|0}var Bl=64,Hl=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=La(a):(s&=o,s!==0&&(i=La(s)))}else o=n&~r,o!==0?i=La(o):s!==0&&(i=La(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yi(e),r=1<<n,i|=t[n],e&=~r;return i}function h2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=h2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function Ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yi(e),t[e]=n}function m2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ht=0;function zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,Lp,Hv,Vv,Gv,Qf=!1,Vl=[],Zr=null,Jr=null,Qr=null,Ka=new Map,Za=new Map,Xr=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $0(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function v2(t,e,n,i,r){switch(e){case"focusin":return Zr=ma(Zr,t,e,n,i,r),!0;case"dragenter":return Jr=ma(Jr,t,e,n,i,r),!0;case"mouseover":return Qr=ma(Qr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ka.set(s,ma(Ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,ma(Za.get(s)||null,t,e,n,i,r)),!0}return!1}function Wv(t){var e=Us(t.target);if(e!==null){var n=Ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=_l(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function K0(t,e,n){Ac(t)&&n.delete(e)}function _2(){Qf=!1,Zr!==null&&Ac(Zr)&&(Zr=null),Jr!==null&&Ac(Jr)&&(Jr=null),Qr!==null&&Ac(Qr)&&(Qr=null),Ka.forEach(K0),Za.forEach(K0)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,Si.unstable_scheduleCallback(Si.unstable_NormalPriority,_2)))}function Ja(t){function e(r){return ga(r,t)}if(0<Vl.length){ga(Vl[0],t);for(var n=1;n<Vl.length;n++){var i=Vl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zr!==null&&ga(Zr,t),Jr!==null&&ga(Jr,t),Qr!==null&&ga(Qr,t),Ka.forEach(e),Za.forEach(e),n=0;n<Xr.length;n++)i=Xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&Xr.shift()}var Uo=Rr.ReactCurrentBatchConfig,jc=!0;function x2(t,e,n,i){var r=Ht,s=Uo.transition;Uo.transition=null;try{Ht=1,Dp(t,e,n,i)}finally{Ht=r,Uo.transition=s}}function y2(t,e,n,i){var r=Ht,s=Uo.transition;Uo.transition=null;try{Ht=4,Dp(t,e,n,i)}finally{Ht=r,Uo.transition=s}}function Dp(t,e,n,i){if(jc){var r=eh(t,e,n,i);if(r===null)Fd(t,e,i,qc,n),$0(t,i);else if(v2(r,t,e,n,i))i.stopPropagation();else if($0(t,i),e&4&&-1<g2.indexOf(t)){for(;r!==null;){var s=_l(r);if(s!==null&&Bv(s),s=eh(t,e,n,i),s===null&&Fd(t,e,i,qc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fd(t,e,i,null,n)}}var qc=null;function eh(t,e,n,i){if(qc=null,t=Rp(i),t=Us(t),t!==null)if(e=Ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a2()){case Pp:return 1;case Fv:return 4;case Wc:case l2:return 16;case kv:return 536870912;default:return 16}default:return 16}}var $r=null,Np=null,bc=null;function jv(){if(bc)return bc;var t,e=Np,n=e.length,i,r="value"in $r?$r.value:$r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bc=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function Z0(){return!1}function Ti(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:Z0,this.isPropagationStopped=Z0,this}return un(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=Ti(Qo),vl=un({},Qo,{view:0,detail:0}),M2=Ti(vl),bd,Cd,va,xu=un({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(bd=t.screenX-va.screenX,Cd=t.screenY-va.screenY):Cd=bd=0,va=t),bd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),J0=Ti(xu),w2=un({},xu,{dataTransfer:0}),S2=Ti(w2),E2=un({},vl,{relatedTarget:0}),Rd=Ti(E2),T2=un({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),A2=Ti(T2),b2=un({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C2=Ti(b2),R2=un({},Qo,{data:0}),Q0=Ti(R2),P2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L2[t])?!!e[t]:!1}function Fp(){return D2}var N2=un({},vl,{key:function(t){if(t.key){var e=P2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U2=Ti(N2),F2=un({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Ti(F2),k2=un({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),O2=Ti(k2),z2=un({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),B2=Ti(z2),H2=un({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V2=Ti(H2),G2=[9,13,27,32],kp=Tr&&"CompositionEvent"in window,ka=null;Tr&&"documentMode"in document&&(ka=document.documentMode);var W2=Tr&&"TextEvent"in window&&!ka,qv=Tr&&(!kp||ka&&8<ka&&11>=ka),tg=" ",ng=!1;function Yv(t,e){switch(t){case"keyup":return G2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mo=!1;function X2(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function j2(t,e){if(Mo)return t==="compositionend"||!kp&&Yv(t,e)?(t=jv(),bc=Np=$r=null,Mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q2[t.type]:e==="textarea"}function Kv(t,e,n,i){bv(i),e=Yc(e,"onChange"),0<e.length&&(n=new Up("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,Qa=null;function Y2(t){a_(t,0)}function yu(t){var e=Eo(t);if(yv(e))return t}function $2(t,e){if(t==="change")return e}var Zv=!1;if(Tr){var Pd;if(Tr){var Id="oninput"in document;if(!Id){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),Id=typeof rg.oninput=="function"}Pd=Id}else Pd=!1;Zv=Pd&&(!document.documentMode||9<document.documentMode)}function sg(){Oa&&(Oa.detachEvent("onpropertychange",Jv),Qa=Oa=null)}function Jv(t){if(t.propertyName==="value"&&yu(Qa)){var e=[];Kv(e,Qa,t,Rp(t)),Iv(Y2,e)}}function K2(t,e,n){t==="focusin"?(sg(),Oa=e,Qa=n,Oa.attachEvent("onpropertychange",Jv)):t==="focusout"&&sg()}function Z2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Qa)}function J2(t,e){if(t==="click")return yu(e)}function Q2(t,e){if(t==="input"||t==="change")return yu(e)}function eM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zi=typeof Object.is=="function"?Object.is:eM;function el(t,e){if(Zi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ff.call(e,r)||!Zi(t[r],e[r]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hc(t.document)}return e}function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tM(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(i!==null&&Op(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ag(n,s);var o=ag(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nM=Tr&&"documentMode"in document&&11>=document.documentMode,wo=null,th=null,za=null,nh=!1;function lg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||wo==null||wo!==Hc(i)||(i=wo,"selectionStart"in i&&Op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&el(za,i)||(za=i,i=Yc(th,"onSelect"),0<i.length&&(e=new Up("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=wo)))}function Wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var So={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},Ld={},t_={};Tr&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Mu(t){if(Ld[t])return Ld[t];if(!So[t])return t;var e=So[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return Ld[t]=e[n];return t}var n_=Mu("animationend"),i_=Mu("animationiteration"),r_=Mu("animationstart"),s_=Mu("transitionend"),o_=new Map,cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){o_.set(t,e),$s(e,[t])}for(var Dd=0;Dd<cg.length;Dd++){var Nd=cg[Dd],iM=Nd.toLowerCase(),rM=Nd[0].toUpperCase()+Nd.slice(1);ds(iM,"on"+rM)}ds(n_,"onAnimationEnd");ds(i_,"onAnimationIteration");ds(r_,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(s_,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function ug(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i2(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ug(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ug(r,a,c),s=l}}}if(Gc)throw t=Zf,Gc=!1,Zf=null,t}function Zt(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Ud(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[Xl]){t[Xl]=!0,mv.forEach(function(n){n!=="selectionchange"&&(sM.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,Ud("selectionchange",!1,e))}}function l_(t,e,n,i){switch(Xv(e)){case 1:var r=x2;break;case 4:r=y2;break;default:r=Dp}n=r.bind(null,e,n,t),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Iv(function(){var c=s,h=Rp(n),p=[];e:{var m=o_.get(t);if(m!==void 0){var g=Up,w=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":g=U2;break;case"focusin":w="focus",g=Rd;break;case"focusout":w="blur",g=Rd;break;case"beforeblur":case"afterblur":g=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=O2;break;case n_:case i_:case r_:g=A2;break;case s_:g=B2;break;case"scroll":g=M2;break;case"wheel":g=V2;break;case"copy":case"cut":case"paste":g=C2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=eg}var T=(e&4)!==0,x=!T&&t==="scroll",d=T?m!==null?m+"Capture":null:m;T=[];for(var v=c,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,d!==null&&(E=$a(v,d),E!=null&&T.push(nl(v,E,y)))),x)break;v=v.return}0<T.length&&(m=new g(m,w,null,n,h),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Yf&&(w=n.relatedTarget||n.fromElement)&&(Us(w)||w[Ar]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?Us(w):null,w!==null&&(x=Ks(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(T=J0,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(T=eg,E="onPointerLeave",d="onPointerEnter",v="pointer"),x=g==null?m:Eo(g),y=w==null?m:Eo(w),m=new T(E,v+"leave",g,n,h),m.target=x,m.relatedTarget=y,E=null,Us(h)===c&&(T=new T(d,v+"enter",w,n,h),T.target=y,T.relatedTarget=x,E=T),x=E,g&&w)t:{for(T=g,d=w,v=0,y=T;y;y=io(y))v++;for(y=0,E=d;E;E=io(E))y++;for(;0<v-y;)T=io(T),v--;for(;0<y-v;)d=io(d),y--;for(;v--;){if(T===d||d!==null&&T===d.alternate)break t;T=io(T),d=io(d)}T=null}else T=null;g!==null&&dg(p,m,g,T,!1),w!==null&&x!==null&&dg(p,x,w,T,!0)}}e:{if(m=c?Eo(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var P=$2;else if(ig(m))if(Zv)P=Q2;else{P=Z2;var I=K2}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=J2);if(P&&(P=P(t,c))){Kv(p,P,n,h);break e}I&&I(t,m,c),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Gf(m,"number",m.value)}switch(I=c?Eo(c):window,t){case"focusin":(ig(I)||I.contentEditable==="true")&&(wo=I,th=c,za=null);break;case"focusout":za=th=wo=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,lg(p,n,h);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":lg(p,n,h)}var D;if(kp)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Mo?Yv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(qv&&n.locale!=="ko"&&(Mo||U!=="onCompositionStart"?U==="onCompositionEnd"&&Mo&&(D=jv()):($r=h,Np="value"in $r?$r.value:$r.textContent,Mo=!0)),I=Yc(c,U),0<I.length&&(U=new Q0(U,t,null,n,h),p.push({event:U,listeners:I}),D?U.data=D:(D=$v(n),D!==null&&(U.data=D)))),(D=W2?X2(t,n):j2(t,n))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(h=new Q0("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=D))}a_(p,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(nl(t,s,r)),s=$a(t,e),s!=null&&i.push(nl(t,s,r))),t=t.return}return i}function io(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$a(n,s),l!=null&&o.unshift(nl(n,l,a))):r||(l=$a(n,s),l!=null&&o.push(nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oM=/\r\n?/g,aM=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(oM,`
`).replace(aM,"")}function jl(t,e,n){if(e=fg(e),fg(t)!==e&&n)throw Error(Ee(425))}function $c(){}var ih=null,rh=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,lM=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,cM=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(uM)}:oh;function uM(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),ir="__reactFiber$"+ea,il="__reactProps$"+ea,Ar="__reactContainer$"+ea,ah="__reactEvents$"+ea,dM="__reactListeners$"+ea,fM="__reactHandles$"+ea;function Us(t){var e=t[ir];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[ir]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[ir])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[ir]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ee(33))}function wu(t){return t[il]||null}var lh=[],To=-1;function fs(t){return{current:t}}function Jt(t){0>To||(t.current=lh[To],lh[To]=null,To--)}function $t(t,e){To++,lh[To]=t.current,t.current=e}var ls={},Zn=fs(ls),ui=fs(!1),Vs=ls;function Ho(t,e){var n=t.type.contextTypes;if(!n)return ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function di(t){return t=t.childContextTypes,t!=null}function Kc(){Jt(ui),Jt(Zn)}function mg(t,e,n){if(Zn.current!==ls)throw Error(Ee(168));$t(Zn,e),$t(ui,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,Ky(t)||"Unknown",r));return un({},n,i)}function Zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Vs=Zn.current,$t(Zn,t),$t(ui,ui.current),!0}function gg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ee(169));n?(t=c_(t,e,Vs),i.__reactInternalMemoizedMergedChildContext=t,Jt(ui),Jt(Zn),$t(Zn,t)):Jt(ui),$t(ui,n)}var xr=null,Su=!1,Od=!1;function u_(t){xr===null?xr=[t]:xr.push(t)}function hM(t){Su=!0,u_(t)}function hs(){if(!Od&&xr!==null){Od=!0;var t=0,e=Ht;try{var n=xr;for(Ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xr=null,Su=!1}catch(r){throw xr!==null&&(xr=xr.slice(t+1)),Uv(Pp,hs),r}finally{Ht=e,Od=!1}}return null}var Ao=[],bo=0,Jc=null,Qc=0,Ii=[],Li=0,Gs=null,yr=1,Mr="";function Rs(t,e){Ao[bo++]=Qc,Ao[bo++]=Jc,Jc=t,Qc=e}function d_(t,e,n){Ii[Li++]=yr,Ii[Li++]=Mr,Ii[Li++]=Gs,Gs=t;var i=yr;t=Mr;var r=32-Yi(i)-1;i&=~(1<<r),n+=1;var s=32-Yi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yr=1<<32-Yi(e)+r|n<<r|i,Mr=s+t}else yr=1<<s|n<<r|i,Mr=t}function zp(t){t.return!==null&&(Rs(t,1),d_(t,1,0))}function Bp(t){for(;t===Jc;)Jc=Ao[--bo],Ao[bo]=null,Qc=Ao[--bo],Ao[bo]=null;for(;t===Gs;)Gs=Ii[--Li],Ii[Li]=null,Mr=Ii[--Li],Ii[Li]=null,yr=Ii[--Li],Ii[Li]=null}var wi=null,Mi=null,nn=!1,Xi=null;function f_(t,e){var n=Di(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Mi=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Mi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gs!==null?{id:yr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Di(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Mi=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(nn){var e=Mi;if(e){var n=e;if(!vg(t,e)){if(ch(t))throw Error(Ee(418));e=es(n.nextSibling);var i=wi;e&&vg(t,e)?f_(i,n):(t.flags=t.flags&-4097|2,nn=!1,wi=t)}}else{if(ch(t))throw Error(Ee(418));t.flags=t.flags&-4097|2,nn=!1,wi=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function ql(t){if(t!==wi)return!1;if(!nn)return _g(t),nn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=Mi)){if(ch(t))throw h_(),Error(Ee(418));for(;e;)f_(t,e),e=es(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mi=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mi=null}}else Mi=wi?es(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=Mi;t;)t=es(t.nextSibling)}function Vo(){Mi=wi=null,nn=!1}function Hp(t){Xi===null?Xi=[t]:Xi.push(t)}var pM=Rr.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ee(309));var i=n.stateNode}if(!i)throw Error(Ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ee(284));if(!n._owner)throw Error(Ee(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(Ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function p_(t){function e(d,v){if(t){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=rs(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,y,E){return v===null||v.tag!==6?(v=Xd(y,d.mode,E),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,E){var P=y.type;return P===yo?h(d,v,y.props.children,E,y.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gr&&xg(P)===v.type)?(E=r(v,y.props),E.ref=_a(d,v,y),E.return=d,E):(E=Uc(y.type,y.key,y.props,null,d.mode,E),E.ref=_a(d,v,y),E.return=d,E)}function c(d,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=jd(y,d.mode,E),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function h(d,v,y,E,P){return v===null||v.tag!==7?(v=Hs(y,d.mode,E,P),v.return=d,v):(v=r(v,y),v.return=d,v)}function p(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xd(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kl:return y=Uc(v.type,v.key,v.props,null,d.mode,y),y.ref=_a(d,null,v),y.return=d,y;case xo:return v=jd(v,d.mode,y),v.return=d,v;case Gr:var E=v._init;return p(d,E(v._payload),y)}if(Ia(v)||ha(v))return v=Hs(v,d.mode,y,null),v.return=d,v;Yl(d,v)}return null}function m(d,v,y,E){var P=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:a(d,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:return y.key===P?l(d,v,y,E):null;case xo:return y.key===P?c(d,v,y,E):null;case Gr:return P=y._init,m(d,v,P(y._payload),E)}if(Ia(y)||ha(y))return P!==null?null:h(d,v,y,E,null);Yl(d,y)}return null}function g(d,v,y,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(y)||null,a(v,d,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case kl:return d=d.get(E.key===null?y:E.key)||null,l(v,d,E,P);case xo:return d=d.get(E.key===null?y:E.key)||null,c(v,d,E,P);case Gr:var I=E._init;return g(d,v,y,I(E._payload),P)}if(Ia(E)||ha(E))return d=d.get(y)||null,h(v,d,E,P,null);Yl(v,E)}return null}function w(d,v,y,E){for(var P=null,I=null,D=v,U=v=0,A=null;D!==null&&U<y.length;U++){D.index>U?(A=D,D=null):A=D.sibling;var M=m(d,D,y[U],E);if(M===null){D===null&&(D=A);break}t&&D&&M.alternate===null&&e(d,D),v=s(M,v,U),I===null?P=M:I.sibling=M,I=M,D=A}if(U===y.length)return n(d,D),nn&&Rs(d,U),P;if(D===null){for(;U<y.length;U++)D=p(d,y[U],E),D!==null&&(v=s(D,v,U),I===null?P=D:I.sibling=D,I=D);return nn&&Rs(d,U),P}for(D=i(d,D);U<y.length;U++)A=g(D,d,U,y[U],E),A!==null&&(t&&A.alternate!==null&&D.delete(A.key===null?U:A.key),v=s(A,v,U),I===null?P=A:I.sibling=A,I=A);return t&&D.forEach(function(k){return e(d,k)}),nn&&Rs(d,U),P}function T(d,v,y,E){var P=ha(y);if(typeof P!="function")throw Error(Ee(150));if(y=P.call(y),y==null)throw Error(Ee(151));for(var I=P=null,D=v,U=v=0,A=null,M=y.next();D!==null&&!M.done;U++,M=y.next()){D.index>U?(A=D,D=null):A=D.sibling;var k=m(d,D,M.value,E);if(k===null){D===null&&(D=A);break}t&&D&&k.alternate===null&&e(d,D),v=s(k,v,U),I===null?P=k:I.sibling=k,I=k,D=A}if(M.done)return n(d,D),nn&&Rs(d,U),P;if(D===null){for(;!M.done;U++,M=y.next())M=p(d,M.value,E),M!==null&&(v=s(M,v,U),I===null?P=M:I.sibling=M,I=M);return nn&&Rs(d,U),P}for(D=i(d,D);!M.done;U++,M=y.next())M=g(D,d,U,M.value,E),M!==null&&(t&&M.alternate!==null&&D.delete(M.key===null?U:M.key),v=s(M,v,U),I===null?P=M:I.sibling=M,I=M);return t&&D.forEach(function(q){return e(d,q)}),nn&&Rs(d,U),P}function x(d,v,y,E){if(typeof y=="object"&&y!==null&&y.type===yo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:e:{for(var P=y.key,I=v;I!==null;){if(I.key===P){if(P=y.type,P===yo){if(I.tag===7){n(d,I.sibling),v=r(I,y.props.children),v.return=d,d=v;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gr&&xg(P)===I.type){n(d,I.sibling),v=r(I,y.props),v.ref=_a(d,I,y),v.return=d,d=v;break e}n(d,I);break}else e(d,I);I=I.sibling}y.type===yo?(v=Hs(y.props.children,d.mode,E,y.key),v.return=d,d=v):(E=Uc(y.type,y.key,y.props,null,d.mode,E),E.ref=_a(d,v,y),E.return=d,d=E)}return o(d);case xo:e:{for(I=y.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=jd(y,d.mode,E),v.return=d,d=v}return o(d);case Gr:return I=y._init,x(d,v,I(y._payload),E)}if(Ia(y))return w(d,v,y,E);if(ha(y))return T(d,v,y,E);Yl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,y),v.return=d,d=v):(n(d,v),v=Xd(y,d.mode,E),v.return=d,d=v),o(d)):n(d,v)}return x}var Go=p_(!0),m_=p_(!1),eu=fs(null),tu=null,Co=null,Vp=null;function Gp(){Vp=Co=tu=null}function Wp(t){var e=eu.current;Jt(eu),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){tu=t,Vp=Co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ci=!0),t.firstContext=null)}function Ui(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},Co===null){if(tu===null)throw Error(Ee(308));Co=t,tu.dependencies={lanes:0,firstContext:t}}else Co=Co.next=t;return e}var Fs=null;function Xp(t){Fs===null?Fs=[t]:Fs.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xp(e)):(n.next=r.next,r.next=n),e.interleaved=n,br(t,i)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,It&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,br(t,n)}return r=i.interleaved,r===null?(e.next=e,Xp(i)):(e.next=r.next,r.next=e),i.interleaved=e,br(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ip(t,n)}}function yg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,i){var r=t.updateQueue;Wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,T=a;switch(m=e,g=n,T.tag){case 1:if(w=T.payload,typeof w=="function"){p=w.call(g,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=T.payload,m=typeof w=="function"?w.call(g,p,m):w,m==null)break e;p=un({},p,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xs|=o,t.lanes=o,t.memoizedState=p}}function Mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var xl={},ar=fs(xl),rl=fs(xl),sl=fs(xl);function ks(t){if(t===xl)throw Error(Ee(174));return t}function qp(t,e){switch($t(sl,e),$t(rl,t),$t(ar,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xf(e,t)}Jt(ar),$t(ar,e)}function Wo(){Jt(ar),Jt(rl),Jt(sl)}function __(t){ks(sl.current);var e=ks(ar.current),n=Xf(e,t.type);e!==n&&($t(rl,t),$t(ar,n))}function Yp(t){rl.current===t&&(Jt(ar),Jt(rl))}var ln=fs(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zd=[];function $p(){for(var t=0;t<zd.length;t++)zd[t]._workInProgressVersionPrimary=null;zd.length=0}var Pc=Rr.ReactCurrentDispatcher,Bd=Rr.ReactCurrentBatchConfig,Ws=0,cn=null,En=null,Dn=null,ru=!1,Ba=!1,ol=0,mM=0;function Xn(){throw Error(Ee(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zi(t[n],e[n]))return!1;return!0}function Zp(t,e,n,i,r,s){if(Ws=s,cn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?xM:yM,t=n(i,r),Ba){s=0;do{if(Ba=!1,ol=0,25<=s)throw Error(Ee(301));s+=1,Dn=En=null,e.updateQueue=null,Pc.current=MM,t=n(i,r)}while(Ba)}if(Pc.current=su,e=En!==null&&En.next!==null,Ws=0,Dn=En=cn=null,ru=!1,e)throw Error(Ee(300));return t}function Jp(){var t=ol!==0;return ol=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?cn.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function Fi(){if(En===null){var t=cn.alternate;t=t!==null?t.memoizedState:null}else t=En.next;var e=Dn===null?cn.memoizedState:Dn.next;if(e!==null)Dn=e,En=t;else{if(t===null)throw Error(Ee(310));En=t,t={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Dn===null?cn.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function al(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=En,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ws&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,cn.lanes|=h,Xs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zi(i,e.memoizedState)||(ci=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,cn.lanes|=s,Xs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vd(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zi(s,e.memoizedState)||(ci=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=cn,i=Fi(),r=e(),s=!Zi(i.memoizedState,r);if(s&&(i.memoizedState=r,ci=!0),i=i.queue,Qp(S_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dn!==null&&Dn.memoizedState.tag&1){if(n.flags|=2048,ll(9,w_.bind(null,n,i,r,e),void 0,null),Un===null)throw Error(Ee(349));Ws&30||M_(n,e,r)}return r}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,i){e.value=n,e.getSnapshot=i,E_(e)&&T_(t)}function S_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zi(t,n)}catch{return!0}}function T_(t){var e=br(t,1);e!==null&&$i(e,t,1,-1)}function wg(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=_M.bind(null,cn,t),[e.memoizedState,t]}function ll(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return Fi().memoizedState}function Ic(t,e,n,i){var r=tr();cn.flags|=t,r.memoizedState=ll(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=Fi();i=i===void 0?null:i;var s=void 0;if(En!==null){var o=En.memoizedState;if(s=o.destroy,i!==null&&Kp(i,o.deps)){r.memoizedState=ll(e,n,s,i);return}}cn.flags|=t,r.memoizedState=ll(1|e,n,s,i)}function Sg(t,e){return Ic(8390656,8,t,e)}function Qp(t,e){return Eu(2048,8,t,e)}function b_(t,e){return Eu(4,2,t,e)}function C_(t,e){return Eu(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,R_.bind(null,e,t),n)}function em(){}function I_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return Ws&21?(Zi(n,e)||(n=Ov(),cn.lanes|=n,Xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ci=!0),t.memoizedState=n)}function gM(t,e){var n=Ht;Ht=n!==0&&4>n?n:4,t(!0);var i=Bd.transition;Bd.transition={};try{t(!1),e()}finally{Ht=n,Bd.transition=i}}function N_(){return Fi().memoizedState}function vM(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=ei();$i(n,t,i,r),k_(n,e,i)}}function _M(t,e,n){var i=is(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zi(a,o)){var l=e.interleaved;l===null?(r.next=r,Xp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=ei(),$i(n,t,i,r),k_(n,e,i))}}function U_(t){var e=t.alternate;return t===cn||e!==null&&e===cn}function F_(t,e){Ba=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ip(t,n)}}var su={readContext:Ui,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},xM={readContext:Ui,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Ui,useEffect:Sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=tr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vM.bind(null,cn,t),[i.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:em,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=gM.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=cn,r=tr();if(nn){if(n===void 0)throw Error(Ee(407));n=n()}else{if(n=e(),Un===null)throw Error(Ee(349));Ws&30||M_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sg(S_.bind(null,i,s,t),[t]),i.flags|=2048,ll(9,w_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Un.identifierPrefix;if(nn){var n=Mr,i=yr;n=(i&~(1<<32-Yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yM={readContext:Ui,useCallback:I_,useContext:Ui,useEffect:Qp,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:L_,useReducer:Hd,useRef:A_,useState:function(){return Hd(al)},useDebugValue:em,useDeferredValue:function(t){var e=Fi();return D_(e,En.memoizedState,t)},useTransition:function(){var t=Hd(al)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1},MM={readContext:Ui,useCallback:I_,useContext:Ui,useEffect:Qp,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:L_,useReducer:Vd,useRef:A_,useState:function(){return Vd(al)},useDebugValue:em,useDeferredValue:function(t){var e=Fi();return En===null?e.memoizedState=t:D_(e,En.memoizedState,t)},useTransition:function(){var t=Vd(al)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1};function Gi(t,e){if(t&&t.defaultProps){e=un({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:un({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?Ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ei(),r=is(t),s=Sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&($i(e,t,r,i),Rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ei(),r=is(t),s=Sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&($i(e,t,r,i),Rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ei(),i=is(t),r=Sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ts(t,r,i),e!==null&&($i(e,t,i,n),Rc(e,t,i))}};function Eg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!el(n,i)||!el(r,s):!0}function O_(t,e,n){var i=!1,r=ls,s=e.contextType;return typeof s=="object"&&s!==null?s=Ui(s):(r=di(e)?Vs:Zn.current,i=e.contextTypes,s=(i=i!=null)?Ho(t,r):ls),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function hh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ui(s):(s=di(e)?Vs:Zn.current,r.context=Ho(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),nu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",i=e;do n+=$y(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wM=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){au||(au=!0,Eh=i),ph(t,e)},n}function B_(t,e,n){n=Sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FM.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var SM=Rr.ReactCurrentOwner,ci=!1;function Qn(t,e,n,i){e.child=t===null?m_(e,null,n,i):Go(e,t.child,n,i)}function Rg(t,e,n,i,r){n=n.render;var s=e.ref;return Fo(e,r),i=Zp(t,e,n,i,s,r),n=Jp(),t!==null&&!ci?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(nn&&n&&zp(e),e.flags|=1,Qn(t,e,i,r),e.child)}function Pg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,i,r)):(t=Uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(o,i)&&t.ref===e.ref)return Cr(t,e,r)}return e.flags|=1,t=rs(s,i),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(el(s,i)&&t.ref===e.ref)if(ci=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ci=!0);else return e.lanes=t.lanes,Cr(t,e,r)}return mh(t,e,n,i,r)}function V_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(Po,xi),xi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$t(Po,xi),xi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,$t(Po,xi),xi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,$t(Po,xi),xi|=i;return Qn(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,i,r){var s=di(n)?Vs:Zn.current;return s=Ho(e,s),Fo(e,r),n=Zp(t,e,n,i,s,r),i=Jp(),t!==null&&!ci?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(nn&&i&&zp(e),e.flags|=1,Qn(t,e,n,r),e.child)}function Ig(t,e,n,i,r){if(di(n)){var s=!0;Zc(e)}else s=!1;if(Fo(e,r),e.stateNode===null)Lc(t,e),O_(e,n,i),hh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ui(c):(c=di(n)?Vs:Zn.current,c=Ho(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tg(e,o,i,c),Wr=!1;var m=e.memoizedState;o.state=m,nu(e,i,o,r),l=e.memoizedState,a!==i||m!==l||ui.current||Wr?(typeof h=="function"&&(fh(e,n,h,i),l=e.memoizedState),(a=Wr||Eg(e,n,a,i,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gi(e.type,a),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ui(l):(l=di(n)?Vs:Zn.current,l=Ho(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Tg(e,o,i,l),Wr=!1,m=e.memoizedState,o.state=m,nu(e,i,o,r);var w=e.memoizedState;a!==p||m!==w||ui.current||Wr?(typeof g=="function"&&(fh(e,n,g,i),w=e.memoizedState),(c=Wr||Eg(e,n,c,i,m,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),o.props=i,o.state=w,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return gh(t,e,n,i,s,r)}function gh(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gg(e,n,!1),Cr(t,e,s);i=e.stateNode,SM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Go(e,t.child,null,s),e.child=Go(e,null,a,s)):Qn(t,e,a,s),e.memoizedState=i.state,r&&gg(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),qp(t,e.containerInfo)}function Lg(t,e,n,i,r){return Vo(),Hp(r),e.flags|=256,Qn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var i=e.pendingProps,r=ln.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),$t(ln,r&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),t=Hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_h(n),e.memoizedState=vh,t):tm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return EM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rs(a,s):(s=Hs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vh,i}return s=t.child,t=s.sibling,i=rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tm(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,i){return i!==null&&Hp(i),Go(e,t.child,null,n),t=tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Gd(Error(Ee(422))),$l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=Hs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Go(e,t.child,null,o),e.child.memoizedState=_h(o),e.memoizedState=vh,s);if(!(e.mode&1))return $l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ee(419)),i=Gd(s,i,void 0),$l(t,e,o,i)}if(a=(o&t.childLanes)!==0,ci||a){if(i=Un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,br(t,r),$i(i,t,r,-1))}return am(),i=Gd(Error(Ee(421))),$l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mi=es(r.nextSibling),wi=e,nn=!0,Xi=null,t!==null&&(Ii[Li++]=yr,Ii[Li++]=Mr,Ii[Li++]=Gs,yr=t.id,Mr=t.overflow,Gs=e),e=tm(e,i.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dh(t.return,e,n)}function Wd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function j_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qn(t,e,i.children,n),i=ln.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if($t(ln,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wd(e,!0,n,null,s);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ee(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TM(t,e,n){switch(e.tag){case 3:W_(e),Vo();break;case 5:__(e);break;case 1:di(e.type)&&Zc(e);break;case 4:qp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$t(eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($t(ln,ln.current&1),e.flags|=128,null):n&e.child.childLanes?X_(t,e,n):($t(ln,ln.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);$t(ln,ln.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$t(ln,ln.current),i)break;return null;case 22:case 23:return e.lanes=0,V_(t,e,n)}return Cr(t,e,n)}var q_,xh,Y_,$_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};Y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ks(ar.current);var s=null;switch(n){case"input":r=Hf(t,r),i=Hf(t,i),s=[];break;case"select":r=un({},r,{value:void 0}),i=un({},i,{value:void 0}),s=[];break;case"textarea":r=Wf(t,r),i=Wf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$c)}jf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Zt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function xa(t,e){if(!nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function AM(t,e,n){var i=e.pendingProps;switch(Bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(e),null;case 1:return di(e.type)&&Kc(),jn(e),null;case 3:return i=e.stateNode,Wo(),Jt(ui),Jt(Zn),$p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xi!==null&&(bh(Xi),Xi=null))),xh(t,e),jn(e),null;case 5:Yp(e);var r=ks(sl.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return jn(e),null}if(t=ks(ar.current),ql(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ir]=e,i[il]=s,t=(e.mode&1)!==0,n){case"dialog":Zt("cancel",i),Zt("close",i);break;case"iframe":case"object":case"embed":Zt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)Zt(Da[r],i);break;case"source":Zt("error",i);break;case"img":case"image":case"link":Zt("error",i),Zt("load",i);break;case"details":Zt("toggle",i);break;case"input":V0(i,s),Zt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Zt("invalid",i);break;case"textarea":W0(i,s),Zt("invalid",i)}jf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,t),r=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Zt("scroll",i)}switch(n){case"input":Ol(i),G0(i,s,!0);break;case"textarea":Ol(i),X0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ir]=e,t[il]=i,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qf(n,i),n){case"dialog":Zt("cancel",t),Zt("close",t),r=i;break;case"iframe":case"object":case"embed":Zt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)Zt(Da[r],t);r=i;break;case"source":Zt("error",t),r=i;break;case"img":case"image":case"link":Zt("error",t),Zt("load",t),r=i;break;case"details":Zt("toggle",t),r=i;break;case"input":V0(t,i),r=Hf(t,i),Zt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=un({},i,{value:void 0}),Zt("invalid",t);break;case"textarea":W0(t,i),r=Wf(t,i),Zt("invalid",t);break;default:r=i}jf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Av(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ev(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Zt("scroll",t):l!=null&&Tp(t,s,l,o))}switch(n){case"input":Ol(t),G0(t,i,!1);break;case"textarea":Ol(t),X0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+as(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$c)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jn(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(n=ks(sl.current),ks(ar.current),ql(e)){if(i=e.stateNode,n=e.memoizedProps,i[ir]=e,(s=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:jl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ir]=e,e.stateNode=i}return jn(e),null;case 13:if(Jt(ln),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Mi!==null&&e.mode&1&&!(e.flags&128))h_(),Vo(),e.flags|=98560,s=!1;else if(s=ql(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ee(317));s[ir]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jn(e),s=!1}else Xi!==null&&(bh(Xi),Xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ln.current&1?Tn===0&&(Tn=3):am())),e.updateQueue!==null&&(e.flags|=4),jn(e),null);case 4:return Wo(),xh(t,e),t===null&&tl(e.stateNode.containerInfo),jn(e),null;case 10:return Wp(e.type._context),jn(e),null;case 17:return di(e.type)&&Kc(),jn(e),null;case 19:if(Jt(ln),s=e.memoizedState,s===null)return jn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xa(s,!1);else{if(Tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,xa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $t(ln,ln.current&1|2),e.child}t=t.sibling}s.tail!==null&&mn()>jo&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304)}else{if(!i)if(t=iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nn)return jn(e),null}else 2*mn()-s.renderingStartTime>jo&&n!==1073741824&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mn(),e.sibling=null,n=ln.current,$t(ln,i?n&1|2:n&1),e):(jn(e),null);case 22:case 23:return om(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xi&1073741824&&(jn(e),e.subtreeFlags&6&&(e.flags|=8192)):jn(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function bM(t,e){switch(Bp(e),e.tag){case 1:return di(e.type)&&Kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),Jt(ui),Jt(Zn),$p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(Jt(ln),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Jt(ln),null;case 4:return Wo(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var Kl=!1,Kn=!1,CM=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pn(t,e,i)}else n.current=null}function yh(t,e,n){try{n()}catch(i){pn(t,e,i)}}var Ng=!1;function RM(t,e){if(ih=jc,t=e_(),Op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},jc=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var T=w.memoizedProps,x=w.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?T:Gi(e.type,T),x);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(E){pn(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return w=Ng,Ng=!1,w}function Ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yh(e,n,s)}r=r.next}while(r!==i)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ir],delete e[il],delete e[ah],delete e[dM],delete e[fM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$c));else if(i!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}function Sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var Hn=null,Wi=!1;function Ur(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:Kn||Ro(n,e);case 6:var i=Hn,r=Wi;Hn=null,Ur(t,e,n),Hn=i,Wi=r,Hn!==null&&(Wi?(t=Hn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Hn.removeChild(n.stateNode));break;case 18:Hn!==null&&(Wi?(t=Hn,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),Ja(t)):kd(Hn,n.stateNode));break;case 4:i=Hn,r=Wi,Hn=n.stateNode.containerInfo,Wi=!0,Ur(t,e,n),Hn=i,Wi=r;break;case 0:case 11:case 14:case 15:if(!Kn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),r=r.next}while(r!==i)}Ur(t,e,n);break;case 1:if(!Kn&&(Ro(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pn(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Kn=(i=Kn)||n.memoizedState!==null,Ur(t,e,n),Kn=i):Ur(t,e,n);break;default:Ur(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CM),e.forEach(function(i){var r=OM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Hn=a.stateNode,Wi=!1;break e;case 3:Hn=a.stateNode.containerInfo,Wi=!0;break e;case 4:Hn=a.stateNode.containerInfo,Wi=!0;break e}a=a.return}if(Hn===null)throw Error(Ee(160));J_(s,o,r),Hn=null,Wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Oi(e,t),er(t),i&4){try{Ha(3,t,t.return),Au(3,t)}catch(T){pn(t,t.return,T)}try{Ha(5,t,t.return)}catch(T){pn(t,t.return,T)}}break;case 1:Oi(e,t),er(t),i&512&&n!==null&&Ro(n,n.return);break;case 5:if(Oi(e,t),er(t),i&512&&n!==null&&Ro(n,n.return),t.flags&32){var r=t.stateNode;try{Ya(r,"")}catch(T){pn(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mv(r,s),qf(a,o);var c=qf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?Av(r,p):h==="dangerouslySetInnerHTML"?Ev(r,p):h==="children"?Ya(r,p):Tp(r,h,p,c)}switch(a){case"input":Vf(r,s);break;case"textarea":wv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Lo(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Lo(r,!!s.multiple,s.defaultValue,!0):Lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[il]=s}catch(T){pn(t,t.return,T)}}break;case 6:if(Oi(e,t),er(t),i&4){if(t.stateNode===null)throw Error(Ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){pn(t,t.return,T)}}break;case 3:if(Oi(e,t),er(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(T){pn(t,t.return,T)}break;case 4:Oi(e,t),er(t);break;case 13:Oi(e,t),er(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rm=mn())),i&4&&Fg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Kn=(c=Kn)||h,Oi(e,t),Kn=c):Oi(e,t),er(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(We=t,h=t.child;h!==null;){for(p=We=h;We!==null;){switch(m=We,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ha(4,m,m.return);break;case 1:Ro(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(T){pn(i,n,T)}}break;case 5:Ro(m,m.return);break;case 22:if(m.memoizedState!==null){Og(p);continue}}g!==null?(g.return=m,We=g):Og(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(T){pn(t,t.return,T)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){pn(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oi(e,t),er(t),i&4&&Fg(t);break;case 21:break;default:Oi(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ya(r,""),i.flags&=-33);var s=Ug(t);Sh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ug(t);wh(t,a,o);break;default:throw Error(Ee(161))}}catch(l){pn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PM(t,e,n){We=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Kl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kn;a=Kl;var c=Kn;if(Kl=o,(Kn=l)&&!c)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?zg(r):l!==null?(l.return=o,We=l):zg(r);for(;s!==null;)We=s,ex(s),s=s.sibling;We=r,Kl=a,Kn=c}kg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):kg(t)}}function kg(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kn||Au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}Kn||e.flags&512&&Mh(e)}catch(m){pn(e,e.return,m)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Og(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function zg(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(l){pn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pn(e,r,l)}}var s=e.return;try{Mh(e)}catch(l){pn(e,s,l)}break;case 5:var o=e.return;try{Mh(e)}catch(l){pn(e,o,l)}}}catch(l){pn(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var IM=Math.ceil,ou=Rr.ReactCurrentDispatcher,nm=Rr.ReactCurrentOwner,Ni=Rr.ReactCurrentBatchConfig,It=0,Un=null,xn=null,Gn=0,xi=0,Po=fs(0),Tn=0,cl=null,Xs=0,bu=0,im=0,Va=null,li=null,rm=0,jo=1/0,_r=null,au=!1,Eh=null,ns=null,Zl=!1,Kr=null,lu=0,Ga=0,Th=null,Dc=-1,Nc=0;function ei(){return It&6?mn():Dc!==-1?Dc:Dc=mn()}function is(t){return t.mode&1?It&2&&Gn!==0?Gn&-Gn:pM.transition!==null?(Nc===0&&(Nc=Ov()),Nc):(t=Ht,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t):1}function $i(t,e,n,i){if(50<Ga)throw Ga=0,Th=null,Error(Ee(185));gl(t,n,i),(!(It&2)||t!==Un)&&(t===Un&&(!(It&2)&&(bu|=n),Tn===4&&jr(t,Gn)),fi(t,i),n===1&&It===0&&!(e.mode&1)&&(jo=mn()+500,Su&&hs()))}function fi(t,e){var n=t.callbackNode;p2(t,e);var i=Xc(t,t===Un?Gn:0);if(i===0)n!==null&&Y0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Y0(n),e===1)t.tag===0?hM(Bg.bind(null,t)):u_(Bg.bind(null,t)),cM(function(){!(It&6)&&hs()}),n=null;else{switch(zv(i)){case 1:n=Pp;break;case 4:n=Fv;break;case 16:n=Wc;break;case 536870912:n=kv;break;default:n=Wc}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Dc=-1,Nc=0,It&6)throw Error(Ee(327));var n=t.callbackNode;if(ko()&&t.callbackNode!==n)return null;var i=Xc(t,t===Un?Gn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cu(t,i);else{e=i;var r=It;It|=2;var s=ix();(Un!==t||Gn!==e)&&(_r=null,jo=mn()+500,Bs(t,e));do try{NM();break}catch(a){nx(t,a)}while(!0);Gp(),ou.current=s,It=r,xn!==null?e=0:(Un=null,Gn=0,e=Tn)}if(e!==0){if(e===2&&(r=Jf(t),r!==0&&(i=r,e=Ah(t,r))),e===1)throw n=cl,Bs(t,0),jr(t,i),fi(t,mn()),n;if(e===6)jr(t,i);else{if(r=t.current.alternate,!(i&30)&&!LM(r)&&(e=cu(t,i),e===2&&(s=Jf(t),s!==0&&(i=s,e=Ah(t,s))),e===1))throw n=cl,Bs(t,0),jr(t,i),fi(t,mn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:Ps(t,li,_r);break;case 3:if(jr(t,i),(i&130023424)===i&&(e=rm+500-mn(),10<e)){if(Xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ei(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=oh(Ps.bind(null,t,li,_r),e);break}Ps(t,li,_r);break;case 4:if(jr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IM(i/1960))-i,10<i){t.timeoutHandle=oh(Ps.bind(null,t,li,_r),i);break}Ps(t,li,_r);break;case 5:Ps(t,li,_r);break;default:throw Error(Ee(329))}}}return fi(t,mn()),t.callbackNode===n?tx.bind(null,t):null}function Ah(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Bs(t,e).flags|=256),t=cu(t,e),t!==2&&(e=li,li=n,e!==null&&bh(e)),t}function bh(t){li===null?li=t:li.push.apply(li,t)}function LM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~im,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yi(e),i=1<<n;t[n]=-1,e&=~i}}function Bg(t){if(It&6)throw Error(Ee(327));ko();var e=Xc(t,0);if(!(e&1))return fi(t,mn()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var i=Jf(t);i!==0&&(e=i,n=Ah(t,i))}if(n===1)throw n=cl,Bs(t,0),jr(t,e),fi(t,mn()),n;if(n===6)throw Error(Ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ps(t,li,_r),fi(t,mn()),null}function sm(t,e){var n=It;It|=1;try{return t(e)}finally{It=n,It===0&&(jo=mn()+500,Su&&hs())}}function js(t){Kr!==null&&Kr.tag===0&&!(It&6)&&ko();var e=It;It|=1;var n=Ni.transition,i=Ht;try{if(Ni.transition=null,Ht=1,t)return t()}finally{Ht=i,Ni.transition=n,It=e,!(It&6)&&hs()}}function om(){xi=Po.current,Jt(Po)}function Bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lM(n)),xn!==null)for(n=xn.return;n!==null;){var i=n;switch(Bp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kc();break;case 3:Wo(),Jt(ui),Jt(Zn),$p();break;case 5:Yp(i);break;case 4:Wo();break;case 13:Jt(ln);break;case 19:Jt(ln);break;case 10:Wp(i.type._context);break;case 22:case 23:om()}n=n.return}if(Un=t,xn=t=rs(t.current,null),Gn=xi=e,Tn=0,cl=null,im=bu=Xs=0,li=Va=null,Fs!==null){for(e=0;e<Fs.length;e++)if(n=Fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fs=null}return t}function nx(t,e){do{var n=xn;try{if(Gp(),Pc.current=su,ru){for(var i=cn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ru=!1}if(Ws=0,Dn=En=cn=null,Ba=!1,ol=0,nm.current=null,n===null||n.return===null){Tn=1,cl=e,xn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=bg(o);if(g!==null){g.flags&=-257,Cg(g,o,a,s,e),g.mode&1&&Ag(s,c,e),e=g,l=c;var w=e.updateQueue;if(w===null){var T=new Set;T.add(l),e.updateQueue=T}else w.add(l);break e}else{if(!(e&1)){Ag(s,c,e),am();break e}l=Error(Ee(426))}}else if(nn&&a.mode&1){var x=bg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Cg(x,o,a,s,e),Hp(Xo(l,a));break e}}s=l=Xo(l,a),Tn!==4&&(Tn=2),Va===null?Va=[s]:Va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=z_(s,l,e);yg(s,d);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ns===null||!ns.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=B_(s,a,e);yg(s,E);break e}}s=s.return}while(s!==null)}sx(n)}catch(P){e=P,xn===n&&n!==null&&(xn=n=n.return);continue}break}while(!0)}function ix(){var t=ou.current;return ou.current=su,t===null?su:t}function am(){(Tn===0||Tn===3||Tn===2)&&(Tn=4),Un===null||!(Xs&268435455)&&!(bu&268435455)||jr(Un,Gn)}function cu(t,e){var n=It;It|=2;var i=ix();(Un!==t||Gn!==e)&&(_r=null,Bs(t,e));do try{DM();break}catch(r){nx(t,r)}while(!0);if(Gp(),It=n,ou.current=i,xn!==null)throw Error(Ee(261));return Un=null,Gn=0,Tn}function DM(){for(;xn!==null;)rx(xn)}function NM(){for(;xn!==null&&!s2();)rx(xn)}function rx(t){var e=ax(t.alternate,t,xi);t.memoizedProps=t.pendingProps,e===null?sx(t):xn=e,nm.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bM(n,e),n!==null){n.flags&=32767,xn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tn=6,xn=null;return}}else if(n=AM(n,e,xi),n!==null){xn=n;return}if(e=e.sibling,e!==null){xn=e;return}xn=e=t}while(e!==null);Tn===0&&(Tn=5)}function Ps(t,e,n){var i=Ht,r=Ni.transition;try{Ni.transition=null,Ht=1,UM(t,e,n,i)}finally{Ni.transition=r,Ht=i}return null}function UM(t,e,n,i){do ko();while(Kr!==null);if(It&6)throw Error(Ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m2(t,s),t===Un&&(xn=Un=null,Gn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,lx(Wc,function(){return ko(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ni.transition,Ni.transition=null;var o=Ht;Ht=1;var a=It;It|=4,nm.current=null,RM(t,n),Q_(n,t),tM(rh),jc=!!ih,rh=ih=null,t.current=n,PM(n),o2(),It=a,Ht=o,Ni.transition=s}else t.current=n;if(Zl&&(Zl=!1,Kr=t,lu=r),s=t.pendingLanes,s===0&&(ns=null),c2(n.stateNode),fi(t,mn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,t=Eh,Eh=null,t;return lu&1&&t.tag!==0&&ko(),s=t.pendingLanes,s&1?t===Th?Ga++:(Ga=0,Th=t):Ga=0,hs(),null}function ko(){if(Kr!==null){var t=zv(lu),e=Ni.transition,n=Ht;try{if(Ni.transition=null,Ht=16>t?16:t,Kr===null)var i=!1;else{if(t=Kr,Kr=null,lu=0,It&6)throw Error(Ee(331));var r=It;for(It|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(We=c;We!==null;){var h=We;switch(h.tag){case 0:case 11:case 15:Ha(8,h,s)}var p=h.child;if(p!==null)p.return=h,We=p;else for(;We!==null;){h=We;var m=h.sibling,g=h.return;if(K_(h),h===c){We=null;break}if(m!==null){m.return=g,We=m;break}We=g}}}var w=s.alternate;if(w!==null){var T=w.child;if(T!==null){w.child=null;do{var x=T.sibling;T.sibling=null,T=x}while(T!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,We=d;break e}We=s.return}}var v=t.current;for(We=v;We!==null;){o=We;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,We=y;else e:for(o=v;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(P){pn(a,a.return,P)}if(a===o){We=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,We=E;break e}We=a.return}}if(It=r,hs(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{Ht=n,Ni.transition=e}}return!1}function Hg(t,e,n){e=Xo(n,e),e=z_(t,e,1),t=ts(t,e,1),e=ei(),t!==null&&(gl(t,1,e),fi(t,e))}function pn(t,e,n){if(t.tag===3)Hg(t,t,n);else for(;e!==null;){if(e.tag===3){Hg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=Xo(n,t),t=B_(e,t,1),e=ts(e,t,1),t=ei(),e!==null&&(gl(e,1,t),fi(e,t));break}}e=e.return}}function FM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ei(),t.pingedLanes|=t.suspendedLanes&n,Un===t&&(Gn&n)===n&&(Tn===4||Tn===3&&(Gn&130023424)===Gn&&500>mn()-rm?Bs(t,0):im|=n),fi(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=ei();t=br(t,e),t!==null&&(gl(t,e,n),fi(t,n))}function kM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function OM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ui.current)ci=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ci=!1,TM(t,e,n);ci=!!(t.flags&131072)}else ci=!1,nn&&e.flags&1048576&&d_(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=Ho(e,Zn.current);Fo(e,n),r=Zp(null,e,i,t,r,n);var s=Jp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,di(i)?(s=!0,Zc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jp(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,hh(e,i,t,n),e=gh(null,e,i,!0,s,n)):(e.tag=0,nn&&s&&zp(e),Qn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=BM(i),t=Gi(i,t),r){case 0:e=mh(null,e,i,t,n);break e;case 1:e=Ig(null,e,i,t,n);break e;case 11:e=Rg(null,e,i,t,n);break e;case 14:e=Pg(null,e,i,Gi(i.type,t),n);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Ig(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(Ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),nu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xo(Error(Ee(423)),e),e=Lg(t,e,i,n,r);break e}else if(i!==r){r=Xo(Error(Ee(424)),e),e=Lg(t,e,i,n,r);break e}else for(Mi=es(e.stateNode.containerInfo.firstChild),wi=e,nn=!0,Xi=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),i===r){e=Cr(t,e,n);break e}Qn(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&uh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sh(i,r)?o=null:s!==null&&sh(i,s)&&(e.flags|=32),G_(t,e),Qn(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return X_(t,e,n);case 4:return qp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Go(e,null,i,n):Qn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Rg(t,e,i,r,n);case 7:return Qn(t,e,e.pendingProps,n),e.child;case 8:return Qn(t,e,e.pendingProps.children,n),e.child;case 12:return Qn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$t(eu,i._currentValue),i._currentValue=o,s!==null)if(Zi(s.value,o)){if(s.children===r.children&&!ui.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fo(e,n),r=Ui(r),i=i(r),e.flags|=1,Qn(t,e,i,n),e.child;case 14:return i=e.type,r=Gi(i,e.pendingProps),r=Gi(i.type,r),Pg(t,e,i,r,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Lc(t,e),e.tag=1,di(i)?(t=!0,Zc(e)):t=!1,Fo(e,n),O_(e,i,r),hh(e,i,r,n),gh(null,e,i,!0,t,n);case 19:return j_(t,e,n);case 22:return V_(t,e,n)}throw Error(Ee(156,e.tag))};function lx(t,e){return Uv(t,e)}function zM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(t,e,n,i){return new zM(t,e,n,i)}function lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BM(t){if(typeof t=="function")return lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bp)return 11;if(t===Cp)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=Di(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yo:return Hs(n.children,r,s,e);case Ap:o=8,r|=8;break;case kf:return t=Di(12,n,e,r|2),t.elementType=kf,t.lanes=s,t;case Of:return t=Di(13,n,e,r),t.elementType=Of,t.lanes=s,t;case zf:return t=Di(19,n,e,r),t.elementType=zf,t.lanes=s,t;case _v:return Cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case vv:o=9;break e;case bp:o=11;break e;case Cp:o=14;break e;case Gr:o=16,i=null;break e}throw Error(Ee(130,t==null?t:typeof t,""))}return e=Di(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hs(t,e,n,i){return t=Di(7,t,i,e),t.lanes=n,t}function Cu(t,e,n,i){return t=Di(22,t,i,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function Xd(t,e,n){return t=Di(6,t,null,e),t.lanes=n,t}function jd(t,e,n){return e=Di(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ad(0),this.expirationTimes=Ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cm(t,e,n,i,r,s,o,a,l){return t=new HM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Di(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),t}function VM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return ls;t=t._reactInternals;e:{if(Ks(t)!==t||t.tag!==1)throw Error(Ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(di(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(t.tag===1){var n=t.type;if(di(n))return c_(t,n,e)}return e}function ux(t,e,n,i,r,s,o,a,l){return t=cm(n,i,!0,t,r,s,o,a,l),t.context=cx(null),n=t.current,i=ei(),r=is(n),s=Sr(i,r),s.callback=e??null,ts(n,s,r),t.current.lanes=r,gl(t,r,i),fi(t,i),t}function Ru(t,e,n,i){var r=e.current,s=ei(),o=is(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(r,e,o),t!==null&&($i(t,r,o,s),Rc(t,r,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){Vg(t,e),(t=t.alternate)&&Vg(t,e)}function GM(){return null}var dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function dm(t){this._internalRoot=t}Pu.prototype.render=dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ee(409));Ru(t,e,null,null)};Pu.prototype.unmount=dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;js(function(){Ru(null,t,null,null)}),e[Ar]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&Wv(t)}};function fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function WM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=uu(o);s.call(c)}}var o=ux(e,i,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[Ar]=o.current,tl(t.nodeType===8?t.parentNode:t),js(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uu(l);a.call(c)}}var l=cm(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=l,t[Ar]=l.current,tl(t.nodeType===8?t.parentNode:t),js(function(){Ru(e,l,n,i)}),l}function Lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=uu(o);a.call(l)}}Ru(e,o,t,r)}else o=WM(n,e,t,r,i);return uu(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(Ip(e,n|1),fi(e,mn()),!(It&6)&&(jo=mn()+500,hs()))}break;case 13:js(function(){var i=br(t,1);if(i!==null){var r=ei();$i(i,t,1,r)}}),um(t,1)}};Lp=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=ei();$i(e,t,134217728,n)}um(t,134217728)}};Hv=function(t){if(t.tag===13){var e=is(t),n=br(t,e);if(n!==null){var i=ei();$i(n,t,e,i)}um(t,e)}};Vv=function(){return Ht};Gv=function(t,e){var n=Ht;try{return Ht=t,e()}finally{Ht=n}};$f=function(t,e,n){switch(e){case"input":if(Vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(Ee(90));yv(i),Vf(i,r)}}}break;case"textarea":wv(t,n);break;case"select":e=n.value,e!=null&&Lo(t,!!n.multiple,e,!1)}};Rv=sm;Pv=js;var XM={usingClientEntryPoint:!1,Events:[_l,Eo,wu,bv,Cv,sm]},ya={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jM={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||GM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{_u=Jl.inject(jM),or=Jl}catch{}}Ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XM;Ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(Ee(200));return VM(t,e,null,n)};Ei.createRoot=function(t,e){if(!fm(t))throw Error(Ee(299));var n=!1,i="",r=dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cm(t,1,!1,null,null,n,!1,i,r),t[Ar]=e.current,tl(t.nodeType===8?t.parentNode:t),new dm(e)};Ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ee(188)):(t=Object.keys(t).join(","),Error(Ee(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};Ei.flushSync=function(t){return js(t)};Ei.hydrate=function(t,e,n){if(!Iu(e))throw Error(Ee(200));return Lu(null,t,e,!0,n)};Ei.hydrateRoot=function(t,e,n){if(!fm(t))throw Error(Ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,o),t[Ar]=e.current,tl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pu(e)};Ei.render=function(t,e,n){if(!Iu(e))throw Error(Ee(200));return Lu(null,t,e,!1,n)};Ei.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(Ee(40));return t._reactRootContainer?(js(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};Ei.unstable_batchedUpdates=sm;Ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Iu(n))throw Error(Ee(200));if(t==null||t._reactInternals===void 0)throw Error(Ee(38));return Lu(t,e,n,!1,i)};Ei.version="18.3.1-next-f1338f8080-20240426";function fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fx)}catch(t){console.error(t)}}fx(),fv.exports=Ei;var qM=fv.exports,hx,Wg=qM;hx=Wg.createRoot,Wg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hm="180",YM=0,Xg=1,$M=2,px=1,mx=2,vr=3,cs=0,hi=1,Gt=2,ss=0,Oo=1,du=2,jg=3,qg=4,KM=5,Ds=100,ZM=101,JM=102,QM=103,ew=104,tw=200,nw=201,iw=202,rw=203,Ch=204,Rh=205,sw=206,ow=207,aw=208,lw=209,cw=210,uw=211,dw=212,fw=213,hw=214,Ph=0,Ih=1,Lh=2,qo=3,Dh=4,Nh=5,Uh=6,Fh=7,pm=0,pw=1,mw=2,os=0,gw=1,vw=2,_w=3,gx=4,xw=5,yw=6,Mw=7,vx=300,Yo=301,$o=302,kh=303,Oh=304,Du=306,qr=1e3,Os=1001,zh=1002,Ki=1003,ww=1004,Ql=1005,rr=1006,qd=1007,zs=1008,cr=1009,_x=1010,xx=1011,ul=1012,mm=1013,qs=1014,wr=1015,yl=1016,gm=1017,vm=1018,dl=1020,yx=35902,Mx=35899,wx=1021,Sx=1022,qi=1023,fl=1026,hl=1027,Ex=1028,_m=1029,Tx=1030,xm=1031,ym=1033,Fc=33776,kc=33777,Oc=33778,zc=33779,Bh=35840,Hh=35841,Vh=35842,Gh=35843,Wh=36196,Xh=37492,jh=37496,qh=37808,Yh=37809,$h=37810,Kh=37811,Zh=37812,Jh=37813,Qh=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,sp=37820,op=37821,ap=36492,lp=36494,cp=36495,up=36283,dp=36284,fp=36285,hp=36286,Sw=3200,Ew=3201,Mm=0,Tw=1,Yr="",Nn="srgb",Ko="srgb-linear",fu="linear",Wt="srgb",ro=7680,Yg=519,Aw=512,bw=513,Cw=514,Ax=515,Rw=516,Pw=517,Iw=518,Lw=519,$g=35044,Kg="300 es",sr=2e3,hu=2001;class ta{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,pp=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qn[t&255]+qn[t>>8&255]+qn[t>>16&255]+qn[t>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[n&63|128]+qn[n>>8&255]+"-"+qn[n>>16&255]+qn[n>>24&255]+qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function Dw(t,e){return(t%e+e)%e}function $d(t,e,n){return(1-n)*t+n*e}function Ma(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function oi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],g=s[o+1],w=s[o+2],T=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=w,e[n+3]=T;return}if(p!==T||l!==m||c!==g||h!==w){let x=1-a;const d=l*m+c*g+h*w+p*T,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),I=Math.atan2(P,d*v);x=Math.sin(x*I)/P,a=Math.sin(a*I)/P}const E=a*v;if(l=l*x+m*E,c=c*x+g*E,h=h*x+w*E,p=p*x+T*E,x===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=P,c*=P,h*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],m=s[o+1],g=s[o+2],w=s[o+3];return e[n]=a*w+h*p+l*g-c*m,e[n+1]=l*w+h*m+c*p-a*g,e[n+2]=c*w+h*g+a*m-l*p,e[n+3]=h*w-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),m=l(i/2),g=l(r/2),w=l(s/2);switch(o){case"XYZ":this._x=m*h*p+c*g*w,this._y=c*g*p-m*h*w,this._z=c*h*w+m*g*p,this._w=c*h*p-m*g*w;break;case"YXZ":this._x=m*h*p+c*g*w,this._y=c*g*p-m*h*w,this._z=c*h*w-m*g*p,this._w=c*h*p+m*g*w;break;case"ZXY":this._x=m*h*p-c*g*w,this._y=c*g*p+m*h*w,this._z=c*h*w+m*g*p,this._w=c*h*p-m*g*w;break;case"ZYX":this._x=m*h*p-c*g*w,this._y=c*g*p+m*h*w,this._z=c*h*w-m*g*p,this._w=c*h*p+m*g*w;break;case"YZX":this._x=m*h*p+c*g*w,this._y=c*g*p+m*h*w,this._z=c*h*w-m*g*p,this._w=c*h*p-m*g*w;break;case"XZY":this._x=m*h*p-c*g*w,this._y=c*g*p-m*h*w,this._z=c*h*w+m*g*p,this._w=c*h*p+m*g*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new W,Zg=new wl;class xt{constructor(e,n,i,r,s,o,a,l,c){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],m=i[2],g=i[5],w=i[8],T=r[0],x=r[3],d=r[6],v=r[1],y=r[4],E=r[7],P=r[2],I=r[5],D=r[8];return s[0]=o*T+a*v+l*P,s[3]=o*x+a*y+l*I,s[6]=o*d+a*E+l*D,s[1]=c*T+h*v+p*P,s[4]=c*x+h*y+p*I,s[7]=c*d+h*E+p*D,s[2]=m*T+g*v+w*P,s[5]=m*x+g*y+w*I,s[8]=m*d+g*E+w*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,m=a*l-h*s,g=c*s-o*l,w=n*p+i*m+r*g;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=p*T,e[1]=(r*c-h*i)*T,e[2]=(a*i-r*o)*T,e[3]=m*T,e[4]=(h*n-r*l)*T,e[5]=(r*s-a*n)*T,e[6]=g*T,e[7]=(i*l-c*n)*T,e[8]=(o*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Zd.makeScale(e,n)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new xt;function bx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nw(){const t=pu("canvas");return t.style.display="block",t}const Jg={};function pl(t){t in Jg||(Jg[t]=!0,console.warn(t))}function Uw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Qg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e1=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fw(){const t={enabled:!0,workingColorSpace:Ko,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Wt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Wt&&(r.r=zo(r.r),r.g=zo(r.g),r.b=zo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?fu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ko]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:Qg,fromXYZ:e1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:Qg,fromXYZ:e1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Dt=Fw();function Er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let so;class kw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{so===void 0&&(so=pu("canvas")),so.width=e.width,so.height=e.height;const r=so.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=so}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Er(n[i]/255)*255):n[i]=Er(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ow=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zw=0;const Qd=new W;class ti extends ta{constructor(e=ti.DEFAULT_IMAGE,n=ti.DEFAULT_MAPPING,i=Os,r=Os,s=rr,o=zs,a=qi,l=cr,c=ti.DEFAULT_ANISOTROPY,h=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=Ml(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=vx;ti.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],g=l[5],w=l[9],T=l[2],x=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+T)<.1&&Math.abs(w+x)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(g+1)/2,P=(d+1)/2,I=(h+m)/4,D=(p+T)/4,U=(w+x)/4;return y>E&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=I/i,s=D/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=D/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-w)*(x-w)+(p-T)*(p-T)+(m-h)*(m-h));return Math.abs(v)<.001&&(v=1),this.x=(x-w)/v,this.y=(p-T)/v,this.z=(m-h)/v,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bw extends ta{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ti(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends Bw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cx extends ti{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hw extends ti{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),tc.subVectors(this.max,wa),oo.subVectors(e.a,wa),ao.subVectors(e.b,wa),lo.subVectors(e.c,wa),Fr.subVectors(ao,oo),kr.subVectors(lo,ao),Ms.subVectors(oo,lo);let n=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-Ms.z,Ms.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,Ms.z,0,-Ms.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-Ms.y,Ms.x,0];return!ef(n,oo,ao,lo,tc)||(n=[1,0,0,0,1,0,0,0,1],!ef(n,oo,ao,lo,tc))?!1:(nc.crossVectors(Fr,kr),n=[nc.x,nc.y,nc.z],ef(n,oo,ao,lo,tc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new W,new W,new W,new W,new W,new W,new W,new W],zi=new W,ec=new Sl,oo=new W,ao=new W,lo=new W,Fr=new W,kr=new W,Ms=new W,wa=new W,tc=new W,nc=new W,ws=new W;function ef(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ws.fromArray(t,s);const a=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),l=e.dot(ws),c=n.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vw=new Sl,Sa=new W,tf=new W;class Nu{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Vw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(tf)),this.expandByPoint(Sa.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hr=new W,nf=new W,ic=new W,Or=new W,rf=new W,rc=new W,sf=new W;class Sm{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nf.copy(e).add(n).multiplyScalar(.5),ic.copy(n).sub(e).normalize(),Or.copy(this.origin).sub(nf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ic),a=Or.dot(this.direction),l=-Or.dot(ic),c=Or.lengthSq(),h=Math.abs(1-o*o);let p,m,g,w;if(h>0)if(p=o*l-a,m=o*a-l,w=s*h,p>=0)if(m>=-w)if(m<=w){const T=1/h;p*=T,m*=T,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-w?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c):m<=w?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(nf).addScaledVector(ic,m),g}intersectSphere(e,n){hr.subVectors(e.center,this.origin);const i=hr.dot(this.direction),r=hr.dot(hr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,n,i,r,s){rf.subVectors(n,e),rc.subVectors(i,e),sf.crossVectors(rf,rc);let o=this.direction.dot(sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const l=a*this.direction.dot(rc.crossVectors(Or,rc));if(l<0)return null;const c=a*this.direction.dot(rf.cross(Or));if(c<0||l+c>o)return null;const h=-a*Or.dot(sf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,i,r,s,o,a,l,c,h,p,m,g,w,T,x){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,m,g,w,T,x)}set(e,n,i,r,s,o,a,l,c,h,p,m,g,w,T,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=m,d[3]=g,d[7]=w,d[11]=T,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,w=a*h,T=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+w*c,n[5]=m-T*c,n[9]=-a*l,n[2]=T-m*c,n[6]=w+g*c,n[10]=o*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,w=c*h,T=c*p;n[0]=m+T*a,n[4]=w*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-w,n[6]=T+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,w=c*h,T=c*p;n[0]=m-T*a,n[4]=-o*p,n[8]=w+g*a,n[1]=g+w*a,n[5]=o*h,n[9]=T-m*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*h,g=o*p,w=a*h,T=a*p;n[0]=l*h,n[4]=w*c-g,n[8]=m*c+T,n[1]=l*p,n[5]=T*c+m,n[9]=g*c-w,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*c,w=a*l,T=a*c;n[0]=l*h,n[4]=T-m*p,n[8]=w*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*p+w,n[10]=m-T*p}else if(e.order==="XZY"){const m=o*l,g=o*c,w=a*l,T=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=m*p+T,n[5]=o*h,n[9]=g*p-w,n[2]=w*p-g,n[6]=a*h,n[10]=T*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gw,e,Ww)}lookAt(e,n,i){const r=this.elements;return vi.subVectors(e,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),zr.crossVectors(i,vi),zr.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),zr.crossVectors(i,vi)),zr.normalize(),sc.crossVectors(vi,zr),r[0]=zr.x,r[4]=sc.x,r[8]=vi.x,r[1]=zr.y,r[5]=sc.y,r[9]=vi.y,r[2]=zr.z,r[6]=sc.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],m=i[9],g=i[13],w=i[2],T=i[6],x=i[10],d=i[14],v=i[3],y=i[7],E=i[11],P=i[15],I=r[0],D=r[4],U=r[8],A=r[12],M=r[1],k=r[5],q=r[9],re=r[13],ce=r[2],fe=r[6],X=r[10],ee=r[14],H=r[3],oe=r[7],ue=r[11],Ce=r[15];return s[0]=o*I+a*M+l*ce+c*H,s[4]=o*D+a*k+l*fe+c*oe,s[8]=o*U+a*q+l*X+c*ue,s[12]=o*A+a*re+l*ee+c*Ce,s[1]=h*I+p*M+m*ce+g*H,s[5]=h*D+p*k+m*fe+g*oe,s[9]=h*U+p*q+m*X+g*ue,s[13]=h*A+p*re+m*ee+g*Ce,s[2]=w*I+T*M+x*ce+d*H,s[6]=w*D+T*k+x*fe+d*oe,s[10]=w*U+T*q+x*X+d*ue,s[14]=w*A+T*re+x*ee+d*Ce,s[3]=v*I+y*M+E*ce+P*H,s[7]=v*D+y*k+E*fe+P*oe,s[11]=v*U+y*q+E*X+P*ue,s[15]=v*A+y*re+E*ee+P*Ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],g=e[14],w=e[3],T=e[7],x=e[11],d=e[15];return w*(+s*l*p-r*c*p-s*a*m+i*c*m+r*a*g-i*l*g)+T*(+n*l*g-n*c*m+s*o*m-r*o*g+r*c*h-s*l*h)+x*(+n*c*p-n*a*g-s*o*p+i*o*g+s*a*h-i*c*h)+d*(-r*a*h-n*l*p+n*a*m+r*o*p-i*o*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],g=e[11],w=e[12],T=e[13],x=e[14],d=e[15],v=p*x*c-T*m*c+T*l*g-a*x*g-p*l*d+a*m*d,y=w*m*c-h*x*c-w*l*g+o*x*g+h*l*d-o*m*d,E=h*T*c-w*p*c+w*a*g-o*T*g-h*a*d+o*p*d,P=w*p*l-h*T*l-w*a*m+o*T*m+h*a*x-o*p*x,I=n*v+i*y+r*E+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=v*D,e[1]=(T*m*s-p*x*s-T*r*g+i*x*g+p*r*d-i*m*d)*D,e[2]=(a*x*s-T*l*s+T*r*c-i*x*c-a*r*d+i*l*d)*D,e[3]=(p*l*s-a*m*s-p*r*c+i*m*c+a*r*g-i*l*g)*D,e[4]=y*D,e[5]=(h*x*s-w*m*s+w*r*g-n*x*g-h*r*d+n*m*d)*D,e[6]=(w*l*s-o*x*s-w*r*c+n*x*c+o*r*d-n*l*d)*D,e[7]=(o*m*s-h*l*s+h*r*c-n*m*c-o*r*g+n*l*g)*D,e[8]=E*D,e[9]=(w*p*s-h*T*s-w*i*g+n*T*g+h*i*d-n*p*d)*D,e[10]=(o*T*s-w*a*s+w*i*c-n*T*c-o*i*d+n*a*d)*D,e[11]=(h*a*s-o*p*s-h*i*c+n*p*c+o*i*g-n*a*g)*D,e[12]=P*D,e[13]=(h*T*r-w*p*r+w*i*m-n*T*m-h*i*x+n*p*x)*D,e[14]=(w*a*r-o*T*r-w*i*l+n*T*l+o*i*x-n*a*x)*D,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*m+n*a*m)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,m=s*c,g=s*h,w=s*p,T=o*h,x=o*p,d=a*p,v=l*c,y=l*h,E=l*p,P=i.x,I=i.y,D=i.z;return r[0]=(1-(T+d))*P,r[1]=(g+E)*P,r[2]=(w-y)*P,r[3]=0,r[4]=(g-E)*I,r[5]=(1-(m+d))*I,r[6]=(x+v)*I,r[7]=0,r[8]=(w+y)*D,r[9]=(x-v)*D,r[10]=(1-(m+T))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=co.set(r[0],r[1],r[2]).length();const o=co.set(r[4],r[5],r[6]).length(),a=co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bi.copy(this);const c=1/s,h=1/o,p=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=p,Bi.elements[9]*=p,Bi.elements[10]*=p,n.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=sr,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let w,T;if(l)w=s/(o-s),T=o*s/(o-s);else if(a===sr)w=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(a===hu)w=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=w,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=sr,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let w,T;if(l)w=1/(o-s),T=o/(o-s);else if(a===sr)w=-2/(o-s),T=-(o+s)/(o-s);else if(a===hu)w=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=w,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const co=new W,Bi=new Qt,Gw=new W(0,0,0),Ww=new W(1,1,1),zr=new W,sc=new W,vi=new W,t1=new Qt,n1=new wl;class Ji{constructor(e=0,n=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return t1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return n1.setFromEuler(this),this.setFromQuaternion(n1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xw=0;const i1=new W,uo=new wl,pr=new Qt,oc=new W,Ea=new W,jw=new W,qw=new wl,r1=new W(1,0,0),s1=new W(0,1,0),o1=new W(0,0,1),a1={type:"added"},Yw={type:"removed"},fo={type:"childadded",child:null},of={type:"childremoved",child:null};class Fn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new W,n=new Ji,i=new wl,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new xt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(r1,e)}rotateY(e){return this.rotateOnAxis(s1,e)}rotateZ(e){return this.rotateOnAxis(o1,e)}translateOnAxis(e,n){return i1.copy(e).applyQuaternion(this.quaternion),this.position.add(i1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r1,e)}translateY(e){return this.translateOnAxis(s1,e)}translateZ(e){return this.translateOnAxis(o1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oc.copy(e):oc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ea,oc,this.up):pr.lookAt(oc,Ea,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),uo.setFromRotationMatrix(pr),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a1),fo.child=e,this.dispatchEvent(fo),fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yw),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a1),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,jw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,qw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),w=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),w.length>0&&(i.nodes=w)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new W(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new W,mr=new W,af=new W,gr=new W,ho=new W,po=new W,l1=new W,lf=new W,cf=new W,uf=new W,df=new Xt,ff=new Xt,hf=new Xt;class ji{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hi.subVectors(e,n),r.cross(Hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hi.subVectors(r,n),mr.subVectors(i,n),af.subVectors(e,n);const o=Hi.dot(Hi),a=Hi.dot(mr),l=Hi.dot(af),c=mr.dot(mr),h=mr.dot(af),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(c*l-a*h)*m,w=(o*h-a*l)*m;return s.set(1-g-w,w,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return df.setScalar(0),ff.setScalar(0),hf.setScalar(0),df.fromBufferAttribute(e,n),ff.fromBufferAttribute(e,i),hf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(df,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(hf,s.z),o}static isFrontFacing(e,n,i,r){return Hi.subVectors(i,n),mr.subVectors(e,n),Hi.cross(mr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Hi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ji.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ho.subVectors(r,i),po.subVectors(s,i),lf.subVectors(e,i);const l=ho.dot(lf),c=po.dot(lf);if(l<=0&&c<=0)return n.copy(i);cf.subVectors(e,r);const h=ho.dot(cf),p=po.dot(cf);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ho,o);uf.subVectors(e,s);const g=ho.dot(uf),w=po.dot(uf);if(w>=0&&g<=w)return n.copy(s);const T=g*c-l*w;if(T<=0&&c>=0&&w<=0)return a=c/(c-w),n.copy(i).addScaledVector(po,a);const x=h*w-g*p;if(x<=0&&p-h>=0&&g-w>=0)return l1.subVectors(s,r),a=(p-h)/(p-h+(g-w)),n.copy(r).addScaledVector(l1,a);const d=1/(x+T+m);return o=T*d,a=m*d,n.copy(i).addScaledVector(ho,o).addScaledVector(po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},ac={h:0,s:0,l:0};function pf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Dt.workingColorSpace){if(e=Dw(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pf(o,s,e+1/3),this.g=pf(o,s,e),this.b=pf(o,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Dt.workingToColorSpace(Yn.copy(this),e),Math.round(St(Yn.r*255,0,255))*65536+Math.round(St(Yn.g*255,0,255))*256+Math.round(St(Yn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Yn.copy(this),n);const i=Yn.r,r=Yn.g,s=Yn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Yn.copy(this),n),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Nn){Dt.workingToColorSpace(Yn.copy(this),e);const n=Yn.r,i=Yn.g,r=Yn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+n,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Br),e.getHSL(ac);const i=$d(Br.h,ac.h,n),r=$d(Br.s,ac.s,n),s=$d(Br.l,ac.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Et;Et.NAMES=Rx;let $w=0;class Zs extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Oo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ch&&(i.blendSrc=this.blendSrc),this.blendDst!==Rh&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bt extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new W,lc=new Qe;let Kw=0;class lr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$g,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lc.fromBufferAttribute(this,n),lc.applyMatrix3(e),this.setXY(n,lc.x,lc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ma(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ma(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ma(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ma(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array),s=oi(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$g&&(e.usage=this.usage),e}}class Px extends lr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ix extends lr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends lr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Zw=0;const Pi=new Qt,mf=new Fn,mo=new W,_i=new Sl,Ta=new Sl,In=new W;class gn extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Ix:Px)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(_i.min,Ta.min),_i.expandByPoint(In),In.addVectors(_i.max,Ta.max),_i.expandByPoint(In)):(_i.expandByPoint(Ta.min),_i.expandByPoint(Ta.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)In.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(In));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)In.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(e,c),In.add(mo)),r=Math.max(r,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new W,l[U]=new W;const c=new W,h=new W,p=new W,m=new Qe,g=new Qe,w=new Qe,T=new W,x=new W;function d(U,A,M){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,M),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,A),w.fromBufferAttribute(s,M),h.sub(c),p.sub(c),g.sub(m),w.sub(m);const k=1/(g.x*w.y-w.x*g.y);isFinite(k)&&(T.copy(h).multiplyScalar(w.y).addScaledVector(p,-g.y).multiplyScalar(k),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-w.x).multiplyScalar(k),a[U].add(T),a[A].add(T),a[M].add(T),l[U].add(x),l[A].add(x),l[M].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,A=v.length;U<A;++U){const M=v[U],k=M.start,q=M.count;for(let re=k,ce=k+q;re<ce;re+=3)d(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const y=new W,E=new W,P=new W,I=new W;function D(U){P.fromBufferAttribute(r,U),I.copy(P);const A=a[U];y.copy(A),y.sub(P.multiplyScalar(P.dot(A))).normalize(),E.crossVectors(I,A);const k=E.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,k)}for(let U=0,A=v.length;U<A;++U){const M=v[U],k=M.start,q=M.count;for(let re=k,ce=k+q;re<ce;re+=3)D(e.getX(re+0)),D(e.getX(re+1)),D(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,p=new W;if(e)for(let m=0,g=e.count;m<g;m+=3){const w=e.getX(m+0),T=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,w),s.fromBufferAttribute(n,T),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,w),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(w,a.x,a.y,a.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let g=0,w=0;for(let T=0,x=l.length;T<x;T++){a.isInterleavedBufferAttribute?g=l[T]*a.data.stride+a.offset:g=l[T]*h;for(let d=0;d<h;d++)m[w++]=c[g++]}return new lr(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c1=new Qt,Ss=new Sm,cc=new Nu,u1=new W,uc=new W,dc=new W,fc=new W,gf=new W,hc=new W,d1=new W,pc=new W;class z extends Fn{constructor(e=new gn,n=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(gf.fromBufferAttribute(p,e),o?hc.addScaledVector(gf,h):hc.addScaledVector(gf.sub(n),h))}n.add(hc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(cc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(cc,u1)===null||Ss.origin.distanceToSquared(u1)>(e.far-e.near)**2))&&(c1.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(c1),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let w=0,T=m.length;w<T;w++){const x=m[w],d=o[x.materialIndex],v=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let E=v,P=y;E<P;E+=3){const I=a.getX(E),D=a.getX(E+1),U=a.getX(E+2);r=mc(this,d,e,i,c,h,p,I,D,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),T=Math.min(a.count,g.start+g.count);for(let x=w,d=T;x<d;x+=3){const v=a.getX(x),y=a.getX(x+1),E=a.getX(x+2);r=mc(this,o,e,i,c,h,p,v,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let w=0,T=m.length;w<T;w++){const x=m[w],d=o[x.materialIndex],v=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=v,P=y;E<P;E+=3){const I=E,D=E+1,U=E+2;r=mc(this,d,e,i,c,h,p,I,D,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let x=w,d=T;x<d;x+=3){const v=x,y=x+1,E=x+2;r=mc(this,o,e,i,c,h,p,v,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Jw(t,e,n,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cs,a),l===null)return null;pc.copy(a),pc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pc);return c<n.near||c>n.far?null:{distance:c,point:pc.clone(),object:t}}function mc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,uc),t.getVertexPosition(l,dc),t.getVertexPosition(c,fc);const h=Jw(t,e,n,i,uc,dc,fc,d1);if(h){const p=new W;ji.getBarycoord(d1,uc,dc,fc,p),r&&(h.uv=ji.getInterpolatedAttribute(r,a,l,c,p,new Qe)),s&&(h.uv1=ji.getInterpolatedAttribute(s,a,l,c,p,new Qe)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,p,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new W,materialIndex:0};ji.getNormal(uc,dc,fc,m.normal),h.face=m,h.barycoord=p}return h}class Vn extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let m=0,g=0;w("z","y","x",-1,-1,i,n,e,o,s,0),w("z","y","x",1,-1,i,n,-e,o,s,1),w("x","z","y",1,1,e,i,n,r,o,2),w("x","z","y",1,-1,e,i,-n,r,o,3),w("x","y","z",1,-1,e,n,i,r,s,4),w("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function w(T,x,d,v,y,E,P,I,D,U,A){const M=E/D,k=P/U,q=E/2,re=P/2,ce=I/2,fe=D+1,X=U+1;let ee=0,H=0;const oe=new W;for(let ue=0;ue<X;ue++){const Ce=ue*k-re;for(let Oe=0;Oe<fe;Oe++){const yt=Oe*M-q;oe[T]=yt*v,oe[x]=Ce*y,oe[d]=ce,c.push(oe.x,oe.y,oe.z),oe[T]=0,oe[x]=0,oe[d]=I>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(Oe/D),p.push(1-ue/U),ee+=1}}for(let ue=0;ue<U;ue++)for(let Ce=0;Ce<D;Ce++){const Oe=m+Ce+fe*ue,yt=m+Ce+fe*(ue+1),ht=m+(Ce+1)+fe*(ue+1),Ie=m+(Ce+1)+fe*ue;l.push(Oe,yt,Ie),l.push(yt,ht,Ie),H+=6}a.addGroup(g,H,A),g+=H,m+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jn(t){const e={};for(let n=0;n<t.length;n++){const i=Zo(t[n]);for(const r in i)e[r]=i[r]}return e}function Qw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const eS={clone:Zo,merge:Jn};var tS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tS,this.fragmentShader=nS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=Qw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dx extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new W,f1=new Qe,h1=new Qe;class yi extends Dx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,f1,h1),n.subVectors(h1,f1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const go=-90,vo=1;class iS extends Fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(go,vo,e,n);r.layers=this.layers,this.add(r);const s=new yi(go,vo,e,n);s.layers=this.layers,this.add(s);const o=new yi(go,vo,e,n);o.layers=this.layers,this.add(o);const a=new yi(go,vo,e,n);a.layers=this.layers,this.add(a);const l=new yi(go,vo,e,n);l.layers=this.layers,this.add(l);const c=new yi(go,vo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,g),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class Nx extends ti{constructor(e=[],n=Yo,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rS extends Ys{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vn(5,5,5),s=new us({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:ss});s.uniforms.tEquirect.value=n;const o=new z(r,s),a=n.minFilter;return n.minFilter===zs&&(n.minFilter=rr),new iS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ve extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),d=this._getHandJoint(c,T);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,w=.005;c.inputState.pinching&&m>g+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Tm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=n}clone(){return new Tm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _f=new W,aS=new W,lS=new xt;class Is{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_f.subVectors(i,n).cross(aS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_f),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lS.getNormalMatrix(e),r=this.coplanarPoint(_f).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Nu,cS=new Qe(.5,.5),gc=new W;class Am{constructor(e=new Is,n=new Is,i=new Is,r=new Is,s=new Is,o=new Is){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],m=s[6],g=s[7],w=s[8],T=s[9],x=s[10],d=s[11],v=s[12],y=s[13],E=s[14],P=s[15];if(r[0].setComponents(c-o,g-h,d-w,P-v).normalize(),r[1].setComponents(c+o,g+h,d+w,P+v).normalize(),r[2].setComponents(c+a,g+p,d+T,P+y).normalize(),r[3].setComponents(c-a,g-p,d-T,P-y).normalize(),i)r[4].setComponents(l,m,x,E).normalize(),r[5].setComponents(c-l,g-m,d-x,P-E).normalize();else if(r[4].setComponents(c-l,g-m,d-x,P-E).normalize(),n===sr)r[5].setComponents(c+l,g+m,d+x,P+E).normalize();else if(n===hu)r[5].setComponents(l,m,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const n=cS.distanceTo(e.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gc.x=r.normal.x>0?e.max.x:e.min.x,gc.y=r.normal.y>0?e.max.y:e.min.y,gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new W,gu=new W,p1=new Qt,Aa=new Sm,vc=new Nu,xf=new W,m1=new W;class g1 extends Fn{constructor(e=new gn,n=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)mu.fromBufferAttribute(n,r-1),gu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(r),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;p1.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(p1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),w=Math.min(h.count,o.start+o.count);for(let T=g,x=w-1;T<x;T+=c){const d=h.getX(T),v=h.getX(T+1),y=_c(this,e,Aa,l,d,v,T);y&&n.push(y)}if(this.isLineLoop){const T=h.getX(w-1),x=h.getX(g),d=_c(this,e,Aa,l,T,x,w-1);d&&n.push(d)}}else{const g=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let T=g,x=w-1;T<x;T+=c){const d=_c(this,e,Aa,l,T,T+1,T);d&&n.push(d)}if(this.isLineLoop){const T=_c(this,e,Aa,l,w-1,g,w-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _c(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(mu.fromBufferAttribute(a,r),gu.fromBufferAttribute(a,s),n.distanceSqToSegment(mu,gu,xf,m1)>i)return;xf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(xf);if(!(c<e.near||c>e.far))return{distance:c,point:m1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class Ts extends ti{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ux extends ti{constructor(e,n,i=qs,r,s,o,a=Ki,l=Ki,c,h=fl,p=1){if(h!==fl&&h!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:p};super(m,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fx extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=n/2,p=Math.PI/2*e,m=n,g=2*p+m,w=i*2+s,T=r+1,x=new W,d=new W;for(let v=0;v<=w;v++){let y=0,E=0,P=0,I=0;if(v<=i){const A=v/i,M=A*Math.PI/2;E=-h-e*Math.cos(M),P=e*Math.sin(M),I=-e*Math.cos(M),y=A*p}else if(v<=i+s){const A=(v-i)/s;E=-h+A*n,P=e,I=0,y=p+A*m}else{const A=(v-i-s)/i,M=A*Math.PI/2;E=h+e*Math.sin(M),P=e*Math.cos(M),I=e*Math.sin(M),y=p+m+A*p}const D=Math.max(0,Math.min(1,y/g));let U=0;v===0?U=.5/r:v===w&&(U=-.5/r);for(let A=0;A<=r;A++){const M=A/r,k=M*Math.PI*2,q=Math.sin(k),re=Math.cos(k);d.x=-P*re,d.y=E,d.z=P*q,a.push(d.x,d.y,d.z),x.set(-P*re,I,P*q),x.normalize(),l.push(x.x,x.y,x.z),c.push(M+U,D)}if(v>0){const A=(v-1)*T;for(let M=0;M<r;M++){const k=A+M,q=A+M+1,re=v*T+M,ce=v*T+M+1;o.push(k,q,re),o.push(q,ce,re)}}}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $n extends gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new W,h=new Qe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=n;p++,m+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Je extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],g=[];let w=0;const T=[],x=i/2;let d=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(g,2));function v(){const E=new W,P=new W;let I=0;const D=(n-e)/i;for(let U=0;U<=s;U++){const A=[],M=U/s,k=M*(n-e)+e;for(let q=0;q<=r;q++){const re=q/r,ce=re*l+a,fe=Math.sin(ce),X=Math.cos(ce);P.x=k*fe,P.y=-M*i+x,P.z=k*X,p.push(P.x,P.y,P.z),E.set(fe,D,X).normalize(),m.push(E.x,E.y,E.z),g.push(re,1-M),A.push(w++)}T.push(A)}for(let U=0;U<r;U++)for(let A=0;A<s;A++){const M=T[A][U],k=T[A+1][U],q=T[A+1][U+1],re=T[A][U+1];(e>0||A!==0)&&(h.push(M,k,re),I+=3),(n>0||A!==s-1)&&(h.push(k,q,re),I+=3)}c.addGroup(d,I,0),d+=I}function y(E){const P=w,I=new Qe,D=new W;let U=0;const A=E===!0?e:n,M=E===!0?1:-1;for(let q=1;q<=r;q++)p.push(0,x*M,0),m.push(0,M,0),g.push(.5,.5),w++;const k=w;for(let q=0;q<=r;q++){const ce=q/r*l+a,fe=Math.cos(ce),X=Math.sin(ce);D.x=A*X,D.y=x*M,D.z=A*fe,p.push(D.x,D.y,D.z),m.push(0,M,0),I.x=fe*.5+.5,I.y=X*.5*M+.5,g.push(I.x,I.y),w++}for(let q=0;q<r;q++){const re=P+q,ce=k+q;E===!0?h.push(ce,ce+1,re):h.push(ce+1,ce,re),U+=3}c.addGroup(d,U,E===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn extends Je{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bm extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new W,E=new W,P=new W;for(let I=0;I<n.length;I+=3)g(n[I+0],y),g(n[I+1],E),g(n[I+2],P),l(y,E,P,v)}function l(v,y,E,P){const I=P+1,D=[];for(let U=0;U<=I;U++){D[U]=[];const A=v.clone().lerp(E,U/I),M=y.clone().lerp(E,U/I),k=I-U;for(let q=0;q<=k;q++)q===0&&U===I?D[U][q]=A:D[U][q]=A.clone().lerp(M,q/k)}for(let U=0;U<I;U++)for(let A=0;A<2*(I-U)-1;A++){const M=Math.floor(A/2);A%2===0?(m(D[U][M+1]),m(D[U+1][M]),m(D[U][M])):(m(D[U][M+1]),m(D[U+1][M+1]),m(D[U+1][M]))}}function c(v){const y=new W;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(v),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function h(){const v=new W;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const E=x(v)/2/Math.PI+.5,P=d(v)/Math.PI+.5;o.push(E,1-P)}w(),p()}function p(){for(let v=0;v<o.length;v+=6){const y=o[v+0],E=o[v+2],P=o[v+4],I=Math.max(y,E,P),D=Math.min(y,E,P);I>.9&&D<.1&&(y<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function m(v){s.push(v.x,v.y,v.z)}function g(v,y){const E=v*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function w(){const v=new W,y=new W,E=new W,P=new W,I=new Qe,D=new Qe,U=new Qe;for(let A=0,M=0;A<s.length;A+=9,M+=6){v.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),E.set(s[A+6],s[A+7],s[A+8]),I.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),P.copy(v).add(y).add(E).divideScalar(3);const k=x(P);T(I,M+0,v,k),T(D,M+2,y,k),T(U,M+4,E,k)}}function T(v,y,E,P){P<0&&v.x===1&&(o[y]=v.x-1),E.x===0&&E.z===0&&(o[y]=P/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bm(e.vertices,e.indices,e.radius,e.details)}}class an extends bm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new an(e.radius,e.detail)}}class Pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],m=i[r+1]-h,g=(o-h)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Qe:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new W,r=[],s=[],o=[],a=new W,l=new Qt;for(let g=0;g<=e;g++){const w=g/e;r[g]=this.getTangentAt(w,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const w=Math.acos(St(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,w))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(St(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let w=1;w<=e;w++)s[w].applyMatrix4(l.makeRotationAxis(r[w],g*w)),o[w].crossVectors(r[w],s[w])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kx extends Pr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Qe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*h-g*p+this.aX,c=m*p+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uS extends kx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let m=(o-s)/c-(a-s)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,g*=h,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const xc=new W,yf=new Cm,Mf=new Cm,wf=new Cm;class gp extends Pr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new W){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(xc.subVectors(r[0],r[1]).add(r[0]),c=xc);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(xc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let w=Math.pow(c.distanceToSquared(p),g),T=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(h),g);T<1e-4&&(T=1),w<1e-4&&(w=T),x<1e-4&&(x=T),yf.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,w,T,x),Mf.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,w,T,x),wf.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,w,T,x)}else this.curveType==="catmullrom"&&(yf.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),Mf.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),wf.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return i.set(yf.calc(l),Mf.calc(l),wf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function v1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function dS(t,e){const n=1-t;return n*n*e}function fS(t,e){return 2*(1-t)*t*e}function hS(t,e){return t*t*e}function Wa(t,e,n,i){return dS(t,e)+fS(t,n)+hS(t,i)}function pS(t,e){const n=1-t;return n*n*n*e}function mS(t,e){const n=1-t;return 3*n*n*t*e}function gS(t,e){return 3*(1-t)*t*t*e}function vS(t,e){return t*t*t*e}function Xa(t,e,n,i,r){return pS(t,e)+mS(t,n)+gS(t,i)+vS(t,r)}class _S extends Pr{constructor(e=new Qe,n=new Qe,i=new Qe,r=new Qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Qe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xa(e,r.x,s.x,o.x,a.x),Xa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xS extends Pr{constructor(e=new W,n=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new W){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xa(e,r.x,s.x,o.x,a.x),Xa(e,r.y,s.y,o.y,a.y),Xa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yS extends Pr{constructor(e=new Qe,n=new Qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Qe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Qe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MS extends Pr{constructor(e=new W,n=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new W){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new W){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wS extends Pr{constructor(e=new Qe,n=new Qe,i=new Qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Qe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wa(e,r.x,s.x,o.x),Wa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends Pr{constructor(e=new W,n=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new W){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wa(e,r.x,s.x,o.x),Wa(e,r.y,s.y,o.y),Wa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SS extends Pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Qe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(v1(a,l.x,c.x,h.x,p.x),v1(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Qe().fromArray(r))}return this}}var ES=Object.freeze({__proto__:null,ArcCurve:uS,CatmullRomCurve3:gp,CubicBezierCurve:_S,CubicBezierCurve3:xS,EllipseCurve:kx,LineCurve:yS,LineCurve3:MS,QuadraticBezierCurve:wS,QuadraticBezierCurve3:Ox,SplineCurve:SS});class Ln extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,m=n/l,g=[],w=[],T=[],x=[];for(let d=0;d<h;d++){const v=d*m-o;for(let y=0;y<c;y++){const E=y*p-s;w.push(E,-v,0),T.push(0,0,1),x.push(y/a),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+c*d,E=v+c*(d+1),P=v+1+c*(d+1),I=v+1+c*d;g.push(y,E,I),g.push(E,P,I)}this.setIndex(g),this.setAttribute("position",new Rt(w,3)),this.setAttribute("normal",new Rt(T,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rm extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const m=(n-e)/r,g=new W,w=new Qe;for(let T=0;T<=r;T++){for(let x=0;x<=i;x++){const d=s+x/i*o;g.x=p*Math.cos(d),g.y=p*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),w.x=(g.x/n+1)/2,w.y=(g.y/n+1)/2,h.push(w.x,w.y)}p+=m}for(let T=0;T<r;T++){const x=T*(i+1);for(let d=0;d<i;d++){const v=d+x,y=v,E=v+i+1,P=v+i+2,I=v+1;a.push(y,E,I),a.push(E,P,I)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ut extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new W,m=new W,g=[],w=[],T=[],x=[];for(let d=0;d<=i;d++){const v=[],y=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const I=P/n;p.x=-e*Math.cos(r+I*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+I*s)*Math.sin(o+y*a),w.push(p.x,p.y,p.z),m.copy(p).normalize(),T.push(m.x,m.y,m.z),x.push(I+E,1-y),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const y=h[d][v+1],E=h[d][v],P=h[d+1][v],I=h[d+1][v+1];(d!==0||o>0)&&g.push(y,E,I),(d!==i-1||l<Math.PI)&&g.push(E,P,I)}this.setIndex(g),this.setAttribute("position",new Rt(w,3)),this.setAttribute("normal",new Rt(T,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ot extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new W,p=new W,m=new W;for(let g=0;g<=i;g++)for(let w=0;w<=r;w++){const T=w/r*s,x=g/i*Math.PI*2;p.x=(e+n*Math.cos(x))*Math.cos(T),p.y=(e+n*Math.cos(x))*Math.sin(T),p.z=n*Math.sin(x),a.push(p.x,p.y,p.z),h.x=e*Math.cos(T),h.y=e*Math.sin(T),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),c.push(w/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let w=1;w<=r;w++){const T=(r+1)*g+w-1,x=(r+1)*(g-1)+w-1,d=(r+1)*(g-1)+w,v=(r+1)*g+w;o.push(T,x,v),o.push(x,d,v)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ja extends gn{constructor(e=new Ox(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new W,l=new W,c=new Qe;let h=new W;const p=[],m=[],g=[],w=[];T(),this.setIndex(w),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(g,2));function T(){for(let y=0;y<n;y++)x(y);x(s===!1?n:0),v(),d()}function x(y){h=e.getPointAt(y/n,h);const E=o.normals[y],P=o.binormals[y];for(let I=0;I<=r;I++){const D=I/r*Math.PI*2,U=Math.sin(D),A=-Math.cos(D);l.x=A*E.x+U*P.x,l.y=A*E.y+U*P.y,l.z=A*E.z+U*P.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){const P=(r+1)*(y-1)+(E-1),I=(r+1)*y+(E-1),D=(r+1)*y+E,U=(r+1)*(y-1)+E;w.push(P,I,U),w.push(I,D,U)}}function v(){for(let y=0;y<=n;y++)for(let E=0;E<=r;E++)c.x=y/n,c.y=E/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ja(new ES[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class be extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mm,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sf extends Zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mm,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TS extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pm extends Fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class bS extends Pm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ef=new Qt,_1=new W,x1=new W;class zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Am,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_1.setFromMatrixPosition(e.matrixWorld),n.position.copy(_1),x1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(x1),n.updateMatrixWorld(),Ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const y1=new Qt,ba=new W,Tf=new W;class CS extends zx{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Tf.copy(i.position),Tf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tf),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),y1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y1,i.coordinateSystem,i.reversedDepth)}}class Vi extends Pm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new CS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bx extends Dx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class RS extends zx{constructor(){super(new Bx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M1 extends Pm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new RS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PS extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const w1=new Qt;class IS{constructor(e,n,i=0,r=1/0){this.ray=new Sm(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return w1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w1),this}intersectObject(e,n=!0,i=[]){return vp(e,this,i,n),i.sort(S1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vp(e[r],this,i,n);return i.sort(S1),i}}function S1(t,e){return t.distance-e.distance}function vp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vp(s[o],e,n,!0)}}function E1(t,e,n,i){const r=LS(i);switch(n){case wx:return t*e;case Ex:return t*e/r.components*r.byteLength;case _m:return t*e/r.components*r.byteLength;case Tx:return t*e*2/r.components*r.byteLength;case xm:return t*e*2/r.components*r.byteLength;case Sx:return t*e*3/r.components*r.byteLength;case qi:return t*e*4/r.components*r.byteLength;case ym:return t*e*4/r.components*r.byteLength;case Fc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Gh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case Vh:return Math.max(t,8)*Math.max(e,8)/2;case Wh:case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case op:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ap:case lp:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case up:case dp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fp:case hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LS(t){switch(t){case cr:case _x:return{byteLength:1,components:1};case ul:case xx:case yl:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case qs:case mm:case wr:return{byteLength:4,components:1};case yx:case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DS(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,w)=>g.start-w.start);let m=0;for(let g=1;g<p.length;g++){const w=p[m],T=p[g];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++m,p[m]=T)}p.length=m+1;for(let g=0,w=p.length;g<w;g++){const T=p[g];t.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
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
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
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
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
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
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qS=`#ifdef USE_IRIDESCENCE
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
#endif`,YS=`#ifdef USE_BUMPMAP
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
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iE=`#define PI 3.141592653589793
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
} // validated`,rE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sE=`vec3 transformedNormal = objectNormal;
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
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ME=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
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
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IE=`PhysicalMaterial material;
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
#endif`,LE=`struct PhysicalMaterial {
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
}`,DE=`
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
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
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GE=`#if defined( USE_POINTS_UV )
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
#endif`,WE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
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
#endif`,KE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nT=`#ifdef USE_NORMALMAP
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
#endif`,iT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_T=`float getShadowMask() {
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
}`,xT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,CT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
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
}`,BT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,VT=`#define DISTANCE
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 diffuse;
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
}`,$T=`#define LAMBERT
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
}`,KT=`#define LAMBERT
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
}`,ZT=`#define MATCAP
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
}`,JT=`#define MATCAP
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
}`,QT=`#define NORMAL
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
}`,e3=`#define NORMAL
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
}`,t3=`#define PHONG
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
}`,n3=`#define PHONG
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
}`,i3=`#define STANDARD
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
}`,r3=`#define STANDARD
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
}`,s3=`#define TOON
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
}`,o3=`#define TOON
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
}`,a3=`uniform float size;
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
}`,l3=`uniform vec3 diffuse;
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
}`,c3=`#include <common>
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
}`,u3=`uniform vec3 color;
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
}`,d3=`uniform float rotation;
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
}`,f3=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:NS,alphahash_pars_fragment:US,alphamap_fragment:FS,alphamap_pars_fragment:kS,alphatest_fragment:OS,alphatest_pars_fragment:zS,aomap_fragment:BS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:jS,iridescence_fragment:qS,bumpmap_pars_fragment:YS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:JS,color_fragment:QS,color_pars_fragment:eE,color_pars_vertex:tE,color_vertex:nE,common:iE,cube_uv_reflection_fragment:rE,defaultnormal_vertex:sE,displacementmap_pars_vertex:oE,displacementmap_vertex:aE,emissivemap_fragment:lE,emissivemap_pars_fragment:cE,colorspace_fragment:uE,colorspace_pars_fragment:dE,envmap_fragment:fE,envmap_common_pars_fragment:hE,envmap_pars_fragment:pE,envmap_pars_vertex:mE,envmap_physical_pars_fragment:AE,envmap_vertex:gE,fog_vertex:vE,fog_pars_vertex:_E,fog_fragment:xE,fog_pars_fragment:yE,gradientmap_pars_fragment:ME,lightmap_pars_fragment:wE,lights_lambert_fragment:SE,lights_lambert_pars_fragment:EE,lights_pars_begin:TE,lights_toon_fragment:bE,lights_toon_pars_fragment:CE,lights_phong_fragment:RE,lights_phong_pars_fragment:PE,lights_physical_fragment:IE,lights_physical_pars_fragment:LE,lights_fragment_begin:DE,lights_fragment_maps:NE,lights_fragment_end:UE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:OE,logdepthbuf_vertex:zE,map_fragment:BE,map_pars_fragment:HE,map_particle_fragment:VE,map_particle_pars_fragment:GE,metalnessmap_fragment:WE,metalnessmap_pars_fragment:XE,morphinstance_vertex:jE,morphcolor_vertex:qE,morphnormal_vertex:YE,morphtarget_pars_vertex:$E,morphtarget_vertex:KE,normal_fragment_begin:ZE,normal_fragment_maps:JE,normal_pars_fragment:QE,normal_pars_vertex:eT,normal_vertex:tT,normalmap_pars_fragment:nT,clearcoat_normal_fragment_begin:iT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:oT,opaque_fragment:aT,packing:lT,premultiplied_alpha_fragment:cT,project_vertex:uT,dithering_fragment:dT,dithering_pars_fragment:fT,roughnessmap_fragment:hT,roughnessmap_pars_fragment:pT,shadowmap_pars_fragment:mT,shadowmap_pars_vertex:gT,shadowmap_vertex:vT,shadowmask_pars_fragment:_T,skinbase_vertex:xT,skinning_pars_vertex:yT,skinning_vertex:MT,skinnormal_vertex:wT,specularmap_fragment:ST,specularmap_pars_fragment:ET,tonemapping_fragment:TT,tonemapping_pars_fragment:AT,transmission_fragment:bT,transmission_pars_fragment:CT,uv_pars_fragment:RT,uv_pars_vertex:PT,uv_vertex:IT,worldpos_vertex:LT,background_vert:DT,background_frag:NT,backgroundCube_vert:UT,backgroundCube_frag:FT,cube_vert:kT,cube_frag:OT,depth_vert:zT,depth_frag:BT,distanceRGBA_vert:HT,distanceRGBA_frag:VT,equirect_vert:GT,equirect_frag:WT,linedashed_vert:XT,linedashed_frag:jT,meshbasic_vert:qT,meshbasic_frag:YT,meshlambert_vert:$T,meshlambert_frag:KT,meshmatcap_vert:ZT,meshmatcap_frag:JT,meshnormal_vert:QT,meshnormal_frag:e3,meshphong_vert:t3,meshphong_frag:n3,meshphysical_vert:i3,meshphysical_frag:r3,meshtoon_vert:s3,meshtoon_frag:o3,points_vert:a3,points_frag:l3,shadow_vert:c3,shadow_frag:u3,sprite_vert:d3,sprite_frag:f3},ke={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},nr={basic:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Jn([ke.points,ke.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Jn([ke.common,ke.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Jn([ke.sprite,ke.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Jn([ke.common,ke.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Jn([ke.lights,ke.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};nr.physical={uniforms:Jn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const yc={r:0,b:0,g:0},As=new Ji,h3=new Qt;function p3(t,e,n,i,r,s,o){const a=new Et(0);let l=s===!0?0:1,c,h,p=null,m=0,g=null;function w(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?n:e).get(E)),E}function T(y){let E=!1;const P=w(y);P===null?d(a,l):P&&P.isColor&&(d(P,1),E=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,E){const P=w(E);P&&(P.isCubeTexture||P.mapping===Du)?(h===void 0&&(h=new z(new Vn(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:Zo(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),As.copy(E.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h3.makeRotationFromEuler(As)),h.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Wt,(p!==P||m!==P.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=P,m=P.version,g=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new z(new Ln(2,2),new us({name:"BackgroundMaterial",uniforms:Zo(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||m!==P.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=P,m=P.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,E){y.getRGB(yc,Lx(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,E,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:T,addToRenderList:x,dispose:v}}function m3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(M,k,q,re,ce){let fe=!1;const X=p(re,q,k);s!==X&&(s=X,c(s.object)),fe=g(M,re,q,ce),fe&&w(M,re,q,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,E(M,k,q,re),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function p(M,k,q){const re=q.wireframe===!0;let ce=i[M.id];ce===void 0&&(ce={},i[M.id]=ce);let fe=ce[k.id];fe===void 0&&(fe={},ce[k.id]=fe);let X=fe[re];return X===void 0&&(X=m(l()),fe[re]=X),X}function m(M){const k=[],q=[],re=[];for(let ce=0;ce<n;ce++)k[ce]=0,q[ce]=0,re[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:re,object:M,attributes:{},index:null}}function g(M,k,q,re){const ce=s.attributes,fe=k.attributes;let X=0;const ee=q.getAttributes();for(const H in ee)if(ee[H].location>=0){const ue=ce[H];let Ce=fe[H];if(Ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),ue===void 0||ue.attribute!==Ce||Ce&&ue.data!==Ce.data)return!0;X++}return s.attributesNum!==X||s.index!==re}function w(M,k,q,re){const ce={},fe=k.attributes;let X=0;const ee=q.getAttributes();for(const H in ee)if(ee[H].location>=0){let ue=fe[H];ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Ce={};Ce.attribute=ue,ue&&ue.data&&(Ce.data=ue.data),ce[H]=Ce,X++}s.attributes=ce,s.attributesNum=X,s.index=re}function T(){const M=s.newAttributes;for(let k=0,q=M.length;k<q;k++)M[k]=0}function x(M){d(M,0)}function d(M,k){const q=s.newAttributes,re=s.enabledAttributes,ce=s.attributeDivisors;q[M]=1,re[M]===0&&(t.enableVertexAttribArray(M),re[M]=1),ce[M]!==k&&(t.vertexAttribDivisor(M,k),ce[M]=k)}function v(){const M=s.newAttributes,k=s.enabledAttributes;for(let q=0,re=k.length;q<re;q++)k[q]!==M[q]&&(t.disableVertexAttribArray(q),k[q]=0)}function y(M,k,q,re,ce,fe,X){X===!0?t.vertexAttribIPointer(M,k,q,ce,fe):t.vertexAttribPointer(M,k,q,re,ce,fe)}function E(M,k,q,re){T();const ce=re.attributes,fe=q.getAttributes(),X=k.defaultAttributeValues;for(const ee in fe){const H=fe[ee];if(H.location>=0){let oe=ce[ee];if(oe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const ue=oe.normalized,Ce=oe.itemSize,Oe=e.get(oe);if(Oe===void 0)continue;const yt=Oe.buffer,ht=Oe.type,Ie=Oe.bytesPerElement,pe=ht===t.INT||ht===t.UNSIGNED_INT||oe.gpuType===mm;if(oe.isInterleavedBufferAttribute){const ve=oe.data,Me=ve.stride,nt=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let ze=0;ze<H.locationSize;ze++)d(H.location+ze,ve.meshPerAttribute);M.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<H.locationSize;ze++)x(H.location+ze);t.bindBuffer(t.ARRAY_BUFFER,yt);for(let ze=0;ze<H.locationSize;ze++)y(H.location+ze,Ce/H.locationSize,ht,ue,Me*Ie,(nt+Ce/H.locationSize*ze)*Ie,pe)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)d(H.location+ve,oe.meshPerAttribute);M.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<H.locationSize;ve++)x(H.location+ve);t.bindBuffer(t.ARRAY_BUFFER,yt);for(let ve=0;ve<H.locationSize;ve++)y(H.location+ve,Ce/H.locationSize,ht,ue,Ce*Ie,Ce/H.locationSize*ve*Ie,pe)}}else if(X!==void 0){const ue=X[ee];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}v()}function P(){U();for(const M in i){const k=i[M];for(const q in k){const re=k[q];for(const ce in re)h(re[ce].object),delete re[ce];delete k[q]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const k=i[M.id];for(const q in k){const re=k[q];for(const ce in re)h(re[ce].object),delete re[ce];delete k[q]}delete i[M.id]}function D(M){for(const k in i){const q=i[k];if(q[M.id]===void 0)continue;const re=q[M.id];for(const ce in re)h(re[ce].object),delete re[ce];delete q[M.id]}}function U(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:x,disableUnusedAttributes:v}}function g3(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let g=0;for(let w=0;w<p;w++)g+=h[w];n.update(g,i,1)}function l(c,h,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let w=0;w<c.length;w++)o(c[w],h[w],m[w]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,p);let w=0;for(let T=0;T<p;T++)w+=h[T]*m[T];n.update(w,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==qi&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const U=D===yl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==cr&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==wr&&!U)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=w>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:P,maxSamples:I}}function _3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Is,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,g){const w=p.clippingPlanes,T=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||w===null||w.length===0||s&&!x)s?h(null):c();else{const v=s?0:i,y=v*4;let E=d.clippingState||null;l.value=E,E=h(w,m,y,g);for(let P=0;P!==y;++P)E[P]=n[P];d.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,w){const T=p!==null?p.length:0;let x=null;if(T!==0){if(x=l.value,w!==!0||x===null){const d=g+T*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,E=g;y!==T;++y,E+=4)o.copy(p[y]).applyMatrix4(v,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function x3(t){let e=new WeakMap;function n(o,a){return a===kh?o.mapping=Yo:a===Oh&&(o.mapping=$o),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===Oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Io=4,T1=[.125,.215,.35,.446,.526,.582],Ns=20,Af=new Bx,A1=new Et;let bf=null,Cf=0,Rf=0,Pf=!1;const Ls=(1+Math.sqrt(5))/2,_o=1/Ls,b1=[new W(-Ls,_o,0),new W(Ls,_o,0),new W(-_o,0,Ls),new W(_o,0,Ls),new W(0,Ls,-_o),new W(0,Ls,_o),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],y3=new W;class C1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=y3}=s;bf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Cf,Rf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Yo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rr,minFilter:rr,generateMipmaps:!1,type:yl,format:qi,colorSpace:Ko,depthBuffer:!1},r=R1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M3(s)),this._blurMaterial=w3(s,e,n)}return r}_compileMaterial(e){const n=new z(this._lodPlanes[0],e);this._renderer.compile(n,Af)}_sceneToCubeUV(e,n,i,r,s){const l=new yi(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(A1),p.toneMapping=os,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new bt({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),x=new z(new Vn,T);let d=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,d=!0):(T.color.copy(A1),d=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const P=this._cubeSize;Mc(r,E*P,y>2?P:0,P,P),p.setRenderTarget(r),d&&p.render(x,l),p.render(e,l)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Yo||e.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=I1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Af)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=b1[(r-s-1)%b1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new z(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ns-1),T=s/w,x=isFinite(s)?1+Math.floor(h*T):Ns;x>Ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ns}`);const d=[];let v=0;for(let D=0;D<Ns;++D){const U=D/T,A=Math.exp(-U*U/2);d.push(A),D===0?v+=A:D<x&&(v+=2*A)}for(let D=0;D<d.length;D++)d[D]=d[D]/v;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=w,m.mipInt.value=y-i;const E=this._sizeLods[r],P=3*E*(r>y-Io?r-y+Io:0),I=4*(this._cubeSize-E);Mc(n,P,I,3*E,2*E),l.setRenderTarget(n),l.render(p,Af)}}function M3(t){const e=[],n=[],i=[];let r=t;const s=t-Io+1+T1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Io?l=T1[o-t+Io-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,w=6,T=3,x=2,d=1,v=new Float32Array(T*w*g),y=new Float32Array(x*w*g),E=new Float32Array(d*w*g);for(let I=0;I<g;I++){const D=I%3*2/3-1,U=I>2?0:-1,A=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];v.set(A,T*w*I),y.set(m,x*w*I);const M=[I,I,I,I,I,I];E.set(M,d*w*I)}const P=new gn;P.setAttribute("position",new lr(v,T)),P.setAttribute("uv",new lr(y,x)),P.setAttribute("faceIndex",new lr(E,d)),e.push(P),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function R1(t,e,n){const i=new Ys(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function w3(t,e,n){const i=new Float32Array(Ns),r=new W(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Im(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function P1(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Im(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function I1(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Im(){return`

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
	`}function S3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kh||l===Oh,h=l===Yo||l===$o;if(c||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new C1(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new C1(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function E3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T3(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function c(p){const m=[],g=p.index,w=p.attributes.position;let T=0;if(g!==null){const v=g.array;T=g.version;for(let y=0,E=v.length;y<E;y+=3){const P=v[y+0],I=v[y+1],D=v[y+2];m.push(P,I,I,D,D,P)}}else if(w!==void 0){const v=w.array;T=w.version;for(let y=0,E=v.length/3-1;y<E;y+=3){const P=y+0,I=y+1,D=y+2;m.push(P,I,I,D,D,P)}}else return;const x=new(bx(m)?Ix:Px)(m,1);x.version=T;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function A3(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function c(m,g,w){w!==0&&(t.drawElementsInstanced(i,g,s,m*o,w),n.update(g,i,w))}function h(m,g,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,w);let x=0;for(let d=0;d<w;d++)x+=g[d];n.update(x,i,1)}function p(m,g,w,T){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<m.length;d++)c(m[d]/o,g[d],T[d]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,T,0,w);let d=0;for(let v=0;v<w;v++)d+=g[v]*T[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function b3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C3(t,e,n){const i=new WeakMap,r=new Xt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;m!==void 0&&m.texture.dispose();const w=a.morphAttributes.position!==void 0,T=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;w===!0&&(E=1),T===!0&&(E=2),x===!0&&(E=3);let P=a.attributes.position.count*E,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*I*4*p),U=new Cx(D,P,I,p);U.type=wr,U.needsUpdate=!0;const A=E*4;for(let k=0;k<p;k++){const q=d[k],re=v[k],ce=y[k],fe=P*I*4*k;for(let X=0;X<q.count;X++){const ee=X*A;w===!0&&(r.fromBufferAttribute(q,X),D[fe+ee+0]=r.x,D[fe+ee+1]=r.y,D[fe+ee+2]=r.z,D[fe+ee+3]=0),T===!0&&(r.fromBufferAttribute(re,X),D[fe+ee+4]=r.x,D[fe+ee+5]=r.y,D[fe+ee+6]=r.z,D[fe+ee+7]=0),x===!0&&(r.fromBufferAttribute(ce,X),D[fe+ee+8]=r.x,D[fe+ee+9]=r.y,D[fe+ee+10]=r.z,D[fe+ee+11]=ce.itemSize===4?r.w:1)}}m={count:p,texture:U,size:new Qe(P,I)},i.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let w=0;for(let x=0;x<c.length;x++)w+=c[x];const T=a.morphTargetsRelative?1:1-w;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function R3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Vx=new ti,L1=new Ux(1,1),Gx=new Cx,Wx=new Hw,Xx=new Nx,D1=[],N1=[],U1=new Float32Array(16),F1=new Float32Array(9),k1=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=D1[r];if(s===void 0&&(s=new Float32Array(r),D1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uu(t,e){let n=N1[e];n===void 0&&(n=new Int32Array(e),N1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function I3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),bn(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),bn(n,e)}}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),bn(n,e)}}function N3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;k1.set(i),t.uniformMatrix2fv(this.addr,!1,k1),bn(n,i)}}function U3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;F1.set(i),t.uniformMatrix3fv(this.addr,!1,F1),bn(n,i)}}function F3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;U1.set(i),t.uniformMatrix4fv(this.addr,!1,U1),bn(n,i)}}function k3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),bn(n,e)}}function z3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),bn(n,e)}}function B3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),bn(n,e)}}function H3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function V3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),bn(n,e)}}function G3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),bn(n,e)}}function W3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),bn(n,e)}}function X3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(L1.compareFunction=Ax,s=L1):s=Vx,n.setTexture2D(e||s,r)}function j3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wx,r)}function q3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xx,r)}function Y3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gx,r)}function $3(t){switch(t){case 5126:return P3;case 35664:return I3;case 35665:return L3;case 35666:return D3;case 35674:return N3;case 35675:return U3;case 35676:return F3;case 5124:case 35670:return k3;case 35667:case 35671:return O3;case 35668:case 35672:return z3;case 35669:case 35673:return B3;case 5125:return H3;case 36294:return V3;case 36295:return G3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return Y3}}function K3(t,e){t.uniform1fv(this.addr,e)}function Z3(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function J3(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function Q3(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function e5(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function t5(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function n5(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function i5(t,e){t.uniform1iv(this.addr,e)}function r5(t,e){t.uniform2iv(this.addr,e)}function s5(t,e){t.uniform3iv(this.addr,e)}function o5(t,e){t.uniform4iv(this.addr,e)}function a5(t,e){t.uniform1uiv(this.addr,e)}function l5(t,e){t.uniform2uiv(this.addr,e)}function c5(t,e){t.uniform3uiv(this.addr,e)}function u5(t,e){t.uniform4uiv(this.addr,e)}function d5(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Vx,s[o])}function f5(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Wx,s[o])}function h5(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Xx,s[o])}function p5(t,e,n){const i=this.cache,r=e.length,s=Uu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Gx,s[o])}function m5(t){switch(t){case 5126:return K3;case 35664:return Z3;case 35665:return J3;case 35666:return Q3;case 35674:return e5;case 35675:return t5;case 35676:return n5;case 5124:case 35670:return i5;case 35667:case 35671:return r5;case 35668:case 35672:return s5;case 35669:case 35673:return o5;case 5125:return a5;case 36294:return l5;case 36295:return c5;case 36296:return u5;case 35678:case 36198:case 36298:case 36306:case 35682:return d5;case 35679:case 36299:case 36307:return f5;case 35680:case 36300:case 36308:case 36293:return h5;case 36289:case 36303:case 36311:case 36292:return p5}}class g5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$3(n.type)}}class v5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=m5(n.type)}}class _5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function O1(t,e){t.seq.push(e),t.map[e.id]=e}function x5(t,e,n){const i=t.name,r=i.length;for(If.lastIndex=0;;){const s=If.exec(i),o=If.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){O1(n,c===void 0?new g5(a,t,e):new v5(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new _5(a),O1(n,p)),n=p}}}class Bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);x5(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function z1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const y5=37297;let M5=0;function w5(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const B1=new xt;function S5(t){Dt._getMatrix(B1,Dt.workingColorSpace,t);const e=`mat3( ${B1.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case fu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function H1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+w5(t.getShaderSource(e),a)}else return s}function E5(t,e){const n=S5(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function T5(t,e){let n;switch(e){case gw:n="Linear";break;case vw:n="Reinhard";break;case _w:n="Cineon";break;case gx:n="ACESFilmic";break;case yw:n="AgX";break;case Mw:n="Neutral";break;case xw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wc=new W;function A5(){Dt.getLuminanceCoefficients(wc);const t=wc.x.toFixed(4),e=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b5(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function C5(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R5(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Na(t){return t!==""}function V1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P5=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(t){return t.replace(P5,L5)}const I5=new Map;function L5(t,e){let n=Mt[e];if(n===void 0){const i=I5.get(e);if(i!==void 0)n=Mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _p(n)}const D5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W1(t){return t.replace(D5,N5)}function N5(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function X1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function U5(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function F5(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Yo:case $o:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k5(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function O5(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case pm:e="ENVMAP_BLENDING_MULTIPLY";break;case pw:e="ENVMAP_BLENDING_MIX";break;case mw:e="ENVMAP_BLENDING_ADD";break}return e}function z5(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function B5(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=U5(n),c=F5(n),h=k5(n),p=O5(n),m=z5(n),g=b5(n),w=C5(s),T=r.createProgram();let x,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Na).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Na).join(`
`),d.length>0&&(d+=`
`)):(x=[X1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),d=[X1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==os?"#define TONE_MAPPING":"",n.toneMapping!==os?Mt.tonemapping_pars_fragment:"",n.toneMapping!==os?T5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,E5("linearToOutputTexel",n.outputColorSpace),A5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Na).join(`
`)),o=_p(o),o=V1(o,n),o=G1(o,n),a=_p(a),a=V1(a,n),a=G1(a,n),o=W1(o),a=W1(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+x+o,E=v+d+a,P=z1(r,r.VERTEX_SHADER,y),I=z1(r,r.FRAGMENT_SHADER,E);r.attachShader(T,P),r.attachShader(T,I),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function D(k){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(T)||"",re=r.getShaderInfoLog(P)||"",ce=r.getShaderInfoLog(I)||"",fe=q.trim(),X=re.trim(),ee=ce.trim();let H=!0,oe=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,P,I);else{const ue=H1(r,P,"vertex"),Ce=H1(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+ue+`
`+Ce)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(X===""||ee==="")&&(oe=!1);oe&&(k.diagnostics={runnable:H,programLog:fe,vertexShader:{log:X,prefix:x},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(P),r.deleteShader(I),U=new Bc(r,T),A=R5(r,T)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(T,y5)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=M5++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let H5=0;class V5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new G5(e),n.set(e,i)),i}}class G5{constructor(e){this.id=H5++,this.code=e,this.usedTimes=0}}function W5(t,e,n,i,r,s,o){const a=new Em,l=new V5,c=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return c.add(A),A===0?"uv":`uv${A}`}function x(A,M,k,q,re){const ce=q.fog,fe=re.geometry,X=A.isMeshStandardMaterial?q.environment:null,ee=(A.isMeshStandardMaterial?n:e).get(A.envMap||X),H=ee&&ee.mapping===Du?ee.image.height:null,oe=w[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ce=ue!==void 0?ue.length:0;let Oe=0;fe.morphAttributes.position!==void 0&&(Oe=1),fe.morphAttributes.normal!==void 0&&(Oe=2),fe.morphAttributes.color!==void 0&&(Oe=3);let yt,ht,Ie,pe;if(oe){const ot=nr[oe];yt=ot.vertexShader,ht=ot.fragmentShader}else yt=A.vertexShader,ht=A.fragmentShader,l.update(A),Ie=l.getVertexShaderID(A),pe=l.getFragmentShaderID(A);const ve=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),nt=re.isInstancedMesh===!0,ze=re.isBatchedMesh===!0,pt=!!A.map,rn=!!A.matcap,V=!!ee,zt=!!A.aoMap,ct=!!A.lightMap,rt=!!A.bumpMap,j=!!A.normalMap,ge=!!A.displacementMap,Z=!!A.emissiveMap,G=!!A.metalnessMap,Xe=!!A.roughnessMap,Ye=A.anisotropy>0,N=A.clearcoat>0,b=A.dispersion>0,ie=A.iridescence>0,he=A.sheen>0,xe=A.transmission>0,de=Ye&&!!A.anisotropyMap,Ue=N&&!!A.clearcoatMap,ye=N&&!!A.clearcoatNormalMap,De=N&&!!A.clearcoatRoughnessMap,$e=ie&&!!A.iridescenceMap,Ae=ie&&!!A.iridescenceThicknessMap,Fe=he&&!!A.sheenColorMap,st=he&&!!A.sheenRoughnessMap,Ke=!!A.specularMap,Pe=!!A.specularColorMap,dt=!!A.specularIntensityMap,K=xe&&!!A.transmissionMap,Te=xe&&!!A.thicknessMap,Le=!!A.gradientMap,Ge=!!A.alphaMap,we=A.alphaTest>0,me=!!A.alphaHash,je=!!A.extensions;let at=os;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(at=t.toneMapping);const wt={shaderID:oe,shaderType:A.type,shaderName:A.name,vertexShader:yt,fragmentShader:ht,defines:A.defines,customVertexShaderID:Ie,customFragmentShaderID:pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:ze,batchingColor:ze&&re._colorsTexture!==null,instancing:nt,instancingColor:nt&&re.instanceColor!==null,instancingMorph:nt&&re.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ko,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:rn,envMap:V,envMapMode:V&&ee.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:ct,bumpMap:rt,normalMap:j,displacementMap:m&&ge,emissiveMap:Z,normalMapObjectSpace:j&&A.normalMapType===Tw,normalMapTangentSpace:j&&A.normalMapType===Mm,metalnessMap:G,roughnessMap:Xe,anisotropy:Ye,anisotropyMap:de,clearcoat:N,clearcoatMap:Ue,clearcoatNormalMap:ye,clearcoatRoughnessMap:De,dispersion:b,iridescence:ie,iridescenceMap:$e,iridescenceThicknessMap:Ae,sheen:he,sheenColorMap:Fe,sheenRoughnessMap:st,specularMap:Ke,specularColorMap:Pe,specularIntensityMap:dt,transmission:xe,transmissionMap:K,thicknessMap:Te,gradientMap:Le,opaque:A.transparent===!1&&A.blending===Oo&&A.alphaToCoverage===!1,alphaMap:Ge,alphaTest:we,alphaHash:me,combine:A.combine,mapUv:pt&&T(A.map.channel),aoMapUv:zt&&T(A.aoMap.channel),lightMapUv:ct&&T(A.lightMap.channel),bumpMapUv:rt&&T(A.bumpMap.channel),normalMapUv:j&&T(A.normalMap.channel),displacementMapUv:ge&&T(A.displacementMap.channel),emissiveMapUv:Z&&T(A.emissiveMap.channel),metalnessMapUv:G&&T(A.metalnessMap.channel),roughnessMapUv:Xe&&T(A.roughnessMap.channel),anisotropyMapUv:de&&T(A.anisotropyMap.channel),clearcoatMapUv:Ue&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:ye&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:st&&T(A.sheenRoughnessMap.channel),specularMapUv:Ke&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:dt&&T(A.specularIntensityMap.channel),transmissionMapUv:K&&T(A.transmissionMap.channel),thicknessMapUv:Te&&T(A.thicknessMap.channel),alphaMapUv:Ge&&T(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(j||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!fe.attributes.uv&&(pt||Ge),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:re.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Wt,decodeVideoTextureEmissive:Z&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Gt,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:je&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&A.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function d(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)M.push(k),M.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(v(M,A),y(M,A),M.push(t.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function v(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function y(A,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),A.push(a.mask)}function E(A){const M=w[A.type];let k;if(M){const q=nr[M];k=eS.clone(q.uniforms)}else k=A.uniforms;return k}function P(A,M){let k;for(let q=0,re=h.length;q<re;q++){const ce=h[q];if(ce.cacheKey===M){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new B5(t,M,A,s),h.push(k)),k}function I(A){if(--A.usedTimes===0){const M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function D(A){l.remove(A)}function U(){l.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:h,dispose:U}}function X5(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function j5(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function j1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function q1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,g,w,T,x){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:g,groupOrder:w,renderOrder:p.renderOrder,z:T,group:x},t[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=g,d.groupOrder=w,d.renderOrder=p.renderOrder,d.z=T,d.group=x),e++,d}function a(p,m,g,w,T,x){const d=o(p,m,g,w,T,x);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,m,g,w,T,x){const d=o(p,m,g,w,T,x);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,m){n.length>1&&n.sort(p||j5),i.length>1&&i.sort(m||j1),r.length>1&&r.sort(m||j1)}function h(){for(let p=e,m=t.length;p<m;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function q5(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new q1,t.set(i,[o])):r>=s.length?(o=new q1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Y5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Et};break;case"SpotLight":n={position:new W,direction:new W,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function $5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let K5=0;function Z5(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function J5(t){const e=new Y5,n=$5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Qt,o=new Qt;function a(c){let h=0,p=0,m=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,w=0,T=0,x=0,d=0,v=0,y=0,E=0,P=0,I=0,D=0;c.sort(Z5);for(let A=0,M=c.length;A<M;A++){const k=c[A],q=k.color,re=k.intensity,ce=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=q.r*re,p+=q.g*re,m+=q.b*re;else if(k.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],re);D++}else if(k.isDirectionalLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ee=k.shadow,H=n.get(k);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=k.shadow.matrix,v++}i.directional[g]=X,g++}else if(k.isSpotLight){const X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(q).multiplyScalar(re),X.distance=ce,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[T]=X;const ee=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,ee.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[T]=ee.matrix,k.castShadow){const H=n.get(k);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.spotShadow[T]=H,i.spotShadowMap[T]=fe,E++}T++}else if(k.isRectAreaLight){const X=e.get(k);X.color.copy(q).multiplyScalar(re),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=X,x++}else if(k.isPointLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){const ee=k.shadow,H=n.get(k);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,i.pointShadow[w]=H,i.pointShadowMap[w]=fe,i.pointShadowMatrix[w]=k.shadow.matrix,y++}i.point[w]=X,w++}else if(k.isHemisphereLight){const X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(re),X.groundColor.copy(k.groundColor).multiplyScalar(re),i.hemi[d]=X,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==g||U.pointLength!==w||U.spotLength!==T||U.rectAreaLength!==x||U.hemiLength!==d||U.numDirectionalShadows!==v||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==P||U.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=T,i.rectArea.length=x,i.point.length=w,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,U.directionalLength=g,U.pointLength=w,U.spotLength=T,U.rectAreaLength=x,U.hemiLength=d,U.numDirectionalShadows=v,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=P,U.numLightProbes=D,i.version=K5++)}function l(c,h){let p=0,m=0,g=0,w=0,T=0;const x=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),p++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const E=i.rectArea[w];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),w++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const E=i.hemi[T];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(x),T++}}}return{setup:a,setupView:l,state:i}}function Y1(t){const e=new J5(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Q5(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Y1(t),e.set(r,[a])):s>=o.length?(a=new Y1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`;function nA(t,e,n){let i=new Am;const r=new Qe,s=new Qe,o=new Xt,a=new TS({depthPacking:Ew}),l=new AS,c={},h=n.maxTextureSize,p={[cs]:hi,[hi]:cs,[Gt]:Gt},m=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:eA,fragmentShader:tA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const w=new gn;w.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new z(w,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=px;let d=this.type;this.render=function(I,D,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const A=t.getRenderTarget(),M=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),q=t.state;q.setBlending(ss),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=d!==vr&&this.type===vr,ce=d===vr&&this.type!==vr;for(let fe=0,X=I.length;fe<X;fe++){const ee=I[fe],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||re===!0||ce===!0){const Ce=this.type!==vr?{minFilter:Ki,magFilter:Ki}:{};H.map!==null&&H.map.dispose(),H.map=new Ys(r.x,r.y,Ce),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let Ce=0;Ce<ue;Ce++){const Oe=H.getViewport(Ce);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),q.viewport(o),H.updateMatrices(ee,Ce),i=H.getFrustum(),E(D,U,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===vr&&v(H,U),H.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(A,M,k)};function v(I,D){const U=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ys(r.x,r.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(D,null,U,m,T,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(D,null,U,g,T,null)}function y(I,D,U,A){let M=null;const k=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)M=k;else if(M=U.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const q=M.uuid,re=D.uuid;let ce=c[q];ce===void 0&&(ce={},c[q]=ce);let fe=ce[re];fe===void 0&&(fe=M.clone(),ce[re]=fe,D.addEventListener("dispose",P)),M=fe}if(M.visible=D.visible,M.wireframe=D.wireframe,A===vr?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:p[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=U}return M}function E(I,D,U,A,M){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===vr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const re=e.update(I),ce=I.material;if(Array.isArray(ce)){const fe=re.groups;for(let X=0,ee=fe.length;X<ee;X++){const H=fe[X],oe=ce[H.materialIndex];if(oe&&oe.visible){const ue=y(I,oe,A,M);I.onBeforeShadow(t,I,D,U,re,ue,H),t.renderBufferDirect(U,null,re,ue,I,H),I.onAfterShadow(t,I,D,U,re,ue,H)}}}else if(ce.visible){const fe=y(I,ce,A,M);I.onBeforeShadow(t,I,D,U,re,fe,null),t.renderBufferDirect(U,null,re,fe,I,null),I.onAfterShadow(t,I,D,U,re,fe,null)}}const q=I.children;for(let re=0,ce=q.length;re<ce;re++)E(q[re],D,U,A,M)}function P(I){I.target.removeEventListener("dispose",P);for(const U in c){const A=c[U],M=I.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const iA={[Ph]:Ih,[Lh]:Uh,[Dh]:Fh,[qo]:Nh,[Ih]:Ph,[Uh]:Lh,[Fh]:Dh,[Nh]:qo};function rA(t,e){function n(){let K=!1;const Te=new Xt;let Le=null;const Ge=new Xt(0,0,0,0);return{setMask:function(we){Le!==we&&!K&&(t.colorMask(we,we,we,we),Le=we)},setLocked:function(we){K=we},setClear:function(we,me,je,at,wt){wt===!0&&(we*=at,me*=at,je*=at),Te.set(we,me,je,at),Ge.equals(Te)===!1&&(t.clearColor(we,me,je,at),Ge.copy(Te))},reset:function(){K=!1,Le=null,Ge.set(-1,0,0,0)}}}function i(){let K=!1,Te=!1,Le=null,Ge=null,we=null;return{setReversed:function(me){if(Te!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=me;const at=we;we=null,this.setClear(at)}},getReversed:function(){return Te},setTest:function(me){me?ve(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(me){Le!==me&&!K&&(t.depthMask(me),Le=me)},setFunc:function(me){if(Te&&(me=iA[me]),Ge!==me){switch(me){case Ph:t.depthFunc(t.NEVER);break;case Ih:t.depthFunc(t.ALWAYS);break;case Lh:t.depthFunc(t.LESS);break;case qo:t.depthFunc(t.LEQUAL);break;case Dh:t.depthFunc(t.EQUAL);break;case Nh:t.depthFunc(t.GEQUAL);break;case Uh:t.depthFunc(t.GREATER);break;case Fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ge=me}},setLocked:function(me){K=me},setClear:function(me){we!==me&&(Te&&(me=1-me),t.clearDepth(me),we=me)},reset:function(){K=!1,Le=null,Ge=null,we=null,Te=!1}}}function r(){let K=!1,Te=null,Le=null,Ge=null,we=null,me=null,je=null,at=null,wt=null;return{setTest:function(ot){K||(ot?ve(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ot){Te!==ot&&!K&&(t.stencilMask(ot),Te=ot)},setFunc:function(ot,Ai,ri){(Le!==ot||Ge!==Ai||we!==ri)&&(t.stencilFunc(ot,Ai,ri),Le=ot,Ge=Ai,we=ri)},setOp:function(ot,Ai,ri){(me!==ot||je!==Ai||at!==ri)&&(t.stencilOp(ot,Ai,ri),me=ot,je=Ai,at=ri)},setLocked:function(ot){K=ot},setClear:function(ot){wt!==ot&&(t.clearStencil(ot),wt=ot)},reset:function(){K=!1,Te=null,Le=null,Ge=null,we=null,me=null,je=null,at=null,wt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},m=new WeakMap,g=[],w=null,T=!1,x=null,d=null,v=null,y=null,E=null,P=null,I=null,D=new Et(0,0,0),U=0,A=!1,M=null,k=null,q=null,re=null,ce=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=ee>=2);let oe=null,ue={};const Ce=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),yt=new Xt().fromArray(Ce),ht=new Xt().fromArray(Oe);function Ie(K,Te,Le,Ge){const we=new Uint8Array(4),me=t.createTexture();t.bindTexture(K,me),t.texParameteri(K,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(K,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<Le;je++)K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,Ge,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(Te+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return me}const pe={};pe[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),o.setFunc(qo),rt(!1),j(Xg),ve(t.CULL_FACE),zt(ss);function ve(K){h[K]!==!0&&(t.enable(K),h[K]=!0)}function Me(K){h[K]!==!1&&(t.disable(K),h[K]=!1)}function nt(K,Te){return p[K]!==Te?(t.bindFramebuffer(K,Te),p[K]=Te,K===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Te),K===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function ze(K,Te){let Le=g,Ge=!1;if(K){Le=m.get(Te),Le===void 0&&(Le=[],m.set(Te,Le));const we=K.textures;if(Le.length!==we.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let me=0,je=we.length;me<je;me++)Le[me]=t.COLOR_ATTACHMENT0+me;Le.length=we.length,Ge=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,Ge=!0);Ge&&t.drawBuffers(Le)}function pt(K){return w!==K?(t.useProgram(K),w=K,!0):!1}const rn={[Ds]:t.FUNC_ADD,[ZM]:t.FUNC_SUBTRACT,[JM]:t.FUNC_REVERSE_SUBTRACT};rn[QM]=t.MIN,rn[ew]=t.MAX;const V={[tw]:t.ZERO,[nw]:t.ONE,[iw]:t.SRC_COLOR,[Ch]:t.SRC_ALPHA,[cw]:t.SRC_ALPHA_SATURATE,[aw]:t.DST_COLOR,[sw]:t.DST_ALPHA,[rw]:t.ONE_MINUS_SRC_COLOR,[Rh]:t.ONE_MINUS_SRC_ALPHA,[lw]:t.ONE_MINUS_DST_COLOR,[ow]:t.ONE_MINUS_DST_ALPHA,[uw]:t.CONSTANT_COLOR,[dw]:t.ONE_MINUS_CONSTANT_COLOR,[fw]:t.CONSTANT_ALPHA,[hw]:t.ONE_MINUS_CONSTANT_ALPHA};function zt(K,Te,Le,Ge,we,me,je,at,wt,ot){if(K===ss){T===!0&&(Me(t.BLEND),T=!1);return}if(T===!1&&(ve(t.BLEND),T=!0),K!==KM){if(K!==x||ot!==A){if((d!==Ds||E!==Ds)&&(t.blendEquation(t.FUNC_ADD),d=Ds,E=Ds),ot)switch(K){case Oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case du:t.blendFunc(t.ONE,t.ONE);break;case jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case du:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,y=null,P=null,I=null,D.set(0,0,0),U=0,x=K,A=ot}return}we=we||Te,me=me||Le,je=je||Ge,(Te!==d||we!==E)&&(t.blendEquationSeparate(rn[Te],rn[we]),d=Te,E=we),(Le!==v||Ge!==y||me!==P||je!==I)&&(t.blendFuncSeparate(V[Le],V[Ge],V[me],V[je]),v=Le,y=Ge,P=me,I=je),(at.equals(D)===!1||wt!==U)&&(t.blendColor(at.r,at.g,at.b,wt),D.copy(at),U=wt),x=K,A=!1}function ct(K,Te){K.side===Gt?Me(t.CULL_FACE):ve(t.CULL_FACE);let Le=K.side===hi;Te&&(Le=!Le),rt(Le),K.blending===Oo&&K.transparent===!1?zt(ss):zt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),s.setMask(K.colorWrite);const Ge=K.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Z(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(K){M!==K&&(K?t.frontFace(t.CW):t.frontFace(t.CCW),M=K)}function j(K){K!==YM?(ve(t.CULL_FACE),K!==k&&(K===Xg?t.cullFace(t.BACK):K===$M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),k=K}function ge(K){K!==q&&(X&&t.lineWidth(K),q=K)}function Z(K,Te,Le){K?(ve(t.POLYGON_OFFSET_FILL),(re!==Te||ce!==Le)&&(t.polygonOffset(Te,Le),re=Te,ce=Le)):Me(t.POLYGON_OFFSET_FILL)}function G(K){K?ve(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Xe(K){K===void 0&&(K=t.TEXTURE0+fe-1),oe!==K&&(t.activeTexture(K),oe=K)}function Ye(K,Te,Le){Le===void 0&&(oe===null?Le=t.TEXTURE0+fe-1:Le=oe);let Ge=ue[Le];Ge===void 0&&(Ge={type:void 0,texture:void 0},ue[Le]=Ge),(Ge.type!==K||Ge.texture!==Te)&&(oe!==Le&&(t.activeTexture(Le),oe=Le),t.bindTexture(K,Te||pe[K]),Ge.type=K,Ge.texture=Te)}function N(){const K=ue[oe];K!==void 0&&K.type!==void 0&&(t.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ie(){try{t.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function he(){try{t.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xe(){try{t.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{t.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function De(){try{t.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $e(){try{t.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{t.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Fe(K){yt.equals(K)===!1&&(t.scissor(K.x,K.y,K.z,K.w),yt.copy(K))}function st(K){ht.equals(K)===!1&&(t.viewport(K.x,K.y,K.z,K.w),ht.copy(K))}function Ke(K,Te){let Le=c.get(Te);Le===void 0&&(Le=new WeakMap,c.set(Te,Le));let Ge=Le.get(K);Ge===void 0&&(Ge=t.getUniformBlockIndex(Te,K.name),Le.set(K,Ge))}function Pe(K,Te){const Ge=c.get(Te).get(K);l.get(Te)!==Ge&&(t.uniformBlockBinding(Te,Ge,K.__bindingPointIndex),l.set(Te,Ge))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},oe=null,ue={},p={},m=new WeakMap,g=[],w=null,T=!1,x=null,d=null,v=null,y=null,E=null,P=null,I=null,D=new Et(0,0,0),U=0,A=!1,M=null,k=null,q=null,re=null,ce=null,yt.set(0,0,t.canvas.width,t.canvas.height),ht.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Me,bindFramebuffer:nt,drawBuffers:ze,useProgram:pt,setBlending:zt,setMaterial:ct,setFlipSided:rt,setCullFace:j,setLineWidth:ge,setPolygonOffset:Z,setScissorTest:G,activeTexture:Xe,bindTexture:Ye,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:ie,texImage2D:$e,texImage3D:Ae,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:De,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ue,scissor:Fe,viewport:st,reset:dt}}function sA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,b){return g?new OffscreenCanvas(N,b):pu("canvas")}function T(N,b,ie){let he=1;const xe=Ye(N);if((xe.width>ie||xe.height>ie)&&(he=ie/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(he*xe.width),Ue=Math.floor(he*xe.height);p===void 0&&(p=w(de,Ue));const ye=b?w(de,Ue):p;return ye.width=de,ye.height=Ue,ye.getContext("2d").drawImage(N,0,0,de,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ue+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function x(N){return N.generateMipmaps}function d(N){t.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,b,ie,he,xe=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=b;if(b===t.RED&&(ie===t.FLOAT&&(de=t.R32F),ie===t.HALF_FLOAT&&(de=t.R16F),ie===t.UNSIGNED_BYTE&&(de=t.R8)),b===t.RED_INTEGER&&(ie===t.UNSIGNED_BYTE&&(de=t.R8UI),ie===t.UNSIGNED_SHORT&&(de=t.R16UI),ie===t.UNSIGNED_INT&&(de=t.R32UI),ie===t.BYTE&&(de=t.R8I),ie===t.SHORT&&(de=t.R16I),ie===t.INT&&(de=t.R32I)),b===t.RG&&(ie===t.FLOAT&&(de=t.RG32F),ie===t.HALF_FLOAT&&(de=t.RG16F),ie===t.UNSIGNED_BYTE&&(de=t.RG8)),b===t.RG_INTEGER&&(ie===t.UNSIGNED_BYTE&&(de=t.RG8UI),ie===t.UNSIGNED_SHORT&&(de=t.RG16UI),ie===t.UNSIGNED_INT&&(de=t.RG32UI),ie===t.BYTE&&(de=t.RG8I),ie===t.SHORT&&(de=t.RG16I),ie===t.INT&&(de=t.RG32I)),b===t.RGB_INTEGER&&(ie===t.UNSIGNED_BYTE&&(de=t.RGB8UI),ie===t.UNSIGNED_SHORT&&(de=t.RGB16UI),ie===t.UNSIGNED_INT&&(de=t.RGB32UI),ie===t.BYTE&&(de=t.RGB8I),ie===t.SHORT&&(de=t.RGB16I),ie===t.INT&&(de=t.RGB32I)),b===t.RGBA_INTEGER&&(ie===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),ie===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),ie===t.UNSIGNED_INT&&(de=t.RGBA32UI),ie===t.BYTE&&(de=t.RGBA8I),ie===t.SHORT&&(de=t.RGBA16I),ie===t.INT&&(de=t.RGBA32I)),b===t.RGB&&(ie===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),ie===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),b===t.RGBA){const Ue=xe?fu:Dt.getTransfer(he);ie===t.FLOAT&&(de=t.RGBA32F),ie===t.HALF_FLOAT&&(de=t.RGBA16F),ie===t.UNSIGNED_BYTE&&(de=Ue===Wt?t.SRGB8_ALPHA8:t.RGBA8),ie===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),ie===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function E(N,b){let ie;return N?b===null||b===qs||b===dl?ie=t.DEPTH24_STENCIL8:b===wr?ie=t.DEPTH32F_STENCIL8:b===ul&&(ie=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qs||b===dl?ie=t.DEPTH_COMPONENT24:b===wr?ie=t.DEPTH_COMPONENT32F:b===ul&&(ie=t.DEPTH_COMPONENT16),ie}function P(N,b){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ki&&N.minFilter!==rr?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function I(N){const b=N.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&h.delete(b)}function D(N){const b=N.target;b.removeEventListener("dispose",D),M(b)}function U(N){const b=i.get(N);if(b.__webglInit===void 0)return;const ie=N.source,he=m.get(ie);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&A(N),Object.keys(he).length===0&&m.delete(ie)}i.remove(N)}function A(N){const b=i.get(N);t.deleteTexture(b.__webglTexture);const ie=N.source,he=m.get(ie);delete he[b.__cacheKey],o.memory.textures--}function M(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)t.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else t.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)t.deleteFramebuffer(b.__webglFramebuffer[he]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=N.textures;for(let he=0,xe=ie.length;he<xe;he++){const de=i.get(ie[he]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(ie[he])}i.remove(N)}let k=0;function q(){k=0}function re(){const N=k;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),k+=1,N}function ce(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function fe(N,b){const ie=i.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ie.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ie,N,b);return}}else N.isExternalTexture&&(ie.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture,t.TEXTURE0+b)}function X(N,b){const ie=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){pe(ie,N,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ie.__webglTexture,t.TEXTURE0+b)}function ee(N,b){const ie=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){pe(ie,N,b);return}n.bindTexture(t.TEXTURE_3D,ie.__webglTexture,t.TEXTURE0+b)}function H(N,b){const ie=i.get(N);if(N.version>0&&ie.__version!==N.version){ve(ie,N,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture,t.TEXTURE0+b)}const oe={[qr]:t.REPEAT,[Os]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},ue={[Ki]:t.NEAREST,[ww]:t.NEAREST_MIPMAP_NEAREST,[Ql]:t.NEAREST_MIPMAP_LINEAR,[rr]:t.LINEAR,[qd]:t.LINEAR_MIPMAP_NEAREST,[zs]:t.LINEAR_MIPMAP_LINEAR},Ce={[Aw]:t.NEVER,[Lw]:t.ALWAYS,[bw]:t.LESS,[Ax]:t.LEQUAL,[Cw]:t.EQUAL,[Iw]:t.GEQUAL,[Rw]:t.GREATER,[Pw]:t.NOTEQUAL};function Oe(N,b){if(b.type===wr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rr||b.magFilter===qd||b.magFilter===Ql||b.magFilter===zs||b.minFilter===rr||b.minFilter===qd||b.minFilter===Ql||b.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,oe[b.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,oe[b.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,oe[b.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ue[b.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ki||b.minFilter!==Ql&&b.minFilter!==zs||b.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const he=b.source;let xe=m.get(he);xe===void 0&&(xe={},m.set(he,xe));const de=ce(b);if(de!==N.__cacheKey){xe[de]===void 0&&(xe[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),xe[de].usedTimes++;const Ue=xe[N.__cacheKey];Ue!==void 0&&(xe[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(b)),N.__cacheKey=de,N.__webglTexture=xe[de].texture}return ie}function ht(N,b,ie){return Math.floor(Math.floor(N/ie)/b)}function Ie(N,b,ie,he){const de=N.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,ie,he,b.data);else{de.sort((Ae,Fe)=>Ae.start-Fe.start);let Ue=0;for(let Ae=1;Ae<de.length;Ae++){const Fe=de[Ue],st=de[Ae],Ke=Fe.start+Fe.count,Pe=ht(st.start,b.width,4),dt=ht(Fe.start,b.width,4);st.start<=Ke+1&&Pe===dt&&ht(st.start+st.count-1,b.width,4)===Pe?Fe.count=Math.max(Fe.count,st.start+st.count-Fe.start):(++Ue,de[Ue]=st)}de.length=Ue+1;const ye=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),$e=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Fe=de.length;Ae<Fe;Ae++){const st=de[Ae],Ke=Math.floor(st.start/4),Pe=Math.ceil(st.count/4),dt=Ke%b.width,K=Math.floor(Ke/b.width),Te=Pe,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(t.UNPACK_SKIP_ROWS,K),n.texSubImage2D(t.TEXTURE_2D,0,dt,K,Te,Le,ie,he,b.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ye),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,$e)}}function pe(N,b,ie){let he=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=t.TEXTURE_3D);const xe=yt(N,b),de=b.source;n.bindTexture(he,N.__webglTexture,t.TEXTURE0+ie);const Ue=i.get(de);if(de.version!==Ue.__version||xe===!0){n.activeTexture(t.TEXTURE0+ie);const ye=Dt.getPrimaries(Dt.workingColorSpace),De=b.colorSpace===Yr?null:Dt.getPrimaries(b.colorSpace),$e=b.colorSpace===Yr||ye===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=T(b.image,!1,r.maxTextureSize);Ae=Xe(b,Ae);const Fe=s.convert(b.format,b.colorSpace),st=s.convert(b.type);let Ke=y(b.internalFormat,Fe,st,b.colorSpace,b.isVideoTexture);Oe(he,b);let Pe;const dt=b.mipmaps,K=b.isVideoTexture!==!0,Te=Ue.__version===void 0||xe===!0,Le=de.dataReady,Ge=P(b,Ae);if(b.isDepthTexture)Ke=E(b.format===hl,b.type),Te&&(K?n.texStorage2D(t.TEXTURE_2D,1,Ke,Ae.width,Ae.height):n.texImage2D(t.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Fe,st,null));else if(b.isDataTexture)if(dt.length>0){K&&Te&&n.texStorage2D(t.TEXTURE_2D,Ge,Ke,dt[0].width,dt[0].height);for(let we=0,me=dt.length;we<me;we++)Pe=dt[we],K?Le&&n.texSubImage2D(t.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Fe,st,Pe.data):n.texImage2D(t.TEXTURE_2D,we,Ke,Pe.width,Pe.height,0,Fe,st,Pe.data);b.generateMipmaps=!1}else K?(Te&&n.texStorage2D(t.TEXTURE_2D,Ge,Ke,Ae.width,Ae.height),Le&&Ie(b,Ae,Fe,st)):n.texImage2D(t.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Fe,st,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){K&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Ke,dt[0].width,dt[0].height,Ae.depth);for(let we=0,me=dt.length;we<me;we++)if(Pe=dt[we],b.format!==qi)if(Fe!==null)if(K){if(Le)if(b.layerUpdates.size>0){const je=E1(Pe.width,Pe.height,b.format,b.type);for(const at of b.layerUpdates){const wt=Pe.data.subarray(at*je/Pe.data.BYTES_PER_ELEMENT,(at+1)*je/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,we,0,0,at,Pe.width,Pe.height,1,Fe,wt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,we,0,0,0,Pe.width,Pe.height,Ae.depth,Fe,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,we,Ke,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,we,0,0,0,Pe.width,Pe.height,Ae.depth,Fe,st,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,we,Ke,Pe.width,Pe.height,Ae.depth,0,Fe,st,Pe.data)}else{K&&Te&&n.texStorage2D(t.TEXTURE_2D,Ge,Ke,dt[0].width,dt[0].height);for(let we=0,me=dt.length;we<me;we++)Pe=dt[we],b.format!==qi?Fe!==null?K?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Fe,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,we,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Le&&n.texSubImage2D(t.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Fe,st,Pe.data):n.texImage2D(t.TEXTURE_2D,we,Ke,Pe.width,Pe.height,0,Fe,st,Pe.data)}else if(b.isDataArrayTexture)if(K){if(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Ke,Ae.width,Ae.height,Ae.depth),Le)if(b.layerUpdates.size>0){const we=E1(Ae.width,Ae.height,b.format,b.type);for(const me of b.layerUpdates){const je=Ae.data.subarray(me*we/Ae.data.BYTES_PER_ELEMENT,(me+1)*we/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,Ae.width,Ae.height,1,Fe,st,je)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,st,Ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,Fe,st,Ae.data);else if(b.isData3DTexture)K?(Te&&n.texStorage3D(t.TEXTURE_3D,Ge,Ke,Ae.width,Ae.height,Ae.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,st,Ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,Fe,st,Ae.data);else if(b.isFramebufferTexture){if(Te)if(K)n.texStorage2D(t.TEXTURE_2D,Ge,Ke,Ae.width,Ae.height);else{let we=Ae.width,me=Ae.height;for(let je=0;je<Ge;je++)n.texImage2D(t.TEXTURE_2D,je,Ke,we,me,0,Fe,st,null),we>>=1,me>>=1}}else if(dt.length>0){if(K&&Te){const we=Ye(dt[0]);n.texStorage2D(t.TEXTURE_2D,Ge,Ke,we.width,we.height)}for(let we=0,me=dt.length;we<me;we++)Pe=dt[we],K?Le&&n.texSubImage2D(t.TEXTURE_2D,we,0,0,Fe,st,Pe):n.texImage2D(t.TEXTURE_2D,we,Ke,Fe,st,Pe);b.generateMipmaps=!1}else if(K){if(Te){const we=Ye(Ae);n.texStorage2D(t.TEXTURE_2D,Ge,Ke,we.width,we.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Fe,st,Ae)}else n.texImage2D(t.TEXTURE_2D,0,Ke,Fe,st,Ae);x(b)&&d(he),Ue.__version=de.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ve(N,b,ie){if(b.image.length!==6)return;const he=yt(N,b),xe=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+ie);const de=i.get(xe);if(xe.version!==de.__version||he===!0){n.activeTexture(t.TEXTURE0+ie);const Ue=Dt.getPrimaries(Dt.workingColorSpace),ye=b.colorSpace===Yr?null:Dt.getPrimaries(b.colorSpace),De=b.colorSpace===Yr||Ue===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!$e&&!Ae?Fe[me]=T(b.image[me],!0,r.maxCubemapSize):Fe[me]=Ae?b.image[me].image:b.image[me],Fe[me]=Xe(b,Fe[me]);const st=Fe[0],Ke=s.convert(b.format,b.colorSpace),Pe=s.convert(b.type),dt=y(b.internalFormat,Ke,Pe,b.colorSpace),K=b.isVideoTexture!==!0,Te=de.__version===void 0||he===!0,Le=xe.dataReady;let Ge=P(b,st);Oe(t.TEXTURE_CUBE_MAP,b);let we;if($e){K&&Te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,dt,st.width,st.height);for(let me=0;me<6;me++){we=Fe[me].mipmaps;for(let je=0;je<we.length;je++){const at=we[je];b.format!==qi?Ke!==null?K?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,at.width,at.height,Ke,at.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,dt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,at.width,at.height,Ke,Pe,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,dt,at.width,at.height,0,Ke,Pe,at.data)}}}else{if(we=b.mipmaps,K&&Te){we.length>0&&Ge++;const me=Ye(Fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ge,dt,me.width,me.height)}for(let me=0;me<6;me++)if(Ae){K?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,Ke,Pe,Fe[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Fe[me].width,Fe[me].height,0,Ke,Pe,Fe[me].data);for(let je=0;je<we.length;je++){const wt=we[je].image[me].image;K?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,wt.width,wt.height,Ke,Pe,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,dt,wt.width,wt.height,0,Ke,Pe,wt.data)}}else{K?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ke,Pe,Fe[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Ke,Pe,Fe[me]);for(let je=0;je<we.length;je++){const at=we[je];K?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Ke,Pe,at.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,dt,Ke,Pe,at.image[me])}}}x(b)&&d(t.TEXTURE_CUBE_MAP),de.__version=xe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Me(N,b,ie,he,xe,de){const Ue=s.convert(ie.format,ie.colorSpace),ye=s.convert(ie.type),De=y(ie.internalFormat,Ue,ye,ie.colorSpace),$e=i.get(b),Ae=i.get(ie);if(Ae.__renderTarget=b,!$e.__hasExternalTextures){const Fe=Math.max(1,b.width>>de),st=Math.max(1,b.height>>de);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,De,Fe,st,b.depth,0,Ue,ye,null):n.texImage2D(xe,de,De,Fe,st,0,Ue,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Z(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,xe,Ae.__webglTexture,0,ge(b)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,xe,Ae.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(N,b,ie){if(t.bindRenderbuffer(t.RENDERBUFFER,N),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,de=E(b.stencilBuffer,xe),Ue=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=ge(b);Z(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,de,b.width,b.height):ie?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,N)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const de=he[xe],Ue=s.convert(de.format,de.colorSpace),ye=s.convert(de.type),De=y(de.internalFormat,Ue,ye,de.colorSpace),$e=ge(b);ie&&Z(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,De,b.width,b.height):Z(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,De,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,De,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const xe=he.__webglTexture,de=ge(b);if(b.depthTexture.format===fl)Z(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(b.depthTexture.format===hl)Z(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function pt(N){const b=i.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const he=N.texture.mipmaps;he&&he.length>0?ze(b.__webglFramebuffer[0],N):ze(b.__webglFramebuffer,N)}else if(ie){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=t.createRenderbuffer(),nt(b.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),nt(b.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function rn(N,b,ie){const he=i.get(N);b!==void 0&&Me(he.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ie!==void 0&&pt(N)}function V(N){const b=N.texture,ie=i.get(N),he=i.get(b);N.addEventListener("dispose",D);const xe=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ue=xe.length>1;if(Ue||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=b.version,o.memory.textures++),de){ie.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[ye]=[];for(let De=0;De<b.mipmaps.length;De++)ie.__webglFramebuffer[ye][De]=t.createFramebuffer()}else ie.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)ie.__webglFramebuffer[ye]=t.createFramebuffer()}else ie.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let ye=0,De=xe.length;ye<De;ye++){const $e=i.get(xe[ye]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&Z(N)===!1){ie.__webglMultisampledFramebuffer=t.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){const De=xe[ye];ie.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]);const $e=s.convert(De.format,De.colorSpace),Ae=s.convert(De.type),Fe=y(De.internalFormat,$e,Ae,De.colorSpace,N.isXRRenderTarget===!0),st=ge(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,Fe,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(ie.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)Me(ie.__webglFramebuffer[ye][De],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De);else Me(ie.__webglFramebuffer[ye],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ye=0,De=xe.length;ye<De;ye++){const $e=xe[ye],Ae=i.get($e);let Fe=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Fe,Ae.__webglTexture),Oe(Fe,$e),Me(ie.__webglFramebuffer,N,$e,t.COLOR_ATTACHMENT0+ye,Fe,0),x($e)&&d(Fe)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,he.__webglTexture),Oe(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)Me(ie.__webglFramebuffer[De],N,b,t.COLOR_ATTACHMENT0,ye,De);else Me(ie.__webglFramebuffer,N,b,t.COLOR_ATTACHMENT0,ye,0);x(b)&&d(ye),n.unbindTexture()}N.depthBuffer&&pt(N)}function zt(N){const b=N.textures;for(let ie=0,he=b.length;ie<he;ie++){const xe=b[ie];if(x(xe)){const de=v(N),Ue=i.get(xe).__webglTexture;n.bindTexture(de,Ue),d(de),n.unbindTexture()}}}const ct=[],rt=[];function j(N){if(N.samples>0){if(Z(N)===!1){const b=N.textures,ie=N.width,he=N.height;let xe=t.COLOR_BUFFER_BIT;const de=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(N),ye=b.length>1;if(ye)for(let $e=0;$e<b.length;$e++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const De=N.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let $e=0;$e<b.length;$e++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[$e]);const Ae=i.get(b[$e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,ie,he,0,0,ie,he,xe,t.NEAREST),l===!0&&(ct.length=0,rt.length=0,ct.push(t.COLOR_ATTACHMENT0+$e),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ct.push(de),rt.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let $e=0;$e<b.length;$e++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[$e]);const Ae=i.get(b[$e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$e,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const b=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function ge(N){return Math.min(r.maxSamples,N.samples)}function Z(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function G(N){const b=o.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())}function Xe(N,b){const ie=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ie!==Ko&&ie!==Yr&&(Dt.getTransfer(ie)===Wt?(he!==qi||xe!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.setTexture2D=fe,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=rn,this.setupRenderTarget=V,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Z}function oA(t,e){function n(i,r=Yr){let s;const o=Dt.getTransfer(r);if(i===cr)return t.UNSIGNED_BYTE;if(i===gm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_x)return t.BYTE;if(i===xx)return t.SHORT;if(i===ul)return t.UNSIGNED_SHORT;if(i===mm)return t.INT;if(i===qs)return t.UNSIGNED_INT;if(i===wr)return t.FLOAT;if(i===yl)return t.HALF_FLOAT;if(i===wx)return t.ALPHA;if(i===Sx)return t.RGB;if(i===qi)return t.RGBA;if(i===fl)return t.DEPTH_COMPONENT;if(i===hl)return t.DEPTH_STENCIL;if(i===Ex)return t.RED;if(i===_m)return t.RED_INTEGER;if(i===Tx)return t.RG;if(i===xm)return t.RG_INTEGER;if(i===ym)return t.RGBA_INTEGER;if(i===Fc||i===kc||i===Oc||i===zc)if(o===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wh||i===Xh||i===jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wh||i===Xh)return o===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Jh||i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$h)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ep)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tp)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===np)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ip)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rp)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sp)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===op)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ap||i===lp||i===cp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ap)return o===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===dp||i===fp||i===hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===up)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new us({vertexShader:aA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new z(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends ta{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,g=null,w=null;const T=typeof XRWebGLBinding<"u",x=new cA,d={},v=n.getContextAttributes();let y=null,E=null;const P=[],I=[],D=new Qe;let U=null;const A=new yi;A.viewport=new Xt;const M=new yi;M.viewport=new Xt;const k=[A,M],q=new PS;let re=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let ve=P[pe];return ve===void 0&&(ve=new vf,P[pe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(pe){let ve=P[pe];return ve===void 0&&(ve=new vf,P[pe]=ve),ve.getGripSpace()},this.getHand=function(pe){let ve=P[pe];return ve===void 0&&(ve=new vf,P[pe]=ve),ve.getHandSpace()};function fe(pe){const ve=I.indexOf(pe.inputSource);if(ve===-1)return;const Me=P[ve];Me!==void 0&&(Me.update(pe.inputSource,pe.frame,c||o),Me.dispatchEvent({type:pe.type,data:pe.inputSource}))}function X(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ee);for(let pe=0;pe<P.length;pe++){const ve=I[pe];ve!==null&&(I[pe]=null,P[pe].disconnect(ve))}re=null,ce=null,x.reset();for(const pe in d)delete d[pe];e.setRenderTarget(y),g=null,m=null,p=null,r=null,E=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){s=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){a=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(pe){c=pe},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,nt=null,ze=null;v.depth&&(ze=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=v.stencil?hl:fl,nt=v.stencil?dl:qs);const pt={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(pt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ys(m.textureWidth,m.textureHeight,{format:qi,type:cr,depthTexture:new Ux(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ys(g.framebufferWidth,g.framebufferHeight,{format:qi,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(pe){for(let ve=0;ve<pe.removed.length;ve++){const Me=pe.removed[ve],nt=I.indexOf(Me);nt>=0&&(I[nt]=null,P[nt].disconnect(Me))}for(let ve=0;ve<pe.added.length;ve++){const Me=pe.added[ve];let nt=I.indexOf(Me);if(nt===-1){for(let pt=0;pt<P.length;pt++)if(pt>=I.length){I.push(Me),nt=pt;break}else if(I[pt]===null){I[pt]=Me,nt=pt;break}if(nt===-1)break}const ze=P[nt];ze&&ze.connect(Me)}}const H=new W,oe=new W;function ue(pe,ve,Me){H.setFromMatrixPosition(ve.matrixWorld),oe.setFromMatrixPosition(Me.matrixWorld);const nt=H.distanceTo(oe),ze=ve.projectionMatrix.elements,pt=Me.projectionMatrix.elements,rn=ze[14]/(ze[10]-1),V=ze[14]/(ze[10]+1),zt=(ze[9]+1)/ze[5],ct=(ze[9]-1)/ze[5],rt=(ze[8]-1)/ze[0],j=(pt[8]+1)/pt[0],ge=rn*rt,Z=rn*j,G=nt/(-rt+j),Xe=G*-rt;if(ve.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Xe),pe.translateZ(G),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),ze[10]===-1)pe.projectionMatrix.copy(ve.projectionMatrix),pe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ye=rn+G,N=V+G,b=ge-Xe,ie=Z+(nt-Xe),he=zt*V/N*Ye,xe=ct*V/N*Ye;pe.projectionMatrix.makePerspective(b,ie,he,xe,Ye,N),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function Ce(pe,ve){ve===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(ve.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let ve=pe.near,Me=pe.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),q.near=M.near=A.near=ve,q.far=M.far=A.far=Me,(re!==q.near||ce!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),re=q.near,ce=q.far),q.layers.mask=pe.layers.mask|6,A.layers.mask=q.layers.mask&3,M.layers.mask=q.layers.mask&5;const nt=pe.parent,ze=q.cameras;Ce(q,nt);for(let pt=0;pt<ze.length;pt++)Ce(ze[pt],nt);ze.length===2?ue(q,A,M):q.projectionMatrix.copy(A.projectionMatrix),Oe(pe,q,nt)};function Oe(pe,ve,Me){Me===null?pe.matrix.copy(ve.matrixWorld):(pe.matrix.copy(Me.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(ve.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(ve.projectionMatrix),pe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=pp*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(pe){l=pe,m!==null&&(m.fixedFoveation=pe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=pe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(pe){return d[pe]};let yt=null;function ht(pe,ve){if(h=ve.getViewerPose(c||o),w=ve,h!==null){const Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let nt=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,nt=!0);for(let V=0;V<Me.length;V++){const zt=Me[V];let ct=null;if(g!==null)ct=g.getViewport(zt);else{const j=p.getViewSubImage(m,zt);ct=j.viewport,V===0&&(e.setRenderTargetTextures(E,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(E))}let rt=k[V];rt===void 0&&(rt=new yi,rt.layers.enable(V),rt.viewport=new Xt,k[V]=rt),rt.matrix.fromArray(zt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(zt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ct.x,ct.y,ct.width,ct.height),V===0&&(q.matrix.copy(rt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),nt===!0&&q.cameras.push(rt)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const V=p.getDepthInformation(Me[0]);V&&V.isValid&&V.texture&&x.init(V,r.renderState)}if(ze&&ze.includes("camera-access")&&T){e.state.unbindTexture(),p=i.getBinding();for(let V=0;V<Me.length;V++){const zt=Me[V].camera;if(zt){let ct=d[zt];ct||(ct=new Fx,d[zt]=ct);const rt=p.getCameraImage(zt);ct.sourceTexture=rt}}}}for(let Me=0;Me<P.length;Me++){const nt=I[Me],ze=P[Me];nt!==null&&ze!==void 0&&ze.update(nt,ve,c||o)}yt&&yt(pe,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Ie=new Hx;Ie.setAnimationLoop(ht),this.setAnimationLoop=function(pe){yt=pe},this.dispose=function(){}}}const bs=new Ji,dA=new Qt;function fA(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,Lx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,v,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),m(x,d),d.isMeshPhysicalMaterial&&g(x,d,E)):d.isMeshMatcapMaterial?(s(x,d),w(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),T(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(o(x,d),d.isLineDashedMaterial&&a(x,d)):d.isPointsMaterial?l(x,d,v,y):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===hi&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===hi&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,E=v.envMapRotation;y&&(x.envMap.value=y,bs.copy(E),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(bs)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function o(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function a(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,v,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*v,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function m(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,v){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hi&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,d){d.matcap&&(x.matcap.value=d.matcap)}function T(x,d){const v=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const E=y.program;i.uniformBlockBinding(v,E)}function c(v,y){let E=r[v.id];E===void 0&&(w(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",x));const P=y.program;i.updateUBOMapping(v,P);const I=e.render.frame;s[v.id]!==I&&(m(v),s[v.id]=I)}function h(v){const y=p();v.__bindingPointIndex=y;const E=t.createBuffer(),P=v.__size,I=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const y=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let I=0,D=E.length;I<D;I++){const U=Array.isArray(E[I])?E[I]:[E[I]];for(let A=0,M=U.length;A<M;A++){const k=U[A];if(g(k,I,A,P)===!0){const q=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let fe=0;fe<re.length;fe++){const X=re[fe],ee=T(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,q+ce,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,ce),ce+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,y,E,P){const I=v.value,D=y+"_"+E;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{const U=P[D];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return P[D]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function w(v){const y=v.uniforms;let E=0;const P=16;for(let D=0,U=y.length;D<U;D++){const A=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,k=A.length;M<k;M++){const q=A[M],re=Array.isArray(q.value)?q.value:[q.value];for(let ce=0,fe=re.length;ce<fe;ce++){const X=re[ce],ee=T(X),H=E%P,oe=H%ee.boundary,ue=H+oe;E+=oe,ue!==0&&P-ue<ee.storage&&(E+=P-ue),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=ee.storage}}}const I=E%P;return I>0&&(E+=P-I),v.__size=E,v.__cache={},this}function T(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){const y=v.target;y.removeEventListener("dispose",x);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class pA{constructor(e={}){const{canvas:n=Nw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const w=new Uint32Array(4),T=new Int32Array(4);let x=null,d=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Nn;let I=0,D=0,U=null,A=-1,M=null;const k=new Xt,q=new Xt;let re=null;const ce=new Et(0);let fe=0,X=n.width,ee=n.height,H=1,oe=null,ue=null;const Ce=new Xt(0,0,X,ee),Oe=new Xt(0,0,X,ee);let yt=!1;const ht=new Am;let Ie=!1,pe=!1;const ve=new Qt,Me=new W,nt=new Xt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function rn(){return U===null?H:1}let V=i;function zt(C,Q){return n.getContext(C,Q)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hm}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",we,!1),V===null){const Q="webgl2";if(V=zt(Q,C),V===null)throw zt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ct,rt,j,ge,Z,G,Xe,Ye,N,b,ie,he,xe,de,Ue,ye,De,$e,Ae,Fe,st,Ke,Pe,dt;function K(){ct=new E3(V),ct.init(),Ke=new oA(V,ct),rt=new v3(V,ct,e,Ke),j=new rA(V,ct),rt.reversedDepthBuffer&&m&&j.buffers.depth.setReversed(!0),ge=new b3(V),Z=new X5,G=new sA(V,ct,j,Z,rt,Ke,ge),Xe=new x3(E),Ye=new S3(E),N=new DS(V),Pe=new m3(V,N),b=new T3(V,N,ge,Pe),ie=new R3(V,b,N,ge),Ae=new C3(V,rt,G),ye=new _3(Z),he=new W5(E,Xe,Ye,ct,rt,Pe,ye),xe=new fA(E,Z),de=new q5,Ue=new Q5(ct),$e=new p3(E,Xe,Ye,j,ie,g,l),De=new nA(E,ie,rt),dt=new hA(V,ge,rt,j),Fe=new g3(V,ct,ge),st=new A3(V,ct,ge),ge.programs=he.programs,E.capabilities=rt,E.extensions=ct,E.properties=Z,E.renderLists=de,E.shadowMap=De,E.state=j,E.info=ge}K();const Te=new uA(E,V);this.xr=Te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(X,ee,!1))},this.getSize=function(C){return C.set(X,ee)},this.setSize=function(C,Q,le=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,ee=Q,n.width=Math.floor(C*H),n.height=Math.floor(Q*H),le===!0&&(n.style.width=C+"px",n.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(X*H,ee*H).floor()},this.setDrawingBufferSize=function(C,Q,le){X=C,ee=Q,H=le,n.width=Math.floor(C*le),n.height=Math.floor(Q*le),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Ce)},this.setViewport=function(C,Q,le,ae){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,Q,le,ae),j.viewport(k.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,Q,le,ae){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,Q,le,ae),j.scissor(q.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){j.setScissorTest(yt=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,le=!0){let ae=0;if(C){let te=!1;if(U!==null){const Se=U.texture.format;te=Se===ym||Se===xm||Se===_m}if(te){const Se=U.texture.type,Ne=Se===cr||Se===qs||Se===ul||Se===dl||Se===gm||Se===vm,qe=$e.getClearColor(),He=$e.getClearAlpha(),it=qe.r,lt=qe.g,et=qe.b;Ne?(w[0]=it,w[1]=lt,w[2]=et,w[3]=He,V.clearBufferuiv(V.COLOR,0,w)):(T[0]=it,T[1]=lt,T[2]=et,T[3]=He,V.clearBufferiv(V.COLOR,0,T))}else ae|=V.COLOR_BUFFER_BIT}Q&&(ae|=V.DEPTH_BUFFER_BIT),le&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",we,!1),$e.dispose(),de.dispose(),Ue.dispose(),Z.dispose(),Xe.dispose(),Ye.dispose(),ie.dispose(),Pe.dispose(),dt.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ri),Te.removeEventListener("sessionend",ia),Qi.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=ge.autoReset,Q=De.enabled,le=De.autoUpdate,ae=De.needsUpdate,te=De.type;K(),ge.autoReset=C,De.enabled=Q,De.autoUpdate=le,De.needsUpdate=ae,De.type=te}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const Q=C.target;Q.removeEventListener("dispose",me),je(Q)}function je(C){at(C),Z.remove(C)}function at(C){const Q=Z.get(C).programs;Q!==void 0&&(Q.forEach(function(le){he.releaseProgram(le)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,le,ae,te,Se){Q===null&&(Q=ze);const Ne=te.isMesh&&te.matrixWorld.determinant()<0,qe=El(C,Q,le,ae,te);j.setMaterial(ae,Ne);let He=le.index,it=1;if(ae.wireframe===!0){if(He=b.getWireframeAttribute(le),He===void 0)return;it=2}const lt=le.drawRange,et=le.attributes.position;let ft=lt.start*it,vt=(lt.start+lt.count)*it;Se!==null&&(ft=Math.max(ft,Se.start*it),vt=Math.min(vt,(Se.start+Se.count)*it)),He!==null?(ft=Math.max(ft,0),vt=Math.min(vt,He.count)):et!=null&&(ft=Math.max(ft,0),vt=Math.min(vt,et.count));const _t=vt-ft;if(_t<0||_t===1/0)return;Pe.setup(te,ae,qe,le,He);let Bt,Nt=Fe;if(He!==null&&(Bt=N.get(He),Nt=st,Nt.setIndex(Bt)),te.isMesh)ae.wireframe===!0?(j.setLineWidth(ae.wireframeLinewidth*rn()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(te.isLine){let tt=ae.linewidth;tt===void 0&&(tt=1),j.setLineWidth(tt*rn()),te.isLineSegments?Nt.setMode(V.LINES):te.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else te.isPoints?Nt.setMode(V.POINTS):te.isSprite&&Nt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const tt=te._multiDrawStarts,Kt=te._multiDrawCounts,At=te._multiDrawCount,kn=He?N.get(He).bytesPerElement:1,ki=Z.get(ae).currentProgram.getUniforms();for(let Cn=0;Cn<At;Cn++)ki.setValue(V,"_gl_DrawID",Cn),Nt.render(tt[Cn]/kn,Kt[Cn])}else if(te.isInstancedMesh)Nt.renderInstances(ft,_t,te.count);else if(le.isInstancedBufferGeometry){const tt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Kt=Math.min(le.instanceCount,tt);Nt.renderInstances(ft,_t,Kt)}else Nt.render(ft,_t)};function wt(C,Q,le){C.transparent===!0&&C.side===Gt&&C.forceSinglePass===!1?(C.side=hi,C.needsUpdate=!0,Lr(C,Q,le),C.side=cs,C.needsUpdate=!0,Lr(C,Q,le),C.side=Gt):Lr(C,Q,le)}this.compile=function(C,Q,le=null){le===null&&(le=C),d=Ue.get(le),d.init(Q),y.push(d),le.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),C!==le&&C.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),d.setupLights();const ae=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Se=te.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const qe=Se[Ne];wt(qe,le,te),ae.add(qe)}else wt(Se,le,te),ae.add(Se)}),d=y.pop(),ae},this.compileAsync=function(C,Q,le=null){const ae=this.compile(C,Q,le);return new Promise(te=>{function Se(){if(ae.forEach(function(Ne){Z.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){te(C);return}setTimeout(Se,10)}ct.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ot=null;function Ai(C){ot&&ot(C)}function ri(){Qi.stop()}function ia(){Qi.start()}const Qi=new Hx;Qi.setAnimationLoop(Ai),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){ot=C,Te.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},Te.addEventListener("sessionstart",ri),Te.addEventListener("sessionend",ia),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Q),Q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,Q,U),d=Ue.get(C,y.length),d.init(Q),y.push(d),ve.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ht.setFromProjectionMatrix(ve,sr,Q.reversedDepth),pe=this.localClippingEnabled,Ie=ye.init(this.clippingPlanes,pe),x=de.get(C,v.length),x.init(),v.push(x),Te.enabled===!0&&Te.isPresenting===!0){const Se=E.xr.getDepthSensingMesh();Se!==null&&ps(Se,Q,-1/0,E.sortObjects)}ps(C,Q,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(oe,ue),pt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,pt&&$e.addToRenderList(x,C),this.info.render.frame++,Ie===!0&&ye.beginShadows();const le=d.state.shadowsArray;De.render(le,C,Q),Ie===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=x.opaque,te=x.transmissive;if(d.setupLights(),Q.isArrayCamera){const Se=Q.cameras;if(te.length>0)for(let Ne=0,qe=Se.length;Ne<qe;Ne++){const He=Se[Ne];sa(ae,te,C,He)}pt&&$e.render(C);for(let Ne=0,qe=Se.length;Ne<qe;Ne++){const He=Se[Ne];ra(x,C,He,He.viewport)}}else te.length>0&&sa(ae,te,C,Q),pt&&$e.render(C),ra(x,C,Q);U!==null&&D===0&&(G.updateMultisampleRenderTarget(U),G.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(E,C,Q),Pe.resetDefaultState(),A=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],Ie===!0&&ye.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function ps(C,Q,le,ae){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ht.intersectsSprite(C)){ae&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Ne=ie.update(C),qe=C.material;qe.visible&&x.push(C,Ne,qe,le,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ht.intersectsObject(C))){const Ne=ie.update(C),qe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),nt.copy(Ne.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(qe)){const He=Ne.groups;for(let it=0,lt=He.length;it<lt;it++){const et=He[it],ft=qe[et.materialIndex];ft&&ft.visible&&x.push(C,Ne,ft,le,nt.z,et)}}else qe.visible&&x.push(C,Ne,qe,le,nt.z,null)}}const Se=C.children;for(let Ne=0,qe=Se.length;Ne<qe;Ne++)ps(Se[Ne],Q,le,ae)}function ra(C,Q,le,ae){const te=C.opaque,Se=C.transmissive,Ne=C.transparent;d.setupLightsView(le),Ie===!0&&ye.setGlobalState(E.clippingPlanes,le),ae&&j.viewport(k.copy(ae)),te.length>0&&Ir(te,Q,le),Se.length>0&&Ir(Se,Q,le),Ne.length>0&&Ir(Ne,Q,le),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function sa(C,Q,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ae.id]===void 0&&(d.state.transmissionRenderTarget[ae.id]=new Ys(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?yl:cr,minFilter:zs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=d.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||k;Se.setSize(Ne.z*E.transmissionResolutionScale,Ne.w*E.transmissionResolutionScale);const qe=E.getRenderTarget(),He=E.getActiveCubeFace(),it=E.getActiveMipmapLevel();E.setRenderTarget(Se),E.getClearColor(ce),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),pt&&$e.render(le);const lt=E.toneMapping;E.toneMapping=os;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),d.setupLightsView(ae),Ie===!0&&ye.setGlobalState(E.clippingPlanes,ae),Ir(C,le,ae),G.updateMultisampleRenderTarget(Se),G.updateRenderTargetMipmap(Se),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let vt=0,_t=Q.length;vt<_t;vt++){const Bt=Q[vt],Nt=Bt.object,tt=Bt.geometry,Kt=Bt.material,At=Bt.group;if(Kt.side===Gt&&Nt.layers.test(ae.layers)){const kn=Kt.side;Kt.side=hi,Kt.needsUpdate=!0,Js(Nt,le,ae,tt,Kt,At),Kt.side=kn,Kt.needsUpdate=!0,ft=!0}}ft===!0&&(G.updateMultisampleRenderTarget(Se),G.updateRenderTargetMipmap(Se))}E.setRenderTarget(qe,He,it),E.setClearColor(ce,fe),et!==void 0&&(ae.viewport=et),E.toneMapping=lt}function Ir(C,Q,le){const ae=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Se=C.length;te<Se;te++){const Ne=C[te],qe=Ne.object,He=Ne.geometry,it=Ne.group;let lt=Ne.material;lt.allowOverride===!0&&ae!==null&&(lt=ae),qe.layers.test(le.layers)&&Js(qe,Q,le,He,lt,it)}}function Js(C,Q,le,ae,te,Se){C.onBeforeRender(E,Q,le,ae,te,Se),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(E,Q,le,ae,C,Se),te.transparent===!0&&te.side===Gt&&te.forceSinglePass===!1?(te.side=hi,te.needsUpdate=!0,E.renderBufferDirect(le,Q,ae,te,C,Se),te.side=cs,te.needsUpdate=!0,E.renderBufferDirect(le,Q,ae,te,C,Se),te.side=Gt):E.renderBufferDirect(le,Q,ae,te,C,Se),C.onAfterRender(E,Q,le,ae,te,Se)}function Lr(C,Q,le){Q.isScene!==!0&&(Q=ze);const ae=Z.get(C),te=d.state.lights,Se=d.state.shadowsArray,Ne=te.state.version,qe=he.getParameters(C,te.state,Se,Q,le),He=he.getProgramCacheKey(qe);let it=ae.programs;ae.environment=C.isMeshStandardMaterial?Q.environment:null,ae.fog=Q.fog,ae.envMap=(C.isMeshStandardMaterial?Ye:Xe).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",me),it=new Map,ae.programs=it);let lt=it.get(He);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===Ne)return ms(C,qe),lt}else qe.uniforms=he.getUniforms(C),C.onBeforeCompile(qe,E),lt=he.acquireProgram(qe,He),it.set(He,lt),ae.uniforms=qe.uniforms;const et=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=ye.uniform),ms(C,qe),ae.needsLights=pi(C),ae.lightsStateVersion=Ne,ae.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMap.value=te.state.directionalShadowMap,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotShadowMap.value=te.state.spotShadowMap,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMap.value=te.state.pointShadowMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function oa(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function ms(C,Q){const le=Z.get(C);le.outputColorSpace=Q.outputColorSpace,le.batching=Q.batching,le.batchingColor=Q.batchingColor,le.instancing=Q.instancing,le.instancingColor=Q.instancingColor,le.instancingMorph=Q.instancingMorph,le.skinning=Q.skinning,le.morphTargets=Q.morphTargets,le.morphNormals=Q.morphNormals,le.morphColors=Q.morphColors,le.morphTargetsCount=Q.morphTargetsCount,le.numClippingPlanes=Q.numClippingPlanes,le.numIntersection=Q.numClipIntersection,le.vertexAlphas=Q.vertexAlphas,le.vertexTangents=Q.vertexTangents,le.toneMapping=Q.toneMapping}function El(C,Q,le,ae,te){Q.isScene!==!0&&(Q=ze),G.resetTextureUnits();const Se=Q.fog,Ne=ae.isMeshStandardMaterial?Q.environment:null,qe=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ko,He=(ae.isMeshStandardMaterial?Ye:Xe).get(ae.envMap||Ne),it=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,vt=!!le.morphAttributes.color;let _t=os;ae.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=E.toneMapping);const Bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Nt=Bt!==void 0?Bt.length:0,tt=Z.get(ae),Kt=d.state.lights;if(Ie===!0&&(pe===!0||C!==M)){const dn=C===M&&ae.id===A;ye.setState(ae,C,dn)}let At=!1;ae.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Kt.state.version||tt.outputColorSpace!==qe||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==He||ae.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ye.numPlanes||tt.numIntersection!==ye.numIntersection)||tt.vertexAlphas!==it||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==ft||tt.morphColors!==vt||tt.toneMapping!==_t||tt.morphTargetsCount!==Nt)&&(At=!0):(At=!0,tt.__version=ae.version);let kn=tt.currentProgram;At===!0&&(kn=Lr(ae,Q,te));let ki=!1,Cn=!1,Dr=!1;const qt=kn.getUniforms(),vn=tt.uniforms;if(j.useProgram(kn.program)&&(ki=!0,Cn=!0,Dr=!0),ae.id!==A&&(A=ae.id,Cn=!0),ki||M!==C){j.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qt.setValue(V,"projectionMatrix",C.projectionMatrix),qt.setValue(V,"viewMatrix",C.matrixWorldInverse);const zn=qt.map.cameraPosition;zn!==void 0&&zn.setValue(V,Me.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&qt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&qt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Cn=!0,Dr=!0)}if(te.isSkinnedMesh){qt.setOptional(V,te,"bindMatrix"),qt.setOptional(V,te,"bindMatrixInverse");const dn=te.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),qt.setValue(V,"boneTexture",dn.boneTexture,G))}te.isBatchedMesh&&(qt.setOptional(V,te,"batchingTexture"),qt.setValue(V,"batchingTexture",te._matricesTexture,G),qt.setOptional(V,te,"batchingIdTexture"),qt.setValue(V,"batchingIdTexture",te._indirectTexture,G),qt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&qt.setValue(V,"batchingColorTexture",te._colorsTexture,G));const On=le.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ae.update(te,le,kn),(Cn||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,qt.setValue(V,"receiveShadow",te.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(vn.envMap.value=He,vn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Q.environment!==null&&(vn.envMapIntensity.value=Q.environmentIntensity),Cn&&(qt.setValue(V,"toneMappingExposure",E.toneMappingExposure),tt.needsLights&&gs(vn,Dr),Se&&ae.fog===!0&&xe.refreshFogUniforms(vn,Se),xe.refreshMaterialUniforms(vn,ae,H,ee,d.state.transmissionRenderTarget[C.id]),Bc.upload(V,oa(tt),vn,G)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bc.upload(V,oa(tt),vn,G),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&qt.setValue(V,"center",te.center),qt.setValue(V,"modelViewMatrix",te.modelViewMatrix),qt.setValue(V,"normalMatrix",te.normalMatrix),qt.setValue(V,"modelMatrix",te.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const dn=ae.uniformsGroups;for(let zn=0,sn=dn.length;zn<sn;zn++){const ur=dn[zn];dt.update(ur,kn),dt.bind(ur,kn)}}return kn}function gs(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function pi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,Q,le){const ae=Z.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=Q,Z.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const le=Z.get(C);le.__webglFramebuffer=Q,le.__useDefaultFramebuffer=Q===void 0};const aa=V.createFramebuffer();this.setRenderTarget=function(C,Q=0,le=0){U=C,I=Q,D=le;let ae=!0,te=null,Se=!1,Ne=!1;if(C){const He=Z.get(C);if(He.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(V.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(He.__hasExternalTextures)G.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(He.__boundDepthTexture!==et){if(et!==null&&Z.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ne=!0);const lt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[Q])?te=lt[Q][le]:te=lt[Q],Se=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?te=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?te=lt[le]:te=lt,k.copy(C.viewport),q.copy(C.scissor),re=C.scissorTest}else k.copy(Ce).multiplyScalar(H).floor(),q.copy(Oe).multiplyScalar(H).floor(),re=yt;if(le!==0&&(te=aa),j.bindFramebuffer(V.FRAMEBUFFER,te)&&ae&&j.drawBuffers(C,te),j.viewport(k),j.scissor(q),j.setScissorTest(re),Se){const He=Z.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,He.__webglTexture,le)}else if(Ne){const He=Q;for(let it=0;it<C.textures.length;it++){const lt=Z.get(C.textures[it]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+it,lt.__webglTexture,le,He)}}else if(C!==null&&le!==0){const He=Z.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,He.__webglTexture,le)}A=-1},this.readRenderTargetPixels=function(C,Q,le,ae,te,Se,Ne,qe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){j.bindFramebuffer(V.FRAMEBUFFER,He);try{const it=C.textures[qe],lt=it.format,et=it.type;if(!rt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ae&&le>=0&&le<=C.height-te&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(Q,le,ae,te,Ke.convert(lt),Ke.convert(et),Se))}finally{const it=U!==null?Z.get(U).__webglFramebuffer:null;j.bindFramebuffer(V.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,Q,le,ae,te,Se,Ne,qe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(Q>=0&&Q<=C.width-ae&&le>=0&&le<=C.height-te){j.bindFramebuffer(V.FRAMEBUFFER,He);const it=C.textures[qe],lt=it.format,et=it.type;if(!rt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(Q,le,ae,te,Ke.convert(lt),Ke.convert(et),0);const vt=U!==null?Z.get(U).__webglFramebuffer:null;j.bindFramebuffer(V.FRAMEBUFFER,vt);const _t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Uw(V,_t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer(ft),V.deleteSync(_t),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,le=0){const ae=Math.pow(2,-le),te=Math.floor(C.image.width*ae),Se=Math.floor(C.image.height*ae),Ne=Q!==null?Q.x:0,qe=Q!==null?Q.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ne,qe,te,Se),j.unbindTexture()};const Tl=V.createFramebuffer(),Al=V.createFramebuffer();this.copyTextureToTexture=function(C,Q,le=null,ae=null,te=0,Se=null){Se===null&&(te!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=te,te=0):Se=0);let Ne,qe,He,it,lt,et,ft,vt,_t;const Bt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(le!==null)Ne=le.max.x-le.min.x,qe=le.max.y-le.min.y,He=le.isBox3?le.max.z-le.min.z:1,it=le.min.x,lt=le.min.y,et=le.isBox3?le.min.z:0;else{const On=Math.pow(2,-te);Ne=Math.floor(Bt.width*On),qe=Math.floor(Bt.height*On),C.isDataArrayTexture?He=Bt.depth:C.isData3DTexture?He=Math.floor(Bt.depth*On):He=1,it=0,lt=0,et=0}ae!==null?(ft=ae.x,vt=ae.y,_t=ae.z):(ft=0,vt=0,_t=0);const Nt=Ke.convert(Q.format),tt=Ke.convert(Q.type);let Kt;Q.isData3DTexture?(G.setTexture3D(Q,0),Kt=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(G.setTexture2DArray(Q,0),Kt=V.TEXTURE_2D_ARRAY):(G.setTexture2D(Q,0),Kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const At=V.getParameter(V.UNPACK_ROW_LENGTH),kn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ki=V.getParameter(V.UNPACK_SKIP_PIXELS),Cn=V.getParameter(V.UNPACK_SKIP_ROWS),Dr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,lt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,et);const qt=C.isDataArrayTexture||C.isData3DTexture,vn=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const On=Z.get(C),dn=Z.get(Q),zn=Z.get(On.__renderTarget),sn=Z.get(dn.__renderTarget);j.bindFramebuffer(V.READ_FRAMEBUFFER,zn.__webglFramebuffer),j.bindFramebuffer(V.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let ur=0;ur<He;ur++)qt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,te,et+ur),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(Q).__webglTexture,Se,_t+ur)),V.blitFramebuffer(it,lt,Ne,qe,ft,vt,Ne,qe,V.DEPTH_BUFFER_BIT,V.NEAREST);j.bindFramebuffer(V.READ_FRAMEBUFFER,null),j.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||Z.has(C)){const On=Z.get(C),dn=Z.get(Q);j.bindFramebuffer(V.READ_FRAMEBUFFER,Tl),j.bindFramebuffer(V.DRAW_FRAMEBUFFER,Al);for(let zn=0;zn<He;zn++)qt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,te,et+zn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,te),vn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Se,_t+zn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Se),te!==0?V.blitFramebuffer(it,lt,Ne,qe,ft,vt,Ne,qe,V.COLOR_BUFFER_BIT,V.NEAREST):vn?V.copyTexSubImage3D(Kt,Se,ft,vt,_t+zn,it,lt,Ne,qe):V.copyTexSubImage2D(Kt,Se,ft,vt,it,lt,Ne,qe);j.bindFramebuffer(V.READ_FRAMEBUFFER,null),j.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Kt,Se,ft,vt,_t,Ne,qe,He,Nt,tt,Bt.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Se,ft,vt,_t,Ne,qe,He,Nt,Bt.data):V.texSubImage3D(Kt,Se,ft,vt,_t,Ne,qe,He,Nt,tt,Bt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,ft,vt,Ne,qe,Nt,tt,Bt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,ft,vt,Bt.width,Bt.height,Nt,Bt.data):V.texSubImage2D(V.TEXTURE_2D,Se,ft,vt,Ne,qe,Nt,tt,Bt);V.pixelStorei(V.UNPACK_ROW_LENGTH,At),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ki),V.pixelStorei(V.UNPACK_SKIP_ROWS,Cn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Dr),Se===0&&Q.generateMipmaps&&V.generateMipmap(Kt),j.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){I=0,D=0,U=null,j.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var ev;const Pt=(ev=window.Telegram)==null?void 0:ev.WebApp,$1="/yggdrasil-tma/",Sc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],mA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],K1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},Z1=()=>{try{const t={...K1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...K1,watch:Date.now()}}},Ca=()=>new Date().toISOString().slice(0,10),gA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Lf=[3,5,8,12,18,25,40],vA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],_A=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Df=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Ra={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},J1={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Nf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Uf={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Vr({name:t,className:e}){return Y.jsx("img",{src:t.includes(".")?`${$1}img/${t}`:`${$1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const xA=`
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
`,Cs=(t,e=.9,n=0)=>new be({color:t,roughness:e,metalness:n}),B=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},Q1=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),c=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,h=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,p=Math.min(1,l*1.4);i.setX(r,s+(c-.5)*e*(.45+p)),i.setZ(r,a+(h-.5)*e*(.35+p)),i.setY(r,o+(c+h-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t},yA=(t,e)=>{const n=Math.sin(t*.11+.7)*.65,i=Math.cos(e*.09-.4)*.48,r=Math.sin((t+e)*.055)*.35,s=Math.exp(-(t*t+(e+3)*(e+3))/900);return(n+i+r)*(1-s*.72)};function jx(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function MA(t){const e=new Ve,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=Cs(i,.92),c=Cs(s,.9),h=Cs(o,.96),p=Cs(r,.95),m=Cs(a,.78),g=Cs(2106150,.98),w=new z(new ai(.28,.24,5,8),h);w.position.y=.72,e.add(w);const T=new z(new ai(n?.37:.32,.56,6,10),c);T.position.y=1.15,e.add(T);const x=new z(new ai(n?.4:.34,.34,5,8),c);x.scale.z=.82,x.position.y=1.28,e.add(x);const d=new z(new Je(.36,.38,.09,12),h);d.position.y=.93,e.add(d);const v=new z(new Vn(.12,.12,.055),m);v.position.set(0,.93,.38),e.add(v);const y=new z(new Je(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const E=new z(new ut(.31,16,12),l);E.scale.set(.92,1.06,.92),E.position.y=1.91,e.add(E);const P=new z(new ut(.325,14,10),p);P.scale.set(.98,.72,.98),P.position.set(0,2.08,-.025),e.add(P);const I=new z(new ai(.18,.3,5,8),p);I.position.set(0,1.93,-.25),I.rotation.x=.15,e.add(I);const D=new z(new hn(.045,.13,5),l);D.rotation.x=Math.PI/2,D.position.set(0,1.92,.3),e.add(D);const U=new be({color:1513754,roughness:.55});for(const oe of[-.105,.105]){const ue=new z(new ut(.025,7,5),U);ue.position.set(oe,1.98,.285),e.add(ue)}if(n){const oe=new z(new ut(.19,10,7),p);oe.scale.set(.82,1,.72),oe.position.set(0,1.8,.24),e.add(oe)}else{const oe=new z(new ai(.055,.42,4,7),p);oe.position.set(-.27,1.78,-.08),oe.rotation.z=-.22,e.add(oe)}const A=oe=>{const ue=new Ve;ue.position.set(oe*(n?.43:.39),1.43,0),ue.rotation.z=oe*.07;const Ce=new z(new ai(.105,.42,5,7),c);Ce.position.y=-.23,ue.add(Ce);const Oe=new Ve;Oe.position.y=-.46,ue.add(Oe);const yt=new z(new ai(.085,.34,5,7),h);yt.position.y=-.2,Oe.add(yt);const ht=new z(new ut(.105,9,7),l);return ht.position.y=-.43,Oe.add(ht),e.add(ue),{upper:ue,elbow:Oe}},M=A(-1),k=A(1),q=oe=>{const ue=new Ve;ue.position.set(oe*.15,.68,0);const Ce=new z(new ai(.12,.42,5,7),g);Ce.position.y=-.23,ue.add(Ce);const Oe=new Ve;Oe.position.y=-.48,ue.add(Oe);const yt=new z(new ai(.095,.4,5,7),g);yt.position.y=-.22,Oe.add(yt);const ht=new z(new ai(.13,.24,5,7),h);return ht.scale.z=1.25,ht.position.set(0,-.47,.075),Oe.add(ht),e.add(ue),ue},re=q(-1),ce=q(1),fe=new z(new ai(.42,.1,5,8),h);fe.scale.z=.72,fe.position.y=1.48,e.add(fe);const X=new z(new Vn(.58,.92,.075),Cs(t.id==="berserk"?2821132:1582894,.98));X.position.set(0,1.05,-.28),X.rotation.x=-.035,e.add(X);const ee=new Ve;if(t.id==="berserk"||t.id==="dwarf"){const oe=new z(new Je(.035,.045,.72,7),h);oe.position.y=.36,ee.add(oe);const ue=new z(new Vn(.16,.34,.055),m);ue.position.set(0,.88,0),ue.rotation.z=t.id==="dwarf"?-.22:.22,ee.add(ue)}else{const oe=new z(new Je(.028,.04,1.1,7),h);oe.position.y=.52,ee.add(oe);const ue=new z(new hn(.075,.25,6),m);ue.position.y=1.18,ee.add(ue)}if(ee.position.set(.43,.32,.03),ee.rotation.z=-.12,e.add(ee),t.id==="viking"||t.id==="berserk"){const oe=new z(new Je(.3,.3,.1,16),h);oe.rotation.x=Math.PI/2,oe.position.set(0,1.12,-.37),e.add(oe);const ue=new z(new ut(.065,8,6),m);ue.position.set(0,1.12,-.43),e.add(ue)}const H=new z(new $n(.62,24),new bt({color:0,transparent:!0,opacity:.32}));return H.rotation.x=-Math.PI/2,H.position.y=.02,e.add(H),e.userData.anim={armL:M,armR:k,legL:re,legR:ce,weapon:ee,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},jx(e)}function wA({h:t,on:e,eventDone:n}){const i=Ct.useRef(null),r=Ct.useRef(null),s=Ct.useRef(null),o=Ct.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Ct.useState(""),[c,h]=Ct.useState(!1),[p,m]=Ct.useState(!1),[g,w]=Ct.useState(!1),[T,x]=Ct.useState(!1),d=Ct.useRef({x:0,z:1}),v=Ct.useRef(!1),y=Ct.useRef(null);Ct.useEffect(()=>{const A=i.current;if(!A)return;const M=new oS;M.background=new Et(10794669),M.fog=new Tm(10793898,.00325);const k=new yi(54,1,.1,280);k.position.set(0,8.5,17);const q=new pA({antialias:!0,powerPreference:"high-performance"});q.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),q.shadowMap.enabled=!0,q.shadowMap.type=mx,q.outputColorSpace=Nn,q.toneMapping=gx,q.toneMappingExposure=1.03,A.appendChild(q.domElement);const re=new bS(15266536,6648159,1.18);M.add(re);const ce=new M1(16768952,2.32);ce.position.set(-42,58,34),ce.castShadow=!0,ce.shadow.mapSize.set(1536,1536),ce.shadow.camera.left=-95,ce.shadow.camera.right=95,ce.shadow.camera.top=95,ce.shadow.camera.bottom=-95,ce.shadow.bias=-5e-4,M.add(ce);const fe=new M1(12702934,.72);fe.position.set(55,18,-60),M.add(fe);const X=(u,_)=>{const f=Math.sin(u*.075)*.7+Math.cos(_*.062)*.55+Math.sin((u-_)*.045)*.35,S=Math.exp(-(u*u/850+(_+2)*(_+2)/1050)),L=Math.exp(-(u*u/150+(_-12)*(_-12)/2200));return f*(1-S*.88)-L*.18},ee=document.createElement("canvas");ee.width=ee.height=128;const H=ee.getContext("2d"),oe=H.createRadialGradient(64,64,4,64,64,64);oe.addColorStop(0,"rgba(255,238,194,0.30)"),oe.addColorStop(.34,"rgba(255,231,178,0.16)"),oe.addColorStop(.72,"rgba(255,225,170,0.055)"),oe.addColorStop(1,"rgba(255,225,170,0)"),H.fillStyle=oe,H.fillRect(0,0,128,128);const ue=new Ts(ee);ue.colorSpace=Nn;const Ce=new bt({map:ue,transparent:!0,depthWrite:!1,blending:du,opacity:.58}),Oe=[];[[-22,-4,7.5,4.8],[-9,18,5.6,2.2],[9,-10,6.8,5.4],[24,5,5,1.7],[-31,20,5.2,.8],[18,27,7,3.5]].forEach(([u,_,f,S])=>{const L=new z(new Ln(f,f*.68),Ce.clone());L.rotation.x=-Math.PI/2,L.rotation.z=S,L.position.set(u,X(u,_)+.018,_),L.renderOrder=2,M.add(L),Oe.push(L)});const ht=new bt({color:16771263,transparent:!0,opacity:.032,depthWrite:!1,side:Gt,blending:du}),Ie=[];[[-18,10,.8,14],[4,8,-.35,11],[27,15,.5,13]].forEach(([u,_,f,S])=>{const L=new z(new Ln(5.5,S),ht.clone());L.position.set(u,S*.5+.8,_),L.rotation.set(.1,f*.045,f),M.add(L),Ie.push(L)});const pe=u=>{const _=document.createElement("canvas");_.width=_.height=512;const f=_.getContext("2d"),S=R=>Math.abs(Math.sin(R*12.9898)*43758.5453)%1;if(u==="ground"){f.fillStyle="#4c6042",f.fillRect(0,0,512,512);for(let R=0;R<1800;R++){const O=S(R*1.17)*512,$=S(R*2.31)*512,J=10+S(R*3.71)*28,F=S(R*4.13);f.fillStyle=F>.72?`rgba(96,108,63,${.08+S(R)*.12})`:`rgba(30,36,25,${.05+S(R)*.12})`,f.beginPath(),f.arc(O,$,J,0,Math.PI*2),f.fill()}for(let R=0;R<650;R++){const O=S(R*7.1)*512,$=S(R*8.2)*512;f.strokeStyle=`rgba(142,154,91,${.18+S(R*2)*.15})`,f.lineWidth=1+S(R*4)*1.5,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*5)-.5)*5,$-3-S(R*6)*5),f.stroke()}}else if(u==="wood"){f.fillStyle="#5a3d29",f.fillRect(0,0,512,512);for(let R=0;R<512;R+=22)f.fillStyle=`rgba(25,15,9,${.18+S(R)*.13})`,f.fillRect(0,R,512,3),f.strokeStyle=`rgba(154,111,69,${.08+S(R*2)*.08})`,f.lineWidth=2,f.beginPath(),f.moveTo(0,R+7),f.bezierCurveTo(150,R+2,340,R+13,512,R+5),f.stroke();for(let R=0;R<65;R++){const O=S(R*2.1)*512;f.fillStyle=`rgba(20,12,8,${.12+S(R*3)*.16})`,f.fillRect(O,0,2+S(R*4)*3,512)}}else if(u==="roof"){f.fillStyle="#252522",f.fillRect(0,0,512,512);for(let R=-30;R<550;R+=25){f.fillStyle=`rgba(105,94,77,${.12+S(R)*.08})`,f.fillRect(0,R,512,2),f.strokeStyle="rgba(12,12,11,.48)",f.lineWidth=3;for(let O=-40;O<560;O+=38)f.beginPath(),f.moveTo(O,R),f.lineTo(O-18,R+28),f.stroke()}for(let R=0;R<180;R++)f.fillStyle=`rgba(170,154,123,${.03+S(R)*.07})`,f.fillRect(S(R*2)*512,S(R*3)*512,2+S(R*4)*7,2)}else if(u==="bark"){f.fillStyle="#7b5a3f",f.fillRect(0,0,512,512);for(let R=0;R<76;R++){const O=S(R*2.1)*512,$=2+S(R*3.7)*7;f.fillStyle=`rgba(${24+S(R)*24},${16+S(R*4)*18},${10+S(R*5)*14},${.18+S(R*6)*.22})`,f.fillRect(O,0,$,512)}for(let R=0;R<80;R++){const O=S(R*7.1)*512,$=S(R*8.2)*512;f.strokeStyle=`rgba(126,91,60,${.07+S(R*2)*.09})`,f.lineWidth=1+S(R*3)*2,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*4)-.5)*12,$+18+S(R*5)*45),f.stroke()}}else if(u==="foliage"){f.fillStyle="#68865a",f.fillRect(0,0,512,512);for(let R=0;R<1900;R++){const O=S(R*1.17)*512,$=S(R*2.31)*512,J=S(R*3.7),F=J>.72?112:J>.36?92:74,ne=J>.72?145:J>.36?121:98,se=J>.72?76:J>.36?60:48;f.fillStyle=`rgba(${F},${ne},${se},${.16+S(R*4)*.28})`,f.beginPath(),f.arc(O,$,1.5+S(R*5)*4.5,0,Math.PI*2),f.fill()}for(let R=0;R<260;R++){const O=S(R*9.1)*512,$=S(R*10.2)*512;f.strokeStyle=`rgba(18,31,22,${.08+S(R*3)*.12})`,f.lineWidth=1,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*2)-.5)*10,$+(S(R*4)-.5)*10),f.stroke()}}else{f.fillStyle="#514333",f.fillRect(0,0,512,512);for(let R=0;R<1300;R++){const O=S(R*1.3)*512,$=S(R*2.7)*512;f.fillStyle=`rgba(${45+S(R*3)*38},${35+S(R*4)*28},${23+S(R*5)*20},${.08+S(R*6)*.18})`,f.fillRect(O,$,2+S(R*7)*7,1+S(R*8)*4)}}const L=new Ts(_);return L.wrapS=L.wrapT=qr,L.colorSpace=Nn,L.anisotropy=4,L},Me=(()=>{const u=document.createElement("canvas");u.width=u.height=128;const _=u.getContext("2d"),f=_.createImageData(128,128);for(let R=0;R<128;R++)for(let O=0;O<128;O++){const $=(R*128+O)*4,J=Math.sin(O*.37)*.3+Math.sin(R*.61)*.24+Math.sin((O+R)*.17)*.2+Math.sin((O-R)*.09)*.14,F=Math.max(214,Math.min(250,Math.round(232+J*18)));f.data[$]=F,f.data[$+1]=F,f.data[$+2]=F,f.data[$+3]=255}_.putImageData(f,0,0);const S=new Ts(u);S.wrapS=S.wrapT=qr,S.repeat.set(5,5);const L=new Ts(u);return L.wrapS=L.wrapT=qr,L.repeat.set(4,4),{height:S,rough:L}})(),nt=pe("ground");nt.repeat.set(5,6);const ze=pe("bark");ze.wrapS=ze.wrapT=qr,ze.repeat.set(1.2,1.8);const pt=pe("foliage");pt.wrapS=pt.wrapT=qr,pt.repeat.set(1.35,1.35);const rn=new Ln(190,190,62,62),V=rn.attributes.position;for(let u=0;u<V.count;u++){const _=V.getX(u),f=-V.getY(u);V.setZ(u,X(_,f))}rn.rotateX(-Math.PI/2),rn.computeVertexNormals();const zt=new be({map:nt,roughness:.985,metalness:0,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.018}),ct=new z(rn,zt);ct.receiveShadow=!0,M.add(ct);const rt=(u,_,f,S,L)=>{const R=[],O=[];for(let ne=0;ne<=18;ne++){const se=-95+10.555555555555555*ne,Re=Math.sin(ne*1.73+S)*.5+Math.cos(ne*.61+S*1.9)*.28,_e=f*(.72+Re*.34);R.push(se,0,0),R.push(se+Re*2.2,_e,0)}for(let ne=0;ne<18;ne++){const se=ne*2,Re=se+1,_e=se+2,Ze=se+3;O.push(se,Re,_e,Re,Ze,_e)}const J=new gn;J.setAttribute("position",new Rt(R,3)),J.setIndex(O),J.computeVertexNormals();const F=new z(J,new Sf({color:L,transparent:!0,opacity:.72,side:Gt,depthWrite:!1}));return F.rotation.x=Math.PI/2,F.position.set(0,1.5,u),F.scale.set(1,_,1),M.add(F),F};rt(-82,1,17,2.1,7505277),rt(-72,1,11,6.7,8491914);const j=(u,_,f,S,L)=>{const R=new Ve,O=new z(new Je(S*.1,S*.14,f*.42,5),new Sf({color:5917241}));O.position.y=f*.21,R.add(O);for(let $=0;$<4;$++){const J=S*(1-$*.17),F=new z(new hn(J,f*(.48-$*.035),7,1),new Sf({color:L}));F.position.y=f*(.38+$*.15),F.rotation.y=($*1.7+u*.03)%Math.PI,R.add(F)}R.position.set(u,yA(u,_)-.2,_),R.scale.setScalar(.82+B(u,_)*.34),M.add(jx(R))};for(let u=0;u<26;u++){const _=-86+u*6.8;j(_,-67-u%3*3,9+u%5*1.5,2.7+u%4*.45,5401432)}for(let u=0;u<20;u++){const _=-82+u*8.7;j(_,68+u%4*2.5,7.5+u%4*1.2,2.4,6387557)}const ge=(u,_,f)=>(_&&(u.userData={id:_,label:f||_}),u.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),M.add(u),_&&b.push(u),u),Z=(u,_=.9,f=0)=>new be({color:u,roughness:_,metalness:f,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:f>.35?.008:.018}),G=(u,_,f,S,L=.9)=>new z(new Vn(u,_,f),Z(S,L)),Xe=(u,_,f,S=10,L=.9)=>new z(new Je(u,u,_,S),Z(f,L)),Ye=(u,_,f)=>{const S=Xe(_,u,f,10,.96);return S.rotation.z=Math.PI/2,S},N=(u,_,f)=>{const S=new Ve,L=u*.62,R=.61,O=new be({map:at,color:f,roughness:.96,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.012,side:Gt}),$=new z(new Vn(L,.18,_),O),J=$.clone();return $.rotation.z=R,J.rotation.z=-R,$.position.x=-u*.205,J.position.x=u*.205,S.add($,J),S},b=[],ie=[],he=[],xe=[],de=[],Ue=.62,ye=(u,_,f,S,L=0,R=.12)=>de.push({kind:"rect",x:u,z:_,w:f+R*2,d:S+R*2,rot:L}),De=(u,_,f,S=.12)=>de.push({kind:"circle",x:u,z:_,r:f+S}),$e=(u,_,f,S,L,R=.12)=>de.push({kind:"segment",x1:u,z1:_,x2:f,z2:S,r:L+R}),Ae=(u,_,f)=>{if(f.kind==="circle")return Math.hypot(u-f.x,_-f.z)<f.r+Ue;if(f.kind==="rect"){const F=Math.cos(f.rot),ne=Math.sin(f.rot),se=u-f.x,Re=_-f.z,_e=F*se-ne*Re,Ze=ne*se+F*Re,mt=Math.max(-f.w/2,Math.min(f.w/2,_e)),Lt=Math.max(-f.d/2,Math.min(f.d/2,Ze));return Math.hypot(_e-mt,Ze-Lt)<Ue}const S=f.x2-f.x1,L=f.z2-f.z1,R=S*S+L*L,O=R>0?Math.max(0,Math.min(1,((u-f.x1)*S+(_-f.z1)*L)/R)):0,$=f.x1+S*O,J=f.z1+L*O;return Math.hypot(u-$,_-J)<f.r+Ue},Fe=(u,_)=>v.current?u<Pn-2.72||u>Pn+2.72||_<wn-2.05||_>wn+2.3:de.some(f=>Ae(u,_,f)),st=(u,_,f)=>{if(v.current){const R=Math.max(Pn-2.55,Math.min(Pn+2.55,_)),O=Math.max(wn-1.92,Math.min(wn+2.55,f));u.x=R,u.z=O;return}const S=Math.max(-88,Math.min(88,_)),L=Math.max(-89,Math.min(89,f));if(!Fe(S,L)){u.x=S,u.z=L;return}Fe(S,u.z)||(u.x=S),Fe(u.x,L)||(u.z=L)},Ke=Z(3425343,1);for(let u=0;u<22;u++){const _=new Ve,f=-105+u*10,S=8+B(u,7)*9,L=new z(new hn(S,18+B(u,8)*16,7),Ke);L.position.y=8,_.add(L),_.position.set(f,-1,-94+B(u,9)*11),ge(_)}const Pe=[];for(let u=0;u<=32;u++)Pe.push({z:-94+u*6,x:-57+Math.sin(u*.42)*4.2});const dt=[],K=[],Te=5.4;for(let u=0;u<Pe.length;u++){const _=Pe[u],f=Pe[Math.max(0,u-1)],S=Pe[Math.min(Pe.length-1,u+1)],L=S.x-f.x,R=S.z-f.z,O=Math.max(.001,Math.hypot(L,R)),$=-R/O,J=L/O,F=X(_.x,_.z)+.055;for(const ne of[-1,1]){const se=Te*ne;dt.push(_.x+$*se,F+Math.sin(u*1.7+ne)*.035,_.z+J*se)}if(u<Pe.length-1){const ne=u*2;K.push(ne,ne+1,ne+2,ne+1,ne+3,ne+2)}}const Le=new gn;Le.setAttribute("position",new Rt(dt,3)),Le.setIndex(K),Le.computeVertexNormals();const Ge=new z(Le,new be({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));Ge.receiveShadow=!0,M.add(Ge);const we=[];for(let u=0;u<34;u++){const _=Pe[Math.min(Pe.length-1,Math.floor(u*.94))],f=.7+B(u,1500)*1.35,S=new z(new Rm(f*.45,f,12),new bt({color:10998996,transparent:!0,opacity:.12,side:Gt}));S.rotation.x=-Math.PI/2,S.scale.y=.42,S.position.set(_.x+(B(u,1501)-.5)*4.5,X(_.x,_.z)+.075,_.z+(B(u,1502)-.5)*4),M.add(S),we.push({mesh:S,phase:B(u,1503)*Math.PI*2})}for(let u=0;u<52;u++){const _=Math.min(Pe.length-1,Math.floor(u*.62)),f=Pe[_],S=Pe[Math.max(0,_-1)],L=Pe[Math.min(Pe.length-1,_+1)],R=L.x-S.x,O=L.z-S.z,$=Math.max(.001,Math.hypot(R,O)),J=u%2===0?-1:1,F=.34+B(u,15)*.72,ne=Te+J*(.25+B(u,16)*1.4),se=new z(new an(F,1),Z(6185562,1));se.position.set(f.x+-O/$*ne,X(f.x,f.z)+.18,f.z+R/$*ne),se.scale.y=.5+B(u,17)*.35,ge(se),De(se.position.x,se.position.z,F*.75,.03)}const me=(u,_)=>{const f=u.map(([$,J])=>new W($,X($,J)+.035,J)),S=[],L=[];for(let $=0;$<f.length;$++){const J=f[Math.max(0,$-1)],F=f[Math.min(f.length-1,$+1)],ne=F.x-J.x,se=F.z-J.z,Re=Math.max(.001,Math.hypot(ne,se)),_e=-se/Re,Ze=ne/Re;if(S.push(f[$].x+_e*_/2,f[$].y,f[$].z+Ze*_/2,f[$].x-_e*_/2,f[$].y+.01,f[$].z-Ze*_/2),$<f.length-1){const mt=$*2;L.push(mt,mt+1,mt+2,mt+1,mt+3,mt+2)}}const R=new gn;R.setAttribute("position",new Rt(S,3)),R.setIndex(L),R.computeVertexNormals();const O=new z(R,new be({map:pe("road"),roughness:1}));O.receiveShadow=!0,M.add(O),[-_*.22,_*.22].forEach($=>{const J=f.map((se,Re)=>{const _e=f[Math.max(0,Re-1)],Ze=f[Math.min(f.length-1,Re+1)],mt=Ze.x-_e.x,Lt=Ze.z-_e.z,tn=Math.max(.001,Math.hypot(mt,Lt));return new W(se.x+-Lt/tn*$,se.y+.045,se.z+mt/tn*$)}),F=new ja(new gp(J),Math.max(12,f.length*4),.055,5,!1),ne=new z(F,Z(3352863,1));ne.scale.y=.12,M.add(ne)})};me([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),me([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),me([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),me([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),me([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),me([[4,14],[-3,22],[-7,31],[-8,42]],3.8),me([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),me([[4,14],[10,28],[18,41],[27,57]],3.8),me([[5,31],[15,45],[27,57],[39,70]],3.7),me([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),me([[-39,-8],[-47,-12],[-53,-15]],3.4);const je=pe("wood");je.repeat.set(2,1);const at=pe("roof");at.repeat.set(2,2);const wt=(u,_,f,S,L,R,O,$,J)=>{const F=new Ve;F.rotation.y=L,F.position.set(u,X(u,_),_),F.userData={id:O,label:R};const ne=new be({map:je,color:$,roughness:.94,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.014}),se=G(f+.7,.55,S+.7,5724755,1);se.position.y=.28,F.add(se);for(let Ut=0;Ut<7;Ut++){const Ft=.62+Ut*.47,fn=Ye(f-Ut%2*.2,.29,$);fn.material=ne,fn.position.set(0,Ft,S*.5-.03),F.add(fn);const Bn=fn.clone();Bn.position.z=-S*.5+.03,F.add(Bn);const si=Ye(S+.06,.29,$);si.material=ne,si.rotation.y=Math.PI/2,si.position.set(-f*.5+.03,Ft,0),F.add(si);const Be=si.clone();Be.position.x=f*.5-.03,F.add(Be)}for(const Ut of[-f*.5,f*.5])for(const Ft of[-S*.5,S*.5]){const fn=Xe(.34,3.75,3482649,8,1);fn.position.set(Ut,2.05,Ft),F.add(fn)}const Re=G(1.18,2.05,.18,2365458,1);Re.position.set(0,1.37,S*.5+.31),F.add(Re);for(const Ut of[-.67,.67]){const Ft=G(.15,2.28,.24,3811613,1);Ft.position.set(Ut,1.42,S*.5+.34),F.add(Ft)}const _e=Ye(1.65,.11,3679770);_e.position.set(0,2.53,S*.5+.34),F.add(_e);const Ze=Xe(.055,.12,13015634,8,.55);Ze.rotation.z=Math.PI/2,Ze.position.set(.33,1.38,S*.5+.43),F.add(Ze);const mt=new be({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Ut of[-f*.27,f*.27]){const Ft=G(1.28,1.02,.13,3154457,1);Ft.position.set(Ut,2.02,S*.5+.29),F.add(Ft);const fn=G(.94,.7,.055,15251295,.45);fn.material=mt,fn.position.set(Ut,2.02,S*.5+.36),F.add(fn);const Bn=G(.07,.78,.09,3154457,1);Bn.position.set(Ut,2.02,S*.5+.4),F.add(Bn);const si=G(1.05,.07,.09,3154457,1);si.position.set(Ut,2.02,S*.5+.4),F.add(si)}const Lt=N(f+1.55,S+1.35,J);Lt.position.y=4.18,F.add(Lt);for(const Ut of[-1,1]){const Ft=Ye(S+1.48,.12,3154715);Ft.position.set(Ut*(f*.46),3.78,0),Ft.rotation.y=Math.PI/2,F.add(Ft)}const tn=Ye(S+1.45,.18,2760730);tn.rotation.y=Math.PI/2,tn.position.y=5.28,F.add(tn);const kt=G(f*.34,.16,1.05,6439467,1);kt.position.set(0,.64,S*.5+.66),F.add(kt);for(const Ut of[-f*.16,f*.16]){const Ft=Ye(.85,.08,4796447);Ft.rotation.y=Math.PI/2,Ft.position.set(Ut,.83,S*.5+.95),F.add(Ft)}const Yt=Xe(.34,2,5722958,8,1);Yt.position.set(f*.25,5.05,-S*.1),F.add(Yt);const jt=G(.72,.14,.72,3157289,1);jt.position.set(f*.25,6.08,-S*.1),F.add(jt),ge(F,O,R),b.push(F),ye(u,_,f+.85,S+.85,L,.05)};wt(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),wt(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),wt(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),wt(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),wt(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),wt(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const ot=new Ve;ot.position.set(-10,X(-10,-5),-5),ot.userData={id:"forge",label:"Кузница"};for(let u=0;u<7;u++){const _=.62+u*.47,f=Ye(9,.27,4401693);f.position.set(0,_,-2.85),ot.add(f);const S=Ye(6,.27,4401693);S.rotation.y=Math.PI/2,S.position.set(-4.35,_,0),ot.add(S)}for(const u of[-4.35,4.35]){const _=Xe(.34,4,2825493,9,1);_.position.set(u,2,-2.85),ot.add(_)}const Ai=N(9.8,7,2433825);Ai.position.y=4.45,ot.add(Ai);const ri=Ye(7.2,.18,2169366);ri.rotation.y=Math.PI/2,ri.position.y=5.42,ot.add(ri);for(const u of[-3.7,3.7]){const _=Ye(4.7,.13,2825494);_.rotation.z=u<0?-.6:.6,_.position.set(u*.48,3.15,.1),ot.add(_)}const ia=Xe(1.15,1.65,3420462,10,1);ia.position.set(-2,.83,1.15),ot.add(ia);const Qi=Xe(.88,.35,2565925,10,1);Qi.position.set(-2,1.83,1.15),ot.add(Qi);const ps=new z(new $n(.52,16),new be({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));ps.rotation.y=Math.PI,ps.position.set(-2,1.02,2.23),ot.add(ps);const ra=Xe(.27,.85,2697770,8,.45);ra.position.set(1.15,.43,1.05),ot.add(ra);const sa=G(1.45,.34,.58,2435114,.38);sa.position.set(1.15,1,1.05),ot.add(sa);const Ir=new z(new hn(.18,.72,8),Z(2435114,.38,.05));Ir.rotation.z=-Math.PI/2,Ir.position.set(1.98,1,1.05),ot.add(Ir);for(let u=0;u<4;u++){const _=Ye(1.25,.045,11184548);_.rotation.z=-.35+u*.18,_.position.set(2.05+u*.18,1.12,1.34),ot.add(_)}const Js=G(1.15,.42,.62,3876893,1);Js.position.set(2.15,.72,-.8),Js.rotation.z=-.18,ot.add(Js);const Lr=Xe(.07,.55,5980979,8,1);Lr.rotation.z=Math.PI/2,Lr.position.set(1.55,.84,-.8),ot.add(Lr),ge(ot,"forge","Кузница"),b.push(ot),ye(-10,-5,9.6,6.6,0,.05);const oa=new Vi(16742962,3.4,14,2);oa.position.set(-12,X(-12,-5)+2.2,-4),M.add(oa);const ms=new z(new $n(8.5,32),new be({color:7035463,roughness:1}));ms.rotation.x=-Math.PI/2,ms.position.set(1,X(1,0)+.05,0),ms.receiveShadow=!0,M.add(ms);for(let u=0;u<18;u++){const _=u/18*Math.PI*2,f=new z(new an(.38,1),Z(7039843,1));f.position.set(1+Math.cos(_)*8.8,X(1+Math.cos(_)*8.8,Math.sin(_)*8.8)+.22,Math.sin(_)*8.8),M.add(f)}const El=(u,_)=>{const f=new Ve,S=G(2.8,.22,1,6832937,1);S.position.y=1.05,f.add(S);for(const L of[-1.05,1.05]){const R=G(.16,1,.16,3877149,1);R.position.set(L,.5,-.32),f.add(R);const O=R.clone();O.position.z=.32,f.add(O)}f.position.set(u,X(u,_),_),M.add(f)};El(-4,2),El(7,3);const gs=(u,_,f)=>{const S=new Ve;S.position.set(u,X(u,_),_);for(let F=0;F<7;F++){const ne=F/7*Math.PI*2,se=new z(new an(.32*f,1),Z(6117970,1));se.position.set(Math.cos(ne)*.7*f,.25*f,Math.sin(ne)*.7*f),S.add(se)}const L=G(.2*f,.2*f,1.5*f,4861211,1),R=L.clone();L.rotation.y=.55,R.rotation.y=-.55,L.position.y=R.position.y=.38*f,S.add(L,R);const O=new be({color:16744744,emissive:16731402,emissiveIntensity:4}),$=new z(new hn(.5*f,1.35*f,8),O);$.position.y=1.02*f,S.add($),M.add(S);const J=new Vi(16747068,2.4*f,12*f,2);return J.position.set(u,X(u,_)+2*f,_),M.add(J),ie.push({light:J,flame:$,phase:B(u,_)*8}),S},pi=new Ve;pi.userData={id:"mimir",label:"Колодец Мимира"},pi.position.set(1,X(1,0),0);const aa=new z(new $n(1.18,32),new be({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));aa.rotation.x=-Math.PI/2,aa.position.y=.5,pi.add(aa);for(let u=0;u<3;u++){const _=new z(new Ot(.38+u*.28,.025,6,40),new bt({color:u===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));_.rotation.x=Math.PI/2,_.position.y=.525,pi.add(_)}for(const u of[-1.35,1.35]){const _=G(.24,3,.24,4861984,1);_.position.set(u,1.55,0),pi.add(_)}const Tl=G(3.15,.26,.26,3679513,1);Tl.position.y=2.96,pi.add(Tl);const Al=new z(new Je(.035,.035,1.2,6),Z(8086088,1));Al.position.y=2.25,pi.add(Al);const C=G(.58,.5,.58,5913383,1);C.position.set(0,1.65,0),pi.add(C);const Q=new z(new Ot(1.55,.055,8,48),new be({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));Q.rotation.x=Math.PI/2,Q.position.y=.54,pi.add(Q),ge(pi,"mimir","Колодец Мимира"),b.push(pi),De(1,0,2,.08);const le=new Vi(7530656,2,10,2);le.position.set(1,X(1,0)+1.5,0),M.add(le),gs(18,-15,.72);const ae=(u,_,f,S,L=1.25)=>{const R=new Ve,O=f-u,$=S-_,J=Math.hypot(O,$),F=Math.max(1,Math.floor(J/1.55));for(let ne=0;ne<=F;ne++){const se=ne/F,Re=u+O*se,_e=_+$*se,Ze=G(.18,L,.18,4796447,1);Ze.position.set(Re,X(Re,_e)+L/2,_e),R.add(Ze)}for(const ne of[-.28,.38]){const se=G(.14,.14,J,5978917,1);se.rotation.y=Math.atan2(O,$),se.position.set((u+f)/2,X((u+f)/2,(_+S)/2)+L*ne,(_+S)/2),R.add(se)}M.add(R),$e(u,_,f,S,.12,.02)},te=(u,_,f,S,L,R,O)=>{const $=new Ve;$.position.set(u,X(u,_),_),$.rotation.y=L,$.userData={id:O,label:R};const J=G(f+.25,.35,S+.25,5591368,1);J.position.y=.18,$.add(J);const F=new z(new Vn(f,2.5,S),new be({map:je,color:6439983,roughness:1}));F.position.y=1.45,$.add(F);const ne=new z(new Vn(f+.6,.18,S+.65),new be({map:at,color:2696996,roughness:1}));ne.rotation.z=.55,ne.position.set(-.16,3,0),$.add(ne);const se=ne.clone();se.rotation.z=-.55,se.position.x=.16,$.add(se);const Re=G(1.05,1.75,.12,2759700,1);Re.position.set(0,1.05,S/2+.07),$.add(Re),ge($,O,R),b.push($),ye(u,_,f+.55,S+.55,L,.04)},Se=(u,_,f=1)=>{const S=new Ve;S.position.set(u,X(u,_),_);const L=new z(new Je(.65*f,.65*f,1.2*f,10),Z(9073729,1));L.rotation.z=Math.PI/2,L.position.y=.62*f,S.add(L);for(let R=0;R<3;R++){const O=new z(new Ot(.66*f,.025*f,5,18),Z(5851693,1));O.rotation.y=Math.PI/2,O.position.y=(.28+R*.34)*f,S.add(O)}ge(S)},Ne=(u,_,f)=>{const S=new Ve;S.position.set(u,X(u,_),_),S.rotation.y=f;const L=G(2.8,.28,1.45,6636331,1);L.position.y=1,S.add(L);for(const O of[-1.15,1.15])for(const $ of[-.55,.55]){const J=G(.16,1.15,.16,4401950,1);J.position.set(O,.55,$),S.add(J)}for(const O of[-1.15,1.15]){const $=new z(new Je(.5,.5,.18,14),Z(2696738,1));$.rotation.z=Math.PI/2,$.position.set(O,.52,-.92),S.add($)}const R=G(.16,.16,2.4,4796447,1);R.rotation.x=Math.PI/2,R.position.set(0,.72,-2),S.add(R),ge(S)},qe=(u,_,f=0)=>{const S=new Ve;S.position.set(u,X(u,_),_),S.rotation.y=f;const L=G(2.2,.16,.5,7359021,1);L.position.y=.85,S.add(L);for(const R of[-.78,.78]){const O=G(.12,.8,.12,4139549,1);O.position.set(R,.4,0),S.add(O)}ge(S)},He=(u,_)=>{const f=new Ve;f.position.set(u,X(u,_),_);for(let O=0;O<10;O++){const $=O/10*Math.PI*2,J=G(.45,.38,.38,6710621,1);J.position.set(Math.cos($)*.95,.19,Math.sin($)*.95),J.rotation.y=$,f.add(J)}const S=G(.16,2.2,.16,4861984,1),L=S.clone();S.position.set(-.9,1.2,0),L.position.set(.9,1.2,0),f.add(S,L);const R=G(2,.16,.16,3876891,1);R.position.y=2.25,f.add(R),ge(f)};te(-19,31,8,5,.08,"Амбар","barn"),te(17,34,7,5,-.2,"Сарай","shed"),te(27,13,6,4,.45,"Склад рыбака","fishshed"),ae(-25,27,-13,27),ae(-25,27,-25,38),ae(-25,38,-14,38),ae(12,29,25,29),ae(25,29,25,40),ae(25,40,12,40),ae(29,-1,39,-1),ae(39,-1,39,10),ae(39,10,30,10);for(const u of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Se(u[0],u[1],u[2]);Ne(-17,24,.18),Ne(29,-5,-.55),qe(-20,23,.18),qe(25,31,-.2),wt(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),wt(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),wt(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),wt(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),ye(-31,8,7.8,5.8,.1,.04),ye(-27,20,7.8,5.8,-.25,.04),ye(31,18,7.8,5.8,.32,.04),ye(20,24,7.8,5.8,-.12,.04);const it=(u,_,f)=>{const S=new Ve;S.position.set(u,X(u,_),_),S.rotation.y=f;const L=G(3,.18,1.25,7357994,1);L.position.y=1.45,S.add(L);for(const O of[-1.25,1.25])for(const $ of[-.48,.48]){const J=G(.13,1.45,.13,4270877,1);J.position.set(O,.72,$),S.add(J)}const R=new z(new hn(1.65,2.5,4,1,!1,Math.PI/4),Z(4798510,1));R.scale.z=.55,R.position.y=2.15,S.add(R),ge(S)};it(-5,-7,.12),it(8,-5,-.18),it(6,7,.5);for(const u of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])He(u[0],u[1]);const lt=(u,_,f=1)=>{const S=new Ve,L=X(u,_);for(let R=0;R<5;R++){const O=new z(new ut((.28+B(R,u)*.18)*f,8,6),Z(R%2?3494457:4284223,1));O.position.set((B(R,2)-.5)*.7*f,.28*f,(B(R,3)-.5)*.7*f),S.add(O)}S.position.set(u,L,_),ge(S)};for(let u=0;u<48;u++){const _=B(u,501)*Math.PI*2,f=18+B(u,502)*39,S=Math.cos(_)*f,L=Math.sin(_)*f+4;Math.abs(S)<9&&Math.abs(L)<14||lt(S,L,.65+B(u,503)*.75)}for(let u=0;u<34;u++){const _=-84+B(u,610)*168,f=-82+B(u,611)*164;if(Math.hypot(_,f-2)<24)continue;const S=.25+B(u,612)*.55,L=new z(new an(S,1),Z(5725013,1));L.scale.y=.55,L.position.set(_,X(_,f)+S*.28,f),L.rotation.set(B(u,613),B(u,614),B(u,615)),ge(L),De(_,f,S*.8,.03)}wt(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),te(-58,42,6,4,-.12,"Старый амбар","oldbarn"),ae(-70,32,-60,32),ae(-70,32,-70,43),ae(-70,43,-61,43),Se(-68,8,.9),Ne(-62,2,-.25),He(-58,4);const et=new Ve;et.position.set(-63,X(-63,47),47);for(let u=0;u<6;u++){const _=G(10,.035,.12,4208682,1);_.position.set(0,.02,(u-2.5)*1.05),_.rotation.y=.06,et.add(_)}ge(et);const ft=(u,_)=>{const f=document.createElement("canvas");f.width=f.height=256;const S=f.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=_,S.shadowBlur=18,S.fillStyle=_,S.font="bold 150px serif",S.fillText(u,128,132),S.shadowBlur=4,S.globalAlpha=.55,S.font="bold 118px serif",S.fillText(u,128,132);const L=new Ts(f);return L.colorSpace=Nn,L.anisotropy=4,L},vt=(u,_,f,S,L,R=.72,O=0)=>{const $="#"+L.toString(16).padStart(6,"0"),J=new bt({map:ft(S,$),transparent:!0,depthWrite:!1,side:Gt}),F=new z(new Ln(R,R),J);return F.rotation.x=-Math.PI/2,F.rotation.z=O,F.position.set(_,.065,f),u.add(F),F},_t=new Ve,Bt=18,Nt=55;_t.position.set(Bt,X(Bt,Nt),Nt),_t.userData={id:"runefield",label:"Поле Рун"};const tt=new be({color:5857629,roughness:.94,metalness:.04}),Kt=new be({color:3884096,roughness:1});new bt({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Gt}),new bt({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Gt}),new bt({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Gt});const At=new z(new $n(12.2,48),new be({color:2636332,roughness:1,transparent:!0,opacity:.92}));At.rotation.x=-Math.PI/2,At.position.y=.018,_t.add(At);const kn=new z(new Je(2.15,2.55,.48,10),Kt);kn.position.y=.24,kn.scale.z=.82,_t.add(kn);const ki=new z(new an(1.48,1),tt);ki.scale.set(1,1.65,.72),ki.position.y=1.38,ki.rotation.y=.18,_t.add(ki);const Cn=new z(new an(.78,1),tt);Cn.scale.set(.72,1.15,.55),Cn.position.set(0,2.72,.02),Cn.rotation.z=.06,_t.add(Cn);const Dr=vt(_t,0,0,"ᚠ",10481407,1.15,0);Dr.position.y=2.55,Dr.rotation.x=0;const qt=new Vi(7793407,1.7,9,2);qt.position.set(0,2,.8),_t.add(qt);for(const[u,_]of[[3,.075],[7.1,.065],[10.1,.045]]){const f=new z(new Ot(u,_,8,96),new bt({color:15320941,transparent:!0,opacity:u<8?.82:.58,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.055,_t.add(f)}const vn=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let u=0;u<16;u++){const _=u/16*Math.PI*2;vt(_t,Math.cos(_)*8.55,Math.sin(_)*8.55,vn[u],u%3===0?15055195:u%3===1?7857653:12093423,.62,_+.18)}for(let u=0;u<12;u++){const _=u/12*Math.PI*2+.13;vt(_t,Math.cos(_)*5.45,Math.sin(_)*5.45,vn[(u+5)%vn.length],u%2?7659506:12684269,.38,_)}for(let u=0;u<10;u++){const _=u/10*Math.PI*2+.16,f=9.15+(.5-B(u,1202))*1,S=2.4+B(u,1203)*2,L=.72+B(u,1204)*.48,R=new z(new an(.82+B(u,1205)*.22,1),tt);R.scale.set(L,S,.72+B(u,1206)*.28),R.position.set(Math.cos(_)*f,R.scale.y*.58,Math.sin(_)*f),R.rotation.set((B(u,1207)-.5)*.22,_+(B(u,1208)-.5)*.3,(B(u,1209)-.5)*.18),_t.add(R);const O=vn[u%vn.length],$=ft(O,u%3===0?"#8eeeff":u%3===1?"#c08cff":"#ffd86b"),J=new z(new Ln(.62,.92),new bt({map:$,transparent:!0,depthWrite:!1,side:Gt}));J.position.set(R.position.x+Math.cos(_)*.68,R.position.y*.76,R.position.z+Math.sin(_)*.68),J.rotation.y=-_+Math.PI*.5,_t.add(J);const F=new Vi(u%3===1?11628031:u%3===0?6479359:15055195,.35,3.6,2);F.position.set(R.position.x,R.position.y*.72,R.position.z),_t.add(F)}for(let u=0;u<18;u++){const _=B(u,1220)*Math.PI*2,f=6.8+B(u,1221)*4.3;to(_t,Math.cos(_)*f,.22,Math.sin(_)*f,.28+B(u,1222)*.35,u%2?5003088:5857882,1223+u)}for(let u=0;u<10;u++){const _=B(u,1230)*Math.PI*2,f=2.6+B(u,1231)*6.6,S=new z(new Je(.06,.09,.035,7),new be({color:10191179,metalness:.6,roughness:.45}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(_)*f,.09,Math.sin(_)*f),_t.add(S)}ge(_t,"runefield","Поле Рун"),b.push(_t),De(Bt,Nt,1.8,.08);const On=(u,_,f,S)=>{const L=new Ve,R=f-u,O=S-_,$=Math.hypot(R,O),J=Math.floor($/1.7);for(let ne=0;ne<=J;ne++){const se=ne/J,Re=u+R*se,_e=_+O*se,Ze=new z(new hn(.24,.24+2.8+B(ne,u)*.5,6),Z(3942940,1));Ze.position.set(Re,X(Re,_e)+1.45,_e),L.add(Ze)}const F=G(.3,.35,$,2957593,1);F.rotation.y=Math.atan2(R,O),F.position.set((u+f)/2,X((u+f)/2,(_+S)/2)+1.25,(_+S)/2),L.add(F),M.add(L),$e(u,_,f,S,.34,.08)};On(-30,-31,-8,-31),On(8,-31,30,-31),On(-30,-31,-30,-13),On(30,-31,30,16);const dn=new Ve;dn.userData={id:"gate",label:"Ворота Мидгарда"};for(const u of[-4.2,4.2]){const _=G(.8,6,.8,3482906,1);_.position.set(u,3,-31),dn.add(_)}const zn=G(10,.8,1,2957336,1);zn.position.set(0,6,-31),dn.add(zn);for(let u=-3;u<=3;u++){const _=G(1,4.2,.22,5978660,1);_.position.set(u*1.15,2,-30.7),dn.add(_)}ge(dn,"gate","Ворота Мидгарда"),b.push(dn),De(-4.2,-31,.55,.05),De(4.2,-31,.55,.05);const sn=new Ve;sn.userData={id:"norns",label:"Прядильня норн"},sn.position.set(-52,X(-52,38),38);const ur=Z(4927522,1),qx=Z(2826523,1),Lm=G(5.7,.28,.28,5847592,1);Lm.position.set(0,3.8,0),sn.add(Lm);const Dm=G(5,.25,.32,3877151,1);Dm.position.set(0,.65,.15),sn.add(Dm);for(const u of[-2.45,2.45]){const _=G(.28,3.55,.3,5321763,1);_.position.set(u,2.15,0),_.rotation.z=u>0?.08:-.08,sn.add(_)}const Fu=new z(new Ot(2.05,.18,8,32),ur);Fu.rotation.y=Math.PI/2,Fu.position.set(0,2.25,-.8),sn.add(Fu);const ku=new z(new Je(.28,.32,.38,10),qx);ku.rotation.z=Math.PI/2,ku.position.set(0,2.25,-.8),sn.add(ku);for(let u=0;u<10;u++){const _=u/10*Math.PI*2,f=G(.08,.08,1.85,5913384,1);f.position.set(Math.cos(_)*.92,2.25+Math.sin(_)*.92,-.8),f.rotation.z=-_,sn.add(f)}const Yx=["URD","VERDANDI","SKULD"],$x=[8640767,15198177,14908296];for(let u=0;u<3;u++){const _=(u-1)*2,f=new z(new an(.78,1),new be({color:4541257,roughness:.92,metalness:.05}));f.scale.set(.9,1.18+B(u,1290)*.2,.72),f.position.set(_,1.35,.18),f.rotation.set(0,(u-1)*.16,0),sn.add(f);const S=ft(u===0?"ᚢ":u===1?"ᚹ":"ᛋ",u===0?"#8fe6ff":u===1?"#f1f1ec":"#ef8d9a"),L=new z(new Ln(.48,.62),new bt({map:S,transparent:!0,depthWrite:!1,side:Gt}));L.position.set(_,1.42,.86),L.rotation.y=Math.PI,sn.add(L);const R=document.createElement("canvas");R.width=320,R.height=96;const O=R.getContext("2d");O.clearRect(0,0,320,96),O.textAlign="center",O.textBaseline="middle",O.font="bold 34px serif",O.fillStyle=u===0?"#9fe9ff":u===1?"#f4f4ef":"#ef91a0",O.shadowColor=O.fillStyle,O.shadowBlur=12,O.fillText(Yx[u],160,48);const $=new Ts(R);$.colorSpace=Nn;const J=new z(new Ln(1.55,.46),new bt({map:$,transparent:!0,depthWrite:!1,side:Gt}));J.position.set(_,.55,.86),J.rotation.y=Math.PI,sn.add(J);const F=new Vi($x[u],.45,4.5,2);F.position.set(_,1.55,1),sn.add(F)}const Nm=[15123551,15263973,14245748];for(let u=0;u<3;u++){const _=[];for(let f=0;f<=18;f++){const S=f/18,L=1.9+S*4.6,R=(u-1)*2+Math.sin(S*Math.PI*2+u*1.7)*(.45+.5*S),O=.35+Math.cos(S*Math.PI*2+u)*.45;_.push(new W(R,L,O))}sn.add(new g1(new gn().setFromPoints(_),new mp({color:Nm[u],transparent:!0,opacity:.9})))}for(let u=0;u<3;u++){const _=new z(new Ot(1.15+u*.18,.045,6,32),new bt({color:Nm[u],transparent:!0,opacity:.75,depthWrite:!1}));_.position.set((u-1)*.38,6.15,.15),_.rotation.set(.4,u*.65,.2),sn.add(_)}const Ou=new z(new Ot(4.6,.065,8,72),new bt({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));Ou.rotation.x=Math.PI/2,Ou.position.y=.05,sn.add(Ou);for(let u=0;u<18;u++){const _=B(u,1300)*Math.PI*2,f=2.5+B(u,1301)*3.1,S=new z(new Je(.12,.12,.16,9),new be({color:[10184008,7174032,9261927,7828045][u%4],roughness:.8}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(_)*f,.12,Math.sin(_)*f),sn.add(S)}for(let u=0;u<9;u++)vt(sn,(B(u,1315)-.5)*7.5,(B(u,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][u%5],u%2?9428976:14134881,.34,B(u,1317)*Math.PI);ge(sn,"norns","Прядильня норн"),b.push(sn),De(-52,38,3,.1);const Qs=new Ve;Qs.userData={id:"rune",label:"Древний камень Феху"},Qs.position.set(50,X(50,60),60);const Um=new z(new an(1.45,1),Z(5002063,1));Um.position.y=1.2,Qs.add(Um);const zu=new z(new Ot(1.05,.07,8,30),new be({color:16766826,emissive:10052371,emissiveIntensity:3}));zu.rotation.x=Math.PI/2,zu.position.y=1.2,Qs.add(zu),ge(Qs,"rune","Древний камень Феху"),b.push(Qs),De(50,60,1.7,.1);const bl=new Ve;bl.userData={id:"port",label:"Мост к причалу"};for(let u=-5;u<=5;u++){const _=G(3.6,.28,.82,6307882,1);_.position.set(-53,X(-53,u*1)+.5,u),bl.add(_)}ge(bl,"port","Мост к причалу"),b.push(bl);const eo=new Ve;eo.position.set(-45,X(-45,-48),-48);for(let u=0;u<7;u++){const _=G(2.8,.24,.72,7030573,1);_.position.set(0,.3,u*.85),eo.add(_)}for(const u of[-1.2,1.2])for(let _=0;_<3;_++){const f=G(.22,1.5,.22,4139292,1);f.position.set(u,-.2,_*2.5),eo.add(f)}const Fm=G(2.2,.55,4.8,4926493,1);Fm.position.set(3,-.15,2.5),eo.add(Fm),ge(eo,"port","Речной причал"),b.push(eo);const Kx=(u,_)=>{const f=new z(new Je(.5,.5,1,12),Z(6636332,1));f.position.set(u,X(u,_)+.5,_),M.add(f);for(const S of[.25,.76]){const L=new z(new Ot(.51,.045,6,18),Z(3156004,.7,.1));L.rotation.x=Math.PI/2,L.position.set(u,X(u,_)+S,_),M.add(L)}},Zx=(u,_)=>{const f=G(1,.75,1,7359022,1);f.position.set(u,X(u,_)+.38,_),M.add(f);const S=G(.08,.82,1.05,3679770,1);S.position.set(u,X(u,_)+.38,_),M.add(S),ye(u,_,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([u,_])=>Kx(u,_)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([u,_])=>Zx(u,_));const Jx=(u,_,f)=>{const S=new Ve,L=X(u,_),R=new be({map:ze,color:16777215,roughness:.98,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.034}),O=new z(new Je(.18*f,.38*f,5.2*f,9),R);O.position.y=2.6*f,O.rotation.z=(B(u,_)-.5)*.08,O.scale.x=1.08+B(u,_+4)*.22,S.add(O);for(let J=0;J<9;J++){const F=(1.15+J*.47)*f,ne=J%2?1:-1,se=(.9+J*.16)*f,Re=new z(new Je(.035*f,.095*f,se,7),R);Re.position.set(ne*(.28+J*.035)*f,F,(B(J,_)-.5)*.38*f),Re.rotation.z=ne*(.62-B(J,u)*.18),Re.rotation.y=B(J+21,_)*Math.PI*2,S.add(Re)}const $=[2904370,3893312,4946505];for(let J=0;J<12;J++){const F=Math.max(.48,1.42-J*.075)*f,ne=new z(Q1(new ut(F,10,7),.18*f,J+Math.round(u*3+_*5)),new be({map:pt,color:$[J%3],roughness:.995}));ne.scale.set(1+B(J,u)*.25,.55+B(J,_)*.16,.82+B(J*2,u)*.22),ne.position.set((B(J*4,u)-.5)*.58*f,(1.55+J*.37)*f,(B(J*5,_)-.5)*.55*f),S.add(ne)}for(let J=0;J<3;J++){const F=new z(new ut(.38*f,7,5),new be({color:J%2?3231030:4021565,roughness:1}));F.scale.set(1.5,.28,.85),F.position.set((J-1)*.45*f,.55*f,(B(J,88)-.5)*.5*f),S.add(F)}for(let J=0;J<4;J++){const F=new z(new ut((.11+B(J,77)*.08)*f,7,5),R);F.scale.set(1.35,.72,.82),F.position.set((J%2?1:-1)*.18*f,(1+J*.78)*f,.29*f),F.rotation.y=J%2*Math.PI,S.add(F)}for(let J=0;J<4;J++){const F=J/4*Math.PI*2+.4,ne=(.55+B(J,79)*.7)*f,se=new z(new Je(.045*f,.12*f,ne,6),R);se.position.set(Math.cos(F)*ne*.42,.14*f,Math.sin(F)*ne*.42),se.rotation.z=Math.cos(F)*.85,se.rotation.x=-Math.sin(F)*.85,se.rotation.y=-F,S.add(se)}S.position.set(u,L,_),ge(S),f>=1.15&&De(u,_,.46*f,.04)},Cl=(u,_,f,S=!1)=>{const L=new Ve,R=X(u,_),O=new be({map:ze,color:16777215,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.034}),$=new z(new Je(.42*f,.72*f,6.4*f,11),O);$.position.y=3.2*f,$.rotation.z=(B(u,_)-.5)*.06,$.scale.x=1.08,L.add($);for(let F=0;F<(S?9:7);F++){const ne=F/(S?9:7)*Math.PI*2+B(F,u)*.18,se=(1+B(F,_)*1.6)*f,Re=new z(new Je(.11*f,.3*f,se,7),O);Re.position.set(Math.cos(ne)*se*.42,.28*f,Math.sin(ne)*se*.42),Re.rotation.z=Math.cos(ne)*.72,Re.rotation.x=-Math.sin(ne)*.72,Re.rotation.y=-ne,L.add(Re)}const J=S?10:8;for(let F=0;F<J;F++){const ne=F/J*Math.PI*2+B(F+11,u)*.22,se=(2+B(F+22,_)*2.2)*f,Re=new z(new Je(.07*f,.19*f,se,8),O);Re.position.set(Math.cos(ne)*se*.34,(3.25+B(F+33,u)*1.9)*f,Math.sin(ne)*se*.34),Re.rotation.z=Math.cos(ne)*.76,Re.rotation.x=Math.sin(ne)*.76,Re.rotation.y=-ne,L.add(Re);for(let _e=0;_e<4;_e++){const Ze=new z(Q1(new ut((.46+B(_e+F,90)*.25)*f,10,7),.14*f,_e+F+17),new be({map:pt,color:[3235641,4355400,5670483][(F+_e)%3],roughness:1}));Ze.scale.y=.62,Ze.position.set(Math.cos(ne)*se*(.52+.09*_e)+(B(_e,F)-.5)*.55*f,(3.9+B(F,_e)*1.45+.25*_e)*f,Math.sin(ne)*se*(.52+.09*_e)+(B(_e+4,F)-.5)*.55*f),L.add(Ze)}}if(S){const F=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ne=0;ne<F.length;ne++){const se=-.9+ne*.46,Re=new z(new Ln(.48*f,.62*f),new bt({map:ft(F[ne],ne%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Gt}));Re.position.set(Math.sin(se)*.56*f,(1.5+ne*.68)*f,Math.cos(se)*.6*f),Re.rotation.y=se,L.add(Re)}}for(let F=0;F<6;F++){const ne=new z(new ut((.16+B(F,121)*.1)*f,7,5),O);ne.scale.set(.55,1.55,.42);const se=B(F,122)*Math.PI*2;ne.position.set(Math.cos(se)*.5*f,(1.05+F*.48)*f,Math.sin(se)*.5*f),ne.rotation.y=-se,L.add(ne)}if(S){const F=new be({map:ze,color:16777215,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.048});for(let ne=0;ne<4;ne++){const se=ne/4*Math.PI*2+.35,Re=(1.35+B(ne,441)*.85)*f,_e=new z(new Je(.1*f,.26*f,Re,8),F);_e.position.set(Math.cos(se)*Re*.34,.48*f,Math.sin(se)*Re*.34),_e.rotation.z=Math.cos(se)*.92,_e.rotation.x=-Math.sin(se)*.92,_e.rotation.y=-se,L.add(_e)}for(let ne=0;ne<6;ne++){const se=-1.25+ne*.48,Re=(2.1+B(ne,452)*1.7)*f,_e=new z(new Je(.045*f,.12*f,Re,7),F);_e.position.set(Math.sin(se)*Re*.46,(5+B(ne,453)*1.6)*f,Math.cos(se)*Re*.46),_e.rotation.z=.72*Math.cos(se),_e.rotation.x=.55*Math.sin(se),_e.rotation.y=-se,L.add(_e)}for(let ne=0;ne<3;ne++){const se=new z(new ut((.13+B(ne,461)*.07)*f,8,6),new be({color:1513748,roughness:1})),Re=-.8+ne*.72;se.scale.set(.55,1.15,.32),se.position.set(Math.sin(Re)*.61*f,(2.05+ne*.65)*f,Math.cos(Re)*.61*f),se.rotation.y=Re,L.add(se)}}L.position.set(u,R,_),ge(L),f>=1.2&&De(u,_,.78*f,.05)},Qx=(u,_,f,S)=>{const L=new Ve,R=new be({color:7031345,roughness:.96}),O=new be({color:8871999,roughness:.96}),$=new be({color:3155230,roughness:1}),J=new be({color:12168600,roughness:.9}),F=new be({color:1512207,roughness:.25}),ne=new z(new ut(.68,14,10),R);ne.scale.set(1.35,.78,.72),ne.position.set(0,.98*f,0),ne.scale.multiplyScalar(f),L.add(ne);const se=new z(new ut(.42,12,9),O);se.scale.set(1,.9,.86),se.position.set(.49*f,1.04*f,0),L.add(se);const Re=new z(new Je(.2*f,.34*f,.98*f,10),R);Re.position.set(.5*f,1.46*f,0),Re.rotation.z=-.3,L.add(Re);const _e=new z(new ut(.34*f,12,9),O);_e.scale.set(1.18,.92,.78),_e.position.set(.86*f,1.82*f,0),L.add(_e);const Ze=new z(new ut(.17*f,10,7),O);Ze.scale.set(1.15,.72,.72),Ze.position.set(1.16*f,1.72*f,0),L.add(Ze);const mt=new z(new ut(.075*f,8,6),$);mt.scale.set(1,.72,.85),mt.position.set(1.3*f,1.72*f,0),L.add(mt);for(const kt of[-1,1]){const Yt=new z(new hn(.095*f,.3*f,7),O);Yt.position.set(.77*f,2.1*f,kt*.2*f),Yt.rotation.z=-.28,Yt.rotation.x=kt*.18,L.add(Yt)}for(const kt of[-1,1]){const Yt=new z(new ut(.035*f,8,6),F);Yt.position.set(1.05*f,1.91*f,kt*.235*f),L.add(Yt);const jt=new z(new ut(.009*f,6,4),new bt({color:16777215}));jt.position.set(1.075*f,1.925*f,kt*.257*f),L.add(jt)}const Lt=[];for(const kt of[-1,1])for(const Yt of[-1,1]){const jt=new Ve;jt.position.set(Yt*.43*f,.76*f,kt*.34*f);const Ut=new z(new Je(.085*f,.11*f,.43*f,7),R);Ut.position.y=-.2*f,jt.add(Ut);const Ft=new Ve;Ft.position.y=-.4*f;const fn=new z(new Je(.055*f,.075*f,.43*f,7),$);fn.position.y=-.2*f,Ft.add(fn);const Bn=new z(new ut(.075*f,7,5),$);Bn.scale.set(1.15,.55,1.25),Bn.position.y=-.43*f,Ft.add(Bn),jt.add(Ft),L.add(jt),Lt.push(jt,Ft)}const tn=new z(new ut(.16*f,9,7),O);tn.scale.set(.75,1.25,.72),tn.position.set(-.9*f,1.18*f,0),L.add(tn);for(const kt of[-1,1]){const Yt=new z(new Je(.04*f,.06*f,.68*f,7),J);Yt.position.set(.69*f,2.25*f,kt*.14*f),Yt.rotation.z=kt*.22,L.add(Yt);for(let jt=0;jt<3;jt++){const Ut=new z(new Je(.02*f,.038*f,.34*f,6),J);Ut.position.set((.56+.11*jt)*f,(2.48+.15*jt)*f,kt*(.14+.045*jt)*f),Ut.rotation.z=kt*(.55-.08*jt),L.add(Ut)}}L.scale.setScalar(1.1),L.position.set(u,X(u,_),_),L.userData={phase:S,legJoints:Lt},ge(L),xe.push({g:L,x:u,z:_,r:4+B(S,41)*3,speed:1.25+B(S,42)*.8,phase:S,kind:"deer"})},ey=(u,_)=>{const f=new Ve,S=Z(6965552,1),L=Z(3089436,1),R=new z(new ut(.22,8,6),S);R.scale.set(1.35,.9,.9),R.position.y=.72,f.add(R);const O=new z(new ut(.17,8,6),S);O.position.set(.22,.86,0),f.add(O);for(const F of[-1,1]){const ne=new z(new hn(.06,.18,6),S);ne.position.set(.17,.99,F*.09),f.add(ne)}const $=new z(new Ot(.24,.075,7,14,Math.PI*1.65),S);$.rotation.y=Math.PI/2,$.position.set(-.22,.91,0),f.add($);const J=new z(new ut(.025,6,4),L);J.position.set(.35,.9,-.12),f.add(J),f.position.set(u,X(u,_),_),ge(f,"ratatosk","Белка Рататоск"),b.push(f),De(u,_,.28,.02),xe.push({g:f,x:u,z:_,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},bi=-5,Ci=75,Bu=new Ve;Bu.userData={id:"ashgrove",label:"Роща Ясеня"};const Hu=new z(new $n(10.5,40),new be({color:2504747,roughness:1,transparent:!0,opacity:.82}));Hu.rotation.x=-Math.PI/2,Hu.position.set(bi,X(bi,Ci)+.02,Ci),M.add(Hu);const ty=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[u,_,f,S]of ty)Cl(bi+u,Ci+_,f,S);const Vu=new z(new Ot(6.4,.07,8,64),new be({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Vu.rotation.x=Math.PI/2,Vu.position.set(bi,X(bi,Ci)+.05,Ci),M.add(Vu);const Gu=new z(new an(1.05,1),Z(5593941,1));Gu.scale.set(1.3,.7,1.05),Gu.position.set(bi,X(bi,Ci)+.65,Ci),M.add(Gu),vt(Bu,0,0,"ᚱ",9430692,1.25,0);for(let u=0;u<26;u++){const _=B(u,1310)*Math.PI*2,f=2.5+B(u,1311)*7.2,S=bi+Math.cos(_)*f,L=Ci+Math.sin(_)*f,R=new z(new Je(.025,.045,.22+B(u,1312)*.28,6),Z(12039579,1));R.position.set(S,X(S,L)+.12,L),M.add(R);const O=new z(new ut(.13+B(u,1313)*.08,8,5),new be({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));O.scale.y=.48,O.position.set(S,X(S,L)+.34,L),M.add(O)}for(let u=0;u<16;u++){const _=B(u,1320)*Math.PI*2,f=2+B(u,1321)*7.5,S=bi+Math.cos(_)*f,L=Ci+Math.sin(_)*f,R=new z(new Je(.07,.07,.025,10),Z(9270341,.5,.55));R.rotation.x=Math.PI/2,R.position.set(S,X(S,L)+.05,L),M.add(R)}b.push(Bu),De(bi,Ci,1,.08);const yn=62,Mn=78,Rl=new Ve;Rl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Wu=new z(new $n(11.5,44),new be({color:2112299,roughness:1,transparent:!0,opacity:.86}));Wu.rotation.x=-Math.PI/2,Wu.position.set(yn,X(yn,Mn)+.025,Mn),M.add(Wu);const km=new be({map:ze,color:16777215,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.034}),Xu=new z(new Je(1.35,2.1,10.5,13),km);Xu.position.set(yn,X(yn,Mn)+5.25,Mn),Xu.rotation.z=-.05,M.add(Xu);for(let u=0;u<8;u++){const _=u/8*Math.PI*2+.2,f=5+B(u,1401)*4,S=new z(new Je(.25,.58,f,9),km);S.position.set(yn+Math.cos(_)*f*.36,X(yn,Mn)+6.8+B(u,1402)*2.2,Mn+Math.sin(_)*f*.36),S.rotation.z=Math.cos(_)*.8,S.rotation.x=Math.sin(_)*.8,S.rotation.y=-_,M.add(S);for(let L=0;L<4;L++){const R=new z(new ut(1+B(L+u,1403)*.55,9,6),new be({map:pt,color:[2312753,2972729,3697474][(u+L)%3],roughness:1}));R.scale.y=.65,R.position.set(yn+Math.cos(_)*f*(.48+.09*L)+(B(L,u)-.5)*1.1,X(yn,Mn)+8+B(u,L)*3+L*.45,Mn+Math.sin(_)*f*(.48+.09*L)+(B(L+5,u)-.5)*1.1),M.add(R)}}for(let u=0;u<9;u++){const _=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][u],f=ft(_,u%2?"#63d9ef":"#f0c65d"),S=new z(new Ln(.7,.9),new bt({map:f,transparent:!0,depthWrite:!1,side:Gt}));S.position.set(yn+Math.sin(u*.63)*1.42,X(yn,Mn)+1+u*.78,Mn+Math.cos(u*.63)*1.42),S.rotation.y=Math.PI*.5-u*.16,M.add(S)}const ju=new z(new an(1.35,1),Z(5199954,1));ju.scale.set(1.45,.7,1.15),ju.position.set(yn,X(yn,Mn)+.75,Mn+1.6),M.add(ju),gs(yn,Mn+2.1,.72);const qu=new z(new Ot(6.7,.06,8,64),new be({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));qu.rotation.x=Math.PI/2,qu.position.set(yn,X(yn,Mn)+.055,Mn),M.add(qu);for(let u=0;u<22;u++){const _=B(u,1410)*Math.PI*2,f=1.8+B(u,1411)*8.2,S=yn+Math.cos(_)*f,L=Mn+Math.sin(_)*f;vt(Rl,S-yn,L-Mn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][u%6],u%2?6804447:14726490,.35,B(u,1412)*Math.PI)}for(let u=0;u<18;u++){const _=["ᚱ","ᚨ","ᛟ","ᚦ"][u%4],f=ft(_,u%2?"#63d9ef":"#e4bd65"),S=new z(new Ln(.34,.44),new bt({map:f,transparent:!0,depthWrite:!1,side:Gt}));S.position.set(yn+(B(u,1420)-.5)*12,1.4+B(u,1421)*7,Mn+(B(u,1422)-.5)*12),S.userData.floatPhase=B(u,1423)*6,M.add(S)}ge(Rl,"hoddmimir","Лес Ходдмимира"),b.push(Rl),De(yn,Mn,1.2,.08);const la=43,ca=32;for(let u=0;u<4;u++)Qx(la+(u-1.5)*2.6,ca+(u%2?2.6:-2.6),1.12+B(u,1440)*.16,10+u);const Om=new z(new an(.72,1),Z(5725526,1));Om.position.set(la,X(la,ca)+.5,ca),M.add(Om);const Yu=new z(new Ot(5.8,.045,7,48),new be({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Yu.rotation.x=Math.PI/2,Yu.position.set(la,X(la,ca)+.035,ca),M.add(Yu),ey(bi+5,Ci+1),((u,_)=>{const f=new Ve;f.position.set(u,X(u,_),_),f.userData={id:"forestCache",label:"Забытый тайник"};const S=new be({map:ze,color:6968381,roughness:1}),L=new be({color:2760987,roughness:1}),R=new z(new Je(2,2.65,4.9,11),S);R.position.y=2.45,R.rotation.z=-.035,f.add(R);for(let _e=0;_e<7;_e++){const Ze=1.3+B(_e,1250)*2.7,mt=new z(new hn(.32+B(_e,1251)*.3,Ze,6),S),Lt=B(_e,1252)*Math.PI*2,tn=.55+B(_e,1253)*1.35;mt.position.set(Math.cos(Lt)*tn,4.75+Ze*.42,Math.sin(Lt)*tn),mt.rotation.z=(B(_e,1254)-.5)*.55,mt.rotation.x=(B(_e,1255)-.5)*.55,f.add(mt)}const O=new z(new ut(1.18,16,10),L);O.scale.set(1,1.18,.46),O.position.set(0,2,2.08),f.add(O);const $=new z(new Ot(1.05,.16,8,28),new be({color:4930349,roughness:1}));$.rotation.x=Math.PI/2,$.position.set(0,2,2.12),$.scale.y=1.15,f.add($);const J=new mp({color:14211280,transparent:!0,opacity:.45});for(let _e=0;_e<6;_e++){const Ze=[new W(-.95+_e*.38,1.15+_e%3*.55,2.15),new W((_e-2.5)*.2,2+_e%2*.3,2.48),new W(-.8+_e*.32,2.95+_e%3*.25,2.12)];f.add(new g1(new gn().setFromPoints(Ze),J))}const F=new z(new ut(.46,10,8),new be({color:5978662,roughness:1}));F.scale.set(.9,1.15,.62),F.position.set(.05,1.45,2.34),f.add(F);const ne=new z(new ut(.07,7,5),new be({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));ne.position.set(.05,1.72,2.77),f.add(ne);for(let _e=0;_e<5;_e++){const Ze=new z(new an(.11,0),new be({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Ze.position.set(-.38+_e*.19,1.02+_e%2*.08,2.5),f.add(Ze)}const se=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let _e=0;_e<6;_e++){const Ze=-1.05+_e*.42,mt=ft(se[_e],_e%2?"#e7bd61":"#7ce5ef"),Lt=new z(new Ln(.45,.62),new bt({map:mt,transparent:!0,depthWrite:!1,side:Gt}));Lt.position.set(Math.sin(Ze)*1.55,1.2+_e*.42,1.93+Math.cos(Ze)*.22),Lt.rotation.y=Math.PI,f.add(Lt)}const Re=new z(new Ot(4.15,.06,8,64),new bt({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Re.rotation.x=Math.PI/2,Re.position.y=.05,f.add(Re);for(let _e=0;_e<10;_e++){const Ze=_e/10*Math.PI*2;vt(f,Math.cos(Ze)*3.65,Math.sin(Ze)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][_e],14859617,.38,Ze+.2)}for(let _e=0;_e<12;_e++){const Ze=B(_e,1270)*Math.PI*2,mt=1.8+B(_e,1271)*3.3,Lt=new z(new Je(.08,.08,.025,9),new be({color:10190147,metalness:.55,roughness:.45}));Lt.rotation.x=Math.PI/2,Lt.position.set(Math.cos(Ze)*mt,.09,Math.sin(Ze)*mt),f.add(Lt)}for(let _e=0;_e<4;_e++){const Ze=G(.08,.08,.75,10393476,1);Ze.position.set((B(_e,1280)-.5)*5,.12,(B(_e,1281)-.5)*5),Ze.rotation.y=B(_e,1282)*Math.PI,f.add(Ze)}ge(f,"forestCache","Забытый тайник"),b.push(f),De(u,_,1.75,.08)})(-72,48);const ny=(u,_,f,S,L)=>{const R=u.distanceTo(_),O=new z(new Vn(f,S,R),L);return O.position.copy(u).add(_).multiplyScalar(.5),O.lookAt(_),O};function to(u,_,f,S,L,R,O){const $=new z(new an(L,1),Z(R,1));return $.scale.set(.72+B(O,1)*.62,.55+B(O,2)*.85,.68+B(O,3)*.55),$.rotation.set(B(O,4)*1.2,B(O,5)*Math.PI,B(O,6)*1.1),$.position.set(_,f,S),u.add($),$}const iy=(u,_)=>{const f=new Ve;f.position.set(u,X(u,_),_),f.userData={id:"fallenAsh",label:"Поверженный ясень"};const S=new z(new Ot(7.8,.07,8,64),new be({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));S.rotation.x=Math.PI/2,S.position.y=.05,f.add(S);const L=new be({map:ze,color:16777215,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.034}),R=new z(new Je(1.45,2.15,4.8,10),L);R.position.set(0,2.4,.2),R.rotation.z=-.04,f.add(R);const O=new z(new ut(.88,12,9),new bt({color:1185043}));O.scale.set(1,.95,.55),O.position.set(0,1.75,1.72),f.add(O);for(let J=0;J<7;J++){const F=-.9+J*.3,ne=2.5+B(J,1500)*2.7,se=new z(new Je(.11,.28,ne,7),L);se.position.set(Math.sin(F)*ne*.34,4+B(J,1501)*2.8,.15+Math.cos(F)*ne*.3),se.rotation.z=Math.sin(F)*.65,se.rotation.x=-Math.cos(F)*.55,se.rotation.y=F,f.add(se)}for(let J=0;J<9;J++){const F=B(J,1510)*Math.PI*2,ne=1.7+B(J,1511)*5.6;to(f,Math.cos(F)*ne,.22,Math.sin(F)*ne,.3+B(J,1512)*.45,J%3?5265490:6251613,1513+J)}for(let J=0;J<8;J++)vt(f,(B(J,1520)-.5)*5.8,(B(J,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][J%4],10473668,.42,B(J,1522)*Math.PI);const $=new z(new ut(.45,10,7),Z(5978919,1));$.scale.set(.9,1.2,.7),$.position.set(0,1.55,1.25),f.add($),ge(f,"fallenAsh","Поверженный ясень"),b.push(f),De(u,_,1.8,.08)},ry=(u,_)=>{const f=new Ve;f.position.set(u,X(u,_),_),f.userData={id:"hunterCamp",label:"Забытая стоянка"};const S=new z(new $n(8.7,40),new be({color:3225644,roughness:1,transparent:!0,opacity:.78}));S.rotation.x=-Math.PI/2,S.position.y=.025,S.scale.set(1.18,.92,1),f.add(S);const L=new Ve;L.position.set(-1.45,.05,-.65),L.rotation.y=-.34,f.add(L);const R=Z(5978920,1);Z(3680030,1);const O=Z(2697768,.82,.35),$=Z(4412730,1),J=G(3.7,.26,1.65,6308141,1);J.position.y=1.05,J.rotation.z=-.08,L.add(J);for(let Be=0;Be<9;Be++){const gt=G(2.8+B(Be,501)*1.1,.16,.26,Be%3?6505775:4928293,1);gt.position.set(-.25+(B(Be,502)-.5)*.25,1.18+(B(Be,503)-.5)*.34,-.72+Be%3*.68),gt.rotation.z=(B(Be,504)-.5)*.16,gt.rotation.y=(B(Be,505)-.5)*.16,L.add(gt)}for(const[Be,gt,Vt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Sn=new z(new Ot(Vt,.14,7,20,Math.PI*1.56),O);Sn.rotation.y=Math.PI/2,Sn.rotation.z=Vt>.8?.08:-.18,Sn.position.set(Be,.9,gt),L.add(Sn);const gi=new z(new Je(.15,.18,.28,8),O);gi.rotation.z=Math.PI/2,gi.position.set(Be,.9,gt),L.add(gi);for(let ys=0;ys<6;ys++){const U0=ys/6*Math.PI*2+.25,yy=new W(Be+Math.cos(U0)*Vt*.82,.9+Math.sin(U0)*Vt*.82,gt+.02),My=new W(Be,.9,gt+.02);L.add(ny(My,yy,.065,.065,O))}}const F=new z(new Vn(3.8,.14,.16),O);F.position.set(0,.62,-.83),F.rotation.z=.08,L.add(F);const ne=new z(new Vn(.16,.18,3.2),R);ne.position.set(1.8,.8,-.35),ne.rotation.y=.9,L.add(ne);for(let Be=0;Be<6;Be++){const gt=new z(new ut(.28+B(Be,507)*.18,7,5),$);gt.scale.set(1.4,.32,.7),gt.position.set(-1.1+Be*.48,1.34+Be%2*.05,-.82),L.add(gt)}const se=new Ve;se.position.set(2.85,.02,1.15),se.rotation.y=.18,f.add(se),Z(4861985,1);for(let Be=0;Be<4;Be++){const gt=Be/4*Math.PI*2+.25,Vt=G(.11,3.7,.11,4861985,1);Vt.position.set(Math.cos(gt)*1.25,1.65,Math.sin(gt)*1.25),Vt.rotation.z=Math.cos(gt)*.34,Vt.rotation.x=-Math.sin(gt)*.34,se.add(Vt)}const Re=new z(new hn(2,3.2,4,1,!0),new be({color:4862247,roughness:1,side:Gt,transparent:!0,opacity:.94}));Re.position.y=1.45,Re.scale.set(1,.9,.82),Re.rotation.y=.78,se.add(Re);for(let Be=0;Be<9;Be++){const gt=new z(new ut(.16+B(Be,509)*.14,6,5),$);gt.scale.set(1.5,.35,.8),gt.position.set((B(Be,510)-.5)*2.4,1+B(Be,511)*1.9,(B(Be,512)-.5)*1.8),se.add(gt)}const _e=G(1.05,1.55,.05,3088668,1);_e.position.set(0,.72,1.65),_e.rotation.y=.16,se.add(_e),gs(u+.1,_+.45,.78);const Ze=new Vi(16751173,1,8,2);Ze.position.set(.1,1.7,.45),f.add(Ze);const mt=new Ve;mt.position.set(-3.15,.5,1.25),mt.rotation.y=.8,mt.rotation.z=-.22,f.add(mt);const Lt=new z(new $n(1.05,16),new be({color:3882041,roughness:.85,metalness:.55,side:Gt}));Lt.rotation.x=-Math.PI/2,Lt.scale.y=.8,mt.add(Lt);const tn=new z(new Ot(1.03,.11,7,18),O);tn.rotation.x=-Math.PI/2,tn.scale.y=.8,mt.add(tn);const kt=new z(new Je(.24,.31,.22,8),O);kt.rotation.x=Math.PI/2,kt.position.set(.18,0,.08),mt.add(kt);const Yt=G(.05,.035,1.15,1513494,1);Yt.position.set(-.28,.025,.05),Yt.rotation.y=.42,mt.add(Yt),Z(2960425,.65,.45);const jt=(Be,gt,Vt)=>{const Sn=new Ve;Sn.position.set(Be,.18,gt),Sn.rotation.y=Vt;const gi=G(.09,.09,1.55,5059362,1);gi.rotation.x=Math.PI/2,gi.position.z=.15,Sn.add(gi);const ys=G(.55,.13,.28,3158061,.55);ys.position.set(0,.02,-.62),ys.rotation.y=-.25,Sn.add(ys),f.add(Sn)};jt(-1.9,3.15,.45),jt(4.15,-.65,-.8);const Ut=G(.11,.11,.95,5388068,1);Ut.rotation.y=.55,Ut.position.set(-2.1,.16,2.65),f.add(Ut);const Ft=new z(new ut(.48,9,7),new be({color:5978919,roughness:1}));Ft.scale.set(.9,1.15,.65),Ft.position.set(3.55,.48,2.65),f.add(Ft);const fn=new z(new Ot(.33,.035,6,18,Math.PI*1.5),Z(3023129,1));fn.rotation.x=Math.PI/2,fn.position.set(3.55,.93,2.65),f.add(fn);for(let Be=0;Be<15;Be++){const gt=new z(new Je(.09,.09,.025,10),new be({color:9335877,metalness:.55,roughness:.45})),Vt=B(Be,520)*Math.PI*2,Sn=2.1+B(Be,521)*3.7;gt.position.set(Math.cos(Vt)*Sn,.13,Math.sin(Vt)*Sn),gt.rotation.x=Math.PI/2,f.add(gt)}for(let Be=0;Be<5;Be++){const gt=G(.08,.08,.9,11182733,1);gt.position.set(3.2+B(Be,522)*2.4,.18,-2.7+B(Be,523)*1.7),gt.rotation.y=B(Be,524)*Math.PI,gt.rotation.z=(B(Be,525)-.5)*.25,f.add(gt)}const Bn=new z(new Ot(4.7,.055,7,64),new bt({color:9160135,transparent:!0,opacity:.5}));Bn.rotation.x=Math.PI/2,Bn.position.y=.075,f.add(Bn);const si=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];si.forEach((Be,gt)=>{const Vt=gt/si.length*Math.PI*2;vt(f,Math.cos(Vt)*4.15,Math.sin(Vt)*4.15,Be,gt%3===0?13215066:7977149,.55,Vt+.3)});for(let Be=0;Be<18;Be++)to(f,(B(Be,530)-.5)*8,.18,(B(Be,531)-.5)*7,.22+B(Be,532)*.34,Be%4===0?6121048:5133389,530+Be);for(let Be=0;Be<12;Be++){const gt=G(.12,.12,1.7+B(Be,535)*2,3811872,1);gt.position.set((B(Be,536)-.5)*8,.11,(B(Be,537)-.5)*8),gt.rotation.y=B(Be,538)*Math.PI,gt.rotation.z=(B(Be,539)-.5)*.2,f.add(gt)}ge(f,"hunterCamp","Забытая стоянка"),b.push(f),De(u,_,1.9,.1)},sy=(u,_,f,S,L,R)=>{const O=new Ve;O.position.set(u,X(u,_),_);const $=7442040,J=Z(4412730,1),F=new z(new Ot(f,.07,8,64),new be({color:$,emissive:$,emissiveIntensity:.65,transparent:!0,opacity:.42}));F.rotation.x=Math.PI/2,F.position.y=.045,O.add(F);const ne=Math.floor(f/1.7);for(let se=0;se<ne;se++){const Re=B(se,u*11+_)*Math.PI*2,_e=f*.35+B(se,_*17)*f*.45;to(O,Math.cos(Re)*_e,.2,Math.sin(Re)*_e,.34+B(se,33)*.32,5266514,800+se)}{for(let se=0;se<8;se++){const Re=new z(new ut(.34+B(se,600)*.25,7,5),J);Re.scale.y=.35,Re.position.set((B(se,601)-.5)*f,.16,(B(se,602)-.5)*f),O.add(Re)}for(let se=0;se<6;se++)vt(O,(B(se,603)-.5)*f*.9,(B(se,604)-.5)*f*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][se],7907492,.42,B(se,605)*Math.PI)}ge(O,S,L),b.push(O)};ry(68,8),sy(-45,75,9.5,"deepGrove","Глубокая роща"),iy(-30,15);const oy=(u,_)=>{const f=document.createElement("canvas");f.width=f.height=256;const S=f.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=_,S.shadowBlur=24,S.fillStyle=_,S.font="bold 156px serif",S.fillText(u,128,132),S.shadowBlur=6,S.globalAlpha=.72,S.font="bold 126px serif",S.fillText(u,128,132);const L=new Ts(f);return L.colorSpace=Nn,L.anisotropy=4,L},Pl=(u,_,f,S,L,R,O=.7,$=0)=>{const J="#"+R.toString(16).padStart(6,"0"),F=new bt({map:oy(_,J),transparent:!0,depthWrite:!1,side:Gt}),ne=new z(new Ln(O,O),F);return ne.position.set(f,S,L),ne.rotation.set(0,$,0),u.add(ne),ne},Il=(u,_,f,S=.075)=>{const L=new gp(_),R=new z(new ja(L,42,S,6,!1),new bt({color:f,transparent:!0,opacity:.9}));u.add(R);const O=new z(new ja(L,42,S*2.5,6,!1),new bt({color:f,transparent:!0,opacity:.12,depthWrite:!1}));return u.add(O),R},$u=50,Ku=-62,Nr=new Ve;Nr.position.set($u,X($u,Ku),Ku),Nr.userData={id:"forestThread",label:"Разорванная нить"};const Zu=new z(new Ot(2.4,.05,7,48),new be({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));Zu.rotation.x=Math.PI/2,Zu.position.y=.055,Nr.add(Zu);const Ju=new z(new an(1,1),Z(5326925,1));Ju.scale.set(.9,1.45,.72),Ju.position.y=.95,Nr.add(Ju),Pl(Nr,"ᛏ",0,1.2,.76,12614830,.9,0);const ay=[new W(-.9,1.8,.3),new W(0,3.1,.1),new W(1,2,-.2)];Il(Nr,ay,14268630,.06),ge(Nr,"forestThread","Разорванная нить"),b.push(Nr),De($u,Ku,1.1,.08);const Rn=new Ve,Qu=58,ed=-28;Rn.position.set(Qu,X(Qu,ed),ed),Rn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const ly=new be({color:5858398,roughness:.96,metalness:.04}),zm=new be({color:3423032,roughness:.92,metalness:.08}),cy=new be({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),td=new z(new $n(13.2,52),new be({color:5402692,roughness:1,transparent:!0,opacity:.94}));td.rotation.x=-Math.PI/2,td.position.y=.018,Rn.add(td);for(const[u,_,f]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const S=new z(new Ot(u,_,8,96),new bt({color:15780190,transparent:!0,opacity:f,depthWrite:!1}));S.rotation.x=Math.PI/2,S.position.y=.065,Rn.add(S)}const uy=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let u=0;u<18;u++){const _=u/18*Math.PI*2;vt(Rn,Math.cos(_)*8.9,Math.sin(_)*8.9,uy[u],15779422,.58,_+.15)}const Bm=new z(new Je(3.15,3.45,.45,12),zm);Bm.position.y=.24,Rn.add(Bm);for(let u=0;u<16;u++){const _=u/16*Math.PI*2,f=2.65+(B(u,2001)-.5)*.22,S=new z(new an(.72+B(u,2002)*.22,1),ly);S.scale.set(1.15+B(u,2003)*.25,.72+B(u,2004)*.22,.88+B(u,2005)*.24),S.position.set(Math.cos(_)*f,.55+B(u,2006)*.12,Math.sin(_)*f),S.rotation.set(B(u,2007)*.25,_+B(u,2008)*.4,B(u,2009)*.2),Rn.add(S)}const nd=new z(new $n(2.25,40),cy);nd.rotation.x=-Math.PI/2,nd.position.y=.72,Rn.add(nd);for(let u=0;u<3;u++){const _=new z(new Ot(.65+u*.48,.025,6,48),new bt({color:u===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));_.rotation.x=Math.PI/2,_.position.y=.735,Rn.add(_)}const Hm=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],Vm=[];for(let u=0;u<3;u++){const _=Hm[u],f=new Ve;f.position.set(_.x,0,_.z),f.rotation.y=u===0?.22:u===2?-.22:Math.PI;const S=new z(new hn(.72,.95,9),new be({color:_.body,roughness:.98}));S.position.y=.72,f.add(S);const L=new z(new hn(.48,.72,8),new be({color:_.cloak,roughness:.98}));L.position.set(0,.86,.43),L.rotation.x=.05,f.add(L);const R=new z(new Je(.42,.58,.12,9),new be({color:_.cloak,roughness:1}));R.position.set(0,1.23,0),R.rotation.z=.08,f.add(R);const O=new z(new ut(.32,12,9),new be({color:13079144,roughness:.9}));O.position.y=1.62,f.add(O);const $=new z(new ut(.38,10,8),new be({color:_.hair,roughness:1}));$.scale.set(1,.95,.9),$.position.set(0,1.68,-.08),f.add($);for(const se of[-1,1]){const Re=new z(new Je(.075,.105,.62,7),new be({color:_.cloak,roughness:1}));Re.position.set(se*.47,1.03,.18),Re.rotation.z=se*.42,Re.rotation.x=-.18,f.add(Re)}const J=new z(new Je(.38,.44,.18,9),zm);J.position.y=.25,f.add(J);const F=new z(new Je(.035,.055,.9,8),new be({color:6964008,roughness:.9}));F.position.set(.58,1.08,.38),F.rotation.z=.62,f.add(F);const ne=new z(new Ot(.12,.025,6,14),new be({color:9265980,roughness:.85}));ne.rotation.x=Math.PI/2,ne.position.set(.75,.82,.48),f.add(ne),f.position.y=.02,Rn.add(f),Vm.push(new W(_.x+.72,1.25,_.z+.48))}const Gm=[14674162,16765022,13192536];for(let u=0;u<3;u++){const _=Vm[u],f=[];for(let S=0;S<=30;S++){const L=S/30,R=_.y+L*7.3,O=L*Math.PI*3+Hm[u].phase,$=.35+.72*L;f.push(new W(_.x*(1-L)+Math.cos(O)*$*L,_.y*(1-L)+R*L,_.z*(1-L)+Math.sin(O)*$*L))}Il(Rn,f,Gm[u],.085)}for(let u=0;u<3;u++){const _=[];for(let f=0;f<=32;f++){const S=f/32,L=S*Math.PI*2,R=1.65+.42*Math.sin(L*2+u*.9);_.push(new W(Math.cos(L+u*2.094)*R,8.35+.45*Math.sin(L*3+u),Math.sin(L+u*2.094)*R))}Il(Rn,_,Gm[u],.065)}const Wm=new Vi(16767096,1.25,11,2);Wm.position.set(0,4.2,1),Rn.add(Wm);for(let u=0;u<20;u++){const _=B(u,2030)*Math.PI*2,f=3.8+B(u,2031)*8,S=Math.cos(_)*f,L=Math.sin(_)*f,R=new z(new Je(.018,.028,.22,5),new be({color:5666109,roughness:1}));R.position.set(S,.11,L),Rn.add(R);const O=new z(new ut(.07,7,5),new bt({color:u%3===0?16770208:u%3===1?15972816:14478591}));O.position.set(S,.25,L),Rn.add(O)}for(let u=0;u<10;u++){const _=B(u,2040)*Math.PI*2,f=4+B(u,2041)*8,S=new z(new an(.12+B(u,2042)*.08,0),new be({color:10189631,metalness:.65,roughness:.4}));S.position.set(Math.cos(_)*f,.1,Math.sin(_)*f),Rn.add(S)}ge(Rn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),b.push(Rn),De(Qu,ed,3.4,.1);const mi=new Ve,id=5,rd=-70;mi.position.set(id,X(id,rd),rd),mi.userData={id:"powerCircle",label:"Круг Силы"};const sd=new z(new $n(10.8,48),new be({color:1911590,roughness:1,transparent:!0,opacity:.94}));sd.rotation.x=-Math.PI/2,sd.position.y=.02,mi.add(sd);for(const[u,_,f,S]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const L=new z(new Ot(u,_,8,96),new bt({color:f,transparent:!0,opacity:S,depthWrite:!1}));L.rotation.x=Math.PI/2,L.position.y=.07,mi.add(L)}for(let u=0;u<20;u++){const _=u/20*Math.PI*2,f=5.1+u%2*2.2;vt(mi,Math.cos(_)*f,Math.sin(_)*f,vn[(u+2)%vn.length],u%2?9140479:6545396,.38,_+.2)}const Ll=new z(new an(1.25,1),new be({color:2435371,roughness:.9,metalness:.16}));Ll.scale.set(.9,2.8,.7),Ll.position.y=2.45,Ll.rotation.set(.05,.2,-.08),mi.add(Ll);const dy=Pl(mi,"ᛟ",0,2.55,.78,16766302,1.35,0);dy.rotation.x=0;const Xm=new Vi(10251519,1.7,10,2);Xm.position.set(0,2.5,.8),mi.add(Xm);for(let u=0;u<12;u++){const _=u/12*Math.PI*2,f=4.1+B(u,1801)*4.5,S=to(mi,Math.cos(_)*f,.3,Math.sin(_)*f,.42+B(u,1802)*.42,u%3===0?5858141:4870476,1803+u);if(u%4===0){const L=new z(new hn(.18,.9,5),new bt({color:u%2?9336063:6938111,transparent:!0,opacity:.75}));L.position.set(S.position.x,.62,S.position.z),mi.add(L)}}for(let u=0;u<9;u++){const _=B(u,1820)*Math.PI*2,f=2.2+B(u,1821)*6.7,S=new z(new ut(.045+B(u,1822)*.04,6,5),new bt({color:u%2?7531007:11697663,transparent:!0,opacity:.7}));S.position.set(Math.cos(_)*f,.4+B(u,1823)*2.6,Math.sin(_)*f),mi.add(S)}ge(mi,"powerCircle","Круг Силы"),b.push(mi),De(id,rd,2.2,.1);const Ri=new Ve,od=-72,ad=-48;Ri.position.set(od,X(od,ad),ad),Ri.userData={id:"whisperStone",label:"Камень Шёпота"};const ld=new z(new $n(8.6,40),new be({color:1516830,roughness:1,transparent:!0,opacity:.95}));ld.rotation.x=-Math.PI/2,ld.position.y=.02,Ri.add(ld);const cd=new z(new Ot(5.8,.09,8,96),new bt({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));cd.rotation.x=Math.PI/2,cd.position.y=.075,Ri.add(cd);const Dl=new z(new an(2.1,1),new be({color:1382171,roughness:.8,metalness:.35}));Dl.scale.set(1.15,1.35,.82),Dl.position.y=1.75,Dl.rotation.set(.05,.25,-.08),Ri.add(Dl);for(const u of[-1,1]){const _=[];for(let f=0;f<=14;f++){const S=f/14,L=S*Math.PI*1.15;_.push(new W(u*(1.35+.72*Math.sin(L)),2.45+.85*S+.38*Math.sin(L),-.15+.78*Math.cos(L)-.78))}Il(Ri,_,3422020,.18)}const Nl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Nl.forEach((u,_)=>{const f=_/Nl.length*Math.PI*2;Pl(Ri,u,Math.cos(f)*3.5,1,Math.sin(f)*3.5,_%2?7265535:12088575,.46,f+Math.PI/2)});for(let u=0;u<9;u++){const _=B(u,1901)*Math.PI*2,f=.7+B(u,1902)*1.7,S=Pl(Ri,Nl[u%Nl.length],Math.cos(_)*f,3.4+u*.48,Math.sin(_)*f,u%2?7988991:12614911,.42+B(u,1903)*.22,_);S.rotation.x=(B(u,1904)-.5)*.35}const jm=new Vi(10245631,1.5,9,2);jm.position.set(0,2.2,.5),Ri.add(jm);for(let u=0;u<11;u++){const _=B(u,1920)*Math.PI*2,f=4.8+B(u,1921)*2.6;to(Ri,Math.cos(_)*f,.2,Math.sin(_)*f,.28+B(u,1922)*.38,4541258,1923+u)}ge(Ri,"whisperStone","Камень Шёпота"),b.push(Ri),De(od,ad,2.5,.1);const Pn=75,wn=30,en=new Ve;en.position.set(Pn,X(Pn,wn),wn);const fy=Z(5986899,1),qm=G(7.8,.42,5.8,5591885,1);qm.position.y=.22,en.add(qm);const Ym=G(7.4,2.8,.3,6439727,1);Ym.position.set(0,1.4,-2.7),en.add(Ym);const $m=G(.3,2.8,5.4,6439727,1);$m.position.set(-3.7,1.4,0),en.add($m);const Km=G(.3,2.8,5.4,6439727,1);Km.position.set(3.7,1.4,0),en.add(Km);const Zm=G(2.55,2.8,.3,6439727,1);Zm.position.set(-2.43,1.4,2.7),en.add(Zm);const Jm=G(2.55,2.8,.3,6439727,1);Jm.position.set(2.43,1.4,2.7),en.add(Jm);const Qm=G(2.3,.72,.3,6439727,1);Qm.position.set(0,2.44,2.7),en.add(Qm);const e0=G(.16,2.18,.34,2826523,1);e0.position.set(-.66,1.28,2.72),en.add(e0);const t0=G(.16,2.18,.34,2826523,1);t0.position.set(.66,1.28,2.72),en.add(t0);const n0=G(1.48,.16,.34,2826523,1);n0.position.set(0,2.34,2.72),en.add(n0);const no=new Ve;no.position.set(-.57,0,2.72),en.add(no);const i0=G(1.14,2.05,.12,3154457,1);i0.position.set(.57,1.28,0),no.add(i0);const r0=new z(new ut(.08,8,6),Z(11831883,1));r0.position.set(.86,1.25,.1),no.add(r0);const hy=new be({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const u of[-2.35,2.35]){const _=G(1.25,1,.12,2826523,1);_.position.set(u,1.72,2.78),en.add(_);const f=new z(new Vn(.98,.72,.06),hy);f.position.set(u,1.72,2.86),en.add(f);const S=G(.07,.78,.1,2826523,1);S.position.set(u,1.72,2.91),en.add(S);const L=G(1.08,.07,.1,2826523,1);L.position.set(u,1.72,2.91),en.add(L)}const s0=new be({map:at,color:2697767,roughness:.98,side:Gt}),ua=new z(new Ln(4.25,6.25),s0),da=new z(new Ln(4.25,6.25),s0);ua.rotation.x=Math.PI/2,da.rotation.x=Math.PI/2,ua.rotation.z=.62,da.rotation.z=-.62,ua.position.set(-1.02,3.95,0),da.position.set(1.02,3.95,0),en.add(ua,da);const ud=G(.22,.22,6.45,2695965,1);ud.position.y=4.75,en.add(ud);const dd=new z(new Vn(.48,1.35,.48),fy);dd.position.set(1.55,4.8,-.65),en.add(dd);const fd=G(.62,.1,.62,3420461,1);fd.position.set(1.55,5.48,-.65),en.add(fd);const o0=G(2.35,.18,1,6636845,1);o0.position.set(0,.62,3.15),en.add(o0);const a0=G(1.55,.16,.48,5849131,1);a0.position.set(0,.3,3.58),en.add(a0),ge(en,"heroHome","Домик героя"),b.push(en),ye(Pn,wn-2.72,7.4,.3,0,.05),ye(Pn-3.72,wn,.3,5.45,0,.05),ye(Pn+3.72,wn,.3,5.45,0,.05),ye(Pn-2.43,wn+2.72,2.55,.3,0,.05),ye(Pn+2.43,wn+2.72,2.55,.3,0,.05);const on=new Ve;on.position.set(Pn,X(Pn,wn),wn),on.visible=!1;const l0=G(7,.16,5,4928548,1);l0.position.y=.5,on.add(l0);const c0=G(7,2.65,.18,4139808,1);c0.position.set(0,1.8,-2.45),on.add(c0);const u0=G(.18,2.65,4.9,4139808,1);u0.position.set(-3.45,1.8,0),on.add(u0);const d0=G(.18,2.65,4.9,4139808,1);d0.position.set(3.45,1.8,0),on.add(d0);const f0=G(2.35,2.65,.18,4139808,1);f0.position.set(-2.42,1.8,2.45),on.add(f0);const h0=G(2.35,2.65,.18,4139808,1);h0.position.set(2.42,1.8,2.45),on.add(h0);const p0=G(2.5,.04,2.1,7162673,1);p0.position.set(-.15,.6,.25),on.add(p0);const m0=G(1.65,.65,2.15,4008478,1);m0.position.set(-2.15,.88,-1.25),on.add(m0);const g0=G(1.48,.12,1.35,7033152,1);g0.position.set(-2.15,1.27,-.92),on.add(g0);const v0=G(1.28,.18,.46,11903114,1);v0.position.set(-2.15,1.38,-1.95),on.add(v0);const _0=G(1.65,.12,1.05,5255969,1);_0.position.set(.85,1.15,-.15),on.add(_0);for(const[u,_]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const f=G(.1,.7,.1,3679515,1);f.position.set(u,.72,_),on.add(f)}const x0=G(1.25,.8,.72,5978660,1);x0.position.set(2.1,.95,-1.7),on.add(x0);const y0=G(1.9,.14,.45,5978660,1);y0.position.set(1.35,2,-2.25),on.add(y0);for(const u of[.75,1.35,1.95]){const _=new z(new Je(.08,.1,.35,8),Z(7304016,1));_.position.set(u,2.24,-2.22),on.add(_)}const M0=G(1.35,.55,.7,5920078,1);M0.position.set(2.15,.78,.95),on.add(M0);const w0=new z(new hn(.28,.72,8),new be({color:16744744,emissive:16731402,emissiveIntensity:4}));w0.position.set(2.15,1.42,.95),on.add(w0);const S0=new Vi(16747068,2.2,8,2);S0.position.set(2.15,1.7,.95),on.add(S0),ge(on,"heroHomeInterior","Дом героя — внутри"),b.push(on);const vs=new Ve;vs.position.set(Pn,X(Pn,wn),wn);const hd=new z(new Ot(6.2,.055,7,48),new be({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));hd.rotation.x=Math.PI/2,hd.position.y=.035,vs.add(hd);for(const[u,_]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const f=G(.18,1,.18,4797735,1);f.position.set(u,.5,_),vs.add(f)}for(const u of[-2.4,2.9]){const _=G(10.2,.12,.12,6308139,1);_.position.set(0,.59,u),vs.add(_)}const py=Z(6906972,1);for(let u=0;u<7;u++){const _=new z(new Je(.32,.4,.12,7),py);_.position.set(0,.08,4.1+u*.72),_.rotation.y=u*.4,vs.add(_)}gs(Pn-2.4,wn+4.8,.48).scale.setScalar(.72),ge(vs,"heroHomeYard","Двор домика героя"),b.push(vs),gs(68,8,.75).scale.setScalar(.72);const E0=new z(new Je(.65,.8,.7,7),Z(5327426,1));E0.position.set(68,X(68,8)+.35,6.5),M.add(E0);for(const[u,_]of[[66,10],[70,10],[66,6],[70,6]]){const f=G(.16,1.15,.16,4797735,1);f.position.set(u,X(u,_)+.57,_),M.add(f)}const Ul=new Ve;Ul.position.set(-30,X(-30,15),15);const pd=new z(new Je(.5,.62,7,8),new be({map:ze,color:4995371,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.034}));pd.rotation.z=Math.PI/2,pd.position.y=.5,Ul.add(pd);const md=new z(new Je(.53,.53,.12,12),Z(7693389,1));md.rotation.z=Math.PI/2,md.position.set(3.5,.5,0),Ul.add(md),M.add(Ul);for(let u=0;u<7;u++){const _=new z(new an(.14,0),Z(6913394,1)),f=u/7*Math.PI*2;_.position.set(-45+Math.cos(f)*4,.12+X(-45+Math.cos(f)*4,75+Math.sin(f)*4),75+Math.sin(f)*4),M.add(_)}for(let u=0;u<95;u++){const _=B(u,77)*Math.PI*2,f=68+B(u,91)*27,S=Math.cos(_)*f,L=Math.sin(_)*f+2,O=[[bi,Ci,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([$,J,F])=>Math.hypot(S-$,L-J)<F);Math.abs(S+57)>9&&!O&&Jx(S,L,.78+B(u,13)*.82)}Cl(-10,18,1.55,!1),Cl(13,24,1.7,!1),Cl(-31,-12,2.15,!0);for(let u=0;u<110;u++){const _=B(u,701)*Math.PI*2,f=15+B(u,702)*50,S=Math.cos(_)*f,L=Math.sin(_)*f+3;if(Math.abs(S)<10&&Math.abs(L)<16)continue;const R=new Ve;R.position.set(S,X(S,L),L);for(let O=0;O<3;O++){const $=new z(new hn(.025,.38+B(O,u)*.28,4),new be({color:O===1?5466175:4282935,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.012}));$.position.set((O-1)*.09,.18,(B(O*3,u)-.5)*.12),$.rotation.z=(O-1)*.22,R.add($)}M.add(R)}for(let u=0;u<80;u++){const _=-88+B(u,101)*176,f=-88+B(u,111)*176;if(Math.hypot(_,f+2)>30){const S=new z(new hn(.08,.55+B(u,121)*.7,5),new be({color:4941888,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.012}));S.position.set(_,X(_,f)+.3,f),M.add(S)}}for(let u=0;u<72;u++){const _=-84+B(u,150)*168,f=-82+B(u,151)*164,S=Math.hypot(_-1,f+1)<24,L=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([$,J,F])=>Math.hypot(_-$,f-J)<F);if(S||L)continue;const R=.1+B(u,152)*.24,O=new z(new an(R,1),new be({color:u%3===0?5593940:6710877,roughness:.98,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.018}));O.scale.set(1+B(u,153)*1.3,.55+B(u,154)*.7,.72+B(u,155)*1.15),O.rotation.set(B(u,156)*1.7,B(u,157)*Math.PI,B(u,158)*1.7),O.position.set(_,X(_,f)+R*.22,f),O.castShadow=!0,O.receiveShadow=!0,M.add(O)}for(let u=0;u<46;u++){const _=-82+B(u,160)*164,f=-80+B(u,161)*160;if(Math.hypot(_-1,f+1)<28)continue;const S=.55+B(u,162)*1.15,L=new z(new Je(.025,.055,S,6),Z(4600356,.98));L.position.set(_,X(_,f)+.045,f),L.rotation.set(.05+B(u,163)*.35,B(u,164)*Math.PI,Math.PI*.5+(B(u,165)-.5)*.5),M.add(L)}const my=new be({color:7308881,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.008}),gy=new be({color:8491867,roughness:1,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.006}),gd=new be({map:ze,color:5914669,roughness:.99,roughnessMap:Me.rough,bumpMap:Me.height,bumpScale:.026});for(let u=0;u<54;u++){const _=B(u,920)*Math.PI*2,f=18+B(u,921)*63,S=Math.cos(_)*f,L=Math.sin(_)*f+3;if(Math.abs(S)<12&&Math.abs(L)<20)continue;const R=new Ve;R.position.set(S,X(S,L)+.018,L);const O=.35+B(u,922)*.75,$=.28+B(u,923)*.65;for(let J=0;J<2;J++){const F=new z(new $n(1,9),J%2?gy:my);F.rotation.x=-Math.PI/2,F.scale.set(O*(1-J*.18),$*(1-J*.12),1),F.position.set((B(u+J,924)-.5)*.32,.006+J*.003,(B(u+J,925)-.5)*.28),R.add(F)}M.add(R)}const T0=new be({color:5533764,roughness:1}),A0=new be({color:7309137,roughness:1});for(let u=0;u<72;u++){const _=B(u,930)*Math.PI*2,f=20+B(u,931)*61,S=Math.cos(_)*f,L=Math.sin(_)*f+3;if(Math.abs(S)<13&&Math.abs(L)<21)continue;const R=new Ve;R.position.set(S,X(S,L),L);const O=.55+B(u,932)*.8;for(let $=0;$<3;$++){const J=new z(new Je(.018*O,.035*O,.55*O,5),$===1?A0:T0);J.position.set(($-1)*.12*O,.27*O,(B(u,$+933)-.5)*.1*O),J.rotation.z=($-1)*.3,J.rotation.x=(B(u,$+936)-.5)*.22,R.add(J);for(let F=0;F<3;F++){const ne=new z(new hn(.045*O,.18*O,5),$===1?A0:T0);ne.rotation.z=($-1)*.3+(F%2?.18:-.18),ne.rotation.x=Math.PI*.5,ne.position.set(($-1)*.12*O+(F-1)*.075*O,.3*O+F*.1*O,(B(u,F+940)-.5)*.12*O),R.add(ne)}}M.add(R)}const vd=(u,_,f,S)=>{const L=X(u,_),R=new Ve;R.position.set(u,L,_);const O=5+Math.floor(B(S,950)*3);for(let $=0;$<O;$++){const J=$/O*Math.PI*2+B($,S+951)*.32,F=(1.8+B($,S+952)*2.7)*f,ne=(.11+B($,S+953)*.12)*f,se=new z(new Je(ne*.42,ne,F,7),gd);se.position.set(Math.cos(J)*F*.46,.13*f,Math.sin(J)*F*.46),se.rotation.z=Math.PI/2,se.rotation.y=-J,se.rotation.x=(B($,S+954)-.5)*.16,R.add(se)}M.add(R)};vd(-10,18,1.55,11),vd(13,24,1.7,23),vd(-31,-12,2.15,37);for(let u=0;u<22;u++){const _=B(u,960)*Math.PI*2,f=27+B(u,961)*55,S=Math.cos(_)*f,L=Math.sin(_)*f+3;if(Math.abs(S)<15&&Math.abs(L)<22)continue;const R=.55+B(u,962)*.8,O=new Ve;O.position.set(S,X(S,L),L);const $=new z(new Je(.18*R,.3*R,.45*R,7),gd);$.position.y=.22*R,O.add($);const J=new z(new Je(.19*R,.19*R,.035*R,7),Z(8416080,1));J.position.y=.45*R,O.add(J),M.add(O)}for(let u=0;u<18;u++){const _=B(u,970)*Math.PI*2,f=24+B(u,971)*58,S=Math.cos(_)*f,L=Math.sin(_)*f+3;if(Math.abs(S)<14&&Math.abs(L)<21)continue;const R=1+B(u,972)*2,O=new z(new Je(.045,.1,R,6),gd);O.position.set(S,X(S,L)+.07,L),O.rotation.set(.08+B(u,973)*.22,B(u,974)*Math.PI,Math.PI/2+(B(u,975)-.5)*.5),M.add(O)}const _s=new Ve;_s.position.set(29,X(29,25),25),_s.userData={id:"tower",label:"Сторожевая башня"};for(const u of[-2,2])for(const _ of[-2,2]){const f=G(.35,7,.35,3942685,1);f.position.set(u,3.5,_),_s.add(f)}const b0=G(5,.35,5,6833965,1);b0.position.y=5.8,_s.add(b0);const C0=new z(new hn(3.8,2.7,4),Z(2696482,1));C0.position.y=8,_s.add(C0),ge(_s,"tower","Сторожевая башня"),b.push(_s),ye(29,25,4.8,4.8,0,.08);const fa=(u,_,f,S,L,R)=>{const O=new Ve;O.userData={id:f,label:S,phase:R,baseX:u,baseZ:_};const $=new z(new ai(.32,.78,4,8),Z(L,.9));$.position.y=.85,O.add($);const J=new z(new ut(.25,12,8),Z(13210736,.9));J.position.y=1.58,O.add(J);const F=G(.7,.9,.15,2565407,1);F.position.set(0,.82,-.27),O.add(F),O.position.set(u,X(u,_),_),ge(O,f,S),b.push(O),he.push(O)};fa(9,-8,"elder","Старейшина",7558719,.4),fa(-6,-3,"blacksmith","Кузнец",6044459,1.5),fa(21,1,"hunter","Охотник",4215359,2.4),fa(5,10,"villager","Житель Мидгарда",5858125,3.4),fa(-16,4,"villager2","Житель деревни",6638394,4.2);const vy=new bt({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),_d=new Ve;for(let u=0;u<34;u++){const _=new z(new ut(.9+B(u,810)*2.2,8,6),vy);_.position.set(-88+B(u,811)*176,1.8+B(u,812)*2.2,-72+B(u,813)*144),_d.add(_)}M.add(_d);const xs=MA(t);M.add(xs);const dr=xs.userData.anim,R0=new IS,xd=new Qe,P0=u=>{var S,L,R,O;if((L=(S=u.target)==null?void 0:S.closest)!=null&&L.call(S,".mid3d-ui"))return;const _=q.domElement.getBoundingClientRect();xd.x=(u.clientX-_.left)/_.width*2-1,xd.y=-((u.clientY-_.top)/_.height)*2+1,R0.setFromCamera(xd,k);const f=R0.intersectObjects(b,!0)[0];if(f){let $=f.object;for(;$.parent&&!((R=$.userData)!=null&&R.id);)$=$.parent;(O=$.userData)!=null&&O.id&&e($.userData.id)}};q.domElement.addEventListener("pointerup",P0);const _y=u=>{v.current=u,x(u),l(""),on.visible=u,ua.visible=!u,da.visible=!u,ud.visible=!u,dd.visible=!u,fd.visible=!u,u?(o.current.x=Pn,o.current.z=wn+.95,d.current.x=0,d.current.z=-1,no.rotation.y=-Math.PI/2):(o.current.x=Pn,o.current.z=wn+3.75,d.current.x=0,d.current.z=1,no.rotation.y=0),xs.position.set(o.current.x,X(o.current.x,o.current.z)+.04,o.current.z)};y.current=_y;const xy=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],I0=()=>{const u=Math.max(1,A.clientWidth),_=Math.max(1,A.clientHeight);k.aspect=u/_,k.updateProjectionMatrix(),q.setSize(u,_,!1)};I0();const L0=new ResizeObserver(I0);L0.observe(A);let yd=0,D0=performance.now();const N0=u=>{const _=Math.min(.05,(u-D0)/1e3);D0=u;const f=o.current,S=Math.hypot(f.dx,f.dz);if(S>.05){const F=6.2*_;st(f,f.x+f.dx/S*F,f.z+f.dz/S*F),xs.rotation.y=Math.atan2(f.dx,f.dz),d.current.x=f.dx/S,d.current.z=f.dz/S,h(!0)}else h(!1);const L=X(f.x,f.z);if(xs.position.set(f.x,L+.04,f.z),dr){const F=u*.011+dr.phase,ne=S>.05?Math.sin(F)*.58:0,se=S>.05?Math.sin(F+Math.PI)*.42:0;dr.legL.rotation.x=ne,dr.legR.rotation.x=-ne,dr.armL.upper.rotation.x=se,dr.armR.upper.rotation.x=-se,dr.armL.elbow.rotation.x=-Math.abs(se)*.35,dr.armR.elbow.rotation.x=-Math.abs(se)*.35,dr.weapon.rotation.z=-.12+(S>.05?Math.sin(F)*.035:0)}const R=d.current,O=v.current?new W(f.x-R.x*1,L+3.65,f.z-R.z*1):new W(f.x-R.x*2,L+7.2,f.z-R.z*2+11.8);k.position.lerp(O,v.current?.09:.055),k.lookAt(f.x+(v.current?R.x*.9:R.x*1.9),L+(v.current?1.25:1.2),f.z+(v.current?R.z*.9:R.z*1.9));let $="",J="";if(v.current)f.z>wn+1.72&&($="Дверь — выйти из дома",J="heroHomeExit");else for(const F of xy)if(Math.hypot(f.x-F.x,f.z-F.z)<F.r){$=F.label,J=F.id;break}l($?`${$}|${J}`:""),we.forEach(F=>{const ne=.72+.28*Math.sin(u*.0016+F.phase);F.mesh.scale.set(ne,ne*.42,ne);const se=F.mesh.material;se.opacity=.055+.055*(.5+.5*Math.sin(u*.0016+F.phase))}),ie.forEach(F=>{F.light.intensity=2+Math.sin(u*.012+F.phase)*.5,F.flame.scale.y=.9+Math.sin(u*.009+F.phase)*.12}),_d.children.forEach((F,ne)=>{F.position.x+=Math.sin(u*12e-5+ne)*.003,F.position.z+=Math.cos(u*1e-4+ne)*.002}),xe.forEach((F,ne)=>{var Ze,mt;if(F.kind==="deer"){const Lt=F.g.position.x-xs.position.x,tn=F.g.position.z-xs.position.z,kt=Math.hypot(Lt,tn);if(kt<11){const Yt=((Ze=F.g.userData)==null?void 0:Ze.legJoints)||[],jt=u*.014*(F.speed||1);for(let Vt=0;Vt<4;Vt++){const Sn=Yt[Vt*2],gi=Yt[Vt*2+1];Sn&&(Sn.rotation.z=Math.sin(jt+Vt*Math.PI)*.1),gi&&(gi.rotation.z=Math.max(0,Math.sin(jt+Vt*Math.PI))*-.18)}const Ut=Math.max(.001,kt),Ft=kt<5.5?.115:.075,fn=F.g.position.x+Lt/Ut*Ft,Bn=F.g.position.z+tn/Ut*Ft,si=fn-30,Be=Bn-53;if(Math.hypot(si,Be)<17)F.g.position.set(fn,X(fn,Bn),Bn);else{const Vt=Math.atan2(Be,si),Sn=30+Math.cos(Vt)*16,gi=53+Math.sin(Vt)*10;F.g.position.set(Sn,X(Sn,gi),gi)}F.g.rotation.y=Math.atan2(tn,Lt),F.g.position.y+=Math.sin(u*.008+ne)*.025;return}}const se=u*.00105*F.speed+F.phase,Re=F.x+Math.cos(se)*F.r,_e=F.z+Math.sin(se*.83)*F.r*.62;if(F.g.position.set(Re,X(Re,_e),_e),F.g.rotation.y=Math.atan2(Math.cos(se*.83),-Math.sin(se)),F.kind==="deer"){const Lt=((mt=F.g.userData)==null?void 0:mt.legJoints)||[],tn=u*.014*(F.speed||1);for(let kt=0;kt<4;kt++){const Yt=Lt[kt*2],jt=Lt[kt*2+1];Yt&&(Yt.rotation.z=Math.sin(tn+kt*Math.PI)*.1),jt&&(jt.rotation.z=Math.max(0,Math.sin(tn+kt*Math.PI))*-.18)}F.g.position.y+=Math.sin(u*.006+ne)*.025,F.g.rotation.x=Math.sin(u*.004+F.phase)*.018}}),he.forEach((F,ne)=>{const se=F.userData.phase||0,Re=F.userData.baseX,_e=F.userData.baseZ,Ze=Re+Math.sin(u*28e-5+se)*1.6,mt=_e+Math.cos(u*22e-5+se)*1.1;F.position.set(Ze,X(Ze,mt),mt),F.rotation.y=Math.sin(u*4e-4+se)*.5}),Oe.forEach((F,ne)=>{const se=F.material;se.opacity=.48+Math.sin(u*55e-5+ne*1.7)*.07,F.rotation.z+=Math.sin(u*18e-5+ne)*8e-5}),Ie.forEach((F,ne)=>{F.material.opacity=.024+Math.sin(u*42e-5+ne*2.1)*.008}),q.render(M,k),yd=requestAnimationFrame(N0)};return yd=requestAnimationFrame(N0),()=>{cancelAnimationFrame(yd),L0.disconnect(),q.domElement.removeEventListener("pointerup",P0),we.forEach(u=>{u.mesh.geometry.dispose(),u.mesh.material.dispose()}),nt.dispose(),je.dispose(),at.dispose(),ue.dispose(),Ce.dispose(),Oe.forEach(u=>{u.geometry.dispose(),u.material.dispose()}),Ie.forEach(u=>{u.geometry.dispose(),u.material.dispose()}),q.dispose(),M.traverse(u=>{var _,f,S,L;u.isMesh&&((f=(_=u.geometry)==null?void 0:_.dispose)==null||f.call(_),Array.isArray(u.material)?u.material.forEach(R=>{var O;return(O=R.dispose)==null?void 0:O.call(R)}):(L=(S=u.material)==null?void 0:S.dispose)==null||L.call(S))}),q.domElement.remove(),y.current=null}},[t.id,e,n]);const E=A=>{const M=r.current,k=s.current;if(!M||!k)return;const q=M.getBoundingClientRect(),re=q.left+q.width/2,ce=q.top+q.height/2,fe=48;let X=A.clientX-re,ee=A.clientY-ce;const H=Math.hypot(X,ee);H>fe&&(X=X/H*fe,ee=ee/H*fe),k.style.transform=`translate(${X}px,${ee}px)`,o.current.dx=X/fe,o.current.dz=ee/fe},P=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},I=A=>{var ee,H;const M=r.current;if(!M)return;const k=A.target;if((ee=k.closest)!=null&&ee.call(k,".mid3d-action")||(H=k.closest)!=null&&H.call(k,".mid3d-interact"))return;const q=M.getBoundingClientRect(),re=26;A.clientX>=q.left-re&&A.clientX<=q.right+re&&A.clientY>=q.top-78&&A.clientY<=q.bottom+26&&(A.currentTarget.setPointerCapture(A.pointerId),E(A))},D=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&E(A)},U=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&A.currentTarget.releasePointerCapture(A.pointerId),P()};return Y.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:I,onPointerMove:D,onPointerUp:U,onPointerCancel:U,onContextMenu:A=>A.preventDefault(),children:[Y.jsxs("div",{className:"mid3d-ui mid3d-top",children:[Y.jsxs("div",{className:"mid3d-pill",children:[Y.jsx("b",{children:"МИДГАРД"}),Y.jsx("span",{children:"Деревня • река • лес • святилища"})]}),Y.jsxs("div",{className:"mid3d-pill",children:[Y.jsx("b",{children:"ᛟ"}),Y.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[Y.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),Y.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[Y.jsx("b",{children:"Камень Трёх Нитей"}),Y.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>w(!1),children:"Продолжить путь"})]}),p&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[Y.jsx("b",{children:"🜂 Круг Силы"}),Y.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!p&&!g&&(()=>{const[A,M]=a.split("|"),k=M==="heroHome"||M==="heroHomeExit";return Y.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[Y.jsx("b",{children:A}),Y.jsx("span",{children:k?M==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),Y.jsx("button",{onPointerDown:q=>q.stopPropagation(),onClick:()=>{var q,re;M==="powerCircle"?m(!0):M==="threeThreads"?w(!0):M==="heroHome"?(q=y.current)==null||q.call(y,!0):M==="heroHomeExit"?(re=y.current)==null||re.call(y,!1):e(M)},children:k?M==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),Y.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:Y.jsx("div",{className:"mid3d-knob",ref:s})}),Y.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:A=>A.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),Y.jsx("div",{className:"mid3d-ui mid3d-hint",children:T?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function SA(){const[t,e]=Ct.useState(()=>Z1().hero?{t:"tree"}:{t:"choose"}),[n,i]=Ct.useState(Z1),[r,s]=Ct.useState(""),[o,a]=Ct.useState(""),[l,c]=Ct.useState(""),h=Ct.useRef(0),[p,m]=Ct.useState(null),[g,w]=Ct.useState(null),[T,x]=Ct.useState(!1),[d,v]=Ct.useState(0),[y,E]=Ct.useState(0),[P,I]=Ct.useState(0),[D,U]=Ct.useState(""),[A,M]=Ct.useState(!1),[k,q]=Ct.useState(!1),[re,ce]=Ct.useState(""),[fe,X]=Ct.useState(.06);Ct.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Ct.useEffect(()=>{var j,ge,Z,G;(j=Pt==null?void 0:Pt.ready)==null||j.call(Pt),(ge=Pt==null?void 0:Pt.expand)==null||ge.call(Pt),(Z=Pt==null?void 0:Pt.setHeaderColor)==null||Z.call(Pt,"#0b0f0c"),(G=Pt==null?void 0:Pt.setBackgroundColor)==null||G.call(Pt,"#0b0f0c")},[]),Ct.useEffect(()=>{if(!(Pt!=null&&Pt.BackButton))return;const j=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Pt.BackButton.show(),Pt.BackButton.onClick(j)):Pt.BackButton.hide(),()=>{var ge,Z;(Z=(ge=Pt.BackButton)==null?void 0:ge.offClick)==null||Z.call(ge,j)}},[t,n.hero]),Ct.useEffect(()=>{m(null),w(null),x(!1),ce(""),M(!1)},[t]);const ee=j=>{c(j),window.clearTimeout(h.current),h.current=window.setTimeout(()=>c(""),1800)},H=(j="light")=>{var ge,Z,G,Xe;try{j==="success"?(Z=(ge=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:ge.notificationOccurred)==null||Z.call(ge,"success"):(Xe=(G=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:G.impactOccurred)==null||Xe.call(G,"light")}catch{}},oe=j=>e(j),ue=j=>{H(),e({t:"realm",id:j.id})},Ce=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Oe=()=>{const j=Ce();if(j<=0){ee("Дозор только начался — искры ещё копятся.");return}i(ge=>({...ge,sparks:ge.sparks+j,watch:Date.now()})),H("success"),ee("Дозор завершён: +"+j+" ✨")},yt=()=>{if(n.gift===Ca())return;const ge=(n.gift?Math.round((Date.parse(Ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,Z=Lf[ge-1];i(G=>({...G,sparks:G.sparks+Z,gift:Ca(),streak:ge})),H("success"),ee("Дар Древа, день "+ge+": +"+Z+" ✨")},ht=()=>{!r||!o||(i(j=>({...j,hero:{id:r,name:o}})),H("success"),ee("Путь начинается, "+o+"!"),e({t:"tree"}))},Ie=n.hero?Df.find(j=>j.id===n.hero.id):null,pe=j=>Math.floor(Math.random()*j),ve=j=>n.trials.filter(ge=>ge.startsWith(j+":")).length,Me=j=>{if(n.artifacts.includes(j.id)){ee("Мир покорён. Артефакт хранится в листе героя.");return}H(),e({t:"trial",id:j.id})},nt=(j,ge,Z)=>{const G=ge===2;i(Xe=>({...Xe,sparks:Xe.sparks+Z+(G?30:0),trials:[...Xe.trials,j+":"+ge],artifacts:G?[...Xe.artifacts,j]:Xe.artifacts})),G&&(H("success"),ee("Мир пройден! Артефакт: "+Uf[j]))},ze=(j,ge)=>{if(p!==null)return;const Z=ve(j),G=Nf[j][Z];if(ge===G.c){m(ge),H("success");const Xe=12+Z*3+((Ie==null?void 0:Ie.id)==="dwarf"?6:0);ee("Верно! Сундук хозяина: +"+Xe+" ✨"),nt(j,Z,Xe);return}if(n.powers.includes("mimirEye")){m(G.c),i(Ye=>({...Ye,powers:Ye.powers.filter(N=>N!=="mimirEye")}));const Xe=8+Z*2;H("success"),ee("Око Мимира раскрыло истину. Ответ исправлен. +"+Xe+" ✨"),nt(j,Z,Xe);return}if(n.powers.includes("nornThread")){m(ge),i(Ye=>({...Ye,powers:Ye.powers.filter(N=>N!=="nornThread")}));const Xe=6+Z*2;H("success"),ee("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Xe+" ✨"),nt(j,Z,Xe);return}m(ge),H(),U(Ra[j].name+" мрачнеет: «Что ж — пусть решит сталь!»")},pt=j=>{const ge=ve(j),Z=Nf[j][ge],G=Z.a.findIndex((Xe,Ye)=>Ye!==Z.c&&Ye!==g);w(G),x(!0),H(),ee("Шёпот ветров уносит один ответ...")},rn=j=>{const ge=Ra[j],Z=n.powers.includes("ashBreath");v(ge.hp),E(Ie.hp+(Z?25:0)),I(Ie.en+(Z?2:0)),ce(""),M(!1),q(!1),U(Z?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":ge.name+" поднимает оружие!"),Z&&i(G=>({...G,powers:G.powers.filter(Xe=>Xe!=="ashBreath")})),e({t:"fight",id:j})},V=(j,ge)=>{if(re)return;const Z=Ra[j],G=ve(j);let Xe=0,Ye="",N=P,b=A;if(ge==="hit"&&(Xe=Ie.str+pe(4),n.powers.includes("fireOath")&&(Xe+=5,i(Ue=>({...Ue,powers:Ue.powers.filter(ye=>ye!=="fireOath")})),Ye="Огненный обет! "),Ie.id==="berserk"&&y<=Ie.hp/2&&(Xe*=2,Ye+="Медвежья ярость! "),Ye+="Ты бьёшь: "+Ie.weapon+" — −"+Xe+" хозяину."),ge==="rune"){if(P<4){ee("Мало энергии для заклинания!");return}N=P-4,Xe=Ie.en+2+pe(5),Ye="Руническое заклинание вспыхивает: −"+Xe+" хозяину."}ge==="shield"&&(b=!0,Ye="Ты поднимаешь щит — удар ослабнет.");const ie=d-Xe;if(ie<=0){v(0),I(N),ce("win");const Ue=8+G*2;U("Хозяин повержен! Награда: +"+Ue+" ✨"),nt(j,G,Ue);return}let he=Z.atk+pe(3),xe="";b&&(he=Math.ceil(he*.3),xe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(he=Math.ceil(he*.65),i(Ue=>({...Ue,powers:Ue.powers.filter(ye=>ye!=="iceOath")})),xe+=" Ледяной обет сковал удар врага."),Ie.id==="dwarf"&&(he=Math.ceil(he*.75));let de=y;if(Ie.id==="viking"&&!k&&de-he<=0&&(q(!0),he=0,xe=" Крылья бури поглотили смертельный удар!"),de=de-he,v(ie),E(Math.max(0,de)),I(N),M(!1),de<=0&&n.powers.includes("yggdrasilCall")){i(Ue=>({...Ue,powers:Ue.powers.filter(ye=>ye!=="yggdrasilCall")})),E(30),U(Ye+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(de<=0){ce("lose"),i(Ue=>({...Ue,sparks:Math.max(0,Ue.sparks-10)})),U(Ye+" "+Z.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}U(Ye+xe+" "+Z.name+" отвечает: −"+he+".")},zt=j=>{ve(j)>=3||n.artifacts.includes(j)?e({t:"realm",id:j}):e({t:"trial",id:j})},ct=j=>j==="tree"?t.t==="tree"||t.t==="realm":t.t===j,rt=j=>j==="tree"?{t:"tree"}:{t:j};return Y.jsxs("div",{className:"app",children:[Y.jsx("style",{children:xA}),Y.jsxs("div",{className:"hdr",children:[t.t==="tree"&&Y.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&Y.jsx("button",{className:"back",onClick:()=>oe({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&Y.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&Y.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&Y.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&Y.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&Y.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&Y.jsx("div",{className:"title",children:"⚔ Бой"}),Y.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&Y.jsxs("div",{className:"scroll choose-screen",children:[Y.jsxs("div",{className:"card center choose-intro",children:[Y.jsx("div",{className:"big",children:"ᛉ"}),Y.jsx("div",{className:"qhead2",children:"Выбери героя"}),Y.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Df.map(j=>Y.jsxs("button",{className:"hcard"+(r===j.id?" on":""),onClick:()=>{s(j.id),a(""),H()},children:[Y.jsx("span",{className:"hface",style:{borderColor:j.color,color:j.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:Y.jsx(Vr,{name:j.img,className:"himg"})}),Y.jsxs("span",{className:"hinfo",children:[Y.jsx("span",{className:"hname",style:{color:j.color},children:j.race}),Y.jsxs("span",{className:"hab",children:["🌀 ",j.ability,": ",j.abilityDesc]}),Y.jsxs("span",{className:"hst",children:["⚔ ",j.str," • ✨ ",j.en," • ❤ ",j.hp]}),Y.jsxs("span",{className:"hw",children:["🗡 ",j.weapon]})]})]},j.id)),r&&Y.jsxs("div",{className:"card",children:[Y.jsx("div",{className:"qhead2",children:"Имя героя"}),Y.jsx("div",{className:"chips",children:(Df.find(j=>j.id===r).gender==="f"?vA:_A).map(j=>Y.jsx("button",{className:"chip"+(o===j?" on":""),onClick:()=>{a(j),H()},children:j},j))})]}),Y.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ht,children:"Вступить на путь"})]}),t.t==="tree"&&Y.jsxs("div",{className:"maparea",children:[Y.jsx("div",{className:"mapwrap",children:Y.jsxs("div",{className:"mapcanvas",children:[Y.jsx(Vr,{name:"tree",className:"mapimg"}),Sc.map(j=>Y.jsxs("button",{className:"marker",style:{left:j.x+"%",top:j.y+"%"},onClick:()=>ue(j),children:[Y.jsxs("div",{className:"amulet-wrap",children:[Y.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${j.glow}, transparent 70%)`}}),Y.jsx("div",{className:"amulet-ring",style:{borderColor:j.color}}),Y.jsx("div",{className:"amulet-core",style:{borderColor:j.color,color:j.color,background:`linear-gradient(135deg, ${j.dark}, #0a0a0a)`},children:j.runeSym})]}),Y.jsx("span",{className:"mname",style:{color:j.color,borderColor:j.glow},children:j.name})]},j.id))]})}),Y.jsx("div",{className:"fadeT"}),Y.jsx("div",{className:"fadeB"}),Y.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Ie&&n.hero&&Y.jsxs("button",{className:"herobar",onClick:()=>oe({t:"hero"}),children:[Y.jsxs("span",{className:"hbface",style:{borderColor:Ie.color,color:Ie.color},children:[Y.jsx(Vr,{name:Ie.img,className:"hbimg"}),Ie.sym]}),Y.jsxs("span",{className:"hbname",children:[n.hero.name,Y.jsx("i",{children:Ie.race})]}),Y.jsxs("span",{className:"hbst",children:["⚔ ",Ie.str," ✨ ",Ie.en," ⏳ ",Ce()]}),Y.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const j=Sc.find(ge=>ge.id===t.id);if(j.id==="midgard"){if(!Ie)return null;const ge=Z=>{if(H(),Z==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?ee("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:present:reward"])]})),H("success"),ee("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):ee("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(Z==="norns"){ee("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(Z==="threeThreads"){ee("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(Z==="forge"||Z==="blacksmith"){ee("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(Z==="house"||Z==="elder"){ee("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(Z==="port"){ee("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(Z==="rune"){ee("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(Z==="ashgrove"){ee("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(Z==="runefield"){ee("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(Z==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?ee("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:past:reward"])]})),H("success"),ee("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):ee("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(Z==="forestCache"){n.done.includes("forest:cache")?ee("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(G=>({...G,sparks:G.sparks+18,done:[...new Set([...G.done,"forest:cache"])]})),H("success"),ee("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(Z==="forestWhisper"){n.done.includes("forest:whisper")?ee("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(G=>({...G,sparks:G.sparks+16,done:[...new Set([...G.done,"forest:whisper"])]})),H("success"),ee("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(Z==="forestThread"){n.done.includes("forest:thread")?ee("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(G=>({...G,sparks:G.sparks+22,done:[...new Set([...G.done,"forest:thread"])]})),H("success"),ee("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(Z==="heroHome"){ee("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(Z==="hunterCamp"){n.done.includes("forest:camp")?ee("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(G=>({...G,sparks:G.sparks+14,done:[...new Set([...G.done,"forest:camp"])]})),H("success"),ee("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(Z==="deepGrove"){n.done.includes("forest:grove")?ee("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(G=>({...G,sparks:G.sparks+17,done:[...new Set([...G.done,"forest:grove"])]})),H("success"),ee("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(Z==="fallenAsh"){n.done.includes("forest:ash")?ee("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(G=>({...G,sparks:G.sparks+21,done:[...new Set([...G.done,"forest:ash"])]})),H("success"),ee("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(Z==="deer"){ee("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(Z==="hoddmimir"){ee("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(Z==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?ee("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:future:reward"])]})),H("success"),ee("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):ee("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(Z==="forestEvent"){n.done.includes("forest:choice")&&ee("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(Z==="forestEvent:past"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:past"])]})),H("success"),ee("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(Z==="forestEvent:present"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:present"])]})),H("success"),ee("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(Z==="forestEvent:future"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:future"])]})),H("success"),ee("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(Z==="event"){ee("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(Z.startsWith("ritual:")){const G=Z.slice(7),Xe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},N={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[G];if(!N)return;if(n.powers.includes(N)){ee(Xe[G]+" уже пробуждён. Его сила ждёт своего часа.");return}i(ie=>({...ie,powers:[...new Set([...ie.powers,N])],done:[...new Set([...ie.done,"ritual:"+G])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};H("success"),ee(b[G]);return}};return Y.jsx(wA,{h:Ie,on:ge,eventDone:n.done.includes("forest:choice")})}return Y.jsxs("div",{className:"content",children:[Y.jsx(Vr,{name:j.id,className:"bgimg"}),Y.jsx("div",{className:"veil"}),Y.jsxs("div",{className:"banner",children:[Y.jsx("span",{className:"bemoji",children:j.emoji}),Y.jsxs("div",{children:[Y.jsx("div",{className:"bname",children:j.name}),Y.jsx("div",{className:"btag",children:j.tag})]})]}),Y.jsxs("button",{className:"gate",onClick:()=>Me(j),children:[Y.jsxs("span",{className:"gwrap",children:[Y.jsx("span",{className:"gate-ring",style:{borderColor:j.color}}),Y.jsx("span",{className:"gate-core",style:{borderColor:j.color,color:j.color,background:`radial-gradient(circle, ${j.dark}, #050705 75%)`},children:j.runeSym})]}),Y.jsx("span",{className:"mname",style:{color:j.color,borderColor:j.glow},children:n.artifacts.includes(j.id)?"Мир покорён":"Врата мира"})]}),Y.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const j=Sc.find(Xe=>Xe.id===t.id),ge=Ra[j.id],Z=ve(j.id);if(Z>=3)return Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🏺"}),Y.jsx("div",{className:"qhead2",children:"Мир покорён!"}),Y.jsxs("p",{className:"dim",children:["Артефакт: ",Uf[j.id]]}),Y.jsx("button",{className:"btn gold",onClick:()=>oe({t:"realm",id:j.id}),children:"К вратам"})]})});const G=Nf[j.id][Z];return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"mhead",children:[Y.jsxs("span",{className:"mface",style:{borderColor:j.color,color:j.color},children:[Y.jsx(Vr,{name:J1[j.id],className:"himg"}),ge.sym]}),Y.jsx("span",{className:"mname2",style:{color:j.color},children:ge.name}),Y.jsxs("span",{className:"mtitle",children:[ge.title," • испытание ",Z+1," из 3"]})]}),Z===0&&Y.jsxs("div",{className:"greet",children:["«",ge.greet,"»"]}),Y.jsxs("div",{className:"cloud",children:[Y.jsx("div",{className:"riddle",children:G.q}),G.a.map((Xe,Ye)=>Y.jsx("button",{className:"ans"+(p!==null?Ye===G.c?" good":Ye===p?" bad":" off":g===Ye?" off":""),onClick:()=>ze(j.id,Ye),children:Xe},Ye)),(Ie==null?void 0:Ie.id)==="elf"&&!T&&p===null&&Y.jsx("button",{className:"btn rune",onClick:()=>pt(j.id),children:"🌀 Шёпот ветров"}),p!==null&&(p===G.c?Y.jsx("button",{className:"btn gold",onClick:()=>zt(j.id),children:"Открыть сундук →"}):Y.jsx("button",{className:"btn",onClick:()=>rn(j.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const j=Sc.find(Z=>Z.id===t.id),ge=Ra[j.id];return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"duel",children:[Y.jsxs("div",{className:"dside",children:[Y.jsxs("span",{className:"dface",style:{borderColor:j.color,color:j.color},children:[Y.jsx(Vr,{name:J1[j.id],className:"himg"}),ge.sym]}),Y.jsx("span",{className:"dname",style:{color:j.color},children:ge.name}),Y.jsx("span",{className:"dhp",children:Y.jsx("span",{className:"dhpfill",style:{width:Math.max(0,d/ge.hp*100)+"%",background:j.color}})}),Y.jsxs("span",{className:"dnum",children:[d,"/",ge.hp]})]}),Y.jsx("span",{className:"dvs",children:"⚔"}),Y.jsxs("div",{className:"dside",children:[Y.jsxs("span",{className:"dface",style:{borderColor:Ie.color,color:Ie.color},children:[Y.jsx(Vr,{name:Ie.img,className:"himg"}),Ie.sym]}),Y.jsx("span",{className:"dname",style:{color:Ie.color},children:n.hero.name}),Y.jsx("span",{className:"dhp",children:Y.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/Ie.hp*100)+"%",background:"#7ee787"}})}),Y.jsx("span",{className:"denergy",children:Array.from({length:Ie.en}).map((Z,G)=>Y.jsx("span",{className:"pip"+(G<P?" on":"")},G))})]})]}),Y.jsx("div",{className:"flog",children:D}),!re&&Y.jsxs("div",{className:"acts",children:[Y.jsxs("button",{className:"btn gold",onClick:()=>V(j.id,"hit"),children:["⚔ Удар: ",Ie.weapon]}),Y.jsx("button",{className:"btn rune",onClick:()=>V(j.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),Y.jsx("button",{className:"btn shield",onClick:()=>V(j.id,"shield"),children:"🛡 Щит"})]}),re==="win"&&Y.jsx("button",{className:"btn gold",onClick:()=>zt(j.id),children:"Забрать награду →"}),re==="lose"&&Y.jsx("button",{className:"btn ghost",onClick:()=>oe({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Ie&&n.hero&&Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("span",{className:"hface bigface",style:{borderColor:Ie.color,color:Ie.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:Y.jsx(Vr,{name:Ie.img,className:"himg"})}),Y.jsxs("div",{className:"qhead2",style:{color:Ie.color},children:[n.hero.name," • ",Ie.race]}),Y.jsxs("div",{className:"stats",children:[Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["⚔ ",Ie.str]}),Y.jsx("span",{children:"сила"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["✨ ",Ie.en]}),Y.jsx("span",{children:"энергия"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["❤ ",Ie.hp]}),Y.jsx("span",{children:"здоровье"})]})]}),Y.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",Y.jsx("b",{children:Ie.weapon})]}),Y.jsxs("div",{className:"hrow",children:["🌀 ",Ie.ability,": ",Ie.abilityDesc]}),Y.jsxs("div",{className:"hrow",children:["✨ Искр: ",Y.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",Y.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&Y.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(j=>Uf[j]).join(", ")]})]})}),t.t==="gift"&&(()=>{const j=n.gift===Ca(),Z=(n.gift?Math.round((Date.parse(Ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,G=j?n.streak:Z;return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🎁"}),Y.jsx("div",{className:"qhead2",children:"Дар Древа"}),Y.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),Y.jsx("div",{className:"days",children:Lf.map((Xe,Ye)=>Y.jsxs("span",{className:"day"+(Ye+1===G?" on":Ye+1<G&&j?" done":""),children:[Y.jsx("b",{children:Xe}),"день ",Ye+1]},Ye))}),j?Y.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):Y.jsxs("button",{className:"btn gold",onClick:yt,children:["Забрать дар +",Lf[Z-1]," ✨"]})]}),Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"⏳"}),Y.jsx("div",{className:"qhead2",children:"Дозор героя"}),Y.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),Y.jsxs("button",{className:"btn gold",onClick:Oe,children:["Завершить дозор · +",Ce()," ✨"]})]})]})})(),t.t==="hall"&&Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🏛️"}),Y.jsx("div",{className:"qhead2",children:"Чертог путника"}),Y.jsxs("div",{className:"stats",children:[Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["✨ ",n.sparks]}),Y.jsx("span",{children:"Искр"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),Y.jsx("span",{children:"артефакты"})]})]}),Y.jsxs("div",{className:"rank",children:["🏆 Ранг: ",gA(n.sparks)]}),n.hero&&Ie&&Y.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Ie.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&Y.jsx("div",{className:"nav",children:mA.map(j=>Y.jsxs("button",{className:"navbtn"+(ct(j.id)?" on":""),onClick:()=>oe(rt(j.id)),children:[Y.jsx("span",{className:"ic",children:j.ic}),j.t]},j.id))}),l&&Y.jsx("div",{className:"toast",children:l})]})}hx(document.getElementById("root")).render(Y.jsx(SA,{}));
