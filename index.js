/* Dependencies */
const { prompt } = require("inquirer");
const path = require("path");
require("colors");

/* Services */
const getPrimeNumbers = require(path.join(
  process.cwd(),
  "services",
  "get-prime-numbers"
));

console.log("\n---- Technysis code challenge ----\n".cyan.bold);
console.log("\nGet a descending list of prime numbers starting from a max number\n".cyan.bold);

/**
 * Prompt the user for a number between 2 and 100000, then print
 * a descending list of all prime numbers starting from it
 */
(async () => {
  while (true) {
    try {
      const { maxNumber } = await prompt([
        {
          type: "number",
          name: "maxNumber",
          message: "Please type a number: ".white.bold + "(ctrl+C to exit)".gray.dim,
        },
      ]);

      const numbers = getPrimeNumbers(maxNumber);
      console.log(`Prime numbers below ${maxNumber} are:`.green.bold);
      let printNumbers = '';

      for (const number of numbers) {
        printNumbers += `${number}, `
      }
      console.log(printNumbers.slice(0, -2).yellow);
    } catch (error) {
      console.log(error.message.red.bold);
    }
  }
})();
