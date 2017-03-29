var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create(); // import only the create method

gulp.task('previewDist', function(){
  browserSync.init({
    // copied from watch.js
    // notify: false, // to hide browser notifications
    // where the web server should point
    server: {
      //baseDir: "app"
      // when going live the server may expect another name for our dist public folder
      // for example github expects docs to be the name of the folder
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], function(){
  return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  // ! exclude the icon folder
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});
gulp.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start('usemin');
})
// the most updated copies of styles and scripts
gulp.task('usemin', ['styles', 'scripts'], function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function(){return rev()}, function(){return cssnano()}],
      js: [function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest('./docs'))
});


gulp.task('build', ['deleteDistFolder','copyGeneralFiles','optimizeImages', 'useminTrigger']);
