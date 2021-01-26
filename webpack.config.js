const webpack = require("webpack");
const path = require("path");
const config = {
    entry:path.resolve(__dirname,'src/main.js'),//入口文件
    output:{//出口文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development'//模式
}
module.exports = config