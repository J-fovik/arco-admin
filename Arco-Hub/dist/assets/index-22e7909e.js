import{n as f,p as d,O as c,P as b,d as D,u as F,C as O,E as M,b as S,k as q,r as p,o as w,l as C,w as t,g as a,i as l,t as s,c as r,X as x,h as B,f as T}from"./index-8a2cb146.js";import{Z as V}from"./index-2bbe694f.js";import{_ as Z}from"./zsPreviewDumplingDate.vue_vue_type_script_setup_true_name_ZsPreviewDumplingDate_lang-410dbbba.js";import{O as j}from"./order-70291d37.js";import"./zsRoutePrice-e3a5f38b.js";import"./line-7661aa01.js";const A=e=>{if(e.otherType==="1"){if(e.diffPrice==="1")switch(e.priceType){case"0":return"成人单房差其他价格";case"3":return"老人单房差其他价格";case"6":return"儿童单房差其他价格";case"10":return"占床儿童单房差其他价格";default:return"未知单房差其他价格"}if(e.diffPrice==="0")switch(e.priceType){case"0":return"成人其他价格";case"3":return"老人其他价格";case"6":return"儿童其他价格";case"10":return"占床儿童其他价格";default:return"未知其他价格"}}if(e.otherType==="0"){if(e.diffPrice==="1")switch(e.priceType){case"0":return"成人单房差价格";case"3":return"老人单房差价格";case"6":return"儿童单房差价格";case"10":return"占床儿童单房差价格";default:return"未知单房差价格"}if(e.diffPrice==="0")switch(e.priceType){case"0":return"成人同行价格";case"3":return"老人同行价格";case"6":return"儿童同行价格";case"10":return"占床儿童同行价格";default:return"未知同行价格"}}return"未知价格"},L=[{title:"姓名",dataIndex:"name",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>f(e.name)},{title:"性别",dataIndex:"gender",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>f(e.gender)},{title:"联系电话",dataIndex:"phone",show:!0,align:"center",render:({record:e})=>f(e.phone)},{title:"证件类型",dataIndex:"IDType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>f(e.IDType)},{title:"证件号码",dataIndex:"IDNumber",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>f(e.IDNumber)},{title:"年龄",dataIndex:"age",show:!0,align:"right",render:({record:e})=>f(e.age)},{title:"类别",dataIndex:"priceType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>f(e.name==="总计"?"-":A(e))},{title:"订单同行价",dataIndex:"signCost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.signCost}`))},{title:"单房差同行价",dataIndex:"diffFree",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.diffFree??0}`))},{title:"其他价格",dataIndex:"otherFee",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.otherFee??0}`))},{title:"订单保险费",dataIndex:"insuranceCost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(b(e.insuranceCost)))},{title:"订单总费用",dataIndex:"allcost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(b(e.allcost)))},{title:"实收旅行费",dataIndex:"actualsignCost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.actualsignCost??"0"}`))},{title:"实收单房差",dataIndex:"diffmsFree",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.diffmsFree??"0"}`))},{title:"实收保险费",dataIndex:"actualInsuraCost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.actualInsuraCost??"0"}`))},{title:"实收总费用",dataIndex:"allactCost",show:!0,align:"right",render:({record:e})=>d("span",{class:"text-red text-price"},c(`${e.allactCost??"0"}`))}],z=T("div",{style:{height:"100px"}},null,-1),E={class:"orderSubmit-footer box-flex jc-fe"},K=D({name:"OrderTradeManageOperate"}),W=D({...K,setup(e){const _=F(),{jumpTabName:R}=O(),[$,h]=M(null),{data:n}=S(async()=>{const{res:g,err:u}=await q(()=>j.getTraderOrderDetail({groupId:_.query.groupId,mark:"0",routeId:_.query.routeId}));return u?{}:g==null?void 0:g.data},{tourList:[],travelRoute:{}});return(g,u)=>{const i=p("a-tag"),o=p("a-descriptions-item"),N=p("a-descriptions"),m=p("a-button"),y=p("a-space"),I=p("a-card"),k=p("a-alert"),P=p("a-table"),Y=p("a-typography-title");return w(),C(V,null,{default:t(()=>[a(I,{title:"基本信息",bordered:!1,class:"general-card"},{default:t(()=>[a(N,{column:{xs:1,md:2,lg:4},size:"large"},{default:t(()=>[a(o,{label:"线路名称："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.routeName),1)]),_:1})]),_:1}),a(o,{label:"供应商名称："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.supName),1)]),_:1})]),_:1}),a(o,{label:"团号："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.groupId),1)]),_:1})]),_:1}),a(o,{label:"所属地区："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.areaName),1)]),_:1})]),_:1}),a(o,{label:"目的地："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.arrival),1)]),_:1})]),_:1}),a(o,{label:"集合地点："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(f)(r(n).travelRoute.aggregatePlace,"--")),1)]),_:1})]),_:1}),a(o,{label:"旅行时间："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(x)(r(n).travelRoute.startDate,"YYYY-MM-DD"))+"至"+s(r(x)(r(n).travelRoute.endDate,"YYYY-MM-DD")),1)]),_:1})]),_:1}),a(o,{label:"旅行天数/天："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.travelDays),1)]),_:1})]),_:1}),a(o,{label:"旅行类型："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.travelType),1)]),_:1})]),_:1}),a(o,{label:"成团类别："},{default:t(()=>[a(i,null,{default:t(()=>[l(s(r(n).travelRoute.groupType==1?"单团":"散客"),1)]),_:1})]),_:1})]),_:1}),a(y,{class:"margin-top"},{default:t(()=>[a(m,{type:"primary",onClick:u[0]||(u[0]=v=>r(h)("ZsPreviewDumplingDate"))},{default:t(()=>[l("信息价格")]),_:1}),a(m,{class:"margin-left",type:"primary",onClick:u[1]||(u[1]=v=>g.$router.push(`/line/addTourismManage/operate?mark=2&id=${r(n).travelRoute.routeId}&isReadOnly=true&name=${g.$route.name}`))},{default:t(()=>[l("查看行程")]),_:1})]),_:1})]),_:1}),a(I,{title:"游客信息",bordered:!1,class:"general-card margin-top"},{default:t(()=>[a(k,null,{default:t(()=>[l(" 当前订单总计是每个游客价格的汇总，若订单有过退团或订单调账操作，可能与实际订单金额有出入，请以订单管理页面中金额为准。 ")]),_:1}),a(P,{size:"large",class:"margin-top",columns:r(L),data:r(n).tourList,pagination:!1,bordered:!1},null,8,["columns","data"]),a(Y,{heading:6,class:"box-flex jc-fe margin-top"},{default:t(()=>[l("游客共计： "+s(r(n).tourList.length-1)+"位",1)]),_:1})]),_:1}),r($)==="ZsPreviewDumplingDate"?(w(),C(Z,{key:0,data:{id:r(_).query.routeId},"default-time-arr":[r(x)(r(n).travelRoute.startDate)],onClose:u[2]||(u[2]=v=>r(h)(""))},null,8,["data","default-time-arr"])):B("",!0),z,T("div",E,[a(y,null,{default:t(()=>[a(m,{onClick:u[3]||(u[3]=()=>r(R)())},{default:t(()=>[l("返回")]),_:1})]),_:1})])]),_:1})}}});export{W as default};
