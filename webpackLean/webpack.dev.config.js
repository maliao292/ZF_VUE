const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry:{
       'main':'./src/main'
    },
    output:{
        path:path.resolve('./dist'),  // 相对路径转绝对路径
        filename:'build.js'
    },
    // 声明模块
    // 包含各个模块
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(png|jpg|gif)$/,loader:'url-loader?limit=4096'}  ,
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'}  ,

        ]
    },
    plugins:[
     new HtmlWebpackPlugin({
         template:'./src/index.html',
     }),
    ],
    watch:true
}