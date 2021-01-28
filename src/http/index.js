import api from './api'
import http from './request'
import qs from 'qs';
//登录
function login(data) {
  return http({
    url: api.login,
    method: 'post',
    data: qs.stringify(data)
  })
}
//首页
function user() {
  return http({
    url: api.user,
    method: 'get',
    // data: qs.stringify(data)
  })
}
//商品
function goods(data) {
  return http({
    url: api.goods,
    method: 'get',
    data: qs.stringify(data)
  })
}
export default {
 login,
 user,
 goods
}