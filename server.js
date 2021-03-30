const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const compile = webpack(config)
app.use(webpackDevMiddleware(compile, {
  publicPath: '/'
}))
app.listen(3000, () => console.log('http://127.0.0.1:3000'))