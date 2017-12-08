// First of all we need to import the chai library to use in our
// tests. Chai comes in three different flavours should, expect and 
// assert, so we are going to use the expect library.
var expect = require('chai').expect;

describe('Assertion demonstration', function() {

  it('should tells us whether our test has passed or failed', function() {
    var result = 10 / 5;

    // We pass our object or value that we want to assert into the
    // expect function and then call a chain of functions that allow
    // us to write our assertions out in plain language so we know 
    // exactly what we are asserting.

    // We can assert to see if our value exists
    expect(result).to.exist;
    expect(result).to.not.be.null;

    // We can assert to see if our value is of a specific data type
    expect(result).to.be.a('number');

    // We can assert that the value meets certain expectations
    expect(result).to.equal(2);
    expect(result).to.not.equal(10);
  });

});