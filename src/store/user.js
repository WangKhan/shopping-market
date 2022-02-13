import { reqAuthorizeCode,reqRegisterUser,reqLogin } from "@/api";

const state = {
  verificationCode:'',
  token:''
}

const mutations = {
  GETVERIFICATIONCODE(state,data){
    state.verificationCode=data
  },
  GETLOGINUSER(state,token){
    state.token=token
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
  },
  async loginUser({commit},params){
    let result= await reqLogin(params)
    if(result.code==200){
      commit('GETLOGINUSER',result.data.token)
    }
    else{
      return Promise.reject(new Error('fail'))
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