import{d as P,g as L,h as j,i as $,r as s,o as N,l as E,w as a,a as l,b as e,e as k,m as O,n as W,j as X,c as ee,p as le,q as ae}from"./index-d007178a.js";import{f as U,c as te,_ as oe}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-430f1ffc.js";import{A as S}from"./options-aafac76d.js";import{P as F}from"./province-5d977221.js";import"./index-13860ba0.js";const ne=()=>[{title:"序号",width:80,dataIndex:"sortTableNo",show:!0,align:"center"},{title:"省份",dataIndex:"sf",show:!0,align:"center",render:({record:p})=>U(p.sf)},{title:"高考模式",dataIndex:"gkms",show:!0,align:"center",render:({record:p})=>U(p.gkms)},{title:"志愿模式",dataIndex:"zyms",show:!0,align:"center",render:({record:p})=>U(p.zyms)},{title:"查分入口",dataIndex:"cfrk",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:p})=>U(p.cfrk)},{title:"操作",width:100,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],h=[{label:"3+1+2",value:"3+1+2"},{label:"3+3",value:"3+3"},{label:"文理科",value:"文理科"}],B=[{label:"院校+专业",value:"院校+专业"},{label:"专业+院校",value:"专业+院校"},{label:"院校+专业组",value:"院校+专业组"}],se=P({name:"zsAddProfessionalSalary"}),de=P({...se,props:{data:{default:()=>({})}},emits:["close","success"],setup(p,{emit:T}){const y=p,D=L(),[R,m]=j(null),{form:o,formRef:C}=$(()=>({zyTjFlag:"0",newStart:"2025",...y.data})),q={sf:{required:!0,message:"请输入专业省份"},gkms:{required:!0,message:"请选择高考模式"},zyms:{required:!0,message:"请选择志愿模式/类型"},zycnt:{required:!0,message:"请输入志愿个数"},newstart:{required:!0,message:"请输入第一年新高考填志愿时间"},cfrk:{required:!0,message:"请输入查分入口"},cfDt:{required:!0,message:"请选择出分时间"},tbStartDt:{required:!0,message:"填报开始日期"},tbEndDt:{required:!0,message:"请选择填报结束日期"},sort:{required:!0,message:"请输入排序"},tbTmDesc:{required:!0,message:"请输入填报时间描述"}},K=()=>{C.value.validate(g=>{g||(y.data.id?r("editProvince"):r("addProvince"))})},r=async g=>{const{err:t}=await O(()=>F[g](o.value),{before:()=>m("okLoading"),after:()=>m(null)});t||(T("success"),T("close"))};return(g,t)=>{const w=s("a-select"),u=s("a-form-item"),i=s("a-grid-item"),I=s("a-year-picker"),z=s("a-date-picker"),x=s("a-input"),b=s("a-textarea"),_=s("a-radio"),d=s("a-radio-group"),V=s("a-grid"),f=s("a-form"),v=s("a-modal");return N(),E(v,{title:e(te)("省份配置",!!y.data.id),"unmount-on-close":"",visible:"",top:"5%",width:"1000px","align-center":!1,"mask-closable":!1,"ok-loading":e(R)==="okLoading",onCancel:t[15]||(t[15]=n=>T("close")),onOk:K},{default:a(()=>[l(f,{ref_key:"formRef",ref:C,model:e(o),"label-align":"left",size:"large","auto-label-width":"",rules:q},{default:a(()=>[l(V,{cols:2,"col-gap":24},{default:a(()=>[l(i,null,{default:a(()=>[l(u,{field:"sf",label:"省份:"},{default:a(()=>[l(w,{modelValue:e(o).sf,"onUpdate:modelValue":t[0]||(t[0]=n=>e(o).sf=n),placeholder:"请输入省份","allow-search":"",options:[...e(S),...e(D).provinceList]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"gkms",label:"高考模式:"},{default:a(()=>[l(w,{modelValue:e(o).gkms,"onUpdate:modelValue":t[1]||(t[1]=n=>e(o).gkms=n),placeholder:"请选择高考模式","allow-search":"",options:[...e(S),...e(h)]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"zyms",label:"志愿模式/类型:"},{default:a(()=>[l(w,{modelValue:e(o).zyms,"onUpdate:modelValue":t[2]||(t[2]=n=>e(o).zyms=n),placeholder:"请选择志愿模式/类型","allow-search":"",options:[...e(S),...e(B)]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"newStart",label:"第一年新高考填志愿时间:"},{default:a(()=>[l(I,{modelValue:e(o).newStart,"onUpdate:modelValue":t[3]||(t[3]=n=>e(o).newStart=n),class:"flex1",placeholder:"第一年新高考填志愿时间"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"gkDt",label:"高考开始日期:"},{default:a(()=>[l(z,{modelValue:e(o).gkDt,"onUpdate:modelValue":t[4]||(t[4]=n=>e(o).gkDt=n),class:"flex1",placeholder:"请选择高考开始日期"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"cfDt",label:"出分时间:"},{default:a(()=>[l(z,{modelValue:e(o).cfDt,"onUpdate:modelValue":t[5]||(t[5]=n=>e(o).cfDt=n),class:"flex1",placeholder:"请选择出分时间"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"cfrk",label:"查分入口:"},{default:a(()=>[l(x,{modelValue:e(o).cfrk,"onUpdate:modelValue":t[6]||(t[6]=n=>e(o).cfrk=n),placeholder:"请输入查分入口"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"tbStartDt",label:"填报开始日期:"},{default:a(()=>[l(z,{modelValue:e(o).tbStartDt,"onUpdate:modelValue":t[7]||(t[7]=n=>e(o).tbStartDt=n),class:"flex1",placeholder:"请选择填报开始日期"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"tbEndDt",label:"填报结束日期:"},{default:a(()=>[l(z,{modelValue:e(o).tbEndDt,"onUpdate:modelValue":t[8]||(t[8]=n=>e(o).tbEndDt=n),class:"flex1",placeholder:"请选择填报结束日期"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"tbTmDesc",label:"填报时间描述:"},{default:a(()=>[l(b,{modelValue:e(o).tbTmDesc,"onUpdate:modelValue":t[9]||(t[9]=n=>e(o).tbTmDesc=n),"auto-size":{minRows:2},placeholder:"请输入填报时间描述"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"zycnt",label:"志愿个数:"},{default:a(()=>[l(b,{modelValue:e(o).zycnt,"onUpdate:modelValue":t[10]||(t[10]=n=>e(o).zycnt=n),"auto-size":{minRows:2},placeholder:"请输入志愿个数"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"zyTjFlag",label:"专业是否允许调剂:"},{default:a(()=>[l(d,{modelValue:e(o).zyTjFlag,"onUpdate:modelValue":t[11]||(t[11]=n=>e(o).zyTjFlag=n)},{default:a(()=>[l(_,{value:"1"},{default:a(()=>[k("是")]),_:1}),l(_,{value:"0"},{default:a(()=>[k("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{label:"填报入口:"},{default:a(()=>[l(x,{modelValue:e(o).tbrk,"onUpdate:modelValue":t[12]||(t[12]=n=>e(o).tbrk=n),placeholder:"请输入填报入口"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"remark",label:"备注:"},{default:a(()=>[l(b,{modelValue:e(o).remark,"onUpdate:modelValue":t[13]||(t[13]=n=>e(o).remark=n),"auto-size":{minRows:2},placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,null,{default:a(()=>[l(u,{field:"sort",label:"排序:"},{default:a(()=>[l(x,{modelValue:e(o).sort,"onUpdate:modelValue":t[14]||(t[14]=n=>e(o).sort=n),placeholder:"请输入排序"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","ok-loading"])}}}),re=P({name:"ProvinceRankProvince"}),_e=P({...re,setup(p){const{warningModal:T}=ae(),[y,D]=j(null),R=L(),{form:m,resetForm:o}=$(()=>({gkms:"",zyms:"",sf:"",zyTjFlag:""}),()=>g()),{selectRow:C,columnsData:q,visibleColumnsData:K,tableBaseOptions:r,resetData:g,extendTableList:t,setSelectRow:w,changeTableColumn:u,changeTableSize:i}=W(ne(),()=>b()),I=()=>{T(`确定删除选中的${r.selectedKeys.length}数据吗？`,async _=>{const{err:d}=await O(()=>F.deleteProvince({ids:r.selectedKeys}),{successMsg:"操作成功"});d||(_(!0),r.selectedKeys=[],b())})},{data:z,loading:x,initData:b}=X(async()=>{const{res:_,err:d}=await O(()=>F.getProvinceList({...m.value,currentPage:r.pagination.current,pageSize:r.pagination.pageSize,pagingOrNot:"1"}));if(d)return[];r.pagination.total=_.data.totalCount;const V=_==null?void 0:_.data.resultList.map(f=>(f.newStart!==void 0&&f.newStart!==null&&(f.newStart=String(f.newStart)),f));return t(V)});return(_,d)=>{const V=s("a-select"),f=s("a-form-item"),v=s("a-grid-item"),n=s("a-radio"),M=s("a-radio-group"),Y=s("a-grid"),G=s("a-form"),Z=s("icon-plus"),A=s("a-button"),H=s("icon-close"),J=s("a-space"),Q=s("a-table");return N(),ee("div",null,[l(oe,{"table-columns":e(q),"table-size":e(r).size,onResetSearch:e(o),onSearch:e(g),onChangeTableSize:e(i),onChangeTableColumn:e(u)},{form:a(()=>[l(G,{model:e(m),"label-align":"left",size:"large","auto-label-width":""},{default:a(()=>[l(Y,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12},{default:a(()=>[l(v,null,{default:a(()=>[l(f,{field:"sf",label:"省份:"},{default:a(()=>[l(V,{modelValue:e(m).sf,"onUpdate:modelValue":d[0]||(d[0]=c=>e(m).sf=c),placeholder:"请输入省份","allow-search":"",options:[...e(S),...e(R).provinceList]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(v,null,{default:a(()=>[l(f,{field:"gkms",label:"高考模式:"},{default:a(()=>[l(V,{modelValue:e(m).gkms,"onUpdate:modelValue":d[1]||(d[1]=c=>e(m).gkms=c),placeholder:"请选择高考模式","allow-search":"",options:[...e(S),...e(h)]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(v,null,{default:a(()=>[l(f,{field:"zyms",label:"志愿模式:"},{default:a(()=>[l(V,{modelValue:e(m).zyms,"onUpdate:modelValue":d[2]||(d[2]=c=>e(m).zyms=c),placeholder:"请选择志愿模式","allow-search":"",options:[...e(S),...e(B)]},null,8,["modelValue","options"])]),_:1})]),_:1}),l(v,null,{default:a(()=>[l(f,{label:"允许调剂:"},{default:a(()=>[l(M,{modelValue:e(m).zyTjFlag,"onUpdate:modelValue":d[3]||(d[3]=c=>e(m).zyTjFlag=c)},{default:a(()=>[l(n,{value:"1"},{default:a(()=>[k("是")]),_:1}),l(n,{value:"0"},{default:a(()=>[k("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),operate:a(()=>[l(J,null,{default:a(()=>[l(A,{type:"outline",onClick:d[4]||(d[4]=c=>e(D)("zsAddRankProvince"))},{icon:a(()=>[l(Z)]),default:a(()=>[k(" 新增 ")]),_:1}),l(A,{type:"outline",status:"danger",disabled:!e(r).selectedKeys.length,loading:e(y)==="删除",onClick:I},{icon:a(()=>[l(H)]),default:a(()=>[k(" 删除 ")]),_:1},8,["disabled","loading"])]),_:1})]),table:a(()=>[l(Q,{"selected-keys":e(r).selectedKeys,"onUpdate:selectedKeys":d[5]||(d[5]=c=>e(r).selectedKeys=c),class:"zs-table","row-key":"id",data:e(z),"row-selection":e(r).rowSelection,bordered:e(r).bordered,pagination:e(r).pagination,size:e(r).size,columns:e(K),stripe:e(r).stripe,loading:e(x)},{operate:a(({record:c})=>[l(A,{type:"text",onClick:ue=>e(w)(c,()=>e(D)("zsAddRankProvince"))},{default:a(()=>[k("编辑")]),_:2},1032,["onClick"])]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),e(y)==="zsAddRankProvince"?(N(),E(de,{key:0,data:e(C),onSuccess:e(b),onClose:d[6]||(d[6]=c=>e(w)({},()=>e(D)(null)))},null,8,["data","onSuccess"])):le("",!0)])}}});export{_e as default};
