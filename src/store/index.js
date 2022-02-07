import Vue from "vue";
import Vuex from 'vuex';
import { reqCategoryList } from '@/api';
Vue.use(Vuex)
const state = {
  categoryList: [],
};
const mutations = {
  CATEGORYLIST (state, data) {
    state.categoryList = data
  }
};
const actions = {
  async categoryList ({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data)
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