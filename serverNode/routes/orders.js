var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('127.0.0.1:8080');

router.get('/',async function(req,res){
  let {page,rows,type,value,ordersType}=req.query;
  console.log(req.query,'请求所有订单信息')
  let option = {};
  if(type && value){
    option = {[type]:value}
  }
  // let data1 = await client.get('/orders',{page,rows,submitType:'findJoin',ref:'petOwns',...which});
  let data = await client.get("/orders",{page,rows,submitType:'findJoin',ref:'services',...option})

  res.send(data);
});

// 增加订单
router.post('/',async function(req,res){
  // let 
  console.log('增加订单')
  res.send('增加订单')
})

// 取消订单
router.delete('/',async function(req,res){
  // let 
  console.log('取消订单')
  res.send('取消订单')
})

// 删除评论
router.delete('/evaluate',function(req,res){
  console.log('删除评论');
  res.send('删除评论')
})

module.exports = router;
