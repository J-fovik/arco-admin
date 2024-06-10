import{d as I,h as L,i as F,n as O,j as q,r as u,o as x,l as f,w as r,a as n,b as t,v as J,m as A,x as Q,c as W,p as S,e as K,s as X,M as Y}from"./index-d007178a.js";import{f as a,_ as Z}from"./index.vue_vue_type_script_setup_true_name_ZsSearchTableMould_lang-430f1ffc.js";import{C as j}from"./customer-dc025a69.js";import"./index-13860ba0.js";const ee=()=>[{title:"序号",width:80,dataIndex:"sortTableNo",show:!0,align:"center"},{title:"顾客昵称",dataIndex:"nickname",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.nickname)},{title:"手机号",dataIndex:"phone",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.phone)},{title:"代理商名称",dataIndex:"agentname",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.agentname)},{title:"代理商专属码",dataIndex:"dedicatedcode",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.dedicatedcode)},{title:"省份",dataIndex:"province",show:!0,align:"center",render:({record:e})=>a(e.province)},{title:"选科",dataIndex:"xk",show:!0,align:"center",render:({record:e})=>a(e.xk)},{title:"科类",dataIndex:"kl",show:!0,align:"center",render:({record:e})=>a(e.kl)},{title:"分数",dataIndex:"score",show:!0,align:"center",render:({record:e})=>a(e.score)},{title:"志愿模式",dataIndex:"zyms",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.zyms)},{title:"服务进度",dataIndex:"progress",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.progress)},{title:"提交时间",dataIndex:"submttime",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.submttime)},{title:"详情记录",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],te=()=>[{title:"序号",width:80,dataIndex:"sortTableNo",show:!0,align:"center"},{title:"院校名称",dataIndex:"yxmc",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.yxmc)},{title:"专业名称",dataIndex:"zymc",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.zymc)},{title:"预估分",dataIndex:"ygf",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.ygf)},{title:"预估分区间",dataIndex:"ygfqj",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.ygfqj)},{title:"录取概率",dataIndex:"lqgl",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.lqgl)},{title:"专业层次",dataIndex:"cc",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:e})=>a(e.cc)},{title:"科类",dataIndex:"kl",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.kl)},{title:"批次",dataIndex:"pc",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.pc)},{title:"专业类",dataIndex:"zyl",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.zyl)},{title:"学科门类",dataIndex:"xkml",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.xkml)},{title:"院校所属省份",dataIndex:"yxsf",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.yxsf)},{title:"院校所属城市",dataIndex:"yxcs",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.yxcs)},{title:"院校所属层次",dataIndex:"yxcc",show:!0,tooltip:!0,ellipsis:!0,align:"center",render:({record:e})=>a(e.yxcc)}],le=I({name:"zsViewRecord"}),ae=I({...le,props:{data:{default:()=>({})}},emits:["close","success"],setup(e,{emit:_}){const C=e,[h,o]=L(null),{form:z,resetForm:v}=F(()=>({...C.data})),{selectRow:N,columnsData:R,visibleColumnsData:i,tableBaseOptions:p,resetData:D,extendTableList:M,createRowNo:y,setSelectRow:U,changeTableColumn:E,changeTableSize:$}=O(te(),()=>k()),{data:w,loading:T,initData:k}=q(async()=>{const{res:g,err:l}=await A(()=>j.getExportFillListDetail({sid:z.value.id,currentPage:p.pagination.current,pageSize:p.pagination.pageSize,pagingOrNot:"1"}));return l?[]:g.data.map((b,c)=>({sortTableNo:y(c),...b}))});return(g,l)=>{const b=u("a-table"),c=u("a-modal");return x(),f(c,{width:"90vw",title:"专家填详情","unmount-on-close":"",visible:"","ok-text":"关闭","align-center":!1,"mask-closable":!1,"hide-cancel":"","ok-loading":t(h)==="okLoading",onCancel:l[1]||(l[1]=m=>_("close")),onOk:l[2]||(l[2]=m=>_("close"))},{default:r(()=>[n(b,{modelValue:t(w),"onUpdate:modelValue":l[0]||(l[0]=m=>J(w)?w.value=m:null),class:"zs-table","row-key":"id",data:t(w),bordered:t(p).bordered,size:t(p).size,columns:t(i),stripe:t(p).stripe,loading:t(T)},null,8,["modelValue","data","bordered","size","columns","stripe","loading"])]),_:1},8,["ok-loading"])}}}),ne=["href","download"],re=I({name:"exportFillRecord"}),ue=I({...re,setup(e){const _=Q(),[C,h]=L(null),{form:o,resetForm:z}=F(()=>({phone:"",userId:"",submttimeStartTime:"",submttimeEndTime:"",nickName:"",dedicatedCode:"",agentName:""}),()=>p()),{selectRow:v,columnsData:N,visibleColumnsData:R,tableBaseOptions:i,resetData:p,extendTableList:D,createRowNo:M,setSelectRow:y,changeTableColumn:U,changeTableSize:E}=O(ee(),()=>k()),$=g=>{g.schemelink||Y.error("暂未上传报告")},{data:w,loading:T,initData:k}=q(async()=>{const{res:g,err:l}=await A(()=>j.getExportFillList({...o.value,submttimeStartTime:o.value.submttimeStartTime,submttimeEndTime:o.value.submttimeEndTime,currentPage:i.pagination.current,pageSize:i.pagination.pageSize,pagingOrNot:"1"}));return l?[]:(i.pagination.total=g.data.totalCount,D(g.data.resultList))});return(g,l)=>{const b=u("a-input"),c=u("a-form-item"),m=u("a-grid-item"),B=u("a-date-picker"),P=u("a-grid"),G=u("a-form"),V=u("a-button"),H=u("a-table");return x(),W("div",null,[n(Z,{fold:"","table-columns":t(N),"table-size":t(i).size,onResetSearch:t(z),onSearch:t(p),onChangeTableSize:t(E),onChangeTableColumn:t(U)},{form:r(({collapsed:d})=>[n(G,{model:t(o),"label-align":"left",size:"large","auto-label-width":""},{default:r(()=>[n(P,{cols:{md:3,lg:3,xl:3,xxl:4},"col-gap":12,collapsed:!d},{default:r(()=>[n(m,null,{default:r(()=>[n(c,{label:"顾客昵称:"},{default:r(()=>[n(b,{modelValue:t(o).nickName,"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).nickName=s),placeholder:"请输入顾客昵称"},null,8,["modelValue"])]),_:1})]),_:1}),n(m,null,{default:r(()=>[n(c,{label:"手机号:"},{default:r(()=>[n(b,{modelValue:t(o).phone,"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).phone=s),placeholder:"请输入顾客手机号"},null,8,["modelValue"])]),_:1})]),_:1}),n(m,null,{default:r(()=>[n(c,{label:"提交时间:"},{default:r(()=>[n(B,{style:{width:"200px"},modelValue:t(o).submttimeStartTime,"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).submttimeStartTime=s)},null,8,["modelValue"]),n(B,{style:{width:"200px"},modelValue:t(o).submttimeEndTime,"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).submttimeEndTime=s)},null,8,["modelValue"])]),_:1})]),_:1}),t(_).userInfo.roleCode!="dls"?(x(),f(m,{key:0},{default:r(()=>[n(c,{label:"代理商名称:"},{default:r(()=>[n(b,{modelValue:t(o).agentName,"onUpdate:modelValue":l[4]||(l[4]=s=>t(o).agentName=s),placeholder:"请输入代理商名称"},null,8,["modelValue"])]),_:1})]),_:1})):S("",!0),t(_).userInfo.roleCode!="dls"?(x(),f(m,{key:1},{default:r(()=>[n(c,{label:"代理商专属码:"},{default:r(()=>[n(b,{modelValue:t(o).dedicatedCode,"onUpdate:modelValue":l[5]||(l[5]=s=>t(o).dedicatedCode=s),placeholder:"请输入代理商专属码"},null,8,["modelValue"])]),_:1})]),_:1})):S("",!0)]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),table:r(()=>[n(H,{"selected-keys":t(i).selectedKeys,"onUpdate:selectedKeys":l[6]||(l[6]=d=>t(i).selectedKeys=d),class:"zs-table","row-key":"id",data:t(w),"row-selection":t(i).rowSelection,bordered:t(i).bordered,pagination:t(i).pagination,size:t(i).size,columns:t(R),stripe:t(i).stripe,loading:t(T)},{operate:r(({record:d})=>[n(V,{type:"text",onClick:s=>t(y)(d,()=>t(h)("zsViewRecord"))},{default:r(()=>[K("查看")]),_:2},1032,["onClick"]),d.schemelink?(x(),f(V,{key:0,type:"text"},{default:r(()=>[X("a",{href:d.schemelink,download:d.schemelink},"下载报告",8,ne)]),_:2},1024)):(x(),f(V,{key:1,type:"text",onClick:s=>$(d)},{default:r(()=>[K("下载报告")]),_:2},1032,["onClick"]))]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),t(C)==="zsViewRecord"?(x(),f(ae,{key:0,data:t(v),onSuccess:t(k),onClose:l[7]||(l[7]=d=>t(y)({},()=>t(h)(null)))},null,8,["data","onSuccess"])):S("",!0)])}}});export{ue as default};
