import{u as et,h as at,c as D,A as L,d as O,B as st,p as ot,S as lt,e as V,t as y,f as nt,C as rt,s as dt,_ as it}from"./entry.1a40d7cc.js";import{_ as ct}from"./index.vue.bf4eae92.js";import{L as pt,a as mt,b as ut}from"./index.83d9b74c.js";import{_ as _t}from"./nuxt-link.bd044dc4.js";import{_ as xt}from"./index.vue.372ac32c.js";import{P as ht}from"./index.a57cdc53.js";import{u as Ft}from"./usePagination.9cd68578.js";import{I as gt,a as ft}from"./index.7069583a.js";import{m as yt,ad as S,D as _,E as R,Q as o,L as n,M as r,u as t,_ as x,G as v,P as g,R as m,N as vt,O as bt}from"./swiper-vue.1d76a0fa.js";import"./index.30d5eb30.js";const zt={class:"max-w-container mx-auto min-h-[70vh]"},Ct={class:"flex items-center mt-[20px]"},wt={class:"w-[150px]"},kt={class:"w-full ml-[20px]"},Dt={class:"w-[120px] ml-[20px] rounded-[8px]"},Lt={class:"mt-[10px] flex flex-col"},St={class:"text-[#FFA864]"},Et={class:"text-[20px] text-[#333333] mb-[10px] font-bold"},At={class:"text-[14px] text-[#333333]"},Tt={class:"mt-[10px]"},Mt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},It={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},$t={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Pt={class:"text-price"},Bt=yt({__name:"index",async setup(Nt){let l,h;et({title:"查专业"});const{$zsFetch:w}=nt(),{form:s}=at(()=>({isMatch:!1,zymc:"",sort:""})),{pagination:k,resetData:b,onPageChange:W,onPageSizeChange:G}=Ft(()=>{window.scrollTo(0,0),H()}),J=async e=>{e.levelCode!==f.value.levelCode&&(f.value.levelCode=e.levelCode,F.value.xkmldm="",z.value.zyldm=[""],await U()),e.xkmldm!==F.value.xkmldm&&(F.value.xkmldm=e.xkmldm,z.value.zyldm=[""],await Z()),b()},E=e=>{s.value.sort===`${e} desc`?s.value.sort=`${e} asc`:s.value.sort===`${e} asc`?s.value.sort="":s.value.sort=`${e} desc`,b()},{data:f}=([l,h]=S(async()=>D("ccList",async()=>{var d,i;const[e,a]=await w(L.MAJOR.GET_CC_LIST,{}),p=((d=a==null?void 0:a.data)==null?void 0:d.map(C=>({...C,value:C.levelCode,label:C.levelName})))??[];return{title:"专业层次",key:"levelCode",isShow:!0,multiple:!1,options:p,levelCode:((i=p[0])==null?void 0:i.value)??""}})),l=await l,h(),l),{data:F,refresh:U}=([l,h]=S(async()=>D("mlList",async()=>{var d;const[e,a]=await w(L.MAJOR.GET_X_KML_LIST,{body:{levelCode:f.value.levelCode}}),p=((d=a==null?void 0:a.data)==null?void 0:d.map(i=>({...i,value:i.xkmldm,label:i.xkml})))??[];return{title:"专业门类",key:"xkmldm",isShow:!0,multiple:!1,options:[...O,...p],xkmldm:""}})),l=await l,h(),l),{data:z,refresh:Z}=([l,h]=S(async()=>D("zylList",async()=>{var d;const[e,a]=await w(L.MAJOR.GET_ZYL_LIST,{body:{xkmldm:F.value.xkmldm}}),p=((d=a==null?void 0:a.data)==null?void 0:d.map(i=>({...i,value:i.zyldm,label:i.zyl})))??[];return{title:"专业大类",key:"zyldm",isShow:!!F.value.xkmldm,multiple:!0,options:[...O,...p],zyldm:[""]}})),l=await l,h(),l),{data:A,status:j,refresh:H}=([l,h]=S(async()=>D("majorList",async()=>{var p,d;const[e,a]=await w(L.MAJOR.GET_MAJOR_LIST,{body:{zymc:s.value.zymc,isMatch:s.value.isMatch?"1":"0",cc:f.value.levelCode,xkml:F.value.xkmldm,zyl:z.value.zyldm.join("/"),sort:s.value.sort,currentPage:k.value.current,pageSize:k.value.pageSize,pagingOrNot:1}});return{list:((p=a==null?void 0:a.data)==null?void 0:p.list)??[],total:((d=a==null?void 0:a.data)==null?void 0:d.totalCount)??0}},{default:()=>({total:0,list:[]})})),l=await l,h(),l);return(e,a)=>{var P,B,N;const p=rt,d=st,i=dt,C=ot,K=ct,T=gt,M=ft,I=lt,Q=mt,$=_t,X=ut,Y=xt,q=pt,tt=ht;return _(),R("div",zt,[o("div",Ct,[o("div",wt,[n(d,{size:"large"},{default:r(()=>[n(p,{modelValue:t(s).isMatch,"onUpdate:modelValue":a[0]||(a[0]=u=>t(s).isMatch=u),onChange:t(b)},{default:r(()=>[x(" 完全匹配 ")]),_:1},8,["modelValue","onChange"])]),_:1})]),o("div",kt,[n(C,{size:"large",modelValue:t(s).zymc,"onUpdate:modelValue":a[1]||(a[1]=u=>t(s).zymc=u),modelModifiers:{trim:!0},class:"rounded-[8px] h-[38px]",placeholder:"搜索专业名称",onClear:t(b),"allow-clear":""},{prefix:r(()=>[n(i)]),_:1},8,["modelValue","onClear"])]),o("div",Dt,[n(d,{type:"primary",class:"openButton w-[120px]",size:"large",onClick:t(b)},{default:r(()=>[x(" 搜索 ")]),_:1},8,["onClick"])])]),n(K,{data:[t(f),t(F),t(z)],"default-values":{...t(s),levelCode:(P=t(f))==null?void 0:P.levelCode,xkmldm:(B=t(F))==null?void 0:B.xkmldm,zyldm:(N=t(z))==null?void 0:N.zyldm},onChange:J,class:"mt-[20px]"},null,8,["data","default-values"]),o("div",Lt,[n(I,{class:"h-[40px]"},{default:r(()=>[o("div",{class:v(["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer",{"bg-[#7C92FF] text-white":t(s).sort.startsWith("graduate_scale")}]),onClick:a[2]||(a[2]=u=>E("graduate_scale"))},[x(" 年度毕业生规模 "),t(s).sort==="graduate_scale asc"?(_(),g(T,{key:0})):(_(),g(M,{key:1}))],2),o("div",{class:v(["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer",{"bg-[#7C92FF] text-white":t(s).sort.startsWith("pjxz")}]),onClick:a[3]||(a[3]=u=>E("pjxz"))},[x(" 薪酬排名 "),t(s).sort==="pjxz asc"?(_(),g(T,{key:0})):(_(),g(M,{key:1}))],2),o("div",{class:v(["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer",{"bg-[#7C92FF] text-white":t(s).sort.startsWith("boy_rate")}]),onClick:a[4]||(a[4]=u=>E("boy_rate"))},[x(" 男女比例 "),t(s).sort==="boy_rate asc"?(_(),g(T,{key:0})):(_(),g(M,{key:1}))],2),o("div",null,[x(" 共找到符合条件的专业 "),o("span",St,m(("turnThousandth"in e?e.turnThousandth:t(V))(t(A).total)),1),x(" 个 ")])]),_:1}),n(q,{bordered:!1,loading:t(j)==="pending"},{empty:r(()=>[n(Y)]),default:r(()=>{var u;return[(_(!0),R(vt,null,bt((u=t(A))==null?void 0:u.list,c=>(_(),g(X,{key:c.id,class:"border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"},{actions:r(()=>[n($,{to:`/major/${c.id}?tab=school`},{default:r(()=>[n(d,{type:"primary",class:"openButton"},{default:r(()=>[x("开设院校")]),_:1})]),_:2},1032,["to"])]),default:r(()=>[n($,{to:`/major/${c.id}`},{default:r(()=>[n(Q,{class:"mr-[10px] cursor-pointer"},{title:r(()=>[o("div",Et,m(c.zymc),1)]),description:r(()=>[n(I,{class:"flex flex-wrap items-center"},{default:r(()=>[o("span",At,m(c.xkml)+"/"+m(c.zyl),1)]),_:2},1024),o("div",Tt,[n(I,{class:"flex flex-wrap items-center"},{default:r(()=>[o("span",Mt," 专业代码："+m(("textFormat"in e?e.textFormat:t(y))(c.zydm)),1),o("span",It," 修业年限："+m(("textFormat"in e?e.textFormat:t(y))(c.xyNx)),1),o("span",$t," 授予学位："+m(("textFormat"in e?e.textFormat:t(y))(c.syxw)),1),o("span",{class:v(["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]",{"bg-[#FFF7F0] text-[#FFA864]":t(s).sort.startsWith("graduate_scale")}])}," 年度毕业生规模："+m(("textFormat"in e?e.textFormat:t(y))(c.graduateScale)),3),o("span",{class:v(["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]",{"bg-[#FFF7F0] text-[#FFA864]":t(s).sort.startsWith("boy_rate")}])}," 男女比例："+m(("textFormat"in e?e.textFormat:t(y))(c.xbBl)),3),o("span",{class:v(["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]",{"bg-[#FFF7F0] text-[#FFA864]":t(s).sort.startsWith("pjxz")}])},[x(" 平均薪酬："),o("span",Pt,m(("textFormat"in e?e.textFormat:t(y))(("turnThousandth"in e?e.turnThousandth:t(V))(c.pjxz))),1)],2)]),_:2},1024)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]}),_:1},8,["loading"]),n(tt,{class:"justify-end mt-[20px]",total:t(A).total,current:t(k).current,"page-size":t(k).pageSize,onChange:t(W),onPageSizeChange:t(G),"show-total":"","show-jumper":"","show-page-size":""},null,8,["total","current","page-size","onChange","onPageSizeChange"])])])}}});const Kt=it(Bt,[["__scopeId","data-v-079611ea"]]);export{Kt as default};
