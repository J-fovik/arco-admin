import{d as e,g as a,l,z as s,eA as o,eB as t,eC as i,r as u,o as n,e as v,w as r,V as d,h as p,D as f,u as c,a as x,t as g,W as m,T as y,_ as h}from"./index-5da0dba2.js";const _={style:{padding:"10px 14px 14px 14px"}},I={class:"name"},w=["src"],C=h(e({__name:"index",props:{fileInfo:{},onClose:{}},setup(e){const h=e,C=a(!1),S=a(null),k=a(null),z=l((()=>{var e;return(null==(e=h.fileInfo)?void 0:e.src)||""}));s((()=>{C.value=!0}));const{width:A,height:D}=o(),{width:N,height:J}=t(S),O=a({top:40,left:A.value-N.value}),R=JSON.parse(sessionStorage.getItem("AudioDialogXY"));R&&R.top&&R.left&&(O.value.top=R.top,O.value.left=R.left);const{x:V,y:X}=i(S,{initialValue:{x:O.value.left-N.value,y:O.value.top}}),Y=l((()=>{let e=V.value,a=X.value;return V.value>A.value-N.value&&(e=A.value-N.value),V.value<0&&(e=0),X.value>D.value-J.value&&(a=D.value-J.value),X.value<0&&(a=0),sessionStorage.setItem("AudioDialogXY",JSON.stringify({top:a,left:e})),{left:e+"px",top:a+"px"}})),j=()=>{C.value=!1,h.onClose&&h.onClose()};return(e,a)=>{const l=u("icon-music"),s=u("icon-close");return n(),v(y,{name:"slide-dynamic-origin"},{default:r((()=>{var e,a;return[d(p("div",{class:"audio-preview-wrapper",ref_key:"audioRef",ref:S,style:f(c(Y))},[p("section",_,[p("div",{class:"head",ref_key:"audioHeadRef",ref:k},[p("div",I,[x(l,{size:16,spin:""}),p("span",null,g(null==(e=h.fileInfo)?void 0:e.name)+"."+g(null==(a=h.fileInfo)?void 0:a.extendName),1)]),p("div",{class:"close-icon",onClick:j},[x(s,{size:12})])],512),p("audio",{class:"audio",src:c(z),controls:"",autoplay:""},null,8,w)])],4),[[m,c(C)]])]})),_:1})}}}),[["__scopeId","data-v-a9576939"]]);export{C as default};
