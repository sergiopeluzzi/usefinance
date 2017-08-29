//Importação das dependencias
const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

//Tasks
//Tarefa do Servidor: basicamente inicia o servidor com a dependencia da tarefa watch
gulp.task('server', ['watch'], function() { //Quando a task server é chamada, ele executa a dependencia (watch) e depois a função do server
    gulp.src('public') //webserver vai observar a pasta public e servir os arquivos estaticos dentro dela
        .pipe(webserver({ //webserver inicializa com as opções
            livereload: true, //atualiza o browser automaticamente
            port: 3000, //rodando na porta 3000
            open: true //sempre que o servidor inicializar, o browser abre automaticamente
        }))
})

//Tarefa que obersa a alteração dos arquivos e chama as tasks resposnsaveis por cada tipo
gulp.task('watch', function(){
    watch('app/**/*.html', () => gulp.start('app.html')) //watch vai ficar observando os arquivos html da pasta app. Quando algum sofrer alteração ele chama a task app.html
    watch('app/**/*.css', () => gulp.start('app.css')) //se modificar css a função callback chama a task css
    watch('app/**/*.js', () => gulp.start('app.js')) //da mesma forma com o js
    watch('assets/**/*.*', () => gulp.start('app.assets')) //se modificar qqer coisa em assets, chama a task app.assets
})