import{i as o,I as s,r as i,o as d,c as r,w as p,a as l,_ as t}from"./index.ef40ff0d.js";var u={components:{vaxInputField:o,vaxFieldset:s},props:{caption:String,name:String,disabled:Boolean,collapsable:{type:Boolean,default:!1},initialCollapsed:Boolean,required:{type:Boolean,default:!1},values:{type:Object,default:()=>({})}},created(){if(this.collapsable&&this.required)throw"potentially hidden inputs can't be required"},computed:{valuesComp(){return this.values===void 0||this.values===null?{}:this.values}}};function m(e,v){const a=i("vax-input-field"),n=i("vax-fieldset");return d(),r(n,{caption:e.caption,collapsable:e.collapsable,"initial-collapsed":e.initialCollapsed},{default:p(()=>[l(a,{caption:"Imi\u0119 i nazwisko",name:e.name+"_name",placeholder:"imi\u0119 i nazwisko",required:!e.collapsable&&e.required,value:e.valuesComp.name,disabled:e.disabled,maxlength:"50"},null,8,["name","required","value","disabled"]),l(a,{caption:"Nr telefonu",name:e.name+"_phone",type:"tel",pattern:"[0-9 +]{9,16}",placeholder:"xxx xxx xxx",required:!e.collapsable&&e.required,value:e.valuesComp.phone,disabled:e.disabled,maxlength:"20"},null,8,["name","required","value","disabled"]),l(a,{caption:"Adres email",name:e.name+"_email",type:"email",placeholder:"abc@xyz.com",required:!e.collapsable&&e.required,value:e.valuesComp.email,disabled:e.disabled,maxlength:"50"},null,8,["name","required","value","disabled"])]),_:1},8,["caption","collapsable","initial-collapsed"])}var b=t(u,[["render",m]]);export{b as v};