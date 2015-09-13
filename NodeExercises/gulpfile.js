var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
   
   gulp.src('lib/*.js')
   		.pipe(jshint({errorsOnly:true}))
   		.pipe(uglify())
   		.on('error', function (data) {
   			console.log(data);
   		})
   		.pipe(concat('concat.js'))
  		.pipe(gulp.dest('content/scripts/consolidated'));
});