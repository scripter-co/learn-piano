const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const prodEnv = process.env.NODE_ENV !== "dev";
const mode = prodEnv ? "production" : "development";
const watch = prodEnv ? false : true;

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist')
  },
  mode,
  watch,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: "Learn Piano",
      template: HtmlWebpackTemplate,
      appMountId: "app",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    index: 'index.html'
  }
}
