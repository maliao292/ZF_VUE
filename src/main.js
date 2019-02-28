import Vue from "vue";
import App from './App.vue';
import router from './router/index';
import notify from './plugin/notify';
Vue.use(notify,{delay:2000});
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    methods:{
        a(){
            this.$notify(666,{delay:20})
        }
    }
});