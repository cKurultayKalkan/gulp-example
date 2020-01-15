'use strict';

const gulp = require('gulp');
const rename = require("gulp-rename");
const minifyCss= require('gulp-minify-css');
const gsass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');
const gclean = require('gulp-clean');

const cssnano = require('cssnano');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');


const twig = require('gulp-twig');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const connect = require('gulp-connect');
const open = require('gulp-open');

const templates = './src/templates/';
const dist = './dist/';
const homePath='./src/assets/';
const nodeModules = './node_modules/';
const js = 'assets/js/';
const css = 'assets/css/';
const scss = './src/assets/scss/styles.scss';

const  sourceJs = [
  nodeModules + 'bootstrap/dist/js/bootstrap.min.js',
];


function compile() {
  const twig = require('gulp-twig');
  return gulp.src('./src/templates/pages/*.html')
      .pipe(twig({
        base: './src/templates/'
      }))
      .pipe(gulp.dest('./dist/templates/'))
}



function clean() {
  return gulp.src(dist+'**/*')
    .pipe(gclean());
}


function copyImages(){
  return gulp
    .src(['./src/assets/img/**/*'])
    .pipe(gulp.dest('./dist/assets/img/'))

}

function sass() {
  return gulp.src(scss)
    .pipe(sourcemaps.init())
    .pipe(gsass().on('error', gsass.logError))
    .pipe(sourcemaps.write())
    .pipe(minifyCss())
    .pipe(rename('style-min.css'))
    .pipe(gulp.dest(dist+css))
}

function scripts(){
  return gulp.src(sourceJs)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest(dist+js))
}

const build = gulp.series(clean, gulp.parallel(sass, copyImages, scripts, compile));


exports.clean = clean;
exports.sass = sass;
exports.copyImages = copyImages;
exports.scripts = scripts;
exports.compile = compile;
exports.build = build;
exports.default = build;
