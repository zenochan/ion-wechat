// npm i --save-dev gulp@3.9.1 gulp-replace  gulp-rev gulp-rev-replace run-sequence

let gulp = require('gulp');
let replace = require('gulp-replace');
let rev = require('gulp-rev');
let revReplace = require('gulp-rev-replace');
let runSequence = require('run-sequence');

let cdn = '';

gulp.task('default', function (callback) {
  runSequence('cdnReplace', 'rev', 'revReplace', callback);
});

gulp.task('cdnReplace', function (cb) {
  if (!cdn) return;

  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace(/src=["']build/g, 'src="' + cdn + 'build'))
    .pipe(replace(/href=["']build/g, 'href="' + cdn + 'build'))
    .pipe(gulp.dest('./www/'));

  gulp.src('./www/build/main.js')
    .pipe(replace(/"[.]{0,}[\/]?assets/g, '"' + cdn + 'assets'))
    .pipe(replace(/.(png|jpg|mp3)[?]?/g, '.$1?v=20190420&'))
    .pipe(gulp.dest('./www/build/'));

  setTimeout(cb, 200)
});

gulp.task('rev', function (cb) {
  gulp.src([
    './www/build/main*',
    './www/build/vendor.js',
    './www/build/polyfills.js'
  ])
    .pipe(rev())
    .pipe(gulp.dest('./www/build/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./www/build/'));

  setTimeout(cb, 200)
});

gulp.task('revReplace', function () {
  gulp.src('./www/index.html')
    .pipe(revReplace({manifest: gulp.src("./www/build/rev-manifest.json")}))
    .pipe(gulp.dest('./www/'));
});

