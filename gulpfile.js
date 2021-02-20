const { watch } = require("fs");
const { series, dest } = require("gulp");
const { src } = require("vinyl-fs");

const sass = require('gulp-sass')

function sassTask() {
    return src('app/sass/*.scss')
           .pipe(sass())
           .pipe(dest('dist/css'))
}

function watchTask() {
    watch('app/sass/style.scss', series(sassTask))
}

exports.default = series(sassTask, watchTask)