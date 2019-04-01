"use strict";

/*
 * 1. Write a function that calls its callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should execute the given
 * callback with (null, the combined length of two arrays) if it receives correct
 * arguments, and  otherwise should execute its callback with (an appropriate error).
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array}     a  First array
 * @param   {Array}     b  Second array
 * @param   {Function}  cb Callback
 * @returns {undefined}    Nothing
 */
const combinedLength = (a, b, cb) => {
  if(!Array.isArray(a)){
    cb(new TypeError(`Invalid argument: ${a} is not an array`));
  } else if(!Array.isArray(b)) {
    cb(new TypeError(`Invalid argument: ${b} is not an array`));
  } else {
    const aLength = a.length;
    const bLength = b.length;
    const result = aLength + bLength
    cb(null, result)
  }
};

/*
 * 2. Write a function that sums the numbers in an array and calls its
 *    callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should execute the given
 * callback with (null, the sum of all the elements in the input array). If it
 * receives incorrect arguments, it should execute its callback with (an error).
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array}    xs list of numbers
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */
const sumArray = (xs, cb) => {
  if(!Array.isArray(xs)){
    cb(new TypeError(`Invalid argument: ${xs} is not an array`));
  }

else if (xs.length === 0) {
  cb(null, 0)
}
else if (xs.filter(x => x !== "").length !== xs.length) {
  cb(new TypeError(`Invalid argument: ${xs} contains empty things`))
}

else {
  cb(null, xs.reduce((a,b) => {
    return a + b}
  ))
}
};
/*
 * 3. Write a function that handles errors returned by (1) and (2)
 *
 * Fill in the body of the function `combineAndPrint`, which should find the
 * combined length of two arrays and the total sum of all their elements.
 * If an error occurs, the function should instead print a useful message
 * explaining what went wrong.
 */

/**
 * Returns a string of the format
 *   "Combined length: L; Combined sum of elements: S"
 * Where L is the combined length of the two arrays and S is the sum of the elements of the array
 *
 * The function should use `combinedLength`. In the case of invalid inputs, the
 * function should return the string
 *   "Invalid arguments: both arguments must be arrays"
 * @param   {Array}    a  First array
 * @param   {Array}    b  Second array
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */
const combineAndPrint = (a, b, cb) => {
  const errMsg = 'Invalid arguments: both arguments must be arrays';

  combinedLength(a, b, (err1, L) => {
   //CODE HERE
  });
};

module.exports = {
  combineAndPrint,
  combinedLength,
  sumArray
};
