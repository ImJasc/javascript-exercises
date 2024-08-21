const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	const sum = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sum;
};

const multiply = function(arr) {
  const multiply = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return multiply;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
