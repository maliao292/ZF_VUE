import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Add from '../components/Add'
import Collect from '../components/Collect'
import List from '../components/List'
import Detail from '../components/Detail'


Vue.use(Router);

export default new Router({
  routes: [
    {path: '/home', component: Home, meta: {keepAlive: true}},
    // 取值 this.$route.meta.keepAlive
    {path: '/list', component: List,},
    {path: '/collect', component: Collect},
    {path: '/add', component: Add, meta: {keepAlive: true}},
    {path: '/detail', component: Detail, name: 'detail'},
    {path: '*', redirect: '/home'}
  ]
})
