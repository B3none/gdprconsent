import path from 'path'
import webpack from 'webpack'

export let config = {
  entry: './build/gdprconsent.min.js',
  output: {
    filename: 'gdprconsent.min.js',
    path: path.resolve(__dirname, './build')
  },
  context: path.resolve(__dirname, './build')
};

export function scripts() {
  return new Promise(resolve => webpack(config, (err, stats) => {
    if (err) {
      console.log('Webpack', err);
    }

    console.log(stats.toString());

    resolve()
  }))
}