import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import store from'@/store'
import '@/mock/mockServe'
Vue.component(TypeNav.name,TypeNav)
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
