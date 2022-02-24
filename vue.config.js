module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/onlineshop',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        //pathRewrite: { '^/api': '' },
      },
    },
  },

}