var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let which;
router.get('/data',async function(req, res) {
  let page = req.query.page;
  let rows = req.query.rows;
  let type = req.query.type;
  let value = req.query.value;
  if(type && value){
    console.log('模糊查询');
     which = {
       [type]:value
     }
  } else {
    console.log('查询全部');
    which = {};
  }
  let data = await client.get('/goods',{page,rows,submitType:'findJoin',ref:'classes',...which});
  res.send(data);
});

module.exports = router;
