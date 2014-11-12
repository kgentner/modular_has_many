'use strict';
var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose
.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGO_URL ||
  'mongodb://localhost/enrollment');

//For this demo, these routes just provide
//a place to visualize each collection on get requests.
//Each individual student displays the array
//of corresponding enrolled courses id#'s
//and vice-versa for courses.
require('./routes/student_routes')(app);
require('./routes/course_routes')(app);

//Add pre-set students and courses,
var enrollDemo = require('./lib/enrollDemo');
enrollDemo();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
