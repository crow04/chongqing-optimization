const gulp = require('gulp')
const smushit = require('gulp-smushit')
const clean = require('gulp-clean')
const csso = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rev = require('gulp-rev')
const htmlmin = require('gulp-htmlmin');
const revColl =require('gulp-rev-collector')

//gulp.dest 将之前的操作生成的文件放在哪个目录下。
gulp.task('build-img', function () {
    return gulp.src('./img/*/*')
        .pipe(smushit({verbose: true}))
        .pipe(gulp.dest('./dist/img'))
})
// 清空文件夹 (read: false:不读取文件，加快程序)
gulp.task('clean',function () {
    return gulp.src(['./dist', './rev'], {read: false})
        .pipe(clean());
});
// 压缩合并css
gulp.task('build-css', function () {
    return gulp.src('./style/*')
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(rev())
        .pipe(gulp.dest("./dist/style"))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/css'));
})
//编译压缩合并JS
gulp.task("build-js", function () {
    return gulp.src('./scripts/*.js')
        .pipe(babel())
        //.pipe(concat('chongqing.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/scripts'));
})
/// 压缩HTML
/// Rev改变引用路径
gulp.task('rev-index',function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['./rev/**/*.json','./index.html'])
        .pipe(revColl({
            replaceReved:true
        }))
        .pipe(gulp.dest('./dist/'))
})
/// Rev改变引用路径
gulp.task('rev-views',function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['./rev/**/*.json','./views/*.html'])
        .pipe(revColl({
            replaceReved:true
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/views'))
})
/// Rev替换CSS里面图片的路径
gulp.task('rev-css',function () {
    return gulp.src(['./rev/**/*.json','./dist/style/*'])
        .pipe(revColl({
            replaceReved:true
        }))
        .pipe(clean('./dist/style/*'))
        .pipe(gulp.dest('./dist/style/'))
})
// 复制静态资源
gulp.task('copy-lib',function () {
    return gulp.src(['./lib/*/echarts_3.8.0.min.js','./lib/*/*/jquery-1.10.1.min.js','./lib/*/moment.js'])
        .pipe(gulp.dest('./dist/lib/'))
})
gulp.task('copy-json',function () {
    return gulp.src(['./json/*.json'])
        .pipe(gulp.dest('./dist/json/'))
})
/// build
gulp.task("build", ['clean'], function () {

    return gulp.run('copy-json','copy-lib','build-img', 'build-css', 'build-js',function (err) {

        return gulp.run('rev-index','rev-views',function () {
            console.log("---------------------完成---------------------")
        })
    })
})

