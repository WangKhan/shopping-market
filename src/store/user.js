import { reqAuthorizeCode,reqRegisterUser } from "@/api";

const state = {
  verificationCode:''
}

const mutations = {
  GETVERIFICATIONCODE(state,data){
    state.verificationCode=data
  }
}

const actions = {
  async getverificationCode({commit},phone){
    let result=await reqAuthorizeCode(phone)
    if(result.code==200){
      commit('GETVERIFICATIONCODE',result.data)
    }
  },
  async registerUser({commit},params){
    let result=await reqRegisterUser(params)
    if(result.code==200){
      return 'success'
    }
    else{
      return Promise.reject(new error('fail'))
    }
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}