'use strict';

/* Dependencies */
const randomNumber = require("faker").random.number;
const { expect } = require("chai");
const path = require("path");

/* Services */
const getPrimeNumbers = require(path.join(process.cwd(), "services", "get-prime-numbers"));
const isPrime = require(path.join(process.cwd(), "services", "is-prime"));

describe("SERVICE get-prime-numbers UNIT TESTS", () => {
  it("Should return an array with prime numbers only", () => {
    const result = getPrimeNumbers(randomNumber(100000));
    for (const number of result) {
      expect(isPrime(number)).to.be.true;
    }
  });

  it("Should return an array with numbers within range only", () => {
    const input = randomNumber(100000);
    const result = getPrimeNumbers(input);
    for (const number of result) {
      expect(number).to.not.be.greaterThan(input);
    }
  });
});
