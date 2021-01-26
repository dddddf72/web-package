## 1 核心概念

```
Entry
| 代码的入口,打包的入口。
Output
| 打包文件的(bundle)所在的目录
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

