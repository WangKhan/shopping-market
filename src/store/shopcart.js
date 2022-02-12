import { reqCartList,reqDelCart,reqCartChecked } from "@/api";

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
  },
  async delCart({commit},skuId){
    let result=await reqDelCart(skuId)
    if(result.code==200){
      return 'success'
    }
    else{
      return Promise.reject(new Error('fail'))
    }
  },
  async cartChecked({commit},{skuId,isChecked}){
    let result=await reqCartChecked(skuId,isChecked)
    if(result.code==200){
      return 'sucess'
    }
    else{
      return Promise.reject(new Error('fail'))
    }
  },
  async delAllSelected({dispatch,getters,state}){
    let PromiseAll=[]
    getters.getCartList.cartInfoList.forEach(element => {
      let promise = element.isChecked=='1'?dispatch('delCart',element.skuId):''
      PromiseAll.push(promise)
    });
    return Promise.all(PromiseAll)
  },
  async allChecked({dispatch,state},isChecked){
    let promiseAll = [];
    state.cartlist[0].cartInfoList.forEach((item) => {
      let promise = dispatch("cartChecked", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    //最终返回结果
    return Promise.all(promiseAll);
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