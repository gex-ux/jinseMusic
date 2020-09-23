import Vue from "vue";
import VueRouter from "vue-router";
import rank from "../components/rank/rank";
import search from "../components/search/search";
import singer from "../components/singer/singer";
import recommend from "../components/recommend/recommend";

Vue.use(VueRouter);//引入路由中间件
export default  new VueRouter({
    routes:[{
        path:"/",
        redirect:"/recommend" //重定向
    },{
        path:"/rank",
        component:rank
    },{
        path:"/search",
        component:search
    },{
        path:"/singer",
        component:singer
    },{
        path: "/recommend",
        component: recommend
    }
    ]
})