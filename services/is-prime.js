/**
 * Checks if given number is prime
 * @param {Number} number The number to check
 * @returns {Boolean} Wether the number is prime
 */
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

module.exports = isPrime;
