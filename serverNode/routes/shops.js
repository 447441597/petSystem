var express = require('express');
var router = express.Router();
const toObjectId = require('mongodb').ObjectID;
const client = require('ykt-http-client');
client.url("localhost:8080");

//查询所有
let which;
router.get('/',async function(req, res) {
  console.log("来了")
  let page = req.query.page;//接收到的页码数
  let rows = req.query.rows;//接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  if(type && value){
    console.log('模糊查询');
     which = {
       [type]:value//$regex:value主要作用是模糊查询，相当于正则表达式一样
     }
     console.log(which);
  } else {
    console.log('查询全部');
    which = {};
  }
  let data = await client.get('/shops',{page,rows,...which});
  res.send(data);
  console.log(data,"123")
});

router.delete('/:_id',async function(req,res){
    let _id =toObjectId(req.params._id);
    let data = await client.delete('/shops/'+ _id);
    res.send(data);
  });
module.exports = router;
