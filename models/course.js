'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  title: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;
