const Module = require("node:module");

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Input must be a number ");

    return;
  }
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
