'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({name: String, courses:
  [{type: Schema.Types.ObjectId, ref: 'Course' }]});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;
