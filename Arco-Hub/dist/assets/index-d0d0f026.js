import{n as c,p as f,O as _,P as m,d as R,u as M,C as O,E as S,b as B,k as L,r as d,o as w,l as D,w as t,g as a,i as l,t as s,c as r,X as h,h as V,f as C}from"./index-8a2cb146.js";import{Z}from"./index-2bbe694f.js";import{_ as j}from"./zsPreviewDumplingDate.vue_vue_type_script_setup_true_name_ZsPreviewDumplingDate_lang-410dbbba.js";import{O as q}from"./order-70291d37.js";import"./zsRoutePrice-e3a5f38b.js";import"./line-7661aa01.js";const A=e=>{if(e.otherType==="1"){if(e.diffPrice==="1")switch(e.priceType){case"0":return"成人单房差其他价格";case"3":return"老人单房差其他价格";case"6":return"儿童单房差其他价格";case"10":return"占床儿童单房差其他价格";default:return"未知单房差其他价格"}if(e.diffPrice==="0")switch(e.priceType){case"0":return"成人其他价格";case"3":return"老人其他价格";case"6":return"儿童其他价格";case"10":return"占床儿童其他价格";default:return"未知其他价格"}}if(e.otherType==="0"){if(e.diffPrice==="1")switch(e.priceType){case"0":return"成人单房差价格";case"3":return"老人单房差价格";case"6":return"儿童单房差价格";case"10":return"占床儿童单房差价格";default:return"未知单房差价格"}if(e.diffPrice==="0")switch(e.priceType){case"0":return"成人同行价格";case"3":return"老人同行价格";case"6":return"儿童同行价格";case"10":return"占床儿童同行价格";default:return"未知同行价格"}}return"未知价格"},F=[{title:"姓名",dataIndex:"name",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>c(e.name)},{title:"性别",dataIndex:"gender",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>c(e.gender)},{title:"联系电话",dataIndex:"phone",show:!0,align:"center",render:({record:e})=>c(e.phone)},{title:"证件类型",dataIndex:"IDType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>c(e.IDType)},{title:"证件号码",dataIndex:"IDNumber",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>c(e.IDNumber)},{title:"年龄",dataIndex:"age",show:!0,align:"right",render:({record:e})=>c(e.age)},{title:"类别",dataIndex:"priceType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>c(e.name==="总计"?"-":A(e))},{title:"实收旅行费",dataIndex:"actualsignCost",show:!0,align:"right",render:({record:e})=>f("span",{class:"text-red text-price"},_(m(e.actualsignCost)))},{title:"订单保险费",dataIndex:"insuranceCost",show:!0,align:"right",render:({record:e})=>f("span",{class:"text-red text-price"},_(m(e.insuranceCost)))},{title:"实收保险费",dataIndex:"actualInsuraCost",show:!0,align:"right",render:({record:e})=>f("span",{class:"text-red text-price"},_(m(e.actualInsuraCost)))},{title:"订单总费用",dataIndex:"allcost",show:!0,align:"right",render:({record:e})=>f("span",{class:"text-red text-price"},_(m(e.allcost)))},{title:"实收总费用",dataIndex:"actualsignCost",show:!0,align:"right",render:({record:e})=>f("span",{class:"text-red text-price"},_(m(e.actualsignCost)))}],E=C("div",{style:{height:"100px"}},null,-1),K={class:"orderSubmit-footer box-flex jc-fe"},z=R({name:"OrderFinanceManageOperate"}),W=R({...z,setup(e){const x=M(),{jumpTabName:T}=O(),[N,y]=S(null),{data:n}=B(async()=>{const{res:p,err:u}=await L(()=>q.getFinanceListDetail({groupId:x.query.groupId,mark:"0",routeId:x.query.routeId}));return u?{}:p==null?void 0:p.data},{tourList:[],travelRoute:{}});return(p,u)=>{const o=d("a-tag"),i=d("a-descriptions-item"),k=d("a-descriptions"),g=d("a-button"),v=d("a-space"),b=d("a-card"),P=d("a-alert"),Y=d("a-table"),$=d("a-typography-title");return w(),D(Z,null,{default:t(()=>[a(b,{title:"基本信息",bordered:!1,class:"general-card"},{default:t(()=>[a(k,{column:{xs:1,md:2,lg:4}},{default:t(()=>[a(i,{label:"线路名称："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.routeName),1)]),_:1})]),_:1}),a(i,{label:"供应商名称："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.supName),1)]),_:1})]),_:1}),a(i,{label:"团号："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.groupId),1)]),_:1})]),_:1}),a(i,{label:"所属地区："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.areaName),1)]),_:1})]),_:1}),a(i,{label:"目的地："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.arrival),1)]),_:1})]),_:1}),a(i,{label:"集合地点："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(c)(r(n).travelRoute.aggregatePlace,"--")),1)]),_:1})]),_:1}),a(i,{label:"旅行时间："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(h)(r(n).travelRoute.startDate,"YYYY-MM-DD"))+"至"+s(r(h)(r(n).travelRoute.endDate,"YYYY-MM-DD")),1)]),_:1})]),_:1}),a(i,{label:"旅行天数/天："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.travelDays),1)]),_:1})]),_:1}),a(i,{label:"旅行类型："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.travelType),1)]),_:1})]),_:1}),a(i,{label:"成团类别："},{default:t(()=>[a(o,null,{default:t(()=>[l(s(r(n).travelRoute.groupType==1?"单团":"散客"),1)]),_:1})]),_:1})]),_:1}),a(v,{class:"margin-top"},{default:t(()=>[a(g,{type:"primary",onClick:u[0]||(u[0]=I=>r(y)("ZsPreviewDumplingDate"))},{default:t(()=>[l("信息价格")]),_:1}),a(g,{class:"margin-left",type:"primary",onClick:u[1]||(u[1]=I=>p.$router.push(`/line/addTourismManage/operate?mark=2&id=${r(n).travelRoute.routeId}&isReadOnly=true&name=${p.$route.name}`))},{default:t(()=>[l("查看行程")]),_:1})]),_:1})]),_:1}),a(b,{title:"游客信息",bordered:!1,class:"general-card margin-top"},{default:t(()=>[a(P,null,{default:t(()=>[l(" 当前订单总计是每个游客价格的汇总，若订单有过退团或订单调账操作，可能与实际订单金额有出入，请以订单管理页面中金额为准。 ")]),_:1}),a(Y,{size:"large",class:"margin-top",columns:r(F),data:r(n).tourList,pagination:!1,bordered:!1},null,8,["columns","data"]),a($,{heading:6,class:"box-flex jc-fe margin-top"},{default:t(()=>[l("游客共计： "+s(r(n).tourList.length-1)+"位",1)]),_:1})]),_:1}),r(N)==="ZsPreviewDumplingDate"?(w(),D(j,{key:0,data:{id:r(n).travelRoute.routeId},"default-time-arr":[r(h)(r(n).travelRoute.startDate)],onClose:u[2]||(u[2]=I=>r(y)(""))},null,8,["data","default-time-arr"])):V("",!0),E,C("div",K,[a(v,null,{default:t(()=>[a(g,{onClick:u[3]||(u[3]=()=>r(T)())},{default:t(()=>[l("返回")]),_:1})]),_:1})])]),_:1})}}});export{W as default};