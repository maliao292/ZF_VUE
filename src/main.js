let str = require('./a.js');
import "./index.css";
import "./style.less";
console.log(str);

let obj = {a:1};
let obj2 = {b:123};

var obj3 = {...obj,...obj2};
console.log(obj3);