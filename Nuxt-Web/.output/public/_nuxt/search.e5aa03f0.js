import{u as k,i as w,a4 as z,g as I,h as P,n as V,A as L,B as M,p as B,f as R,C as T,s as F}from"./entry.1a40d7cc.js";import{T as O}from"./index.112674ac.js";import"./index.a57cdc53.js";/* empty css              */import{u as W}from"./usePagination.9cd68578.js";import{m as q,a as A,D as U,E as G,Q as s,L as o,M as i,u as e,_ as f}from"./swiper-vue.1d76a0fa.js";import"./index.30d5eb30.js";const $={class:"max-w-container mx-auto min-h-[70vh]"},j={class:"flex items-center mt-[20px]"},H={class:"w-[150px]"},J={class:"w-full ml-[20px]"},Q={class:"w-[120px] ml-[20px]"},ne=q({__name:"search",setup(K){k({title:"职业库"});const d=w(),_=z(),{$zsFetch:h}=R(),[x,r]=I(!1),{form:t}=P(()=>({isMatch:!1,professionName:d.query.keyword??""})),{pagination:n,resetData:c,onPageChange:C,onPageSizeChange:b}=W(()=>{window.scrollTo(0,100),_.replace({query:{...d.query,keyword:t.value.professionName}}),m()}),S=[{title:"职业名称",dataIndex:"levelName",align:"center",ellipsis:!0,tooltip:!0,cellStyle:{textDecorationLine:"underline"},headerCellStyle:{fontSize:"14px",backgroundColor:"#EDEDED",fontWeight:"bold",textDecorationLine:"none"}},{title:"所属大类",dataIndex:"level1Name",align:"center",ellipsis:!0,tooltip:!0,headerCellStyle:{fontSize:"14px",backgroundColor:"#EDEDED",fontWeight:"bold"}},{title:"所属中类",dataIndex:"level2Name",align:"center",ellipsis:!0,tooltip:!0,headerCellStyle:{fontSize:"14px",backgroundColor:"#EDEDED",fontWeight:"bold"}},{title:"所属小类",dataIndex:"level3Name",align:"center",ellipsis:!0,tooltip:!0,headerCellStyle:{fontSize:"14px",backgroundColor:"#EDEDED",fontWeight:"bold"}}],v=l=>{V(`/jobLibrary/${l.id}`)},p=A([]),m=async()=>{r(!0);const[l,a]=await h(L.MORE.GET_PROFESSION_FILTERING,{body:{professionName:t.value.professionName,isMatch:t.value.isMatch?"1":"0",currentPage:n.value.current,pageSize:n.value.pageSize,pagingOrNot:1}});if(l)return r(!1);r(!1),n.value.total=a.data.totalCount,p.value=a.data.list};return m(),(l,a)=>{const E=T,g=M,N=F,y=B,D=O;return U(),G("div",$,[s("div",j,[s("div",H,[o(g,{size:"large"},{default:i(()=>[o(E,{modelValue:e(t).isMatch,"onUpdate:modelValue":a[0]||(a[0]=u=>e(t).isMatch=u),onChange:e(c)},{default:i(()=>[f(" 完全匹配 ")]),_:1},8,["modelValue","onChange"])]),_:1})]),s("div",J,[o(y,{size:"large",modelValue:e(t).professionName,"onUpdate:modelValue":a[1]||(a[1]=u=>e(t).professionName=u),modelModifiers:{trim:!0},class:"rounded-lg h-[38px]",placeholder:"搜索你感兴趣的职业",onClear:e(c),"allow-clear":""},{prefix:i(()=>[o(N)]),_:1},8,["modelValue","onClear"])]),s("div",Q,[o(g,{type:"primary",size:"large",class:"openButton w-[120px]",onClick:e(c)},{default:i(()=>[f(" 搜索 ")]),_:1},8,["onClick"])])]),o(D,{class:"mt-[20px] cursor-pointer","table-layout-fixed":"",columns:S,data:e(p),bordered:{wrapper:!0,cell:!0},pagination:e(n),onRowClick:v,onPageChange:e(C),onPageSizeChange:e(b),loading:e(x)},null,8,["data","pagination","onPageChange","onPageSizeChange","loading"])])}}});export{ne as default};