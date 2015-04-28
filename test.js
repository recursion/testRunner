var expect = chai.expect;

describe('Test', function() {
  it ("should be able to run tests", function() {
    var testArray = [1, 2, 3, 4, 'five'];
    expect(testArray.length).to.equal(5);
  });
});
