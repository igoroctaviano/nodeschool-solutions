"use strict";

var _ = require('lodash'),

worker = function(characters) {
  return _.filter(characters, {
    'active': true
  });
};

module.exports = worker;
