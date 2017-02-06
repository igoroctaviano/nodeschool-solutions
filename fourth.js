"use strict";

var _ = require('lodash'),

worker = function(collection) {
  var result = {
    hot: [],
    warm: []
  },

  constraint = function(item) {
    return item > 19;
  };

  _.forEach(collection, function(collection, collectionName) {
    if (_.every(collection, constraint))
      result.hot.push(collectionName);
    else if (_.some(collection, constraint))
      result.warm.push(collectionName);
  });

  return result;
};

module.exports = worker;