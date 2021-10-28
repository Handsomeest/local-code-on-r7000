// 先导入gulp；引用gulp模块
const gulp = require('gulp');
// 利用这个模块提供的API来建立任务
// 这个模块有两个参数，一个是任务的名称，一个是任务的回调函数
gulp.task('first', () => {
	// ES6的箭头函数
	console.log('第一个gulp函数执行');
	//  用gulp.src这个API获取要处理的文件
	gulp.src('./src/css/initialize.css')
		.pipe(gulp.dest('dist/css'))
});
