import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import routes from './router'

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
export default new VueRouter({
  routes,
  scrollBehavior(){
    return {y:0}
  }
})