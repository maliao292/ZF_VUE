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
    { path: '', component: Home},
    { path: '/home', component: Home},
    {
      path: '/list', component: List, children: [
        { path: '/detail', component: Detail},
      ]
    },
    { path: '/collect', component: Collect},
    { path: '/add', component: Add},
  ]
})
