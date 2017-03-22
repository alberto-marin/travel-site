var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(); // import only the create method

// name, and function
gulp.task('default', function(){
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML.");
});
// Imagine Sass or PostCSS tasks running here.
gulp.task('styles', function() {
  // move the content of the styles from A to B
  // we put return because gulp.src is an asynchronus function
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

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
