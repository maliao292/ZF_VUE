"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dep =
/*#__PURE__*/
function () {
  // 发布
  function Dep() {
    _classCallCheck(this, Dep);

    // 存储所所有的观察者
    this.subs = [];
  } // 添加观察者


  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      if (sub && sub.update) this.subs.push(sub);
    } // 发送通知

  }, {
    key: "notify",
    value: function notify() {
      this.subs.forEach(function (sub) {
        sub.update();
      });
    }
  }]);

  return Dep;
}();