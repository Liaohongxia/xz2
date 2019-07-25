const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入商品路由器
const productRouter=require('./routes/product.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//使用body-parser中间件
app.use(bodyParser.urlencoded({
extended:false
}));

//托管静态资源到public目录下
app.use( express.static('public') );

//使用路由器，挂载到/user下
// /user/reg
app.use('/user',userRouter);
//使用商品路由器。挂载到/product下  /product/list
app.use('/product',productRouter);