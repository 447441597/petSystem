var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url("localhost:8080");

let which;
router.get('/',async function(req, res) {
 let {page,rows,type,value} = req.query
//  console.log(req.query,"123")
  if(type && value){
     which = {
       [type]:value//$regex:value主要作用是模糊查询，相当于正则表达式一样
     }
  } else {
    which = {};
  }
  let data = await client.get('/shops',{page,rows,...which});
  res.send(data);
  console.log(data,"456")
});

module.exports = router;
