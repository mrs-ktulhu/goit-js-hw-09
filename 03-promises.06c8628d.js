var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const i=document.querySelector(".form");let l=null,u=null,a=null;function s(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.addEventListener("submit",(e=>{e.preventDefault(),e.target.tagName;const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;l=Number(t.value),u=Number(n.value),a=Number(r.value);for(let e=1;e<=a;e++)s(e,l).then((({position:e,delay:t})=>{o.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),l+=u;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.06c8628d.js.map
