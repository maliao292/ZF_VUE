/* 插件 */
import modal from './notify.vue'

let notify = {};
notify.install = function (Vue, options = {delay: 3000}) {
    Vue.prototype.$notify = function (message, opt={}) {
        options = {...options, ...opt}; // 新传的opt 覆盖 options
        let v = Vue.extend(modal);  // 返回构造函数子类
        let vm = new v;
        let oDiv = document.createElement('div');
        vm.$mount(oDiv);
        console.log(vm);
        document.body.appendChild(vm.$el);
        setTimeout(()=>{
            document.body.removeChild(vm.$el); // 将实例上的元素删除
        },options.delay)
    }
};

export default notify;