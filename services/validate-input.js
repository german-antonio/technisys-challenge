'use strict';

/**
 * Validates that given input is of type number and within bounds.
 * Throws an error upon validation failure.
 * @param {*} input The input to validate
 */
function validateInput(input) {
  if (typeof input !== 'number' || isNaN(input)) {
    throw new TypeError('Input must be a number');
  }
  if (input < 2 || input > 100000) {
    throw new Error('Must be in between 2 and 100000');
  }
  if (!Number.isInteger(input)) {
    throw new Error('Must be an integer');
  }
}

module.exports = validateInput;