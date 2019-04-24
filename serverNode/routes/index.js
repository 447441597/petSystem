var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//获取session路由
router.get('/getSession', function (req, res) {
  res.send(req.session.user || {});
});

//删除session路由
router.get('/removeSession', function (req, res) {
  req.session.user = null;
  res.send({
    status: 1
  });
});

module.exports = router;
