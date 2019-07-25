const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.商品列表
router.get('/list',function(req,res){
//获取数据
var obj=req.query;
//console.log(obj);
//验证数据是否为空
var pno=obj.pno;
var size=obj.size;
//如果页码为空，默认为1
if (!pno) pno=1;
if(!size) size=9;
//转为整型
pno=parseInt(pno);
size=parseInt(size);
//计算开始查询的值
var start=(pno-1)*size;
pool.query('select lid,price,title from xz_laptop limit ?,?',[start,size],function(err,result){
if(err) throw err;
res.send(result);
});
 });

module.exports=router;