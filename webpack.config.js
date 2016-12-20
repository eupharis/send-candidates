require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: { historyApiFallback: true },
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
