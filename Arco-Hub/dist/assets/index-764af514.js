import{a as S,n as p,X as M,p as _,O as f,d as T,q as P,s as F,v as E,M as X,x as j,y as H,r as d,o as y,e as J,g as a,w as l,c as e,i as h,t as W,z as Z,l as ee,h as te,f as ae,k as V}from"./index-8a2cb146.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import{Q as D}from"./quitGroup-313e3abb.js";import"./index-2bbe694f.js";const oe=()=>{const{getDictionaryItem:g}=S();return[{title:"编号",dataIndex:"routeId",show:!0,align:"center",render:({record:t})=>p(t.routeId)},{title:"团号",dataIndex:"signupNo",show:!0,align:"center",ellipsis:!0,tooltip:!0,slotName:"signupNo"},{title:"线路名称",dataIndex:"routeName",show:!0,align:"center",ellipsis:!0,tooltip:!0,render:({record:t})=>p(t.routeName)},{title:"报名营业部",dataIndex:"departName",show:!0,align:"center",ellipsis:!0,tooltip:!0,render:({record:t})=>p(t.departName)},{title:"供应商名称",dataIndex:"supName",show:!0,align:"center",render:({record:t})=>p(t.supName)},{title:"创建日期",dataIndex:"createTime",show:!0,align:"center",render:({record:t})=>p(M(t.createTime,"YYYY-MM-DD"))},{title:"退团人数",dataIndex:"outNum",show:!0,align:"right",render:({record:t})=>p(t.outNum)},{title:"订单同行总费用",dataIndex:"supsigCost",show:!0,align:"right",render:({record:t})=>_("span",{class:"text-red text-price"},f(`${t.supsigCost??"0"}`))},{title:"退团同行总金额",dataIndex:"settleTotal",show:!0,align:"right",render:({record:t})=>_("span",{class:"text-red text-price"},f(`${t.settleTotal??"0"}`))},{title:"订单剩余金额",dataIndex:"sigRemainingCost",show:!0,align:"right",render:({record:t})=>_("span",{class:"text-red text-price"},f(`${t.sigRemainingCost??"0"}`))},{title:"退团类型",dataIndex:"signoutType",show:!0,align:"center",render:({record:t})=>p(g("new_quit_type",t.signoutType).detailName)},{title:"退团状态",dataIndex:"state",show:!0,align:"center",render:({record:t})=>p(g("signoutOrderState",t.state).detailName)},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"left"}]},ne=ae("span",{class:"mx-3"},"-",-1),se=T({name:"QuitGroupSupplierQuit"}),pe=T({...se,setup(g){const{getDictionaryInfo:t}=S(),{vAuthority:$}=P(),{form:s,resetForm:k}=F(()=>({groupId:"",routeName:"",supName:"",state:"",startDate:"",endDate:""}),()=>b()),{columnsData:v,visibleColumnsData:z,tableBaseOptions:u,resetData:b,extendTableList:Q,changeTableColumn:U,changeTableSize:q}=E(oe(),()=>N()),{data:G}=X(async()=>{const{res:i}=await V(()=>D.getSupplierSelectList({}));return(i==null?void 0:i.data)??[]},[]),{data:R,loading:A,initData:N}=j(async()=>{const{res:i,err:o}=await V(()=>D.getSupplierQuitGroupList({...s.value,currentPage:u.pagination.current,pageSize:u.pagination.pageSize,pagingOrNot:"1"}));return o?[]:(u.pagination.total=i.data.totalCount,Q(i==null?void 0:i.data.signoutRecordList))});return H(N),(i,o)=>{const x=d("a-input"),m=d("a-form-item"),c=d("a-grid-item"),w=d("a-select"),C=d("a-date-picker"),B=d("a-grid"),L=d("a-form"),O=d("a-link"),I=d("a-button"),Y=d("a-button-group"),K=d("a-table");return y(),J("div",null,[a(le,{fold:"","table-columns":e(v),"table-size":e(u).size,onResetSearch:e(k),onSearch:e(b),onChangeTableSize:e(q),onChangeTableColumn:e(U)},{form:l(({collapsed:n})=>[a(L,{model:e(s),"label-align":"left",size:"large","auto-label-width":""},{default:l(()=>[a(B,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!n},{default:l(()=>[a(c,null,{default:l(()=>[a(m,{field:"groupId",label:"团号:"},{default:l(()=>[a(x,{modelValue:e(s).groupId,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).groupId=r),placeholder:"请输入团号"},null,8,["modelValue"])]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(m,{field:"routeName",label:"线路名称:"},{default:l(()=>[a(x,{modelValue:e(s).routeName,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).routeName=r),placeholder:"请输入线路名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(m,{field:"supName",label:"供应商名称:"},{default:l(()=>[a(w,{modelValue:e(s).supName,"onUpdate:modelValue":o[2]||(o[2]=r=>e(s).supName=r),options:e(G),"allow-search":"","field-names":{label:"supName",value:"supName"},"virtual-list-props":{height:200},placeholder:"请选择"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(m,{field:"code",label:"订单状态:"},{default:l(()=>[a(w,{modelValue:e(s).state,"onUpdate:modelValue":o[3]||(o[3]=r=>e(s).state=r),options:e(t)("new_quit_group_state"),"field-names":{label:"detailName",value:"detailCode"},placeholder:"请选择"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(m,{label:"出团日期:"},{default:l(()=>[a(C,{modelValue:e(s).startDate,"onUpdate:modelValue":o[4]||(o[4]=r=>e(s).startDate=r),class:"flex1",placeholder:"出团日期(开始)"},null,8,["modelValue"]),ne,a(C,{modelValue:e(s).endDate,"onUpdate:modelValue":o[5]||(o[5]=r=>e(s).endDate=r),class:"flex1",placeholder:"出团日期(结束)"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),table:l(()=>[a(K,{"selected-keys":e(u).selectedKeys,"onUpdate:selectedKeys":o[6]||(o[6]=n=>e(u).selectedKeys=n),class:"zs-table","row-key":"id",data:e(R),"row-selection":e(u).rowSelection,bordered:e(u).bordered,pagination:e(u).pagination,size:e(u).size,columns:e(z),stripe:e(u).stripe,loading:e(A)},{signupNo:l(({record:n})=>[a(O,{onClick:r=>i.$router.push(`/quitGroup/supplierQuit/confirm?id=${n.id}&groupId=${n.signupNo}&state=${n.state}`)},{default:l(()=>[h(W(n.signupNo),1)]),_:2},1032,["onClick"])]),operate:l(({record:n})=>[a(Y,null,{default:l(()=>[a(I,{type:"text",status:"success",onClick:r=>i.$router.push(`/quitGroup/supplierQuit/operate?id=${n.id}&groupId=${n.signupNo}&state=${n.state}`)},{default:l(()=>[h("详情")]),_:2},1032,["onClick"]),n.state==="02"?Z((y(),ee(I,{key:0,type:"text",onClick:r=>i.$router.push(`/quitGroup/supplierQuit/confirm?id=${n.id}&groupId=${n.signupNo}&state=${n.state}&isConfirm=true`)},{default:l(()=>[h("供应商确定")]),_:2},1032,["onClick"])),[[e($),"QuitGroupSupplierQuitConfirm"]]):te("",!0)]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{pe as default};
