/* Dependencies */
const randomNumber = require("faker").random.number;
const { randomPrime } = require("random-prime");
const { expect } = require("chai");
const path = require("path");


/* Services */
const isPrime = require(path.join(process.cwd(), "services", "is-prime"));

describe("SERVICE is-prime UNIT TESTS", () => {
  it("Should throw an error on non-numeric values", () => {
    expect(() => {
      isPrime("3");
    }).to.throw(TypeError, 'Input must be a number');
  });

  it("Should return false for a composite number", () => {
    const result = isPrime(randomNumber(100) * randomNumber(100));
    expect(result).to.be.false;
  });

  it("Should return false for a negative number", () => {
    const result = isPrime(-1 * randomNumber());
    expect(result).to.be.false;
  });

  it("Should return true for a prime number", () => {
    const result = isPrime(randomPrime(20));
    expect(result).to.be.true;
  });
});
