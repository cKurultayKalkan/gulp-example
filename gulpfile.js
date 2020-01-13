'use strict';

const gulp = require('gulp');
const twig = require('gulp-twig');
const rename = require("gulp-rename");
const minifyCss= require('gulp-minify-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const connect = require('gulp-connect');
const open = require('gulp-open');


const templates = './src/templates/';
const dist = './dist/';
const homePath='./src/assets/';
const nodeModules = './node_modules/';
const js = 'assets/js/';
const css = 'assets/css/';
const scss = './src/assets/scss/style.scss';

const  sourceJs = [
  nodeModules + 'bootstrap/dist/js/boostrap.min.js'
];


