(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var O1={exports:{}},hu={},z1={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),ry=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),x0=Symbol.iterator;function cy(t){return t===null||typeof t!="object"?null:(t=x0&&t[x0]||t["@@iterator"],typeof t=="function"?t:null)}var B1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H1=Object.assign,V1={};function $o(t,e,n){this.props=t,this.context=e,this.refs=V1,this.updater=n||B1}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G1(){}G1.prototype=$o.prototype;function cp(t,e,n){this.props=t,this.context=e,this.refs=V1,this.updater=n||B1}var up=cp.prototype=new G1;up.constructor=cp;H1(up,$o.prototype);up.isPureReactComponent=!0;var y0=Array.isArray,W1=Object.prototype.hasOwnProperty,dp={current:null},X1={key:!0,ref:!0,__self:!0,__source:!0};function j1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W1.call(e,i)&&!X1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pl,type:t,key:s,ref:o,props:r,_owner:dp.current}}function uy(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function dy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var M0=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dy(""+t.key):e.toString(36)}function Mc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pl:case Qx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fd(o,0):i,y0(r)?(n="",t!=null&&(n=t.replace(M0,"$&/")+"/"),Mc(r,e,n,"",function(c){return c})):r!=null&&(fp(r)&&(r=uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(M0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",y0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fd(s,a);o+=Mc(s,e,n,l,r)}else if(l=cy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fd(s,a++),o+=Mc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,n){if(t==null)return t;var i=[],r=0;return Mc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function fy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var si={current:null},Sc={transition:null},hy={ReactCurrentDispatcher:si,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:dp};function q1(){throw Error("act(...) is not supported in production builds of React.")}wt.Children={map:Ll,forEach:function(t,e,n){Ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};wt.Component=$o;wt.Fragment=ey;wt.Profiler=ny;wt.PureComponent=cp;wt.StrictMode=ty;wt.Suspense=oy;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;wt.act=q1;wt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=H1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W1.call(e,l)&&!X1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pl,type:t.type,key:r,ref:s,props:i,_owner:o}};wt.createContext=function(t){return t={$$typeof:ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iy,_context:t},t.Consumer=t};wt.createElement=j1;wt.createFactory=function(t){var e=j1.bind(null,t);return e.type=t,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(t){return{$$typeof:sy,render:t}};wt.isValidElement=fp;wt.lazy=function(t){return{$$typeof:ly,_payload:{_status:-1,_result:t},_init:fy}};wt.memo=function(t,e){return{$$typeof:ay,type:t,compare:e===void 0?null:e}};wt.startTransition=function(t){var e=Sc.transition;Sc.transition={};try{t()}finally{Sc.transition=e}};wt.unstable_act=q1;wt.useCallback=function(t,e){return si.current.useCallback(t,e)};wt.useContext=function(t){return si.current.useContext(t)};wt.useDebugValue=function(){};wt.useDeferredValue=function(t){return si.current.useDeferredValue(t)};wt.useEffect=function(t,e){return si.current.useEffect(t,e)};wt.useId=function(){return si.current.useId()};wt.useImperativeHandle=function(t,e,n){return si.current.useImperativeHandle(t,e,n)};wt.useInsertionEffect=function(t,e){return si.current.useInsertionEffect(t,e)};wt.useLayoutEffect=function(t,e){return si.current.useLayoutEffect(t,e)};wt.useMemo=function(t,e){return si.current.useMemo(t,e)};wt.useReducer=function(t,e,n){return si.current.useReducer(t,e,n)};wt.useRef=function(t){return si.current.useRef(t)};wt.useState=function(t){return si.current.useState(t)};wt.useSyncExternalStore=function(t,e,n){return si.current.useSyncExternalStore(t,e,n)};wt.useTransition=function(){return si.current.useTransition()};wt.version="18.3.1";z1.exports=wt;var Tt=z1.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=Tt,my=Symbol.for("react.element"),gy=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,_y=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function Y1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vy.call(e,i)&&!xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:my,type:t,key:s,ref:o,props:r,_owner:_y.current}}hu.Fragment=gy;hu.jsx=Y1;hu.jsxs=Y1;O1.exports=hu;var X=O1.exports,$1={exports:{}},Ti={},K1={exports:{}},Z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,ne){var se=k.length;k.push(ne);e:for(;0<se;){var Ee=se-1>>>1,ze=k[Ee];if(0<r(ze,ne))k[Ee]=ne,k[se]=ze,se=Ee;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var ne=k[0],se=k.pop();if(se!==ne){k[0]=se;e:for(var Ee=0,ze=k.length,dt=ze>>>1;Ee<dt;){var Le=2*(Ee+1)-1,he=k[Le],H=Le+1,me=k[H];if(0>r(he,se))H<ze&&0>r(me,he)?(k[Ee]=me,k[H]=se,Ee=H):(k[Ee]=he,k[Le]=se,Ee=Le);else if(H<ze&&0>r(me,se))k[Ee]=me,k[H]=se,Ee=H;else break e}}return ne}function r(k,ne){var se=k.sortIndex-ne.sortIndex;return se!==0?se:k.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,m=3,g=!1,y=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var ne=n(c);ne!==null;){if(ne.callback===null)i(c);else if(ne.startTime<=k)i(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function w(k){if(E=!1,x(k),!y)if(n(l)!==null)y=!0,G(R);else{var ne=n(c);ne!==null&&Z(w,ne.startTime-k)}}function R(k,ne){y=!1,E&&(E=!1,u(D),D=-1),g=!0;var se=m;try{for(x(ne),h=n(l);h!==null&&(!(h.expirationTime>ne)||k&&!F());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,m=h.priorityLevel;var ze=Ee(h.expirationTime<=ne);ne=t.unstable_now(),typeof ze=="function"?h.callback=ze:h===n(l)&&i(l),x(ne)}else i(l);h=n(l)}if(h!==null)var dt=!0;else{var Le=n(c);Le!==null&&Z(w,Le.startTime-ne),dt=!1}return dt}finally{h=null,m=se,g=!1}}var P=!1,L=null,D=-1,T=5,S=-1;function F(){return!(t.unstable_now()-S<T)}function W(){if(L!==null){var k=t.unstable_now();S=k;var ne=!0;try{ne=L(!0,k)}finally{ne?ee():(P=!1,L=null)}}else P=!1}var ee;if(typeof v=="function")ee=function(){v(W)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=W,ee=function(){ce.postMessage(null)}}else ee=function(){_(W,0)};function G(k){L=k,P||(P=!0,ee())}function Z(k,ne){D=_(function(){k(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,G(R))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var se=m;m=ne;try{return k()}finally{m=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,ne){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=m;m=k;try{return ne()}finally{m=se}},t.unstable_scheduleCallback=function(k,ne,se){var Ee=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ee+se:Ee):se=Ee,k){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=se+ze,k={id:f++,callback:ne,priorityLevel:k,startTime:se,expirationTime:ze,sortIndex:-1},se>Ee?(k.sortIndex=se,e(c,k),n(l)===null&&k===n(c)&&(E?(u(D),D=-1):E=!0,Z(w,se-Ee))):(k.sortIndex=ze,e(l,k),y||g||(y=!0,G(R))),k},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(k){var ne=m;return function(){var se=m;m=ne;try{return k.apply(this,arguments)}finally{m=se}}}})(Z1);K1.exports=Z1;var yy=K1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=Tt,Ei=yy;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J1=new Set,ja={};function Ws(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(ja[t]=e,t=0;t<e.length;t++)J1.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S0={},w0={};function wy(t){return Af.call(w0,t)?!0:Af.call(S0,t)?!1:Sy.test(t)?w0[t]=!0:(S0[t]=!0,!1)}function Ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ty(t,e,n,i){if(e===null||typeof e>"u"||Ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function oi(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vn[t]=new oi(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vn[e]=new oi(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vn[t]=new oi(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vn[t]=new oi(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vn[t]=new oi(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vn[t]=new oi(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vn[t]=new oi(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vn[t]=new oi(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vn[t]=new oi(t,5,!1,t.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hp,pp);Vn[e]=new oi(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hp,pp);Vn[e]=new oi(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hp,pp);Vn[e]=new oi(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vn[t]=new oi(t,1,!1,t.toLowerCase(),null,!1,!1)});Vn.xlinkHref=new oi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vn[t]=new oi(t,1,!1,t.toLowerCase(),null,!0,!0)});function mp(t,e,n,i){var r=Vn.hasOwnProperty(e)?Vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ty(e,n,r,i)&&(n=null),i||r===null?wy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pr=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),mo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),ev=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),tv=Symbol.for("react.offscreen"),E0=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=E0&&t[E0]||t["@@iterator"],typeof t=="function"?t:null)}var an=Object.assign,hd;function Ra(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var pd=!1;function md(t,e){if(!t||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function Ay(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=md(t.type,!1),t;case 11:return t=md(t.type.render,!1),t;case 1:return t=md(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case go:return"Fragment";case mo:return"Portal";case bf:return"Profiler";case gp:return"StrictMode";case Cf:return"Suspense";case Rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ev:return(t.displayName||"Context")+".Consumer";case Q1:return(t._context.displayName||"Context")+".Provider";case vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function by(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cy(t){var e=nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=Cy(t))}function iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=nv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lf(t,e){var n=e.checked;return an({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function T0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rv(t,e){e=e.checked,e!=null&&mp(t,"checked",e,!1)}function If(t,e){rv(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function A0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function Co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return an({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(Pa(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function sv(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function C0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ov(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ov(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ry=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(t){Ry.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Na[e]=Na[t]})});function lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Na.hasOwnProperty(t)&&Na[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Py=an({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ff(t,e){if(e){if(Py[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,Ro=null,Po=null;function R0(t){if(t=vl(t)){if(typeof zf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=_u(e),zf(t.stateNode,t.type,e))}}function uv(t){Ro?Po?Po.push(t):Po=[t]:Ro=t}function dv(){if(Ro){var t=Ro,e=Po;if(Po=Ro=null,R0(t),e)for(t=0;t<e.length;t++)R0(e[t])}}function fv(t,e){return t(e)}function hv(){}var gd=!1;function pv(t,e,n){if(gd)return t(e,n);gd=!0;try{return fv(t,e,n)}finally{gd=!1,(Ro!==null||Po!==null)&&(hv(),dv())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=_u(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var Bf=!1;if(Ar)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Bf=!1}function Ly(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ua=!1,zc=null,Bc=!1,Hf=null,Iy={onError:function(t){Ua=!0,zc=t}};function Dy(t,e,n,i,r,s,o,a,l){Ua=!1,zc=null,Ly.apply(Iy,arguments)}function Ny(t,e,n,i,r,s,o,a,l){if(Dy.apply(this,arguments),Ua){if(Ua){var c=zc;Ua=!1,zc=null}else throw Error(we(198));Bc||(Bc=!0,Hf=c)}}function Xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function P0(t){if(Xs(t)!==t)throw Error(we(188))}function Uy(t){var e=t.alternate;if(!e){if(e=Xs(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return P0(r),t;if(s===i)return P0(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function gv(t){return t=Uy(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var _v=Ei.unstable_scheduleCallback,L0=Ei.unstable_cancelCallback,Fy=Ei.unstable_shouldYield,ky=Ei.unstable_requestPaint,pn=Ei.unstable_now,Oy=Ei.unstable_getCurrentPriorityLevel,yp=Ei.unstable_ImmediatePriority,xv=Ei.unstable_UserBlockingPriority,Hc=Ei.unstable_NormalPriority,zy=Ei.unstable_LowPriority,yv=Ei.unstable_IdlePriority,pu=null,lr=null;function By(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var $i=Math.clz32?Math.clz32:Gy,Hy=Math.log,Vy=Math.LN2;function Gy(t){return t>>>=0,t===0?32:31-(Hy(t)/Vy|0)|0}var Ul=64,Fl=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=La(a):(s&=o,s!==0&&(i=La(s)))}else o=n&~r,o!==0?i=La(o):s!==0&&(i=La(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$i(e),r=1<<n,i|=t[n],e&=~r;return i}function Wy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$i(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Wy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mv(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$i(e),t[e]=n}function jy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Bt=0;function Sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,Sp,Ev,Tv,Av,Gf=!1,kl=[],Kr=null,Zr=null,Jr=null,$a=new Map,Ka=new Map,Xr=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function I0(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vl(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yy(t,e,n,i,r){switch(e){case"focusin":return Kr=pa(Kr,t,e,n,i,r),!0;case"dragenter":return Zr=pa(Zr,t,e,n,i,r),!0;case"mouseover":return Jr=pa(Jr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,pa($a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,pa(Ka.get(s)||null,t,e,n,i,r)),!0}return!1}function bv(t){var e=Ps(t.target);if(e!==null){var n=Xs(e);if(n!==null){if(e=n.tag,e===13){if(e=mv(n),e!==null){t.blockedOn=e,Av(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Of=i,n.target.dispatchEvent(i),Of=null}else return e=vl(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function D0(t,e,n){wc(t)&&n.delete(e)}function $y(){Gf=!1,Kr!==null&&wc(Kr)&&(Kr=null),Zr!==null&&wc(Zr)&&(Zr=null),Jr!==null&&wc(Jr)&&(Jr=null),$a.forEach(D0),Ka.forEach(D0)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Gf||(Gf=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,$y)))}function Za(t){function e(r){return ma(r,t)}if(0<kl.length){ma(kl[0],t);for(var n=1;n<kl.length;n++){var i=kl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Kr!==null&&ma(Kr,t),Zr!==null&&ma(Zr,t),Jr!==null&&ma(Jr,t),$a.forEach(e),Ka.forEach(e),n=0;n<Xr.length;n++)i=Xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)bv(n),n.blockedOn===null&&Xr.shift()}var Lo=Pr.ReactCurrentBatchConfig,Gc=!0;function Ky(t,e,n,i){var r=Bt,s=Lo.transition;Lo.transition=null;try{Bt=1,wp(t,e,n,i)}finally{Bt=r,Lo.transition=s}}function Zy(t,e,n,i){var r=Bt,s=Lo.transition;Lo.transition=null;try{Bt=4,wp(t,e,n,i)}finally{Bt=r,Lo.transition=s}}function wp(t,e,n,i){if(Gc){var r=Wf(t,e,n,i);if(r===null)bd(t,e,i,Wc,n),I0(t,i);else if(Yy(r,t,e,n,i))i.stopPropagation();else if(I0(t,i),e&4&&-1<qy.indexOf(t)){for(;r!==null;){var s=vl(r);if(s!==null&&wv(s),s=Wf(t,e,n,i),s===null&&bd(t,e,i,Wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bd(t,e,i,null,n)}}var Wc=null;function Wf(t,e,n,i){if(Wc=null,t=xp(i),t=Ps(t),t!==null)if(e=Xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function Cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oy()){case yp:return 1;case xv:return 4;case Hc:case zy:return 16;case yv:return 536870912;default:return 16}default:return 16}}var Yr=null,Ep=null,Ec=null;function Rv(){if(Ec)return Ec;var t,e=Ep,n=e.length,i,r="value"in Yr?Yr.value:Yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ec=r.slice(t,1<i?1-i:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function N0(){return!1}function Ai(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:N0,this.isPropagationStopped=N0,this}return an(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=Ai(Ko),gl=an({},Ko,{view:0,detail:0}),Jy=Ai(gl),_d,xd,ga,mu=an({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(_d=t.screenX-ga.screenX,xd=t.screenY-ga.screenY):xd=_d=0,ga=t),_d)},movementY:function(t){return"movementY"in t?t.movementY:xd}}),U0=Ai(mu),Qy=an({},mu,{dataTransfer:0}),e2=Ai(Qy),t2=an({},gl,{relatedTarget:0}),yd=Ai(t2),n2=an({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),i2=Ai(n2),r2=an({},Ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s2=Ai(r2),o2=an({},Ko,{data:0}),F0=Ai(o2),a2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=c2[t])?!!e[t]:!1}function Ap(){return u2}var d2=an({},gl,{key:function(t){if(t.key){var e=a2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f2=Ai(d2),h2=an({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k0=Ai(h2),p2=an({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),m2=Ai(p2),g2=an({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),v2=Ai(g2),_2=an({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x2=Ai(_2),y2=[9,13,27,32],bp=Ar&&"CompositionEvent"in window,Fa=null;Ar&&"documentMode"in document&&(Fa=document.documentMode);var M2=Ar&&"TextEvent"in window&&!Fa,Pv=Ar&&(!bp||Fa&&8<Fa&&11>=Fa),O0=" ",z0=!1;function Lv(t,e){switch(t){case"keyup":return y2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function S2(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(z0=!0,O0);case"textInput":return t=e.data,t===O0&&z0?null:t;default:return null}}function w2(t,e){if(vo)return t==="compositionend"||!bp&&Lv(t,e)?(t=Rv(),Ec=Ep=Yr=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pv&&e.locale!=="ko"?null:e.data;default:return null}}var E2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E2[t.type]:e==="textarea"}function Dv(t,e,n,i){uv(i),e=Xc(e,"onChange"),0<e.length&&(n=new Tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,Ja=null;function T2(t){Wv(t,0)}function gu(t){var e=yo(t);if(iv(e))return t}function A2(t,e){if(t==="change")return e}var Nv=!1;if(Ar){var Md;if(Ar){var Sd="oninput"in document;if(!Sd){var H0=document.createElement("div");H0.setAttribute("oninput","return;"),Sd=typeof H0.oninput=="function"}Md=Sd}else Md=!1;Nv=Md&&(!document.documentMode||9<document.documentMode)}function V0(){ka&&(ka.detachEvent("onpropertychange",Uv),Ja=ka=null)}function Uv(t){if(t.propertyName==="value"&&gu(Ja)){var e=[];Dv(e,Ja,t,xp(t)),pv(T2,e)}}function b2(t,e,n){t==="focusin"?(V0(),ka=e,Ja=n,ka.attachEvent("onpropertychange",Uv)):t==="focusout"&&V0()}function C2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Ja)}function R2(t,e){if(t==="click")return gu(e)}function P2(t,e){if(t==="input"||t==="change")return gu(e)}function L2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ji=typeof Object.is=="function"?Object.is:L2;function Qa(t,e){if(Ji(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Af.call(e,r)||!Ji(t[r],e[r]))return!1}return!0}function G0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function W0(t,e){var n=G0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G0(n)}}function Fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kv(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function I2(t){var e=kv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fv(n.ownerDocument.documentElement,n)){if(i!==null&&Cp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=W0(n,s);var o=W0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D2=Ar&&"documentMode"in document&&11>=document.documentMode,_o=null,Xf=null,Oa=null,jf=!1;function X0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||_o==null||_o!==Oc(i)||(i=_o,"selectionStart"in i&&Cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&Qa(Oa,i)||(Oa=i,i=Xc(Xf,"onSelect"),0<i.length&&(e=new Tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_o)))}function zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xo={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},wd={},Ov={};Ar&&(Ov=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function vu(t){if(wd[t])return wd[t];if(!xo[t])return t;var e=xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ov)return wd[t]=e[n];return t}var zv=vu("animationend"),Bv=vu("animationiteration"),Hv=vu("animationstart"),Vv=vu("transitionend"),Gv=new Map,j0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(t,e){Gv.set(t,e),Ws(e,[t])}for(var Ed=0;Ed<j0.length;Ed++){var Td=j0[Ed],N2=Td.toLowerCase(),U2=Td[0].toUpperCase()+Td.slice(1);us(N2,"on"+U2)}us(zv,"onAnimationEnd");us(Bv,"onAnimationIteration");us(Hv,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(Vv,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function q0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ny(i,e,void 0,t),t.currentTarget=null}function Wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;q0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;q0(r,a,c),s=l}}}if(Bc)throw t=Hf,Bc=!1,Hf=null,t}function Zt(t,e){var n=e[Zf];n===void 0&&(n=e[Zf]=new Set);var i=t+"__bubble";n.has(i)||(Xv(e,t,2,!1),n.add(i))}function Ad(t,e,n){var i=0;e&&(i|=4),Xv(n,t,i,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function el(t){if(!t[Bl]){t[Bl]=!0,J1.forEach(function(n){n!=="selectionchange"&&(F2.has(n)||Ad(n,!1,t),Ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,Ad("selectionchange",!1,e))}}function Xv(t,e,n,i){switch(Cv(e)){case 1:var r=Ky;break;case 4:r=Zy;break;default:r=wp}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ps(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pv(function(){var c=s,f=xp(n),h=[];e:{var m=Gv.get(t);if(m!==void 0){var g=Tp,y=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":g=f2;break;case"focusin":y="focus",g=yd;break;case"focusout":y="blur",g=yd;break;case"beforeblur":case"afterblur":g=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=U0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=e2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=m2;break;case zv:case Bv:case Hv:g=i2;break;case Vv:g=v2;break;case"scroll":g=Jy;break;case"wheel":g=x2;break;case"copy":case"cut":case"paste":g=s2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=k0}var E=(e&4)!==0,_=!E&&t==="scroll",u=E?m!==null?m+"Capture":null:m;E=[];for(var v=c,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,u!==null&&(w=Ya(v,u),w!=null&&E.push(tl(v,w,x)))),_)break;v=v.return}0<E.length&&(m=new g(m,y,null,n,f),h.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Of&&(y=n.relatedTarget||n.fromElement)&&(Ps(y)||y[br]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Ps(y):null,y!==null&&(_=Xs(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(E=U0,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=k0,w="onPointerLeave",u="onPointerEnter",v="pointer"),_=g==null?m:yo(g),x=y==null?m:yo(y),m=new E(w,v+"leave",g,n,f),m.target=_,m.relatedTarget=x,w=null,Ps(f)===c&&(E=new E(u,v+"enter",y,n,f),E.target=x,E.relatedTarget=_,w=E),_=w,g&&y)t:{for(E=g,u=y,v=0,x=E;x;x=Qs(x))v++;for(x=0,w=u;w;w=Qs(w))x++;for(;0<v-x;)E=Qs(E),v--;for(;0<x-v;)u=Qs(u),x--;for(;v--;){if(E===u||u!==null&&E===u.alternate)break t;E=Qs(E),u=Qs(u)}E=null}else E=null;g!==null&&Y0(h,m,g,E,!1),y!==null&&_!==null&&Y0(h,_,y,E,!0)}}e:{if(m=c?yo(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var R=A2;else if(B0(m))if(Nv)R=P2;else{R=C2;var P=b2}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=R2);if(R&&(R=R(t,c))){Dv(h,R,n,f);break e}P&&P(t,m,c),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Df(m,"number",m.value)}switch(P=c?yo(c):window,t){case"focusin":(B0(P)||P.contentEditable==="true")&&(_o=P,Xf=c,Oa=null);break;case"focusout":Oa=Xf=_o=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,X0(h,n,f);break;case"selectionchange":if(D2)break;case"keydown":case"keyup":X0(h,n,f)}var L;if(bp)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vo?Lv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Pv&&n.locale!=="ko"&&(vo||D!=="onCompositionStart"?D==="onCompositionEnd"&&vo&&(L=Rv()):(Yr=f,Ep="value"in Yr?Yr.value:Yr.textContent,vo=!0)),P=Xc(c,D),0<P.length&&(D=new F0(D,t,null,n,f),h.push({event:D,listeners:P}),L?D.data=L:(L=Iv(n),L!==null&&(D.data=L)))),(L=M2?S2(t,n):w2(t,n))&&(c=Xc(c,"onBeforeInput"),0<c.length&&(f=new F0("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=L))}Wv(h,e)})}function tl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(tl(t,s,r)),s=Ya(t,e),s!=null&&i.push(tl(t,s,r))),t=t.return}return i}function Qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Y0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ya(n,s),l!=null&&o.unshift(tl(n,l,a))):r||(l=Ya(n,s),l!=null&&o.push(tl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var k2=/\r\n?/g,O2=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(k2,`
`).replace(O2,"")}function Hl(t,e,n){if(e=$0(e),$0(t)!==e&&n)throw Error(we(425))}function jc(){}var qf=null,Yf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,z2=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,B2=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(H2)}:Kf;function H2(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),sr="__reactFiber$"+Zo,nl="__reactProps$"+Zo,br="__reactContainer$"+Zo,Zf="__reactEvents$"+Zo,V2="__reactListeners$"+Zo,G2="__reactHandles$"+Zo;function Ps(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Z0(t);t!==null;){if(n=t[sr])return n;t=Z0(t)}return e}t=n,n=t.parentNode}return null}function vl(t){return t=t[sr]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function _u(t){return t[nl]||null}var Jf=[],Mo=-1;function ds(t){return{current:t}}function Jt(t){0>Mo||(t.current=Jf[Mo],Jf[Mo]=null,Mo--)}function Kt(t,e){Mo++,Jf[Mo]=t.current,t.current=e}var as={},$n=ds(as),fi=ds(!1),ks=as;function Oo(t,e){var n=t.type.contextTypes;if(!n)return as;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hi(t){return t=t.childContextTypes,t!=null}function qc(){Jt(fi),Jt($n)}function J0(t,e,n){if($n.current!==as)throw Error(we(168));Kt($n,e),Kt(fi,n)}function jv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,by(t)||"Unknown",r));return an({},n,i)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,ks=$n.current,Kt($n,t),Kt(fi,fi.current),!0}function Q0(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=jv(t,e,ks),i.__reactInternalMemoizedMergedChildContext=t,Jt(fi),Jt($n),Kt($n,t)):Jt(fi),Kt(fi,n)}var yr=null,xu=!1,Rd=!1;function qv(t){yr===null?yr=[t]:yr.push(t)}function W2(t){xu=!0,qv(t)}function fs(){if(!Rd&&yr!==null){Rd=!0;var t=0,e=Bt;try{var n=yr;for(Bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yr=null,xu=!1}catch(r){throw yr!==null&&(yr=yr.slice(t+1)),_v(yp,fs),r}finally{Bt=e,Rd=!1}}return null}var So=[],wo=0,$c=null,Kc=0,Ii=[],Di=0,Os=null,Mr=1,Sr="";function Es(t,e){So[wo++]=Kc,So[wo++]=$c,$c=t,Kc=e}function Yv(t,e,n){Ii[Di++]=Mr,Ii[Di++]=Sr,Ii[Di++]=Os,Os=t;var i=Mr;t=Sr;var r=32-$i(i)-1;i&=~(1<<r),n+=1;var s=32-$i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mr=1<<32-$i(e)+r|n<<r|i,Sr=s+t}else Mr=1<<s|n<<r|i,Sr=t}function Rp(t){t.return!==null&&(Es(t,1),Yv(t,1,0))}function Pp(t){for(;t===$c;)$c=So[--wo],So[wo]=null,Kc=So[--wo],So[wo]=null;for(;t===Os;)Os=Ii[--Di],Ii[Di]=null,Sr=Ii[--Di],Ii[Di]=null,Mr=Ii[--Di],Ii[Di]=null}var wi=null,Si=null,nn=!1,ji=null;function $v(t,e){var n=Ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Si=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Os!==null?{id:Mr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Si=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(nn){var e=Si;if(e){var n=e;if(!eg(t,e)){if(Qf(t))throw Error(we(418));e=Qr(n.nextSibling);var i=wi;e&&eg(t,e)?$v(i,n):(t.flags=t.flags&-4097|2,nn=!1,wi=t)}}else{if(Qf(t))throw Error(we(418));t.flags=t.flags&-4097|2,nn=!1,wi=t}}}function tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function Vl(t){if(t!==wi)return!1;if(!nn)return tg(t),nn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=Si)){if(Qf(t))throw Kv(),Error(we(418));for(;e;)$v(t,e),e=Qr(e.nextSibling)}if(tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Si=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Si=null}}else Si=wi?Qr(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=Si;t;)t=Qr(t.nextSibling)}function zo(){Si=wi=null,nn=!1}function Lp(t){ji===null?ji=[t]:ji.push(t)}var X2=Pr.ReactCurrentBatchConfig;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ng(t){var e=t._init;return e(t._payload)}function Zv(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=is(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,w){return v===null||v.tag!==6?(v=Fd(x,u.mode,w),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,w){var R=x.type;return R===go?f(u,v,x.props.children,w,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gr&&ng(R)===v.type)?(w=r(v,x.props),w.ref=va(u,v,x),w.return=u,w):(w=Ic(x.type,x.key,x.props,null,u.mode,w),w.ref=va(u,v,x),w.return=u,w)}function c(u,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=kd(x,u.mode,w),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function f(u,v,x,w,R){return v===null||v.tag!==7?(v=Fs(x,u.mode,w,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Fd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:return x=Ic(v.type,v.key,v.props,null,u.mode,x),x.ref=va(u,null,v),x.return=u,x;case mo:return v=kd(v,u.mode,x),v.return=u,v;case Gr:var w=v._init;return h(u,w(v._payload),x)}if(Pa(v)||fa(v))return v=Fs(v,u.mode,x,null),v.return=u,v;Gl(u,v)}return null}function m(u,v,x,w){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Il:return x.key===R?l(u,v,x,w):null;case mo:return x.key===R?c(u,v,x,w):null;case Gr:return R=x._init,m(u,v,R(x._payload),w)}if(Pa(x)||fa(x))return R!==null?null:f(u,v,x,w,null);Gl(u,x)}return null}function g(u,v,x,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(x)||null,a(v,u,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Il:return u=u.get(w.key===null?x:w.key)||null,l(v,u,w,R);case mo:return u=u.get(w.key===null?x:w.key)||null,c(v,u,w,R);case Gr:var P=w._init;return g(u,v,x,P(w._payload),R)}if(Pa(w)||fa(w))return u=u.get(x)||null,f(v,u,w,R,null);Gl(v,w)}return null}function y(u,v,x,w){for(var R=null,P=null,L=v,D=v=0,T=null;L!==null&&D<x.length;D++){L.index>D?(T=L,L=null):T=L.sibling;var S=m(u,L,x[D],w);if(S===null){L===null&&(L=T);break}t&&L&&S.alternate===null&&e(u,L),v=s(S,v,D),P===null?R=S:P.sibling=S,P=S,L=T}if(D===x.length)return n(u,L),nn&&Es(u,D),R;if(L===null){for(;D<x.length;D++)L=h(u,x[D],w),L!==null&&(v=s(L,v,D),P===null?R=L:P.sibling=L,P=L);return nn&&Es(u,D),R}for(L=i(u,L);D<x.length;D++)T=g(L,u,D,x[D],w),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?D:T.key),v=s(T,v,D),P===null?R=T:P.sibling=T,P=T);return t&&L.forEach(function(F){return e(u,F)}),nn&&Es(u,D),R}function E(u,v,x,w){var R=fa(x);if(typeof R!="function")throw Error(we(150));if(x=R.call(x),x==null)throw Error(we(151));for(var P=R=null,L=v,D=v=0,T=null,S=x.next();L!==null&&!S.done;D++,S=x.next()){L.index>D?(T=L,L=null):T=L.sibling;var F=m(u,L,S.value,w);if(F===null){L===null&&(L=T);break}t&&L&&F.alternate===null&&e(u,L),v=s(F,v,D),P===null?R=F:P.sibling=F,P=F,L=T}if(S.done)return n(u,L),nn&&Es(u,D),R;if(L===null){for(;!S.done;D++,S=x.next())S=h(u,S.value,w),S!==null&&(v=s(S,v,D),P===null?R=S:P.sibling=S,P=S);return nn&&Es(u,D),R}for(L=i(u,L);!S.done;D++,S=x.next())S=g(L,u,D,S.value,w),S!==null&&(t&&S.alternate!==null&&L.delete(S.key===null?D:S.key),v=s(S,v,D),P===null?R=S:P.sibling=S,P=S);return t&&L.forEach(function(W){return e(u,W)}),nn&&Es(u,D),R}function _(u,v,x,w){if(typeof x=="object"&&x!==null&&x.type===go&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Il:e:{for(var R=x.key,P=v;P!==null;){if(P.key===R){if(R=x.type,R===go){if(P.tag===7){n(u,P.sibling),v=r(P,x.props.children),v.return=u,u=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gr&&ng(R)===P.type){n(u,P.sibling),v=r(P,x.props),v.ref=va(u,P,x),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}x.type===go?(v=Fs(x.props.children,u.mode,w,x.key),v.return=u,u=v):(w=Ic(x.type,x.key,x.props,null,u.mode,w),w.ref=va(u,v,x),w.return=u,u=w)}return o(u);case mo:e:{for(P=x.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=kd(x,u.mode,w),v.return=u,u=v}return o(u);case Gr:return P=x._init,_(u,v,P(x._payload),w)}if(Pa(x))return y(u,v,x,w);if(fa(x))return E(u,v,x,w);Gl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Fd(x,u.mode,w),v.return=u,u=v),o(u)):n(u,v)}return _}var Bo=Zv(!0),Jv=Zv(!1),Zc=ds(null),Jc=null,Eo=null,Ip=null;function Dp(){Ip=Eo=Jc=null}function Np(t){var e=Zc.current;Jt(Zc),t._currentValue=e}function th(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){Jc=t,Ip=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(di=!0),t.firstContext=null)}function Fi(t){var e=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(Jc===null)throw Error(we(308));Eo=t,Jc.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var Ls=null;function Up(t){Ls===null?Ls=[t]:Ls.push(t)}function Qv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Up(e)):(n.next=r.next,r.next=n),e.interleaved=n,Cr(t,i)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function es(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Cr(t,n)}return r=i.interleaved,r===null?(e.next=e,Up(i)):(e.next=r.next,r.next=e),i.interleaved=e,Cr(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mp(t,n)}}function ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,i){var r=t.updateQueue;Wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(m=e,g=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){h=y.call(g,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,m=typeof y=="function"?y.call(g,h,m):y,m==null)break e;h=an({},h,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Bs|=o,t.lanes=o,t.memoizedState=h}}function rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var _l={},cr=ds(_l),il=ds(_l),rl=ds(_l);function Is(t){if(t===_l)throw Error(we(174));return t}function kp(t,e){switch(Kt(rl,e),Kt(il,t),Kt(cr,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uf(e,t)}Jt(cr),Kt(cr,e)}function Ho(){Jt(cr),Jt(il),Jt(rl)}function t_(t){Is(rl.current);var e=Is(cr.current),n=Uf(e,t.type);e!==n&&(Kt(il,t),Kt(cr,n))}function Op(t){il.current===t&&(Jt(cr),Jt(il))}var sn=ds(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pd=[];function zp(){for(var t=0;t<Pd.length;t++)Pd[t]._workInProgressVersionPrimary=null;Pd.length=0}var bc=Pr.ReactCurrentDispatcher,Ld=Pr.ReactCurrentBatchConfig,zs=0,on=null,An=null,Dn=null,tu=!1,za=!1,sl=0,j2=0;function Gn(){throw Error(we(321))}function Bp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ji(t[n],e[n]))return!1;return!0}function Hp(t,e,n,i,r,s){if(zs=s,on=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bc.current=t===null||t.memoizedState===null?K2:Z2,t=n(i,r),za){s=0;do{if(za=!1,sl=0,25<=s)throw Error(we(301));s+=1,Dn=An=null,e.updateQueue=null,bc.current=J2,t=n(i,r)}while(za)}if(bc.current=nu,e=An!==null&&An.next!==null,zs=0,Dn=An=on=null,tu=!1,e)throw Error(we(300));return t}function Vp(){var t=sl!==0;return sl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?on.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function ki(){if(An===null){var t=on.alternate;t=t!==null?t.memoizedState:null}else t=An.next;var e=Dn===null?on.memoizedState:Dn.next;if(e!==null)Dn=e,An=t;else{if(t===null)throw Error(we(310));An=t,t={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Dn===null?on.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function ol(t,e){return typeof e=="function"?e(t):e}function Id(t){var e=ki(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=An,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((zs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,on.lanes|=f,Bs|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ji(i,e.memoizedState)||(di=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,on.lanes|=s,Bs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=ki(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ji(s,e.memoizedState)||(di=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n_(){}function i_(t,e){var n=on,i=ki(),r=e(),s=!Ji(i.memoizedState,r);if(s&&(i.memoizedState=r,di=!0),i=i.queue,Gp(o_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dn!==null&&Dn.memoizedState.tag&1){if(n.flags|=2048,al(9,s_.bind(null,n,i,r,e),void 0,null),Nn===null)throw Error(we(349));zs&30||r_(n,e,r)}return r}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=on.updateQueue,e===null?(e={lastEffect:null,stores:null},on.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s_(t,e,n,i){e.value=n,e.getSnapshot=i,a_(e)&&l_(t)}function o_(t,e,n){return n(function(){a_(e)&&l_(t)})}function a_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ji(t,n)}catch{return!0}}function l_(t){var e=Cr(t,1);e!==null&&Ki(e,t,1,-1)}function sg(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=$2.bind(null,on,t),[e.memoizedState,t]}function al(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=on.updateQueue,e===null?(e={lastEffect:null,stores:null},on.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c_(){return ki().memoizedState}function Cc(t,e,n,i){var r=ir();on.flags|=t,r.memoizedState=al(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=ki();i=i===void 0?null:i;var s=void 0;if(An!==null){var o=An.memoizedState;if(s=o.destroy,i!==null&&Bp(i,o.deps)){r.memoizedState=al(e,n,s,i);return}}on.flags|=t,r.memoizedState=al(1|e,n,s,i)}function og(t,e){return Cc(8390656,8,t,e)}function Gp(t,e){return yu(2048,8,t,e)}function u_(t,e){return yu(4,2,t,e)}function d_(t,e){return yu(4,4,t,e)}function f_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,f_.bind(null,e,t),n)}function Wp(){}function p_(t,e){var n=ki();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m_(t,e){var n=ki();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g_(t,e,n){return zs&21?(Ji(n,e)||(n=Mv(),on.lanes|=n,Bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,di=!0),t.memoizedState=n)}function q2(t,e){var n=Bt;Bt=n!==0&&4>n?n:4,t(!0);var i=Ld.transition;Ld.transition={};try{t(!1),e()}finally{Bt=n,Ld.transition=i}}function v_(){return ki().memoizedState}function Y2(t,e,n){var i=ns(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},__(t))x_(e,n);else if(n=Qv(t,e,n,i),n!==null){var r=ii();Ki(n,t,i,r),y_(n,e,i)}}function $2(t,e,n){var i=ns(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(__(t))x_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ji(a,o)){var l=e.interleaved;l===null?(r.next=r,Up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qv(t,e,r,i),n!==null&&(r=ii(),Ki(n,t,i,r),y_(n,e,i))}}function __(t){var e=t.alternate;return t===on||e!==null&&e===on}function x_(t,e){za=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mp(t,n)}}var nu={readContext:Fi,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},K2={readContext:Fi,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:Fi,useEffect:og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,f_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ir();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Y2.bind(null,on,t),[i.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:sg,useDebugValue:Wp,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=sg(!1),e=t[0];return t=q2.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=on,r=ir();if(nn){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Nn===null)throw Error(we(349));zs&30||r_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,og(o_.bind(null,i,s,t),[t]),i.flags|=2048,al(9,s_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ir(),e=Nn.identifierPrefix;if(nn){var n=Sr,i=Mr;n=(i&~(1<<32-$i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=j2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z2={readContext:Fi,useCallback:p_,useContext:Fi,useEffect:Gp,useImperativeHandle:h_,useInsertionEffect:u_,useLayoutEffect:d_,useMemo:m_,useReducer:Id,useRef:c_,useState:function(){return Id(ol)},useDebugValue:Wp,useDeferredValue:function(t){var e=ki();return g_(e,An.memoizedState,t)},useTransition:function(){var t=Id(ol)[0],e=ki().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:v_,unstable_isNewReconciler:!1},J2={readContext:Fi,useCallback:p_,useContext:Fi,useEffect:Gp,useImperativeHandle:h_,useInsertionEffect:u_,useLayoutEffect:d_,useMemo:m_,useReducer:Dd,useRef:c_,useState:function(){return Dd(ol)},useDebugValue:Wp,useDeferredValue:function(t){var e=ki();return An===null?e.memoizedState=t:g_(e,An.memoizedState,t)},useTransition:function(){var t=Dd(ol)[0],e=ki().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:v_,unstable_isNewReconciler:!1};function Wi(t,e){if(t&&t.defaultProps){e=an({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:an({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?Xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ii(),r=ns(t),s=Er(i,r);s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&(Ki(e,t,r,i),Ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ii(),r=ns(t),s=Er(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&(Ki(e,t,r,i),Ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ii(),i=ns(t),r=Er(n,i);r.tag=2,e!=null&&(r.callback=e),e=es(t,r,i),e!==null&&(Ki(e,t,i,n),Ac(e,t,i))}};function ag(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,s):!0}function M_(t,e,n){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=Fi(s):(r=hi(e)?ks:$n.current,i=e.contextTypes,s=(i=i!=null)?Oo(t,r):as),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function ih(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fi(s):(s=hi(e)?ks:$n.current,r.context=Oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mu.enqueueReplaceState(r,r.state,null),Qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=Ay(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q2=typeof WeakMap=="function"?WeakMap:Map;function S_(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ru||(ru=!0,ph=i),rh(t,e)},n}function w_(t,e,n){n=Er(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof i!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q2;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hM.bind(null,t,e,n),e.then(t,t))}function ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,es(n,e,1))),n.lanes|=1),t)}var eM=Pr.ReactCurrentOwner,di=!1;function ni(t,e,n,i){e.child=t===null?Jv(e,null,n,i):Bo(e,t.child,n,i)}function fg(t,e,n,i,r){n=n.render;var s=e.ref;return Io(e,r),i=Hp(t,e,n,i,s,r),n=Vp(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Rr(t,e,r)):(nn&&n&&Rp(e),e.flags|=1,ni(t,e,i,r),e.child)}function hg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,i,r)):(t=Ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,i)&&t.ref===e.ref)return Rr(t,e,r)}return e.flags|=1,t=is(s,i),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qa(s,i)&&t.ref===e.ref)if(di=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(di=!0);else return e.lanes=t.lanes,Rr(t,e,r)}return sh(t,e,n,i,r)}function T_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(Ao,yi),yi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Kt(Ao,yi),yi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Kt(Ao,yi),yi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Kt(Ao,yi),yi|=i;return ni(t,e,r,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sh(t,e,n,i,r){var s=hi(n)?ks:$n.current;return s=Oo(e,s),Io(e,r),n=Hp(t,e,n,i,s,r),i=Vp(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Rr(t,e,r)):(nn&&i&&Rp(e),e.flags|=1,ni(t,e,n,r),e.child)}function pg(t,e,n,i,r){if(hi(n)){var s=!0;Yc(e)}else s=!1;if(Io(e,r),e.stateNode===null)Rc(t,e),M_(e,n,i),ih(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fi(c):(c=hi(n)?ks:$n.current,c=Oo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&lg(e,o,i,c),Wr=!1;var m=e.memoizedState;o.state=m,Qc(e,i,o,r),l=e.memoizedState,a!==i||m!==l||fi.current||Wr?(typeof f=="function"&&(nh(e,n,f,i),l=e.memoizedState),(a=Wr||ag(e,n,a,i,m,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,e_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wi(e.type,a),o.props=c,h=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fi(l):(l=hi(n)?ks:$n.current,l=Oo(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==l)&&lg(e,o,i,l),Wr=!1,m=e.memoizedState,o.state=m,Qc(e,i,o,r);var y=e.memoizedState;a!==h||m!==y||fi.current||Wr?(typeof g=="function"&&(nh(e,n,g,i),y=e.memoizedState),(c=Wr||ag(e,n,c,i,m,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return oh(t,e,n,i,s,r)}function oh(t,e,n,i,r,s){A_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Q0(e,n,!1),Rr(t,e,s);i=e.stateNode,eM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bo(e,t.child,null,s),e.child=Bo(e,null,a,s)):ni(t,e,a,s),e.memoizedState=i.state,r&&Q0(e,n,!0),e.child}function b_(t){var e=t.stateNode;e.pendingContext?J0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&J0(t,e.context,!1),kp(t,e.containerInfo)}function mg(t,e,n,i,r){return zo(),Lp(r),e.flags|=256,ni(t,e,n,i),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var i=e.pendingProps,r=sn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Kt(sn,r&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,i,0,null),t=Fs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lh(n),e.memoizedState=ah,t):Xp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=is(a,s):(s=Fs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ah,i}return s=t.child,t=s.sibling,i=is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xp(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,i){return i!==null&&Lp(i),Bo(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nd(Error(we(422))),Wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Eu({mode:"visible",children:i.children},r,0,null),s=Fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bo(e,t.child,null,o),e.child.memoizedState=lh(o),e.memoizedState=ah,s);if(!(e.mode&1))return Wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=Nd(s,i,void 0),Wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,di||a){if(i=Nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Cr(t,r),Ki(i,t,r,-1))}return Zp(),i=Nd(Error(we(421))),Wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Si=Qr(r.nextSibling),wi=e,nn=!0,ji=null,t!==null&&(Ii[Di++]=Mr,Ii[Di++]=Sr,Ii[Di++]=Os,Mr=t.id,Sr=t.overflow,Os=e),e=Xp(e,i.children),e.flags|=4096,e)}function gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),th(t.return,e,n)}function Ud(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function R_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ni(t,e,i.children,n),i=sn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,n,e);else if(t.tag===19)gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Kt(sn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ud(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&eu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ud(e,!0,n,null,s);break;case"together":Ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=is(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=is(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nM(t,e,n){switch(e.tag){case 3:b_(e),zo();break;case 5:t_(e);break;case 1:hi(e.type)&&Yc(e);break;case 4:kp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Kt(Zc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Kt(sn,sn.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(Kt(sn,sn.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);Kt(sn,sn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return R_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Kt(sn,sn.current),i)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Rr(t,e,n)}var P_,ch,L_,I_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ch=function(){};L_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Is(cr.current);var s=null;switch(n){case"input":r=Lf(t,r),i=Lf(t,i),s=[];break;case"select":r=an({},r,{value:void 0}),i=an({},i,{value:void 0}),s=[];break;case"textarea":r=Nf(t,r),i=Nf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jc)}Ff(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ja.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Zt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function _a(t,e){if(!nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iM(t,e,n){var i=e.pendingProps;switch(Pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wn(e),null;case 1:return hi(e.type)&&qc(),Wn(e),null;case 3:return i=e.stateNode,Ho(),Jt(fi),Jt($n),zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ji!==null&&(vh(ji),ji=null))),ch(t,e),Wn(e),null;case 5:Op(e);var r=Is(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)L_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Wn(e),null}if(t=Is(cr.current),Vl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sr]=e,i[nl]=s,t=(e.mode&1)!==0,n){case"dialog":Zt("cancel",i),Zt("close",i);break;case"iframe":case"object":case"embed":Zt("load",i);break;case"video":case"audio":for(r=0;r<Ia.length;r++)Zt(Ia[r],i);break;case"source":Zt("error",i);break;case"img":case"image":case"link":Zt("error",i),Zt("load",i);break;case"details":Zt("toggle",i);break;case"input":T0(i,s),Zt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Zt("invalid",i);break;case"textarea":b0(i,s),Zt("invalid",i)}Ff(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hl(i.textContent,a,t),r=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Zt("scroll",i)}switch(n){case"input":Dl(i),A0(i,s,!0);break;case"textarea":Dl(i),C0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ov(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[sr]=e,t[nl]=i,P_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kf(n,i),n){case"dialog":Zt("cancel",t),Zt("close",t),r=i;break;case"iframe":case"object":case"embed":Zt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ia.length;r++)Zt(Ia[r],t);r=i;break;case"source":Zt("error",t),r=i;break;case"img":case"image":case"link":Zt("error",t),Zt("load",t),r=i;break;case"details":Zt("toggle",t),r=i;break;case"input":T0(t,i),r=Lf(t,i),Zt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=an({},i,{value:void 0}),Zt("invalid",t);break;case"textarea":b0(t,i),r=Nf(t,i),Zt("invalid",t);break;default:r=i}Ff(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&av(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qa(t,l):typeof l=="number"&&qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Zt("scroll",t):l!=null&&mp(t,s,l,o))}switch(n){case"input":Dl(t),A0(t,i,!1);break;case"textarea":Dl(t),C0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Co(t,!!i.multiple,s,!1):i.defaultValue!=null&&Co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wn(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=Is(rl.current),Is(cr.current),Vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[sr]=e,(s=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sr]=e,e.stateNode=i}return Wn(e),null;case 13:if(Jt(sn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Si!==null&&e.mode&1&&!(e.flags&128))Kv(),zo(),e.flags|=98560,s=!1;else if(s=Vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[sr]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wn(e),s=!1}else ji!==null&&(vh(ji),ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||sn.current&1?bn===0&&(bn=3):Zp())),e.updateQueue!==null&&(e.flags|=4),Wn(e),null);case 4:return Ho(),ch(t,e),t===null&&el(e.stateNode.containerInfo),Wn(e),null;case 10:return Np(e.type._context),Wn(e),null;case 17:return hi(e.type)&&qc(),Wn(e),null;case 19:if(Jt(sn),s=e.memoizedState,s===null)return Wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_a(s,!1);else{if(bn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,_a(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Kt(sn,sn.current&1|2),e.child}t=t.sibling}s.tail!==null&&pn()>Go&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304)}else{if(!i)if(t=eu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nn)return Wn(e),null}else 2*pn()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pn(),e.sibling=null,n=sn.current,Kt(sn,i?n&1|2:n&1),e):(Wn(e),null);case 22:case 23:return Kp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Wn(e),e.subtreeFlags&6&&(e.flags|=8192)):Wn(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function rM(t,e){switch(Pp(e),e.tag){case 1:return hi(e.type)&&qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),Jt(fi),Jt($n),zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Op(e),null;case 13:if(Jt(sn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Jt(sn),null;case 4:return Ho(),null;case 10:return Np(e.type._context),null;case 22:case 23:return Kp(),null;case 24:return null;default:return null}}var Xl=!1,Yn=!1,sM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function To(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dn(t,e,i)}else n.current=null}function uh(t,e,n){try{n()}catch(i){dn(t,e,i)}}var vg=!1;function oM(t,e){if(qf=Gc,t=kv(),Cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,m=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++f===i&&(l=o),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:t,selectionRange:n},Gc=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,_=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wi(e.type,E),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(w){dn(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return y=vg,vg=!1,y}function Ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&uh(e,n,s)}r=r.next}while(r!==i)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D_(t){var e=t.alternate;e!==null&&(t.alternate=null,D_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[nl],delete e[Zf],delete e[V2],delete e[G2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function _g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jc));else if(i!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}function hh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}var On=null,Xi=!1;function Ur(t,e,n){for(n=n.child;n!==null;)U_(t,e,n),n=n.sibling}function U_(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:Yn||To(n,e);case 6:var i=On,r=Xi;On=null,Ur(t,e,n),On=i,Xi=r,On!==null&&(Xi?(t=On,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):On.removeChild(n.stateNode));break;case 18:On!==null&&(Xi?(t=On,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),Za(t)):Cd(On,n.stateNode));break;case 4:i=On,r=Xi,On=n.stateNode.containerInfo,Xi=!0,Ur(t,e,n),On=i,Xi=r;break;case 0:case 11:case 14:case 15:if(!Yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),r=r.next}while(r!==i)}Ur(t,e,n);break;case 1:if(!Yn&&(To(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dn(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Yn=(i=Yn)||n.memoizedState!==null,Ur(t,e,n),Yn=i):Ur(t,e,n);break;default:Ur(t,e,n)}}function xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sM),e.forEach(function(i){var r=mM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:On=a.stateNode,Xi=!1;break e;case 3:On=a.stateNode.containerInfo,Xi=!0;break e;case 4:On=a.stateNode.containerInfo,Xi=!0;break e}a=a.return}if(On===null)throw Error(we(160));U_(s,o,r),On=null,Xi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){dn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zi(e,t),nr(t),i&4){try{Ba(3,t,t.return),Su(3,t)}catch(E){dn(t,t.return,E)}try{Ba(5,t,t.return)}catch(E){dn(t,t.return,E)}}break;case 1:zi(e,t),nr(t),i&512&&n!==null&&To(n,n.return);break;case 5:if(zi(e,t),nr(t),i&512&&n!==null&&To(n,n.return),t.flags&32){var r=t.stateNode;try{qa(r,"")}catch(E){dn(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rv(r,s),kf(a,o);var c=kf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?cv(r,h):f==="dangerouslySetInnerHTML"?av(r,h):f==="children"?qa(r,h):mp(r,f,h,c)}switch(a){case"input":If(r,s);break;case"textarea":sv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Co(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Co(r,!!s.multiple,s.defaultValue,!0):Co(r,!!s.multiple,s.multiple?[]:"",!1))}r[nl]=s}catch(E){dn(t,t.return,E)}}break;case 6:if(zi(e,t),nr(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){dn(t,t.return,E)}}break;case 3:if(zi(e,t),nr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(E){dn(t,t.return,E)}break;case 4:zi(e,t),nr(t);break;case 13:zi(e,t),nr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yp=pn())),i&4&&xg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Yn=(c=Yn)||f,zi(e,t),Yn=c):zi(e,t),nr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ge=t,f=t.child;f!==null;){for(h=Ge=f;Ge!==null;){switch(m=Ge,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ba(4,m,m.return);break;case 1:To(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){dn(i,n,E)}}break;case 5:To(m,m.return);break;case 22:if(m.memoizedState!==null){Mg(h);continue}}g!==null?(g.return=m,Ge=g):Mg(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lv("display",o))}catch(E){dn(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){dn(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zi(e,t),nr(t),i&4&&xg(t);break;case 21:break;default:zi(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var s=_g(t);hh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_g(t);fh(t,a,o);break;default:throw Error(we(161))}}catch(l){dn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aM(t,e,n){Ge=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yn;a=Xl;var c=Yn;if(Xl=o,(Yn=l)&&!c)for(Ge=r;Ge!==null;)o=Ge,l=o.child,o.tag===22&&o.memoizedState!==null?Sg(r):l!==null?(l.return=o,Ge=l):Sg(r);for(;s!==null;)Ge=s,k_(s),s=s.sibling;Ge=r,Xl=a,Yn=c}yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):yg(t)}}function yg(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yn||Su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Za(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}Yn||e.flags&512&&dh(e)}catch(m){dn(e,e.return,m)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Mg(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Sg(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(l){dn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dn(e,r,l)}}var s=e.return;try{dh(e)}catch(l){dn(e,s,l)}break;case 5:var o=e.return;try{dh(e)}catch(l){dn(e,o,l)}}}catch(l){dn(e,e.return,l)}if(e===t){Ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ge=a;break}Ge=e.return}}var lM=Math.ceil,iu=Pr.ReactCurrentDispatcher,jp=Pr.ReactCurrentOwner,Ui=Pr.ReactCurrentBatchConfig,Rt=0,Nn=null,vn=null,Hn=0,yi=0,Ao=ds(0),bn=0,ll=null,Bs=0,wu=0,qp=0,Ha=null,ui=null,Yp=0,Go=1/0,xr=null,ru=!1,ph=null,ts=null,jl=!1,$r=null,su=0,Va=0,mh=null,Pc=-1,Lc=0;function ii(){return Rt&6?pn():Pc!==-1?Pc:Pc=pn()}function ns(t){return t.mode&1?Rt&2&&Hn!==0?Hn&-Hn:X2.transition!==null?(Lc===0&&(Lc=Mv()),Lc):(t=Bt,t!==0||(t=window.event,t=t===void 0?16:Cv(t.type)),t):1}function Ki(t,e,n,i){if(50<Va)throw Va=0,mh=null,Error(we(185));ml(t,n,i),(!(Rt&2)||t!==Nn)&&(t===Nn&&(!(Rt&2)&&(wu|=n),bn===4&&jr(t,Hn)),pi(t,i),n===1&&Rt===0&&!(e.mode&1)&&(Go=pn()+500,xu&&fs()))}function pi(t,e){var n=t.callbackNode;Xy(t,e);var i=Vc(t,t===Nn?Hn:0);if(i===0)n!==null&&L0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&L0(n),e===1)t.tag===0?W2(wg.bind(null,t)):qv(wg.bind(null,t)),B2(function(){!(Rt&6)&&fs()}),n=null;else{switch(Sv(i)){case 1:n=yp;break;case 4:n=xv;break;case 16:n=Hc;break;case 536870912:n=yv;break;default:n=Hc}n=X_(n,O_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O_(t,e){if(Pc=-1,Lc=0,Rt&6)throw Error(we(327));var n=t.callbackNode;if(Do()&&t.callbackNode!==n)return null;var i=Vc(t,t===Nn?Hn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ou(t,i);else{e=i;var r=Rt;Rt|=2;var s=B_();(Nn!==t||Hn!==e)&&(xr=null,Go=pn()+500,Us(t,e));do try{dM();break}catch(a){z_(t,a)}while(!0);Dp(),iu.current=s,Rt=r,vn!==null?e=0:(Nn=null,Hn=0,e=bn)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=gh(t,r))),e===1)throw n=ll,Us(t,0),jr(t,i),pi(t,pn()),n;if(e===6)jr(t,i);else{if(r=t.current.alternate,!(i&30)&&!cM(r)&&(e=ou(t,i),e===2&&(s=Vf(t),s!==0&&(i=s,e=gh(t,s))),e===1))throw n=ll,Us(t,0),jr(t,i),pi(t,pn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:Ts(t,ui,xr);break;case 3:if(jr(t,i),(i&130023424)===i&&(e=Yp+500-pn(),10<e)){if(Vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ii(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kf(Ts.bind(null,t,ui,xr),e);break}Ts(t,ui,xr);break;case 4:if(jr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lM(i/1960))-i,10<i){t.timeoutHandle=Kf(Ts.bind(null,t,ui,xr),i);break}Ts(t,ui,xr);break;case 5:Ts(t,ui,xr);break;default:throw Error(we(329))}}}return pi(t,pn()),t.callbackNode===n?O_.bind(null,t):null}function gh(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Us(t,e).flags|=256),t=ou(t,e),t!==2&&(e=ui,ui=n,e!==null&&vh(e)),t}function vh(t){ui===null?ui=t:ui.push.apply(ui,t)}function cM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ji(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~qp,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$i(e),i=1<<n;t[n]=-1,e&=~i}}function wg(t){if(Rt&6)throw Error(we(327));Do();var e=Vc(t,0);if(!(e&1))return pi(t,pn()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=gh(t,i))}if(n===1)throw n=ll,Us(t,0),jr(t,e),pi(t,pn()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ts(t,ui,xr),pi(t,pn()),null}function $p(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(Go=pn()+500,xu&&fs())}}function Hs(t){$r!==null&&$r.tag===0&&!(Rt&6)&&Do();var e=Rt;Rt|=1;var n=Ui.transition,i=Bt;try{if(Ui.transition=null,Bt=1,t)return t()}finally{Bt=i,Ui.transition=n,Rt=e,!(Rt&6)&&fs()}}function Kp(){yi=Ao.current,Jt(Ao)}function Us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z2(n)),vn!==null)for(n=vn.return;n!==null;){var i=n;switch(Pp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&qc();break;case 3:Ho(),Jt(fi),Jt($n),zp();break;case 5:Op(i);break;case 4:Ho();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Np(i.type._context);break;case 22:case 23:Kp()}n=n.return}if(Nn=t,vn=t=is(t.current,null),Hn=yi=e,bn=0,ll=null,qp=wu=Bs=0,ui=Ha=null,Ls!==null){for(e=0;e<Ls.length;e++)if(n=Ls[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ls=null}return t}function z_(t,e){do{var n=vn;try{if(Dp(),bc.current=nu,tu){for(var i=on.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tu=!1}if(zs=0,Dn=An=on=null,za=!1,sl=0,jp.current=null,n===null||n.return===null){bn=1,ll=e,vn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Hn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ug(o);if(g!==null){g.flags&=-257,dg(g,o,a,s,e),g.mode&1&&cg(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){cg(s,c,e),Zp();break e}l=Error(we(426))}}else if(nn&&a.mode&1){var _=ug(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),dg(_,o,a,s,e),Lp(Vo(l,a));break e}}s=l=Vo(l,a),bn!==4&&(bn=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=S_(s,l,e);ig(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ts===null||!ts.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=w_(s,a,e);ig(s,w);break e}}s=s.return}while(s!==null)}V_(n)}catch(R){e=R,vn===n&&n!==null&&(vn=n=n.return);continue}break}while(!0)}function B_(){var t=iu.current;return iu.current=nu,t===null?nu:t}function Zp(){(bn===0||bn===3||bn===2)&&(bn=4),Nn===null||!(Bs&268435455)&&!(wu&268435455)||jr(Nn,Hn)}function ou(t,e){var n=Rt;Rt|=2;var i=B_();(Nn!==t||Hn!==e)&&(xr=null,Us(t,e));do try{uM();break}catch(r){z_(t,r)}while(!0);if(Dp(),Rt=n,iu.current=i,vn!==null)throw Error(we(261));return Nn=null,Hn=0,bn}function uM(){for(;vn!==null;)H_(vn)}function dM(){for(;vn!==null&&!Fy();)H_(vn)}function H_(t){var e=W_(t.alternate,t,yi);t.memoizedProps=t.pendingProps,e===null?V_(t):vn=e,jp.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rM(n,e),n!==null){n.flags&=32767,vn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bn=6,vn=null;return}}else if(n=iM(n,e,yi),n!==null){vn=n;return}if(e=e.sibling,e!==null){vn=e;return}vn=e=t}while(e!==null);bn===0&&(bn=5)}function Ts(t,e,n){var i=Bt,r=Ui.transition;try{Ui.transition=null,Bt=1,fM(t,e,n,i)}finally{Ui.transition=r,Bt=i}return null}function fM(t,e,n,i){do Do();while($r!==null);if(Rt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jy(t,s),t===Nn&&(vn=Nn=null,Hn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,X_(Hc,function(){return Do(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ui.transition,Ui.transition=null;var o=Bt;Bt=1;var a=Rt;Rt|=4,jp.current=null,oM(t,n),F_(n,t),I2(Yf),Gc=!!qf,Yf=qf=null,t.current=n,aM(n),ky(),Rt=a,Bt=o,Ui.transition=s}else t.current=n;if(jl&&(jl=!1,$r=t,su=r),s=t.pendingLanes,s===0&&(ts=null),By(n.stateNode),pi(t,pn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ru)throw ru=!1,t=ph,ph=null,t;return su&1&&t.tag!==0&&Do(),s=t.pendingLanes,s&1?t===mh?Va++:(Va=0,mh=t):Va=0,fs(),null}function Do(){if($r!==null){var t=Sv(su),e=Ui.transition,n=Bt;try{if(Ui.transition=null,Bt=16>t?16:t,$r===null)var i=!1;else{if(t=$r,$r=null,su=0,Rt&6)throw Error(we(331));var r=Rt;for(Rt|=4,Ge=t.current;Ge!==null;){var s=Ge,o=s.child;if(Ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ge=c;Ge!==null;){var f=Ge;switch(f.tag){case 0:case 11:case 15:Ba(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ge=h;else for(;Ge!==null;){f=Ge;var m=f.sibling,g=f.return;if(D_(f),f===c){Ge=null;break}if(m!==null){m.return=g,Ge=m;break}Ge=g}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}Ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ge=o;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ge=u;break e}Ge=s.return}}var v=t.current;for(Ge=v;Ge!==null;){o=Ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ge=x;else e:for(o=v;Ge!==null;){if(a=Ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Su(9,a)}}catch(R){dn(a,a.return,R)}if(a===o){Ge=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Ge=w;break e}Ge=a.return}}if(Rt=r,fs(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{Bt=n,Ui.transition=e}}return!1}function Eg(t,e,n){e=Vo(n,e),e=S_(t,e,1),t=es(t,e,1),e=ii(),t!==null&&(ml(t,1,e),pi(t,e))}function dn(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ts===null||!ts.has(i))){t=Vo(n,t),t=w_(e,t,1),e=es(e,t,1),t=ii(),e!==null&&(ml(e,1,t),pi(e,t));break}}e=e.return}}function hM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ii(),t.pingedLanes|=t.suspendedLanes&n,Nn===t&&(Hn&n)===n&&(bn===4||bn===3&&(Hn&130023424)===Hn&&500>pn()-Yp?Us(t,0):qp|=n),pi(t,e)}function G_(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=ii();t=Cr(t,e),t!==null&&(ml(t,e,n),pi(t,n))}function pM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G_(t,n)}function mM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),G_(t,n)}var W_;W_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fi.current)di=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return di=!1,nM(t,e,n);di=!!(t.flags&131072)}else di=!1,nn&&e.flags&1048576&&Yv(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rc(t,e),t=e.pendingProps;var r=Oo(e,$n.current);Io(e,n),r=Hp(null,e,i,t,r,n);var s=Vp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hi(i)?(s=!0,Yc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fp(e),r.updater=Mu,e.stateNode=r,r._reactInternals=e,ih(e,i,t,n),e=oh(null,e,i,!0,s,n)):(e.tag=0,nn&&s&&Rp(e),ni(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vM(i),t=Wi(i,t),r){case 0:e=sh(null,e,i,t,n);break e;case 1:e=pg(null,e,i,t,n);break e;case 11:e=fg(null,e,i,t,n);break e;case 14:e=hg(null,e,i,Wi(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wi(i,r),sh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wi(i,r),pg(t,e,i,r,n);case 3:e:{if(b_(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e_(t,e),Qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(we(423)),e),e=mg(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(we(424)),e),e=mg(t,e,i,n,r);break e}else for(Si=Qr(e.stateNode.containerInfo.firstChild),wi=e,nn=!0,ji=null,n=Jv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=Rr(t,e,n);break e}ni(t,e,i,n)}e=e.child}return e;case 5:return t_(e),t===null&&eh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$f(i,r)?o=null:s!==null&&$f(i,s)&&(e.flags|=32),A_(t,e),ni(t,e,o,n),e.child;case 6:return t===null&&eh(e),null;case 13:return C_(t,e,n);case 4:return kp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bo(e,null,i,n):ni(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wi(i,r),fg(t,e,i,r,n);case 7:return ni(t,e,e.pendingProps,n),e.child;case 8:return ni(t,e,e.pendingProps.children,n),e.child;case 12:return ni(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Kt(Zc,i._currentValue),i._currentValue=o,s!==null)if(Ji(s.value,o)){if(s.children===r.children&&!fi.current){e=Rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Er(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),th(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ni(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,n),r=Fi(r),i=i(r),e.flags|=1,ni(t,e,i,n),e.child;case 14:return i=e.type,r=Wi(i,e.pendingProps),r=Wi(i.type,r),hg(t,e,i,r,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wi(i,r),Rc(t,e),e.tag=1,hi(i)?(t=!0,Yc(e)):t=!1,Io(e,n),M_(e,i,r),ih(e,i,r,n),oh(null,e,i,!0,t,n);case 19:return R_(t,e,n);case 22:return T_(t,e,n)}throw Error(we(156,e.tag))};function X_(t,e){return _v(t,e)}function gM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(t,e,n,i){return new gM(t,e,n,i)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vM(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vp)return 11;if(t===_p)return 14}return 2}function is(t,e){var n=t.alternate;return n===null?(n=Ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ic(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case go:return Fs(n.children,r,s,e);case gp:o=8,r|=8;break;case bf:return t=Ni(12,n,e,r|2),t.elementType=bf,t.lanes=s,t;case Cf:return t=Ni(13,n,e,r),t.elementType=Cf,t.lanes=s,t;case Rf:return t=Ni(19,n,e,r),t.elementType=Rf,t.lanes=s,t;case tv:return Eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q1:o=10;break e;case ev:o=9;break e;case vp:o=11;break e;case _p:o=14;break e;case Gr:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Ni(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fs(t,e,n,i){return t=Ni(7,t,i,e),t.lanes=n,t}function Eu(t,e,n,i){return t=Ni(22,t,i,e),t.elementType=tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Fd(t,e,n){return t=Ni(6,t,null,e),t.lanes=n,t}function kd(t,e,n){return e=Ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _M(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qp(t,e,n,i,r,s,o,a,l){return t=new _M(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(s),t}function xM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function j_(t){if(!t)return as;t=t._reactInternals;e:{if(Xs(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(hi(n))return jv(t,n,e)}return e}function q_(t,e,n,i,r,s,o,a,l){return t=Qp(n,i,!0,t,r,s,o,a,l),t.context=j_(null),n=t.current,i=ii(),r=ns(n),s=Er(i,r),s.callback=e??null,es(n,s,r),t.current.lanes=r,ml(t,r,i),pi(t,i),t}function Tu(t,e,n,i){var r=e.current,s=ii(),o=ns(r);return n=j_(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=es(r,e,o),t!==null&&(Ki(t,r,o,s),Ac(t,r,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function em(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function yM(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function tm(t){this._internalRoot=t}Au.prototype.render=tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));Tu(t,e,null,null)};Au.prototype.unmount=tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hs(function(){Tu(null,t,null,null)}),e[br]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&bv(t)}};function nm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function MM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=au(o);s.call(c)}}var o=q_(e,i,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[br]=o.current,el(t.nodeType===8?t.parentNode:t),Hs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=au(l);a.call(c)}}var l=Qp(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=l,t[br]=l.current,el(t.nodeType===8?t.parentNode:t),Hs(function(){Tu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=au(o);a.call(l)}}Tu(e,o,t,r)}else o=MM(n,e,t,r,i);return au(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(Mp(e,n|1),pi(e,pn()),!(Rt&6)&&(Go=pn()+500,fs()))}break;case 13:Hs(function(){var i=Cr(t,1);if(i!==null){var r=ii();Ki(i,t,1,r)}}),em(t,1)}};Sp=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=ii();Ki(e,t,134217728,n)}em(t,134217728)}};Ev=function(t){if(t.tag===13){var e=ns(t),n=Cr(t,e);if(n!==null){var i=ii();Ki(n,t,e,i)}em(t,e)}};Tv=function(){return Bt};Av=function(t,e){var n=Bt;try{return Bt=t,e()}finally{Bt=n}};zf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_u(i);if(!r)throw Error(we(90));iv(i),If(i,r)}}}break;case"textarea":sv(t,n);break;case"select":e=n.value,e!=null&&Co(t,!!n.multiple,e,!1)}};fv=$p;hv=Hs;var SM={usingClientEntryPoint:!1,Events:[vl,yo,_u,uv,dv,$p]},xa={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wM={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gv(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||yM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{pu=ql.inject(wM),lr=ql}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SM;Ti.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(e))throw Error(we(200));return xM(t,e,null,n)};Ti.createRoot=function(t,e){if(!nm(t))throw Error(we(299));var n=!1,i="",r=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qp(t,1,!1,null,null,n,!1,i,r),t[br]=e.current,el(t.nodeType===8?t.parentNode:t),new tm(e)};Ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=gv(e),t=t===null?null:t.stateNode,t};Ti.flushSync=function(t){return Hs(t)};Ti.hydrate=function(t,e,n){if(!bu(e))throw Error(we(200));return Cu(null,t,e,!0,n)};Ti.hydrateRoot=function(t,e,n){if(!nm(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,r,!1,s,o),t[br]=e.current,el(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Au(e)};Ti.render=function(t,e,n){if(!bu(e))throw Error(we(200));return Cu(null,t,e,!1,n)};Ti.unmountComponentAtNode=function(t){if(!bu(t))throw Error(we(40));return t._reactRootContainer?(Hs(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};Ti.unstable_batchedUpdates=$p;Ti.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bu(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Cu(t,e,n,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(t){console.error(t)}}$_(),$1.exports=Ti;var EM=$1.exports,K_,bg=EM;K_=bg.createRoot,bg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const im="180",TM=0,Cg=1,AM=2,Z_=1,J_=2,_r=3,ls=0,mi=1,$t=2,rs=0,No=1,Rg=2,Pg=3,Lg=4,bM=5,Cs=100,CM=101,RM=102,PM=103,LM=104,IM=200,DM=201,NM=202,UM=203,_h=204,xh=205,FM=206,kM=207,OM=208,zM=209,BM=210,HM=211,VM=212,GM=213,WM=214,yh=0,Mh=1,Sh=2,Wo=3,wh=4,Eh=5,Th=6,Ah=7,rm=0,XM=1,jM=2,ss=0,qM=1,YM=2,$M=3,Q_=4,KM=5,ZM=6,JM=7,ex=300,Xo=301,jo=302,bh=303,Ch=304,Ru=306,Uo=1e3,Ds=1001,Rh=1002,Zi=1003,QM=1004,Yl=1005,or=1006,Od=1007,Ns=1008,dr=1009,tx=1010,nx=1011,cl=1012,sm=1013,Vs=1014,wr=1015,xl=1016,om=1017,am=1018,ul=1020,ix=35902,rx=35899,sx=1021,ox=1022,Yi=1023,dl=1026,fl=1027,ax=1028,lm=1029,lx=1030,cm=1031,um=1033,Dc=33776,Nc=33777,Uc=33778,Fc=33779,Ph=35840,Lh=35841,Ih=35842,Dh=35843,Nh=36196,Uh=37492,Fh=37496,kh=37808,Oh=37809,zh=37810,Bh=37811,Hh=37812,Vh=37813,Gh=37814,Wh=37815,Xh=37816,jh=37817,qh=37818,Yh=37819,$h=37820,Kh=37821,Zh=36492,Jh=36494,Qh=36495,ep=36283,tp=36284,np=36285,ip=36286,eS=3200,tS=3201,dm=0,nS=1,qr="",Bn="srgb",qo="srgb-linear",lu="linear",Vt="srgb",eo=7680,Ig=519,iS=512,rS=513,sS=514,cx=515,oS=516,aS=517,lS=518,cS=519,Dg=35044,Ng="300 es",ar=2e3,cu=2001;class Jo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,rp=180/Math.PI;function yl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xn[t&255]+Xn[t>>8&255]+Xn[t>>16&255]+Xn[t>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]).toLowerCase()}function Mt(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function Bd(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const m=s[o+0],g=s[o+1],y=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=y,e[n+3]=E;return}if(h!==E||l!==m||c!==g||f!==y){let _=1-a;const u=l*m+c*g+f*y+h*E,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,u*v);_=Math.sin(_*P)/R,a=Math.sin(a*P)/R}const w=a*v;if(l=l*_+m*w,c=c*_+g*w,f=f*_+y*w,h=h*_+E*w,_===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],m=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+f*h+l*g-c*m,e[n+1]=l*y+f*m+c*h-a*g,e[n+2]=c*y+f*g+a*m-l*h,e[n+3]=f*y-a*h-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),m=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=m*f*h+c*g*y,this._y=c*g*h-m*f*y,this._z=c*f*y+m*g*h,this._w=c*f*h-m*g*y;break;case"YXZ":this._x=m*f*h+c*g*y,this._y=c*g*h-m*f*y,this._z=c*f*y-m*g*h,this._w=c*f*h+m*g*y;break;case"ZXY":this._x=m*f*h-c*g*y,this._y=c*g*h+m*f*y,this._z=c*f*y+m*g*h,this._w=c*f*h-m*g*y;break;case"ZYX":this._x=m*f*h-c*g*y,this._y=c*g*h+m*f*y,this._z=c*f*y-m*g*h,this._w=c*f*h+m*g*y;break;case"YZX":this._x=m*f*h+c*g*y,this._y=c*g*h+m*f*y,this._z=c*f*y-m*g*h,this._w=c*f*h-m*g*y;break;case"XZY":this._x=m*f*h-c*g*y,this._y=c*g*h-m*f*y,this._z=c*f*y+m*g*h,this._w=c*f*h+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],m=i+a+h;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,m=Math.sin(n*f)/c;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=r*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ug.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new B,Ug=new Ml;class gt{constructor(e,n,i,r,s,o,a,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],m=i[2],g=i[5],y=i[8],E=r[0],_=r[3],u=r[6],v=r[1],x=r[4],w=r[7],R=r[2],P=r[5],L=r[8];return s[0]=o*E+a*v+l*R,s[3]=o*_+a*x+l*P,s[6]=o*u+a*w+l*L,s[1]=c*E+f*v+h*R,s[4]=c*_+f*x+h*P,s[7]=c*u+f*w+h*L,s[2]=m*E+g*v+y*R,s[5]=m*_+g*x+y*P,s[8]=m*u+g*w+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,m=a*l-f*s,g=c*s-o*l,y=n*h+i*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(a*i-r*o)*E,e[3]=m*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=g*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Vd.makeScale(e,n)),this}rotate(e){return this.premultiply(Vd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new gt;function ux(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=uu("canvas");return t.style.display="block",t}const Fg={};function hl(t){t in Fg||(Fg[t]=!0,console.warn(t))}function fS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hS(){const t={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(r.r=Fo(r.r),r.g=Fo(r.g),r.b=Fo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qr?lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qo]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:kg,fromXYZ:Og,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:kg,fromXYZ:Og,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const It=hS();function Tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let to;class pS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{to===void 0&&(to=uu("canvas")),to.width=e.width,to.height=e.height;const r=to.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=to}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Tr(n[i]/255)*255):n[i]=Tr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mS=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gd(r[o].image)):s.push(Gd(r[o]))}else s=Gd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gS=0;const Wd=new B;class ri extends Jo{constructor(e=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,i=Ds,r=Ds,s=or,o=Ns,a=Yi,l=dr,c=ri.DEFAULT_ANISOTROPY,f=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=yl(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case Ds:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case Ds:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=ex;ri.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],g=l[5],y=l[9],E=l[2],_=l[6],u=l[10];if(Math.abs(f-m)<.01&&Math.abs(h-E)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+m)<.1&&Math.abs(h+E)<.1&&Math.abs(y+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(g+1)/2,R=(u+1)/2,P=(f+m)/4,L=(h+E)/4,D=(y+_)/4;return x>w&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=L/i):w>R?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=P/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-y)*(_-y)+(h-E)*(h-E)+(m-f)*(m-f));return Math.abs(v)<.001&&(v=1),this.x=(_-y)/v,this.y=(h-E)/v,this.z=(m-f)/v,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends Jo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ri(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:or,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends vS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dx extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$l.copy(i.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Kl.subVectors(this.max,Ma),no.subVectors(e.a,Ma),io.subVectors(e.b,Ma),ro.subVectors(e.c,Ma),Fr.subVectors(io,no),kr.subVectors(ro,io),vs.subVectors(no,ro);let n=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-vs.z,vs.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,vs.z,0,-vs.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-vs.y,vs.x,0];return!Xd(n,no,io,ro,Kl)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,no,io,ro,Kl))?!1:(Zl.crossVectors(Fr,kr),n=[Zl.x,Zl.y,Zl.z],Xd(n,no,io,ro,Kl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new B,new B,new B,new B,new B,new B,new B,new B],Bi=new B,$l=new Sl,no=new B,io=new B,ro=new B,Fr=new B,kr=new B,vs=new B,Ma=new B,Kl=new B,Zl=new B,_s=new B;function Xd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_s.fromArray(t,s);const a=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),l=e.dot(_s),c=n.dot(_s),f=i.dot(_s);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const xS=new Sl,Sa=new B,jd=new B;class Pu{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(jd)),this.expandByPoint(Sa.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pr=new B,qd=new B,Jl=new B,Or=new B,Yd=new B,Ql=new B,$d=new B;class hm{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,n),pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qd.copy(e).add(n).multiplyScalar(.5),Jl.copy(n).sub(e).normalize(),Or.copy(this.origin).sub(qd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jl),a=Or.dot(this.direction),l=-Or.dot(Jl),c=Or.lengthSq(),f=Math.abs(1-o*o);let h,m,g,y;if(f>0)if(h=o*l-a,m=o*a-l,y=s*f,h>=0)if(m>=-y)if(m<=y){const E=1/f;h*=E,m*=E,g=h*(h+o*m+2*a)+m*(o*h+m+2*l)+c}else m=s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+c;else m=-s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+c;else m<=-y?(h=Math.max(0,-(-o*s+a)),m=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+c):m<=y?(h=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(h=Math.max(0,-(o*s+a)),m=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+c);else m=o>0?-s:s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qd).addScaledVector(Jl,m),g}intersectSphere(e,n){pr.subVectors(e.center,this.origin);const i=pr.dot(this.direction),r=pr.dot(pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-m.z)*h,l=(e.max.z-m.z)*h):(a=(e.max.z-m.z)*h,l=(e.min.z-m.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,n,i,r,s){Yd.subVectors(n,e),Ql.subVectors(i,e),$d.crossVectors(Yd,Ql);let o=this.direction.dot($d),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const l=a*this.direction.dot(Ql.crossVectors(Or,Ql));if(l<0)return null;const c=a*this.direction.dot(Yd.cross(Or));if(c<0||l+c>o)return null;const f=-a*Or.dot($d);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,i,r,s,o,a,l,c,f,h,m,g,y,E,_){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,m,g,y,E,_)}set(e,n,i,r,s,o,a,l,c,f,h,m,g,y,E,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=m,u[3]=g,u[7]=y,u[11]=E,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),s=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*h,y=a*f,E=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=m-E*c,n[9]=-a*l,n[2]=E-m*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const m=l*f,g=l*h,y=c*f,E=c*h;n[0]=m+E*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=g*a-y,n[6]=E+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*f,g=l*h,y=c*f,E=c*h;n[0]=m-E*a,n[4]=-o*h,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*f,n[9]=E-m*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*f,g=o*h,y=a*f,E=a*h;n[0]=l*f,n[4]=y*c-g,n[8]=m*c+E,n[1]=l*h,n[5]=E*c+m,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*c,y=a*l,E=a*c;n[0]=l*f,n[4]=E-m*h,n[8]=y*h+g,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*h+y,n[10]=m-E*h}else if(e.order==="XZY"){const m=o*l,g=o*c,y=a*l,E=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=m*h+E,n[5]=o*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=a*f,n[10]=E*h+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,MS)}lookAt(e,n,i){const r=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),zr.crossVectors(i,_i),zr.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),zr.crossVectors(i,_i)),zr.normalize(),ec.crossVectors(_i,zr),r[0]=zr.x,r[4]=ec.x,r[8]=_i.x,r[1]=zr.y,r[5]=ec.y,r[9]=_i.y,r[2]=zr.z,r[6]=ec.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],m=i[9],g=i[13],y=i[2],E=i[6],_=i[10],u=i[14],v=i[3],x=i[7],w=i[11],R=i[15],P=r[0],L=r[4],D=r[8],T=r[12],S=r[1],F=r[5],W=r[9],ee=r[13],ae=r[2],ce=r[6],G=r[10],Z=r[14],k=r[3],ne=r[7],se=r[11],Ee=r[15];return s[0]=o*P+a*S+l*ae+c*k,s[4]=o*L+a*F+l*ce+c*ne,s[8]=o*D+a*W+l*G+c*se,s[12]=o*T+a*ee+l*Z+c*Ee,s[1]=f*P+h*S+m*ae+g*k,s[5]=f*L+h*F+m*ce+g*ne,s[9]=f*D+h*W+m*G+g*se,s[13]=f*T+h*ee+m*Z+g*Ee,s[2]=y*P+E*S+_*ae+u*k,s[6]=y*L+E*F+_*ce+u*ne,s[10]=y*D+E*W+_*G+u*se,s[14]=y*T+E*ee+_*Z+u*Ee,s[3]=v*P+x*S+w*ae+R*k,s[7]=v*L+x*F+w*ce+R*ne,s[11]=v*D+x*W+w*G+R*se,s[15]=v*T+x*ee+w*Z+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],m=e[10],g=e[14],y=e[3],E=e[7],_=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*m+i*c*m+r*a*g-i*l*g)+E*(+n*l*g-n*c*m+s*o*m-r*o*g+r*c*f-s*l*f)+_*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*m+r*o*h-i*o*m+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],m=e[10],g=e[11],y=e[12],E=e[13],_=e[14],u=e[15],v=h*_*c-E*m*c+E*l*g-a*_*g-h*l*u+a*m*u,x=y*m*c-f*_*c-y*l*g+o*_*g+f*l*u-o*m*u,w=f*E*c-y*h*c+y*a*g-o*E*g-f*a*u+o*h*u,R=y*h*l-f*E*l-y*a*m+o*E*m+f*a*_-o*h*_,P=n*v+i*x+r*w+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=v*L,e[1]=(E*m*s-h*_*s-E*r*g+i*_*g+h*r*u-i*m*u)*L,e[2]=(a*_*s-E*l*s+E*r*c-i*_*c-a*r*u+i*l*u)*L,e[3]=(h*l*s-a*m*s-h*r*c+i*m*c+a*r*g-i*l*g)*L,e[4]=x*L,e[5]=(f*_*s-y*m*s+y*r*g-n*_*g-f*r*u+n*m*u)*L,e[6]=(y*l*s-o*_*s-y*r*c+n*_*c+o*r*u-n*l*u)*L,e[7]=(o*m*s-f*l*s+f*r*c-n*m*c-o*r*g+n*l*g)*L,e[8]=w*L,e[9]=(y*h*s-f*E*s-y*i*g+n*E*g+f*i*u-n*h*u)*L,e[10]=(o*E*s-y*a*s+y*i*c-n*E*c-o*i*u+n*a*u)*L,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*g-n*a*g)*L,e[12]=R*L,e[13]=(f*E*r-y*h*r+y*i*m-n*E*m-f*i*_+n*h*_)*L,e[14]=(y*a*r-o*E*r-y*i*l+n*E*l+o*i*_-n*a*_)*L,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*m+n*a*m)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,m=s*c,g=s*f,y=s*h,E=o*f,_=o*h,u=a*h,v=l*c,x=l*f,w=l*h,R=i.x,P=i.y,L=i.z;return r[0]=(1-(E+u))*R,r[1]=(g+w)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(g-w)*P,r[5]=(1-(m+u))*P,r[6]=(_+v)*P,r[7]=0,r[8]=(y+x)*L,r[9]=(_-v)*L,r[10]=(1-(m+E))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=so.set(r[0],r[1],r[2]).length();const o=so.set(r[4],r[5],r[6]).length(),a=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hi.copy(this);const c=1/s,f=1/o,h=1/a;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=f,Hi.elements[5]*=f,Hi.elements[6]*=f,Hi.elements[8]*=h,Hi.elements[9]*=h,Hi.elements[10]*=h,n.setFromRotationMatrix(Hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ar,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let y,E;if(l)y=s/(o-s),E=o*s/(o-s);else if(a===ar)y=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===cu)y=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ar,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let y,E;if(l)y=1/(o-s),E=o/(o-s);else if(a===ar)y=-2/(o-s),E=-(o+s)/(o-s);else if(a===cu)y=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const so=new B,Hi=new Qt,yS=new B(0,0,0),MS=new B(1,1,1),zr=new B,ec=new B,_i=new B,zg=new Qt,Bg=new Ml;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const Hg=new B,oo=new Ml,mr=new Qt,tc=new B,wa=new B,wS=new B,ES=new Ml,Vg=new B(1,0,0),Gg=new B(0,1,0),Wg=new B(0,0,1),Xg={type:"added"},TS={type:"removed"},ao={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Un extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new B,n=new Qi,i=new Ml,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new gt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(Vg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,n){return Hg.copy(e).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tc.copy(e):tc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(wa,tc,this.up):mr.lookAt(tc,wa,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(mr),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xg),ao.child=e,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TS),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xg),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,wS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,ES,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),m=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new B(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new B,gr=new B,Zd=new B,vr=new B,lo=new B,co=new B,jg=new B,Jd=new B,Qd=new B,ef=new B,tf=new Gt,nf=new Gt,rf=new Gt;class qi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vi.subVectors(e,n),r.cross(Vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vi.subVectors(r,n),gr.subVectors(i,n),Zd.subVectors(e,n);const o=Vi.dot(Vi),a=Vi.dot(gr),l=Vi.dot(Zd),c=gr.dot(gr),f=gr.dot(Zd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,g=(c*l-a*f)*m,y=(o*f-a*l)*m;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vr.x),l.addScaledVector(o,vr.y),l.addScaledVector(a,vr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,n),nf.fromBufferAttribute(e,i),rf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tf,s.x),o.addScaledVector(nf,s.y),o.addScaledVector(rf,s.z),o}static isFrontFacing(e,n,i,r){return Vi.subVectors(i,n),gr.subVectors(e,n),Vi.cross(gr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Vi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;lo.subVectors(r,i),co.subVectors(s,i),Jd.subVectors(e,i);const l=lo.dot(Jd),c=co.dot(Jd);if(l<=0&&c<=0)return n.copy(i);Qd.subVectors(e,r);const f=lo.dot(Qd),h=co.dot(Qd);if(f>=0&&h<=f)return n.copy(r);const m=l*h-f*c;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(lo,o);ef.subVectors(e,s);const g=lo.dot(ef),y=co.dot(ef);if(y>=0&&g<=y)return n.copy(s);const E=g*c-l*y;if(E<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(co,a);const _=f*y-g*h;if(_<=0&&h-f>=0&&g-y>=0)return jg.subVectors(s,r),a=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(jg,a);const u=1/(_+E+m);return o=E*u,a=m*u,n.copy(i).addScaledVector(lo,o).addScaledVector(co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},nc={h:0,s:0,l:0};function sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=It.workingColorSpace){return this.r=e,this.g=n,this.b=i,It.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=It.workingColorSpace){if(e=uS(e,1),n=Mt(n,0,1),i=Mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sf(o,s,e+1/3),this.g=sf(o,s,e),this.b=sf(o,s,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return It.workingToColorSpace(jn.copy(this),e),Math.round(Mt(jn.r*255,0,255))*65536+Math.round(Mt(jn.g*255,0,255))*256+Math.round(Mt(jn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=It.workingColorSpace){It.workingToColorSpace(jn.copy(this),n);const i=jn.r,r=jn.g,s=jn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=It.workingColorSpace){return It.workingToColorSpace(jn.copy(this),n),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Bn){It.workingToColorSpace(jn.copy(this),e);const n=jn.r,i=jn.g,r=jn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+n,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Br),e.getHSL(nc);const i=Bd(Br.h,nc.h,n),r=Bd(Br.s,nc.s,n),s=Bd(Br.l,nc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new St;St.NAMES=fx;let AS=0;class js extends Jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=No,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=xh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_h&&(i.blendSrc=this.blendSrc),this.blendDst!==xh&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new B,ic=new Ze;let bS=0;class ur{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dg,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ic.fromBufferAttribute(this,n),ic.applyMatrix3(e),this.setXY(n,ic.x,ic.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),r=li(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),r=li(r,this.array),s=li(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dg&&(e.usage=this.usage),e}}class hx extends ur{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class px extends ur{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends ur{constructor(e,n,i){super(new Float32Array(e),n,i)}}let CS=0;const Li=new Qt,of=new Un,uo=new B,xi=new Sl,Ea=new Sl,In=new B;class _n extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?px:hx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,n,i){return Li.makeTranslation(e,n,i),this.applyMatrix4(Li),this}scale(e,n,i){return Li.makeScale(e,n,i),this.applyMatrix4(Li),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(xi.min,Ea.min),xi.expandByPoint(In),In.addVectors(xi.max,Ea.max),xi.expandByPoint(In)):(xi.expandByPoint(Ea.min),xi.expandByPoint(Ea.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)In.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(In));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)In.fromBufferAttribute(a,c),l&&(uo.fromBufferAttribute(e,c),In.add(uo)),r=Math.max(r,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new B,l[D]=new B;const c=new B,f=new B,h=new B,m=new Ze,g=new Ze,y=new Ze,E=new B,_=new B;function u(D,T,S){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),m.fromBufferAttribute(s,D),g.fromBufferAttribute(s,T),y.fromBufferAttribute(s,S),f.sub(c),h.sub(c),g.sub(m),y.sub(m);const F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(E.copy(f).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(F),_.copy(h).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(F),a[D].add(E),a[T].add(E),a[S].add(E),l[D].add(_),l[T].add(_),l[S].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,T=v.length;D<T;++D){const S=v[D],F=S.start,W=S.count;for(let ee=F,ae=F+W;ee<ae;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const x=new B,w=new B,R=new B,P=new B;function L(D){R.fromBufferAttribute(r,D),P.copy(R);const T=a[D];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),w.crossVectors(P,T);const F=w.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,F)}for(let D=0,T=v.length;D<T;++D){const S=v[D],F=S.start,W=S.count;for(let ee=F,ae=F+W;ee<ae;ee+=3)L(e.getX(ee+0)),L(e.getX(ee+1)),L(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ur(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),E=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,_),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,m=new c.constructor(l.length*f);let g=0,y=0;for(let E=0,_=l.length;E<_;E++){a.isInterleavedBufferAttribute?g=l[E]*a.data.stride+a.offset:g=l[E]*f;for(let u=0;u<f;u++)m[y++]=c[g++]}return new ur(m,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const m=c[f],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let m=0,g=h.length;m<g;m++)f.push(h[m].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qg=new Qt,xs=new hm,rc=new Pu,Yg=new B,sc=new B,oc=new B,ac=new B,af=new B,lc=new B,$g=new B,cc=new B;class V extends Un{constructor(e=new _n,n=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(af.fromBufferAttribute(h,e),o?lc.addScaledVector(af,f):lc.addScaledVector(af.sub(n),f))}n.add(lc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(rc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(rc,Yg)===null||xs.origin.distanceToSquared(Yg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),xs.copy(e.ray).applyMatrix4(qg),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,E=m.length;y<E;y++){const _=m[y],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=x;w<R;w+=3){const P=a.getX(w),L=a.getX(w+1),D=a.getX(w+2);r=uc(this,u,e,i,c,f,h,P,L,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let _=y,u=E;_<u;_+=3){const v=a.getX(_),x=a.getX(_+1),w=a.getX(_+2);r=uc(this,o,e,i,c,f,h,v,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,E=m.length;y<E;y++){const _=m[y],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,R=x;w<R;w+=3){const P=w,L=w+1,D=w+2;r=uc(this,u,e,i,c,f,h,P,L,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let _=y,u=E;_<u;_+=3){const v=_,x=_+1,w=_+2;r=uc(this,o,e,i,c,f,h,v,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function RS(t,e,n,i,r,s,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ls,a),l===null)return null;cc.copy(a),cc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cc);return c<n.near||c>n.far?null:{distance:c,point:cc.clone(),object:t}}function uc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,sc),t.getVertexPosition(l,oc),t.getVertexPosition(c,ac);const f=RS(t,e,n,i,sc,oc,ac,$g);if(f){const h=new B;qi.getBarycoord($g,sc,oc,ac,h),r&&(f.uv=qi.getInterpolatedAttribute(r,a,l,c,h,new Ze)),s&&(f.uv1=qi.getInterpolatedAttribute(s,a,l,c,h,new Ze)),o&&(f.normal=qi.getInterpolatedAttribute(o,a,l,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new B,materialIndex:0};qi.getNormal(sc,oc,ac,m.normal),f.face=m,f.barycoord=h}return f}class zn extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let m=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(h,2));function y(E,_,u,v,x,w,R,P,L,D,T){const S=w/L,F=R/D,W=w/2,ee=R/2,ae=P/2,ce=L+1,G=D+1;let Z=0,k=0;const ne=new B;for(let se=0;se<G;se++){const Ee=se*F-ee;for(let ze=0;ze<ce;ze++){const dt=ze*S-W;ne[E]=dt*v,ne[_]=Ee*x,ne[u]=ae,c.push(ne.x,ne.y,ne.z),ne[E]=0,ne[_]=0,ne[u]=P>0?1:-1,f.push(ne.x,ne.y,ne.z),h.push(ze/L),h.push(1-se/D),Z+=1}}for(let se=0;se<D;se++)for(let Ee=0;Ee<L;Ee++){const ze=m+Ee+ce*se,dt=m+Ee+ce*(se+1),Le=m+(Ee+1)+ce*(se+1),he=m+(Ee+1)+ce*se;l.push(ze,dt,he),l.push(dt,Le,he),k+=6}a.addGroup(g,k,T),g+=k,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ei(t){const e={};for(let n=0;n<t.length;n++){const i=Yo(t[n]);for(const r in i)e[r]=i[r]}return e}function PS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const LS={clone:Yo,merge:ei};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=PS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new B,Kg=new Ze,Zg=new Ze;class Mi extends gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,Kg,Zg),n.subVectors(Zg,Kg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fo=-90,ho=1;class NS extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(fo,ho,e,n);r.layers=this.layers,this.add(r);const s=new Mi(fo,ho,e,n);s.layers=this.layers,this.add(s);const o=new Mi(fo,ho,e,n);o.layers=this.layers,this.add(o);const a=new Mi(fo,ho,e,n);a.layers=this.layers,this.add(a);const l=new Mi(fo,ho,e,n);l.layers=this.layers,this.add(l);const c=new Mi(fo,ho,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ar)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,m,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class vx extends ri{constructor(e=[],n=Xo,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class US extends Gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zn(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:rs});s.uniforms.tEquirect.value=n;const o=new V(r,s),a=n.minFilter;return n.minFilter===Ns&&(n.minFilter=or),new NS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class $e extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,i),u=this._getHandJoint(c,E);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],m=f.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&m>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new mm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const cf=new B,OS=new B,zS=new gt;class As{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cf.subVectors(i,n).cross(OS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zS.getNormalMatrix(e),r=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Pu,BS=new Ze(.5,.5),dc=new B;class gm{constructor(e=new As,n=new As,i=new As,r=new As,s=new As,o=new As){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ar,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],m=s[6],g=s[7],y=s[8],E=s[9],_=s[10],u=s[11],v=s[12],x=s[13],w=s[14],R=s[15];if(r[0].setComponents(c-o,g-f,u-y,R-v).normalize(),r[1].setComponents(c+o,g+f,u+y,R+v).normalize(),r[2].setComponents(c+a,g+h,u+E,R+x).normalize(),r[3].setComponents(c-a,g-h,u-E,R-x).normalize(),i)r[4].setComponents(l,m,_,w).normalize(),r[5].setComponents(c-l,g-m,u-_,R-w).normalize();else if(r[4].setComponents(c-l,g-m,u-_,R-w).normalize(),n===ar)r[5].setComponents(c+l,g+m,u+_,R+w).normalize();else if(n===cu)r[5].setComponents(l,m,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const n=BS.distanceTo(e.center);return ys.radius=.7071067811865476+n,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dc.x=r.normal.x>0?e.max.x:e.min.x,dc.y=r.normal.y>0?e.max.y:e.min.y,dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sp extends js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new B,fu=new B,Jg=new Qt,Ta=new hm,fc=new Pu,uf=new B,Qg=new B;class e1 extends Un{constructor(e=new _n,n=new sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)du.fromBufferAttribute(n,r-1),fu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=du.distanceTo(fu);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),fc.radius+=s,e.ray.intersectsSphere(fc)===!1)return;Jg.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(Jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(f!==null){const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let E=g,_=y-1;E<_;E+=c){const u=f.getX(E),v=f.getX(E+1),x=hc(this,e,Ta,l,u,v,E);x&&n.push(x)}if(this.isLineLoop){const E=f.getX(y-1),_=f.getX(g),u=hc(this,e,Ta,l,E,_,y-1);u&&n.push(u)}}else{const g=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let E=g,_=y-1;E<_;E+=c){const u=hc(this,e,Ta,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=hc(this,e,Ta,l,y-1,g,y-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(du.fromBufferAttribute(a,r),fu.fromBufferAttribute(a,s),n.distanceSqToSegment(du,fu,uf,Qg)>i)return;uf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(uf);if(!(c<e.near||c>e.far))return{distance:c,point:Qg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class pc extends ri{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _x extends ri{constructor(e,n,i=Vs,r,s,o,a=Zi,l=Zi,c,f=dl,h=1){if(f!==dl&&f!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:h};super(m,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xx extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ci extends _n{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,h=Math.PI/2*e,m=n,g=2*h+m,y=i*2+s,E=r+1,_=new B,u=new B;for(let v=0;v<=y;v++){let x=0,w=0,R=0,P=0;if(v<=i){const T=v/i,S=T*Math.PI/2;w=-f-e*Math.cos(S),R=e*Math.sin(S),P=-e*Math.cos(S),x=T*h}else if(v<=i+s){const T=(v-i)/s;w=-f+T*n,R=e,P=0,x=h+T*m}else{const T=(v-i-s)/i,S=T*Math.PI/2;w=f+e*Math.sin(S),R=e*Math.cos(S),P=e*Math.sin(S),x=h+m+T*h}const L=Math.max(0,Math.min(1,x/g));let D=0;v===0?D=.5/r:v===y&&(D=-.5/r);for(let T=0;T<=r;T++){const S=T/r,F=S*Math.PI*2,W=Math.sin(F),ee=Math.cos(F);u.x=-R*ee,u.y=w,u.z=R*W,a.push(u.x,u.y,u.z),_.set(-R*ee,P,R*W),_.normalize(),l.push(_.x,_.y,_.z),c.push(S+D,L)}if(v>0){const T=(v-1)*E;for(let S=0;S<r;S++){const F=T+S,W=T+S+1,ee=v*E+S,ae=v*E+S+1;o.push(F,W,ee),o.push(W,ae,ee)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ti extends _n{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new B,f=new Ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,m=3;h<=n;h++,m+=3){const g=i+h/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ct extends _n{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],m=[],g=[];let y=0;const E=[],_=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2));function v(){const w=new B,R=new B;let P=0;const L=(n-e)/i;for(let D=0;D<=s;D++){const T=[],S=D/s,F=S*(n-e)+e;for(let W=0;W<=r;W++){const ee=W/r,ae=ee*l+a,ce=Math.sin(ae),G=Math.cos(ae);R.x=F*ce,R.y=-S*i+_,R.z=F*G,h.push(R.x,R.y,R.z),w.set(ce,L,G).normalize(),m.push(w.x,w.y,w.z),g.push(ee,1-S),T.push(y++)}E.push(T)}for(let D=0;D<r;D++)for(let T=0;T<s;T++){const S=E[T][D],F=E[T+1][D],W=E[T+1][D+1],ee=E[T][D+1];(e>0||T!==0)&&(f.push(S,F,ee),P+=3),(n>0||T!==s-1)&&(f.push(F,W,ee),P+=3)}c.addGroup(u,P,0),u+=P}function x(w){const R=y,P=new Ze,L=new B;let D=0;const T=w===!0?e:n,S=w===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,_*S,0),m.push(0,S,0),g.push(.5,.5),y++;const F=y;for(let W=0;W<=r;W++){const ae=W/r*l+a,ce=Math.cos(ae),G=Math.sin(ae);L.x=T*G,L.y=_*S,L.z=T*ce,h.push(L.x,L.y,L.z),m.push(0,S,0),P.x=ce*.5+.5,P.y=G*.5*S+.5,g.push(P.x,P.y),y++}for(let W=0;W<r;W++){const ee=R+W,ae=F+W;w===!0?f.push(ae,ae+1,ee):f.push(ae+1,ae,ee),D+=3}c.addGroup(u,D,w===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends ct{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new gn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vm extends _n{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new B,w=new B,R=new B;for(let P=0;P<n.length;P+=3)g(n[P+0],x),g(n[P+1],w),g(n[P+2],R),l(x,w,R,v)}function l(v,x,w,R){const P=R+1,L=[];for(let D=0;D<=P;D++){L[D]=[];const T=v.clone().lerp(w,D/P),S=x.clone().lerp(w,D/P),F=P-D;for(let W=0;W<=F;W++)W===0&&D===P?L[D][W]=T:L[D][W]=T.clone().lerp(S,W/F)}for(let D=0;D<P;D++)for(let T=0;T<2*(P-D)-1;T++){const S=Math.floor(T/2);T%2===0?(m(L[D][S+1]),m(L[D+1][S]),m(L[D][S])):(m(L[D][S+1]),m(L[D+1][S+1]),m(L[D+1][S]))}}function c(v){const x=new B;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(v),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function f(){const v=new B;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const w=_(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(w,1-R)}y(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],w=o[v+2],R=o[v+4],P=Math.max(x,w,R),L=Math.min(x,w,R);P>.9&&L<.1&&(x<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function m(v){s.push(v.x,v.y,v.z)}function g(v,x){const w=v*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function y(){const v=new B,x=new B,w=new B,R=new B,P=new Ze,L=new Ze,D=new Ze;for(let T=0,S=0;T<s.length;T+=9,S+=6){v.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),P.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),R.copy(v).add(x).add(w).divideScalar(3);const F=_(R);E(P,S+0,v,F),E(L,S+2,x,F),E(D,S+4,w,F)}}function E(v,x,w,R){R<0&&v.x===1&&(o[x]=v.x-1),w.x===0&&w.z===0&&(o[x]=R/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.vertices,e.indices,e.radius,e.details)}}class un extends vm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new un(e.radius,e.detail)}}class Lr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],m=i[r+1]-f,g=(o-f)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ze:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new B,r=[],s=[],o=[],a=new B,l=new Qt;for(let g=0;g<=e;g++){const y=g/e;r[g]=this.getTangentAt(y,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Mt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Mt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yx extends Lr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ze){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*f-g*h+this.aX,c=m*h+g*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class HS extends yx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _m(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let m=(o-s)/c-(a-s)/(c+f)+(a-o)/f,g=(a-o)/f-(l-o)/(f+h)+(l-a)/h;m*=f,g*=f,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const mc=new B,df=new _m,ff=new _m,hf=new _m;class op extends Lr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(mc.subVectors(r[0],r[1]).add(r[0]),c=mc);const h=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(mc.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=mc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),g),E=Math.pow(h.distanceToSquared(m),g),_=Math.pow(m.distanceToSquared(f),g);E<1e-4&&(E=1),y<1e-4&&(y=E),_<1e-4&&(_=E),df.initNonuniformCatmullRom(c.x,h.x,m.x,f.x,y,E,_),ff.initNonuniformCatmullRom(c.y,h.y,m.y,f.y,y,E,_),hf.initNonuniformCatmullRom(c.z,h.z,m.z,f.z,y,E,_)}else this.curveType==="catmullrom"&&(df.initCatmullRom(c.x,h.x,m.x,f.x,this.tension),ff.initCatmullRom(c.y,h.y,m.y,f.y,this.tension),hf.initCatmullRom(c.z,h.z,m.z,f.z,this.tension));return i.set(df.calc(l),ff.calc(l),hf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function t1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function VS(t,e){const n=1-t;return n*n*e}function GS(t,e){return 2*(1-t)*t*e}function WS(t,e){return t*t*e}function Ga(t,e,n,i){return VS(t,e)+GS(t,n)+WS(t,i)}function XS(t,e){const n=1-t;return n*n*n*e}function jS(t,e){const n=1-t;return 3*n*n*t*e}function qS(t,e){return 3*(1-t)*t*t*e}function YS(t,e){return t*t*t*e}function Wa(t,e,n,i,r){return XS(t,e)+jS(t,n)+qS(t,i)+YS(t,r)}class $S extends Lr{constructor(e=new Ze,n=new Ze,i=new Ze,r=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ze){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wa(e,r.x,s.x,o.x,a.x),Wa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KS extends Lr{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wa(e,r.x,s.x,o.x,a.x),Wa(e,r.y,s.y,o.y,a.y),Wa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ZS extends Lr{constructor(e=new Ze,n=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ze){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ze){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JS extends Lr{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QS extends Lr{constructor(e=new Ze,n=new Ze,i=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ze){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ga(e,r.x,s.x,o.x),Ga(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends Lr{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ga(e,r.x,s.x,o.x),Ga(e,r.y,s.y,o.y),Ga(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends Lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ze){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(t1(a,l.x,c.x,f.x,h.x),t1(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ze().fromArray(r))}return this}}var tw=Object.freeze({__proto__:null,ArcCurve:HS,CatmullRomCurve3:op,CubicBezierCurve:$S,CubicBezierCurve3:KS,EllipseCurve:yx,LineCurve:ZS,LineCurve3:JS,QuadraticBezierCurve:QS,QuadraticBezierCurve3:Mx,SplineCurve:ew});class qn extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,m=n/l,g=[],y=[],E=[],_=[];for(let u=0;u<f;u++){const v=u*m-o;for(let x=0;x<c;x++){const w=x*h-s;y.push(w,-v,0),E.push(0,0,1),_.push(x/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,w=v+c*(u+1),R=v+1+c*(u+1),P=v+1+c*u;g.push(x,w,P),g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xm extends _n{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const m=(n-e)/r,g=new B,y=new Ze;for(let E=0;E<=r;E++){for(let _=0;_<=i;_++){const u=s+_/i*o;g.x=h*Math.cos(u),g.y=h*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),y.x=(g.x/n+1)/2,y.y=(g.y/n+1)/2,f.push(y.x,y.y)}h+=m}for(let E=0;E<r;E++){const _=E*(i+1);for(let u=0;u<i;u++){const v=u+_,x=v,w=v+i+1,R=v+i+2,P=v+1;a.push(x,w,P),a.push(w,R,P)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mt extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new B,m=new B,g=[],y=[],E=[],_=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let w=0;u===0&&o===0?w=.5/n:u===i&&l===Math.PI&&(w=-.5/n);for(let R=0;R<=n;R++){const P=R/n;h.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),y.push(h.x,h.y,h.z),m.copy(h).normalize(),E.push(m.x,m.y,m.z),_.push(P+w,1-x),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=f[u][v+1],w=f[u][v],R=f[u+1][v],P=f[u+1][v+1];(u!==0||o>0)&&g.push(x,w,P),(u!==i-1||l<Math.PI)&&g.push(w,R,P)}this.setIndex(g),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zt extends _n{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new B,h=new B,m=new B;for(let g=0;g<=i;g++)for(let y=0;y<=r;y++){const E=y/r*s,_=g/i*Math.PI*2;h.x=(e+n*Math.cos(_))*Math.cos(E),h.y=(e+n*Math.cos(_))*Math.sin(E),h.z=n*Math.sin(_),a.push(h.x,h.y,h.z),f.x=e*Math.cos(E),f.y=e*Math.sin(E),m.subVectors(h,f).normalize(),l.push(m.x,m.y,m.z),c.push(y/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let y=1;y<=r;y++){const E=(r+1)*g+y-1,_=(r+1)*(g-1)+y-1,u=(r+1)*(g-1)+y,v=(r+1)*g+y;o.push(E,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xa extends _n{constructor(e=new Mx(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new Ze;let f=new B;const h=[],m=[],g=[],y=[];E(),this.setIndex(y),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2));function E(){for(let x=0;x<n;x++)_(x);_(s===!1?n:0),v(),u()}function _(x){f=e.getPointAt(x/n,f);const w=o.normals[x],R=o.binormals[x];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,D=Math.sin(L),T=-Math.cos(L);l.x=T*w.x+D*R.x,l.y=T*w.y+D*R.y,l.z=T*w.z+D*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,h.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=n;x++)for(let w=1;w<=r;w++){const R=(r+1)*(x-1)+(w-1),P=(r+1)*x+(w-1),L=(r+1)*x+w,D=(r+1)*(x-1)+w;y.push(R,P,D),y.push(P,L,D)}}function v(){for(let x=0;x<=n;x++)for(let w=0;w<=r;w++)c.x=x/n,c.y=w/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xa(new tw[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class De extends js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dm,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gc extends js{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dm,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nw extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iw extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ym extends Un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class rw extends ym{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const pf=new Qt,n1=new B,i1=new B;class Sx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=dr,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gm,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n1.setFromMatrixPosition(e.matrixWorld),n.position.copy(n1),i1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i1),n.updateMatrixWorld(),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const r1=new Qt,Aa=new B,mf=new B;class sw extends Sx{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Aa),mf.copy(i.position),mf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(mf),i.updateMatrixWorld(),r.makeTranslation(-Aa.x,-Aa.y,-Aa.z),r1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r1,i.coordinateSystem,i.reversedDepth)}}class Gi extends ym{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wx extends gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ow extends Sx{constructor(){super(new wx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s1 extends ym{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aw extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const o1=new Qt;class lw{constructor(e,n,i=0,r=1/0){this.ray=new hm(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new pm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return o1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o1),this}intersectObject(e,n=!0,i=[]){return ap(e,this,i,n),i.sort(a1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ap(e[r],this,i,n);return i.sort(a1),i}}function a1(t,e){return t.distance-e.distance}function ap(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ap(s[o],e,n,!0)}}function l1(t,e,n,i){const r=cw(i);switch(n){case sx:return t*e;case ax:return t*e/r.components*r.byteLength;case lm:return t*e/r.components*r.byteLength;case lx:return t*e*2/r.components*r.byteLength;case cm:return t*e*2/r.components*r.byteLength;case ox:return t*e*3/r.components*r.byteLength;case Yi:return t*e*4/r.components*r.byteLength;case um:return t*e*4/r.components*r.byteLength;case Dc:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Dh:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Ih:return Math.max(t,8)*Math.max(e,8)/2;case Nh:case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Jh:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cw(t){switch(t){case dr:case tx:return{byteLength:1,components:1};case cl:case nx:case xl:return{byteLength:2,components:1};case om:case am:return{byteLength:2,components:4};case Vs:case sm:case wr:return{byteLength:4,components:1};case ix:case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:im}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=im);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uw(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,c,f),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<h.length;g++){const y=h[m],E=h[g];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++m,h[m]=E)}h.length=m+1;for(let g=0,y=h.length;g<y;g++){const E=h[g];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var dw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fw=`#ifdef USE_ALPHAHASH
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
#endif`,hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
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
#endif`,_w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw=`#ifdef USE_BATCHING
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
#endif`,yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ew=`#ifdef USE_IRIDESCENCE
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
#endif`,Tw=`#ifdef USE_BUMPMAP
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
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nw=`#define PI 3.141592653589793
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
} // validated`,Uw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fw=`vec3 transformedNormal = objectNormal;
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
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xw=`#ifdef USE_ENVMAP
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
#endif`,jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
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
#endif`,Yw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jw=`#ifdef USE_GRADIENTMAP
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
}`,Qw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
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
#endif`,cE=`struct PhysicalMaterial {
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
}`,uE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$E=`float getShadowMask() {
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
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,eT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
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
}`,vT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,xT=`#define DISTANCE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,wT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,bT=`#define LAMBERT
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
}`,CT=`#define MATCAP
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
}`,RT=`#define MATCAP
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
}`,PT=`#define NORMAL
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
}`,LT=`#define NORMAL
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
}`,IT=`#define PHONG
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
}`,DT=`#define PHONG
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
}`,NT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,FT=`#define TOON
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
}`,kT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,zT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,VT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:dw,alphahash_pars_fragment:fw,alphamap_fragment:hw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:_w,batching_pars_vertex:xw,batching_vertex:yw,begin_vertex:Mw,beginnormal_vertex:Sw,bsdfs:ww,iridescence_fragment:Ew,bumpmap_pars_fragment:Tw,clipping_planes_fragment:Aw,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Cw,clipping_planes_vertex:Rw,color_fragment:Pw,color_pars_fragment:Lw,color_pars_vertex:Iw,color_vertex:Dw,common:Nw,cube_uv_reflection_fragment:Uw,defaultnormal_vertex:Fw,displacementmap_pars_vertex:kw,displacementmap_vertex:Ow,emissivemap_fragment:zw,emissivemap_pars_fragment:Bw,colorspace_fragment:Hw,colorspace_pars_fragment:Vw,envmap_fragment:Gw,envmap_common_pars_fragment:Ww,envmap_pars_fragment:Xw,envmap_pars_vertex:jw,envmap_physical_pars_fragment:iE,envmap_vertex:qw,fog_vertex:Yw,fog_pars_vertex:$w,fog_fragment:Kw,fog_pars_fragment:Zw,gradientmap_pars_fragment:Jw,lightmap_pars_fragment:Qw,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:dE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:vE,map_pars_fragment:_E,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:SE,morphinstance_vertex:wE,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:bE,normal_fragment_begin:CE,normal_fragment_maps:RE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:IE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:kE,opaque_fragment:OE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:$E,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:JE,skinnormal_vertex:QE,specularmap_fragment:eT,specularmap_pars_fragment:tT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:rT,transmission_pars_fragment:sT,uv_pars_fragment:oT,uv_pars_vertex:aT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:dT,backgroundCube_vert:fT,backgroundCube_frag:hT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:vT,distanceRGBA_vert:_T,distanceRGBA_frag:xT,equirect_vert:yT,equirect_frag:MT,linedashed_vert:ST,linedashed_frag:wT,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:bT,meshmatcap_vert:CT,meshmatcap_frag:RT,meshnormal_vert:PT,meshnormal_frag:LT,meshphong_vert:IT,meshphong_frag:DT,meshphysical_vert:NT,meshphysical_frag:UT,meshtoon_vert:FT,meshtoon_frag:kT,points_vert:OT,points_frag:zT,shadow_vert:BT,shadow_frag:HT,sprite_vert:VT,sprite_frag:GT},Oe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},rr={basic:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:ei([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:ei([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:ei([Oe.points,Oe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:ei([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:ei([Oe.common,Oe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:ei([Oe.sprite,Oe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:ei([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:ei([Oe.lights,Oe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};rr.physical={uniforms:ei([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const vc={r:0,b:0,g:0},Ms=new Qi,WT=new Qt;function XT(t,e,n,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,f,h=null,m=0,g=null;function y(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?n:e).get(w)),w}function E(x){let w=!1;const R=y(x);R===null?u(a,l):R&&R.isColor&&(u(R,1),w=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,w){const R=y(w);R&&(R.isCubeTexture||R.mapping===Ru)?(f===void 0&&(f=new V(new zn(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Yo(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ms.copy(w.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.material.uniforms.envMap.value=R,f.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Ms)),f.material.toneMapped=It.getTransfer(R.colorSpace)!==Vt,(h!==R||m!==R.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=R,m=R.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new V(new qn(2,2),new cs({name:"BackgroundMaterial",uniforms:Yo(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=It.getTransfer(R.colorSpace)!==Vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||m!==R.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=R,m=R.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,w){x.getRGB(vc,mx(t)),i.buffers.color.setClear(vc.r,vc.g,vc.b,w,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:E,addToRenderList:_,dispose:v}}function jT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(S,F,W,ee,ae){let ce=!1;const G=h(ee,W,F);s!==G&&(s=G,c(s.object)),ce=g(S,ee,W,ae),ce&&y(S,ee,W,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,w(S,F,W,ee),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,F,W){const ee=W.wireframe===!0;let ae=i[S.id];ae===void 0&&(ae={},i[S.id]=ae);let ce=ae[F.id];ce===void 0&&(ce={},ae[F.id]=ce);let G=ce[ee];return G===void 0&&(G=m(l()),ce[ee]=G),G}function m(S){const F=[],W=[],ee=[];for(let ae=0;ae<n;ae++)F[ae]=0,W[ae]=0,ee[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:ee,object:S,attributes:{},index:null}}function g(S,F,W,ee){const ae=s.attributes,ce=F.attributes;let G=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){const se=ae[k];let Ee=ce[k];if(Ee===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),se===void 0||se.attribute!==Ee||Ee&&se.data!==Ee.data)return!0;G++}return s.attributesNum!==G||s.index!==ee}function y(S,F,W,ee){const ae={},ce=F.attributes;let G=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){let se=ce[k];se===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const Ee={};Ee.attribute=se,se&&se.data&&(Ee.data=se.data),ae[k]=Ee,G++}s.attributes=ae,s.attributesNum=G,s.index=ee}function E(){const S=s.newAttributes;for(let F=0,W=S.length;F<W;F++)S[F]=0}function _(S){u(S,0)}function u(S,F){const W=s.newAttributes,ee=s.enabledAttributes,ae=s.attributeDivisors;W[S]=1,ee[S]===0&&(t.enableVertexAttribArray(S),ee[S]=1),ae[S]!==F&&(t.vertexAttribDivisor(S,F),ae[S]=F)}function v(){const S=s.newAttributes,F=s.enabledAttributes;for(let W=0,ee=F.length;W<ee;W++)F[W]!==S[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function x(S,F,W,ee,ae,ce,G){G===!0?t.vertexAttribIPointer(S,F,W,ae,ce):t.vertexAttribPointer(S,F,W,ee,ae,ce)}function w(S,F,W,ee){E();const ae=ee.attributes,ce=W.getAttributes(),G=F.defaultAttributeValues;for(const Z in ce){const k=ce[Z];if(k.location>=0){let ne=ae[Z];if(ne===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const se=ne.normalized,Ee=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;const dt=ze.buffer,Le=ze.type,he=ze.bytesPerElement,H=Le===t.INT||Le===t.UNSIGNED_INT||ne.gpuType===sm;if(ne.isInterleavedBufferAttribute){const me=ne.data,Fe=me.stride,nt=ne.offset;if(me.isInstancedInterleavedBuffer){for(let Ce=0;Ce<k.locationSize;Ce++)u(k.location+Ce,me.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)_(k.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ce=0;Ce<k.locationSize;Ce++)x(k.location+Ce,Ee/k.locationSize,Le,se,Fe*he,(nt+Ee/k.locationSize*Ce)*he,H)}else{if(ne.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)u(k.location+me,ne.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<k.locationSize;me++)_(k.location+me);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let me=0;me<k.locationSize;me++)x(k.location+me,Ee/k.locationSize,Le,se,Ee*he,Ee/k.locationSize*me*he,H)}}else if(G!==void 0){const se=G[Z];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(k.location,se);break;case 3:t.vertexAttrib3fv(k.location,se);break;case 4:t.vertexAttrib4fv(k.location,se);break;default:t.vertexAttrib1fv(k.location,se)}}}}v()}function R(){D();for(const S in i){const F=i[S];for(const W in F){const ee=F[W];for(const ae in ee)f(ee[ae].object),delete ee[ae];delete F[W]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const F=i[S.id];for(const W in F){const ee=F[W];for(const ae in ee)f(ee[ae].object),delete ee[ae];delete F[W]}delete i[S.id]}function L(S){for(const F in i){const W=i[F];if(W[S.id]===void 0)continue;const ee=W[S.id];for(const ae in ee)f(ee[ae].object),delete ee[ae];delete W[S.id]}}function D(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:_,disableUnusedAttributes:v}}function qT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];n.update(g,i,1)}function l(c,f,h,m){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)o(c[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,m,0,h);let y=0;for(let E=0;E<h;E++)y+=f[E]*m[E];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Yi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==dr&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==wr&&!D)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:R,maxSamples:P}}function $T(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new As,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const g=h.length!==0||m||i!==0||r;return r=m,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){n=f(h,m,0)},this.setState=function(h,m,g){const y=h.clippingPlanes,E=h.clipIntersection,_=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!_)s?f(null):c();else{const v=s?0:i,x=v*4;let w=u.clippingState||null;l.value=w,w=f(y,m,x,g);for(let R=0;R!==x;++R)w[R]=n[R];u.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,m,g,y){const E=h!==null?h.length:0;let _=null;if(E!==0){if(_=l.value,y!==!0||_===null){const u=g+E*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let x=0,w=g;x!==E;++x,w+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function KT(t){let e=new WeakMap;function n(o,a){return a===bh?o.mapping=Xo:a===Ch&&(o.mapping=jo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bh||a===Ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new US(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const bo=4,c1=[.125,.215,.35,.446,.526,.582],Rs=20,gf=new wx,u1=new St;let vf=null,_f=0,xf=0,yf=!1;const bs=(1+Math.sqrt(5))/2,po=1/bs,d1=[new B(-bs,po,0),new B(bs,po,0),new B(-po,0,bs),new B(po,0,bs),new B(0,bs,-po),new B(0,bs,po),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ZT=new B;class f1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ZT}=s;vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,xf),this._renderer.xr.enabled=yf,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:xl,format:Yi,colorSpace:qo,depthBuffer:!1},r=h1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JT(s)),this._blurMaterial=QT(s,e,n)}return r}_compileMaterial(e){const n=new V(this._lodPlanes[0],e);this._renderer.compile(n,gf)}_sceneToCubeUV(e,n,i,r,s){const l=new Mi(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(u1),h.toneMapping=ss,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const E=new Ct({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),_=new V(new zn,E);let u=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,u=!0):(E.color.copy(u1),u=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):w===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const R=this._cubeSize;_c(r,w*R,x>2?R:0,R,R),h.setRenderTarget(r),u&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_c(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=d1[(r-s-1)%d1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new V(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Rs-1),E=s/y,_=isFinite(s)?1+Math.floor(f*E):Rs;_>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Rs}`);const u=[];let v=0;for(let L=0;L<Rs;++L){const D=L/E,T=Math.exp(-D*D/2);u.push(T),L===0?v+=T:L<_&&(v+=2*T)}for(let L=0;L<u.length;L++)u[L]=u[L]/v;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=y,m.mipInt.value=x-i;const w=this._sizeLods[r],R=3*w*(r>x-bo?r-x+bo:0),P=4*(this._cubeSize-w);_c(n,R,P,3*w,2*w),l.setRenderTarget(n),l.render(h,gf)}}function JT(t){const e=[],n=[],i=[];let r=t;const s=t-bo+1+c1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-bo?l=c1[o-t+bo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,m=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,E=3,_=2,u=1,v=new Float32Array(E*y*g),x=new Float32Array(_*y*g),w=new Float32Array(u*y*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,D=P>2?0:-1,T=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];v.set(T,E*y*P),x.set(m,_*y*P);const S=[P,P,P,P,P,P];w.set(S,u*y*P)}const R=new _n;R.setAttribute("position",new ur(v,E)),R.setAttribute("uv",new ur(x,_)),R.setAttribute("faceIndex",new ur(w,u)),e.push(R),r>bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function h1(t,e,n){const i=new Gs(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _c(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QT(t,e,n){const i=new Float32Array(Rs),r=new B(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function p1(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function m1(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mm(),fragmentShader:`

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
	`}function e3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bh||l===Ch,f=l===Xo||l===jo;if(c||f){let h=e.get(a);const m=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new f1(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new f1(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function t3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function n3(t,e,n,i){const r={},s=new WeakMap;function o(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(h,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(h){const m=h.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function c(h){const m=[],g=h.index,y=h.attributes.position;let E=0;if(g!==null){const v=g.array;E=g.version;for(let x=0,w=v.length;x<w;x+=3){const R=v[x+0],P=v[x+1],L=v[x+2];m.push(R,P,P,L,L,R)}}else if(y!==void 0){const v=y.array;E=y.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const R=x+0,P=x+1,L=x+2;m.push(R,P,P,L,L,R)}}else return;const _=new(ux(m)?px:hx)(m,1);_.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,_)}function f(h){const m=s.get(h);if(m){const g=h.index;g!==null&&m.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function i3(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function c(m,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,m*o,y),n.update(g,i,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,y);let _=0;for(let u=0;u<y;u++)_+=g[u];n.update(_,i,1)}function h(m,g,y,E){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<m.length;u++)c(m[u]/o,g[u],E[u]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,E,0,y);let u=0;for(let v=0;v<y;v++)u+=g[v]*E[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function r3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function s3(t,e,n){const i=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let m=i.get(a);if(m===void 0||m.count!==h){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;m!==void 0&&m.texture.dispose();const y=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;y===!0&&(w=1),E===!0&&(w=2),_===!0&&(w=3);let R=a.attributes.position.count*w,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*P*4*h),D=new dx(L,R,P,h);D.type=wr,D.needsUpdate=!0;const T=w*4;for(let F=0;F<h;F++){const W=u[F],ee=v[F],ae=x[F],ce=R*P*4*F;for(let G=0;G<W.count;G++){const Z=G*T;y===!0&&(r.fromBufferAttribute(W,G),L[ce+Z+0]=r.x,L[ce+Z+1]=r.y,L[ce+Z+2]=r.z,L[ce+Z+3]=0),E===!0&&(r.fromBufferAttribute(ee,G),L[ce+Z+4]=r.x,L[ce+Z+5]=r.y,L[ce+Z+6]=r.z,L[ce+Z+7]=0),_===!0&&(r.fromBufferAttribute(ae,G),L[ce+Z+8]=r.x,L[ce+Z+9]=r.y,L[ce+Z+10]=r.z,L[ce+Z+11]=ae.itemSize===4?r.w:1)}}m={count:h,texture:D,size:new Ze(R,P)},i.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const E=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function o3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Tx=new ri,g1=new _x(1,1),Ax=new dx,bx=new _S,Cx=new vx,v1=[],_1=[],x1=new Float32Array(16),y1=new Float32Array(9),M1=new Float32Array(4);function Qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=v1[r];if(s===void 0&&(s=new Float32Array(r),v1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lu(t,e){let n=_1[e];n===void 0&&(n=new Int32Array(e),_1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function a3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function l3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2fv(this.addr,e),Rn(n,e)}}function c3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;t.uniform3fv(this.addr,e),Rn(n,e)}}function u3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4fv(this.addr,e),Rn(n,e)}}function d3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;M1.set(i),t.uniformMatrix2fv(this.addr,!1,M1),Rn(n,i)}}function f3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;y1.set(i),t.uniformMatrix3fv(this.addr,!1,y1),Rn(n,i)}}function h3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;x1.set(i),t.uniformMatrix4fv(this.addr,!1,x1),Rn(n,i)}}function p3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2iv(this.addr,e),Rn(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;t.uniform3iv(this.addr,e),Rn(n,e)}}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4iv(this.addr,e),Rn(n,e)}}function _3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2uiv(this.addr,e),Rn(n,e)}}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;t.uniform3uiv(this.addr,e),Rn(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4uiv(this.addr,e),Rn(n,e)}}function S3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(g1.compareFunction=cx,s=g1):s=Tx,n.setTexture2D(e||s,r)}function w3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bx,r)}function E3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cx,r)}function T3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ax,r)}function A3(t){switch(t){case 5126:return a3;case 35664:return l3;case 35665:return c3;case 35666:return u3;case 35674:return d3;case 35675:return f3;case 35676:return h3;case 5124:case 35670:return p3;case 35667:case 35671:return m3;case 35668:case 35672:return g3;case 35669:case 35673:return v3;case 5125:return _3;case 36294:return x3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return w3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return T3}}function b3(t,e){t.uniform1fv(this.addr,e)}function C3(t,e){const n=Qo(e,this.size,2);t.uniform2fv(this.addr,n)}function R3(t,e){const n=Qo(e,this.size,3);t.uniform3fv(this.addr,n)}function P3(t,e){const n=Qo(e,this.size,4);t.uniform4fv(this.addr,n)}function L3(t,e){const n=Qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I3(t,e){const n=Qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function D3(t,e){const n=Qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function N3(t,e){t.uniform1iv(this.addr,e)}function U3(t,e){t.uniform2iv(this.addr,e)}function F3(t,e){t.uniform3iv(this.addr,e)}function k3(t,e){t.uniform4iv(this.addr,e)}function O3(t,e){t.uniform1uiv(this.addr,e)}function z3(t,e){t.uniform2uiv(this.addr,e)}function B3(t,e){t.uniform3uiv(this.addr,e)}function H3(t,e){t.uniform4uiv(this.addr,e)}function V3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tx,s[o])}function G3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||bx,s[o])}function W3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Cx,s[o])}function X3(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ax,s[o])}function j3(t){switch(t){case 5126:return b3;case 35664:return C3;case 35665:return R3;case 35666:return P3;case 35674:return L3;case 35675:return I3;case 35676:return D3;case 5124:case 35670:return N3;case 35667:case 35671:return U3;case 35668:case 35672:return F3;case 35669:case 35673:return k3;case 5125:return O3;case 36294:return z3;case 36295:return B3;case 36296:return H3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return X3}}class q3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=A3(n.type)}}class Y3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j3(n.type)}}class $3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Mf=/(\w+)(\])?(\[|\.)?/g;function S1(t,e){t.seq.push(e),t.map[e.id]=e}function K3(t,e,n){const i=t.name,r=i.length;for(Mf.lastIndex=0;;){const s=Mf.exec(i),o=Mf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){S1(n,c===void 0?new q3(a,t,e):new Y3(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new $3(a),S1(n,h)),n=h}}}class kc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);K3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function w1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Z3=37297;let J3=0;function Q3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const E1=new gt;function eA(t){It._getMatrix(E1,It.workingColorSpace,t);const e=`mat3( ${E1.elements.map(n=>n.toFixed(4))} )`;switch(It.getTransfer(t)){case lu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function T1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Q3(t.getShaderSource(e),a)}else return s}function tA(t,e){const n=eA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nA(t,e){let n;switch(e){case qM:n="Linear";break;case YM:n="Reinhard";break;case $M:n="Cineon";break;case Q_:n="ACESFilmic";break;case ZM:n="AgX";break;case JM:n="Neutral";break;case KM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xc=new B;function iA(){It.getLuminanceCoefficients(xc);const t=xc.x.toFixed(4),e=xc.y.toFixed(4),n=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function sA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Da(t){return t!==""}function A1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(t){return t.replace(aA,cA)}const lA=new Map;function cA(t,e){let n=_t[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lp(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C1(t){return t.replace(uA,dA)}function dA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function R1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case jo:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rm:e="ENVMAP_BLENDING_MULTIPLY";break;case XM:e="ENVMAP_BLENDING_MIX";break;case jM:e="ENVMAP_BLENDING_ADD";break}return e}function gA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fA(n),c=hA(n),f=pA(n),h=mA(n),m=gA(n),g=rA(n),y=sA(s),E=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Da).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Da).join(`
`),u.length>0&&(u+=`
`)):(_=[R1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),u=[R1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?_t.tonemapping_pars_fragment:"",n.toneMapping!==ss?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,tA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Da).join(`
`)),o=lp(o),o=A1(o,n),o=b1(o,n),a=lp(a),a=A1(a,n),a=b1(a,n),o=C1(o),a=C1(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+_+o,w=v+u+a,R=w1(r,r.VERTEX_SHADER,x),P=w1(r,r.FRAGMENT_SHADER,w);r.attachShader(E,R),r.attachShader(E,P),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function L(F){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(E)||"",ee=r.getShaderInfoLog(R)||"",ae=r.getShaderInfoLog(P)||"",ce=W.trim(),G=ee.trim(),Z=ae.trim();let k=!0,ne=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,P);else{const se=T1(r,R,"vertex"),Ee=T1(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ce+`
`+se+`
`+Ee)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(G===""||Z==="")&&(ne=!1);ne&&(F.diagnostics={runnable:k,programLog:ce,vertexShader:{log:G,prefix:_},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(R),r.deleteShader(P),D=new kc(r,E),T=oA(r,E)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,Z3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=P,this}let _A=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yA(e),n.set(e,i)),i}}class yA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function MA(t,e,n,i,r,s,o){const a=new pm,l=new xA,c=new Set,f=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,S,F,W,ee){const ae=W.fog,ce=ee.geometry,G=T.isMeshStandardMaterial?W.environment:null,Z=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),k=Z&&Z.mapping===Ru?Z.image.height:null,ne=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ee=se!==void 0?se.length:0;let ze=0;ce.morphAttributes.position!==void 0&&(ze=1),ce.morphAttributes.normal!==void 0&&(ze=2),ce.morphAttributes.color!==void 0&&(ze=3);let dt,Le,he,H;if(ne){const yt=rr[ne];dt=yt.vertexShader,Le=yt.fragmentShader}else dt=T.vertexShader,Le=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),H=l.getFragmentShaderID(T);const me=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),nt=ee.isInstancedMesh===!0,Ce=ee.isBatchedMesh===!0,xt=!!T.map,fn=!!T.matcap,z=!!Z,Pt=!!T.aoMap,at=!!T.lightMap,We=!!T.bumpMap,O=!!T.normalMap,Pe=!!T.displacementMap,le=!!T.emissiveMap,ue=!!T.metalnessMap,Je=!!T.roughnessMap,it=T.anisotropy>0,I=T.clearcoat>0,b=T.dispersion>0,Q=T.iridescence>0,fe=T.sheen>0,_e=T.transmission>0,de=it&&!!T.anisotropyMap,ke=I&&!!T.clearcoatMap,xe=I&&!!T.clearcoatNormalMap,je=I&&!!T.clearcoatRoughnessMap,qe=Q&&!!T.iridescenceMap,ye=Q&&!!T.iridescenceThicknessMap,Te=fe&&!!T.sheenColorMap,st=fe&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ne=!!T.specularColorMap,ut=!!T.specularIntensityMap,j=_e&&!!T.transmissionMap,Ae=_e&&!!T.thicknessMap,Re=!!T.gradientMap,Ve=!!T.alphaMap,Me=T.alphaTest>0,ve=!!T.alphaHash,Ye=!!T.extensions;let lt=ss;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(lt=t.toneMapping);const kt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:Le,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:H,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&ee._colorsTexture!==null,instancing:nt,instancingColor:nt&&ee.instanceColor!==null,instancingMorph:nt&&ee.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:qo,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:fn,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:k,aoMap:Pt,lightMap:at,bumpMap:We,normalMap:O,displacementMap:m&&Pe,emissiveMap:le,normalMapObjectSpace:O&&T.normalMapType===nS,normalMapTangentSpace:O&&T.normalMapType===dm,metalnessMap:ue,roughnessMap:Je,anisotropy:it,anisotropyMap:de,clearcoat:I,clearcoatMap:ke,clearcoatNormalMap:xe,clearcoatRoughnessMap:je,dispersion:b,iridescence:Q,iridescenceMap:qe,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Te,sheenRoughnessMap:st,specularMap:Ke,specularColorMap:Ne,specularIntensityMap:ut,transmission:_e,transmissionMap:j,thicknessMap:Ae,gradientMap:Re,opaque:T.transparent===!1&&T.blending===No&&T.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Me,alphaHash:ve,combine:T.combine,mapUv:xt&&E(T.map.channel),aoMapUv:Pt&&E(T.aoMap.channel),lightMapUv:at&&E(T.lightMap.channel),bumpMapUv:We&&E(T.bumpMap.channel),normalMapUv:O&&E(T.normalMap.channel),displacementMapUv:Pe&&E(T.displacementMap.channel),emissiveMapUv:le&&E(T.emissiveMap.channel),metalnessMapUv:ue&&E(T.metalnessMap.channel),roughnessMapUv:Je&&E(T.roughnessMap.channel),anisotropyMapUv:de&&E(T.anisotropyMap.channel),clearcoatMapUv:ke&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:st&&E(T.sheenRoughnessMap.channel),specularMapUv:Ke&&E(T.specularMap.channel),specularColorMapUv:Ne&&E(T.specularColorMap.channel),specularIntensityMapUv:ut&&E(T.specularIntensityMap.channel),transmissionMapUv:j&&E(T.transmissionMap.channel),thicknessMapUv:Ae&&E(T.thicknessMap.channel),alphaMapUv:Ve&&E(T.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(O||it),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(xt||Ve),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Fe,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:le&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$t,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&T.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function u(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)S.push(F),S.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const S=y[T.type];let F;if(S){const W=rr[S];F=LS.clone(W.uniforms)}else F=T.uniforms;return F}function R(T,S){let F;for(let W=0,ee=f.length;W<ee;W++){const ae=f[W];if(ae.cacheKey===S){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new vA(t,S,T,s),f.push(F)),F}function P(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function L(T){l.remove(T)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:w,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:f,dispose:D}}function SA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function P1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function L1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,m,g,y,E,_){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:m,material:g,groupOrder:y,renderOrder:h.renderOrder,z:E,group:_},t[e]=u):(u.id=h.id,u.object=h,u.geometry=m,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=E,u.group=_),e++,u}function a(h,m,g,y,E,_){const u=o(h,m,g,y,E,_);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,m,g,y,E,_){const u=o(h,m,g,y,E,_);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,m){n.length>1&&n.sort(h||wA),i.length>1&&i.sort(m||P1),r.length>1&&r.sort(m||P1)}function f(){for(let h=e,m=t.length;h<m;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function EA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new L1,t.set(i,[o])):r>=s.length?(o=new L1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new St};break;case"SpotLight":n={position:new B,direction:new B,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RA(t){const e=new TA,n=AA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Qt,o=new Qt;function a(c){let f=0,h=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,y=0,E=0,_=0,u=0,v=0,x=0,w=0,R=0,P=0,L=0;c.sort(CA);for(let T=0,S=c.length;T<S;T++){const F=c[T],W=F.color,ee=F.intensity,ae=F.distance,ce=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=W.r*ee,h+=W.g*ee,m+=W.b*ee;else if(F.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],ee);L++}else if(F.isDirectionalLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=F.shadow.matrix,v++}i.directional[g]=G,g++}else if(F.isSpotLight){const G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(W).multiplyScalar(ee),G.distance=ae,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,i.spot[E]=G;const Z=F.shadow;if(F.map&&(i.spotLightMap[R]=F.map,R++,Z.updateMatrices(F),F.castShadow&&P++),i.spotLightMatrix[E]=Z.matrix,F.castShadow){const k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=ce,w++}E++}else if(F.isRectAreaLight){const G=e.get(F);G.color.copy(W).multiplyScalar(ee),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=G,_++}else if(F.isPointLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const Z=F.shadow,k=n.get(F);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[y]=k,i.pointShadowMap[y]=ce,i.pointShadowMatrix[y]=F.shadow.matrix,x++}i.point[y]=G,y++}else if(F.isHemisphereLight){const G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(ee),G.groundColor.copy(F.groundColor).multiplyScalar(ee),i.hemi[u]=G,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==g||D.pointLength!==y||D.spotLength!==E||D.rectAreaLength!==_||D.hemiLength!==u||D.numDirectionalShadows!==v||D.numPointShadows!==x||D.numSpotShadows!==w||D.numSpotMaps!==R||D.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=E,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,D.directionalLength=g,D.pointLength=y,D.spotLength=E,D.rectAreaLength=_,D.hemiLength=u,D.numDirectionalShadows=v,D.numPointShadows=x,D.numSpotShadows=w,D.numSpotMaps=R,D.numLightProbes=L,i.version=bA++)}function l(c,f){let h=0,m=0,g=0,y=0,E=0;const _=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),h++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),E++}}}return{setup:a,setupView:l,state:i}}function I1(t){const e=new RA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new I1(t),e.set(r,[a])):s>=o.length?(a=new I1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`;function DA(t,e,n){let i=new gm;const r=new Ze,s=new Ze,o=new Gt,a=new nw({depthPacking:tS}),l=new iw,c={},f=n.maxTextureSize,h={[ls]:mi,[mi]:ls,[$t]:$t},m=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:LA,fragmentShader:IA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new _n;y.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new V(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z_;let u=this.type;this.render=function(P,L,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),W=t.state;W.setBlending(rs),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=u!==_r&&this.type===_r,ae=u===_r&&this.type!==_r;for(let ce=0,G=P.length;ce<G;ce++){const Z=P[ce],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ne=k.getFrameExtents();if(r.multiply(ne),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||ee===!0||ae===!0){const Ee=this.type!==_r?{minFilter:Zi,magFilter:Zi}:{};k.map!==null&&k.map.dispose(),k.map=new Gs(r.x,r.y,Ee),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const se=k.getViewportCount();for(let Ee=0;Ee<se;Ee++){const ze=k.getViewport(Ee);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),W.viewport(o),k.updateMatrices(Z,Ee),i=k.getFrustum(),w(L,D,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===_r&&v(k,D),k.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(T,S,F)};function v(P,L){const D=e.update(E);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gs(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,D,m,E,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,D,g,E,null)}function x(P,L,D,T){let S=null;const F=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)S=F;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const W=S.uuid,ee=L.uuid;let ae=c[W];ae===void 0&&(ae={},c[W]=ae);let ce=ae[ee];ce===void 0&&(ce=S.clone(),ae[ee]=ce,L.addEventListener("dispose",R)),S=ce}if(S.visible=L.visible,S.wireframe=L.wireframe,T===_r?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=D}return S}function w(P,L,D,T,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===_r)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const ee=e.update(P),ae=P.material;if(Array.isArray(ae)){const ce=ee.groups;for(let G=0,Z=ce.length;G<Z;G++){const k=ce[G],ne=ae[k.materialIndex];if(ne&&ne.visible){const se=x(P,ne,T,S);P.onBeforeShadow(t,P,L,D,ee,se,k),t.renderBufferDirect(D,null,ee,se,P,k),P.onAfterShadow(t,P,L,D,ee,se,k)}}}else if(ae.visible){const ce=x(P,ae,T,S);P.onBeforeShadow(t,P,L,D,ee,ce,null),t.renderBufferDirect(D,null,ee,ce,P,null),P.onAfterShadow(t,P,L,D,ee,ce,null)}}const W=P.children;for(let ee=0,ae=W.length;ee<ae;ee++)w(W[ee],L,D,T,S)}function R(P){P.target.removeEventListener("dispose",R);for(const D in c){const T=c[D],S=P.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const NA={[yh]:Mh,[Sh]:Th,[wh]:Ah,[Wo]:Eh,[Mh]:yh,[Th]:Sh,[Ah]:wh,[Eh]:Wo};function UA(t,e){function n(){let j=!1;const Ae=new Gt;let Re=null;const Ve=new Gt(0,0,0,0);return{setMask:function(Me){Re!==Me&&!j&&(t.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){j=Me},setClear:function(Me,ve,Ye,lt,kt){kt===!0&&(Me*=lt,ve*=lt,Ye*=lt),Ae.set(Me,ve,Ye,lt),Ve.equals(Ae)===!1&&(t.clearColor(Me,ve,Ye,lt),Ve.copy(Ae))},reset:function(){j=!1,Re=null,Ve.set(-1,0,0,0)}}}function i(){let j=!1,Ae=!1,Re=null,Ve=null,Me=null;return{setReversed:function(ve){if(Ae!==ve){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(ve){Re!==ve&&!j&&(t.depthMask(ve),Re=ve)},setFunc:function(ve){if(Ae&&(ve=NA[ve]),Ve!==ve){switch(ve){case yh:t.depthFunc(t.NEVER);break;case Mh:t.depthFunc(t.ALWAYS);break;case Sh:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case wh:t.depthFunc(t.EQUAL);break;case Eh:t.depthFunc(t.GEQUAL);break;case Th:t.depthFunc(t.GREATER);break;case Ah:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ve=ve}},setLocked:function(ve){j=ve},setClear:function(ve){Me!==ve&&(Ae&&(ve=1-ve),t.clearDepth(ve),Me=ve)},reset:function(){j=!1,Re=null,Ve=null,Me=null,Ae=!1}}}function r(){let j=!1,Ae=null,Re=null,Ve=null,Me=null,ve=null,Ye=null,lt=null,kt=null;return{setTest:function(yt){j||(yt?me(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!j&&(t.stencilMask(yt),Ae=yt)},setFunc:function(yt,ln,Kn){(Re!==yt||Ve!==ln||Me!==Kn)&&(t.stencilFunc(yt,ln,Kn),Re=yt,Ve=ln,Me=Kn)},setOp:function(yt,ln,Kn){(ve!==yt||Ye!==ln||lt!==Kn)&&(t.stencilOp(yt,ln,Kn),ve=yt,Ye=ln,lt=Kn)},setLocked:function(yt){j=yt},setClear:function(yt){kt!==yt&&(t.clearStencil(yt),kt=yt)},reset:function(){j=!1,Ae=null,Re=null,Ve=null,Me=null,ve=null,Ye=null,lt=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},m=new WeakMap,g=[],y=null,E=!1,_=null,u=null,v=null,x=null,w=null,R=null,P=null,L=new St(0,0,0),D=0,T=!1,S=null,F=null,W=null,ee=null,ae=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Z>=2);let ne=null,se={};const Ee=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),dt=new Gt().fromArray(Ee),Le=new Gt().fromArray(ze);function he(j,Ae,Re,Ve){const Me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(j,ve),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Re;Ye++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,Ve,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ae+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ve}const H={};H[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(t.DEPTH_TEST),o.setFunc(Wo),We(!1),O(Cg),me(t.CULL_FACE),Pt(rs);function me(j){f[j]!==!0&&(t.enable(j),f[j]=!0)}function Fe(j){f[j]!==!1&&(t.disable(j),f[j]=!1)}function nt(j,Ae){return h[j]!==Ae?(t.bindFramebuffer(j,Ae),h[j]=Ae,j===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ae),j===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ce(j,Ae){let Re=g,Ve=!1;if(j){Re=m.get(Ae),Re===void 0&&(Re=[],m.set(Ae,Re));const Me=j.textures;if(Re.length!==Me.length||Re[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ye=Me.length;ve<Ye;ve++)Re[ve]=t.COLOR_ATTACHMENT0+ve;Re.length=Me.length,Ve=!0}}else Re[0]!==t.BACK&&(Re[0]=t.BACK,Ve=!0);Ve&&t.drawBuffers(Re)}function xt(j){return y!==j?(t.useProgram(j),y=j,!0):!1}const fn={[Cs]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[RM]:t.FUNC_REVERSE_SUBTRACT};fn[PM]=t.MIN,fn[LM]=t.MAX;const z={[IM]:t.ZERO,[DM]:t.ONE,[NM]:t.SRC_COLOR,[_h]:t.SRC_ALPHA,[BM]:t.SRC_ALPHA_SATURATE,[OM]:t.DST_COLOR,[FM]:t.DST_ALPHA,[UM]:t.ONE_MINUS_SRC_COLOR,[xh]:t.ONE_MINUS_SRC_ALPHA,[zM]:t.ONE_MINUS_DST_COLOR,[kM]:t.ONE_MINUS_DST_ALPHA,[HM]:t.CONSTANT_COLOR,[VM]:t.ONE_MINUS_CONSTANT_COLOR,[GM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function Pt(j,Ae,Re,Ve,Me,ve,Ye,lt,kt,yt){if(j===rs){E===!0&&(Fe(t.BLEND),E=!1);return}if(E===!1&&(me(t.BLEND),E=!0),j!==bM){if(j!==_||yt!==T){if((u!==Cs||w!==Cs)&&(t.blendEquation(t.FUNC_ADD),u=Cs,w=Cs),yt)switch(j){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rg:t.blendFunc(t.ONE,t.ONE);break;case Pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}v=null,x=null,R=null,P=null,L.set(0,0,0),D=0,_=j,T=yt}return}Me=Me||Ae,ve=ve||Re,Ye=Ye||Ve,(Ae!==u||Me!==w)&&(t.blendEquationSeparate(fn[Ae],fn[Me]),u=Ae,w=Me),(Re!==v||Ve!==x||ve!==R||Ye!==P)&&(t.blendFuncSeparate(z[Re],z[Ve],z[ve],z[Ye]),v=Re,x=Ve,R=ve,P=Ye),(lt.equals(L)===!1||kt!==D)&&(t.blendColor(lt.r,lt.g,lt.b,kt),L.copy(lt),D=kt),_=j,T=!1}function at(j,Ae){j.side===$t?Fe(t.CULL_FACE):me(t.CULL_FACE);let Re=j.side===mi;Ae&&(Re=!Re),We(Re),j.blending===No&&j.transparent===!1?Pt(rs):Pt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);const Ve=j.stencilWrite;a.setTest(Ve),Ve&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(j){S!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),S=j)}function O(j){j!==TM?(me(t.CULL_FACE),j!==F&&(j===Cg?t.cullFace(t.BACK):j===AM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),F=j}function Pe(j){j!==W&&(G&&t.lineWidth(j),W=j)}function le(j,Ae,Re){j?(me(t.POLYGON_OFFSET_FILL),(ee!==Ae||ae!==Re)&&(t.polygonOffset(Ae,Re),ee=Ae,ae=Re)):Fe(t.POLYGON_OFFSET_FILL)}function ue(j){j?me(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Je(j){j===void 0&&(j=t.TEXTURE0+ce-1),ne!==j&&(t.activeTexture(j),ne=j)}function it(j,Ae,Re){Re===void 0&&(ne===null?Re=t.TEXTURE0+ce-1:Re=ne);let Ve=se[Re];Ve===void 0&&(Ve={type:void 0,texture:void 0},se[Re]=Ve),(Ve.type!==j||Ve.texture!==Ae)&&(ne!==Re&&(t.activeTexture(Re),ne=Re),t.bindTexture(j,Ae||H[j]),Ve.type=j,Ve.texture=Ae)}function I(){const j=se[ne];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Q(){try{t.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{t.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{t.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{t.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{t.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{t.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{t.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(j){dt.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),dt.copy(j))}function st(j){Le.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),Le.copy(j))}function Ke(j,Ae){let Re=c.get(Ae);Re===void 0&&(Re=new WeakMap,c.set(Ae,Re));let Ve=Re.get(j);Ve===void 0&&(Ve=t.getUniformBlockIndex(Ae,j.name),Re.set(j,Ve))}function Ne(j,Ae){const Ve=c.get(Ae).get(j);l.get(Ae)!==Ve&&(t.uniformBlockBinding(Ae,Ve,j.__bindingPointIndex),l.set(Ae,Ve))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ne=null,se={},h={},m=new WeakMap,g=[],y=null,E=!1,_=null,u=null,v=null,x=null,w=null,R=null,P=null,L=new St(0,0,0),D=0,T=!1,S=null,F=null,W=null,ee=null,ae=null,dt.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Fe,bindFramebuffer:nt,drawBuffers:Ce,useProgram:xt,setBlending:Pt,setMaterial:at,setFlipSided:We,setCullFace:O,setLineWidth:Pe,setPolygonOffset:le,setScissorTest:ue,activeTexture:Je,bindTexture:it,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:qe,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:Ne,texStorage2D:xe,texStorage3D:je,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:ke,scissor:Te,viewport:st,reset:ut}}function FA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,f=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,b){return g?new OffscreenCanvas(I,b):uu("canvas")}function E(I,b,Q){let fe=1;const _e=it(I);if((_e.width>Q||_e.height>Q)&&(fe=Q/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(fe*_e.width),ke=Math.floor(fe*_e.height);h===void 0&&(h=y(de,ke));const xe=b?y(de,ke):h;return xe.width=de,xe.height=ke,xe.getContext("2d").drawImage(I,0,0,de,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+ke+")."),xe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function _(I){return I.generateMipmaps}function u(I){t.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(I,b,Q,fe,_e=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=b;if(b===t.RED&&(Q===t.FLOAT&&(de=t.R32F),Q===t.HALF_FLOAT&&(de=t.R16F),Q===t.UNSIGNED_BYTE&&(de=t.R8)),b===t.RED_INTEGER&&(Q===t.UNSIGNED_BYTE&&(de=t.R8UI),Q===t.UNSIGNED_SHORT&&(de=t.R16UI),Q===t.UNSIGNED_INT&&(de=t.R32UI),Q===t.BYTE&&(de=t.R8I),Q===t.SHORT&&(de=t.R16I),Q===t.INT&&(de=t.R32I)),b===t.RG&&(Q===t.FLOAT&&(de=t.RG32F),Q===t.HALF_FLOAT&&(de=t.RG16F),Q===t.UNSIGNED_BYTE&&(de=t.RG8)),b===t.RG_INTEGER&&(Q===t.UNSIGNED_BYTE&&(de=t.RG8UI),Q===t.UNSIGNED_SHORT&&(de=t.RG16UI),Q===t.UNSIGNED_INT&&(de=t.RG32UI),Q===t.BYTE&&(de=t.RG8I),Q===t.SHORT&&(de=t.RG16I),Q===t.INT&&(de=t.RG32I)),b===t.RGB_INTEGER&&(Q===t.UNSIGNED_BYTE&&(de=t.RGB8UI),Q===t.UNSIGNED_SHORT&&(de=t.RGB16UI),Q===t.UNSIGNED_INT&&(de=t.RGB32UI),Q===t.BYTE&&(de=t.RGB8I),Q===t.SHORT&&(de=t.RGB16I),Q===t.INT&&(de=t.RGB32I)),b===t.RGBA_INTEGER&&(Q===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),Q===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),Q===t.UNSIGNED_INT&&(de=t.RGBA32UI),Q===t.BYTE&&(de=t.RGBA8I),Q===t.SHORT&&(de=t.RGBA16I),Q===t.INT&&(de=t.RGBA32I)),b===t.RGB&&(Q===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),Q===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),b===t.RGBA){const ke=_e?lu:It.getTransfer(fe);Q===t.FLOAT&&(de=t.RGBA32F),Q===t.HALF_FLOAT&&(de=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(de=ke===Vt?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(I,b){let Q;return I?b===null||b===Vs||b===ul?Q=t.DEPTH24_STENCIL8:b===wr?Q=t.DEPTH32F_STENCIL8:b===cl&&(Q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vs||b===ul?Q=t.DEPTH_COMPONENT24:b===wr?Q=t.DEPTH_COMPONENT32F:b===cl&&(Q=t.DEPTH_COMPONENT16),Q}function R(I,b){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zi&&I.minFilter!==or?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),D(b),b.isVideoTexture&&f.delete(b)}function L(I){const b=I.target;b.removeEventListener("dispose",L),S(b)}function D(I){const b=i.get(I);if(b.__webglInit===void 0)return;const Q=I.source,fe=m.get(Q);if(fe){const _e=fe[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(I),Object.keys(fe).length===0&&m.delete(Q)}i.remove(I)}function T(I){const b=i.get(I);t.deleteTexture(b.__webglTexture);const Q=I.source,fe=m.get(Q);delete fe[b.__cacheKey],o.memory.textures--}function S(I){const b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let _e=0;_e<b.__webglFramebuffer[fe].length;_e++)t.deleteFramebuffer(b.__webglFramebuffer[fe][_e]);else t.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)t.deleteFramebuffer(b.__webglFramebuffer[fe]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=I.textures;for(let fe=0,_e=Q.length;fe<_e;fe++){const de=i.get(Q[fe]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(Q[fe])}i.remove(I)}let F=0;function W(){F=0}function ee(){const I=F;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function ae(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ce(I,b){const Q=i.get(I);if(I.isVideoTexture&&ue(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Q,I,b);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+b)}function G(I,b){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){H(Q,I,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+b)}function Z(I,b){const Q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){H(Q,I,b);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+b)}function k(I,b){const Q=i.get(I);if(I.version>0&&Q.__version!==I.version){me(Q,I,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+b)}const ne={[Uo]:t.REPEAT,[Ds]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},se={[Zi]:t.NEAREST,[QM]:t.NEAREST_MIPMAP_NEAREST,[Yl]:t.NEAREST_MIPMAP_LINEAR,[or]:t.LINEAR,[Od]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},Ee={[iS]:t.NEVER,[cS]:t.ALWAYS,[rS]:t.LESS,[cx]:t.LEQUAL,[sS]:t.EQUAL,[lS]:t.GEQUAL,[oS]:t.GREATER,[aS]:t.NOTEQUAL};function ze(I,b){if(b.type===wr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===or||b.magFilter===Od||b.magFilter===Yl||b.magFilter===Ns||b.minFilter===or||b.minFilter===Od||b.minFilter===Yl||b.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,ne[b.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,ne[b.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,ne[b.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,se[b.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zi||b.minFilter!==Yl&&b.minFilter!==Ns||b.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function dt(I,b){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const fe=b.source;let _e=m.get(fe);_e===void 0&&(_e={},m.set(fe,_e));const de=ae(b);if(de!==I.__cacheKey){_e[de]===void 0&&(_e[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),_e[de].usedTimes++;const ke=_e[I.__cacheKey];ke!==void 0&&(_e[I.__cacheKey].usedTimes--,ke.usedTimes===0&&T(b)),I.__cacheKey=de,I.__webglTexture=_e[de].texture}return Q}function Le(I,b,Q){return Math.floor(Math.floor(I/Q)/b)}function he(I,b,Q,fe){const de=I.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,Q,fe,b.data);else{de.sort((ye,Te)=>ye.start-Te.start);let ke=0;for(let ye=1;ye<de.length;ye++){const Te=de[ke],st=de[ye],Ke=Te.start+Te.count,Ne=Le(st.start,b.width,4),ut=Le(Te.start,b.width,4);st.start<=Ke+1&&Ne===ut&&Le(st.start+st.count-1,b.width,4)===Ne?Te.count=Math.max(Te.count,st.start+st.count-Te.start):(++ke,de[ke]=st)}de.length=ke+1;const xe=t.getParameter(t.UNPACK_ROW_LENGTH),je=t.getParameter(t.UNPACK_SKIP_PIXELS),qe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Te=de.length;ye<Te;ye++){const st=de[ye],Ke=Math.floor(st.start/4),Ne=Math.ceil(st.count/4),ut=Ke%b.width,j=Math.floor(Ke/b.width),Ae=Ne,Re=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(t.UNPACK_SKIP_ROWS,j),n.texSubImage2D(t.TEXTURE_2D,0,ut,j,Ae,Re,Q,fe,b.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,xe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,qe)}}function H(I,b,Q){let fe=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=t.TEXTURE_3D);const _e=dt(I,b),de=b.source;n.bindTexture(fe,I.__webglTexture,t.TEXTURE0+Q);const ke=i.get(de);if(de.version!==ke.__version||_e===!0){n.activeTexture(t.TEXTURE0+Q);const xe=It.getPrimaries(It.workingColorSpace),je=b.colorSpace===qr?null:It.getPrimaries(b.colorSpace),qe=b.colorSpace===qr||xe===je?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=E(b.image,!1,r.maxTextureSize);ye=Je(b,ye);const Te=s.convert(b.format,b.colorSpace),st=s.convert(b.type);let Ke=x(b.internalFormat,Te,st,b.colorSpace,b.isVideoTexture);ze(fe,b);let Ne;const ut=b.mipmaps,j=b.isVideoTexture!==!0,Ae=ke.__version===void 0||_e===!0,Re=de.dataReady,Ve=R(b,ye);if(b.isDepthTexture)Ke=w(b.format===fl,b.type),Ae&&(j?n.texStorage2D(t.TEXTURE_2D,1,Ke,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Te,st,null));else if(b.isDataTexture)if(ut.length>0){j&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ut[0].width,ut[0].height);for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],j?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,st,Ne.data):n.texImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Te,st,Ne.data);b.generateMipmaps=!1}else j?(Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ye.width,ye.height),Re&&he(b,ye,Te,st)):n.texImage2D(t.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Te,st,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ke,ut[0].width,ut[0].height,ye.depth);for(let Me=0,ve=ut.length;Me<ve;Me++)if(Ne=ut[Me],b.format!==Yi)if(Te!==null)if(j){if(Re)if(b.layerUpdates.size>0){const Ye=l1(Ne.width,Ne.height,b.format,b.type);for(const lt of b.layerUpdates){const kt=Ne.data.subarray(lt*Ye/Ne.data.BYTES_PER_ELEMENT,(lt+1)*Ye/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,lt,Ne.width,Ne.height,1,Te,kt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,ye.depth,Te,Ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Me,Ke,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,ye.depth,Te,st,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Me,Ke,Ne.width,Ne.height,ye.depth,0,Te,st,Ne.data)}else{j&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ut[0].width,ut[0].height);for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],b.format!==Yi?Te!==null?j?Re&&n.compressedTexSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Te,st,Ne.data):n.texImage2D(t.TEXTURE_2D,Me,Ke,Ne.width,Ne.height,0,Te,st,Ne.data)}else if(b.isDataArrayTexture)if(j){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ke,ye.width,ye.height,ye.depth),Re)if(b.layerUpdates.size>0){const Me=l1(ye.width,ye.height,b.format,b.type);for(const ve of b.layerUpdates){const Ye=ye.data.subarray(ve*Me/ye.data.BYTES_PER_ELEMENT,(ve+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Te,st,Ye)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ke,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(b.isData3DTexture)j?(Ae&&n.texStorage3D(t.TEXTURE_3D,Ve,Ke,ye.width,ye.height,ye.depth),Re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)):n.texImage3D(t.TEXTURE_3D,0,Ke,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(b.isFramebufferTexture){if(Ae)if(j)n.texStorage2D(t.TEXTURE_2D,Ve,Ke,ye.width,ye.height);else{let Me=ye.width,ve=ye.height;for(let Ye=0;Ye<Ve;Ye++)n.texImage2D(t.TEXTURE_2D,Ye,Ke,Me,ve,0,Te,st,null),Me>>=1,ve>>=1}}else if(ut.length>0){if(j&&Ae){const Me=it(ut[0]);n.texStorage2D(t.TEXTURE_2D,Ve,Ke,Me.width,Me.height)}for(let Me=0,ve=ut.length;Me<ve;Me++)Ne=ut[Me],j?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Te,st,Ne):n.texImage2D(t.TEXTURE_2D,Me,Ke,Te,st,Ne);b.generateMipmaps=!1}else if(j){if(Ae){const Me=it(ye);n.texStorage2D(t.TEXTURE_2D,Ve,Ke,Me.width,Me.height)}Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,st,ye)}else n.texImage2D(t.TEXTURE_2D,0,Ke,Te,st,ye);_(b)&&u(fe),ke.__version=de.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function me(I,b,Q){if(b.image.length!==6)return;const fe=dt(I,b),_e=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+Q);const de=i.get(_e);if(_e.version!==de.__version||fe===!0){n.activeTexture(t.TEXTURE0+Q);const ke=It.getPrimaries(It.workingColorSpace),xe=b.colorSpace===qr?null:It.getPrimaries(b.colorSpace),je=b.colorSpace===qr||ke===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!qe&&!ye?Te[ve]=E(b.image[ve],!0,r.maxCubemapSize):Te[ve]=ye?b.image[ve].image:b.image[ve],Te[ve]=Je(b,Te[ve]);const st=Te[0],Ke=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type),ut=x(b.internalFormat,Ke,Ne,b.colorSpace),j=b.isVideoTexture!==!0,Ae=de.__version===void 0||fe===!0,Re=_e.dataReady;let Ve=R(b,st);ze(t.TEXTURE_CUBE_MAP,b);let Me;if(qe){j&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,ut,st.width,st.height);for(let ve=0;ve<6;ve++){Me=Te[ve].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){const lt=Me[Ye];b.format!==Yi?Ke!==null?j?Re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,Ke,lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,Ke,Ne,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ut,lt.width,lt.height,0,Ke,Ne,lt.data)}}}else{if(Me=b.mipmaps,j&&Ae){Me.length>0&&Ve++;const ve=it(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){j?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Ke,Ne,Te[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Te[ve].width,Te[ve].height,0,Ke,Ne,Te[ve].data);for(let Ye=0;Ye<Me.length;Ye++){const kt=Me[Ye].image[ve].image;j?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,kt.width,kt.height,Ke,Ne,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ut,kt.width,kt.height,0,Ke,Ne,kt.data)}}else{j?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Ne,Te[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Ke,Ne,Te[ve]);for(let Ye=0;Ye<Me.length;Ye++){const lt=Me[Ye];j?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Ke,Ne,lt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ut,Ke,Ne,lt.image[ve])}}}_(b)&&u(t.TEXTURE_CUBE_MAP),de.__version=_e.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Fe(I,b,Q,fe,_e,de){const ke=s.convert(Q.format,Q.colorSpace),xe=s.convert(Q.type),je=x(Q.internalFormat,ke,xe,Q.colorSpace),qe=i.get(b),ye=i.get(Q);if(ye.__renderTarget=b,!qe.__hasExternalTextures){const Te=Math.max(1,b.width>>de),st=Math.max(1,b.height>>de);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,je,Te,st,b.depth,0,ke,xe,null):n.texImage2D(_e,de,je,Te,st,0,ke,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,_e,ye.__webglTexture,0,Pe(b)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,_e,ye.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(I,b,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,I),b.depthBuffer){const fe=b.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,de=w(b.stencilBuffer,_e),ke=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=Pe(b);le(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,de,b.width,b.height):Q?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ke,t.RENDERBUFFER,I)}else{const fe=b.textures;for(let _e=0;_e<fe.length;_e++){const de=fe[_e],ke=s.convert(de.format,de.colorSpace),xe=s.convert(de.type),je=x(de.internalFormat,ke,xe,de.colorSpace),qe=Pe(b);Q&&le(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,je,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,je,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,je,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=i.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const _e=fe.__webglTexture,de=Pe(b);if(b.depthTexture.format===dl)le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(b.depthTexture.format===fl)le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function xt(I){const b=i.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const fe=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=fe}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=I.texture.mipmaps;fe&&fe.length>0?Ce(b.__webglFramebuffer[0],I):Ce(b.__webglFramebuffer,I)}else if(Q){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=t.createRenderbuffer(),nt(b.__webglDepthbuffer[fe],I,!1);else{const _e=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[fe];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,de)}}else{const fe=I.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),nt(b.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function fn(I,b,Q){const fe=i.get(I);b!==void 0&&Fe(fe.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Q!==void 0&&xt(I)}function z(I){const b=I.texture,Q=i.get(I),fe=i.get(b);I.addEventListener("dispose",L);const _e=I.textures,de=I.isWebGLCubeRenderTarget===!0,ke=_e.length>1;if(ke||(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=b.version,o.memory.textures++),de){Q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[xe]=[];for(let je=0;je<b.mipmaps.length;je++)Q.__webglFramebuffer[xe][je]=t.createFramebuffer()}else Q.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)Q.__webglFramebuffer[xe]=t.createFramebuffer()}else Q.__webglFramebuffer=t.createFramebuffer();if(ke)for(let xe=0,je=_e.length;xe<je;xe++){const qe=i.get(_e[xe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&le(I)===!1){Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const je=_e[xe];Q.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]);const qe=s.convert(je.format,je.colorSpace),ye=s.convert(je.type),Te=x(je.internalFormat,qe,ye,je.colorSpace,I.isXRRenderTarget===!0),st=Pe(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,Te,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Q.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(Q.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(t.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Fe(Q.__webglFramebuffer[xe][je],I,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je);else Fe(Q.__webglFramebuffer[xe],I,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let xe=0,je=_e.length;xe<je;xe++){const qe=_e[xe],ye=i.get(qe);let Te=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,ye.__webglTexture),ze(Te,qe),Fe(Q.__webglFramebuffer,I,qe,t.COLOR_ATTACHMENT0+xe,Te,0),_(qe)&&u(Te)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,fe.__webglTexture),ze(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Fe(Q.__webglFramebuffer[je],I,b,t.COLOR_ATTACHMENT0,xe,je);else Fe(Q.__webglFramebuffer,I,b,t.COLOR_ATTACHMENT0,xe,0);_(b)&&u(xe),n.unbindTexture()}I.depthBuffer&&xt(I)}function Pt(I){const b=I.textures;for(let Q=0,fe=b.length;Q<fe;Q++){const _e=b[Q];if(_(_e)){const de=v(I),ke=i.get(_e).__webglTexture;n.bindTexture(de,ke),u(de),n.unbindTexture()}}}const at=[],We=[];function O(I){if(I.samples>0){if(le(I)===!1){const b=I.textures,Q=I.width,fe=I.height;let _e=t.COLOR_BUFFER_BIT;const de=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(I),xe=b.length>1;if(xe)for(let qe=0;qe<b.length;qe++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const je=I.texture.mipmaps;je&&je.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[qe]);const ye=i.get(b[qe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,_e,t.NEAREST),l===!0&&(at.length=0,We.length=0,at.push(t.COLOR_ATTACHMENT0+qe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(at.push(de),We.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let qe=0;qe<b.length;qe++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.RENDERBUFFER,ke.__webglColorRenderbuffer[qe]);const ye=i.get(b[qe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+qe,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function le(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(I){const b=o.render.frame;f.get(I)!==b&&(f.set(I,b),I.update())}function Je(I,b){const Q=I.colorSpace,fe=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==qo&&Q!==qr&&(It.getTransfer(Q)===Vt?(fe!==Yi||_e!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function it(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=fn,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=le}function kA(t,e){function n(i,r=qr){let s;const o=It.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===om)return t.UNSIGNED_SHORT_4_4_4_4;if(i===am)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ix)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===rx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===tx)return t.BYTE;if(i===nx)return t.SHORT;if(i===cl)return t.UNSIGNED_SHORT;if(i===sm)return t.INT;if(i===Vs)return t.UNSIGNED_INT;if(i===wr)return t.FLOAT;if(i===xl)return t.HALF_FLOAT;if(i===sx)return t.ALPHA;if(i===ox)return t.RGB;if(i===Yi)return t.RGBA;if(i===dl)return t.DEPTH_COMPONENT;if(i===fl)return t.DEPTH_STENCIL;if(i===ax)return t.RED;if(i===lm)return t.RED_INTEGER;if(i===lx)return t.RG;if(i===cm)return t.RG_INTEGER;if(i===um)return t.RGBA_INTEGER;if(i===Dc||i===Nc||i===Uc||i===Fc)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Lh||i===Ih||i===Dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nh||i===Uh||i===Fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nh||i===Uh)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kh||i===Oh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh||i===qh||i===Yh||i===$h||i===Kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zh||i===Jh||i===Qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zh)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ep||i===tp||i===np||i===ip)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ep)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===np)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ip)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
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

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cs({vertexShader:OA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new V(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Jo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,m=null,g=null,y=null;const E=typeof XRWebGLBinding<"u",_=new BA,u={},v=n.getContextAttributes();let x=null,w=null;const R=[],P=[],L=new Ze;let D=null;const T=new Mi;T.viewport=new Gt;const S=new Mi;S.viewport=new Gt;const F=[T,S],W=new aw;let ee=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let me=R[H];return me===void 0&&(me=new lf,R[H]=me),me.getTargetRaySpace()},this.getControllerGrip=function(H){let me=R[H];return me===void 0&&(me=new lf,R[H]=me),me.getGripSpace()},this.getHand=function(H){let me=R[H];return me===void 0&&(me=new lf,R[H]=me),me.getHandSpace()};function ce(H){const me=P.indexOf(H.inputSource);if(me===-1)return;const Fe=R[me];Fe!==void 0&&(Fe.update(H.inputSource,H.frame,c||o),Fe.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let H=0;H<R.length;H++){const me=P[H];me!==null&&(P[H]=null,R[H].disconnect(me))}ee=null,ae=null,_.reset();for(const H in u)delete u[H];e.setRenderTarget(x),g=null,m=null,h=null,r=null,w=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,nt=null,Ce=null;v.depth&&(Ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Fe=v.stencil?fl:dl,nt=v.stencil?ul:Vs);const xt={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),m=h.createProjectionLayer(xt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new Gs(m.textureWidth,m.textureHeight,{format:Yi,type:dr,depthTexture:new _x(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Fe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Gs(g.framebufferWidth,g.framebufferHeight,{format:Yi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(H){for(let me=0;me<H.removed.length;me++){const Fe=H.removed[me],nt=P.indexOf(Fe);nt>=0&&(P[nt]=null,R[nt].disconnect(Fe))}for(let me=0;me<H.added.length;me++){const Fe=H.added[me];let nt=P.indexOf(Fe);if(nt===-1){for(let xt=0;xt<R.length;xt++)if(xt>=P.length){P.push(Fe),nt=xt;break}else if(P[xt]===null){P[xt]=Fe,nt=xt;break}if(nt===-1)break}const Ce=R[nt];Ce&&Ce.connect(Fe)}}const k=new B,ne=new B;function se(H,me,Fe){k.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(Fe.matrixWorld);const nt=k.distanceTo(ne),Ce=me.projectionMatrix.elements,xt=Fe.projectionMatrix.elements,fn=Ce[14]/(Ce[10]-1),z=Ce[14]/(Ce[10]+1),Pt=(Ce[9]+1)/Ce[5],at=(Ce[9]-1)/Ce[5],We=(Ce[8]-1)/Ce[0],O=(xt[8]+1)/xt[0],Pe=fn*We,le=fn*O,ue=nt/(-We+O),Je=ue*-We;if(me.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Je),H.translateZ(ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ce[10]===-1)H.projectionMatrix.copy(me.projectionMatrix),H.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const it=fn+ue,I=z+ue,b=Pe-Je,Q=le+(nt-Je),fe=Pt*z/I*it,_e=at*z/I*it;H.projectionMatrix.makePerspective(b,Q,fe,_e,it,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ee(H,me){me===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(me.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let me=H.near,Fe=H.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(Fe=_.depthFar)),W.near=S.near=T.near=me,W.far=S.far=T.far=Fe,(ee!==W.near||ae!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),ee=W.near,ae=W.far),W.layers.mask=H.layers.mask|6,T.layers.mask=W.layers.mask&3,S.layers.mask=W.layers.mask&5;const nt=H.parent,Ce=W.cameras;Ee(W,nt);for(let xt=0;xt<Ce.length;xt++)Ee(Ce[xt],nt);Ce.length===2?se(W,T,S):W.projectionMatrix.copy(T.projectionMatrix),ze(H,W,nt)};function ze(H,me,Fe){Fe===null?H.matrix.copy(me.matrixWorld):(H.matrix.copy(Fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(me.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(me.projectionMatrix),H.projectionMatrixInverse.copy(me.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=rp*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(H){l=H,m!==null&&(m.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(H){return u[H]};let dt=null;function Le(H,me){if(f=me.getViewerPose(c||o),y=me,f!==null){const Fe=f.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let nt=!1;Fe.length!==W.cameras.length&&(W.cameras.length=0,nt=!0);for(let z=0;z<Fe.length;z++){const Pt=Fe[z];let at=null;if(g!==null)at=g.getViewport(Pt);else{const O=h.getViewSubImage(m,Pt);at=O.viewport,z===0&&(e.setRenderTargetTextures(w,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(w))}let We=F[z];We===void 0&&(We=new Mi,We.layers.enable(z),We.viewport=new Gt,F[z]=We),We.matrix.fromArray(Pt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Pt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(at.x,at.y,at.width,at.height),z===0&&(W.matrix.copy(We.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),nt===!0&&W.cameras.push(We)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const z=h.getDepthInformation(Fe[0]);z&&z.isValid&&z.texture&&_.init(z,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let z=0;z<Fe.length;z++){const Pt=Fe[z].camera;if(Pt){let at=u[Pt];at||(at=new xx,u[Pt]=at);const We=h.getCameraImage(Pt);at.sourceTexture=We}}}}for(let Fe=0;Fe<R.length;Fe++){const nt=P[Fe],Ce=R[Fe];nt!==null&&Ce!==void 0&&Ce.update(nt,me,c||o)}dt&&dt(H,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),y=null}const he=new Ex;he.setAnimationLoop(Le),this.setAnimationLoop=function(H){dt=H},this.dispose=function(){}}}const Ss=new Qi,VA=new Qt;function GA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,mx(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,x,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),h(_,u)):u.isMeshPhongMaterial?(s(_,u),f(_,u)):u.isMeshStandardMaterial?(s(_,u),m(_,u),u.isMeshPhysicalMaterial&&g(_,u,w)):u.isMeshMatcapMaterial?(s(_,u),y(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),E(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,x):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===mi&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===mi&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,w=v.envMapRotation;x&&(_.envMap.value=x,Ss.copy(w),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),_.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Ss)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,x){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=x*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function f(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function h(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function m(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mi&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function E(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=r[v.id];w===void 0&&(y(v),w=f(v),r[v.id]=w,v.addEventListener("dispose",_));const R=x.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(m(v),s[v.id]=P)}function f(v){const x=h();v.__bindingPointIndex=x;const w=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const x=r[v.id],w=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,L=w.length;P<L;P++){const D=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,S=D.length;T<S;T++){const F=D[T];if(g(F,P,T,R)===!0){const W=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let ce=0;ce<ee.length;ce++){const G=ee[ce],Z=E(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,W+ae,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,ae),ae+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,w,R){const P=v.value,L=x+"_"+w;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const D=R[L];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return R[L]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function y(v){const x=v.uniforms;let w=0;const R=16;for(let L=0,D=x.length;L<D;L++){const T=Array.isArray(x[L])?x[L]:[x[L]];for(let S=0,F=T.length;S<F;S++){const W=T[S],ee=Array.isArray(W.value)?W.value:[W.value];for(let ae=0,ce=ee.length;ae<ce;ae++){const G=ee[ae],Z=E(G),k=w%R,ne=k%Z.boundary,se=k+ne;w+=ne,se!==0&&R-se<Z.storage&&(w+=R-se),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=Z.storage}}}const P=w%R;return P>0&&(w+=R-P),v.__size=w,v.__cache={},this}function E(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class XA{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=new Uint32Array(4),E=new Int32Array(4);let _=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=Bn;let P=0,L=0,D=null,T=-1,S=null;const F=new Gt,W=new Gt;let ee=null;const ae=new St(0);let ce=0,G=n.width,Z=n.height,k=1,ne=null,se=null;const Ee=new Gt(0,0,G,Z),ze=new Gt(0,0,G,Z);let dt=!1;const Le=new gm;let he=!1,H=!1;const me=new Qt,Fe=new B,nt=new Gt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function fn(){return D===null?k:1}let z=i;function Pt(C,K){return n.getContext(C,K)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${im}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",Me,!1),z===null){const K="webgl2";if(z=Pt(K,C),z===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,We,O,Pe,le,ue,Je,it,I,b,Q,fe,_e,de,ke,xe,je,qe,ye,Te,st,Ke,Ne,ut;function j(){at=new t3(z),at.init(),Ke=new kA(z,at),We=new YT(z,at,e,Ke),O=new UA(z,at),We.reversedDepthBuffer&&m&&O.buffers.depth.setReversed(!0),Pe=new r3(z),le=new SA,ue=new FA(z,at,O,le,We,Ke,Pe),Je=new KT(w),it=new e3(w),I=new uw(z),Ne=new jT(z,I),b=new n3(z,I,Pe,Ne),Q=new o3(z,b,I,Pe),ye=new s3(z,We,ue),xe=new $T(le),fe=new MA(w,Je,it,at,We,Ne,xe),_e=new GA(w,le),de=new EA,ke=new PA(at),qe=new XT(w,Je,it,O,Q,g,l),je=new DA(w,Q,We),ut=new WA(z,Pe,We,O),Te=new qT(z,at,Pe),st=new i3(z,at,Pe),Pe.programs=fe.programs,w.capabilities=We,w.extensions=at,w.properties=le,w.renderLists=de,w.shadowMap=je,w.state=O,w.info=Pe}j();const Ae=new HA(w,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,Z,!1))},this.getSize=function(C){return C.set(G,Z)},this.setSize=function(C,K,ie=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,Z=K,n.width=Math.floor(C*k),n.height=Math.floor(K*k),ie===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(G*k,Z*k).floor()},this.setDrawingBufferSize=function(C,K,ie){G=C,Z=K,k=ie,n.width=Math.floor(C*ie),n.height=Math.floor(K*ie),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,K,ie,re){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,K,ie,re),O.viewport(F.copy(Ee).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,K,ie,re){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,K,ie,re),O.scissor(W.copy(ze).multiplyScalar(k).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){O.setScissorTest(dt=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ie=!0){let re=0;if(C){let J=!1;if(D!==null){const Se=D.texture.format;J=Se===um||Se===cm||Se===lm}if(J){const Se=D.texture.type,Ie=Se===dr||Se===Vs||Se===cl||Se===ul||Se===om||Se===am,Xe=qe.getClearColor(),Ue=qe.getClearAlpha(),rt=Xe.r,ot=Xe.g,et=Xe.b;Ie?(y[0]=rt,y[1]=ot,y[2]=et,y[3]=Ue,z.clearBufferuiv(z.COLOR,0,y)):(E[0]=rt,E[1]=ot,E[2]=et,E[3]=Ue,z.clearBufferiv(z.COLOR,0,E))}else re|=z.COLOR_BUFFER_BIT}K&&(re|=z.DEPTH_BUFFER_BIT),ie&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),qe.dispose(),de.dispose(),ke.dispose(),le.dispose(),Je.dispose(),it.dispose(),Q.dispose(),Ne.dispose(),ut.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Kn),Ae.removeEventListener("sessionend",ea),Oi.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Pe.autoReset,K=je.enabled,ie=je.autoUpdate,re=je.needsUpdate,J=je.type;j(),Pe.autoReset=C,je.enabled=K,je.autoUpdate=ie,je.needsUpdate=re,je.type=J}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const K=C.target;K.removeEventListener("dispose",ve),Ye(K)}function Ye(C){lt(C),le.remove(C)}function lt(C){const K=le.get(C).programs;K!==void 0&&(K.forEach(function(ie){fe.releaseProgram(ie)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ie,re,J,Se){K===null&&(K=Ce);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,Xe=na(C,K,ie,re,J);O.setMaterial(re,Ie);let Ue=ie.index,rt=1;if(re.wireframe===!0){if(Ue=b.getWireframeAttribute(ie),Ue===void 0)return;rt=2}const ot=ie.drawRange,et=ie.attributes.position;let vt=ot.start*rt,Dt=(ot.start+ot.count)*rt;Se!==null&&(vt=Math.max(vt,Se.start*rt),Dt=Math.min(Dt,(Se.start+Se.count)*rt)),Ue!==null?(vt=Math.max(vt,0),Dt=Math.min(Dt,Ue.count)):et!=null&&(vt=Math.max(vt,0),Dt=Math.min(Dt,et.count));const ft=Dt-vt;if(ft<0||ft===1/0)return;Ne.setup(J,re,Xe,ie,Ue);let Wt,Ot=Te;if(Ue!==null&&(Wt=I.get(Ue),Ot=st,Ot.setIndex(Wt)),J.isMesh)re.wireframe===!0?(O.setLineWidth(re.wireframeLinewidth*fn()),Ot.setMode(z.LINES)):Ot.setMode(z.TRIANGLES);else if(J.isLine){let tt=re.linewidth;tt===void 0&&(tt=1),O.setLineWidth(tt*fn()),J.isLineSegments?Ot.setMode(z.LINES):J.isLineLoop?Ot.setMode(z.LINE_LOOP):Ot.setMode(z.LINE_STRIP)}else J.isPoints?Ot.setMode(z.POINTS):J.isSprite&&Ot.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Ot.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,qt=J._multiDrawCounts,Et=J._multiDrawCount,Fn=Ue?I.get(Ue).bytesPerElement:1,Ir=le.get(re).currentProgram.getUniforms();for(let Jn=0;Jn<Et;Jn++)Ir.setValue(z,"_gl_DrawID",Jn),Ot.render(tt[Jn]/Fn,qt[Jn])}else if(J.isInstancedMesh)Ot.renderInstances(vt,ft,J.count);else if(ie.isInstancedBufferGeometry){const tt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,qt=Math.min(ie.instanceCount,tt);Ot.renderInstances(vt,ft,qt)}else Ot.render(vt,ft)};function kt(C,K,ie){C.transparent===!0&&C.side===$t&&C.forceSinglePass===!1?(C.side=mi,C.needsUpdate=!0,bi(C,K,ie),C.side=ls,C.needsUpdate=!0,bi(C,K,ie),C.side=$t):bi(C,K,ie)}this.compile=function(C,K,ie=null){ie===null&&(ie=C),u=ke.get(ie),u.init(K),x.push(u),ie.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),C!==ie&&C.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),u.setupLights();const re=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Se=J.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){const Xe=Se[Ie];kt(Xe,ie,J),re.add(Xe)}else kt(Se,ie,J),re.add(Se)}),u=x.pop(),re},this.compileAsync=function(C,K,ie=null){const re=this.compile(C,K,ie);return new Promise(J=>{function Se(){if(re.forEach(function(Ie){le.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){J(C);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function ln(C){yt&&yt(C)}function Kn(){Oi.stop()}function ea(){Oi.start()}const Oi=new Ex;Oi.setAnimationLoop(ln),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){yt=C,Ae.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},Ae.addEventListener("sessionstart",Kn),Ae.addEventListener("sessionend",ea),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,K,D),u=ke.get(C,x.length),u.init(K),x.push(u),me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Le.setFromProjectionMatrix(me,ar,K.reversedDepth),H=this.localClippingEnabled,he=xe.init(this.clippingPlanes,H),_=de.get(C,v.length),_.init(),v.push(_),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&qs(Se,K,-1/0,w.sortObjects)}qs(C,K,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(ne,se),xt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,xt&&qe.addToRenderList(_,C),this.info.render.frame++,he===!0&&xe.beginShadows();const ie=u.state.shadowsArray;je.render(ie,C,K),he===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=_.opaque,J=_.transmissive;if(u.setupLights(),K.isArrayCamera){const Se=K.cameras;if(J.length>0)for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){const Ue=Se[Ie];Ys(re,J,C,Ue)}xt&&qe.render(C);for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){const Ue=Se[Ie];ta(_,C,Ue,Ue.viewport)}}else J.length>0&&Ys(re,J,C,K),xt&&qe.render(C),ta(_,C,K);D!==null&&L===0&&(ue.updateMultisampleRenderTarget(D),ue.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(w,C,K),Ne.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],he===!0&&xe.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function qs(C,K,ie,re){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){re&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ie=Q.update(C),Xe=C.material;Xe.visible&&_.push(C,Ie,Xe,ie,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const Ie=Q.update(C),Xe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),nt.copy(Ie.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Xe)){const Ue=Ie.groups;for(let rt=0,ot=Ue.length;rt<ot;rt++){const et=Ue[rt],vt=Xe[et.materialIndex];vt&&vt.visible&&_.push(C,Ie,vt,ie,nt.z,et)}}else Xe.visible&&_.push(C,Ie,Xe,ie,nt.z,null)}}const Se=C.children;for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++)qs(Se[Ie],K,ie,re)}function ta(C,K,ie,re){const J=C.opaque,Se=C.transmissive,Ie=C.transparent;u.setupLightsView(ie),he===!0&&xe.setGlobalState(w.clippingPlanes,ie),re&&O.viewport(F.copy(re)),J.length>0&&$s(J,K,ie),Se.length>0&&$s(Se,K,ie),Ie.length>0&&$s(Ie,K,ie),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ys(C,K,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[re.id]===void 0&&(u.state.transmissionRenderTarget[re.id]=new Gs(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?xl:dr,minFilter:Ns,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Se=u.state.transmissionRenderTarget[re.id],Ie=re.viewport||F;Se.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const Xe=w.getRenderTarget(),Ue=w.getActiveCubeFace(),rt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(ae),ce=w.getClearAlpha(),ce<1&&w.setClearColor(16777215,.5),w.clear(),xt&&qe.render(ie);const ot=w.toneMapping;w.toneMapping=ss;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),u.setupLightsView(re),he===!0&&xe.setGlobalState(w.clippingPlanes,re),$s(C,ie,re),ue.updateMultisampleRenderTarget(Se),ue.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Dt=0,ft=K.length;Dt<ft;Dt++){const Wt=K[Dt],Ot=Wt.object,tt=Wt.geometry,qt=Wt.material,Et=Wt.group;if(qt.side===$t&&Ot.layers.test(re.layers)){const Fn=qt.side;qt.side=mi,qt.needsUpdate=!0,Ks(Ot,ie,re,tt,qt,Et),qt.side=Fn,qt.needsUpdate=!0,vt=!0}}vt===!0&&(ue.updateMultisampleRenderTarget(Se),ue.updateRenderTargetMipmap(Se))}w.setRenderTarget(Xe,Ue,rt),w.setClearColor(ae,ce),et!==void 0&&(re.viewport=et),w.toneMapping=ot}function $s(C,K,ie){const re=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Se=C.length;J<Se;J++){const Ie=C[J],Xe=Ie.object,Ue=Ie.geometry,rt=Ie.group;let ot=Ie.material;ot.allowOverride===!0&&re!==null&&(ot=re),Xe.layers.test(ie.layers)&&Ks(Xe,K,ie,Ue,ot,rt)}}function Ks(C,K,ie,re,J,Se){C.onBeforeRender(w,K,ie,re,J,Se),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(w,K,ie,re,C,Se),J.transparent===!0&&J.side===$t&&J.forceSinglePass===!1?(J.side=mi,J.needsUpdate=!0,w.renderBufferDirect(ie,K,re,J,C,Se),J.side=ls,J.needsUpdate=!0,w.renderBufferDirect(ie,K,re,J,C,Se),J.side=$t):w.renderBufferDirect(ie,K,re,J,C,Se),C.onAfterRender(w,K,ie,re,J,Se)}function bi(C,K,ie){K.isScene!==!0&&(K=Ce);const re=le.get(C),J=u.state.lights,Se=u.state.shadowsArray,Ie=J.state.version,Xe=fe.getParameters(C,J.state,Se,K,ie),Ue=fe.getProgramCacheKey(Xe);let rt=re.programs;re.environment=C.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(C.isMeshStandardMaterial?it:Je).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ve),rt=new Map,re.programs=rt);let ot=rt.get(Ue);if(ot!==void 0){if(re.currentProgram===ot&&re.lightsStateVersion===Ie)return hn(C,Xe),ot}else Xe.uniforms=fe.getUniforms(C),C.onBeforeCompile(Xe,w),ot=fe.acquireProgram(Xe,Ue),rt.set(Ue,ot),re.uniforms=Xe.uniforms;const et=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=xe.uniform),hn(C,Xe),re.needsLights=ra(C),re.lightsStateVersion=Ie,re.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=ot,re.uniformsList=null,ot}function Zn(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=kc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function hn(C,K){const ie=le.get(C);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.batchingColor=K.batchingColor,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function na(C,K,ie,re,J){K.isScene!==!0&&(K=Ce),ue.resetTextureUnits();const Se=K.fog,Ie=re.isMeshStandardMaterial?K.environment:null,Xe=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qo,Ue=(re.isMeshStandardMaterial?it:Je).get(re.envMap||Ie),rt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ot=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),et=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,Dt=!!ie.morphAttributes.color;let ft=ss;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=w.toneMapping);const Wt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,tt=le.get(re),qt=u.state.lights;if(he===!0&&(H===!0||C!==S)){const yn=C===S&&re.id===T;xe.setState(re,C,yn)}let Et=!1;re.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==Xe||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==Ue||re.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==et||tt.morphNormals!==vt||tt.morphColors!==Dt||tt.toneMapping!==ft||tt.morphTargetsCount!==Ot)&&(Et=!0):(Et=!0,tt.__version=re.version);let Fn=tt.currentProgram;Et===!0&&(Fn=bi(re,K,J));let Ir=!1,Jn=!1,Dr=!1;const Xt=Fn.getUniforms(),xn=tt.uniforms;if(O.useProgram(Fn.program)&&(Ir=!0,Jn=!0,Dr=!0),re.id!==T&&(T=re.id,Jn=!0),Ir||S!==C){O.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(z,"projectionMatrix",C.projectionMatrix),Xt.setValue(z,"viewMatrix",C.matrixWorldInverse);const Mn=Xt.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,Fe.setFromMatrixPosition(C.matrixWorld)),We.logarithmicDepthBuffer&&Xt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Xt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Jn=!0,Dr=!0)}if(J.isSkinnedMesh){Xt.setOptional(z,J,"bindMatrix"),Xt.setOptional(z,J,"bindMatrixInverse");const yn=J.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Xt.setValue(z,"boneTexture",yn.boneTexture,ue))}J.isBatchedMesh&&(Xt.setOptional(z,J,"batchingTexture"),Xt.setValue(z,"batchingTexture",J._matricesTexture,ue),Xt.setOptional(z,J,"batchingIdTexture"),Xt.setValue(z,"batchingIdTexture",J._indirectTexture,ue),Xt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Xt.setValue(z,"batchingColorTexture",J._colorsTexture,ue));const Qn=ie.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&ye.update(J,ie,Fn),(Jn||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Xt.setValue(z,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(xn.envMap.value=Ue,xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(xn.envMapIntensity.value=K.environmentIntensity),Jn&&(Xt.setValue(z,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&ia(xn,Dr),Se&&re.fog===!0&&_e.refreshFogUniforms(xn,Se),_e.refreshMaterialUniforms(xn,re,k,Z,u.state.transmissionRenderTarget[C.id]),kc.upload(z,Zn(tt),xn,ue)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(kc.upload(z,Zn(tt),xn,ue),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Xt.setValue(z,"center",J.center),Xt.setValue(z,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(z,"normalMatrix",J.normalMatrix),Xt.setValue(z,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const yn=re.uniformsGroups;for(let Mn=0,er=yn.length;Mn<er;Mn++){const tr=yn[Mn];ut.update(tr,Fn),ut.bind(tr,Fn)}}return Fn}function ia(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,K,ie){const re=le.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=K,le.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ie=le.get(C);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0};const Iu=z.createFramebuffer();this.setRenderTarget=function(C,K=0,ie=0){D=C,P=K,L=ie;let re=!0,J=null,Se=!1,Ie=!1;if(C){const Ue=le.get(C);if(Ue.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(z.FRAMEBUFFER,null),re=!1;else if(Ue.__webglFramebuffer===void 0)ue.setupRenderTarget(C);else if(Ue.__hasExternalTextures)ue.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ue.__boundDepthTexture!==et){if(et!==null&&le.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ie=!0);const ot=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?J=ot[K][ie]:J=ot[K],Se=!0):C.samples>0&&ue.useMultisampledRTT(C)===!1?J=le.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?J=ot[ie]:J=ot,F.copy(C.viewport),W.copy(C.scissor),ee=C.scissorTest}else F.copy(Ee).multiplyScalar(k).floor(),W.copy(ze).multiplyScalar(k).floor(),ee=dt;if(ie!==0&&(J=Iu),O.bindFramebuffer(z.FRAMEBUFFER,J)&&re&&O.drawBuffers(C,J),O.viewport(F),O.scissor(W),O.setScissorTest(ee),Se){const Ue=le.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ue.__webglTexture,ie)}else if(Ie){const Ue=K;for(let rt=0;rt<C.textures.length;rt++){const ot=le.get(C.textures[rt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+rt,ot.__webglTexture,ie,Ue)}}else if(C!==null&&ie!==0){const Ue=le.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ue.__webglTexture,ie)}T=-1},this.readRenderTargetPixels=function(C,K,ie,re,J,Se,Ie,Xe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){O.bindFramebuffer(z.FRAMEBUFFER,Ue);try{const rt=C.textures[Xe],ot=rt.format,et=rt.type;if(!We.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-J&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xe),z.readPixels(K,ie,re,J,Ke.convert(ot),Ke.convert(et),Se))}finally{const rt=D!==null?le.get(D).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ie,re,J,Se,Ie,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-J){O.bindFramebuffer(z.FRAMEBUFFER,Ue);const rt=C.textures[Xe],ot=rt.format,et=rt.type;if(!We.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xe),z.readPixels(K,ie,re,J,Ke.convert(ot),Ke.convert(et),0);const Dt=D!==null?le.get(D).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Dt);const ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await fS(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(vt),z.deleteSync(ft),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ie=0){const re=Math.pow(2,-ie),J=Math.floor(C.image.width*re),Se=Math.floor(C.image.height*re),Ie=K!==null?K.x:0,Xe=K!==null?K.y:0;ue.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Ie,Xe,J,Se),O.unbindTexture()};const sa=z.createFramebuffer(),oa=z.createFramebuffer();this.copyTextureToTexture=function(C,K,ie=null,re=null,J=0,Se=null){Se===null&&(J!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=J,J=0):Se=0);let Ie,Xe,Ue,rt,ot,et,vt,Dt,ft;const Wt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(ie!==null)Ie=ie.max.x-ie.min.x,Xe=ie.max.y-ie.min.y,Ue=ie.isBox3?ie.max.z-ie.min.z:1,rt=ie.min.x,ot=ie.min.y,et=ie.isBox3?ie.min.z:0;else{const Qn=Math.pow(2,-J);Ie=Math.floor(Wt.width*Qn),Xe=Math.floor(Wt.height*Qn),C.isDataArrayTexture?Ue=Wt.depth:C.isData3DTexture?Ue=Math.floor(Wt.depth*Qn):Ue=1,rt=0,ot=0,et=0}re!==null?(vt=re.x,Dt=re.y,ft=re.z):(vt=0,Dt=0,ft=0);const Ot=Ke.convert(K.format),tt=Ke.convert(K.type);let qt;K.isData3DTexture?(ue.setTexture3D(K,0),qt=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ue.setTexture2DArray(K,0),qt=z.TEXTURE_2D_ARRAY):(ue.setTexture2D(K,0),qt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=z.getParameter(z.UNPACK_ROW_LENGTH),Fn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ir=z.getParameter(z.UNPACK_SKIP_PIXELS),Jn=z.getParameter(z.UNPACK_SKIP_ROWS),Dr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,et);const Xt=C.isDataArrayTexture||C.isData3DTexture,xn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Qn=le.get(C),yn=le.get(K),Mn=le.get(Qn.__renderTarget),er=le.get(yn.__renderTarget);O.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let tr=0;tr<Ue;tr++)Xt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(C).__webglTexture,J,et+tr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(K).__webglTexture,Se,ft+tr)),z.blitFramebuffer(rt,ot,Ie,Xe,vt,Dt,Ie,Xe,z.DEPTH_BUFFER_BIT,z.NEAREST);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||le.has(C)){const Qn=le.get(C),yn=le.get(K);O.bindFramebuffer(z.READ_FRAMEBUFFER,sa),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,oa);for(let Mn=0;Mn<Ue;Mn++)Xt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qn.__webglTexture,J,et+Mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qn.__webglTexture,J),xn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Se,ft+Mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Se),J!==0?z.blitFramebuffer(rt,ot,Ie,Xe,vt,Dt,Ie,Xe,z.COLOR_BUFFER_BIT,z.NEAREST):xn?z.copyTexSubImage3D(qt,Se,vt,Dt,ft+Mn,rt,ot,Ie,Xe):z.copyTexSubImage2D(qt,Se,vt,Dt,rt,ot,Ie,Xe);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(qt,Se,vt,Dt,ft,Ie,Xe,Ue,Ot,tt,Wt.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(qt,Se,vt,Dt,ft,Ie,Xe,Ue,Ot,Wt.data):z.texSubImage3D(qt,Se,vt,Dt,ft,Ie,Xe,Ue,Ot,tt,Wt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,vt,Dt,Ie,Xe,Ot,tt,Wt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,vt,Dt,Wt.width,Wt.height,Ot,Wt.data):z.texSubImage2D(z.TEXTURE_2D,Se,vt,Dt,Ie,Xe,Ot,tt,Wt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Et),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ir),z.pixelStorei(z.UNPACK_SKIP_ROWS,Jn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Dr),Se===0&&K.generateMipmaps&&z.generateMipmap(qt),O.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ue.setTextureCube(C,0):C.isData3DTexture?ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ue.setTexture2DArray(C,0):ue.setTexture2D(C,0),O.unbindTexture()},this.resetState=function(){P=0,L=0,D=null,O.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),n.unpackColorSpace=It._getUnpackColorSpace()}}var k1;const bt=(k1=window.Telegram)==null?void 0:k1.WebApp,D1="/yggdrasil-tma/",yc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],jA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],N1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},U1=()=>{try{const t={...N1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...N1,watch:Date.now()}}},ba=()=>new Date().toISOString().slice(0,10),qA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Sf=[3,5,8,12,18,25,40],YA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],$A=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],wf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Ca={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},F1={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Ef={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Tf={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Vr({name:t,className:e}){return X.jsx("img",{src:t.includes(".")?`${D1}img/${t}`:`${D1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const KA=`
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
`,ws=(t,e=.9,n=0)=>new De({color:t,roughness:e,metalness:n}),$=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function ZA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function JA(t){const e=new $e,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=ws(i,.92),c=ws(s,.9),f=ws(o,.96),h=ws(r,.95),m=ws(a,.78),g=ws(2106150,.98),y=new V(new ci(.28,.24,5,8),f);y.position.y=.72,e.add(y);const E=new V(new ci(n?.37:.32,.56,6,10),c);E.position.y=1.15,e.add(E);const _=new V(new ci(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const u=new V(new ct(.36,.38,.09,12),f);u.position.y=.93,e.add(u);const v=new V(new zn(.12,.12,.055),m);v.position.set(0,.93,.38),e.add(v);const x=new V(new ct(.13,.15,.18,10),l);x.position.y=1.63,e.add(x);const w=new V(new mt(.31,16,12),l);w.scale.set(.92,1.06,.92),w.position.y=1.91,e.add(w);const R=new V(new mt(.325,14,10),h);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new V(new ci(.18,.3,5,8),h);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const L=new V(new gn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const D=new De({color:1513754,roughness:.55});for(const ne of[-.105,.105]){const se=new V(new mt(.025,7,5),D);se.position.set(ne,1.98,.285),e.add(se)}if(n){const ne=new V(new mt(.19,10,7),h);ne.scale.set(.82,1,.72),ne.position.set(0,1.8,.24),e.add(ne)}else{const ne=new V(new ci(.055,.42,4,7),h);ne.position.set(-.27,1.78,-.08),ne.rotation.z=-.22,e.add(ne)}const T=ne=>{const se=new $e;se.position.set(ne*(n?.43:.39),1.43,0),se.rotation.z=ne*.07;const Ee=new V(new ci(.105,.42,5,7),c);Ee.position.y=-.23,se.add(Ee);const ze=new $e;ze.position.y=-.46,se.add(ze);const dt=new V(new ci(.085,.34,5,7),f);dt.position.y=-.2,ze.add(dt);const Le=new V(new mt(.105,9,7),l);return Le.position.y=-.43,ze.add(Le),e.add(se),{upper:se,elbow:ze}},S=T(-1),F=T(1),W=ne=>{const se=new $e;se.position.set(ne*.15,.68,0);const Ee=new V(new ci(.12,.42,5,7),g);Ee.position.y=-.23,se.add(Ee);const ze=new $e;ze.position.y=-.48,se.add(ze);const dt=new V(new ci(.095,.4,5,7),g);dt.position.y=-.22,ze.add(dt);const Le=new V(new ci(.13,.24,5,7),f);return Le.scale.z=1.25,Le.position.set(0,-.47,.075),ze.add(Le),e.add(se),se},ee=W(-1),ae=W(1),ce=new V(new ci(.42,.1,5,8),f);ce.scale.z=.72,ce.position.y=1.48,e.add(ce);const G=new V(new zn(.58,.92,.075),ws(t.id==="berserk"?2821132:1582894,.98));G.position.set(0,1.05,-.28),G.rotation.x=-.035,e.add(G);const Z=new $e;if(t.id==="berserk"||t.id==="dwarf"){const ne=new V(new ct(.035,.045,.72,7),f);ne.position.y=.36,Z.add(ne);const se=new V(new zn(.16,.34,.055),m);se.position.set(0,.88,0),se.rotation.z=t.id==="dwarf"?-.22:.22,Z.add(se)}else{const ne=new V(new ct(.028,.04,1.1,7),f);ne.position.y=.52,Z.add(ne);const se=new V(new gn(.075,.25,6),m);se.position.y=1.18,Z.add(se)}if(Z.position.set(.43,.32,.03),Z.rotation.z=-.12,e.add(Z),t.id==="viking"||t.id==="berserk"){const ne=new V(new ct(.3,.3,.1,16),f);ne.rotation.x=Math.PI/2,ne.position.set(0,1.12,-.37),e.add(ne);const se=new V(new mt(.065,8,6),m);se.position.set(0,1.12,-.43),e.add(se)}const k=new V(new ti(.62,24),new Ct({color:0,transparent:!0,opacity:.32}));return k.rotation.x=-Math.PI/2,k.position.y=.02,e.add(k),e.userData.anim={armL:S,armR:F,legL:ee,legR:ae,weapon:Z,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},ZA(e)}function QA({h:t,on:e,eventDone:n}){const i=Tt.useRef(null),r=Tt.useRef(null),s=Tt.useRef(null),o=Tt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Tt.useState(""),[c,f]=Tt.useState(!1),[h,m]=Tt.useState(!1),[g,y]=Tt.useState(!1),[E,_]=Tt.useState(!1),u=Tt.useRef({x:0,z:1}),v=Tt.useRef(!1),x=Tt.useRef(null);Tt.useEffect(()=>{const T=i.current;if(!T)return;const S=new kS;S.background=new St(9415072),S.fog=new mm(7901576,.0042);const F=new Mi(54,1,.1,280);F.position.set(0,8.5,17);const W=new XA({antialias:!0,powerPreference:"high-performance"});W.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),W.shadowMap.enabled=!0,W.shadowMap.type=J_,W.outputColorSpace=Bn,W.toneMapping=Q_,W.toneMappingExposure=1.16,T.appendChild(W.domElement);const ee=new rw(14151649,3361336,1.35);S.add(ee);const ae=new s1(16770232,3.15);ae.position.set(-42,58,34),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.left=-95,ae.shadow.camera.right=95,ae.shadow.camera.top=95,ae.shadow.camera.bottom=-95,ae.shadow.bias=-5e-4,S.add(ae);const ce=new s1(12178114,.95);ce.position.set(55,18,-60),S.add(ce);const G=(d,M)=>{const p=Math.sin(d*.075)*.7+Math.cos(M*.062)*.55+Math.sin((d-M)*.045)*.35,A=Math.exp(-(d*d/850+(M+2)*(M+2)/1050)),U=Math.exp(-(d*d/150+(M-12)*(M-12)/2200));return p*(1-A*.88)-U*.18},Z=d=>{const M=document.createElement("canvas");M.width=M.height=512;const p=M.getContext("2d"),A=N=>Math.abs(Math.sin(N*12.9898)*43758.5453)%1;if(d==="ground"){p.fillStyle="#4c6042",p.fillRect(0,0,512,512);for(let N=0;N<1800;N++){const Y=A(N*1.17)*512,te=A(N*2.31)*512,oe=10+A(N*3.71)*28,q=A(N*4.13);p.fillStyle=q>.72?`rgba(96,108,63,${.08+A(N)*.12})`:`rgba(30,36,25,${.05+A(N)*.12})`,p.beginPath(),p.arc(Y,te,oe,0,Math.PI*2),p.fill()}for(let N=0;N<650;N++){const Y=A(N*7.1)*512,te=A(N*8.2)*512;p.strokeStyle=`rgba(142,154,91,${.18+A(N*2)*.15})`,p.lineWidth=1+A(N*4)*1.5,p.beginPath(),p.moveTo(Y,te),p.lineTo(Y+(A(N*5)-.5)*5,te-3-A(N*6)*5),p.stroke()}}else if(d==="wood"){p.fillStyle="#5a3d29",p.fillRect(0,0,512,512);for(let N=0;N<512;N+=22)p.fillStyle=`rgba(25,15,9,${.18+A(N)*.13})`,p.fillRect(0,N,512,3),p.strokeStyle=`rgba(154,111,69,${.08+A(N*2)*.08})`,p.lineWidth=2,p.beginPath(),p.moveTo(0,N+7),p.bezierCurveTo(150,N+2,340,N+13,512,N+5),p.stroke();for(let N=0;N<65;N++){const Y=A(N*2.1)*512;p.fillStyle=`rgba(20,12,8,${.12+A(N*3)*.16})`,p.fillRect(Y,0,2+A(N*4)*3,512)}}else if(d==="roof"){p.fillStyle="#252522",p.fillRect(0,0,512,512);for(let N=-30;N<550;N+=25){p.fillStyle=`rgba(105,94,77,${.12+A(N)*.08})`,p.fillRect(0,N,512,2),p.strokeStyle="rgba(12,12,11,.48)",p.lineWidth=3;for(let Y=-40;Y<560;Y+=38)p.beginPath(),p.moveTo(Y,N),p.lineTo(Y-18,N+28),p.stroke()}for(let N=0;N<180;N++)p.fillStyle=`rgba(170,154,123,${.03+A(N)*.07})`,p.fillRect(A(N*2)*512,A(N*3)*512,2+A(N*4)*7,2)}else if(d==="bark"){p.fillStyle="#7b5a3f",p.fillRect(0,0,512,512);for(let N=0;N<76;N++){const Y=A(N*2.1)*512,te=2+A(N*3.7)*7;p.fillStyle=`rgba(${24+A(N)*24},${16+A(N*4)*18},${10+A(N*5)*14},${.18+A(N*6)*.22})`,p.fillRect(Y,0,te,512)}for(let N=0;N<80;N++){const Y=A(N*7.1)*512,te=A(N*8.2)*512;p.strokeStyle=`rgba(126,91,60,${.07+A(N*2)*.09})`,p.lineWidth=1+A(N*3)*2,p.beginPath(),p.moveTo(Y,te),p.lineTo(Y+(A(N*4)-.5)*12,te+18+A(N*5)*45),p.stroke()}}else if(d==="foliage"){p.fillStyle="#68865a",p.fillRect(0,0,512,512);for(let N=0;N<1900;N++){const Y=A(N*1.17)*512,te=A(N*2.31)*512,oe=A(N*3.7),q=oe>.72?112:oe>.36?92:74,pe=oe>.72?145:oe>.36?121:98,ge=oe>.72?76:oe>.36?60:48;p.fillStyle=`rgba(${q},${pe},${ge},${.16+A(N*4)*.28})`,p.beginPath(),p.arc(Y,te,1.5+A(N*5)*4.5,0,Math.PI*2),p.fill()}for(let N=0;N<260;N++){const Y=A(N*9.1)*512,te=A(N*10.2)*512;p.strokeStyle=`rgba(18,31,22,${.08+A(N*3)*.12})`,p.lineWidth=1,p.beginPath(),p.moveTo(Y,te),p.lineTo(Y+(A(N*2)-.5)*10,te+(A(N*4)-.5)*10),p.stroke()}}else{p.fillStyle="#514333",p.fillRect(0,0,512,512);for(let N=0;N<1300;N++){const Y=A(N*1.3)*512,te=A(N*2.7)*512;p.fillStyle=`rgba(${45+A(N*3)*38},${35+A(N*4)*28},${23+A(N*5)*20},${.08+A(N*6)*.18})`,p.fillRect(Y,te,2+A(N*7)*7,1+A(N*8)*4)}}const U=new pc(M);return U.wrapS=U.wrapT=Uo,U.colorSpace=Bn,U.anisotropy=4,U},k=Z("ground");k.repeat.set(5,6);const ne=Z("bark");ne.wrapS=ne.wrapT=Uo,ne.repeat.set(1.2,1.8);const se=Z("foliage");se.wrapS=se.wrapT=Uo,se.repeat.set(1.35,1.35);const Ee=new qn(190,190,62,62),ze=Ee.attributes.position;for(let d=0;d<ze.count;d++){const M=ze.getX(d),p=-ze.getY(d);ze.setZ(d,G(M,p))}Ee.rotateX(-Math.PI/2),Ee.computeVertexNormals();const dt=new V(Ee,new gc({map:k}));dt.receiveShadow=!0,S.add(dt);const Le=(d,M,p)=>(M&&(d.userData={id:M,label:p||M}),d.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),S.add(d),M&&Ce.push(d),d),he=(d,M=.9,p=0)=>new De({color:d,roughness:M,metalness:p}),H=(d,M,p,A,U=.9)=>new V(new zn(d,M,p),he(A,U)),me=(d,M,p,A=10,U=.9)=>new V(new ct(d,d,M,A),he(p,U)),Fe=(d,M,p)=>{const A=me(M,d,p,10,.96);return A.rotation.z=Math.PI/2,A},nt=(d,M,p)=>{const A=new $e,U=d*.62,N=.61,Y=new De({map:qe,color:p,roughness:.96,side:$t}),te=new V(new zn(U,.18,M),Y),oe=te.clone();return te.rotation.z=N,oe.rotation.z=-N,te.position.x=-d*.205,oe.position.x=d*.205,A.add(te,oe),A},Ce=[],xt=[],fn=[],z=[],Pt=[],at=.62,We=(d,M,p,A,U=0,N=.12)=>Pt.push({kind:"rect",x:d,z:M,w:p+N*2,d:A+N*2,rot:U}),O=(d,M,p,A=.12)=>Pt.push({kind:"circle",x:d,z:M,r:p+A}),Pe=(d,M,p,A,U,N=.12)=>Pt.push({kind:"segment",x1:d,z1:M,x2:p,z2:A,r:U+N}),le=(d,M,p)=>{if(p.kind==="circle")return Math.hypot(d-p.x,M-p.z)<p.r+at;if(p.kind==="rect"){const q=Math.cos(p.rot),pe=Math.sin(p.rot),ge=d-p.x,Be=M-p.z,be=q*ge-pe*Be,Qe=pe*ge+q*Be,ht=Math.max(-p.w/2,Math.min(p.w/2,be)),Lt=Math.max(-p.d/2,Math.min(p.d/2,Qe));return Math.hypot(be-ht,Qe-Lt)<at}const A=p.x2-p.x1,U=p.z2-p.z1,N=A*A+U*U,Y=N>0?Math.max(0,Math.min(1,((d-p.x1)*A+(M-p.z1)*U)/N)):0,te=p.x1+A*Y,oe=p.z1+U*Y;return Math.hypot(d-te,M-oe)<p.r+at},ue=(d,M)=>v.current?d<Ln-2.72||d>Ln+2.72||M<En-2.05||M>En+2.3:Pt.some(p=>le(d,M,p)),Je=(d,M,p)=>{if(v.current){const N=Math.max(Ln-2.55,Math.min(Ln+2.55,M)),Y=Math.max(En-1.92,Math.min(En+2.55,p));d.x=N,d.z=Y;return}const A=Math.max(-88,Math.min(88,M)),U=Math.max(-89,Math.min(89,p));if(!ue(A,U)){d.x=A,d.z=U;return}ue(A,d.z)||(d.x=A),ue(d.x,U)||(d.z=U)},it=he(3425343,1);for(let d=0;d<22;d++){const M=new $e,p=-105+d*10,A=8+$(d,7)*9,U=new V(new gn(A,18+$(d,8)*16,7),it);U.position.y=8,M.add(U),M.position.set(p,-1,-94+$(d,9)*11),Le(M)}const I=[];for(let d=0;d<=32;d++)I.push({z:-94+d*6,x:-57+Math.sin(d*.42)*4.2});const b=[],Q=[],fe=5.4;for(let d=0;d<I.length;d++){const M=I[d],p=I[Math.max(0,d-1)],A=I[Math.min(I.length-1,d+1)],U=A.x-p.x,N=A.z-p.z,Y=Math.max(.001,Math.hypot(U,N)),te=-N/Y,oe=U/Y,q=G(M.x,M.z)+.055;for(const pe of[-1,1]){const ge=fe*pe;b.push(M.x+te*ge,q+Math.sin(d*1.7+pe)*.035,M.z+oe*ge)}if(d<I.length-1){const pe=d*2;Q.push(pe,pe+1,pe+2,pe+1,pe+3,pe+2)}}const _e=new _n;_e.setAttribute("position",new At(b,3)),_e.setIndex(Q),_e.computeVertexNormals();const de=new V(_e,new De({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));de.receiveShadow=!0,S.add(de);const ke=[];for(let d=0;d<34;d++){const M=I[Math.min(I.length-1,Math.floor(d*.94))],p=.7+$(d,1500)*1.35,A=new V(new xm(p*.45,p,12),new Ct({color:10998996,transparent:!0,opacity:.12,side:$t}));A.rotation.x=-Math.PI/2,A.scale.y=.42,A.position.set(M.x+($(d,1501)-.5)*4.5,G(M.x,M.z)+.075,M.z+($(d,1502)-.5)*4),S.add(A),ke.push({mesh:A,phase:$(d,1503)*Math.PI*2})}for(let d=0;d<52;d++){const M=Math.min(I.length-1,Math.floor(d*.62)),p=I[M],A=I[Math.max(0,M-1)],U=I[Math.min(I.length-1,M+1)],N=U.x-A.x,Y=U.z-A.z,te=Math.max(.001,Math.hypot(N,Y)),oe=d%2===0?-1:1,q=.34+$(d,15)*.72,pe=fe+oe*(.25+$(d,16)*1.4),ge=new V(new un(q,1),he(6185562,1));ge.position.set(p.x+-Y/te*pe,G(p.x,p.z)+.18,p.z+N/te*pe),ge.scale.y=.5+$(d,17)*.35,Le(ge),O(ge.position.x,ge.position.z,q*.75,.03)}const xe=(d,M)=>{const p=d.map(([te,oe])=>new B(te,G(te,oe)+.035,oe)),A=[],U=[];for(let te=0;te<p.length;te++){const oe=p[Math.max(0,te-1)],q=p[Math.min(p.length-1,te+1)],pe=q.x-oe.x,ge=q.z-oe.z,Be=Math.max(.001,Math.hypot(pe,ge)),be=-ge/Be,Qe=pe/Be;if(A.push(p[te].x+be*M/2,p[te].y,p[te].z+Qe*M/2,p[te].x-be*M/2,p[te].y+.01,p[te].z-Qe*M/2),te<p.length-1){const ht=te*2;U.push(ht,ht+1,ht+2,ht+1,ht+3,ht+2)}}const N=new _n;N.setAttribute("position",new At(A,3)),N.setIndex(U),N.computeVertexNormals();const Y=new V(N,new De({map:Z("road"),roughness:1}));Y.receiveShadow=!0,S.add(Y),[-M*.22,M*.22].forEach(te=>{const oe=p.map((ge,Be)=>{const be=p[Math.max(0,Be-1)],Qe=p[Math.min(p.length-1,Be+1)],ht=Qe.x-be.x,Lt=Qe.z-be.z,tn=Math.max(.001,Math.hypot(ht,Lt));return new B(ge.x+-Lt/tn*te,ge.y+.045,ge.z+ht/tn*te)}),q=new Xa(new op(oe),Math.max(12,p.length*4),.055,5,!1),pe=new V(q,he(3352863,1));pe.scale.y=.12,S.add(pe)})};xe([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),xe([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),xe([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),xe([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),xe([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),xe([[4,14],[-3,22],[-7,31],[-8,42]],3.8),xe([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),xe([[4,14],[10,28],[18,41],[27,57]],3.8),xe([[5,31],[15,45],[27,57],[39,70]],3.7),xe([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),xe([[-39,-8],[-47,-12],[-53,-15]],3.4);const je=Z("wood");je.repeat.set(2,1);const qe=Z("roof");qe.repeat.set(2,2);const ye=(d,M,p,A,U,N,Y,te,oe)=>{const q=new $e;q.rotation.y=U,q.position.set(d,G(d,M),M),q.userData={id:Y,label:N};const pe=new De({map:je,color:te,roughness:.94}),ge=H(p+.7,.55,A+.7,5724755,1);ge.position.y=.28,q.add(ge);for(let Nt=0;Nt<7;Nt++){const Ut=.62+Nt*.47,cn=Fe(p-Nt%2*.2,.29,te);cn.material=pe,cn.position.set(0,Ut,A*.5-.03),q.add(cn);const kn=cn.clone();kn.position.z=-A*.5+.03,q.add(kn);const ai=Fe(A+.06,.29,te);ai.material=pe,ai.rotation.y=Math.PI/2,ai.position.set(-p*.5+.03,Ut,0),q.add(ai);const He=ai.clone();He.position.x=p*.5-.03,q.add(He)}for(const Nt of[-p*.5,p*.5])for(const Ut of[-A*.5,A*.5]){const cn=me(.34,3.75,3482649,8,1);cn.position.set(Nt,2.05,Ut),q.add(cn)}const Be=H(1.18,2.05,.18,2365458,1);Be.position.set(0,1.37,A*.5+.31),q.add(Be);for(const Nt of[-.67,.67]){const Ut=H(.15,2.28,.24,3811613,1);Ut.position.set(Nt,1.42,A*.5+.34),q.add(Ut)}const be=Fe(1.65,.11,3679770);be.position.set(0,2.53,A*.5+.34),q.add(be);const Qe=me(.055,.12,13015634,8,.55);Qe.rotation.z=Math.PI/2,Qe.position.set(.33,1.38,A*.5+.43),q.add(Qe);const ht=new De({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Nt of[-p*.27,p*.27]){const Ut=H(1.28,1.02,.13,3154457,1);Ut.position.set(Nt,2.02,A*.5+.29),q.add(Ut);const cn=H(.94,.7,.055,15251295,.45);cn.material=ht,cn.position.set(Nt,2.02,A*.5+.36),q.add(cn);const kn=H(.07,.78,.09,3154457,1);kn.position.set(Nt,2.02,A*.5+.4),q.add(kn);const ai=H(1.05,.07,.09,3154457,1);ai.position.set(Nt,2.02,A*.5+.4),q.add(ai)}const Lt=nt(p+1.55,A+1.35,oe);Lt.position.y=4.18,q.add(Lt);for(const Nt of[-1,1]){const Ut=Fe(A+1.48,.12,3154715);Ut.position.set(Nt*(p*.46),3.78,0),Ut.rotation.y=Math.PI/2,q.add(Ut)}const tn=Fe(A+1.45,.18,2760730);tn.rotation.y=Math.PI/2,tn.position.y=5.28,q.add(tn);const Ft=H(p*.34,.16,1.05,6439467,1);Ft.position.set(0,.64,A*.5+.66),q.add(Ft);for(const Nt of[-p*.16,p*.16]){const Ut=Fe(.85,.08,4796447);Ut.rotation.y=Math.PI/2,Ut.position.set(Nt,.83,A*.5+.95),q.add(Ut)}const Yt=me(.34,2,5722958,8,1);Yt.position.set(p*.25,5.05,-A*.1),q.add(Yt);const jt=H(.72,.14,.72,3157289,1);jt.position.set(p*.25,6.08,-A*.1),q.add(jt),Le(q,Y,N),Ce.push(q),We(d,M,p+.85,A+.85,U,.05)};ye(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ye(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ye(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ye(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ye(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ye(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new $e;Te.position.set(-10,G(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let d=0;d<7;d++){const M=.62+d*.47,p=Fe(9,.27,4401693);p.position.set(0,M,-2.85),Te.add(p);const A=Fe(6,.27,4401693);A.rotation.y=Math.PI/2,A.position.set(-4.35,M,0),Te.add(A)}for(const d of[-4.35,4.35]){const M=me(.34,4,2825493,9,1);M.position.set(d,2,-2.85),Te.add(M)}const st=nt(9.8,7,2433825);st.position.y=4.45,Te.add(st);const Ke=Fe(7.2,.18,2169366);Ke.rotation.y=Math.PI/2,Ke.position.y=5.42,Te.add(Ke);for(const d of[-3.7,3.7]){const M=Fe(4.7,.13,2825494);M.rotation.z=d<0?-.6:.6,M.position.set(d*.48,3.15,.1),Te.add(M)}const Ne=me(1.15,1.65,3420462,10,1);Ne.position.set(-2,.83,1.15),Te.add(Ne);const ut=me(.88,.35,2565925,10,1);ut.position.set(-2,1.83,1.15),Te.add(ut);const j=new V(new ti(.52,16),new De({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));j.rotation.y=Math.PI,j.position.set(-2,1.02,2.23),Te.add(j);const Ae=me(.27,.85,2697770,8,.45);Ae.position.set(1.15,.43,1.05),Te.add(Ae);const Re=H(1.45,.34,.58,2435114,.38);Re.position.set(1.15,1,1.05),Te.add(Re);const Ve=new V(new gn(.18,.72,8),he(2435114,.38,.05));Ve.rotation.z=-Math.PI/2,Ve.position.set(1.98,1,1.05),Te.add(Ve);for(let d=0;d<4;d++){const M=Fe(1.25,.045,11184548);M.rotation.z=-.35+d*.18,M.position.set(2.05+d*.18,1.12,1.34),Te.add(M)}const Me=H(1.15,.42,.62,3876893,1);Me.position.set(2.15,.72,-.8),Me.rotation.z=-.18,Te.add(Me);const ve=me(.07,.55,5980979,8,1);ve.rotation.z=Math.PI/2,ve.position.set(1.55,.84,-.8),Te.add(ve),Le(Te,"forge","Кузница"),Ce.push(Te),We(-10,-5,9.6,6.6,0,.05);const Ye=new Gi(16742962,3.4,14,2);Ye.position.set(-12,G(-12,-5)+2.2,-4),S.add(Ye);const lt=new V(new ti(8.5,32),new De({color:7035463,roughness:1}));lt.rotation.x=-Math.PI/2,lt.position.set(1,G(1,0)+.05,0),lt.receiveShadow=!0,S.add(lt);for(let d=0;d<18;d++){const M=d/18*Math.PI*2,p=new V(new un(.38,1),he(7039843,1));p.position.set(1+Math.cos(M)*8.8,G(1+Math.cos(M)*8.8,Math.sin(M)*8.8)+.22,Math.sin(M)*8.8),S.add(p)}const kt=(d,M)=>{const p=new $e,A=H(2.8,.22,1,6832937,1);A.position.y=1.05,p.add(A);for(const U of[-1.05,1.05]){const N=H(.16,1,.16,3877149,1);N.position.set(U,.5,-.32),p.add(N);const Y=N.clone();Y.position.z=.32,p.add(Y)}p.position.set(d,G(d,M),M),S.add(p)};kt(-4,2),kt(7,3);const yt=(d,M,p)=>{const A=new $e;A.position.set(d,G(d,M),M);for(let q=0;q<7;q++){const pe=q/7*Math.PI*2,ge=new V(new un(.32*p,1),he(6117970,1));ge.position.set(Math.cos(pe)*.7*p,.25*p,Math.sin(pe)*.7*p),A.add(ge)}const U=H(.2*p,.2*p,1.5*p,4861211,1),N=U.clone();U.rotation.y=.55,N.rotation.y=-.55,U.position.y=N.position.y=.38*p,A.add(U,N);const Y=new De({color:16744744,emissive:16731402,emissiveIntensity:4}),te=new V(new gn(.5*p,1.35*p,8),Y);te.position.y=1.02*p,A.add(te),S.add(A);const oe=new Gi(16747068,2.4*p,12*p,2);return oe.position.set(d,G(d,M)+2*p,M),S.add(oe),xt.push({light:oe,flame:te,phase:$(d,M)*8}),A};yt(1,0,1.15),yt(18,-15,.72);const ln=(d,M,p,A,U=1.25)=>{const N=new $e,Y=p-d,te=A-M,oe=Math.hypot(Y,te),q=Math.max(1,Math.floor(oe/1.55));for(let pe=0;pe<=q;pe++){const ge=pe/q,Be=d+Y*ge,be=M+te*ge,Qe=H(.18,U,.18,4796447,1);Qe.position.set(Be,G(Be,be)+U/2,be),N.add(Qe)}for(const pe of[-.28,.38]){const ge=H(.14,.14,oe,5978917,1);ge.rotation.y=Math.atan2(Y,te),ge.position.set((d+p)/2,G((d+p)/2,(M+A)/2)+U*pe,(M+A)/2),N.add(ge)}S.add(N),Pe(d,M,p,A,.12,.02)},Kn=(d,M,p,A,U,N,Y)=>{const te=new $e;te.position.set(d,G(d,M),M),te.rotation.y=U,te.userData={id:Y,label:N};const oe=H(p+.25,.35,A+.25,5591368,1);oe.position.y=.18,te.add(oe);const q=new V(new zn(p,2.5,A),new De({map:je,color:6439983,roughness:1}));q.position.y=1.45,te.add(q);const pe=new V(new zn(p+.6,.18,A+.65),new De({map:qe,color:2696996,roughness:1}));pe.rotation.z=.55,pe.position.set(-.16,3,0),te.add(pe);const ge=pe.clone();ge.rotation.z=-.55,ge.position.x=.16,te.add(ge);const Be=H(1.05,1.75,.12,2759700,1);Be.position.set(0,1.05,A/2+.07),te.add(Be),Le(te,Y,N),Ce.push(te),We(d,M,p+.55,A+.55,U,.04)},ea=(d,M,p=1)=>{const A=new $e;A.position.set(d,G(d,M),M);const U=new V(new ct(.65*p,.65*p,1.2*p,10),he(9073729,1));U.rotation.z=Math.PI/2,U.position.y=.62*p,A.add(U);for(let N=0;N<3;N++){const Y=new V(new zt(.66*p,.025*p,5,18),he(5851693,1));Y.rotation.y=Math.PI/2,Y.position.y=(.28+N*.34)*p,A.add(Y)}Le(A)},Oi=(d,M,p)=>{const A=new $e;A.position.set(d,G(d,M),M),A.rotation.y=p;const U=H(2.8,.28,1.45,6636331,1);U.position.y=1,A.add(U);for(const Y of[-1.15,1.15])for(const te of[-.55,.55]){const oe=H(.16,1.15,.16,4401950,1);oe.position.set(Y,.55,te),A.add(oe)}for(const Y of[-1.15,1.15]){const te=new V(new ct(.5,.5,.18,14),he(2696738,1));te.rotation.z=Math.PI/2,te.position.set(Y,.52,-.92),A.add(te)}const N=H(.16,.16,2.4,4796447,1);N.rotation.x=Math.PI/2,N.position.set(0,.72,-2),A.add(N),Le(A)},qs=(d,M,p=0)=>{const A=new $e;A.position.set(d,G(d,M),M),A.rotation.y=p;const U=H(2.2,.16,.5,7359021,1);U.position.y=.85,A.add(U);for(const N of[-.78,.78]){const Y=H(.12,.8,.12,4139549,1);Y.position.set(N,.4,0),A.add(Y)}Le(A)},ta=(d,M)=>{const p=new $e;p.position.set(d,G(d,M),M);for(let Y=0;Y<10;Y++){const te=Y/10*Math.PI*2,oe=H(.45,.38,.38,6710621,1);oe.position.set(Math.cos(te)*.95,.19,Math.sin(te)*.95),oe.rotation.y=te,p.add(oe)}const A=H(.16,2.2,.16,4861984,1),U=A.clone();A.position.set(-.9,1.2,0),U.position.set(.9,1.2,0),p.add(A,U);const N=H(2,.16,.16,3876891,1);N.position.y=2.25,p.add(N),Le(p)};Kn(-19,31,8,5,.08,"Амбар","barn"),Kn(17,34,7,5,-.2,"Сарай","shed"),Kn(27,13,6,4,.45,"Склад рыбака","fishshed"),ln(-25,27,-13,27),ln(-25,27,-25,38),ln(-25,38,-14,38),ln(12,29,25,29),ln(25,29,25,40),ln(25,40,12,40),ln(29,-1,39,-1),ln(39,-1,39,10),ln(39,10,30,10);for(const d of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])ea(d[0],d[1],d[2]);Oi(-17,24,.18),Oi(29,-5,-.55),qs(-20,23,.18),qs(25,31,-.2),ye(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ye(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ye(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ye(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),We(-31,8,7.8,5.8,.1,.04),We(-27,20,7.8,5.8,-.25,.04),We(31,18,7.8,5.8,.32,.04),We(20,24,7.8,5.8,-.12,.04);const Ys=(d,M,p)=>{const A=new $e;A.position.set(d,G(d,M),M),A.rotation.y=p;const U=H(3,.18,1.25,7357994,1);U.position.y=1.45,A.add(U);for(const Y of[-1.25,1.25])for(const te of[-.48,.48]){const oe=H(.13,1.45,.13,4270877,1);oe.position.set(Y,.72,te),A.add(oe)}const N=new V(new gn(1.65,2.5,4,1,!1,Math.PI/4),he(4798510,1));N.scale.z=.55,N.position.y=2.15,A.add(N),Le(A)};Ys(-5,-7,.12),Ys(8,-5,-.18),Ys(6,7,.5);for(const d of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])ta(d[0],d[1]);const $s=(d,M,p=1)=>{const A=new $e,U=G(d,M);for(let N=0;N<5;N++){const Y=new V(new mt((.28+$(N,d)*.18)*p,8,6),he(N%2?3494457:4284223,1));Y.position.set(($(N,2)-.5)*.7*p,.28*p,($(N,3)-.5)*.7*p),A.add(Y)}A.position.set(d,U,M),Le(A)};for(let d=0;d<48;d++){const M=$(d,501)*Math.PI*2,p=18+$(d,502)*39,A=Math.cos(M)*p,U=Math.sin(M)*p+4;Math.abs(A)<9&&Math.abs(U)<14||$s(A,U,.65+$(d,503)*.75)}for(let d=0;d<34;d++){const M=-84+$(d,610)*168,p=-82+$(d,611)*164;if(Math.hypot(M,p-2)<24)continue;const A=.25+$(d,612)*.55,U=new V(new un(A,1),he(5725013,1));U.scale.y=.55,U.position.set(M,G(M,p)+A*.28,p),U.rotation.set($(d,613),$(d,614),$(d,615)),Le(U),O(M,p,A*.8,.03)}ye(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Kn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),ln(-70,32,-60,32),ln(-70,32,-70,43),ln(-70,43,-61,43),ea(-68,8,.9),Oi(-62,2,-.25),ta(-58,4);const Ks=new $e;Ks.position.set(-63,G(-63,47),47);for(let d=0;d<6;d++){const M=H(10,.035,.12,4208682,1);M.position.set(0,.02,(d-2.5)*1.05),M.rotation.y=.06,Ks.add(M)}Le(Ks);const bi=(d,M)=>{const p=document.createElement("canvas");p.width=p.height=256;const A=p.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=M,A.shadowBlur=18,A.fillStyle=M,A.font="bold 150px serif",A.fillText(d,128,132),A.shadowBlur=4,A.globalAlpha=.55,A.font="bold 118px serif",A.fillText(d,128,132);const U=new pc(p);return U.colorSpace=Bn,U.anisotropy=4,U},Zn=(d,M,p,A,U,N=.72,Y=0)=>{const te="#"+U.toString(16).padStart(6,"0"),oe=new Ct({map:bi(A,te),transparent:!0,depthWrite:!1,side:$t}),q=new V(new qn(N,N),oe);return q.rotation.x=-Math.PI/2,q.rotation.z=Y,q.position.set(M,.065,p),d.add(q),q},hn=new $e,na=18,ia=55;hn.position.set(na,G(na,ia),ia),hn.userData={id:"runefield",label:"Поле Рун"};const ra=new De({color:5857629,roughness:.94,metalness:.04}),Iu=new De({color:3884096,roughness:1});new Ct({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:$t}),new Ct({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:$t}),new Ct({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:$t});const sa=new V(new ti(12.2,48),new De({color:2636332,roughness:1,transparent:!0,opacity:.92}));sa.rotation.x=-Math.PI/2,sa.position.y=.018,hn.add(sa);const oa=new V(new ct(2.15,2.55,.48,10),Iu);oa.position.y=.24,oa.scale.z=.82,hn.add(oa);const C=new V(new un(1.48,1),ra);C.scale.set(1,1.65,.72),C.position.y=1.38,C.rotation.y=.18,hn.add(C);const K=new V(new un(.78,1),ra);K.scale.set(.72,1.15,.55),K.position.set(0,2.72,.02),K.rotation.z=.06,hn.add(K);const ie=Zn(hn,0,0,"ᚠ",10481407,1.15,0);ie.position.y=2.55,ie.rotation.x=0;const re=new Gi(7793407,1.7,9,2);re.position.set(0,2,.8),hn.add(re);for(const[d,M]of[[3,.075],[7.1,.065],[10.1,.045]]){const p=new V(new zt(d,M,8,96),new Ct({color:15320941,transparent:!0,opacity:d<8?.82:.58,depthWrite:!1}));p.rotation.x=Math.PI/2,p.position.y=.055,hn.add(p)}const J=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let d=0;d<16;d++){const M=d/16*Math.PI*2;Zn(hn,Math.cos(M)*8.55,Math.sin(M)*8.55,J[d],d%3===0?15055195:d%3===1?7857653:12093423,.62,M+.18)}for(let d=0;d<12;d++){const M=d/12*Math.PI*2+.13;Zn(hn,Math.cos(M)*5.45,Math.sin(M)*5.45,J[(d+5)%J.length],d%2?7659506:12684269,.38,M)}for(let d=0;d<10;d++){const M=d/10*Math.PI*2+.16,p=9.15+(.5-$(d,1202))*1,A=2.4+$(d,1203)*2,U=.72+$(d,1204)*.48,N=new V(new un(.82+$(d,1205)*.22,1),ra);N.scale.set(U,A,.72+$(d,1206)*.28),N.position.set(Math.cos(M)*p,N.scale.y*.58,Math.sin(M)*p),N.rotation.set(($(d,1207)-.5)*.22,M+($(d,1208)-.5)*.3,($(d,1209)-.5)*.18),hn.add(N);const Y=J[d%J.length],te=bi(Y,d%3===0?"#8eeeff":d%3===1?"#c08cff":"#ffd86b"),oe=new V(new qn(.62,.92),new Ct({map:te,transparent:!0,depthWrite:!1,side:$t}));oe.position.set(N.position.x+Math.cos(M)*.68,N.position.y*.76,N.position.z+Math.sin(M)*.68),oe.rotation.y=-M+Math.PI*.5,hn.add(oe);const q=new Gi(d%3===1?11628031:d%3===0?6479359:15055195,.35,3.6,2);q.position.set(N.position.x,N.position.y*.72,N.position.z),hn.add(q)}for(let d=0;d<18;d++){const M=$(d,1220)*Math.PI*2,p=6.8+$(d,1221)*4.3;Zs(hn,Math.cos(M)*p,.22,Math.sin(M)*p,.28+$(d,1222)*.35,d%2?5003088:5857882,1223+d)}for(let d=0;d<10;d++){const M=$(d,1230)*Math.PI*2,p=2.6+$(d,1231)*6.6,A=new V(new ct(.06,.09,.035,7),new De({color:10191179,metalness:.6,roughness:.45}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(M)*p,.09,Math.sin(M)*p),hn.add(A)}Le(hn,"runefield","Поле Рун"),Ce.push(hn),O(na,ia,1.8,.08);const Se=(d,M,p,A)=>{const U=new $e,N=p-d,Y=A-M,te=Math.hypot(N,Y),oe=Math.floor(te/1.7);for(let pe=0;pe<=oe;pe++){const ge=pe/oe,Be=d+N*ge,be=M+Y*ge,Qe=new V(new gn(.24,.24+2.8+$(pe,d)*.5,6),he(3942940,1));Qe.position.set(Be,G(Be,be)+1.45,be),U.add(Qe)}const q=H(.3,.35,te,2957593,1);q.rotation.y=Math.atan2(N,Y),q.position.set((d+p)/2,G((d+p)/2,(M+A)/2)+1.25,(M+A)/2),U.add(q),S.add(U),Pe(d,M,p,A,.34,.08)};Se(-30,-31,-8,-31),Se(8,-31,30,-31),Se(-30,-31,-30,-13),Se(30,-31,30,16);const Ie=new $e;Ie.userData={id:"gate",label:"Ворота Мидгарда"};for(const d of[-4.2,4.2]){const M=H(.8,6,.8,3482906,1);M.position.set(d,3,-31),Ie.add(M)}const Xe=H(10,.8,1,2957336,1);Xe.position.set(0,6,-31),Ie.add(Xe);for(let d=-3;d<=3;d++){const M=H(1,4.2,.22,5978660,1);M.position.set(d*1.15,2,-30.7),Ie.add(M)}Le(Ie,"gate","Ворота Мидгарда"),Ce.push(Ie),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const Ue=new $e;Ue.userData={id:"mimir",label:"Колодец Мимира"},Ue.position.set(18,G(18,15),15);for(let d=0;d<14;d++){const M=d/14*Math.PI*2,p=H(.7,.48,.5,6711907,1);p.position.set(Math.cos(M)*1.45,.24,Math.sin(M)*1.45),p.rotation.y=M+Math.PI/2,Ue.add(p)}const rt=new V(new ti(1.05,28),new De({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));rt.rotation.x=-Math.PI/2,rt.position.y=.5,Ue.add(rt);for(const d of[-1.35,1.35]){const M=H(.22,3,.22,4861984,1);M.position.set(d,1.55,0),Ue.add(M)}const ot=H(3.1,.25,.25,3679513,1);ot.position.y=2.95,Ue.add(ot);const et=H(.55,.5,.55,5913383,1);et.position.set(0,1.65,0),Ue.add(et);const vt=new V(new zt(1.8,.06,8,40),new De({color:7792028,emissive:2653256,emissiveIntensity:3}));vt.rotation.x=Math.PI/2,vt.position.y=.53,Ue.add(vt),Le(Ue,"mimir","Колодец Мимира"),Ce.push(Ue),O(18,15,1.8,.08);const Dt=new Gi(7530656,1.8,10,2);Dt.position.set(18,G(18,15)+1.4,15),S.add(Dt);const ft=new $e;ft.userData={id:"norns",label:"Прядильня норн"},ft.position.set(-52,G(-52,38),38);const Wt=he(4927522,1),Ot=he(2826523,1),tt=H(5.7,.28,.28,5847592,1);tt.position.set(0,3.8,0),ft.add(tt);const qt=H(5,.25,.32,3877151,1);qt.position.set(0,.65,.15),ft.add(qt);for(const d of[-2.45,2.45]){const M=H(.28,3.55,.3,5321763,1);M.position.set(d,2.15,0),M.rotation.z=d>0?.08:-.08,ft.add(M)}const Et=new V(new zt(2.05,.18,8,32),Wt);Et.rotation.y=Math.PI/2,Et.position.set(0,2.25,-.8),ft.add(Et);const Fn=new V(new ct(.28,.32,.38,10),Ot);Fn.rotation.z=Math.PI/2,Fn.position.set(0,2.25,-.8),ft.add(Fn);for(let d=0;d<10;d++){const M=d/10*Math.PI*2,p=H(.08,.08,1.85,5913384,1);p.position.set(Math.cos(M)*.92,2.25+Math.sin(M)*.92,-.8),p.rotation.z=-M,ft.add(p)}const Ir=["URD","VERDANDI","SKULD"],Jn=[8640767,15198177,14908296];for(let d=0;d<3;d++){const M=(d-1)*2,p=new V(new un(.78,1),new De({color:4541257,roughness:.92,metalness:.05}));p.scale.set(.9,1.18+$(d,1290)*.2,.72),p.position.set(M,1.35,.18),p.rotation.set(0,(d-1)*.16,0),ft.add(p);const A=bi(d===0?"ᚢ":d===1?"ᚹ":"ᛋ",d===0?"#8fe6ff":d===1?"#f1f1ec":"#ef8d9a"),U=new V(new qn(.48,.62),new Ct({map:A,transparent:!0,depthWrite:!1,side:$t}));U.position.set(M,1.42,.86),U.rotation.y=Math.PI,ft.add(U);const N=document.createElement("canvas");N.width=320,N.height=96;const Y=N.getContext("2d");Y.clearRect(0,0,320,96),Y.textAlign="center",Y.textBaseline="middle",Y.font="bold 34px serif",Y.fillStyle=d===0?"#9fe9ff":d===1?"#f4f4ef":"#ef91a0",Y.shadowColor=Y.fillStyle,Y.shadowBlur=12,Y.fillText(Ir[d],160,48);const te=new pc(N);te.colorSpace=Bn;const oe=new V(new qn(1.55,.46),new Ct({map:te,transparent:!0,depthWrite:!1,side:$t}));oe.position.set(M,.55,.86),oe.rotation.y=Math.PI,ft.add(oe);const q=new Gi(Jn[d],.45,4.5,2);q.position.set(M,1.55,1),ft.add(q)}const Dr=[15123551,15263973,14245748];for(let d=0;d<3;d++){const M=[];for(let p=0;p<=18;p++){const A=p/18,U=1.9+A*4.6,N=(d-1)*2+Math.sin(A*Math.PI*2+d*1.7)*(.45+.5*A),Y=.35+Math.cos(A*Math.PI*2+d)*.45;M.push(new B(N,U,Y))}ft.add(new e1(new _n().setFromPoints(M),new sp({color:Dr[d],transparent:!0,opacity:.9})))}for(let d=0;d<3;d++){const M=new V(new zt(1.15+d*.18,.045,6,32),new Ct({color:Dr[d],transparent:!0,opacity:.75,depthWrite:!1}));M.position.set((d-1)*.38,6.15,.15),M.rotation.set(.4,d*.65,.2),ft.add(M)}const Xt=new V(new zt(4.6,.065,8,72),new Ct({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));Xt.rotation.x=Math.PI/2,Xt.position.y=.05,ft.add(Xt);for(let d=0;d<18;d++){const M=$(d,1300)*Math.PI*2,p=2.5+$(d,1301)*3.1,A=new V(new ct(.12,.12,.16,9),new De({color:[10184008,7174032,9261927,7828045][d%4],roughness:.8}));A.rotation.x=Math.PI/2,A.position.set(Math.cos(M)*p,.12,Math.sin(M)*p),ft.add(A)}for(let d=0;d<9;d++)Zn(ft,($(d,1315)-.5)*7.5,($(d,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][d%5],d%2?9428976:14134881,.34,$(d,1317)*Math.PI);Le(ft,"norns","Прядильня норн"),Ce.push(ft),O(-52,38,3,.1);const xn=new $e;xn.userData={id:"rune",label:"Древний камень Феху"},xn.position.set(50,G(50,60),60);const Qn=new V(new un(1.45,1),he(5002063,1));Qn.position.y=1.2,xn.add(Qn);const yn=new V(new zt(1.05,.07,8,30),new De({color:16766826,emissive:10052371,emissiveIntensity:3}));yn.rotation.x=Math.PI/2,yn.position.y=1.2,xn.add(yn),Le(xn,"rune","Древний камень Феху"),Ce.push(xn),O(50,60,1.7,.1);const Mn=new $e;Mn.userData={id:"port",label:"Мост к причалу"};for(let d=-5;d<=5;d++){const M=H(3.6,.28,.82,6307882,1);M.position.set(-53,G(-53,d*1)+.5,d),Mn.add(M)}Le(Mn,"port","Мост к причалу"),Ce.push(Mn);const er=new $e;er.position.set(-45,G(-45,-48),-48);for(let d=0;d<7;d++){const M=H(2.8,.24,.72,7030573,1);M.position.set(0,.3,d*.85),er.add(M)}for(const d of[-1.2,1.2])for(let M=0;M<3;M++){const p=H(.22,1.5,.22,4139292,1);p.position.set(d,-.2,M*2.5),er.add(p)}const tr=H(2.2,.55,4.8,4926493,1);tr.position.set(3,-.15,2.5),er.add(tr),Le(er,"port","Речной причал"),Ce.push(er);const Rx=(d,M)=>{const p=new V(new ct(.5,.5,1,12),he(6636332,1));p.position.set(d,G(d,M)+.5,M),S.add(p);for(const A of[.25,.76]){const U=new V(new zt(.51,.045,6,18),he(3156004,.7,.1));U.rotation.x=Math.PI/2,U.position.set(d,G(d,M)+A,M),S.add(U)}},Px=(d,M)=>{const p=H(1,.75,1,7359022,1);p.position.set(d,G(d,M)+.38,M),S.add(p);const A=H(.08,.82,1.05,3679770,1);A.position.set(d,G(d,M)+.38,M),S.add(A),We(d,M,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([d,M])=>Rx(d,M)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([d,M])=>Px(d,M));const Lx=(d,M,p)=>{const A=new $e,U=G(d,M),N=new De({map:ne,color:16777215,roughness:.98}),Y=new V(new ct(.18*p,.38*p,5.2*p,9),N);Y.position.y=2.6*p,Y.rotation.z=($(d,M)-.5)*.08,Y.scale.x=1.08+$(d,M+4)*.22,A.add(Y);for(let oe=0;oe<9;oe++){const q=(1.15+oe*.47)*p,pe=oe%2?1:-1,ge=(.9+oe*.16)*p,Be=new V(new ct(.035*p,.095*p,ge,7),N);Be.position.set(pe*(.28+oe*.035)*p,q,($(oe,M)-.5)*.38*p),Be.rotation.z=pe*(.62-$(oe,d)*.18),Be.rotation.y=$(oe+21,M)*Math.PI*2,A.add(Be)}const te=[2904370,3893312,4946505];for(let oe=0;oe<12;oe++){const q=Math.max(.48,1.42-oe*.075)*p,pe=new V(new mt(q,8,6),new De({map:se,color:te[oe%3],roughness:.99}));pe.scale.set(1+$(oe,d)*.25,.55+$(oe,M)*.16,.82+$(oe*2,d)*.22),pe.position.set(($(oe*4,d)-.5)*.58*p,(1.55+oe*.37)*p,($(oe*5,M)-.5)*.55*p),A.add(pe)}for(let oe=0;oe<3;oe++){const q=new V(new mt(.38*p,7,5),new De({color:oe%2?3231030:4021565,roughness:1}));q.scale.set(1.5,.28,.85),q.position.set((oe-1)*.45*p,.55*p,($(oe,88)-.5)*.5*p),A.add(q)}A.position.set(d,U,M),Le(A),p>=1.15&&O(d,M,.46*p,.04)},wl=(d,M,p,A=!1)=>{const U=new $e,N=G(d,M),Y=new De({map:ne,color:16777215,roughness:1}),te=new V(new ct(.42*p,.72*p,6.4*p,11),Y);te.position.y=3.2*p,te.rotation.z=($(d,M)-.5)*.06,te.scale.x=1.08,U.add(te);for(let q=0;q<(A?9:7);q++){const pe=q/(A?9:7)*Math.PI*2+$(q,d)*.18,ge=(1+$(q,M)*1.6)*p,Be=new V(new ct(.11*p,.3*p,ge,7),Y);Be.position.set(Math.cos(pe)*ge*.42,.28*p,Math.sin(pe)*ge*.42),Be.rotation.z=Math.cos(pe)*.72,Be.rotation.x=-Math.sin(pe)*.72,Be.rotation.y=-pe,U.add(Be)}const oe=A?10:8;for(let q=0;q<oe;q++){const pe=q/oe*Math.PI*2+$(q+11,d)*.22,ge=(2+$(q+22,M)*2.2)*p,Be=new V(new ct(.07*p,.19*p,ge,8),Y);Be.position.set(Math.cos(pe)*ge*.34,(3.25+$(q+33,d)*1.9)*p,Math.sin(pe)*ge*.34),Be.rotation.z=Math.cos(pe)*.76,Be.rotation.x=Math.sin(pe)*.76,Be.rotation.y=-pe,U.add(Be);for(let be=0;be<4;be++){const Qe=new V(new mt((.46+$(be+q,90)*.25)*p,8,6),new De({map:se,color:[3235641,4355400,5670483][(q+be)%3],roughness:1}));Qe.scale.y=.62,Qe.position.set(Math.cos(pe)*ge*(.52+.09*be)+($(be,q)-.5)*.55*p,(3.9+$(q,be)*1.45+.25*be)*p,Math.sin(pe)*ge*(.52+.09*be)+($(be+4,q)-.5)*.55*p),U.add(Qe)}}if(A){const q=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let pe=0;pe<q.length;pe++){const ge=-.9+pe*.46,Be=new V(new qn(.48*p,.62*p),new Ct({map:bi(q[pe],pe%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:$t}));Be.position.set(Math.sin(ge)*.56*p,(1.5+pe*.68)*p,Math.cos(ge)*.6*p),Be.rotation.y=ge,U.add(Be)}}U.position.set(d,N,M),Le(U),p>=1.2&&O(d,M,.78*p,.05)},Ix=(d,M,p,A)=>{const U=new $e,N=new De({color:7291688,roughness:.96}),Y=new De({color:9132599,roughness:.96}),te=new De({color:3155230,roughness:1}),oe=new De({color:12168600,roughness:.9}),q=new De({color:1512207,roughness:.25}),pe=new V(new mt(.68,14,10),N);pe.scale.set(1.35,.78,.72),pe.position.set(0,.98*p,0),pe.scale.multiplyScalar(p),U.add(pe);const ge=new V(new mt(.42,12,9),Y);ge.scale.set(1,.9,.86),ge.position.set(.49*p,1.04*p,0),U.add(ge);const Be=new V(new ct(.2*p,.34*p,.98*p,10),N);Be.position.set(.5*p,1.46*p,0),Be.rotation.z=-.3,U.add(Be);const be=new V(new mt(.34*p,12,9),Y);be.scale.set(1.18,.92,.78),be.position.set(.86*p,1.82*p,0),U.add(be);const Qe=new V(new mt(.17*p,10,7),Y);Qe.scale.set(1.15,.72,.72),Qe.position.set(1.16*p,1.72*p,0),U.add(Qe);const ht=new V(new mt(.075*p,8,6),te);ht.scale.set(1,.72,.85),ht.position.set(1.3*p,1.72*p,0),U.add(ht);for(const Ft of[-1,1]){const Yt=new V(new gn(.095*p,.3*p,7),Y);Yt.position.set(.77*p,2.1*p,Ft*.2*p),Yt.rotation.z=-.28,Yt.rotation.x=Ft*.18,U.add(Yt)}for(const Ft of[-1,1]){const Yt=new V(new mt(.035*p,8,6),q);Yt.position.set(1.05*p,1.91*p,Ft*.235*p),U.add(Yt);const jt=new V(new mt(.009*p,6,4),new Ct({color:16777215}));jt.position.set(1.075*p,1.925*p,Ft*.257*p),U.add(jt)}const Lt=[];for(const Ft of[-1,1])for(const Yt of[-1,1]){const jt=new $e;jt.position.set(Yt*.43*p,.76*p,Ft*.34*p);const Nt=new V(new ct(.085*p,.11*p,.43*p,7),N);Nt.position.y=-.2*p,jt.add(Nt);const Ut=new $e;Ut.position.y=-.4*p;const cn=new V(new ct(.055*p,.075*p,.43*p,7),te);cn.position.y=-.2*p,Ut.add(cn);const kn=new V(new mt(.075*p,7,5),te);kn.scale.set(1.15,.55,1.25),kn.position.y=-.43*p,Ut.add(kn),jt.add(Ut),U.add(jt),Lt.push(jt,Ut)}const tn=new V(new mt(.16*p,9,7),Y);tn.scale.set(.75,1.25,.72),tn.position.set(-.9*p,1.18*p,0),U.add(tn);for(const Ft of[-1,1]){const Yt=new V(new ct(.04*p,.06*p,.68*p,7),oe);Yt.position.set(.69*p,2.25*p,Ft*.14*p),Yt.rotation.z=Ft*.22,U.add(Yt);for(let jt=0;jt<3;jt++){const Nt=new V(new ct(.02*p,.038*p,.34*p,6),oe);Nt.position.set((.56+.11*jt)*p,(2.48+.15*jt)*p,Ft*(.14+.045*jt)*p),Nt.rotation.z=Ft*(.55-.08*jt),U.add(Nt)}}U.scale.setScalar(1.1),U.position.set(d,G(d,M),M),U.userData={phase:A,legJoints:Lt},Le(U),z.push({g:U,x:d,z:M,r:4+$(A,41)*3,speed:1.25+$(A,42)*.8,phase:A,kind:"deer"})},Dx=(d,M)=>{const p=new $e,A=he(6965552,1),U=he(3089436,1),N=new V(new mt(.22,8,6),A);N.scale.set(1.35,.9,.9),N.position.y=.72,p.add(N);const Y=new V(new mt(.17,8,6),A);Y.position.set(.22,.86,0),p.add(Y);for(const q of[-1,1]){const pe=new V(new gn(.06,.18,6),A);pe.position.set(.17,.99,q*.09),p.add(pe)}const te=new V(new zt(.24,.075,7,14,Math.PI*1.65),A);te.rotation.y=Math.PI/2,te.position.set(-.22,.91,0),p.add(te);const oe=new V(new mt(.025,6,4),U);oe.position.set(.35,.9,-.12),p.add(oe),p.position.set(d,G(d,M),M),Le(p,"ratatosk","Белка Рататоск"),Ce.push(p),O(d,M,.28,.02),z.push({g:p,x:d,z:M,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Ci=-5,Ri=75,Du=new $e;Du.userData={id:"ashgrove",label:"Роща Ясеня"};const Nu=new V(new ti(10.5,40),new De({color:2504747,roughness:1,transparent:!0,opacity:.82}));Nu.rotation.x=-Math.PI/2,Nu.position.set(Ci,G(Ci,Ri)+.02,Ri),S.add(Nu);const Nx=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[d,M,p,A]of Nx)wl(Ci+d,Ri+M,p,A);const Uu=new V(new zt(6.4,.07,8,64),new De({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Uu.rotation.x=Math.PI/2,Uu.position.set(Ci,G(Ci,Ri)+.05,Ri),S.add(Uu);const Fu=new V(new un(1.05,1),he(5593941,1));Fu.scale.set(1.3,.7,1.05),Fu.position.set(Ci,G(Ci,Ri)+.65,Ri),S.add(Fu),Zn(Du,0,0,"ᚱ",9430692,1.25,0);for(let d=0;d<26;d++){const M=$(d,1310)*Math.PI*2,p=2.5+$(d,1311)*7.2,A=Ci+Math.cos(M)*p,U=Ri+Math.sin(M)*p,N=new V(new ct(.025,.045,.22+$(d,1312)*.28,6),he(12039579,1));N.position.set(A,G(A,U)+.12,U),S.add(N);const Y=new V(new mt(.13+$(d,1313)*.08,8,5),new De({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));Y.scale.y=.48,Y.position.set(A,G(A,U)+.34,U),S.add(Y)}for(let d=0;d<16;d++){const M=$(d,1320)*Math.PI*2,p=2+$(d,1321)*7.5,A=Ci+Math.cos(M)*p,U=Ri+Math.sin(M)*p,N=new V(new ct(.07,.07,.025,10),he(9270341,.5,.55));N.rotation.x=Math.PI/2,N.position.set(A,G(A,U)+.05,U),S.add(N)}Ce.push(Du),O(Ci,Ri,1,.08);const Sn=62,wn=78,El=new $e;El.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const ku=new V(new ti(11.5,44),new De({color:2112299,roughness:1,transparent:!0,opacity:.86}));ku.rotation.x=-Math.PI/2,ku.position.set(Sn,G(Sn,wn)+.025,wn),S.add(ku);const Sm=new De({map:ne,color:16777215,roughness:1}),Ou=new V(new ct(1.35,2.1,10.5,13),Sm);Ou.position.set(Sn,G(Sn,wn)+5.25,wn),Ou.rotation.z=-.05,S.add(Ou);for(let d=0;d<8;d++){const M=d/8*Math.PI*2+.2,p=5+$(d,1401)*4,A=new V(new ct(.25,.58,p,9),Sm);A.position.set(Sn+Math.cos(M)*p*.36,G(Sn,wn)+6.8+$(d,1402)*2.2,wn+Math.sin(M)*p*.36),A.rotation.z=Math.cos(M)*.8,A.rotation.x=Math.sin(M)*.8,A.rotation.y=-M,S.add(A);for(let U=0;U<4;U++){const N=new V(new mt(1+$(U+d,1403)*.55,9,6),new De({map:se,color:[2312753,2972729,3697474][(d+U)%3],roughness:1}));N.scale.y=.65,N.position.set(Sn+Math.cos(M)*p*(.48+.09*U)+($(U,d)-.5)*1.1,G(Sn,wn)+8+$(d,U)*3+U*.45,wn+Math.sin(M)*p*(.48+.09*U)+($(U+5,d)-.5)*1.1),S.add(N)}}for(let d=0;d<9;d++){const M=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][d],p=bi(M,d%2?"#63d9ef":"#f0c65d"),A=new V(new qn(.7,.9),new Ct({map:p,transparent:!0,depthWrite:!1,side:$t}));A.position.set(Sn+Math.sin(d*.63)*1.42,G(Sn,wn)+1+d*.78,wn+Math.cos(d*.63)*1.42),A.rotation.y=Math.PI*.5-d*.16,S.add(A)}const zu=new V(new un(1.35,1),he(5199954,1));zu.scale.set(1.45,.7,1.15),zu.position.set(Sn,G(Sn,wn)+.75,wn+1.6),S.add(zu),yt(Sn,wn+2.1,.72);const Bu=new V(new zt(6.7,.06,8,64),new De({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Bu.rotation.x=Math.PI/2,Bu.position.set(Sn,G(Sn,wn)+.055,wn),S.add(Bu);for(let d=0;d<22;d++){const M=$(d,1410)*Math.PI*2,p=1.8+$(d,1411)*8.2,A=Sn+Math.cos(M)*p,U=wn+Math.sin(M)*p;Zn(El,A-Sn,U-wn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][d%6],d%2?6804447:14726490,.35,$(d,1412)*Math.PI)}for(let d=0;d<18;d++){const M=["ᚱ","ᚨ","ᛟ","ᚦ"][d%4],p=bi(M,d%2?"#63d9ef":"#e4bd65"),A=new V(new qn(.34,.44),new Ct({map:p,transparent:!0,depthWrite:!1,side:$t}));A.position.set(Sn+($(d,1420)-.5)*12,1.4+$(d,1421)*7,wn+($(d,1422)-.5)*12),A.userData.floatPhase=$(d,1423)*6,S.add(A)}Le(El,"hoddmimir","Лес Ходдмимира"),Ce.push(El),O(Sn,wn,1.2,.08);const aa=43,la=32;for(let d=0;d<4;d++)Ix(aa+(d-1.5)*2.6,la+(d%2?2.6:-2.6),1.12+$(d,1440)*.16,10+d);const wm=new V(new un(.72,1),he(5725526,1));wm.position.set(aa,G(aa,la)+.5,la),S.add(wm);const Hu=new V(new zt(5.8,.045,7,48),new De({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Hu.rotation.x=Math.PI/2,Hu.position.set(aa,G(aa,la)+.035,la),S.add(Hu),Dx(Ci+5,Ri+1),((d,M)=>{const p=new $e;p.position.set(d,G(d,M),M),p.userData={id:"forestCache",label:"Забытый тайник"};const A=new De({map:ne,color:6968381,roughness:1}),U=new De({color:2760987,roughness:1}),N=new V(new ct(2,2.65,4.9,11),A);N.position.y=2.45,N.rotation.z=-.035,p.add(N);for(let be=0;be<7;be++){const Qe=1.3+$(be,1250)*2.7,ht=new V(new gn(.32+$(be,1251)*.3,Qe,6),A),Lt=$(be,1252)*Math.PI*2,tn=.55+$(be,1253)*1.35;ht.position.set(Math.cos(Lt)*tn,4.75+Qe*.42,Math.sin(Lt)*tn),ht.rotation.z=($(be,1254)-.5)*.55,ht.rotation.x=($(be,1255)-.5)*.55,p.add(ht)}const Y=new V(new mt(1.18,16,10),U);Y.scale.set(1,1.18,.46),Y.position.set(0,2,2.08),p.add(Y);const te=new V(new zt(1.05,.16,8,28),new De({color:4930349,roughness:1}));te.rotation.x=Math.PI/2,te.position.set(0,2,2.12),te.scale.y=1.15,p.add(te);const oe=new sp({color:14211280,transparent:!0,opacity:.45});for(let be=0;be<6;be++){const Qe=[new B(-.95+be*.38,1.15+be%3*.55,2.15),new B((be-2.5)*.2,2+be%2*.3,2.48),new B(-.8+be*.32,2.95+be%3*.25,2.12)];p.add(new e1(new _n().setFromPoints(Qe),oe))}const q=new V(new mt(.46,10,8),new De({color:5978662,roughness:1}));q.scale.set(.9,1.15,.62),q.position.set(.05,1.45,2.34),p.add(q);const pe=new V(new mt(.07,7,5),new De({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));pe.position.set(.05,1.72,2.77),p.add(pe);for(let be=0;be<5;be++){const Qe=new V(new un(.11,0),new De({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Qe.position.set(-.38+be*.19,1.02+be%2*.08,2.5),p.add(Qe)}const ge=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let be=0;be<6;be++){const Qe=-1.05+be*.42,ht=bi(ge[be],be%2?"#e7bd61":"#7ce5ef"),Lt=new V(new qn(.45,.62),new Ct({map:ht,transparent:!0,depthWrite:!1,side:$t}));Lt.position.set(Math.sin(Qe)*1.55,1.2+be*.42,1.93+Math.cos(Qe)*.22),Lt.rotation.y=Math.PI,p.add(Lt)}const Be=new V(new zt(4.15,.06,8,64),new Ct({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Be.rotation.x=Math.PI/2,Be.position.y=.05,p.add(Be);for(let be=0;be<10;be++){const Qe=be/10*Math.PI*2;Zn(p,Math.cos(Qe)*3.65,Math.sin(Qe)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][be],14859617,.38,Qe+.2)}for(let be=0;be<12;be++){const Qe=$(be,1270)*Math.PI*2,ht=1.8+$(be,1271)*3.3,Lt=new V(new ct(.08,.08,.025,9),new De({color:10190147,metalness:.55,roughness:.45}));Lt.rotation.x=Math.PI/2,Lt.position.set(Math.cos(Qe)*ht,.09,Math.sin(Qe)*ht),p.add(Lt)}for(let be=0;be<4;be++){const Qe=H(.08,.08,.75,10393476,1);Qe.position.set(($(be,1280)-.5)*5,.12,($(be,1281)-.5)*5),Qe.rotation.y=$(be,1282)*Math.PI,p.add(Qe)}Le(p,"forestCache","Забытый тайник"),Ce.push(p),O(d,M,1.75,.08)})(-72,48);const Ux=(d,M,p,A,U)=>{const N=d.distanceTo(M),Y=new V(new zn(p,A,N),U);return Y.position.copy(d).add(M).multiplyScalar(.5),Y.lookAt(M),Y};function Zs(d,M,p,A,U,N,Y){const te=new V(new un(U,1),he(N,1));return te.scale.set(.72+$(Y,1)*.62,.55+$(Y,2)*.85,.68+$(Y,3)*.55),te.rotation.set($(Y,4)*1.2,$(Y,5)*Math.PI,$(Y,6)*1.1),te.position.set(M,p,A),d.add(te),te}const Fx=(d,M)=>{const p=new $e;p.position.set(d,G(d,M),M),p.userData={id:"fallenAsh",label:"Поверженный ясень"};const A=new V(new zt(7.8,.07,8,64),new De({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));A.rotation.x=Math.PI/2,A.position.y=.05,p.add(A);const U=new De({map:ne,color:16777215,roughness:1}),N=new V(new ct(1.45,2.15,4.8,10),U);N.position.set(0,2.4,.2),N.rotation.z=-.04,p.add(N);const Y=new V(new mt(.88,12,9),new Ct({color:1185043}));Y.scale.set(1,.95,.55),Y.position.set(0,1.75,1.72),p.add(Y);for(let oe=0;oe<7;oe++){const q=-.9+oe*.3,pe=2.5+$(oe,1500)*2.7,ge=new V(new ct(.11,.28,pe,7),U);ge.position.set(Math.sin(q)*pe*.34,4+$(oe,1501)*2.8,.15+Math.cos(q)*pe*.3),ge.rotation.z=Math.sin(q)*.65,ge.rotation.x=-Math.cos(q)*.55,ge.rotation.y=q,p.add(ge)}for(let oe=0;oe<9;oe++){const q=$(oe,1510)*Math.PI*2,pe=1.7+$(oe,1511)*5.6;Zs(p,Math.cos(q)*pe,.22,Math.sin(q)*pe,.3+$(oe,1512)*.45,oe%3?5265490:6251613,1513+oe)}for(let oe=0;oe<8;oe++)Zn(p,($(oe,1520)-.5)*5.8,($(oe,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][oe%4],10473668,.42,$(oe,1522)*Math.PI);const te=new V(new mt(.45,10,7),he(5978919,1));te.scale.set(.9,1.2,.7),te.position.set(0,1.55,1.25),p.add(te),Le(p,"fallenAsh","Поверженный ясень"),Ce.push(p),O(d,M,1.8,.08)},kx=(d,M)=>{const p=new $e;p.position.set(d,G(d,M),M),p.userData={id:"hunterCamp",label:"Забытая стоянка"};const A=new V(new ti(8.7,40),new De({color:3225644,roughness:1,transparent:!0,opacity:.78}));A.rotation.x=-Math.PI/2,A.position.y=.025,A.scale.set(1.18,.92,1),p.add(A);const U=new $e;U.position.set(-1.45,.05,-.65),U.rotation.y=-.34,p.add(U);const N=he(5978920,1);he(3680030,1);const Y=he(2697768,.82,.35),te=he(4412730,1),oe=H(3.7,.26,1.65,6308141,1);oe.position.y=1.05,oe.rotation.z=-.08,U.add(oe);for(let He=0;He<9;He++){const pt=H(2.8+$(He,501)*1.1,.16,.26,He%3?6505775:4928293,1);pt.position.set(-.25+($(He,502)-.5)*.25,1.18+($(He,503)-.5)*.34,-.72+He%3*.68),pt.rotation.z=($(He,504)-.5)*.16,pt.rotation.y=($(He,505)-.5)*.16,U.add(pt)}for(const[He,pt,Ht]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Tn=new V(new zt(Ht,.14,7,20,Math.PI*1.56),Y);Tn.rotation.y=Math.PI/2,Tn.rotation.z=Ht>.8?.08:-.18,Tn.position.set(He,.9,pt),U.add(Tn);const vi=new V(new ct(.15,.18,.28,8),Y);vi.rotation.z=Math.PI/2,vi.position.set(He,.9,pt),U.add(vi);for(let gs=0;gs<6;gs++){const _0=gs/6*Math.PI*2+.25,Zx=new B(He+Math.cos(_0)*Ht*.82,.9+Math.sin(_0)*Ht*.82,pt+.02),Jx=new B(He,.9,pt+.02);U.add(Ux(Jx,Zx,.065,.065,Y))}}const q=new V(new zn(3.8,.14,.16),Y);q.position.set(0,.62,-.83),q.rotation.z=.08,U.add(q);const pe=new V(new zn(.16,.18,3.2),N);pe.position.set(1.8,.8,-.35),pe.rotation.y=.9,U.add(pe);for(let He=0;He<6;He++){const pt=new V(new mt(.28+$(He,507)*.18,7,5),te);pt.scale.set(1.4,.32,.7),pt.position.set(-1.1+He*.48,1.34+He%2*.05,-.82),U.add(pt)}const ge=new $e;ge.position.set(2.85,.02,1.15),ge.rotation.y=.18,p.add(ge),he(4861985,1);for(let He=0;He<4;He++){const pt=He/4*Math.PI*2+.25,Ht=H(.11,3.7,.11,4861985,1);Ht.position.set(Math.cos(pt)*1.25,1.65,Math.sin(pt)*1.25),Ht.rotation.z=Math.cos(pt)*.34,Ht.rotation.x=-Math.sin(pt)*.34,ge.add(Ht)}const Be=new V(new gn(2,3.2,4,1,!0),new De({color:4862247,roughness:1,side:$t,transparent:!0,opacity:.94}));Be.position.y=1.45,Be.scale.set(1,.9,.82),Be.rotation.y=.78,ge.add(Be);for(let He=0;He<9;He++){const pt=new V(new mt(.16+$(He,509)*.14,6,5),te);pt.scale.set(1.5,.35,.8),pt.position.set(($(He,510)-.5)*2.4,1+$(He,511)*1.9,($(He,512)-.5)*1.8),ge.add(pt)}const be=H(1.05,1.55,.05,3088668,1);be.position.set(0,.72,1.65),be.rotation.y=.16,ge.add(be),yt(d+.1,M+.45,.78);const Qe=new Gi(16751173,1,8,2);Qe.position.set(.1,1.7,.45),p.add(Qe);const ht=new $e;ht.position.set(-3.15,.5,1.25),ht.rotation.y=.8,ht.rotation.z=-.22,p.add(ht);const Lt=new V(new ti(1.05,16),new De({color:3882041,roughness:.85,metalness:.55,side:$t}));Lt.rotation.x=-Math.PI/2,Lt.scale.y=.8,ht.add(Lt);const tn=new V(new zt(1.03,.11,7,18),Y);tn.rotation.x=-Math.PI/2,tn.scale.y=.8,ht.add(tn);const Ft=new V(new ct(.24,.31,.22,8),Y);Ft.rotation.x=Math.PI/2,Ft.position.set(.18,0,.08),ht.add(Ft);const Yt=H(.05,.035,1.15,1513494,1);Yt.position.set(-.28,.025,.05),Yt.rotation.y=.42,ht.add(Yt),he(2960425,.65,.45);const jt=(He,pt,Ht)=>{const Tn=new $e;Tn.position.set(He,.18,pt),Tn.rotation.y=Ht;const vi=H(.09,.09,1.55,5059362,1);vi.rotation.x=Math.PI/2,vi.position.z=.15,Tn.add(vi);const gs=H(.55,.13,.28,3158061,.55);gs.position.set(0,.02,-.62),gs.rotation.y=-.25,Tn.add(gs),p.add(Tn)};jt(-1.9,3.15,.45),jt(4.15,-.65,-.8);const Nt=H(.11,.11,.95,5388068,1);Nt.rotation.y=.55,Nt.position.set(-2.1,.16,2.65),p.add(Nt);const Ut=new V(new mt(.48,9,7),new De({color:5978919,roughness:1}));Ut.scale.set(.9,1.15,.65),Ut.position.set(3.55,.48,2.65),p.add(Ut);const cn=new V(new zt(.33,.035,6,18,Math.PI*1.5),he(3023129,1));cn.rotation.x=Math.PI/2,cn.position.set(3.55,.93,2.65),p.add(cn);for(let He=0;He<15;He++){const pt=new V(new ct(.09,.09,.025,10),new De({color:9335877,metalness:.55,roughness:.45})),Ht=$(He,520)*Math.PI*2,Tn=2.1+$(He,521)*3.7;pt.position.set(Math.cos(Ht)*Tn,.13,Math.sin(Ht)*Tn),pt.rotation.x=Math.PI/2,p.add(pt)}for(let He=0;He<5;He++){const pt=H(.08,.08,.9,11182733,1);pt.position.set(3.2+$(He,522)*2.4,.18,-2.7+$(He,523)*1.7),pt.rotation.y=$(He,524)*Math.PI,pt.rotation.z=($(He,525)-.5)*.25,p.add(pt)}const kn=new V(new zt(4.7,.055,7,64),new Ct({color:9160135,transparent:!0,opacity:.5}));kn.rotation.x=Math.PI/2,kn.position.y=.075,p.add(kn);const ai=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];ai.forEach((He,pt)=>{const Ht=pt/ai.length*Math.PI*2;Zn(p,Math.cos(Ht)*4.15,Math.sin(Ht)*4.15,He,pt%3===0?13215066:7977149,.55,Ht+.3)});for(let He=0;He<18;He++)Zs(p,($(He,530)-.5)*8,.18,($(He,531)-.5)*7,.22+$(He,532)*.34,He%4===0?6121048:5133389,530+He);for(let He=0;He<12;He++){const pt=H(.12,.12,1.7+$(He,535)*2,3811872,1);pt.position.set(($(He,536)-.5)*8,.11,($(He,537)-.5)*8),pt.rotation.y=$(He,538)*Math.PI,pt.rotation.z=($(He,539)-.5)*.2,p.add(pt)}Le(p,"hunterCamp","Забытая стоянка"),Ce.push(p),O(d,M,1.9,.1)},Ox=(d,M,p,A,U,N)=>{const Y=new $e;Y.position.set(d,G(d,M),M);const te=7442040,oe=he(4412730,1),q=new V(new zt(p,.07,8,64),new De({color:te,emissive:te,emissiveIntensity:.65,transparent:!0,opacity:.42}));q.rotation.x=Math.PI/2,q.position.y=.045,Y.add(q);const pe=Math.floor(p/1.7);for(let ge=0;ge<pe;ge++){const Be=$(ge,d*11+M)*Math.PI*2,be=p*.35+$(ge,M*17)*p*.45;Zs(Y,Math.cos(Be)*be,.2,Math.sin(Be)*be,.34+$(ge,33)*.32,5266514,800+ge)}{for(let ge=0;ge<8;ge++){const Be=new V(new mt(.34+$(ge,600)*.25,7,5),oe);Be.scale.y=.35,Be.position.set(($(ge,601)-.5)*p,.16,($(ge,602)-.5)*p),Y.add(Be)}for(let ge=0;ge<6;ge++)Zn(Y,($(ge,603)-.5)*p*.9,($(ge,604)-.5)*p*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][ge],7907492,.42,$(ge,605)*Math.PI)}Le(Y,A,U),Ce.push(Y)};kx(68,8),Ox(-45,75,9.5,"deepGrove","Глубокая роща"),Fx(-30,15);const zx=(d,M)=>{const p=document.createElement("canvas");p.width=p.height=256;const A=p.getContext("2d");A.clearRect(0,0,256,256),A.textAlign="center",A.textBaseline="middle",A.shadowColor=M,A.shadowBlur=24,A.fillStyle=M,A.font="bold 156px serif",A.fillText(d,128,132),A.shadowBlur=6,A.globalAlpha=.72,A.font="bold 126px serif",A.fillText(d,128,132);const U=new pc(p);return U.colorSpace=Bn,U.anisotropy=4,U},Tl=(d,M,p,A,U,N,Y=.7,te=0)=>{const oe="#"+N.toString(16).padStart(6,"0"),q=new Ct({map:zx(M,oe),transparent:!0,depthWrite:!1,side:$t}),pe=new V(new qn(Y,Y),q);return pe.position.set(p,A,U),pe.rotation.set(0,te,0),d.add(pe),pe},Al=(d,M,p,A=.075)=>{const U=new op(M),N=new V(new Xa(U,42,A,6,!1),new Ct({color:p,transparent:!0,opacity:.9}));d.add(N);const Y=new V(new Xa(U,42,A*2.5,6,!1),new Ct({color:p,transparent:!0,opacity:.12,depthWrite:!1}));return d.add(Y),N},Vu=50,Gu=-62,Nr=new $e;Nr.position.set(Vu,G(Vu,Gu),Gu),Nr.userData={id:"forestThread",label:"Разорванная нить"};const Wu=new V(new zt(2.4,.05,7,48),new De({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));Wu.rotation.x=Math.PI/2,Wu.position.y=.055,Nr.add(Wu);const Xu=new V(new un(1,1),he(5326925,1));Xu.scale.set(.9,1.45,.72),Xu.position.y=.95,Nr.add(Xu),Tl(Nr,"ᛏ",0,1.2,.76,12614830,.9,0);const Bx=[new B(-.9,1.8,.3),new B(0,3.1,.1),new B(1,2,-.2)];Al(Nr,Bx,14268630,.06),Le(Nr,"forestThread","Разорванная нить"),Ce.push(Nr),O(Vu,Gu,1.1,.08);const Pn=new $e,ju=58,qu=-28;Pn.position.set(ju,G(ju,qu),qu),Pn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const Hx=new De({color:5858398,roughness:.96,metalness:.04}),Em=new De({color:3423032,roughness:.92,metalness:.08}),Vx=new De({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),Yu=new V(new ti(13.2,52),new De({color:5402692,roughness:1,transparent:!0,opacity:.94}));Yu.rotation.x=-Math.PI/2,Yu.position.y=.018,Pn.add(Yu);for(const[d,M,p]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const A=new V(new zt(d,M,8,96),new Ct({color:15780190,transparent:!0,opacity:p,depthWrite:!1}));A.rotation.x=Math.PI/2,A.position.y=.065,Pn.add(A)}const Gx=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let d=0;d<18;d++){const M=d/18*Math.PI*2;Zn(Pn,Math.cos(M)*8.9,Math.sin(M)*8.9,Gx[d],15779422,.58,M+.15)}const Tm=new V(new ct(3.15,3.45,.45,12),Em);Tm.position.y=.24,Pn.add(Tm);for(let d=0;d<16;d++){const M=d/16*Math.PI*2,p=2.65+($(d,2001)-.5)*.22,A=new V(new un(.72+$(d,2002)*.22,1),Hx);A.scale.set(1.15+$(d,2003)*.25,.72+$(d,2004)*.22,.88+$(d,2005)*.24),A.position.set(Math.cos(M)*p,.55+$(d,2006)*.12,Math.sin(M)*p),A.rotation.set($(d,2007)*.25,M+$(d,2008)*.4,$(d,2009)*.2),Pn.add(A)}const $u=new V(new ti(2.25,40),Vx);$u.rotation.x=-Math.PI/2,$u.position.y=.72,Pn.add($u);for(let d=0;d<3;d++){const M=new V(new zt(.65+d*.48,.025,6,48),new Ct({color:d===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));M.rotation.x=Math.PI/2,M.position.y=.735,Pn.add(M)}const Am=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],bm=[];for(let d=0;d<3;d++){const M=Am[d],p=new $e;p.position.set(M.x,0,M.z),p.rotation.y=d===0?.22:d===2?-.22:Math.PI;const A=new V(new gn(.72,.95,9),new De({color:M.body,roughness:.98}));A.position.y=.72,p.add(A);const U=new V(new gn(.48,.72,8),new De({color:M.cloak,roughness:.98}));U.position.set(0,.86,.43),U.rotation.x=.05,p.add(U);const N=new V(new ct(.42,.58,.12,9),new De({color:M.cloak,roughness:1}));N.position.set(0,1.23,0),N.rotation.z=.08,p.add(N);const Y=new V(new mt(.32,12,9),new De({color:13079144,roughness:.9}));Y.position.y=1.62,p.add(Y);const te=new V(new mt(.38,10,8),new De({color:M.hair,roughness:1}));te.scale.set(1,.95,.9),te.position.set(0,1.68,-.08),p.add(te);for(const ge of[-1,1]){const Be=new V(new ct(.075,.105,.62,7),new De({color:M.cloak,roughness:1}));Be.position.set(ge*.47,1.03,.18),Be.rotation.z=ge*.42,Be.rotation.x=-.18,p.add(Be)}const oe=new V(new ct(.38,.44,.18,9),Em);oe.position.y=.25,p.add(oe);const q=new V(new ct(.035,.055,.9,8),new De({color:6964008,roughness:.9}));q.position.set(.58,1.08,.38),q.rotation.z=.62,p.add(q);const pe=new V(new zt(.12,.025,6,14),new De({color:9265980,roughness:.85}));pe.rotation.x=Math.PI/2,pe.position.set(.75,.82,.48),p.add(pe),p.position.y=.02,Pn.add(p),bm.push(new B(M.x+.72,1.25,M.z+.48))}const Cm=[14674162,16765022,13192536];for(let d=0;d<3;d++){const M=bm[d],p=[];for(let A=0;A<=30;A++){const U=A/30,N=M.y+U*7.3,Y=U*Math.PI*3+Am[d].phase,te=.35+.72*U;p.push(new B(M.x*(1-U)+Math.cos(Y)*te*U,M.y*(1-U)+N*U,M.z*(1-U)+Math.sin(Y)*te*U))}Al(Pn,p,Cm[d],.085)}for(let d=0;d<3;d++){const M=[];for(let p=0;p<=32;p++){const A=p/32,U=A*Math.PI*2,N=1.65+.42*Math.sin(U*2+d*.9);M.push(new B(Math.cos(U+d*2.094)*N,8.35+.45*Math.sin(U*3+d),Math.sin(U+d*2.094)*N))}Al(Pn,M,Cm[d],.065)}const Rm=new Gi(16767096,1.25,11,2);Rm.position.set(0,4.2,1),Pn.add(Rm);for(let d=0;d<20;d++){const M=$(d,2030)*Math.PI*2,p=3.8+$(d,2031)*8,A=Math.cos(M)*p,U=Math.sin(M)*p,N=new V(new ct(.018,.028,.22,5),new De({color:5666109,roughness:1}));N.position.set(A,.11,U),Pn.add(N);const Y=new V(new mt(.07,7,5),new Ct({color:d%3===0?16770208:d%3===1?15972816:14478591}));Y.position.set(A,.25,U),Pn.add(Y)}for(let d=0;d<10;d++){const M=$(d,2040)*Math.PI*2,p=4+$(d,2041)*8,A=new V(new un(.12+$(d,2042)*.08,0),new De({color:10189631,metalness:.65,roughness:.4}));A.position.set(Math.cos(M)*p,.1,Math.sin(M)*p),Pn.add(A)}Le(Pn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),Ce.push(Pn),O(ju,qu,3.4,.1);const gi=new $e,Ku=5,Zu=-70;gi.position.set(Ku,G(Ku,Zu),Zu),gi.userData={id:"powerCircle",label:"Круг Силы"};const Ju=new V(new ti(10.8,48),new De({color:1911590,roughness:1,transparent:!0,opacity:.94}));Ju.rotation.x=-Math.PI/2,Ju.position.y=.02,gi.add(Ju);for(const[d,M,p,A]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const U=new V(new zt(d,M,8,96),new Ct({color:p,transparent:!0,opacity:A,depthWrite:!1}));U.rotation.x=Math.PI/2,U.position.y=.07,gi.add(U)}for(let d=0;d<20;d++){const M=d/20*Math.PI*2,p=5.1+d%2*2.2;Zn(gi,Math.cos(M)*p,Math.sin(M)*p,J[(d+2)%J.length],d%2?9140479:6545396,.38,M+.2)}const bl=new V(new un(1.25,1),new De({color:2435371,roughness:.9,metalness:.16}));bl.scale.set(.9,2.8,.7),bl.position.y=2.45,bl.rotation.set(.05,.2,-.08),gi.add(bl);const Wx=Tl(gi,"ᛟ",0,2.55,.78,16766302,1.35,0);Wx.rotation.x=0;const Pm=new Gi(10251519,1.7,10,2);Pm.position.set(0,2.5,.8),gi.add(Pm);for(let d=0;d<12;d++){const M=d/12*Math.PI*2,p=4.1+$(d,1801)*4.5,A=Zs(gi,Math.cos(M)*p,.3,Math.sin(M)*p,.42+$(d,1802)*.42,d%3===0?5858141:4870476,1803+d);if(d%4===0){const U=new V(new gn(.18,.9,5),new Ct({color:d%2?9336063:6938111,transparent:!0,opacity:.75}));U.position.set(A.position.x,.62,A.position.z),gi.add(U)}}for(let d=0;d<9;d++){const M=$(d,1820)*Math.PI*2,p=2.2+$(d,1821)*6.7,A=new V(new mt(.045+$(d,1822)*.04,6,5),new Ct({color:d%2?7531007:11697663,transparent:!0,opacity:.7}));A.position.set(Math.cos(M)*p,.4+$(d,1823)*2.6,Math.sin(M)*p),gi.add(A)}Le(gi,"powerCircle","Круг Силы"),Ce.push(gi),O(Ku,Zu,2.2,.1);const Pi=new $e,Qu=-72,ed=-48;Pi.position.set(Qu,G(Qu,ed),ed),Pi.userData={id:"whisperStone",label:"Камень Шёпота"};const td=new V(new ti(8.6,40),new De({color:1516830,roughness:1,transparent:!0,opacity:.95}));td.rotation.x=-Math.PI/2,td.position.y=.02,Pi.add(td);const nd=new V(new zt(5.8,.09,8,96),new Ct({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));nd.rotation.x=Math.PI/2,nd.position.y=.075,Pi.add(nd);const Cl=new V(new un(2.1,1),new De({color:1382171,roughness:.8,metalness:.35}));Cl.scale.set(1.15,1.35,.82),Cl.position.y=1.75,Cl.rotation.set(.05,.25,-.08),Pi.add(Cl);for(const d of[-1,1]){const M=[];for(let p=0;p<=14;p++){const A=p/14,U=A*Math.PI*1.15;M.push(new B(d*(1.35+.72*Math.sin(U)),2.45+.85*A+.38*Math.sin(U),-.15+.78*Math.cos(U)-.78))}Al(Pi,M,3422020,.18)}const Rl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Rl.forEach((d,M)=>{const p=M/Rl.length*Math.PI*2;Tl(Pi,d,Math.cos(p)*3.5,1,Math.sin(p)*3.5,M%2?7265535:12088575,.46,p+Math.PI/2)});for(let d=0;d<9;d++){const M=$(d,1901)*Math.PI*2,p=.7+$(d,1902)*1.7,A=Tl(Pi,Rl[d%Rl.length],Math.cos(M)*p,3.4+d*.48,Math.sin(M)*p,d%2?7988991:12614911,.42+$(d,1903)*.22,M);A.rotation.x=($(d,1904)-.5)*.35}const Lm=new Gi(10245631,1.5,9,2);Lm.position.set(0,2.2,.5),Pi.add(Lm);for(let d=0;d<11;d++){const M=$(d,1920)*Math.PI*2,p=4.8+$(d,1921)*2.6;Zs(Pi,Math.cos(M)*p,.2,Math.sin(M)*p,.28+$(d,1922)*.38,4541258,1923+d)}Le(Pi,"whisperStone","Камень Шёпота"),Ce.push(Pi),O(Qu,ed,2.5,.1);const Ln=75,En=30,en=new $e;en.position.set(Ln,G(Ln,En),En);const Xx=he(5986899,1),Im=H(7.8,.42,5.8,5591885,1);Im.position.y=.22,en.add(Im);const Dm=H(7.4,2.8,.3,6439727,1);Dm.position.set(0,1.4,-2.7),en.add(Dm);const Nm=H(.3,2.8,5.4,6439727,1);Nm.position.set(-3.7,1.4,0),en.add(Nm);const Um=H(.3,2.8,5.4,6439727,1);Um.position.set(3.7,1.4,0),en.add(Um);const Fm=H(2.55,2.8,.3,6439727,1);Fm.position.set(-2.43,1.4,2.7),en.add(Fm);const km=H(2.55,2.8,.3,6439727,1);km.position.set(2.43,1.4,2.7),en.add(km);const Om=H(2.3,.72,.3,6439727,1);Om.position.set(0,2.44,2.7),en.add(Om);const zm=H(.16,2.18,.34,2826523,1);zm.position.set(-.66,1.28,2.72),en.add(zm);const Bm=H(.16,2.18,.34,2826523,1);Bm.position.set(.66,1.28,2.72),en.add(Bm);const Hm=H(1.48,.16,.34,2826523,1);Hm.position.set(0,2.34,2.72),en.add(Hm);const Js=new $e;Js.position.set(-.57,0,2.72),en.add(Js);const Vm=H(1.14,2.05,.12,3154457,1);Vm.position.set(.57,1.28,0),Js.add(Vm);const Gm=new V(new mt(.08,8,6),he(11831883,1));Gm.position.set(.86,1.25,.1),Js.add(Gm);const jx=new De({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const d of[-2.35,2.35]){const M=H(1.25,1,.12,2826523,1);M.position.set(d,1.72,2.78),en.add(M);const p=new V(new zn(.98,.72,.06),jx);p.position.set(d,1.72,2.86),en.add(p);const A=H(.07,.78,.1,2826523,1);A.position.set(d,1.72,2.91),en.add(A);const U=H(1.08,.07,.1,2826523,1);U.position.set(d,1.72,2.91),en.add(U)}const Wm=new De({map:qe,color:2697767,roughness:.98,side:$t}),ca=new V(new qn(4.25,6.25),Wm),ua=new V(new qn(4.25,6.25),Wm);ca.rotation.x=Math.PI/2,ua.rotation.x=Math.PI/2,ca.rotation.z=.62,ua.rotation.z=-.62,ca.position.set(-1.02,3.95,0),ua.position.set(1.02,3.95,0),en.add(ca,ua);const id=H(.22,.22,6.45,2695965,1);id.position.y=4.75,en.add(id);const rd=new V(new zn(.48,1.35,.48),Xx);rd.position.set(1.55,4.8,-.65),en.add(rd);const sd=H(.62,.1,.62,3420461,1);sd.position.set(1.55,5.48,-.65),en.add(sd);const Xm=H(2.35,.18,1,6636845,1);Xm.position.set(0,.62,3.15),en.add(Xm);const jm=H(1.55,.16,.48,5849131,1);jm.position.set(0,.3,3.58),en.add(jm),Le(en,"heroHome","Домик героя"),Ce.push(en),We(Ln,En-2.72,7.4,.3,0,.05),We(Ln-3.72,En,.3,5.45,0,.05),We(Ln+3.72,En,.3,5.45,0,.05),We(Ln-2.43,En+2.72,2.55,.3,0,.05),We(Ln+2.43,En+2.72,2.55,.3,0,.05);const rn=new $e;rn.position.set(Ln,G(Ln,En),En),rn.visible=!1;const qm=H(7,.16,5,4928548,1);qm.position.y=.5,rn.add(qm);const Ym=H(7,2.65,.18,4139808,1);Ym.position.set(0,1.8,-2.45),rn.add(Ym);const $m=H(.18,2.65,4.9,4139808,1);$m.position.set(-3.45,1.8,0),rn.add($m);const Km=H(.18,2.65,4.9,4139808,1);Km.position.set(3.45,1.8,0),rn.add(Km);const Zm=H(2.35,2.65,.18,4139808,1);Zm.position.set(-2.42,1.8,2.45),rn.add(Zm);const Jm=H(2.35,2.65,.18,4139808,1);Jm.position.set(2.42,1.8,2.45),rn.add(Jm);const Qm=H(2.5,.04,2.1,7162673,1);Qm.position.set(-.15,.6,.25),rn.add(Qm);const e0=H(1.65,.65,2.15,4008478,1);e0.position.set(-2.15,.88,-1.25),rn.add(e0);const t0=H(1.48,.12,1.35,7033152,1);t0.position.set(-2.15,1.27,-.92),rn.add(t0);const n0=H(1.28,.18,.46,11903114,1);n0.position.set(-2.15,1.38,-1.95),rn.add(n0);const i0=H(1.65,.12,1.05,5255969,1);i0.position.set(.85,1.15,-.15),rn.add(i0);for(const[d,M]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const p=H(.1,.7,.1,3679515,1);p.position.set(d,.72,M),rn.add(p)}const r0=H(1.25,.8,.72,5978660,1);r0.position.set(2.1,.95,-1.7),rn.add(r0);const s0=H(1.9,.14,.45,5978660,1);s0.position.set(1.35,2,-2.25),rn.add(s0);for(const d of[.75,1.35,1.95]){const M=new V(new ct(.08,.1,.35,8),he(7304016,1));M.position.set(d,2.24,-2.22),rn.add(M)}const o0=H(1.35,.55,.7,5920078,1);o0.position.set(2.15,.78,.95),rn.add(o0);const a0=new V(new gn(.28,.72,8),new De({color:16744744,emissive:16731402,emissiveIntensity:4}));a0.position.set(2.15,1.42,.95),rn.add(a0);const l0=new Gi(16747068,2.2,8,2);l0.position.set(2.15,1.7,.95),rn.add(l0),Le(rn,"heroHomeInterior","Дом героя — внутри"),Ce.push(rn);const hs=new $e;hs.position.set(Ln,G(Ln,En),En);const od=new V(new zt(6.2,.055,7,48),new De({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));od.rotation.x=Math.PI/2,od.position.y=.035,hs.add(od);for(const[d,M]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const p=H(.18,1,.18,4797735,1);p.position.set(d,.5,M),hs.add(p)}for(const d of[-2.4,2.9]){const M=H(10.2,.12,.12,6308139,1);M.position.set(0,.59,d),hs.add(M)}const qx=he(6906972,1);for(let d=0;d<7;d++){const M=new V(new ct(.32,.4,.12,7),qx);M.position.set(0,.08,4.1+d*.72),M.rotation.y=d*.4,hs.add(M)}yt(Ln-2.4,En+4.8,.48).scale.setScalar(.72),Le(hs,"heroHomeYard","Двор домика героя"),Ce.push(hs),yt(68,8,.75).scale.setScalar(.72);const c0=new V(new ct(.65,.8,.7,7),he(5327426,1));c0.position.set(68,G(68,8)+.35,6.5),S.add(c0);for(const[d,M]of[[66,10],[70,10],[66,6],[70,6]]){const p=H(.16,1.15,.16,4797735,1);p.position.set(d,G(d,M)+.57,M),S.add(p)}const Pl=new $e;Pl.position.set(-30,G(-30,15),15);const ad=new V(new ct(.5,.62,7,8),new gc({map:ne,color:4995371}));ad.rotation.z=Math.PI/2,ad.position.y=.5,Pl.add(ad);const ld=new V(new ct(.53,.53,.12,12),he(7693389,1));ld.rotation.z=Math.PI/2,ld.position.set(3.5,.5,0),Pl.add(ld),S.add(Pl);for(let d=0;d<7;d++){const M=new V(new un(.14,0),he(6913394,1)),p=d/7*Math.PI*2;M.position.set(-45+Math.cos(p)*4,.12+G(-45+Math.cos(p)*4,75+Math.sin(p)*4),75+Math.sin(p)*4),S.add(M)}for(let d=0;d<95;d++){const M=$(d,77)*Math.PI*2,p=68+$(d,91)*27,A=Math.cos(M)*p,U=Math.sin(M)*p+2,Y=[[Ci,Ri,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([te,oe,q])=>Math.hypot(A-te,U-oe)<q);Math.abs(A+57)>9&&!Y&&Lx(A,U,.78+$(d,13)*.82)}wl(-10,18,1.55,!1),wl(13,24,1.7,!1),wl(-31,-12,2.15,!0);for(let d=0;d<110;d++){const M=$(d,701)*Math.PI*2,p=15+$(d,702)*50,A=Math.cos(M)*p,U=Math.sin(M)*p+3;if(Math.abs(A)<10&&Math.abs(U)<16)continue;const N=new $e;N.position.set(A,G(A,U),U);for(let Y=0;Y<3;Y++){const te=new V(new gn(.025,.38+$(Y,d)*.28,4),new gc({color:Y===1?5466175:4282935}));te.position.set((Y-1)*.09,.18,($(Y*3,d)-.5)*.12),te.rotation.z=(Y-1)*.22,N.add(te)}S.add(N)}for(let d=0;d<80;d++){const M=-88+$(d,101)*176,p=-88+$(d,111)*176;if(Math.hypot(M,p+2)>30){const A=new V(new gn(.08,.55+$(d,121)*.7,5),new gc({color:4941888}));A.position.set(M,G(M,p)+.3,p),S.add(A)}}const ps=new $e;ps.position.set(29,G(29,25),25),ps.userData={id:"tower",label:"Сторожевая башня"};for(const d of[-2,2])for(const M of[-2,2]){const p=H(.35,7,.35,3942685,1);p.position.set(d,3.5,M),ps.add(p)}const u0=H(5,.35,5,6833965,1);u0.position.y=5.8,ps.add(u0);const d0=new V(new gn(3.8,2.7,4),he(2696482,1));d0.position.y=8,ps.add(d0),Le(ps,"tower","Сторожевая башня"),Ce.push(ps),We(29,25,4.8,4.8,0,.08);const da=(d,M,p,A,U,N)=>{const Y=new $e;Y.userData={id:p,label:A,phase:N,baseX:d,baseZ:M};const te=new V(new ci(.32,.78,4,8),he(U,.9));te.position.y=.85,Y.add(te);const oe=new V(new mt(.25,12,8),he(13210736,.9));oe.position.y=1.58,Y.add(oe);const q=H(.7,.9,.15,2565407,1);q.position.set(0,.82,-.27),Y.add(q),Y.position.set(d,G(d,M),M),Le(Y,p,A),Ce.push(Y),fn.push(Y)};da(9,-8,"elder","Старейшина",7558719,.4),da(-6,-3,"blacksmith","Кузнец",6044459,1.5),da(21,1,"hunter","Охотник",4215359,2.4),da(5,10,"villager","Житель Мидгарда",5858125,3.4),da(-16,4,"villager2","Житель деревни",6638394,4.2);const Yx=new Ct({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),cd=new $e;for(let d=0;d<34;d++){const M=new V(new mt(.9+$(d,810)*2.2,8,6),Yx);M.position.set(-88+$(d,811)*176,1.8+$(d,812)*2.2,-72+$(d,813)*144),cd.add(M)}S.add(cd);const ms=JA(t);S.add(ms);const fr=ms.userData.anim,f0=new lw,ud=new Ze,h0=d=>{var A,U,N,Y;if((U=(A=d.target)==null?void 0:A.closest)!=null&&U.call(A,".mid3d-ui"))return;const M=W.domElement.getBoundingClientRect();ud.x=(d.clientX-M.left)/M.width*2-1,ud.y=-((d.clientY-M.top)/M.height)*2+1,f0.setFromCamera(ud,F);const p=f0.intersectObjects(Ce,!0)[0];if(p){let te=p.object;for(;te.parent&&!((N=te.userData)!=null&&N.id);)te=te.parent;(Y=te.userData)!=null&&Y.id&&e(te.userData.id)}};W.domElement.addEventListener("pointerup",h0);const $x=d=>{v.current=d,_(d),l(""),rn.visible=d,ca.visible=!d,ua.visible=!d,id.visible=!d,rd.visible=!d,sd.visible=!d,d?(o.current.x=Ln,o.current.z=En+.95,u.current.x=0,u.current.z=-1,Js.rotation.y=-Math.PI/2):(o.current.x=Ln,o.current.z=En+3.75,u.current.x=0,u.current.z=1,Js.rotation.y=0),ms.position.set(o.current.x,G(o.current.x,o.current.z)+.04,o.current.z)};x.current=$x;const Kx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],p0=()=>{const d=Math.max(1,T.clientWidth),M=Math.max(1,T.clientHeight);F.aspect=d/M,F.updateProjectionMatrix(),W.setSize(d,M,!1)};p0();const m0=new ResizeObserver(p0);m0.observe(T);let dd=0,g0=performance.now();const v0=d=>{const M=Math.min(.05,(d-g0)/1e3);g0=d;const p=o.current,A=Math.hypot(p.dx,p.dz);if(A>.05){const q=6.2*M;Je(p,p.x+p.dx/A*q,p.z+p.dz/A*q),ms.rotation.y=Math.atan2(p.dx,p.dz),u.current.x=p.dx/A,u.current.z=p.dz/A,f(!0)}else f(!1);const U=G(p.x,p.z);if(ms.position.set(p.x,U+.04,p.z),fr){const q=d*.011+fr.phase,pe=A>.05?Math.sin(q)*.58:0,ge=A>.05?Math.sin(q+Math.PI)*.42:0;fr.legL.rotation.x=pe,fr.legR.rotation.x=-pe,fr.armL.upper.rotation.x=ge,fr.armR.upper.rotation.x=-ge,fr.armL.elbow.rotation.x=-Math.abs(ge)*.35,fr.armR.elbow.rotation.x=-Math.abs(ge)*.35,fr.weapon.rotation.z=-.12+(A>.05?Math.sin(q)*.035:0)}const N=u.current,Y=v.current?new B(p.x-N.x*1,U+3.65,p.z-N.z*1):new B(p.x-N.x*2,U+7.2,p.z-N.z*2+11.8);F.position.lerp(Y,v.current?.09:.055),F.lookAt(p.x+(v.current?N.x*.9:N.x*1.9),U+(v.current?1.25:1.2),p.z+(v.current?N.z*.9:N.z*1.9));let te="",oe="";if(v.current)p.z>En+1.72&&(te="Дверь — выйти из дома",oe="heroHomeExit");else for(const q of Kx)if(Math.hypot(p.x-q.x,p.z-q.z)<q.r){te=q.label,oe=q.id;break}l(te?`${te}|${oe}`:""),ke.forEach(q=>{const pe=.72+.28*Math.sin(d*.0016+q.phase);q.mesh.scale.set(pe,pe*.42,pe);const ge=q.mesh.material;ge.opacity=.055+.055*(.5+.5*Math.sin(d*.0016+q.phase))}),xt.forEach(q=>{q.light.intensity=2+Math.sin(d*.012+q.phase)*.5,q.flame.scale.y=.9+Math.sin(d*.009+q.phase)*.12}),cd.children.forEach((q,pe)=>{q.position.x+=Math.sin(d*12e-5+pe)*.003,q.position.z+=Math.cos(d*1e-4+pe)*.002}),z.forEach((q,pe)=>{var Qe,ht;if(q.kind==="deer"){const Lt=q.g.position.x-ms.position.x,tn=q.g.position.z-ms.position.z,Ft=Math.hypot(Lt,tn);if(Ft<11){const Yt=((Qe=q.g.userData)==null?void 0:Qe.legJoints)||[],jt=d*.014*(q.speed||1);for(let Ht=0;Ht<4;Ht++){const Tn=Yt[Ht*2],vi=Yt[Ht*2+1];Tn&&(Tn.rotation.z=Math.sin(jt+Ht*Math.PI)*.1),vi&&(vi.rotation.z=Math.max(0,Math.sin(jt+Ht*Math.PI))*-.18)}const Nt=Math.max(.001,Ft),Ut=Ft<5.5?.115:.075,cn=q.g.position.x+Lt/Nt*Ut,kn=q.g.position.z+tn/Nt*Ut,ai=cn-30,He=kn-53;if(Math.hypot(ai,He)<17)q.g.position.set(cn,G(cn,kn),kn);else{const Ht=Math.atan2(He,ai),Tn=30+Math.cos(Ht)*16,vi=53+Math.sin(Ht)*10;q.g.position.set(Tn,G(Tn,vi),vi)}q.g.rotation.y=Math.atan2(tn,Lt),q.g.position.y+=Math.sin(d*.008+pe)*.025;return}}const ge=d*.00105*q.speed+q.phase,Be=q.x+Math.cos(ge)*q.r,be=q.z+Math.sin(ge*.83)*q.r*.62;if(q.g.position.set(Be,G(Be,be),be),q.g.rotation.y=Math.atan2(Math.cos(ge*.83),-Math.sin(ge)),q.kind==="deer"){const Lt=((ht=q.g.userData)==null?void 0:ht.legJoints)||[],tn=d*.014*(q.speed||1);for(let Ft=0;Ft<4;Ft++){const Yt=Lt[Ft*2],jt=Lt[Ft*2+1];Yt&&(Yt.rotation.z=Math.sin(tn+Ft*Math.PI)*.1),jt&&(jt.rotation.z=Math.max(0,Math.sin(tn+Ft*Math.PI))*-.18)}q.g.position.y+=Math.sin(d*.006+pe)*.025,q.g.rotation.x=Math.sin(d*.004+q.phase)*.018}}),fn.forEach((q,pe)=>{const ge=q.userData.phase||0,Be=q.userData.baseX,be=q.userData.baseZ,Qe=Be+Math.sin(d*28e-5+ge)*1.6,ht=be+Math.cos(d*22e-5+ge)*1.1;q.position.set(Qe,G(Qe,ht),ht),q.rotation.y=Math.sin(d*4e-4+ge)*.5}),W.render(S,F),dd=requestAnimationFrame(v0)};return dd=requestAnimationFrame(v0),()=>{cancelAnimationFrame(dd),m0.disconnect(),W.domElement.removeEventListener("pointerup",h0),ke.forEach(d=>{d.mesh.geometry.dispose(),d.mesh.material.dispose()}),k.dispose(),je.dispose(),qe.dispose(),W.dispose(),S.traverse(d=>{var M,p,A,U;d.isMesh&&((p=(M=d.geometry)==null?void 0:M.dispose)==null||p.call(M),Array.isArray(d.material)?d.material.forEach(N=>{var Y;return(Y=N.dispose)==null?void 0:Y.call(N)}):(U=(A=d.material)==null?void 0:A.dispose)==null||U.call(A))}),W.domElement.remove(),x.current=null}},[t.id,e,n]);const w=T=>{const S=r.current,F=s.current;if(!S||!F)return;const W=S.getBoundingClientRect(),ee=W.left+W.width/2,ae=W.top+W.height/2,ce=48;let G=T.clientX-ee,Z=T.clientY-ae;const k=Math.hypot(G,Z);k>ce&&(G=G/k*ce,Z=Z/k*ce),F.style.transform=`translate(${G}px,${Z}px)`,o.current.dx=G/ce,o.current.dz=Z/ce},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=T=>{var Z,k;const S=r.current;if(!S)return;const F=T.target;if((Z=F.closest)!=null&&Z.call(F,".mid3d-action")||(k=F.closest)!=null&&k.call(F,".mid3d-interact"))return;const W=S.getBoundingClientRect(),ee=26;T.clientX>=W.left-ee&&T.clientX<=W.right+ee&&T.clientY>=W.top-78&&T.clientY<=W.bottom+26&&(T.currentTarget.setPointerCapture(T.pointerId),w(T))},L=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&w(T)},D=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId),R()};return X.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:L,onPointerUp:D,onPointerCancel:D,onContextMenu:T=>T.preventDefault(),children:[X.jsxs("div",{className:"mid3d-ui mid3d-top",children:[X.jsxs("div",{className:"mid3d-pill",children:[X.jsx("b",{children:"МИДГАРД"}),X.jsx("span",{children:"Деревня • река • лес • святилища"})]}),X.jsxs("div",{className:"mid3d-pill",children:[X.jsx("b",{children:"ᛟ"}),X.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&X.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[X.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),X.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&X.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[X.jsx("b",{children:"Камень Трёх Нитей"}),X.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>y(!1),children:"Продолжить путь"})]}),h&&X.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[X.jsx("b",{children:"🜂 Круг Силы"}),X.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),X.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!h&&!g&&(()=>{const[T,S]=a.split("|"),F=S==="heroHome"||S==="heroHomeExit";return X.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[X.jsx("b",{children:T}),X.jsx("span",{children:F?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),X.jsx("button",{onPointerDown:W=>W.stopPropagation(),onClick:()=>{var W,ee;S==="powerCircle"?m(!0):S==="threeThreads"?y(!0):S==="heroHome"?(W=x.current)==null||W.call(x,!0):S==="heroHomeExit"?(ee=x.current)==null||ee.call(x,!1):e(S)},children:F?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),X.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:X.jsx("div",{className:"mid3d-knob",ref:s})}),X.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:T=>T.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),X.jsx("div",{className:"mid3d-ui mid3d-hint",children:E?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function eb(){const[t,e]=Tt.useState(()=>U1().hero?{t:"tree"}:{t:"choose"}),[n,i]=Tt.useState(U1),[r,s]=Tt.useState(""),[o,a]=Tt.useState(""),[l,c]=Tt.useState(""),f=Tt.useRef(0),[h,m]=Tt.useState(null),[g,y]=Tt.useState(null),[E,_]=Tt.useState(!1),[u,v]=Tt.useState(0),[x,w]=Tt.useState(0),[R,P]=Tt.useState(0),[L,D]=Tt.useState(""),[T,S]=Tt.useState(!1),[F,W]=Tt.useState(!1),[ee,ae]=Tt.useState(""),[ce,G]=Tt.useState(.06);Tt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Tt.useEffect(()=>{var O,Pe,le,ue;(O=bt==null?void 0:bt.ready)==null||O.call(bt),(Pe=bt==null?void 0:bt.expand)==null||Pe.call(bt),(le=bt==null?void 0:bt.setHeaderColor)==null||le.call(bt,"#0b0f0c"),(ue=bt==null?void 0:bt.setBackgroundColor)==null||ue.call(bt,"#0b0f0c")},[]),Tt.useEffect(()=>{if(!(bt!=null&&bt.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(bt.BackButton.show(),bt.BackButton.onClick(O)):bt.BackButton.hide(),()=>{var Pe,le;(le=(Pe=bt.BackButton)==null?void 0:Pe.offClick)==null||le.call(Pe,O)}},[t,n.hero]),Tt.useEffect(()=>{m(null),y(null),_(!1),ae(""),S(!1)},[t]);const Z=O=>{c(O),window.clearTimeout(f.current),f.current=window.setTimeout(()=>c(""),1800)},k=(O="light")=>{var Pe,le,ue,Je;try{O==="success"?(le=(Pe=bt==null?void 0:bt.HapticFeedback)==null?void 0:Pe.notificationOccurred)==null||le.call(Pe,"success"):(Je=(ue=bt==null?void 0:bt.HapticFeedback)==null?void 0:ue.impactOccurred)==null||Je.call(ue,"light")}catch{}},ne=O=>e(O),se=O=>{k(),e({t:"realm",id:O.id})},Ee=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ze=()=>{const O=Ee();if(O<=0){Z("Дозор только начался — искры ещё копятся.");return}i(Pe=>({...Pe,sparks:Pe.sparks+O,watch:Date.now()})),k("success"),Z("Дозор завершён: +"+O+" ✨")},dt=()=>{if(n.gift===ba())return;const Pe=(n.gift?Math.round((Date.parse(ba())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,le=Sf[Pe-1];i(ue=>({...ue,sparks:ue.sparks+le,gift:ba(),streak:Pe})),k("success"),Z("Дар Древа, день "+Pe+": +"+le+" ✨")},Le=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),k("success"),Z("Путь начинается, "+o+"!"),e({t:"tree"}))},he=n.hero?wf.find(O=>O.id===n.hero.id):null,H=O=>Math.floor(Math.random()*O),me=O=>n.trials.filter(Pe=>Pe.startsWith(O+":")).length,Fe=O=>{if(n.artifacts.includes(O.id)){Z("Мир покорён. Артефакт хранится в листе героя.");return}k(),e({t:"trial",id:O.id})},nt=(O,Pe,le)=>{const ue=Pe===2;i(Je=>({...Je,sparks:Je.sparks+le+(ue?30:0),trials:[...Je.trials,O+":"+Pe],artifacts:ue?[...Je.artifacts,O]:Je.artifacts})),ue&&(k("success"),Z("Мир пройден! Артефакт: "+Tf[O]))},Ce=(O,Pe)=>{if(h!==null)return;const le=me(O),ue=Ef[O][le];if(Pe===ue.c){m(Pe),k("success");const Je=12+le*3+((he==null?void 0:he.id)==="dwarf"?6:0);Z("Верно! Сундук хозяина: +"+Je+" ✨"),nt(O,le,Je);return}if(n.powers.includes("mimirEye")){m(ue.c),i(it=>({...it,powers:it.powers.filter(I=>I!=="mimirEye")}));const Je=8+le*2;k("success"),Z("Око Мимира раскрыло истину. Ответ исправлен. +"+Je+" ✨"),nt(O,le,Je);return}if(n.powers.includes("nornThread")){m(Pe),i(it=>({...it,powers:it.powers.filter(I=>I!=="nornThread")}));const Je=6+le*2;k("success"),Z("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Je+" ✨"),nt(O,le,Je);return}m(Pe),k(),D(Ca[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},xt=O=>{const Pe=me(O),le=Ef[O][Pe],ue=le.a.findIndex((Je,it)=>it!==le.c&&it!==g);y(ue),_(!0),k(),Z("Шёпот ветров уносит один ответ...")},fn=O=>{const Pe=Ca[O],le=n.powers.includes("ashBreath");v(Pe.hp),w(he.hp+(le?25:0)),P(he.en+(le?2:0)),ae(""),S(!1),W(!1),D(le?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Pe.name+" поднимает оружие!"),le&&i(ue=>({...ue,powers:ue.powers.filter(Je=>Je!=="ashBreath")})),e({t:"fight",id:O})},z=(O,Pe)=>{if(ee)return;const le=Ca[O],ue=me(O);let Je=0,it="",I=R,b=T;if(Pe==="hit"&&(Je=he.str+H(4),n.powers.includes("fireOath")&&(Je+=5,i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="fireOath")})),it="Огненный обет! "),he.id==="berserk"&&x<=he.hp/2&&(Je*=2,it+="Медвежья ярость! "),it+="Ты бьёшь: "+he.weapon+" — −"+Je+" хозяину."),Pe==="rune"){if(R<4){Z("Мало энергии для заклинания!");return}I=R-4,Je=he.en+2+H(5),it="Руническое заклинание вспыхивает: −"+Je+" хозяину."}Pe==="shield"&&(b=!0,it="Ты поднимаешь щит — удар ослабнет.");const Q=u-Je;if(Q<=0){v(0),P(I),ae("win");const ke=8+ue*2;D("Хозяин повержен! Награда: +"+ke+" ✨"),nt(O,ue,ke);return}let fe=le.atk+H(3),_e="";b&&(fe=Math.ceil(fe*.3),_e=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(fe=Math.ceil(fe*.65),i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="iceOath")})),_e+=" Ледяной обет сковал удар врага."),he.id==="dwarf"&&(fe=Math.ceil(fe*.75));let de=x;if(he.id==="viking"&&!F&&de-fe<=0&&(W(!0),fe=0,_e=" Крылья бури поглотили смертельный удар!"),de=de-fe,v(Q),w(Math.max(0,de)),P(I),S(!1),de<=0&&n.powers.includes("yggdrasilCall")){i(ke=>({...ke,powers:ke.powers.filter(xe=>xe!=="yggdrasilCall")})),w(30),D(it+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(de<=0){ae("lose"),i(ke=>({...ke,sparks:Math.max(0,ke.sparks-10)})),D(it+" "+le.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}D(it+_e+" "+le.name+" отвечает: −"+fe+".")},Pt=O=>{me(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},at=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,We=O=>O==="tree"?{t:"tree"}:{t:O};return X.jsxs("div",{className:"app",children:[X.jsx("style",{children:KA}),X.jsxs("div",{className:"hdr",children:[t.t==="tree"&&X.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&X.jsx("button",{className:"back",onClick:()=>ne({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&X.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&X.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&X.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&X.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&X.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&X.jsx("div",{className:"title",children:"⚔ Бой"}),X.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&X.jsxs("div",{className:"scroll choose-screen",children:[X.jsxs("div",{className:"card center choose-intro",children:[X.jsx("div",{className:"big",children:"ᛉ"}),X.jsx("div",{className:"qhead2",children:"Выбери героя"}),X.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),wf.map(O=>X.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),k()},children:[X.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:X.jsx(Vr,{name:O.img,className:"himg"})}),X.jsxs("span",{className:"hinfo",children:[X.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),X.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),X.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),X.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&X.jsxs("div",{className:"card",children:[X.jsx("div",{className:"qhead2",children:"Имя героя"}),X.jsx("div",{className:"chips",children:(wf.find(O=>O.id===r).gender==="f"?YA:$A).map(O=>X.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),k()},children:O},O))})]}),X.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Le,children:"Вступить на путь"})]}),t.t==="tree"&&X.jsxs("div",{className:"maparea",children:[X.jsx("div",{className:"mapwrap",children:X.jsxs("div",{className:"mapcanvas",children:[X.jsx(Vr,{name:"tree",className:"mapimg"}),yc.map(O=>X.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>se(O),children:[X.jsxs("div",{className:"amulet-wrap",children:[X.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),X.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),X.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),X.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),X.jsx("div",{className:"fadeT"}),X.jsx("div",{className:"fadeB"}),X.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&he&&n.hero&&X.jsxs("button",{className:"herobar",onClick:()=>ne({t:"hero"}),children:[X.jsxs("span",{className:"hbface",style:{borderColor:he.color,color:he.color},children:[X.jsx(Vr,{name:he.img,className:"hbimg"}),he.sym]}),X.jsxs("span",{className:"hbname",children:[n.hero.name,X.jsx("i",{children:he.race})]}),X.jsxs("span",{className:"hbst",children:["⚔ ",he.str," ✨ ",he.en," ⏳ ",Ee()]}),X.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=yc.find(Pe=>Pe.id===t.id);if(O.id==="midgard"){if(!he)return null;const Pe=le=>{if(k(),le==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?Z("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:present:reward"])]})),k("success"),Z("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):Z("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(le==="norns"){Z("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(le==="threeThreads"){Z("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(le==="forge"||le==="blacksmith"){Z("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(le==="house"||le==="elder"){Z("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(le==="port"){Z("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(le==="rune"){Z("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(le==="ashgrove"){Z("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(le==="runefield"){Z("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(le==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?Z("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:past:reward"])]})),k("success"),Z("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):Z("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(le==="forestCache"){n.done.includes("forest:cache")?Z("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ue=>({...ue,sparks:ue.sparks+18,done:[...new Set([...ue.done,"forest:cache"])]})),k("success"),Z("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(le==="forestWhisper"){n.done.includes("forest:whisper")?Z("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ue=>({...ue,sparks:ue.sparks+16,done:[...new Set([...ue.done,"forest:whisper"])]})),k("success"),Z("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(le==="forestThread"){n.done.includes("forest:thread")?Z("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ue=>({...ue,sparks:ue.sparks+22,done:[...new Set([...ue.done,"forest:thread"])]})),k("success"),Z("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(le==="heroHome"){Z("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(le==="hunterCamp"){n.done.includes("forest:camp")?Z("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ue=>({...ue,sparks:ue.sparks+14,done:[...new Set([...ue.done,"forest:camp"])]})),k("success"),Z("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(le==="deepGrove"){n.done.includes("forest:grove")?Z("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ue=>({...ue,sparks:ue.sparks+17,done:[...new Set([...ue.done,"forest:grove"])]})),k("success"),Z("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(le==="fallenAsh"){n.done.includes("forest:ash")?Z("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ue=>({...ue,sparks:ue.sparks+21,done:[...new Set([...ue.done,"forest:ash"])]})),k("success"),Z("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(le==="deer"){Z("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(le==="hoddmimir"){Z("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(le==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?Z("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:future:reward"])]})),k("success"),Z("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):Z("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(le==="forestEvent"){n.done.includes("forest:choice")&&Z("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(le==="forestEvent:past"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:past"])]})),k("success"),Z("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(le==="forestEvent:present"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:present"])]})),k("success"),Z("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(le==="forestEvent:future"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:future"])]})),k("success"),Z("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(le==="event"){Z("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(le.startsWith("ritual:")){const ue=le.slice(7),Je={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},I={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ue];if(!I)return;if(n.powers.includes(I)){Z(Je[ue]+" уже пробуждён. Его сила ждёт своего часа.");return}i(Q=>({...Q,powers:[...new Set([...Q.powers,I])],done:[...new Set([...Q.done,"ritual:"+ue])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};k("success"),Z(b[ue]);return}};return X.jsx(QA,{h:he,on:Pe,eventDone:n.done.includes("forest:choice")})}return X.jsxs("div",{className:"content",children:[X.jsx(Vr,{name:O.id,className:"bgimg"}),X.jsx("div",{className:"veil"}),X.jsxs("div",{className:"banner",children:[X.jsx("span",{className:"bemoji",children:O.emoji}),X.jsxs("div",{children:[X.jsx("div",{className:"bname",children:O.name}),X.jsx("div",{className:"btag",children:O.tag})]})]}),X.jsxs("button",{className:"gate",onClick:()=>Fe(O),children:[X.jsxs("span",{className:"gwrap",children:[X.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),X.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),X.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),X.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=yc.find(Je=>Je.id===t.id),Pe=Ca[O.id],le=me(O.id);if(le>=3)return X.jsx("div",{className:"scroll",children:X.jsxs("div",{className:"card center",children:[X.jsx("div",{className:"big",children:"🏺"}),X.jsx("div",{className:"qhead2",children:"Мир покорён!"}),X.jsxs("p",{className:"dim",children:["Артефакт: ",Tf[O.id]]}),X.jsx("button",{className:"btn gold",onClick:()=>ne({t:"realm",id:O.id}),children:"К вратам"})]})});const ue=Ef[O.id][le];return X.jsxs("div",{className:"scroll",children:[X.jsxs("div",{className:"mhead",children:[X.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[X.jsx(Vr,{name:F1[O.id],className:"himg"}),Pe.sym]}),X.jsx("span",{className:"mname2",style:{color:O.color},children:Pe.name}),X.jsxs("span",{className:"mtitle",children:[Pe.title," • испытание ",le+1," из 3"]})]}),le===0&&X.jsxs("div",{className:"greet",children:["«",Pe.greet,"»"]}),X.jsxs("div",{className:"cloud",children:[X.jsx("div",{className:"riddle",children:ue.q}),ue.a.map((Je,it)=>X.jsx("button",{className:"ans"+(h!==null?it===ue.c?" good":it===h?" bad":" off":g===it?" off":""),onClick:()=>Ce(O.id,it),children:Je},it)),(he==null?void 0:he.id)==="elf"&&!E&&h===null&&X.jsx("button",{className:"btn rune",onClick:()=>xt(O.id),children:"🌀 Шёпот ветров"}),h!==null&&(h===ue.c?X.jsx("button",{className:"btn gold",onClick:()=>Pt(O.id),children:"Открыть сундук →"}):X.jsx("button",{className:"btn",onClick:()=>fn(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=yc.find(le=>le.id===t.id),Pe=Ca[O.id];return X.jsxs("div",{className:"scroll",children:[X.jsxs("div",{className:"duel",children:[X.jsxs("div",{className:"dside",children:[X.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[X.jsx(Vr,{name:F1[O.id],className:"himg"}),Pe.sym]}),X.jsx("span",{className:"dname",style:{color:O.color},children:Pe.name}),X.jsx("span",{className:"dhp",children:X.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Pe.hp*100)+"%",background:O.color}})}),X.jsxs("span",{className:"dnum",children:[u,"/",Pe.hp]})]}),X.jsx("span",{className:"dvs",children:"⚔"}),X.jsxs("div",{className:"dside",children:[X.jsxs("span",{className:"dface",style:{borderColor:he.color,color:he.color},children:[X.jsx(Vr,{name:he.img,className:"himg"}),he.sym]}),X.jsx("span",{className:"dname",style:{color:he.color},children:n.hero.name}),X.jsx("span",{className:"dhp",children:X.jsx("span",{className:"dhpfill",style:{width:Math.max(0,x/he.hp*100)+"%",background:"#7ee787"}})}),X.jsx("span",{className:"denergy",children:Array.from({length:he.en}).map((le,ue)=>X.jsx("span",{className:"pip"+(ue<R?" on":"")},ue))})]})]}),X.jsx("div",{className:"flog",children:L}),!ee&&X.jsxs("div",{className:"acts",children:[X.jsxs("button",{className:"btn gold",onClick:()=>z(O.id,"hit"),children:["⚔ Удар: ",he.weapon]}),X.jsx("button",{className:"btn rune",onClick:()=>z(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),X.jsx("button",{className:"btn shield",onClick:()=>z(O.id,"shield"),children:"🛡 Щит"})]}),ee==="win"&&X.jsx("button",{className:"btn gold",onClick:()=>Pt(O.id),children:"Забрать награду →"}),ee==="lose"&&X.jsx("button",{className:"btn ghost",onClick:()=>ne({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&he&&n.hero&&X.jsx("div",{className:"scroll",children:X.jsxs("div",{className:"card center",children:[X.jsx("span",{className:"hface bigface",style:{borderColor:he.color,color:he.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:X.jsx(Vr,{name:he.img,className:"himg"})}),X.jsxs("div",{className:"qhead2",style:{color:he.color},children:[n.hero.name," • ",he.race]}),X.jsxs("div",{className:"stats",children:[X.jsxs("div",{className:"stat",children:[X.jsxs("b",{children:["⚔ ",he.str]}),X.jsx("span",{children:"сила"})]}),X.jsxs("div",{className:"stat",children:[X.jsxs("b",{children:["✨ ",he.en]}),X.jsx("span",{children:"энергия"})]}),X.jsxs("div",{className:"stat",children:[X.jsxs("b",{children:["❤ ",he.hp]}),X.jsx("span",{children:"здоровье"})]})]}),X.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",X.jsx("b",{children:he.weapon})]}),X.jsxs("div",{className:"hrow",children:["🌀 ",he.ability,": ",he.abilityDesc]}),X.jsxs("div",{className:"hrow",children:["✨ Искр: ",X.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",X.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&X.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>Tf[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===ba(),le=(n.gift?Math.round((Date.parse(ba())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ue=O?n.streak:le;return X.jsxs("div",{className:"scroll",children:[X.jsxs("div",{className:"card center",children:[X.jsx("div",{className:"big",children:"🎁"}),X.jsx("div",{className:"qhead2",children:"Дар Древа"}),X.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),X.jsx("div",{className:"days",children:Sf.map((Je,it)=>X.jsxs("span",{className:"day"+(it+1===ue?" on":it+1<ue&&O?" done":""),children:[X.jsx("b",{children:Je}),"день ",it+1]},it))}),O?X.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):X.jsxs("button",{className:"btn gold",onClick:dt,children:["Забрать дар +",Sf[le-1]," ✨"]})]}),X.jsxs("div",{className:"card center",children:[X.jsx("div",{className:"big",children:"⏳"}),X.jsx("div",{className:"qhead2",children:"Дозор героя"}),X.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),X.jsxs("button",{className:"btn gold",onClick:ze,children:["Завершить дозор · +",Ee()," ✨"]})]})]})})(),t.t==="hall"&&X.jsx("div",{className:"scroll",children:X.jsxs("div",{className:"card center",children:[X.jsx("div",{className:"big",children:"🏛️"}),X.jsx("div",{className:"qhead2",children:"Чертог путника"}),X.jsxs("div",{className:"stats",children:[X.jsxs("div",{className:"stat",children:[X.jsxs("b",{children:["✨ ",n.sparks]}),X.jsx("span",{children:"Искр"})]}),X.jsxs("div",{className:"stat",children:[X.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),X.jsx("span",{children:"артефакты"})]})]}),X.jsxs("div",{className:"rank",children:["🏆 Ранг: ",qA(n.sparks)]}),n.hero&&he&&X.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",he.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&X.jsx("div",{className:"nav",children:jA.map(O=>X.jsxs("button",{className:"navbtn"+(at(O.id)?" on":""),onClick:()=>ne(We(O.id)),children:[X.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&X.jsx("div",{className:"toast",children:l})]})}K_(document.getElementById("root")).render(X.jsx(eb,{}));
