import{d as B,x as J,h as Q,i as W,j as X,k as F,r as d,o as j,l as Y,w as n,a,b as e,v as Z,m as _,T as ee,n as de,c as ie,e as P,p as ue}from"./index-d007178a.js";import{f as G,A as ce}from"./options-aafac76d.js";import{f as v,t as A,a as H,d as ae,_ as me}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-430f1ffc.js";import{a as pe}from"./rules-f293393f.js";import{V as y}from"./vip-3bf0329d.js";import{g as ge}from"./opt-6460dd95.js";import"./index-13860ba0.js";const fe=()=>[{title:"序号",width:80,dataIndex:"sortTableNo",show:!0,align:"center"},{title:"发卡时间",dataIndex:"createTm",show:!0,align:"center",render:({record:r})=>v(r.createTmStr)},{title:"批次号",dataIndex:"batchCode",show:!0,align:"center",render:({record:r})=>v(r.batchCode)},{title:"代理商名称",dataIndex:"agentName",show:!0,align:"center",render:({record:r})=>v(r.agentName)},{title:"商品大类",dataIndex:"cardLargeCategory",show:!0,align:"center",render:({record:r})=>v(r.cardLargeCategory)},{title:"商品类型",dataIndex:"cardType",show:!0,align:"center",render:({record:r})=>v(r.cardType)},{title:"原始价格",dataIndex:"originalPrice",show:!0,align:"right",render:({record:r})=>A(H(r.originalPrice))},{title:"销售价格",dataIndex:"sellingPrice",show:!0,align:"right",render:({record:r})=>A(H(r.sellingPrice))},{title:"销售人员",dataIndex:"sellingUser",show:!0,align:"center",render:({record:r})=>v(r.sellingUser)},{title:"总数量",dataIndex:"cardCount",show:!0,align:"right",render:({record:r})=>A(r.cardCount)},{title:"已激活数量",dataIndex:"activateCount",show:!0,align:"right",render:({record:r})=>A(r.activateCount)},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],_e=B({name:"zsAddAgent"}),be=B({..._e,props:{data:{default:()=>({})},spdlList:{default:()=>[]}},emits:["close","success"],setup(r,{emit:x}){const k=r,N=J(),[c,U]=Q(null),{form:o,formRef:z}=W(()=>({...k.data})),O={agentId:{required:!0,message:"请选择代理商"},batchNum:{required:!0,validator:(i,l)=>{i&&!pe(i)&&l("请输入大于0小于10000的正整数")}},cardType:{required:!0,message:"请选择商品类型"}},$=()=>{z.value.validate(i=>{i||k.data.id||M("addBatchCard")})},M=async i=>{const{res:l,err:g}=await _(()=>y[i](o.value),{before:()=>U("okLoading"),after:()=>U(null)});if(g)return;const u=G(I.value,o.value.agentId);m(u==null?void 0:u.label,l==null?void 0:l.data.batchCode),x("success"),x("close")},m=async(i,l)=>{var V;const{res:g,err:u}=await _(()=>ee.changeToken({loginName:N.userInfo.loginName}));if(u)return;const{res:b,err:w}=await _(()=>y.daochuBatchCard({batchCode:l,cardType:o.value.cardType}));if(w)return;const S=(V=G(k.spdlList,o.value.cardType))==null?void 0:V.label;ae(b,`${i}_${S}_${l}.xlsx`)},{data:I}=X(async()=>{const{res:i,err:l}=await _(()=>y.getAgentList({status:"1"}));return l?[]:i.data.list.map(g=>({label:g.agentName,value:g.id}))}),D=i=>{o.value.cardType=i,h.value="",R(i)};let h=F("");const R=async i=>{const{res:l,err:g}=await _(()=>y.getPriceList({cardType:i}));if(g)return[];h.value=l.data.list[0].originalPrice,o.value.productId=l.data.list[0].id};return(i,l)=>{const g=d("a-select"),u=d("a-form-item"),b=d("a-input"),w=d("a-input-number"),S=d("a-textarea"),V=d("a-form"),s=d("a-modal");return j(),Y(s,{top:"10%",width:"500px",title:"卡片分配","unmount-on-close":"",visible:"","align-center":!1,"mask-closable":!1,"ok-loading":e(c)==="okLoading",onCancel:l[7]||(l[7]=t=>x("close")),onOk:$},{default:n(()=>[a(V,{ref_key:"formRef",ref:z,model:e(o),"label-align":"left",size:"large","auto-label-width":"",rules:O},{default:n(()=>[a(u,{field:"agentId",label:"代理商:"},{default:n(()=>[a(g,{modelValue:e(o).agentId,"onUpdate:modelValue":l[0]||(l[0]=t=>e(o).agentId=t),options:e(I),"allow-search":"","allow-clear":"",placeholder:"请选择代理商"},null,8,["modelValue","options"])]),_:1}),a(u,{field:"cardType",label:"商品类型:"},{default:n(()=>[a(g,{modelValue:e(o).cardType,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).cardType=t),options:r.spdlList,"allow-search":"","allow-clear":"",placeholder:"请选择商品类型",onChange:D},null,8,["modelValue","options"])]),_:1}),a(u,{field:"originalPrice",label:"原始价格:"},{default:n(()=>[a(b,{disabled:"",modelValue:e(h),"onUpdate:modelValue":l[2]||(l[2]=t=>Z(h)?h.value=t:h=t),modelModifiers:{trim:!0},placeholder:"请输入原始价格",precision:2},null,8,["modelValue"])]),_:1}),a(u,{field:"sellingPrice",label:"销售价格:"},{default:n(()=>[a(w,{modelValue:e(o).sellingPrice,"onUpdate:modelValue":l[3]||(l[3]=t=>e(o).sellingPrice=t),modelModifiers:{trim:!0},placeholder:"请输入销售价格",min:0,precision:2},null,8,["modelValue"])]),_:1}),a(u,{field:"sellingUser",label:"销售人员:"},{default:n(()=>[a(b,{modelValue:e(o).sellingUser,"onUpdate:modelValue":l[4]||(l[4]=t=>e(o).sellingUser=t),modelModifiers:{trim:!0},placeholder:"请输入销售人员"},null,8,["modelValue"])]),_:1}),a(u,{field:"batchNum",label:"发卡数量:"},{default:n(()=>[a(w,{modelValue:e(o).batchNum,"onUpdate:modelValue":l[5]||(l[5]=t=>e(o).batchNum=t),modelModifiers:{trim:!0},placeholder:"请输入发卡数量"},null,8,["modelValue"])]),_:1}),a(u,{field:"remark",label:"备注:"},{default:n(()=>[a(S,{modelValue:e(o).remark,"onUpdate:modelValue":l[6]||(l[6]=t=>e(o).remark=t),modelModifiers:{trim:!0},"max-length":200,placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["ok-loading"])}}}),he=B({name:"VipAgentManage"}),ke=B({...he,setup(r){const x=J(),[k,N]=Q(null),{form:c,resetForm:U}=W(()=>({cardType:"",agentName:"",sellingUser:"",batchCode:"",createTmStart:"",createTmEnd:""}),()=>I());let o=F([]);const z=s=>{c.value.createTmStart=s[0],c.value.createTmEnd=s[1]},{selectRow:O,columnsData:$,visibleColumnsData:M,tableBaseOptions:m,resetData:I,extendTableList:D,setSelectRow:h,changeTableColumn:R,changeTableSize:i}=de(fe(),()=>b()),l=F([]);ge().then(s=>{l.value=s});const{data:g,loading:u,initData:b}=X(async()=>{const{res:s,err:t}=await _(()=>y.getBatchCard({...c.value,currentPage:m.pagination.current,pageSize:m.pagination.pageSize,pagingOrNot:"1"}));return t?[]:(m.pagination.total=s.data.totalCount,D(s.data.list))}),w=async s=>{const{err:t}=await _(()=>y.freezeBatchCard({batchCode:s.batchCode}),{successMsg:"操作成功"});t||b()},S=async s=>{const{err:t}=await _(()=>y.thawBatchCard({batchCode:s.batchCode}),{successMsg:"操作成功"});t||b()},V=async s=>{const{res:t,err:K}=await _(()=>ee.changeToken({loginName:x.userInfo.loginName}));if(K)return;const{res:C,err:T}=await _(()=>y.daochuBatchCard({batchCode:s.batchCode,cardType:s.cardType}));T||ae(C,`${s.agentName}_${s.cardType}_${s.batchCode}.xlsx`)};return(s,t)=>{const K=d("a-range-picker"),C=d("a-form-item"),T=d("a-grid-item"),q=d("a-input"),te=d("a-select"),le=d("a-grid"),ne=d("a-form"),oe=d("icon-plus"),L=d("a-button"),re=d("a-space"),E=d("a-popconfirm"),se=d("a-table");return j(),ie("div",null,[a(me,{fold:"","table-columns":e($),"table-size":e(m).size,onResetSearch:e(U),onSearch:e(I),onChangeTableSize:e(i),onChangeTableColumn:e(R)},{form:n(({collapsed:f})=>[a(ne,{model:e(c),"label-align":"left",size:"large","auto-label-width":""},{default:n(()=>[a(le,{cols:{md:3,lg:3,xl:3,xxl:3},"col-gap":12,collapsed:!f},{default:n(()=>[a(T,null,{default:n(()=>[a(C,{label:"发卡时间:"},{default:n(()=>[a(K,{class:"flex1",modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=p=>Z(o)?o.value=p:o=p),onChange:z},null,8,["modelValue"])]),_:1})]),_:1}),a(T,null,{default:n(()=>[a(C,{label:"批次号:"},{default:n(()=>[a(q,{modelValue:e(c).batchCode,"onUpdate:modelValue":t[1]||(t[1]=p=>e(c).batchCode=p),modelModifiers:{trim:!0},placeholder:"请输入批次号"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,null,{default:n(()=>[a(C,{label:"代理商名称:"},{default:n(()=>[a(q,{modelValue:e(c).agentName,"onUpdate:modelValue":t[2]||(t[2]=p=>e(c).agentName=p),modelModifiers:{trim:!0},placeholder:"请输入代理商名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,null,{default:n(()=>[a(C,{label:"销售人员:"},{default:n(()=>[a(q,{modelValue:e(c).sellingUser,"onUpdate:modelValue":t[3]||(t[3]=p=>e(c).sellingUser=p),modelModifiers:{trim:!0},placeholder:"请输入销售人员"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,null,{default:n(()=>[a(C,{label:"商品类型:"},{default:n(()=>[a(te,{modelValue:e(c).cardType,"onUpdate:modelValue":t[4]||(t[4]=p=>e(c).cardType=p),options:[...e(ce),...l.value]},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),operate:n(()=>[a(re,null,{default:n(()=>[a(L,{type:"outline",onClick:t[5]||(t[5]=f=>e(N)("zsAddBatchCard"))},{icon:n(()=>[a(oe)]),default:n(()=>[P(" 发卡 ")]),_:1})]),_:1})]),table:n(()=>[a(se,{"selected-keys":e(m).selectedKeys,"onUpdate:selectedKeys":t[6]||(t[6]=f=>e(m).selectedKeys=f),class:"zs-table","row-key":"batchCode",data:e(g),"row-selection":e(m).rowSelection,bordered:e(m).bordered,pagination:e(m).pagination,size:e(m).size,columns:e(M),stripe:e(m).stripe,loading:e(u)},{operate:n(({record:f})=>[a(E,{content:"确认冻结吗?",onOk:p=>w(f)},{default:n(()=>[a(L,{disabled:f.status=="0",type:"text",status:"danger"},{default:n(()=>[P("冻结")]),_:2},1032,["disabled"])]),_:2},1032,["onOk"]),a(E,{content:"确认解冻吗?",onOk:p=>S(f)},{default:n(()=>[a(L,{disabled:f.status=="1",type:"text"},{default:n(()=>[P("解冻")]),_:2},1032,["disabled"])]),_:2},1032,["onOk"]),a(E,{content:"确认导出吗?",onOk:p=>V(f)},{default:n(()=>[a(L,{type:"text",status:"warning"},{default:n(()=>[P("导出")]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),e(k)==="zsAddBatchCard"?(j(),Y(be,{key:0,data:e(O),spdlList:l.value,onSuccess:e(b),onClose:t[7]||(t[7]=f=>e(h)({},()=>e(N)(null)))},null,8,["data","spdlList","onSuccess"])):ue("",!0)])}}});export{ke as default};
