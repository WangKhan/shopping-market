import Vue from "vue";
import Vuex from 'vuex';
import {reqCategoryList} from '@/api';
Vue.use(Vuex)
const state={
  count:1
};
const mutations={
  ADD(state){
    state.count++
  }
};
const actions={
  async categoryList(){
    let result= await reqCategoryList();
    console.log(result)
  }
};
const getters={};
//用于计算属性，用户简化仓库数据
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})