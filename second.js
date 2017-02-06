"use strict";

var _ = require('lodash'),

worker = function(collection) {
  return _.sortBy(collection, function(item) {
    return 0 - item.quantity;
  });
};

module.exports = worker;
