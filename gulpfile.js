var gulp = require('gulp');
var scss = require('gulp-scss');

gulp.task('compile', function(){
  gulp.src('./scss/ie.scss')
      .pipe(scss())
      .pipe(gulp.dest("css/"))
});

gulp.task('watch', function(){
  gulp.watch('./scss/*', ['compile']);
});
