'use strict';

/**
 * Create a partial application. What this means is...
 *
 * @function partial
 * @param {Function} fn - The function to create a partial application for.
 * @param {...Obejct} arg1 - Any number of arguments.
 * @return {Function} The partially applied function.
 * @example
 *
 *     var greet = function(greeting, name) {
 *     return util.format(greeting + '' + name)
 *     };
 *
 *     var hi = partial(greet, 'Hi');
 *     hi(Andrea) ==> 'Hi Andrea'
 *
 */
module.exports.partial = function(fn) {
  var args = Array.prototype.slice.call(arguments); // makes array
  console.log(args);
  var partialArgs = args.slice(1); // skips function
  return function() {
    var args2 = Array.prototype.slice.call(arguments); // makes array
    console.log(args2);
    partialArgs = partialArgs.concat(args2); //combines arrays
    return fn.apply({}, partialArgs); //runs array thru function
  };
};
/**
 *
 *
 *
 *
 */
module.exports.partialRight = function(fn) {
  var args = Array.prototype.slice.call(arguments);
  var partialArgs = args.slice(1);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    partialArgs = args2.concat(partialArgs);
    return fn.apply({}, partialArgs);
  }
};
