import{n as i,d as c,u as x,C as y,b as h,k as C,r as s,o as N,l as S,w as o,g as l,c as a,f as d,i as w,S as A}from"./index-8a2cb146.js";import{Z as T}from"./index-2bbe694f.js";const v=[{title:"所在国家",show:!0,align:"center",dataIndex:"country",render:({record:e})=>{var t;return i((t=e==null?void 0:e.country)==null?void 0:t.areaName)}},{title:"所在省份",show:!0,dataIndex:"province",align:"center",render:({record:e})=>{var t;return i((t=e==null?void 0:e.province)==null?void 0:t.areaName)}},{title:"所在市区",show:!0,dataIndex:"city",align:"center",render:({record:e})=>{var t;return i((t=e==null?void 0:e.city)==null?void 0:t.areaName)}}],L=d("div",{style:{height:"100px"}},null,-1),k={class:"orderSubmit-footer box-flex jc-fe"},I=c({name:"SystemLineTypeAreaList"}),V=c({...I,setup(e){const t=x(),{jumpTabName:_}=y(),{data:r,loading:m}=h(async()=>{const{res:n}=await C(()=>A.getCooperationRouteDetail({id:t.query.id}));return(n==null?void 0:n.data)??{lineAreaList:[],linename:""}},{lineAreaList:[],linename:""});return(n,u)=>{const p=s("a-table"),f=s("a-card"),g=s("a-button"),b=s("a-space");return N(),S(T,null,{default:o(()=>[l(f,{title:a(r).linename,bordered:!1,class:"general-card"},{default:o(()=>[l(p,{size:"large",data:a(r).lineAreaList,columns:a(v),loading:a(m),pagination:!1,bordered:!1},null,8,["data","columns","loading"])]),_:1},8,["title"]),L,d("div",k,[l(b,null,{default:o(()=>[l(g,{onClick:u[0]||(u[0]=()=>a(_)())},{default:o(()=>[w("返回")]),_:1})]),_:1})])]),_:1})}}});export{V as default};