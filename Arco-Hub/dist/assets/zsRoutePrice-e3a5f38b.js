import{d as b,s as z,a0 as M,r as n,o as U,l as v,w as t,f as y,g as l,i as m,c as r,O as s,_ as q}from"./index-8a2cb146.js";const D={style:{"margin-bottom":"12px",padding:"10px","background-color":"#f2f3f5"},class:"text-bold text-center"},R=b({name:"ZsRoutePrice"}),w=b({...R,props:{defaultData:{default:()=>({})},disabled:{type:Boolean,default:!1}},setup(V,{expose:_}){const c=V;_({validateData:async()=>g.value.validate(),getFormData:()=>a.value,setFormData:o=>{a.value=o}});const{form:a,formRef:g}=z(()=>({...c.defaultData})),h={crtxjg:{validator:(o,d)=>{o||d("请输入同行价格成人价"),o>=a.value.crmsjg&&d("同行价格不可高于门市价格")}},lrtxjg:{validator:(o,d)=>{o||d("请输入同行价格老人价"),o>a.value.lrmsjg&&d("同行价格不可高于门市价格")}},ettxjg:{validator:(o,d)=>{o||d("请输入同行价格儿童价"),o>a.value.etmsjg&&d("同行价格不可高于门市价格")}},zcettxjg:{validator:(o,d)=>{o||d("请输入同行价格占床儿童价"),o>a.value.zcetmsjg&&d("同行价格不可高于门市价格")}},crdrfctxj:{required:!0,message:"请输入单房差同行价成人价"},lrdrfctxj:{required:!0,message:"请输入单房差同行价老人价"},zccrdrfctxj:{required:!0,message:"请输入单房差同行价儿童价"},zcetdrfctxj:{required:!0,message:"请输入单房差同行价占床儿童价"}};return M(()=>c.defaultData,o=>{a.value=o}),(o,d)=>{const u=n("a-grid-item"),p=n("a-grid"),i=n("a-input-number"),f=n("a-form-item"),j=n("a-tag"),x=n("a-form");return U(),v(x,{ref_key:"formRef",ref:g,model:r(a),"label-align":"left",size:"large",layout:"vertical","auto-label-width":"",rules:h,disabled:o.disabled},{default:t(()=>[y("div",D,[l(p,{cols:5,"col-gap":12},{default:t(()=>[l(u,null,{default:t(()=>[m("价格类型")]),_:1}),l(u,null,{default:t(()=>[m("成人")]),_:1}),l(u,null,{default:t(()=>[m("老人")]),_:1}),l(u,null,{default:t(()=>[m("儿童")]),_:1}),l(u,null,{default:t(()=>[m("占床儿童")]),_:1})]),_:1})]),l(p,{cols:5,"col-gap":12},{default:t(()=>[l(u,{class:"text-bold text-center",style:{"padding-top":"8px"}},{default:t(()=>[m(" 门市价格(元) ")]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"crmsjg"},{default:t(()=>[l(i,{modelValue:r(a).crmsjg,"onUpdate:modelValue":d[0]||(d[0]=e=>r(a).crmsjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入成人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"lrmsjg"},{default:t(()=>[l(i,{modelValue:r(a).lrmsjg,"onUpdate:modelValue":d[1]||(d[1]=e=>r(a).lrmsjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入老人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"etmsjg"},{default:t(()=>[l(i,{modelValue:r(a).etmsjg,"onUpdate:modelValue":d[2]||(d[2]=e=>r(a).etmsjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"zcetmsjg"},{default:t(()=>[l(i,{modelValue:r(a).zcetmsjg,"onUpdate:modelValue":d[3]||(d[3]=e=>r(a).zcetmsjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入占床儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1})]),_:1}),l(p,{cols:5,"col-gap":12},{default:t(()=>[l(u,{class:"text-bold text-center",style:{"padding-top":"8px"}},{default:t(()=>[m(" 同行价格(元) "),l(j,{color:"red"},{default:t(()=>[m("非空*")]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"crtxjg"},{default:t(()=>[l(i,{modelValue:r(a).crtxjg,"onUpdate:modelValue":d[4]||(d[4]=e=>r(a).crtxjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入成人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"lrtxjg"},{default:t(()=>[l(i,{modelValue:r(a).lrtxjg,"onUpdate:modelValue":d[5]||(d[5]=e=>r(a).lrtxjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入老人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"ettxjg"},{default:t(()=>[l(i,{modelValue:r(a).ettxjg,"onUpdate:modelValue":d[6]||(d[6]=e=>r(a).ettxjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"zcettxjg"},{default:t(()=>[l(i,{modelValue:r(a).zcettxjg,"onUpdate:modelValue":d[7]||(d[7]=e=>r(a).zcettxjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入占床儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1})]),_:1}),l(p,{cols:5,"col-gap":12},{default:t(()=>[l(u,{class:"text-bold text-center",style:{"padding-top":"8px"}},{default:t(()=>[m(" 单房差门市价(元) ")]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"crdffcmsj"},{default:t(()=>[l(i,{modelValue:r(a).crdffcmsj,"onUpdate:modelValue":d[8]||(d[8]=e=>r(a).crdffcmsj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入成人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"lrdffcmsj2"},{default:t(()=>[l(i,{modelValue:r(a).lrdffcmsj2,"onUpdate:modelValue":d[9]||(d[9]=e=>r(a).lrdffcmsj2=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入老人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"etdffcmsj"},{default:t(()=>[l(i,{modelValue:r(a).etdffcmsj,"onUpdate:modelValue":d[10]||(d[10]=e=>r(a).etdffcmsj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"zcrtdffcmsj"},{default:t(()=>[l(i,{modelValue:r(a).zcrtdffcmsj,"onUpdate:modelValue":d[11]||(d[11]=e=>r(a).zcrtdffcmsj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入占床儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1})]),_:1}),l(p,{cols:5,"col-gap":12},{default:t(()=>[l(u,{class:"text-bold text-center",style:{"padding-top":"8px"}},{default:t(()=>[m(" 单房差同行价(元) "),l(j,{color:"red"},{default:t(()=>[m("非空*")]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"crdrfctxj"},{default:t(()=>[l(i,{modelValue:r(a).crdrfctxj,"onUpdate:modelValue":d[12]||(d[12]=e=>r(a).crdrfctxj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入成人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"lrdrfctxj"},{default:t(()=>[l(i,{modelValue:r(a).lrdrfctxj,"onUpdate:modelValue":d[13]||(d[13]=e=>r(a).lrdrfctxj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入老人价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"zccrdrfctxj"},{default:t(()=>[l(i,{modelValue:r(a).zccrdrfctxj,"onUpdate:modelValue":d[14]||(d[14]=e=>r(a).zccrdrfctxj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{"hide-label":"",field:"zcetdrfctxj"},{default:t(()=>[l(i,{modelValue:r(a).zcetdrfctxj,"onUpdate:modelValue":d[15]||(d[15]=e=>r(a).zcetdrfctxj=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入占床儿童价"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1})]),_:1}),l(p,{cols:2,"col-gap":12},{default:t(()=>[l(u,null,{default:t(()=>[l(f,{label:"其他价格",field:"qtjg"},{default:t(()=>[l(i,{modelValue:r(a).qtjg,"onUpdate:modelValue":d[16]||(d[16]=e=>r(a).qtjg=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入其他价格"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),l(u,null,{default:t(()=>[l(f,{label:"其他价格2",field:"qtjg2"},{default:t(()=>[l(i,{modelValue:r(a).qtjg2,"onUpdate:modelValue":d[17]||(d[17]=e=>r(a).qtjg2=e),modelModifiers:{trim:!0},formatter:e=>r(s)(e,""),parser:e=>e.replace(/,/g,""),precision:0,"hide-button":"",placeholder:o.disabled?"":"请输入其他价格2"},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","disabled"])}}});const C=q(w,[["__scopeId","data-v-e3064ada"]]);export{C as Z};
