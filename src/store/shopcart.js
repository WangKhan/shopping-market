import { reqCartList } from "@/api";

const state = {
  cartlist: []
}

const mutations = {
  GETCARTLIST (state, data) {
    state.cartlist = data
  }
}

const actions = {
  async getCartList ({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  }
}

const getters = {
  getCartList(state){
    return state.cartlist[0]||{}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}