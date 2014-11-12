'use strict';
var Course = require('../models/course');

module.exports = function(app) {
  app.get('/api/courses', function(req, res) {
    Course.find({}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

  app.get('/api/courses/:id', function(req, res) {
    Course.findOne({'_id': req.params.id}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

};
