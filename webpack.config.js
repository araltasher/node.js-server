var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
  node: {
    fs: "empty"
 },
 devServer:{
    historyApiFallback:true
},
plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    })
]
};