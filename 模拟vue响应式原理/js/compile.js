class Compile { // 编译
    constructor(vm) {
        this.el = vm.$el;
        this.vm = vm
        this.compile(this.el)
    }
    // 编译模板，处理文本节点和元素节点  
    compile(el) {
        let childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) { // 处理完文本节点
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                this.compileElement(node)
            }
            // 判断node节点，是否有子节点，如果有，递归调用compile
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }
    // 编译元素节点，处理指令
    compileElement(node) {
        if (node.attributes[0]) {
            // 遍历所有的属性节点
            Array.from(node.attributes).forEach(attr => {
                let arrtName = attr.name
                if (this.isDirective(arrtName)) {
                    arrtName = arrtName.substr(2)
                    let key = attr.value
                    this.updeter(node, key, arrtName)
                }
            })


        }
    }
    updeter(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn(node, this.vm[key])
    }
    // 处理 v- 指令
    textUpdater(node, value) {
        node.textContent = value

    }
    // v-moldel
    modelUpdater(node, value) {
        node.value = value
    }
    // 编译文本节点，处理差值表达式
    compileText(node) {
        console.log('运行compileText')
        let reg = /\{\{(.+?)\}\}/
        let value = node.textContent
        if (reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])
            new Watcher(this.vm, key, (newVal) => {
                console.log('new Watcher')
                node.textContent = newVal
            })
        }
    }
    // 判断元素属性是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    // 判断节点是否是文本节点
    isTextNode(node) {
        return node.nodeType == 3
    }
    // 判断节点是否是元素节点
    isElementNode(node) {
        return node.nodeType == 1
    }
}