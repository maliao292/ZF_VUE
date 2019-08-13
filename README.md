# 新建 vue 项目
- 全局安装 vue-cli
> npm install -global vue-cli
- 创建一个基于 webpack 的模板的新项目
> vue init webpack my-project

> npm install 

> npm run dev


# zf_vue
####珠峰——vue

vm.$set(vm.a,"school",1) // 添加未定义属性

# 捕获、冒泡、阻止默认
 ## 阻止冒泡
 ### @事件.stop  
        e.stopPropation,cancelBubble = true
 ## 捕获
 ## 先捕获 后 冒泡
 
  ## 阻止默认
  ### @事件.prevent
 ## preventDefault,retturnValue = false

## @事件.once
  ### 事件只绑定一次
  
## @事件.self
   ### 只点击自己才触发,点击子元素 不出发事件
   
 ## Vue.filter('过滤器名'，function)  
 
 ## 无意义包裹标签
 ### <temlate></temlate> 
 ####  不支持 v-show 
 
 ## v-bind 
  ### 绑定 class  style
  #### class 和 :class 不冲突
  #### :class="{class:布尔，class:布尔}"
  #### 或者 :class="[class1,class2,'z']"
  #### 再或者 :class="{class:布尔，class:布尔}[class1,class2,'z']"
  #### 再或者 :class="[class1,class2,{class:布尔}]"

  ## 绑定样式
  ###  :style="{color:'red'}"
  ### data:{style:backgroundColor:"#333"}  :style="[style,{color:'red'}]"


  # 获取元素
    标签中：<p ref="myp"><p>  定义 ref 属性
    实例中: this.$refs

# 实例的属性
 this.$data  vm 上的数据
 this.$watch  监控
 this.$el     当前el 元素 
 this.$set 后加的属性，实现响应式变化
 this.$options  vm 上的所有属性
 this.$nextTick(）
 this.$refs.xxx
  
this.$nextTick(function(){  // 异步方法
})


# 子组件向父组件传值
## 子组件  
    元素内：
    <div v-on:click="$emit('子方法名'，传值)"><div>
## 父组件
    <组件 v-on:子方法名="父方法"><组件>
    
    methods:{
        父方法(传值){
            // 在此接收‘传值’
        }
    }

 
 
 # router 
 ## 路由列表  var routes = [{path:"/home",component:home}];
 ## 声明路由实例 var router = new VueRouter({ routes })
 ## vue 实例引入路由  new Vue({el:"#app", router })
 ## #pp 内使用 <router-view></router-view>
 ### <router-link to="/home" tag="div"></router-link>  tag 设置router-link 标签为 div , 有自带class 
 
 ## this.$router.push("/list"); // js 路由跳转
 ## this.$router.replace("/list"); // js 路由替换 替换原来路由 
 ## this.$router.go(-1); // js 返回
 
 # 模块
 ## 导出
 - export let a = 1;   // 逐个导出
 - export { a,b};      // 批量导出
 - export default {a:1}; // 默认导出 配合 import xxx from "./b.js"; xxx 代表 前面导出的默认结果

 # webpack 使用
 ```$xslt
 npm init -y
npm install webpack --save-dev;
```
> 安装webpack 或者 less 最好不要安装全局的，否则可能导致版本差异
 
 ## babel 转义 es6=>es5
 ```$xslt
npm install babel-core -- save-dev
npm install babel-loader --save-dev
```
 ## babel-preset-es2015
 - 让翻译官拥有 解析es6语法的功能(ES6 转 ES5)
 ```$xslt
npm install babel-preset-es2015 --save-dev
```

 # babel-preset-stage-0  (还有 1、2、3、4)
 - 解析es7 语法
 ```$xslt
npm install babel-preset-stage-0 --save-dev
```

 # 解析样式 CSS文件
 ```$xslt
npm install css-loader style-loader --save-dev
```
> style-loader 把样式解析到<style></style>标签内

## less,sass,stylus(css预处理)
- less-loader less  css-loader style-loader
- sass-loader ..
- stylus-loader ..

# 解析图片
- file-loader url-loader(依赖file-loader,自动引入)
```
npm install file-loader url-loader --save-dev
```
 > 在JS中引入图片需要import,或者写一个 线上 路径（http://1.jpg）
 
 import page from "./2.jpg"
 let img = new Image();
 img.src = page;
 document.body.appendChild(img);
 
 
 # 解析HTML插件 (loader 解析模块的)
 - 作用 是以我们自己的html 为模板将打包后的结果，自动引入到html中产出到dist 目录下
```
npm install html-webpack-plugin --save-dev
```
 
 ## webpack-dev-server
 - 这里面内置服务，可以帮我们启动一个端口号，当页面更新时可以自动打包（在内存中打包，不产生实体文件），代码有变化就重新执行
 ```
    npm install webpack-dev-server --save-dev
```
 # 识别Vue 文件 
 - vue-loader   解析 .vue文件的，会自动调用 vue-template-compiler
 - vue-template-compiler  用来解析vue模板
> 两者版本 需要一致！！！  

 # 自动打开浏览器 插件
```
npm i open-browser-webpack-plugin --save
```
 - var OpenBrowserPlugin = require('open-browser-webpack-plugin')
 - new OpenBrowserPlugin({ url: 'http://localhost:8080' })
 
 
 ## 路由元信息
- {path: '/home', component: Home, meta: -{keepAlive: true}},
  -   // 取值 this.$route.meta.keepAlive
# 路由传参
- {path: '/home/:id?', component: Home},
```
"上面 ？ 代表 可有可无"
```
 - 路由取值
 this.$route.params
 
 # 路由钩子函数
 
 var router =  new Router({
    linkActiveClass:"...",
    mode:"history", // hash
    routes:[.....]
 } );
 router.beforeEach((to,from,next)=>{
    .... // 权限设置
 })
 router.afterEach((to,from,next)=>{
    ....
 })
  也可以用在 path 同级下
  
  也可以写在 某个组件下（data(){} 同级下）
- 自定义当前路由Class linkActiveClass

## router-link
<router-link :to="{name:'login',query:{id:1}}"></router-link>
<router-link :to="{path:'login/:par',params:{par:'abc'}}"></router-link> // 实例中 两个 ‘par’对应存在


# 自定义插件
## 方式一：
###  Vue.prototype.$custorm = "自定义插件"
 ## 方式二：
 ```
let obj = {
    install: function(Vue,option){
        console.log(option)
    }
 }
 
 Vue.use(obj,{a:"传参"})
``` 
 
 ## 确保元素的唯一
 元素中生成添加属性  为随机数  详见：vue_cli/components/Collect1

 # axios 
 -- 获取上传进度
```
var form = new FormData()
form.append('file', vm.$refs.upload.files[0])
form.append('id', id)
form.append('type', type)
var config = {
 onUploadProgress: progressEvent => {
  var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
  this.progress = complete
 }
}
axios.post(`api/uploadFile`,
 form, config).then((res) => {
 if (res.data.status === 'success') {
  console.log('上传成功')
 }
})
```

## 取消请求
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

 axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);   
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

### 续传和断点续传取消  详见视频 【重点】：开课吧Web全栈架构师正式课（Vue.JS及实战项目）\vue高级 —— 夯实知识（2）  第8课
  