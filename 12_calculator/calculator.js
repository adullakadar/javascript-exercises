const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const multiply = function(nums) {
  return nums.reduce((product, current) => product * current, 1)
};

const sum = function(numArr) {
  return numArr.reduce((total, current) => total + current, 0);
};

const power = function(num1,num2) {
	return (num1 ** num2);
};

const factorial = function(num) {
	let sum = 1;
  for (let i = 1 ; i <= num ;  i++){
     sum *= i
  }
  return sum;
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
