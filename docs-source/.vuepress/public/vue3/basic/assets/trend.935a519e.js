
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,j as l,l as t,w as a,o as n,v as u}from"./vendor.798dafea.js";const r={},d=u("p",null,"Trend",-1),s=u("p",{style:{"margin-bottom":"0"}},"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外",-1);r.render=function(r,p){const i=e("page-header"),o=e("trend",!0),f=e("page-main"),m=e("el-col"),v=e("el-row");return n(),l("div",null,[t(i,{title:"趋势符号"},{content:a((()=>[d,s])),_:1}),t(v,{gutter:20,style:{margin:"0 10px"}},{default:a((()=>[t(m,{md:8},{default:a((()=>[t(f,{title:"基础用法",style:{margin:"0"}},{default:a((()=>[u("p",null,[t(o,{value:"12.3"})]),u("p",null,[t(o,{value:"12.3",type:"down"})])])),_:1})])),_:1}),t(m,{md:8},{default:a((()=>[t(f,{title:"颜色反转",style:{margin:"0"}},{default:a((()=>[u("p",null,[t(o,{value:"12.3",reverse:""})]),u("p",null,[t(o,{value:"12.3",type:"down",reverse:""})])])),_:1})])),_:1}),t(m,{md:8},{default:a((()=>[t(f,{title:"前缀后缀",style:{margin:"0"}},{default:a((()=>[u("p",null,[t(o,{value:"12.3",prefix:"$"})]),u("p",null,[t(o,{value:"12.3",suffix:"%"})])])),_:1})])),_:1})])),_:1})])};export{r as default};
