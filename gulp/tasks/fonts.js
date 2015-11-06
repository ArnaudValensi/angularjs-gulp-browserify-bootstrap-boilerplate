'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('fonts', function () {

  var fontsFilesToCopy = config.fonts.src.concat([
    config.third_party.font_awesome.fonts,
    config.third_party.bootstrap.fonts
  ]);

  return gulp.src(fontsFilesToCopy)
    .pipe(changed(config.fonts.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(gulpif(
      browserSync.active,
      browserSync.reload({ stream: true, once: true }
    )));

});
