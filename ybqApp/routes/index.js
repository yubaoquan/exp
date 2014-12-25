var redisDB = require('../modules/redisDB.js');

module.exports = function (app) {
  console.log('I am routes');
  app.route('/').get(function (req, res, next) {
    redisDB.lrange("peiliaos", 0, -1, function (err, data) {
      if (err) {
        console.log('fail to get name' + err);
        redisDB.quit();
        return null;
      }
      if (data === null) {
        console.log('no data');
      }

      var peiliaos = [];
      for (var x in data) {
        var peiliao = JSON.parse(data[x]);
        peiliaos.push(peiliao);
      }
      var renderData = {
        title : '闷子聊天模拟器',
        peiliaos : peiliaos,
        testdata : 'this is test data'
      };

      res.render('index2', renderData);
      // next(123);
    });

    redisDB.multi([
      ['lrange','peiliaos',0, -1],
      ['llen','uPeiliaos']
      ]).exec(function (err, replies) {
        if (err) {
          console.log(err);
          return false;
        }
       console.log('rep0:----->' + replies[0]);
       console.log('rep1:----->' + replies[1]);
    });
    // function (data) {
    //   console.log('next:' + data);
    // }
  });

  app.route('/selectGender').get(function (req, res, next) {
  	res.render('selectGender');
  });

  app.route('/getAJoke/:index?').get(function (req, response) {
    console.log('get a joke from db lindex:' + req.param('index'));

    redisDB.lindex("jokes",req.param('index'), function (err, data) {
      if (err) {
        console.log('fail to get the data' + err);
        //redisDB.quit();
        return null;
      }
      if (data === null) {
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        response.write('error');//可以获得数据库中的myname;
        response.end();
        return null;
      }

      response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
      response.write(data);//可以获得数据库中的myname;
      response.end();
    });
  });

  app.route('/getJokeNumber').get(function (req, res) {
    redisDB.llen("jokes", function (err, data) {
      if (err) {
        console.log('fail to get the data' + err);
        return null;
      }
      res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
      if (data === null) {
        res.write('error');//可以获得数据库中的myname;
        return;
      }
      // console.log('data:' + data);
      res.write(data.toString());//可以获得数据库中的myname;
      res.end();
    });
  });
};