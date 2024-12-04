const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((a, b) => {
    a + b;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let product = 0;
  for (let i = n; i > 0; i--) {
    product *= 1;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
