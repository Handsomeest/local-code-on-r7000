// 操作步骤
// 在发帖框输入文本内容
拿到textareab
    


//点击发布
//找到最新的评论
//点击评论的认可按钮
// 重复以上操作


// 获取到了文本框了
function wenbenkunag() {
    let wenben = document.getElementsByClassName("form-control")
    console.log(wenben[0].value);
    wenben[0].value = arr[i]
}
wenbenkunag();


// 获取点击按钮
function getButton() {
    let anniu = document.getElementsByClassName("btn")
    // console.log(anniu);
    console.log(anniu[2]);
    
}
getButton();

// 遍历所有的认可按钮并点击
function getA() {
    let renke = document.getElementsByTagName("a");
    
    for (let i = 0; i < renke.length; i++) {
        // let tem = renke[i].innerHTML
        // console.log(tem);
        renke[i].addEventListener("click",function () {
            
        })
        if (renke[i].innerHTML == "认可") {
            renke[i].click();
          
        }
        
    }
    
}
getA();

// 点击弹出来的确定按钮

function queding() {
    let queding1 = document.getElementsByClassName("layui-layer-btn0")
    console.log(queding1);
    queding1[0].addEventListener("click",function () {
        
    })
    queding1[0].click();
    
}
queding();

// 最后的确认框每隔15秒会自动确认
