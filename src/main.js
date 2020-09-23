import Vue from 'vue';
import App from './App.vue';
import "./common/stylus/index.styl";//引入css预编译stylus
import Router from  "./router/index";//引入路由

import attachFastClick from "fastclick"; //引入组件的目的是为了解决移动端300ms的点击延迟问题

//解决移动端点击延迟300ms问题
attachFastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router //引用路由
}).$mount('#app')
