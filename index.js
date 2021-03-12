/* Dependencies */
const prompt = require('prompt');
const path = require('path');
require('colors');

/* Services */
const getPrimeNumbers = require(path.join(process.cwd(), 'services', 'get-prime-numbers'))

console.log('\n-- Technysis code challenge --\n'.cyan.bold);

/**
 * Prompt the user for a number between 2 and 100000, then print
 * a descending list of all prime numbers starting from it
 */
(() => {
  prompt.delimiter = '';
  prompt.message = 'Please type a number\n'.cyan;

  prompt.start();

  return prompt.get([
    {
      name: 'input',
      type: 'number',
      required: true,
      description: 'Max number:  '.bold.white
    }
  ],
  (err, data) => {
    if (err) {
      console.log('\n\n  Cancelled\n'.bold.yellow);
      process.exit(0);
    }

    try {
      const numbers = getPrimeNumbers(data.input);
      for (const number of numbers) {
        console.log(number);
      }
      process.exit(0);
    } catch (error) {
      console.dir(error.message);
      process.exit(1);
    }
  });
})();
