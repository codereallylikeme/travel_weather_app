const path = require('path');
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/client/index.js',
  output: {
    libraryTarget: 'var',
    library: 'Client',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    proxy: {
      '/getTrip': 'http://localhost:8081',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader:'file-loader',
        options:{
          name:'[path][name].[ext]',
        }
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/client/views/index.html'),
      filename: './index.html',
      minify:false
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [{from: './src/client/assets/images', to:'./images'}]
    }),
  ],
};
