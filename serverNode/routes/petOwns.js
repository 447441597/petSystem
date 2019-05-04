var express = require('express');
var router = express.Router();
var client = require('ykt-http-client');
client.url("127.0.0.1:8080");

// 修改
router.put('/info/:id',async function(req,res){
  let info = req.body;
  let id = req.params.id;
  console.log(id,info)
  let data = await client.put('/petOwns/'+id,info)
  res.send(data)
})

// 根据id查询
router.get('/info/:id',async function(req,res){
  let id = req.params.id;
  console.log(id)
  let data = await client.get('/petOwns/'+id);
  console.log(data);
  res.send(data)
})

//查询
router.get('/', async (req, res) => {
  let { page, rows, type, value } = req.query;
  let option = {};
  if (type && value) {
    option = { [type]: value }
  }
  let data = await client.get("/petOwns", { page, rows, ...option });
  res.send(data);
});

//修改状态
router.put('/mod/:id', async function (req, res) {
  let id = req.params.id;
  let sto = {
    phone: req.body.phone,
    nickname: req.body.nickname,
    truename: req.body.truename,
    vipcard: req.body.vipcard,
    headImage: req.body.headImage,
    address: req.body.address,
    area: req.body.area,
    integral: req.body.integral,
    store: !req.body.store,
    pets: req.body.pets
  };
  let data = await client.put('/petOwns/' + id, sto);
  res.send();
});

//关联查询vip
router.get('/id/:id', async (req, res) => {
  let id = req.params.id;
  let data = await client.get('/vipcard', { "shops.$id": id, submitType: "findJoin", ref: "vipcard", ref: ['shops', 'petOwns'] });
  if (data.length == 0) {
    let date = await client.get('/vipcard', { "petOwns.$id": id, submitType: "findJoin", ref: "vipcard", ref: ['shops', 'petOwns'] });
    res.send(date);
  } else {
    res.send(data);
  }
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
      if(arr[k] == data[j].petOwns.$id){
        times.push(data[j].time);
        money.push(data[j].money)
      }
    }
  }
  res.send({tim:times,mon:money})
  // let arr = [];
  // let petow = [];
  // for (let i in data) {
  //   arr.push(data[i].petOwns.$id);
  // }
  // for (let j in arr) {
  //   for (let k in date) {
  //     if (arr[j] == date[k]._id) {
  //       petow.push({ value: date[k].address, label: date[k].address });
  //     }
  //   }
  // }

});



module.exports = router;