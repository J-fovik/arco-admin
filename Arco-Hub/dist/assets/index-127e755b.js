import{n as g,p as Z,O as P,P as G,d as N,u as Q,E as Y,s as M,r as c,o as I,l as w,w as a,g as t,c as e,k as $,C as L,b as O,i as o,t as p,X as q,f as U,h}from"./index-8a2cb146.js";import{Z as A}from"./index-2bbe694f.js";import{_ as B}from"./zsPreviewDumplingDate.vue_vue_type_script_setup_true_name_ZsPreviewDumplingDate_lang-410dbbba.js";import{Q as S}from"./quitGroup-313e3abb.js";import"./zsRoutePrice-e3a5f38b.js";import"./line-7661aa01.js";const K=l=>{if(l.otherType==="1"){if(l.diffPrice==="1")switch(l.priceType){case"0":return"成人单房差其他价格";case"3":return"老人单房差其他价格";case"6":return"儿童单房差其他价格";case"10":return"占床儿童单房差其他价格";default:return"未知单房差其他价格"}if(l.diffPrice==="0")switch(l.priceType){case"0":return"成人其他价格";case"3":return"老人其他价格";case"6":return"儿童其他价格";case"10":return"占床儿童其他价格";default:return"未知其他价格"}}if(l.otherType==="0"){if(l.diffPrice==="1")switch(l.priceType){case"0":return"成人单房差价格";case"3":return"老人单房差价格";case"6":return"儿童单房差价格";case"10":return"占床儿童单房差价格";default:return"未知单房差价格"}if(l.diffPrice==="0")switch(l.priceType){case"0":return"成人同行价格";case"3":return"老人同行价格";case"6":return"儿童同行价格";case"10":return"占床儿童同行价格";default:return"未知同行价格"}}return"未知价格"},j=[{title:"姓名",dataIndex:"name",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:l})=>g(l.name)},{title:"性别",dataIndex:"gender",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:l})=>g(l.gender)},{title:"联系电话",dataIndex:"phone",show:!0,align:"center",render:({record:l})=>g(l.phone)},{title:"证件类型",dataIndex:"idType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:l})=>g(l.idType)},{title:"证件号码",dataIndex:"idNumber",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:l})=>g(l.idNumber)},{title:"年龄",dataIndex:"age",show:!0,align:"right",render:({record:l})=>g(l.age)},{title:"类别",dataIndex:"priceType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:l})=>g(l.name==="总计"?"-":K(l))},{title:"报名同行价格",dataIndex:"supSigCost",show:!0,align:"right",render:({record:l})=>Z("span",{class:"text-red text-price"},P(G(l.supSigCost)))}],z=N({name:"ZsConfirmRefund"}),F=N({...z,emits:["close","success"],setup(l,{emit:T}){const R=T,y=Q(),[D,r]=Y(""),{form:s,formRef:_}=M(()=>({settleDesc:"",quitTotal:0,signupNo:"",outNum:0,settleTotal:0})),u=async()=>{const{res:m,err:n}=await $(()=>S.getSupplierConfirmQuitGroupDetail({groupId:y.query.groupId,state:y.query.state,id:y.query.id}));n||(s.value={...m==null?void 0:m.data.signoutRecord,quitTotal:m==null?void 0:m.data.signoutRecord.settleTotal,settleDesc:""})},i=()=>{_.value.validate(m=>{m||d()})},d=async()=>{const{err:m}=await $(()=>S.confirmSupplierQuitGroup({groupId:y.query.groupId,id:y.query.id,settleTotal:s.value.quitTotal,settleDesc:s.value.settleDesc}),{successMsg:"已确定退团",after:()=>r(""),before:()=>r("okLoading")});m||(R("success"),R("close"))};return u(),(m,n)=>{const C=c("a-input"),b=c("a-form-item"),v=c("a-input-number"),V=c("a-textarea"),k=c("a-form"),x=c("a-modal");return I(),w(x,{top:"10%",width:"600px",title:"供应商确认","unmount-on-close":"",visible:"","align-center":!1,"mask-closable":!1,"ok-loading":e(D)==="okLoading",onCancel:n[5]||(n[5]=f=>R("close")),onOk:i},{default:a(()=>[t(k,{model:e(s),ref_key:"formRef",ref:_,"label-align":"left",size:"large","auto-label-width":""},{default:a(()=>[t(b,{field:"signupNo",label:"团号:"},{default:a(()=>[t(C,{modelValue:e(s).signupNo,"onUpdate:modelValue":n[0]||(n[0]=f=>e(s).signupNo=f),readonly:"",placeholder:"请输入团号"},null,8,["modelValue"])]),_:1}),t(b,{field:"outNum",label:"退团人数:"},{default:a(()=>[t(v,{modelValue:e(s).outNum,"onUpdate:modelValue":n[1]||(n[1]=f=>e(s).outNum=f),readonly:"",placeholder:"请输入退团人数"},null,8,["modelValue"])]),_:1}),t(b,{field:"settleTotal",label:"退团总金额:"},{default:a(()=>[t(v,{modelValue:e(s).settleTotal,"onUpdate:modelValue":n[2]||(n[2]=f=>e(s).settleTotal=f),readonly:"",precision:2,placeholder:"请输入退团总金额"},null,8,["modelValue"])]),_:1}),t(b,{field:"quitTotal",label:"总退款:"},{default:a(()=>[t(v,{modelValue:e(s).quitTotal,"onUpdate:modelValue":n[3]||(n[3]=f=>e(s).quitTotal=f),formatter:f=>e(P)(f,""),parser:f=>f.replace(/,/g,""),precision:2,max:e(s).settleTotal,min:0,placeholder:"请输入总退款"},null,8,["modelValue","formatter","parser","max"])]),_:1}),t(b,{field:"settleDesc",label:"报名退款说明:"},{default:a(()=>[t(V,{modelValue:e(s).settleDesc,"onUpdate:modelValue":n[4]||(n[4]=f=>e(s).settleDesc=f),placeholder:"请输入退款说明"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["ok-loading"])}}}),E=U("div",{style:{height:"100px"}},null,-1),X={class:"orderSubmit-footer box-flex jc-fe"},H=N({name:"QuitGroupSupplierQuitOperate"}),re=N({...H,setup(l){const T=Q(),{jumpTabName:R}=L(),[y,D]=Y(null),{data:r,loading:s}=O(async()=>{const{res:_,err:u}=await $(()=>S.getSupplierQuitGroupDetail({groupId:T.query.groupId,state:T.query.state,id:T.query.id}));return u?{}:_==null?void 0:_.data},{touristsInfoList:[],signupRecord:{},signoutRecord:{}});return(_,u)=>{const i=c("a-tag"),d=c("a-descriptions-item"),m=c("a-descriptions"),n=c("a-button"),C=c("a-space"),b=c("a-card"),v=c("a-alert"),V=c("a-table"),k=c("a-typography-title");return I(),w(A,null,{default:a(()=>[t(b,{title:"基本信息",loading:e(s),bordered:!1,class:"general-card"},{default:a(()=>[t(m,{column:{xs:1,md:2,lg:4},size:"large"},{default:a(()=>[t(d,{label:"线路名称："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.routeName),1)]),_:1})]),_:1}),t(d,{label:"供应商名称："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.supName),1)]),_:1})]),_:1}),t(d,{label:"营业部名称："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.departName),1)]),_:1})]),_:1}),t(d,{label:"团号："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.groupId),1)]),_:1})]),_:1}),t(d,{label:"所属地区："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.areaName),1)]),_:1})]),_:1}),t(d,{label:"目的地："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.arrival),1)]),_:1})]),_:1}),t(d,{label:"集合地点："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(g)(e(r).signupRecord.aggregatePlace,"--")),1)]),_:1})]),_:1}),t(d,{label:"旅行时间："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(q)(e(r).signupRecord.startDate,"YYYY-MM-DD"))+"至"+p(e(q)(e(r).signupRecord.endDate,"YYYY-MM-DD")),1)]),_:1})]),_:1}),t(d,{label:"旅行天数/天："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.travelDays),1)]),_:1})]),_:1}),t(d,{label:"旅行类型："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.travelType),1)]),_:1})]),_:1}),t(d,{label:"成团类别："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(r).signupRecord.groupType==1?"单团":"散客"),1)]),_:1})]),_:1}),t(d,{label:"退款总费用："},{default:a(()=>[t(i,{color:"red"},{default:a(()=>[o("¥"+p(e(P)(`${e(r).signoutRecord.settleTotal}`)),1)]),_:1})]),_:1}),t(d,{label:"退款说明："},{default:a(()=>[t(i,null,{default:a(()=>[o(p(e(g)(e(r).signoutRecord.settleDesc)),1)]),_:1})]),_:1})]),_:1}),t(C,{class:"margin-top"},{default:a(()=>[t(n,{type:"primary",onClick:u[0]||(u[0]=x=>e(D)("ZsPreviewDumplingDate"))},{default:a(()=>[o("信息价格")]),_:1}),t(n,{type:"primary",onClick:u[1]||(u[1]=x=>_.$router.push(`/line/addTourismManage/operate?mark=2&id=${e(r).signupRecord.routeId}&isReadOnly=true&name=${_.$route.name}`))},{default:a(()=>[o("查看行程")]),_:1})]),_:1})]),_:1},8,["loading"]),t(b,{title:"游客信息",bordered:!1,class:"general-card margin-top"},{default:a(()=>[t(v,null,{default:a(()=>[o(" 当前订单总计是每个游客价格的汇总，若订单有过退团或订单调账操作，可能与实际订单金额有出入，请以订单管理页面中金额为准。 ")]),_:1}),t(V,{size:"large",class:"margin-top",columns:e(j),data:e(r).touristsInfoList,pagination:!1,bordered:!1},null,8,["columns","data"]),t(k,{heading:6,class:"box-flex jc-fe margin-top"},{default:a(()=>[o("退团游客共计： "+p(e(r).touristsInfoList.length-1)+"位",1)]),_:1})]),_:1}),E,U("div",X,[t(C,null,{default:a(()=>[e(T).query.isConfirm?(I(),w(n,{key:0,type:"primary",onClick:u[2]||(u[2]=x=>e(D)("ZsConfirmRefund"))},{default:a(()=>[o("确定")]),_:1})):h("",!0),t(n,{onClick:u[3]||(u[3]=()=>e(R)())},{default:a(()=>[o("返回")]),_:1})]),_:1})]),e(y)==="ZsPreviewDumplingDate"?(I(),w(B,{key:0,data:{id:e(r).signupRecord.routeId},"default-time-arr":[e(q)(e(r).signupRecord.startDate)],onClose:u[4]||(u[4]=x=>e(D)(""))},null,8,["data","default-time-arr"])):h("",!0),e(y)==="ZsConfirmRefund"?(I(),w(F,{key:1,onClose:u[5]||(u[5]=x=>e(D)("")),onSuccess:u[6]||(u[6]=()=>e(R)())})):h("",!0)]),_:1})}}});export{re as default};
