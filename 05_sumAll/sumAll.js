const sumAll = function (min, max) {
  let arr = [min, max];
  let sum = 0;

  for (let i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll([1, 4]));

// Do not edit below this line
module.exports = sumAll;
