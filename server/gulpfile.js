var gulp = require('gulp');

require('./tasks/jslint.js');
require('./tasks/minify.js');
require('./tasks/nodemon.js');
require('./tasks/react-render.js');
require('./tasks/sass.js');

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('default', [
                      // 'apply-prod-environment',
                      'react-render',
                      'sass',
                      'minify-js',
                      'minify-css',
                      'nodemon'
]);
