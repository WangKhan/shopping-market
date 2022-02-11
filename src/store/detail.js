import { reqDetail,reqUpdateShopCart } from "@/api";
import {uuid_token} from '@/utils/uuid_token'
const state={
  detail:{},
  uuid_token:uuid_token(),
}

const mutations={
  GETDETAIL(state,data){
    state.detail=data
  }
}

const actions={
  async getDetail({commit},skuid){
    let result=await reqDetail(skuid)
    if(result.code==200){
      commit('GETDETAIL',result.data)
    }
  },
  async UpdateGoods({commit},{skuId,skuNum}){
    let result=await reqUpdateShopCart(skuId,skuNum)
    if(result.code==200){
      return 'success'
    }
    else{
      return Promise.reject(new Error('fail'))
    }
    
  }
}

const getters={
  categoryView(state){
    return state.detail.categoryView||{}
  },
  skuInfo(state){
    return state.detail.skuInfo||{}
  },
  spuSaleAttrList(state){
    return state.detail.spuSaleAttrList||{}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}