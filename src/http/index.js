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
function cate(data) {
  return http({
    url: api.cate+data,
    method: 'get',
    // data: qs.stringify(data)
  })
}
//上传图片
function Img(data) {
  return http({
    url: api.Img,
    method: 'post',
    data: data
  })
}
//提交
function add(ids,name,subtitle,img,detail,price,stock,status) {
  return http({
    url: "manage/product/save.do?categoryId="+ids+"&name="+name+"&subtitle="+subtitle+"&subImages="+img+"&detail="+detail+"&price="+price+"&stock="+stock+"&status="+status,
    method: 'get',
  })
}
//搜索
function search(search,page,productName) {
  return http({
    url: "manage/product/search.do?listType="+search+"&pageNum="+page+"&productName="+productName,
    method: 'get',
  })
}
function xiu(id,data) {
  return http({
    url: "manage/category/set_category_name.do?categoryId="+id+"&categoryName="+data,
    method: 'get',
    data: data
  })
}
function add1(id,name) {
  return http({
    url: "manage/category/add_category.do?parentId="+id+"&categoryName="+name,
    method: 'get',
  })
}

export default {
 login,
 user,
 goods,
 set,
 detail,
 cate,
 Img,
 add,
 search,
 xiu,
 add1
}