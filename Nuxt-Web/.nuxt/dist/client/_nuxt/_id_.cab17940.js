import{G as Rt,w as Vt,_ as bt,e as it,b as Jt,h as wt,a1 as ht,J as W,a2 as Kt,S as Gt,v as Mt,u as Wt,i as Yt,a4 as qt,c as Nt,A as $t,Z as Zt,t as D,f as Qt,Y as te}from"./entry.1a40d7cc.js";import{b as Xt,L as Ut,a as ee}from"./index.83d9b74c.js";import{_ as Bt}from"./index.vue.c1324be8.js";import{m as vt,D as n,E as u,L as i,Q as t,I as x,P as f,M as d,R as l,H as ft,N as X,O as K,aa as gt,ab as Ft,a as se,p as yt,u as e,_ as lt,G as Y,ad as Pt}from"./swiper-vue.1d76a0fa.js";import{S as ae}from"./index.b50213e2.js";import{_ as oe}from"./index.vue.d7eeb65e.js";/* empty css              */import{_ as ne}from"./nuxt-link.bd044dc4.js";import{_ as ie}from"./index.vue.372ac32c.js";import{P as le}from"./index.a57cdc53.js";import{I as de,a as re}from"./index.7069583a.js";import{_ as ce}from"./index.vue.52b77a9f.js";import{u as pe}from"./usePagination.9cd68578.js";import"./index.1286ba2d.js";import"./index.30d5eb30.js";const _e=""+globalThis.__publicAssetsURL("images/boy.png"),ue=""+globalThis.__publicAssetsURL("images/girl.png"),I=h=>(gt("data-v-5515a3bb"),h=h(),Ft(),h),me={key:0},xe=["innerHTML"],he=I(()=>t("div",{class:"font-bold"},"男女比例",-1)),fe={class:"flex items-center justify-between mt-[40px]"},ye={class:"flex items-center"},be=I(()=>t("img",{src:_e,style:{width:"36px",height:"36px"},alt:""},null,-1)),ve={class:"text-[#5AB9FF] font-bold text-[18px] ml-[10px]"},ge={class:"flex items-center"},Fe={class:"text-[#FFA864] font-bold text-[18px] mr-[10px]"},$e=I(()=>t("img",{src:ue,style:{width:"36px",height:"36px"},alt:""},null,-1)),we={class:"flex items-center justify-between mt-[24px]"},Le=I(()=>t("div",{class:"w-[40px]"},"男生",-1)),ke={class:"w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]"},ze=I(()=>t("div",{class:"w-[40px]"},"女生",-1)),Te=I(()=>t("div",{class:"font-bold"},"文理比例",-1)),Ie={class:"flex items-center justify-between mt-[40px]"},Se={class:"flex items-center"},De=I(()=>t("div",{class:"w-[34px] h-[34px] flex items-center justify-center bg-[#5AB9FF] text-[20px] text-white font-bold rounded-[50%]"}," 文 ",-1)),Oe={class:"text-[#5AB9FF] font-bold text-[18px] ml-[10px]"},Ce={class:"flex items-center"},Ee={class:"text-[#7C92FF] font-bold text-[18px] mr-[10px]"},je=I(()=>t("div",{class:"w-[34px] h-[34px] flex items-center justify-center bg-[#7C92FF] text-[20px] text-white font-bold rounded-[50%]"}," 理 ",-1)),Ae={class:"flex items-center justify-between mt-[24px]"},Ne=I(()=>t("div",{class:"w-[40px]"},"文科",-1)),Pe={class:"w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]"},Re=I(()=>t("div",{class:"w-[40px]"},"理科",-1)),Ve={key:2,class:"mt-[20px]"},Ge={class:"mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]"},Me=I(()=>t("div",{class:"text-[#999] mb-[10px]"}," 职业来源：人社部最新版（2015年版）职业分类大典 ",-1)),Xe={class:"truncate w-[80%]"},Ue={key:3,class:"mt-[20px]"},Be={class:"mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]"},He={class:"truncate w-[80%]"},Je={key:4,class:"mt-[20px]"},Ke={class:"mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]"},We={class:"truncate w-[80%]"},Ye={key:5,class:"mt-[20px]"},qe={class:"mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]"},Ze={class:"truncate w-[80%]"},Qe=vt({__name:"index",props:{data:{default:()=>({})}},setup(h){return(r,L)=>{const g=Bt,y=Rt,p=Vt;return n(),u("div",null,[r.data.xj?(n(),u("div",me,[i(g,{title:"专业简介",size:"small"}),t("div",{class:"mt-[10px] leading-[20px] indent-[2rem]",innerHTML:r.data.xj},null,8,xe)])):x("",!0),r.data.girlRate||r.data.girlRate||r.data.wenRate||r.data.liRate?(n(),f(p,{key:1,cols:2,colGap:100,class:"bg-[#FCFCFC] p-[20px] mt-[20px]"},{default:d(()=>[r.data.girlRate||r.data.girlRate?(n(),f(y,{key:0},{default:d(()=>[he,t("div",fe,[t("div",ye,[be,t("span",ve,l(r.data.boyRate+"%"),1)]),t("div",ge,[t("span",Fe,l(r.data.girlRate+"%"),1),$e])]),t("div",we,[Le,t("div",ke,[t("div",{class:"bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",style:ft({width:r.data.boyRate+"%"})},null,4),t("div",{class:"bg-[#FFA864] rounded-[20px_10px_10px_0px]",style:ft({width:r.data.girlRate+"%"})},null,4)]),ze])]),_:1})):x("",!0),r.data.wenRate||r.data.liRate?(n(),f(y,{key:1},{default:d(()=>[Te,t("div",Ie,[t("div",Se,[De,t("span",Oe,l(r.data.wenRate+"%"),1)]),t("div",Ce,[t("span",Ee,l(r.data.liRate+"%"),1),je])]),t("div",Ae,[Ne,t("div",Pe,[t("div",{class:"bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",style:ft({width:r.data.wenRate+"%"})},null,4),t("div",{class:"bg-[#7C92FF] rounded-[20px_10px_10px_0px]",style:ft({width:r.data.liRate+"%"})},null,4)]),Re])]),_:1})):x("",!0)]),_:1})):x("",!0),r.data.isProfession?(n(),u("div",Ve,[i(g,{title:"可从事职业",size:"small"}),t("div",Ge,[Me,i(p,{cols:4,colGap:12,rowGap:16},{default:d(()=>[(n(!0),u(X,null,K(r.data.professionList,(F,o)=>(n(),f(y,{key:o,class:"bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"},{default:d(()=>[t("div",Xe,l(F.profession),1)]),_:2},1024))),128))]),_:1})])])):x("",!0),r.data.isEmployment?(n(),u("div",Ue,[i(g,{title:"从业方向",size:"small"}),t("div",Be,[i(p,{cols:4,colGap:12,rowGap:16},{default:d(()=>[(n(!0),u(X,null,K(r.data.employmentList,(F,o)=>(n(),f(y,{key:o,class:"bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"},{default:d(()=>[t("div",He,l(F.employment),1)]),_:2},1024))),128))]),_:1})])])):x("",!0),r.data.isGraduateInterest?(n(),u("div",Je,[i(g,{title:"考研方向",size:"small"}),t("div",Ke,[i(p,{cols:4,colGap:12,rowGap:16},{default:d(()=>[(n(!0),u(X,null,K(r.data.graduateInterestList,(F,o)=>(n(),f(y,{key:o,class:"bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"},{default:d(()=>[t("div",We,l(F.interest),1)]),_:2},1024))),128))]),_:1})])])):x("",!0),r.data.isCourseList?(n(),u("div",Ye,[i(g,{title:"开设课程",size:"small"}),t("div",qe,[i(p,{cols:4,colGap:12,rowGap:16},{default:d(()=>[(n(!0),u(X,null,K(r.data.courseList,(F,o)=>(n(),f(y,{key:o,class:"bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"},{default:d(()=>[t("div",Ze,l(F.course),1)]),_:2},1024))),128))]),_:1})])])):x("",!0)])}}});const ts=bt(Qe,[["__scopeId","data-v-5515a3bb"]]),q=h=>(gt("data-v-eeb05387"),h=h(),Ft(),h),es={key:0},ss={class:"mt-[10px]"},as={class:"bg-[#FFF7F0] px-[10px] font-bold rounded-[4px] h-[35px] leading-[35px] text-[#FFA864]"},os={class:"mt-[30px] text-[18px] text-[#FFA864] font-bold"},ns={key:1,class:"mt-[30px]"},is={class:"mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]"},ls={class:"h-[350px]"},ds={class:"text-[24px] leading-[32px] truncate w-[80%] text-center text-price"},rs=q(()=>t("div",{class:"text-[14px]"},"毕业后五年薪资",-1)),cs={class:"text-[24px] leading-[32px] truncate w-[80%] text-center"},ps=q(()=>t("div",{class:"text-[14px]"},"最多就业岗位",-1)),_s={class:"text-[24px] leading-[32px] truncate w-[80%] text-center"},us=q(()=>t("div",{class:"text-[14px]"},"最多就业行业",-1)),ms={class:"text-[24px] leading-[32px] truncate w-[80%] text-center"},xs=q(()=>t("div",{class:"text-[14px]"},"最多就业地区",-1)),hs={key:2,class:"mt-[30px]"},fs={class:"mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px] h-[350px]"},ys={key:3,class:"mt-[30px]"},bs={class:"mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]"},vs={class:"h-[350px]"},gs={key:0},Fs=q(()=>t("span",{class:"text-[#333] font-bold"},"具体职位：",-1)),$s={key:1,class:"mt-[15px]"},ws=q(()=>t("span",{class:"text-[#333] font-bold"},"所在行业：",-1)),Ls={key:4,class:"mt-[30px]"},ks={class:"mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]"},zs={class:"h-[350px]"},Ts={key:5,class:"mt-[30px]"},Is=["innerHTML"],Ss=vt({__name:"index",props:{data:{default:()=>({})}},setup(h){const r=h,L=se({}),g=yt(()=>({tooltip:{trigger:"axis",formatter:a=>{let k=a[0].axisValueLabel+"<br/>";return a.forEach(b=>{const O=`￥${it(b.value)}`.padEnd(20," ");k+=`<span style="display:inline-block;width:80px;text-align:left;">${b.marker}${b.seriesName}:</span> <span style="display:inline-block;width:80px;text-align:right;">${O}</span><br/>`}),k}},legend:{data:["本专业","所有专业"]},grid:{left:"6%",right:"6%",top:"12%",bottom:"22%"},xAxis:{type:"category",boundaryGap:!1,data:["应届生","2年经验","5年经验","10年经验"]},yAxis:{type:"value"},series:[{name:"本专业",type:"line",color:"#16B857",label:{show:!0,position:"top",formatter:a=>`${it(a.value)}`},data:r.data.salaryXData},{name:"所有专业",type:"line",color:"#FF6600",label:{show:!0,position:"top",formatter:a=>`${it(a.value)}`},data:r.data.salaryYData}]})),y=yt(()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b} : {c}%"},grid:{top:"3%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:r.data.hyListXData,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{type:"bar",color:"#FF862E",barWidth:"60%",label:{show:!0,position:"top",formatter:"{c}%"},data:r.data.hyListYData}]})),p=yt(()=>({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{top:"5%",left:"center"},series:[{name:"就业岗位分布",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"outside",formatter:"{b}: {c} ({d}%)"},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},labelLine:{show:!0},data:r.data.gwList}]})),F=yt(()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b}: {c}%"},legend:{},grid:{left:"3%",top:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:r.data.areaYData},series:[{type:"bar",color:"#FF862E",label:{show:!0,position:"right",formatter:"{c}%"},data:r.data.areaXData}]})),o=a=>{L.value=a.data};return(a,k)=>{const b=Bt,U=ae,T=Rt,O=Vt,C=oe;return n(),u("div",null,[a.data.isJobrate?(n(),u("div",es,[i(b,{title:"就业率（近三年）",size:"small"}),t("div",ss,[i(O,{cols:3,colGap:40,rowGap:16,class:"p-[40px] border-solid border border-[rgb(237,237,237)] rounded-[4px]"},{default:d(()=>[(n(!0),u(X,null,K(a.data.jobrateList,(E,c)=>(n(),f(T,{key:c},{default:d(()=>[t("div",as,l(E.year+"年"),1),t("div",os,l(E.rate),1),i(U,{modelValue:E.rateValue,"onUpdate:modelValue":Z=>E.rateValue=Z,disabled:"","show-tooltip":!1,class:"arco-slider slider"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})])])):x("",!0),a.data.isSalary?(n(),u("div",ns,[i(b,{title:"薪酬",size:"small"}),t("div",is,[t("div",ls,[i(C,{options:e(g)},null,8,["options"])]),i(O,{cols:4,colGap:40,rowGap:16},{default:d(()=>[a.data.fivePjxz?(n(),f(T,{key:0,class:"h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"},{default:d(()=>[t("div",ds,l(("turnThousandth"in a?a.turnThousandth:e(it))(a.data.fivePjxz)),1),rs]),_:1})):x("",!0),a.data.mostemployedeposition?(n(),f(T,{key:1,class:"h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"},{default:d(()=>[t("div",cs,l(a.data.mostemployedeposition),1),ps]),_:1})):x("",!0),a.data.mostemploymentindustry?(n(),f(T,{key:2,class:"h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"},{default:d(()=>[t("div",_s,l(a.data.mostemploymentindustry),1),us]),_:1})):x("",!0),a.data.mostemploymentarea?(n(),f(T,{key:3,class:"h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"},{default:d(()=>[t("div",ms,l(a.data.mostemploymentarea),1),xs]),_:1})):x("",!0)]),_:1})])])):x("",!0),a.data.isHy?(n(),u("div",hs,[i(b,{title:"就业行业分布",size:"small"}),t("div",fs,[i(C,{options:e(y)},null,8,["options"])])])):x("",!0),a.data.isGw?(n(),u("div",ys,[i(b,{title:"就业岗位分布",size:"small"}),t("div",bs,[t("div",vs,[i(C,{options:e(p),"on-Move":o},null,8,["options"])]),t("div",null,[e(L).detailJob?(n(),u("div",gs,[Fs,lt(" "+l(e(L).detailJob),1)])):x("",!0),e(L).hy?(n(),u("div",$s,[ws,lt(" "+l(e(L).hy),1)])):x("",!0)])])])):x("",!0),a.data.isArea?(n(),u("div",Ls,[i(b,{title:"就业地区分布",size:"small"}),t("div",ks,[t("div",zs,[i(C,{options:e(F)},null,8,["options"])])])])):x("",!0),a.data.job?(n(),u("div",Ts,[i(b,{title:"专业就业",size:"small"}),t("div",{class:"mt-[10px] leading-[20px]",innerHTML:a.data.job},null,8,Is)])):x("",!0)])}}});const Ds=bt(Ss,[["__scopeId","data-v-eeb05387"]]),Ht=h=>(gt("data-v-6ed2c8e2"),h=h(),Ft(),h),Os={class:"flex items-center justify-between"},Cs=Ht(()=>t("div",{class:"font-bold text-[18px]"},"开设院校",-1)),Es={class:"flex items-center"},js={key:0,class:"flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"},As={class:"flex-1 flex items-center cursor-pointer"},Ns=["src"],Ps={class:"text-[20px]"},Rs=Ht(()=>t("span",{class:"w-[2px] h-[8px] text-[#999999]"},"|",-1)),Vs={key:0},Gs={key:1},Ms={key:2},Xs={key:3},Us={key:0,class:"text-[#999999]"},Bs={class:"text-[#FFA864]"},Hs={key:1},Js=vt({__name:"index",props:{data:{default:()=>[]},params:{default:()=>({})},loading:{type:Boolean,default:()=>!0}},emits:["change","changePage","changeSize"],setup(h,{emit:r}){const L=h,{provinceCityList:g,getDictionValue:y}=Jt(),{form:p}=wt(()=>({...L.params})),F=o=>{p.value.sort===`${o} desc`?p.value.sort=`${o} asc`:p.value.sort===`${o} asc`?p.value.sort="":p.value.sort=`${o} desc`,r("change",p.value)};return(o,a)=>{const k=Kt,b=Gt,U=de,T=re,O=ne,C=Xt,E=ie,c=Ut,Z=le,dt=Mt;return n(),u("div",null,[t("div",null,[t("div",Os,[Cs,t("div",null,[i(b,null,{default:d(()=>[i(k,{style:{width:"200px"},modelValue:e(p).location,"onUpdate:modelValue":a[0]||(a[0]=_=>e(p).location=_),options:[..."NO_LIMIT_NULL_OPTIONS"in o?o.NO_LIMIT_NULL_OPTIONS:e(ht),...e(g)],placeholder:"所在地区","allow-clear":"",onChange:a[1]||(a[1]=_=>o.$emit("change",e(p)))},null,8,["modelValue","options"]),i(k,{style:{width:"200px"},modelValue:e(p).type,"onUpdate:modelValue":a[2]||(a[2]=_=>e(p).type=_),options:[..."NO_LIMIT_NULL_OPTIONS"in o?o.NO_LIMIT_NULL_OPTIONS:e(ht),...e(y)("YXLX")],placeholder:"院校类型","allow-clear":"",onChange:a[3]||(a[3]=_=>o.$emit("change",e(p)))},null,8,["modelValue","options"]),i(k,{style:{width:"200px"},modelValue:e(p).properties,"onUpdate:modelValue":a[4]||(a[4]=_=>e(p).properties=_),options:[..."NO_LIMIT_NULL_OPTIONS"in o?o.NO_LIMIT_NULL_OPTIONS:e(ht),...e(y)("BXXZ")],placeholder:"办学性质","allow-clear":"",onChange:a[5]||(a[5]=_=>o.$emit("change",e(p)))},null,8,["modelValue","options"]),i(k,{style:{width:"200px"},modelValue:e(p).strengthTags,"onUpdate:modelValue":a[6]||(a[6]=_=>e(p).strengthTags=_),options:[..."NO_LIMIT_NULL_OPTIONS"in o?o.NO_LIMIT_NULL_OPTIONS:e(ht),...e(y)("SLBQONE")],placeholder:"实力标签","allow-clear":"",onChange:a[7]||(a[7]=_=>o.$emit("change",e(p)))},null,8,["modelValue","options"])]),_:1})])]),i(b,{class:"h-[40px] mt-[20px]"},{default:d(()=>[t("div",{class:Y(["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer",{"bg-[#7C92FF] text-white":e(p).sort.startsWith("min(sds.zdf)")}]),onClick:a[8]||(a[8]=_=>F("min(sds.zdf)"))},[lt(" 录取分数 "),e(p).sort==="min(sds.zdf) asc"?(n(),f(U,{key:0})):(n(),f(T,{key:1}))],2),t("div",{class:Y(["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer",{"bg-[#7C92FF] text-white":e(p).sort.startsWith("bsr.rank_in")}]),onClick:a[9]||(a[9]=_=>F("bsr.rank_in"))},[lt(" 软科排序 "),e(p).sort==="bsr.rank_in asc"?(n(),f(U,{key:0})):(n(),f(T,{key:1}))],2)]),_:1})]),i(c,{class:"list-border",bordered:!1,loading:o.loading},{empty:d(()=>[i(E)]),default:d(()=>[(n(!0),u(X,null,K(o.data,(_,rt)=>(n(),f(C,{key:rt},{default:d(()=>[i(O,{to:`/college/${_==null?void 0:_.id}`,target:"_blank"},{default:d(()=>[t("div",Es,[e(p).sort.startsWith("bsr.rank_in")?(n(),u("div",js,l(rt+1),1)):x("",!0),t("div",As,[t("img",{src:_.logo,class:"mr-[10px] w-[70px]"},null,8,Ns),t("div",null,[t("div",Ps,l(_.yxmc),1),i(b,{class:"flex flex-wrap items-center"},{split:d(()=>[Rs]),default:d(()=>{var m,s,z,S,B,H;return[(m=("findOptions"in o?o.findOptions:e(W))(e(g),_.sf))!=null&&m.label?(n(),u("span",Vs,l((s=("findOptions"in o?o.findOptions:e(W))(e(g),_.sf))==null?void 0:s.label),1)):x("",!0),(z=("findOptions"in o?o.findOptions:e(W))(e(y)("YXLX"),_.yxLx))!=null&&z.label?(n(),u("span",Gs,l((S=("findOptions"in o?o.findOptions:e(W))(e(y)("YXLX"),_.yxLx))==null?void 0:S.label),1)):x("",!0),_.lsy?(n(),u("span",Ms,l(_.lsy),1)):x("",!0),(B=("findOptions"in o?o.findOptions:e(W))(e(y)("BXXZ"),_.bxXz))!=null&&B.label?(n(),u("span",Xs,l((H=("findOptions"in o?o.findOptions:e(W))(e(y)("BXXZ"),_.bxXz))==null?void 0:H.label),1)):x("",!0)]}),_:2},1024),e(p).sort.startsWith("min(sds.zdf)")?(n(),u("div",Us,[lt(" 最低分/最低分位 "),t("span",Bs,l(_.zdf)+"/"+l(_.zdfwc),1)])):(n(),u("div",Hs,[i(b,{class:"flex flex-wrap items-center"},{default:d(()=>[(n(!0),u(X,null,K(_.schoolTags,(m,s)=>(n(),u("span",{key:s,class:"p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"},l(m),1))),128))]),_:2},1024)]))])])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["loading"]),i(dt,null,{default:d(()=>[i(Z,{class:"justify-end mt-[20px]",total:o.params.total,current:o.params.current,"page-size":o.params.pageSize,onChange:a[10]||(a[10]=_=>o.$emit("changePage",_)),onPageSizeChange:a[11]||(a[11]=_=>o.$emit("changeSize",_)),"show-total":"","show-jumper":"","show-page-size":""},null,8,["total","current","page-size"])]),_:1})])}}});const Ks=bt(Js,[["__scopeId","data-v-6ed2c8e2"]]),w=h=>(gt("data-v-10c73ce3"),h=h(),Ft(),h),Ws={class:"max-w-container mx-auto"},Ys={class:"text-[24px] cursor-pointer font-bold mb-[10px]"},qs={key:0,class:"ml-[20px]"},Zs={class:"flex items-center"},Qs=w(()=>t("div",{class:"w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]"},[t("i",{class:"iconfont icon-jiaocai font-bold text-white iconSize"})],-1)),ta={class:"ml-[10px]"},ea=w(()=>t("div",{class:"text-[#999]"},"专业代码",-1)),sa={class:"mt-[5px]"},aa={class:"flex items-center"},oa=w(()=>t("div",{class:"w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]"},[t("i",{class:"iconfont icon-jiaoyu font-bold text-white iconSize"})],-1)),na={class:"ml-[10px]"},ia=w(()=>t("div",{class:"text-[#999]"},"学历层次",-1)),la={class:"mt-[5px]"},da={class:"flex items-center"},ra=w(()=>t("div",{class:"w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]"},[t("i",{class:"iconfont icon-shijian font-bold text-white iconSize"})],-1)),ca={class:"ml-[10px]"},pa=w(()=>t("div",{class:"text-[#999]"},"休学年限",-1)),_a={class:"mt-[5px]"},ua={class:"flex items-center"},ma=w(()=>t("div",{class:"w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]"},[t("i",{class:"iconfont icon-XX_017 font-bold text-white iconSize"})],-1)),xa={class:"ml-[10px]"},ha=w(()=>t("div",{class:"text-[#999]"},"授予学位",-1)),fa={class:"mt-[5px]"},ya={class:"flex items-center"},ba=w(()=>t("div",{class:"w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]"},[t("i",{class:"iconfont icon-yulebao font-bold text-white iconSize"})],-1)),va={class:"ml-[10px]"},ga=w(()=>t("div",{class:"text-[#999]"},"平均薪酬",-1)),Fa={class:"mt-[5px] text-price"},$a={key:0,class:"p-[15px_30px] bg-[#F5F5F5]"},wa=w(()=>t("i",{class:"iconfont icon-wodexuanke font-bold"},null,-1)),La={class:"ml-[15px]"},ka={class:"my-[10px]"},za=w(()=>t("i",{class:"iconfont icon-kaoyan font-bold"},null,-1)),Ta={class:"ml-[15px]"},Ia=w(()=>t("i",{class:"iconfont icon-baomingrenshu font-bold"},null,-1)),Sa={class:"ml-[15px]"},Da={class:"leading-[18px]"},Oa={class:"indent-[2rem] mt-[5px] mb-[20px]"},Ca={class:"indent-[2rem] mt-[5px] mb-[20px]"},Ea={class:"indent-[2rem] mt-[5px] mb-[20px]"},ja={key:0},Aa=["innerHTML"],Na=w(()=>t("div",null,"糟糕，页面好像没找到",-1)),Pa=vt({__name:"[id]",async setup(h){let r,L;Wt({title:"专业详情"});const{$zsFetch:g,$zsMsg:y}=Qt(),p=Yt(),F=qt(),{form:o}=wt(()=>({activeTabKey:["recap","decode","prospect","school"].includes(p.query.tab)?p.query.tab:"recap"})),{form:a}=wt(()=>({zydm:"",location:"",type:"",cc:"",properties:"",strengthTags:"",featuresTags:"",sort:""})),{pagination:k,resetData:b,onPageChange:U,onPageSizeChange:T}=pe(()=>{window.scrollTo(0,0),rt()}),O=async()=>{const[m,s]=await g($t.USER.USER_FOLLOW,{body:{majorId:c.value.id}});y("success",s.data),s&&(c.value.userIsCollect=="1"?c.value.userIsCollect="0":c.value.userIsCollect="1")},C=async m=>{a.value={...a.value,...m},b()},E=()=>{F.replace({query:{...p.query,tab:o.value.activeTabKey}})},{data:c,status:Z}=([r,L]=Pt(async()=>Nt("majorDetail",async()=>{var S,B,H,ct,J,pt,_t,ut,mt,xt,Q,tt,et,st,v,j,A,N,P,R,V,G,M,at,ot,nt,Lt,kt,zt,Tt,It,St,Dt,Ot,Ct,Et,jt,At;const[m,s]=await g($t.MAJOR.GET_MAJOR_DETAIL,{body:{id:p.params.id}});let z={};return s.data==="专业不存在"?z.error=!0:z={...s.data,isProfession:!!((B=(S=s==null?void 0:s.data)==null?void 0:S.professionList)!=null&&B.length),isEmployment:!!((ct=(H=s==null?void 0:s.data)==null?void 0:H.employmentList)!=null&&ct.length),isGraduateInterest:!!((pt=(J=s==null?void 0:s.data)==null?void 0:J.graduateInterestList)!=null&&pt.length),isCourseList:!!((ut=(_t=s==null?void 0:s.data)==null?void 0:_t.courseList)!=null&&ut.length),jobrateList:((xt=(mt=s==null?void 0:s.data)==null?void 0:mt.jobrateList)==null?void 0:xt.map($=>({...$,rateValue:$.rateValue*1})))??[],isJobrate:!!((tt=(Q=s==null?void 0:s.data)==null?void 0:Q.jobrateList)!=null&&tt.length),salaryXData:(st=(et=s==null?void 0:s.data)==null?void 0:et.salaryList[0])==null?void 0:st.majorSalaryAvgList,salaryYData:(j=(v=s==null?void 0:s.data)==null?void 0:v.salaryList[0])==null?void 0:j.allMajorSalaryAvgList,isSalary:!!((N=(A=s==null?void 0:s.data)==null?void 0:A.salaryList)!=null&&N.length),hyListXData:((R=(P=s==null?void 0:s.data)==null?void 0:P.hyList)==null?void 0:R.map($=>$.hy))??[],hyListYData:((G=(V=s==null?void 0:s.data)==null?void 0:V.hyList)==null?void 0:G.map($=>$.percent))??[],isHy:!!((at=(M=s==null?void 0:s.data)==null?void 0:M.hyList)!=null&&at.length),gwList:((nt=(ot=s==null?void 0:s.data)==null?void 0:ot.gwList)==null?void 0:nt.map($=>({...$,name:$.gw,value:$.percent})))??{},isGw:!!((kt=(Lt=s==null?void 0:s.data)==null?void 0:Lt.gwList)!=null&&kt.length),areaXData:(Tt=(zt=s==null?void 0:s.data)==null?void 0:zt.areaList)!=null&&Tt.length?(St=(It=s==null?void 0:s.data)==null?void 0:It.areaList)==null?void 0:St.map($=>$.percent):[],areaYData:(Ot=(Dt=s==null?void 0:s.data)==null?void 0:Dt.areaList)!=null&&Ot.length?(Et=(Ct=s==null?void 0:s.data)==null?void 0:Ct.areaList)==null?void 0:Et.map($=>$.sf):[],isArea:!!((At=(jt=s==null?void 0:s.data)==null?void 0:jt.areaList)!=null&&At.length)},z})),r=await r,L(),r),{data:dt,status:_,refresh:rt}=([r,L]=Pt(async()=>Nt("collegeList",async()=>{var z,S;const[m,s]=await g($t.MAJOR.GET_SCHOOL_LIST,{body:{zydm:c.value.zydm,location:a.value.location,type:a.value.type,cc:a.value.cc,properties:a.value.properties,strengthTags:a.value.strengthTags,featuresTags:a.value.featuresTags,sort:a.value.sort,currentPage:k.value.current,pageSize:k.value.pageSize,pagingOrNot:1}});return{list:((z=s==null?void 0:s.data)==null?void 0:z.list)??[],total:((S=s==null?void 0:s.data)==null?void 0:S.totalCount)??0}},{default:()=>({list:[],total:0})})),r=await r,L(),r);return(m,s)=>{var Q,tt,et,st;const z=Gt,S=ee,B=Xt,H=Ut,ct=ts,J=te,pt=Mt,_t=Ds,ut=Ks,mt=Zt,xt=ce;return n(),u("div",Ws,[e(c).error?(n(),f(xt,{key:1},{default:d(()=>[Na]),_:1})):(n(),u(X,{key:0},[i(H,{bordered:!1,class:"w-full",loading:e(Z)==="pending"},{default:d(()=>[i(B,null,{actions:d(()=>[i(z,{direction:"vertical"},{default:d(()=>{var v;return[t("div",{class:"w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",onClick:O},l(((v=e(c))==null?void 0:v.userIsCollect)=="1"?"取消关注":"+关注"),1)]}),_:1})]),default:d(()=>[i(S,null,{title:d(()=>{var v;return[t("div",Ys,l((v=e(c))==null?void 0:v.zymc),1)]}),description:d(()=>{var v,j,A,N,P,R,V;return[t("div",null,[t("span",null,l((v=e(c))==null?void 0:v.cc),1),t("span",null,l((j=e(c))!=null&&j.xkml?"/"+((A=e(c))==null?void 0:A.xkml):""),1),t("span",null,l((N=e(c))!=null&&N.zyl?"/"+((P=e(c))==null?void 0:P.zyl):""),1),(R=e(c))!=null&&R.graduateScale?(n(),u("span",qs," 年度毕业生规模："+l(("textFormat"in m?m.textFormat:e(D))((V=e(c))==null?void 0:V.graduateScale)),1)):x("",!0)]),i(z,{class:"mt-[30px]",size:"large"},{default:d(()=>{var G,M,at,ot,nt;return[t("div",Zs,[Qs,t("div",ta,[ea,t("div",sa,l(("textFormat"in m?m.textFormat:e(D))((G=e(c))==null?void 0:G.zydm)),1)])]),t("div",aa,[oa,t("div",na,[ia,t("div",la,l(("textFormat"in m?m.textFormat:e(D))((M=e(c))==null?void 0:M.cc)),1)])]),t("div",da,[ra,t("div",ca,[pa,t("div",_a,l(("textFormat"in m?m.textFormat:e(D))((at=e(c))==null?void 0:at.xyNx)),1)])]),t("div",ua,[ma,t("div",xa,[ha,t("div",fa,l(("textFormat"in m?m.textFormat:e(D))((ot=e(c))==null?void 0:ot.syxw)),1)])]),t("div",ya,[ba,t("div",va,[ga,t("div",Fa,l(("textFormat"in m?m.textFormat:e(D))(("turnThousandth"in m?m.turnThousandth:e(it))((nt=e(c))==null?void 0:nt.pjxz))),1)])])]}),_:1})]}),_:1})]),_:1})]),_:1},8,["loading"]),(Q=e(c))!=null&&Q.xkJy?(n(),u("div",$a,[t("div",null,[wa,t("span",La,"选科建议："+l(("textFormat"in m?m.textFormat:e(D))((tt=e(c))==null?void 0:tt.xkJy)),1)]),t("div",ka,[za,t("span",Ta,"考研方向："+l(("textFormat"in m?m.textFormat:e(D))((et=e(c))==null?void 0:et.graduateInterestStr)),1)]),t("div",null,[Ia,t("span",Sa,"社会名人： "+l(("textFormat"in m?m.textFormat:e(D))((st=e(c))==null?void 0:st.celebrity)),1)])])):x("",!0),i(mt,{"active-key":e(o).activeTabKey,"onUpdate:activeKey":s[0]||(s[0]=v=>e(o).activeTabKey=v),animation:"",class:"mt-[20px]",onChange:E},{default:d(()=>[i(J,{key:"recap"},{title:d(()=>[t("div",{class:Y(["text-[18px]",e(o).activeTabKey==="recap"?"text-[#657fff] font-bold":""])}," 专业概况 ",2)]),default:d(()=>[i(ct,{data:e(c)},null,8,["data"])]),_:1}),i(J,{key:"decode"},{title:d(()=>[t("div",{class:Y(["text-[18px]",e(o).activeTabKey==="decode"?"text-[#657fff] font-bold":""])}," 专业解读 ",2)]),default:d(()=>[i(pt,null,{default:d(()=>{var v,j,A,N,P,R,V,G,M;return[t("div",Da,[t("div",null,"一、"+l((v=e(c))==null?void 0:v.zymc)+"是什么?",1),t("div",Oa,l((j=e(c))==null?void 0:j.ssm),1),t("div",null,"二、"+l((A=e(c))==null?void 0:A.zymc)+"学什么?",1),t("div",Ca,l((N=e(c))==null?void 0:N.xsm),1),t("div",null,"三、"+l((P=e(c))==null?void 0:P.zymc)+"干什么?",1),t("div",Ea,l((R=e(c))==null?void 0:R.gsm),1),(V=e(c))!=null&&V.job?(n(),u("div",ja,[t("div",null,"四、"+l((G=e(c))==null?void 0:G.zymc)+"专业就业情况",1),t("div",{class:"indent-[2rem] mt-[5px] mb-[20px]",innerHTML:(M=e(c))==null?void 0:M.job},null,8,Aa)])):x("",!0)])]}),_:1})]),_:1}),i(J,{key:"prospect"},{title:d(()=>[t("div",{class:Y(["text-[18px]",e(o).activeTabKey==="prospect"?"text-[#657fff] font-bold":""])}," 就业前景 ",2)]),default:d(()=>[i(_t,{data:e(c)},null,8,["data"])]),_:1}),i(J,{key:"school"},{title:d(()=>[t("div",{class:Y(["text-[18px]",e(o).activeTabKey==="school"?"text-[#657fff] font-bold":""])}," 开设院校 ",2)]),default:d(()=>[e(o).activeTabKey==="school"?(n(),f(ut,{key:0,data:e(dt).list,params:{...e(a),...e(k),total:e(dt).total},loading:e(_)==="pending",onChange:C,onChangePage:e(U),onChangeSize:e(T)},null,8,["data","params","loading","onChangePage","onChangeSize"])):x("",!0)]),_:1})]),_:1},8,["active-key"])],64))])}}});const to=bt(Pa,[["__scopeId","data-v-10c73ce3"]]);export{to as default};
