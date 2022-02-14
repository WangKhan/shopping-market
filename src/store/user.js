import { reqAuthorizeCode,reqRegisterUser,reqLogin,reqUserInfo,reqLogOut } from "@/api";
import { setToken } from "@/utils/token";
const state = {
  verificationCode:'',
  token:localStorage.getItem('TOKEN'),
  userInfo:{}
}

const mutations = {
  GETVERIFICATIONCODE(state,data){
    state.verificationCode=data
  },
  GETLOGINUSER(state,token){
    state.token=token
  },
  GETUSERINFO(state,data){
    state.userInfo=data
  },
  CLEAR(state){
    state.token='',
    state.userInfo={},
    localStorage.removeItem('TOKEN')
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
      setToken(result.data.token)
      return 'ok'
    }
    else{
      return Promise.reject(new Error('fail'))
    }
  },
  async getUserInfo({commit}){
    let result=await reqUserInfo()
    if(result.code==200){
      commit('GETUSERINFO',result.data)
      return 'ok'
    }
    else{
      return Promise.reject(new Error('faili'))
    }
  },
  async getLogOut({commit}){
    let result=await reqLogOut()
    if(result.code==200){
      commit('CLEAR')
      return 'success'
    }
    else{
      return Promise,reject(new Error('log out error'))
    }
  },

}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}