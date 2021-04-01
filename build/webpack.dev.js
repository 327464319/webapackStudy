const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: false,
    compress: true,
    port: 3000,
    contentBase: './src'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: "true"//这里注意boolean值需要加“”，这里是把引号内的内容类似于eval执行
    })
  ],
  devtool: 'cheap-module-source-map'
})