"use strict";

var PLAYBULBCANDLE = lib("driver");

describe("Cylon.Drivers.PLAYBULBCANDLE", function() {
  var driver = new PLAYBULBCANDLE({
    device: { connection: "connect" }
  });

  it("needs tests", function() {
    expect(driver).to.be.an.instanceOf(PLAYBULBCANDLE);
  });
});
