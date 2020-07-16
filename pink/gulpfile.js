//Конфиг для Gulp версии 4

var gulp = require("gulp");
var less = require("gulp-less")
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");

//удаляем папку build
gulp.task("clean", function () {
    return del("build");
});

//сжимаем картинки
gulp.task("images", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.mozjpeg({progressive: true}),
        ]))
        .pipe(gulp.dest("build/img"));
});

//компилируем less
gulp.task("less", function () {
    return gulp.src("source/less/style.less")
        .pipe(less())
        .pipe(rename("style.css"))
        .pipe(gulp.dest("source/css"));
});

//прогоняем через autoprefixer, минифицируем css
gulp.task("style", function () {
    return gulp.src("source/css/*.css")
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(minify())
        .pipe(gulp.dest("build/css"));
});

//минимизируем html
gulp.task("html", function () {
    return gulp.src("source/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
});

//минимизируем скрипты
gulp.task("script", function () {
    return gulp.src("source/js/**/*")
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
});

//копируем остальные файлы, например шрифты
gulp.task("copy", function () {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});

//отслеживаем изменения в less, js, html
gulp.task("watcher",function(){
    gulp.watch(["source/less/**/*.less"], gulp.series("less"));
    gulp.watch(["source/js/**/*.js"], gulp.series("script"));
    gulp.watch(["source/*.html"], gulp.series("html"));
});

gulp.task("build", gulp.series("clean", "images", "less", "style", "html", "script", "copy"));