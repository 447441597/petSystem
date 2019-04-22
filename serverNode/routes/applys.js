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

let which;
router.get('/',async function(req, res) {
  let page = req.query.page;//接收到的页码数
  let rows = req.query.rows;//接收到的行数
  let type = req.query.type;
  let value = req.query.value;
  if(type && value){
    console.log('模糊查询');
     which = {
       [type]:value//$regex:value主要作用是模糊查询，相当于正则表达式一样
     }
     console.log(which);
  } else {
    console.log('查询全部');
    which = {};
  }
  let data = await client.get('/students',{page,rows,...which});
  res.send(data);
});

module.exports = router;
