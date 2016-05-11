var gulp = require('gulp'),
	sass = require('gulp-sass');



gulp.task('styles', function(){
	gulp.src('sass/*.sass')
	.pipe(sass({
		style:'compressed'
	}))
	.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch('**/*.sass', ['styles']);
});

gulp.task('default', ['styles', 'watch']);