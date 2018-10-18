const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
 module.exports = {
   entry : './src/index.js',
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, 'dist'), // 本地服务器所加载的页面所在目录
     compress: true,
     port: 9000,
     inline: true,
     historyApiFallback: true,
     noInfo: true,
     progress: false,
     quiet: true
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'wrf'
     })
   ]
 }