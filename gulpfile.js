var gulp = require('gulp');
var scss = require('gulp-scss');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssshrink = require('gulp-cssshrink');

var processors = [
    autoprefixer({browsers: ['iOS >= 6,Android >= 2.3']})
];

gulp.task('compile', function(){
  gulp.src('./scss/ie.scss')
      .pipe(scss())
      .pipe(postcss(processors))
      .pipe(cssshrink())
      .pipe(gulp.dest("css/"));
});

gulp.task('watch', function(){
  gulp.watch('./scss/*', ['compile']);
});
