import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//挂载字体图标样式
import './assets/css/iconfont.css';

//挂载全局API


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
