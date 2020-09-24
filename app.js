//引入模块
const express=require("express");
const bodyParser=require("body-parser");
//引入路由
const userRouter=require("./router/user.js")
//创建服务器
const app=express();
//设置端口
app.listen(8080);
//托管静态文件
app.use(express.static('./public'));
//将请求解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//挂载路由器
app.use('/user',userRouter);






