const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browerSync = require('browser-sync');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const imageMin = require('gulp-imagemin');

const src = './src/';
const dist = './dist/';

gulp.task('clean:dist', (done) => {
  del(dist).then(() => {
    done();
  })
});

gulp.task('compile:js', () => {
  return gulp.src(src + 'entry.js')
    .pipe(plumber())
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

gulp.task('copy:assets', () => {
  return gulp.src([src + 'assets/**/*.jpg', src + 'assets/**/*.png'])
    .pipe(imageMin())
    .pipe(gulp.dest(dist + 'assets/'));
});

gulp.task('watch:html', () => {
  gulp.watch(src + '**/*.html', ['copy:html']);
});

gulp.task('watch:sass', () => {
  gulp.watch(src + '**/*.scss', ['compile:sass']);
});

gulp.task('watch:js', () => {
  gulp.watch(src + '**/*.js', ['compile:js']);
});

gulp.task('build:dev', (done) => {
  runSequence('clean:dist',
    ['compile:js', 'compile:sass', 'copy:html', 'copy:assets'],
    done);
});

gulp.task('serve:dev', ['build:dev', 'watch:html', 'watch:sass', 'watch:js'], () => {
  browerSync.init({
    server: {
      baseDir: ['./dist/', './'],
    },
    files: ['dist/**/*.js','dist/**/*.html', 'dist/**/*.css'],
    port: 3000
  });
});
