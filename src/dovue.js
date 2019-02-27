import Vue from 'vue';
// 这样直接引用 vue, 引用的并不是vue.js,而是vue 的 runtime
// vue = compiler + runtimer ( compiler 可以编译模板)

new Vue({
    render:function (createElement) {
        return createElement("h1",'hello')
    }
}).$mount("#app");

// $mount("#app") 相当于 使用  el:"#app" 挂载方法