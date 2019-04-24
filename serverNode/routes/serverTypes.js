var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");

let which;
//查询所有
router.get("/", async function(req, res) {
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;

  if (type && value) {
    which = {
      [type]: value //$regex:value主要作用是模糊查询，相当于正则表达式一样
    };
  } else {
    which = {};
  }
  let data = await client.get("/serverTypes", { page, rows, ...which });
  res.send(data);
});

//根据ID查询类型
router.get("/:id", async function(req, res) {
  let id = req.params.id;
  console.log(id);
  let data = await client.get("/serverTypes/" + id);
  res.send(data);
});

//增加类型
router.post("/", async function(req, res) {
  let { typeName, typePrice, shopsId } = req.body;
  // console.log(serverType);
  let data = await client.post("/serverTypes", {
    typeName,
    typePrice,
    shops: { $ref: "shops", $id: shopsId }
  });
  res.send(data);
  console.log(data);
});

//修改服务
router.put("/:_id", async function(req, res) {
  let id = req.params._id;
  let { typeName, typePrice, shopsId } = req.body;

  //   console.log("xiugai")
  //  console.log(name,type,time,applyGuige,serverGuige,useTime,waiterId,price,types)
  console.log(id);
  let data = await client.put("/serverTypes/" + id, {
    typeName,
    typePrice,
    shops: { $ref: "shops", $id: shopsId }
  });
  console.log(data, "修改类型");
  res.send(data);
});

//删除类型
router.delete("/:_id", async function(req, res) {
  let _id = req.params._id;
  let data = await client.delete("/serverTypes/" + _id);
  //   console.log(data);
  res.send(data);
});

module.exports = router;
