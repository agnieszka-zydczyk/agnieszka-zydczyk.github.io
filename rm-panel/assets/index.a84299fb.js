import{v as R,R as y,M as k,a6 as N,j as V,s as C,r as v,o as n,c as p,w as m,k as e,l as d,q as g,F as _,A as x,t as r,a as I,d as w,n as o,J as P,K as A,_ as B}from"./index.ef40ff0d.js";var S={name:"rmRewardsGroupAssign",components:{vaxView:R,vaxButton:y,vaxCombobox:k},data(){return{afterPost:()=>this.getJsonViewData()}},methods:{toPercentString:N,assignReward(a){const i=a.target;var t;for(t=i;t.tagName.toUpperCase()!=="TR";t=t.parentElement);const l=t.getElementsByTagName("select")[0].value;l!==-1&&this.submitPostDirect({formName:"assignGroupReward",rewardId:l,clazzId:t.getElementsByTagName("input")[0].value})}},mixins:[V,C]};const b=a=>(P("data-v-76d84a4e"),a=a(),A(),a),G={class:"vax-flex vax-margin-bottom"},j={class:"vax-wrapper-scrollbar-x vax-inline-block"},D={class:"vax-table vax-inline-table vax-table-hover"},E=b(()=>e("thead",null,[e("tr",{class:"vax-table-row-underline"},[e("td",null,"Plac\xF3wka"),e("td",null,"Oddzia\u0142"),e("td",null,"Frekwencja %"),e("td",null,[o("Potrzebna"),e("br"),o("ilo\u015B\u0107")]),e("td",null,[o("Nagroda"),e("br"),o("preferowana")]),e("td",null,[o("Nagroda"),e("br"),o("niepo\u017C\u0105dana")]),e("td",null,"Wybrana nagroda"),e("td",null,"Zatwierd\u017A")])],-1)),T=["data-it"],q={class:"vax-text-align-right"},F={class:"vax-text-align-right"},M=["value"],J=b(()=>e("i",{class:"fa fa-trophy"},null,-1)),K=o(" Rozdziel pozosta\u0142e nagrody automatycznie ");function L(a,i){const t=v("vax-combobox"),l=v("vax-button"),h=v("vax-view");return a.jsonView?(n(),p(h,{key:0,"view-data":a.jsonView,response:a.response,"response-class":a.responseClass},{default:m(()=>[e("div",G,[e("div",j,[e("table",D,[E,e("tbody",null,[(n(!0),d(_,null,g(a.jsonView.rewardsGroupAssign,(u,f)=>(n(),d(_,null,[(n(!0),d(_,null,g(u.clazzes,(s,c)=>(n(),d("tr",{"data-it":f,class:x({"vax-table-row-overline":c===0})},[e("td",{class:x(["vax-icon-small-height vax-bold",{"vax-cell-transparent":c!==0}])},r(c===0?u.name:"\xA0"),3),e("td",null,r(s.name),1),e("td",q,r(a.toPercentString(s.freqRatio)),1),e("td",F,r(s.amountRequired),1),e("td",{class:x({"vax-is-error":s.preferredRewardImpossible})},r(s.preferredGroupReward),3),e("td",null,r(s.unwantedGroupReward),1),e("td",null,[I(t,{class:"vax-float-right",captions:s.possibleRewardsNames,values:s.possibleRewardsIds,"selected-value":s.suggestedReward},null,8,["captions","values","selected-value"])]),e("td",null,[s.canAssignReward?(n(),p(l,{key:0,"button-class":"is-warning vax-button-small",class:"vax-flex-center",onClick:a.assignReward},{default:m(()=>[e("input",{type:"hidden",name:"clazzId",value:s.id},null,8,M),J]),_:2},1032,["onClick"])):w("",!0)])],10,T))),256))],64))),256))])])])]),a.jsonView.canAssignAllRewards?(n(),p(l,{key:0,onClick:i[0]||(i[0]=u=>a.submitPostDirect({formName:"assignAllGroupRewards"})),"button-class":"vax-width-100pct is-primary vax-margin-top vax-margin-bottom"},{default:m(()=>[K]),_:1})):w("",!0)]),_:1},8,["view-data","response","response-class"])):w("",!0)}var U=B(S,[["render",L],["__scopeId","data-v-76d84a4e"]]);export{U as default};
