// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var bubbleSort = require('../bubbleSort.js');

describe('bubbleSort', function() {
  it('should be a function', function() {
    // expect(bubbleSort).to.exist;
    expect(typeof bubbleSort).to.be.equal('function');
  });
  it('should return an array in accending order', function() {
    var results = bubbleSort([4,2,3,1]);
    expect(results).to.be.eql([1,2,3,4]);
  })
});


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });