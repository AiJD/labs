'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssnano = require('gulp-cssnano')

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: {
        html: 'client_src/*.html',
        js: 'client_src/js/app.js',
        style: 'client_src/scss/main.scss'
    },
    watch: {
        html: 'client_src/**/*.html',
        js: 'client_src/js/**/*.js',
        style: 'client_src/scss/**/*.scss'
    },
    clean: 'build'
};

gulp.task('build:html', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('build:js', function () {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(requirejsOptimize({
            paths: {
                'jquery': 'http://code.jquery.com/jquery-2.2.4.min.js',
            },
            shim: {
                'jquery': {
                    exports: 'jquery'
                },
            },
            include: ['../../node_modules/requirejs/require.js', 'app.js'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build:style', function () {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('build', [
    'build:html',
    'build:js',
    'build:style',
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('build:html');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('build:style');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('build:js');
    });    
});

gulp.task('default', ['build', 'watch']);
