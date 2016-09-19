const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browerSync = require('browser-sync');
var runSequence = require('run-sequence');

const src = './src/';
const dist = './dist/';

gulp.task('clean:dist', (done) => {
  del(dist).then(() => {
    done();
  })
});

gulp.task('compile:jsx', () => {
  return gulp.src(src + 'entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(dist));
});

gulp.task('compile:sass', () => {
  return gulp.src(src + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist));
});

gulp.task('copy:html', () => {
  return gulp.src(src + '**/*.html')
    .pipe(gulp.dest(dist));
});

gulp.task('build:dev', (done) => {
  runSequence('clean:dist',
    ['compile:jsx', 'compile:sass', 'copy:html'],
    done);
});

gulp.task('serve:dev',['build:dev'], () => {
  browerSync.init({
    server: {
      baseDir: './dist/'
    }
  });
});
