import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './store/modules/permission' // permission control
import router from './router'
import './plugins/element.js'
import './icons';  //这样才能确保svg-icon的注册
import '@/permission'
import '@/styles/index.scss' // global css
import VCharts from 'v-charts'
Vue.config.productionTip = false
Vue.use(VCharts)

//store -- vuex的状态管理
//runtime模式（运行时）,vue模块的package.json的main字段默认为runtime模式
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

// compiler（模板）模式
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template:'<App/>',
//   components: { App }
// })
