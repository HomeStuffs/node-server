var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('public/stylesheets/css/src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css/build', {overwrite: true}));
});
