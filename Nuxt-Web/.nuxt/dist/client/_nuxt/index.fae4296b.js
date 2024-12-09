import{D as c,E as u,H as k}from"./entry.1a40d7cc.js";import{m as d,p as l,D as m,E as f,G as p,H as C,Q as h}from"./swiper-vue.1d76a0fa.js";const v=d({name:"IconCheck",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=u("icon"),s=l(()=>[n,`${n}-check`,{[`${n}-spin`]:e.spin}]),r=l(()=>{const o={};return e.size&&(o.fontSize=k(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:s,innerStyle:r,onClick:o=>{t("click",o)}}}}),g=["stroke-width","stroke-linecap","stroke-linejoin"],y=h("path",{d:"M41.678 11.05 19.05 33.678 6.322 20.95"},null,-1),b=[y];function z(e,t,n,s,r,a){return m(),f("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},b,14,g)}var i=c(v,[["render",z]]);const S=Object.assign(i,{install:(e,t)=>{var n;const s=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(s+i.name,i)}});export{S as I};
