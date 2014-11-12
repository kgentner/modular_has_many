'use strict';
var Course = require('../models/course');
var Student = require('../models/student');

var enrollDemo = function() {

  //Remove pre-existing courses and students
  //from collections... just to keep this demo small
  Course.collection.remove( function (err) { if (err) throw err; });
  Student.collection.remove( function (err) { if (err) throw err; });

  //Create students and courses
  var john = new Student({ name: 'John' });// to be enrolled in Math & English
  var hilda = new Student({ name: 'Hilda' });// to be enrolled in Math

  var math = new Course({ title: 'Math' });
  var english = new Course({ title: 'English' });

  //Update student's courses array
  john.courses.push(math);
  john.courses.push(english);
  hilda.courses.push(math);

  //Update course's students array
  math.students.push(john);
  math.students.push(hilda);
  english.students.push(john);

  //Save students and courses
  john.save(function (err) { if (err) return (err); });
  hilda.save(function (err) { if (err) return (err); });
  math.save(function (err) { if (err) return (err); });
  english.save(function (err) { if (err) return (err); });

};

module.exports = enrollDemo;

