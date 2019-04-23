var express = require('express');
var router = express.Router();
var client = require('ykt-http-client');
client.url("127.0.0.1:8080");


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



module.exports = router;