(function(a,_){typeof exports=="object"&&typeof module!="undefined"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(a=typeof globalThis!="undefined"?globalThis:a||self,_(a.container={}))})(this,function(a){"use strict";function _(t){if(u(t)){const n={};for(let e=0;e<t.length;e++){const i=t[e],s=f(i)?D(i):_(i);if(s)for(const o in s)n[o]=s[o]}return n}else{if(f(t))return t;if(m(t))return t}}const x=/;(?![^(]*\))/g,B=/:(.+)/;function D(t){const n={};return t.split(x).forEach(e=>{if(e){const i=e.split(B);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function d(t){let n="";if(f(t))n=t;else if(u(t))for(let e=0;e<t.length;e++){const i=d(t[e]);i&&(n+=i+" ")}else if(m(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const P=t=>f(t)?t:t==null?"":u(t)||m(t)&&(t.toString===j||!p(t.toString))?JSON.stringify(t,h,2):String(t),h=(t,n)=>n&&n.__v_isRef?h(t,n.value):Y(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[i,s])=>(e[`${i} =>`]=s,e),{})}:w(n)?{[`Set(${n.size})`]:[...n.values()]}:m(n)&&!u(n)&&!J(n)?String(n):n,$=[],K=/^on[^a-z]/,L=t=>K.test(t),R=Object.assign,u=Array.isArray,Y=t=>C(t)==="[object Map]",w=t=>C(t)==="[object Set]",p=t=>typeof t=="function",f=t=>typeof t=="string",m=t=>t!==null&&typeof t=="object",j=Object.prototype.toString,C=t=>j.call(t),J=t=>C(t)==="[object Object]";function N(t){return O(t)?N(t.__v_raw):!!(t&&t.__v_isReactive)}function O(t){return!!(t&&t.__v_isReadonly)}function z(t){return N(t)||O(t)}function U(t){return!!(t&&t.__v_isRef===!0)}let y=null,q=null;const G=t=>t.__isSuspense,H=t=>t.__isTeleport,Q=Symbol(),I=Symbol(void 0),W=Symbol(void 0),X=Symbol(void 0),S=[];let g=null;function Z(t=!1){S.push(g=t?null:[])}function v(){S.pop(),g=S[S.length-1]||null}function tt(t){return t.dynamicChildren=g||$,v(),g&&g.push(t),t}function nt(t,n,e,i,s,o){return tt(V(t,n,e,i,s,o,!0))}function et(t){return t?t.__v_isVNode===!0:!1}const T="__vInternal",M=({key:t})=>t!=null?t:null,b=({ref:t,ref_key:n,ref_for:e})=>t!=null?f(t)||U(t)||p(t)?{i:y,r:t,k:n,f:!!e}:t:null;function V(t,n=null,e=null,i=0,s=null,o=t===I?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&M(n),ref:n&&b(n),scopeId:q,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(F(c,e),o&128&&t.normalize(c)):e&&(c.shapeFlag|=f(e)?8:16),!r&&g&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&g.push(c),c}const st=it;function it(t,n=null,e=null,i=0,s=null,o=!1){if((!t||t===Q)&&(t=X),et(t)){const l=k(t,n,!0);return e&&F(l,e),l}if(rt(t)&&(t=t.__vccOpts),n){n=ot(n);let{class:l,style:c}=n;l&&!f(l)&&(n.class=d(l)),m(c)&&(z(c)&&!u(c)&&(c=R({},c)),n.style=_(c))}const r=f(t)?1:G(t)?128:H(t)?64:m(t)?4:p(t)?2:0;return V(t,n,e,i,s,r,o,!0)}function ot(t){return t?z(t)||T in t?R({},t):t:null}function k(t,n,e=!1){const{props:i,ref:s,patchFlag:o,children:r}=t,l=n?lt(i||{},n):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&M(l),ref:n&&n.ref?e&&s?u(s)?s.concat(b(n)):[s,b(n)]:b(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==I?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&k(t.ssContent),ssFallback:t.ssFallback&&k(t.ssFallback),el:t.el,anchor:t.anchor}}function ct(t=" ",n=0){return st(W,null,t,n)}function F(t,n){let e=0;const{shapeFlag:i}=t;if(n==null)n=null;else if(u(n))e=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),F(t,s()),s._c&&(s._d=!0));return}else{e=32;const s=n._;!s&&!(T in n)?n._ctx=y:s===3&&y&&(y.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else p(n)?(n={default:n,_ctx:y},e=32):(n=String(n),i&64?(e=16,n=[ct(n)]):e=8);t.children=n,t.shapeFlag|=e}function lt(...t){const n={};for(let e=0;e<t.length;e++){const i=t[e];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=d([n.class,i.class]));else if(s==="style")n.style=_([n.style,i.style]);else if(L(s)){const o=n[s],r=i[s];r&&o!==r&&!(u(o)&&o.includes(r))&&(n[s]=o?[].concat(o,r):r)}else s!==""&&(n[s]=i[s])}return n}function rt(t){return p(t)&&"__vccOpts"in t}const A={props:{msg:{type:String,default:"hello"}},setup(t){return(n,e)=>(Z(),nt("div",null,P(t.msg),1))}},E=t=>{t.component("Container",A)};var ut={version:"test",install:E,Container:A};a.default=ut,a.install=E,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});