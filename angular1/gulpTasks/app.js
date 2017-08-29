//Importação das dependencias
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

//Sempre que chamar a task app as outras 4 tasks dentro do array serão chamadas
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

//Tasks
//Tarefa dos arquivos htmls
gulp.task('app.html', function(){
    gulp.src('app/**/*.html') //pega qualquer html dentro da pasta app
        .pipe(htmlmin({ collapseWhitespace: true })) //passa pelo htmlmin que vai remover todo espaço em branco que estiver sobrando
        .pipe(gulp.dest('public')) //envia todos os htmls pra pasta public obedecendo a hierarquia da pasta app.
})

//Tarefa dos arquvos css
gulp.task('app.css', function(){
    gulp.src('app/**/*.css') //pega qualquer arquivo .css dentro da pasta app
        .pipe(uglifycss({ "uglyComments": true })) //passa pelo uglifycss que vai minificar o css e colocar os comentarios em linha unica
        .pipe(concat('app.min.css')) //concatena tudo no arquivo app.min.css
        .pipe(gulp.dest('public/assets/css')) //e copia para o destino
})

//Tarefa dos arquivos js
gulp.task('app.js', function(){
    gulp.src('app/**/*.js') //pega qualquer arquivo .js dentro da pasta app
        .pipe(babel({ presets: ['es2015'] })) //passa pelo babel pra transpilar qqer coisa que estiver fora do padrão es2015
        .pipe(uglify()) //passa pelo uglify que faz a minificação
        .pipe(concat('app.min.js')) //concatena tudo no arquivo app.min.js
        .pipe(gulp.dest('public/assets/js')) //e copia para o destino

})

//Tarefa das demais coisas... imagens, graficos, arquivos, etx
gulp.task('app.assets', function(){
    gulp.src('assets/**/*.*') //pega tudo que estver dentro da pasta assets
        .pipe(gulp.dest('public/assets')) //copia pra pasta assets, respeitando as pastas criadas dentro de assets
})