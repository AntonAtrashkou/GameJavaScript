
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
 
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  optimization: {
    minimize: false
  },
  
  resolve: {
    extensions: ['.js', '.scss'],
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|wav)$/,
        loader: 'file-loader?name=./assets/[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: false },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          minimize: false,
          attrs: ['img:src', 'link:href'],
        },
      },

    ],
  },
};


module.exports = base;