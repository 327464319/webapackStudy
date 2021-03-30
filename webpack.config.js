const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist/'),
    filename: 'bundle.js'
  },
  plugins: [new htmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  }),
  new CleanWebpackPlugin()],
  devServer: {
    open: true,
    hot: false,
    compress: true,
    port: 3000,
    contentBase: './src'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //'style-loader'需要在 'css-loader'前面，loader是从右往左执行的
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
            name: '[name]-[hash].[ext]'
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
      }
    ]
  }
}