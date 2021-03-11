/* Dependencies */
const path = require('path');

/* Services */
const getPrimeNumbers = require(path.join(process.cwd(), 'services', 'get-prime-numbers'))

console.log(getPrimeNumbers(input));
