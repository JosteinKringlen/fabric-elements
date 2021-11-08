/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const de=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,W=(n,e,t=null)=>{for(;e!==t;){const s=e.nextSibling;n.removeChild(e),e=s}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=`{{lit-${String(Math.random()).slice(2)}}}`,ue=`<!--${T}-->`,he=new RegExp(`${T}|${ue}`),R="$lit$";class pe{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let l=0,o=-1,c=0;const{strings:d,values:{length:u}}=e;for(;c<u;){const a=r.nextNode();if(a===null){r.currentNode=i.pop();continue}if(o++,a.nodeType===1){if(a.hasAttributes()){const h=a.attributes,{length:p}=h;let f=0;for(let m=0;m<p;m++)fe(h[m].name,R)&&f++;for(;f-- >0;){const m=d[c],g=H.exec(m)[2],S=g.toLowerCase()+R,w=a.getAttribute(S);a.removeAttribute(S);const y=w.split(he);this.parts.push({type:"attribute",index:o,name:g,strings:y}),c+=y.length-1}}a.tagName==="TEMPLATE"&&(i.push(a),r.currentNode=a.content)}else if(a.nodeType===3){const h=a.data;if(h.indexOf(T)>=0){const p=a.parentNode,f=h.split(he),m=f.length-1;for(let g=0;g<m;g++){let S,w=f[g];if(w==="")S=C();else{const y=H.exec(w);y!==null&&fe(y[2],R)&&(w=w.slice(0,y.index)+y[1]+y[2].slice(0,-R.length)+y[3]),S=document.createTextNode(w)}p.insertBefore(S,a),this.parts.push({type:"node",index:++o})}f[m]===""?(p.insertBefore(C(),a),s.push(a)):a.data=f[m],c+=m}}else if(a.nodeType===8)if(a.data===T){const h=a.parentNode;(a.previousSibling===null||o===l)&&(o++,h.insertBefore(C(),a)),l=o,this.parts.push({type:"node",index:o}),a.nextSibling===null?a.data="":(s.push(a),o--),c++}else{let h=-1;for(;(h=a.data.indexOf(T,h+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(const a of s)a.parentNode.removeChild(a)}}const fe=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},me=n=>n.index!==-1,C=()=>document.createComment(""),H=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=133;function ge(n,e){const{element:{content:t},parts:s}=n,i=document.createTreeWalker(t,$,null,!1);let r=I(s),l=s[r],o=-1,c=0;const d=[];let u=null;for(;i.nextNode();){o++;const a=i.currentNode;for(a.previousSibling===u&&(u=null),e.has(a)&&(d.push(a),u===null&&(u=a)),u!==null&&c++;l!==void 0&&l.index===o;)l.index=u!==null?-1:l.index-c,r=I(s,r),l=s[r]}d.forEach(a=>a.parentNode.removeChild(a))}const je=n=>{let e=n.nodeType===11?0:1;const t=document.createTreeWalker(n,$,null,!1);for(;t.nextNode();)e++;return e},I=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){const s=n[t];if(me(s))return t}return-1};function qe(n,e,t=null){const{element:{content:s},parts:i}=n;if(t==null){s.appendChild(e);return}const r=document.createTreeWalker(s,$,null,!1);let l=I(i),o=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===t&&(o=je(e),t.parentNode.insertBefore(e,t));l!==-1&&i[l].index===c;){if(o>0){for(;l!==-1;)i[l].index+=o,l=I(i,l);return}l=I(i,l)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ye=new WeakMap,We=n=>(...e)=>{const t=n(...e);return ye.set(t,!0),t},O=n=>typeof n=="function"&&ye.has(n);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b={},_e={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class B{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=de?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r=0,l=0,o,c=i.nextNode();for(;r<s.length;){if(o=s[r],!me(o)){this.__parts.push(void 0),r++;continue}for(;l<o.index;)l++,c.nodeName==="TEMPLATE"&&(t.push(c),i.currentNode=c.content),(c=i.nextNode())===null&&(i.currentNode=t.pop(),c=i.nextNode());if(o.type==="node"){const d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}return de&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Se=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),He=` ${T} `;class we{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const r=this.strings[i],l=r.lastIndexOf("<!--");s=(l>-1||s)&&r.indexOf("-->",l+1)===-1;const o=H.exec(r);o===null?t+=r+(s?He:ue):t+=r.substr(0,o.index)+o[1]+o[2]+R+o[3]+T}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Se!==void 0&&(t=Se.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const F=n=>n===null||!(typeof n=="object"||typeof n=="function"),z=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class be{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new xe(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=s[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!z(r))return r}let i="";for(let r=0;r<t;r++){i+=e[r];const l=s[r];if(l!==void 0){const o=l.value;if(F(o)||!z(o))i+=typeof o=="string"?o:String(o);else for(const c of o)i+=typeof c=="string"?c:String(c)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class xe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==b&&(!F(e)||e!==this.value)&&(this.value=e,O(e)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class U{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}insertAfterPart(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const e=this.__pendingValue;e!==b&&(F(e)?e!==this.value&&this.__commitText(e):e instanceof we?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):z(e)?this.__commitIterable(e):e===_e?(this.value=_e,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof B&&this.value.template===t)this.value.update(e.values);else{const s=new B(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,i;for(const r of e)i=t[s],i===void 0&&(i=new U(this.options),t.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){W(this.startNode.parentNode,e.nextSibling,this.endNode)}}class $e{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=b}}class Be extends be{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new ze(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ze extends xe{}let Te=!1;(()=>{try{const n={get capture(){return Te=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();class De{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;O(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=b,r(this)}if(this.__pendingValue===b)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Je(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=b}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Je=n=>n&&(Te?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Ke(n){let e=M.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const s=n.strings.join(T);return t=e.keyString.get(s),t===void 0&&(t=new pe(n,n.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(n.strings,t),t}const M=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const k=new WeakMap,Ge=(n,e,t)=>{let s=k.get(e);s===void 0&&(W(e,e.firstChild),k.set(e,s=new U(Object.assign({templateFactory:Ke},t))),s.appendInto(e)),s.setValue(n),s.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ye{handleAttributeExpressions(e,t,s,i){const r=t[0];return r==="."?new Be(e,t.slice(1),s).parts:r==="@"?[new De(e,t.slice(1),i.eventContext)]:r==="?"?[new $e(e,t.slice(1),s)]:new be(e,t,s).parts}handleTextExpression(e){return new U(e)}}const Qe=new Ye;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const ct=(n,...e)=>new we(n,e,"html",Qe);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ve=(n,e)=>`${n}--${e}`;let j=!0;typeof window.ShadyCSS=="undefined"?j=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const Xe=n=>e=>{const t=ve(e.type,n);let s=M.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},M.set(t,s));let i=s.stringsArray.get(e.strings);if(i!==void 0)return i;const r=e.strings.join(T);if(i=s.keyString.get(r),i===void 0){const l=e.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(l,n),i=new pe(e,l),s.keyString.set(r,i)}return s.stringsArray.set(e.strings,i),i},Ze=["html","svg"],et=n=>{Ze.forEach(e=>{const t=M.get(ve(e,n));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:i}}=s,r=new Set;Array.from(i.querySelectorAll("style")).forEach(l=>{r.add(l)}),ge(s,r)})})},Pe=new Set,tt=(n,e,t)=>{Pe.add(n);const s=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(r===0){window.ShadyCSS.prepareTemplateStyles(s,n);return}const l=document.createElement("style");for(let d=0;d<r;d++){const u=i[d];u.parentNode.removeChild(u),l.textContent+=u.textContent}et(n);const o=s.content;t?qe(t,l,o.firstChild):o.insertBefore(l,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,n);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(l,o.firstChild);const d=new Set;d.add(l),ge(t,d)}},st=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,i=k.has(e),r=j&&e.nodeType===11&&!!e.host,l=r&&!Pe.has(s),o=l?document.createDocumentFragment():e;if(Ge(n,o,Object.assign({templateFactory:Xe(s)},t)),l){const c=k.get(o);k.delete(o);const d=c.value instanceof B?c.value.template:void 0;tt(s,o,d),W(e,e.firstChild),e.appendChild(o),k.set(e,c)}!i&&r&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Ce;window.JSCompiler_renameProperty=(n,e)=>n;const D={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},Ne=(n,e)=>e!==n&&(e===e||n===n),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Ne},K=1,G=1<<2,Y=1<<3,Q=1<<4,X="finalized";class Ee extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);i!==void 0&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(X)||e.finalize(),this[X]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=Ne){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||D,r=typeof i=="function"?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||D.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=J){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(r!==void 0){const l=i._propertyValueToAttribute(t,s);if(l===void 0)return;this._updateState=this._updateState|Y,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._updateState=this._updateState&~Y}}_attributeToProperty(e,t){if(this._updateState&Y)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(i!==void 0){const r=s.getPropertyOptions(i);this._updateState=this._updateState|Q,this[i]=s._propertyValueFromAttribute(t,r),this._updateState=this._updateState&~Q}}requestUpdateInternal(e,t,s){let i=!0;if(e!==void 0){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&Q)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|G;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ce=X;Ee[Ce]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=n=>new te(String(n),ee),it=n=>{if(n instanceof te)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},dt=(n,...e)=>{const t=e.reduce((s,i,r)=>s+it(i)+n[r+1],n[0]);return new te(t,ee)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Ae={};class se extends Ee{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(r,l)=>r.reduceRight((o,c)=>Array.isArray(c)?t(c,o):(o.add(c),o),l),s=t(e,new Set),i=[];s.forEach(r=>i.unshift(r)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Z){const s=Array.prototype.slice.call(t.cssRules).reduce((i,r)=>i+r.cssText,"");return nt(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):Z?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Ae&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const i=document.createElement("style");i.textContent=s.cssText,this.renderRoot.appendChild(i)}))}render(){return Ae}}se.finalized=!0;se.render=st;se.shadowRootOptions={mode:"open"};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ke=new WeakMap,ut=We(n=>e=>{if(!(e instanceof U))throw new Error("unsafeHTML can only be used in text bindings");const t=ke.get(e);if(t!==void 0&&F(n)&&n===t.value&&e.value===t.fragment)return;const s=document.createElement("template");s.innerHTML=n;const i=document.importNode(s.content,!0);e.setValue(i),ke.set(e,{value:n,fragment:i})});function rt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ne={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});class t{constructor(u,a){this.stream=u,this.pos=a}get value(){return this.stream[this.pos]}}class s{constructor(u,a,h){this.stream=u,this.start=a,this.end=h}get value(){return this.stream.slice(this.start,this.end)}get whitespace(){let u=this.start-1;for(;u>=0&&/\s/.test(this.stream[u]);u--);return new s(this.stream,u+1,this.start)}}function i(d,u,a=/\S/g){if(!a.global)throw new Error("Regexp must be global");a.lastIndex=u;const h=a.exec(d);if(!!h)return new t(d,h.index)}function r(d,u){let a=i(d,u);if(!a)return;const h=a.pos;a=i(d,h+1,/[\s<]|>/g);const p=a?a.pos+Number(a.value==">"):d.length;return new s(d,h,p)}const l=["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","--"];function o(d){let u=d.replace(/^<\/?|>$/g,"").toLowerCase();(u.startsWith("!--")||u.endsWith("--"))&&(u="--");const a=/</.test(d),h=/>/.test(d),p=/<([^/]|$)/.test(d),f=/<\//.test(d)||p&&l.includes(u);return{isTagStart:a,isTagEnd:h,isStartTag:p,isEndTag:f,tagName:u}}function c(d,u="  ",a=80){const h=[];let p=!1,f=!1,m=!1,g=!1,S="",w=0,y={},_,L=0;for(;_=r(d,L);){let x=_.value,ie=_.whitespace.value,re="",{isTagStart:A,isTagEnd:v,isStartTag:N,isEndTag:E,tagName:P}=o(x);if(!g){if(A&&!P){if(L=_.end,_=r(d,L),!_)break;x+=_.value,{isTagStart:A,isTagEnd:v,isStartTag:N,isEndTag:E,tagName:P}=o(x)}if(!A&&(p||f)){const V=/[^=]"[^>]/g.exec(x);V&&_.end!=_.start+V.index+2&&(_.end=_.start+V.index+2,x=_.value,{isTagStart:A,isTagEnd:v,isStartTag:N,isEndTag:E,tagName:P}=o(x),re=u)}}!g&&N&&(S=P);const oe=(E&&P!="--"||v&&P=="--")&&P==S;g&&!oe&&(A=v=N=E=!1),N&&(p=!0),E&&(f=!0),E&&!N&&--w;const Oe=p&&v&&["script","style"].includes(S)||N&&S=="--",ae=p||f,le=ie||y.pendingWhitespace,Ue=ae&&(/^[=">]([^=]|$)/.test(x)||/(^|=)"$/.test(y.tokenValue));if(g||m)h.push(ie);else if(le&&!Ue){const q=(le.match(/\n/g)||[]).length,V=Math.max(0,h.lastIndexOf(`
`)),Me=h.slice(V).reduce((Le,Fe)=>Le+Fe.length,0),ce=u.repeat(w+Number(ae&&!A));Me+x.length>a?h.push(`
`,ce):q?h.push(...Array(q).fill(`
`),ce):h.push(" ")}h.push(x),y={pendingWhitespace:re,tokenValue:x},Oe&&(g=!0),oe&&(g=!1),p&&v&&S=="pre"&&(m=!0),E&&P=="pre"&&(m=!1),p&&v&&!f&&++w,v&&(p=f=!1),L=_.end}return d[d.length-1]==`
`&&h.push(`
`),h.join("")}e.default=c,n.exports=Object.assign(e.default,e)})(ne,ne.exports);var ht=rt(ne.exports);const pt={box:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8"},ft={card:"f-card cursor-pointer rounded-8 overflow-hidden relative transition-all outline-none",cardSelected:"bg-blue-50",cardOutline:"f-card-outline absolute rounded-8 inset-0 transition-all border-2",cardOutlineUnselected:"border-transparent",cardOutlineSelected:"border-blue-600"},mt={toasterContainer:"fixed fixed-ios-fix bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",toaster:"f-toaster grid f-grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none"},gt={toastWrapper:"overflow-hidden w-full",toast:"toast flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all",toastPositive:"bg-green-50 border-green-200 text-green-800",toastWarning:"bg-yellow-50 border-yellow-200 text-yellow-800",toastNegative:"bg-red-50 border-red-200 text-red-800",toastNeutral:"bg-gray-50 border-gray-200 text-gray-800",toastIcon:"flex-shrink-0 rounded-full w-16 h-16 m-8",toastIconPositive:"bg-green-300",toastIconWarning:"bg-yellow-300",toastIconNegative:"bg-red-300",toastIconNeutral:"bg-gray-300",toastIconLoading:"animate-bounce",toastContent:"self-center mr-8 py-4 last-child:mb-0",toastClose:"ml-auto p-8"};var ot=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];return n.reduce(function(t,s){return t.concat(typeof s=="string"?s:Array.isArray(s)?ot.apply(void 0,s):typeof s=="object"&&s?Object.keys(s).map(function(i){return s[i]?i:""}):"")},[]).join(" ")};const Ve=typeof window!="undefined",Re=n=>{n.style.transition=null,n.style.backfaceVisibility=null,n.style.overflow=null},Ie=n=>{n.style.transition="height var(--f-expansion-duration, 0.3s)",n.style.backfaceVisibility="hidden",n.style.overflow="hidden"},at=(n,e)=>()=>{n.style.height="auto",n.style.overflow=null,e&&e()},lt=n=>()=>{n&&n()},yt=(n,e)=>{const t=at(n,e);Re(n),n.style.height="auto";let s=n.scrollHeight;Ve&&requestAnimationFrame(()=>{n.addEventListener("transitionend",t,{once:!0}),n.style.height="0px",n.style.transitionTimingFunction="ease-out",Ie(n),requestAnimationFrame(()=>n.style.height=s+"px")})},_t=(n,e)=>{const t=lt(e);Re(n);let s=n.scrollHeight;Ve&&requestAnimationFrame(()=>{n.addEventListener("transitionend",t,{once:!0}),n.style.height=s+"px",n.style.transitionTimingFunction="ease-in",Ie(n),requestAnimationFrame(()=>n.style.height="0px")})};export{se as L,ct as a,pt as b,dt as c,ft as d,_t as e,gt as f,yt as g,ht as h,ot as r,mt as t,ut as u};
