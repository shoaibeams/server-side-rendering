const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternal = require('webpack-node-externals')

const config = {
  //bundle for nodeJS, rather than for the browser
  target: 'node',
  //entry point
  entry: './src/index.js',
  //where to put the output file
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'build') },
  externals: [webpackNodeExternal()]
}

module.exports = merge(baseConfig, config)
