import{n as u,d,E as k,s as D,v,b as I,r as l,o as B,e as L,g as t,w as s,c as e,k as P}from"./index-8a2cb146.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import{S as E}from"./supplier-c338fe4b.js";import"./index-2bbe694f.js";const K=()=>[{title:"供应商名称",dataIndex:"supName",show:!0,align:"center",render:({record:n})=>u(n.supName)},{title:"合作线路名称",dataIndex:"linename",show:!0,align:"center",render:({record:n})=>u(n.linename)},{title:"创建时间",dataIndex:"createTime",show:!0,align:"center",render:({record:n})=>u(n.createTime)}],U=d({name:"SupplierCooperationRouteManage"}),j=d({...U,setup(n){k(null);const{form:i,resetForm:p}=D(()=>({supName:""}),()=>m()),{selectRow:A,columnsData:g,visibleColumnsData:_,tableBaseOptions:a,resetData:m,setSelectRow:F,extendTableList:b,changeTableColumn:f,changeTableSize:S}=v(K(),()=>w()),{data:C,loading:h,initData:w}=I(async()=>{const{res:r,err:o}=await P(()=>E.getSupCoopList({...i.value,currentPage:a.pagination.current,pageSize:a.pagination.pageSize,pagingOrNot:"1"}));return o?[]:(a.pagination.total=r.data.totalCount,b(r==null?void 0:r.data.lineList))});return(r,o)=>{const z=l("a-input"),T=l("a-form-item"),x=l("a-grid-item"),y=l("a-grid"),N=l("a-form"),R=l("a-table");return B(),L("div",null,[t(V,{"table-columns":e(g),"table-size":e(a).size,onResetSearch:e(p),onSearch:e(m),onChangeTableSize:e(S),onChangeTableColumn:e(f)},{form:s(()=>[t(N,{model:e(i),"label-align":"left",size:"large","auto-label-width":""},{default:s(()=>[t(y,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12},{default:s(()=>[t(x,null,{default:s(()=>[t(T,{label:"供应商名称:"},{default:s(()=>[t(z,{modelValue:e(i).supName,"onUpdate:modelValue":o[0]||(o[0]=c=>e(i).supName=c),placeholder:"请选择供应商"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),table:s(()=>[t(R,{"selected-keys":e(a).selectedKeys,"onUpdate:selectedKeys":o[1]||(o[1]=c=>e(a).selectedKeys=c),class:"zs-table","row-key":"id",data:e(C),"row-selection":e(a).rowSelection,bordered:e(a).bordered,pagination:e(a).pagination,size:e(a).size,columns:e(_),stripe:e(a).stripe,loading:e(h)},null,8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{j as default};
