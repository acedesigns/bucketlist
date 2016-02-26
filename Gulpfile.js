// Load plugins
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    connect	  	  = require('gulp-connect'),
    cleanCSS      = require('gulp-clean-css');

var paths = {
  app: './',
  src: [
    './*.html',
    './_includes/*.html',
    './_layouts/*.html',
    './scss/**/*.scss',
    './img/**/*'
    ]
};


gulp.task('connect', function() {
  connect.server({
    //root: paths.app, as it was producing ::: //Error: Forbidden
    root        : [__dirname],
    host        : 'localhost',
    livereload  : true,
    port        : 1880
  });
  //open('http://localhost:1880');
});

// Html Task
gulp.task('html', function() {
  gulp.src(paths.src)
    .pipe(connect.reload());
});


// Styles
gulp.task('styles', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
});


gulp.task('watch', function() {
  gulp.watch([paths.src], ['html', 'styles']);
});


//Watch task
gulp.task('default', ['watch']);

//gulp.task('default', function() {
    //gulp.watch('scss/**/*.scss',['styles']);
//});

