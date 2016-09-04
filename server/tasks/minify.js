var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('minify-js', function () {
  return pump([
    gulp.src('./public/javascripts/build/app.js'),
    uglify(),
    rename('app.min.js'),
    gulp.dest('public/javascripts/build/', {overwrite: true})
  ]);
});

gulp.task('minify-css', function() {
  return pump([
    gulp.src('./public/stylesheets/css/build/style.css'),
    cleanCSS({compatibility: 'ie8'}),
    rename('style.min.css'),
    gulp.dest('public/stylesheets/css/build/', {overwrite: true})
  ]);
});
