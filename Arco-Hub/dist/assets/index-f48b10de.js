import{d as i,u as q,C as k,E as y,s as C,r as n,o as T,l as U,w as o,g as e,c as l,i as v,k as w,_ as D}from"./index-8a2cb146.js";import{Z as N}from"./index-2bbe694f.js";import{L as R}from"./limit-285f78d0.js";const I=i({name:"LimitRechargeOperate"}),L=i({...I,setup(B){const _=q(),{jumpTabName:f}=k();y(null);const{form:t,formRef:p}=C(()=>({})),c={};return(async()=>{const{res:s,err:a}=await w(()=>R.getTopUpLimitTakeDetail({id:_.query.id}));if(a)return[];t.value=s==null?void 0:s.data})(),(s,a)=>{const r=n("a-input"),u=n("a-form-item"),m=n("a-textarea"),b=n("a-button"),V=n("a-space"),x=n("a-form"),g=n("a-card");return T(),U(N,null,{default:o(()=>[e(g,{title:"充值额度详情",bordered:!1,class:"general-card"},{default:o(()=>[e(x,{ref_key:"formRef",ref:p,model:l(t),"label-align":"left",size:"large",style:{width:"800px","padding-left":"100px"},"auto-label-width":"",rules:c},{default:o(()=>[e(u,{label:"营业部名称:",required:""},{default:o(()=>[e(r,{modelValue:l(t).departName,"onUpdate:modelValue":a[0]||(a[0]=d=>l(t).departName=d),disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"基准额度(元):",required:""},{default:o(()=>[e(r,{modelValue:l(t).standardQuota,"onUpdate:modelValue":a[1]||(a[1]=d=>l(t).standardQuota=d),disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"额度(元)",required:""},{default:o(()=>[e(r,{modelValue:l(t).quota,"onUpdate:modelValue":a[2]||(a[2]=d=>l(t).quota=d),disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"额度说明:"},{default:o(()=>[e(m,{modelValue:l(t).quotaDesc,"onUpdate:modelValue":a[3]||(a[3]=d=>l(t).quotaDesc=d),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"备注:"},{default:o(()=>[e(m,{modelValue:l(t).remark,"onUpdate:modelValue":a[4]||(a[4]=d=>l(t).remark=d),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),_:1}),e(u,null,{default:o(()=>[e(V,null,{default:o(()=>[e(b,{onClick:a[5]||(a[5]=()=>l(f)())},{default:o(()=>[v("返回")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})}}});const j=D(L,[["__scopeId","data-v-31ef3a32"]]);export{j as default};
