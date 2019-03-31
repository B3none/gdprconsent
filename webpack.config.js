const path = require('path');

module.exports = {
  entry: './gdprconsent.js',
  output: {
    filename: 'gdprconsent.min.js',
    path: path.resolve(__dirname, './build/scripts')
  },
  context: path.resolve(__dirname, './src/scripts')
};