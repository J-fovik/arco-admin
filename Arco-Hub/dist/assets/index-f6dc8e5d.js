import{n as c,p as u,O as m,P as p,d as k,E as N,s as E,v as F,b as K,r as l,o as U,e as A,g as t,w as o,c as e,i as L,Q as O}from"./index-8a2cb146.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import"./index-2bbe694f.js";const Z=()=>[{title:"编号",dataIndex:"key1",show:!0,align:"center",render:({record:a})=>c(a.key1)},{title:"名称",dataIndex:"key2",show:!0,align:"center",ellipsis:!0,tooltip:!0,render:({record:a})=>c(a.key2)},{title:"单价",dataIndex:"key7",show:!0,align:"right",render:({record:a})=>u("span",{class:"text-red text-price"},m(p(a.key7)))},{title:"可租车天数",dataIndex:"key7",show:!0,align:"right",render:({record:a})=>c("10天")},{title:"押金",dataIndex:"key7",show:!0,align:"right",render:({record:a})=>u("span",{class:"text-red text-price"},m(p(a.key7)))},{title:"总费用(元)",dataIndex:"key7",show:!0,align:"right",render:({record:a})=>u("span",{class:"text-red text-price"},m(p(a.key7)))},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],P=k({name:"ReconciliationBusinessBookingCar"}),J=k({...P,setup(a){N(null);const{form:s,resetForm:f}=E(()=>({code:"",uname:"",address:"",createTimeStart:"",createTimeEnd:""}),()=>_()),{selectRow:Q,columnsData:h,visibleColumnsData:x,tableBaseOptions:n,resetData:_,setSelectRow:$,extendTableList:w,changeTableColumn:T,changeTableSize:C}=F(Z(),()=>B()),{data:S,loading:z,initData:B}=K(async()=>(await O(1e3),n.pagination.total=10,w([{id:"80103410000000000000493",key1:"1020",key2:"SDW-ZBLZWSB-23-0929A",key3:"金秋版 青甘宝典双飞8日游",key4:"淄博临淄闻韶北营业部",key5:"鲸派旅游",key6:"2023-09-18",key7:"0",key8:"13000",key9:"17.22",key10:"营业部取消订单",key11:"退团完成"}])));return(j,r)=>{const g=l("a-input"),b=l("a-form-item"),y=l("a-grid-item"),V=l("a-grid"),D=l("a-form"),I=l("a-button"),R=l("a-button-group"),v=l("a-table");return U(),A("div",null,[t(W,{fold:"","table-columns":e(h),"table-size":e(n).size,onResetSearch:e(f),onSearch:e(_),onChangeTableSize:e(C),onChangeTableColumn:e(T)},{form:o(({collapsed:d})=>[t(D,{model:e(s),"label-align":"left",size:"large","auto-label-width":""},{default:o(()=>[t(V,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!d},{default:o(()=>[t(y,null,{default:o(()=>[t(b,{field:"code",label:"编号:"},{default:o(()=>[t(g,{modelValue:e(s).code,"onUpdate:modelValue":r[0]||(r[0]=i=>e(s).code=i),placeholder:"请输入编号"},null,8,["modelValue"])]),_:1})]),_:1}),t(y,null,{default:o(()=>[t(b,{field:"code",label:"名称:"},{default:o(()=>[t(g,{modelValue:e(s).code,"onUpdate:modelValue":r[1]||(r[1]=i=>e(s).code=i),placeholder:"请输入名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),table:o(()=>[t(v,{"selected-keys":e(n).selectedKeys,"onUpdate:selectedKeys":r[2]||(r[2]=d=>e(n).selectedKeys=d),class:"zs-table","row-key":"id",data:e(S),"row-selection":e(n).rowSelection,bordered:e(n).bordered,pagination:e(n).pagination,size:e(n).size,columns:e(x),stripe:e(n).stripe,loading:e(z)},{operate:o(({record:d})=>[t(R,null,{default:o(()=>[t(I,{type:"text"},{default:o(()=>[L("详情")]),_:1})]),_:1})]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{J as default};
