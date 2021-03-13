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

console.log("\n---- Technisys code challenge ----\n".cyan.bold);
console.log("\nGet a descending list of prime numbers starting from a max number\n".cyan.bold);

if (process.platform === "win32") {
  // Gracefully exit on windows
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readLine.on("SIGINT", () => {
    process.emit("SIGINT");
  });
}

process.on('SIGINT', () => {
  process.exit(0);
});

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
        }
      ]);

      const primeNumbers = getPrimeNumbers(maxNumber);
      console.log(`Prime numbers below ${maxNumber} are:`.green.bold);

      let printNumbers = '';
      for (const number of primeNumbers) {
        printNumbers += `${number}, `
      }
      console.log(printNumbers.slice(0, -2).yellow);
    } catch (error) {
      console.log(error.message.red.bold);
    }
  }
})();
