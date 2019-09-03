// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import App from './App'
import router from './router'
import Axios from 'axios'
import MyUl from '@/common/MyUl'
import MyLi from '@/common/MyLi'
import NavBar from '@/common/NavBar'
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)

import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// 定义 moment 全局过滤器
import Moment from 'moment'
Vue.filter('converTime',function(data,formatstr ){
      return Moment(Moment().millisecond(data)).locale('zh-cn').format('YYYY-MM-DD, h:mm:ss')
})
// Axios.defaults.baseURL = 'https://www.sinya.online/'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
