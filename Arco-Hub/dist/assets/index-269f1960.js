import{a as v,n as g,d as z,q as j,s as G,v as H,x as J,y as Q,r as l,o as u,e as W,g as a,w as t,c as e,z as y,l as b,i as p,k as h,A as X,S as w}from"./index-8a2cb146.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import"./index-2bbe694f.js";const ee=()=>{const{getDictionaryItem:f}=v();return[{title:"线路类型",dataIndex:"linename",show:!0,align:"center",render:({record:r})=>g(r.linename)},{title:"目的地",dataIndex:"lineDesc",show:!0,align:"center",render:({record:r})=>g(r.lineDesc)},{title:"旅行类型",dataIndex:"lineVer",show:!0,align:"center",tooltip:!0,ellipsis:!0,render:({record:r})=>g(f("travelType",r.lineVer).detailName)},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}]},te=z({name:"SystemLineTypeSetting"}),le=z({...te,setup(f){const{vAuthority:r}=j(),{getDictionaryInfo:k}=v(),{warningModal:x}=X(),{form:d,resetForm:D}=G(()=>({linename:"",lineVer:""}),()=>S()),{columnsData:V,visibleColumnsData:$,tableBaseOptions:n,resetData:S,extendTableList:L,changeTableColumn:I,changeTableSize:K}=H(ee(),()=>m()),N=s=>{x(`确定操作选中的${n.selectedKeys.length}数据吗？`,async o=>{const{err:_}=await h(()=>w[s]({idList:n.selectedKeys}),{successMsg:"操作成功"});_||(o(!0),n.selectedKeys=[],m())})},{data:A,loading:R,initData:m}=J(async()=>{const{res:s,err:o}=await h(()=>w.getCooperationRouteList({...d.value,currentPage:n.pagination.current,pageSize:n.pagination.pageSize,pagingOrNot:"1"}));return o?[]:(n.pagination.total=s.data.totalCount,L(s==null?void 0:s.data.cooperatelineList))});return Q(m),(s,o)=>{const _=l("a-input"),C=l("a-form-item"),T=l("a-grid-item"),M=l("a-select"),B=l("a-grid"),U=l("a-form"),E=l("icon-plus"),c=l("a-button"),q=l("icon-close"),F=l("a-space"),O=l("a-button-group"),P=l("a-table");return u(),W("div",null,[a(Z,{"table-columns":e(V),"table-size":e(n).size,onResetSearch:e(D),onSearch:e(S),onChangeTableSize:e(K),onChangeTableColumn:e(I)},{form:t(()=>[a(U,{model:e(d),"label-align":"left",size:"large","auto-label-width":""},{default:t(()=>[a(B,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12},{default:t(()=>[a(T,null,{default:t(()=>[a(C,{label:"线路类型:"},{default:t(()=>[a(_,{modelValue:e(d).linename,"onUpdate:modelValue":o[0]||(o[0]=i=>e(d).linename=i),modelModifiers:{trim:!0},placeholder:"请输入线路类型"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,null,{default:t(()=>[a(C,{label:"旅游类型:"},{default:t(()=>[a(M,{modelValue:e(d).lineVer,"onUpdate:modelValue":o[1]||(o[1]=i=>e(d).lineVer=i),options:e(k)("travelType"),"field-names":{label:"detailName",value:"detailCode"},placeholder:"请选择旅游类型"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),operate:t(()=>[a(F,null,{default:t(()=>[y((u(),b(c,{type:"outline",onClick:o[2]||(o[2]=i=>s.$router.push("/system/lineTypeSetting/operate"))},{icon:t(()=>[a(E)]),default:t(()=>[p(" 新增 ")]),_:1})),[[e(r),"SystemLineTypeSettingAdd"]]),y((u(),b(c,{type:"outline",status:"danger",disabled:!e(n).selectedKeys.length,onClick:o[3]||(o[3]=i=>N("deleteCooperationRoute"))},{icon:t(()=>[a(q)]),default:t(()=>[p(" 删除 ")]),_:1},8,["disabled"])),[[e(r),"SystemLineTypeSettingDelete"]])]),_:1})]),table:t(()=>[a(P,{"selected-keys":e(n).selectedKeys,"onUpdate:selectedKeys":o[4]||(o[4]=i=>e(n).selectedKeys=i),class:"zs-table","row-key":"id",data:e(A),"row-selection":e(n).rowSelection,bordered:e(n).bordered,pagination:e(n).pagination,size:e(n).size,columns:e($),stripe:e(n).stripe,loading:e(R)},{operate:t(({record:i})=>[a(O,null,{default:t(()=>[a(c,{type:"text",status:"success",onClick:Y=>s.$router.push(`/system/lineTypeSetting/areaList?id=${i.id}`)},{default:t(()=>[p("线路详情")]),_:2},1032,["onClick"]),y((u(),b(c,{type:"text",onClick:Y=>s.$router.push(`/system/lineTypeSetting/operate?id=${i.id}`)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"])),[[e(r),"SystemLineTypeSettingEdit"]])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{le as default};