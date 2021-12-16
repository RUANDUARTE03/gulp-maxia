"use strict";

const gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

sass.compiler = require("node-sass"); //Necessário para funcionar gulp-sass

const bundleSass = () => {
  return gulp
    .src("./static/index.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // Converte Sass para CSS mimificado com gulp-sass
    .pipe(gulp.dest("./dist"));
};

exports.bundle = bundleSass;
