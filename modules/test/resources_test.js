// resources_test.js
// Code to test the resources.js file
var resources = require('../resources.js');
var expect = require('chai').expect; // npm package for expect

describe('Resources', function() {

  beforeEach(function(done) {
    resources.gold = 100;
    resources.food = 20;
    done(); // need to call done to move on
  });

  it('should change the amount of gold', function() {
    // test case code
    // steps:
    // 1. setup stage. call some functions, etc.
    // 2. run the code you are testing
    resources.changeGold(-10)
    // 3. check that actual return value is the same as the expected return value.
    expect(resources.gold).to.eql(90);
  });
  it('should change the amount of food', function() {
    // test case code
    // steps:
    // 1. setup stage. call some functions, etc.
    // 2. run the code you are testing
    resources.changeFood(-10)
    // 3. check that actual return value is the same as the expected return value.
    expect(resources.food).to.eql(10);
  });
  it('should not change the amount of gold below 0', function() {
    // test case code
    // steps:
    // 1. setup stage. call some functions, etc.
    // 2. run the code you are testing
    resources.changeGold(-101)
    // 3. check that actual return value is the same as the expected return value.
    expect(resources.gold).to.eql(0)
  });
});
