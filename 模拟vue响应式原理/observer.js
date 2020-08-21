class observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) { // 遍历对象的所有属性，
        // 判断data是不是对象
        if(!data||typeof data !== 'object') return
        // 遍历data中所有属性
        Object.keys(data).forEach(key=>{
            this.defineReactive(data,key,data[key])
        })
     }
    defineReactive(obj,key,val) { // 调用 Object.defineProperty,把属性转换成 getter 和 setter
        Object.defineProperty(obj,key,{
            
        })
     }
}