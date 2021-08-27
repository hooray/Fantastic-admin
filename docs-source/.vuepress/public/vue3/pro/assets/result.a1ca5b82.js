
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as t,s as l,i as a,w as s,A as r,v as u}from"./vendor.5d2d2ca8.js";const d={},n=r("返回列表"),i=r("打印"),f=u("div",null,"您提交的内容有如下错误：",-1),o=u("div",null,[r(" 您的账户已被冻结 "),u("a",{href:"###"},"打印")],-1),p=r("返回修改");d.render=function(r,u){const d=e("page-header"),c=e("el-button"),m=e("result",!0),_=e("page-main");return t(),l("div",null,[a(d,{title:"处理结果",content:"Result"}),a(_,null,{default:s((()=>[a(m,{type:"success",title:"提交成功",desc:"提交结果页用于反馈一系列操作任务的处理结果。"},{default:s((()=>[a(c,{type:"primary",size:"small"},{default:s((()=>[n])),_:1}),a(c,{size:"small"},{default:s((()=>[i])),_:1})])),_:1})])),_:1}),a(_,null,{default:s((()=>[a(m,{type:"error",title:"提交失败",desc:"灰色额外区域可以显示一些补充的信息。请核对并修改以下信息后，再重新提交。"},{extra:s((()=>[f,o])),default:s((()=>[a(c,{type:"primary",size:"small"},{default:s((()=>[p])),_:1})])),_:1})])),_:1})])};export{d as default};
