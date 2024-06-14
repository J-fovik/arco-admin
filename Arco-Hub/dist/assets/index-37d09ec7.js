import{d as P,u as K,C as Z,a as G,E as W,s as X,M as J,I as N,r as i,o as w,l as S,w as r,g as o,c as a,f as A,i as q,h as Q,k as f,G as $,H as ee,X as x,Y as te,_ as ae}from"./index-8a2cb146.js";import{p as oe,l as le}from"./rules-4aeaef32.js";import{Z as de}from"./index-2bbe694f.js";import{H as D}from"./hotel-680890b8.js";const re=p=>($("data-v-59e9d6ee"),p=p(),ee(),p),ne=re(()=>A("div",{style:{height:"100px"}},null,-1)),ie={class:"orderSubmit-footer box-flex jc-fe"},se=P({name:"HotelCooperateManageOperate"}),ue=P({...se,setup(p){const u=K(),{jumpTabName:_}=Z();G();const[M,C]=W(null),{form:e,formRef:v}=X(()=>({hotelName:"",hotelLevel:"",hotelContacts:"",hotelContactsPhone:void 0,detailAddress:"",country:"",countryCode:"",province:"",provinceCode:"",city:"",cityCode:"",periodCooperateEnd:"",periodCooperateStart:"",fileList:[]})),U={hotelName:{required:!0,message:"请输入酒店名称"},hotelLevel:{required:!0,message:"请输入酒店等级"},hotelContacts:{required:!0,message:"请输入联系人"},hotelContactsPhone:{required:!0,validator:(l,t)=>{l||t("请输入手机号码"),!oe(l)&&!le(l)&&t("请输入正确的手机号码")}},detailAddress:{required:!0,message:"请输入详细地址"},countryCode:{required:!0,message:"请输入所属国家"},periodCooperateStart:{required:!0,message:"请选择合作期限开始日期"},periodCooperateEnd:{required:!0,message:"请选择合作期限结束日期"},fileList:{required:!0,message:"请上传合作详情文件"}},c=async l=>{const{res:t}=await f(()=>te.getAreaInfo(l));return(t==null?void 0:t.data)??[]},{data:y}=J(async()=>await c({level:"1"}),[]),{data:h}=N(async()=>await c({parentNo:e.value.countryCode}),{watchSource:()=>e.value.countryCode,defaultValue:[]}),{data:g}=N(async()=>await c({parentNo:e.value.provinceCode}),{watchSource:()=>e.value.provinceCode,defaultValue:[]}),I=l=>{e.value.provinceCode="",e.value.province="",e.value.cityCode="",e.value.city="",e.value.country=y.value.find(t=>t.areaNo==l).areaName},k=l=>{e.value.cityCode="",e.value.city="",e.value.province=h.value.find(t=>t.areaNo==l).areaName},E=l=>{e.value.city=g.value.find(t=>t.areaNo==l).areaName},R=()=>{v.value.validate(l=>{l||Y()})},Y=async()=>{const l=e.value.fileList.filter(n=>n.status!="done").map(n=>n.file),t=e.value.fileList.filter(n=>n.status=="done").map(n=>n.uid),{err:s}=await f(()=>D.planeHotelSave({...e.value,periodCooperateStart:x(e.value.periodCooperateStart,"YYYYMMDD",""),periodCooperateEnd:x(e.value.periodCooperateEnd,"YYYYMMDD",""),fileList:l.length==0?null:l,oldFileIdList:t}),{before:()=>C("okLoading"),after:()=>C(null),successMsg:"保存成功"});s||_()},H=async()=>{const{res:l,err:t}=await f(()=>D.getHotelDetail({id:u.query.id}));t||(e.value={...l==null?void 0:l.data,hotelContactsPhone:(l==null?void 0:l.data.hotelContactsPhone)*1},e.value.fileList=l==null?void 0:l.data.cooperateDetailList.map(s=>({name:s.attName,size:s.attSize,url:s.attPath,uid:s.id,status:"done"})))};return u.query.id&&H(),(l,t)=>{const s=i("a-input"),n=i("a-form-item"),B=i("a-input-number"),m=i("a-select"),V=i("a-date-picker"),b=i("a-col"),O=i("a-row"),T=i("a-upload"),z=i("a-form"),j=i("a-card"),L=i("a-button"),F=i("a-space");return w(),S(de,null,{default:r(()=>[o(j,{title:`
				酒店合作信息维护
			`,bordered:!1,class:"general-card"},{default:r(()=>[o(z,{ref_key:"formRef",ref:v,model:a(e),"label-align":"left",size:"large",style:{width:"800px","padding-left":"100px"},"auto-label-width":"",disabled:!!a(u).query.isReadOnly,rules:U},{default:r(()=>[o(n,{field:"hotelName",label:"酒店名称:",required:""},{default:r(()=>[o(s,{modelValue:a(e).hotelName,"onUpdate:modelValue":t[0]||(t[0]=d=>a(e).hotelName=d),modelModifiers:{trim:!0},placeholder:"请输入酒店名称"},null,8,["modelValue"])]),_:1}),o(n,{field:"hotelLevel",label:"酒店等级:",required:""},{default:r(()=>[o(s,{modelValue:a(e).hotelLevel,"onUpdate:modelValue":t[1]||(t[1]=d=>a(e).hotelLevel=d),modelModifiers:{trim:!0},placeholder:"请输入酒店等级"},null,8,["modelValue"])]),_:1}),o(n,{field:"hotelContacts",label:"联系人:",required:""},{default:r(()=>[o(s,{modelValue:a(e).hotelContacts,"onUpdate:modelValue":t[2]||(t[2]=d=>a(e).hotelContacts=d),modelModifiers:{trim:!0},placeholder:"请输入联系人"},null,8,["modelValue"])]),_:1}),o(n,{field:"hotelContactsPhone",label:"联系电话:",required:""},{default:r(()=>[o(B,{modelValue:a(e).hotelContactsPhone,"onUpdate:modelValue":t[3]||(t[3]=d=>a(e).hotelContactsPhone=d),modelModifiers:{trim:!0},placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),o(n,{field:"detailAddress",label:"详细地址:",required:""},{default:r(()=>[o(s,{modelValue:a(e).detailAddress,"onUpdate:modelValue":t[4]||(t[4]=d=>a(e).detailAddress=d),modelModifiers:{trim:!0},placeholder:"请输入详细地址"},null,8,["modelValue"])]),_:1}),o(n,{label:"所属国家:",field:"countryCode",required:""},{default:r(()=>[o(m,{modelValue:a(e).countryCode,"onUpdate:modelValue":t[5]||(t[5]=d=>a(e).countryCode=d),"allow-search":"",options:a(y),"field-names":{label:"areaName",value:"areaNo"},"virtual-list-props":{height:200},placeholder:"请选择所属国家",onChange:I},null,8,["modelValue","options"])]),_:1}),o(n,{label:"所属省:",field:"provinceCode"},{default:r(()=>[o(m,{modelValue:a(e).provinceCode,"onUpdate:modelValue":t[6]||(t[6]=d=>a(e).provinceCode=d),options:a(h),"field-names":{label:"areaName",value:"areaNo"},"allow-search":"",placeholder:"请选择所属省",onChange:k},null,8,["modelValue","options"])]),_:1}),o(n,{label:"所属市:",field:"cityCode"},{default:r(()=>[o(m,{modelValue:a(e).cityCode,"onUpdate:modelValue":t[7]||(t[7]=d=>a(e).cityCode=d),options:a(g),"field-names":{label:"areaName",value:"areaNo"},"allow-search":"",placeholder:"请选择所属市",onChange:E},null,8,["modelValue","options"])]),_:1}),o(O,{gutter:8},{default:r(()=>[o(b,{span:12},{default:r(()=>[o(n,{field:"periodCooperateStart",label:"合作期限开始:"},{default:r(()=>[o(V,{modelValue:a(e).periodCooperateStart,"onUpdate:modelValue":t[8]||(t[8]=d=>a(e).periodCooperateStart=d),class:"flex1"},null,8,["modelValue"])]),_:1})]),_:1}),o(b,{span:12},{default:r(()=>[o(n,{field:"periodCooperateEnd",label:"合作期限结束:"},{default:r(()=>[o(V,{modelValue:a(e).periodCooperateEnd,"onUpdate:modelValue":t[9]||(t[9]=d=>a(e).periodCooperateEnd=d),class:"flex1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(n,{label:"合作详情:",field:"fileList"},{default:r(()=>[o(T,{"file-list":a(e).fileList,"onUpdate:fileList":t[10]||(t[10]=d=>a(e).fileList=d),"auto-upload":!1,accept:".pdf",multiple:"",limit:1,draggable:"","show-retry-button":!1,"show-remove-button":!a(u).query.isReadOnly},null,8,["file-list","show-remove-button"])]),_:1})]),_:1},8,["model","disabled"])]),_:1}),ne,A("div",ie,[o(F,null,{default:r(()=>[a(u).query.isReadOnly?Q("",!0):(w(),S(L,{key:0,loading:a(M)==="okLoading",type:"primary",onClick:R},{default:r(()=>[q("确定")]),_:1},8,["loading"])),o(L,{onClick:t[11]||(t[11]=()=>a(_)())},{default:r(()=>[q("返回")]),_:1})]),_:1})])]),_:1})}}});const _e=ae(ue,[["__scopeId","data-v-59e9d6ee"]]);export{_e as default};