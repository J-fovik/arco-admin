import{f as b,a4 as q,b0 as S,b1 as k,b2 as T,b3 as R,b4 as A,n as N}from"./entry.1a40d7cc.js";import{m as w,p as x,a as C,B,o as E,q as _,U as L}from"./swiper-vue.1d76a0fa.js";const g=globalThis.requestIdleCallback||(t=>{const a=Date.now(),o={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(o)},1)}),I=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g(t)}):g(t)};async function P(t,a=q()){const{path:o,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(o)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>P(t,a));a._routePreloaded.add(o);const i=e.map(n=>{var s;return(s=n.components)==null?void 0:s.default}).filter(n=>typeof n=="function");for(const n of i){const s=Promise.resolve(n()).catch(()=>{}).finally(()=>l.splice(l.indexOf(s)));l.push(s)}await Promise.all(l)}const U=(...t)=>t.find(a=>a!==void 0),D="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function V(t){const a=t.componentName||"NuxtLink",o=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?R:A;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(n,!0)}};return w({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=q(),n=x(()=>{const r=e.to||e.href||"";return o(r,i.resolve)}),s=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||S(n.value,{acceptRelative:!0})),v=C(!1),f=C(null),y=r=>{var d;f.value=e.custom?(d=r==null?void 0:r.$el)==null?void 0:d.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=b();let h,u=null;B(()=>{const p=j();O(()=>{h=g(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!s.value&&P(n.value,i).catch(()=>{})]),v.value=!0}))})})}),E(()=>{h&&I(h),u==null||u(),u=null})}return()=>{var p,m;if(!s.value){const c={ref:y,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(L("RouterLink"),c,l.default)}const r=typeof n.value=="object"?((p=i.resolve(n.value))==null?void 0:p.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:U(e.rel,t.externalRelAttribute,r?D:"")||null,u=()=>N(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:u,get route(){if(!r)return;const c=k(r);return{path:c.pathname,fullPath:c.pathname,get query(){return T(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:h,target:d,isExternal:s.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:r,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const H=V({componentName:"NuxtLink"});function j(){const t=b();if(t._observer)return t._observer;let a=null;const o=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(s=>{for(const v of s){const f=o.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),o.set(i,n),a.observe(i),()=>{o.delete(i),a.unobserve(i),o.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{H as _};
