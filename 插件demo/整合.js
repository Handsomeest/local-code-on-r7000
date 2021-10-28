let zuobi = {
	// 文本框输入内容并点击
	wenbenkunag() {
		let arr = [ '我也是', '俺也一样', ' 算我一个 ', ' 我差不多 ', ' 我也想 ', ' 可以的 ' ];
		let x = Math.floor(Math.random() * 5);
		let textbox = document.getElementsByClassName('form-control');
		console.log(textbox[0].value);
		textbox[0].value = arr[x];
	},
	// 点击发送按钮
	clickSendButton() {
		let send = document.getElementsByClassName('btn');
		// console.log(anniu[2]);
		send[2].addEventListener('click', function() {});
		send[2].click();
	},
	// 模拟点击键盘事件
  
    

	// 点击认可按钮
	clickRecognitionButton() {
		let Recognition = document.getElementsByTagName('a');

		for (let i = 0; i < Recognition.length; i++) {
			// let tem = renke[i].innerHTML
			// console.log(tem);
			Recognition[i].addEventListener('click', function() {});
			if (Recognition[i].innerHTML == '认可') {
				Recognition[i].click();
			}
		}
	},
	// 点击认可后的确定
	quedingrengke() {
		let queding1 = document.getElementsByClassName('layui-layer-btn0');
		console.log(queding1);
		queding1[0].addEventListener('click', function() {});
		queding1[0].click();
	}
    // 
};
