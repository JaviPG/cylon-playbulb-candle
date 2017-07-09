"use strict";

var PLAYBULBCANDLE = require("./lib/driver");

module.exports = {
  drivers: ["playbulb-candle"],

  driver: function(opts) {
    return new PLAYBULBCANDLE(opts);
  }
};
