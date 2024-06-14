import{d as x,u as Z,C as G,a as H,E as W,s as X,M as J,I as T,r as d,o as N,l as w,w as n,g as l,c as o,f as D,i as S,h as Q,k as f,G as $,H as ee,X as L,Y as ae,_ as te}from"./index-8a2cb146.js";import{p as oe,l as le}from"./rules-4aeaef32.js";import{Z as ne}from"./index-2bbe694f.js";import{T as q}from"./ticket-f7c21268.js";const ie=c=>($("data-v-d731eac2"),c=c(),ee(),c),re=ie(()=>D("div",{style:{height:"100px"}},null,-1)),de={class:"orderSubmit-footer box-flex jc-fe"},se=x({name:"TicketCooperateManageOperate"}),ue=x({...se,setup(c){const u=Z(),{jumpTabName:_}=G();H();const[P,C]=W(null),{form:e,formRef:v}=X(()=>({planeTicketName:"",planeTicketContacts:"",planeTicketContactsPhone:void 0,country:"",countryCode:"",province:"",provinceCode:"",city:"",cityCode:"",periodCooperateEnd:"",periodCooperateStart:"",fileList:[]})),I={planeTicketName:{required:!0,message:"请输入供应商名称"},planeTicketContacts:{required:!0,message:"请输入联系人"},planeTicketContactsPhone:{required:!0,validator:(t,a)=>{t||a("请输入手机号码"),!oe(t)&&!le(t)&&a("请输入正确的手机号码")}},countryCode:{required:!0,message:"请输入所属国家"},periodCooperateStart:{required:!0,message:"请选择合作期限开始日期"},periodCooperateEnd:{required:!0,message:"请选择合作期限结束日期"},fileList:{required:!0,message:"请上传合作详情文件"}},p=async t=>{const{res:a}=await f(()=>ae.getAreaInfo(t));return(a==null?void 0:a.data)??[]},{data:y}=J(async()=>await p({level:"1"}),[]),{data:g}=T(async()=>await p({parentNo:e.value.countryCode}),{watchSource:()=>e.value.countryCode,defaultValue:[]}),{data:b}=T(async()=>await p({parentNo:e.value.provinceCode}),{watchSource:()=>e.value.provinceCode,defaultValue:[]}),M=t=>{e.value.provinceCode="",e.value.province="",e.value.cityCode="",e.value.city="",e.value.country=y.value.find(a=>a.areaNo==t).areaName},U=t=>{e.value.cityCode="",e.value.city="",e.value.province=g.value.find(a=>a.areaNo==t).areaName},E=t=>{e.value.city=b.value.find(a=>a.areaNo==t).areaName},R=()=>{v.value.validate(t=>{t||Y()})},Y=async()=>{const t=e.value.fileList.filter(i=>i.status!="done").map(i=>i.file),a=e.value.fileList.filter(i=>i.status=="done").map(i=>i.uid),{err:s}=await f(()=>q.planeTicketSave({...e.value,periodCooperateStart:L(e.value.periodCooperateStart,"YYYYMMDD",""),periodCooperateEnd:L(e.value.periodCooperateEnd,"YYYYMMDD",""),fileList:t.length==0?null:t,oldFileIdList:a}),{before:()=>C("okLoading"),after:()=>C(null),successMsg:"保存成功"});s||_()},A=async()=>{const{res:t,err:a}=await f(()=>q.getTicketDetail({id:u.query.id}));a||(e.value={...t==null?void 0:t.data,planeTicketContactsPhone:(t==null?void 0:t.data.planeTicketContactsPhone)*1},e.value.fileList=t==null?void 0:t.data.cooperateDetailList.map(s=>({name:s.attName,size:s.attSize,url:s.attPath,uid:s.id,status:"done"})))};return u.query.id&&A(),(t,a)=>{const s=d("a-input"),i=d("a-form-item"),B=d("a-input-number"),m=d("a-select"),k=d("a-date-picker"),V=d("a-col"),O=d("a-row"),z=d("a-upload"),K=d("a-form"),j=d("a-card"),h=d("a-button"),F=d("a-space");return N(),w(ne,null,{default:n(()=>[l(j,{title:"机票合作信息维护",bordered:!1,class:"general-card"},{default:n(()=>[l(K,{ref_key:"formRef",ref:v,model:o(e),"label-align":"left",size:"large",style:{width:"800px","padding-left":"100px"},"auto-label-width":"",disabled:!!o(u).query.isReadOnly,rules:I},{default:n(()=>[l(i,{field:"planeTicketName",label:"供应商名称:",required:""},{default:n(()=>[l(s,{modelValue:o(e).planeTicketName,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).planeTicketName=r),modelModifiers:{trim:!0},placeholder:"请输入供应商名称"},null,8,["modelValue"])]),_:1}),l(i,{field:"planeTicketContacts",label:"联系人:",required:""},{default:n(()=>[l(s,{modelValue:o(e).planeTicketContacts,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).planeTicketContacts=r),modelModifiers:{trim:!0},placeholder:"请输入联系人"},null,8,["modelValue"])]),_:1}),l(i,{field:"planeTicketContactsPhone",label:"联系电话:",required:""},{default:n(()=>[l(B,{modelValue:o(e).planeTicketContactsPhone,"onUpdate:modelValue":a[2]||(a[2]=r=>o(e).planeTicketContactsPhone=r),modelModifiers:{trim:!0},placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),l(i,{label:"所属国家:",field:"countryCode",required:""},{default:n(()=>[l(m,{modelValue:o(e).countryCode,"onUpdate:modelValue":a[3]||(a[3]=r=>o(e).countryCode=r),"allow-search":"",options:o(y),"field-names":{label:"areaName",value:"areaNo"},"virtual-list-props":{height:200},placeholder:"请选择所属国家",onChange:M},null,8,["modelValue","options"])]),_:1}),l(i,{label:"所属省:",field:"provinceCode"},{default:n(()=>[l(m,{modelValue:o(e).provinceCode,"onUpdate:modelValue":a[4]||(a[4]=r=>o(e).provinceCode=r),options:o(g),"field-names":{label:"areaName",value:"areaNo"},"allow-search":"",placeholder:"请选择所属省",onChange:U},null,8,["modelValue","options"])]),_:1}),l(i,{label:"所属市:",field:"cityCode"},{default:n(()=>[l(m,{modelValue:o(e).cityCode,"onUpdate:modelValue":a[5]||(a[5]=r=>o(e).cityCode=r),options:o(b),"field-names":{label:"areaName",value:"areaNo"},"allow-search":"",placeholder:"请选择所属市",onChange:E},null,8,["modelValue","options"])]),_:1}),l(O,{gutter:8},{default:n(()=>[l(V,{span:12},{default:n(()=>[l(i,{field:"periodCooperateStart",label:"合作期限开始:"},{default:n(()=>[l(k,{modelValue:o(e).periodCooperateStart,"onUpdate:modelValue":a[6]||(a[6]=r=>o(e).periodCooperateStart=r),class:"flex1"},null,8,["modelValue"])]),_:1})]),_:1}),l(V,{span:12},{default:n(()=>[l(i,{field:"periodCooperateEnd",label:"合作期限结束:"},{default:n(()=>[l(k,{modelValue:o(e).periodCooperateEnd,"onUpdate:modelValue":a[7]||(a[7]=r=>o(e).periodCooperateEnd=r),class:"flex1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i,{label:"合作详情:",field:"fileList"},{default:n(()=>[l(z,{"file-list":o(e).fileList,"onUpdate:fileList":a[8]||(a[8]=r=>o(e).fileList=r),"auto-upload":!1,accept:".pdf",limit:1,multiple:"",draggable:"","show-retry-button":!1,"show-remove-button":!o(u).query.isReadOnly},null,8,["file-list","show-remove-button"])]),_:1})]),_:1},8,["model","disabled"])]),_:1}),re,D("div",de,[l(F,null,{default:n(()=>[o(u).query.isReadOnly?Q("",!0):(N(),w(h,{key:0,loading:o(P)==="okLoading",type:"primary",onClick:R},{default:n(()=>[S("确定")]),_:1},8,["loading"])),l(h,{onClick:a[9]||(a[9]=()=>o(_)())},{default:n(()=>[S("返回")]),_:1})]),_:1})])]),_:1})}}});const _e=te(ue,[["__scopeId","data-v-d731eac2"]]);export{_e as default};