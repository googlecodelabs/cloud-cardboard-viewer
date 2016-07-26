// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/client/index',
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
    preLoaders: [
      // needed to lower the filesize of angular due to inline source-maps
      { test: /\.js$/, loader: 'source-map-loader' }
    ],
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist', 'client'),
    publicPath: path.resolve(__dirname)
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: path.join(__dirname, '/src')
  },
  target: 'web'
};
