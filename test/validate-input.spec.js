'use strict';

/* Dependencies */
const { expect } = require("chai");
const path = require("path");

/* Services */
const validateInput = require(path.join(process.cwd(), "services", "validate-input"));

describe("SERVICE validate-input UNIT TESTS", () => {
  it("Should throw an error on non-numeric values", () => {
    expect(() => {
      validateInput("2");
    }).to.throw(TypeError);
  });

  it("Should throw an error on out of range values", () => {
    expect(() => {
      validateInput(1);
    }).to.throw();
    expect(() => {
      validateInput(100001);
    }).to.throw();
  });

  it("Should throw an error on non integer numbers", () => {
    expect(() => {
      validateInput(5.3);
    }).to.throw();
  });
});
