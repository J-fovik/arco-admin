import{d as _,u as y,C as N,E as S,b as T,k as h,r,o as C,l as I,w as e,g as t,i as o,t as u,c as a,O as Q,n as k,f as p}from"./index-8a2cb146.js";import{Z as q}from"./index-2bbe694f.js";import{Q as B}from"./quitGroup-313e3abb.js";const D=p("div",{style:{height:"100px"}},null,-1),v={class:"orderSubmit-footer box-flex jc-fe"},w=_({name:"QuitGroupSupplierQuitOperate"}),A=_({...w,setup(G){const i=y(),{jumpTabName:f}=N();S(null);const{data:s,loading:m}=T(async()=>{const{res:d,err:c}=await h(()=>B.getSupplierQuitGroupDetail({groupId:i.query.groupId,state:i.query.state,id:i.query.id}));return c?{}:d==null?void 0:d.data},{touristsInfoList:[],signupRecord:{},signoutRecord:{}});return(d,c)=>{const l=r("a-tag"),n=r("a-descriptions-item"),g=r("a-descriptions"),b=r("a-card"),R=r("a-button"),x=r("a-space");return C(),I(q,null,{default:e(()=>[t(b,{title:"基本信息",loading:a(m),bordered:!1,class:"general-card"},{default:e(()=>[t(g,{column:2,size:"large"},{default:e(()=>[t(n,{label:"团号："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(s).signupRecord.groupId),1)]),_:1})]),_:1}),t(n,{label:"线路名称："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(s).signupRecord.routeName),1)]),_:1})]),_:1}),t(n,{label:"供应商名称："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(s).signupRecord.supName),1)]),_:1})]),_:1}),t(n,{label:"营业部名称："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(s).signupRecord.departName),1)]),_:1})]),_:1}),t(n,{label:"退团人数："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(s).signoutRecord.outNum)+"人",1)]),_:1})]),_:1}),t(n,{label:"退款总费用："},{default:e(()=>[t(l,{color:"red"},{default:e(()=>[o("¥"+u(a(Q)(`${a(s).signoutRecord.settleTotal}`)),1)]),_:1})]),_:1}),t(n,{label:"退款说明："},{default:e(()=>[t(l,null,{default:e(()=>[o(u(a(k)(a(s).signoutRecord.settleDesc)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"]),D,p("div",v,[t(x,null,{default:e(()=>[t(R,{onClick:c[0]||(c[0]=()=>a(f)())},{default:e(()=>[o("返回")]),_:1})]),_:1})])]),_:1})}}});export{A as default};
