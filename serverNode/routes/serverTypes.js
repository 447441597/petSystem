var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');

let which;
router.get('/',async function(req,res){
    let data = await client.get('/serverTypes');
    console.log(data);
    res.send(data);
})
module.exports = router;
