var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('127.0.0.1:8080');

router.get('/',async function(req,res){
  let {page,rows,type,value}=req.query;
  console.log(req.query,'请求所有订单信息')
  let option = {};
  if(type && value){
    option = {[type]:value}
  }
  let data = await client.get("/orders")

  console.log(data,'data')
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
module.exports = router;
