var expect = chai.expect;

describe('Tests', function() {


  describe("Basic expectation: ", function() {
    it ("should be able to run tests", function() {
      var testArray = [1, 2, 3, 4, 'five'];
      expect(testArray.length).to.equal(5);
    });
  });
  describe("Sinon Spys", function() {
    var spy = sinon.spy();
    it("should recieve arguments from function calls", function() {
      spy(1, 2, 3);
      expect(spy.calledWith(1, 2, 3));
    });
    it("should count the times the spy was called", function() {
      spy();
      spy(1, 2, 3);
      expect(spy.calledTwice);
    });
  });
  describe("Sinon stubs", function() {
    var sandbox;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();

      // stub some console methods
      sandbox.stub(window.console, "log");
      sandbox.stub(window.console, "error");
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });
    it("should log errors", function() {
      console.error("Man thats a nasty error!");

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "Man thats a nasty error!")
    });

    it("should log normally", function() {
      console.log("Nice log to console bro!");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Nice log to console bro!")
    });
  });
});
