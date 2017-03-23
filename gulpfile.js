/**
 * Arquivo de configurações GULP
 */

/**
 * Objefo principal
 * @type {gulp}
 */
var gulp = require('gulp');

/**
 * Orquestrador contendo as funções e parametros de configuração
 * @type {Object}
 */
var orchestrator = {
    uglifycss: require('gulp-uglifycss'),
    uglify: require('gulp-uglify'),
    del: require('del'),
    rename : require('gulp-rename'),
    ignore: require('gulp-ignore'),
    vinyl: require('vinyl-paths'),
    cssFiles:'./src/css/*.css',
    bowerComum: [
        './bower_components/**/*.css',
        './bower_components/**/*.js',
        './bower_components/**/*.map',
        './bower_components/**/*.eot',
        './bower_components/**/*.svg',
        './bower_components/**/*.ttf',
        './bower_components/**/*.woff',
        './bower_components/**/*.woff2'
    ],
    bowerSass: './bower_components/**/*.scss',
    sass: './sass',
    vendorSass: './sass/vendors',
    dist : './dist',
    distSass: './dist/sass',
    srcSass: ['!./sass/vendors','!./sass/vendors/**/*', './sass/**/*'],
    distCss: './dist/css',
    external: './external',
    clearDist: ['./dist/**', '!./dist', '!./dist/*.js'],
    clearSass: ['./sass/vendors/**', '!./sass/vendors', '!./sass/vendors/*.scss'],
    clearExternal: './external/*',
    ignoreSassVendorRoot: './sass/vendors/*.*'
};

/**
 * configura a dist
 * @type {[type]}
 */
gulp.task('gulp-compile', function () {
    gulp.src(orchestrator.cssFiles).pipe(
        gulp.dest(orchestrator.distCss)
    ).pipe(
        orchestrator.uglifycss({
            expandVars: true
        })
    ).pipe(
        orchestrator.rename(function(path) {
            path.basename = path.basename + "-min";
        })
    ).pipe(
        gulp.dest(orchestrator.distCss)
    );

    gulp.src(orchestrator.srcSass).pipe(
        gulp.dest(orchestrator.distSass)
    );
});

/**
 * Configura arquivos para desenvolvimento do projeto
 */
gulp.task('build', function() {
    gulp.src(orchestrator.bowerSass).pipe(
        gulp.dest(orchestrator.vendorSass)
    );

    gulp.src(orchestrator.bowerComum).pipe(
        gulp.dest(orchestrator.external)
    );
});

/**
 * Limpa a Dist
 */
gulp.task('clear-dist', function () {
    orchestrator.del(orchestrator.clearDist);
});

/**
 * Limpa os vendor im sass
 */
gulp.task('clear-sass', function () {
    orchestrator.del(orchestrator.clearSass);
});

/**
 * Limpa os plugins externos na pasta external
 */
gulp.task('clear-ext', function () {
    orchestrator.del(orchestrator.external);
});

gulp.task('clear-all', [
    'clear-ext',
    'clear-sass',
    'clear-dist'
]);

/**
 * Tarefa padrão do Gulp
 */
gulp.task('default', function () {

});
