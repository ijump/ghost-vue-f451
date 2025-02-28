const ghostHost = 'https://ghostblog.com'

module.exports = {
  publicPath: '/ghost-vue-f451/',
  lintOnSave: false,
  devServer: {
    inline: true,
    proxy: {
      '/content': {
        target: ghostHost,
        changeOrigin: true
      },
      '/ghost-sdk': {
        target: ghostHost,
        pathRewrite: () => {
          return '/public/ghost-sdk.min.js'
        }
      }
    }
  }
}
