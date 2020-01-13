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
  nodeModules + 'bootstrap/dist/js/boostrap.min.js'
];


function clean() {
  return gulp.src(dist+'**/*')
    .pipe(gclean());
}


function sass() {
  const postPlugins = [
    autoprefixer(),
    cssnano()
  ];

  return gulp.src(scss)
    .pipe(sourcemaps.init())
    .pipe(gsass().on('error', gsass.logError))
    .pipe(sourcemaps.write())
    .pipe(minifyCss())
    .pipe(rename('style-min.css'))
    //.pipe(postcss(postPlugins))
    .pipe(gulp.dest(dist+css))
}

const build = gulp.series(clean, sass);


exports.clean = clean;
exports.sass = sass;
exports.build = build;
exports.default = build;
