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
  
> ## 指令
 new Vue({
    directives:{
        color(el){ // el 当前dom
        }
    },
    data:{
        flag:"red"
    }
 })
 
  <button v-color="flag"></button>

 ## watch 
 ### 只监控一层
 ### 深度监控 以下写法
 ```$xslt
watch:{
    todo:{// 此为对象  通常为函数
        handler(){  
            .....
        },deep:true
    } 
}
```
 监控 url hash 变化
  事件 ：hashchange 
  window.addEventListener("hashchange",function(){})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 