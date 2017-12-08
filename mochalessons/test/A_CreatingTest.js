// We need someway to assert if a value is true to return a pass/fail
// result. We'll look into assertions in more detail later, but for now
// we will use Nodes' standard assert library.
var assert = require('assert');

// We start by using the describe function in which our tests are created.
// As you will see when you run this test, the string we provide is added
// into the report to make it more readable and give your tests context.
describe('Maths calculation', function() {

  // The 'it' function is next to call, where we can name our test and then
  // execute the code we want to run for our test.
  it('should return the correct value when two numbers are added', function() {
    // Here is the code for our test that is triggered by Mocha
    var result = 1 + 1;
    
    assert.equal(result, 2);
  });

});