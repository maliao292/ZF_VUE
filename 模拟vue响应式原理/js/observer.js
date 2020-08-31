let self;
class observer {
    constructor(data) {
        self = this
        this.walk(data)
    }
    walk(data) { // 遍历对象的所有属性，
        // 判断data是不是对象
        if (!data || typeof data !== 'object') return
        // 遍历data中所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive(obj, key, val) { // 调用 Object.defineProperty,把属性转换成 getter 和 setter
        // 收集依赖  发送通知
        let dep = new Dep()
        this.walk(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal
                self.walk(newVal)
                dep.notify()
            }
        })
    }
}