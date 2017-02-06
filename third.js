var _ = require('lodash'),

worker = function(collection) {
  return _.forEach(collection, function(item) {
    item.size = item.population >= 1.000 ? 'big'
              : item.population > 0.500 ? 'med' : 'small';
  });
};

module.exports = worker;