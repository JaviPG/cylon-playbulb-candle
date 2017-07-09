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
    my.playbulbcandle.turnOff();
    after((2).seconds(), function() {
      my.playbulbcandle.turnOn();
    });

    after((3).seconds(), function() {
      my.playbulbcandle.setColor('00', '00', 'ff', '00');
    });
  }
}).start();
