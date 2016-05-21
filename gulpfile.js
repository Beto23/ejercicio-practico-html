var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var source = require ('vinyl-source-stream');
var buffer = require ('vinyl-buffer');
var uglify = require ('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var config = {
  styles:{
    main: './src/styles/main.styl',
    watch: './src/styles/**/*.styl',
    output: './build/css'
  },
  html: {
		main: './src/index.html',
		watch: './src/*.html',
		output: './build'
	},
  scripts:{
		main:'./src/scripts/main.js',
		watch: './src/scripts/**/*.js',
		output: './build/js'
	},
  images: {
		main: ['./src/img/**/*.jpg','./src/img/**/*.png'],
		output: './dist/img',
		watch: ['./src/img/**/*.jpg','./src/img/**/*.png']
	},
};

gulp.task('server', function(){
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8000,
			livereload: true
		}));
 });

 gulp.task('css', function(){
 	gulp.src(config.styles.main)
 		.pipe(stylus({
 			use: nib(),
 			'include css': true
 		}))
 		.pipe(minifyCSS())
 		.pipe(gulp.dest(config.styles.output));
 });

 gulp.task('html', function(){
	return gulp
		.src(config.html.main)
		.pipe(gulp.dest(config.html.output));
});

gulp.task('js', function(){
	return browserify(config.scripts.main)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.output));
	});

 gulp.task('img', function(){
 	return gulp
 		.src(config.images.main)
 		.pipe(imagemin({
 			progressive: true,
 			svgoPlugins: [{removeViewBox: false}],
 			use: [pngquant()]
 		}))
 		.pipe(gulp.dest(config.images.output));
 });

 gulp.task('watch', function(){
	gulp.watch(config.images.watch, ['img']);
	gulp.watch(config.scripts.watch, ['js']);
	gulp.watch(config.html.watch, ['html']);
	gulp.watch(config.styles.watch, ['css']);
});

gulp.task('build', ['css', 'html', 'js', 'img']);

gulp.task('default', ['server', 'watch' ,'build']);
