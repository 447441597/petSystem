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
  let data = await client.get('/services',{page,rows,submitType:'findJoin',ref:'shops',...which});
  res.send(data);
});

//根据ID查询服务
router.get('/:_id',async function(req,res){
  let data = await client.get('/services/'+_id);
  res.send(data);
})

//增加服务
router.post('/',async function(req,res){
    let {name,type,time,applyGuige,serverGuige,useTime,shopsId,price,types} = req.body;

  let data = await client.post('/students',{name,type,time,applyGuige,serverGuige,useTime,price,shops:{$ref:'shops',$id:shopsId},types});
  await changeClassCount(classesId,1);
  res.send(data);
})

//修改服务
router.put('/:_id',async function(req,res){
 let {name,type,time,applyGuige,serverGuige,useTime,shopsId,price,types} = req.body;
 console.log(name,type,time,applyGuige,serverGuige,useTime,waiterId,price,types)
  let data = await client.put('/students/'+_id,{name,type,time,applyGuige,serverGuige,useTime,price,shops:{$ref:'shops',$id:shopsId},types});
  res.send(data);
});

//删除服务
router.delete('/:_id',async function(req,res){
  let _id =req.params._id;
  let studentData = await client.get('/students/'+_id);
  if(studentData.classes && studentData.classes.$id){
    await changeClassCount(studentData.classes.$id,-1);
  } 
  let data = await client.delete('/students/'+ _id);
  res.send(data);
});

module.exports = router;
