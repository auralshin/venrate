module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://ceramic.auralshin.tech',
        pathRewrite: { '^/api': '' },
      },
      '/ipfs': {
        target: 'https://ipfs.auralshin.tech',
        pathRewrite: { '^/ipfs': '' },
      }, '/ws': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/ws': '' },
      },
    },
  },
};