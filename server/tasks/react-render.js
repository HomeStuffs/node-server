var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('react-render', function() {
  browserify('./public/javascripts/src/app.jsx')
    .transform(reactify)
    .transform(babelify.configure({
      compact: false
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts/build/', {overwrite: true}));
});
