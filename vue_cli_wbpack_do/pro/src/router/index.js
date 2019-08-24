import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Member from '../components/Member/Member'
import Shopcart from '../components/Shopcart/Shopcart'
import Search from '../components/Search/Search'
import NewList from '../components/NewList/NewList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'},
      component: Search
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/member',
      name: 'member',
      component: Member
    }, {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/news/list',
      name: 'news.list',
      component: NewList
    }
  ]
})
