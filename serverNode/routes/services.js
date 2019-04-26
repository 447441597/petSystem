var express = require("express");
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");

let which;
router.get("/servicesNum", async function(req, res) {
  let { shopsId } = req.query;
  let sta = 1;
  let ordersType = 2;
  let data = await client.get("/orders", {
    submitType: "findJoin",
    ref: ["services", "shops"]
  });
  let serviceName = await client.get("/services");
  let finishOrder = [];
  let serviceNames = [];

  // console.log(serviceName)
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].shops._id,"id")
    if (data[i].status == "服务已完成" && data[i].shops._id == shopsId) {
      finishOrder.push(data[i]);
    }
  }
  for (let i = 0; i < serviceName.length; i++) {
    serviceNames.push(serviceName[i].serviceName);
  }
  console.log(finishOrder, "finishOrder");
  // console.log(data,"获取的数据");
  // res.send(finishOrder);
  let monthNum = [];
  console.log(serviceNames, "serviceNames");

  let arr = [];
  let totalArr = [];
  for (let i = 0; i < serviceNames.length; i++) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9 = 0;
    let count10 = 0;
    let count11 = 0;
    let count12 = 0;

    for (let j = 0; j < finishOrder.length; j++) {
      if (serviceNames[i] == finishOrder[j].services.serviceName) {
        let tempArr = finishOrder[j].time.split("-");
        console.log(tempArr[1], "qqqqqqqqqqqqqqqqqqqqqqq", tempArr);
        switch (tempArr[1]) {
          case "01":
            count1++;
            break;
          case "02":
            count2++;
            break;
          case "03":
            //  console.log(tempArr[1])
            count3++;
            break;
          case "04":
            count4++;
            break;
          case "05":
            count5++;
            break;
          case "06":
            count6++;
            break;
          case "07":
            count7++;
            break;
          case "08":
            count8++;
            break;
          case "09":
            count9++;
            break;
          case "10":
            count10++;
            break;
          case "11":
            count11++;
            break;
          case "12":
            count12++;
            break;
          default:
            break;
        }
      }
    }
    let arr = [
      count1,
      count2,
      count3,
      count4,
      count5,
      count6,
      count7,
      count8,
      count9,
      count10,
      count11,
      count12
    ];
    totalArr.push(arr);
    console.log(totalArr, "arrTotal");
  }
  let resultData = [];
  for (let i = 0; i < 12; i++) {
    let arr = [];
    for (let j = 0; j < totalArr.length; j++) {
      arr.push(totalArr[j][i]);
    }
    resultData.push(arr);
  }
  console.log(resultData);
  res.send({ 
    resultData:resultData,
    serviceNames:serviceNames
   });
  // for (let k = 0; k < finishOrder.length; k++) {
  //   let tempArr = finishOrder[j].time.split("-");
  //   let date = ~~tempArr[1];
  //   console.log(finishOrder[j].time)
  //   console.log(i,"i",date,"date",)
  //   console.log(serviceNames[j],finishOrder[k].services.serviceName,"name")
  //   if (
  //     serviceNames[j] == finishOrder[k].services.serviceName &&
  //     date == i
  //   ) {
  //     console.log("这是第"+i+"个月###########################################")
  //     if (i == 1) {
  //       count1++;
  //     }
  //     if (i == 2) {
  // count2++;
  // }
  // if (i == 3) {
  //   count3++;
  //   console.log(count3);
  // }
  // if (i == 4) {
  //   count4++;
  // }
  // if (i == 5) {
  //   count5++;
  // }
  // if (i == 6) {
  //   count6++;
  // }
  // if (i == 7) {
  //   count7++;
  // }
  // if (i == 8) {
  //   count8++;
  // }
  // if (i == 9) {
  //   count9++;
  // }
  // if (i == 10) {
  //   count10++;
  // }
  // if (i == 11) {
  //   count11++;
  // }
  // if (i == 12) {
  //   count12++;
  // }
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 2){
  //   count2++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 3){
  //   count3++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 4){
  //   count4++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 5){
  //   count5++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 6){
  //   count6++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 7){
  //   count7++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 8){
  //   count8++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 9){
  //   count9++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 10){
  //   count10++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 11){
  //   count11++;
  // }
  // if(serviceNames[j].serviceName == finishOrder[k].services.serviceName && tempArr[1] == 12){
  //   count12++;
  // }
  // }
  // if (i == 1) {
  //   arr.push(count1);
  // }
  // if (i == 2) {
  //   arr.push(count2);
  // }
  // if (i == 3) {
  //   arr.push(count3);
  // }
  // if (i == 4) {
  //   arr.push(count4);
  // }
  // if (i == 5) {
  //   arr.push(count5);
  // }
  // if (i == 6) {
  //   arr.push(count6);
  // }
  // if (i == 7) {
  //   arr.push(count7);
  // }
  // if (i == 8) {
  //   arr.push(count8);
  // }
  // if (i == 9) {
  //   arr.push(count9);
  // }
  // if (i == 10) {
  //   arr.push(count10);
  // }
  // if (i == 11) {
  //   arr.push(count11);
  // }
  // if (i == 12) {
  //   arr.push(count12);
  // }
  // console.log(arr,"每一个服务")

  // }
  // monthNum.push(arr);

  console.log(monthNum, "monthNum");
});
router.get("/", async function(req, res) {
  let page = req.query.page; //接收到的页码数
  let rows = req.query.rows; //接收到的行数
  let type = req.query.type;
  let value = req.query.value;

  if (type && value) {
    which = {
      [type]: value //$regex:value主要作用是模糊查询，相当于正则表达式一样
    };
  } else {
    which = {};
  }
  let data = await client.get("/services", {
    page,
    rows,
    submitType: "findJoin",
    ref: ["shops"],
    ...which
  });
  res.send(data);
});

//根据ID查询服务
router.get("/:id", async function(req, res) {
  let id = req.params.id;
  console.log(id);
  let data = await client.get("/services/" + id);
  res.send(data);
});

//增加服务
router.post("/", async function(req, res) {
  let {
    serverDate,
    serviceName,
    type,
    time,
    applyGuige,
    serverGuige,
    useTime,
    shopsId,
    price,
    level,
    serverType
  } = req.body;
  console.log(serverType);
  let data = await client.post("/services", {
    serverDate,
    serviceName,
    type,
    time,
    applyGuige,
    serverGuige,
    useTime,
    price,
    shops: { $ref: "shops", $id: shopsId },
    serverType,
    level
  });
  res.send(data);
  console.log(data);
});

//修改服务
router.put("/:_id", async function(req, res) {
  let id = req.params._id;
  let {
    serviceName,
    type,
    time,
    applyGuige,
    serverGuige,
    useTime,
    shopsId,
    price,
    level,
    serverType
  } = req.body;

  console.log("xiugai", id, price);
  //  console.log(name,type,time,applyGuige,serverGuige,useTime,waiterId,price,types)
  let data = await client.put("/services/" + id, {
    serviceName,
    type,
    time,
    applyGuige,
    serverGuige,
    useTime,
    price,
    serverType,
    level
  });
  res.send(data);
});

//删除服务
router.delete("/:_id", async function(req, res) {
  let _id = req.params._id;
  let data = await client.delete("/services/" + _id);
  console.log(data);
  res.send(data);
});

router.get("/serverTypes", async function(req, res) {
  // let data = await client.get('/serverTypes');
  console.log(1111111111111111111);
  // console.log(data);
  res.send("1111111111111111111111111111");
});

module.exports = router;
