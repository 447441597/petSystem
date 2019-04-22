var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");
/* GET home page. */

//增加
router.post('/',async function(req,res){
  let name = req.body.name;
  let businessNum = req.body.businessNum;
  let legalPerson = req.body.legalPerson;
  let tel = req.body.tel;
  let feature = req.body.feature;
  let vipLeval = req.body.vipLeval;
  let rate = req.body.rate;
  let arr = req.body.arr
  console.log(arr);
  let data = await client.post('/shops',{name,businessNum,legalPerson,tel,feature,vipLeval,rate,arr});
  res.send(data);
  console.log(data)
})

module.exports = router;
