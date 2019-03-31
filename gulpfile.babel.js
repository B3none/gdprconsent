import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';

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
  return gulp.src(paths.scripts.src, {sourcemaps: true})
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(webpack(webpackConfig))
    .pipe(concat('gdprconsent.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

export {watchFiles as watch};

const build = gulp.series(clean, gulp.parallel(styles, scripts));

export default watchFiles;