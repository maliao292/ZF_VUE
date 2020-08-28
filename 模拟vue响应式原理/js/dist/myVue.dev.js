"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vue =
/*#__PURE__*/
function () {
  function Vue(options) {
    _classCallCheck(this, Vue);

    //1. 通过属性保存选项数据
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el; //2. 把data中的成员转换成 getter和setter 注入到vue实例

    this._proxyData(this.$data); //3. 调用observer对象，监听数据变化
    //4. 调用compiler对象，解析指令和差值变化


    new observer(this.$data);
    new Compile(this);
  }

  _createClass(Vue, [{
    key: "_proxyData",
    value: function _proxyData(data) {
      var _this = this;

      // 遍历data中的属性
      Object.keys(data).forEach(function (key) {
        Object.defineProperty(_this, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return data[key];
          },
          set: function set(newValue) {
            if (newValue == data[key]) return;
            data[key] = newValue;
          }
        });
      }); // 把data 是属性注入到vue 实例
    }
  }]);

  return Vue;
}();