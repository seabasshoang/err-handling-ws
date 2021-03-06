'use strict';


/*
 * 1. Write a function that returns an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should return
 * the combined length of two arrays if it receives correct arguments, and
 * otherwise should return an appropriate error.
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array} a First array
 * @param   {Array} b Second array
 * @returns {Number}  Combined length of a and b
 */
const combinedLength = (a, b) => {
  if (!Array.isArray(a)){
    return new TypeError(`Invalid argument: first argument ${a} is not an array`)
  }else if (!Array.isArray(b)){
    return new TypeError(`Invalid argument: ${b} is not an array`)
  } 
  return a.length + b.length
};


/*
 * 2. Write a function that sums the numbers in an array and returns an error
 *    if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should return
 * the sum of all the elements in the input array. If it receives incorrect
 * arguments, it should return an error.
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array} xs list of numbers
 * @returns {Number}   sum of list
 */
const sumArray = (xs) => {
  if (!Array.isArray(xs)){
    return new TypeError(`Invalid argument: ${xs} is not an array`)
} 
else if (xs.filter(x => x !== "").length !== xs.length) {
  return new TypeError(`Invalid argument: ${xs} contains empty things`)
}
return xs.length === 0 ? 0 : xs.reduce((a,b) => a + b)

}

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
 * @param   {Array}  a First array
 * @param   {Array}  b Second array
 * @returns {String}   Message about the combined arrays
 */
const combineAndPrint = (a, b) => {
  
    const L = combinedLength(a,b);
    const S = sumArray(a) + sumArray(b);
    // console.log(`Combined length: ${L}; Combined sum of elements: ${S}`);
    const result = `Combined length: ${L}; Combined sum of elements: ${S}`
    if (L instanceof Error) {
    console.log('Invalid arguments: both arguments must be arrays');
    return 'Invalid arguments: both arguments must be arrays'
  } 
  else if (S instanceof Error) {
    console.log('Invalid arguments: both arguments must be arrays');
    return 'Invalid arguments: both arguments must be arrays'
  } else {
    return result
  }
};


/*
 * **Stretch goal -- Harder -- Optional**
 *
 * 4. Write a function that wraps another function in an error check
 *
 * Fill in the body of the function `wrapErrorCheck`, which takes a function `fn1`
 * as an argument and returns another function `fn2` which wraps the first in
 * a check for any returned errors.
 *
 * `fn2` should behave exactly like `fn1` except in the case where `fn1` returns an
 * error, in which case `fn2` should simply return `undefined`
 */

/**
 * Wraps given function in error check
 * @param  {Function} fn Function to wrap
 * @return {Function}    Wrapped function
 */
const wrapErrorCheck = (fn) => (...args) => {
  const fn2 = (fn1, args) => {
    console.log({fn1, args})
    console.log("destructured arguments: ", ...args)
    const result = fn1(...args);
    // console.log(result);
    
    if(result instanceof Error){
      return undefined
    }
   else {
    return result
  }
  }

  return fn2(fn, args);
};


module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapErrorCheck,
};
