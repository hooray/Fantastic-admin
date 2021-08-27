
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{g as e,i as a,r,j as l,l as o,w as t,o as d,q as u}from"./vendor.798dafea.js";const m={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}};e("data-v-219cd1aa");const s=u("提交");a(),m.render=function(e,a,u,m,n,i){const p=r("page-header"),c=r("cascader-area"),f=r("page-main"),F=r("el-form-item"),_=r("el-button"),g=r("el-form");return d(),l("div",null,[o(p,{title:"省市区联动",content:"CascaderArea"}),o(f,null,{default:t((()=>[o(c,{modelValue:n.area,"onUpdate:modelValue":a[0]||(a[0]=e=>n.area=e)},null,8,["modelValue"])])),_:1}),o(f,{title:"表单验证"},{default:t((()=>[o(g,{ref:"ruleForm",model:n.ruleForm,rules:n.rules},{default:t((()=>[o(F,{label:"地区",prop:"area"},{default:t((()=>[o(c,{modelValue:n.ruleForm.area,"onUpdate:modelValue":a[1]||(a[1]=e=>n.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),o(F,null,{default:t((()=>[o(_,{type:"primary",onClick:i.submitForm},{default:t((()=>[s])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])},m.__scopeId="data-v-219cd1aa";export{m as default};
