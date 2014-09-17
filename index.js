'use strict';

/**
 * Document me, please!
 */
module.exports.partial = function(fn) {
  var args = Array.prototype.slice.call(arguments);
  var partialArgs = args.slice(1);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    partialArgs = partialArgs.concat(args2);
    return fn.apply({}, partialArgs);
  };
};

module.exports.partialRight = function(fn) {
  var args = Array.prototype.slice.call(arguments);
  var partialArgs = args.slice(1);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    partialArgs = args2.concat(partialArgs);
    return fn.apply({}, partialArgs);
  }
};