var redisDB = require('../modules/redisDB.js');

module.exports = function (app) {
  console.log('I am routes');
  app.route('/').get(function (req, res, next) {
    redisDB.multi([
      ['lrange','peiliaos', 0, -1],
      ['lrange','uPeiliaos', 0, -1]
      ]).exec(function (err, replies) {
        if (err) {
          console.log(err);
          return false;
        }
      var 
        peiliaos = [],
        uPeiliaos = [];

      replies[0].forEach(function (x) {
        var peiliao = JSON.parse(x);
        peiliaos.push(peiliao);
      });
      replies[1].forEach(function (x) {
        var uPeiliao = JSON.parse(x);
        uPeiliaos.push(uPeiliao);
      });

      var renderData = {
        title : '闷子聊天模拟器',
        peiliaos : peiliaos,
        uPeiliaos : uPeiliaos,
        testdata : 'this is test data'
      };

      res.render('index2', renderData);
    });
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
        // response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        // response.write('error');
        // response.end();
        response.send('error');
        console.log('can not get the joke, inde :' + req.param('index'));
        return null;
      }
      response.send(data);
    });
  });

  app.route('/getJokeNumber').get(function (req, res) {
    redisDB.llen("jokes", function (err, data) {
      if (err) {
        console.log('fail to get the data' + err);
        return null;
      }
      if (data === null) {
        console.log('can not get joke number');
        res.send('error');
        return;
      }
      res.send({jokeNumber : data});
    });
  });

  app.route('/getPeiliaos').get(function (req, res) {
    redisDB.multi([
      ['lrange','peiliaos', 0, -1],
      ['lrange','uPeiliaos', 0, -1]
      ]).exec(function (err, replies) {
        if (err) {
          console.log(err);
          return false;
        }
      var 
        peiliaos = [],
        uPeiliaos = [];

      replies[0].forEach(function (x) {
        var peiliao = JSON.parse(x);
        peiliaos.push(peiliao);
      });
      replies[1].forEach(function (x) {
        var uPeiliao = JSON.parse(x);
        uPeiliaos.push(uPeiliao);
      });
      var tempData = {
        peiliaos : peiliaos,
        uPeiliaos : uPeiliaos
      };
      res.send(tempData);
      res.end();
    });
  });
};