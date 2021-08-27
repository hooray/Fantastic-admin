
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as l,s as o,i as n,w as a,v as d}from"./vendor.5d2d2ca8.js";const i={data:()=>({icon1:"",icon2:"el-icon-platform-eleme"})},t={style:{"margin-bottom":"15px"}};i.render=function(i,c,u,r,m,s){const p=e("page-header"),V=e("icon-picker"),f=e("page-main");return l(),o("div",null,[n(p,{title:"图标选择器",content:"IconPicker"}),n(f,null,{default:a((()=>[d("div",t,[n(V,{modelValue:m.icon1,"onUpdate:modelValue":c[0]||(c[0]=e=>m.icon1=e)},null,8,["modelValue"])]),d("div",null,[n(V,{modelValue:m.icon2,"onUpdate:modelValue":c[1]||(c[1]=e=>m.icon2=e)},null,8,["modelValue"])])])),_:1})])};export{i as default};
