import request from './request'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude,latitude) => request(`/position/${longitude},${latitude}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategoryList = () => request('/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList = (longitude,latitude) => request('/shops',{longitude,latitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqShopListOfKey = (geohash,Keyword) => request('/search_shops',{Keyword,geohash})
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => request('/captcha')
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLogin = (name,pwd,captcha) => request('/login_pwd','POST',{name,pwd,captcha})
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendMessageCaptcha = (phone) => request('/sendcode',{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLoginByPhone = (phone,code) => request('/login_sms','POST',{phone,code})
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => request('/userinfo')
//[10、用户登出](#10用户登出)
export const reqLogout = () => request('/logout')
