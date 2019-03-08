var http = require('http'),
  fs = require('fs'),
  url = require('url');
// 获取轮播图接口 /sliders
let sliders = require('./sliders.js');

function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]);
    } else {
      cb(JSON.parse(data)); // 将读出的内容转换成对象
    }
  });
}

// read(function (data) {
// });
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.setHeader('X-Powered-By', '3.2.1');
  if (req.method == 'OPTIONS') {
    return res.end();
  }
  let {pathname, query} = url.parse(req.url, true);
  if(pathname === '/page'){
    let offset = parseInt(query.offset) || 0 ;
    console.log(offset);

    return;
  }
  if (pathname === '/sliders') {

    res.setHeader('Content-type', 'application/json;chatset=utf-8');
    res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0, 6);
      res.end(JSON.stringify(hot))
    });
    return;
  }
  if (pathname === "/book") { // 书的增删改查
    let id = parseInt(query.id);
    switch (req.method) {
      case "GET":
        if (id) {  // 查询一个
          read(function (books) {
            var secbooks = books.filter(item => item.bookId == id);
            if (!secbooks) secbooks = {}
            res.end(JSON.stringify(secbooks[0]))
          });
        } else { // 没ID 获取所有
          read(function (books) {
            let hot = books.reverse();
            res.end(JSON.stringify(hot))
          });
        }
        break;
      case "POST":
        let str = '';
        req.on('data',(chunk)=>{
          str += chunk;
        })
        req.on('end',()=>{
          let book = JSON.parse(str);
          read(function (books) {
            book.bookId = books.length?books[books.length-1].bookId+1:"1";
            books.push(book);
            fs.writeFileSync('./book.json', JSON.stringify(books), "utf-8");
            var resule = {
              code: 0,
              msg: "修改成功",
            };
            res.setHeader('Content-type', 'application/json;chatset=utf-8');
            res.end(JSON.stringify(resule));
          })
        })
        break;
      case "PUT":
        if (id) {
          let str = '';
          req.on('data',(chunk)=>{
            str += chunk;
          });
          req.on('end',()=>{
            let book = JSON.parse(str);
            read(function (books) {
              books = books.map(item=>{
                if(item.bookId == id){
                  return book;
                }
                return item
              })
              fs.writeFileSync('./book.json', JSON.stringify(books), "utf-8");
              var resule = {
                code: 0,
                msg: "修改成功",
              };
              res.setHeader('Content-type', 'application/json;chatset=utf-8');
              res.end(JSON.stringify(resule));
            })
          })
        }
        break;
      case "DELETE":
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          fs.writeFileSync('./book.json', JSON.stringify(books), "utf-8");
          var resule = {
            code: 0,
            msg: "删除成功",
          };
          res.end(JSON.stringify(resule));

        })
        break;
    }
    return;
  }

}).listen(3000);
