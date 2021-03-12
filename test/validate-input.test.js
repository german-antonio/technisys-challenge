/* Dependencies */
const expect = require("chai").expect;
const path = require("path");

/* Services */
const validateInput = require(path.join(process.cwd(), "services", "validate-input"));

describe("validateInput SERVICE UNIT TESTS", () => {
  it("Should throw an error on non-numeric values", () => {
    expect(() => {
      validateInput("string");
    }).to.throw(TypeError, 'Input must be a number');
  });

  it("Should throw an error on out of range values", () => {
    expect(() => {
      validateInput(1);
    }).to.throw('Input must be between 2 and 100000');
    expect(() => {
      validateInput(100001);
    }).to.throw('Input must be between 2 and 100000');
  });
});
