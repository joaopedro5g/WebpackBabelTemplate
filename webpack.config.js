const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      filename: 'index.html',
      template: './public/index.html',
    })
  ]
};