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
    url: api.goods+qs.stringify(data),
    method: 'get',
    // data: qs.stringify(data)
  })
}
//上下架
function set(id,data) {
  return http({
    url:"manage/product/set_sale_status.do?productId="+id+"&status="+data,
    method: 'get',
    // data: qs.stringify(data)
  })
}
//详情
function detail(data) {
  return http({
    url: api.detail+data,
    method: 'get',
    // data: qs.stringify(data)
  })
}
function cate() {
  return http({
    url: api.cate,
    method: 'get',
    // data: qs.stringify(data)
  })
}
export default {
 login,
 user,
 goods,
 set,
 detail,
 cate
}