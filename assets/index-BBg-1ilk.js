(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $1={exports:{}},gu={},K1={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),hy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),My=Symbol.for("react.memo"),wy=Symbol.for("react.lazy"),R0=Symbol.iterator;function Sy(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var Z1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J1=Object.assign,Q1={};function ea(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||Z1}ea.prototype.isReactComponent={};ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=ea.prototype;function mp(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||Z1}var gp=mp.prototype=new ev;gp.constructor=mp;J1(gp,ea.prototype);gp.isPureReactComponent=!0;var P0=Array.isArray,tv=Object.prototype.hasOwnProperty,vp={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tv.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:s,ref:o,props:r,_owner:vp.current}}function Ey(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function Ty(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var I0=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ty(""+t.key):e.toString(36)}function Ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ml:case hy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vd(o,0):i,P0(r)?(n="",t!=null&&(n=t.replace(I0,"$&/")+"/"),Ec(r,e,n,"",function(c){return c})):r!=null&&(_p(r)&&(r=Ey(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(I0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",P0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vd(s,a);o+=Ec(s,e,n,l,r)}else if(l=Sy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vd(s,a++),o+=Ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var i=[],r=0;return Ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ay(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ti={current:null},Tc={transition:null},by={ReactCurrentDispatcher:ti,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:vp};function rv(){throw Error("act(...) is not supported in production builds of React.")}Mt.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Component=ea;Mt.Fragment=py;Mt.Profiler=gy;Mt.PureComponent=mp;Mt.StrictMode=my;Mt.Suspense=yy;Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;Mt.act=rv;Mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=J1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tv.call(e,l)&&!nv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:s,props:i,_owner:o}};Mt.createContext=function(t){return t={$$typeof:_y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vy,_context:t},t.Consumer=t};Mt.createElement=iv;Mt.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:xy,render:t}};Mt.isValidElement=_p;Mt.lazy=function(t){return{$$typeof:wy,_payload:{_status:-1,_result:t},_init:Ay}};Mt.memo=function(t,e){return{$$typeof:My,type:t,compare:e===void 0?null:e}};Mt.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};Mt.unstable_act=rv;Mt.useCallback=function(t,e){return ti.current.useCallback(t,e)};Mt.useContext=function(t){return ti.current.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t){return ti.current.useDeferredValue(t)};Mt.useEffect=function(t,e){return ti.current.useEffect(t,e)};Mt.useId=function(){return ti.current.useId()};Mt.useImperativeHandle=function(t,e,n){return ti.current.useImperativeHandle(t,e,n)};Mt.useInsertionEffect=function(t,e){return ti.current.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return ti.current.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return ti.current.useMemo(t,e)};Mt.useReducer=function(t,e,n){return ti.current.useReducer(t,e,n)};Mt.useRef=function(t){return ti.current.useRef(t)};Mt.useState=function(t){return ti.current.useState(t)};Mt.useSyncExternalStore=function(t,e,n){return ti.current.useSyncExternalStore(t,e,n)};Mt.useTransition=function(){return ti.current.useTransition()};Mt.version="18.3.1";K1.exports=Mt;var wt=K1.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=wt,Ry=Symbol.for("react.element"),Py=Symbol.for("react.fragment"),Iy=Object.prototype.hasOwnProperty,Ly=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dy={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Iy.call(e,i)&&!Dy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ry,type:t,key:s,ref:o,props:r,_owner:Ly.current}}gu.Fragment=Py;gu.jsx=sv;gu.jsxs=sv;$1.exports=gu;var Y=$1.exports,ov={exports:{}},Ti={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,J){var ue=V.length;V.push(J);e:for(;0<ue;){var we=ue-1>>>1,Ue=V[we];if(0<r(Ue,J))V[we]=J,V[ue]=Ue,ue=we;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var J=V[0],ue=V.pop();if(ue!==J){V[0]=ue;e:for(var we=0,Ue=V.length,ht=Ue>>>1;we<ht;){var ut=2*(we+1)-1,Ie=V[ut],me=ut+1,ve=V[me];if(0>r(Ie,ue))me<Ue&&0>r(ve,Ie)?(V[we]=ve,V[me]=ue,we=me):(V[we]=Ie,V[ut]=ue,we=ut);else if(me<Ue&&0>r(ve,ue))V[we]=ve,V[me]=ue,we=me;else break e}}return J}function r(V,J){var ue=V.sortIndex-J.sortIndex;return ue!==0?ue:V.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,m=3,g=!1,M=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=V)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function E(V){if(T=!1,y(V),!M)if(n(l)!==null)M=!0,W(P);else{var J=n(c);J!==null&&Q(E,J.startTime-V)}}function P(V,J){M=!1,T&&(T=!1,d(U),U=-1),g=!0;var ue=m;try{for(y(J),p=n(l);p!==null&&(!(p.expirationTime>J)||V&&!k());){var we=p.callback;if(typeof we=="function"){p.callback=null,m=p.priorityLevel;var Ue=we(p.expirationTime<=J);J=t.unstable_now(),typeof Ue=="function"?p.callback=Ue:p===n(l)&&i(l),y(J)}else i(l);p=n(l)}if(p!==null)var ht=!0;else{var ut=n(c);ut!==null&&Q(E,ut.startTime-J),ht=!1}return ht}finally{p=null,m=ue,g=!1}}var I=!1,L=null,U=-1,A=5,w=-1;function k(){return!(t.unstable_now()-w<A)}function q(){if(L!==null){var V=t.unstable_now();w=V;var J=!0;try{J=L(!0,V)}finally{J?ie():(I=!1,L=null)}}else I=!1}var ie;if(typeof v=="function")ie=function(){v(q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=q,ie=function(){de.postMessage(null)}}else ie=function(){_(q,0)};function W(V){L=V,I||(I=!0,ie())}function Q(V,J){U=_(function(){V(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){M||g||(M=!0,W(P))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ue=m;m=J;try{return V()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,J){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ue=m;m=V;try{return J()}finally{m=ue}},t.unstable_scheduleCallback=function(V,J,ue){var we=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?we+ue:we):ue=we,V){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=ue+Ue,V={id:h++,callback:J,priorityLevel:V,startTime:ue,expirationTime:Ue,sortIndex:-1},ue>we?(V.sortIndex=ue,e(c,V),n(l)===null&&V===n(c)&&(T?(d(U),U=-1):T=!0,Q(E,ue-we))):(V.sortIndex=Ue,e(l,V),M||g||(M=!0,W(P))),V},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(V){var J=m;return function(){var ue=m;m=J;try{return V.apply(this,arguments)}finally{m=ue}}}})(lv);av.exports=lv;var Ny=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=wt,Ei=Ny;function Ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cv=new Set,qa={};function qs(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(qa[t]=e,t=0;t<e.length;t++)cv.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,Fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L0={},D0={};function ky(t){return Lf.call(D0,t)?!0:Lf.call(L0,t)?!1:Fy.test(t)?D0[t]=!0:(L0[t]=!0,!1)}function Oy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zy(t,e,n,i){if(e===null||typeof e>"u"||Oy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ni(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var On={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){On[t]=new ni(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];On[e]=new ni(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){On[t]=new ni(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){On[t]=new ni(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){On[t]=new ni(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){On[t]=new ni(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){On[t]=new ni(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){On[t]=new ni(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){On[t]=new ni(t,5,!1,t.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xp,yp);On[e]=new ni(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xp,yp);On[e]=new ni(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xp,yp);On[e]=new ni(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){On[t]=new ni(t,1,!1,t.toLowerCase(),null,!1,!1)});On.xlinkHref=new ni("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){On[t]=new ni(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,i){var r=On.hasOwnProperty(e)?On[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zy(e,n,r,i)&&(n=null),i||r===null?ky(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Rr=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Nf=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),Ep=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),fv=Symbol.for("react.offscreen"),N0=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=N0&&t[N0]||t["@@iterator"],typeof t=="function"?t:null)}var un=Object.assign,_d;function Pa(t){if(_d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+t}var xd=!1;function yd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function By(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case Mo:return"Portal";case Df:return"Profiler";case wp:return"StrictMode";case Nf:return"Suspense";case Uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ep:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function Hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vy(t){var e=hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=Vy(t))}function pv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kf(t,e){var n=e.checked;return un({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function U0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function Of(t,e){mv(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function F0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||Hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function No(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return un({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function k0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ee(92));if(Ia(n)){if(1<n.length)throw Error(Ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function gv(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function O0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,_v=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gy=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){Gy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Wy=un({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(Wy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xf=null,Uo=null,Fo=null;function z0(t){if(t=_l(t)){if(typeof Xf!="function")throw Error(Ee(280));var e=t.stateNode;e&&(e=Mu(e),Xf(t.stateNode,t.type,e))}}function Mv(t){Uo?Fo?Fo.push(t):Fo=[t]:Uo=t}function wv(){if(Uo){var t=Uo,e=Fo;if(Fo=Uo=null,z0(t),e)for(t=0;t<e.length;t++)z0(e[t])}}function Sv(t,e){return t(e)}function Ev(){}var Md=!1;function Tv(t,e,n){if(Md)return t(e,n);Md=!0;try{return Sv(t,e,n)}finally{Md=!1,(Uo!==null||Fo!==null)&&(Ev(),wv())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=Mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ee(231,e,typeof n));return n}var jf=!1;if(Tr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){jf=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{jf=!1}function Xy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Fa=!1,Vc=null,Gc=!1,qf=null,jy={onError:function(t){Fa=!0,Vc=t}};function qy(t,e,n,i,r,s,o,a,l){Fa=!1,Vc=null,Xy.apply(jy,arguments)}function Yy(t,e,n,i,r,s,o,a,l){if(qy.apply(this,arguments),Fa){if(Fa){var c=Vc;Fa=!1,Vc=null}else throw Error(Ee(198));Gc||(Gc=!0,qf=c)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B0(t){if(Ys(t)!==t)throw Error(Ee(188))}function $y(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error(Ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return B0(r),t;if(s===i)return B0(r),e;s=s.sibling}throw Error(Ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ee(189))}}if(n.alternate!==i)throw Error(Ee(190))}if(n.tag!==3)throw Error(Ee(188));return n.stateNode.current===n?t:e}function bv(t){return t=$y(t),t!==null?Cv(t):null}function Cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cv(t);if(e!==null)return e;t=t.sibling}return null}var Rv=Ei.unstable_scheduleCallback,H0=Ei.unstable_cancelCallback,Ky=Ei.unstable_shouldYield,Zy=Ei.unstable_requestPaint,pn=Ei.unstable_now,Jy=Ei.unstable_getCurrentPriorityLevel,Ap=Ei.unstable_ImmediatePriority,Pv=Ei.unstable_UserBlockingPriority,Wc=Ei.unstable_NormalPriority,Qy=Ei.unstable_LowPriority,Iv=Ei.unstable_IdlePriority,vu=null,or=null;function e2(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yi=Math.clz32?Math.clz32:i2,t2=Math.log,n2=Math.LN2;function i2(t){return t>>>=0,t===0?32:31-(t2(t)/n2|0)|0}var Bl=64,Hl=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=La(a):(s&=o,s!==0&&(i=La(s)))}else o=n&~r,o!==0?i=La(o):s!==0&&(i=La(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yi(e),r=1<<n,i|=t[n],e&=~r;return i}function r2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=r2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yi(e),t[e]=n}function o2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ht=0;function Dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nv,Cp,Uv,Fv,kv,$f=!1,Vl=[],Kr=null,Zr=null,Jr=null,Ka=new Map,Za=new Map,Wr=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function V0(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&Cp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l2(t,e,n,i,r){switch(e){case"focusin":return Kr=ma(Kr,t,e,n,i,r),!0;case"dragenter":return Zr=ma(Zr,t,e,n,i,r),!0;case"mouseover":return Jr=ma(Jr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ka.set(s,ma(Ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,ma(Za.get(s)||null,t,e,n,i,r)),!0}return!1}function Ov(t){var e=Ds(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,kv(t.priority,function(){Uv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wf=i,n.target.dispatchEvent(i),Wf=null}else return e=_l(n),e!==null&&Cp(e),t.blockedOn=n,!1;e.shift()}return!0}function G0(t,e,n){Ac(t)&&n.delete(e)}function c2(){$f=!1,Kr!==null&&Ac(Kr)&&(Kr=null),Zr!==null&&Ac(Zr)&&(Zr=null),Jr!==null&&Ac(Jr)&&(Jr=null),Ka.forEach(G0),Za.forEach(G0)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,c2)))}function Ja(t){function e(r){return ga(r,t)}if(0<Vl.length){ga(Vl[0],t);for(var n=1;n<Vl.length;n++){var i=Vl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Kr!==null&&ga(Kr,t),Zr!==null&&ga(Zr,t),Jr!==null&&ga(Jr,t),Ka.forEach(e),Za.forEach(e),n=0;n<Wr.length;n++)i=Wr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&Wr.shift()}var ko=Rr.ReactCurrentBatchConfig,jc=!0;function u2(t,e,n,i){var r=Ht,s=ko.transition;ko.transition=null;try{Ht=1,Rp(t,e,n,i)}finally{Ht=r,ko.transition=s}}function d2(t,e,n,i){var r=Ht,s=ko.transition;ko.transition=null;try{Ht=4,Rp(t,e,n,i)}finally{Ht=r,ko.transition=s}}function Rp(t,e,n,i){if(jc){var r=Kf(t,e,n,i);if(r===null)Ld(t,e,i,qc,n),V0(t,i);else if(l2(r,t,e,n,i))i.stopPropagation();else if(V0(t,i),e&4&&-1<a2.indexOf(t)){for(;r!==null;){var s=_l(r);if(s!==null&&Nv(s),s=Kf(t,e,n,i),s===null&&Ld(t,e,i,qc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ld(t,e,i,null,n)}}var qc=null;function Kf(t,e,n,i){if(qc=null,t=Tp(i),t=Ds(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function zv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case Ap:return 1;case Pv:return 4;case Wc:case Qy:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Yr=null,Pp=null,bc=null;function Bv(){if(bc)return bc;var t,e=Pp,n=e.length,i,r="value"in Yr?Yr.value:Yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bc=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function W0(){return!1}function Ai(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:W0,this.isPropagationStopped=W0,this}return un(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=Ai(ta),vl=un({},ta,{view:0,detail:0}),f2=Ai(vl),Sd,Ed,va,_u=un({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Sd=t.screenX-va.screenX,Ed=t.screenY-va.screenY):Ed=Sd=0,va=t),Sd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),X0=Ai(_u),h2=un({},_u,{dataTransfer:0}),p2=Ai(h2),m2=un({},vl,{relatedTarget:0}),Td=Ai(m2),g2=un({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),v2=Ai(g2),_2=un({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x2=Ai(_2),y2=un({},ta,{data:0}),j0=Ai(y2),M2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S2[t])?!!e[t]:!1}function Lp(){return E2}var T2=un({},vl,{key:function(t){if(t.key){var e=M2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A2=Ai(T2),b2=un({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=Ai(b2),C2=un({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),R2=Ai(C2),P2=un({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=Ai(P2),L2=un({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D2=Ai(L2),N2=[9,13,27,32],Dp=Tr&&"CompositionEvent"in window,ka=null;Tr&&"documentMode"in document&&(ka=document.documentMode);var U2=Tr&&"TextEvent"in window&&!ka,Hv=Tr&&(!Dp||ka&&8<ka&&11>=ka),Y0=" ",$0=!1;function Vv(t,e){switch(t){case"keyup":return N2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var So=!1;function F2(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:($0=!0,Y0);case"textInput":return t=e.data,t===Y0&&$0?null:t;default:return null}}function k2(t,e){if(So)return t==="compositionend"||!Dp&&Vv(t,e)?(t=Bv(),bc=Pp=Yr=null,So=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hv&&e.locale!=="ko"?null:e.data;default:return null}}var O2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O2[t.type]:e==="textarea"}function Wv(t,e,n,i){Mv(i),e=Yc(e,"onChange"),0<e.length&&(n=new Ip("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,Qa=null;function z2(t){t_(t,0)}function xu(t){var e=Ao(t);if(pv(e))return t}function B2(t,e){if(t==="change")return e}var Xv=!1;if(Tr){var Ad;if(Tr){var bd="oninput"in document;if(!bd){var Z0=document.createElement("div");Z0.setAttribute("oninput","return;"),bd=typeof Z0.oninput=="function"}Ad=bd}else Ad=!1;Xv=Ad&&(!document.documentMode||9<document.documentMode)}function J0(){Oa&&(Oa.detachEvent("onpropertychange",jv),Qa=Oa=null)}function jv(t){if(t.propertyName==="value"&&xu(Qa)){var e=[];Wv(e,Qa,t,Tp(t)),Tv(z2,e)}}function H2(t,e,n){t==="focusin"?(J0(),Oa=e,Qa=n,Oa.attachEvent("onpropertychange",jv)):t==="focusout"&&J0()}function V2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Qa)}function G2(t,e){if(t==="click")return xu(e)}function W2(t,e){if(t==="input"||t==="change")return xu(e)}function X2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zi=typeof Object.is=="function"?Object.is:X2;function el(t,e){if(Zi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lf.call(e,r)||!Zi(t[r],e[r]))return!1}return!0}function Q0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Q0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Q0(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var t=window,e=Hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hc(t.document)}return e}function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j2(t){var e=Yv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(i!==null&&Np(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eg(n,s);var o=eg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q2=Tr&&"documentMode"in document&&11>=document.documentMode,Eo=null,Zf=null,za=null,Jf=!1;function tg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||Eo==null||Eo!==Hc(i)||(i=Eo,"selectionStart"in i&&Np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&el(za,i)||(za=i,i=Yc(Zf,"onSelect"),0<i.length&&(e=new Ip("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Eo)))}function Wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var To={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},Cd={},$v={};Tr&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function yu(t){if(Cd[t])return Cd[t];if(!To[t])return t;var e=To[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $v)return Cd[t]=e[n];return t}var Kv=yu("animationend"),Zv=yu("animationiteration"),Jv=yu("animationstart"),Qv=yu("transitionend"),e_=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(t,e){e_.set(t,e),qs(e,[t])}for(var Rd=0;Rd<ng.length;Rd++){var Pd=ng[Rd],Y2=Pd.toLowerCase(),$2=Pd[0].toUpperCase()+Pd.slice(1);us(Y2,"on"+$2)}us(Kv,"onAnimationEnd");us(Zv,"onAnimationIteration");us(Jv,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(Qv,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function ig(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yy(i,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}}}if(Gc)throw t=qf,Gc=!1,qf=null,t}function Qt(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var i=t+"__bubble";n.has(i)||(n_(e,t,2,!1),n.add(i))}function Id(t,e,n){var i=0;e&&(i|=4),n_(n,t,i,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[Xl]){t[Xl]=!0,cv.forEach(function(n){n!=="selectionchange"&&(K2.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,Id("selectionchange",!1,e))}}function n_(t,e,n,i){switch(zv(e)){case 1:var r=u2;break;case 4:r=d2;break;default:r=Rp}n=r.bind(null,e,n,t),r=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ld(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ds(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Tv(function(){var c=s,h=Tp(n),p=[];e:{var m=e_.get(t);if(m!==void 0){var g=Ip,M=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":g=A2;break;case"focusin":M="focus",g=Td;break;case"focusout":M="blur",g=Td;break;case"beforeblur":case"afterblur":g=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=p2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=R2;break;case Kv:case Zv:case Jv:g=v2;break;case Qv:g=I2;break;case"scroll":g=f2;break;case"wheel":g=D2;break;case"copy":case"cut":case"paste":g=x2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=q0}var T=(e&4)!==0,_=!T&&t==="scroll",d=T?m!==null?m+"Capture":null:m;T=[];for(var v=c,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,d!==null&&(E=$a(v,d),E!=null&&T.push(nl(v,E,y)))),_)break;v=v.return}0<T.length&&(m=new g(m,M,null,n,h),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Wf&&(M=n.relatedTarget||n.fromElement)&&(Ds(M)||M[Ar]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(M=n.relatedTarget||n.toElement,g=c,M=M?Ds(M):null,M!==null&&(_=Ys(M),M!==_||M.tag!==5&&M.tag!==6)&&(M=null)):(g=null,M=c),g!==M)){if(T=X0,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(T=q0,E="onPointerLeave",d="onPointerEnter",v="pointer"),_=g==null?m:Ao(g),y=M==null?m:Ao(M),m=new T(E,v+"leave",g,n,h),m.target=_,m.relatedTarget=y,E=null,Ds(h)===c&&(T=new T(d,v+"enter",M,n,h),T.target=y,T.relatedTarget=_,E=T),_=E,g&&M)t:{for(T=g,d=M,v=0,y=T;y;y=ro(y))v++;for(y=0,E=d;E;E=ro(E))y++;for(;0<v-y;)T=ro(T),v--;for(;0<y-v;)d=ro(d),y--;for(;v--;){if(T===d||d!==null&&T===d.alternate)break t;T=ro(T),d=ro(d)}T=null}else T=null;g!==null&&rg(p,m,g,T,!1),M!==null&&_!==null&&rg(p,_,M,T,!0)}}e:{if(m=c?Ao(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var P=B2;else if(K0(m))if(Xv)P=W2;else{P=V2;var I=H2}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=G2);if(P&&(P=P(t,c))){Wv(p,P,n,h);break e}I&&I(t,m,c),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&zf(m,"number",m.value)}switch(I=c?Ao(c):window,t){case"focusin":(K0(I)||I.contentEditable==="true")&&(Eo=I,Zf=c,za=null);break;case"focusout":za=Zf=Eo=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,tg(p,n,h);break;case"selectionchange":if(q2)break;case"keydown":case"keyup":tg(p,n,h)}var L;if(Dp)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else So?Vv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Hv&&n.locale!=="ko"&&(So||U!=="onCompositionStart"?U==="onCompositionEnd"&&So&&(L=Bv()):(Yr=h,Pp="value"in Yr?Yr.value:Yr.textContent,So=!0)),I=Yc(c,U),0<I.length&&(U=new j0(U,t,null,n,h),p.push({event:U,listeners:I}),L?U.data=L:(L=Gv(n),L!==null&&(U.data=L)))),(L=U2?F2(t,n):k2(t,n))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(h=new j0("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=L))}t_(p,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(nl(t,s,r)),s=$a(t,e),s!=null&&i.push(nl(t,s,r))),t=t.return}return i}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$a(n,s),l!=null&&o.unshift(nl(n,l,a))):r||(l=$a(n,s),l!=null&&o.push(nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Z2=/\r\n?/g,J2=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(Z2,`
`).replace(J2,"")}function jl(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(Ee(425))}function $c(){}var Qf=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,Q2=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(tM)}:nh;function tM(t){setTimeout(function(){throw t})}function Dd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var na=Math.random().toString(36).slice(2),ir="__reactFiber$"+na,il="__reactProps$"+na,Ar="__reactContainer$"+na,ih="__reactEvents$"+na,nM="__reactListeners$"+na,iM="__reactHandles$"+na;function Ds(t){var e=t[ir];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[ir]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[ir])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[ir]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ee(33))}function Mu(t){return t[il]||null}var rh=[],bo=-1;function ds(t){return{current:t}}function en(t){0>bo||(t.current=rh[bo],rh[bo]=null,bo--)}function Zt(t,e){bo++,rh[bo]=t.current,t.current=e}var as={},$n=ds(as),ui=ds(!1),Bs=as;function Go(t,e){var n=t.type.contextTypes;if(!n)return as;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function di(t){return t=t.childContextTypes,t!=null}function Kc(){en(ui),en($n)}function lg(t,e,n){if($n.current!==as)throw Error(Ee(168));Zt($n,e),Zt(ui,n)}function i_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,Hy(t)||"Unknown",r));return un({},n,i)}function Zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,Bs=$n.current,Zt($n,t),Zt(ui,ui.current),!0}function cg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ee(169));n?(t=i_(t,e,Bs),i.__reactInternalMemoizedMergedChildContext=t,en(ui),en($n),Zt($n,t)):en(ui),Zt(ui,n)}var xr=null,wu=!1,Nd=!1;function r_(t){xr===null?xr=[t]:xr.push(t)}function rM(t){wu=!0,r_(t)}function fs(){if(!Nd&&xr!==null){Nd=!0;var t=0,e=Ht;try{var n=xr;for(Ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xr=null,wu=!1}catch(r){throw xr!==null&&(xr=xr.slice(t+1)),Rv(Ap,fs),r}finally{Ht=e,Nd=!1}}return null}var Co=[],Ro=0,Jc=null,Qc=0,Ii=[],Li=0,Hs=null,yr=1,Mr="";function bs(t,e){Co[Ro++]=Qc,Co[Ro++]=Jc,Jc=t,Qc=e}function s_(t,e,n){Ii[Li++]=yr,Ii[Li++]=Mr,Ii[Li++]=Hs,Hs=t;var i=yr;t=Mr;var r=32-Yi(i)-1;i&=~(1<<r),n+=1;var s=32-Yi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yr=1<<32-Yi(e)+r|n<<r|i,Mr=s+t}else yr=1<<s|n<<r|i,Mr=t}function Up(t){t.return!==null&&(bs(t,1),s_(t,1,0))}function Fp(t){for(;t===Jc;)Jc=Co[--Ro],Co[Ro]=null,Qc=Co[--Ro],Co[Ro]=null;for(;t===Hs;)Hs=Ii[--Li],Ii[Li]=null,Mr=Ii[--Li],Ii[Li]=null,yr=Ii[--Li],Ii[Li]=null}var Si=null,wi=null,sn=!1,Xi=null;function o_(t,e){var n=Di(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Si=t,wi=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Si=t,wi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hs!==null?{id:yr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Di(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Si=t,wi=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(sn){var e=wi;if(e){var n=e;if(!ug(t,e)){if(sh(t))throw Error(Ee(418));e=Qr(n.nextSibling);var i=Si;e&&ug(t,e)?o_(i,n):(t.flags=t.flags&-4097|2,sn=!1,Si=t)}}else{if(sh(t))throw Error(Ee(418));t.flags=t.flags&-4097|2,sn=!1,Si=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Si=t}function ql(t){if(t!==Si)return!1;if(!sn)return dg(t),sn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=wi)){if(sh(t))throw a_(),Error(Ee(418));for(;e;)o_(t,e),e=Qr(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wi=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wi=null}}else wi=Si?Qr(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=wi;t;)t=Qr(t.nextSibling)}function Wo(){wi=Si=null,sn=!1}function kp(t){Xi===null?Xi=[t]:Xi.push(t)}var sM=Rr.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ee(309));var i=n.stateNode}if(!i)throw Error(Ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ee(284));if(!n._owner)throw Error(Ee(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(Ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function l_(t){function e(d,v){if(t){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=is(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,y,E){return v===null||v.tag!==6?(v=Hd(y,d.mode,E),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,E){var P=y.type;return P===wo?h(d,v,y.props.children,E,y.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vr&&fg(P)===v.type)?(E=r(v,y.props),E.ref=_a(d,v,y),E.return=d,E):(E=Uc(y.type,y.key,y.props,null,d.mode,E),E.ref=_a(d,v,y),E.return=d,E)}function c(d,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Vd(y,d.mode,E),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function h(d,v,y,E,P){return v===null||v.tag!==7?(v=zs(y,d.mode,E,P),v.return=d,v):(v=r(v,y),v.return=d,v)}function p(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hd(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kl:return y=Uc(v.type,v.key,v.props,null,d.mode,y),y.ref=_a(d,null,v),y.return=d,y;case Mo:return v=Vd(v,d.mode,y),v.return=d,v;case Vr:var E=v._init;return p(d,E(v._payload),y)}if(Ia(v)||ha(v))return v=zs(v,d.mode,y,null),v.return=d,v;Yl(d,v)}return null}function m(d,v,y,E){var P=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:a(d,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:return y.key===P?l(d,v,y,E):null;case Mo:return y.key===P?c(d,v,y,E):null;case Vr:return P=y._init,m(d,v,P(y._payload),E)}if(Ia(y)||ha(y))return P!==null?null:h(d,v,y,E,null);Yl(d,y)}return null}function g(d,v,y,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(y)||null,a(v,d,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case kl:return d=d.get(E.key===null?y:E.key)||null,l(v,d,E,P);case Mo:return d=d.get(E.key===null?y:E.key)||null,c(v,d,E,P);case Vr:var I=E._init;return g(d,v,y,I(E._payload),P)}if(Ia(E)||ha(E))return d=d.get(y)||null,h(v,d,E,P,null);Yl(v,E)}return null}function M(d,v,y,E){for(var P=null,I=null,L=v,U=v=0,A=null;L!==null&&U<y.length;U++){L.index>U?(A=L,L=null):A=L.sibling;var w=m(d,L,y[U],E);if(w===null){L===null&&(L=A);break}t&&L&&w.alternate===null&&e(d,L),v=s(w,v,U),I===null?P=w:I.sibling=w,I=w,L=A}if(U===y.length)return n(d,L),sn&&bs(d,U),P;if(L===null){for(;U<y.length;U++)L=p(d,y[U],E),L!==null&&(v=s(L,v,U),I===null?P=L:I.sibling=L,I=L);return sn&&bs(d,U),P}for(L=i(d,L);U<y.length;U++)A=g(L,d,U,y[U],E),A!==null&&(t&&A.alternate!==null&&L.delete(A.key===null?U:A.key),v=s(A,v,U),I===null?P=A:I.sibling=A,I=A);return t&&L.forEach(function(k){return e(d,k)}),sn&&bs(d,U),P}function T(d,v,y,E){var P=ha(y);if(typeof P!="function")throw Error(Ee(150));if(y=P.call(y),y==null)throw Error(Ee(151));for(var I=P=null,L=v,U=v=0,A=null,w=y.next();L!==null&&!w.done;U++,w=y.next()){L.index>U?(A=L,L=null):A=L.sibling;var k=m(d,L,w.value,E);if(k===null){L===null&&(L=A);break}t&&L&&k.alternate===null&&e(d,L),v=s(k,v,U),I===null?P=k:I.sibling=k,I=k,L=A}if(w.done)return n(d,L),sn&&bs(d,U),P;if(L===null){for(;!w.done;U++,w=y.next())w=p(d,w.value,E),w!==null&&(v=s(w,v,U),I===null?P=w:I.sibling=w,I=w);return sn&&bs(d,U),P}for(L=i(d,L);!w.done;U++,w=y.next())w=g(L,d,U,w.value,E),w!==null&&(t&&w.alternate!==null&&L.delete(w.key===null?U:w.key),v=s(w,v,U),I===null?P=w:I.sibling=w,I=w);return t&&L.forEach(function(q){return e(d,q)}),sn&&bs(d,U),P}function _(d,v,y,E){if(typeof y=="object"&&y!==null&&y.type===wo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:e:{for(var P=y.key,I=v;I!==null;){if(I.key===P){if(P=y.type,P===wo){if(I.tag===7){n(d,I.sibling),v=r(I,y.props.children),v.return=d,d=v;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vr&&fg(P)===I.type){n(d,I.sibling),v=r(I,y.props),v.ref=_a(d,I,y),v.return=d,d=v;break e}n(d,I);break}else e(d,I);I=I.sibling}y.type===wo?(v=zs(y.props.children,d.mode,E,y.key),v.return=d,d=v):(E=Uc(y.type,y.key,y.props,null,d.mode,E),E.ref=_a(d,v,y),E.return=d,d=E)}return o(d);case Mo:e:{for(I=y.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Vd(y,d.mode,E),v.return=d,d=v}return o(d);case Vr:return I=y._init,_(d,v,I(y._payload),E)}if(Ia(y))return M(d,v,y,E);if(ha(y))return T(d,v,y,E);Yl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,y),v.return=d,d=v):(n(d,v),v=Hd(y,d.mode,E),v.return=d,d=v),o(d)):n(d,v)}return _}var Xo=l_(!0),c_=l_(!1),eu=ds(null),tu=null,Po=null,Op=null;function zp(){Op=Po=tu=null}function Bp(t){var e=eu.current;en(eu),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Oo(t,e){tu=t,Op=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ci=!0),t.firstContext=null)}function Ui(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},Po===null){if(tu===null)throw Error(Ee(308));Po=t,tu.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return e}var Ns=null;function Hp(t){Ns===null?Ns=[t]:Ns.push(t)}function u_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hp(e)):(n.next=r.next,r.next=n),e.interleaved=n,br(t,i)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function es(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,It&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,br(t,n)}return r=i.interleaved,r===null?(e.next=e,Hp(i)):(e.next=r.next,r.next=e),i.interleaved=e,br(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}function hg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,i){var r=t.updateQueue;Gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=t,T=a;switch(m=e,g=n,T.tag){case 1:if(M=T.payload,typeof M=="function"){p=M.call(g,p,m);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,m=typeof M=="function"?M.call(g,p,m):M,m==null)break e;p=un({},p,m);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gs|=o,t.lanes=o,t.memoizedState=p}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var xl={},ar=ds(xl),rl=ds(xl),sl=ds(xl);function Us(t){if(t===xl)throw Error(Ee(174));return t}function Gp(t,e){switch(Zt(sl,e),Zt(rl,t),Zt(ar,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}en(ar),Zt(ar,e)}function jo(){en(ar),en(rl),en(sl)}function f_(t){Us(sl.current);var e=Us(ar.current),n=Hf(e,t.type);e!==n&&(Zt(rl,t),Zt(ar,n))}function Wp(t){rl.current===t&&(en(ar),en(rl))}var ln=ds(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function Xp(){for(var t=0;t<Ud.length;t++)Ud[t]._workInProgressVersionPrimary=null;Ud.length=0}var Pc=Rr.ReactCurrentDispatcher,Fd=Rr.ReactCurrentBatchConfig,Vs=0,cn=null,wn=null,Rn=null,ru=!1,Ba=!1,ol=0,oM=0;function Vn(){throw Error(Ee(321))}function jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zi(t[n],e[n]))return!1;return!0}function qp(t,e,n,i,r,s){if(Vs=s,cn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?uM:dM,t=n(i,r),Ba){s=0;do{if(Ba=!1,ol=0,25<=s)throw Error(Ee(301));s+=1,Rn=wn=null,e.updateQueue=null,Pc.current=fM,t=n(i,r)}while(Ba)}if(Pc.current=su,e=wn!==null&&wn.next!==null,Vs=0,Rn=wn=cn=null,ru=!1,e)throw Error(Ee(300));return t}function Yp(){var t=ol!==0;return ol=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?cn.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function Fi(){if(wn===null){var t=cn.alternate;t=t!==null?t.memoizedState:null}else t=wn.next;var e=Rn===null?cn.memoizedState:Rn.next;if(e!==null)Rn=e,wn=t;else{if(t===null)throw Error(Ee(310));wn=t,t={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Rn===null?cn.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function al(t,e){return typeof e=="function"?e(t):e}function kd(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=wn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Vs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,cn.lanes|=h,Gs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zi(i,e.memoizedState)||(ci=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,cn.lanes|=s,Gs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=Fi(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zi(s,e.memoizedState)||(ci=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function h_(){}function p_(t,e){var n=cn,i=Fi(),r=e(),s=!Zi(i.memoizedState,r);if(s&&(i.memoizedState=r,ci=!0),i=i.queue,$p(v_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rn!==null&&Rn.memoizedState.tag&1){if(n.flags|=2048,ll(9,g_.bind(null,n,i,r,e),void 0,null),Pn===null)throw Error(Ee(349));Vs&30||m_(n,e,r)}return r}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,i){e.value=n,e.getSnapshot=i,__(e)&&x_(t)}function v_(t,e,n){return n(function(){__(e)&&x_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zi(t,n)}catch{return!0}}function x_(t){var e=br(t,1);e!==null&&$i(e,t,1,-1)}function mg(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=cM.bind(null,cn,t),[e.memoizedState,t]}function ll(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function y_(){return Fi().memoizedState}function Ic(t,e,n,i){var r=tr();cn.flags|=t,r.memoizedState=ll(1|e,n,void 0,i===void 0?null:i)}function Su(t,e,n,i){var r=Fi();i=i===void 0?null:i;var s=void 0;if(wn!==null){var o=wn.memoizedState;if(s=o.destroy,i!==null&&jp(i,o.deps)){r.memoizedState=ll(e,n,s,i);return}}cn.flags|=t,r.memoizedState=ll(1|e,n,s,i)}function gg(t,e){return Ic(8390656,8,t,e)}function $p(t,e){return Su(2048,8,t,e)}function M_(t,e){return Su(4,2,t,e)}function w_(t,e){return Su(4,4,t,e)}function S_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E_(t,e,n){return n=n!=null?n.concat([t]):null,Su(4,4,S_.bind(null,e,t),n)}function Kp(){}function T_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function A_(t,e){var n=Fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function b_(t,e,n){return Vs&21?(Zi(n,e)||(n=Lv(),cn.lanes|=n,Gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ci=!0),t.memoizedState=n)}function aM(t,e){var n=Ht;Ht=n!==0&&4>n?n:4,t(!0);var i=Fd.transition;Fd.transition={};try{t(!1),e()}finally{Ht=n,Fd.transition=i}}function C_(){return Fi().memoizedState}function lM(t,e,n){var i=ns(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},R_(t))P_(e,n);else if(n=u_(t,e,n,i),n!==null){var r=Qn();$i(n,t,i,r),I_(n,e,i)}}function cM(t,e,n){var i=ns(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(R_(t))P_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zi(a,o)){var l=e.interleaved;l===null?(r.next=r,Hp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=u_(t,e,r,i),n!==null&&(r=Qn(),$i(n,t,i,r),I_(n,e,i))}}function R_(t){var e=t.alternate;return t===cn||e!==null&&e===cn}function P_(t,e){Ba=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}var su={readContext:Ui,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},uM={readContext:Ui,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Ui,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,S_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=tr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lM.bind(null,cn,t),[i.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:Kp,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=aM.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=cn,r=tr();if(sn){if(n===void 0)throw Error(Ee(407));n=n()}else{if(n=e(),Pn===null)throw Error(Ee(349));Vs&30||m_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gg(v_.bind(null,i,s,t),[t]),i.flags|=2048,ll(9,g_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Pn.identifierPrefix;if(sn){var n=Mr,i=yr;n=(i&~(1<<32-Yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dM={readContext:Ui,useCallback:T_,useContext:Ui,useEffect:$p,useImperativeHandle:E_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:A_,useReducer:kd,useRef:y_,useState:function(){return kd(al)},useDebugValue:Kp,useDeferredValue:function(t){var e=Fi();return b_(e,wn.memoizedState,t)},useTransition:function(){var t=kd(al)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:h_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1},fM={readContext:Ui,useCallback:T_,useContext:Ui,useEffect:$p,useImperativeHandle:E_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:A_,useReducer:Od,useRef:y_,useState:function(){return Od(al)},useDebugValue:Kp,useDeferredValue:function(t){var e=Fi();return wn===null?e.memoizedState=t:b_(e,wn.memoizedState,t)},useTransition:function(){var t=Od(al)[0],e=Fi().memoizedState;return[t,e]},useMutableSource:h_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1};function Gi(t,e){if(t&&t.defaultProps){e=un({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:un({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eu={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=ns(t),s=Sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&($i(e,t,r,i),Rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=ns(t),s=Sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=es(t,s,r),e!==null&&($i(e,t,r,i),Rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qn(),i=ns(t),r=Sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=es(t,r,i),e!==null&&($i(e,t,i,n),Rc(e,t,i))}};function vg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!el(n,i)||!el(r,s):!0}function L_(t,e,n){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=Ui(s):(r=di(e)?Bs:$n.current,i=e.contextTypes,s=(i=i!=null)?Go(t,r):as),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Eu.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ui(s):(s=di(e)?Bs:$n.current,r.context=Go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Eu.enqueueReplaceState(r,r.state,null),nu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qo(t,e){try{var n="",i=e;do n+=By(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hM=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){au||(au=!0,yh=i),uh(t,e)},n}function N_(t,e,n){n=Sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uh(t,e),typeof i!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bM.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,es(n,e,1))),n.lanes|=1),t)}var pM=Rr.ReactCurrentOwner,ci=!1;function Jn(t,e,n,i){e.child=t===null?c_(e,null,n,i):Xo(e,t.child,n,i)}function wg(t,e,n,i,r){n=n.render;var s=e.ref;return Oo(e,r),i=qp(t,e,n,i,s,r),n=Yp(),t!==null&&!ci?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(sn&&n&&Up(e),e.flags|=1,Jn(t,e,i,r),e.child)}function Sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U_(t,e,s,i,r)):(t=Uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(o,i)&&t.ref===e.ref)return Cr(t,e,r)}return e.flags|=1,t=is(s,i),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(el(s,i)&&t.ref===e.ref)if(ci=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ci=!0);else return e.lanes=t.lanes,Cr(t,e,r)}return dh(t,e,n,i,r)}function F_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(Lo,yi),yi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Zt(Lo,yi),yi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Zt(Lo,yi),yi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Zt(Lo,yi),yi|=i;return Jn(t,e,r,n),e.child}function k_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,i,r){var s=di(n)?Bs:$n.current;return s=Go(e,s),Oo(e,r),n=qp(t,e,n,i,s,r),i=Yp(),t!==null&&!ci?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cr(t,e,r)):(sn&&i&&Up(e),e.flags|=1,Jn(t,e,n,r),e.child)}function Eg(t,e,n,i,r){if(di(n)){var s=!0;Zc(e)}else s=!1;if(Oo(e,r),e.stateNode===null)Lc(t,e),L_(e,n,i),ch(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ui(c):(c=di(n)?Bs:$n.current,c=Go(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_g(e,o,i,c),Gr=!1;var m=e.memoizedState;o.state=m,nu(e,i,o,r),l=e.memoizedState,a!==i||m!==l||ui.current||Gr?(typeof h=="function"&&(lh(e,n,h,i),l=e.memoizedState),(a=Gr||vg(e,n,a,i,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gi(e.type,a),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ui(l):(l=di(n)?Bs:$n.current,l=Go(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&_g(e,o,i,l),Gr=!1,m=e.memoizedState,o.state=m,nu(e,i,o,r);var M=e.memoizedState;a!==p||m!==M||ui.current||Gr?(typeof g=="function"&&(lh(e,n,g,i),M=e.memoizedState),(c=Gr||vg(e,n,c,i,m,M,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,M,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,M,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),o.props=i,o.state=M,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return fh(t,e,n,i,s,r)}function fh(t,e,n,i,r,s){k_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cg(e,n,!1),Cr(t,e,s);i=e.stateNode,pM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xo(e,t.child,null,s),e.child=Xo(e,null,a,s)):Jn(t,e,a,s),e.memoizedState=i.state,r&&cg(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),Gp(t,e.containerInfo)}function Tg(t,e,n,i,r){return Wo(),kp(r),e.flags|=256,Jn(t,e,n,i),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function z_(t,e,n){var i=e.pendingProps,r=ln.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Zt(ln,r&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,i,0,null),t=zs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=hh,t):Zp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=is(a,s):(s=zs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,i}return s=t.child,t=s.sibling,i=is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zp(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,i){return i!==null&&kp(i),Xo(e,t.child,null,n),t=Zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zd(Error(Ee(422))),$l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),s=zs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xo(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=hh,s);if(!(e.mode&1))return $l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ee(419)),i=zd(s,i,void 0),$l(t,e,o,i)}if(a=(o&t.childLanes)!==0,ci||a){if(i=Pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,br(t,r),$i(i,t,r,-1))}return im(),i=zd(Error(Ee(421))),$l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=CM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wi=Qr(r.nextSibling),Si=e,sn=!0,Xi=null,t!==null&&(Ii[Li++]=yr,Ii[Li++]=Mr,Ii[Li++]=Hs,yr=t.id,Mr=t.overflow,Hs=e),e=Zp(e,i.children),e.flags|=4096,e)}function Ag(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ah(t.return,e,n)}function Bd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jn(t,e,i.children,n),i=ln.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,e);else if(t.tag===19)Ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Zt(ln,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ee(153));if(e.child!==null){for(t=e.child,n=is(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=is(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gM(t,e,n){switch(e.tag){case 3:O_(e),Wo();break;case 5:f_(e);break;case 1:di(e.type)&&Zc(e);break;case 4:Gp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Zt(eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Zt(ln,ln.current&1),e.flags|=128,null):n&e.child.childLanes?z_(t,e,n):(Zt(ln,ln.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Zt(ln,ln.current),i)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return Cr(t,e,n)}var H_,mh,V_,G_;H_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};V_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Us(ar.current);var s=null;switch(n){case"input":r=kf(t,r),i=kf(t,i),s=[];break;case"select":r=un({},r,{value:void 0}),i=un({},i,{value:void 0}),s=[];break;case"textarea":r=Bf(t,r),i=Bf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$c)}Vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Qt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};G_=function(t,e,n,i){n!==i&&(e.flags|=4)};function xa(t,e){if(!sn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vM(t,e,n){var i=e.pendingProps;switch(Fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(e),null;case 1:return di(e.type)&&Kc(),Gn(e),null;case 3:return i=e.stateNode,jo(),en(ui),en($n),Xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xi!==null&&(Sh(Xi),Xi=null))),mh(t,e),Gn(e),null;case 5:Wp(e);var r=Us(sl.current);if(n=e.type,t!==null&&e.stateNode!=null)V_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return Gn(e),null}if(t=Us(ar.current),ql(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ir]=e,i[il]=s,t=(e.mode&1)!==0,n){case"dialog":Qt("cancel",i),Qt("close",i);break;case"iframe":case"object":case"embed":Qt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)Qt(Da[r],i);break;case"source":Qt("error",i);break;case"img":case"image":case"link":Qt("error",i),Qt("load",i);break;case"details":Qt("toggle",i);break;case"input":U0(i,s),Qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qt("invalid",i);break;case"textarea":k0(i,s),Qt("invalid",i)}Vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,t),r=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qt("scroll",i)}switch(n){case"input":Ol(i),F0(i,s,!0);break;case"textarea":Ol(i),O0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ir]=e,t[il]=i,H_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,i),n){case"dialog":Qt("cancel",t),Qt("close",t),r=i;break;case"iframe":case"object":case"embed":Qt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)Qt(Da[r],t);r=i;break;case"source":Qt("error",t),r=i;break;case"img":case"image":case"link":Qt("error",t),Qt("load",t),r=i;break;case"details":Qt("toggle",t),r=i;break;case"input":U0(t,i),r=kf(t,i),Qt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=un({},i,{value:void 0}),Qt("invalid",t);break;case"textarea":k0(t,i),r=Bf(t,i),Qt("invalid",t);break;default:r=i}Vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_v(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qt("scroll",t):l!=null&&Mp(t,s,l,o))}switch(n){case"input":Ol(t),F0(t,i,!1);break;case"textarea":Ol(t),O0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?No(t,!!i.multiple,s,!1):i.defaultValue!=null&&No(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$c)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gn(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(n=Us(sl.current),Us(ar.current),ql(e)){if(i=e.stateNode,n=e.memoizedProps,i[ir]=e,(s=i.nodeValue!==n)&&(t=Si,t!==null))switch(t.tag){case 3:jl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ir]=e,e.stateNode=i}return Gn(e),null;case 13:if(en(ln),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(sn&&wi!==null&&e.mode&1&&!(e.flags&128))a_(),Wo(),e.flags|=98560,s=!1;else if(s=ql(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ee(317));s[ir]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gn(e),s=!1}else Xi!==null&&(Sh(Xi),Xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ln.current&1?Sn===0&&(Sn=3):im())),e.updateQueue!==null&&(e.flags|=4),Gn(e),null);case 4:return jo(),mh(t,e),t===null&&tl(e.stateNode.containerInfo),Gn(e),null;case 10:return Bp(e.type._context),Gn(e),null;case 17:return di(e.type)&&Kc(),Gn(e),null;case 19:if(en(ln),s=e.memoizedState,s===null)return Gn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xa(s,!1);else{if(Sn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,xa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Zt(ln,ln.current&1|2),e.child}t=t.sibling}s.tail!==null&&pn()>Yo&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304)}else{if(!i)if(t=iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!sn)return Gn(e),null}else 2*pn()-s.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pn(),e.sibling=null,n=ln.current,Zt(ln,i?n&1|2:n&1),e):(Gn(e),null);case 22:case 23:return nm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Gn(e),e.subtreeFlags&6&&(e.flags|=8192)):Gn(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function _M(t,e){switch(Fp(e),e.tag){case 1:return di(e.type)&&Kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),en(ui),en($n),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wp(e),null;case 13:if(en(ln),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));Wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return en(ln),null;case 4:return jo(),null;case 10:return Bp(e.type._context),null;case 22:case 23:return nm(),null;case 24:return null;default:return null}}var Kl=!1,Yn=!1,xM=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){hn(t,e,i)}else n.current=null}function gh(t,e,n){try{n()}catch(i){hn(t,e,i)}}var bg=!1;function yM(t,e){if(Qf=jc,t=Yv(),Np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},jc=!1,Ye=e;Ye!==null;)if(e=Ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ye=t;else for(;Ye!==null;){e=Ye;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,_=M.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?T:Gi(e.type,T),_);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(E){hn(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ye=t;break}Ye=e.return}return M=bg,bg=!1,M}function Ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gh(e,n,s)}r=r.next}while(r!==i)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ir],delete e[il],delete e[ih],delete e[nM],delete e[iM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$c));else if(i!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Nn=null,Wi=!1;function Nr(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:Yn||Io(n,e);case 6:var i=Nn,r=Wi;Nn=null,Nr(t,e,n),Nn=i,Wi=r,Nn!==null&&(Wi?(t=Nn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nn.removeChild(n.stateNode));break;case 18:Nn!==null&&(Wi?(t=Nn,n=n.stateNode,t.nodeType===8?Dd(t.parentNode,n):t.nodeType===1&&Dd(t,n),Ja(t)):Dd(Nn,n.stateNode));break;case 4:i=Nn,r=Wi,Nn=n.stateNode.containerInfo,Wi=!0,Nr(t,e,n),Nn=i,Wi=r;break;case 0:case 11:case 14:case 15:if(!Yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),r=r.next}while(r!==i)}Nr(t,e,n);break;case 1:if(!Yn&&(Io(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){hn(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Yn=(i=Yn)||n.memoizedState!==null,Nr(t,e,n),Yn=i):Nr(t,e,n);break;default:Nr(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xM),e.forEach(function(i){var r=RM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nn=a.stateNode,Wi=!1;break e;case 3:Nn=a.stateNode.containerInfo,Wi=!0;break e;case 4:Nn=a.stateNode.containerInfo,Wi=!0;break e}a=a.return}if(Nn===null)throw Error(Ee(160));j_(s,o,r),Nn=null,Wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){hn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Oi(e,t),er(t),i&4){try{Ha(3,t,t.return),Tu(3,t)}catch(T){hn(t,t.return,T)}try{Ha(5,t,t.return)}catch(T){hn(t,t.return,T)}}break;case 1:Oi(e,t),er(t),i&512&&n!==null&&Io(n,n.return);break;case 5:if(Oi(e,t),er(t),i&512&&n!==null&&Io(n,n.return),t.flags&32){var r=t.stateNode;try{Ya(r,"")}catch(T){hn(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mv(r,s),Gf(a,o);var c=Gf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?yv(r,p):h==="dangerouslySetInnerHTML"?_v(r,p):h==="children"?Ya(r,p):Mp(r,h,p,c)}switch(a){case"input":Of(r,s);break;case"textarea":gv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?No(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?No(r,!!s.multiple,s.defaultValue,!0):No(r,!!s.multiple,s.multiple?[]:"",!1))}r[il]=s}catch(T){hn(t,t.return,T)}}break;case 6:if(Oi(e,t),er(t),i&4){if(t.stateNode===null)throw Error(Ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){hn(t,t.return,T)}}break;case 3:if(Oi(e,t),er(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(T){hn(t,t.return,T)}break;case 4:Oi(e,t),er(t);break;case 13:Oi(e,t),er(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(em=pn())),i&4&&Rg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Yn=(c=Yn)||h,Oi(e,t),Yn=c):Oi(e,t),er(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ye=t,h=t.child;h!==null;){for(p=Ye=h;Ye!==null;){switch(m=Ye,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ha(4,m,m.return);break;case 1:Io(m,m.return);var M=m.stateNode;if(typeof M.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(T){hn(i,n,T)}}break;case 5:Io(m,m.return);break;case 22:if(m.memoizedState!==null){Ig(p);continue}}g!==null?(g.return=m,Ye=g):Ig(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xv("display",o))}catch(T){hn(t,t.return,T)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){hn(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oi(e,t),er(t),i&4&&Rg(t);break;case 21:break;default:Oi(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var i=n;break e}n=n.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ya(r,""),i.flags&=-33);var s=Cg(t);xh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cg(t);_h(t,a,o);break;default:throw Error(Ee(161))}}catch(l){hn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MM(t,e,n){Ye=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;Ye!==null;){var r=Ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Kl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yn;a=Kl;var c=Yn;if(Kl=o,(Yn=l)&&!c)for(Ye=r;Ye!==null;)o=Ye,l=o.child,o.tag===22&&o.memoizedState!==null?Lg(r):l!==null?(l.return=o,Ye=l):Lg(r);for(;s!==null;)Ye=s,Y_(s),s=s.sibling;Ye=r,Kl=a,Yn=c}Pg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ye=s):Pg(t)}}function Pg(t){for(;Ye!==null;){var e=Ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yn||Tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}Yn||e.flags&512&&vh(e)}catch(m){hn(e,e.return,m)}}if(e===t){Ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ye=n;break}Ye=e.return}}function Ig(t){for(;Ye!==null;){var e=Ye;if(e===t){Ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ye=n;break}Ye=e.return}}function Lg(t){for(;Ye!==null;){var e=Ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(l){hn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){hn(e,r,l)}}var s=e.return;try{vh(e)}catch(l){hn(e,s,l)}break;case 5:var o=e.return;try{vh(e)}catch(l){hn(e,o,l)}}}catch(l){hn(e,e.return,l)}if(e===t){Ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ye=a;break}Ye=e.return}}var wM=Math.ceil,ou=Rr.ReactCurrentDispatcher,Jp=Rr.ReactCurrentOwner,Ni=Rr.ReactCurrentBatchConfig,It=0,Pn=null,vn=null,kn=0,yi=0,Lo=ds(0),Sn=0,cl=null,Gs=0,Au=0,Qp=0,Va=null,li=null,em=0,Yo=1/0,_r=null,au=!1,yh=null,ts=null,Zl=!1,$r=null,lu=0,Ga=0,Mh=null,Dc=-1,Nc=0;function Qn(){return It&6?pn():Dc!==-1?Dc:Dc=pn()}function ns(t){return t.mode&1?It&2&&kn!==0?kn&-kn:sM.transition!==null?(Nc===0&&(Nc=Lv()),Nc):(t=Ht,t!==0||(t=window.event,t=t===void 0?16:zv(t.type)),t):1}function $i(t,e,n,i){if(50<Ga)throw Ga=0,Mh=null,Error(Ee(185));gl(t,n,i),(!(It&2)||t!==Pn)&&(t===Pn&&(!(It&2)&&(Au|=n),Sn===4&&Xr(t,kn)),fi(t,i),n===1&&It===0&&!(e.mode&1)&&(Yo=pn()+500,wu&&fs()))}function fi(t,e){var n=t.callbackNode;s2(t,e);var i=Xc(t,t===Pn?kn:0);if(i===0)n!==null&&H0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&H0(n),e===1)t.tag===0?rM(Dg.bind(null,t)):r_(Dg.bind(null,t)),eM(function(){!(It&6)&&fs()}),n=null;else{switch(Dv(i)){case 1:n=Ap;break;case 4:n=Pv;break;case 16:n=Wc;break;case 536870912:n=Iv;break;default:n=Wc}n=nx(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(Dc=-1,Nc=0,It&6)throw Error(Ee(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var i=Xc(t,t===Pn?kn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cu(t,i);else{e=i;var r=It;It|=2;var s=Z_();(Pn!==t||kn!==e)&&(_r=null,Yo=pn()+500,Os(t,e));do try{TM();break}catch(a){K_(t,a)}while(!0);zp(),ou.current=s,It=r,vn!==null?e=0:(Pn=null,kn=0,e=Sn)}if(e!==0){if(e===2&&(r=Yf(t),r!==0&&(i=r,e=wh(t,r))),e===1)throw n=cl,Os(t,0),Xr(t,i),fi(t,pn()),n;if(e===6)Xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!SM(r)&&(e=cu(t,i),e===2&&(s=Yf(t),s!==0&&(i=s,e=wh(t,s))),e===1))throw n=cl,Os(t,0),Xr(t,i),fi(t,pn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:Cs(t,li,_r);break;case 3:if(Xr(t,i),(i&130023424)===i&&(e=em+500-pn(),10<e)){if(Xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nh(Cs.bind(null,t,li,_r),e);break}Cs(t,li,_r);break;case 4:if(Xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wM(i/1960))-i,10<i){t.timeoutHandle=nh(Cs.bind(null,t,li,_r),i);break}Cs(t,li,_r);break;case 5:Cs(t,li,_r);break;default:throw Error(Ee(329))}}}return fi(t,pn()),t.callbackNode===n?$_.bind(null,t):null}function wh(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Os(t,e).flags|=256),t=cu(t,e),t!==2&&(e=li,li=n,e!==null&&Sh(e)),t}function Sh(t){li===null?li=t:li.push.apply(li,t)}function SM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~Qp,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yi(e),i=1<<n;t[n]=-1,e&=~i}}function Dg(t){if(It&6)throw Error(Ee(327));zo();var e=Xc(t,0);if(!(e&1))return fi(t,pn()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var i=Yf(t);i!==0&&(e=i,n=wh(t,i))}if(n===1)throw n=cl,Os(t,0),Xr(t,e),fi(t,pn()),n;if(n===6)throw Error(Ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cs(t,li,_r),fi(t,pn()),null}function tm(t,e){var n=It;It|=1;try{return t(e)}finally{It=n,It===0&&(Yo=pn()+500,wu&&fs())}}function Ws(t){$r!==null&&$r.tag===0&&!(It&6)&&zo();var e=It;It|=1;var n=Ni.transition,i=Ht;try{if(Ni.transition=null,Ht=1,t)return t()}finally{Ht=i,Ni.transition=n,It=e,!(It&6)&&fs()}}function nm(){yi=Lo.current,en(Lo)}function Os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q2(n)),vn!==null)for(n=vn.return;n!==null;){var i=n;switch(Fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kc();break;case 3:jo(),en(ui),en($n),Xp();break;case 5:Wp(i);break;case 4:jo();break;case 13:en(ln);break;case 19:en(ln);break;case 10:Bp(i.type._context);break;case 22:case 23:nm()}n=n.return}if(Pn=t,vn=t=is(t.current,null),kn=yi=e,Sn=0,cl=null,Qp=Au=Gs=0,li=Va=null,Ns!==null){for(e=0;e<Ns.length;e++)if(n=Ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ns=null}return t}function K_(t,e){do{var n=vn;try{if(zp(),Pc.current=su,ru){for(var i=cn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ru=!1}if(Vs=0,Rn=wn=cn=null,Ba=!1,ol=0,Jp.current=null,n===null||n.return===null){Sn=1,cl=e,vn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=yg(o);if(g!==null){g.flags&=-257,Mg(g,o,a,s,e),g.mode&1&&xg(s,c,e),e=g,l=c;var M=e.updateQueue;if(M===null){var T=new Set;T.add(l),e.updateQueue=T}else M.add(l);break e}else{if(!(e&1)){xg(s,c,e),im();break e}l=Error(Ee(426))}}else if(sn&&a.mode&1){var _=yg(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Mg(_,o,a,s,e),kp(qo(l,a));break e}}s=l=qo(l,a),Sn!==4&&(Sn=2),Va===null?Va=[s]:Va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=D_(s,l,e);hg(s,d);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ts===null||!ts.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=N_(s,a,e);hg(s,E);break e}}s=s.return}while(s!==null)}Q_(n)}catch(P){e=P,vn===n&&n!==null&&(vn=n=n.return);continue}break}while(!0)}function Z_(){var t=ou.current;return ou.current=su,t===null?su:t}function im(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),Pn===null||!(Gs&268435455)&&!(Au&268435455)||Xr(Pn,kn)}function cu(t,e){var n=It;It|=2;var i=Z_();(Pn!==t||kn!==e)&&(_r=null,Os(t,e));do try{EM();break}catch(r){K_(t,r)}while(!0);if(zp(),It=n,ou.current=i,vn!==null)throw Error(Ee(261));return Pn=null,kn=0,Sn}function EM(){for(;vn!==null;)J_(vn)}function TM(){for(;vn!==null&&!Ky();)J_(vn)}function J_(t){var e=tx(t.alternate,t,yi);t.memoizedProps=t.pendingProps,e===null?Q_(t):vn=e,Jp.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_M(n,e),n!==null){n.flags&=32767,vn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Sn=6,vn=null;return}}else if(n=vM(n,e,yi),n!==null){vn=n;return}if(e=e.sibling,e!==null){vn=e;return}vn=e=t}while(e!==null);Sn===0&&(Sn=5)}function Cs(t,e,n){var i=Ht,r=Ni.transition;try{Ni.transition=null,Ht=1,AM(t,e,n,i)}finally{Ni.transition=r,Ht=i}return null}function AM(t,e,n,i){do zo();while($r!==null);if(It&6)throw Error(Ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o2(t,s),t===Pn&&(vn=Pn=null,kn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,nx(Wc,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ni.transition,Ni.transition=null;var o=Ht;Ht=1;var a=It;It|=4,Jp.current=null,yM(t,n),q_(n,t),j2(eh),jc=!!Qf,eh=Qf=null,t.current=n,MM(n),Zy(),It=a,Ht=o,Ni.transition=s}else t.current=n;if(Zl&&(Zl=!1,$r=t,lu=r),s=t.pendingLanes,s===0&&(ts=null),e2(n.stateNode),fi(t,pn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,t=yh,yh=null,t;return lu&1&&t.tag!==0&&zo(),s=t.pendingLanes,s&1?t===Mh?Ga++:(Ga=0,Mh=t):Ga=0,fs(),null}function zo(){if($r!==null){var t=Dv(lu),e=Ni.transition,n=Ht;try{if(Ni.transition=null,Ht=16>t?16:t,$r===null)var i=!1;else{if(t=$r,$r=null,lu=0,It&6)throw Error(Ee(331));var r=It;for(It|=4,Ye=t.current;Ye!==null;){var s=Ye,o=s.child;if(Ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ye=c;Ye!==null;){var h=Ye;switch(h.tag){case 0:case 11:case 15:Ha(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ye=p;else for(;Ye!==null;){h=Ye;var m=h.sibling,g=h.return;if(W_(h),h===c){Ye=null;break}if(m!==null){m.return=g,Ye=m;break}Ye=g}}}var M=s.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var _=T.sibling;T.sibling=null,T=_}while(T!==null)}}Ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ye=o;else e:for(;Ye!==null;){if(s=Ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ye=d;break e}Ye=s.return}}var v=t.current;for(Ye=v;Ye!==null;){o=Ye;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ye=y;else e:for(o=v;Ye!==null;){if(a=Ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(P){hn(a,a.return,P)}if(a===o){Ye=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Ye=E;break e}Ye=a.return}}if(It=r,fs(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{Ht=n,Ni.transition=e}}return!1}function Ng(t,e,n){e=qo(n,e),e=D_(t,e,1),t=es(t,e,1),e=Qn(),t!==null&&(gl(t,1,e),fi(t,e))}function hn(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ts===null||!ts.has(i))){t=qo(n,t),t=N_(e,t,1),e=es(e,t,1),t=Qn(),e!==null&&(gl(e,1,t),fi(e,t));break}}e=e.return}}function bM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qn(),t.pingedLanes|=t.suspendedLanes&n,Pn===t&&(kn&n)===n&&(Sn===4||Sn===3&&(kn&130023424)===kn&&500>pn()-em?Os(t,0):Qp|=n),fi(t,e)}function ex(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=Qn();t=br(t,e),t!==null&&(gl(t,e,n),fi(t,n))}function CM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ex(t,n)}function RM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),ex(t,n)}var tx;tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ui.current)ci=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ci=!1,gM(t,e,n);ci=!!(t.flags&131072)}else ci=!1,sn&&e.flags&1048576&&s_(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=Go(e,$n.current);Oo(e,n),r=qp(null,e,i,t,r,n);var s=Yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,di(i)?(s=!0,Zc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vp(e),r.updater=Eu,e.stateNode=r,r._reactInternals=e,ch(e,i,t,n),e=fh(null,e,i,!0,s,n)):(e.tag=0,sn&&s&&Up(e),Jn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IM(i),t=Gi(i,t),r){case 0:e=dh(null,e,i,t,n);break e;case 1:e=Eg(null,e,i,t,n);break e;case 11:e=wg(null,e,i,t,n);break e;case 14:e=Sg(null,e,i,Gi(i.type,t),n);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),dh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Eg(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(Ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d_(t,e),nu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qo(Error(Ee(423)),e),e=Tg(t,e,i,n,r);break e}else if(i!==r){r=qo(Error(Ee(424)),e),e=Tg(t,e,i,n,r);break e}else for(wi=Qr(e.stateNode.containerInfo.firstChild),Si=e,sn=!0,Xi=null,n=c_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),i===r){e=Cr(t,e,n);break e}Jn(t,e,i,n)}e=e.child}return e;case 5:return f_(e),t===null&&oh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,th(i,r)?o=null:s!==null&&th(i,s)&&(e.flags|=32),k_(t,e),Jn(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return z_(t,e,n);case 4:return Gp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xo(e,null,i,n):Jn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),wg(t,e,i,r,n);case 7:return Jn(t,e,e.pendingProps,n),e.child;case 8:return Jn(t,e,e.pendingProps.children,n),e.child;case 12:return Jn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Zt(eu,i._currentValue),i._currentValue=o,s!==null)if(Zi(s.value,o)){if(s.children===r.children&&!ui.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Oo(e,n),r=Ui(r),i=i(r),e.flags|=1,Jn(t,e,i,n),e.child;case 14:return i=e.type,r=Gi(i,e.pendingProps),r=Gi(i.type,r),Sg(t,e,i,r,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Lc(t,e),e.tag=1,di(i)?(t=!0,Zc(e)):t=!1,Oo(e,n),L_(e,i,r),ch(e,i,r,n),fh(null,e,i,!0,t,n);case 19:return B_(t,e,n);case 22:return F_(t,e,n)}throw Error(Ee(156,e.tag))};function nx(t,e){return Rv(t,e)}function PM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(t,e,n,i){return new PM(t,e,n,i)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IM(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===Ep)return 14}return 2}function is(t,e){var n=t.alternate;return n===null?(n=Di(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wo:return zs(n.children,r,s,e);case wp:o=8,r|=8;break;case Df:return t=Di(12,n,e,r|2),t.elementType=Df,t.lanes=s,t;case Nf:return t=Di(13,n,e,r),t.elementType=Nf,t.lanes=s,t;case Uf:return t=Di(19,n,e,r),t.elementType=Uf,t.lanes=s,t;case fv:return bu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case dv:o=9;break e;case Sp:o=11;break e;case Ep:o=14;break e;case Vr:o=16,i=null;break e}throw Error(Ee(130,t==null?t:typeof t,""))}return e=Di(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zs(t,e,n,i){return t=Di(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=Di(22,t,i,e),t.elementType=fv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=Di(6,t,null,e),t.lanes=n,t}function Vd(t,e,n){return e=Di(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,i,r,s,o,a,l){return t=new LM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Di(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function DM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ix(t){if(!t)return as;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(Ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(di(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(t.tag===1){var n=t.type;if(di(n))return i_(t,n,e)}return e}function rx(t,e,n,i,r,s,o,a,l){return t=sm(n,i,!0,t,r,s,o,a,l),t.context=ix(null),n=t.current,i=Qn(),r=ns(n),s=Sr(i,r),s.callback=e??null,es(n,s,r),t.current.lanes=r,gl(t,r,i),fi(t,i),t}function Cu(t,e,n,i){var r=e.current,s=Qn(),o=ns(r);return n=ix(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=es(r,e,o),t!==null&&($i(t,r,o,s),Rc(t,r,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function om(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function NM(){return null}var sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function am(t){this._internalRoot=t}Ru.prototype.render=am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ee(409));Cu(t,e,null,null)};Ru.prototype.unmount=am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ws(function(){Cu(null,t,null,null)}),e[Ar]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&Ov(t)}};function lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function UM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=uu(o);s.call(c)}}var o=rx(e,i,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[Ar]=o.current,tl(t.nodeType===8?t.parentNode:t),Ws(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uu(l);a.call(c)}}var l=sm(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=l,t[Ar]=l.current,tl(t.nodeType===8?t.parentNode:t),Ws(function(){Cu(e,l,n,i)}),l}function Iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=uu(o);a.call(l)}}Cu(e,o,t,r)}else o=UM(n,e,t,r,i);return uu(o)}Nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(bp(e,n|1),fi(e,pn()),!(It&6)&&(Yo=pn()+500,fs()))}break;case 13:Ws(function(){var i=br(t,1);if(i!==null){var r=Qn();$i(i,t,1,r)}}),om(t,1)}};Cp=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Qn();$i(e,t,134217728,n)}om(t,134217728)}};Uv=function(t){if(t.tag===13){var e=ns(t),n=br(t,e);if(n!==null){var i=Qn();$i(n,t,e,i)}om(t,e)}};Fv=function(){return Ht};kv=function(t,e){var n=Ht;try{return Ht=t,e()}finally{Ht=n}};Xf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Mu(i);if(!r)throw Error(Ee(90));pv(i),Of(i,r)}}}break;case"textarea":gv(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};Sv=tm;Ev=Ws;var FM={usingClientEntryPoint:!1,Events:[_l,Ao,Mu,Mv,wv,tm]},ya={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kM={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||NM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{vu=Jl.inject(kM),or=Jl}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FM;Ti.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lm(e))throw Error(Ee(200));return DM(t,e,null,n)};Ti.createRoot=function(t,e){if(!lm(t))throw Error(Ee(299));var n=!1,i="",r=sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,i,r),t[Ar]=e.current,tl(t.nodeType===8?t.parentNode:t),new am(e)};Ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ee(188)):(t=Object.keys(t).join(","),Error(Ee(268,t)));return t=bv(e),t=t===null?null:t.stateNode,t};Ti.flushSync=function(t){return Ws(t)};Ti.hydrate=function(t,e,n){if(!Pu(e))throw Error(Ee(200));return Iu(null,t,e,!0,n)};Ti.hydrateRoot=function(t,e,n){if(!lm(t))throw Error(Ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rx(e,null,t,1,n??null,r,!1,s,o),t[Ar]=e.current,tl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};Ti.render=function(t,e,n){if(!Pu(e))throw Error(Ee(200));return Iu(null,t,e,!1,n)};Ti.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(Ee(40));return t._reactRootContainer?(Ws(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};Ti.unstable_batchedUpdates=tm;Ti.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(Ee(200));if(t==null||t._reactInternals===void 0)throw Error(Ee(38));return Iu(t,e,n,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ox)}catch(t){console.error(t)}}ox(),ov.exports=Ti;var OM=ov.exports,ax,kg=OM;ax=kg.createRoot,kg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cm="180",zM=0,Og=1,BM=2,lx=1,cx=2,vr=3,ls=0,hi=1,Yt=2,rs=0,Bo=1,zg=2,Bg=3,Hg=4,HM=5,Is=100,VM=101,GM=102,WM=103,XM=104,jM=200,qM=201,YM=202,$M=203,Eh=204,Th=205,KM=206,ZM=207,JM=208,QM=209,ew=210,tw=211,nw=212,iw=213,rw=214,Ah=0,bh=1,Ch=2,$o=3,Rh=4,Ph=5,Ih=6,Lh=7,um=0,sw=1,ow=2,ss=0,aw=1,lw=2,cw=3,ux=4,uw=5,dw=6,fw=7,dx=300,Ko=301,Zo=302,Dh=303,Nh=304,Lu=306,jr=1e3,Fs=1001,Uh=1002,Ki=1003,hw=1004,Ql=1005,rr=1006,Gd=1007,ks=1008,cr=1009,fx=1010,hx=1011,ul=1012,dm=1013,Xs=1014,wr=1015,yl=1016,fm=1017,hm=1018,dl=1020,px=35902,mx=35899,gx=1021,vx=1022,qi=1023,fl=1026,hl=1027,_x=1028,pm=1029,xx=1030,mm=1031,gm=1033,Fc=33776,kc=33777,Oc=33778,zc=33779,Fh=35840,kh=35841,Oh=35842,zh=35843,Bh=36196,Hh=37492,Vh=37496,Gh=37808,Wh=37809,Xh=37810,jh=37811,qh=37812,Yh=37813,$h=37814,Kh=37815,Zh=37816,Jh=37817,Qh=37818,ep=37819,tp=37820,np=37821,ip=36492,rp=36494,sp=36495,op=36283,ap=36284,lp=36285,cp=36286,pw=3200,mw=3201,vm=0,gw=1,qr="",Fn="srgb",Jo="srgb-linear",du="linear",Xt="srgb",so=7680,Vg=519,vw=512,_w=513,xw=514,yx=515,yw=516,Mw=517,ww=518,Sw=519,Gg=35044,Wg="300 es",sr=2e3,fu=2001;class ia{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,up=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[t&255]+Wn[t>>8&255]+Wn[t>>16&255]+Wn[t>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function xt(t,e,n){return Math.max(e,Math.min(n,t))}function Ew(t,e){return(t%e+e)%e}function Xd(t,e,n){return(1-n)*t+n*e}function Ma(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function oi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],g=s[o+1],M=s[o+2],T=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=M,e[n+3]=T;return}if(p!==T||l!==m||c!==g||h!==M){let _=1-a;const d=l*m+c*g+h*M+p*T,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),I=Math.atan2(P,d*v);_=Math.sin(_*I)/P,a=Math.sin(a*I)/P}const E=a*v;if(l=l*_+m*E,c=c*_+g*E,h=h*_+M*E,p=p*_+T*E,_===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=P,c*=P,h*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],m=s[o+1],g=s[o+2],M=s[o+3];return e[n]=a*M+h*p+l*g-c*m,e[n+1]=l*M+h*m+c*p-a*g,e[n+2]=c*M+h*g+a*m-l*p,e[n+3]=h*M-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),m=l(i/2),g=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"YXZ":this._x=m*h*p+c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"ZXY":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p-m*g*M;break;case"ZYX":this._x=m*h*p-c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p+m*g*M;break;case"YZX":this._x=m*h*p+c*g*M,this._y=c*g*p+m*h*M,this._z=c*h*M-m*g*p,this._w=c*h*p-m*g*M;break;case"XZY":this._x=m*h*p-c*g*M,this._y=c*g*p-m*h*M,this._z=c*h*M+m*g*p,this._w=c*h*p+m*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jd.copy(this).projectOnVector(e),this.sub(jd)}reflect(e){return this.sub(jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jd=new G,Xg=new wl;class vt{constructor(e,n,i,r,s,o,a,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],m=i[2],g=i[5],M=i[8],T=r[0],_=r[3],d=r[6],v=r[1],y=r[4],E=r[7],P=r[2],I=r[5],L=r[8];return s[0]=o*T+a*v+l*P,s[3]=o*_+a*y+l*I,s[6]=o*d+a*E+l*L,s[1]=c*T+h*v+p*P,s[4]=c*_+h*y+p*I,s[7]=c*d+h*E+p*L,s[2]=m*T+g*v+M*P,s[5]=m*_+g*y+M*I,s[8]=m*d+g*E+M*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,m=a*l-h*s,g=c*s-o*l,M=n*p+i*m+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=p*T,e[1]=(r*c-h*i)*T,e[2]=(a*i-r*o)*T,e[3]=m*T,e[4]=(h*n-r*l)*T,e[5]=(r*s-a*n)*T,e[6]=g*T,e[7]=(i*l-c*n)*T,e[8]=(o*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qd.makeScale(e,n)),this}rotate(e){return this.premultiply(qd.makeRotation(-e)),this}translate(e,n){return this.premultiply(qd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qd=new vt;function Mx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Tw(){const t=hu("canvas");return t.style.display="block",t}const jg={};function pl(t){t in jg||(jg[t]=!0,console.warn(t))}function Aw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qg=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bw(){const t={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Xt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Xt&&(r.r=Ho(r.r),r.g=Ho(r.g),r.b=Ho(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qr?du:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jo]:{primaries:e,whitePoint:i,transfer:du,toXYZ:qg,fromXYZ:Yg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:qg,fromXYZ:Yg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Dt=bw();function Er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ho(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let oo;class Cw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{oo===void 0&&(oo=hu("canvas")),oo.width=e.width,oo.height=e.height;const r=oo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=oo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Er(n[i]/255)*255):n[i]=Er(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rw=0;class _m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yd(r[o].image)):s.push(Yd(r[o]))}else s=Yd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Cw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pw=0;const $d=new G;class ei extends ia{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,i=Fs,r=Fs,s=rr,o=ks,a=qi,l=cr,c=ei.DEFAULT_ANISOTROPY,h=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Ml(),this.name="",this.source=new _m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=dx;ei.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],g=l[5],M=l[9],T=l[2],_=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-T)<.01&&Math.abs(M-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+T)<.1&&Math.abs(M+_)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(g+1)/2,P=(d+1)/2,I=(h+m)/4,L=(p+T)/4,U=(M+_)/4;return y>E&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=I/i,s=L/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-M)*(_-M)+(p-T)*(p-T)+(m-h)*(m-h));return Math.abs(v)<.001&&(v=1),this.x=(_-M)/v,this.y=(p-T)/v,this.z=(m-h)/v,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iw extends ia{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ei(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _m(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends Iw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wx extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lw extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),tc.subVectors(this.max,wa),ao.subVectors(e.a,wa),lo.subVectors(e.b,wa),co.subVectors(e.c,wa),Ur.subVectors(lo,ao),Fr.subVectors(co,lo),ys.subVectors(ao,co);let n=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-ys.z,ys.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,ys.z,0,-ys.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-ys.y,ys.x,0];return!Kd(n,ao,lo,co,tc)||(n=[1,0,0,0,1,0,0,0,1],!Kd(n,ao,lo,co,tc))?!1:(nc.crossVectors(Ur,Fr),n=[nc.x,nc.y,nc.z],Kd(n,ao,lo,co,tc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new G,new G,new G,new G,new G,new G,new G,new G],zi=new G,ec=new Sl,ao=new G,lo=new G,co=new G,Ur=new G,Fr=new G,ys=new G,wa=new G,tc=new G,nc=new G,Ms=new G;function Kd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ms.fromArray(t,s);const a=r.x*Math.abs(Ms.x)+r.y*Math.abs(Ms.y)+r.z*Math.abs(Ms.z),l=e.dot(Ms),c=n.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dw=new Sl,Sa=new G,Zd=new G;class Du{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Dw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Zd)),this.expandByPoint(Sa.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hr=new G,Jd=new G,ic=new G,kr=new G,Qd=new G,rc=new G,ef=new G;class xm{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jd.copy(e).add(n).multiplyScalar(.5),ic.copy(n).sub(e).normalize(),kr.copy(this.origin).sub(Jd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ic),a=kr.dot(this.direction),l=-kr.dot(ic),c=kr.lengthSq(),h=Math.abs(1-o*o);let p,m,g,M;if(h>0)if(p=o*l-a,m=o*a-l,M=s*h,p>=0)if(m>=-M)if(m<=M){const T=1/h;p*=T,m*=T,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-M?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c):m<=M?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Jd).addScaledVector(ic,m),g}intersectSphere(e,n){hr.subVectors(e.center,this.origin);const i=hr.dot(this.direction),r=hr.dot(hr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,n,i,r,s){Qd.subVectors(n,e),rc.subVectors(i,e),ef.crossVectors(Qd,rc);let o=this.direction.dot(ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const l=a*this.direction.dot(rc.crossVectors(kr,rc));if(l<0)return null;const c=a*this.direction.dot(Qd.cross(kr));if(c<0||l+c>o)return null;const h=-a*kr.dot(ef);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,i,r,s,o,a,l,c,h,p,m,g,M,T,_){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,T,_)}set(e,n,i,r,s,o,a,l,c,h,p,m,g,M,T,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=m,d[3]=g,d[7]=M,d[11]=T,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/uo.setFromMatrixColumn(e,0).length(),s=1/uo.setFromMatrixColumn(e,1).length(),o=1/uo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,M=a*h,T=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+M*c,n[5]=m-T*c,n[9]=-a*l,n[2]=T-m*c,n[6]=M+g*c,n[10]=o*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,M=c*h,T=c*p;n[0]=m+T*a,n[4]=M*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-M,n[6]=T+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,M=c*h,T=c*p;n[0]=m-T*a,n[4]=-o*p,n[8]=M+g*a,n[1]=g+M*a,n[5]=o*h,n[9]=T-m*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*h,g=o*p,M=a*h,T=a*p;n[0]=l*h,n[4]=M*c-g,n[8]=m*c+T,n[1]=l*p,n[5]=T*c+m,n[9]=g*c-M,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*c,M=a*l,T=a*c;n[0]=l*h,n[4]=T-m*p,n[8]=M*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*p+M,n[10]=m-T*p}else if(e.order==="XZY"){const m=o*l,g=o*c,M=a*l,T=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=m*p+T,n[5]=o*h,n[9]=g*p-M,n[2]=M*p-g,n[6]=a*h,n[10]=T*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nw,e,Uw)}lookAt(e,n,i){const r=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Or.crossVectors(i,_i),Or.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Or.crossVectors(i,_i)),Or.normalize(),sc.crossVectors(_i,Or),r[0]=Or.x,r[4]=sc.x,r[8]=_i.x,r[1]=Or.y,r[5]=sc.y,r[9]=_i.y,r[2]=Or.z,r[6]=sc.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],m=i[9],g=i[13],M=i[2],T=i[6],_=i[10],d=i[14],v=i[3],y=i[7],E=i[11],P=i[15],I=r[0],L=r[4],U=r[8],A=r[12],w=r[1],k=r[5],q=r[9],ie=r[13],ce=r[2],de=r[6],W=r[10],Q=r[14],V=r[3],J=r[7],ue=r[11],we=r[15];return s[0]=o*I+a*w+l*ce+c*V,s[4]=o*L+a*k+l*de+c*J,s[8]=o*U+a*q+l*W+c*ue,s[12]=o*A+a*ie+l*Q+c*we,s[1]=h*I+p*w+m*ce+g*V,s[5]=h*L+p*k+m*de+g*J,s[9]=h*U+p*q+m*W+g*ue,s[13]=h*A+p*ie+m*Q+g*we,s[2]=M*I+T*w+_*ce+d*V,s[6]=M*L+T*k+_*de+d*J,s[10]=M*U+T*q+_*W+d*ue,s[14]=M*A+T*ie+_*Q+d*we,s[3]=v*I+y*w+E*ce+P*V,s[7]=v*L+y*k+E*de+P*J,s[11]=v*U+y*q+E*W+P*ue,s[15]=v*A+y*ie+E*Q+P*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],g=e[14],M=e[3],T=e[7],_=e[11],d=e[15];return M*(+s*l*p-r*c*p-s*a*m+i*c*m+r*a*g-i*l*g)+T*(+n*l*g-n*c*m+s*o*m-r*o*g+r*c*h-s*l*h)+_*(+n*c*p-n*a*g-s*o*p+i*o*g+s*a*h-i*c*h)+d*(-r*a*h-n*l*p+n*a*m+r*o*p-i*o*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],g=e[11],M=e[12],T=e[13],_=e[14],d=e[15],v=p*_*c-T*m*c+T*l*g-a*_*g-p*l*d+a*m*d,y=M*m*c-h*_*c-M*l*g+o*_*g+h*l*d-o*m*d,E=h*T*c-M*p*c+M*a*g-o*T*g-h*a*d+o*p*d,P=M*p*l-h*T*l-M*a*m+o*T*m+h*a*_-o*p*_,I=n*v+i*y+r*E+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=v*L,e[1]=(T*m*s-p*_*s-T*r*g+i*_*g+p*r*d-i*m*d)*L,e[2]=(a*_*s-T*l*s+T*r*c-i*_*c-a*r*d+i*l*d)*L,e[3]=(p*l*s-a*m*s-p*r*c+i*m*c+a*r*g-i*l*g)*L,e[4]=y*L,e[5]=(h*_*s-M*m*s+M*r*g-n*_*g-h*r*d+n*m*d)*L,e[6]=(M*l*s-o*_*s-M*r*c+n*_*c+o*r*d-n*l*d)*L,e[7]=(o*m*s-h*l*s+h*r*c-n*m*c-o*r*g+n*l*g)*L,e[8]=E*L,e[9]=(M*p*s-h*T*s-M*i*g+n*T*g+h*i*d-n*p*d)*L,e[10]=(o*T*s-M*a*s+M*i*c-n*T*c-o*i*d+n*a*d)*L,e[11]=(h*a*s-o*p*s-h*i*c+n*p*c+o*i*g-n*a*g)*L,e[12]=P*L,e[13]=(h*T*r-M*p*r+M*i*m-n*T*m-h*i*_+n*p*_)*L,e[14]=(M*a*r-o*T*r-M*i*l+n*T*l+o*i*_-n*a*_)*L,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*m+n*a*m)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,m=s*c,g=s*h,M=s*p,T=o*h,_=o*p,d=a*p,v=l*c,y=l*h,E=l*p,P=i.x,I=i.y,L=i.z;return r[0]=(1-(T+d))*P,r[1]=(g+E)*P,r[2]=(M-y)*P,r[3]=0,r[4]=(g-E)*I,r[5]=(1-(m+d))*I,r[6]=(_+v)*I,r[7]=0,r[8]=(M+y)*L,r[9]=(_-v)*L,r[10]=(1-(m+T))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=uo.set(r[0],r[1],r[2]).length();const o=uo.set(r[4],r[5],r[6]).length(),a=uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bi.copy(this);const c=1/s,h=1/o,p=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=p,Bi.elements[9]*=p,Bi.elements[10]*=p,n.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=sr,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let M,T;if(l)M=s/(o-s),T=o*s/(o-s);else if(a===sr)M=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(a===fu)M=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=sr,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let M,T;if(l)M=1/(o-s),T=o/(o-s);else if(a===sr)M=-2/(o-s),T=-(o+s)/(o-s);else if(a===fu)M=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=M,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const uo=new G,Bi=new tn,Nw=new G(0,0,0),Uw=new G(1,1,1),Or=new G,sc=new G,_i=new G,$g=new tn,Kg=new wl;class Ji{constructor(e=0,n=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fw=0;const Zg=new G,fo=new wl,pr=new tn,oc=new G,Ea=new G,kw=new G,Ow=new wl,Jg=new G(1,0,0),Qg=new G(0,1,0),e1=new G(0,0,1),t1={type:"added"},zw={type:"removed"},ho={type:"childadded",child:null},tf={type:"childremoved",child:null};class In extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new G,n=new Ji,i=new wl,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new vt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis(Qg,e)}rotateZ(e){return this.rotateOnAxis(e1,e)}translateOnAxis(e,n){return Zg.copy(e).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis(Qg,e)}translateZ(e){return this.translateOnAxis(e1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oc.copy(e):oc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ea,oc,this.up):pr.lookAt(oc,Ea,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(pr),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t1),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zw),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t1),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,kw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}In.DEFAULT_UP=new G(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new G,mr=new G,nf=new G,gr=new G,po=new G,mo=new G,n1=new G,rf=new G,sf=new G,of=new G,af=new jt,lf=new jt,cf=new jt;class ji{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hi.subVectors(e,n),r.cross(Hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hi.subVectors(r,n),mr.subVectors(i,n),nf.subVectors(e,n);const o=Hi.dot(Hi),a=Hi.dot(mr),l=Hi.dot(nf),c=mr.dot(mr),h=mr.dot(nf),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(c*l-a*h)*m,M=(o*h-a*l)*m;return s.set(1-g-M,M,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(e,n,i,r){return Hi.subVectors(i,n),mr.subVectors(e,n),Hi.cross(mr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Hi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ji.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;po.subVectors(r,i),mo.subVectors(s,i),rf.subVectors(e,i);const l=po.dot(rf),c=mo.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,r);const h=po.dot(sf),p=mo.dot(sf);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(po,o);of.subVectors(e,s);const g=po.dot(of),M=mo.dot(of);if(M>=0&&g<=M)return n.copy(s);const T=g*c-l*M;if(T<=0&&c>=0&&M<=0)return a=c/(c-M),n.copy(i).addScaledVector(mo,a);const _=h*M-g*p;if(_<=0&&p-h>=0&&g-M>=0)return n1.subVectors(s,r),a=(p-h)/(p-h+(g-M)),n.copy(r).addScaledVector(n1,a);const d=1/(_+T+m);return o=T*d,a=m*d,n.copy(i).addScaledVector(po,o).addScaledVector(mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},ac={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Dt.workingColorSpace){if(e=Ew(e,1),n=xt(n,0,1),i=xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=uf(o,s,e+1/3),this.g=uf(o,s,e),this.b=uf(o,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Dt.workingToColorSpace(Xn.copy(this),e),Math.round(xt(Xn.r*255,0,255))*65536+Math.round(xt(Xn.g*255,0,255))*256+Math.round(xt(Xn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Xn.copy(this),n);const i=Xn.r,r=Xn.g,s=Xn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Fn){Dt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,i=Xn.g,r=Xn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(ac);const i=Xd(zr.h,ac.h,n),r=Xd(zr.s,ac.s,n),s=Xd(zr.l,ac.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new yt;yt.NAMES=Sx;let Bw=0;class $s extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Bo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bt extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new G,lc=new it;let Hw=0;class lr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gg,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lc.fromBufferAttribute(this,n),lc.applyMatrix3(e),this.setXY(n,lc.x,lc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ma(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ma(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ma(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ma(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array),s=oi(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gg&&(e.usage=this.usage),e}}class Ex extends lr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tx extends lr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends lr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vw=0;const Pi=new tn,df=new In,go=new G,xi=new Sl,Ta=new Sl,Cn=new G;class mn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?Tx:Ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(xi.min,Ta.min),xi.expandByPoint(Cn),Cn.addVectors(xi.max,Ta.max),xi.expandByPoint(Cn)):(xi.expandByPoint(Ta.min),xi.expandByPoint(Ta.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Cn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Cn.fromBufferAttribute(a,c),l&&(go.fromBufferAttribute(e,c),Cn.add(go)),r=Math.max(r,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new G,l[U]=new G;const c=new G,h=new G,p=new G,m=new it,g=new it,M=new it,T=new G,_=new G;function d(U,A,w){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,w),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,A),M.fromBufferAttribute(s,w),h.sub(c),p.sub(c),g.sub(m),M.sub(m);const k=1/(g.x*M.y-M.x*g.y);isFinite(k)&&(T.copy(h).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(k),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(k),a[U].add(T),a[A].add(T),a[w].add(T),l[U].add(_),l[A].add(_),l[w].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,A=v.length;U<A;++U){const w=v[U],k=w.start,q=w.count;for(let ie=k,ce=k+q;ie<ce;ie+=3)d(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const y=new G,E=new G,P=new G,I=new G;function L(U){P.fromBufferAttribute(r,U),I.copy(P);const A=a[U];y.copy(A),y.sub(P.multiplyScalar(P.dot(A))).normalize(),E.crossVectors(I,A);const k=E.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,k)}for(let U=0,A=v.length;U<A;++U){const w=v[U],k=w.start,q=w.count;for(let ie=k,ce=k+q;ie<ce;ie+=3)L(e.getX(ie+0)),L(e.getX(ie+1)),L(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,p=new G;if(e)for(let m=0,g=e.count;m<g;m+=3){const M=e.getX(m+0),T=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,T),o.fromBufferAttribute(n,_),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Cn.fromBufferAttribute(e,n),Cn.normalize(),e.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let g=0,M=0;for(let T=0,_=l.length;T<_;T++){a.isInterleavedBufferAttribute?g=l[T]*a.data.stride+a.offset:g=l[T]*h;for(let d=0;d<h;d++)m[M++]=c[g++]}return new lr(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i1=new tn,ws=new xm,cc=new Du,r1=new G,uc=new G,dc=new G,fc=new G,ff=new G,hc=new G,s1=new G,pc=new G;class H extends In{constructor(e=new mn,n=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(ff.fromBufferAttribute(p,e),o?hc.addScaledVector(ff,h):hc.addScaledVector(ff.sub(n),h))}n.add(hc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(cc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(cc,r1)===null||ws.origin.distanceToSquared(r1)>(e.far-e.near)**2))&&(i1.copy(s).invert(),ws.copy(e.ray).applyMatrix4(i1),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,T=m.length;M<T;M++){const _=m[M],d=o[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=v,P=y;E<P;E+=3){const I=a.getX(E),L=a.getX(E+1),U=a.getX(E+2);r=mc(this,d,e,i,c,h,p,I,L,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),T=Math.min(a.count,g.start+g.count);for(let _=M,d=T;_<d;_+=3){const v=a.getX(_),y=a.getX(_+1),E=a.getX(_+2);r=mc(this,o,e,i,c,h,p,v,y,E),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,T=m.length;M<T;M++){const _=m[M],d=o[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=v,P=y;E<P;E+=3){const I=E,L=E+1,U=E+2;r=mc(this,d,e,i,c,h,p,I,L,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const M=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let _=M,d=T;_<d;_+=3){const v=_,y=_+1,E=_+2;r=mc(this,o,e,i,c,h,p,v,y,E),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Gw(t,e,n,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ls,a),l===null)return null;pc.copy(a),pc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pc);return c<n.near||c>n.far?null:{distance:c,point:pc.clone(),object:t}}function mc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,uc),t.getVertexPosition(l,dc),t.getVertexPosition(c,fc);const h=Gw(t,e,n,i,uc,dc,fc,s1);if(h){const p=new G;ji.getBarycoord(s1,uc,dc,fc,p),r&&(h.uv=ji.getInterpolatedAttribute(r,a,l,c,p,new it)),s&&(h.uv1=ji.getInterpolatedAttribute(s,a,l,c,p,new it)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new G,materialIndex:0};ji.getNormal(uc,dc,fc,m.normal),h.face=m,h.barycoord=p}return h}class Un extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let m=0,g=0;M("z","y","x",-1,-1,i,n,e,o,s,0),M("z","y","x",1,-1,i,n,-e,o,s,1),M("x","z","y",1,1,e,i,n,r,o,2),M("x","z","y",1,-1,e,i,-n,r,o,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(p,2));function M(T,_,d,v,y,E,P,I,L,U,A){const w=E/L,k=P/U,q=E/2,ie=P/2,ce=I/2,de=L+1,W=U+1;let Q=0,V=0;const J=new G;for(let ue=0;ue<W;ue++){const we=ue*k-ie;for(let Ue=0;Ue<de;Ue++){const ht=Ue*w-q;J[T]=ht*v,J[_]=we*y,J[d]=ce,c.push(J.x,J.y,J.z),J[T]=0,J[_]=0,J[d]=I>0?1:-1,h.push(J.x,J.y,J.z),p.push(Ue/L),p.push(1-ue/U),Q+=1}}for(let ue=0;ue<U;ue++)for(let we=0;we<L;we++){const Ue=m+we+de*ue,ht=m+we+de*(ue+1),ut=m+(we+1)+de*(ue+1),Ie=m+(we+1)+de*ue;l.push(Ue,ht,Ie),l.push(ht,ut,Ie),V+=6}a.addGroup(g,V,A),g+=V,m+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zn(t){const e={};for(let n=0;n<t.length;n++){const i=Qo(t[n]);for(const r in i)e[r]=i[r]}return e}function Ww(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ax(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Xw={clone:Qo,merge:Zn};var jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new G,o1=new it,a1=new it;class Mi extends bx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=up*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return up*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,n){return this.getViewBounds(e,o1,a1),n.subVectors(a1,o1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vo=-90,_o=1;class Yw extends In{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(vo,_o,e,n);r.layers=this.layers,this.add(r);const s=new Mi(vo,_o,e,n);s.layers=this.layers,this.add(s);const o=new Mi(vo,_o,e,n);o.layers=this.layers,this.add(o);const a=new Mi(vo,_o,e,n);a.layers=this.layers,this.add(a);const l=new Mi(vo,_o,e,n);l.layers=this.layers,this.add(l);const c=new Mi(vo,_o,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,g),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Cx extends ei{constructor(e=[],n=Ko,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $w extends js{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:rs});s.uniforms.tEquirect.value=n;const o=new H(r,s),a=n.minFilter;return n.minFilter===ks&&(n.minFilter=rr),new Yw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Xe extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kw={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,i),d=this._getHandJoint(c,T);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,M=.005;c.inputState.pinching&&m>g+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Mm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=n}clone(){return new Mm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zw extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const pf=new G,Jw=new G,Qw=new vt;class Rs{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(Jw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Qw.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Du,eS=new it(.5,.5),gc=new G;class wm{constructor(e=new Rs,n=new Rs,i=new Rs,r=new Rs,s=new Rs,o=new Rs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],m=s[6],g=s[7],M=s[8],T=s[9],_=s[10],d=s[11],v=s[12],y=s[13],E=s[14],P=s[15];if(r[0].setComponents(c-o,g-h,d-M,P-v).normalize(),r[1].setComponents(c+o,g+h,d+M,P+v).normalize(),r[2].setComponents(c+a,g+p,d+T,P+y).normalize(),r[3].setComponents(c-a,g-p,d-T,P-y).normalize(),i)r[4].setComponents(l,m,_,E).normalize(),r[5].setComponents(c-l,g-m,d-_,P-E).normalize();else if(r[4].setComponents(c-l,g-m,d-_,P-E).normalize(),n===sr)r[5].setComponents(c+l,g+m,d+_,P+E).normalize();else if(n===fu)r[5].setComponents(l,m,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const n=eS.distanceTo(e.center);return Ss.radius=.7071067811865476+n,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gc.x=r.normal.x>0?e.max.x:e.min.x,gc.y=r.normal.y>0?e.max.y:e.min.y,gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dp extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new G,mu=new G,l1=new tn,Aa=new xm,vc=new Du,mf=new G,c1=new G;class u1 extends In{constructor(e=new mn,n=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)pu.fromBufferAttribute(n,r-1),mu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(r),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;l1.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(l1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),M=Math.min(h.count,o.start+o.count);for(let T=g,_=M-1;T<_;T+=c){const d=h.getX(T),v=h.getX(T+1),y=_c(this,e,Aa,l,d,v,T);y&&n.push(y)}if(this.isLineLoop){const T=h.getX(M-1),_=h.getX(g),d=_c(this,e,Aa,l,T,_,M-1);d&&n.push(d)}}else{const g=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let T=g,_=M-1;T<_;T+=c){const d=_c(this,e,Aa,l,T,T+1,T);d&&n.push(d)}if(this.isLineLoop){const T=_c(this,e,Aa,l,M-1,g,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _c(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(pu.fromBufferAttribute(a,r),mu.fromBufferAttribute(a,s),n.distanceSqToSegment(pu,mu,mf,c1)>i)return;mf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(mf);if(!(c<e.near||c>e.far))return{distance:c,point:c1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class xo extends ei{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rx extends ei{constructor(e,n,i=Xs,r,s,o,a=Ki,l=Ki,c,h=fl,p=1){if(h!==fl&&h!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:p};super(m,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Px extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends mn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=n/2,p=Math.PI/2*e,m=n,g=2*p+m,M=i*2+s,T=r+1,_=new G,d=new G;for(let v=0;v<=M;v++){let y=0,E=0,P=0,I=0;if(v<=i){const A=v/i,w=A*Math.PI/2;E=-h-e*Math.cos(w),P=e*Math.sin(w),I=-e*Math.cos(w),y=A*p}else if(v<=i+s){const A=(v-i)/s;E=-h+A*n,P=e,I=0,y=p+A*m}else{const A=(v-i-s)/i,w=A*Math.PI/2;E=h+e*Math.sin(w),P=e*Math.cos(w),I=e*Math.sin(w),y=p+m+A*p}const L=Math.max(0,Math.min(1,y/g));let U=0;v===0?U=.5/r:v===M&&(U=-.5/r);for(let A=0;A<=r;A++){const w=A/r,k=w*Math.PI*2,q=Math.sin(k),ie=Math.cos(k);d.x=-P*ie,d.y=E,d.z=P*q,a.push(d.x,d.y,d.z),_.set(-P*ie,I,P*q),_.normalize(),l.push(_.x,_.y,_.z),c.push(w+U,L)}if(v>0){const A=(v-1)*T;for(let w=0;w<r;w++){const k=A+w,q=A+w+1,ie=v*T+w,ce=v*T+w+1;o.push(k,q,ie),o.push(q,ce,ie)}}}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class jn extends mn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new G,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=n;p++,m+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nt extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],g=[];let M=0;const T=[],_=i/2;let d=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(m,3)),this.setAttribute("uv",new Tt(g,2));function v(){const E=new G,P=new G;let I=0;const L=(n-e)/i;for(let U=0;U<=s;U++){const A=[],w=U/s,k=w*(n-e)+e;for(let q=0;q<=r;q++){const ie=q/r,ce=ie*l+a,de=Math.sin(ce),W=Math.cos(ce);P.x=k*de,P.y=-w*i+_,P.z=k*W,p.push(P.x,P.y,P.z),E.set(de,L,W).normalize(),m.push(E.x,E.y,E.z),g.push(ie,1-w),A.push(M++)}T.push(A)}for(let U=0;U<r;U++)for(let A=0;A<s;A++){const w=T[A][U],k=T[A+1][U],q=T[A+1][U+1],ie=T[A][U+1];(e>0||A!==0)&&(h.push(w,k,ie),I+=3),(n>0||A!==s-1)&&(h.push(k,q,ie),I+=3)}c.addGroup(d,I,0),d+=I}function y(E){const P=M,I=new it,L=new G;let U=0;const A=E===!0?e:n,w=E===!0?1:-1;for(let q=1;q<=r;q++)p.push(0,_*w,0),m.push(0,w,0),g.push(.5,.5),M++;const k=M;for(let q=0;q<=r;q++){const ce=q/r*l+a,de=Math.cos(ce),W=Math.sin(ce);L.x=A*W,L.y=_*w,L.z=A*de,p.push(L.x,L.y,L.z),m.push(0,w,0),I.x=de*.5+.5,I.y=W*.5*w+.5,g.push(I.x,I.y),M++}for(let q=0;q<r;q++){const ie=P+q,ce=k+q;E===!0?h.push(ce,ce+1,ie):h.push(ce+1,ce,ie),U+=3}c.addGroup(d,U,E===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fn extends nt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sm extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new G,E=new G,P=new G;for(let I=0;I<n.length;I+=3)g(n[I+0],y),g(n[I+1],E),g(n[I+2],P),l(y,E,P,v)}function l(v,y,E,P){const I=P+1,L=[];for(let U=0;U<=I;U++){L[U]=[];const A=v.clone().lerp(E,U/I),w=y.clone().lerp(E,U/I),k=I-U;for(let q=0;q<=k;q++)q===0&&U===I?L[U][q]=A:L[U][q]=A.clone().lerp(w,q/k)}for(let U=0;U<I;U++)for(let A=0;A<2*(I-U)-1;A++){const w=Math.floor(A/2);A%2===0?(m(L[U][w+1]),m(L[U+1][w]),m(L[U][w])):(m(L[U][w+1]),m(L[U+1][w+1]),m(L[U+1][w]))}}function c(v){const y=new G;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(v),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function h(){const v=new G;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const E=_(v)/2/Math.PI+.5,P=d(v)/Math.PI+.5;o.push(E,1-P)}M(),p()}function p(){for(let v=0;v<o.length;v+=6){const y=o[v+0],E=o[v+2],P=o[v+4],I=Math.max(y,E,P),L=Math.min(y,E,P);I>.9&&L<.1&&(y<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function m(v){s.push(v.x,v.y,v.z)}function g(v,y){const E=v*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function M(){const v=new G,y=new G,E=new G,P=new G,I=new it,L=new it,U=new it;for(let A=0,w=0;A<s.length;A+=9,w+=6){v.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),E.set(s[A+6],s[A+7],s[A+8]),I.set(o[w+0],o[w+1]),L.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),P.copy(v).add(y).add(E).divideScalar(3);const k=_(P);T(I,w+0,v,k),T(L,w+2,y,k),T(U,w+4,E,k)}}function T(v,y,E,P){P<0&&v.x===1&&(o[y]=v.x-1),E.x===0&&E.z===0&&(o[y]=P/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.vertices,e.indices,e.radius,e.details)}}class an extends Sm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new an(e.radius,e.detail)}}class Pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],m=i[r+1]-h,g=(o-h)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new it:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new G,r=[],s=[],o=[],a=new G,l=new tn;for(let g=0;g<=e;g++){const M=g/e;r[g]=this.getTangentAt(M,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(xt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,M))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(xt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let M=1;M<=e;M++)s[M].applyMatrix4(l.makeRotationAxis(r[M],g*M)),o[M].crossVectors(r[M],s[M])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ix extends Pr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new it){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*h-g*p+this.aX,c=m*p+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tS extends Ix{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Em(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let m=(o-s)/c-(a-s)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,g*=h,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const xc=new G,gf=new Em,vf=new Em,_f=new Em;class fp extends Pr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new G){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(xc.subVectors(r[0],r[1]).add(r[0]),c=xc);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(xc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let M=Math.pow(c.distanceToSquared(p),g),T=Math.pow(p.distanceToSquared(m),g),_=Math.pow(m.distanceToSquared(h),g);T<1e-4&&(T=1),M<1e-4&&(M=T),_<1e-4&&(_=T),gf.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,M,T,_),vf.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,M,T,_),_f.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,M,T,_)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),vf.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),_f.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return i.set(gf.calc(l),vf.calc(l),_f.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function d1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function nS(t,e){const n=1-t;return n*n*e}function iS(t,e){return 2*(1-t)*t*e}function rS(t,e){return t*t*e}function Wa(t,e,n,i){return nS(t,e)+iS(t,n)+rS(t,i)}function sS(t,e){const n=1-t;return n*n*n*e}function oS(t,e){const n=1-t;return 3*n*n*t*e}function aS(t,e){return 3*(1-t)*t*t*e}function lS(t,e){return t*t*t*e}function Xa(t,e,n,i,r){return sS(t,e)+oS(t,n)+aS(t,i)+lS(t,r)}class cS extends Pr{constructor(e=new it,n=new it,i=new it,r=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new it){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xa(e,r.x,s.x,o.x,a.x),Xa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uS extends Pr{constructor(e=new G,n=new G,i=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xa(e,r.x,s.x,o.x,a.x),Xa(e,r.y,s.y,o.y,a.y),Xa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dS extends Pr{constructor(e=new it,n=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new it){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new it){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fS extends Pr{constructor(e=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new G){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hS extends Pr{constructor(e=new it,n=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new it){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wa(e,r.x,s.x,o.x),Wa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends Pr{constructor(e=new G,n=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wa(e,r.x,s.x,o.x),Wa(e,r.y,s.y,o.y),Wa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pS extends Pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new it){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(d1(a,l.x,c.x,h.x,p.x),d1(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new it().fromArray(r))}return this}}var mS=Object.freeze({__proto__:null,ArcCurve:tS,CatmullRomCurve3:fp,CubicBezierCurve:cS,CubicBezierCurve3:uS,EllipseCurve:Ix,LineCurve:dS,LineCurve3:fS,QuadraticBezierCurve:hS,QuadraticBezierCurve3:Lx,SplineCurve:pS});class qn extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,m=n/l,g=[],M=[],T=[],_=[];for(let d=0;d<h;d++){const v=d*m-o;for(let y=0;y<c;y++){const E=y*p-s;M.push(E,-v,0),T.push(0,0,1),_.push(y/a),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+c*d,E=v+c*(d+1),P=v+1+c*(d+1),I=v+1+c*d;g.push(y,E,I),g.push(E,P,I)}this.setIndex(g),this.setAttribute("position",new Tt(M,3)),this.setAttribute("normal",new Tt(T,3)),this.setAttribute("uv",new Tt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tm extends mn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const m=(n-e)/r,g=new G,M=new it;for(let T=0;T<=r;T++){for(let _=0;_<=i;_++){const d=s+_/i*o;g.x=p*Math.cos(d),g.y=p*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),M.x=(g.x/n+1)/2,M.y=(g.y/n+1)/2,h.push(M.x,M.y)}p+=m}for(let T=0;T<r;T++){const _=T*(i+1);for(let d=0;d<i;d++){const v=d+_,y=v,E=v+i+1,P=v+i+2,I=v+1;a.push(y,E,I),a.push(E,P,I)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ft extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new G,m=new G,g=[],M=[],T=[],_=[];for(let d=0;d<=i;d++){const v=[],y=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const I=P/n;p.x=-e*Math.cos(r+I*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+I*s)*Math.sin(o+y*a),M.push(p.x,p.y,p.z),m.copy(p).normalize(),T.push(m.x,m.y,m.z),_.push(I+E,1-y),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const y=h[d][v+1],E=h[d][v],P=h[d+1][v],I=h[d+1][v+1];(d!==0||o>0)&&g.push(y,E,I),(d!==i-1||l<Math.PI)&&g.push(E,P,I)}this.setIndex(g),this.setAttribute("position",new Tt(M,3)),this.setAttribute("normal",new Tt(T,3)),this.setAttribute("uv",new Tt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bt extends mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new G,p=new G,m=new G;for(let g=0;g<=i;g++)for(let M=0;M<=r;M++){const T=M/r*s,_=g/i*Math.PI*2;p.x=(e+n*Math.cos(_))*Math.cos(T),p.y=(e+n*Math.cos(_))*Math.sin(T),p.z=n*Math.sin(_),a.push(p.x,p.y,p.z),h.x=e*Math.cos(T),h.y=e*Math.sin(T),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),c.push(M/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let M=1;M<=r;M++){const T=(r+1)*g+M-1,_=(r+1)*(g-1)+M-1,d=(r+1)*(g-1)+M,v=(r+1)*g+M;o.push(T,_,v),o.push(_,d,v)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ja extends mn{constructor(e=new Lx(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new G,l=new G,c=new it;let h=new G;const p=[],m=[],g=[],M=[];T(),this.setIndex(M),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(m,3)),this.setAttribute("uv",new Tt(g,2));function T(){for(let y=0;y<n;y++)_(y);_(s===!1?n:0),v(),d()}function _(y){h=e.getPointAt(y/n,h);const E=o.normals[y],P=o.binormals[y];for(let I=0;I<=r;I++){const L=I/r*Math.PI*2,U=Math.sin(L),A=-Math.cos(L);l.x=A*E.x+U*P.x,l.y=A*E.y+U*P.y,l.z=A*E.z+U*P.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){const P=(r+1)*(y-1)+(E-1),I=(r+1)*y+(E-1),L=(r+1)*y+E,U=(r+1)*(y-1)+E;M.push(P,I,U),M.push(I,L,U)}}function v(){for(let y=0;y<=n;y++)for(let E=0;E<=r;E++)c.x=y/n,c.y=E/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ja(new mS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ce extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xf extends $s{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gS extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vS extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Am extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class _S extends Am{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const yf=new tn,f1=new G,h1=new G;class Dx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wm,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;f1.setFromMatrixPosition(e.matrixWorld),n.position.copy(f1),h1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(h1),n.updateMatrixWorld(),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const p1=new tn,ba=new G,Mf=new G;class xS extends Dx{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Mf.copy(i.position),Mf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),p1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p1,i.coordinateSystem,i.reversedDepth)}}class Vi extends Am{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nx extends bx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yS extends Dx{constructor(){super(new Nx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m1 extends Am{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new yS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MS extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const g1=new tn;class wS{constructor(e,n,i=0,r=1/0){this.ray=new xm(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ym,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return g1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g1),this}intersectObject(e,n=!0,i=[]){return hp(e,this,i,n),i.sort(v1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hp(e[r],this,i,n);return i.sort(v1),i}}function v1(t,e){return t.distance-e.distance}function hp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)hp(s[o],e,n,!0)}}function _1(t,e,n,i){const r=SS(i);switch(n){case gx:return t*e;case _x:return t*e/r.components*r.byteLength;case pm:return t*e/r.components*r.byteLength;case xx:return t*e*2/r.components*r.byteLength;case mm:return t*e*2/r.components*r.byteLength;case vx:return t*e*3/r.components*r.byteLength;case qi:return t*e*4/r.components*r.byteLength;case gm:return t*e*4/r.components*r.byteLength;case Fc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:case zh:return Math.max(t,16)*Math.max(e,8)/4;case Fh:case Oh:return Math.max(t,8)*Math.max(e,8)/2;case Bh:case Hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ip:case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case op:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SS(t){switch(t){case cr:case fx:return{byteLength:1,components:1};case ul:case hx:case yl:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case Xs:case dm:case wr:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ES(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,M)=>g.start-M.start);let m=0;for(let g=1;g<p.length;g++){const M=p[m],T=p[g];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,p[m]=T)}p.length=m+1;for(let g=0,M=p.length;g<M;g++){const T=p[g];t.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
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
#endif`,LS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
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
#endif`,NS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YS=`#define PI 3.141592653589793
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
} // validated`,$S=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KS=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fE=`#ifdef USE_GRADIENTMAP
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
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
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
#endif`,SE=`struct PhysicalMaterial {
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
}`,EE=`
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
#endif`,TE=`#if defined( RE_IndirectDiffuse )
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NE=`#if defined( USE_POINTS_UV )
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
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
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
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
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
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cT=`float getShadowMask() {
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
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hT=`#ifdef USE_SKINNING
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
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#ifdef USE_TRANSMISSION
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TT=`uniform sampler2D t2D;
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
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
}`,IT=`#if DEPTH_PACKING == 3200
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
}`,LT=`#define DISTANCE
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
}`,DT=`#define DISTANCE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
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
}`,kT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,zT=`uniform vec3 diffuse;
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
}`,BT=`#define LAMBERT
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
}`,HT=`#define LAMBERT
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
}`,VT=`#define MATCAP
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
}`,GT=`#define MATCAP
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
}`,WT=`#define NORMAL
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
}`,XT=`#define NORMAL
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
}`,jT=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,YT=`#define STANDARD
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
}`,$T=`#define STANDARD
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
}`,KT=`#define TOON
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
}`,ZT=`#define TOON
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
}`,JT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,e3=`#include <common>
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
}`,t3=`uniform vec3 color;
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
}`,n3=`uniform float rotation;
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
}`,i3=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:bS,alphamap_pars_fragment:CS,alphatest_fragment:RS,alphatest_pars_fragment:PS,aomap_fragment:IS,aomap_pars_fragment:LS,batching_pars_vertex:DS,batching_vertex:NS,begin_vertex:US,beginnormal_vertex:FS,bsdfs:kS,iridescence_fragment:OS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:jS,color_vertex:qS,common:YS,cube_uv_reflection_fragment:$S,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:dE,gradientmap_pars_fragment:fE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:ME,lights_physical_fragment:wE,lights_physical_pars_fragment:SE,lights_fragment_begin:EE,lights_fragment_maps:TE,lights_fragment_end:AE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:PE,map_fragment:IE,map_pars_fragment:LE,map_particle_fragment:DE,map_particle_pars_fragment:NE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:kE,morphcolor_vertex:OE,morphnormal_vertex:zE,morphtarget_pars_vertex:BE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:oT,shadowmap_pars_vertex:aT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:dT,skinning_vertex:fT,skinnormal_vertex:hT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:vT,transmission_fragment:_T,transmission_pars_fragment:xT,uv_pars_fragment:yT,uv_pars_vertex:MT,uv_vertex:wT,worldpos_vertex:ST,background_vert:ET,background_frag:TT,backgroundCube_vert:AT,backgroundCube_frag:bT,cube_vert:CT,cube_frag:RT,depth_vert:PT,depth_frag:IT,distanceRGBA_vert:LT,distanceRGBA_frag:DT,equirect_vert:NT,equirect_frag:UT,linedashed_vert:FT,linedashed_frag:kT,meshbasic_vert:OT,meshbasic_frag:zT,meshlambert_vert:BT,meshlambert_frag:HT,meshmatcap_vert:VT,meshmatcap_frag:GT,meshnormal_vert:WT,meshnormal_frag:XT,meshphong_vert:jT,meshphong_frag:qT,meshphysical_vert:YT,meshphysical_frag:$T,meshtoon_vert:KT,meshtoon_frag:ZT,points_vert:JT,points_frag:QT,shadow_vert:e3,shadow_frag:t3,sprite_vert:n3,sprite_frag:i3},Oe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},nr={basic:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Zn([Oe.points,Oe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Zn([Oe.common,Oe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Zn([Oe.sprite,Oe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Zn([Oe.lights,Oe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};nr.physical={uniforms:Zn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const yc={r:0,b:0,g:0},Es=new Ji,r3=new tn;function s3(t,e,n,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,c,h,p=null,m=0,g=null;function M(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?n:e).get(E)),E}function T(y){let E=!1;const P=M(y);P===null?d(a,l):P&&P.isColor&&(d(P,1),E=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,E){const P=M(E);P&&(P.isCubeTexture||P.mapping===Lu)?(h===void 0&&(h=new H(new Un(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Qo(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Es.copy(E.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r3.makeRotationFromEuler(Es)),h.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Xt,(p!==P||m!==P.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=P,m=P.version,g=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new H(new qn(2,2),new cs({name:"BackgroundMaterial",uniforms:Qo(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Xt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||m!==P.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=P,m=P.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,E){y.getRGB(yc,Ax(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,E,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:T,addToRenderList:_,dispose:v}}function o3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(w,k,q,ie,ce){let de=!1;const W=p(ie,q,k);s!==W&&(s=W,c(s.object)),de=g(w,ie,q,ce),de&&M(w,ie,q,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(de||o)&&(o=!1,E(w,k,q,ie),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function h(w){return t.deleteVertexArray(w)}function p(w,k,q){const ie=q.wireframe===!0;let ce=i[w.id];ce===void 0&&(ce={},i[w.id]=ce);let de=ce[k.id];de===void 0&&(de={},ce[k.id]=de);let W=de[ie];return W===void 0&&(W=m(l()),de[ie]=W),W}function m(w){const k=[],q=[],ie=[];for(let ce=0;ce<n;ce++)k[ce]=0,q[ce]=0,ie[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:ie,object:w,attributes:{},index:null}}function g(w,k,q,ie){const ce=s.attributes,de=k.attributes;let W=0;const Q=q.getAttributes();for(const V in Q)if(Q[V].location>=0){const ue=ce[V];let we=de[V];if(we===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(we=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(we=w.instanceColor)),ue===void 0||ue.attribute!==we||we&&ue.data!==we.data)return!0;W++}return s.attributesNum!==W||s.index!==ie}function M(w,k,q,ie){const ce={},de=k.attributes;let W=0;const Q=q.getAttributes();for(const V in Q)if(Q[V].location>=0){let ue=de[V];ue===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor));const we={};we.attribute=ue,ue&&ue.data&&(we.data=ue.data),ce[V]=we,W++}s.attributes=ce,s.attributesNum=W,s.index=ie}function T(){const w=s.newAttributes;for(let k=0,q=w.length;k<q;k++)w[k]=0}function _(w){d(w,0)}function d(w,k){const q=s.newAttributes,ie=s.enabledAttributes,ce=s.attributeDivisors;q[w]=1,ie[w]===0&&(t.enableVertexAttribArray(w),ie[w]=1),ce[w]!==k&&(t.vertexAttribDivisor(w,k),ce[w]=k)}function v(){const w=s.newAttributes,k=s.enabledAttributes;for(let q=0,ie=k.length;q<ie;q++)k[q]!==w[q]&&(t.disableVertexAttribArray(q),k[q]=0)}function y(w,k,q,ie,ce,de,W){W===!0?t.vertexAttribIPointer(w,k,q,ce,de):t.vertexAttribPointer(w,k,q,ie,ce,de)}function E(w,k,q,ie){T();const ce=ie.attributes,de=q.getAttributes(),W=k.defaultAttributeValues;for(const Q in de){const V=de[Q];if(V.location>=0){let J=ce[Q];if(J===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){const ue=J.normalized,we=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;const ht=Ue.buffer,ut=Ue.type,Ie=Ue.bytesPerElement,me=ut===t.INT||ut===t.UNSIGNED_INT||J.gpuType===dm;if(J.isInterleavedBufferAttribute){const ve=J.data,je=ve.stride,Re=J.offset;if(ve.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)d(V.location+_e,ve.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let _e=0;_e<V.locationSize;_e++)_(V.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e,we/V.locationSize,ut,ue,je*Ie,(Re+we/V.locationSize*_e)*Ie,me)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)d(V.location+ve,J.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<V.locationSize;ve++)_(V.location+ve);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let ve=0;ve<V.locationSize;ve++)y(V.location+ve,we/V.locationSize,ut,ue,we*Ie,we/V.locationSize*ve*Ie,me)}}else if(W!==void 0){const ue=W[Q];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}v()}function P(){U();for(const w in i){const k=i[w];for(const q in k){const ie=k[q];for(const ce in ie)h(ie[ce].object),delete ie[ce];delete k[q]}delete i[w]}}function I(w){if(i[w.id]===void 0)return;const k=i[w.id];for(const q in k){const ie=k[q];for(const ce in ie)h(ie[ce].object),delete ie[ce];delete k[q]}delete i[w.id]}function L(w){for(const k in i){const q=i[k];if(q[w.id]===void 0)continue;const ie=q[w.id];for(const ce in ie)h(ie[ce].object),delete ie[ce];delete q[w.id]}}function U(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:T,enableAttribute:_,disableUnusedAttributes:v}}function a3(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];n.update(g,i,1)}function l(c,h,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<c.length;M++)o(c[M],h[M],m[M]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,p);let M=0;for(let T=0;T<p;T++)M+=h[T]*m[T];n.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==qi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===yl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==cr&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==wr&&!U)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:P,maxSamples:I}}function c3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rs,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,g){const M=p.clippingPlanes,T=p.clipIntersection,_=p.clipShadows,d=t.get(p);if(!r||M===null||M.length===0||s&&!_)s?h(null):c();else{const v=s?0:i,y=v*4;let E=d.clippingState||null;l.value=E,E=h(M,m,y,g);for(let P=0;P!==y;++P)E[P]=n[P];d.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,M){const T=p!==null?p.length:0;let _=null;if(T!==0){if(_=l.value,M!==!0||_===null){const d=g+T*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<d)&&(_=new Float32Array(d));for(let y=0,E=g;y!==T;++y,E+=4)o.copy(p[y]).applyMatrix4(v,a),o.normal.toArray(_,E),_[E+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function u3(t){let e=new WeakMap;function n(o,a){return a===Dh?o.mapping=Ko:a===Nh&&(o.mapping=Zo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dh||a===Nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $w(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Do=4,x1=[.125,.215,.35,.446,.526,.582],Ls=20,wf=new Nx,y1=new yt;let Sf=null,Ef=0,Tf=0,Af=!1;const Ps=(1+Math.sqrt(5))/2,yo=1/Ps,M1=[new G(-Ps,yo,0),new G(Ps,yo,0),new G(-yo,0,Ps),new G(yo,0,Ps),new G(0,Ps,-yo),new G(0,Ps,yo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],d3=new G;class w1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=d3}=s;Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,Tf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rr,minFilter:rr,generateMipmaps:!1,type:yl,format:qi,colorSpace:Jo,depthBuffer:!1},r=S1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f3(s)),this._blurMaterial=h3(s,e,n)}return r}_compileMaterial(e){const n=new H(this._lodPlanes[0],e);this._renderer.compile(n,wf)}_sceneToCubeUV(e,n,i,r,s){const l=new Mi(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(y1),p.toneMapping=ss,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new bt({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),_=new H(new Un,T);let d=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,d=!0):(T.color.copy(y1),d=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const P=this._cubeSize;Mc(r,E*P,y>2?P:0,P,P),p.setRenderTarget(r),d&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=M1[(r-s-1)%M1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new H(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ls-1),T=s/M,_=isFinite(s)?1+Math.floor(h*T):Ls;_>Ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ls}`);const d=[];let v=0;for(let L=0;L<Ls;++L){const U=L/T,A=Math.exp(-U*U/2);d.push(A),L===0?v+=A:L<_&&(v+=2*A)}for(let L=0;L<d.length;L++)d[L]=d[L]/v;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=M,m.mipInt.value=y-i;const E=this._sizeLods[r],P=3*E*(r>y-Do?r-y+Do:0),I=4*(this._cubeSize-E);Mc(n,P,I,3*E,2*E),l.setRenderTarget(n),l.render(p,wf)}}function f3(t){const e=[],n=[],i=[];let r=t;const s=t-Do+1+x1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Do?l=x1[o-t+Do-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,M=6,T=3,_=2,d=1,v=new Float32Array(T*M*g),y=new Float32Array(_*M*g),E=new Float32Array(d*M*g);for(let I=0;I<g;I++){const L=I%3*2/3-1,U=I>2?0:-1,A=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];v.set(A,T*M*I),y.set(m,_*M*I);const w=[I,I,I,I,I,I];E.set(w,d*M*I)}const P=new mn;P.setAttribute("position",new lr(v,T)),P.setAttribute("uv",new lr(y,_)),P.setAttribute("faceIndex",new lr(E,d)),e.push(P),r>Do&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function S1(t,e,n){const i=new js(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h3(t,e,n){const i=new Float32Array(Ls),r=new G(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function E1(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function T1(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function bm(){return`

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
	`}function p3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dh||l===Nh,h=l===Ko||l===Zo;if(c||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new w1(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new w1(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g3(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function c(p){const m=[],g=p.index,M=p.attributes.position;let T=0;if(g!==null){const v=g.array;T=g.version;for(let y=0,E=v.length;y<E;y+=3){const P=v[y+0],I=v[y+1],L=v[y+2];m.push(P,I,I,L,L,P)}}else if(M!==void 0){const v=M.array;T=M.version;for(let y=0,E=v.length/3-1;y<E;y+=3){const P=y+0,I=y+1,L=y+2;m.push(P,I,I,L,L,P)}}else return;const _=new(Mx(m)?Tx:Ex)(m,1);_.version=T;const d=s.get(p);d&&e.remove(d),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function v3(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function c(m,g,M){M!==0&&(t.drawElementsInstanced(i,g,s,m*o,M),n.update(g,i,M))}function h(m,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,M);let _=0;for(let d=0;d<M;d++)_+=g[d];n.update(_,i,1)}function p(m,g,M,T){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<m.length;d++)c(m[d]/o,g[d],T[d]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,T,0,M);let d=0;for(let v=0;v<M;v++)d+=g[v]*T[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function _3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x3(t,e,n){const i=new WeakMap,r=new jt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let w=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var g=w;m!==void 0&&m.texture.dispose();const M=a.morphAttributes.position!==void 0,T=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;M===!0&&(E=1),T===!0&&(E=2),_===!0&&(E=3);let P=a.attributes.position.count*E,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*I*4*p),U=new wx(L,P,I,p);U.type=wr,U.needsUpdate=!0;const A=E*4;for(let k=0;k<p;k++){const q=d[k],ie=v[k],ce=y[k],de=P*I*4*k;for(let W=0;W<q.count;W++){const Q=W*A;M===!0&&(r.fromBufferAttribute(q,W),L[de+Q+0]=r.x,L[de+Q+1]=r.y,L[de+Q+2]=r.z,L[de+Q+3]=0),T===!0&&(r.fromBufferAttribute(ie,W),L[de+Q+4]=r.x,L[de+Q+5]=r.y,L[de+Q+6]=r.z,L[de+Q+7]=0),_===!0&&(r.fromBufferAttribute(ce,W),L[de+Q+8]=r.x,L[de+Q+9]=r.y,L[de+Q+10]=r.z,L[de+Q+11]=ce.itemSize===4?r.w:1)}}m={count:p,texture:U,size:new it(P,I)},i.set(a,m),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let M=0;for(let _=0;_<c.length;_++)M+=c[_];const T=a.morphTargetsRelative?1:1-M;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function y3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Fx=new ei,A1=new Rx(1,1),kx=new wx,Ox=new Lw,zx=new Cx,b1=[],C1=[],R1=new Float32Array(16),P1=new Float32Array(9),I1=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=b1[r];if(s===void 0&&(s=new Float32Array(r),b1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function En(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=C1[e];n===void 0&&(n=new Int32Array(e),C1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function M3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2fv(this.addr,e),Tn(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;t.uniform3fv(this.addr,e),Tn(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4fv(this.addr,e),Tn(n,e)}}function T3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;I1.set(i),t.uniformMatrix2fv(this.addr,!1,I1),Tn(n,i)}}function A3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;P1.set(i),t.uniformMatrix3fv(this.addr,!1,P1),Tn(n,i)}}function b3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,i))return;R1.set(i),t.uniformMatrix4fv(this.addr,!1,R1),Tn(n,i)}}function C3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2iv(this.addr,e),Tn(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3iv(this.addr,e),Tn(n,e)}}function I3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4iv(this.addr,e),Tn(n,e)}}function L3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2uiv(this.addr,e),Tn(n,e)}}function N3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3uiv(this.addr,e),Tn(n,e)}}function U3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4uiv(this.addr,e),Tn(n,e)}}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(A1.compareFunction=yx,s=A1):s=Fx,n.setTexture2D(e||s,r)}function k3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ox,r)}function O3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function z3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kx,r)}function B3(t){switch(t){case 5126:return M3;case 35664:return w3;case 35665:return S3;case 35666:return E3;case 35674:return T3;case 35675:return A3;case 35676:return b3;case 5124:case 35670:return C3;case 35667:case 35671:return R3;case 35668:case 35672:return P3;case 35669:case 35673:return I3;case 5125:return L3;case 36294:return D3;case 36295:return N3;case 36296:return U3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return k3;case 35680:case 36300:case 36308:case 36293:return O3;case 36289:case 36303:case 36311:case 36292:return z3}}function H3(t,e){t.uniform1fv(this.addr,e)}function V3(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function G3(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function W3(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function X3(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function j3(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function q3(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Y3(t,e){t.uniform1iv(this.addr,e)}function $3(t,e){t.uniform2iv(this.addr,e)}function K3(t,e){t.uniform3iv(this.addr,e)}function Z3(t,e){t.uniform4iv(this.addr,e)}function J3(t,e){t.uniform1uiv(this.addr,e)}function Q3(t,e){t.uniform2uiv(this.addr,e)}function eA(t,e){t.uniform3uiv(this.addr,e)}function tA(t,e){t.uniform4uiv(this.addr,e)}function nA(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fx,s[o])}function iA(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ox,s[o])}function rA(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zx,s[o])}function sA(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);En(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kx,s[o])}function oA(t){switch(t){case 5126:return H3;case 35664:return V3;case 35665:return G3;case 35666:return W3;case 35674:return X3;case 35675:return j3;case 35676:return q3;case 5124:case 35670:return Y3;case 35667:case 35671:return $3;case 35668:case 35672:return K3;case 35669:case 35673:return Z3;case 5125:return J3;case 36294:return Q3;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B3(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oA(n.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function L1(t,e){t.seq.push(e),t.map[e.id]=e}function uA(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){L1(n,c===void 0?new aA(a,t,e):new lA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new cA(a),L1(n,p)),n=p}}}class Bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);uA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function D1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dA=37297;let fA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const N1=new vt;function pA(t){Dt._getMatrix(N1,Dt.workingColorSpace,t);const e=`mat3( ${N1.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case du:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function U1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+hA(t.getShaderSource(e),a)}else return s}function mA(t,e){const n=pA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function gA(t,e){let n;switch(e){case aw:n="Linear";break;case lw:n="Reinhard";break;case cw:n="Cineon";break;case ux:n="ACESFilmic";break;case dw:n="AgX";break;case fw:n="Neutral";break;case uw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wc=new G;function vA(){Dt.getLuminanceCoefficients(wc);const t=wc.x.toFixed(4),e=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function xA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Na(t){return t!==""}function F1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(t){return t.replace(MA,SA)}const wA=new Map;function SA(t,e){let n=_t[e];if(n===void 0){const i=wA.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pp(n)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O1(t){return t.replace(EA,TA)}function TA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function z1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function AA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function RA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case um:e="ENVMAP_BLENDING_MULTIPLY";break;case sw:e="ENVMAP_BLENDING_MIX";break;case ow:e="ENVMAP_BLENDING_ADD";break}return e}function PA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=AA(n),c=bA(n),h=CA(n),p=RA(n),m=PA(n),g=_A(n),M=xA(s),T=r.createProgram();let _,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Na).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Na).join(`
`),d.length>0&&(d+=`
`)):(_=[z1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),d=[z1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?_t.tonemapping_pars_fragment:"",n.toneMapping!==ss?gA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),vA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Na).join(`
`)),o=pp(o),o=F1(o,n),o=k1(o,n),a=pp(a),a=F1(a,n),a=k1(a,n),o=O1(o),a=O1(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+_+o,E=v+d+a,P=D1(r,r.VERTEX_SHADER,y),I=D1(r,r.FRAGMENT_SHADER,E);r.attachShader(T,P),r.attachShader(T,I),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function L(k){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(T)||"",ie=r.getShaderInfoLog(P)||"",ce=r.getShaderInfoLog(I)||"",de=q.trim(),W=ie.trim(),Q=ce.trim();let V=!0,J=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,P,I);else{const ue=U1(r,P,"vertex"),we=U1(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+ue+`
`+we)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(W===""||Q==="")&&(J=!1);J&&(k.diagnostics={runnable:V,programLog:de,vertexShader:{log:W,prefix:_},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(P),r.deleteShader(I),U=new Bc(r,T),A=yA(r,T)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(T,dA)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let LA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=LA++,this.code=e,this.usedTimes=0}}function UA(t,e,n,i,r,s,o){const a=new ym,l=new DA,c=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return c.add(A),A===0?"uv":`uv${A}`}function _(A,w,k,q,ie){const ce=q.fog,de=ie.geometry,W=A.isMeshStandardMaterial?q.environment:null,Q=(A.isMeshStandardMaterial?n:e).get(A.envMap||W),V=Q&&Q.mapping===Lu?Q.image.height:null,J=M[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ue=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,we=ue!==void 0?ue.length:0;let Ue=0;de.morphAttributes.position!==void 0&&(Ue=1),de.morphAttributes.normal!==void 0&&(Ue=2),de.morphAttributes.color!==void 0&&(Ue=3);let ht,ut,Ie,me;if(J){const At=nr[J];ht=At.vertexShader,ut=At.fragmentShader}else ht=A.vertexShader,ut=A.fragmentShader,l.update(A),Ie=l.getVertexShaderID(A),me=l.getFragmentShaderID(A);const ve=t.getRenderTarget(),je=t.state.buffers.depth.getReversed(),Re=ie.isInstancedMesh===!0,_e=ie.isBatchedMesh===!0,he=!!A.map,Vt=!!A.matcap,z=!!Q,Ft=!!A.aoMap,Be=!!A.lightMap,at=!!A.bumpMap,X=!!A.normalMap,De=!!A.displacementMap,le=!!A.emissiveMap,fe=!!A.metalnessMap,Ve=!!A.roughnessMap,He=A.anisotropy>0,N=A.clearcoat>0,b=A.dispersion>0,te=A.iridescence>0,pe=A.sheen>0,Me=A.transmission>0,oe=He&&!!A.anisotropyMap,ze=N&&!!A.clearcoatMap,Te=N&&!!A.clearcoatNormalMap,Qe=N&&!!A.clearcoatRoughnessMap,Ze=te&&!!A.iridescenceMap,Ae=te&&!!A.iridescenceThicknessMap,ke=pe&&!!A.sheenColorMap,et=pe&&!!A.sheenRoughnessMap,Je=!!A.specularMap,Ne=!!A.specularColorMap,ot=!!A.specularIntensityMap,j=Me&&!!A.transmissionMap,be=Me&&!!A.thicknessMap,Le=!!A.gradientMap,qe=!!A.alphaMap,Se=A.alphaTest>0,ge=!!A.alphaHash,Ke=!!A.extensions;let dt=ss;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(dt=t.toneMapping);const kt={shaderID:J,shaderType:A.type,shaderName:A.name,vertexShader:ht,fragmentShader:ut,defines:A.defines,customVertexShaderID:Ie,customFragmentShaderID:me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:_e,batchingColor:_e&&ie._colorsTexture!==null,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,instancingMorph:Re&&ie.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Jo,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:Vt,envMap:z,envMapMode:z&&Q.mapping,envMapCubeUVHeight:V,aoMap:Ft,lightMap:Be,bumpMap:at,normalMap:X,displacementMap:m&&De,emissiveMap:le,normalMapObjectSpace:X&&A.normalMapType===gw,normalMapTangentSpace:X&&A.normalMapType===vm,metalnessMap:fe,roughnessMap:Ve,anisotropy:He,anisotropyMap:oe,clearcoat:N,clearcoatMap:ze,clearcoatNormalMap:Te,clearcoatRoughnessMap:Qe,dispersion:b,iridescence:te,iridescenceMap:Ze,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:ke,sheenRoughnessMap:et,specularMap:Je,specularColorMap:Ne,specularIntensityMap:ot,transmission:Me,transmissionMap:j,thicknessMap:be,gradientMap:Le,opaque:A.transparent===!1&&A.blending===Bo&&A.alphaToCoverage===!1,alphaMap:qe,alphaTest:Se,alphaHash:ge,combine:A.combine,mapUv:he&&T(A.map.channel),aoMapUv:Ft&&T(A.aoMap.channel),lightMapUv:Be&&T(A.lightMap.channel),bumpMapUv:at&&T(A.bumpMap.channel),normalMapUv:X&&T(A.normalMap.channel),displacementMapUv:De&&T(A.displacementMap.channel),emissiveMapUv:le&&T(A.emissiveMap.channel),metalnessMapUv:fe&&T(A.metalnessMap.channel),roughnessMapUv:Ve&&T(A.roughnessMap.channel),anisotropyMapUv:oe&&T(A.anisotropyMap.channel),clearcoatMapUv:ze&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:et&&T(A.sheenRoughnessMap.channel),specularMapUv:Je&&T(A.specularMap.channel),specularColorMapUv:Ne&&T(A.specularColorMap.channel),specularIntensityMapUv:ot&&T(A.specularIntensityMap.channel),transmissionMapUv:j&&T(A.transmissionMap.channel),thicknessMapUv:be&&T(A.thicknessMap.channel),alphaMapUv:qe&&T(A.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(X||He),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!de.attributes.uv&&(he||qe),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:je,skinning:ie.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Xt,decodeVideoTextureEmissive:le&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Yt,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ke&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&A.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function d(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)w.push(k),w.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(v(w,A),y(w,A),w.push(t.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function v(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function y(A,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),A.push(a.mask)}function E(A){const w=M[A.type];let k;if(w){const q=nr[w];k=Xw.clone(q.uniforms)}else k=A.uniforms;return k}function P(A,w){let k;for(let q=0,ie=h.length;q<ie;q++){const ce=h[q];if(ce.cacheKey===w){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new IA(t,w,A,s),h.push(k)),k}function I(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function L(A){l.remove(A)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:U}}function FA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function B1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function H1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,g,M,T,_){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:g,groupOrder:M,renderOrder:p.renderOrder,z:T,group:_},t[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=g,d.groupOrder=M,d.renderOrder=p.renderOrder,d.z=T,d.group=_),e++,d}function a(p,m,g,M,T,_){const d=o(p,m,g,M,T,_);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,m,g,M,T,_){const d=o(p,m,g,M,T,_);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,m){n.length>1&&n.sort(p||kA),i.length>1&&i.sort(m||B1),r.length>1&&r.sort(m||B1)}function h(){for(let p=e,m=t.length;p<m;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function OA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new H1,t.set(i,[o])):r>=s.length?(o=new H1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new yt};break;case"SpotLight":n={position:new G,direction:new G,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HA=0;function VA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GA(t){const e=new zA,n=BA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new tn,o=new tn;function a(c){let h=0,p=0,m=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,M=0,T=0,_=0,d=0,v=0,y=0,E=0,P=0,I=0,L=0;c.sort(VA);for(let A=0,w=c.length;A<w;A++){const k=c[A],q=k.color,ie=k.intensity,ce=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=q.r*ie,p+=q.g*ie,m+=q.b*ie;else if(k.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(k.sh.coefficients[W],ie);L++}else if(k.isDirectionalLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,V=n.get(k);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[g]=V,i.directionalShadowMap[g]=de,i.directionalShadowMatrix[g]=k.shadow.matrix,v++}i.directional[g]=W,g++}else if(k.isSpotLight){const W=e.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(q).multiplyScalar(ie),W.distance=ce,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,i.spot[T]=W;const Q=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,Q.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[T]=Q.matrix,k.castShadow){const V=n.get(k);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[T]=V,i.spotShadowMap[T]=de,E++}T++}else if(k.isRectAreaLight){const W=e.get(k);W.color.copy(q).multiplyScalar(ie),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=W,_++}else if(k.isPointLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),W.distance=k.distance,W.decay=k.decay,k.castShadow){const Q=k.shadow,V=n.get(k);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=k.shadow.matrix,y++}i.point[M]=W,M++}else if(k.isHemisphereLight){const W=e.get(k);W.skyColor.copy(k.color).multiplyScalar(ie),W.groundColor.copy(k.groundColor).multiplyScalar(ie),i.hemi[d]=W,d++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==g||U.pointLength!==M||U.spotLength!==T||U.rectAreaLength!==_||U.hemiLength!==d||U.numDirectionalShadows!==v||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==P||U.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=T,i.rectArea.length=_,i.point.length=M,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,U.directionalLength=g,U.pointLength=M,U.spotLength=T,U.rectAreaLength=_,U.hemiLength=d,U.numDirectionalShadows=v,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=P,U.numLightProbes=L,i.version=HA++)}function l(c,h){let p=0,m=0,g=0,M=0,T=0;const _=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),p++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const E=i.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const E=i.hemi[T];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(_),T++}}}return{setup:a,setupView:l,state:i}}function V1(t){const e=new GA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function WA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new V1(t),e.set(r,[a])):s>=o.length?(a=new V1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`;function qA(t,e,n){let i=new wm;const r=new it,s=new it,o=new jt,a=new gS({depthPacking:mw}),l=new vS,c={},h=n.maxTextureSize,p={[ls]:hi,[hi]:ls,[Yt]:Yt},m=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:XA,fragmentShader:jA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const M=new mn;M.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new H(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lx;let d=this.type;this.render=function(I,L,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const A=t.getRenderTarget(),w=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),q=t.state;q.setBlending(rs),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ie=d!==vr&&this.type===vr,ce=d===vr&&this.type!==vr;for(let de=0,W=I.length;de<W;de++){const Q=I[de],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,V.mapSize.y=s.y)),V.map===null||ie===!0||ce===!0){const we=this.type!==vr?{minFilter:Ki,magFilter:Ki}:{};V.map!==null&&V.map.dispose(),V.map=new js(r.x,r.y,we),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ue=V.getViewportCount();for(let we=0;we<ue;we++){const Ue=V.getViewport(we);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),q.viewport(o),V.updateMatrices(Q,we),i=V.getFrustum(),E(L,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===vr&&v(V,U),V.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(A,w,k)};function v(I,L){const U=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new js(r.x,r.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(L,null,U,m,T,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(L,null,U,g,T,null)}function y(I,L,U,A){let w=null;const k=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)w=k;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const q=w.uuid,ie=L.uuid;let ce=c[q];ce===void 0&&(ce={},c[q]=ce);let de=ce[ie];de===void 0&&(de=w.clone(),ce[ie]=de,L.addEventListener("dispose",P)),w=de}if(w.visible=L.visible,w.wireframe=L.wireframe,A===vr?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:p[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=t.properties.get(w);q.light=U}return w}function E(I,L,U,A,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===vr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const ie=e.update(I),ce=I.material;if(Array.isArray(ce)){const de=ie.groups;for(let W=0,Q=de.length;W<Q;W++){const V=de[W],J=ce[V.materialIndex];if(J&&J.visible){const ue=y(I,J,A,w);I.onBeforeShadow(t,I,L,U,ie,ue,V),t.renderBufferDirect(U,null,ie,ue,I,V),I.onAfterShadow(t,I,L,U,ie,ue,V)}}}else if(ce.visible){const de=y(I,ce,A,w);I.onBeforeShadow(t,I,L,U,ie,de,null),t.renderBufferDirect(U,null,ie,de,I,null),I.onAfterShadow(t,I,L,U,ie,de,null)}}const q=I.children;for(let ie=0,ce=q.length;ie<ce;ie++)E(q[ie],L,U,A,w)}function P(I){I.target.removeEventListener("dispose",P);for(const U in c){const A=c[U],w=I.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const YA={[Ah]:bh,[Ch]:Ih,[Rh]:Lh,[$o]:Ph,[bh]:Ah,[Ih]:Ch,[Lh]:Rh,[Ph]:$o};function $A(t,e){function n(){let j=!1;const be=new jt;let Le=null;const qe=new jt(0,0,0,0);return{setMask:function(Se){Le!==Se&&!j&&(t.colorMask(Se,Se,Se,Se),Le=Se)},setLocked:function(Se){j=Se},setClear:function(Se,ge,Ke,dt,kt){kt===!0&&(Se*=dt,ge*=dt,Ke*=dt),be.set(Se,ge,Ke,dt),qe.equals(be)===!1&&(t.clearColor(Se,ge,Ke,dt),qe.copy(be))},reset:function(){j=!1,Le=null,qe.set(-1,0,0,0)}}}function i(){let j=!1,be=!1,Le=null,qe=null,Se=null;return{setReversed:function(ge){if(be!==ge){const Ke=e.get("EXT_clip_control");ge?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const dt=Se;Se=null,this.setClear(dt)}},getReversed:function(){return be},setTest:function(ge){ge?ve(t.DEPTH_TEST):je(t.DEPTH_TEST)},setMask:function(ge){Le!==ge&&!j&&(t.depthMask(ge),Le=ge)},setFunc:function(ge){if(be&&(ge=YA[ge]),qe!==ge){switch(ge){case Ah:t.depthFunc(t.NEVER);break;case bh:t.depthFunc(t.ALWAYS);break;case Ch:t.depthFunc(t.LESS);break;case $o:t.depthFunc(t.LEQUAL);break;case Rh:t.depthFunc(t.EQUAL);break;case Ph:t.depthFunc(t.GEQUAL);break;case Ih:t.depthFunc(t.GREATER);break;case Lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}qe=ge}},setLocked:function(ge){j=ge},setClear:function(ge){Se!==ge&&(be&&(ge=1-ge),t.clearDepth(ge),Se=ge)},reset:function(){j=!1,Le=null,qe=null,Se=null,be=!1}}}function r(){let j=!1,be=null,Le=null,qe=null,Se=null,ge=null,Ke=null,dt=null,kt=null;return{setTest:function(At){j||(At?ve(t.STENCIL_TEST):je(t.STENCIL_TEST))},setMask:function(At){be!==At&&!j&&(t.stencilMask(At),be=At)},setFunc:function(At,pi,mi){(Le!==At||qe!==pi||Se!==mi)&&(t.stencilFunc(At,pi,mi),Le=At,qe=pi,Se=mi)},setOp:function(At,pi,mi){(ge!==At||Ke!==pi||dt!==mi)&&(t.stencilOp(At,pi,mi),ge=At,Ke=pi,dt=mi)},setLocked:function(At){j=At},setClear:function(At){kt!==At&&(t.clearStencil(At),kt=At)},reset:function(){j=!1,be=null,Le=null,qe=null,Se=null,ge=null,Ke=null,dt=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},m=new WeakMap,g=[],M=null,T=!1,_=null,d=null,v=null,y=null,E=null,P=null,I=null,L=new yt(0,0,0),U=0,A=!1,w=null,k=null,q=null,ie=null,ce=null;const de=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let J=null,ue={};const we=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),ht=new jt().fromArray(we),ut=new jt().fromArray(Ue);function Ie(j,be,Le,qe){const Se=new Uint8Array(4),ge=t.createTexture();t.bindTexture(j,ge),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Le;Ke++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,qe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(be+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ge}const me={};me[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),o.setFunc($o),at(!1),X(Og),ve(t.CULL_FACE),Ft(rs);function ve(j){h[j]!==!0&&(t.enable(j),h[j]=!0)}function je(j){h[j]!==!1&&(t.disable(j),h[j]=!1)}function Re(j,be){return p[j]!==be?(t.bindFramebuffer(j,be),p[j]=be,j===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=be),j===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=be),!0):!1}function _e(j,be){let Le=g,qe=!1;if(j){Le=m.get(be),Le===void 0&&(Le=[],m.set(be,Le));const Se=j.textures;if(Le.length!==Se.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ke=Se.length;ge<Ke;ge++)Le[ge]=t.COLOR_ATTACHMENT0+ge;Le.length=Se.length,qe=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,qe=!0);qe&&t.drawBuffers(Le)}function he(j){return M!==j?(t.useProgram(j),M=j,!0):!1}const Vt={[Is]:t.FUNC_ADD,[VM]:t.FUNC_SUBTRACT,[GM]:t.FUNC_REVERSE_SUBTRACT};Vt[WM]=t.MIN,Vt[XM]=t.MAX;const z={[jM]:t.ZERO,[qM]:t.ONE,[YM]:t.SRC_COLOR,[Eh]:t.SRC_ALPHA,[ew]:t.SRC_ALPHA_SATURATE,[JM]:t.DST_COLOR,[KM]:t.DST_ALPHA,[$M]:t.ONE_MINUS_SRC_COLOR,[Th]:t.ONE_MINUS_SRC_ALPHA,[QM]:t.ONE_MINUS_DST_COLOR,[ZM]:t.ONE_MINUS_DST_ALPHA,[tw]:t.CONSTANT_COLOR,[nw]:t.ONE_MINUS_CONSTANT_COLOR,[iw]:t.CONSTANT_ALPHA,[rw]:t.ONE_MINUS_CONSTANT_ALPHA};function Ft(j,be,Le,qe,Se,ge,Ke,dt,kt,At){if(j===rs){T===!0&&(je(t.BLEND),T=!1);return}if(T===!1&&(ve(t.BLEND),T=!0),j!==HM){if(j!==_||At!==A){if((d!==Is||E!==Is)&&(t.blendEquation(t.FUNC_ADD),d=Is,E=Is),At)switch(j){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zg:t.blendFunc(t.ONE,t.ONE);break;case Bg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}v=null,y=null,P=null,I=null,L.set(0,0,0),U=0,_=j,A=At}return}Se=Se||be,ge=ge||Le,Ke=Ke||qe,(be!==d||Se!==E)&&(t.blendEquationSeparate(Vt[be],Vt[Se]),d=be,E=Se),(Le!==v||qe!==y||ge!==P||Ke!==I)&&(t.blendFuncSeparate(z[Le],z[qe],z[ge],z[Ke]),v=Le,y=qe,P=ge,I=Ke),(dt.equals(L)===!1||kt!==U)&&(t.blendColor(dt.r,dt.g,dt.b,kt),L.copy(dt),U=kt),_=j,A=!1}function Be(j,be){j.side===Yt?je(t.CULL_FACE):ve(t.CULL_FACE);let Le=j.side===hi;be&&(Le=!Le),at(Le),j.blending===Bo&&j.transparent===!1?Ft(rs):Ft(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);const qe=j.stencilWrite;a.setTest(qe),qe&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):je(t.SAMPLE_ALPHA_TO_COVERAGE)}function at(j){w!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),w=j)}function X(j){j!==zM?(ve(t.CULL_FACE),j!==k&&(j===Og?t.cullFace(t.BACK):j===BM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):je(t.CULL_FACE),k=j}function De(j){j!==q&&(W&&t.lineWidth(j),q=j)}function le(j,be,Le){j?(ve(t.POLYGON_OFFSET_FILL),(ie!==be||ce!==Le)&&(t.polygonOffset(be,Le),ie=be,ce=Le)):je(t.POLYGON_OFFSET_FILL)}function fe(j){j?ve(t.SCISSOR_TEST):je(t.SCISSOR_TEST)}function Ve(j){j===void 0&&(j=t.TEXTURE0+de-1),J!==j&&(t.activeTexture(j),J=j)}function He(j,be,Le){Le===void 0&&(J===null?Le=t.TEXTURE0+de-1:Le=J);let qe=ue[Le];qe===void 0&&(qe={type:void 0,texture:void 0},ue[Le]=qe),(qe.type!==j||qe.texture!==be)&&(J!==Le&&(t.activeTexture(Le),J=Le),t.bindTexture(j,be||me[j]),qe.type=j,qe.texture=be)}function N(){const j=ue[J];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{t.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{t.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{t.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function oe(){try{t.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{t.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{t.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{t.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{t.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{t.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(j){ht.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),ht.copy(j))}function et(j){ut.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),ut.copy(j))}function Je(j,be){let Le=c.get(be);Le===void 0&&(Le=new WeakMap,c.set(be,Le));let qe=Le.get(j);qe===void 0&&(qe=t.getUniformBlockIndex(be,j.name),Le.set(j,qe))}function Ne(j,be){const qe=c.get(be).get(j);l.get(be)!==qe&&(t.uniformBlockBinding(be,qe,j.__bindingPointIndex),l.set(be,qe))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,ue={},p={},m=new WeakMap,g=[],M=null,T=!1,_=null,d=null,v=null,y=null,E=null,P=null,I=null,L=new yt(0,0,0),U=0,A=!1,w=null,k=null,q=null,ie=null,ce=null,ht.set(0,0,t.canvas.width,t.canvas.height),ut.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:je,bindFramebuffer:Re,drawBuffers:_e,useProgram:he,setBlending:Ft,setMaterial:Be,setFlipSided:at,setCullFace:X,setLineWidth:De,setPolygonOffset:le,setScissorTest:fe,activeTexture:Ve,bindTexture:He,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:te,texImage2D:Ze,texImage3D:Ae,updateUBOMapping:Je,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:Qe,texSubImage2D:pe,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:ze,scissor:ke,viewport:et,reset:ot}}function KA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return g?new OffscreenCanvas(N,b):hu("canvas")}function T(N,b,te){let pe=1;const Me=He(N);if((Me.width>te||Me.height>te)&&(pe=te/Math.max(Me.width,Me.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(pe*Me.width),ze=Math.floor(pe*Me.height);p===void 0&&(p=M(oe,ze));const Te=b?M(oe,ze):p;return Te.width=oe,Te.height=ze,Te.getContext("2d").drawImage(N,0,0,oe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+oe+"x"+ze+")."),Te}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),N;return N}function _(N){return N.generateMipmaps}function d(N){t.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,b,te,pe,Me=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=b;if(b===t.RED&&(te===t.FLOAT&&(oe=t.R32F),te===t.HALF_FLOAT&&(oe=t.R16F),te===t.UNSIGNED_BYTE&&(oe=t.R8)),b===t.RED_INTEGER&&(te===t.UNSIGNED_BYTE&&(oe=t.R8UI),te===t.UNSIGNED_SHORT&&(oe=t.R16UI),te===t.UNSIGNED_INT&&(oe=t.R32UI),te===t.BYTE&&(oe=t.R8I),te===t.SHORT&&(oe=t.R16I),te===t.INT&&(oe=t.R32I)),b===t.RG&&(te===t.FLOAT&&(oe=t.RG32F),te===t.HALF_FLOAT&&(oe=t.RG16F),te===t.UNSIGNED_BYTE&&(oe=t.RG8)),b===t.RG_INTEGER&&(te===t.UNSIGNED_BYTE&&(oe=t.RG8UI),te===t.UNSIGNED_SHORT&&(oe=t.RG16UI),te===t.UNSIGNED_INT&&(oe=t.RG32UI),te===t.BYTE&&(oe=t.RG8I),te===t.SHORT&&(oe=t.RG16I),te===t.INT&&(oe=t.RG32I)),b===t.RGB_INTEGER&&(te===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),te===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),te===t.UNSIGNED_INT&&(oe=t.RGB32UI),te===t.BYTE&&(oe=t.RGB8I),te===t.SHORT&&(oe=t.RGB16I),te===t.INT&&(oe=t.RGB32I)),b===t.RGBA_INTEGER&&(te===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),te===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),te===t.UNSIGNED_INT&&(oe=t.RGBA32UI),te===t.BYTE&&(oe=t.RGBA8I),te===t.SHORT&&(oe=t.RGBA16I),te===t.INT&&(oe=t.RGBA32I)),b===t.RGB&&(te===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),te===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),b===t.RGBA){const ze=Me?du:Dt.getTransfer(pe);te===t.FLOAT&&(oe=t.RGBA32F),te===t.HALF_FLOAT&&(oe=t.RGBA16F),te===t.UNSIGNED_BYTE&&(oe=ze===Xt?t.SRGB8_ALPHA8:t.RGBA8),te===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),te===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(N,b){let te;return N?b===null||b===Xs||b===dl?te=t.DEPTH24_STENCIL8:b===wr?te=t.DEPTH32F_STENCIL8:b===ul&&(te=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xs||b===dl?te=t.DEPTH_COMPONENT24:b===wr?te=t.DEPTH_COMPONENT32F:b===ul&&(te=t.DEPTH_COMPONENT16),te}function P(N,b){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ki&&N.minFilter!==rr?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function I(N){const b=N.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&h.delete(b)}function L(N){const b=N.target;b.removeEventListener("dispose",L),w(b)}function U(N){const b=i.get(N);if(b.__webglInit===void 0)return;const te=N.source,pe=m.get(te);if(pe){const Me=pe[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&A(N),Object.keys(pe).length===0&&m.delete(te)}i.remove(N)}function A(N){const b=i.get(N);t.deleteTexture(b.__webglTexture);const te=N.source,pe=m.get(te);delete pe[b.__cacheKey],o.memory.textures--}function w(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Me=0;Me<b.__webglFramebuffer[pe].length;Me++)t.deleteFramebuffer(b.__webglFramebuffer[pe][Me]);else t.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)t.deleteFramebuffer(b.__webglFramebuffer[pe]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=N.textures;for(let pe=0,Me=te.length;pe<Me;pe++){const oe=i.get(te[pe]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(te[pe])}i.remove(N)}let k=0;function q(){k=0}function ie(){const N=k;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),k+=1,N}function ce(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function de(N,b){const te=i.get(N);if(N.isVideoTexture&&fe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(te,N,b);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,te.__webglTexture,t.TEXTURE0+b)}function W(N,b){const te=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){me(te,N,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,te.__webglTexture,t.TEXTURE0+b)}function Q(N,b){const te=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){me(te,N,b);return}n.bindTexture(t.TEXTURE_3D,te.__webglTexture,t.TEXTURE0+b)}function V(N,b){const te=i.get(N);if(N.version>0&&te.__version!==N.version){ve(te,N,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture,t.TEXTURE0+b)}const J={[jr]:t.REPEAT,[Fs]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},ue={[Ki]:t.NEAREST,[hw]:t.NEAREST_MIPMAP_NEAREST,[Ql]:t.NEAREST_MIPMAP_LINEAR,[rr]:t.LINEAR,[Gd]:t.LINEAR_MIPMAP_NEAREST,[ks]:t.LINEAR_MIPMAP_LINEAR},we={[vw]:t.NEVER,[Sw]:t.ALWAYS,[_w]:t.LESS,[yx]:t.LEQUAL,[xw]:t.EQUAL,[ww]:t.GEQUAL,[yw]:t.GREATER,[Mw]:t.NOTEQUAL};function Ue(N,b){if(b.type===wr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rr||b.magFilter===Gd||b.magFilter===Ql||b.magFilter===ks||b.minFilter===rr||b.minFilter===Gd||b.minFilter===Ql||b.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,J[b.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,J[b.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,J[b.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ue[b.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ki||b.minFilter!==Ql&&b.minFilter!==ks||b.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ht(N,b){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const pe=b.source;let Me=m.get(pe);Me===void 0&&(Me={},m.set(pe,Me));const oe=ce(b);if(oe!==N.__cacheKey){Me[oe]===void 0&&(Me[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,te=!0),Me[oe].usedTimes++;const ze=Me[N.__cacheKey];ze!==void 0&&(Me[N.__cacheKey].usedTimes--,ze.usedTimes===0&&A(b)),N.__cacheKey=oe,N.__webglTexture=Me[oe].texture}return te}function ut(N,b,te){return Math.floor(Math.floor(N/te)/b)}function Ie(N,b,te,pe){const oe=N.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,te,pe,b.data);else{oe.sort((Ae,ke)=>Ae.start-ke.start);let ze=0;for(let Ae=1;Ae<oe.length;Ae++){const ke=oe[ze],et=oe[Ae],Je=ke.start+ke.count,Ne=ut(et.start,b.width,4),ot=ut(ke.start,b.width,4);et.start<=Je+1&&Ne===ot&&ut(et.start+et.count-1,b.width,4)===Ne?ke.count=Math.max(ke.count,et.start+et.count-ke.start):(++ze,oe[ze]=et)}oe.length=ze+1;const Te=t.getParameter(t.UNPACK_ROW_LENGTH),Qe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,ke=oe.length;Ae<ke;Ae++){const et=oe[Ae],Je=Math.floor(et.start/4),Ne=Math.ceil(et.count/4),ot=Je%b.width,j=Math.floor(Je/b.width),be=Ne,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(t.UNPACK_SKIP_ROWS,j),n.texSubImage2D(t.TEXTURE_2D,0,ot,j,be,Le,te,pe,b.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Te),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ze)}}function me(N,b,te){let pe=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=t.TEXTURE_3D);const Me=ht(N,b),oe=b.source;n.bindTexture(pe,N.__webglTexture,t.TEXTURE0+te);const ze=i.get(oe);if(oe.version!==ze.__version||Me===!0){n.activeTexture(t.TEXTURE0+te);const Te=Dt.getPrimaries(Dt.workingColorSpace),Qe=b.colorSpace===qr?null:Dt.getPrimaries(b.colorSpace),Ze=b.colorSpace===qr||Te===Qe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ae=T(b.image,!1,r.maxTextureSize);Ae=Ve(b,Ae);const ke=s.convert(b.format,b.colorSpace),et=s.convert(b.type);let Je=y(b.internalFormat,ke,et,b.colorSpace,b.isVideoTexture);Ue(pe,b);let Ne;const ot=b.mipmaps,j=b.isVideoTexture!==!0,be=ze.__version===void 0||Me===!0,Le=oe.dataReady,qe=P(b,Ae);if(b.isDepthTexture)Je=E(b.format===hl,b.type),be&&(j?n.texStorage2D(t.TEXTURE_2D,1,Je,Ae.width,Ae.height):n.texImage2D(t.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,ke,et,null));else if(b.isDataTexture)if(ot.length>0){j&&be&&n.texStorage2D(t.TEXTURE_2D,qe,Je,ot[0].width,ot[0].height);for(let Se=0,ge=ot.length;Se<ge;Se++)Ne=ot[Se],j?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,ke,et,Ne.data):n.texImage2D(t.TEXTURE_2D,Se,Je,Ne.width,Ne.height,0,ke,et,Ne.data);b.generateMipmaps=!1}else j?(be&&n.texStorage2D(t.TEXTURE_2D,qe,Je,Ae.width,Ae.height),Le&&Ie(b,Ae,ke,et)):n.texImage2D(t.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,ke,et,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Je,ot[0].width,ot[0].height,Ae.depth);for(let Se=0,ge=ot.length;Se<ge;Se++)if(Ne=ot[Se],b.format!==qi)if(ke!==null)if(j){if(Le)if(b.layerUpdates.size>0){const Ke=_1(Ne.width,Ne.height,b.format,b.type);for(const dt of b.layerUpdates){const kt=Ne.data.subarray(dt*Ke/Ne.data.BYTES_PER_ELEMENT,(dt+1)*Ke/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,dt,Ne.width,Ne.height,1,ke,kt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,Ae.depth,ke,Ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Se,Je,Ne.width,Ne.height,Ae.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,Ae.depth,ke,et,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Se,Je,Ne.width,Ne.height,Ae.depth,0,ke,et,Ne.data)}else{j&&be&&n.texStorage2D(t.TEXTURE_2D,qe,Je,ot[0].width,ot[0].height);for(let Se=0,ge=ot.length;Se<ge;Se++)Ne=ot[Se],b.format!==qi?ke!==null?j?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,ke,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Se,Je,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,ke,et,Ne.data):n.texImage2D(t.TEXTURE_2D,Se,Je,Ne.width,Ne.height,0,ke,et,Ne.data)}else if(b.isDataArrayTexture)if(j){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Je,Ae.width,Ae.height,Ae.depth),Le)if(b.layerUpdates.size>0){const Se=_1(Ae.width,Ae.height,b.format,b.type);for(const ge of b.layerUpdates){const Ke=Ae.data.subarray(ge*Se/Ae.data.BYTES_PER_ELEMENT,(ge+1)*Se/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,ke,et,Ke)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,ke,et,Ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Je,Ae.width,Ae.height,Ae.depth,0,ke,et,Ae.data);else if(b.isData3DTexture)j?(be&&n.texStorage3D(t.TEXTURE_3D,qe,Je,Ae.width,Ae.height,Ae.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,ke,et,Ae.data)):n.texImage3D(t.TEXTURE_3D,0,Je,Ae.width,Ae.height,Ae.depth,0,ke,et,Ae.data);else if(b.isFramebufferTexture){if(be)if(j)n.texStorage2D(t.TEXTURE_2D,qe,Je,Ae.width,Ae.height);else{let Se=Ae.width,ge=Ae.height;for(let Ke=0;Ke<qe;Ke++)n.texImage2D(t.TEXTURE_2D,Ke,Je,Se,ge,0,ke,et,null),Se>>=1,ge>>=1}}else if(ot.length>0){if(j&&be){const Se=He(ot[0]);n.texStorage2D(t.TEXTURE_2D,qe,Je,Se.width,Se.height)}for(let Se=0,ge=ot.length;Se<ge;Se++)Ne=ot[Se],j?Le&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,ke,et,Ne):n.texImage2D(t.TEXTURE_2D,Se,Je,ke,et,Ne);b.generateMipmaps=!1}else if(j){if(be){const Se=He(Ae);n.texStorage2D(t.TEXTURE_2D,qe,Je,Se.width,Se.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,et,Ae)}else n.texImage2D(t.TEXTURE_2D,0,Je,ke,et,Ae);_(b)&&d(pe),ze.__version=oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ve(N,b,te){if(b.image.length!==6)return;const pe=ht(N,b),Me=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+te);const oe=i.get(Me);if(Me.version!==oe.__version||pe===!0){n.activeTexture(t.TEXTURE0+te);const ze=Dt.getPrimaries(Dt.workingColorSpace),Te=b.colorSpace===qr?null:Dt.getPrimaries(b.colorSpace),Qe=b.colorSpace===qr||ze===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,ke=[];for(let ge=0;ge<6;ge++)!Ze&&!Ae?ke[ge]=T(b.image[ge],!0,r.maxCubemapSize):ke[ge]=Ae?b.image[ge].image:b.image[ge],ke[ge]=Ve(b,ke[ge]);const et=ke[0],Je=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type),ot=y(b.internalFormat,Je,Ne,b.colorSpace),j=b.isVideoTexture!==!0,be=oe.__version===void 0||pe===!0,Le=Me.dataReady;let qe=P(b,et);Ue(t.TEXTURE_CUBE_MAP,b);let Se;if(Ze){j&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,ot,et.width,et.height);for(let ge=0;ge<6;ge++){Se=ke[ge].mipmaps;for(let Ke=0;Ke<Se.length;Ke++){const dt=Se[Ke];b.format!==qi?Je!==null?j?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,0,0,dt.width,dt.height,Je,dt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,ot,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,0,0,dt.width,dt.height,Je,Ne,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,ot,dt.width,dt.height,0,Je,Ne,dt.data)}}}else{if(Se=b.mipmaps,j&&be){Se.length>0&&qe++;const ge=He(ke[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,ot,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){j?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ke[ge].width,ke[ge].height,Je,Ne,ke[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,ke[ge].width,ke[ge].height,0,Je,Ne,ke[ge].data);for(let Ke=0;Ke<Se.length;Ke++){const kt=Se[Ke].image[ge].image;j?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,0,0,kt.width,kt.height,Je,Ne,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,ot,kt.width,kt.height,0,Je,Ne,kt.data)}}else{j?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Je,Ne,ke[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,Je,Ne,ke[ge]);for(let Ke=0;Ke<Se.length;Ke++){const dt=Se[Ke];j?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,0,0,Je,Ne,dt.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,ot,Je,Ne,dt.image[ge])}}}_(b)&&d(t.TEXTURE_CUBE_MAP),oe.__version=Me.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function je(N,b,te,pe,Me,oe){const ze=s.convert(te.format,te.colorSpace),Te=s.convert(te.type),Qe=y(te.internalFormat,ze,Te,te.colorSpace),Ze=i.get(b),Ae=i.get(te);if(Ae.__renderTarget=b,!Ze.__hasExternalTextures){const ke=Math.max(1,b.width>>oe),et=Math.max(1,b.height>>oe);Me===t.TEXTURE_3D||Me===t.TEXTURE_2D_ARRAY?n.texImage3D(Me,oe,Qe,ke,et,b.depth,0,ze,Te,null):n.texImage2D(Me,oe,Qe,ke,et,0,ze,Te,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,Me,Ae.__webglTexture,0,De(b)):(Me===t.TEXTURE_2D||Me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,pe,Me,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(N,b,te){if(t.bindRenderbuffer(t.RENDERBUFFER,N),b.depthBuffer){const pe=b.depthTexture,Me=pe&&pe.isDepthTexture?pe.type:null,oe=E(b.stencilBuffer,Me),ze=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=De(b);le(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,oe,b.width,b.height):te?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,oe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,oe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ze,t.RENDERBUFFER,N)}else{const pe=b.textures;for(let Me=0;Me<pe.length;Me++){const oe=pe[Me],ze=s.convert(oe.format,oe.colorSpace),Te=s.convert(oe.type),Qe=y(oe.internalFormat,ze,Te,oe.colorSpace),Ze=De(b);te&&le(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,Qe,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,Qe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Qe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const Me=pe.__webglTexture,oe=De(b);if(b.depthTexture.format===fl)le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Me,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Me,0);else if(b.depthTexture.format===hl)le(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Me,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function he(N){const b=i.get(N),te=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Me)};pe.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=pe}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const pe=N.texture.mipmaps;pe&&pe.length>0?_e(b.__webglFramebuffer[0],N):_e(b.__webglFramebuffer,N)}else if(te){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=t.createRenderbuffer(),Re(b.__webglDepthbuffer[pe],N,!1);else{const Me=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[pe];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,oe)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Re(b.__webglDepthbuffer,N,!1);else{const Me=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(N,b,te){const pe=i.get(N);b!==void 0&&je(pe.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),te!==void 0&&he(N)}function z(N){const b=N.texture,te=i.get(N),pe=i.get(b);N.addEventListener("dispose",L);const Me=N.textures,oe=N.isWebGLCubeRenderTarget===!0,ze=Me.length>1;if(ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=b.version,o.memory.textures++),oe){te.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[Te]=[];for(let Qe=0;Qe<b.mipmaps.length;Qe++)te.__webglFramebuffer[Te][Qe]=t.createFramebuffer()}else te.__webglFramebuffer[Te]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let Te=0;Te<b.mipmaps.length;Te++)te.__webglFramebuffer[Te]=t.createFramebuffer()}else te.__webglFramebuffer=t.createFramebuffer();if(ze)for(let Te=0,Qe=Me.length;Te<Qe;Te++){const Ze=i.get(Me[Te]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&le(N)===!1){te.__webglMultisampledFramebuffer=t.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Te=0;Te<Me.length;Te++){const Qe=Me[Te];te.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);const Ze=s.convert(Qe.format,Qe.colorSpace),Ae=s.convert(Qe.type),ke=y(Qe.internalFormat,Ze,Ae,Qe.colorSpace,N.isXRRenderTarget===!0),et=De(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ke,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,te.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,b);for(let Te=0;Te<6;Te++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)je(te.__webglFramebuffer[Te][Qe],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe);else je(te.__webglFramebuffer[Te],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);_(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let Te=0,Qe=Me.length;Te<Qe;Te++){const Ze=Me[Te],Ae=i.get(Ze);let ke=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ke=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ke,Ae.__webglTexture),Ue(ke,Ze),je(te.__webglFramebuffer,N,Ze,t.COLOR_ATTACHMENT0+Te,ke,0),_(Ze)&&d(ke)}n.unbindTexture()}else{let Te=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,pe.__webglTexture),Ue(Te,b),b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)je(te.__webglFramebuffer[Qe],N,b,t.COLOR_ATTACHMENT0,Te,Qe);else je(te.__webglFramebuffer,N,b,t.COLOR_ATTACHMENT0,Te,0);_(b)&&d(Te),n.unbindTexture()}N.depthBuffer&&he(N)}function Ft(N){const b=N.textures;for(let te=0,pe=b.length;te<pe;te++){const Me=b[te];if(_(Me)){const oe=v(N),ze=i.get(Me).__webglTexture;n.bindTexture(oe,ze),d(oe),n.unbindTexture()}}}const Be=[],at=[];function X(N){if(N.samples>0){if(le(N)===!1){const b=N.textures,te=N.width,pe=N.height;let Me=t.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ze=i.get(N),Te=b.length>1;if(Te)for(let Ze=0;Ze<b.length;Ze++)n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Qe=N.texture.mipmaps;Qe&&Qe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ze=0;Ze<b.length;Ze++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Me|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Me|=t.STENCIL_BUFFER_BIT)),Te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Ae=i.get(b[Ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,te,pe,0,0,te,pe,Me,t.NEAREST),l===!0&&(Be.length=0,at.length=0,Be.push(t.COLOR_ATTACHMENT0+Ze),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Be.push(oe),at.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,at)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let Ze=0;Ze<b.length;Ze++){n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Ae=i.get(b[Ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const b=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function De(N){return Math.min(r.maxSamples,N.samples)}function le(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(N){const b=o.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())}function Ve(N,b){const te=N.colorSpace,pe=N.format,Me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Jo&&te!==qr&&(Dt.getTransfer(te)===Xt?(pe!==qi||Me!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ie,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=je,this.useMultisampledRTT=le}function ZA(t,e){function n(i,r=qr){let s;const o=Dt.getTransfer(r);if(i===cr)return t.UNSIGNED_BYTE;if(i===fm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===px)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===fx)return t.BYTE;if(i===hx)return t.SHORT;if(i===ul)return t.UNSIGNED_SHORT;if(i===dm)return t.INT;if(i===Xs)return t.UNSIGNED_INT;if(i===wr)return t.FLOAT;if(i===yl)return t.HALF_FLOAT;if(i===gx)return t.ALPHA;if(i===vx)return t.RGB;if(i===qi)return t.RGBA;if(i===fl)return t.DEPTH_COMPONENT;if(i===hl)return t.DEPTH_STENCIL;if(i===_x)return t.RED;if(i===pm)return t.RED_INTEGER;if(i===xx)return t.RG;if(i===mm)return t.RG_INTEGER;if(i===gm)return t.RGBA_INTEGER;if(i===Fc||i===kc||i===Oc||i===zc)if(o===Xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===kh||i===Oh||i===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bh||i===Hh)return o===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gh||i===Wh||i===Xh||i===jh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Jh||i===Qh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$h)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ip)return o===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===ap||i===lp||i===cp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===op)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
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

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Px(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cs({vertexShader:JA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new H(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tb extends ia{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,g=null,M=null;const T=typeof XRWebGLBinding<"u",_=new eb,d={},v=n.getContextAttributes();let y=null,E=null;const P=[],I=[],L=new it;let U=null;const A=new Mi;A.viewport=new jt;const w=new Mi;w.viewport=new jt;const k=[A,w],q=new MS;let ie=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let ve=P[me];return ve===void 0&&(ve=new hf,P[me]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(me){let ve=P[me];return ve===void 0&&(ve=new hf,P[me]=ve),ve.getGripSpace()},this.getHand=function(me){let ve=P[me];return ve===void 0&&(ve=new hf,P[me]=ve),ve.getHandSpace()};function de(me){const ve=I.indexOf(me.inputSource);if(ve===-1)return;const je=P[ve];je!==void 0&&(je.update(me.inputSource,me.frame,c||o),je.dispatchEvent({type:me.type,data:me.inputSource}))}function W(){r.removeEventListener("select",de),r.removeEventListener("selectstart",de),r.removeEventListener("selectend",de),r.removeEventListener("squeeze",de),r.removeEventListener("squeezestart",de),r.removeEventListener("squeezeend",de),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Q);for(let me=0;me<P.length;me++){const ve=I[me];ve!==null&&(I[me]=null,P[me].disconnect(ve))}ie=null,ce=null,_.reset();for(const me in d)delete d[me];e.setRenderTarget(y),g=null,m=null,p=null,r=null,E=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){a=me,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",de),r.addEventListener("selectstart",de),r.addEventListener("selectend",de),r.addEventListener("squeeze",de),r.addEventListener("squeezestart",de),r.addEventListener("squeezeend",de),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let je=null,Re=null,_e=null;v.depth&&(_e=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,je=v.stencil?hl:fl,Re=v.stencil?dl:Xs);const he={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(he),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new js(m.textureWidth,m.textureHeight,{format:qi,type:cr,depthTexture:new Rx(m.textureWidth,m.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,je),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const je={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,je),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new js(g.framebufferWidth,g.framebufferHeight,{format:qi,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(me){for(let ve=0;ve<me.removed.length;ve++){const je=me.removed[ve],Re=I.indexOf(je);Re>=0&&(I[Re]=null,P[Re].disconnect(je))}for(let ve=0;ve<me.added.length;ve++){const je=me.added[ve];let Re=I.indexOf(je);if(Re===-1){for(let he=0;he<P.length;he++)if(he>=I.length){I.push(je),Re=he;break}else if(I[he]===null){I[he]=je,Re=he;break}if(Re===-1)break}const _e=P[Re];_e&&_e.connect(je)}}const V=new G,J=new G;function ue(me,ve,je){V.setFromMatrixPosition(ve.matrixWorld),J.setFromMatrixPosition(je.matrixWorld);const Re=V.distanceTo(J),_e=ve.projectionMatrix.elements,he=je.projectionMatrix.elements,Vt=_e[14]/(_e[10]-1),z=_e[14]/(_e[10]+1),Ft=(_e[9]+1)/_e[5],Be=(_e[9]-1)/_e[5],at=(_e[8]-1)/_e[0],X=(he[8]+1)/he[0],De=Vt*at,le=Vt*X,fe=Re/(-at+X),Ve=fe*-at;if(ve.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Ve),me.translateZ(fe),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),_e[10]===-1)me.projectionMatrix.copy(ve.projectionMatrix),me.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const He=Vt+fe,N=z+fe,b=De-Ve,te=le+(Re-Ve),pe=Ft*z/N*He,Me=Be*z/N*He;me.projectionMatrix.makePerspective(b,te,pe,Me,He,N),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function we(me,ve){ve===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(ve.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let ve=me.near,je=me.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(je=_.depthFar)),q.near=w.near=A.near=ve,q.far=w.far=A.far=je,(ie!==q.near||ce!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),ie=q.near,ce=q.far),q.layers.mask=me.layers.mask|6,A.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;const Re=me.parent,_e=q.cameras;we(q,Re);for(let he=0;he<_e.length;he++)we(_e[he],Re);_e.length===2?ue(q,A,w):q.projectionMatrix.copy(A.projectionMatrix),Ue(me,q,Re)};function Ue(me,ve,je){je===null?me.matrix.copy(ve.matrixWorld):(me.matrix.copy(je.matrixWorld),me.matrix.invert(),me.matrix.multiply(ve.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(ve.projectionMatrix),me.projectionMatrixInverse.copy(ve.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=up*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(me){l=me,m!==null&&(m.fixedFoveation=me),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=me)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(me){return d[me]};let ht=null;function ut(me,ve){if(h=ve.getViewerPose(c||o),M=ve,h!==null){const je=h.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Re=!1;je.length!==q.cameras.length&&(q.cameras.length=0,Re=!0);for(let z=0;z<je.length;z++){const Ft=je[z];let Be=null;if(g!==null)Be=g.getViewport(Ft);else{const X=p.getViewSubImage(m,Ft);Be=X.viewport,z===0&&(e.setRenderTargetTextures(E,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(E))}let at=k[z];at===void 0&&(at=new Mi,at.layers.enable(z),at.viewport=new jt,k[z]=at),at.matrix.fromArray(Ft.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ft.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Be.x,Be.y,Be.width,Be.height),z===0&&(q.matrix.copy(at.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Re===!0&&q.cameras.push(at)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const z=p.getDepthInformation(je[0]);z&&z.isValid&&z.texture&&_.init(z,r.renderState)}if(_e&&_e.includes("camera-access")&&T){e.state.unbindTexture(),p=i.getBinding();for(let z=0;z<je.length;z++){const Ft=je[z].camera;if(Ft){let Be=d[Ft];Be||(Be=new Px,d[Ft]=Be);const at=p.getCameraImage(Ft);Be.sourceTexture=at}}}}for(let je=0;je<P.length;je++){const Re=I[je],_e=P[je];Re!==null&&_e!==void 0&&_e.update(Re,ve,c||o)}ht&&ht(me,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Ie=new Ux;Ie.setAnimationLoop(ut),this.setAnimationLoop=function(me){ht=me},this.dispose=function(){}}}const Ts=new Ji,nb=new tn;function ib(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,Ax(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,v,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(_,d):d.isMeshToonMaterial?(s(_,d),p(_,d)):d.isMeshPhongMaterial?(s(_,d),h(_,d)):d.isMeshStandardMaterial?(s(_,d),m(_,d),d.isMeshPhysicalMaterial&&g(_,d,E)):d.isMeshMatcapMaterial?(s(_,d),M(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),T(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?l(_,d,v,y):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===hi&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===hi&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,E=v.envMapRotation;y&&(_.envMap.value=y,Ts.copy(E),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),_.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(Ts)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,v,y){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*v,_.scale.value=y*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function h(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function p(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function m(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function g(_,d,v){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hi&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,d){d.matcap&&(_.matcap.value=d.matcap)}function T(_,d){const v=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const E=y.program;i.uniformBlockBinding(v,E)}function c(v,y){let E=r[v.id];E===void 0&&(M(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",_));const P=y.program;i.updateUBOMapping(v,P);const I=e.render.frame;s[v.id]!==I&&(m(v),s[v.id]=I)}function h(v){const y=p();v.__bindingPointIndex=y;const E=t.createBuffer(),P=v.__size,I=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const y=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let I=0,L=E.length;I<L;I++){const U=Array.isArray(E[I])?E[I]:[E[I]];for(let A=0,w=U.length;A<w;A++){const k=U[A];if(g(k,I,A,P)===!0){const q=k.__offset,ie=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let de=0;de<ie.length;de++){const W=ie[de],Q=T(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,q+ce,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,ce),ce+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,y,E,P){const I=v.value,L=y+"_"+E;if(P[L]===void 0)return typeof I=="number"||typeof I=="boolean"?P[L]=I:P[L]=I.clone(),!0;{const U=P[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return P[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function M(v){const y=v.uniforms;let E=0;const P=16;for(let L=0,U=y.length;L<U;L++){const A=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,k=A.length;w<k;w++){const q=A[w],ie=Array.isArray(q.value)?q.value:[q.value];for(let ce=0,de=ie.length;ce<de;ce++){const W=ie[ce],Q=T(W),V=E%P,J=V%Q.boundary,ue=V+J;E+=J,ue!==0&&P-ue<Q.storage&&(E+=P-ue),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=Q.storage}}}const I=E%P;return I>0&&(E+=P-I),v.__size=E,v.__cache={},this}function T(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){const y=v.target;y.removeEventListener("dispose",_);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class sb{constructor(e={}){const{canvas:n=Tw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=new Uint32Array(4),T=new Int32Array(4);let _=null,d=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Fn;let I=0,L=0,U=null,A=-1,w=null;const k=new jt,q=new jt;let ie=null;const ce=new yt(0);let de=0,W=n.width,Q=n.height,V=1,J=null,ue=null;const we=new jt(0,0,W,Q),Ue=new jt(0,0,W,Q);let ht=!1;const ut=new wm;let Ie=!1,me=!1;const ve=new tn,je=new G,Re=new jt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Vt(){return U===null?V:1}let z=i;function Ft(C,ee){return n.getContext(C,ee)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cm}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),z===null){const ee="webgl2";if(z=Ft(ee,C),z===null)throw Ft(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Be,at,X,De,le,fe,Ve,He,N,b,te,pe,Me,oe,ze,Te,Qe,Ze,Ae,ke,et,Je,Ne,ot;function j(){Be=new m3(z),Be.init(),Je=new ZA(z,Be),at=new l3(z,Be,e,Je),X=new $A(z,Be),at.reversedDepthBuffer&&m&&X.buffers.depth.setReversed(!0),De=new _3(z),le=new FA,fe=new KA(z,Be,X,le,at,Je,De),Ve=new u3(E),He=new p3(E),N=new ES(z),Ne=new o3(z,N),b=new g3(z,N,De,Ne),te=new y3(z,b,N,De),Ae=new x3(z,at,fe),Te=new c3(le),pe=new UA(E,Ve,He,Be,at,Ne,Te),Me=new ib(E,le),oe=new OA,ze=new WA(Be),Ze=new s3(E,Ve,He,X,te,g,l),Qe=new qA(E,te,at),ot=new rb(z,De,at,X),ke=new a3(z,Be,De),et=new v3(z,Be,De),De.programs=pe.programs,E.capabilities=at,E.extensions=Be,E.properties=le,E.renderLists=oe,E.shadowMap=Qe,E.state=X,E.info=De}j();const be=new tb(E,z);this.xr=be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(W,Q,!1))},this.getSize=function(C){return C.set(W,Q)},this.setSize=function(C,ee,ae=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,Q=ee,n.width=Math.floor(C*V),n.height=Math.floor(ee*V),ae===!0&&(n.style.width=C+"px",n.style.height=ee+"px"),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(C,ee,ae){W=C,Q=ee,V=ae,n.width=Math.floor(C*ae),n.height=Math.floor(ee*ae),this.setViewport(0,0,C,ee)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(we)},this.setViewport=function(C,ee,ae,se){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,ee,ae,se),X.viewport(k.copy(we).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,ee,ae,se){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,ee,ae,se),X.scissor(q.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){X.setScissorTest(ht=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,ae=!0){let se=0;if(C){let Z=!1;if(U!==null){const xe=U.texture.format;Z=xe===gm||xe===mm||xe===pm}if(Z){const xe=U.texture.type,Fe=xe===cr||xe===Xs||xe===ul||xe===dl||xe===fm||xe===hm,$e=Ze.getClearColor(),Ge=Ze.getClearAlpha(),lt=$e.r,ct=$e.g,rt=$e.b;Fe?(M[0]=lt,M[1]=ct,M[2]=rt,M[3]=Ge,z.clearBufferuiv(z.COLOR,0,M)):(T[0]=lt,T[1]=ct,T[2]=rt,T[3]=Ge,z.clearBufferiv(z.COLOR,0,T))}else se|=z.COLOR_BUFFER_BIT}ee&&(se|=z.DEPTH_BUFFER_BIT),ae&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ze.dispose(),oe.dispose(),ze.dispose(),le.dispose(),Ve.dispose(),He.dispose(),te.dispose(),Ne.dispose(),ot.dispose(),pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",mi),be.removeEventListener("sessionend",hs),Qi.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=De.autoReset,ee=Qe.enabled,ae=Qe.autoUpdate,se=Qe.needsUpdate,Z=Qe.type;j(),De.autoReset=C,Qe.enabled=ee,Qe.autoUpdate=ae,Qe.needsUpdate=se,Qe.type=Z}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const ee=C.target;ee.removeEventListener("dispose",ge),Ke(ee)}function Ke(C){dt(C),le.remove(C)}function dt(C){const ee=le.get(C).programs;ee!==void 0&&(ee.forEach(function(ae){pe.releaseProgram(ae)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,ae,se,Z,xe){ee===null&&(ee=_e);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,$e=ri(C,ee,ae,se,Z);X.setMaterial(se,Fe);let Ge=ae.index,lt=1;if(se.wireframe===!0){if(Ge=b.getWireframeAttribute(ae),Ge===void 0)return;lt=2}const ct=ae.drawRange,rt=ae.attributes.position;let gt=ct.start*lt,Ct=(ct.start+ct.count)*lt;xe!==null&&(gt=Math.max(gt,xe.start*lt),Ct=Math.min(Ct,(xe.start+xe.count)*lt)),Ge!==null?(gt=Math.max(gt,0),Ct=Math.min(Ct,Ge.count)):rt!=null&&(gt=Math.max(gt,0),Ct=Math.min(Ct,rt.count));const Jt=Ct-gt;if(Jt<0||Jt===1/0)return;Ne.setup(Z,se,$e,ae,Ge);let Gt,St=ke;if(Ge!==null&&(Gt=N.get(Ge),St=et,St.setIndex(Gt)),Z.isMesh)se.wireframe===!0?(X.setLineWidth(se.wireframeLinewidth*Vt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(Z.isLine){let st=se.linewidth;st===void 0&&(st=1),X.setLineWidth(st*Vt()),Z.isLineSegments?St.setMode(z.LINES):Z.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else Z.isPoints?St.setMode(z.POINTS):Z.isSprite&&St.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))St.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const st=Z._multiDrawStarts,Ot=Z._multiDrawCounts,Et=Z._multiDrawCount,Rt=Ge?N.get(Ge).bytesPerElement:1,Ir=le.get(se).currentProgram.getUniforms();for(let Kn=0;Kn<Et;Kn++)Ir.setValue(z,"_gl_DrawID",Kn),St.render(st[Kn]/Rt,Ot[Kn])}else if(Z.isInstancedMesh)St.renderInstances(gt,Jt,Z.count);else if(ae.isInstancedBufferGeometry){const st=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ot=Math.min(ae.instanceCount,st);St.renderInstances(gt,Jt,Ot)}else St.render(gt,Jt)};function kt(C,ee,ae){C.transparent===!0&&C.side===Yt&&C.forceSinglePass===!1?(C.side=hi,C.needsUpdate=!0,ms(C,ee,ae),C.side=ls,C.needsUpdate=!0,ms(C,ee,ae),C.side=Yt):ms(C,ee,ae)}this.compile=function(C,ee,ae=null){ae===null&&(ae=C),d=ze.get(ae),d.init(ee),y.push(d),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(ee.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),C!==ae&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(ee.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),d.setupLights();const se=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const xe=Z.material;if(xe)if(Array.isArray(xe))for(let Fe=0;Fe<xe.length;Fe++){const $e=xe[Fe];kt($e,ae,Z),se.add($e)}else kt(xe,ae,Z),se.add(xe)}),d=y.pop(),se},this.compileAsync=function(C,ee,ae=null){const se=this.compile(C,ee,ae);return new Promise(Z=>{function xe(){if(se.forEach(function(Fe){le.get(Fe).currentProgram.isReady()&&se.delete(Fe)}),se.size===0){Z(C);return}setTimeout(xe,10)}Be.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let At=null;function pi(C){At&&At(C)}function mi(){Qi.stop()}function hs(){Qi.start()}const Qi=new Ux;Qi.setAnimationLoop(pi),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){At=C,be.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},be.addEventListener("sessionstart",mi),be.addEventListener("sessionend",hs),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(ee),ee=be.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,ee,U),d=ze.get(C,y.length),d.init(ee),y.push(d),ve.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ut.setFromProjectionMatrix(ve,sr,ee.reversedDepth),me=this.localClippingEnabled,Ie=Te.init(this.clippingPlanes,me),_=oe.get(C,v.length),_.init(),v.push(_),be.enabled===!0&&be.isPresenting===!0){const xe=E.xr.getDepthSensingMesh();xe!==null&&ur(xe,ee,-1/0,E.sortObjects)}ur(C,ee,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(J,ue),he=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,he&&Ze.addToRenderList(_,C),this.info.render.frame++,Ie===!0&&Te.beginShadows();const ae=d.state.shadowsArray;Qe.render(ae,C,ee),Ie===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=_.opaque,Z=_.transmissive;if(d.setupLights(),ee.isArrayCamera){const xe=ee.cameras;if(Z.length>0)for(let Fe=0,$e=xe.length;Fe<$e;Fe++){const Ge=xe[Fe];Ks(se,Z,C,Ge)}he&&Ze.render(C);for(let Fe=0,$e=xe.length;Fe<$e;Fe++){const Ge=xe[Fe];ii(_,C,Ge,Ge.viewport)}}else Z.length>0&&Ks(se,Z,C,ee),he&&Ze.render(C),ii(_,C,ee);U!==null&&L===0&&(fe.updateMultisampleRenderTarget(U),fe.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(E,C,ee),Ne.resetDefaultState(),A=-1,w=null,y.pop(),y.length>0?(d=y[y.length-1],Ie===!0&&Te.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function ur(C,ee,ae,se){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ut.intersectsSprite(C)){se&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Fe=te.update(C),$e=C.material;$e.visible&&_.push(C,Fe,$e,ae,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ut.intersectsObject(C))){const Fe=te.update(C),$e=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray($e)){const Ge=Fe.groups;for(let lt=0,ct=Ge.length;lt<ct;lt++){const rt=Ge[lt],gt=$e[rt.materialIndex];gt&&gt.visible&&_.push(C,Fe,gt,ae,Re.z,rt)}}else $e.visible&&_.push(C,Fe,$e,ae,Re.z,null)}}const xe=C.children;for(let Fe=0,$e=xe.length;Fe<$e;Fe++)ur(xe[Fe],ee,ae,se)}function ii(C,ee,ae,se){const Z=C.opaque,xe=C.transmissive,Fe=C.transparent;d.setupLightsView(ae),Ie===!0&&Te.setGlobalState(E.clippingPlanes,ae),se&&X.viewport(k.copy(se)),Z.length>0&&ps(Z,ee,ae),xe.length>0&&ps(xe,ee,ae),Fe.length>0&&ps(Fe,ee,ae),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Ks(C,ee,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new js(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?yl:cr,minFilter:ks,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const xe=d.state.transmissionRenderTarget[se.id],Fe=se.viewport||k;xe.setSize(Fe.z*E.transmissionResolutionScale,Fe.w*E.transmissionResolutionScale);const $e=E.getRenderTarget(),Ge=E.getActiveCubeFace(),lt=E.getActiveMipmapLevel();E.setRenderTarget(xe),E.getClearColor(ce),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),he&&Ze.render(ae);const ct=E.toneMapping;E.toneMapping=ss;const rt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),Ie===!0&&Te.setGlobalState(E.clippingPlanes,se),ps(C,ae,se),fe.updateMultisampleRenderTarget(xe),fe.updateRenderTargetMipmap(xe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Ct=0,Jt=ee.length;Ct<Jt;Ct++){const Gt=ee[Ct],St=Gt.object,st=Gt.geometry,Ot=Gt.material,Et=Gt.group;if(Ot.side===Yt&&St.layers.test(se.layers)){const Rt=Ot.side;Ot.side=hi,Ot.needsUpdate=!0,sa(St,ae,se,st,Ot,Et),Ot.side=Rt,Ot.needsUpdate=!0,gt=!0}}gt===!0&&(fe.updateMultisampleRenderTarget(xe),fe.updateRenderTargetMipmap(xe))}E.setRenderTarget($e,Ge,lt),E.setClearColor(ce,de),rt!==void 0&&(se.viewport=rt),E.toneMapping=ct}function ps(C,ee,ae){const se=ee.isScene===!0?ee.overrideMaterial:null;for(let Z=0,xe=C.length;Z<xe;Z++){const Fe=C[Z],$e=Fe.object,Ge=Fe.geometry,lt=Fe.group;let ct=Fe.material;ct.allowOverride===!0&&se!==null&&(ct=se),$e.layers.test(ae.layers)&&sa($e,ee,ae,Ge,ct,lt)}}function sa(C,ee,ae,se,Z,xe){C.onBeforeRender(E,ee,ae,se,Z,xe),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(E,ee,ae,se,C,xe),Z.transparent===!0&&Z.side===Yt&&Z.forceSinglePass===!1?(Z.side=hi,Z.needsUpdate=!0,E.renderBufferDirect(ae,ee,se,Z,C,xe),Z.side=ls,Z.needsUpdate=!0,E.renderBufferDirect(ae,ee,se,Z,C,xe),Z.side=Yt):E.renderBufferDirect(ae,ee,se,Z,C,xe),C.onAfterRender(E,ee,ae,se,Z,xe)}function ms(C,ee,ae){ee.isScene!==!0&&(ee=_e);const se=le.get(C),Z=d.state.lights,xe=d.state.shadowsArray,Fe=Z.state.version,$e=pe.getParameters(C,Z.state,xe,ee,ae),Ge=pe.getProgramCacheKey($e);let lt=se.programs;se.environment=C.isMeshStandardMaterial?ee.environment:null,se.fog=ee.fog,se.envMap=(C.isMeshStandardMaterial?He:Ve).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,lt===void 0&&(C.addEventListener("dispose",ge),lt=new Map,se.programs=lt);let ct=lt.get(Ge);if(ct!==void 0){if(se.currentProgram===ct&&se.lightsStateVersion===Fe)return oa(C,$e),ct}else $e.uniforms=pe.getUniforms(C),C.onBeforeCompile($e,E),ct=pe.acquireProgram($e,Ge),lt.set(Ge,ct),se.uniforms=$e.uniforms;const rt=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=Te.uniform),oa(C,$e),se.needsLights=El(C),se.lightsStateVersion=Fe,se.needsLights&&(rt.ambientLightColor.value=Z.state.ambient,rt.lightProbe.value=Z.state.probe,rt.directionalLights.value=Z.state.directional,rt.directionalLightShadows.value=Z.state.directionalShadow,rt.spotLights.value=Z.state.spot,rt.spotLightShadows.value=Z.state.spotShadow,rt.rectAreaLights.value=Z.state.rectArea,rt.ltc_1.value=Z.state.rectAreaLTC1,rt.ltc_2.value=Z.state.rectAreaLTC2,rt.pointLights.value=Z.state.point,rt.pointLightShadows.value=Z.state.pointShadow,rt.hemisphereLights.value=Z.state.hemi,rt.directionalShadowMap.value=Z.state.directionalShadowMap,rt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,rt.spotShadowMap.value=Z.state.spotShadowMap,rt.spotLightMatrix.value=Z.state.spotLightMatrix,rt.spotLightMap.value=Z.state.spotLightMap,rt.pointShadowMap.value=Z.state.pointShadowMap,rt.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=ct,se.uniformsList=null,ct}function Zs(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function oa(C,ee){const ae=le.get(C);ae.outputColorSpace=ee.outputColorSpace,ae.batching=ee.batching,ae.batchingColor=ee.batchingColor,ae.instancing=ee.instancing,ae.instancingColor=ee.instancingColor,ae.instancingMorph=ee.instancingMorph,ae.skinning=ee.skinning,ae.morphTargets=ee.morphTargets,ae.morphNormals=ee.morphNormals,ae.morphColors=ee.morphColors,ae.morphTargetsCount=ee.morphTargetsCount,ae.numClippingPlanes=ee.numClippingPlanes,ae.numIntersection=ee.numClipIntersection,ae.vertexAlphas=ee.vertexAlphas,ae.vertexTangents=ee.vertexTangents,ae.toneMapping=ee.toneMapping}function ri(C,ee,ae,se,Z){ee.isScene!==!0&&(ee=_e),fe.resetTextureUnits();const xe=ee.fog,Fe=se.isMeshStandardMaterial?ee.environment:null,$e=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Jo,Ge=(se.isMeshStandardMaterial?He:Ve).get(se.envMap||Fe),lt=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),rt=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,Ct=!!ae.morphAttributes.color;let Jt=ss;se.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Jt=E.toneMapping);const Gt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=Gt!==void 0?Gt.length:0,st=le.get(se),Ot=d.state.lights;if(Ie===!0&&(me===!0||C!==w)){const Ln=C===w&&se.id===A;Te.setState(se,C,Ln)}let Et=!1;se.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Ot.state.version||st.outputColorSpace!==$e||Z.isBatchedMesh&&st.batching===!1||!Z.isBatchedMesh&&st.batching===!0||Z.isBatchedMesh&&st.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&st.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&st.instancing===!1||!Z.isInstancedMesh&&st.instancing===!0||Z.isSkinnedMesh&&st.skinning===!1||!Z.isSkinnedMesh&&st.skinning===!0||Z.isInstancedMesh&&st.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&st.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&st.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&st.instancingMorph===!1&&Z.morphTexture!==null||st.envMap!==Ge||se.fog===!0&&st.fog!==xe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Te.numPlanes||st.numIntersection!==Te.numIntersection)||st.vertexAlphas!==lt||st.vertexTangents!==ct||st.morphTargets!==rt||st.morphNormals!==gt||st.morphColors!==Ct||st.toneMapping!==Jt||st.morphTargetsCount!==St)&&(Et=!0):(Et=!0,st.__version=se.version);let Rt=st.currentProgram;Et===!0&&(Rt=ms(se,ee,Z));let Ir=!1,Kn=!1,Lr=!1;const $t=Rt.getUniforms(),zn=st.uniforms;if(X.useProgram(Rt.program)&&(Ir=!0,Kn=!0,Lr=!0),se.id!==A&&(A=se.id,Kn=!0),Ir||w!==C){X.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),$t.setValue(z,"projectionMatrix",C.projectionMatrix),$t.setValue(z,"viewMatrix",C.matrixWorldInverse);const Hn=$t.map.cameraPosition;Hn!==void 0&&Hn.setValue(z,je.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&$t.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&$t.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Kn=!0,Lr=!0)}if(Z.isSkinnedMesh){$t.setOptional(z,Z,"bindMatrix"),$t.setOptional(z,Z,"bindMatrixInverse");const Ln=Z.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),$t.setValue(z,"boneTexture",Ln.boneTexture,fe))}Z.isBatchedMesh&&($t.setOptional(z,Z,"batchingTexture"),$t.setValue(z,"batchingTexture",Z._matricesTexture,fe),$t.setOptional(z,Z,"batchingIdTexture"),$t.setValue(z,"batchingIdTexture",Z._indirectTexture,fe),$t.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&$t.setValue(z,"batchingColorTexture",Z._colorsTexture,fe));const Bn=ae.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ae.update(Z,ae,Rt),(Kn||st.receiveShadow!==Z.receiveShadow)&&(st.receiveShadow=Z.receiveShadow,$t.setValue(z,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(zn.envMap.value=Ge,zn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&ee.environment!==null&&(zn.envMapIntensity.value=ee.environmentIntensity),Kn&&($t.setValue(z,"toneMappingExposure",E.toneMappingExposure),st.needsLights&&Js(zn,Lr),xe&&se.fog===!0&&Me.refreshFogUniforms(zn,xe),Me.refreshMaterialUniforms(zn,se,V,Q,d.state.transmissionRenderTarget[C.id]),Bc.upload(z,Zs(st),zn,fe)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Bc.upload(z,Zs(st),zn,fe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&$t.setValue(z,"center",Z.center),$t.setValue(z,"modelViewMatrix",Z.modelViewMatrix),$t.setValue(z,"normalMatrix",Z.normalMatrix),$t.setValue(z,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ln=se.uniformsGroups;for(let Hn=0,Qs=Ln.length;Hn<Qs;Hn++){const ki=Ln[Hn];ot.update(ki,Rt),ot.bind(ki,Rt)}}return Rt}function Js(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function El(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,ee,ae){const se=le.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=ee,le.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const ae=le.get(C);ae.__webglFramebuffer=ee,ae.__useDefaultFramebuffer=ee===void 0};const aa=z.createFramebuffer();this.setRenderTarget=function(C,ee=0,ae=0){U=C,I=ee,L=ae;let se=!0,Z=null,xe=!1,Fe=!1;if(C){const Ge=le.get(C);if(Ge.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(Ge.__hasExternalTextures)fe.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(Ge.__boundDepthTexture!==rt){if(rt!==null&&le.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Fe=!0);const ct=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[ee])?Z=ct[ee][ae]:Z=ct[ee],xe=!0):C.samples>0&&fe.useMultisampledRTT(C)===!1?Z=le.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?Z=ct[ae]:Z=ct,k.copy(C.viewport),q.copy(C.scissor),ie=C.scissorTest}else k.copy(we).multiplyScalar(V).floor(),q.copy(Ue).multiplyScalar(V).floor(),ie=ht;if(ae!==0&&(Z=aa),X.bindFramebuffer(z.FRAMEBUFFER,Z)&&se&&X.drawBuffers(C,Z),X.viewport(k),X.scissor(q),X.setScissorTest(ie),xe){const Ge=le.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ge.__webglTexture,ae)}else if(Fe){const Ge=ee;for(let lt=0;lt<C.textures.length;lt++){const ct=le.get(C.textures[lt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+lt,ct.__webglTexture,ae,Ge)}}else if(C!==null&&ae!==0){const Ge=le.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ge.__webglTexture,ae)}A=-1},this.readRenderTargetPixels=function(C,ee,ae,se,Z,xe,Fe,$e=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){X.bindFramebuffer(z.FRAMEBUFFER,Ge);try{const lt=C.textures[$e],ct=lt.format,rt=lt.type;if(!at.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-se&&ae>=0&&ae<=C.height-Z&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$e),z.readPixels(ee,ae,se,Z,Je.convert(ct),Je.convert(rt),xe))}finally{const lt=U!==null?le.get(U).__webglFramebuffer:null;X.bindFramebuffer(z.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(C,ee,ae,se,Z,xe,Fe,$e=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(ee>=0&&ee<=C.width-se&&ae>=0&&ae<=C.height-Z){X.bindFramebuffer(z.FRAMEBUFFER,Ge);const lt=C.textures[$e],ct=lt.format,rt=lt.type;if(!at.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$e),z.readPixels(ee,ae,se,Z,Je.convert(ct),Je.convert(rt),0);const Ct=U!==null?le.get(U).__webglFramebuffer:null;X.bindFramebuffer(z.FRAMEBUFFER,Ct);const Jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Aw(z,Jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.deleteBuffer(gt),z.deleteSync(Jt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,ae=0){const se=Math.pow(2,-ae),Z=Math.floor(C.image.width*se),xe=Math.floor(C.image.height*se),Fe=ee!==null?ee.x:0,$e=ee!==null?ee.y:0;fe.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Fe,$e,Z,xe),X.unbindTexture()};const Tl=z.createFramebuffer(),Al=z.createFramebuffer();this.copyTextureToTexture=function(C,ee,ae=null,se=null,Z=0,xe=null){xe===null&&(Z!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Z,Z=0):xe=0);let Fe,$e,Ge,lt,ct,rt,gt,Ct,Jt;const Gt=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(ae!==null)Fe=ae.max.x-ae.min.x,$e=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,lt=ae.min.x,ct=ae.min.y,rt=ae.isBox3?ae.min.z:0;else{const Bn=Math.pow(2,-Z);Fe=Math.floor(Gt.width*Bn),$e=Math.floor(Gt.height*Bn),C.isDataArrayTexture?Ge=Gt.depth:C.isData3DTexture?Ge=Math.floor(Gt.depth*Bn):Ge=1,lt=0,ct=0,rt=0}se!==null?(gt=se.x,Ct=se.y,Jt=se.z):(gt=0,Ct=0,Jt=0);const St=Je.convert(ee.format),st=Je.convert(ee.type);let Ot;ee.isData3DTexture?(fe.setTexture3D(ee,0),Ot=z.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(fe.setTexture2DArray(ee,0),Ot=z.TEXTURE_2D_ARRAY):(fe.setTexture2D(ee,0),Ot=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ee.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ee.unpackAlignment);const Et=z.getParameter(z.UNPACK_ROW_LENGTH),Rt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ir=z.getParameter(z.UNPACK_SKIP_PIXELS),Kn=z.getParameter(z.UNPACK_SKIP_ROWS),Lr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,lt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ct),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);const $t=C.isDataArrayTexture||C.isData3DTexture,zn=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const Bn=le.get(C),Ln=le.get(ee),Hn=le.get(Bn.__renderTarget),Qs=le.get(Ln.__renderTarget);X.bindFramebuffer(z.READ_FRAMEBUFFER,Hn.__webglFramebuffer),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let ki=0;ki<Ge;ki++)$t&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(C).__webglTexture,Z,rt+ki),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(ee).__webglTexture,xe,Jt+ki)),z.blitFramebuffer(lt,ct,Fe,$e,gt,Ct,Fe,$e,z.DEPTH_BUFFER_BIT,z.NEAREST);X.bindFramebuffer(z.READ_FRAMEBUFFER,null),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||le.has(C)){const Bn=le.get(C),Ln=le.get(ee);X.bindFramebuffer(z.READ_FRAMEBUFFER,Tl),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,Al);for(let Hn=0;Hn<Ge;Hn++)$t?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bn.__webglTexture,Z,rt+Hn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bn.__webglTexture,Z),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ln.__webglTexture,xe,Jt+Hn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ln.__webglTexture,xe),Z!==0?z.blitFramebuffer(lt,ct,Fe,$e,gt,Ct,Fe,$e,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(Ot,xe,gt,Ct,Jt+Hn,lt,ct,Fe,$e):z.copyTexSubImage2D(Ot,xe,gt,Ct,lt,ct,Fe,$e);X.bindFramebuffer(z.READ_FRAMEBUFFER,null),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ot,xe,gt,Ct,Jt,Fe,$e,Ge,St,st,Gt.data):ee.isCompressedArrayTexture?z.compressedTexSubImage3D(Ot,xe,gt,Ct,Jt,Fe,$e,Ge,St,Gt.data):z.texSubImage3D(Ot,xe,gt,Ct,Jt,Fe,$e,Ge,St,st,Gt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,gt,Ct,Fe,$e,St,st,Gt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,gt,Ct,Gt.width,Gt.height,St,Gt.data):z.texSubImage2D(z.TEXTURE_2D,xe,gt,Ct,Fe,$e,St,st,Gt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Et),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ir),z.pixelStorei(z.UNPACK_SKIP_ROWS,Kn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Lr),xe===0&&ee.generateMipmaps&&z.generateMipmap(Ot),X.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){I=0,L=0,U=null,X.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var Y1;const Pt=(Y1=window.Telegram)==null?void 0:Y1.WebApp,G1="/yggdrasil-tma/",Sc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],ob=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],W1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},X1=()=>{try{const t={...W1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...W1,watch:Date.now()}}},Ca=()=>new Date().toISOString().slice(0,10),ab=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Cf=[3,5,8,12,18,25,40],lb=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],cb=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Rf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Ra={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},j1={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Pf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},If={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Hr({name:t,className:e}){return Y.jsx("img",{src:t.includes(".")?`${G1}img/${t}`:`${G1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const ub=`
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
`,As=(t,e=.9,n=0)=>new Ce({color:t,roughness:e,metalness:n}),B=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},q1=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),c=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,h=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,p=Math.min(1,l*1.4);i.setX(r,s+(c-.5)*e*(.45+p)),i.setZ(r,a+(h-.5)*e*(.35+p)),i.setY(r,o+(c+h-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t},db=(t,e)=>{const n=Math.sin(t*.11+.7)*.65,i=Math.cos(e*.09-.4)*.48,r=Math.sin((t+e)*.055)*.35,s=Math.exp(-(t*t+(e+3)*(e+3))/900);return(n+i+r)*(1-s*.72)};function Bx(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function fb(t){const e=new Xe,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=As(i,.92),c=As(s,.9),h=As(o,.96),p=As(r,.95),m=As(a,.78),g=As(2106150,.98),M=new H(new ai(.28,.24,5,8),h);M.position.y=.72,e.add(M);const T=new H(new ai(n?.37:.32,.56,6,10),c);T.position.y=1.15,e.add(T);const _=new H(new ai(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const d=new H(new nt(.36,.38,.09,12),h);d.position.y=.93,e.add(d);const v=new H(new Un(.12,.12,.055),m);v.position.set(0,.93,.38),e.add(v);const y=new H(new nt(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const E=new H(new ft(.31,16,12),l);E.scale.set(.92,1.06,.92),E.position.y=1.91,e.add(E);const P=new H(new ft(.325,14,10),p);P.scale.set(.98,.72,.98),P.position.set(0,2.08,-.025),e.add(P);const I=new H(new ai(.18,.3,5,8),p);I.position.set(0,1.93,-.25),I.rotation.x=.15,e.add(I);const L=new H(new fn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const U=new Ce({color:1513754,roughness:.55});for(const J of[-.105,.105]){const ue=new H(new ft(.025,7,5),U);ue.position.set(J,1.98,.285),e.add(ue)}if(n){const J=new H(new ft(.19,10,7),p);J.scale.set(.82,1,.72),J.position.set(0,1.8,.24),e.add(J)}else{const J=new H(new ai(.055,.42,4,7),p);J.position.set(-.27,1.78,-.08),J.rotation.z=-.22,e.add(J)}const A=J=>{const ue=new Xe;ue.position.set(J*(n?.43:.39),1.43,0),ue.rotation.z=J*.07;const we=new H(new ai(.105,.42,5,7),c);we.position.y=-.23,ue.add(we);const Ue=new Xe;Ue.position.y=-.46,ue.add(Ue);const ht=new H(new ai(.085,.34,5,7),h);ht.position.y=-.2,Ue.add(ht);const ut=new H(new ft(.105,9,7),l);return ut.position.y=-.43,Ue.add(ut),e.add(ue),{upper:ue,elbow:Ue}},w=A(-1),k=A(1),q=J=>{const ue=new Xe;ue.position.set(J*.15,.68,0);const we=new H(new ai(.12,.42,5,7),g);we.position.y=-.23,ue.add(we);const Ue=new Xe;Ue.position.y=-.48,ue.add(Ue);const ht=new H(new ai(.095,.4,5,7),g);ht.position.y=-.22,Ue.add(ht);const ut=new H(new ai(.13,.24,5,7),h);return ut.scale.z=1.25,ut.position.set(0,-.47,.075),Ue.add(ut),e.add(ue),ue},ie=q(-1),ce=q(1),de=new H(new ai(.42,.1,5,8),h);de.scale.z=.72,de.position.y=1.48,e.add(de);const W=new H(new Un(.58,.92,.075),As(t.id==="berserk"?2821132:1582894,.98));W.position.set(0,1.05,-.28),W.rotation.x=-.035,e.add(W);const Q=new Xe;if(t.id==="berserk"||t.id==="dwarf"){const J=new H(new nt(.035,.045,.72,7),h);J.position.y=.36,Q.add(J);const ue=new H(new Un(.16,.34,.055),m);ue.position.set(0,.88,0),ue.rotation.z=t.id==="dwarf"?-.22:.22,Q.add(ue)}else{const J=new H(new nt(.028,.04,1.1,7),h);J.position.y=.52,Q.add(J);const ue=new H(new fn(.075,.25,6),m);ue.position.y=1.18,Q.add(ue)}if(Q.position.set(.43,.32,.03),Q.rotation.z=-.12,e.add(Q),t.id==="viking"||t.id==="berserk"){const J=new H(new nt(.3,.3,.1,16),h);J.rotation.x=Math.PI/2,J.position.set(0,1.12,-.37),e.add(J);const ue=new H(new ft(.065,8,6),m);ue.position.set(0,1.12,-.43),e.add(ue)}const V=new H(new jn(.62,24),new bt({color:0,transparent:!0,opacity:.32}));return V.rotation.x=-Math.PI/2,V.position.y=.02,e.add(V),e.userData.anim={armL:w,armR:k,legL:ie,legR:ce,weapon:Q,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},Bx(e)}function hb({h:t,on:e,eventDone:n}){const i=wt.useRef(null),r=wt.useRef(null),s=wt.useRef(null),o=wt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=wt.useState(""),[c,h]=wt.useState(!1),[p,m]=wt.useState(!1),[g,M]=wt.useState(!1),[T,_]=wt.useState(!1),d=wt.useRef({x:0,z:1}),v=wt.useRef(!1),y=wt.useRef(null);wt.useEffect(()=>{const A=i.current;if(!A)return;const w=new Zw;w.background=new yt(10203557),w.fog=new Mm(10137250,.0036);const k=new Mi(54,1,.1,280);k.position.set(0,8.5,17);const q=new sb({antialias:!0,powerPreference:"high-performance"});q.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),q.shadowMap.enabled=!0,q.shadowMap.type=cx,q.outputColorSpace=Fn,q.toneMapping=ux,q.toneMappingExposure=1.03,A.appendChild(q.domElement);const ie=new _S(15069413,6714207,1.12);w.add(ie);const ce=new m1(16767405,2.45);ce.position.set(-42,58,34),ce.castShadow=!0,ce.shadow.mapSize.set(1536,1536),ce.shadow.camera.left=-95,ce.shadow.camera.right=95,ce.shadow.camera.top=95,ce.shadow.camera.bottom=-95,ce.shadow.bias=-5e-4,w.add(ce);const de=new m1(12111056,.68);de.position.set(55,18,-60),w.add(de);const W=(u,x)=>{const f=Math.sin(u*.075)*.7+Math.cos(x*.062)*.55+Math.sin((u-x)*.045)*.35,S=Math.exp(-(u*u/850+(x+2)*(x+2)/1050)),D=Math.exp(-(u*u/150+(x-12)*(x-12)/2200));return f*(1-S*.88)-D*.18},Q=u=>{const x=document.createElement("canvas");x.width=x.height=512;const f=x.getContext("2d"),S=R=>Math.abs(Math.sin(R*12.9898)*43758.5453)%1;if(u==="ground"){f.fillStyle="#4c6042",f.fillRect(0,0,512,512);for(let R=0;R<1800;R++){const O=S(R*1.17)*512,$=S(R*2.31)*512,K=10+S(R*3.71)*28,F=S(R*4.13);f.fillStyle=F>.72?`rgba(96,108,63,${.08+S(R)*.12})`:`rgba(30,36,25,${.05+S(R)*.12})`,f.beginPath(),f.arc(O,$,K,0,Math.PI*2),f.fill()}for(let R=0;R<650;R++){const O=S(R*7.1)*512,$=S(R*8.2)*512;f.strokeStyle=`rgba(142,154,91,${.18+S(R*2)*.15})`,f.lineWidth=1+S(R*4)*1.5,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*5)-.5)*5,$-3-S(R*6)*5),f.stroke()}}else if(u==="wood"){f.fillStyle="#5a3d29",f.fillRect(0,0,512,512);for(let R=0;R<512;R+=22)f.fillStyle=`rgba(25,15,9,${.18+S(R)*.13})`,f.fillRect(0,R,512,3),f.strokeStyle=`rgba(154,111,69,${.08+S(R*2)*.08})`,f.lineWidth=2,f.beginPath(),f.moveTo(0,R+7),f.bezierCurveTo(150,R+2,340,R+13,512,R+5),f.stroke();for(let R=0;R<65;R++){const O=S(R*2.1)*512;f.fillStyle=`rgba(20,12,8,${.12+S(R*3)*.16})`,f.fillRect(O,0,2+S(R*4)*3,512)}}else if(u==="roof"){f.fillStyle="#252522",f.fillRect(0,0,512,512);for(let R=-30;R<550;R+=25){f.fillStyle=`rgba(105,94,77,${.12+S(R)*.08})`,f.fillRect(0,R,512,2),f.strokeStyle="rgba(12,12,11,.48)",f.lineWidth=3;for(let O=-40;O<560;O+=38)f.beginPath(),f.moveTo(O,R),f.lineTo(O-18,R+28),f.stroke()}for(let R=0;R<180;R++)f.fillStyle=`rgba(170,154,123,${.03+S(R)*.07})`,f.fillRect(S(R*2)*512,S(R*3)*512,2+S(R*4)*7,2)}else if(u==="bark"){f.fillStyle="#7b5a3f",f.fillRect(0,0,512,512);for(let R=0;R<76;R++){const O=S(R*2.1)*512,$=2+S(R*3.7)*7;f.fillStyle=`rgba(${24+S(R)*24},${16+S(R*4)*18},${10+S(R*5)*14},${.18+S(R*6)*.22})`,f.fillRect(O,0,$,512)}for(let R=0;R<80;R++){const O=S(R*7.1)*512,$=S(R*8.2)*512;f.strokeStyle=`rgba(126,91,60,${.07+S(R*2)*.09})`,f.lineWidth=1+S(R*3)*2,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*4)-.5)*12,$+18+S(R*5)*45),f.stroke()}}else if(u==="foliage"){f.fillStyle="#68865a",f.fillRect(0,0,512,512);for(let R=0;R<1900;R++){const O=S(R*1.17)*512,$=S(R*2.31)*512,K=S(R*3.7),F=K>.72?112:K>.36?92:74,ne=K>.72?145:K>.36?121:98,re=K>.72?76:K>.36?60:48;f.fillStyle=`rgba(${F},${ne},${re},${.16+S(R*4)*.28})`,f.beginPath(),f.arc(O,$,1.5+S(R*5)*4.5,0,Math.PI*2),f.fill()}for(let R=0;R<260;R++){const O=S(R*9.1)*512,$=S(R*10.2)*512;f.strokeStyle=`rgba(18,31,22,${.08+S(R*3)*.12})`,f.lineWidth=1,f.beginPath(),f.moveTo(O,$),f.lineTo(O+(S(R*2)-.5)*10,$+(S(R*4)-.5)*10),f.stroke()}}else{f.fillStyle="#514333",f.fillRect(0,0,512,512);for(let R=0;R<1300;R++){const O=S(R*1.3)*512,$=S(R*2.7)*512;f.fillStyle=`rgba(${45+S(R*3)*38},${35+S(R*4)*28},${23+S(R*5)*20},${.08+S(R*6)*.18})`,f.fillRect(O,$,2+S(R*7)*7,1+S(R*8)*4)}}const D=new xo(x);return D.wrapS=D.wrapT=jr,D.colorSpace=Fn,D.anisotropy=4,D},J=(()=>{const u=document.createElement("canvas");u.width=u.height=128;const x=u.getContext("2d"),f=x.createImageData(128,128);for(let R=0;R<128;R++)for(let O=0;O<128;O++){const $=(R*128+O)*4,K=Math.sin(O*.37)*.3+Math.sin(R*.61)*.24+Math.sin((O+R)*.17)*.2+Math.sin((O-R)*.09)*.14,F=Math.max(214,Math.min(250,Math.round(232+K*18)));f.data[$]=F,f.data[$+1]=F,f.data[$+2]=F,f.data[$+3]=255}x.putImageData(f,0,0);const S=new xo(u);S.wrapS=S.wrapT=jr,S.repeat.set(5,5);const D=new xo(u);return D.wrapS=D.wrapT=jr,D.repeat.set(4,4),{height:S,rough:D}})(),ue=Q("ground");ue.repeat.set(5,6);const we=Q("bark");we.wrapS=we.wrapT=jr,we.repeat.set(1.2,1.8);const Ue=Q("foliage");Ue.wrapS=Ue.wrapT=jr,Ue.repeat.set(1.35,1.35);const ht=new qn(190,190,62,62),ut=ht.attributes.position;for(let u=0;u<ut.count;u++){const x=ut.getX(u),f=-ut.getY(u);ut.setZ(u,W(x,f))}ht.rotateX(-Math.PI/2),ht.computeVertexNormals();const Ie=new Ce({map:ue,roughness:.985,metalness:0,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.018}),me=new H(ht,Ie);me.receiveShadow=!0,w.add(me);const ve=(u,x,f,S,D)=>{const R=[],O=[];for(let ne=0;ne<=18;ne++){const re=-95+10.555555555555555*ne,Pe=Math.sin(ne*1.73+S)*.5+Math.cos(ne*.61+S*1.9)*.28,ye=f*(.72+Pe*.34);R.push(re,0,0),R.push(re+Pe*2.2,ye,0)}for(let ne=0;ne<18;ne++){const re=ne*2,Pe=re+1,ye=re+2,tt=re+3;O.push(re,Pe,ye,Pe,tt,ye)}const K=new mn;K.setAttribute("position",new Tt(R,3)),K.setIndex(O),K.computeVertexNormals();const F=new H(K,new xf({color:D,transparent:!0,opacity:.72,side:Yt,depthWrite:!1}));return F.rotation.x=Math.PI/2,F.position.set(0,1.5,u),F.scale.set(1,x,1),w.add(F),F};ve(-82,1,17,2.1,7505277),ve(-72,1,11,6.7,8491914);const je=(u,x,f,S,D)=>{const R=new Xe,O=new H(new nt(S*.1,S*.14,f*.42,5),new xf({color:5917241}));O.position.y=f*.21,R.add(O);for(let $=0;$<4;$++){const K=S*(1-$*.17),F=new H(new fn(K,f*(.48-$*.035),7,1),new xf({color:D}));F.position.y=f*(.38+$*.15),F.rotation.y=($*1.7+u*.03)%Math.PI,R.add(F)}R.position.set(u,db(u,x)-.2,x),R.scale.setScalar(.82+B(u,x)*.34),w.add(Bx(R))};for(let u=0;u<26;u++){const x=-86+u*6.8;je(x,-67-u%3*3,9+u%5*1.5,2.7+u%4*.45,5401432)}for(let u=0;u<20;u++){const x=-82+u*8.7;je(x,68+u%4*2.5,7.5+u%4*1.2,2.4,6387557)}const Re=(u,x,f)=>(x&&(u.userData={id:x,label:f||x}),u.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),w.add(u),x&&Be.push(u),u),_e=(u,x=.9,f=0)=>new Ce({color:u,roughness:x,metalness:f,roughnessMap:J.rough,bumpMap:J.height,bumpScale:f>.35?.008:.018}),he=(u,x,f,S,D=.9)=>new H(new Un(u,x,f),_e(S,D)),Vt=(u,x,f,S=10,D=.9)=>new H(new nt(u,u,x,S),_e(f,D)),z=(u,x,f)=>{const S=Vt(x,u,f,10,.96);return S.rotation.z=Math.PI/2,S},Ft=(u,x,f)=>{const S=new Xe,D=u*.62,R=.61,O=new Ce({map:Ne,color:f,roughness:.96,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012,side:Yt}),$=new H(new Un(D,.18,x),O),K=$.clone();return $.rotation.z=R,K.rotation.z=-R,$.position.x=-u*.205,K.position.x=u*.205,S.add($,K),S},Be=[],at=[],X=[],De=[],le=[],fe=.62,Ve=(u,x,f,S,D=0,R=.12)=>le.push({kind:"rect",x:u,z:x,w:f+R*2,d:S+R*2,rot:D}),He=(u,x,f,S=.12)=>le.push({kind:"circle",x:u,z:x,r:f+S}),N=(u,x,f,S,D,R=.12)=>le.push({kind:"segment",x1:u,z1:x,x2:f,z2:S,r:D+R}),b=(u,x,f)=>{if(f.kind==="circle")return Math.hypot(u-f.x,x-f.z)<f.r+fe;if(f.kind==="rect"){const F=Math.cos(f.rot),ne=Math.sin(f.rot),re=u-f.x,Pe=x-f.z,ye=F*re-ne*Pe,tt=ne*re+F*Pe,pt=Math.max(-f.w/2,Math.min(f.w/2,ye)),Lt=Math.max(-f.d/2,Math.min(f.d/2,tt));return Math.hypot(ye-pt,tt-Lt)<fe}const S=f.x2-f.x1,D=f.z2-f.z1,R=S*S+D*D,O=R>0?Math.max(0,Math.min(1,((u-f.x1)*S+(x-f.z1)*D)/R)):0,$=f.x1+S*O,K=f.z1+D*O;return Math.hypot(u-$,x-K)<f.r+fe},te=(u,x)=>v.current?u<bn-2.72||u>bn+2.72||x<yn-2.05||x>yn+2.3:le.some(f=>b(u,x,f)),pe=(u,x,f)=>{if(v.current){const R=Math.max(bn-2.55,Math.min(bn+2.55,x)),O=Math.max(yn-1.92,Math.min(yn+2.55,f));u.x=R,u.z=O;return}const S=Math.max(-88,Math.min(88,x)),D=Math.max(-89,Math.min(89,f));if(!te(S,D)){u.x=S,u.z=D;return}te(S,u.z)||(u.x=S),te(u.x,D)||(u.z=D)},Me=_e(3425343,1);for(let u=0;u<22;u++){const x=new Xe,f=-105+u*10,S=8+B(u,7)*9,D=new H(new fn(S,18+B(u,8)*16,7),Me);D.position.y=8,x.add(D),x.position.set(f,-1,-94+B(u,9)*11),Re(x)}const oe=[];for(let u=0;u<=32;u++)oe.push({z:-94+u*6,x:-57+Math.sin(u*.42)*4.2});const ze=[],Te=[],Qe=5.4;for(let u=0;u<oe.length;u++){const x=oe[u],f=oe[Math.max(0,u-1)],S=oe[Math.min(oe.length-1,u+1)],D=S.x-f.x,R=S.z-f.z,O=Math.max(.001,Math.hypot(D,R)),$=-R/O,K=D/O,F=W(x.x,x.z)+.055;for(const ne of[-1,1]){const re=Qe*ne;ze.push(x.x+$*re,F+Math.sin(u*1.7+ne)*.035,x.z+K*re)}if(u<oe.length-1){const ne=u*2;Te.push(ne,ne+1,ne+2,ne+1,ne+3,ne+2)}}const Ze=new mn;Ze.setAttribute("position",new Tt(ze,3)),Ze.setIndex(Te),Ze.computeVertexNormals();const Ae=new H(Ze,new Ce({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));Ae.receiveShadow=!0,w.add(Ae);const ke=[];for(let u=0;u<34;u++){const x=oe[Math.min(oe.length-1,Math.floor(u*.94))],f=.7+B(u,1500)*1.35,S=new H(new Tm(f*.45,f,12),new bt({color:10998996,transparent:!0,opacity:.12,side:Yt}));S.rotation.x=-Math.PI/2,S.scale.y=.42,S.position.set(x.x+(B(u,1501)-.5)*4.5,W(x.x,x.z)+.075,x.z+(B(u,1502)-.5)*4),w.add(S),ke.push({mesh:S,phase:B(u,1503)*Math.PI*2})}for(let u=0;u<52;u++){const x=Math.min(oe.length-1,Math.floor(u*.62)),f=oe[x],S=oe[Math.max(0,x-1)],D=oe[Math.min(oe.length-1,x+1)],R=D.x-S.x,O=D.z-S.z,$=Math.max(.001,Math.hypot(R,O)),K=u%2===0?-1:1,F=.34+B(u,15)*.72,ne=Qe+K*(.25+B(u,16)*1.4),re=new H(new an(F,1),_e(6185562,1));re.position.set(f.x+-O/$*ne,W(f.x,f.z)+.18,f.z+R/$*ne),re.scale.y=.5+B(u,17)*.35,Re(re),He(re.position.x,re.position.z,F*.75,.03)}const et=(u,x)=>{const f=u.map(([$,K])=>new G($,W($,K)+.035,K)),S=[],D=[];for(let $=0;$<f.length;$++){const K=f[Math.max(0,$-1)],F=f[Math.min(f.length-1,$+1)],ne=F.x-K.x,re=F.z-K.z,Pe=Math.max(.001,Math.hypot(ne,re)),ye=-re/Pe,tt=ne/Pe;if(S.push(f[$].x+ye*x/2,f[$].y,f[$].z+tt*x/2,f[$].x-ye*x/2,f[$].y+.01,f[$].z-tt*x/2),$<f.length-1){const pt=$*2;D.push(pt,pt+1,pt+2,pt+1,pt+3,pt+2)}}const R=new mn;R.setAttribute("position",new Tt(S,3)),R.setIndex(D),R.computeVertexNormals();const O=new H(R,new Ce({map:Q("road"),roughness:1}));O.receiveShadow=!0,w.add(O),[-x*.22,x*.22].forEach($=>{const K=f.map((re,Pe)=>{const ye=f[Math.max(0,Pe-1)],tt=f[Math.min(f.length-1,Pe+1)],pt=tt.x-ye.x,Lt=tt.z-ye.z,rn=Math.max(.001,Math.hypot(pt,Lt));return new G(re.x+-Lt/rn*$,re.y+.045,re.z+pt/rn*$)}),F=new ja(new fp(K),Math.max(12,f.length*4),.055,5,!1),ne=new H(F,_e(3352863,1));ne.scale.y=.12,w.add(ne)})};et([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),et([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),et([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),et([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),et([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),et([[4,14],[-3,22],[-7,31],[-8,42]],3.8),et([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),et([[4,14],[10,28],[18,41],[27,57]],3.8),et([[5,31],[15,45],[27,57],[39,70]],3.7),et([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),et([[-39,-8],[-47,-12],[-53,-15]],3.4);const Je=Q("wood");Je.repeat.set(2,1);const Ne=Q("roof");Ne.repeat.set(2,2);const ot=(u,x,f,S,D,R,O,$,K)=>{const F=new Xe;F.rotation.y=D,F.position.set(u,W(u,x),x),F.userData={id:O,label:R};const ne=new Ce({map:Je,color:$,roughness:.94,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.014}),re=he(f+.7,.55,S+.7,5724755,1);re.position.y=.28,F.add(re);for(let Nt=0;Nt<7;Nt++){const Ut=.62+Nt*.47,dn=z(f-Nt%2*.2,.29,$);dn.material=ne,dn.position.set(0,Ut,S*.5-.03),F.add(dn);const Dn=dn.clone();Dn.position.z=-S*.5+.03,F.add(Dn);const si=z(S+.06,.29,$);si.material=ne,si.rotation.y=Math.PI/2,si.position.set(-f*.5+.03,Ut,0),F.add(si);const We=si.clone();We.position.x=f*.5-.03,F.add(We)}for(const Nt of[-f*.5,f*.5])for(const Ut of[-S*.5,S*.5]){const dn=Vt(.34,3.75,3482649,8,1);dn.position.set(Nt,2.05,Ut),F.add(dn)}const Pe=he(1.18,2.05,.18,2365458,1);Pe.position.set(0,1.37,S*.5+.31),F.add(Pe);for(const Nt of[-.67,.67]){const Ut=he(.15,2.28,.24,3811613,1);Ut.position.set(Nt,1.42,S*.5+.34),F.add(Ut)}const ye=z(1.65,.11,3679770);ye.position.set(0,2.53,S*.5+.34),F.add(ye);const tt=Vt(.055,.12,13015634,8,.55);tt.rotation.z=Math.PI/2,tt.position.set(.33,1.38,S*.5+.43),F.add(tt);const pt=new Ce({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Nt of[-f*.27,f*.27]){const Ut=he(1.28,1.02,.13,3154457,1);Ut.position.set(Nt,2.02,S*.5+.29),F.add(Ut);const dn=he(.94,.7,.055,15251295,.45);dn.material=pt,dn.position.set(Nt,2.02,S*.5+.36),F.add(dn);const Dn=he(.07,.78,.09,3154457,1);Dn.position.set(Nt,2.02,S*.5+.4),F.add(Dn);const si=he(1.05,.07,.09,3154457,1);si.position.set(Nt,2.02,S*.5+.4),F.add(si)}const Lt=Ft(f+1.55,S+1.35,K);Lt.position.y=4.18,F.add(Lt);for(const Nt of[-1,1]){const Ut=z(S+1.48,.12,3154715);Ut.position.set(Nt*(f*.46),3.78,0),Ut.rotation.y=Math.PI/2,F.add(Ut)}const rn=z(S+1.45,.18,2760730);rn.rotation.y=Math.PI/2,rn.position.y=5.28,F.add(rn);const zt=he(f*.34,.16,1.05,6439467,1);zt.position.set(0,.64,S*.5+.66),F.add(zt);for(const Nt of[-f*.16,f*.16]){const Ut=z(.85,.08,4796447);Ut.rotation.y=Math.PI/2,Ut.position.set(Nt,.83,S*.5+.95),F.add(Ut)}const Kt=Vt(.34,2,5722958,8,1);Kt.position.set(f*.25,5.05,-S*.1),F.add(Kt);const qt=he(.72,.14,.72,3157289,1);qt.position.set(f*.25,6.08,-S*.1),F.add(qt),Re(F,O,R),Be.push(F),Ve(u,x,f+.85,S+.85,D,.05)};ot(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ot(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ot(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ot(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ot(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ot(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const j=new Xe;j.position.set(-10,W(-10,-5),-5),j.userData={id:"forge",label:"Кузница"};for(let u=0;u<7;u++){const x=.62+u*.47,f=z(9,.27,4401693);f.position.set(0,x,-2.85),j.add(f);const S=z(6,.27,4401693);S.rotation.y=Math.PI/2,S.position.set(-4.35,x,0),j.add(S)}for(const u of[-4.35,4.35]){const x=Vt(.34,4,2825493,9,1);x.position.set(u,2,-2.85),j.add(x)}const be=Ft(9.8,7,2433825);be.position.y=4.45,j.add(be);const Le=z(7.2,.18,2169366);Le.rotation.y=Math.PI/2,Le.position.y=5.42,j.add(Le);for(const u of[-3.7,3.7]){const x=z(4.7,.13,2825494);x.rotation.z=u<0?-.6:.6,x.position.set(u*.48,3.15,.1),j.add(x)}const qe=Vt(1.15,1.65,3420462,10,1);qe.position.set(-2,.83,1.15),j.add(qe);const Se=Vt(.88,.35,2565925,10,1);Se.position.set(-2,1.83,1.15),j.add(Se);const ge=new H(new jn(.52,16),new Ce({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));ge.rotation.y=Math.PI,ge.position.set(-2,1.02,2.23),j.add(ge);const Ke=Vt(.27,.85,2697770,8,.45);Ke.position.set(1.15,.43,1.05),j.add(Ke);const dt=he(1.45,.34,.58,2435114,.38);dt.position.set(1.15,1,1.05),j.add(dt);const kt=new H(new fn(.18,.72,8),_e(2435114,.38,.05));kt.rotation.z=-Math.PI/2,kt.position.set(1.98,1,1.05),j.add(kt);for(let u=0;u<4;u++){const x=z(1.25,.045,11184548);x.rotation.z=-.35+u*.18,x.position.set(2.05+u*.18,1.12,1.34),j.add(x)}const At=he(1.15,.42,.62,3876893,1);At.position.set(2.15,.72,-.8),At.rotation.z=-.18,j.add(At);const pi=Vt(.07,.55,5980979,8,1);pi.rotation.z=Math.PI/2,pi.position.set(1.55,.84,-.8),j.add(pi),Re(j,"forge","Кузница"),Be.push(j),Ve(-10,-5,9.6,6.6,0,.05);const mi=new Vi(16742962,3.4,14,2);mi.position.set(-12,W(-12,-5)+2.2,-4),w.add(mi);const hs=new H(new jn(8.5,32),new Ce({color:7035463,roughness:1}));hs.rotation.x=-Math.PI/2,hs.position.set(1,W(1,0)+.05,0),hs.receiveShadow=!0,w.add(hs);for(let u=0;u<18;u++){const x=u/18*Math.PI*2,f=new H(new an(.38,1),_e(7039843,1));f.position.set(1+Math.cos(x)*8.8,W(1+Math.cos(x)*8.8,Math.sin(x)*8.8)+.22,Math.sin(x)*8.8),w.add(f)}const Qi=(u,x)=>{const f=new Xe,S=he(2.8,.22,1,6832937,1);S.position.y=1.05,f.add(S);for(const D of[-1.05,1.05]){const R=he(.16,1,.16,3877149,1);R.position.set(D,.5,-.32),f.add(R);const O=R.clone();O.position.z=.32,f.add(O)}f.position.set(u,W(u,x),x),w.add(f)};Qi(-4,2),Qi(7,3);const ur=(u,x,f)=>{const S=new Xe;S.position.set(u,W(u,x),x);for(let F=0;F<7;F++){const ne=F/7*Math.PI*2,re=new H(new an(.32*f,1),_e(6117970,1));re.position.set(Math.cos(ne)*.7*f,.25*f,Math.sin(ne)*.7*f),S.add(re)}const D=he(.2*f,.2*f,1.5*f,4861211,1),R=D.clone();D.rotation.y=.55,R.rotation.y=-.55,D.position.y=R.position.y=.38*f,S.add(D,R);const O=new Ce({color:16744744,emissive:16731402,emissiveIntensity:4}),$=new H(new fn(.5*f,1.35*f,8),O);$.position.y=1.02*f,S.add($),w.add(S);const K=new Vi(16747068,2.4*f,12*f,2);return K.position.set(u,W(u,x)+2*f,x),w.add(K),at.push({light:K,flame:$,phase:B(u,x)*8}),S},ii=new Xe;ii.userData={id:"mimir",label:"Колодец Мимира"},ii.position.set(1,W(1,0),0);const Ks=new H(new jn(1.18,32),new Ce({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));Ks.rotation.x=-Math.PI/2,Ks.position.y=.5,ii.add(Ks);for(let u=0;u<3;u++){const x=new H(new Bt(.38+u*.28,.025,6,40),new bt({color:u===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));x.rotation.x=Math.PI/2,x.position.y=.525,ii.add(x)}for(const u of[-1.35,1.35]){const x=he(.24,3,.24,4861984,1);x.position.set(u,1.55,0),ii.add(x)}const ps=he(3.15,.26,.26,3679513,1);ps.position.y=2.96,ii.add(ps);const sa=new H(new nt(.035,.035,1.2,6),_e(8086088,1));sa.position.y=2.25,ii.add(sa);const ms=he(.58,.5,.58,5913383,1);ms.position.set(0,1.65,0),ii.add(ms);const Zs=new H(new Bt(1.55,.055,8,48),new Ce({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));Zs.rotation.x=Math.PI/2,Zs.position.y=.54,ii.add(Zs),Re(ii,"mimir","Колодец Мимира"),Be.push(ii),He(1,0,2,.08);const oa=new Vi(7530656,2,10,2);oa.position.set(1,W(1,0)+1.5,0),w.add(oa),ur(18,-15,.72);const ri=(u,x,f,S,D=1.25)=>{const R=new Xe,O=f-u,$=S-x,K=Math.hypot(O,$),F=Math.max(1,Math.floor(K/1.55));for(let ne=0;ne<=F;ne++){const re=ne/F,Pe=u+O*re,ye=x+$*re,tt=he(.18,D,.18,4796447,1);tt.position.set(Pe,W(Pe,ye)+D/2,ye),R.add(tt)}for(const ne of[-.28,.38]){const re=he(.14,.14,K,5978917,1);re.rotation.y=Math.atan2(O,$),re.position.set((u+f)/2,W((u+f)/2,(x+S)/2)+D*ne,(x+S)/2),R.add(re)}w.add(R),N(u,x,f,S,.12,.02)},Js=(u,x,f,S,D,R,O)=>{const $=new Xe;$.position.set(u,W(u,x),x),$.rotation.y=D,$.userData={id:O,label:R};const K=he(f+.25,.35,S+.25,5591368,1);K.position.y=.18,$.add(K);const F=new H(new Un(f,2.5,S),new Ce({map:Je,color:6439983,roughness:1}));F.position.y=1.45,$.add(F);const ne=new H(new Un(f+.6,.18,S+.65),new Ce({map:Ne,color:2696996,roughness:1}));ne.rotation.z=.55,ne.position.set(-.16,3,0),$.add(ne);const re=ne.clone();re.rotation.z=-.55,re.position.x=.16,$.add(re);const Pe=he(1.05,1.75,.12,2759700,1);Pe.position.set(0,1.05,S/2+.07),$.add(Pe),Re($,O,R),Be.push($),Ve(u,x,f+.55,S+.55,D,.04)},El=(u,x,f=1)=>{const S=new Xe;S.position.set(u,W(u,x),x);const D=new H(new nt(.65*f,.65*f,1.2*f,10),_e(9073729,1));D.rotation.z=Math.PI/2,D.position.y=.62*f,S.add(D);for(let R=0;R<3;R++){const O=new H(new Bt(.66*f,.025*f,5,18),_e(5851693,1));O.rotation.y=Math.PI/2,O.position.y=(.28+R*.34)*f,S.add(O)}Re(S)},aa=(u,x,f)=>{const S=new Xe;S.position.set(u,W(u,x),x),S.rotation.y=f;const D=he(2.8,.28,1.45,6636331,1);D.position.y=1,S.add(D);for(const O of[-1.15,1.15])for(const $ of[-.55,.55]){const K=he(.16,1.15,.16,4401950,1);K.position.set(O,.55,$),S.add(K)}for(const O of[-1.15,1.15]){const $=new H(new nt(.5,.5,.18,14),_e(2696738,1));$.rotation.z=Math.PI/2,$.position.set(O,.52,-.92),S.add($)}const R=he(.16,.16,2.4,4796447,1);R.rotation.x=Math.PI/2,R.position.set(0,.72,-2),S.add(R),Re(S)},Tl=(u,x,f=0)=>{const S=new Xe;S.position.set(u,W(u,x),x),S.rotation.y=f;const D=he(2.2,.16,.5,7359021,1);D.position.y=.85,S.add(D);for(const R of[-.78,.78]){const O=he(.12,.8,.12,4139549,1);O.position.set(R,.4,0),S.add(O)}Re(S)},Al=(u,x)=>{const f=new Xe;f.position.set(u,W(u,x),x);for(let O=0;O<10;O++){const $=O/10*Math.PI*2,K=he(.45,.38,.38,6710621,1);K.position.set(Math.cos($)*.95,.19,Math.sin($)*.95),K.rotation.y=$,f.add(K)}const S=he(.16,2.2,.16,4861984,1),D=S.clone();S.position.set(-.9,1.2,0),D.position.set(.9,1.2,0),f.add(S,D);const R=he(2,.16,.16,3876891,1);R.position.y=2.25,f.add(R),Re(f)};Js(-19,31,8,5,.08,"Амбар","barn"),Js(17,34,7,5,-.2,"Сарай","shed"),Js(27,13,6,4,.45,"Склад рыбака","fishshed"),ri(-25,27,-13,27),ri(-25,27,-25,38),ri(-25,38,-14,38),ri(12,29,25,29),ri(25,29,25,40),ri(25,40,12,40),ri(29,-1,39,-1),ri(39,-1,39,10),ri(39,10,30,10);for(const u of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])El(u[0],u[1],u[2]);aa(-17,24,.18),aa(29,-5,-.55),Tl(-20,23,.18),Tl(25,31,-.2),ot(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ot(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ot(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ot(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Ve(-31,8,7.8,5.8,.1,.04),Ve(-27,20,7.8,5.8,-.25,.04),Ve(31,18,7.8,5.8,.32,.04),Ve(20,24,7.8,5.8,-.12,.04);const C=(u,x,f)=>{const S=new Xe;S.position.set(u,W(u,x),x),S.rotation.y=f;const D=he(3,.18,1.25,7357994,1);D.position.y=1.45,S.add(D);for(const O of[-1.25,1.25])for(const $ of[-.48,.48]){const K=he(.13,1.45,.13,4270877,1);K.position.set(O,.72,$),S.add(K)}const R=new H(new fn(1.65,2.5,4,1,!1,Math.PI/4),_e(4798510,1));R.scale.z=.55,R.position.y=2.15,S.add(R),Re(S)};C(-5,-7,.12),C(8,-5,-.18),C(6,7,.5);for(const u of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Al(u[0],u[1]);const ee=(u,x,f=1)=>{const S=new Xe,D=W(u,x);for(let R=0;R<5;R++){const O=new H(new ft((.28+B(R,u)*.18)*f,8,6),_e(R%2?3494457:4284223,1));O.position.set((B(R,2)-.5)*.7*f,.28*f,(B(R,3)-.5)*.7*f),S.add(O)}S.position.set(u,D,x),Re(S)};for(let u=0;u<48;u++){const x=B(u,501)*Math.PI*2,f=18+B(u,502)*39,S=Math.cos(x)*f,D=Math.sin(x)*f+4;Math.abs(S)<9&&Math.abs(D)<14||ee(S,D,.65+B(u,503)*.75)}for(let u=0;u<34;u++){const x=-84+B(u,610)*168,f=-82+B(u,611)*164;if(Math.hypot(x,f-2)<24)continue;const S=.25+B(u,612)*.55,D=new H(new an(S,1),_e(5725013,1));D.scale.y=.55,D.position.set(x,W(x,f)+S*.28,f),D.rotation.set(B(u,613),B(u,614),B(u,615)),Re(D),He(x,f,S*.8,.03)}ot(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Js(-58,42,6,4,-.12,"Старый амбар","oldbarn"),ri(-70,32,-60,32),ri(-70,32,-70,43),ri(-70,43,-61,43),El(-68,8,.9),aa(-62,2,-.25),Al(-58,4);const ae=new Xe;ae.position.set(-63,W(-63,47),47);for(let u=0;u<6;u++){const x=he(10,.035,.12,4208682,1);x.position.set(0,.02,(u-2.5)*1.05),x.rotation.y=.06,ae.add(x)}Re(ae);const se=(u,x)=>{const f=document.createElement("canvas");f.width=f.height=256;const S=f.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=x,S.shadowBlur=18,S.fillStyle=x,S.font="bold 150px serif",S.fillText(u,128,132),S.shadowBlur=4,S.globalAlpha=.55,S.font="bold 118px serif",S.fillText(u,128,132);const D=new xo(f);return D.colorSpace=Fn,D.anisotropy=4,D},Z=(u,x,f,S,D,R=.72,O=0)=>{const $="#"+D.toString(16).padStart(6,"0"),K=new bt({map:se(S,$),transparent:!0,depthWrite:!1,side:Yt}),F=new H(new qn(R,R),K);return F.rotation.x=-Math.PI/2,F.rotation.z=O,F.position.set(x,.065,f),u.add(F),F},xe=new Xe,Fe=18,$e=55;xe.position.set(Fe,W(Fe,$e),$e),xe.userData={id:"runefield",label:"Поле Рун"};const Ge=new Ce({color:5857629,roughness:.94,metalness:.04}),lt=new Ce({color:3884096,roughness:1});new bt({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Yt}),new bt({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Yt}),new bt({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Yt});const ct=new H(new jn(12.2,48),new Ce({color:2636332,roughness:1,transparent:!0,opacity:.92}));ct.rotation.x=-Math.PI/2,ct.position.y=.018,xe.add(ct);const rt=new H(new nt(2.15,2.55,.48,10),lt);rt.position.y=.24,rt.scale.z=.82,xe.add(rt);const gt=new H(new an(1.48,1),Ge);gt.scale.set(1,1.65,.72),gt.position.y=1.38,gt.rotation.y=.18,xe.add(gt);const Ct=new H(new an(.78,1),Ge);Ct.scale.set(.72,1.15,.55),Ct.position.set(0,2.72,.02),Ct.rotation.z=.06,xe.add(Ct);const Jt=Z(xe,0,0,"ᚠ",10481407,1.15,0);Jt.position.y=2.55,Jt.rotation.x=0;const Gt=new Vi(7793407,1.7,9,2);Gt.position.set(0,2,.8),xe.add(Gt);for(const[u,x]of[[3,.075],[7.1,.065],[10.1,.045]]){const f=new H(new Bt(u,x,8,96),new bt({color:15320941,transparent:!0,opacity:u<8?.82:.58,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.055,xe.add(f)}const St=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let u=0;u<16;u++){const x=u/16*Math.PI*2;Z(xe,Math.cos(x)*8.55,Math.sin(x)*8.55,St[u],u%3===0?15055195:u%3===1?7857653:12093423,.62,x+.18)}for(let u=0;u<12;u++){const x=u/12*Math.PI*2+.13;Z(xe,Math.cos(x)*5.45,Math.sin(x)*5.45,St[(u+5)%St.length],u%2?7659506:12684269,.38,x)}for(let u=0;u<10;u++){const x=u/10*Math.PI*2+.16,f=9.15+(.5-B(u,1202))*1,S=2.4+B(u,1203)*2,D=.72+B(u,1204)*.48,R=new H(new an(.82+B(u,1205)*.22,1),Ge);R.scale.set(D,S,.72+B(u,1206)*.28),R.position.set(Math.cos(x)*f,R.scale.y*.58,Math.sin(x)*f),R.rotation.set((B(u,1207)-.5)*.22,x+(B(u,1208)-.5)*.3,(B(u,1209)-.5)*.18),xe.add(R);const O=St[u%St.length],$=se(O,u%3===0?"#8eeeff":u%3===1?"#c08cff":"#ffd86b"),K=new H(new qn(.62,.92),new bt({map:$,transparent:!0,depthWrite:!1,side:Yt}));K.position.set(R.position.x+Math.cos(x)*.68,R.position.y*.76,R.position.z+Math.sin(x)*.68),K.rotation.y=-x+Math.PI*.5,xe.add(K);const F=new Vi(u%3===1?11628031:u%3===0?6479359:15055195,.35,3.6,2);F.position.set(R.position.x,R.position.y*.72,R.position.z),xe.add(F)}for(let u=0;u<18;u++){const x=B(u,1220)*Math.PI*2,f=6.8+B(u,1221)*4.3;no(xe,Math.cos(x)*f,.22,Math.sin(x)*f,.28+B(u,1222)*.35,u%2?5003088:5857882,1223+u)}for(let u=0;u<10;u++){const x=B(u,1230)*Math.PI*2,f=2.6+B(u,1231)*6.6,S=new H(new nt(.06,.09,.035,7),new Ce({color:10191179,metalness:.6,roughness:.45}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(x)*f,.09,Math.sin(x)*f),xe.add(S)}Re(xe,"runefield","Поле Рун"),Be.push(xe),He(Fe,$e,1.8,.08);const st=(u,x,f,S)=>{const D=new Xe,R=f-u,O=S-x,$=Math.hypot(R,O),K=Math.floor($/1.7);for(let ne=0;ne<=K;ne++){const re=ne/K,Pe=u+R*re,ye=x+O*re,tt=new H(new fn(.24,.24+2.8+B(ne,u)*.5,6),_e(3942940,1));tt.position.set(Pe,W(Pe,ye)+1.45,ye),D.add(tt)}const F=he(.3,.35,$,2957593,1);F.rotation.y=Math.atan2(R,O),F.position.set((u+f)/2,W((u+f)/2,(x+S)/2)+1.25,(x+S)/2),D.add(F),w.add(D),N(u,x,f,S,.34,.08)};st(-30,-31,-8,-31),st(8,-31,30,-31),st(-30,-31,-30,-13),st(30,-31,30,16);const Ot=new Xe;Ot.userData={id:"gate",label:"Ворота Мидгарда"};for(const u of[-4.2,4.2]){const x=he(.8,6,.8,3482906,1);x.position.set(u,3,-31),Ot.add(x)}const Et=he(10,.8,1,2957336,1);Et.position.set(0,6,-31),Ot.add(Et);for(let u=-3;u<=3;u++){const x=he(1,4.2,.22,5978660,1);x.position.set(u*1.15,2,-30.7),Ot.add(x)}Re(Ot,"gate","Ворота Мидгарда"),Be.push(Ot),He(-4.2,-31,.55,.05),He(4.2,-31,.55,.05);const Rt=new Xe;Rt.userData={id:"norns",label:"Прядильня норн"},Rt.position.set(-52,W(-52,38),38);const Ir=_e(4927522,1),Kn=_e(2826523,1),Lr=he(5.7,.28,.28,5847592,1);Lr.position.set(0,3.8,0),Rt.add(Lr);const $t=he(5,.25,.32,3877151,1);$t.position.set(0,.65,.15),Rt.add($t);for(const u of[-2.45,2.45]){const x=he(.28,3.55,.3,5321763,1);x.position.set(u,2.15,0),x.rotation.z=u>0?.08:-.08,Rt.add(x)}const zn=new H(new Bt(2.05,.18,8,32),Ir);zn.rotation.y=Math.PI/2,zn.position.set(0,2.25,-.8),Rt.add(zn);const Bn=new H(new nt(.28,.32,.38,10),Kn);Bn.rotation.z=Math.PI/2,Bn.position.set(0,2.25,-.8),Rt.add(Bn);for(let u=0;u<10;u++){const x=u/10*Math.PI*2,f=he(.08,.08,1.85,5913384,1);f.position.set(Math.cos(x)*.92,2.25+Math.sin(x)*.92,-.8),f.rotation.z=-x,Rt.add(f)}const Ln=["URD","VERDANDI","SKULD"],Hn=[8640767,15198177,14908296];for(let u=0;u<3;u++){const x=(u-1)*2,f=new H(new an(.78,1),new Ce({color:4541257,roughness:.92,metalness:.05}));f.scale.set(.9,1.18+B(u,1290)*.2,.72),f.position.set(x,1.35,.18),f.rotation.set(0,(u-1)*.16,0),Rt.add(f);const S=se(u===0?"ᚢ":u===1?"ᚹ":"ᛋ",u===0?"#8fe6ff":u===1?"#f1f1ec":"#ef8d9a"),D=new H(new qn(.48,.62),new bt({map:S,transparent:!0,depthWrite:!1,side:Yt}));D.position.set(x,1.42,.86),D.rotation.y=Math.PI,Rt.add(D);const R=document.createElement("canvas");R.width=320,R.height=96;const O=R.getContext("2d");O.clearRect(0,0,320,96),O.textAlign="center",O.textBaseline="middle",O.font="bold 34px serif",O.fillStyle=u===0?"#9fe9ff":u===1?"#f4f4ef":"#ef91a0",O.shadowColor=O.fillStyle,O.shadowBlur=12,O.fillText(Ln[u],160,48);const $=new xo(R);$.colorSpace=Fn;const K=new H(new qn(1.55,.46),new bt({map:$,transparent:!0,depthWrite:!1,side:Yt}));K.position.set(x,.55,.86),K.rotation.y=Math.PI,Rt.add(K);const F=new Vi(Hn[u],.45,4.5,2);F.position.set(x,1.55,1),Rt.add(F)}const Qs=[15123551,15263973,14245748];for(let u=0;u<3;u++){const x=[];for(let f=0;f<=18;f++){const S=f/18,D=1.9+S*4.6,R=(u-1)*2+Math.sin(S*Math.PI*2+u*1.7)*(.45+.5*S),O=.35+Math.cos(S*Math.PI*2+u)*.45;x.push(new G(R,D,O))}Rt.add(new u1(new mn().setFromPoints(x),new dp({color:Qs[u],transparent:!0,opacity:.9})))}for(let u=0;u<3;u++){const x=new H(new Bt(1.15+u*.18,.045,6,32),new bt({color:Qs[u],transparent:!0,opacity:.75,depthWrite:!1}));x.position.set((u-1)*.38,6.15,.15),x.rotation.set(.4,u*.65,.2),Rt.add(x)}const ki=new H(new Bt(4.6,.065,8,72),new bt({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));ki.rotation.x=Math.PI/2,ki.position.y=.05,Rt.add(ki);for(let u=0;u<18;u++){const x=B(u,1300)*Math.PI*2,f=2.5+B(u,1301)*3.1,S=new H(new nt(.12,.12,.16,9),new Ce({color:[10184008,7174032,9261927,7828045][u%4],roughness:.8}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(x)*f,.12,Math.sin(x)*f),Rt.add(S)}for(let u=0;u<9;u++)Z(Rt,(B(u,1315)-.5)*7.5,(B(u,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][u%5],u%2?9428976:14134881,.34,B(u,1317)*Math.PI);Re(Rt,"norns","Прядильня норн"),Be.push(Rt),He(-52,38,3,.1);const eo=new Xe;eo.userData={id:"rune",label:"Древний камень Феху"},eo.position.set(50,W(50,60),60);const Cm=new H(new an(1.45,1),_e(5002063,1));Cm.position.y=1.2,eo.add(Cm);const Uu=new H(new Bt(1.05,.07,8,30),new Ce({color:16766826,emissive:10052371,emissiveIntensity:3}));Uu.rotation.x=Math.PI/2,Uu.position.y=1.2,eo.add(Uu),Re(eo,"rune","Древний камень Феху"),Be.push(eo),He(50,60,1.7,.1);const bl=new Xe;bl.userData={id:"port",label:"Мост к причалу"};for(let u=-5;u<=5;u++){const x=he(3.6,.28,.82,6307882,1);x.position.set(-53,W(-53,u*1)+.5,u),bl.add(x)}Re(bl,"port","Мост к причалу"),Be.push(bl);const to=new Xe;to.position.set(-45,W(-45,-48),-48);for(let u=0;u<7;u++){const x=he(2.8,.24,.72,7030573,1);x.position.set(0,.3,u*.85),to.add(x)}for(const u of[-1.2,1.2])for(let x=0;x<3;x++){const f=he(.22,1.5,.22,4139292,1);f.position.set(u,-.2,x*2.5),to.add(f)}const Rm=he(2.2,.55,4.8,4926493,1);Rm.position.set(3,-.15,2.5),to.add(Rm),Re(to,"port","Речной причал"),Be.push(to);const Hx=(u,x)=>{const f=new H(new nt(.5,.5,1,12),_e(6636332,1));f.position.set(u,W(u,x)+.5,x),w.add(f);for(const S of[.25,.76]){const D=new H(new Bt(.51,.045,6,18),_e(3156004,.7,.1));D.rotation.x=Math.PI/2,D.position.set(u,W(u,x)+S,x),w.add(D)}},Vx=(u,x)=>{const f=he(1,.75,1,7359022,1);f.position.set(u,W(u,x)+.38,x),w.add(f);const S=he(.08,.82,1.05,3679770,1);S.position.set(u,W(u,x)+.38,x),w.add(S),Ve(u,x,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([u,x])=>Hx(u,x)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([u,x])=>Vx(u,x));const Gx=(u,x,f)=>{const S=new Xe,D=W(u,x),R=new Ce({map:we,color:16777215,roughness:.98,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),O=new H(new nt(.18*f,.38*f,5.2*f,9),R);O.position.y=2.6*f,O.rotation.z=(B(u,x)-.5)*.08,O.scale.x=1.08+B(u,x+4)*.22,S.add(O);for(let K=0;K<9;K++){const F=(1.15+K*.47)*f,ne=K%2?1:-1,re=(.9+K*.16)*f,Pe=new H(new nt(.035*f,.095*f,re,7),R);Pe.position.set(ne*(.28+K*.035)*f,F,(B(K,x)-.5)*.38*f),Pe.rotation.z=ne*(.62-B(K,u)*.18),Pe.rotation.y=B(K+21,x)*Math.PI*2,S.add(Pe)}const $=[2904370,3893312,4946505];for(let K=0;K<12;K++){const F=Math.max(.48,1.42-K*.075)*f,ne=new H(q1(new ft(F,10,7),.18*f,K+Math.round(u*3+x*5)),new Ce({map:Ue,color:$[K%3],roughness:.995}));ne.scale.set(1+B(K,u)*.25,.55+B(K,x)*.16,.82+B(K*2,u)*.22),ne.position.set((B(K*4,u)-.5)*.58*f,(1.55+K*.37)*f,(B(K*5,x)-.5)*.55*f),S.add(ne)}for(let K=0;K<3;K++){const F=new H(new ft(.38*f,7,5),new Ce({color:K%2?3231030:4021565,roughness:1}));F.scale.set(1.5,.28,.85),F.position.set((K-1)*.45*f,.55*f,(B(K,88)-.5)*.5*f),S.add(F)}for(let K=0;K<4;K++){const F=new H(new ft((.11+B(K,77)*.08)*f,7,5),R);F.scale.set(1.35,.72,.82),F.position.set((K%2?1:-1)*.18*f,(1+K*.78)*f,.29*f),F.rotation.y=K%2*Math.PI,S.add(F)}for(let K=0;K<4;K++){const F=K/4*Math.PI*2+.4,ne=(.55+B(K,79)*.7)*f,re=new H(new nt(.045*f,.12*f,ne,6),R);re.position.set(Math.cos(F)*ne*.42,.14*f,Math.sin(F)*ne*.42),re.rotation.z=Math.cos(F)*.85,re.rotation.x=-Math.sin(F)*.85,re.rotation.y=-F,S.add(re)}S.position.set(u,D,x),Re(S),f>=1.15&&He(u,x,.46*f,.04)},Cl=(u,x,f,S=!1)=>{const D=new Xe,R=W(u,x),O=new Ce({map:we,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),$=new H(new nt(.42*f,.72*f,6.4*f,11),O);$.position.y=3.2*f,$.rotation.z=(B(u,x)-.5)*.06,$.scale.x=1.08,D.add($);for(let F=0;F<(S?9:7);F++){const ne=F/(S?9:7)*Math.PI*2+B(F,u)*.18,re=(1+B(F,x)*1.6)*f,Pe=new H(new nt(.11*f,.3*f,re,7),O);Pe.position.set(Math.cos(ne)*re*.42,.28*f,Math.sin(ne)*re*.42),Pe.rotation.z=Math.cos(ne)*.72,Pe.rotation.x=-Math.sin(ne)*.72,Pe.rotation.y=-ne,D.add(Pe)}const K=S?10:8;for(let F=0;F<K;F++){const ne=F/K*Math.PI*2+B(F+11,u)*.22,re=(2+B(F+22,x)*2.2)*f,Pe=new H(new nt(.07*f,.19*f,re,8),O);Pe.position.set(Math.cos(ne)*re*.34,(3.25+B(F+33,u)*1.9)*f,Math.sin(ne)*re*.34),Pe.rotation.z=Math.cos(ne)*.76,Pe.rotation.x=Math.sin(ne)*.76,Pe.rotation.y=-ne,D.add(Pe);for(let ye=0;ye<4;ye++){const tt=new H(q1(new ft((.46+B(ye+F,90)*.25)*f,10,7),.14*f,ye+F+17),new Ce({map:Ue,color:[3235641,4355400,5670483][(F+ye)%3],roughness:1}));tt.scale.y=.62,tt.position.set(Math.cos(ne)*re*(.52+.09*ye)+(B(ye,F)-.5)*.55*f,(3.9+B(F,ye)*1.45+.25*ye)*f,Math.sin(ne)*re*(.52+.09*ye)+(B(ye+4,F)-.5)*.55*f),D.add(tt)}}if(S){const F=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ne=0;ne<F.length;ne++){const re=-.9+ne*.46,Pe=new H(new qn(.48*f,.62*f),new bt({map:se(F[ne],ne%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Yt}));Pe.position.set(Math.sin(re)*.56*f,(1.5+ne*.68)*f,Math.cos(re)*.6*f),Pe.rotation.y=re,D.add(Pe)}}for(let F=0;F<6;F++){const ne=new H(new ft((.16+B(F,121)*.1)*f,7,5),O);ne.scale.set(.55,1.55,.42);const re=B(F,122)*Math.PI*2;ne.position.set(Math.cos(re)*.5*f,(1.05+F*.48)*f,Math.sin(re)*.5*f),ne.rotation.y=-re,D.add(ne)}if(S){const F=new Ce({map:we,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.048});for(let ne=0;ne<4;ne++){const re=ne/4*Math.PI*2+.35,Pe=(1.35+B(ne,441)*.85)*f,ye=new H(new nt(.1*f,.26*f,Pe,8),F);ye.position.set(Math.cos(re)*Pe*.34,.48*f,Math.sin(re)*Pe*.34),ye.rotation.z=Math.cos(re)*.92,ye.rotation.x=-Math.sin(re)*.92,ye.rotation.y=-re,D.add(ye)}for(let ne=0;ne<6;ne++){const re=-1.25+ne*.48,Pe=(2.1+B(ne,452)*1.7)*f,ye=new H(new nt(.045*f,.12*f,Pe,7),F);ye.position.set(Math.sin(re)*Pe*.46,(5+B(ne,453)*1.6)*f,Math.cos(re)*Pe*.46),ye.rotation.z=.72*Math.cos(re),ye.rotation.x=.55*Math.sin(re),ye.rotation.y=-re,D.add(ye)}for(let ne=0;ne<3;ne++){const re=new H(new ft((.13+B(ne,461)*.07)*f,8,6),new Ce({color:1513748,roughness:1})),Pe=-.8+ne*.72;re.scale.set(.55,1.15,.32),re.position.set(Math.sin(Pe)*.61*f,(2.05+ne*.65)*f,Math.cos(Pe)*.61*f),re.rotation.y=Pe,D.add(re)}}D.position.set(u,R,x),Re(D),f>=1.2&&He(u,x,.78*f,.05)},Wx=(u,x,f,S)=>{const D=new Xe,R=new Ce({color:7031345,roughness:.96}),O=new Ce({color:8871999,roughness:.96}),$=new Ce({color:3155230,roughness:1}),K=new Ce({color:12168600,roughness:.9}),F=new Ce({color:1512207,roughness:.25}),ne=new H(new ft(.68,14,10),R);ne.scale.set(1.35,.78,.72),ne.position.set(0,.98*f,0),ne.scale.multiplyScalar(f),D.add(ne);const re=new H(new ft(.42,12,9),O);re.scale.set(1,.9,.86),re.position.set(.49*f,1.04*f,0),D.add(re);const Pe=new H(new nt(.2*f,.34*f,.98*f,10),R);Pe.position.set(.5*f,1.46*f,0),Pe.rotation.z=-.3,D.add(Pe);const ye=new H(new ft(.34*f,12,9),O);ye.scale.set(1.18,.92,.78),ye.position.set(.86*f,1.82*f,0),D.add(ye);const tt=new H(new ft(.17*f,10,7),O);tt.scale.set(1.15,.72,.72),tt.position.set(1.16*f,1.72*f,0),D.add(tt);const pt=new H(new ft(.075*f,8,6),$);pt.scale.set(1,.72,.85),pt.position.set(1.3*f,1.72*f,0),D.add(pt);for(const zt of[-1,1]){const Kt=new H(new fn(.095*f,.3*f,7),O);Kt.position.set(.77*f,2.1*f,zt*.2*f),Kt.rotation.z=-.28,Kt.rotation.x=zt*.18,D.add(Kt)}for(const zt of[-1,1]){const Kt=new H(new ft(.035*f,8,6),F);Kt.position.set(1.05*f,1.91*f,zt*.235*f),D.add(Kt);const qt=new H(new ft(.009*f,6,4),new bt({color:16777215}));qt.position.set(1.075*f,1.925*f,zt*.257*f),D.add(qt)}const Lt=[];for(const zt of[-1,1])for(const Kt of[-1,1]){const qt=new Xe;qt.position.set(Kt*.43*f,.76*f,zt*.34*f);const Nt=new H(new nt(.085*f,.11*f,.43*f,7),R);Nt.position.y=-.2*f,qt.add(Nt);const Ut=new Xe;Ut.position.y=-.4*f;const dn=new H(new nt(.055*f,.075*f,.43*f,7),$);dn.position.y=-.2*f,Ut.add(dn);const Dn=new H(new ft(.075*f,7,5),$);Dn.scale.set(1.15,.55,1.25),Dn.position.y=-.43*f,Ut.add(Dn),qt.add(Ut),D.add(qt),Lt.push(qt,Ut)}const rn=new H(new ft(.16*f,9,7),O);rn.scale.set(.75,1.25,.72),rn.position.set(-.9*f,1.18*f,0),D.add(rn);for(const zt of[-1,1]){const Kt=new H(new nt(.04*f,.06*f,.68*f,7),K);Kt.position.set(.69*f,2.25*f,zt*.14*f),Kt.rotation.z=zt*.22,D.add(Kt);for(let qt=0;qt<3;qt++){const Nt=new H(new nt(.02*f,.038*f,.34*f,6),K);Nt.position.set((.56+.11*qt)*f,(2.48+.15*qt)*f,zt*(.14+.045*qt)*f),Nt.rotation.z=zt*(.55-.08*qt),D.add(Nt)}}D.scale.setScalar(1.1),D.position.set(u,W(u,x),x),D.userData={phase:S,legJoints:Lt},Re(D),De.push({g:D,x:u,z:x,r:4+B(S,41)*3,speed:1.25+B(S,42)*.8,phase:S,kind:"deer"})},Xx=(u,x)=>{const f=new Xe,S=_e(6965552,1),D=_e(3089436,1),R=new H(new ft(.22,8,6),S);R.scale.set(1.35,.9,.9),R.position.y=.72,f.add(R);const O=new H(new ft(.17,8,6),S);O.position.set(.22,.86,0),f.add(O);for(const F of[-1,1]){const ne=new H(new fn(.06,.18,6),S);ne.position.set(.17,.99,F*.09),f.add(ne)}const $=new H(new Bt(.24,.075,7,14,Math.PI*1.65),S);$.rotation.y=Math.PI/2,$.position.set(-.22,.91,0),f.add($);const K=new H(new ft(.025,6,4),D);K.position.set(.35,.9,-.12),f.add(K),f.position.set(u,W(u,x),x),Re(f,"ratatosk","Белка Рататоск"),Be.push(f),He(u,x,.28,.02),De.push({g:f,x:u,z:x,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},bi=-5,Ci=75,Fu=new Xe;Fu.userData={id:"ashgrove",label:"Роща Ясеня"};const ku=new H(new jn(10.5,40),new Ce({color:2504747,roughness:1,transparent:!0,opacity:.82}));ku.rotation.x=-Math.PI/2,ku.position.set(bi,W(bi,Ci)+.02,Ci),w.add(ku);const jx=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[u,x,f,S]of jx)Cl(bi+u,Ci+x,f,S);const Ou=new H(new Bt(6.4,.07,8,64),new Ce({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Ou.rotation.x=Math.PI/2,Ou.position.set(bi,W(bi,Ci)+.05,Ci),w.add(Ou);const zu=new H(new an(1.05,1),_e(5593941,1));zu.scale.set(1.3,.7,1.05),zu.position.set(bi,W(bi,Ci)+.65,Ci),w.add(zu),Z(Fu,0,0,"ᚱ",9430692,1.25,0);for(let u=0;u<26;u++){const x=B(u,1310)*Math.PI*2,f=2.5+B(u,1311)*7.2,S=bi+Math.cos(x)*f,D=Ci+Math.sin(x)*f,R=new H(new nt(.025,.045,.22+B(u,1312)*.28,6),_e(12039579,1));R.position.set(S,W(S,D)+.12,D),w.add(R);const O=new H(new ft(.13+B(u,1313)*.08,8,5),new Ce({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));O.scale.y=.48,O.position.set(S,W(S,D)+.34,D),w.add(O)}for(let u=0;u<16;u++){const x=B(u,1320)*Math.PI*2,f=2+B(u,1321)*7.5,S=bi+Math.cos(x)*f,D=Ci+Math.sin(x)*f,R=new H(new nt(.07,.07,.025,10),_e(9270341,.5,.55));R.rotation.x=Math.PI/2,R.position.set(S,W(S,D)+.05,D),w.add(R)}Be.push(Fu),He(bi,Ci,1,.08);const _n=62,xn=78,Rl=new Xe;Rl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Bu=new H(new jn(11.5,44),new Ce({color:2112299,roughness:1,transparent:!0,opacity:.86}));Bu.rotation.x=-Math.PI/2,Bu.position.set(_n,W(_n,xn)+.025,xn),w.add(Bu);const Pm=new Ce({map:we,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),Hu=new H(new nt(1.35,2.1,10.5,13),Pm);Hu.position.set(_n,W(_n,xn)+5.25,xn),Hu.rotation.z=-.05,w.add(Hu);for(let u=0;u<8;u++){const x=u/8*Math.PI*2+.2,f=5+B(u,1401)*4,S=new H(new nt(.25,.58,f,9),Pm);S.position.set(_n+Math.cos(x)*f*.36,W(_n,xn)+6.8+B(u,1402)*2.2,xn+Math.sin(x)*f*.36),S.rotation.z=Math.cos(x)*.8,S.rotation.x=Math.sin(x)*.8,S.rotation.y=-x,w.add(S);for(let D=0;D<4;D++){const R=new H(new ft(1+B(D+u,1403)*.55,9,6),new Ce({map:Ue,color:[2312753,2972729,3697474][(u+D)%3],roughness:1}));R.scale.y=.65,R.position.set(_n+Math.cos(x)*f*(.48+.09*D)+(B(D,u)-.5)*1.1,W(_n,xn)+8+B(u,D)*3+D*.45,xn+Math.sin(x)*f*(.48+.09*D)+(B(D+5,u)-.5)*1.1),w.add(R)}}for(let u=0;u<9;u++){const x=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][u],f=se(x,u%2?"#63d9ef":"#f0c65d"),S=new H(new qn(.7,.9),new bt({map:f,transparent:!0,depthWrite:!1,side:Yt}));S.position.set(_n+Math.sin(u*.63)*1.42,W(_n,xn)+1+u*.78,xn+Math.cos(u*.63)*1.42),S.rotation.y=Math.PI*.5-u*.16,w.add(S)}const Vu=new H(new an(1.35,1),_e(5199954,1));Vu.scale.set(1.45,.7,1.15),Vu.position.set(_n,W(_n,xn)+.75,xn+1.6),w.add(Vu),ur(_n,xn+2.1,.72);const Gu=new H(new Bt(6.7,.06,8,64),new Ce({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Gu.rotation.x=Math.PI/2,Gu.position.set(_n,W(_n,xn)+.055,xn),w.add(Gu);for(let u=0;u<22;u++){const x=B(u,1410)*Math.PI*2,f=1.8+B(u,1411)*8.2,S=_n+Math.cos(x)*f,D=xn+Math.sin(x)*f;Z(Rl,S-_n,D-xn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][u%6],u%2?6804447:14726490,.35,B(u,1412)*Math.PI)}for(let u=0;u<18;u++){const x=["ᚱ","ᚨ","ᛟ","ᚦ"][u%4],f=se(x,u%2?"#63d9ef":"#e4bd65"),S=new H(new qn(.34,.44),new bt({map:f,transparent:!0,depthWrite:!1,side:Yt}));S.position.set(_n+(B(u,1420)-.5)*12,1.4+B(u,1421)*7,xn+(B(u,1422)-.5)*12),S.userData.floatPhase=B(u,1423)*6,w.add(S)}Re(Rl,"hoddmimir","Лес Ходдмимира"),Be.push(Rl),He(_n,xn,1.2,.08);const la=43,ca=32;for(let u=0;u<4;u++)Wx(la+(u-1.5)*2.6,ca+(u%2?2.6:-2.6),1.12+B(u,1440)*.16,10+u);const Im=new H(new an(.72,1),_e(5725526,1));Im.position.set(la,W(la,ca)+.5,ca),w.add(Im);const Wu=new H(new Bt(5.8,.045,7,48),new Ce({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Wu.rotation.x=Math.PI/2,Wu.position.set(la,W(la,ca)+.035,ca),w.add(Wu),Xx(bi+5,Ci+1),((u,x)=>{const f=new Xe;f.position.set(u,W(u,x),x),f.userData={id:"forestCache",label:"Забытый тайник"};const S=new Ce({map:we,color:6968381,roughness:1}),D=new Ce({color:2760987,roughness:1}),R=new H(new nt(2,2.65,4.9,11),S);R.position.y=2.45,R.rotation.z=-.035,f.add(R);for(let ye=0;ye<7;ye++){const tt=1.3+B(ye,1250)*2.7,pt=new H(new fn(.32+B(ye,1251)*.3,tt,6),S),Lt=B(ye,1252)*Math.PI*2,rn=.55+B(ye,1253)*1.35;pt.position.set(Math.cos(Lt)*rn,4.75+tt*.42,Math.sin(Lt)*rn),pt.rotation.z=(B(ye,1254)-.5)*.55,pt.rotation.x=(B(ye,1255)-.5)*.55,f.add(pt)}const O=new H(new ft(1.18,16,10),D);O.scale.set(1,1.18,.46),O.position.set(0,2,2.08),f.add(O);const $=new H(new Bt(1.05,.16,8,28),new Ce({color:4930349,roughness:1}));$.rotation.x=Math.PI/2,$.position.set(0,2,2.12),$.scale.y=1.15,f.add($);const K=new dp({color:14211280,transparent:!0,opacity:.45});for(let ye=0;ye<6;ye++){const tt=[new G(-.95+ye*.38,1.15+ye%3*.55,2.15),new G((ye-2.5)*.2,2+ye%2*.3,2.48),new G(-.8+ye*.32,2.95+ye%3*.25,2.12)];f.add(new u1(new mn().setFromPoints(tt),K))}const F=new H(new ft(.46,10,8),new Ce({color:5978662,roughness:1}));F.scale.set(.9,1.15,.62),F.position.set(.05,1.45,2.34),f.add(F);const ne=new H(new ft(.07,7,5),new Ce({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));ne.position.set(.05,1.72,2.77),f.add(ne);for(let ye=0;ye<5;ye++){const tt=new H(new an(.11,0),new Ce({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));tt.position.set(-.38+ye*.19,1.02+ye%2*.08,2.5),f.add(tt)}const re=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ye=0;ye<6;ye++){const tt=-1.05+ye*.42,pt=se(re[ye],ye%2?"#e7bd61":"#7ce5ef"),Lt=new H(new qn(.45,.62),new bt({map:pt,transparent:!0,depthWrite:!1,side:Yt}));Lt.position.set(Math.sin(tt)*1.55,1.2+ye*.42,1.93+Math.cos(tt)*.22),Lt.rotation.y=Math.PI,f.add(Lt)}const Pe=new H(new Bt(4.15,.06,8,64),new bt({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Pe.rotation.x=Math.PI/2,Pe.position.y=.05,f.add(Pe);for(let ye=0;ye<10;ye++){const tt=ye/10*Math.PI*2;Z(f,Math.cos(tt)*3.65,Math.sin(tt)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][ye],14859617,.38,tt+.2)}for(let ye=0;ye<12;ye++){const tt=B(ye,1270)*Math.PI*2,pt=1.8+B(ye,1271)*3.3,Lt=new H(new nt(.08,.08,.025,9),new Ce({color:10190147,metalness:.55,roughness:.45}));Lt.rotation.x=Math.PI/2,Lt.position.set(Math.cos(tt)*pt,.09,Math.sin(tt)*pt),f.add(Lt)}for(let ye=0;ye<4;ye++){const tt=he(.08,.08,.75,10393476,1);tt.position.set((B(ye,1280)-.5)*5,.12,(B(ye,1281)-.5)*5),tt.rotation.y=B(ye,1282)*Math.PI,f.add(tt)}Re(f,"forestCache","Забытый тайник"),Be.push(f),He(u,x,1.75,.08)})(-72,48);const qx=(u,x,f,S,D)=>{const R=u.distanceTo(x),O=new H(new Un(f,S,R),D);return O.position.copy(u).add(x).multiplyScalar(.5),O.lookAt(x),O};function no(u,x,f,S,D,R,O){const $=new H(new an(D,1),_e(R,1));return $.scale.set(.72+B(O,1)*.62,.55+B(O,2)*.85,.68+B(O,3)*.55),$.rotation.set(B(O,4)*1.2,B(O,5)*Math.PI,B(O,6)*1.1),$.position.set(x,f,S),u.add($),$}const Yx=(u,x)=>{const f=new Xe;f.position.set(u,W(u,x),x),f.userData={id:"fallenAsh",label:"Поверженный ясень"};const S=new H(new Bt(7.8,.07,8,64),new Ce({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));S.rotation.x=Math.PI/2,S.position.y=.05,f.add(S);const D=new Ce({map:we,color:16777215,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}),R=new H(new nt(1.45,2.15,4.8,10),D);R.position.set(0,2.4,.2),R.rotation.z=-.04,f.add(R);const O=new H(new ft(.88,12,9),new bt({color:1185043}));O.scale.set(1,.95,.55),O.position.set(0,1.75,1.72),f.add(O);for(let K=0;K<7;K++){const F=-.9+K*.3,ne=2.5+B(K,1500)*2.7,re=new H(new nt(.11,.28,ne,7),D);re.position.set(Math.sin(F)*ne*.34,4+B(K,1501)*2.8,.15+Math.cos(F)*ne*.3),re.rotation.z=Math.sin(F)*.65,re.rotation.x=-Math.cos(F)*.55,re.rotation.y=F,f.add(re)}for(let K=0;K<9;K++){const F=B(K,1510)*Math.PI*2,ne=1.7+B(K,1511)*5.6;no(f,Math.cos(F)*ne,.22,Math.sin(F)*ne,.3+B(K,1512)*.45,K%3?5265490:6251613,1513+K)}for(let K=0;K<8;K++)Z(f,(B(K,1520)-.5)*5.8,(B(K,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][K%4],10473668,.42,B(K,1522)*Math.PI);const $=new H(new ft(.45,10,7),_e(5978919,1));$.scale.set(.9,1.2,.7),$.position.set(0,1.55,1.25),f.add($),Re(f,"fallenAsh","Поверженный ясень"),Be.push(f),He(u,x,1.8,.08)},$x=(u,x)=>{const f=new Xe;f.position.set(u,W(u,x),x),f.userData={id:"hunterCamp",label:"Забытая стоянка"};const S=new H(new jn(8.7,40),new Ce({color:3225644,roughness:1,transparent:!0,opacity:.78}));S.rotation.x=-Math.PI/2,S.position.y=.025,S.scale.set(1.18,.92,1),f.add(S);const D=new Xe;D.position.set(-1.45,.05,-.65),D.rotation.y=-.34,f.add(D);const R=_e(5978920,1);_e(3680030,1);const O=_e(2697768,.82,.35),$=_e(4412730,1),K=he(3.7,.26,1.65,6308141,1);K.position.y=1.05,K.rotation.z=-.08,D.add(K);for(let We=0;We<9;We++){const mt=he(2.8+B(We,501)*1.1,.16,.26,We%3?6505775:4928293,1);mt.position.set(-.25+(B(We,502)-.5)*.25,1.18+(B(We,503)-.5)*.34,-.72+We%3*.68),mt.rotation.z=(B(We,504)-.5)*.16,mt.rotation.y=(B(We,505)-.5)*.16,D.add(mt)}for(const[We,mt,Wt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Mn=new H(new Bt(Wt,.14,7,20,Math.PI*1.56),O);Mn.rotation.y=Math.PI/2,Mn.rotation.z=Wt>.8?.08:-.18,Mn.position.set(We,.9,mt),D.add(Mn);const vi=new H(new nt(.15,.18,.28,8),O);vi.rotation.z=Math.PI/2,vi.position.set(We,.9,mt),D.add(vi);for(let xs=0;xs<6;xs++){const C0=xs/6*Math.PI*2+.25,dy=new G(We+Math.cos(C0)*Wt*.82,.9+Math.sin(C0)*Wt*.82,mt+.02),fy=new G(We,.9,mt+.02);D.add(qx(fy,dy,.065,.065,O))}}const F=new H(new Un(3.8,.14,.16),O);F.position.set(0,.62,-.83),F.rotation.z=.08,D.add(F);const ne=new H(new Un(.16,.18,3.2),R);ne.position.set(1.8,.8,-.35),ne.rotation.y=.9,D.add(ne);for(let We=0;We<6;We++){const mt=new H(new ft(.28+B(We,507)*.18,7,5),$);mt.scale.set(1.4,.32,.7),mt.position.set(-1.1+We*.48,1.34+We%2*.05,-.82),D.add(mt)}const re=new Xe;re.position.set(2.85,.02,1.15),re.rotation.y=.18,f.add(re),_e(4861985,1);for(let We=0;We<4;We++){const mt=We/4*Math.PI*2+.25,Wt=he(.11,3.7,.11,4861985,1);Wt.position.set(Math.cos(mt)*1.25,1.65,Math.sin(mt)*1.25),Wt.rotation.z=Math.cos(mt)*.34,Wt.rotation.x=-Math.sin(mt)*.34,re.add(Wt)}const Pe=new H(new fn(2,3.2,4,1,!0),new Ce({color:4862247,roughness:1,side:Yt,transparent:!0,opacity:.94}));Pe.position.y=1.45,Pe.scale.set(1,.9,.82),Pe.rotation.y=.78,re.add(Pe);for(let We=0;We<9;We++){const mt=new H(new ft(.16+B(We,509)*.14,6,5),$);mt.scale.set(1.5,.35,.8),mt.position.set((B(We,510)-.5)*2.4,1+B(We,511)*1.9,(B(We,512)-.5)*1.8),re.add(mt)}const ye=he(1.05,1.55,.05,3088668,1);ye.position.set(0,.72,1.65),ye.rotation.y=.16,re.add(ye),ur(u+.1,x+.45,.78);const tt=new Vi(16751173,1,8,2);tt.position.set(.1,1.7,.45),f.add(tt);const pt=new Xe;pt.position.set(-3.15,.5,1.25),pt.rotation.y=.8,pt.rotation.z=-.22,f.add(pt);const Lt=new H(new jn(1.05,16),new Ce({color:3882041,roughness:.85,metalness:.55,side:Yt}));Lt.rotation.x=-Math.PI/2,Lt.scale.y=.8,pt.add(Lt);const rn=new H(new Bt(1.03,.11,7,18),O);rn.rotation.x=-Math.PI/2,rn.scale.y=.8,pt.add(rn);const zt=new H(new nt(.24,.31,.22,8),O);zt.rotation.x=Math.PI/2,zt.position.set(.18,0,.08),pt.add(zt);const Kt=he(.05,.035,1.15,1513494,1);Kt.position.set(-.28,.025,.05),Kt.rotation.y=.42,pt.add(Kt),_e(2960425,.65,.45);const qt=(We,mt,Wt)=>{const Mn=new Xe;Mn.position.set(We,.18,mt),Mn.rotation.y=Wt;const vi=he(.09,.09,1.55,5059362,1);vi.rotation.x=Math.PI/2,vi.position.z=.15,Mn.add(vi);const xs=he(.55,.13,.28,3158061,.55);xs.position.set(0,.02,-.62),xs.rotation.y=-.25,Mn.add(xs),f.add(Mn)};qt(-1.9,3.15,.45),qt(4.15,-.65,-.8);const Nt=he(.11,.11,.95,5388068,1);Nt.rotation.y=.55,Nt.position.set(-2.1,.16,2.65),f.add(Nt);const Ut=new H(new ft(.48,9,7),new Ce({color:5978919,roughness:1}));Ut.scale.set(.9,1.15,.65),Ut.position.set(3.55,.48,2.65),f.add(Ut);const dn=new H(new Bt(.33,.035,6,18,Math.PI*1.5),_e(3023129,1));dn.rotation.x=Math.PI/2,dn.position.set(3.55,.93,2.65),f.add(dn);for(let We=0;We<15;We++){const mt=new H(new nt(.09,.09,.025,10),new Ce({color:9335877,metalness:.55,roughness:.45})),Wt=B(We,520)*Math.PI*2,Mn=2.1+B(We,521)*3.7;mt.position.set(Math.cos(Wt)*Mn,.13,Math.sin(Wt)*Mn),mt.rotation.x=Math.PI/2,f.add(mt)}for(let We=0;We<5;We++){const mt=he(.08,.08,.9,11182733,1);mt.position.set(3.2+B(We,522)*2.4,.18,-2.7+B(We,523)*1.7),mt.rotation.y=B(We,524)*Math.PI,mt.rotation.z=(B(We,525)-.5)*.25,f.add(mt)}const Dn=new H(new Bt(4.7,.055,7,64),new bt({color:9160135,transparent:!0,opacity:.5}));Dn.rotation.x=Math.PI/2,Dn.position.y=.075,f.add(Dn);const si=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];si.forEach((We,mt)=>{const Wt=mt/si.length*Math.PI*2;Z(f,Math.cos(Wt)*4.15,Math.sin(Wt)*4.15,We,mt%3===0?13215066:7977149,.55,Wt+.3)});for(let We=0;We<18;We++)no(f,(B(We,530)-.5)*8,.18,(B(We,531)-.5)*7,.22+B(We,532)*.34,We%4===0?6121048:5133389,530+We);for(let We=0;We<12;We++){const mt=he(.12,.12,1.7+B(We,535)*2,3811872,1);mt.position.set((B(We,536)-.5)*8,.11,(B(We,537)-.5)*8),mt.rotation.y=B(We,538)*Math.PI,mt.rotation.z=(B(We,539)-.5)*.2,f.add(mt)}Re(f,"hunterCamp","Забытая стоянка"),Be.push(f),He(u,x,1.9,.1)},Kx=(u,x,f,S,D,R)=>{const O=new Xe;O.position.set(u,W(u,x),x);const $=7442040,K=_e(4412730,1),F=new H(new Bt(f,.07,8,64),new Ce({color:$,emissive:$,emissiveIntensity:.65,transparent:!0,opacity:.42}));F.rotation.x=Math.PI/2,F.position.y=.045,O.add(F);const ne=Math.floor(f/1.7);for(let re=0;re<ne;re++){const Pe=B(re,u*11+x)*Math.PI*2,ye=f*.35+B(re,x*17)*f*.45;no(O,Math.cos(Pe)*ye,.2,Math.sin(Pe)*ye,.34+B(re,33)*.32,5266514,800+re)}{for(let re=0;re<8;re++){const Pe=new H(new ft(.34+B(re,600)*.25,7,5),K);Pe.scale.y=.35,Pe.position.set((B(re,601)-.5)*f,.16,(B(re,602)-.5)*f),O.add(Pe)}for(let re=0;re<6;re++)Z(O,(B(re,603)-.5)*f*.9,(B(re,604)-.5)*f*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][re],7907492,.42,B(re,605)*Math.PI)}Re(O,S,D),Be.push(O)};$x(68,8),Kx(-45,75,9.5,"deepGrove","Глубокая роща"),Yx(-30,15);const Zx=(u,x)=>{const f=document.createElement("canvas");f.width=f.height=256;const S=f.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=x,S.shadowBlur=24,S.fillStyle=x,S.font="bold 156px serif",S.fillText(u,128,132),S.shadowBlur=6,S.globalAlpha=.72,S.font="bold 126px serif",S.fillText(u,128,132);const D=new xo(f);return D.colorSpace=Fn,D.anisotropy=4,D},Pl=(u,x,f,S,D,R,O=.7,$=0)=>{const K="#"+R.toString(16).padStart(6,"0"),F=new bt({map:Zx(x,K),transparent:!0,depthWrite:!1,side:Yt}),ne=new H(new qn(O,O),F);return ne.position.set(f,S,D),ne.rotation.set(0,$,0),u.add(ne),ne},Il=(u,x,f,S=.075)=>{const D=new fp(x),R=new H(new ja(D,42,S,6,!1),new bt({color:f,transparent:!0,opacity:.9}));u.add(R);const O=new H(new ja(D,42,S*2.5,6,!1),new bt({color:f,transparent:!0,opacity:.12,depthWrite:!1}));return u.add(O),R},Xu=50,ju=-62,Dr=new Xe;Dr.position.set(Xu,W(Xu,ju),ju),Dr.userData={id:"forestThread",label:"Разорванная нить"};const qu=new H(new Bt(2.4,.05,7,48),new Ce({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));qu.rotation.x=Math.PI/2,qu.position.y=.055,Dr.add(qu);const Yu=new H(new an(1,1),_e(5326925,1));Yu.scale.set(.9,1.45,.72),Yu.position.y=.95,Dr.add(Yu),Pl(Dr,"ᛏ",0,1.2,.76,12614830,.9,0);const Jx=[new G(-.9,1.8,.3),new G(0,3.1,.1),new G(1,2,-.2)];Il(Dr,Jx,14268630,.06),Re(Dr,"forestThread","Разорванная нить"),Be.push(Dr),He(Xu,ju,1.1,.08);const An=new Xe,$u=58,Ku=-28;An.position.set($u,W($u,Ku),Ku),An.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const Qx=new Ce({color:5858398,roughness:.96,metalness:.04}),Lm=new Ce({color:3423032,roughness:.92,metalness:.08}),ey=new Ce({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),Zu=new H(new jn(13.2,52),new Ce({color:5402692,roughness:1,transparent:!0,opacity:.94}));Zu.rotation.x=-Math.PI/2,Zu.position.y=.018,An.add(Zu);for(const[u,x,f]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const S=new H(new Bt(u,x,8,96),new bt({color:15780190,transparent:!0,opacity:f,depthWrite:!1}));S.rotation.x=Math.PI/2,S.position.y=.065,An.add(S)}const ty=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let u=0;u<18;u++){const x=u/18*Math.PI*2;Z(An,Math.cos(x)*8.9,Math.sin(x)*8.9,ty[u],15779422,.58,x+.15)}const Dm=new H(new nt(3.15,3.45,.45,12),Lm);Dm.position.y=.24,An.add(Dm);for(let u=0;u<16;u++){const x=u/16*Math.PI*2,f=2.65+(B(u,2001)-.5)*.22,S=new H(new an(.72+B(u,2002)*.22,1),Qx);S.scale.set(1.15+B(u,2003)*.25,.72+B(u,2004)*.22,.88+B(u,2005)*.24),S.position.set(Math.cos(x)*f,.55+B(u,2006)*.12,Math.sin(x)*f),S.rotation.set(B(u,2007)*.25,x+B(u,2008)*.4,B(u,2009)*.2),An.add(S)}const Ju=new H(new jn(2.25,40),ey);Ju.rotation.x=-Math.PI/2,Ju.position.y=.72,An.add(Ju);for(let u=0;u<3;u++){const x=new H(new Bt(.65+u*.48,.025,6,48),new bt({color:u===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));x.rotation.x=Math.PI/2,x.position.y=.735,An.add(x)}const Nm=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],Um=[];for(let u=0;u<3;u++){const x=Nm[u],f=new Xe;f.position.set(x.x,0,x.z),f.rotation.y=u===0?.22:u===2?-.22:Math.PI;const S=new H(new fn(.72,.95,9),new Ce({color:x.body,roughness:.98}));S.position.y=.72,f.add(S);const D=new H(new fn(.48,.72,8),new Ce({color:x.cloak,roughness:.98}));D.position.set(0,.86,.43),D.rotation.x=.05,f.add(D);const R=new H(new nt(.42,.58,.12,9),new Ce({color:x.cloak,roughness:1}));R.position.set(0,1.23,0),R.rotation.z=.08,f.add(R);const O=new H(new ft(.32,12,9),new Ce({color:13079144,roughness:.9}));O.position.y=1.62,f.add(O);const $=new H(new ft(.38,10,8),new Ce({color:x.hair,roughness:1}));$.scale.set(1,.95,.9),$.position.set(0,1.68,-.08),f.add($);for(const re of[-1,1]){const Pe=new H(new nt(.075,.105,.62,7),new Ce({color:x.cloak,roughness:1}));Pe.position.set(re*.47,1.03,.18),Pe.rotation.z=re*.42,Pe.rotation.x=-.18,f.add(Pe)}const K=new H(new nt(.38,.44,.18,9),Lm);K.position.y=.25,f.add(K);const F=new H(new nt(.035,.055,.9,8),new Ce({color:6964008,roughness:.9}));F.position.set(.58,1.08,.38),F.rotation.z=.62,f.add(F);const ne=new H(new Bt(.12,.025,6,14),new Ce({color:9265980,roughness:.85}));ne.rotation.x=Math.PI/2,ne.position.set(.75,.82,.48),f.add(ne),f.position.y=.02,An.add(f),Um.push(new G(x.x+.72,1.25,x.z+.48))}const Fm=[14674162,16765022,13192536];for(let u=0;u<3;u++){const x=Um[u],f=[];for(let S=0;S<=30;S++){const D=S/30,R=x.y+D*7.3,O=D*Math.PI*3+Nm[u].phase,$=.35+.72*D;f.push(new G(x.x*(1-D)+Math.cos(O)*$*D,x.y*(1-D)+R*D,x.z*(1-D)+Math.sin(O)*$*D))}Il(An,f,Fm[u],.085)}for(let u=0;u<3;u++){const x=[];for(let f=0;f<=32;f++){const S=f/32,D=S*Math.PI*2,R=1.65+.42*Math.sin(D*2+u*.9);x.push(new G(Math.cos(D+u*2.094)*R,8.35+.45*Math.sin(D*3+u),Math.sin(D+u*2.094)*R))}Il(An,x,Fm[u],.065)}const km=new Vi(16767096,1.25,11,2);km.position.set(0,4.2,1),An.add(km);for(let u=0;u<20;u++){const x=B(u,2030)*Math.PI*2,f=3.8+B(u,2031)*8,S=Math.cos(x)*f,D=Math.sin(x)*f,R=new H(new nt(.018,.028,.22,5),new Ce({color:5666109,roughness:1}));R.position.set(S,.11,D),An.add(R);const O=new H(new ft(.07,7,5),new bt({color:u%3===0?16770208:u%3===1?15972816:14478591}));O.position.set(S,.25,D),An.add(O)}for(let u=0;u<10;u++){const x=B(u,2040)*Math.PI*2,f=4+B(u,2041)*8,S=new H(new an(.12+B(u,2042)*.08,0),new Ce({color:10189631,metalness:.65,roughness:.4}));S.position.set(Math.cos(x)*f,.1,Math.sin(x)*f),An.add(S)}Re(An,"threeThreads","Камень Трёх Нитей — Колодец Урд"),Be.push(An),He($u,Ku,3.4,.1);const gi=new Xe,Qu=5,ed=-70;gi.position.set(Qu,W(Qu,ed),ed),gi.userData={id:"powerCircle",label:"Круг Силы"};const td=new H(new jn(10.8,48),new Ce({color:1911590,roughness:1,transparent:!0,opacity:.94}));td.rotation.x=-Math.PI/2,td.position.y=.02,gi.add(td);for(const[u,x,f,S]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const D=new H(new Bt(u,x,8,96),new bt({color:f,transparent:!0,opacity:S,depthWrite:!1}));D.rotation.x=Math.PI/2,D.position.y=.07,gi.add(D)}for(let u=0;u<20;u++){const x=u/20*Math.PI*2,f=5.1+u%2*2.2;Z(gi,Math.cos(x)*f,Math.sin(x)*f,St[(u+2)%St.length],u%2?9140479:6545396,.38,x+.2)}const Ll=new H(new an(1.25,1),new Ce({color:2435371,roughness:.9,metalness:.16}));Ll.scale.set(.9,2.8,.7),Ll.position.y=2.45,Ll.rotation.set(.05,.2,-.08),gi.add(Ll);const ny=Pl(gi,"ᛟ",0,2.55,.78,16766302,1.35,0);ny.rotation.x=0;const Om=new Vi(10251519,1.7,10,2);Om.position.set(0,2.5,.8),gi.add(Om);for(let u=0;u<12;u++){const x=u/12*Math.PI*2,f=4.1+B(u,1801)*4.5,S=no(gi,Math.cos(x)*f,.3,Math.sin(x)*f,.42+B(u,1802)*.42,u%3===0?5858141:4870476,1803+u);if(u%4===0){const D=new H(new fn(.18,.9,5),new bt({color:u%2?9336063:6938111,transparent:!0,opacity:.75}));D.position.set(S.position.x,.62,S.position.z),gi.add(D)}}for(let u=0;u<9;u++){const x=B(u,1820)*Math.PI*2,f=2.2+B(u,1821)*6.7,S=new H(new ft(.045+B(u,1822)*.04,6,5),new bt({color:u%2?7531007:11697663,transparent:!0,opacity:.7}));S.position.set(Math.cos(x)*f,.4+B(u,1823)*2.6,Math.sin(x)*f),gi.add(S)}Re(gi,"powerCircle","Круг Силы"),Be.push(gi),He(Qu,ed,2.2,.1);const Ri=new Xe,nd=-72,id=-48;Ri.position.set(nd,W(nd,id),id),Ri.userData={id:"whisperStone",label:"Камень Шёпота"};const rd=new H(new jn(8.6,40),new Ce({color:1516830,roughness:1,transparent:!0,opacity:.95}));rd.rotation.x=-Math.PI/2,rd.position.y=.02,Ri.add(rd);const sd=new H(new Bt(5.8,.09,8,96),new bt({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));sd.rotation.x=Math.PI/2,sd.position.y=.075,Ri.add(sd);const Dl=new H(new an(2.1,1),new Ce({color:1382171,roughness:.8,metalness:.35}));Dl.scale.set(1.15,1.35,.82),Dl.position.y=1.75,Dl.rotation.set(.05,.25,-.08),Ri.add(Dl);for(const u of[-1,1]){const x=[];for(let f=0;f<=14;f++){const S=f/14,D=S*Math.PI*1.15;x.push(new G(u*(1.35+.72*Math.sin(D)),2.45+.85*S+.38*Math.sin(D),-.15+.78*Math.cos(D)-.78))}Il(Ri,x,3422020,.18)}const Nl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Nl.forEach((u,x)=>{const f=x/Nl.length*Math.PI*2;Pl(Ri,u,Math.cos(f)*3.5,1,Math.sin(f)*3.5,x%2?7265535:12088575,.46,f+Math.PI/2)});for(let u=0;u<9;u++){const x=B(u,1901)*Math.PI*2,f=.7+B(u,1902)*1.7,S=Pl(Ri,Nl[u%Nl.length],Math.cos(x)*f,3.4+u*.48,Math.sin(x)*f,u%2?7988991:12614911,.42+B(u,1903)*.22,x);S.rotation.x=(B(u,1904)-.5)*.35}const zm=new Vi(10245631,1.5,9,2);zm.position.set(0,2.2,.5),Ri.add(zm);for(let u=0;u<11;u++){const x=B(u,1920)*Math.PI*2,f=4.8+B(u,1921)*2.6;no(Ri,Math.cos(x)*f,.2,Math.sin(x)*f,.28+B(u,1922)*.38,4541258,1923+u)}Re(Ri,"whisperStone","Камень Шёпота"),Be.push(Ri),He(nd,id,2.5,.1);const bn=75,yn=30,nn=new Xe;nn.position.set(bn,W(bn,yn),yn);const iy=_e(5986899,1),Bm=he(7.8,.42,5.8,5591885,1);Bm.position.y=.22,nn.add(Bm);const Hm=he(7.4,2.8,.3,6439727,1);Hm.position.set(0,1.4,-2.7),nn.add(Hm);const Vm=he(.3,2.8,5.4,6439727,1);Vm.position.set(-3.7,1.4,0),nn.add(Vm);const Gm=he(.3,2.8,5.4,6439727,1);Gm.position.set(3.7,1.4,0),nn.add(Gm);const Wm=he(2.55,2.8,.3,6439727,1);Wm.position.set(-2.43,1.4,2.7),nn.add(Wm);const Xm=he(2.55,2.8,.3,6439727,1);Xm.position.set(2.43,1.4,2.7),nn.add(Xm);const jm=he(2.3,.72,.3,6439727,1);jm.position.set(0,2.44,2.7),nn.add(jm);const qm=he(.16,2.18,.34,2826523,1);qm.position.set(-.66,1.28,2.72),nn.add(qm);const Ym=he(.16,2.18,.34,2826523,1);Ym.position.set(.66,1.28,2.72),nn.add(Ym);const $m=he(1.48,.16,.34,2826523,1);$m.position.set(0,2.34,2.72),nn.add($m);const io=new Xe;io.position.set(-.57,0,2.72),nn.add(io);const Km=he(1.14,2.05,.12,3154457,1);Km.position.set(.57,1.28,0),io.add(Km);const Zm=new H(new ft(.08,8,6),_e(11831883,1));Zm.position.set(.86,1.25,.1),io.add(Zm);const ry=new Ce({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const u of[-2.35,2.35]){const x=he(1.25,1,.12,2826523,1);x.position.set(u,1.72,2.78),nn.add(x);const f=new H(new Un(.98,.72,.06),ry);f.position.set(u,1.72,2.86),nn.add(f);const S=he(.07,.78,.1,2826523,1);S.position.set(u,1.72,2.91),nn.add(S);const D=he(1.08,.07,.1,2826523,1);D.position.set(u,1.72,2.91),nn.add(D)}const Jm=new Ce({map:Ne,color:2697767,roughness:.98,side:Yt}),ua=new H(new qn(4.25,6.25),Jm),da=new H(new qn(4.25,6.25),Jm);ua.rotation.x=Math.PI/2,da.rotation.x=Math.PI/2,ua.rotation.z=.62,da.rotation.z=-.62,ua.position.set(-1.02,3.95,0),da.position.set(1.02,3.95,0),nn.add(ua,da);const od=he(.22,.22,6.45,2695965,1);od.position.y=4.75,nn.add(od);const ad=new H(new Un(.48,1.35,.48),iy);ad.position.set(1.55,4.8,-.65),nn.add(ad);const ld=he(.62,.1,.62,3420461,1);ld.position.set(1.55,5.48,-.65),nn.add(ld);const Qm=he(2.35,.18,1,6636845,1);Qm.position.set(0,.62,3.15),nn.add(Qm);const e0=he(1.55,.16,.48,5849131,1);e0.position.set(0,.3,3.58),nn.add(e0),Re(nn,"heroHome","Домик героя"),Be.push(nn),Ve(bn,yn-2.72,7.4,.3,0,.05),Ve(bn-3.72,yn,.3,5.45,0,.05),Ve(bn+3.72,yn,.3,5.45,0,.05),Ve(bn-2.43,yn+2.72,2.55,.3,0,.05),Ve(bn+2.43,yn+2.72,2.55,.3,0,.05);const on=new Xe;on.position.set(bn,W(bn,yn),yn),on.visible=!1;const t0=he(7,.16,5,4928548,1);t0.position.y=.5,on.add(t0);const n0=he(7,2.65,.18,4139808,1);n0.position.set(0,1.8,-2.45),on.add(n0);const i0=he(.18,2.65,4.9,4139808,1);i0.position.set(-3.45,1.8,0),on.add(i0);const r0=he(.18,2.65,4.9,4139808,1);r0.position.set(3.45,1.8,0),on.add(r0);const s0=he(2.35,2.65,.18,4139808,1);s0.position.set(-2.42,1.8,2.45),on.add(s0);const o0=he(2.35,2.65,.18,4139808,1);o0.position.set(2.42,1.8,2.45),on.add(o0);const a0=he(2.5,.04,2.1,7162673,1);a0.position.set(-.15,.6,.25),on.add(a0);const l0=he(1.65,.65,2.15,4008478,1);l0.position.set(-2.15,.88,-1.25),on.add(l0);const c0=he(1.48,.12,1.35,7033152,1);c0.position.set(-2.15,1.27,-.92),on.add(c0);const u0=he(1.28,.18,.46,11903114,1);u0.position.set(-2.15,1.38,-1.95),on.add(u0);const d0=he(1.65,.12,1.05,5255969,1);d0.position.set(.85,1.15,-.15),on.add(d0);for(const[u,x]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const f=he(.1,.7,.1,3679515,1);f.position.set(u,.72,x),on.add(f)}const f0=he(1.25,.8,.72,5978660,1);f0.position.set(2.1,.95,-1.7),on.add(f0);const h0=he(1.9,.14,.45,5978660,1);h0.position.set(1.35,2,-2.25),on.add(h0);for(const u of[.75,1.35,1.95]){const x=new H(new nt(.08,.1,.35,8),_e(7304016,1));x.position.set(u,2.24,-2.22),on.add(x)}const p0=he(1.35,.55,.7,5920078,1);p0.position.set(2.15,.78,.95),on.add(p0);const m0=new H(new fn(.28,.72,8),new Ce({color:16744744,emissive:16731402,emissiveIntensity:4}));m0.position.set(2.15,1.42,.95),on.add(m0);const g0=new Vi(16747068,2.2,8,2);g0.position.set(2.15,1.7,.95),on.add(g0),Re(on,"heroHomeInterior","Дом героя — внутри"),Be.push(on);const gs=new Xe;gs.position.set(bn,W(bn,yn),yn);const cd=new H(new Bt(6.2,.055,7,48),new Ce({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));cd.rotation.x=Math.PI/2,cd.position.y=.035,gs.add(cd);for(const[u,x]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const f=he(.18,1,.18,4797735,1);f.position.set(u,.5,x),gs.add(f)}for(const u of[-2.4,2.9]){const x=he(10.2,.12,.12,6308139,1);x.position.set(0,.59,u),gs.add(x)}const sy=_e(6906972,1);for(let u=0;u<7;u++){const x=new H(new nt(.32,.4,.12,7),sy);x.position.set(0,.08,4.1+u*.72),x.rotation.y=u*.4,gs.add(x)}ur(bn-2.4,yn+4.8,.48).scale.setScalar(.72),Re(gs,"heroHomeYard","Двор домика героя"),Be.push(gs),ur(68,8,.75).scale.setScalar(.72);const v0=new H(new nt(.65,.8,.7,7),_e(5327426,1));v0.position.set(68,W(68,8)+.35,6.5),w.add(v0);for(const[u,x]of[[66,10],[70,10],[66,6],[70,6]]){const f=he(.16,1.15,.16,4797735,1);f.position.set(u,W(u,x)+.57,x),w.add(f)}const Ul=new Xe;Ul.position.set(-30,W(-30,15),15);const ud=new H(new nt(.5,.62,7,8),new Ce({map:we,color:4995371,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.034}));ud.rotation.z=Math.PI/2,ud.position.y=.5,Ul.add(ud);const dd=new H(new nt(.53,.53,.12,12),_e(7693389,1));dd.rotation.z=Math.PI/2,dd.position.set(3.5,.5,0),Ul.add(dd),w.add(Ul);for(let u=0;u<7;u++){const x=new H(new an(.14,0),_e(6913394,1)),f=u/7*Math.PI*2;x.position.set(-45+Math.cos(f)*4,.12+W(-45+Math.cos(f)*4,75+Math.sin(f)*4),75+Math.sin(f)*4),w.add(x)}for(let u=0;u<95;u++){const x=B(u,77)*Math.PI*2,f=68+B(u,91)*27,S=Math.cos(x)*f,D=Math.sin(x)*f+2,O=[[bi,Ci,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([$,K,F])=>Math.hypot(S-$,D-K)<F);Math.abs(S+57)>9&&!O&&Gx(S,D,.78+B(u,13)*.82)}Cl(-10,18,1.55,!1),Cl(13,24,1.7,!1),Cl(-31,-12,2.15,!0);for(let u=0;u<110;u++){const x=B(u,701)*Math.PI*2,f=15+B(u,702)*50,S=Math.cos(x)*f,D=Math.sin(x)*f+3;if(Math.abs(S)<10&&Math.abs(D)<16)continue;const R=new Xe;R.position.set(S,W(S,D),D);for(let O=0;O<3;O++){const $=new H(new fn(.025,.38+B(O,u)*.28,4),new Ce({color:O===1?5466175:4282935,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012}));$.position.set((O-1)*.09,.18,(B(O*3,u)-.5)*.12),$.rotation.z=(O-1)*.22,R.add($)}w.add(R)}for(let u=0;u<80;u++){const x=-88+B(u,101)*176,f=-88+B(u,111)*176;if(Math.hypot(x,f+2)>30){const S=new H(new fn(.08,.55+B(u,121)*.7,5),new Ce({color:4941888,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.012}));S.position.set(x,W(x,f)+.3,f),w.add(S)}}for(let u=0;u<72;u++){const x=-84+B(u,150)*168,f=-82+B(u,151)*164,S=Math.hypot(x-1,f+1)<24,D=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([$,K,F])=>Math.hypot(x-$,f-K)<F);if(S||D)continue;const R=.1+B(u,152)*.24,O=new H(new an(R,1),new Ce({color:u%3===0?5593940:6710877,roughness:.98,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.018}));O.scale.set(1+B(u,153)*1.3,.55+B(u,154)*.7,.72+B(u,155)*1.15),O.rotation.set(B(u,156)*1.7,B(u,157)*Math.PI,B(u,158)*1.7),O.position.set(x,W(x,f)+R*.22,f),O.castShadow=!0,O.receiveShadow=!0,w.add(O)}for(let u=0;u<46;u++){const x=-82+B(u,160)*164,f=-80+B(u,161)*160;if(Math.hypot(x-1,f+1)<28)continue;const S=.55+B(u,162)*1.15,D=new H(new nt(.025,.055,S,6),_e(4600356,.98));D.position.set(x,W(x,f)+.045,f),D.rotation.set(.05+B(u,163)*.35,B(u,164)*Math.PI,Math.PI*.5+(B(u,165)-.5)*.5),w.add(D)}const oy=new Ce({color:7308881,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.008}),ay=new Ce({color:8491867,roughness:1,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.006}),fd=new Ce({map:we,color:5914669,roughness:.99,roughnessMap:J.rough,bumpMap:J.height,bumpScale:.026});for(let u=0;u<54;u++){const x=B(u,920)*Math.PI*2,f=18+B(u,921)*63,S=Math.cos(x)*f,D=Math.sin(x)*f+3;if(Math.abs(S)<12&&Math.abs(D)<20)continue;const R=new Xe;R.position.set(S,W(S,D)+.018,D);const O=.35+B(u,922)*.75,$=.28+B(u,923)*.65;for(let K=0;K<2;K++){const F=new H(new jn(1,9),K%2?ay:oy);F.rotation.x=-Math.PI/2,F.scale.set(O*(1-K*.18),$*(1-K*.12),1),F.position.set((B(u+K,924)-.5)*.32,.006+K*.003,(B(u+K,925)-.5)*.28),R.add(F)}w.add(R)}const _0=new Ce({color:5533764,roughness:1}),x0=new Ce({color:7309137,roughness:1});for(let u=0;u<72;u++){const x=B(u,930)*Math.PI*2,f=20+B(u,931)*61,S=Math.cos(x)*f,D=Math.sin(x)*f+3;if(Math.abs(S)<13&&Math.abs(D)<21)continue;const R=new Xe;R.position.set(S,W(S,D),D);const O=.55+B(u,932)*.8;for(let $=0;$<3;$++){const K=new H(new nt(.018*O,.035*O,.55*O,5),$===1?x0:_0);K.position.set(($-1)*.12*O,.27*O,(B(u,$+933)-.5)*.1*O),K.rotation.z=($-1)*.3,K.rotation.x=(B(u,$+936)-.5)*.22,R.add(K);for(let F=0;F<3;F++){const ne=new H(new fn(.045*O,.18*O,5),$===1?x0:_0);ne.rotation.z=($-1)*.3+(F%2?.18:-.18),ne.rotation.x=Math.PI*.5,ne.position.set(($-1)*.12*O+(F-1)*.075*O,.3*O+F*.1*O,(B(u,F+940)-.5)*.12*O),R.add(ne)}}w.add(R)}const hd=(u,x,f,S)=>{const D=W(u,x),R=new Xe;R.position.set(u,D,x);const O=5+Math.floor(B(S,950)*3);for(let $=0;$<O;$++){const K=$/O*Math.PI*2+B($,S+951)*.32,F=(1.8+B($,S+952)*2.7)*f,ne=(.11+B($,S+953)*.12)*f,re=new H(new nt(ne*.42,ne,F,7),fd);re.position.set(Math.cos(K)*F*.46,.13*f,Math.sin(K)*F*.46),re.rotation.z=Math.PI/2,re.rotation.y=-K,re.rotation.x=(B($,S+954)-.5)*.16,R.add(re)}w.add(R)};hd(-10,18,1.55,11),hd(13,24,1.7,23),hd(-31,-12,2.15,37);for(let u=0;u<22;u++){const x=B(u,960)*Math.PI*2,f=27+B(u,961)*55,S=Math.cos(x)*f,D=Math.sin(x)*f+3;if(Math.abs(S)<15&&Math.abs(D)<22)continue;const R=.55+B(u,962)*.8,O=new Xe;O.position.set(S,W(S,D),D);const $=new H(new nt(.18*R,.3*R,.45*R,7),fd);$.position.y=.22*R,O.add($);const K=new H(new nt(.19*R,.19*R,.035*R,7),_e(8416080,1));K.position.y=.45*R,O.add(K),w.add(O)}for(let u=0;u<18;u++){const x=B(u,970)*Math.PI*2,f=24+B(u,971)*58,S=Math.cos(x)*f,D=Math.sin(x)*f+3;if(Math.abs(S)<14&&Math.abs(D)<21)continue;const R=1+B(u,972)*2,O=new H(new nt(.045,.1,R,6),fd);O.position.set(S,W(S,D)+.07,D),O.rotation.set(.08+B(u,973)*.22,B(u,974)*Math.PI,Math.PI/2+(B(u,975)-.5)*.5),w.add(O)}const vs=new Xe;vs.position.set(29,W(29,25),25),vs.userData={id:"tower",label:"Сторожевая башня"};for(const u of[-2,2])for(const x of[-2,2]){const f=he(.35,7,.35,3942685,1);f.position.set(u,3.5,x),vs.add(f)}const y0=he(5,.35,5,6833965,1);y0.position.y=5.8,vs.add(y0);const M0=new H(new fn(3.8,2.7,4),_e(2696482,1));M0.position.y=8,vs.add(M0),Re(vs,"tower","Сторожевая башня"),Be.push(vs),Ve(29,25,4.8,4.8,0,.08);const fa=(u,x,f,S,D,R)=>{const O=new Xe;O.userData={id:f,label:S,phase:R,baseX:u,baseZ:x};const $=new H(new ai(.32,.78,4,8),_e(D,.9));$.position.y=.85,O.add($);const K=new H(new ft(.25,12,8),_e(13210736,.9));K.position.y=1.58,O.add(K);const F=he(.7,.9,.15,2565407,1);F.position.set(0,.82,-.27),O.add(F),O.position.set(u,W(u,x),x),Re(O,f,S),Be.push(O),X.push(O)};fa(9,-8,"elder","Старейшина",7558719,.4),fa(-6,-3,"blacksmith","Кузнец",6044459,1.5),fa(21,1,"hunter","Охотник",4215359,2.4),fa(5,10,"villager","Житель Мидгарда",5858125,3.4),fa(-16,4,"villager2","Житель деревни",6638394,4.2);const ly=new bt({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),pd=new Xe;for(let u=0;u<34;u++){const x=new H(new ft(.9+B(u,810)*2.2,8,6),ly);x.position.set(-88+B(u,811)*176,1.8+B(u,812)*2.2,-72+B(u,813)*144),pd.add(x)}w.add(pd);const _s=fb(t);w.add(_s);const dr=_s.userData.anim,w0=new wS,md=new it,S0=u=>{var S,D,R,O;if((D=(S=u.target)==null?void 0:S.closest)!=null&&D.call(S,".mid3d-ui"))return;const x=q.domElement.getBoundingClientRect();md.x=(u.clientX-x.left)/x.width*2-1,md.y=-((u.clientY-x.top)/x.height)*2+1,w0.setFromCamera(md,k);const f=w0.intersectObjects(Be,!0)[0];if(f){let $=f.object;for(;$.parent&&!((R=$.userData)!=null&&R.id);)$=$.parent;(O=$.userData)!=null&&O.id&&e($.userData.id)}};q.domElement.addEventListener("pointerup",S0);const cy=u=>{v.current=u,_(u),l(""),on.visible=u,ua.visible=!u,da.visible=!u,od.visible=!u,ad.visible=!u,ld.visible=!u,u?(o.current.x=bn,o.current.z=yn+.95,d.current.x=0,d.current.z=-1,io.rotation.y=-Math.PI/2):(o.current.x=bn,o.current.z=yn+3.75,d.current.x=0,d.current.z=1,io.rotation.y=0),_s.position.set(o.current.x,W(o.current.x,o.current.z)+.04,o.current.z)};y.current=cy;const uy=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],E0=()=>{const u=Math.max(1,A.clientWidth),x=Math.max(1,A.clientHeight);k.aspect=u/x,k.updateProjectionMatrix(),q.setSize(u,x,!1)};E0();const T0=new ResizeObserver(E0);T0.observe(A);let gd=0,A0=performance.now();const b0=u=>{const x=Math.min(.05,(u-A0)/1e3);A0=u;const f=o.current,S=Math.hypot(f.dx,f.dz);if(S>.05){const F=6.2*x;pe(f,f.x+f.dx/S*F,f.z+f.dz/S*F),_s.rotation.y=Math.atan2(f.dx,f.dz),d.current.x=f.dx/S,d.current.z=f.dz/S,h(!0)}else h(!1);const D=W(f.x,f.z);if(_s.position.set(f.x,D+.04,f.z),dr){const F=u*.011+dr.phase,ne=S>.05?Math.sin(F)*.58:0,re=S>.05?Math.sin(F+Math.PI)*.42:0;dr.legL.rotation.x=ne,dr.legR.rotation.x=-ne,dr.armL.upper.rotation.x=re,dr.armR.upper.rotation.x=-re,dr.armL.elbow.rotation.x=-Math.abs(re)*.35,dr.armR.elbow.rotation.x=-Math.abs(re)*.35,dr.weapon.rotation.z=-.12+(S>.05?Math.sin(F)*.035:0)}const R=d.current,O=v.current?new G(f.x-R.x*1,D+3.65,f.z-R.z*1):new G(f.x-R.x*2,D+7.2,f.z-R.z*2+11.8);k.position.lerp(O,v.current?.09:.055),k.lookAt(f.x+(v.current?R.x*.9:R.x*1.9),D+(v.current?1.25:1.2),f.z+(v.current?R.z*.9:R.z*1.9));let $="",K="";if(v.current)f.z>yn+1.72&&($="Дверь — выйти из дома",K="heroHomeExit");else for(const F of uy)if(Math.hypot(f.x-F.x,f.z-F.z)<F.r){$=F.label,K=F.id;break}l($?`${$}|${K}`:""),ke.forEach(F=>{const ne=.72+.28*Math.sin(u*.0016+F.phase);F.mesh.scale.set(ne,ne*.42,ne);const re=F.mesh.material;re.opacity=.055+.055*(.5+.5*Math.sin(u*.0016+F.phase))}),at.forEach(F=>{F.light.intensity=2+Math.sin(u*.012+F.phase)*.5,F.flame.scale.y=.9+Math.sin(u*.009+F.phase)*.12}),pd.children.forEach((F,ne)=>{F.position.x+=Math.sin(u*12e-5+ne)*.003,F.position.z+=Math.cos(u*1e-4+ne)*.002}),De.forEach((F,ne)=>{var tt,pt;if(F.kind==="deer"){const Lt=F.g.position.x-_s.position.x,rn=F.g.position.z-_s.position.z,zt=Math.hypot(Lt,rn);if(zt<11){const Kt=((tt=F.g.userData)==null?void 0:tt.legJoints)||[],qt=u*.014*(F.speed||1);for(let Wt=0;Wt<4;Wt++){const Mn=Kt[Wt*2],vi=Kt[Wt*2+1];Mn&&(Mn.rotation.z=Math.sin(qt+Wt*Math.PI)*.1),vi&&(vi.rotation.z=Math.max(0,Math.sin(qt+Wt*Math.PI))*-.18)}const Nt=Math.max(.001,zt),Ut=zt<5.5?.115:.075,dn=F.g.position.x+Lt/Nt*Ut,Dn=F.g.position.z+rn/Nt*Ut,si=dn-30,We=Dn-53;if(Math.hypot(si,We)<17)F.g.position.set(dn,W(dn,Dn),Dn);else{const Wt=Math.atan2(We,si),Mn=30+Math.cos(Wt)*16,vi=53+Math.sin(Wt)*10;F.g.position.set(Mn,W(Mn,vi),vi)}F.g.rotation.y=Math.atan2(rn,Lt),F.g.position.y+=Math.sin(u*.008+ne)*.025;return}}const re=u*.00105*F.speed+F.phase,Pe=F.x+Math.cos(re)*F.r,ye=F.z+Math.sin(re*.83)*F.r*.62;if(F.g.position.set(Pe,W(Pe,ye),ye),F.g.rotation.y=Math.atan2(Math.cos(re*.83),-Math.sin(re)),F.kind==="deer"){const Lt=((pt=F.g.userData)==null?void 0:pt.legJoints)||[],rn=u*.014*(F.speed||1);for(let zt=0;zt<4;zt++){const Kt=Lt[zt*2],qt=Lt[zt*2+1];Kt&&(Kt.rotation.z=Math.sin(rn+zt*Math.PI)*.1),qt&&(qt.rotation.z=Math.max(0,Math.sin(rn+zt*Math.PI))*-.18)}F.g.position.y+=Math.sin(u*.006+ne)*.025,F.g.rotation.x=Math.sin(u*.004+F.phase)*.018}}),X.forEach((F,ne)=>{const re=F.userData.phase||0,Pe=F.userData.baseX,ye=F.userData.baseZ,tt=Pe+Math.sin(u*28e-5+re)*1.6,pt=ye+Math.cos(u*22e-5+re)*1.1;F.position.set(tt,W(tt,pt),pt),F.rotation.y=Math.sin(u*4e-4+re)*.5}),q.render(w,k),gd=requestAnimationFrame(b0)};return gd=requestAnimationFrame(b0),()=>{cancelAnimationFrame(gd),T0.disconnect(),q.domElement.removeEventListener("pointerup",S0),ke.forEach(u=>{u.mesh.geometry.dispose(),u.mesh.material.dispose()}),ue.dispose(),Je.dispose(),Ne.dispose(),q.dispose(),w.traverse(u=>{var x,f,S,D;u.isMesh&&((f=(x=u.geometry)==null?void 0:x.dispose)==null||f.call(x),Array.isArray(u.material)?u.material.forEach(R=>{var O;return(O=R.dispose)==null?void 0:O.call(R)}):(D=(S=u.material)==null?void 0:S.dispose)==null||D.call(S))}),q.domElement.remove(),y.current=null}},[t.id,e,n]);const E=A=>{const w=r.current,k=s.current;if(!w||!k)return;const q=w.getBoundingClientRect(),ie=q.left+q.width/2,ce=q.top+q.height/2,de=48;let W=A.clientX-ie,Q=A.clientY-ce;const V=Math.hypot(W,Q);V>de&&(W=W/V*de,Q=Q/V*de),k.style.transform=`translate(${W}px,${Q}px)`,o.current.dx=W/de,o.current.dz=Q/de},P=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},I=A=>{var Q,V;const w=r.current;if(!w)return;const k=A.target;if((Q=k.closest)!=null&&Q.call(k,".mid3d-action")||(V=k.closest)!=null&&V.call(k,".mid3d-interact"))return;const q=w.getBoundingClientRect(),ie=26;A.clientX>=q.left-ie&&A.clientX<=q.right+ie&&A.clientY>=q.top-78&&A.clientY<=q.bottom+26&&(A.currentTarget.setPointerCapture(A.pointerId),E(A))},L=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&E(A)},U=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&A.currentTarget.releasePointerCapture(A.pointerId),P()};return Y.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:I,onPointerMove:L,onPointerUp:U,onPointerCancel:U,onContextMenu:A=>A.preventDefault(),children:[Y.jsxs("div",{className:"mid3d-ui mid3d-top",children:[Y.jsxs("div",{className:"mid3d-pill",children:[Y.jsx("b",{children:"МИДГАРД"}),Y.jsx("span",{children:"Деревня • река • лес • святилища"})]}),Y.jsxs("div",{className:"mid3d-pill",children:[Y.jsx("b",{children:"ᛟ"}),Y.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[Y.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),Y.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{M(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[Y.jsx("b",{children:"Камень Трёх Нитей"}),Y.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>M(!1),children:"Продолжить путь"})]}),p&&Y.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[Y.jsx("b",{children:"🜂 Круг Силы"}),Y.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),Y.jsx("button",{onPointerDown:A=>A.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!p&&!g&&(()=>{const[A,w]=a.split("|"),k=w==="heroHome"||w==="heroHomeExit";return Y.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[Y.jsx("b",{children:A}),Y.jsx("span",{children:k?w==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),Y.jsx("button",{onPointerDown:q=>q.stopPropagation(),onClick:()=>{var q,ie;w==="powerCircle"?m(!0):w==="threeThreads"?M(!0):w==="heroHome"?(q=y.current)==null||q.call(y,!0):w==="heroHomeExit"?(ie=y.current)==null||ie.call(y,!1):e(w)},children:k?w==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),Y.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:Y.jsx("div",{className:"mid3d-knob",ref:s})}),Y.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:A=>A.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),Y.jsx("div",{className:"mid3d-ui mid3d-hint",children:T?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function pb(){const[t,e]=wt.useState(()=>X1().hero?{t:"tree"}:{t:"choose"}),[n,i]=wt.useState(X1),[r,s]=wt.useState(""),[o,a]=wt.useState(""),[l,c]=wt.useState(""),h=wt.useRef(0),[p,m]=wt.useState(null),[g,M]=wt.useState(null),[T,_]=wt.useState(!1),[d,v]=wt.useState(0),[y,E]=wt.useState(0),[P,I]=wt.useState(0),[L,U]=wt.useState(""),[A,w]=wt.useState(!1),[k,q]=wt.useState(!1),[ie,ce]=wt.useState(""),[de,W]=wt.useState(.06);wt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),wt.useEffect(()=>{var X,De,le,fe;(X=Pt==null?void 0:Pt.ready)==null||X.call(Pt),(De=Pt==null?void 0:Pt.expand)==null||De.call(Pt),(le=Pt==null?void 0:Pt.setHeaderColor)==null||le.call(Pt,"#0b0f0c"),(fe=Pt==null?void 0:Pt.setBackgroundColor)==null||fe.call(Pt,"#0b0f0c")},[]),wt.useEffect(()=>{if(!(Pt!=null&&Pt.BackButton))return;const X=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Pt.BackButton.show(),Pt.BackButton.onClick(X)):Pt.BackButton.hide(),()=>{var De,le;(le=(De=Pt.BackButton)==null?void 0:De.offClick)==null||le.call(De,X)}},[t,n.hero]),wt.useEffect(()=>{m(null),M(null),_(!1),ce(""),w(!1)},[t]);const Q=X=>{c(X),window.clearTimeout(h.current),h.current=window.setTimeout(()=>c(""),1800)},V=(X="light")=>{var De,le,fe,Ve;try{X==="success"?(le=(De=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:De.notificationOccurred)==null||le.call(De,"success"):(Ve=(fe=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:fe.impactOccurred)==null||Ve.call(fe,"light")}catch{}},J=X=>e(X),ue=X=>{V(),e({t:"realm",id:X.id})},we=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Ue=()=>{const X=we();if(X<=0){Q("Дозор только начался — искры ещё копятся.");return}i(De=>({...De,sparks:De.sparks+X,watch:Date.now()})),V("success"),Q("Дозор завершён: +"+X+" ✨")},ht=()=>{if(n.gift===Ca())return;const De=(n.gift?Math.round((Date.parse(Ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,le=Cf[De-1];i(fe=>({...fe,sparks:fe.sparks+le,gift:Ca(),streak:De})),V("success"),Q("Дар Древа, день "+De+": +"+le+" ✨")},ut=()=>{!r||!o||(i(X=>({...X,hero:{id:r,name:o}})),V("success"),Q("Путь начинается, "+o+"!"),e({t:"tree"}))},Ie=n.hero?Rf.find(X=>X.id===n.hero.id):null,me=X=>Math.floor(Math.random()*X),ve=X=>n.trials.filter(De=>De.startsWith(X+":")).length,je=X=>{if(n.artifacts.includes(X.id)){Q("Мир покорён. Артефакт хранится в листе героя.");return}V(),e({t:"trial",id:X.id})},Re=(X,De,le)=>{const fe=De===2;i(Ve=>({...Ve,sparks:Ve.sparks+le+(fe?30:0),trials:[...Ve.trials,X+":"+De],artifacts:fe?[...Ve.artifacts,X]:Ve.artifacts})),fe&&(V("success"),Q("Мир пройден! Артефакт: "+If[X]))},_e=(X,De)=>{if(p!==null)return;const le=ve(X),fe=Pf[X][le];if(De===fe.c){m(De),V("success");const Ve=12+le*3+((Ie==null?void 0:Ie.id)==="dwarf"?6:0);Q("Верно! Сундук хозяина: +"+Ve+" ✨"),Re(X,le,Ve);return}if(n.powers.includes("mimirEye")){m(fe.c),i(He=>({...He,powers:He.powers.filter(N=>N!=="mimirEye")}));const Ve=8+le*2;V("success"),Q("Око Мимира раскрыло истину. Ответ исправлен. +"+Ve+" ✨"),Re(X,le,Ve);return}if(n.powers.includes("nornThread")){m(De),i(He=>({...He,powers:He.powers.filter(N=>N!=="nornThread")}));const Ve=6+le*2;V("success"),Q("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ve+" ✨"),Re(X,le,Ve);return}m(De),V(),U(Ra[X].name+" мрачнеет: «Что ж — пусть решит сталь!»")},he=X=>{const De=ve(X),le=Pf[X][De],fe=le.a.findIndex((Ve,He)=>He!==le.c&&He!==g);M(fe),_(!0),V(),Q("Шёпот ветров уносит один ответ...")},Vt=X=>{const De=Ra[X],le=n.powers.includes("ashBreath");v(De.hp),E(Ie.hp+(le?25:0)),I(Ie.en+(le?2:0)),ce(""),w(!1),q(!1),U(le?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":De.name+" поднимает оружие!"),le&&i(fe=>({...fe,powers:fe.powers.filter(Ve=>Ve!=="ashBreath")})),e({t:"fight",id:X})},z=(X,De)=>{if(ie)return;const le=Ra[X],fe=ve(X);let Ve=0,He="",N=P,b=A;if(De==="hit"&&(Ve=Ie.str+me(4),n.powers.includes("fireOath")&&(Ve+=5,i(ze=>({...ze,powers:ze.powers.filter(Te=>Te!=="fireOath")})),He="Огненный обет! "),Ie.id==="berserk"&&y<=Ie.hp/2&&(Ve*=2,He+="Медвежья ярость! "),He+="Ты бьёшь: "+Ie.weapon+" — −"+Ve+" хозяину."),De==="rune"){if(P<4){Q("Мало энергии для заклинания!");return}N=P-4,Ve=Ie.en+2+me(5),He="Руническое заклинание вспыхивает: −"+Ve+" хозяину."}De==="shield"&&(b=!0,He="Ты поднимаешь щит — удар ослабнет.");const te=d-Ve;if(te<=0){v(0),I(N),ce("win");const ze=8+fe*2;U("Хозяин повержен! Награда: +"+ze+" ✨"),Re(X,fe,ze);return}let pe=le.atk+me(3),Me="";b&&(pe=Math.ceil(pe*.3),Me=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(pe=Math.ceil(pe*.65),i(ze=>({...ze,powers:ze.powers.filter(Te=>Te!=="iceOath")})),Me+=" Ледяной обет сковал удар врага."),Ie.id==="dwarf"&&(pe=Math.ceil(pe*.75));let oe=y;if(Ie.id==="viking"&&!k&&oe-pe<=0&&(q(!0),pe=0,Me=" Крылья бури поглотили смертельный удар!"),oe=oe-pe,v(te),E(Math.max(0,oe)),I(N),w(!1),oe<=0&&n.powers.includes("yggdrasilCall")){i(ze=>({...ze,powers:ze.powers.filter(Te=>Te!=="yggdrasilCall")})),E(30),U(He+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(oe<=0){ce("lose"),i(ze=>({...ze,sparks:Math.max(0,ze.sparks-10)})),U(He+" "+le.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}U(He+Me+" "+le.name+" отвечает: −"+pe+".")},Ft=X=>{ve(X)>=3||n.artifacts.includes(X)?e({t:"realm",id:X}):e({t:"trial",id:X})},Be=X=>X==="tree"?t.t==="tree"||t.t==="realm":t.t===X,at=X=>X==="tree"?{t:"tree"}:{t:X};return Y.jsxs("div",{className:"app",children:[Y.jsx("style",{children:ub}),Y.jsxs("div",{className:"hdr",children:[t.t==="tree"&&Y.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&Y.jsx("button",{className:"back",onClick:()=>J({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&Y.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&Y.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&Y.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&Y.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&Y.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&Y.jsx("div",{className:"title",children:"⚔ Бой"}),Y.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&Y.jsxs("div",{className:"scroll choose-screen",children:[Y.jsxs("div",{className:"card center choose-intro",children:[Y.jsx("div",{className:"big",children:"ᛉ"}),Y.jsx("div",{className:"qhead2",children:"Выбери героя"}),Y.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Rf.map(X=>Y.jsxs("button",{className:"hcard"+(r===X.id?" on":""),onClick:()=>{s(X.id),a(""),V()},children:[Y.jsx("span",{className:"hface",style:{borderColor:X.color,color:X.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:Y.jsx(Hr,{name:X.img,className:"himg"})}),Y.jsxs("span",{className:"hinfo",children:[Y.jsx("span",{className:"hname",style:{color:X.color},children:X.race}),Y.jsxs("span",{className:"hab",children:["🌀 ",X.ability,": ",X.abilityDesc]}),Y.jsxs("span",{className:"hst",children:["⚔ ",X.str," • ✨ ",X.en," • ❤ ",X.hp]}),Y.jsxs("span",{className:"hw",children:["🗡 ",X.weapon]})]})]},X.id)),r&&Y.jsxs("div",{className:"card",children:[Y.jsx("div",{className:"qhead2",children:"Имя героя"}),Y.jsx("div",{className:"chips",children:(Rf.find(X=>X.id===r).gender==="f"?lb:cb).map(X=>Y.jsx("button",{className:"chip"+(o===X?" on":""),onClick:()=>{a(X),V()},children:X},X))})]}),Y.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ut,children:"Вступить на путь"})]}),t.t==="tree"&&Y.jsxs("div",{className:"maparea",children:[Y.jsx("div",{className:"mapwrap",children:Y.jsxs("div",{className:"mapcanvas",children:[Y.jsx(Hr,{name:"tree",className:"mapimg"}),Sc.map(X=>Y.jsxs("button",{className:"marker",style:{left:X.x+"%",top:X.y+"%"},onClick:()=>ue(X),children:[Y.jsxs("div",{className:"amulet-wrap",children:[Y.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${X.glow}, transparent 70%)`}}),Y.jsx("div",{className:"amulet-ring",style:{borderColor:X.color}}),Y.jsx("div",{className:"amulet-core",style:{borderColor:X.color,color:X.color,background:`linear-gradient(135deg, ${X.dark}, #0a0a0a)`},children:X.runeSym})]}),Y.jsx("span",{className:"mname",style:{color:X.color,borderColor:X.glow},children:X.name})]},X.id))]})}),Y.jsx("div",{className:"fadeT"}),Y.jsx("div",{className:"fadeB"}),Y.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Ie&&n.hero&&Y.jsxs("button",{className:"herobar",onClick:()=>J({t:"hero"}),children:[Y.jsxs("span",{className:"hbface",style:{borderColor:Ie.color,color:Ie.color},children:[Y.jsx(Hr,{name:Ie.img,className:"hbimg"}),Ie.sym]}),Y.jsxs("span",{className:"hbname",children:[n.hero.name,Y.jsx("i",{children:Ie.race})]}),Y.jsxs("span",{className:"hbst",children:["⚔ ",Ie.str," ✨ ",Ie.en," ⏳ ",we()]}),Y.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const X=Sc.find(De=>De.id===t.id);if(X.id==="midgard"){if(!Ie)return null;const De=le=>{if(V(),le==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?Q("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(fe=>({...fe,sparks:fe.sparks+20,done:[...new Set([...fe.done,"forest:present:reward"])]})),V("success"),Q("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):Q("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(le==="norns"){Q("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(le==="threeThreads"){Q("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(le==="forge"||le==="blacksmith"){Q("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(le==="house"||le==="elder"){Q("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(le==="port"){Q("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(le==="rune"){Q("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(le==="ashgrove"){Q("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(le==="runefield"){Q("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(le==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?Q("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(fe=>({...fe,sparks:fe.sparks+20,done:[...new Set([...fe.done,"forest:past:reward"])]})),V("success"),Q("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):Q("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(le==="forestCache"){n.done.includes("forest:cache")?Q("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(fe=>({...fe,sparks:fe.sparks+18,done:[...new Set([...fe.done,"forest:cache"])]})),V("success"),Q("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(le==="forestWhisper"){n.done.includes("forest:whisper")?Q("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(fe=>({...fe,sparks:fe.sparks+16,done:[...new Set([...fe.done,"forest:whisper"])]})),V("success"),Q("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(le==="forestThread"){n.done.includes("forest:thread")?Q("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(fe=>({...fe,sparks:fe.sparks+22,done:[...new Set([...fe.done,"forest:thread"])]})),V("success"),Q("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(le==="heroHome"){Q("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(le==="hunterCamp"){n.done.includes("forest:camp")?Q("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(fe=>({...fe,sparks:fe.sparks+14,done:[...new Set([...fe.done,"forest:camp"])]})),V("success"),Q("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(le==="deepGrove"){n.done.includes("forest:grove")?Q("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(fe=>({...fe,sparks:fe.sparks+17,done:[...new Set([...fe.done,"forest:grove"])]})),V("success"),Q("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(le==="fallenAsh"){n.done.includes("forest:ash")?Q("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(fe=>({...fe,sparks:fe.sparks+21,done:[...new Set([...fe.done,"forest:ash"])]})),V("success"),Q("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(le==="deer"){Q("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(le==="hoddmimir"){Q("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(le==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?Q("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(fe=>({...fe,sparks:fe.sparks+20,done:[...new Set([...fe.done,"forest:future:reward"])]})),V("success"),Q("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):Q("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(le==="forestEvent"){n.done.includes("forest:choice")&&Q("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(le==="forestEvent:past"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:past"])]})),V("success"),Q("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(le==="forestEvent:present"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:present"])]})),V("success"),Q("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(le==="forestEvent:future"){i(fe=>({...fe,sparks:fe.sparks+12,done:[...new Set([...fe.done,"forest:choice","forest:future"])]})),V("success"),Q("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(le==="event"){Q("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(le.startsWith("ritual:")){const fe=le.slice(7),Ve={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},N={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[fe];if(!N)return;if(n.powers.includes(N)){Q(Ve[fe]+" уже пробуждён. Его сила ждёт своего часа.");return}i(te=>({...te,powers:[...new Set([...te.powers,N])],done:[...new Set([...te.done,"ritual:"+fe])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};V("success"),Q(b[fe]);return}};return Y.jsx(hb,{h:Ie,on:De,eventDone:n.done.includes("forest:choice")})}return Y.jsxs("div",{className:"content",children:[Y.jsx(Hr,{name:X.id,className:"bgimg"}),Y.jsx("div",{className:"veil"}),Y.jsxs("div",{className:"banner",children:[Y.jsx("span",{className:"bemoji",children:X.emoji}),Y.jsxs("div",{children:[Y.jsx("div",{className:"bname",children:X.name}),Y.jsx("div",{className:"btag",children:X.tag})]})]}),Y.jsxs("button",{className:"gate",onClick:()=>je(X),children:[Y.jsxs("span",{className:"gwrap",children:[Y.jsx("span",{className:"gate-ring",style:{borderColor:X.color}}),Y.jsx("span",{className:"gate-core",style:{borderColor:X.color,color:X.color,background:`radial-gradient(circle, ${X.dark}, #050705 75%)`},children:X.runeSym})]}),Y.jsx("span",{className:"mname",style:{color:X.color,borderColor:X.glow},children:n.artifacts.includes(X.id)?"Мир покорён":"Врата мира"})]}),Y.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const X=Sc.find(Ve=>Ve.id===t.id),De=Ra[X.id],le=ve(X.id);if(le>=3)return Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🏺"}),Y.jsx("div",{className:"qhead2",children:"Мир покорён!"}),Y.jsxs("p",{className:"dim",children:["Артефакт: ",If[X.id]]}),Y.jsx("button",{className:"btn gold",onClick:()=>J({t:"realm",id:X.id}),children:"К вратам"})]})});const fe=Pf[X.id][le];return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"mhead",children:[Y.jsxs("span",{className:"mface",style:{borderColor:X.color,color:X.color},children:[Y.jsx(Hr,{name:j1[X.id],className:"himg"}),De.sym]}),Y.jsx("span",{className:"mname2",style:{color:X.color},children:De.name}),Y.jsxs("span",{className:"mtitle",children:[De.title," • испытание ",le+1," из 3"]})]}),le===0&&Y.jsxs("div",{className:"greet",children:["«",De.greet,"»"]}),Y.jsxs("div",{className:"cloud",children:[Y.jsx("div",{className:"riddle",children:fe.q}),fe.a.map((Ve,He)=>Y.jsx("button",{className:"ans"+(p!==null?He===fe.c?" good":He===p?" bad":" off":g===He?" off":""),onClick:()=>_e(X.id,He),children:Ve},He)),(Ie==null?void 0:Ie.id)==="elf"&&!T&&p===null&&Y.jsx("button",{className:"btn rune",onClick:()=>he(X.id),children:"🌀 Шёпот ветров"}),p!==null&&(p===fe.c?Y.jsx("button",{className:"btn gold",onClick:()=>Ft(X.id),children:"Открыть сундук →"}):Y.jsx("button",{className:"btn",onClick:()=>Vt(X.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const X=Sc.find(le=>le.id===t.id),De=Ra[X.id];return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"duel",children:[Y.jsxs("div",{className:"dside",children:[Y.jsxs("span",{className:"dface",style:{borderColor:X.color,color:X.color},children:[Y.jsx(Hr,{name:j1[X.id],className:"himg"}),De.sym]}),Y.jsx("span",{className:"dname",style:{color:X.color},children:De.name}),Y.jsx("span",{className:"dhp",children:Y.jsx("span",{className:"dhpfill",style:{width:Math.max(0,d/De.hp*100)+"%",background:X.color}})}),Y.jsxs("span",{className:"dnum",children:[d,"/",De.hp]})]}),Y.jsx("span",{className:"dvs",children:"⚔"}),Y.jsxs("div",{className:"dside",children:[Y.jsxs("span",{className:"dface",style:{borderColor:Ie.color,color:Ie.color},children:[Y.jsx(Hr,{name:Ie.img,className:"himg"}),Ie.sym]}),Y.jsx("span",{className:"dname",style:{color:Ie.color},children:n.hero.name}),Y.jsx("span",{className:"dhp",children:Y.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/Ie.hp*100)+"%",background:"#7ee787"}})}),Y.jsx("span",{className:"denergy",children:Array.from({length:Ie.en}).map((le,fe)=>Y.jsx("span",{className:"pip"+(fe<P?" on":"")},fe))})]})]}),Y.jsx("div",{className:"flog",children:L}),!ie&&Y.jsxs("div",{className:"acts",children:[Y.jsxs("button",{className:"btn gold",onClick:()=>z(X.id,"hit"),children:["⚔ Удар: ",Ie.weapon]}),Y.jsx("button",{className:"btn rune",onClick:()=>z(X.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),Y.jsx("button",{className:"btn shield",onClick:()=>z(X.id,"shield"),children:"🛡 Щит"})]}),ie==="win"&&Y.jsx("button",{className:"btn gold",onClick:()=>Ft(X.id),children:"Забрать награду →"}),ie==="lose"&&Y.jsx("button",{className:"btn ghost",onClick:()=>J({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Ie&&n.hero&&Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("span",{className:"hface bigface",style:{borderColor:Ie.color,color:Ie.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:Y.jsx(Hr,{name:Ie.img,className:"himg"})}),Y.jsxs("div",{className:"qhead2",style:{color:Ie.color},children:[n.hero.name," • ",Ie.race]}),Y.jsxs("div",{className:"stats",children:[Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["⚔ ",Ie.str]}),Y.jsx("span",{children:"сила"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["✨ ",Ie.en]}),Y.jsx("span",{children:"энергия"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["❤ ",Ie.hp]}),Y.jsx("span",{children:"здоровье"})]})]}),Y.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",Y.jsx("b",{children:Ie.weapon})]}),Y.jsxs("div",{className:"hrow",children:["🌀 ",Ie.ability,": ",Ie.abilityDesc]}),Y.jsxs("div",{className:"hrow",children:["✨ Искр: ",Y.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",Y.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&Y.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(X=>If[X]).join(", ")]})]})}),t.t==="gift"&&(()=>{const X=n.gift===Ca(),le=(n.gift?Math.round((Date.parse(Ca())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,fe=X?n.streak:le;return Y.jsxs("div",{className:"scroll",children:[Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🎁"}),Y.jsx("div",{className:"qhead2",children:"Дар Древа"}),Y.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),Y.jsx("div",{className:"days",children:Cf.map((Ve,He)=>Y.jsxs("span",{className:"day"+(He+1===fe?" on":He+1<fe&&X?" done":""),children:[Y.jsx("b",{children:Ve}),"день ",He+1]},He))}),X?Y.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):Y.jsxs("button",{className:"btn gold",onClick:ht,children:["Забрать дар +",Cf[le-1]," ✨"]})]}),Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"⏳"}),Y.jsx("div",{className:"qhead2",children:"Дозор героя"}),Y.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),Y.jsxs("button",{className:"btn gold",onClick:Ue,children:["Завершить дозор · +",we()," ✨"]})]})]})})(),t.t==="hall"&&Y.jsx("div",{className:"scroll",children:Y.jsxs("div",{className:"card center",children:[Y.jsx("div",{className:"big",children:"🏛️"}),Y.jsx("div",{className:"qhead2",children:"Чертог путника"}),Y.jsxs("div",{className:"stats",children:[Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["✨ ",n.sparks]}),Y.jsx("span",{children:"Искр"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),Y.jsx("span",{children:"артефакты"})]})]}),Y.jsxs("div",{className:"rank",children:["🏆 Ранг: ",ab(n.sparks)]}),n.hero&&Ie&&Y.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Ie.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&Y.jsx("div",{className:"nav",children:ob.map(X=>Y.jsxs("button",{className:"navbtn"+(Be(X.id)?" on":""),onClick:()=>J(at(X.id)),children:[Y.jsx("span",{className:"ic",children:X.ic}),X.t]},X.id))}),l&&Y.jsx("div",{className:"toast",children:l})]})}ax(document.getElementById("root")).render(Y.jsx(pb,{}));
