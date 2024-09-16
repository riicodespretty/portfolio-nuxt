import{x as h,K as m,am as p,an as b,d as y,u as S,C,H as k,ao as v,ap as N}from"./CBfTdF94.js";const z=Object.freeze({left:0,top:0,width:16,height:16}),I=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),w=Object.freeze({...z,...I});Object.freeze({...w,body:"",hidden:!1});function $(e,t){let s=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)s+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+s+">"+e+"</svg>"}const q=/(-?[0-9.]*[0-9]+[0-9.]*)/g,R=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function P(e,t,s){if(t===1)return e;s=s||100;const n=e.split(q);if(n===null||!n.length)return e;const r=[];let c=n.shift(),l=R.test(c);for(;;){if(l){const o=parseFloat(c);isNaN(o)?r.push(c):r.push(Math.ceil(o*t*s)/s)}else r.push(c);if(c=n.shift(),c===void 0)return r.join("");l=!l}}function T(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function j(e){return"data:image/svg+xml,"+T(e)}function A(e){return'url("'+j(e)+'")'}function O(e){if(e.width!==e.height){const t=Math.max(e.width,e.height);return{...e,width:t,height:t,left:e.left-(t-e.width)/2,top:e.top-(t-e.height)/2}}return e}function F(e){const t={display:"inline-block",width:"1em",height:"1em"},s=e.varName;switch(e.pseudoSelector&&(t.content="''"),e.mode){case"background":s&&(t["background-image"]="var(--"+s+")"),t["background-repeat"]="no-repeat",t["background-size"]="100% 100%";break;case"mask":t["background-color"]="currentColor",s&&(t["mask-image"]=t["-webkit-mask-image"]="var(--"+s+")"),t["mask-repeat"]=t["-webkit-mask-repeat"]="no-repeat",t["mask-size"]=t["-webkit-mask-size"]="100% 100%";break}return t}function L(e,t){const s={},n=t.varName;e.width!==e.height&&(t.forceSquare?e=O(e):s.width=P("1em",e.width/e.height));const r=$(e.body.replace(/currentColor/g,t.color||"black"),{viewBox:`${e.left} ${e.top} ${e.width} ${e.height}`,width:e.width.toString(),height:e.height.toString()}),c=A(r);if(n)s["--"+n]=c;else switch(t.mode){case"background":s["background-image"]=c;break;case"mask":s["mask-image"]=s["-webkit-mask-image"]=c;break}return s}const g={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function E(e,t="expanded"){const s=[];for(let n=0;n<e.length;n++){const{selector:r,rules:c}=e[n];let o=(r instanceof Array?r.join(t==="compressed"?",":", "):r)+g.selectorStart[t],a=!0;for(const u in c)a||(o+=";"),o+=g.rule[t].replace("{key}",u)+c[u],a=!1;o+=g.selectorEnd[t],s.push(o)}return s.join(t==="compressed"?"":`
`)}function M(e,t={}){const s=t.customise?t.customise(e.body):e.body,n=t.mode||(t.color||!s.includes("currentColor")?"background":"mask");let r=t.varName;r===void 0&&n==="mask"&&(r="svg");const c={...t,mode:n,varName:r};n==="background"&&delete c.varName;const l={...t.rules,...F(c),...L({...w,...e,body:s},c)},o=t.iconSelector||".icon";return E([{selector:o,rules:l}],c.format)}async function W(e,t){if(!e)return null;const s=p(e);if(s)return s;const n=new Promise(r=>b([e],()=>r())).catch(()=>null);return t>0?await Promise.race([n,new Promise(r=>setTimeout(()=>r(),t))]):await n,p(e)}function x(e){const t=h().icon,s=(t.collections||[]).sort((n,r)=>r.length-n.length);return m(()=>{var l;const n=e(),r=n.startsWith(t.cssSelectorPrefix)?n.slice(t.cssSelectorPrefix.length):n,c=((l=t.aliases)==null?void 0:l[r])||r;if(!c.includes(":")){const o=s.find(a=>c.startsWith(a+"-"));return o?o+":"+c.slice(o.length+1):c}return c})}let d;function H(e){return e.replace(/([^\w-])/g,"\\$1")}function B(){if(d)return d;d=new Set;const e=s=>{if(s=s.replace(/^:where\((.*)\)$/,"$1").trim(),s.startsWith("."))return s},t=s=>{if(s!=null&&s.length)for(const n of s){n!=null&&n.cssRules&&t(n.cssRules);const r=n==null?void 0:n.selectorText;if(typeof r=="string"){const c=e(r);c&&d.add(c)}}};for(const s of document.styleSheets)try{const n=s.cssRules||s.rules;t(n)}catch{}return d}const D=y({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const t=S(),s=h().icon,n=m(()=>e.name?s.cssSelectorPrefix+e.name:"");function r(o){var i,f;if(!o)return;const a=p(o);if(a)return a;const u=(f=(i=t.payload)==null?void 0:i.data)==null?void 0:f[o];if(u)return v(o,u),u}const c=m(()=>"."+H(n.value));function l(o,a=!0){let u=c.value;s.cssWherePseudo&&(u=`:where(${u})`);const i=M(o,{iconSelector:u,format:"compressed",customise:e.customize});return s.cssLayer&&a?`@layer ${s.cssLayer} { ${i} }`:i}{const o=B();async function a(u){if(o.has(c.value))return;const i=document.createElement("style");i.textContent=l(u);const f=document.head.querySelector('style, link[rel="stylesheet"]');f?document.head.insertBefore(i,f):document.head.appendChild(i),o.add(c.value)}C(()=>e.name,()=>{if(o.has(c.value))return;const u=r(e.name);u?a(u):W(e.name,s.fetchTimeout).then(i=>{i&&a(i)}).catch(()=>null)},{immediate:!0})}return()=>k("span",{class:["iconify",n.value,s.class]})}}),K=y({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(e,{slots:t}){const s=S(),n=h().icon,r=x(()=>e.name),c="i-"+r.value;if(r.value){const l=s.payload.data[c];l&&v(r.value,l)}return()=>k(N,{icon:r.value,ssr:!0,class:n.class,customise:e.customize},t)}}),G=y({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(e,{slots:t}){const s=S(),n=h().icon,r=x(()=>e.name),c=m(()=>{var a;return((a=s.vueApp)==null?void 0:a.component(r.value))||((e.mode||n.mode)==="svg"?K:D)}),l=m(()=>{const a=e.size||n.size;return a?{fontSize:Number.isNaN(+a)?a:a+"px"}:null}),o=e.customize||n.customize;return()=>k(c.value,{...n.attrs,name:r.value,class:n.class,style:l.value,customize:o},t)}});export{G as default};
