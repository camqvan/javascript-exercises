// newArray = [1, 2, 3, 4];

const removeFromArray = function (newArray, num) {
  spreadArray = [...newArray];
  for (i = 0; i < spreadArray.length; i++) {
    if (spreadArray[i] == num) {
      spreadArray.splice(i, 1); // At the current index, remove one element
    }
  }
  return spreadArray;
};

// Do not edit below this line
module.exports = removeFromArray;
