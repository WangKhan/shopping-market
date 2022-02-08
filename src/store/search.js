import { reqGetSearchInfo } from "@/api";

const state={
  searchInfo:{}
}

const mutations={
  GETSEARCHINFO(state,data){
    state.searchInfo=data
  }
}

const actions={
  async getSearchInfo({commit},params={}){
    let result= await reqGetSearchInfo(params);
    console.log(result)
    if(result.code==200){
      commit('GETSEARCHINFO',result.data,{})
    }
  }
}

const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}