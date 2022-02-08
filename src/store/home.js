
import { reqCategoryList,reqBannerList,reqFloor } from '@/api';
const state = {
  categoryList: [],
  bannerList:[],
  floor:[]
};
const mutations = {
  CATEGORYLIST (state, data) {
    state.categoryList = data
  },
  BANNERLIST(state,data){
    state.bannerList=data
  },
  FLOOR(state,data){
    state.floor=data
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
  },
  async getFloor({commit}){
    let result = await reqFloor();
    if(result.code==200){
      commit('FLOOR',result.data)
    }
  }
};
const getters = {};
//用于计算属性，用户简化仓库数据
export default {
  state,
  mutations,
  actions,
  getters
}