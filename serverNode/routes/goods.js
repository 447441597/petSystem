var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('127.0.0.1:8080');
const multiparty = require('multiparty');
const path = require('path');
// 统计商品销售额路由
router.get('/getMoney', async function (req, res) {
  // console.log('进来了.................')
  let date = new Date();
  let date1 = JSON.stringify(date).substring(0, 11);
  date1 = date1.slice(6, 8)
  let data = await client.get('/orders');
  let info = [];
  let resData = {};
  data.map((i) => {
    if (i.status === "订单已完成") {
      info.push(i);
    }
  })
  let arr = []
  let temp = 0;
  let obj = {}
  // console.log(info,'2222222222222')
  // for(let i=0;i<arr.length;i++){
  //   let key = arr[i].time;

  // }
  for (let i = 0; i < 6; i++) {
    // console.log(date1)
    for (let j = 0; j < info.length; j++) {
      if (info[j].time.indexOf(date1) > 3) {
        console.log(info[j].time,'33333333333')
        console.log(info[i].money,'2222222222222')
        arr.push({
          time: info[j].time,
          price: info[i].money
        })
      }
    }
    date1--
    date1 = "0" + date1;
    if (date1 == 0) {
      date1 = 12
    }
  }
  let y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = y9 = y10 = y11 = y12 = 0;
  arr.map((item) => {
    if(item.time.indexOf(01)>2){
      y1++
    } else if(item.time.indexOf(02)>2){
      y2++
    } else if(item.time.indexOf(03)>2){
      y3++
    }else if(item.time.indexOf(04)>2){
      y4++
    }else if(item.time.indexOf(05)>2){
      y5++
    }else if(item.time.indexOf(06)>2){
      y6++
    }else if(item.time.indexOf(07)>2){
      y7++
    }else if(item.time.indexOf(08)>2){
      y8++
    }else if(item.time.indexOf(09)>2){
      y9++
    }else if(item.time.indexOf(10)>2){
      y10++
    }else if(item.time.indexOf(11)>2){
      y11++
    }else if(item.time.indexOf(12)>2){
      y12++
    }
  })

  let ratio = {
    y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12
  }
  let ass = {}
  for(let i in ratio){
    if(ratio[i] > 0){
      ass[i] = ratio[i]
    }
  }
  // console.log(arr, '----------')
  res.send(ass)
})

//服务商品金额
router.get('/fw', async function (req, res) {
  console.log('进来了服务.................')
  let date = new Date();
  let date1 = JSON.stringify(date).substring(0, 11);
  date1 = date1.slice(6, 8)
  let data = await client.get('/orders');
  let info = [];
  let resData = {};
  data.map((i) => {
    if (i.status =="服务已完成") {
      info.push(i);
    }
  })
  let arr = []
  let temp = 0;
  let obj = {}
  // console.log(info,'111111')
  // for(let i=0;i<arr.length;i++){
  //   let key = arr[i].time;

  // }
  for (let i = 0; i < 6; i++) {
    // console.log(date1)
    for (let j = 0; j < info.length; j++) {
      if (info[j].time.indexOf(date1) > 3) {
        console.log(info[i],"898989")
        arr.push({
          time: info[j].time,
          price: info[i].money
        })
      }
    }
   
    date1--
    date1 = "0" + date1;
    if (date1 == 0) {
      date1 = 12
    }
  }
  console.log(arr,'arr')
  let y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = y9 = y10 = y11 = y12 = 0;
  arr.map((item) => {
    if(item.time.indexOf(01)>2){
      y1++
    } else if(item.time.indexOf(02)>2){
      y2++
    } else if(item.time.indexOf(03)>2){
      y3++
    }else if(item.time.indexOf(04)>2){
      y4++
    }else if(item.time.indexOf(05)>2){
      y5++
    }else if(item.time.indexOf(06)>2){
      y6++
    }else if(item.time.indexOf(07)>2){
      y7++
    }else if(item.time.indexOf(08)>2){
      y8++
    }else if(item.time.indexOf(09)>2){
      y9++
    }else if(item.time.indexOf(10)>2){
      y10++
    }else if(item.time.indexOf(11)>2){
      y11++
    }else if(item.time.indexOf(12)>2){
      y12++
    }
  })

  let ratio = {
    y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12
  }
  let ass = {}
  for(let i in ratio){
    if(ratio[i] > 0){
      ass[i] = ratio[i]
    }
  }
  // console.log(arr, '----------')
  res.send(ass)
})
//查询所有的商品
let which;
router.get('/data', async function (req, res) {
  let page = req.query.page;
  let rows = req.query.rows;
  let type = req.query.type;
  let value = req.query.value;
  if (type && value) {
    console.log('模糊查询');
    which = {
      [type]: value
    }
  } else {
    console.log('查询全部');
    which = {};
  }
  let data = await client.get('/goods', {
    page,
    rows,
    submitType: 'findJoin',
    ref: 'shops',
    ...which
  });
  res.send(data);
});

//根据ID查询
router.get('/:id', async function (req, res) {
  let id = req.params.id;
  let data = await client.get('/goods/' + id);
  res.send(data)
});
//增加商品
router.post('/add', async function (req, res) {
  let {
    goodsName,
    type,
    material,
    applyGuige,
    exGuige,
    Packing,
    taste,
    specialFunc,
    addr,
    keepDate,
    productionDate,
    provider,
    features,
    price,
    images,
    miniimg,
    number,
    shopsId
  } = req.body
  console.log(req.body, "123")
  let data = await client.post('/goods', {
    goodsName,
    type,
    material,
    applyGuige,
    exGuige,
    Packing,
    taste,
    specialFunc,
    addr,
    keepDate,
    productionDate,
    provider,
    features,
    price,
    images,
    miniimg,
    number,
    shops: {
      $ref: 'shops',
      $id: shopsId
    }
  });
  console.log(data, 'goods1111111111111111')
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
router.put('/:id', async function (req, res) {
  let id = req.params.id;
  let {
    goodsName,
    type,
    material,
    applyGuige,
    exGuige,
    Packing,
    taste,
    specialFunc,
    addr,
    keepDate,
    productionDate,
    provider,
    features,
    price,
    images,
    number,
    miniimg
  } = req.body
  console.log(req.body,'2222')
  let data = await client.put('/goods/' + id, {
    goodsName,
    type,
    material,
    applyGuige,
    exGuige,
    Packing,
    taste,
    specialFunc,
    addr,
    keepDate,
    productionDate,
    provider,
    features,
    price,
    images,
    number,
    miniimg
  });
  res.send(data);
})

//上传图片
router.post('/upload', function (req, res) {
  let form = new multiparty.Form({
    uploadDir: 'public/images' //保存的路径
  });
  form.parse(req, function (err, fields, files) {
    let key = Object.keys(files)[0]; //获取上传信息中的key
    console.log(key)
    if (err) {
      res.send(err);
    } else {
      res.send(path.basename(files[key][0].path)) //根据key获取上传的文件名并返回
      console.log()
    }
  })
});




module.exports = router