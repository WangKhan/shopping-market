import requests from './request'
import mockrequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

export const reqBannerList = () => {
  return mockrequests({ url: '/banner' })
}

export const reqFloor = () => {
  return mockrequests({ url: '/floor' })
}
export const reqUserAddress = () => mockrequests({ url: '/userAddress' })

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

export const reqDetail = (params) => requests({ url: `/item/${params}`, method: 'get' })

export const reqUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

export const reqDelCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })

export const reqCartChecked = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

export const reqAuthorizeCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

export const reqRegisterUser = (params) => requests({ url: '/user/passport/register', method: 'post', data: params })

export const reqLogin = (params) => requests({ url: '/user/passport/login', method: 'post', data: params })

export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

export const reqLogOut = () => requests({ url: '/user/passport/logout', method: 'get' })

export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data: data, method: 'post' })

export const reqPayInfo =(orderId)=> requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

export const reqPayStatus =(orderId)=> requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

export const reqOrderList =(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})
