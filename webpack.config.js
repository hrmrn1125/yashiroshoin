const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const globImporter = require('node-sass-glob-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const PRODUCTION = argv.mode === 'production'

  return {
    entry: './src/js/index.js',
    output: {
      filename: PRODUCTION
        ? 'assets/javascripts/bundle[hash].js'
        : 'assets/javascripts/bundle.js',
      path: path.join(__dirname, 'public'),
    },
    plugins: [
      new CleanWebpackPlugin([
        'public/assets/stylesheets',
        'public/assets/javascripts',
      ]),
      new MiniCssExtractPlugin({
        filename: PRODUCTION
          ? 'assets/stylesheets/bundle[hash].css'
          : 'assets/stylesheets/bundle.css',
      }),

      // ejs
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/ejs/index.ejs',
      }),
      new HtmlWebpackPlugin({
        filename: 'about/index.html',
        template: 'src/ejs/about/index.ejs',
      }),
    ],
    resolve: {
      extensions: [
        '.js', // for style-loader
      ],
    },
    devtool: PRODUCTION ? 'none' : 'source-map',
    optimization: {
      minimizer: PRODUCTION
        ? [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ]
        : [],
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: 'ejs-compiled-loader',
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, // javascriptとしてバンドルせず css として出力する
            {
              loader: 'css-loader',
              options: {
                url: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('cssnano')({
                    preset: 'default',
                  }),
                  require('autoprefixer')({
                    grid: true
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', { modules: false }]],
              },
            },
          ],
        }
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      port: 8080,
    },
  }
}
