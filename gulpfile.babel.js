import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';

const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'build/scripts/'
  }
};

export const clean = (subDirectory = false) => del(['build' + (subDirectory ? '/' + subDirectory : '')]);

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(concat('gdprconsent.min.css'))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, {sourcemaps: true})
    .pipe(webpack(webpackConfig))
    .pipe(concat('gdprconsent.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watchFiles() {
  gulp.watch(paths.scripts.src, gulp.parallel(() => clean('scripts'), scripts));
  gulp.watch(paths.styles.src, gulp.parallel(() => clean('styles'), styles));
}

export {watchFiles as watch};

const build = gulp.series(clean, gulp.parallel(styles, scripts));

export default watchFiles;