## 1 核心概念

```
Entry
| 代码的入口,打包的入口。
Output
| 打包文件的(bundle)所在的目录
Loader
|  可以处理非js文件
Plugins
|  可以参与打包的整个过程，打包优化压缩
mode  
|  development/production
```

## 1-1 起步

```
cnpm init -y //生产package.json的文件
```

```
cnpm i webpack  webpack-cli -S
```

```js
const webpack = require("webpack");
const path = require("path");
const config =  {
    entry:path.resolve(__dirname,'src/main.js'),  //入口文件
    output:{  //出口文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development'  //模式
}
module.exports = config;
```

```json
//配置package.json文件
{
   "scripts": {
    	"build": "webpack  --config webpack.config.js"
  	}
}
```

```
npm run build
```

## 1-2 loader

wepack自身只能处理js和json文件,加上loader后,能让wepack去处理非js(css)的文件。loader可以将所有类型的文件转换为webpack能够处理的有效模块。

项目加载css

> Tips:loader是配置在module中的

```
cnpm i style-loader css-loader -S
```

```js
const webpack = require("webpack");
const path = require("path");
const config =  {
    entry:path.resolve(__dirname,'src/main.js'),  //入口文件
    output:{  //出口文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
+  module:{
+     rules:[
+          {
+              test:/\.css$/i,
+             use:['style-loader','css-loader']
+         }
+     ]  
+   },
    mode:'development'  //模式
}
module.exports = config;
```

## 1-3 plugins

```
cnpm i html-webpack-plugin -S
//自动生成index.html文件
```

```js
...
+const HtmlWebpackPlugin = require('html-webpack-plugin');
const config =  {
    ....
+    plugins:[
+      new HtmlWebpackPlugin({
+          title:"webpack-vue"
+      })  
+    ],
    mode:'development'  //模式
}
module.exports = config;
```

```
cnpm i clean-webpack-plugin -S
//清除dist目录下需要的文件
```

```js
+ const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const config =  {
    ...
    plugins:[
      ...
+      new CleanWebpackPlugin()  
    ],
    mode:'development'  //模式
}
```

## 2 配置webpack-server

> 目的:为了查看代码运行时的效果。

```
cnpm i webpack-dev-server -S
```

```js
const config ={
	...
	devServer:{
        contentBase:"./dist",
        port:8000,
        overlay:{
            errors:true
        } //可以将报道显示到页面上
    }
}
```

```js
//配置package.json
"scripts": {
    ...
    "serve":"webpack serve --open"
  }
```

```
npm run serve
```

#### 2-1 source map

> 实现错误追踪

```js
module.exports = {
	devtool: 'inline-source-map'
}
```

## 3 安装vue-loader

```
cnpm i vue vue-loader vue-template-compiler -S
```

```js
const {VueLoaderPlugin} = require("vue-loader")
module.exports = {
	module:{
      rules:[
          ...
          {
              test:/\.vue$/,
              loader:'vue-loader'
          }
      ]  
    },
    plugins:[
    	new VueLoaderPlugin()
    ]
}
```

```js
//main.js
import App from './App.vue';
import Vue from 'vue';
new Vue({
    render:h=>h(App)
}).$mount("#app");
```

> Tips:设置webpack.config.js之后,项目必须重新启动。

## 4 配置图片

```
module.exports = {
    module:{
    	rules:[
    		{
    		 	test:/\.(png|jpg|svg|gif|jpeg)$/i,
                type:'asset/resource'
    		}
    	]
    }
}
```



```
npm run build //将项目打包,打包之后的项目就可以上传服务器了
npm run serve/yarn serve  //查看项目的运行效果
```

```
//作业
1.使用webpack从0到1创建一个vue-cli,hello world 以及引入一张图片
2.Javascript知识脑图的整理
```

