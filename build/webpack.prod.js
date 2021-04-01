const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: "false"//这里注意boolean值需要加“”，这里是把引号内的内容类似于eval执行
    })
  ],
})