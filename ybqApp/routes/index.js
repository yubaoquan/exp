var redisDB = require('../modules/redisDB.js');

module.exports = function (app) {
  console.log('I am routes');
  app.route('/').get(function (req, res, next) {
    redisDB.hgetall("peiliaos", function (err, data) {
      if (err) {
        console.log('fail to get name' + err);
        redisDB.quit();
        return null;
      }
      if (data === null) {
        console.log('no myname data');
      }

      var peiliaos = [];

      // console.log('data:' + data.zhoumenzi);
      for (var x in data) {
        var peiliao = JSON.parse(data[x]);
        peiliaos.push(peiliao);
      }
      // console.log(data['zhoumenzi']);
      // var zhoumenzi = JSON.parse(data.zhoumenzi);
      // console.log('data.zhoumenzi.name:' + zhoumenzi.name);
      var renderData = {
      title : '闷子聊天模拟器',
        peiliaos : peiliaos,
        testdata : 'this is test data'
      };

      res.render('index2', renderData);
  });
    });

  app.route('/selectGender').get(function (req, res, next) {
  	res.render('selectGender');
  });
};