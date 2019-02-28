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
 
 
 
 
 
 
 
 