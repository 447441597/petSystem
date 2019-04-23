var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("127.0.0.1:8080");

let info = [];

router.get("/", async function(req, res) {
  let { page, rows, type, value, ordersType } = req.query;
  // console.log(ordersType, "请求所有订单信息");
  let option = {};
  let data = [];
  if (type && value) {
    option = { [type]: value };
  }
  let data1 = await client.get("/orders", {
    page,
    rows,
    submitType: "findJoin",
    ref: ["petOwns", "services", "shops", "goods"],
    ...option
  });
  // console.log(data1.rows,'data1')
  if (ordersType == 0) {
    //请求服务订单
    for (let i = 0; i < data1.rows.length; i++) {
      // console.log(data1.rows[i], "data1[i]");
      delete data1.rows[i].goods;
    }
    info = data1;
    res.send(data1);
    // console.log(data1, "data");
  } else if (ordersType == 1) {
    //请求商品订单
    for (let i = 0; i < data1.rows.length; i++) {
      // console.log(data1.rows[i], "data1[i]");
      delete data1.rows[i].services;
    }
    info = data1;
    res.send(data1);
    // console.log(data1, "data");
  }
});

router.get("/status", function(req, res) {
  let { page, rows, type, value, status } = req.query;
  // console.log(status, "请求所有订单信息");
  let option = {};
  let data = [];
  if (type && value) {
    option = { [type]: value };
  }
  // console.log(info, "info");
  if (status == 0) {
    //请求全部服务订单
    res.send(info);
  } else if (status == 1) {
    //请求未完成订单
    for (let i = 0; i < info.rows.length; i++) {
      // console.log(data1.rows[i], "data1[i]");
      if (info.rows[i].status == "未完成") {
        data.push(info.rows[i]);
      }
    }
    res.send(data);
    // console.log(data, "data");
  } else if (status == 2) {
    //请求已完成订单
    for (let i = 0; i < info.rows.length; i++) {
      if (info.rows[i].status == "已完成") {
        data.push(info.rows[i]);
      }
    }
    res.send(data);
    // console.log(data, "data");
  }
});
// 增加订单
router.post("/", async function(req, res) {
  let orders = req.body;
  console.log("增加订单", orders);
  let data = await client.post("/orders", { orders });
  res.send("增加订单");
});

// 取消订单
router.delete("/:id", async function(req, res) {
  let id = req.params.id
  console.log("取消订单",id);
  let data = await client.delete('/orders/'+id);
  res.send(data);
});

// 修改状态
router.put('/:id',async function(req,res){
  let id = req.params.id;
  let status = req.body.status;
  let data = await client.get('/orders/'+id);
  data.status = '已完成';
  let data1 = await client.put('/orders/'+id,data);
  console.log(data1,'data1修改状态');
  res.send({
    status:'ok'
  });
})

// 书写评论
router.put('/:id',async function(req,res){
  let id = req.params.id;
  let evaluate = req.body.evaluate;
  let data = await client.get('/orders/'+id);
  data.evaluate = evaluate;
  let data1 = await client.put('/orders/'+id,data);
  console.log(data1,'data1写评论');
  res.send(data1);
})

module.exports = router;
