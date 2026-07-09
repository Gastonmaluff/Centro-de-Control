(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var bh={exports:{}},Ta={},jh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function WE(){if(Rm)return Ie;Rm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),k=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=k&&O[k]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function W(O,B,le){this.props=O,this.context=B,this.refs=X,this.updater=le||z}W.prototype.isReactComponent={},W.prototype.setState=function(O,B){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,B,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function me(){}me.prototype=W.prototype;function pe(O,B,le){this.props=O,this.context=B,this.refs=X,this.updater=le||z}var ye=pe.prototype=new me;ye.constructor=pe,Y(ye,W.prototype),ye.isPureReactComponent=!0;var Ee=Array.isArray,We=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(O,B,le){var we,Te={},Re=null,Le=null;if(B!=null)for(we in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Re=""+B.key),B)We.call(B,we)&&!x.hasOwnProperty(we)&&(Te[we]=B[we]);var Me=arguments.length-2;if(Me===1)Te.children=le;else if(1<Me){for(var ze=Array(Me),vt=0;vt<Me;vt++)ze[vt]=arguments[vt+2];Te.children=ze}if(O&&O.defaultProps)for(we in Me=O.defaultProps,Me)Te[we]===void 0&&(Te[we]=Me[we]);return{$$typeof:i,type:O,key:Re,ref:Le,props:Te,_owner:Ae.current}}function C(O,B){return{$$typeof:i,type:O.type,key:B,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var B={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return B[le]})}var L=/\/+/g;function A(O,B){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):B.toString(36)}function tt(O,B,le,we,Te){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Re){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,Te=Te(Le),O=we===""?"."+A(Le,0):we,Ee(Te)?(le="",O!=null&&(le=O.replace(L,"$&/")+"/"),tt(Te,B,le,"",function(vt){return vt})):Te!=null&&(P(Te)&&(Te=C(Te,le+(!Te.key||Le&&Le.key===Te.key?"":(""+Te.key).replace(L,"$&/")+"/")+O)),B.push(Te)),1;if(Le=0,we=we===""?".":we+":",Ee(O))for(var Me=0;Me<O.length;Me++){Re=O[Me];var ze=we+A(Re,Me);Le+=tt(Re,B,le,ze,Te)}else if(ze=D(O),typeof ze=="function")for(O=ze.call(O),Me=0;!(Re=O.next()).done;)Re=Re.value,ze=we+A(Re,Me++),Le+=tt(Re,B,le,ze,Te);else if(Re==="object")throw B=String(O),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Nt(O,B,le){if(O==null)return O;var we=[],Te=0;return tt(O,we,"","",function(Re){return B.call(le,Re,Te++)}),we}function xt(O){if(O._status===-1){var B=O._result;B=B(),B.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=B)}if(O._status===1)return O._result.default;throw O._result}var Fe={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ae};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Nt,forEach:function(O,B,le){Nt(O,function(){B.apply(this,arguments)},le)},count:function(O){var B=0;return Nt(O,function(){B++}),B},toArray:function(O){return Nt(O,function(B){return B})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ie.Component=W,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=pe,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ie.act=te,Ie.cloneElement=function(O,B,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var we=Y({},O.props),Te=O.key,Re=O.ref,Le=O._owner;if(B!=null){if(B.ref!==void 0&&(Re=B.ref,Le=Ae.current),B.key!==void 0&&(Te=""+B.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(ze in B)We.call(B,ze)&&!x.hasOwnProperty(ze)&&(we[ze]=B[ze]===void 0&&Me!==void 0?Me[ze]:B[ze])}var ze=arguments.length-2;if(ze===1)we.children=le;else if(1<ze){Me=Array(ze);for(var vt=0;vt<ze;vt++)Me[vt]=arguments[vt+2];we.children=Me}return{$$typeof:i,type:O.type,key:Te,ref:Re,props:we,_owner:Le}},Ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ie.createElement=S,Ie.createFactory=function(O){var B=S.bind(null,O);return B.type=O,B},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(O){return{$$typeof:m,render:O}},Ie.isValidElement=P,Ie.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:xt}},Ie.memo=function(O,B){return{$$typeof:_,type:O,compare:B===void 0?null:B}},Ie.startTransition=function(O){var B=Z.transition;Z.transition={};try{O()}finally{Z.transition=B}},Ie.unstable_act=te,Ie.useCallback=function(O,B){return Fe.current.useCallback(O,B)},Ie.useContext=function(O){return Fe.current.useContext(O)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(O){return Fe.current.useDeferredValue(O)},Ie.useEffect=function(O,B){return Fe.current.useEffect(O,B)},Ie.useId=function(){return Fe.current.useId()},Ie.useImperativeHandle=function(O,B,le){return Fe.current.useImperativeHandle(O,B,le)},Ie.useInsertionEffect=function(O,B){return Fe.current.useInsertionEffect(O,B)},Ie.useLayoutEffect=function(O,B){return Fe.current.useLayoutEffect(O,B)},Ie.useMemo=function(O,B){return Fe.current.useMemo(O,B)},Ie.useReducer=function(O,B,le){return Fe.current.useReducer(O,B,le)},Ie.useRef=function(O){return Fe.current.useRef(O)},Ie.useState=function(O){return Fe.current.useState(O)},Ie.useSyncExternalStore=function(O,B,le){return Fe.current.useSyncExternalStore(O,B,le)},Ie.useTransition=function(){return Fe.current.useTransition()},Ie.version="18.3.1",Ie}var Pm;function Nd(){return Pm||(Pm=1,jh.exports=WE()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function GE(){if(Nm)return Ta;Nm=1;var i=Nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var T,k={},D=null,z=null;_!==void 0&&(D=""+_),g.key!==void 0&&(D=""+g.key),g.ref!==void 0&&(z=g.ref);for(T in g)s.call(g,T)&&!u.hasOwnProperty(T)&&(k[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)k[T]===void 0&&(k[T]=g[T]);return{$$typeof:e,type:m,key:D,ref:z,props:k,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var xm;function KE(){return xm||(xm=1,bh.exports=GE()),bh.exports}var w=KE(),ut=Nd(),fu={},Fh={exports:{}},en={},Uh={exports:{}},zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function QE(){return Dm||(Dm=1,(function(i){function e(Z,ue){var te=Z.length;Z.push(ue);e:for(;0<te;){var O=te-1>>>1,B=Z[O];if(0<o(B,ue))Z[O]=ue,Z[te]=B,te=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],te=Z.pop();if(te!==ue){Z[0]=te;e:for(var O=0,B=Z.length,le=B>>>1;O<le;){var we=2*(O+1)-1,Te=Z[we],Re=we+1,Le=Z[Re];if(0>o(Te,te))Re<B&&0>o(Le,Te)?(Z[O]=Le,Z[Re]=te,O=Re):(Z[O]=Te,Z[we]=te,O=we);else if(Re<B&&0>o(Le,te))Z[O]=Le,Z[Re]=te,O=Re;else break e}}return ue}function o(Z,ue){var te=Z.sortIndex-ue.sortIndex;return te!==0?te:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],T=1,k=null,D=3,z=!1,Y=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Z){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=Z)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function Ee(Z){if(X=!1,ye(Z),!Y)if(t(g)!==null)Y=!0,xt(We);else{var ue=t(_);ue!==null&&Fe(Ee,ue.startTime-Z)}}function We(Z,ue){Y=!1,X&&(X=!1,me(S),S=-1),z=!0;var te=D;try{for(ye(ue),k=t(g);k!==null&&(!(k.expirationTime>ue)||Z&&!V());){var O=k.callback;if(typeof O=="function"){k.callback=null,D=k.priorityLevel;var B=O(k.expirationTime<=ue);ue=i.unstable_now(),typeof B=="function"?k.callback=B:k===t(g)&&s(g),ye(ue)}else s(g);k=t(g)}if(k!==null)var le=!0;else{var we=t(_);we!==null&&Fe(Ee,we.startTime-ue),le=!1}return le}finally{k=null,D=te,z=!1}}var Ae=!1,x=null,S=-1,C=5,P=-1;function V(){return!(i.unstable_now()-P<C)}function L(){if(x!==null){var Z=i.unstable_now();P=Z;var ue=!0;try{ue=x(!0,Z)}finally{ue?A():(Ae=!1,x=null)}}else Ae=!1}var A;if(typeof pe=="function")A=function(){pe(L)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Nt=tt.port2;tt.port1.onmessage=L,A=function(){Nt.postMessage(null)}}else A=function(){W(L,0)};function xt(Z){x=Z,Ae||(Ae=!0,A())}function Fe(Z,ue){S=W(function(){Z(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,xt(We))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(D){case 1:case 2:case 3:var ue=3;break;default:ue=D}var te=D;D=ue;try{return Z()}finally{D=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=D;D=Z;try{return ue()}finally{D=te}},i.unstable_scheduleCallback=function(Z,ue,te){var O=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,Z={id:T++,callback:ue,priorityLevel:Z,startTime:te,expirationTime:B,sortIndex:-1},te>O?(Z.sortIndex=te,e(_,Z),t(g)===null&&Z===t(_)&&(X?(me(S),S=-1):X=!0,Fe(Ee,te-O))):(Z.sortIndex=B,e(g,Z),Y||z||(Y=!0,xt(We))),Z},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(Z){var ue=D;return function(){var te=D;D=ue;try{return Z.apply(this,arguments)}finally{D=te}}}})(zh)),zh}var Vm;function YE(){return Vm||(Vm=1,Uh.exports=QE()),Uh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function JE(){if(Om)return en;Om=1;var i=Nd(),e=YE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},k={};function D(n){return g.call(k,n)?!0:g.call(T,n)?!1:_.test(n)?k[n]=!0:(T[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,pe);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,pe);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,pe);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function B(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var le=!1;function we(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Te(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ae:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case xt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function or(n){n._valueTracker||(n._valueTracker=vt(n))}function os(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function as(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ro(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Po(n,r){Ro(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ls(n,r.type,a):r.hasOwnProperty("defaultValue")&&ls(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ls(n,r,a){(r!=="number"||xr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ar=Array.isArray;function lr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function No(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function us(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ar(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function cs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ur,Do=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Dr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ii.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ti[r]=Ti[n]})});function Vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+r).trim():r+"px"}function Oo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function bo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function hs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ds=null,cn=null,Un=null;function fs(n){if(n=aa(n)){if(typeof ds!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),ds(n.stateNode,n.type,r))}}function zn(n){cn?Un?Un.push(n):Un=[n]:cn=n}function jo(){if(cn){var n=cn,r=Un;if(Un=cn=null,fs(n),r)for(n=0;n<r.length;n++)fs(r[n])}}function Ai(n,r){return n(r)}function Fo(){}var cr=!1;function Uo(n,r,a){if(cr)return n(r,a);cr=!0;try{return Ai(n,r,a)}finally{cr=!1,(cn!==null||Un!==null)&&(Fo(),jo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ps=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{ps=!1}function Ci(n,r,a,c,d,p,v,I,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var ki=!1,ms=null,In=!1,zo=null,hc={onError:function(n){ki=!0,ms=n}};function gs(n,r,a,c,d,p,v,I,R){ki=!1,ms=null,Ci.apply(hc,arguments)}function Za(n,r,a,c,d,p,v,I,R){if(gs.apply(this,arguments),ki){if(ki){var F=ms;ki=!1,ms=null}else throw Error(t(198));In||(In=!0,zo=F)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ri(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function el(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Bo(n){return n=el(n),n!==null?ys(n):null}function ys(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ys(n);if(r!==null)return r;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,tl=e.unstable_shouldYield,dc=e.unstable_requestPaint,Be=e.unstable_now,nl=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,Vr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,rl=e.unstable_IdlePriority,Ni=null,nn=null;function il(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ni,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:ol,qo=Math.log,sl=Math.LN2;function ol(n){return n>>>=0,n===0?32:31-(qo(n)/sl|0)|0}var _s=64,Es=4194304;function Or(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Or(I):(p&=v,p!==0&&(c=Or(p)))}else v=a&~d,v!==0?c=Or(v):p!==0&&(c=Or(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function fc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Bt(p),I=1<<v,R=d[v];R===-1?((I&a)===0||(I&c)!==0)&&(d[v]=fc(I,r)):R<=r&&(n.expiredLanes|=I),p&=~I}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Di(){var n=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function Ue(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function jr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var al,ws,ll,ul,cl,Wo=!1,Bn=[],St=null,Cn=null,kn=null,Fr=new Map,dn=new Map,$n=[],pc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hl(n,r){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Fr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function Gt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&ws(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function mc(n,r,a,c,d){switch(r){case"focusin":return St=Gt(St,n,r,a,c,d),!0;case"dragenter":return Cn=Gt(Cn,n,r,a,c,d),!0;case"mouseover":return kn=Gt(kn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Fr.set(p,Gt(Fr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,Gt(dn.get(p)||null,n,r,a,c,d)),!0}return!1}function dl(n){var r=bi(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ri(a),r!==null){n.blockedOn=r,cl(n.priority,function(){ll(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ts(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return r=aa(a),r!==null&&ws(r),n.blockedOn=a,!1;r.shift()}return!0}function Vi(n,r,a){dr(n)&&a.delete(r)}function fl(){Wo=!1,St!==null&&dr(St)&&(St=null),Cn!==null&&dr(Cn)&&(Cn=null),kn!==null&&dr(kn)&&(kn=null),Fr.forEach(Vi),dn.forEach(Vi)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,Wo||(Wo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fl)))}function Pn(n){function r(d){return Rn(d,n)}if(0<Bn.length){Rn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&Rn(St,n),Cn!==null&&Rn(Cn,n),kn!==null&&Rn(kn,n),Fr.forEach(r),dn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)dl(a),a.blockedOn===null&&$n.shift()}var fr=Ee.ReactCurrentBatchConfig,Ur=!0;function Ge(n,r,a,c){var d=ke,p=fr.transition;fr.transition=null;try{ke=1,Go(n,r,a,c)}finally{ke=d,fr.transition=p}}function gc(n,r,a,c){var d=ke,p=fr.transition;fr.transition=null;try{ke=4,Go(n,r,a,c)}finally{ke=d,fr.transition=p}}function Go(n,r,a,c){if(Ur){var d=Ts(n,r,a,c);if(d===null)kc(n,r,c,Oi,a),hl(n,c);else if(mc(d,n,r,a,c))c.stopPropagation();else if(hl(n,c),r&4&&-1<pc.indexOf(n)){for(;d!==null;){var p=aa(d);if(p!==null&&al(p),p=Ts(n,r,a,c),p===null&&kc(n,r,c,Oi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else kc(n,r,c,null,a)}}var Oi=null;function Ts(n,r,a,c){if(Oi=null,n=hs(c),n=bi(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ri(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Oi=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nl()){case Pi:return 1;case Vr:return 4;case hn:case Ho:return 16;case rl:return 536870912;default:return 16}default:return 16}}var sn=null,Is=null,Kt=null;function Qo(){if(Kt)return Kt;var n,r=Is,a=r.length,c,d="value"in sn?sn.value:sn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function Ss(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Yo(){return!1}function At(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hn:Yo,this.isPropagationStopped=Yo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=At(Nn),qn=te({},Nn,{view:0,detail:0}),yc=At(qn),Cs,pr,zr,Li=te({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(Cs=n.screenX-zr.screenX,pr=n.screenY-zr.screenY):pr=Cs=0,zr=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:pr}}),ks=At(Li),Jo=te({},Li,{dataTransfer:0}),pl=At(Jo),Rs=te({},qn,{relatedTarget:0}),Ps=At(Rs),ml=te({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),mr=At(ml),gl=te({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yl=At(gl),vl=te({},Nn,{data:0}),Xo=At(vl),Ns={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function El(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_l[n])?!!r[n]:!1}function Wn(){return El}var l=te({},qn,{key:function(n){if(n.key){var r=Ns[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ss(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?Ss(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ss(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),y=te({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(y),M=te({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),U=At(M),J=te({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=At(J),pt=te({},Li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=At(pt),_t=[9,13,27,32],ot=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var on=m&&"TextEvent"in window&&!fn,Mi=m&&(!ot||fn&&8<fn&&11>=fn),xs=" ",Tf=!1;function If(n,r){switch(n){case"keyup":return _t.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function $_(n,r){switch(n){case"compositionend":return Sf(r);case"keypress":return r.which!==32?null:(Tf=!0,xs);case"textInput":return n=r.data,n===xs&&Tf?null:n;default:return null}}function H_(n,r){if(Ds)return n==="compositionend"||!ot&&If(n,r)?(n=Qo(),Kt=Is=sn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Mi&&r.locale!=="ko"?null:r.data;default:return null}}var q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!q_[n.type]:r==="textarea"}function Cf(n,r,a,c){zn(c),r=Al(r,"onChange"),0<r.length&&(a=new As("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function W_(n){Hf(n,0)}function wl(n){var r=bs(n);if(os(r))return n}function G_(n,r){if(n==="change")return r}var kf=!1;if(m){var vc;if(m){var _c="oninput"in document;if(!_c){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),_c=typeof Rf.oninput=="function"}vc=_c}else vc=!1;kf=vc&&(!document.documentMode||9<document.documentMode)}function Pf(){Zo&&(Zo.detachEvent("onpropertychange",Nf),ea=Zo=null)}function Nf(n){if(n.propertyName==="value"&&wl(ea)){var r=[];Cf(r,ea,n,hs(n)),Uo(W_,r)}}function K_(n,r,a){n==="focusin"?(Pf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",Nf)):n==="focusout"&&Pf()}function Q_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(ea)}function Y_(n,r){if(n==="click")return wl(r)}function J_(n,r){if(n==="input"||n==="change")return wl(r)}function X_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:X_;function ta(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!xn(n[d],r[d]))return!1}return!0}function xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,r){var a=xf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function Vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Of(){for(var n=window,r=xr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=xr(n.document)}return r}function Ec(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Z_(n){var r=Of(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Vf(a.ownerDocument.documentElement,a)){if(c!==null&&Ec(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Df(a,p);var v=Df(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var eE=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,wc=null,na=null,Tc=!1;function Lf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||Vs==null||Vs!==xr(c)||(c=Vs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=Al(wc,"onSelect"),0<c.length&&(r=new As("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Vs)))}function Tl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Os={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Ic={},Mf={};m&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Il(n){if(Ic[n])return Ic[n];if(!Os[n])return n;var r=Os[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Mf)return Ic[n]=r[a];return n}var bf=Il("animationend"),jf=Il("animationiteration"),Ff=Il("animationstart"),Uf=Il("transitionend"),zf=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){zf.set(n,r),u(r,[n])}for(var Sc=0;Sc<Bf.length;Sc++){var Ac=Bf[Sc],tE=Ac.toLowerCase(),nE=Ac[0].toUpperCase()+Ac.slice(1);Br(tE,"on"+nE)}Br(bf,"onAnimationEnd"),Br(jf,"onAnimationIteration"),Br(Ff,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Uf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function $f(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Za(c,r,void 0,n),n.currentTarget=null}function Hf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],R=I.instance,F=I.currentTarget;if(I=I.listener,R!==p&&d.isPropagationStopped())break e;$f(d,I,F),p=R}else for(v=0;v<c.length;v++){if(I=c[v],R=I.instance,F=I.currentTarget,I=I.listener,R!==p&&d.isPropagationStopped())break e;$f(d,I,F),p=R}}}if(In)throw n=zo,In=!1,zo=null,n}function He(n,r){var a=r[Vc];a===void 0&&(a=r[Vc]=new Set);var c=n+"__bubble";a.has(c)||(qf(r,n,2,!1),a.add(c))}function Cc(n,r,a){var c=0;r&&(c|=4),qf(a,n,c,r)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Sl]){n[Sl]=!0,s.forEach(function(a){a!=="selectionchange"&&(rE.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Sl]||(r[Sl]=!0,Cc("selectionchange",!1,r))}}function qf(n,r,a,c){switch(Ko(r)){case 1:var d=Ge;break;case 4:d=gc;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!ps||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function kc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;I!==null;){if(v=bi(I),v===null)return;if(R=v.tag,R===5||R===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Uo(function(){var F=p,q=hs(a),G=[];e:{var H=zf.get(n);if(H!==void 0){var ee=As,ie=n;switch(n){case"keypress":if(Ss(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Ps;break;case"focusout":ie="blur",ee=Ps;break;case"beforeblur":case"afterblur":ee=Ps;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case bf:case jf:case Ff:ee=mr;break;case Uf:ee=be;break;case"scroll":ee=yc;break;case"wheel":ee=Pe;break;case"copy":case"cut":case"paste":ee=yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var oe=(r&4)!==0,rt=!oe&&n==="scroll",b=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=F,j;N!==null;){j=N;var Q=j.stateNode;if(j.tag===5&&Q!==null&&(j=Q,b!==null&&(Q=nt(N,b),Q!=null&&oe.push(sa(N,Q,j)))),rt)break;N=N.return}0<oe.length&&(H=new ee(H,ie,null,a,q),G.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&a!==Si&&(ie=a.relatedTarget||a.fromElement)&&(bi(ie)||ie[gr]))break e;if((ee||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?bi(ie):null,ie!==null&&(rt=Sn(ie),ie!==rt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(oe=ks,Q="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Q="onPointerLeave",b="onPointerEnter",N="pointer"),rt=ee==null?H:bs(ee),j=ie==null?H:bs(ie),H=new oe(Q,N+"leave",ee,a,q),H.target=rt,H.relatedTarget=j,Q=null,bi(q)===F&&(oe=new oe(b,N+"enter",ie,a,q),oe.target=j,oe.relatedTarget=rt,Q=oe),rt=Q,ee&&ie)t:{for(oe=ee,b=ie,N=0,j=oe;j;j=Ls(j))N++;for(j=0,Q=b;Q;Q=Ls(Q))j++;for(;0<N-j;)oe=Ls(oe),N--;for(;0<j-N;)b=Ls(b),j--;for(;N--;){if(oe===b||b!==null&&oe===b.alternate)break t;oe=Ls(oe),b=Ls(b)}oe=null}else oe=null;ee!==null&&Wf(G,H,ee,oe,!1),ie!==null&&rt!==null&&Wf(G,rt,ie,oe,!0)}}e:{if(H=F?bs(F):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var ae=G_;else if(Af(H))if(kf)ae=J_;else{ae=Q_;var ce=K_}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=Y_);if(ae&&(ae=ae(n,F))){Cf(G,ae,a,q);break e}ce&&ce(n,H,F),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&ls(H,"number",H.value)}switch(ce=F?bs(F):window,n){case"focusin":(Af(ce)||ce.contentEditable==="true")&&(Vs=ce,wc=F,na=null);break;case"focusout":na=wc=Vs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Lf(G,a,q);break;case"selectionchange":if(eE)break;case"keydown":case"keyup":Lf(G,a,q)}var he;if(ot)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ds?If(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Mi&&a.locale!=="ko"&&(Ds||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ds&&(he=Qo()):(sn=q,Is="value"in sn?sn.value:sn.textContent,Ds=!0)),ce=Al(F,ge),0<ce.length&&(ge=new Xo(ge,n,null,a,q),G.push({event:ge,listeners:ce}),he?ge.data=he:(he=Sf(a),he!==null&&(ge.data=he)))),(he=on?$_(n,a):H_(n,a))&&(F=Al(F,"onBeforeInput"),0<F.length&&(q=new Xo("onBeforeInput","beforeinput",null,a,q),G.push({event:q,listeners:F}),q.data=he))}Hf(G,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Al(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(sa(n,p,d)),p=nt(n,r),p!=null&&c.push(sa(n,p,d))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var I=a,R=I.alternate,F=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&F!==null&&(I=F,d?(R=nt(a,p),R!=null&&v.unshift(sa(a,R,I))):d||(R=nt(a,p),R!=null&&v.push(sa(a,R,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var iE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function Gf(n){return(typeof n=="string"?n:""+n).replace(iE,`
`).replace(sE,"")}function Cl(n,r,a){if(r=Gf(r),Gf(n)!==r&&a)throw Error(t(425))}function kl(){}var Rc=null,Pc=null;function Nc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,oE=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,aE=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(lE)}:xc;function lE(n){setTimeout(function(){throw n})}function Dc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ms,oa="__reactProps$"+Ms,gr="__reactContainer$"+Ms,Vc="__reactEvents$"+Ms,uE="__reactListeners$"+Ms,cE="__reactHandles$"+Ms;function bi(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[gr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Qf(n);n!==null;){if(a=n[Gn])return a;n=Qf(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[Gn]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[oa]||null}var Oc=[],js=-1;function Hr(n){return{current:n}}function qe(n){0>js||(n.current=Oc[js],Oc[js]=null,js--)}function $e(n,r){js++,Oc[js]=n.current,n.current=r}var qr={},Dt=Hr(qr),Qt=Hr(!1),ji=qr;function Fs(n,r){var a=n.type.contextTypes;if(!a)return qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Pl(){qe(Qt),qe(Dt)}function Yf(n,r,a){if(Dt.current!==qr)throw Error(t(168));$e(Dt,r),$e(Qt,a)}function Jf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,ji=Dt.current,$e(Dt,n),$e(Qt,Qt.current),!0}function Xf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Jf(n,r,ji),c.__reactInternalMemoizedMergedChildContext=n,qe(Qt),qe(Dt),$e(Dt,n)):qe(Qt),$e(Qt,a)}var yr=null,xl=!1,Lc=!1;function Zf(n){yr===null?yr=[n]:yr.push(n)}function hE(n){xl=!0,Zf(n)}function Wr(){if(!Lc&&yr!==null){Lc=!0;var n=0,r=ke;try{var a=yr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,xl=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),vs(Pi,Wr),d}finally{ke=r,Lc=!1}}return null}var Us=[],zs=0,Dl=null,Vl=0,pn=[],mn=0,Fi=null,vr=1,_r="";function Ui(n,r){Us[zs++]=Vl,Us[zs++]=Dl,Dl=n,Vl=r}function ep(n,r,a){pn[mn++]=vr,pn[mn++]=_r,pn[mn++]=Fi,Fi=n;var c=vr;n=_r;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-Bt(r)+d|a<<d|c,_r=p+n}else vr=1<<p|a<<d|c,_r=n}function Mc(n){n.return!==null&&(Ui(n,1),ep(n,1,0))}function bc(n){for(;n===Dl;)Dl=Us[--zs],Us[zs]=null,Vl=Us[--zs],Us[zs]=null;for(;n===Fi;)Fi=pn[--mn],pn[mn]=null,_r=pn[--mn],pn[mn]=null,vr=pn[--mn],pn[mn]=null}var an=null,ln=null,Ke=!1,Dn=null;function tp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function np(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Fi!==null?{id:vr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fc(n){if(Ke){var r=ln;if(r){var a=r;if(!np(n,r)){if(jc(n))throw Error(t(418));r=$r(a.nextSibling);var c=an;r&&np(n,r)?tp(c,a):(n.flags=n.flags&-4097|2,Ke=!1,an=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,an=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Ol(n){if(n!==an)return!1;if(!Ke)return rp(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Nc(n.type,n.memoizedProps)),r&&(r=ln)){if(jc(n))throw ip(),Error(t(418));for(;r;)tp(n,r),r=$r(r.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?$r(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=ln;n;)n=$r(n.nextSibling)}function Bs(){ln=an=null,Ke=!1}function Uc(n){Dn===null?Dn=[n]:Dn.push(n)}var dE=Ee.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ll(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function sp(n){var r=n._init;return r(n._payload)}function op(n){function r(b,N){if(n){var j=b.deletions;j===null?(b.deletions=[N],b.flags|=16):j.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)r(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=ei(b,N),b.index=0,b.sibling=null,b}function p(b,N,j){return b.index=j,n?(j=b.alternate,j!==null?(j=j.index,j<N?(b.flags|=2,N):j):(b.flags|=2,N)):(b.flags|=1048576,N)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,N,j,Q){return N===null||N.tag!==6?(N=xh(j,b.mode,Q),N.return=b,N):(N=d(N,j),N.return=b,N)}function R(b,N,j,Q){var ae=j.type;return ae===x?q(b,N,j.props.children,Q,j.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xt&&sp(ae)===N.type)?(Q=d(N,j.props),Q.ref=la(b,N,j),Q.return=b,Q):(Q=su(j.type,j.key,j.props,null,b.mode,Q),Q.ref=la(b,N,j),Q.return=b,Q)}function F(b,N,j,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Dh(j,b.mode,Q),N.return=b,N):(N=d(N,j.children||[]),N.return=b,N)}function q(b,N,j,Q,ae){return N===null||N.tag!==7?(N=Ki(j,b.mode,Q,ae),N.return=b,N):(N=d(N,j),N.return=b,N)}function G(b,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=xh(""+N,b.mode,j),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case We:return j=su(N.type,N.key,N.props,null,b.mode,j),j.ref=la(b,null,N),j.return=b,j;case Ae:return N=Dh(N,b.mode,j),N.return=b,N;case xt:var Q=N._init;return G(b,Q(N._payload),j)}if(ar(N)||ue(N))return N=Ki(N,b.mode,j,null),N.return=b,N;Ll(b,N)}return null}function H(b,N,j,Q){var ae=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ae!==null?null:I(b,N,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case We:return j.key===ae?R(b,N,j,Q):null;case Ae:return j.key===ae?F(b,N,j,Q):null;case xt:return ae=j._init,H(b,N,ae(j._payload),Q)}if(ar(j)||ue(j))return ae!==null?null:q(b,N,j,Q,null);Ll(b,j)}return null}function ee(b,N,j,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return b=b.get(j)||null,I(N,b,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case We:return b=b.get(Q.key===null?j:Q.key)||null,R(N,b,Q,ae);case Ae:return b=b.get(Q.key===null?j:Q.key)||null,F(N,b,Q,ae);case xt:var ce=Q._init;return ee(b,N,j,ce(Q._payload),ae)}if(ar(Q)||ue(Q))return b=b.get(j)||null,q(N,b,Q,ae,null);Ll(N,Q)}return null}function ie(b,N,j,Q){for(var ae=null,ce=null,he=N,ge=N=0,Tt=null;he!==null&&ge<j.length;ge++){he.index>ge?(Tt=he,he=null):Tt=he.sibling;var Oe=H(b,he,j[ge],Q);if(Oe===null){he===null&&(he=Tt);break}n&&he&&Oe.alternate===null&&r(b,he),N=p(Oe,N,ge),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe,he=Tt}if(ge===j.length)return a(b,he),Ke&&Ui(b,ge),ae;if(he===null){for(;ge<j.length;ge++)he=G(b,j[ge],Q),he!==null&&(N=p(he,N,ge),ce===null?ae=he:ce.sibling=he,ce=he);return Ke&&Ui(b,ge),ae}for(he=c(b,he);ge<j.length;ge++)Tt=ee(he,b,ge,j[ge],Q),Tt!==null&&(n&&Tt.alternate!==null&&he.delete(Tt.key===null?ge:Tt.key),N=p(Tt,N,ge),ce===null?ae=Tt:ce.sibling=Tt,ce=Tt);return n&&he.forEach(function(ti){return r(b,ti)}),Ke&&Ui(b,ge),ae}function oe(b,N,j,Q){var ae=ue(j);if(typeof ae!="function")throw Error(t(150));if(j=ae.call(j),j==null)throw Error(t(151));for(var ce=ae=null,he=N,ge=N=0,Tt=null,Oe=j.next();he!==null&&!Oe.done;ge++,Oe=j.next()){he.index>ge?(Tt=he,he=null):Tt=he.sibling;var ti=H(b,he,Oe.value,Q);if(ti===null){he===null&&(he=Tt);break}n&&he&&ti.alternate===null&&r(b,he),N=p(ti,N,ge),ce===null?ae=ti:ce.sibling=ti,ce=ti,he=Tt}if(Oe.done)return a(b,he),Ke&&Ui(b,ge),ae;if(he===null){for(;!Oe.done;ge++,Oe=j.next())Oe=G(b,Oe.value,Q),Oe!==null&&(N=p(Oe,N,ge),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return Ke&&Ui(b,ge),ae}for(he=c(b,he);!Oe.done;ge++,Oe=j.next())Oe=ee(he,b,ge,Oe.value,Q),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?ge:Oe.key),N=p(Oe,N,ge),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(qE){return r(b,qE)}),Ke&&Ui(b,ge),ae}function rt(b,N,j,Q){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case We:e:{for(var ae=j.key,ce=N;ce!==null;){if(ce.key===ae){if(ae=j.type,ae===x){if(ce.tag===7){a(b,ce.sibling),N=d(ce,j.props.children),N.return=b,b=N;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xt&&sp(ae)===ce.type){a(b,ce.sibling),N=d(ce,j.props),N.ref=la(b,ce,j),N.return=b,b=N;break e}a(b,ce);break}else r(b,ce);ce=ce.sibling}j.type===x?(N=Ki(j.props.children,b.mode,Q,j.key),N.return=b,b=N):(Q=su(j.type,j.key,j.props,null,b.mode,Q),Q.ref=la(b,N,j),Q.return=b,b=Q)}return v(b);case Ae:e:{for(ce=j.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(b,N.sibling),N=d(N,j.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else r(b,N);N=N.sibling}N=Dh(j,b.mode,Q),N.return=b,b=N}return v(b);case xt:return ce=j._init,rt(b,N,ce(j._payload),Q)}if(ar(j))return ie(b,N,j,Q);if(ue(j))return oe(b,N,j,Q);Ll(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,j),N.return=b,b=N):(a(b,N),N=xh(j,b.mode,Q),N.return=b,b=N),v(b)):a(b,N)}return rt}var $s=op(!0),ap=op(!1),Ml=Hr(null),bl=null,Hs=null,zc=null;function Bc(){zc=Hs=bl=null}function $c(n){var r=Ml.current;qe(Ml),n._currentValue=r}function Hc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){bl=n,zc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Jt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(zc!==n)if(n={context:n,memoizedValue:r,next:null},Hs===null){if(bl===null)throw Error(t(308));Hs=n,bl.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return r}var zi=null;function qc(n){zi===null?zi=[n]:zi.push(n)}function lp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,qc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}function cp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Fl(n,r,a,c){var d=n.updateQueue;Gr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,F=R.next;R.next=null,v===null?p=F:v.next=F,v=R;var q=n.alternate;q!==null&&(q=q.updateQueue,I=q.lastBaseUpdate,I!==v&&(I===null?q.firstBaseUpdate=F:I.next=F,q.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;v=0,q=F=R=null,I=p;do{var H=I.lane,ee=I.eventTime;if((c&H)===H){q!==null&&(q=q.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,oe=I;switch(H=r,ee=a,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){G=ie.call(ee,G,H);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,H=typeof ie=="function"?ie.call(ee,G,H):ie,H==null)break e;G=te({},G,H);break e;case 2:Gr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[I]:H.push(I))}else ee={eventTime:ee,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},q===null?(F=q=ee,R=G):q=q.next=ee,v|=H;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;H=I,I=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(q===null&&(R=G),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Hi|=v,n.lanes=v,n.memoizedState=G}}function hp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Hr(ua),ca=Hr(ua),ha=Hr(ua);function Bi(n){if(n===ua)throw Error(t(174));return n}function Gc(n,r){switch($e(ha,r),$e(ca,n),$e(Kn,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ft(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ft(r,n)}qe(Kn),$e(Kn,r)}function Ws(){qe(Kn),qe(ca),qe(ha)}function dp(n){Bi(ha.current);var r=Bi(Kn.current),a=ft(r,n.type);r!==a&&($e(ca,n),$e(Kn,a))}function Kc(n){ca.current===n&&(qe(Kn),qe(ca))}var Je=Hr(0);function Ul(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Qc=[];function Yc(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var zl=Ee.ReactCurrentDispatcher,Jc=Ee.ReactCurrentBatchConfig,$i=0,Xe=null,mt=null,Et=null,Bl=!1,da=!1,fa=0,fE=0;function Vt(){throw Error(t(321))}function Xc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function Zc(n,r,a,c,d,p){if($i=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,zl.current=n===null||n.memoizedState===null?yE:vE,n=a(c,d),da){p=0;do{if(da=!1,fa=0,25<=p)throw Error(t(301));p+=1,Et=mt=null,r.updateQueue=null,zl.current=_E,n=a(c,d)}while(da)}if(zl.current=ql,r=mt!==null&&mt.next!==null,$i=0,Et=mt=Xe=null,Bl=!1,r)throw Error(t(300));return n}function eh(){var n=fa!==0;return fa=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Xe.memoizedState=Et=n:Et=Et.next=n,Et}function yn(){if(mt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var r=Et===null?Xe.memoizedState:Et.next;if(r!==null)Et=r,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Xe.memoizedState=Et=n:Et=Et.next=n}return Et}function pa(n,r){return typeof r=="function"?r(n):r}function th(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,R=null,F=p;do{var q=F.lane;if(($i&q)===q)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(I=R=G,v=c):R=R.next=G,Xe.lanes|=q,Hi|=q}F=F.next}while(F!==null&&F!==p);R===null?v=c:R.next=I,xn(c,r.memoizedState)||(Jt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Hi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function nh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);xn(p,r.memoizedState)||(Jt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function fp(){}function pp(n,r){var a=Xe,c=yn(),d=r(),p=!xn(c.memoizedState,d);if(p&&(c.memoizedState=d,Jt=!0),c=c.queue,rh(yp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ma(9,gp.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));($i&30)!==0||mp(a,r,d)}return d}function mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function gp(n,r,a,c){r.value=a,r.getSnapshot=c,vp(r)&&_p(n)}function yp(n,r,a){return a(function(){vp(r)&&_p(n)})}function vp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function _p(n){var r=Er(n,1);r!==null&&Mn(r,n,1,-1)}function Ep(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=gE.bind(null,Xe,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function wp(){return yn().memoizedState}function $l(n,r,a,c){var d=Qn();Xe.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function Hl(n,r,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(mt!==null){var v=mt.memoizedState;if(p=v.destroy,c!==null&&Xc(c,v.deps)){d.memoizedState=ma(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ma(1|r,a,p,c)}function Tp(n,r){return $l(8390656,8,n,r)}function rh(n,r){return Hl(2048,8,n,r)}function Ip(n,r){return Hl(4,2,n,r)}function Sp(n,r){return Hl(4,4,n,r)}function Ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Cp(n,r,a){return a=a!=null?a.concat([n]):null,Hl(4,4,Ap.bind(null,r,n),a)}function ih(){}function kp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Rp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Pp(n,r,a){return($i&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(xn(a,r)||(a=Di(),Xe.lanes|=a,Hi|=a,n.baseState=!0),r)}function pE(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),r()}finally{ke=a,Jc.transition=c}}function Np(){return yn().memoizedState}function mE(n,r,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))Dp(r,a);else if(a=lp(n,r,a,c),a!==null){var d=qt();Mn(a,n,c,d),Vp(a,r,c)}}function gE(n,r,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))Dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,xn(I,v)){var R=r.interleaved;R===null?(d.next=d,qc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=lp(n,r,d,c),a!==null&&(d=qt(),Mn(a,n,c,d),Vp(a,r,c))}}function xp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Dp(n,r){da=Bl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Vp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}var ql={readContext:gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},yE={readContext:gn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:Tp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,$l(4194308,4,Ap.bind(null,r,n),a)},useLayoutEffect:function(n,r){return $l(4194308,4,n,r)},useInsertionEffect:function(n,r){return $l(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=mE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Ep,useDebugValue:ih,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Ep(!1),r=n[0];return n=pE.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Qn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));($i&30)!==0||mp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Tp(yp.bind(null,c,p,n),[n]),c.flags|=2048,ma(9,gp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=wt.identifierPrefix;if(Ke){var a=_r,c=vr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=fE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},vE={readContext:gn,useCallback:kp,useContext:gn,useEffect:rh,useImperativeHandle:Cp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:Rp,useReducer:th,useRef:wp,useState:function(){return th(pa)},useDebugValue:ih,useDeferredValue:function(n){var r=yn();return Pp(r,mt.memoizedState,n)},useTransition:function(){var n=th(pa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:fp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1},_E={readContext:gn,useCallback:kp,useContext:gn,useEffect:rh,useImperativeHandle:Cp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:Rp,useReducer:nh,useRef:wp,useState:function(){return nh(pa)},useDebugValue:ih,useDeferredValue:function(n){var r=yn();return mt===null?r.memoizedState=n:Pp(r,mt.memoizedState,n)},useTransition:function(){var n=nh(pa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:fp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function sh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=qt(),d=Xr(n),p=wr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(Mn(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=qt(),d=Xr(n),p=wr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(Mn(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=qt(),c=Xr(n),d=wr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,c),r!==null&&(Mn(r,n,c,a),jl(r,n,c))}};function Op(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,p):!0}function Lp(n,r,a){var c=!1,d=qr,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Yt(r)?ji:Dt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Mp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Wl.enqueueReplaceState(r,r.state,null)}function oh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Wc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Yt(r)?ji:Dt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(sh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Wl.enqueueReplaceState(d,d.state,null),Fl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var a="",c=r;do a+=Te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function ah(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function lh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var EE=typeof WeakMap=="function"?WeakMap:Map;function bp(n,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Zl||(Zl=!0,Ih=c),lh(n,r)},a}function jp(n,r,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){lh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){lh(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Fp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new EE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=OE.bind(null,n,r,a),r.then(n,n))}function Up(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function zp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var wE=Ee.ReactCurrentOwner,Jt=!1;function Ht(n,r,a,c){r.child=n===null?ap(r,null,a,c):$s(r,n.child,a,c)}function Bp(n,r,a,c,d){a=a.render;var p=r.ref;return qs(r,d),c=Zc(n,r,a,c,p,d),a=eh(),n!==null&&!Jt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Ke&&a&&Mc(r),r.flags|=1,Ht(n,r,c,d),r.child)}function $p(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Nh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Hp(n,r,p,c,d)):(n=su(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===r.ref)return Tr(n,r,d)}return r.flags|=1,n=ei(p,c),n.ref=r.ref,n.return=r,r.child=n}function Hp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ta(p,c)&&n.ref===r.ref)if(Jt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return r.lanes=n.lanes,Tr(n,r,d)}return uh(n,r,a,c,d)}function qp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Qs,un),un|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Qs,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(Qs,un),un|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(Qs,un),un|=c;return Ht(n,r,d,a),r.child}function Wp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function uh(n,r,a,c,d){var p=Yt(a)?ji:Dt.current;return p=Fs(r,p),qs(r,d),a=Zc(n,r,a,c,p,d),c=eh(),n!==null&&!Jt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Ke&&c&&Mc(r),r.flags|=1,Ht(n,r,a,d),r.child)}function Gp(n,r,a,c,d){if(Yt(a)){var p=!0;Nl(r)}else p=!1;if(qs(r,d),r.stateNode===null)Kl(n,r),Lp(r,a,c),oh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var R=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Yt(a)?ji:Dt.current,F=Fs(r,F));var q=a.getDerivedStateFromProps,G=typeof q=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||R!==F)&&Mp(r,v,c,F),Gr=!1;var H=r.memoizedState;v.state=H,Fl(r,c,v,d),R=r.memoizedState,I!==c||H!==R||Qt.current||Gr?(typeof q=="function"&&(sh(r,a,q,c),R=r.memoizedState),(I=Gr||Op(r,a,I,c,H,R,F))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),v.props=c,v.state=R,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,up(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:Vn(r.type,I),v.props=F,G=r.pendingProps,H=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=Yt(a)?ji:Dt.current,R=Fs(r,R));var ee=a.getDerivedStateFromProps;(q=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==G||H!==R)&&Mp(r,v,c,R),Gr=!1,H=r.memoizedState,v.state=H,Fl(r,c,v,d);var ie=r.memoizedState;I!==G||H!==ie||Qt.current||Gr?(typeof ee=="function"&&(sh(r,a,ee,c),ie=r.memoizedState),(F=Gr||Op(r,a,F,c,H,ie,R)||!1)?(q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,R)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),v.props=c,v.state=ie,v.context=R,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return ch(n,r,a,c,p,d)}function ch(n,r,a,c,d,p){Wp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Xf(r,a,!1),Tr(n,r,p);c=r.stateNode,wE.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=$s(r,n.child,null,p),r.child=$s(r,null,I,p)):Ht(n,r,I,p),r.memoizedState=c.state,d&&Xf(r,a,!0),r.child}function Kp(n){var r=n.stateNode;r.pendingContext?Yf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Yf(n,r.context,!1),Gc(n,r.containerInfo)}function Qp(n,r,a,c,d){return Bs(),Uc(d),r.flags|=256,Ht(n,r,a,c),r.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function dh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Je,d&1),n===null)return Fc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=ou(v,c,0,null),n=Ki(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=dh(a),r.memoizedState=hh,n):fh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return TE(n,r,v,c,I,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ei(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ei(I,p):(p=Ki(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?dh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=hh,c}return p=n.child,n=p.sibling,c=ei(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function fh(n,r){return r=ou({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Gl(n,r,a,c){return c!==null&&Uc(c),$s(r,n.child,null,a),n=fh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function TE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=ah(Error(t(422))),Gl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=ou({mode:"visible",children:c.children},d,0,null),p=Ki(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&$s(r,n.child,null,v),r.child.memoizedState=dh(v),r.memoizedState=hh,p);if((r.mode&1)===0)return Gl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=ah(p,c,void 0),Gl(n,r,v,c)}if(I=(v&n.childLanes)!==0,Jt||I){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Er(n,d),Mn(c,n,d,-1))}return Ph(),c=ah(Error(t(421))),Gl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=LE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,ln=$r(d.nextSibling),an=r,Ke=!0,Dn=null,n!==null&&(pn[mn++]=vr,pn[mn++]=_r,pn[mn++]=Fi,vr=n.id,_r=n.overflow,Fi=r),r=fh(r,c.children),r.flags|=4096,r)}function Jp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Hc(n.return,r,a)}function ph(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Xp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jp(n,a,r);else if(n.tag===19)Jp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ul(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),ph(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ul(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ph(r,!0,a,null,p);break;case"together":ph(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Kl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Tr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Hi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function IE(n,r,a){switch(r.tag){case 3:Kp(r),Bs();break;case 5:dp(r);break;case 1:Yt(r.type)&&Nl(r);break;case 4:Gc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Ml,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Yp(n,r,a):($e(Je,Je.current&1),n=Tr(n,r,a),n!==null?n.sibling:null);$e(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Xp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,qp(n,r,a)}return Tr(n,r,a)}var Zp,mh,em,tm;Zp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mh=function(){},em=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Bi(Kn.current);var p=null;switch(a){case"input":d=wi(n,d),c=wi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=No(n,d),c=No(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}Mo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==I&&(R!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&I[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&He("scroll",n),p||I===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},tm=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function SE(n,r,a){var c=r.pendingProps;switch(bc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Yt(r.type)&&Pl(),Ot(r),null;case 3:return c=r.stateNode,Ws(),qe(Qt),qe(Dt),Yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ol(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Ch(Dn),Dn=null))),mh(n,r),Ot(r),null;case 5:Kc(r);var d=Bi(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)em(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Bi(Kn.current),Ol(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Gn]=r,c[oa]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)He(ra[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":as(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":us(c,p),He("invalid",c)}Mo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":or(c),Xa(c,p,!0);break;case"textarea":or(c),xo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=kl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=r,n[oa]=c,Zp(n,r,!1,!1),r.stateNode=n;e:{switch(v=bo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)He(ra[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":as(n,c),d=wi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),He("invalid",n);break;case"textarea":us(n,c),d=No(n,c),He("invalid",n);break;default:d=c}Mo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var R=I[p];p==="style"?Oo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Do(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Dr(n,R):typeof R=="number"&&Dr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&He("scroll",n):R!=null&&ye(n,p,R,v))}switch(a){case"input":or(n),Xa(n,c,!1);break;case"textarea":or(n),xo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?lr(n,!!c.multiple,p,!1):c.defaultValue!=null&&lr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)tm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Bi(ha.current),Bi(Kn.current),Ol(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(p=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Cl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Ot(r),null;case 13:if(qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ip(),Bs(),r.flags|=98560,p=!1;else if(p=Ol(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Dn!==null&&(Ch(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):Ph())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Ws(),mh(n,r),n===null&&ia(r.stateNode.containerInfo),Ot(r),null;case 10:return $c(r.type._context),Ot(r),null;case 17:return Yt(r.type)&&Pl(),Ot(r),null;case 19:if(qe(Je),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ga(p,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Ul(n),v!==null){for(r.flags|=128,ga(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>Ys&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ul(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ke)return Ot(r),null}else 2*Be()-p.renderingStartTime>Ys&&a!==1073741824&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Je.current,$e(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Rh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function AE(n,r){switch(bc(r),r.tag){case 1:return Yt(r.type)&&Pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),qe(Qt),qe(Dt),Yc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Kc(r),null;case 13:if(qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Je),null;case 4:return Ws(),null;case 10:return $c(r.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var Ql=!1,Lt=!1,CE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function gh(n,r,a){try{a()}catch(c){et(n,r,c)}}var nm=!1;function kE(n,r){if(Rc=Ur,n=Of(),Ec(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,R=-1,F=0,q=0,G=n,H=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(I=v+d),G!==p||c!==0&&G.nodeType!==3||(R=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(ee=G.firstChild)!==null;)H=G,G=ee;for(;;){if(G===n)break t;if(H===a&&++F===d&&(I=v),H===p&&++q===c&&(R=v),(ee=G.nextSibling)!==null)break;G=H,H=G.parentNode}G=ee}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},Ur=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,rt=ie.memoizedState,b=r.stateNode,N=b.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Vn(r.type,oe),rt);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){et(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=nm,nm=!1,ie}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&gh(r,a,p)}d=d.next}while(d!==c)}}function Yl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function yh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function rm(n){var r=n.alternate;r!==null&&(n.alternate=null,rm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[oa],delete r[Vc],delete r[uE],delete r[cE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(vh(n,r,a),n=n.sibling;n!==null;)vh(n,r,a),n=n.sibling}function _h(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_h(n,r,a),n=n.sibling;n!==null;)_h(n,r,a),n=n.sibling}var Ct=null,On=!1;function Qr(n,r,a){for(a=a.child;a!==null;)om(n,r,a),a=a.sibling}function om(n,r,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ni,a)}catch{}switch(a.tag){case 5:Lt||Ks(a,r);case 6:var c=Ct,d=On;Ct=null,Qr(n,r,a),Ct=c,On=d,Ct!==null&&(On?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(On?(n=Ct,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),Pn(n)):Dc(Ct,a.stateNode));break;case 4:c=Ct,d=On,Ct=a.stateNode.containerInfo,On=!0,Qr(n,r,a),Ct=c,On=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&gh(a,r,v),d=d.next}while(d!==c)}Qr(n,r,a);break;case 1:if(!Lt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,r,I)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Qr(n,r,a),Lt=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new CE),r.forEach(function(c){var d=ME.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,On=!1;break e;case 3:Ct=I.stateNode.containerInfo,On=!0;break e;case 4:Ct=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));om(p,v,d),Ct=null,On=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)lm(r,n),r=r.sibling}function lm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),Yn(n),c&4){try{ya(3,n,n.return),Yl(3,n)}catch(oe){et(n,n.return,oe)}try{ya(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Ln(r,n),Yn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Ln(r,n),Yn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{Dr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ro(d,p),bo(I,v);var F=bo(I,p);for(v=0;v<R.length;v+=2){var q=R[v],G=R[v+1];q==="style"?Oo(d,G):q==="dangerouslySetInnerHTML"?Do(d,G):q==="children"?Dr(d,G):ye(d,q,G,F)}switch(I){case"input":Po(d,p);break;case"textarea":cs(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?lr(d,!!p.multiple,ee,!1):H!==!!p.multiple&&(p.defaultValue!=null?lr(d,!!p.multiple,p.defaultValue,!0):lr(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(oe){et(n,n.return,oe)}}break;case 6:if(Ln(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){et(n,n.return,oe)}}break;case 3:if(Ln(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Ln(r,n),Yn(n);break;case 13:Ln(r,n),Yn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Th=Be())),c&4&&am(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||q,Ln(r,n),Lt=F):Ln(r,n),Yn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&(n.mode&1)!==0)for(re=n,q=n.child;q!==null;){for(G=re=q;re!==null;){switch(H=re,ee=H.child,H.tag){case 0:case 11:case 14:case 15:ya(4,H,H.return);break;case 1:Ks(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:Ks(H,H.return);break;case 22:if(H.memoizedState!==null){hm(G);continue}}ee!==null?(ee.return=H,re=ee):hm(G)}q=q.sibling}e:for(q=null,G=n;;){if(G.tag===5){if(q===null){q=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,R=G.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Vo("display",v))}catch(oe){et(n,n.return,oe)}}}else if(G.tag===6){if(q===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;q===G&&(q=null),G=G.return}q===G&&(q=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Ln(r,n),Yn(n),c&4&&am(n);break;case 21:break;default:Ln(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Dr(d,""),c.flags&=-33);var p=sm(n);_h(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=sm(n);vh(n,I,v);break;default:throw Error(t(161))}}catch(R){et(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function RE(n,r,a){re=n,um(n)}function um(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Ql;if(!v){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Lt;I=Ql;var F=Lt;if(Ql=v,(Lt=R)&&!F)for(re=d;re!==null;)v=re,R=v.child,v.tag===22&&v.memoizedState!==null?dm(d):R!==null?(R.return=v,re=R):dm(d);for(;p!==null;)re=p,um(p),p=p.sibling;re=d,Ql=I,Lt=F}cm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):cm(n)}}function cm(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Yl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&hp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}hp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var G=q.dehydrated;G!==null&&Pn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&yh(r)}catch(H){et(r,r.return,H)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function hm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function dm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Yl(4,r)}catch(R){et(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){et(r,d,R)}}var p=r.return;try{yh(r)}catch(R){et(r,p,R)}break;case 5:var v=r.return;try{yh(r)}catch(R){et(r,v,R)}}}catch(R){et(r,r.return,R)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var PE=Math.ceil,Jl=Ee.ReactCurrentDispatcher,Eh=Ee.ReactCurrentOwner,vn=Ee.ReactCurrentBatchConfig,De=0,wt=null,at=null,kt=0,un=0,Qs=Hr(0),gt=0,va=null,Hi=0,Xl=0,wh=0,_a=null,Xt=null,Th=0,Ys=1/0,Ir=null,Zl=!1,Ih=null,Yr=null,eu=!1,Jr=null,tu=0,Ea=0,Sh=null,nu=-1,ru=0;function qt(){return(De&6)!==0?Be():nu!==-1?nu:nu=Be()}function Xr(n){return(n.mode&1)===0?1:(De&2)!==0&&kt!==0?kt&-kt:dE.transition!==null?(ru===0&&(ru=Di()),ru):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n)}function Mn(n,r,a,c){if(50<Ea)throw Ea=0,Sh=null,Error(t(185));Mr(n,a,c),((De&2)===0||n!==wt)&&(n===wt&&((De&2)===0&&(Xl|=a),gt===4&&Zr(n,kt)),Zt(n,c),a===1&&De===0&&(r.mode&1)===0&&(Ys=Be()+500,xl&&Wr()))}function Zt(n,r){var a=n.callbackNode;hr(n,r);var c=xi(n,n===wt?kt:0);if(c===0)a!==null&&$o(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&$o(a),r===1)n.tag===0?hE(pm.bind(null,n)):Zf(pm.bind(null,n)),aE(function(){(De&6)===0&&Wr()}),a=null;else{switch(jr(c)){case 1:a=Pi;break;case 4:a=Vr;break;case 16:a=hn;break;case 536870912:a=rl;break;default:a=hn}a=Tm(a,fm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function fm(n,r){if(nu=-1,ru=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=xi(n,n===wt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=iu(n,c);else{r=c;var d=De;De|=2;var p=gm();(wt!==n||kt!==r)&&(Ir=null,Ys=Be()+500,Wi(n,r));do try{DE();break}catch(I){mm(n,I)}while(!0);Bc(),Jl.current=p,De=d,at!==null?r=0:(wt=null,kt=0,r=gt)}if(r!==0){if(r===2&&(d=rn(n),d!==0&&(c=d,r=Ah(n,d))),r===1)throw a=va,Wi(n,0),Zr(n,c),Zt(n,Be()),a;if(r===6)Zr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!NE(d)&&(r=iu(n,c),r===2&&(p=rn(n),p!==0&&(c=p,r=Ah(n,p))),r===1))throw a=va,Wi(n,0),Zr(n,c),Zt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Gi(n,Xt,Ir);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Th+500-Be(),10<r)){if(xi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=xc(Gi.bind(null,n,Xt,Ir),r);break}Gi(n,Xt,Ir);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*PE(c/1960))-c,10<c){n.timeoutHandle=xc(Gi.bind(null,n,Xt,Ir),c);break}Gi(n,Xt,Ir);break;case 5:Gi(n,Xt,Ir);break;default:throw Error(t(329))}}}return Zt(n,Be()),n.callbackNode===a?fm.bind(null,n):null}function Ah(n,r){var a=_a;return n.current.memoizedState.isDehydrated&&(Wi(n,r).flags|=256),n=iu(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&Ch(r)),n}function Ch(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function NE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!xn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~wh,r&=~Xl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function pm(n){if((De&6)!==0)throw Error(t(327));Js();var r=xi(n,0);if((r&1)===0)return Zt(n,Be()),null;var a=iu(n,r);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(r=c,a=Ah(n,c))}if(a===1)throw a=va,Wi(n,0),Zr(n,r),Zt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Gi(n,Xt,Ir),Zt(n,Be()),null}function kh(n,r){var a=De;De|=1;try{return n(r)}finally{De=a,De===0&&(Ys=Be()+500,xl&&Wr())}}function qi(n){Jr!==null&&Jr.tag===0&&(De&6)===0&&Js();var r=De;De|=1;var a=vn.transition,c=ke;try{if(vn.transition=null,ke=1,n)return n()}finally{ke=c,vn.transition=a,De=r,(De&6)===0&&Wr()}}function Rh(){un=Qs.current,qe(Qs)}function Wi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,oE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pl();break;case 3:Ws(),qe(Qt),qe(Dt),Yc();break;case 5:Kc(c);break;case 4:Ws();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:$c(c.type._context);break;case 22:case 23:Rh()}a=a.return}if(wt=n,at=n=ei(n.current,null),kt=un=r,gt=0,va=null,wh=Xl=Hi=0,Xt=_a=null,zi!==null){for(r=0;r<zi.length;r++)if(a=zi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}zi=null}return n}function mm(n,r){do{var a=at;try{if(Bc(),zl.current=ql,Bl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Bl=!1}if($i=0,Et=mt=Xe=null,da=!1,fa=0,Eh.current=null,a===null||a.return===null){gt=1,va=r,at=null;break}e:{var p=n,v=a.return,I=a,R=r;if(r=kt,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,q=I,G=q.tag;if((q.mode&1)===0&&(G===0||G===11||G===15)){var H=q.alternate;H?(q.updateQueue=H.updateQueue,q.memoizedState=H.memoizedState,q.lanes=H.lanes):(q.updateQueue=null,q.memoizedState=null)}var ee=Up(v);if(ee!==null){ee.flags&=-257,zp(ee,v,I,p,r),ee.mode&1&&Fp(p,F,r),r=ee,R=F;var ie=r.updateQueue;if(ie===null){var oe=new Set;oe.add(R),r.updateQueue=oe}else ie.add(R);break e}else{if((r&1)===0){Fp(p,F,r),Ph();break e}R=Error(t(426))}}else if(Ke&&I.mode&1){var rt=Up(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),zp(rt,v,I,p,r),Uc(Gs(R,I));break e}}p=R=Gs(R,I),gt!==4&&(gt=2),_a===null?_a=[p]:_a.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var b=bp(p,R,r);cp(p,b);break e;case 1:I=R;var N=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Yr===null||!Yr.has(j)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=jp(p,I,r);cp(p,Q);break e}}p=p.return}while(p!==null)}vm(a)}catch(ae){r=ae,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function gm(){var n=Jl.current;return Jl.current=ql,n===null?ql:n}function Ph(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(Hi&268435455)===0&&(Xl&268435455)===0||Zr(wt,kt)}function iu(n,r){var a=De;De|=2;var c=gm();(wt!==n||kt!==r)&&(Ir=null,Wi(n,r));do try{xE();break}catch(d){mm(n,d)}while(!0);if(Bc(),De=a,Jl.current=c,at!==null)throw Error(t(261));return wt=null,kt=0,gt}function xE(){for(;at!==null;)ym(at)}function DE(){for(;at!==null&&!tl();)ym(at)}function ym(n){var r=wm(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?vm(n):at=r,Eh.current=null}function vm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=SE(a,r,un),a!==null){at=a;return}}else{if(a=AE(a,r),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,at=null;return}}if(r=r.sibling,r!==null){at=r;return}at=r=n}while(r!==null);gt===0&&(gt=5)}function Gi(n,r,a){var c=ke,d=vn.transition;try{vn.transition=null,ke=1,VE(n,r,a,c)}finally{vn.transition=d,ke=c}return null}function VE(n,r,a,c){do Js();while(Jr!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ue(n,p),n===wt&&(at=wt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||eu||(eu=!0,Tm(hn,function(){return Js(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var v=ke;ke=1;var I=De;De|=4,Eh.current=null,kE(n,a),lm(a,n),Z_(Pc),Ur=!!Rc,Pc=Rc=null,n.current=a,RE(a),dc(),De=I,ke=v,vn.transition=p}else n.current=a;if(eu&&(eu=!1,Jr=n,tu=d),p=n.pendingLanes,p===0&&(Yr=null),il(a.stateNode),Zt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Zl)throw Zl=!1,n=Ih,Ih=null,n;return(tu&1)!==0&&n.tag!==0&&Js(),p=n.pendingLanes,(p&1)!==0?n===Sh?Ea++:(Ea=0,Sh=n):Ea=0,Wr(),null}function Js(){if(Jr!==null){var n=jr(tu),r=vn.transition,a=ke;try{if(vn.transition=null,ke=16>n?16:n,Jr===null)var c=!1;else{if(n=Jr,Jr=null,tu=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,re=n.current;re!==null;){var p=re,v=p.child;if((re.flags&16)!==0){var I=p.deletions;if(I!==null){for(var R=0;R<I.length;R++){var F=I[R];for(re=F;re!==null;){var q=re;switch(q.tag){case 0:case 11:case 15:ya(8,q,p)}var G=q.child;if(G!==null)G.return=q,re=G;else for(;re!==null;){q=re;var H=q.sibling,ee=q.return;if(rm(q),q===F){re=null;break}if(H!==null){H.return=ee,re=H;break}re=ee}}}var ie=p.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ya(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,re=b;break e}re=p.return}}var N=n.current;for(re=N;re!==null;){v=re;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,re=j;else e:for(v=N;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Yl(9,I)}}catch(ae){et(I,I.return,ae)}if(I===v){re=null;break e}var Q=I.sibling;if(Q!==null){Q.return=I.return,re=Q;break e}re=I.return}}if(De=d,Wr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ni,n)}catch{}c=!0}return c}finally{ke=a,vn.transition=r}}return!1}function _m(n,r,a){r=Gs(a,r),r=bp(n,r,1),n=Kr(n,r,1),r=qt(),n!==null&&(Mr(n,1,r),Zt(n,r))}function et(n,r,a){if(n.tag===3)_m(n,n,a);else for(;r!==null;){if(r.tag===3){_m(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Gs(a,n),n=jp(r,n,1),r=Kr(r,n,1),n=qt(),r!==null&&(Mr(r,1,n),Zt(r,n));break}}r=r.return}}function OE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=qt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(kt&a)===a&&(gt===4||gt===3&&(kt&130023424)===kt&&500>Be()-Th?Wi(n,0):wh|=a),Zt(n,r)}function Em(n,r){r===0&&((n.mode&1)===0?r=1:(r=Es,Es<<=1,(Es&130023424)===0&&(Es=4194304)));var a=qt();n=Er(n,r),n!==null&&(Mr(n,r,a),Zt(n,a))}function LE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Em(n,a)}function ME(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Em(n,a)}var wm;wm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qt.current)Jt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Jt=!1,IE(n,r,a);Jt=(n.flags&131072)!==0}else Jt=!1,Ke&&(r.flags&1048576)!==0&&ep(r,Vl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Kl(n,r),n=r.pendingProps;var d=Fs(r,Dt.current);qs(r,a),d=Zc(null,r,c,n,d,a);var p=eh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yt(c)?(p=!0,Nl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wc(r),d.updater=Wl,r.stateNode=d,d._reactInternals=r,oh(r,c,n,a),r=ch(null,r,c,!0,p,a)):(r.tag=0,Ke&&p&&Mc(r),Ht(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Kl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=jE(c),n=Vn(c,n),d){case 0:r=uh(null,r,c,n,a);break e;case 1:r=Gp(null,r,c,n,a);break e;case 11:r=Bp(null,r,c,n,a);break e;case 14:r=$p(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),uh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Gp(n,r,c,d,a);case 3:e:{if(Kp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,up(n,r),Fl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Gs(Error(t(423)),r),r=Qp(n,r,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),r),r=Qp(n,r,c,a,d);break e}else for(ln=$r(r.stateNode.containerInfo.firstChild),an=r,Ke=!0,Dn=null,a=ap(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===d){r=Tr(n,r,a);break e}Ht(n,r,c,a)}r=r.child}return r;case 5:return dp(r),n===null&&Fc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Nc(c,d)?v=null:p!==null&&Nc(c,p)&&(r.flags|=32),Wp(n,r),Ht(n,r,v,a),r.child;case 6:return n===null&&Fc(r),null;case 13:return Yp(n,r,a);case 4:return Gc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=$s(r,null,c,a):Ht(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Bp(n,r,c,d,a);case 7:return Ht(n,r,r.pendingProps,a),r.child;case 8:return Ht(n,r,r.pendingProps.children,a),r.child;case 12:return Ht(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,$e(Ml,c._currentValue),c._currentValue=v,p!==null)if(xn(p.value,v)){if(p.children===d.children&&!Qt.current){r=Tr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=wr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?R.next=R:(R.next=q.next,q.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Hc(p.return,a,r),I.lanes|=a;break}R=R.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Hc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ht(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=gn(d),c=c(d),r.flags|=1,Ht(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),$p(n,r,c,d,a);case 15:return Hp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Kl(n,r),r.tag=1,Yt(c)?(n=!0,Nl(r)):n=!1,qs(r,a),Lp(r,c,d),oh(r,c,d,a),ch(null,r,c,!0,n,a);case 19:return Xp(n,r,a);case 22:return qp(n,r,a)}throw Error(t(156,r.tag))};function Tm(n,r){return vs(n,r)}function bE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new bE(n,r,a,c)}function Nh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jE(n){if(typeof n=="function")return Nh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Nt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function su(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Nh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return Ki(a.children,d,p,r);case S:v=8,d|=8;break;case C:return n=_n(12,a,r,d|2),n.elementType=C,n.lanes=p,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=p,n;case tt:return n=_n(19,a,r,d),n.elementType=tt,n.lanes=p,n;case Fe:return ou(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case V:v=9;break e;case L:v=11;break e;case Nt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ki(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function ou(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function xh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Dh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function FE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vh(n,r,a,c,d,p,v,I,R){return n=new FE(n,r,a,I,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(p),n}function UE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Im(n){if(!n)return qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Jf(n,a,r)}return r}function Sm(n,r,a,c,d,p,v,I,R){return n=Vh(a,c,!0,n,d,p,v,I,R),n.context=Im(null),a=n.current,c=qt(),d=Xr(a),p=wr(c,d),p.callback=r??null,Kr(a,p,d),n.current.lanes=d,Mr(n,d,c),Zt(n,c),n}function au(n,r,a,c){var d=r.current,p=qt(),v=Xr(d);return a=Im(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(d,r,v),n!==null&&(Mn(n,d,v,p),jl(n,d,v)),v}function lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Oh(n,r){Am(n,r),(n=n.alternate)&&Am(n,r)}function zE(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lh(n){this._internalRoot=n}uu.prototype.render=Lh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));au(n,r,null,null)},uu.prototype.unmount=Lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qi(function(){au(null,n,null,null)}),r[gr]=null}};function uu(n){this._internalRoot=n}uu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ul();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&dl(n)}};function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function km(){}function BE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=lu(v);p.call(F)}}var v=Sm(r,c,n,0,null,!1,!1,"",km);return n._reactRootContainer=v,n[gr]=v.current,ia(n.nodeType===8?n.parentNode:n),qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=lu(R);I.call(F)}}var R=Vh(n,0,!1,null,null,!1,!1,"",km);return n._reactRootContainer=R,n[gr]=R.current,ia(n.nodeType===8?n.parentNode:n),qi(function(){au(r,R,a,c)}),R}function hu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var R=lu(v);I.call(R)}}au(r,v,n,d)}else v=BE(a,r,n,d,c);return lu(v)}al=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Or(r.pendingLanes);a!==0&&(br(r,a|1),Zt(r,Be()),(De&6)===0&&(Ys=Be()+500,Wr()))}break;case 13:qi(function(){var c=Er(n,1);if(c!==null){var d=qt();Mn(c,n,1,d)}}),Oh(n,1)}},ws=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=qt();Mn(r,n,134217728,a)}Oh(n,134217728)}},ll=function(n){if(n.tag===13){var r=Xr(n),a=Er(n,r);if(a!==null){var c=qt();Mn(a,n,r,c)}Oh(n,r)}},ul=function(){return ke},cl=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},ds=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));os(c),Po(c,d)}}}break;case"textarea":cs(n,a);break;case"select":r=a.value,r!=null&&lr(n,!!a.multiple,r,!1)}},Ai=kh,Fo=qi;var $E={usingClientEntryPoint:!1,Events:[aa,bs,Rl,zn,jo,kh]},wa={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HE={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||zE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Ni=du.inject(HE),nn=du}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E,en.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(r))throw Error(t(200));return UE(n,r,null,a)},en.createRoot=function(n,r){if(!Mh(n))throw Error(t(299));var a=!1,c="",d=Cm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Vh(n,1,!1,null,null,a,!1,c,d),n[gr]=r.current,ia(n.nodeType===8?n.parentNode:n),new Lh(r)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(r),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return qi(n)},en.hydrate=function(n,r,a){if(!cu(r))throw Error(t(200));return hu(null,n,r,!0,a)},en.hydrateRoot=function(n,r,a){if(!Mh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Sm(r,null,n,1,a??null,d,!1,p,v),n[gr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new uu(r)},en.render=function(n,r,a){if(!cu(r))throw Error(t(200));return hu(null,n,r,!1,a)},en.unmountComponentAtNode=function(n){if(!cu(n))throw Error(t(40));return n._reactRootContainer?(qi(function(){hu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},en.unstable_batchedUpdates=kh,en.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!cu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hu(n,r,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Lm;function XE(){if(Lm)return Fh.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Fh.exports=JE(),Fh.exports}var Mm;function ZE(){if(Mm)return fu;Mm=1;var i=XE();return fu.createRoot=i.createRoot,fu.hydrateRoot=i.hydrateRoot,fu}var ew=ZE();const tw=()=>{};var bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,T=u>>2,k=(u&3)<<4|m>>4;let D=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(D=64)),s.push(t[T],t[k],t[D],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ey(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):nw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||k==null)throw new rw;const D=u<<2|m>>4;if(s.push(D),_!==64){const z=m<<4&240|_>>2;if(s.push(z),k!==64){const Y=_<<6&192|k;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iw=function(i){const e=Ey(i);return wy.encodeByteArray(e,!0)},Du=function(i){return iw(i).replace(/\./g,"")},Ty=function(i){try{return wy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=()=>sw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof bm>"u")return;const i=bm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},lw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ty(i[1]);return e&&JSON.parse(e)},Qu=()=>{try{return tw()||ow()||aw()||lw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Iy=i=>{var e,t;return(t=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},uw=i=>{const e=Iy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Sy=()=>{var i;return(i=Qu())===null||i===void 0?void 0:i.config},Ay=i=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Du(JSON.stringify(t)),Du(JSON.stringify(h)),""].join(".")}const Pa={};function dw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Pa))Pa[e]?i.emulator.push(e):i.prod.push(e);return i}function fw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let jm=!1;function ky(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Pa[i]===e||Pa[i]||jm)return;Pa[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=dw().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function g(D,z){D.setAttribute("width","24"),D.setAttribute("id",z),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function _(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{jm=!0,h()},D}function T(D,z){D.setAttribute("id",z),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function k(){const D=fw(s),z=t("text"),Y=document.getElementById(z)||document.createElement("span"),X=t("learnmore"),W=document.getElementById(X)||document.createElement("a"),me=t("preprendIcon"),pe=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ye=D.element;m(ye),T(W,X);const Ee=_();g(pe,me),ye.append(pe,Y,W,Ee),document.body.appendChild(ye)}u?(Y.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function mw(){var i;const e=(i=Qu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){const i=zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ew(){return!mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Tw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="FirebaseError";class sr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Iw,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Sw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new sr(o,m,s)}}function Sw(i,e){return i.replace(Aw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Aw=/\{\$([^}]+)}/g;function Cw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Fm(u)&&Fm(h)){if(!Zi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Fm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ia(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Sa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function kw(i,e){const t=new Rw(i,e);return t.subscribe.bind(t)}class Rw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Bh),o.error===void 0&&(o.error=Bh),o.complete===void 0&&(o.complete=Bh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Bh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i){return i&&i._delegate?i._delegate:i}class es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(i){return i===Qi?void 0:i}function Dw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const Ow={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Lw=Ce.INFO,Mw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},bw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Mw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const jw=(i,e)=>e.some(t=>i instanceof t);let Um,zm;function Fw(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uw(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ry=new WeakMap,td=new WeakMap,Py=new WeakMap,$h=new WeakMap,Dd=new WeakMap;function zw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ui(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ry.set(t,i)}).catch(()=>{}),Dd.set(e,i),e}function Bw(i){if(td.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});td.set(i,e)}let nd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return td.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Py.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ui(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function $w(i){nd=i(nd)}function Hw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Hh(this),e,...t);return Py.set(s,e.sort?e.sort():[e]),ui(s)}:Uw().includes(i)?function(...e){return i.apply(Hh(this),e),ui(Ry.get(this))}:function(...e){return ui(i.apply(Hh(this),e))}}function qw(i){return typeof i=="function"?Hw(i):(i instanceof IDBTransaction&&Bw(i),jw(i,Fw())?new Proxy(i,nd):i)}function ui(i){if(i instanceof IDBRequest)return zw(i);if($h.has(i))return $h.get(i);const e=qw(i);return e!==i&&($h.set(i,e),Dd.set(e,i)),e}const Hh=i=>Dd.get(i);function Ww(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ui(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ui(h.result),g.oldVersion,g.newVersion,ui(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Gw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],qh=new Map;function Bm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Kw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Gw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return qh.set(e,u),u}$w(i=>({...i,get:(e,t,s)=>Bm(e,t)||i.get(e,t,s),has:(e,t)=>!!Bm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",$m="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new xd("@firebase/app"),Jw="@firebase/app-compat",Xw="@firebase/analytics-compat",Zw="@firebase/analytics",e0="@firebase/app-check-compat",t0="@firebase/app-check",n0="@firebase/auth",r0="@firebase/auth-compat",i0="@firebase/database",s0="@firebase/data-connect",o0="@firebase/database-compat",a0="@firebase/functions",l0="@firebase/functions-compat",u0="@firebase/installations",c0="@firebase/installations-compat",h0="@firebase/messaging",d0="@firebase/messaging-compat",f0="@firebase/performance",p0="@firebase/performance-compat",m0="@firebase/remote-config",g0="@firebase/remote-config-compat",y0="@firebase/storage",v0="@firebase/storage-compat",_0="@firebase/firestore",E0="@firebase/ai",w0="@firebase/firestore-compat",T0="firebase",I0="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="[DEFAULT]",S0={[rd]:"fire-core",[Jw]:"fire-core-compat",[Zw]:"fire-analytics",[Xw]:"fire-analytics-compat",[t0]:"fire-app-check",[e0]:"fire-app-check-compat",[n0]:"fire-auth",[r0]:"fire-auth-compat",[i0]:"fire-rtdb",[s0]:"fire-data-connect",[o0]:"fire-rtdb-compat",[a0]:"fire-fn",[l0]:"fire-fn-compat",[u0]:"fire-iid",[c0]:"fire-iid-compat",[h0]:"fire-fcm",[d0]:"fire-fcm-compat",[f0]:"fire-perf",[p0]:"fire-perf-compat",[m0]:"fire-rc",[g0]:"fire-rc-compat",[y0]:"fire-gcs",[v0]:"fire-gcs-compat",[_0]:"fire-fst",[w0]:"fire-fst-compat",[E0]:"fire-vertex","fire-js":"fire-js",[T0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map,A0=new Map,sd=new Map;function Hm(i,e){try{i.container.addComponent(e)}catch(t){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ho(i){const e=i.name;if(sd.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,i);for(const t of Vu.values())Hm(t,i);for(const t of A0.values())Hm(t,i);return!0}function Vd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function En(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new za("app","Firebase",C0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=I0;function Ny(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:id,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ci.create("bad-app-name",{appName:String(o)});if(t||(t=Sy()),!t)throw ci.create("no-options");const u=Vu.get(o);if(u){if(Zi(t,u.options)&&Zi(s,u.config))return u;throw ci.create("duplicate-app",{appName:o})}const h=new Vw(o);for(const g of sd.values())h.addComponent(g);const m=new k0(t,s,h);return Vu.set(o,m),m}function xy(i=id){const e=Vu.get(i);if(!e&&i===id&&Sy())return Ny();if(!e)throw ci.create("no-app",{appName:i});return e}function hi(i,e,t){var s;let o=(s=S0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(m.join(" "));return}ho(new es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="firebase-heartbeat-database",P0=1,La="firebase-heartbeat-store";let Wh=null;function Dy(){return Wh||(Wh=Ww(R0,P0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(i=>{throw ci.create("idb-open",{originalErrorMessage:i.message})})),Wh}async function N0(i){try{const t=(await Dy()).transaction(La),s=await t.objectStore(La).get(Vy(i));return await t.done,s}catch(e){if(e instanceof sr)kr.warn(e.message);else{const t=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(t.message)}}}async function qm(i,e){try{const s=(await Dy()).transaction(La,"readwrite");await s.objectStore(La).put(e,Vy(i)),await s.done}catch(t){if(t instanceof sr)kr.warn(t.message);else{const s=ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kr.warn(s.message)}}}function Vy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=1024,D0=30;class V0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Wm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>D0){const h=M0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wm(),{heartbeatsToSend:s,unsentEntries:o}=O0(this._heartbeatsCache.heartbeats),u=Du(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return kr.warn(t),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function O0(i,e=x0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Gm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Gm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class L0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ww()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await N0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Gm(i){return Du(JSON.stringify({version:2,heartbeats:i})).length}function M0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(i){ho(new es("platform-logger",e=>new Qw(e),"PRIVATE")),ho(new es("heartbeat",e=>new V0(e),"PRIVATE")),hi(rd,$m,i),hi(rd,$m,"esm2017"),hi("fire-js","")}b0("");function Od(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j0=Oy,Ly=new za("auth","Firebase",Oy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new xd("@firebase/auth");function F0(i,...e){Ou.logLevel<=Ce.WARN&&Ou.warn(`Auth (${wo}): ${i}`,...e)}function Tu(i,...e){Ou.logLevel<=Ce.ERROR&&Ou.error(`Auth (${wo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(i,...e){throw Ld(i,...e)}function Zn(i,...e){return Ld(i,...e)}function My(i,e,t){const s=Object.assign(Object.assign({},j0()),{[e]:t});return new za("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return My(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ld(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ly.create(i,...e)}function fe(i,e,...t){if(!i)throw Ld(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Tu(e),new Error(e)}function Rr(i,e){i||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function U0(){return Km()==="http:"||Km()==="https:"}function Km(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U0()||yw()||"connection"in navigator)?navigator.onLine:!0}function B0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=pw()||vw()}get(){return z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q0=new $a(3e4,6e4);function Ei(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Nr(i,e,t,s,o={}){return jy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ba(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return gw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(_.credentials="include"),by.fetch()(await Fy(i,i.config.apiHost,t,m),_)})}async function jy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},$0),e);try{const o=new G0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw pu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw pu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw pu(i,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw My(i,T,_);jn(i,T)}}catch(o){if(o instanceof sr)throw o;jn(i,"network-request-failed",{message:String(o)})}}async function Ha(i,e,t,s,o={}){const u=await Nr(i,e,t,s,o);return"mfaPendingCredential"in u&&jn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Fy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Md(i.config,o):`${i.config.apiScheme}://${o}`;return H0.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function W0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class G0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),q0.get())})}}function pu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(i,e,s);return o.customData._tokenResponse=t,o}function Qm(i){return i!==void 0&&i.enterprise!==void 0}class K0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return W0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Q0(i,e){return Nr(i,"GET","/v2/recaptchaConfig",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(i,e){return Nr(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return Nr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J0(i,e=!1){const t=Wt(i),s=await t.getIdToken(e),o=bd(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(Gh(o.auth_time)),issuedAtTime:Na(Gh(o.iat)),expirationTime:Na(Gh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gh(i){return Number(i)*1e3}function bd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ty(t);return o?JSON.parse(o):(Tu("Failed to decode base64 JWT payload"),null)}catch(o){return Tu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ym(i){const e=bd(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof sr&&X0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function X0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await fo(i,Lu(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Uy(u.providerUserInfo):[],m=tT(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),T=g?_:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new ad(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(i,k)}async function eT(i){const e=Wt(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Uy(i){return i.map(e=>{var{providerId:t}=e,s=Od(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,e){const t=await jy(i,{},async()=>{const s=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Fy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(g.credentials="include"),by.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rT(i,e){return Nr(i,"POST","/v2/accounts:revokeToken",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Ym(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await nT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new ad(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await fo(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J0(this,e)}reload(){return eT(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await fo(this,Y0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,T;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,D=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,pe=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ye,emailVerified:Ee,isAnonymous:We,providerData:Ae,stsTokenManager:x}=t;fe(ye&&x,e,"internal-error");const S=ro.fromJSON(this.name,x);fe(typeof ye=="string",e,"internal-error"),ni(k,e.name),ni(D,e.name),fe(typeof Ee=="boolean",e,"internal-error"),fe(typeof We=="boolean",e,"internal-error"),ni(z,e.name),ni(Y,e.name),ni(X,e.name),ni(W,e.name),ni(me,e.name),ni(pe,e.name);const C=new bn({uid:ye,auth:e,email:D,emailVerified:Ee,displayName:k,isAnonymous:We,photoURL:Y,phoneNumber:z,tenantId:X,stsTokenManager:S,createdAt:me,lastLoginAt:pe});return Ae&&Array.isArray(Ae)&&(C.providerData=Ae.map(P=>Object.assign({},P))),W&&(C._redirectEventId=W),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Uy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ad(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;function Ar(i){Rr(i instanceof Function,"Expected a class definition");let e=Jm.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Jm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zy.type="NONE";const Xm=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Iu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Iu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(Ar(Xm),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(Xm);const h=Iu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let k;if(typeof T=="string"){const D=await Lu(e,{idToken:T}).catch(()=>{});if(!D)break;k=await bn._fromGetAccountInfoResponse(e,D,T)}else k=bn._fromJSON(e,T);_!==u&&(m=k),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new io(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new io(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Ky(e))return"Webos";if($y(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function By(i=zt()){return/firefox\//i.test(i)}function $y(i=zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(i=zt()){return/crios\//i.test(i)}function qy(i=zt()){return/iemobile/i.test(i)}function Wy(i=zt()){return/android/i.test(i)}function Gy(i=zt()){return/blackberry/i.test(i)}function Ky(i=zt()){return/webos/i.test(i)}function jd(i=zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function iT(i=zt()){var e;return jd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sT(){return _w()&&document.documentMode===10}function Qy(i=zt()){return jd(i)||Wy(i)||Ky(i)||Gy(i)||/windows phone/i.test(i)||qy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(i,e=[]){let t;switch(i){case"Browser":t=Zm(zt());break;case"Worker":t=`${Zm(zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(i,e={}){return Nr(i,"GET","/v2/passwordPolicy",Ei(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=6;class uT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:lT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new oT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(En(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Cr(this));const t=e?Wt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aT(this),t=new uT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await rT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&F0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function is(i){return Wt(i)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=kw(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hT(i){Yu=i}function Jy(i){return Yu.loadJS(i)}function dT(){return Yu.recaptchaEnterpriseScript}function fT(){return Yu.gapiScript}function pT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class mT{constructor(){this.enterprise=new gT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class gT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yT="recaptcha-enterprise",Xy="NO_RECAPTCHA";class vT{constructor(e){this.type=yT,this.auth=is(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{Q0(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new K0(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Qm(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Xy)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Qm(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=dT();g.length!==0&&(g+=m),Jy(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function tg(i,e,t,s=!1,o=!1){const u=new vT(i);let h;if(o)h=Xy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ld(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await tg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await tg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(i,e){const t=Vd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zi(u,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function ET(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wT(i,e,t){const s=is(i);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Zy(e),{host:h,port:m}=TT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Zi(_,s.config.emulator)&&Zi(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Eo(h)?(Cy(`${u}//${h}${g}`),ky("Auth",!0)):IT()}function Zy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function TT(i){const e=Zy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ng(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ng(h)}}}function ng(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function IT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function ST(i,e){return Nr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(i,e){return Ha(i,"POST","/v1/accounts:signInWithPassword",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(i,e){return Ha(i,"POST","/v1/accounts:signInWithEmailLink",Ei(i,e))}async function kT(i,e){return Ha(i,"POST","/v1/accounts:signInWithEmailLink",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Fd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ma(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,t,"signInWithPassword",AT);case"emailLink":return CT(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,s,"signUpPassword",ST);case"emailLink":return kT(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(i,e){return Ha(i,"POST","/v1/accounts:signInWithIdp",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="http://localhost";class ts extends Fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Od(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:RT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NT(i){const e=Ia(Sa(i)).link,t=e?Ia(Sa(e)).deep_link_id:null,s=Ia(Sa(i)).deep_link_id;return(s?Ia(Sa(s)).link:null)||s||t||e||i}class Ud{constructor(e){var t,s,o,u,h,m;const g=Ia(Sa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,k=PT((o=g.mode)!==null&&o!==void 0?o:null);fe(_&&T&&k,"argument-error"),this.apiKey=_,this.operation=k,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=NT(e);try{return new Ud(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ud.parseLink(t);return fe(s,"argument-error"),Ma._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends qa{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends qa{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends qa{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(i,e){return Ha(i,"POST","/v1/accounts:signUp",Ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await bn._fromIdTokenResponse(e,s,o),h=rg(s);return new ns({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=rg(s);return new ns({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function rg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends sr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new bu(e,t,s,o)}}function tv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(i,u,e,s):u})}async function DT(i,e,t=!1){const s=await fo(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ns._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(i,e,t=!1){const{auth:s}=i;if(En(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await fo(i,tv(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=bd(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),ns._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(i,e,t=!1){if(En(i.app))return Promise.reject(Cr(i));const s="signIn",o=await tv(i,s,e),u=await ns._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function OT(i,e){return nv(is(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(i){const e=is(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LT(i,e,t){if(En(i.app))return Promise.reject(Cr(i));const s=is(i),h=await ld(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xT).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&rv(i),g}),m=await ns._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function MT(i,e,t){return En(i.app)?Promise.reject(Cr(i)):OT(Wt(i),To.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rv(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(i,e){return Nr(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Wt(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await fo(s,bT(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function FT(i,e,t,s){return Wt(i).onIdTokenChanged(e,t,s)}function UT(i,e,t){return Wt(i).beforeAuthStateChanged(e,t)}function zT(i,e,t,s){return Wt(i).onAuthStateChanged(e,t,s)}function BT(i){return Wt(i).signOut()}const ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=1e3,HT=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);sT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const qT=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ju(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await WT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=zd("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const D=k;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function KT(i){er().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function QT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function JT(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebaseLocalStorageDb",XT=1,Fu="firebaseLocalStorage",cv="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xu(i,e){return i.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function ZT(){const i=indexedDB.deleteDatabase(uv);return new Wa(i).toPromise()}function ud(){const i=indexedDB.open(uv,XT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Fu,{keyPath:cv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Fu)?e(s):(s.close(),await ZT(),e(await ud()))})})}async function ig(i,e,t){const s=Xu(i,!0).put({[cv]:e,value:t});return new Wa(s).toPromise()}async function eI(i,e){const t=Xu(i,!1).get(e),s=await new Wa(t).toPromise();return s===void 0?null:s.value}function sg(i,e){const t=Xu(i,!0).delete(e);return new Wa(t).toPromise()}const tI=800,nI=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(JT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await QT(),!this.activeServiceWorker)return;this.sender=new GT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await ig(e,ju,"1"),await sg(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ig(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>eI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Xu(o,!1).getAll();return new Wa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const rI=hv;new $a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(i,e){return e?Ar(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sI(i){return nv(i.auth,new Bd(i),i.bypassAuthState)}function oI(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),VT(t,new Bd(i),i.bypassAuthState)}async function aI(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),DT(t,new Bd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:jn(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new $a(2e3,1e4);class no extends dv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lI.get())};e()}}no.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="pendingRedirect",Su=new Map;class cI extends dv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const s=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(i,e){const t=pI(e),s=fI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function dI(i,e){Su.set(i._key(),e)}function fI(i){return Ar(i._redirectPersistence)}function pI(i){return Iu(uI,i.config.apiKey,i.name)}async function mI(i,e,t=!1){if(En(i.app))return Promise.reject(Cr(i));const s=is(i),o=iI(s,e),h=await new cI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=600*1e3;class yI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!fv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gI&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(e))}saveEventToCache(e){this.cachedEventUids.add(og(e)),this.lastProcessedEventTime=Date.now()}}function og(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function fv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(i,e={}){return Nr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function TI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _I(i);for(const t of e)try{if(II(t))return}catch{}jn(i,"unauthorized-domain")}function II(i){const e=od(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wI.test(t))return!1;if(EI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new $a(3e4,6e4);function ag(){const i=er().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function AI(i){return new Promise((e,t)=>{var s,o,u;function h(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),t(Zn(i,"network-request-failed"))},timeout:SI.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const m=pT("iframefcb");return er()[m]=()=>{gapi.load?h():t(Zn(i,"network-request-failed"))},Jy(`${fT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Au=null,e})}let Au=null;function CI(i){return Au=Au||AI(i),Au}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new $a(5e3,15e3),RI="__/auth/iframe",PI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Md(e,PI):`https://${i.config.authDomain}/${RI}`,s={apiKey:e.apiKey,appName:i.name,v:wo},o=xI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ba(s).slice(1)}`}async function VI(i){const e=await CI(i),t=er().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:DI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(i,"network-request-failed"),m=er().setTimeout(()=>{u(h)},kI.get());function g(){er().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,MI=600,bI="_blank",jI="http://localhost";class lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FI(i,e,t,s=LI,o=MI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},OI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=zt().toLowerCase();t&&(m=Hy(_)?bI:t),By(_)&&(e=e||jI,g.scrollbars="yes");const T=Object.entries(g).reduce((D,[z,Y])=>`${D}${z}=${Y},`,"");if(iT(_)&&m!=="_self")return UI(e||"",m),new lg(null);const k=window.open(e||"",m,T);fe(k,i,"popup-blocked");try{k.focus()}catch{}return new lg(k)}function UI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="__/auth/handler",BI="emulator/auth/handler",$I=encodeURIComponent("fac");async function ug(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:wo,eventId:o};if(e instanceof ev){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Cw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,k]of Object.entries({}))h[T]=k}if(e instanceof qa){const T=e.getScopes().filter(k=>k!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),_=g?`#${$I}=${encodeURIComponent(g)}`:"";return`${HI(i)}?${Ba(m).slice(1)}${_}`}function HI({config:i}){return i.emulator?Md(i,BI):`https://${i.authDomain}/${zI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=mI,this._overrideRedirectResult=dI}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await ug(e,t,s,od(),o);return FI(e,h,zd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ug(e,t,s,od(),o);return KT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await VI(e),s=new yI(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kh,{type:Kh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Kh];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qy()||$y()||jd()}}const WI=qI;var cg="@firebase/auth",hg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QI(i){ho(new es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(i)},_=new cT(s,o,u,g);return ET(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ho(new es("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new GI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(cg,hg,KI(i)),hi(cg,hg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=300,JI=Ay("authIdTokenMaxAge")||YI;let dg=null;const XI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JI)return;const o=t==null?void 0:t.token;dg!==o&&(dg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ZI(i=xy()){const e=Vd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=_T(i,{popupRedirectResolver:WI,persistence:[rI,qT,av]}),s=Ay("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=XI(u.toString());UT(t,h,()=>h(t.currentUser)),FT(t,m=>h(m))}}const o=Iy("auth");return o&&wT(t,`http://${o}`),t}function e1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}hT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",e1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QI("Browser");var t1="firebase",n1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(t1,n1,"app");var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,pv;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function C(){}C.prototype=S.prototype,x.D=S.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(P,V,L){for(var A=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)A[tt-2]=arguments[tt];return S.prototype[V].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,C){C||(C=0);var P=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)P[V]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(V=0;16>V;++V)P[V]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=x.g[0],C=x.g[1],V=x.g[2];var L=x.g[3],A=S+(L^C&(V^L))+P[0]+3614090360&4294967295;S=C+(A<<7&4294967295|A>>>25),A=L+(V^S&(C^V))+P[1]+3905402710&4294967295,L=S+(A<<12&4294967295|A>>>20),A=V+(C^L&(S^C))+P[2]+606105819&4294967295,V=L+(A<<17&4294967295|A>>>15),A=C+(S^V&(L^S))+P[3]+3250441966&4294967295,C=V+(A<<22&4294967295|A>>>10),A=S+(L^C&(V^L))+P[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=L+(V^S&(C^V))+P[5]+1200080426&4294967295,L=S+(A<<12&4294967295|A>>>20),A=V+(C^L&(S^C))+P[6]+2821735955&4294967295,V=L+(A<<17&4294967295|A>>>15),A=C+(S^V&(L^S))+P[7]+4249261313&4294967295,C=V+(A<<22&4294967295|A>>>10),A=S+(L^C&(V^L))+P[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=L+(V^S&(C^V))+P[9]+2336552879&4294967295,L=S+(A<<12&4294967295|A>>>20),A=V+(C^L&(S^C))+P[10]+4294925233&4294967295,V=L+(A<<17&4294967295|A>>>15),A=C+(S^V&(L^S))+P[11]+2304563134&4294967295,C=V+(A<<22&4294967295|A>>>10),A=S+(L^C&(V^L))+P[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=L+(V^S&(C^V))+P[13]+4254626195&4294967295,L=S+(A<<12&4294967295|A>>>20),A=V+(C^L&(S^C))+P[14]+2792965006&4294967295,V=L+(A<<17&4294967295|A>>>15),A=C+(S^V&(L^S))+P[15]+1236535329&4294967295,C=V+(A<<22&4294967295|A>>>10),A=S+(V^L&(C^V))+P[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=L+(C^V&(S^C))+P[6]+3225465664&4294967295,L=S+(A<<9&4294967295|A>>>23),A=V+(S^C&(L^S))+P[11]+643717713&4294967295,V=L+(A<<14&4294967295|A>>>18),A=C+(L^S&(V^L))+P[0]+3921069994&4294967295,C=V+(A<<20&4294967295|A>>>12),A=S+(V^L&(C^V))+P[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=L+(C^V&(S^C))+P[10]+38016083&4294967295,L=S+(A<<9&4294967295|A>>>23),A=V+(S^C&(L^S))+P[15]+3634488961&4294967295,V=L+(A<<14&4294967295|A>>>18),A=C+(L^S&(V^L))+P[4]+3889429448&4294967295,C=V+(A<<20&4294967295|A>>>12),A=S+(V^L&(C^V))+P[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=L+(C^V&(S^C))+P[14]+3275163606&4294967295,L=S+(A<<9&4294967295|A>>>23),A=V+(S^C&(L^S))+P[3]+4107603335&4294967295,V=L+(A<<14&4294967295|A>>>18),A=C+(L^S&(V^L))+P[8]+1163531501&4294967295,C=V+(A<<20&4294967295|A>>>12),A=S+(V^L&(C^V))+P[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=L+(C^V&(S^C))+P[2]+4243563512&4294967295,L=S+(A<<9&4294967295|A>>>23),A=V+(S^C&(L^S))+P[7]+1735328473&4294967295,V=L+(A<<14&4294967295|A>>>18),A=C+(L^S&(V^L))+P[12]+2368359562&4294967295,C=V+(A<<20&4294967295|A>>>12),A=S+(C^V^L)+P[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=L+(S^C^V)+P[8]+2272392833&4294967295,L=S+(A<<11&4294967295|A>>>21),A=V+(L^S^C)+P[11]+1839030562&4294967295,V=L+(A<<16&4294967295|A>>>16),A=C+(V^L^S)+P[14]+4259657740&4294967295,C=V+(A<<23&4294967295|A>>>9),A=S+(C^V^L)+P[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=L+(S^C^V)+P[4]+1272893353&4294967295,L=S+(A<<11&4294967295|A>>>21),A=V+(L^S^C)+P[7]+4139469664&4294967295,V=L+(A<<16&4294967295|A>>>16),A=C+(V^L^S)+P[10]+3200236656&4294967295,C=V+(A<<23&4294967295|A>>>9),A=S+(C^V^L)+P[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=L+(S^C^V)+P[0]+3936430074&4294967295,L=S+(A<<11&4294967295|A>>>21),A=V+(L^S^C)+P[3]+3572445317&4294967295,V=L+(A<<16&4294967295|A>>>16),A=C+(V^L^S)+P[6]+76029189&4294967295,C=V+(A<<23&4294967295|A>>>9),A=S+(C^V^L)+P[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=L+(S^C^V)+P[12]+3873151461&4294967295,L=S+(A<<11&4294967295|A>>>21),A=V+(L^S^C)+P[15]+530742520&4294967295,V=L+(A<<16&4294967295|A>>>16),A=C+(V^L^S)+P[2]+3299628645&4294967295,C=V+(A<<23&4294967295|A>>>9),A=S+(V^(C|~L))+P[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=L+(C^(S|~V))+P[7]+1126891415&4294967295,L=S+(A<<10&4294967295|A>>>22),A=V+(S^(L|~C))+P[14]+2878612391&4294967295,V=L+(A<<15&4294967295|A>>>17),A=C+(L^(V|~S))+P[5]+4237533241&4294967295,C=V+(A<<21&4294967295|A>>>11),A=S+(V^(C|~L))+P[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=L+(C^(S|~V))+P[3]+2399980690&4294967295,L=S+(A<<10&4294967295|A>>>22),A=V+(S^(L|~C))+P[10]+4293915773&4294967295,V=L+(A<<15&4294967295|A>>>17),A=C+(L^(V|~S))+P[1]+2240044497&4294967295,C=V+(A<<21&4294967295|A>>>11),A=S+(V^(C|~L))+P[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=L+(C^(S|~V))+P[15]+4264355552&4294967295,L=S+(A<<10&4294967295|A>>>22),A=V+(S^(L|~C))+P[6]+2734768916&4294967295,V=L+(A<<15&4294967295|A>>>17),A=C+(L^(V|~S))+P[13]+1309151649&4294967295,C=V+(A<<21&4294967295|A>>>11),A=S+(V^(C|~L))+P[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=L+(C^(S|~V))+P[11]+3174756917&4294967295,L=S+(A<<10&4294967295|A>>>22),A=V+(S^(L|~C))+P[2]+718787259&4294967295,V=L+(A<<15&4294967295|A>>>17),A=C+(L^(V|~S))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+L&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var C=S-this.blockSize,P=this.B,V=this.h,L=0;L<S;){if(V==0)for(;L<=C;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<S;)if(P[V++]=x.charCodeAt(L++),V==this.blockSize){o(this,P),V=0;break}}else for(;L<S;)if(P[V++]=x[L++],V==this.blockSize){o(this,P),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var C=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=C&255,C/=256;for(this.u(x),x=Array(16),S=C=0;4>S;++S)for(var P=0;32>P;P+=8)x[C++]=this.g[S]>>>P&255;return x};function u(x,S){var C=m;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=S(x)}function h(x,S){this.h=S;for(var C=[],P=!0,V=x.length-1;0<=V;V--){var L=x[V]|0;P&&L==S||(C[V]=L,P=!1)}this.g=C}var m={};function g(x){return-128<=x&&128>x?u(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return k;if(0>x)return W(_(-x));for(var S=[],C=1,P=0;x>=C;P++)S[P]=x/C|0,C*=4294967296;return new h(S,0)}function T(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return W(T(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(S,8)),P=k,V=0;V<x.length;V+=8){var L=Math.min(8,x.length-V),A=parseInt(x.substring(V,V+L),S);8>L?(L=_(Math.pow(S,L)),P=P.j(L).add(_(A))):(P=P.j(C),P=P.add(_(A)))}return P}var k=g(0),D=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();for(var x=0,S=1,C=0;C<this.g.length;C++){var P=this.i(C);x+=(0<=P?P:4294967296+P)*S,S*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(Y(this))return"0";if(X(this))return"-"+W(this).toString(x);for(var S=_(Math.pow(x,6)),C=this,P="";;){var V=Ee(C,S).g;C=me(C,V.j(S));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=V,Y(C))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function Y(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function X(x){return x.h==-1}i.l=function(x){return x=me(this,x),X(x)?-1:Y(x)?0:1};function W(x){for(var S=x.g.length,C=[],P=0;P<S;P++)C[P]=~x.g[P];return new h(C,~x.h).add(D)}i.abs=function(){return X(this)?W(this):this},i.add=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],P=0,V=0;V<=S;V++){var L=P+(this.i(V)&65535)+(x.i(V)&65535),A=(L>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);P=A>>>16,L&=65535,A&=65535,C[V]=A<<16|L}return new h(C,C[C.length-1]&-2147483648?-1:0)};function me(x,S){return x.add(W(S))}i.j=function(x){if(Y(this)||Y(x))return k;if(X(this))return X(x)?W(this).j(W(x)):W(W(this).j(x));if(X(x))return W(this.j(W(x)));if(0>this.l(z)&&0>x.l(z))return _(this.m()*x.m());for(var S=this.g.length+x.g.length,C=[],P=0;P<2*S;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<x.g.length;V++){var L=this.i(P)>>>16,A=this.i(P)&65535,tt=x.i(V)>>>16,Nt=x.i(V)&65535;C[2*P+2*V]+=A*Nt,pe(C,2*P+2*V),C[2*P+2*V+1]+=L*Nt,pe(C,2*P+2*V+1),C[2*P+2*V+1]+=A*tt,pe(C,2*P+2*V+1),C[2*P+2*V+2]+=L*tt,pe(C,2*P+2*V+2)}for(P=0;P<S;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=S;P<2*S;P++)C[P]=0;return new h(C,0)};function pe(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function ye(x,S){this.g=x,this.h=S}function Ee(x,S){if(Y(S))throw Error("division by zero");if(Y(x))return new ye(k,k);if(X(x))return S=Ee(W(x),S),new ye(W(S.g),W(S.h));if(X(S))return S=Ee(x,W(S)),new ye(W(S.g),S.h);if(30<x.g.length){if(X(x)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var C=D,P=S;0>=P.l(x);)C=We(C),P=We(P);var V=Ae(C,1),L=Ae(P,1);for(P=Ae(P,2),C=Ae(C,2);!Y(P);){var A=L.add(P);0>=A.l(x)&&(V=V.add(C),L=A),P=Ae(P,1),C=Ae(C,1)}return S=me(x,V.j(S)),new ye(V,S)}for(V=k;0<=x.l(S);){for(C=Math.max(1,Math.floor(x.m()/S.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=_(C),A=L.j(S);X(A)||0<A.l(x);)C-=P,L=_(C),A=L.j(S);Y(L)&&(L=D),V=V.add(L),x=me(x,A)}return new ye(V,x)}i.A=function(x){return Ee(this,x).h},i.and=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)&x.i(P);return new h(C,this.h&x.h)},i.or=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)|x.i(P);return new h(C,this.h|x.h)},i.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)^x.i(P);return new h(C,this.h^x.h)};function We(x){for(var S=x.g.length+1,C=[],P=0;P<S;P++)C[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(C,x.h)}function Ae(x,S){var C=S>>5;S%=32;for(var P=x.g.length-C,V=[],L=0;L<P;L++)V[L]=0<S?x.i(L+C)>>>S|x.i(L+C+1)<<32-S:x.i(L+C);return new h(V,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,pv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,di=h}).apply(typeof fg<"u"?fg:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,Aa,gv,Cu,cd,yv,vv,_v;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,M={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,y){return l.call.apply(l.bind,arguments)}function k(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function D(l,f,y){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:k,D.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Y(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,M,U){for(var J=Array(arguments.length-2),be=2;be<arguments.length;be++)J[be-2]=arguments[be];return f.prototype[M].apply(E,J)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function W(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=l.length||0,U=E.length||0;l.length=M+U;for(let J=0;J<U;J++)l[M+J]=E[J]}else l.push(E)}}class me{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function pe(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ee(l){return Ee[" "](l),l}Ee[" "]=function(){};var We=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function x(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function S(l){const f={};for(const y in l)f[y]=l[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let U=0;U<C.length;U++)y=C[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function L(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const E=Nt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new me(()=>new xt,l=>l.reset());class xt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Z=!1,ue=new tt,te=()=>{const l=m.Promise.resolve(void 0);Fe=()=>{l.then(O)}};var O=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){L(y)}var f=Nt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var we=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Te(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(We){e:{try{Ee(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}Y(Te,le);var Re={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,y,E,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=M,this.key=++Me,this.da=this.fa=!1}function vt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function or(l){this.src=l,this.g={},this.h=0}or.prototype.add=function(l,f,y,E,M){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=xr(l,f,E,M);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,M),f.fa=y,l.push(f)),f};function os(l,f){var y=f.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=M)&&Array.prototype.splice.call(E,M,1),U&&(vt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function xr(l,f,y,E){for(var M=0;M<l.length;++M){var U=l[M];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return M}return-1}var wi="closure_lm_"+(1e6*Math.random()|0),as={};function Ro(l,f,y,E,M){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Ro(l,f[U],y,E,M);return null}return y=xo(y),l&&l[Le]?l.K(f,y,_(E)?!!E.capture:!1,M):Po(l,f,y,!1,E,M)}function Po(l,f,y,E,M,U){if(!f)throw Error("Invalid event type");var J=_(M)?!!M.capture:!!M,be=us(l);if(be||(l[wi]=be=new or(l)),y=be.add(f,y,E,J,U),y.proxy)return y;if(E=Xa(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)we||(M=J),M===void 0&&(M=!1),l.addEventListener(f.toString(),E,M);else if(l.attachEvent)l.attachEvent(lr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xa(){function l(y){return f.call(l.src,l.listener,y)}const f=No;return l}function ls(l,f,y,E,M){if(Array.isArray(f))for(var U=0;U<f.length;U++)ls(l,f[U],y,E,M);else E=_(E)?!!E.capture:!!E,y=xo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=xr(U,y,E,M),-1<y&&(vt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=us(l))&&(f=l.g[f.toString()],l=-1,f&&(l=xr(f,y,E,M)),(y=-1<l?f[l]:null)&&ar(y))}function ar(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])os(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(lr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=us(f))?(os(y,l),y.h==0&&(y.src=null,f[wi]=null)):vt(l)}}}function lr(l){return l in as?as[l]:as[l]="on"+l}function No(l,f){if(l.da)l=!0;else{f=new Te(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ar(l),l=y.call(E,f)}return l}function us(l){return l=l[wi],l instanceof or?l:null}var cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(l){return typeof l=="function"?l:(l[cs]||(l[cs]=function(f){return l.handleEvent(f)}),l[cs])}function dt(){B.call(this),this.i=new or(this),this.M=this,this.F=null}Y(dt,B),dt.prototype[Le]=!0,dt.prototype.removeEventListener=function(l,f,y,E){ls(this,l,f,y,E)};function ft(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var M=f;f=new le(E,l),P(f,M)}if(M=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];M=ur(J,E,!0,f)&&M}if(J=f.g=l,M=ur(J,E,!0,f)&&M,M=ur(J,E,!1,f)&&M,y)for(U=0;U<y.length;U++)J=f.g=y[U],M=ur(J,E,!1,f)&&M}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)vt(y[E]);delete l.g[f],l.h--}}this.F=null},dt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},dt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function ur(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var be=J.listener,pt=J.ha||J.src;J.fa&&os(l.i,J),M=be.call(pt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Do(l,f,y){if(typeof l=="function")y&&(l=D(l,y));else if(l&&typeof l.handleEvent=="function")l=D(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Dr(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Dr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ti extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Dr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(l){B.call(this),this.h=l,this.g={}}Y(Ii,B);var Vo=[];function Oo(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&ar(f)},l),l.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),Oo(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lo=m.JSON.stringify,Mo=m.JSON.parse,bo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Si(){}Si.prototype.h=null;function hs(l){return l.h||(l.h=l.i())}function ds(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){le.call(this,"d")}Y(Un,le);function fs(){le.call(this,"c")}Y(fs,le);var zn={},jo=null;function Ai(){return jo=jo||new dt}zn.La="serverreachability";function Fo(l){le.call(this,zn.La,l)}Y(Fo,le);function cr(l){const f=Ai();ft(f,new Fo(f))}zn.STAT_EVENT="statevent";function Uo(l,f){le.call(this,zn.STAT_EVENT,l),this.stat=f}Y(Uo,le);function nt(l){const f=Ai();ft(f,new Uo(f,l))}zn.Ma="timingevent";function ps(l,f){le.call(this,zn.Ma,l),this.size=f}Y(ps,le);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function ki(l,f,y,E,M,U){l.info(function(){if(l.g)if(U)for(var J="",be=U.split("&"),pt=0;pt<be.length;pt++){var Pe=be[pt].split("=");if(1<Pe.length){var _t=Pe[0];Pe=Pe[1];var ot=_t.split("_");J=2<=ot.length&&ot[1]=="type"?J+(_t+"="+Pe+"&"):J+(_t+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+y+`
`+J})}function ms(l,f,y,E,M,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+y+`
`+U+" "+J})}function In(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+hc(l,y)+(E?" "+E:"")})}function zo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function hc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<M.length;J++)M[J]=""}}}}return Lo(y)}catch{return f}}var gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Za={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Ri(){}Y(Ri,Si),Ri.prototype.g=function(){return new XMLHttpRequest},Ri.prototype.i=function(){return{}},Sn=new Ri;function An(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new el}function el(){this.i=null,this.g="",this.h=!1}var Bo={},ys={};function vs(l,f,y){l.L=1,l.v=br(rn(f)),l.m=y,l.P=!0,$o(l,null)}function $o(l,f){l.F=Date.now(),Be(l),l.A=rn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Fr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new el,l.g=vl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ti(D(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Vo[0]=M.toString()),M=Vo);for(var U=0;U<M.length;U++){var J=Ro(y,M[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),cr(),ki(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&Kt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const ot=Kt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||ot!=4||f==7||(f==8||0>=fn?cr(3):cr(2)),Pi(this);var y=this.g.Z();this.X=y;t:if(tl(this)){var E=Qo(this.g);l="";var M=E.length,U=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Vr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==M-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,ms(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,pt=this.g;if((be=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(be)){var Pe=be;break t}}Pe=null}if(y=Pe)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,y);else{this.o=!1,this.s=3,nt(12),hn(this),Vr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<J.length;)if(on=dc(this,J),on==ys){ot==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Bo){this.s=4,nt(15),In(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,on,null),Ho(this,on);if(tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||J.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,J,"[Invalid Chunked Response]"),hn(this),Vr(this);else if(0<J.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Jo(_t),_t.M=!0,nt(11))}}else In(this.i,this.l,J,null),Ho(this,J);ot==4&&hn(this),this.o&&!this.J&&(ot==4?Ps(this.j,this):(this.o=!1,Be(this)))}else Ss(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),hn(this),Vr(this)}}}catch{}finally{}};function tl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function dc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ys:(y=Number(f.substring(y,E)),isNaN(y)?Bo:(E+=1,E+y>f.length?ys:(f=f.slice(E,E+y),l.C=E+y,f)))}An.prototype.cancel=function(){this.J=!0,hn(this)};function Be(l){l.S=Date.now()+l.I,nl(l,l.I)}function nl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(D(l.ba,l),f)}function Pi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(cr(),nt(17)),hn(this),this.s=2,Vr(this)):nl(this,this.S-l)};function Vr(l){l.j.G==0||l.J||Ps(l.j,l)}function hn(l){Pi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Oo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ho(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Rs(y),Nn(y);else break e;ks(y),nt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(D(y.Za,y),6e3));if(1>=il(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else mr(y,11)}else if((l.K||y.g==l)&&Rs(y),!pe(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let Pe=M[f];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const _t=Pe[3];_t!=null&&(y.la=_t,y.j.info("VER="+y.la));const ot=Pe[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const fn=Pe[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const on=l.g;if(on){const Mi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var U=E.h;U.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(qo(U,U.h),U.h=null))}if(E.D){const xs=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(E.ya=xs,Ue(E.I,E.D,xs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=yl(E,E.J?E.ia:null,E.W),J.K){sl(E.h,J);var be=J,pt=E.L;pt&&(be.I=pt),be.B&&(Pi(be),Be(be)),E.g=J}else Li(E);0<y.i.length&&qn(y)}else Pe[0]!="stop"&&Pe[0]!="close"||mr(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?mr(y,7):At(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}cr(4)}catch{}}var rl=class{constructor(l,f){this.g=l,this.map=f}};function Ni(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function il(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function qo(l,f){l.g?l.g.add(f):l.h=f}function sl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ni.prototype.cancel=function(){if(this.i=ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ol(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function _s(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Es(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Or(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Es(l),E=_s(l),M=E.length,U=0;U<M;U++)f.call(void 0,E[U],y&&y[U],l)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),M=null;if(0<=E){var U=l[y].substring(0,E);M=l[y].substring(E+1)}else U=l[y];f(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function hr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hr){this.h=l.h,Di(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var f=l.i,y=new Bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Mr(this,y),this.m=l.m}else l&&(f=String(l).match(xi))?(this.h=!1,Di(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),Lr(this,f[4]),this.l=ke(f[5]||"",!0),Mr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}hr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(jr(f,ws,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(jr(f,ws,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(jr(y,y.charAt(0)=="/"?ul:ll,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",jr(y,Wo)),l.join("")};function rn(l){return new hr(l)}function Di(l,f,y){l.j=y?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Mr(l,f,y){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(y||(f=jr(f,cl)),l.i=new Bn(f,l.h))}function Ue(l,f,y){l.i.set(f,y)}function br(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,al),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function al(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ws=/[#\/\?@]/g,ll=/[#\?:]/g,ul=/[#\?]/g,cl=/[#\?@]/g,Wo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function St(l){l.g||(l.g=new Map,l.h=0,l.i&&fc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,f){St(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Cn(l,f){St(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function kn(l,f){return St(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){St(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(f,M,E,this)},this)},this)},i.na=function(){St(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const M=l[E];for(let U=0;U<M.length;U++)y.push(f[E])}return y},i.V=function(l){St(this);let f=[];if(typeof l=="string")kn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return St(this),this.i=null,l=dn(this,l),kn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Fr(l,f,y){Cn(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var M=U;J[E]!==""&&(M+="="+encodeURIComponent(String(J[E]))),l.push(M)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(St(l),l.i=null,l.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Cn(this,E),Fr(this,M,y))},l)),l.j=f}function pc(l,f){const y=new Ci;if(m.Image){const E=new Image;E.onload=z(Gt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=z(Gt,y,"TestLoadImage: error",!1,f,E),E.onabort=z(Gt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(Gt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function hl(l,f){const y=new Ci,E=new AbortController,M=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(M),U.ok?Gt(y,"TestPingServer: ok",!0,f):Gt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Gt(y,"TestPingServer: error",!1,f)})}function Gt(l,f,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function mc(){this.g=new bo}function dl(l,f,y){const E=y||"";try{Or(l,function(M,U){let J=M;_(M)&&(J=Lo(M)),f.push(E+U+"="+encodeURIComponent(J))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function dr(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(dr,Si),dr.prototype.g=function(){return new Vi(this.l,this.j)},dr.prototype.i=(function(l){return function(){return l}})({});function Vi(l,f){dt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Vi,dt),i=Vi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function fl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Pn(this),this.readyState==3&&fl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Ur(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=fr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Ue(l,f,y))}function Ge(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Ge,dt);var gc=/^https?$/i,Go=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?hs(this.o):hs(Sn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Oi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),M=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Go,f,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Is(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Oi(this,U)}};function Oi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ts(l),sn(l)}function Ts(l){l.A||(l.A=!0,ft(l,"complete"),ft(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ft(this,"complete"),ft(this,"abort"),sn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},i.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Kt(l)!=4||l.Z()!=2)){if(l.u&&Kt(l)==4)Do(l.Ea,0,l);else if(ft(l,"readystatechange"),Kt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var M=String(l.D).match(xi)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!gc.test(M?M.toLowerCase():"")}y=E}if(y)ft(l,"complete"),ft(l,"success");else{l.m=6;try{var U=2<Kt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Ts(l)}}finally{sn(l)}}}}function sn(l,f){if(l.g){Is(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ft(l,"ready");try{y.onreadystatechange=E}catch{}}}function Is(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Kt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Mo(f)}};function Qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ss(l){const f={};l=(l.g&&2<=Kt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(pe(l[E]))continue;var y=V(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[M]||[];f[M]=U,U.push(y)}x(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Yo(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,l),this.cb=Hn("retryDelaySeedMs",1e4,l),this.Wa=Hn("forwardChannelMaxRetries",2,l),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(l&&l.concurrentRequestLimit),this.Da=new mc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Yo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){nt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=yl(this,null,this.W),qn(this)};function At(l){if(As(l),l.G==3){var f=l.U++,y=rn(l.I);if(Ue(y,"SID",l.K),Ue(y,"RID",f),Ue(y,"TYPE","terminate"),pr(l,y),f=new An(l,l.j,f),f.L=2,f.v=br(rn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=vl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}gl(l)}function Nn(l){l.g&&(Jo(l),l.g.cancel(),l.g=null)}function As(l){Nn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Rs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function qn(l){if(!nn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Fe||te(),Z||(Fe(),Z=!0),ue.add(f,l),l.B=0}}function yc(l,f){return il(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(D(l.Ga,l,f),ml(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new An(this,this.j,l);let U=this.o;if(this.S&&(U?(U=S(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=zr(this,M,f),y=rn(this.I),Ue(y,"RID",l),Ue(y,"CVER",22),this.D&&Ue(y,"X-HTTP-Session-Id",this.D),pr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(fr(U)))+"&"+f:this.m&&Ur(y,this.m,U)),qo(this.h,M),this.Ua&&Ue(y,"TYPE","init"),this.P?(Ue(y,"$req",f),Ue(y,"SID","null"),M.T=!0,vs(M,y,null)):vs(M,y,f),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||nn(this.h)||Cs(this))};function Cs(l,f){var y;f?y=f.l:y=l.U++;const E=rn(l.I);Ue(E,"SID",l.K),Ue(E,"RID",y),Ue(E,"AID",l.T),pr(l,E),l.m&&l.o&&Ur(E,l.m,l.o),y=new An(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),qo(l.h,y),vs(y,E,f)}function pr(l,f){l.H&&Ae(l.H,function(y,E){Ue(f,E,y)}),l.l&&Or({},function(y,E){Ue(f,E,y)})}function zr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?D(l.l.Na,l.l,l):null;e:{var M=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=M[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let be=!0;for(let pt=0;pt<y;pt++){let Pe=M[pt].g;const _t=M[pt].map;if(Pe-=U,0>Pe)U=Math.max(0,M[pt].g-100),be=!1;else try{dl(_t,J,"req"+Pe+"_")}catch{E&&E(_t)}}if(be){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Li(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Fe||te(),Z||(Fe(),Z=!0),ue.add(f,l),l.v=0}}function ks(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(D(l.Fa,l),ml(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(D(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),pl(this))};function Jo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function pl(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=rn(l.qa);Ue(f,"RID","rpc"),Ue(f,"SID",l.K),Ue(f,"AID",l.T),Ue(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(f,"TO",l.ja),Ue(f,"TYPE","xmlhttp"),pr(l,f),l.m&&l.o&&Ur(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=br(rn(f)),y.m=null,y.P=!0,$o(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),ks(this),nt(19))};function Rs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ps(l,f){var y=null;if(l.g==f){Rs(l),Jo(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,sl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;E=Ai(),ft(E,new ps(E,y)),qn(l)}else Li(l);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&yc(l,f)||E==2&&ks(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:mr(l,5);break;case 4:mr(l,10);break;case 3:mr(l,6);break;default:mr(l,2)}}}function ml(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function mr(l,f){if(l.j.info("Error code "+f),f==2){var y=D(l.fb,l),E=l.Xa;const M=!E;E=new hr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Di(E,"https"),br(E),M?pc(E.toString(),y):hl(E.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),gl(l),As(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function gl(l){if(l.G=0,l.ka=[],l.l){const f=ol(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function yl(l,f,y){var E=y instanceof hr?rn(y):new hr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Lr(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var U=new hr(null);E&&Di(U,E),f&&(U.g=f),M&&Lr(U,M),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&Ue(E,y,f),Ue(E,"VER",l.la),pr(l,E),E}function vl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new dr({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}i=Xo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ns(){}Ns.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){dt.call(this),this.g=new Yo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!pe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!pe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}Y($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Lo(l),l=y);f.i.push(new rl(f.Ya++,l)),f.G==3&&qn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function _l(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(_l,Un);function El(){fs.call(this),this.status=1}Y(El,fs);function Wn(l){this.g=l}Y(Wn,Xo),Wn.prototype.ua=function(){ft(this.g,"a")},Wn.prototype.ta=function(l){ft(this.g,new _l(l))},Wn.prototype.sa=function(l){ft(this.g,new El)},Wn.prototype.ra=function(){ft(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,_v=function(){return new Ns},vv=function(){return Ai()},yv=zn,cd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,Cu=gs,Za.COMPLETE="complete",gv=Za,ds.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Aa=ds,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,mv=Ge}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});const pg="@firebase/firestore",mg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new xd("@firebase/firestore");function Xs(){return rs.logLevel}function ne(i,...e){if(rs.logLevel<=Ce.DEBUG){const t=e.map($d);rs.debug(`Firestore (${Io}): ${i}`,...t)}}function Pr(i,...e){if(rs.logLevel<=Ce.ERROR){const t=e.map($d);rs.error(`Firestore (${Io}): ${i}`,...t)}}function fi(i,...e){if(rs.logLevel<=Ce.WARN){const t=e.map($d);rs.warn(`Firestore (${Io}): ${i}`,...t)}}function $d(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ev(i,s,t)}function Ev(i,e,t){let s=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Pr(s),new Error(s)}function Ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Ev(e,o,s)}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends sr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class i1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s1{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new oo;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new oo,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new oo)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new wv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class o1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class a1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new o1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=u1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function hd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const u=Tv(),h=c1(u.encode(yg(i,t)),u.encode(yg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function yg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function c1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function po(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Jn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):hd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class Qe extends Jn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const h1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Jn{construct(e,t,s){return new Ft(e,t,s)}static isValidIdentifier(e){return h1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vg}static keyField(){return new Ft([vg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Qe.fromString(e))}static fromName(e){return new de(Qe.fromString(e).popFirst(5))}static empty(){return new de(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(i,e,t){if(!t)throw new se(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function f1(i,e,t,s){if(e===!0&&s===!0)throw new se(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function _g(i){if(de.isDocumentKey(i))throw new se(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Sv(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Zu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function ku(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zu(i);throw new se(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ga(i,e){if(!Sv(i))throw new se(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=-62135596800,wg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*wg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eg)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ga(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ht("string",Ye._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ye(0,0))}static max(){return new ve(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=-1;function p1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new pi(o,de.empty(),e)}function m1(i){return new pi(i.readTime,i.key,ba)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(ve.min(),de.empty(),ba)}static max(){return new pi(ve.max(),de.empty(),ba)}}function g1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==y1)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function _1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}tc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=-1;function nc(i){return i==null}function Uu(i){return i===0&&1/i==-1/0}function w1(i){return typeof i=="number"&&Number.isInteger(i)&&!Uu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="";function T1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Tg(e)),e=I1(i.get(t),e);return Tg(e)}function I1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Av:t+="";break;default:t+=u}}return t}function Tg(i){return i+Av+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ao(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Cv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new ai([])}unionWith(e){let t=new yt(Ft.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ai(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new kv("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const S1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(i){if(Ze(!!i,39018),typeof i=="string"){let e=0;const t=S1.exec(i);if(Ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function gi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="server_timestamp",Pv="__type__",Nv="__previous_value__",xv="__local_write_time__";function Hd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pv])===null||t===void 0?void 0:t.stringValue)===Rv}function rc(i){const e=i.mapValue.fields[Nv];return Hd(e)?rc(e):e}function ja(i){const e=mi(i.mapValue.fields[xv].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,s,o,u,h,m,g,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const zu="(default)";class Fa{constructor(e,t){this.projectId=e,this.database=t||zu}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database===zu}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="__type__",C1="__max__",yu={mapValue:{}},Vv="__vector__",Bu="value";function yi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Hd(i)?4:R1(i)?9007199254740991:k1(i)?10:11:_e(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=yi(i);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ja(i).isEqual(ja(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=mi(o.timestampValue),m=mi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return gi(o.bytesValue).isEqual(gi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?Uu(h)===Uu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ig(h)!==Ig(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ir(h[g],m[g])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Ua(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function mo(i,e){if(i===e)return 0;const t=yi(i),s=yi(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Ag(i.timestampValue,e.timestampValue);case 4:return Ag(ja(i),ja(e));case 5:return hd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=gi(u),g=gi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const T=Se(m[_],g[_]);if(T!==0)return T}return Se(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Se(it(u.latitude),it(h.latitude));return m!==0?m:Se(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Cg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,_,T;const k=u.fields||{},D=h.fields||{},z=(m=k[Bu])===null||m===void 0?void 0:m.arrayValue,Y=(g=D[Bu])===null||g===void 0?void 0:g.arrayValue,X=Se(((_=z==null?void 0:z.values)===null||_===void 0?void 0:_.length)||0,((T=Y==null?void 0:Y.values)===null||T===void 0?void 0:T.length)||0);return X!==0?X:Cg(z,Y)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===yu.mapValue&&h===yu.mapValue)return 0;if(u===yu.mapValue)return 1;if(h===yu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let k=0;k<g.length&&k<T.length;++k){const D=hd(g[k],T[k]);if(D!==0)return D;const z=mo(m[g[k]],_[T[k]]);if(z!==0)return z}return Se(g.length,T.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function Ag(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=mi(i),s=mi(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Cg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function go(i){return dd(i)}function dd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=mi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return gi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=dd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${dd(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function Ru(i){switch(yi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rc(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return gi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Ru(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ao(s.fields,((u,h)=>{o+=u.length+Ru(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function kg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function fd(i){return!!i&&"integerValue"in i}function qd(i){return!!i&&"arrayValue"in i}function Rg(i){return!!i&&"nullValue"in i}function Pg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Qh(i){return!!i&&"mapValue"in i}function k1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dv])===null||t===void 0?void 0:t.stringValue)===Vv}function xa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ao(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function R1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===C1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Qh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Ft.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Qh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Qh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ao(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Xn(xa(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new jt(e,0,ve.min(),ve.min(),ve.min(),Xn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,ve.min(),ve.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,ve.min(),ve.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.position=e,this.inclusive=t}}function Ng(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function xg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function P1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{}class ct extends Ov{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new x1(e,t,s):t==="array-contains"?new O1(e,s):t==="in"?new L1(e,s):t==="not-in"?new M1(e,s):t==="array-contains-any"?new b1(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new D1(e,s):new V1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mo(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends Ov{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Fn(e,t)}matches(e){return Lv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Lv(i){return i.op==="and"}function Mv(i){return N1(i)&&Lv(i)}function N1(i){for(const e of i.filters)if(e instanceof Fn)return!1;return!0}function pd(i){if(i instanceof ct)return i.field.canonicalString()+i.op.toString()+go(i.value);if(Mv(i))return i.filters.map((e=>pd(e))).join(",");{const e=i.filters.map((t=>pd(t))).join(",");return`${i.op}(${e})`}}function bv(i,e){return i instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(i,e):i instanceof Fn?(function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&bv(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function jv(i){return i instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`})(i):i instanceof Fn?(function(t){return t.op.toString()+" {"+t.getFilters().map(jv).join(" ,")+"}"})(i):"Filter"}class x1 extends ct{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class D1 extends ct{constructor(e,t){super(e,"in",t),this.keys=Fv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class V1 extends ct{constructor(e,t){super(e,"not-in",t),this.keys=Fv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fv(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class O1 extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&Ua(t.arrayValue,this.value)}}class L1 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ua(this.value.arrayValue,t)}}class M1 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ua(this.value.arrayValue,t)}}class b1 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ua(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Dg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new j1(i,e,t,s,o,u,h)}function Wd(i){const e=xe(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>pd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>go(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>go(s))).join(",")),e.Pe=t}return e.Pe}function Gd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!P1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!bv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!xg(i.startAt,e.startAt)&&xg(i.endAt,e.endAt)}function md(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function F1(i,e,t,s,o,u,h,m){return new Ka(i,e,t,s,o,u,h,m)}function Kd(i){return new Ka(i)}function Vg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Uv(i){return i.collectionGroup!==null}function Da(i){const e=xe(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Ft.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Hu(u,s))})),t.has(Ft.keyField().canonicalString())||e.Te.push(new Hu(Ft.keyField(),s))}return e.Te}function tr(i){const e=xe(i);return e.Ie||(e.Ie=U1(e,Da(i))),e.Ie}function U1(i,e){if(i.limitType==="F")return Dg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Hu(o.field,u)}));const t=i.endAt?new $u(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new $u(i.startAt.position,i.startAt.inclusive):null;return Dg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function gd(i,e){const t=i.filters.concat([e]);return new Ka(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function yd(i,e,t){return new Ka(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ic(i,e){return Gd(tr(i),tr(e))&&i.limitType===e.limitType}function zv(i){return`${Wd(tr(i))}|lt:${i.limitType}`}function Zs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>jv(o))).join(", ")}]`),nc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>go(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>go(o))).join(",")),`Target(${s})`})(tr(i))}; limitType=${i.limitType})`}function sc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Ng(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Da(s),o)||s.endAt&&!(function(h,m,g){const _=Ng(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Da(s),o))})(i,e)}function z1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Bv(i){return(e,t)=>{let s=!1;for(const o of Da(i)){const u=B1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function B1(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?mo(g,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ao(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Cv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new st(de.comparator);function vi(){return $1}const $v=new st(de.comparator);function Ca(...i){let e=$v;for(const t of i)e=e.insert(t.key,t);return e}function H1(i){let e=$v;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Yi(){return Va()}function Hv(){return Va()}function Va(){return new ss((i=>i.toString()),((i,e)=>i.isEqual(e)))}const q1=new yt(de.comparator);function Ve(...i){let e=q1;for(const t of i)e=e.add(t);return e}const W1=new yt(Se);function G1(){return W1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function qv(i){return{integerValue:""+i}}function K1(i,e){return w1(e)?qv(e):Qd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._=void 0}}function Q1(i,e,t){return i instanceof vd?(function(o,u){const h={fields:{[Pv]:{stringValue:Rv},[xv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hd(u)&&(u=rc(u)),u&&(h.fields[Nv]=u),{mapValue:h}})(t,e):i instanceof qu?Wv(i,e):i instanceof Wu?Gv(i,e):(function(o,u){const h=J1(o,u),m=Og(h)+Og(o.Ee);return fd(h)&&fd(o.Ee)?qv(m):Qd(o.serializer,m)})(i,e)}function Y1(i,e,t){return i instanceof qu?Wv(i,e):i instanceof Wu?Gv(i,e):t}function J1(i,e){return i instanceof _d?(function(s){return fd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class vd extends oc{}class qu extends oc{constructor(e){super(),this.elements=e}}function Wv(i,e){const t=Kv(e);for(const s of i.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wu extends oc{constructor(e){super(),this.elements=e}}function Gv(i,e){let t=Kv(e);for(const s of i.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class _d extends oc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Og(i){return it(i.integerValue||i.doubleValue)}function Kv(i){return qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function X1(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof qu&&o instanceof qu||s instanceof Wu&&o instanceof Wu?po(s.elements,o.elements,ir):s instanceof _d&&o instanceof _d?ir(s.Ee,o.Ee):s instanceof vd&&o instanceof vd})(i.transform,e.transform)}class Ji{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ji}static exists(e){return new Ji(void 0,e)}static updateTime(e){return new Ji(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Yd{}function Qv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new eS(i.key,Ji.none()):new Jd(i.key,i.data,Ji.none());{const t=i.data,s=Xn.empty();let o=new yt(Ft.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ac(i.key,s,new ai(o.toArray()),Ji.none())}}function Z1(i,e,t){i instanceof Jd?(function(o,u,h){const m=o.value.clone(),g=Mg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ac?(function(o,u,h){if(!Pu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Mg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Yv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Oa(i,e,t,s){return i instanceof Jd?(function(u,h,m,g){if(!Pu(u.precondition,h))return m;const _=u.value.clone(),T=bg(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ac?(function(u,h,m,g){if(!Pu(u.precondition,h))return m;const _=bg(u.fieldTransforms,g,h),T=h.data;return T.setAll(Yv(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(i,e,t,s):(function(u,h,m){return Pu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function Lg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,((u,h)=>X1(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Jd extends Yd{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ac extends Yd{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Yv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Mg(i,e,t){const s=new Map;Ze(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Y1(h,m,t[o]))}return s}function bg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,Q1(u,h,e))}return s}class eS extends Yd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Z1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Hv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Qv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((t,s)=>Lg(t,s)))&&po(this.baseMutations,e.baseMutations,((t,s)=>Lg(t,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Ne;function Jv(i){if(i===void 0)return Pr("GRPC error has no .code"),K.UNKNOWN;switch(i){case lt.OK:return K.OK;case lt.CANCELLED:return K.CANCELLED;case lt.UNKNOWN:return K.UNKNOWN;case lt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case lt.INTERNAL:return K.INTERNAL;case lt.UNAVAILABLE:return K.UNAVAILABLE;case lt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case lt.NOT_FOUND:return K.NOT_FOUND;case lt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case lt.ABORTED:return K.ABORTED;case lt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case lt.DATA_LOSS:return K.DATA_LOSS;default:return _e(39323,{code:i})}}(Ne=lt||(lt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new di([4294967295,4294967295],0);function jg(i){const e=Tv().encode(i),t=new pv;return t.update(e),new Uint8Array(t.digest())}function Fg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new di([t,s],0),new di([o,u],0)]}class Xd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(s<0)throw new ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=di.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(di.fromNumber(s)));return o.compare(iS)===1&&(o=new di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jg(e),[s,o]=Fg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Xd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=jg(e),[s,o]=Fg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new lc(ve.min(),o,new st(Se),vi(),Ve())}}class Qa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qa(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Xv{constructor(e,t){this.targetId=e,this.De=t}}class Zv{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ug{constructor(){this.ve=0,this.Ce=zg(),this.Fe=Pt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),s=Ve();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new Qa(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=zg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sS{constructor(e){this.We=e,this.Ge=new Map,this.ze=vi(),this.je=vu(),this.Je=vu(),this.He=new st(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(md(u))if(s===0){const h=new de(u.path);this.Xe(t,h,jt.newNoDocument(h,ve.min()))}else Ze(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=gi(s).toUint8Array()}catch(g){if(g instanceof kv)return fi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Xd(h,o,u)}catch(g){return fi(g instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&md(m.target)){const g=new de(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Ve();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new lc(e,t,this.He,this.ze,s);return this.ze=vi(),this.je=vu(),this.Je=vu(),this.He=new st(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ug,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ug),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function vu(){return new st(de.comparator)}function zg(){return new st(de.comparator)}const oS={asc:"ASCENDING",desc:"DESCENDING"},aS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lS={and:"AND",or:"OR"};class uS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ed(i,e){return i.useProto3Json||nc(e)?e:{value:e}}function wd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ao(i){return Ze(!!i,49232),ve.fromTimestamp((function(t){const s=mi(t);return new Ye(s.seconds,s.nanos)})(i))}function t_(i,e){return Td(i,e).canonicalString()}function Td(i,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function n_(i){const e=Qe.fromString(i);return Ze(a_(e),10190,{key:e.toString()}),e}function Yh(i,e){const t=n_(e);if(t.get(1)!==i.databaseId.projectId)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(i_(t))}function r_(i,e){return t_(i.databaseId,e)}function cS(i){const e=n_(i);return e.length===4?Qe.emptyPath():i_(e)}function Bg(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function i_(i){return Ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function hS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(Ze(T===void 0||typeof T=="string",58123),Pt.fromBase64String(T||"")):(Ze(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Pt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?K.UNKNOWN:Jv(_.code);return new se(T,_.message||"")})(h);t=new Zv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Yh(i,s.document.name),u=ao(s.document.updateTime),h=s.document.createTime?ao(s.document.createTime):ve.min(),m=new Xn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,u,h,m),_=s.targetIds||[],T=s.removedTargetIds||[];t=new Nu(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Yh(i,s.document),u=s.readTime?ao(s.readTime):ve.min(),h=jt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Yh(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new rS(o,u),m=s.targetId;t=new Xv(m,h)}}return t}function dS(i,e){return{documents:[r_(i,e.path)]}}function fS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=r_(i,o);const u=(function(_){if(_.length!==0)return o_(Fn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(D){return{field:eo(D.field),direction:gS(D.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ed(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function pS(i){let e=cS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ze(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(k){const D=s_(k);return D instanceof Fn&&Mv(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((D=>(function(Y){return new Hu(to(Y.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let D;return D=typeof k=="object"?k.value:k,nc(D)?null:D})(t.limit));let g=null;t.startAt&&(g=(function(k){const D=!!k.before,z=k.values||[];return new $u(z,D)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const D=!k.before,z=k.values||[];return new $u(z,D)})(t.endAt)),F1(e,o,h,u,m,"F",g,_)}function mS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function s_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=to(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=to(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=to(t.unaryFilter.field);return ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=to(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ct.create(to(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Fn.create(t.compositeFilter.filters.map((s=>s_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function gS(i){return oS[i]}function yS(i){return aS[i]}function vS(i){return lS[i]}function eo(i){return{fieldPath:i.canonicalString()}}function to(i){return Ft.fromServerFormat(i.fieldPath)}function o_(i){return i instanceof ct?(function(t){if(t.op==="=="){if(Pg(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NAN"}};if(Rg(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pg(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NOT_NAN"}};if(Rg(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(t.field),op:yS(t.op),value:t.value}}})(i):i instanceof Fn?(function(t){const s=t.getFilters().map((o=>o_(o)));return s.length===1?s[0]:{compositeFilter:{op:vS(t.op),filters:s}}})(i):_e(54877,{filter:i})}function a_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.gt=e}}function ES(i){const e=pS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.Dn=new TS}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(pi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class TS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l_=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(l_,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new yo(0)}static ur(){return new yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="LruGarbageCollector",IS=1048576;function qg([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class SS{constructor(e){this.Tr=e,this.buffer=new yt(qg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();qg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Hg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?ne(Hg,"Ignoring IndexedDB error during garbage collection: ",t):await ec(t)}await this.Rr(3e5)}))}}class CS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(tc.ue);const s=new SS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve($g)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$g):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(s=k,m=Date.now(),this.removeTargets(e,s,t)))).next((k=>(u=k,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(_=Date.now(),Xs()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${k} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k}))))}}function kS(i,e){return new CS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.changes=new ss((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Oa(s.mutation,o,ai.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=Yi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=vi();const h=Va(),m=(function(){return Va()})();return t.forEach(((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof ac)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Oa(T.mutation,_,T.mutation.getFieldMask(),Ye.now())):h.set(_.key,ai.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>{var k;return m.set(_,new PS(T,(k=h.get(_))!==null&&k!==void 0?k:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new st(((h,m)=>h-m)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=s.get(g)||ai.empty();T=m.applyToLocalView(_,T),s.set(g,T);const k=(o.get(m.batchId)||Ve()).add(g);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,T=g.value,k=Hv();T.forEach((D=>{if(!u.has(D)){const z=Qv(t.get(D),s.get(D));z!==null&&k.set(D,z),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Uv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Yi());let m=ba,g=u;return h.next((_=>$.forEach(_,((T,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(T)?$.resolve():this.remoteDocumentCache.getEntry(e,T).next((D=>{g=g.insert(T,D)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Ve()))).next((T=>({batchId:m,changes:H1(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(k,D){return new Ka(D,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((k,D)=>{h=h.insert(k,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,jt.newInvalidDocument(T)))}));let m=Ca();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&Oa(T.mutation,_,ai.empty(),Ye.now()),sc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ao(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:ES(o.bundledQuery),readTime:ao(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.overlays=new st(de.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new st(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=Yi(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=Yi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new nS(t,s));let u=this.kr.get(t);u===void 0&&(u=Ve(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.qr=new yt(It.Qr),this.$r=new yt(It.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new It(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new Qe([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new Qe([])),s=new It(t,e),o=new It(t,e+1);let u=Ve();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new It(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(It.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new tS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?E1:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Se);return t.forEach((o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new It(new de(u),0);let m=new yt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new It(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.ni=e,this.docs=(function(){return new st(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=vi();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():jt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=vi();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||g1(m1(T),s)<=0||(o.has(T.key)||sc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new MS(this)}getSize(e){return $.resolve(this.size)}}class MS extends RS{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.persistence=e,this.ii=new ss((t=>Wd(t)),Gd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Zd,this.targetCount=0,this._i=yo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new yo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.ai={},this.overlays={},this.ui=new tc(0),this.ci=!1,this.ci=!0,this.li=new VS,this.referenceDelegate=e(this),this.hi=new bS(this),this.indexManager=new wS,this.remoteDocumentCache=(function(o){return new LS(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new _S(t),this.Ti=new xS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new OS(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new jS(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class jS extends v1{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Ai=new Zd,this.Ri=null}static Vi(e){return new ef(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Gu{constructor(e,t){this.persistence=e,this.gi=new ss((s=>T1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=kS(this,t)}static Vi(e,t){return new Gu(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ve.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new tf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ew()?8:_1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new FS;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(Xs()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Zs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Xs()<=Ce.DEBUG&&ne("QueryEngine","Query:",Zs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(Xs()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Zs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):$.resolve())}ps(e,t){if(Vg(t))return $.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=yd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ve(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,yd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Vg(t)||o.isEqual(ve.min())?$.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(Xs()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Zs(t)),this.vs(e,h,t,p1(o,ba)).next((m=>m)))}))}bs(e,t){let s=new yt(Bv(e));return t.forEach(((o,u)=>{sc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return Xs()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Zs(t)),this.gs.getDocumentsMatchingQuery(e,t,pi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="LocalStore",zS=3e8;class BS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new st(Se),this.Ms=new ss((u=>Wd(u)),Gd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function $S(i,e,t,s){return new BS(i,e,t,s)}async function c_(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Ve();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function h_(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function HS(i,e){const t=xe(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((T,k)=>{const D=o.get(k);if(!D)return;m.push(t.hi.removeMatchingKeys(u,T.removedDocuments,k).next((()=>t.hi.addMatchingKeys(u,T.addedDocuments,k))));let z=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),o=o.insert(k,z),(function(X,W,me){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=zS?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(D,z,T)&&m.push(t.hi.updateTargetData(u,z))}));let g=vi(),_=Ve();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(qS(u,h,e.documentUpdates).next((T=>{g=T.Ls,_=T.ks}))),!s.isEqual(ve.min())){const T=t.hi.getLastRemoteSnapshotVersion(u).next((k=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function qS(i,e,t){let s=Ve(),o=Ve();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=vi();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(nf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function WS(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new li(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Id(i,e,t){const s=xe(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!So(h))throw h;ne(nf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Wg(i,e,t){const s=xe(i);let o=ve.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const k=xe(g),D=k.Ms.get(T);return D!==void 0?$.resolve(k.Fs.get(D)):k.hi.getTargetData(_,T)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Ve()))).next((m=>(GS(s,z1(e),m),{documents:m,qs:u})))))}function GS(i,e,t){let s=i.xs.get(e)||ve.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class Gg{constructor(){this.activeTargetIds=G1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KS{constructor(){this.Fo=new Gg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Gg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="ConnectivityMonitor";class Qg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(Kg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(Kg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u=null;function Sd(){return _u===null?_u=(function(){return 268435456+Math.round(2147483648*Math.random())})():_u++,"0x"+_u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="RestConnection",YS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===zu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Sd(),m=this.Go(e,t.toUriEncodedString());ne(Jh,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(m),T=Eo(_);return this.jo(e,m,g,s,T).then((k=>(ne(Jh,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw fi(Jh,`RPC '${e}' ${h} failed with error: `,k,"url: ",m,"request:",s),k}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Io})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=YS[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class ZS extends JS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Sd();return new Promise(((m,g)=>{const _=new mv;_.setWithCredentials(!0),_.listenOnce(gv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Cu.NO_ERROR:const k=_.getResponseJson();ne(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),m(k);break;case Cu.TIMEOUT:ne(Mt,`RPC '${e}' ${h} timed out`),g(new se(K.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const D=_.getStatus();if(ne(Mt,`RPC '${e}' ${h} failed with status:`,D,"response text:",_.getResponseText()),D>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const X=(function(me){const pe=me.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(pe)>=0?pe:K.UNKNOWN})(Y.status);g(new se(X,Y.message))}else g(new se(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new se(K.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Mt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ne(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,s,15)}))}P_(e,t,s){const o=Sd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=_v(),m=vv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const T=u.join("");ne(Mt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const k=h.createWebChannel(T,g);this.T_(k);let D=!1,z=!1;const Y=new XS({Ho:W=>{z?ne(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(D||(ne(Mt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),D=!0),ne(Mt,`RPC '${e}' stream ${o} sending:`,W),k.send(W))},Yo:()=>k.close()}),X=(W,me,pe)=>{W.listen(me,(ye=>{try{pe(ye)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return X(k,Aa.EventType.OPEN,(()=>{z||(ne(Mt,`RPC '${e}' stream ${o} transport opened.`),Y.s_())})),X(k,Aa.EventType.CLOSE,(()=>{z||(z=!0,ne(Mt,`RPC '${e}' stream ${o} transport closed`),Y.__(),this.I_(k))})),X(k,Aa.EventType.ERROR,(W=>{z||(z=!0,fi(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Y.__(new se(K.UNAVAILABLE,"The operation could not be completed")))})),X(k,Aa.EventType.MESSAGE,(W=>{var me;if(!z){const pe=W.data[0];Ze(!!pe,16349);const ye=pe,Ee=(ye==null?void 0:ye.error)||((me=ye[0])===null||me===void 0?void 0:me.error);if(Ee){ne(Mt,`RPC '${e}' stream ${o} received error:`,Ee);const We=Ee.status;let Ae=(function(C){const P=lt[C];if(P!==void 0)return Jv(P)})(We),x=Ee.message;Ae===void 0&&(Ae=K.INTERNAL,x="Unknown error status: "+We+" with message "+Ee.message),z=!0,Y.__(new se(Ae,x)),k.close()}else ne(Mt,`RPC '${e}' stream ${o} received:`,pe),Y.a_(pe)}})),X(m,yv.STAT_EVENT,(W=>{W.stat===cd.PROXY?ne(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===cd.NOPROXY&&ne(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.o_()}),0),Y}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Xh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(i){return new uS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="PersistentStream";class eA{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new d_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new se(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tA extends eA{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=hS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ao(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Bg(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=md(g)?{documents:dS(u,g)}:{query:fS(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=e_(u,h.resumeToken);const _=Ed(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=wd(u,h.snapshotVersion.toTimestamp());const _=Ed(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=mS(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Bg(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{}class rA extends nA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Td(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(K.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Td(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(K.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pr(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RemoteStore";class sA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Ja(this)&&(ne(vo,"Restarting streams for network reachability change."),await(async function(g){const _=xe(g);_.Ia.add(4),await Ya(_),_.Aa.set("Unknown"),_.Ia.delete(4),await cc(_)})(this))}))})),this.Aa=new iA(s,o)}}async function cc(i){if(Ja(i))for(const e of i.da)await e(!0)}async function Ya(i){for(const e of i.da)await e(!1)}function f_(i,e){const t=xe(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),af(t)?of(t):Co(t).x_()&&sf(t,e))}function rf(i,e){const t=xe(i),s=Co(t);t.Ta.delete(e),s.x_()&&p_(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ja(t)&&t.Aa.set("Unknown"))}function sf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).H_(e)}function p_(i,e){i.Ra.$e(e),Co(i).Y_(e)}function of(i){i.Ra=new sS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Aa.aa()}function af(i){return Ja(i)&&!Co(i).M_()&&i.Ta.size>0}function Ja(i){return xe(i).Ia.size===0}function m_(i){i.Ra=void 0}async function oA(i){i.Aa.set("Online")}async function aA(i){i.Ta.forEach(((e,t)=>{sf(i,e)}))}async function lA(i,e){m_(i),af(i)?(i.Aa.la(e),of(i)):i.Aa.set("Unknown")}async function uA(i,e,t){if(i.Aa.set("Online"),e instanceof Zv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ne(vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jg(i,s)}else if(e instanceof Nu?i.Ra.Ye(e):e instanceof Xv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(ve.min()))try{const s=await h_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ta.get(_);T&&u.Ta.set(_,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const T=u.Ta.get(g);if(!T)return;u.Ta.set(g,T.withResumeToken(Pt.EMPTY_BYTE_STRING,T.snapshotVersion)),p_(u,g);const k=new li(T.target,g,_,T.sequenceNumber);sf(u,k)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(vo,"Failed to raise snapshot:",s),await Jg(i,s)}}async function Jg(i,e,t){if(!So(e))throw e;i.Ia.add(1),await Ya(i),i.Aa.set("Offline"),t||(t=()=>h_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(vo,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await cc(i)}))}async function Xg(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),ne(vo,"RemoteStore received new credentials");const s=Ja(t);t.Ia.add(3),await Ya(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await cc(t)}async function cA(i,e){const t=xe(i);e?(t.Ia.delete(2),await cc(t)):e||(t.Ia.add(2),await Ya(t),t.Aa.set("Unknown"))}function Co(i){return i.Va||(i.Va=(function(t,s,o){const u=xe(t);return u.ia(),new tA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:oA.bind(null,i),e_:aA.bind(null,i),n_:lA.bind(null,i),J_:uA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),af(i)?of(i):i.Aa.set("Unknown")):(await i.Va.stop(),m_(i))}))),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new oo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new lf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function g_(i,e){if(Pr("AsyncQueue",`${e}: ${i}`),So(i))return new se(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.fa=new st(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _o{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new _o(e,t,lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class dA{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=xe(t),u=o.queries;o.queries=ey(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new se(K.ABORTED,"Firestore shutting down"))}}function ey(){return new ss((i=>zv(i)),ic)}async function fA(i,e){const t=xe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new hA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=g_(h,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&uf(t)}async function pA(i,e){const t=xe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function mA(i,e){const t=xe(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&uf(t)}function gA(i,e,t){const s=xe(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function uf(i){i.Da.forEach((e=>{e.next()}))}var Ad,ty;(ty=Ad||(Ad={})).Fa="default",ty.Cache="cache";class yA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new _o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class vA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=Bv(e),this.eu=new lo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Zg,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,k)=>{const D=o.get(T),z=sc(this.query,k)?k:null,Y=!!D&&this.mutatedKeys.has(D.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;D&&z?D.data.isEqual(z.data)?Y!==X&&(s.track({type:3,doc:z}),W=!0):this.iu(D,z)||(s.track({type:2,doc:z}),W=!0,(g&&this.Xa(z,g)>0||_&&this.Xa(z,_)<0)&&(m=!0)):!D&&z?(s.track({type:0,doc:z}),W=!0):D&&!z&&(s.track({type:1,doc:D}),W=!0,(g||_)&&(m=!0)),W&&(z?(h=h.add(z),u=X?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((T,k)=>(function(z,Y){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:W})}};return X(z)-X(Y)})(T.type,k.type)||this.Xa(T.doc,k.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new _o(this.query,e.eu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new v_(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new y_(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return _o.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const cf="SyncEngine";class _A{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class EA{constructor(e){this.key=e,this.lu=!1}}class wA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ss((m=>zv(m)),ic),this.Tu=new Map,this.Iu=new Set,this.du=new st(de.comparator),this.Eu=new Map,this.Au=new Zd,this.Ru={},this.Vu=new Map,this.mu=yo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function TA(i,e,t=!0){const s=I_(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await __(s,e,t,!0),o}async function IA(i,e){const t=I_(i);await __(t,e,!0,!1)}async function __(i,e,t,s){const o=await WS(i.localStore,tr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await SA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&f_(i.remoteStore,o),m}async function SA(i,e,t,s,o){i.gu=(k,D,z)=>(async function(X,W,me,pe){let ye=W.view.nu(me);ye.Ds&&(ye=await Wg(X.localStore,W.query,!1).then((({documents:x})=>W.view.nu(x,ye))));const Ee=pe&&pe.targetChanges.get(W.targetId),We=pe&&pe.targetMismatches.get(W.targetId)!=null,Ae=W.view.applyChanges(ye,X.isPrimaryClient,Ee,We);return ry(X,W.targetId,Ae._u),Ae.snapshot})(i,k,D,z);const u=await Wg(i.localStore,e,!0),h=new vA(e,u.qs),m=h.nu(u.documents),g=Qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);ry(i,t,_._u);const T=new _A(e,t,h);return i.Pu.set(e,T),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function AA(i,e,t){const s=xe(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!ic(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Id(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&rf(s.remoteStore,o.targetId),Cd(s,o.targetId)})).catch(ec)):(Cd(s,o.targetId),await Id(s.localStore,o.targetId,!0))}async function CA(i,e){const t=xe(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rf(t.remoteStore,s.targetId))}async function E_(i,e){const t=xe(i);try{const s=await HS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ze(h.lu,14607):o.removedDocuments.size>0&&(Ze(h.lu,42227),h.lu=!1))})),await T_(t,s,e)}catch(s){await ec(s)}}function ny(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=xe(h);g.onlineState=m;let _=!1;g.queries.forEach(((T,k)=>{for(const D of k.wa)D.va(m)&&(_=!0)})),_&&uf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kA(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new st(de.comparator);h=h.insert(u,jt.newNoDocument(u,ve.min()));const m=Ve().add(u),g=new lc(ve.min(),new Map,new st(Se),h,m);await E_(s,g),s.du=s.du.remove(u),s.Eu.delete(e),hf(s)}else await Id(s.localStore,e,!1).then((()=>Cd(s,e,t))).catch(ec)}function Cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||w_(i,s)}))}function w_(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(rf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),hf(i))}function ry(i,e,t){for(const s of t)s instanceof y_?(i.Au.addReference(s.key,e),RA(i,s)):s instanceof v_?(ne(cf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||w_(i,s.key)):_e(19791,{yu:s})}function RA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ne(cf,"New document in limbo: "+t),i.Iu.add(s),hf(i))}function hf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new de(Qe.fromString(e)),s=i.mu.next();i.Eu.set(s,new EA(t)),i.du=i.du.insert(t,s),f_(i.remoteStore,new li(tr(Kd(t.path)),s,"TargetPurposeLimboResolution",tc.ue))}}async function T_(i,e,t){const s=xe(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var T;if((_||t)&&s.isPrimaryClient){const k=_?!_.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(_){o.push(_);const k=tf.Es(g.targetId,_);u.push(k)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const T=xe(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>$.forEach(_,(D=>$.forEach(D.Is,(z=>T.persistence.referenceDelegate.addReference(k,D.targetId,z))).next((()=>$.forEach(D.ds,(z=>T.persistence.referenceDelegate.removeReference(k,D.targetId,z)))))))))}catch(k){if(!So(k))throw k;ne(nf,"Failed to update sequence numbers: "+k)}for(const k of _){const D=k.targetId;if(!k.fromCache){const z=T.Fs.get(D),Y=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(Y);T.Fs=T.Fs.insert(D,X)}}})(s.localStore,u))}async function PA(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){ne(cf,"User change. New user:",e.toKey());const s=await c_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new se(K.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await T_(t,s.Bs)}}function NA(i,e){const t=xe(i),s=t.Eu.get(e);if(s&&s.lu)return Ve().add(s.key);{let o=Ve();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function I_(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=E_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kA.bind(null,e),e.hu.J_=mA.bind(null,e.eventManager),e.hu.pu=gA.bind(null,e.eventManager),e}class Ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return $S(this.persistence,new US,e.initialUser,this.serializer)}Du(e){return new u_(ef.Vi,this.serializer)}bu(e){return new KS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ku.provider={build:()=>new Ku};class xA extends Ku{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof Gu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new AS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new u_((s=>Gu.Vi(s,t)),this.serializer)}}class kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PA.bind(null,this.syncEngine),await cA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dA})()}createDatastore(e){const t=uc(e.databaseInfo.databaseId),s=(function(u){return new ZS(u)})(e.databaseInfo);return(function(u,h,m,g){return new rA(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new sA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ny(this.syncEngine,t,0)),(function(){return Qg.C()?new Qg:new QS})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,T){const k=new wA(o,u,h,m,g,_);return T&&(k.fu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=xe(o);ne(vo,"RemoteStore shutting down."),u.Ia.add(5),await Ya(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}kd.provider={build:()=>new kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="FirestoreClient";class VA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Iv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(_i,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(_i,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=g_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Zh(i,e){i.asyncQueue.verifyOperationInProgress(),ne(_i,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await c_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{fi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{fi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function iy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await OA(i);ne(_i,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Xg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Xg(e.remoteStore,o))),i._onlineComponents=e}async function OA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(_i,"Using user provided OfflineComponentProvider");try{await Zh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;fi("Error using user provided cache. Falling back to memory cache: "+t),await Zh(i,new Ku)}}else ne(_i,"Using default OfflineComponentProvider"),await Zh(i,new xA(void 0));return i._offlineComponents}async function LA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(_i,"Using user provided OnlineComponentProvider"),await iy(i,i._uninitializedComponentsProvider._online)):(ne(_i,"Using default OnlineComponentProvider"),await iy(i,new kd))),i._onlineComponents}async function sy(i){const e=await LA(i),t=e.eventManager;return t.onListen=TA.bind(null,e.syncEngine),t.onUnlisten=AA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firestore.googleapis.com",ay=!0;class ly{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=A_,this.ssl=ay}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ay;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IS)throw new se(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class df{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new r1;switch(s.type){case"firstParty":return new a1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=oy.get(t);s&&(ne("ComponentProvider","Removing Datastore"),oy.delete(t),s.terminate())})(this),Promise.resolve()}}function MA(i,e,t,s={}){var o;i=ku(i,df);const u=Eo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Cy(`https://${g}`),ky("Firestore",!0)),h.host!==A_&&h.host!==g&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Zi(_,m)&&(i._setSettings(_),s.mockUserToken)){let T,k;if(typeof s.mockUserToken=="string")T=s.mockUserToken,k=bt.MOCK_USER;else{T=hw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new se(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new bt(D)}i._authCredentials=new i1(new wv(T,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class Ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}toJSON(){return{type:Ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ga(t,Ut._jsonSchema))return new Ut(e,s||null,new de(Qe.fromString(t.referencePath)))}}Ut._jsonSchemaVersion="firestore/documentReference/1.0",Ut._jsonSchema={type:ht("string",Ut._jsonSchemaVersion),referencePath:ht("string")};class uo extends ko{constructor(e,t,s){super(e,t,Kd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new de(e))}withConverter(e){return new uo(this.firestore,e,this._path)}}function bA(i,e,...t){if(i=Wt(i),d1("collection","path",e),i instanceof df){const s=Qe.fromString(e,...t);return _g(s),new uo(i,null,s)}{if(!(i instanceof Ut||i instanceof uo))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return _g(s),new uo(i.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="AsyncQueue";class cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new d_(this,"async_queue_retry"),this.oc=()=>{const s=Xh();s&&ne(uy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Xh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new oo;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!So(e))throw e;ne(uy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Pr("INTERNAL UNHANDLED ERROR: ",hy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=lf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:hy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function hy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Rd extends df{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function jA(i,e){const t=typeof i=="object"?i:xy(),s=typeof i=="string"?i:zu,o=Vd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=uw("firestore");u&&MA(o,...u)}return o}function FA(i){if(i._terminated)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||UA(i),i._firestoreClient}function UA(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,_,T){return new A1(m,g,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,S_(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new VA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Pt.fromBase64String(e))}catch(t){throw new se(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ga(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:ht("string",wn._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(Ga(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:ht("string",nr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ga(e,rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rr(e.vectorValues);throw new se(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rr._jsonSchemaVersion="firestore/vectorValue/1.0",rr._jsonSchema={type:ht("string",rr._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^__.*__$/;function R_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:i})}}class ff{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Pd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(R_(this.Ec)&&zA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class BA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||uc(e)}Dc(e,t,s,o=!1){return new ff({Ec:e,methodName:t,bc:s,path:Ft.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $A(i){const e=i._freezeSettings(),t=uc(i._databaseId);return new BA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function HA(i,e,t,s=!1){return pf(t,i.Dc(s?4:3,e))}function pf(i,e){if(P_(i=Wt(i)))return WA("Unsupported field value:",e,i),qA(i,e);if(i instanceof k_)return(function(s,o){if(!R_(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=pf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return K1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:wd(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wd(o.serializer,u)}}if(s instanceof nr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:e_(o.serializer,s._byteString)};if(s instanceof Ut){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:t_(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof rr)return(function(h,m){return{mapValue:{fields:{[Dv]:{stringValue:Vv},[Bu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return Qd(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Zu(s)}`)})(i,e)}function qA(i,e){const t={};return Cv(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ao(i,((s,o)=>{const u=pf(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function P_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof nr||i instanceof wn||i instanceof Ut||i instanceof k_||i instanceof rr)}function WA(i,e,t){if(!P_(t)||!Sv(t)){const s=Zu(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}const GA=new RegExp("[~\\*/\\[\\]]");function KA(i,e,t){if(e.search(GA)>=0)throw Pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new C_(...e.split("."))._internalPath}catch{throw Pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Pd(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(K.INVALID_ARGUMENT,m+i+g)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(x_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QA extends N_{data(){return super.data()}}function x_(i,e){return typeof e=="string"?KA(i,e):e instanceof C_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mf{}class JA extends mf{}function XA(i,e,...t){let s=[];e instanceof mf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof yf)).length,m=u.filter((g=>g instanceof gf)).length;if(h>1||h>0&&m>0)throw new se(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class gf extends JA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new gf(e,t,s)}_apply(e){const t=this._parse(e);return D_(e._query,t),new ko(e.firestore,e.converter,gd(e._query,t))}_parse(e){const t=$A(e.firestore);return(function(u,h,m,g,_,T,k){let D;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new se(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){py(k,T);const Y=[];for(const X of k)Y.push(fy(g,u,X));D={arrayValue:{values:Y}}}else D=fy(g,u,k)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||py(k,T),D=HA(m,h,k,T==="in"||T==="not-in");return ct.create(_,T,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class yf extends mf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)D_(h,g),h=gd(h,g)})(e._query,t),new ko(e.firestore,e.converter,gd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fy(i,e,t){if(typeof(t=Wt(t))=="string"){if(t==="")throw new se(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uv(e)&&t.indexOf("/")!==-1)throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Qe.fromString(t));if(!de.isDocumentKey(s))throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kg(i,new de(s))}if(t instanceof Ut)return kg(i,t._key);throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(t)}.`)}function py(i,e){if(!Array.isArray(i)||i.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D_(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ZA{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ao(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Bu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new rr(u)}convertGeoPoint(e){return new nr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=rc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=mi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Ze(a_(s),9688,{name:e});const o=new Fa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}class Ra{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xi extends N_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(x_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xi._jsonSchema={type:ht("string",Xi._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class xu extends Xi{data(e={}){return super.data(e)}}class co{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ra(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xu(this._firestore,this._userDataWriter,s.key,s,new Ra(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ra(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ra(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:eC(m.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Iv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}co._jsonSchemaVersion="firestore/querySnapshot/1.0",co._jsonSchema={type:ht("string",co._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class V_ extends ZA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,t)}}function tC(i,...e){var t,s,o;i=Wt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||dy(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(dy(e[h])){const k=e[h];e[h]=(t=k.next)===null||t===void 0?void 0:t.bind(k),e[h+1]=(s=k.error)===null||s===void 0?void 0:s.bind(k),e[h+2]=(o=k.complete)===null||o===void 0?void 0:o.bind(k)}let g,_,T;if(i instanceof Ut)_=ku(i.firestore,Rd),T=Kd(i._key.path),g={next:k=>{e[h]&&e[h](nC(_,i,k))},error:e[h+1],complete:e[h+2]};else{const k=ku(i,ko);_=ku(k.firestore,Rd),T=k._query;const D=new V_(_);g={next:z=>{e[h]&&e[h](new co(_,D,k,z))},error:e[h+1],complete:e[h+2]},YA(i._query)}return(function(D,z,Y,X){const W=new DA(X),me=new yA(z,W,Y);return D.asyncQueue.enqueueAndForget((async()=>fA(await sy(D),me))),()=>{W.Ou(),D.asyncQueue.enqueueAndForget((async()=>pA(await sy(D),me)))}})(FA(_),T,m,g)}function nC(i,e,t){const s=t.docs.get(e._key),o=new V_(i);return new Xi(i,o,e._key,s,new Ra(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Io=o})(wo),ho(new es("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Rd(new s1(s.getProvider("auth-internal")),new l1(h,s.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(_.options.projectId,T)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),hi(pg,mg,e),hi(pg,mg,"esm2017")})();const rC={apiKey:"AIzaSyDlMF0E2Rcqw9GCE7tEl5UIJFFpvy3g5KE",authDomain:"centro-de-control-d2d44.firebaseapp.com",projectId:"centro-de-control-d2d44",storageBucket:"centro-de-control-d2d44.firebasestorage.app",messagingSenderId:"880122089873",appId:"1:880122089873:web:8e24d5d76d671a77cc8a30",measurementId:"G-DQ9HCLJ8LT"},O_=Ny(rC),Eu=ZI(O_),iC=jA(O_),L_=ut.createContext(null);function sC({children:i}){const[e,t]=ut.useState(null),[s,o]=ut.useState(!0);ut.useEffect(()=>zT(Eu,g=>{t(g),o(!1)}),[]);const u=async(g,_)=>{await MT(Eu,g,_)},h=async(g,_,T)=>{const k=await LT(Eu,_,T);g&&await jT(k.user,{displayName:g})},m=()=>BT(Eu);return w.jsx(L_.Provider,{value:{user:e,loading:s,signIn:u,signUp:h,logout:m},children:i})}function vf(){const i=ut.useContext(L_);if(!i)throw new Error("useAuth must be used within AuthProvider");return i}const M_=ut.createContext(null);function oC(){const i=localStorage.getItem("cdc-theme");return i==="light"||i==="dark"?i:"light"}function aC({children:i}){const[e,t]=ut.useState(oC);return ut.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("cdc-theme",e)},[e]),w.jsx(M_.Provider,{value:{theme:e,setTheme:t,toggle:()=>t(e==="light"?"dark":"light")},children:i})}function b_(){const i=ut.useContext(M_);if(!i)throw new Error("useTheme must be used within ThemeProvider");return i}const je=i=>({width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",...i}),lC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),w.jsx("path",{d:"M5 9.5V21h14V9.5"}),w.jsx("path",{d:"M9.5 21v-6h5v6"})]}),uC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),w.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),w.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),w.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),cC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),w.jsx("path",{d:"M3.5 20a5.5 5.5 0 0 1 11 0"}),w.jsx("path",{d:"M16 5.2a3 3 0 0 1 0 5.6"}),w.jsx("path",{d:"M17.5 20a5.5 5.5 0 0 0-3-4.9"})]}),j_=i=>w.jsxs("svg",{...je(i),children:[w.jsx("rect",{x:"2.5",y:"5",width:"19",height:"14",rx:"2.5"}),w.jsx("path",{d:"M2.5 9.5h19"}),w.jsx("path",{d:"M6 14.5h4"})]}),hC=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M3 12h4l2.5-6 4 13 2.5-7H21"})}),dC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M4 6.5 6 8.5 9.5 4.5"}),w.jsx("path",{d:"M4 15.5 6 17.5 9.5 13.5"}),w.jsx("path",{d:"M13 7h8"}),w.jsx("path",{d:"M13 16h8"})]}),fC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"12",cy:"12",r:"9"}),w.jsx("path",{d:"M12 7v5l3.5 2"})]}),pC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"12",cy:"12",r:"9"}),w.jsx("path",{d:"M12 7v10M9.5 9.2a2.5 2 0 0 1 5 .3c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 .3"})]}),mC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M6 3h8l4 4v14H6z"}),w.jsx("path",{d:"M14 3v4h4"}),w.jsx("path",{d:"M9 12.5h6M9 16h6"})]}),gC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"12",cy:"12",r:"3"}),w.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),yC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"11",cy:"11",r:"7"}),w.jsx("path",{d:"m20 20-3.2-3.2"})]}),vC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"}),w.jsx("path",{d:"M10 20a2 2 0 0 0 4 0"})]}),_C=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M12 5v14M5 12h14"})}),F_=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"12",cy:"12",r:"4"}),w.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),U_=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5"})}),_f=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M13 2 4 14h6l-1 8 9-12h-6z"})}),z_=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M5 15c-1.5 1.5-1.8 5-1.8 5s3.5-.3 5-1.8"}),w.jsx("path",{d:"M9 13c5-8 9-9 12-9 0 3-1 7-9 12l-3-3z"}),w.jsx("circle",{cx:"14.5",cy:"9.5",r:"1.4"})]}),EC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M14 4h6v6"}),w.jsx("path",{d:"M20 4 11 13"}),w.jsx("path",{d:"M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"})]}),my=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"})}),wC=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M20 6 9 17l-5-5"})}),B_=i=>w.jsxs("svg",{...je(i),children:[w.jsx("rect",{x:"3",y:"4",width:"18",height:"7",rx:"2"}),w.jsx("rect",{x:"3",y:"13",width:"18",height:"7",rx:"2"}),w.jsx("path",{d:"M7 7.5h.01M7 16.5h.01"})]}),TC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M12 3 2 20h20z"}),w.jsx("path",{d:"M12 9v5M12 17h.01"})]}),IC=i=>w.jsx("svg",{...je(i),children:w.jsx("path",{d:"M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 8.5z"})}),Ef=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M5 3h11l3 3v15H5z"}),w.jsx("path",{d:"M8 3v5h7V3M8 21v-6h8v6"})]}),SC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("rect",{x:"2.5",y:"5",width:"19",height:"14",rx:"2.5"}),w.jsx("path",{d:"M2.5 9.5h19"})]}),AC=i=>w.jsxs("svg",{...je(i),children:[w.jsx("path",{d:"M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3"}),w.jsx("path",{d:"M10 12h9M16 8l4 4-4 4"})]}),CC=i=>w.jsx("svg",{...je({...i,strokeWidth:0,fill:"currentColor"}),children:w.jsx("path",{d:"M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"})}),gy=i=>w.jsx("svg",{...je({...i,strokeWidth:0,fill:"currentColor"}),children:w.jsx("path",{d:"m5.2 17.6 2-13c.1-.6.9-.7 1.2-.2l2 3.7-5.2 9.5zm13.6 0L16.9 5.9c-.1-.6-.9-.7-1.2-.1L6 17.6l5.1 2.9c.6.3 1.3.3 1.8 0l5.9-2.9z"})}),yy=i=>w.jsxs("svg",{...je(i),children:[w.jsx("circle",{cx:"12",cy:"12",r:"9"}),w.jsx("path",{d:"M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z"})]});function kC(){const{theme:i,setTheme:e}=b_();return w.jsxs("header",{className:"header",children:[w.jsxs("div",{className:"header-titles",children:[w.jsx("h1",{children:"Centro de Control"}),w.jsxs("div",{className:"header-sub",children:[w.jsx("b",{children:"14 sistemas"})," activos, ",w.jsx("b",{children:"2 cobros"})," pendientes y ",w.jsx("b",{children:"3 proyectos"})," en desarrollo"]})]}),w.jsxs("div",{className:"header-actions",children:[w.jsxs("label",{className:"search",children:[w.jsx(yC,{width:16,height:16}),w.jsx("input",{placeholder:"Buscar sistemas, clientes, cobros…"}),w.jsx("kbd",{children:"⌘K"})]}),w.jsxs("div",{className:"theme-toggle",role:"group","aria-label":"Modo de color",children:[w.jsx("button",{className:i==="light"?"active":"",onClick:()=>e("light"),title:"Modo claro","aria-label":"Modo claro",children:w.jsx(F_,{width:16,height:16})}),w.jsx("button",{className:i==="dark"?"active":"",onClick:()=>e("dark"),title:"Modo oscuro","aria-label":"Modo oscuro",children:w.jsx(U_,{width:16,height:16})})]}),w.jsx("button",{className:"icon-btn dot-badge",title:"Notificaciones",children:w.jsx(vC,{width:18,height:18})}),w.jsxs("button",{className:"btn btn-primary",children:[w.jsx(_C,{width:17,height:17}),"Agregar sistema"]})]})]})}const RC={"auth/invalid-email":"El correo no es válido.","auth/missing-password":"Ingresá una contraseña.","auth/invalid-credential":"Correo o contraseña incorrectos.","auth/wrong-password":"Correo o contraseña incorrectos.","auth/user-not-found":"No existe una cuenta con ese correo.","auth/email-already-in-use":"Ya existe una cuenta con ese correo.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/too-many-requests":"Demasiados intentos. Probá de nuevo más tarde."};function PC(){const{signIn:i,signUp:e}=vf(),{theme:t,toggle:s}=b_(),[o,u]=ut.useState("login"),[h,m]=ut.useState(""),[g,_]=ut.useState(""),[T,k]=ut.useState(""),[D,z]=ut.useState(""),[Y,X]=ut.useState(!1),W=async me=>{me.preventDefault(),z(""),X(!0);try{o==="login"?await i(g.trim(),T):await e(h.trim(),g.trim(),T)}catch(pe){const ye=pe instanceof sr?pe.code:"";z(RC[ye]||"No se pudo completar la operación. Intentá de nuevo.")}finally{X(!1)}};return w.jsxs("div",{className:"auth-wrap",children:[w.jsx("button",{className:"icon-btn auth-top-toggle",onClick:s,title:"Cambiar tema",children:t==="light"?w.jsx(U_,{width:17,height:17}):w.jsx(F_,{width:17,height:17})}),w.jsxs("div",{className:"auth-card",children:[w.jsxs("div",{className:"auth-brand",children:[w.jsx("div",{className:"brand-logo",children:w.jsx(_f,{width:20,height:20})}),w.jsxs("div",{children:[w.jsx("div",{className:"brand-name",style:{fontSize:16},children:"Centro de Control"}),w.jsx("div",{className:"brand-sub",children:"Panel del desarrollador"})]})]}),w.jsx("h1",{children:o==="login"?"Iniciá sesión":"Creá tu cuenta"}),w.jsx("p",{className:"sub",children:o==="login"?"Accedé a todos tus sistemas desde un solo lugar.":"Registrate para centralizar tus sistemas y cobros."}),D&&w.jsx("div",{className:"auth-error",children:D}),w.jsxs("form",{onSubmit:W,children:[o==="signup"&&w.jsxs("div",{className:"field",children:[w.jsx("label",{children:"Nombre"}),w.jsx("input",{value:h,onChange:me=>m(me.target.value),placeholder:"Tu nombre",autoComplete:"name"})]}),w.jsxs("div",{className:"field",children:[w.jsx("label",{children:"Correo electrónico"}),w.jsx("input",{type:"email",value:g,onChange:me=>_(me.target.value),placeholder:"tu@correo.com",autoComplete:"email",required:!0})]}),w.jsxs("div",{className:"field",children:[w.jsx("label",{children:"Contraseña"}),w.jsx("input",{type:"password",value:T,onChange:me=>k(me.target.value),placeholder:"••••••••",autoComplete:o==="login"?"current-password":"new-password",required:!0})]}),w.jsx("button",{className:"btn btn-primary auth-btn",disabled:Y,children:Y?"Un momento…":o==="login"?"Ingresar":"Crear cuenta"})]}),w.jsxs("div",{className:"auth-alt",children:[o==="login"?"¿No tenés cuenta? ":"¿Ya tenés cuenta? ",w.jsx("button",{onClick:()=>{u(o==="login"?"signup":"login"),z("")},children:o==="login"?"Registrate":"Iniciá sesión"})]})]})]})}const NC=[{id:"luca-park",name:"Luca Park",tagline:"Parque de juegos · tickets & accesos",glyph:"LP",accent:"#7c3aed",accent2:"#f59e0b",active:!0,infra:{app:"ok",firebase:"ok",domain:"ok",backup:"ok"},metrics:[{label:"Visitas hoy",value:"1.284",hint:"+12%"},{label:"Tickets",value:"342"}],lastDeploy:"hace 2 h",monthly:45e3,nextCharge:"12 jul",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/project/luccapark-app",cloudflare:"https://dash.cloudflare.com/",domain:"https://lucapark.app"}},{id:"next-control",name:"Next-Control",tagline:"Gestión industrial · producción",glyph:"NC",accent:"#2563eb",accent2:"#0ea5e9",active:!0,infra:{app:"ok",firebase:"ok",domain:"ok",backup:"warn"},metrics:[{label:"Órdenes activas",value:"58"},{label:"Uptime",value:"99,9%"}],lastDeploy:"hace 1 d",monthly:8e4,nextCharge:"15 jul",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/project/next-control-bb95f",cloudflare:"https://dash.cloudflare.com/",domain:"https://next-control.com"}},{id:"gami-gomitas",name:"Gami Gomitas CRM",tagline:"Ventas · clientes & rutas",glyph:"GG",accent:"#16a34a",accent2:"#84cc16",active:!0,infra:{app:"ok",firebase:"ok",domain:"ok",backup:"ok"},metrics:[{label:"Ventas mes",value:"$1,9M",hint:"+8%"},{label:"Clientes",value:"214"}],lastDeploy:"hace 5 h",monthly:6e4,nextCharge:"20 jul",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/project/crmgamigomitas-889b5",cloudflare:"https://dash.cloudflare.com/",domain:"https://gamigomitas.com"}},{id:"paraiso-escondido",name:"Paraíso Escondido",tagline:"Turismo · reservas & estadías",glyph:"PE",accent:"#0f766e",accent2:"#65a30d",active:!0,infra:{app:"ok",firebase:"ok",domain:"warn",backup:"ok"},metrics:[{label:"Reservas",value:"37"},{label:"Ocupación",value:"82%"}],lastDeploy:"hace 3 d",monthly:35e3,nextCharge:"28 jul",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/",cloudflare:"https://dash.cloudflare.com/",domain:"https://paraisoescondido.com"}},{id:"nirvana",name:"Nirvana",tagline:"Cafetería · pedidos & menú",glyph:"NV",accent:"#78350f",accent2:"#a8a29e",active:!0,infra:{app:"ok",firebase:"ok",domain:"ok",backup:"ok"},metrics:[{label:"Pedidos hoy",value:"96"},{label:"Ticket prom.",value:"$4.200"}],lastDeploy:"hace 8 h",monthly:3e4,nextCharge:"05 ago",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/project/menu-digital-57523",cloudflare:"https://dash.cloudflare.com/",domain:"https://nirvanacafe.com"}},{id:"sistema-personal",name:"Sistema personal",tagline:"Finanzas & productividad propia",glyph:"SP",accent:"#475569",accent2:"#94a3b8",active:!0,infra:{app:"ok",firebase:"ok",domain:"ok",backup:"ok"},metrics:[{label:"Tareas",value:"12"},{label:"Ahorro mes",value:"$320k"}],lastDeploy:"hace 6 h",links:{github:"https://github.com/",firebase:"https://console.firebase.google.com/project/gastosapp-47a19",cloudflare:"https://dash.cloudflare.com/",domain:"https://mi-panel.dev"}}],xC=[{id:"c1",client:"Luca Park",system:"Luca Park",amount:45e3,date:"12 jul",status:"due-soon"},{id:"c2",client:"Distr. Next",system:"Next-Control",amount:8e4,date:"15 jul",status:"pending"},{id:"c3",client:"Gami Gomitas",system:"Gami Gomitas CRM",amount:6e4,date:"20 jul",status:"pending"},{id:"c4",client:"Paraíso Escondido",system:"Paraíso Escondido",amount:35e3,date:"28 jul",status:"paid"},{id:"c5",client:"Nirvana Café",system:"Nirvana",amount:3e4,date:"05 ago",status:"paid"}],DC=[{id:"a1",kind:"deploy",system:"Luca Park",text:"Deploy completado en producción",time:"hace 2 h"},{id:"a2",kind:"backup",system:"Gami Gomitas CRM",text:"Backup automático realizado",time:"hace 4 h"},{id:"a3",kind:"payment",system:"Paraíso Escondido",text:"Pago registrado · $35.000",time:"hace 6 h"},{id:"a4",kind:"update",system:"Nirvana",text:"Sistema actualizado a v2.4",time:"hace 8 h"},{id:"a5",kind:"deploy",system:"Sistema personal",text:"Deploy completado",time:"hace 10 h"},{id:"a6",kind:"backup",system:"Next-Control",text:"Backup pendiente de revisión",time:"ayer"}];function wf(i,e){const[t,s]=ut.useState(e),[o,u]=ut.useState(!0);return ut.useEffect(()=>tC(XA(bA(iC,i)),m=>{m.empty?(s(e),u(!0)):(s(m.docs.map(g=>({id:g.id,...g.data()}))),u(!1))},()=>{s(e),u(!0)}),[i]),{data:t,usingSeed:o}}function VC(){return wf("systems",NC)}function OC(){return wf("charges",xC)}function LC(){return wf("activity",DC)}const ed=i=>"$"+i.toLocaleString("es-AR"),MC={paid:{pill:"ok",label:"Pagado",grad:"linear-gradient(135deg,#16a34a,#22c55e)"},pending:{pill:"warn",label:"Pendiente",grad:"linear-gradient(135deg,#d97706,#f59e0b)"},"due-soon":{pill:"down",label:"Vence pronto",grad:"linear-gradient(135deg,#dc2626,#f97316)"}};function bC(i){return i.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}function jC(){return w.jsxs("div",{className:"right-panel",children:[w.jsx(FC,{}),w.jsx(zC,{})]})}function FC(){const{data:i}=OC(),e=i.filter(s=>s.status==="paid").reduce((s,o)=>s+o.amount,0),t=i.filter(s=>s.status!=="paid").reduce((s,o)=>s+o.amount,0);return w.jsxs("section",{className:"panel",children:[w.jsxs("div",{className:"panel-head",children:[w.jsx("h3",{children:"Cobros del mes"}),w.jsx("span",{className:"pill warn",children:"Julio"})]}),w.jsxs("div",{className:"panel-body",children:[i.map(s=>{const o=MC[s.status];return w.jsxs("div",{className:"charge",children:[w.jsx("div",{className:"charge-ico",style:{background:o.grad},children:bC(s.client)}),w.jsxs("div",{className:"charge-main",children:[w.jsx("div",{className:"charge-client",children:s.client}),w.jsxs("div",{className:"charge-date",children:["Cobro · ",s.date]})]}),w.jsxs("div",{className:"charge-right",children:[w.jsx("div",{className:"charge-amount",children:ed(s.amount)}),w.jsx("span",{className:`pill ${o.pill}`,style:{marginTop:3},children:o.label})]})]},s.id)}),w.jsxs("div",{className:"charge-totals",children:[w.jsxs("div",{className:"total-box paid",children:[w.jsx("div",{className:"t-label",children:"Total cobrado"}),w.jsx("div",{className:"t-value",children:ed(e)})]}),w.jsxs("div",{className:"total-box pending",children:[w.jsx("div",{className:"t-label",children:"Total pendiente"}),w.jsx("div",{className:"t-value",children:ed(t)})]})]})]}),w.jsx("div",{className:"panel-foot",children:w.jsxs("button",{className:"btn btn-ghost btn-block",children:[w.jsx(EC,{width:15,height:15}),"Ver historial"]})})]})}const UC={deploy:{icon:z_,bg:"var(--brand-weak)",fg:"var(--brand-text)"},backup:{icon:Ef,bg:"var(--ok-weak)",fg:"var(--ok)"},payment:{icon:SC,bg:"var(--ok-weak)",fg:"var(--ok)"},update:{icon:wC,bg:"var(--warn-weak)",fg:"var(--warn)"}};function zC(){const{data:i}=LC();return w.jsxs("section",{className:"panel",children:[w.jsxs("div",{className:"panel-head",children:[w.jsx("h3",{children:"Actividad reciente"}),w.jsx("button",{className:"link-btn",children:"Ver todo"})]}),w.jsx("div",{className:"panel-body",children:i.map(e=>{const t=UC[e.kind],s=t.icon;return w.jsxs("div",{className:"activity",children:[w.jsx("div",{className:"activity-ico",style:{background:t.bg,color:t.fg},children:w.jsx(s,{width:15,height:15})}),w.jsxs("div",{children:[w.jsxs("div",{className:"activity-text",children:[w.jsx("b",{children:e.system})," — ",e.text]}),w.jsx("div",{className:"activity-meta",children:e.time})]})]},e.id)})})]})}const vy=[{key:"inicio",label:"Inicio",icon:lC},{key:"sistemas",label:"Sistemas",icon:uC,badge:"14"},{key:"clientes",label:"Clientes",icon:cC},{key:"cobros",label:"Cobros",icon:j_,badge:"2",alert:!0},{key:"monitoreo",label:"Monitoreo",icon:hC},{key:"tareas",label:"Tareas",icon:dC},{key:"sesiones",label:"Sesiones de trabajo",icon:fC},{key:"costos",label:"Costos",icon:pC},{key:"documentos",label:"Documentos",icon:mC},{key:"config",label:"Configuración",icon:gC}];function BC(){const[i,e]=ut.useState("inicio"),{user:t,logout:s}=vf(),o=(t==null?void 0:t.displayName)||"Gastón M.",u=(t==null?void 0:t.email)||"gaston@centrodecontrol.app",h=o.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return w.jsxs("aside",{className:"sidebar",children:[w.jsxs("div",{className:"brand",children:[w.jsx("div",{className:"brand-logo",children:w.jsx(_f,{width:20,height:20})}),w.jsxs("div",{children:[w.jsx("div",{className:"brand-name",children:"Centro de Control"}),w.jsx("div",{className:"brand-sub",children:"Panel del desarrollador"})]})]}),w.jsxs("nav",{className:"nav-section",children:[w.jsx("div",{className:"nav-label",children:"General"}),vy.slice(0,5).map(m=>w.jsx(_y,{item:m,active:i,onClick:e},m.key)),w.jsx("div",{className:"nav-label",children:"Trabajo"}),vy.slice(5).map(m=>w.jsx(_y,{item:m,active:i,onClick:e},m.key))]}),w.jsx("div",{className:"sidebar-footer",children:w.jsxs("div",{className:"user-chip",children:[w.jsx("div",{className:"avatar",children:h}),w.jsxs("div",{style:{minWidth:0},children:[w.jsx("div",{className:"user-name",children:o}),w.jsx("div",{className:"user-mail",children:u})]}),w.jsx("button",{className:"icon-btn",style:{marginLeft:"auto"},title:"Cerrar sesión",onClick:()=>s(),children:w.jsx(AC,{width:16,height:16})})]})})]})}function _y({item:i,active:e,onClick:t}){const s=i.icon;return w.jsxs("button",{className:`nav-item ${e===i.key?"active":""}`,onClick:()=>t(i.key),children:[w.jsx(s,{width:18,height:18}),i.label,i.badge&&w.jsx("span",{className:`nav-badge ${"alert"in i&&i.alert?"alert":""}`,children:i.badge})]})}const $C={brand:{bg:"var(--brand-weak)",fg:"var(--brand-text)"},ok:{bg:"var(--ok-weak)",fg:"var(--ok)"},warn:{bg:"var(--warn-weak)",fg:"var(--warn)"},down:{bg:"var(--down-weak)",fg:"var(--down)"}},HC=[40,55,48,70,62,85,78],qC=[{label:"Sistemas activos",value:"14",icon:B_,tone:"ok",foot:w.jsx(w.Fragment,{children:w.jsxs("span",{className:"pill ok",children:[w.jsx("span",{className:"led ok"})," Todos operativos"]})})},{label:"Cobros pendientes",value:"2",icon:j_,tone:"warn",foot:w.jsx(w.Fragment,{children:w.jsx("span",{className:"pill warn",children:"$140.000 por cobrar"})})},{label:"Ingresos mensuales",value:"$250k",icon:my,tone:"brand",foot:w.jsxs(w.Fragment,{children:[w.jsxs("span",{className:"trend up",children:[w.jsx(my,{width:13,height:13})," 8,4%"]}),w.jsx("span",{className:"muted",style:{fontSize:11},children:"vs. mes anterior"})]})},{label:"Último backup",value:"4 h",icon:Ef,tone:"ok",foot:w.jsx(w.Fragment,{children:w.jsxs("span",{className:"pill ok",children:[w.jsx("span",{className:"led ok"})," Automático OK"]})})},{label:"Incidencias",value:"1",icon:TC,tone:"warn",foot:w.jsx(w.Fragment,{children:w.jsx("span",{className:"pill warn",children:"1 backup a revisar"})})}];function WC(){return w.jsx("div",{className:"stats",children:qC.map(i=>{const e=i.icon,t=$C[i.tone];return w.jsxs("div",{className:"stat",children:[w.jsxs("div",{className:"stat-top",children:[w.jsx("span",{className:"stat-label",children:i.label}),w.jsx("span",{className:"stat-ico",style:{background:t.bg,color:t.fg},children:w.jsx(e,{width:17,height:17})})]}),w.jsx("div",{className:"stat-value",children:i.value}),i.label==="Ingresos mensuales"?w.jsxs("div",{className:"stat-foot",children:[w.jsx("div",{className:"spark",style:{color:"var(--brand)",flex:1},children:HC.map((s,o)=>w.jsx("span",{style:{height:`${s}%`}},o))}),i.foot]}):w.jsx("div",{className:"stat-foot",children:i.foot})]},i.label)})})}const GC=i=>i==null?"—":"$"+i.toLocaleString("es-AR"),KC={ok:"OK",warn:"Revisar",down:"Caído"};function wu({label:i,status:e,icon:t}){return w.jsxs("div",{className:"infra-item",children:[w.jsx("span",{className:"k",children:i}),w.jsxs("span",{className:"v",children:[w.jsx("span",{className:`led ${e}`}),w.jsx("span",{style:{color:"var(--text-muted)",opacity:.65},children:w.jsx(t,{width:13,height:13})}),KC[e]]})]})}function QC({sys:i}){const e={"--acc":i.accent,"--acc2":i.accent2};return w.jsxs("article",{className:"syscard",style:e,children:[w.jsx("div",{className:"syscard-band"}),w.jsxs("div",{className:"syscard-body",children:[w.jsxs("div",{className:"syscard-head",children:[w.jsx("div",{className:"sys-glyph",children:i.glyph}),w.jsxs("div",{style:{minWidth:0},children:[w.jsx("div",{className:"sys-name",children:i.name}),w.jsx("div",{className:"sys-tag",children:i.tagline})]}),w.jsxs("span",{className:"sys-active",children:[w.jsx("span",{className:"led ok"}),"Activo"]})]}),w.jsxs("div",{className:"infra",children:[w.jsx(wu,{label:"App",status:i.infra.app,icon:B_}),w.jsx(wu,{label:"Firebase",status:i.infra.firebase,icon:gy}),w.jsx(wu,{label:"Dominio",status:i.infra.domain,icon:yy}),w.jsx(wu,{label:"Backup",status:i.infra.backup,icon:Ef})]}),w.jsx("div",{className:"sys-metrics",children:i.metrics.map(t=>w.jsxs("div",{className:"sys-metric",children:[w.jsx("div",{className:"m-label",children:t.label}),w.jsxs("div",{className:"m-value",children:[t.value,t.hint&&w.jsx("span",{className:"m-hint",children:t.hint})]})]},t.label))}),w.jsxs("div",{className:"sys-meta",children:[w.jsxs("span",{children:["Último deploy ",w.jsx("b",{children:i.lastDeploy})]}),i.monthly!=null&&w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"sep",children:"·"}),w.jsxs("span",{children:["Mensualidad ",w.jsx("b",{children:GC(i.monthly)})]}),i.nextCharge&&w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"sep",children:"·"}),w.jsxs("span",{children:["Próx. cobro ",w.jsx("b",{children:i.nextCharge})]})]})]})]}),w.jsxs("div",{className:"sys-footer",children:[w.jsxs("button",{className:"btn-work",children:[w.jsx(z_,{width:16,height:16}),"Trabajar hoy"]}),w.jsxs("div",{className:"quick-links",children:[w.jsx("a",{className:"qlink",href:i.links.github,target:"_blank",rel:"noreferrer",title:"GitHub",children:w.jsx(CC,{width:17,height:17})}),w.jsx("a",{className:"qlink",href:i.links.firebase,target:"_blank",rel:"noreferrer",title:"Firebase",children:w.jsx(gy,{width:17,height:17})}),w.jsx("a",{className:"qlink",href:i.links.cloudflare,target:"_blank",rel:"noreferrer",title:"Cloudflare",children:w.jsx(IC,{width:17,height:17})}),w.jsx("a",{className:"qlink",href:i.links.domain,target:"_blank",rel:"noreferrer",title:"Dominio",children:w.jsx(yy,{width:17,height:17})})]})]})]})]})}function YC(){const{data:i,usingSeed:e}=VC();return w.jsxs("section",{children:[w.jsxs("div",{className:"section-head",children:[w.jsx("h2",{children:"Tus sistemas"}),w.jsxs("span",{className:"muted",children:[i.length," en el panel",e?" · datos de ejemplo":""]})]}),w.jsx("div",{className:"systems-grid",style:{marginTop:12},children:i.map(t=>w.jsx(QC,{sys:t},t.id))})]})}function JC(){const{user:i,loading:e}=vf();return e?w.jsx("div",{className:"auth-wrap",children:w.jsx("div",{className:"brand-logo",style:{width:48,height:48},children:w.jsx(_f,{width:26,height:26})})}):i?w.jsxs("div",{className:"app",children:[w.jsx(BC,{}),w.jsxs("div",{className:"main",children:[w.jsx(kC,{}),w.jsxs("div",{className:"content",children:[w.jsxs("div",{className:"center-col",children:[w.jsx(WC,{}),w.jsx(YC,{})]}),w.jsx(jC,{})]})]})]}):w.jsx(PC,{})}ew.createRoot(document.getElementById("root")).render(w.jsx(ut.StrictMode,{children:w.jsx(aC,{children:w.jsx(sC,{children:w.jsx(JC,{})})})}));
