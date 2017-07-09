"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bluetooth: { adaptor: "central", uuid: "d03972a24e55", module: "cylon-ble" }
  },

  devices: {
    battery: { driver: "ble-battery-service" },
    deviceInfo: { driver: "ble-device-information" },
    playbulbcandle: { driver: "playbulb-candle" }
  },

  work: function(my) {
    my.deviceInfo.getManufacturerName(function(err, data) {
      if (err) {
        console.log("error:", err);
        return;
      }

      console.log("data:", data);

      my.playbulbcandle.setColor('00', '00', '00', 'ff');
    });
  }
}).start();
