var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); // import only the create method

gulp.task('watch', function() {

  browserSync.init({
    // notify: false, // to hide browser notifications
    // where the web server should point
    server: {
      baseDir: "app"
    }
  });
//file in our computer, function
  watch('./app/index.html', function(){
    //gulp.start('html');
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function(){
    //gulp.start('styles');
    gulp.start('cssInject');
  });
});
// Brand new task. This is not the watch task
                    // before you run the cssInject task
                    // you must begin and complete
                    // any dependency tasks in ['here']
gulp.task('cssInject', ['styles'],function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
