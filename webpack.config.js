const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: 'production',
  entry: './gdprconsent.js',
  output: {
    filename: 'gdprconsent.min.js',
    path: path.resolve(__dirname, './build/scripts')
  },
  context: path.resolve(__dirname, './src/scripts'),
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
};