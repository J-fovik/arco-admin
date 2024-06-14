import{d as D,u as Y,C as Z,a as z,E as F,s as G,D as R,r as u,o as S,l as w,w as d,g as o,i as g,c as a,f as I,h as H,k as f,G as J,H as Q,S as _,_ as W}from"./index-8a2cb146.js";import{i as X,o as $,a as ee,e as ae}from"./rules-4aeaef32.js";import{D as le}from"./options-1badfbbd.js";import{Z as oe}from"./index-2bbe694f.js";const te=c=>(J("data-v-5118a9ad"),c=c(),Q(),c),re=te(()=>I("div",{style:{height:"100px"}},null,-1)),de={class:"orderSubmit-footer box-flex jc-fe"},se=D({name:"SystemUserOperate"}),ue=D({...se,setup(c){const i=Y(),{jumpTabName:v}=Z(),{getDictionaryInfo:M}=z(),[k,C]=F(null),{form:l,formRef:T,formPlaceholder:n}=G(()=>({userAccount:"",departType:"0",roleCode:"",departCode:"",username:"",certType:"",cardId:"",address:"",email:"",mobile:"",remark:""})),A={userAccount:{required:!0,message:"请输入登录账号"},roleCode:{required:!0,message:"请选择角色"},departCode:{required:!0,message:"请选择组织机构"},username:{required:!0,message:"请输入姓名"},cardId:{required:!1,validator:(t,e)=>{l.value.certType==="1"&&t&&!X(t)&&e("请输入正确的身份证号"),l.value.certType==="2"&&t&&!$(t)&&e("请输入正确的士官证"),l.value.certType==="4"&&t&&!ee(t)&&e("请输入正确的护照")}},email:{required:!1,validator:(t,e)=>{t&&!ae(t)&&e("请输入正确的邮箱")}}},q=R([]),x=R([]),y=async()=>{const{err:t,res:e}=await f(()=>_.getSupplierRole({departType:l.value.departType}));t||(x.value=e==null?void 0:e.data.map(p=>({label:p.rolename,value:p.roleCode})))},V=async()=>{const{err:t,res:e}=await f(()=>_.getDepartmentList({departType:l.value.departType}));t||(q.value=e==null?void 0:e.data.map(p=>({label:p.name,value:p.code})))},N=async()=>{const{res:t,err:e}=await f(()=>_.getUserDetail({id:i.query.id}));e||(l.value=t==null?void 0:t.data,V(),y())},E=()=>{T.value.validate(t=>{t||(i.query.id?U("editUser"):U("addUser"))})},U=async t=>{const{err:e}=await f(()=>_[t]({...l.value,id:i.query.id??""}),{before:()=>C("确定"),after:()=>C(null),successMsg:"保存成功"});e||v()},L=t=>{l.value.departType=t,l.value.departCode="",l.value.roleCode="",V(),y()};return i.query.id?N():(V(),y()),(t,e)=>{const p=u("a-alert"),m=u("a-input"),s=u("a-form-item"),O=u("a-radio-group"),b=u("a-select"),P=u("a-textarea"),B=u("a-form"),j=u("a-card"),h=u("a-button"),K=u("a-space");return S(),w(oe,null,{default:d(()=>[o(j,{title:"用户详情",bordered:!1,class:"general-card"},{extra:d(()=>[o(p,{type:"warning"},{default:d(()=>[g("默认密码:登录帐号加上123，例:admin123 ")]),_:1})]),default:d(()=>[o(B,{ref_key:"formRef",ref:T,model:a(l),"label-align":"left",size:"large",style:{width:"800px","padding-left":"100px"},"auto-label-width":"",disabled:!!a(i).query.isReadOnly,rules:A},{default:d(()=>[o(s,{label:"登录账号:",field:"userAccount",required:""},{default:d(()=>[o(m,{modelValue:a(l).userAccount,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).userAccount=r),modelModifiers:{trim:!0},readonly:!!a(i).query.id,placeholder:a(n)("请输入登录账号")},null,8,["modelValue","readonly","placeholder"])]),_:1}),o(s,{label:"部门类型:",field:"departType",required:""},{default:d(()=>[o(O,{"model-value":a(l).departType,options:a(le),onChange:L},null,8,["model-value","options"])]),_:1}),o(s,{label:"角色:",field:"roleCode",required:""},{default:d(()=>[o(b,{modelValue:a(l).roleCode,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).roleCode=r),"allow-search":"",options:x.value,placeholder:a(n)("请选择角色")},null,8,["modelValue","options","placeholder"])]),_:1}),o(s,{label:"组织机构:",field:"departCode",required:""},{default:d(()=>[o(b,{modelValue:a(l).departCode,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).departCode=r),"allow-search":"",options:q.value,placeholder:a(n)("请选择组织机构")},null,8,["modelValue","options","placeholder"])]),_:1}),o(s,{label:"姓名:",field:"username",required:""},{default:d(()=>[o(m,{modelValue:a(l).username,"onUpdate:modelValue":e[3]||(e[3]=r=>a(l).username=r),modelModifiers:{trim:!0},placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),o(s,{label:"证件类型:",field:"certType"},{default:d(()=>[o(b,{modelValue:a(l).certType,"onUpdate:modelValue":e[4]||(e[4]=r=>a(l).certType=r),options:a(M)("IDType"),"field-names":{label:"detailName",value:"detailCode"},placeholder:a(n)("请选择证件类型")},null,8,["modelValue","options","placeholder"])]),_:1}),o(s,{label:"证件号码:",field:"cardId"},{default:d(()=>[o(m,{modelValue:a(l).cardId,"onUpdate:modelValue":e[5]||(e[5]=r=>a(l).cardId=r),modelModifiers:{trim:!0},placeholder:a(n)("请输入证件号码")},null,8,["modelValue","placeholder"])]),_:1}),o(s,{label:"地址:",field:"address"},{default:d(()=>[o(m,{modelValue:a(l).address,"onUpdate:modelValue":e[6]||(e[6]=r=>a(l).address=r),modelModifiers:{trim:!0},placeholder:a(n)("请输入地址")},null,8,["modelValue","placeholder"])]),_:1}),o(s,{label:"邮箱:",field:"email"},{default:d(()=>[o(m,{modelValue:a(l).email,"onUpdate:modelValue":e[7]||(e[7]=r=>a(l).email=r),modelModifiers:{trim:!0},placeholder:a(n)("请输入邮箱")},null,8,["modelValue","placeholder"])]),_:1}),o(s,{label:"联系方式:",field:"mobile"},{default:d(()=>[o(m,{modelValue:a(l).mobile,"onUpdate:modelValue":e[8]||(e[8]=r=>a(l).mobile=r),modelModifiers:{trim:!0},placeholder:a(n)("请输入联系方式")},null,8,["modelValue","placeholder"])]),_:1}),o(s,{field:"remark",label:"备注:"},{default:d(()=>[o(P,{modelValue:a(l).remark,"onUpdate:modelValue":e[9]||(e[9]=r=>a(l).remark=r),modelModifiers:{trim:!0},"max-length":200,placeholder:a(n)("请输入备注")},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["model","disabled"])]),_:1}),re,I("div",de,[o(K,null,{default:d(()=>[a(i).query.isReadOnly?H("",!0):(S(),w(h,{key:0,type:"primary",loading:a(k)==="确定",onClick:E},{default:d(()=>[g("确定")]),_:1},8,["loading"])),o(h,{onClick:e[10]||(e[10]=()=>a(v)())},{default:d(()=>[g("返回")]),_:1})]),_:1})])]),_:1})}}});const ce=W(ue,[["__scopeId","data-v-5118a9ad"]]);export{ce as default};