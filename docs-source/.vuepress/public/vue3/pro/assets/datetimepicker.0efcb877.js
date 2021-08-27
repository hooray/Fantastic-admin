
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import e from"./alert.ab7e5afa.js";import{r as a,o as l,s as t,i as d,w as o,v as u}from"./vendor.5d2d2ca8.js";const r={components:{Alert:e},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},n=u("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);r.render=function(e,u,r,m,s,i){const p=a("Alert"),c=a("page-header"),v=a("el-date-picker"),f=a("page-main");return l(),t("div",null,[d(p),d(c,{title:"日期时间选择器"}),d(f,{title:"日期和时间点",class:"demo"},{default:o((()=>[d(v,{modelValue:s.value1,"onUpdate:modelValue":u[0]||(u[0]=e=>s.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),d(f,{title:"日期和时间范围",class:"demo"},{default:o((()=>[d(v,{modelValue:s.value2,"onUpdate:modelValue":u[1]||(u[1]=e=>s.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),d(f,{title:"默认的起始与结束时刻",class:"demo"},{default:o((()=>[n,d(v,{modelValue:s.value3,"onUpdate:modelValue":u[2]||(u[2]=e=>s.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])};export{r as default};
