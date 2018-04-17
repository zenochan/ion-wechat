// npm i --save-dev gulp gulp-rev gulp-rev-replace gulp-replace gulp-uglify run-sequence

let gulp = require('gulp');
let rev = require('gulp-rev');
let revReplace = require('gulp-rev-replace');
let replace = require('gulp-replace');
let uglify = require('gulp-uglify');
let runSequence = require('run-sequence');

let cdn = 'http://h5cdn.churgo.com/churgo/';
let cdnDev = 'http://h5cdn.churgo.com/churgo_dev/';

gulp.task('build:prod', function (callback) {
  // runSequence('cdnReplace', 'rev', 'revReplace', callback);
  runSequence('rev', 'revReplace', callback);
});

gulp.task('build:dev', function (callback) {
  // runSequence('cdnReplaceDev', 'rev', ['revReplace', 'jsmin'], callback);
  runSequence('cdnReplaceDev', 'rev', 'revReplace', callback);
});

gulp.task('cdnReplace', function () {
  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace('src="http://h5cdn.churgo.com/assets/', 'src="' + cdn + 'http://cdn.ammonfood.com/duoli/assets/'))
    .pipe(replace('src="build/', 'src="' + cdn + 'build/'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('cdnReplaceDev', function () {
  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace('src="http://h5cdn.churgo.com/assets/', 'src="' + cdnDev + 'http://cdn.ammonfood.com/duoli/assets/'))
    .pipe(replace('src="build/', 'src="' + cdnDev + 'build/'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('jsmin', function () {
  setTimeout(function () {
    gulp.src('www/build/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('www/build/'));
  }, 1000);
});

gulp.task('rev', function () {
  gulp.src([
    './www/build/main*',
    './www/build/vendor.js',
    './www/build/polyfills.js'
  ])
    .pipe(rev())
    .pipe(gulp.dest('./www/build/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./www/build/'));
});

gulp.task('revReplace', function () {
  setTimeout(function () {
    gulp.src('./www/index.html')
      .pipe(revReplace({manifest: gulp.src("./www/build/rev-manifest.json")}))
      .pipe(gulp.dest('./www/'));

    gulp.src('./www/service-worker.js')
      .pipe(revReplace({manifest: gulp.src("./www/build/rev-manifest.json")}))
      .pipe(gulp.dest('./www/'));
  }, 1000);
});
