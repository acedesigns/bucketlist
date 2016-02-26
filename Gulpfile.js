// Load plugins
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    cleanCSS      = require('gulp-clean-css');
    
// Styles
gulp.task('styles', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
});


//Watch task
gulp.task('default', function() {
    gulp.watch('scss/**/*.scss',['styles']);
});

