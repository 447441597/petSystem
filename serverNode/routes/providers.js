var express = require('express');
var router = express.Router();
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
  console.log(req.params._id,'_id')
  let _id = (req.params._id);
  let data = await client.get('/providers/'+_id);
  res.send(data);
})

//增加学生
router.post('/',async function(req,res){
  let providerName=req.body.providerName;
  let person=req.body.person;
  let phone=req.body.phone;
  let address=req.body.address;
  let number=req.body.number;
  let data = await client.post('/providers',{providerName,person,phone,address,number});
  res.send(data);
  console.log(data)
})

//修改学生
router.put('/:_id',async function(req,res){
  console.log('object',req.body)
  let providerName=req.body.providerName;
  let person=req.body.person;
  let phone=req.body.phone;
  let address=req.body.address;
  let number=req.body.number;
    let _id = (req.params._id)
  //修改学生信息
  let data = await client.put('/providers/'+_id,{providerName,person,phone,address,number});
  res.send(data);
})

//删除学生
router.delete('/:_id',async function(req,res){
  let _id =(req.params._id);
  console.log(_id,'_id')
  let data = await client.delete('/providers/'+ _id);
  res.send(data);
});



//查询所有有订单的城市
router.get('/orders', async (req, res) => {
  let data = await client.get("/orders");
  let date = await client.get('/petOwns');
  let arr = [];
  let petow = [];
  for (let i in data) {
    arr.push(data[i].petOwns.$id);
  }
  for (let j in arr) {
    for (let k in date) {
      if (arr[j] == date[k]._id) {
        petow.push({ value: date[k].address, label: date[k].address });
      }
    }
  }
  res.send(petow);
});

//根据城市查询订单
router.get('/cite', async (req, res) => {
  let data = await client.get("/orders");
  let date = await client.get('/petOwns');
  let arr = [];
  for(let i in date){
    if(date[i].address == req.query.cite){
      arr.push(date[i]._id)
    }
  }
  let times = [];
  let money = [];
  for(let j in data){
    for(let k in arr){
      if(arr[k] == data[j].providers.$id){
        times.push(data[j].time);
        money.push(data[j].money)
      }
    }
  }
  res.send({tim:times,mon:money})


});



module.exports = router;
