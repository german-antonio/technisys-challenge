/* Dependencies */
const expect = require("chai").expect;
const path = require("path");

/* Services */
const isPrime = require(path.join(process.cwd(), "services", "is-prime"));

describe("isPrime SERVICE UNIT TESTS", () => {
  it("Should return true for a prime number", () => {
    const result = isPrime(7);
    expect(result).to.be.true;
  });

  it("Should return false for a composite number", () => {
    const result = isPrime(10);
    expect(result).to.be.false;
  });
});
