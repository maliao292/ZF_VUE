"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(vm, key, cb) {
    _classCallCheck(this, Watcher);

    this.vm = vm; // data 属性名称

    this.key = key; // 回调函数负责更新视图

    this.cb = cb; // 把wacher 对象记录到Dep类的静态属性target

    Dep.target = this; // 触发get方法，在get方法中调用 addsub

    this.oldValue = vm[key];
    Dep.target = null;
  } // 当数据发生变化的时候更新视图


  _createClass(Watcher, [{
    key: "update",
    value: function update() {
      var newValue = this.vm[this.key];

      if (newValue === this.oldValue) {
        return;
      }

      this.cb(newValue);
    }
  }]);

  return Watcher;
}();