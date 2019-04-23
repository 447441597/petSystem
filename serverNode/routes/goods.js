var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//查询所有的商品
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

//增加商品
router.post('/add',async function(req,res){
  let {name,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images}=req.body
  
  let data = await client.post('/goods',{name,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images});
  res.send(data);
})

//删除商品
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let data = await client.delete("/goods/" + id);
  res.send(data)
})
module.exports = router
