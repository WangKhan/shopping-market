import requests from './request'
import mockrequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数

export const reqCategoryList= ()=>{
  return requests({url:'/product/getBaseCategoryList',method:'get'})
}

export const reqBannerList =()=>{
  return mockrequests({url:'/banner'})
}

export const reqFloor =()=>{
  return mockrequests({url:'/floor'})
}

export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

export const reqDetail = (params)=> requests({url:`/item/${params}`,method:'get'})
