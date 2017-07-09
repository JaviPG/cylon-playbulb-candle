/*
 * cylon-playbulb-candle driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

/* eslint no-unused-vars: 0, camelcase: 0, max-len: 0 */

var Cylon = require("cylon");

var MIPReceiveDataService = "ffe0",
    MIPReceiveDataNotify = "ffe4",
    MIPSendDataService = "ffe5",
    MIPSendDataWrite = "ffe9";

var Codes = require("./codes");
// Future Version var Games = require("./games");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  this.Codes = Codes;
  // Future Version this.Games = Games;

  this.commands = {
    get_name: this.getName,
    set_effects: this.setEffects,
    set_color: this.setColor,
    turn_on: this.turnOn,
    turn_off: this.TurnOff
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Driver.prototype.start = function(callback) {
  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Get name device.
 *
 * @param {Function} callback function to call when done
 * @return {void}
 * @publish
 */
Driver.prototype.getName = function(callback) {
  var packet = new Buffer(1);
  packet[0] = this.Codes.GetName;

  this._writeServiceCharacteristic(MIPSendDataService,
    MIPSendDataWrite,
    packet,
    callback
  );
};

/**
 * Get name device.
 *
 * @param {Number} w red value
 * @param {Number} r red value
 * @param {Number} g green value
 * @param {Number} b blue value
 * @param {Number} m mode value
 * @param {Number} s speed value
 * @param {Function} callback function to call when done
 * @return {void}
 * @publish
 */
Driver.prototype.setEffects = function(w, r, g, b, m, s, callback) {
  var packet = new Buffer(7);
  packet[0] = this.Codes.GetName;
  packet[1] = w;
  packet[2] = r;
  packet[3] = g;
  packet[4] = b;
  packet[5] = m;
  packet[6] = s;

  this._writeServiceCharacteristic(MIPSendDataService,
    MIPSendDataWrite,
    packet,
    callback
  );
};

/**
 * Set color bulb device.
 *
 * @param {Number} w red value
 * @param {Number} r red value
 * @param {Number} g green value
 * @param {Number} b blue value
 * @param {Function} callback function to call when done
 * @return {void}
 * @publish
 */
Driver.prototype.setColor = function(w, r, g, b, callback) {
  var packet = new Buffer(5);
  packet[0] = this.Codes.SetColor;
  packet[1] = w;
  packet[2] = r;
  packet[3] = g;
  packet[4] = b;

  this._writeServiceCharacteristic(MIPSendDataService,
    MIPSendDataWrite,
    packet,
    callback
  );
};

/**
 * Turn on lightbulb device.
 *
 * @param {Function} callback function to call when done
 * @return {void}
 * @publish
 */
Driver.prototype.turnOn = function(w, r, g, b, callback) {
  var packet = new Buffer(5);
  packet[0] = this.Codes.SetColor;
  packet[1] = 'ff';
  packet[2] = '00';
  packet[3] = '00';
  packet[4] = '00';

  this._writeServiceCharacteristic(MIPSendDataService,
    MIPSendDataWrite,
    packet,
    callback
  );
};

/**
 * Turn off lightbulb device.
 *
 * @param {Function} callback function to call when done
 * @return {void}
 * @publish
 */
Driver.prototype.turnOff = function(w, r, g, b, callback) {
  var packet = new Buffer(5);
  packet[0] = this.Codes.SetColor;
  packet[1] = '00';
  packet[2] = '00';
  packet[3] = '00';
  packet[4] = '00';

  this._writeServiceCharacteristic(MIPSendDataService,
    MIPSendDataWrite,
    packet,
    callback
  );
};

/**
 * Writes a service characteristic to the MiP
 *
 * @param {Number} s ID of service to write to
 * @param {Number} c ID of characteristic to write to
 * @param {Number} value value to write
 * @param {Function} callback function to call when done
 * @return {void}
 */
Driver.prototype._writeServiceCharacteristic = function(s, c, value, callback) {
  this.connection.writeServiceCharacteristic(s, c, new Buffer(value),
    function(err, data) {
      if (typeof callback === "function") { callback(err, data); }
    }
  );
};
