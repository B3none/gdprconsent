import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import Browser from 'browser-sync';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'build/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'build/scripts/'
  }
};

const browser = Browser.create();
const bundler = webpack(webpackConfig);
export const clean = () => del(['build']);

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'gdprconsent',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  // webpackScripts();
  return gulp.src(paths.scripts.src, {sourcemaps: true})
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('gdprconsent.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function server() {
  let config = {
    server: 'examples',
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ],
  };

  browser.init(config);

  gulp.watch('build/gdprconsent.min.js', () => browser.reload());
}

function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

export {watchFiles as watch};

const build = gulp.series(clean, gulp.parallel(styles, scripts));

export default watchFiles;