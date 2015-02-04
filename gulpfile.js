var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src('./src/css/**/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
    return gulp.src([
                './bower_components/underscore/underscore.js',
                './bower_components/backbone/backbone.js',
                './bower_components/marionette/lib/backbone.marionette.js',
                './src/templates/templates.js',
                './src/TodoListView.js',
                './src/TodoView.js',
                './src/App.js',
            ])
           .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function () {
    return gulp.src('./index.html')
           .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.scss', ['css']);
    gulp.watch('index.html', ['copy']);
    gulp.watch('src*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'copy', 'watch']);
