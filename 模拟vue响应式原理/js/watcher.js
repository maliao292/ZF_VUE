class Watcher {
    constructor(vm, key, cb) {
        console.log(vm)
        this.vm = vm
        // data 属性名称
        this.key = key
        // 回调函数负责更新视图
        this.cb = cb
        // 把wacher 对象记录到Dep类的静态属性target
        Dep.target = this
        // 触发get方法，在get方法中调用 addsub
        this.oldValue = vm[key]

        Dep.target = null
    }
    // 当数据发生变化的时候更新视图
    update() { 
        let newValue = this.vm[this.key]
        if (newValue === this.oldValue) {
            return
        }
        this.oldValue = newValue
        this.cb(newValue)
    }
}