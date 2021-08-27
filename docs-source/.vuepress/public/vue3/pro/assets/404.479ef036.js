
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{n as t,q as a,r as e,o as s,s as n,i as o,v as r,w as i,A as c,x as d}from"./vendor.5d2d2ca8.js";const l={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};t("data-v-79782c7a");const u={class:"notfound"},h={class:"content"},v=r("h1",null,"404",-1),m=r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);a(),l.render=function(t,a,l,b,f,p){const g=e("svg-icon"),k=e("el-button");return s(),n("div",u,[o(g,{name:"404"}),r("div",h,[v,m,o(k,{type:"primary",onClick:p.goBack},{default:i((()=>[c(d(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},l.__scopeId="data-v-79782c7a";export{l as default};
