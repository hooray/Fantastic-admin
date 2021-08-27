
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import e from"./alert.aa2b5238.js";import{r as l,j as a,l as t,w as o,o as u}from"./vendor.798dafea.js";const d={components:{Alert:e},data:()=>({value1:null,value2:null,value3:3.7})};d.render=function(e,d,s,m,n,r){const v=l("Alert"),c=l("page-header"),f=l("el-rate"),i=l("page-main");return u(),a("div",null,[t(v),t(c,{title:"评分"}),t(i,{title:"基础用法",class:"demo"},{default:o((()=>[t(f,{modelValue:n.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>n.value1=e)},null,8,["modelValue"])])),_:1}),t(i,{title:"辅助文字",class:"demo"},{default:o((()=>[t(f,{modelValue:n.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>n.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),t(i,{title:"只读",class:"demo"},{default:o((()=>[t(f,{modelValue:n.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>n.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{d as default};
