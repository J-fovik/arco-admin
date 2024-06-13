import{a as z,n as p,X as T,d as E,q as Q,E as W,s as Z,v as ee,x as te,y as ae,r as d,o as f,e as le,g as t,w as a,c as e,z as S,l as V,i as b,f as Y,k as v,A as ne,S as I}from"./index-8a2cb146.js";import{A as oe}from"./options-aafac76d.js";import{G as re}from"./options-da313d68.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import"./index-2bbe694f.js";const de=()=>{const{getDictionaryItem:h}=z();return[{title:"姓名",dataIndex:"name",show:!0,align:"center",render:({record:r})=>p(r.name)},{title:"性别",dataIndex:"gender",show:!0,align:"center",render:({record:r})=>p(r.gender=="1"?"男":"女")},{title:"年龄",dataIndex:"age",show:!0,align:"center",render:({record:r})=>p(r.age)},{title:"手机号",dataIndex:"phone",show:!0,align:"center",render:({record:r})=>p(r.phone)},{title:"证件类型",dataIndex:"idtype",show:!0,align:"center",render:({record:r})=>p(h("IDType",r.idtype).detailName)},{title:"证件号码",dataIndex:"idnumber",show:!0,align:"center",render:({record:r})=>p(r.idnumber)},{title:"生日",dataIndex:"birthday",show:!0,align:"center",render:({record:r})=>T(r.birthday,"YYYY-MM-DD")},{title:"备注",dataIndex:"remark",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:r})=>p(r.remark)},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}]},ie=Y("span",{class:"mx-3"},"-",-1),ue=Y("span",{class:"mx-3"},"-",-1),me=E({name:"SystemCustomerManage"}),Ce=E({...me,setup(h){const{warningModal:r}=ne(),{getDictionaryInfo:N}=z(),{vAuthority:y}=Q(),[U,ce]=W(null),{form:n,resetForm:$}=Z(()=>({name:"",gender:"",ageStart:void 0,ageEnd:void 0,phone:"",idnumber:"",idtype:"",createTimeStart:"",createTimeEnd:""}),()=>w()),{selectRow:pe,columnsData:A,visibleColumnsData:K,tableBaseOptions:s,resetData:w,extendTableList:ge,setSelectRow:_e,changeTableColumn:R,changeTableSize:O}=ee(de(),()=>C()),x=i=>{let l="";i?l="确定操作当前数据吗？":l=`确定操作选中的${s.selectedKeys.length}数据吗？`,r(l,async g=>{const{err:u}=await v(()=>I.delCustomer({idList:i?[i]:s.selectedKeys}),{successMsg:"操作成功"});u||(g(!0),s.selectedKeys=[],C())})},{data:B,loading:L,initData:C}=te(async()=>{const{res:i,err:l}=await v(()=>I.getCustomerList({...n.value,createTimeStart:T(n.value.createTimeStart,"YYYYMMDD",""),createTimeEnd:T(n.value.createTimeEnd,"YYYYMMDD",""),currentPage:s.pagination.current,pageSize:s.pagination.pageSize,pagingOrNot:"1"}));return l?[]:(s.pagination.total=i.data.totalCount,i.data.dataList)});return ae(C),(i,l)=>{const g=d("a-input"),u=d("a-form-item"),c=d("a-grid-item"),M=d("a-select"),D=d("a-input-number"),k=d("a-date-picker"),P=d("a-grid"),q=d("a-form"),F=d("icon-plus"),_=d("a-button"),G=d("router-link"),X=d("icon-close"),j=d("a-space"),H=d("a-button-group"),J=d("a-table");return f(),le("div",null,[t(se,{fold:"","table-columns":e(A),"table-size":e(s).size,onResetSearch:e($),onSearch:e(w),onChangeTableSize:e(O),onChangeTableColumn:e(R)},{form:a(({collapsed:m})=>[t(q,{model:e(n),"label-align":"left",size:"large","auto-label-width":""},{default:a(()=>[t(P,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!m},{default:a(()=>[t(c,null,{default:a(()=>[t(u,{label:"姓名:"},{default:a(()=>[t(g,{modelValue:e(n).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(n).name=o),modelModifiers:{trim:!0},placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"性别:"},{default:a(()=>[t(M,{modelValue:e(n).gender,"onUpdate:modelValue":l[1]||(l[1]=o=>e(n).gender=o),options:[...e(oe),...e(re)]},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"年龄:"},{default:a(()=>[t(D,{precision:0,modelValue:e(n).ageStart,"onUpdate:modelValue":l[2]||(l[2]=o=>e(n).ageStart=o),modelModifiers:{trim:!0},placeholder:"请输入开始年龄"},null,8,["modelValue"]),ie,t(D,{precision:0,modelValue:e(n).ageEnd,"onUpdate:modelValue":l[3]||(l[3]=o=>e(n).ageEnd=o),modelModifiers:{trim:!0},placeholder:"请输入结束年龄"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"手机号:"},{default:a(()=>[t(g,{modelValue:e(n).phone,"onUpdate:modelValue":l[4]||(l[4]=o=>e(n).phone=o),modelModifiers:{trim:!0},placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"证件类型:"},{default:a(()=>[t(M,{modelValue:e(n).idtype,"onUpdate:modelValue":l[5]||(l[5]=o=>e(n).idtype=o),options:e(N)("IDType"),"field-names":{label:"detailName",value:"detailCode"},placeholder:"请选择证件类型"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"证件号码:"},{default:a(()=>[t(g,{modelValue:e(n).idnumber,"onUpdate:modelValue":l[6]||(l[6]=o=>e(n).idnumber=o),modelModifiers:{trim:!0},placeholder:"请输入证件号码"},null,8,["modelValue"])]),_:1})]),_:1}),t(c,null,{default:a(()=>[t(u,{label:"创建日期:"},{default:a(()=>[t(k,{modelValue:e(n).createTimeStart,"onUpdate:modelValue":l[7]||(l[7]=o=>e(n).createTimeStart=o),class:"flex1",placeholder:"请选择创建日期开始"},null,8,["modelValue"]),ue,t(k,{modelValue:e(n).createTimeEnd,"onUpdate:modelValue":l[8]||(l[8]=o=>e(n).createTimeEnd=o),class:"flex1",placeholder:"请选择创建日期结束"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),operate:a(()=>[t(j,null,{default:a(()=>[t(G,{to:"/system/customerManage/operate"},{default:a(()=>[S((f(),V(_,{type:"outline"},{icon:a(()=>[t(F)]),default:a(()=>[b(" 新增 ")]),_:1})),[[e(y),"SystemCustomerManageAdd"]])]),_:1}),S((f(),V(_,{type:"outline",status:"danger",disabled:!e(s).selectedKeys.length,loading:e(U)==="删除",onClick:l[9]||(l[9]=m=>x())},{icon:a(()=>[t(X)]),default:a(()=>[b(" 删除 ")]),_:1},8,["disabled","loading"])),[[e(y),"SystemCustomerManageDel"]])]),_:1})]),table:a(()=>[t(J,{"selected-keys":e(s).selectedKeys,"onUpdate:selectedKeys":l[10]||(l[10]=m=>e(s).selectedKeys=m),class:"zs-table","row-key":"id",data:e(B),"row-selection":e(s).rowSelection,bordered:e(s).bordered,pagination:e(s).pagination,size:e(s).size,columns:e(K),stripe:e(s).stripe,loading:e(L)},{operate:a(({record:m})=>[t(H,null,{default:a(()=>[t(_,{type:"text",status:"success",onClick:o=>i.$router.push(`/system/customerManage/operate?id=${m.id}&isReadOnly=true`)},{default:a(()=>[b("详情")]),_:2},1032,["onClick"]),S((f(),V(_,{type:"text",status:"danger",onClick:o=>x(m.id)},{default:a(()=>[b("删除")]),_:2},1032,["onClick"])),[[e(y),"SystemCustomerManageDel"]]),S((f(),V(_,{type:"text",onClick:o=>i.$router.push(`/system/customerManage/operate?id=${m.id}`)},{default:a(()=>[b("编辑")]),_:2},1032,["onClick"])),[[e(y),"SystemCustomerManageEdit"]])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{Ce as default};
