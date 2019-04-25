var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
const multiparty = require("multiparty");
const path = require("path")
client.url('localhost:8080');
/* GET home page. */

router.get('/', async function (req, res) {
  //   console.log("来了")
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  let data = await client.get('/shops');
  res.send(data);
  console.log(data, "123")
});


//增加
router.post('/',async function(req,res){
  let status = 0
  let {storeName,businessNum,legalPerson,tel,address,feature,vipLeval,rate,assistant,active,businessImage,headImage} = req.body;
  console.log(req.body);
  let data = await client.post('/shops',{storeName,businessNum,legalPerson,tel,address,feature,vipLeval,rate,assistant,status,active,businessImage,headImage});
  res.send(data);
  console.log(data)
})

//上传图片
router.post("/upload",function(req,res){
  let form = new multiparty.Form({
    uploadDir:"public/images"
  });
  form.parse(req,function(err,fields,files){
    let key = Object.keys(files)[0];
    console.log(key,"key")
    if(err){
      res.send(err);
    }else{
      res.send(path.basename(files[key][0].path))
    }
  })
})

router.get('/temp',async function(req,res){
  console.log(req.query,'query')
  let data = await client.get('/shops',{submitType:"findJoin",ref:"users"});
  // console.log(data,'88888888888888888888888888')
  let info = await client.get('/users/'+data.users._id);
  // console.log(info,'999999999999999999')
  // if(data.temp == 0){
  //   //审核中
  //   res.send({status:1})
  // } else if(data.temp == 1){

  // }
})

module.exports = router;
