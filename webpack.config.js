const webpack = require('webpack');
const path = require('path')
var merge = require('webpack-merge');
var baseConfig = require('./webpack.common.config');

const dev = {
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    proxy: {
      "/graphql": "http://localhost:4000"
    },
    historyApiFallback: true
  }
};

const developmentConfiguration = function (env) {
  const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
  return {
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    ]
  };
}

module.exports = merge.smart(baseConfig, dev, developmentConfiguration)
