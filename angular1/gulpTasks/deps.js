//Importação das dependencias
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const babel = require('gulp-babel')

//Sempre que chamar a task app as outras 4 tasks dentro do array serão chamadas
gulp.task('deps', ['deps.css', 'deps.js', 'deps.fonts'])

//Tasks
//Tarefa das dependencias de css do front
gulp.task('deps.css', function(){
    gulp.src([ //todos as dependencias css vão aqui
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.min.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css'
    ])
    .pipe(uglifycss({"uglyComments": true})) //faz a minificação do css com ugliComments que coloca todo os comentarios em um linha
    .pipe(concat('deps.min.css')) //concatena os arquivos minificados em um arquivo só
    .pipe(gulp.dest('public/assets/css')) //move esse arquivo minificado pra esta pasta
})

//Tarefa das dependencias de javascript do front
gulp.task('deps.js', function(){
    gulp.src([ //todos os arquivos de js vao aqui
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.min.js'
    ])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify()) //faz o processo de uglify q fará a minificação
    .pipe(concat('deps.min.js')) //pega todos os .js do src já minificados e concatena em um único arquivo
    .pipe(gulp.dest('public/assets/js')) //manda o arquivo pra este local
})

//Tarefa para as dependencias de fontes do front
gulp.task('deps.fonts', function(){
    gulp.src([ //os arquivos de fonts vao aqui
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'        
    ])
    .pipe(gulp.dest('public/assets/fonts')) //somente copia as fonts dessas pastas para o destino
})