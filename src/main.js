
/*let str = require('./a.js');
import "./index.css";
import "./style.less";*/
/*
console.log(str);

let obj = {a:1};
let obj2 = {b:123};

var obj3 = {...obj,...obj2};
console.log(obj3);*/
/*

import Vue from 'vue';
// 这样直接引用 vue, 引用的并不是vue.js,而是vue 的 runtime
// vue = compiler + runtimer ( compiler 可以编译模板)

new Vue({
    render:function (createElement) {
        return createElement("h1",['hello',createElement('span','一则头条')])
    }
}).$mount("#app");

// $mount("#app") 相当于 使用  el:"#app" 挂载方法*/
import App from "./main.vue"