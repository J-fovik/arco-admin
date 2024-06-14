import{d as N,u as V,C as M,E as D,s as R,M as b,r as l,o as B,l as L,w as t,g as a,c as o,i as y,W as E,k as u,V as K,S as d}from"./index-8a2cb146.js";import{Z}from"./index-2bbe694f.js";const j=N({name:"SystemNominalAccountOperate"}),O=N({...j,setup(z){const g=V(),{jumpTabName:i}=M(),[v,m]=D(null),{form:r,formRef:p}=R(()=>({departNo:""})),k={departNo:{required:!0,message:"请选择部门"}},{data:A}=b(async()=>{const{res:e}=await u(()=>d.getDepartmentTree({}));return(e==null?void 0:e.data.orgList)??[]},[]),{data:s}=b(async()=>{const{res:e,err:n}=await u(()=>d.getMainAccount());return n?{}:e==null?void 0:e.data},{}),w=()=>{p.value.validate(e=>{e||h()})},h=async()=>{const{err:e}=await u(()=>d.addNominalAccount({mainAcct:s.value.bankAccount,mainAcctName:s.value.bankAccountName,departNo:r.value.departNo}),{before:()=>m("okLoading"),after:()=>m(null)});e||(K.success("开户成功"),i())};return(e,n)=>{const _=l("a-input"),c=l("a-form-item"),S=l("a-cascader"),f=l("a-button"),C=l("a-space"),q=l("a-form"),x=l("a-card");return B(),L(Z,null,{default:t(()=>[a(x,{title:o(E)("虚账号",!!o(g).query.id),bordered:!1,class:"general-card"},{default:t(()=>[a(q,{ref_key:"formRef",ref:p,model:o(r),"label-align":"left",size:"large",style:{width:"1000px","padding-left":"100px"},"auto-label-width":"",rules:k},{default:t(()=>[a(c,{label:"银行账户(公户):",required:""},{default:t(()=>[a(_,{"model-value":o(s).bankAccount,readonly:"",placeholder:"请输入银行账户(公户)"},null,8,["model-value"])]),_:1}),a(c,{label:"银行账户名(公户):",required:""},{default:t(()=>[a(_,{"model-value":o(s).bankAccountName,readonly:"",placeholder:"请输入银行账户名(公户)"},null,8,["model-value"])]),_:1}),a(c,{label:"所属部门:",field:"departNo",required:""},{default:t(()=>[a(S,{modelValue:o(r).departNo,"onUpdate:modelValue":n[0]||(n[0]=T=>o(r).departNo=T),"allow-search":"","check-strictly":"",options:o(A),fieldNames:{label:"name",value:"code",children:"children"},placeholder:"请选择部门"},null,8,["modelValue","options"])]),_:1}),a(c,null,{default:t(()=>[a(C,null,{default:t(()=>[a(f,{type:"primary",loading:o(v)==="确定",onClick:w},{default:t(()=>[y("确定")]),_:1},8,["loading"]),a(f,{onClick:n[1]||(n[1]=()=>o(i)())},{default:t(()=>[y("返回")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])]),_:1})}}});export{O as default};