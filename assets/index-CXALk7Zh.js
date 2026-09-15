(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Vg={exports:{}},Xc={},Gg={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),$x=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),wm=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,jg={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Wg}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yg(){}Yg.prototype=Ro.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Wg}var Th=Eh.prototype=new Yg;Th.constructor=Eh;Xg(Th,Ro.prototype);Th.isPureReactComponent=!0;var Em=Array.isArray,qg=Object.prototype.hasOwnProperty,Ah={current:null},$g={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&!$g.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ka,type:t,key:s,ref:o,props:r,_owner:Ah.current}}function Qx(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function e1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tm=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e1(""+t.key):e.toString(36)}function Kl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case Vx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bu(o,0):i,Em(r)?(n="",t!=null&&(n=t.replace(Tm,"$&/")+"/"),Kl(r,e,n,"",function(c){return c})):r!=null&&(bh(r)&&(r=Qx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Tm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Em(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bu(s,a);o+=Kl(s,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bu(s,a++),o+=Kl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var i=[],r=0;return Kl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dn={current:null},Zl={transition:null},n1={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Ah};function Zg(){throw Error("act(...) is not supported in production builds of React.")}pt.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=Ro;pt.Fragment=Gx;pt.Profiler=Xx;pt.PureComponent=Eh;pt.StrictMode=Wx;pt.Suspense=$x;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;pt.act=Zg;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qg.call(e,l)&&!$g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:o}};pt.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jx,_context:t},t.Consumer=t};pt.createElement=Kg;pt.createFactory=function(t){var e=Kg.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:qx,render:t}};pt.isValidElement=bh;pt.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:t1}};pt.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};pt.unstable_act=Zg;pt.useCallback=function(t,e){return Dn.current.useCallback(t,e)};pt.useContext=function(t){return Dn.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return Dn.current.useDeferredValue(t)};pt.useEffect=function(t,e){return Dn.current.useEffect(t,e)};pt.useId=function(){return Dn.current.useId()};pt.useImperativeHandle=function(t,e,n){return Dn.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return Dn.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return Dn.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return Dn.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return Dn.current.useReducer(t,e,n)};pt.useRef=function(t){return Dn.current.useRef(t)};pt.useState=function(t){return Dn.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return Dn.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return Dn.current.useTransition()};pt.version="18.3.1";Gg.exports=pt;var vt=Gg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=vt,r1=Symbol.for("react.element"),s1=Symbol.for("react.fragment"),o1=Object.prototype.hasOwnProperty,a1=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l1={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)o1.call(e,i)&&!l1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:r1,type:t,key:s,ref:o,props:r,_owner:a1.current}}Xc.Fragment=s1;Xc.jsx=Jg;Xc.jsxs=Jg;Vg.exports=Xc;var H=Vg.exports,Qg={exports:{}},Qn={},ev={exports:{}},tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,se){var de=U.length;U.push(se);e:for(;0<de;){var Te=de-1>>>1,ve=U[Te];if(0<r(ve,se))U[Te]=se,U[de]=ve,de=Te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var se=U[0],de=U.pop();if(de!==se){U[0]=de;e:for(var Te=0,ve=U.length,Ee=ve>>>1;Te<Ee;){var ae=2*(Te+1)-1,pe=U[ae],oe=ae+1,fe=U[oe];if(0>r(pe,de))oe<ve&&0>r(fe,pe)?(U[Te]=fe,U[oe]=de,Te=oe):(U[Te]=pe,U[ae]=de,Te=ae);else if(oe<ve&&0>r(fe,de))U[Te]=fe,U[oe]=de,Te=oe;else break e}}return se}function r(U,se){var de=U.sortIndex-se.sortIndex;return de!==0?de:U.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var se=n(c);se!==null;){if(se.callback===null)i(c);else if(se.startTime<=U)i(c),se.sortIndex=se.expirationTime,e(l,se);else break;se=n(c)}}function y(U){if(E=!1,v(U),!_)if(n(l)!==null)_=!0,V(C);else{var se=n(c);se!==null&&Y(y,se.startTime-U)}}function C(U,se){_=!1,E&&(E=!1,u(D),D=-1),p=!0;var de=h;try{for(v(se),d=n(l);d!==null&&(!(d.expirationTime>se)||U&&!N());){var Te=d.callback;if(typeof Te=="function"){d.callback=null,h=d.priorityLevel;var ve=Te(d.expirationTime<=se);se=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&i(l),v(se)}else i(l);d=n(l)}if(d!==null)var Ee=!0;else{var ae=n(c);ae!==null&&Y(y,ae.startTime-se),Ee=!1}return Ee}finally{d=null,h=de,p=!1}}var R=!1,P=null,D=-1,M=5,x=-1;function N(){return!(t.unstable_now()-x<M)}function B(){if(P!==null){var U=t.unstable_now();x=U;var se=!0;try{se=P(!0,U)}finally{se?q():(R=!1,P=null)}}else R=!1}var q;if(typeof m=="function")q=function(){m(B)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=B,q=function(){re.postMessage(null)}}else q=function(){g(B,0)};function V(U){P=U,R||(R=!0,q())}function Y(U,se){D=g(function(){U(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,V(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var se=3;break;default:se=h}var de=h;h=se;try{return U()}finally{h=de}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,se){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var de=h;h=U;try{return se()}finally{h=de}},t.unstable_scheduleCallback=function(U,se,de){var Te=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Te+de:Te):de=Te,U){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=de+ve,U={id:f++,callback:se,priorityLevel:U,startTime:de,expirationTime:ve,sortIndex:-1},de>Te?(U.sortIndex=de,e(c,U),n(l)===null&&U===n(c)&&(E?(u(D),D=-1):E=!0,Y(y,de-Te))):(U.sortIndex=ve,e(l,U),_||p||(_=!0,V(C))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var se=h;return function(){var de=h;h=se;try{return U.apply(this,arguments)}finally{h=de}}}})(tv);ev.exports=tv;var c1=ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=vt,Jn=c1;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nv=new Set,Ca={};function Ts(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,d1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Am={},bm={};function f1(t){return Bd.call(bm,t)?!0:Bd.call(Am,t)?!1:d1.test(t)?bm[t]=!0:(Am[t]=!0,!1)}function h1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p1(t,e,n,i){if(e===null||typeof e>"u"||h1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xn[t]=new Nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xn[e]=new Nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xn[t]=new Nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xn[t]=new Nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xn[t]=new Nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xn[t]=new Nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xn[t]=new Nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xn[t]=new Nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xn[t]=new Nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);xn[e]=new Nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);xn[e]=new Nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Rh);xn[e]=new Nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p1(e,n,r,i)&&(n=null),i||r===null?f1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ar=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),sv=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Object.assign,Cu;function fa(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function m1(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Ys:return"Portal";case Hd:return"Profiler";case Lh:return"StrictMode";case Vd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rv:return(t.displayName||"Context")+".Consumer";case iv:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function g1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v1(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=v1(t))}function av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lv(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function jd(t,e){lv(t,e);var n=kr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(ha(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function cv(t,e){var n=kr(e.value),i=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_1=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){_1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function hv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var x1=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(x1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function Zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,ao=null,lo=null;function Nm(t){if(t=Qa(t)){if(typeof Qd!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=Kc(e),Qd(t.stateNode,t.type,e))}}function pv(t){ao?lo?lo.push(t):lo=[t]:ao=t}function mv(){if(ao){var t=ao,e=lo;if(lo=ao=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function gv(t,e){return t(e)}function vv(){}var Lu=!1;function _v(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return gv(t,e,n)}finally{Lu=!1,(ao!==null||lo!==null)&&(vv(),mv())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var ef=!1;if(ir)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{ef=!1}function y1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var _a=!1,mc=null,gc=!1,tf=null,S1={onError:function(t){_a=!0,mc=t}};function M1(t,e,n,i,r,s,o,a,l){_a=!1,mc=null,y1.apply(S1,arguments)}function w1(t,e,n,i,r,s,o,a,l){if(M1.apply(this,arguments),_a){if(_a){var c=mc;_a=!1,mc=null}else throw Error(ye(198));gc||(gc=!0,tf=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(As(t)!==t)throw Error(ye(188))}function E1(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Im(r),t;if(s===i)return Im(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function yv(t){return t=E1(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var Mv=Jn.unstable_scheduleCallback,Um=Jn.unstable_cancelCallback,T1=Jn.unstable_shouldYield,A1=Jn.unstable_requestPaint,Zt=Jn.unstable_now,b1=Jn.unstable_getCurrentPriorityLevel,Uh=Jn.unstable_ImmediatePriority,wv=Jn.unstable_UserBlockingPriority,vc=Jn.unstable_NormalPriority,C1=Jn.unstable_LowPriority,Ev=Jn.unstable_IdlePriority,jc=null,Fi=null;function R1(t){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:D1,P1=Math.log,L1=Math.LN2;function D1(t){return t>>>=0,t===0?32:31-(P1(t)/L1|0)|0}var fl=64,hl=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _c(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=pa(a):(s&=o,s!==0&&(i=pa(s)))}else o=n&~r,o!==0?i=pa(o):s!==0&&(i=pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Si(e),r=1<<n,i|=t[n],e&=~r;return i}function N1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=N1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Si(e),t[e]=n}function U1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function Av(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bv,Oh,Cv,Rv,Pv,rf=!1,pl=[],Cr=null,Rr=null,Pr=null,La=new Map,Da=new Map,wr=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function $o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function O1(t,e,n,i,r){switch(e){case"focusin":return Cr=$o(Cr,t,e,n,i,r),!0;case"dragenter":return Rr=$o(Rr,t,e,n,i,r),!0;case"mouseover":return Pr=$o(Pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,$o(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,$o(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function Lv(t){var e=ds(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,Pv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jd=i,n.target.dispatchEvent(i),Jd=null}else return e=Qa(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Om(t,e,n){Jl(t)&&n.delete(e)}function k1(){rf=!1,Cr!==null&&Jl(Cr)&&(Cr=null),Rr!==null&&Jl(Rr)&&(Rr=null),Pr!==null&&Jl(Pr)&&(Pr=null),La.forEach(Om),Da.forEach(Om)}function Ko(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,k1)))}function Na(t){function e(r){return Ko(r,t)}if(0<pl.length){Ko(pl[0],t);for(var n=1;n<pl.length;n++){var i=pl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&Ko(Cr,t),Rr!==null&&Ko(Rr,t),Pr!==null&&Ko(Pr,t),La.forEach(e),Da.forEach(e),n=0;n<wr.length;n++)i=wr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&wr.shift()}var co=ar.ReactCurrentBatchConfig,xc=!0;function z1(t,e,n,i){var r=Dt,s=co.transition;co.transition=null;try{Dt=1,kh(t,e,n,i)}finally{Dt=r,co.transition=s}}function B1(t,e,n,i){var r=Dt,s=co.transition;co.transition=null;try{Dt=4,kh(t,e,n,i)}finally{Dt=r,co.transition=s}}function kh(t,e,n,i){if(xc){var r=sf(t,e,n,i);if(r===null)Vu(t,e,i,yc,n),Fm(t,i);else if(O1(r,t,e,n,i))i.stopPropagation();else if(Fm(t,i),e&4&&-1<F1.indexOf(t)){for(;r!==null;){var s=Qa(r);if(s!==null&&bv(s),s=sf(t,e,n,i),s===null&&Vu(t,e,i,yc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vu(t,e,i,null,n)}}var yc=null;function sf(t,e,n,i){if(yc=null,t=Ih(i),t=ds(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function Dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case Uh:return 1;case wv:return 4;case vc:case C1:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var Ar=null,zh=null,Ql=null;function Nv(){if(Ql)return Ql;var t,e=zh,n=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ql=r.slice(t,1<i?1-i:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function km(){return!1}function ei(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:km,this.isPropagationStopped=km,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=ei(Po),Ja=jt({},Po,{view:0,detail:0}),H1=ei(Ja),Nu,Iu,Zo,Yc=jt({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Nu=t.screenX-Zo.screenX,Iu=t.screenY-Zo.screenY):Iu=Nu=0,Zo=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),zm=ei(Yc),V1=jt({},Yc,{dataTransfer:0}),G1=ei(V1),W1=jt({},Ja,{relatedTarget:0}),Uu=ei(W1),X1=jt({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),j1=ei(X1),Y1=jt({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q1=ei(Y1),$1=jt({},Po,{data:0}),Bm=ei($1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J1[t])?!!e[t]:!1}function Hh(){return Q1}var ey=jt({},Ja,{key:function(t){if(t.key){var e=K1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=ei(ey),ny=jt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=ei(ny),iy=jt({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),ry=ei(iy),sy=jt({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=ei(sy),ay=jt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=ei(ay),cy=[9,13,27,32],Vh=ir&&"CompositionEvent"in window,xa=null;ir&&"documentMode"in document&&(xa=document.documentMode);var uy=ir&&"TextEvent"in window&&!xa,Iv=ir&&(!Vh||xa&&8<xa&&11>=xa),Vm=" ",Gm=!1;function Uv(t,e){switch(t){case"keyup":return cy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function dy(t,e){switch(t){case"compositionend":return Fv(e);case"keypress":return e.which!==32?null:(Gm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Gm?null:t;default:return null}}function fy(t,e){if($s)return t==="compositionend"||!Vh&&Uv(t,e)?(t=Nv(),Ql=zh=Ar=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iv&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function Ov(t,e,n,i){pv(i),e=Sc(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ya=null,Ia=null;function py(t){qv(t,0)}function qc(t){var e=Js(t);if(av(e))return t}function my(t,e){if(t==="change")return e}var kv=!1;if(ir){var Fu;if(ir){var Ou="oninput"in document;if(!Ou){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Ou=typeof Xm.oninput=="function"}Fu=Ou}else Fu=!1;kv=Fu&&(!document.documentMode||9<document.documentMode)}function jm(){ya&&(ya.detachEvent("onpropertychange",zv),Ia=ya=null)}function zv(t){if(t.propertyName==="value"&&qc(Ia)){var e=[];Ov(e,Ia,t,Ih(t)),_v(py,e)}}function gy(t,e,n){t==="focusin"?(jm(),ya=e,Ia=n,ya.attachEvent("onpropertychange",zv)):t==="focusout"&&jm()}function vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(Ia)}function _y(t,e){if(t==="click")return qc(e)}function xy(t,e){if(t==="input"||t==="change")return qc(e)}function yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ei=typeof Object.is=="function"?Object.is:yy;function Ua(t,e){if(Ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!Ei(t[r],e[r]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sy(t){var e=Hv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bv(n.ownerDocument.documentElement,n)){if(i!==null&&Gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qm(n,s);var o=qm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=ir&&"documentMode"in document&&11>=document.documentMode,Ks=null,of=null,Sa=null,af=!1;function $m(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||Ks==null||Ks!==pc(i)||(i=Ks,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Ua(Sa,i)||(Sa=i,i=Sc(of,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ks)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},ku={},Vv={};ir&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function $c(t){if(ku[t])return ku[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return ku[t]=e[n];return t}var Gv=$c("animationend"),Wv=$c("animationiteration"),Xv=$c("animationstart"),jv=$c("transitionend"),Yv=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Yv.set(t,e),Ts(e,[t])}for(var zu=0;zu<Km.length;zu++){var Bu=Km[zu],wy=Bu.toLowerCase(),Ey=Bu[0].toUpperCase()+Bu.slice(1);Vr(wy,"on"+Ey)}Vr(Gv,"onAnimationEnd");Vr(Wv,"onAnimationIteration");Vr(Xv,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(jv,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Zm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w1(i,e,void 0,t),t.currentTarget=null}function qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zm(r,a,c),s=l}}}if(gc)throw t=tf,gc=!1,tf=null,t}function kt(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||($v(e,t,2,!1),n.add(i))}function Hu(t,e,n){var i=0;e&&(i|=4),$v(n,t,i,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[vl]){t[vl]=!0,nv.forEach(function(n){n!=="selectionchange"&&(Ty.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,Hu("selectionchange",!1,e))}}function $v(t,e,n,i){switch(Dv(e)){case 1:var r=z1;break;case 4:r=B1;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ds(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_v(function(){var c=s,f=Ih(n),d=[];e:{var h=Yv.get(t);if(h!==void 0){var p=Bh,_=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":p=ty;break;case"focusin":_="focus",p=Uu;break;case"focusout":_="blur",p=Uu;break;case"beforeblur":case"afterblur":p=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ry;break;case Gv:case Wv:case Xv:p=j1;break;case jv:p=oy;break;case"scroll":p=H1;break;case"wheel":p=ly;break;case"copy":case"cut":case"paste":p=q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hm}var E=(e&4)!==0,g=!E&&t==="scroll",u=E?h!==null?h+"Capture":null:h;E=[];for(var m=c,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Pa(m,u),y!=null&&E.push(Oa(m,y,v)))),g)break;m=m.return}0<E.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Jd&&(_=n.relatedTarget||n.fromElement)&&(ds(_)||_[rr]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ds(_):null,_!==null&&(g=As(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(E=zm,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Hm,y="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:Js(p),v=_==null?h:Js(_),h=new E(y,m+"leave",p,n,f),h.target=g,h.relatedTarget=v,y=null,ds(f)===c&&(E=new E(u,m+"enter",_,n,f),E.target=v,E.relatedTarget=g,y=E),g=y,p&&_)t:{for(E=p,u=_,m=0,v=E;v;v=Ds(v))m++;for(v=0,y=u;y;y=Ds(y))v++;for(;0<m-v;)E=Ds(E),m--;for(;0<v-m;)u=Ds(u),v--;for(;m--;){if(E===u||u!==null&&E===u.alternate)break t;E=Ds(E),u=Ds(u)}E=null}else E=null;p!==null&&Jm(d,h,p,E,!1),_!==null&&g!==null&&Jm(d,g,_,E,!0)}}e:{if(h=c?Js(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=my;else if(Wm(h))if(kv)C=xy;else{C=vy;var R=gy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=_y);if(C&&(C=C(t,c))){Ov(d,C,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Yd(h,"number",h.value)}switch(R=c?Js(c):window,t){case"focusin":(Wm(R)||R.contentEditable==="true")&&(Ks=R,of=c,Sa=null);break;case"focusout":Sa=of=Ks=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,$m(d,n,f);break;case"selectionchange":if(My)break;case"keydown":case"keyup":$m(d,n,f)}var P;if(Vh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else $s?Uv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Iv&&n.locale!=="ko"&&($s||D!=="onCompositionStart"?D==="onCompositionEnd"&&$s&&(P=Nv()):(Ar=f,zh="value"in Ar?Ar.value:Ar.textContent,$s=!0)),R=Sc(c,D),0<R.length&&(D=new Bm(D,t,null,n,f),d.push({event:D,listeners:R}),P?D.data=P:(P=Fv(n),P!==null&&(D.data=P)))),(P=uy?dy(t,n):fy(t,n))&&(c=Sc(c,"onBeforeInput"),0<c.length&&(f=new Bm("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=P))}qv(d,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=Pa(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pa(n,s),l!=null&&o.unshift(Oa(n,l,a))):r||(l=Pa(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ay=/\r\n?/g,by=/\u0000|\uFFFD/g;function Qm(t){return(typeof t=="string"?t:""+t).replace(Ay,`
`).replace(by,"")}function _l(t,e,n){if(e=Qm(e),Qm(t)!==e&&n)throw Error(ye(425))}function Mc(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(Py)}:df;function Py(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function t0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Lo,ka="__reactProps$"+Lo,rr="__reactContainer$"+Lo,ff="__reactEvents$"+Lo,Ly="__reactListeners$"+Lo,Dy="__reactHandles$"+Lo;function ds(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=t0(t);t!==null;){if(n=t[Ni])return n;t=t0(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[Ni]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function Kc(t){return t[ka]||null}var hf=[],Qs=-1;function Gr(t){return{current:t}}function zt(t){0>Qs||(t.current=hf[Qs],hf[Qs]=null,Qs--)}function Ot(t,e){Qs++,hf[Qs]=t.current,t.current=e}var zr={},Tn=Gr(zr),Bn=Gr(!1),_s=zr;function _o(t,e){var n=t.type.contextTypes;if(!n)return zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Hn(t){return t=t.childContextTypes,t!=null}function wc(){zt(Bn),zt(Tn)}function n0(t,e,n){if(Tn.current!==zr)throw Error(ye(168));Ot(Tn,e),Ot(Bn,n)}function Kv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,g1(t)||"Unknown",r));return jt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,_s=Tn.current,Ot(Tn,t),Ot(Bn,Bn.current),!0}function i0(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=Kv(t,e,_s),i.__reactInternalMemoizedMergedChildContext=t,zt(Bn),zt(Tn),Ot(Tn,t)):zt(Bn),Ot(Bn,n)}var Ki=null,Zc=!1,Wu=!1;function Zv(t){Ki===null?Ki=[t]:Ki.push(t)}function Ny(t){Zc=!0,Zv(t)}function Wr(){if(!Wu&&Ki!==null){Wu=!0;var t=0,e=Dt;try{var n=Ki;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ki=null,Zc=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(t+1)),Mv(Uh,Wr),r}finally{Dt=e,Wu=!1}}return null}var eo=[],to=0,Tc=null,Ac=0,ii=[],ri=0,xs=null,Ji=1,Qi="";function ss(t,e){eo[to++]=Ac,eo[to++]=Tc,Tc=t,Ac=e}function Jv(t,e,n){ii[ri++]=Ji,ii[ri++]=Qi,ii[ri++]=xs,xs=t;var i=Ji;t=Qi;var r=32-Si(i)-1;i&=~(1<<r),n+=1;var s=32-Si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ji=1<<32-Si(e)+r|n<<r|i,Qi=s+t}else Ji=1<<s|n<<r|i,Qi=t}function Wh(t){t.return!==null&&(ss(t,1),Jv(t,1,0))}function Xh(t){for(;t===Tc;)Tc=eo[--to],eo[to]=null,Ac=eo[--to],eo[to]=null;for(;t===xs;)xs=ii[--ri],ii[ri]=null,Qi=ii[--ri],ii[ri]=null,Ji=ii[--ri],ii[ri]=null}var Zn=null,Kn=null,Vt=!1,vi=null;function Qv(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function r0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:Ji,overflow:Qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zn=t,Kn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(Vt){var e=Kn;if(e){var n=e;if(!r0(t,e)){if(pf(t))throw Error(ye(418));e=Lr(n.nextSibling);var i=Zn;e&&r0(t,e)?Qv(i,n):(t.flags=t.flags&-4097|2,Vt=!1,Zn=t)}}else{if(pf(t))throw Error(ye(418));t.flags=t.flags&-4097|2,Vt=!1,Zn=t}}}function s0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function xl(t){if(t!==Zn)return!1;if(!Vt)return s0(t),Vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Kn)){if(pf(t))throw e_(),Error(ye(418));for(;e;)Qv(t,e),e=Lr(e.nextSibling)}if(s0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Zn?Lr(t.stateNode.nextSibling):null;return!0}function e_(){for(var t=Kn;t;)t=Lr(t.nextSibling)}function xo(){Kn=Zn=null,Vt=!1}function jh(t){vi===null?vi=[t]:vi.push(t)}var Iy=ar.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function o0(t){var e=t._init;return e(t._payload)}function t_(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Ur(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,y){return m===null||m.tag!==6?(m=Zu(v,u.mode,y),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,y){var C=v.type;return C===qs?f(u,m,v.props.children,y,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sr&&o0(C)===m.type)?(y=r(m,v.props),y.ref=Jo(u,m,v),y.return=u,y):(y=ac(v.type,v.key,v.props,null,u.mode,y),y.ref=Jo(u,m,v),y.return=u,y)}function c(u,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ju(v,u.mode,y),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,y,C){return m===null||m.tag!==7?(m=vs(v,u.mode,y,C),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cl:return v=ac(m.type,m.key,m.props,null,u.mode,v),v.ref=Jo(u,null,m),v.return=u,v;case Ys:return m=Ju(m,u.mode,v),m.return=u,m;case Sr:var y=m._init;return d(u,y(m._payload),v)}if(ha(m)||Yo(m))return m=vs(m,u.mode,v,null),m.return=u,m;yl(u,m)}return null}function h(u,m,v,y){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cl:return v.key===C?l(u,m,v,y):null;case Ys:return v.key===C?c(u,m,v,y):null;case Sr:return C=v._init,h(u,m,C(v._payload),y)}if(ha(v)||Yo(v))return C!==null?null:f(u,m,v,y,null);yl(u,v)}return null}function p(u,m,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(m,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return u=u.get(y.key===null?v:y.key)||null,l(m,u,y,C);case Ys:return u=u.get(y.key===null?v:y.key)||null,c(m,u,y,C);case Sr:var R=y._init;return p(u,m,v,R(y._payload),C)}if(ha(y)||Yo(y))return u=u.get(v)||null,f(m,u,y,C,null);yl(m,y)}return null}function _(u,m,v,y){for(var C=null,R=null,P=m,D=m=0,M=null;P!==null&&D<v.length;D++){P.index>D?(M=P,P=null):M=P.sibling;var x=h(u,P,v[D],y);if(x===null){P===null&&(P=M);break}t&&P&&x.alternate===null&&e(u,P),m=s(x,m,D),R===null?C=x:R.sibling=x,R=x,P=M}if(D===v.length)return n(u,P),Vt&&ss(u,D),C;if(P===null){for(;D<v.length;D++)P=d(u,v[D],y),P!==null&&(m=s(P,m,D),R===null?C=P:R.sibling=P,R=P);return Vt&&ss(u,D),C}for(P=i(u,P);D<v.length;D++)M=p(P,u,D,v[D],y),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?D:M.key),m=s(M,m,D),R===null?C=M:R.sibling=M,R=M);return t&&P.forEach(function(N){return e(u,N)}),Vt&&ss(u,D),C}function E(u,m,v,y){var C=Yo(v);if(typeof C!="function")throw Error(ye(150));if(v=C.call(v),v==null)throw Error(ye(151));for(var R=C=null,P=m,D=m=0,M=null,x=v.next();P!==null&&!x.done;D++,x=v.next()){P.index>D?(M=P,P=null):M=P.sibling;var N=h(u,P,x.value,y);if(N===null){P===null&&(P=M);break}t&&P&&N.alternate===null&&e(u,P),m=s(N,m,D),R===null?C=N:R.sibling=N,R=N,P=M}if(x.done)return n(u,P),Vt&&ss(u,D),C;if(P===null){for(;!x.done;D++,x=v.next())x=d(u,x.value,y),x!==null&&(m=s(x,m,D),R===null?C=x:R.sibling=x,R=x);return Vt&&ss(u,D),C}for(P=i(u,P);!x.done;D++,x=v.next())x=p(P,u,D,x.value,y),x!==null&&(t&&x.alternate!==null&&P.delete(x.key===null?D:x.key),m=s(x,m,D),R===null?C=x:R.sibling=x,R=x);return t&&P.forEach(function(B){return e(u,B)}),Vt&&ss(u,D),C}function g(u,m,v,y){if(typeof v=="object"&&v!==null&&v.type===qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case cl:e:{for(var C=v.key,R=m;R!==null;){if(R.key===C){if(C=v.type,C===qs){if(R.tag===7){n(u,R.sibling),m=r(R,v.props.children),m.return=u,u=m;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sr&&o0(C)===R.type){n(u,R.sibling),m=r(R,v.props),m.ref=Jo(u,R,v),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===qs?(m=vs(v.props.children,u.mode,y,v.key),m.return=u,u=m):(y=ac(v.type,v.key,v.props,null,u.mode,y),y.ref=Jo(u,m,v),y.return=u,u=y)}return o(u);case Ys:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Ju(v,u.mode,y),m.return=u,u=m}return o(u);case Sr:return R=v._init,g(u,m,R(v._payload),y)}if(ha(v))return _(u,m,v,y);if(Yo(v))return E(u,m,v,y);yl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Zu(v,u.mode,y),m.return=u,u=m),o(u)):n(u,m)}return g}var yo=t_(!0),n_=t_(!1),bc=Gr(null),Cc=null,no=null,Yh=null;function qh(){Yh=no=Cc=null}function $h(t){var e=bc.current;zt(bc),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Cc=t,Yh=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zn=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(Cc===null)throw Error(ye(308));no=t,Cc.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var fs=null;function Kh(t){fs===null?fs=[t]:fs.push(t)}function i_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,sr(t,i)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,wt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,sr(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,sr(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}function a0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rc(t,e,n,i){var r=t.updateQueue;Mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(h=e,p=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=jt({},d,h);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=d}}function l0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var el={},Oi=Gr(el),za=Gr(el),Ba=Gr(el);function hs(t){if(t===el)throw Error(ye(174));return t}function Jh(t,e){switch(Ot(Ba,e),Ot(za,t),Ot(Oi,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}zt(Oi),Ot(Oi,e)}function So(){zt(Oi),zt(za),zt(Ba)}function s_(t){hs(Ba.current);var e=hs(Oi.current),n=$d(e,t.type);e!==n&&(Ot(za,t),Ot(Oi,n))}function Qh(t){za.current===t&&(zt(Oi),zt(za))}var Wt=Gr(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function ep(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var nc=ar.ReactCurrentDispatcher,ju=ar.ReactCurrentBatchConfig,ys=0,Xt=null,sn=null,dn=null,Lc=!1,Ma=!1,Ha=0,Uy=0;function yn(){throw Error(ye(321))}function tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ei(t[n],e[n]))return!1;return!0}function np(t,e,n,i,r,s){if(ys=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?zy:By,t=n(i,r),Ma){s=0;do{if(Ma=!1,Ha=0,25<=s)throw Error(ye(301));s+=1,dn=sn=null,e.updateQueue=null,nc.current=Hy,t=n(i,r)}while(Ma)}if(nc.current=Dc,e=sn!==null&&sn.next!==null,ys=0,dn=sn=Xt=null,Lc=!1,e)throw Error(ye(300));return t}function ip(){var t=Ha!==0;return Ha=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Xt.memoizedState=dn=t:dn=dn.next=t,dn}function li(){if(sn===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var e=dn===null?Xt.memoizedState:dn.next;if(e!==null)dn=e,sn=t;else{if(t===null)throw Error(ye(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},dn===null?Xt.memoizedState=dn=t:dn=dn.next=t}return dn}function Va(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=li(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ys&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Xt.lanes|=f,Ss|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ei(i,e.memoizedState)||(zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Xt.lanes|=s,Ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=li(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ei(s,e.memoizedState)||(zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o_(){}function a_(t,e){var n=Xt,i=li(),r=e(),s=!Ei(i.memoizedState,r);if(s&&(i.memoizedState=r,zn=!0),i=i.queue,rp(u_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(n.flags|=2048,Ga(9,c_.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(ye(349));ys&30||l_(n,e,r)}return r}function l_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c_(t,e,n,i){e.value=n,e.getSnapshot=i,d_(e)&&f_(t)}function u_(t,e,n){return n(function(){d_(e)&&f_(t)})}function d_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ei(t,n)}catch{return!0}}function f_(t){var e=sr(t,1);e!==null&&Mi(e,t,1,-1)}function c0(t){var e=Li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=ky.bind(null,Xt,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h_(){return li().memoizedState}function ic(t,e,n,i){var r=Li();Xt.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function Jc(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&tp(i,o.deps)){r.memoizedState=Ga(e,n,s,i);return}}Xt.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function u0(t,e){return ic(8390656,8,t,e)}function rp(t,e){return Jc(2048,8,t,e)}function p_(t,e){return Jc(4,2,t,e)}function m_(t,e){return Jc(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v_(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,g_.bind(null,e,t),n)}function sp(){}function __(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function y_(t,e,n){return ys&21?(Ei(n,e)||(n=Tv(),Xt.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=n)}function Fy(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=ju.transition;ju.transition={};try{t(!1),e()}finally{Dt=n,ju.transition=i}}function S_(){return li().memoizedState}function Oy(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},M_(t))w_(e,n);else if(n=i_(t,e,n,i),n!==null){var r=Pn();Mi(n,t,i,r),E_(n,e,i)}}function ky(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(M_(t))w_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=i_(t,e,r,i),n!==null&&(r=Pn(),Mi(n,t,i,r),E_(n,e,i))}}function M_(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function w_(t,e){Ma=Lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}var Dc={readContext:ai,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},zy={readContext:ai,useCallback:function(t,e){return Li().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:u0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=Li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Oy.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=Li();return t={current:t},e.memoizedState=t},useState:c0,useDebugValue:sp,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=c0(!1),e=t[0];return t=Fy.bind(null,t[1]),Li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,r=Li();if(Vt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),fn===null)throw Error(ye(349));ys&30||l_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,u0(u_.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,c_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Li(),e=fn.identifierPrefix;if(Vt){var n=Qi,i=Ji;n=(i&~(1<<32-Si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},By={readContext:ai,useCallback:__,useContext:ai,useEffect:rp,useImperativeHandle:v_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:x_,useReducer:Yu,useRef:h_,useState:function(){return Yu(Va)},useDebugValue:sp,useDeferredValue:function(t){var e=li();return y_(e,sn.memoizedState,t)},useTransition:function(){var t=Yu(Va)[0],e=li().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1},Hy={readContext:ai,useCallback:__,useContext:ai,useEffect:rp,useImperativeHandle:v_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:x_,useReducer:qu,useRef:h_,useState:function(){return qu(Va)},useDebugValue:sp,useDeferredValue:function(t){var e=li();return sn===null?e.memoizedState=t:y_(e,sn.memoizedState,t)},useTransition:function(){var t=qu(Va)[0],e=li().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1};function mi(t,e){if(t&&t.defaultProps){e=jt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:jt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qc={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Ir(t),s=tr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(Mi(e,t,r,i),tc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Ir(t),s=tr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(Mi(e,t,r,i),tc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=Ir(t),r=tr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(Mi(e,t,i,n),tc(e,t,i))}};function d0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function T_(t,e,n){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Hn(e)?_s:Tn.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function f0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Qc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Hn(e)?_s:Tn.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Qc.enqueueReplaceState(r,r.state,null),Rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=m1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function A_(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ic||(Ic=!0,Rf=i),xf(t,e)},n}function b_(t,e,n){n=tr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function p0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function m0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var Gy=ar.ReactCurrentOwner,zn=!1;function Rn(t,e,n,i){e.child=t===null?n_(e,null,n,i):yo(e,t.child,n,i)}function g0(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=np(t,e,n,i,s,r),n=ip(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,or(t,e,r)):(Vt&&n&&Wh(e),e.flags|=1,Rn(t,e,i,r),e.child)}function v0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C_(t,e,s,i,r)):(t=ac(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,i)&&t.ref===e.ref)return or(t,e,r)}return e.flags|=1,t=Ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function C_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(zn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(zn=!0);else return e.lanes=t.lanes,or(t,e,r)}return yf(t,e,n,i,r)}function R_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(ro,qn),qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ot(ro,qn),qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ot(ro,qn),qn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ot(ro,qn),qn|=i;return Rn(t,e,r,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=Hn(n)?_s:Tn.current;return s=_o(e,s),uo(e,r),n=np(t,e,n,i,s,r),i=ip(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,or(t,e,r)):(Vt&&i&&Wh(e),e.flags|=1,Rn(t,e,n,r),e.child)}function _0(t,e,n,i,r){if(Hn(n)){var s=!0;Ec(e)}else s=!1;if(uo(e,r),e.stateNode===null)rc(t,e),T_(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Hn(n)?_s:Tn.current,c=_o(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&f0(e,o,i,c),Mr=!1;var h=e.memoizedState;o.state=h,Rc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Bn.current||Mr?(typeof f=="function"&&(vf(e,n,f,i),l=e.memoizedState),(a=Mr||d0(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,r_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:mi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Hn(n)?_s:Tn.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&f0(e,o,i,l),Mr=!1,h=e.memoizedState,o.state=h,Rc(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Bn.current||Mr?(typeof p=="function"&&(vf(e,n,p,i),_=e.memoizedState),(c=Mr||d0(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){P_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&i0(e,n,!1),or(t,e,s);i=e.stateNode,Gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):Rn(t,e,a,s),e.memoizedState=i.state,r&&i0(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?n0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&n0(t,e.context,!1),Jh(t,e.containerInfo)}function x0(t,e,n,i,r){return xo(),jh(r),e.flags|=256,Rn(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ot(Wt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=vs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wf(n),e.memoizedState=Mf,t):op(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Wy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=vs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function op(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,i){return i!==null&&jh(i),yo(e,t.child,null,n),t=op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(ye(422))),Sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=wf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=$u(s,i,void 0),Sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,zn||a){if(i=fn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,sr(t,r),Mi(i,t,r,-1))}return fp(),i=$u(Error(ye(421))),Sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Kn=Lr(r.nextSibling),Zn=e,Vt=!0,vi=null,t!==null&&(ii[ri++]=Ji,ii[ri++]=Qi,ii[ri++]=xs,Ji=t.id,Qi=t.overflow,xs=e),e=op(e,i.children),e.flags|=4096,e)}function y0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function Ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function N_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Rn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,n,e);else if(t.tag===19)y0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ot(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xy(t,e,n){switch(e.tag){case 3:L_(e),xo();break;case 5:s_(e);break;case 1:Hn(e.type)&&Ec(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ot(bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ot(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(Ot(Wt,Wt.current&1),t=or(t,e,n),t!==null?t.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return N_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ot(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,R_(t,e,n)}return or(t,e,n)}var I_,Ef,U_,F_;I_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};U_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hs(Oi.current);var s=null;switch(n){case"input":r=Xd(t,r),i=Xd(t,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=qd(t,r),i=qd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Mc)}Kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};F_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qo(t,e){if(!Vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jy(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return Hn(e.type)&&wc(),Sn(e),null;case 3:return i=e.stateNode,So(),zt(Bn),zt(Tn),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vi!==null&&(Df(vi),vi=null))),Ef(t,e),Sn(e),null;case 5:Qh(e);var r=hs(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)U_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return Sn(e),null}if(t=hs(Oi.current),xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<ma.length;r++)kt(ma[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Rm(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":Lm(i,s),kt("invalid",i)}Kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&kt("scroll",i)}switch(n){case"input":ul(i),Pm(i,s,!0);break;case"textarea":ul(i),Dm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[ka]=i,I_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zd(n,i),n){case"dialog":kt("cancel",t),kt("close",t),r=i;break;case"iframe":case"object":case"embed":kt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ma.length;r++)kt(ma[r],t);r=i;break;case"source":kt("error",t),r=i;break;case"img":case"image":case"link":kt("error",t),kt("load",t),r=i;break;case"details":kt("toggle",t),r=i;break;case"input":Rm(t,i),r=Xd(t,i),kt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),kt("invalid",t);break;case"textarea":Lm(t,i),r=qd(t,i),kt("invalid",t);break;default:r=i}Kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":ul(t),Pm(t,i,!1);break;case"textarea":ul(t),Dm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+kr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(t&&e.stateNode!=null)F_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=hs(Ba.current),hs(Oi.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Zn,t!==null))switch(t.tag){case 3:_l(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return Sn(e),null;case 13:if(zt(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Kn!==null&&e.mode&1&&!(e.flags&128))e_(),xo(),e.flags|=98560,s=!1;else if(s=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[Ni]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else vi!==null&&(Df(vi),vi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?on===0&&(on=3):fp())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return So(),Ef(t,e),t===null&&Fa(e.stateNode.containerInfo),Sn(e),null;case 10:return $h(e.type._context),Sn(e),null;case 17:return Hn(e.type)&&wc(),Sn(e),null;case 19:if(zt(Wt),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qo(s,!1);else{if(on!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,Qo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ot(Wt,Wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Zt()>wo&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Vt)return Sn(e),null}else 2*Zt()-s.renderingStartTime>wo&&n!==1073741824&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Zt(),e.sibling=null,n=Wt.current,Ot(Wt,i?n&1|2:n&1),e):(Sn(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?qn&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function Yy(t,e){switch(Xh(e),e.tag){case 1:return Hn(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),zt(Bn),zt(Tn),ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(zt(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return zt(Wt),null;case 4:return So(),null;case 10:return $h(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var Ml=!1,En=!1,qy=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){qt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){qt(t,e,i)}}var S0=!1;function $y(t,e){if(lf=xc,t=Hv(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},xc=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:mi(e.type,E),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(y){qt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return _=S0,S0=!1,_}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O_(t){var e=t.alternate;e!==null&&(t.alternate=null,O_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[ka],delete e[ff],delete e[Ly],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k_(t){return t.tag===5||t.tag===3||t.tag===4}function M0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var gn=null,gi=!1;function hr(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:En||io(n,e);case 6:var i=gn,r=gi;gn=null,hr(t,e,n),gn=i,gi=r,gn!==null&&(gi?(t=gn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gn.removeChild(n.stateNode));break;case 18:gn!==null&&(gi?(t=gn,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Na(t)):Gu(gn,n.stateNode));break;case 4:i=gn,r=gi,gn=n.stateNode.containerInfo,gi=!0,hr(t,e,n),gn=i,gi=r;break;case 0:case 11:case 14:case 15:if(!En&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}hr(t,e,n);break;case 1:if(!En&&(io(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){qt(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(En=(i=En)||n.memoizedState!==null,hr(t,e,n),En=i):hr(t,e,n);break;default:hr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=rS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function di(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,gi=!1;break e;case 3:gn=a.stateNode.containerInfo,gi=!0;break e;case 4:gn=a.stateNode.containerInfo,gi=!0;break e}a=a.return}if(gn===null)throw Error(ye(160));z_(s,o,r),gn=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){qt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(e,t),Pi(t),i&4){try{wa(3,t,t.return),eu(3,t)}catch(E){qt(t,t.return,E)}try{wa(5,t,t.return)}catch(E){qt(t,t.return,E)}}break;case 1:di(e,t),Pi(t),i&512&&n!==null&&io(n,n.return);break;case 5:if(di(e,t),Pi(t),i&512&&n!==null&&io(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(E){qt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lv(r,s),Zd(a,o);var c=Zd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?hv(r,d):f==="dangerouslySetInnerHTML"?dv(r,d):f==="children"?Ra(r,d):Ph(r,f,d,c)}switch(a){case"input":jd(r,s);break;case"textarea":cv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(E){qt(t,t.return,E)}}break;case 6:if(di(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){qt(t,t.return,E)}}break;case 3:if(di(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(E){qt(t,t.return,E)}break;case 4:di(e,t),Pi(t);break;case 13:di(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=Zt())),i&4&&w0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(En=(c=En)||f,di(e,t),En=c):di(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Oe=t,f=t.child;f!==null;){for(d=Oe=f;Oe!==null;){switch(h=Oe,p=h.child,h.tag){case 0:case 11:case 14:case 15:wa(4,h,h.return);break;case 1:io(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){qt(i,n,E)}}break;case 5:io(h,h.return);break;case 22:if(h.memoizedState!==null){T0(d);continue}}p!==null?(p.return=h,Oe=p):T0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fv("display",o))}catch(E){qt(t,t.return,E)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(E){qt(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:di(e,t),Pi(t),i&4&&w0(t);break;case 21:break;default:di(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k_(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=M0(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=M0(t);bf(t,a,o);break;default:throw Error(ye(161))}}catch(l){qt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ky(t,e,n){Oe=t,H_(t)}function H_(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||En;a=Ml;var c=En;if(Ml=o,(En=l)&&!c)for(Oe=r;Oe!==null;)o=Oe,l=o.child,o.tag===22&&o.memoizedState!==null?A0(r):l!==null?(l.return=o,Oe=l):A0(r);for(;s!==null;)Oe=s,H_(s),s=s.sibling;Oe=r,Ml=a,En=c}E0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Oe=s):E0(t)}}function E0(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:En||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!En)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&l0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}l0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}En||e.flags&512&&Af(e)}catch(h){qt(e,e.return,h)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function T0(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function A0(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){qt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){qt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){qt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){qt(e,o,l)}}}catch(l){qt(e,e.return,l)}if(e===t){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var Zy=Math.ceil,Nc=ar.ReactCurrentDispatcher,ap=ar.ReactCurrentOwner,oi=ar.ReactCurrentBatchConfig,wt=0,fn=null,Qt=null,_n=0,qn=0,ro=Gr(0),on=0,Wa=null,Ss=0,tu=0,lp=0,Ea=null,kn=null,cp=0,wo=1/0,$i=null,Ic=!1,Rf=null,Nr=null,wl=!1,br=null,Uc=0,Ta=0,Pf=null,sc=-1,oc=0;function Pn(){return wt&6?Zt():sc!==-1?sc:sc=Zt()}function Ir(t){return t.mode&1?wt&2&&_n!==0?_n&-_n:Iy.transition!==null?(oc===0&&(oc=Tv()),oc):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Dv(t.type)),t):1}function Mi(t,e,n,i){if(50<Ta)throw Ta=0,Pf=null,Error(ye(185));Za(t,n,i),(!(wt&2)||t!==fn)&&(t===fn&&(!(wt&2)&&(tu|=n),on===4&&Er(t,_n)),Vn(t,i),n===1&&wt===0&&!(e.mode&1)&&(wo=Zt()+500,Zc&&Wr()))}function Vn(t,e){var n=t.callbackNode;I1(t,e);var i=_c(t,t===fn?_n:0);if(i===0)n!==null&&Um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Um(n),e===1)t.tag===0?Ny(b0.bind(null,t)):Zv(b0.bind(null,t)),Ry(function(){!(wt&6)&&Wr()}),n=null;else{switch(Av(i)){case 1:n=Uh;break;case 4:n=wv;break;case 16:n=vc;break;case 536870912:n=Ev;break;default:n=vc}n=$_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if(sc=-1,oc=0,wt&6)throw Error(ye(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=_c(t,t===fn?_n:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fc(t,i);else{e=i;var r=wt;wt|=2;var s=W_();(fn!==t||_n!==e)&&($i=null,wo=Zt()+500,gs(t,e));do try{eS();break}catch(a){G_(t,a)}while(!0);qh(),Nc.current=s,wt=r,Qt!==null?e=0:(fn=null,_n=0,e=on)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=Wa,gs(t,0),Er(t,i),Vn(t,Zt()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jy(r)&&(e=Fc(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=Wa,gs(t,0),Er(t,i),Vn(t,Zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:os(t,kn,$i);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=cp+500-Zt(),10<e)){if(_c(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(os.bind(null,t,kn,$i),e);break}os(t,kn,$i);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zy(i/1960))-i,10<i){t.timeoutHandle=df(os.bind(null,t,kn,$i),i);break}os(t,kn,$i);break;case 5:os(t,kn,$i);break;default:throw Error(ye(329))}}}return Vn(t,Zt()),t.callbackNode===n?V_.bind(null,t):null}function Lf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=kn,kn=n,e!==null&&Df(e)),t}function Df(t){kn===null?kn=t:kn.push.apply(kn,t)}function Jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~lp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Si(e),i=1<<n;t[n]=-1,e&=~i}}function b0(t){if(wt&6)throw Error(ye(327));fo();var e=_c(t,0);if(!(e&1))return Vn(t,Zt()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=Wa,gs(t,0),Er(t,e),Vn(t,Zt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,kn,$i),Vn(t,Zt()),null}function up(t,e){var n=wt;wt|=1;try{return t(e)}finally{wt=n,wt===0&&(wo=Zt()+500,Zc&&Wr())}}function Ms(t){br!==null&&br.tag===0&&!(wt&6)&&fo();var e=wt;wt|=1;var n=oi.transition,i=Dt;try{if(oi.transition=null,Dt=1,t)return t()}finally{Dt=i,oi.transition=n,wt=e,!(wt&6)&&Wr()}}function dp(){qn=ro.current,zt(ro)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Qt!==null)for(n=Qt.return;n!==null;){var i=n;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wc();break;case 3:So(),zt(Bn),zt(Tn),ep();break;case 5:Qh(i);break;case 4:So();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:$h(i.type._context);break;case 22:case 23:dp()}n=n.return}if(fn=t,Qt=t=Ur(t.current,null),_n=qn=e,on=0,Wa=null,lp=tu=Ss=0,kn=Ea=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fs=null}return t}function G_(t,e){do{var n=Qt;try{if(qh(),nc.current=Dc,Lc){for(var i=Xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lc=!1}if(ys=0,dn=sn=Xt=null,Ma=!1,Ha=0,ap.current=null,n===null||n.return===null){on=1,Wa=e,Qt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=p0(o);if(p!==null){p.flags&=-257,m0(p,o,a,s,e),p.mode&1&&h0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){h0(s,c,e),fp();break e}l=Error(ye(426))}}else if(Vt&&a.mode&1){var g=p0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),m0(g,o,a,s,e),jh(Mo(l,a));break e}}s=l=Mo(l,a),on!==4&&(on=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=A_(s,l,e);a0(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nr===null||!Nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=b_(s,a,e);a0(s,y);break e}}s=s.return}while(s!==null)}j_(n)}catch(C){e=C,Qt===n&&n!==null&&(Qt=n=n.return);continue}break}while(!0)}function W_(){var t=Nc.current;return Nc.current=Dc,t===null?Dc:t}function fp(){(on===0||on===3||on===2)&&(on=4),fn===null||!(Ss&268435455)&&!(tu&268435455)||Er(fn,_n)}function Fc(t,e){var n=wt;wt|=2;var i=W_();(fn!==t||_n!==e)&&($i=null,gs(t,e));do try{Qy();break}catch(r){G_(t,r)}while(!0);if(qh(),wt=n,Nc.current=i,Qt!==null)throw Error(ye(261));return fn=null,_n=0,on}function Qy(){for(;Qt!==null;)X_(Qt)}function eS(){for(;Qt!==null&&!T1();)X_(Qt)}function X_(t){var e=q_(t.alternate,t,qn);t.memoizedProps=t.pendingProps,e===null?j_(t):Qt=e,ap.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yy(n,e),n!==null){n.flags&=32767,Qt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{on=6,Qt=null;return}}else if(n=jy(n,e,qn),n!==null){Qt=n;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=t}while(e!==null);on===0&&(on=5)}function os(t,e,n){var i=Dt,r=oi.transition;try{oi.transition=null,Dt=1,tS(t,e,n,i)}finally{oi.transition=r,Dt=i}return null}function tS(t,e,n,i){do fo();while(br!==null);if(wt&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(U1(t,s),t===fn&&(Qt=fn=null,_n=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,$_(vc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=Dt;Dt=1;var a=wt;wt|=4,ap.current=null,$y(t,n),B_(n,t),Sy(cf),xc=!!lf,cf=lf=null,t.current=n,Ky(n),A1(),wt=a,Dt=o,oi.transition=s}else t.current=n;if(wl&&(wl=!1,br=t,Uc=r),s=t.pendingLanes,s===0&&(Nr=null),R1(n.stateNode),Vn(t,Zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ic)throw Ic=!1,t=Rf,Rf=null,t;return Uc&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===Pf?Ta++:(Ta=0,Pf=t):Ta=0,Wr(),null}function fo(){if(br!==null){var t=Av(Uc),e=oi.transition,n=Dt;try{if(oi.transition=null,Dt=16>t?16:t,br===null)var i=!1;else{if(t=br,br=null,Uc=0,wt&6)throw Error(ye(331));var r=wt;for(wt|=4,Oe=t.current;Oe!==null;){var s=Oe,o=s.child;if(Oe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Oe=c;Oe!==null;){var f=Oe;switch(f.tag){case 0:case 11:case 15:wa(8,f,s)}var d=f.child;if(d!==null)d.return=f,Oe=d;else for(;Oe!==null;){f=Oe;var h=f.sibling,p=f.return;if(O_(f),f===c){Oe=null;break}if(h!==null){h.return=p,Oe=h;break}Oe=p}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Oe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Oe=o;else e:for(;Oe!==null;){if(s=Oe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Oe=u;break e}Oe=s.return}}var m=t.current;for(Oe=m;Oe!==null;){o=Oe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Oe=v;else e:for(o=m;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(C){qt(a,a.return,C)}if(a===o){Oe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Oe=y;break e}Oe=a.return}}if(wt=r,Wr(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(jc,t)}catch{}i=!0}return i}finally{Dt=n,oi.transition=e}}return!1}function C0(t,e,n){e=Mo(n,e),e=A_(t,e,1),t=Dr(t,e,1),e=Pn(),t!==null&&(Za(t,1,e),Vn(t,e))}function qt(t,e,n){if(t.tag===3)C0(t,t,n);else for(;e!==null;){if(e.tag===3){C0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nr===null||!Nr.has(i))){t=Mo(n,t),t=b_(e,t,1),e=Dr(e,t,1),t=Pn(),e!==null&&(Za(e,1,t),Vn(e,t));break}}e=e.return}}function nS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pn(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(_n&n)===n&&(on===4||on===3&&(_n&130023424)===_n&&500>Zt()-cp?gs(t,0):lp|=n),Vn(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=Pn();t=sr(t,e),t!==null&&(Za(t,e,n),Vn(t,n))}function iS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function rS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),Y_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bn.current)zn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zn=!1,Xy(t,e,n);zn=!!(t.flags&131072)}else zn=!1,Vt&&e.flags&1048576&&Jv(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rc(t,e),t=e.pendingProps;var r=_o(e,Tn.current);uo(e,n),r=np(null,e,i,t,r,n);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=Qc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,Vt&&s&&Wh(e),Rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oS(i),t=mi(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=_0(null,e,i,t,n);break e;case 11:e=g0(null,e,i,t,n);break e;case 14:e=v0(null,e,i,mi(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),_0(t,e,i,r,n);case 3:e:{if(L_(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,r_(t,e),Rc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(ye(423)),e),e=x0(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(ye(424)),e),e=x0(t,e,i,n,r);break e}else for(Kn=Lr(e.stateNode.containerInfo.firstChild),Zn=e,Vt=!0,vi=null,n=n_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=or(t,e,n);break e}Rn(t,e,i,n)}e=e.child}return e;case 5:return s_(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),P_(t,e),Rn(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return D_(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):Rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),g0(t,e,i,r,n);case 7:return Rn(t,e,e.pendingProps,n),e.child;case 8:return Rn(t,e,e.pendingProps.children,n),e.child;case 12:return Rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ot(bc,i._currentValue),i._currentValue=o,s!==null)if(Ei(s.value,o)){if(s.children===r.children&&!Bn.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=tr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=ai(r),i=i(r),e.flags|=1,Rn(t,e,i,n),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),v0(t,e,i,r,n);case 15:return C_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),rc(t,e),e.tag=1,Hn(i)?(t=!0,Ec(e)):t=!1,uo(e,n),T_(e,i,r),_f(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return N_(t,e,n);case 22:return R_(t,e,n)}throw Error(ye(156,e.tag))};function $_(t,e){return Mv(t,e)}function sS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new sS(t,e,n,i)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Nh)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return vs(n.children,r,s,e);case Lh:o=8,r|=8;break;case Hd:return t=si(12,n,e,r|2),t.elementType=Hd,t.lanes=s,t;case Vd:return t=si(13,n,e,r),t.elementType=Vd,t.lanes=s,t;case Gd:return t=si(19,n,e,r),t.elementType=Gd,t.lanes=s,t;case sv:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iv:o=10;break e;case rv:o=9;break e;case Dh:o=11;break e;case Nh:o=14;break e;case Sr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vs(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=si(22,t,i,e),t.elementType=sv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function Ju(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(t,e,n,i,r,s,o,a,l){return t=new aS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function lS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function K_(t){if(!t)return zr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(Hn(n))return Kv(t,n,e)}return e}function Z_(t,e,n,i,r,s,o,a,l){return t=pp(n,i,!0,t,r,s,o,a,l),t.context=K_(null),n=t.current,i=Pn(),r=Ir(n),s=tr(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,Za(t,r,i),Vn(t,i),t}function iu(t,e,n,i){var r=e.current,s=Pn(),o=Ir(r);return n=K_(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,o),t!==null&&(Mi(t,r,o,s),tc(t,r,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function R0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mp(t,e){R0(t,e),(t=t.alternate)&&R0(t,e)}function cS(){return null}var J_=typeof reportError=="function"?reportError:function(t){console.error(t)};function gp(t){this._internalRoot=t}ru.prototype.render=gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));iu(t,e,null,null)};ru.prototype.unmount=gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){iu(null,t,null,null)}),e[rr]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&Lv(t)}};function vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function P0(){}function uS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oc(o);s.call(c)}}var o=Z_(e,i,t,0,null,!1,!1,"",P0);return t._reactRootContainer=o,t[rr]=o.current,Fa(t.nodeType===8?t.parentNode:t),Ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Oc(l);a.call(c)}}var l=pp(t,0,!1,null,null,!1,!1,"",P0);return t._reactRootContainer=l,t[rr]=l.current,Fa(t.nodeType===8?t.parentNode:t),Ms(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Oc(o);a.call(l)}}iu(e,o,t,r)}else o=uS(n,e,t,r,i);return Oc(o)}bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(Fh(e,n|1),Vn(e,Zt()),!(wt&6)&&(wo=Zt()+500,Wr()))}break;case 13:Ms(function(){var i=sr(t,1);if(i!==null){var r=Pn();Mi(i,t,1,r)}}),mp(t,1)}};Oh=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=Pn();Mi(e,t,134217728,n)}mp(t,134217728)}};Cv=function(t){if(t.tag===13){var e=Ir(t),n=sr(t,e);if(n!==null){var i=Pn();Mi(n,t,e,i)}mp(t,e)}};Rv=function(){return Dt};Pv=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};Qd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ye(90));av(i),jd(i,r)}}}break;case"textarea":cv(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};gv=up;vv=Ms;var dS={usingClientEntryPoint:!1,Events:[Qa,Js,Kc,pv,mv,up]},ea={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fS={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yv(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||cS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{jc=El.inject(fS),Fi=El}catch{}}Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;Qn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(ye(200));return lS(t,e,null,n)};Qn.createRoot=function(t,e){if(!vp(t))throw Error(ye(299));var n=!1,i="",r=J_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(t,1,!1,null,null,n,!1,i,r),t[rr]=e.current,Fa(t.nodeType===8?t.parentNode:t),new gp(e)};Qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=yv(e),t=t===null?null:t.stateNode,t};Qn.flushSync=function(t){return Ms(t)};Qn.hydrate=function(t,e,n){if(!su(e))throw Error(ye(200));return ou(null,t,e,!0,n)};Qn.hydrateRoot=function(t,e,n){if(!vp(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=J_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,r,!1,s,o),t[rr]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};Qn.render=function(t,e,n){if(!su(e))throw Error(ye(200));return ou(null,t,e,!1,n)};Qn.unmountComponentAtNode=function(t){if(!su(t))throw Error(ye(40));return t._reactRootContainer?(Ms(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Qn.unstable_batchedUpdates=up;Qn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return ou(t,e,n,!1,i)};Qn.version="18.3.1-next-f1338f8080-20240426";function Q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q_)}catch(t){console.error(t)}}Q_(),Qg.exports=Qn;var hS=Qg.exports,ex,L0=hS;ex=L0.createRoot,L0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="180",pS=0,D0=1,mS=2,tx=1,nx=2,qi=3,Br=0,Gn=1,_i=2,Fr=0,ho=1,N0=2,I0=3,U0=4,gS=5,cs=100,vS=101,_S=102,xS=103,yS=104,SS=200,MS=201,wS=202,ES=203,Nf=204,If=205,TS=206,AS=207,bS=208,CS=209,RS=210,PS=211,LS=212,DS=213,NS=214,Uf=0,Ff=1,Of=2,Eo=3,kf=4,zf=5,Bf=6,Hf=7,ix=0,IS=1,US=2,Or=0,FS=1,OS=2,kS=3,rx=4,zS=5,BS=6,HS=7,sx=300,To=301,Ao=302,Vf=303,Gf=304,au=306,kc=1e3,ps=1001,Wf=1002,wi=1003,VS=1004,Tl=1005,Ii=1006,Qu=1007,ms=1008,zi=1009,ox=1010,ax=1011,Xa=1012,xp=1013,ws=1014,er=1015,tl=1016,yp=1017,Sp=1018,ja=1020,lx=35902,cx=35899,ux=1021,dx=1022,yi=1023,Ya=1026,qa=1027,fx=1028,Mp=1029,hx=1030,wp=1031,Ep=1033,lc=33776,cc=33777,uc=33778,dc=33779,Xf=35840,jf=35841,Yf=35842,qf=35843,$f=36196,Kf=37492,Zf=37496,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,oh=37816,ah=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,vh=36285,_h=36286,GS=3200,WS=3201,px=0,XS=1,Tr="",On="srgb",bo="srgb-linear",zc="linear",Nt="srgb",Ns=7680,F0=519,jS=512,YS=513,qS=514,mx=515,$S=516,KS=517,ZS=518,JS=519,O0=35044,k0="300 es",Ui=2e3,Bc=2001;class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,xh=180/Math.PI;function nl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[t&255]+Mn[t>>8&255]+Mn[t>>16&255]+Mn[t>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function QS(t,e){return(t%e+e)%e}function td(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=E;return}if(d!==E||l!==h||c!==p||f!==_){let g=1-a;const u=l*h+c*p+f*_+d*E,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,u*m);g=Math.sin(g*R)/C,a=Math.sin(a*R)/C}const y=a*m;if(l=l*g+h*y,c=c*g+p*y,f=f*g+_*y,d=d*g+E*y,g===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-a*p,e[n+2]=c*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(z0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(z0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new O,z0=new il;class at{constructor(e,n,i,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],E=r[0],g=r[3],u=r[6],m=r[1],v=r[4],y=r[7],C=r[2],R=r[5],P=r[8];return s[0]=o*E+a*m+l*C,s[3]=o*g+a*v+l*R,s[6]=o*u+a*y+l*P,s[1]=c*E+f*m+d*C,s[4]=c*g+f*v+d*R,s[7]=c*u+f*y+d*P,s[2]=h*E+p*m+_*C,s[5]=h*g+p*v+_*R,s[8]=h*u+p*y+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=d*E,e[1]=(r*c-f*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(id.makeScale(e,n)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,n){return this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new at;function gx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eM(){const t=Hc("canvas");return t.style.display="block",t}const B0={};function $a(t){t in B0||(B0[t]=!0,console.warn(t))}function tM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const H0=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const t={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $a("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $a("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bo]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const At=nM();function nr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function po(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Is;class iM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=Hc("canvas")),Is.width=e.width,Is.height=e.height;const r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(nr(n[i]/255)*255):n[i]=nr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rM=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rd(r[o].image)):s.push(rd(r[o]))}else s=rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sM=0;const sd=new O;class Ln extends Do{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,i=ps,r=ps,s=Ii,o=ms,a=yi,l=zi,c=Ln.DEFAULT_ANISOTROPY,f=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=nl(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=sx;Ln.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],E=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(u+1)/2,R=(f+h)/4,P=(d+E)/4,D=(_+g)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=P/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-E)*(d-E)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-E)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Do{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Ln(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends oM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vx extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wi,this.minFilter=wi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wi,this.minFilter=wi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),bl.subVectors(this.max,na),Us.subVectors(e.a,na),Fs.subVectors(e.b,na),Os.subVectors(e.c,na),pr.subVectors(Fs,Us),mr.subVectors(Os,Fs),Qr.subVectors(Us,Os);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Qr.z,Qr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Qr.z,0,-Qr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Qr.y,Qr.x,0];return!od(n,Us,Fs,Os,bl)||(n=[1,0,0,0,1,0,0,0,1],!od(n,Us,Fs,Os,bl))?!1:(Cl.crossVectors(pr,mr),n=[Cl.x,Cl.y,Cl.z],od(n,Us,Fs,Os,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new O,new O,new O,new O,new O,new O,new O,new O],fi=new O,Al=new rl,Us=new O,Fs=new O,Os=new O,pr=new O,mr=new O,Qr=new O,na=new O,bl=new O,Cl=new O,es=new O;function od(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){es.fromArray(t,s);const a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),l=e.dot(es),c=n.dot(es),f=i.dot(es);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const lM=new rl,ia=new O,ad=new O;class lu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ad)),this.expandByPoint(ia.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wi=new O,ld=new O,Rl=new O,gr=new O,cd=new O,Pl=new O,ud=new O;class Ap{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ld.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Rl),a=gr.dot(this.direction),l=-gr.dot(Rl),c=gr.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const E=1/f;d*=E,h*=E,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ld).addScaledVector(Rl,h),p}intersectSphere(e,n){Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,i,r,s){cd.subVectors(n,e),Pl.subVectors(i,e),ud.crossVectors(cd,Pl);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(gr,Pl));if(l<0)return null;const c=a*this.direction.dot(cd.cross(gr));if(c<0||l+c>o)return null;const f=-a*gr.dot(ud);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,_,E,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,E,g)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,E,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=E,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,E=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,E=c*d;n[0]=h+E*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,E=c*d;n[0]=h-E*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,E=a*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+E,n[1]=l*d,n[5]=E*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=E-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-E*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+E,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=E*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,uM)}lookAt(e,n,i){const r=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),vr.crossVectors(i,jn),vr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),vr.crossVectors(i,jn)),vr.normalize(),Ll.crossVectors(jn,vr),r[0]=vr.x,r[4]=Ll.x,r[8]=jn.x,r[1]=vr.y,r[5]=Ll.y,r[9]=jn.y,r[2]=vr.z,r[6]=Ll.z,r[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],E=i[6],g=i[10],u=i[14],m=i[3],v=i[7],y=i[11],C=i[15],R=r[0],P=r[4],D=r[8],M=r[12],x=r[1],N=r[5],B=r[9],q=r[13],Q=r[2],re=r[6],V=r[10],Y=r[14],U=r[3],se=r[7],de=r[11],Te=r[15];return s[0]=o*R+a*x+l*Q+c*U,s[4]=o*P+a*N+l*re+c*se,s[8]=o*D+a*B+l*V+c*de,s[12]=o*M+a*q+l*Y+c*Te,s[1]=f*R+d*x+h*Q+p*U,s[5]=f*P+d*N+h*re+p*se,s[9]=f*D+d*B+h*V+p*de,s[13]=f*M+d*q+h*Y+p*Te,s[2]=_*R+E*x+g*Q+u*U,s[6]=_*P+E*N+g*re+u*se,s[10]=_*D+E*B+g*V+u*de,s[14]=_*M+E*q+g*Y+u*Te,s[3]=m*R+v*x+y*Q+C*U,s[7]=m*P+v*N+y*re+C*se,s[11]=m*D+v*B+y*V+C*de,s[15]=m*M+v*q+y*Y+C*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],E=e[7],g=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+E*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],E=e[13],g=e[14],u=e[15],m=d*g*c-E*h*c+E*l*p-a*g*p-d*l*u+a*h*u,v=_*h*c-f*g*c-_*l*p+o*g*p+f*l*u-o*h*u,y=f*E*c-_*d*c+_*a*p-o*E*p-f*a*u+o*d*u,C=_*d*l-f*E*l-_*a*h+o*E*h+f*a*g-o*d*g,R=n*m+i*v+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=m*P,e[1]=(E*h*s-d*g*s-E*r*p+i*g*p+d*r*u-i*h*u)*P,e[2]=(a*g*s-E*l*s+E*r*c-i*g*c-a*r*u+i*l*u)*P,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=v*P,e[5]=(f*g*s-_*h*s+_*r*p-n*g*p-f*r*u+n*h*u)*P,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*P,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(_*d*s-f*E*s-_*i*p+n*E*p+f*i*u-n*d*u)*P,e[10]=(o*E*s-_*a*s+_*i*c-n*E*c-o*i*u+n*a*u)*P,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*P,e[12]=C*P,e[13]=(f*E*r-_*d*r+_*i*h-n*E*h-f*i*g+n*d*g)*P,e[14]=(_*a*r-o*E*r-_*i*l+n*E*l+o*i*g-n*a*g)*P,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,_=s*d,E=o*f,g=o*d,u=a*d,m=l*c,v=l*f,y=l*d,C=i.x,R=i.y,P=i.z;return r[0]=(1-(E+u))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(_+v)*P,r[9]=(g-m)*P,r[10]=(1-(h+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const o=ks.set(r[4],r[5],r[6]).length(),a=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const c=1/s,f=1/o,d=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=f,hi.elements[5]*=f,hi.elements[6]*=f,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,n.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ui,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(l)_=s/(o-s),E=o*s/(o-s);else if(a===Ui)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Bc)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ui,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(l)_=1/(o-s),E=o/(o-s);else if(a===Ui)_=-2/(o-s),E=-(o+s)/(o-s);else if(a===Bc)_=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ks=new O,hi=new Bt,cM=new O(0,0,0),uM=new O(1,1,1),vr=new O,Ll=new O,jn=new O,G0=new Bt,W0=new il;class Bi{constructor(e=0,n=0,i=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const X0=new O,zs=new il,Xi=new Bt,Dl=new O,ra=new O,fM=new O,hM=new il,j0=new O(1,0,0),Y0=new O(0,1,0),q0=new O(0,0,1),$0={type:"added"},pM={type:"removed"},Bs={type:"childadded",child:null},dd={type:"childremoved",child:null};class hn extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new O,n=new Bi,i=new il,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new at}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zs.setFromAxisAngle(e,n),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,n){return zs.setFromAxisAngle(e,n),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(q0,e)}translateOnAxis(e,n){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ra,Dl,this.up):Xi.lookAt(Dl,ra,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Xi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pM),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new O,ji=new O,fd=new O,Yi=new O,Hs=new O,Vs=new O,K0=new O,hd=new O,pd=new O,md=new O,gd=new It,vd=new It,_d=new It;class xi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pi.subVectors(e,n),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pi.subVectors(r,n),ji.subVectors(i,n),fd.subVectors(e,n);const o=pi.dot(pi),a=pi.dot(ji),l=pi.dot(fd),c=ji.dot(ji),f=ji.dot(fd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,n),vd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gd,s.x),o.addScaledVector(vd,s.y),o.addScaledVector(_d,s.z),o}static isFrontFacing(e,n,i,r){return pi.subVectors(i,n),ji.subVectors(e,n),pi.cross(ji).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),pi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Hs.subVectors(r,i),Vs.subVectors(s,i),hd.subVectors(e,i);const l=Hs.dot(hd),c=Vs.dot(hd);if(l<=0&&c<=0)return n.copy(i);pd.subVectors(e,r);const f=Hs.dot(pd),d=Vs.dot(pd);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Hs,o);md.subVectors(e,s);const p=Hs.dot(md),_=Vs.dot(md);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Vs,a);const g=f*_-p*d;if(g<=0&&d-f>=0&&p-_>=0)return K0.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(K0,a);const u=1/(g+E+h);return o=E*u,a=h*u,n.copy(i).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=At.workingColorSpace){return this.r=e,this.g=n,this.b=i,At.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=At.workingColorSpace){if(e=QS(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xd(o,s,e+1/3),this.g=xd(o,s,e),this.b=xd(o,s,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=_x[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return At.workingToColorSpace(wn.copy(this),e),Math.round(ht(wn.r*255,0,255))*65536+Math.round(ht(wn.g*255,0,255))*256+Math.round(ht(wn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(wn.copy(this),n);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(wn.copy(this),n),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=On){At.workingToColorSpace(wn.copy(this),e);const n=wn.r,i=wn.g,r=wn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(Nl);const i=td(_r.h,Nl.h,n),r=td(_r.s,Nl.s,n),s=td(_r.l,Nl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new yt;yt.NAMES=_x;let mM=0;class No extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=ho,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=If,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nf&&(i.blendSrc=this.blendSrc),this.blendDst!==If&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cu extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new O,Il=new Ke;let gM=0;class ki{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=O0,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Il.fromBufferAttribute(this,n),Il.applyMatrix3(e),this.setXY(n,Il.x,Il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}}class xx extends ki{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yx extends ki{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends ki{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vM=0;const ni=new Bt,yd=new hn,Gs=new O,Yn=new rl,sa=new rl,un=new O;class pn extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?yx:xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Yn.min,sa.min),Yn.expandByPoint(un),un.addVectors(Yn.max,sa.max),Yn.expandByPoint(un)):(Yn.expandByPoint(sa.min),Yn.expandByPoint(sa.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)un.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),un.add(Gs)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,f=new O,d=new O,h=new Ke,p=new Ke,_=new Ke,E=new O,g=new O;function u(D,M,x){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(N),a[D].add(E),a[M].add(E),a[x].add(E),l[D].add(g),l[M].add(g),l[x].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let D=0,M=m.length;D<M;++D){const x=m[D],N=x.start,B=x.count;for(let q=N,Q=N+B;q<Q;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const v=new O,y=new O,C=new O,R=new O;function P(D){C.fromBufferAttribute(r,D),R.copy(C);const M=a[D];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(R,M);const N=y.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,N)}for(let D=0,M=m.length;D<M;++D){const x=m[D],N=x.start,B=x.count;for(let q=N,Q=N+B;q<Q;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ki(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),E=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new ki(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new Bt,ts=new Ap,Ul=new lu,J0=new O,Fl=new O,Ol=new O,kl=new O,Sd=new O,zl=new O,Q0=new O,Bl=new O;class ue extends hn{constructor(e=new pn,n=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Sd.fromBufferAttribute(d,e),o?zl.addScaledVector(Sd,f):zl.addScaledVector(Sd.sub(n),f))}n.add(zl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(Ul.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ul,J0)===null||ts.origin.distanceToSquared(J0)>(e.far-e.near)**2))&&(Z0.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Z0),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ts)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=v;y<C;y+=3){const R=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);r=Hl(this,u,e,i,c,f,d,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Hl(this,o,e,i,c,f,d,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=v;y<C;y+=3){const R=y,P=y+1,D=y+2;r=Hl(this,u,e,i,c,f,d,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const m=g,v=g+1,y=g+2;r=Hl(this,o,e,i,c,f,d,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function _M(t,e,n,i,r,s,o,a){let l;if(e.side===Gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function Hl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,kl);const f=_M(t,e,n,i,Fl,Ol,kl,Q0);if(f){const d=new O;xi.getBarycoord(Q0,Fl,Ol,kl,d),r&&(f.uv=xi.getInterpolatedAttribute(r,a,l,c,d,new Ke)),s&&(f.uv1=xi.getInterpolatedAttribute(s,a,l,c,d,new Ke)),o&&(f.normal=xi.getInterpolatedAttribute(o,a,l,c,d,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};xi.getNormal(Fl,Ol,kl,h.normal),f.face=h,f.barycoord=d}return f}class vn extends pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(d,2));function _(E,g,u,m,v,y,C,R,P,D,M){const x=y/P,N=C/D,B=y/2,q=C/2,Q=R/2,re=P+1,V=D+1;let Y=0,U=0;const se=new O;for(let de=0;de<V;de++){const Te=de*N-q;for(let ve=0;ve<re;ve++){const Ee=ve*x-B;se[E]=Ee*m,se[g]=Te*v,se[u]=Q,c.push(se.x,se.y,se.z),se[E]=0,se[g]=0,se[u]=R>0?1:-1,f.push(se.x,se.y,se.z),d.push(ve/P),d.push(1-de/D),Y+=1}}for(let de=0;de<D;de++)for(let Te=0;Te<P;Te++){const ve=h+Te+re*de,Ee=h+Te+re*(de+1),ae=h+(Te+1)+re*(de+1),pe=h+(Te+1)+re*de;l.push(ve,Ee,pe),l.push(Ee,ae,pe),U+=6}a.addGroup(p,U,M),p+=U,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function bn(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const r in i)e[r]=i[r]}return e}function xM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const yM={clone:Co,merge:bn};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mx extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new O,eg=new Ke,tg=new Ke;class $n extends Mx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,eg,tg),n.subVectors(tg,eg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ed*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ws=-90,Xs=1;class wM extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Ws,Xs,e,n);r.layers=this.layers,this.add(r);const s=new $n(Ws,Xs,e,n);s.layers=this.layers,this.add(s);const o=new $n(Ws,Xs,e,n);o.layers=this.layers,this.add(o);const a=new $n(Ws,Xs,e,n);a.layers=this.layers,this.add(a);const l=new $n(Ws,Xs,e,n);l.layers=this.layers,this.add(l);const c=new $n(Ws,Xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wx extends Ln{constructor(e=[],n=To,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vn(5,5,5),s=new Hr({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:Fr});s.uniforms.tEquirect.value=n;const o=new ue(r,s),a=n.minFilter;return n.minFilter===ms&&(n.minFilter=Ii),new wM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class rt extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),u=this._getHandJoint(c,E);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=n}clone(){return new Cp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AM extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wd=new O,bM=new O,CM=new at;class as{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(bM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CM.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new lu,RM=new Ke(.5,.5),Vl=new O;class Rp{constructor(e=new as,n=new as,i=new as,r=new as,s=new as,o=new as){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],_=s[8],E=s[9],g=s[10],u=s[11],m=s[12],v=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-o,p-f,u-_,C-m).normalize(),r[1].setComponents(c+o,p+f,u+_,C+m).normalize(),r[2].setComponents(c+a,p+d,u+E,C+v).normalize(),r[3].setComponents(c-a,p-d,u-E,C-v).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,u-g,C-y).normalize();else if(r[4].setComponents(c-l,p-h,u-g,C-y).normalize(),n===Ui)r[5].setComponents(c+l,p+h,u+g,C+y).normalize();else if(n===Bc)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const n=RM.distanceTo(e.center);return ns.radius=.7071067811865476+n,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yh extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new O,Gc=new O,ng=new Bt,oa=new Ap,Gl=new lu,Ed=new O,ig=new O;class rg extends hn{constructor(e=new pn,n=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vc.fromBufferAttribute(n,r-1),Gc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=s,e.ray.intersectsSphere(Gl)===!1)return;ng.copy(r).invert(),oa.copy(e.ray).applyMatrix4(ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let E=p,g=_-1;E<g;E+=c){const u=f.getX(E),m=f.getX(E+1),v=Wl(this,e,oa,l,u,m,E);v&&n.push(v)}if(this.isLineLoop){const E=f.getX(_-1),g=f.getX(p),u=Wl(this,e,oa,l,E,g,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let E=p,g=_-1;E<g;E+=c){const u=Wl(this,e,oa,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=Wl(this,e,oa,l,_-1,p,_-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Vc.fromBufferAttribute(a,r),Gc.fromBufferAttribute(a,s),n.distanceSqToSegment(Vc,Gc,Ed,ig)>i)return;Ed.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ed);if(!(c<e.near||c>e.far))return{distance:c,point:ig.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class PM extends Ln{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ex extends Ln{constructor(e,n,i=ws,r,s,o,a=wi,l=wi,c,f=Ya,d=1){if(f!==Ya&&f!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Tx extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends pn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,d=Math.PI/2*e,h=n,p=2*d+h,_=i*2+s,E=r+1,g=new O,u=new O;for(let m=0;m<=_;m++){let v=0,y=0,C=0,R=0;if(m<=i){const M=m/i,x=M*Math.PI/2;y=-f-e*Math.cos(x),C=e*Math.sin(x),R=-e*Math.cos(x),v=M*d}else if(m<=i+s){const M=(m-i)/s;y=-f+M*n,C=e,R=0,v=d+M*h}else{const M=(m-i-s)/i,x=M*Math.PI/2;y=f+e*Math.sin(x),C=e*Math.cos(x),R=e*Math.sin(x),v=d+h+M*d}const P=Math.max(0,Math.min(1,v/p));let D=0;m===0?D=.5/r:m===_&&(D=-.5/r);for(let M=0;M<=r;M++){const x=M/r,N=x*Math.PI*2,B=Math.sin(N),q=Math.cos(N);u.x=-C*q,u.y=y,u.z=C*B,a.push(u.x,u.y,u.z),g.set(-C*q,R,C*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(x+D,P)}if(m>0){const M=(m-1)*E;for(let x=0;x<r;x++){const N=M+x,B=M+x+1,q=m*E+x,Q=m*E+x+1;o.push(N,B,q),o.push(B,Q,q)}}}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class go extends pn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,f=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends pn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let _=0;const E=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function m(){const y=new O,C=new O;let R=0;const P=(n-e)/i;for(let D=0;D<=s;D++){const M=[],x=D/s,N=x*(n-e)+e;for(let B=0;B<=r;B++){const q=B/r,Q=q*l+a,re=Math.sin(Q),V=Math.cos(Q);C.x=N*re,C.y=-x*i+g,C.z=N*V,d.push(C.x,C.y,C.z),y.set(re,P,V).normalize(),h.push(y.x,y.y,y.z),p.push(q,1-x),M.push(_++)}E.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const x=E[M][D],N=E[M+1][D],B=E[M+1][D+1],q=E[M][D+1];(e>0||M!==0)&&(f.push(x,N,q),R+=3),(n>0||M!==s-1)&&(f.push(N,B,q),R+=3)}c.addGroup(u,R,0),u+=R}function v(y){const C=_,R=new Ke,P=new O;let D=0;const M=y===!0?e:n,x=y===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,g*x,0),h.push(0,x,0),p.push(.5,.5),_++;const N=_;for(let B=0;B<=r;B++){const Q=B/r*l+a,re=Math.cos(Q),V=Math.sin(Q);P.x=M*V,P.y=g*x,P.z=M*re,d.push(P.x,P.y,P.z),h.push(0,x,0),R.x=re*.5+.5,R.y=V*.5*x+.5,p.push(R.x,R.y),_++}for(let B=0;B<r;B++){const q=C+B,Q=N+B;y===!0?f.push(Q,Q+1,q):f.push(Q+1,Q,q),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fn extends rn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pp extends pn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new O,y=new O,C=new O;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],y),p(n[R+2],C),l(v,y,C,m)}function l(m,v,y,C){const R=C+1,P=[];for(let D=0;D<=R;D++){P[D]=[];const M=m.clone().lerp(y,D/R),x=v.clone().lerp(y,D/R),N=R-D;for(let B=0;B<=N;B++)B===0&&D===R?P[D][B]=M:P[D][B]=M.clone().lerp(x,B/N)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const x=Math.floor(M/2);M%2===0?(h(P[D][x+1]),h(P[D+1][x]),h(P[D][x])):(h(P[D][x+1]),h(P[D+1][x+1]),h(P[D+1][x]))}}function c(m){const v=new O;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(m),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function f(){const m=new O;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const y=g(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(y,1-C)}_(),d()}function d(){for(let m=0;m<o.length;m+=6){const v=o[m+0],y=o[m+2],C=o[m+4],R=Math.max(v,y,C),P=Math.min(v,y,C);R>.9&&P<.1&&(v<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const y=m*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const m=new O,v=new O,y=new O,C=new O,R=new Ke,P=new Ke,D=new Ke;for(let M=0,x=0;M<s.length;M+=9,x+=6){m.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),R.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),C.copy(m).add(v).add(y).divideScalar(3);const N=g(C);E(R,x+0,m,N),E(P,x+2,v,N),E(D,x+4,y,N)}}function E(m,v,y,C){C<0&&m.x===1&&(o[v]=m.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.vertices,e.indices,e.radius,e.details)}}class Kt extends Pp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kt(e.radius,e.detail)}}class lr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ke:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new O,r=[],s=[],o=[],a=new O,l=new Bt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ax extends lr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ke){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*d+this.aX,c=h*d+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class LM extends Ax{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Xl=new O,Td=new Lp,Ad=new Lp,bd=new Lp;class Sh extends lr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Xl.subVectors(r[0],r[1]).add(r[0]),c=Xl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Xl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);E<1e-4&&(E=1),_<1e-4&&(_=E),g<1e-4&&(g=E),Td.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,_,E,g),Ad.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,_,E,g),bd.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,_,E,g)}else this.curveType==="catmullrom"&&(Td.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),Ad.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),bd.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(Td.calc(l),Ad.calc(l),bd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function DM(t,e){const n=1-t;return n*n*e}function NM(t,e){return 2*(1-t)*t*e}function IM(t,e){return t*t*e}function Aa(t,e,n,i){return DM(t,e)+NM(t,n)+IM(t,i)}function UM(t,e){const n=1-t;return n*n*n*e}function FM(t,e){const n=1-t;return 3*n*n*t*e}function OM(t,e){return 3*(1-t)*t*t*e}function kM(t,e){return t*t*t*e}function ba(t,e,n,i,r){return UM(t,e)+FM(t,n)+OM(t,i)+kM(t,r)}class zM extends lr{constructor(e=new Ke,n=new Ke,i=new Ke,r=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class BM extends lr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y),ba(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HM extends lr{constructor(e=new Ke,n=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ke){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VM extends lr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GM extends lr{constructor(e=new Ke,n=new Ke,i=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bx extends lr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y),Aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WM extends lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ke){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(sg(a,l.x,c.x,f.x,d.x),sg(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ke().fromArray(r))}return this}}var XM=Object.freeze({__proto__:null,ArcCurve:LM,CatmullRomCurve3:Sh,CubicBezierCurve:zM,CubicBezierCurve3:BM,EllipseCurve:Ax,LineCurve:HM,LineCurve3:VM,QuadraticBezierCurve:GM,QuadraticBezierCurve3:bx,SplineCurve:WM});class Zi extends pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],E=[],g=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const y=v*d-s;_.push(y,-m,0),E.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,y=m+c*(u+1),C=m+1+c*(u+1),R=m+1+c*u;p.push(v,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(E,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cn extends pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new O,h=new O,p=[],_=[],E=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const R=C/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),E.push(h.x,h.y,h.z),g.push(R+y,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],y=f[u][m],C=f[u+1][m],R=f[u+1][m+1];(u!==0||o>0)&&p.push(v,y,R),(u!==i-1||l<Math.PI)&&p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(E,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nn extends pn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new O,d=new O,h=new O;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const E=_/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(E),d.y=(e+n*Math.cos(g))*Math.sin(E),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),f.x=e*Math.cos(E),f.y=e*Math.sin(E),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const E=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(E,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wc extends pn{constructor(e=new bx(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new Ke;let f=new O;const d=[],h=[],p=[],_=[];E(),this.setIndex(_),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function E(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){f=e.getPointAt(v/n,f);const y=o.normals[v],C=o.binormals[v];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,D=Math.sin(P),M=-Math.cos(P);l.x=M*y.x+D*C.x,l.y=M*y.y+D*C.y,l.z=M*y.z+D*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const C=(r+1)*(v-1)+(y-1),R=(r+1)*v+(y-1),P=(r+1)*v+y,D=(r+1)*(v-1)+y;_.push(C,R,D),_.push(R,P,D)}}function m(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wc(new XM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class St extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jM extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dp extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class qM extends Dp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Cd=new Bt,og=new O,ag=new O;class Cx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lg=new Bt,aa=new O,Rd=new O;class $M extends Cx{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(aa),Rd.copy(i.position),Rd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Rd),i.updateMatrixWorld(),r.makeTranslation(-aa.x,-aa.y,-aa.z),lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg,i.coordinateSystem,i.reversedDepth)}}class la extends Dp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rx extends Mx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class KM extends Cx{constructor(){super(new Rx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends Dp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ug=new Bt;class JM{constructor(e,n,i=0,r=1/0){this.ray=new Ap(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ug),this}intersectObject(e,n=!0,i=[]){return Mh(e,this,i,n),i.sort(dg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Mh(e[r],this,i,n);return i.sort(dg),i}}function dg(t,e){return t.distance-e.distance}function Mh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Mh(s[o],e,n,!0)}}function fg(t,e,n,i){const r=QM(i);switch(n){case ux:return t*e;case fx:return t*e/r.components*r.byteLength;case Mp:return t*e/r.components*r.byteLength;case hx:return t*e*2/r.components*r.byteLength;case wp:return t*e*2/r.components*r.byteLength;case dx:return t*e*3/r.components*r.byteLength;case yi:return t*e*4/r.components*r.byteLength;case Ep:return t*e*4/r.components*r.byteLength;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:case qf:return Math.max(t,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QM(t){switch(t){case zi:case ox:return{byteLength:1,components:1};case Xa:case ax:case tl:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case ws:case xp:case er:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function e2(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],E=d[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++h,d[h]=E)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const E=d[p];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n2=`#ifdef USE_ALPHAHASH
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
#endif`,i2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a2=`#ifdef USE_AOMAP
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
#endif`,l2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c2=`#ifdef USE_BATCHING
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
#endif`,u2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p2=`#ifdef USE_IRIDESCENCE
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
#endif`,m2=`#ifdef USE_BUMPMAP
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E2=`#define PI 3.141592653589793
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
} // validated`,T2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A2=`vec3 transformedNormal = objectNormal;
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
#endif`,b2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L2="gl_FragColor = linearToOutputTexel( gl_FragColor );",D2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N2=`#ifdef USE_ENVMAP
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
#endif`,I2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U2=`#ifdef USE_ENVMAP
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
#endif`,F2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V2=`#ifdef USE_GRADIENTMAP
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
}`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j2=`uniform bool receiveShadow;
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
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J2=`PhysicalMaterial material;
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
#endif`,Q2=`struct PhysicalMaterial {
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
}`,ew=`
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
#endif`,tw=`#if defined( RE_IndirectDiffuse )
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
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uw=`#if defined( USE_POINTS_UV )
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
#endif`,dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gw=`#ifdef USE_MORPHTARGETS
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
#endif`,vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ww=`#ifdef USE_NORMALMAP
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
#endif`,Ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zw=`float getShadowMask() {
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
}`,Bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hw=`#ifdef USE_SKINNING
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
#endif`,Vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gw=`#ifdef USE_SKINNING
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
#endif`,Ww=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qw=`#ifdef USE_TRANSMISSION
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
#endif`,$w=`#ifdef USE_TRANSMISSION
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`#include <common>
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
}`,aE=`#if DEPTH_PACKING == 3200
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
}`,lE=`#define DISTANCE
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
}`,cE=`#define DISTANCE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`uniform float scale;
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
}`,hE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#define LAMBERT
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
}`,vE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,xE=`#define MATCAP
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
}`,yE=`#define NORMAL
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
}`,SE=`#define NORMAL
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
}`,ME=`#define PHONG
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
}`,wE=`#define PHONG
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
}`,EE=`#define STANDARD
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
}`,TE=`#define STANDARD
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
}`,AE=`#define TOON
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
}`,bE=`#define TOON
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
}`,CE=`uniform float size;
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
}`,RE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,LE=`uniform vec3 color;
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
}`,DE=`uniform float rotation;
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
}`,NE=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:t2,alphahash_pars_fragment:n2,alphamap_fragment:i2,alphamap_pars_fragment:r2,alphatest_fragment:s2,alphatest_pars_fragment:o2,aomap_fragment:a2,aomap_pars_fragment:l2,batching_pars_vertex:c2,batching_vertex:u2,begin_vertex:d2,beginnormal_vertex:f2,bsdfs:h2,iridescence_fragment:p2,bumpmap_pars_fragment:m2,clipping_planes_fragment:g2,clipping_planes_pars_fragment:v2,clipping_planes_pars_vertex:_2,clipping_planes_vertex:x2,color_fragment:y2,color_pars_fragment:S2,color_pars_vertex:M2,color_vertex:w2,common:E2,cube_uv_reflection_fragment:T2,defaultnormal_vertex:A2,displacementmap_pars_vertex:b2,displacementmap_vertex:C2,emissivemap_fragment:R2,emissivemap_pars_fragment:P2,colorspace_fragment:L2,colorspace_pars_fragment:D2,envmap_fragment:N2,envmap_common_pars_fragment:I2,envmap_pars_fragment:U2,envmap_pars_vertex:F2,envmap_physical_pars_fragment:Y2,envmap_vertex:O2,fog_vertex:k2,fog_pars_vertex:z2,fog_fragment:B2,fog_pars_fragment:H2,gradientmap_pars_fragment:V2,lightmap_pars_fragment:G2,lights_lambert_fragment:W2,lights_lambert_pars_fragment:X2,lights_pars_begin:j2,lights_toon_fragment:q2,lights_toon_pars_fragment:$2,lights_phong_fragment:K2,lights_phong_pars_fragment:Z2,lights_physical_fragment:J2,lights_physical_pars_fragment:Q2,lights_fragment_begin:ew,lights_fragment_maps:tw,lights_fragment_end:nw,logdepthbuf_fragment:iw,logdepthbuf_pars_fragment:rw,logdepthbuf_pars_vertex:sw,logdepthbuf_vertex:ow,map_fragment:aw,map_pars_fragment:lw,map_particle_fragment:cw,map_particle_pars_fragment:uw,metalnessmap_fragment:dw,metalnessmap_pars_fragment:fw,morphinstance_vertex:hw,morphcolor_vertex:pw,morphnormal_vertex:mw,morphtarget_pars_vertex:gw,morphtarget_vertex:vw,normal_fragment_begin:_w,normal_fragment_maps:xw,normal_pars_fragment:yw,normal_pars_vertex:Sw,normal_vertex:Mw,normalmap_pars_fragment:ww,clearcoat_normal_fragment_begin:Ew,clearcoat_normal_fragment_maps:Tw,clearcoat_pars_fragment:Aw,iridescence_pars_fragment:bw,opaque_fragment:Cw,packing:Rw,premultiplied_alpha_fragment:Pw,project_vertex:Lw,dithering_fragment:Dw,dithering_pars_fragment:Nw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Ow,shadowmap_vertex:kw,shadowmask_pars_fragment:zw,skinbase_vertex:Bw,skinning_pars_vertex:Hw,skinning_vertex:Vw,skinnormal_vertex:Gw,specularmap_fragment:Ww,specularmap_pars_fragment:Xw,tonemapping_fragment:jw,tonemapping_pars_fragment:Yw,transmission_fragment:qw,transmission_pars_fragment:$w,uv_pars_fragment:Kw,uv_pars_vertex:Zw,uv_vertex:Jw,worldpos_vertex:Qw,background_vert:eE,background_frag:tE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:rE,cube_frag:sE,depth_vert:oE,depth_frag:aE,distanceRGBA_vert:lE,distanceRGBA_frag:cE,equirect_vert:uE,equirect_frag:dE,linedashed_vert:fE,linedashed_frag:hE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:vE,meshmatcap_vert:_E,meshmatcap_frag:xE,meshnormal_vert:yE,meshnormal_frag:SE,meshphong_vert:ME,meshphong_frag:wE,meshphysical_vert:EE,meshphysical_frag:TE,meshtoon_vert:AE,meshtoon_frag:bE,points_vert:CE,points_frag:RE,shadow_vert:PE,shadow_frag:LE,sprite_vert:DE,sprite_frag:NE},De={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Di={basic:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:bn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:bn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:bn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:bn([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:bn([De.lights,De.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const jl={r:0,b:0,g:0},is=new Bi,IE=new Bt;function UE(t,e,n,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function E(v){let y=!1;const C=_(v);C===null?u(a,l):C&&C.isColor&&(u(C,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===au)?(f===void 0&&(f=new ue(new vn(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:Co(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),is.copy(y.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(IE.makeRotationFromEuler(is)),f.material.toneMapped=At.getTransfer(C.colorSpace)!==Nt,(d!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ue(new Zi(2,2),new Hr({name:"BackgroundMaterial",uniforms:Co(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=At.getTransfer(C.colorSpace)!==Nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(jl,Sx(t)),i.buffers.color.setClear(jl.r,jl.g,jl.b,y,o)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:E,addToRenderList:g,dispose:m}}function FE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,N,B,q,Q){let re=!1;const V=d(q,B,N);s!==V&&(s=V,c(s.object)),re=p(x,q,B,Q),re&&_(x,q,B,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,y(x,N,B,q),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function d(x,N,B){const q=B.wireframe===!0;let Q=i[x.id];Q===void 0&&(Q={},i[x.id]=Q);let re=Q[N.id];re===void 0&&(re={},Q[N.id]=re);let V=re[q];return V===void 0&&(V=h(l()),re[q]=V),V}function h(x){const N=[],B=[],q=[];for(let Q=0;Q<n;Q++)N[Q]=0,B[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:q,object:x,attributes:{},index:null}}function p(x,N,B,q){const Q=s.attributes,re=N.attributes;let V=0;const Y=B.getAttributes();for(const U in Y)if(Y[U].location>=0){const de=Q[U];let Te=re[U];if(Te===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;V++}return s.attributesNum!==V||s.index!==q}function _(x,N,B,q){const Q={},re=N.attributes;let V=0;const Y=B.getAttributes();for(const U in Y)if(Y[U].location>=0){let de=re[U];de===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),Q[U]=Te,V++}s.attributes=Q,s.attributesNum=V,s.index=q}function E(){const x=s.newAttributes;for(let N=0,B=x.length;N<B;N++)x[N]=0}function g(x){u(x,0)}function u(x,N){const B=s.newAttributes,q=s.enabledAttributes,Q=s.attributeDivisors;B[x]=1,q[x]===0&&(t.enableVertexAttribArray(x),q[x]=1),Q[x]!==N&&(t.vertexAttribDivisor(x,N),Q[x]=N)}function m(){const x=s.newAttributes,N=s.enabledAttributes;for(let B=0,q=N.length;B<q;B++)N[B]!==x[B]&&(t.disableVertexAttribArray(B),N[B]=0)}function v(x,N,B,q,Q,re,V){V===!0?t.vertexAttribIPointer(x,N,B,Q,re):t.vertexAttribPointer(x,N,B,q,Q,re)}function y(x,N,B,q){E();const Q=q.attributes,re=B.getAttributes(),V=N.defaultAttributeValues;for(const Y in re){const U=re[Y];if(U.location>=0){let se=Q[Y];if(se===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const de=se.normalized,Te=se.itemSize,ve=e.get(se);if(ve===void 0)continue;const Ee=ve.buffer,ae=ve.type,pe=ve.bytesPerElement,oe=ae===t.INT||ae===t.UNSIGNED_INT||se.gpuType===xp;if(se.isInterleavedBufferAttribute){const fe=se.data,Ue=fe.stride,Ze=se.offset;if(fe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<U.locationSize;Xe++)u(U.location+Xe,fe.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Xe=0;Xe<U.locationSize;Xe++)g(U.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Xe=0;Xe<U.locationSize;Xe++)v(U.location+Xe,Te/U.locationSize,ae,de,Ue*pe,(Ze+Te/U.locationSize*Xe)*pe,oe)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)u(U.location+fe,se.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let fe=0;fe<U.locationSize;fe++)v(U.location+fe,Te/U.locationSize,ae,de,Te*pe,Te/U.locationSize*fe*pe,oe)}}else if(V!==void 0){const de=V[Y];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(U.location,de);break;case 3:t.vertexAttrib3fv(U.location,de);break;case 4:t.vertexAttrib4fv(U.location,de);break;default:t.vertexAttrib1fv(U.location,de)}}}}m()}function C(){D();for(const x in i){const N=i[x];for(const B in N){const q=N[B];for(const Q in q)f(q[Q].object),delete q[Q];delete N[B]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const N=i[x.id];for(const B in N){const q=N[B];for(const Q in q)f(q[Q].object),delete q[Q];delete N[B]}delete i[x.id]}function P(x){for(const N in i){const B=i[N];if(B[x.id]===void 0)continue;const q=B[x.id];for(const Q in q)f(q[Q].object),delete q[Q];delete B[x.id]}}function D(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function OE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let E=0;E<d;E++)_+=f[E]*h[E];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==yi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==er&&!D)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function zE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new as,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,v=m*4;let y=u.clippingState||null;l.value=y,y=f(_,h,v,p);for(let C=0;C!==v;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const u=p+E*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,y=p;v!==E;++v,y+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function BE(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=To:a===Gf&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new EM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const so=4,hg=[.125,.215,.35,.446,.526,.582],us=20,Pd=new Rx,pg=new yt;let Ld=null,Dd=0,Nd=0,Id=!1;const ls=(1+Math.sqrt(5))/2,js=1/ls,mg=[new O(-ls,js,0),new O(ls,js,0),new O(-js,0,ls),new O(js,0,ls),new O(0,ls,-js),new O(0,ls,js),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],HE=new O;class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=HE}=s;Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Dd,Nd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===To||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:tl,format:yi,colorSpace:bo,depthBuffer:!1},r=vg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VE(s)),this._blurMaterial=GE(s,e,n)}return r}_compileMaterial(e){const n=new ue(this._lodPlanes[0],e);this._renderer.compile(n,Pd)}_sceneToCubeUV(e,n,i,r,s){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(pg),d.toneMapping=Or,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const E=new cu({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new ue(new vn,E);let u=!1;const m=e.background;m?m.isColor&&(E.color.copy(m),e.background=null,u=!0):(E.color.copy(pg),u=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const C=this._cubeSize;Yl(r,y*C,v>2?C:0,C,C),d.setRenderTarget(r),u&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===To||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mg[(r-s-1)%mg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ue(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*us-1),E=s/_,g=isFinite(s)?1+Math.floor(f*E):us;g>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const u=[];let m=0;for(let P=0;P<us;++P){const D=P/E,M=Math.exp(-D*D/2);u.push(M),P===0?m+=M:P<g&&(m+=2*M)}for(let P=0;P<u.length;P++)u[P]=u[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-so?r-v+so:0),R=4*(this._cubeSize-y);Yl(n,C,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Pd)}}function VE(t){const e=[],n=[],i=[];let r=t;const s=t-so+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-so?l=hg[o-t+so-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,E=3,g=2,u=1,m=new Float32Array(E*_*p),v=new Float32Array(g*_*p),y=new Float32Array(u*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,D=R>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];m.set(M,E*_*R),v.set(h,g*_*R);const x=[R,R,R,R,R,R];y.set(x,u*_*R)}const C=new pn;C.setAttribute("position",new ki(m,E)),C.setAttribute("uv",new ki(v,g)),C.setAttribute("faceIndex",new ki(y,u)),e.push(C),r>so&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vg(t,e,n){const i=new Es(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GE(t,e,n){const i=new Float32Array(us),r=new O(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function _g(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function xg(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function WE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,f=l===To||l===Ao;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new gg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$a("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let E=0;if(p!==null){const m=p.array;E=p.version;for(let v=0,y=m.length;v<y;v+=3){const C=m[v+0],R=m[v+1],P=m[v+2];h.push(C,R,R,P,P,C)}}else if(_!==void 0){const m=_.array;E=_.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const C=v+0,R=v+1,P=v+2;h.push(C,R,R,P,P,C)}}else return;const g=new(gx(h)?yx:xx)(h,1);g.version=E;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function YE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function d(h,p,_,E){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],E[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,E,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*E[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function qE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $E(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),E===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*R*4*d),D=new vx(P,C,R,d);D.type=er,D.needsUpdate=!0;const M=y*4;for(let N=0;N<d;N++){const B=u[N],q=m[N],Q=v[N],re=C*R*4*N;for(let V=0;V<B.count;V++){const Y=V*M;_===!0&&(r.fromBufferAttribute(B,V),P[re+Y+0]=r.x,P[re+Y+1]=r.y,P[re+Y+2]=r.z,P[re+Y+3]=0),E===!0&&(r.fromBufferAttribute(q,V),P[re+Y+4]=r.x,P[re+Y+5]=r.y,P[re+Y+6]=r.z,P[re+Y+7]=0),g===!0&&(r.fromBufferAttribute(Q,V),P[re+Y+8]=r.x,P[re+Y+9]=r.y,P[re+Y+10]=r.z,P[re+Y+11]=Q.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new Ke(C,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function KE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Lx=new Ln,yg=new Ex(1,1),Dx=new vx,Nx=new aM,Ix=new wx,Sg=[],Mg=[],wg=new Float32Array(16),Eg=new Float32Array(9),Tg=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sg[r];if(s===void 0&&(s=new Float32Array(r),Sg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function an(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ln(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=Mg[e];n===void 0&&(n=new Int32Array(e),Mg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2fv(this.addr,e),ln(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;t.uniform3fv(this.addr,e),ln(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4fv(this.addr,e),ln(n,e)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;Tg.set(i),t.uniformMatrix2fv(this.addr,!1,Tg),ln(n,i)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;Eg.set(i),t.uniformMatrix3fv(this.addr,!1,Eg),ln(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;wg.set(i),t.uniformMatrix4fv(this.addr,!1,wg),ln(n,i)}}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2iv(this.addr,e),ln(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3iv(this.addr,e),ln(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4iv(this.addr,e),ln(n,e)}}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2uiv(this.addr,e),ln(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3uiv(this.addr,e),ln(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4uiv(this.addr,e),ln(n,e)}}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yg.compareFunction=mx,s=yg):s=Lx,n.setTexture2D(e||s,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nx,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ix,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dx,r)}function gT(t){switch(t){case 5126:return ZE;case 35664:return JE;case 35665:return QE;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(t,e){t.uniform1fv(this.addr,e)}function _T(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function xT(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function yT(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function ST(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MT(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wT(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ET(t,e){t.uniform1iv(this.addr,e)}function TT(t,e){t.uniform2iv(this.addr,e)}function AT(t,e){t.uniform3iv(this.addr,e)}function bT(t,e){t.uniform4iv(this.addr,e)}function CT(t,e){t.uniform1uiv(this.addr,e)}function RT(t,e){t.uniform2uiv(this.addr,e)}function PT(t,e){t.uniform3uiv(this.addr,e)}function LT(t,e){t.uniform4uiv(this.addr,e)}function DT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Lx,s[o])}function NT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Nx,s[o])}function IT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ix,s[o])}function UT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Dx,s[o])}function FT(t){switch(t){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return wT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return bT;case 5125:return CT;case 36294:return RT;case 36295:return PT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gT(n.type)}}class kT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FT(n.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Ag(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),o=Ud.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ag(n,c===void 0?new OT(a,t,e):new kT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new zT(a),Ag(n,d)),n=d}}}class fc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);BT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const HT=37297;let VT=0;function GT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Cg=new at;function WT(t){At._getMatrix(Cg,At.workingColorSpace,t);const e=`mat3( ${Cg.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(t)){case zc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+GT(t.getShaderSource(e),a)}else return s}function XT(t,e){const n=WT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jT(t,e){let n;switch(e){case FS:n="Linear";break;case OS:n="Reinhard";break;case kS:n="Cineon";break;case rx:n="ACESFilmic";break;case BS:n="AgX";break;case HS:n="Neutral";break;case zS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ql=new O;function YT(){At.getLuminanceCoefficients(ql);const t=ql.x.toFixed(4),e=ql.y.toFixed(4),n=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function $T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ga(t){return t!==""}function Pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(t){return t.replace(ZT,QT)}const JT=new Map;function QT(t,e){let n=ct[e];if(n===void 0){const i=JT.get(e);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wh(n)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(t){return t.replace(eA,tA)}function tA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function nA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case To:case Ao:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case US:e="ENVMAP_BLENDING_ADD";break}return e}function oA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=nA(n),c=iA(n),f=rA(n),d=sA(n),h=oA(n),p=qT(n),_=$T(s),E=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ga).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ga).join(`
`),u.length>0&&(u+=`
`)):(g=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),u=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Or?"#define TONE_MAPPING":"",n.toneMapping!==Or?ct.tonemapping_pars_fragment:"",n.toneMapping!==Or?jT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,XT("linearToOutputTexel",n.outputColorSpace),YT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),o=wh(o),o=Pg(o,n),o=Lg(o,n),a=wh(a),a=Pg(a,n),a=Lg(a,n),o=Dg(o),a=Dg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,y=m+u+a,C=bg(r,r.VERTEX_SHADER,v),R=bg(r,r.FRAGMENT_SHADER,y);r.attachShader(E,C),r.attachShader(E,R),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(N){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(C)||"",Q=r.getShaderInfoLog(R)||"",re=B.trim(),V=q.trim(),Y=Q.trim();let U=!0,se=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,C,R);else{const de=Rg(r,C,"vertex"),Te=Rg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+re+`
`+de+`
`+Te)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(V===""||Y==="")&&(se=!1);se&&(N.diagnostics={runnable:U,programLog:re,vertexShader:{log:V,prefix:g},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(C),r.deleteShader(R),D=new fc(r,E),M=KT(r,E)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(E,HT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=R,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uA(e),n.set(e,i)),i}}class uA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function dA(t,e,n,i,r,s,o){const a=new bp,l=new cA,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,x,N,B,q){const Q=B.fog,re=q.geometry,V=M.isMeshStandardMaterial?B.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||V),U=Y&&Y.mapping===au?Y.image.height:null,se=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const de=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Te=de!==void 0?de.length:0;let ve=0;re.morphAttributes.position!==void 0&&(ve=1),re.morphAttributes.normal!==void 0&&(ve=2),re.morphAttributes.color!==void 0&&(ve=3);let Ee,ae,pe,oe;if(se){const lt=Di[se];Ee=lt.vertexShader,ae=lt.fragmentShader}else Ee=M.vertexShader,ae=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const fe=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),Ze=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,Qe=!!M.map,_t=!!M.matcap,F=!!Y,Pt=!!M.aoMap,it=!!M.lightMap,et=!!M.bumpMap,k=!!M.normalMap,be=!!M.displacementMap,ee=!!M.emissiveMap,ne=!!M.metalnessMap,qe=!!M.roughnessMap,Ve=M.anisotropy>0,L=M.clearcoat>0,T=M.dispersion>0,W=M.iridescence>0,Z=M.sheen>0,me=M.transmission>0,te=Ve&&!!M.anisotropyMap,Re=L&&!!M.clearcoatMap,Se=L&&!!M.clearcoatNormalMap,je=L&&!!M.clearcoatRoughnessMap,Ye=W&&!!M.iridescenceMap,we=W&&!!M.iridescenceThicknessMap,Ne=Z&&!!M.sheenColorMap,tt=Z&&!!M.sheenRoughnessMap,We=!!M.specularMap,Pe=!!M.specularColorMap,st=!!M.specularIntensityMap,z=me&&!!M.transmissionMap,xe=me&&!!M.thicknessMap,Ae=!!M.gradientMap,Fe=!!M.alphaMap,_e=M.alphaTest>0,he=!!M.alphaHash,Be=!!M.extensions;let ot=Or;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ot=t.toneMapping);const bt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ee,fragmentShader:ae,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&q.instanceColor!==null,instancingMorph:Ze&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:bo,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:_t,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:U,aoMap:Pt,lightMap:it,bumpMap:et,normalMap:k,displacementMap:h&&be,emissiveMap:ee,normalMapObjectSpace:k&&M.normalMapType===XS,normalMapTangentSpace:k&&M.normalMapType===px,metalnessMap:ne,roughnessMap:qe,anisotropy:Ve,anisotropyMap:te,clearcoat:L,clearcoatMap:Re,clearcoatNormalMap:Se,clearcoatRoughnessMap:je,dispersion:T,iridescence:W,iridescenceMap:Ye,iridescenceThicknessMap:we,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:tt,specularMap:We,specularColorMap:Pe,specularIntensityMap:st,transmission:me,transmissionMap:z,thicknessMap:xe,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===ho&&M.alphaToCoverage===!1,alphaMap:Fe,alphaTest:_e,alphaHash:he,combine:M.combine,mapUv:Qe&&E(M.map.channel),aoMapUv:Pt&&E(M.aoMap.channel),lightMapUv:it&&E(M.lightMap.channel),bumpMapUv:et&&E(M.bumpMap.channel),normalMapUv:k&&E(M.normalMap.channel),displacementMapUv:be&&E(M.displacementMap.channel),emissiveMapUv:ee&&E(M.emissiveMap.channel),metalnessMapUv:ne&&E(M.metalnessMap.channel),roughnessMapUv:qe&&E(M.roughnessMap.channel),anisotropyMapUv:te&&E(M.anisotropyMap.channel),clearcoatMapUv:Re&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&E(M.sheenRoughnessMap.channel),specularMapUv:We&&E(M.specularMap.channel),specularColorMapUv:Pe&&E(M.specularColorMap.channel),specularIntensityMapUv:st&&E(M.specularIntensityMap.channel),transmissionMapUv:z&&E(M.transmissionMap.channel),thicknessMapUv:xe&&E(M.thicknessMap.channel),alphaMapUv:Fe&&E(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(k||Ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!re.attributes.uv&&(Qe||Fe),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:q.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&At.getTransfer(M.map.colorSpace)===Nt,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&At.getTransfer(M.emissiveMap.colorSpace)===Nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_i,flipSided:M.side===Gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)x.push(N),x.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(m(x,M),v(x,M),x.push(t.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function m(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const x=_[M.type];let N;if(x){const B=Di[x];N=yM.clone(B.uniforms)}else N=M.uniforms;return N}function C(M,x){let N;for(let B=0,q=f.length;B<q;B++){const Q=f[B];if(Q.cacheKey===x){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new aA(t,x,M,s),f.push(N)),N}function R(M){if(--M.usedTimes===0){const x=f.indexOf(M);f[x]=f[f.length-1],f.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:f,dispose:D}}function fA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ig(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ug(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,E,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:E,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=E,u.group=g),e++,u}function a(d,h,p,_,E,g){const u=o(d,h,p,_,E,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,E,g){const u=o(d,h,p,_,E,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||hA),i.length>1&&i.sort(h||Ig),r.length>1&&r.sort(h||Ig)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function pA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ug,t.set(i,[o])):r>=s.length?(o=new Ug,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new yt};break;case"SpotLight":n={position:new O,direction:new O,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vA=0;function _A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xA(t){const e=new mA,n=gA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Bt,o=new Bt;function a(c){let f=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,E=0,g=0,u=0,m=0,v=0,y=0,C=0,R=0,P=0;c.sort(_A);for(let M=0,x=c.length;M<x;M++){const N=c[M],B=N.color,q=N.intensity,Q=N.distance,re=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=B.r*q,d+=B.g*q,h+=B.b*q;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],q);P++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=V,p++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(B).multiplyScalar(q),V.distance=Q,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[E]=V;const Y=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,Y.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[E]=Y.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[E]=U,i.spotShadowMap[E]=re,y++}E++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(B).multiplyScalar(q),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=V,g++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){const Y=N.shadow,U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=N.shadow.matrix,v++}i.point[_]=V,_++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(q),V.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[u]=V,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==E||D.rectAreaLength!==g||D.hemiLength!==u||D.numDirectionalShadows!==m||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=p,D.pointLength=_,D.spotLength=E,D.rectAreaLength=g,D.hemiLength=u,D.numDirectionalShadows=m,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=P,i.version=vA++)}function l(c,f){let d=0,h=0,p=0,_=0,E=0;const g=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function Fg(t){const e=new xA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fg(t),e.set(r,[a])):s>=o.length?(a=new Fg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
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
}`;function wA(t,e,n){let i=new Rp;const r=new Ke,s=new Ke,o=new It,a=new jM({depthPacking:WS}),l=new YM,c={},f=n.maxTextureSize,d={[Br]:Gn,[Gn]:Br,[_i]:_i},h=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ue(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let u=this.type;this.render=function(R,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),x=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Fr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=u!==qi&&this.type===qi,Q=u===qi&&this.type!==qi;for(let re=0,V=R.length;re<V;re++){const Y=R[re],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const se=U.getFrameExtents();if(r.multiply(se),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/se.x),r.x=s.x*se.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/se.y),r.y=s.y*se.y,U.mapSize.y=s.y)),U.map===null||q===!0||Q===!0){const Te=this.type!==qi?{minFilter:wi,magFilter:wi}:{};U.map!==null&&U.map.dispose(),U.map=new Es(r.x,r.y,Te),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const de=U.getViewportCount();for(let Te=0;Te<de;Te++){const ve=U.getViewport(Te);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),B.viewport(o),U.updateMatrices(Y,Te),i=U.getFrustum(),y(P,D,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===qi&&m(U,D),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(M,x,N)};function m(R,P){const D=e.update(E);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Es(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,D,h,E,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,D,p,E,null)}function v(R,P,D,M){let x=null;const N=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)x=N;else if(x=D.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=x.uuid,q=P.uuid;let Q=c[B];Q===void 0&&(Q={},c[B]=Q);let re=Q[q];re===void 0&&(re=x.clone(),Q[q]=re,P.addEventListener("dispose",C)),x=re}if(x.visible=P.visible,x.wireframe=P.wireframe,M===qi?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=t.properties.get(x);B.light=D}return x}function y(R,P,D,M,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===qi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const q=e.update(R),Q=R.material;if(Array.isArray(Q)){const re=q.groups;for(let V=0,Y=re.length;V<Y;V++){const U=re[V],se=Q[U.materialIndex];if(se&&se.visible){const de=v(R,se,M,x);R.onBeforeShadow(t,R,P,D,q,de,U),t.renderBufferDirect(D,null,q,de,R,U),R.onAfterShadow(t,R,P,D,q,de,U)}}}else if(Q.visible){const re=v(R,Q,M,x);R.onBeforeShadow(t,R,P,D,q,re,null),t.renderBufferDirect(D,null,q,re,R,null),R.onAfterShadow(t,R,P,D,q,re,null)}}const B=R.children;for(let q=0,Q=B.length;q<Q;q++)y(B[q],P,D,M,x)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const M=c[D],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const EA={[Uf]:Ff,[Of]:Bf,[kf]:Hf,[Eo]:zf,[Ff]:Uf,[Bf]:Of,[Hf]:kf,[zf]:Eo};function TA(t,e){function n(){let z=!1;const xe=new It;let Ae=null;const Fe=new It(0,0,0,0);return{setMask:function(_e){Ae!==_e&&!z&&(t.colorMask(_e,_e,_e,_e),Ae=_e)},setLocked:function(_e){z=_e},setClear:function(_e,he,Be,ot,bt){bt===!0&&(_e*=ot,he*=ot,Be*=ot),xe.set(_e,he,Be,ot),Fe.equals(xe)===!1&&(t.clearColor(_e,he,Be,ot),Fe.copy(xe))},reset:function(){z=!1,Ae=null,Fe.set(-1,0,0,0)}}}function i(){let z=!1,xe=!1,Ae=null,Fe=null,_e=null;return{setReversed:function(he){if(xe!==he){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),xe=he;const ot=_e;_e=null,this.setClear(ot)}},getReversed:function(){return xe},setTest:function(he){he?fe(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(he){Ae!==he&&!z&&(t.depthMask(he),Ae=he)},setFunc:function(he){if(xe&&(he=EA[he]),Fe!==he){switch(he){case Uf:t.depthFunc(t.NEVER);break;case Ff:t.depthFunc(t.ALWAYS);break;case Of:t.depthFunc(t.LESS);break;case Eo:t.depthFunc(t.LEQUAL);break;case kf:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case Bf:t.depthFunc(t.GREATER);break;case Hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=he}},setLocked:function(he){z=he},setClear:function(he){_e!==he&&(xe&&(he=1-he),t.clearDepth(he),_e=he)},reset:function(){z=!1,Ae=null,Fe=null,_e=null,xe=!1}}}function r(){let z=!1,xe=null,Ae=null,Fe=null,_e=null,he=null,Be=null,ot=null,bt=null;return{setTest:function(lt){z||(lt?fe(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!z&&(t.stencilMask(lt),xe=lt)},setFunc:function(lt,ci,Wn){(Ae!==lt||Fe!==ci||_e!==Wn)&&(t.stencilFunc(lt,ci,Wn),Ae=lt,Fe=ci,_e=Wn)},setOp:function(lt,ci,Wn){(he!==lt||Be!==ci||ot!==Wn)&&(t.stencilOp(lt,ci,Wn),he=lt,Be=ci,ot=Wn)},setLocked:function(lt){z=lt},setClear:function(lt){bt!==lt&&(t.clearStencil(lt),bt=lt)},reset:function(){z=!1,xe=null,Ae=null,Fe=null,_e=null,he=null,Be=null,ot=null,bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],_=null,E=!1,g=null,u=null,m=null,v=null,y=null,C=null,R=null,P=new yt(0,0,0),D=0,M=!1,x=null,N=null,B=null,q=null,Q=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=Y>=1):U.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=Y>=2);let se=null,de={};const Te=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ee=new It().fromArray(Te),ae=new It().fromArray(ve);function pe(z,xe,Ae,Fe){const _e=new Uint8Array(4),he=t.createTexture();t.bindTexture(z,he),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Ae;Be++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(xe+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return he}const oe={};oe[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),o.setFunc(Eo),et(!1),k(D0),fe(t.CULL_FACE),Pt(Fr);function fe(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function Ue(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function Ze(z,xe){return d[z]!==xe?(t.bindFramebuffer(z,xe),d[z]=xe,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Xe(z,xe){let Ae=p,Fe=!1;if(z){Ae=h.get(xe),Ae===void 0&&(Ae=[],h.set(xe,Ae));const _e=z.textures;if(Ae.length!==_e.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Be=_e.length;he<Be;he++)Ae[he]=t.COLOR_ATTACHMENT0+he;Ae.length=_e.length,Fe=!0}}else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Ae)}function Qe(z){return _!==z?(t.useProgram(z),_=z,!0):!1}const _t={[cs]:t.FUNC_ADD,[vS]:t.FUNC_SUBTRACT,[_S]:t.FUNC_REVERSE_SUBTRACT};_t[xS]=t.MIN,_t[yS]=t.MAX;const F={[SS]:t.ZERO,[MS]:t.ONE,[wS]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[RS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[TS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[If]:t.ONE_MINUS_SRC_ALPHA,[CS]:t.ONE_MINUS_DST_COLOR,[AS]:t.ONE_MINUS_DST_ALPHA,[PS]:t.CONSTANT_COLOR,[LS]:t.ONE_MINUS_CONSTANT_COLOR,[DS]:t.CONSTANT_ALPHA,[NS]:t.ONE_MINUS_CONSTANT_ALPHA};function Pt(z,xe,Ae,Fe,_e,he,Be,ot,bt,lt){if(z===Fr){E===!0&&(Ue(t.BLEND),E=!1);return}if(E===!1&&(fe(t.BLEND),E=!0),z!==gS){if(z!==g||lt!==M){if((u!==cs||y!==cs)&&(t.blendEquation(t.FUNC_ADD),u=cs,y=cs),lt)switch(z){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.ONE,t.ONE);break;case I0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case U0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case I0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,v=null,C=null,R=null,P.set(0,0,0),D=0,g=z,M=lt}return}_e=_e||xe,he=he||Ae,Be=Be||Fe,(xe!==u||_e!==y)&&(t.blendEquationSeparate(_t[xe],_t[_e]),u=xe,y=_e),(Ae!==m||Fe!==v||he!==C||Be!==R)&&(t.blendFuncSeparate(F[Ae],F[Fe],F[he],F[Be]),m=Ae,v=Fe,C=he,R=Be),(ot.equals(P)===!1||bt!==D)&&(t.blendColor(ot.r,ot.g,ot.b,bt),P.copy(ot),D=bt),g=z,M=!1}function it(z,xe){z.side===_i?Ue(t.CULL_FACE):fe(t.CULL_FACE);let Ae=z.side===Gn;xe&&(Ae=!Ae),et(Ae),z.blending===ho&&z.transparent===!1?Pt(Fr):Pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Fe=z.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(z){x!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),x=z)}function k(z){z!==pS?(fe(t.CULL_FACE),z!==N&&(z===D0?t.cullFace(t.BACK):z===mS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),N=z}function be(z){z!==B&&(V&&t.lineWidth(z),B=z)}function ee(z,xe,Ae){z?(fe(t.POLYGON_OFFSET_FILL),(q!==xe||Q!==Ae)&&(t.polygonOffset(xe,Ae),q=xe,Q=Ae)):Ue(t.POLYGON_OFFSET_FILL)}function ne(z){z?fe(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function qe(z){z===void 0&&(z=t.TEXTURE0+re-1),se!==z&&(t.activeTexture(z),se=z)}function Ve(z,xe,Ae){Ae===void 0&&(se===null?Ae=t.TEXTURE0+re-1:Ae=se);let Fe=de[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},de[Ae]=Fe),(Fe.type!==z||Fe.texture!==xe)&&(se!==Ae&&(t.activeTexture(Ae),se=Ae),t.bindTexture(z,xe||oe[z]),Fe.type=z,Fe.texture=xe)}function L(){const z=de[se];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(z){Ee.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function tt(z){ae.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ae.copy(z))}function We(z,xe){let Ae=c.get(xe);Ae===void 0&&(Ae=new WeakMap,c.set(xe,Ae));let Fe=Ae.get(z);Fe===void 0&&(Fe=t.getUniformBlockIndex(xe,z.name),Ae.set(z,Fe))}function Pe(z,xe){const Fe=c.get(xe).get(z);l.get(xe)!==Fe&&(t.uniformBlockBinding(xe,Fe,z.__bindingPointIndex),l.set(xe,Fe))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},se=null,de={},d={},h=new WeakMap,p=[],_=null,E=!1,g=null,u=null,m=null,v=null,y=null,C=null,R=null,P=new yt(0,0,0),D=0,M=!1,x=null,N=null,B=null,q=null,Q=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Ue,bindFramebuffer:Ze,drawBuffers:Xe,useProgram:Qe,setBlending:Pt,setMaterial:it,setFlipSided:et,setCullFace:k,setLineWidth:be,setPolygonOffset:ee,setScissorTest:ne,activeTexture:qe,bindTexture:Ve,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Ye,texImage3D:we,updateUBOMapping:We,uniformBlockBinding:Pe,texStorage2D:Se,texStorage3D:je,texSubImage2D:Z,texSubImage3D:me,compressedTexSubImage2D:te,compressedTexSubImage3D:Re,scissor:Ne,viewport:tt,reset:st}}function AA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):Hc("canvas")}function E(L,T,W){let Z=1;const me=Ve(L);if((me.width>W||me.height>W)&&(Z=W/Math.max(me.width,me.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(Z*me.width),Re=Math.floor(Z*me.height);d===void 0&&(d=_(te,Re));const Se=T?_(te,Re):d;return Se.width=te,Se.height=Re,Se.getContext("2d").drawImage(L,0,0,te,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+te+"x"+Re+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function m(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(L,T,W,Z,me=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=T;if(T===t.RED&&(W===t.FLOAT&&(te=t.R32F),W===t.HALF_FLOAT&&(te=t.R16F),W===t.UNSIGNED_BYTE&&(te=t.R8)),T===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.R8UI),W===t.UNSIGNED_SHORT&&(te=t.R16UI),W===t.UNSIGNED_INT&&(te=t.R32UI),W===t.BYTE&&(te=t.R8I),W===t.SHORT&&(te=t.R16I),W===t.INT&&(te=t.R32I)),T===t.RG&&(W===t.FLOAT&&(te=t.RG32F),W===t.HALF_FLOAT&&(te=t.RG16F),W===t.UNSIGNED_BYTE&&(te=t.RG8)),T===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.RG8UI),W===t.UNSIGNED_SHORT&&(te=t.RG16UI),W===t.UNSIGNED_INT&&(te=t.RG32UI),W===t.BYTE&&(te=t.RG8I),W===t.SHORT&&(te=t.RG16I),W===t.INT&&(te=t.RG32I)),T===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.RGB8UI),W===t.UNSIGNED_SHORT&&(te=t.RGB16UI),W===t.UNSIGNED_INT&&(te=t.RGB32UI),W===t.BYTE&&(te=t.RGB8I),W===t.SHORT&&(te=t.RGB16I),W===t.INT&&(te=t.RGB32I)),T===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),W===t.UNSIGNED_INT&&(te=t.RGBA32UI),W===t.BYTE&&(te=t.RGBA8I),W===t.SHORT&&(te=t.RGBA16I),W===t.INT&&(te=t.RGBA32I)),T===t.RGB&&(W===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),T===t.RGBA){const Re=me?zc:At.getTransfer(Z);W===t.FLOAT&&(te=t.RGBA32F),W===t.HALF_FLOAT&&(te=t.RGBA16F),W===t.UNSIGNED_BYTE&&(te=Re===Nt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(L,T){let W;return L?T===null||T===ws||T===ja?W=t.DEPTH24_STENCIL8:T===er?W=t.DEPTH32F_STENCIL8:T===Xa&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ws||T===ja?W=t.DEPTH_COMPONENT24:T===er?W=t.DEPTH_COMPONENT32F:T===Xa&&(W=t.DEPTH_COMPONENT16),W}function C(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==Ii?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=L.target;T.removeEventListener("dispose",R),D(T),T.isVideoTexture&&f.delete(T)}function P(L){const T=L.target;T.removeEventListener("dispose",P),x(T)}function D(L){const T=i.get(L);if(T.__webglInit===void 0)return;const W=L.source,Z=h.get(W);if(Z){const me=Z[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&M(L),Object.keys(Z).length===0&&h.delete(W)}i.remove(L)}function M(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const W=L.source,Z=h.get(W);delete Z[T.__cacheKey],o.memory.textures--}function x(L){const T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let me=0;me<T.__webglFramebuffer[Z].length;me++)t.deleteFramebuffer(T.__webglFramebuffer[Z][me]);else t.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)t.deleteFramebuffer(T.__webglFramebuffer[Z]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=L.textures;for(let Z=0,me=W.length;Z<me;Z++){const te=i.get(W[Z]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(L)}let N=0;function B(){N=0}function q(){const L=N;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),N+=1,L}function Q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function re(L,T){const W=i.get(L);if(L.isVideoTexture&&ne(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(W,L,T);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+T)}function V(L,T){const W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){oe(W,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+T)}function Y(L,T){const W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){oe(W,L,T);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+T)}function U(L,T){const W=i.get(L);if(L.version>0&&W.__version!==L.version){fe(W,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+T)}const se={[kc]:t.REPEAT,[ps]:t.CLAMP_TO_EDGE,[Wf]:t.MIRRORED_REPEAT},de={[wi]:t.NEAREST,[VS]:t.NEAREST_MIPMAP_NEAREST,[Tl]:t.NEAREST_MIPMAP_LINEAR,[Ii]:t.LINEAR,[Qu]:t.LINEAR_MIPMAP_NEAREST,[ms]:t.LINEAR_MIPMAP_LINEAR},Te={[jS]:t.NEVER,[JS]:t.ALWAYS,[YS]:t.LESS,[mx]:t.LEQUAL,[qS]:t.EQUAL,[ZS]:t.GEQUAL,[$S]:t.GREATER,[KS]:t.NOTEQUAL};function ve(L,T){if(T.type===er&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ii||T.magFilter===Qu||T.magFilter===Tl||T.magFilter===ms||T.minFilter===Ii||T.minFilter===Qu||T.minFilter===Tl||T.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,se[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,se[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,se[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,de[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wi||T.minFilter!==Tl&&T.minFilter!==ms||T.type===er&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const Z=T.source;let me=h.get(Z);me===void 0&&(me={},h.set(Z,me));const te=Q(T);if(te!==L.__cacheKey){me[te]===void 0&&(me[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),me[te].usedTimes++;const Re=me[L.__cacheKey];Re!==void 0&&(me[L.__cacheKey].usedTimes--,Re.usedTimes===0&&M(T)),L.__cacheKey=te,L.__webglTexture=me[te].texture}return W}function ae(L,T,W){return Math.floor(Math.floor(L/W)/T)}function pe(L,T,W,Z){const te=L.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,W,Z,T.data);else{te.sort((we,Ne)=>we.start-Ne.start);let Re=0;for(let we=1;we<te.length;we++){const Ne=te[Re],tt=te[we],We=Ne.start+Ne.count,Pe=ae(tt.start,T.width,4),st=ae(Ne.start,T.width,4);tt.start<=We+1&&Pe===st&&ae(tt.start+tt.count-1,T.width,4)===Pe?Ne.count=Math.max(Ne.count,tt.start+tt.count-Ne.start):(++Re,te[Re]=tt)}te.length=Re+1;const Se=t.getParameter(t.UNPACK_ROW_LENGTH),je=t.getParameter(t.UNPACK_SKIP_PIXELS),Ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let we=0,Ne=te.length;we<Ne;we++){const tt=te[we],We=Math.floor(tt.start/4),Pe=Math.ceil(tt.count/4),st=We%T.width,z=Math.floor(We/T.width),xe=Pe,Ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,st),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,st,z,xe,Ae,W,Z,T.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Se),t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ye)}}function oe(L,T,W){let Z=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=t.TEXTURE_3D);const me=Ee(L,T),te=T.source;n.bindTexture(Z,L.__webglTexture,t.TEXTURE0+W);const Re=i.get(te);if(te.version!==Re.__version||me===!0){n.activeTexture(t.TEXTURE0+W);const Se=At.getPrimaries(At.workingColorSpace),je=T.colorSpace===Tr?null:At.getPrimaries(T.colorSpace),Ye=T.colorSpace===Tr||Se===je?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let we=E(T.image,!1,r.maxTextureSize);we=qe(T,we);const Ne=s.convert(T.format,T.colorSpace),tt=s.convert(T.type);let We=v(T.internalFormat,Ne,tt,T.colorSpace,T.isVideoTexture);ve(Z,T);let Pe;const st=T.mipmaps,z=T.isVideoTexture!==!0,xe=Re.__version===void 0||me===!0,Ae=te.dataReady,Fe=C(T,we);if(T.isDepthTexture)We=y(T.format===qa,T.type),xe&&(z?n.texStorage2D(t.TEXTURE_2D,1,We,we.width,we.height):n.texImage2D(t.TEXTURE_2D,0,We,we.width,we.height,0,Ne,tt,null));else if(T.isDataTexture)if(st.length>0){z&&xe&&n.texStorage2D(t.TEXTURE_2D,Fe,We,st[0].width,st[0].height);for(let _e=0,he=st.length;_e<he;_e++)Pe=st[_e],z?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,tt,Pe.data):n.texImage2D(t.TEXTURE_2D,_e,We,Pe.width,Pe.height,0,Ne,tt,Pe.data);T.generateMipmaps=!1}else z?(xe&&n.texStorage2D(t.TEXTURE_2D,Fe,We,we.width,we.height),Ae&&pe(T,we,Ne,tt)):n.texImage2D(t.TEXTURE_2D,0,We,we.width,we.height,0,Ne,tt,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,We,st[0].width,st[0].height,we.depth);for(let _e=0,he=st.length;_e<he;_e++)if(Pe=st[_e],T.format!==yi)if(Ne!==null)if(z){if(Ae)if(T.layerUpdates.size>0){const Be=fg(Pe.width,Pe.height,T.format,T.type);for(const ot of T.layerUpdates){const bt=Pe.data.subarray(ot*Be/Pe.data.BYTES_PER_ELEMENT,(ot+1)*Be/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,ot,Pe.width,Pe.height,1,Ne,bt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,we.depth,Ne,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,We,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,we.depth,Ne,tt,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,We,Pe.width,Pe.height,we.depth,0,Ne,tt,Pe.data)}else{z&&xe&&n.texStorage2D(t.TEXTURE_2D,Fe,We,st[0].width,st[0].height);for(let _e=0,he=st.length;_e<he;_e++)Pe=st[_e],T.format!==yi?Ne!==null?z?Ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,tt,Pe.data):n.texImage2D(t.TEXTURE_2D,_e,We,Pe.width,Pe.height,0,Ne,tt,Pe.data)}else if(T.isDataArrayTexture)if(z){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,We,we.width,we.height,we.depth),Ae)if(T.layerUpdates.size>0){const _e=fg(we.width,we.height,T.format,T.type);for(const he of T.layerUpdates){const Be=we.data.subarray(he*_e/we.data.BYTES_PER_ELEMENT,(he+1)*_e/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,we.width,we.height,1,Ne,tt,Be)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ne,tt,we.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,we.width,we.height,we.depth,0,Ne,tt,we.data);else if(T.isData3DTexture)z?(xe&&n.texStorage3D(t.TEXTURE_3D,Fe,We,we.width,we.height,we.depth),Ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ne,tt,we.data)):n.texImage3D(t.TEXTURE_3D,0,We,we.width,we.height,we.depth,0,Ne,tt,we.data);else if(T.isFramebufferTexture){if(xe)if(z)n.texStorage2D(t.TEXTURE_2D,Fe,We,we.width,we.height);else{let _e=we.width,he=we.height;for(let Be=0;Be<Fe;Be++)n.texImage2D(t.TEXTURE_2D,Be,We,_e,he,0,Ne,tt,null),_e>>=1,he>>=1}}else if(st.length>0){if(z&&xe){const _e=Ve(st[0]);n.texStorage2D(t.TEXTURE_2D,Fe,We,_e.width,_e.height)}for(let _e=0,he=st.length;_e<he;_e++)Pe=st[_e],z?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ne,tt,Pe):n.texImage2D(t.TEXTURE_2D,_e,We,Ne,tt,Pe);T.generateMipmaps=!1}else if(z){if(xe){const _e=Ve(we);n.texStorage2D(t.TEXTURE_2D,Fe,We,_e.width,_e.height)}Ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,tt,we)}else n.texImage2D(t.TEXTURE_2D,0,We,Ne,tt,we);g(T)&&u(Z),Re.__version=te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,W){if(T.image.length!==6)return;const Z=Ee(L,T),me=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const te=i.get(me);if(me.version!==te.__version||Z===!0){n.activeTexture(t.TEXTURE0+W);const Re=At.getPrimaries(At.workingColorSpace),Se=T.colorSpace===Tr?null:At.getPrimaries(T.colorSpace),je=T.colorSpace===Tr||Re===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ye&&!we?Ne[he]=E(T.image[he],!0,r.maxCubemapSize):Ne[he]=we?T.image[he].image:T.image[he],Ne[he]=qe(T,Ne[he]);const tt=Ne[0],We=s.convert(T.format,T.colorSpace),Pe=s.convert(T.type),st=v(T.internalFormat,We,Pe,T.colorSpace),z=T.isVideoTexture!==!0,xe=te.__version===void 0||Z===!0,Ae=me.dataReady;let Fe=C(T,tt);ve(t.TEXTURE_CUBE_MAP,T);let _e;if(Ye){z&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,st,tt.width,tt.height);for(let he=0;he<6;he++){_e=Ne[he].mipmaps;for(let Be=0;Be<_e.length;Be++){const ot=_e[Be];T.format!==yi?We!==null?z?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,ot.width,ot.height,We,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,ot.width,ot.height,We,Pe,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,ot.width,ot.height,0,We,Pe,ot.data)}}}else{if(_e=T.mipmaps,z&&xe){_e.length>0&&Fe++;const he=Ve(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,st,he.width,he.height)}for(let he=0;he<6;he++)if(we){z?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,We,Pe,Ne[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ne[he].width,Ne[he].height,0,We,Pe,Ne[he].data);for(let Be=0;Be<_e.length;Be++){const bt=_e[Be].image[he].image;z?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,bt.width,bt.height,We,Pe,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,bt.width,bt.height,0,We,Pe,bt.data)}}else{z?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Pe,Ne[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,We,Pe,Ne[he]);for(let Be=0;Be<_e.length;Be++){const ot=_e[Be];z?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,We,Pe,ot.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,We,Pe,ot.image[he])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),te.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ue(L,T,W,Z,me,te){const Re=s.convert(W.format,W.colorSpace),Se=s.convert(W.type),je=v(W.internalFormat,Re,Se,W.colorSpace),Ye=i.get(T),we=i.get(W);if(we.__renderTarget=T,!Ye.__hasExternalTextures){const Ne=Math.max(1,T.width>>te),tt=Math.max(1,T.height>>te);me===t.TEXTURE_3D||me===t.TEXTURE_2D_ARRAY?n.texImage3D(me,te,je,Ne,tt,T.depth,0,Re,Se,null):n.texImage2D(me,te,je,Ne,tt,0,Re,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,me,we.__webglTexture,0,be(T)):(me===t.TEXTURE_2D||me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,me,we.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(L,T,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const Z=T.depthTexture,me=Z&&Z.isDepthTexture?Z.type:null,te=y(T.stencilBuffer,me),Re=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=be(T);ee(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,te,T.width,T.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,te,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,te,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,L)}else{const Z=T.textures;for(let me=0;me<Z.length;me++){const te=Z[me],Re=s.convert(te.format,te.colorSpace),Se=s.convert(te.type),je=v(te.internalFormat,Re,Se,te.colorSpace),Ye=be(T);W&&ee(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,je,T.width,T.height):ee(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,je,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,je,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),re(T.depthTexture,0);const me=Z.__webglTexture,te=be(T);if(T.depthTexture.format===Ya)ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(T.depthTexture.format===qa)ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Qe(L){const T=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",me)};Z.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=Z}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=L.texture.mipmaps;Z&&Z.length>0?Xe(T.__webglFramebuffer[0],L):Xe(T.__webglFramebuffer,L)}else if(W){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ze(T.__webglDepthbuffer[Z],L,!1);else{const me=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,te)}}else{const Z=L.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Ze(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(L,T,W){const Z=i.get(L);T!==void 0&&Ue(Z.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Qe(L)}function F(L){const T=L.texture,W=i.get(L),Z=i.get(T);L.addEventListener("dispose",P);const me=L.textures,te=L.isWebGLCubeRenderTarget===!0,Re=me.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=T.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Se]=[];for(let je=0;je<T.mipmaps.length;je++)W.__webglFramebuffer[Se][je]=t.createFramebuffer()}else W.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)W.__webglFramebuffer[Se]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Re)for(let Se=0,je=me.length;Se<je;Se++){const Ye=i.get(me[Se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&ee(L)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Se=0;Se<me.length;Se++){const je=me[Se];W.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Se]);const Ye=s.convert(je.format,je.colorSpace),we=s.convert(je.type),Ne=v(je.internalFormat,Ye,we,je.colorSpace,L.isXRRenderTarget===!0),tt=be(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Ne,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,W.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Ze(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(t.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Ue(W.__webglFramebuffer[Se][je],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je);else Ue(W.__webglFramebuffer[Se],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let Se=0,je=me.length;Se<je;Se++){const Ye=me[Se],we=i.get(Ye);let Ne=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,we.__webglTexture),ve(Ne,Ye),Ue(W.__webglFramebuffer,L,Ye,t.COLOR_ATTACHMENT0+Se,Ne,0),g(Ye)&&u(Ne)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Se=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,Z.__webglTexture),ve(Se,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Ue(W.__webglFramebuffer[je],L,T,t.COLOR_ATTACHMENT0,Se,je);else Ue(W.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,Se,0);g(T)&&u(Se),n.unbindTexture()}L.depthBuffer&&Qe(L)}function Pt(L){const T=L.textures;for(let W=0,Z=T.length;W<Z;W++){const me=T[W];if(g(me)){const te=m(L),Re=i.get(me).__webglTexture;n.bindTexture(te,Re),u(te),n.unbindTexture()}}}const it=[],et=[];function k(L){if(L.samples>0){if(ee(L)===!1){const T=L.textures,W=L.width,Z=L.height;let me=t.COLOR_BUFFER_BIT;const te=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(L),Se=T.length>1;if(Se)for(let Ye=0;Ye<T.length;Ye++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const je=L.texture.mipmaps;je&&je.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=t.STENCIL_BUFFER_BIT)),Se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ye]);const we=i.get(T[Ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,W,Z,0,0,W,Z,me,t.NEAREST),l===!0&&(it.length=0,et.length=0,it.push(t.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(te),et.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Ye=0;Ye<T.length;Ye++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ye]);const we=i.get(T[Ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function be(L){return Math.min(r.maxSamples,L.samples)}function ee(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(L){const T=o.render.frame;f.get(L)!==T&&(f.set(L,T),L.update())}function qe(L,T){const W=L.colorSpace,Z=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==bo&&W!==Tr&&(At.getTransfer(W)===Nt?(Z!==yi||me!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=U,this.rebindTextures=_t,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ee}function bA(t,e){function n(i,r=Tr){let s;const o=At.getTransfer(r);if(i===zi)return t.UNSIGNED_BYTE;if(i===yp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ox)return t.BYTE;if(i===ax)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===xp)return t.INT;if(i===ws)return t.UNSIGNED_INT;if(i===er)return t.FLOAT;if(i===tl)return t.HALF_FLOAT;if(i===ux)return t.ALPHA;if(i===dx)return t.RGB;if(i===yi)return t.RGBA;if(i===Ya)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===fx)return t.RED;if(i===Mp)return t.RED_INTEGER;if(i===hx)return t.RG;if(i===wp)return t.RG_INTEGER;if(i===Ep)return t.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===dc)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===jf||i===Yf||i===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$f||i===Kf)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fh||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fh)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===vh||i===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hr({vertexShader:CA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ue(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends Do{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",g=new PA,u={},m=n.getContextAttributes();let v=null,y=null;const C=[],R=[],P=new Ke;let D=null;const M=new $n;M.viewport=new It;const x=new $n;x.viewport=new It;const N=[M,x],B=new ZM;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=C[oe];return fe===void 0&&(fe=new Md,C[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=C[oe];return fe===void 0&&(fe=new Md,C[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=C[oe];return fe===void 0&&(fe=new Md,C[oe]=fe),fe.getHandSpace()};function re(oe){const fe=R.indexOf(oe.inputSource);if(fe===-1)return;const Ue=C[fe];Ue!==void 0&&(Ue.update(oe.inputSource,oe.frame,c||o),Ue.dispatchEvent({type:oe.type,data:oe.inputSource}))}function V(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let oe=0;oe<C.length;oe++){const fe=R[oe];fe!==null&&(R[oe]=null,C[oe].disconnect(fe))}q=null,Q=null,g.reset();for(const oe in u)delete u[oe];e.setRenderTarget(v),p=null,h=null,d=null,r=null,y=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Ze=null,Xe=null;m.depth&&(Xe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=m.stencil?qa:Ya,Ze=m.stencil?ja:ws);const Qe={colorFormat:n.RGBA8,depthFormat:Xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Es(h.textureWidth,h.textureHeight,{format:yi,type:zi,depthTexture:new Ex(h.textureWidth,h.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Es(p.framebufferWidth,p.framebufferHeight,{format:yi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(oe){for(let fe=0;fe<oe.removed.length;fe++){const Ue=oe.removed[fe],Ze=R.indexOf(Ue);Ze>=0&&(R[Ze]=null,C[Ze].disconnect(Ue))}for(let fe=0;fe<oe.added.length;fe++){const Ue=oe.added[fe];let Ze=R.indexOf(Ue);if(Ze===-1){for(let Qe=0;Qe<C.length;Qe++)if(Qe>=R.length){R.push(Ue),Ze=Qe;break}else if(R[Qe]===null){R[Qe]=Ue,Ze=Qe;break}if(Ze===-1)break}const Xe=C[Ze];Xe&&Xe.connect(Ue)}}const U=new O,se=new O;function de(oe,fe,Ue){U.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(Ue.matrixWorld);const Ze=U.distanceTo(se),Xe=fe.projectionMatrix.elements,Qe=Ue.projectionMatrix.elements,_t=Xe[14]/(Xe[10]-1),F=Xe[14]/(Xe[10]+1),Pt=(Xe[9]+1)/Xe[5],it=(Xe[9]-1)/Xe[5],et=(Xe[8]-1)/Xe[0],k=(Qe[8]+1)/Qe[0],be=_t*et,ee=_t*k,ne=Ze/(-et+k),qe=ne*-et;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(qe),oe.translateZ(ne),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Xe[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ve=_t+ne,L=F+ne,T=be-qe,W=ee+(Ze-qe),Z=Pt*F/L*Ve,me=it*F/L*Ve;oe.projectionMatrix.makePerspective(T,W,Z,me,Ve,L),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Te(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let fe=oe.near,Ue=oe.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Ue=g.depthFar)),B.near=x.near=M.near=fe,B.far=x.far=M.far=Ue,(q!==B.near||Q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,Q=B.far),B.layers.mask=oe.layers.mask|6,M.layers.mask=B.layers.mask&3,x.layers.mask=B.layers.mask&5;const Ze=oe.parent,Xe=B.cameras;Te(B,Ze);for(let Qe=0;Qe<Xe.length;Qe++)Te(Xe[Qe],Ze);Xe.length===2?de(B,M,x):B.projectionMatrix.copy(M.projectionMatrix),ve(oe,B,Ze)};function ve(oe,fe,Ue){Ue===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(Ue.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=xh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(oe){return u[oe]};let Ee=null;function ae(oe,fe){if(f=fe.getViewerPose(c||o),_=fe,f!==null){const Ue=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ze=!1;Ue.length!==B.cameras.length&&(B.cameras.length=0,Ze=!0);for(let F=0;F<Ue.length;F++){const Pt=Ue[F];let it=null;if(p!==null)it=p.getViewport(Pt);else{const k=d.getViewSubImage(h,Pt);it=k.viewport,F===0&&(e.setRenderTargetTextures(y,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(y))}let et=N[F];et===void 0&&(et=new $n,et.layers.enable(F),et.viewport=new It,N[F]=et),et.matrix.fromArray(Pt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Pt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(it.x,it.y,it.width,it.height),F===0&&(B.matrix.copy(et.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ze===!0&&B.cameras.push(et)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const F=d.getDepthInformation(Ue[0]);F&&F.isValid&&F.texture&&g.init(F,r.renderState)}if(Xe&&Xe.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let F=0;F<Ue.length;F++){const Pt=Ue[F].camera;if(Pt){let it=u[Pt];it||(it=new Tx,u[Pt]=it);const et=d.getCameraImage(Pt);it.sourceTexture=et}}}}for(let Ue=0;Ue<C.length;Ue++){const Ze=R[Ue],Xe=C[Ue];Ze!==null&&Xe!==void 0&&Xe.update(Ze,fe,c||o)}Ee&&Ee(oe,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const pe=new Px;pe.setAnimationLoop(ae),this.setAnimationLoop=function(oe){Ee=oe},this.dispose=function(){}}}const rs=new Bi,DA=new Bt;function NA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Sx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),E(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Gn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Gn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,y=m.envMapRotation;v&&(g.envMap.value=v,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(rs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function E(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function c(m,v){let y=r[m.id];y===void 0&&(_(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(m,C);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function f(m){const v=d();m.__bindingPointIndex=v;const y=t.createBuffer(),C=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],y=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,P=y.length;R<P;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,x=D.length;M<x;M++){const N=D[M];if(p(N,R,M,C)===!0){const B=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let Q=0;for(let re=0;re<q.length;re++){const V=q[re],Y=E(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,B+Q,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,y,C){const R=m.value,P=v+"_"+y;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const D=C[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(m){const v=m.uniforms;let y=0;const C=16;for(let P=0,D=v.length;P<D;P++){const M=Array.isArray(v[P])?v[P]:[v[P]];for(let x=0,N=M.length;x<N;x++){const B=M[x],q=Array.isArray(B.value)?B.value:[B.value];for(let Q=0,re=q.length;Q<re;Q++){const V=q[Q],Y=E(V),U=y%C,se=U%Y.boundary,de=U+se;y+=se,de!==0&&C-de<Y.storage&&(y+=C-de),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Y.storage}}}const R=y%C;return R>0&&(y+=C-R),m.__size=y,m.__cache={},this}function E(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class UA{constructor(e={}){const{canvas:n=eM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),E=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=On;let R=0,P=0,D=null,M=-1,x=null;const N=new It,B=new It;let q=null;const Q=new yt(0);let re=0,V=n.width,Y=n.height,U=1,se=null,de=null;const Te=new It(0,0,V,Y),ve=new It(0,0,V,Y);let Ee=!1;const ae=new Rp;let pe=!1,oe=!1;const fe=new Bt,Ue=new O,Ze=new It,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function _t(){return D===null?U:1}let F=i;function Pt(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const G="webgl2";if(F=Pt(G,A),F===null)throw Pt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,et,k,be,ee,ne,qe,Ve,L,T,W,Z,me,te,Re,Se,je,Ye,we,Ne,tt,We,Pe,st;function z(){it=new XE(F),it.init(),We=new bA(F,it),et=new kE(F,it,e,We),k=new TA(F,it),et.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),be=new qE(F),ee=new fA,ne=new AA(F,it,k,ee,et,We,be),qe=new BE(y),Ve=new WE(y),L=new e2(F),Pe=new FE(F,L),T=new jE(F,L,be,Pe),W=new KE(F,T,L,be),we=new $E(F,et,ne),Se=new zE(ee),Z=new dA(y,qe,Ve,it,et,Pe,Se),me=new NA(y,ee),te=new pA,Re=new yA(it),Ye=new UE(y,qe,Ve,k,W,p,l),je=new wA(y,W,et),st=new IA(F,be,et,k),Ne=new OE(F,it,be),tt=new YE(F,it,be),be.programs=Z.programs,y.capabilities=et,y.extensions=it,y.properties=ee,y.renderLists=te,y.shadowMap=je,y.state=k,y.info=be}z();const xe=new LA(y,F);this.xr=xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(V,Y,!1))},this.getSize=function(A){return A.set(V,Y)},this.setSize=function(A,G,K=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Y=G,n.width=Math.floor(A*U),n.height=Math.floor(G*U),K===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(V*U,Y*U).floor()},this.setDrawingBufferSize=function(A,G,K){V=A,Y=G,U=K,n.width=Math.floor(A*K),n.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,G,K,J){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,G,K,J),k.viewport(N.copy(Te).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,G,K,J){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,G,K,J),k.scissor(B.copy(ve).multiplyScalar(U).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){k.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,K=!0){let J=0;if(A){let X=!1;if(D!==null){const ge=D.texture.format;X=ge===Ep||ge===wp||ge===Mp}if(X){const ge=D.texture.type,Le=ge===zi||ge===ws||ge===Xa||ge===ja||ge===yp||ge===Sp,ke=Ye.getClearColor(),Ie=Ye.getClearAlpha(),$e=ke.r,nt=ke.g,Je=ke.b;Le?(_[0]=$e,_[1]=nt,_[2]=Je,_[3]=Ie,F.clearBufferuiv(F.COLOR,0,_)):(E[0]=$e,E[1]=nt,E[2]=Je,E[3]=Ie,F.clearBufferiv(F.COLOR,0,E))}else J|=F.COLOR_BUFFER_BIT}G&&(J|=F.DEPTH_BUFFER_BIT),K&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Ye.dispose(),te.dispose(),Re.dispose(),ee.dispose(),qe.dispose(),Ve.dispose(),W.dispose(),Pe.dispose(),st.dispose(),Z.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Wn),xe.removeEventListener("sessionend",Uo),ti.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=be.autoReset,G=je.enabled,K=je.autoUpdate,J=je.needsUpdate,X=je.type;z(),be.autoReset=A,je.enabled=G,je.autoUpdate=K,je.needsUpdate=J,je.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const G=A.target;G.removeEventListener("dispose",he),Be(G)}function Be(A){ot(A),ee.remove(A)}function ot(A){const G=ee.get(A).programs;G!==void 0&&(G.forEach(function(K){Z.releaseProgram(K)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,K,J,X,ge){G===null&&(G=Xe);const Le=X.isMesh&&X.matrixWorld.determinant()<0,ke=Ai(A,G,K,J,X);k.setMaterial(J,Le);let Ie=K.index,$e=1;if(J.wireframe===!0){if(Ie=T.getWireframeAttribute(K),Ie===void 0)return;$e=2}const nt=K.drawRange,Je=K.attributes.position;let ut=nt.start*$e,Ct=(nt.start+nt.count)*$e;ge!==null&&(ut=Math.max(ut,ge.start*$e),Ct=Math.min(Ct,(ge.start+ge.count)*$e)),Ie!==null?(ut=Math.max(ut,0),Ct=Math.min(Ct,Ie.count)):Je!=null&&(ut=Math.max(ut,0),Ct=Math.min(Ct,Je.count));const Ut=Ct-ut;if(Ut<0||Ut===1/0)return;Pe.setup(X,J,ke,K,Ie);let Ft,Lt=Ne;if(Ie!==null&&(Ft=L.get(Ie),Lt=tt,Lt.setIndex(Ft)),X.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*_t()),Lt.setMode(F.LINES)):Lt.setMode(F.TRIANGLES);else if(X.isLine){let He=J.linewidth;He===void 0&&(He=1),k.setLineWidth(He*_t()),X.isLineSegments?Lt.setMode(F.LINES):X.isLineLoop?Lt.setMode(F.LINE_LOOP):Lt.setMode(F.LINE_STRIP)}else X.isPoints?Lt.setMode(F.POINTS):X.isSprite&&Lt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$a("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const He=X._multiDrawStarts,mt=X._multiDrawCounts,xt=X._multiDrawCount,An=Ie?L.get(Ie).bytesPerElement:1,Ci=ee.get(J).currentProgram.getUniforms();for(let mn=0;mn<xt;mn++)Ci.setValue(F,"_gl_DrawID",mn),Lt.render(He[mn]/An,mt[mn])}else if(X.isInstancedMesh)Lt.renderInstances(ut,Ut,X.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,mt=Math.min(K.instanceCount,He);Lt.renderInstances(ut,Ut,mt)}else Lt.render(ut,Ut)};function bt(A,G,K){A.transparent===!0&&A.side===_i&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Xr(A,G,K),A.side=Br,A.needsUpdate=!0,Xr(A,G,K),A.side=_i):Xr(A,G,K)}this.compile=function(A,G,K=null){K===null&&(K=A),u=Re.get(K),u.init(G),v.push(u),K.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const J=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Le=0;Le<ge.length;Le++){const ke=ge[Le];bt(ke,K,X),J.add(ke)}else bt(ge,K,X),J.add(ge)}),u=v.pop(),J},this.compileAsync=function(A,G,K=null){const J=this.compile(A,G,K);return new Promise(X=>{function ge(){if(J.forEach(function(Le){ee.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){X(A);return}setTimeout(ge,10)}it.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let lt=null;function ci(A){lt&&lt(A)}function Wn(){ti.stop()}function Uo(){ti.start()}const ti=new Px;ti.setAnimationLoop(ci),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(A){lt=A,xe.setAnimationLoop(A),A===null?ti.stop():ti.start()},xe.addEventListener("sessionstart",Wn),xe.addEventListener("sessionend",Uo),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(G),G=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,G,D),u=Re.get(A,v.length),u.init(G),v.push(u),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ae.setFromProjectionMatrix(fe,Ui,G.reversedDepth),oe=this.localClippingEnabled,pe=Se.init(this.clippingPlanes,oe),g=te.get(A,m.length),g.init(),m.push(g),xe.enabled===!0&&xe.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&Ti(ge,G,-1/0,y.sortObjects)}Ti(A,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,de),Qe=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Qe&&Ye.addToRenderList(g,A),this.info.render.frame++,pe===!0&&Se.beginShadows();const K=u.state.shadowsArray;je.render(K,A,G),pe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,X=g.transmissive;if(u.setupLights(),G.isArrayCamera){const ge=G.cameras;if(X.length>0)for(let Le=0,ke=ge.length;Le<ke;Le++){const Ie=ge[Le];Xn(J,X,A,Ie)}Qe&&Ye.render(A);for(let Le=0,ke=ge.length;Le<ke;Le++){const Ie=ge[Le];Fo(g,A,Ie,Ie.viewport)}}else X.length>0&&Xn(J,X,A,G),Qe&&Ye.render(A),Fo(g,A,G);D!==null&&P===0&&(ne.updateMultisampleRenderTarget(D),ne.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,G),Pe.resetDefaultState(),M=-1,x=null,v.pop(),v.length>0?(u=v[v.length-1],pe===!0&&Se.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ti(A,G,K,J){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ae.intersectsSprite(A)){J&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Le=W.update(A),ke=A.material;ke.visible&&g.push(A,Le,ke,K,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ae.intersectsObject(A))){const Le=W.update(A),ke=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ze.copy(Le.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(ke)){const Ie=Le.groups;for(let $e=0,nt=Ie.length;$e<nt;$e++){const Je=Ie[$e],ut=ke[Je.materialIndex];ut&&ut.visible&&g.push(A,Le,ut,K,Ze.z,Je)}}else ke.visible&&g.push(A,Le,ke,K,Ze.z,null)}}const ge=A.children;for(let Le=0,ke=ge.length;Le<ke;Le++)Ti(ge[Le],G,K,J)}function Fo(A,G,K,J){const X=A.opaque,ge=A.transmissive,Le=A.transparent;u.setupLightsView(K),pe===!0&&Se.setGlobalState(y.clippingPlanes,K),J&&k.viewport(N.copy(J)),X.length>0&&cr(X,G,K),ge.length>0&&cr(ge,G,K),Le.length>0&&cr(Le,G,K),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Xn(A,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new Es(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?tl:zi,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const ge=u.state.transmissionRenderTarget[J.id],Le=J.viewport||N;ge.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const ke=y.getRenderTarget(),Ie=y.getActiveCubeFace(),$e=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(Q),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear(),Qe&&Ye.render(K);const nt=y.toneMapping;y.toneMapping=Or;const Je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),pe===!0&&Se.setGlobalState(y.clippingPlanes,J),cr(A,K,J),ne.updateMultisampleRenderTarget(ge),ne.updateRenderTargetMipmap(ge),it.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Ct=0,Ut=G.length;Ct<Ut;Ct++){const Ft=G[Ct],Lt=Ft.object,He=Ft.geometry,mt=Ft.material,xt=Ft.group;if(mt.side===_i&&Lt.layers.test(J.layers)){const An=mt.side;mt.side=Gn,mt.needsUpdate=!0,Oo(Lt,K,J,He,mt,xt),mt.side=An,mt.needsUpdate=!0,ut=!0}}ut===!0&&(ne.updateMultisampleRenderTarget(ge),ne.updateRenderTargetMipmap(ge))}y.setRenderTarget(ke,Ie,$e),y.setClearColor(Q,re),Je!==void 0&&(J.viewport=Je),y.toneMapping=nt}function cr(A,G,K){const J=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=A.length;X<ge;X++){const Le=A[X],ke=Le.object,Ie=Le.geometry,$e=Le.group;let nt=Le.material;nt.allowOverride===!0&&J!==null&&(nt=J),ke.layers.test(K.layers)&&Oo(ke,G,K,Ie,nt,$e)}}function Oo(A,G,K,J,X,ge){A.onBeforeRender(y,G,K,J,X,ge),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(y,G,K,J,A,ge),X.transparent===!0&&X.side===_i&&X.forceSinglePass===!1?(X.side=Gn,X.needsUpdate=!0,y.renderBufferDirect(K,G,J,X,A,ge),X.side=Br,X.needsUpdate=!0,y.renderBufferDirect(K,G,J,X,A,ge),X.side=_i):y.renderBufferDirect(K,G,J,X,A,ge),A.onAfterRender(y,G,K,J,X,ge)}function Xr(A,G,K){G.isScene!==!0&&(G=Xe);const J=ee.get(A),X=u.state.lights,ge=u.state.shadowsArray,Le=X.state.version,ke=Z.getParameters(A,X.state,ge,G,K),Ie=Z.getProgramCacheKey(ke);let $e=J.programs;J.environment=A.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(A.isMeshStandardMaterial?Ve:qe).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",he),$e=new Map,J.programs=$e);let nt=$e.get(Ie);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Le)return ko(A,ke),nt}else ke.uniforms=Z.getUniforms(A),A.onBeforeCompile(ke,y),nt=Z.acquireProgram(ke,Ie),$e.set(Ie,nt),J.uniforms=ke.uniforms;const Je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Se.uniform),ko(A,ke),J.needsLights=zo(A),J.lightsStateVersion=Le,J.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function bs(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=fc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ko(A,G){const K=ee.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ai(A,G,K,J,X){G.isScene!==!0&&(G=Xe),ne.resetTextureUnits();const ge=G.fog,Le=J.isMeshStandardMaterial?G.environment:null,ke=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:bo,Ie=(J.isMeshStandardMaterial?Ve:qe).get(J.envMap||Le),$e=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Ct=!!K.morphAttributes.color;let Ut=Or;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=y.toneMapping);const Ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Lt=Ft!==void 0?Ft.length:0,He=ee.get(J),mt=u.state.lights;if(pe===!0&&(oe===!0||A!==x)){const en=A===x&&J.id===M;Se.setState(J,A,en)}let xt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==mt.state.version||He.outputColorSpace!==ke||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==Ie||J.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Se.numPlanes||He.numIntersection!==Se.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==nt||He.morphTargets!==Je||He.morphNormals!==ut||He.morphColors!==Ct||He.toneMapping!==Ut||He.morphTargetsCount!==Lt)&&(xt=!0):(xt=!0,He.__version=J.version);let An=He.currentProgram;xt===!0&&(An=Xr(J,G,X));let Ci=!1,mn=!1,Hi=!1;const Et=An.getUniforms(),$t=He.uniforms;if(k.useProgram(An.program)&&(Ci=!0,mn=!0,Hi=!0),J.id!==M&&(M=J.id,mn=!0),Ci||x!==A){k.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",A.projectionMatrix),Et.setValue(F,"viewMatrix",A.matrixWorldInverse);const Yt=Et.map.cameraPosition;Yt!==void 0&&Yt.setValue(F,Ue.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Et.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,mn=!0,Hi=!0)}if(X.isSkinnedMesh){Et.setOptional(F,X,"bindMatrix"),Et.setOptional(F,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Et.setValue(F,"boneTexture",en.boneTexture,ne))}X.isBatchedMesh&&(Et.setOptional(F,X,"batchingTexture"),Et.setValue(F,"batchingTexture",X._matricesTexture,ne),Et.setOptional(F,X,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",X._indirectTexture,ne),Et.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",X._colorsTexture,ne));const In=K.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&we.update(X,K,An),(mn||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,Et.setValue(F,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&($t.envMap.value=Ie,$t.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&($t.envMapIntensity.value=G.environmentIntensity),mn&&(Et.setValue(F,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&du($t,Hi),ge&&J.fog===!0&&me.refreshFogUniforms($t,ge),me.refreshMaterialUniforms($t,J,U,Y,u.state.transmissionRenderTarget[A.id]),fc.upload(F,bs(He),$t,ne)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fc.upload(F,bs(He),$t,ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Et.setValue(F,"center",X.center),Et.setValue(F,"modelViewMatrix",X.modelViewMatrix),Et.setValue(F,"normalMatrix",X.normalMatrix),Et.setValue(F,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const en=J.uniformsGroups;for(let Yt=0,qr=en.length;Yt<qr;Yt++){const Ri=en[Yt];st.update(Ri,An),st.bind(Ri,An)}}return An}function du(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function zo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,G,K){const J=ee.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=G,ee.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const K=ee.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const jr=F.createFramebuffer();this.setRenderTarget=function(A,G=0,K=0){D=A,R=G,P=K;let J=!0,X=null,ge=!1,Le=!1;if(A){const Ie=ee.get(A);if(Ie.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ne.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Ie.__boundDepthTexture!==Je){if(Je!==null&&ee.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const nt=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?X=nt[G][K]:X=nt[G],ge=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?X=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[K]:X=nt,N.copy(A.viewport),B.copy(A.scissor),q=A.scissorTest}else N.copy(Te).multiplyScalar(U).floor(),B.copy(ve).multiplyScalar(U).floor(),q=Ee;if(K!==0&&(X=jr),k.bindFramebuffer(F.FRAMEBUFFER,X)&&J&&k.drawBuffers(A,X),k.viewport(N),k.scissor(B),k.setScissorTest(q),ge){const Ie=ee.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,K)}else if(Le){const Ie=G;for(let $e=0;$e<A.textures.length;$e++){const nt=ee.get(A.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,nt.__webglTexture,K,Ie)}}else if(A!==null&&K!==0){const Ie=ee.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(A,G,K,J,X,ge,Le,ke=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){k.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const $e=A.textures[ke],nt=$e.format,Je=$e.type;if(!et.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-J&&K>=0&&K<=A.height-X&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(G,K,J,X,We.convert(nt),We.convert(Je),ge))}finally{const $e=D!==null?ee.get(D).__webglFramebuffer:null;k.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,G,K,J,X,ge,Le,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie)if(G>=0&&G<=A.width-J&&K>=0&&K<=A.height-X){k.bindFramebuffer(F.FRAMEBUFFER,Ie);const $e=A.textures[ke],nt=$e.format,Je=$e.type;if(!et.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(G,K,J,X,We.convert(nt),We.convert(Je),0);const Ct=D!==null?ee.get(D).__webglFramebuffer:null;k.bindFramebuffer(F.FRAMEBUFFER,Ct);const Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tM(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(ut),F.deleteSync(Ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,K=0){const J=Math.pow(2,-K),X=Math.floor(A.image.width*J),ge=Math.floor(A.image.height*J),Le=G!==null?G.x:0,ke=G!==null?G.y:0;ne.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Le,ke,X,ge),k.unbindTexture()};const Yr=F.createFramebuffer(),bi=F.createFramebuffer();this.copyTextureToTexture=function(A,G,K=null,J=null,X=0,ge=null){ge===null&&(X!==0?($a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Le,ke,Ie,$e,nt,Je,ut,Ct,Ut;const Ft=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(K!==null)Le=K.max.x-K.min.x,ke=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,$e=K.min.x,nt=K.min.y,Je=K.isBox3?K.min.z:0;else{const In=Math.pow(2,-X);Le=Math.floor(Ft.width*In),ke=Math.floor(Ft.height*In),A.isDataArrayTexture?Ie=Ft.depth:A.isData3DTexture?Ie=Math.floor(Ft.depth*In):Ie=1,$e=0,nt=0,Je=0}J!==null?(ut=J.x,Ct=J.y,Ut=J.z):(ut=0,Ct=0,Ut=0);const Lt=We.convert(G.format),He=We.convert(G.type);let mt;G.isData3DTexture?(ne.setTexture3D(G,0),mt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),mt=F.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const xt=F.getParameter(F.UNPACK_ROW_LENGTH),An=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ci=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),Hi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const Et=A.isDataArrayTexture||A.isData3DTexture,$t=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const In=ee.get(A),en=ee.get(G),Yt=ee.get(In.__renderTarget),qr=ee.get(en.__renderTarget);k.bindFramebuffer(F.READ_FRAMEBUFFER,Yt.__webglFramebuffer),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Ri=0;Ri<Ie;Ri++)Et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,X,Je+Ri),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(G).__webglTexture,ge,Ut+Ri)),F.blitFramebuffer($e,nt,Le,ke,ut,Ct,Le,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);k.bindFramebuffer(F.READ_FRAMEBUFFER,null),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||ee.has(A)){const In=ee.get(A),en=ee.get(G);k.bindFramebuffer(F.READ_FRAMEBUFFER,Yr),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,bi);for(let Yt=0;Yt<Ie;Yt++)Et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,In.__webglTexture,X,Je+Yt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,In.__webglTexture,X),$t?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,ge,Ut+Yt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,ge),X!==0?F.blitFramebuffer($e,nt,Le,ke,ut,Ct,Le,ke,F.COLOR_BUFFER_BIT,F.NEAREST):$t?F.copyTexSubImage3D(mt,ge,ut,Ct,Ut+Yt,$e,nt,Le,ke):F.copyTexSubImage2D(mt,ge,ut,Ct,$e,nt,Le,ke);k.bindFramebuffer(F.READ_FRAMEBUFFER,null),k.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(mt,ge,ut,Ct,Ut,Le,ke,Ie,Lt,He,Ft.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(mt,ge,ut,Ct,Ut,Le,ke,Ie,Lt,Ft.data):F.texSubImage3D(mt,ge,ut,Ct,Ut,Le,ke,Ie,Lt,He,Ft):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,ut,Ct,Le,ke,Lt,He,Ft.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,ut,Ct,Ft.width,Ft.height,Lt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,ge,ut,Ct,Le,ke,Lt,He,Ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,An),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ci),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Hi),ge===0&&G.generateMipmaps&&F.generateMipmap(mt),k.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){R=0,P=0,D=null,k.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}var Hg;const Mt=(Hg=window.Telegram)==null?void 0:Hg.WebApp,Og="/yggdrasil-tma/",$l=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],FA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],kg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},zg=()=>{try{const t={...kg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...kg,watch:Date.now()}}},ca=()=>new Date().toISOString().slice(0,10),OA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Fd=[3,5,8,12,18,25,40],kA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],zA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Od=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],ua={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},Bg={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},kd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},zd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function yr({name:t,className:e}){return H.jsx("img",{src:t.includes(".")?`${Og}img/${t}`:`${Og}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const BA=`
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
`,hc=(t,e=.9,n=0)=>new St({color:t,roughness:e,metalness:n}),da=(t,e,n,i,r=.9)=>new ue(new vn(t,e,n),hc(i,r)),Ce=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function HA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function VA(t){const e=new rt,n=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,i=t.gender==="f"?14265738:13210479,r=new ue(new mo(.42,.72,4,8),hc(n,.88));r.position.y=.9,e.add(r);const s=new ue(new Cn(.34,16,12),hc(i,.9));s.position.y=1.62,e.add(s);const o=new ue(new Cn(.36,12,8),hc(t.id==="elf"?12110033:2760989,.95));o.scale.y=.55,o.position.y=1.82,e.add(o);const a=da(.2,.72,.22,2106150,.96),l=a.clone();a.position.set(-.15,.36,0),l.position.set(.15,.36,0),e.add(a,l);const c=da(.9,.22,.5,n,.88);c.position.y=1.23,e.add(c);const f=da(.68,.95,.09,t.id==="berserk"?2821132:1582894,.98);f.position.set(0,.95,-.34),e.add(f);const d=da(.08,1.35,.08,12830922,.38);d.position.set(.58,1.08,0),d.rotation.z=-.35,e.add(d);const h=da(.1,.38,.1,5321246,.95);h.position.set(.54,.45,0),e.add(h);const p=new ue(new go(.65,24),new cu({color:0,transparent:!0,opacity:.32}));return p.rotation.x=-Math.PI/2,p.position.y=.02,e.add(p),HA(e)}function GA({h:t,on:e,eventDone:n}){const i=vt.useRef(null),r=vt.useRef(null),s=vt.useRef(null),o=vt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=vt.useState(""),[c,f]=vt.useState(!1),[d,h]=vt.useState(!1),[p,_]=vt.useState(!1),[E,g]=vt.useState(!1),u=vt.useRef({x:0,z:1}),m=vt.useRef(!1),v=vt.useRef(null);vt.useEffect(()=>{const M=i.current;if(!M)return;const x=new AM;x.background=new yt(9414817),x.fog=new Cp(8097158,.0058);const N=new $n(54,1,.1,280);N.position.set(0,8.5,17);const B=new UA({antialias:!0,powerPreference:"high-performance"});B.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),B.shadowMap.enabled=!0,B.shadowMap.type=nx,B.outputColorSpace=On,B.toneMapping=rx,B.toneMappingExposure=1.08,M.appendChild(B.domElement);const q=new qM(14477797,4014136,1.38);x.add(q);const Q=new cg(16773583,3.15);Q.position.set(-42,58,34),Q.castShadow=!0,Q.shadow.mapSize.set(1024,1024),Q.shadow.camera.left=-95,Q.shadow.camera.right=95,Q.shadow.camera.top=95,Q.shadow.camera.bottom=-95,Q.shadow.bias=-5e-4,x.add(Q);const re=new cg(12110789,.58);re.position.set(55,18,-60),x.add(re);const V=(S,b)=>{const w=Math.sin(S*.075)*.7+Math.cos(b*.062)*.55+Math.sin((S-b)*.045)*.35,I=Math.exp(-(S*S/850+(b+2)*(b+2)/1050)),$=Math.exp(-(S*S/150+(b-12)*(b-12)/2200));return w*(1-I*.88)-$*.18},Y=S=>{const b=document.createElement("canvas");b.width=b.height=512;const w=b.getContext("2d"),I=j=>Math.abs(Math.sin(j*12.9898)*43758.5453)%1;if(S==="ground"){w.fillStyle="#3f4d38",w.fillRect(0,0,512,512);for(let j=0;j<1800;j++){const le=I(j*1.17)*512,ce=I(j*2.31)*512,Me=10+I(j*3.71)*28,ie=I(j*4.13);w.fillStyle=ie>.72?`rgba(96,108,63,${.08+I(j)*.12})`:`rgba(30,36,25,${.05+I(j)*.12})`,w.beginPath(),w.arc(le,ce,Me,0,Math.PI*2),w.fill()}for(let j=0;j<650;j++){const le=I(j*7.1)*512,ce=I(j*8.2)*512;w.strokeStyle=`rgba(118,126,78,${.16+I(j*2)*.16})`,w.lineWidth=1+I(j*4)*1.5,w.beginPath(),w.moveTo(le,ce),w.lineTo(le+(I(j*5)-.5)*5,ce-3-I(j*6)*5),w.stroke()}}else if(S==="wood"){w.fillStyle="#5a3d29",w.fillRect(0,0,512,512);for(let j=0;j<512;j+=22)w.fillStyle=`rgba(25,15,9,${.18+I(j)*.13})`,w.fillRect(0,j,512,3),w.strokeStyle=`rgba(154,111,69,${.08+I(j*2)*.08})`,w.lineWidth=2,w.beginPath(),w.moveTo(0,j+7),w.bezierCurveTo(150,j+2,340,j+13,512,j+5),w.stroke();for(let j=0;j<65;j++){const le=I(j*2.1)*512;w.fillStyle=`rgba(20,12,8,${.12+I(j*3)*.16})`,w.fillRect(le,0,2+I(j*4)*3,512)}}else if(S==="roof"){w.fillStyle="#252522",w.fillRect(0,0,512,512);for(let j=-30;j<550;j+=25){w.fillStyle=`rgba(105,94,77,${.12+I(j)*.08})`,w.fillRect(0,j,512,2),w.strokeStyle="rgba(12,12,11,.48)",w.lineWidth=3;for(let le=-40;le<560;le+=38)w.beginPath(),w.moveTo(le,j),w.lineTo(le-18,j+28),w.stroke()}for(let j=0;j<180;j++)w.fillStyle=`rgba(170,154,123,${.03+I(j)*.07})`,w.fillRect(I(j*2)*512,I(j*3)*512,2+I(j*4)*7,2)}else{w.fillStyle="#514333",w.fillRect(0,0,512,512);for(let j=0;j<1300;j++){const le=I(j*1.3)*512,ce=I(j*2.7)*512;w.fillStyle=`rgba(${45+I(j*3)*38},${35+I(j*4)*28},${23+I(j*5)*20},${.08+I(j*6)*.18})`,w.fillRect(le,ce,2+I(j*7)*7,1+I(j*8)*4)}}const $=new PM(b);return $.wrapS=$.wrapT=kc,$.colorSpace=On,$.anisotropy=4,$},U=Y("ground");U.repeat.set(5,6);const se=new Zi(190,190,62,62),de=se.attributes.position;for(let S=0;S<de.count;S++){const b=de.getX(S),w=-de.getY(S);de.setZ(S,V(b,w))}se.rotateX(-Math.PI/2),se.computeVertexNormals();const Te=new ue(se,new St({map:U,roughness:1}));Te.receiveShadow=!0,x.add(Te);const ve=(S,b,w)=>(b&&(S.userData={id:b,label:w||b}),S.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)}),x.add(S),b&&pe.push(S),S),Ee=(S,b=.9,w=0)=>new St({color:S,roughness:b,metalness:w}),ae=(S,b,w,I,$=.9)=>new ue(new vn(S,b,w),Ee(I,$)),pe=[],oe=[],fe=[],Ue=[],Ze=[],Xe=.62,Qe=(S,b,w,I,$=0,j=.12)=>Ze.push({kind:"rect",x:S,z:b,w:w+j*2,d:I+j*2,rot:$}),_t=(S,b,w,I=.12)=>Ze.push({kind:"circle",x:S,z:b,r:w+I}),F=(S,b,w,I,$,j=.12)=>Ze.push({kind:"segment",x1:S,z1:b,x2:w,z2:I,r:$+j}),Pt=(S,b,w)=>{if(w.kind==="circle")return Math.hypot(S-w.x,b-w.z)<w.r+Xe;if(w.kind==="rect"){const ie=Math.cos(w.rot),Ge=Math.sin(w.rot),ze=S-w.x,dt=b-w.z,gt=ie*ze-Ge*dt,ft=Ge*ze+ie*dt,Tt=Math.max(-w.w/2,Math.min(w.w/2,gt)),ui=Math.max(-w.d/2,Math.min(w.d/2,ft));return Math.hypot(gt-Tt,ft-ui)<Xe}const I=w.x2-w.x1,$=w.z2-w.z1,j=I*I+$*$,le=j>0?Math.max(0,Math.min(1,((S-w.x1)*I+(b-w.z1)*$)/j)):0,ce=w.x1+I*le,Me=w.z1+$*le;return Math.hypot(S-ce,b-Me)<w.r+Xe},it=(S,b)=>m.current?S<cn-2.72||S>cn+2.72||b<tn-2.05||b>tn+2.3:Ze.some(w=>Pt(S,b,w)),et=(S,b,w)=>{if(m.current){const j=Math.max(cn-2.55,Math.min(cn+2.55,b)),le=Math.max(tn-1.92,Math.min(tn+2.55,w));S.x=j,S.z=le;return}const I=Math.max(-88,Math.min(88,b)),$=Math.max(-89,Math.min(89,w));if(!it(I,$)){S.x=I,S.z=$;return}it(I,S.z)||(S.x=I),it(S.x,$)||(S.z=$)},k=Ee(3425343,1);for(let S=0;S<22;S++){const b=new rt,w=-105+S*10,I=8+Ce(S,7)*9,$=new ue(new Fn(I,18+Ce(S,8)*16,7),k);$.position.y=8,b.add($),b.position.set(w,-1,-94+Ce(S,9)*11),ve(b)}const be=[];for(let S=0;S<=24;S++){const b=-94+S*8,w=-57+Math.sin(S*.55)*3.6;be.push(new O(w,V(w,b)-.05,b))}const ee=new Sh(be),ne=new Wc(ee,64,5.8,8,!1),qe=new ue(ne,new St({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));qe.scale.y=.025,qe.position.y=.05,qe.receiveShadow=!0,x.add(qe);for(let S=0;S<50;S++){const b=-92+S*3.7,w=-57+Math.sin(S*.55)*3.6,I=.35+Ce(S,15)*.6,$=new ue(new Kt(I,1),Ee(6185562,1));$.scale.y=.55,$.position.set(w+(Ce(S,16)-.5)*10,V(w,b)+.25,b),ve($),_t($.position.x,$.position.z,I*.9,.03)}const Ve=(S,b)=>{const w=S.map(([ce,Me])=>new O(ce,V(ce,Me)+.035,Me)),I=[],$=[];for(let ce=0;ce<w.length;ce++){const Me=w[Math.max(0,ce-1)],ie=w[Math.min(w.length-1,ce+1)],Ge=ie.x-Me.x,ze=ie.z-Me.z,dt=Math.max(.001,Math.hypot(Ge,ze)),gt=-ze/dt,ft=Ge/dt;if(I.push(w[ce].x+gt*b/2,w[ce].y,w[ce].z+ft*b/2,w[ce].x-gt*b/2,w[ce].y+.01,w[ce].z-ft*b/2),ce<w.length-1){const Tt=ce*2;$.push(Tt,Tt+1,Tt+2,Tt+1,Tt+3,Tt+2)}}const j=new pn;j.setAttribute("position",new Rt(I,3)),j.setIndex($),j.computeVertexNormals();const le=new ue(j,new St({map:Y("road"),roughness:1}));le.receiveShadow=!0,x.add(le),[-b*.22,b*.22].forEach(ce=>{const Me=w.map((ze,dt)=>{const gt=w[Math.max(0,dt-1)],ft=w[Math.min(w.length-1,dt+1)],Tt=ft.x-gt.x,ui=ft.z-gt.z,ur=Math.max(.001,Math.hypot(Tt,ui));return new O(ze.x+-ui/ur*ce,ze.y+.045,ze.z+Tt/ur*ce)}),ie=new Wc(new Sh(Me),Math.max(12,w.length*4),.055,5,!1),Ge=new ue(ie,Ee(3352863,1));Ge.scale.y=.12,x.add(Ge)})};Ve([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),Ve([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),Ve([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),Ve([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),Ve([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),Ve([[4,14],[-3,22],[-7,31],[-8,42]],3.8),Ve([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),Ve([[4,14],[10,28],[18,41],[27,57]],3.8),Ve([[5,31],[15,45],[27,57],[39,70]],3.7),Ve([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),Ve([[-39,-8],[-47,-12],[-53,-15]],3.4);const L=Y("wood");L.repeat.set(2,1);const T=Y("roof");T.repeat.set(2,2);const W=(S,b,w,I,$,j,le,ce,Me)=>{const ie=new rt;ie.rotation.y=$,ie.position.set(S,V(S,b),b),ie.userData={id:le,label:j};const Ge=new St({color:5856085,roughness:1}),ze=new St({map:L,color:ce,roughness:.92});Ee(2695193,1);const dt=ae(w+.7,.62,I+.7,5658706,1);dt.position.y=.31,ie.add(dt);const gt=new ue(new vn(w,3.55,I),ze);gt.position.y=2.05,ie.add(gt);for(const Vi of[-w*.46,w*.46])for(const Jr of[-I*.5,I*.5]){const fr=ae(.34,3.9,.34,2760728,1);fr.position.set(Vi,2.08,Jr),ie.add(fr)}const ft=ae(1.18,2.15,.18,2365714,1);ft.position.set(0,1.35,I/2+.17),ie.add(ft);const Tt=ae(.14,2.35,.22,3811613,1),ui=Tt.clone();Tt.position.set(-.67,1.42,I/2+.2),ui.position.set(.67,1.42,I/2+.2),ie.add(Tt,ui);for(const Vi of[-w*.27,w*.27]){const Jr=ae(1.15,.95,.14,2760987,1);Jr.position.set(Vi,2.18,I/2+.18),ie.add(Jr);const fr=new ue(new vn(.88,.68,.06),new St({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));fr.position.set(Vi,2.18,I/2+.255),ie.add(fr);const Sm=ae(.07,.76,.12,2760987,1);Sm.position.set(Vi,2.18,I/2+.3),ie.add(Sm);const Mm=ae(1,.07,.12,2760987,1);Mm.position.set(Vi,2.18,I/2+.3),ie.add(Mm)}const ur=new St({map:T,color:Me,roughness:.98,side:_i}),Zr=new ue(new Zi(w*.82,I+1),ur),dr=new ue(new Zi(w*.82,I+1),ur);Zr.rotation.x=Math.PI/2,dr.rotation.x=Math.PI/2,Zr.rotation.z=.62,dr.rotation.z=-.62,Zr.position.set(-w*.22,4.22,0),dr.position.set(w*.22,4.22,0),ie.add(Zr,dr);const Ls=ae(.3,.28,I+1.08,2826523,1);Ls.position.y=5.08,ie.add(Ls);const Xo=ae(w*.34,.16,1,6439467,1);Xo.position.set(0,.68,I/2+.54),ie.add(Xo);const jo=new ue(new vn(.62,2,.62),Ge);jo.position.set(w*.24,5.15,-I*.08),ie.add(jo);const Au=ae(.82,.12,.82,3486254,1);Au.position.set(w*.24,6.17,-I*.08),ie.add(Au),ve(ie,le,j),pe.push(ie),Qe(S,b,w+.85,I+.85,$,.05)};W(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),W(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),W(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),W(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),W(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),W(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Z=new rt;Z.position.set(-10,V(-10,-5),-5),Z.userData={id:"forge",label:"Кузница"};const me=ae(9,3.8,6,5126701,1);me.position.y=1.9,Z.add(me);const te=ae(2.8,3.6,.28,2760986,1);te.position.set(-3.1,1.9,3.05),Z.add(te);const Re=new ue(new vn(5.5,.24,6.7),new St({map:T,color:2433826,roughness:1}));Re.rotation.z=.58,Re.position.set(-2,4.2,0),Z.add(Re);const Se=Re.clone();Se.rotation.z=-.58,Se.position.x=2,Z.add(Se);const je=ae(2.2,1.8,1.7,3486512,1);je.position.set(-2,1,1.15),Z.add(je);const Ye=new ue(new go(.55,16),new St({color:16739364,emissive:16726795,emissiveIntensity:5}));Ye.rotation.y=Math.PI,Ye.position.set(-2,1.05,2.02),Z.add(Ye);const we=ae(1.4,.35,.55,2435114,.4);we.position.set(1.2,1.05,1.15),Z.add(we);const Ne=ae(.5,.9,.5,2697770,.45);Ne.position.set(1.2,.62,1.15),Z.add(Ne);for(let S=0;S<4;S++){const b=ae(.09,1.35,.09,11184548,.35);b.position.set(2.1+S*.18,1.1,1.3),b.rotation.z=-.3+S*.18,Z.add(b)}ve(Z,"forge","Кузница"),pe.push(Z),Qe(-10,-5,9.6,6.6,0,.05);const tt=new la(16742962,3.2,13,2);tt.position.set(-12,V(-12,-5)+2.2,-4),x.add(tt);const We=new ue(new go(8.5,32),new St({color:7035463,roughness:1}));We.rotation.x=-Math.PI/2,We.position.set(1,V(1,0)+.05,0),We.receiveShadow=!0,x.add(We);for(let S=0;S<18;S++){const b=S/18*Math.PI*2,w=new ue(new Kt(.38,1),Ee(7039843,1));w.position.set(1+Math.cos(b)*8.8,V(1+Math.cos(b)*8.8,Math.sin(b)*8.8)+.22,Math.sin(b)*8.8),x.add(w)}const Pe=(S,b)=>{const w=new rt,I=ae(2.8,.22,1,6832937,1);I.position.y=1.05,w.add(I);for(const $ of[-1.05,1.05]){const j=ae(.16,1,.16,3877149,1);j.position.set($,.5,-.32),w.add(j);const le=j.clone();le.position.z=.32,w.add(le)}w.position.set(S,V(S,b),b),x.add(w)};Pe(-4,2),Pe(7,3);const st=(S,b,w)=>{const I=new rt;I.position.set(S,V(S,b),b);for(let ie=0;ie<7;ie++){const Ge=ie/7*Math.PI*2,ze=new ue(new Kt(.32*w,1),Ee(6117970,1));ze.position.set(Math.cos(Ge)*.7*w,.25*w,Math.sin(Ge)*.7*w),I.add(ze)}const $=ae(.2*w,.2*w,1.5*w,4861211,1),j=$.clone();$.rotation.y=.55,j.rotation.y=-.55,$.position.y=j.position.y=.38*w,I.add($,j);const le=new St({color:16744744,emissive:16731402,emissiveIntensity:4}),ce=new ue(new Fn(.5*w,1.35*w,8),le);ce.position.y=1.02*w,I.add(ce),x.add(I);const Me=new la(16747068,2.4*w,12*w,2);return Me.position.set(S,V(S,b)+2*w,b),x.add(Me),oe.push({light:Me,flame:ce,phase:Ce(S,b)*8}),I};st(1,0,1.15),st(18,-15,.72);const z=(S,b,w,I,$=1.25)=>{const j=new rt,le=w-S,ce=I-b,Me=Math.hypot(le,ce),ie=Math.max(1,Math.floor(Me/1.55));for(let Ge=0;Ge<=ie;Ge++){const ze=Ge/ie,dt=S+le*ze,gt=b+ce*ze,ft=ae(.18,$,.18,4796447,1);ft.position.set(dt,V(dt,gt)+$/2,gt),j.add(ft)}for(const Ge of[-.28,.38]){const ze=ae(.14,.14,Me,5978917,1);ze.rotation.y=Math.atan2(le,ce),ze.position.set((S+w)/2,V((S+w)/2,(b+I)/2)+$*Ge,(b+I)/2),j.add(ze)}x.add(j),F(S,b,w,I,.12,.02)},xe=(S,b,w,I,$,j,le)=>{const ce=new rt;ce.position.set(S,V(S,b),b),ce.rotation.y=$,ce.userData={id:le,label:j};const Me=ae(w+.25,.35,I+.25,5591368,1);Me.position.y=.18,ce.add(Me);const ie=new ue(new vn(w,2.5,I),new St({map:L,color:6439983,roughness:1}));ie.position.y=1.45,ce.add(ie);const Ge=new ue(new vn(w+.6,.18,I+.65),new St({map:T,color:2696996,roughness:1}));Ge.rotation.z=.55,Ge.position.set(-.16,3,0),ce.add(Ge);const ze=Ge.clone();ze.rotation.z=-.55,ze.position.x=.16,ce.add(ze);const dt=ae(1.05,1.75,.12,2759700,1);dt.position.set(0,1.05,I/2+.07),ce.add(dt),ve(ce,le,j),pe.push(ce),Qe(S,b,w+.55,I+.55,$,.04)},Ae=(S,b,w=1)=>{const I=new rt;I.position.set(S,V(S,b),b);const $=new ue(new rn(.65*w,.65*w,1.2*w,10),Ee(9073729,1));$.rotation.z=Math.PI/2,$.position.y=.62*w,I.add($);for(let j=0;j<3;j++){const le=new ue(new nn(.66*w,.025*w,5,18),Ee(5851693,1));le.rotation.y=Math.PI/2,le.position.y=(.28+j*.34)*w,I.add(le)}ve(I)},Fe=(S,b,w)=>{const I=new rt;I.position.set(S,V(S,b),b),I.rotation.y=w;const $=ae(2.8,.28,1.45,6636331,1);$.position.y=1,I.add($);for(const le of[-1.15,1.15])for(const ce of[-.55,.55]){const Me=ae(.16,1.15,.16,4401950,1);Me.position.set(le,.55,ce),I.add(Me)}for(const le of[-1.15,1.15]){const ce=new ue(new rn(.5,.5,.18,14),Ee(2696738,1));ce.rotation.z=Math.PI/2,ce.position.set(le,.52,-.92),I.add(ce)}const j=ae(.16,.16,2.4,4796447,1);j.rotation.x=Math.PI/2,j.position.set(0,.72,-2),I.add(j),ve(I)},_e=(S,b,w=0)=>{const I=new rt;I.position.set(S,V(S,b),b),I.rotation.y=w;const $=ae(2.2,.16,.5,7359021,1);$.position.y=.85,I.add($);for(const j of[-.78,.78]){const le=ae(.12,.8,.12,4139549,1);le.position.set(j,.4,0),I.add(le)}ve(I)},he=(S,b)=>{const w=new rt;w.position.set(S,V(S,b),b);for(let le=0;le<10;le++){const ce=le/10*Math.PI*2,Me=ae(.45,.38,.38,6710621,1);Me.position.set(Math.cos(ce)*.95,.19,Math.sin(ce)*.95),Me.rotation.y=ce,w.add(Me)}const I=ae(.16,2.2,.16,4861984,1),$=I.clone();I.position.set(-.9,1.2,0),$.position.set(.9,1.2,0),w.add(I,$);const j=ae(2,.16,.16,3876891,1);j.position.y=2.25,w.add(j),ve(w)};xe(-19,31,8,5,.08,"Амбар","barn"),xe(17,34,7,5,-.2,"Сарай","shed"),xe(27,13,6,4,.45,"Склад рыбака","fishshed"),z(-25,27,-13,27),z(-25,27,-25,38),z(-25,38,-14,38),z(12,29,25,29),z(25,29,25,40),z(25,40,12,40),z(29,-1,39,-1),z(39,-1,39,10),z(39,10,30,10);for(const S of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Ae(S[0],S[1],S[2]);Fe(-17,24,.18),Fe(29,-5,-.55),_e(-20,23,.18),_e(25,31,-.2),W(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),W(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),W(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),W(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Qe(-31,8,7.8,5.8,.1,.04),Qe(-27,20,7.8,5.8,-.25,.04),Qe(31,18,7.8,5.8,.32,.04),Qe(20,24,7.8,5.8,-.12,.04);const Be=(S,b,w)=>{const I=new rt;I.position.set(S,V(S,b),b),I.rotation.y=w;const $=ae(3,.18,1.25,7357994,1);$.position.y=1.45,I.add($);for(const le of[-1.25,1.25])for(const ce of[-.48,.48]){const Me=ae(.13,1.45,.13,4270877,1);Me.position.set(le,.72,ce),I.add(Me)}const j=new ue(new Fn(1.65,2.5,4,1,!1,Math.PI/4),Ee(4798510,1));j.scale.z=.55,j.position.y=2.15,I.add(j),ve(I)};Be(-5,-7,.12),Be(8,-5,-.18),Be(6,7,.5);for(const S of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])he(S[0],S[1]);const ot=(S,b,w=1)=>{const I=new rt,$=V(S,b);for(let j=0;j<5;j++){const le=new ue(new Cn((.28+Ce(j,S)*.18)*w,8,6),Ee(j%2?3494457:4284223,1));le.position.set((Ce(j,2)-.5)*.7*w,.28*w,(Ce(j,3)-.5)*.7*w),I.add(le)}I.position.set(S,$,b),ve(I)};for(let S=0;S<48;S++){const b=Ce(S,501)*Math.PI*2,w=18+Ce(S,502)*39,I=Math.cos(b)*w,$=Math.sin(b)*w+4;Math.abs(I)<9&&Math.abs($)<14||ot(I,$,.65+Ce(S,503)*.75)}for(let S=0;S<34;S++){const b=-84+Ce(S,610)*168,w=-82+Ce(S,611)*164;if(Math.hypot(b,w-2)<24)continue;const I=.25+Ce(S,612)*.55,$=new ue(new Kt(I,1),Ee(5725013,1));$.scale.y=.55,$.position.set(b,V(b,w)+I*.28,w),$.rotation.set(Ce(S,613),Ce(S,614),Ce(S,615)),ve($),_t(b,w,I*.8,.03)}W(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),xe(-58,42,6,4,-.12,"Старый амбар","oldbarn"),z(-70,32,-60,32),z(-70,32,-70,43),z(-70,43,-61,43),Ae(-67,39,.9),Fe(-61,33,-.25),he(-57,34);const bt=new rt;bt.position.set(-63,V(-63,47),47);for(let S=0;S<6;S++){const b=ae(10,.035,.12,4208682,1);b.position.set(0,.02,(S-2.5)*1.05),b.rotation.y=.06,bt.add(b)}ve(bt);const lt=new rt;lt.position.set(39,V(39,70),70),lt.userData={id:"runefield",label:"Поле Рун"};const ci=Ee(5593942,1),Wn=new St({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let S=0;S<11;S++){const b=Ce(S,1201)*Math.PI*2,w=3.5+Ce(S,1202)*8,I=new ue(new Kt(.65+Ce(S,1203)*.38,1),ci);I.scale.y=1.4+Ce(S,1204)*1.5,I.position.set(Math.cos(b)*w,I.scale.y*.48,Math.sin(b)*w),I.rotation.set(Ce(S,1205),b,Ce(S,1206)),lt.add(I);const $=new ue(new vn(.11,.035,.72),Wn);$.position.set(I.position.x,I.position.y+.55,I.position.z),$.rotation.y=-b+.45,lt.add($)}for(let S=0;S<5;S++){const b=ae(.22,1.8,.22,4861984,1);b.position.set(-6+S*3,.9,7.5),lt.add(b);const w=new ue(new nn(.34,.035,6,18),Wn);w.rotation.x=Math.PI/2,w.position.set(-6+S*3,1.55,7.5),lt.add(w)}const Uo=new rt;for(let S=0;S<7;S++){const b=S/7*Math.PI*2,w=new ue(new Kt(.3,1),Ee(5591885,1));w.position.set(Math.cos(b)*.65,.22,Math.sin(b)*.65),Uo.add(w)}lt.add(Uo),ve(lt,"runefield","Поле Рун"),pe.push(lt),_t(39,70,1,.08);const ti=(S,b,w,I)=>{const $=new rt,j=w-S,le=I-b,ce=Math.hypot(j,le),Me=Math.floor(ce/1.7);for(let Ge=0;Ge<=Me;Ge++){const ze=Ge/Me,dt=S+j*ze,gt=b+le*ze,ft=new ue(new Fn(.24,.24+2.8+Ce(Ge,S)*.5,6),Ee(3942940,1));ft.position.set(dt,V(dt,gt)+1.45,gt),$.add(ft)}const ie=ae(.3,.35,ce,2957593,1);ie.rotation.y=Math.atan2(j,le),ie.position.set((S+w)/2,V((S+w)/2,(b+I)/2)+1.25,(b+I)/2),$.add(ie),x.add($),F(S,b,w,I,.34,.08)};ti(-30,-31,-8,-31),ti(8,-31,30,-31),ti(-30,-31,-30,-13),ti(30,-31,30,16);const Ti=new rt;Ti.userData={id:"gate",label:"Ворота Мидгарда"};for(const S of[-4.2,4.2]){const b=ae(.8,6,.8,3482906,1);b.position.set(S,3,-31),Ti.add(b)}const Fo=ae(10,.8,1,2957336,1);Fo.position.set(0,6,-31),Ti.add(Fo);for(let S=-3;S<=3;S++){const b=ae(1,4.2,.22,5978660,1);b.position.set(S*1.15,2,-30.7),Ti.add(b)}ve(Ti,"gate","Ворота Мидгарда"),pe.push(Ti),_t(-4.2,-31,.55,.05),_t(4.2,-31,.55,.05);const Xn=new rt;Xn.userData={id:"mimir",label:"Колодец Мимира"},Xn.position.set(18,V(18,15),15);for(let S=0;S<14;S++){const b=S/14*Math.PI*2,w=ae(.7,.48,.5,6711907,1);w.position.set(Math.cos(b)*1.45,.24,Math.sin(b)*1.45),w.rotation.y=b+Math.PI/2,Xn.add(w)}const cr=new ue(new go(1.05,28),new St({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));cr.rotation.x=-Math.PI/2,cr.position.y=.5,Xn.add(cr);for(const S of[-1.35,1.35]){const b=ae(.22,3,.22,4861984,1);b.position.set(S,1.55,0),Xn.add(b)}const Oo=ae(3.1,.25,.25,3679513,1);Oo.position.y=2.95,Xn.add(Oo);const Xr=ae(.55,.5,.55,5913383,1);Xr.position.set(0,1.65,0),Xn.add(Xr);const bs=new ue(new nn(1.8,.06,8,40),new St({color:7792028,emissive:2653256,emissiveIntensity:3}));bs.rotation.x=Math.PI/2,bs.position.y=.53,Xn.add(bs),ve(Xn,"mimir","Колодец Мимира"),pe.push(Xn),_t(18,15,1.8,.08);const ko=new la(7530656,1.8,10,2);ko.position.set(18,V(18,15)+1.4,15),x.add(ko);const Ai=new rt;Ai.userData={id:"norns",label:"Прядильня норн"},Ai.position.set(-25,V(-25,43),43);for(let S=0;S<3;S++){const b=new ue(new mo(.65,2.3,5,8),Ee(5725529,1));b.position.set((S-1)*2.2,1.35,0),b.rotation.z=(S-1)*.07,Ai.add(b);const w=new ue(new nn(.42,.055,7,20),new St({color:[13100495,13149416,14795380][S],emissive:[6134129,7490961,9268264][S],emissiveIntensity:2.2}));w.rotation.x=Math.PI/2,w.position.set((S-1)*2.2,1.6,-.55),Ai.add(w)}const du=new yh({color:13944039,transparent:!0,opacity:.78});for(let S=0;S<2;S++){const b=[new O((S-1)*2.2,2,.1),new O((S-.5)*2.2,4.1,-.7),new O(S*2.2,2,.1)];Ai.add(new rg(new pn().setFromPoints(b),du))}const zo=new ue(new nn(4.1,.07,8,48),new St({color:12429522,emissive:6113136,emissiveIntensity:1.5}));zo.rotation.x=Math.PI/2,zo.position.y=.05,Ai.add(zo),ve(Ai,"norns","Прядильня норн"),pe.push(Ai),_t(-25,43,3,.1);const jr=-43,Yr=62,bi=new rt;bi.userData={id:"ritual",label:"Круг Силы"},bi.position.set(jr,V(jr,Yr),Yr);const A=Ee(6711651,1),G=Ee(5593685,1);for(let S=0;S<2;S++){const b=S===0?18:12,w=S===0?6.2:3.65;for(let I=0;I<b;I++){const $=I/b*Math.PI*2+S*.12,j=w+(Ce(I,930+S)*.5-.25),le=.42+Ce(I,940+S)*.48,ce=new ue(new Kt(.55+Ce(I,950+S)*.28,1),S===0?A:G);ce.scale.y=.65+le*.35,ce.position.set(Math.cos($)*j,le*.45,Math.sin($)*j),ce.rotation.set(Ce(I,960+S),$+Ce(I,970+S),Ce(I,980+S)),bi.add(ce)}}const K=new ue(new Kt(1.05,1),Ee(5593428,1));K.scale.set(1.25,.62,1.05),K.position.y=.5,bi.add(K);for(const S of[2.1,3.15,5.15]){const b=new ue(new nn(S,.045,7,64),new St({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));b.rotation.x=Math.PI/2,b.position.y=.055,bi.add(b)}const J=new St({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let S=0;S<8;S++){const b=S/8*Math.PI*2,w=new ue(new vn(.13,.025,.65),J);w.position.set(Math.cos(b)*4.55,.075,Math.sin(b)*4.55),w.rotation.y=-b,bi.add(w)}ve(bi,"ritual","Круг Силы"),pe.push(bi),_t(jr,Yr,1.25,.06);const X=new la(9226152,1.15,11,2);X.position.set(jr,V(jr,Yr)+1.6,Yr),x.add(X);const ge=new rt;ge.userData={id:"rune",label:"Древний камень Феху"},ge.position.set(27,V(27,57),57);const Le=new ue(new Kt(1.45,1),Ee(5002063,1));Le.position.y=1.2,ge.add(Le);const ke=new ue(new nn(1.05,.07,8,30),new St({color:16766826,emissive:10052371,emissiveIntensity:3}));ke.rotation.x=Math.PI/2,ke.position.y=1.2,ge.add(ke),ve(ge,"rune","Древний камень Феху"),pe.push(ge),_t(27,57,1.7,.1);const Ie=new rt;Ie.userData={id:"port",label:"Мост к причалу"};for(let S=-5;S<=5;S++){const b=ae(3.6,.28,.82,6307882,1);b.position.set(-53,V(-53,S*1)+.5,S),Ie.add(b)}ve(Ie,"port","Мост к причалу"),pe.push(Ie);const $e=new rt;$e.position.set(-46,V(-46,-15),-15);for(let S=0;S<7;S++){const b=ae(2.8,.24,.72,7030573,1);b.position.set(0,.3,S*.85),$e.add(b)}for(const S of[-1.2,1.2])for(let b=0;b<3;b++){const w=ae(.22,1.5,.22,4139292,1);w.position.set(S,-.2,b*2.5),$e.add(w)}const nt=ae(2.2,.55,4.8,4926493,1);nt.position.set(3,-.15,2.5),$e.add(nt),ve($e,"port","Речной причал"),pe.push($e);const Je=(S,b)=>{const w=new ue(new rn(.5,.5,1,12),Ee(6636332,1));w.position.set(S,V(S,b)+.5,b),x.add(w);for(const I of[.25,.76]){const $=new ue(new nn(.51,.045,6,18),Ee(3156004,.7,.1));$.rotation.x=Math.PI/2,$.position.set(S,V(S,b)+I,b),x.add($)}},ut=(S,b)=>{const w=ae(1,.75,1,7359022,1);w.position.set(S,V(S,b)+.38,b),x.add(w);const I=ae(.08,.82,1.05,3679770,1);I.position.set(S,V(S,b)+.38,b),x.add(I),Qe(S,b,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([S,b])=>Je(S,b)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([S,b])=>ut(S,b));const Ct=(S,b,w)=>{const I=new rt,$=V(S,b),j=Ee(3680287,1),le=new ue(new rn(.18*w,.34*w,4.6*w,10),j);le.position.y=2.3*w,le.rotation.z=(Ce(S,b)-.5)*.045,I.add(le);for(let Me=0;Me<5;Me++){const ie=new ue(new rn(.045*w,.095*w,(1.15+Me*.16)*w,7),j);ie.position.set((Ce(Me,S)-.5)*.45*w,(1.25+Me*.58)*w,(Ce(Me,b)-.5)*.38*w),ie.rotation.z=(Ce(Me+10,S)-.5)*.45,ie.rotation.y=Ce(Me+20,b)*Math.PI*2,I.add(ie)}const ce=[1979432,2573361,2968886,3430461,2309165];for(let Me=0;Me<6;Me++){const Ge=(1.55-.72*(Me/5))*w,ze=new ue(new Fn(Ge,.95*w,9,1),Ee(ce[Me%ce.length],1));ze.scale.x=.88+Ce(Me,S)*.18,ze.scale.z=.84+Ce(Me,b)*.2,ze.position.set((Ce(Me*4,S)-.5)*.28*w,(2.05+Me*.62)*w,(Ce(Me*5,b)-.5)*.28*w),ze.rotation.y=Ce(Me+40,S)*Math.PI*2,I.add(ze)}if(w>1.15)for(let Me=0;Me<3;Me++){const ie=new ue(new Fn(.62*w,.7*w,8),Ee(ce[(Me+2)%ce.length],1));ie.position.set((Me-1)*.38*w,.72*w,(Ce(Me,b)-.5)*.3*w),ie.rotation.y=Ce(Me+70,S)*Math.PI*2,I.add(ie)}I.position.set(S,$,b),ve(I),w>=1.15&&_t(S,b,.42*w,.04)},Ut=(S,b,w,I=!1)=>{const $=new rt,j=V(S,b),le=Ee(I?4207145:4863015,1),ce=new ue(new rn(.32*w,.52*w,5.8*w,11),le);ce.position.y=2.9*w,ce.rotation.z=(Ce(S,b)-.5)*.035,$.add(ce);const Me=I?8:6;for(let ie=0;ie<Me;ie++){const Ge=ie/Me*Math.PI*2+Ce(ie,S)*.25,ze=(1.65+Ce(ie+30,b)*1.35)*w,dt=new ue(new rn(.075*w,.16*w,ze,8),le);dt.position.set(Math.cos(Ge)*ze*.34,(3.35+Ce(ie+40,S)*1.25)*w,Math.sin(Ge)*ze*.34),dt.rotation.z=Math.cos(Ge)*.78,dt.rotation.x=Math.sin(Ge)*.78,dt.rotation.y=-Ge,$.add(dt);for(let gt=0;gt<3;gt++){const ft=new ue(new Cn((.42+Ce(gt+ie,90)*.22)*w,8,6),Ee(gt%2?4808772:3888955,1)),Tt=.55+gt*.18;ft.position.set(Math.cos(Ge)*ze*.62+(Ce(gt,ie)-.5)*.35*w,(3.55+Ce(ie,gt)*1.15+Tt)*w,Math.sin(Ge)*ze*.62+(Ce(gt+4,ie)-.5)*.35*w),ft.scale.y=.72,$.add(ft)}}for(let ie=0;ie<(I?7:4);ie++){const Ge=Ce(ie+100,S)*Math.PI*2,ze=new ue(new rn(.025*w,.055*w,(.9+Ce(ie,b)*.7)*w,6),le);ze.position.set(Math.cos(Ge)*1.05*w,(3.15+Ce(ie+5,S)*1.5)*w,Math.sin(Ge)*1.05*w),ze.rotation.z=(Ce(ie+8,b)-.5)*.35,$.add(ze)}$.position.set(S,j,b),ve($),w>=1.2&&_t(S,b,.62*w,.04)},Ft=(S,b,w,I)=>{const $=new rt,j=Ee(9071949,1),le=Ee(3418916,1),ce=Ee(11576718,1),Me=new ue(new mo(.46*w,1*w,6,10),j);Me.rotation.z=Math.PI/2,Me.position.y=.9*w,$.add(Me);const ie=new ue(new rn(.24*w,.32*w,.84*w,8),j);ie.position.set(.48*w,1.25*w,0),ie.rotation.z=-.35,$.add(ie);const Ge=new ue(new Cn(.31*w,10,7),j);Ge.scale.set(1.25,.9,1),Ge.position.set(.77*w,1.58*w,0),$.add(Ge);const ze=new ue(new Cn(.14*w,8,5),le);ze.scale.z=.72,ze.position.set(1*w,1.53*w,0),$.add(ze);for(const gt of[-.25,.25])for(const ft of[-.27,.34]){const Tt=new ue(new rn(.065*w,.09*w,.72*w,6),le);Tt.position.set(ft*w,.48*w,gt*w),Tt.rotation.z=ft<0?.08:-.06,$.add(Tt)}for(const gt of[-1,1])for(let ft=0;ft<4;ft++){const Tt=new ue(new rn(.028*w,.05*w,.38*w,5),ce);Tt.position.set(.7*w,(1.82+ft*.13)*w,gt*(.11+ft*.055)*w),Tt.rotation.z=gt*(.45-ft*.08),$.add(Tt)}const dt=new ue(new Cn(.13*w,7,5),j);dt.position.set(-.52*w,1.05*w,0),dt.scale.set(.7,1.2,.7),$.add(dt),$.position.set(S,V(S,b),b),$.userData={phase:I},ve($),Ue.push({g:$,x:S,z:b,r:4+Ce(I,41)*3,speed:1.25+Ce(I,42)*.8,phase:I,kind:"deer"})},Lt=(S,b)=>{const w=new rt,I=Ee(6965552,1),$=Ee(3089436,1),j=new ue(new Cn(.22,8,6),I);j.scale.set(1.35,.9,.9),j.position.y=.72,w.add(j);const le=new ue(new Cn(.17,8,6),I);le.position.set(.22,.86,0),w.add(le);for(const ie of[-1,1]){const Ge=new ue(new Fn(.06,.18,6),I);Ge.position.set(.17,.99,ie*.09),w.add(Ge)}const ce=new ue(new nn(.24,.075,7,14,Math.PI*1.65),I);ce.rotation.y=Math.PI/2,ce.position.set(-.22,.91,0),w.add(ce);const Me=new ue(new Cn(.025,6,4),$);Me.position.set(.35,.9,-.12),w.add(Me),w.position.set(S,V(S,b),b),ve(w,"ratatosk","Белка Рататоск"),pe.push(w),_t(S,b,.28,.02),Ue.push({g:w,x:S,z:b,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},He=-4,mt=69,xt=new rt;xt.userData={id:"ashgrove",label:"Роща Ясеня"};const An=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[S,b,w,I]of An)Ut(He+S,mt+b,w,I);for(let S=0;S<9;S++){const b=S/9*Math.PI*2,w=4.2+Ce(S,1301)*2,I=new ue(new Kt(.48+Ce(S,1302)*.24,1),Ee(5725014,1));I.position.set(He+Math.cos(b)*w,V(He+Math.cos(b)*w,mt+Math.sin(b)*w)+.35,mt+Math.sin(b)*w),I.scale.y=1.3+Ce(S,1303)*.7,I.rotation.set(Ce(S,1304),b,Ce(S,1305)),ve(I)}const Ci=new ue(new nn(5.7,.055,7,64),new St({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));Ci.rotation.x=Math.PI/2,Ci.position.set(He,V(He,mt)+.045,mt),x.add(Ci);const mn=new ue(new Kt(1,1),Ee(5199441,1));mn.position.set(He,V(He,mt)+.75,mt),mn.scale.y=1.5,x.add(mn);const Hi=new ue(new nn(.62,.05,7,24),new St({color:12757607,emissive:6637341,emissiveIntensity:1.7}));Hi.rotation.x=Math.PI/2,Hi.position.set(He,V(He,mt)+1.45,mt),x.add(Hi),pe.push(xt),_t(He,mt,1,.08);const Et=61,$t=78,In=new rt;In.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const en=new ue(new nn(5.6,.055,7,56),new St({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));en.rotation.x=Math.PI/2,en.position.set(Et,V(Et,$t)+.04,$t),x.add(en);const Yt=new rt;Yt.position.set(Et,V(Et,$t),$t),Yt.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const S of[-2.4,2.4]){const b=ae(.28,2.5,.28,4862755,1);b.position.set(S,1.25,0),Yt.add(b)}const qr=new ue(new Fn(3.4,1.65,6),Ee(3813673,1));qr.position.y=2.75,qr.scale.z=.72,Yt.add(qr),st(Et,$t+1.8,.55);const Ri=new ue(new Kt(.8,1),Ee(5264976,1));Ri.position.set(Et,V(Et,$t)+.65,$t+2.2),Yt.add(Ri),ve(Yt,"hoddmimir","Лес Ходдмимира"),pe.push(Yt),_t(Et,$t,1.1,.08);const Bo=30,Ho=53;for(let S=0;S<4;S++)Ft(Bo+(S-1.5)*2.6,Ho+(S%2?2.6:-2.6),1.12+Ce(S,1440)*.16,10+S);const Ip=new ue(new Kt(.72,1),Ee(5725526,1));Ip.position.set(Bo,V(Bo,Ho)+.5,Ho),x.add(Ip);const fu=new ue(new nn(5.8,.045,7,48),new St({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));fu.rotation.x=Math.PI/2,fu.position.set(Bo,V(Bo,Ho)+.035,Ho),x.add(fu),Lt(He+5,mt+1);const sl=12,ol=49,Cs=new rt;Cs.position.set(sl,V(sl,ol),ol);const hu=new ue(new Kt(1.05,1),Ee(5133648,1));hu.position.y=.85,hu.scale.y=1.55,Cs.add(hu);const pu=new ue(new nn(2.7,.055,7,48),new St({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));pu.rotation.x=Math.PI/2,pu.position.y=.06,Cs.add(pu);const Ux=new yh({color:14207464,transparent:!0,opacity:.72});for(let S=0;S<3;S++){const b=[new O((S-1)*.72,.95,.15),new O((S-1)*1.25,2.9,-.35+Math.sin(S)*.25),new O((S-1)*1.75,.5,.9)];Cs.add(new rg(new pn().setFromPoints(b),Ux))}for(let S=0;S<7;S++){const b=new ue(new Kt(.11,0),Ee(6708050,1)),w=-1+S*.32;b.position.set(-1.7+w*.95,.06,-1.6+S*.46),b.scale.set(1.6,.35,.8),Cs.add(b)}ve(Cs,"forestEvent","Камень Трёх Нитей"),_t(sl,ol,1.15,.08);const mu=(S,b,w,I,$,j,le)=>{const ce=new rt;ce.position.set(S,V(S,b),b);const Me=new ue(new Kt(.78+le*.08,1),Ee(j,1));Me.position.y=.58+le*.08,Me.scale.y=1.35,ce.add(Me);const ie=new ue(new nn(2+le*.18,.045,7,40),new St({color:$,emissive:$,emissiveIntensity:1.25,transparent:!0,opacity:.62}));ie.rotation.x=Math.PI/2,ie.position.y=.045,ce.add(ie);for(let Ge=0;Ge<3+le;Ge++){const ze=new ue(new Kt(.12,0),Ee(7827558,1)),dt=Ge/(3+le)*Math.PI*2;ze.position.set(Math.cos(dt)*(1.15+le*.12),.08,Math.sin(dt)*(1.15+le*.12)),ze.scale.y=.45,ce.add(ze)}ve(ce,w,I),pe.push(ce),_t(S,b,.9,.08)};mu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),mu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),mu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const gu=(S,b,w,I,$,j)=>{const le=new rt;le.position.set(S,V(S,b),b);const ce=new ue(new nn(w,.07,8,56),new St({color:j===1?6716259:j===2?7305088:8218965,emissive:j===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));ce.rotation.x=Math.PI/2,ce.position.y=.045,le.add(ce);for(let Me=0;Me<Math.floor(w/2);Me++){const ie=Ce(Me,S*11+b)*Math.PI*2,Ge=w*.35+Ce(Me,b*17)*w*.45,ze=new ue(new Kt(.28+Ce(Me,33)*.22,1),Ee(j===1?5594452:j===2?5330522:5917244,1));ze.position.set(Math.cos(ie)*Ge,.22,Math.sin(ie)*Ge),ze.scale.y=.65,le.add(ze)}ve(le,I,$),pe.push(le)};gu(70,18,8.5,"hunterCamp","Забытая стоянка",3),gu(67,49,9.5,"deepGrove","Глубокая роща",1),gu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const cn=75,tn=30,Ht=new rt;Ht.position.set(cn,V(cn,tn),tn);const Fx=Ee(5986899,1),Up=ae(7.8,.42,5.8,5591885,1);Up.position.y=.22,Ht.add(Up);const Fp=ae(7.4,2.8,.3,6439727,1);Fp.position.set(0,1.4,-2.7),Ht.add(Fp);const Op=ae(.3,2.8,5.4,6439727,1);Op.position.set(-3.7,1.4,0),Ht.add(Op);const kp=ae(.3,2.8,5.4,6439727,1);kp.position.set(3.7,1.4,0),Ht.add(kp);const zp=ae(2.55,2.8,.3,6439727,1);zp.position.set(-2.43,1.4,2.7),Ht.add(zp);const Bp=ae(2.55,2.8,.3,6439727,1);Bp.position.set(2.43,1.4,2.7),Ht.add(Bp);const Hp=ae(2.3,.72,.3,6439727,1);Hp.position.set(0,2.44,2.7),Ht.add(Hp);const Vp=ae(.16,2.18,.34,2826523,1);Vp.position.set(-.66,1.28,2.72),Ht.add(Vp);const Gp=ae(.16,2.18,.34,2826523,1);Gp.position.set(.66,1.28,2.72),Ht.add(Gp);const Wp=ae(1.48,.16,.34,2826523,1);Wp.position.set(0,2.34,2.72),Ht.add(Wp);const Rs=new rt;Rs.position.set(-.57,0,2.72),Ht.add(Rs);const Xp=ae(1.14,2.05,.12,3154457,1);Xp.position.set(.57,1.28,0),Rs.add(Xp);const jp=new ue(new Cn(.08,8,6),Ee(11831883,1));jp.position.set(.86,1.25,.1),Rs.add(jp);const Ox=new St({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const S of[-2.35,2.35]){const b=ae(1.25,1,.12,2826523,1);b.position.set(S,1.72,2.78),Ht.add(b);const w=new ue(new vn(.98,.72,.06),Ox);w.position.set(S,1.72,2.86),Ht.add(w);const I=ae(.07,.78,.1,2826523,1);I.position.set(S,1.72,2.91),Ht.add(I);const $=ae(1.08,.07,.1,2826523,1);$.position.set(S,1.72,2.91),Ht.add($)}const Yp=new St({map:T,color:2697767,roughness:.98,side:_i}),Vo=new ue(new Zi(4.25,6.25),Yp),Go=new ue(new Zi(4.25,6.25),Yp);Vo.rotation.x=Math.PI/2,Go.rotation.x=Math.PI/2,Vo.rotation.z=.62,Go.rotation.z=-.62,Vo.position.set(-1.02,3.95,0),Go.position.set(1.02,3.95,0),Ht.add(Vo,Go);const vu=ae(.22,.22,6.45,2695965,1);vu.position.y=4.75,Ht.add(vu);const _u=new ue(new vn(.48,1.35,.48),Fx);_u.position.set(1.55,4.8,-.65),Ht.add(_u);const xu=ae(.62,.1,.62,3420461,1);xu.position.set(1.55,5.48,-.65),Ht.add(xu);const qp=ae(2.35,.18,1,6636845,1);qp.position.set(0,.62,3.15),Ht.add(qp);const $p=ae(1.55,.16,.48,5849131,1);$p.position.set(0,.3,3.58),Ht.add($p),ve(Ht,"heroHome","Домик героя"),pe.push(Ht),Qe(cn,tn-2.72,7.4,.3,0,.05),Qe(cn-3.72,tn,.3,5.45,0,.05),Qe(cn+3.72,tn,.3,5.45,0,.05),Qe(cn-2.43,tn+2.72,2.55,.3,0,.05),Qe(cn+2.43,tn+2.72,2.55,.3,0,.05);const Gt=new rt;Gt.position.set(cn,V(cn,tn),tn),Gt.visible=!1;const Kp=ae(7,.16,5,4928548,1);Kp.position.y=.5,Gt.add(Kp);const Zp=ae(7,2.65,.18,4139808,1);Zp.position.set(0,1.8,-2.45),Gt.add(Zp);const Jp=ae(.18,2.65,4.9,4139808,1);Jp.position.set(-3.45,1.8,0),Gt.add(Jp);const Qp=ae(.18,2.65,4.9,4139808,1);Qp.position.set(3.45,1.8,0),Gt.add(Qp);const em=ae(2.35,2.65,.18,4139808,1);em.position.set(-2.42,1.8,2.45),Gt.add(em);const tm=ae(2.35,2.65,.18,4139808,1);tm.position.set(2.42,1.8,2.45),Gt.add(tm);const nm=ae(2.5,.04,2.1,7162673,1);nm.position.set(-.15,.6,.25),Gt.add(nm);const im=ae(1.65,.65,2.15,4008478,1);im.position.set(-2.15,.88,-1.25),Gt.add(im);const rm=ae(1.48,.12,1.35,7033152,1);rm.position.set(-2.15,1.27,-.92),Gt.add(rm);const sm=ae(1.28,.18,.46,11903114,1);sm.position.set(-2.15,1.38,-1.95),Gt.add(sm);const om=ae(1.65,.12,1.05,5255969,1);om.position.set(.85,1.15,-.15),Gt.add(om);for(const[S,b]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const w=ae(.1,.7,.1,3679515,1);w.position.set(S,.72,b),Gt.add(w)}const am=ae(1.25,.8,.72,5978660,1);am.position.set(2.1,.95,-1.7),Gt.add(am);const lm=ae(1.9,.14,.45,5978660,1);lm.position.set(1.35,2,-2.25),Gt.add(lm);for(const S of[.75,1.35,1.95]){const b=new ue(new rn(.08,.1,.35,8),Ee(7304016,1));b.position.set(S,2.24,-2.22),Gt.add(b)}const cm=ae(1.35,.55,.7,5920078,1);cm.position.set(2.15,.78,.95),Gt.add(cm);const um=new ue(new Fn(.28,.72,8),new St({color:16744744,emissive:16731402,emissiveIntensity:4}));um.position.set(2.15,1.42,.95),Gt.add(um);const dm=new la(16747068,2.2,8,2);dm.position.set(2.15,1.7,.95),Gt.add(dm),ve(Gt,"heroHomeInterior","Дом героя — внутри"),pe.push(Gt);const $r=new rt;$r.position.set(cn,V(cn,tn),tn);const yu=new ue(new nn(6.2,.055,7,48),new St({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));yu.rotation.x=Math.PI/2,yu.position.y=.035,$r.add(yu);for(const[S,b]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const w=ae(.18,1,.18,4797735,1);w.position.set(S,.5,b),$r.add(w)}for(const S of[-2.4,2.9]){const b=ae(10.2,.12,.12,6308139,1);b.position.set(0,.59,S),$r.add(b)}const kx=Ee(6906972,1);for(let S=0;S<7;S++){const b=new ue(new rn(.32,.4,.12,7),kx);b.position.set(0,.08,4.1+S*.72),b.rotation.y=S*.4,$r.add(b)}st(cn-2.4,tn+4.8,.48).scale.setScalar(.72),ve($r,"heroHomeYard","Двор домика героя"),pe.push($r),st(70,18,.75).scale.setScalar(.72);const fm=new ue(new rn(.65,.8,.7,7),Ee(5327426,1));fm.position.set(70,V(70,18)+.35,16.5),x.add(fm);for(const[S,b]of[[68,20],[72,20],[68,16],[72,16]]){const w=ae(.16,1.15,.16,4797735,1);w.position.set(S,V(S,b)+.57,b),x.add(w)}const al=new rt;al.position.set(52,V(52,7),7);const Su=new ue(new rn(.5,.62,7,8),Ee(4995371,1));Su.rotation.z=Math.PI/2,Su.position.y=.5,al.add(Su);const Mu=new ue(new rn(.53,.53,.12,12),Ee(7693389,1));Mu.rotation.z=Math.PI/2,Mu.position.set(3.5,.5,0),al.add(Mu),x.add(al);for(let S=0;S<7;S++){const b=new ue(new Kt(.14,0),Ee(6913394,1)),w=S/7*Math.PI*2;b.position.set(67+Math.cos(w)*4,.12+V(67+Math.cos(w)*4,49+Math.sin(w)*4),49+Math.sin(w)*4),x.add(b)}for(let S=0;S<95;S++){const b=Ce(S,77)*Math.PI*2,w=58+Ce(S,91)*32,I=Math.cos(b)*w,$=Math.sin(b)*w+2,le=[[He,mt,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([ce,Me,ie])=>Math.hypot(I-ce,$-Me)<ie);Math.abs(I+57)>9&&!le&&Ct(I,$,.78+Ce(S,13)*.82)}Ut(-10,18,1.55,!1),Ut(13,24,1.7,!1),Ut(-31,-12,2.15,!0);for(let S=0;S<110;S++){const b=Ce(S,701)*Math.PI*2,w=15+Ce(S,702)*50,I=Math.cos(b)*w,$=Math.sin(b)*w+3;if(Math.abs(I)<10&&Math.abs($)<16)continue;const j=new rt;j.position.set(I,V(I,$),$);for(let le=0;le<3;le++){const ce=new ue(new Fn(.025,.38+Ce(le,S)*.28,4),Ee(le===1?5466175:4282935,1));ce.position.set((le-1)*.09,.18,(Ce(le*3,S)-.5)*.12),ce.rotation.z=(le-1)*.22,j.add(ce)}x.add(j)}for(let S=0;S<80;S++){const b=-88+Ce(S,101)*176,w=-88+Ce(S,111)*176;if(Math.hypot(b,w+2)>30){const I=new ue(new Fn(.08,.55+Ce(S,121)*.7,5),Ee(4941888,1));I.position.set(b,V(b,w)+.3,w),x.add(I)}}const Kr=new rt;Kr.position.set(29,V(29,25),25),Kr.userData={id:"tower",label:"Сторожевая башня"};for(const S of[-2,2])for(const b of[-2,2]){const w=ae(.35,7,.35,3942685,1);w.position.set(S,3.5,b),Kr.add(w)}const hm=ae(5,.35,5,6833965,1);hm.position.y=5.8,Kr.add(hm);const pm=new ue(new Fn(3.8,2.7,4),Ee(2696482,1));pm.position.y=8,Kr.add(pm),ve(Kr,"tower","Сторожевая башня"),pe.push(Kr),Qe(29,25,4.8,4.8,0,.08);const Wo=(S,b,w,I,$,j)=>{const le=new rt;le.userData={id:w,label:I,phase:j,baseX:S,baseZ:b};const ce=new ue(new mo(.32,.78,4,8),Ee($,.9));ce.position.y=.85,le.add(ce);const Me=new ue(new Cn(.25,12,8),Ee(13210736,.9));Me.position.y=1.58,le.add(Me);const ie=ae(.7,.9,.15,2565407,1);ie.position.set(0,.82,-.27),le.add(ie),le.position.set(S,V(S,b),b),ve(le,w,I),pe.push(le),fe.push(le)};Wo(9,-8,"elder","Старейшина",7558719,.4),Wo(-6,-3,"blacksmith","Кузнец",6044459,1.5),Wo(21,1,"hunter","Охотник",4215359,2.4),Wo(5,10,"villager","Житель Мидгарда",5858125,3.4),Wo(-16,4,"villager2","Житель деревни",6638394,4.2);const zx=new cu({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),wu=new rt;for(let S=0;S<34;S++){const b=new ue(new Cn(.9+Ce(S,810)*2.2,8,6),zx);b.position.set(-88+Ce(S,811)*176,1.8+Ce(S,812)*2.2,-72+Ce(S,813)*144),wu.add(b)}x.add(wu);const Ps=VA(t);x.add(Ps);const mm=new JM,Eu=new Ke,gm=S=>{var I,$,j,le;if(($=(I=S.target)==null?void 0:I.closest)!=null&&$.call(I,".mid3d-ui"))return;const b=B.domElement.getBoundingClientRect();Eu.x=(S.clientX-b.left)/b.width*2-1,Eu.y=-((S.clientY-b.top)/b.height)*2+1,mm.setFromCamera(Eu,N);const w=mm.intersectObjects(pe,!0)[0];if(w){let ce=w.object;for(;ce.parent&&!((j=ce.userData)!=null&&j.id);)ce=ce.parent;(le=ce.userData)!=null&&le.id&&e(ce.userData.id)}};B.domElement.addEventListener("pointerup",gm);const Bx=S=>{m.current=S,g(S),l(""),Gt.visible=S,Vo.visible=!S,Go.visible=!S,vu.visible=!S,_u.visible=!S,xu.visible=!S,S?(o.current.x=cn,o.current.z=tn+.95,u.current.x=0,u.current.z=-1,Rs.rotation.y=-Math.PI/2):(o.current.x=cn,o.current.z=tn+3.75,u.current.x=0,u.current.z=1,Rs.rotation.y=0),Ps.position.set(o.current.x,V(o.current.x,o.current.z)+.04,o.current.z)};v.current=Bx;const Hx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:sl,z:ol,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],vm=()=>{const S=Math.max(1,M.clientWidth),b=Math.max(1,M.clientHeight);N.aspect=S/b,N.updateProjectionMatrix(),B.setSize(S,b,!1)};vm();const _m=new ResizeObserver(vm);_m.observe(M);let Tu=0,xm=performance.now();const ym=S=>{const b=Math.min(.05,(S-xm)/1e3);xm=S;const w=o.current,I=Math.hypot(w.dx,w.dz);if(I>.05){const ie=6.2*b;et(w,w.x+w.dx/I*ie,w.z+w.dz/I*ie),Ps.rotation.y=Math.atan2(w.dx,w.dz),u.current.x=w.dx/I,u.current.z=w.dz/I,f(!0)}else f(!1);const $=V(w.x,w.z);Ps.position.set(w.x,$+.04,w.z);const j=u.current,le=m.current?new O(w.x-j.x*1,$+3.65,w.z-j.z*1):new O(w.x-j.x*2,$+7.2,w.z-j.z*2+11.8);N.position.lerp(le,m.current?.09:.055),N.lookAt(w.x+(m.current?j.x*.9:j.x*1.9),$+(m.current?1.25:1.2),w.z+(m.current?j.z*.9:j.z*1.9));let ce="",Me="";if(m.current)w.z>tn+1.72&&(ce="Дверь — выйти из дома",Me="heroHomeExit");else for(const ie of Hx)if(Math.hypot(w.x-ie.x,w.z-ie.z)<ie.r){ce=ie.label,Me=ie.id;break}l(ce?`${ce}|${Me}`:""),oe.forEach(ie=>{ie.light.intensity=2+Math.sin(S*.012+ie.phase)*.5,ie.flame.scale.y=.9+Math.sin(S*.009+ie.phase)*.12}),wu.children.forEach((ie,Ge)=>{ie.position.x+=Math.sin(S*12e-5+Ge)*.003,ie.position.z+=Math.cos(S*1e-4+Ge)*.002}),Ue.forEach((ie,Ge)=>{if(ie.kind==="deer"){const ft=ie.g.position.x-Ps.position.x,Tt=ie.g.position.z-Ps.position.z,ui=Math.hypot(ft,Tt);if(ui<11){const ur=Math.max(.001,ui),Zr=ui<5.5?.115:.075,dr=ie.g.position.x+ft/ur*Zr,Ls=ie.g.position.z+Tt/ur*Zr,Xo=dr-30,jo=Ls-53;if(Math.hypot(Xo,jo)<17)ie.g.position.set(dr,V(dr,Ls),Ls);else{const Vi=Math.atan2(jo,Xo),Jr=30+Math.cos(Vi)*16,fr=53+Math.sin(Vi)*10;ie.g.position.set(Jr,V(Jr,fr),fr)}ie.g.rotation.y=Math.atan2(Tt,ft),ie.g.position.y+=Math.sin(S*.008+Ge)*.025;return}}const ze=S*.00105*ie.speed+ie.phase,dt=ie.x+Math.cos(ze)*ie.r,gt=ie.z+Math.sin(ze*.83)*ie.r*.62;ie.g.position.set(dt,V(dt,gt),gt),ie.g.rotation.y=Math.atan2(Math.cos(ze*.83),-Math.sin(ze)),ie.kind==="deer"&&(ie.g.position.y+=Math.sin(S*.006+Ge)*.025)}),fe.forEach((ie,Ge)=>{const ze=ie.userData.phase||0,dt=ie.userData.baseX,gt=ie.userData.baseZ,ft=dt+Math.sin(S*28e-5+ze)*1.6,Tt=gt+Math.cos(S*22e-5+ze)*1.1;ie.position.set(ft,V(ft,Tt),Tt),ie.rotation.y=Math.sin(S*4e-4+ze)*.5}),B.render(x,N),Tu=requestAnimationFrame(ym)};return Tu=requestAnimationFrame(ym),()=>{cancelAnimationFrame(Tu),_m.disconnect(),B.domElement.removeEventListener("pointerup",gm),U.dispose(),L.dispose(),T.dispose(),B.dispose(),x.traverse(S=>{var b,w,I,$;S.isMesh&&((w=(b=S.geometry)==null?void 0:b.dispose)==null||w.call(b),Array.isArray(S.material)?S.material.forEach(j=>{var le;return(le=j.dispose)==null?void 0:le.call(j)}):($=(I=S.material)==null?void 0:I.dispose)==null||$.call(I))}),B.domElement.remove(),v.current=null}},[t.id,e,n]);const y=M=>{const x=r.current,N=s.current;if(!x||!N)return;const B=x.getBoundingClientRect(),q=B.left+B.width/2,Q=B.top+B.height/2,re=48;let V=M.clientX-q,Y=M.clientY-Q;const U=Math.hypot(V,Y);U>re&&(V=V/U*re,Y=Y/U*re),N.style.transform=`translate(${V}px,${Y}px)`,o.current.dx=V/re,o.current.dz=Y/re},C=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},R=M=>{var Y,U;const x=r.current;if(!x)return;const N=M.target;if((Y=N.closest)!=null&&Y.call(N,".mid3d-action")||(U=N.closest)!=null&&U.call(N,".mid3d-interact"))return;const B=x.getBoundingClientRect(),q=26;M.clientX>=B.left-q&&M.clientX<=B.right+q&&M.clientY>=B.top-78&&M.clientY<=B.bottom+26&&(M.currentTarget.setPointerCapture(M.pointerId),y(M))},P=M=>{M.currentTarget.hasPointerCapture(M.pointerId)&&y(M)},D=M=>{M.currentTarget.hasPointerCapture(M.pointerId)&&M.currentTarget.releasePointerCapture(M.pointerId),C()};return H.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:R,onPointerMove:P,onPointerUp:D,onPointerCancel:D,onContextMenu:M=>M.preventDefault(),children:[H.jsxs("div",{className:"mid3d-ui mid3d-top",children:[H.jsxs("div",{className:"mid3d-pill",children:[H.jsx("b",{children:"МИДГАРД"}),H.jsx("span",{children:"Деревня • река • лес • святилища"})]}),H.jsxs("div",{className:"mid3d-pill",children:[H.jsx("b",{children:"ᛟ"}),H.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[H.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),H.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[H.jsx("b",{children:"Камень Трёх Нитей"}),H.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>_(!1),children:"Продолжить путь"})]}),d&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[H.jsx("b",{children:"🜂 Круг Силы"}),H.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!d&&!p&&(()=>{const[M,x]=a.split("|"),N=x==="heroHome"||x==="heroHomeExit";return H.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[H.jsx("b",{children:M}),H.jsx("span",{children:N?x==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),H.jsx("button",{onPointerDown:B=>B.stopPropagation(),onClick:()=>{var B,q;x==="ritual"?h(!0):x==="forestEvent"?_(!0):x==="heroHome"?(B=v.current)==null||B.call(v,!0):x==="heroHomeExit"?(q=v.current)==null||q.call(v,!1):e(x)},children:N?x==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),H.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:H.jsx("div",{className:"mid3d-knob",ref:s})}),H.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:M=>M.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),H.jsx("div",{className:"mid3d-ui mid3d-hint",children:E?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function WA(){const[t,e]=vt.useState(()=>zg().hero?{t:"tree"}:{t:"choose"}),[n,i]=vt.useState(zg),[r,s]=vt.useState(""),[o,a]=vt.useState(""),[l,c]=vt.useState(""),f=vt.useRef(0),[d,h]=vt.useState(null),[p,_]=vt.useState(null),[E,g]=vt.useState(!1),[u,m]=vt.useState(0),[v,y]=vt.useState(0),[C,R]=vt.useState(0),[P,D]=vt.useState(""),[M,x]=vt.useState(!1),[N,B]=vt.useState(!1),[q,Q]=vt.useState(""),[re,V]=vt.useState(.06);vt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),vt.useEffect(()=>{var k,be,ee,ne;(k=Mt==null?void 0:Mt.ready)==null||k.call(Mt),(be=Mt==null?void 0:Mt.expand)==null||be.call(Mt),(ee=Mt==null?void 0:Mt.setHeaderColor)==null||ee.call(Mt,"#0b0f0c"),(ne=Mt==null?void 0:Mt.setBackgroundColor)==null||ne.call(Mt,"#0b0f0c")},[]),vt.useEffect(()=>{if(!(Mt!=null&&Mt.BackButton))return;const k=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Mt.BackButton.show(),Mt.BackButton.onClick(k)):Mt.BackButton.hide(),()=>{var be,ee;(ee=(be=Mt.BackButton)==null?void 0:be.offClick)==null||ee.call(be,k)}},[t,n.hero]),vt.useEffect(()=>{h(null),_(null),g(!1),Q(""),x(!1)},[t]);const Y=k=>{c(k),window.clearTimeout(f.current),f.current=window.setTimeout(()=>c(""),1800)},U=(k="light")=>{var be,ee,ne,qe;try{k==="success"?(ee=(be=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:be.notificationOccurred)==null||ee.call(be,"success"):(qe=(ne=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:ne.impactOccurred)==null||qe.call(ne,"light")}catch{}},se=k=>e(k),de=k=>{U(),e({t:"realm",id:k.id})},Te=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ve=()=>{const k=Te();if(k<=0){Y("Дозор только начался — искры ещё копятся.");return}i(be=>({...be,sparks:be.sparks+k,watch:Date.now()})),U("success"),Y("Дозор завершён: +"+k+" ✨")},Ee=()=>{if(n.gift===ca())return;const be=(n.gift?Math.round((Date.parse(ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ee=Fd[be-1];i(ne=>({...ne,sparks:ne.sparks+ee,gift:ca(),streak:be})),U("success"),Y("Дар Древа, день "+be+": +"+ee+" ✨")},ae=()=>{!r||!o||(i(k=>({...k,hero:{id:r,name:o}})),U("success"),Y("Путь начинается, "+o+"!"),e({t:"tree"}))},pe=n.hero?Od.find(k=>k.id===n.hero.id):null,oe=k=>Math.floor(Math.random()*k),fe=k=>n.trials.filter(be=>be.startsWith(k+":")).length,Ue=k=>{if(n.artifacts.includes(k.id)){Y("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:k.id})},Ze=(k,be,ee)=>{const ne=be===2;i(qe=>({...qe,sparks:qe.sparks+ee+(ne?30:0),trials:[...qe.trials,k+":"+be],artifacts:ne?[...qe.artifacts,k]:qe.artifacts})),ne&&(U("success"),Y("Мир пройден! Артефакт: "+zd[k]))},Xe=(k,be)=>{if(d!==null)return;const ee=fe(k),ne=kd[k][ee];if(be===ne.c){h(be),U("success");const qe=12+ee*3+((pe==null?void 0:pe.id)==="dwarf"?6:0);Y("Верно! Сундук хозяина: +"+qe+" ✨"),Ze(k,ee,qe);return}if(n.powers.includes("mimirEye")){h(ne.c),i(Ve=>({...Ve,powers:Ve.powers.filter(L=>L!=="mimirEye")}));const qe=8+ee*2;U("success"),Y("Око Мимира раскрыло истину. Ответ исправлен. +"+qe+" ✨"),Ze(k,ee,qe);return}if(n.powers.includes("nornThread")){h(be),i(Ve=>({...Ve,powers:Ve.powers.filter(L=>L!=="nornThread")}));const qe=6+ee*2;U("success"),Y("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+qe+" ✨"),Ze(k,ee,qe);return}h(be),U(),D(ua[k].name+" мрачнеет: «Что ж — пусть решит сталь!»")},Qe=k=>{const be=fe(k),ee=kd[k][be],ne=ee.a.findIndex((qe,Ve)=>Ve!==ee.c&&Ve!==p);_(ne),g(!0),U(),Y("Шёпот ветров уносит один ответ...")},_t=k=>{const be=ua[k],ee=n.powers.includes("ashBreath");m(be.hp),y(pe.hp+(ee?25:0)),R(pe.en+(ee?2:0)),Q(""),x(!1),B(!1),D(ee?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":be.name+" поднимает оружие!"),ee&&i(ne=>({...ne,powers:ne.powers.filter(qe=>qe!=="ashBreath")})),e({t:"fight",id:k})},F=(k,be)=>{if(q)return;const ee=ua[k],ne=fe(k);let qe=0,Ve="",L=C,T=M;if(be==="hit"&&(qe=pe.str+oe(4),n.powers.includes("fireOath")&&(qe+=5,i(Re=>({...Re,powers:Re.powers.filter(Se=>Se!=="fireOath")})),Ve="Огненный обет! "),pe.id==="berserk"&&v<=pe.hp/2&&(qe*=2,Ve+="Медвежья ярость! "),Ve+="Ты бьёшь: "+pe.weapon+" — −"+qe+" хозяину."),be==="rune"){if(C<4){Y("Мало энергии для заклинания!");return}L=C-4,qe=pe.en+2+oe(5),Ve="Руническое заклинание вспыхивает: −"+qe+" хозяину."}be==="shield"&&(T=!0,Ve="Ты поднимаешь щит — удар ослабнет.");const W=u-qe;if(W<=0){m(0),R(L),Q("win");const Re=8+ne*2;D("Хозяин повержен! Награда: +"+Re+" ✨"),Ze(k,ne,Re);return}let Z=ee.atk+oe(3),me="";T&&(Z=Math.ceil(Z*.3),me=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(Z=Math.ceil(Z*.65),i(Re=>({...Re,powers:Re.powers.filter(Se=>Se!=="iceOath")})),me+=" Ледяной обет сковал удар врага."),pe.id==="dwarf"&&(Z=Math.ceil(Z*.75));let te=v;if(pe.id==="viking"&&!N&&te-Z<=0&&(B(!0),Z=0,me=" Крылья бури поглотили смертельный удар!"),te=te-Z,m(W),y(Math.max(0,te)),R(L),x(!1),te<=0&&n.powers.includes("yggdrasilCall")){i(Re=>({...Re,powers:Re.powers.filter(Se=>Se!=="yggdrasilCall")})),y(30),D(Ve+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(te<=0){Q("lose"),i(Re=>({...Re,sparks:Math.max(0,Re.sparks-10)})),D(Ve+" "+ee.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}D(Ve+me+" "+ee.name+" отвечает: −"+Z+".")},Pt=k=>{fe(k)>=3||n.artifacts.includes(k)?e({t:"realm",id:k}):e({t:"trial",id:k})},it=k=>k==="tree"?t.t==="tree"||t.t==="realm":t.t===k,et=k=>k==="tree"?{t:"tree"}:{t:k};return H.jsxs("div",{className:"app",children:[H.jsx("style",{children:BA}),H.jsxs("div",{className:"hdr",children:[t.t==="tree"&&H.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&H.jsx("button",{className:"back",onClick:()=>se({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&H.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&H.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&H.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&H.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&H.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&H.jsx("div",{className:"title",children:"⚔ Бой"}),H.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&H.jsxs("div",{className:"scroll choose-screen",children:[H.jsxs("div",{className:"card center choose-intro",children:[H.jsx("div",{className:"big",children:"ᛉ"}),H.jsx("div",{className:"qhead2",children:"Выбери героя"}),H.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Od.map(k=>H.jsxs("button",{className:"hcard"+(r===k.id?" on":""),onClick:()=>{s(k.id),a(""),U()},children:[H.jsx("span",{className:"hface",style:{borderColor:k.color,color:k.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:H.jsx(yr,{name:k.img,className:"himg"})}),H.jsxs("span",{className:"hinfo",children:[H.jsx("span",{className:"hname",style:{color:k.color},children:k.race}),H.jsxs("span",{className:"hab",children:["🌀 ",k.ability,": ",k.abilityDesc]}),H.jsxs("span",{className:"hst",children:["⚔ ",k.str," • ✨ ",k.en," • ❤ ",k.hp]}),H.jsxs("span",{className:"hw",children:["🗡 ",k.weapon]})]})]},k.id)),r&&H.jsxs("div",{className:"card",children:[H.jsx("div",{className:"qhead2",children:"Имя героя"}),H.jsx("div",{className:"chips",children:(Od.find(k=>k.id===r).gender==="f"?kA:zA).map(k=>H.jsx("button",{className:"chip"+(o===k?" on":""),onClick:()=>{a(k),U()},children:k},k))})]}),H.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ae,children:"Вступить на путь"})]}),t.t==="tree"&&H.jsxs("div",{className:"maparea",children:[H.jsx("div",{className:"mapwrap",children:H.jsxs("div",{className:"mapcanvas",children:[H.jsx(yr,{name:"tree",className:"mapimg"}),$l.map(k=>H.jsxs("button",{className:"marker",style:{left:k.x+"%",top:k.y+"%"},onClick:()=>de(k),children:[H.jsxs("div",{className:"amulet-wrap",children:[H.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${k.glow}, transparent 70%)`}}),H.jsx("div",{className:"amulet-ring",style:{borderColor:k.color}}),H.jsx("div",{className:"amulet-core",style:{borderColor:k.color,color:k.color,background:`linear-gradient(135deg, ${k.dark}, #0a0a0a)`},children:k.runeSym})]}),H.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:k.name})]},k.id))]})}),H.jsx("div",{className:"fadeT"}),H.jsx("div",{className:"fadeB"}),H.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&pe&&n.hero&&H.jsxs("button",{className:"herobar",onClick:()=>se({t:"hero"}),children:[H.jsxs("span",{className:"hbface",style:{borderColor:pe.color,color:pe.color},children:[H.jsx(yr,{name:pe.img,className:"hbimg"}),pe.sym]}),H.jsxs("span",{className:"hbname",children:[n.hero.name,H.jsx("i",{children:pe.race})]}),H.jsxs("span",{className:"hbst",children:["⚔ ",pe.str," ✨ ",pe.en," ⏳ ",Te()]}),H.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const k=$l.find(be=>be.id===t.id);if(k.id==="midgard"){if(!pe)return null;const be=ee=>{if(U(),ee==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?Y("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ne=>({...ne,sparks:ne.sparks+20,done:[...new Set([...ne.done,"forest:present:reward"])]})),U("success"),Y("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):Y("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ee==="norns"){Y("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ee==="forge"||ee==="blacksmith"){Y("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ee==="house"||ee==="elder"){Y("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ee==="port"){Y("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ee==="rune"){Y("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ee==="ashgrove"){Y("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ee==="runefield"){Y("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ee==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?Y("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ne=>({...ne,sparks:ne.sparks+20,done:[...new Set([...ne.done,"forest:past:reward"])]})),U("success"),Y("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):Y("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ee==="forestCache"){n.done.includes("forest:cache")?Y("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ne=>({...ne,sparks:ne.sparks+18,done:[...new Set([...ne.done,"forest:cache"])]})),U("success"),Y("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(ee==="forestWhisper"){n.done.includes("forest:whisper")?Y("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ne=>({...ne,sparks:ne.sparks+16,done:[...new Set([...ne.done,"forest:whisper"])]})),U("success"),Y("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(ee==="forestThread"){n.done.includes("forest:thread")?Y("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ne=>({...ne,sparks:ne.sparks+22,done:[...new Set([...ne.done,"forest:thread"])]})),U("success"),Y("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(ee==="heroHome"){Y("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(ee==="hunterCamp"){n.done.includes("forest:camp")?Y("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ne=>({...ne,sparks:ne.sparks+14,done:[...new Set([...ne.done,"forest:camp"])]})),U("success"),Y("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(ee==="deepGrove"){n.done.includes("forest:grove")?Y("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ne=>({...ne,sparks:ne.sparks+17,done:[...new Set([...ne.done,"forest:grove"])]})),U("success"),Y("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(ee==="fallenAsh"){n.done.includes("forest:ash")?Y("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ne=>({...ne,sparks:ne.sparks+21,done:[...new Set([...ne.done,"forest:ash"])]})),U("success"),Y("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(ee==="deer"){Y("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(ee==="hoddmimir"){Y("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ee==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?Y("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ne=>({...ne,sparks:ne.sparks+20,done:[...new Set([...ne.done,"forest:future:reward"])]})),U("success"),Y("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):Y("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ee==="forestEvent"){n.done.includes("forest:choice")&&Y("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ee==="forestEvent:past"){i(ne=>({...ne,sparks:ne.sparks+12,done:[...new Set([...ne.done,"forest:choice","forest:past"])]})),U("success"),Y("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ee==="forestEvent:present"){i(ne=>({...ne,sparks:ne.sparks+12,done:[...new Set([...ne.done,"forest:choice","forest:present"])]})),U("success"),Y("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ee==="forestEvent:future"){i(ne=>({...ne,sparks:ne.sparks+12,done:[...new Set([...ne.done,"forest:choice","forest:future"])]})),U("success"),Y("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ee==="event"){Y("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ee.startsWith("ritual:")){const ne=ee.slice(7),qe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ne];if(!L)return;if(n.powers.includes(L)){Y(qe[ne]+" уже пробуждён. Его сила ждёт своего часа.");return}i(W=>({...W,powers:[...new Set([...W.powers,L])],done:[...new Set([...W.done,"ritual:"+ne])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),Y(T[ne]);return}};return H.jsx(GA,{h:pe,on:be,eventDone:n.done.includes("forest:choice")})}return H.jsxs("div",{className:"content",children:[H.jsx(yr,{name:k.id,className:"bgimg"}),H.jsx("div",{className:"veil"}),H.jsxs("div",{className:"banner",children:[H.jsx("span",{className:"bemoji",children:k.emoji}),H.jsxs("div",{children:[H.jsx("div",{className:"bname",children:k.name}),H.jsx("div",{className:"btag",children:k.tag})]})]}),H.jsxs("button",{className:"gate",onClick:()=>Ue(k),children:[H.jsxs("span",{className:"gwrap",children:[H.jsx("span",{className:"gate-ring",style:{borderColor:k.color}}),H.jsx("span",{className:"gate-core",style:{borderColor:k.color,color:k.color,background:`radial-gradient(circle, ${k.dark}, #050705 75%)`},children:k.runeSym})]}),H.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:n.artifacts.includes(k.id)?"Мир покорён":"Врата мира"})]}),H.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const k=$l.find(qe=>qe.id===t.id),be=ua[k.id],ee=fe(k.id);if(ee>=3)return H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🏺"}),H.jsx("div",{className:"qhead2",children:"Мир покорён!"}),H.jsxs("p",{className:"dim",children:["Артефакт: ",zd[k.id]]}),H.jsx("button",{className:"btn gold",onClick:()=>se({t:"realm",id:k.id}),children:"К вратам"})]})});const ne=kd[k.id][ee];return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"mhead",children:[H.jsxs("span",{className:"mface",style:{borderColor:k.color,color:k.color},children:[H.jsx(yr,{name:Bg[k.id],className:"himg"}),be.sym]}),H.jsx("span",{className:"mname2",style:{color:k.color},children:be.name}),H.jsxs("span",{className:"mtitle",children:[be.title," • испытание ",ee+1," из 3"]})]}),ee===0&&H.jsxs("div",{className:"greet",children:["«",be.greet,"»"]}),H.jsxs("div",{className:"cloud",children:[H.jsx("div",{className:"riddle",children:ne.q}),ne.a.map((qe,Ve)=>H.jsx("button",{className:"ans"+(d!==null?Ve===ne.c?" good":Ve===d?" bad":" off":p===Ve?" off":""),onClick:()=>Xe(k.id,Ve),children:qe},Ve)),(pe==null?void 0:pe.id)==="elf"&&!E&&d===null&&H.jsx("button",{className:"btn rune",onClick:()=>Qe(k.id),children:"🌀 Шёпот ветров"}),d!==null&&(d===ne.c?H.jsx("button",{className:"btn gold",onClick:()=>Pt(k.id),children:"Открыть сундук →"}):H.jsx("button",{className:"btn",onClick:()=>_t(k.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const k=$l.find(ee=>ee.id===t.id),be=ua[k.id];return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"duel",children:[H.jsxs("div",{className:"dside",children:[H.jsxs("span",{className:"dface",style:{borderColor:k.color,color:k.color},children:[H.jsx(yr,{name:Bg[k.id],className:"himg"}),be.sym]}),H.jsx("span",{className:"dname",style:{color:k.color},children:be.name}),H.jsx("span",{className:"dhp",children:H.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/be.hp*100)+"%",background:k.color}})}),H.jsxs("span",{className:"dnum",children:[u,"/",be.hp]})]}),H.jsx("span",{className:"dvs",children:"⚔"}),H.jsxs("div",{className:"dside",children:[H.jsxs("span",{className:"dface",style:{borderColor:pe.color,color:pe.color},children:[H.jsx(yr,{name:pe.img,className:"himg"}),pe.sym]}),H.jsx("span",{className:"dname",style:{color:pe.color},children:n.hero.name}),H.jsx("span",{className:"dhp",children:H.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/pe.hp*100)+"%",background:"#7ee787"}})}),H.jsx("span",{className:"denergy",children:Array.from({length:pe.en}).map((ee,ne)=>H.jsx("span",{className:"pip"+(ne<C?" on":"")},ne))})]})]}),H.jsx("div",{className:"flog",children:P}),!q&&H.jsxs("div",{className:"acts",children:[H.jsxs("button",{className:"btn gold",onClick:()=>F(k.id,"hit"),children:["⚔ Удар: ",pe.weapon]}),H.jsx("button",{className:"btn rune",onClick:()=>F(k.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),H.jsx("button",{className:"btn shield",onClick:()=>F(k.id,"shield"),children:"🛡 Щит"})]}),q==="win"&&H.jsx("button",{className:"btn gold",onClick:()=>Pt(k.id),children:"Забрать награду →"}),q==="lose"&&H.jsx("button",{className:"btn ghost",onClick:()=>se({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&pe&&n.hero&&H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("span",{className:"hface bigface",style:{borderColor:pe.color,color:pe.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:H.jsx(yr,{name:pe.img,className:"himg"})}),H.jsxs("div",{className:"qhead2",style:{color:pe.color},children:[n.hero.name," • ",pe.race]}),H.jsxs("div",{className:"stats",children:[H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["⚔ ",pe.str]}),H.jsx("span",{children:"сила"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["✨ ",pe.en]}),H.jsx("span",{children:"энергия"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["❤ ",pe.hp]}),H.jsx("span",{children:"здоровье"})]})]}),H.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",H.jsx("b",{children:pe.weapon})]}),H.jsxs("div",{className:"hrow",children:["🌀 ",pe.ability,": ",pe.abilityDesc]}),H.jsxs("div",{className:"hrow",children:["✨ Искр: ",H.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",H.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&H.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(k=>zd[k]).join(", ")]})]})}),t.t==="gift"&&(()=>{const k=n.gift===ca(),ee=(n.gift?Math.round((Date.parse(ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ne=k?n.streak:ee;return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🎁"}),H.jsx("div",{className:"qhead2",children:"Дар Древа"}),H.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),H.jsx("div",{className:"days",children:Fd.map((qe,Ve)=>H.jsxs("span",{className:"day"+(Ve+1===ne?" on":Ve+1<ne&&k?" done":""),children:[H.jsx("b",{children:qe}),"день ",Ve+1]},Ve))}),k?H.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):H.jsxs("button",{className:"btn gold",onClick:Ee,children:["Забрать дар +",Fd[ee-1]," ✨"]})]}),H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"⏳"}),H.jsx("div",{className:"qhead2",children:"Дозор героя"}),H.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),H.jsxs("button",{className:"btn gold",onClick:ve,children:["Завершить дозор · +",Te()," ✨"]})]})]})})(),t.t==="hall"&&H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🏛️"}),H.jsx("div",{className:"qhead2",children:"Чертог путника"}),H.jsxs("div",{className:"stats",children:[H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["✨ ",n.sparks]}),H.jsx("span",{children:"Искр"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),H.jsx("span",{children:"артефакты"})]})]}),H.jsxs("div",{className:"rank",children:["🏆 Ранг: ",OA(n.sparks)]}),n.hero&&pe&&H.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",pe.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&H.jsx("div",{className:"nav",children:FA.map(k=>H.jsxs("button",{className:"navbtn"+(it(k.id)?" on":""),onClick:()=>se(et(k.id)),children:[H.jsx("span",{className:"ic",children:k.ic}),k.t]},k.id))}),l&&H.jsx("div",{className:"toast",children:l})]})}ex(document.getElementById("root")).render(H.jsx(WA,{}));
