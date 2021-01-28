const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader")
module.exports = {
    entry:path.resolve(__dirname,'src/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
  //四、配置图片
            {
                test:/\.(png|jpg|svg|gif|jpeg)$/i,
                type:'asset/resource'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"webpack-vue",
            template:path.join(__dirname,"public/index.html")
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devtool:"inline-source-map",//实现错误追踪
    devSever:{
        contentBase:"./dist",
        port:8000,//改端口
        host:"localhost",
//报错会直接出现在界面上
        overlay:{
            errors:true
        }
    },
    mode:'development'
}
