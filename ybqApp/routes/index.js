module.exports = function (app) {
  console.log('I am routes');
  app.route('/').get(function (req, res, next) {
    console.log('get');
    res.render('index2', {
      title : '闷子聊天模拟器',
      testdata : 'this is test data'
    });
  });
};