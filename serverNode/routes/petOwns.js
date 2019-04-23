var express = require('express');
var router = express.Router();
var client = require('ykt-http-client');
client.url("127.0.0.1:8080");


//查询
router.get('/', async (req, res) => {
  let { page, rows, type, value } = req.query;
  let option = {};
  if (type && value) {
    option = { [type]: value }
  }
  let data = await client.get("/petOwns", { page, rows, ...option });
  res.send(data);
});




module.exports = router;