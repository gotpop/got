const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './assets/cms/js/app.js',
  output: {
    path: path.resolve(__dirname, 'static/admin'),
    filename: 'bundle.js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Admin',
      template: 'assets/cms/index.html'
    })
  ]  
};