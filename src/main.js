import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import http from './http/index'
// import http from './http/request'
Vue.prototype.$http = http
Vue.config.productionTip = false

//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//导入富文本编辑器 对应样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
//将富文本编辑器注册为全局可用组件
Vue.use(VueQuillEditor)

//return少${}
Vue.filter('dateFormat',function(originVal){
const dt = new Date(originVal)
const y = dt.getFullYear()
const m = (dt.getMonth()+1+'').padStart(2,'0')
const d = (dt.getDate()+'').padStart(2,'0')
const hh = (dt.getHours()+'').padStart(2,'0')
const mm = (dt.getMinutes()+'').padStart(2,'0')
const ss = (dt.getSeconds()+'').padStart(2,'0')
return `${y}/${m}/${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
