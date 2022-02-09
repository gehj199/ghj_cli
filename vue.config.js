const path = require('path');
module.exports = {
  publicPath: './',
  outputDir: 'hm',
  css: {
    loaderOptions: {
      //  sass: {
      //      additionalData:`@import "./src/assets/scss/style.scss";` 
      //      }
       }
   },
   devServer: {
    port: 8080,
    proxy: {
      '/api': {
       target: 'http://120.221.160.193:9009/',
      //  'target': 'http://10.89.7.229:9010/',
        // target : 'http://10.89.7.111:9006/',
        ws: true,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,// 屏蔽EsLint,
  transpileDependencies:['@vue/reactivity'],
  chainWebpack: config => {
      // ...
      // config.plugins.delete('prefetch')

      config.module.rule('pdfjs-dist').test({
        test: /\.js$/,
        include: path.join(__dirname, 'node_modules/pdfjs-dist')
      }).use('babel-loader').loader('babel-loader').options({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-optional-chaining']
      })
      config.module
      .rule('pdf')
      .test(/\.(pdf)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000
      })
      .end()
  }
}
