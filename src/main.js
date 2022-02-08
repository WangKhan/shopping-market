import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import store from'@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
