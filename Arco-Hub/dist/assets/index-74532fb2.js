import{d as p,u as y,C as $,b as B,r,o as I,l as T,w as e,g as t,i as d,t as n,c as a,n as f,f as c,O as _,k}from"./index-8a2cb146.js";import{Z as v}from"./index-2bbe694f.js";import{F as w}from"./finance-4d2c7da5.js";const S={class:"text-price"},V={class:"text-price"},A={class:"text-price"},D={class:"text-price"},j={class:"text-price"},q={class:"text-price"},F=c("div",{style:{height:"100px"}},null,-1),O={class:"orderSubmit-footer box-flex jc-fe"},R=p({name:"BusinessNewInvoiceOperate"}),P=p({...R,setup(Z){const m=y(),{jumpTabName:b}=$(),{data:s,loading:g}=B(async()=>{const{res:u,err:i}=await k(()=>w.getVoucherDetail({id:m.query.id}));return i?{}:u==null?void 0:u.data});return(u,i)=>{const o=r("a-tag"),l=r("a-descriptions-item"),x=r("a-descriptions"),h=r("a-card"),C=r("a-button"),N=r("a-space");return I(),T(v,null,{default:e(()=>[t(h,{title:"基本信息",loading:a(g),bordered:!1,class:"general-card"},{default:e(()=>[t(x,{column:2,size:"large"},{default:e(()=>[t(l,{label:"团号："},{default:e(()=>[t(o,null,{default:e(()=>[d(n(a(f)(a(s).groupId)),1)]),_:1})]),_:1}),t(l,{label:"营业部名称："},{default:e(()=>[t(o,null,{default:e(()=>[d(n(a(f)(a(s).departName)),1)]),_:1})]),_:1}),t(l,{label:"报名经办人姓名："},{default:e(()=>[t(o,null,{default:e(()=>[d(n(a(f)(a(s).transactorName)),1)]),_:1})]),_:1}),t(l,{label:"报名订单总费用(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",S,n(a(_)(`${a(s).signCost}`)),1)]),_:1})]),_:1}),t(l,{label:"保险总费用(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",V,n(a(_)(`${a(s).insuranceCost}`)),1)]),_:1})]),_:1}),t(l,{label:"报名总金额(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",A,n(a(_)(`${a(s).money}`)),1)]),_:1})]),_:1}),t(l,{label:"实收报名总金额(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",D,n(a(_)(`${a(s).actualCost}`)),1)]),_:1})]),_:1}),t(l,{label:"实收保险总费用(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",j,n(a(_)(`${a(s).actualInsurCost2}`)),1)]),_:1})]),_:1}),t(l,{label:"实收总金额(元)："},{default:e(()=>[t(o,{color:"red"},{default:e(()=>[c("span",q,n(a(_)(`${a(s).actualMoney}`)),1)]),_:1})]),_:1}),t(l,{label:"状态："},{default:e(()=>[t(o,null,{default:e(()=>[d(n(a(f)(a(s).isBillingName)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"]),F,c("div",O,[t(N,null,{default:e(()=>[t(C,{onClick:i[0]||(i[0]=()=>a(b)())},{default:e(()=>[d("返回")]),_:1})]),_:1})])]),_:1})}}});export{P as default};
