import{d as U,a as O,u as L,C as F,E as h,s as j,b as z,r as n,o as c,l as N,w as o,g as t,c as e,O as f,e as K,F as Z,h as x,f as C,i as T,k as g,G,H,_ as J}from"./index-8a2cb146.js";import{Z as Q}from"./index-2bbe694f.js";import{B as y}from"./business-b0ce0e8a.js";const W=p=>(G("data-v-aa33cafb"),p=p(),H(),p),X=W(()=>C("div",{style:{height:"100px"}},null,-1)),Y={class:"orderSubmit-footer box-flex jc-fe"},$=U({name:"BusinessInsuranceManageOperate"}),ee=U({...$,setup(p){const{getDictionaryInfo:V}=O(),s=L(),{jumpTabName:_}=F(),[k,b]=h(null),{form:r,formRef:v,formPlaceholder:P}=j(()=>({id:void 0,productCode:"",insuranceDays:void 0,insuranceType:"",productName:"",company:"",areaName:"",areaNo:"",ageStart:void 0,ageEnd:void 0,costPrice:void 0,peerPrice:void 0,individualPrice:void 0,state:"",stateDesc:"",remark:""})),E={productCode:{required:!0,message:"请输入保险产品编号"},insuranceDays:{required:!0,message:"请输入保险天数"},insuranceType:{required:!0,message:"请输入保险类别"},productName:{required:!0,message:"请输入保险名称"},company:{required:!0,message:"请输入保险公司名称"},areaName:{required:!0,message:"请选择地区名称"},ageStart:{required:!0,message:"请输入承保年龄开始"},ageEnd:{required:!0,message:"请输入承保年龄结束"},costPrice:{required:!0,message:"请输入成本价格"},peerPrice:{required:!0,message:"请输入同行价格"},individualPrice:{required:!0,message:"请输入散客价格"}},I=()=>{v.value.validate(i=>{i||w()})},w=async()=>{const{err:i}=await g(()=>y.updateInsurAnce({...r.value}),{before:()=>b("okLoading"),after:()=>b(null),successMsg:"操作成功"});i||_()},B=async()=>{const{res:i,err:l}=await g(()=>y.getInsurAnceListDetail({id:s.query.id}));if(l)return;const u=i==null?void 0:i.data.insuranceEntity;r.value={...u,id:u.id*1,insuranceDays:u.insuranceDays*1,ageStart:u.ageStart*1,ageEnd:u.ageEnd*1,costPrice:u.costPrice*1,peerPrice:u.peerPrice*1,individualPrice:u.individualPrice*1}};return z(async()=>{const{res:i,err:l}=await g(()=>y.getInsurAnceList({insuranceType:"",productName:"",company:"",areaName:"",currentPage:1,pageSize:10}));if(!l)return i.data.regionList}),s.query.id&&B(),(i,l)=>{const u=n("a-input"),d=n("a-form-item"),m=n("a-input-number"),q=n("a-select"),S=n("a-textarea"),R=n("a-form"),M=n("a-card"),D=n("a-button"),A=n("a-space");return c(),N(Q,null,{default:o(()=>[t(M,{title:e(s).query.isReadOnly?"保险详情":"编辑保险",bordered:!1,class:"general-card"},{default:o(()=>[t(R,{ref_key:"formRef",ref:v,model:e(r),"label-align":"left",size:"large",disabled:!!e(s).query.isReadOnly,style:{width:"800px","padding-left":"100px"},"auto-label-width":"",rules:E},{default:o(()=>[t(d,{field:"productCode",label:"保险产品编号:",required:""},{default:o(()=>[t(u,{modelValue:e(r).productCode,"onUpdate:modelValue":l[0]||(l[0]=a=>e(r).productCode=a),modelModifiers:{trim:!0},placeholder:"请输入保险产品编号"},null,8,["modelValue"])]),_:1}),t(d,{field:"insuranceDays",label:"保险天数:",required:""},{default:o(()=>[t(m,{modelValue:e(r).insuranceDays,"onUpdate:modelValue":l[1]||(l[1]=a=>e(r).insuranceDays=a),placeholder:"请输入保险天数"},null,8,["modelValue"])]),_:1}),t(d,{field:"insuranceType",label:"保险类别:",required:""},{default:o(()=>[t(q,{modelValue:e(r).insuranceType,"onUpdate:modelValue":l[2]||(l[2]=a=>e(r).insuranceType=a),placeholder:"请选择保险类型",options:e(V)("insuranceType"),"field-names":{label:"detailName",value:"detailCode"}},null,8,["modelValue","options"])]),_:1}),t(d,{field:"productName",label:"保险名称:"},{default:o(()=>[t(u,{modelValue:e(r).productName,"onUpdate:modelValue":l[3]||(l[3]=a=>e(r).productName=a),modelModifiers:{trim:!0},placeholder:"请输入保险名称"},null,8,["modelValue"])]),_:1}),t(d,{field:"company",label:"保险公司名称:"},{default:o(()=>[t(u,{modelValue:e(r).company,"onUpdate:modelValue":l[4]||(l[4]=a=>e(r).company=a),modelModifiers:{trim:!0},placeholder:"请输入保险公司名称"},null,8,["modelValue"])]),_:1}),t(d,{field:"ageStart",label:"承保年龄开始:"},{default:o(()=>[t(m,{modelValue:e(r).ageStart,"onUpdate:modelValue":l[5]||(l[5]=a=>e(r).ageStart=a),precision:0,"hide-button":"",min:0,max:150,placeholder:"请输入承保年龄开始"},null,8,["modelValue"])]),_:1}),t(d,{field:"ageEnd",label:"承保年龄结束:"},{default:o(()=>[t(m,{modelValue:e(r).ageEnd,"onUpdate:modelValue":l[6]||(l[6]=a=>e(r).ageEnd=a),precision:0,"hide-button":"",min:0,max:150,placeholder:"请输入承保年龄结束"},null,8,["modelValue"])]),_:1}),t(d,{field:"individualPrice",label:"散客价格:"},{default:o(()=>[t(m,{modelValue:e(r).individualPrice,"onUpdate:modelValue":l[7]||(l[7]=a=>e(r).individualPrice=a),formatter:a=>e(f)(a,""),parser:a=>a.replace(/,/g,""),precision:2,"hide-button":"",placeholder:"请输入散客价格(元)"},null,8,["modelValue","formatter","parser"])]),_:1}),t(d,{field:"peerPrice",label:"同行价格:"},{default:o(()=>[t(m,{modelValue:e(r).peerPrice,"onUpdate:modelValue":l[8]||(l[8]=a=>e(r).peerPrice=a),formatter:a=>e(f)(a,""),parser:a=>a.replace(/,/g,""),precision:2,"hide-button":"",placeholder:"请输入同行价格(元)"},null,8,["modelValue","formatter","parser"])]),_:1}),t(d,{field:"costPrice",label:"成本价格:"},{default:o(()=>[t(m,{modelValue:e(r).costPrice,"onUpdate:modelValue":l[9]||(l[9]=a=>e(r).costPrice=a),formatter:a=>e(f)(a,""),parser:a=>a.replace(/,/g,""),precision:2,"hide-button":"",placeholder:"请输入成本价格(元)"},null,8,["modelValue","formatter","parser"])]),_:1}),t(d,{field:"state",label:"状态:",required:""},{default:o(()=>[t(q,{modelValue:e(r).state,"onUpdate:modelValue":l[10]||(l[10]=a=>e(r).state=a),placeholder:"请选择状态",options:e(V)("state"),"field-names":{label:"detailName",value:"detailCode"}},null,8,["modelValue","options"])]),_:1}),t(d,{field:"stateDesc",label:"状态说明:"},{default:o(()=>[t(S,{modelValue:e(r).stateDesc,"onUpdate:modelValue":l[11]||(l[11]=a=>e(r).stateDesc=a),modelModifiers:{trim:!0},placeholder:e(P)("请输入状态说明")},null,8,["modelValue","placeholder"])]),_:1}),t(d,{field:"remark",label:"备注:"},{default:o(()=>[t(S,{modelValue:e(r).remark,"onUpdate:modelValue":l[12]||(l[12]=a=>e(r).remark=a),modelModifiers:{trim:!0},placeholder:e(P)("请输入备注")},null,8,["modelValue","placeholder"])]),_:1}),e(s).query.isReadOnly?(c(),K(Z,{key:0},[t(d,{field:"createTime",label:"创建时间:"},{default:o(()=>[t(u,{modelValue:e(r).createTime,"onUpdate:modelValue":l[13]||(l[13]=a=>e(r).createTime=a)},null,8,["modelValue"])]),_:1}),t(d,{field:"updateTime",label:"更新时间:"},{default:o(()=>[t(u,{modelValue:e(r).updateTime,"onUpdate:modelValue":l[14]||(l[14]=a=>e(r).updateTime=a)},null,8,["modelValue"])]),_:1})],64)):x("",!0)]),_:1},8,["model","disabled"])]),_:1},8,["title"]),X,C("div",Y,[t(A,null,{default:o(()=>[e(s).query.isReadOnly?x("",!0):(c(),N(D,{key:0,type:"primary",loading:e(k)==="确定",onClick:I},{default:o(()=>[T("确定")]),_:1},8,["loading"])),t(D,{onClick:l[15]||(l[15]=()=>e(_)())},{default:o(()=>[T("返回")]),_:1})]),_:1})])]),_:1})}}});const re=J(ee,[["__scopeId","data-v-aa33cafb"]]);export{re as default};
