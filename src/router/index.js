import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import routes from './router'
import store from "@/store";
var originPush=VueRouter.prototype.push
var originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
  if(reject&&resolve){
    originPush.call(this,location,resolve,reject)
  }
  else{
    originPush.call(this,location,()=>{},()=>{})
  }
  
}
VueRouter.prototype.replace=function(location,resolve,reject){
  if(reject&&resolve){
    originReplace.call(this,location,resolve,reject)
  }
  else{
    originReplace.call(this,location,()=>{},()=>{})
  }
  
}
let router= new VueRouter({
  routes,
  scrollBehavior(){
    return {y:0}
  }
})
router.beforeEach(async (to,from,next)=>{
  let token=store.state.user.token
  let name=store.state.user.userInfo.name
  if(token){
    if(to.path=='/login'||to.path=='/register') next('/home')
    else{
      if(name) next()
      else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('getLogOut')
          next('/login')
        }
      }
    }
  }
  else{
    next()
  }
})
export default router