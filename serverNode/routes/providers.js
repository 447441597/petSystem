var express = require('express');
var router = express.Router();
const db = require('ykt-mongo');
const toObjectId = require('mongodb').ObjectID;
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET home page. */
let which;
router.get('/',async function(req, res) {
  let page = req.query.page;//接收到的页码数
  let rows = req.query.rows;//接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  if(type && value){
    console.log('模糊查询');
     which = {
       [type]:value//$regex:value主要作用是模糊查询，相当于正则表达式一样
     }
  } else {
    // console.log('查询全部');
    which = {};
  }
  let data = await client.get('/providers',{page,rows,...which});
  res.send(data);

});

//根据ID查询学生
router.get('/:_id',async function(req,res){
  let _id = toObjectId(req.params._id);
  let data = await client.get('/providers/'+_id);
  res.send(data);
})

//增加学生
router.post('/',async function(req,res){
  let name=req.body.name;
  let person=req.body.person;
  let phone=req.body.phone;
  let address=req.body.address;
  let number=req.body.number;
  let data = await client.post('/providers',{name,person,phone,address,number});
  res.send(data);
  console.log(data)
})

//修改学生
router.put('/:_id',async function(req,res){
  let name=req.body.name;
  let person=req.body.person;
  let phone=req.body.phone;
  let address=req.body.address;
  let number=req.body.number;
    let _id = toObjectId(req.params._id)
  //修改学生信息
  let data = await client.put('/providers/'+_id,{name,person,phone,address,number});
  res.send(data);
})

//删除学生
router.delete('/:_id',async function(req,res){
  let _id =toObjectId(req.params._id);
  let data = await client.delete('/providers/'+ _id);
  res.send(data);
});
module.exports = router;
