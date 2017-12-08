var assert = require('assert');

describe('hooks', function() {
  
  // The before hook runs code before any of the tests within
  // describe are run and runs once. Here you might put code in
  // that setups a state that only need to be done once for the
  // whole test run.
  before(function() {
    console.log("   - I will run once before the tests are run");
  });

  // The after hook runs code after all of the tests within
  // describe have been run and runs once. Here you might put
  // code in that tears down all the accumulated data that was
  // created from your tests.
  after(function() {
    console.log("   - I will run once after the tests are run");
  });

  // Here we have two tests to run to demonstrate each hooks
  // behaviour
  it('Test 1', function() {
    var result = 1 - 1;
    
    assert.equal(result, 0);
  });

  it('Test 2', function() {
    var result = 1 * 1;
    
    assert.equal(result, 1);
  });
  
  // The before each hook runs code before each test is run. Here
  // you might put code that creates new data sets for each test
  beforeEach(function() {
    console.log("   - I will run before each test is run");
  });

  // The after each hook runs code after each test is run. Here 
  // you might put code that tears down state or data that needs to 
  // be cleared out before the next test can be run
  afterEach(function() {
    console.log("   - I will run after each test is run");
  });

});