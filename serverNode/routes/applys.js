var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET home page. */

//增加
router.post('/',async function(req,res){
  let temp = 0;
  let {storeName,businessNum,legalPerson,tel,address,feature,vipLeval,rate,assistant} = req.body;
  console.log(req.body);
  let data = await client.post('/shops',{storeName,businessNum,legalPerson,tel,address,feature,vipLeval,rate,assistant,temp});
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

module.exports = router;
