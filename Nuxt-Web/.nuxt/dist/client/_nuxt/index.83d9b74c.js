import{U as y,E as O,aB as ce,aD as ue,aC as de,H as ge,aF as fe,k as ve,a9 as me,aG as q,aI as pe,aK as he,w as S,D as Pe,V as $e,W as Ce}from"./entry.1a40d7cc.js";import{P as ye}from"./index.a57cdc53.js";import{a as w,p as m,m as V,C as Se,i as be,B as Le,L as l,A as b,N as ze,a3 as z,D as h,E as P,G as $,F as j,I as L,_ as J,R as Q}from"./swiper-vue.1d76a0fa.js";const Ie=(e,{emit:r})=>{var t,g;const a=w(y(e.paginationProps)&&(t=e.paginationProps.defaultCurrent)!=null?t:1),u=w(y(e.paginationProps)&&(g=e.paginationProps.defaultPageSize)!=null?g:10),p=m(()=>{var d;return y(e.paginationProps)&&(d=e.paginationProps.current)!=null?d:a.value}),v=m(()=>{var d;return y(e.paginationProps)&&(d=e.paginationProps.pageSize)!=null?d:u.value});return{current:p,pageSize:v,handlePageChange:d=>{a.value=d,r("pageChange",d)},handlePageSizeChange:d=>{u.value=d,r("pageSizeChange",d)}}};function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!z(e)}var H=V({name:"List",props:{data:{type:Array},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},split:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},paginationProps:{type:Object},gridProps:{type:Object},maxHeight:{type:[String,Number],default:0},bottomOffset:{type:Number,default:0},virtualListProps:{type:Object},scrollbar:{type:[Object,Boolean],default:!0}},emits:{scroll:()=>!0,reachBottom:()=>!0,pageChange:e=>!0,pageSizeChange:e=>!0},setup(e,{emit:r,slots:t}){const{scrollbar:g}=Se(e),a=O("list"),u=be(ce,void 0),{componentRef:p,elementRef:v}=ue("containerRef"),I=m(()=>e.virtualListProps),{displayScrollbar:N,scrollbarProps:d}=de(g);let E=0;const M=n=>{const{scrollTop:i,scrollHeight:s,offsetHeight:c}=n.target,o=Math.floor(s-(i+c));i>E&&o<=e.bottomOffset&&r("reachBottom"),r("scroll"),E=i};Le(()=>{if(v.value){const{scrollTop:n,scrollHeight:i,offsetHeight:s}=v.value;i<=n+s&&r("reachBottom")}});const{current:G,pageSize:C,handlePageChange:Z,handlePageSizeChange:ee}=Ie(e,{emit:r}),_=n=>{if(!e.paginationProps)return n;if(e.paginationProps&&n.length>C.value){const i=(G.value-1)*C.value;return n.slice(i,i+C.value)}return n},te=n=>{let i;if(!e.gridProps)return null;const s=_(n);if(e.gridProps.span){const c=[],o=24/e.gridProps.span;for(let f=0;f<s.length;f+=o){let x;const se=f+o,K=Math.floor(f/o);c.push(l(S.Row,{key:K,class:`${a}-row`,gutter:e.gridProps.gutter},X(x=s.slice(f,se).map((B,U)=>{var W;return l(S.Col,{key:`${K}-${U}`,class:`${a}-col`,span:(W=e.gridProps)==null?void 0:W.span},{default:()=>{var Y;return[z(B)?B:(Y=t.item)==null?void 0:Y.call(t,{item:B,index:U})]}})}))?x:{default:()=>[x]}))}return c}return l(S.Row,{class:`${a}-row`,gutter:e.gridProps.gutter},X(i=s.map((c,o)=>l(S.Col,b({key:o,class:`${a}-col`},q(e.gridProps,["gutter"])),{default:()=>{var f;return[z(c)?c:(f=t.item)==null?void 0:f.call(t,{item:c,index:o})]}})))?i:{default:()=>[i]})},ae=n=>_(n).map((s,c)=>{var o;return z(s)?s:(o=t.item)==null?void 0:o.call(t,{item:s,index:c})}),ne=()=>{const n=t.default?me(t.default()):e.data;return n&&n.length>0?e.gridProps?te(n):ae(n):F()},re=()=>{if(!e.paginationProps)return null;const n=q(e.paginationProps,["current","pageSize","defaultCurrent","defaultPageSize"]);return l(ye,b({class:`${a}-pagination`},n,{current:G.value,pageSize:C.value,onChange:Z,onPageSizeChange:ee}),null)},le=m(()=>[a,`${a}-${e.size}`,{[`${a}-bordered`]:e.bordered,[`${a}-split`]:e.split,[`${a}-hover`]:e.hoverable}]),ie=m(()=>{if(e.maxHeight)return{maxHeight:ge(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight,overflowY:"auto"}}),T=m(()=>[`${a}-content`,{[`${a}-virtual`]:I.value}]),A=w(),oe=()=>{var n;const i=_((n=e.data)!=null?n:[]);return i.length?l(pe,b({ref:A,class:T.value,data:i},e.virtualListProps,{onScroll:M}),{item:({item:s,index:c})=>{var o;return(o=t.item)==null?void 0:o.call(t,{item:s,index:c})}}):F()},D=()=>t["scroll-loading"]?l("div",{class:[`${a}-item`,`${a}-scroll-loading`]},[t["scroll-loading"]()]):null,F=()=>{var n,i,s,c,o;return t["scroll-loading"]?null:(o=(c=(n=t.empty)==null?void 0:n.call(t))!=null?c:(s=u==null?void 0:(i=u.slots).empty)==null?void 0:s.call(i,{component:"list"}))!=null?o:l(he,null,null)};return{virtualListRef:A,render:()=>{const n=N.value?fe:"div";return l("div",{class:`${a}-wrapper`},[l(ve,{class:`${a}-spin`,loading:e.loading},{default:()=>[l(n,b({ref:p,class:le.value,style:ie.value},d.value,{onScroll:M}),{default:()=>[l("div",{class:`${a}-content-wrapper`},[t.header&&l("div",{class:`${a}-header`},[t.header()]),I.value&&!e.gridProps?l(ze,null,[oe(),D()]):l("div",{role:"list",class:T.value},[ne(),D()]),t.footer&&l("div",{class:`${a}-footer`},[t.footer()])])]}),re()]})])}}},methods:{scrollIntoView(e){this.virtualListRef&&this.virtualListRef.scrollTo(e)}},render(){return this.render()}}),R=V({name:"ListItem",props:{actionLayout:{type:String,default:"horizontal"}},setup(e,{slots:r}){const t=O("list-item"),g=()=>{var a;const u=(a=r.actions)==null?void 0:a.call(r);return!u||!u.length?null:l("ul",{class:`${t}-action`},[u.map((p,v)=>l("li",{key:`${t}-action-${v}`},[p]))])};return()=>{var a,u;return l("div",{role:"listitem",class:t},[l("div",{class:`${t}-main`},[(a=r.meta)==null?void 0:a.call(r),l("div",{class:`${t}-content`},[(u=r.default)==null?void 0:u.call(r)]),e.actionLayout==="vertical"&&g()]),e.actionLayout==="horizontal"&&g(),r.extra&&l("div",{class:`${t}-extra`},[r.extra()])])}}});const _e=V({name:"ListItemMeta",props:{title:String,description:String},setup(e,{slots:r}){const t=O("list-item-meta"),g=!!(e.title||e.description||r.title||r.description);return{prefixCls:t,hasContent:g}}});function xe(e,r,t,g,a,u){return h(),P("div",{class:$(e.prefixCls)},[e.$slots.avatar?(h(),P("div",{key:0,class:$(`${e.prefixCls}-avatar`)},[j(e.$slots,"avatar")],2)):L("v-if",!0),e.hasContent?(h(),P("div",{key:1,class:$(`${e.prefixCls}-content`)},[e.$slots.title||e.title?(h(),P("div",{key:0,class:$(`${e.prefixCls}-title`)},[j(e.$slots,"title",{},()=>[J(Q(e.title),1)])],2)):L("v-if",!0),e.$slots.description||e.description?(h(),P("div",{key:1,class:$(`${e.prefixCls}-description`)},[j(e.$slots,"description",{},()=>[J(Q(e.description),1)])],2)):L("v-if",!0)],2)):L("v-if",!0)],2)}var k=Pe(_e,[["render",xe]]);const ke=Object.assign(H,{Item:Object.assign(R,{Meta:k}),install:(e,r)=>{$e(e,r);const t=Ce(r);e.component(t+H.name,H),e.component(t+R.name,R),e.component(t+k.name,k)}});export{ke as L,k as a,R as b};
