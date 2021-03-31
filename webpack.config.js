const path =require("path")
module.exports ={
    // 动态获取路径,这里的path是node里面的包，resolve是里面的方法
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        // 这里配置图片路径
        publicPath:"dist/"
    }
}