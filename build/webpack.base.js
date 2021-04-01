const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
// const miniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].js',
  },
  plugins: [new htmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    chunks: ['index']
  },
  ),
  new htmlWebpackPlugin({
    filename: 'other.html',
    template: './src/other.html',
    chunks: ['other']
  },
  ),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery'
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        //'style-loader'需要在 'css-loader'前面，loader是从右往左执行的
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      // {
      //   test: /\.png/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',//url-loader可以对图片 进行配置
          options: {
            limit: 1 * 1024,//图片小于5*1024将以base64格式显示，但是base64格式一般多占用30%的空间，所以也一般只有小图使用
            outputPath: 'images',
            name: '[name]-[hash].[ext]',
            esModule: false//这里巨奇怪，但是我又不知道说什么，不加html-whitimg-loader应用后就报错
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/env'],//presets必须是array或者undifined
          //   plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      }, {
        test: require.resolve('jquery'),
        use: {
          loader: 'expose-loader',
          options: {
            exposes: ["$", "jQuery"],
          }
        }
      }
    ]
  }
}