'use strict';

var gulp = require('gulp');
var copy = require('gulp-copy');
var rimraf = require('rimraf');
var run = require('gulp-run');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var async = require('async');

var paths = {
  filesrc: 'source/**/*',
  filepath: 'public',
  cleanedfiles: [
    'public/templates',
    'public/css',
    'public/js'
  ]

}

gulp.task('watch', function(){
  gulp.watch('source/**/*', ['build']);
});

gulp.task('build', ['clean'], function(){
  return gulp.src(['source/*.js', 'source/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(addsrc('source/**/*.html'))
    .pipe(addsrc('source/**/*.css'))
    .pipe(gulp.dest(paths.filepath))
    .on('error', gutil.log)
});

gulp.task('clean', function(cb){
  async.each(paths.cleanedfiles, rimraf, cb);
});

gulp.task('bower', function(cb){
  run('bower i').exec(cb)
  .on('error', gutil.log);
});

gulp.task('default', ['build', 'bower', 'watch']);
