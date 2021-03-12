/* Dependencies */
const { prompt } = require('inquirer');
const path = require('path');
require('colors');

/* Services */
const getPrimeNumbers = require(path.join(process.cwd(), 'services', 'get-prime-numbers'))

console.log('\n-- Technysis code challenge --\n'.cyan.bold);
console.log('\nGet a descending list of prime numbers starting from a max number\n'.cyan.bold);

/**
 * Prompt the user for a number between 2 and 100000, then print
 * a descending list of all prime numbers starting from it
 */
(async () => {
  const { maxNumber } = await prompt([
    {
      type:'number',
      name: 'maxNumber',
      message: 'Please type the max number:  '.bold.white,
    }
  ]);

  try {
    const numbers = getPrimeNumbers(maxNumber);
    for (const number of numbers) {
      console.log(number);
    }
    process.exit(0);
  } catch (error) {
    console.dir(error.message);
    process.exit(1);
  }
})();
