var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
const multiparty = require('multiparty');
const path = require('path');
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
  let {goodsName,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images,miniimg,number,shopsId}=req.body
  console.log(req.body,"123")
  let data = await client.post('/goods',{goodsName,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images,miniimg,number,shops:{$ref:'shops',$id:shopsId}});
 console.log(data,'goods1111111111111111')
  res.send(data);
})

//删除商品
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let data = await client.delete("/goods/" + id);
  res.send(data)
})
//根据ID查询
router.get('/:id', async function (req, res) {
  let id = req.params.id;
  let data = await client.get('/goods/' + id);
  console.log(data,"qeeeeeeeeeeeeee")
  res.send(data)
});

//修改商品
router.put('/:id',async function(req,res){
  let id = req.params.id;
  let {goodsName,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images,number,miniimg}=req.body
  console.log(req.body)
  let data = await client.put('/goods/'+id,{goodsName,type,material,applyGuige,exGuige,Packing,taste,specialFunc,addr,keepDate,productionDate,provider,features,price,images,number,miniimg});
  res.send(data);
})

//上传图片
router.post('/upload',function(req,res){
  let form = new multiparty.Form({
    uploadDir:'public/images'  //保存的路径
  });
  form.parse(req,function(err,fields,files){
    let key = Object.keys(files)[0]; //获取上传信息中的key
    console.log(key)
    if(err){
      res.send(err);
    }else{
      res.send(path.basename(files[key][0].path)) //根据key获取上传的文件名并返回
      console.log()
    }
  })
})
module.exports = router
