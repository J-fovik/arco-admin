import{a as L,n as s,p as c,O as h,T as ee,d as f,u as M,m as K,v as U,b as z,r as u,o as V,l as E,w as r,g as a,i as P,c as t,k as O,E as te,s as ae,y as re,e as ne,f as G,t as oe,h as le,S as se}from"./index-8a2cb146.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import{O as Z}from"./order-70291d37.js";import"./index-2bbe694f.js";const ue=()=>{const{getDictionaryItem:g}=L();return[{title:"团号",slotName:"groupId",show:!0,ellipsis:!0,tooltip:!0,align:"center"},{title:"供应商",dataIndex:"supName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.supName)},{title:"订单同行总费用",dataIndex:"supsigCost",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.supsigCost??0}`))},{title:"供应商结算费用",dataIndex:"moneyTotal",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.moneyTotal??0}`))},{title:"已结算金额",dataIndex:"totalSettledAmount",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.totalSettledAmount??0}`))},{title:"本次申请结算金额",dataIndex:"money",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.money??0}`))},{title:"审核状态",dataIndex:"settleApplyBatchState",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(g("settleApplyBatchState",e.applystate).detailName)},{title:"申请时间",dataIndex:"createTime",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.createTime)},{title:"操作",width:100,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}]},de=()=>{const{getDictionaryItem:g}=L();return[{title:"团号",dataIndex:"groupId",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.groupId)},{title:"营业部名称",dataIndex:"departName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.departName)},{title:"线路编号",dataIndex:"routeId",show:!0,align:"center",render:({record:e})=>c(ee,{color:"blue"},{default:()=>s(e.routeId)})},{title:"线路名称",dataIndex:"routeName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.routeName)},{title:"供应商",dataIndex:"supName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.supName)},{title:"订单状态",dataIndex:"state",show:!0,align:"center",render:({record:e})=>s(g("new_trade_order",e.state).detailName)},{title:"结算状态",dataIndex:"settleType",show:!0,align:"center",render:({record:e})=>s(g("signupSettleType",e.settleType).detailName)},{title:"行程天数",dataIndex:"days",show:!0,width:100,align:"right",render:({record:e})=>s(e.days)},{title:"报名人数",dataIndex:"totalNumber",show:!0,width:100,align:"right",render:({record:e})=>s(e.totalNumber)},{title:"订单同行总费用",dataIndex:"supsigCost",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.supsigCost??0}`,"0"))},{title:"扣点（%）",dataIndex:"ratio",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-green"},s(e.ratio)+"%")},{title:"供应商结算费用",dataIndex:"setMoney",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.setMoney}`,"0"))},{title:"已结算金额",dataIndex:"setValue",show:!0,align:"right",render:({record:e})=>c("span",{class:"text-red text-price"},h(`${e.setValue}`,"0"))},{title:"创建时间",dataIndex:"createTimeStr",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>s(e.createTimeStr)},{title:"操作",width:100,slotName:"operate",show:!0,align:"center"}]},pe=f({name:"ZsGroupOrder"}),ce=f({...pe,props:{data:{default:()=>({})}},emits:["close"],setup(g,{emit:e}){const w=g,I=e,x=M(),d=K(),{visibleColumnsData:y,tableBaseOptions:m}=U(de(),()=>C()),{data:S,initData:C,loading:N}=z(async()=>{const{res:p,err:_}=await O(()=>Z.getSupplierList({groupIdList:w.data.groupNo.split(","),currentPage:m.pagination.current,pageSize:m.pagination.pageSize,pagingOrNot:"1"}));return _?[]:(m.pagination.total=p.data.totalCount,p==null?void 0:p.data.dataList)}),i=p=>{d.push(`/order/supplierManage/operate/?groupId=${p.groupId}&name=${x.name}`)};return(p,_)=>{const A=u("a-button"),T=u("a-table"),$=u("a-modal");return V(),E($,{width:"80vw","unmount-on-close":"",visible:"",title:"订单列表","mask-closable":!1,onCancel:_[0]||(_[0]=b=>I("close")),footer:!1,"render-to-body":!1},{default:r(()=>[a(T,{class:"zs-table","row-key":"id",data:t(S),bordered:t(m).bordered,size:t(m).size,columns:t(y),stripe:t(m).stripe,loading:t(N)},{operate:r(({record:b})=>[a(A,{type:"text",onClick:B=>i(b)},{default:r(()=>[P("查看")]),_:2},1032,["onClick"])]),_:1},8,["data","bordered","size","columns","stripe","loading"])]),_:1})}}}),me=G("span",{class:"mx-3"},"-",-1),ge=["onClick"],_e=f({name:"OrderSupplierSettlementManage"}),we=f({..._e,setup(g){const e=K(),w=M(),[I,x]=te(""),{form:d,resetForm:y}=ae(()=>({groupId:"",supId:"",startDate:"",endDate:""}),()=>p()),{data:m}=z(async()=>{const{res:l,err:n}=await O(()=>se.getSupplierList({pagingOrNot:"0"}));return n?[]:l==null?void 0:l.data.supplierList},[]),{selectRow:S,columnsData:C,visibleColumnsData:N,tableBaseOptions:i,resetData:p,setSelectRow:_,extendTableList:A,changeTableColumn:T,changeTableSize:$}=U(ue(),()=>v()),{data:b,loading:B,initData:v}=z(async()=>{const{res:l,err:n}=await O(()=>Z.getApplyList({...d.value,currentPage:i.pagination.current,pageSize:i.pagination.pageSize,pagingOrNot:"1"}));return n?[]:(i.pagination.total=l.data.totalCount,l==null?void 0:l.data.settleRecordApplyBatchList)}),F=l=>{l.groupNo.indexOf(",")>-1?_(l,()=>x("ZsGroupOrder")):e.push(`/order/supplierManage/operate/?groupId=${l.groupNo}&name=${w.name}`)};return re(v),(l,n)=>{const q=u("a-input"),D=u("a-form-item"),k=u("a-grid-item"),Y=u("a-select"),R=u("a-date-picker"),j=u("a-grid"),H=u("a-form"),J=u("a-button"),Q=u("a-button-group"),W=u("a-table");return V(),ne("div",null,[a(ie,{"table-columns":t(C),"table-size":t(i).size,onResetSearch:t(y),onSearch:t(p),onChangeTableSize:t($),onChangeTableColumn:t(T)},{form:r(()=>[a(H,{model:t(d),"label-align":"left",size:"large","auto-label-width":""},{default:r(()=>[a(j,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12},{default:r(()=>[a(k,null,{default:r(()=>[a(D,{field:"groupNo",label:"团号:"},{default:r(()=>[a(q,{modelValue:t(d).groupId,"onUpdate:modelValue":n[0]||(n[0]=o=>t(d).groupId=o),placeholder:"请输入团号"},null,8,["modelValue"])]),_:1})]),_:1}),a(k,null,{default:r(()=>[a(D,{label:"供应商名称:"},{default:r(()=>[a(Y,{modelValue:t(d).supId,"onUpdate:modelValue":n[1]||(n[1]=o=>t(d).supId=o),options:t(m),"field-names":{label:"supName",value:"id"},"virtual-list-props":{height:200},"allow-search":"",placeholder:"请选择供应商名称"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(k,null,{default:r(()=>[a(D,{label:"出团日期:"},{default:r(()=>[a(R,{modelValue:t(d).startDate,"onUpdate:modelValue":n[2]||(n[2]=o=>t(d).startDate=o),class:"flex1",placeholder:"出团日期(开始)"},null,8,["modelValue"]),me,a(R,{modelValue:t(d).endDate,"onUpdate:modelValue":n[3]||(n[3]=o=>t(d).endDate=o),class:"flex1",placeholder:"出团日期(结束)"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),table:r(()=>[a(W,{"selected-keys":t(i).selectedKeys,"onUpdate:selectedKeys":n[4]||(n[4]=o=>t(i).selectedKeys=o),class:"zs-table","row-key":"id",data:t(b),"row-selection":t(i).rowSelection,bordered:t(i).bordered,pagination:t(i).pagination,size:t(i).size,columns:t(N),stripe:t(i).stripe,loading:t(B)},{groupId:r(({record:o})=>[G("span",{class:"text-link",onClick:X=>F(o)},oe(o.groupNo),9,ge)]),operate:r(({record:o})=>[a(Q,null,{default:r(()=>[a(J,{type:"text",status:"success",onClick:X=>l.$router.push(`/order/supplierSettlementManage/operate?id=${o.id}`)},{default:r(()=>[P("详情")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),t(I)==="ZsGroupOrder"?(V(),E(ce,{key:0,data:t(S),onClose:n[5]||(n[5]=o=>t(_)({},()=>t(x)(""))),onSuccess:t(v)},null,8,["data","onSuccess"])):le("",!0)])}}});export{we as default};
