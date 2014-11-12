'use strict';
var Student = require('../models/student');

module.exports = function(app) {
  app.get('/api/students', function(req, res) {
    Student.find({}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });
  app.get('/api/students/:id', function(req, res) {
    Student.findOne({'_id': req.params.id}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });
};
