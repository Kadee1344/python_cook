var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');

gulp.task('sass', function() {
  return gulp.src('menu/app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('menu/static/menu/css'))
})

gulp.task('watch', function(){
  gulp.watch('menu/app/scss/**/*.scss', ['sass']);
})

gulp.task('rigger', function () {
    gulp.src('menu/app/js/main.js')
        .pipe(rigger())
        .pipe(gulp.dest('menu/static/menu/scripts/'));
});
