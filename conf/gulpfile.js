// npm i --save-dev gulp@3.9.1 gulp-rev gulp-rev-replace gulp-replace run-sequence

let gulp = require('gulp');
let rev = require('gulp-rev');
let revReplace = require('gulp-rev-replace');
let replace = require('gulp-replace');
let runSequence = require('run-sequence');

let cdn = '';

gulp.task('default', function (callback) {
  runSequence('cdnReplace', 'rev', 'revReplace', callback);
});

gulp.task('cdnReplace', function () {
  if (!cdn) return;
  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace('src="build/', 'src="' + cdn + 'build/'))
    .pipe(gulp.dest('./www/'));
});


gulp.task('rev', function () {
  gulp.src([
    './www/build/main.js',
    './www/build/main.css',
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
    gulp.src([
      './www/index.html',
      './www/service-worker.js'
    ]).pipe(revReplace({manifest: gulp.src("./www/build/rev-manifest.json")}))
      .pipe(gulp.dest('./www/'));
  }, 1000);
});
