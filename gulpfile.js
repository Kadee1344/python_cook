var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');

gulp.task('sass', function() {
  return gulp.src('mysite/app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('mysite/mysite/static/css'))
})

gulp.task('watch', function(){
  gulp.watch('mysite/app/scss/**/*.scss', ['sass']);
})

gulp.task('rigger', function () {
    gulp.src('mysite/app/js/main.js')
        .pipe(rigger())
        .pipe(gulp.dest('mysite/mysite/static/scripts/'));
});
