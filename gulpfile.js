const gulp = require('gulp');
const typescript = require('gulp-typescript');
const merge = require('merge2');
const glob = require('glob');
const fs = require('fs');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');

const SRC_PATH = 'src';
const DIST_PATH = 'dist';
const tsconfig = typescript.createProject({
  noExternalResolve: false,
  declaration: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  module: "commonjs",
  moduleResolution: "node",
  noImplicitAny: true,
  removeComments: false,
  sourceMap: true,
  suppressImplicitAnyIndexErrors: true,
  target: "es5",
  sortOutput: true
});

gulp.task('copy', () => {
  return gulp 
    .src(`${SRC_PATH}/**/*.{html,css}`)
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('sass', () => {});

gulp.task('tsc', () => {
  var tsResult = gulp
    .src([
      `${SRC_PATH}/**/*.ts`,
      'typings/index.d.ts',
      `!${SRC_PATH}/**/*.{spec,e2e}.ts`
    ])
    .pipe(sourcemaps.init())
    .pipe(typescript(tsconfig));

  return merge([
    tsResult.dts.pipe(gulp.dest(DIST_PATH)),
    tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DIST_PATH))
  ]);
});

gulp.task('index', (callback) => {
  // imports reflect-medatada shim
  require('reflect-metadata');

  glob(`${DIST_PATH}/**/*.{js,d.ts}`, (err, files) => {
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const dtsFiles = files.filter(file => file.endsWith('.d.ts'));

    const jsFilesExports = jsFiles.map(file => {
      const objFile = require(`./${file}`);
      return Object.keys(objFile).map(prop => `exports.${prop} = require('./${file}').${prop};`)
    }).reduce((arr, item) => arr = arr.concat(item), []);

    const dtsFilesExports = dtsFiles
      .map(file => `export * from './${file.replace('.d.ts', '')}';`);

    fs.writeFileSync('index.js', jsFilesExports.join('\n'));
    fs.writeFileSync('index.d.ts', dtsFilesExports.join('\n'));
    callback();
  });
});

gulp.task('dist', callback => runSequence(['copy', 'tsc'], 'index', callback));