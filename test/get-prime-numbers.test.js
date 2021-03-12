/* Dependencies */
const expect = require("chai").expect;
const path = require("path");

/* Services */
const getPrimeNumbers = require(path.join(process.cwd(), "services", "get-prime-numbers"));
const isPrime = require(path.join(process.cwd(), "services", "is-prime"));

describe("getPrimeNumbers SERVICE UNIT TESTS", () => {
  it("Should return an error for non numeric input", () => {
    // TODO: Implement this test
  });

  it("Should return an array with only prime numbers", () => {
    const result = getPrimeNumbers(10);
    for (const number of result) {
      expect(isPrime(number)).to.be.true;
    }
  });

  it("All numbers should be within range", () => {
    const input = 15;
    const result = getPrimeNumbers(input);
    for (const number of result) {
      expect(number).to.not.be.greaterThan(input);
    }
  });
});
