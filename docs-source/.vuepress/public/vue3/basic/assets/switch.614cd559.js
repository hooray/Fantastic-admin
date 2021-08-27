
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import e from"./alert.aa2b5238.js";import{r as l,j as a,l as t,w as o,o as u}from"./vendor.798dafea.js";const d={components:{Alert:e},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};d.render=function(e,d,m,n,s,i){const r=l("Alert"),v=l("page-header"),c=l("el-switch"),V=l("page-main");return u(),a("div",null,[t(r),t(v,{title:"开关"}),t(V,{title:"基础用法",class:"demo"},{default:o((()=>[t(c,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=e=>s.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),t(V,{title:"文字描述",class:"demo"},{default:o((()=>[t(c,{modelValue:s.value1,"onUpdate:modelValue":d[1]||(d[1]=e=>s.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),t(V,{title:"禁用状态",class:"demo"},{default:o((()=>[t(c,{modelValue:s.value2,"onUpdate:modelValue":d[2]||(d[2]=e=>s.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),t(c,{modelValue:s.value3,"onUpdate:modelValue":d[3]||(d[3]=e=>s.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])};export{d as default};
