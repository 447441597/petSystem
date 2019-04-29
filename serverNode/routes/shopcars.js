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
      ref: ["petOwns","goods"],
      ...which
    });
    console.log(data);
    res.send(data);
});

//根据ID查询
router.get("/:id",async function(req,res){
    let id = req.params.id;
    let data = await client.get("/services/" + id,{submitType: "findJoin",ref: ["petOwns","goods"]});
    res.send(data);
})


//添加购物车
router.post("/",async function(req,res){
    let {
       count,
       petOwnId,
       goodId,
       goodsName,
        sigelPrice
      } = req.body;
      let data = await client.post("/shopcars", {
        count,
        goodsName:goodsName,
        sigelPrice:sigelPrice,
        goodId:goodId,
        petOwns: { $ref: "petOwns", $id: petOwnId },
        goods:{$ref:"goods",$id:goodId}
      });
      res.send(data);
      console.log(data);
});

//修改购物车
router.put("/:id",async function(req,res){
    console.log("修改")
    let id = req.params.id
    let {
        goodsName,
        sigelPrice,
        count,
        petOwnId,
        goodId
       } = req.body;
       console.log(count,petOwnId,goodId);
       // console.log(serverType);
       let data = await client.put("/shopcars/"+id, {
        goodsName,
        sigelPrice,
         count,
         goodId:goodId,
         petOwns: {$ref: "petOwns", $id: petOwnId },
         goods:{$ref:"goods",$id:goodId}
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