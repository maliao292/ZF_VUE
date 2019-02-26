/* webpack 必须采用commonjs 写法 */
let path = require('path');// 专门处理路径的
var pather = path.resolve('./dist');
console.log(path);
module.exports = {
    entry: "./src/main.js", // 打包入口文件，webpack会自动查找相关的依赖进行打包
    output: {
        filename: "bundle.js",// 打包后的名字
        path: pather, // 必须是绝对路径
    },
    // 模块解析规则
    // - js 匹配所有的js 用babel-lader 转义  排除掉 node-modules
    module:{
        rules: [
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            // use 时 从右往左写 <<----------
            {test:/\.css$/,use:["style-loader","css-loader"],exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"],exclude:/node_modules/},
        ]
    }
};