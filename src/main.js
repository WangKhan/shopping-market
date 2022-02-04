import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
import store from'@/store'
Vue.component(TypeNav.name,TypeNav)
import router from '@/router'
import {reqCategoryList} from '@/api'
reqCategoryList()
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
