const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: {
      '/graphql': 'http://localhost:4000'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'TS React',
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'app[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.less?$/, loader: ['less-loader','style-loader','css-loader']}
    ]
  }
};
