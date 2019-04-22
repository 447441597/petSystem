var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");
/* GET home page. */

//增加
router.post('/',async function(req,res){
  let all = req.body
  console.log(all)
  let data = await client.post('/shops',{all});
  res.send(data);
  console.log(data)
})

module.exports = router;
