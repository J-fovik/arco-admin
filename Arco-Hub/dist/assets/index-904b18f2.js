import{a as q,n as p,p as O,O as M,P as A,d as z,E as j,v as H,b as P,r as d,o as g,l as v,w as l,g as a,c as e,k as R,s as J,_ as de,q as pe,R as ce,y as me,e as G,z as B,i as S,f as Q,t as ge,h as $,A as fe,S as _e}from"./index-8a2cb146.js";import{_ as ye}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import{F as be}from"./finance-4d2c7da5.js";import{O as E}from"./order-70291d37.js";import"./index-2bbe694f.js";const we=()=>{const{getDictionaryItem:b}=q();return[{title:"团号",dataIndex:"groupId",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.groupId)},{title:"供应商",dataIndex:"supName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.supName)},{title:"营业部名称",dataIndex:"departName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.departName)},{title:"线路名称",dataIndex:"routeName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.routeName)},{title:"人数",dataIndex:"totalNumber",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.totalNumber)},{title:"结算控制",width:150,slotName:"switch",show:!0,align:"center"},{title:"订单同行费",dataIndex:"settleTotal",show:!0,align:"right",width:120,render:({record:t})=>O("span",{class:"text-red text-price"},M(A(t.settleTotal)))},{title:"扣点（%）",dataIndex:"ratio",show:!0,align:"right",render:({record:t})=>O("span",{class:"text-green"},p(t.ratio+"%"))},{title:"供应商金额",dataIndex:"setMoney",show:!0,align:"right",render:({record:t})=>O("span",{class:"text-red text-price"},M(A(t.setMoney)))},{title:"已结算金额",dataIndex:"setValue",show:!0,align:"right",render:({record:t})=>O("span",{class:"text-red text-price"},M(A(t.setValue)))},{title:"结算状态",dataIndex:"settleType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(b("signupSettleType",t.settleType).detailName)},{title:"剩余天数",dataIndex:"setdays",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.setdays)},{title:"创建时间",dataIndex:"createTimeStr",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.createTimeStr)},{title:"操作",width:300,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}]},xe=()=>{const{getDictionaryItem:b}=q();return[{title:"付款账户名称",dataIndex:"payUserName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.payUserName)},{title:"付款账户",dataIndex:"payNum",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.payNum)},{title:"收款账户名称",dataIndex:"receiveUserName",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.receiveUserName)},{title:"收款账户",dataIndex:"receiveNum",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.receiveNum)},{title:"结算金额",dataIndex:"money",show:!0,ellipsis:!0,tooltip:!0,align:"right",render:({record:t})=>O("span",{class:"text-red text-price"},M(A(t.money)))},{title:"手续费",dataIndex:"sxf",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>O("span",{class:"text-red text-price"},M(A(t.sxf)))},{title:"费用分类",dataIndex:"costType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.costType=="1"?"订单费用":t.costType=="2"?"保险费用":"")},{title:"结算状态",dataIndex:"settleType",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(b("signupSettleType",t.settleType).detailName)},{title:"结算方式",dataIndex:"setMode",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.setMode=="1"?"自动":"手动")},{title:"交易流水号",dataIndex:"pylsh",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.pylsh)},{title:"交易时间",dataIndex:"createTime",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:t})=>p(t.createTime)}]},Ie=z({name:"ZsSettlementRecords"}),he=z({...Ie,props:{data:{default:()=>({})}},emits:["close","success"],setup(b,{emit:t}){const f=b,[N,V]=j(null),m=t,{visibleColumnsData:w,tableBaseOptions:o,extendTableList:F}=H(xe(),()=>x()),{data:T,loading:C,initData:x}=P(async()=>{const{res:c,err:r}=await R(()=>be.getSettleRecordList({groupNo:f.data.groupId,supName:f.data.supName}));return r?[]:(o.pagination.total=c.data.totalCount,c==null?void 0:c.data.dataList)});return(c,r)=>{const D=d("a-table"),_=d("a-modal");return g(),v(_,{title:"结算记录","unmount-on-close":"",visible:"","align-center":!1,"mask-closable":!1,"ok-loading":e(N)==="okLoading",top:"10%",width:"80vw","ok-text":"返回",onCancel:r[1]||(r[1]=k=>m("close")),onOk:r[2]||(r[2]=k=>m("close"))},{default:l(()=>[a(D,{"selected-keys":e(o).selectedKeys,"onUpdate:selectedKeys":r[0]||(r[0]=k=>e(o).selectedKeys=k),class:"zs-table","row-key":"groupId",data:e(T),"row-selection":e(o).rowSelection,bordered:e(o).bordered,pagination:e(o).pagination,size:e(o).size,columns:e(w),stripe:e(o).stripe,loading:e(C)},null,8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["ok-loading"])}}}),ve=z({name:"ZsExamineSettlement"}),Ne=z({...ve,props:{data:{default:()=>({})}},emits:["close","success"],setup(b,{emit:t}){const f=b,N=t,[V,m]=j(null),{form:w,formRef:o}=J(()=>({fileList:[]})),F={fileList:{required:!0,message:"请选择汇款凭证"}},T=()=>{o.value.validate(x=>{x||C()})},C=async()=>{const{err:x}=await R(()=>E.uploadVoucherImg({settleId:f.data.settleId,fileList:w.value.fileList.map(c=>c.file)}),{before:()=>m("okLoading"),after:()=>m(""),successMsg:"操作成功"});x||(N("success"),N("close"))};return(x,c)=>{const r=d("a-upload"),D=d("a-form-item"),_=d("a-form"),k=d("a-modal");return g(),v(k,{width:"600px",top:"10%","unmount-on-close":"",visible:"","align-center":!1,title:"上传汇款凭证","mask-closable":!1,"ok-loading":e(V)==="okLoading",onCancel:c[1]||(c[1]=K=>N("close")),onOk:T},{default:l(()=>[a(_,{ref_key:"formRef",ref:o,model:e(w),"label-align":"left",size:"large","auto-label-width":"",rules:F},{default:l(()=>[a(D,{field:"applyDesc",label:"上传汇款凭证:"},{default:l(()=>[a(r,{"file-list":e(w).fileList,"onUpdate:fileList":c[0]||(c[0]=K=>e(w).fileList=K),accept:".png,.jpg,",multiple:"","auto-upload":!1,"show-retry-button":!1,"show-link":!1},null,8,["file-list"])]),_:1})]),_:1},8,["model"])]),_:1},8,["ok-loading"])}}});const ke=de(Ne,[["__scopeId","data-v-5da87bfa"]]),Se=Q("span",{class:"mx-3"},"-",-1),Ve={key:0},Te=z({name:"OrderFinanceManage"}),ze=z({...Te,setup(b){const{getDictionaryInfo:t}=q(),{vAuthority:f,userInfo:N}=pe(),[V,m]=j(null),{warningModal:w}=fe(),{form:o,resetForm:F}=J(()=>({groupId:"",routeName:"",supId:"",settleType:"",departName:"",departNo:"",areaNo:"",startDate:"",endDate:""}),()=>D()),T=ce([]),{selectRow:C,columnsData:x,visibleColumnsData:c,tableBaseOptions:r,resetData:D,setSelectRow:_,changeTableColumn:k,changeTableSize:K}=H(we(),()=>U()),{data:W}=P(async()=>{const{res:u,err:n}=await R(()=>_e.getSupplierList({pagingOrNot:"0"}));return n?[]:u==null?void 0:u.data.supplierList},[]),X=async u=>{const{err:n}=await R(()=>E.pauseOrRestoreSettle({groupId:u.groupId,pauseOrRestore:u.pauseOrRestore=="1"?"0":"1"}),{before:()=>m(u.id),after:()=>m(null),successMsg:"操作成功"});n||U()},ee=u=>{w("确定已开客人发票吗?",async n=>{const{res:y}=await R(()=>E.openCustomerInvoice({groupId:u.groupId}),{successMsg:"操作成功"});n(!0),y&&U()})},{data:te,loading:ae,initData:U}=P(async()=>{const{res:u,err:n}=await R(()=>E.getFinanceList({...o.value,currentPage:r.pagination.current,pageSize:r.pagination.pageSize,pagingOrNot:"1"}));return n?[]:(r.pagination.total=u.data.totalCount,T.value=u==null?void 0:u.data.areaList,u==null?void 0:u.data.dataList.map(y=>({...y,disabled:y.settleType!=="6"})))});return me(U),(u,n)=>{const y=d("a-input"),I=d("a-form-item"),h=d("a-grid-item"),Z=d("a-select"),Y=d("a-date-picker"),le=d("a-grid"),oe=d("a-form"),ne=d("icon-download"),L=d("a-button"),se=d("a-space"),re=d("a-switch"),ie=d("a-button-group"),ue=d("a-table");return g(),G("div",null,[a(ye,{fold:"","table-columns":e(x),"table-size":e(r).size,onResetSearch:e(F),onSearch:e(D),onChangeTableSize:e(K),onChangeTableColumn:e(k)},{form:l(({collapsed:s})=>[a(oe,{model:e(o),"label-align":"left",size:"large","auto-label-width":""},{default:l(()=>[a(le,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!s},{default:l(()=>[a(h,null,{default:l(()=>[a(I,{field:"groupId",label:"团号:"},{default:l(()=>[a(y,{modelValue:e(o).groupId,"onUpdate:modelValue":n[0]||(n[0]=i=>e(o).groupId=i),placeholder:"请输入团号"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{field:"routeName",label:"线路名称:"},{default:l(()=>[a(y,{modelValue:e(o).routeName,"onUpdate:modelValue":n[1]||(n[1]=i=>e(o).routeName=i),placeholder:"请输入线路名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{label:"供应商名称:"},{default:l(()=>[a(Z,{modelValue:e(o).supId,"onUpdate:modelValue":n[2]||(n[2]=i=>e(o).supId=i),options:e(W),"field-names":{label:"supName",value:"id"},"virtual-list-props":{height:200},"allow-search":"",placeholder:"请选择供应商名称（可搜索）"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{label:"结算状态:"},{default:l(()=>[a(Z,{modelValue:e(o).settleType,"onUpdate:modelValue":n[3]||(n[3]=i=>e(o).settleType=i),placeholder:"请选择结算状态",options:e(t)("signupSettleType"),"field-names":{label:"detailName",value:"detailCode"}},null,8,["modelValue","options"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{label:"部门名称:"},{default:l(()=>[a(y,{modelValue:e(o).departName,"onUpdate:modelValue":n[4]||(n[4]=i=>e(o).departName=i),modelModifiers:{trim:!0},placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{label:"部门代码:"},{default:l(()=>[a(y,{modelValue:e(o).departNo,"onUpdate:modelValue":n[5]||(n[5]=i=>e(o).departNo=i),modelModifiers:{trim:!0},placeholder:"请输入部门代码"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{field:"areaNo",label:"地区:"},{default:l(()=>[a(Z,{modelValue:e(o).areaNo,"onUpdate:modelValue":n[6]||(n[6]=i=>e(o).areaNo=i),placeholder:"请选择地区",options:T.value,"field-names":{label:"cityName",value:"provinceCode"}},null,8,["modelValue","options"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(I,{label:"出团日期:"},{default:l(()=>[a(Y,{modelValue:e(o).startDate,"onUpdate:modelValue":n[7]||(n[7]=i=>e(o).startDate=i),class:"flex1",placeholder:"出团日期(开始)"},null,8,["modelValue"]),Se,a(Y,{modelValue:e(o).endDate,"onUpdate:modelValue":n[8]||(n[8]=i=>e(o).endDate=i),class:"flex1",placeholder:"出团日期(结束)"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),operate:l(()=>[a(se,null,{default:l(()=>[B((g(),v(L,{type:"outline",status:"success"},{icon:l(()=>[a(ne)]),default:l(()=>[S(" 导出订单 ")]),_:1})),[[e(f),"OrderFinanceManageExportOrder"]])]),_:1})]),table:l(()=>[a(ue,{"selected-keys":e(r).selectedKeys,"onUpdate:selectedKeys":n[9]||(n[9]=s=>e(r).selectedKeys=s),class:"zs-table","row-key":"groupId",data:e(te),"row-selection":e(r).rowSelection,bordered:e(r).bordered,pagination:e(r).pagination,size:e(r).size,columns:e(c),stripe:e(r).stripe,loading:e(ae)},{switch:l(({record:s})=>[Q("div",null,[a(re,{size:"medium","model-value":s.pauseOrRestore==="1",loading:e(V)===s.id,disabled:e(N).userAccount!=s.pauseSettleUser&&s.pauseOrRestore==="1"||s.settleType==="1",onChange:i=>X(s)},{checked:l(()=>[S("暂停 ")]),unchecked:l(()=>[S(" 恢复 ")]),_:2},1032,["model-value","loading","disabled","onChange"]),s.pauseOrRestore==="1"?(g(),G("div",Ve," 暂停人："+ge(s.pauseSettleUser),1)):$("",!0)])]),operate:l(({record:s})=>[a(ie,null,{default:l(()=>[a(L,{type:"text",status:"success",onClick:i=>u.$router.push(`/order/financeManage/operate/?routeId=${s.routeId}&groupId=${s.groupId}`)},{default:l(()=>[S("详情 ")]),_:2},1032,["onClick"]),s.settleType==="8"?B((g(),v(L,{key:0,type:"text",status:"warning",onClick:i=>e(_)(s,()=>e(m)("ZsUploadVoucher"))},{default:l(()=>[S("上传汇款凭证 ")]),_:2},1032,["onClick"])),[[e(f),"OrderFinanceManageUploadVoucher"]]):$("",!0),s.customerInvoiceFlag!="1"?B((g(),v(L,{key:1,type:"text",status:"danger",onClick:i=>e(_)(s,()=>ee(s))},{default:l(()=>[S("已开客人发票 ")]),_:2},1032,["onClick"])),[[e(f),"OrderFinanceManagePreviewInvoice"]]):$("",!0),B((g(),v(L,{type:"text",onClick:i=>e(_)(s,()=>e(m)("ZsSettlementRecords"))},{default:l(()=>[S("结算记录")]),_:2},1032,["onClick"])),[[e(f),"OrderFinanceManageRecord"]])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),e(V)==="ZsSettlementRecords"?(g(),v(he,{key:0,data:e(C),onSuccess:e(U),onClose:n[10]||(n[10]=s=>e(_)({},()=>e(m)(null)))},null,8,["data","onSuccess"])):$("",!0),e(V)==="ZsUploadVoucher"?(g(),v(ke,{key:1,data:e(C),onSuccess:e(U),onClose:n[11]||(n[11]=s=>e(_)({},()=>e(m)(null)))},null,8,["data","onSuccess"])):$("",!0)])}}});export{ze as default};
