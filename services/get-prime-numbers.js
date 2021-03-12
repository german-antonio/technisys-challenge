/* Dependencies */
const path = require('path');

/* Services */
const validateInput = require(path.join(process.cwd(), 'services', 'validate-input'));
const isPrime = require(path.join(process.cwd(), 'services', 'is-prime'));

/**
 * Gets a desc. list of all prime numbers between 2 and a given number
 * @param {Number} topNumber The max number in the range to print
 * @returns {Number[]} An array of prime numbers
 */
function getPrimeNumbers(topNumber) {
  validateInput(topNumber);
  const result = [];

  for (let currNumber = topNumber; currNumber > 1; currNumber--) {
    if (isPrime(currNumber)) result.push(currNumber);
  }

  return result;
}

module.exports = getPrimeNumbers;