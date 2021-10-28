let version = 1.0;
const sayHi = function(uname) {
	console.log('你好' + uname);
};

exports.version = version;
// 把要暴露的当作exports的属性
// 属性名字可以随便写，后面的属性值是上面定义的内容
exports.sayHi = sayHi;
