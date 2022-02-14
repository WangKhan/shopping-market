import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from'@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import * as API from '@/api'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$api=API
  },
  router,
  store,
}).$mount('#app')
