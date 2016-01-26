'use strict';

var DateHandler = require(process.cwd() + '/app/routes/dateHandler.js');

module.exports = function (app) {
  var dateHandler = new DateHandler();
  app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
      });
  app.route('/:stamp')
    .get(function(req, res) {
      //var stamp = decodeURI(req.params.stamp);
      var dateHandler = new DateHandler(req.params.stamp);
      //var date = new Date(stamp);
      res.send(JSON.stringify(dateHandler)); });
};

