var gulp = require('gulp');

//引入组件

var minifycss = require('gulp-minify-css'), //css压缩
    concat = require('gulp-concat') //合并文件

gulp.task('css', function(argument) {
    gulp.src(['src/css/style.css']).pipe(concat('merge.css')).pipe(minifycss()).pipe(gulp.dest('dist/css'))
});

gulp.task('build', ['css'])