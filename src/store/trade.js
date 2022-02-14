
import {reqOrderInfo,reqUserAddress } from '@/api';
const state = {
  userAddress:[],
  orderInfo:{}
};
const mutations = {
  GETUSERADDRESS(state,data){
    state.userAddress=data
  },
  GETORDERINFO(state,data){
    state.orderInfo=data
  }
};
const actions = {
  async getOrderInfo({commit}){
    let result=await reqOrderInfo()
    if(result.code==200){
      commit('GETORDERINFO',result.data)
      return 'ok'
    }
    else{
      return Promise.reject(new Error('OrderList'))
    }
  },
  async getUserAddress({commit}){
    let result = await reqUserAddress()
    if(result.code==200){
      commit('GETUSERADDRESS',result.data)
      return 'ok'
    }
    else{
      return Promise.reject(new Error('userAddress'))
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