import{_ as V}from"./index.vue.c1324be8.js";import{u as P,a as M,g as K,h as O,c as U,A,B as Z,e as q,n as v,f as G,_ as Q}from"./entry.1a40d7cc.js";import{T as J}from"./index.112674ac.js";import{_ as X}from"./index.69d527b7.js";import"./index.a57cdc53.js";/* empty css              */import{m as Y,ad as ee,D as b,E as L,Q as t,_ as i,u as a,R as _,N as te,L as d,M as f,I as z,P as se,aa as ae,ab as oe}from"./swiper-vue.1d76a0fa.js";import"./index.30d5eb30.js";const m=r=>(ae("data-v-eddb92ae"),r=r(),oe(),r),ne={class:"max-w-container mx-auto min-h-[60vh]"},ie={class:"flex items-center justify-between mt-[10px]"},le=m(()=>t("i",{class:"iconfont icon-chuangzuo"},null,-1)),ce=m(()=>t("span",{class:"ml-[20px]"},[i("类型:"),t("span",{class:"text-[#FFA864]"},"普通类")],-1)),de={class:"bg-[#F2F5FF] p-[20px] flex items-center justify-between mt-[20px]"},re={class:"text-[#FFA864]"},pe=m(()=>t("span",{class:"text-[#7C92FF]"},"我的志愿表",-1)),ue=m(()=>t("div",{class:"mt-[20px] bg-[#FFF7F0] p-[20px] leading-[22px]"},[t("div",{class:"font-bold text-[14px]"},"系统使用须知"),t("div",{class:"text-[12px]"},[t("div",null,"1、当前为2024年招生计划数据；"),t("div",null," 2、本系统依据历年各院校录取数据提供模拟志愿服务，正式填报请前往考试院官网； "),t("div",null," 3、在正式填报时，以教育考试院公布的最新招生计划为准，本系统会在第一时间将最新的招生计划进行更新； "),t("div",null,"4、系统使用的“录取概率”根据过去历年的数据计算得出，仅作参考。")])],-1)),_e=Y({__name:"buildWish",async setup(r){let p,g;P({title:"查看志愿表"});const{$zsFetch:y}=G(),{userInfo:D}=M(),[W,x]=K(null),{form:o}=O(()=>({...D.value,selectRow:{}})),$=()=>[{title:"批次",dataIndex:"pc",align:"center",headerCellStyle:{fontSize:"14px",backgroundColor:"#FFFFFF",fontWeight:"bold"}},{title:"科目类型",dataIndex:"kl",align:"center",headerCellStyle:{fontSize:"14px",backgroundColor:"#FFFFFF",fontWeight:"bold"}},{title:"批次线",dataIndex:"score",align:"center",headerCellStyle:{fontSize:"14px",backgroundColor:"#FFFFFF",fontWeight:"bold"}},{title:"操作",dataIndex:"operate",align:"center",ellipsis:!0,tooltip:!0,headerCellStyle:{fontSize:"14px",backgroundColor:"#FFFFFF",fontWeight:"bold"},slotName:"operate"}],h=(s,e)=>{o.value.selectRow=s,e&&e()},E=async s=>{const[e,n]=await y(A.CHOICE.ADD_WISH,{body:{xk:o.value.xk,score:o.value.score,wc:o.value.wc,pc:s.pc}});v(`/choice?wid=${n==null?void 0:n.data}`)},N=s=>{const e=s.gkms==="3+3"?s.subjectList:[...s.firstSubjectList,...s.secondSubjectList];o.value={...o.value,...s,xk:e.join("/")},h({},()=>x(null)),B()},{data:u,status:j,refresh:B}=([p,g]=ee(async()=>U("queryAddWishPcList",async()=>{var n,l;const[s,e]=await y(A.CHOICE.GET_ADD_WISH_PC_LIST,{body:{xk:o.value.xk,score:o.value.score}});return{pcList:((n=e==null?void 0:e.data)==null?void 0:n.pcList)??[],wish:((l=e==null?void 0:e.data)==null?void 0:l.wish)??{}}},{default:()=>({pcList:[],wish:2024})})),p=await p,g(),p);return(s,e)=>{var C,w,S,k,I;const n=V,l=Z,R=J,H=X;return b(),L("div",ne,[t("div",ie,[t("div",null,[i(" 我的成绩: "),t("span",{class:"text-[#FFA864] cursor-pointer",onClick:e[0]||(e[0]=c=>h(a(o),()=>a(x)("ZsChoiceChangeScoreModal")))},[i(_(a(o).xk)+" "+_(a(o).score+"分")+" "+_(("turnThousandth"in s?s.turnThousandth:a(q))(a(o).wc)+"位")+" ",1),le]),ce]),t("div",{class:"border border-solid border-[#EDEDED] rounded-[8px] leading-[41px] px-[10px] cursor-pointer",onClick:e[1]||(e[1]=c=>("navigateTo"in s?s.navigateTo:a(v))("/personal?tab=myVolunteer"))}," 我的志愿表 ")]),(w=(C=a(u))==null?void 0:C.wish)!=null&&w.id?(b(),L(te,{key:0},[d(n,{title:"已建志愿表编辑",size:"small",class:"mt-[10px]"}),t("div",de,[t("div",null,[i(" 继续编辑模拟志愿表 "),t("span",re,_((k=(S=a(u))==null?void 0:S.wish)==null?void 0:k.zybt),1),i("，或进入 "),pe,i(" 选择 ")]),d(l,{type:"primary",class:"w-[150px] border-radius-4",onClick:e[2]||(e[2]=c=>{var F,T;return("navigateTo"in s?s.navigateTo:a(v))(`/choice?wid=${(T=(F=a(u))==null?void 0:F.wish)==null?void 0:T.id}`)})},{default:f(()=>[i("继续模拟填志愿")]),_:1})])],64)):z("",!0),d(n,{title:"新建模拟志愿表",size:"small",class:"mt-[20px]"}),d(R,{class:"mt-[20px] cursor-pointer","table-layout-fixed":"",columns:$(),data:(I=a(u))==null?void 0:I.pcList,loading:a(j)==="pending",pagination:!1},{operate:f(({record:c})=>[d(l,{type:"primary",class:"w-[110px] border-radius-4",onClick:F=>E(c)},{default:f(()=>[i("新建填志愿")]),_:2},1032,["onClick"])]),_:1},8,["columns","data","loading"]),ue,a(W)==="ZsChoiceChangeScoreModal"?(b(),se(H,{key:1,data:a(o).selectRow,onCancel:e[3]||(e[3]=c=>h({},()=>a(x)(null))),onSuccess:N},null,8,["data"])):z("",!0)])}}});const ye=Q(_e,[["__scopeId","data-v-eddb92ae"]]);export{ye as default};
