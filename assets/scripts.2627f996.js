var L=Object.defineProperty;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(i,t,e)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,f=(i,t)=>{for(var e in t||(t={}))S.call(t,e)&&p(i,e,t[e]);if(k)for(var e of k(t))M.call(t,e)&&p(i,e,t[e]);return i};var E=(i,t,e)=>(p(i,typeof t!="symbol"?t+"":t,e),e);import{L as x,c as T,h as A,a as m,u as N,b as g,r as b,d,e as w,t as $,f as c,g as B}from"./vendor.eb30aee6.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}};H();class C extends x{static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedNodes().map(o=>o.nodeType===Node.TEXT_NODE?o.textContent:o.outerHTML).join("").trim();e=A(e);const s=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=s}render(){return m` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous"
      />
      <slot></slot>
      <pre><code>${N(this.source)}</code></pre>`}}E(C,"styles",T`
    :host {
      display: block;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    pre {
      background-color: var(--f-bluegray-50);
      font-family: Monaco, Ubuntu Mono, Consolas, monospace;
      font-size: 14px;
      margin: 0;
      padding: 16px;
      overflow-x: auto;
    }

    slot {
      display: none;
    }
  `);customElements.define("syntax-highlight",C);function I(i){const t=[];for(const[e,s]of Object.entries(i))s&&t.push(e);return t.join(" ")}class u extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=`
            <style>:host { display: block; }</style>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
            />
        `,this.attachShadow({mode:"open"}).appendChild(t.content)}}const h=typeof window!="undefined";class R extends x{static get properties(){return{bleed:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},info:{type:Boolean,reflect:!0},neutral:{type:Boolean,reflect:!0},bordered:{type:Boolean,reflect:!0}}}static get styles(){return T`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),!this.hasAttribute("tabindex")&&this.clickable&&this.setAttribute("tabindex",0),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}handleKeyDown(t){!this.clickable||typeof this.onclick=="function"&&(t.keyCode===13||t.keyCode===32)&&this.onclick(t)}get classes(){return I({[g.box]:!0,[g.bleed]:this.bleed,[g.clickable]:this.clickable,"bg-aqua-50":this.info,"hover:bg-aqua-100 active:bg-aqua-200":this.info&&this.clickable,"bg-bluegray-100":this.neutral,"hover:bg-bluegray-200 active:bg-bluegray-300":this.neutral&&this.clickable,"border-2 border-bluegray-300":this.bordered})}render(){return m`<link
        rel="stylesheet"
        type="text/css"
        href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
      />
      <div class="${this.classes}">
        ${this.clickable?m`<div><slot></slot></div>
              <span role="button" aria-label="Les mer"></span>`:m`<slot></slot>`}
      </div>`}}customElements.get("f-box")||customElements.define("f-box",R);class P extends u{static get observedAttributes(){return["selected"]}attributeChangedCallback(t,e,s){switch(t){case"selected":this[t]=s!="false";break;default:this[t]=s}this.render()}connectedCallback(){this.content=[...this.innerHTML].join(""),this.as=this.getAttribute("as")||"div",this.selected=this.getAttribute("selected")?this.getAttribute("selected")!="false":void 0,this.render(),this.innerHTML=""}render(){const t=this.shadowRoot.querySelector("[data-root]");t&&t.remove(),this.shadowRoot.innerHTML+=`
      <${this.as} data-root tabindex="0" class="${b(this.getAttribute("class"),{"outline-none focus:ring ring-offset-1 ring-aqua-200":!0,[d.card]:!0,[d.cardSelected]:this.selected,[d.cardOutline]:!0,[this.selected?d.cardOutlineSelected:d.cardOutlineUnselected]:!0,[this.selected?"focus:border-blue-500":""]:!0})}">
    
      <style>a::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0;  }</style>
  
      ${this.onclick?`
          <button class="sr-only" aria-pressed="${this.selected}" tabIndex="-1">
            Velg
          </button>
        `:""}
  
      ${!this.onclick&&this.selected?`
        <span role="checkbox" aria-checked="true" aria-disabled="true" />
        `:""}
  
        ${this.content}
      </${this.as}>
      `,this.handleSetup()}handleSetup(){const t=this.shadowRoot.querySelector(this.as);if(this.onclick){const e=s=>{if(s.key==="Enter"||s.key===" "){s.preventDefault(),document.querySelector(this.as).setAttribute("selected",!this.selected),this.onclick&&this.onclick();return}};t.addEventListener("keydown",e)}}}customElements.get("f-card")||customElements.define("f-card",P);class j extends u{connectedCallback(){const t=Array.from(this.children).map(e=>e.outerHTML).join('<span class="select-none" aria-hidden="true">/</span>');this.shadowRoot.innerHTML+=`<nav
            aria-label="Her er du"
            class="flex space-x-8"
        >
            <h2 class="sr-only">Her er du</h2>
            ${t}
        </nav>`,this.innerHTML=""}}customElements.get("f-breadcrumbs")||customElements.define("f-breadcrumbs",j);function q(){if(!!h&&(window.fabricToasts||(window.fabricToasts={toasts:[]}),document&&!document.querySelector("f-toast-container"))){class i extends u{connectedCallback(){const s=document.createElement("aside");s.className=$.toasterContainer;const o=document.createElement("div");o.id="f-toast-container-list",o.className=`${$.toaster} relative`,s.appendChild(o),this.shadowRoot.appendChild(s)}}customElements.define("f-toast-container",i);const t=document.createElement("f-toast-container");document.querySelector("body").appendChild(t)}}function O(i,t){if(!h)return;const e=window.fabricToasts,s=document.querySelector("f-toast-container"),o=s.shadowRoot.getElementById("f-toast-container-list");if(!s&&customElements.get("f-toast")&&e)throw new Error("No toast container found. Make sure to call initToasts() first.");const n=Date.now().toString(36)+Math.random().toString(36).slice(2,5),a=f({id:n,programmatic:!0,text:i,duration:2400,type:"success"},t),r=document.createElement("f-toast");return r.className="w-full",Object.entries(a).forEach(l=>{r.setAttribute(l[0],l[1])}),o.appendChild(r),e.toasts=[...e.toasts,a],a}function y(i){if(!h)return;const t=window.fabricToasts,e=document.querySelector("f-toast-container");if(!e&&customElements.get("f-toast")&&t)throw new Error("No toast container found. Make sure to call initToasts() first.");t.toasts=t.toasts.filter(o=>o.id!==i);const s=e.shadowRoot.getElementById(i);return s?(w(s),setTimeout(()=>{s.remove()},1e3),!0):!1}function F(i,t){if(!h)return;const e=window.fabricToasts,s=document.querySelector("f-toast-container");if(!s&&customElements.get("f-toast")&&e)throw new Error("No toast container found. Make sure to call initToasts() first.");const o=e.toasts.find(r=>r.id===i),n=f(f({},o),t),a=s.shadowRoot.getElementById(i);return Object.entries(n).forEach(r=>{a.setAttribute(r[0],r[1])}),e.toasts=e.toasts.map(r=>r.id===n.id?n:r),n}const v=["success","warning","error","info"];class D extends u{static get observedAttributes(){return["type","text","duration","canclose","onclose"]}attributeChangedCallback(t,e,s){switch(t){case"onclose":this[t]=new Function("return "+s)();break;case"canclose":this[t]=s!="false";break;default:this[t]=s}this.id=this.id||Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.render(!0)}connectedCallback(){if(this.isProgrammatic=!!this.getAttribute("programmatic"),this.isProgrammatic&&!v.includes(this.type))throw new Error(`Invalid toast type. Allowed types: ${v.reduce((t,e,s)=>[t,e].join(s===v.length-1?" or ":", "))}`);this.render()}render(t){const e=this.shadowRoot.getElementById(`toast-${this.id}-wrapper`);e&&e.remove();const s=this.isProgrammatic,o=this.type==="success",n=this.type==="warning",a=this.type==="error",r=this.type==="info",l=o?"Vellykket":a?"Feil":n?"Varsel":"Info";this.shadowRoot.innerHTML+=`
            <section
                ${this.id?`id="toast-${this.id}-wrapper"`:""}
                ${s&&!t?"style='height: 0;'":""}
                class="${c.toastWrapper}"
                aria-label="${l}"
            >
                <div
                    class="${b({[c.toast]:!0,[c.toastPositive]:o,[c.toastWarning]:n,[c.toastNegative]:a,[c.toastNeutral]:r})}"
                >
                    <div
                        class="${b({[c.toastIcon]:!0,[c.toastIconPositive]:o,[c.toastIconWarning]:n,[c.toastIconNegative]:a,[c.toastIconNeutral]:r})}"
                    >
                        ${o?`
                        <svg
                            role="img"
                            aria-label="${l}"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M5.5 9l2 1.5L11 6"
                            />
                        </svg>`:`
                        <svg
                            role="img"
                            aria-label="${l}"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                            class="${b("transition-transform duration-200",{"transform-rotate-180":r})}"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-miterlimit="10"
                                stroke-width="1.5"
                                d="M8 9V4"
                            />
                            <circle
                                cx="8"
                                cy="11.8"
                                r=".8"
                                fill="currentColor"
                            />
                        </svg>`}
                    </div>
                    <div
                        role="${a||n?"alert":"status"}"
                        class="${c.toastContent}"
                    >
                        <p ${this.id?`id="toast-${this.id}-text"`:""}>${this.text}</p>
                    </div>
                    ${this.canclose?`
                            <button
                                ${this.id?`id="toast-${this.id}-button"`:""}
                                class="${c.toastClose}"
                            >
                                <svg
                                    role="img"
                                    aria-label="Lukk"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>`:""}
                </div>
            </section>
        `,document.readyState==="complete"||document.readyState==="loaded"||t?this.handleSetup(!!t):document.addEventListener("DOMContentLoaded",this.handleSetup(!!t))}handleSetup(t){const e=this.shadowRoot.getElementById(`toast-${this.id}-wrapper`),s=this.shadowRoot.getElementById(`toast-${this.id}-button`);if(s){const o=()=>{!this.canclose||(this.onclose&&this.onclose(),this.isProgrammatic&&(e&&w(e),setTimeout(()=>{y(this.id)},1e3)))};s.addEventListener("click",o)}if(this.isProgrammatic&&e&&!t&&B(e),(this.duration||this.isProgrammatic)&&e){if(clearTimeout(this.c),clearTimeout(this.r),this.duration==="0")return;this.c=setTimeout(()=>{w(e)},Number(this.duration)),this.r=setTimeout(()=>{y(this.id)},Number(this.duration)+1e3)}}}q();customElements.get("f-toast")||customElements.define("f-toast",D);class K extends u{async connectedCallback(){const t=Number(this.getAttribute("interval"))||3e5;await this.fetchMessage(),setInterval(async()=>await this.fetchMessage(),t)}async fetchMessage(){if(!h)return;const t=this.shadowRoot.querySelector("#broadcast-toast"),s=`https://${Boolean(this.getAttribute("dev"))?"dev":"www"}.finn.no/broadcasts?path=${this.getAttribute("url")||window.location.href}`,o=await(await fetch(s)).json();o.length?(this.message=o[0].message,t?t.setAttribute("text",this.message):this.shadowRoot.innerHTML+=`
          <div id="broadcast">
            <f-toast id="broadcast-toast" type="warning" text="${this.message}"></f-toast>
          </div>
        `):(this.message="",t&&t.remove())}}customElements.get("f-broadcast")||customElements.define("f-broadcast",K);window.toast=O;window.updateToast=F;window.removeToast=y;
