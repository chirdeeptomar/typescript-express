var gulp = require("gulp");
var server = require('gulp-express');
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var tsProject = ts.createProject("tsconfig.json");
var config = require('./gulp.config.js')();
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist/*.*', {read: false})
    .pipe(clean());
});

gulp.task("default", ['clean'], function () {
    var source = [
        config.files,
        config.typings
    ];

    var result = gulp
        .src(source)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return result.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputPath));
});


gulp.task('serve', ['default'], function () {
    // Start the server at the beginning of the task    
    server.run(['dist/app.js']);
});