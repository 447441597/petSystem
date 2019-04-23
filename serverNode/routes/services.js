var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');

let which;
router.get('/',async function(req, res) {
  let page = req.query.page;//接收到的页码数
  let rows = req.query.rows;//接收到的行数
  let type = req.query.type;
  let value = req.query.value;

  if(type && value){
     which = {
       [type]:value//$regex:value主要作用是模糊查询，相当于正则表达式一样
     }
  } else {
    which = {};
  }
  let data = await client.get('/services',{page,rows,submitType:'findJoin',ref:['shops','serverTypes'],...which});
  res.send(data);
});

//根据ID查询服务
router.get('/:_id',async function(req,res){
  let data = await client.get('/services/'+_id);
  res.send(data);
})

//增加服务
router.post('/',async function(req,res){
    let {name,type,time,applyGuige,serverGuige,useTime,shopsId,price,typesId,level} = req.body;

  let data = await client.post('/services',{name,type,time,applyGuige,serverGuige,useTime,price,shops:{$ref:'shops',$id:shopsId},serverTypes:{$ref:'serverTypes',$id:typesId},level});
  res.send(data);
  console.log(data);
})

//修改服务
router.put('/:_id',async function(req,res){
 let {name,type,time,applyGuige,serverGuige,useTime,shopsId,price,types,level} = req.body;
 console.log(name,type,time,applyGuige,serverGuige,useTime,waiterId,price,types)
  let data = await client.put('/services/'+_id,{name,type,time,applyGuige,serverGuige,useTime,price,shops:{$ref:'shops',$id:shopsId},types,level});
  res.send(data);
});

//删除服务
router.delete('/:_id',async function(req,res){
  let _id =req.params._id;
  let data = await client.delete('/services/'+ _id);
  console.log(data);
  res.send(data);
});

router.get('/serverTypes',async function(req,res){
    let data = await client.get('/serverTypes');
    console.log(data);
    res.send(data);
})
module.exports = router;
