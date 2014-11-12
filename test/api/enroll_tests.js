'use strict';
process.env.MONGO_URL = 'mongodb://localhost/school_test';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../../server');

var expect = chai.expect;

describe('Visualize Enrollment', function() {
  it('should be able to get an index of a students', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/students')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.be.true;
      done();
    });
  });

  it('should be able to get an index of a course', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/courses')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.be.true;
      done();
    });
  });
});
