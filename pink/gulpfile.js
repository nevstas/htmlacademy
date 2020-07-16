var gulp = require("gulp");
var less = require("gulp-less")
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var run = require('run-sequence');
var imagemin = require("gulp-imagemin");

gulp.task("clean", function () {
    return del("build");
});

gulp.task("images", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("source/img"));
});

gulp.task("copy", function () {
    return gulp.src([
        // "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/**"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});

gulp.task("style", function () {
    gulp.src("source/less/style.less")
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"));
});


gulp.task('build', gulp.series('clean', 'copy', 'style'));
