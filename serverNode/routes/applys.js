var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET home page. */

//增加
router.post('/',async function(req,res){
  let {name,businessNum,legalPerson,tel,address,feature,vipLeval,rate,arr} = req.body;
  console.log(req.body);
  let data = await client.post('/shops',{name,businessNum,legalPerson,tel,feature,vipLeval,rate,arr});
  res.send(data);
  console.log(data)
})

module.exports = router;
