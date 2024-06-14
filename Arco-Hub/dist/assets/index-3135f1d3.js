import{n as b,X as q,d as T,q as F,s as H,v as P,x as X,y as j,r as l,o as m,e as G,g as o,w as t,c as e,z as f,l as y,i as p,k as w,A as J,S as k}from"./index-8a2cb146.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-54cd5f3e.js";import"./index-2bbe694f.js";const W=()=>[{title:"角色代码",dataIndex:"roleCode",show:!0,align:"center",render:({record:i})=>b(i.roleCode)},{title:"角色名称",dataIndex:"rolename",show:!0,align:"center",render:({record:i})=>b(i.rolename)},{title:"操作时间",dataIndex:"updateTime",show:!0,align:"center",render:({record:i})=>q(i.updateTime,"YYYY-MM-DD HH:mm:ss")},{title:"备注",dataIndex:"remark",show:!0,align:"center",render:({record:i})=>b(i.remark)},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],Z=T({name:"SystemRoleManage"}),oe=T({...Z,setup(i){const{vAuthority:_}=F(),{warningModal:x}=J(),{form:d,resetForm:z}=H(()=>({roleCode:"",rolename:""}),()=>C()),{columnsData:M,visibleColumnsData:v,tableBaseOptions:a,resetData:C,extendTableList:D,changeTableColumn:R,changeTableSize:$}=P(W(),()=>g()),V=s=>{x(`确定操作选中的${a.selectedKeys.length}数据吗？`,async n=>{const{res:u}=await w(()=>k[s]({idList:a.selectedKeys}),{successMsg:"操作成功"});n(!0),u&&(a.selectedKeys=[],g())})},{data:I,loading:K,initData:g}=X(async()=>{const{res:s,err:n}=await w(()=>k.getRoleList({...d.value,currentPage:a.pagination.current,pageSize:a.pagination.pageSize,pagingOrNot:"1"}));return n?[]:(a.pagination.total=s.data.totalCount,D(s==null?void 0:s.data.roleList))});return j(g),(s,n)=>{const u=l("a-input"),h=l("a-form-item"),S=l("a-grid-item"),A=l("a-grid"),N=l("a-form"),Y=l("icon-plus"),c=l("a-button"),B=l("icon-close"),L=l("a-space"),U=l("a-button-group"),E=l("a-table");return m(),G("div",null,[o(Q,{"table-columns":e(M),"table-size":e(a).size,onResetSearch:e(z),onSearch:e(C),onChangeTableSize:e($),onChangeTableColumn:e(R)},{form:t(()=>[o(N,{model:e(d),"label-align":"left",size:"large","auto-label-width":""},{default:t(()=>[o(A,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12},{default:t(()=>[o(S,null,{default:t(()=>[o(h,{field:"code",label:"角色代码:"},{default:t(()=>[o(u,{modelValue:e(d).roleCode,"onUpdate:modelValue":n[0]||(n[0]=r=>e(d).roleCode=r),placeholder:"请输入角色代码"},null,8,["modelValue"])]),_:1})]),_:1}),o(S,null,{default:t(()=>[o(h,{field:"uname",label:"角色名称:"},{default:t(()=>[o(u,{modelValue:e(d).rolename,"onUpdate:modelValue":n[1]||(n[1]=r=>e(d).rolename=r),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),operate:t(()=>[o(L,null,{default:t(()=>[f((m(),y(c,{type:"outline",onClick:n[2]||(n[2]=r=>s.$router.push("/system/roleManage/operate"))},{icon:t(()=>[o(Y)]),default:t(()=>[p(" 新增 ")]),_:1})),[[e(_),"SystemRoleManageAdd"]]),f((m(),y(c,{type:"outline",status:"danger",disabled:!e(a).selectedKeys.length,onClick:n[3]||(n[3]=r=>V("batchDeleteRole"))},{icon:t(()=>[o(B)]),default:t(()=>[p(" 删除 ")]),_:1},8,["disabled"])),[[e(_),"SystemRoleManageDelete"]])]),_:1})]),table:t(()=>[o(E,{"selected-keys":e(a).selectedKeys,"onUpdate:selectedKeys":n[4]||(n[4]=r=>e(a).selectedKeys=r),class:"zs-table","row-key":"id",data:e(I),"row-selection":e(a).rowSelection,bordered:e(a).bordered,pagination:e(a).pagination,size:e(a).size,columns:e(v),stripe:e(a).stripe,loading:e(K)},{operate:t(({record:r})=>[o(U,null,{default:t(()=>[o(c,{type:"text",status:"success",onClick:O=>s.$router.push(`/system/roleManage/operate?id=${r.id}&isReadOnly=true`)},{default:t(()=>[p("详情")]),_:2},1032,["onClick"]),f((m(),y(c,{type:"text",onClick:O=>s.$router.push(`/system/roleManage/operate?id=${r.id}`)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"])),[[e(_),"SystemRoleManageEdit"]])]),_:2},1024)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"])])}}});export{oe as default};