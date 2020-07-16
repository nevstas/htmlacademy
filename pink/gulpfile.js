var gulp = require("gulp");
var less = require("gulp-less")
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var run = require('run-sequence');

gulp.task("clean", function () {
    return del("build");
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

// gulp.task("build", function (done) {
//     run(
//         "clean",
//         "copy",
//         "style",
//         done
//     );
// });

// gulp.task('build', ['clean', 'copy', 'style']);

gulp.task('build', function(callback) {
    run('clean',
        'copy',
        'style',
        callback);
});