
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as l,s as t,i as a,w as n,v as u}from"./vendor.5d2d2ca8.js";const r={},d=u("p",null,"Trend",-1),s=u("p",{style:{"margin-bottom":"0"}},"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外",-1);r.render=function(r,i){const p=e("page-header"),o=e("trend",!0),f=e("page-main"),m=e("el-col"),v=e("el-row");return l(),t("div",null,[a(p,{title:"趋势符号"},{content:n((()=>[d,s])),_:1}),a(v,{gutter:20,style:{margin:"0 10px"}},{default:n((()=>[a(m,{md:8},{default:n((()=>[a(f,{title:"基础用法",style:{margin:"0"}},{default:n((()=>[u("p",null,[a(o,{value:"12.3"})]),u("p",null,[a(o,{value:"12.3",type:"down"})])])),_:1})])),_:1}),a(m,{md:8},{default:n((()=>[a(f,{title:"颜色反转",style:{margin:"0"}},{default:n((()=>[u("p",null,[a(o,{value:"12.3",reverse:""})]),u("p",null,[a(o,{value:"12.3",type:"down",reverse:""})])])),_:1})])),_:1}),a(m,{md:8},{default:n((()=>[a(f,{title:"前缀后缀",style:{margin:"0"}},{default:n((()=>[u("p",null,[a(o,{value:"12.3",prefix:"$"})]),u("p",null,[a(o,{value:"12.3",suffix:"%"})])])),_:1})])),_:1})])),_:1})])};export{r as default};
