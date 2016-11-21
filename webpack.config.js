require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
