// var gulp = require('gulp');
// var concat = require('gulp-concat');
// const autoprefixer = require('gulp-autoprefixer');
//
// //minify & compress
// var uglify = require('gulp-uglify');
// var pump = require('pump');
//
// var paths = {
//     src: 'src/**/*',
//     srcHTML: '*.html',
//     srcCSS: 'lp-assets/css/*.less',
//     srcCSSautopref: 'dist/allCss.css',
//     srcJS: 'lp-assets/js/*.js',
//     tmp: 'dist',
//     tmpIndex: 'dist/index.html',
//     tmpCSS: 'dist/**/*.css',
//     tmpJS: 'dist/**/*.js',
//     dist: 'dist',
//     distIndex: 'dist/index.html',
//     distCSS: 'dist/**/*.css',
//     distJS: 'dist/**/*.js'
// };
//
// // gulp.task('html', function () {
// //     return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
// // });
//
// // gulp.task('css', function () {
// //     return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
// // });
//
// // gulp.task('js', function () {
// //     return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
// // });
//
// // gulp.task('copy', ['html', 'css', 'js']);
//
//
// //
// gulp.task('autoprefixer', function () {
//     return gulp.src('./lp-assets/css/*.css')
//         .pipe(autoprefixer({
//                 browsers: [
//                     'last 16 versions',
//                     'safari >= 8',
//                     'ie >= 10',
//                     'ff >= 20',
//                     'ios 6',
//                     'android 4'
//                 ],
//                 cascade: false
//             }
//         ))
//         .pipe(gulp.dest('./dist/'))
// });
//
// gulp.task('cssConcat', function () {
//     return gulp.src('./lp-assets/css/*.css')
//         .pipe(concat('allCss.css'))
//         .pipe(gulp.dest('./dist/'));
// });
//
//
//
//
//
//
// // gulp.task('compress', function (cb) {
// //     pump([
// //             gulp.src('./lp-assets/js/all.js'),
// //             uglify(),
// //             gulp.dest('dist')
// //         ],
// //         cb
// //     );
// // });
//
//
// // gulp.task('default', ['copy']);
//
//
// // gulp.task('watch', function () {
// //     gulp.watch('lp-assets/**/.', ['html']);
// // });
//
//
// // gulp.task('default', ['html', 'css','js'] , function() {
// //
// //     // gulp.watch(['lp-assets/**/*.*',  ['html']);
// //     // gulp.watch(['lp-assets/**/*.*',  ['html']);
// //
// //     gulp.watch(['sass/**/*.scss', 'layouts/**/*.css'], ['css']);
// //
// // });
//
// gulp.task('watch', function () {
//     // gulp.watch(paths.srcCSS, ['css']);
//
//     gulp.watch(paths.srcCSS, ['autoprefixer']);
//     gulp.watch(paths.srcCSS, ['cssConcat']);
//
//
//     gulp.watch(paths.srcCSS, function(){
//         gulp.run('autoprefixer')
//     })
//
//     // gulp.watch(paths.srcJS, ['js']);
//     // gulp.watch(paths.srcJS, ['scripts']);
//
//     // gulp.watch(paths.srcJS, ['compress']);
// });





/*
    Before using make sure you have:
    npm install --save-dev gulp gulp-minify-css gulp-concat gulp-uglify gulp-autoprefixer gulp-sass
    Make sure to change the directory names in the default watch function to the CSS/SCSS/SASS directories you are using so it reloads
 */
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat')
uglify = require('gulp-uglify')
prefix = require('gulp-autoprefixer')
less = require('gulp-less');

// Minifies JS
gulp.task('js', function(){
    return gulp.src('lp-assets/js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))

        .pipe(gulp.dest('lp-assets/js'))
});

/*==========  Minify and concat different styles files  ==========*/

// LESS Version
gulp.task('styles', function(){
    return gulp.src('lp-assets/css/**/*.less')
        .pipe(less())
        .pipe(prefix({
            browsers:  [
                'last 16 versions',
                'safari >= 8',
                'ie >= 10',
                'ff >= 20',
                'ios 6',
                'android 4'
            ],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('lp-assets/css'))
});

// SCSS Version
//gulp.task('styles', function(){
//return gulp.src('src/scss/**/*.scss')
//.pipe(sass())
//.pipe(prefix('last 2 versions'))
//.pipe(concat('main.css'))
//.pipe(minifyCSS())
//.pipe(gulp.dest('public/css'))
//});

// CSS Version
/*
gulp.task('styles', function(){
    return gulp.src('src/css/*.css')
    .pipe(concat('site.css'))
    .pipe(minifyCSS())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('public/css'))
});
*/

gulp.task('default', function() {
    gulp.run('styles');
    gulp.run('js');
    gulp.watch('lp-assets/css/**/*.less', function(){
        gulp.run('styles')
    })
});