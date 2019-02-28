import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import List from '../components/list.vue';
Vue.use(VueRouter);  // 引入必须使用 use 作用是 注册全局
export default new VueRouter({
    routes: [
        {path: '', component: Home},
        {path: '/home', component: Home},
        {path: '/list', component: List}
    ]
});
