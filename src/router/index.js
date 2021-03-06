import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/user',
      },
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../components/User.vue')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import(/* webpackChunkName: "about" */ '../components/goods/Goods.vue')
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import(/* webpackChunkName: "about" */ '../components/goods/Category.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "about" */ '../components/order/Order.vue')
      },
      {
        path: 'orderdetail/:a',
        name: 'OrderDetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/order/OrderDetail.vue')
      },
      {
        path: 'userlist',
        name: 'Userlist',
        component: () => import(/* webpackChunkName: "about" */ '../components/user/Userlist.vue')
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "about" */ '../components/goods/Detail')
      },
      {
        path: 'set',
        name: 'Set',
        component: () => import(/* webpackChunkName: "about" */ '../components/goods/Set')
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import(/* webpackChunkName: "about" */ '../components/goods/Add')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
