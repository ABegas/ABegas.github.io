import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csso from 'gulp-csso';
import include from 'gulp-file-include';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import imagemin from 'gulp-imagemin';

const sass = gulpSass(dartSass);

const html = () => {
    return gulp.src('src/*.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(gulp.dest('docs'))
}

const scss = () => {
    return gulp.src('src/scss/*.scss', {sourcemaps: true})
        .pipe(sass())
        .pipe(csso())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('docs/css', {sourcemaps: true}))
}

const js = () => {
    return gulp.src('src/js/*.js', {sourcemaps: true})
        .pipe(babel())
        .pipe(webpack({
            "mode": "production"
        }))
        .pipe(gulp.dest('docs/js', {sourcemaps: true}))
}

const img = () => {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('docs/img'))
}



const watch = () => {
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/scss/**/*.scss', scss);
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch('src/img/**/*', img);
}

const dev = gulp.series(
    html,
    scss,
    js,
    img,
    watch
);

export default dev;
