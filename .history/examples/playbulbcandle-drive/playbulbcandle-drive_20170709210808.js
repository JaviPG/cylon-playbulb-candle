"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bluetooth: { adaptor: "central", uuid: "d03972a24e55", module: "cylon-ble" }
  },

  devices: {
    playbulbcandle: { driver: "playbulb-candle" }
  },

  work: function(my) {
    my.playbulbcandle.turn_off;

    after((2).seconds(), function() {
      my.playbulbcandle.driveDistance(0, 10, 0, 0);
    });

    after((3).seconds(), function() {
      my.playbulbcandle.setHeadLED(1, 1, 1, 1);
    });
  }
}).start();
