class Dep{ // 发布
    constructor(){
        // 存储所所有的观察者
        this.subs = []
    }
    // 添加观察者
    addSub(sub){
        if(sub&&sub.update)
        this.subs.push(sub)
    }
    // 发送通知
    notify(){
        this.subs.forEach(sub=>{
            sub.update()
        })
    }
}