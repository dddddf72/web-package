const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const {VueLoaderPlugin} = require("vue-loader")
const config = {
    entry:path.resolve(__dirname,'src/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[hash]-bundle.js'
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
    devServer:{
        contentBase:"./dist",
        port:8000,//改端口
        host:"localhost",
        overlay:{
            errors:true
        }
    },
    devtool:"inline-source-map",
    mode:'development'
}
module.exports = config