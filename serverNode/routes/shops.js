var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url("localhost:8080");


//查询所有
let which;
router.get('/', async function (req, res) {
  //   console.log("来了")
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  if (type && value) {
    // console.log('模糊查询');
    which = {
      [type]: value //$regex:value主要作用是模糊查询，相当于正则表达式一样
    }
    console.log(which);
  } else {
    // console.log('查询全部');
    which = {};
  }
  let data = await client.get('/shops', {
    page,
    rows,
    ...which
  });
  res.send(data);
  // console.log(data, "123")
});
// 未审核
router.get("/no", async function (req, res) {
  console.log("进来了")
  let info = [];
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  let data = await client.get('/shops',{page,rows});
  console.log(data, '哈哈哈')
  for (let i = 0; i < data.rows.length; i++) {
    console.log(data.rows[i],'122222222')
    if (data.rows[i].status == 0) {
      info.push(data.rows[i]);
    }
  }
  data.rows = info;
  res.send(data)
  console.log(data,"data3213213213132")
})
//已审核
router.get('/ok', async function (req, res) {
  //   console.log("来了")
  let info = []
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  // console.log(page,rows,"lai l ")
  if (type && value) {
    console.log('模糊查询');
    which = {
      [type]: value //$regex:value主要作用是模糊查询，相当于正则表达式一样
    }
    console.log(which);
  } else {
    console.log('查询全部');
    which = {};
  }
  let data = await client.get('/shops',{page,rows,...which});
  for (let i = 0; i < data.rows.length; i++) {
    // console.log(123)
    if (data.rows[i].status == 1) {
      info.push(data.rows[i]);
    }
  }
  data.rows = info;
  res.send(data)
});
//删除
router.delete('/:id', async function (req, res) {
  let id = req.params.id;
  let data = await client.delete('/shops/' + id);
  res.send(data);
});

//根据id查询
router.get('/:id', async function (req, res) {
  let id = req.params.id;
  let data = await client.get('/shops/' + id);
  res.send(data);
  console.log(data,"safsadadwdatujrioyjeihuhwetuih")
})


// 修改
router.put('/:id', async function (req, res) {
  let {
    storeName,
    businessNum,
    legalPerson,
    tel,
    address,
    feature,
    vipLeval,
    rate,
    assistant,
  } = req.body;
  console.log(req.body)
  let id = req.params.id
  let data = await client.put('/shops/' + id, {
    storeName,
    businessNum,
    legalPerson,
    tel,
    address,
    feature,
    vipLeval,
    rate,
    assistant
  });
  res.send(data);
})


// 修改
router.put('/change/:id', async function (req, res) {
  let info = {
    storeName:req.body.storeName,
    businessNum:req.body.businessNum,
    legalPerson:req.body.legalPerson,
    tel:req.body.tel,
    address:req.body.address,
    feature:req.body.feature,
    vipLeval:req.body.vipLeval,
    rate:req.body.rate,
    assistant:req.body.assistant,
    status:1,
    active:3
  };
  console.log(req.body)
  let id = req.params.id
  let data = await client.put('/shops/' + id,info);
  res.send(data);
})
module.exports = router;