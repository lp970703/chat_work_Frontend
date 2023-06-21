const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      //入口
      entry: 'src/renderer/main.js',
    },
  },
  devServer:{
    port:8080,
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:7001',//6.9号 改域名访问
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
    },
    allowedHosts: "all", // 允许向日葵https内网穿透
  },
  // vue中配置
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/background.js', //  设置自定义入口文件
      nodeIntegration: true,
    }
  },
  // css:{
  //   loaderOptions:{
  //     less:{
  //         javascriptEnabled: true,
  //         modifyVars: {
  //           //在此处设置，也可以设置直角、边框色、字体大小等
  //              'primary-color': '#68BDA8',
  //       }
  //     }
  //   }
  // }
  // chainWebpack: config => {
  //   const svgRule = config.module
  //     .rule('svg')
  //     .exclude.add(resolve('src/renderer/icons'))
  //   svgRule.uses.clear()

  //   svgRule
  //     .test(/\.svg$/)
  //     .use('svg-url-loader') // npm install --save-dev svg-url-loader
  //     .loader('svg-url-loader')

    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     raw: true
    //   })
    // config.module
    //   .rule("images")
    //   .use("url-loader")
    //   .loader("url-loader")
    //   .tap(options => Object.assign(options, { limit: Infinity }));
  // }
})
