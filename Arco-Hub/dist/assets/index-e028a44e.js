import{d as x,u as h,C as j,E as A,s as E,r as d,o as q,l as v,w as l,g as t,c as a,i as m,f as I,h as K,k as f,S as p}from"./index-8a2cb146.js";import{Z as M}from"./index-2bbe694f.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-b09792e4.js";const Z=I("div",{style:{height:"100px"}},null,-1),z={class:"orderSubmit-footer box-flex jc-fe"},F=x({name:"SystemInformationOperate"}),G=x({...F,setup(L){const s=h(),{jumpTabName:c}=j(),[C,_]=A(null),{form:o,formRef:g}=E(()=>({name:"",content:"",street:"",phone:"",imageId:"",email:"",remark:"",content1:"",imageIndex:"",infotype:"0",uploadUrl:[]})),S={name:{required:!0,message:"请输入信息名称"},infotype:{required:!0,message:"请选择信息类型"},street:{required:!0,message:"请输入企业地址"},phone:{required:!0,message:"请输入电话"},content:{required:!0,message:"请输入企业简介"}},U=async r=>{const{res:e}=await f(()=>p.uploadInformationImg({file:r}));return e==null?void 0:e.data},w=()=>{g.value.validate(r=>{r||(s.query.id?V("editInformation"):V("addInformation"))})},V=async r=>{const{err:e}=await f(()=>p[r](o.value),{before:()=>_("okLoading"),after:()=>_(null),successMsg:"保存成功"});e||c()},N=async()=>{const{res:r,err:e}=await f(()=>p.getInformationDetail({id:s.query.id}));e||(o.value=r==null?void 0:r.data)};return s.query.id&&N(),(r,e)=>{const i=d("a-input"),u=d("a-form-item"),y=d("a-radio"),R=d("a-radio-group"),b=d("a-textarea"),B=d("a-form"),D=d("a-card"),k=d("a-button"),T=d("a-space");return q(),v(M,null,{default:l(()=>[t(D,{title:"企业信息维护",bordered:!1,class:"general-card"},{default:l(()=>[t(B,{ref_key:"formRef",ref:g,model:a(o),"label-align":"left",size:"large",style:{width:"800px","padding-left":"100px"},"auto-label-width":"",rules:S},{default:l(()=>[t(u,{label:"信息名称:",field:"name",required:""},{default:l(()=>[t(i,{modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=n=>a(o).name=n),placeholder:"请输入信息名称"},null,8,["modelValue"])]),_:1}),t(u,{label:"信息类型:",field:"infotype",required:""},{default:l(()=>[t(R,{modelValue:a(o).infotype,"onUpdate:modelValue":e[1]||(e[1]=n=>a(o).infotype=n)},{default:l(()=>[t(y,{value:"0"},{default:l(()=>[m("企业信息介绍")]),_:1}),t(y,{value:"1"},{default:l(()=>[m("结算信息")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"企业联系方式:",field:"phone"},{default:l(()=>[t(i,{modelValue:a(o).phone,"onUpdate:modelValue":e[2]||(e[2]=n=>a(o).phone=n),placeholder:"请输入企业联系方式"},null,8,["modelValue"])]),_:1}),t(u,{label:"企业地址:",field:"street"},{default:l(()=>[t(i,{modelValue:a(o).street,"onUpdate:modelValue":e[3]||(e[3]=n=>a(o).street=n),placeholder:"请输入企业地址"},null,8,["modelValue"])]),_:1}),t(u,{label:"简介:",field:"content1"},{default:l(()=>[t(b,{modelValue:a(o).content1,"onUpdate:modelValue":e[4]||(e[4]=n=>a(o).content1=n),placeholder:"请输入简介"},null,8,["modelValue"])]),_:1}),t(u,{field:"content",label:"详细介绍"},{default:l(()=>[t(O,{modelValue:a(o).content,"onUpdate:modelValue":e[5]||(e[5]=n=>a(o).content=n),"upload-img":U},null,8,["modelValue"])]),_:1}),t(u,{label:"备注:",field:"remake"},{default:l(()=>[t(b,{modelValue:a(o).remark,"onUpdate:modelValue":e[6]||(e[6]=n=>a(o).remark=n),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),Z,I("div",z,[t(T,null,{default:l(()=>[a(s).query.isReadOnly?K("",!0):(q(),v(k,{key:0,type:"primary",loading:a(C)==="确定",onClick:w},{default:l(()=>[m("确定")]),_:1},8,["loading"])),t(k,{onClick:e[7]||(e[7]=()=>a(c)())},{default:l(()=>[m("返回")]),_:1})]),_:1})])]),_:1})}}});export{G as default};
