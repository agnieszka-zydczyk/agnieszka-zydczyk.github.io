import{v as b,H as f,f as w,R as h,$ as k,a0 as x,a1 as j,s as C,j as S,r as o,o as n,c as t,w as e,a as p,n as m,t as V,d as i,b as P,J as y,K as A,k as r,_ as F}from"./index.ef40ff0d.js";import{r as N}from"./index.09b9317a.js";import"./index.b4f12f59.js";import"./index.cc9afd3f.js";import"./index.4e8d9ee6.js";var D={name:"rmManageCampaign",components:{vaxView:b,vaxBox:f,vaxForm:w,vaxButton:h,rmFormCampaign:N},data(){return{afterPost:()=>k()}},computed:{campaignStage(){var a;return x[(a=this.jsonView)==null?void 0:a.stage]}},methods:{confirmProcessFinishedCampaign(){confirm(j)&&this.submitPostDirectAndScroll({formName:"processFinishedCampaign"})}},mixins:[C,S]};const l=a=>(y("data-v-08059a59"),a=a(),A(),a),M=l(()=>r("fieldset",{style:{"margin-top":"1rem","border-bottom":"none","border-left":"none","border-right":"none",padding:"0.5rem 1rem 0.5rem","border-color":"rgba(255,255,255,0.5)"}},[r("legend",{class:"vax-legend vax-uppercase"},"Ustawienia kampanii")],-1)),B=m(" Przejd\u017A do nast\u0119pnego etapu kampanii "),I=m(" Transformuj zako\u0144czon\u0105 kampani\u0119 na agregat "),z=l(()=>r("b",null,"Usu\u0144",-1)),T=l(()=>r("hr",null,null,-1)),U=m(' Agreguj jako domy\u015Blne \u017Ar\xF3d\u0142o danych ("Majowy Maj") publicznego API ');function R(a,s){const c=o("rm-form-campaign"),u=o("vax-box"),d=o("vax-button"),g=o("vax-form"),v=o("vax-view");return a.jsonView?(n(),t(v,{key:0,"view-data":a.jsonView,response:a.response,"response-class":a.responseClass},{default:e(()=>[p(c,{disabled:a.jsonView.stage!==-1,"has-caption":"",values:a.jsonView},null,8,["disabled","values"]),M,p(u,null,{default:e(()=>[m(" Etap kampanii: "+V(a.campaignStage),1)]),_:1}),a.jsonView.stage<2?(n(),t(d,{key:0,"button-class":"is-warning vax-bold",onClick:s[0]||(s[0]=_=>a.submitPostDirectAndScroll({formName:"progressThroughCampaign"}))},{default:e(()=>[B]),_:1})):i("",!0),a.jsonView.stage===2?(n(),t(d,{key:1,"button-class":"is-danger",onClick:a.confirmProcessFinishedCampaign},{default:e(()=>[I]),_:1},8,["onClick"])):i("",!0),a.jsonView.canRemove?(n(),t(g,{key:2,"submit-caption":"Usu\u0144 kampani\u0119","submit-button-class":"is-danger vax-bold vax-margin-all",name:"removeCampaign",action:a.postUrl,method:"POST",onSubmit:P(a.submitPost,["prevent"])},{default:e(()=>[z]),_:1},8,["action","onSubmit"])):i("",!0),T,p(d,{"button-class":"is-warning vax-bold",onClick:s[1]||(s[1]=_=>a.submitPostDirectAndScroll({formName:"aggregateAsDefaultForPublicApi"}))},{default:e(()=>[U]),_:1})]),_:1},8,["view-data","response","response-class"])):i("",!0)}var O=F(D,[["render",R],["__scopeId","data-v-08059a59"]]);export{O as default};
