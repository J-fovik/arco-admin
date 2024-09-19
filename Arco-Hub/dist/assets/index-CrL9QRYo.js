import{_ as q}from"./index-IDTj6fKF.js";import{d as h,V as z,W as R,z as j,D as A,g as K,A as L,r as s,o as S,m as F,w as e,a,e as p,b as d,M as g,v as y,X as W}from"./index-BQ5eCX9Z.js";const X=[{title:"名称",dataIndex:"label",slotName:"label",align:"center"},{title:"类型",dataIndex:"type",slotName:"type",align:"center"},{title:"开始时间",dataIndex:"startTime",slotName:"startTime",align:"center"},{title:"结束时间",dataIndex:"endTime",slotName:"endTime",align:"center"},{title:"操作",dataIndex:"operate",align:"center",width:100,slotName:"operate"}],Z=y("div",{style:{height:"100px"}},null,-1),E={class:"submit-footer flex justify-end"},G=h({name:"MenuTableRules"}),Q=h({...G,setup(H){z();const{jumpTabName:f}=R(),[D,J]=j(null),{form:u,formRef:b}=A(()=>({tableData:[]})),V=K([{label:"类型一",value:"1"},{label:"类型二",value:"2"},{label:"类型三",value:"3"},{label:"类型四",value:"4"},{label:"类型五",value:"5"}]),v=L(()=>V.value.map(l=>({...l,disabled:u.value.tableData.some(o=>o.type===l.value)}))),r={label:{required:!0,validator:(l,o)=>{l||o("子项名称不允许重复"),u.value.tableData.filter(_=>_.label===l).length>1&&o("子项名称不允许重复")}},type:{required:!0,message:"请选择类型"},startTime:{required:!0,validator:(l,o)=>{l||o("请选择开始时间")}},endTime:{required:!0,validator:(l,o)=>{l||o("请选择结束时间")}}},x=()=>{u.value.tableData.push({type:"",label:"",startTime:"",endTime:""})},Y=l=>{u.value.tableData.splice(l,1)},k=()=>{b.value.validate(l=>{if(u.value.tableData.length<=0)return W.warning("请先点击增加一行");l||C()})},C=async()=>{f()};return(l,o)=>{const _=s("icon-plus"),m=s("a-button"),M=s("a-input"),c=s("a-form-item"),N=s("a-select"),T=s("a-date-picker"),U=s("a-table"),w=s("a-card"),I=s("a-form"),$=s("a-space"),B=q;return S(),F(B,null,{default:e(()=>[a(I,{ref_key:"formRef",ref:b,model:d(u),"label-align":"left",size:"large","auto-label-width":"",rules:r},{default:e(()=>[a(w,{title:"表单表格验证",bordered:!1,class:"general-card margin-top"},{extra:e(()=>[a(m,{type:"outline",onClick:x},{icon:e(()=>[a(_)]),default:e(()=>[p(" 添加子项 ")]),_:1})]),default:e(()=>[a(U,{size:"large",columns:d(X),data:d(u).tableData,pagination:!1,bordered:!1},{label:e(({record:t,rowIndex:i})=>[a(c,{field:`tableData[${i}].label`,rules:[{validator:r.label.validator}],"hide-label":"","hide-asterisk":""},{default:e(()=>[a(M,{modelValue:t.label,"onUpdate:modelValue":n=>t.label=n,size:"large",placeholder:"请输入子项名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field","rules"])]),type:e(({record:t,rowIndex:i})=>[a(c,{field:`tableData[${i}].type`,rules:r.type,"hide-label":"","hide-asterisk":""},{default:e(()=>[a(N,{modelValue:t.type,"onUpdate:modelValue":n=>t.type=n,options:d(v),"allow-search":"","allow-clear":"",class:"flex-1",disabled:d(v).length===0,"field-names":{label:"label",value:"value"},placeholder:"请选择类型"},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["field","rules"])]),startTime:e(({record:t,rowIndex:i})=>[a(c,{field:`tableData[${i}].startTime`,rules:r.startTime,"hide-label":"","hide-asterisk":""},{default:e(()=>[a(T,{modelValue:t.startTime,"onUpdate:modelValue":n=>t.startTime=n,format:"YYYY/MM/DD",class:"flex-1","value-format":"YYYY-MM-DD",placeholder:"请选择开始时间",onChange:n=>t.endTime=""},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["field","rules"])]),endTime:e(({record:t,rowIndex:i})=>[a(c,{field:`tableData[${i}].endTime`,rules:r.endTime,"hide-label":"","hide-asterisk":""},{default:e(()=>[a(T,{modelValue:t.endTime,"onUpdate:modelValue":n=>t.endTime=n,format:"YYYY/MM/DD",class:"flex-1","value-format":"YYYY-MM-DD",placeholder:"请选择结束时间","disabled-date":n=>d(g)(n).isBefore(d(g)(t.startTime))},null,8,["modelValue","onUpdate:modelValue","disabled-date"])]),_:2},1032,["field","rules"])]),operate:e(({rowIndex:t})=>[a(m,{type:"text",status:"danger",onClick:i=>Y(t)},{default:e(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1},8,["columns","data"])]),_:1})]),_:1},8,["model"]),Z,y("div",E,[a($,null,{default:e(()=>[a(m,{type:"primary",loading:d(D)==="确定",onClick:k},{default:e(()=>[p("确定")]),_:1},8,["loading"]),a(m,{onClick:o[0]||(o[0]=()=>d(f)())},{default:e(()=>[p("返回")]),_:1})]),_:1})])]),_:1})}}});export{Q as default};
