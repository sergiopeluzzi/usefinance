//Importação das dependencias
const gulp = require('gulp')
const util = require('gulp-util')

//Requires
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

//Task principal... quando digita gulp no terminal
gulp.task('default', function() {
    if(util.env.production) {
        gulp.start('deps', 'app')
    } else {
        gulp.start('deps', 'app', 'server')
    }
})