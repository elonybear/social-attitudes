const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  inject: true
});

const jQueryPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  JQuery: 'jquery',
  "window.JQuery": 'jquery'
});

module.exports = {
  devtool: 'source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use: [{
        //     loader: "style-loader"
        //   },
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: true,
        //       importLoaders: 1,
        //       localIdentName: "[name]_[local]_[hash:base64]",
        //       sourceMap: true,
        //       minimize: true
        //     }
        //   }]
      }
    ]
  },
  plugins: [htmlPlugin, jQueryPlugin],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    proxy: {
      "/graphql": "http://localhost:4000"
    },
    historyApiFallback: true
  }
};
