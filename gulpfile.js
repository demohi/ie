var gulp = require('gulp');
var scss = require('gulp-scss');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
    autoprefixer({browsers: ['last 2 version']})
];

gulp.task('compile', function(){
  gulp.src('./scss/ie.scss')
      .pipe(scss())
      .pipe(postcss(processors))
      .pipe(gulp.dest("css/"))
});

gulp.task('watch', function(){
  gulp.watch('./scss/*', ['compile']);
});
