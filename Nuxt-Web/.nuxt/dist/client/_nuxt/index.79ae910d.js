import{D as c,E as u,H as d}from"./entry.1a40d7cc.js";import{m,p as l,D as f,E as k,G as p,H as w,Q as v}from"./swiper-vue.1d76a0fa.js";const C=m({name:"IconArrowLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=u("icon"),r=l(()=>[n,`${n}-arrow-left`,{[`${n}-spin`]:e.spin}]),i=l(()=>{const o={};return e.size&&(o.fontSize=d(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{t("click",o)}}}}),g=["stroke-width","stroke-linecap","stroke-linejoin"],y=v("path",{d:"M20.272 11.27 7.544 23.998l12.728 12.728M43 24H8.705"},null,-1),b=[y];function h(e,t,n,r,i,a){return f(),k("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:w(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},b,14,g)}var s=c(C,[["render",h]]);const L=Object.assign(s,{install:(e,t)=>{var n;const r=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(r+s.name,s)}});export{L as I};