var T=Object.defineProperty,N=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e)=>{for(var t in e||(e={}))Z.call(e,t)&&R(r,t,e[t]);if(V)for(var t of V(e))j.call(e,t)&&R(r,t,e[t]);return r},B=(r,e)=>N(r,F(e));import{d as M,o as d,c as _,p as D,a as q,b as i,e as y,f as u,w as O,u as v,R as S,g as H,F as C,h as U,m as w,t as f,r as P,i as I,j as k,k as K,l as X,n as z,q as G}from"./vendor.10a65337.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};J();var Q="./assets/logo.da9b9095.svg";var m=(r,e)=>{const t=r.__vccOpts||r;for(const[s,n]of e)t[s]=n;return t};const x=r=>(D("data-v-5fe1e9c2"),r=r(),q(),r),Y={class:"greetings"},ee=x(()=>i("h1",{class:"green"},"A simple Vue3 + Vite showcase",-1)),te=x(()=>i("h3",null,[y(" An example calculator project made with "),i("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),y(" & "),i("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite")],-1)),se=[ee,te],oe=M({props:{msg:null},setup(r){return(e,t)=>(d(),_("div",Y,se))}});var re=m(oe,[["__scopeId","data-v-5fe1e9c2"]]);const ne=i("img",{alt:"Vue logo",class:"logo",src:Q,width:"125",height:"125"},null,-1),ae={class:"wrapper"},ce=y("Calculator"),le=y("Calculator TODOs"),ue=y("About Vue 3"),ie=M({setup(r){return(e,t)=>(d(),_(C,null,[i("header",null,[ne,i("div",ae,[u(re,{msg:""}),i("nav",null,[u(v(S),{to:"/"},{default:O(()=>[ce]),_:1}),u(v(S),{to:"/todo"},{default:O(()=>[le]),_:1}),u(v(S),{to:"/aboutVue3"},{default:O(()=>[ue]),_:1})])])]),u(v(H))],64))}}),de="modulepreload",L={},pe="./",A=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${pe}${s}`,s in L)return;L[s]=!0;const n=s.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":de,n||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),n)return new Promise((b,p)=>{a.addEventListener("load",b),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},l=U({id:"calcStore",state:()=>_e}),_e={result:0,subtotal:null,lastOp:null,opWasLast:!1,dotPosition:null,fakeZeroes:0,memory:null,repeatValue:null};const me={name:"CalcScreen",computed:g({},w(l,["subtotal","lastOp","result","memory"]))},fe={id:"screen",style:{"grid-column":"1 / 5"}},he={id:"subtotal"},Pe={id:"input-line"},ye={id:"memory"},ge=["value"];function ve(r,e,t,s,n,o){return d(),_("div",fe,[i("div",he," \xA0 "+f(r.subtotal)+" "+f(r.lastOp),1),i("div",Pe,[i("div",ye,f(r.memory?"M":""),1),i("input",{id:"result",maxlength:"13",type:"text",readonly:"",value:r.result?r.result:0},null,8,ge)])])}var $e=m(me,[["render",ve],["__scopeId","data-v-42bcc5b6"]]);const be={name:"CalcButton",props:{caption:String,func:Function},computed:{generateId(){return this.caption===void 0?void 0:"calc-"+Oe[this.caption]}}},Oe={"=":"total",".":"dot","\xB1":"sign",MS:"memory-store",MC:"memory-clear",MR:"memory-recall","M+":"memory-add","C/CE":"clear"},Se=["id"];function Ce(r,e,t,s,n,o){return d(),_("button",{id:o.generateId,onClick:e[0]||(e[0]=(...a)=>t.func&&t.func(...a))},f(t.caption),9,Se)}var ke=m(be,[["render",Ce]]);const E=10;class c{static numberPressed(e){c.stopRepeat();const t=l();let s={result:e};t.opWasLast?s.result=e:((t.result<0||Object.is(t.result,-0))&&(e*=-1),t.dotPosition===null?(s.fakeZeroes=0,s.result=t.result*10+e):t.dotPosition<E&&(t.dotPosition++,s.dotPosition=t.dotPosition,s.result=parseFloat(e.toPrecision(E)),e===0?(s.fakeZeroes++,c.updateResult()):(s.fakeZeroes=0,s.result=t.result+e/Math.pow(10,t.dotPosition)))),s.opWasLast=!1,t.$patch(s)}static signPressed(){const e=l();c.stopRepeat();const t=e.result*=-1;e.$patch(t)}static doOperation(){const e=l();let t=e.subtotal;switch(e.lastOp){case"+":t+=e.result;break;case"-":t-=e.result;break;case"*":t*=e.result;break;case"/":t/=e.result;break;case null:break;default:throw new Error("invalid operation")}return{result:t,opWasLast:!0,dotPosition:null,fakeZeroes:0}}static calcOperationPressed(e){const t=l(),s=t.opWasLast?{}:c.doOperation();s.lastOp=e,s.opWasLast=!0,s.dotPosition=null,s.subtotal=null,t.repeatValue===null&&(s.subtotal=t.result),t.$patch(s)}static calcTotalPressed(e){const t=l(),s={};if(t.repeatValue===null){if(t.subtotal===null)return;s.repeatValue=t.result,c.calcOperationPressed(e),s.subtotal=null}else s.subtotal=t.result,s.result=t.repeatValue,c.calcOperationPressed(e),s.subtotal=null;t.$patch(s)}static stopRepeat(){const e=l(),t={};e.subtotal===null&&(t.lastOp=null),t.repeatValue=null,e.$patch(t)}static memoryStorePressed(){const e=l(),t={memory:e.result};e.$patch(t)}static memoryRecallPressed(){const e=l();if(e.memory!==null){const t={result:e.memory};e.$patch(t)}}static memoryAddPressed(){const e=l(),t={memory:e.memory+e.result};e.$patch(t)}static memoryClearPressed(){const e=l(),t={memory:null};e.$patch(t)}static dotPressed(){const e=l();if(c.stopRepeat(),!e.opWasLast)if(e.dotPosition===null){const t={dotPosition:0};e.$patch(t)}else{const t={dotPosition:null};e.$patch(t)}}static calcClearPressed(){const e=l();if(e.result===0){const s={subtotal:null,lastOp:null};e.$patch(s)}else{const s={result:0,dotPosition:null};e.$patch(s)}if(e.subtotal===null){const s={lastOp:null,fakeZeroes:0,dotPosition:null};e.$patch(s)}c.stopRepeat();const t={fakeZeroes:0,dotPosition:null};e.$patch(t)}}const we={name:"OperationButton",props:{operation:String,func:Function},computed:{generateId(){return this.operation===void 0?void 0:"calc-operation-"+Ve[this.operation]}},methods:{calcOperationPressed(){return c.calcOperationPressed(this.operation)}}},Ve={"+":"plus","-":"minus","*":"times","/":"divide"},Re=["id"];function Be(r,e,t,s,n,o){return d(),_("button",{id:o.generateId,onClick:e[0]||(e[0]=(...a)=>o.calcOperationPressed&&o.calcOperationPressed(...a))},f(t.operation),9,Re)}var Ie=m(we,[["render",Be],["__scopeId","data-v-5a326975"]]);const Le={name:"NumericButton",props:{number:Number,func:Function},computed:g({generatedId(){return this.number===void 0?void 0:"calc-key-"+this.number}},w(l,["result"])),methods:{numberPressed(){return c.numberPressed(this.number)}}},Ae=["id"];function Ee(r,e,t,s,n,o){return d(),_("button",{id:o.generatedId,onClick:e[0]||(e[0]=(...a)=>o.numberPressed&&o.numberPressed(...a))},f(t.number),9,Ae)}var Me=m(Le,[["render",Ee],["__scopeId","data-v-a234b68c"]]);const xe=B(g({name:"CalcComponent",components:{CalcScreen:$e,NumericButton:Me,OperationButton:Ie,CalcButton:ke}},w(l,["subtotal","lastOp","result","memory"])),{data:()=>({buttonOrder:[7,8,9,4,5,6,1,2,3,0],calcOperations:["/","*","-","+"]}),methods:{calcTotalPressed(){return c.calcTotalPressed()},signPressed(){return c.signPressed()},memoryStorePressed(){return c.memoryStorePressed()},memoryRecallPressed(){return c.memoryRecallPressed()},memoryAddPressed(){return c.memoryAddPressed()},memoryClearPressed(){return c.memoryClearPressed()},calcClearPressed(){return c.calcClearPressed()},dotPressed(){return c.dotPressed()}}}),We={class:"main"},Te={class:"calc-grid"};function Ne(r,e,t,s,n,o){const a=P("CalcScreen"),b=P("OperationButton"),p=P("CalcButton"),W=P("NumericButton");return d(),_("main",We,[i("div",Te,[u(a),(d(!0),_(C,null,I(r.calcOperations,h=>(d(),k(b,{key:h,operation:h},null,8,["operation"]))),128)),u(p,{caption:"=",style:{"grid-column":"4","grid-row":"5 / 7"},func:o.calcTotalPressed},null,8,["func"]),(d(!0),_(C,null,I(r.buttonOrder,h=>(d(),k(W,{key:h,number:h},null,8,["number"]))),128)),u(p,{caption:".",style:{"grid-column":"1","grid-row":"7"},func:o.dotPressed},null,8,["func"]),u(p,{caption:"\xB1",func:o.signPressed},null,8,["func"]),u(p,{caption:"C/CE",func:o.calcClearPressed},null,8,["func"]),u(p,{caption:"MS",style:{"grid-column":"3","grid-row":"2"},func:o.memoryStorePressed},null,8,["func"]),u(p,{caption:"MC",style:{"grid-column":"1","grid-row":"2"},func:o.memoryClearPressed},null,8,["func"]),u(p,{caption:"MR",style:{"grid-column":"2","grid-row":"2"},func:o.memoryRecallPressed},null,8,["func"]),u(p,{caption:"M+",style:{"grid-column":"4","grid-row":"2"},func:o.memoryAddPressed},null,8,["func"])])])}var Fe=m(xe,[["render",Ne],["__scopeId","data-v-4e64f31f"]]);const Ze={components:{CalcComponent:Fe}};function je(r,e,t,s,n,o){const a=P("CalcComponent");return d(),k(a)}var De=m(Ze,[["render",je]]);const qe=K({history:X("./"),routes:[{path:"/",name:"home",component:De},{path:"/todo",name:"todo",component:()=>A(()=>import("./CalcTodoListView.356e6a53.js"),["assets/CalcTodoListView.356e6a53.js","assets/CalcTodoListView.79347e08.css","assets/vendor.10a65337.js"])},{path:"/aboutVue3",name:"aboutVue3",component:()=>A(()=>import("./HomeView.dd0a6d37.js"),["assets/HomeView.dd0a6d37.js","assets/HomeView.8b8d2c52.css","assets/vendor.10a65337.js"])}]}),$=z(ie);$.config.globalProperties.$log=console.log;$.use(G());$.use(qe);$.mount("#app");export{m as _};
