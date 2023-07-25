const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');


function minifyCss() {
  return gulp.src('src/style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/dist'));
}

gulp.task('minifyCssTask', minifyCss);