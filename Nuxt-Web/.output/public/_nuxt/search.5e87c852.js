import{u as pt,i as ut,a as ct,h as xt,c as A,A as M,R as ht,k as gt,e as T,n as R,t as g,f as mt,z as _t,S as bt,_ as Ft}from"./entry.1a40d7cc.js";import{_ as ft}from"./index.vue.316b2516.js";import{L as vt,b as yt}from"./index.83d9b74c.js";import{_ as Ct}from"./index.vue.52b77a9f.js";import{_ as wt}from"./index.vue.372ac32c.js";import{P as Lt}from"./index.a57cdc53.js";import{u as O}from"./usePagination.9cd68578.js";import{m as St,a as Tt,ad as H,b as zt,D as l,E as c,L as d,M as r,u as t,N as m,P as L,I as z,O as k,Q as a,R as o,G as kt,_ as S,aa as Pt,ab as Rt}from"./swiper-vue.1d76a0fa.js";import"./index.30d5eb30.js";const P=N=>(Pt("data-v-120037b5"),N=N(),Rt(),N),Et={class:"max-w-container mx-auto min-h-[60vh]"},Nt=P(()=>a("div",{class:"h-[0.5px] border-b-[#7C92FF] mt-[2px] border"},null,-1)),Dt={key:0},$t={class:"flex items-center m-[20px_0px_10px]"},It=P(()=>a("div",{class:"rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"},null,-1)),Bt={class:"ml-[10px] text-[18px] text-[#333] font-bold"},At={class:"text-[14px] text-[#999999]"},Mt=["onClick"],Ht=P(()=>a("i",{class:"iconfont icon-jiantou ml-[5px]"},null,-1)),Ut={class:"flex items-center m-[20px_0px_10px]"},Yt=P(()=>a("div",{class:"rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"},null,-1)),jt={class:"ml-[10px] text-[18px] text-[#333] font-bold"},Ot={class:"text-[14px] text-[#999999]"},Vt=["innerHTML"],Jt={class:"text-[14px] text-[#333333]"},Qt={class:"mt-[10px]"},qt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Zt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Gt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Kt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Wt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Xt={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},te={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},ee={class:"text-price"},ae=P(()=>a("i",{class:"iconfont icon-jiantou ml-[5px]"},null,-1)),ne={class:"flex items-center m-[20px_0px_10px]"},se=P(()=>a("div",{class:"rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"},null,-1)),oe={class:"ml-[10px] text-[18px] text-[#333] font-bold"},ie={class:"text-[14px] text-[#999999]"},le=["innerHTML"],re={class:"text-[14px] text-[#333333]"},de=P(()=>a("i",{class:"iconfont icon-jiantou ml-[5px]"},null,-1)),pe=["onClick"],ue=["innerHTML"],ce={class:"text-[14px] text-[#333333]"},xe={class:"mt-[10px]"},he={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},ge={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},me={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},_e={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},be={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},Fe={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},fe={class:"bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"},ve={class:"text-price"},ye=["innerHTML"],Ce={class:"text-[14px] text-[#333333]"},we=St({__name:"search",async setup(N){let u,w;pt({title:"全局搜索"});const{$zsFetch:D}=mt(),$=ut(),{userInfo:V}=ct(),{form:F}=xt(()=>({tabRadio:"综合",tabRadioList:["综合","院校","专业","职业"]})),v=Tt($.query.keyword),{pagination:I,onPageChange:Z,onPageSizeChange:G}=O(()=>{window.scrollTo(0,0),nt()}),{pagination:E,onPageChange:K,onPageSizeChange:W}=O(()=>{window.scrollTo(0,0),ot()}),{pagination:U,onPageChange:X,onPageSizeChange:tt}=O(()=>{window.scrollTo(0,0),lt()}),B=e=>{let n='<span class="text-[#FFA864]">$&</span>',x=new RegExp($.query.keyword,"gi");return e.replace(x,n)},{data:b,status:et}=([u,w]=H(async()=>A("synthesisData",async()=>{var x,_,h,p,y,C;const[e,n]=await D(M.PUBLIC.QUERY_SYNTHESIS_LIST_BY_NAME,{body:{name:v.value,sf:V.value.province}});return{...n.data,schoolList:((_=(x=n==null?void 0:n.data)==null?void 0:x.schoolList)==null?void 0:_.map(f=>({...f,highlightYxmc:f.yxmc})))??[],majorList:((p=(h=n==null?void 0:n.data)==null?void 0:h.majorList)==null?void 0:p.map(f=>({...f,highlightZymc:f.zymc})))??[],jobList:((C=(y=n==null?void 0:n.data)==null?void 0:y.jobList)==null?void 0:C.map(f=>({...f,highlightJob:f.levelName})))??[]}},{watch:[v]})),u=await u,w(),u),{data:J,status:at,refresh:nt}=([u,w]=H(async()=>A("schoolList",async()=>{var x,_,h;const[e,n]=await D(M.PUBLIC.QUERY_SCHOOL_LIST_BY_NAME,{body:{name:v.value,currentPage:I.value.current,pageSize:I.value.pageSize,pagingOrNot:1}});return{list:((_=(x=n==null?void 0:n.data)==null?void 0:x.list)==null?void 0:_.map(p=>({...p,highlightYxmc:p.yxmc})))??[],total:((h=n==null?void 0:n.data)==null?void 0:h.totalCount)??0}},{watch:[v]})),u=await u,w(),u),{data:Q,status:st,refresh:ot}=([u,w]=H(async()=>A("majorList",async()=>{var x,_,h;const[e,n]=await D(M.PUBLIC.QUERY_MAJOR_LIST_BY_NAME,{body:{name:v.value,sf:V.value.province,currentPage:E.value.current,pageSize:E.value.pageSize,pagingOrNot:1}});return{list:((_=(x=n==null?void 0:n.data)==null?void 0:x.list)==null?void 0:_.map(p=>({...p,highlightZymc:p.zymc})))??[],total:((h=n==null?void 0:n.data)==null?void 0:h.totalCount)??0}},{watch:[v]})),u=await u,w(),u),{data:q,status:it,refresh:lt}=([u,w]=H(async()=>A("jobList",async()=>{var x,_,h;const[e,n]=await D(M.PUBLIC.QUERY_JOB_LIST_BY_NAME,{body:{name:v.value,currentPage:U.value.current,pageSize:U.value.pageSize,pagingOrNot:1}});return{list:((_=(x=n==null?void 0:n.data)==null?void 0:x.list)==null?void 0:_.map(p=>({...p,highlightJob:p.levelName})))??[],total:((h=n==null?void 0:n.data)==null?void 0:h.totalCount)??0}},{watch:[v]})),u=await u,w(),u);return zt(()=>$.query.keyword,async()=>{v.value=$.query.keyword},{immediate:!0}),(e,n)=>{const x=_t,_=ht,h=ft,p=yt,y=vt,C=bt,f=gt,rt=Ct,Y=wt,j=Lt;return l(),c("div",Et,[d(_,{modelValue:t(F).tabRadio,"onUpdate:modelValue":n[0]||(n[0]=s=>t(F).tabRadio=s),class:"mt-[25px] bg-[#F9F9F9]"},{default:r(()=>[(l(!0),c(m,null,k(t(F).tabRadioList,s=>(l(),L(x,{key:s,value:s},{radio:r(({checked:i})=>[a("div",{class:kt(["text-center w-[100px] leading-[48px]",{"bg-[#7C92FF] text-white rounded-[4px]":i}])},o(s),3)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),Nt,t(F).tabRadio==="综合"?(l(),c(m,{key:0},[t(b).schoolList.length||t(b).majorList.length||t(b).jobList.length?(l(),c("div",Dt,[d(f,{loading:t(et)==="pending"},{default:r(()=>[t(b).schoolList.length?(l(),c(m,{key:0},[a("div",$t,[It,a("div",Bt,[S(" 院校 "),a("span",At,"共计"+o(("turnThousandth"in e?e.turnThousandth:t(T))(t(b).schoolCount)+"所"),1)])]),d(y,{bordered:!1},{default:r(()=>[(l(!0),c(m,null,k(t(b).schoolList,s=>(l(),L(p,{key:s.id},{default:r(()=>[a("div",{onClick:i=>("navigateTo"in e?e.navigateTo:t(R))(`/college/${s.id}`)},[d(h,{school:s},null,8,["school"])],8,Mt)]),_:2},1024))),128))]),_:1}),a("div",{class:"text-[#FFA864] mt-[20px] text-center cursor-pointer",onClick:n[1]||(n[1]=s=>t(F).tabRadio="院校")},[S(" 查看全部院校"),Ht])],64)):z("",!0),t(b).majorList.length?(l(),c(m,{key:1},[a("div",Ut,[Yt,a("div",jt,[S(" 专业 "),a("span",Ot,"共计"+o(("turnThousandth"in e?e.turnThousandth:t(T))(t(b).majorCount)+"个"),1)])]),d(y,{bordered:!1},{default:r(()=>[(l(!0),c(m,null,k(t(b).majorList,s=>(l(),L(p,{key:s.id,class:"border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",onClick:i=>("navigateTo"in e?e.navigateTo:t(R))(`/major/${s.id}`)},{default:r(()=>[a("div",{class:"text-[20px] text-[#333333] mb-[10px] font-bold",innerHTML:B(s.highlightZymc)},null,8,Vt),d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",Jt,o(s.xkml)+"/"+o(s.zyl),1)]),_:2},1024),a("div",Qt,[d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",qt," 专业代码："+o(("textFormat"in e?e.textFormat:t(g))(s.zydm)),1),a("span",Zt," 修业年限："+o(("textFormat"in e?e.textFormat:t(g))(s.xyNx)),1),a("span",Gt," 授予学位："+o(("textFormat"in e?e.textFormat:t(g))(s.syxw)),1),a("span",Kt," 年度毕业生规模："+o(("textFormat"in e?e.textFormat:t(g))(s.graduateScale)),1),a("span",Wt," 招生院校数："+o(("textFormat"in e?e.textFormat:t(g))(("turnThousandth"in e?e.turnThousandth:t(T))(s.yxsum))),1),a("span",Xt," 男女比例："+o(("textFormat"in e?e.textFormat:t(g))(s.xbBl)),1),a("span",te,[S(" 平均薪酬："),a("span",ee,o(("textFormat"in e?e.textFormat:t(g))(("turnThousandth"in e?e.turnThousandth:t(T))(s.pjxz))),1)])]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:1}),a("div",{class:"text-[#FFA864] mt-[20px] text-center cursor-pointer",onClick:n[2]||(n[2]=s=>t(F).tabRadio="专业")},[S(" 查看全部专业"),ae])],64)):z("",!0),t(b).jobList.length?(l(),c(m,{key:2},[a("div",ne,[se,a("div",oe,[S(" 职业 "),a("span",ie,"共计"+o(("turnThousandth"in e?e.turnThousandth:t(T))(t(b).jobCount)+"个"),1)])]),d(y,{bordered:!1},{default:r(()=>[(l(!0),c(m,null,k(t(b).jobList,s=>(l(),L(p,{key:s.id,class:"border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",onClick:i=>("navigateTo"in e?e.navigateTo:t(R))(`/jobLibrary/${s.id}`)},{default:r(()=>[a("div",{class:"text-[20px] text-[#333333] mb-[10px] font-bold",innerHTML:B(s.highlightJob)},null,8,le),d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",re,o(s.level1Name)+"/"+o(s.level2Name)+"/"+o(s.level3Name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),a("div",{class:"text-[#FFA864] mt-[20px] text-center cursor-pointer",onClick:n[3]||(n[3]=s=>t(F).tabRadio="职业")},[S(" 查看全部职业"),de])],64)):z("",!0)]),_:1},8,["loading"])])):(l(),L(rt,{key:1}))],64)):z("",!0),t(F).tabRadio==="院校"?(l(),c(m,{key:1},[d(y,{class:"mt-[20px]",bordered:!1,loading:t(at)==="pending"},{empty:r(()=>[d(Y)]),default:r(()=>[(l(!0),c(m,null,k(t(J).list,s=>(l(),L(p,{key:s.id},{default:r(()=>[a("div",{onClick:i=>("navigateTo"in e?e.navigateTo:t(R))(`/college/${s.id}`)},[d(h,{school:s},null,8,["school"])],8,pe)]),_:2},1024))),128))]),_:1},8,["loading"]),d(j,{class:"justify-end mt-[20px]",total:t(J).total,current:t(I).current,"page-size":t(I).pageSize,onChange:t(Z),onPageSizeChange:t(G),"show-total":"","show-jumper":"","show-page-size":""},null,8,["total","current","page-size","onChange","onPageSizeChange"])],64)):z("",!0),t(F).tabRadio==="专业"?(l(),c(m,{key:2},[d(y,{bordered:!1,loading:t(st)==="pending",class:"mt-[20px]"},{empty:r(()=>[d(Y)]),default:r(()=>{var s;return[(l(!0),c(m,null,k((s=t(Q))==null?void 0:s.list,i=>(l(),L(p,{key:i.id,class:"border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",onClick:dt=>("navigateTo"in e?e.navigateTo:t(R))(`/major/${i.id}`)},{default:r(()=>[a("div",{class:"text-[20px] text-[#333333] mb-[10px] font-bold",innerHTML:B(i.highlightZymc)},null,8,ue),d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",ce,o(i.xkml)+"/"+o(i.zyl),1)]),_:2},1024),a("div",xe,[d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",he," 专业代码："+o(("textFormat"in e?e.textFormat:t(g))(i.zydm)),1),a("span",ge," 修业年限："+o(("textFormat"in e?e.textFormat:t(g))(i.xyNx)),1),a("span",me," 授予学位："+o(("textFormat"in e?e.textFormat:t(g))(i.syxw)),1),a("span",_e," 年度毕业生规模："+o(("textFormat"in e?e.textFormat:t(g))(i.graduateScale)),1),a("span",be," 招生院校数："+o(("textFormat"in e?e.textFormat:t(g))(("turnThousandth"in e?e.turnThousandth:t(T))(i.yxsum))),1),a("span",Fe," 男女比例："+o(("textFormat"in e?e.textFormat:t(g))(i.xbBl)),1),a("span",fe,[S(" 平均薪酬："),a("span",ve,o(("textFormat"in e?e.textFormat:t(g))(("turnThousandth"in e?e.turnThousandth:t(T))(i.pjxz))),1)])]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]}),_:1},8,["loading"]),d(j,{class:"justify-end mt-[20px]",total:t(Q).total,current:t(E).current,"page-size":t(E).pageSize,onChange:t(K),onPageSizeChange:t(W),"show-total":"","show-jumper":"","show-page-size":""},null,8,["total","current","page-size","onChange","onPageSizeChange"])],64)):z("",!0),t(F).tabRadio==="职业"?(l(),c(m,{key:3},[d(y,{bordered:!1,loading:t(it)==="pending",class:"mt-[20px]"},{empty:r(()=>[d(Y)]),default:r(()=>{var s;return[(l(!0),c(m,null,k((s=t(q))==null?void 0:s.list,i=>(l(),L(p,{key:i.id,class:"border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",onClick:dt=>("navigateTo"in e?e.navigateTo:t(R))(`/jobLibrary/${i.id}`)},{default:r(()=>[a("div",{class:"text-[20px] text-[#333333] mb-[10px] font-bold",innerHTML:B(i.highlightJob)},null,8,ye),d(C,{class:"flex flex-wrap items-center"},{default:r(()=>[a("span",Ce,o(i.level1Name)+"/"+o(i.level2Name)+"/"+o(i.level3Name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]}),_:1},8,["loading"]),d(j,{class:"justify-end mt-[20px]",total:t(q).total,current:t(U).current,"page-size":t(E).pageSize,onChange:t(X),onPageSizeChange:t(tt),"show-total":"","show-jumper":"","show-page-size":""},null,8,["total","current","page-size","onChange","onPageSizeChange"])],64)):z("",!0)])}}});const De=Ft(we,[["__scopeId","data-v-120037b5"]]);export{De as default};
