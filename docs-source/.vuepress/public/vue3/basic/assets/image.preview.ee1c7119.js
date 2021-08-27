
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as t,j as e,l as a,w as i,o,v as n}from"./vendor.798dafea.js";const d={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};d.render=function(d,l,r,s,c,u){const p=t("page-header"),g=t("image-preview"),h=t("page-main");return o(),e("div",null,[a(p,{title:"图片预览",content:"ImagePreview"}),a(h,null,{default:i((()=>[n("div",null,[a(g,{src:`https://hooray.${u.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),a(h,{title:"图片加载失败时"},{default:i((()=>[n("div",null,[a(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])},d.__scopeId="data-v-9db54ca2";export{d as default};
