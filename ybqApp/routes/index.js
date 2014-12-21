var redisDB = require('../modules/redisDB.js');

module.exports = function (app) {
  console.log('I am routes');
  app.route('/').get(function (req, res, next) {
    console.log('get');
    redisDB.hgetall("peiliaos", function (err, data) {
      if (err) {
        console.log('fail to get name' + err);
        redisDB.quit();
        return null;
      }
      if (data === null) {
        console.log('no myname data');
      } 
      console.log('data.zhoumenzi:' + data.zhoumenzi);
      var zhoumenzi = JSON.parse(data.zhoumenzi);
      // var zhoumenzi = data.zhoumenzi.parseJSON();
      console.log('data.zhoumenzi.name:' + zhoumenzi.name);
      // response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
      // response.write(myname);//可以获得数据库中的myname;
      // response.end();
    });

    res.render('index2', {
      title : '闷子聊天模拟器',
      peiliaos : {
      	menzi : {
      		id : 'zhoumenzi',
      		name : '周menzi',
          xxx : '21333'
      	},
      	yujiong : {
      		id : 'yujiong',
      		name : '玉扃'
      	}
      },
      peiliao : {
        id : 'zhoumenzi',
        xxx : '213'
      },
      testdata : 'this is test data'
    });
  });

  app.route('/selectGender').get(function (req, res, next) {
  	res.render('selectGender');
  });
};