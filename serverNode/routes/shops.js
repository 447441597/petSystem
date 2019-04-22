var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");

/* GET home page. */
router.get('/',async function(req,res){
    console.log(123)
    let page = req.query.page;
    let rows = req.query.rows;
    let data = await client.get('/shops',{page,rows});
    res.send(data);
    console.log(data)
  })

module.exports = router;
