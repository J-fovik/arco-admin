import{a as x,n as d,d as w,s as B,v as R,M as E,x as F,y as H,r as u,o as K,e as M,g as t,w as l,c as e,i as j,f as q,k as h,Y as O}from"./index-8a2cb146.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import{S as G}from"./supplier-c338fe4b.js";import"./index-2bbe694f.js";const J=()=>{const{getDictionaryItem:_}=x();return[{title:"线路名称",dataIndex:"routeName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:a})=>d(a.routeName)},{title:"地区",dataIndex:"areaName",show:!0,align:"center",render:({record:a})=>d(a.areaName)},{title:"旅行分类",dataIndex:"travelType",show:!0,align:"center",render:({record:a})=>d(_("travelType",a.travelType).detailName)},{title:"成团类别",dataIndex:"groupType",show:!0,align:"center",render:({record:a})=>d(_("new_group_type",a.groupType).detailName)},{title:"天数",dataIndex:"travelDays",show:!0,align:"center",render:({record:a})=>d(a.travelDays)},{title:"供应商名称",dataIndex:"supName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:a})=>d(a.supName)},{title:"状态",dataIndex:"state",show:!0,align:"center",render:({record:a})=>d(_("traveState",a.state).detailName)},{title:"出团日期开始",dataIndex:"startDate",show:!0,align:"center",render:({record:a})=>d(a.startDate)},{title:"出团日期截止",dataIndex:"endDate",show:!0,align:"center",render:({record:a})=>d(a.endDate)},{title:"历史版本号",dataIndex:"historyid",show:!0,align:"center",render:({record:a})=>d(a.historyid)},{title:"操作",width:100,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}]},Q=q("span",{class:"mx-3"},"-",-1),W=w({name:"LineAdjustmentTourismHistory"}),ae=w({...W,setup(_){const{getDictionaryInfo:a}=x(),{form:n,resetForm:V}=B(()=>({routeName:"",travelType:"",supName:"",areaName:"",state:"",startDate:"",endDate:"",qrUrl:""}),()=>f()),{columnsData:T,visibleColumnsData:v,tableBaseOptions:s,resetData:f,extendTableList:D,changeTableColumn:I,changeTableSize:S}=R(J(),()=>b()),{data:C}=E(async()=>{const{res:i}=await h(()=>O.getSelectAreaList({cityFlag:"0"}));return(i==null?void 0:i.data)??[]}),{data:z,loading:U,initData:b}=F(async()=>{const{res:i,err:o}=await h(()=>G.getApplicationPriceExamineHistoryList({...n.value,currentPage:s.pagination.current,pageSize:s.pagination.pageSize,pagingOrNot:"1"}));return o?[]:(s.pagination.total=i.data.totalCount,D(i==null?void 0:i.data.hisTravelRouteList))});return H(b),(i,o)=>{const y=u("a-input"),p=u("a-form-item"),c=u("a-grid-item"),g=u("a-select"),N=u("a-date-picker"),k=u("a-grid"),A=u("a-form"),L=u("a-button"),P=u("a-button-group"),$=u("a-table");return K(),M("div",null,[t(Y,{fold:"","table-columns":e(T),"table-size":e(s).size,onResetSearch:e(V),onSearch:e(f),onChangeTableSize:e(S),onChangeTableColumn:e(I)},{form:l(({collapsed:m})=>[t(A,{model:e(n),"label-align":"left",size:"large","auto-label-width":""},{default:l(()=>[t(k,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!m},{default:l(()=>[t(c,null,{default:l(()=>[t(p,{label:"线路:"},{default:l(()=>[t(y,{modelValue:e(n).routeName,"onUpdate:modelValue":o[0]||(o[0]=r=>e(n).routeName=r),modelModifiers:{trim:!0},placeholder:"请输入线路"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(p,{label:"旅行分类:"},{default:l(()=>[t(g,{modelValue:e(n).travelType,"onUpdate:modelValue":o[1]||(o[1]=r=>e(n).travelType=r),options:e(a)("travelType"),"field-names":{label:"detailName",value:"detailCode"},placeholder:"请选择旅行分类"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(p,{label:"供应商名称:"},{default:l(()=>[t(y,{modelValue:e(n).supName,"onUpdate:modelValue":o[2]||(o[2]=r=>e(n).supName=r),modelModifiers:{trim:!0},placeholder:"请输入供应商名称"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(p,{label:"地区:"},{default:l(()=>[t(g,{modelValue:e(n).areaName,"onUpdate:modelValue":o[3]||(o[3]=r=>e(n).areaName=r),"allow-search":"",options:e(C),"field-names":{label:"cityName",value:"cityName"},placeholder:"请选择地区"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(p,{label:"状态:"},{default:l(()=>[t(g,{modelValue:e(n).state,"onUpdate:modelValue":o[4]||(o[4]=r=>e(n).state=r),options:e(a)("traveState"),"field-names":{label:"detailName",value:"detailCode"},placeholder:"请选择状态"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(p,{label:"出团日期:"},{default:l(()=>[t(N,{modelValue:e(n).startDate,"onUpdate:modelValue":o[5]||(o[5]=r=>e(n).startDate=r),class:"flex1",placeholder:"出团开始日期"},null,8,["modelValue"]),Q,t(N,{modelValue:e(n).endDate,"onUpdate:modelValue":o[6]||(o[6]=r=>e(n).endDate=r),class:"flex1",placeholder:"出团截止日期"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),table:l(()=>[t($,{"selected-keys":e(s).selectedKeys,"onUpdate:selectedKeys":o[7]||(o[7]=m=>e(s).selectedKeys=m),class:"zs-table","row-key":"id",data:e(z),"row-selection":e(s).rowSelection,bordered:e(s).bordered,pagination:e(s).pagination,size:e(s).size,columns:e(v),stripe:e(s).stripe,loading:e(U)},{operate:l(({record:m})=>[t(P,null,{default:l(()=>[t(L,{type:"text",status:"success",onClick:r=>i.$router.push(`/line/adjustmentTourismHistory/operate?id=${m.id}&routeId=${m.trouid}&historyId=${m.historyid}`)},{default:l(()=>[j("详情")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{ae as default};
