module.exports = {
   configureWebpack:{
       resolve:{
           alias:{
            //    配置默认路径
            'assets':"@/assets",
            'common':"@/common",
            'components':"@/components",
            'network':"@/network",
            'views':"@/views"
           }
       }
   },
   assetsDir: 'static',
   parallel: false,
   publicPath: './',
//    baseURI:'/',//输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
//    outputDir:'dist',//构建输出目录
//    assetsDir:'assets',//静态资源目录(js,css,img,fonts)
//    lintOnSave:false,//是否开启eslint保存检测,有效值: true || false || 'error'
//    devServer:{
//        open:true,//是否自动弹出
//        host:'localhost',
//        port:8080,//端口
//        https:false,
//        hotOnly:false,//热更新
//    }
}