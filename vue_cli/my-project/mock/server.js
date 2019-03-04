var http = require('http'),
  fs = require('fs'),
  url = require('url');
// 获取轮播图接口 /sliders
let sliders = require('./sliders.js');
http.createServer((req,res) => {

  let {pathname, query} = url.parse(req.url);
  if (pathname === '/sliders') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader('X-Powered-By', '3.2.1');
    if (req.method == 'OPTIONS') {
     return res.end();
    }
    res.setHeader('Content-type','application/json;chatset=utf-8');
    res.end(JSON.stringify(sliders));
  }
  if (pathname === '/sliders') {

  }
}).listen(3000);
