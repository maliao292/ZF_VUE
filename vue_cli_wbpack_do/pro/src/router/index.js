import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Member from '../components/Member/Member'
import Shopcart from '../components/Shopcart/Shopcart'
import Search from '../components/Search/Search'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
