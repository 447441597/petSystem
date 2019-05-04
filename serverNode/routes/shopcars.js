var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");
router.get('/',async function(req,res){
    let page = req.query.page; //接收到的页码数
    let rows = req.query.rows; //接收到的行数
    let type = req.query.type;
    let value = req.query.value;
  console.log('#######################33',type,value)
    if (type && value) {
      which = {
        [type]: value //$regex:value主要作用是模糊查询，相当于正则表达式一样
      };
    } else {
      which = {};
    }
    let data = await client.get("/shopcars", {
      page,
      rows,
      submitType: "findJoin",
      ref: ["petOwns","goods","services"],
      ...which
    });
    console.log(data);
    res.send(data);
});

//根据ID查询
router.get("/:id",async function(req,res){
    let id = req.params.id;
    let data = await client.get("/shopcars/" + id,{submitType: "findJoin",ref: ["petOwns","goods","services"]});
    res.send(data);
    console.log("根据id查询购物车数据*************************************************************")
})

//添加服务到购物车
router.post("/services",async function(req,res){
  let {
    totalMoney,
     count,
     petOwnId,
      sigelPrice,
      serviceId,
      serviceName
    } = req.body;
    let data = await client.post("/shopcars", {
      count,
      totalMoney,
      serviceId:serviceId,
      serviceName:serviceName,
      sigelPrice:sigelPrice,
      petOwns: { $ref: "petOwns", $id: petOwnId },
      services:{$ref:"services",$id:serviceId}
    });
    res.send(data);
    console.log(data);
});

//添加购物车商品
router.post("/",async function(req,res){
    let {
      totalMoney,
       count,
       petOwnId,
        sigelPrice
      } = req.body;
      let { goodId,goodsName} = req.body || "";
      let data = await client.post("/shopcars", {
        count,
        totalMoney,
        goodsName:goodsName,
        sigelPrice:sigelPrice,
        goodId:goodId,
        petOwns: { $ref: "petOwns", $id: petOwnId },
        goods:{$ref:"goods",$id:goodId},
      });
      res.send(data);
      console.log(data);
});

//修改购物车中的服务
router.put("/services/:id",async function(req,res){
  console.log("修改")
  let id = req.params.id
  let {
    totalMoney,
      serviceName,
      sigelPrice,
      count,
      petOwnId,
      serviceId
     } = req.body;
     // console.log(serverType);
     let data = await client.put("/shopcars/"+id, {
      totalMoney,
      serviceName,
      sigelPrice,
       count,
       petOwns: {$ref: "petOwns", $id: petOwnId },
       services:{$ref:"services",$id:serviceId}
     });
     res.send(data);
     console.log(data);
})
//修改购物车中的商品
router.put("/:id",async function(req,res){
    console.log("修改")
    let id = req.params.id
    let {
      totalMoney,
        goodsName,
        serviceName,
        sigelPrice,
        count,
        petOwnId,
        goodId,
        serviceId
       } = req.body;
       console.log(count,petOwnId,goodId);
       // console.log(serverType);
       let data = await client.put("/shopcars/"+id, {
        totalMoney,
        goodsName,
        sigelPrice,
         count,
         goodId:goodId,
         petOwns: {$ref: "petOwns", $id: petOwnId },
         goods:{$ref:"goods",$id:goodId},
       });
       res.send(data);
       console.log(data);
})


router.delete("/:id",async function(req,res){
    let id = req.params.id
       // console.log(serverType);
       let data = await client.delete("/shopcars/"+id);
       res.send(data);
       console.log(data);
});

module.exports = router;