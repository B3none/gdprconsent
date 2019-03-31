import path from 'path';
import webpack from 'webpack';

let config = {
  entry: './gdprconsent.js',
  output: {
    filename: 'gdprconsent.min.js',
    path: path.resolve(__dirname, './src/build')
  },
  context: path.resolve(__dirname, './src/scripts')
};

export default config;

// export function scripts() {
//   return new Promise(resolve => webpack(config, (err, stats) => {
//     if (err) {
//       console.log('Webpack', err);
//     }
//
//     console.log(stats.toString());
//
//     resolve()
//   }));
// }