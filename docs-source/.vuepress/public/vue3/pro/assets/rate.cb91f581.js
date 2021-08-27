
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import e from"./alert.ab7e5afa.js";import{r as l,o as a,s as t,i as o,w as u}from"./vendor.5d2d2ca8.js";const d={components:{Alert:e},data:()=>({value1:null,value2:null,value3:3.7})};d.render=function(e,d,s,m,n,r){const v=l("Alert"),c=l("page-header"),i=l("el-rate"),f=l("page-main");return a(),t("div",null,[o(v),o(c,{title:"评分"}),o(f,{title:"基础用法",class:"demo"},{default:u((()=>[o(i,{modelValue:n.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>n.value1=e)},null,8,["modelValue"])])),_:1}),o(f,{title:"辅助文字",class:"demo"},{default:u((()=>[o(i,{modelValue:n.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>n.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),o(f,{title:"只读",class:"demo"},{default:u((()=>[o(i,{modelValue:n.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>n.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{d as default};
