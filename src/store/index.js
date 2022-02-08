import Vue from "vue";
import Vuex from 'vuex';
import { reqCategoryList,reqBannerList } from '@/api';
Vue.use(Vuex)
const state = {
  categoryList: [],
  bannerList:[]
};
const mutations = {
  CATEGORYLIST (state, data) {
    state.categoryList = data
  },
  BANNERLIST(state,data){
    state.bannerList=data
  }
};
const actions = {
  async categoryList ({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data)
    }
  },
  async getBannerList({commit}){
    let result=await reqBannerList();
    if(result.code==200){
      commit('BANNERLIST',result.data)
    }
  }
};
const getters = {};
//用于计算属性，用户简化仓库数据
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})