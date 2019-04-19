// npm i --save-dev gulp gulp-rev gulp-rev-replace gulp-replace run-sequence

let gulp = require('gulp');
let rev = require('gulp-rev');
let revReplace = require('gulp-rev-replace');
let replace = require('gulp-replace');
let runSequence = require('run-sequence');

// 七牛链接
let cdn = '';

gulp.task("default", function (cb) {
  runSequence("cdnReplace", "rev", "revReplace", cb)
});

gulp.task('cdnReplace', function (cb) {
  if (!cdn) return;

  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace(/src=["']build/g, 'src="' + cdn + 'build'))
    .pipe(replace(/href=["']build/g, 'href="' + cdn + 'build'))
    .pipe(gulp.dest('./www/'));

  // assets
  gulp.src('./www/build/main.js')
    .pipe(replace(/["'](.\/)?assets/g, '"' + cdn + 'assets/'))
    .pipe(gulp.dest('./www/build/'));

  setTimeout(cb, 200)
});

gulp.task('cdnReplaceDev', function (cb) {
  // 七牛镜像 cdn
  gulp.src('./www/index.html')
    .pipe(replace('src="http://h5cdn.churgo.com/assets/', 'src="' + cdnDev + 'http://cdn.ammonfood.com/duoli/assets/'))
    .pipe(replace('src="build/', 'src="' + cdnDev + 'build/'))
    .pipe(gulp.dest('./www/'));
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
