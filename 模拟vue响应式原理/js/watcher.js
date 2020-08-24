class wacher{
    constructor(vm,key,cb){
        this.vm = vm
        // data 属性名称
        this.key = key 
        // 回调函数负责更新视图
        this.cb = cb
        this.oldValue = vm[key]
    }
    // 当数据发生变化的时候更新视图
    update(){
        let newValue = this.vm[this.key] 
        if(newValue === this.oldValue){
            return
        }
        this.cb(newValue)
    }
}