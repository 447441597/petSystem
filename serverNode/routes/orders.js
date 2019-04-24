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
  if (ordersType == 0) {
    //请求商品订单
    for (let i = 0; i < data1.rows.length; i++) {
      // console.log(data1.rows[i], "data1[i]");
      if (data1.rows[i].status.indexOf("订单") > -1) {
        data.push(data1.rows[i]);
      }
    }
    data1.rows = data;
    info = data1;
    res.send(data1);
    console.log(data1, "data");
  } else if (ordersType == 1) {
    //请求服务订单
    for (let i = 0; i < data1.rows.length; i++) {
      if (data1.rows[i].status.indexOf("服务") > -1) {
        // console.log(data1.rows[i].services, "data1[i]");
        data.push(data1.rows[i]);
      }
    }
    data1.rows = data;
    info = data1;
    res.send(data1);
    console.log(data1, "data");
  }
});

router.get("/status", async function(req, res) {
  let { page, rows, type, value, ordersType, sta } = req.query;
  console.log(req.query, "请求订单信息");
  let option = {};
  if (type && value) {
    option = { [type]: value };
  }
  let data1 = await client.get("/orders", {
    submitType: "findJoin",
    ref: ["petOwns", "services", "shops", "goods"],
    ...option
  });

  let dataInfo = [];
  let resData = {};
  let data = [];
  if (sta == 1) {
    //服务
    for (let i = 0; i < data1.length; i++) {
      if (data1[i].status.indexOf("服务") > -1) {
        // console.log(data1.rows[i].services, "data1[i]");
        data.push(data1[i]);
      }
    }
    console.log(data.length, ".....................");
    if (ordersType == 0) {
      //全部
      resData = {
        rows: data,
        curpage: data1.curpage,
        eachpage: data1.eachpage,
        maxpage: data1.maxpage,
        maxpage: data1.maxpage
      };
      res.send(resData);
    } else if (ordersType == 1) {
      //未完成
      for (let i = 0; i < data.length; i++) {
        if (data[i].status.indexOf("未完成") > -1) {
          dataInfo.push(data[i]);
        }
      }
      resData = {
        rows: dataInfo,
        curpage: data1.curpage,
        eachpage: data1.eachpage,
        maxpage: data1.maxpage,
        maxpage: data1.maxpage
      };
      res.send(resData);
    } else if (ordersType == 2) {
      //已完成
      for (let i = 0; i < data.length; i++) {
        if (data[i].status.indexOf("已完成") > -1) {
          dataInfo.push(data[i]);
        }
      }
      resData = {
        rows: dataInfo,
        curpage: data1.curpage,
        eachpage: data1.eachpage,
        maxpage: data1.maxpage,
        maxpage: data1.maxpage
      };
      res.send(resData);
    }
  } else if (sta == 0) {
    //商品
    for (let i = 0; i < data1.rows.length; i++) {
      // console.log(data1.rows[i], "data1[i]");
      if (data1.rows[i].status.indexOf("订单") > -1) {
        data.push(data1.rows[i]);
      }
    }
    console.log(data, "/////////////////////////");
    if (ordersType == 0) {
      //全部
      data1.rows = data;
      res.send(data1);
    } else if (ordersType == 1) {
      //未完成
      for (let i = 0; i < data.length; i++) {
        if (data[i].status.indexOf("未完成") > -1) {
          dataInfo.push(data[i]);
        }
      }
      resData = {
        rows: dataInfo,
        curpage: data1.curpage,
        eachpage: data1.eachpage,
        maxpage: data1.maxpage,
        maxpage: data1.maxpage
      };
      res.send(resData);
    } else if (ordersType == 2) {
      //已完成
      for (let i = 0; i < data.length; i++) {
        if (data[i].status.indexOf("已完成") > -1) {
          dataInfo.push(data[i]);
        }
      }
      resData = {
        rows: dataInfo,
        curpage: data1.curpage,
        eachpage: data1.eachpage,
        maxpage: data1.maxpage,
        maxpage: data1.maxpage
      };
      res.send(resData);
    }
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
  let id = req.params.id;
  console.log("取消订单", id);
  let data = await client.delete("/orders/" + id);
  res.send(data);
});

// 修改状态
router.put("/:id", async function(req, res) {
  let id = req.params.id;
  // console.log(id,'请求的id')
  let status = req.body.status;
  let data = await client.get("/orders/" + id);
  if (status.indexOf("服务") > -1) {
    data.status = "服务已完成";
  } else if (status.indexOf("订单") > -1) {
    data.status = "订单已完成";
  }
  delete data._id;
  console.log(data, "修改");
  let info = await client.put("/orders/" + id, data);
  console.log(info, "data1修改状态");
  res.send(info);
});

//用户修改订单状态
router.put("/users/:id", async function(req, res) {
  let id = req.params.id;
  let data = await client.get("/orders/" + id);
  console.log(data, "修改状态");
  // 用户确认完成修改users为ok
  data.users = "ok";
  delete data._id;
  let data1 = await client.put("/orders/" + id, data);
  res.send(data);
});

// 商家修改订单状态，
router.get("/users/:id", async function(req, res) {
  let id = req.params.id;
  let data = await client.get("/orders/" + id);
  console.log(data, "修改状态");
  // 用户确认完成修改users为ok
  if (!!data.users) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0 });
  }
});

// 书写评论
router.put("/:id", async function(req, res) {
  let id = req.params.id;
  let evaluate = req.body.evaluate;
  let data = await client.get("/orders/" + id);
  data.evaluate = evaluate;
  let data1 = await client.put("/orders/" + id, data);
  console.log(data1, "data1写评论");
  res.send(data1);
});

module.exports = router;
