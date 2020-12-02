const {
  src,
  dest,
  task,
  series,
  watch
} = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');

sass.compiler = require('node-sass');

task('clean', () => {
  return src('dist/**/*', {
      read: false
    })
    .pipe(rm())
})

task('copy:html', () => {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(reload({
      stream: true
    }));
})

task('copy:img', () => {
  return src(['src/img/**/*.jpg', 'src/img/**/*.png'])
    .pipe(dest('dist/img'))
    .pipe(reload({
      stream: true
    }));
})

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/css/main.scss'
];

const libs = [
  'node_modules/jquery/dist/jquery.js',
  'src/scripts/*.js'
];

task('styles', () => {
  return src(styles)
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
    .pipe(reload({
      stream: true
    }));
});

task('scripts', () => {
  return src(libs)
    // .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    // .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

task('icons', () => {
  return src('src/img/icons/*.svg')
    .pipe(svgo({
      plugins: [{
        removeAttrs: {
          attrs: '(fill|stroke|style|width|height|data.*)'
        }
      }]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/img/icons'));
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
});

watch('./src/css/**/*.scss', series('styles'));
watch('./src/*.html', series('copy:html'));
watch('./src/scripts/*.js', series('scripts'));
watch('./src/img/icons/*.svg', series('icons'));
watch('./src/img/**/*.jpg', series('copy:img'));
watch('./src/img/**/*.png', series('copy:img'));

task('default', series('clean', 'copy:html', 'copy:img', 'styles', 'scripts', 'icons', 'server'));