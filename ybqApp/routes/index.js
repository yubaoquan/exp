var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log('abcccccd');
  res.render('index2', { title : '闷子聊天模拟器' });
});



module.exports = router;
