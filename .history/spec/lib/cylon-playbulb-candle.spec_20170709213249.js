"use strict";

var playbulbcandle = lib("../");

var Driver = lib("driver");

describe("Cylon.PLAYBULBCANDLE", function() {
  describe("#drivers", function() {
    it("is an array of provided drivers", function() {
      expect(playbulbcandle.drivers).to.be.eql(["playbulb-candle"]);
    });
  });

  describe("#driver", function() {
    it("returns an instance of the PlayBulb Candle", function() {
      var args = { adaptor: {} };
      expect(playbulbcandle.driver(args)).to.be.instanceOf(Driver);
    });
  });
});
