/* webpack 必须采用commonjs 写法 */
let path = require('path');// 专门处理路径的
var pather = path.resolve('./dist');
let HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: "./src/main.js", // 打包入口文件，webpack会自动查找 相关的依赖进行打包
    output: {
        filename: "bundle.js",// 打包后的名字
        path: pather, // 必须是绝对路径
    },
    // 模块解析规则
    // - js 匹配所有的js 用babel-lader 转义  排除掉 node-modules
    module:{
        rules: [ // loader
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            // use 时 从右往左写 <<----------
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            // 转换base64 只在8192字节（8k * 64）内，其他情况输出图片
            {test:/\.(jpg|png|gif|icon)$/,use:"url-loader?limit=8192"},
            {test:/\.(eot|woff|svg|woff2|wtf)$/,use:"url-loader"},
            {test:/\.vue$/,use:"vue-loader"},
        ]
    },
    plugins: [  // 插件
        new HtmlWebpackPlugin({
            template:'./src/index.html', // 需要添加js 的文件目录
            filename:'index.html',   // 生成的文件 名
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};