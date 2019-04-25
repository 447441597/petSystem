var express = require('express');
var router = express.Router();
// const db = require("ykt-mongo");
const client = require("ykt-http-client");
client.url("localhost:8080");

/* GET users listing. */

//判断手机号是否存在
router.get("/repeat", async function (req, res) {
  // //获取请求数据
  let phone = req.query.phone;
  console.log(phone)
  let data = await client.get("/users", {
    phone
  });
  console.log(data);
  if (data.length > 0) {
    res.send({
      status: 0
    });
  } else {
    res.send({
      status: 1
    });
  }


})

//平台管理系统用户注册
router.post("/AfterRegister", async function (req, res) {
  let privilege ="2" ; //2为平台管理员，

  //获取请求数据
  let {
    phone,
    pwd
  } = req.body;

  let data = await client.post("/users", {
    phone,
    pwd,
    privilege
  });
  res.send(data);
});

//宠主用户注册
router.post("/SpoilRegister", async function (req, res) {
  let privilege = "1"; //1为宠主用户注册
  //获取请求数据
  let {
    phone,
    pwd
  } = req.body;

  let data = await client.post("/users", {
    phone,
    pwd,
    privilege
  });
  res.send(data);
});

//门店管理员注册
router.post("/shopRegister", async function (req, res) {
  let privilege = "0"; //0为门店管理员用户
  //获取请求数据
  let {
    phone,
    pwd,
    shopsId,
    status,
  } = req.body;
  let data = await client.post("/users", {
    phone,
    pwd,
    privilege,
    shopsId,
    status,
  });
  res.send(data);
});

//用户登录
router.post("/login", async function (req, res) {
  //获取请求数据
  let {
    phone,
    pwd,
  } = req.body;
  let data = await client.post("/login", {
    phone,
    pwd
  });
  console.log(data)
  if (data.phone) {
     req.session.user = data;

    res.send(data);

  } else {
    res.send({
      //没有找到该用户返回0
      statues: 0
    })
  };

});


//根据id查询用户
router.get("/:id", async function (req, res) {
  //获取URL后面的参数id
  let id = req.params.id;
  let data = await client.get("/users/" + id);
  res.send(data);
});


//删除用户
router.delete("/:id", async function (req, res) {
  //获取URL后面的参数id
  let id = req.params.id;
  console.log(id)
  let data = await client.delete("/users/" + id);
  console.log(data)
  res.send(data);
});

//修改用户
router.put("/:id", async function (req, res) {
  //获取URL后面的参数id
  let id = req.params.id;
  //  let shopid="";
  //获取请求数据
  let {
    phone,
    pwd,
    privilege,
    shopsId,
    status,
  } = req.body;
  let data = await client.put("/users/" + id, {
    phone,
    pwd,
    privilege,
    shopsId,
    status
  });
  res.send(data);
});

//查询所有用户
router.get("/", async function (req, res) {
  //获取请求数据
  let {
    page,
    rows,
    type,
    value
  } = req.query;
  console.log("type, value", type, value)
  let option = {};
  if (type && value) {
    option = {
      [type]: value
    };
  };
  let data = await client.get("/users", {
    page,
    rows,
    ...option
  });
  console.log(data)
  res.send(data);
});




module.exports = router;