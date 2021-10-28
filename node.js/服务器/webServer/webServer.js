// 引入http对象
const http = require('http');
const server = htt;
// 创建服务器
const server = http();
//  当客户端发送请求的时候

server.on('request',(request,response) =>{
    response.end('./')
} )
server.listen(3000);
console.log('the service is started');
