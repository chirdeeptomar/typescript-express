var gulp = require("gulp");
var clean = require('gulp-clean');
var express = require('gulp-express');
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

var config = require('./gulp.config.js')();

var project = tsc.createProject("tsconfig.json");

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
        .pipe(tsc(project));

    return result.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputPath));
});


gulp.task('serve', ['default'], function () {
    // Start the server at the beginning of the task    
    express.run(['dist/app.js']);
});