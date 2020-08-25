"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var self;

var observer =
/*#__PURE__*/
function () {
  function observer(data) {
    _classCallCheck(this, observer);

    self = this;
    this.walk(data);
  }

  _createClass(observer, [{
    key: "walk",
    value: function walk(data) {
      var _this = this;

      // 遍历对象的所有属性，
      // 判断data是不是对象
      if (!data || _typeof(data) !== 'object') return; // 遍历data中所有属性

      Object.keys(data).forEach(function (key) {
        _this.defineReactive(data, key, data[key]);
      });
    }
  }, {
    key: "defineReactive",
    value: function defineReactive(obj, key, val) {
      // 调用 Object.defineProperty,把属性转换成 getter 和 setter
      var dep = new Dep();
      this.walk(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          // 收集依赖
          Dep.target && dep.addSub(Dep.target);
          return val;
        },
        set: function set(newVal) {
          if (newVal === val) {
            return;
          }

          val = newVal;
          self.walk(newVal);
          dep.notify();
        }
      });
    }
  }]);

  return observer;
}();