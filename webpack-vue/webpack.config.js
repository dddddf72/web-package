const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const config =  {
    entry:path.resolve(__dirname,'src/main.js'),  //入口文件
    output:{  //出口文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
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
    devtool:"inline-source-map",
    devServer:{
        contentBase:"./dist",
        port:8000,
        host:"localhost",
        overlay:{
            errors:true
        }
    },
    mode:'development'  //模式
}
module.exports = config;