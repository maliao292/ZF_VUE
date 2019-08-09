import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Add from '../components/Add'
import Collect from '../components/Collect'
  import Collect1 from '../components/Collect1'
  import Collect2 from '../components/Collect2'

import List from '../components/List'
import Detail from '../components/Detail'
Vue.use(Router);
var router =  new Router({
  linkActiveClass:'active',
  routes: [
    {path: '/home', component: Home, meta: {keepAlive: true}},
    // 取值 this.$route.meta.keepAlive
    {path: '/list', component: List},
    {path: '/collect', component: Collect,children:[
      {path: '/',component: Collect1},
      {path: 'collect2',component: Collect2},
    ]},
    {path: '/add', component: Add, meta: {keepAlive: true}},
    {path: '/detail', component: Detail, name: 'detail'},
    {path: '*', redirect: '/home'}
  ]
})


// 多次追加 路由

router.addRoutes([
  {path: '/collect', component: Collect,children:[
      {path: '/',component: Collect1},
      {path: 'collect2',component: Collect2},
    ]}
])

export default router;