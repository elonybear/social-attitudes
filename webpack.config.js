var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/client/index.js',
  output: {
    path:__dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },

  eslint: {
    configFile: './.eslintrc'
  },

  plugins :[
    new HtmlWebpackPlugin({
      template: __dirname + '/client/index.tmpl.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      JQuery: 'jquery',
      "window.JQuery": 'jquery'
    }),
    new ExtractTextPlugin( "bundle.css"  )
  ],

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true
  }
}
