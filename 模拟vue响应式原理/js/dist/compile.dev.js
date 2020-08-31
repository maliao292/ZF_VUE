"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Compile =
/*#__PURE__*/
function () {
  // 编译
  function Compile(vm) {
    _classCallCheck(this, Compile);

    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  } // 编译模板，处理文本节点和元素节点  


  _createClass(Compile, [{
    key: "compile",
    value: function compile(el) {
      var _this = this;

      var childNodes = el.childNodes;
      Array.from(childNodes).forEach(function (node) {
        if (_this.isTextNode(node)) {
          // 处理完文本节点
          _this.compileText(node);
        } else if (_this.isElementNode(node)) {
          _this.compileElement(node);
        } // 判断node节点，是否有子节点，如果有，递归调用compile


        if (node.childNodes && node.childNodes.length) {
          _this.compile(node);
        }
      });
    } // 编译元素节点，处理指令

  }, {
    key: "compileElement",
    value: function compileElement(node) {
      var _this2 = this;

      if (node.attributes[0]) {
        // 遍历所有的属性节点
        Array.from(node.attributes).forEach(function (attr) {
          var arrtName = attr.name;

          if (_this2.isDirective(arrtName)) {
            arrtName = arrtName.substr(2);
            var key = attr.value;

            _this2.updeter(node, key, arrtName);
          }
        });
      }
    }
  }, {
    key: "updeter",
    value: function updeter(node, key, attrName) {
      var updateFn = this[attrName + 'Updater'];
      updateFn && updateFn(node, this.vm[key]);
    } // 处理 v- 指令

  }, {
    key: "textUpdater",
    value: function textUpdater(node, value) {
      node.textContent = value;
    } // v-moldel

  }, {
    key: "modelUpdater",
    value: function modelUpdater(node, value) {
      node.value = value;
    } // 编译文本节点，处理差值表达式

  }, {
    key: "compileText",
    value: function compileText(node) {
      var reg = /\{\{(.+?)\}\}/;
      var value = node.textContent;

      if (reg.test(value)) {
        var key = RegExp.$1.trim();
        node.textContent = value.replace(reg, this.vm[key]);
        new Watcher(this.vm, key, function (newVal) {
          node.textContent = newVal;
        });
      }
    } // 判断元素属性是否是指令

  }, {
    key: "isDirective",
    value: function isDirective(attrName) {
      return attrName.startsWith('v-');
    } // 判断节点是否是文本节点

  }, {
    key: "isTextNode",
    value: function isTextNode(node) {
      return node.nodeType == 3;
    } // 判断节点是否是元素节点

  }, {
    key: "isElementNode",
    value: function isElementNode(node) {
      return node.nodeType == 1;
    }
  }]);

  return Compile;
}();